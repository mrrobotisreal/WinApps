/** Public R2 buckets that serve site media (allow-listed in next.config.ts). */
export const R2_LEGACY = "https://pub-c0247ba91a4a415a9ff6d54583d7667c.r2.dev";
export const R2 = "https://pub-5e3f5f69f6bd4f2fb6bc741e03f34851.r2.dev";
export const R2_JOURNEY_IPAD = "https://pub-78793ece177d4113887533c21c99d3b4.r2.dev";
export const R2_VOIZY = "https://pub-2c90fb271b9b4f08bffffbf1179f9627.r2.dev";

/** 1500×300 banner image, the size every project and employer banner uses. */
export const banner = (src: string, name: string) => ({
  kind: "image" as const,
  src,
  alt: `${name} banner`,
  width: 1500,
  height: 300,
});

/** 96×96 logo, the size of the legacy R2 logos. */
export const logo96 = (src: string, name: string) => ({
  kind: "image" as const,
  src,
  alt: `${name} logo`,
  width: 96,
  height: 96,
});
