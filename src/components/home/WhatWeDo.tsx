import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    title: "Residential Properties",
    body: "Apartments, floors and homes matched to how you actually live — and to your budget.",
    icon: (
      <path d="M3 11.5 12 4l9 7.5M5 10v10h14V10M9.5 20v-6h5v6" />
    ),
  },
  {
    title: "Commercial Spaces",
    body: "Offices, retail and commercial assets evaluated for use, footfall and long-term value.",
    icon: (
      <path d="M4 21V5l8-2 8 2v16M9 9h.01M9 13h.01M15 9h.01M15 13h.01M9 21v-4h6v4" />
    ),
  },
  {
    title: "Plots & Land",
    body: "Residential and investment plots reviewed for location, approvals and growth potential.",
    icon: (
      <path d="M3 20h18M5 20V9l7-4 7 4v11M9 20v-5h6v5" />
    ),
  },
  {
    title: "Property Investment Advisory",
    body: "Guidance grounded in the local market — so a purchase fits your goals, not just the listing.",
    icon: (
      <path d="M4 19V5m0 14h16M8 15l3-4 3 3 4-6" />
    ),
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-cream py-[var(--spacing-section)]">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="More Than Properties. The Right Opportunities."
          intro="We help clients understand which property genuinely fits their requirement — across four core areas."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-forest-800/10 bg-white/60 p-6 transition-all duration-300 hover:border-gold-500/40 hover:shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-800/5 text-forest-800 transition-colors group-hover:bg-forest-800 group-hover:text-gold-300">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {s.icon}
                </svg>
              </span>
              <h3 className="mt-5 font-serif text-lg text-forest-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
