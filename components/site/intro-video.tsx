"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Media } from "@/content/schema";

/**
 * Home intro video. The server renders only the poster image; the <video> mounts
 * after first paint with preload="metadata", and autoplays (muted) only when the
 * visitor has not asked for reduced motion.
 */
export function IntroVideo({ video }: { video: Media }) {
  const [mounted, setMounted] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setAutoPlay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative w-full" style={{ aspectRatio: `${video.width} / ${video.height}` }}>
      {video.poster && (
        <Image src={video.poster} alt="" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      )}
      {mounted && (
        <video
          src={video.src}
          poster={video.poster}
          controls
          muted
          playsInline
          autoPlay={autoPlay}
          preload="metadata"
          aria-label={video.alt}
          className="absolute inset-0 h-full w-full"
        />
      )}
    </div>
  );
}
