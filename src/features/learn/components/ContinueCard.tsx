import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Brain, Flame, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LearningState } from '../api';
import { ALL_LESSONS, levelOf, unitNo } from '../course';
import { learningPlan } from '../plan';
import { NextSteps } from './NextSteps';
import { useReviewQueue } from '../engine/api';

/** Where the learner is and what to do next: current topic, last stopping point, one big continue button. */
export function ContinueCard({ state, locked = false }: { state: LearningState; locked?: boolean }) {
  const navigate = useNavigate();
  const { data: queue } = useReviewQueue(!!state.profile, false);
  const plan = learningPlan(state, 4);
  const map = plan.map;
  const target = map.nextDrill
    ? { to: `/learn/drill/${map.nextDrill.id}`, kicker: 'Mashq', title: ALL_LESSONS.find((l) => l.id === map.nextDrill!.lessonId)?.titleUz ?? 'Mashq', unitId: ALL_LESSONS.find((l) => l.id === map.nextDrill!.lessonId)?.unitId }
    : map.nextLesson ? { to: `/learn/lesson/${map.nextLesson.id}`, kicker: 'Keyingi dars', title: map.nextLesson.titleUz, unitId: map.nextLesson.unitId }
      : map.pendingTest ? { to: `/learn/test/${map.pendingTest.id}`, kicker: 'Bosqich testi', title: 'Topshirishga tayyor', unitId: map.pendingTest.id }
        : null;
  const unit = plan.unit;
  const doneInUnit = plan.unitDone;
  const last = plan.last;
  const due = (queue?.stats.due ?? 0) + (queue?.stats.mistakes ?? 0);

  return (
    <section className="glass-card p-4 sm:p-5 mb-4" aria-label="Davom etish">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          {unit ? (
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {levelOf(unit.level).title} · {unitNo(unit)}-mavzu · {unit.titleUz}
            </p>
          ) : <p className="text-xs font-semibold uppercase tracking-widest text-primary">{levelOf(state.profile?.level).title}</p>}
          <h2 className="text-lg sm:text-xl font-extrabold mt-1 leading-snug">{target ? target.title : "Hamma darslar tugadi"}</h2>
          {unit && (
            <div className="mt-2 flex items-center gap-3 max-w-sm">
              <div className="h-2 flex-1 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full bg-primary" style={{ width: `${(doneInUnit / unit.lessons.length) * 100}%` }} /></div>
              <span className="text-xs font-semibold text-muted-foreground">{doneInUnit}/{unit.lessons.length} dars · {levelOf(unit.level).title}: {plan.levelDone}/{plan.levelTotal}</span>
            </div>
          )}
          {last && <p className="text-xs text-muted-foreground mt-2">Oxirgi tugatilgan dars: <span className="font-medium text-foreground">{last.titleUz}</span></p>}
        </div>
        {target && !locked && (
          <Button variant="glow" size="lg" className="gap-2 w-full sm:w-auto" onClick={() => navigate(target.to)}>
            <Play className="h-4 w-4 fill-current" />{target.kicker === 'Keyingi dars' ? 'Davom etish' : target.kicker === 'Mashq' ? 'Mashqni boshlash' : 'Testni boshlash'}
          </Button>
        )}
      </div>
      {plan.steps.length > 1 && <div className="mt-3 -mx-2"><NextSteps steps={plan.steps} /></div>}
      <div className="mt-3 pt-3 border-t border-border/60 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <span className="inline-flex items-center gap-1.5"><Flame className="h-4 w-4 text-orange-500" /><b>{state.streak}</b> kun streak</span>
        <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4 text-amber-500" /><b>{state.profile?.xp ?? 0}</b> XP</span>
        <Link to="/learn?tab=words" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
          <Brain className="h-4 w-4 text-primary" />{due > 0 ? <><b>{due}</b> ta takrorlash kutmoqda</> : 'Takrorlash: hammasi joyida'}
        </Link>
      </div>
    </section>
  );
}
