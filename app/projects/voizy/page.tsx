"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ExternalLink, Smartphone, Zap } from "lucide-react";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import Image from "next/image";
import { useCanonical } from "@/hooks/useCanonical";
import { Alert, AlertDescription } from "@/components/ui/alert";

const phoneScreenshots: string[] = [
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_033.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_034.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_001.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_002.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_003.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_004.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_005.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_006.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_007.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_008.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_009.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_010.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_011.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_012.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_013.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_014.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_015.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_016.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_017.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_018.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_019.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_020.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_021.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_022.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_023.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_024.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_025.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_026.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_027.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_028.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_029.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_030.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_031.jpg",
  "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev/voizy_032.jpg",
];

export default function VoizyPage() {
  const [device, setDevice] = useState<string>("phone");
  const [screenshots, setScreenshots] = useState<string[]>(phoneScreenshots);

  // Set canonical URL for this page
  useCanonical("projects/voizy");

  const handleDeviceChange = (newDevice: string) => {
    if (newDevice && newDevice !== device) {
      setDevice(newDevice);
      setScreenshots(phoneScreenshots);
    }
  };

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
                <span className="text-muted-foreground">Voizy</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-500 to-purple-500 bg-clip-text text-transparent">
                Voizy
              </span>
            </h1>
          </div>

          {/* Update Alert */}
          <Alert className="border-4 border-gradient-to-r from-purple-500 to-orange-500 bg-gradient-to-r from-orange-400/30 to-purple-500/30 shadow-xl">
            <Zap className="h-5 w-5 text-orange-500" />
            <AlertDescription className="text-base leading-relaxed">
              <div className="space-y-2">
                <p className="font-semibold">
                  <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    🚀 Massive Update Coming Soon!
                  </span>
                </p>
                <p className="text-black dark:text-white">
                  Get ready for an incredible Voizy update that completely
                  revamps the UI, improves the experience tremendously with tons
                  of new features, and fixes lots of bugs!
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <span className="text-sm font-medium">Coming soon to:</span>
                  <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent flex items-center justify-center flex-row gap-1">
                    <svg
                      className="w-5 h-5 mx-auto text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>{" "}
                    iOS
                  </span>
                  <span>and</span>
                  <span className="bg-gradient-to-b from-green-400 to-green-700 bg-clip-text text-transparent flex items-center justify-center flex-row gap-1">
                    <svg
                      className="w-5 h-5 mx-auto text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
                    </svg>{" "}
                    Android
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Stay tuned for the release! 🎉
                </p>
              </div>
            </AlertDescription>
          </Alert>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/VoizyBanner.webp"
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VoizyBanner.webp"
                  alt="Voizy Cover"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Product Links */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Product Links</h2>
                <div className="space-y-2">
                  <Link
                    href="/projects/voizy/privacy-policy"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                  >
                    Privacy Policy
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <br />
                  <Link
                    href="/projects/voizy/support"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                  >
                    Support
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <br />
                  <Link
                    href="/projects/voizy/documentation"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                  >
                    Documentation
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Description</h2>
                <div className="space-y-4">
                  <p className="text-lg font-bold italic text-orange-600 dark:text-orange-400">
                    &quot;Voizy is your new social playground—share, connect,
                    and vibe without ads or creepy tracking. Social media the
                    way it was meant to be!&quot;
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-orange-600 dark:text-orange-400">
                      Voizy
                    </strong>{" "}
                    is a{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      social media app
                    </em>{" "}
                    written entirely in{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      Kotlin
                    </strong>{" "}
                    and{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      Jetpack Compose
                    </strong>{" "}
                    for{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      Android
                    </em>
                    . Create your account, update your profile info, add images,
                    pick a profile pic and a cover pic, upload a song to be
                    played when people visit your profile (courtesy of{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      Epidemic Sound
                    </em>
                    ), search for people and send friend requests, publish posts
                    to the main feed or on a friend&apos;s page, react to posts,
                    leave comments on posts and react to comments, re-post
                    someone else&apos;s post with your own thoughts, create
                    posts with images, location, hashtags, groups, and tags
                    added, create a poll on your post to see everyone&apos;s
                    answers and generate interactions, view recommended posts in
                    different feeds, join and create groups that others can join
                    where you can discuss certain topics, get notifications of
                    new posts and customize which notifications you&apos;d like
                    to receive, and so much more!
                  </p>
                  <p className="text-muted-foreground">
                    This project is incredibly fun to work on and I&apos;ve been{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      learning
                    </em>{" "}
                    <em className="text-purple-600 dark:text-purple-400 font-bold">
                      SO
                    </em>{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      much
                    </em>
                    , particularly about dealing with{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      low-level Android device features
                    </strong>{" "}
                    for{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      secure storage
                    </strong>{" "}
                    of{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      JWTs
                    </em>{" "}
                    and{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      API keys
                    </em>
                    ,{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      integrating 3rd party libraries
                    </strong>{" "}
                    and dependencies for things like{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      dependency injection
                    </strong>{" "}
                    and{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      Google Maps
                    </strong>
                    ,{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      caching
                    </strong>{" "}
                    of things like{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      posts
                    </em>
                    ,{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      images
                    </em>{" "}
                    and{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      audio
                    </em>
                    ,{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      complex SQL joins
                    </strong>{" "}
                    including developing my own{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      custom recommended posts feed algorithm
                    </strong>{" "}
                    strictly with{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      Go code
                    </em>
                    ,{" "}
                    <strong className="text-orange-600 dark:text-orange-400">
                      complex SQL queries
                    </strong>{" "}
                    and{" "}
                    <em className="text-purple-600 dark:text-purple-400">
                      indexed columns and tables
                    </em>
                    , and so much more!
                  </p>
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Technical Contributions
                </h2>
                <p className="text-muted-foreground mb-6">
                  Key technical contributions and achievements in this project:
                </p>

                <Accordion type="multiple" className="w-full">
                  {/* Android Frontend */}
                  <AccordionItem value="android-frontend">
                    <AccordionTrigger className="text-xl font-semibold">
                      Android Frontend Development
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Built a comprehensive Android social media application
                          using <Badge variant="secondary">Kotlin</Badge> and{" "}
                          <Badge variant="secondary">Jetpack Compose</Badge>.
                          The app features a modern, intuitive UI with advanced
                          functionality including profile management, social
                          feeds, friend systems, and multimedia content
                          creation.
                        </p>
                        <div className="space-y-2">
                          <p>
                            <strong>Key Features:</strong>
                          </p>
                          <ul className="space-y-1 ml-4">
                            <li>
                              • Complete user authentication and profile
                              management
                            </li>
                            <li>
                              • Social feed with posts, reactions, and comments
                            </li>
                            <li>
                              • Friend system with search and friend requests
                            </li>
                            <li>
                              • Media upload (images, audio) with compression
                              and optimization
                            </li>
                            <li>
                              • Location-based posting with Google Maps
                              integration
                            </li>
                            <li>
                              • Real-time notifications and customizable
                              settings
                            </li>
                            <li>• Group creation and management features</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Backend Integration */}
                  <AccordionItem value="backend-integration">
                    <AccordionTrigger className="text-xl font-semibold">
                      Backend Architecture & Integration
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Designed and implemented a robust backend system using{" "}
                          <Badge variant="secondary">Go</Badge> with complex{" "}
                          <Badge variant="secondary">MySQL</Badge> database
                          operations and custom algorithms for content
                          recommendation.
                        </p>
                        <div className="space-y-2">
                          <p>
                            <strong>Backend Achievements:</strong>
                          </p>
                          <ul className="space-y-1 ml-4">
                            <li>• Custom recommended posts feed algorithm</li>
                            <li>• Complex SQL joins and optimized queries</li>
                            <li>• Indexed database tables for performance</li>
                            <li>• Secure JWT and API key management</li>
                            <li>
                              • Efficient caching systems for posts, images, and
                              audio
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Security & Performance */}
                  <AccordionItem value="security-performance">
                    <AccordionTrigger className="text-xl font-semibold">
                      Security & Performance Optimization
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Implemented advanced security measures and performance
                          optimizations for Android devices, focusing on secure
                          storage and efficient resource management.
                        </p>
                        <div className="space-y-2">
                          <p>
                            <strong>Security & Performance Features:</strong>
                          </p>
                          <ul className="space-y-1 ml-4">
                            <li>
                              • Low-level Android device features for secure
                              storage
                            </li>
                            <li>
                              • Encrypted local storage for sensitive data
                            </li>
                            <li>• Optimized image and media caching</li>
                            <li>
                              • Dependency injection with{" "}
                              <Badge variant="secondary">Dagger/Hilt</Badge>
                            </li>
                            <li>
                              • Memory-efficient data loading and pagination
                            </li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Third-Party Integrations */}
                  <AccordionItem value="integrations">
                    <AccordionTrigger className="text-xl font-semibold">
                      Third-Party Service Integrations
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          Successfully integrated multiple third-party services
                          to enhance app functionality and user experience.
                        </p>
                        <div className="space-y-2">
                          <p>
                            <strong>Integrated Services:</strong>
                          </p>
                          <ul className="space-y-1 ml-4">
                            <li>
                              •{" "}
                              <Badge variant="secondary">Google Maps API</Badge>{" "}
                              for location services
                            </li>
                            <li>
                              •{" "}
                              <Badge variant="secondary">Epidemic Sound</Badge>{" "}
                              for profile music
                            </li>
                            <li>
                              • <Badge variant="secondary">Firebase</Badge> for
                              push notifications
                            </li>
                            <li>
                              • Custom media processing for audio and image
                              optimization
                            </li>
                            <li>• Real-time data synchronization</li>
                          </ul>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Evidence Section */}
              <div>
                <h2 className="text-2xl font-bold mb-4">App Demos</h2>
                <p className="text-muted-foreground mb-6">
                  Explore the app interface and features through these
                  screenshots and animations:
                </p>
                <p className="text-muted-foreground mb-6">
                  You can{" "}
                  <Link
                    href="https://github.com/mrrobotisreal/VoizyAndroid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                  >
                    view the source code on GitHub here
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  !
                </p>

                {/* <div className="flex flex-col justify-center mb-6">
                  <span className="text-yellow-300 font-bold text-lg">
                    Note: There are currently issues accessing these images,
                    they will be back up soon.
                  </span>
                  <Link
                    href="/projects/voizy/documentation"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                  >
                    Please view the documentation for active demos without any
                    access issues
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div> */}

                {/* Device Toggle */}
                <div className="flex justify-center mb-6">
                  <ToggleGroup
                    type="single"
                    value={device}
                    onValueChange={handleDeviceChange}
                  >
                    <ToggleGroupItem value="phone" aria-label="Phone">
                      <Smartphone className="w-4 h-4 mr-2" />
                      Phone
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="w-full h-full">
                  <RollingGallery
                    images={screenshots}
                    autoplay={true}
                    pauseOnHover={true}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
