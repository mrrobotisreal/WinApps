"use client";

import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Media } from "@/content/schema";
import { site } from "@/content/site";
import { trackVideoInteraction } from "@/lib/analytics";

const { labels } = site.copy;

/**
 * A project's launch film. Plays muted and looping while it is on screen (browsers only
 * autoplay muted video), pauses when scrolled away, and has a sound toggle plus native
 * controls. Visitors who prefer reduced motion get the poster and press play themselves.
 * The server renders only the poster; the <video> mounts after first paint and fetches metadata only.
 */
export function LaunchFilm({ film, name, priority }: { film: Media; name: string; priority?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const reported = useRef(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {}); // autoplay can be refused; the controls still work
        else el.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [mounted, reducedMotion]);

  const toggleSound = () => {
    const el = ref.current;
    if (!el) return;
    el.muted = !el.muted;
    if (!el.muted) {
      el.play().catch(() => {});
      trackVideoInteraction(`${name} launch film (sound on)`, "play");
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg border bg-black"
      style={{ aspectRatio: `${film.width} / ${film.height}` }}
    >
      {film.poster && (
        <Image
          src={film.poster}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 1024px, 100vw"
          className="object-cover"
        />
      )}
      {mounted && (
        <video
          ref={ref}
          src={film.src}
          poster={film.poster}
          muted
          loop
          playsInline
          controls
          preload={reducedMotion ? "none" : "metadata"}
          aria-label={film.alt}
          onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
          onPlay={() => {
            if (reported.current) return;
            reported.current = true;
            trackVideoInteraction(`${name} launch film`, "play");
          }}
          className="absolute inset-0 h-full w-full"
        />
      )}
      {mounted && (
        <button
          type="button"
          onClick={toggleSound}
          className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          {muted ? <VolumeX className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
          {muted ? labels.soundOn : labels.soundOff}
        </button>
      )}
    </div>
  );
}
