"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";
import { getProduct } from "@/lib/products";

export function WaitlistTeaser() {
  const hoodie = getProduct("hoodie-drop-05");
  const teaserPhoto = hoodie?.images[0]?.front;

  return (
    <section
      id="proximo-drop"
      className="relative flex items-center min-h-[clamp(480px,70vh,760px)] overflow-hidden bg-carbon border-t border-white/10"
    >
      {teaserPhoto ? (
        <img
          src={teaserPhoto}
          alt="Adelanto del Hoodie SaiKled"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[13px] uppercase tracking-[0.3em] text-concrete/15 font-display">
            Foto próximamente
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon/40 via-carbon/70 to-carbon/95" />

      <div className="relative z-10 w-full px-6 py-20 max-w-6xl mx-auto text-center">
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
