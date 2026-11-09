import { useEffect, useRef, useState } from 'react';
import { backupDraft, DraftConflict, LOCAL_SAVE_MS, SERVER_SAVE_MS, WritingDraftWriter, type WritingDraft } from '@/lib/writing-drafts';
import { saveWritingAttempt } from '@/lib/writing-api';

export function useWritingDraft(draft: WritingDraft | null, enabled: boolean) {
  const writerRef = useRef<WritingDraftWriter | null>(null);
  const [status, setStatus] = useState('writing.saving');
  const [conflict, setConflict] = useState<WritingDraft | null>(null);
  const latest = useRef(draft);
  latest.current = draft;
  // A component must be keyed by user + attempt. No writer crosses account boundaries.
  if (draft && (!writerRef.current || writerRef.current.current.id !== draft.id || writerRef.current.current.userId !== draft.userId)) {
    writerRef.current = new WritingDraftWriter(draft, saveWritingAttempt);
  }
  const writer = writerRef.current;
  const local = () => {
    if (!writer || !latest.current) return;
    try { writer.local(); setStatus(navigator.onLine ? 'writing.local' : 'writing.offline'); }
    catch { setStatus('writing.storageError'); throw new Error('writing.storageError'); }
  };
  const flush = async (force = true) => {
    if (!writer) throw new Error('writing.saveError');
    try {
      if (!navigator.onLine) { local(); throw new Error('writing.offline'); }
      await writer.save(force);
      setStatus(writer.saved ? 'writing.server' : 'writing.local');
    } catch (e) {
      if (e instanceof DraftConflict) setConflict(e.remote);
      setStatus(e instanceof Error && e.message.startsWith('writing.') ? e.message : 'writing.saveError');
      throw e;
    }
  };
  useEffect(() => {
    if (!draft || !enabled || !writer) return;
    if (draft.serverVersion > writer.current.serverVersion) writer.current.serverVersion = draft.serverVersion;
    writer.update({ text: draft.text, topic: draft.topic, startedAt: draft.startedAt, deadline: draft.deadline, phase: draft.phase });
    const timer = setTimeout(() => { try { local(); } catch { /* surfaced in status */ } }, LOCAL_SAVE_MS);
    return () => clearTimeout(timer);
  // Metadata is acknowledged separately; timer ticks are not writes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft?.text, draft?.topic, draft?.startedAt, draft?.deadline, draft?.phase, draft?.serverVersion, enabled, writer]);
  useEffect(() => {
    if (!writer || !enabled) return;
    const persist = () => { try { writer.local(); } catch { setStatus('writing.storageError'); } };
    const save = () => { void flush(false).catch(() => undefined); };
    const offline = () => { persist(); setStatus('writing.offline'); };
    const interval = setInterval(save, SERVER_SAVE_MS);
    window.addEventListener('online', save);
    window.addEventListener('offline', offline);
    window.addEventListener('pagehide', persist);
    document.addEventListener('visibilitychange', persist);
    return () => {
      clearInterval(interval); persist();
      window.removeEventListener('online', save); window.removeEventListener('offline', offline);
      window.removeEventListener('pagehide', persist); document.removeEventListener('visibilitychange', persist);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [writer, enabled]);
  const resolve = (device: boolean) => {
    if (!writer || !conflict) return null;
    backupDraft(writer.current); backupDraft(conflict);
    writer.resolve(device); setConflict(null); setStatus(device ? 'writing.local' : 'writing.server');
    return writer.current;
  };
  return { writer, status, conflict, local, flush, resolve };
}
