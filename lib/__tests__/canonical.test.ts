import { describe, expect, it } from "vitest";
import { generateCanonicalUrl } from "@/lib/canonical";

describe("generateCanonicalUrl", () => {
  it("returns the bare domain for the home page", () => {
    expect(generateCanonicalUrl()).toBe("https://www.winapps.io");
    expect(generateCanonicalUrl("")).toBe("https://www.winapps.io");
    expect(generateCanonicalUrl("/")).toBe("https://www.winapps.io");
  });

  it("joins a path onto the www domain", () => {
    expect(generateCanonicalUrl("projects/voizy")).toBe(
      "https://www.winapps.io/projects/voizy"
    );
  });

  it("strips a leading slash", () => {
    expect(generateCanonicalUrl("/portfolio/people-inc")).toBe(
      "https://www.winapps.io/portfolio/people-inc"
    );
  });
});
