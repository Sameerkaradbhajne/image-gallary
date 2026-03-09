import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import FilmGrain from "@/components/FilmGrain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorizontalScroll from "@/components/HorizontalScroll";
import MasonryGrid from "@/components/MasonryGrid";
import Philosophy from "@/components/Philosophy";
import ContactFooter from "@/components/ContactFooter";
import Lightbox from "@/components/Lightbox";
import useRevealOnScroll from "@/hooks/useRevealOnScroll";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useRevealOnScroll();

  const handleLoaded = useCallback(() => setLoading(false), []);
  const openLightbox = useCallback((src: string) => setLightboxSrc(src), []);
  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <>
      {loading && <Loader onComplete={handleLoaded} />}
      <CustomCursor />
      <FilmGrain />
      <Navbar />
      <main>
        <Hero />
        <HorizontalScroll onImageClick={openLightbox} />
        <MasonryGrid onImageClick={openLightbox} />
        <Philosophy />
        <ContactFooter />
      </main>
      <Lightbox src={lightboxSrc} onClose={closeLightbox} />
    </>
  );
};

export default Index;
