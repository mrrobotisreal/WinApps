"use client";

import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function VoizySupportPage() {
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
                <Link
                  href="/projects/voizy"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300"
                >
                  Voizy (Android)
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">Support</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
                Voizy
              </span>{" "}
              <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
                (Android)
              </span>
            </h1>
          </div>

          {/* Main Content Card */}
          <Card>
            <CardContent className="p-6 space-y-8">
              {/* Banner Image */}
              <div className="w-full">
                <Image
                  src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VoizyBanner.webp"
                  alt="Voizy Documentation Cover"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Support Title */}
              <div className="text-center">
                <h2 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                    Product Support
                  </span>
                </h2>
              </div>

              {/* Support Information */}
              <div className="space-y-6">
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    If you have any questions or need support, please contact us
                    at{" "}
                    <a
                      href="mailto:mitchellwintrow@gmail.com"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-bold"
                    >
                      mitchellwintrow@gmail.com
                    </a>
                    . We are here to help! (You should receive a response within
                    24-48 hours depending on the volume of support requests)
                  </p>
                </div>

                {/* Additional Support Information */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-center">
                    How We Can Help
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600 dark:text-orange-400">
                        Technical Issues
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• App crashes or bugs</li>
                        <li>• Login or authentication problems</li>
                        <li>• Feature not working as expected</li>
                        <li>• Performance issues</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400">
                        General Support
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Account management</li>
                        <li>• Feature requests</li>
                        <li>• Usage questions</li>
                        <li>• Feedback and suggestions</li>
                      </ul>
                    </div>
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
