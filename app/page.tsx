import Link from "next/link";
import Layout from "@/components/layout";
import { ResumeButtons } from "@/components/resume-buttons";
import {
  AnalyticsPageView,
  ExperienceCard,
  GradientHeading,
  IntroVideo,
  linkClass,
  MediaItem,
  NumberStrip,
  ProjectCard,
  PromoSlot,
  Prose,
  Section,
  SkillGrid,
  SocialLinks,
} from "@/components/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blog } from "@/content/blog";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects, projectsByTier } from "@/content/projects";
import { site } from "@/content/site";
import { formatYearMonth } from "@/lib/prose";
import { generateMetadata as createMetadata } from "@/lib/metadata";

const { home, labels, pages } = site.copy;

export const metadata = createMetadata({
  title: pages.home.title,
  description: pages.home.description,
});

export default function Home() {
  const hero = projectsByTier("hero")[0];
  const flagships = projectsByTier("flagship");
  const more = projects.filter((p) => p.tier === "standard" || p.tier === "archive");

  return (
    <Layout>
      <AnalyticsPageView pageName="Home" />
      <div className="container mx-auto space-y-16 px-4 py-8">
        <PromoSlot id="home-top" />

        <section className="space-y-6 text-center">
          <p className="text-xl text-muted-foreground">{home.greeting}</p>
          <GradientHeading text={profile.name} />
          <p className="text-2xl font-semibold">{profile.title}</p>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">{profile.positioning}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href={`mailto:${profile.email}`}>{home.ctaEmail}</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={profile.resume.pdf} download>
                {home.ctaResume}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={`#${hero.slug}`}>{home.ctaBuilding}</a>
            </Button>
          </div>
          <SocialLinks links={profile.socials} />
          <div className="flex justify-center">
            <ResumeButtons pdfLabel={labels.resumePdf} docxLabel={labels.resumeDocx} />
          </div>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-2xl">
            <IntroVideo video={home.introVideo} />
          </div>
        </section>

        <Section id={hero.slug} heading={home.buildingHeading}>
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">{hero.displayName ?? hero.name}</CardTitle>
              <p className="text-center text-lg text-muted-foreground">{hero.tagline}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid items-start gap-8 md:grid-cols-[1fr_auto]">
                <div className="space-y-4">
                  {hero.summary.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      <Prose text={p} />
                    </p>
                  ))}
                  <Button asChild>
                    <Link href={`/projects/${hero.slug}`}>{home.readCaseStudy} →</Link>
                  </Button>
                </div>
                {hero.media.hero && (
                  <MediaItem item={hero.media.hero} className="mx-auto h-auto max-h-[540px] w-auto rounded-lg border" />
                )}
              </div>
              <NumberStrip numbers={hero.numbers} />
            </CardContent>
          </Card>
        </Section>

        <Section heading={home.flagshipHeading}>
          <ul className="grid gap-6 md:grid-cols-2">
            {flagships.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="work" heading={home.workHeading}>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experience.map((e) => (
              <li key={e.slug}>
                <ExperienceCard entry={e} />
              </li>
            ))}
          </ul>
        </Section>

        <Section heading={home.moreProjectsHeading}>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        </Section>

        <Section heading={home.blogHeading}>
          <ul className="mx-auto max-w-3xl space-y-4">
            {blog.map((post) => (
              <li key={post.href} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <a href={post.href} target="_blank" rel="noopener noreferrer" className={`${linkClass} font-semibold hover:underline`}>
                  {post.title}
                </a>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {post.publisher} · {formatYearMonth(post.date)}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading={home.skillsHeading}>
          <SkillGrid skills={profile.skills} />
        </Section>

        <PromoSlot id="home-bottom" />
      </div>
    </Layout>
  );
}
