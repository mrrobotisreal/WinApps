/**
 * schema.org JSON-LD builders, pure so they can be tested and reused by exporters.
 */
import type { Experience, Profile, Project } from "@/content/schema";
import { site } from "@/content/site";

const abs = (path: string) => (path === "/" ? site.baseUrl : `${site.baseUrl}${path}`);

export function personLd(profile: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.shortName,
    jobTitle: profile.title,
    url: site.baseUrl,
    email: `mailto:${profile.email}`,
    sameAs: profile.socials.map((s) => s.href),
    knowsLanguage: ["English", ...profile.languages.map((l) => l.name)],
  };
}

export function softwareApplicationLd(project: Project, author: Profile) {
  const live = project.links.find((l) => l.external);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.displayName ?? project.name,
    description: project.seo.description,
    applicationCategory: project.slug === "sumrak" ? "EducationalApplication" : "MultimediaApplication",
    operatingSystem: project.slug === "sumrak" ? "Android" : "Web, Android, iOS",
    url: live?.href ?? abs(`/projects/${project.slug}`),
    author: { "@type": "Person", name: author.name, url: site.baseUrl },
  };
}

export function organizationLd(name: string, url: string, founder: Profile) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    founder: { "@type": "Person", name: founder.name, url: site.baseUrl },
  };
}

export function breadcrumbLd(trail: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function experienceBreadcrumb(entry: Experience, sectionTitle: string, homeLabel: string) {
  return breadcrumbLd([
    { name: homeLabel, path: "/" },
    { name: sectionTitle, path: "/portfolio" },
    { name: entry.company, path: `/portfolio/${entry.slug}` },
  ]);
}
