export function authErrorMessage(error: { message: string; code?: string }): string {
  if (error.code === 'over_email_send_rate_limit' || /email rate limit exceeded/i.test(error.message)) {
    return 'Confirmation emails are temporarily unavailable. Please wait before trying again. If this continues, contact Scorify support.';
  }
  if (error.code === 'email_not_confirmed' || /email not confirmed/i.test(error.message)) {
    return 'Please confirm your email before signing in. Check your inbox and spam folder.';
  }
  if (error.code === 'invalid_credentials' || /invalid login credentials/i.test(error.message)) {
    return 'Invalid email or password.';
  }
  return error.message;
}
