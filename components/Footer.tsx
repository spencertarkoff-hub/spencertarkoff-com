export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-6 md:py-7 flex flex-col gap-3 md:flex-row md:items-center md:justify-between font-mono text-xs uppercase tracking-[0.14em]">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink">
          <a
            href="mailto:spencertarkoff@gmail.com"
            className="lowercase tracking-normal hover:text-accent transition-colors"
          >
            spencertarkoff@gmail.com
          </a>
          <span aria-hidden="true" className="text-ink-soft">·</span>
          <a
            href="https://www.linkedin.com/in/spencer-tarkoff-7aa52624b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <span aria-hidden="true" className="text-ink-soft">·</span>
          <a
            href="/resume.pdf"
            className="hover:text-accent transition-colors"
          >
            Resume ↓
          </a>
        </div>
        <span className="text-ink-soft">
          © 2026 Spencer Tarkoff · Chicago, IL · Built with Claude Code
        </span>
      </div>
    </footer>
  );
}
