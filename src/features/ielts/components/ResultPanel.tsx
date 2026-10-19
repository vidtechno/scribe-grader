import { Link } from 'react-router-dom';
import { Award, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useT } from '@/i18n';
import type { QuestionGroup } from '../types';
import { flatten, score, type Answer } from '../score';
import { GroupView } from './GroupView';

interface Part { title: string; groups: QuestionGroup[]; extra?: React.ReactNode }

const tipKey = (band: number, skill: 'reading' | 'listening') =>
  band >= 7 ? 'ielts.tip.high' : band >= 5.5 ? (skill === 'reading' ? 'ielts.tip.midReading' : 'ielts.tip.midListening') : 'ielts.tip.low';

export function ResultPanel({ skill, parts, answers, band, onRetry, backTo }: {
  skill: 'reading' | 'listening'; parts: Part[]; answers: Record<number, Answer>; band: number; onRetry: () => void; backTo: string;
}) {
  const { t } = useT();
  const r = score(parts, answers);
  const flat = flatten(parts);
  const review = Object.fromEntries(r.results.map((x) => [x.q.number, { correct: x.correct }]));
  let start = 1;
  return (
    <div>
      <div className="glass-card p-6 mb-6 text-center">
        <Award className="h-8 w-8 text-primary mx-auto mb-2" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{t('ielts.res.band')}</p>
        <p className="text-5xl font-bold text-primary my-1">{band.toFixed(1)}</p>
        <p className="text-sm">{t('ielts.res.correct', { correct: r.correct, total: r.total })}</p>
        <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto">{t(tipKey(band, skill))}</p>
        <p className="text-[11px] text-muted-foreground mt-2">{t('ielts.res.approx')}</p>
        <div className="flex gap-2 justify-center mt-4 flex-wrap">
          <Button variant="outline" onClick={onRetry} className="gap-2"><RotateCcw className="h-4 w-4" />{t('ielts.res.retry')}</Button>
          <Link to={backTo}><Button variant="glow">{t('ielts.res.more')}</Button></Link>
        </div>
      </div>

      <div className="glass-card p-5 mb-6">
        <h2 className="font-semibold mb-3">{t('ielts.res.accuracy')}</h2>
        <div className="space-y-2">
          {Object.entries(r.byKind).map(([k, v]) => {
            const pct = Math.round((v.correct / v.total) * 100);
            return (
              <div key={k}>
                <div className="flex justify-between text-xs mb-1"><span>{t(`ielts.kind.${k}`)}</span><span>{v.correct}/{v.total}</span></div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className={cn('h-full rounded-full', pct >= 70 ? 'bg-primary' : pct >= 40 ? 'bg-amber-500' : 'bg-destructive')} style={{ width: `${pct}%` }} /></div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-3">{t('ielts.res.lowest')}</p>
      </div>

      <h2 className="font-semibold mb-3">{t('ielts.res.review')}</h2>
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
      <p className="sr-only">{t('ielts.res.reviewed', { n: flat.length })}</p>
    </div>
  );
}
