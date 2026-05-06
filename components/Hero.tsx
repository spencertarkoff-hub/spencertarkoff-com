export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100svh-3.5rem)] flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 py-20 md:py-24">
        <div className="sec-num">Portfolio · 2026</div>

        <h1 className="display-xl text-ink mt-8 md:mt-12">
          <span className="block">Spencer</span>
          <span className="block">
            Tarkoff<span className="text-accent">.</span>
          </span>
        </h1>

        <div className="mt-12 md:mt-16 grid grid-cols-[5.5rem_1fr] gap-3 max-w-[28rem] font-mono text-xs uppercase tracking-[0.14em] border-t border-line pt-3">
          <span className="text-ink-soft">Tools /</span>
          <span className="text-ink">Claude Code · Codex · Copilot · Glean</span>
        </div>
      </div>
    </section>
  );
}
