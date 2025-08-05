import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicyPage() {
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
                  JourneyApp.me Privacy Policy
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
                Privacy Policy
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

              {/* Privacy Policy Content */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                    Privacy Policy for JourneyApp.me
                  </h2>
                  <p className="text-muted-foreground">
                    Last updated: August 4th, 2025
                  </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At JourneyApp.me, we take your privacy seriously. This
                    Privacy Policy explains how we collect, use, and protect
                    your information when you use our journaling application on
                    iOS and Android platforms.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    1. Information We Collect
                  </h3>
                  <div className="space-y-4 pl-4">
                    <div className="border-l-4 border-orange-300 pl-4">
                      <h4 className="text-xl font-medium text-purple-400 mb-2">
                        Location Data
                      </h4>
                      <p className="text-muted-foreground">
                        When you choose to add location(s) to your journal
                        entries, we may access your location data only while
                        using the app as required for Apple Maps (iOS) or Google
                        Maps (Android) to operate. Location access is always
                        optional and only used when you explicitly add location
                        information to entries.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-300 pl-4">
                      <h4 className="text-xl font-medium text-orange-400 mb-2">
                        Photos
                      </h4>
                      <p className="text-muted-foreground">
                        When you choose to take new photos or add existing
                        photos to your journal entries, we may access your
                        camera and photos library while using the app and adding
                        them to your journal entry. All photo access is
                        permission-based and only occurs when you initiate the
                        action.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-300 pl-4">
                      <h4 className="text-xl font-medium text-purple-400 mb-2">
                        User Content
                      </h4>
                      <p className="text-muted-foreground">
                        When you create journal entries, we collect the content
                        you write in order to store them securely on our servers
                        and allow the app to function properly, including sync
                        and backup functionality.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-300 pl-4">
                      <h4 className="text-xl font-medium text-orange-400 mb-2">
                        Device Information
                      </h4>
                      <p className="text-muted-foreground">
                        We may collect basic device info and data as needed for
                        the app to function properly, including device type,
                        operating system version, and app performance metrics.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    2. How We Use Your Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                        Core Functionality
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • Provide journal entry functionality (create, view,
                          update, delete)
                        </li>
                        <li>
                          • Attach locations and photos to entries as requested
                          by the user
                        </li>
                        <li>
                          • Sync your data with our servers for backup and
                          restore functionality
                        </li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                        App Improvement
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Improve app performance and user experience</li>
                        <li>
                          • Analyze usage patterns through PostHog analytics
                        </li>
                        <li>• Debug issues and optimize features</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    3. Analytics and Tracking
                  </h3>
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      We use PostHog for product analytics to understand how
                      users interact with our app and improve the user
                      experience. This includes:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Anonymous usage patterns and feature adoption</li>
                      <li>• App performance metrics and crash reporting</li>
                      <li>• User interface interaction data</li>
                      <li>• Session duration and frequency of use</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      All analytics data is anonymized and cannot be linked back
                      to your personal journal content.
                    </p>
                  </div>
                </div>

                {/* Payments and Subscriptions */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    4. Payments and Premium Features
                  </h3>
                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-950/20 dark:to-orange-950/20 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      For our Premium subscription service, we use Stripe to
                      handle all payment processing securely:
                    </p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>
                        • Payment information is processed directly by Stripe
                        and never stored on our servers
                      </li>
                      <li>
                        • We only receive confirmation of successful payments
                        and subscription status
                      </li>
                      <li>
                        • All payment data is handled according to Stripe&apos;s
                        security standards and PCI compliance
                      </li>
                      <li>
                        • Subscription management and billing is handled through
                        secure Stripe infrastructure
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Data Storage and Security */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    5. Data Storage and Security
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg">
                        <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-2">
                          Secure Storage
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Journal entries are stored securely on our servers
                          with enterprise-grade encryption for both data
                          transmission and storage.
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-950/20 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                          Authentication
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          We use Firebase for authentication. Only users with
                          valid ID tokens can create, view, or update their own
                          data.
                        </p>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-orange-50 to-purple-50 dark:from-orange-950/20 dark:to-purple-950/20 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Photo Security</h4>
                      <p className="text-sm text-muted-foreground">
                        Photos are encrypted and stored securely, accessible
                        only via pre-signed URLs held by the account owner.
                        Photos are never shared or accessible to unauthorized
                        users.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data Sharing */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    6. Data Sharing
                  </h3>
                  <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <h4 className="font-bold text-red-600 dark:text-red-400">
                        Our Commitment to Your Privacy
                      </h4>
                    </div>
                    <ul className="text-red-700 dark:text-red-300 space-y-2 font-medium">
                      <li>• We do not sell your personal data, period.</li>
                      <li>
                        • We do not share your journal entries with
                        third-parties, period.
                      </li>
                      <li>
                        • Your personal thoughts and memories remain private and
                        secure.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-orange-500">
                    7. Your Rights
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-2">
                        Data Control
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Delete your account and all associated data</li>
                        <li>• Export your data in a readable format</li>
                        <li>• Modify or delete individual journal entries</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                        Permission Control
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>
                          • Revoke app permissions through device settings
                        </li>
                        <li>• Control location and photo access at any time</li>
                        <li>• Manage notification preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-purple-500">
                    8. Contact Us
                  </h3>
                  <div className="bg-gradient-to-r from-orange-100 to-purple-100 dark:from-orange-950/30 dark:to-purple-950/30 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us:
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
                  </div>
                </div>

                {/* Updates */}
                <div className="border-t pt-6">
                  <p className="text-sm text-muted-foreground text-center">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the &quot;Last updated&quot; date.
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
