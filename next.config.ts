import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static build → emits an `out/` folder of static HTML/CSS/JS,
  // suitable for Hostinger `public_html` (no Node server at runtime).
  output: "export",

  // Static export cannot use the on-demand Image Optimization server, so images
  // are served as-is. Assets are pre-compressed to WebP under /public/images.
  images: { unoptimized: true },

  // Emit `route/index.html` so Apache serves clean URLs like
  // /projects/wal-serenia-92/ without extra rewrites.
  trailingSlash: true,
};

export default nextConfig;
