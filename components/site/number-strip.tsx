import type { Project } from "@/content/schema";

/** The "Content packs · 122" row of headline figures. */
export function NumberStrip({ numbers }: { numbers: Project["numbers"] }) {
  if (numbers.length === 0) return null;
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {numbers.map((n) => (
        <div key={n.label} className="rounded-lg border bg-card p-4 text-center">
          <dd className="text-2xl font-bold bg-gradient-to-b from-orange-300 to-orange-900 bg-clip-text text-transparent">
            {n.value}
          </dd>
          <dt className="text-sm text-muted-foreground">{n.label}</dt>
        </div>
      ))}
    </dl>
  );
}
