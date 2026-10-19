import { currentLang, translate } from '@/i18n';

export function authErrorMessage(error: { message: string; code?: string }): string {
  const lang = currentLang();
  if (error.code === 'over_email_send_rate_limit' || /email rate limit exceeded/i.test(error.message)) {
    return translate(lang, 'authErr.rateLimit');
  }
  if (error.code === 'email_not_confirmed' || /email not confirmed/i.test(error.message)) {
    return translate(lang, 'authErr.notConfirmed');
  }
  if (error.code === 'invalid_credentials' || /invalid login credentials/i.test(error.message)) {
    return translate(lang, 'authErr.invalid');
  }
  return error.message;
}
