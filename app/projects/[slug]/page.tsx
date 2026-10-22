import { notFound } from "next/navigation";
import Layout from "@/components/layout";
import {
  AnalyticsPageView,
  DateRange,
  LinkRow,
  MediaGallery,
  MediaItem,
  NumberStrip,
  PageHeader,
  Prose,
  ProseSections,
  TechBadges,
} from "@/components/site";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { generateMetadata as createMetadata } from "@/lib/metadata";


const { labels, pages } = site.copy;

type Params = { params: Promise<{ slug: string }> };

/** Archive-tier projects are tiles only; they have no page. */
const withPages = projects.filter((p) => p.tier !== "archive");

export const dynamicParams = false;

export function generateStaticParams() {
  return withPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = withPages.find((p) => p.slug === slug);
  if (!project) return {};
  const image = project.media.banner ?? project.media.hero;
  return createMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `projects/${project.slug}`,
    image: image && image.kind === "image"
      ? { url: image.src.startsWith("/") ? `${site.baseUrl}${image.src}` : image.src, width: image.width, height: image.height, alt: image.alt }
      : undefined,
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = withPages.find((p) => p.slug === slug);
  if (!project) notFound();
  const { hero, banner } = project.media;
  // Section media renders in place; the gallery shows only what no section shows.
  const inSections = new Set(project.sections.flatMap((sec) => sec.media ?? []).map((m) => m.src));
  const gallery = project.media.gallery.filter((m) => !inSections.has(m.src));
  const title = project.displayName ?? project.name;

  return (
    <Layout>
      <AnalyticsPageView pageName={`project_${project.slug}`} />
      <div className="container mx-auto space-y-8 px-4 py-8">
        <PageHeader
          title={title}
          crumbs={[{ label: pages.projects.title, href: "/projects" }, { label: title }]}
          intro={project.tagline}
        />
        <Card>
          <CardContent className="space-y-8 p-6">
            {banner && (
              <MediaItem
                item={banner}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="mx-auto h-auto w-full max-w-5xl rounded-lg"
              />
            )}
            <p className="text-sm text-muted-foreground">
              {project.role} · <DateRange start={project.start} end={project.end} />
            </p>
            <div className={hero ? "grid items-start gap-8 md:grid-cols-[1fr_auto]" : ""}>
              <div className="space-y-4">
                {project.summary.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    <Prose text={p} />
                  </p>
                ))}
              </div>
              {hero && (
                <MediaItem
                  item={hero}
                  priority={!banner}
                  className="mx-auto h-auto max-h-[540px] w-auto rounded-lg border"
                />
              )}
            </div>
            <NumberStrip numbers={project.numbers} />
            <ProseSections sections={project.sections} />
            {gallery.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">{labels.gallery}</h2>
                <MediaGallery items={gallery} />
              </div>
            )}
            <TechBadges tech={project.tech} heading={labels.tech} />
            <LinkRow links={project.links} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
