import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How We Help" },
  { href: "#vision", label: "Vision" },
  { href: "#founders", label: "Team" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border/60 shadow-[var(--shadow-card)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-tight flex items-center justify-between h-16">
        <Logo className={scrolled ? "text-foreground" : "text-white"} />

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant={scrolled ? "gold" : "onDark"} size="sm">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <button
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container-tight py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="gold" size="sm" className="self-start">
              <a href="#contact" onClick={() => setOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
