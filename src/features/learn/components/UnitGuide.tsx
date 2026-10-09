import { useState } from 'react';
import { AlertTriangle, BookOpenCheck, Check, CheckCircle2, Globe2, PenLine, Target, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { UnitMeta } from '../types';
import { UNIT_EXTRAS } from '../unit-extras';
import { ExerciseView } from './ExerciseView';
import { Md } from './Md';

const read = (key: string): string | null => { try { return localStorage.getItem(key); } catch { return null; } };
const write = (key: string, value: string) => { try { localStorage.setItem(key, value); } catch { /* private mode: the page still works */ } };

/** The unit's "can-do" list, typical mistakes of Uzbek speakers with a repair exercise, a cultural note and a mini project. */
export function UnitGuide({ unit, onClose }: { unit: UnitMeta; onClose: () => void }) {
  const extras = UNIT_EXTRAS[unit.id];
  const [ticked, setTicked] = useState<number[]>(() => { try { return JSON.parse(read(`scorify_cando_${unit.id}`) ?? '[]'); } catch { return []; } });
  const [draft, setDraft] = useState(() => read(`scorify_project_${unit.id}`) ?? '');
  const [criteria, setCriteria] = useState<number[]>([]);
  const [trapAt, setTrapAt] = useState<number | null>(null);
  const [trapsDone, setTrapsDone] = useState(0);
  if (!extras) return null;

  const toggle = (i: number) => {
    const next = ticked.includes(i) ? ticked.filter((x) => x !== i) : [...ticked, i];
    setTicked(next);
    write(`scorify_cando_${unit.id}`, JSON.stringify(next));
  };
  const words = draft.trim() ? draft.trim().split(/\s+/).length : 0;

  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto">
      <div className="max-w-xl mx-auto px-4 py-6 space-y-5">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onClose} aria-label="Yopish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bosqich qo'llanmasi</p><h2 className="text-lg font-extrabold leading-tight truncate">{unit.titleUz}</h2></div>
        </div>

        <section className="glass-card p-4">
          <h3 className="font-bold flex items-center gap-2 mb-1"><Target className="h-4 w-4 text-primary" />Bu bosqichdan keyin men…</h3>
          <p className="text-xs text-muted-foreground mb-3">Qila olganlaringizni belgilab boring. Hammasi belgilansa, testga tayyorsiz.</p>
          <ul className="space-y-2">
            {extras.canDo.map((c, i) => (
              <li key={i}>
                <button type="button" onClick={() => toggle(i)} className="w-full flex items-start gap-3 text-left text-sm">
                  <span className={`mt-0.5 h-5 w-5 rounded-md border-2 grid place-items-center shrink-0 ${ticked.includes(i) ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-border'}`}>{ticked.includes(i) && <Check className="h-3.5 w-3.5" strokeWidth={3} />}</span>
                  <span className={ticked.includes(i) ? 'text-muted-foreground' : ''}>{c}</span>
                </button>
              </li>
            ))}
          </ul>
          {ticked.length === extras.canDo.length && <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-3 flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" />Ajoyib! Bosqich testiga tayyorsiz.</p>}
        </section>

        <section className="glass-card p-4">
          <h3 className="font-bold flex items-center gap-2 mb-1"><AlertTriangle className="h-4 w-4 text-amber-500" />O'zbek tilida so'zlashuvchilar xatosi</h3>
          <p className="text-xs text-muted-foreground mb-3">Aynan o'zbeklar tez-tez qiladigan xatolar. Har birini o'qing va to'g'rilab ko'ring.</p>
          <div className="space-y-3">
            {extras.traps.map((t, i) => (
              <div key={i} className="rounded-xl border border-border p-3.5">
                <p className="font-semibold text-sm mb-1">{t.title}</p>
                <p className="text-sm text-muted-foreground mb-3"><Md text={t.md} /></p>
                {trapAt === i
                  ? <ExerciseView key={`t${i}`} ex={t.fix} mode="practice" onDone={() => { setTrapAt(null); setTrapsDone((n) => n + 1); }} />
                  : <Button size="sm" variant="outline" onClick={() => setTrapAt(i)}>Mashq qilib ko'rish</Button>}
              </div>
            ))}
          </div>
          {trapsDone > 0 && <p className="text-xs text-muted-foreground mt-2">To'g'rilangan xatolar: {trapsDone}</p>}
        </section>

        <section className="glass-card p-4">
          <h3 className="font-bold flex items-center gap-2 mb-2"><Globe2 className="h-4 w-4 text-sky-500" />Madaniy eslatma</h3>
          <p className="text-sm"><Md text={extras.culture} /></p>
        </section>

        <section className="glass-card p-4">
          <h3 className="font-bold flex items-center gap-2 mb-1"><PenLine className="h-4 w-4 text-violet-500" />Mini-loyiha: {extras.project.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{extras.project.prompt}</p>
          <textarea value={draft} onChange={(e) => { setDraft(e.target.value); write(`scorify_project_${unit.id}`, e.target.value); }}
            rows={7} placeholder="Inglizcha yozing…" autoCapitalize="off" spellCheck={false}
            className="w-full rounded-xl border-2 border-border bg-card px-3 py-2.5 text-base outline-none focus:border-primary" />
          <p className="text-xs text-muted-foreground mt-1">{words} ta so'z · yozganingiz shu qurilmada saqlanadi</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4 mb-2 flex items-center gap-1.5"><BookOpenCheck className="h-3.5 w-3.5" />O'zingizni tekshiring</p>
          <ul className="space-y-1.5">
            {extras.project.criteria.map((c, i) => (
              <li key={i}>
                <button type="button" onClick={() => setCriteria((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]))} className="flex items-start gap-2.5 text-left text-sm">
                  <span className={`mt-0.5 h-4 w-4 rounded border-2 grid place-items-center shrink-0 ${criteria.includes(i) ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}`}>{criteria.includes(i) && <Check className="h-3 w-3" strokeWidth={3} />}</span>
                  <span>{c}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-4">Yozuvingizni professional tekshirtirmoqchimisiz? <a href="/writing" className="text-primary underline">Writing bo'limida</a> baholating.</p>
        </section>

        <Button className="w-full" onClick={onClose}>Yopish</Button>
      </div>
    </div>
  );
}
