import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { BrandHero } from "@/components/BrandHero";
import { Marquee } from "@/components/Marquee";
import { HeroProduct } from "@/components/HeroProduct";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  const hoodie = PRODUCTS[0];

  return (
    <>
      <AnnouncementBar />
      <Header />
      <BrandHero />
      <Marquee />
      <main>
        <HeroProduct product={hoodie} />
        <FeatureGrid product={hoodie} />
      </main>
      <Footer />
    </>
  );
}
