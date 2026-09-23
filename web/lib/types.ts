export type ProductStatus = "activo" | "preventa";

export interface SizeOption {
  label: string;
  stock: number | null;
}

export interface ProductImage {
  front: string;
  back: string;
  alt: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  price: number;
  hidePrice?: boolean;
  stockTotal: number | null;
  sizes: SizeOption[];
  images: ProductImage[];
  fit: string;
  fabric: string;
  finish: string;
}

export interface CartLine {
  productId: string;
  size: string;
  qty: number;
}
