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
          alignItems: "center",
          justifyContent: "center",
          background: "#F3F0E9",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            width: 1080,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 300,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "#0E0E0E",
                fontSize: 350,
                fontWeight: 900,
                lineHeight: 0.72,
                letterSpacing: -24,
                transform: "scaleY(0.9)",
                fontFamily: "Arial Black, Arial, sans-serif",
              }}
            >
              T3L
            </div>

            <div
              style={{
                position: "absolute",
                right: 168,
                top: 42,
                width: 150,
                height: 116,
                background: "#DE3D1C",
                transform: "skewX(-30deg)",
                borderRadius: 6,
                opacity: 1,
              }}
            />
          </div>

          <div
            style={{
              color: "#0E0E0E",
              fontSize: 68,
              fontWeight: 700,
              letterSpacing: 4,
              lineHeight: 1.1,
              textTransform: "uppercase",
              fontFamily: "Arial, Helvetica, sans-serif",
              marginTop: 12,
              marginBottom: 20,
            }}
          >
            {"THE THREE LAYERS"}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              color: "#0E0E0E",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            <span style={{ opacity: 0.96 }}>Design</span>
            <span
              style={{
                width: 12,
                height: 12,
                display: "block",
                borderRadius: 999,
                background: "#DE3D1C",
              }}
            />
            <span style={{ opacity: 0.96 }}>Develop</span>
            <span
              style={{
                width: 12,
                height: 12,
                display: "block",
                borderRadius: 999,
                background: "#DE3D1C",
              }}
            />
            <span style={{ opacity: 0.96 }}>Deploy</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}