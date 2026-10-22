import { profile } from "@/content/profile";
import { site } from "@/content/site";

export default function Footer() {
  const { footer } = site;
  return (
    <footer className="bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 py-4 text-orange-400 dark:text-white">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
          {profile.socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer me" className="hover:underline">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text font-bold text-transparent">Win</span>
          <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text font-bold text-transparent">Apps</span>
          {" · "}
          {footer.rightsNotice}
        </p>
        <a href={`mailto:${footer.email}`} className="hover:underline">
          {footer.email}
        </a>
      </div>
    </footer>
  );
}
