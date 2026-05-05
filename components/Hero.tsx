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

        <p className="mt-8 md:mt-10 text-ink-soft text-lg md:text-2xl font-light leading-snug max-w-[640px]">
          Building useful AI in the places people actually work.
        </p>

        <div className="mt-10 md:mt-12 grid grid-cols-[5.5rem_1fr] gap-3 max-w-[28rem] font-mono text-xs uppercase tracking-[0.14em] border-t border-line pt-3">
          <span className="text-ink-soft">Tools /</span>
          <span className="text-ink">Claude Code · Codex · Copilot</span>
        </div>
      </div>
    </section>
  );
}
