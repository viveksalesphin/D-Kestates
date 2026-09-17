import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/types";

export default function ProjectIntro({ project }: { project: Project }) {
  const showcase = project.gallery[0];

  return (
    <section className="bg-cream py-16 md:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="The Project"
            title="A Home Built Around Wellness"
          />
          <div className="space-y-4">
            {project.description.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {para}
              </p>
            ))}
          </div>
        </div>

        {showcase && !showcase.placeholder ? (
          <figure className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(20,61,47,0.12)]">
            <Image
              src={showcase.src}
              alt={showcase.alt}
              width={1254}
              height={1254}
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-auto w-full"
            />
          </figure>
        ) : null}
      </Container>
    </section>
  );
}
