"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { promos } from "@/content/promos";
import type { PromoSlot as PromoSlotData } from "@/content/schema";
import { site } from "@/content/site";
import { trackPromoClick, trackPromoImpression } from "@/lib/analytics";

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Config-driven self-promo banner (content/promos.ts). Shows the poster first;
 * a video creative starts (muted, looping) once half of it is in view, unless the
 * visitor prefers reduced motion. That same moment sends one promo_impression.
 */
export function PromoSlot({ id }: { id: PromoSlotData["id"] }) {
  const slot = promos.find((p) => p.id === id && p.enabled);
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!slot || !el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackPromoImpression(slot.id, slot.product);
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [slot]);

  if (!slot) return null;
  const { creative } = slot;

  // Same referral + UTM shape the old ad banner used.
  const href = new URL(slot.href);
  if (slot.referral) href.searchParams.set("referral_code", slot.referral);
  href.searchParams.set("utm_source", "WinApps.io");
  href.searchParams.set("utm_medium", id);
  href.searchParams.set("utm_campaign", `${slot.product}_promo`);

  const still = creative.kind === "video" ? creative.poster ?? creative.src : creative.src;
  const playVideo = creative.kind === "video" && visible && !reducedMotion();

  return (
    <aside aria-label={site.copy.labels.sponsored} className="flex justify-center">
      <a
        ref={ref}
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => trackPromoClick(slot.id, slot.product)}
        className="relative block w-full max-w-[728px] overflow-hidden rounded-md"
        style={{ aspectRatio: `${creative.width} / ${creative.height}` }}
      >
        <Image
          src={still}
          alt={creative.alt}
          fill
          sizes="(min-width: 768px) 728px, 100vw"
          priority={id === "home-top"}
          className="object-cover"
        />
        {playVideo && (
          <video
            src={creative.src}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </a>
    </aside>
  );
}
