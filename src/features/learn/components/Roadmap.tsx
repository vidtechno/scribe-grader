import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Award, BookOpen, Check, ChevronDown, Compass, Drama, Gamepad2, Headphones, Lock, MessageCircle, Play, RefreshCw, Rocket, Trophy } from 'lucide-react';
import { useT } from '@/i18n';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { LEVEL_TEST, LEVELS, PARTIAL_LEVELS, drillIds, levelOf, unitNo, unitsOf } from '../course';
import type { LevelId, LessonMeta } from '../types';
import type { DrillState, LearningState, NodeState } from '../api';
import { courseMap } from '../api';
import { UNIT_EXTRAS } from '../unit-extras';
import { DRILL_GAME } from '../games';
import { UnitGuide } from './UnitGuide';
import { CertificateDialog } from './CertificateDialog';

type Status = 'done' | 'current' | 'review' | 'locked';

/** Icon and wording per kind of step, so a row says what it is without a pile of badges. */
const KIND: Record<string, { icon: typeof BookOpen; label: string }> = {
  grammar: { icon: BookOpen, label: 'learn.road.kindLesson' },
  situation: { icon: MessageCircle, label: 'learn.road.kindSituation' },
  skill: { icon: Headphones, label: 'learn.road.kindSkill' },
  review: { icon: RefreshCw, label: 'learn.road.kindReview' },
  scene: { icon: Drama, label: 'learn.road.kindScene' },
};

/**
 * The course path of one level: first a "level up" card (quick test or final exam), then the topics one under the
 * other with a line between them. The topic you are on is open; finished topics show a tick; locked topics wait.
 */
export function Roadmap({ state, level, onLocked }: { state: LearningState; level: LevelId; onLocked: () => void }) {
  const { t: tr, lang } = useT();
  const navigate = useNavigate();
  const map = courseMap(state);
  const stars = new Map([...state.progress.map((p) => [p.lesson_id, p.stars] as const), ...(state.drills ?? []).map((d) => [d.drill_id, d.stars] as const)]);
  const tests = new Map(state.tests.map((t) => [t.unit_id, t]));
  const { user } = useAuth();
  const { data: levelTest } = useQuery({
    queryKey: ['learning', 'level-test', user?.id, level],
    enabled: !!user,
    queryFn: async () => {
      // The table is new and not in the generated types.
      const { data } = await (supabase as unknown as { from: (t: string) => { select: (c: string) => { eq: (k: string, v: string) => { eq: (k: string, v: string) => { maybeSingle: () => Promise<{ data: { best_score: number; best_total: number; passed_at: string | null } | null }> } } } } })
        .from('learning_level_tests').select('best_score,best_total,passed_at').eq('user_id', user!.id).eq('level_id', level).maybeSingle();
      return data;
    },
  });
  const [guideUnit, setGuideUnit] = useState<string | null>(null);
  const [openUnit, setOpenUnit] = useState<string | null>(null);
  const [certificate, setCertificate] = useState(false);
  const levelIndex = LEVELS.findIndex((l) => l.id === level);
  const nextLevel = LEVELS[levelIndex + 1];
  const myIndex = LEVELS.findIndex((l) => l.id === (state.profile?.level ?? 'beginner'));
  const units = unitsOf(level);
  const unitStatus = (unitId: string): Status => {
    const unit = units.find((u) => u.id === unitId)!;
    const testState = map.unitTest.get(unitId);
    if (testState === 'passed' || unit.lessons.every((l) => map.lessonState.get(l.id) === 'done' && drillIds(l.id).every((d) => map.drillState.get(d) === 'done'))) return 'done';
    if (unit.lessons.every((l) => map.lessonState.get(l.id) === 'locked')) return 'locked';
    if (unit.lessons.every((l) => ['open', 'done'].includes(map.lessonState.get(l.id) ?? ''))) return 'review';
    return 'current';
  };
  const currentId = units.find((u) => unitStatus(u.id) === 'current')?.id ?? units.find((u) => unitStatus(u.id) === 'review')?.id;
  const canQuickUp = !!nextLevel?.available && myIndex < levelIndex + 1 && myIndex >= levelIndex;

  return (
    <div className="space-y-5">
      {/* Level up: always visible, above the topics */}
      <section className="rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-brand-red-soft/10 p-4" aria-label={tr('learn.road.levelTest')}>
        <div className="flex items-start gap-3">
          <span className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground grid place-items-center shrink-0"><Rocket className="h-5 w-5" /></span>
          <div className="min-w-0 flex-1">
            <h2 className="font-bold leading-snug">{canQuickUp ? tr('learn.road.jump', { level: levelOf(level).title, next: nextLevel!.title }) : tr('learn.road.finalExam', { level: levelOf(level).title })}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {canQuickUp ? tr('learn.road.quickInfo') : tr('learn.road.examInfo', { n: LEVEL_TEST.questions, pct: LEVEL_TEST.passPercent })}
              {levelTest && !levelTest.passed_at ? ` ${tr('learn.road.best', { pct: Math.round((levelTest.best_score / levelTest.best_total) * 100) })}` : ''}
            </p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {canQuickUp && <button type="button" onClick={() => navigate(`/learn/upgrade/${nextLevel!.id}`)} className="rounded-full bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 hover:opacity-90 transition-opacity">{tr('learn.road.upgradeTest', { next: nextLevel!.title })}</button>}
          <button type="button" onClick={() => navigate(`/learn/level-test/${level}`)} className="rounded-full border border-primary/40 text-sm font-semibold px-4 py-2 hover:bg-primary/10 transition-colors inline-flex items-center gap-1.5">
            {levelTest?.passed_at ? <Check className="h-4 w-4 text-emerald-500" /> : <Trophy className="h-4 w-4" />}{tr('learn.road.exam')}{levelTest?.passed_at ? ` · ${tr('learn.road.passedSuffix')}` : ''}
          </button>
          {levelTest?.passed_at && (
            <button type="button" onClick={() => setCertificate(true)} className="rounded-full border border-emerald-500/40 text-emerald-700 dark:text-emerald-400 text-sm font-semibold px-4 py-2 hover:bg-emerald-500/10 transition-colors inline-flex items-center gap-1.5"><Award className="h-4 w-4" />{tr('learn.road.certificate')}</button>
          )}
        </div>
      </section>
      {certificate && levelTest && <CertificateDialog levelId={level} onClose={() => setCertificate(false)} />}

      {/* The path */}
      <ol className="relative">
        {units.map((unit, index) => {
          const status = unitStatus(unit.id);
          const open = openUnit === unit.id || (openUnit === null && unit.id === currentId);
          const doneCount = unit.lessons.filter((l) => map.lessonState.get(l.id) === 'done').length;
          const pct = Math.round((doneCount / unit.lessons.length) * 100);
          const testState = map.unitTest.get(unit.id)!;
          const t = tests.get(unit.id);
          const last = index === units.length - 1;
          return (
            <li key={unit.id} className="relative pl-12 pb-4">
              {!last && <span aria-hidden className={`absolute left-[15px] top-8 bottom-0 w-0.5 ${status === 'done' ? 'bg-emerald-500/50' : 'bg-border'}`} />}
              <span className={`absolute left-0 top-1 w-8 h-8 rounded-full grid place-items-center text-sm font-bold ring-4 ring-background ${status === 'done' ? 'bg-emerald-500 text-white' : status === 'current' ? 'bg-primary text-primary-foreground' : status === 'review' ? 'border-2 border-primary/40 text-primary bg-card' : 'bg-secondary text-muted-foreground'}`}>
                {status === 'done' ? <Check className="h-4 w-4" strokeWidth={3} /> : status === 'locked' ? <Lock className="h-3.5 w-3.5" /> : unitNo(unit)}
              </span>
              <div className={`rounded-2xl border bg-card ${status === 'current' ? 'border-primary/50 shadow-sm' : 'border-border'} ${status === 'locked' ? 'opacity-80' : ''}`}>
                <button type="button" aria-expanded={open} onClick={() => setOpenUnit(open ? '' : unit.id)} className="w-full text-left p-4 flex items-center gap-3">
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[11px] font-semibold uppercase tracking-wider ${status === 'current' ? 'text-primary' : 'text-muted-foreground'}`}>
                      {status === 'done' ? tr('learn.road.statusDone') : status === 'current' ? tr('learn.road.statusCurrent') : status === 'review' ? tr('learn.road.statusReview') : tr('learn.road.statusLocked')}
                    </span>
                    <span className="block font-bold leading-snug">{tr('learn.road.unitName', { n: unitNo(unit), title: unit.titleUz })}</span>
                    <span className="mt-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-24 rounded-full bg-secondary overflow-hidden"><span className="block h-full rounded-full bg-primary" style={{ width: `${pct}%` }} /></span>
                      <span className="text-xs text-muted-foreground">{tr('learn.road.lessonsCount', { done: doneCount, total: unit.lessons.length })}</span>
                    </span>
                  </span>
                  <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                </button>
                {open && (
                  <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                    {unit.learns?.length ? (
                      <details className="mb-3 text-sm group">
                        <summary className="cursor-pointer text-primary font-medium list-none flex items-center gap-1.5"><Compass className="h-4 w-4" />{tr('learn.road.whatYouLearn')}</summary>
                        <ul className="mt-2 space-y-1 text-muted-foreground">{unit.learns.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />{x}</li>)}</ul>
                      </details>
                    ) : null}
                    <ul className="rounded-xl border border-border/60 divide-y divide-border/60 overflow-hidden">
                      {unit.lessons.map((l, n) => (
                        <li key={l.id}>
                          <LessonRow lesson={l} number={n + 1} state={map.lessonState.get(l.id) as NodeState} stars={stars.get(l.id) ?? 0}
                            onOpen={() => (map.lessonState.get(l.id) === 'locked' ? onLocked() : navigate(`/learn/lesson/${l.id}`))} />
                          {drillIds(l.id).map((d) => (
                            <GameRow key={d} id={d} state={(map.drillState.get(d) ?? 'locked') as DrillState} stars={stars.get(d) ?? 0}
                              onOpen={() => (map.drillState.get(d) === 'locked' ? onLocked() : navigate(`/learn/drill/${d}`))} />
                          ))}
                        </li>
                      ))}
                      <li>
                        <button type="button" onClick={() => (testState === 'locked' ? onLocked() : navigate(`/learn/test/${unit.id}`))}
                          className={`w-full flex items-center gap-3 px-3 py-3 text-left hover:bg-secondary/50 transition-colors ${testState === 'locked' ? 'text-muted-foreground' : ''}`}>
                          <span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center ${testState === 'passed' ? 'bg-emerald-500 text-white' : testState === 'open' ? 'bg-violet-500 text-white' : 'bg-secondary'}`}>
                            {testState === 'passed' ? <Check className="h-4 w-4" strokeWidth={3} /> : testState === 'locked' ? <Lock className="h-3.5 w-3.5" /> : <Trophy className="h-4 w-4" />}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold">{tr('learn.road.unitTest')}</span>
                            <span className="block text-xs text-muted-foreground">
                              {testState === 'cooldown' && t?.locked_until ? tr('learn.road.opensAt', { date: new Date(t.locked_until).toLocaleString(lang === 'uz' ? 'uz-UZ' : 'en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) })
                                : testState === 'passed' ? tr('learn.road.testPassed') : testState === 'open' ? tr('learn.road.testReady') : testState === 'optional' ? tr('learn.road.testOptional') : tr('learn.road.testLocked')}
                            </span>
                          </span>
                        </button>
                      </li>
                    </ul>
                    {UNIT_EXTRAS[unit.id] && status !== 'locked' && (
                      <button type="button" onClick={() => setGuideUnit(unit.id)} className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                        <Compass className="h-3.5 w-3.5" />{tr('learn.road.guide')}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {PARTIAL_LEVELS[level] && (
        <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-center text-muted-foreground">
          <p className="font-semibold text-foreground mb-0.5">{tr('learn.road.moreSoon', { level: levelOf(level).title })}</p>
          <p>{PARTIAL_LEVELS[level]}</p>
        </div>
      )}

      {LEVELS.some((l) => !l.available) && (
        <section aria-label={tr('learn.road.nextLevels')}>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">{tr('learn.home.soon')}</h2>
          <div className="flex flex-wrap gap-2">
            {LEVELS.filter((l) => !l.available).map((l) => (
              <span key={l.id} className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"><Lock className="h-3.5 w-3.5" />{l.title}</span>
            ))}
          </div>
        </section>
      )}
      {guideUnit && <UnitGuide unit={units.find((u) => u.id === guideUnit)!} onClose={() => setGuideUnit(null)} />}
    </div>
  );
}

const stateStyle = (state: NodeState | DrillState) => state === 'done' ? 'bg-emerald-500 text-white' : state === 'current' ? 'bg-primary text-primary-foreground' : state === 'open' ? 'border-2 border-primary/40 text-primary' : 'bg-secondary text-muted-foreground';

function LessonRow({ lesson, number, state, stars, onOpen }: { lesson: LessonMeta; number: number; state: NodeState; stars: number; onOpen: () => void }) {
  const { t } = useT();
  const kind = KIND[lesson.kind ?? 'grammar'];
  const Icon = kind.icon;
  const scene = lesson.kind === 'scene';
  return (
    <button type="button" onClick={onOpen} className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-secondary/50 ${scene ? 'border-l-4 border-l-fuchsia-500 bg-gradient-to-r from-fuchsia-500/10 via-amber-500/5 to-transparent' : ''} ${state === 'current' ? 'bg-primary/5' : ''} ${state === 'locked' ? 'text-muted-foreground' : ''}`}>
      <span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center text-xs font-bold ${stateStyle(state)}`}>
        {state === 'done' ? <Check className="h-4 w-4" strokeWidth={3} /> : state === 'locked' ? <Lock className="h-3.5 w-3.5" /> : state === 'current' ? <Play className="h-3.5 w-3.5 fill-current" /> : scene ? <Icon className="h-3.5 w-3.5" /> : number}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-sm leading-snug ${state === 'current' ? 'font-bold' : 'font-semibold'}`}>{lesson.titleUz}</span>
        <span className="flex items-center gap-1 text-[11px] text-muted-foreground"><Icon className="h-3 w-3" />{t(kind.label)}</span>
      </span>
      {state === 'done' && stars > 0 && <span className="text-[11px] text-amber-500 font-semibold shrink-0">{'★'.repeat(stars)}</span>}
      {state === 'current' && <span className="shrink-0 rounded-full bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1">{t('learn.road.start')}</span>}
    </button>
  );
}

function GameRow({ id, state, stars, onOpen }: { id: string; state: DrillState; stars: number; onOpen: () => void }) {
  const { t } = useT();
  const g = DRILL_GAME[id];
  const checkpoint = g === 'mastery' || g === 'mini-boss';
  const Icon = checkpoint ? Trophy : Gamepad2;
  return (
    <button type="button" onClick={onOpen} className={`w-full flex items-center gap-3 pl-10 pr-3 py-2.5 text-left transition-colors hover:bg-secondary/50 bg-secondary/20 ${state === 'current' ? 'bg-primary/5' : ''} ${state === 'locked' ? 'text-muted-foreground' : ''}`}>
      <span className={`w-6 h-6 shrink-0 rounded-full grid place-items-center ${stateStyle(state)}`}>
        {state === 'done' ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : state === 'locked' ? <Lock className="h-3 w-3" /> : <Icon className="h-3.5 w-3.5" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-sm leading-snug ${state === 'current' ? 'font-bold' : 'font-medium'}`}>{g ? t(`learn.game.${g}.label`) : t('learn.plan.drillGame')}</span>
        <span className="block text-[11px] text-muted-foreground">{g === 'mastery' ? t('learn.road.gameMastery') : g === 'mini-boss' ? t('learn.road.gameBoss') : t('learn.road.gameGame')}</span>
      </span>
      {state === 'done' && stars > 0 && <span className="text-[11px] text-amber-500 font-semibold shrink-0">{'★'.repeat(stars)}</span>}
      {state === 'current' && <span className="shrink-0 rounded-full bg-primary text-primary-foreground text-[11px] font-bold px-3 py-1">{t('learn.road.start')}</span>}
    </button>
  );
}
