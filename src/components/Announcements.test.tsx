import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

const insert = vi.fn(async () => ({ error: null }));
let announcements: unknown[] = [];
let userCreatedAt = '2026-01-01T00:00:00Z';
vi.mock('@/integrations/supabase/client', () => ({
  supabase: {
    from: (table: string) => table === 'announcements'
      ? { select: () => ({ eq: async () => ({ data: announcements }) }) }
      : { select: () => ({ eq: async () => ({ data: [] }) }), insert },
  },
}));
let stableUser = { id: 'u1', created_at: userCreatedAt };
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: stableUser }) }));
vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'uz', t: (k: string) => k }) }));

import { Announcements, isForUser } from './Announcements';

const modal = (over: Record<string, unknown> = {}) => ({ id: 'a1', type: 'modal', status: 'active', title: 'Yangilik', content: 'Birinchi qator\nIkkinchi qator', audience: 'existing', created_at: '2026-06-01T00:00:00Z', ...over });

beforeEach(() => { insert.mockClear(); userCreatedAt = '2026-01-01T00:00:00Z'; stableUser = { id: 'u1', created_at: userCreatedAt }; });

describe('who sees an announcement', () => {
  it('existing accounts only, unless it is for everyone', () => {
    expect(isForUser({ audience: 'existing', created_at: '2026-06-01T00:00:00Z' }, '2026-01-01T00:00:00Z')).toBe(true);
    expect(isForUser({ audience: 'existing', created_at: '2026-06-01T00:00:00Z' }, '2026-07-01T00:00:00Z')).toBe(false);
    expect(isForUser({ audience: 'all', created_at: '2026-06-01T00:00:00Z' }, '2026-07-01T00:00:00Z')).toBe(true);
  });
});

describe('modal announcement', () => {
  it('shows once to an existing user and records the view when it is shown', async () => {
    announcements = [modal()];
    render(<Announcements />);
    expect(await screen.findByText('Yangilik')).toBeTruthy();
    expect(screen.getByText('Ikkinchi qator')).toBeTruthy();
    await waitFor(() => expect(insert).toHaveBeenCalledTimes(1));
    expect(insert).toHaveBeenCalledWith({ announcement_id: 'a1', user_id: 'u1' });
  });
  it('is not shown to someone who signed up after it was written', async () => {
    announcements = [modal()];
    stableUser = { id: 'u1', created_at: '2026-09-01T00:00:00Z' };
    render(<Announcements />);
    await new Promise((r) => setTimeout(r, 50));
    expect(screen.queryByText('Yangilik')).toBeNull();
    expect(insert).not.toHaveBeenCalled();
  });
});
