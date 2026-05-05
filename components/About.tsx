import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="border-t border-line w-full">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-3">
            <SectionLabel
              number="02"
              title="About"
              subtitle="A brief introduction"
            />
          </div>

          <div className="col-span-12 md:col-start-4 md:col-span-8 mt-10 md:mt-0 space-y-6 text-ink-soft text-base md:text-lg leading-relaxed max-w-3xl">
            <p>
              I grew up in Orinda, California &mdash; a{" "}
              <strong className="font-medium text-ink">Bay Area kid</strong>{" "}
              with a mom (Janet) who&rsquo;s as curious about AI as I am, a dad
              (Ken) I&rsquo;ve watched every Warriors/Niners/Giants game with,
              and a sister (Claire) who&rsquo;s still better at meeting new
              people than I am. I went to UW&ndash;Madison for a finance
              degree, mostly because nothing else in the business school jumped
              out and I liked that the school took sports seriously. I&rsquo;d
              briefly thought I might work in sports. I co-hosted a weekly NFL
              talk show on WSUM 91.7 for three years. Our main listeners were
              my parents, my aunt and uncle, and my friends&rsquo; little
              cousins.
            </p>
            <p>
              I took an AI consulting role at{" "}
              <strong className="font-medium text-ink">
                Private Health Management
              </strong>{" "}
              the summer before I started at Protiviti. They had a problem
              monitoring the quality of patient-clinician calls, and I told
              them I could try. I had no engineering background &mdash; I
              opened ChatGPT, ran stakeholder interviews with the clinical
              team, and figured it out by building. I hit the instruction
              character limit on custom GPTs pretty quickly and worked around
              it by offloading context into JSON files the agent could
              reference. The tool &mdash; Communications Coach &mdash; shipped,
              and it&rsquo;s still running in their operations.
            </p>
            <p>
              I&rsquo;m now embedded with a{" "}
              <strong className="font-medium text-ink">
                Fortune 500 hospitality tech client
              </strong>
              , building a business process improvement agent for Protiviti
              &mdash; it walks an employee through the full five-stage
              framework and generates the deliverables along the way. Built
              mostly with Claude and Claude Code. On top of that, I help lead
              Protiviti&rsquo;s AI training &mdash; both inside the firm and
              out at client companies with senior leaders.
            </p>
            <p>
              The honest version of what I do is that I sit with people until I
              understand their workflow, figure out what needs to exist, and
              then use Claude Code to build it. The tools have gotten good
              enough that{" "}
              <strong className="font-medium text-ink">
                the typing isn&rsquo;t the skill
              </strong>{" "}
              &mdash; knowing what should exist is.
            </p>
            <p>
              Outside work: ten years of water polo and swimming growing up,
              six years coaching swimming with{" "}
              <strong className="font-medium text-ink">
                Special Olympics
              </strong>{" "}
              (Claire was already involved), pickup basketball whenever Chicago
              cooperates, runs on the lakefront when the weather is nice.
              Conversational Spanish. Big movie guy &mdash; Nolan apologist,
              sucker for a good heist. My family&rsquo;s dog is named Dorothy.
              First thing I do when I visit home is give her a nice belly rub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
