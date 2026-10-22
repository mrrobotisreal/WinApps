import { banner, logo96, R2_LEGACY } from "../cdn";
import { Project } from "../schema";

export const aspireToExpand = Project.parse({
  slug: "aspire-to-expand",
  name: "Aspire To Expand",
  tier: "archive",
  status: "archived",
  role: "Creator, sole engineer",
  start: "2024-11",
  end: "2025-02",
  tagline:
    "English-learning platform for a teacher and her students: Flutter app, Electron desktop, Go microservices.",
  summary: [
    "A platform for an English teacher and her students: a Flutter student app, Electron desktop apps for students and the teacher, and a web client, on Go services for classrooms, chat, signaling, payments and hashing. It had live video classes over WebRTC, chat, a chatbot and Stripe checkout. The desktop app shipped; the web app never launched.",
  ],
  sections: [],
  tech: ["Flutter", "Dart", "Electron", "TypeScript", "Go", "WebRTC", "WebSockets", "MongoDB", "AWS S3", "Stripe", "OpenAI"],
  links: [
    {
      label: "Desktop source on GitHub",
      href: "https://github.com/mrrobotisreal/AspireToExpandDesktop",
      external: true,
    },
  ],
  media: {
    banner: banner(`${R2_LEGACY}/WinApps_AspireToExpandBanner.webp`, "Aspire To Expand"),
    logo: logo96(`${R2_LEGACY}/WinApps_AspireToExpandLogo.webp`, "Aspire To Expand"),
    gallery: [],
  },
  seo: {
    title: "Aspire To Expand — an English-learning platform",
    description:
      "Flutter, Electron and Go platform with live video classes, chat and checkout for an English teacher and her students. Built by Mitch Wintrow.",
  },
  order: 10,
});
