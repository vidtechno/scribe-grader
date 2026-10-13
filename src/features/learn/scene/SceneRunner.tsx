import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, ChevronRight, Languages, LifeBuoy, Lightbulb, MessageCircle, RotateCcw, Sparkles as SparklesIcon, Volume2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ExerciseView } from '../components/ExerciseView';
import { Md } from '../components/Md';
import { Result } from '../components/LessonResult';
import { SpeakButton } from '../components/SpeakButton';
import { lessonEvents, type Outcome } from '../engine/engine';
import { normalize, shuffle } from '../check';
import { speak } from '../speech';
import type { Lesson, Scene } from '../types';
import { MiniAvatar, SceneArt, Sparkles, PLACE_THEME } from './SceneArt';
import { isTask, judgeReply, modelReply, otherVoice, replyHint, scoredSteps, stepExercise, voiceText, type TaskStep, type Verdict } from './scene';

type Log =
  | { t: 'partner'; step: number; en: string; uz: string }
  | { t: 'you'; step: number; en: string; model: string }
  | { t: 'note'; step: number; title?: string; md: string };

type Phase = 'intro' | 'play' | 'outro' | 'result';

const storeKey = (id: string) => `scene:${id}`;
function readSaved(id: string): { i: number; r: Record<number, boolean> } | null {
  try { const v = JSON.parse(localStorage.getItem(storeKey(id)) ?? 'null'); return v && typeof v.i === 'number' ? v : null; } catch { return null; }
}
function writeSaved(id: string, value: { i: number; r: Record<number, boolean> } | null) {
  try { if (value) localStorage.setItem(storeKey(id), JSON.stringify(value)); else localStorage.removeItem(storeKey(id)); } catch { /* private mode */ }
}
function readUz(): boolean { try { return localStorage.getItem('scene:uz') !== '0'; } catch { return true; } }

/** What the log looks like up to a step, using the model replies (used when a learner comes back to a saved scene). */
function replay(scene: Scene, upTo: number): Log[] {
  const out: Log[] = [];
  scene.steps.slice(0, upTo).forEach((s, step) => {
    if (s.k === 'say') out.push({ t: 'partner', step, en: s.en, uz: s.uz });
    else if (s.k === 'note') out.push({ t: 'note', step, title: s.title, md: s.md });
    else if (isTask(s)) out.push({ t: 'you', step, en: modelReply(s), model: modelReply(s) });
  });
  return out;
}

/** The partner's last line before step `i`: the context a missed answer is reviewed with later. */
function contextBefore(scene: Scene, i: number): string {
  for (let k = i - 1; k >= 0; k--) { const s = scene.steps[k]; if (s.k === 'say') return `${scene.partner.name}: «${s.en}»\n`; }
  return '';
}

export function SceneRunner({ lesson, unitTitle, next, unitLast, unitId, known, onSaved }: {
  lesson: Lesson; unitTitle: string; next: { id: string; title: string; titleUz: string; unitId: string } | null;
  unitLast: boolean; unitId: string; known: Set<string>; onSaved: () => void;
}) {
  const scene = lesson.scene!;
  const navigate = useNavigate();
  const still = useReducedMotion();
  const { partner } = scene;
  const me = otherVoice(partner.voice);
  const total = scoredSteps(scene).length;
  const [phase, setPhase] = useState<Phase>('intro');
  const [cursor, setCursor] = useState(0);
  const [log, setLog] = useState<Log[]>([]);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [typing, setTyping] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showUz, setShowUz] = useState(readUz);
  const [saved] = useState(() => readSaved(lesson.id));
  const started = useRef(Date.now());
  const [run, setRun] = useState(0);
  const bottom = useRef<HTMLDivElement>(null);

  const say = (voice: 'emma' | 'george', en: string, mine = false) => {
    if (!mine) setSpeaking(true);
    void speak(voiceText(voice, en)).finally(() => { if (!mine) setSpeaking(false); });
  };

  // The scene plays itself: partner lines appear after a short "typing…", tasks wait for the learner.
  useEffect(() => {
    if (phase !== 'play') return;
    const step = scene.steps[cursor];
    if (!step) { setPhase('outro'); return; }
    if (step.k === 'say') {
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setLog((l) => (l.some((x) => x.step === cursor) ? l : [...l, { t: 'partner', step: cursor, en: step.en, uz: step.uz }]));
        say(partner.voice, step.en);
        setCursor((c) => c + 1);
      }, still ? 150 : 850);
      return () => clearTimeout(t);
    }
    if (step.k === 'note') setLog((l) => (l.some((x) => x.step === cursor) ? l : [...l, { t: 'note', step: cursor, title: step.title, md: step.md }]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, cursor, run]);

  useEffect(() => { bottom.current?.scrollIntoView?.({ behavior: still ? 'auto' : 'smooth', block: 'end' }); }, [log.length, typing, cursor, still]);

  const start = (resume: boolean) => {
    started.current = Date.now();
    if (resume && saved) { setCursor(saved.i); setResults(saved.r); setLog(replay(scene, saved.i)); } else { setCursor(0); setResults({}); setLog([]); writeSaved(lesson.id, null); }
    setPhase('play');
  };

  const taskDone = (step: TaskStep, index: number, firstTry: boolean, line: string) => {
    const r = { ...results, [index]: firstTry };
    setResults(r);
    setLog((l) => [...l, { t: 'you', step: index, en: line, model: modelReply(step) }]);
    say(me, modelReply(step), true);
    writeSaved(lesson.id, { i: index + 1, r });
    setTimeout(() => setCursor(index + 1), still ? 100 : 900);
  };

  const finish = () => { writeSaved(lesson.id, null); setPhase('result'); };
  const score = Object.values(results).filter(Boolean).length;
  const outcomes = (): Outcome[] => scene.steps.flatMap((s, i) => (isTask(s) && i in results ? [{ ex: stepExercise(s, contextBefore(scene, i)), section: 'q' as const, index: i, correct: results[i], own: true }] : []));
  const exit = () => { if (phase === 'intro' || phase === 'result' || window.confirm('Chiqasizmi? Shu joygacha saqlanadi, keyin davom ettirasiz.')) navigate('/learn'); };
  const toggleUz = () => { const v = !showUz; setShowUz(v); try { localStorage.setItem('scene:uz', v ? '1' : '0'); } catch { /* ignore */ } };

  const step = scene.steps[cursor];
  const waitingNote = phase === 'play' && step?.k === 'note';
  const task = phase === 'play' && step && isTask(step) && !typing ? step : null;

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
          <button type="button" onClick={exit} aria-label="Chiqish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <div className="flex-1">
            <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
              <motion.div className="h-full rounded-full bg-gradient-to-r from-primary to-brand-red-soft" animate={{ width: `${phase === 'result' || phase === 'outro' ? 100 : phase === 'intro' ? 0 : Math.round((cursor / scene.steps.length) * 100)}%` }} transition={{ duration: 0.4 }} />
            </div>
            <p className="text-[11px] text-muted-foreground mt-1 truncate">Real hayot · {lesson.titleUz.replace(/^Real hayot:\s*/, '')}</p>
          </div>
          {phase === 'play' && (
            <button type="button" onClick={toggleUz} aria-pressed={showUz} title="Tarjimani ko'rsatish / yashirish"
              className={`h-9 px-2.5 rounded-full border text-xs font-semibold inline-flex items-center gap-1.5 ${showUz ? 'border-primary/50 bg-primary/10 text-primary' : 'border-border text-muted-foreground'}`}><Languages className="h-4 w-4" />UZ</button>
          )}
          <Link to="/support" target="_blank" aria-label="Yordam" className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:border-primary/50"><LifeBuoy className="h-4 w-4 text-primary" /><span className="hidden min-[460px]:inline">Yordam</span></Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pt-20 pb-6" style={phase === 'play' ? { paddingBottom: task || waitingNote ? 'min(26rem, 55vh)' : '6rem' } : undefined}>
        {phase === 'intro' && <Intro lesson={lesson} scene={scene} unitTitle={unitTitle} total={total} resumeAt={saved && saved.i > 0 && saved.i < scene.steps.length ? saved.i : null} onStart={start} />}

        {phase === 'play' && (
          <div>
            <div className="sticky top-14 z-20 -mx-4 px-4 pt-2 pb-2 bg-background/90 backdrop-blur">
              <div className="flex items-center gap-3">
                <MiniAvatar place={scene.place} emoji={partner.emoji} speaking={speaking} />
                <div className="min-w-0">
                  <p className="font-bold leading-tight truncate">{partner.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{partner.role} · {PLACE_THEME[scene.place].label}</p>
                </div>
              </div>
            </div>
            <ul className="space-y-3 mt-3" aria-live="polite">
              <AnimatePresence initial={false}>
                {log.map((item) => <Bubble key={`${item.t}-${item.step}`} item={item} scene={scene} showUz={showUz} />)}
              </AnimatePresence>
              {typing && <li><TypingDots emoji={partner.emoji} /></li>}
            </ul>
            <div ref={bottom} />
          </div>
        )}

        {phase === 'outro' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <SceneArt place={scene.place} emoji={partner.emoji} celebrate height="h-56" />
            <h2 className="text-2xl font-extrabold mt-6 mb-2">Vaziyat tugadi! 🎉</h2>
            <div className="text-muted-foreground mb-6 leading-relaxed"><Md text={scene.outro} /></div>
            <Button size="lg" variant="glow" className="w-full" onClick={finish}>Natijani ko'rish</Button>
          </motion.div>
        )}

        {phase === 'result' && (
          <Result key={`${started.current}-${run}`} lesson={lesson} fresh={[]} score={score} total={Math.max(1, total)} seconds={Math.round((Date.now() - started.current) / 1000)} next={next}
            unitLast={unitLast} unitId={unitId}
            events={() => lessonEvents({ lesson, fresh: [], outcomes: outcomes(), known, review: [] })}
            onSaved={onSaved} onRetry={() => { setRun((n) => n + 1); start(false); }} />
        )}
      </main>

      {(task || waitingNote) && (
        <div className="fixed bottom-0 inset-x-0 z-30 border-t border-border bg-background/95 backdrop-blur safe-area-bottom">
          <div className="max-w-2xl mx-auto px-4 py-4 max-h-[60vh] overflow-y-auto">
            {waitingNote && <Button size="lg" className="w-full gap-2" onClick={() => setCursor(cursor + 1)}>Tushunarli <ChevronRight className="h-4 w-4" /></Button>}
            {task && <TaskPanel key={`${run}-${cursor}`} step={task} voiceFor={me} onDone={(first, line) => taskDone(task, cursor, first, line)} />}
          </div>
        </div>
      )}
    </div>
  );
}

// ------------------------------------------------------------------------------------------------ chat pieces

function TypingDots({ emoji }: { emoji: string }) {
  return (
    <div className="flex items-end gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-card border border-border text-xl shrink-0">{emoji}</span>
      <div className="rounded-2xl rounded-bl-md border border-border bg-card px-4 py-3 flex gap-1.5" aria-label="Yozmoqda">
        {[0, 1, 2].map((i) => <motion.span key={i} className="h-2 w-2 rounded-full bg-muted-foreground/60" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }} />)}
      </div>
    </div>
  );
}

function Bubble({ item, scene, showUz }: { item: Log; scene: Scene; showUz: boolean }) {
  const me = otherVoice(scene.partner.voice);
  const enter = { initial: { opacity: 0, y: 14, scale: 0.97 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { type: 'spring' as const, stiffness: 320, damping: 26 } };
  if (item.t === 'note') {
    return (
      <motion.li {...enter} className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4">
        <p className="text-sm font-semibold mb-1 flex items-center gap-2 text-sky-700 dark:text-sky-300"><Lightbulb className="h-4 w-4" />{item.title ?? 'Yangi ibora'}</p>
        <div className="text-[15px] leading-relaxed"><Md text={item.md} /></div>
      </motion.li>
    );
  }
  if (item.t === 'partner') {
    return (
      <motion.li {...enter} className="flex items-end gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-card border border-border text-xl shrink-0">{scene.partner.emoji}</span>
        <div className="max-w-[82%] rounded-2xl rounded-bl-md border border-border bg-card px-4 py-2.5 shadow-sm">
          <div className="flex items-start gap-2"><p className="text-[17px] font-medium leading-snug flex-1">{item.en}</p><SpeakButton text={voiceText(scene.partner.voice, item.en)} /></div>
          {showUz && <p className="text-xs text-muted-foreground mt-1">🇺🇿 {item.uz}</p>}
        </div>
      </motion.li>
    );
  }
  const differs = item.en.trim().toLowerCase() !== item.model.trim().toLowerCase();
  return (
    <motion.li {...enter} className="flex flex-col items-end">
      <div className="max-w-[82%] rounded-2xl rounded-br-md bg-primary text-primary-foreground px-4 py-2.5 shadow-sm">
        <div className="flex items-start gap-2">
          <p className="text-[17px] font-medium leading-snug flex-1">{item.en}</p>
          <button type="button" aria-label="Tinglash" onClick={() => void speak(voiceText(me, item.model))} className="h-7 w-7 rounded-full grid place-items-center bg-white/20 hover:bg-white/30 shrink-0"><Volume2 className="h-4 w-4" /></button>
        </div>
      </div>
      {differs && <p className="text-xs text-muted-foreground mt-1 mr-1">Namuna: <b>{item.model}</b></p>}
    </motion.li>
  );
}

function Intro({ lesson, scene, unitTitle, total, resumeAt, onStart }: {
  lesson: Lesson; scene: Scene; unitTitle: string; total: number; resumeAt: number | null; onStart: (resume: boolean) => void;
}) {
  const minutes = Math.max(3, Math.round(scene.steps.length / 2.5));
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <SceneArt place={scene.place} emoji={scene.partner.emoji} speaking />
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mt-5 mb-1">Real hayotiy vaziyat · {unitTitle}</p>
      <h1 className="text-3xl font-extrabold mb-1">{lesson.titleUz}</h1>
      <p className="text-muted-foreground mb-5">{lesson.title}</p>
      <div className="glass-card p-5 mb-4">
        <p className="text-sm font-semibold mb-1.5 flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" />Vaziyat</p>
        <div className="text-[15px] leading-relaxed"><Md text={scene.intro} /></div>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-secondary/50 p-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-card text-2xl border border-border">{scene.partner.emoji}</span>
          <div className="text-sm"><b>{scene.partner.name}</b> · {scene.partner.role}<br /><span className="text-muted-foreground">Suhbatdosh o'z ovozida gapiradi: ovoz yoqilgan bo'lsin 🔊</span></div>
        </div>
      </div>
      <div className="glass-card p-5 mb-5">
        <p className="text-sm font-semibold mb-1.5 flex items-center gap-2"><SparklesIcon className="h-4 w-4 text-primary" />Maqsad</p>
        <div className="text-[15px] leading-relaxed"><Md text={lesson.goal} /></div>
        <p className="text-xs text-muted-foreground mt-3">{total} ta javob · taxminan {minutes} daqiqa · xato qilsangiz sababini tushuntiramiz va qayta urinasiz.</p>
      </div>
      {resumeAt !== null ? (
        <div className="space-y-2.5">
          <Button size="lg" variant="glow" className="w-full text-base" onClick={() => onStart(true)}>Davom ettirish</Button>
          <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => onStart(false)}><RotateCcw className="h-4 w-4" />Boshidan boshlash</Button>
        </div>
      ) : <Button size="lg" variant="glow" className="w-full text-base" onClick={() => onStart(false)}>Suhbatni boshlash</Button>}
    </motion.div>
  );
}

// ------------------------------------------------------------------------------------------------ the learner's turn

function WhyCard({ why, answer, voice, typo }: { why?: string; answer?: string; voice: 'emma' | 'george'; typo?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-3 rounded-xl border border-amber-500/40 bg-amber-500/10 p-3.5 text-sm" role="status">
      <p className="font-semibold mb-1 flex items-center gap-1.5 text-amber-700 dark:text-amber-300"><Lightbulb className="h-4 w-4" />{typo ? "Imloga e'tibor bering" : "Keling, birga ko'ramiz"}</p>
      {why && <div className="leading-relaxed"><Md text={why} /></div>}
      {answer && <p className="mt-2 flex items-center gap-2 flex-wrap">To'g'ri javob: <b>«{answer}»</b><SpeakButton text={voiceText(voice, answer)} /></p>}
    </motion.div>
  );
}

function TaskPanel({ step, voiceFor, onDone }: { step: TaskStep; voiceFor: 'emma' | 'george'; onDone: (firstTry: boolean, line: string) => void }) {
  const [fails, setFails] = useState(0);
  const [why, setWhy] = useState<string | undefined>();
  const [typo, setTypo] = useState(false);
  const [ok, setOk] = useState<string | null>(null); // the accepted line, while the celebration and the drill run
  const [drill, setDrill] = useState(false);
  const firstTry = fails === 0;

  const succeed = (line: string, wasTypo?: boolean) => {
    setTypo(!!wasTypo);
    setOk(line);
    if (fails > 0 && step.drill) { setDrill(true); return; }
    setTimeout(() => onDone(firstTry, line), 650);
  };
  const fail = (reason?: string) => { setFails((n) => n + 1); setWhy(reason ?? step.why ?? 'Yana bir bor urinib ko‘ring.'); };
  const reveal = modelReply(step);

  if (drill && ok !== null && step.drill) {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">Mustahkamlash · bitta qisqa mashq</p>
        <ExerciseView ex={step.drill} mode="practice" onDone={() => onDone(false, ok)} />
      </div>
    );
  }

  return (
    <div className="relative">
      {ok !== null && <Sparkles />}
      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5 flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5" />Sizning navbatingiz</p>
      <div className="text-[15px] font-medium mb-3 leading-snug"><Md text={step.ask} /></div>
      {ok !== null ? (
        <motion.p initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 px-4 py-3 font-semibold flex items-center gap-2"><Check className="h-5 w-5" />{firstTry ? 'Ajoyib!' : "Endi to'g'ri!"} {ok}</motion.p>
      ) : step.k === 'pick' ? (
        <PickInput step={step} fails={fails} onWrong={fail} onRight={(en) => succeed(en)} />
      ) : step.k === 'build' ? (
        <BuildInput step={step} onCheck={(v: Verdict) => (v.correct ? succeed(step.words.join(' ')) : fail(v.why))} />
      ) : (
        <TypeInput step={step} onCheck={(v, line) => (v.correct ? succeed(line, v.typo) : fail(v.why))} />
      )}
      {ok === null && fails > 0 && <WhyCard why={why} answer={fails >= 2 ? reveal : undefined} voice={voiceFor} />}
      {ok === null && fails >= 2 && step.k !== 'pick' && (
        <button type="button" className="mt-3 text-xs text-muted-foreground underline underline-offset-2" onClick={() => succeed(reveal)}>Javobni ko'rsat va davom et</button>
      )}
      {ok !== null && typo && <p className="text-xs text-muted-foreground mt-2">Imloga e'tibor bering: to'g'ri yozilishi «{reveal}».</p>}
    </div>
  );
}

function PickInput({ step, fails, onWrong, onRight }: { step: Extract<TaskStep, { k: 'pick' }>; fails: number; onWrong: (why?: string) => void; onRight: (en: string) => void }) {
  const order = useMemo(() => shuffle(step.opts.map((o, i) => ({ o, i }))), [step]);
  const [wrong, setWrong] = useState<Set<number>>(new Set());
  const [shake, setShake] = useState<number | null>(null);
  const pick = (i: number) => {
    const o = step.opts[i];
    if (o.ok) { onRight(o.en); return; }
    setWrong(new Set(wrong).add(i)); setShake(i); setTimeout(() => setShake(null), 450);
    onWrong(o.why ?? step.why);
  };
  return (
    <div className="grid gap-2">
      {order.map(({ o, i }) => {
        const bad = wrong.has(i);
        const hint = fails >= 2 && o.ok;
        return (
          <motion.button key={i} type="button" disabled={bad} onClick={() => pick(i)} animate={shake === i ? { x: [0, -8, 8, -6, 6, 0] } : undefined} transition={{ duration: 0.4 }}
            className={`min-h-[48px] rounded-xl border-2 px-4 py-2.5 text-left text-[16px] font-medium transition-colors ${bad ? 'border-destructive/50 bg-destructive/10 text-muted-foreground line-through' : hint ? 'border-emerald-500 bg-emerald-500/10' : 'border-border bg-card hover:border-primary/60 hover:bg-primary/5 active:scale-[0.99]'}`}>{o.en}</motion.button>
        );
      })}
    </div>
  );
}

function TypeInput({ step, onCheck }: { step: Extract<TaskStep, { k: 'type' | 'fill' }>; onCheck: (v: Verdict, line: string) => void }) {
  const [value, setValue] = useState('');
  const [helps, setHelps] = useState(0);
  const [before, after] = step.k === 'fill' ? step.q.split('___') : ['', ''];
  const submit = () => {
    if (!value.trim()) return;
    // A fill answer is shown in the chat as the whole sentence.
    const line = step.k === 'fill' && step.a.some((a) => normalize(a) === normalize(value)) ? step.q.replace('___', value.trim()) : value.trim();
    onCheck(judgeReply(step, value), line);
  };
  return (
    <div>
      {step.k === 'fill' && (
        <p className="text-lg font-medium mb-2.5 flex flex-wrap items-baseline gap-x-1.5">
          <span>{before}</span><span className="inline-block min-w-[90px] border-b-2 border-dashed border-primary px-2 text-primary text-center">{value || '…'}</span><span>{after}</span>
        </p>
      )}
      <input value={value} onChange={(e) => setValue(e.target.value)} autoFocus autoCapitalize="off" autoCorrect="off" spellCheck={false}
        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }} placeholder={step.k === 'fill' ? "Yetishmayotgan so'zni yozing…" : 'Inglizcha yozing…'} aria-label="Javobingiz"
        className="w-full rounded-xl border-2 border-border bg-card px-4 py-3 text-lg outline-none focus:border-primary" />
      {helps > 0 && <p className="text-sm mt-2 text-amber-700 dark:text-amber-300 bg-amber-500/10 rounded-lg p-2.5 whitespace-pre-line break-words">💡 {replyHint(step, helps)}</p>}
      <div className="flex items-center gap-2 mt-3">
        {helps < 2 && <Button type="button" variant="ghost" size="sm" className="gap-1.5" onClick={() => setHelps(helps + 1)}><Lightbulb className="h-4 w-4" />{helps === 0 ? 'Yordam' : 'Yana yordam'}</Button>}
        <Button className="ml-auto" disabled={!value.trim()} onClick={submit}>Tekshirish</Button>
      </div>
    </div>
  );
}

function BuildInput({ step, onCheck }: { step: Extract<TaskStep, { k: 'build' }>; onCheck: (v: Verdict) => void }) {
  const tiles = useMemo(() => shuffle([...step.words, ...(step.extra ?? [])].map((w, i) => ({ w, i }))), [step]);
  const [built, setBuilt] = useState<number[]>([]);
  const used = new Set(built);
  const word = (i: number) => tiles.find((t) => t.i === i)!.w;
  return (
    <div>
      <div className="min-h-[56px] rounded-xl border-2 border-dashed border-border p-2 flex flex-wrap gap-2 mb-3 bg-secondary/20">
        {built.length === 0 && <span className="text-sm text-muted-foreground self-center px-2">So'zlarni tartib bilan bosing…</span>}
        {built.map((i) => <button key={i} type="button" onClick={() => setBuilt(built.filter((x) => x !== i))} className="rounded-lg border-2 border-primary/40 bg-card px-3 py-1.5 font-medium shadow-sm">{word(i)}</button>)}
      </div>
      <div className="flex flex-wrap gap-2">
        {tiles.map((t) => <button key={t.i} type="button" data-pool disabled={used.has(t.i)} onClick={() => setBuilt([...built, t.i])} className={`rounded-lg border-2 px-3 py-1.5 font-medium ${used.has(t.i) ? 'opacity-30 border-border' : 'border-border bg-card hover:border-primary/60'}`}>{t.w}</button>)}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <Button type="button" variant="ghost" size="sm" disabled={!built.length} onClick={() => setBuilt([])} className="gap-1.5"><RotateCcw className="h-4 w-4" />Tozalash</Button>
        <Button className="ml-auto" disabled={!built.length} onClick={() => onCheck(judgeReply(step, built.map(word).join(' ')))}>Tekshirish</Button>
      </div>
    </div>
  );
}
