import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { generateMetadata as createMetadata } from "@/lib/metadata";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const metadata = createMetadata({
  title: "Blog - WinApps.io",
  description:
    "Technical blog posts, tutorials, and insights about software development by Mitchell Wintrow.",
  path: "blog",
  keywords: [
    "blog",
    "software development",
    "tutorials",
    "React",
    "Next.js",
    "programming",
    "JavaScript",
    "TypeScript",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "Go",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Cloud",
    "Vite",
  ],
  openGraph: {
    title: "WinApps.io - Mitchell Wintrow",
    description:
      "Software engineer specializing in mobile apps, web development, and cloud solutions",
    type: "website",
    locale: "en_US",
    url: "https://www.winapps.io",
    siteName: "WinApps.io",
    images: [
      {
        // url: "https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/WinAppsOpenGraph.jpg",
        url: "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinAppsOpenGraph.jpg",
        width: 1200,
        height: 630,
        alt: "Mitchell Wintrow",
      },
    ],
  },
});

export default function BlogPage() {
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
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                The React Files: What &quot;They&quot; Don&apos;t Want You to
                Know
              </CardTitle>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/blogs/TheReactFilesBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_TheReactFilesBanner.webp"
                    alt="The React Files: What They Don't Want You to Know"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  An entertaining and informative blog post about React and what{" "}
                  <span className="italic">&quot;they&quot;</span> don&apos;t
                  want you to know.
                </p>
                <Link
                  href="https://javascript.plainenglish.io/the-react-files-what-they-dont-want-you-to-know-318fb8b11374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  Check it out →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                11 JavaScript Power-Ups You Probably Aren&apos;t Using (Yet)
              </CardTitle>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/blogs/PepeSilviaBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_PepeSilviaBanner.webp"
                    alt="11 JavaScript Power-Ups You Probably Aren't Using (Yet)"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Discover advanced JavaScript features and techniques that can
                  supercharge your code.
                </p>
                <Link
                  href="https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  Check it out →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                Optimize Your Multimedia and Make Your READMEs Pop on GitHub
              </CardTitle>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/blogs/OptimizeMultimediaBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_OptimizeMultimediaBanner.webp"
                    alt="Optimize Your Multimedia and Make Your READMEs Pop on GitHub"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Learn how to create engaging GitHub READMEs with optimized
                  multimedia content.
                </p>
                <Link
                  href="https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  Check it out →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">
                How to Set Up an EC2 Instance With TLS/SSL to Securely Serve
                HTTPS
              </CardTitle>
              <Separator className="my-2" />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    // src="https://winapps-solutions-llc.s3.us-west-2.amazonaws.com/images/blogs/EC2LetsEncryptBanner.webp"
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps_EC2LetsEncryptBanner.webp"
                    alt="How to Set Up an EC2 Instance With TLS/SSL to Securely Serve HTTPS"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Learn how to set up an EC2 instance with TLS/SSL to securely
                  serve HTTPS.
                </p>
                <Link
                  href="https://medium.com/@90mitchwintrow/how-to-set-up-an-ec2-instance-with-tls-ssl-to-securely-serve-https-ea15f8399273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                >
                  Check it out →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
