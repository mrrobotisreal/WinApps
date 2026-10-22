import Layout from "@/components/layout";
import { AnalyticsPageView, ExperienceCard, PageHeader } from "@/components/site";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { pages } = site.copy;

export const metadata = createMetadata({
  title: pages.portfolio.title,
  description: pages.portfolio.description,
  path: "portfolio",
});

export default function PortfolioPage() {
  const ordered = [...experience].sort((a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order);
  return (
    <Layout>
      <AnalyticsPageView pageName="Portfolio" />
      <div className="container mx-auto space-y-8 px-4 py-8">
        <PageHeader title={pages.portfolio.title} crumbs={[{ label: pages.portfolio.title }]} intro={pages.portfolio.intro} />
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ordered.map((e) => (
            <li key={e.slug}>
              <ExperienceCard entry={e} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
