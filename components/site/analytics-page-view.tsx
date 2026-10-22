"use client";

import { useEffect } from "react";
import { trackPageView, trackProjectView, trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100];

/**
 * Per-page analytics island: a named page view, scroll depth at 25/50/75/100%,
 * and time on page when the tab is hidden. Project pages also pass `project`.
 */
export function AnalyticsPageView({ pageName, project }: { pageName: string; project?: { slug: string; tier: string } }) {
  const projectSlug = project?.slug;
  const projectTier = project?.tier;
  useEffect(() => {
    trackPageView(pageName);
    if (projectSlug && projectTier) trackProjectView(projectSlug, projectTier);

    const start = Date.now();
    const reached = new Set<number>();
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 100;
      for (const m of MILESTONES) {
        if (pct >= m && !reached.has(m)) {
          reached.add(m);
          trackScrollDepth(Math.round((m / 100) * max), max);
        }
      }
    };
    const onHide = () => trackTimeOnPage(Math.round((Date.now() - start) / 1000), window.location.href);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", onHide);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", onHide);
    };
  }, [pageName, projectSlug, projectTier]);

  return null;
}
