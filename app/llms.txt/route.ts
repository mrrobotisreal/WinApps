import { siteIndexMarkdown } from "@/lib/markdown-export";

export const dynamic = "force-static";

export function GET() {
  return new Response(siteIndexMarkdown(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
