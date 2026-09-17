import type { NextConfig } from "next";

// Standard Next.js (Node) app — deployed on Hostinger as a Node.js application
// (npm run build → npm start), the same way as the Dolphin CRM site. No static
// export: pages are prerendered and served by the Node server, and next/image
// optimization is available at runtime.
const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
