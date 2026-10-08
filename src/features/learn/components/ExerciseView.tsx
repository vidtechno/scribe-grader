import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, CheckCircle2, Lightbulb, Loader2, Mic, RotateCcw, Square, X, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Exercise } from '../types';
import { checkOrder, checkTyped, judgeSpeech, shuffle, speechQualityHint, type SpeechJudgement, type SpeechQuality } from '../check';
import { canRecord, startRecording, transcribeClip, type Recording } from '../recognition';
import { listenOnce, speak, speechRecognitionSupported } from '../speech';
import { Md } from './Md';
import { SpeakButton } from './SpeakButton';

/**
 * practice / quiz: answer → feedback with explanation → "Davom etish".
 * inline: quick check inside a theory slide (feedback stays, no continue button).
 * test: no feedback, the answer is submitted right away.
 */
export type ExerciseMode = 'practice' | 'quiz' | 'inline' | 'test';

interface Feedback { correct: boolean; expected?: string; note?: string }

const TITLES: Record<Exercise['k'], string> = {
  choice: "To'g'ri javobni tanlang",
  listen: 'Tinglang va tanlang',
  fill: "Bo'sh joyni to'ldiring",
  order: "So'zlardan gap tuzing",
  translate: 'Inglizchaga tarjima qiling',
  match: 'Juftliklarni toping',
  tf: "To'g'ri yoki noto'g'ri?",
  speak: 'Tinglang va ovoz chiqarib takrorlang',
};

export function ExerciseView({ ex, mode, onDone }: { ex: Exercise; mode: ExerciseMode; onDone: (correct: boolean) => void }) {
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const answered = feedback !== null;

  const finish = (fb: Feedback) => {
    if (answered) return;
    if (mode === 'test') { onDone(fb.correct); return; }
    setFeedback(fb);
    if (mode === 'inline') onDone(fb.correct);
  };

  const why = 'why' in ex ? ex.why : undefined;

  return (
    <div className={mode === 'inline' ? 'rounded-2xl border border-primary/20 bg-primary/[0.03] p-4' : ''}>
      <p className={`font-semibold text-muted-foreground uppercase tracking-wide ${mode === 'inline' ? 'text-[11px] mb-2' : 'text-xs mb-3'}`}>
        {mode === 'inline' ? "⚡ O'zingizni tekshiring" : TITLES[ex.k]}
      </p>
      <Body ex={ex} answered={answered} mode={mode} finish={finish} />
      {feedback && mode !== 'test' && (
        <FeedbackPanel feedback={feedback} why={why} inline={mode === 'inline'} onContinue={() => onDone(feedback.correct)} />
      )}
    </div>
  );
}

function Body({ ex, answered, mode, finish }: { ex: Exercise; answered: boolean; mode: ExerciseMode; finish: (fb: Feedback) => void }) {
  switch (ex.k) {
    case 'choice': return <Choice prompt={<Md text={ex.q} />} say={ex.say} opts={ex.opts} a={ex.a} answered={answered} mode={mode} finish={finish} />;
    case 'listen': return <Choice prompt={null} say={ex.say} listen opts={ex.opts} a={ex.a} answered={answered} mode={mode} finish={finish} />;
    case 'tf': return <Choice prompt={<Md text={ex.q} />} opts={["To'g'ri", "Noto'g'ri"]} a={ex.a ? 0 : 1} answered={answered} mode={mode} finish={finish} />;
    case 'fill': return <Fill ex={ex} answered={answered} finish={finish} />;
    case 'translate': return <Translate ex={ex} answered={answered} finish={finish} />;
    case 'order': return <Order ex={ex} answered={answered} finish={finish} />;
    case 'match': return <Match ex={ex} answered={answered} finish={finish} />;
    case 'speak': return <Speak ex={ex} answered={answered} finish={finish} />;
  }
}

function Choice({ prompt, say, listen, opts, a, answered, mode, finish }: {
  prompt: React.ReactNode; say?: string; listen?: boolean; opts: string[]; a: number; answered: boolean; mode: ExerciseMode;
  finish: (fb: Feedback) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [reveal, setReveal] = useState(false);
  useEffect(() => { setReveal(false); if (listen && say) void speak(say); }, [listen, say]);
  const pick = (i: number) => {
    if (answered) return;
    setPicked(i);
    if (mode === 'test') return;
    finish({ correct: i === a, expected: opts[a] });
  };
  return (
    <div>
      {listen && say ? (
        <div className="flex flex-col items-center gap-2 py-4">
          <SpeakButton text={say} size="lg" slow />
          {/* Some phones play no sound at all: the learner must still be able to continue. */}
          {reveal
            ? <p className="text-sm rounded-lg bg-secondary px-3 py-1.5">«{say}»</p>
            : <button type="button" onClick={() => setReveal(true)} className="text-xs text-muted-foreground underline underline-offset-2 hover:text-primary">Ovoz eshitilmayaptimi? Matnni ko'rsatish</button>}
        </div>
      ) : (
        prompt && <div className="text-lg sm:text-xl font-medium mb-4 flex items-start gap-3 leading-snug">{say && <SpeakButton text={say} size="md" slow />}<span className="flex-1">{prompt}</span></div>
      )}
      <div className={`grid gap-2.5 ${opts.length === 2 ? 'grid-cols-2' : 'sm:grid-cols-2'}`}>
        {opts.map((o, i) => {
          const state = !answered || mode === 'test' ? (picked === i ? 'picked' : 'idle')
            : i === a ? 'right' : i === picked ? 'wrong' : 'idle';
          return (
            <button key={i} type="button" onClick={() => pick(i)} disabled={answered && mode !== 'test'}
              className={`min-h-[52px] rounded-xl border-2 px-4 py-3 text-left font-medium transition-all flex items-center gap-3 ${
                state === 'right' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                  : state === 'wrong' ? 'border-destructive bg-destructive/10 text-destructive animate-shake'
                    : state === 'picked' ? 'border-primary bg-primary/10'
                      : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5 active:scale-[0.98]'}`}>
              <span className="w-6 h-6 rounded-md border border-current/30 grid place-items-center text-xs opacity-70 shrink-0">{i + 1}</span>
              <span className="flex-1">{o}</span>
              {state === 'right' && <CheckCircle2 className="h-5 w-5" />}
              {state === 'wrong' && <XCircle className="h-5 w-5" />}
            </button>
          );
        })}
      </div>
      {mode === 'test' && (
        <Button className="w-full mt-4" size="lg" disabled={picked === null || answered}
          onClick={() => picked !== null && finish({ correct: picked === a })}>Javobni tasdiqlash</Button>
      )}
    </div>
  );
}

function TextAnswer({ value, onChange, onSubmit, disabled, placeholder, autoFocus = true }: {
  value: string; onChange: (v: string) => void; onSubmit: () => void; disabled: boolean; placeholder: string; autoFocus?: boolean;
}) {
  return (
    <input value={value} onChange={(e) => onChange(e.target.value)} disabled={disabled} placeholder={placeholder}
      autoFocus={autoFocus} autoCapitalize="off" autoCorrect="off" spellCheck={false}
      onKeyDown={(e) => { if (e.key === 'Enter' && value.trim()) onSubmit(); }}
      className="w-full rounded-xl border-2 border-border bg-card px-4 py-3 text-lg outline-none focus:border-primary disabled:opacity-80" />
  );
}

function Fill({ ex, answered, finish }: { ex: Extract<Exercise, { k: 'fill' }>; answered: boolean; finish: (fb: Feedback) => void }) {
  const [value, setValue] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [before, after] = ex.q.split('___');
  const submit = () => {
    const r = checkTyped(value, ex.a);
    finish({ correct: r.correct, expected: r.expected, note: r.typo ? `Imloga e'tibor bering: to'g'ri yozilishi — "${r.expected}"` : undefined });
  };
  return (
    <div>
      <div className="text-lg sm:text-xl font-medium mb-1 leading-relaxed flex flex-wrap items-center gap-x-2 gap-y-2">
        <span>{before}</span>
        <span className="inline-block min-w-[110px] border-b-2 border-dashed border-primary px-2 text-primary">{value || '…'}</span>
        <span>{after}</span>
        <SpeakButton text={ex.q.replace('___', '…')} />
      </div>
      {ex.uz && <p className="text-sm text-muted-foreground mb-4">🇺🇿 {ex.uz}</p>}
      <TextAnswer value={value} onChange={setValue} onSubmit={submit} disabled={answered} placeholder="Javobni yozing…" />
      <div className="flex items-center gap-2 mt-3">
        {ex.hint && !answered && (
          <Button type="button" variant="ghost" size="sm" className="gap-1.5" onClick={() => setShowHint(true)}><Lightbulb className="h-4 w-4" />Yordam</Button>
        )}
        <Button className="ml-auto" disabled={!value.trim() || answered} onClick={submit}>Tekshirish</Button>
      </div>
      {showHint && ex.hint && <p className="text-sm mt-2 text-amber-700 dark:text-amber-300 bg-amber-500/10 rounded-lg p-2.5">💡 {ex.hint}</p>}
    </div>
  );
}

/** Partial help for a translation: never the full answer. Step 1 sizes it up, 2 shows first letters, 3 opens the first half. */
function translateHint(answer: string, step: number): string {
  const words = answer.replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean);
  if (step === 1) return `Javob ${words.length} ta so'zdan iborat. Birinchi so'z: ${words[0][0]}…`;
  const mask = (w: string, keep: number) => w.slice(0, keep) + '_'.repeat(Math.max(w.length - keep, 1));
  if (step === 2) return words.map((w) => mask(w, 1)).join(' ');
  const open = Math.max(1, Math.floor(words.length / 2));
  return words.map((w, i) => (i < open ? w : mask(w, 1))).join(' ');
}

function Translate({ ex, answered, finish }: { ex: Extract<Exercise, { k: 'translate' }>; answered: boolean; finish: (fb: Feedback) => void }) {
  const [value, setValue] = useState('');
  const [helps, setHelps] = useState(0);
  const submit = () => {
    const r = checkTyped(value, ex.a);
    finish({ correct: r.correct, expected: r.expected, note: r.typo ? `Imloga e'tibor bering: "${r.expected}"` : undefined });
  };
  return (
    <div>
      <p className="text-xl font-semibold mb-4">🇺🇿 {ex.uz}</p>
      <TextAnswer value={value} onChange={setValue} onSubmit={submit} disabled={answered} placeholder="Inglizcha yozing…" />
      {helps > 0 && !answered && (
        <p className="text-sm mt-2 text-amber-700 dark:text-amber-300 bg-amber-500/10 rounded-lg p-2.5 font-mono break-words">💡 {translateHint(ex.a[0], helps)}</p>
      )}
      <div className="flex items-center gap-2 mt-3">
        {!answered && helps < 3 && (
          <Button type="button" variant="ghost" size="sm" className="gap-1.5" onClick={() => setHelps(helps + 1)}>
            <Lightbulb className="h-4 w-4" />{helps === 0 ? 'Yordam' : 'Yana yordam'}
          </Button>
        )}
        <Button className="ml-auto" disabled={!value.trim() || answered} onClick={submit}>Tekshirish</Button>
      </div>
    </div>
  );
}

function Order({ ex, answered, finish }: { ex: Extract<Exercise, { k: 'order' }>; answered: boolean; finish: (fb: Feedback) => void }) {
  const tiles = useMemo(() => shuffle([...ex.words, ...(ex.extra ?? [])].map((w, i) => ({ w, i }))), [ex]);
  const [built, setBuilt] = useState<number[]>([]);
  const used = new Set(built);
  const submit = () => {
    const words = built.map((i) => tiles.find((t) => t.i === i)!.w);
    finish({ correct: checkOrder(words, ex.words, ex.alt), expected: ex.words.join(' ') });
  };
  return (
    <div>
      <p className="text-lg font-semibold mb-4">🇺🇿 {ex.uz}</p>
      <div className="min-h-[64px] rounded-xl border-2 border-dashed border-border p-2.5 flex flex-wrap gap-2 mb-4 bg-secondary/20">
        {built.length === 0 && <span className="text-sm text-muted-foreground self-center px-2">So'zlarni tartib bilan bosing…</span>}
        {built.map((i) => (
          <button key={i} type="button" disabled={answered} onClick={() => setBuilt(built.filter((x) => x !== i))}
            className="rounded-lg border-2 border-primary/40 bg-card px-3 py-2 font-medium shadow-sm">{tiles.find((t) => t.i === i)!.w}</button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {tiles.map((t) => (
          <button key={t.i} type="button" disabled={answered || used.has(t.i)} onClick={() => setBuilt([...built, t.i])}
            className={`rounded-lg border-2 px-3 py-2 font-medium transition-all ${used.has(t.i) ? 'border-border bg-secondary text-transparent' : 'border-border bg-card hover:border-primary/60 active:scale-95 shadow-sm'}`}>{t.w}</button>
        ))}
      </div>
      <div className="flex items-center mt-4 gap-2">
        <Button type="button" variant="ghost" size="sm" disabled={answered || !built.length} onClick={() => setBuilt([])} className="gap-1.5"><RotateCcw className="h-4 w-4" />Tozalash</Button>
        <Button className="ml-auto" disabled={answered || !built.length} onClick={submit}>Tekshirish</Button>
      </div>
    </div>
  );
}

function Match({ ex, answered, finish }: { ex: Extract<Exercise, { k: 'match' }>; answered: boolean; finish: (fb: Feedback) => void }) {
  const left = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ text: p[0], i }))), [ex]);
  const right = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ text: p[1], i }))), [ex]);
  const [selected, setSelected] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [wrong, setWrong] = useState<number | null>(null);
  const mistakes = useRef(0);
  const choose = (i: number) => {
    if (answered || selected === null || matched.has(i)) return;
    if (i === selected) {
      const next = new Set(matched).add(i);
      setMatched(next);
      setSelected(null);
      if (next.size === ex.pairs.length) {
        finish({ correct: mistakes.current <= 1, note: mistakes.current ? `${mistakes.current} ta xato bilan` : undefined });
      }
    } else {
      mistakes.current++;
      setWrong(i);
      setTimeout(() => setWrong(null), 500);
    }
  };
  const cell = 'min-h-[52px] w-full rounded-xl border-2 px-3 py-2.5 font-medium text-left transition-all';
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="space-y-2.5">
        {left.map((l) => (
          <button key={l.i} type="button" disabled={matched.has(l.i) || answered}
            onClick={() => { setSelected(l.i); if (/^[a-z]/i.test(l.text)) void speak(l.text); }}
            className={`${cell} ${matched.has(l.i) ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-60'
              : selected === l.i ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'}`}>{l.text}</button>
        ))}
      </div>
      <div className="space-y-2.5">
        {right.map((r) => (
          <button key={r.i} type="button" disabled={matched.has(r.i) || answered} onClick={() => choose(r.i)}
            className={`${cell} ${matched.has(r.i) ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 opacity-60'
              : wrong === r.i ? 'border-destructive bg-destructive/10 animate-shake' : 'border-border bg-card hover:border-primary/50'}`}>{r.text}</button>
        ))}
      </div>
      {selected === null && matched.size === 0 && <p className="col-span-2 text-xs text-muted-foreground text-center">Avval chapdan, keyin o'ngdan mosini bosing</p>}
    </div>
  );
}

const SPEAK_NOTES: Record<string, string> = {
  great: "Aniq eshitildi! 👏",
  good: "Yaxshi, tushunarli aytdingiz! 👍",
  close: "Tushunarli — mashq qilishda davom eting.",
};

/**
 * Listen and repeat. The voice is transcribed (Whisper through `transcribe-lesson`, or the browser's recogniser as a
 * fallback) and compared leniently with the phrase. This tells whether the phrase was understood; it does not claim
 * the pronunciation is perfect or wrong, and a few honest tries are always enough to move on.
 */
function Speak({ ex, answered, finish }: { ex: Extract<Exercise, { k: 'speak' }>; answered: boolean; finish: (fb: Feedback) => void }) {
  const cloud = useMemo(() => canRecord(), []);
  const browser = useMemo(() => speechRecognitionSupported(), []);
  const [phase, setPhase] = useState<'idle' | 'recording' | 'working'>('idle');
  const [heard, setHeard] = useState<string | null>(null);
  const [verdict, setVerdict] = useState<SpeechJudgement | null>(null);
  const [hint, setHint] = useState<string | null>(null);
  const [tries, setTries] = useState(0);
  const [level, setLevel] = useState(0);
  const [cloudWorks, setCloudWorks] = useState(cloud);
  const recording = useRef<Recording | null>(null);
  useEffect(() => { void speak(ex.say); }, [ex.say]);
  useEffect(() => () => recording.current?.cancel(), []);

  const judge = (text: string, quality: SpeechQuality | null) => {
    const j = judgeSpeech(text, ex.say);
    const n = tries + 1;
    setTries(n);
    setHeard(text);
    setVerdict(j);
    setHint(speechQualityHint(text, quality, j.passed));
    if (j.passed) finish({ correct: true, note: SPEAK_NOTES[j.level] });
    else if (n >= 3) finish({ correct: true, note: "Mashq sifatida hisoblandi — davom etamiz. Keyinroq yana urinib ko'ring." });
  };

  const stopAndSend = async () => {
    const r = recording.current;
    if (!r) return;
    recording.current = null;
    setPhase('working');
    try {
      const { blob } = await r.stop();
      const t = await transcribeClip(blob);
      judge(t.transcript, t.quality);
    } catch {
      // The voice service is unavailable: use the browser's recogniser next time (or the self-check button).
      setCloudWorks(false);
      setHint("Ovoz xizmatiga ulanib bo'lmadi. Qayta urinib ko'ring.");
    } finally { setPhase('idle'); }
  };

  const start = async () => {
    if (phase !== 'idle' || answered) return;
    if (cloudWorks) {
      try {
        setLevel(0);
        recording.current = await startRecording(9000, setLevel, () => void stopAndSend());
        setPhase('recording');
      } catch {
        setHint("Mikrofonga ruxsat berilmadi. Brauzer sozlamalarida mikrofonni yoqing.");
        setCloudWorks(false);
      }
      return;
    }
    setPhase('recording');
    const text = await listenOnce();
    setPhase('idle');
    judge(text, null);
  };

  const canListen = cloudWorks || browser;
  return (
    <div className="text-center">
      <p className="text-2xl sm:text-3xl font-bold mb-1">{ex.say}</p>
      {ex.uz && <p className="text-sm text-muted-foreground mb-4">{ex.uz}</p>}
      <div className="flex justify-center mb-5"><SpeakButton text={ex.say} size="lg" slow /></div>
      {canListen ? (
        <>
          <Button type="button" size="lg" variant={phase === 'recording' ? 'destructive' : 'glow'} disabled={answered || phase === 'working'}
            onClick={() => (phase === 'recording' && recording.current ? void stopAndSend() : void start())} className="gap-2 rounded-full px-6">
            {phase === 'working' ? <Loader2 className="h-5 w-5 animate-spin" /> : phase === 'recording' ? <Square className="h-4 w-4 fill-current" /> : <Mic className="h-5 w-5" />}
            {phase === 'working' ? 'Tinglayapman…' : phase === 'recording' ? (cloudWorks ? "Tugatish uchun bosing" : 'Gapiring…') : tries ? 'Yana urinib ko\'rish' : 'Mikrofonni bosing va ayting'}
          </Button>
          {phase === 'recording' && cloudWorks && (
            <div className="mx-auto mt-3 h-1.5 w-40 rounded-full bg-secondary overflow-hidden" aria-hidden>
              <div className="h-full bg-destructive transition-[width] duration-100" style={{ width: `${Math.max(6, level * 100)}%` }} />
            </div>
          )}
          {heard !== null && !answered && (
            <div className="mt-4 text-sm space-y-1">
              <p className="text-muted-foreground">Eshitildi: <span className="font-semibold text-foreground">"{heard || '—'}"</span></p>
              {verdict && verdict.missing.length > 0 && !hint && <p className="text-amber-700 dark:text-amber-300">Yana bir bor ayting: <b>{verdict.missing.join(', ')}</b></p>}
              {!verdict?.missing.length && !hint && <p className="text-amber-700 dark:text-amber-300">Yana bir bor urinib ko'ring — biroz sekinroq va aniqroq.</p>}
            </div>
          )}
          {hint && !answered && <p className="mt-3 text-sm text-amber-700 dark:text-amber-300 max-w-sm mx-auto">{hint}</p>}
          {!answered && (
            <button type="button" className={`block mx-auto mt-4 text-xs underline ${tries >= 2 ? 'text-foreground font-medium' : 'text-muted-foreground'}`} onClick={() => finish({ correct: true })}>
              Hozir gapira olmayman — o'tkazib yuborish
            </button>
          )}
          <p className="text-[11px] text-muted-foreground mt-3 max-w-xs mx-auto">Bu — gapingiz tanildimi-yo'qmi tekshiruvi, talaffuz bahosi emas. Aksent muammo emas.</p>
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-3">Ovoz chiqarib 2–3 marta takrorlang.</p>
          <Button type="button" disabled={answered} onClick={() => finish({ correct: true })} className="gap-2"><Check className="h-4 w-4" />Takrorladim</Button>
        </>
      )}
    </div>
  );
}

function FeedbackPanel({ feedback, why, inline, onContinue }: { feedback: Feedback; why?: string; inline: boolean; onContinue: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const good = feedback.correct;
  return (
    <div className={`mt-4 rounded-xl p-4 border animate-fade-in ${good ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-destructive/10 border-destructive/30'}`}>
      <div className="flex items-start gap-3">
        <span className={`w-8 h-8 rounded-full grid place-items-center shrink-0 ${good ? 'bg-emerald-500 text-white' : 'bg-destructive text-destructive-foreground'}`}>
          {good ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </span>
        <div className="flex-1 min-w-0 text-sm">
          <p className={`font-bold text-base ${good ? 'text-emerald-700 dark:text-emerald-300' : 'text-destructive'}`}>
            {good ? ['Barakalla!', "To'g'ri!", 'Ajoyib!', 'Zo\'r!'][Math.floor(Math.random() * 4)] : "Noto'g'ri"}
          </p>
          {!good && feedback.expected && <p className="mt-0.5">To'g'ri javob: <span className="font-semibold">{feedback.expected}</span></p>}
          {feedback.note && <p className="mt-0.5">{feedback.note}</p>}
          {why && <p className="mt-1.5 text-muted-foreground"><Md text={why} /></p>}
        </div>
      </div>
      {!inline && <Button ref={ref} className="w-full mt-3" variant={good ? 'glow' : 'default'} onClick={onContinue}>Davom etish</Button>}
    </div>
  );
}
