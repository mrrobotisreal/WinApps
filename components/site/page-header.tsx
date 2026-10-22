import Link from "next/link";
import { site } from "@/content/site";
import { GradientHeading } from "./gradient-heading";

export const linkClass =
  "text-orange-600 hover:text-purple-800 dark:text-orange-400 dark:hover:text-purple-300";

interface Crumb {
  label: string;
  href?: string;
}

/** Breadcrumb trail (Home first) and the page's h1, with an optional intro. */
export function PageHeader({ title, crumbs = [], intro }: { title: string; crumbs?: Crumb[]; intro?: string }) {
  const trail: Crumb[] = [{ label: site.copy.labels.home, href: "/" }, ...crumbs];
  return (
    <header className="space-y-6">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 text-sm">
          {trail.map((crumb, i) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className={linkClass}>
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-muted-foreground" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="text-center space-y-4">
        <GradientHeading text={title} />
        {intro && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{intro}</p>}
      </div>
    </header>
  );
}
