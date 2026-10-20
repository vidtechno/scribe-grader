import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const state = {
  profile: { level: 'a1', xp: 100, trial_started_at: '', next_lesson_title: null, placement_status: 'none' },
  access: { allowed: true, reason: 'paid', plan: 'learn' }, streak: 1, today: '2026-10-21',
  progress: [], tests: [], activity: [], drills: [],
};
const chain: Record<string, unknown> = {};
for (const k of ['select', 'eq', 'order', 'limit', 'in', 'neq']) chain[k] = () => chain;
chain.maybeSingle = async () => ({ data: null, error: null });
chain.then = (res: (v: unknown) => unknown) => Promise.resolve({ data: [], error: null }).then(res);
vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: async () => ({ data: null, error: null }), from: () => chain } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'u1' }, profile: null }) }));
vi.mock('@/components/SEOHead', () => ({ SEOHead: () => null }));
vi.mock('@/components/Navbar', () => ({ Navbar: () => null }));
vi.mock('@/components/TelegramConnectCard', () => ({ TelegramConnectModal: () => null }));
vi.mock('@/features/learn/api', async (orig) => ({ ...(await orig<object>()), useLearningState: () => ({ data: state, isLoading: false, error: null }), useRefreshLearning: () => async () => {} }));
vi.mock('@/features/learn/engine/api', () => ({ useReviewQueue: () => ({ data: null, isLoading: false }), loadSession: async () => [], recordReview: async () => null }));

import Learn from '@/pages/Learn';

it('an Elementary learner can open the Beginner tab and sees its lessons open', async () => {
  window.scrollTo = () => {};
  render(<QueryClientProvider client={new QueryClient()}><MemoryRouter initialEntries={['/learn']}><Routes><Route path="/learn" element={<Learn />} /></Routes></MemoryRouter></QueryClientProvider>);
  const beginner = await screen.findByRole('tab', { name: /Beginner/ });
  expect(screen.getByRole('tab', { name: /Elementary/ })).toBeTruthy();
  expect(screen.getAllByRole('tab', { name: /Intermediate/ }).length).toBeGreaterThan(0);
  fireEvent.click(beginner);
  expect(await screen.findByText(/below the one you started at/)).toBeTruthy();
  expect(document.body.textContent).toContain('Alifbo va tovushlar');
  cleanup();
});
