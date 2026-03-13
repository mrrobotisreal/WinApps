"use client";

import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import AdBanner from "@/components/ad-banner";

const MIRROR_BANNER_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="300" viewBox="0 0 1500 300" fill="none">
    <defs>
      <linearGradient id="mirror-bg" x1="0" y1="0" x2="1500" y2="300" gradientUnits="userSpaceOnUse">
        <stop stop-color="#fb923c" />
        <stop offset="1" stop-color="#9333ea" />
      </linearGradient>
    </defs>
    <rect width="1500" height="300" rx="28" fill="url(#mirror-bg)" />
    <circle cx="1210" cy="78" r="120" fill="white" fill-opacity="0.08" />
    <circle cx="1330" cy="214" r="164" fill="white" fill-opacity="0.06" />
    <text x="92" y="138" fill="white" font-family="Inter, Arial, sans-serif" font-size="78" font-weight="700">Mirror Inc.</text>
    <text x="92" y="202" fill="white" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="500">AI interviews for teams and candidates</text>
  </svg>`
)}`;

export default function MirrorPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link
                  href="/portfolio"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
                >
                  Portfolio
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">Mirror Inc.</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex w-full max-w-full justify-center mb-8">
          <AdBanner
            adSlot="6671038874"
            adFormat="leaderboard"
            adPosition="header"
            className="w-full max-w-full"
            style={{ minHeight: "90px" }}
            showCreaTVPromo={true}
            utmMedium="homepage_leaderboard_banner"
            utmCampaign="creatv_launch_promo"
            linkURL="https://www.creatv.io/auth"
          />
        </div>

        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Mirror
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                {" "}
                Inc.
              </span>
            </h1>

            <Card>
              <CardContent className="p-6 space-y-8">
                <div className="w-full">
                  <Image
                    src={MIRROR_BANNER_SVG}
                    alt="Mirror Inc. banner"
                    width={1500}
                    height={300}
                    unoptimized
                    className="w-full rounded-lg"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Position</h2>
                    <p className="text-muted-foreground">
                      Lead Senior Software Engineer & Founding Engineer
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Start & End Dates
                    </h2>
                    <p className="text-muted-foreground">
                      May 2025 - Present (Contract)
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What Mirror Does</h2>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        AI platform for businesses to conduct AI interviews of
                        potential employee candidates
                      </li>
                      <li>
                        Platform for candidates to practice and improve for
                        upcoming technical interviews
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
                    <p className="text-muted-foreground">
                      My work includes product architecture, engineering
                      leadership, and building polished web and mobile
                      experiences around interview workflows, candidate
                      preparation, and AI-assisted evaluation.
                    </p>
                  </div>
                </div>

                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-2">Company URL</h2>
                  <a
                    href="https://trymirror.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                  >
                    https://trymirror.ai
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
