import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { LearningState } from '../api';

vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'en', t: (k: string, v?: Record<string, unknown>) => `${k}${v ? JSON.stringify(v) : ''}` }) }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'u1' } }) }));
let current: unknown;
vi.mock('../api', () => ({ useLearningState: () => ({ data: current }) }));

import { StreakCelebration, weekDots } from './StreakCelebration';
import { StreakGuard } from './StreakGuard';

const state = (over: Partial<NonNullable<LearningState['streak_info']>>, activity: LearningState['activity'] = []) => ({
  today: '2026-11-11', streak: over.current ?? 0, activity,
  streak_info: { current: 0, best: 0, done_today: false, at_risk: false, broken: false, days_left: 3, ...over },
}) as unknown as LearningState;

describe('weekDots', () => {
  it('marks the days with XP and always today when done', () => {
    const dots = weekDots(state({ done_today: true }, [{ day: '2026-11-09', xp: 20, lessons: 1, seconds: 1, correct: 1, answered: 1 }]));
    expect(dots).toHaveLength(7);
    expect(dots[6]).toMatchObject({ today: true, done: true });
    expect(dots[4].done).toBe(true);
    expect(dots[3].done).toBe(false);
  });
});

describe('StreakGuard', () => {
  const show = (s: LearningState) => render(<MemoryRouter><StreakGuard state={s} /></MemoryRouter>);
  it('warns when a streak is at risk, with a stronger message on the last day', () => {
    show(state({ current: 5, at_risk: true, days_left: 2 }));
    expect(screen.getByText(/learn.guard.title/)).toBeTruthy();
  });
  it('says last chance on the final day', () => {
    show(state({ current: 5, at_risk: true, days_left: 1 }));
    expect(screen.getByText(/learn.guard.lastTitle/)).toBeTruthy();
  });
  it('shows nothing once today is done', () => {
    const { container } = show(state({ current: 5, at_risk: true, done_today: true }));
    expect(container.textContent).toBe('');
  });
  it('invites a new streak after a break', () => {
    show(state({ current: 0, best: 12, broken: true }));
    expect(screen.getByText(/learn.guard.brokenTitle/)).toBeTruthy();
  });
});

describe('StreakCelebration', () => {
  it('appears when today becomes done and the streak goes up, and only once a day', () => {
    sessionStorage.clear();
    current = state({ current: 4, at_risk: true });
    const { rerender, container } = render(<StreakCelebration />);
    expect(container.textContent).toBe('');
    current = state({ current: 5, done_today: true });
    rerender(<StreakCelebration />);
    expect(screen.getByRole('dialog')).toBeTruthy();
  });
  it('stays quiet when the page loads with today already done', () => {
    sessionStorage.clear();
    current = state({ current: 5, done_today: true });
    const { container } = render(<StreakCelebration />);
    expect(container.textContent).toBe('');
  });
});
