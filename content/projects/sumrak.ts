import { R2 } from "../cdn";
import { Project } from "../schema";

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
  sections: [], // filled in W04
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
    hero: {
      kind: "image",
      src: `${R2}/sumrak/Screenshot_001_540.jpg`,
      alt: "Today screen with goal rings and the review queue",
      width: 277,
      height: 540,
    },
    gallery: [], // filled in W04
  },
  seo: {
    title: "Сумрак (Sumrak) — a Russian-learning app built for one student",
    description:
      "Offline-first Android app: graded horror fiction, FSRS review, on-device speech, spoken role-plays, ТРКИ exam prep, self-hosted sync. Built by Mitch Wintrow.",
  },
  order: 1,
});
