import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { generateMetadata as createMetadata } from "@/lib/metadata";

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
  ],
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
              <CardTitle>
                <Link
                  href="https://medium.com/@90mitchwintrow/11-javascript-power-ups-you-probably-arent-using-yet-and-how-they-ll-turbo-boost-your-code-718e52c670a7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  11 JavaScript Power-Ups You Probably Aren&apos;t Using (Yet)
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover advanced JavaScript features and techniques that can
                supercharge your code.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Link
                  href="https://medium.com/@90mitchwintrow/optimize-your-multimedia-and-make-your-readmes-pop-on-github-866a018c1e13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Optimize Your Multimedia and Make Your READMEs Pop on GitHub
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Learn how to create engaging GitHub READMEs with optimized
                multimedia content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>React Query Tutorial</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                My favorite data fetching and caching solution for React
                applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Databases: The Sequel (SQL)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A comprehensive guide to SQL and relational database concepts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>React Native & Expo Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Getting started with mobile development using React Native and
                Expo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                How Custom Apps Can Transform Your Business in 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Exploring the impact of custom software solutions on modern
                businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
