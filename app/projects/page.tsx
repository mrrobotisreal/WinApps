import Layout from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Current Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest mobile apps and web applications that I&apos;m currently working on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Journey App
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/JourneyAppBanner.webp" alt="Journey App" width={1500} height={300} className="rounded-md" />
                </div>
                <p className="text-muted-foreground">
                  iOS journaling app for personal growth and reflection.
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
              <CardTitle className="flex justify-center">
                Voizy
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/VoizyBanner.webp" alt="Voizy" width={1500} height={300} className="rounded-md" />
                </div>
                <p className="text-muted-foreground">
                  Android social media app.
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
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/AspireToExpandBanner.webp" alt="Aspire To Expand" width={1500} height={300} className="rounded-md" />
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
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/MediaManipulatorProBanner.webp" alt="Media Manipulator Pro" width={1500} height={300} className="rounded-md" />
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
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/quantum-river/QuantumRiverBanner.webp" alt="Quantum River" width={1500} height={300} className="rounded-md" />
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
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/text-formatter/TextFormatterBanner.webp" alt="Text Formatter" width={1500} height={300} className="rounded-md" />
                </div>
                <p className="text-muted-foreground">
                  Web app for formatting text that stays formatted across websites like LinkedIn, Twitter, Facebook, etc.
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
              <CardTitle className="flex justify-center">
                RSS Today
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/rss-today/RSSTodayBanner.webp" alt="RSS Today" width={1500} height={300} className="rounded-md" />
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
  )
}