import { R2 } from "../cdn";
import { Project } from "../schema";

export const financeFlow = Project.parse({
  slug: "finance-flow",
  name: "Finance Flow",
  tier: "standard",
  status: "shipped",
  role: "Creator, sole engineer",
  start: "2025-09",
  end: "2026-02",
  tagline: "Budget planning and investment goals with AI insights.",
  summary: [
    "Finance Flow is a web app for tracking spending, saving, investments and stocks. It gives personalized AI insights into your spending and saving habits, shows how your portfolio and the market are doing, and makes personalized stock recommendations.",
  ],
  sections: [
    {
      id: "role",
      heading: "Role",
      paragraphs: ["I was the sole engineer, from the backend architecture to deployment."],
      bullets: [
        "Designed the backend architecture from scratch.",
        "Built a fast, focused UI.",
        "Deployed the backend and frontend with TLS, rate limiting and other security measures.",
      ],
    },
    {
      id: "backend",
      heading: "Backend",
      paragraphs: [
        "The API is Node.js on Supabase, deployed on my own non-cloud servers with TLS from Let's Encrypt, HTTP redirected to HTTPS, and rate limiting.",
      ],
    },
    {
      id: "frontend",
      heading: "Frontend",
      paragraphs: [
        "The web client is Vite, TypeScript and React with shadcn/ui, Radix UI and Tailwind CSS, deployed on Vercel.",
      ],
    },
  ],
  tech: ["Node.js", "Supabase", "Vite", "TypeScript", "React", "shadcn/ui", "Radix UI", "Tailwind CSS", "Let's Encrypt", "Vercel"],
  links: [{ label: "Visit financeflow.link", href: "https://www.financeflow.link", external: true }],
  media: {
    banner: {
      kind: "image",
      src: `${R2}/finance-flow-banner.png`,
      alt: "Finance Flow crest over a city skyline",
      width: 1500,
      height: 300,
    },
    gallery: [],
  },
  seo: {
    title: "Finance Flow — budget planning and investment goals",
    description:
      "A web app for budgeting, investment tracking and AI insights into spending and saving, built end to end by Mitch Wintrow with Node.js, Supabase and React.",
  },
  order: 4,
});
