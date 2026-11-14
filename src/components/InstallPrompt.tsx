import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Check, Download, Share2, Smartphone, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { intakeSafeRoute } from '@/lib/user-intake';
import { deviceKind, installOfferDue, isStandalone, promptInstall, reportInstall, snoozeInstallOffer, useCanPromptInstall, wasInstalled } from '@/lib/pwa';

/**
 * Offers to add the site to the phone's home screen, in plain words ("add to your phone screen", never "PWA").
 * Phones and tablets only, never inside the installed app, after sign-up and for existing users alike.
 * Chrome on Android adds it with one tap; on iPhone and iPad (or when the browser gives no one-tap offer) three steps are shown.
 */
export function InstallPrompt() {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const { t } = useT();
  const canPrompt = useCanPromptInstall();
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(false);
  const kind = typeof navigator === 'undefined' ? null : deviceKind();
  const userId = user?.id;
  const eligible = !!userId && !!kind && intakeSafeRoute(pathname) && !isStandalone() && !wasInstalled() && installOfferDue(userId);

  // Count the install: opened from the home-screen icon, or the browser just reported the install.
  useEffect(() => {
    if (!userId) return;
    if (isStandalone()) void reportInstall(userId);
    const onInstalled = () => { void reportInstall(userId, true); };
    window.addEventListener('appinstalled', onInstalled);
    return () => window.removeEventListener('appinstalled', onInstalled);
  }, [userId]);

  // Wait a few seconds, and until no other window (intro survey, announcement) is open.
  useEffect(() => {
    if (!eligible || open) return;
    const id = window.setInterval(() => {
      if (!document.querySelector('[role="dialog"]')) { setOpen(true); window.clearInterval(id); }
    }, 5000);
    return () => window.clearInterval(id);
  }, [eligible, open]);

  if (!userId || !kind) return null;
  const close = (forever = false) => { snoozeInstallOffer(userId, forever); setOpen(false); setSteps(false); };
  const add = async () => {
    if (!steps && canPrompt) {
      const r = await promptInstall();
      if (r === 'accepted') { toast.success(t('pwa.done')); close(true); return; }
      if (r === 'dismissed') { close(); return; }
    }
    setSteps(true);
  };
  const list = kind === 'ios' ? ['pwa.ios1', 'pwa.ios2', 'pwa.ios3'] : ['pwa.and1', 'pwa.and2', 'pwa.and3'];

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) close(); }}>
      <DialogContent className="max-w-sm gap-0 overflow-hidden rounded-3xl p-0">
        <div className="relative bg-gradient-to-br from-[#ff4058] via-primary to-[#ad001f] px-6 pb-6 pt-8 text-center text-white">
          <span aria-hidden className="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
          <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-xl"><img src="/logo-192.png" alt="" className="h-12 w-12 rounded-xl" /></span>
          <DialogHeader className="relative mt-4 space-y-1.5 text-center sm:text-center">
            <DialogTitle className="text-xl font-extrabold leading-snug text-white">{t('pwa.title')}</DialogTitle>
            <DialogDescription className="text-sm text-white/85">{t('pwa.text')}</DialogDescription>
          </DialogHeader>
        </div>
        <div className="space-y-4 p-5">
          {steps ? (
            <div>
              <p className="mb-2 text-sm font-extrabold">{t('pwa.stepsTitle')}</p>
              <ol className="space-y-2.5">
                {list.map((k, i) => (
                  <li key={k} className="flex items-start gap-3 text-sm">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-xs font-extrabold text-primary">{i + 1}</span>
                    <span className="flex-1 leading-snug">{t(k)}{kind === 'ios' && i === 0 ? <Share2 className="ml-1.5 inline h-4 w-4 text-primary" /> : null}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <ul className="space-y-2.5 text-sm font-semibold">
              {[[Zap, 'pwa.b1'], [Smartphone, 'pwa.b2'], [Check, 'pwa.b3']].map(([Icon, k]) => {
                const I = Icon as typeof Zap;
                return <li key={k as string} className="flex items-center gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500/10 text-emerald-600"><I className="h-4 w-4" /></span>{t(k as string)}</li>;
              })}
            </ul>
          )}
          <div className="space-y-2">
            {steps
              ? <Button variant="glow" size="lg" className="w-full font-bold" onClick={() => close(true)}>{t('pwa.ok')}</Button>
              : <Button variant="glow" size="lg" className="w-full gap-2 font-bold" onClick={() => void add()}><Download className="h-4 w-4" />{canPrompt ? t('pwa.add') : t('pwa.how')}</Button>}
            {!steps && <button type="button" onClick={() => close()} className="w-full py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">{t('pwa.later')}</button>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
