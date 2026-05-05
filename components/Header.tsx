import StatusDot from "./StatusDot";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
];

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-paper/80 backdrop-blur-sm border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink">
          <StatusDot />
          <span>Chicago, IL</span>
        </div>
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
