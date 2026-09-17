import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import BrandShowcase from "@/components/home/BrandShowcase";
import WhatWeDo from "@/components/home/WhatWeDo";
import FeaturedProperty from "@/components/home/FeaturedProperty";
import WhyDK from "@/components/home/WhyDK";
import OurApproach from "@/components/home/OurApproach";
import Markets from "@/components/home/Markets";
import ContactCTA from "@/components/home/ContactCTA";
import { getFeaturedProject } from "@/lib/projects";
import { BRAND, SITE_URL, CONTACT, MARKETS } from "@/lib/config";

export const metadata: Metadata = {
  title: "D&K Estates | Real Estate Advisory in Gurugram",
  description:
    "D&K Estates helps homebuyers and investors discover residential, commercial, land and investment property opportunities across Gurugram, NCR and Haryana.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedProject();

  // Structured data: a real estate agent / advisory business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: BRAND.name,
    url: SITE_URL,
    slogan: BRAND.tagline,
    description: BRAND.descriptionShort,
    email: CONTACT.email,
    areaServed: MARKETS.map((m) => ({ "@type": "Place", name: m })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <BrandShowcase />
      <WhatWeDo />
      {featured ? <FeaturedProperty project={featured} /> : null}
      <WhyDK />
      <OurApproach />
      <Markets />
      <ContactCTA />
    </>
  );
}
