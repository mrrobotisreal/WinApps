import { banner, logo96, R2_LEGACY } from "../cdn";
import { Project } from "../schema";

export const quantumRiver = Project.parse({
  slug: "quantum-river",
  name: "Quantum River",
  tier: "archive",
  status: "shipped",
  role: "Creator, sole engineer",
  start: "2025-05",
  end: "2025-05",
  tagline: "Custom QR-code generator.",
  summary: [
    "A web app that generates customizable QR codes for websites, contact details, Wi-Fi, SMS and more. Built with Vite, TypeScript, React, shadcn/ui and Tailwind CSS, deployed on Vercel.",
  ],
  sections: [],
  tech: ["Vite", "TypeScript", "React", "shadcn/ui", "Radix UI", "Tailwind CSS", "Vercel"],
  links: [
    { label: "Open Quantum River", href: "https://quantum-river-qr-code-gen.vercel.app/", external: true },
    { label: "Source on GitHub", href: "https://github.com/mrrobotisreal/quantum_river_ui", external: true },
  ],
  media: {
    banner: banner(`${R2_LEGACY}/WinApps_QuantumRiverBanner.webp`, "Quantum River"),
    logo: logo96(`${R2_LEGACY}/WinApps_QuantumRiverLogo.webp`, "Quantum River"),
    gallery: [],
  },
  seo: {
    title: "Quantum River — custom QR-code generator",
    description: "A React web app for custom QR codes for links, contacts, Wi-Fi and SMS. Built by Mitch Wintrow.",
  },
  order: 8,
});
