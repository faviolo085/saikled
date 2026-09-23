"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartProvider";
import { getProduct } from "@/lib/products";
import { waLink } from "@/lib/whatsapp";
import { DEUNA_QR } from "@/lib/products";
import Image from "next/image";

export function CartDrawer() {
  const { lines, isOpen, closeCart, removeLine, totalPrice } = useCart();
  const [showQr, setShowQr] = useState(false);

  const checkoutMessage = () => {
    const items = lines
      .map((l) => {
        const p = getProduct(l.productId);
        return `- ${p?.name ?? l.productId} talla ${l.size} x${l.qty}`;
      })
      .join("\n");
    return `Hola! Quiero comprar:\n${items}\n\nTotal: $${totalPrice}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-carbon-soft z-50 flex flex-col border-l border-white/10"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
              <h2 className="font-display uppercase tracking-widest text-sm text-concrete-light">
                Tu pedido
              </h2>
              <button onClick={closeCart} aria-label="Cerrar carrito" className="text-concrete-light/70 hover:text-concrete-light">
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              {lines.length === 0 && (
                <p className="text-sm text-concrete/60">Aún no has añadido ninguna pieza.</p>
              )}
              {lines.map((l) => {
                const product = getProduct(l.productId);
                if (!product) return null;
                const cover = product.images[0]?.front;
                return (
                  <div key={`${l.productId}-${l.size}`} className="flex gap-4">
                    <div className="relative w-16 aspect-4/5 bg-white/5 overflow-hidden flex-shrink-0">
                      {cover ? (
                        <Image src={cover} alt={product.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-concrete/50 text-center px-1">
                          Foto próximamente
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-concrete-light">{product.name}</p>
                      <p className="text-xs text-concrete/60">Talla {l.size} · x{l.qty}</p>
                      <p className="text-sm text-cobalt font-semibold mt-1">${product.price * l.qty}</p>
                    </div>
                    <button
                      onClick={() => removeLine(l.productId, l.size)}
                      className="text-concrete/50 hover:text-concrete-light text-xs self-start"
                      aria-label="Quitar"
                    >
                      Quitar
                    </button>
                  </div>
                );
              })}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-white/10 px-6 py-6 space-y-3">
                <div className="flex justify-between text-sm text-concrete-light">
                  <span>Total</span>
                  <span className="font-display text-cobalt">${totalPrice}</span>
                </div>
                <a
                  href={waLink(checkoutMessage())}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-cobalt hover:opacity-85 transition-opacity text-white py-3 rounded-full text-sm font-semibold tracking-wide"
                >
                  Finalizar por WhatsApp
                </a>
                {DEUNA_QR && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowQr((v) => !v)}
                      className="w-full text-center text-xs underline underline-offset-4 text-concrete/60 hover:text-concrete-light"
                    >
                      {showQr ? "Ocultar QR de De Una" : "¿Prefieres pagar con De Una? Ver QR"}
                    </button>
                    {showQr && (
                      <div className="mt-3 p-4 border border-dashed border-white/15 bg-white/5 text-center">
                        <div className="relative w-36 h-36 mx-auto mb-3">
                          <Image src={DEUNA_QR} alt="QR de pago De Una - SaiKled" fill className="object-contain" />
                        </div>
                        <p className="text-[11px] text-concrete/60 mb-3">
                          Escanea desde tu app De Una, paga <strong>${totalPrice}</strong> y envía el
                          comprobante por WhatsApp para confirmar tu pedido.
                        </p>
                        <a
                          href={waLink(
                            `Hola! Ya pagué con De Una por:\n${lines
                              .map((l) => {
                                const p = getProduct(l.productId);
                                return `- ${p?.name ?? l.productId} talla ${l.size} x${l.qty}`;
                              })
                              .join("\n")}\n\nTotal: $${totalPrice}. Adjunto el comprobante.`
                          )}
                          target="_blank"
                          rel="noreferrer"
                          className="block w-full text-center bg-transparent border border-concrete-light/40 hover:border-concrete-light transition-colors text-concrete-light py-2.5 rounded-full text-xs font-semibold tracking-wide"
                        >
                          Ya pagué, confirmar por WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
