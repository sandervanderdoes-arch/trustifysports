import { ShieldCheck } from "lucide-react";

export const Logo = ({ className = "" }: { className?: string }) => (
  <a href="#top" className={`flex items-center gap-2 group ${className}`} aria-label="Trustify Sports home">
    {/* Single-tone wordmark: inherits currentColor so it reads as brand navy on light
        surfaces and white on dark, per the brand's logo-usage rules (no recolor). */}
    <ShieldCheck className="h-6 w-6" strokeWidth={2.2} />
    <span className="font-serif text-lg tracking-tight">
      Trustify <span className="font-normal">Sports</span>
    </span>
  </a>
);
