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
import { Smartphone, Computer } from "lucide-react";
// import CircularGallery from "@/components/blocks/Components/CircularGallery/CircularGallery"
import RollingGallery from "@/components/blocks/Components/RollingGallery/RollingGallery";
import Link from "next/link";
import Image from "next/image";

// const mobileScreenshots: { image: string; text: string }[] = [
//   {
//     text: "Login",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile1.webp",
//   },
//   {
//     text: "Home (Activity)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile3.webp",
//   },
//   {
//     text: "Home (Performance)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile2.webp",
//   },
//   {
//     text: "App Settings",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile4.webp",
//   },
//   {
//     text: "Profile Settings",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile5.webp",
//   },
// ]
const mobileScreenshots: string[] = [
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile1.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile3.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile2.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile4.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspireMobile5.webp"
];

// const desktopScreenshots: { image: string; text: string }[] = [
//   {
//     text: "Login",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire0.webp",
//   },
//   {
//     text: "Class (Camera 1)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire1.webp",
//   },
//   {
//     text: "Class (Camera 2)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire2.webp",
//   },
//   {
//     text: "Class (Joined)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire3.webp",
//   },
//   {
//     text: "Chatbot",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire4.webp",
//   },
//   {
//     text: "Chat",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire5.webp",
//   },
//   {
//     text: "Chat (Voice recording)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire6.webp",
//   },
//   {
//     text: "Add Lessons",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire7.webp",
//   },
//   {
//     text: "Secure Checkout (via Stripe)",
//     image: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire8.webp",
//   },
// ]
const desktopScreenshots: string[] = [
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire0.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire1.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire2.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire3.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire4.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire5.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire6.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire7.webp",
  // "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/aspire8.webp"
];

export default function AspireToExpandPage() {
  const [device, setDevice] = useState<string>("desktop");
  const [screenshots, setScreenshots] = useState<string[]>(desktopScreenshots);

  const handleDeviceChange = (newDevice: string) => {
    if (newDevice && newDevice !== device) {
      setDevice(newDevice);
      setScreenshots(
        newDevice === "mobile" ? mobileScreenshots : desktopScreenshots
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
                <span className="text-muted-foreground">Aspire To Expand</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Aspire
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                To Expand
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/aspire-to-expand/AspireToExpandBanner.webp"
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_AspireToExpandBanner.webp"
                  alt="Aspire To Expand Banner"
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
                    {new Date("2024-11-02T00:00:00Z").toLocaleDateString()} -{" "}
                    {new Date("2025-02-01T00:00:00Z").toLocaleDateString()}
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

                    {/* Classes */}
                    <AccordionItem value="entries">
                      <AccordionTrigger className="text-xl font-semibold">
                        Design and Build Video Conferencing Features for Classes
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="video">
                            <AccordionTrigger>
                              Build a Video Conferencing Feature for Classes
                            </AccordionTrigger>
                            <AccordionContent>
                              I built a video conferencing feature for classes
                              that allows users to join a class and interact
                              with the instructor and other students in
                              real-time, and it also allows the instructor to
                              share their screen with the class. This feature is
                              built with{" "}
                              <Badge variant="secondary">WebRTC</Badge> and{" "}
                              <Badge variant="secondary">WebSockets</Badge> to
                              allow for real-time communication between the
                              instructor and students.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Chatbot */}
                    <AccordionItem value="chatbot">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build a Chatbot for the App
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="chatbot">
                            <AccordionTrigger>
                              Build a Chatbot for the App
                            </AccordionTrigger>
                            <AccordionContent>
                              I built a chatbot for the app that allows users to
                              ask questions about the app and get answers. This
                              chatbot is built with{" "}
                              <Badge variant="secondary">OpenAI</Badge> and{" "}
                              <Badge variant="secondary">WebSockets</Badge> to
                              allow for real-time streaming of responses.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Chat */}
                    <AccordionItem value="chat">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build a Chat Feature for the App
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="chat">
                            <AccordionTrigger>
                              Build a Chat Feature for the App
                            </AccordionTrigger>
                            <AccordionContent>
                              I built a chat feature for the app that allows
                              users to chat with the chatbot and other users in
                              the app. This feature is built with{" "}
                              <Badge variant="secondary">MongoDB</Badge> and{" "}
                              <Badge variant="secondary">WebSockets</Badge> to
                              allow for real-time notifications of new messages.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="chat-images">
                            <AccordionTrigger>
                              Add Image Uploading to the Chat Feature
                            </AccordionTrigger>
                            <AccordionContent>
                              I added image uploading to the chat feature that
                              allows users to send images to other users in the
                              chat. This feature is built with{" "}
                              <Badge variant="secondary">S3</Badge> and{" "}
                              <Badge variant="secondary">WebSockets</Badge> to
                              allow for real-time notifications of new messages.
                            </AccordionContent>
                          </AccordionItem>

                          <AccordionItem value="chat-audio">
                            <AccordionTrigger>
                              Add Voice Recording Messages to the Chat Feature
                            </AccordionTrigger>
                            <AccordionContent>
                              I added voice recording messages to the chat
                              feature that allows users to record voice messages
                              and send them to other users in the chat. This
                              feature is built with{" "}
                              <Badge variant="secondary">WebSockets</Badge> to
                              allow for real-time notifications of new messages,
                              and users can also play the voice messages in the
                              chat.
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Payments */}
                    <AccordionItem value="payments">
                      <AccordionTrigger className="text-xl font-semibold">
                        Build a Secure Checkout System for Payments
                      </AccordionTrigger>
                      <AccordionContent>
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="payments">
                            <AccordionTrigger>
                              Build a Secure Checkout System for Payments
                            </AccordionTrigger>
                            <AccordionContent>
                              I built a secure checkout system for payments that
                              allows users to purchase lessons and other
                              products in the app. This system is built with{" "}
                              <Badge variant="secondary">Stripe</Badge>.
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
                      <ToggleGroupItem value="desktop" aria-label="desktop">
                        <Computer className="w-4 h-4 mr-2" />
                        Desktop
                      </ToggleGroupItem>
                      <ToggleGroupItem value="mobile" aria-label="mobile">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobile
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
