/**
 * Data model for a property/project.
 *
 * Adding a new project should be as simple as creating a new data file in
 * `src/data/projects/` that satisfies this `Project` type and registering it in
 * `src/lib/projects.ts`. The homepage Featured Property and the
 * `/projects/[slug]` template both read from this shape — no page code is
 * duplicated per project.
 */

export type PropertyType =
  | "Residential"
  | "Commercial"
  | "Plot / Land"
  | "Investment";

export interface ProjectConfiguration {
  /** e.g. "3 BHK" */
  label: string;
  /** e.g. "1,250 Sq. Ft." — display string, kept as text to preserve source formatting */
  size: string;
  /** Optional indicative base consideration, already formatted, e.g. "₹1,46,87,500" */
  indicativePrice?: string;
  /** Optional short note shown under the configuration */
  note?: string;
}

export interface ProjectPricing {
  /** Consumer-friendly "starting from" line, e.g. "Starting from approx. ₹1.47 Cr*" */
  startingFrom?: string;
  /** Reference/benchmark rate, e.g. "₹12,500 / sq. ft." */
  benchmarkRate?: string;
  /** Preferred/offer rate, e.g. "₹11,750 / sq. ft." */
  offerRate?: string;
  /** Label for the offer, e.g. "Founder's Edition (limited period)" */
  offerLabel?: string;
  /** Mandatory disclaimer text shown near pricing */
  disclaimer: string;
}

export interface ProjectAmenity {
  label: string;
  /** Optional lucide-style icon key handled by the AmenityGrid; falls back to a generic mark */
  icon?: string;
}

export interface ConnectivityItem {
  label: string;
  /** Only include a value if it comes from approved project material */
  value?: string;
}

export interface ProjectConnectivity {
  /** Free-form intro describing factual positioning */
  summary?: string;
  items: ConnectivityItem[];
  /** Shown when specific distances/times are omitted deliberately */
  note?: string;
}

export interface ProjectRera {
  registrationNo: string;
  /** Display string exactly as supplied in source material */
  registrationDate?: string;
  authority: string;
  /** Official authority website */
  authorityUrl: string;
}

export interface ProjectImage {
  /** Path under /public or an imported asset path */
  src: string;
  alt: string;
  /** Set true when the asset is a labelled placeholder / representational image */
  placeholder?: boolean;
  /** Optional caption, e.g. "Representative image" */
  caption?: string;
}

export type ProjectStatus =
  | "Featured"
  | "Now Enquiring"
  | "New Launch"
  | "Available";

export interface Project {
  slug: string;
  projectName: string;
  /** Longer positioning line, e.g. "Serenia Wellness Residences" */
  positioning?: string;
  developer: string;
  /** Advisor is always D&K Estates — kept explicit to avoid implying we are the developer */
  advisor: string;
  location: string;
  city: string;
  propertyType: PropertyType;
  /** Headline configuration summary, e.g. "Premium 3 BHK Residences" */
  configurationSummary: string;
  configurations: ProjectConfiguration[];
  /** Human sizes summary for cards, e.g. "1,250 & 1,350 Sq. Ft." */
  sizesSummary: string;
  pricing: ProjectPricing;
  hero: ProjectImage;
  gallery: ProjectImage[];
  /** Short cards/teaser description */
  shortDescription: string;
  /** Longer paragraphs for the project page intro */
  description: string[];
  amenities: ProjectAmenity[];
  connectivity: ProjectConnectivity;
  rera?: ProjectRera;
  featured: boolean;
  status: ProjectStatus;
  /** General project-level disclaimer */
  disclaimer: string;
  leadFormHeading: string;
  leadFormSubtext: string;
  seo: {
    title: string;
    description: string;
  };
}
