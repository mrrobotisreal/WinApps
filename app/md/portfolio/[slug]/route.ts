import { experience } from "@/content/experience";
import { experienceToMarkdown } from "@/lib/markdown-export";

// Served at /portfolio/<slug>.md via a rewrite in next.config.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = experience.find((e) => e.slug === slug)!;
  return new Response(experienceToMarkdown(entry), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
