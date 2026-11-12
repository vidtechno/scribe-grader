import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('@/i18n', () => {
  const api = { lang: 'en', t: (k: string, v?: Record<string, unknown>) => `${k}${v ? JSON.stringify(v) : ''}` };
  return { useT: () => api };
});
const authValue = { user: { id: 'u1' } };
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => authValue }));
const navigate = vi.fn();
vi.mock('react-router-dom', async (orig) => ({ ...(await orig<typeof import('react-router-dom')>()), useNavigate: () => navigate }));
let current: unknown;
const rankFn = vi.fn();
vi.mock('../api', () => ({ useLearningState: () => ({ data: current }), callLearning: (...a: unknown[]) => rankFn(...a) }));

import { XpRankToast } from './XpRankToast';
import { setStreakModalOpen } from './celebrationBus';

const st = (xp: number) => ({ today: '2026-11-12', profile: { xp } });
const ranked = { week_xp: 120, rank: 4, total: 13, xp_to_next: 20, next_name: 'Madina', leader_xp: 400, all_time_rank: 3, visible: true };

/** Lets the exit animation finish, then checks the card is gone. */
async function gone() {
  for (let i = 0; i < 10; i++) await act(async () => { await vi.advanceTimersByTimeAsync(200); });
  expect(screen.queryByRole('status')).toBeNull();
}

function setup() {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  // A fresh element each time, so rerender() really re-renders the component.
  const ui = () => <QueryClientProvider client={qc}><MemoryRouter><XpRankToast /></MemoryRouter></QueryClientProvider>;
  return { ...render(ui()), ui };
}

describe('XpRankToast', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    localStorage.clear(); navigate.mockReset(); rankFn.mockReset(); rankFn.mockResolvedValue(ranked);
    setStreakModalOpen(false);
  });
  afterEach(() => { vi.useRealTimers(); });

  it('stays quiet on first load, shows after XP rises, navigates and hides', async () => {
    current = st(100);
    const { rerender, ui, container } = setup();
    await act(async () => { await vi.advanceTimersByTimeAsync(2000); });
    expect(rankFn).not.toHaveBeenCalled();
    expect(container.textContent).toBe('');

    current = st(130);
    rerender(ui());
    await act(async () => { await vi.advanceTimersByTimeAsync(1600); });
    expect(rankFn).toHaveBeenCalledWith('learning_my_rank');
    expect(screen.getByRole('status')).toBeTruthy();
    expect(screen.getByText(/learn.xpRank.close\{"n":20,"name":"Madina"\}/)).toBeTruthy();

    fireEvent.click(screen.getByRole('button', { name: /learn.xpRank.view/ }));
    expect(navigate).toHaveBeenCalledWith('/leaderboard');
    await gone();
  });

  it('shows the improvement pill and auto-hides after about seven seconds', async () => {
    localStorage.setItem('scorify-xprank:u1:2026-11-09', '7');
    current = st(100);
    const { rerender, ui } = setup();
    current = st(140);
    rerender(ui());
    await act(async () => { await vi.advanceTimersByTimeAsync(1600); });
    expect(screen.getByText(/learn.xpRank.moved\{"n":3\}/)).toBeTruthy();
    expect(localStorage.getItem('scorify-xprank:u1:2026-11-09')).toBe('4');
    await act(async () => { await vi.advanceTimersByTimeAsync(7500); });
    await gone();
  });

  it('can be dismissed, and waits while the streak modal is open', async () => {
    current = st(100);
    const { rerender, ui } = setup();
    setStreakModalOpen(true);
    current = st(110);
    rerender(ui());
    await act(async () => { await vi.advanceTimersByTimeAsync(2000); });
    expect(screen.queryByRole('status')).toBeNull();
    await act(async () => { setStreakModalOpen(false); await vi.advanceTimersByTimeAsync(800); });
    expect(screen.getByRole('status')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: 'learn.xpRank.close.aria' }));
    await gone();
  });
});
