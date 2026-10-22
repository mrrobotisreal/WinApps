// Render every line of both scripts on eleven_v4 (account 2), cached by file name.
import { existsSync, writeFileSync } from "node:fs";
import { tts } from "./tts.mjs";
import { wintrow, obsidian } from "./scripts.mjs";
const SEED = Number(process.env.SEED ?? 11);
const only = process.argv[2]; // optional: "wintrow-07" to re-render one line
for (const [name, lines] of [["wintrow", wintrow], ["obsidian", obsidian]]) {
  for (let i = 0; i < lines.length; i++) {
    const id = `${name}-${String(i + 1).padStart(2, "0")}`;
    const out = `lines/${id}.mp3`;
    if (only ? only !== id : existsSync(out)) continue;
    const [voice, text] = lines[i];
    const seed = Number(process.env[`SEED_${id.replace("-", "_")}`] ?? SEED);
    writeFileSync(out, await tts(voice, text, seed));
    console.log("rendered", id, "seed", seed);
  }
}
