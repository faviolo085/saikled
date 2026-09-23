"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import type { Product } from "@/lib/types";

const SWIPE_THRESHOLD = 60;

export function ProductGallery({ product }: { product: Product }) {
  const n = product.images.length;
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const active = ((index % n) + n) % n;
  const current = product.images[active];

  const go = (dir: number) => setIndex(([i]) => [i + dir, dir]);
  const goTo = (target: number) => setIndex(([i]) => [target, target > i ? 1 : -1]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  };

  return (
    <div className="w-full max-w-[480px] mx-auto lg:mx-0">
      <div className="relative aspect-4/5 overflow-hidden bg-white/5 select-none touch-pan-y">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            initial={{ x: direction >= 0 ? 80 : -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -80 : 80, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            drag={n > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.65}
            onDragEnd={onDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            {current.front ? (
              <Image
                src={current.front}
                alt={current.alt}
                fill
                className="object-cover pointer-events-none"
                sizes="(min-width: 1024px) 480px, 100vw"
                priority={active === 0}
                draggable={false}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs uppercase tracking-widest text-concrete/40 text-center px-6">
                Foto próximamente
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {n > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white flex items-center justify-center z-10 text-lg"
            >
              ‹
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white flex items-center justify-center z-10 text-lg"
            >
              ›
            </button>
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Ver imagen ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-5 bg-white" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
