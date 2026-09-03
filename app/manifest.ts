import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  const basePath = process.env.PAGES_BASE_PATH ?? "";

  return {
    name: "Shipshape Accessibility Checklist",
    short_name: "Shipshape",
    description: "A practical accessibility release checklist for frontend teams.",
    start_url: `${basePath}/`,
    scope: `${basePath}/`,
    display: "standalone",
    background_color: "#f4f0e6",
    theme_color: "#f4f0e6",
    icons: [{ src: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}

