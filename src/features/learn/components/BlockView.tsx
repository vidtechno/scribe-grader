import { useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, Eye, EyeOff, Info, ThumbsDown, ThumbsUp } from 'lucide-react';
import type { Block } from '../types';
import { ExerciseView } from './ExerciseView';
import { Md } from './Md';
import { SpeakButton } from './SpeakButton';

/** Renders one theory block. `onCheck` reports the result of an inline quick check. */
export function BlockView({ block, onCheck }: { block: Block; onCheck?: (correct: boolean) => void }) {
  switch (block.t) {
    case 'p':
      return <p className="text-[15px] sm:text-base leading-relaxed text-foreground/90"><Md text={block.md} /></p>;
    case 'tip': {
      const tone = block.tone ?? 'info';
      const style = tone === 'warn' ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-100'
        : tone === 'good' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-100'
          : 'bg-sky-500/10 border-sky-500/30 text-sky-900 dark:text-sky-100';
      const Icon = tone === 'warn' ? AlertTriangle : tone === 'good' ? CheckCircle2 : Info;
      return (
        <div className={`rounded-xl border p-3.5 text-sm leading-relaxed flex gap-3 ${style}`}>
          <Icon className="h-5 w-5 shrink-0 mt-0.5" /><Md text={block.md} />
        </div>
      );
    }
    case 'examples':
      return (
        <ul className="space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-3">
              <SpeakButton text={it.en} />
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{it.en}</p>
                <p className="text-sm text-muted-foreground">{it.uz}</p>
                {it.note && <p className="text-xs mt-1 text-primary"><Md text={it.note} /></p>}
              </div>
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr>{block.head.map((h, i) => <th key={i} className="text-left font-semibold px-3 py-2 whitespace-nowrap">{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  {r.map((c, j) => (
                    <td key={j} className="px-3 py-2 align-top">
                      <span className="inline-flex items-center gap-2">
                        {block.speak?.includes(j) && c && <SpeakButton text={c} />}
                        <Md text={c} />
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'sounds':
      return (
        <div className="grid sm:grid-cols-2 gap-2.5">
          {block.items.map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-3 flex gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-2xl font-extrabold text-primary leading-none min-w-[52px] text-center">{s.label}</span>
                <SpeakButton text={s.say} size="md" />
              </div>
              <div className="min-w-0 flex-1 text-sm">
                <p className="leading-snug"><Md text={s.uz} /></p>
                {!!s.examples?.length && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {s.examples.map((e) => (
                      <span key={e} className="inline-flex items-center gap-1 rounded-full bg-secondary pl-1 pr-2.5 py-0.5">
                        <SpeakButton text={e} /><span className="font-medium">{e}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      );
    case 'compare':
      return (
        <div className="grid sm:grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
            <p className="font-semibold text-emerald-700 dark:text-emerald-300 text-sm mb-2 flex items-center gap-1.5"><ThumbsUp className="h-4 w-4" />{block.good.title}</p>
            <ul className="space-y-1.5 text-sm">{block.good.items.map((x, i) => <li key={i} className="flex items-center gap-2">{isEnglish(x) && <SpeakButton text={x} />}<Md text={x} /></li>)}</ul>
          </div>
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3">
            <p className="font-semibold text-destructive text-sm mb-2 flex items-center gap-1.5"><ThumbsDown className="h-4 w-4" />{block.bad.title}</p>
            <ul className="space-y-1.5 text-sm">{block.bad.items.map((x, i) => <li key={i} className="line-through decoration-destructive/60"><Md text={x} /></li>)}</ul>
          </div>
        </div>
      );
    case 'dialog':
      return (
        <div className="space-y-2">
          {block.lines.map((l, i) => {
            const right = i % 2 === 1;
            return (
              <div key={i} className={`flex ${right ? 'justify-end' : ''}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${right ? 'bg-primary/10 rounded-br-md' : 'bg-secondary rounded-bl-md'}`}>
                  <p className="text-[11px] font-semibold text-muted-foreground">{l.who}</p>
                  <p className="font-semibold flex items-center gap-2"><SpeakButton text={l.en} />{l.en}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{l.uz}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    case 'text':
      return <ReadingText title={block.title} en={block.en} uz={block.uz} />;
    case 'check':
      return <ExerciseView ex={block.ex} mode="inline" onDone={(c) => onCheck?.(c)} />;
  }
}

/** A short English passage: read it, listen to it, then check the translation if needed. */
function ReadingText({ title, en, uz }: { title?: string; en: string; uz: string }) {
  const [showUz, setShowUz] = useState(false);
  return (
    <div className="rounded-2xl border border-primary/25 bg-primary/[0.04] p-4">
      <div className="flex items-center gap-2 mb-2.5">
        <BookOpen className="h-4 w-4 text-primary shrink-0" />
        <p className="font-semibold text-sm flex-1 min-w-0">{title ?? 'Reading'}</p>
        <SpeakButton text={en} slow />
      </div>
      <div className="space-y-2 text-[15px] leading-relaxed">
        {en.split('\n').filter(Boolean).map((para, i) => <p key={i}><Md text={para} /></p>)}
      </div>
      <button type="button" onClick={() => setShowUz((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
        {showUz ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        {showUz ? 'Tarjimani yashirish' : "Tarjimasini ko'rish"}
      </button>
      {showUz && (
        <div className="mt-2 space-y-1.5 text-sm text-muted-foreground border-t border-border pt-2">
          {uz.split('\n').filter(Boolean).map((para, i) => <p key={i}><Md text={para} /></p>)}
        </div>
      )}
    </div>
  );
}

/** Only plain English lines get a play button (not pronunciation spellings in quotes or Uzbek notes). */
function isEnglish(text: string): boolean {
  const plain = text.replace(/[*`]/g, '');
  return /^[A-Za-z0-9 ,.'?!;:()\u2013\u2014-]+$/.test(plain)
    && !/\b[og]'/i.test(plain)
    && !/\b(va|yoki|emas|bilan|uchun|kabi|deb)\b/i.test(plain);
}
