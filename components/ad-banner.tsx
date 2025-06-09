"use client";

import React, { useEffect, useRef, useState } from "react";
import { trackAdInteraction } from "@/lib/analytics";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "leaderboard" | "banner";
  className?: string;
  adPosition: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

const AdBanner: React.FC<AdBannerProps> = ({
  adSlot,
  adFormat = "auto",
  className = "",
  adPosition,
  style = {},
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);
  const [adError, setAdError] = useState(false);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const loadAd = async () => {
      try {
        if (
          typeof window !== "undefined" &&
          window.adsbygoogle &&
          adRef.current
        ) {
          const existingAd = adRef.current.querySelector(".adsbygoogle");
          if (
            existingAd &&
            existingAd.getAttribute("data-adsbygoogle-status")
          ) {
            return;
          }

          if (!window.adsbygoogle) {
            setAdError(true);
            return;
          }

          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});

            setTimeout(() => {
              const adElement = adRef.current?.querySelector(".adsbygoogle");
              if (adElement) {
                const adStatus = adElement.getAttribute(
                  "data-adsbygoogle-status"
                );
                const adFilled = adElement.getAttribute("data-ad-status");

                if (adStatus === "done" && adFilled !== "unfilled") {
                  const adHeight = (adElement as HTMLElement).offsetHeight;
                  const adWidth = (adElement as HTMLElement).offsetWidth;

                  if (adHeight > 0 && adWidth > 0) {
                    setAdLoaded(true);
                    setShowAd(true);
                    trackAdInteraction("adsense_banner", adPosition, "view");
                  } else {
                    setAdError(true);
                  }
                } else {
                  setAdError(true);
                }
              } else {
                setAdError(true);
              }
            }, 2000);
          } catch (error) {
            console.error("AdSense push error:", error);
            setAdError(true);
          }
        }
      } catch (error) {
        console.error("AdSense error:", error);
        setAdError(true);
      }
    };

    if (
      process.env.NEXT_PUBLIC_NODE_ENV === "production" &&
      !adSlot.startsWith("123456")
    ) {
      const timer = setTimeout(loadAd, 100);
      return () => clearTimeout(timer);
    } else {
      setAdError(true);
    }
  }, [adPosition, adSlot]);

  if (
    process.env.NEXT_PUBLIC_NODE_ENV === "development" ||
    adError ||
    !showAd
  ) {
    return null;
  }

  return (
    <div className={`ad-container w-full flex justify-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle block w-full max-w-full"
        style={{
          display: adLoaded ? "block" : "none",
          minHeight: adLoaded ? "auto" : "0px",
          backgroundColor: "transparent",
          ...style,
        }}
        data-ad-client="ca-pub-3413790368941825"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
        onClick={() =>
          trackAdInteraction("adsense_banner", adPosition, "click")
        }
      />
    </div>
  );
};

export default AdBanner;
