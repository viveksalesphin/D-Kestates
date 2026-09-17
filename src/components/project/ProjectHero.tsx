"use client";

import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { waMeLink } from "@/lib/config";
import { track } from "@/lib/tracking";
import type { Project } from "@/lib/types";

export default function ProjectHero({ project }: { project: Project }) {
  const scheduleMsg = `Hi D&K Estates, I'd like to schedule a site visit for ${project.projectName}.`;

  return (
    <section className="relative bg-forest-900 pt-16 text-cream md:pt-20">
      <Container className="grid gap-8 py-12 md:grid-cols-2 md:items-center md:py-16">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3">
            <span className="dk-rule" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
              {project.status} · {project.city}
            </span>
          </div>

          <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            {project.projectName}
          </h1>
          {project.positioning ? (
            <p className="mt-2 font-serif text-xl text-gold-300">
              {project.positioning}
            </p>
          ) : null}
          <p className="mt-3 text-sm text-cream/70">{project.location}</p>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold-300/80">
                Configuration
              </p>
              <p className="mt-1 text-sm text-cream">
                {project.configurationSummary}
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-gold-300/80">
                Sizes
              </p>
              <p className="mt-1 text-sm text-cream">{project.sizesSummary}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#enquire" variant="primary" size="lg">
              Get Price List &amp; Brochure
            </ButtonLink>
            <ButtonLink
              href={waMeLink(scheduleMsg)}
              variant="onDark"
              size="lg"
              external
              onClick={() =>
                track("Schedule", { content_name: project.projectName })
              }
            >
              Schedule Site Visit
            </ButtonLink>
          </div>

          <p className="mt-6 text-xs text-cream/55">
            Developer: {project.developer} · Advisory &amp; enquiries:{" "}
            {project.advisor}
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <SmartImage
              image={project.hero}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {project.hero.caption ? (
            <p className="mt-2 text-right text-[11px] text-cream/50">
              {project.hero.caption}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
