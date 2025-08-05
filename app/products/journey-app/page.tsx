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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Smartphone, Tablet, ExternalLink, Zap } from "lucide-react";
import { CircularGalleryWithPreload } from "@/components/blocks/Components/CircularGallery/CircularGallery";
import Link from "next/link";
import Image from "next/image";

const iPhoneScreenshots: { image: string; text: string }[] = [
  // {
  //   text: "Download in the AppStore!",
  //   image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/portfolio/journey-app/JourneyAppQR.png",
  // },
  {
    text: "Login",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone001.png",
  },
  {
    text: "Home",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone002.png",
  },
  {
    text: "Filters",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone003.png",
  },
  {
    text: "Search",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone004.png",
  },
  {
    text: "Location Picker",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone005.png",
  },
  {
    text: "Create Entry (Write)",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone006.png",
  },
  {
    text: "View Entry",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone007.png",
  },
  {
    text: "Edit Entry",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone008.png",
  },
  {
    text: "View Image",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPhone010.png",
  },
];

const iPadScreenshots: { image: string; text: string }[] = [
  // {
  //   text: "Download in the AppStore!",
  //   image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/portfolio/journey-app/JourneyAppQR.png",
  // },
  {
    text: "Login",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad001.png",
  },
  {
    text: "Home",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad002.png",
  },
  {
    text: "Filters",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad003.png",
  },
  {
    text: "Search",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad004.png",
  },
  {
    text: "Create Entry (Write)",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad005.png",
  },
  {
    text: "Location Picker",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad006.png",
  },
  {
    text: "Create Entry (Preview)",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad007.png",
  },
  {
    text: "View Entry",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad008.png",
  },
  {
    text: "View Image",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad009.png",
  },
  {
    text: "Edit Entry",
    image:
      "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev/JourneyApp_iPad010.png",
  },
];

export default function JourneyAppPage() {
  const [device, setDevice] = useState<string>("iPhone");
  const [screenshots, setScreenshots] =
    useState<{ image: string; text: string }[]>(iPhoneScreenshots);

  const handleDeviceChange = (newDevice: string) => {
    if (newDevice && newDevice !== device) {
      setDevice(newDevice);
      setScreenshots(
        newDevice === "iPhone" ? iPhoneScreenshots : iPadScreenshots
      );
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
                <span className="text-muted-foreground">JourneyApp.me</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Journey
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                App.me
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
                  Get ready for an incredible JourneyApp.me update that
                  completely revamps the UI, improves the experience
                  tremendously with tons of new features, and fixes lots of
                  bugs!
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
                  // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/JourneyAppBanner.webp"
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_JourneyAppBanner.webp"
                  alt="JourneyApp Banner"
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
                    Fullstack Engineer (Front End, Back End, Mobile)
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Start & End Dates</h2>
                  <p className="text-muted-foreground">
                    {new Date("2025-02-02T00:00:00Z").toLocaleDateString()} -
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
                        Create a{" "}
                        <Link
                          href="https://winapps.io/projects/journey-app/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold"
                        >
                          Privacy Policy
                        </Link>{" "}
                        and develop/maintain secure authentication and data
                        storage implementations that adhere to that privacy
                        policy.
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
                        Write all{" "}
                        <Link
                          href="https://winapps.io/projects/journey-app/documentation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold"
                        >
                          API Specifications and Documentation
                        </Link>
                        .
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
                    {/* Authentication and Encryption */}
                    <AccordionItem value="auth">
                      <AccordionTrigger className="text-xl font-semibold">
                        Authentication and Encryption
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
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
                              configuring the server (written in{" "}
                              <Badge variant="secondary">Go</Badge>) to only
                              accept secure connections over HTTPS, including
                              re-routing all HTTP request to HTTPS. This ensures
                              that all data transmitted between the client and
                              server is encrypted and secure, protecting
                              sensitive information from being intercepted by
                              malicious actors.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="tokens">
                            <AccordionTrigger>
                              Generate Unique API Keys and JSON Web Tokens for
                              Each User
                            </AccordionTrigger>
                            <AccordionContent>
                              To prevent anyone from being able to call API
                              endpoints and retrieve or alter another
                              user&apos;s data,{" "}
                              <Badge variant="secondary">unique API keys</Badge>{" "}
                              are generated in addition to{" "}
                              <Badge variant="secondary">JSON Web Tokens</Badge>{" "}
                              for each user to establish secure, authenticated
                              sessions between the client and server. When a new
                              user creates an account, a unique API key is
                              generated for that account that expires after 90
                              days, at which point the key is rotated and
                              replaced by a new key, and each key is subject to
                              rate limiting to prevent potential DDoS attacks or
                              misuse of the APIs.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="bcrypt">
                            <AccordionTrigger>
                              Generate a Random Salt and Hash Passwords With
                              BCrypt
                            </AccordionTrigger>
                            <AccordionContent>
                              I generated a random salt and hashed all passwords
                              with <Badge variant="secondary">BCrypt</Badge> to
                              ensure that all user passwords are securely stored
                              on the server. This was done by generating a
                              random salt for each user and hashing their
                              password with BCrypt before storing it in the
                              database. This ensures that all user passwords are
                              securely stored on the server and that even if the
                              database is compromised, the passwords cannot be
                              easily decrypted.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="s3">
                            <AccordionTrigger>
                              Encrypt Images in S3 and Access With Signed URLs
                            </AccordionTrigger>
                            <AccordionContent>
                              In order to keep every user&apos;s images secure
                              and private while also maximizing storage space on
                              the server for journal entries, I created a
                              private and encrypted{" "}
                              <Badge variant="secondary">S3 bucket</Badge> that
                              can only be accessed with a{" "}
                              <Badge variant="secondary">pre-signed URL</Badge>{" "}
                              for both uploading as well as viewing. This
                              ensures that all images are encrypted and secure
                              while also allowing users to access their images
                              from anywhere in the world without having to worry
                              about them being intercepted or stolen.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Journal Entries */}
                    <AccordionItem value="entries">
                      <AccordionTrigger className="text-xl font-semibold">
                        Create, Edit, and Delete Journal Entries
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="markdown">
                            <AccordionTrigger>
                              Build a Markdown Parser for Text Formatting
                            </AccordionTrigger>
                            <AccordionContent>
                              I love using markdown because it&apos;s a simple
                              and easy way to format text to make a document
                              visually appealing, pleasant to read, and guide
                              readers&apos; attention. I wanted users to be able
                              to enjoy this feature and make their journal
                              entries really stand out, so I built a{" "}
                              <Badge variant="secondary">Markdown parser</Badge>{" "}
                              that allows users to format their text using
                              markdown syntax. This parser supports most of the
                              standard markdown syntax, including headers and
                              subheaders, bulleted lists, inline code blocks,
                              bold, italic, underline, strikethrough and even a
                              custom color syntax that will change the color of
                              the text.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="images">
                            <AccordionTrigger>
                              Add and Remove Up To 10 Images per Journal Entry
                            </AccordionTrigger>
                            <AccordionContent>
                              I built a feature that allows users to add and
                              remove up to{" "}
                              <Badge variant="secondary">10 images</Badge> per
                              journal entry, with each image being stored in a
                              secure, private S3 bucket that can only be
                              accessed with a signed URL. This feature allows
                              users to take a photo with their camera or select
                              an image from their photo library, and then view
                              those images in their journal entry as thumbnails
                              at the top of the journal entry, or full size when
                              the image is tapped.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="locations">
                            <AccordionTrigger>
                              Add and Remove Locations and Tags to Journal
                              Entries
                            </AccordionTrigger>
                            <AccordionContent>
                              When users are creating a journal entry, they can
                              add and remove locations and tags to their journal
                              entry to help them organize and categorize their
                              entries. This feature allows users to add
                              locations to their journal entry by searching for
                              a location using{" "}
                              <Badge variant="secondary">Apple Maps</Badge>{" "}
                              embedded into the app, which will then display the
                              location on a map and store the location&apos;s
                              latitude, longitude, and either the address, name
                              of the location, or user-specified label in the
                              database.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Database and Search */}
                    <AccordionItem value="database">
                      <AccordionTrigger className="text-xl font-semibold">
                        Load Balancer, Distributed Database, and Search Queries
                        with Filters
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="mongodb">
                            <AccordionTrigger>
                              Create a Redundant MongoDB Database with Replica
                              Sets and Optimized Queries by Sharding
                            </AccordionTrigger>
                            <AccordionContent>
                              When dealing with such personal and private
                              information, it&apos;s important to ensure that
                              all data is stored securely and redundantly to
                              prevent data loss. I created a redundant MongoDB
                              database with{" "}
                              <Badge variant="secondary">replica sets</Badge> to
                              have multiple backups on separate server nodes,
                              and I optimized queries by{" "}
                              <Badge variant="secondary">sharding</Badge> to
                              distribute the workload among multiple server
                              loads, ensuring quick and reliable responses when
                              fetching user data.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="loadbalancer">
                            <AccordionTrigger>
                              Configure a NGINX Load Balancer with TLS and a
                              Least Connected Algorithm
                            </AccordionTrigger>
                            <AccordionContent>
                              I configured a{" "}
                              <Badge variant="secondary">
                                NGINX load balancer
                              </Badge>{" "}
                              with TLS to offload encrypting/decrypting from the
                              application servers and distribute incoming
                              traffic across each server, ensuring that the
                              application can handle a large number of users and
                              data without any performance issues. This was done
                              by setting up a NGINX load balancer with a{" "}
                              <Badge variant="secondary">Least Connected</Badge>{" "}
                              algorithm to distribute incoming traffic based on
                              the number of active connections to each server
                              node.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="search">
                            <AccordionTrigger>
                              Build an Advanced Text Search Feature with
                              Multiple Filters
                            </AccordionTrigger>
                            <AccordionContent>
                              I built an advanced text search feature that
                              allows users to search for journal entries based
                              on text content, locations, tags, and timeframes.
                              This feature allows users to search text for
                              specific words or phrases in their journal
                              entries, filter by location to find entries based
                              on a specific location, filter by tag to find
                              entries based on a specific tag, and filter by
                              timeframe to find entries based on a specific
                              timeframe. When a user begins typing text into the
                              search bar, a search query is debounced by 1
                              second to prevent excessive calls and wait for the
                              user to finish typing.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Account Settings */}
                    <AccordionItem value="settings">
                      <AccordionTrigger className="text-xl font-semibold">
                        Account Settings
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="preferences">
                            <AccordionTrigger>
                              Add a Feature to Manage User Preferences and
                              Delete All Data
                            </AccordionTrigger>
                            <AccordionContent>
                              Users can manage their preferences such as
                              choosing different fonts and themes, setting a
                              daily reminder to write a journal entry, and
                              changing their password. Users can also delete all
                              of their data from the app, which will remove all
                              of their journal entries, images, locations, tags,
                              and preferences from the database. This feature
                              allows users to have control over their data and
                              privacy, and ensures that they can easily delete
                              all of their data if they no longer want to use
                              the app.
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
                      href="https://apps.apple.com/us/app/journeyapp-me/id6741499202?platform=iphone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold inline-flex items-center gap-1"
                    >
                      download the app now
                      <ExternalLink className="w-4 h-4" />
                    </Link>{" "}
                    in the <strong>Apple App Store</strong> and try it for
                    yourself!
                  </p>

                  {/* <div className="flex justify-center mb-6">
                    <span className="text-yellow-300 font-bold text-lg">
                      Note: There are currently issues accessing these images,
                      they will be back up soon.
                    </span>
                  </div> */}

                  {/* Device Toggle */}
                  <div className="flex justify-center mb-6">
                    <ToggleGroup
                      type="single"
                      value={device}
                      onValueChange={handleDeviceChange}
                    >
                      <ToggleGroupItem value="iPhone" aria-label="iPhone">
                        <Smartphone className="w-4 h-4 mr-2" />
                        iPhone
                      </ToggleGroupItem>
                      <ToggleGroupItem value="iPad" aria-label="iPad">
                        <Tablet className="w-4 h-4 mr-2" />
                        iPad
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </div>

                  <div className="w-full h-full">
                    <CircularGalleryWithPreload
                      items={screenshots}
                      bend={2}
                      textColor="#ffffff"
                      borderRadius={0.05}
                      font="bold 30px ubuntu"
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
