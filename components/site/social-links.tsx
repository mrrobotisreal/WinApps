import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare, AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";
import { Button } from "@/components/ui/button";
import type { Link } from "@/content/schema";
import { TrackedLink } from "./tracked-link";

const ICONS: Record<string, React.ComponentType> = {
  LinkedIn: AiFillLinkedin,
  GitHub: AiFillGithub,
  Medium: AiFillMediumSquare,
  X: FaXTwitter,
  YouTube: AiFillYoutube,
  Linktree: SiLinktree,
};

/** Icon buttons for the profile's social links (each a real <a>, never nested in a <button>). */
export function SocialLinks({ links }: { links: Link[] }) {
  return (
    <ul className="flex flex-row justify-center gap-4">
      {links.map((link) => {
        const Icon = ICONS[link.label];
        return (
          <li key={link.href}>
            <Button variant="secondary" size="icon" className="size-8" asChild>
              <TrackedLink
                href={link.href}
                kind="social"
                trackLabel={link.label}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={link.label}
                className="text-white"
              >
                {Icon ? <Icon /> : link.label}
              </TrackedLink>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
