import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Award, Check, Compass, Zap, Crown, Hourglass, Lock, Play, ShieldCheck, Star, Trophy } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { LEVEL_TEST, drillIds } from '../course';
import { LEVELS, PARTIAL_LEVELS, levelOf, unitNo, unitsOf } from '../course';
import type { LevelId } from '../types';
import type { DrillState, LearningState, NodeState } from '../api';
import { courseMap } from '../api';
import { UNIT_EXTRAS } from '../unit-extras';
import { UnitGuide } from './UnitGuide';
import { CertificateDialog } from './CertificateDialog';

// Nodes follow a gentle S-curve; the path between them is drawn as an SVG line.
const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];
const ROW = 104;
const WIDTH = 320;
const LABEL_W = 112;
/** Distance from a node's centre to the edge of its name label. */
const LABEL_GAP = 46;

export function Roadmap({ state, level, onLocked }: { state: LearningState; level: LevelId; onLocked: () => void }) {
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
  const [certificate, setCertificate] = useState(false);
  const nextLevel = LEVELS[LEVELS.findIndex((l) => l.id === level) + 1];

  return (
    <div className="space-y-10">
      {unitsOf(level).map((unit) => {
        const doneInUnit = unit.lessons.filter((l) => map.lessonState.get(l.id) === 'done').length;
        const testState = map.unitTest.get(unit.id)!;
        const unitLocked = unit.lessons.every((l) => map.lessonState.get(l.id) === 'locked');
        const review = unit.lessons.every((l) => map.lessonState.get(l.id) === 'open' || map.lessonState.get(l.id) === 'done') && testState !== 'passed';
        const nodes = [
          ...unit.lessons.flatMap((l) => [
            { kind: 'lesson' as const, id: l.id, title: l.titleUz },
            ...drillIds(l.id).map((d, n) => ({ kind: 'drill' as const, id: d, title: `Mashq ${n + 1}: ${l.titleUz}` })),
          ]),
          { kind: 'test' as const, id: unit.id, title: 'Bosqich testi' },
        ];
        const lessonNumbers = new Map(unit.lessons.map((l, n) => [l.id, n + 1]));
        const points = nodes.map((_, i) => ({ x: WIDTH / 2 + OFFSETS[i % OFFSETS.length], y: 44 + i * ROW }));
        const height = 44 + (nodes.length - 1) * ROW + 70;
        const path = points.map((p, i) => {
          if (i === 0) return `M ${p.x} ${p.y}`;
          const prev = points[i - 1];
          const midY = (prev.y + p.y) / 2;
          return `C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
        }).join(' ');
        return (
          <section key={unit.id} aria-label={`${unitNo(unit)}-bosqich`}>
            <div className={`rounded-2xl p-5 text-white bg-gradient-to-br ${unit.tone} shadow-lg relative overflow-hidden ${unitLocked ? 'opacity-70 saturate-50' : ''}`}>
              <div className="absolute -right-6 -top-8 w-32 h-32 rounded-full bg-white/10" />
              <p className="text-xs font-semibold uppercase tracking-widest opacity-90">{unitNo(unit)}-bosqich · {levelOf(unit.level).title}{review ? " · takrorlash uchun ochiq" : ''}</p>
              <h2 className="text-xl font-extrabold mt-0.5">{unit.titleUz}</h2>
              <p className="text-sm opacity-90 mt-1 max-w-md">{unit.description}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-white/25 overflow-hidden"><div className="h-full bg-white rounded-full" style={{ width: `${(doneInUnit / unit.lessons.length) * 100}%` }} /></div>
                <span className="text-xs font-semibold">{doneInUnit}/{unit.lessons.length}</span>
                {testState === 'passed' && <span className="text-xs font-bold bg-white/20 rounded-full px-2 py-0.5 flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" />O'tildi</span>}
              </div>
              {UNIT_EXTRAS[unit.id] && !unitLocked && (
                <button type="button" onClick={() => setGuideUnit(unit.id)} className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 hover:bg-white/30 px-3 py-1.5 text-xs font-bold transition-colors">
                  <Compass className="h-3.5 w-3.5" />Qo'llanma: xatolar, madaniyat, mini-loyiha
                </button>
              )}
            </div>

            <div className="relative mx-auto" style={{ width: WIDTH, height }}>
              <svg className="absolute inset-0" width={WIDTH} height={height} aria-hidden>
                <path d={path} fill="none" stroke="hsl(var(--border))" strokeWidth={10} strokeLinecap="round" strokeDasharray="2 16" />
              </svg>
              {nodes.map((n, i) => {
                const p = points[i];
                const labelLeft = OFFSETS[i % OFFSETS.length] > 0;
                if (n.kind === 'drill') {
                  const ds = (map.drillState.get(n.id) ?? 'locked') as DrillState;
                  const star = stars.get(n.id) ?? 0;
                  return (
                    <Fragment key={n.id}>
                      <DrillNode x={p.x} y={p.y} state={ds} stars={star} onClick={() => (ds === 'locked' ? onLocked() : navigate(`/learn/drill/${n.id}`))} />
                      <NodeLabel x={p.x} y={p.y} left={labelLeft} kicker="Mashq" title={n.title.replace(/^Mashq \d+: /, '')} dim={ds === 'locked'} current={ds === 'current'} />
                    </Fragment>
                  );
                }
                if (n.kind === 'lesson') {
                  const st = map.lessonState.get(n.id) as NodeState;
                  return (
                    <Fragment key={n.id}>
                      <LessonNode x={p.x} y={p.y} state={st} stars={stars.get(n.id) ?? 0} number={lessonNumbers.get(n.id) ?? i + 1}
                        onClick={() => (st === 'locked' ? onLocked() : navigate(`/learn/lesson/${n.id}`))} />
                      <NodeLabel x={p.x} y={p.y} left={labelLeft} kicker={`${lessonNumbers.get(n.id) ?? i + 1}-dars`} title={n.title} dim={st === 'locked'} current={st === 'current'} />
                    </Fragment>
                  );
                }
                const t = tests.get(unit.id);
                return (
                  <Fragment key={n.id}>
                    <TestNode x={p.x} y={p.y} state={testState} onClick={() => (testState === 'locked' ? onLocked() : navigate(`/learn/test/${unit.id}`))} />
                    <NodeLabel x={p.x} y={p.y} left={labelLeft} kicker="Bosqich testi" dim={testState === 'locked'} current={testState === 'open'}
                      title={testState === 'cooldown' && t?.locked_until ? `${new Date(t.locked_until).toLocaleString('uz-UZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} da ochiladi`
                        : testState === 'passed' ? "O'tildi ✓" : testState === 'open' ? 'Topshirishga tayyor' : testState === 'optional' ? "Bilasizmi? Testdan o'ting" : 'Avval darslarni tugating'} />
                  </Fragment>
                );
              })}
            </div>
          </section>
        );
      })}

      <button type="button" onClick={() => navigate(`/learn/level-test/${level}`)}
        className="w-full text-left rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-brand-red-soft/10 p-4 flex items-center gap-4 hover:border-primary/60 transition-colors">
        <span className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground grid place-items-center shrink-0"><Trophy className="h-6 w-6" /></span>
        <span className="min-w-0 flex-1">
          <span className="block font-bold">{levelOf(level).title} yakuniy testi</span>
          <span className="block text-xs text-muted-foreground">
            {LEVEL_TEST.questions} ta savol · {LEVEL_TEST.passPercent}% o'tish
            {nextLevel?.available ? ` · o'tsangiz ${nextLevel.title}'ga o'tasiz` : ''}
            {levelTest ? ` · eng yaxshi natija ${Math.round((levelTest.best_score / levelTest.best_total) * 100)}%` : ''}
          </span>
        </span>
        {levelTest?.passed_at ? <Check className="h-5 w-5 text-emerald-500 shrink-0" /> : <Play className="h-5 w-5 text-primary shrink-0" />}
      </button>

      {levelTest?.passed_at && (
        <button type="button" onClick={() => setCertificate(true)}
          className="w-full rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 flex items-center gap-3 text-left hover:bg-emerald-500/15 transition-colors">
          <span className="w-10 h-10 rounded-xl bg-emerald-500 text-white grid place-items-center shrink-0"><Award className="h-5 w-5" /></span>
          <span className="flex-1 min-w-0"><span className="block font-bold">{levelOf(level).title} sertifikati</span><span className="block text-xs text-muted-foreground">Yuklab olish va do'stlarga ulashish</span></span>
        </button>
      )}
      {certificate && levelTest && <CertificateDialog levelId={level} score={levelTest.best_score} total={levelTest.best_total} passedAt={levelTest.passed_at} onClose={() => setCertificate(false)} />}

      {PARTIAL_LEVELS[level] && (
        <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-center text-muted-foreground">
          <p className="font-semibold text-foreground mb-0.5">{levelOf(level).title} davomi tez orada</p>
          <p>{PARTIAL_LEVELS[level]}</p>
        </div>
      )}

      <section aria-label="Keyingi darajalar" className="pt-2">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Keyingi darajalar</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {LEVELS.filter((l) => !l.available).map((l) => (
            <div key={l.id} className="glass-card p-4 flex items-center gap-3 opacity-80">
              <span className="w-11 h-11 rounded-xl bg-secondary grid place-items-center font-bold text-sm">{l.cefr}</span>
              <div className="min-w-0 flex-1"><p className="font-semibold">{l.title}</p><p className="text-xs text-muted-foreground">Tez orada</p></div>
              <Lock className="h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </section>
      {guideUnit && <UnitGuide unit={unitsOf(level).find((u) => u.id === guideUnit)!} onClose={() => setGuideUnit(null)} />}
    </div>
  );
}

// The wrappers only centre a node on its point. The nodes themselves are animated with CSS on their own element,
// so a hover or press never moves them off their spot (a transform on the centring element would).
const NODE_FOCUS = 'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40';

function LessonNode({ x, y, state, stars, number, onClick }: { x: number; y: number; state: NodeState; stars: number; number: number; onClick: () => void }) {
  const style = state === 'done'
    ? 'bg-gradient-to-b from-amber-300 to-amber-500 text-white shadow-[0_6px_0_0_rgb(180,120,20)] hover:shadow-[0_6px_0_0_rgb(180,120,20),0_10px_24px_-4px_rgb(245,158,11,0.55)] active:shadow-[0_2px_0_0_rgb(180,120,20)]'
    : state === 'current'
      ? 'bg-gradient-to-b from-primary to-brand-red-soft text-primary-foreground shadow-[0_6px_0_0_hsl(var(--primary)/0.55)] hover:shadow-[0_6px_0_0_hsl(var(--primary)/0.55),0_10px_26px_-4px_hsl(var(--primary)/0.6)] active:shadow-[0_2px_0_0_hsl(var(--primary)/0.55)]'
      : state === 'open'
        ? 'bg-card border-2 border-primary/40 text-primary shadow-[0_6px_0_0_hsl(var(--border))] hover:border-primary hover:shadow-[0_6px_0_0_hsl(var(--border)),0_10px_24px_-6px_hsl(var(--primary)/0.4)] active:shadow-[0_2px_0_0_hsl(var(--border))]'
        : 'bg-secondary text-muted-foreground shadow-[0_6px_0_0_hsl(var(--border))] active:shadow-[0_2px_0_0_hsl(var(--border))]';
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
      {state === 'current' && <span aria-hidden className="absolute -inset-2.5 rounded-full border-4 border-primary/30 animate-ping" />}
      <button type="button" onClick={onClick} aria-label={`${number}-dars`}
        className={`group relative w-[68px] h-[68px] rounded-full grid place-items-center font-extrabold text-lg transition-all duration-200 ease-out hover:scale-[1.07] active:scale-95 active:translate-y-[4px] motion-reduce:transition-none motion-reduce:hover:scale-100 ${NODE_FOCUS} ${style}`}>
        {state === 'done' ? <Check className="h-8 w-8 transition-transform duration-200 group-hover:scale-110" strokeWidth={3} />
          : state === 'current' || state === 'open' ? <Play className="h-7 w-7 fill-current transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-0.5" />
            : <Lock className="h-6 w-6" />}
      </button>
      {state === 'done' && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 flex gap-0.5 rounded-full bg-card border border-border px-1.5 py-0.5 shadow-sm">
          {[1, 2, 3].map((n) => <Star key={n} className={`h-3 w-3 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />)}
        </div>
      )}
    </div>
  );
}

/** A smaller node for a required practice game; amber with a bolt, like the lesson nodes but lighter. */
function DrillNode({ x, y, state, stars, onClick }: { x: number; y: number; state: DrillState; stars: number; onClick: () => void }) {
  const style = state === 'done' ? 'bg-gradient-to-b from-amber-200 to-amber-400 text-white shadow-[0_5px_0_0_rgb(180,120,20)]'
    : state === 'current' ? 'bg-gradient-to-b from-orange-400 to-rose-500 text-white shadow-[0_5px_0_0_rgb(190,60,40)]'
      : state === 'open' ? 'bg-card border-2 border-orange-400/60 text-orange-500 shadow-[0_5px_0_0_hsl(var(--border))]'
        : 'bg-secondary text-muted-foreground shadow-[0_5px_0_0_hsl(var(--border))]';
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
      {state === 'current' && <span aria-hidden className="absolute -inset-2 rounded-full border-4 border-orange-400/30 animate-ping" />}
      <button type="button" onClick={onClick} aria-label="Mashq"
        className={`relative w-[52px] h-[52px] rounded-full grid place-items-center transition-all duration-200 hover:scale-[1.07] active:scale-95 active:translate-y-[3px] motion-reduce:transition-none ${NODE_FOCUS} ${style}`}>
        {state === 'locked' ? <Lock className="h-5 w-5" /> : state === 'done' ? <Check className="h-6 w-6" strokeWidth={3} /> : <Zap className="h-6 w-6 fill-current" />}
      </button>
      {state === 'done' && stars > 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 flex gap-0.5 rounded-full bg-card border border-border px-1 py-0.5 shadow-sm">
          {[1, 2, 3].map((n) => <Star key={n} className={`h-2.5 w-2.5 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />)}
        </div>
      )}
    </div>
  );
}

function TestNode({ x, y, state, onClick }: { x: number; y: number; state: 'locked' | 'optional' | 'open' | 'passed' | 'cooldown'; onClick: () => void }) {
  const style = state === 'passed' ? 'from-amber-300 to-yellow-500 text-white hover:shadow-amber-400/50'
    : state === 'open' ? 'from-violet-500 to-fuchsia-500 text-white hover:shadow-fuchsia-500/50'
      : state === 'optional' ? 'from-violet-500/25 to-fuchsia-500/25 text-violet-600 dark:text-violet-300 ring-2 ring-violet-400/40'
      : state === 'cooldown' ? 'from-slate-400 to-slate-500 text-white' : 'from-secondary to-secondary text-muted-foreground';
  const Icon = state === 'passed' ? Crown : state === 'cooldown' ? Hourglass : state === 'open' || state === 'optional' ? ShieldCheck : Lock;
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
      {state === 'open' && <span aria-hidden className="absolute -inset-2 rounded-[30px] rotate-45 border-4 border-fuchsia-400/30 animate-ping" />}
      <button type="button" onClick={onClick} aria-label="Bosqich testi"
        className={`group relative w-[78px] h-[78px] rounded-[26px] rotate-45 bg-gradient-to-br ${style} shadow-lg hover:shadow-xl grid place-items-center transition-all duration-200 ease-out hover:scale-[1.07] active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 ${NODE_FOCUS}`}>
        <Icon className="h-8 w-8 -rotate-45 transition-transform duration-200 group-hover:scale-110" />
      </button>
    </div>
  );
}

/** The lesson's name next to its node: always readable, never clipped by the screen edge. */
function NodeLabel({ x, y, left, kicker, title, dim, current }: { x: number; y: number; left: boolean; kicker: string; title: string; dim: boolean; current: boolean }) {
  return (
    <div className={`absolute -translate-y-1/2 pointer-events-none ${left ? 'text-right' : 'text-left'}`}
      style={{ width: LABEL_W, top: y, left: left ? x - LABEL_GAP - LABEL_W : x + LABEL_GAP }}>
      <p className={`text-[10px] font-bold uppercase tracking-wider ${current ? 'text-primary' : 'text-muted-foreground'}`}>{kicker}</p>
      <p className={`text-[13px] leading-tight font-semibold ${dim ? 'text-muted-foreground' : 'text-foreground'}`}>{title}</p>
      {current && <span className="mt-1.5 inline-block rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wide px-2.5 py-0.5 animate-pulse motion-reduce:animate-none">BOSHLASH</span>}
    </div>
  );
}
