import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { getAllProjectSlugs } from "@/lib/projects";

// Required for `output: export` — evaluate at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    }),
  );

  return [...staticRoutes, ...projectRoutes];
}
