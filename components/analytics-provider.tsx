"use client";

import { useEffect } from "react";
import { attachViaHook } from "@/lib/analytics";

/**
 * Loads posthog-js after hydration (dynamic import, off the critical path) and
 * hands the client to lib/analytics. Page views are sent by AnalyticsPageView
 * with content page names, so automatic pageview capture is off.
 */
export function AnalyticsProvider() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;
    let cancelled = false;

    import("posthog-js").then(({ default: posthog }) => {
      if (cancelled) return;
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
        capture_pageview: false,
        capture_pageleave: true,
        autocapture: true,
        persistence: "localStorage+cookie",
        cross_subdomain_cookie: true,
        session_recording: { maskAllInputs: true },
        loaded: (ph) => {
          if (process.env.NODE_ENV === "development") ph.debug();
          ph.register({ website_version: "2.0.0", platform: "web", framework: "nextjs" });
          ph.startSessionRecording();
          attachViaHook(ph);
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
