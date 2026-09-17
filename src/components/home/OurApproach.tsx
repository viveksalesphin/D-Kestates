import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Understand Your Requirement",
    body: "Self-use, investment, land or commercial — we start with why you're buying.",
  },
  {
    title: "Identify Relevant Properties",
    body: "We shortlist options that genuinely fit, not everything that's available.",
  },
  {
    title: "Evaluate Options",
    body: "Pricing, location, configuration and trade-offs, compared clearly.",
  },
  {
    title: "Site Visit",
    body: "See the property in person, with the right questions already prepared.",
  },
  {
    title: "Decision & Transaction Support",
    body: "Support through the decision and paperwork, at your pace.",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="bg-cream py-[var(--spacing-section)]">
      <Container>
        <SectionHeading
          eyebrow="Our Approach"
          title="We Don't Just Show Properties."
          intro="The objective isn't to push inventory. It's to understand whether you're buying for self-use, investment, land or a commercial need — and then find what makes sense for that."
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3 md:block">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/50 font-serif text-base text-gold-600">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent md:absolute md:left-12 md:top-5 md:block md:w-[calc(100%-3rem)]"
                  />
                )}
              </div>
              <h3 className="mt-4 font-serif text-base text-forest-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
