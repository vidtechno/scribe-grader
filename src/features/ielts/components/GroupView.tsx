import { CheckCircle2, Flag, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useT } from '@/i18n';
import type { QuestionGroup } from '../types';
import { correctText, optionLabel, type Answer } from '../score';

export interface ReviewInfo { correct: boolean }
interface Props {
  group: QuestionGroup;
  /** Number of the first item of this group in the whole test. */
  start: number;
  answers: Record<number, Answer>;
  onAnswer?: (n: number, value: Answer) => void;
  /** When set the group is read-only and shows the key and the explanation. */
  review?: Record<number, ReviewInfo>;
  onFocus?: (n: number) => void;
  /** Questions the learner marked to come back to. */
  flags?: Set<number>;
  onFlag?: (n: number) => void;
}

const TF: Record<string, string> = { true: 'TRUE', false: 'FALSE', 'not-given': 'NOT GIVEN', yes: 'YES', no: 'NO' };

export function GroupView({ group, start, answers, onAnswer, review, onFocus, flags, onFlag }: Props) {
  const { t } = useT();
  const first = start;
  const last = start + group.items.length - 1;
  const set = (n: number, v: Answer) => onAnswer?.(n, v);
  return (
    <section className="mb-6" aria-label={t('ielts.q.rangeAria', { first, last })}>
      <h3 className="font-semibold text-sm">{t('ielts.q.questions')} {first}{last > first ? `–${last}` : ''}</h3>
      <p className="text-sm text-muted-foreground mb-3 whitespace-pre-line">{group.instruction}</p>
      {group.kind === 'match' && (
        <ul className="mb-3 rounded-lg border border-border bg-secondary/30 p-3 text-sm space-y-1">
          {group.options.map((o, i) => (
            <li key={i} className="flex gap-2"><span className="font-semibold w-6 shrink-0">{optionLabel(group.instruction, i)}</span><span>{o}</span></li>
          ))}
        </ul>
      )}
      {group.title && group.kind === 'fill' && <p className="font-semibold text-sm mb-2">{group.title}</p>}
      <ol className={cn('space-y-3', group.kind === 'fill' && group.title && 'rounded-lg border border-border p-3 bg-card')} start={first}>
        {group.items.map((item, i) => {
          const n = first + i;
          const r = review?.[n];
          const value = answers[n];
          return (
            <li key={n} id={`q-${n}`} className={cn('rounded-lg', r && (r.correct ? 'bg-primary/5' : 'bg-destructive/5'), r && 'p-2')}>
              <div className="flex gap-2 items-start">
                <span className="mt-0.5 inline-flex h-6 min-w-6 px-1 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-bold shrink-0">{n}</span>
                <div className="flex-1 min-w-0 text-sm">
                  {group.kind === 'fill' ? (
                    <FillLine q={item.q} value={typeof value === 'string' ? value : ''} disabled={!!review} onChange={(v) => set(n, v)} onFocus={() => onFocus?.(n)} label={t('ielts.q.answerN', { n })} />
                  ) : (
                    <p className="mb-2">{item.q}</p>
                  )}

                  {(group.kind === 'tfng' || group.kind === 'ynng') && (
                    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={t('ielts.q.questionN', { n })}>
                      {(group.kind === 'tfng' ? ['true', 'false', 'not-given'] : ['yes', 'no', 'not-given']).map((o) => (
                        <button key={o} type="button" role="radio" aria-checked={value === o} disabled={!!review}
                          onClick={() => { set(n, value === o ? undefined : o); onFocus?.(n); }}
                          className={cn('px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors', value === o ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary/50')}>
                          {TF[o]}
                        </button>
                      ))}
                    </div>
                  )}

                  {group.kind === 'mcq' && (
                    <div className="space-y-1.5" role="radiogroup" aria-label={t('ielts.q.questionN', { n })}>
                      {(item as { options: string[] }).options.map((o, k) => (
                        <button key={k} type="button" role="radio" aria-checked={value === k} disabled={!!review}
                          onClick={() => { set(n, value === k ? undefined : k); onFocus?.(n); }}
                          className={cn('w-full text-left flex gap-2 px-3 py-2 rounded-lg border transition-colors', value === k ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50')}>
                          <span className="font-semibold w-5 shrink-0">{String.fromCharCode(65 + k)}</span><span>{o}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {group.kind === 'match' && (
                    <select aria-label={t('ielts.q.questionN', { n })} disabled={!!review} value={typeof value === 'number' ? String(value) : ''}
                      onChange={(e) => { set(n, e.target.value === '' ? undefined : Number(e.target.value)); onFocus?.(n); }}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-sm min-w-[8rem]">
                      <option value="">{t('ielts.q.choose')}</option>
                      {group.options.map((_, k) => <option key={k} value={k}>{optionLabel(group.instruction, k)}</option>)}
                    </select>
                  )}

                  {r && (
                    <div className="mt-2 text-xs space-y-1">
                      <p className={cn('flex items-center gap-1 font-semibold', r.correct ? 'text-primary' : 'text-destructive')}>
                        {r.correct ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                        {r.correct ? t('ielts.q.correct') : <>{t('ielts.q.correctAnswer')} <span className="text-foreground">{correctText({ number: n, group, index: i, part: 0 })}</span></>}
                      </p>
                      {!r.correct && <p className="text-muted-foreground">{t('ielts.q.yourAnswer')} {value === undefined || value === '' ? '—' : describe(group, value)}</p>}
                      <p className="text-muted-foreground">{item.why}</p>
                    </div>
                  )}
                </div>
                {onFlag && !review && (
                  <button type="button" onClick={() => onFlag(n)} aria-pressed={flags?.has(n)} aria-label={flags?.has(n) ? t('ielts.q.unmark', { n }) : t('ielts.q.mark', { n })}
                    className={cn('mt-0.5 shrink-0 rounded-md p-1.5 transition-colors', flags?.has(n) ? 'text-amber-500 bg-amber-500/10' : 'text-muted-foreground/50 hover:text-amber-500')}>
                    <Flag className="h-4 w-4" />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function describe(group: QuestionGroup, value: Answer): string {
  if (typeof value === 'number') return group.kind === 'mcq' ? String.fromCharCode(65 + value) : optionLabel(group.instruction, value);
  return TF[value as string] ?? String(value);
}

function FillLine({ q, value, disabled, onChange, onFocus, label }: { q: string; value: string; disabled: boolean; onChange: (v: string) => void; onFocus: () => void; label: string }) {
  const [before, ...rest] = q.split('___');
  return (
    <p className="leading-9">
      {before}
      <input type="text" value={value} disabled={disabled} onChange={(e) => onChange(e.target.value)} onFocus={onFocus} aria-label={label}
        autoComplete="off" autoCapitalize="off" spellCheck={false}
        className="mx-1 w-36 sm:w-44 rounded-md border-b-2 border-primary/50 bg-secondary/40 px-2 py-1 text-sm focus:outline-none focus:border-primary" />
      {rest.join('___')}
    </p>
  );
}
