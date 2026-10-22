# Voice demos (Сумрак case study)

Two scenes that show Mitch's ElevenLabs voices on `/projects/sumrak#voices`, in eight languages
(English default, then Russian, Hebrew, Ukrainian, German, French, Japanese, Spanish). One dropdown
switches both players.

| Scene | Voices | Music |
|---|---|---|
| "The Last Exit" (`mr-wintrow-<lang>`) | Mr. Wintrow `HQ4Xi3gPf8Q6bJUlao6z` | Suno v6, `music/last-exit.wav` (3:00; Japanese uses a 12 s-extended cut) |
| "The Tower at Vaelmoor" (`obsidian-<lang>`) | Obsidian `QjEdRoRdZC2i3ncmFpNy` vs Cornelius `6sFKzaJr574YWVu4UuJF` (library voice) | Suno v6, `music/tower.wav` (1:55) |

Voices render on **ElevenLabs account 2** (`ELEVENLABS_API_KEY_2`, read by name from `../Sumrak/.env`): it owns
Obsidian and has the credits. Cornelius was added to that library on 2026-10-22. Account 2's key has no
`music_generation` permission, which is why the scores came from Suno.

Pipeline (outputs in `lines*/`, `sfx/`, `mix/`, `music/` are gitignored; put the two Suno WAVs in `music/`):
1. `scripts.mjs` (v1 English + Obsidian), `wintrow-v2.mjs` (the Last Exit as published: deer beat, hood/tire beat
   and ending rewritten), `i18n/translations.mjs` (seven translations of both).
2. `node render.mjs`, `node render-v2.mjs`, `node render-i18n.mjs` → one `eleven_v4` request per line (seed 11;
   `SEED_<lang>_<id>=…` re-renders one line). Translations reuse each English line's leading emotion tags;
   effect tags never go into a line (effects are mixed clips).
3. `node gen-sfx.mjs`, `node gen-sfx-v2.mjs` → one-shot effects via `/v1/sound-generation`.
4. `python3 mix2.py plans/<lang>.json lines[-<lang>]` → voice + effects + music. Music is set 9 LU under the voice,
   ducks lightly under speech, dips a further 8 dB under the last line, 3 s fade. Opus 64 kb/s.
5. Site files: `ffmpeg -i X.opus -c:a copy -f webm X.webm` and `ffmpeg -i X.webm -c:a aac -b:a 48k -movflags +faststart X.m4a`.

Checks (faster-whisper, `~/.sumrak-tools/venv-asr`): `check-i18n.py` (wrong language, doubled/short takes, spoken
tags), `verify-all.py` (every finished mix: closing words audible, file runs past the end of speech).
Known: Whisper-small mishears some Hebrew; the four Hebrew lines it flags were given niqqud and re-rendered.
