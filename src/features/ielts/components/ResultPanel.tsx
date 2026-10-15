import { Link } from 'react-router-dom';
import { Award, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { QuestionGroup } from '../types';
import { KIND_LABEL, flatten, score, type Answer } from '../score';
import { GroupView } from './GroupView';

interface Part { title: string; groups: QuestionGroup[]; extra?: React.ReactNode }

const tip = (band: number, skill: 'reading' | 'listening') =>
  band >= 7 ? "Ajoyib natija! Endi vaqtni tejash va qiyin savol turlarida (Not Given, matching) xatosiz ishlashga e'tibor bering."
    : band >= 5.5 ? (skill === 'reading'
      ? "Yaxshi poydevor. Xatolaringizni turlar bo'yicha ko'ring: True/False/Not Given va heading savollarida paraphrase'ni izlashni mashq qiling."
      : "Yaxshi poydevor. Xatolaringizni ko'rib chiqing: ko'pincha javob o'zgartirilgan (distractor) joylarda adashiladi — oxirgi aytilgan variantni tanlang.")
      : "Hali boshlanishi. Avval tilni mustahkamlang (Learn kursi), keyin har bir passage/section'ni alohida mashq qiling.";

export function ResultPanel({ skill, parts, answers, band, onRetry, backTo }: {
  skill: 'reading' | 'listening'; parts: Part[]; answers: Record<number, Answer>; band: number; onRetry: () => void; backTo: string;
}) {
  const r = score(parts, answers);
  const flat = flatten(parts);
  const review = Object.fromEntries(r.results.map((x) => [x.q.number, { correct: x.correct }]));
  let start = 1;
  return (
    <div>
      <div className="glass-card p-6 mb-6 text-center">
        <Award className="h-8 w-8 text-primary mx-auto mb-2" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Estimated band</p>
        <p className="text-5xl font-bold text-primary my-1">{band.toFixed(1)}</p>
        <p className="text-sm">{r.correct} / {r.total} correct</p>
        <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto">{tip(band, skill)}</p>
        <p className="text-[11px] text-muted-foreground mt-2">Approximate: every real test version has its own conversion table.</p>
        <div className="flex gap-2 justify-center mt-4 flex-wrap">
          <Button variant="outline" onClick={onRetry} className="gap-2"><RotateCcw className="h-4 w-4" />Try again</Button>
          <Link to={backTo}><Button variant="glow">More tests</Button></Link>
        </div>
      </div>

      <div className="glass-card p-5 mb-6">
        <h2 className="font-semibold mb-3">Accuracy by question type</h2>
        <div className="space-y-2">
          {Object.entries(r.byKind).map(([k, v]) => {
            const pct = Math.round((v.correct / v.total) * 100);
            return (
              <div key={k}>
                <div className="flex justify-between text-xs mb-1"><span>{KIND_LABEL[k as QuestionGroup['kind']]}</span><span>{v.correct}/{v.total}</span></div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className={cn('h-full rounded-full', pct >= 70 ? 'bg-primary' : pct >= 40 ? 'bg-amber-500' : 'bg-destructive')} style={{ width: `${pct}%` }} /></div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-3">Your lowest type is what to practise next.</p>
      </div>

      <h2 className="font-semibold mb-3">Answer review</h2>
      {parts.map((p, pi) => (
        <div key={pi} className="glass-card p-5 mb-4">
          <h3 className="font-semibold mb-3">{p.title}</h3>
          {p.extra}
          {p.groups.map((g, gi) => {
            const s = start; start += g.items.length;
            return <GroupView key={gi} group={g} start={s} answers={answers} review={review} />;
          })}
        </div>
      ))}
      <p className="sr-only">{flat.length} questions reviewed</p>
    </div>
  );
}
