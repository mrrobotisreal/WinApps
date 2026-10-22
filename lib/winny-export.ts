/**
 * Builds Winny's knowledge-base files from content/. Pure: returns
 * { "<relative path>": "<file body>" }; scripts/export-winny.ts writes them.
 * Doc shape matches winapps-api/internal/content/loader.go: "# Title", then
 * Route / Canonical URL / Category bullets and the Winny sections.
 */
import { blog } from "@/content/blog";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import type { Experience, Project } from "@/content/schema";
import { site } from "@/content/site";
import { experienceToMarkdown, profileToMarkdown, projectToMarkdown } from "./markdown-export";
import { formatDateRange, formatYearMonth } from "./prose";

const present = site.copy.labels.present;
const abs = (route: string) => (route === "/" ? site.baseUrl : `${site.baseUrl}${route}`);

/** Extra search terms per slug, beyond names, slugs and tech. */
const ALIASES: Record<string, string[]> = {
  sumrak: ["Sumrak", "Сумрак", "Russian learning", "language learning", "ТРКИ", "TORFL", "FSRS", "creepypasta", "Alina"],
  "media-manipulator": ["Darkroom", "Content Studio", "video editor", "media converter", "AI restoration", "document scan"],
  creatv: ["CreaTV Studio", "creator platform", "video platform", "streaming", "creatv.io"],
  "people-inc": ["People app", "prebid", "prebidding", "Nimbus", "Liftoff", "Vungle", "GAM", "GMA", "ad revenue", "mute bug"],
  mirror: ["AI interviews", "trymirror", "founding engineer"],
  "double-raven-2025": ["ODIN", "OSINT", "detectives", "missing persons", "Neo4j"],
  "double-raven-2020": ["ODIN", "OSINT", "detectives", "geomapping", "identity resolution"],
  "amazon-connect": ["AWS", "Customer Profiles", "Customer Segments", "contact record template"],
  vmware: ["Spring Boot", "Kubernetes", "TDD"],
};

interface DocInput {
  title: string;
  route: string;
  category: string;
  notes: string[];
  keywords: string[];
  links: string[];
  snapshot: string;
}

function doc({ title, route, category, notes, keywords, links, snapshot }: DocInput): string {
  const kw = [...new Set([route.replace(/^\//, "") || "home", ...keywords].map((k) => k.trim()).filter(Boolean))];
  return [
    `# ${title}`,
    "",
    `- Route: \`${route}\``,
    `- Canonical URL: \`${abs(route)}\``,
    `- Category: \`${category}\``,
    "",
    "## Purpose",
    "Generated from the winapps.io content layer (winapps_next/content) by `npm run export:winny`. Do not edit by hand.",
    "",
    "## Winny Notes",
    ...notes.map((n) => `- ${n}`),
    "",
    "## Search Keywords",
    kw.map((k) => `\`${k}\``).join(", "),
    "",
    "## Important Links",
    ...links.map((l) => `- ${l}`),
    "",
    "## Page Content Snapshot",
    "",
    snapshot.trim(),
    "",
  ].join("\n");
}

const projectNotes = (p: Project) => [
  `Status: ${p.status}; ${p.role}; ${formatDateRange(p.start, p.end, present)}.`,
  p.slug === "sumrak" ? "Сумрак is private and will never be in an app store; there is no public repo or download." : "",
  p.slug === "creatv" ? "CreaTV is public with creators onboarding; auth is moving from Supabase to Firebase." : "",
  "Never state dollar figures or revenue numbers.",
].filter(Boolean);

const experienceNotes = (e: Experience) => [
  `Status: ${e.title} at ${e.company}, ${formatDateRange(e.start, e.end, present)} (${site.copy.labels.employment[e.employment]}).`,
  e.end === null ? "This role is ongoing." : `This role has ended (${formatYearMonth(e.end)}). Never describe it as current.`,
  e.slug === "people-inc" ? "Impact is qualitative only: never give a dollar figure or percentage for People Inc revenue." : "",
].filter(Boolean);

/** Routes whose pages are untouched by the revamp; their previous snapshots are reused. */
export const PRESERVED_ROUTES = [
  "/download/creatv-mobile/android",
  "/download/mp3-drive-player/android",
  "/download/mp3-drive-player/ios",
  "/products/journey-app/privacy-policy",
  "/products/journey-app/terms-of-use",
  "/products/journey-app/contact",
  "/products/journey-app/contact/form",
  "/projects/voizy/documentation",
  "/projects/voizy/privacy-policy",
  "/projects/voizy/support",
  "/projects/text-formatter/privacy-policy",
  ...["a-new-circle-of-love-she-said-yes", "austria", "austria-2", "frankfurt", "gabe-christmas-concert-2025", "koala-ventures", "new-york", "paris", "portugal", "portugal-photoshoot", "rome-stria"].map(
    (a) => `/redirects/photos/albums/${a}`
  ),
];

const fileFor = (route: string) => (route === "/" ? "page.md" : `${route.slice(1)}/page.md`);

/** The previous doc with its header refreshed (canonical host, Purpose) and its snapshot kept. */
function refreshPreserved(route: string, previous: string): string {
  const title = previous.match(/^# (.+)$/m)?.[1] ?? route;
  const category = previous.match(/- Category: `([^`]+)`/)?.[1] ?? route.split("/")[1];
  const section = (name: string) =>
    previous.match(new RegExp(`## ${name}\\n([\\s\\S]*?)(?=\\n## |$)`))?.[1].trim() ?? "";
  const bullets = (text: string) => text.split("\n").map((l) => l.replace(/^- /, "").trim()).filter(Boolean);
  const keywords = section("Search Keywords").split(",").map((k) => k.replace(/`/g, "").trim());
  const links = bullets(section("Important Links")).map((l) => l.replace("https://winapps.io", site.baseUrl));
  return doc({
    title,
    route,
    category,
    notes: [...bullets(section("Winny Notes")), "This page is unchanged by the 2026 site revamp."],
    keywords,
    links,
    snapshot: section("Page Content Snapshot") || title,
  });
}

/** Facts block for the system prompt (internal/content/facts.md, a non-route doc). */
export function factsMarkdown(): string {
  const current = experience.filter((e) => e.end === null);
  const ended = experience.filter((e) => e.end !== null);
  const flagship = projects.filter((p) => p.tier === "hero" || p.tier === "flagship");
  return [
    "# Facts about Mitch",
    "",
    `- Name: ${profile.name} (goes by ${profile.shortName}). ${profile.title}. Location: ${profile.location}.`,
    `- Email: ${profile.email}. Site: ${site.baseUrl}.`,
    ...current.map((e) => `- Current role: ${e.title} at ${e.company} since ${formatYearMonth(e.start)}. ${e.summary}`),
    ...ended.map((e) => `- Past role (ended ${formatYearMonth(e.end!)}): ${e.title} at ${e.company}, ${formatDateRange(e.start, e.end, present)}.`),
    ...flagship.map((p) => `- Project: ${p.displayName ?? p.name} (${p.status}): ${p.tagline}`),
    `- Languages he is learning: ${profile.languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(", ")}.`,
    "- Mirror Inc.: the contract ended in May 2026. Mirror is a past role only.",
    "- Never give dollar figures or percentages for People Inc revenue impact; describe it qualitatively.",
    "",
  ].join("\n");
}

/**
 * Every Winny doc keyed by its path relative to internal/content.
 * `previous(file)` returns the old file body (used to keep preserved snapshots).
 */
export function buildWinnyDocs(previous: (file: string) => string | undefined): Record<string, string> {
  const { pages } = site.copy;
  const docs: Record<string, string> = {};
  const add = (route: string, body: string) => (docs[fileFor(route)] = body);
  const withPages = projects.filter((p) => p.tier !== "archive");
  const archive = projects.filter((p) => p.tier === "archive");

  add(
    "/",
    doc({
      title: pages.home.title,
      route: "/",
      category: "home",
      notes: [
        "Home page: hero, the Сумрак feature, flagship projects, work history, more projects, writing, skills.",
        "What Mitch is building now: Сумрак. Flagships: Media Manipulator and CreaTV.",
      ],
      keywords: [profile.name, profile.shortName, "WinApps", "home", ...withPages.map((p) => p.name)],
      links: [abs("/projects/sumrak"), abs("/projects"), abs("/portfolio"), abs("/contact")],
      snapshot: [profile.positioning, ...profile.bio].join("\n\n"),
    })
  );
  add(
    "/about",
    doc({
      title: pages.about.title,
      route: "/about",
      category: "about",
      notes: ["Biography, education, languages and life outside work."],
      keywords: ["about", "bio", "education", "WGU", "Hack Reactor", ...profile.languages.map((l) => l.name)],
      links: [abs("/contact"), abs("/portfolio")],
      snapshot: profileToMarkdown(),
    })
  );
  add(
    "/contact",
    doc({
      title: pages.contact.title,
      route: "/contact",
      category: "contact",
      notes: [`Email is the fastest way to reach Mitch: ${profile.email}. Resume downloads are on this page.`],
      keywords: ["contact", "email", "resume", "hire", ...profile.socials.map((s) => s.label)],
      links: [`mailto:${profile.email}`, abs(profile.resume.pdf), ...profile.socials.map((s) => s.href)],
      snapshot: [pages.contact.intro, `Email: ${profile.email}`, ...profile.socials.map((s) => `${s.label}: ${s.href}`)].join("\n"),
    })
  );
  add(
    "/blog",
    doc({
      title: pages.blog.title,
      route: "/blog",
      category: "blog",
      notes: ["Posts are hosted on Medium and JavaScript in Plain English; the site links out."],
      keywords: ["blog", "articles", "Medium", ...blog.map((b) => b.title)],
      links: blog.map((b) => b.href),
      snapshot: blog.map((b) => `- ${b.title} (${b.publisher}, ${formatYearMonth(b.date)}): ${b.summary} ${b.href}`).join("\n"),
    })
  );
  add(
    "/portfolio",
    doc({
      title: pages.portfolio.title,
      route: "/portfolio",
      category: "portfolio",
      notes: ["Work history in order, newest first. Hack Reactor is education, not work history."],
      keywords: ["work history", "experience", "jobs", "resume", ...experience.map((e) => e.company)],
      links: experience.map((e) => abs(`/portfolio/${e.slug}`)),
      snapshot: experience
        .map((e) => `- ${e.title}, ${e.company} (${formatDateRange(e.start, e.end, present)}): ${e.summary}`)
        .join("\n"),
    })
  );
  for (const e of experience) {
    add(
      `/portfolio/${e.slug}`,
      doc({
        title: `${e.title}, ${e.company}`,
        route: `/portfolio/${e.slug}`,
        category: "portfolio",
        notes: experienceNotes(e),
        keywords: [e.company, e.shortName, e.title, ...e.tech, ...(ALIASES[e.slug] ?? [])],
        links: e.links.map((l) => l.href),
        snapshot: experienceToMarkdown(e),
      })
    );
  }
  add(
    "/projects",
    doc({
      title: pages.projects.title,
      route: "/projects",
      category: "projects",
      notes: [
        "Hero: Сумрак. Flagships: Media Manipulator, CreaTV. Archived projects have no page of their own.",
        "Only the projects listed here exist; if asked about any other project, say it is not on the site.",
      ],
      keywords: ["projects", "apps", ...projects.map((p) => p.name)],
      links: withPages.map((p) => abs(`/projects/${p.slug}`)),
      snapshot: [
        ...withPages.map((p) => `- ${p.displayName ?? p.name} (${p.tier}, ${p.status}): ${p.tagline}`),
        "",
        "Archived:",
        ...archive.map((p) => `- ${p.name} (${formatDateRange(p.start, p.end, present)}): ${p.summary[0]} ${p.links.map((l) => l.href).join(" ")}`),
      ].join("\n"),
    })
  );
  for (const p of withPages) {
    add(
      `/projects/${p.slug}`,
      doc({
        title: p.displayName ?? p.name,
        route: `/projects/${p.slug}`,
        category: "projects",
        notes: projectNotes(p),
        keywords: [p.name, p.displayName ?? "", ...p.tech, ...(ALIASES[p.slug] ?? [])],
        links: p.links.map((l) => (l.href.startsWith("/") ? abs(l.href) : l.href)),
        snapshot: projectToMarkdown(p),
      })
    );
  }
  for (const route of PRESERVED_ROUTES) {
    const old = previous(fileFor(route));
    if (old) add(route, refreshPreserved(route, old));
  }

  docs["facts.md"] = factsMarkdown();

  const routes = Object.keys(docs)
    .filter((f) => f.endsWith("page.md"))
    .map((f) => (f === "page.md" ? "/" : `/${f.replace(/\/page\.md$/, "")}`))
    .sort();
  const titleOf = (route: string) => docs[fileFor(route)].match(/^# (.+)$/m)?.[1] ?? route;
  docs["sitemap.txt"] = routes.map((r) => `${r} | ${titleOf(r)} | internal/content/${fileFor(r)}`).join("\n") + "\n";
  docs["sitemap.md"] =
    [
      "# Winny Content Sitemap",
      "",
      "Maps each live winapps.io route to its markdown doc under `internal/content/**`. Generated by `npm run export:winny`.",
      "",
      ...routes.map((r) => `- \`${r}\` -> \`internal/content/${fileFor(r)}\` (${titleOf(r)})`),
    ].join("\n") + "\n";
  return docs;
}
