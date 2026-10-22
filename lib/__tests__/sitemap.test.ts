import { describe, expect, it } from "vitest";
import { isExcluded, sitemapPaths } from "@/app/sitemap";
import { site } from "@/content/site";

describe("sitemap", () => {
  const paths = sitemapPaths();

  it("lists each path once", () => {
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("includes the hero project and every role, never an excluded or archive route", () => {
    expect(paths).toContain("/projects/sumrak");
    expect(paths).toContain("/portfolio/people-inc");
    expect(paths).not.toContain("/projects/quantum-river");
    expect(paths.filter((p) => isExcluded(p, site.excludeFromSitemap))).toEqual([]);
  });

  it("matches exclusion patterns by prefix and exact path", () => {
    expect(isExcluded("/download/x", ["/download/*"])).toBe(true);
    expect(isExcluded("/downloads", ["/download/*"])).toBe(false);
    expect(isExcluded("/products/journey-app/contact/form", ["/products/journey-app/contact/form"])).toBe(true);
  });
});
