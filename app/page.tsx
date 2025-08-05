"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import ProfileCard from "@/components/blocks/Components/ProfileCard/ProfileCard";
import {
  AiFillMediumSquare,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { SiLinktree } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ResumeButtons } from "@/components/resume-buttons";
import AdBanner from "@/components/ad-banner";
import {
  trackPageView,
  trackUserSession,
  trackExternalLink,
  trackProjectView,
  trackVideoInteraction,
  trackButtonClick,
  trackScrollDepth,
  trackTimeOnPage,
  // trackAdInteraction,
  trackSocialClick,
} from "@/lib/analytics";
import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.NEXT_PUBLIC_MP_TOKEN || "", {
  debug: false,
  track_pageview: true,
  persistence: "localStorage",
});

// from-blue-600 from-10% via-orange-500 via-[percentage:20%_70%] to-pink-400 to-100%

export default function Home() {
  const [pageStartTime] = useState(Date.now());
  const scrollDepthRef = useRef(0);
  const lastScrollUpdate = useRef(0);

  useEffect(() => {
    trackPageView("Home");

    // Set user session data
    const isReturningUser = localStorage.getItem("hasVisited") === "true";
    trackUserSession({
      user_type: isReturningUser ? "returning" : "new",
    });

    if (!isReturningUser) {
      localStorage.setItem("hasVisited", "true");
    }

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

  const handleExternalLinkClick = (url: string, text: string) => {
    trackExternalLink(url, text);
  };

  const handleProjectClick = (
    projectName: string,
    projectType: "portfolio" | "project" | "demo"
  ) => {
    trackProjectView(projectName, projectType);
  };

  const handleVideoPlay = () => {
    trackVideoInteraction("intro_video", "play");
  };

  const handleVideoEnd = () => {
    trackVideoInteraction("intro_video", "complete");
  };

  const handleVideoPause = () => {
    trackVideoInteraction("intro_video", "pause");
  };

  const handleSocialClick = (platform: string, url: string, text: string) => {
    trackSocialClick(platform, "click", text);
    trackButtonClick(`social_${platform}`, "social_icon", "hero_section");
    handleExternalLinkClick(url, text);
  };

  // const handleAdInteraction = (
  //   adType: string,
  //   adPosition: string,
  //   interaction: "view" | "click"
  // ) => {
  //   trackAdInteraction(adType, adPosition, interaction);
  // };

  const handleHoverCardView = (projectName: string, cardType: string) => {
    trackButtonClick(`hover_card_${projectName}`, "hover_card", cardType);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 space-y-12">
        <div className="flex justify-center">
          <AdBanner
            adSlot="6671038874"
            adFormat="leaderboard"
            adPosition="header"
            className="w-full max-w-6xl"
            style={{ minHeight: "90px" }}
          />
        </div>

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
              Welcome to{" "}
            </span>
            <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
              Win
            </span>
            <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
              Apps
            </span>
            !
          </h1>

          {/* Intro Video */}
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <video
              src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/NewIntroVideo_720p.mp4"
              autoPlay
              muted
              playsInline
              controls
              className="w-full h-auto"
              onPlay={handleVideoPlay}
              onEnded={handleVideoEnd}
              onPause={handleVideoPause}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to WinApps.io! My name is{" "}
              <span className="font-semibold bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                Mitchell
              </span>{" "}
              <span className="font-semibold bg-gradient-to-b from-orange-300 to-orange-800 bg-clip-text text-transparent">
                Wintrow
              </span>{" "}
              and this my personal website where I detail everything about who I
              am as a software engineer and as a person, provide many examples
              of projects I&apos;ve previously worked on and am currently
              working on, publish all kinds of tech blogs and tutorials, and
              provide you with my contact information. Please have a look at the
              top navigation bar to see all the different pages and sections of
              this website, and you&apos;ll see some easily accessible links
              below of my work experience, projects I&apos;ve worked on, and
              blog posts I&apos;ve written.
            </p>
          </div>

          <div className="flex flex-row gap-4 justify-center">
            <Button variant="secondary" size="icon" className="size-8" asChild>
              <Link
                href="https://www.linkedin.com/in/mitchell-wintrow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                onClick={() =>
                  handleSocialClick(
                    "linkedin",
                    "https://www.linkedin.com/in/mitchell-wintrow/",
                    "LinkedIn"
                  )
                }
              >
                <AiFillLinkedin />
              </Link>
            </Button>
            <Button variant="secondary" size="icon" className="size-8" asChild>
              <Link
                href="https://github.com/mrrobotisreal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                onClick={() =>
                  handleSocialClick(
                    "github",
                    "https://github.com/mrrobotisreal",
                    "GitHub"
                  )
                }
              >
                <AiFillGithub />
              </Link>
            </Button>
            <Button variant="secondary" size="icon" className="size-8" asChild>
              <Link
                href="https://medium.com/@90mitchwintrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                onClick={() =>
                  handleSocialClick(
                    "medium",
                    "https://medium.com/@90mitchwintrow",
                    "Medium"
                  )
                }
              >
                <AiFillMediumSquare />
              </Link>
            </Button>
            <Button variant="secondary" size="icon" className="size-8">
              <Link
                href="https://x.com/mitchwintrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                onClick={() =>
                  handleSocialClick(
                    "twitter",
                    "https://x.com/mitchwintrow",
                    "Twitter"
                  )
                }
              >
                <AiFillTwitterSquare />
              </Link>
            </Button>
            <Button variant="secondary" size="icon" className="size-8" asChild>
              <Link
                href="https://www.youtube.com/@mitchwintrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                onClick={() =>
                  handleSocialClick(
                    "youtube",
                    "https://www.youtube.com/@mitchwintrow",
                    "YouTube"
                  )
                }
              >
                <AiFillYoutube />
              </Link>
            </Button>
            <Button variant="secondary" size="icon" className="size-8" asChild>
              <Link
                href="https://linktr.ee/wintrow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
                onClick={() =>
                  handleSocialClick(
                    "linktree",
                    "https://linktr.ee/wintrow",
                    "Linktree"
                  )
                }
              >
                <SiLinktree />
              </Link>
            </Button>
          </div>

          <div className="flex justify-center">
            <ResumeButtons />
          </div>
        </section>

        <div className="lg:hidden flex justify-center">
          <AdBanner
            adSlot="7449783987"
            adFormat="rectangle"
            adPosition="mobile_content_top"
            className="w-full max-w-md"
            style={{ minHeight: "250px" }}
          />
        </div>

        <div className="hidden lg:col-span-2 lg:flex lg:justify-center">
          <AdBanner
            adSlot="7449783987"
            adFormat="rectangle"
            adPosition="sidebar_main"
            className="w-full h-full"
            style={{ minHeight: "400px" }}
          />
        </div>

        {/* Quick Links Grid */}
        <section className="grid md:grid-cols-2 gap-6">
          {/* Work Experience */}
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center justify-center">
                <CardTitle>Work Experience</CardTitle>
                <p className="text-sm text-muted-foreground italic">
                  Hover over the links if you want to see more details before
                  clicking.
                </p>
              </div>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/portfolio/people-inc"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("People Inc.", "portfolio");
                          trackButtonClick(
                            "work_experience_link",
                            "internal_link",
                            "People Inc."
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("People Inc.", "work_experience")
                        }
                      >
                        People Inc.{" "}
                        <span className="text-xs font-normal italic">
                          (Current)
                        </span>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            src="https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/WinApps_PeopleIncLogo.webp"
                            alt="People Inc. Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            People Inc.{" "}
                            <span className="text-xs font-normal italic">
                              (Current)
                            </span>
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            I&apos;m a senior software engineer at People Inc.,
                            formerly known as Dotdash Meredith. I&apos;m
                            responsible for the design and development of the
                            ads and revenue management system for the People
                            mobile app, which is a news and entertainment app
                            that allows users to read news and watch videos, as
                            well as many of their other apps in development.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            August 2025 - Present
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/portfolio/flashmock"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("FlashMock", "portfolio");
                          trackButtonClick(
                            "work_experience_link",
                            "internal_link",
                            "FlashMock"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("FlashMock", "work_experience")
                        }
                      >
                        FlashMock{" "}
                        <span className="text-xs font-normal italic">
                          (Current)
                        </span>
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/winapps-portfolio-images-flashmock-logo.png"
                            alt="FlashMock Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            FlashMock{" "}
                            <span className="text-xs font-normal italic">
                              (Current)
                            </span>
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            I&apos;m the lead senior frontend and mobile
                            software engineer at FlashMock. I&apos;m responsible
                            for the design, architecture, development, and
                            deployment of staging and production of the frontend
                            and mobile app. This includes landing pages,
                            marketing pages, app features such as AI-assitant,
                            job q&a generation, events and event registration,
                            chat, video streaming, Stripe payments, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            May 2025 - Present
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/portfolio/double-raven"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick(
                            "Double Raven Solutions LLC",
                            "portfolio"
                          );
                          trackButtonClick(
                            "work_experience_link",
                            "internal_link",
                            "Double Raven Solutions LLC"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Double Raven Solutions LLC",
                            "work_experience"
                          )
                        }
                      >
                        Double Raven Solutions LLC
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/DoubleRavenLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_DoubleRavenLogo.webp"
                            alt="Double Raven Solutions LLC Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Double Raven Solutions LLC
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            I was the part-time lead frontend and mobile
                            software engineer at Double Raven Solutions LLC. I
                            was responsible for the design, and development of
                            the frontend and mobile digital police sketch app
                            where witnesses can provide an audio or written
                            description of a suspect&apos;s or missing
                            person&apos;s face, which is then analyzed by AI for
                            keywords and descriptors that can be matched against
                            a database of facial features, then generate a 3D
                            facial sketch which the witness can then either
                            confirm or make adjustments to until it is correct.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            January 2025 - May 2025
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/portfolio/amazon-connect"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick(
                            "Amazon Connect Customer Profiles",
                            "portfolio"
                          );
                          trackButtonClick(
                            "work_experience_link",
                            "internal_link",
                            "Amazon Connect Customer Profiles"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Amazon Connect Customer Profiles",
                            "work_experience"
                          )
                        }
                      >
                        Amazon Connect Customer Profiles
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/ConnectLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_ConnectLogo.webp"
                            alt="Amazon Connect Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Amazon Connect Customer Profiles
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            I was a frontend focused software engineer working
                            on the Amazon Connect Customer Profiles team using
                            React, TypeScript, Node.js, Java 11, Python, & AWS.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            August 2022 - November 2024
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/portfolio/vmware"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("VMware", "portfolio");
                          trackButtonClick(
                            "work_experience_link",
                            "internal_link",
                            "VMware"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("VMware", "work_experience")
                        }
                      >
                        VMware
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/VMwareLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VMwareLogo.webp"
                            alt="VMware Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">VMware</h4>
                          <Separator />
                          <p className="text-sm">
                            I was a purely backend focused software engineer
                            apprentice working on the VMware team using Java 17,
                            Spring Boot, Hibernate, PostgreSQL, H2, Docker,
                            Kubernetes, and GitLab CI/CD.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            June 2022 - August 2022
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/portfolio/double-raven"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick(
                            "Double Raven Solutions LLC",
                            "portfolio"
                          );
                          trackButtonClick(
                            "work_experience_link",
                            "internal_link",
                            "Double Raven Solutions LLC"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Double Raven Solutions LLC",
                            "work_experience"
                          )
                        }
                      >
                        Double Raven Solutions LLC
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/DoubleRavenLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_DoubleRavenLogo.webp"
                            alt="Double Raven Solutions LLC Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Double Raven Solutions LLC
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            I was a full stack software engineer working with
                            Double Raven Solutions LLC from its inception using
                            Go, Python, React, TypeScript, GraphQL, Node.js,
                            Docker, Kubernetes, and Github Actions CI/CD.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            June 2020 - January 2022
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center justify-center">
                <CardTitle>Projects</CardTitle>
                <p className="text-sm text-muted-foreground italic">
                  Hover over the links if you want to see more details before
                  clicking.
                </p>
              </div>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/projects/mp3-drive-player"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("MP3 Drive Player", "project");
                          trackButtonClick(
                            "projects_link",
                            "internal_link",
                            "MP3 Drive Player"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("MP3 Drive Player", "projects")
                        }
                      >
                        MP3 Drive Player
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/LanguagesChannelImage.png"
                            alt="MP3 Drive Player Icon"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            MP3 Drive Player
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            A language learning mobile app (and soon web app
                            too!) with numerous Pimsleur audio courses for
                            multiple languages & skill levels, a dashboard for
                            tracking your listening progress & other stats,
                            Duolingo style games, & a chat feature for
                            connecting with other users.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React Native, TypeScript, Expo, Google Drive API,
                            PostHog + Mixpanel analytics, Firebase auth and
                            Firestore, Stream Chat (by GetStream.io), and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://github.com/mrrobotisreal/JourneyAppWeb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("JourneyApp.me (Web)", "project");
                          handleExternalLinkClick(
                            "https://github.com/mrrobotisreal/JourneyAppWeb",
                            "JourneyApp.me Web GitHub"
                          );
                          trackButtonClick(
                            "projects_link",
                            "external_link",
                            "JourneyApp.me Web GitHub"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("JourneyApp.me (Web)", "projects")
                        }
                      >
                        JourneyApp.me (Web)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/JourneyAppLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_JourneyAppLogo.webp"
                            alt="JourneyApp Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            JourneyApp.me (Web)
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            The Github repo for the JourneyApp.me website, a
                            journaling app that allows you to write journal
                            entries with text formatting, images, locations,
                            tags, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, shadcn/ui, TailwindCSS, Vercel,
                            Firebase, Go, MySQL, and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/projects/journey-app"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("JourneyApp.me (iOS)", "project");
                          handleExternalLinkClick(
                            "https://apps.apple.com/us/app/journeyapp-me/id6741499202?platform=iphone",
                            "JourneyApp.me iOS App Store"
                          );
                          trackButtonClick(
                            "projects_link",
                            "external_link",
                            "JourneyApp.me iOS App Store"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("JourneyApp.me (iOS)", "projects")
                        }
                      >
                        JourneyApp.me (iOS)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/JourneyAppLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_JourneyAppLogo.webp"
                            alt="JourneyApp Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            JourneyApp.me (iOS)
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            The AppStore page for the JourneyApp.me iOS app, a
                            journaling app that allows you to write journal
                            entries with text formatting, images, locations,
                            tags, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            Swift, SwiftUI, UIKit, Go, MongoDB, MySQL, and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/projects/voizy"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("Voizy (Android)", "project");
                          trackButtonClick(
                            "projects_link",
                            "internal_link",
                            "Voizy (Android)"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("Voizy (Android)", "projects")
                        }
                      >
                        Voizy (Android)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/VoizyLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VoizyLogo.webp"
                            alt="Voizy Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Voizy (Android)
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            The project page for the Voizy app, a social media
                            app that allows you to create posts, upload and
                            share images, join groups, upload music, track post
                            analytics, connect with friends, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            Kotlin, Jetpack Compose, Firebase, Go, MySQL, and
                            more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="/projects/aspire-to-expand"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("Aspire To Expand", "project");
                          trackButtonClick(
                            "projects_link",
                            "internal_link",
                            "Aspire To Expand"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView("Aspire To Expand", "projects")
                        }
                      >
                        Aspire To Expand
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/AspireToExpandLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_AspireToExpandLogo.webp"
                            alt="Aspire To Expand Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Aspire To Expand
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            The project page for the Aspire To Expand app, a
                            desktop app for a language learning platform that
                            allows you to connect with teachers and other
                            students, track your progress, attend live video
                            classes, securely pay for classes, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, MUI, Electron, Node.js, Go,
                            MongoDB, and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 lg:flex lg:justify-center">
            <AdBanner
              adSlot="6568479981"
              adFormat="rectangle"
              adPosition="content_middle"
              className="w-full h-full"
              style={{ minHeight: "400px" }}
            />
          </div>

          {/* Live Demos */}
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center justify-center">
                <CardTitle>Live Demos</CardTitle>
                <p className="text-sm text-muted-foreground italic">
                  Hover over the links if you want to see more details before
                  clicking.
                </p>
              </div>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://www.media-manipulator.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick(
                            "Media Manipulator Pro (Media Converter)",
                            "demo"
                          );
                          handleExternalLinkClick(
                            "https://www.media-manipulator.com",
                            "Media Manipulator Pro"
                          );
                          trackButtonClick(
                            "demos_link",
                            "external_link",
                            "Media Manipulator Pro"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Media Manipulator Pro (Media Converter)",
                            "demos"
                          )
                        }
                      >
                        Media Manipulator Pro (Media Converter)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/MediaManipulatorProLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_MediaManipulatorProLogo.webp"
                            alt="Media Manipulator Pro Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Media Manipulator Pro
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            A media converter that allows you to crop images,
                            trim videos, apply stunning filters, convert
                            formats, adjust speed and volume—all with
                            professional-grade tools in a simple drag-and-drop
                            interface.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, shadcn/ui, TailwindCSS, Vercel,
                            Go, Gin, and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://ui.qr-gen.winapps.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick(
                            "Quantum River (Custom QR Code Generator)",
                            "demo"
                          );
                          handleExternalLinkClick(
                            "https://ui.qr-gen.winapps.io",
                            "Quantum River"
                          );
                          trackButtonClick(
                            "demos_link",
                            "external_link",
                            "Quantum River"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Quantum River (Custom QR Code Generator)",
                            "demos"
                          )
                        }
                      >
                        Quantum River (Custom QR Code Generator)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/QuantumRiverLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_QuantumRiverLogo.webp"
                            alt="Quantum River Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Quantum River
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            Quantum River is a custom QR code generator that
                            allows you to create QR codes with custom colors,
                            logos, and text.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, shadcn/ui, TailwindCSS, Vercel
                            and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://ui.formatter.winapps.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("Text Formatter", "demo");
                          handleExternalLinkClick(
                            "https://ui.formatter.winapps.io",
                            "Text Formatter"
                          );
                          trackButtonClick(
                            "demos_link",
                            "external_link",
                            "Text Formatter"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Text Formatter (Site-Agnostic Text Formatter)",
                            "demos"
                          )
                        }
                      >
                        Text Formatter (Site-Agnostic Text Formatter)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/TextFormatterLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_TextFormatterLogo.webp"
                            alt="Text Formatter Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Text Formatter
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            A site-agnostic text formatter that allows you to
                            format text with bold, italic, underline,
                            strikethrough, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, shadcn/ui, TailwindCSS, Vercel,
                            and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://www.rss-today.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick("RSS Today", "demo");
                          handleExternalLinkClick(
                            "https://www.rss-today.com",
                            "RSS Today"
                          );
                          trackButtonClick(
                            "demos_link",
                            "external_link",
                            "RSS Today"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "RSS Today (RSS News Feed Reader)",
                            "demos"
                          )
                        }
                      >
                        RSS Today (RSS News Feed Reader)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/RSSTodayLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_RSSTodayLogo.webp"
                            alt="RSS Today Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">RSS Today</h4>
                          <Separator />
                          <p className="text-sm">
                            RSS Today is a RSS news feed reader that allows you
                            to read RSS feeds from your favorite websites.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, shadcn/ui, TailwindCSS, Vercel,
                            Firebase, Go, Gin, and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://carvana.ui.winapps.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleProjectClick(
                            "CarvanaServer (GraphQL Cursor-Based Pagination)",
                            "demo"
                          );
                          handleExternalLinkClick(
                            "https://carvana.ui.winapps.io",
                            "CarvanaServer"
                          );
                          trackButtonClick(
                            "demos_link",
                            "external_link",
                            "CarvanaServer"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "CarvanaServer (GraphQL Cursor-Based Pagination)",
                            "demos"
                          )
                        }
                      >
                        CarvanaServer (GraphQL Cursor-Based Pagination)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/CarvanaLogo.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_CarvanaLogo.webp"
                            alt="Carvana Logo"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            CarvanaServer
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            CarvanaServer is a GraphQL cursor-based pagination
                            server that allows you to paginate through data.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            React, TypeScript, GraphQL, shadcn/ui, TailwindCSS,
                            Vercel, Node.js, MongoDB, and more.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Blog Posts */}
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center justify-center">
                <CardTitle>Blog Posts</CardTitle>
                <p className="text-sm text-muted-foreground italic">
                  Hover over the links if you want to see more details before
                  clicking.
                </p>
              </div>
              <Separator />
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleExternalLinkClick(
                            "https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374",
                            "The React Files Blog"
                          );
                          trackButtonClick(
                            "blog_posts_link",
                            "external_link",
                            "The React Files Blog"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "The React Files: What They Don't Want You to Know",
                            "blog_posts"
                          )
                        }
                      >
                        The React Files: What{" "}
                        <span className="italic">&quot;They&quot;</span>{" "}
                        Don&apos;t Want You to Know
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/blogs/react-files-hover-card.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_react-files-hover-card.webp"
                            alt="The React Files: What They Don't Want You to Know"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            The React Files: What{" "}
                            <span className="italic">&quot;They&quot;</span>{" "}
                            Don&apos;t Want You to Know
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            An entertaining and informative blog post about
                            React and what{" "}
                            <span className="italic">&quot;they&quot;</span>{" "}
                            don&apos;t want you to know.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            Published on Medium via the{" "}
                            <span className="font-semibold">
                              JavaScript In Plain English
                            </span>{" "}
                            publication.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleExternalLinkClick(
                            "https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7",
                            "JavaScript Power-Ups Blog"
                          );
                          trackButtonClick(
                            "blog_posts_link",
                            "external_link",
                            "JavaScript Power-Ups Blog"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "11 JavaScript Power-Ups You Probably Aren't Using (Yet)",
                            "blog_posts"
                          )
                        }
                      >
                        11 JavaScript Power-Ups You Probably Aren&apos;t Using
                        (Yet)
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/PepeSilviaMeme.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_PepeSilviaMeme.webp"
                            alt="11 JavaScript Power-Ups You Probably Aren't Using (Yet)"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            11 JavaScript Power-Ups You Probably Aren&apos;t
                            Using (Yet)
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            A blog post about 11 JavaScript power-ups you
                            probably aren&apos;t using (yet) and how
                            they&apos;ll turbo-boost your code.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            Published on Medium.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href="https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline"
                        onClick={() => {
                          handleExternalLinkClick(
                            "https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13",
                            "Optimize Multimedia Blog"
                          );
                          trackButtonClick(
                            "blog_posts_link",
                            "external_link",
                            "Optimize Multimedia Blog"
                          );
                        }}
                        onMouseEnter={() =>
                          handleHoverCardView(
                            "Optimize Your Multimedia and Make Your READMEs Pop on GitHub",
                            "blog_posts"
                          )
                        }
                      >
                        Optimize Your Multimedia and Make Your READMEs Pop on
                        GitHub
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div className="flex justify-between gap-4">
                        <div className="h-48 w-48">
                          <Image
                            // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/OptimizeMultimedia.webp"
                            src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_OptimizeMultimedia.webp"
                            alt="Optimize Your Multimedia and Make Your READMEs Pop on GitHub background image"
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold">
                            Optimize Your Multimedia and Make Your READMEs Pop
                            on GitHub
                          </h4>
                          <Separator />
                          <p className="text-sm">
                            A blog post about how to optimize your multimedia
                            and make your READMEs pop on GitHub using powerful
                            tools like ffmpeg, gifsicle, imagemagick, and more.
                          </p>
                          <div className="text-muted-foreground text-xs">
                            Published on Medium.
                          </div>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Profile Card */}
        <section className="flex justify-center items-center">
          <ProfileCard
            name="Mitch Wintrow"
            title="Software Engineer"
            handle="mitchwintrow"
            // avatarUrl="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/NewProfilePic.webp"
            avatarUrl="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_MyProfilePicture.png"
            iconUrl="/WinAppsBackground.webp"
            status="github/mrrobotisreal"
            contactText="Contact Me"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log("Contact clicked")}
          />
        </section>

        {/* Skills Sections */}
        <section className="space-y-12">
          {/* Backend Skills */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Backend Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/JavaLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AJavaLogo.webp"
                    alt="Java"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Java
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/PythonLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3APythonLogo.webp"
                    alt="Python"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Python
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/LightFM_Logo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ALightFM_Logo.webp"
                    alt="LightFM"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                LightFM
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/GoLogo.png"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AGoLogo.webp"
                    alt="Go"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Go
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/DockerLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ADockerLogo.webp"
                    alt="Docker"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Docker
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/KubernetesLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AKubernetesLogo.webp"
                    alt="Kubernetes"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Kubernetes
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/PostgresLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3APostgresLogo.webp"
                    alt="PostgreSQL"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                PostgreSQL
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/mysql_logo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3Amysql_logo.webp"
                    alt="MySQL"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                MySQL
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/MongoLeaf.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AMongoLeaf.webp"
                    alt="MongoDB"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                MongoDB
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/firebase_logo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3Afirebase_logo.webp"
                    alt="Firebase"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Firebase
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/GraphQLLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AGraphQLLogo.webp"
                    alt="GraphQL"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                GraphQL
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/LetsEncryptLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ALetsEncryptLogo.webp"
                    alt="LetsEncrypt"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                LetsEncrypt
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/Kotlin_Icon.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AKotlin_Icon.webp"
                    alt="Kotlin"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Kotlin
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/Vercel_logo.svg"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AVercel_logo.svg"
                    alt="Vercel"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Vercel
              </Badge>
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Frontend Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/TypescriptLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ATypescriptLogo.webp"
                    alt="TypeScript"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                TypeScript
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/JavaScriptLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AJavaScriptLogo.webp"
                    alt="JavaScript"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                JavaScript
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/ReactLogo.png"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AReactLogo.webp"
                    alt="React"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                React
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/ReactQueryLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AReactQueryLogo.webp"
                    alt="ReactQuery"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                ReactQuery
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/TestingLibraryLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ATestingLibraryLogo.webp"
                    alt="Testing Library"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                TestingLibrary
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/CypressLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ACypressLogo.webp"
                    alt="Cypress"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Cypress
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/Svelte_Logo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ASvelte_Logo.webp"
                    alt="Svelte"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Svelte
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/WebpackLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AWebpackLogo.webp"
                    alt="Webpack"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Webpack
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ANextJS_Logo.jpeg"
                    alt="Next.js"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Next.js
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3Avite_Logo.svg"
                    alt="Vite"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Vite
              </Badge>
            </div>
          </div>

          {/* Mobile Skills */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Mobile Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/Kotlin_Icon.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AKotlin_Icon.webp"
                    alt="Kotlin"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Kotlin
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/SwiftLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ASwiftLogo.webp"
                    alt="Swift"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Swift
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/DartLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ADartLogo.webp"
                    alt="Dart"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Dart
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/FlutterLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AFlutterLogo.webp"
                    alt="Flutter"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Flutter
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/TypescriptLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3ATypescriptLogo.webp"
                    alt="TypeScript"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                TypeScript
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/JavaScriptLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AJavaScriptLogo.webp"
                    alt="JavaScript"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                JavaScript
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/ReactLogo.png"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AReactLogo.webp"
                    alt="React Native"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                React Native
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/ReactQueryLogo.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AReactQueryLogo.webp"
                    alt="ReactQuery"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                ReactQuery
              </Badge>
              <Badge className="text-sm py-2 px-4">
                <div className="relative w-6 h-6 mr-2">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/badges/ExpoLogoWithBackground.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3Askills%3AExpoLogoWithBackground.webp"
                    alt="Expo"
                    sizes="24px"
                    fill
                    className="object-contain"
                  />
                </div>
                Expo
              </Badge>
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <AdBanner
            adSlot="3633827902"
            adFormat="leaderboard"
            adPosition="footer"
            className="w-full max-w-6xl"
            style={{ minHeight: "90px" }}
          />
        </div>
      </div>
    </Layout>
  );
}
