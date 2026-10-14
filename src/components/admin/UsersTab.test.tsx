import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { agoUz, isOnline, pageRange, type AdminUser, type UserStats } from './adminApi';

const NOW = Date.now();
const min = (n: number) => new Date(NOW - n * 60_000).toISOString();

const base = (i: number, seenMinutesAgo: number | null, online = false): AdminUser => ({
  user_id: `u${i}`, email: `user${i}@mail.test`, full_name: `User ${String(i).padStart(2, '0')}`, public_id: null, username: null, phone: null, city: null,
  created_at: min(10_000 - i), last_sign_in_at: null, provider: 'email', plan_type: null, expires_at: null, trial_ends_at: null,
  writing_used: 0, writing_limit: 0, speaking_used: 0, speaking_limit: 0, level: 'beginner', xp: i, streak: 0, lessons_done: i % 4, last_learn_day: null,
  essays: 0, speaking: 0, mocks: 0, invited: 0, was_referred: false, telegram_id: null, telegram_username: null, telegram_banned: false, is_admin: false,
  last_seen: seenMinutesAgo === null ? null : min(seenMinutesAgo), online_at: online && seenMinutesAgo !== null ? min(seenMinutesAgo) : null,
});

// 45 users: 3 are online right now, the rest were last seen 10, 20, 30… minutes ago; the last 5 never came back.
const users: AdminUser[] = Array.from({ length: 45 }, (_, i) => {
  if (i < 3) return base(i + 1, i, true);
  if (i >= 40) return base(i + 1, null);
  return base(i + 1, (i - 2) * 10);
});
const stats: UserStats = {
  total: 45, online: { now: 3, h1: 8, h24: 30, d7: 40, d30: 40, never: 5 }, signups: { today: 1, d7: 9, prev7: 6, d30: 45, prev30: 0 }, retention: { cohort: 10, back: 4 },
  sources: { google: 5, telegram: 12, email: 28, telegram_linked: 20, with_phone: 3 }, levels: [{ level: 'beginner', n: 30 }], not_started: 15, lessons: { none: 20, few: 10, some: 10, many: 5 },
  plans: { free: 1, trial: 40, learn: 3, ielts: 1 }, cities: [{ city: 'Toshkent', n: 4 }], top_xp: [{ name: 'Top User', xp: 600, streak: 3, level: 'beginner' }], active_14d: [{ day: '2026-10-13', n: 4 }],
};

vi.mock('@/integrations/supabase/client', () => ({
  supabase: { rpc: async (fn: string) => ({ data: fn === 'admin_users_list' ? users : fn === 'admin_user_stats' ? stats : null, error: null }) },
}));
vi.mock('recharts', async () => {
  const React = await import('react');
  const Box = ({ children }: { children?: React.ReactNode }) => React.createElement('div', null, children);
  return { ResponsiveContainer: Box, AreaChart: Box, Area: Box, CartesianGrid: Box, XAxis: Box, YAxis: Box, Tooltip: Box, BarChart: Box, Bar: Box };
});

import { PAGE, UsersTab } from './UsersTab';

window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
const mount = () => render(<QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}><UsersTab /></QueryClientProvider>);
const names = () => screen.getAllByText(/^User \d\d$/).map((e) => e.textContent);

describe('helpers', () => {
  it('says when somebody was last on the site in Uzbek', () => {
    expect(agoUz(NOW - 20_000, NOW)).toBe('hozir');
    expect(agoUz(NOW - 5 * 60_000, NOW)).toBe('5 daqiqa oldin');
    expect(agoUz(NOW - 2 * 3_600_000, NOW)).toBe('2 soat oldin');
    expect(agoUz(NOW - 3 * 86_400_000, NOW)).toBe('3 kun oldin');
    expect(agoUz(0, NOW)).toBe('kirmagan');
  });
  it('counts a user as online for five minutes after the last heartbeat', () => {
    expect(isOnline({ online_at: min(1) }, NOW)).toBe(true);
    expect(isOnline({ online_at: min(6) }, NOW)).toBe(false);
    expect(isOnline({ online_at: null }, NOW)).toBe(false);
  });
  it('builds a short page list', () => {
    expect(pageRange(1, 3)).toEqual([1, 2, 3]);
    expect(pageRange(5, 20)).toEqual([1, 2, '…', 4, 5, 6, '…', 19, 20]);
    expect(pageRange(1, 20)).toEqual([1, 2, '…', 19, 20]);
  });
});

describe('admin users list', () => {
  it('shows 20 users per page and moves between pages', async () => {
    expect(PAGE).toBe(20);
    mount();
    await screen.findByText(/1–20 \/ 45/);
    expect(names()).toHaveLength(20);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    await screen.findByText(/21–40 \/ 45/);
    expect(names()).toHaveLength(20);
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    await screen.findByText(/41–45 \/ 45/);
    expect(names()).toHaveLength(5);
    expect((screen.getByRole('button', { name: /Keyingi/ }) as HTMLButtonElement).disabled).toBe(true);
  });

  it('puts the people who are online now on top, then the rest by the time they were last here', async () => {
    mount();
    await screen.findByText(/1–20 \/ 45/);
    const order = names();
    expect(order.slice(0, 3)).toEqual(['User 01', 'User 02', 'User 03']);
    expect(order[3]).toBe('User 04'); // 10 minutes ago
    expect(order[4]).toBe('User 05'); // 20 minutes ago
    expect(screen.getAllByText('Hozir onlayn').length).toBeGreaterThanOrEqual(3);
    expect(screen.getAllByText('10 daqiqa oldin').length).toBeGreaterThan(0);
  });

  it('filters to the people who are online now and shows how many', async () => {
    mount();
    await screen.findByText(/1–20 \/ 45/);
    expect(screen.getByText('3 kishi hozir onlayn')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /^Hozir onlayn/ }));
    await screen.findByText(/1–3 \/ 3/);
    expect(names()).toEqual(['User 01', 'User 02', 'User 03']);
  });

  it('"Oxirgi onlayn" leaves out people who never came', async () => {
    mount();
    await screen.findByText(/1–20 \/ 45/);
    fireEvent.click(screen.getByRole('button', { name: /^Oxirgi onlayn/ }));
    await screen.findByText(/\/ 40 ta natija/);
  });

  it('shows the statistics next to the list', async () => {
    mount();
    await screen.findByText(/1–20 \/ 45/);
    fireEvent.click(screen.getByRole('tab', { name: /Statistika/ }));
    await screen.findByText('Saytda kimlar bor?');
    const panel = screen.getByText('Hozir onlayn', { selector: 'div,span' });
    expect(panel).toBeTruthy();
    await waitFor(() => expect(screen.getByText('Eng faol o\'quvchilar')).toBeTruthy());
    expect(within(screen.getByText('Eng faol o\'quvchilar').closest('section')!).getByText('Top User')).toBeTruthy();
  });
});
