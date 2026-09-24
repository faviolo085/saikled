"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";

export function BrandHero() {
  return (
    <section className="relative h-[clamp(520px,78vh,860px)] flex items-end overflow-hidden bg-carbon">
      <img
        src="/images/banner-hoodie.jpg"
        alt="SaiKled"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        style={{ objectPosition: "center 40%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/55 to-black/90" />

      <div className="relative z-10 w-full px-6 pb-14 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ice border border-ice rounded-full px-4 py-1.5 mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ice animate-pulse" />
          Drops activos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="font-display uppercase text-concrete-light leading-[1.02] text-[clamp(32px,5.5vw,60px)] max-w-3xl mb-4"
        >
          Make your
          <br />
          dreams come
          <br />
          true
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-concrete/85 max-w-md mb-7"
        >
          Piezas de edición limitada. Cuando se acaban, se acaban — sin reposición hasta el próximo drop.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 flex-wrap"
        >
          <a
            href="#producto"
            className="px-7 py-3.5 rounded-full bg-concrete-light text-carbon font-semibold text-sm tracking-wide hover:opacity-85 transition-opacity"
          >
            Ver drops
          </a>
          <a
            href={waLink("Hola! Quiero mas informacion sobre los drops de SaiKled.")}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-full border border-concrete-light text-concrete-light font-semibold text-sm tracking-wide hover:opacity-85 transition-opacity"
          >
            Escríbenos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
