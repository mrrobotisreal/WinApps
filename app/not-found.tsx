import Link from "next/link";
import Layout from "@/components/layout";
import { GradientHeading, linkClass } from "@/components/site";
import { site } from "@/content/site";

const { labels, pages } = site.copy;

export default function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto space-y-6 px-4 py-24 text-center">
        <GradientHeading text={labels.notFoundTitle} />
        <p className="text-lg text-muted-foreground">{labels.notFoundBody}</p>
        <p className="flex justify-center gap-6">
          <Link href="/" className={`${linkClass} font-semibold hover:underline`}>
            {labels.home}
          </Link>
          <Link href="/projects" className={`${linkClass} font-semibold hover:underline`}>
            {pages.projects.title}
          </Link>
        </p>
      </div>
    </Layout>
  );
}
