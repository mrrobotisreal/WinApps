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
import { ExternalLink, Smartphone } from "lucide-react";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import Image from "next/image";
import { useCanonical } from "@/hooks/useCanonical";

const phoneScreenshots: string[] = [
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy01.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy02.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy03.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy04.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy05.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy06.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy07.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy08.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy09.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy10.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy11.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy12.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy13.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy14.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy15.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy16.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy17.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy18.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy19.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy20.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy21.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy22.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy23.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy24.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy25.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy26.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy27.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy28.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy29.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy30.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy31.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy32.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy33.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy34.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy35.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy36.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy37.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy38.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy39.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy40.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy41.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy42.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy43.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy44.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy45.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy46.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy47.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy48.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy49.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy50.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy51.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy52.webp",
  "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/voizy53.webp",
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
                <span className="text-muted-foreground">Voizy (Android)</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Voizy
              </span>{" "}
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                (Android)
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/voizy/VoizyBanner.webp"
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
