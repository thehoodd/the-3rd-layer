import type { MetadataRoute } from "next";
import { SITE_NAME, DESCRIPTION, SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "T3L",
    description: DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      { src: "/logo3.png", sizes: "any", type: "image/png" },
      {
        src: `${SITE_URL}/image/T3L_logo_8K_transparent.png`,
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}