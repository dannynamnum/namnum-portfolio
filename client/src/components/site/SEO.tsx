import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  jsonLd?: object;
}

const SITE_BASE = "https://namnum.net";
const DEFAULT_OG_IMAGE = `${SITE_BASE}/assets/danny-headshot.jpg`;

export default function SEO({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
  ogType = "website",
  jsonLd,
}: SEOProps) {
  const fullUrl = ogUrl ? `${SITE_BASE}${ogUrl}` : SITE_BASE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Danny Namnum" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
