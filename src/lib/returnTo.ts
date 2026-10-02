/** Only internal app routes are accepted as post-auth destinations. */
export function safeReturnTo(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.includes('\\') || /[\r\n]/.test(value)) return '/dashboard';
  try {
    const url = new URL(value, 'https://scorify.uz');
    if (url.origin !== 'https://scorify.uz') return '/dashboard';
    return '/dashboard';
  } catch { return '/dashboard'; }
}
