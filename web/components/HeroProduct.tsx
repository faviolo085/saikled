import type { Product } from "@/lib/types";
import { ProductGallery } from "./ProductGallery";
import { BuyPanel } from "./BuyPanel";

export function HeroProduct({ product }: { product: Product }) {
  return (
    <section id="producto" className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
        <ProductGallery product={product} />
        <BuyPanel product={product} />
      </div>
    </section>
  );
}
