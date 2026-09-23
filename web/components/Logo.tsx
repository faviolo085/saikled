export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="SaiKled">
      <rect x="0.5" y="0.5" width="39" height="39" rx="6" fill="#0047AB" stroke="#A9C6E8" strokeWidth="1" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="900"
        fontSize="17"
        letterSpacing="0.5"
        fill="#EDECE8"
      >
        SK
      </text>
    </svg>
  );
}
