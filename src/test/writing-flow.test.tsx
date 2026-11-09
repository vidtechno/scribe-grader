import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Exam from '@/pages/Exam';
import { MockWritingStep } from '@/components/MockWritingStep';
import { readDrafts, storeDraft, type WritingDraft } from '@/lib/writing-drafts';

const f = vi.hoisted(() => ({
  owner: 'alice', remaining: 1, save: vi.fn(), load: vi.fn(), invoke: vi.fn(), getUser: vi.fn(),
}));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: { id: f.owner }, refreshProfile: async () => {} }) }));
vi.mock('@/hooks/useSubscription', () => ({ useSubscription: () => ({ writingRemaining: f.remaining, refresh: async () => {} }) }));
vi.mock('@/components/Navbar', () => ({ Navbar: () => <nav>Navigation</nav> }));
vi.mock('@/components/PricingModal', () => ({ PricingModal: () => null }));
vi.mock('@/lib/analytics', () => ({ trackOnce: vi.fn(), PER_USER: 'user' }));
vi.mock('@/lib/function-errors', () => ({ functionError: async (e: Error) => e }));
vi.mock('@/i18n', () => ({ useT: () => ({ lang: 'en', t: (key: string) => key }) }));
vi.mock('@/integrations/supabase/client', () => ({ supabase: {
  auth: { getUser: (...args: unknown[]) => f.getUser(...args) },
  functions: { invoke: (...args: unknown[]) => f.invoke(...args) },
} }));
vi.mock('@/lib/writing-api', () => ({
  saveWritingAttempt: (...args: unknown[]) => f.save(...args),
  loadWritingAttempt: (...args: unknown[]) => f.load(...args),
  fromServer: (row: WritingDraft) => row,
  writingRpc: vi.fn(),
}));
const initial = (patch: Partial<WritingDraft> = {}): WritingDraft => ({
  id: 'attempt', userId: 'alice', mockId: null, task: 'Task 2', topic: 'Transport',
  text: 'word '.repeat(250).trim(), startedAt: Date.now() - 1000, deadline: Date.now() + 100_000,
  version: 0, serverVersion: 0, updatedAt: Date.now(), phase: 'writing', ...patch,
});
const view = () => <MemoryRouter initialEntries={['/exam?attempt=attempt']}><Routes>
  <Route path="/exam" element={<Exam />} /><Route path="/result/:id" element={<p>Saved result</p>} />
</Routes></MemoryRouter>;
async function resume() {
  render(view());
  fireEvent.click(await screen.findByRole('button', { name: 'writing.resume' }));
  return screen.findByRole('textbox', { name: 'ex.response' });
}
describe('Writing user flows', () => {
  beforeEach(() => {
    vi.useRealTimers(); localStorage.clear(); vi.clearAllMocks(); f.owner = 'alice'; f.remaining = 1;
    Object.defineProperty(navigator, 'onLine', { value: true, configurable: true });
    f.load.mockResolvedValue(null);
    f.getUser.mockImplementation(async () => ({ data: { user: { id: f.owner } } }));
    f.save.mockImplementation(async d => ({ ok: true, version: d.serverVersion + 1, deadline: d.deadline, startedAt: d.startedAt }));
    f.invoke.mockResolvedValue({ data: { state: 'completed' }, error: null });
  });
  afterEach(() => { cleanup(); vi.useRealTimers(); });
  it('keeps the expired answer visible when saving fails and never calls AI', async () => {
    storeDraft(initial({ deadline: Date.now() - 1 }));
    f.save.mockRejectedValue(new Error('writing.saveError'));
    const textarea = await resume();
    await waitFor(() => expect(screen.getByRole('button', { name: 'writing.retry' })).toBeEnabled());
    expect(textarea).toHaveValue(initial().text); expect(textarea).toHaveAttribute('readonly');
    expect(f.invoke).not.toHaveBeenCalled(); expect(readDrafts('alice')[0].text).toBe(initial().text);
    expect(screen.getByRole('button', { name: 'writing.copy' })).toBeVisible();
  });
  it('serializes Submit and expiry, waits for save, then reuses one attempt ID', async () => {
    storeDraft(initial({ deadline: Date.now() + 1500 }));
    let release!: () => void;
    f.save.mockImplementation(d => new Promise(resolve => { release = () => resolve({ ok: true, version: 1, deadline: d.deadline, startedAt: d.startedAt }); }));
    await resume();
    fireEvent.click(screen.getByRole('button', { name: 'ex.startEval' }));
    await waitFor(() => expect(f.save).toHaveBeenCalledTimes(1));
    expect(f.invoke).not.toHaveBeenCalled();
    await act(async () => { await new Promise(r => setTimeout(r, 1600)); });
    expect(f.save).toHaveBeenCalledTimes(1);
    await act(async () => release());
    expect(await screen.findByText('Saved result')).toBeVisible();
    expect(f.invoke).toHaveBeenCalledTimes(1);
    expect(f.invoke).toHaveBeenCalledWith('grade-essay-v2', { body: { attemptId: 'attempt' } });
    expect(readDrafts('alice')).toHaveLength(0);
  });
  it.each(['writing.session', 'quota exhausted', 'AI unavailable'])('preserves the draft after %s', async error => {
    storeDraft(initial());
    f.invoke.mockResolvedValue({ data: null, error: new Error(error) });
    await resume(); fireEvent.click(screen.getByRole('button', { name: 'ex.startEval' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'writing.retry' })).toBeEnabled());
    expect(screen.getByRole('textbox', { name: 'ex.response' })).toHaveValue(initial().text);
    expect(readDrafts('alice')[0].text).toBe(initial().text);
  });
  it('preserves the essay when the session changes before the final save', async () => {
    storeDraft(initial());
    f.getUser.mockResolvedValue({ data: { user: { id: 'bob' } } });
    await resume(); fireEvent.click(screen.getByRole('button', { name: 'ex.startEval' }));
    await waitFor(() => expect(screen.getByText('writing.session')).toBeVisible());
    expect(f.save).not.toHaveBeenCalled(); expect(f.invoke).not.toHaveBeenCalled();
    expect(readDrafts('alice')[0].text).toBe(initial().text);
  });
  it('keeps under-length answers at expiry without sending a save or AI request', async () => {
    storeDraft(initial({ text: 'Too short', deadline: Date.now() - 1 }));
    await resume();
    await waitFor(() => expect(screen.getByText('ex.minWordsErr')).toBeVisible());
    expect(f.invoke).not.toHaveBeenCalled(); expect(readDrafts('alice')[0].text).toBe('Too short');
  });
  it('unmounting an account never exposes its writing to the next account', async () => {
    storeDraft(initial()); const ui = render(view());
    await screen.findByText(initial().text);
    f.owner = 'bob'; f.load.mockRejectedValue(new Error('ex.draftUnavailable'));
    ui.rerender(view());
    await waitFor(() => expect(screen.queryByText(initial().text)).not.toBeInTheDocument());
    expect(readDrafts('bob')).toHaveLength(0);
  });
  it('mock Writing cannot advance if its final server save fails', async () => {
    const onSaved = vi.fn();
    storeDraft(initial({ mockId: 'mock', task: 'Task 1' }));
    f.save.mockRejectedValue(new Error('writing.saveError'));
    render(<MockWritingStep userId="alice" mockId="mock" task="Task 1" topic="Chart" serverText="" onSaved={onSaved} />);
    fireEvent.click(await screen.findByRole('button', { name: 'writing.resume' }));
    fireEvent.click(screen.getByRole('button', { name: 'mock.exam.saveContinue' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'writing.retry' })).toBeEnabled());
    expect(onSaved).not.toHaveBeenCalled();
    expect(readDrafts('alice').find(d => d.mockId === 'mock')?.text).toBe(initial().text);
  });
  it('mock Writing advances only after an acknowledged atomic final save', async () => {
    const onSaved = vi.fn();
    storeDraft(initial({ mockId: 'mock', task: 'Task 1' }));
    render(<MockWritingStep userId="alice" mockId="mock" task="Task 1" topic="Chart" serverText="" onSaved={onSaved} />);
    fireEvent.click(await screen.findByRole('button', { name: 'writing.resume' }));
    fireEvent.click(screen.getByRole('button', { name: 'mock.exam.saveContinue' }));
    await waitFor(() => expect(onSaved).toHaveBeenCalledTimes(1));
    expect(f.save.mock.calls[1][1]).toBe(true);
    expect(readDrafts('alice').filter(d => d.mockId === 'mock')).toHaveLength(0);
  });
});
