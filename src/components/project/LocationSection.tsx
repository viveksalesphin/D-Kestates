import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/types";

export default function LocationSection({ project }: { project: Project }) {
  const { connectivity } = project;

  return (
    <section id="location" className="bg-cream py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Location & Connectivity"
            title={project.location}
            intro={connectivity.summary}
          />

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {connectivity.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-xl border border-forest-800/10 bg-white/60 px-4 py-3.5"
                >
                  <span className="flex items-center gap-2.5 text-sm text-forest-900">
                    <span
                      aria-hidden
                      className="h-2 w-2 rounded-full bg-gold-500"
                    />
                    {item.label}
                  </span>
                  {item.value ? (
                    <span className="text-sm font-medium text-gold-600">
                      {item.value}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>

            {connectivity.note ? (
              <p className="mt-5 text-xs leading-relaxed text-ink-soft/80">
                {connectivity.note}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
