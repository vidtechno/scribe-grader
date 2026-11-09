/** Writing text stays in this account-scoped store, never in analytics or logs. */
export type WritingTask = 'Task 1' | 'Task 2';
export interface WritingDraft {
  id: string;
  userId: string;
  mockId: string | null;
  task: WritingTask;
  topic: string;
  text: string;
  startedAt: number | null;
  deadline: number | null;
  updatedAt: number;
  version: number;
  serverVersion: number;
  phase: 'writing' | 'submitting' | 'expired';
}
export const SERVER_SAVE_MS = 25_000;
export const LOCAL_SAVE_MS = 300;
const PREFIX = 'scorify:writing:v1:';
export const draftKey = (d: Pick<WritingDraft, 'userId' | 'mockId' | 'task' | 'id'>) =>
  `${PREFIX}${d.userId}:${d.mockId ? `mock:${d.mockId}:${d.task}` : `exam:${d.id}`}`;
export function remainingSeconds(d: WritingDraft, now = Date.now()) {
  return d.deadline === null ? (d.task === 'Task 1' ? 1200 : 2400) : Math.max(0, Math.ceil((d.deadline - now) / 1000));
}
export function readDrafts(userId: string, storage: Storage = localStorage): WritingDraft[] {
  const found: WritingDraft[] = [];
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    if (!key?.startsWith(`${PREFIX}${userId}:`) || key.includes(':backup:')) continue;
    try {
      const d = JSON.parse(storage.getItem(key) || 'null');
      if (d?.userId === userId && typeof d.id === 'string' && typeof d.text === 'string' &&
          (d.task === 'Task 1' || d.task === 'Task 2') && Number.isInteger(d.serverVersion)) found.push(d);
    } catch { /* A corrupt entry must not break other drafts. */ }
  }
  return found.sort((a, b) => b.updatedAt - a.updatedAt);
}
export function storeDraft(d: WritingDraft, storage: Storage = localStorage) {
  storage.setItem(draftKey(d), JSON.stringify(d)); // caller must surface storage/quota failures
}
export function removeDraft(d: WritingDraft, storage: Storage = localStorage) {
  storage.removeItem(draftKey(d));
  const prefix = `${draftKey(d)}:backup:`;
  for (let i = storage.length - 1; i >= 0; i--) {
    const key = storage.key(i);
    if (key?.startsWith(prefix)) storage.removeItem(key);
  }
}
export function backupDraft(d: WritingDraft, storage: Storage = localStorage) {
  storage.setItem(`${draftKey(d)}:backup:${Date.now()}:${crypto.randomUUID()}`, JSON.stringify(d));
}
export type SaveReply = { ok: true; version: number; deadline: number | null; startedAt: number | null } |
  { ok: false; remote: WritingDraft };
export class DraftConflict extends Error {
  constructor(public remote: WritingDraft) { super('writing.conflict'); }
}
const contentKey = (d: WritingDraft) => JSON.stringify([d.text, d.topic, d.startedAt, d.deadline, d.phase]);

/** One in-flight write. An acknowledgement only acknowledges the snapshot that was sent. */
export class WritingDraftWriter {
  current: WritingDraft;
  disposed = false;
  conflict: WritingDraft | null = null;
  private acknowledged: string | null;
  private flight: Promise<void> | null = null;
  private lastSend = 0;
  constructor(initial: WritingDraft, private send: (d: WritingDraft) => Promise<SaveReply>,
    private persist: (d: WritingDraft) => void = storeDraft, alreadySaved = false) {
    this.current = initial;
    this.acknowledged = alreadySaved ? contentKey(initial) : null;
  }
  update(patch: Partial<Pick<WritingDraft, 'text' | 'topic' | 'startedAt' | 'deadline' | 'phase'>>) {
    this.current = { ...this.current, ...patch, version: this.current.version + 1, updatedAt: Date.now() };
  }
  local() { if (!this.disposed) this.persist(this.current); }
  get saved() { return this.acknowledged === contentKey(this.current); }
  async save(force = false): Promise<void> {
    if (this.disposed) return;
    this.local(); // local durability precedes every network action
    if (this.flight) {
      await this.flight;
      if (force && !this.saved) return this.save(true);
      return;
    }
    if (this.conflict) throw new DraftConflict(this.conflict);
    if (this.saved || !this.current.text.trim()) return;
    if (!force && Date.now() - this.lastSend < SERVER_SAVE_MS) return;
    const sent = { ...this.current };
    this.lastSend = Date.now();
    this.flight = (async () => {
      const reply = await this.send(sent);
      if (reply.ok === false) {
        this.conflict = reply.remote;
        throw new DraftConflict(reply.remote);
      }
      this.acknowledged = contentKey(sent);
      // Never install sent.text over edits made while the request was in flight.
      this.current = { ...this.current, serverVersion: reply.version,
        deadline: reply.deadline, startedAt: reply.startedAt };
      if (this.current.version === sent.version) this.acknowledged = contentKey(this.current);
      this.local();
    })();
    try { await this.flight; } finally { this.flight = null; }
    if (force && !this.saved) await this.save(true);
  }
  resolve(useDevice: boolean) {
    if (!this.conflict) return;
    if (useDevice) this.current = { ...this.current, serverVersion: this.conflict.serverVersion,
      deadline: this.conflict.deadline, startedAt: this.conflict.startedAt };
    else this.current = this.conflict;
    this.acknowledged = useDevice ? null : contentKey(this.current);
    this.conflict = null;
    this.local();
  }
}
