/**
 * Writes Winny's knowledge base (winapps-api/internal/content) from the site's
 * content layer. Usage: npm run export:winny -- [--out <dir>] (default ../winapps-api/internal/content)
 *
 * - One page.md per live route, in the header shape internal/content/loader.go reads.
 * - Untouched legal/support/download routes keep the "Page Content Snapshot" from the
 *   previous export (their pages did not change); everything else is regenerated.
 * - facts.md: the facts block the Go prompt builder reads.
 * - Every other .md/.txt under the target is deleted (stale routes).
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { buildWinnyDocs } from "../lib/winny-export";

function parseOut(argv: string[]): string {
  const i = argv.indexOf("--out");
  return resolve(i >= 0 && argv[i + 1] ? argv[i + 1] : join(process.cwd(), "..", "winapps-api", "internal", "content"));
}

function walk(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const out = parseOut(process.argv.slice(2));
const previous = new Map(
  walk(out)
    .filter((p) => p.endsWith(".md"))
    .map((p) => [relative(out, p), readFileSync(p, "utf8")] as const)
);

const docs = buildWinnyDocs((file) => previous.get(file));
const keep = new Set(Object.keys(docs));

let removed = 0;
for (const p of walk(out)) {
  const rel = relative(out, p);
  if ((p.endsWith(".md") || p.endsWith(".txt")) && !keep.has(rel)) {
    rmSync(p);
    removed++;
  }
}
const pruneEmpty = (dir: string): boolean => {
  if (!existsSync(dir)) return true;
  const empty = readdirSync(dir).every((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? pruneEmpty(p) : false;
  });
  if (empty && dir !== out) rmSync(dir, { recursive: true });
  return empty;
};

for (const [file, body] of Object.entries(docs)) {
  const p = join(out, file);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, body);
}
pruneEmpty(out);

console.log(`winny export: ${keep.size} files written to ${out}, ${removed} stale files removed`);
