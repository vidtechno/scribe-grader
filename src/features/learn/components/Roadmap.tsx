import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Award, Check, ChevronDown, Compass, Zap, Crown, Hourglass, Lock, Play, ShieldCheck, Star, Trophy } from 'lucide-react';
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
  const [openUnit, setOpenUnit] = useState<string | null>(null);
  const [certificate, setCertificate] = useState(false);
  const nextLevel = LEVELS[LEVELS.findIndex((l) => l.id === level) + 1];

  return (
    <div className="space-y-3">
      {unitsOf(level).map((unit) => {
        const doneInUnit = unit.lessons.filter((l) => map.lessonState.get(l.id) === 'done').length;
        const testState = map.unitTest.get(unit.id)!;
        const unitLocked = unit.lessons.every((l) => map.lessonState.get(l.id) === 'locked');
        const review = unit.lessons.every((l) => map.lessonState.get(l.id) === 'open' || map.lessonState.get(l.id) === 'done') && testState !== 'passed';
        const isCurrent = unit.lessons.some((l) => map.lessonState.get(l.id) === 'current') || unit.lessons.some((l) => map.drillState.get(l.id + '-d1') === 'current') || testState === 'open';
        const isOpen = openUnit === unit.id || (openUnit === null && (isCurrent || (!map.nextLesson && unit.id === unitsOf(level)[0].id)));
        const t = tests.get(unit.id);
        const lessonNumbers = new Map(unit.lessons.map((l, n) => [l.id, n + 1]));
        return (
          <section key={unit.id} aria-label={`${unitNo(unit)}-mavzu`} className={`rounded-2xl border bg-card ${isCurrent ? 'border-primary/50' : 'border-border'} ${unitLocked ? 'opacity-75' : ''}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpenUnit(isOpen ? '' : unit.id)} className="w-full text-left p-4 flex items-center gap-3">
              <span className={`w-10 h-10 shrink-0 rounded-xl grid place-items-center font-extrabold text-white bg-gradient-to-br ${unit.tone}`}>{unitNo(unit)}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{unitNo(unit)}-mavzu{review ? " · takrorlash uchun ochiq" : ''}{testState === 'passed' ? " · o'tildi ✓" : ''}</span>
                <span className="block font-bold leading-snug">{unit.titleUz}</span>
                <span className="mt-1.5 flex items-center gap-2">
                  <span className="h-1.5 w-28 rounded-full bg-secondary overflow-hidden"><span className="block h-full bg-primary rounded-full" style={{ width: `${(doneInUnit / unit.lessons.length) * 100}%` }} /></span>
                  <span className="text-xs text-muted-foreground">{doneInUnit}/{unit.lessons.length} dars</span>
                </span>
              </span>
              <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                <p className="text-sm text-muted-foreground px-1 mb-2">{unit.description}</p>
                <ul className="divide-y divide-border/60 rounded-xl border border-border/60 overflow-hidden">
                  {unit.lessons.map((l) => {
                    const st = map.lessonState.get(l.id) as NodeState;
                    const star = stars.get(l.id) ?? 0;
                    return (
                      <li key={l.id}>
                        <Row state={st} number={lessonNumbers.get(l.id)!} title={l.titleUz} kind={l.kind} stars={star} onClick={() => (st === 'locked' ? onLocked() : navigate(`/learn/lesson/${l.id}`))} />
                        {drillIds(l.id).map((d, n) => {
                          const ds = (map.drillState.get(d) ?? 'locked') as DrillState;
                          return <Row key={d} drill state={ds} title={`Mashq ${n + 1}`} stars={stars.get(d) ?? 0} onClick={() => (ds === 'locked' ? onLocked() : navigate(`/learn/drill/${d}`))} />;
                        })}
                      </li>
                    );
                  })}
                  <li>
                    <button type="button" onClick={() => (testState === 'locked' ? onLocked() : navigate(`/learn/test/${unit.id}`))}
                      className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-colors hover:bg-secondary/50 ${testState === 'locked' ? 'text-muted-foreground' : ''}`}>
                      <span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center ${testState === 'passed' ? 'bg-emerald-500 text-white' : testState === 'open' ? 'bg-violet-500 text-white' : 'bg-secondary text-muted-foreground'}`}>
                        {testState === 'passed' ? <Crown className="h-4 w-4" /> : testState === 'cooldown' ? <Hourglass className="h-4 w-4" /> : testState === 'locked' ? <Lock className="h-3.5 w-3.5" /> : <ShieldCheck className="h-4 w-4" />}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-semibold">Mavzu testi</span>
                        <span className="block text-xs text-muted-foreground">
                          {testState === 'cooldown' && t?.locked_until ? `${new Date(t.locked_until).toLocaleString('uz-UZ', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })} da ochiladi`
                            : testState === 'passed' ? "O'tildi ✓" : testState === 'open' ? 'Topshirishga tayyor' : testState === 'optional' ? "Bilasizmi? Testdan o'tib, mavzuni o'tkazib yuborishingiz mumkin" : 'Avval darslarni tugating'}
                        </span>
                      </span>
                    </button>
                  </li>
                </ul>
                {UNIT_EXTRAS[unit.id] && !unitLocked && (
                  <button type="button" onClick={() => setGuideUnit(unit.id)} className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary hover:bg-secondary/70 px-3 py-1.5 text-xs font-semibold transition-colors">
                    <Compass className="h-3.5 w-3.5" />Qo'llanma: xatolar, madaniyat, mini-loyiha
                  </button>
                )}
              </div>
            )}
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
      {certificate && levelTest && <CertificateDialog levelId={level} onClose={() => setCertificate(false)} />}

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

const KIND_LABEL = { situation: 'Vaziyat', review: 'Takror' } as const;

/** One lesson or practice game in a topic: a calm list row with its state, no map. */
function Row({ state, number, title, kind, stars, drill, onClick }: {
  state: NodeState | DrillState; number?: number; title: string; kind?: 'grammar' | 'situation' | 'review'; stars: number; drill?: boolean; onClick: () => void;
}) {
  const current = state === 'current';
  return (
    <button type="button" onClick={onClick}
      className={`w-full flex items-center gap-3 py-3 text-left transition-colors hover:bg-secondary/50 ${drill ? 'pl-10 pr-3 bg-secondary/20' : 'px-3'} ${current ? 'bg-primary/5' : ''} ${state === 'locked' ? 'text-muted-foreground' : ''}`}>
      <span className={`w-7 h-7 shrink-0 rounded-full grid place-items-center text-xs font-bold ${state === 'done' ? 'bg-emerald-500 text-white' : current ? 'bg-primary text-primary-foreground' : state === 'open' ? 'border-2 border-primary/40 text-primary' : 'bg-secondary text-muted-foreground'}`}>
        {state === 'done' ? <Check className="h-4 w-4" strokeWidth={3} /> : state === 'locked' ? <Lock className="h-3.5 w-3.5" /> : drill ? <Zap className="h-3.5 w-3.5 fill-current" /> : current ? <Play className="h-3.5 w-3.5 fill-current" /> : number}
      </span>
      <span className="min-w-0 flex-1">
        <span className={`block text-sm leading-snug ${current ? 'font-bold' : 'font-semibold'}`}>{title}</span>
        {(drill || (kind && kind !== 'grammar')) && <span className="block text-[11px] text-muted-foreground">{drill ? 'Majburiy mashq' : `${KIND_LABEL[kind as 'situation' | 'review']} · 5–10 daqiqa`}</span>}
      </span>
      {state === 'done' && stars > 0 && <span className="flex gap-0.5 shrink-0">{[1, 2, 3].map((n) => <Star key={n} className={`h-3 w-3 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />)}</span>}
      {current && <span className="shrink-0 rounded-full bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5">BOSHLASH</span>}
    </button>
  );
}
