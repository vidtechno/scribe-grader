import { useMemo, useState } from 'react';
import { Check, CheckCircle2, X } from 'lucide-react';
import { toast } from 'sonner';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import type { Exercise } from '../types';
import { callLearning, learningErrorMessage } from '../api';
import { recordReview } from '../engine/api';
import { sessionEvents, type SessionItem } from '../engine/engine';
import { exerciseAudioTexts } from '../audio-plan';
import { useLessonAudio } from '../useLessonAudio';
import { ExerciseView } from './ExerciseView';

export interface DrillItem { ex: Exercise; item?: SessionItem }

export function WordDrill({ items: drillItems, onClose, onFinished }: { items: DrillItem[]; onClose: () => void; onFinished: () => void }) {
  const { t, lang } = useT();
  const items = useMemo(() => drillItems.map((d) => d.ex), [drillItems]);
  const results = useMemo<{ item: SessionItem; correct: boolean }[]>(() => [], []);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [startedAt] = useState(Date.now());
  const [finished, setFinished] = useState(false);
  useLessonAudio(items.flatMap(exerciseAudioTexts), 'drill');
  const finish = async (score: number) => {
    setFinished(true);
    try {
      if (results.length) await recordReview(sessionEvents(results), true);
      else await callLearning('learning_log_practice', { _correct: score, _answered: items.length, _seconds: Math.round((Date.now() - startedAt) / 1000) });
      onFinished();
    } catch (e) { toast.error(learningErrorMessage(e, lang)); }
  };
  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto">
      <div className="max-w-xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button type="button" onClick={onClose} aria-label={t('learn.common.close')} className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <div className="h-2.5 flex-1 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${(Math.min(i, items.length) / items.length) * 100}%` }} /></div>
        </div>
        {finished ? (
          <div className="text-center py-10">
            <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-1">{correct} / {items.length}</h2>
            <p className="text-muted-foreground mb-6">{correct >= items.length * 0.8 ? t('learn.home.drillGood') : t('learn.home.drillBad')}</p>
            <Button onClick={onClose} className="gap-2"><Check className="h-4 w-4" />{t('learn.home.done')}</Button>
          </div>
        ) : (
          <ExerciseView key={i} ex={items[i]} mode="practice" onDone={(c) => {
            const s = correct + (c ? 1 : 0);
            setCorrect(s);
            const it = drillItems[i].item;
            if (it) results.push({ item: it, correct: c });
            if (i + 1 >= items.length) void finish(s); else setI(i + 1);
          }} />
        )}
      </div>
    </div>
  );
}
