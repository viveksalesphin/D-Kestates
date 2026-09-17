"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Project } from "@/lib/types";

/** Minimal stroke-icon paths keyed by the icon names used in project data. */
const ICONS: Record<string, string> = {
  heart: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z",
  leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.18 2 8a7 7 0 0 1-7 7Zm0 0c0-4 1-8 6-11",
  flower:
    "M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-6a3 3 0 0 1 3 3c0 1.5-1 3-3 3s-3-1.5-3-3a3 3 0 0 1 3-3Zm0 20a3 3 0 0 1-3-3c0-1.5 1-3 3-3s3 1.5 3 3a3 3 0 0 1-3 3ZM2 12a3 3 0 0 1 3-3c1.5 0 3 1 3 3s-1.5 3-3 3a3 3 0 0 1-3-3Zm20 0a3 3 0 0 1-3 3c-1.5 0-3-1-3-3s1.5-3 3-3a3 3 0 0 1 3 3Z",
  trees:
    "M8 19v3M8 19a4 4 0 0 0 1.9-7.5A3 3 0 1 0 5 8.6 4 4 0 0 0 8 19Zm8 3v-4m0 0a3.5 3.5 0 1 0-2-6.4",
  waves:
    "M2 6c1.5 0 2 1 3.5 1S7 6 8.5 6 10 7 11.5 7 13 6 14.5 6 16 7 17.5 7 19 6 20.5 6 21 7 22 7M2 12c1.5 0 2 1 3.5 1S7 12 8.5 12 10 13 11.5 13 13 12 14.5 12 16 13 17.5 13 19 12 20.5 12 21 13 22 13M2 18c1.5 0 2 1 3.5 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1",
  wind: "M4 9h11a3 3 0 1 0-3-3M4 15h13a3 3 0 1 1-3 3M2 12h14",
  shield: "M12 2 4 5v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V5l-8-3Z",
  dumbbell:
    "M6 6v12M18 6v12M3 9v6M21 9v6M6 12h12",
  activity: "M22 12h-4l-3 9L9 3l-3 9H2",
  landmark: "M3 21h18M4 10h16M12 3 3 7h18l-9-4ZM6 10v8M10 10v8M14 10v8M18 10v8",
  footprints:
    "M4 16a2 2 0 0 1 4 0v1a2 2 0 1 1-4 0v-1Zm0-7a2 2 0 0 1 4 0c0 1.7-.5 2.5-.5 4H4.5C4.5 11.5 4 10.7 4 9Zm12 10a2 2 0 0 1 4 0v1a2 2 0 1 1-4 0v-1Zm0-7a2 2 0 0 1 4 0c0 1.7-.5 2.5-.5 4h-3C16.5 14.5 16 13.7 16 12Z",
};

function AmenityIcon({ name }: { name?: string }) {
  const d = name ? ICONS[name] : undefined;
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-800/5 text-forest-800">
      {d ? (
        <svg
          viewBox="0 0 24 24"
          width={18}
          height={18}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d={d} />
        </svg>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
      )}
    </span>
  );
}

const INITIAL_COUNT = 8;

export default function AmenityGrid({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = project.amenities.length > INITIAL_COUNT;
  const visible = expanded
    ? project.amenities
    : project.amenities.slice(0, INITIAL_COUNT);

  return (
    <section id="amenities" className="bg-cream-dark py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Amenities"
          title="Wellness, Built In"
          intro="A selection of the amenities planned at WAL Serenia 92."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((a) => (
            <li
              key={a.label}
              className="flex items-center gap-3 rounded-xl border border-forest-800/10 bg-white/60 p-4"
            >
              <AmenityIcon name={a.icon} />
              <span className="text-sm text-forest-900">{a.label}</span>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="rounded-full border border-forest-800/25 px-6 py-2.5 text-sm font-medium text-forest-800 transition-colors hover:bg-forest-800 hover:text-cream"
              aria-expanded={expanded}
            >
              {expanded
                ? "Show fewer amenities"
                : `View all amenities (${project.amenities.length})`}
            </button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
