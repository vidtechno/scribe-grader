import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Loader2, PartyPopper, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { ALL_LESSONS, LEVELS, levelOf } from '@/features/learn/course';
import type { LevelId } from '@/features/learn/types';
import { callLearning, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import {
  CHECK_SIZE, UPGRADE_PASS_PERCENT, bandResults, buildStartCheck, buildUpgradeCheck, recommendLevel, type CheckItem,
} from '@/features/learn/level-check';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { TestShell } from '@/features/learn/components/TestShell';

/**
 * A short level check (15 questions). Two uses:
 *  - /learn/start: a first-time learner finds the right level and starts there;
 *  - /learn/upgrade/:level: a learner who started too low moves up with a short test.
 */
export default function LearnLevelCheck() {
  const { level: param } = useParams();
  const upgrade = !!param;
  const target = LEVELS.find((l) => l.id === param && l.available)?.id as LevelId | undefined;
  const navigate = useNavigate();
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [items, setItems] = useState<CheckItem[] | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [phase, setPhase] = useState<'intro' | 'test' | 'result'>('intro');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [upgraded, setUpgraded] = useState<boolean | null>(null);
  const path = upgrade ? `/learn/upgrade/${param}` : '/learn/start';
  const audioTexts = useMemo(() => (items ? items.flatMap((it) => exerciseAudioTexts(it.ex)) : null), [items]);
  useLessonAudio(audioTexts, `check-${param ?? 'start'}-${items ? 'q' : ''}`);

  const shell = (children: React.ReactNode, props: { progress?: number; onExit?: () => void } = {}) => (
    <TestShell title={upgrade ? `${levelOf(target).title}'ga o'tish testi` : 'Daraja testi'} path={path} {...props}>{children}</TestShell>
  );

  const begin = async () => {
    setBusy(true); setError('');
    try {
      setItems(upgrade && target ? await buildUpgradeCheck(target) : await buildStartCheck());
      setAnswers([]); setI(0); setUpgraded(null); setPhase('test');
    } catch { setError("Test yuklanmadi. Internetni tekshirib, qayta urinib ko'ring."); }
    finally { setBusy(false); }
  };

  if (isLoading) return shell(<div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>);
  if (upgrade && (!target || !state?.profile)) return <Navigate to="/learn" replace />;
  if (!upgrade && state?.profile && phase !== 'result') return <Navigate to="/learn" replace />;

  const results = items ? bandResults(items, answers) : [];
  const score = answers.filter(Boolean).length;
  const recommended = recommendLevel(results);
  const firstOf = (level: LevelId) => ALL_LESSONS.find((l) => l.level === level);

  const finish = async (all: boolean[]) => {
    setAnswers(all); setPhase('result');
    if (!upgrade || !target) return;
    const right = all.filter(Boolean).length;
    try {
      const first = firstOf(target);
      const r = await callLearning<{ passed: boolean; advanced: boolean }>('learning_upgrade_level', {
        _level: target, _score: right, _total: all.length, _next_id: first?.id ?? null, _next_title: first?.titleUz ?? null,
      });
      setUpgraded(r.advanced || r.passed);
      await refresh();
    } catch (e) { setError(learningErrorMessage(e)); setUpgraded(false); }
  };

  const startAt = async (level: LevelId) => {
    setBusy(true); setError('');
    try {
      await callLearning('learning_start_placed', { _level: level, _score: score, _total: answers.length });
      await refresh();
      navigate('/learn', { replace: true });
    } catch (e) { setError(learningErrorMessage(e)); setBusy(false); }
  };

  if (phase === 'test' && items) {
    return shell(
      <>
        <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
          <span>Savol {i + 1} / {items.length}</span>
          <button type="button" className="underline underline-offset-2 hover:text-foreground" onClick={() => { const all = [...answers, false]; if (i + 1 >= items.length) void finish(all); else { setAnswers(all); setI(i + 1); } }}>Bilmayman</button>
        </div>
        <ExerciseView key={i} ex={items[i].ex} mode="test" onDone={(c) => {
          const all = [...answers, c];
          if (i + 1 >= items.length) void finish(all); else { setAnswers(all); setI(i + 1); }
        }} />
      </>,
      { progress: i / items.length, onExit: () => { if (window.confirm('Testdan chiqasizmi?')) navigate('/learn'); } },
    );
  }

  if (phase === 'result' && items) {
    if (upgrade && target) {
      const pct = Math.round((score / items.length) * 100);
      const passed = upgraded ?? pct >= UPGRADE_PASS_PERCENT;
      return shell(
        <div className="text-center py-6">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className={`mx-auto mb-4 w-24 h-24 rounded-[30px] grid place-items-center ${passed ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}>
            {passed ? <PartyPopper className="h-11 w-11 text-white" /> : <Trophy className="h-11 w-11 text-white" />}
          </motion.div>
          <h1 className="text-2xl font-extrabold mb-1">{upgraded === null ? 'Natija saqlanmoqda…' : passed ? `${levelOf(target).title} ochildi!` : "Bu safar o'tmadi"}</h1>
          <p className="text-muted-foreground mb-5">Natija: {score} / {items.length} ({pct}%). O'tish uchun {UPGRADE_PASS_PERCENT}% kerak.</p>
          {error && <p className="text-sm text-destructive mb-3">{error}</p>}
          <div className="space-y-2.5">
            {passed
              ? <Button size="lg" variant="glow" className="w-full" onClick={() => navigate('/learn')}>{levelOf(target).title} darslariga o'tish</Button>
              : <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => { setPhase('intro'); setItems(null); }}><RotateCcw className="h-4 w-4" />Qayta urinish</Button>}
            <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Kursga qaytish</Button>
          </div>
        </div>,
      );
    }
    const rec = levelOf(recommended);
    return shell(
      <div className="py-6">
        <div className="text-center">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className="mx-auto mb-4 w-24 h-24 rounded-[30px] grid place-items-center bg-gradient-to-br from-primary to-brand-red-soft"><Compass className="h-11 w-11 text-white" /></motion.div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Sizning darajangiz</p>
          <h1 className="text-3xl font-extrabold mb-1">{rec.title}</h1>
          <p className="text-muted-foreground mb-5">{rec.text}</p>
        </div>
        <div className="glass-card p-4 mb-5">
          <p className="text-sm font-semibold mb-3">Natija: {score} / {items.length}</p>
          <ul className="space-y-2.5">
            {results.map((r) => (
              <li key={r.band}>
                <div className="flex justify-between text-sm mb-1"><span>{levelOf(r.band).title}</span><span className="text-muted-foreground">{r.right} / {r.total}</span></div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full bg-primary" style={{ width: `${r.total ? (r.right / r.total) * 100 : 0}%` }} /></div>
              </li>
            ))}
          </ul>
        </div>
        {error && <p className="text-sm text-destructive mb-3">{error}</p>}
        <div className="space-y-2.5">
          <Button size="lg" variant="glow" className="w-full" disabled={busy} onClick={() => startAt(recommended)}>{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : `${rec.title}'dan boshlash`}</Button>
          {recommended !== 'beginner' && <Button size="lg" variant="outline" className="w-full" disabled={busy} onClick={() => startAt('beginner')}>Beginner'dan boshlash (takrorlash uchun)</Button>}
          <p className="text-xs text-muted-foreground text-center">Keyinroq darajani o'zgartirish mumkin: kursdagi "Daraja testi" kartasi orqali.</p>
        </div>
      </div>,
    );
  }

  return shell(
    <div className="py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{upgrade ? 'Tez o\'tish testi' : 'Birinchi qadam'}</p>
      <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><Compass className="h-8 w-8 text-primary" />{upgrade ? `${levelOf(target).title}'ga o'tish testi` : 'Darajangizni aniqlaymiz'}</h1>
      <p className="text-muted-foreground mb-5">
        {upgrade
          ? `Agar ${levelOf(LEVELS[LEVELS.findIndex((l) => l.id === target) - 1]?.id).title} darslari sizga oson bo'lsa, qisqa test bilan to'g'ridan-to'g'ri ${levelOf(target).title}'ga o'ting. Hech narsa yo'qolmaydi: eski darslar ochiq qoladi.`
          : "Bir necha qisqa savol — qaysi darajadan boshlash kerakligini topamiz. Shunda oson narsalarga vaqt sarflamaysiz va qiyin joydan ham boshlamaysiz."}
      </p>
      <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
        <li>📝 <b>{CHECK_SIZE} ta savol</b>, taxminan 4 daqiqa</li>
        <li>🤔 Bilmasangiz «Bilmayman» ni bosing, taxmin qilish shart emas</li>
        <li>{upgrade ? <>🎯 O'tish uchun kamida <b>{UPGRADE_PASS_PERCENT}%</b></> : '🎯 Oxirida darajangiz va natijalaringiz ko\'rsatiladi, boshlash joyini o\'zingiz tasdiqlaysiz'}</li>
        <li>🔊 Eshitish savollari bor, ovoz yoqilgan bo'lsin</li>
      </ul>
      {error && <p className="text-sm text-destructive mb-3">{error}</p>}
      <Button size="lg" variant="glow" className="w-full" disabled={busy} onClick={begin}>{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Testni boshlash'}</Button>
      <Button variant="ghost" className="w-full mt-2 gap-2" onClick={() => navigate(upgrade ? '/learn' : '/learn')}><ArrowLeft className="h-4 w-4" />{upgrade ? 'Orqaga' : "Testsiz, darajani o'zim tanlayman"}</Button>
    </div>,
  );
}
