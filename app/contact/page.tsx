import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Contact Me
        </h1>
        <Separator className="mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">Email</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AGMailBanner.gif"
                    alt="GMail Banner"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Email me at:{" "}
                  <a
                    href="mailto:mitchellwintrow@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                  >
                    mitchellwintrow@gmail.com →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">GitHub</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AGithubBanner.gif"
                    alt="GitHub Banner"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Find me on GitHub at:{" "}
                  <a
                    href="https://github.com/mrrobotisreal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                  >
                    mrrobotisreal →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">LinkedIn</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3ALinkedInBanner.gif"
                    alt="LinkedIn Banner"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Find me on LinkedIn at:{" "}
                  <a
                    href="https://www.linkedin.com/in/mitchell-wintrow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                  >
                    Mitchell Wintrow →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">X (Twitter)</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AXBanner.gif"
                    alt="X (Twitter) Banner"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Find me on X (Twitter) at:{" "}
                  <a
                    href="https://x.com/mitchwintrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                  >
                    @mitchwintrow →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">Medium</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AMediumBanner.gif"
                    alt="Medium Banner"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Read my articles on Medium at:{" "}
                  <a
                    href="https://medium.com/@90mitchwintrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                  >
                    @90mitchwintrow →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">YouTube</CardTitle>
              <Separator />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex justify-center w-full">
                  <Image
                    src="https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev/WinApps%3AYouTubeBanner.gif"
                    alt="YouTube Banner"
                    width={1500}
                    height={300}
                    className="rounded-md"
                  />
                </div>
                <p className="text-muted-foreground">
                  Watch my videos on YouTube at:{" "}
                  <a
                    href="https://www.youtube.com/@mitchwintrow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300 font-semibold hover:underline justify-end items-end flex mt-2"
                  >
                    Mitch Wintrow →
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
