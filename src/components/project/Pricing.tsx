import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Disclaimer from "@/components/ui/Disclaimer";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/lib/types";

export default function Pricing({ project }: { project: Project }) {
  const { pricing } = project;

  return (
    <section id="pricing" className="bg-cream py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Pricing" title="Indicative Pricing" />

            {pricing.startingFrom ? (
              <p className="mt-6 font-serif text-3xl text-forest-900">
                {pricing.startingFrom}
              </p>
            ) : null}

            <dl className="mt-6 space-y-3">
              {pricing.benchmarkRate ? (
                <div className="flex items-center justify-between border-b border-forest-800/10 pb-3">
                  <dt className="text-sm text-ink-soft">Reference benchmark</dt>
                  <dd className="text-sm font-medium text-forest-900">
                    {pricing.benchmarkRate}
                  </dd>
                </div>
              ) : null}
              {pricing.offerRate ? (
                <div className="flex items-center justify-between border-b border-forest-800/10 pb-3">
                  <dt className="text-sm text-ink-soft">
                    {pricing.offerLabel ?? "Preferred price"}
                  </dt>
                  <dd className="text-sm font-medium text-gold-600">
                    {pricing.offerRate}
                  </dd>
                </div>
              ) : null}
            </dl>

            <ButtonLink
              href="#enquire"
              variant="primary"
              size="lg"
              className="mt-7"
            >
              Get Latest Cost Sheet
            </ButtonLink>
          </div>

          <div className="rounded-2xl border border-forest-800/10 bg-cream-dark p-6">
            <h3 className="font-serif text-base text-forest-900">
              Please note
            </h3>
            <Disclaimer className="mt-3">{pricing.disclaimer}</Disclaimer>
          </div>
        </div>
      </Container>
    </section>
  );
}
