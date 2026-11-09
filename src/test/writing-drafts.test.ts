import { beforeEach, describe, expect, it, vi } from 'vitest';
import { DraftConflict, SERVER_SAVE_MS, WritingDraftWriter, draftKey, readDrafts, remainingSeconds, storeDraft, type WritingDraft } from '@/lib/writing-drafts';

const draft = (patch: Partial<WritingDraft> = {}): WritingDraft => ({
  id: 'attempt-1', userId: 'alice', mockId: null, task: 'Task 2', topic: 'Transport',
  text: 'My saved answer', startedAt: 1000, deadline: 2_401_000,
  updatedAt: 1000, version: 0, serverVersion: 0, phase: 'writing', ...patch,
});
const ack = (d: WritingDraft) => ({ ok: true as const, version: d.serverVersion + 1, deadline: d.deadline, startedAt: d.startedAt });
describe('Writing recovery and save coordination', () => {
  beforeEach(() => { localStorage.clear(); vi.useRealTimers(); });
  it('reload preserves the deadline and does not restart a 40-minute timer', () => {
    storeDraft(draft());
    const restored = readDrafts('alice')[0];
    expect(remainingSeconds(restored, 1_201_000)).toBe(1200);
    expect(remainingSeconds(restored, 3_000_000)).toBe(0);
  });
  it('isolates accounts, ordinary attempts, mock IDs and tasks', () => {
    const all = [draft(), draft({ userId: 'bob' }), draft({ id: 'a2' }),
      draft({ mockId: 'm1' }), draft({ mockId: 'm2' }), draft({ mockId: 'm1', task: 'Task 1' })];
    all.forEach(d => storeDraft(d));
    expect(new Set(all.map(draftKey)).size).toBe(6);
    expect(readDrafts('alice')).toHaveLength(5);
    expect(readDrafts('bob')).toHaveLength(1);
    expect(readDrafts('unknown')).toEqual([]);
  });
  it('retains local edits offline and retries on reconnect without creating another attempt', async () => {
    const send = vi.fn().mockRejectedValueOnce(new Error('offline')).mockImplementation(async d => ack(d));
    const writer = new WritingDraftWriter(draft(), send);
    await expect(writer.save(true)).rejects.toThrow('offline');
    expect(readDrafts('alice')[0].text).toBe('My saved answer');
    writer.update({ text: 'More work while offline' });
    await writer.save(true);
    expect(send.mock.calls.map(([d]) => d.id)).toEqual(['attempt-1', 'attempt-1']);
    expect(writer.saved).toBe(true);
  });
  it('ignores empty drafts and caps background writes to one per 25 seconds', async () => {
    vi.useFakeTimers(); vi.setSystemTime(100_000);
    const send = vi.fn(async d => ack(d));
    const writer = new WritingDraftWriter(draft({ text: '' }), send);
    await writer.save(); expect(send).not.toHaveBeenCalled();
    writer.update({ text: 'First' }); await writer.save();
    writer.update({ text: 'Second' }); await writer.save(); expect(send).toHaveBeenCalledTimes(1);
    vi.advanceTimersByTime(SERVER_SAVE_MS); await writer.save(); expect(send).toHaveBeenCalledTimes(2);
    await writer.save(); expect(send).toHaveBeenCalledTimes(2);
    vi.useRealTimers();
  });
  it('serializes a delayed autosave and a final flush, never overwriting newer text', async () => {
    let release!: (v: ReturnType<typeof ack>) => void;
    const send = vi.fn().mockImplementationOnce(() => new Promise(r => { release = r; }))
      .mockImplementation(async d => ack(d));
    const writer = new WritingDraftWriter(draft(), send);
    const saving = writer.save(true);
    writer.update({ text: 'The final, newer answer' }); writer.local();
    const final = writer.save(true);
    expect(send).toHaveBeenCalledTimes(1);
    release(ack(draft())); await Promise.all([saving, final]);
    expect(send).toHaveBeenCalledTimes(2);
    expect(send.mock.calls[1][0].serverVersion).toBe(1);
    expect(writer.current.text).toBe('The final, newer answer');
    expect(readDrafts('alice')[0].text).toBe('The final, newer answer');
  });
  it('does not silently overwrite a newer account version', async () => {
    const remote = draft({ text: 'Other device', serverVersion: 5 });
    const writer = new WritingDraftWriter(draft(), async () => ({ ok: false, remote }));
    await expect(writer.save(true)).rejects.toBeInstanceOf(DraftConflict);
    expect(writer.current.text).toBe('My saved answer');
    writer.resolve(true); expect(writer.current.serverVersion).toBe(5);
    expect(writer.current.text).toBe('My saved answer');
  });
  it.each(['writing.session', 'quota', 'grading failure'])('keeps the local copy after %s', async message => {
    const writer = new WritingDraftWriter(draft({ phase: 'expired' }), async () => { throw new Error(message); });
    await expect(writer.save(true)).rejects.toThrow(message);
    expect(readDrafts('alice')[0].phase).toBe('expired');
    expect(readDrafts('alice')[0].text).toBe('My saved answer');
  });
  it('does not resurrect a completed draft during unmount or a late acknowledgement', async () => {
    const persist = vi.fn();
    const writer = new WritingDraftWriter(draft(), async d => ack(d), persist);
    writer.disposed = true; writer.local(); await writer.save(true);
    expect(persist).not.toHaveBeenCalled();
  });
});
