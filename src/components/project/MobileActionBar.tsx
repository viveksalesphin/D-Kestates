"use client";

import { telLink, waMeLink } from "@/lib/config";
import { track } from "@/lib/tracking";
import type { Project } from "@/lib/types";

/**
 * Sticky bottom action bar for mobile (Call · WhatsApp · Get Price).
 * Hidden on md+ where the floating WhatsApp button and inline CTAs take over.
 * A spacer is added on the page so it never covers the footer content.
 */
export default function MobileActionBar({ project }: { project: Project }) {
  const waMsg = `Hi D&K Estates, I'm interested in ${project.projectName}. Please share details.`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-800/10 bg-cream/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={telLink()}
          onClick={() => track("Contact", { method: "call", surface: "bar" })}
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-forest-800"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
          </svg>
          Call
        </a>

        <a
          href={waMeLink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            track("Contact", { method: "whatsapp", surface: "bar" })
          }
          className="flex flex-col items-center gap-1 border-x border-forest-800/10 py-3 text-xs font-medium text-forest-800"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1l-.9 1.2c-.2.2-.4.2-.6.1-1.1-.5-2-1-2.9-2.4-.2-.4 0-.4.2-.6l.4-.5c.1-.1.1-.3 0-.5l-.9-2.1c-.2-.6-.5-.5-.6-.5H8.5c-.2 0-.5.2-.7.4-.7.7-1 1.6-1 2.5.2 1 .6 2 1.3 3 .6 1 2.6 3.9 6.1 4.5.8.2 1.5.1 2-.1.6-.2 1.7-.7 2-1.4.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2" />
          </svg>
          WhatsApp
        </a>

        <a
          href="#enquire"
          className="flex flex-col items-center gap-1 bg-gold-500 py-3 text-xs font-semibold text-forest-900"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" />
            <path d="M14 2v6h6M9 13h6M9 17h6" />
          </svg>
          Get Price
        </a>
      </div>
    </div>
  );
}
