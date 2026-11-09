import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { useWritingDraft } from '@/hooks/useWritingDraft';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { PricingModal } from '@/components/PricingModal';
import { WritingConflict, WritingRecoveryList, copyWriting } from '@/components/WritingRecovery';
import { getRandomTopic } from '@/lib/topics';
import { functionError } from '@/lib/function-errors';
import { fromServer, loadWritingAttempt, writingRpc } from '@/lib/writing-api';
import { backupDraft, readDrafts, remainingSeconds, removeDraft, storeDraft, type WritingDraft, type WritingTask } from '@/lib/writing-drafts';
import { Clock, FileText, Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useT } from '@/i18n';
import { trackOnce, PER_USER } from '@/lib/analytics';

export default function Exam() {
  const { user } = useAuth();
  const [params] = useSearchParams();
  return <WritingExam key={`${user?.id}:${params.toString()}`} userId={user?.id} />;
}

function WritingExam({ userId }: { userId?: string }) {
  const { t } = useT();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { refreshProfile } = useAuth();
  const { writingRemaining, refresh: refreshSub } = useSubscription();
  const requestedId = params.get('attempt') || params.get('draft');
  const [id] = useState(() => requestedId || crypto.randomUUID());
  const [task, setTask] = useState<WritingTask>(params.get('task') === '1' ? 'Task 1' : 'Task 2');
  const [topic, setTopic] = useState(() => getRandomTopic(task).prompt);
  const [draft, setDraft] = useState<WritingDraft | null>(null);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(!!requestedId);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPricing, setShowPricing] = useState(false);
  const [remoteChoice, setRemoteChoice] = useState<WritingDraft | null>(null);
  const [now, setNow] = useState(Date.now());
  const mounted = useRef(true);
  const submitLock = useRef(false);
  const expiryHandled = useRef(false);
  const recovery = useWritingDraft(draft, active);
  const latest = useRef(draft); latest.current = draft;
  const minimum = task === 'Task 1' ? 150 : 250;
  const words = draft?.text.trim().split(/\s+/).filter(Boolean).length || 0;
  const timeLeft = draft ? remainingSeconds(draft, now) : task === 'Task 1' ? 1200 : 2400;
  const expired = !!draft?.deadline && timeLeft === 0;
  const locked = busy || expired || draft?.phase === 'submitting';

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; };
  }, []);
  useEffect(() => {
    if (!requestedId || !userId) return;
    let cancelled = false;
    let local: WritingDraft | undefined;
    try { local = readDrafts(userId).find(d => !d.mockId && d.id === requestedId); }
    catch { setError('writing.storageError'); }
    if (local) { setDraft(local); setTask(local.task); setTopic(local.topic); }
    void (async () => {
      try {
        const row = await loadWritingAttempt(requestedId, userId);
        if (cancelled) return;
        if (row?.state === 'completed') { removeDraft(fromServer(row)); navigate(`/result/${row.id}`, { replace: true }); return; }
        if (row) {
          const remote = fromServer(row);
          if (local && (local.text !== remote.text || local.topic !== remote.topic) && local.serverVersion !== remote.serverVersion) {
            setRemoteChoice(remote);
          } else {
            const chosen = local && (local.text !== remote.text || local.topic !== remote.topic) ?
              { ...local, deadline: remote.deadline, startedAt: remote.startedAt } : remote;
            setDraft(chosen); setTask(chosen.task); setTopic(chosen.topic);
          }
          if (row.state === 'review_required') setError('writing.review');
        } else if (!local) {
          const { data, error: fetchError } = await supabase.from('essays').select('*')
            .eq('id', requestedId).eq('user_id', userId).single();
          if (cancelled) return;
          if (fetchError || !data) throw new Error('ex.draftUnavailable');
          if (data.status === 'completed') { navigate(`/result/${data.id}`, { replace: true }); return; }
          if (!['draft', 'failed'].includes(data.status)) throw new Error('writing.pending');
          const older: WritingDraft = { id: data.id, userId, mockId: null, task: data.task_type as WritingTask,
            text: data.essay_text, topic: data.topic, startedAt: null, deadline: null,
            version: 0, serverVersion: 0, updatedAt: Date.parse(data.created_at), phase: 'writing' };
          setDraft(older); setTask(older.task); setTopic(older.topic); setMessage('writing.legacy');
        }
      } catch (e) { if (!cancelled) setError(e instanceof Error ? e.message : 'writing.saveError'); }
      finally { if (!cancelled) setLoading(false); }
    })();
    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedId, userId]);
  useEffect(() => {
    if (!active) return;
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
  }, [active]);

  const submit = useCallback(async () => {
    const current = latest.current;
    if (!current || !userId || submitLock.current) return;
    submitLock.current = true; setBusy(true); setError('');
    try {
      recovery.writer!.update({ text: current.text, topic: current.topic, phase: remainingSeconds(current) === 0 ? 'expired' : current.phase });
      recovery.local();
      if (!current.text.trim()) throw new Error('writing.emptyExpired');
      if (current.text.trim().split(/\s+/).length < minimum) throw new Error(t('ex.minWordsErr', { n: minimum }));
      const { data: auth } = await supabase.auth.getUser();
      if (!auth.user || auth.user.id !== userId) throw new Error('writing.session');
      if (!mounted.current) return;
      setMessage('writing.saving'); await recovery.flush();
      if (!mounted.current) return;
      const submitting = { ...recovery.writer!.current, phase: 'submitting' as const };
      storeDraft(submitting); setDraft(submitting); setMessage('writing.grading');
      const { data, error: invokeError } = await supabase.functions.invoke('grade-essay-v2', { body: { attemptId: current.id } });
      if (!mounted.current) return;
      if (invokeError) throw await functionError(invokeError, t('ex.gradeFailed'));
      if (data?.state !== 'completed') { setMessage(data?.state === 'review_required' ? 'writing.review' : 'writing.pending'); return; }
      recovery.writer!.disposed = true;
      removeDraft(submitting);
      await Promise.all([refreshProfile(), refreshSub()]);
      if (!mounted.current) return;
      toast.success(t('ex.graded')); trackOnce('first_ielts_practice', PER_USER, { skill: 'writing' });
      navigate(`/result/${current.id}`);
    } catch (e) {
      if (mounted.current) {
        setError(e instanceof Error ? e.message : 'writing.saveError'); setMessage('');
        // A definitive quota/provider rejection leaves a draft, so allow editing
        // while its original timer remains open. Ambiguous calls stay locked.
        try {
          const row = await loadWritingAttempt(current.id, userId);
          if (mounted.current && row?.state === 'draft') {
            const next = { ...recovery.writer!.current, phase: remainingSeconds(current) === 0 ? 'expired' as const : 'writing' as const };
            recovery.writer!.current = next; storeDraft(next); setDraft(next);
          }
        } catch { /* Original text and the actionable error remain visible. */ }
      }
    } finally { submitLock.current = false; if (mounted.current) setBusy(false); }
  }, [userId, recovery, minimum, refreshProfile, refreshSub, navigate, t]);
  useEffect(() => {
    if (active && expired && !expiryHandled.current) {
      expiryHandled.current = true; setMessage('writing.expired'); void submit();
    }
  }, [active, expired, submit]);

  const start = () => {
    if (!userId) { setError('writing.session'); return; }
    if (!draft && writingRemaining <= 0) { setShowPricing(true); return; }
    if (!topic.trim()) { setError('ex.enterTopic'); return; }
    const current = draft || { id, userId, mockId: null, task, text: '', topic: topic.trim(),
      startedAt: null, deadline: null, updatedAt: Date.now(), version: 0, serverVersion: 0, phase: 'writing' as const };
    const startedAt = current.startedAt ?? Date.now();
    const next = { ...current, startedAt, deadline: current.deadline ?? startedAt + (task === 'Task 1' ? 1200 : 2400) * 1000 };
    try { storeDraft(next); setDraft(next); setActive(true); setNow(Date.now()); }
    catch { setError('writing.storageError'); }
  };
  const choose = (device: boolean) => {
    const remote = remoteChoice || recovery.conflict;
    if (!remote || !draft) return;
    try {
      backupDraft(draft); backupDraft(remote);
      const choice = remoteChoice ? (device ? { ...draft, serverVersion: remote.serverVersion,
        deadline: remote.deadline, startedAt: remote.startedAt } : remote) : recovery.resolve(device)!;
      if (recovery.writer) { recovery.writer.current = choice; recovery.writer.conflict = null; }
      storeDraft(choice); setDraft(choice); setTask(choice.task); setTopic(choice.topic); setRemoteChoice(null); setError('');
    } catch { setError('writing.storageError'); }
  };
  const notice = error || message;
  if (!active) return <div className="min-h-screen bg-background"><Navbar />
    <main className="mx-auto max-w-2xl px-4 pt-24 pb-24 space-y-5">
      <Link to="/writing" className="text-sm text-primary">← {t('writing.back')}</Link>
      {loading ? <Loader2 className="animate-spin" aria-label="Loading" /> : draft ? <section className="rounded-2xl border p-5 space-y-4">
        <h1 className="text-xl font-bold">{t('writing.found')}</h1><p>{draft.task} · {draft.topic}</p>
        <pre className="max-h-48 overflow-auto whitespace-pre-wrap break-words text-sm">{draft.text}</pre>
        {(remoteChoice || recovery.conflict) ? <WritingConflict device={draft} account={(remoteChoice || recovery.conflict)!} onChoose={choose} /> : <Button onClick={start}>{t('writing.resume')}</Button>}
        <div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => copyWriting(draft.text, t)}>{t('writing.copy')}</Button>
          <Button variant="ghost" onClick={async () => {
            if (!window.confirm(t('writing.confirmDelete'))) return;
            try { await writingRpc('discard_writing_attempt', { _id: draft.id }); removeDraft(draft); navigate(`/exam?task=${task === 'Task 1' ? 1 : 2}`, { replace: true }); }
            catch (e) { setError(e instanceof Error ? e.message : 'writing.saveError'); }
          }}>{t('writing.delete')}</Button></div>
      </section> : <><WritingRecoveryList /><section className="rounded-2xl border bg-card p-6 space-y-5">
        <FileText className="h-9 w-9 text-primary" /><h1 className="text-2xl font-bold">{t('ex.examTitle', { task })}</h1>
        <p className="text-muted-foreground">{t('ex.intro', { min: task === 'Task 1' ? 20 : 40, n: minimum })}</p>
        <label className="block space-y-2"><span>{t('ex.topic')}</span><Textarea value={topic} maxLength={500} onChange={e => setTopic(e.target.value)} /></label>
        <div className="flex gap-2 flex-wrap"><Button variant="outline" onClick={() => setTopic(getRandomTopic(task).prompt)}>{t('ex.newTopic')}</Button><Button onClick={start}>{t('ex.startExam')}</Button></div>
        <p className="text-sm text-muted-foreground">{t('ex.evalsRemaining', { n: writingRemaining })}</p>
      </section></>}
      {notice && <p role="alert" className="text-sm text-destructive">{t(notice)}</p>}
    </main><PricingModal open={showPricing} onOpenChange={setShowPricing} /></div>;

  return <div className="min-h-screen flex flex-col bg-background text-foreground">
    <header className="border-b bg-card p-4 flex flex-wrap justify-between items-center gap-3">
      <Link to="/writing" className="font-semibold">Scorify · IELTS {task}</Link>
      <span className={`inline-flex items-center gap-2 font-mono font-bold ${expired ? 'text-destructive' : ''}`}><Clock className="h-4 w-4" />{Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
    </header>
    <div className="px-4 py-2 border-b text-xs text-muted-foreground" role="status" aria-live="polite">{t(recovery.status)}</div>
    {(remoteChoice || recovery.conflict) && <WritingConflict device={draft!} account={(remoteChoice || recovery.conflict)!} onChoose={choose} />}
    {notice && <div role="status" aria-live="polite" className={`m-4 rounded-xl border p-3 text-sm ${error ? 'border-destructive text-destructive' : 'bg-primary/5'}`}>
      {busy && <Loader2 className="inline h-4 w-4 mr-2 animate-spin" />}{t(notice)}</div>}
    <main className="flex-1 grid lg:grid-cols-[minmax(240px,350px)_1fr]">
      <aside className="border-b lg:border-r p-5 max-h-60 overflow-auto lg:max-h-none"><h2 className="font-semibold mb-3">{t('ex.question')}</h2><p className="whitespace-pre-wrap text-sm leading-relaxed">{draft?.topic}</p></aside>
      <section className="flex flex-col min-w-0"><label htmlFor="writing-answer" className="px-5 pt-4 font-semibold text-sm">{t('ex.response')}</label>
        <Textarea id="writing-answer" value={draft?.text || ''} readOnly={locked || !!recovery.conflict || !!remoteChoice} maxLength={20000}
          placeholder={t('ex.essayPh')} onChange={e => setDraft(d => d && ({ ...d, text: e.target.value, updatedAt: Date.now() }))}
          className="flex-1 min-h-[45vh] lg:min-h-[60vh] resize-y rounded-none border-0 p-5 text-base leading-8 focus-visible:ring-inset" />
        <footer className="border-t p-4 flex flex-wrap items-center justify-between gap-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <p className="text-sm text-muted-foreground">{t('ex.wordProgress', { n: words, min: minimum })}</p>
          <div className="flex flex-wrap gap-2"><Button variant="outline" onClick={() => copyWriting(draft!.text, t)}>{t('writing.copy')}</Button>
            <Button variant="outline" disabled={busy} onClick={() => { void recovery.flush().catch(e => setError(e instanceof Error ? e.message : 'writing.saveError')); }}>{t('ex.saveDraft')}</Button>
            <Button disabled={busy || !!recovery.conflict || !!remoteChoice} onClick={() => void submit()} className="gap-2">
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}{error ? t('writing.retry') : draft?.phase === 'submitting' ? t('writing.checkResult') : t('ex.startEval')}
            </Button></div>
        </footer>
      </section>
    </main><PricingModal open={showPricing} onOpenChange={setShowPricing} />
  </div>;
}
