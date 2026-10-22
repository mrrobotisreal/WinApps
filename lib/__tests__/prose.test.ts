import { describe, expect, it } from "vitest";
import { formatDateRange, formatYearMonth, tokenizeProse } from "@/lib/prose";

describe("tokenizeProse", () => {
  it("returns plain text as one token", () => {
    expect(tokenizeProse("Hello world.")).toEqual([{ kind: "text", value: "Hello world." }]);
  });

  it("splits bold and code", () => {
    expect(tokenizeProse("Use **Go** and `ffmpeg` here.")).toEqual([
      { kind: "text", value: "Use " },
      { kind: "bold", value: "Go" },
      { kind: "text", value: " and " },
      { kind: "code", value: "ffmpeg" },
      { kind: "text", value: " here." },
    ]);
  });

  it("leaves unmatched markers as literal text", () => {
    expect(tokenizeProse("2 * 3 and a ` tick")).toEqual([{ kind: "text", value: "2 * 3 and a ` tick" }]);
  });

  it("keeps asterisks inside code literal", () => {
    expect(tokenizeProse("`a*b`")).toEqual([{ kind: "code", value: "a*b" }]);
  });
});

describe("dates", () => {
  it("formats YYYY-MM", () => {
    expect(formatYearMonth("2025-08")).toBe("Aug 2025");
    expect(formatYearMonth("2020-01")).toBe("Jan 2020");
  });

  it("formats ranges with a present label", () => {
    expect(formatDateRange("2025-08", null, "Present")).toBe("Aug 2025 – Present");
    expect(formatDateRange("2025-05", "2026-05", "Present")).toBe("May 2025 – May 2026");
    expect(formatDateRange("2025-05", "2025-05", "Present")).toBe("May 2025");
  });
});
