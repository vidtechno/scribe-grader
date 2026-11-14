import { useEffect, useRef, useState } from 'react';
import { HelpCircle, Loader2, Send, Sparkles } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useT } from '@/i18n';
import type { Lesson } from '../types';
import { Md } from './Md';

type Phase = 'theory' | 'practice' | 'quiz';
interface Turn { role: 'user' | 'assistant'; content: string }
interface Left { lesson: number; day: number; bonus: number }
interface Reply { reply?: string; error?: string; enabled?: boolean; lessonLeft?: number; dayLeft?: number; bonusLeft?: number }

async function call(body: Record<string, unknown>): Promise<Reply> {
  let res;
  try { res = await supabase.functions.invoke('lesson-mentor', { body }); } catch { return { error: 'network' }; }
  const { data, error } = res;
  if (error) {
    // A refused call (limit reached, feature off) still carries the reason in the response body.
    const ctx = (error as { context?: Response } | null)?.context;
    if (ctx && typeof ctx.json === 'function') {
      try { return (await ctx.json()) as Reply; } catch { /* fall through */ }
    }
    return { error: 'network' };
  }
  return (data ?? {}) as Reply;
}

/** A short answer as paragraphs and bullet lines. */
function Answer({ text }: { text: string }) {
  return (
    <div className="space-y-1.5 text-sm leading-relaxed">
      {text.split('\n').filter((l) => l.trim()).map((line, i) => (/^\s*[-*•]\s+/.test(line)
        ? <p key={i} className="flex gap-2 pl-1"><span className="text-primary">•</span><Md text={line.replace(/^\s*[-*•]\s+/, '')} /></p>
        : <p key={i}><Md text={line} /></p>))}
    </div>
  );
}

/**
 * "Tushunmadim?": the learner asks an AI tutor about the lesson they are on.
 * 3 questions per lesson and 15 per day are counted on the server; the buttons only show what is left.
 */
export function LessonHelp({ lesson, phase }: { lesson: Lesson; phase: Phase }) {
  const { t } = useT();
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState<Left>({ lesson: 3, day: 15, bonus: 0 });
  const [turns, setTurns] = useState<Turn[]>([]);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const end = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let off = false;
    setTurns([]); setError(''); setEnabled(false);
    void call({ action: 'status', lessonId: lesson.id }).then((r) => {
      if (off || !r.enabled) return;
      setEnabled(true);
      setLeft({ lesson: r.lessonLeft ?? 0, day: r.dayLeft ?? 0, bonus: r.bonusLeft ?? 0 });
    });
    return () => { off = true; };
  }, [lesson.id]);
  useEffect(() => { end.current?.scrollIntoView?.({ behavior: 'smooth', block: 'end' }); }, [turns, busy]);

  // Questions from streak rewards are used only once the lesson or day limit is reached.
  const remaining = Math.min(left.lesson, left.day) + left.bonus;
  const ask = async (message: string, kind: 'explain' | 'free') => {
    if (busy || remaining <= 0 || !message.trim()) return;
    setBusy(true); setError('');
    const history = turns.slice(-4);
    setTurns((p) => [...p, { role: 'user', content: kind === 'explain' ? t('learn.help.explain') : message }]);
    setText('');
    const r = await call({
      action: 'ask', lessonId: lesson.id, kind, message, phase, history,
      context: { title: lesson.title, goal: lesson.goal.replace(/[*`]/g, ''), words: lesson.words.slice(0, 14).map((w) => [w.en, w.uz]) },
    });
    setBusy(false);
    if (typeof r.lessonLeft === 'number' && typeof r.dayLeft === 'number') setLeft({ lesson: r.lessonLeft, day: r.dayLeft, bonus: r.bonusLeft ?? 0 });
    if (r.reply) setTurns((p) => [...p, { role: 'assistant', content: r.reply as string }]);
    else setError(r.error && r.error !== 'network' ? r.error : t('learn.help.failed'));
  };

  if (!enabled) return null;
  const chips: [string, string][] = [[t('learn.help.explain'), 'explain'], [t('learn.help.example'), t('learn.help.exampleMsg')], [t('learn.help.why'), t('learn.help.whyMsg')]];
  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-95">
        <Sparkles className="h-4 w-4" />{t('learn.help.button')}
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="mx-auto flex h-[82vh] max-w-2xl flex-col rounded-t-3xl p-0">
          <SheetHeader className="border-b border-border px-5 py-4 text-left">
            <SheetTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" />{t('learn.help.title')}</SheetTitle>
            <SheetDescription>{remaining > 0 ? t('learn.help.left', { n: left.lesson, day: left.day }) : t('learn.help.none')}{left.bonus > 0 ? ` · ${t('learn.help.bonus', { n: left.bonus })}` : ''}</SheetDescription>
          </SheetHeader>
          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {turns.length === 0 && (
              <div className="rounded-2xl bg-secondary/60 p-4 text-sm">
                <p className="mb-1 flex items-center gap-2 font-semibold"><HelpCircle className="h-4 w-4 text-primary" />{lesson.titleUz}</p>
                <p className="text-muted-foreground">{t('learn.help.intro')}</p>
              </div>
            )}
            {turns.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex'}>
                <div className={m.role === 'user' ? 'max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2 text-sm text-primary-foreground' : 'max-w-[92%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3'}>
                  {m.role === 'user' ? m.content : <Answer text={m.content} />}
                </div>
              </div>
            ))}
            {busy && <div className="flex"><div className="rounded-2xl border border-border bg-card px-4 py-3"><Loader2 className="h-4 w-4 animate-spin text-primary" /></div></div>}
            {error && <p className="rounded-xl bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
            <div ref={end} />
          </div>
          <div className="border-t border-border bg-background px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {chips.map(([label, msg], i) => (
                <button key={label} type="button" disabled={busy || remaining <= 0} onClick={() => void ask(msg, i === 0 ? 'explain' : 'free')}
                  className="rounded-full border border-primary/40 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary disabled:opacity-40">{label}</button>
              ))}
            </div>
            <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); void ask(text, 'free'); }}>
              <input value={text} onChange={(e) => setText(e.target.value)} maxLength={400} disabled={busy || remaining <= 0} placeholder={t('learn.help.placeholder')}
                className="min-w-0 flex-1 rounded-xl border-2 border-border bg-card px-3 py-2.5 text-base outline-none focus:border-primary disabled:opacity-60" />
              <Button type="submit" size="icon" variant="glow" disabled={busy || remaining <= 0 || !text.trim()} aria-label={t('learn.help.send')}><Send className="h-4 w-4" /></Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
