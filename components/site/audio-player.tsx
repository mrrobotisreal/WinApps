"use client";

import { useEffect, useRef, useState } from "react";
import type { AudioClip, AudioLanguage } from "@/content/schema";
import { trackFeatureUsage } from "@/lib/analytics";

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, "0")}`;

/** One clip card. `lang` picks the rendition; changing it swaps the sources and stops playback. */
function ClipCard({ clip, lang, langLabel }: { clip: AudioClip; lang: string; langLabel: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const reported = useRef(new Set<string>());
  const version = clip.versions.find((v) => v.lang === lang) ?? clip.versions[0];

  const first = useRef(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (first.current) {
      first.current = false; // nothing to swap on mount, and load() would fetch the file
      return;
    }
    el.pause();
    el.load(); // <source> children changed; reload so the new language plays (preload="none" keeps it lazy)
  }, [version.lang]);

  return (
    <figure className="flex h-full flex-col gap-3 rounded-lg border bg-card p-4">
      <figcaption>
        <span className="block font-semibold">
          {clip.title}{" "}
          <span className="text-sm font-normal text-muted-foreground">
            · <bdi>{langLabel}</bdi> · {fmt(version.durationSeconds)}
          </span>
        </span>
        <span className="block text-sm text-muted-foreground">{clip.description}</span>
      </figcaption>
      <audio
        ref={ref}
        controls
        preload="none"
        lang={version.lang}
        aria-label={`${clip.title} (${langLabel})`}
        className="mt-auto w-full"
        onPlay={(e) => {
          document.querySelectorAll("audio").forEach((a) => a !== e.currentTarget && a.pause());
          const key = `${clip.title}:${version.lang}`;
          if (!reported.current.has(key)) {
            trackFeatureUsage("voice_demo", { action: "play", clip: clip.title, lang: version.lang });
            reported.current.add(key);
          }
        }}
      >
        {version.sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </audio>
    </figure>
  );
}

/** A language picker that drives every clip in the group at once. */
export function AudioGroup({ clips, languages, label }: { clips: AudioClip[]; languages?: AudioLanguage[]; label: string }) {
  const langs = languages?.length ? languages : [{ code: clips[0].versions[0].lang, label: clips[0].versions[0].lang, dir: "ltr" as const }];
  const [lang, setLang] = useState(langs[0].code);
  const current = langs.find((l) => l.code === lang) ?? langs[0];

  return (
    <div className="space-y-3">
      {langs.length > 1 && (
        <label className="flex flex-wrap items-center gap-2 text-sm font-medium">
          {label}
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              trackFeatureUsage("voice_demo", { action: "language", lang: e.target.value });
            }}
            className="rounded-md border bg-background px-3 py-1.5 text-sm"
          >
            {langs.map((l) => (
              <option key={l.code} value={l.code} lang={l.code} dir={l.dir}>
                {l.label}
              </option>
            ))}
          </select>
        </label>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        {clips.map((clip) => (
          <ClipCard key={clip.title} clip={clip} lang={current.code} langLabel={current.label} />
        ))}
      </div>
    </div>
  );
}
