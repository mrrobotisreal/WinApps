import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** 1200×630 share card in the site's dark orange/purple look; system fonts only. */
export function ogCard({ eyebrow, title, subtitle, footer }: { eyebrow: string; title: string; subtitle: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1c1026 60%, #2a1405 100%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#fdba74", letterSpacing: 2 }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 34, color: "#d4d4d8", lineHeight: 1.35 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#c4b5fd" }}>{footer}</div>
      </div>
    ),
    ogSize
  );
}
