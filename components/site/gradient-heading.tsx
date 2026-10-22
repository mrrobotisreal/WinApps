import { cn } from "@/lib/utils";

/**
 * The site's two-tone heading: first word orange, the rest purple, matching the
 * original WinApps wordmark treatment.
 */
export function GradientHeading({ text, className }: { text: string; className?: string }) {
  const [first, ...rest] = text.split(" ");
  return (
    <h1 className={cn("text-4xl md:text-6xl font-bold", className)}>
      <span className="bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
        {first}
      </span>
      {rest.length > 0 && (
        <span className="bg-gradient-to-b from-purple-300 to-purple-900 bg-clip-text text-transparent">
          {" "}
          {rest.join(" ")}
        </span>
      )}
    </h1>
  );
}
