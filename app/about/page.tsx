"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  trackPageView,
  trackUserSession,
  trackScrollDepth,
  trackTimeOnPage,
  trackButtonClick,
  trackFeatureUsage,
} from "@/lib/analytics";

export default function AboutPage() {
  const [pageStartTime] = useState(Date.now());
  const scrollDepthRef = useRef(0);
  const lastScrollUpdate = useRef(0);

  useEffect(() => {
    trackPageView("About");

    // Set user session data
    const isReturningUser = localStorage.getItem("hasVisited") === "true";
    trackUserSession({
      user_type: isReturningUser ? "returning" : "new",
      preferred_content: "about_page",
    });

    // Track that user is interested in learning about Mitchell
    trackFeatureUsage("about_page_visit", {
      section: "about",
      content_type: "personal_info",
    });

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / documentHeight) * 100;

      scrollDepthRef.current = Math.max(scrollDepthRef.current, scrollPercent);

      // Update tracking every 25% milestone
      const milestone = Math.floor(scrollPercent / 25) * 25;
      if (milestone > lastScrollUpdate.current && milestone <= 100) {
        trackScrollDepth(scrollTop, documentHeight);
        lastScrollUpdate.current = milestone;
      }
    };

    // Track time on page when user leaves
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
      trackTimeOnPage(timeSpent, window.location.href);
    };

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
        trackTimeOnPage(timeSpent, window.location.href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pageStartTime]);

  const handleSectionView = (sectionName: string) => {
    trackFeatureUsage("about_section_view", {
      section_name: sectionName,
      page: "about",
    });
  };

  const handleCardInteraction = (
    cardTitle: string,
    interactionType: string,
  ) => {
    trackButtonClick(
      `about_card_${cardTitle.toLowerCase().replace(/\s+/g, "_")}`,
      interactionType,
      "about_page",
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              About{" "}
            </span>
            <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
              Mitchell{" "}
            </span>
            <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
              Wintrow
            </span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <Image
              src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_mitchProfilePic.webp"
              alt="Mitchell Wintrow"
              width={256}
              height={256}
              className="rounded-full mx-auto mb-8 shadow-lg"
              onLoad={() =>
                trackFeatureUsage("profile_image_loaded", { page: "about" })
              }
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Senior Software Engineer focused on mobile, web, AI, and
              distributed backend systems. I currently work on the mobile app ad
              revenue team at People Inc., and outside of work my primary
              mission is building CreaTV Ltd., a creator-first UGC video
              platform, like YouTube but better. My very close second mission is
              learning foreign languages including Russian, Ukrainian, Hebrew,
              Farsi, Modern Standard Arabic, Vietnamese, Mandarin Chinese, and
              Spanish, and building software that helps people learn faster,
              communicate across cultures, and connect around the world.
              I&apos;m also a Lead Senior Software Engineer & Founding Engineer
              at Mirror Inc., an AI interview platform for businesses to conduct
              AI interviews and for candidates to practice and improve for
              technical interviews.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            onMouseEnter={() => handleSectionView("professional_experience")}
          >
            <CardHeader>
              <CardTitle
                onClick={() =>
                  handleCardInteraction(
                    "Professional Experience",
                    "title_click",
                  )
                }
                className="cursor-pointer"
              >
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Senior Software Engineer at People Inc. (Full-time, Aug 2025
                  - Present) - working on the mobile app ad revenue team
                </li>
                <li>
                  • Lead Senior Software Engineer & Founding Engineer at Mirror
                  Inc. (Contract, May 2025 - Present)
                </li>
                <li>
                  • Frontend Software Engineer at Double Raven Solutions LLC
                  (Part-time, Jan 2025 - May 2025)
                </li>
                <li>
                  • Frontend Software Engineer at Amazon Web Services
                  (Full-time, Aug 2022 - Nov 2024)
                </li>
                <li>
                  • Backend Software Engineer at VMware (Full-time, Jun 2022 -
                  Aug 2022)
                </li>
                <li>
                  • (Student Full-stack Software Engineer at Hack Reactor
                  bootcamp (Full-time 576 hours certification, Feb 2022 - May
                  2022))
                </li>
                <li>
                  • Full-stack Software Engineer at Double Raven Solutions LLC
                  (Full-time, Jun 2020 - Jan 2022)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card onMouseEnter={() => handleSectionView("technical_skills")}>
            <CardHeader>
              <CardTitle
                onClick={() =>
                  handleCardInteraction("Technical Skills", "title_click")
                }
                className="cursor-pointer"
              >
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Mobile Development (iOS, Android, React Native, Expo,
                  Kotlin, Swift, Flutter)
                </li>
                <li>
                  • Web Development (React, Next.js, TypeScript, Vite, Svelte,
                  Tailwind CSS)
                </li>
                <li>
                  • Backend Development (Java, Python, Go, Node.js, MySQL,
                  PostgreSQL, MongoDB, Redis, RabbitMQ, Kafka)
                </li>
                <li>
                  • Cloud Services (AWS, Docker, Kubernetes, Google Cloud
                  Platform, Firebase, Vercel, GetStream.io)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card onMouseEnter={() => handleSectionView("current_projects")}>
            <CardHeader>
              <CardTitle
                onClick={() =>
                  handleCardInteraction("Current Projects", "title_click")
                }
                className="cursor-pointer"
              >
                Current Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • CreaTV - Web and mobile app for creating and sharing videos;
                  content creator driven video platform like YouTube but better.
                </li>
                <li>
                  • Mirror - AI interview platform for businesses and candidates
                </li>
                <li>
                  • Media Manipulator - Image, video, and audio editing and
                  transformation tools
                </li>
                <li>• Voizy - Social/mobile app</li>
                <li>• Journey App - Journaling and reflection app</li>
                <li>• Various web, desktop, mobile, AI, and internal tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card onMouseEnter={() => handleSectionView("education_learning")}>
            <CardHeader>
              <CardTitle
                onClick={() =>
                  handleCardInteraction("Education & Learning", "title_click")
                }
                className="cursor-pointer"
              >
                Education & Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Bachelor of Science in Computer Science from WGU</li>
                <li>
                  • Hack Reactor bootcamp (Full-time 576 hours certification)
                  graduate (voted class President)
                </li>
                <li>• Active in the developer community</li>
                <li>• Technical blog writer and educator</li>
                <li>
                  • Conference attendee and participant (AWS re:Invent, Web
                  Summit, etc.)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card onMouseEnter={() => handleSectionView("Personal")}>
            <CardHeader>
              <CardTitle
                onClick={() => handleCardInteraction("Personal", "title_click")}
                className="cursor-pointer"
              >
                Personal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Founder & Principal Engineer of{" "}
                  <a
                    href="https://www.creatv.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CreaTV Ltd.
                  </a>
                </li>
                <li>
                  • Passionate about software engineering, AI, and building
                  systems end-to-end across product, infrastructure, and tooling
                </li>
                <li>
                  • Built a custom full tower server / workstation and runs
                  custom AI models locally, with ongoing AI server and home-lab
                  experiments
                </li>
                <li>
                  • Passionate about language learning; I speak several
                  languages (Русский язык, עִברִית, Tiếng Việt) and I actively
                  study several languages including Spanish, Ukrainian, Farsi,
                  Mandarin Chinese, and Modern Standard Arabic
                </li>
                <li>
                  • Loves traveling the world with my fiancée Alina, who is from
                  Ukraine
                </li>
                <li>
                  • Loves bringing a DJI Mini 4 Pro to scenic places and filming
                  drone flyover videos
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card onMouseEnter={() => handleSectionView("get_in_touch")}>
            <CardHeader>
              <CardTitle
                onClick={() =>
                  handleCardInteraction("Get In Touch", "title_click")
                }
                className="cursor-pointer"
              >
                Get In Touch
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                I&apos;m always interested in discussing new opportunities,
                collaborations, or just connecting with fellow developers and
                tech enthusiasts.
              </p>
              <div className="space-y-2">
                <p
                  onClick={() => {
                    trackButtonClick(
                      "email_click",
                      "contact_info",
                      "about_page",
                    );
                    navigator.clipboard.writeText("mitchellwintrow@gmail.com");
                  }}
                  className="cursor-pointer hover:text-primary transition-colors"
                  title="Click to copy email"
                >
                  Email: mitchellwintrow@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
