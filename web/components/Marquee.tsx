const ITEMS = ["Edición limitada", "Pago por WhatsApp", "Riobamba, Ecuador", "SaiKled"];

export function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-cobalt text-concrete-light overflow-hidden whitespace-nowrap py-3 border-b border-black/15">
      <div className="inline-block animate-marquee">
        {track.map((item, i) => (
          <span key={i} className="mx-6 text-sm uppercase tracking-widest font-semibold">
            {item} <span className="opacity-60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
