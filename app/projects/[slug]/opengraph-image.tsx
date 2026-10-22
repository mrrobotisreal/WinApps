import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { ogCard, ogSize } from "@/lib/og-card";

export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.filter((p) => p.tier !== "archive").map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug)!;
  return ogCard({
    eyebrow: site.copy.pages.projects.title.toUpperCase(),
    title: project.displayName ?? project.name,
    subtitle: project.tagline,
    footer: `${profile.shortName} · ${site.baseUrl.replace("https://", "")}`,
  });
}
