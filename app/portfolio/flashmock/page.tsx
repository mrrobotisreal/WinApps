"use client";

import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import AdBanner from "@/components/ad-banner";

export default function FlashMockPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
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
                <span className="text-muted-foreground">FlashMock</span>
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
            isFlashMock={true}
            utmMedium="homepage_leaderboard_banner"
            utmCampaign="creatv_launch_promo"
            linkURL="https://www.creatv.io/auth"
          />
        </div>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Flash
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                Mock
              </span>
            </h1>

            {/* Main Content Card */}
            <Card>
              <CardContent className="p-6 space-y-8">
                {/* Banner Image */}
                <div className="w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/winapps-portfolio-images-flashmock-banner.webp"
                    alt="FlashMock"
                    width={1500}
                    height={300}
                    className="w-full rounded-lg"
                  />
                </div>

                {/* Job Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Position</h2>
                    <p className="text-muted-foreground">
                      Lead Senior Frontend and Mobile Software Engineer
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

                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    🚧 Coming Soon... 🚧
                  </h2>
                </div>

                {/* Responsibilities */}
                {/* <div>
                  <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    Some of my responsibilities as a Lead Senior Frontend and Mobile Software Engineer at FlashMock include:
                  </p>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
