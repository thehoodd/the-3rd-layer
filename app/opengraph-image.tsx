import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE, DESCRIPTION, SITE_URL } from "@/lib/seo";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "THE THREE LAYERS — Web Development, E-Commerce & Design Studio in Surat, India";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: 72,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#DE3D1C",
              color: "#0A0A0A",
              fontSize: 28,
              fontWeight: 800,
              lineHeight: 1,
              paddingTop: 2,
            }}
          >
            3
          </div>
          <div
            style={{
              color: "#F3F0E9",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              color: "#DE3D1C",
              fontSize: 34,
              fontWeight: 700,
              letterSpacing: 6,
            }}
          >
            {SITE_TAGLINE}
          </div>
          <div
            style={{
              color: "#F3F0E9",
              fontSize: 88,
              fontWeight: 800,
              letterSpacing: 1,
              lineHeight: 1.05,
              maxWidth: 960,
            }}
          >
            WEB DEVELOPMENT E-COMMERCE &amp; DESIGN
          </div>
          <div
            style={{
              color: "#F3F0E9",
              opacity: 0.75,
              fontSize: 30,
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: 980,
            }}
          >
            {DESCRIPTION}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              color: "#F3F0E9",
              opacity: 0.6,
              fontSize: 26,
              letterSpacing: 2,
            }}
          >
            SURAT, GUJARAT · INDIA — SERVING CLIENTS WORLDWIDE
          </div>
          <div style={{ color: "#DE3D1C", fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>
            {SITE_URL.replace("https://", "").replace("www.", "")}
          </div>
        </div>
      </div>
    ),
    size
  );
}