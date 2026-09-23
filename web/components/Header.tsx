"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function Header() {
  const { totalItems, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-carbon/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <nav className="hidden sm:flex gap-6 text-xs uppercase tracking-widest text-concrete/80">
          <Link href="#producto" className="hover:text-concrete-light transition-colors">
            Pantalón
          </Link>
          <Link href="#proximo-drop" className="hover:text-concrete-light transition-colors">
            Próximo drop
          </Link>
        </nav>

        <Link
          href="#top"
          className="font-display text-lg tracking-[0.15em] text-concrete-light uppercase sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          SaiKled
        </Link>

        <button
          type="button"
          onClick={openCart}
          aria-label="Abrir carrito"
          className="relative flex items-center justify-center w-10 h-10 text-concrete-light"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 8h12l-1 12H7L6 8Z" strokeLinejoin="round" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
          </svg>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-cobalt text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
