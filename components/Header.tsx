const LEFT_LINKS = [
  {
    href: "https://www.linkedin.com/in/spencer-tarkoff-7aa52624b",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:spencertarkoff@gmail.com",
    label: "Email",
    external: false,
  },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-paper/80 backdrop-blur-sm border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-14 flex items-center justify-between">
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 font-mono text-[11px] uppercase tracking-[0.16em]">
          {LEFT_LINKS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="nav-link text-ink-soft hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 md:gap-8 font-mono text-xs uppercase tracking-[0.14em]">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
