import { useRef, useEffect, useState } from "react";

const seriesItems = [
  {
    title: "Ethereal Dawn",
    subtitle: "Iceland, 2023",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
  },
  {
    title: "Urban Whispers",
    subtitle: "Tokyo, 2022",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
  },
  {
    title: "Silent Monuments",
    subtitle: "Rome, 2021",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
  },
  {
    title: "Liquid Gold",
    subtitle: "Sahara, 2023",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
  },
];

const HorizontalScroll = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="series" ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 md:px-12 mb-8">
          <p className="micro-copy mb-3">02 — The Series</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">Selected Works</h2>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 px-6 md:px-12 transition-transform duration-100 will-change-transform"
            style={{
              transform: `translateX(-${scrollProgress * 70}%)`,
            }}
          >
            {seriesItems.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[70vw] md:w-[35vw] relative group clickable"
                onClick={() => onImageClick(item.image)}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                  <p className="micro-copy mt-1">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
