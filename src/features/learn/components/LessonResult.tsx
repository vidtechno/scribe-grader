import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Flame, RotateCcw, Star, Trophy, Zap } from 'lucide-react';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import { LESSON_COMPLETE_PERCENT, drillIds } from '@/features/learn/course';
import type { Lesson, Word } from '@/features/learn/types';
import { callLearning, learningErrorMessage } from '@/features/learn/api';
import { recordReview } from '@/features/learn/engine/api';
import type { ReviewEvent } from '@/features/learn/engine/engine';
import { Md } from '@/features/learn/components/Md';
import { TelegramNudge } from '@/components/TelegramConnectCard';
import { achievementInfo } from '@/features/learn/achievements';
import { SpeakButton } from '@/features/learn/components/SpeakButton';
import { trackOnce } from '@/lib/analytics';

export interface Saved {
  passed: boolean; stars: number; xp: number; first: boolean; streak: number;
  goal_bonus?: number; comeback_bonus?: number; goal_reached?: boolean; new_achievements?: string[];
}

export function Result({ lesson, fresh, score, total, seconds, next, unitLast, unitId, events, onSaved, onRetry }: {
  lesson: Lesson; fresh: Word[]; score: number; total: number; seconds: number; next: { id: string; title: string; titleUz: string; unitId: string } | null;
  unitLast: boolean; unitId: string; events: () => ReviewEvent[]; onSaved: () => void; onRetry: () => void;
}) {
  const { t, lang } = useT();
  const navigate = useNavigate();
  const [saved, setSaved] = useState<Saved | null>(null);
  const [error, setError] = useState('');
  const sent = useRef(false);
  const pct = Math.round((score / total) * 100);
  const passed = pct >= LESSON_COMPLETE_PERCENT;

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    callLearning<Saved>('learning_complete_lesson', {
      _lesson: lesson.id, _score: score, _total: total, _seconds: seconds,
      _next_id: next && next.unitId === unitId ? next.id : null,
      _next_title: next && next.unitId === unitId ? `${next.titleUz}` : null,
    }).then((r) => { setSaved(r); onSaved(); if (passed) trackOnce('first_lesson_completed', 'device'); void recordReview(events()).catch(() => {}); }).catch((e) => setError(learningErrorMessage(e, lang)));
  }, [lesson.id, score, total, seconds, next, unitId, onSaved]);

  const stars = saved?.stars ?? (pct >= 90 ? 3 : pct >= 80 ? 2 : pct >= 70 ? 1 : 0);
  return (
    <div className="text-center">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 14 }}
        className="mx-auto mb-4 w-24 h-24 rounded-full grid place-items-center bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-amber-500/30">
        {passed ? <Trophy className="h-12 w-12 text-white" /> : <RotateCcw className="h-11 w-11 text-white" />}
      </motion.div>
      <div className="flex justify-center gap-2 mb-3">
        {[1, 2, 3].map((n) => (
          <motion.span key={n} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.25 + n * 0.15, type: 'spring' }}>
            <Star className={`h-9 w-9 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />
          </motion.span>
        ))}
      </div>
      <h2 className="text-2xl font-extrabold mb-1">{passed ? t('learn.result.done') : t('learn.result.again')}</h2>
      <p className="text-muted-foreground mb-5">
        {passed ? t('learn.result.scorePassed', { score, total, pct }) : t('learn.result.scoreFailed', { score, total, pct, need: LESSON_COMPLETE_PERCENT })}
      </p>
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        <Stat icon={Zap} label="XP" value={saved ? `+${saved.xp}` : '…'} />
        <Stat icon={Flame} label="Streak" value={saved ? t('learn.home.streakDays', { n: saved.streak }) : '…'} />
        <Stat icon={Clock} label={t('learn.result.time')} value={t('learn.result.minutes', { n: Math.max(1, Math.round(seconds / 60)) })} />
      </div>
      {error && <p className="text-sm text-destructive mb-4">{error}</p>}
      {saved && passed && saved.first && <TelegramNudge />}
      {saved && (!!saved.goal_bonus || !!saved.comeback_bonus || !!saved.new_achievements?.length) && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-left text-sm mb-4 space-y-1.5">
          {saved.goal_reached && <p>🎯 {t('learn.result.goalDone')}{saved.goal_bonus ? ` · +${saved.goal_bonus} XP` : ''}</p>}
          {!!saved.comeback_bonus && <p>👋 {t('learn.result.comeback')} · +{saved.comeback_bonus} XP</p>}
          {saved.new_achievements?.map((k) => { const a = achievementInfo(k, lang); return <p key={k}>{a.icon} {t('learn.result.achievement')} <b>{a.title}</b></p>; })}
        </div>
      )}

      <div className="glass-card p-5 text-left mb-4">
        <p className="font-semibold mb-2.5">📌 {t('learn.result.learnedToday')}</p>
        <ul className="space-y-2">{lesson.summary.map((s, i) => <li key={i} className="text-sm flex gap-2 leading-relaxed"><span className="text-primary">•</span><Md text={s} /></li>)}</ul>
      </div>
      {fresh.length > 0 && <div className="glass-card p-5 text-left mb-4">
        <p className="font-semibold mb-1">🧠 {t('learn.result.memorize', { n: fresh.length })}</p>
        <p className="text-xs text-muted-foreground mb-3">{t('learn.result.memorizeHint')}</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {fresh.map((w) => (
            <div key={w.en} className="flex items-center gap-2 rounded-lg bg-secondary/40 px-2.5 py-1.5 text-sm">
              <SpeakButton text={w.en} /><span className="font-semibold">{w.en}</span><span className="text-muted-foreground truncate">— {w.uz}</span>
            </div>
          ))}
        </div>
      </div>}
      {lesson.homework && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-left text-sm mb-6"><p className="font-semibold mb-1">🏠 {t('learn.result.homework')}</p><Md text={lesson.homework} /></div>
      )}

      <div className="space-y-2.5">
        {passed ? (
          drillIds(lesson.id).length ? (
            <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => navigate(`/learn/drill/${drillIds(lesson.id)[0]}`)}><Zap className="h-4 w-4" />{t('learn.result.toDrills', { n: drillIds(lesson.id).length })}</Button>
          ) : unitLast ? (
            <Button size="lg" variant="glow" className="w-full" onClick={() => navigate(`/learn/test/${unitId}`)}>{t('learn.result.toUnitTest')}</Button>
          ) : next ? (
            <Button size="lg" variant="glow" className="w-full" onClick={() => navigate(`/learn/lesson/${next.id}`)}>{t('learn.result.nextLesson', { title: next.titleUz })}</Button>
          ) : null
        ) : (
          <Button size="lg" variant="glow" className="w-full gap-2" onClick={onRetry}><RotateCcw className="h-4 w-4" />{t('learn.result.redo')}</Button>
        )}
        <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />{t('learn.unitTest.toMap')}</Button>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Star; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
      <p className="font-bold">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}
