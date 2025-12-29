import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { generateMetadata as createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Projects - WinApps.io",
  description:
    "Explore Mitchell Wintrow's latest mobile apps and web applications including Voizy, Journey App, Aspire To Expand, and more.",
  path: "projects",
  keywords: [
    "projects",
    "mobile apps",
    "web applications",
    "Voizy",
    "Journey App",
    "Aspire To Expand",
    "portfolio",
  ],
});
// https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/mp3-drive-player-banner.png
export default function ProjectsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Current Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest mobile apps and web applications that I&apos;m
            currently working on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">CreaTV</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="flex flex-col gap-2 h-full">
              <div className="flex justify-center w-full">
                <Image
                  src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/CreaTV_WinAppsProjectCard.png"
                  alt="CreaTV"
                  width={1500}
                  height={300}
                  className="rounded-md"
                />
              </div>
              <p className="text-muted-foreground flex-1">
                It&apos;s like YouTube, but with a content creator driven focus,
                much better creator monetization, and an amazing UI/UX
                that&apos;s much better than Rumble.
              </p>
              <div className="flex items-center justify-between mt-2">
                <Badge
                  variant="outline"
                  className="bg-success-gradient text-white font-bold px-3 rounded-md"
                >
                  Current
                </Badge>
                <Link
                  href="/projects/creatv"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline flex items-center"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Finance Flow
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/finance-flow-banner.png"
                    alt="Finance Flow"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  A web app for tracking your finances, investments, stocks, and
                  getting personalized AI insights into your spending and saving
                  habits as well as how the stock market is performing including
                  how your portfolio is doing and personalized stock
                  recommendations.
                </p>
                <Link
                  href="/projects/finance-flow"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                MP3 Drive Player
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/mp3-drive-player-banner.png"
                    alt="MP3 Drive Player"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  A language learning mobile app (and soon web app too!) with
                  Pimsleur audio courses, stats dashboard, games, and chat.
                </p>
                <Link
                  href="/projects/mp3-drive-player"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">Journey App</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/JourneyAppBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_JourneyAppBanner.webp"
                    alt="Journey App"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  iOS journaling app for personal growth and reflection written
                  in Swift + SwiftUI/UIKit. Coming soon to Android as well!
                </p>
                <Link
                  href="/projects/journey-app"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">Voizy</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/VoizyBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VoizyBanner.webp"
                    alt="Voizy"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Android social media app written in Kotlin. Coming soon to iOS
                  as well!
                </p>
                <Link
                  href="/projects/voizy"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Aspire To Expand
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/AspireToExpandBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_AspireToExpandBanner.webp"
                    alt="Aspire To Expand"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Language learning platform on desktop, web, and mobile.
                </p>
                <Link
                  href="/projects/aspire-to-expand"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Media Manipulator Pro
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/MediaManipulatorProBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_MediaManipulatorProBanner.webp"
                    alt="Media Manipulator Pro"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Web app for multimedia conversions and editing.
                </p>
                <Link
                  href="/projects/media-manipulator-pro"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Quantum River
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/quantum-river/QuantumRiverBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_QuantumRiverBanner.webp"
                    alt="Quantum River"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Web app for generating custom QR codes.
                </p>
                <Link
                  href="/projects/quantum-river"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Text Formatter
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/text-formatter/TextFormatterBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_TextFormatterBanner.webp"
                    alt="Text Formatter"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Web app for formatting text that stays formatted across
                  websites like LinkedIn, Twitter, Facebook, etc.
                </p>
                <Link
                  href="/projects/text-formatter"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">RSS Today</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/rss-today/RSSTodayBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_RSSTodayBanner.webp"
                    alt="RSS Today"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  RSS news reader web app.
                </p>
                <Link
                  href="/projects/rss-today"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
