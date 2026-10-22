import type { Section as SectionData } from "@/content/schema";
import { site } from "@/content/site";
import { AudioGroup } from "./audio-player";
import { LinkRow } from "./link-row";
import { MediaGallery } from "./media-gallery";
import { Prose } from "./prose";

/** Long-form body: each content Section as an h2 with paragraphs, bullets and media. */
export function ProseSections({ sections }: { sections: SectionData[] }) {
  if (sections.length === 0) return null;
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">
              <Prose text={p} />
            </p>
          ))}
          {section.bullets && (
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              {section.bullets.map((b, i) => (
                <li key={i}>
                  <Prose text={b} />
                </li>
              ))}
            </ul>
          )}
          {section.media && <MediaGallery items={section.media} />}
          {section.audio && (
            <AudioGroup clips={section.audio} languages={section.audioLanguages} label={site.copy.labels.audioLanguage} />
          )}
          {section.links && <LinkRow links={section.links} />}
        </section>
      ))}
    </div>
  );
}
