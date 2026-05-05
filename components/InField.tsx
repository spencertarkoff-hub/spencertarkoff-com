"use client";

import { useCallback, useState, type KeyboardEvent } from "react";
import SectionLabel from "./SectionLabel";

const photos = [
  {
    src: "https://uxyzqo7ssx7lmh7m.public.blob.vercel-storage.com/field-1-protiviti-ai-training.jpg",
    context: "Protiviti Chicago · AI training · 2025",
    caption: "Talking with my hands, as usual.",
  },
  {
    src: "https://uxyzqo7ssx7lmh7m.public.blob.vercel-storage.com/field-2-fei-panel.jpg",
    context: "FEI panel · Generative AI in Finance · 2025",
    caption: "My game face.",
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
          </div>
        </div>
      </div>
    </section>
  );
}
