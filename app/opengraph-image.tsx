import { ImageResponse } from "next/og";

export const alt = "Motiff - Preview-first interface pattern catalog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#f5f5f5",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 15%, rgba(17,17,17,0.12), transparent 34%), radial-gradient(circle at 85% 80%, rgba(17,17,17,0.08), transparent 30%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -42,
            top: -54,
            width: 160,
            height: 520,
            transform: "rotate(-24deg)",
            opacity: 0.2,
            borderLeft: "10px solid #111",
            borderRight: "10px solid #111",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "72px 72px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: -1.2,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ display: "flex", gap: 3 }}>
                <div style={{ width: 10, height: 10, background: "#111", borderRadius: 3 }} />
                <div style={{ width: 10, height: 10, background: "#111", borderRadius: 3, opacity: 0.88 }} />
              </div>
              <div style={{ display: "flex", gap: 3 }}>
                <div style={{ width: 10, height: 10, background: "#111", borderRadius: 3, opacity: 0.88 }} />
                <div style={{ width: 10, height: 10, background: "#111", borderRadius: 3, opacity: 0.6 }} />
              </div>
            </div>
            <span>motiff</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 820 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 92,
                lineHeight: 0.92,
                fontWeight: 800,
                letterSpacing: -4,
              }}
            >
              Patterns to
              <br />
              shape the screen
            </div>
            <div
              style={{
                fontSize: 32,
                lineHeight: 1.35,
                color: "#5f5f5f",
                maxWidth: 760,
              }}
            >
              Preview-first interface references for designers and frontend teams.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 24,
              color: "#3f3f3f",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                border: "1px solid #d0d0d0",
                borderRadius: 14,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              category-first catalog
            </div>
            <div
              style={{
                border: "1px solid #d0d0d0",
                borderRadius: 14,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.8)",
              }}
            >
              block previews + code
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
