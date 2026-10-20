/**
 * Search-engine ownership meta tags. They are written only when the owner has set the codes as environment variables
 * (BING_SITE_VERIFICATION, YANDEX_SITE_VERIFICATION, optional GOOGLE_SITE_VERIFICATION); nothing is emitted otherwise, so no
 * placeholder tag is ever published.
 */
const attr = (v: string) => v.replace(/[^A-Za-z0-9_\-:.]/g, '');

export function verificationTags(env: Record<string, string | undefined> = process.env): string {
  const rows: [string, string | undefined][] = [
    ['msvalidate.01', env.BING_SITE_VERIFICATION],
    ['yandex-verification', env.YANDEX_SITE_VERIFICATION],
    ['google-site-verification', env.GOOGLE_SITE_VERIFICATION],
  ];
  return rows.filter(([, v]) => v && attr(v)).map(([n, v]) => `<meta name="${n}" content="${attr(v!)}">`).join('\n');
}
