import { useEffect } from "react";
import { getCurrentCanonicalUrl, generateCanonicalUrl } from "@/lib/canonical";

/**
 * Custom hook to add canonical URL to document head
 * For use in client components
 *
 * @param customPath - Optional custom path, if not provided uses current pathname
 */
export function useCanonical(customPath?: string) {
  useEffect(() => {
    // Generate canonical URL
    const canonicalUrl = customPath
      ? generateCanonicalUrl(customPath)
      : getCurrentCanonicalUrl();

    // Check if canonical link already exists
    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;

    if (canonicalLink) {
      // Update existing canonical link
      canonicalLink.href = canonicalUrl;
    } else {
      // Create new canonical link
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = canonicalUrl;
      document.head.appendChild(canonicalLink);
    }

    // Cleanup function to remove the canonical link when component unmounts
    return () => {
      const existingLink = document.querySelector('link[rel="canonical"]');
      if (existingLink && existingLink.getAttribute("href") === canonicalUrl) {
        // Only remove if it's the same URL we added
        // This prevents removing canonical links added by other components
      }
    };
  }, [customPath]);
}
