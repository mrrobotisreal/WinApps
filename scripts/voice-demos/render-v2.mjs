import { existsSync, mkdirSync, writeFileSync, copyFileSync } from "node:fs";
import { tts } from "./tts.mjs";
import { v2 } from "./wintrow-v2.mjs";
mkdirSync("lines-v2", { recursive: true });
for (const l of v2) {
  const out = `lines-v2/w-${l.id}.mp3`;
  if (l.keep) { copyFileSync(`lines/wintrow-${l.id}.mp3`, out); continue; }
  const seed = Number(process.env[`SEED_${l.id}`] ?? 11);
  if (existsSync(out) && !process.env[`SEED_${l.id}`]) continue;
  writeFileSync(out, await tts(l.voice, l.text, seed));
  console.log("rendered", l.id, "seed", seed);
}
