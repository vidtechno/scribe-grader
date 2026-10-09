import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, Timer, X, XCircle, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { callLearning, learningErrorMessage } from '../api';
import { shuffle } from '../check';
import { speak } from '../speech';
import type { Word } from '../types';

const DURATION = 60;

interface Question { prompt: string; opts: string[]; answer: string; say?: string }

function makeQuestion(w: Word, pool: Word[], index: number): Question {
  const toEnglish = index % 2 === 0;
  const key = toEnglish ? 'en' : 'uz';
  const promptKey = toEnglish ? 'uz' : 'en';
  const others = shuffle(pool.filter((x) => x[key] !== w[key])).filter((x, i, a) => a.findIndex((y) => y[key] === x[key]) === i).slice(0, 3);
  return { prompt: w[promptKey], answer: w[key], opts: shuffle([w[key], ...others.map((o) => o[key])]), say: toEnglish ? undefined : w.en };
}

/** 60 seconds, as many words as possible. Wrong answers cost nothing but time; the round is a game, not a test. */
export function SpeedRound({ words, onClose, onFinished }: { words: Word[]; onClose: () => void; onFinished: () => void }) {
  const order = useMemo(() => shuffle(words), [words]);
  const [i, setI] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [left, setLeft] = useState(DURATION);
  const [flash, setFlash] = useState<'right' | 'wrong' | null>(null);
  const [saved, setSaved] = useState(false);
  const startedAt = useRef(Date.now());
  const question = useMemo(() => makeQuestion(order[i % order.length], words, i), [order, i, words]);
  const over = left <= 0;

  useEffect(() => {
    if (over) return;
    const t = setInterval(() => setLeft((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [over]);

  useEffect(() => {
    if (!over || saved) return;
    setSaved(true);
    const answered = right + wrong;
    if (answered < 1) return;
    callLearning('learning_log_practice', { _correct: right, _answered: Math.min(answered, 50), _seconds: DURATION })
      .then(onFinished)
      .catch((e) => toast.error(learningErrorMessage(e)));
  }, [over, saved, right, wrong, onFinished]);

  const answer = (opt: string) => {
    if (over || flash) return;
    const ok = opt === question.answer;
    setFlash(ok ? 'right' : 'wrong');
    if (ok) { setRight((n) => n + 1); void speak(order[i % order.length].en); } else setWrong((n) => n + 1);
    setTimeout(() => { setFlash(null); setI((n) => n + 1); }, ok ? 350 : 700);
  };

  const best = (() => { try { return Number(localStorage.getItem('scorify_speed_best') ?? 0); } catch { return 0; } })();
  useEffect(() => {
    if (over && right > best) { try { localStorage.setItem('scorify_speed_best', String(right)); } catch { /* ignore */ } }
  }, [over, right, best]);

  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto">
      <div className="max-w-xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button type="button" onClick={onClose} aria-label="Yopish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <div className="h-2.5 flex-1 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-amber-500 transition-all duration-1000 ease-linear" style={{ width: `${(Math.max(left, 0) / DURATION) * 100}%` }} /></div>
          <span className="flex items-center gap-1 text-sm font-bold tabular-nums"><Timer className="h-4 w-4" />{Math.max(left, 0)}</span>
        </div>

        {over ? (
          <div className="text-center py-10">
            <Zap className="h-14 w-14 text-amber-500 mx-auto mb-3" />
            <h2 className="text-3xl font-extrabold mb-1">{right} ta so'z</h2>
            <p className="text-muted-foreground mb-1">60 soniyada {right} ta to'g'ri, {wrong} ta xato.</p>
            <p className="text-sm text-muted-foreground mb-6">{right > best && right > 0 ? "🎉 Yangi rekord!" : best > 0 ? `Eng yaxshi natijangiz: ${best}` : ''}</p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={onClose}>Yopish</Button>
              <Button variant="glow" onClick={() => { startedAt.current = Date.now(); setI(0); setRight(0); setWrong(0); setLeft(DURATION); setSaved(false); }} className="gap-2"><Zap className="h-4 w-4" />Yana bir bor</Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between text-sm font-semibold mb-4">
              <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><CheckCircle2 className="h-4 w-4" />{right}</span>
              <span className="text-muted-foreground flex items-center gap-1"><XCircle className="h-4 w-4" />{wrong}</span>
            </div>
            <p className="text-center text-3xl font-extrabold my-8">{question.prompt}</p>
            <div className="grid grid-cols-2 gap-3">
              {question.opts.map((o) => (
                <button key={o} type="button" onClick={() => answer(o)}
                  className={`min-h-[64px] rounded-xl border-2 px-3 py-3 font-semibold transition-colors active:scale-[0.97] ${
                    flash && o === question.answer ? 'border-emerald-500 bg-emerald-500/10'
                      : flash === 'wrong' ? 'border-border opacity-60' : 'border-border bg-card hover:border-primary/60'}`}>{o}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
