import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Active" },
  { value: 40, suffix: "", label: "Countries" },
  { value: 12, suffix: "", label: "Awards" },
  { value: 200, suffix: "+", label: "Projects" },
];

const Philosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  useEffect(() => {
    if (!countersStarted) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((s) => Math.round(s.value * eased)));
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [countersStarted]);

  return (
    <section id="philosophy" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12">
      <div className="mb-12 reveal-up">
        <p className="micro-copy mb-3">04 — Philosophy</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">The Vision</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div className="reveal-up">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80"
              alt="The artist"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center reveal-up">
          <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-sans mb-8">
            Photography is not about capturing reality — it is about revealing the invisible poetry 
            that exists between light and shadow, between presence and absence.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-12">
            Every frame is a meditation on impermanence. Through the lens, we discover 
            that beauty is not in perfection but in the raw, unfiltered essence of a moment 
            that will never return. This is the philosophy that drives every expedition, 
            every shutter click, every carefully curated body of work.
          </p>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="border-t border-border pt-4">
                <div className="font-serif text-4xl md:text-5xl text-primary">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="micro-copy mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
