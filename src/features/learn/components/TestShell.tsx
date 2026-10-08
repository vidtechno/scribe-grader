import { X, XCircle } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import type { Exercise } from '../types';
import { Md } from './Md';

/** Page frame of the full-screen tests (unit test, placement test): progress bar on top, content below. */
export function TestShell({ children, onExit, progress, title = 'Bosqich testi', path = '/learn/test' }: { children: React.ReactNode; onExit?: () => void; progress?: number; title?: string; path?: string }) {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={title} description={title} path={path} noindex />
      {onExit && (
        <header className="fixed top-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-b border-border">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
            <button type="button" onClick={onExit} aria-label="Chiqish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
            <div className="h-2.5 flex-1 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all" style={{ width: `${(progress ?? 0) * 100}%` }} /></div>
          </div>
        </header>
      )}
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-24">{children}</main>
    </div>
  );
}

export function MistakeReview({ questions, answers }: { questions: Exercise[]; answers: boolean[] }) {
  const wrong = questions.map((q, i) => ({ q, ok: answers[i] })).filter((x) => !x.ok);
  if (!wrong.length) return null;
  return (
    <div className="text-left glass-card p-4">
      <p className="font-semibold mb-3">Xato qilingan savollar ({wrong.length})</p>
      <ul className="space-y-3 text-sm">
        {wrong.map(({ q }, i) => (
          <li key={i} className="flex gap-2.5"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /><span className="min-w-0"><QuestionText q={q} /></span></li>
        ))}
      </ul>
    </div>
  );
}

function QuestionText({ q }: { q: Exercise }) {
  switch (q.k) {
    case 'choice': return <><Md text={q.q} /> → <b>{q.opts[q.a]}</b></>;
    case 'listen': return <>Tinglash: <b>{q.say}</b></>;
    case 'tf': return <><Md text={q.q} /> → <b>{q.a ? "To'g'ri" : "Noto'g'ri"}</b></>;
    case 'fill': return <>{q.q.replace('___', `[${q.a[0]}]`)}</>;
    case 'translate': return <>{q.uz} → <b>{q.a[0]}</b></>;
    case 'order': return <>{q.uz} → <b>{q.words.join(' ')}</b></>;
    case 'match': return <>Juftliklar: {q.pairs.map((p) => `${p[0]} = ${p[1]}`).join(', ')}</>;
    case 'speak': return <>{q.say}</>;
  }
}
