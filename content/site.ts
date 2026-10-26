import { R2 } from "./cdn";
import { experience } from "./experience";
import { SiteConfig } from "./schema";

/** One Work menu link per company, newest role first (Double Raven appears once). */
const workLinks = experience
  .filter((e, i, all) => all.findIndex((x) => x.shortName === e.shortName) === i)
  .map((e) => ({ label: e.shortName, href: `/portfolio/${e.slug}` }));

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mitchell-wintrow/", external: true },
  { label: "GitHub", href: "https://github.com/mrrobotisreal", external: true },
  { label: "Medium", href: "https://medium.com/@90mitchwintrow", external: true },
  { label: "X", href: "https://x.com/mitchwintrow", external: true },
  { label: "YouTube", href: "https://www.youtube.com/@mitchwintrow", external: true },
  { label: "Linktree", href: "https://linktr.ee/wintrow", external: true },
];

export const site = SiteConfig.parse({
  baseUrl: "https://www.winapps.io",
  siteName: "WinApps.io",
  nav: [
    {
      label: "Projects",
      href: "/projects",
      children: [
        { label: "Media Manipulator", href: "/projects/media-manipulator" },
        { label: "Сумрак", href: "/projects/sumrak" },
        { label: "CreaTV", href: "/projects/creatv" },
        { label: "All projects", href: "/projects" },
      ],
    },
    {
      label: "Work",
      href: "/portfolio",
      children: [...workLinks, { label: "All", href: "/portfolio" }],
    },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    copyrightHolder: "WinApps",
    rightsNotice: "All rights reserved",
    email: "mitchellwintrow@gmail.com",
    socials,
  },
  copy: {
    home: {
      greeting: "Hi, I'm",
      introVideo: {
        kind: "video",
        src: `${R2}/NewestIntroVideo_720.mp4`,
        poster: "/intro-video-poster.jpg",
        alt: "WinApps intro animation: glass cubes floating over a dark circuit-board city",
        width: 1280,
        height: 720,
      },
      ctaEmail: "Email",
      ctaResume: "Resume",
      ctaBuilding: "See what I'm building",
      buildingHeading: "What I'm building now",
      readCaseStudy: "Read the case study",
      flagshipHeading: "Flagship projects",
      workHeading: "Work history",
      moreProjectsHeading: "More projects",
      blogHeading: "Writing",
      skillsHeading: "Skills",
    },
    pages: {
      about: {
        title: "About Mitchell Wintrow",
        intro: "Senior software engineer across mobile, web and backend systems.",
        description:
          "Mitchell Wintrow is a senior software engineer at People Inc. who builds Media Manipulator, Сумрак and CreaTV outside work.",
      },
      contact: {
        title: "Contact",
        intro: "Email is the fastest way to reach me. My resume is below.",
        description: "Contact Mitchell Wintrow by email, find him on GitHub, LinkedIn, X, Medium and YouTube, or download his resume.",
      },
      blog: {
        title: "Blog",
        intro: "Technical posts and tutorials, published on Medium.",
        description: "Technical blog posts by Mitchell Wintrow on React, JavaScript, GitHub READMEs and serving HTTPS from EC2.",
      },
      portfolio: {
        title: "Work history",
        intro: "Where I've worked and what I built there.",
        description:
          "Mitchell Wintrow's work history, from People Inc., Amazon Web Services and VMware to founding-engineer roles at early-stage companies.",
      },
      projects: {
        title: "Projects",
        intro: "What I'm building now, my flagship products, and earlier work.",
        description:
          "Projects by Mitchell Wintrow: Media Manipulator, Сумрак, CreaTV, and earlier mobile and web apps.",
      },
      home: {
        title: "Mitch Wintrow — Senior Software Engineer",
        intro: "",
        description:
          "Mitchell Wintrow builds mobile ad tech at People Inc. and ships Media Manipulator, Сумрак and CreaTV. Projects, work history, writing and contact.",
      },
    },
    labels: {
      home: "Home",
      present: "Present",
      archived: "Archived",
      highlights: "Highlights",
      tech: "Tech",
      links: "Links",
      gallery: "Gallery",
      viewProject: "View project",
      viewRole: "View role",
      readPost: "Read the post",
      liveSite: "Live site",
      source: "Source",
      employment: {
        "full-time": "Full-time",
        "part-time": "Part-time",
        contract: "Contract",
        apprenticeship: "Apprenticeship",
        "co-founder": "Co-founder",
      },
      education: "Education",
      languages: "Languages",
      personal: "Outside work",
      experience: "Experience",
      email: "Email",
      resumePdf: "Resume (PDF)",
      resumeDocx: "Resume (Word)",
      socials: "Elsewhere",
      notFoundTitle: "Page not found",
      notFoundBody: "That page doesn't exist or has moved.",
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
      menu: "Menu",
      resume: "Resume",
      sponsored: "Sponsored",
      forAgents: "For AI agents: /llms.txt",
      audioLanguage: "Language:",
      soundOn: "Sound on",
      soundOff: "Sound off",
    },
  },
  excludeFromSitemap: [
    "/redirects/photos/albums/*",
    "/download/*",
    "/products/journey-app/contact/form",
  ],
  excludeFromLlms: [
    "/redirects/photos/albums/*",
    "/download/*",
    "/products/journey-app/contact/form",
  ],
});
