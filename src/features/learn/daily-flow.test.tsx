import { it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const ids = ['u1-l1', 'u1-l2', 'u1-l3', 'u1-l4', 'u1-l5'];
const recorded = vi.hoisted(() => ({ calls: [] as unknown[][] }));
const state = {
  profile: { level: 'beginner', xp: 100, trial_started_at: '', next_lesson_title: null },
  access: { allowed: true, reason: 'paid', plan: 'learn' }, streak: 1, today: '2026-10-21',
  progress: ids.map((id) => ({ lesson_id: id, best_score: 10, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-01' })),
  tests: [], activity: [], drills: [],
};
vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: async () => ({ data: null, error: null }) } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'learner-1' } }) }));
vi.mock('@/features/learn/useLessonAudio', () => ({ useLessonAudio: () => {} }));
vi.mock('@/components/SEOHead', () => ({ SEOHead: () => null }));
vi.mock('@/components/Navbar', () => ({ Navbar: () => null }));
vi.mock('@/features/learn/components/SpeakButton', () => ({ SpeakButton: () => null }));
vi.mock('@/features/learn/api', async (orig) => ({ ...(await orig<object>()), useLearningState: () => ({ data: state, isLoading: false }), useRefreshLearning: () => async () => {}, callLearning: async () => ({}) }));
vi.mock('@/features/learn/engine/api', () => ({
  useReviewQueue: () => ({ data: null, isLoading: false }), loadSession: async () => [],
  recordReview: async (...a: unknown[]) => { recorded.calls.push(a); return null; },
}));
vi.mock('@/features/learn/components/ExerciseView', () => ({ ExerciseView: ({ onDone }: { onDone: (c: boolean) => void }) => <button type="button" onClick={() => onDone(true)}>ANSWER</button> }));

import LearnDaily from '@/pages/LearnDaily';
import { isDailyDone } from './daily';

beforeEach(() => { localStorage.clear(); recorded.calls.length = 0; });

it('shows three words and a sentence, runs the quiz, records it as a review and marks the day done', async () => {
  window.scrollTo = () => {};
  render(<QueryClientProvider client={new QueryClient()}><MemoryRouter initialEntries={['/learn/daily']}><Routes><Route path="/learn/daily" element={<LearnDaily />} /></Routes></MemoryRouter></QueryClientProvider>);
  const start = await screen.findByRole('button', { name: /Start the quiz/ });
  expect(document.body.textContent).toContain('Words of the day');
  expect(isDailyDone('learner-1', '2026-10-21')).toBe(false);
  fireEvent.click(start);
  for (let guard = 0; guard < 60; guard++) {
    const b = await screen.findByRole('button', { name: 'ANSWER' }).catch(() => null);
    if (!b) break;
    fireEvent.click(b);
    await new Promise((r) => setTimeout(r, 5));
  }
  await waitFor(() => expect(isDailyDone('learner-1', '2026-10-21')).toBe(true));
  expect(recorded.calls.length).toBe(1);
  const [events, award] = recorded.calls[0] as [{ t: string; r: string }[], boolean];
  expect(award).toBe(true);
  expect(events.length).toBeGreaterThanOrEqual(3);
  expect(events.every((e) => e.t === 'w' && e.r === 'right')).toBe(true);
  cleanup();
}, 30000);
