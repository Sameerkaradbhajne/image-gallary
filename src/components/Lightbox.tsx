import { useEffect } from "react";

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

const Lightbox = ({ src, onClose }: LightboxProps) => {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img
        src={src}
        alt="Lightbox"
        className="max-w-[90vw] max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-8 right-8 micro-copy text-foreground hover:text-primary transition-colors clickable tracking-[0.3em]"
      >
        [ CLOSE ]
      </button>
    </div>
  );
};

export default Lightbox;
