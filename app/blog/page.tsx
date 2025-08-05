"use client";

import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
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
} from "@/lib/analytics";

interface BlogPost {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The React Files: What "They" Don\'t Want You to Know',
    description:
      'An entertaining and informative blog post about React and what "they" don\'t want you to know.',
    url: "https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_TheReactFilesBanner.webp",
    imageAlt: "The React Files: What They Don't Want You to Know",
    slug: "react-files",
  },
  {
    title: "11 JavaScript Power-Ups You Probably Aren't Using (Yet)",
    description:
      "Discover advanced JavaScript features and techniques that can supercharge your code.",
    url: "https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_PepeSilviaBanner.webp",
    imageAlt: "11 JavaScript Power-Ups You Probably Aren't Using (Yet)",
    slug: "javascript-power-ups",
  },
  {
    title: "Optimize Your Multimedia and Make Your READMEs Pop on GitHub",
    description:
      "Learn how to create engaging GitHub READMEs with optimized multimedia content.",
    url: "https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_OptimizeMultimediaBanner.webp",
    imageAlt: "Optimize Your Multimedia and Make Your READMEs Pop on GitHub",
    slug: "optimize-multimedia",
  },
  {
    title: "How to Set Up an EC2 Instance With TLS/SSL to Securely Serve HTTPS",
    description:
      "Learn how to set up an EC2 instance with TLS/SSL to securely serve HTTPS.",
    url: "https://medium.com/@90mitchwintrow/how-to-set-up-an-ec2-instance-with-tls-ssl-to-securely-serve-https-ea15f8399273",
    imageSrc:
      "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_EC2LetsEncryptBanner.webp",
    imageAlt:
      "How to Set Up an EC2 Instance With TLS/SSL to Securely Serve HTTPS",
    slug: "ec2-tls-ssl",
  },
];

export default function BlogPage() {
  const [pageStartTime] = useState(Date.now());
  const scrollDepthRef = useRef(0);
  const lastScrollUpdate = useRef(0);

  useEffect(() => {
    trackPageView("Blog");

    // Set user session data
    const isReturningUser = localStorage.getItem("hasVisited") === "true";
    trackUserSession({
      user_type: isReturningUser ? "returning" : "new",
      preferred_content: "blog",
    });

    // Track that user is interested in reading blog content
    trackFeatureUsage("blog_page_visit", {
      section: "blog",
      content_type: "technical_articles",
      total_posts: blogPosts.length,
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

  const handleBlogPostClick = (post: BlogPost) => {
    trackExternalLink(post.url, post.title);
    trackButtonClick(`blog_post_${post.slug}`, "external_link", "blog_page");
    trackFeatureUsage("blog_post_click", {
      post_title: post.title,
      post_slug: post.slug,
      destination: "external_blog",
    });
  };

  const handleBlogImageLoad = (post: BlogPost) => {
    trackFeatureUsage("blog_image_loaded", {
      post_title: post.title,
      post_slug: post.slug,
      page: "blog",
    });
  };

  const handleBlogCardHover = (post: BlogPost) => {
    trackFeatureUsage("blog_card_hover", {
      post_title: post.title,
      post_slug: post.slug,
      page: "blog",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl font-bold">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical blog posts, tutorials, and insights about software
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card
              key={post.slug}
              onMouseEnter={() => handleBlogCardHover(post)}
              className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle
                  className="flex justify-center cursor-pointer"
                  onClick={() => handleBlogPostClick(post)}
                >
                  {post.title}
                </CardTitle>
                <Separator className="my-2" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-center w-full">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      width={1500}
                      height={300}
                      className="rounded-md cursor-pointer transition-transform duration-200 hover:scale-105"
                      onLoad={() => handleBlogImageLoad(post)}
                      onClick={() => handleBlogPostClick(post)}
                    />
                  </div>
                  <p className="text-muted-foreground">{post.description}</p>
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2 transition-colors duration-200"
                    onClick={() => handleBlogPostClick(post)}
                  >
                    Check it out →
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
