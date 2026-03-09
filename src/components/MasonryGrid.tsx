const archiveItems = [
  { category: "Editorial", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", span: "col-span-2 row-span-2" },
  { category: "Abstract", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&q=80", span: "col-span-1 row-span-1" },
  { category: "Nature", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", span: "col-span-1 row-span-2" },
  { category: "Architecture", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80", span: "col-span-1 row-span-1" },
  { category: "Portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", span: "col-span-1 row-span-2" },
  { category: "Panorama", image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&q=80", span: "col-span-2 row-span-1" },
  { category: "Editorial", image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80", span: "col-span-1 row-span-1" },
  { category: "Abstract", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&q=80", span: "col-span-1 row-span-1" },
];

const MasonryGrid = ({ onImageClick }: { onImageClick: (src: string) => void }) => {
  return (
    <section id="archive" className="py-24 md:py-32 px-6 md:px-12">
      <div className="mb-12 reveal-up">
        <p className="micro-copy mb-3">03 — Archive</p>
        <h2 className="font-serif text-4xl md:text-6xl text-foreground">The Collection</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {archiveItems.map((item, i) => (
          <div
            key={i}
            className={`${item.span} relative overflow-hidden group clickable reveal-up`}
            onClick={() => onImageClick(item.image)}
          >
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-full object-cover masonry-img"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500 flex items-end p-4">
              <span className="micro-copy text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasonryGrid;
