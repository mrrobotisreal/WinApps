"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Smartphone, Tablet, ExternalLink } from "lucide-react"
import CircularGallery from "@/components/blocks/Components/CircularGallery/CircularGallery"
import Link from "next/link"
import Image from "next/image"

const iPhoneScreenshots: { image: string; text: string }[] = [
  {
    text: "Download in the AppStore!",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/portfolio/journey-app/JourneyAppQR.png",
  },
  {
    text: "Login",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone01.webp",
  },
  {
    text: "Home",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone02.webp",
  },
  {
    text: "Filters",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone03.webp",
  },
  {
    text: "Search",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone04.webp",
  },
  {
    text: "Location Picker",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone05.webp",
  },
  {
    text: "Create Entry (Write)",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone06.webp",
  },
  {
    text: "View Entry",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone07.webp",
  },
  {
    text: "Edit Entry",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone08.webp",
  },
  {
    text: "View Image",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/iphone10.webp",
  },
]

const iPadScreenshots: { image: string; text: string }[] = [
  {
    text: "Download in the AppStore!",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/portfolio/journey-app/JourneyAppQR.png",
  },
  {
    text: "Login",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad01.webp",
  },
  {
    text: "Home",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad02.webp",
  },
  {
    text: "Filters",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad03.webp",
  },
  {
    text: "Search",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad04.webp",
  },
  {
    text: "Create Entry (Write)",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad05.webp",
  },
  {
    text: "Location Picker",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad06.webp",
  },
  {
    text: "Create Entry (Preview)",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad07.webp",
  },
  {
    text: "View Entry",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad08.webp",
  },
  {
    text: "View Image",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad09.webp",
  },
  {
    text: "Edit Entry",
    image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/ipad10.webp",
  },
]

export default function JourneyAppPage() {
  const [device, setDevice] = useState<string>("iPhone")
  const [screenshots, setScreenshots] = useState<{ image: string; text: string }[]>(iPhoneScreenshots)

  const handleDeviceChange = (newDevice: string) => {
    if (newDevice && newDevice !== device) {
      setDevice(newDevice)
      setScreenshots(newDevice === "iPhone" ? iPhoneScreenshots : iPadScreenshots)
    }
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/projects" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                  Projects
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">JourneyApp.me (iOS)</span>
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
              <span className="text-muted-foreground"> (iOS)</span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/journey-app/JourneyAppBanner.webp"
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
                    {new Date("2025-02-02T00:00:00Z").toLocaleDateString()} - {new Date("2025-03-18T00:00:00Z").toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">Responsibilities</h2>
                  <p className="text-muted-foreground mb-4">
                    Some of my responsibilities as the sole engineer on this project include:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Design the entire backend architecture of the application from scratch.</span>
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
                        </Link>
                        {" "}and develop/maintain secure authentication and data storage implementations that adhere to that privacy policy.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Build an intuitive, engaging, fast, and efficient UI.</span>
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
                              Implement secure encrypted transmissions with TLS/SSL
                            </AccordionTrigger>
                            <AccordionContent>
                              I implemented secure encrypted transmissions with TLS/SSL to ensure that all data transmitted between the client and server is encrypted and secure. This was done by setting up a secure HTTPS connection using a valid SSL certificate from <Badge variant="secondary">LetsEncrypt</Badge> and configuring the server (written in <Badge variant="secondary">Go</Badge>) to only accept secure connections over HTTPS, including re-routing all HTTP request to HTTPS. This ensures that all data transmitted between the client and server is encrypted and secure, protecting sensitive information from being intercepted by malicious actors.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="tokens">
                            <AccordionTrigger>
                              Generate Unique API Keys and JSON Web Tokens for Each User
                            </AccordionTrigger>
                            <AccordionContent>
                              To prevent anyone from being able to call API endpoints and retrieve or alter another user&apos;s data, <Badge variant="secondary">unique API keys</Badge> are generated in addition to <Badge variant="secondary">JSON Web Tokens</Badge> for each user to establish secure, authenticated sessions between the client and server. When a new user creates an account, a unique API key is generated for that account that expires after 90 days, at which point the key is rotated and replaced by a new key, and each key is subject to rate limiting to prevent potential DDoS attacks or misuse of the APIs.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="bcrypt">
                            <AccordionTrigger>
                              Generate a Random Salt and Hash Passwords With BCrypt
                            </AccordionTrigger>
                            <AccordionContent>
                              I generated a random salt and hashed all passwords with <Badge variant="secondary">BCrypt</Badge> to ensure that all user passwords are securely stored on the server. This was done by generating a random salt for each user and hashing their password with BCrypt before storing it in the database. This ensures that all user passwords are securely stored on the server and that even if the database is compromised, the passwords cannot be easily decrypted.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="s3">
                            <AccordionTrigger>
                              Encrypt Images in S3 and Access With Signed URLs
                            </AccordionTrigger>
                            <AccordionContent>
                              In order to keep every user&apos;s images secure and private while also maximizing storage space on the server for journal entries, I created a private and encrypted <Badge variant="secondary">S3 bucket</Badge> that can only be accessed with a <Badge variant="secondary">pre-signed URL</Badge> for both uploading as well as viewing. This ensures that all images are encrypted and secure while also allowing users to access their images from anywhere in the world without having to worry about them being intercepted or stolen.
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
                              I love using markdown because it&apos;s a simple and easy way to format text to make a document visually appealing, pleasant to read, and guide readers&apos; attention. I wanted users to be able to enjoy this feature and make their journal entries really stand out, so I built a <Badge variant="secondary">Markdown parser</Badge> that allows users to format their text using markdown syntax. This parser supports most of the standard markdown syntax, including headers and subheaders, bulleted lists, inline code blocks, bold, italic, underline, strikethrough and even a custom color syntax that will change the color of the text.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="images">
                            <AccordionTrigger>
                              Add and Remove Up To 10 Images per Journal Entry
                            </AccordionTrigger>
                            <AccordionContent>
                              I built a feature that allows users to add and remove up to <Badge variant="secondary">10 images</Badge> per journal entry, with each image being stored in a secure, private S3 bucket that can only be accessed with a signed URL. This feature allows users to take a photo with their camera or select an image from their photo library, and then view those images in their journal entry as thumbnails at the top of the journal entry, or full size when the image is tapped.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="locations">
                            <AccordionTrigger>
                              Add and Remove Locations and Tags to Journal Entries
                            </AccordionTrigger>
                            <AccordionContent>
                              When users are creating a journal entry, they can add and remove locations and tags to their journal entry to help them organize and categorize their entries. This feature allows users to add locations to their journal entry by searching for a location using <Badge variant="secondary">Apple Maps</Badge> embedded into the app, which will then display the location on a map and store the location&apos;s latitude, longitude, and either the address, name of the location, or user-specified label in the database.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Database and Search */}
                    <AccordionItem value="database">
                      <AccordionTrigger className="text-xl font-semibold">
                        Load Balancer, Distributed Database, and Search Queries with Filters
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="mongodb">
                            <AccordionTrigger>
                              Create a Redundant MongoDB Database with Replica Sets and Optimized Queries by Sharding
                            </AccordionTrigger>
                            <AccordionContent>
                              When dealing with such personal and private information, it&apos;s important to ensure that all data is stored securely and redundantly to prevent data loss. I created a redundant MongoDB database with <Badge variant="secondary">replica sets</Badge> to have multiple backups on separate server nodes, and I optimized queries by <Badge variant="secondary">sharding</Badge> to distribute the workload among multiple server loads, ensuring quick and reliable responses when fetching user data.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="loadbalancer">
                            <AccordionTrigger>
                              Configure a NGINX Load Balancer with TLS and a Least Connected Algorithm
                            </AccordionTrigger>
                            <AccordionContent>
                              I configured a <Badge variant="secondary">NGINX load balancer</Badge> with TLS to offload encrypting/decrypting from the application servers and distribute incoming traffic across each server, ensuring that the application can handle a large number of users and data without any performance issues. This was done by setting up a NGINX load balancer with a <Badge variant="secondary">Least Connected</Badge> algorithm to distribute incoming traffic based on the number of active connections to each server node.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="search">
                            <AccordionTrigger>
                              Build an Advanced Text Search Feature with Multiple Filters
                            </AccordionTrigger>
                            <AccordionContent>
                              I built an advanced text search feature that allows users to search for journal entries based on text content, locations, tags, and timeframes. This feature allows users to search text for specific words or phrases in their journal entries, filter by location to find entries based on a specific location, filter by tag to find entries based on a specific tag, and filter by timeframe to find entries based on a specific timeframe. When a user begins typing text into the search bar, a search query is debounced by 1 second to prevent excessive calls and wait for the user to finish typing.
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
                              Add a Feature to Manage User Preferences and Delete All Data
                            </AccordionTrigger>
                            <AccordionContent>
                              Users can manage their preferences such as choosing different fonts and themes, setting a daily reminder to write a journal entry, and changing their password. Users can also delete all of their data from the app, which will remove all of their journal entries, images, locations, tags, and preferences from the database. This feature allows users to have control over their data and privacy, and ensures that they can easily delete all of their data if they no longer want to use the app.
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
                    </Link>
                    {" "}in the <strong>Apple App Store</strong> and try it for yourself!
                  </p>

                  {/* Device Toggle */}
                  <div className="flex justify-center mb-6">
                    <ToggleGroup type="single" value={device} onValueChange={handleDeviceChange}>
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
                    <CircularGallery
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
  )
}
