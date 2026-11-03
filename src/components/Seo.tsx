import { Helmet } from "react-helmet-async";

const BASE = "https://trustifysports.com";

export const Seo = ({ title, description, path, noindex }: { title: string; description: string; path: string; noindex?: boolean }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${BASE}${path}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${BASE}${path}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {noindex && <meta name="robots" content="noindex" />}
  </Helmet>
);
