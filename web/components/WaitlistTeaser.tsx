"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";
import { getProduct } from "@/lib/products";

export function WaitlistTeaser() {
  const hoodie = getProduct("hoodie-drop-05");
  const teaserPhoto = hoodie?.images[0]?.front;

  return (
    <section id="proximo-drop" className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-soft to-carbon" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-40 sm:w-52 aspect-4/5 mx-auto mb-8 overflow-hidden bg-white/5 border border-white/10"
        >
          {teaserPhoto ? (
            <Image src={teaserPhoto} alt="Adelanto del Hoodie SaiKled" fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[11px] uppercase tracking-widest text-concrete/40 text-center px-4">
              Foto
              <br />
              próximamente
            </div>
          )}
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs uppercase tracking-[0.3em] text-cobalt mb-5"
        >
          Próximo drop
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display uppercase text-4xl sm:text-6xl text-concrete-light leading-[0.95] mb-6"
        >
          Heavyweight
          <br />
          Hoodie
        </motion.h2>

        <p className="text-concrete/60 max-w-md mx-auto mb-10">
          Acceso anticipado antes del lanzamiento oficial. Escríbenos y te avisamos primero.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={waLink("Hola! Quiero que me avisen cuando salga el Hoodie SaiKled (DROP-05).")}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-cobalt hover:opacity-85 transition-opacity text-white px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wide"
          >
            Avísame por WhatsApp
          </a>
          <a
            href="https://instagram.com/saikled21"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-concrete/50 hover:text-concrete-light underline underline-offset-4 transition-colors"
          >
            o síguenos en Instagram para no perderte el drop
          </a>
        </div>
      </div>
    </section>
  );
}
