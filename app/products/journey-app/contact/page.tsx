"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
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
                  JourneyApp.me Contact
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
                Journey
              </span>
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                App.me
              </span>
              <span className="text-muted-foreground"> Contact</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for support, questions, or feedback
            </p>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_JourneyAppBanner.webp"
                  alt="JourneyApp Banner"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Contact Content */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground">
                    We&apos;d love to hear from you!
                  </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed text-center">
                    Whether you have questions, need support, or want to share
                    feedback about JourneyApp.me, we&apos;re here to help. As a
                    solo developer, I personally handle all support requests and
                    am committed to providing the best experience possible.
                  </p>
                </div>

                {/* Main Contact Information */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20 p-8 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                    <div className="text-center space-y-6">
                      <div className="flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">Primary Contact</h3>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          The best way to reach me for any questions or support
                          needs.
                        </p>
                        <Link
                          href="/products/journey-app/contact/form"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-orange-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          <span>Open Support Form</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Get organized support with faster response times
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500 text-center">
                    Response Times
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-green-600 dark:text-green-400 mb-2">
                        Urgent Issues
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        App crashes, data loss, or payment issues
                      </p>
                      <p className="text-lg font-semibold text-green-700 dark:text-green-300 mt-2">
                        Within 24 hours
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                        General Support
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Feature questions, how-to guidance, troubleshooting
                      </p>
                      <p className="text-lg font-semibold text-blue-700 dark:text-blue-300 mt-2">
                        1-2 business days
                      </p>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2">
                        Feature Requests
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Suggestions, ideas, and feedback
                      </p>
                      <p className="text-lg font-semibold text-purple-700 dark:text-purple-300 mt-2">
                        2-3 business days
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground italic">
                      Response times may vary depending on current workload, but
                      I always aim to respond as quickly as possible.
                    </p>
                  </div>
                </div>

                {/* What to Include */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500 text-center">
                    What to Include in Your Message
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg">
                      <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-3">
                        For Technical Issues
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>
                          • Device type (iPhone, iPad, Android phone/tablet)
                        </li>
                        <li>
                          • Operating system version (iOS 17.1, Android 14,
                          etc.)
                        </li>
                        <li>• JourneyApp.me version number</li>
                        <li>• Detailed description of the issue</li>
                        <li>• Steps to reproduce the problem</li>
                        <li>• Screenshots or screen recordings if helpful</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg">
                      <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-3">
                        For General Inquiries
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Clear subject line describing your request</li>
                        <li>• Specific question or topic you need help with</li>
                        <li>
                          • Any relevant context or background information
                        </li>
                        <li>
                          • For feature requests: detailed description of
                          desired functionality
                        </li>
                        <li>
                          • For feedback: specific areas you&apos;d like to
                          comment on
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* About the Developer */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500 text-center">
                    About the Developer
                  </h3>
                  <div className="bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-950/30 dark:to-purple-950/30 p-6 rounded-lg">
                    <div className="text-center space-y-4">
                      <p className="text-muted-foreground">
                        Hi! I&apos;m Mitchell Wintrow, the solo developer behind
                        JourneyApp.me. I&apos;m passionate about creating
                        beautiful, functional apps that help people capture and
                        preserve their life experiences. As a one-person team, I
                        handle everything from development to customer support.
                      </p>
                      <p className="text-muted-foreground">
                        I believe in providing personal, attentive customer
                        service, and I read and respond to every email
                        personally. Your feedback and suggestions are invaluable
                        in making JourneyApp.me the best journaling experience
                        possible.
                      </p>
                      <div className="pt-4">
                        <p className="text-sm text-muted-foreground">
                          Learn more about my other projects at{" "}
                          <Link
                            href="/"
                            className="text-orange-600 hover:text-purple-600 dark:text-orange-400 dark:hover:text-purple-400 font-medium"
                          >
                            WinApps Solutions
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500 text-center">
                    Helpful Resources
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link
                      href="/products/journey-app/privacy-policy"
                      className="bg-orange-50 dark:bg-orange-950/20 hover:bg-orange-100 dark:hover:bg-orange-950/30 p-6 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-600 dark:text-orange-400">
                            Privacy Policy
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Learn how we protect your data
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/products/journey-app/terms-of-use"
                      className="bg-purple-50 dark:bg-purple-950/20 hover:bg-purple-100 dark:hover:bg-purple-950/30 p-6 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-600 dark:text-purple-400">
                            Terms of Use
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Review our terms and guidelines
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center pt-6 border-t">
                  <p className="text-lg text-muted-foreground mb-4">
                    Ready to get in touch?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Link
                      href="/products/journey-app/contact/form"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Open Support Form</span>
                    </Link>
                    <span className="text-muted-foreground">or</span>
                    <Link
                      href="mailto:mitchellwintrow@gmail.com?subject=JourneyApp.me Support Request"
                      className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 border-2 border-orange-500 text-orange-600 dark:text-orange-400 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 dark:hover:bg-orange-950/20 transition-all duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>Send direct email</span>
                    </Link>
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
