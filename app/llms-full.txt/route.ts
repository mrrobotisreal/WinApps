import { fullSiteMarkdown } from "@/lib/markdown-export";

export const dynamic = "force-static";

export function GET() {
  return new Response(fullSiteMarkdown(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
