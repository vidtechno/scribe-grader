import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import type { LearningState } from '../api';

vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'uz', t: (k: string, v?: Record<string, unknown>) => `${k}${v ? JSON.stringify(v) : ''}` }) }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'u1' } }) }));
vi.mock('@tanstack/react-query', () => ({ useQueryClient: () => ({}) }));
let rewards: unknown;
vi.mock('../api', () => ({ useStreakRewards: () => ({ data: rewards }), useLearningState: () => ({ data: undefined }), claimStreakRewards: async () => ({}) }));

import { WeekCalendar, rewardKey } from './WeekCalendar';

const state = (current: number, doneToday: boolean) => ({
  today: '2026-11-11', streak: current, activity: [], access: { allowed: true, reason: 'trial' },
  streak_info: { current, best: current, done_today: doneToday, at_risk: !doneToday && current > 0, broken: false, days_left: 2 },
}) as unknown as LearningState;
const show = (s: LearningState) => render(<MemoryRouter><WeekCalendar state={s} /></MemoryRouter>);

describe('WeekCalendar', () => {
  it('shows seven days, the +1 button and the next reward while today is open', () => {
    rewards = { streak: 4, in_trial: true, paid: false, fresh: [], granted: [{ milestone: 3, kind: 'ai_questions', amount: 10 }], bonus_left: 10 };
    show(state(4, false));
    expect(screen.getAllByRole('listitem')).toHaveLength(7);
    expect(screen.getByRole('link', { name: /learn.week.cta/ }).getAttribute('href')).toBe('/learn/daily');
    expect(screen.getByText(/learn.week.next\{"n":3,"day":7\}/)).toBeTruthy();
  });
  it('drops the button once today is done and announces a fresh reward', () => {
    rewards = { streak: 3, in_trial: true, paid: false, fresh: [{ milestone: 3, kind: 'ai_questions', amount: 10 }], granted: [{ milestone: 3, kind: 'ai_questions', amount: 10 }], bonus_left: 10 };
    show(state(3, true));
    expect(screen.queryByRole('link', { name: /learn.week.cta/ })).toBeNull();
    expect(screen.getByRole('status').textContent).toContain('learn.week.won.ai_questions');
  });
  it('gives trial days at 7 only to people in the trial', () => {
    expect(rewardKey(7, true)).toBe('learn.week.reward.trial');
    expect(rewardKey(7, false)).toBe('learn.week.reward.ai');
    expect(rewardKey(14, true)).toBe('learn.week.reward.badge');
  });
});
