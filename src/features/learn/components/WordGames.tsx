import { useEffect, useState } from 'react';
import { ArrowRight, Check, Gamepad2, Layers3, RotateCcw, Timer, Trophy, Zap } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import type { Word } from '../types';
import { gameWordPool, matchingWords, wordQuiz } from '../word-games';

function useCountdown(seconds: number, stopped: boolean) {
  const [deadline] = useState(() => Date.now() + seconds * 1000);
  const [remaining, setRemaining] = useState(seconds);
  useEffect(() => {
    if (stopped) return;
    const tick = () => setRemaining(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    tick();
    const timer = window.setInterval(tick, 200);
    return () => window.clearInterval(timer);
  }, [deadline, stopped]);
  return { remaining, expired: () => Date.now() >= deadline };
}

function Clock({ seconds, total }: { seconds: number; total: number }) {
  return <div className="mb-6"><div className={`mb-2 flex items-center justify-between text-sm font-bold ${seconds <= 10 ? 'text-destructive' : 'text-muted-foreground'}`}><span className="inline-flex items-center gap-2"><Timer className="h-4 w-4" />{seconds}s</span><Gamepad2 className="h-5 w-5 text-primary" /></div><div className="h-2 overflow-hidden rounded-full bg-secondary"><div className={`h-full rounded-full transition-all duration-200 ${seconds <= 10 ? 'bg-destructive' : 'bg-gradient-to-r from-primary to-orange-400'}`} style={{ width: `${seconds / total * 100}%` }} /></div></div>;
}

function Summary({ score, total, mistakes, onReplay }: { score: number; total: number; mistakes: Word[]; onReplay: () => void }) {
  const { lang } = useT(); const uz = lang === 'uz';
  return <div className="py-3"><div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-amber-400/15"><Trophy className="h-10 w-10 text-amber-500" /></div><h3 className="mt-4 text-center text-2xl font-extrabold">{uz ? 'Barakalla! Yana bir qadam oldinga.' : 'Well done. One step stronger.'}</h3><p className="mt-2 text-center text-muted-foreground">{score} / {total} {uz ? 'to‘g‘ri' : 'correct'}</p>{mistakes.length > 0 && <div className="mt-5 rounded-2xl border p-4"><p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">{uz ? 'Yana bir eslab qoling' : 'Take another look'}</p><div className="max-h-40 space-y-2 overflow-auto">{mistakes.map(w => <p key={w.en} className="flex justify-between gap-4 text-sm"><b>{w.en}</b><span className="text-muted-foreground">{w.uz}</span></p>)}</div></div>}<Button onClick={onReplay} className="mt-6 w-full gap-2 rounded-xl"><RotateCcw className="h-4 w-4" />{uz ? 'Yangi raund' : 'New round'}</Button><p className="mt-3 text-center text-xs text-muted-foreground">{uz ? 'Bu mashq o‘yini — XP va reytingni o‘zgartirmaydi.' : 'Practice game — does not change XP or your ranking.'}</p></div>;
}

function Quiz({ words, onReplay }: { words: Word[]; onReplay: () => void }) {
  const { lang } = useT(); const uz = lang === 'uz';
  const [questions] = useState(() => wordQuiz(words));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const answered = answers.length > index;
  const { remaining, expired } = useCountdown(60, index >= questions.length);
  const finished = remaining === 0 || index >= questions.length;
  const score = questions.filter((q, i) => answers[i] === q.word.uz).length;
  const question = questions[index];
  const select = (value: string) => { if (!answered && !finished && !expired()) setAnswers(current => current.length > index ? current : [...current, value]); };
  if (finished) return <Summary score={score} total={questions.length} mistakes={questions.filter((q, i) => answers[i] !== q.word.uz).map(q => q.word)} onReplay={onReplay} />;
  return <><Clock seconds={remaining} total={60} /><div className="mb-6 text-center"><p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{index + 1} / {questions.length} · {score} {uz ? 'to‘g‘ri' : 'correct'}</p><h3 className="my-4 text-3xl font-extrabold sm:text-4xl">{question.word.en}</h3><p className="text-sm text-muted-foreground">{uz ? 'To‘g‘ri tarjimani toping' : 'Choose the correct Uzbek meaning'}</p></div><div className="grid gap-2 sm:grid-cols-2">{question.options.map(option => <button key={option} type="button" disabled={answered} onClick={() => select(option)} className={`min-h-16 rounded-2xl border p-4 text-sm font-semibold transition-colors ${answered && option === question.word.uz ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' : answered && answers[index] === option ? 'border-destructive bg-destructive/10 text-destructive' : 'border-border bg-card hover:border-primary hover:bg-primary/5'}`}>{option}</button>)}</div>{answered && <div className="mt-5"><p role="status" className="mb-3 text-center text-sm font-medium">{question.word.en} — {question.word.uz}</p><Button className="w-full gap-2 rounded-xl" onClick={() => setIndex(i => i + 1)}>{uz ? 'Keyingisi' : 'Next'}<ArrowRight className="h-4 w-4" /></Button></div>}</>;
}

function Match({ words, onReplay }: { words: Word[]; onReplay: () => void }) {
  const { lang } = useT(); const uz = lang === 'uz';
  const [board] = useState(() => matchingWords(words));
  const [left, setLeft] = useState<string | null>(null);
  const [right, setRight] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState(false);
  const { remaining, expired } = useCountdown(90, matched.length === board.pairs.length);
  const finished = remaining === 0 || matched.length === board.pairs.length;
  useEffect(() => {
    if (!left || !right || finished) return;
    if (left === right) {
      setMatched(current => current.includes(left) ? current : [...current, left]);
      setLeft(null); setRight(null); setWrong(false); return;
    }
    setWrong(true);
    const timer = window.setTimeout(() => { setLeft(null); setRight(null); setWrong(false); }, 650);
    return () => window.clearTimeout(timer);
  }, [left, right, finished]);
  if (finished) return <Summary score={matched.length} total={board.pairs.length} mistakes={board.pairs.filter(w => !matched.includes(w.en))} onReplay={onReplay} />;
  return <><Clock seconds={remaining} total={90} /><p className="mb-5 text-center text-sm text-muted-foreground">{uz ? 'Inglizcha so‘z va uning tarjimasini tanlang.' : 'Select an English word and its Uzbek meaning.'} <b className="text-foreground">{matched.length}/{board.pairs.length}</b></p><div className="grid grid-cols-2 gap-3">{(['left', 'right'] as const).map(side => <div key={side} className="space-y-2">{board[side].map(w => { const done = matched.includes(w.en); const selected = (side === 'left' ? left : right) === w.en; return <button key={w.en} type="button" disabled={done || wrong} onClick={() => { if (expired()) return; if (side === 'left') setLeft(w.en); else setRight(w.en); }} className={`flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border px-2 py-3 text-sm font-semibold transition-all ${done ? 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 opacity-50 dark:text-emerald-400' : selected ? (wrong ? 'border-destructive bg-destructive/10 text-destructive' : 'border-primary bg-primary/10 text-primary') : 'border-border bg-card hover:border-primary/50'}`}>{done && <Check className="h-4 w-4 shrink-0" />}{side === 'left' ? w.en : w.uz}</button>; })}</div>)}</div><p role="status" className="mt-4 min-h-5 text-center text-sm text-destructive">{wrong ? (uz ? 'Mos kelmadi. Yana urinib ko‘ring!' : 'Not a match. Try again!') : ''}</p></>;
}

export function WordGames({ words, locked }: { words: Word[]; locked: boolean }) {
  const { lang } = useT(); const uz = lang === 'uz';
  const [active, setActive] = useState<'quiz' | 'match' | null>(null);
  const [round, setRound] = useState(0);
  const pool = gameWordPool(words);
  const games = [{ id: 'quiz' as const, icon: Zap, title: uz ? '60 soniya: Tarjimani top' : '60-second Word Sprint', text: uz ? 'Vaqt tugashidan oldin to‘g‘ri tarjimalarni toping.' : 'Beat the clock. Choose as many correct meanings as you can.', meta: '60s · 4 options', tone: 'from-primary/10 via-card to-orange-400/5', min: 4 }, { id: 'match' as const, icon: Layers3, title: uz ? 'Juftini top' : 'Match & Remember', text: uz ? 'So‘zlar va tarjimalarni 90 soniyada juftlang.' : 'Connect words with their meanings in 90 seconds.', meta: '90s · 6 pairs', tone: 'from-violet-500/10 via-card to-sky-400/5', min: 2 }];
  return <section className="mb-6" aria-label={uz ? 'So‘z o‘yinlari' : 'Word games'}><div className="mb-3 flex items-center gap-2"><Gamepad2 className="h-5 w-5 text-primary" /><h2 className="text-lg font-extrabold">{uz ? 'So‘zlar bilan o‘ynang' : 'Play with your words'}</h2></div><p className="mb-4 text-sm text-muted-foreground">{uz ? 'Faqat tugatgan darslaringizdagi so‘zlar. Har raundda yangi tasodifiy tanlov.' : 'Only words from your completed lessons. A fresh random selection every round.'}</p><div className="grid gap-3 sm:grid-cols-2">{games.map(game => <button key={game.id} type="button" disabled={locked || pool.length < game.min} onClick={() => { setRound(r => r + 1); setActive(game.id); }} className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br ${game.tone} p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg disabled:translate-y-0 disabled:opacity-50 disabled:shadow-none`}><span className="mb-4 flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-card shadow-sm"><game.icon className="h-6 w-6 text-primary" /></span><span className="rounded-full bg-card/80 px-3 py-1 text-[11px] font-semibold text-muted-foreground">{game.id === 'quiz' ? '60s' : '90s'} · {uz ? 'Tasodifiy' : 'Random'}</span></span><h3 className="text-lg font-extrabold">{game.title}</h3><p className="mt-1 min-h-10 text-sm text-muted-foreground">{game.text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">{pool.length < game.min ? (uz ? `Kamida ${game.min} ta so‘z kerak` : `Learn at least ${game.min} words`) : locked ? (uz ? 'Obuna bilan ochiladi' : 'Unlock with your plan') : (uz ? 'O‘yinni boshlash' : 'Play now')}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></button>)}</div><Dialog open={active !== null} onOpenChange={open => { if (!open) setActive(null); }}><DialogContent className="max-h-[92dvh] max-w-xl overflow-y-auto rounded-3xl p-5 sm:p-7"><DialogHeader className="pr-7 text-left"><DialogTitle>{games.find(g => g.id === active)?.title}</DialogTitle><DialogDescription>{uz ? 'Mening so‘zlarim · shaxsiy mashq' : 'My words · personal practice'}</DialogDescription></DialogHeader><div key={`${active}-${round}`} className="mt-2">{active === 'quiz' ? <Quiz words={pool} onReplay={() => setRound(r => r + 1)} /> : active === 'match' ? <Match words={pool} onReplay={() => setRound(r => r + 1)} /> : null}</div></DialogContent></Dialog></section>;
}
