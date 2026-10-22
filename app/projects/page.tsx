import Layout from "@/components/layout";
import { AnalyticsPageView, PageHeader, ProjectCard, Section } from "@/components/site";
import { projectsByTier } from "@/content/projects";
import { site } from "@/content/site";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { home, pages } = site.copy;

export const metadata = createMetadata({
  title: pages.projects.title,
  description: pages.projects.description,
  path: "projects",
});

export default function ProjectsPage() {
  const groups = [
    { heading: home.buildingHeading, items: projectsByTier("hero"), cols: "md:grid-cols-1 max-w-2xl mx-auto" },
    { heading: home.flagshipHeading, items: projectsByTier("flagship"), cols: "md:grid-cols-2" },
    {
      heading: home.moreProjectsHeading,
      items: [...projectsByTier("standard"), ...projectsByTier("archive")],
      cols: "md:grid-cols-2 lg:grid-cols-3",
    },
  ];
  return (
    <Layout>
      <AnalyticsPageView pageName="Projects" />
      <div className="container mx-auto space-y-12 px-4 py-8">
        <PageHeader title={pages.projects.title} crumbs={[{ label: pages.projects.title }]} intro={pages.projects.intro} />
        {groups.map((g) => (
          <Section key={g.heading} heading={g.heading}>
            <ul className={`grid gap-6 ${g.cols}`}>
              {g.items.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </Section>
        ))}
      </div>
    </Layout>
  );
}
