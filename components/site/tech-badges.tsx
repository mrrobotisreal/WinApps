import { Badge } from "@/components/ui/badge";

export function TechBadges({ tech, heading }: { tech: string[]; heading?: string }) {
  if (tech.length === 0) return null;
  return (
    <div className="space-y-3">
      {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
      <ul className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t}>
            <Badge variant="secondary">{t}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
