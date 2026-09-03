import { ImageResponse } from "next/og";

export const alt = "Shipshape — Accessibility release checklist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "68px 76px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f0e6",
          color: "#17231d",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 27, background: "#17231d", color: "#d9ff58" }}>S</div>
          Shipshape
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 800, lineHeight: .92, letterSpacing: -5, textTransform: "uppercase" }}>
            <span>Ship interfaces</span>
            <span style={{ color: "#ff5c35" }}>everyone can use.</span>
          </div>
          <div style={{ width: 150, height: 150, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 75, border: "2px solid #17231d", background: "#d9ff58", fontSize: 58, fontWeight: 800 }}>AA</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 22, borderTop: "1px solid rgba(23,35,29,.35)", fontSize: 20 }}>
          <span>Accessibility release checklist</span>
          <span>15 practical checks</span>
        </div>
      </div>
    ),
    size,
  );
}

