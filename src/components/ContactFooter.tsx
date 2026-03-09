import { useState } from "react";

const ContactFooter = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12">
      <div className="mb-16 reveal-up">
        <p className="micro-copy mb-3">05 — Contact</p>
        <h2 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9]">
          <span className="text-stroke-gold">Let's</span>{" "}
          <span className="text-foreground italic">create.</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto reveal-up">
        <div className="glass p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="floating-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="floating-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="relative">
              <select
                className="floating-input appearance-none cursor-pointer"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              >
                <option value="" disabled className="bg-background text-muted-foreground">
                  Select Inquiry Type
                </option>
                <option value="commission" className="bg-background text-foreground">Commission</option>
                <option value="exhibition" className="bg-background text-foreground">Exhibition</option>
                <option value="collaboration" className="bg-background text-foreground">Collaboration</option>
                <option value="print" className="bg-background text-foreground">Print Purchase</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <textarea
              placeholder="Your Message"
              className="floating-input resize-none min-h-[120px]"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />

            <button
              type="submit"
              className="w-full py-4 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 micro-copy tracking-[0.3em] clickable"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="micro-copy">© 2024 LensGallery. All rights reserved.</span>
        <div className="flex gap-8">
          {["Instagram", "Behance", "Vimeo"].map((s) => (
            <a key={s} href="#" className="micro-copy hover:text-foreground transition-colors clickable">
              {s}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
