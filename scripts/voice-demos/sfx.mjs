// ElevenLabs sound-generation (account 2). sfx(name, prompt, seconds, {loop, influence})
import { existsSync, writeFileSync } from "node:fs";
import { key } from "./env.mjs";
export async function sfx(name, text, duration_seconds, { loop = false, prompt_influence = 0.5 } = {}) {
  const out = `sfx/${name}.mp3`;
  if (existsSync(out)) return out;
  const body = { text, duration_seconds, prompt_influence, model_id: "eleven_text_to_sound_v2", ...(loop ? { loop: true } : {}) };
  const r = await fetch("https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_192", {
    method: "POST",
    headers: { "xi-api-key": key("ELEVENLABS_API_KEY_2"), "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`${name}: ${r.status} ${(await r.text()).slice(0, 300)}`);
  writeFileSync(out, Buffer.from(await r.arrayBuffer()));
  return out;
}
if (process.argv[1].endsWith("sfx.mjs")) {
  console.log(await sfx("probe-loop", "dark ambient drone, low strings, distant wind, horror film underscore, no melody", 30, { loop: true, prompt_influence: 0.4 }));
}
