import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queueRef = vi.hoisted(() => ({ data: null as unknown }));
const ids = ['u1-l1','u1-l2','u1-l3','u1-l4','u1-l5','u1-l6','u1-l7','u1-l8','u1-l9','u1-l10'];
const state = {
  profile: { level: 'beginner', xp: 100, trial_started_at: '', next_lesson_title: null },
  access: { allowed: true, reason: 'paid', plan: 'learn' }, streak: 1, today: '2026-10-11',
  progress: ids.map((id) => ({ lesson_id: id, best_score: 10, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-01' })),
  tests: [{ unit_id: 'u1', passed_at: '2026-10-01', attempts: 1, best_score: 18, best_total: 20, locked_until: null, last_attempt_at: null }], activity: [], drills: [],
};
vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: async () => ({ data: null, error: null }) } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'x' } }) }));
vi.mock('@/features/learn/useLessonAudio', () => ({ useLessonAudio: () => {} }));
vi.mock('@/components/SEOHead', () => ({ SEOHead: () => null }));
vi.mock('@/features/learn/api', async (orig) => ({ ...(await orig<object>()), useLearningState: () => ({ data: state, isLoading: false }), useRefreshLearning: () => async () => {},
  callLearning: async () => ({ xp: 10, stars: 3, streak: 1 }) }));
vi.mock('@/features/learn/engine/api', () => ({ useReviewQueue: () => ({ data: queueRef.data, isLoading: false }), loadSession: async () => [], recordReview: async () => null }));
vi.mock('@/features/learn/speech', async (orig) => ({ ...(await orig<object>()), speak: async () => {} }));

vi.mock('@/features/learn/components/ExerciseView', () => ({ ExerciseView: ({ onDone }: { onDone: (c: boolean) => void }) => <button type="button" onClick={() => onDone(true)}>ANSWER</button> }));

import LearnLesson from '@/pages/LearnLesson';

async function walk(label: string) {
  window.scrollTo = () => {};
  window.confirm = () => true;
  const qc = new QueryClient();
  render(<QueryClientProvider client={qc}><MemoryRouter initialEntries={['/learn/lesson/u2-l1']}><Routes><Route path="/learn/lesson/:id" element={<LearnLesson />} /></Routes></MemoryRouter></QueryClientProvider>);
  const click = async (re: RegExp) => { const b = await screen.findByRole('button', { name: re }); fireEvent.click(b); };
  await click(/Start the lesson/);
  for (let guard = 0; guard < 400; guard++) {
    await new Promise((r) => setTimeout(r, 5));
    const text = document.body.textContent ?? '';
    if (text.includes('Lesson complete') || text.includes('One more try needed')) break;
    const enabled = screen.queryAllByRole('button').filter((b) => !(b as HTMLButtonElement).disabled);
    const nav = enabled.find((b) => /^(Next|Go to the words|Go to practice|Start|Continue|Check what you remember|Extra words)/.test(b.textContent ?? ''));
    const btn = nav ?? enabled.find((b) => b.textContent === 'ANSWER');
    if (btn) { fireEvent.click(btn); continue; }
    break;
  }
  expect(document.body.textContent).toContain('Lesson complete');
  cleanup();
}

it('walks u2-l1 from start to the result screen', async () => { queueRef.data = null; await walk('fresh'); }, 60000);

// A learner who already knows every word of the lesson must not get a blank screen at the word step.
it('walks u2-l1 when all its words were already introduced', async () => {
  const { loadLesson } = await import('./course');
  const { lesson } = await loadLesson('u2-l1');
  queueRef.data = { new_target: 6, words: [], grammar: [], mistakes: [], known: lesson.words.map((w) => [w.en.toLowerCase(), 1, true]), stats: { mastered: 0, learning: 0, new: 0, seen: 0, due: 0, mistakes: 0, grammar_weak: 0 } };
  await walk('known');
}, 60000);
