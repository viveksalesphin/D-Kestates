import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject } from "@/lib/projects";
import { SITE_URL, BRAND } from "@/lib/config";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectIntro from "@/components/project/ProjectIntro";
import Configurations from "@/components/project/Configurations";
import Pricing from "@/components/project/Pricing";
import AmenityGrid from "@/components/project/AmenityGrid";
import LocationSection from "@/components/project/LocationSection";
import ReraInfo from "@/components/project/ReraInfo";
import EnquirySection from "@/components/project/EnquirySection";
import MobileActionBar from "@/components/project/MobileActionBar";
import ViewContentTracker from "@/components/project/ViewContentTracker";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const url = `${SITE_URL}/projects/${project.slug}`;
  return {
    title: project.seo.title,
    description: project.seo.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "website",
      title: project.seo.title,
      description: project.seo.description,
      url,
      siteName: BRAND.name,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: project.projectName,
    description: project.shortDescription,
    url: `${SITE_URL}/projects/${project.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.city,
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    ...(project.rera
      ? { identifier: project.rera.registrationNo }
      : {}),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Developer",
        value: project.developer,
      },
      {
        "@type": "PropertyValue",
        name: "Property Advisor",
        value: project.advisor,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ViewContentTracker
        contentName={project.projectName}
        contentCategory={project.propertyType}
      />

      <ProjectHero project={project} />
      <ProjectIntro project={project} />
      <Configurations project={project} />
      <Pricing project={project} />
      <AmenityGrid project={project} />
      <LocationSection project={project} />
      <ReraInfo project={project} />
      <EnquirySection project={project} />

      {/* Spacer so the sticky mobile bar never covers footer content */}
      <div className="h-16 md:hidden" aria-hidden />
      <MobileActionBar project={project} />
    </>
  );
}
