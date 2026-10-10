import { useState } from 'react';
import { FastForward } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { callLearning, learningErrorMessage, useRefreshLearning, type LearningState } from '../api';

const KEY = 'scorify_skip_intro_dismissed';
const INTRO = ['u1-l1', 'u1-l2', 'u1-l3', 'u1-l4'];
const read = () => { try { return localStorage.getItem(KEY) === '1'; } catch { return false; } };

/** Shown once to Beginners who have not started: the alphabet lessons can be skipped by those who know them. */
export function SkipIntroBanner({ state }: { state: LearningState }) {
  const refresh = useRefreshLearning();
  const [hidden, setHidden] = useState(read);
  const [busy, setBusy] = useState(false);
  const done = new Set(state.progress.filter((p) => p.completed_at).map((p) => p.lesson_id));
  const show = state.profile?.level === 'beginner' && state.access.allowed && !hidden && !INTRO.every((id) => done.has(id)) && !done.has('u1-l1');
  if (!show) return null;

  const dismiss = () => { try { localStorage.setItem(KEY, '1'); } catch { /* the banner just shows again */ } setHidden(true); };
  const skip = async () => {
    setBusy(true);
    try {
      await callLearning('learning_skip_intro');
      dismiss();
      await refresh();
      toast.success("1–4-darslar o'tkazib yuborildi. Istasangiz, ularga istalgan vaqt qaytishingiz mumkin.");
    } catch (e) { toast.error(learningErrorMessage(e)); } finally { setBusy(false); }
  };
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/5 p-4 mb-4 flex flex-col sm:flex-row sm:items-center gap-3">
      <span className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center shrink-0"><FastForward className="h-5 w-5 text-primary" /></span>
      <div className="flex-1 min-w-0">
        <p className="font-bold">Alifbo va sonlarni bilasizmi?</p>
        <p className="text-sm text-muted-foreground">1–4-darslarni (alifbo, tovushlar) o'tkazib yuborishingiz mumkin. Darslar o'chib ketmaydi, keyin qaytib ko'rish mumkin.</p>
      </div>
      <div className="flex gap-2 shrink-0">
        <Button size="sm" onClick={() => void skip()} disabled={busy}>O'tkazib yuborish</Button>
        <Button size="sm" variant="outline" onClick={dismiss} disabled={busy}>Yo'q, boshidan boshlayman</Button>
      </div>
    </div>
  );
}
