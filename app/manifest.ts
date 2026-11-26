import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "Maryam Miraei | Frontend Developer",
  short_name: "Maryam Miraei Portfolio",
  description:
    "Maryam Miraei's personal portfolio showcasing frontend development skills and projects.",
  start_url: "/",
  display: "standalone",
  background_color: "#050505",
  theme_color: "#730606",
  orientation: "portrait",
  icons: [
    {
      src: "/icons/icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icons/icon-512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/icons/icon-512-maskable.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ],
});

export default manifest;
