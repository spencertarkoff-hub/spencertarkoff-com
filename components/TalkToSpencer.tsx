"use client";

import { useEffect, useRef, useState } from "react";
import ChatWindow, { type ChatWindowHandle } from "./ChatWindow";

const SUGGESTIONS = [
  "What's the hardest thing you've shipped?",
  "How do you approach a new project?",
  "Tell me about Communications Coach",
];

export default function TalkToSpencer() {
  const [open, setOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const chatRef = useRef<ChatWindowHandle>(null);

  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("talkToSpencer:open", handler);
    return () => window.removeEventListener("talkToSpencer:open", handler);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const fabHidden = open || heroVisible;

  const close = () => setOpen(false);

  const handleChip = (prompt: string) => {
    chatRef.current?.submitPrompt(prompt);
    setHasStarted(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open chat with Spencer's agent"
        aria-expanded={open}
        className={`fixed bottom-7 right-7 z-40 flex items-center gap-2.5 rounded-full bg-ink text-paper px-6 py-3.5 text-[13px] font-medium shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-[transform,opacity] duration-200 hover:-translate-y-0.5 ${
          fabHidden ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <span
          aria-hidden="true"
          className="block w-[7px] h-[7px] rounded-full bg-green fab-pulse"
          style={{ boxShadow: "0 0 8px var(--green)" }}
        />
        Talk to Spencer
      </button>

      <div
        onClick={close}
        aria-hidden={!open}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Talk to Spencer"
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-50 h-full w-full md:w-[480px] bg-paper border-l border-line flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14 border-b border-line shrink-0">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
            Talk to Spencer
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close chat"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft hover:text-accent transition-colors"
          >
            Close ×
          </button>
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <ChatWindow
            handleRef={chatRef}
            onStart={() => setHasStarted(true)}
          />
        </div>

        {!hasStarted ? (
          <div className="border-t border-line px-5 py-4 shrink-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft mb-3">
              Try one
            </p>
            <ul className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => handleChip(s)}
                    className="group border border-line bg-card text-ink px-3 py-1.5 text-[11px] font-mono hover:border-accent hover:text-accent transition-colors"
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
        ) : null}
      </aside>
    </>
  );
}
