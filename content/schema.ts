/**
 * Zod schemas for the site's content layer (contract: ../docs-winapps/CONTENT_SCHEMA.md).
 * Every module under content/ exports values already parsed through these, so a bad
 * entry fails at import time, in tests and in the build.
 */
import { z } from "zod";

const yearMonth = z.string().regex(/^\d{4}-\d{2}$/, "expected YYYY-MM");
const urlOrPath = z.string().url().or(z.string().startsWith("/"));

export const Link = z.object({
  label: z.string(),
  href: urlOrPath,
  external: z.boolean().default(false),
});
export type Link = z.infer<typeof Link>;

export const Media = z.object({
  kind: z.enum(["image", "video"]),
  src: urlOrPath, // R2 URL or a local /public path
  poster: urlOrPath.optional(), // videos
  alt: z.string().min(1), // descriptive, never "screenshot of"
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  caption: z.string().optional(),
});
export type Media = z.infer<typeof Media>;

const AudioSource = z.object({ src: urlOrPath, type: z.string() });

/** A short audio clip with one rendition per language; each lists sources best-first. */
export const AudioClip = z.object({
  title: z.string(),
  description: z.string(),
  versions: z
    .array(
      z.object({
        lang: z.string(), // BCP 47, e.g. "en", "he"
        sources: z.array(AudioSource).min(1),
        durationSeconds: z.number().positive(),
      })
    )
    .min(1),
});
export type AudioClip = z.infer<typeof AudioClip>;

/** Languages offered for a group of clips, in display order; the first is the default. */
export const AudioLanguage = z.object({ code: z.string(), label: z.string(), dir: z.enum(["ltr", "rtl"]).default("ltr") });
export type AudioLanguage = z.infer<typeof AudioLanguage>;

export const Section = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/), // anchor slug
  heading: z.string(),
  paragraphs: z.array(z.string()), // plain prose; **bold** and `code` allowed, no HTML
  bullets: z.array(z.string()).optional(),
  media: z.array(Media).optional(),
  audio: z.array(AudioClip).optional(),
  audioLanguages: z.array(AudioLanguage).optional(),
  links: z.array(Link).optional(),
});
export type Section = z.infer<typeof Section>;

export const Profile = z.object({
  name: z.literal("Mitchell Wintrow"),
  shortName: z.literal("Mitch Wintrow"),
  title: z.string(),
  positioning: z.string(), // hero one-liner
  bio: z.array(z.string()), // about page paragraphs
  email: z.string().email(),
  location: z.string(),
  socials: z.array(Link),
  resume: z.object({ pdf: z.string(), docx: z.string() }),
  education: z.array(
    z.object({
      school: z.string(),
      credential: z.string(),
      dates: z.object({ start: yearMonth, end: yearMonth }).optional(),
      note: z.string().optional(),
    })
  ),
  languages: z.array(z.object({ name: z.string(), level: z.string() })),
  personal: z.array(z.string()), // short "outside work" lines
  skills: z.array(
    z.object({
      group: z.string(), // "Backend", "Frontend", "Mobile"
      items: z.array(z.object({ name: z.string(), icon: urlOrPath })),
    })
  ),
});
export type Profile = z.infer<typeof Profile>;

export const Experience = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/), // route: /portfolio/<slug>
  company: z.string(),
  shortName: z.string(), // nav and compact cards, e.g. "Amazon Connect"
  title: z.string(),
  employment: z.enum(["full-time", "part-time", "contract", "apprenticeship", "co-founder"]),
  start: yearMonth,
  end: yearMonth.nullable(), // null = present
  summary: z.string(), // one sentence for cards
  highlights: z.array(z.string()).min(1).max(8), // impact-first
  sections: z.array(Section), // long-form for the detail page
  tech: z.array(z.string()),
  logo: Media.optional(),
  banner: Media.optional(),
  links: z.array(Link).default([]),
  featured: z.boolean().default(false),
  order: z.number(),
});
export type Experience = z.infer<typeof Experience>;

export const Project = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/), // route: /projects/<slug>
  name: z.string(),
  displayName: z.string().optional(), // e.g. "Сумрак (Sumrak)"
  tier: z.enum(["hero", "flagship", "standard", "archive"]),
  status: z.enum(["active", "shipped", "paused", "archived"]),
  role: z.string(),
  start: yearMonth,
  end: yearMonth.nullable(),
  tagline: z.string().max(120), // card text
  summary: z.array(z.string()).min(1).max(3),
  sections: z.array(Section), // case-study body (empty for archive tier)
  numbers: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  tech: z.array(z.string()),
  links: z.array(Link).default([]), // live site, repo, store
  /** Third-party player embedded on click only (never loads with the page). */
  embed: z
    .object({ src: z.string().url(), title: z.string(), poster: Media, buttonLabel: z.string() })
    .optional(),
  media: z.object({
    hero: Media.optional(),
    /** Launch film: autoplays muted and loops near the top of the project page and the home feature. */
    film: Media.optional(),
    gallery: z.array(Media).default([]),
    banner: Media.optional(),
    logo: Media.optional(),
  }),
  seo: z.object({ title: z.string(), description: z.string().max(160) }),
  order: z.number(),
});
export type Project = z.infer<typeof Project>;

export const BlogPost = z.object({
  title: z.string(),
  href: z.string().url(),
  publisher: z.string(),
  date: yearMonth,
  summary: z.string(),
  image: Media.optional(), // card banner
});
export type BlogPost = z.infer<typeof BlogPost>;

export const PromoSlot = z.object({
  id: z.enum(["home-top", "home-bottom"]),
  product: z.enum(["creatv", "media-manipulator"]),
  creative: Media,
  href: z.string().url(),
  referral: z.string().optional(),
  enabled: z.boolean(),
});
export type PromoSlot = z.infer<typeof PromoSlot>;

const NavItem = z.object({
  label: z.string(),
  href: z.string().startsWith("/"),
  children: z.array(z.object({ label: z.string(), href: z.string().startsWith("/") })).optional(),
});

/** Route patterns: an exact path, or a prefix ending in "/*". */
const RoutePattern = z.string().regex(/^\/[^*]*(\/\*)?$/);

export const SiteConfig = z.object({
  baseUrl: z.string().url(),
  siteName: z.string(),
  nav: z.array(NavItem),
  footer: z.object({
    copyrightHolder: z.string(),
    rightsNotice: z.string(),
    email: z.string().email(),
    socials: z.array(Link),
  }),
  /** Page headings, intros and UI labels; pages render these, never literals. */
  copy: z.object({
    home: z.object({
      greeting: z.string(),
      introVideo: Media,
      promoFilm: Media, // the WinApps portfolio promo at the top of the home page
      ctaEmail: z.string(),
      ctaResume: z.string(),
      ctaBuilding: z.string(),
      buildingHeading: z.string(),
      readCaseStudy: z.string(),
      flagshipHeading: z.string(),
      workHeading: z.string(),
      moreProjectsHeading: z.string(),
      blogHeading: z.string(),
      skillsHeading: z.string(),
    }),
    pages: z.record(z.string(), z.object({ title: z.string(), intro: z.string(), description: z.string().max(160) })),
    labels: z.object({
      home: z.string(),
      present: z.string(),
      archived: z.string(),
      highlights: z.string(),
      tech: z.string(),
      links: z.string(),
      gallery: z.string(),
      viewProject: z.string(),
      viewRole: z.string(),
      readPost: z.string(),
      liveSite: z.string(),
      source: z.string(),
      employment: z.record(z.string(), z.string()),
      education: z.string(),
      languages: z.string(),
      personal: z.string(),
      experience: z.string(),
      email: z.string(),
      resumePdf: z.string(),
      resumeDocx: z.string(),
      socials: z.string(),
      notFoundTitle: z.string(),
      notFoundBody: z.string(),
      toggleTheme: z.string(),
      openMenu: z.string(),
      menu: z.string(),
      resume: z.string(),
      sponsored: z.string(),
      forAgents: z.string(),
      audioLanguage: z.string(),
      soundOn: z.string(),
      soundOff: z.string(),
    }),
  }),
  excludeFromSitemap: z.array(RoutePattern),
  excludeFromLlms: z.array(RoutePattern),
});
export type SiteConfig = z.infer<typeof SiteConfig>;
