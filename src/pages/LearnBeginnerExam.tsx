import { useMemo, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Loader2, Mic, PartyPopper, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { ALL_LESSONS, LEVELS, LEVEL_TEST } from '@/features/learn/course';
import type { Exercise, LevelId } from '@/features/learn/types';
import { callLearning, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { shuffle } from '@/features/learn/check';
import { BEGINNER_EXAM, BEGINNER_SPEAKING, type ExamItem, type ExamSkill } from '@/features/learn/content/beginner/exam';
import { ELEMENTARY_EXAM, ELEMENTARY_SPEAKING } from '@/features/learn/content/a1/exam';
import { CertificateDialog } from '@/features/learn/components/CertificateDialog';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { MistakeReview, TestShell } from '@/features/learn/components/TestShell';

const SKILLS: { id: ExamSkill; label: string; per: number }[] = [
  { id: 'grammar', label: 'Grammatika', per: 4 },
  { id: 'vocabulary', label: "Lug'at", per: 4 },
  { id: 'reading', label: "O'qish", per: 4 },
  { id: 'listening', label: 'Tinglash', per: 4 },
  { id: 'writing', label: 'Yozish va gap tuzish', per: 4 },
];
/** Every skill needs at least this share, so a strong skill cannot hide a weak one. */
const SKILL_MIN_PERCENT = 50;

interface ExamConfig {
  level: LevelId; title: string; cefr: string; bank: ExamItem[]; speaking: Exercise[];
  /** Said on the result card when the exam is passed. */
  ready: string;
}
const CONFIGS: Record<string, ExamConfig> = {
  beginner: { level: 'beginner', title: 'Beginner', cefr: 'A1', bank: BEGINNER_EXAM, speaking: BEGINNER_SPEAKING,
    ready: "Elementary darajasiga tayyorsiz: sodda gaplar tuzish, savol berish va o'tgan, hozirgi zamonda oddiy suhbat qilish ko'nikmalarini ko'rsatdingiz." },
  a1: { level: 'a1', title: 'Elementary', cefr: 'A1+', bank: ELEMENTARY_EXAM, speaking: ELEMENTARY_SPEAKING,
    ready: "Pre-Intermediate darajasiga tayyorsiz: kundalik vaziyatlarda gaplashish, o'tgan va kelasi zamon, tajriba haqida gapirish ko'nikmalarini ko'rsatdingiz." },
};

interface Outcome { passed: boolean; advanced: boolean; next_level: string | null; xp: number }

/**
 * Beginner final exam: 20 questions across five skills (grammar, vocabulary, reading, listening, writing), drawn fresh
 * from a bank of new situations. Pass = 70% overall AND at least 50% in every skill. The result shows each skill and
 * which lessons to revisit; a short speaking practice follows (it is not scored).
 */
export const BeginnerExam = () => <LevelExam config={CONFIGS.beginner} />;
export const ElementaryExam = () => <LevelExam config={CONFIGS.a1} />;

function LevelExam({ config }: { config: ExamConfig }) {
  const SPEAKING = config.speaking;
  const navigate = useNavigate();
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [items, setItems] = useState<ExamItem[] | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [error, setError] = useState('');
  const [certificate, setCertificate] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const questions = useMemo(() => items?.map((x) => x.ex) ?? null, [items]);
  const audioTexts = useMemo(() => (questions ? questions.flatMap(exerciseAudioTexts) : null), [questions]);
  useLessonAudio(audioTexts, `exam-${items ? 'q' : ''}`);
  const path = `/learn/level-test/${config.level}`;
  const nextLevel = LEVELS[LEVELS.findIndex((l) => l.id === config.level) + 1];
  const firstNext = nextLevel?.available ? ALL_LESSONS.find((l) => l.level === nextLevel.id) : undefined;

  const shell = (children: React.ReactNode, props: { progress?: number; onExit?: () => void } = {}) => (
    <TestShell title={`${config.title} yakuniy imtihoni`} path={path} {...props}>{children}</TestShell>
  );
  if (isLoading) return shell(<div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>);
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return shell(<div className="py-10"><LearnPaywall access={state.access} /></div>);

  const start = () => {
    const picked = SKILLS.flatMap((s) => shuffle(config.bank.filter((x) => x.skill === s.id)).slice(0, s.per));
    setItems(picked); setI(0); setAnswers([]); setOutcome(null); setError('');
  };

  const bySkill = (all: boolean[]) => SKILLS.map((s) => {
    const idx = items!.map((x, n) => (x.skill === s.id ? n : -1)).filter((n) => n >= 0);
    const right = idx.filter((n) => all[n]).length;
    return { ...s, right, total: idx.length, pct: idx.length ? Math.round((right / idx.length) * 100) : 0 };
  });

  const submit = async (all: boolean[]) => {
    const score = all.filter(Boolean).length;
    const weak = bySkill(all).some((s) => s.pct < SKILL_MIN_PERCENT);
    // The server only knows the total. A weak skill keeps the exam below the pass mark.
    const sent = weak && score * 100 >= all.length * LEVEL_TEST.passPercent ? Math.ceil(all.length * LEVEL_TEST.passPercent / 100) - 1 : score;
    try {
      const r = await callLearning<Outcome>('learning_submit_level_test', {
        _level: config.level, _score: sent, _total: all.length, _next_id: firstNext?.id ?? null, _next_title: firstNext?.titleUz ?? null,
      });
      setOutcome(r);
      await refresh();
    } catch (e) { setError(learningErrorMessage(e)); }
  };

  if (outcome && items && questions) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / items.length) * 100);
    const skills = bySkill(answers);
    const weakSkills = skills.filter((s) => s.pct < SKILL_MIN_PERCENT);
    const missedTopics = [...new Set(items.filter((x, n) => !answers[n]).map((x) => x.topic))]
      .map((t) => ALL_LESSONS.find((l) => l.id === t)).filter(Boolean) as typeof ALL_LESSONS;
    return shell(
      <div className="py-6">
        <div className="text-center">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className={`mx-auto mb-4 w-24 h-24 rounded-[30px] grid place-items-center ${outcome.passed ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}>
            {outcome.passed ? <PartyPopper className="h-11 w-11 text-white" /> : <Trophy className="h-11 w-11 text-white" />}
          </motion.div>
          <h1 className="text-2xl font-extrabold mb-1">{outcome.passed ? `${config.title} tugallandi!` : "Bu safar o'tmadi"}</h1>
          <p className="text-muted-foreground mb-5">Natija: {score} / {items.length} ({pct}%). O'tish uchun jami {LEVEL_TEST.passPercent}% va har bir ko'nikmada kamida {SKILL_MIN_PERCENT}% kerak.</p>
        </div>

        <div className="glass-card p-4 mb-4">
          <p className="font-semibold mb-3">Ko'nikmalar bo'yicha</p>
          <ul className="space-y-2.5">
            {skills.map((s) => (
              <li key={s.id}>
                <div className="flex justify-between text-sm mb-1"><span>{s.label}</span><span className={s.pct < SKILL_MIN_PERCENT ? 'text-destructive font-semibold' : 'text-muted-foreground'}>{s.right} / {s.total}</span></div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className={`h-full rounded-full ${s.pct < SKILL_MIN_PERCENT ? 'bg-destructive' : s.pct >= 75 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${s.pct}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>

        {!outcome.passed && weakSkills.length > 0 && pct >= LEVEL_TEST.passPercent && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm mb-4">
            Umumiy natija yetarli, lekin <b>{weakSkills.map((s) => s.label).join(', ')}</b> bo'yicha {SKILL_MIN_PERCENT}% ga yetmadi. Shu ko'nikmani mustahkamlab, qayta topshiring.
          </div>
        )}
        {outcome.passed && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm mb-4">
            {config.ready}
            {missedTopics.length > 0 && " Quyidagi mavzularni vaqti-vaqti bilan takrorlab turing."}
          </div>
        )}
        {missedTopics.length > 0 && (
          <div className="glass-card p-4 mb-4 text-sm">
            <p className="font-semibold mb-1.5">Qaysi darslarni takrorlash foydali</p>
            <ul className="space-y-1">{missedTopics.slice(0, 8).map((l) => <li key={l.id}><Link className="text-primary underline underline-offset-2" to={`/learn/lesson/${l.id}`}>{l.titleUz}</Link></li>)}</ul>
          </div>
        )}

        <div className="glass-card p-4 mb-4">
          <p className="font-semibold flex items-center gap-2 mb-1"><Mic className="h-4 w-4 text-primary" />Gapirish amaliyoti (baholanmaydi)</p>
          <p className="text-sm text-muted-foreground mb-3">Uchta gapni ovoz chiqarib ayting — keyingi darajada gapirishga tayyorlanish uchun.</p>
          {speaking ? <SpeakingPractice items={SPEAKING} /> : <Button variant="outline" onClick={() => setSpeaking(true)}>Boshlash</Button>}
        </div>

        <MistakeReview questions={questions} answers={answers} />
        <div className="space-y-2.5 mt-6">
          {outcome.passed && <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => setCertificate(true)}><Award className="h-4 w-4" />Sertifikatni olish</Button>}
          {!outcome.passed && <Button size="lg" variant="glow" className="w-full gap-2" onClick={start}><RotateCcw className="h-4 w-4" />Qayta urinish</Button>}
          <Button size="lg" variant={outcome.passed ? 'glow' : 'outline'} className="w-full" onClick={() => navigate('/learn')}>
            {outcome.passed && outcome.advanced && nextLevel ? `${nextLevel.title} darslariga o'tish` : 'Kursga qaytish'}
          </Button>
        </div>
        {certificate && <CertificateDialog levelId={config.level} onClose={() => setCertificate(false)} />}
      </div>,
    );
  }

  if (items && questions) {
    const skill = SKILLS.find((s) => s.id === items[i].skill)!;
    return shell(
      <>
        <p className="text-xs text-muted-foreground mb-1">Savol {i + 1} / {items.length} · javoblar oxirida ko'rsatiladi</p>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{skill.label}</p>
        <ExerciseView key={i} ex={questions[i]} mode="test" onDone={(c) => {
          const all = [...answers, c];
          setAnswers(all);
          if (i + 1 >= items.length) void submit(all); else setI(i + 1);
        }} />
        {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      </>,
      { progress: i / items.length, onExit: () => { if (window.confirm('Imtihondan chiqasizmi? Bu urinish hisoblanmaydi.')) navigate('/learn'); } },
    );
  }

  return shell(
    <div className="py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{config.title} · {config.cefr}</p>
      <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><Trophy className="h-8 w-8 text-primary" />{config.title} yakuniy imtihoni</h1>
      <p className="text-muted-foreground mb-5">Barcha darslarni o'tmasdan ham topshirishingiz mumkin. Savollar darslardagi misollardan emas, yangi vaziyatlardan olinadi.</p>
      <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
        <li>📝 <b>{LEVEL_TEST.questions} ta savol</b>: grammatika, lug'at, o'qish, tinglash, yozish (har biridan 4 ta)</li>
        <li>🎯 O'tish: jami kamida <b>{LEVEL_TEST.passPercent}%</b> va <b>har bir ko'nikmada kamida {SKILL_MIN_PERCENT}%</b></li>
        <li>📊 Oxirida har bir ko'nikma bo'yicha natija va takrorlash kerak bo'lgan darslar ko'rsatiladi</li>
        <li>🎤 Keyin baholanmaydigan gapirish amaliyoti</li>
        <li>🔁 Urinishlar soni cheklanmagan, savollar har safar yangi tanlanadi</li>
        <li>🔊 Tinglash savollari bor — quloqchin yoki ovoz yoqilgan bo'lsin</li>
      </ul>
      {error && <p className="text-sm text-destructive mb-3">{error}</p>}
      <Button size="lg" variant="glow" className="w-full" onClick={start}>Imtihonni boshlash</Button>
      <Button variant="ghost" className="w-full mt-2 gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Orqaga</Button>
    </div>,
  );
}

function SpeakingPractice({ items }: { items: Exercise[] }) {
  const [n, setN] = useState(0);
  if (n >= items.length) return <p className="text-sm text-emerald-600 font-medium">Barakalla! Gapirish amaliyoti tugadi.</p>;
  return <ExerciseView key={n} ex={items[n]} mode="practice" onDone={() => setN(n + 1)} />;
}
