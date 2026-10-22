import { describe, expect, it } from "vitest";
import { site } from "@/content/site";

/** Every string value reachable from `value`, with its JSON path. */
function strings(value: unknown, path = "$"): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => strings(v, `${path}.${k}`));
  }
  return [];
}

const modules: Record<string, unknown> = { site };

describe("content modules", () => {
  it("contain no unresolved [VERIFY markers", () => {
    for (const [name, mod] of Object.entries(modules)) {
      const hits = strings(mod).filter(([, s]) => s.includes("[VERIFY"));
      expect(hits, name).toEqual([]);
    }
  });
});

describe("site", () => {
  it("uses the www canonical domain", () => {
    expect(site.baseUrl).toBe("https://www.winapps.io");
  });
});
