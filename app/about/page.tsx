import Link from "next/link";
import Layout from "@/components/layout";
import { AnalyticsPageView, DateRange, linkClass, PageHeader, Prose } from "@/components/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { site } from "@/content/site";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { labels, pages } = site.copy;

export const metadata = createMetadata({
  title: pages.about.title,
  description: pages.about.description,
  path: "about",
});

export default function AboutPage() {
  return (
    <Layout>
      <AnalyticsPageView pageName="About" />
      <div className="container mx-auto space-y-8 px-4 py-8">
        <PageHeader title={pages.about.title} crumbs={[{ label: pages.about.title }]} intro={pages.about.intro} />
        <Card>
          <CardContent className="space-y-4 p-6">
            {profile.bio.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed">
                <Prose text={p} />
              </p>
            ))}
          </CardContent>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{labels.experience}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {experience.map((e) => (
                  <li key={e.slug}>
                    <Link href={`/portfolio/${e.slug}`} className={`${linkClass} font-semibold hover:underline`}>
                      {e.title}, {e.company}
                    </Link>
                    <p className="text-sm text-muted-foreground">
                      <DateRange start={e.start} end={e.end} /> · {labels.employment[e.employment]}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{labels.education}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {profile.education.map((ed) => (
                    <li key={ed.school}>
                      <p className="font-semibold">
                        {ed.school}, {ed.credential}
                      </p>
                      {(ed.dates || ed.note) && (
                        <p className="text-sm text-muted-foreground">
                          {ed.dates && <DateRange start={ed.dates.start} end={ed.dates.end} />}
                          {ed.dates && ed.note && " · "}
                          {ed.note}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{labels.languages}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1">
                  {profile.languages.map((l) => (
                    <li key={l.name}>
                      <span className="font-semibold">{l.name}</span>{" "}
                      <span className="text-muted-foreground">· {l.level}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{labels.personal}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                  {profile.personal.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
