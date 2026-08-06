import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string;
  /** Set for private / app-only routes that should stay out of search results. */
  noindex?: boolean;
  /** Optional JSON-LD structured data for this route. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const BASE_TITLE = 'Scorify.uz';
export const BASE_URL = 'https://scorify.uz';

export function SEOHead({ title, description, path = '', keywords, noindex, jsonLd }: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} — AI IELTS Writing & Speaking Practice`;
  const desc =
    description ||
    'Practice IELTS Writing and Speaking with instant AI band scores, examiner-style feedback, mock tests and a personal AI Mentor.';
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={BASE_TITLE} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
