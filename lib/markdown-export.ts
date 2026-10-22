/**
 * Content → markdown, for /llms.txt, /llms-full.txt, the per-entry .md routes and
 * the Winny exporter (W12). Pure functions over the content modules.
 */
import { blog } from "@/content/blog";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import type { Experience, Media, Project, Section } from "@/content/schema";
import { site } from "@/content/site";
import { formatDateRange, formatYearMonth } from "./prose";

const present = site.copy.labels.present;
const abs = (path: string) => (path.startsWith("http") ? path : `${site.baseUrl}${path === "/" ? "" : path}`);

/** Archive projects have no page; everything else gets a page and a .md document. */
export const projectsWithPages = () => projects.filter((p) => p.tier !== "archive");
export const projectMarkdownPath = (slug: string) => `/projects/${slug}.md`;
export const experienceMarkdownPath = (slug: string) => `/portfolio/${slug}.md`;

function mediaLines(items: Media[]): string[] {
  return items.map((m) => `- ${m.kind}: ${m.alt} — ${abs(m.src)}`);
}

function sectionsMarkdown(sections: Section[], level = "##"): string[] {
  return sections.flatMap((s) => [
    `${level} ${s.heading}`,
    "",
    ...s.paragraphs.flatMap((p) => [p, ""]),
    ...(s.bullets ? [...s.bullets.map((b) => `- ${b}`), ""] : []),
    ...(s.audio ? [...s.audio.map((a) => `- audio: ${a.title}: ${a.description} — ${abs(a.sources[0].src)}`), ""] : []),
    ...(s.links ? [...s.links.map((l) => `- [${l.label}](${abs(l.href)})`), ""] : []),
  ]);
}

export function projectToMarkdown(project: Project): string {
  const title = project.displayName ?? project.name;
  const lines = [
    `# ${title}`,
    "",
    `> ${project.tagline}`,
    "",
    `- Status: ${project.status}`,
    `- Role: ${project.role}`,
    `- Dates: ${formatDateRange(project.start, project.end, present)}`,
    `- Page: ${abs(`/projects/${project.slug}`)}`,
    "",
    ...project.summary.flatMap((p) => [p, ""]),
  ];
  if (project.numbers.length > 0) {
    lines.push("## In numbers", "", "| Metric | Value |", "| --- | --- |");
    lines.push(...project.numbers.map((n) => `| ${n.label} | ${n.value} |`), "");
  }
  lines.push(...sectionsMarkdown(project.sections));
  if (project.tech.length > 0) lines.push("## Tech", "", project.tech.join(", "), "");
  if (project.links.length > 0) {
    lines.push("## Links", "", ...project.links.map((l) => `- [${l.label}](${abs(l.href)})`), "");
  }
  const allMedia = [
    ...(project.media.hero ? [project.media.hero] : []),
    ...project.media.gallery.filter((m) => m.src !== project.media.hero?.src),
  ];
  if (allMedia.length > 0) lines.push("## Media", "", ...mediaLines(allMedia), "");
  return lines.join("\n").trimEnd() + "\n";
}

export function experienceToMarkdown(entry: Experience): string {
  const lines = [
    `# ${entry.title}, ${entry.company}`,
    "",
    `> ${entry.summary}`,
    "",
    `- Dates: ${formatDateRange(entry.start, entry.end, present)}`,
    `- Employment: ${site.copy.labels.employment[entry.employment]}`,
    `- Page: ${abs(`/portfolio/${entry.slug}`)}`,
    "",
    `## ${site.copy.labels.highlights}`,
    "",
    ...entry.highlights.map((h) => `- ${h}`),
    "",
    ...sectionsMarkdown(entry.sections),
  ];
  if (entry.tech.length > 0) lines.push("## Tech", "", entry.tech.join(", "), "");
  if (entry.links.length > 0) lines.push("## Links", "", ...entry.links.map((l) => `- [${l.label}](${abs(l.href)})`), "");
  return lines.join("\n").trimEnd() + "\n";
}

export function profileToMarkdown(): string {
  const lines = [
    `# About ${profile.name}`,
    "",
    `${profile.title}. ${profile.positioning}`,
    "",
    ...profile.bio.flatMap((p) => [p, ""]),
    `## ${site.copy.labels.education}`,
    "",
    ...profile.education.map(
      (e) =>
        `- ${e.school}, ${e.credential}${e.dates ? ` (${formatDateRange(e.dates.start, e.dates.end, present)})` : ""}${e.note ? `. ${e.note}` : ""}`
    ),
    "",
    `## ${site.copy.labels.languages}`,
    "",
    ...profile.languages.map((l) => `- ${l.name}: ${l.level}`),
    "",
    `## ${site.copy.labels.personal}`,
    "",
    ...profile.personal.map((p) => `- ${p}`),
    "",
    "## Contact",
    "",
    `- Email: ${profile.email}`,
    `- Location: ${profile.location}`,
    `- Resume: ${abs(profile.resume.pdf)}`,
    ...profile.socials.map((s) => `- ${s.label}: ${s.href}`),
  ];
  return lines.join("\n").trimEnd() + "\n";
}

/** The /llms.txt index (llmstxt.org convention). */
export function siteIndexMarkdown(): string {
  const { pages } = site.copy;
  const lines = [
    `# ${profile.shortName} (winapps.io)`,
    "",
    `> ${profile.title}. ${profile.positioning}`,
    "",
    `${profile.bio[0]} Each project and role below links to a plain-markdown version of its page. The full text of the site is at ${abs("/llms-full.txt")}.`,
    "",
    "## Projects",
    "",
    ...projectsWithPages().map((p) => `- [${p.displayName ?? p.name}](${abs(projectMarkdownPath(p.slug))}): ${p.tagline}`),
    ...projects
      .filter((p) => p.tier === "archive")
      .map((p) => `- ${p.name} (archived, no page): ${p.tagline}${p.links[0] ? ` ${p.links[0].href}` : ""}`),
    "",
    "## Work history",
    "",
    ...experience.map(
      (e) =>
        `- [${e.title}, ${e.company}](${abs(experienceMarkdownPath(e.slug))}): ${formatDateRange(e.start, e.end, present)}. ${e.summary}`
    ),
    "",
    "## Pages",
    "",
    `- [${pages.about.title}](${abs("/about")}): ${pages.about.description}`,
    `- [${pages.contact.title}](${abs("/contact")}): ${pages.contact.description}`,
    `- [${pages.projects.title}](${abs("/projects")}): ${pages.projects.description}`,
    `- [${pages.portfolio.title}](${abs("/portfolio")}): ${pages.portfolio.description}`,
    "",
    "## Optional",
    "",
    ...blog.map((b) => `- [${b.title}](${b.href}): ${b.publisher}, ${formatYearMonth(b.date)}. ${b.summary}`),
  ];
  return lines.join("\n").trimEnd() + "\n";
}

/** /llms-full.txt: the index, then every page in full, in site order. */
export function fullSiteMarkdown(): string {
  const byTier = (tier: Project["tier"]) => projects.filter((p) => p.tier === tier);
  const parts = [
    siteIndexMarkdown(),
    ...byTier("hero").map(projectToMarkdown),
    ...byTier("flagship").map(projectToMarkdown),
    ...byTier("standard").map(projectToMarkdown),
    [
      "# Archived projects",
      "",
      ...byTier("archive").map((p) => `- ${p.name} (${formatDateRange(p.start, p.end, present)}): ${p.summary[0]}`),
    ].join("\n") + "\n",
    ...experience.map(experienceToMarkdown),
    profileToMarkdown(),
  ];
  return parts.join("\n---\n\n");
}
