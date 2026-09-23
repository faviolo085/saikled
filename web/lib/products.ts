import type { Product } from "./types";

export const WHATSAPP_NUMBER = "593979165551";
export const DEUNA_QR = "/images/de-una-qr.png";

export const PRODUCTS: Product[] = [
  {
    id: "hoodie-drop-05",
    sku: "DROP-05",
    name: "Hoodie SaiKled",
    tagline: "Preventa abierta — edición limitada.",
    description: "Reserva tu talla ahora. Coordinamos pago y entrega por WhatsApp cuando el drop se libere.",
    status: "preventa",
    price: 35,
    stockTotal: null,
    fit: "Corte oversize, hombro caído y mangas amplias.",
    fabric: "Felpa heavyweight cepillada por dentro, buen abrigo sin perder caída.",
    finish: "Bolsillo canguro reforzado y capucha con cordón a tono.",
    sizes: [
      { label: "S", stock: null },
      { label: "M", stock: null },
      { label: "L", stock: null },
      { label: "XL", stock: null }
    ],
    images: [
      { front: "", back: "", alt: "Hoodie SaiKled - vista frontal" },
      { front: "", back: "", alt: "Hoodie SaiKled - detalle de tela" },
      { front: "", back: "", alt: "Hoodie SaiKled - detalle de costura" }
    ]
  }
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
