import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, HeartHandshake, Loader2, MessageCircle, Phone, ShieldCheck, Sparkles, UserRound } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useDevices } from '@/hooks/useDevices';
import { useT } from '@/i18n';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AGE_RANGES, DISCOVERY_SOURCES, intakeError, intakeKey, intakeSafeRoute, normalizePhone, normalizeTelegram, snoozeIntake, type IntakeAnswers, type IntakeResponse } from '@/lib/user-intake';
import { toast } from 'sonner';

export function UserIntakeGate({ onBusyChange }: { onBusyChange: (busy: boolean) => void }) {
  const { user, profile, loading } = useAuth();
  const userId = user?.id;
  const hasProfile = !!profile;
  const devices = useDevices();
  const { pathname } = useLocation();
  const enabled = !!user && !!profile && !loading && !['checking','pending'].includes(devices.status) && intakeSafeRoute(pathname);
  const query = useQuery({
    queryKey: ['user-intake', user?.id], enabled, staleTime: 10 * 60_000, retry: false,
    queryFn: async () => {
      const { data, error } = await supabase.from('user_intake' as never).select('*').eq('user_id', user!.id).maybeSingle();
      if (error) throw error;
      return data as IntakeResponse | null;
    },
  });
  const [dismissed, setDismissed] = useState<string | null>(null);
  const [storageVersion, setStorageVersion] = useState(0);
  useEffect(() => {
    const sync = (event: StorageEvent) => { if (userId && event.key === intakeKey(userId)) setStorageVersion(v => v + 1); };
    window.addEventListener('storage', sync); return () => window.removeEventListener('storage', sync);
  }, [userId]);
  const due = enabled && !query.isError && query.isSuccess && !query.data?.completed_at && dismissed !== user?.id;
  useEffect(() => {
    const preparing = !!userId && intakeSafeRoute(pathname) && (loading || !hasProfile || ['checking','pending'].includes(devices.status));
    onBusyChange(preparing || (enabled && !query.isError && (query.isPending || due)));
    return () => onBusyChange(false);
  }, [enabled, query.isError, query.isPending, due, onBusyChange, storageVersion, userId, pathname, loading, hasProfile, devices.status]);
  if (!due) return null;
  return <UserIntakeModal key={user.id} userId={user.id}
    initialPhone={profile.phone || ''} initialTelegram={typeof user.user_metadata?.telegram_username === 'string' ? user.user_metadata.telegram_username : ''}
    onDone={() => setDismissed(user.id)} />;
}

export function UserIntakeModal({ userId, initialPhone = '', initialTelegram = '', onDone }: {
  userId: string; initialPhone?: string; initialTelegram?: string; onDone: () => void;
}) {
  const { t } = useT();
  const { refreshProfile } = useAuth();
  const qc = useQueryClient();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<IntakeAnswers>({ phone: initialPhone, telegram: initialTelegram, noUsername: false, age: '', source: '' });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const saving = useRef(false);
  const mounted = useRef(true);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { mounted.current = true; return () => { mounted.current = false; }; }, []);
  useEffect(() => { if (step > 0) heading.current?.focus(); }, [step]);
  const patch = (p: Partial<IntakeAnswers>) => { setAnswers(a => ({ ...a, ...p })); setError(''); };
  const finish = async () => {
    if (saving.current) return;
    for (let i = 0; i < 4; i++) { const invalid = intakeError(i, answers); if (invalid) { setStep(i); setError(invalid); return; } }
    saving.current = true; setBusy(true); setError('');
    try {
      const { data: auth } = await supabase.auth.getUser();
      if (auth.user?.id !== userId) throw new Error('session_changed');
      const { data, error: saveError } = await supabase.rpc('complete_user_intake' as never, {
        _phone: normalizePhone(answers.phone) || null, _telegram_username: answers.noUsername ? null : normalizeTelegram(answers.telegram) || null,
        _no_telegram_username: answers.noUsername, _age_range: answers.age, _discovery_source: answers.source,
      } as never);
      if (saveError || !data || (data as IntakeResponse).user_id !== userId) throw new Error('save_failed');
      if (!mounted.current) return;
      qc.setQueryData(['user-intake', userId], data);
      // A timestamp only: prevent another tab's stale query from reopening the modal.
      snoozeIntake(userId);
      void qc.invalidateQueries({ queryKey: ['admin'] });
      void refreshProfile();
      toast.success(t('intake.done')); onDone();
    } catch { if (mounted.current) setError('intake.saveError'); }
    finally { saving.current = false; if (mounted.current) setBusy(false); }
  };
  const next = () => {
    const invalid = intakeError(step, answers);
    if (invalid) { setError(invalid); return; }
    setError(''); if (step === 3) void finish(); else setStep(s => s + 1);
  };
  const skip = () => {
    // Only the Telegram username can be skipped; the phone number and the age range are required.
    patch({ telegram: '', noUsername: false });
    setStep(s => s + 1);
  };
  const title = ['intake.phone','intake.telegram','intake.age','intake.source'][step];
  const Icon = [Phone, MessageCircle, UserRound, Sparkles][step];
  // Required: no close button, and neither Escape nor a click outside closes it.
  return <Dialog open>
    <DialogContent hideClose className="w-[calc(100%_-_2rem)] max-w-[400px] max-h-[calc(100dvh_-_2rem)] overflow-y-auto rounded-3xl border-primary/15 p-0 gap-0"
      onOpenAutoFocus={event => { event.preventDefault(); heading.current?.focus(); }}
      onPointerDownOutside={event => event.preventDefault()} onInteractOutside={event => event.preventDefault()} onEscapeKeyDown={event => event.preventDefault()}>
      <div className="px-5 pt-5 pb-3 bg-gradient-to-br from-primary/10 via-background to-rose-50/40 dark:to-primary/5 rounded-t-3xl">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 shrink-0 grid place-items-center rounded-xl bg-primary text-primary-foreground"><HeartHandshake className="h-5 w-5" /></div>
          <DialogHeader className="min-w-0 flex-1 text-left space-y-0.5">
            <DialogTitle className="text-lg leading-tight">{t('intake.title')}</DialogTitle>
            <DialogDescription className="text-xs leading-snug">{t('intake.description')}</DialogDescription>
          </DialogHeader>
          <span className="shrink-0 text-xs font-semibold text-primary" aria-live="polite">{t('intake.step', { n: step + 1 })}</span>
        </div>
        <div className="mt-3 flex gap-1.5" aria-hidden="true">{[0,1,2,3].map(i => <span key={i} className={`h-1 flex-1 rounded-full ${i <= step ? 'bg-primary' : 'bg-primary/10'}`} />)}</div>
      </div>
      <form className="p-5 pt-4 space-y-4" onSubmit={event => { event.preventDefault(); next(); }}>
        <div>
          <h2 ref={heading} tabIndex={-1} id="intake-question" className="font-bold text-lg outline-none flex items-center gap-2"><Icon className="h-5 w-5 text-primary shrink-0" />{t(title)}</h2>
          {step === 1 && <p className="text-xs text-muted-foreground mt-1">{t('intake.optional')}</p>}
        </div>
        {step === 0 && <div className="space-y-3"><Input aria-label={t('intake.phone')} aria-invalid={!!error} aria-describedby="intake-contact-note" type="tel" inputMode="tel" autoComplete="tel" placeholder="+998 __ ___ __ __" maxLength={24} value={answers.phone} onChange={e => patch({ phone: e.target.value })} className="h-12 text-base rounded-xl" />
          <p id="intake-contact-note" className="text-sm leading-relaxed text-muted-foreground">{t('intake.contactHint')}</p></div>}
        {step === 1 && <div className="space-y-3"><Input aria-label={t('intake.telegram')} aria-invalid={!!error} aria-describedby="intake-telegram-note" type="text" inputMode="text" autoCapitalize="none" autoCorrect="off" autoComplete="off" spellCheck={false} placeholder="@username" maxLength={33} disabled={answers.noUsername} value={answers.telegram} onChange={e => patch({ telegram: e.target.value })} className="h-12 text-base rounded-xl" />
          <label className="flex items-center gap-2.5 rounded-xl border p-3 cursor-pointer text-sm"><input type="checkbox" checked={answers.noUsername} onChange={e => patch({ noUsername: e.target.checked, ...(e.target.checked ? { telegram: '' } : {}) })} className="h-4 w-4 accent-[hsl(var(--primary))]" />{t('intake.noUsername')}</label>
          <p id="intake-telegram-note" className="text-xs text-muted-foreground leading-relaxed">{t('intake.telegramHint')}</p></div>}
        {step === 2 && <fieldset className="space-y-3"><legend className="text-xs text-muted-foreground mb-3">{t('intake.ageHint')}</legend>
          <div className="grid grid-cols-2 gap-2">{AGE_RANGES.map(age => <label key={age} className={`flex items-center justify-between gap-2 cursor-pointer rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${answers.age === age ? 'border-primary bg-primary/5 text-primary' : 'hover:border-primary/40'}`}>
            <span className="inline-flex items-center gap-2"><input type="radio" name="intake-age" value={age} checked={answers.age === age} onChange={() => patch({ age })} className="accent-[hsl(var(--primary))]" />{t(`intake.age.${age}`)}</span>{answers.age === age && <Check className="h-4 w-4" />}</label>)}</div></fieldset>}
        {step === 3 && <div className="space-y-3">
          <select aria-label={t('intake.source')} aria-invalid={!!error} value={answers.source} onChange={e => patch({ source: e.target.value as IntakeAnswers['source'] })} className="h-12 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            <option value="" disabled>{t('intake.select')}</option>{DISCOVERY_SOURCES.map(source => <option key={source} value={source}>{t(`intake.source.${source}`)}</option>)}
          </select></div>}
        {error && <p role="alert" className="text-xs text-destructive leading-relaxed">{t(error)}</p>}
        {step === 0 && <p className="flex items-start gap-2 text-[11px] text-muted-foreground leading-relaxed"><ShieldCheck className="h-4 w-4 shrink-0 text-primary/70" />{t('intake.private')}</p>}
        <div className="flex items-center gap-2 pt-1">
          {step > 0 && <Button type="button" variant="outline" size="icon" disabled={busy} aria-label={t('intake.back')} onClick={() => { setError(''); setStep(s => s - 1); }} className="rounded-xl h-11 w-11 shrink-0"><ArrowLeft className="h-4 w-4" /></Button>}
          <Button type="submit" disabled={busy} className="rounded-xl h-11 flex-1 gap-2 whitespace-normal leading-tight">{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : null}{t(busy ? 'intake.saving' : step === 3 ? 'intake.finish' : 'intake.next')}{!busy && step < 3 && <ArrowRight className="h-4 w-4" />}</Button>
        </div>
        {step === 1 && <div className="flex justify-end text-xs"><button type="button" onClick={skip} className="text-primary font-medium py-1">{t('intake.skip')}</button></div>}
      </form>
    </DialogContent>
  </Dialog>;
}
