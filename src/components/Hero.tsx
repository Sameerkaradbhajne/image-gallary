const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="micro-copy mb-6 tracking-[0.4em]">
          Fine Art Photography
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif leading-[0.95] mb-8">
          <span className="block text-foreground">Visual</span>
          <span className="block text-stroke my-2 clickable">Poetry</span>
          <span className="block text-foreground">in Motion</span>
        </h1>

        <p className="micro-copy mt-8 tracking-[0.3em]">
          Est. 2010 — Paris
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="micro-copy text-[0.6rem]">Scroll</span>
        <div className="w-[1px] h-12 bg-border overflow-hidden">
          <div className="w-full h-full bg-primary scroll-indicator-line" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
