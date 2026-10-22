import { banner, logo96, R2_LEGACY } from "../cdn";
import { Project } from "../schema";

export const textFormatter = Project.parse({
  slug: "text-formatter",
  name: "Text Formatter",
  tier: "archive",
  status: "shipped",
  role: "Creator, sole engineer",
  start: "2025-05",
  end: "2025-05",
  tagline: "Text formatting that survives pasting into LinkedIn, X and Facebook.",
  summary: [
    "Format text as bold, italic, underline, strikethrough or monospace, with nested bulleted and numbered lists, then copy it and paste it into LinkedIn, X or Facebook with the formatting intact. Built with Vite, TypeScript, React, shadcn/ui and Tailwind CSS, deployed on Vercel.",
  ],
  sections: [],
  tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Radix UI", "Tailwind CSS", "Vercel"],
  links: [
    { label: "Open Text Formatter", href: "https://ui.formatter.winapps.io/", external: true },
    { label: "Source on GitHub", href: "https://github.com/mrrobotisreal/text_formatter", external: true },
    { label: "Privacy policy", href: "/projects/text-formatter/privacy-policy" },
  ],
  media: {
    banner: banner(`${R2_LEGACY}/WinApps_TextFormatterBanner.webp`, "Text Formatter"),
    logo: logo96(`${R2_LEGACY}/WinApps_TextFormatterLogo.webp`, "Text Formatter"),
    gallery: [],
  },
  seo: {
    title: "Text Formatter — formatting that survives pasting",
    description:
      "Format text once and paste it into LinkedIn, X or Facebook with bold, italics and lists intact. Built by Mitch Wintrow.",
  },
  order: 9,
});
