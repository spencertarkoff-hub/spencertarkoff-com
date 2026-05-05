type Props = {
  className?: string;
};

export default function StatusDot({ className = "" }: Props) {
  return (
    <span
      className={`relative inline-flex h-2 w-2 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full bg-green opacity-40 pulse-dot" />
      <span className="relative inline-block h-2 w-2 rounded-full bg-green" />
    </span>
  );
}
