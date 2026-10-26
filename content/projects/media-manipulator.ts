import { R2 } from "../cdn";
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
  tier: "hero",
  status: "shipped",
  role: "Founder, sole engineer",
  start: "2025-05",
  end: null,
  tagline:
    "75+ browser media tools and Darkroom, a multi-track video editor, on GPU servers I run myself.",
  summary: [
    "Media Manipulator converts, compresses, trims, transcribes, restores and edits images, video and audio in the browser, with the heavy work done on my own GPU servers so large files and AI models are no problem. Darkroom, its multi-track timeline editor, brings colour grading, chroma key, keyframes, transitions, titles and captions to a web page and exports through ffmpeg with preview-to-export parity.",
    "The AI tools (restoration, upscaling, transcription, document scanning, face and PII redaction) run on hardware I operate. No user file goes to a third-party AI provider.",
  ],
  sections: [
    {
      id: "overview",
      heading: "What it is",
      paragraphs: [
        "Media Manipulator started as a converter and became a media workbench. It has 75+ single-purpose tools for images, video and audio, each with its own page, plus Darkroom, a multi-track video editor that runs in a browser tab. Files are processed on servers I run. No account is needed for the standard tools, and guests' files are deleted within 24 hours; signed-in users choose their own retention, from 24 hours to 2 years.",
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
        "Still images can be imported and held on the timeline for any length, Premiere-style, and they export like any other clip. Clips can be sped up or slowed down from 0.1x to 10x with pitch kept, reversed, or frozen on a frame. The timeline has a full keyboard-driven tool set (razor, slip, slide, roll and ripple edits, markers, groups, track lock, solo and hide, and detaching audio from video), and a mixer gives each track a fader, pan, three-band EQ, a compressor and live meters, with a master bus.",
        "The media bin has search, folders, colour labels and rename, a safe delete that lists every clip still using a file, a parallel upload queue, and voiceover recorded straight from the microphone onto the timeline.",
        "Projects are safe to work in: snapshot undo/redo, revision-numbered saves that refuse to clobber, crash-recovery drafts in IndexedDB, and version history with checkpoints. Export is a server-side ffmpeg graph with hardware encoding when available: H.264 or HEVC video, or MP3 and WAV audio, at source resolution or 720p to 2160p, with captions burned in or as SRT/VTT, canvas presets for 16:9, 9:16, 1:1 and 4:5, a frame grab as PNG, and an exports panel with progress and re-render. A golden-image harness keeps the preview and the export within a documented tolerance, and solo and hide apply to the export exactly as they do to the preview.",
      ],
      bullets: [
        "Target scale: 60-minute timelines, 12 tracks, 1,000 clips",
        "Keyframed parameters export through ffmpeg sendcmd",
        "Embedded in CreaTV Studio over a versioned, origin-checked postMessage protocol, with capability flags and published integration docs",
        "End-to-end browser tests cover a full edit-save-export journey and crash recovery",
      ],
      media: [shots.darkroom],
    },
    {
      id: "viewers",
      heading: "See the result before you download it",
      paragraphs: [
        "Every tool shows its output in the browser before anything is downloaded, with viewers for images, video, GIF and audio. Compare modes include a wipe slider, side-by-side, synced A/B video with an fps readout, and audio A/B. Transcripts and captions open in viewers with click-to-seek and a two-column translation view; there is also a ZIP archive gallery, a PDF viewer, and HLS and DASH stream playback. For AI video restoration, the original can be compared against each model's output.",
      ],
    },
    {
      id: "metadata",
      heading: "Metadata inspector",
      paragraphs: [
        "The inspector reads EXIF, XMP, IPTC and QuickTime metadata through exiftool and ffprobe and explains it instead of dumping raw tags. It is backed by a catalogue of about 1,800 tags in 22 categories, flags what matters for privacy (location, identity, device, history), plots GPS coordinates on a locator, and shows a before/after diff in split or unified view. \"Strip everything\" covers video and audio as well as images.",
      ],
    },
    {
      id: "tools",
      heading: "The tool catalogue",
      paragraphs: [
        "Image: format conversion across JPG, PNG, WebP, HEIC, AVIF, SVG and ICO; resize, compress, background removal, image-to-PDF and PDF-to-image. Video: conversion between MP4, MOV, WebM, AVI and MKV; compress, trim, crop, resize, rotate; audio extraction and replacement; frame extraction; GIF; HLS packaging with an H.264 ladder and DASH packaging with AV1/VP9, multilingual captions, storyboards and an I-frame playlist. Audio: conversion, waveform rendering, vocal isolation, voice cleanup and background-noise removal. Image: upscaling.",
        "Privacy: EXIF, GPS, IPTC and XMP removal; face blur; text and PII redaction; object removal.",
        "Seven of the tools are recent AI additions: upscale, blur faces, redact text, remove object, clean voice, remove background noise and remove vocals.",
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
        "A Go API (Gin, pgx, Redis) with roughly 180 routes, Postgres with versioned migrations, presigned S3 uploads for large video, a job manager with polling and server-sent events, tiered quotas with per-route rate limits, Stripe billing for the Premium tier, user-selectable data retention with export and delete, transactional email through Resend, a public status page fed by a health endpoint, Prometheus metrics, and FFmpeg, ImageMagick, ExifTool, Poppler and friends behind it. It runs as a systemd service on a headless Ubuntu workstation behind nginx and Cloudflare, with 900+ Go tests.",
      ],
    },
    {
      id: "accounts",
      heading: "Accounts, Premium and Pro",
      paragraphs: [
        "Accounts use Firebase Auth. The account screen has tabs for history, projects, billing, privacy and data, and profile; users can export their data or delete their account, share a result through an expiring, revocable link, and choose which emails they get. Guests get a browser-side Recent history. Premium is 8 USD a month or 80 USD a year through Stripe, and brings larger files, more jobs and exports, output up to 2160p, and priority on the GPU queue. Cancelling keeps Premium until the end of the paid period, with a clear end date and an offer to stay.",
        "Pro sits above Premium at 15 USD a month or 150 USD a year. It raises the daily allowance to 700 operations and 120 AI jobs, keeps Premium's file, length and resolution limits, and carries the largest allowance for Motion, the SVG animation editor that is rolling out. Moving up is immediate, with a prorated charge and the same renewal date; moving down to Premium waits until the end of the paid period, so nothing is refunded mid-cycle. The Stripe price id decides the plan on the server, and an unknown price can never grant Pro. The pricing page and the billing panel read every number and price from the API.",
      ],
    },
    {
      id: "frontend",
      heading: "Frontend",
      paragraphs: [
        "Next.js App Router on Vercel, React 19, Tailwind 4, Radix, TanStack Query and Zustand. Six locales served as i18next shards per feature, hreflang alternates in the sitemap, consent-gated first-party analytics with its own admin dashboard (revenue, activation and return, and a Darkroom page with its funnel, feature use, editor performance and export health), a public changelog with an RSS feed, and an ads architecture that is off by default and audited in CI.",
      ],
    },
  ],
  numbers: [
    { label: "Tool pages", value: "75+" },
    { label: "Locales", value: "6" },
    { label: "Transition types", value: "15" },
    { label: "Metadata tags catalogued", value: "1,800+" },
    { label: "Blend modes", value: "8" },
    { label: "AI models served", value: "15+" },
    { label: "API routes", value: "~180" },
    { label: "Go tests", value: "900+" },
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
    "Stripe",
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
    // Mitch's 25 s launch film (new brand, uploaded 2026-10-26); the poster is its end card.
    film: {
      kind: "video",
      src: `${R2}/sumrak/MM_Launch_v2.mp4`,
      poster: "/media-manipulator/launch-poster.webp",
      alt: "Media Manipulator launch film: one video no longer needs five apps, Face Blur hides a face in a photo, Darkroom edits a waterfall clip, and the aperture logo ends on media-manipulator.com",
      width: 1920,
      height: 1080,
    },
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
      "75+ image, video and audio tools plus Darkroom, a multi-track browser video editor, backed by a Go API and self-hosted GPU AI. Built by Mitch Wintrow.",
  },
  order: 1,
});
