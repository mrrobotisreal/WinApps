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
import type { Experience } from "@/content/schema";
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
            <div className="flex flex-wrap items-center gap-4">
              {entry.logo && (
                <Image
                  src={entry.logo.src}
                  alt={entry.logo.alt}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-contain"
                />
              )}
              <div className="min-w-0 flex-1">
                <p className="text-xl font-bold">{entry.title}</p>
              </div>
              <p className="text-muted-foreground">
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
        <nav aria-label={pages.portfolio.title} className="flex flex-wrap justify-between gap-4">
          {prev ? <NeighbourLink entry={prev} direction="prev" /> : <span />}
          {next && <NeighbourLink entry={next} direction="next" />}
        </nav>
      </div>
    </Layout>
  );
}

/** Prev/next link; the start year tells two roles at the same company apart. */
function NeighbourLink({ entry, direction }: { entry: Experience; direction: "prev" | "next" }) {
  const label = `${entry.shortName} (${entry.start.slice(0, 4)})`;
  return (
    <Link href={`/portfolio/${entry.slug}`} className={`${linkClass} font-semibold`}>
      {direction === "prev" ? `← ${label}` : `${label} →`}
    </Link>
  );
}
