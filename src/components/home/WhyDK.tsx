import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Local Market Understanding",
    body: "The founders are from Gurugram. We read the ground — sectors, roads, pricing and what's actually moving.",
  },
  {
    title: "Carefully Selected Opportunities",
    body: "We work with a few projects at a time, chosen deliberately — not an endless list of listings.",
  },
  {
    title: "Transparent Guidance",
    body: "Clear information on pricing, charges and trade-offs, so you can decide with your eyes open.",
  },
  {
    title: "Long-Term Relationships",
    body: "We'd rather earn a client for years than close a single deal. Advice first, transaction second.",
  },
];

export default function WhyDK() {
  return (
    <section id="why" className="bg-forest-800 py-[var(--spacing-section)] text-cream">
      <Container>
        <SectionHeading
          eyebrow="Why D&K Estates"
          title="Rooted Locally. Focused on What Matters."
          onDark
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <div key={r.title} className="bg-forest-800 p-7 sm:p-8">
              <span className="font-serif text-2xl text-gold-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl text-cream">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/75">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
