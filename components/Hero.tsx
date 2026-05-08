"use client";

function openChat() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("talkToSpencer:open"));
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100svh-3.5rem)] flex items-center"
    >
      <div className="max-w-[1400px] mx-auto w-full px-5 md:px-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-7">
            <div className="sec-num">2026</div>

            <h1 className="display-xl text-ink mt-8 md:mt-12">
              <span className="block">Spencer</span>
              <span className="block">
                Tarkoff<span className="text-accent">.</span>
              </span>
            </h1>

            <div className="mt-12 md:mt-16 grid grid-cols-[5.5rem_1fr] gap-3 max-w-[28rem] font-mono text-xs uppercase tracking-[0.14em] border-t border-line pt-3">
              <span className="text-ink-soft">Tools /</span>
              <span className="text-ink">
                Claude Code · Codex · Copilot · Glean
              </span>
            </div>
          </div>

          <div className="md:col-span-5 md:justify-self-center">
            <button
              type="button"
              onClick={openChat}
              aria-label="Talk to Spencer"
              className="inline-flex items-center gap-4 min-w-[320px] rounded-full bg-ink text-paper px-10 py-7 text-[28px] font-medium cursor-pointer shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span
                aria-hidden="true"
                className="block w-2.5 h-2.5 rounded-full bg-green"
              />
              <span>Talk to Spencer</span>
              <span
                aria-hidden="true"
                className="ml-auto text-[24px] opacity-70"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
