import { Metadata } from "next";
import { generateCanonicalUrl } from "./canonical";

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    locale?: string;
    url?: string;
    siteName?: string;
    images?: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
}

/**
 * Generate metadata with canonical URL for server components
 * @param options - Metadata options including title, description, and path
 * @returns Metadata object with canonical URL
 */
export function generateMetadata(options: MetadataOptions): Metadata {
  const { title, description, path = "", keywords = [], openGraph } = options;

  const canonicalUrl = generateCanonicalUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: openGraph
      ? {
          title: openGraph.title || title,
          description: openGraph.description || description,
          url: canonicalUrl,
          siteName: "WinApps.io",
          images: openGraph.images ? openGraph.images : undefined,
          type: "website",
          locale: "en_US",
        }
      : undefined,
  };
}
