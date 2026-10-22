/**
 * Site analytics. PostHog is the only SDK (DECISIONS §14). Event names and
 * exported function names are kept from the pre-revamp module because
 * dashboards depend on them.
 *
 * The SDK is loaded lazily by components/analytics-provider.tsx; until it calls
 * `attachClient`, events queue in memory and flush once it is ready.
 */

export type EventProperties = Record<string, string | number | boolean | null | undefined>;

/** The subset of the posthog-js client this module uses. */
export interface AnalyticsClient {
  capture(event: string, properties?: EventProperties): void;
  setPersonProperties(properties: EventProperties): void;
}

/** Every event this site sends, with its payload type. */
export interface EventMap {
  page_view: { page_title: string; page_location: string; page_path: string; page_search: string; page_hash: string; referrer: string };
  feature_usage: { feature_name: string; page_path: string } & EventProperties;
  user_session: EventProperties;
  ad_interaction: { ad_type: string; ad_position: string; interaction_type: "view" | "click"; page_path: string; page_title: string };
  promo_impression: { slot: string; product: string; page_path: string };
  promo_click: { slot: string; product: string; page_path: string };
  navigation: { destination: string; source: string; from_page: string; navigation_type: "internal" };
  project_view: { project_name: string; project_type: string; page_path: string; referrer: string; project_category: string; view_duration_start: number };
  external_link_click: { link_url: string; link_text: string; from_page: string; page_title: string; link_domain: string };
  resume_download: { resume_type: string; page_path: string; download_source: "website" };
  video_interaction: { video_name: string; action: "play" | "pause" | "complete"; page_path: string; video_platform: "embedded" };
  search: { search_term: string; results_count: number; page_path: string; search_length: number };
  contact_form_submission: { form_type: string; success: boolean; page_path: string; form_location: "website" };
  button_click: { button_name: string; button_type: string; context: string; page_path: string; page_title: string };
  scroll_depth: { scroll_depth: number; max_scroll: number; scroll_percentage: number; page_path: string; page_height: number; viewport_height: number };
  time_on_page: { time_spent: number; page_url: string; engagement_level: "high" | "medium" | "low" };
  app_download: { app_name: string; platform: string; download_type: "direct" | "store"; page_path: string; source: "website" };
  social_click: { platform: string; action: string; content: string; page_path: string; social_type: "external_link" };
  redirect_track: EventProperties;
}

let client: AnalyticsClient | null = null;
const queue: Array<[string, EventProperties]> = [];

/** Called once the PostHog SDK has initialised; flushes anything queued before. */
export function attachClient(next: AnalyticsClient | null) {
  client = next;
  if (!client) return;
  for (const [event, props] of queue.splice(0)) client.capture(event, props);
}

// Debug hook: window.__winappsAnalytics.attachClient can be wrapped (e.g. by a
// test harness) before the SDK loads; the provider always attaches through it.
type Hook = { attachClient: (c: AnalyticsClient | null) => void };
if (typeof window !== "undefined") {
  (window as unknown as { __winappsAnalytics?: Hook }).__winappsAnalytics ??= { attachClient };
}

/** Attach via the debug hook so a wrapped attachClient (if any) sees the client. */
export function attachViaHook(next: AnalyticsClient | null) {
  const hook = (window as unknown as { __winappsAnalytics?: Hook }).__winappsAnalytics;
  (hook?.attachClient ?? attachClient)(next);
}

/** Test hook: inspect and clear the pending queue. */
export function drainQueue(): Array<[string, EventProperties]> {
  return queue.splice(0);
}

function capture<E extends keyof EventMap>(event: E, properties: EventMap[E]) {
  if (typeof window === "undefined") return;
  const props = { ...(properties as EventProperties), timestamp: new Date().toISOString() };
  if (client) client.capture(event, props);
  else queue.push([event, props]);
}

const path = () => window.location.pathname;

export const trackPageView = (pageName: string) =>
  capture("page_view", {
    page_title: pageName,
    page_location: window.location.href,
    page_path: path(),
    page_search: window.location.search,
    page_hash: window.location.hash,
    referrer: document.referrer,
  });

export const trackFeatureUsage = (featureName: string, additionalData?: Record<string, string | number | boolean>) =>
  capture("feature_usage", { feature_name: featureName, page_path: path(), ...additionalData });

export const setUserProperty = (propertyName: string, propertyValue: string) => {
  client?.setPersonProperties({ [propertyName]: propertyValue, last_updated: new Date().toISOString() });
};

export const trackUserSession = (sessionData: { user_type?: "new" | "returning"; preferred_content?: string; visit_count?: number }) => {
  capture("user_session", {
    ...sessionData,
    session_start: new Date().toISOString(),
    user_agent: navigator.userAgent,
    screen_resolution: `${screen.width}x${screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
  });
  client?.setPersonProperties({ ...sessionData, last_session: new Date().toISOString() });
};

export const trackPromoImpression = (slot: string, product: string) =>
  capture("promo_impression", { slot, product, page_path: path() });

export const trackPromoClick = (slot: string, product: string) =>
  capture("promo_click", { slot, product, page_path: path() });

/** @deprecated Kept one release for old callers; use trackPromoImpression / trackPromoClick. */
export const trackAdInteraction = (adType: string, adPosition: string, interaction: "view" | "click") =>
  capture("ad_interaction", {
    ad_type: adType,
    ad_position: adPosition,
    interaction_type: interaction,
    page_path: path(),
    page_title: document.title,
  });

export const trackNavigation = (destination: string, source?: string) =>
  capture("navigation", { destination, source: source || "unknown", from_page: path(), navigation_type: "internal" });

export const trackProjectView = (projectName: string, projectType: "portfolio" | "project" | "demo" | string) =>
  capture("project_view", {
    project_name: projectName,
    project_type: projectType,
    page_path: path(),
    referrer: document.referrer,
    project_category: projectType,
    view_duration_start: Date.now(),
  });

export const trackExternalLink = (linkUrl: string, linkText: string) => {
  let domain = "";
  try {
    domain = new URL(linkUrl, window.location.href).hostname;
  } catch {
    domain = "invalid";
  }
  capture("external_link_click", {
    link_url: linkUrl,
    link_text: linkText,
    from_page: path(),
    page_title: document.title,
    link_domain: domain,
  });
};

export const trackResumeDownload = (resumeType: string) =>
  capture("resume_download", { resume_type: resumeType, page_path: path(), download_source: "website" });

export const trackVideoInteraction = (videoName: string, action: "play" | "pause" | "complete") =>
  capture("video_interaction", { video_name: videoName, action, page_path: path(), video_platform: "embedded" });

export const trackSearch = (searchTerm: string, resultsCount?: number) =>
  capture("search", { search_term: searchTerm, results_count: resultsCount || 0, page_path: path(), search_length: searchTerm.length });

export const trackContactForm = (formType: string, success: boolean) =>
  capture("contact_form_submission", { form_type: formType, success, page_path: path(), form_location: "website" });

export const trackButtonClick = (buttonName: string, buttonType: string, context?: string) =>
  capture("button_click", {
    button_name: buttonName,
    button_type: buttonType,
    context: context || "unknown",
    page_path: path(),
    page_title: document.title,
  });

export const trackScrollDepth = (depth: number, maxScroll: number) =>
  capture("scroll_depth", {
    scroll_depth: depth,
    max_scroll: maxScroll,
    scroll_percentage: maxScroll > 0 ? Math.round((depth / maxScroll) * 100) : 100,
    page_path: path(),
    page_height: document.documentElement.scrollHeight,
    viewport_height: window.innerHeight,
  });

export const trackTimeOnPage = (timeSpent: number, pageUrl: string) =>
  capture("time_on_page", {
    time_spent: timeSpent,
    page_url: pageUrl,
    engagement_level: timeSpent > 30 ? "high" : timeSpent > 10 ? "medium" : "low",
  });

export const trackAppDownload = (appName: string, platform: string, downloadType: "direct" | "store") =>
  capture("app_download", { app_name: appName, platform, download_type: downloadType, page_path: path(), source: "website" });

export const trackSocialClick = (platform: string, action: string, content?: string) =>
  capture("social_click", { platform, action, content: content || "unknown", page_path: path(), social_type: "external_link" });

export const trackRedirects = (params: {
  albumName: string;
  albumSlug: string;
  redirectUrl: string;
  action: "view_start" | "cta_click" | "auto_redirect";
  countdownRemaining?: number;
  extra?: Record<string, string | number | boolean | null | undefined>;
}) => {
  if (typeof window === "undefined") return;

  const visitKey = `redirect_album_${params.albumSlug}`;
  const lastVisit = window.localStorage.getItem(visitKey);
  const isReturning = Boolean(lastVisit);
  window.localStorage.setItem(visitKey, new Date().toISOString());

  const currentUrl = new URL(window.location.href);
  const referrer = document.referrer || "direct";

  type NetworkInfo = {
    effectiveType?: string;
    downlink?: number;
  };

  const networkInfo = (navigator as Navigator & { connection?: NetworkInfo })
    .connection;
  const deviceMemory = (navigator as Navigator & { deviceMemory?: number })
    .deviceMemory;

  const payload = {
    album_name: params.albumName,
    album_slug: params.albumSlug,
    redirect_url: params.redirectUrl,
    action: params.action,
    countdown_remaining: params.countdownRemaining ?? null,
    is_returning: isReturning,
    referrer,
    page_path: window.location.pathname,
    page_search: window.location.search,
    page_hash: window.location.hash,
    page_location: window.location.href,
    utm_source: currentUrl.searchParams.get("utm_source") || "unknown",
    utm_medium: currentUrl.searchParams.get("utm_medium") || "unknown",
    utm_campaign: currentUrl.searchParams.get("utm_campaign") || "unknown",
    utm_content: currentUrl.searchParams.get("utm_content") || "unknown",
    utm_term: currentUrl.searchParams.get("utm_term") || "unknown",
    share_code: currentUrl.searchParams.get("share") || null,
    user_agent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen_resolution: `${screen.width}x${screen.height}`,
    viewport_size: `${window.innerWidth}x${window.innerHeight}`,
    connection_type: networkInfo?.effectiveType || null,
    connection_downlink: networkInfo?.downlink ?? null,
    device_memory: deviceMemory ?? null,
    hardware_concurrency: navigator.hardwareConcurrency ?? null,
    ...params.extra,
  };

  capture("redirect_track", payload);
};
