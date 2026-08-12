import logoSvg from "@/assets/trustify-logo.svg?raw";

// Official Trustify Sports horizontal logo (icon + wordmark). The SVG uses
// fill="currentColor", so it renders in the brand navy on light surfaces and
// white on dark surfaces — driven by the parent text color (see Navbar/Footer),
// per the brand's logo-usage rules (no recolor, use the supplied vector).
export const Logo = ({ className = "" }: { className?: string }) => (
  <a
    href="#top"
    className={`inline-flex items-center group ${className}`}
    aria-label="Trustify Sports home"
  >
    <span
      className="block h-7 w-auto [&_svg]:h-full [&_svg]:w-auto [&_svg]:block"
      dangerouslySetInnerHTML={{ __html: logoSvg }}
      aria-hidden
    />
  </a>
);
