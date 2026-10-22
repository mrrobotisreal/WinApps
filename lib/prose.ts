/**
 * Markdown-lite for content prose: only **bold** and `code`. Anything else is
 * literal text. Pure, so it's unit-testable and shared by JSX and markdown export.
 */
export type ProseToken =
  | { kind: "text"; value: string }
  | { kind: "bold"; value: string }
  | { kind: "code"; value: string };

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`)/g;

export function tokenizeProse(input: string): ProseToken[] {
  const tokens: ProseToken[] = [];
  for (const part of input.split(TOKEN)) {
    if (!part) continue;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      tokens.push({ kind: "bold", value: part.slice(2, -2) });
    } else if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      tokens.push({ kind: "code", value: part.slice(1, -1) });
    } else {
      tokens.push({ kind: "text", value: part });
    }
  }
  return tokens;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2025-08" → "Aug 2025". */
export function formatYearMonth(value: string): string {
  const [year, month] = value.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

/** "2025-08", null → "Aug 2025 – Present"; equal start and end collapse to one date. */
export function formatDateRange(start: string, end: string | null, presentLabel: string): string {
  if (end === start) return formatYearMonth(start);
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : presentLabel}`;
}
