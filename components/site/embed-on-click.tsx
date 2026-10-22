"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { Project } from "@/content/schema";

type Embed = NonNullable<Project["embed"]>;

/**
 * A poster with a play button that swaps in the iframe only when clicked,
 * so the third-party player costs nothing until someone wants it.
 */
export function EmbedOnClick({ embed }: { embed: Embed }) {
  const [active, setActive] = useState(false);
  const { poster } = embed;

  return (
    <div className="relative mx-auto aspect-video w-full max-w-4xl overflow-hidden rounded-lg border bg-black">
      {active ? (
        <iframe
          src={embed.src}
          title={embed.title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={embed.buttonLabel}
        >
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-2 rounded-full bg-black/70 px-5 py-3 font-semibold text-white">
              <Play className="h-5 w-5" aria-hidden />
              {embed.buttonLabel}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
