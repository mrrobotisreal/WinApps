"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  trackPageView,
  trackUserSession,
  trackExternalLink,
  trackScrollDepth,
  trackTimeOnPage,
  trackButtonClick,
  trackFeatureUsage,
  trackSocialClick,
} from "@/lib/analytics";

interface ContactMethod {
  title: string;
  description: string;
  linkText: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  platform: string;
  isEmail?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Email",
    description: "Email me at:",
    linkText: "mitchellwintrow@gmail.com →",
    url: "mailto:mitchellwintrow@gmail.com",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AGMailBanner.gif",
    imageAlt: "GMail Banner",
    platform: "email",
    isEmail: true,
  },
  {
    title: "GitHub",
    description: "Find me on GitHub at:",
    linkText: "mrrobotisreal →",
    url: "https://github.com/mrrobotisreal",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AGithubBanner.gif",
    imageAlt: "GitHub Banner",
    platform: "github",
  },
  {
    title: "LinkedIn",
    description: "Find me on LinkedIn at:",
    linkText: "Mitchell Wintrow →",
    url: "https://www.linkedin.com/in/mitchell-wintrow/",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3ALinkedInBanner.gif",
    imageAlt: "LinkedIn Banner",
    platform: "linkedin",
  },
  {
    title: "X (Twitter)",
    description: "Find me on X (Twitter) at:",
    linkText: "@mitchwintrow →",
    url: "https://x.com/mitchwintrow",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AXBanner.gif",
    imageAlt: "X (Twitter) Banner",
    platform: "twitter",
  },
  {
    title: "Medium",
    description: "Read my articles on Medium at:",
    linkText: "@90mitchwintrow →",
    url: "https://medium.com/@90mitchwintrow",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AMediumBanner.gif",
    imageAlt: "Medium Banner",
    platform: "medium",
  },
  {
    title: "YouTube",
    description: "Watch my videos on YouTube at:",
    linkText: "Mitch Wintrow →",
    url: "https://www.youtube.com/@mitchwintrow",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AYouTubeBanner.gif",
    imageAlt: "YouTube Banner",
    platform: "youtube",
  },
];

export default function ContactPage() {
  const [pageStartTime] = useState(Date.now());
  const scrollDepthRef = useRef(0);
  const lastScrollUpdate = useRef(0);

  useEffect(() => {
    trackPageView("Contact");

    // Set user session data
    const isReturningUser = localStorage.getItem("hasVisited") === "true";
    trackUserSession({
      user_type: isReturningUser ? "returning" : "new",
      preferred_content: "contact",
    });

    // Track that user is interested in contacting
    trackFeatureUsage("contact_page_visit", {
      section: "contact",
      content_type: "contact_methods",
      total_methods: contactMethods.length,
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

  const handleContactMethodClick = (method: ContactMethod) => {
    if (method.isEmail) {
      trackButtonClick(
        `contact_${method.platform}`,
        "email_click",
        "contact_page"
      );
      trackFeatureUsage("email_contact_attempt", {
        platform: method.platform,
        contact_type: "email",
      });
    } else {
      trackExternalLink(method.url, method.title);
      trackSocialClick(method.platform, "click", method.title);
      trackButtonClick(
        `contact_${method.platform}`,
        "external_link",
        "contact_page"
      );
    }

    trackFeatureUsage("contact_method_click", {
      platform: method.platform,
      method_type: method.isEmail ? "email" : "social",
      page: "contact",
    });
  };

  const handleContactImageLoad = (method: ContactMethod) => {
    trackFeatureUsage("contact_image_loaded", {
      platform: method.platform,
      image_type: "banner",
      page: "contact",
    });
  };

  const handleContactCardHover = (method: ContactMethod) => {
    trackFeatureUsage("contact_card_hover", {
      platform: method.platform,
      page: "contact",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Contact Me
        </h1>
        <Separator className="mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <Card
              key={method.platform}
              onMouseEnter={() => handleContactCardHover(method)}
              className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle
                  className="flex justify-center cursor-pointer"
                  onClick={() => handleContactMethodClick(method)}
                >
                  {method.title}
                </CardTitle>
                <Separator />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center w-full">
                    <Image
                      src={method.imageSrc}
                      alt={method.imageAlt}
                      width={1500}
                      height={300}
                      className="rounded-md cursor-pointer transition-transform duration-200 hover:scale-105"
                      onLoad={() => handleContactImageLoad(method)}
                      onClick={() => handleContactMethodClick(method)}
                    />
                  </div>
                  <p className="text-muted-foreground">
                    {method.description}{" "}
                    <a
                      href={method.url}
                      target={method.isEmail ? "_self" : "_blank"}
                      rel={method.isEmail ? undefined : "noopener noreferrer"}
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2 transition-colors duration-200"
                      onClick={() => handleContactMethodClick(method)}
                    >
                      {method.linkText}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
