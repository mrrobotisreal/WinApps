import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WinApps.io - Mitchell Wintrow",
  description: "Welcome to WinApps.io! I'm Mitchell Wintrow, a software engineer specializing in mobile apps, web development, and cloud solutions. Explore my portfolio, projects, and technical blog posts.",
  keywords: ["Mitchell Wintrow", "WinApps", "Software Engineer", "Mobile Apps", "Web Development", "React", "React Native", "AWS", "Portfolio", "Next.js", "Blog", "Go", "Golang", "MySQL", "PostgreSQL", "MongoDB", "Node.js"],
  authors: [{ name: "Mitchell Wintrow" }],
  creator: "Mitchell Wintrow",
  publisher: "WinApps.io",
  openGraph: {
    title: "WinApps Solutions LLC - Mitchell Wintrow",
    description: "Software engineer specializing in mobile apps, web development, and cloud solutions",
    type: "website",
    locale: "en_US",
    url: "https://winapps.io",
    siteName: "WinApps.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "WinApps.io - Mitchell Wintrow",
    description: "Software engineer specializing in mobile apps, web development, and cloud solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
