"use client";

import Image from "next/image";
import type { Media } from "@/content/schema";
import { cn } from "@/lib/utils";

/**
 * Horizontally scrolling strip for screenshots and videos. Images go through
 * next/image (lazy); videos never preload and show their poster.
 */
export function MediaGallery({ items, className }: { items: Media[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul
      className={cn(
        "flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:thin]",
        className
      )}
    >
      {items.map((item) => (
        <li key={item.src} className="snap-start shrink-0">
          <figure className="space-y-2">
            <MediaItem item={item} className="h-[420px] w-auto rounded-lg border object-contain" />
            {item.caption && (
              <figcaption className="text-center text-xs text-muted-foreground">{item.caption}</figcaption>
            )}
          </figure>
        </li>
      ))}
    </ul>
  );
}

/** A single image or video from content, sized by its intrinsic dimensions. */
export function MediaItem({
  item,
  className,
  priority,
  sizes,
}: {
  item: Media;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (item.kind === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        width={item.width}
        height={item.height}
        controls
        playsInline
        preload="none"
        aria-label={item.alt}
        className={className}
      />
    );
  }
  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
