import Container from "@/components/ui/Container";
import type { Project } from "@/lib/types";

export default function ReraInfo({ project }: { project: Project }) {
  const { rera } = project;
  if (!rera) return null;

  return (
    <section id="rera" className="bg-forest-800 py-14 text-cream">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center [&>*]:min-w-0">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              RERA
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/75">
              {rera.authority}
            </p>
            <a
              href={rera.authorityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-gold-300 underline underline-offset-4 hover:text-gold-400"
            >
              Verify on the official RERA website
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="rounded-2xl border border-cream/15 bg-forest-900/40 p-6">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.16em] text-gold-300/80">
                  HARERA Registration No.
                </dt>
                <dd className="mt-1 font-medium text-cream [overflow-wrap:anywhere]">
                  {rera.registrationNo}
                </dd>
              </div>
              {rera.registrationDate ? (
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-gold-300/80">
                    Registration Date
                  </dt>
                  <dd className="mt-1 text-cream">{rera.registrationDate}</dd>
                </div>
              ) : null}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-cream/55">
              D&amp;K Estates is the property advisor for this project and is not
              the promoter/developer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
