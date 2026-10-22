// Reads an ElevenLabs key by NAME from ../Sumrak/.env (never printed, never committed).
import { readFileSync } from "node:fs";
export function key(name) {
  const env = readFileSync(new URL("../../../Sumrak/.env", import.meta.url), "utf8");
  const line = env.split("\n").find((l) => l.startsWith(name + "="));
  if (!line) throw new Error(`${name} missing from Sumrak/.env`);
  return line.slice(name.length + 1).trim().replace(/^["']|["']$/g, "");
}
