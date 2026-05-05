"use client";

import { useRef } from "react";
import ChatWindow, { type ChatWindowHandle } from "./ChatWindow";
import SectionLabel from "./SectionLabel";

const SUGGESTIONS = [
  "What's the hardest thing you've shipped?",
  "How do you approach a new project?",
  "Tell me about Communications Coach",
];

export default function Demo() {
  const chatRef = useRef<ChatWindowHandle>(null);

  const handleChip = (prompt: string) => {
    chatRef.current?.submitPrompt(prompt);
  };

  return (
    <section id="demo" className="border-t border-line w-full">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-28">
        <SectionLabel
          number="02"
          title="Live Demo"
          subtitle="Built with this site"
        />

        <div className="grid grid-cols-12 gap-6 md:gap-12 mt-10 md:mt-16">
          <div className="col-span-12 lg:col-span-5 flex flex-col">
            <h2 className="font-display text-4xl md:text-6xl leading-[0.95] tracking-tight text-ink">
              Talk to{" "}
              <em className="italic text-accent font-light">Spencer</em>
              <span className="text-accent">.</span>
            </h2>

            <p className="mt-6 md:mt-8 text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
              An agent I built, grounded in my resume, projects, and how I think
              about AI implementation. Ask it anything &mdash; about my work,
              the way I approach a problem, or what I&rsquo;m looking for next.
            </p>

            <p className="mt-6 text-ink-soft/80 text-sm leading-relaxed max-w-xl">
              The fact that you&rsquo;re reading this on a portfolio site is the
              point: this is the kind of thing I build for clients, just pointed
              at myself.
            </p>

            <div className="mt-8 md:mt-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft mb-3">
                Try one
              </p>
              <ul className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => handleChip(s)}
                      className="group border border-line bg-card text-ink px-3.5 py-2 text-xs font-mono hover:border-accent hover:text-accent transition-colors"
                    >
                      <span className="text-ink-soft group-hover:text-accent mr-1">
                        →
                      </span>
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ChatWindow handleRef={chatRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
