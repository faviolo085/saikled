const ITEMS = ["Edición limitada", "Make your dreams come true", "Riobamba, Ecuador", "SaiKled"];
const REPEATS_PER_HALF = 8;

export function Marquee() {
  const half = Array.from({ length: REPEATS_PER_HALF }).flatMap(() => ITEMS);
  const track = [...half, ...half];

  return (
    <div className="bg-cobalt text-concrete-light overflow-hidden whitespace-nowrap py-3 border-b border-black/15">
      <div className="inline-flex animate-marquee">
        {track.map((item, i) => (
          <span key={i} className="mx-6 text-sm uppercase tracking-widest font-semibold shrink-0">
            {item} <span className="opacity-60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
