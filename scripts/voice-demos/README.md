# Voice demos (Сумрак case study)

Two short scenes that show Mitch's ElevenLabs voices, played on `/projects/sumrak#voices`.

| Clip | Voices | Length |
|---|---|---|
| `public/sumrak/voices/mr-wintrow-demo.*` "The Last Exit" | Mr. Wintrow `HQ4Xi3gPf8Q6bJUlao6z` | 2:18 |
| `public/sumrak/voices/obsidian-demo.*` "The Tower at Vaelmoor" | Obsidian `QjEdRoRdZC2i3ncmFpNy` vs Cornelius `6sFKzaJr574YWVu4UuJF` (library voice) | 1:48 |

All rendering uses **ElevenLabs account 2** (`ELEVENLABS_API_KEY_2` in `../Sumrak/.env`, read by name only): it owns Obsidian and has the credit headroom. Cornelius was added to that account's library on 2026-10-22.

Pipeline (run from this folder; outputs go to `lines/`, `sfx/`, `mix/`, all gitignored):
1. `scripts.mjs`: the two scripts, one v4 request per line. Tags ≤ ~8 words, effect tag first, emotion second.
2. `node render.mjs`: every line on `eleven_v4` (seed 11; `SEED_wintrow_07=…` re-renders one line, `node render.mjs wintrow-07`).
3. `node gen-sfx.mjs`: four 30 s looping ambient beds + 15 one-shot effects via `/v1/sound-generation` (`eleven_text_to_sound_v2`).
4. `python3 mix.py plans.json`: places lines + effects on a timeline, crossfades two beds, ducks the bed under the voice (sidechain), normalises to −18 LUFS, encodes Opus 48 kb/s.
5. Remux for the site: `.opus` (Ogg), `.webm` (same Opus stream) and `.m4a` (AAC 64 kb/s for older Safari):
   `ffmpeg -i X.opus -c:a copy -f webm X.webm && ffmpeg -i X.opus -c:a aac -b:a 64k -movflags +faststart X.m4a`

Checked with faster-whisper (no spoken tags, no doubled lines; both mixes transcribe cleanly over the music).
