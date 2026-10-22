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
  sections: [
    {
      id: "overview",
      heading: "What it is",
      paragraphs: [
        "CreaTV is a creator-first video platform I founded in late 2025 and lead the engineering for. The goal is simple to state and hard to build: monetization that favours the creator, playback that feels instant, and a media pipeline that does not fall over when it gets popular.",
        "It ships as a web app, an Android app and an iOS app, backed by more than twenty independent services.",
      ],
    },
    {
      id: "architecture",
      heading: "Architecture",
      paragraphs: [
        "The backend is split by responsibility: an API gateway in front of user, upload, transcoding, video-metadata, streaming, search, recommendation, notification, sharing, snippet, payment, ads, support and assistant services, with shared migrations and an analytics service. The services are written in Go, with Postgres for data, Redis for caching and RabbitMQ between services.",
        "Upload goes straight to object storage with presigned URLs; transcoding produces adaptive renditions; streaming serves HLS and DASH. Video segments, thumbnails, captions, storyboards and sprites live in S3 behind CloudFront, with Cloudflare Stream alongside it for playback. Search and recommendations are their own services so they can scale and fail independently of playback.",
        "Auth runs on Supabase today and is moving to Firebase Auth.",
      ],
      bullets: [
        "API gateway + 20 services",
        "Go services, Postgres, Redis, RabbitMQ",
        "HLS and DASH from S3 + CloudFront, plus Cloudflare Stream",
      ],
    },
    {
      id: "studio",
      heading: "Studio and the Darkroom embed",
      paragraphs: [
        "Creators edit before they publish without leaving CreaTV. CreaTV Studio embeds Media Manipulator's Darkroom editor in an iframe and talks to it over a versioned, origin-validated postMessage protocol, so the editor can evolve on its own release cadence.",
      ],
    },
    {
      id: "mobile",
      heading: "Mobile",
      paragraphs: [
        "The mobile app is React Native with Expo for Android and iOS. An Android development build is available on this site.",
      ],
    },
    {
      id: "operations",
      heading: "Operations",
      paragraphs: [
        "The services run directly on my home server, without containers, and media storage and delivery run on AWS. On-demand EC2 workers for transcoding jobs are in progress. Prometheus and Grafana cover metrics and dashboards, and deploys are manual for now. Performance and observability were design goals from the first commit, not retrofits.",
      ],
    },
    {
      id: "status",
      heading: "Where it is",
      paragraphs: ["CreaTV is public, and creators are onboarding now."],
    },
  ],
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
    "RabbitMQ",
    "AWS S3",
    "CloudFront",
    "Cloudflare Stream",
    "Prometheus",
    "Grafana",
  ],
  links: [
    { label: "Visit creatv.io", href: "https://www.creatv.io", external: true },
    { label: "Android dev build", href: "/download/creatv-mobile/android" },
  ],
  // Demo embed, screenshots and videos: Mitch adds them later (the old embed id 404s).
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
