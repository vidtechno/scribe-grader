import { useEffect, useRef, useState } from 'react';
import { useT } from '@/i18n';
import { useWritingDraft } from '@/hooks/useWritingDraft';
import { fromServer, loadWritingAttempt, saveWritingAttempt } from '@/lib/writing-api';
import { backupDraft, DraftConflict, readDrafts, remainingSeconds, removeDraft, storeDraft, type WritingDraft, type WritingTask } from '@/lib/writing-drafts';
import { WritingConflict, copyWriting } from './WritingRecovery';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Clock, Loader2 } from 'lucide-react';

/** Isolated from ordinary Writing and from each other mock-test stage. */
export function MockWritingStep({ userId, mockId, task, topic, serverText, onSaved }: {
  userId: string; mockId: string; task: WritingTask; topic: string; serverText: string;
  onSaved: (text: string) => void;
}) {
  const { t } = useT();
  const [draft, setDraft] = useState<WritingDraft | null>(null);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [remote, setRemote] = useState<WritingDraft | null>(null);
  const [now, setNow] = useState(Date.now());
  const [reload, setReload] = useState(0);
  const lock = useRef(false);
  const expiredOnce = useRef(false);
  const alive = useRef(true);
  const recovery = useWritingDraft(draft, ready);
  const seconds = draft ? remainingSeconds(draft, now) : 0;
  const expired = ready && seconds === 0;
  const words = draft?.text.trim().split(/\s+/).filter(Boolean).length || 0;
  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const local = readDrafts(userId).find(d => d.mockId === mockId && d.task === task);
        if (local) setDraft(local);
        const row = await loadWritingAttempt('', userId, mockId, task);
        if (cancelled) return;
        if (row?.state === 'finished') {
          const finished = fromServer(row);
          removeDraft(finished); onSaved(finished.text); return;
        }
        const saved = row ? fromServer(row) : null;
        if (saved && local && saved.text !== local.text && saved.serverVersion !== local.serverVersion) {
          setRemote(saved); setDraft(local); return;
        }
        const chosen = local && (!saved || local.text !== saved.text) ?
          { ...local, deadline: saved?.deadline ?? local.deadline, startedAt: saved?.startedAt ?? local.startedAt } : saved;
        if (chosen) { setDraft(chosen); return; }
        const startedAt = Date.now();
        const fresh: WritingDraft = { id: crypto.randomUUID(), userId, mockId, task, topic, text: serverText || '',
          startedAt, deadline: startedAt + (task === 'Task 1' ? 1200 : 2400) * 1000,
          updatedAt: startedAt, version: 0, serverVersion: 0, phase: 'writing' };
        storeDraft(fresh); setDraft(fresh);
        if (!serverText) setReady(true);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : 'writing.saveError');
      }
    })();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, mockId, task, reload]);
  useEffect(() => {
    if (!ready) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [ready]);
  const finish = async () => {
    if (!draft || !recovery.writer || lock.current) return;
    lock.current = true; setBusy(true); setError('');
    try {
      recovery.writer.update({ text: draft.text, phase: remainingSeconds(draft) === 0 ? 'expired' : 'writing' });
      recovery.local();
      if (words < 20) throw new Error(t('ex.minWordsErr', { n: 20 }));
      await recovery.flush();
      if (!alive.current) return;
      // Save the final snapshot AND advance current_step in one transaction.
      await saveWritingAttempt(recovery.writer.current, true);
      if (!alive.current) return;
      recovery.writer.disposed = true;
      removeDraft(recovery.writer.current);
      onSaved(recovery.writer.current.text);
    } catch (e) {
      if (alive.current) {
        if (e instanceof DraftConflict) setRemote(e.remote);
        setError(e instanceof Error ? e.message : 'writing.saveError');
      }
    }
    finally { lock.current = false; if (alive.current) setBusy(false); }
  };
  useEffect(() => {
    if (expired && !expiredOnce.current) { expiredOnce.current = true; void finish(); }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired]);
  const choose = (device: boolean) => {
    if (!draft) return;
    try {
      let chosen: WritingDraft;
      if (remote) {
        backupDraft(draft); backupDraft(remote);
        chosen = device ? { ...draft, id: remote.id, serverVersion: remote.serverVersion, deadline: remote.deadline, startedAt: remote.startedAt } : remote;
        setRemote(null);
      } else chosen = recovery.resolve(device)!;
      storeDraft(chosen); setDraft(chosen);
      if (recovery.writer) recovery.writer.current = chosen;
    } catch { setError('writing.storageError'); }
  };
  const choice = remote || recovery.conflict;
  if (!draft) return <div role="status" className="space-y-3"><p>{error ? t(error) : t('writing.saving')}</p>
    {error && <Button onClick={() => { setError(''); setReload(n => n + 1); }}>{t('writing.retry')}</Button>}</div>;
  return <section className="space-y-4">
    <div className="rounded-xl border p-4 space-y-2"><div className="flex justify-between gap-3"><strong>{task}</strong>
      <span className="font-mono inline-flex items-center gap-1"><Clock className="h-4 w-4" />{Math.floor(seconds / 60).toString().padStart(2, '0')}:{(seconds % 60).toString().padStart(2, '0')}</span></div>
      <p className="whitespace-pre-wrap text-sm">{topic}</p>
      <p className="text-xs text-muted-foreground">{t('mock.exam.minWords', { n: task === 'Task 1' ? 150 : 250 })} · {t('mock.exam.written', { n: words })}</p></div>
    {choice && <WritingConflict device={draft} account={choice} onChoose={choose} />}
    {!ready && <div className="rounded-xl border border-primary/30 p-4 space-y-3"><p>{t('writing.found')}</p>
      <Button disabled={!!choice} onClick={() => { setReady(true); setNow(Date.now()); }}>{t('writing.resume')}</Button></div>}
    <p role="status" className="text-xs text-muted-foreground">{t(recovery.status)}</p>
    {(error || busy || expired) && <p role="alert" className="text-sm text-destructive">{t(error || (busy ? 'writing.saving' : 'writing.expired'))}</p>}
    <Textarea aria-label={t('ex.response')} value={draft.text} maxLength={20000} readOnly={!ready || busy || expired || !!choice}
      onChange={e => setDraft(d => d && ({ ...d, text: e.target.value, updatedAt: Date.now() }))}
      placeholder={t('mock.exam.placeholder')} className="min-h-[400px] text-base leading-relaxed" />
    <div className="flex flex-wrap justify-end gap-2"><Button variant="outline" onClick={() => copyWriting(draft.text, t)}>{t('writing.copy')}</Button>
      <Button disabled={!ready || busy || !!choice} onClick={() => void finish()}>
        {busy && <Loader2 className="h-4 w-4 animate-spin mr-2" />}{t(error ? 'writing.retry' : 'mock.exam.saveContinue')}</Button></div>
  </section>;
}
