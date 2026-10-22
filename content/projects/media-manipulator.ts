import { Project } from "../schema";

// Media Manipulator assets are local copies from media-manipulator-ui/public.
// Every MM asset on R2 is the old brand and must not be used (Mitch, 2026-10-22).
export const mediaManipulator = Project.parse({
  slug: "media-manipulator",
  name: "Media Manipulator",
  tier: "flagship",
  status: "shipped",
  role: "Founder, sole engineer",
  start: "2025-05",
  end: null,
  tagline:
    "65+ browser media tools and Darkroom, a multi-track video editor, on GPU servers I run myself.",
  summary: [
    "Media Manipulator converts, compresses, trims, transcribes, restores and edits images, video and audio in the browser, with the heavy work done on my own GPU servers so large files and AI models are no problem. Darkroom, its multi-track timeline editor, brings colour grading, chroma key, keyframes, transitions, titles and captions to a web page and exports through ffmpeg with preview-to-export parity.",
    "The AI tools (restoration, upscaling, transcription, document scanning, face and PII redaction) run on hardware I operate. No user file goes to a third-party AI provider.",
  ],
  sections: [], // filled in W05
  numbers: [
    { label: "Tools", value: "65+" },
    { label: "Locales", value: "6" },
    { label: "Transition types", value: "15" },
    { label: "Blend modes", value: "8" },
    { label: "AI models served", value: "15+" },
    { label: "API routes", value: "~130" },
    { label: "Go tests", value: "490+" },
  ],
  tech: [
    "Go",
    "Gin",
    "Postgres",
    "Redis",
    "FFmpeg",
    "ImageMagick",
    "NVENC",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind",
    "WebGL2",
    "Web Audio",
    "Whisper",
    "Real-ESRGAN",
    "Demucs",
    "Ollama",
    "S3",
    "Firebase Auth",
    "Vercel",
    "nginx",
    "Cloudflare",
  ],
  links: [
    { label: "Visit media-manipulator.com", href: "https://www.media-manipulator.com", external: true },
    {
      label: "Open Darkroom",
      href: "https://www.media-manipulator.com/tools/content-studio",
      external: true,
    },
  ],
  media: {
    banner: {
      kind: "image",
      src: "/media-manipulator/MMOpenGraph.jpg",
      alt: "Media Manipulator aperture logo on a starfield with the line Manipulate media. Master the outcome.",
      width: 1200,
      height: 630,
    },
    logo: {
      kind: "image",
      src: "/media-manipulator/MMIcon.webp",
      alt: "Media Manipulator logo",
      width: 1254,
      height: 1254,
    },
    gallery: [], // filled in W05
  },
  seo: {
    title: "Media Manipulator — browser media tools and the Darkroom video editor",
    description:
      "65+ image, video and audio tools plus Darkroom, a multi-track browser video editor, backed by a Go API and self-hosted GPU AI. Built by Mitch Wintrow.",
  },
  order: 2,
});
