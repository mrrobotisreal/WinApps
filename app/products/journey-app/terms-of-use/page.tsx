import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function TermsOfUsePage() {
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
                  JourneyApp.me Terms of Use
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
              <span className="bg-gradient-to-b dark:from-white dark:to-gray-400 from-gray-400 to-black bg-clip-text text-transparent">
                {" "}
                Terms of Use
              </span>
            </h1>
            <p className="text-lg text-muted-foreground text-center flex items-center justify-center flex-row gap-2">
              Available on{" "}
              <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent flex items-center justify-center flex-row gap-1">
                <svg
                  className="w-5 h-5 mx-auto text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>{" "}
                iOS
              </span>{" "}
              and{" "}
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

              {/* Terms of Use Content */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Terms of Use for JourneyApp.me
                  </h2>
                  <p className="text-muted-foreground">
                    Last updated: August 4th, 2025
                  </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Welcome to JourneyApp.me! These Terms of Use govern your use
                    of our journaling application available on iOS and Android
                    platforms. By using our app, you agree to these terms.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    1. Acceptance of Terms
                  </h3>
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20 p-6 rounded-lg">
                    <p className="text-muted-foreground">
                      By downloading, installing, or using JourneyApp.me, you
                      acknowledge that you have read, understood, and agree to
                      be bound by these Terms of Use and our Privacy Policy. If
                      you do not agree to these terms, please do not use our
                      service.
                    </p>
                  </div>
                </div>

                {/* Account Responsibilities */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    2. Account Responsibilities
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                        Account Security
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • You are responsible for maintaining the
                          confidentiality of your account
                        </li>
                        <li>
                          • You must provide accurate and complete information
                        </li>
                        <li>
                          • You must notify us immediately of any unauthorized
                          use
                        </li>
                        <li>
                          • You are responsible for all activities under your
                          account
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                        Age Requirements
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • You must be at least 13 years old to use our service
                        </li>
                        <li>• Users under 18 require parental consent</li>
                        <li>• We comply with COPPA for users under 13</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Acceptable Use */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    3. Acceptable Use Policy
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 p-6 rounded-lg">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <h4 className="font-bold text-green-600 dark:text-green-400">
                          You MAY:
                        </h4>
                      </div>
                      <ul className="text-green-700 dark:text-green-300 space-y-2">
                        <li>• Create personal journal entries and memories</li>
                        <li>
                          • Upload personal photos to your journal entries
                        </li>
                        <li>• Use location services for your entries</li>
                        <li>
                          • Share your thoughts, experiences, and reflections
                        </li>
                        <li>
                          • Use the app for personal journaling and
                          self-reflection
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Prohibited Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-red-500">
                    4. Prohibited Content and Activities
                  </h3>
                  <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <h4 className="font-bold text-red-600 dark:text-red-400">
                        You MAY NOT:
                      </h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-red-600 dark:text-red-400 mb-2">
                          Illegal Content
                        </h5>
                        <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                          <li>
                            • Upload illegal pornography or explicit content
                            involving minors
                          </li>
                          <li>
                            • Share content that violates any local, state, or
                            federal laws
                          </li>
                          <li>
                            • Upload copyrighted material without permission
                          </li>
                          <li>
                            • Share content that promotes illegal activities
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-red-600 dark:text-red-400 mb-2">
                          Harmful Activities
                        </h5>
                        <ul className="text-red-700 dark:text-red-300 space-y-1 text-sm">
                          <li>
                            • Attempt to hack, disrupt, or compromise our
                            service
                          </li>
                          <li>
                            • Use automated tools to access or scrape our
                            service
                          </li>
                          <li>
                            • Attempt to gain unauthorized access to other
                            accounts
                          </li>
                          <li>
                            • Reverse engineer or attempt to extract source code
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                      <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                        Violation of these terms may result in immediate account
                        suspension or termination.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premium Features and Payments */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    5. Premium Features and Payments
                  </h3>
                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-950/20 dark:to-orange-950/20 p-6 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                          Subscription Terms
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>
                            • Premium subscriptions are billed monthly or
                            annually
                          </li>
                          <li>• Subscriptions auto-renew unless cancelled</li>
                          <li>
                            • You can cancel anytime through your device
                            settings
                          </li>
                          <li>
                            • Refunds are handled according to platform policies
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                          Payment Processing
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>
                            • All payments are processed securely through Stripe
                          </li>
                          <li>• We do not store your payment information</li>
                          <li>• Prices may change with 30 days notice</li>
                          <li>
                            • Premium features are subject to availability
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data and Privacy */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    6. Data and Privacy
                  </h3>
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      Your journal entries and personal data are private and
                      secure. Please refer to our Privacy Policy for detailed
                      information about how we collect, use, and protect your
                      data.
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">
                        Read our Privacy Policy:
                      </span>
                      <Link
                        href="/products/journey-app/privacy-policy"
                        className="text-orange-600 hover:text-purple-600 dark:text-orange-400 dark:hover:text-purple-400 font-medium"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Service Availability */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    7. Service Availability and Modifications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Service Availability
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • We strive for 99.9% uptime but cannot guarantee
                          uninterrupted service
                        </li>
                        <li>
                          • Scheduled maintenance will be announced in advance
                        </li>
                        <li>
                          • We are not liable for temporary service
                          interruptions
                        </li>
                      </ul>
                    </div>
                    <div className="bg-indigo-50 dark:bg-indigo-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                        Service Modifications
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • We may modify or discontinue features with notice
                        </li>
                        <li>
                          • New features may be added to improve the service
                        </li>
                        <li>
                          • Continued use constitutes acceptance of changes
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    8. Limitation of Liability
                  </h3>
                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border-2 border-yellow-200 dark:border-yellow-800 p-6 rounded-lg">
                    <p className="text-muted-foreground">
                      JourneyApp.me is provided on an &quot;as is&quot; basis.
                      While we take every precaution to protect your data, we
                      cannot be held liable for data loss, service
                      interruptions, or any indirect damages. Your use of the
                      app is at your own risk. We recommend regular data exports
                      as a backup measure.
                    </p>
                  </div>
                </div>

                {/* Termination */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    9. Account Termination
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                        Your Rights
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• You may delete your account at any time</li>
                        <li>• You can export your data before deletion</li>
                        <li>
                          • Account deletion is permanent and irreversible
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                        Our Rights
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• We may suspend accounts for terms violations</li>
                        <li>
                          • We may terminate accounts with reasonable notice
                        </li>
                        <li>• We reserve the right to refuse service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    10. Contact Us
                  </h3>
                  <div className="bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-950/30 dark:to-purple-950/30 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms of Use or need
                      support, please contact us:
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Email:</span>
                      <Link
                        href="mailto:mitchellwintrow@gmail.com"
                        className="text-orange-600 hover:text-purple-600 dark:text-orange-400 dark:hover:text-purple-400 font-medium"
                      >
                        mitchellwintrow@gmail.com
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      We typically respond within 1-3 business days.
                    </p>
                  </div>
                </div>

                {/* Updates */}
                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground text-center">
                    We may update these Terms of Use from time to time. We will
                    notify you of any changes by posting the new Terms of Use on
                    this page and updating the last updated date. Your continued
                    use of the app after changes constitutes acceptance of the
                    new terms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
