// Render the seven translations on eleven_v4 (account 2). Each line keeps the English
// line's LEADING emotion tags (effect tags dropped: effects are mixed clips); inline vocal tags
// inside the translation stay. Output: lines-<lang>/<scene>-<id>.mp3
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { tts } from "./tts.mjs";
import { T } from "./i18n/translations.mjs";
import { v2 } from "./wintrow-v2.mjs";
import { obsidian } from "./scripts.mjs";
import { wintrow as wintrowV1 } from "./scripts.mjs";

const EFFECT = /engine|tires?|brakes|glass|shotgun|ricochet|bursting|hissing|footsteps|door|knocking|thunder|magic|wind|explosion|crumbling|crackling/i;
const emotionTags = (text) =>
  [...text.matchAll(/^\s*((?:\[[^\]]*\]\s*)+)/g)].flatMap((m) => [...m[1].matchAll(/\[([^\]]*)\]/g)].map((x) => x[1]))
    .filter((t) => !EFFECT.test(t)).map((t) => `[${t}]`).join(" ");

// English source text per id for the Wintrow v2 story (kept lines come from v1)
const v1ById = Object.fromEntries(wintrowV1.map(([, t], i) => [String(i + 1).padStart(2, "0"), t]));
const wSource = Object.fromEntries(v2.map((l) => [l.id, l.keep ? v1ById[l.id] : l.text]));
const wVoice = "HQ4Xi3gPf8Q6bJUlao6z";

const langs = (process.env.LANGS ?? "ru,he,uk,de,fr,ja,es").split(",");
for (const lang of langs) {
  const dir = `lines-${lang}`; mkdirSync(dir, { recursive: true });
  const jobs = [
    ...v2.map((l) => ({
      id: `w-${l.id}`,
      voice: wVoice,
      // the snort before "Lost it. Right." reads as a long rasp in other languages; keep only the dry tone
      tags: l.id === "16" ? "[darkly amused]" : emotionTags(wSource[l.id]),
      text: T[lang].wintrow[l.id],
    })),
    ...obsidian.map(([voice, en], i) => {
      const id = String(i + 1).padStart(2, "0");
      // o-16 already has an inline [laughs]; a leading chuckle as well makes v4 laugh twice.
      const tags = id === "16" ? "[cold, final]" : emotionTags(en);
      return { id: `o-${id}`, voice, tags, text: T[lang].obsidian[id] };
    }),
  ];
  for (const j of jobs) {
    const out = `${dir}/${j.id}.mp3`;
    const seedVar = process.env[`SEED_${lang}_${j.id.replace("-", "_")}`];
    if (existsSync(out) && !seedVar) continue;
    writeFileSync(out, await tts(j.voice, `${j.tags} ${j.text}`.trim(), Number(seedVar ?? 11)));
  }
  console.log(lang, "done", jobs.length, "lines");
}
