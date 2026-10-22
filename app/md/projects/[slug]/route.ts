import { projectsWithPages, projectToMarkdown } from "@/lib/markdown-export";

// Served at /projects/<slug>.md via a rewrite in next.config.ts (Next can't
// route a "[slug].md" segment directly).
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return projectsWithPages().map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsWithPages().find((p) => p.slug === slug)!;
  return new Response(projectToMarkdown(project), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
