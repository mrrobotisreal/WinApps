import { R2_LEGACY } from "../cdn";
import { Project } from "../schema";

export const mp3DrivePlayer = Project.parse({
  slug: "mp3-drive-player",
  name: "MP3 Drive Player",
  tier: "standard",
  status: "shipped",
  role: "Creator, sole engineer",
  start: "2025-06",
  end: "2025-08",
  tagline: "A language-learning audio player for Pimsleur-style courses, with stats, games and chat.",
  summary: [
    "MP3 Drive Player plays Pimsleur-style audio courses straight from a Google Drive folder and wraps them in a learning app: a stats dashboard, games and chat. I built the mobile app and the web app.",
  ],
  sections: [
    {
      id: "role",
      heading: "Role",
      paragraphs: ["I was the sole engineer on both clients and their integrations."],
      bullets: [
        "Built the mobile app and the web app.",
        "Shipped the iOS app through TestFlight and the web app on Vercel.",
        "Integrated the Google Drive API to stream the course audio.",
        "Integrated Stream Chat for chat, PostHog and Mixpanel for analytics, and Firebase for authentication and storage.",
      ],
    },
    {
      id: "mobile",
      heading: "Mobile app",
      paragraphs: [
        "The mobile app is React Native, Expo and TypeScript. It reads the course folder through the Google Drive API and plays the audio, with Stream Chat for chat and Firebase for authentication and storage.",
        "The iOS build went out through TestFlight for beta testing. Android builds are available as an APK from the download page; new account creation is turned off, so testers need credentials from me.",
      ],
    },
    {
      id: "web",
      heading: "Web app",
      paragraphs: [
        "The web app is Vite, TypeScript and React with shadcn/ui, Radix UI and Tailwind CSS, on the same Google Drive, Stream Chat and Firebase integrations, deployed on Vercel.",
      ],
    },
  ],
  tech: [
    "React Native",
    "Expo",
    "TypeScript",
    "React",
    "Vite",
    "shadcn/ui",
    "Radix UI",
    "Tailwind CSS",
    "Google Drive API",
    "Stream Chat",
    "Firebase",
    "PostHog",
    "Mixpanel",
    "Vercel",
  ],
  links: [
    { label: "Open the web app", href: "https://lang.media-manipulator.com", external: true },
    { label: "Download for Android", href: "/download/mp3-drive-player/android" },
    { label: "Download for iOS", href: "/download/mp3-drive-player/ios" },
  ],
  media: {
    banner: {
      kind: "image",
      src: `${R2_LEGACY}/mp3-drive-player-banner.png`,
      alt: "Flags of many countries layered together",
      width: 1500,
      height: 300,
    },
    gallery: [],
  },
  seo: {
    title: "MP3 Drive Player — a language-learning audio player",
    description:
      "React Native and web app that plays Pimsleur-style courses from Google Drive, with stats, games and chat. Built by Mitch Wintrow.",
  },
  order: 5,
});
