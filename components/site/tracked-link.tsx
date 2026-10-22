"use client";

import { forwardRef } from "react";
import { trackExternalLink, trackResumeDownload, trackSocialClick } from "@/lib/analytics";

type Kind = "external" | "social" | "resume";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  /** Label sent with the event (defaults to the link text if it is a string). */
  trackLabel?: string;
  kind?: Kind;
}

/** An <a> that reports its click (external link, social profile or resume download). */
export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(function TrackedLink(
  { href, trackLabel, kind = "external", onClick, children, ...rest },
  ref
) {
  const label = trackLabel ?? (typeof children === "string" ? children : href);
  return (
    <a
      ref={ref}
      href={href}
      onClick={(e) => {
        if (kind === "social") trackSocialClick(label, "click", href);
        else if (kind === "resume") trackResumeDownload(href.split(".").pop() ?? "file");
        else trackExternalLink(href, label);
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
});
