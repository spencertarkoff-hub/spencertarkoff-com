import type { ReactNode } from "react";
import SectionLabel from "./SectionLabel";

type Item = {
  number: string;
  title: ReactNode;
  description: string;
  tag: string;
  year: string;
};

const ITEMS: Item[] = [
  {
    number: "01",
    title: "Communications Coach",
    description:
      "Agentic analytics tool evaluating patient-clinician calls. Project-managed and engineered end-to-end.",
    tag: "Agent · Production",
    year: "Summer '25",
  },
  {
    number: "02",
    title: (
      <>
        Business Process
        <wbr /> Improvement Agent
      </>
    ),
    description:
      "An AI assistant that guides managers through process-improvement lifecycles — producing project plans, process maps, and implementation roadmaps. Built with Glean + Claude.",
    tag: "Agent · Iterating",
    year: "'25 — Now",
  },
  {
    number: "03",
    title: "Program Intake Website",
    description:
      "Intake web app for applicants to an internal program at a Fortune 500 tech client. Designed, built, and handed off with Claude Code.",
    tag: "Web · Pending launch",
    year: "'26",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-line w-full">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 pt-16 md:pt-28">
        <SectionLabel
          number="04"
          title="Selected Work"
          subtitle="2024 — 2026"
        />
      </div>

      <ul className="max-w-[1400px] mx-auto mt-10 md:mt-16 border-t border-line">
        {ITEMS.map((item) => (
          <li key={item.number}>
            <div className="work-row grid grid-cols-12 gap-4 md:gap-6 items-start px-5 md:px-10 py-8 md:py-10 border-b border-line">
              <span className="col-span-2 md:col-span-1 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft mt-2">
                {item.number}
              </span>

              <h3 className="work-title col-span-10 md:col-span-5 font-display font-light text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                {item.title}
              </h3>

              <p className="col-span-12 md:col-span-4 md:col-start-7 text-ink-soft text-sm md:text-base leading-relaxed mt-2 md:mt-3">
                {item.description}
              </p>

              <div className="col-span-10 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft md:text-right mt-2 md:mt-3 space-y-1">
                <div className="text-ink">{item.tag}</div>
                <div>{item.year}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
