import { useEffect, useState } from "react";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const parisTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Paris",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(parisTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Archive", href: "#archive" },
    { label: "Series", href: "#series" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Inquire", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#" className="font-serif text-lg tracking-[0.15em] text-foreground">
          LENS
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="micro-copy text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="micro-copy text-muted-foreground hidden sm:block">
          Paris, {time}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
