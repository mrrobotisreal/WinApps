import type { Metadata } from "next";
import { R2_LEGACY } from "@/content/cdn";
import { site } from "@/content/site";
import { generateCanonicalUrl } from "./canonical";

/** Site-wide share image; pages with an opengraph-image route pass `generatedImage`. */
export const defaultOgImage = { url: `${R2_LEGACY}/WinAppsOpenGraph.jpg`, width: 1200, height: 630, alt: "WinApps.io" };

interface MetadataOptions {
  title: string;
  description: string;
  /** Path without the domain, e.g. "projects/sumrak". Empty for the home page. */
  path?: string;
  image?: { url: string; width: number; height: number; alt: string };
  /** Skip the "%s · Mitch Wintrow" template (home page). */
  absoluteTitle?: boolean;
  /** The route has an opengraph-image file; don't set images here or they would override it. */
  generatedImage?: boolean;
}

/** Per-page metadata with a self-referencing canonical URL and matching Open Graph tags. */
export function generateMetadata({ title, description, path = "", image, absoluteTitle, generatedImage }: MetadataOptions): Metadata {
  const url = generateCanonicalUrl(path);
  const shareImage = generatedImage ? undefined : (image ?? defaultOgImage);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.siteName,
      type: "website",
      locale: "en_US",
      ...(shareImage ? { images: [shareImage] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(shareImage ? { images: [shareImage.url] } : {}) },
  };
}
