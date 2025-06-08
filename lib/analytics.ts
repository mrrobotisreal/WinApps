import { logEvent, setUserProperties } from 'firebase/analytics';
import { analytics } from './firebase';

// Track page views
export const trackPageView = (pageName: string) => {
  if (!analytics || typeof window === 'undefined') return;

  logEvent(analytics, 'page_view', {
    page_title: pageName,
    page_location: window.location.href
  });
};

// Track user engagement
export const trackFeatureUsage = (featureName: string, additionalData?: Record<string, string | number | boolean>) => {
  if (!analytics) return;

  logEvent(analytics, 'feature_usage', {
    feature_name: featureName,
    ...additionalData
  });
};

// Set user properties for better audience segmentation
export const setUserProperty = (propertyName: string, propertyValue: string) => {
  if (!analytics) return;

  setUserProperties(analytics, {
    [propertyName]: propertyValue
  });
};

// Track user session information
export const trackUserSession = (sessionData: {
  user_type?: 'new' | 'returning';
  preferred_content?: string;
  visit_count?: number;
}) => {
  if (!analytics) return;

  Object.entries(sessionData).forEach(([key, value]) => {
    setUserProperty(key, String(value));
  });
};

// Track ad interaction events
export const trackAdInteraction = (adType: string, adPosition: string, interaction: 'view' | 'click') => {
  if (!analytics) return;

  logEvent(analytics, 'ad_interaction', {
    ad_type: adType,
    ad_position: adPosition,
    interaction_type: interaction
  });
};

// Track navigation events
export const trackNavigation = (destination: string, source?: string) => {
  if (!analytics) return;

  logEvent(analytics, 'navigation', {
    destination,
    source: source || 'unknown'
  });
};

// Track portfolio/project views
export const trackProjectView = (projectName: string, projectType: 'portfolio' | 'project' | 'demo') => {
  if (!analytics) return;

  logEvent(analytics, 'project_view', {
    project_name: projectName,
    project_type: projectType
  });
};

// Track external link clicks
export const trackExternalLink = (linkUrl: string, linkText: string) => {
  if (!analytics) return;

  logEvent(analytics, 'external_link_click', {
    link_url: linkUrl,
    link_text: linkText
  });
};

// Track resume downloads
export const trackResumeDownload = (resumeType: string) => {
  if (!analytics) return;

  logEvent(analytics, 'resume_download', {
    resume_type: resumeType
  });
};

// Track video interactions
export const trackVideoInteraction = (videoName: string, action: 'play' | 'pause' | 'complete') => {
  if (!analytics) return;

  logEvent(analytics, 'video_interaction', {
    video_name: videoName,
    action
  });
};

// Track search events (if you add search functionality)
export const trackSearch = (searchTerm: string, resultsCount?: number) => {
  if (!analytics) return;

  logEvent(analytics, 'search', {
    search_term: searchTerm,
    results_count: resultsCount || 0
  });
};

// Track contact form submissions
export const trackContactForm = (formType: string, success: boolean) => {
  if (!analytics) return;

  logEvent(analytics, 'contact_form_submission', {
    form_type: formType,
    success
  });
};
