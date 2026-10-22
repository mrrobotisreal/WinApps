import { describe, expect, it } from "vitest";
import { blog } from "@/content/blog";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { promos } from "@/content/promos";
import { Experience, Project } from "@/content/schema";
import { site } from "@/content/site";

/** Every string value reachable from `value`, with its JSON path. */
function strings(value: unknown, path = "$"): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => strings(v, `${path}.${k}`));
  }
  return [];
}

/** Every object with a `kind` of image/video, i.e. every Media value. */
function media(value: unknown): Array<{ src: string; poster?: string; alt: string }> {
  if (Array.isArray(value)) return value.flatMap(media);
  if (value && typeof value === "object") {
    const v = value as Record<string, unknown>;
    const self = v.kind === "image" || v.kind === "video" ? [v as never] : [];
    return [...self, ...Object.values(v).flatMap(media)];
  }
  return [];
}

const modules: Record<string, unknown> = { site, profile, experience, projects, blog, promos };
const everything = Object.values(modules);
const peopleInc = experience.find((e) => e.slug === "people-inc");

describe("content modules", () => {
  it("re-parse cleanly through their schemas", () => {
    for (const e of experience) expect(() => Experience.parse(e), e.slug).not.toThrow();
    for (const p of projects) expect(() => Project.parse(p), p.slug).not.toThrow();
  });

  it("contain no unresolved [VERIFY markers", () => {
    expect(strings(everything).filter(([, s]) => s.includes("[VERIFY"))).toEqual([]);
  });

  it("never mention dropped projects", () => {
    const banned = /RSS Today|Carvana|FlashMock/i;
    expect(strings(everything).filter(([, s]) => banned.test(s))).toEqual([]);
  });

  it("serve every media file over https or from /public", () => {
    const bad = media(everything).flatMap((m) =>
      [m.src, m.poster]
        .filter((src): src is string => src !== undefined)
        .filter((src) => !src.startsWith("https://") && !src.startsWith("/"))
    );
    expect(bad).toEqual([]);
  });

  it("give every media item real alt text", () => {
    const bad = media(everything).filter((m) => !m.alt.trim() || /screenshot of/i.test(m.alt));
    expect(bad).toEqual([]);
  });

  it("never use a Media Manipulator asset from R2 (old brand)", () => {
    const mm = projects.find((p) => p.slug === "media-manipulator");
    const r2 = media(mm).filter((m) => m.src.includes(".r2.dev"));
    expect(r2).toEqual([]);
  });
});

describe("projects", () => {
  it("have unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("use the hero tier exactly once and flagship exactly twice", () => {
    expect(projects.filter((p) => p.tier === "hero").map((p) => p.slug)).toEqual(["sumrak"]);
    expect(projects.filter((p) => p.tier === "flagship").map((p) => p.slug)).toEqual([
      "media-manipulator",
      "creatv",
    ]);
  });

  it("are sorted by a unique order", () => {
    const orders = projects.map((p) => p.order);
    expect(new Set(orders).size).toBe(orders.length);
    expect([...orders].sort((a, b) => a - b)).toEqual(orders);
  });

  it("leave archive-tier sections empty", () => {
    for (const p of projects.filter((p) => p.tier === "archive")) expect(p.sections, p.slug).toEqual([]);
  });

  it("never mention Double Raven (the MM partner portal is private)", () => {
    expect(strings(projects).filter(([, s]) => /double raven/i.test(s))).toEqual([]);
  });
});

describe("sumrak case study", () => {
  const sumrak = projects.find((p) => p.slug === "sumrak")!;

  it("has the approved sections in order", () => {
    expect(sumrak.sections.map((s) => s.id)).toEqual([
      "overview",
      "content",
      "voices",
      "reader",
      "review",
      "speech",
      "scenarios",
      "exam",
      "sync",
      "progress",
      "process",
    ]);
  });

  it("gives every video a local poster and never links a repo or store", () => {
    const videos = media(sumrak).filter((m) => (m as { kind?: string }).kind === "video");
    expect(videos.length).toBeGreaterThanOrEqual(3);
    for (const v of videos) expect(v.poster, v.src).toMatch(/^\/sumrak\/.+-poster\.jpg$/);
    expect(sumrak.links).toEqual([]);
    const sectionLinks = sumrak.sections.flatMap((s) => s.links ?? []);
    expect(sectionLinks.map((l) => new URL(l.href).hostname)).toEqual(["elevenlabs.io", "elevenlabs.io"]);
    expect(strings(sumrak).filter(([, s]) => /github\.com|play\.google|apps\.apple/.test(s))).toEqual([]);
  });

  it("mentions the iOS port exactly once outside the summary", () => {
    const hits = strings(sumrak.sections).filter(([, s]) => /iOS port/.test(s));
    expect(hits).toHaveLength(1);
  });
});

describe("media manipulator case study", () => {
  const mm = projects.find((p) => p.slug === "media-manipulator")!;

  it("has the six approved sections in order", () => {
    expect(mm.sections.map((s) => s.id)).toEqual(["overview", "darkroom", "tools", "ai", "backend", "frontend"]);
  });

  it("never mentions the private partner portal or the old Pro name", () => {
    expect(strings(mm).filter(([, s]) => /double raven|doubleraven|\/dr\b|Pro\b/i.test(s))).toEqual([]);
  });

  it("links only the two public URLs", () => {
    expect(mm.links.map((l) => l.href)).toEqual([
      "https://www.media-manipulator.com",
      "https://www.media-manipulator.com/tools/content-studio",
    ]);
  });
});

describe("creatv case study", () => {
  const creatv = projects.find((p) => p.slug === "creatv")!;

  it("has the six approved sections in order", () => {
    expect(creatv.sections.map((s) => s.id)).toEqual([
      "overview",
      "architecture",
      "studio",
      "mobile",
      "operations",
      "status",
    ]);
  });

  it("stays plain: no hype, no Rumble, no emoji", () => {
    const banned = /amazing|outshines|much better|Rumble|\p{Extended_Pictographic}/iu;
    expect(strings(creatv).filter(([, s]) => banned.test(s))).toEqual([]);
  });
});

describe("experience", () => {
  it("has unique slugs and the decided order", () => {
    expect(experience.map((e) => e.slug)).toEqual([
      "people-inc",
      "mirror",
      "double-raven-2025",
      "amazon-connect",
      "vmware",
      "double-raven-2020",
    ]);
  });

  it("ends Mirror in 2026-05", () => {
    expect(experience.find((e) => e.slug === "mirror")?.end).toBe("2026-05");
  });

  it("keeps People Inc text free of dollar figures", () => {
    expect(strings(peopleInc).filter(([, s]) => /\$\s?\d/.test(s))).toEqual([]);
  });

  it("only names Mirror inside the Mirror entry (and its derived nav link)", () => {
    const outside = strings({
      ...modules,
      site: { ...site, nav: [] },
      experience: experience.filter((e) => e.slug !== "mirror"),
    });
    expect(outside.filter(([, s]) => /\bMirror\b/.test(s))).toEqual([]);
  });

  it("builds the Work menu from experience, one link per company", () => {
    const work = site.nav.find((n) => n.label === "Work")?.children?.map((c) => c.label);
    expect(work).toEqual(["People Inc", "Mirror", "Double Raven", "Amazon Connect", "VMware", "All"]);
  });
});

describe("profile and site", () => {
  it("mentions Alina exactly once, as Ukrainian, on the Сумрак project", () => {
    const hits = strings(everything).filter(([, s]) => s.includes("Alina"));
    expect(hits).toHaveLength(1);
    expect(hits[0][1]).toContain("Ukrainian");
    expect(projects.find((p) => p.slug === "sumrak")?.summary.join(" ")).toContain("Alina");
  });

  it("lists exactly Russian, Ukrainian and Hebrew", () => {
    expect(profile.languages.map((l) => l.name)).toEqual(["Russian", "Ukrainian", "Hebrew"]);
  });

  it("links every nav child to a known route", () => {
    const known = new Set([
      "/projects",
      "/portfolio",
      ...projects.map((p) => `/projects/${p.slug}`),
      ...experience.map((e) => `/portfolio/${e.slug}`),
    ]);
    const children = site.nav.flatMap((n) => n.children ?? []);
    expect(children.filter((c) => !known.has(c.href))).toEqual([]);
  });

  it("uses the www canonical domain", () => {
    expect(site.baseUrl).toBe("https://www.winapps.io");
  });
});

describe("blog and promos", () => {
  it("lists blog posts newest first", () => {
    const dates = blog.map((b) => b.date);
    expect([...dates].sort().reverse()).toEqual(dates);
  });

  it("has exactly the two promo slots", () => {
    expect(promos.map((p) => p.id).sort()).toEqual(["home-bottom", "home-top"]);
  });
});
