import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const calls = vi.hoisted(() => ({ list: [] as { fn: string; args: Record<string, unknown> }[], profile: false, right: true }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: async () => ({ data: null, error: null }) } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'x' } }) }));
vi.mock('@/features/learn/useLessonAudio', () => ({ useLessonAudio: () => {} }));
vi.mock('@/components/SEOHead', () => ({ SEOHead: () => null }));
vi.mock('@/features/learn/api', async (orig) => ({ ...(await orig<object>()),
  useLearningState: () => ({ data: calls.profile ? { profile: { level: 'beginner', xp: 0 }, access: { allowed: true }, progress: [], tests: [], activity: [], drills: [] } : { profile: null, access: { allowed: true } }, isLoading: false }),
  useRefreshLearning: () => async () => {},
  callLearning: async (fn: string, args: Record<string, unknown>) => { calls.list.push({ fn, args }); return { passed: true, advanced: true }; } }));
vi.mock('@/features/learn/components/ExerciseView', () => ({ ExerciseView: ({ onDone }: { onDone: (c: boolean) => void }) => <button type="button" onClick={() => onDone(calls.right)}>ANSWER</button> }));
vi.mock('@/features/learn/components/TestShell', () => ({ TestShell: ({ children }: { children: React.ReactNode }) => <div>{children}</div> }));

import LearnLevelCheck from '@/pages/LearnLevelCheck';

async function take(path: string, route: string) {
  render(<MemoryRouter initialEntries={[path]}><Routes><Route path={route} element={<LearnLevelCheck />} /><Route path="/learn" element={<p>COURSE</p>} /></Routes></MemoryRouter>);
  fireEvent.click(await screen.findByRole('button', { name: /Testni boshlash/ }));
  for (let n = 0; n < 15; n++) fireEvent.click(await screen.findByRole('button', { name: 'ANSWER' }, { timeout: 8000 }));
}

it('a first-time learner who knows everything is placed at Intermediate', async () => {
  calls.list = []; calls.profile = false; calls.right = true;
  await take('/learn/start', '/learn/start');
  expect(await screen.findByRole('heading', { name: 'Intermediate' })).toBeTruthy();
  fireEvent.click(await screen.findByRole('button', { name: /^Intermediate'dan boshlash$/ }));
  expect(await screen.findByText('COURSE')).toBeTruthy();
  expect(calls.list.at(-1)).toMatchObject({ fn: 'learning_start_placed', args: { _level: 'b1', _score: 15, _total: 15 } });
  cleanup();
}, 30000);

it('a first-time learner who answers nothing is placed at Beginner', async () => {
  calls.list = []; calls.profile = false; calls.right = false;
  await take('/learn/start', '/learn/start');
  expect(await screen.findByText(/Beginner'dan boshlash$/)).toBeTruthy();
  fireEvent.click(await screen.findByRole('button', { name: /^Beginner'dan boshlash$/ }));
  await screen.findByText('COURSE');
  expect(calls.list.at(-1)).toMatchObject({ fn: 'learning_start_placed', args: { _level: 'beginner', _score: 0 } });
  cleanup();
}, 30000);

it('a learner who started too low moves up with the quick test', async () => {
  calls.list = []; calls.profile = true; calls.right = true;
  await take('/learn/upgrade/a1', '/learn/upgrade/:level');
  expect(await screen.findByText(/Elementary ochildi/)).toBeTruthy();
  expect(calls.list.at(-1)).toMatchObject({ fn: 'learning_upgrade_level', args: { _level: 'a1', _score: 15, _total: 15 } });
  cleanup();
}, 30000);
