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
import { ExternalLink, Globe } from "lucide-react";
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import Image from "next/image";

const images: string[] = [
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp01.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp02.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp03.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp04.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp05.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp06.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp07.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp08.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp09.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp10.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp11.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp12.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp13.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp14.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp15.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp16.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp17.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp18.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp19.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp20.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp21.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp22.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp23.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp24.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp25.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp26.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp27.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp28.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp29.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp30.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp31.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/mmp32.webp",
];

export default function MediaManipulatorProPage() {
  const [device, setDevice] = useState<string>("web");
  const [screenshots, setScreenshots] = useState<string[]>(images);

  const handleDeviceChange = (newDevice: string) => {
    if (newDevice && newDevice !== device) {
      setDevice(newDevice);
      setScreenshots(images);
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
                <span className="text-muted-foreground">
                  Media Manipulator Pro
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Media
              </span>{" "}
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                Manipulator Pro
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/media-manipulator/MediaManipulatorProBanner.webp"
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_MediaManipulatorProBanner.webp"
                  alt="Media Manipulator Pro Banner"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Position</h2>
                  <p className="text-muted-foreground">
                    Fullstack Engineer (Front End, Back End)
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    {new Date("2025-05-28T00:00:00Z").toLocaleDateString()} -
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
                      <span>
                        Design the entire backend architecture of the
                        application from scratch.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Build an intuitive, engaging, fast, and efficient UI.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Deploy both backend and frontend on custom non-cloud
                        servers, properly configured with TLS/SSL, rate
                        limiting, and other security measures.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>
                        Integrate with Google AdSense and Google Analytics for
                        monetization and analytics.
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
                    {/* Backend */}
                    <AccordionItem value="backend">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build the Backend for the App
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="backend">
                            <AccordionTrigger>
                              Build the Backend for the App
                            </AccordionTrigger>
                            <AccordionContent>
                              I built the backend for the app that allows users
                              to upload images, videos, and audio files to
                              manipulate them. This backend is built with{" "}
                              <Badge variant="secondary">Go</Badge> and{" "}
                              <Badge variant="secondary">Gin</Badge> for the
                              REST API. The media &quot;manipulation&quot; is
                              done with{" "}
                              <Badge variant="secondary">FFmpeg</Badge> and{" "}
                              <Badge variant="secondary">ImageMagick</Badge>.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Frontend */}
                    <AccordionItem value="frontend">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build the Frontend for the App
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="frontend">
                            <AccordionTrigger>
                              Build the Frontend for the App
                            </AccordionTrigger>
                            <AccordionContent>
                              I built the frontend for the app that allows users
                              to upload images, videos, and audio files to
                              manipulate them. This frontend is built with{" "}
                              <Badge variant="secondary">Vite</Badge>,{" "}
                              <Badge variant="secondary">TypeScript</Badge>,{" "}
                              <Badge variant="secondary">React</Badge>,{" "}
                              <Badge variant="secondary">
                                shadcn/ui & Radix UI
                              </Badge>
                              , and{" "}
                              <Badge variant="secondary">Tailwind CSS</Badge>.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Deployment and Monetization */}
                    <AccordionItem value="deployment">
                      <AccordionTrigger className="text-xl font-semibold">
                        Deploy the App and Monetize with Google AdSense and
                        Google Analytics
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="deployment">
                            <AccordionTrigger>
                              Deploy the App and Monetize with Google AdSense
                              and Google Analytics
                            </AccordionTrigger>
                            <AccordionContent>
                              I deployed the app on custom non-cloud servers for
                              the backend API and Vercel for the frontend,
                              pointed DNS to the servers, properly configured
                              with TLS/SSL, rate limiting, and other security
                              measures. I also integrated with Google AdSense
                              and Google Analytics for monetization, analytics,
                              and metrics.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="tls">
                            <AccordionTrigger>
                              Implement secure encrypted transmissions with
                              TLS/SSL
                            </AccordionTrigger>
                            <AccordionContent>
                              I implemented secure encrypted transmissions with
                              TLS/SSL to ensure that all data transmitted
                              between the client and server is encrypted and
                              secure. This was done by setting up a secure HTTPS
                              connection using a valid SSL certificate from{" "}
                              <Badge variant="secondary">LetsEncrypt</Badge> and
                              configuring the server to only accept secure
                              connections over HTTPS, including re-routing all
                              HTTP request to HTTPS.
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
                      href="https://www.media-manipulator.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                    >
                      try it for free now
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                    !
                  </p>

                  <div className="flex justify-center mb-6">
                    <span className="text-yellow-300 font-bold text-lg">
                      Note: There are currently issues accessing these images,
                      they will be back up soon.
                    </span>
                  </div>

                  {/* Device Toggle */}
                  <div className="flex justify-center mb-6">
                    <ToggleGroup
                      type="single"
                      value={device}
                      onValueChange={handleDeviceChange}
                    >
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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
