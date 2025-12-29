import { logEvent, setUserProperties } from "firebase/analytics";
import { analytics } from "./firebase";
import posthog from "posthog-js";

// Check if PostHog is available (client-side only)
const isPostHogAvailable = () => typeof window !== "undefined" && posthog;

// Track page views
export const trackPageView = (pageName: string) => {
  if (!analytics || typeof window === "undefined") return;

  // Firebase Analytics
  logEvent(analytics, "page_view", {
    page_title: pageName,
    page_location: window.location.href,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("page_view", {
      page_title: pageName,
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_search: window.location.search,
      page_hash: window.location.hash,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track user engagement
export const trackFeatureUsage = (
  featureName: string,
  additionalData?: Record<string, string | number | boolean>
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "feature_usage", {
    feature_name: featureName,
    ...additionalData,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("feature_usage", {
      feature_name: featureName,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      ...additionalData,
    });
  }
};

// Set user properties for better audience segmentation
export const setUserProperty = (
  propertyName: string,
  propertyValue: string
) => {
  if (!analytics) return;

  // Firebase Analytics
  setUserProperties(analytics, {
    [propertyName]: propertyValue,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.setPersonProperties({
      [propertyName]: propertyValue,
      last_updated: new Date().toISOString(),
    });
  }
};

// Track user session information
export const trackUserSession = (sessionData: {
  user_type?: "new" | "returning";
  preferred_content?: string;
  visit_count?: number;
}) => {
  if (!analytics) return;

  // Firebase Analytics
  Object.entries(sessionData).forEach(([key, value]) => {
    setUserProperty(key, String(value));
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("user_session", {
      ...sessionData,
      session_start: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
    });

    // Also set as person properties
    posthog.setPersonProperties({
      ...sessionData,
      last_session: new Date().toISOString(),
    });
  }
};

// Track ad interaction events
export const trackAdInteraction = (
  adType: string,
  adPosition: string,
  interaction: "view" | "click"
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "ad_interaction", {
    ad_type: adType,
    ad_position: adPosition,
    interaction_type: interaction,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("ad_interaction", {
      ad_type: adType,
      ad_position: adPosition,
      interaction_type: interaction,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
};

// Track navigation events
export const trackNavigation = (destination: string, source?: string) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "navigation", {
    destination,
    source: source || "unknown",
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("navigation", {
      destination,
      source: source || "unknown",
      from_page: window.location.pathname,
      timestamp: new Date().toISOString(),
      navigation_type: "internal",
    });
  }
};

// Track portfolio/project views
export const trackProjectView = (
  projectName: string,
  projectType: "portfolio" | "project" | "demo"
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "project_view", {
    project_name: projectName,
    project_type: projectType,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("project_view", {
      project_name: projectName,
      project_type: projectType,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      referrer: document.referrer,
      project_category: projectType,
      view_duration_start: Date.now(),
    });
  }
};

// Track external link clicks
export const trackExternalLink = (linkUrl: string, linkText: string) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "external_link_click", {
    link_url: linkUrl,
    link_text: linkText,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("external_link_click", {
      link_url: linkUrl,
      link_text: linkText,
      timestamp: new Date().toISOString(),
      from_page: window.location.pathname,
      page_title: document.title,
      link_domain: new URL(linkUrl).hostname,
    });
  }
};

// Track resume downloads
export const trackResumeDownload = (resumeType: string) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "resume_download", {
    resume_type: resumeType,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("resume_download", {
      resume_type: resumeType,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      download_source: "website",
    });
  }
};

// Track video interactions
export const trackVideoInteraction = (
  videoName: string,
  action: "play" | "pause" | "complete"
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "video_interaction", {
    video_name: videoName,
    action,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("video_interaction", {
      video_name: videoName,
      action,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      video_platform: "embedded",
    });
  }
};

// Track search events (if you add search functionality)
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "search", {
    search_term: searchTerm,
    results_count: resultsCount || 0,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("search", {
      search_term: searchTerm,
      results_count: resultsCount || 0,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      search_length: searchTerm.length,
    });
  }
};

// Track contact form submissions
export const trackContactForm = (formType: string, success: boolean) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "contact_form_submission", {
    form_type: formType,
    success,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("contact_form_submission", {
      form_type: formType,
      success,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      form_location: "website",
    });
  }
};

// Track button clicks
export const trackButtonClick = (
  buttonName: string,
  buttonType: string,
  context?: string
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "button_click", {
    button_name: buttonName,
    button_type: buttonType,
    context: context || "unknown",
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("button_click", {
      button_name: buttonName,
      button_type: buttonType,
      context: context || "unknown",
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
};

// Track scroll depth
export const trackScrollDepth = (depth: number, maxScroll: number) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "scroll_depth", {
    scroll_depth: depth,
    max_scroll: maxScroll,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("scroll_depth", {
      scroll_depth: depth,
      max_scroll: maxScroll,
      scroll_percentage: Math.round((depth / maxScroll) * 100),
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      page_height: document.documentElement.scrollHeight,
      viewport_height: window.innerHeight,
    });
  }
};

// Track time on page
export const trackTimeOnPage = (timeSpent: number, pageUrl: string) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "time_on_page", {
    time_spent: timeSpent,
    page_url: pageUrl,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("time_on_page", {
      time_spent: timeSpent,
      page_url: pageUrl,
      timestamp: new Date().toISOString(),
      engagement_level:
        timeSpent > 30 ? "high" : timeSpent > 10 ? "medium" : "low",
    });
  }
};

// Track app downloads
export const trackAppDownload = (
  appName: string,
  platform: string,
  downloadType: "direct" | "store"
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "app_download", {
    app_name: appName,
    platform: platform,
    download_type: downloadType,
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("app_download", {
      app_name: appName,
      platform: platform,
      download_type: downloadType,
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      source: "website",
    });
  }
};

// Track social media clicks
export const trackSocialClick = (
  platform: string,
  action: string,
  content?: string
) => {
  if (!analytics) return;

  // Firebase Analytics
  logEvent(analytics, "social_click", {
    platform: platform,
    action: action,
    content: content || "unknown",
  });

  // PostHog Analytics
  if (isPostHogAvailable()) {
    posthog.capture("social_click", {
      platform: platform,
      action: action,
      content: content || "unknown",
      timestamp: new Date().toISOString(),
      page_path: window.location.pathname,
      social_type: "external_link",
    });
  }
};

// Track redirect engagement for album links (page load, CTA click, auto redirect)
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
    timestamp: new Date().toISOString(),
    ...params.extra,
  };

  if (analytics) {
    logEvent(analytics, "redirect_track", payload);
  }

  if (isPostHogAvailable()) {
    posthog.capture("redirect_track", payload);
  }
};
