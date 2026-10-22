import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Content-addressed by filename and never edited in place: cache for a year.
    const immutable = [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }];
    const rules = ["/fonts/:path*", "/sumrak/:path*", "/media-manipulator/:path*", "/creatv/:path*"].map((source) => ({
      source,
      headers: immutable,
    }));
    // Correct type for Ogg Opus so every browser picks it up as audio.
    rules.push({ source: "/:path*.opus", headers: [{ key: "Content-Type", value: "audio/ogg; codecs=opus" }] });
    return rules;
  },
  async rewrites() {
    // Markdown twins of each project and role page (for /llms.txt readers).
    return [
      { source: "/projects/:slug.md", destination: "/md/projects/:slug" },
      { source: "/portfolio/:slug.md", destination: "/md/portfolio/:slug" },
    ];
  },
  async redirects() {
    return [
      { source: "/projects/rss-today", destination: "/projects", permanent: true },
      { source: "/projects/media-manipulator-pro", destination: "/projects/media-manipulator", permanent: true },
      { source: "/projects/aspire-to-expand", destination: "/projects", permanent: true },
      { source: "/about/mitchell-wintrow", destination: "/about", permanent: true },
      { source: "/products/journey-app", destination: "/projects/journey-app", permanent: true },
      { source: "/portfolio/flashmock", destination: "/portfolio/mirror", permanent: true },
      { source: "/portfolio/double-raven", destination: "/portfolio/double-raven-2025", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "winapps-solutions-llc.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-78793ece177d4113887533c21c99d3b4.r2.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
