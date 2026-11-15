import { Check, Lock } from 'lucide-react';
import { useT } from '@/i18n';
import type { LevelId } from '../types';

interface LevelInfo { id: LevelId; title: string; cefr: string; available: boolean }

/** The levels as cards under the road map: the one you are on, the one you are looking at, and the ones still ahead. */
export function LevelCards({ levels, shown, current, onPick }: { levels: LevelInfo[]; shown: LevelId; current: LevelId; onPick: (id: LevelId) => void }) {
  const { t } = useT();
  const order = levels.map((l) => l.id);
  return (
    <section className="mt-10" aria-label={t('learn.home.level')}>
      <h2 className="mb-3 text-lg font-extrabold">{t('learn.road.levels')}</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="tablist">
        {levels.map((l) => {
          const isShown = l.id === shown;
          const isCurrent = l.id === current;
          const passed = order.indexOf(l.id) < order.indexOf(current);
          return (
            <button key={l.id} type="button" role="tab" aria-selected={isShown} onClick={() => onPick(l.id)}
              className={`relative flex flex-col items-start gap-1 rounded-2xl border-2 border-b-4 p-3.5 text-left transition-all active:translate-y-[2px] active:border-b-2 ${isShown ? 'border-primary bg-primary/[0.07]' : 'border-border bg-card hover:border-primary/40'}`}>
              <span className={`grid h-11 w-11 place-items-center rounded-xl text-base font-black ${isCurrent ? 'bg-primary text-primary-foreground' : passed ? 'bg-amber-400 text-white' : 'bg-secondary text-muted-foreground'}`}>
                {passed ? <Check className="h-5 w-5" strokeWidth={4} /> : l.cefr === 'Noldan' ? '0' : l.cefr}
              </span>
              <span className="text-sm font-extrabold leading-tight">{l.title}</span>
              <span className="flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                {isCurrent ? t('learn.road.levelNow') : passed ? t('learn.road.statusDone') : <><Lock className="h-3 w-3" />{t('learn.road.levelAhead')}</>}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
