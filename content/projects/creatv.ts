import { R2 } from "../cdn";
import { Project } from "../schema";

export const creatv = Project.parse({
  slug: "creatv",
  name: "CreaTV",
  tier: "flagship",
  status: "active",
  role: "Founder, lead engineer",
  start: "2025-11",
  end: null,
  tagline: "A creator-first video platform, built as twenty-plus services.",
  summary: [
    "CreaTV is the video platform I wanted to exist: creator-first monetization, serious attention to playback performance and observability, and a media pipeline that scales. I founded it and lead the engineering, from upload and transcoding through streaming, search, recommendations, payments and the mobile app.",
    "Media Manipulator's Darkroom editor is embedded directly in CreaTV Studio, so creators can edit in the browser before they publish.",
  ],
  sections: [], // filled in W06
  numbers: [
    { label: "Backend services", value: "20+" },
    { label: "Clients", value: "web, Android, iOS" },
  ],
  tech: [
    "Go",
    "TypeScript",
    "React",
    "React Native",
    "Expo",
    "Postgres",
    "Redis",
    "FFmpeg",
    "Python",
  ],
  links: [
    { label: "Visit creatv.io", href: "https://www.creatv.io", external: true },
    {
      label: "Watch a demo embed",
      href: "https://creatv.io/e/fad5cf92-ab75-4de9-9e18-4a44f58dadc2",
      external: true,
    },
    { label: "Android dev build", href: "/download/creatv-mobile/android" },
  ],
  media: {
    banner: {
      kind: "image",
      src: `${R2}/CreaTV_WinAppsProjectCard.png`,
      alt: "CreaTV wordmark with the tagline Create, Elucidate, Disseminate",
      width: 1500,
      height: 300,
    },
    gallery: [], // filled in W06
  },
  seo: {
    title: "CreaTV — a creator-first video platform",
    description:
      "Founder and lead engineer of CreaTV: upload, transcoding, streaming, search, recommendations, payments and a mobile app, built as independent services.",
  },
  order: 3,
});
