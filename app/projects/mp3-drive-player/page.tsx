"use client";

// import { useState } from "react"
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ExternalLink } from "lucide-react";
// import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery"
import Link from "next/link";
import Image from "next/image";

// const images: string[] = [
// ];

export default function MP3DrivePlayerPage() {
  // const [device, setDevice] = useState<string>("web")
  // const [screenshots, setScreenshots] = useState<string[]>(images)

  // const handleDeviceChange = (newDevice: string) => {
  //   if (newDevice && newDevice !== device) {
  //     setDevice(newDevice)
  //     setScreenshots(images)
  //   }
  // }

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
                  href="/projects"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
                >
                  Projects
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">MP3 Drive Player</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                MP3 Drive
              </span>{" "}
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                Player
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/mp3-drive-player-banner.png"
                  alt="MP3 Drive Player Banner"
                  width={1500}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Position</h2>
                  <p className="text-muted-foreground">
                    Lead Fullstack Engineer (Mobile,Front End, Back End)
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    {new Date("2025-06-28T00:00:00Z").toLocaleDateString()} -
                    Present
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    Some of my responsibilities as the sole engineer on this
                    project include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Build the mobile app</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Build the web app</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Deploy the mobile app on TestFlight and the web app on
                        Vercel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Integrate with Google Drive API to access the Pimsleur
                        audio files
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Integrate with Stream Chat for the chat feature
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Integrate with PostHog and Mixpanel for analytics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Integrate with Firebase for authentication and storage
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Contributions */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contributions</h2>
                  <p className="text-muted-foreground mb-6">
                    Some of my contributions in this project include:
                  </p>

                  <Accordion type="multiple" className="w-full">
                    {/* Mobile App */}
                    <AccordionItem value="mobile">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build the Mobile App
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="mobile">
                            <AccordionTrigger>
                              Build the Mobile App
                            </AccordionTrigger>
                            <AccordionContent>
                              I built the mobile app that allows users to upload
                              images, videos, and audio files to manipulate
                              them. This mobile app is built with{" "}
                              <Badge variant="secondary">React Native</Badge>,{" "}
                              <Badge variant="secondary">Expo</Badge>, and{" "}
                              <Badge variant="secondary">TypeScript</Badge>. It
                              uses the{" "}
                              <Badge variant="secondary">
                                Google Drive API
                              </Badge>{" "}
                              to access the Google Drive folder and play the
                              Pimsleur audio files,{" "}
                              <Badge variant="secondary">Stream Chat</Badge> for
                              the chat feature,{" "}
                              <Badge variant="secondary">PostHog</Badge> and{" "}
                              <Badge variant="secondary">Mixpanel</Badge> for
                              analytics, and{" "}
                              <Badge variant="secondary">Firebase</Badge> for
                              authentication and storage.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="appstore">
                            <AccordionTrigger>
                              Deployed on App Store
                            </AccordionTrigger>
                            <AccordionContent>
                              I deployed the iOS app on{" "}
                              <Badge variant="secondary">TestFlight</Badge> for
                              Beta testing, and{" "}
                              <Badge variant="secondary">App Store</Badge> for
                              public release will be coming soon.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="android">
                            <AccordionTrigger>
                              Deployed on Google Play Store
                            </AccordionTrigger>
                            <AccordionContent>
                              I will deploy the Android app on{" "}
                              <Badge variant="secondary">
                                Google Play Store
                              </Badge>{" "}
                              for public release soon. For now, you can download
                              the APK file from the{" "}
                              <Link
                                href="/download/mp3-drive-player/android"
                                className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                              >
                                Download
                              </Link>{" "}
                              page (if downloading the APK, please make sure you
                              reach out to mitchellwintrow@gmail.com to get
                              credentials as currently I have disabled new
                              account creation).
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Web App */}
                    <AccordionItem value="web">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build the Web App
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="web">
                            <AccordionTrigger>
                              Build the Web App
                            </AccordionTrigger>
                            <AccordionContent>
                              I built the web app that allows users to upload
                              images, videos, and audio files to manipulate
                              them. This web app is built with{" "}
                              <Badge variant="secondary">Vite</Badge>,{" "}
                              <Badge variant="secondary">TypeScript</Badge>,{" "}
                              <Badge variant="secondary">React</Badge>,{" "}
                              <Badge variant="secondary">
                                shadcn/ui & Radix UI
                              </Badge>
                              , and{" "}
                              <Badge variant="secondary">Tailwind CSS</Badge>.
                              It uses the{" "}
                              <Badge variant="secondary">
                                Google Drive API
                              </Badge>{" "}
                              to access the Google Drive folder and play the
                              Pimsleur audio files,{" "}
                              <Badge variant="secondary">Stream Chat</Badge> for
                              the chat feature,{" "}
                              <Badge variant="secondary">PostHog</Badge> and{" "}
                              <Badge variant="secondary">Mixpanel</Badge> for
                              analytics, and{" "}
                              <Badge variant="secondary">Firebase</Badge> for
                              authentication and storage.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="vercel">
                            <AccordionTrigger>
                              Deployed on Vercel
                            </AccordionTrigger>
                            <AccordionContent>
                              I deployed the web app on{" "}
                              <Badge variant="secondary">Vercel</Badge> for the
                              frontend.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Evidence Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Evidence</h2>
                  <p className="text-muted-foreground mb-6">
                    You can{" "}
                    <Link
                      href="https://www.winapps.io/download/mp3-drive-player/ios"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                    >
                      download the ipa file for iOS testing via sideloading now
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    ! (Or just use TestFlight to download the app once
                    you&apos;ve reached out to me for credentials)
                  </p>
                  <p className="text-muted-foreground mb-6">
                    You can{" "}
                    <Link
                      href="https://www.winapps.io/download/mp3-drive-player/android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                    >
                      download the apk file for Android testing now
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    !
                  </p>
                  <p className="text-muted-foreground mb-6">
                    You can{" "}
                    <Link
                      href="https://lang.media-manipulator.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                    >
                      visit the web app now
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    !
                  </p>

                  {/* Device Toggle */}
                  {/* <div className="flex justify-center mb-6">
                    <ToggleGroup type="single" value={device} onValueChange={handleDeviceChange}>
                      <ToggleGroupItem value="web" aria-label="web">
                        <Globe className="w-4 h-4 mr-2" />
                        Web
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div className="w-full h-full">
                    <RollingGallery
                      images={screenshots}
                      autoplay={true}
                      pauseOnHover={true}
                    />
                  </div> */}
                  <p className="text-muted-foreground mb-6">
                    🚧 Screenshots & Screen Recordings Coming Soon... 🚧
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
