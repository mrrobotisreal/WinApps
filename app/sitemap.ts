import type { MetadataRoute } from "next";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

/** Static content routes; the untouched legal/support pages are listed so they stay indexed. */
const staticRoutes = [
  "/",
  "/about",
  "/blog",
  "/contact",
  "/portfolio",
  "/projects",
  "/projects/voizy/documentation",
  "/projects/voizy/privacy-policy",
  "/projects/voizy/support",
  "/projects/text-formatter/privacy-policy",
  "/products/journey-app/privacy-policy",
  "/products/journey-app/terms-of-use",
  "/products/journey-app/contact",
];

/** True when `path` matches an exclusion pattern (exact, or a "/prefix/*"). */
export function isExcluded(path: string, patterns: string[]): boolean {
  return patterns.some((p) => (p.endsWith("/*") ? path.startsWith(p.slice(0, -1)) : path === p));
}

export function sitemapPaths(): string[] {
  const paths = [
    ...staticRoutes,
    ...projects.filter((p) => p.tier !== "archive").map((p) => `/projects/${p.slug}`),
    ...experience.map((e) => `/portfolio/${e.slug}`),
  ];
  return [...new Set(paths)].filter((p) => !isExcluded(p, site.excludeFromSitemap));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return sitemapPaths().map((path) => ({
    url: path === "/" ? site.baseUrl : `${site.baseUrl}${path}`,
    lastModified,
  }));
}
