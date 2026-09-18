/** Only internal app routes are accepted as post-auth destinations. */
export function safeReturnTo(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.includes('\\') || /[\r\n]/.test(value)) return '/dashboard';
  try {
    const url = new URL(value, 'https://scorify.uz');
    if (url.origin !== 'https://scorify.uz') return '/dashboard';
    if (/^\/t\/[A-Za-z0-9-]{16,100}$/.test(url.pathname)) return url.pathname;
    if (url.pathname === '/my-tests') return url.pathname;
    if (url.pathname === '/teacher') return url.pathname;
    if (/^\/(my-tests|teacher\/tests)\/[0-9a-fA-F-]{36}$/.test(url.pathname)) return url.pathname;
    return '/dashboard';
  } catch { return '/dashboard'; }
}
