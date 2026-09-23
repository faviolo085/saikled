import { waLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row justify-between gap-4 text-xs text-concrete/60">
        <p>© SaiKled — Riobamba, Ecuador</p>
        <div className="flex gap-4">
          <a href="https://instagram.com/saikled21" target="_blank" rel="noreferrer" className="hover:text-concrete-light">
            Instagram
          </a>
          <a
            href={waLink("Hola! Tengo una consulta sobre los drops de SaiKled.")}
            target="_blank"
            rel="noreferrer"
            className="hover:text-concrete-light"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
