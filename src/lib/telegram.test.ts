import { describe, expect, it, vi } from 'vitest';
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { miniAppPath } from './telegram';

describe('Mini App destinations', () => {
  it('opens the page a bot button points to', () => {
    for (const path of ['/writing', '/speaking', '/essays', '/mock-test', '/grammar-test', '/referral', '/profile', '/leaderboard', '/dashboard'])
      expect(miniAppPath(path)).toBe(path);
    const id = '8777f662-e828-4bd1-931e-5a647c7b6556';
    expect(miniAppPath(`/result/${id}`)).toBe(`/result/${id}`);
    expect(miniAppPath(`/speaking-result/${id}`)).toBe(`/speaking-result/${id}`);
    expect(miniAppPath(`/mock-test/result/${id}`)).toBe(`/mock-test/result/${id}`);
  });

  it('falls back to the dashboard for unknown or external destinations', () => {
    for (const value of [null, '', 'writing', '//evil.com', 'https://evil.com/x', '/\\evil.com', '/result/123', '/unknown'])
      expect(miniAppPath(value)).toBe('/dashboard');
  });
});
