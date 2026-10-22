import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import {
  AnalyticsPageView,
  DateRange,
  LinkRow,
  linkClass,
  PageHeader,
  ProseSections,
  TechBadges,
} from "@/components/site";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { labels, pages } = site.copy;

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const entry = experience.find((e) => e.slug === slug);
  if (!entry) return {};
  return createMetadata({
    title: `${entry.title}, ${entry.company} | Mitchell Wintrow`,
    description: entry.summary.slice(0, 160),
    path: `portfolio/${entry.slug}`,
  });
}

export default async function ExperiencePage({ params }: Params) {
  const { slug } = await params;
  const index = experience.findIndex((e) => e.slug === slug);
  if (index < 0) notFound();
  const entry = experience[index];
  const prev = experience[index - 1];
  const next = experience[index + 1];

  return (
    <Layout>
      <AnalyticsPageView pageName={`portfolio_${entry.slug}`} />
      <div className="container mx-auto space-y-8 px-4 py-8">
        <PageHeader
          title={entry.company}
          crumbs={[{ label: pages.portfolio.title, href: "/portfolio" }, { label: entry.company }]}
        />
        <Card>
          <CardContent className="space-y-8 p-6">
            {entry.banner && (
              <Image
                src={entry.banner.src}
                alt={entry.banner.alt}
                width={entry.banner.width}
                height={entry.banner.height}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="w-full rounded-lg"
              />
            )}
            <div className="grid gap-4 md:grid-cols-2">
              <p className="text-xl font-bold">{entry.title}</p>
              <p className="text-muted-foreground md:text-right">
                <DateRange start={entry.start} end={entry.end} /> · {labels.employment[entry.employment]}
              </p>
            </div>
            <p className="text-lg leading-relaxed">{entry.summary}</p>
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">{labels.highlights}</h2>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                {entry.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <ProseSections sections={entry.sections} />
            <TechBadges tech={entry.tech} heading={labels.tech} />
            <LinkRow links={entry.links} />
          </CardContent>
        </Card>
        <nav className="flex flex-wrap justify-between gap-4">
          {prev ? (
            <Link href={`/portfolio/${prev.slug}`} className={`${linkClass} font-semibold`}>
              ← {prev.company}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={`/portfolio/${next.slug}`} className={`${linkClass} font-semibold`}>
              {next.company} →
            </Link>
          )}
        </nav>
      </div>
    </Layout>
  );
}
