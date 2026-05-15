"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import SectionLabel from "./SectionLabel";

type Photo = {
  src: string;
  context: string;
  caption: string;
  linkedInUrl?: string;
};

const photos: Photo[] = [
  {
    src: "https://uxyzqo7ssx7lmh7m.public.blob.vercel-storage.com/field-1-protiviti-ai-training.jpg",
    context: "Protiviti Chicago · AI training · 2026",
    caption: "Talking with my hands, as usual.",
  },
  {
    src: "https://uxyzqo7ssx7lmh7m.public.blob.vercel-storage.com/field-2-fei-panel.jpg",
    context: "FEI panel · Generative AI in Finance · 2026",
    caption: "My game face.",
    linkedInUrl:
      "https://www.linkedin.com/posts/gordonbraun1_fei-feitwincities-finance-activity-7435055471725555712-yDWf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3V-vIBAAr0Rf9F_KzGsSbX0NPwK9aKRkc",
  },
  {
    src: "/images/demo-robert-half.jpg",
    context: "Robert Half × Protiviti · Copilot event · 2025",
    caption: "Demo mode.",
    linkedInUrl:
      "https://www.linkedin.com/posts/nick-mckeehan-a120851_robert-half-and-protiviti-hosted-a-copilot-activity-7458519336748625920-NPKF?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD3V-vIBAAr0Rf9F_KzGsSbX0NPwK9aKRkc",
  },
  {
    src: "https://uxyzqo7ssx7lmh7m.public.blob.vercel-storage.com/field-3-switzerland.jpg",
    context: "Interlaken, Switzerland · 2024",
    caption: "On the way to a meeting.",
  },
];

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="15 6 9 12 15 18" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#0A66C2"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function InField() {
  const [index, setIndex] = useState(0);
  const total = photos.length;

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total],
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  };

  const active = photos[index];

  return (
    <section id="in-field" className="border-t border-line w-full">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-28">
        <SectionLabel number="03" title="In the field" />

        <div
          className="relative mt-10 md:mt-16 mx-auto max-w-[1100px]"
          role="region"
          aria-roledescription="carousel"
          aria-label="In the field photos"
          onKeyDown={onKeyDown}
        >
          <div className="relative aspect-video rounded-md overflow-hidden border border-line-strong bg-bg-2">
            {photos.map((p, i) => (
              <img
                key={p.src}
                src={p.src}
                alt={p.caption}
                aria-hidden={i !== index}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="absolute top-1/2 -translate-y-1/2 left-3 md:-left-14 w-10 h-10 rounded-full bg-bg-2 border border-line-strong text-accent flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="absolute top-1/2 -translate-y-1/2 right-3 md:-right-14 w-10 h-10 rounded-full bg-bg-2 border border-line-strong text-accent flex items-center justify-center hover:bg-card transition-colors"
          >
            <ChevronRight />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {photos.map((p, i) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-ink-dim hover:bg-ink-soft"
                }`}
              />
            ))}
          </div>

          <div className="mt-6 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
              {active.context}
            </div>
            <p className="mt-2 text-base md:text-[17px] text-ink italic">
              {active.caption}
            </p>
            {active.linkedInUrl && (
              <a
                href={active.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-white/40 hover:text-white/70 transition-colors mt-1"
              >
                <LinkedInIcon />
                View post
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
