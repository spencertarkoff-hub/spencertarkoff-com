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

          <div className="col-span-12 md:col-start-4 md:col-span-8 mt-10 md:mt-0 space-y-6 text-ink text-[16px] md:text-[17px] leading-[1.7] max-w-3xl">
            <p>
              I was born in San Francisco and grew up in Orinda, California.
              I&rsquo;m a Bay Area kid with a mom (Janet) who&rsquo;s as
              fanatical about AI as I am, a dad (Ken) with whom I&rsquo;ve
              watched every Warriors/Niners/Giants game, and a sister (Claire)
              who&rsquo;s such an extrovert she makes me look quiet.
            </p>
            <p>
              I went to UW&ndash;Madison and majored in finance, mostly because
              nothing else in the business school jumped out at me. I also
              liked that the school took sports seriously (even if our football
              results the last few years don&rsquo;t quite make the grade). I
              briefly thought I might work in sports and for three years,
              co-hosted a weekly NFL talk show on WSUM 91.7. Our main listeners
              were my parents, my aunt and uncle, and my friends&rsquo; little
              cousins.
            </p>
            <p>
              After college, I accepted an AI consulting role at{" "}
              <strong className="font-medium text-ink">
                Private Health Management
              </strong>
              . This was summer 2025, pre Claude Code and Codex, and before I
              was scheduled to start at{" "}
              <strong className="font-medium text-ink">Protiviti</strong>. PHM
              was having issues monitoring the quality of patient-clinician
              calls which in turn caused business disruptions. I told them I
              thought I could build an AI agent to identify problem
              interactions sooner and provide more time for mitigation.
            </p>
            <p>
              I had no engineering background. I taught myself ChatGPT, ran
              stakeholder interviews with the clinical team, and figured it
              out by building. I hit the instruction character limit on custom
              GPTs pretty quickly and worked around it by offloading context
              into JSON files the agent could reference. The tool,
              Communications Coach, shipped and is still running in
              PHM&rsquo;s operations.
            </p>
            <p>
              I&rsquo;m now embedded with a{" "}
              <strong className="font-medium text-ink">
                Fortune 500 hospitality tech client
              </strong>
              , building a business process improvement agent that guides
              employees through Protiviti&rsquo;s five-stage framework and
              generates deliverables along the way. I am building it mostly
              with Claude and Claude Code.
            </p>
            <p>
              In addition, I help lead Protiviti&rsquo;s AI training programs,
              making 45-minute to two-hour presentations to groups inside the
              firm, at client companies, and at external CFO and senior
              management forums.
            </p>
            <p>
              What I think I am really good at is sitting with people until I
              understand their workflow, figuring out what they actually need
              through iterative dialogue, and then using AI to build the tools
              to address their needs. I check in with management regularly to
              make sure I stay on track with their expectations and if there
              are any changes of which I should be aware. AI tools have gotten
              so powerful that coding itself does not seem to be the most
              critical skill in which to acquire proficiency. Rather, the most
              important factor is understanding what the business needs are
              and what the product should do and be.
            </p>
            <p>
              Outside of work and school, I spent ten years playing competitive
              water polo on a national level, six years coaching swimming and
              water polo for a Special Olympics team (Claire was already
              involved), enjoy pickup basketball whenever Chicago cooperates,
              and go for runs on the lakefront when the weather is nice. I
              love to travel and have been to over 50 countries (two favorites
              are Australia and Thailand). My Spanish is conversational but
              improves when I&rsquo;m speaking it more. I am a big movie guy
              &mdash; Nolan apologist, sucker for a good heist. My family dog
              is named Dorothy and my sister&rsquo;s two kittens (of which my
              parents now have temporary physical custody as she lives in a
              small flat in S.F.) are Callie and Willow. The first thing I do
              when I visit home is give Dorothy a nice belly rub and try to
              convince the kittens I am not dangerous. Work in progress.
            </p>
            <p>
              Thank you for visiting my website. Please be sure to try the{" "}
              &ldquo;Talk to Spencer&rdquo; agent if you would like me to
              answer any other questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
