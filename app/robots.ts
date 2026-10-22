import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // /md/* is the internal target of the /projects/<slug>.md rewrites; crawl the .md URLs instead.
    rules: { userAgent: "*", allow: "/", disallow: "/md/" },
    sitemap: `${site.baseUrl}/sitemap.xml`,
    host: site.baseUrl,
  };
}
