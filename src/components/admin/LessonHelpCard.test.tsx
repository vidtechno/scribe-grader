import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

vi.mock('./adminApi', () => ({
  LEVEL_LABEL: {},
  adminRpc: vi.fn(async () => ({
    periods: {
      today: { users: 5, questions: 12, input_tokens: 9000, output_tokens: 3000, tokens: 12000, cost_usd: 0.0034 },
      yesterday: { users: 3, questions: 7, input_tokens: 5000, output_tokens: 2000, tokens: 7000, cost_usd: 0.002 },
      d7: { users: 20, questions: 60, input_tokens: 40000, output_tokens: 15000, tokens: 55000, cost_usd: 0.0161 },
      d30: { users: 40, questions: 140, input_tokens: 100000, output_tokens: 40000, tokens: 140000, cost_usd: 0.039 },
    },
    daily: [{ day: '2026-11-11', users: 3, questions: 7, tokens: 7000 }, { day: '2026-11-12', users: 5, questions: 12, tokens: 12000 }],
    top_lessons: [{ lesson: 'u2-l4', questions: 9, users: 4 }],
    limits_today: { lesson_limit_users: 2, day_limit_users: 1 },
  })),
}));

import { LessonHelpCard } from './LearningTab';

describe('AI tutor statistics card', () => {
  it('shows users and tokens for today, yesterday, 7 and 30 days', async () => {
    render(<QueryClientProvider client={new QueryClient()}><LessonHelpCard /></QueryClientProvider>);
    expect(await screen.findByText('Foydalanuvchilar')).toBeTruthy();
    for (const label of ['Bugun', 'Kecha', 'Oxirgi 7 kun', 'Oxirgi 30 kun']) expect(screen.getByText(label)).toBeTruthy();
    expect(screen.getByText('12 000')).toBeTruthy();   // tokens today
    expect(screen.getByText('140 000')).toBeTruthy();  // tokens, 30 days
    expect(screen.getByText('u2-l4')).toBeTruthy();
  });
});
