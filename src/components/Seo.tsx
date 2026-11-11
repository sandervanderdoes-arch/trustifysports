import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://trustifysports.com";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  type?: "website" | "article";
  /** schema.org objects for this page, rendered as JSON-LD. */
  jsonLd?: Record<string, unknown>[];
};

// Per-page head tags. Prerendered into each page's static HTML at build time.
export const Seo = ({ title, description, path, noindex, type = "website", jsonLd = [] }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      {!noindex && <link rel="alternate" hrefLang="en" href={url} />}
      {!noindex && <link rel="alternate" hrefLang="x-default" href={url} />}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ "@context": "https://schema.org", ...data })}
        </script>
      ))}
    </Helmet>
  );
};

/** BreadcrumbList for a page one level below the homepage. */
export const breadcrumb = (name: string, path: string) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
  ],
});

/** FAQPage from question/answer pairs (answers as plain text). */
export const faqPage = (faqs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

/** Article metadata for a guide page. */
export const article = (headline: string, description: string, path: string, published: string, modified: string) => ({
  "@type": "Article",
  headline,
  description,
  url: `${SITE_URL}${path}`,
  mainEntityOfPage: `${SITE_URL}${path}`,
  datePublished: published,
  dateModified: modified,
  inLanguage: "en",
  image: `${SITE_URL}/og-image.png`,
  author: { "@type": "Organization", name: "Trustify Sports", url: `${SITE_URL}/` },
  publisher: { "@type": "Organization", name: "Trustify Sports", logo: { "@type": "ImageObject", url: `${SITE_URL}/logo-512.png` } },
});
