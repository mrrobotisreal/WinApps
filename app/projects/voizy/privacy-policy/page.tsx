"use client"

import Layout from "@/components/layout"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function VoizyPrivacyPolicyPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/projects" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                  Projects
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <Link href="/projects/voizy" className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300">
                  Voizy (Android)
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-muted-foreground">Privacy Policy</span>
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
              </span>
              {" "}
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
                  src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/portfolio/voizy/VoizyDocumentationCoverImage.png"
                  alt="Voizy Documentation Cover"
                  width={1200}
                  height={600}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Privacy Policy Title */}
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                    Privacy Policy for Voizy
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Last updated: March 12th, 2025
                </p>
              </div>

              {/* Coming Soon Message */}
              <div className="flex justify-center py-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    🚧 Coming soon... 🛠️
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <div className="ml-4">
                  <p className="text-lg">
                    <a
                      href="mailto:contact@winapps.io"
                      className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold"
                    >
                      contact@winapps.io
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  )
}
