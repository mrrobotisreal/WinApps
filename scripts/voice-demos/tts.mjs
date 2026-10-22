// One eleven_v4 render on account 2. Usage: node tts.mjs <voiceId> <seed> <out.mp3> "<text>"
import { writeFileSync } from "node:fs";
import { key } from "./env.mjs";
export async function tts(voiceId, text, seed, stability = 0.5) {
  const r = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_192`, {
    method: "POST",
    headers: { "xi-api-key": key("ELEVENLABS_API_KEY_2"), "Content-Type": "application/json" },
    body: JSON.stringify({ text, model_id: "eleven_v4", seed, voice_settings: { stability, similarity_boost: 0.8 } }),
  });
  if (!r.ok) throw new Error(`${r.status} ${(await r.text()).slice(0, 300)}`);
  return Buffer.from(await r.arrayBuffer());
}
if (process.argv[1].endsWith("tts.mjs")) {
  const [voiceId, seed, out, text] = process.argv.slice(2);
  writeFileSync(out, await tts(voiceId, text, Number(seed)));
  console.log("wrote", out);
}
