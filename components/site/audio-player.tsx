"use client";

import { useRef } from "react";
import type { AudioClip } from "@/content/schema";
import { trackFeatureUsage } from "@/lib/analytics";

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/**
 * Audio card: title, length, description and the native player. Nothing
 * downloads until play (preload="none"); starting one clip pauses the others,
 * and each clip's first play is reported to analytics.
 */
export function AudioPlayer({ clip }: { clip: AudioClip }) {
  const reported = useRef(false);

  return (
    <figure className="flex h-full flex-col gap-3 rounded-lg border bg-card p-4">
      <figcaption>
        <span className="block font-semibold">
          {clip.title} <span className="text-sm font-normal text-muted-foreground">· {fmt(clip.durationSeconds)}</span>
        </span>
        <span className="block text-sm text-muted-foreground">{clip.description}</span>
      </figcaption>
      <audio
        controls
        preload="none"
        aria-label={clip.title}
        className="mt-auto w-full"
        onPlay={(e) => {
          document.querySelectorAll("audio").forEach((a) => a !== e.currentTarget && a.pause());
          if (!reported.current) {
            trackFeatureUsage("voice_demo", { action: "play", clip: clip.title });
            reported.current = true;
          }
        }}
      >
        {clip.sources.map((s) => (
          <source key={s.src} src={s.src} type={s.type} />
        ))}
      </audio>
    </figure>
  );
}
