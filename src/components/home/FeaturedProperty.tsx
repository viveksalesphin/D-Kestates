import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SmartImage from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/lib/types";

export default function FeaturedProperty({ project }: { project: Project }) {
  const href = `/projects/${project.slug}`;

  const facts = [
    { label: "Configuration", value: project.configurationSummary },
    { label: "Sizes", value: project.sizesSummary },
    { label: "Location", value: project.location },
    { label: "Type", value: "Wellness-focused residential" },
  ];

  return (
    <section id="featured" className="bg-cream-dark py-[var(--spacing-section)]">
      <Container>
        <SectionHeading
          eyebrow="Featured Property"
          title={project.projectName}
          intro={project.shortDescription}
        />

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <SmartImage
              image={project.hero}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <span className="absolute left-4 top-4 rounded-full bg-forest-900/85 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-gold-300 backdrop-blur">
              {project.status}
            </span>
          </div>

          <div>
            <p className="font-serif text-2xl text-forest-900">
              {project.positioning}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{project.location}</p>

            {project.pricing.startingFrom ? (
              <p className="mt-5 text-lg font-medium text-forest-800">
                {project.pricing.startingFrom}
              </p>
            ) : null}

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-gold-600">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-forest-900">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={href} variant="primary" size="lg">
                Explore Serenia 92
              </ButtonLink>
              <ButtonLink href={`${href}#enquire`} variant="secondary" size="lg">
                Get Price List
              </ButtonLink>
            </div>

            <div className="mt-7 space-y-1 rounded-xl border border-forest-800/10 bg-white/50 p-4 text-xs leading-relaxed text-ink-soft">
              <p>
                <span className="font-semibold text-forest-900">Developer:</span>{" "}
                {project.developer}
              </p>
              <p>
                <span className="font-semibold text-forest-900">
                  Property advisory &amp; enquiries:
                </span>{" "}
                {project.advisor}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
