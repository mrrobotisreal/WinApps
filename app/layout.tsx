import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { R2_LEGACY } from "@/content/cdn";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { home } = site.copy.pages;
const ogImage = `${R2_LEGACY}/WinAppsOpenGraph.jpg`;

/** Site-wide defaults; each page overrides title, description and canonical. */
export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: home.title,
  description: home.description,
  authors: [{ name: profile.name }],
  creator: profile.name,
  publisher: site.siteName,
  openGraph: {
    title: home.title,
    description: home.description,
    type: "website",
    locale: "en_US",
    url: site.baseUrl,
    siteName: site.siteName,
    images: [{ url: ogImage, width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: home.title,
    description: home.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google:
      "google-site-verification=NYEhSNKfUT2whyHI30oxOlNXrQ4_jbzTKiwmrQAP_7s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3413790368941825"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
