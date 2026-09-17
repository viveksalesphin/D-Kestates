import Container from "@/components/ui/Container";
import Disclaimer from "@/components/ui/Disclaimer";
import LeadForm from "./LeadForm";
import type { Project } from "@/lib/types";

export default function EnquirySection({ project }: { project: Project }) {
  return (
    <section id="enquire" className="scroll-mt-24 bg-cream-dark py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="dk-rule" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Enquire
              </span>
            </div>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-forest-900 sm:text-4xl">
              {project.leadFormHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              {project.leadFormSubtext}
            </p>

            <Disclaimer className="mt-8">{project.disclaimer}</Disclaimer>
          </div>

          <div className="rounded-2xl border border-forest-800/10 bg-cream p-6 shadow-sm sm:p-8">
            <LeadForm project={project} />
          </div>
        </div>
      </Container>
    </section>
  );
}
