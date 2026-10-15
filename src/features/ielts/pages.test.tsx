import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: vi.fn(async () => ({ error: null })) } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: 'u1' } }) }));
let premium = true;
vi.mock('@/hooks/useSubscription', () => ({ useSubscription: () => ({ isPremium: premium }) }));
vi.mock('@/components/Navbar', () => ({ Navbar: () => null }));
vi.mock('@/components/PricingModal', () => ({ PricingModal: ({ open }: { open: boolean }) => (open ? <div>pricing</div> : null) }));
vi.mock('@/components/SEOHead', () => ({ SEOHead: () => null }));
const saved: unknown[] = [];
vi.mock('./useAttempts', () => ({ saveAttempt: vi.fn(async (a: unknown) => { saved.push(a); }), useAttempts: () => ({ data: [] }) }));

import ReadingTestPage from '@/pages/ReadingTest';
import ListeningTestPage from '@/pages/ListeningTest';
import r1 from './reading/r1';
import l1 from './listening/l1';

const open = (path: string, el: React.ReactElement, route: string) => render(<MemoryRouter initialEntries={[path]}><Routes><Route path={route} element={el} /></Routes></MemoryRouter>);
window.scrollTo = vi.fn();
afterEach(() => { cleanup(); saved.length = 0; premium = true; });

describe('reading test page', () => {
  it('runs a full test, scores it and saves the attempt', async () => {
    open('/reading/r1', <ReadingTestPage />, '/reading/:id');
    fireEvent.click(await screen.findByText(/Full test/));
    expect(await screen.findByText(r1.passages[0].title)).toBeTruthy();
    // answer the first question (true/false/not given) with the right key and finish
    const first = r1.passages[0].groups[0];
    const key = (first.items[0] as { a: string }).a;
    const label = key === 'true' ? 'TRUE' : key === 'false' ? 'FALSE' : 'NOT GIVEN';
    fireEvent.click(screen.getAllByRole('radio', { name: label })[0]);
    window.confirm = () => true;
    fireEvent.click(screen.getByText('Finish'));
    expect(await screen.findByText(/Estimated band/)).toBeTruthy();
    await waitFor(() => expect(saved).toHaveLength(1));
    expect((saved[0] as { correct: number; total: number }).total).toBe(40);
    expect((saved[0] as { correct: number }).correct).toBe(1);
  });

  it('locks paid tests for free users', async () => {
    premium = false;
    open('/reading/r2', <ReadingTestPage />, '/reading/:id');
    expect(await screen.findByText(/Test 1 is free/)).toBeTruthy();
    expect(screen.queryByText(/Full test/)).toBeNull();
  });
});

describe('listening test page', () => {
  it('shows the audio player and questions, then the transcript in the review', async () => {
    open('/listening/l1', <ListeningTestPage />, '/listening/:id');
    fireEvent.click(await screen.findByText(/Practice mode/));
    expect(await screen.findByLabelText('Audio position')).toBeTruthy();
    expect(screen.getByText(/Questions 1–10/)).toBeTruthy();
    window.confirm = () => true;
    fireEvent.click(screen.getAllByText('Finish')[0]);
    expect(await screen.findByText(/Estimated band/)).toBeTruthy();
    expect(screen.getAllByText('Transcript').length).toBe(4);
    await waitFor(() => expect(saved).toHaveLength(1));
    expect((saved[0] as { skill: string; correct: number }).skill).toBe('listening');
    expect(l1.sections).toHaveLength(4);
  });
});
