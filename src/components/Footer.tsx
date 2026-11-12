import { useEffect, useState } from "react";
import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { GUIDES } from "@/guides";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#how", label: "How we help" },
  { href: "/#vision", label: "Vision" },
  { href: "/#founders", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

// Prerendered at build time, so the year is filled in after load (the first browser render
// must match the prerendered HTML).
const Year = () => {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span className="inline-block min-w-[4ch]">{year}</span>;
};

export const Footer = () => (
  <footer className="on-navy bg-surface-deep border-t border-border py-14">
    <div className="container-tight">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] items-start">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed min-[400px]:whitespace-nowrap lg:whitespace-normal min-[1100px]:whitespace-nowrap">
            Building the compliance standard for European football.
          </p>
        </div>

        <nav className="flex flex-wrap lg:flex-nowrap gap-x-3 min-[400px]:gap-x-5 sm:gap-x-7 gap-y-2 lg:justify-center lg:pt-1" aria-label="Footer">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex lg:justify-end items-center gap-5">
          <a
            href="https://www.linkedin.com/company/trustify-sports/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:sander@trustifysports.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            sander@trustifysports.com
          </a>
        </div>
      </div>

      <nav aria-label="Guides" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-primary self-center">Guides</span>
        {GUIDES.map((g) => (
          <a key={g.path} href={g.path} className="text-muted-foreground hover:text-foreground transition-colors">
            {g.short}
          </a>
        ))}
      </nav>

      <div className="mt-6 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted-foreground">
        <p>© <Year /> Trustify Sports. All rights reserved.</p>
        <p className="opacity-80 max-w-xl sm:text-right">Trustify Sports supports compliance but does not provide legal advice. Obligations under Regulation (EU) 2024/1624 remain with each obliged entity.</p>
        <a href="/privacy" className="hover:text-foreground transition-colors">Privacy notice</a>
      </div>
    </div>
  </footer>
);
