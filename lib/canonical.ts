/**
 * Canonical URL utilities for winapps.io
 * Ensures all URLs use www.winapps.io as the canonical domain
 */

const CANONICAL_DOMAIN = "https://www.winapps.io";

/**
 * Generate a canonical URL for a given path
 * @param path - The path without leading slash (e.g., "projects/voizy")
 * @returns The canonical URL with www.winapps.io domain
 */
export function generateCanonicalUrl(path: string = ""): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Return domain only for home page
  if (!cleanPath) {
    return CANONICAL_DOMAIN;
  }

  return `${CANONICAL_DOMAIN}/${cleanPath}`;
}

/**
 * Get the current path from the window location
 * Only works on client side
 */
export function getCurrentPath(): string {
  if (typeof window === "undefined") return "";

  // Remove the leading slash and return the path
  return window.location.pathname.slice(1);
}

/**
 * Get canonical URL for the current page
 * Only works on client side
 */
export function getCurrentCanonicalUrl(): string {
  return generateCanonicalUrl(getCurrentPath());
}
