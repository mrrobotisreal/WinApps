import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
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
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">FlashMock</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/winapps-portfolio-images-flashmock-banner.webp"
                    alt="FlashMock"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Lead Senior Frontend and Mobile Software Engineer at
                  FlashMock.
                </p>
                <Link
                  href="/portfolio/flashmock"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Amazon Connect Customer Profiles
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/amazon-connect/AmazonConnectBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_AmazonConnectBanner.webp"
                    alt="Amazon Connect"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Software Engineer at Amazon Web Services working on Customer
                  Profiles service for Amazon Connect.
                </p>
                <Link
                  href="/portfolio/amazon-connect"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">VMware</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/vmware/VMwareBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_VMwareBanner.webp"
                    alt="VMware"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Software engineering work at VMware contributing to enterprise
                  virtualization solutions.
                </p>
                <Link
                  href="/portfolio/vmware"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  View Project Page →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Double Raven Solutions LLC
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/portfolio/double-raven/DoubleRavenBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_DoubleRavenBanner.webp"
                    alt="Double Raven"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Freelance development and consulting work for various clients
                  and projects.
                </p>
              </div>
              <Link
                href="/portfolio/double-raven"
                className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
              >
                View Project Page →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Personal Projects
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/ProjectsBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_ProjectsBanner.webp"
                    alt="Personal Projects"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Various mobile apps, web applications, and open source
                  contributions.
                </p>
              </div>
              <Link
                href="/projects"
                className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
              >
                View Projects →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
