import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/content/schema";
import { site } from "@/content/site";
import { linkClass } from "./page-header";
import { TrackedLink } from "./tracked-link";

const { labels } = site.copy;

/**
 * Card for any tier. Hero/flagship/standard cards link to the project page;
 * archive tiles have no page, so they link to the live site or the source.
 */
export function ProjectCard({ project }: { project: Project }) {
  const isArchive = project.tier === "archive";
  const external = project.links.find((l) => l.external);
  const banner = project.media.banner ?? project.media.hero;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex justify-center text-center">{project.displayName ?? project.name}</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-3">
        {banner && !isArchive && banner.width > banner.height && (
          <Image
            src={banner.src}
            alt={banner.alt}
            width={banner.width}
            height={banner.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="w-full rounded-md"
          />
        )}
        {/* Phone apps have no wide banner: show the portrait hero screenshot, centred. */}
        {banner && !isArchive && banner.width <= banner.height && (
          <Image
            src={banner.src}
            alt={banner.alt}
            width={banner.width}
            height={banner.height}
            sizes={`${Math.round((224 / banner.height) * banner.width)}px`}
            className="mx-auto h-56 w-auto rounded-md border"
          />
        )}
        <p className="flex-1 text-muted-foreground">{project.tagline}</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          {project.status === "archived" ? (
            <Badge variant="outline">{labels.archived}</Badge>
          ) : (
            <span />
          )}
          {isArchive ? (
            external && (
              <TrackedLink
                href={external.href}
                trackLabel={`${project.name}: ${external.label}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} font-semibold hover:underline`}
              >
                {external.href.includes("github.com") ? labels.source : labels.liveSite} →
              </TrackedLink>
            )
          ) : (
            <Link href={`/projects/${project.slug}`} className={`${linkClass} font-semibold hover:underline`}>
              {labels.viewProject} →
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
