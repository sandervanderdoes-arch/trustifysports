import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How It Works" },
  { href: "#founders", label: "Founders" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => (
  <footer className="bg-surface-deep border-t border-border py-14">
    <div className="container-tight">
      <div className="grid gap-10 md:grid-cols-3 items-start">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Compliance Infrastructure for Professional Football
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center" aria-label="Footer">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex md:justify-end items-center gap-5">
          <a
            href="https://www.linkedin.com/"
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

      <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Trustify Sports. All rights reserved.</p>
        <p className="opacity-70">Built for the European football industry.</p>
      </div>
    </div>
  </footer>
);
