import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const submitted = vi.hoisted(() => ({ calls: [] as { fn: string; args: Record<string, unknown> }[], pattern: (_n: number) => true, n: 0 }));
const state = {
  profile: { level: 'beginner', xp: 0, trial_started_at: '', next_lesson_title: null },
  access: { allowed: true, reason: 'paid', plan: 'learn' }, streak: 0, today: '2026-10-11', progress: [], tests: [], activity: [], drills: [],
};
vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: async () => ({ data: null, error: null }) } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'x' } }) }));
vi.mock('@/features/learn/useLessonAudio', () => ({ useLessonAudio: () => {} }));
vi.mock('@/components/SEOHead', () => ({ SEOHead: () => null }));
vi.mock('@/features/learn/components/CertificateDialog', () => ({ CertificateDialog: () => null }));
vi.mock('@/features/learn/api', async (orig) => ({ ...(await orig<object>()), useLearningState: () => ({ data: state, isLoading: false }), useRefreshLearning: () => async () => {},
  callLearning: async (fn: string, args: Record<string, unknown>) => { submitted.calls.push({ fn, args }); return { passed: (args._score as number) * 100 >= 70 * (args._total as number), advanced: false, next_level: null, xp: 0 }; } }));
vi.mock('@/features/learn/components/ExerciseView', () => ({ ExerciseView: ({ onDone }: { onDone: (c: boolean) => void }) => (
  <><button type="button" onClick={() => onDone(submitted.pattern(submitted.n++))}>ANSWER</button></>) }));
vi.mock('@/features/learn/components/TestShell', () => ({ TestShell: ({ children }: { children: React.ReactNode }) => <div>{children}</div>, MistakeReview: () => null }));

import { BeginnerExam } from '@/pages/LearnBeginnerExam';

async function run(pattern: (n: number) => boolean) {
  submitted.calls = []; submitted.pattern = pattern; submitted.n = 0;
  render(<MemoryRouter><BeginnerExam /></MemoryRouter>);
  fireEvent.click(await screen.findByRole('button', { name: /Imtihonni boshlash/ }));
  for (let n = 0; n < 20; n++) fireEvent.click(await screen.findByRole('button', { name: 'ANSWER' }));
  await screen.findByText(/Ko'nikmalar bo'yicha/);
}

it('the Beginner exam asks 20 questions, shows every skill and passes a perfect run', async () => {
  await run(() => true);
  expect(submitted.calls).toHaveLength(1);
  expect(submitted.calls[0].args).toMatchObject({ _level: 'beginner', _score: 20, _total: 20 });
  expect(document.body.textContent).toContain('Beginner tugallandi');
  for (const label of ['Grammatika', "Lug'at", "O'qish", 'Tinglash', 'Yozish']) expect(document.body.textContent).toContain(label);
  cleanup();
});

it('a failing run is reported as not passed and lists lessons to revisit', async () => {
  await run(() => false);
  expect(submitted.calls[0].args).toMatchObject({ _score: 0, _total: 20 });
  expect(document.body.textContent).toContain("Bu safar o'tmadi");
  expect(document.body.textContent).toContain('Qaysi darslarni takrorlash foydali');
  cleanup();
});

it('a weak skill keeps the exam below the pass mark even when the total is high', async () => {
  // reading is the 3rd block of 4 questions (questions 9–12): all wrong, everything else right → 16/20
  await run((n) => !(n >= 8 && n < 12));
  const sent = submitted.calls[0].args._score as number;
  expect(sent).toBeLessThan(14);
  expect(document.body.textContent).toContain("O'qish");
  expect(document.body.textContent).toContain("ga yetmadi");
  cleanup();
});
