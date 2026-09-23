"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/lib/types";
import { useCart } from "./CartProvider";
import { waLink } from "@/lib/whatsapp";

const SIZE_GUIDE: Record<string, { cintura: string; cadera: string; largo: string }> = {
  S: { cintura: "70-76 cm", cadera: "92-98 cm", largo: "100 cm" },
  M: { cintura: "77-84 cm", cadera: "99-106 cm", largo: "102 cm" },
  L: { cintura: "85-92 cm", cadera: "107-114 cm", largo: "104 cm" },
  XL: { cintura: "93-100 cm", cadera: "115-122 cm", largo: "106 cm" }
};

export function BuyPanel({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);
  const { addLine } = useCart();

  const isLive = product.status === "activo";
  const totalLeft = isLive
    ? product.sizes.reduce((sum, s) => sum + (s.stock ?? 0), 0)
    : null;
  const pct =
    isLive && product.stockTotal ? Math.round(((totalLeft ?? 0) / product.stockTotal) * 100) : 0;

  return (
    <div className="lg:sticky lg:top-24">
      <span
        className={`inline-block text-[11px] uppercase tracking-widest font-semibold px-3 py-1 mb-4 ${
          isLive ? "bg-cobalt text-white" : "bg-white/10 text-concrete-light"
        }`}
      >
        {isLive ? "Venta activa" : "Preventa"}
      </span>

      <p className="text-xs uppercase tracking-widest text-concrete/50 mb-1">{product.sku}</p>
      <h1 className="font-display text-3xl sm:text-4xl uppercase text-concrete-light mb-2">
        {product.name}
      </h1>
      <p className="text-concrete/70 mb-5">{product.tagline}</p>

      {product.hidePrice ? (
        <p className="text-sm text-concrete/70 mb-5">Precio a coordinar por WhatsApp.</p>
      ) : (
        <p className="font-display text-2xl text-cobalt mb-5">
          ${product.price}.00{!isLive && " (reserva)"}
        </p>
      )}

      {isLive ? (
        <div className="mb-6">
          <div className="h-[3px] bg-white/10 mb-2 overflow-hidden">
            <div className="h-full bg-cobalt" style={{ width: `${pct}%` }} />
          </div>
          <p className="text-xs text-concrete/60">
            {totalLeft && totalLeft > 0 ? `${totalLeft} de ${product.stockTotal} disponibles` : "Agotado"}
          </p>
        </div>
      ) : (
        <p className="text-xs text-concrete/70 border-l-2 border-cobalt bg-cobalt/10 px-4 py-3 mb-6">
          Aún no hay stock físico — al reservar aseguras tu talla para cuando el drop se libere.
        </p>
      )}

      <div className="flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-widest text-concrete/60">Talla</span>
        <button
          onClick={() => setGuideOpen(true)}
          className="text-xs underline underline-offset-4 text-concrete/60 hover:text-concrete-light"
        >
          Guía de tallas
        </button>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {product.sizes.map((s) => {
          const soldOut = isLive && (s.stock ?? 0) <= 0;
          return (
            <button
              key={s.label}
              disabled={soldOut}
              onClick={() => setSize(s.label)}
              className={`w-12 h-12 text-sm border transition-colors ${
                soldOut
                  ? "border-white/10 text-concrete/30 line-through cursor-not-allowed"
                  : size === s.label
                  ? "border-cobalt bg-cobalt text-white"
                  : "border-white/25 text-concrete-light hover:border-concrete-light"
              }`}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      {size ? (
        <div className="space-y-2.5">
          <a
            href={waLink(
              `Hola! Quiero comprar: ${product.name} talla ${size} (${product.sku})${
                product.hidePrice ? "" : ` - $${product.price}`
              }`
            )}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-4 rounded-full bg-cobalt text-white font-semibold tracking-wide uppercase text-sm hover:opacity-85 transition-opacity"
          >
            {isLive ? "Comprar ahora" : "Reservar ahora"}
          </a>
          {isLive && (
            <button
              onClick={() => addLine(product.id, size)}
              className="w-full py-3.5 rounded-full border border-white/25 text-concrete-light font-semibold tracking-wide uppercase text-sm hover:border-concrete-light transition-colors"
            >
              Añadir al carrito
            </button>
          )}
        </div>
      ) : (
        <button
          disabled
          className="w-full py-4 rounded-full bg-concrete-light text-carbon font-semibold tracking-wide uppercase text-sm opacity-40 cursor-not-allowed"
        >
          Elige tu talla
        </button>
      )}

      <p className="text-xs text-concrete/50 mt-4">{product.description}</p>

      <AnimatePresence>
        {guideOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setGuideOpen(false)}
            />
            <motion.div
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[420px] bg-carbon-soft border border-white/10 z-50 p-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-display uppercase text-sm text-concrete-light">Guía de tallas</h3>
                <button onClick={() => setGuideOpen(false)} className="text-concrete/60">
                  ✕
                </button>
              </div>
              <table className="w-full text-xs text-concrete/80">
                <thead>
                  <tr className="text-concrete/50 uppercase tracking-widest">
                    <th className="text-left pb-2">Talla</th>
                    <th className="text-left pb-2">Cintura</th>
                    <th className="text-left pb-2">Cadera</th>
                    <th className="text-left pb-2">Largo</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(SIZE_GUIDE).map(([label, m]) => (
                    <tr key={label} className="border-t border-white/10">
                      <td className="py-2">{label}</td>
                      <td className="py-2">{m.cintura}</td>
                      <td className="py-2">{m.cadera}</td>
                      <td className="py-2">{m.largo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
