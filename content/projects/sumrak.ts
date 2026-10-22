import { R2 } from "../cdn";
import { Project } from "../schema";

const shot = (n: string, alt: string) => ({
  kind: "image" as const,
  src: `${R2}/sumrak/Screenshot_${n}_540.jpg`,
  alt,
  width: n === "Widget" ? 500 : 277,
  height: 540,
});

const video = (file: string, poster: string, alt: string, width: number) => ({
  kind: "video" as const,
  src: `${R2}/sumrak/${file}.mp4`,
  poster: `/sumrak/${poster}-poster.jpg`,
  alt,
  width,
  height: 540,
});

/** The demo languages, in display order; English is the default. */
const DEMO_LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" as const },
  { code: "ru", label: "Русский", dir: "ltr" as const },
  { code: "he", label: "עברית", dir: "rtl" as const },
  { code: "uk", label: "Українська", dir: "ltr" as const },
  { code: "de", label: "Deutsch", dir: "ltr" as const },
  { code: "fr", label: "Français", dir: "ltr" as const },
  { code: "ja", label: "日本語", dir: "ltr" as const },
  { code: "es", label: "Español", dir: "ltr" as const },
];

/** One rendition per language: Opus in WebM first, AAC for older Safari. */
const voiceDemo = (scene: string, seconds: Record<string, number>) =>
  DEMO_LANGUAGES.map(({ code }) => ({
    lang: code,
    durationSeconds: seconds[code],
    sources: [
      { src: `/sumrak/voices/${scene}-${code}.webm`, type: 'audio/webm; codecs="opus"' },
      { src: `/sumrak/voices/${scene}-${code}.m4a`, type: "audio/mp4" },
    ],
  }));

const s = {
  today: shot("001", "Today screen with goal rings, a finished quest and 95 cards due"),
  lobby: shot("002", "Hotel path: the lift door on floor 0, the lobby, under the ТРКИ-А1 floor counter"),
  library: shot("003", "Library shelves of A1 horror stories with level and progress tags"),
  series: shot("008", "The Three-Body series list in the library, filtered to science fiction"),
  chapter: shot("009", "Story chapter with a full-story listen button and its parts"),
  reader: shot("010", "Reader page with Russian text and a tapped word highlighted"),
  karaoke: shot("011", "Reader playing narration, with the current word highlighted in the text"),
  pack: shot("012", "Story pack with its chapter list and the mini-player"),
  torflShelves: shot("013", "ТРКИ-А1 and ТРКИ-А2 shelves with readiness bars per subtest"),
  torflUnits: shot("014", "ТРКИ-А1 lexicon and grammar topic units"),
  bank: shot("015", "Word-bank list filtered by level, with gender and part-of-speech tags"),
  entry: shot("016", "Word-bank entry for туман with review directions and history"),
  generating: shot("018", "Generating the full grammatical profile for туман"),
  declension: shot("020", "Generated declension table and word family for туман"),
  lesson: shot("027", "Generated collocations lesson with example sentences for туман"),
  scenariosHub: shot("052", "Scenario hub cards: at the bank, at the doctor, the oral exam"),
  scenariosMore: shot("053", "More scenarios: gas station, night shift, on air, at the police station"),
  assistPrompt: shot("054", "Prompt to install the on-device assist model for English questions"),
  progressVocab: shot("030", "Progress dashboard: vocabulary by level and core vocabulary coverage"),
  forecast: shot("031", "Progress dashboard: 30-day review forecast and grammar coverage"),
  heatmap: shot("033", "Progress dashboard: pronunciation trend, checkpoints, year heatmap and AI assessment"),
  widget: shot("Widget", "Home-screen widget with the daily goal ring and cards due"),
  settingsAppearance: shot("035", "Settings: appearance, reading and scenario options"),
  settingsGoals: shot("039", "Settings: background music, daily goal and streak freezes"),
  voices: shot("041", "Settings: four on-device Piper voices for Russian speech"),
  recognition: shot("042", "Settings: on-device Russian speech recognition and the Whisper assist model"),
  fsrs: shot("044", "Settings: FSRS desired retention and new cards per day"),
  contentSync: shot("045", "Settings: content sync from the private content repository"),
  backup: shot("046", "Settings: encrypted backups to two targets"),
  homeServer: shot("047", "Settings: home-server sync target and connection test"),
  games: shot("050", "Games list: daily session, review, cloze, sentence builder, listening quiz"),
  gamesMore: shot("051", "More games: typing trainer, numbers, the 60-second match sprint, dialogue, scenarios"),
};

const v = {
  reading: video("Reading_540", "reading", "Reading a story with narration, word highlighting and lookups", 276),
  review: video("Review_540_trimmed", "review", "A review session moving through cloze, sentence builder and other game modes", 250),
  bank: video("Bank_540", "bank", "The В банке speaking scenario with the bank teller Oksana", 274),
};

export const sumrak = Project.parse({
  slug: "sumrak",
  name: "Сумрак",
  displayName: "Сумрак (Sumrak)",
  tier: "hero",
  status: "active",
  role: "Creator, sole engineer",
  start: "2026-08",
  end: null,
  tagline: "An offline-first Russian-learning app built for one student: me.",
  summary: [
    "Сумрак (Sumrak) is a private Android app (iOS port in progress) that takes me from A1 toward C1 Russian through graded horror fiction, spaced repetition, blind spoken role-plays, and ТРКИ exam prep. Every part of it is mine: the content pipeline, the on-device speech stack, the sync service, and the twenty-five architecture decisions behind them.",
    "It will never be in a store. It exists so I can speak Russian with my fiancée Alina, who is Ukrainian, and her family.",
  ],
  sections: [
    {
      id: "overview",
      heading: "What it is",
      paragraphs: [
        "Сумрак (Sumrak) is a Russian-learning app I built for exactly one user. It runs offline on my phone, keeps all data local, and syncs between my two devices through a small service on my home server. The content is graded fiction in the style of internet horror stories, because I will read a creepypasta every night and I will not read a textbook.",
        "The app owns the whole loop: read a story with narration and word-level highlighting, tap any word or phrase into a word bank, review the bank with spaced repetition and nine game modes, speak through blind role-plays judged on-device, write in a journal that gets AI feedback, and work through the official ТРКИ exam ladder. A progress engine decides what needs work next.",
      ],
      media: [s.today, s.reader, s.bank],
    },
    {
      id: "content",
      heading: "Content pipeline",
      paragraphs: [
        "Every story, exam and course is a pack: a Zod schema shared by the authoring pipeline, the content repo and the app. The pipeline drafts and annotates text, renders narration with ElevenLabs on a professional clone of my own voice, aligns the audio to the token stream (ElevenLabs timestamps first, then a wav2vec2 forced aligner to re-stamp word timings), stitches a full-story track, and publishes with sha256-pinned manifests. The app verifies every file before import.",
        "User data never holds a foreign key into content. Items reference packs by stable string ids, so a pack can be re-imported or removed without touching a single review record.",
      ],
      bullets: [
        "122 packs across A1–C1: 75 story packs, 17 exam packs, 15 course floors, 10 speaking scenarios",
        "504 story entries, 26,867 annotated sentences, 4,461 Opus audio files",
        "25 series, each with its own bible",
      ],
      media: [s.library, s.series, s.chapter, s.pack],
    },
    {
      id: "voices",
      heading: "My voices on ElevenLabs",
      paragraphs: [
        "Most of Сумрак's audio is read in my own voice. I created two professional voice clones on ElevenLabs: **Mr. Wintrow**, which narrates the stories, and **Obsidian**, a character voice that is starting to appear in the stories as well. The other characters use custom voices designed for each cast.",
        "Both voices are public in the ElevenLabs voice library, so you can use them in your own projects, and both are tested and verified in over 14 languages. The two short scenes below play in eight of them: pick a language and both scenes switch. They were rendered on Eleven v4 with its audio tags, with sound effects from ElevenLabs and original scores made in Suno.",
      ],
      audio: [
        {
          title: "Mr. Wintrow: The Last Exit",
          description: "A night-drive horror narration: calm, amused, terrified, breathless, broken, and back.",
          versions: voiceDemo("mr-wintrow", { en: 180, ru: 180, he: 180, uk: 180, de: 180, fr: 180, ja: 192, es: 180 }),
        },
        {
          title: "Obsidian: The Tower at Vaelmoor",
          description: "A necromancer duels his old teacher, Cornelius (an ElevenLabs library voice), in a storm.",
          versions: voiceDemo("obsidian", { en: 114, ru: 114, he: 114, uk: 114, de: 114, fr: 114, ja: 114, es: 114 }),
        },
      ],
      audioLanguages: DEMO_LANGUAGES,
      links: [
        {
          label: "Mr. Wintrow (narration) on ElevenLabs",
          href: "https://elevenlabs.io/app/voice-lab/share/437b6c647ef328e2535d05d610a2cc1f1813a37ba51d58b502d655f8e1ed97f7/HQ4Xi3gPf8Q6bJUlao6z",
          external: true,
        },
        {
          label: "Obsidian (characters) on ElevenLabs",
          href: "https://elevenlabs.io/app/voice-lab/share/98f56dc987320f0d940cd99d45980b44a5b07a67a621c0f0cc4f091d2087b97a/QjEdRoRdZC2i3ncmFpNy",
          external: true,
        },
      ],
    },
    {
      id: "reader",
      heading: "Reader and word bank",
      paragraphs: [
        "The reader highlights each word as the narrator reaches it. Tapping a word opens a lookup; selecting a phrase opens a phrase card; a sentence can reveal its translation. Anything saved lands in the word bank with the sentence it came from.",
        "A word-bank entry can generate a full profile on demand: gender, animacy, stress, the complete declension or conjugation table, word family, collocations and a usage lesson. Generation goes through OpenRouter with a provider × quality × effort profile and a cost estimate built from real receipts, and it is resumable, so a batch of 400 words can run overnight.",
      ],
      media: [v.reading, s.karaoke, s.entry, s.generating, s.declension, s.lesson, v.bank],
    },
    {
      id: "review",
      heading: "Spaced repetition and games",
      paragraphs: [
        "Scheduling is FSRS, one card per item and direction, with an offline optimiser that refits the parameters from my own review log. The daily session mixes nine modes by weight: flashcards, multiple choice, cloze (only from sentences I have already read, so nothing is spoiled), sentence builder, listening quiz, pronunciation, a 60-second match sprint, a numbers drill and a typing trainer. Leeches get their own inbox.",
      ],
      media: [v.review, s.games, s.gamesMore, s.fsrs],
    },
    {
      id: "speech",
      heading: "On-device speech",
      paragraphs: [
        "All speech runs on the phone inside one Kotlin Expo module built on sherpa-onnx: four Piper voices for offline text-to-speech, a Zipformer transducer for Russian recognition, a second resident Whisper recogniser for English questions mid-conversation, and a WAV-to-Opus transcoder on the platform media codec with no extra dependency. Pronunciation practice scores each word by alignment and allows unlimited retries.",
      ],
      media: [s.voices, s.recognition],
    },
    {
      id: "scenarios",
      heading: "Blind spoken role-plays",
      paragraphs: [
        "Scenarios are conversations with no text on screen. A turn state machine with endpointing presets listens, an offline judge scores the answer against authored expectations and slots, and a near-miss gets one time-boxed rescue call to a fast online model that can upgrade the verdict but can never block the turn. Spoken meta-commands («что значит…», «как сказать…», «повтори») work mid-scene. The cast is drawn from PNG layers with mouth shapes driven by loudness tracks computed in the pipeline. Every attempt is transcoded to Opus and archived as an encrypted media bundle.",
      ],
      media: [s.scenariosHub, s.scenariosMore, s.assistPrompt],
    },
    {
      id: "exam",
      heading: "ТРКИ exam prep and the Hotel",
      paragraphs: [
        "Exam packs model the official structure: subtests, parts, items, with the texts in the same pack. Mock exams are timed, resumable, scored by the SPbU rule, and graded in layers: offline first, then an AI rubric, then self-assessment. The study path is a hotel: one floor per course pack, a lift between floors, hard gates at 80% to pass and 90% to skip, and an unseen mock exam behind the last door.",
      ],
      media: [s.lobby, s.torflShelves, s.torflUnits],
    },
    {
      id: "sync",
      heading: "Sync, backup and the API",
      paragraphs: [
        "Backups are zero-knowledge: gzip, then AES-256-GCM with a PBKDF2 key, pushed to two targets with ring-buffer retention. Multi-device sync uses SQLite outbox triggers generated from a table registry (a test regenerates the SQL and diffs it), a hybrid logical clock, and a Go service on my home server that resolves last-writer-wins in Postgres with tombstones and an advisory-locked cursor. The service verifies Firebase ID tokens against Google's certificates without the Admin SDK, has two dependencies, and runs three apps from one binary.",
      ],
      media: [s.contentSync, s.backup, s.homeServer],
    },
    {
      id: "progress",
      heading: "Progress engine, widget, everything else",
      paragraphs: [
        "Around 470 typed local analytics events feed a dashboard that shows vocabulary by level, grammar coverage, a thirty-day forecast, a year heatmap and an AI CEFR assessment, loading section by section on a second SQLite connection so the screen opens on the next frame. A Glance home-screen widget renders a JSON snapshot the app writes, never touching the database. Themed ambient soundtracks are chosen per story. The settings tour is long because every behaviour is mine to tune.",
      ],
      media: [s.progressVocab, s.forecast, s.heatmap, s.widget, s.settingsAppearance, s.settingsGoals],
    },
    {
      id: "process",
      heading: "How it was built",
      paragraphs: [
        "Two months, 463 commits, 25 architecture decision records, a ubiquitous-language glossary per repo, 284 test files, and cross-language contract tests (Kotlin constants against TypeScript, trigger SQL against the registry, the sync allowlist against the app). Content work runs through its own ticket system. An iOS port is in progress, and the same codebase has been forked into a Ukrainian app and an English-for-Russian-speakers app.",
      ],
    },
  ],
  numbers: [
    { label: "Content packs", value: "122" },
    { label: "Annotated sentences", value: "26,867" },
    { label: "Game modes", value: "9" },
    { label: "On-device voices", value: "4" },
    { label: "Architecture decision records", value: "25" },
    { label: "TypeScript", value: "~190k lines" },
    { label: "Shipped in", value: "2 months" },
  ],
  tech: [
    "Expo",
    "React Native",
    "TypeScript",
    "SQLite",
    "Drizzle",
    "Kotlin",
    "sherpa-onnx",
    "Piper",
    "Whisper",
    "FSRS",
    "ElevenLabs",
    "Go",
    "Postgres",
    "Firebase Auth",
    "Zod",
    "Vitest",
  ],
  links: [],
  media: {
    hero: s.today,
    // Every screenshot and video shown in the sections; the page renders section
    // media in place, and exporters (llms.txt, Winny) read the full set here.
    gallery: Object.values({ ...v, ...s }),
  },
  seo: {
    title: "Сумрак (Sumrak) — a Russian-learning app built for one student",
    description:
      "Offline-first Android app: graded horror fiction, FSRS review, on-device speech, spoken role-plays, ТРКИ exam prep, self-hosted sync. Built by Mitch Wintrow.",
  },
  order: 1,
});
