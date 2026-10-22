import Layout from "@/components/layout";
import { ResumeButtons } from "@/components/resume-buttons";
import { AnalyticsPageView, linkClass, PageHeader, SocialLinks } from "@/components/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { labels, pages } = site.copy;

export const metadata = createMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: "contact",
});

export default function ContactPage() {
  return (
    <Layout>
      <AnalyticsPageView pageName="Contact" />
      <div className="container mx-auto space-y-8 px-4 py-8">
        <PageHeader title={pages.contact.title} crumbs={[{ label: pages.contact.title }]} intro={pages.contact.intro} />
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{labels.email}</CardTitle>
            </CardHeader>
            <CardContent>
              <a href={`mailto:${profile.email}`} className={`${linkClass} break-all font-semibold hover:underline`}>
                {profile.email}
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>{labels.resume}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResumeButtons pdfLabel={labels.resumePdf} docxLabel={labels.resumeDocx} />
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{labels.socials}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <SocialLinks links={profile.socials} />
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                {profile.socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer me" className={`${linkClass} hover:underline`}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
