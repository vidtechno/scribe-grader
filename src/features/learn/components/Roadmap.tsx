import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Crown, Hourglass, Lock, Play, ShieldCheck, Star } from 'lucide-react';
import { BEGINNER_UNITS, LEVELS } from '../course';
import type { LearningState, NodeState } from '../api';
import { courseMap } from '../api';

// Nodes follow a gentle S-curve; the path between them is drawn as an SVG line.
const OFFSETS = [0, 52, 78, 52, 0, -52, -78, -52];
const ROW = 92;
const WIDTH = 300;

export function Roadmap({ state, onLocked }: { state: LearningState; onLocked: () => void }) {
  const navigate = useNavigate();
  const map = courseMap(state);
  const stars = new Map(state.progress.map((p) => [p.lesson_id, p.stars]));
  const tests = new Map(state.tests.map((t) => [t.unit_id, t]));

  return (
    <div className="space-y-10">
      {BEGINNER_UNITS.map((unit) => {
        const doneInUnit = unit.lessons.filter((l) => map.lessonState.get(l.id) === 'done').length;
        const testState = map.unitTest.get(unit.id)!;
        const unitLocked = unit.lessons.every((l) => map.lessonState.get(l.id) === 'locked');
        const nodes = [...unit.lessons.map((l) => ({ kind: 'lesson' as const, id: l.id, title: l.titleUz })), { kind: 'test' as const, id: unit.id, title: 'Bosqich testi' }];
        const points = nodes.map((_, i) => ({ x: WIDTH / 2 + OFFSETS[i % OFFSETS.length], y: 44 + i * ROW }));
        const height = 44 + (nodes.length - 1) * ROW + 70;
        const path = points.map((p, i) => {
          if (i === 0) return `M ${p.x} ${p.y}`;
          const prev = points[i - 1];
          const midY = (prev.y + p.y) / 2;
          return `C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
        }).join(' ');
        return (
          <section key={unit.id} aria-label={`${unit.n}-bosqich`}>
            <div className={`rounded-2xl p-5 text-white bg-gradient-to-br ${unit.tone} shadow-lg relative overflow-hidden ${unitLocked ? 'opacity-70 saturate-50' : ''}`}>
              <div className="absolute -right-6 -top-8 w-32 h-32 rounded-full bg-white/10" />
              <p className="text-xs font-semibold uppercase tracking-widest opacity-90">{unit.n}-bosqich · Beginner</p>
              <h2 className="text-xl font-extrabold mt-0.5">{unit.titleUz}</h2>
              <p className="text-sm opacity-90 mt-1 max-w-md">{unit.description}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-white/25 overflow-hidden"><div className="h-full bg-white rounded-full" style={{ width: `${(doneInUnit / unit.lessons.length) * 100}%` }} /></div>
                <span className="text-xs font-semibold">{doneInUnit}/{unit.lessons.length}</span>
                {testState === 'passed' && <span className="text-xs font-bold bg-white/20 rounded-full px-2 py-0.5 flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" />O'tildi</span>}
              </div>
            </div>

            <div className="relative mx-auto" style={{ width: WIDTH, height }}>
              <svg className="absolute inset-0" width={WIDTH} height={height} aria-hidden>
                <path d={path} fill="none" stroke="hsl(var(--border))" strokeWidth={10} strokeLinecap="round" strokeDasharray="2 16" />
              </svg>
              {nodes.map((n, i) => {
                const p = points[i];
                const labelLeft = OFFSETS[i % OFFSETS.length] > 0;
                if (n.kind === 'lesson') {
                  const st = map.lessonState.get(n.id) as NodeState;
                  return (
                    <Fragment key={n.id}>
                      <LessonNode x={p.x} y={p.y} state={st} stars={stars.get(n.id) ?? 0} number={i + 1}
                        onClick={() => (st === 'locked' ? onLocked() : navigate(`/learn/lesson/${n.id}`))} />
                      <NodeLabel x={p.x} y={p.y} left={labelLeft} title={n.title} dim={st === 'locked'} current={st === 'current'} />
                    </Fragment>
                  );
                }
                const t = tests.get(unit.id);
                return (
                  <Fragment key={n.id}>
                    <TestNode x={p.x} y={p.y} state={testState} onClick={() => (testState === 'locked' ? onLocked() : navigate(`/learn/test/${unit.id}`))} />
                    <NodeLabel x={p.x} y={p.y} left={labelLeft} dim={testState === 'locked'} current={testState === 'open'}
                      title={testState === 'cooldown' && t?.locked_until ? `Test ${new Date(t.locked_until).toLocaleString('uz-UZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} da ochiladi` : n.title} />
                  </Fragment>
                );
              })}
            </div>
          </section>
        );
      })}

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
    </div>
  );
}

function LessonNode({ x, y, state, stars, number, onClick }: { x: number; y: number; state: NodeState; stars: number; number: number; onClick: () => void }) {
  const base = 'absolute -translate-x-1/2 -translate-y-1/2 w-[68px] h-[68px] rounded-full grid place-items-center font-extrabold text-lg transition-transform active:scale-95';
  const style = state === 'done'
    ? 'bg-gradient-to-b from-amber-300 to-amber-500 text-white shadow-[0_6px_0_0_rgb(180,120,20)]'
    : state === 'current'
      ? 'bg-gradient-to-b from-primary to-brand-red-soft text-primary-foreground shadow-[0_6px_0_0_hsl(var(--primary)/0.55)]'
      : 'bg-secondary text-muted-foreground shadow-[0_6px_0_0_hsl(var(--border))]';
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {state === 'current' && <span className="absolute -translate-x-1/2 -translate-y-1/2 w-[86px] h-[86px] rounded-full border-4 border-primary/30 animate-ping" />}
      <motion.button type="button" whileHover={{ scale: 1.06 }} onClick={onClick} className={`${base} ${style}`} aria-label={`${number}-dars`}>
        {state === 'done' ? <Check className="h-8 w-8" strokeWidth={3} /> : state === 'current' ? <Play className="h-7 w-7 fill-current" /> : <Lock className="h-6 w-6" />}
      </motion.button>
      {state === 'done' && (
        <div className="absolute -translate-x-1/2 top-[30px] flex gap-0.5">
          {[1, 2, 3].map((n) => <Star key={n} className={`h-3.5 w-3.5 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />)}
        </div>
      )}
      {state === 'current' && (
        <span className="absolute -translate-x-1/2 -top-[62px] whitespace-nowrap rounded-lg bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 shadow animate-bounce">BOSHLASH</span>
      )}
    </div>
  );
}

function TestNode({ x, y, state, onClick }: { x: number; y: number; state: 'locked' | 'open' | 'passed' | 'cooldown'; onClick: () => void }) {
  const style = state === 'passed' ? 'from-amber-300 to-yellow-500 text-white'
    : state === 'open' ? 'from-violet-500 to-fuchsia-500 text-white'
      : state === 'cooldown' ? 'from-slate-400 to-slate-500 text-white' : 'from-secondary to-secondary text-muted-foreground';
  const Icon = state === 'passed' ? Crown : state === 'cooldown' ? Hourglass : state === 'open' ? ShieldCheck : Lock;
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <motion.button type="button" whileHover={{ scale: 1.06 }} onClick={onClick} aria-label="Bosqich testi"
        className={`absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-[26px] rotate-45 bg-gradient-to-br ${style} shadow-lg grid place-items-center`}>
        <Icon className="h-8 w-8 -rotate-45" />
      </motion.button>
    </div>
  );
}

function NodeLabel({ x, y, left, title, dim, current }: { x: number; y: number; left: boolean; title: string; dim: boolean; current: boolean }) {
  return (
    <div className={`absolute -translate-y-1/2 w-[110px] text-xs leading-tight ${left ? 'text-right' : 'text-left'} ${dim ? 'text-muted-foreground/60' : current ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}
      style={left ? { left: x - 52 - 110, top: y } : { left: x + 52, top: y }}>
      {title}
    </div>
  );
}
