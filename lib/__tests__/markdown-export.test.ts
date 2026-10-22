import { describe, expect, it } from "vitest";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import {
  experienceToMarkdown,
  fullSiteMarkdown,
  profileToMarkdown,
  projectToMarkdown,
  siteIndexMarkdown,
} from "@/lib/markdown-export";

const sumrak = projects.find((p) => p.slug === "sumrak")!;
const people = experience.find((e) => e.slug === "people-inc")!;
const full = fullSiteMarkdown();

describe("markdown export", () => {
  it("renders a project with headings, numbers and media", () => {
    const md = projectToMarkdown(sumrak);
    expect(md.startsWith("# Сумрак (Sumrak)\n")).toBe(true);
    expect(md).toContain("## What it is");
    expect(md).toContain("| Content packs | 122 |");
    expect(md).toMatch(/- image: .+ — https:\/\//);
  });

  it("renders a role with highlights and sections", () => {
    const md = experienceToMarkdown(people);
    expect(md).toContain("# Senior Software Engineer, People Inc.");
    expect(md).toContain("## Highlights");
    expect(md).toContain("## The ad stack");
  });

  it("keeps the llms.txt index small and linked", () => {
    const idx = siteIndexMarkdown();
    expect(idx.startsWith("# Mitch Wintrow")).toBe(true);
    expect(new TextEncoder().encode(idx).length).toBeLessThanOrEqual(6 * 1024);
    for (const p of projects.filter((p) => p.tier !== "archive")) expect(idx).toContain(`/projects/${p.slug}.md`);
    for (const e of experience) expect(idx).toContain(`/portfolio/${e.slug}.md`);
  });

  it("includes every section in full", () => {
    for (const s of sumrak.sections) for (const p of s.paragraphs) expect(full).toContain(p);
    for (const h of people.highlights) expect(full).toContain(h);
    expect(full).toContain(profileToMarkdown());
  });

  it("obeys the content rules", () => {
    expect(full).not.toContain("[VERIFY");
    expect(full).not.toMatch(/doubleraven|dr\.media-manipulator|api\.doubleraven/i);
    expect(experienceToMarkdown(people)).not.toMatch(/\$\s?\d/);
    expect(full).not.toMatch(/RSS Today|Carvana|FlashMock/);
  });
});
