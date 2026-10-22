import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { ogCard, ogSize } from "@/lib/og-card";
import { formatDateRange } from "@/lib/prose";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = experience.find((e) => e.slug === slug)!;
  return ogCard({
    eyebrow: entry.company.toUpperCase(),
    title: entry.title,
    subtitle: formatDateRange(entry.start, entry.end, site.copy.labels.present),
    footer: `${profile.shortName} · ${site.baseUrl.replace("https://", "")}`,
  });
}
