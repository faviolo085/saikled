"use client";

import { motion } from "framer-motion";
import type { Product } from "@/lib/types";

export function FeatureGrid({ product }: { product: Product }) {
  const cards = [
    { title: "Calce", body: product.fit },
    { title: "Gramaje", body: product.fabric },
    { title: "Acabados", body: product.finish }
  ];

  return (
    <section className="border-t border-white/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl sm:text-3xl uppercase text-concrete-light mb-10">
          Detalles y calidad
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="border border-white/10 p-6 hover:border-cobalt/60 transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-cobalt mb-3">{`0${i + 1}`}</p>
              <h3 className="font-display uppercase text-lg text-concrete-light mb-2">{c.title}</h3>
              <p className="text-sm text-concrete/65 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
