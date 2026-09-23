export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-xl sm:text-2xl text-concrete-light uppercase inline-block leading-none ${className}`}
      style={{ transform: "skewX(-12deg)", letterSpacing: "-0.01em" }}
    >
      Saikled
    </span>
  );
}
