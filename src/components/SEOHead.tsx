import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_TITLE = 'WritingExam.uz';
const BASE_URL = 'https://scribe-grader.lovable.app';

export function SEOHead({ title, description, path = '' }: SEOHeadProps) {
  const fullTitle = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} - Your Personal IELTS Mentor`;
  const desc = description || 'AI-powered IELTS Writing practice with instant grading, personalized AI Mentor, and detailed analytics.';
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
