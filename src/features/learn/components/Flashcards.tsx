import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Word } from '../types';
import { speak } from '../speech';
import { SpeakButton } from './SpeakButton';

/** The words taught as new in this lesson, one card at a time (hear it, say it, reveal the meaning); the rest of the lesson's words are only shown. */
export function Flashcards({ words, extra = [], onFinish }: { words: Word[]; extra?: Word[]; onFinish: () => void }) {
  const [i, setI] = useState(0);
  const [showExtra, setShowExtra] = useState(false);
  const [shown, setShown] = useState(false);
  const w = words[i];
  useEffect(() => { setShown(false); void speak(w.en); }, [w]);
  const last = i === words.length - 1;
  if (showExtra) {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Qo'shimcha so'zlar</p>
        <p className="text-sm text-muted-foreground mb-4">Bu so'zlarni hozir yodlash shart emas — ular mashqlarda uchraydi va keyingi darslarda sizga qayta ko'rsatiladi.</p>
        <div className="grid sm:grid-cols-2 gap-2 mb-6">
          {extra.map((w) => (
            <div key={w.en} className="glass-card px-3 py-2.5 flex items-center gap-3">
              <SpeakButton text={w.en} />
              <div className="min-w-0 flex-1"><p className="font-semibold">{w.en}</p><p className="text-sm text-muted-foreground truncate">{w.uz}</p></div>
            </div>
          ))}
        </div>
        <Button variant="glow" size="lg" className="w-full" onClick={onFinish}>Mashqqa o'tish</Button>
      </div>
    );
  }
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-3 text-center">Yangi so'z {i + 1} / {words.length} — eshiting, ovoz chiqarib ayting, keyin ma'nosini oching</p>
      <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6 sm:p-8 text-center shadow-sm min-h-[300px] flex flex-col items-center justify-center">
        <p className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-1">{w.en}</p>
        {w.ipa && <p className="text-muted-foreground font-mono mb-1">/{w.ipa}/</p>}
        {w.pos && <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-4">{w.pos}</p>}
        <SpeakButton text={w.en} size="lg" slow />
        {shown ? (
          <div className="mt-5 animate-fade-in">
            <p className="text-2xl font-bold text-primary">{w.uz}</p>
            {w.ex && (
              <div className="mt-4 rounded-xl bg-background/70 border border-border px-4 py-3 text-left max-w-md mx-auto">
                <p className="font-medium flex items-center gap-2"><SpeakButton text={w.ex} />{w.ex}</p>
                {w.exUz && <p className="text-sm text-muted-foreground mt-1">{w.exUz}</p>}
              </div>
            )}
          </div>
        ) : (
          <Button variant="outline" className="mt-5 gap-2" onClick={() => setShown(true)}><Eye className="h-4 w-4" />Tarjimasini ko'rish</Button>
        )}
      </div>
      <div className="flex items-center justify-between mt-4 gap-2 sm:gap-3">
        <Button variant="ghost" disabled={i === 0} onClick={() => setI(i - 1)} className="gap-1 shrink-0 px-2 sm:px-4"><ChevronLeft className="h-4 w-4" />Oldingi</Button>
        <div className="flex gap-1 flex-1 min-w-0 justify-center">{words.map((_, k) => <span key={k} className={`h-1.5 flex-1 max-w-4 rounded-full ${k <= i ? 'bg-primary' : 'bg-border'}`} />)}</div>
        <Button variant={last ? 'glow' : 'default'} onClick={() => (last ? (extra.length ? setShowExtra(true) : onFinish()) : setI(i + 1))} className="gap-1 shrink-0 px-3 sm:px-4">
          {last ? (extra.length ? "Qo'shimcha so'zlar" : "Mashqqa o'tish") : 'Keyingi'}<ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
