import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/** "Previous question" while an exercise set is running: earlier answers can be read again, never changed. */
export function ReviewNav({ shown, current, onShow }: { shown: number; current: number; onShow: (n: number) => void }) {
  if (current === 0) return null;
  const reviewing = shown < current;
  return (
    <div className="flex items-center justify-between gap-2 mb-4 rounded-xl border border-border bg-card px-2 py-1.5">
      <Button type="button" variant="outline" size="sm" disabled={shown === 0} onClick={() => onShow(shown - 1)} className="gap-1"><ChevronLeft className="h-4 w-4" />Oldingi savol</Button>
      {reviewing && <span className="text-xs text-amber-600 dark:text-amber-400 text-center">Ko'rib chiqish: javobni o'zgartirib bo'lmaydi</span>}
      {reviewing && <Button type="button" size="sm" onClick={() => onShow(shown + 1)} className="gap-1">{shown + 1 === current ? 'Hozirgi savol' : 'Keyingi'}<ChevronRight className="h-4 w-4" /></Button>}
    </div>
  );
}
