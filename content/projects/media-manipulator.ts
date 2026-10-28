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
  tools: capture("tools", "Tool catalogue with search and category tabs, listing Darkroom and Motion first, then every image, video, audio, AI and privacy tool"),
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
    "75+ browser media tools, a multi-track video editor and an SVG animator, on GPU servers I run myself.",
  summary: [
    "Media Manipulator converts, compresses, trims, transcribes, restores and edits images, video and audio in the browser, with the heavy work done on my own GPU servers so large files and AI models are no problem. Darkroom, its multi-track timeline editor, brings colour grading, chroma key, keyframes, transitions, titles and captions to a web page and exports through ffmpeg with preview-to-export parity.",
    "The AI tools (restoration, upscaling, transcription, video summaries, document scanning, face and PII redaction) run on hardware I operate. No user file goes to a third-party AI provider.",
  ],
  sections: [
    {
      id: "overview",
      heading: "What it is",
      paragraphs: [
        "Media Manipulator started as a converter and became a media workbench. It has 75+ single-purpose tools for images, video and audio, each with its own page, plus Darkroom, a multi-track video editor that runs in a browser tab. Files are processed on servers I run. No account is needed for the standard tools, and guests' files are deleted within 24 hours; signed-in users choose their own retention, from 24 hours to 2 years.",
        "Motion, an SVG animation editor in beta, sits beside Darkroom: it turns an SVG into layers on a keyframe timeline and exports animated SVG, Lottie, React, JavaScript, Flutter or GIF straight from the browser.",
        "The site is fully translated into eighteen languages (English, Ukrainian, Russian, Hebrew, German, Spanish for Spain and Latin America, French, Italian, Portuguese for Portugal and Brazil, Japanese, Simplified and Traditional Chinese, Korean, Arabic, Hindi and Vietnamese), two of them right to left, with a key-parity test so no translation can silently lag. It is a CreaTV Ltd. product, and Darkroom is embedded directly in CreaTV Studio.",
        "The About page names me as founder and sole engineer, with CreaTV Ltd. as the operating company, and a contact page offers a short form (spam-limited by a honeypot and a per-session and per-IP rate limit, delivered to the support inbox through Resend with a reference number) next to the support and privacy addresses. The structured data matches what is on the page: a named author on every article and tutorial, a price range that agrees with the pricing page, and sitemap dates taken from the real edit history.",
      ],
      media: [shots.home],
    },
    {
      id: "darkroom",
      heading: "Darkroom: a timeline editor in the browser",
      paragraphs: [
        "Darkroom composites video, image, audio and LUT tracks in a WebGL2 pipeline: crop, fit, transform, colour grade, 3D LUT, chroma key, opacity and blend, in that order, with a CSS-filter fallback if the GPU context is lost. Audio mixes through a Web Audio graph. Decoders are pooled and Safari's decoder cap is respected.",
        "Editing features: trim, split and ripple delete at frame accuracy; a media bin with server-rendered proxies (one keyframe a second, so preview seeks stay cheap, and a one-click rebuild for clips imported before that), filmstrips and waveform peaks; a Lumetri-style grade with exposure, contrast, saturation, temperature, tint and vibrance; chroma key with an eyedropper; eight blend modes; fifteen transitions; keyframes on position, scale, rotation, opacity, volume, pan and any effect parameter with five easing curves; title clips with text and shape layers; audio ducking and loudness presets; a captions lane with Whisper auto-captions and SRT/VTT export or burn-in.",
        "Still images can be imported and held on the timeline for any length, Premiere-style, and they export like any other clip. Clips can be sped up or slowed down from 0.1x to 10x with pitch kept, reversed, or frozen on a frame. The timeline has a full keyboard-driven tool set (razor, slip, slide, roll and ripple edits, markers, groups, track lock, solo and hide, and detaching audio from video), and a mixer gives each track a fader, pan, three-band EQ, a compressor and live meters, with a master bus.",
        "The media bin has search, folders, colour labels and rename, a safe delete that lists every clip still using a file, a parallel upload queue, voiceover recorded straight from the microphone onto the timeline, and a Generate voiceover dialog that speaks a typed script in a saved or preset voice (23 languages) on the self-hosted voice engine and drops the clip at the playhead.",
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
      id: "motion",
      heading: "Motion: SVG animation in the browser",
      paragraphs: [
        "Motion is a separate editor from Darkroom, with its own document model: a versioned, additive-only VectorDoc (Zod on the client, a Go sanitizer mirror on the server, shared byte-parity fixtures). An imported SVG becomes a layer tree of groups, paths, shapes, text, images, gradients, masks and clip paths; markup it cannot model is kept as an opaque layer that round-trips unchanged, and anything unsafe (scripts, event handlers, external references, foreignObject) is dropped on import and rebuilt from an allow-list, never inserted as HTML. New artwork comes from rectangle, ellipse, line, pen and text tools.",
        "Every animated property is its own track of keyframes with linear, ease-in, ease-out and ease-in-out presets, a cubic-bezier curve editor and hold keys. Six one-click animators cover stroke draw-on, motion along a path, shape morphing (an in-house normaliser that matches command counts, start points and winding), gradient stops, masks and clip paths, and blur. One sampler is the single definition of a value at time t: the preview renders from it, and every exporter is tested against it.",
        "Export happens in the browser, and the server only counts it against a separate daily Motion allowance before the file is built. Animated SVG is pure CSS when Chrome, Firefox and Safari can all play it, and otherwise embeds a tree-shaken anime.js runtime of about 14 KB gzip. The Lottie writer targets spec 1.0.1 and has a matching reader; a single unsupported-feature list means nothing is dropped silently in either direction. The React, JavaScript/TypeScript and Flutter exporters (a native flutter_svg widget when the animation allows, otherwise a WebView player) are pure functions with golden fixtures. GIF uses a clean-room GIF89a encoder in a Worker, PNG sequences stream into a zip, and MP4 and WebM go through WebCodecs and mediabunny; the video formats are part of the Pro plan.",
        "Licensing is a design constraint, not an afterthought. GSAP is excluded because its free licence forbids no-code animation builders, and Theatre.js Studio is excluded because it is AGPL. A test fails the build if either enters the dependency tree. Every runtime that ships inside an export carries its licence header, and an open-source licences page lists the MPL-2.0 muxer.",
      ],
      bullets: [
        "Formats: static SVG (free), animated SVG, Lottie JSON, React, JavaScript, TypeScript, Flutter and GIF, plus MP4, WebM and PNG sequence on Pro (up to 4K, 60 fps, 60 seconds)",
        "Daily Motion exports by plan: 2 without an account, 5 free, 30 Premium, 150 Pro. The export dialog locks each format a plan lacks and names the plan that adds it; the server stays the authority",
        "Projects: browser-only drafts in IndexedDB, or account projects with revision-checked saves, autosave and a thumbnail",
        "Plan table on the tool page rendered from the live tier API, so a retuned allowance needs no deploy",
      ],
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
        "The catalogue page lists every tool, with a search box and category tabs; the tools a visitor is most likely to want are starred and sorted first. Image: format conversion across JPG, PNG, WebP, HEIC, AVIF, SVG and ICO; resize, crop, rotate, compress, sharpen, blur, filters, text overlay, metadata editing, background removal, image-to-PDF and PDF-to-image. Video: conversion between MP4, MOV, WebM, AVI, MKV and HEVC; compress, trim, crop, resize, rotate, flip, reverse, speed change, frame-rate change, stabilisation and colour adjustment; audio extraction and replacement; frame extraction; GIF; HLS packaging with an H.264 ladder and DASH packaging with AV1/VP9, multilingual captions, storyboards and an I-frame playlist. Audio: conversion to MP3, WAV, FLAC, OGG, M4A and Opus; trim, speed, pitch, normalisation, volume, equaliser, reverb, waveform rendering, vocal isolation and removal (the stem comes back in the input's format, so an MP3 stays a 320 kbps MP3 instead of a WAV ten times its size, with FLAC, WAV and a free server-side “Download as MP3” for older WAV results), voice cleanup and background-noise removal. A metadata inspector reads EXIF, GPS, codec, ID3 and PDF tags from any file.",
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
        // MM75: video / audio summaries (media_manipulator docs/design/VIDEO_SUMMARY.md, ADR-0014).
        "Video and audio summaries chain three models into one staged job. Whisper transcribes the speech while ffmpeg picks frames at scene changes, capped by the plan's frame budget (24, 48 or 96); a Qwen3-VL vision model reads them in timestamped batches of four with the transcript lines of that window; then a Qwen text model writes a title, a short summary, chapters with start and end times, topics and the on-screen text, as schema-validated JSON with one repair retry. The result viewer renders it as a document whose chapters seek the original file, with a Markdown copy that matches the server's file byte for byte, and the progress list shows each of the six stages as it runs. A larger deep-synthesis model for Pro sits behind a benchmark gate.",
      ],
      bullets: [
        "Restoration: Real-ESRGAN, SwinIR, HAT, BasicVSR++, RVRT, VRT",
        "Faces and cleanup: GFPGAN, CodeFormer, FBCNN, SCUNet, NAFNet",
        "Also: RIFE frame interpolation, Demucs vocal isolation, DeepFilterNet denoise, LaMa inpainting, rembg",
      ],
      media: [shots.restoration, shots.docscan],
    },
    // MM78: Voices (design media_manipulator docs/design/VOICES.md, ADR-0015).
    {
      id: "voices",
      heading: "Voices: clone, design and change a voice",
      paragraphs: [
        "Three voice tools run on self-hosted models with commercial-use licences. Voice cloning makes a saved voice from 5 to 60 seconds of speech recorded in the browser or uploaded, then reads any text in 23 languages with an emotion control. The voice designer turns a written description (gender, age, accent, tone, pace) into free previews and keeps the one you pick by its seed. The voice changer either shifts pitch and formant instantly with rubberband, or converts a recording to a saved or preset voice with AI, with a synced A/B player to compare.",
        "The models are Chatterbox Multilingual (MIT) for cloning, speech and voice conversion, and Qwen3-TTS (Apache 2.0) for voice design and preset voices. A designed voice is stored as its description, seed and a 10-second rendered reference, and from then on Chatterbox speaks it, so one voice sounds the same everywhere. Both engines live in one small resident FastAPI service on the GPU host that loads models on first use and unloads them when idle, behind a VRAM-aware GPU lease; the page says when the engine is warming up.",
        "Consent and safety are built in rather than bolted on. Creating a voice from a recording requires an explicit confirmation that it is your voice or that you have the speaker's permission, stored with the voice together with the version of that text. Every generated or converted file carries an inaudible PerTh watermark; shifted audio is plain signal processing and is not marked. Recordings never leave the servers I run and are never used to train anything; a voice can be deleted from the account page at any time and is deleted with the account, and the Terms forbid impersonation, fraud and political deepfakes.",
      ],
      bullets: [
        "Saved voices by plan: 1 free, 5 Premium, 25 Pro; anonymous visitors can use the shifter and the preset voices",
        "A failed or refused request gives its daily unit back; design previews are free, three per description an hour",
        "Results open in the shared result viewer with MP3 and WAV downloads and audio A/B compare",
      ],
    },
    {
      id: "backend",
      heading: "Backend",
      paragraphs: [
        "A Go API (Gin, pgx, Redis) with roughly 180 routes, Postgres with versioned migrations, presigned S3 uploads for large video, a job manager with polling and server-sent events, tiered quotas with per-route rate limits (a job the server refuses or that fails gives its daily unit back), Stripe billing for the Premium tier, user-selectable data retention with export and delete, transactional email through Resend, a public status page fed by a health endpoint, Prometheus metrics, and FFmpeg, ImageMagick, ExifTool, Poppler and friends behind it. It runs as a systemd service on a headless Ubuntu workstation behind nginx and Cloudflare, with 900+ Go tests.",
      ],
    },
    {
      id: "accounts",
      heading: "Accounts, Premium and Pro",
      paragraphs: [
        "Accounts use Firebase Auth. The account screen has tabs for history, projects, billing, privacy and data, and profile; users can export their data or delete their account, share a result through an expiring, revocable link, and choose which emails they get. Guests get a browser-side Recent history. Premium is 8 USD or 8 EUR a month, or 80 USD or 80 EUR a year, through Stripe, and brings larger files, more jobs and exports, output up to 2160p, and priority on the GPU queue. Cancelling keeps Premium until the end of the paid period, with a clear end date and an offer to stay.",
        "Pro sits above Premium at 15 USD or 15 EUR a month, or 150 USD or 150 EUR a year. Visitors choose the currency: Europe sees euros by default, a USD / EUR switch sits on the pricing page, in the billing panel and in the upgrade prompts, the choice is remembered, and a subscription keeps the currency it was bought in. The price is the same number in both currencies, there is no conversion, and no tax is added on top. It raises the daily allowance to 700 operations and 120 AI jobs, keeps Premium's file, length and resolution limits, and carries the largest allowance for Motion, the SVG animation editor: 150 exports a day and the MP4, WebM and PNG sequence video exports. Moving up is immediate, with a prorated charge and the same renewal date; moving down to Premium waits until the end of the paid period, so nothing is refunded mid-cycle. The Stripe price id decides the plan on the server, and an unknown price can never grant Pro. The pricing page and the billing panel read every number and price from the API.",
      ],
    },
    {
      id: "frontend",
      heading: "Frontend",
      paragraphs: [
        "Next.js App Router on Vercel, React 19, Tailwind 4, Radix, TanStack Query, Zustand and Zod. Eighteen translated locales served as i18next shards per feature, hreflang alternates in the sitemap, consent-gated first-party analytics with its own admin dashboard (revenue, activation and return, a Darkroom page with its funnel, feature use, editor performance and export health, and a Voices page with creations, generations, failure rate and job duration), a public changelog with an RSS feed, an ads architecture that is off by default and audited in CI, and per-locale translator deployments where a hired translator edits the live page in context and submits a reviewed GitHub pull request.",
      ],
    },
  ],
  numbers: [
    // media-manipulator-ui content/toolPages.ts TOOL_PAGES: 76 entries + 32 catalog pages (MM73)
    // + 3 voice pages (MM78) + summarize-audio (MM75) = 112, incl. Darkroom and Motion.
    { label: "Tool pages", value: "110+" },
    { label: "Locales", value: "18" },
    { label: "Transition types", value: "15" },
    { label: "Metadata tags catalogued", value: "1,800+" },
    { label: "Blend modes", value: "8" },
    // media-manipulator-ui components/vector/export-dialog.tsx `type Format`: svg_animated, svg_static,
    // CODE_FORMATS (lib/vector/export/formats.ts: lottie, react_tsx, js, ts, flutter) and
    // RASTER_FORMATS (lib/vector/raster/caps.ts: gif, png_sequence, mp4, webm) = 2 + 5 + 4 = 11.
    { label: "Motion export formats", value: "11" },
    // media-manipulator-ui lib/vector/animators.ts ANIMATOR_IDS: drawOn, motionPath, morph,
    // gradient, maskClip, blur.
    { label: "Motion animators", value: "6" },
    // media-manipulator_api internal/config/config.go TIER_PRO_VECTOR_EXPORTS_PER_DAY default (MM49).
    { label: "Pro Motion exports a day", value: "150" },
    { label: "AI models served", value: "15+" },
    // media_manipulator_api internal/services/voices_client.go VoiceLanguages (Chatterbox Multilingual).
    { label: "Voice languages", value: "23" },
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
    "Zod",
    "WebCodecs",
    "mediabunny",
    "anime.js",
    "Stripe",
    "Whisper",
    "Real-ESRGAN",
    "Demucs",
    "Ollama",
    "Chatterbox",
    "Qwen3-TTS",
    "FastAPI",
    "rubberband",
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
    // Mitch's 90 s launch film (uploaded 2026-10-27; replaced the 25 s v2); the poster is its end card.
    film: {
      kind: "video",
      src: `${R2}/media-manipulator/MM_Launch_90.mp4`,
      poster: "/media-manipulator/launch-90-poster.webp",
      alt: "Media Manipulator launch film: a photo converted to sepia, a background removed, GPS and 120 metadata tags stripped, a face blurred, an SVG animated in Motion and a clip edited in Darkroom, ending on the aperture logo and media-manipulator.com",
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
    title: "Media Manipulator — browser media tools, Darkroom and Motion",
    description:
      "75+ image, video and audio tools, Darkroom (a multi-track browser video editor) and Motion (an SVG animator), backed by a Go API and GPU AI. By Mitch Wintrow.",
  },
  order: 1,
});
