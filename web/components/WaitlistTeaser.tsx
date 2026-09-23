"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";

export function WaitlistTeaser() {
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    const link = waLink(
      `Hola! Quiero unirme a la lista de espera del Hoodie SaiKled (DROP-05). Mi contacto: ${contact}`
    );
    window.open(link, "_blank");
    setSent(true);
  };

  return (
    <section id="proximo-drop" className="relative border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-soft to-carbon" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 text-center">
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
          Acceso anticipado antes del lanzamiento oficial. Deja tu contacto y te avisamos primero.
        </p>

        {sent ? (
          <p className="text-cobalt font-semibold">¡Listo! Te escribimos por WhatsApp para confirmar tu lugar.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Email o WhatsApp"
              className="flex-1 bg-transparent border border-white/25 focus:border-cobalt outline-none px-4 py-3 text-sm text-concrete-light placeholder:text-concrete/40"
            />
            <button
              type="submit"
              className="bg-cobalt hover:opacity-85 transition-opacity text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide"
            >
              Unirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
