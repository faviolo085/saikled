"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";
import { PRODUCTS, getProduct } from "@/lib/products";
import type { CartLine } from "@/lib/types";

interface CartContextValue {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addLine: (productId: string, size: string) => void;
  removeLine: (productId: string, size: string) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addLine = useCallback((productId: string, size: string) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.productId === productId && l.size === size);
      if (existing) {
        return prev.map((l) =>
          l.productId === productId && l.size === size ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [...prev, { productId, size, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeLine = useCallback((productId: string, size: string) => {
    setLines((prev) => prev.filter((l) => !(l.productId === productId && l.size === size)));
  }, []);

  const totalItems = lines.reduce((sum, l) => sum + l.qty, 0);
  const totalPrice = lines.reduce((sum, l) => {
    const product = getProduct(l.productId);
    return sum + (product ? product.price * l.qty : 0);
  }, 0);

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addLine,
      removeLine,
      totalItems,
      totalPrice
    }),
    [lines, isOpen, addLine, removeLine, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}

export { PRODUCTS };
