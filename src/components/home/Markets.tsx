import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const markets = [
  {
    name: "Gurugram",
    note: "Our core market and home ground.",
    primary: true,
  },
  { name: "NCR", note: "Wider National Capital Region." },
  { name: "Haryana", note: "Select opportunities across the state." },
  { name: "Chandigarh", note: "Growing reach in the tricity." },
];

export default function Markets() {
  return (
    <section
      id="markets"
      className="bg-cream-dark py-[var(--spacing-section)]"
    >
      <Container>
        <SectionHeading
          eyebrow="Location / Markets"
          title="Local Understanding. Growing Reach."
          intro="Gurugram remains at the centre of what we do, with a widening reach across the region."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {markets.map((m) => (
            <div
              key={m.name}
              className={`flex flex-col justify-between rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
                m.primary
                  ? "bg-forest-800 text-cream md:col-span-1 md:row-span-1"
                  : "border border-forest-800/10 bg-white/60 text-forest-900"
              }`}
            >
              <div>
                <h3
                  className={`font-serif text-2xl ${
                    m.primary ? "text-cream" : "text-forest-900"
                  }`}
                >
                  {m.name}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    m.primary ? "text-cream/75" : "text-ink-soft"
                  }`}
                >
                  {m.note}
                </p>
              </div>
              {m.primary && (
                <span className="mt-6 inline-block w-fit rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-forest-900">
                  Core Market
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
