"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { promos } from "@/content/promos";
import type { PromoSlot as PromoSlotData } from "@/content/schema";
import { site } from "@/content/site";
import { trackPromoClick, trackPromoImpression } from "@/lib/analytics";

/**
 * Config-driven self-promo banner (content/promos.ts). The top slot loads with
 * priority, the bottom one lazily; an impression is sent once, when at least
 * half of the creative is visible.
 */
export function PromoSlot({ id }: { id: PromoSlotData["id"] }) {
  const slot = promos.find((p) => p.id === id && p.enabled);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!slot || !el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trackPromoImpression(slot.id, slot.product);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [slot]);

  if (!slot) return null;

  // Same referral + UTM shape the old ad banner used.
  const href = new URL(slot.href);
  if (slot.referral) href.searchParams.set("referral_code", slot.referral);
  href.searchParams.set("utm_source", "WinApps.io");
  href.searchParams.set("utm_medium", id);
  href.searchParams.set("utm_campaign", `${slot.product}_promo`);

  return (
    <aside aria-label={site.copy.labels.sponsored} className="flex justify-center">
      <a
        ref={ref}
        href={href.toString()}
        target="_blank"
        rel="noopener noreferrer sponsored"
        onClick={() => trackPromoClick(slot.id, slot.product)}
        className="block w-full max-w-[728px]"
      >
        <Image
          src={slot.creative.src}
          alt={slot.creative.alt}
          width={slot.creative.width}
          height={slot.creative.height}
          unoptimized
          priority={id === "home-top"}
          loading={id === "home-top" ? undefined : "lazy"}
          className="h-auto w-full rounded-md"
        />
      </a>
    </aside>
  );
}
