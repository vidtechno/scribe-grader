import { Link } from 'react-router-dom';
import { Lock, Play } from 'lucide-react';
import { useT } from '@/i18n';
import type { PlanStep } from '../plan';

/** The next few steps of the course. The first one is a link; the rest wait their turn. */
export function NextSteps({ steps, dark = false }: { steps: PlanStep[]; dark?: boolean }) {
  const { t } = useT();
  if (!steps.length) return null;
  const muted = dark ? 'text-white/70' : 'text-muted-foreground';
  return (
    <ol className="space-y-1.5" aria-label={t('learn.next.steps')}>
      {steps.map((s, i) => {
        const body = (
          <>
            <span className={`w-6 h-6 shrink-0 rounded-full grid place-items-center text-[11px] font-bold ${i === 0 && s.open ? (dark ? 'bg-white text-primary' : 'bg-primary text-primary-foreground') : dark ? 'bg-white/20' : 'bg-secondary text-muted-foreground'}`}>
              {i === 0 && s.open ? <Play className="h-3 w-3 fill-current" /> : i === 0 ? i + 1 : <Lock className="h-3 w-3" />}
            </span>
            <span className="min-w-0 flex-1">
              <span className={`block text-sm leading-snug truncate ${i === 0 ? 'font-semibold' : ''}`}>{s.title}</span>
              <span className={`block text-[11px] ${muted}`}>{s.label}</span>
            </span>
          </>
        );
        return (
          <li key={s.id}>
            {i === 0 && s.open
              ? <Link to={s.to} className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors ${dark ? 'hover:bg-white/15' : 'hover:bg-secondary/60'}`}>{body}</Link>
              : <div className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 ${i === 0 ? '' : 'opacity-70'}`}>{body}</div>}
          </li>
        );
      })}
    </ol>
  );
}
