import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const holder = vi.hoisted(() => ({ state: null as null | Record<string, unknown> }));

vi.mock('@/features/learn/api', async (original) => ({
  ...(await original<object>()),
  useLearningState: () => ({ data: holder.state, isLoading: false }),
}));

import { LearnHero } from './LearnHero';

const renderHero = (hasIeltsActivity = false) => render(
  <MemoryRouter>
    <LearnHero hasIeltsActivity={hasIeltsActivity} onUpgrade={() => {}} onWriting={() => {}} onSpeaking={() => {}} />
  </MemoryRouter>,
);

describe('dashboard learning decision area', () => {
  beforeEach(() => { holder.state = null; });

  it('gives a new user equal English and IELTS starting paths', () => {
    renderHero();
    expect(screen.getByRole('heading', { name: 'What do you want to achieve today?' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Start a quick lesson/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Choose IELTS practice/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Take the 5-minute level check/ })).toHaveAttribute('href', '/learn/start');
  });

  it('shows returning learners one continuation action and visible IELTS skills', () => {
    holder.state = {
      profile: { level: 'beginner', xp: 20, trial_started_at: '', next_lesson_title: null, daily_goal_xp: 30 },
      access: { allowed: true, reason: 'paid', plan: 'learn' },
      streak: 2,
      today: '2026-11-07',
      goal: { daily_goal_xp: 30, today_xp: 10 },
      progress: [{ lesson_id: 'u1-l1', best_score: 8, total: 10, stars: 2, attempts: 1, completed_at: '2026-11-06' }],
      drills: [], tests: [], activity: [],
    };
    renderHero();
    expect(screen.getByRole('heading', { name: 'What will you practise today?' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue lesson/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Reading' })).toHaveAttribute('href', '/reading');
  });
});
