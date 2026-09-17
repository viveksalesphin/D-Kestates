import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/types";

export default function Configurations({ project }: { project: Project }) {
  return (
    <section id="configurations" className="bg-cream-dark py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Configurations"
          title="Choose Your Space"
          intro="Two premium 3 BHK options. Floor plans are shared on request with the latest cost sheet."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {project.configurations.map((c) => (
            <div
              key={`${c.label}-${c.size}`}
              className="rounded-2xl border border-forest-800/10 bg-white/70 p-7"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl text-forest-900">
                  {c.label}
                </h3>
                <span className="text-sm font-medium text-gold-600">
                  {c.size}
                </span>
              </div>
              {c.indicativePrice ? (
                <p className="mt-4 text-lg font-medium text-forest-800">
                  {c.indicativePrice}
                  <span className="ml-1 align-super text-xs text-ink-soft">
                    *
                  </span>
                </p>
              ) : null}
              {c.note ? (
                <p className="mt-1 text-xs text-ink-soft">{c.note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
