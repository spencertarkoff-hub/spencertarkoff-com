"use client";

import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type FormEvent,
} from "react";
import StatusDot from "./StatusDot";

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const PRESEED: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi, I'm Spencer's AI agent, trained on his work, his background, and how he thinks about building. Ask me anything.",
  },
];

export type ChatWindowHandle = {
  submitPrompt: (prompt: string) => void;
};

type Props = {
  handleRef?: React.RefObject<ChatWindowHandle | null>;
  onStart?: () => void;
};

function renderAssistant(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (/^\*[^*]+\*$/.test(part)) {
      return (
        <em key={i} className="italic text-accent">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function ChatWindow({ handleRef, onStart }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const displayedMessages = hasStarted ? messages : PRESEED;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [displayedMessages, isStreaming]);

  const runPrompt = useCallback(
    async (prompt: string) => {
      const trimmed = prompt.trim();
      if (!trimmed || isStreaming) return;

      const base: ChatMessage[] = hasStarted ? messages : [];
      const withUser: ChatMessage[] = [
        ...base,
        { role: "user", content: trimmed },
      ];

      if (!hasStarted) onStart?.();
      setHasStarted(true);
      setInput("");
      setIsStreaming(true);
      setMessages([...withUser, { role: "assistant", content: "" }]);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: withUser }),
        });

        if (res.status === 503) {
          setMessages([
            ...withUser,
            {
              role: "assistant",
              content:
                "Add your API key to `.env.local` to enable this — set `ANTHROPIC_API_KEY`, then reload.",
            },
          ]);
          return;
        }

        if (!res.ok || !res.body) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let assistantContent = "";

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          assistantContent += decoder.decode(value, { stream: true });
          setMessages([
            ...withUser,
            { role: "assistant", content: assistantContent },
          ]);
        }

        assistantContent += decoder.decode();
        setMessages([
          ...withUser,
          {
            role: "assistant",
            content:
              assistantContent.trim().length > 0
                ? assistantContent
                : "Something broke — try again in a moment.",
          },
        ]);
      } catch (err) {
        console.error("[chat] error:", err);
        setMessages([
          ...withUser,
          {
            role: "assistant",
            content: "Something broke — try again in a moment.",
          },
        ]);
      } finally {
        setIsStreaming(false);
      }
    },
    [messages, hasStarted, isStreaming, onStart],
  );

  useImperativeHandle(handleRef, () => ({ submitPrompt: runPrompt }), [
    runPrompt,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    runPrompt(input);
  };

  return (
    <div className="flex flex-col min-h-[480px] h-full bg-card border border-line shadow-[0_1px_2px_rgba(26,23,19,0.04),0_12px_32px_-16px_rgba(26,23,19,0.18)]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
          Ask Spencer
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          <StatusDot />
          Online
        </span>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
      >
        {displayedMessages.map((m, i) => {
          if (m.role === "user") {
            return (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] bg-ink text-paper px-4 py-2.5 text-sm leading-relaxed rounded-[14px] rounded-br-[4px]">
                  {m.content}
                </div>
              </div>
            );
          }
          return (
            <div key={i} className="flex justify-start">
              <div className="max-w-[90%] border border-line text-ink px-4 py-2.5 text-sm leading-relaxed rounded-[14px] rounded-bl-[4px]">
                {renderAssistant(m.content)}
                {isStreaming && i === displayedMessages.length - 1 ? (
                  <span className="inline-block w-[6px] h-[14px] ml-0.5 align-text-bottom bg-ink animate-pulse" />
                ) : null}
              </div>
            </div>
          );
        })}
        {isStreaming && displayedMessages[displayedMessages.length - 1]?.role === "user" ? (
          <div className="flex justify-start">
            <div className="border border-line text-ink-soft px-4 py-2.5 text-sm rounded-[14px] rounded-bl-[4px]">
              <span className="inline-block w-[6px] h-[14px] bg-ink animate-pulse" />
            </div>
          </div>
        ) : null}
      </div>

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 px-4 py-3 border-t border-line"
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isStreaming}
          placeholder="Ask about Spencer's work…"
          aria-label="Message the Spencer agent"
          className="flex-1 bg-transparent font-mono text-[13px] text-ink placeholder:text-ink-soft/70 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isStreaming || !input.trim()}
          aria-label="Send message"
          className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft hover:text-accent disabled:opacity-40 disabled:hover:text-ink-soft transition-colors"
        >
          ↵ Send
        </button>
      </form>
    </div>
  );
}
