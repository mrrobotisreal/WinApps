"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  trackPageView,
  trackUserSession,
  trackScrollDepth,
  trackTimeOnPage,
  trackButtonClick,
  trackFeatureUsage,
  trackProjectView,
  trackNavigation,
} from "@/lib/analytics";
import { Badge } from "@/components/ui/badge";

interface PortfolioItem {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
  type: "portfolio" | "project";
  timeframe: string;
  role: string;
  isCurrent: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "People Inc.",
    description:
      "Senior Software Engineer at People Inc. (formerly known as Dotdash Meredith).",
    href: "/portfolio/people-inc",
    imageSrc:
      "https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/WinApps_PeopleIncBanner.webp",
    imageAlt: "People Inc.",
    slug: "people-inc",
    type: "portfolio",
    timeframe: "August 2025 - Present",
    role: "Senior Software Engineer",
    isCurrent: true,
  },
  {
    title: "FlashMock",
    description:
      "Lead Senior Frontend and Mobile Software Engineer at FlashMock.",
    href: "/portfolio/flashmock",
    imageSrc:
      "https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev/FlashMockLogoGradient_White.png",
    imageAlt: "FlashMock",
    slug: "flashmock",
    type: "portfolio",
    timeframe: "May 2025 - Present",
    role: "Lead Senior Frontend and Mobile Software Engineer",
    isCurrent: true,
  },
  {
    title: "Double Raven Solutions LLC",
    description: "Frontend Software Engineer at Double Raven Solutions LLC.",
    href: "/portfolio/double-raven",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_DoubleRavenBanner.webp",
    imageAlt: "Double Raven Solutions LLC",
    slug: "double-raven",
    type: "portfolio",
    timeframe: "June 2020 - January 2022, January 2025 - May 2025",
    role: "Full Stack Software Engineer, Frontend Software Engineer",
    isCurrent: false,
  },
  {
    title: "Amazon Connect Customer Profiles",
    description: "Frontend Software Engineer at Amazon Web Services.",
    href: "/portfolio/amazon-connect",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_AmazonConnectBanner.webp",
    imageAlt: "Amazon Connect Customer Profiles",
    slug: "amazon-connect",
    type: "portfolio",
    timeframe: "August 2022 - November 2024",
    role: "Frontend Software Engineer",
    isCurrent: false,
  },
  {
    title: "VMware",
    description: "Backend Software Engineer at VMware.",
    href: "/portfolio/vmware",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VMwareBanner.webp",
    imageAlt: "VMware",
    slug: "vmware",
    type: "portfolio",
    timeframe: "June 2022 - August 2022",
    role: "Backend Software Engineer",
    isCurrent: false,
  },
  {
    title: "Personal Projects",
    description:
      "Various mobile apps, web applications, and open source contributions.",
    href: "/projects",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_ProjectsBanner.webp",
    imageAlt: "Personal Projects",
    slug: "personal-projects",
    type: "project",
    timeframe: "7+ years",
    role: "Mobile App Engineer, Frontend Software Engineer, Backend Software Engineer, Full Stack Software Engineer",
    isCurrent: true,
  },
];

export default function PortfolioPage() {
  const [pageStartTime] = useState(Date.now());
  const scrollDepthRef = useRef(0);
  const lastScrollUpdate = useRef(0);

  useEffect(() => {
    trackPageView("Portfolio");

    // Set user session data
    const isReturningUser = localStorage.getItem("hasVisited") === "true";
    trackUserSession({
      user_type: isReturningUser ? "returning" : "new",
      preferred_content: "portfolio",
    });

    // Track that user is interested in viewing portfolio
    trackFeatureUsage("portfolio_page_visit", {
      section: "portfolio",
      content_type: "professional_work",
      total_items: portfolioItems.length,
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

  const handlePortfolioItemClick = (item: PortfolioItem) => {
    trackProjectView(item.title, item.type);
    trackNavigation(item.href, "portfolio_index");
    trackButtonClick(
      `portfolio_${item.slug}`,
      "internal_link",
      "portfolio_page"
    );
    trackFeatureUsage("portfolio_item_click", {
      item_title: item.title,
      item_slug: item.slug,
      item_type: item.type,
      destination: item.href,
    });
  };

  const handlePortfolioImageLoad = (item: PortfolioItem) => {
    trackFeatureUsage("portfolio_image_loaded", {
      item_title: item.title,
      item_slug: item.slug,
      page: "portfolio",
    });
  };

  const handlePortfolioCardHover = (item: PortfolioItem) => {
    trackFeatureUsage("portfolio_card_hover", {
      item_title: item.title,
      item_slug: item.slug,
      page: "portfolio",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional work experience and contributions to various
            companies and projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <Card
              key={item.slug}
              onMouseEnter={() => handlePortfolioCardHover(item)}
              className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle
                  className="flex justify-center cursor-pointer"
                  onClick={() => handlePortfolioItemClick(item)}
                >
                  {item.title}
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center w-full">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={1500}
                      height={300}
                      className="rounded-md cursor-pointer transition-transform duration-200 hover:scale-105"
                      onLoad={() => handlePortfolioImageLoad(item)}
                      onClick={() => handlePortfolioItemClick(item)}
                    />
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-purple-200">
                      Description:
                    </span>{" "}
                    {item.description}
                  </p>
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-muted-foreground">
                      <span className="font-bold text-purple-200">
                        Timeframe:
                      </span>{" "}
                      {item.timeframe}
                    </p>
                    {item.isCurrent && (
                      <Badge
                        variant="outline"
                        className="bg-success-gradient text-white font-bold px-3 rounded-md"
                      >
                        Current
                      </Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-bold text-purple-200">Role:</span>{" "}
                    {item.role}
                  </p>
                  <Link
                    href={item.href}
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2 transition-colors duration-200"
                    onClick={() => handlePortfolioItemClick(item)}
                  >
                    {item.type === "portfolio"
                      ? "View Project Page"
                      : "View Projects"}{" "}
                    →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
