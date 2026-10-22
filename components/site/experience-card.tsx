import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Experience } from "@/content/schema";
import { site } from "@/content/site";
import { DateRange } from "./date-range";
import { linkClass } from "./page-header";

export function ExperienceCard({ entry }: { entry: Experience }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0">
        {entry.logo && (
          <Image
            src={entry.logo.src}
            alt={entry.logo.alt}
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full object-contain"
          />
        )}
        <div className="min-w-0">
          <CardTitle className="text-lg">{entry.company}</CardTitle>
          <p className="text-sm text-muted-foreground">{entry.title}</p>
        </div>
      </CardHeader>
      <CardContent className="flex h-full flex-col gap-3">
        <p className="text-sm text-muted-foreground">
          <DateRange start={entry.start} end={entry.end} /> · {site.copy.labels.employment[entry.employment]}
        </p>
        <p className="flex-1">{entry.summary}</p>
        <Link href={`/portfolio/${entry.slug}`} className={`${linkClass} self-end font-semibold hover:underline`}>
          {site.copy.labels.viewRole} →
        </Link>
      </CardContent>
    </Card>
  );
}
