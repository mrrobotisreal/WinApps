"use client";

import Image from "next/image";
import { promos } from "@/content/promos";
import type { PromoSlot as PromoSlotData } from "@/content/schema";
import { site } from "@/content/site";

/** Config-driven self-promo banner. W10 adds click analytics. */
export function PromoSlot({ id }: { id: PromoSlotData["id"] }) {
  const slot = promos.find((p) => p.id === id && p.enabled);
  if (!slot) return null;

  const href = new URL(slot.href);
  if (slot.referral) href.searchParams.set("referral_code", slot.referral);
  href.searchParams.set("utm_source", "WinApps.io");
  href.searchParams.set("utm_medium", id);

  return (
    <aside aria-label={site.copy.labels.sponsored} className="flex justify-center">
      <a href={href.toString()} target="_blank" rel="noopener noreferrer sponsored" className="block w-full max-w-[728px]">
        <Image
          src={slot.creative.src}
          alt={slot.creative.alt}
          width={slot.creative.width}
          height={slot.creative.height}
          unoptimized
          className="h-auto w-full rounded-md"
        />
      </a>
    </aside>
  );
}
