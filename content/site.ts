import { SiteConfig } from "./schema";

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
        { label: "Сумрак", href: "/projects/sumrak" },
        { label: "Media Manipulator", href: "/projects/media-manipulator" },
        { label: "CreaTV", href: "/projects/creatv" },
        { label: "All projects", href: "/projects" },
      ],
    },
    {
      label: "Work",
      href: "/portfolio",
      children: [
        { label: "People Inc", href: "/portfolio/people-inc" },
        { label: "Mirror", href: "/portfolio/mirror" },
        { label: "Double Raven", href: "/portfolio/double-raven-2025" },
        { label: "Amazon Connect", href: "/portfolio/amazon-connect" },
        { label: "VMware", href: "/portfolio/vmware" },
        { label: "All", href: "/portfolio" },
      ],
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
