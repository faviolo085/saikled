import type { Product } from "./types";

export const WHATSAPP_NUMBER = "593979165551";
export const DEUNA_QR = "/images/de-una-qr.png";

export const PRODUCTS: Product[] = [
  {
    id: "pantalon-baggy-gris",
    sku: "DROP-04",
    name: "Pantalón baggy gris",
    tagline: "Edición única de 24 piezas.",
    description:
      "Pago por transferencia, depósito o QR. Confirmamos disponibilidad y coordinamos entrega por WhatsApp.",
    status: "activo",
    price: 30,
    stockTotal: 24,
    fit: "Corte baggy relajado, tiro alto y caída recta. Ajuste con cordón interno en la cintura.",
    fabric: "Algodón grueso 320 g/m², tacto mate y buena caída sin perder estructura.",
    finish: "Costuras reforzadas doble pespunte, bolsillos de refuerzo y etiqueta tejida SaiKled.",
    sizes: [
      { label: "S", stock: 6 },
      { label: "M", stock: 8 },
      { label: "L", stock: 0 },
      { label: "XL", stock: 0 }
    ],
    images: [
      { front: "/images/cuerpo.jpeg", back: "/images/larga.jpeg", alt: "Pantalón baggy gris - vista frontal" },
      { front: "/images/larga.jpeg", back: "/images/modelo.jpeg", alt: "Pantalón baggy gris - detalle de tela" },
      { front: "/images/modelo.jpeg", back: "/images/cuerpo.jpeg", alt: "Pantalón baggy gris - detalle de costura" }
    ]
  },
  {
    id: "hoodie-drop-05",
    sku: "DROP-05",
    name: "Hoodie SaiKled",
    tagline: "Próximo drop en camino.",
    description: "Reserva tu talla ahora. Coordinamos pago y entrega por WhatsApp cuando el drop se libere.",
    status: "preventa",
    price: 35,
    stockTotal: null,
    fit: "Corte oversize, hombro caído y mangas amplias.",
    fabric: "Felpa heavyweight 400 g/m² cepillada por dentro.",
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
