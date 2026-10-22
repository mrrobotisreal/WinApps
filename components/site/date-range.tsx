import { site } from "@/content/site";
import { formatDateRange } from "@/lib/prose";

export function DateRange({ start, end }: { start: string; end: string | null }) {
  return <span>{formatDateRange(start, end, site.copy.labels.present)}</span>;
}
