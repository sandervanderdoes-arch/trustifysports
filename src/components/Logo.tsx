import { ShieldCheck } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2 group ${className}`} aria-label="Trustify Sports home">
    <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={2.2} />
    <span className="font-serif text-lg tracking-tight text-foreground">
      Trustify <span className="text-primary">Sports</span>
    </span>
  </a>
);
