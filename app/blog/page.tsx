import Image from "next/image";
import Layout from "@/components/layout";
import { AnalyticsPageView, linkClass, PageHeader } from "@/components/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blog } from "@/content/blog";
import { site } from "@/content/site";
import { formatYearMonth } from "@/lib/prose";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { labels, pages } = site.copy;

export const metadata = createMetadata({
  title: pages.blog.title,
  description: pages.blog.description,
  path: "blog",
});

export default function BlogPage() {
  return (
    <Layout>
      <AnalyticsPageView pageName="Blog" />
      <div className="container mx-auto space-y-8 px-4 py-8">
        <PageHeader title={pages.blog.title} crumbs={[{ label: pages.blog.title }]} intro={pages.blog.intro} />
        <ul className="grid gap-6 md:grid-cols-2">
          {blog.map((post) => (
            <li key={post.href}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    <a href={post.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} hover:underline`}>
                      {post.title}
                    </a>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {post.publisher} · {formatYearMonth(post.date)}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {post.image && (
                    <Image
                      src={post.image.src}
                      alt={post.image.alt}
                      width={post.image.width}
                      height={post.image.height}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="w-full rounded-md"
                    />
                  )}
                  <p className="text-muted-foreground">{post.summary}</p>
                  <a href={post.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} font-semibold hover:underline`}>
                    {labels.readPost} →
                  </a>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
