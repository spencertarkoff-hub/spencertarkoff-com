type Props = {
  number: string;
  title: string;
  subtitle?: string;
};

export default function SectionLabel({ number, title, subtitle }: Props) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
      <span className="text-ink">§ {number}</span>
      <span className="mx-2 text-ink-soft/60">—</span>
      <span className="text-ink">{title}</span>
      {subtitle ? (
        <>
          <span className="mx-2 text-ink-soft/60">/</span>
          <span>{subtitle}</span>
        </>
      ) : null}
    </p>
  );
}
