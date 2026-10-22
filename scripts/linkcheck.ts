/**
 * Link checker for a running build (default http://localhost:3000).
 * Seeds from /sitemap.xml and /llms.txt, follows internal links (HTML pages and
 * markdown docs), HEADs external links, ignores mailto:/tel:. Exit code 1 on any
 * broken internal link. Usage: npm run linkcheck [-- --base http://localhost:3000]
 */
const args = process.argv.slice(2);
const base = (args[args.indexOf("--base") + 1] && args.includes("--base") ? args[args.indexOf("--base") + 1] : "http://localhost:3000").replace(/\/$/, "");
const SITE = "https://www.winapps.io";

const toLocal = (url: string) => (url.startsWith(SITE) ? base + url.slice(SITE.length) : url);
const isInternal = (url: string) => url.startsWith(base);

async function fetchText(url: string): Promise<{ status: number; type: string; text: string }> {
  const res = await fetch(url, { redirect: "follow" });
  const type = res.headers.get("content-type") ?? "";
  const text = /text|xml|json|markdown/.test(type) ? await res.text() : "";
  return { status: res.status, type, text };
}

function extractLinks(from: string, body: string, type: string): string[] {
  const raw = type.includes("html")
    ? [...body.matchAll(/<a\s[^>]*href="([^"#]+)/g)].map((m) => m[1])
    : [...body.matchAll(/(?:<loc>|\]\(|\s)(https?:\/\/[^\s)<>"]+|\/[a-z0-9][^\s)<>"]*)/gi)].map((m) => m[1]);
  return raw
    .map((href) => href.replace(/&amp;/g, "&"))
    .filter((href) => !/^(mailto|tel|javascript):/.test(href))
    .map((href) => toLocal(new URL(href, from).toString()))
    .map((u) => u.replace(/[.,;:]+$/, ""));
}

async function main() {
  const queue = [`${base}/sitemap.xml`, `${base}/llms.txt`];
  const seen = new Set<string>(queue);
  const externals = new Map<string, string>(); // url -> first referrer
  const broken: string[] = [];
  let pages = 0;

  while (queue.length) {
    const url = queue.shift()!;
    let res;
    try {
      res = await fetchText(url);
    } catch (e) {
      broken.push(`${url} (fetch error ${(e as Error).message})`);
      continue;
    }
    pages++;
    if (res.status >= 400) {
      broken.push(`${res.status} ${url}`);
      continue;
    }
    for (const link of extractLinks(url, res.text, res.type)) {
      if (isInternal(link)) {
        const clean = link.split("#")[0];
        if (!seen.has(clean) && !/\/_next\/|\.(png|jpe?g|webp|gif|svg|mp4|ico|pdf|docx|apk|ipa)(\?|$)/i.test(clean)) {
          seen.add(clean);
          queue.push(clean);
        }
      } else if (!externals.has(link)) {
        externals.set(link, url);
      }
    }
  }

  const externalFailures: string[] = [];
  await Promise.all(
    [...externals.keys()].map(async (url) => {
      try {
        let res = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(15000) });
        if (res.status === 405 || res.status === 403) res = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
        if (res.status >= 400) externalFailures.push(`${res.status} ${url}  (from ${externals.get(url)})`);
      } catch (e) {
        externalFailures.push(`ERR ${url}  (${(e as Error).name}; from ${externals.get(url)})`);
      }
    })
  );

  console.log(`internal URLs checked: ${pages}, broken: ${broken.length}`);
  for (const b of broken) console.log(`  BROKEN ${b}`);
  console.log(`external URLs checked: ${externals.size}, failing: ${externalFailures.length}`);
  for (const f of externalFailures.sort()) console.log(`  ${f}`);
  process.exit(broken.length ? 1 : 0);
}

main();
