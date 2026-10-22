import type { Metadata } from "next";
import { site } from "@/content/site";
import { generateCanonicalUrl } from "./canonical";

interface MetadataOptions {
  title: string;
  description: string;
  /** Path without the domain, e.g. "projects/sumrak". Empty for the home page. */
  path?: string;
  image?: { url: string; width: number; height: number; alt: string };
}

/** Per-page metadata with a self-referencing canonical URL and matching Open Graph tags. */
export function generateMetadata({ title, description, path = "", image }: MetadataOptions): Metadata {
  const url = generateCanonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.siteName,
      type: "website",
      locale: "en_US",
      ...(image ? { images: [image] } : {}),
    },
    twitter: { title, description, ...(image ? { images: [image.url] } : {}) },
  };
}
