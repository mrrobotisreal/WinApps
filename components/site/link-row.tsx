import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Link as LinkData } from "@/content/schema";
import { TrackedLink } from "./tracked-link";

/** Buttons for a project's or role's links; external ones open a new tab. */
export function LinkRow({ links }: { links: LinkData[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Button variant="secondary" asChild>
            {link.external ? (
              <TrackedLink href={link.href} trackLabel={link.label} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
              </TrackedLink>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </Button>
        </li>
      ))}
    </ul>
  );
}
