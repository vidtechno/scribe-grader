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
 * The course path of one level. The topic you are on is open and visually prominent; finished topics show a tick.
 * Level-up actions sit after the lessons so the next lesson remains the first decision on the page.
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
      {certificate && levelTest && <CertificateDialog levelId={level} onClose={() => setCertificate(false)} />}

      {/* The path: a winding trail of round steps, one band per unit (open the unit you are on, tap a band to open another) */}
      <div className="space-y-6">
        {units.map((unit, index) => {
          const status = unitStatus(unit.id);
          const open = openUnit === unit.id || (openUnit === null && unit.id === currentId);
          const doneCount = unit.lessons.filter((l) => map.lessonState.get(l.id) === 'done').length;
          const pct = Math.round((doneCount / unit.lessons.length) * 100);
          const testState = map.unitTest.get(unit.id)!;
          const t = tests.get(unit.id);
          const theme = BAND[index % BAND.length];
          // Every step of the unit in order: a lesson, then its practice games; the unit test closes the trail.
          const steps: Step[] = [];
          unit.lessons.forEach((l, n) => {
            steps.push({ id: l.id, kind: 'lesson', title: l.titleUz, state: map.lessonState.get(l.id) as NodeState, stars: stars.get(l.id) ?? 0, number: n + 1, lessonKind: l.kind ?? 'grammar', go: `/learn/lesson/${l.id}` });
            drillIds(l.id).forEach((d) => {
              const g = DRILL_GAME[d];
              steps.push({ id: d, kind: g === 'mastery' || g === 'mini-boss' ? 'boss' : 'game', title: g ? tr(`learn.game.${g}.label`) : tr('learn.plan.drillGame'), state: (map.drillState.get(d) ?? 'locked') as DrillState, stars: stars.get(d) ?? 0, number: 0, lessonKind: 'game', go: `/learn/drill/${d}` });
            });
          });
          steps.push({
            id: `${unit.id}-test`, kind: 'test', title: tr('learn.road.unitTest'), number: 0, lessonKind: 'test', stars: 0, go: `/learn/test/${unit.id}`,
            state: testState === 'passed' ? 'done' : testState === 'open' ? 'current' : testState === 'optional' ? 'open' : 'locked',
            note: testState === 'cooldown' && t?.locked_until ? tr('learn.road.opensAt', { date: new Date(t.locked_until).toLocaleString(lang === 'uz' ? 'uz-UZ' : 'en-US', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) })
              : testState === 'passed' ? tr('learn.road.testPassed') : testState === 'open' ? tr('learn.road.testReady') : testState === 'optional' ? tr('learn.road.testOptional') : tr('learn.road.testLocked'),
          });
          return (
            <section key={unit.id} aria-label={tr('learn.road.unitName', { n: unitNo(unit), title: unit.titleUz })}>
              <button type="button" aria-expanded={open} onClick={() => setOpenUnit(open ? '' : unit.id)}
                className={`relative w-full overflow-hidden rounded-3xl bg-gradient-to-br ${status === 'locked' ? 'from-slate-400 to-slate-500' : theme} p-4 text-left text-white shadow-lg sm:p-5`}>
                <span aria-hidden className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/15" />
                <span className="relative flex items-center gap-3">
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-extrabold uppercase tracking-[.18em] text-white/80">
                      {status === 'done' ? tr('learn.road.statusDone') : status === 'current' ? tr('learn.road.statusCurrent') : status === 'review' ? tr('learn.road.statusReview') : tr('learn.road.statusLocked')}
                    </span>
                    <span className="mt-0.5 block text-lg font-extrabold leading-snug sm:text-xl">{tr('learn.road.unitName', { n: unitNo(unit), title: unit.titleUz })}</span>
                    <span className="mt-2 flex items-center gap-2">
                      <span className="block h-2 w-28 overflow-hidden rounded-full bg-black/20"><span className="block h-full rounded-full bg-white" style={{ width: `${pct}%` }} /></span>
                      <span className="text-xs font-bold text-white/85">{doneCount}/{unit.lessons.length}</span>
                    </span>
                  </span>
                  <ChevronDown className={`h-6 w-6 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
                </span>
              </button>
              {open && (
                <div className="pt-2">
                  {unit.learns?.length ? (
                    <details className="mx-auto mt-2 max-w-md rounded-2xl bg-secondary/50 px-4 py-2.5 text-sm">
                      <summary className="flex cursor-pointer list-none items-center gap-1.5 font-semibold text-primary"><Compass className="h-4 w-4" />{tr('learn.road.whatYouLearn')}</summary>
                      <ul className="mt-2 space-y-1 text-muted-foreground">{unit.learns.map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{x}</li>)}</ul>
                    </details>
                  ) : null}
                  <Trail steps={steps} onOpen={(st) => (st.state === 'locked' ? onLocked() : navigate(st.go))} />
                  {UNIT_EXTRAS[unit.id] && status !== 'locked' && (
                    <div className="mt-2 text-center">
                      <button type="button" onClick={() => setGuideUnit(unit.id)} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                        <Compass className="h-3.5 w-3.5" />{tr('learn.road.guide')}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <section className="rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/[0.08] via-card to-orange-400/[0.08] p-4" aria-label={tr('learn.road.levelTest')}>
        <div className="flex items-start gap-3">
          <span className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground grid place-items-center shrink-0 shadow-md shadow-primary/20"><Rocket className="h-5 w-5" /></span>
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

/** Colour of each unit's band; locked units are grey. */
const BAND = [
  'from-[#ff4058] to-[#ad001f]', 'from-emerald-500 to-teal-600', 'from-violet-500 to-indigo-600', 'from-sky-500 to-blue-600',
  'from-amber-500 to-orange-600', 'from-fuchsia-500 to-pink-600', 'from-teal-500 to-cyan-600',
];

interface Step {
  id: string; kind: 'lesson' | 'game' | 'boss' | 'test'; title: string; state: NodeState | DrillState; stars: number; number: number;
  lessonKind: string; go: string; note?: string;
}
/** Sideways shift of each step in px (a gentle wave), like the winding path of a language app. */
const WAVE = [0, 34, 58, 34, 0, -34, -58, -34];

const NODE_SIZE: Record<Step['kind'], string> = { lesson: 'h-[68px] w-[68px]', game: 'h-[52px] w-[52px]', boss: 'h-[64px] w-[64px]', test: 'h-[76px] w-[76px]' };

/** Colours of a round step with the thick lower edge that makes it look pressable. */
function nodeLook(step: Step): string {
  const { state, kind } = step;
  if (state === 'locked') return 'bg-slate-200 text-slate-400 border-slate-300 dark:bg-slate-700 dark:text-slate-400 dark:border-slate-800';
  if (state === 'done') return kind === 'test' || kind === 'boss' ? 'bg-violet-500 text-white border-violet-700' : kind === 'game' ? 'bg-amber-400 text-white border-amber-600' : 'bg-emerald-500 text-white border-emerald-700';
  if (kind === 'game') return 'bg-amber-400 text-white border-amber-600';
  if (kind === 'boss' || kind === 'test') return 'bg-violet-500 text-white border-violet-700';
  if (state === 'current') return 'bg-primary text-primary-foreground border-[#a8001b]';
  return 'bg-card text-primary border-primary/40 ring-2 ring-primary/20'; // open: free to revisit
}

function StepIcon({ step }: { step: Step }) {
  const cls = step.kind === 'lesson' ? 'h-7 w-7' : 'h-6 w-6';
  if (step.state === 'locked') return <Lock className={step.kind === 'lesson' ? 'h-6 w-6' : 'h-5 w-5'} />;
  if (step.state === 'done') return <Check className={cls} strokeWidth={4} />;
  if (step.kind === 'test' || step.kind === 'boss') return <Trophy className={cls} />;
  if (step.kind === 'game') return <Gamepad2 className={cls} />;
  if (step.state === 'current') return <Play className={`${cls} fill-current`} />;
  const Icon = KIND[step.lessonKind]?.icon ?? BookOpen;
  return <Icon className={cls} />;
}

/** The winding trail of one unit. The step you are on carries a "Start" bubble; tap any other open step to see it and start. */
function Trail({ steps, onOpen }: { steps: Step[]; onOpen: (s: Step) => void }) {
  const { t } = useT();
  const [picked, setPicked] = useState<string | null>(null);
  return (
    <ol className="relative mx-auto flex max-w-md flex-col items-center py-4 [--u:0.85px] sm:[--u:1.05px]">
      {steps.map((step, i) => {
        const shift = WAVE[i % WAVE.length];
        const current = step.state === 'current';
        const isOpen = picked === step.id;
        return (
          <li key={step.id} className="flex w-full flex-col items-center py-[7px]" style={{ transform: `translateX(calc(${shift} * var(--u)))` }}>
            {current && (
              <span className="relative mb-2 rounded-xl border-2 border-primary bg-card px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-primary shadow-sm">
                {t('learn.road.start')}
                <span aria-hidden className="absolute -bottom-[7px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-primary bg-card" />
              </span>
            )}
            <span className="relative">
              {current && <span aria-hidden className="absolute inset-0 -m-1.5 animate-ping rounded-full bg-primary/25 [animation-duration:2.2s]" />}
              <button type="button" aria-label={`${step.title}${step.state === 'locked' ? ` (${t('learn.road.statusLocked')})` : ''}`} aria-expanded={isOpen}
                onClick={() => (current || step.state === 'locked' ? onOpen(step) : setPicked(isOpen ? null : step.id))}
                className={`relative grid place-items-center rounded-full border-b-[6px] shadow-md transition-transform active:translate-y-[3px] active:border-b-[3px] ${NODE_SIZE[step.kind]} ${nodeLook(step)}`}>
                <StepIcon step={step} />
              </button>
              <span className={`pointer-events-none absolute top-1/2 w-[7.5rem] -translate-y-1/2 text-[13px] font-bold leading-tight sm:w-44 sm:text-sm ${shift > 0 ? 'right-full mr-3 text-right' : 'left-full ml-3 text-left'} ${step.state === 'locked' ? 'text-muted-foreground' : step.state === 'current' ? 'text-primary' : 'text-foreground'}`}>
                <span className="line-clamp-2">{step.title}</span>
              </span>
              {step.state === 'done' && step.stars > 0 && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-card px-1.5 text-[11px] font-bold leading-4 text-amber-500 shadow ring-1 ring-border">{'★'.repeat(step.stars)}</span>
              )}
            </span>
            {isOpen && (
              <span className="mt-4 block w-60 max-w-[80vw] rounded-2xl border border-border bg-card p-3 text-center shadow-xl">
                <span className="block text-sm font-extrabold leading-snug">{step.title}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{step.note ?? t(step.kind === 'lesson' ? KIND[step.lessonKind]?.label ?? 'learn.road.kindLesson' : step.kind === 'boss' ? 'learn.road.gameBoss' : 'learn.road.gameGame')}</span>
                <button type="button" onClick={() => onOpen(step)} className="mt-2.5 w-full rounded-xl bg-primary py-2 text-sm font-extrabold uppercase tracking-wide text-primary-foreground shadow-[0_4px_0_0_#a8001b] active:translate-y-[2px] active:shadow-[0_2px_0_0_#a8001b]">
                  {step.state === 'done' ? t('learn.road.again') : t('learn.road.start')}
                </button>
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
