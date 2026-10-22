import { Project } from "../schema";

const capture = (file: string, alt: string) => ({
  kind: "image" as const,
  src: `/media-manipulator/${file}.webp`,
  alt,
  width: 1440,
  height: 900,
});

const shots = {
  home: capture("home", "Media Manipulator home page: the upload panel, quick-tool chips and the Darkroom entry point"),
  tools: capture("tools", "Tool catalogue listing Darkroom first, then image tools such as compress, resize and background removal"),
  darkroom: capture("darkroom", "Darkroom landing page with its quick guide to the multi-track timeline, supported media and export"),
  restoration: capture("restoration", "AI image restoration tool describing its pre-clean, upscaler and face-enhancement model pipeline"),
  docscan: capture("docscan", "AI document scan tool that turns printed pages and handwriting into a searchable PDF or Word file"),
};

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
  sections: [
    {
      id: "overview",
      heading: "What it is",
      paragraphs: [
        "Media Manipulator started as a converter and became a media workbench. It has 65+ single-purpose tools for images, video and audio, each with its own page, plus Darkroom, a multi-track video editor that runs in a browser tab. Files are processed on servers I run, deleted within 24 hours, and no account is needed for the standard tools.",
        "The site ships in six locales, including a right-to-left one, with a key-parity test so no translation can silently lag. It is a CreaTV Ltd. product, and Darkroom is embedded directly in CreaTV Studio.",
      ],
      media: [shots.home],
    },
    {
      id: "darkroom",
      heading: "Darkroom: a timeline editor in the browser",
      paragraphs: [
        "Darkroom composites video, image, audio and LUT tracks in a WebGL2 pipeline: crop, fit, transform, colour grade, 3D LUT, chroma key, opacity and blend, in that order, with a CSS-filter fallback if the GPU context is lost. Audio mixes through a Web Audio graph. Decoders are pooled and Safari's decoder cap is respected.",
        "Editing features: trim, split and ripple delete at frame accuracy; a media bin with server-rendered proxies, filmstrips and waveform peaks; a Lumetri-style grade with exposure, contrast, saturation, temperature, tint and vibrance; chroma key with an eyedropper; eight blend modes; fifteen transitions; keyframes on position, scale, rotation, opacity, volume, pan and any effect parameter with five easing curves; title clips with text and shape layers; audio ducking and loudness presets; a captions lane with Whisper auto-captions and SRT/VTT export or burn-in.",
        "Projects are safe to work in: snapshot undo/redo, revision-numbered saves that refuse to clobber, crash-recovery drafts in IndexedDB, and version history with checkpoints. Export is a server-side ffmpeg graph with hardware encoding when available, and a golden-image harness keeps the preview and the export within a documented tolerance.",
      ],
      bullets: [
        "Target scale: 60-minute timelines, 12 tracks, 1,000 clips",
        "Keyframed parameters export through ffmpeg sendcmd",
        "Embedded in CreaTV Studio over a versioned, origin-checked postMessage protocol",
      ],
      media: [shots.darkroom],
    },
    {
      id: "tools",
      heading: "The tool catalogue",
      paragraphs: [
        "Image: format conversion across JPG, PNG, WebP, HEIC, AVIF, SVG and ICO; resize, compress, background removal, image-to-PDF and PDF-to-image. Video: conversion between MP4, MOV, WebM, AVI and MKV; compress, trim, crop, resize, rotate; audio extraction and replacement; frame extraction; GIF; HLS packaging with an H.264 ladder and DASH packaging with AV1/VP9, multilingual captions, storyboards and an I-frame playlist. Audio: conversion, waveform rendering, vocal isolation.",
        "Privacy: EXIF, GPS, IPTC and XMP removal; face blur; text and PII redaction; object removal.",
      ],
      media: [shots.tools],
    },
    {
      id: "ai",
      heading: "AI on hardware I run",
      paragraphs: [
        "The AI tools run on my own GPU server, so no user file is sent to a third-party model provider. Transcription and captions use Whisper; caption translation uses a TranslateGemma model served by Ollama; video restoration offers six models side by side; image restoration combines upscalers with face-restoration and pre-cleaning models; document scanning turns printed pages into a searchable PDF through Tesseract and transcribes handwriting with a vision model that flags uncertain passages instead of guessing. A VRAM-aware scheduler splits jobs across two GPUs.",
      ],
      bullets: [
        "Restoration: Real-ESRGAN, SwinIR, HAT, BasicVSR++, RVRT, VRT",
        "Faces and cleanup: GFPGAN, CodeFormer, FBCNN, SCUNet, NAFNet",
        "Also: RIFE frame interpolation, Demucs vocal isolation, DeepFilterNet denoise, LaMa inpainting, rembg",
      ],
      media: [shots.restoration, shots.docscan],
    },
    {
      id: "backend",
      heading: "Backend",
      paragraphs: [
        "A Go API (Gin, pgx, Redis) with roughly 130 routes, Postgres with 50+ migrations, presigned S3 uploads for large video, a job manager with polling and server-sent events, tiered quotas with per-route rate limits, Prometheus metrics, and FFmpeg, ImageMagick, ExifTool, Poppler and friends behind it. It runs as a systemd service on a headless Ubuntu workstation behind nginx and Cloudflare, with 490+ Go tests.",
      ],
    },
    {
      id: "frontend",
      heading: "Frontend",
      paragraphs: [
        "Next.js App Router on Vercel, React 19, Tailwind 4, Radix, TanStack Query and Zustand. Six locales served as i18next shards per feature, hreflang alternates in the sitemap, consent-gated first-party analytics, and an ads architecture that is off by default and audited in CI.",
      ],
    },
  ],
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
    // Full media set for exporters; the page shows these inside their sections.
    gallery: Object.values(shots),
  },
  seo: {
    title: "Media Manipulator — browser media tools and the Darkroom video editor",
    description:
      "65+ image, video and audio tools plus Darkroom, a multi-track browser video editor, backed by a Go API and self-hosted GPU AI. Built by Mitch Wintrow.",
  },
  order: 2,
});
