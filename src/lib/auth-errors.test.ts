import { describe, expect, it } from 'vitest';
import { authErrorMessage } from './auth-errors';
import { functionError } from './function-errors';

describe('actionable service errors', () => {
  it('explains the email quota error without claiming the account was created', () => {
    expect(authErrorMessage({ message: 'email rate limit exceeded' })).toContain('temporarily unavailable');
  });
  it('explains email verification', () => {
    expect(authErrorMessage({ code: 'email_not_confirmed', message: 'error' })).toContain('confirm your email');
  });
  it('unwraps quota errors from an Edge Function response', async () => {
    const result = await functionError({ context: new Response(JSON.stringify({ error: 'No Speaking evaluations remaining' }), { status: 403 }) }, 'Failed');
    expect(result.message).toBe('No Speaking evaluations remaining');
  });
  it('handles non-JSON gateway responses', async () => {
    expect((await functionError({ context: new Response('Bad gateway') }, 'Please retry')).message).toBe('Please retry');
  });
});
