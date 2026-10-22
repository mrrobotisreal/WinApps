import { describe, expect, it } from "vitest";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { buildWinnyDocs, factsMarkdown, PRESERVED_ROUTES } from "@/lib/winny-export";

const fakePrevious = (file: string) =>
  file.startsWith("redirects/") || file.startsWith("download/") || file.startsWith("products/") || /privacy|support|documentation/.test(file)
    ? `# Old ${file}\n\n- Route: \`x\`\n- Category: \`legacy\`\n\n## Winny Notes\n- old note\n\n## Search Keywords\n\`a\`, \`b\`\n\n## Important Links\n- https://winapps.io/\n\n## Page Content Snapshot\n\nOld snapshot text.\n`
    : undefined;

const docs = buildWinnyDocs(fakePrevious);
const files = Object.keys(docs);
const all = Object.values(docs).join("\n");

describe("winny export", () => {
  it("writes a doc for every live content route and none for dead ones", () => {
    for (const p of projects.filter((p) => p.tier !== "archive")) expect(files).toContain(`projects/${p.slug}/page.md`);
    for (const e of experience) expect(files).toContain(`portfolio/${e.slug}/page.md`);
    for (const f of ["page.md", "about/page.md", "contact/page.md", "blog/page.md", "portfolio/page.md", "projects/page.md", "facts.md", "sitemap.md", "sitemap.txt"])
      expect(files).toContain(f);
    for (const dead of ["rss-today", "media-manipulator-pro", "flashmock", "aspire-to-expand", "about/mitchell-wintrow", "portfolio/double-raven/page.md"])
      expect(files.filter((f) => f.includes(dead))).toEqual([]);
    expect(files).not.toContain("products/journey-app/page.md");
  });

  it("keeps preserved routes with their old snapshot and the www canonical", () => {
    expect(files.filter((f) => f.startsWith("redirects/")).length).toBe(11);
    const paris = docs["redirects/photos/albums/paris/page.md"];
    expect(paris).toContain("Old snapshot text.");
    expect(paris).toContain("https://www.winapps.io/redirects/photos/albums/paris");
    expect(PRESERVED_ROUTES).toHaveLength(22);
  });

  it("uses the header shape the Go loader reads", () => {
    const sumrak = docs["projects/sumrak/page.md"];
    expect(sumrak).toMatch(/^# Сумрак \(Sumrak\)\n\n- Route: `\/projects\/sumrak`\n- Canonical URL: `https:\/\/www\.winapps\.io\/projects\/sumrak`\n- Category: `projects`/);
    for (const h of ["## Winny Notes", "## Search Keywords", "## Important Links", "## Page Content Snapshot"]) expect(sumrak).toContain(h);
    expect(sumrak).toContain("`Darkroom`".replace("Darkroom", "Sumrak"));
  });

  it("says Mirror ended and never calls it current", () => {
    expect(factsMarkdown()).toContain("ended in May 2026");
    expect(docs["portfolio/mirror/page.md"]).toContain("This role has ended (May 2026)");
    expect(all).not.toMatch(/Mirror[^.\n]*\bcurrent(ly)? (role|job|employer)/i);
  });

  it("obeys the content rules", () => {
    expect(all).not.toContain("[VERIFY");
    expect(all).not.toMatch(/\$\s?\d/);
    expect(all).not.toMatch(/FlashMock|RSS Today|Carvana/);
    expect(all).not.toMatch(/doubleraven|dr\.media-manipulator/i);
  });
});
