import { useState, useEffect } from "react";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showLens, setShowLens] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 40) setShowLens(true);
    if (progress >= 100) {
      setTimeout(() => setFadeOut(true), 400);
      setTimeout(() => onComplete(), 1000);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`font-serif text-6xl md:text-8xl tracking-[0.3em] text-foreground transition-all duration-1000 ${
          showLens ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        LENS
      </div>
      <div className="mt-12 flex items-center gap-6">
        <div className="w-32 h-[1px] bg-border overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-sans text-xs tracking-[0.2em] text-muted-foreground tabular-nums">
          {String(progress).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
};

export default Loader;
