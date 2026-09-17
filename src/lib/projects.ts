import type { Project } from "@/lib/types";
import { walSerenia92 } from "@/data/projects/wal-serenia-92";

/**
 * Project registry.
 *
 * To add a new project: create a data file in `src/data/projects/` and add it to
 * this array. The homepage Featured Property, the `/projects/[slug]` template,
 * and the sitemap all read from here — no page code needs to change.
 */
export const PROJECTS: Project[] = [walSerenia92];

export function getAllProjects(): Project[] {
  return PROJECTS;
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

/** The single project surfaced on the homepage. Falls back to the first project. */
export function getFeaturedProject(): Project | undefined {
  return PROJECTS.find((p) => p.featured) ?? PROJECTS[0];
}
