import { Helmet } from 'react-helmet-async';
import { useLang } from '@/i18n';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  /** Set for private / app-only routes that should stay out of search results. */
  noindex?: boolean;
  /** Use this exact <title> instead of "<title> | Scorify.uz". */
  exactTitle?: boolean;
  /** Optional JSON-LD structured data for this route. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Addresses of the same page in each language: adds hreflang links so search engines serve the right one. */
  alternates?: { en?: string; uz?: string };
}

export const BASE_TITLE = 'Scorify.uz';
export const BASE_URL = 'https://www.scorify.uz';

const DEFAULT_TITLE = {
  en: `${'Scorify.uz'} — Learn English Online: Lessons, Pronunciation & IELTS Practice`,
  uz: `${'Scorify.uz'} — Ingliz tilini noldan o'rganing | IELTS Writing & Speaking`,
};
const DEFAULT_DESC = {
  en: 'Learn English from zero with short daily lessons, audio pronunciation, vocabulary and tests. IELTS Writing, Speaking, Reading and Listening practice with AI feedback and mock tests.',
  uz: "Ingliz tilini noldan o'rganing: darslar, talaffuz, lug'at va testlar. IELTS Writing, Speaking, Reading va Listening, mock testlar va AI mentor ham bor.",
};

export function SEOHead({ title, description, path = '', noindex, exactTitle, jsonLd, alternates }: SEOHeadProps) {
  const { lang } = useLang();
  const fullTitle = title ? (exactTitle ? title : `${title} | ${BASE_TITLE}`) : DEFAULT_TITLE[lang];
  const desc = description || DEFAULT_DESC[lang];
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
      />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={BASE_TITLE} />
      <meta property="og:locale" content={lang === 'uz' ? 'uz_UZ' : 'en_US'} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${BASE_URL}/og-image.png?v=2`} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png?v=2`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {/* react-helmet-async only reads direct children: no fragments here. */}
      {alternates?.en && !noindex && <link rel="alternate" hrefLang="en" href={`${BASE_URL}${alternates.en}`} />}
      {alternates?.uz && !noindex && <link rel="alternate" hrefLang="uz" href={`${BASE_URL}${alternates.uz}`} />}
      {alternates && !noindex && <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${alternates.en ?? alternates.uz}`} />}
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
