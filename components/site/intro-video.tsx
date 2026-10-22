"use client";

import type { Media } from "@/content/schema";

/** The home intro video: never preloads, shows its poster until played. */
export function IntroVideo({ video }: { video: Media }) {
  return (
    <video
      src={video.src}
      poster={video.poster}
      width={video.width}
      height={video.height}
      controls
      muted
      playsInline
      preload="none"
      aria-label={video.alt}
      className="h-auto w-full"
    />
  );
}
