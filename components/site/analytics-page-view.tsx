"use client";

/**
 * Page-view analytics island. Intentionally a no-op until W10 wires PostHog;
 * pages already mount it with their name so W10 only touches this file.
 */
export function AnalyticsPageView({ pageName }: { pageName: string }) {
  void pageName;
  return null;
}
