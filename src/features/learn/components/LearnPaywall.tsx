import { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { LearningAccess } from '../api';

const PricingModal = lazy(() => import('@/components/PricingModal').then((m) => ({ default: m.PricingModal })));

/** Shown when the 7-day free period is over and the learner is on the Free plan. */
export function LearnPaywall({ access, compact = false }: { access: LearningAccess; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-card ${compact ? 'p-5' : 'p-6 sm:p-8'} max-w-lg mx-auto text-left border-primary/30`}>
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4"><Lock className="h-6 w-6" /></div>
      <h2 className="text-xl font-bold mb-1">Bepul 7 kun tugadi</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Natijalaringiz va streak saqlanib qoladi. Kursni davom ettirish uchun <b>Learn</b> yoki <b>IELTS</b> tarifini tanlang —
        kurs ikkala tarifda ham to'liq ochiq. Natijalaringiz, XP va o'rgangan so'zlaringiz saqlanib turadi.
      </p>
      <ul className="space-y-2 mb-5 text-sm">
        {["Barcha ingliz tili darslari, bosqichma-bosqich", "Adaptiv o'rganish: so'z va grammatika takrori, xatolar daftari", "Bosqich testlari, XP va streak",
          "Learn — 49 000 so'm/oy · IELTS — 129 000 so'm/oy (Writing va Speaking AI baholash bilan)"].map((t) => <li key={t} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{t}</li>)}
      </ul>
      <Button variant="glow" size="lg" className="w-full" onClick={() => setOpen(true)}>Tarifni tanlash</Button>
      {!compact && <Link to="/learn" className="block text-center text-sm text-muted-foreground mt-3 hover:text-primary">Yo'l xaritasiga qaytish</Link>}
      {access.reason === 'trial_expired' && access.trial_ends_at && (
        <p className="text-[11px] text-muted-foreground mt-3 text-center">Bepul davr {new Date(access.trial_ends_at).toLocaleDateString('uz-UZ')} da tugagan.</p>
      )}
      {open && <Suspense fallback={null}><PricingModal open={open} onOpenChange={setOpen} /></Suspense>}
    </div>
  );
}
