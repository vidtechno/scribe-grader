import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Bell, ExternalLink, Loader2, Unlink, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { isTelegramWebApp } from '@/lib/telegram';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/hooks/useAuth';
import { telegramAuth, type TelegramStatus } from '@/lib/telegram';
import { TelegramIcon } from '@/components/TelegramLoginButton';
import { useT } from '@/i18n';
import { Rich } from '@/i18n/rich';

export function useTelegramStatus() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['telegram-status', user?.id],
    queryFn: () => telegramAuth<TelegramStatus>({ action: 'status' }),
    enabled: !!user,
    staleTime: 5 * 60_000,
    retry: 1,
  });
}

/** Creates a one-time bot link and waits until the bot confirms the connection. */
function useConnect() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { t } = useT();
  const [url, setUrl] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => () => clearInterval(timer.current), []);

  const connect = async () => {
    setBusy(true);
    try {
      const r = await telegramAuth<{ linked: boolean; url?: string }>({ action: 'link_start' });
      if (r.linked || !r.url) {
        await queryClient.invalidateQueries({ queryKey: ['telegram-status', user?.id] });
        return;
      }
      setUrl(r.url);
      window.open(r.url, '_blank', 'noopener');
      const started = Date.now();
      clearInterval(timer.current);
      timer.current = setInterval(async () => {
        if (Date.now() - started > 10 * 60_000) { clearInterval(timer.current); return; }
        const s = await telegramAuth<TelegramStatus>({ action: 'status' }).catch(() => null);
        if (s?.linked) {
          clearInterval(timer.current);
          setUrl(null);
          queryClient.setQueryData(['telegram-status', user?.id], s);
          toast.success(t('tgCard.connectedToast'));
        }
      }, 3000);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('tgCard.connectFail'));
    } finally {
      setBusy(false);
    }
  };
  return { connect, url, busy };
}

const SETTINGS = [
  { key: 'notify_results', label: 'tgCard.set.results', hint: 'tgCard.set.resultsHint' },
  { key: 'notify_reminders', label: 'tgCard.set.reminders', hint: 'tgCard.set.remindersHint' },
  { key: 'notify_news', label: 'tgCard.set.news', hint: 'tgCard.set.newsHint' },
] as const;

/** Profile card: connect Telegram, choose notifications, disconnect. */
export function TelegramConnectCard({ autoConnect = false }: { autoConnect?: boolean }) {
  const { user } = useAuth();
  const { t } = useT();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useTelegramStatus();
  const { connect, url, busy } = useConnect();
  const [saving, setSaving] = useState<string | null>(null);
  const autoStarted = useRef(false);

  useEffect(() => {
    if (autoConnect && data && !data.linked && !autoStarted.current) {
      autoStarted.current = true;
      void connect();
    }
  }, [autoConnect, data]); // eslint-disable-line react-hooks/exhaustive-deps

  const update = async (key: string, value: boolean) => {
    setSaving(key);
    try {
      await telegramAuth({ action: 'settings', [key]: value });
      queryClient.setQueryData<TelegramStatus>(['telegram-status', user?.id], (old) =>
        old?.account ? { ...old, account: { ...old.account, [key]: value } } : old);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('tgCard.saveFail'));
    } finally {
      setSaving(null);
    }
  };

  const updateMode = async (mode: 'normal' | 'light' | 'off') => {
    setSaving('reminder_mode');
    try {
      await telegramAuth({ action: 'settings', reminder_mode: mode });
      queryClient.setQueryData<TelegramStatus>(['telegram-status', user?.id], (old) =>
        old?.account ? { ...old, account: { ...old.account, reminder_mode: mode } } : old);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('tgCard.saveFail'));
    } finally {
      setSaving(null);
    }
  };

  const disconnect = async () => {
    if (!window.confirm(t('tgCard.confirmDisconnect'))) return;
    try {
      await telegramAuth({ action: 'unlink' });
      await queryClient.invalidateQueries({ queryKey: ['telegram-status', user?.id] });
      toast.success(t('tgCard.disconnected'));
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('tgCard.disconnectFail'));
    }
  };

  return (
    <div className="glass-card p-6 mb-6">
      <h2 className="text-lg font-semibold mb-1 flex items-center gap-2"><TelegramIcon /> Telegram</h2>
      {isLoading ? (
        <div className="h-16 grid place-items-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
      ) : isError || !data ? (
        <p className="text-sm text-muted-foreground">{t('tgCard.unavailable')}</p>
      ) : data.linked && data.account ? (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            {data.account.username ? <Rich text={t('tgCard.connectedAs', { name: data.account.username })} /> : t('tgCard.connected')}
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-4">
            {SETTINGS.map((s) => (
              <label key={s.key} className="glass-card-hover p-3 flex items-start justify-between gap-3 cursor-pointer">
                <span>
                  <span className="text-sm font-medium flex items-center gap-1.5"><Bell className="h-3.5 w-3.5 text-primary" /> {t(s.label)}</span>
                  <span className="block text-[11px] text-muted-foreground mt-0.5">{t(s.hint)}</span>
                </span>
                <Switch checked={data.account![s.key]} disabled={saving === s.key} onCheckedChange={(v) => void update(s.key, v)} />
              </label>
            ))}
          </div>
          {data.account.notify_reminders && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-1.5">{t('tgCard.reminders')}</p>
              <div className="inline-flex rounded-lg border border-border p-0.5">
                {(['normal', 'light', 'off'] as const).map((mode) => (
                  <button key={mode} type="button" title={t(`tgCard.mode.${mode}Hint`)} disabled={saving === 'reminder_mode'}
                    onClick={() => void updateMode(mode)}
                    className={`px-3 py-1.5 text-sm rounded-md ${(data.account!.reminder_mode ?? 'normal') === mode ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{t(`tgCard.mode.${mode}`)}</button>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1.5">{t('tgCard.rarer')}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            <a href={data.bot_url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2"><ExternalLink className="h-4 w-4" /> {t('tgCard.openBot')}</Button>
            </a>
            {!data.telegram_only && (
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground" onClick={() => void disconnect()}>
                <Unlink className="h-4 w-4" /> {t('tgCard.disconnect')}
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            {t('tgCard.pitch')}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="glow" className="gap-2" disabled={busy} onClick={() => void connect()}>
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <TelegramIcon className="h-4 w-4" />} {t('tgCard.connect')}
            </Button>
            {url && (
              <span className="text-xs text-muted-foreground flex items-center gap-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> <Rich text={t('tgCard.pressStart')} />
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{t('tgCard.openAgain')}</a>
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}

const NUDGE_KEY = 'scorify:tg-learn-nudge-dismissed';

/** One quiet line after a finished lesson for learners who signed in without Telegram: what they get, one tap to connect. */
export function TelegramNudge() {
  const { t } = useT();
  const { data } = useTelegramStatus();
  const { connect, url, busy } = useConnect();
  const [hidden, setHidden] = useState(() => {
    try { return localStorage.getItem(NUDGE_KEY) === '1'; } catch { return false; }
  });
  if (hidden || !data || data.linked) return null;
  const dismiss = () => {
    try { localStorage.setItem(NUDGE_KEY, '1'); } catch { /* storage unavailable */ }
    setHidden(true);
  };
  return (
    <div className="mb-4 flex items-center gap-3 rounded-xl border border-border bg-secondary/30 px-3.5 py-3 text-left">
      <TelegramIcon className="h-5 w-5 shrink-0" />
      <p className="flex-1 text-[13px] leading-snug">
        {url ? t('tgNudge.waiting') : <Rich text={t('tgNudge.pitch')} />}
      </p>
      <Button size="sm" variant="outline" disabled={busy} onClick={() => void connect()}>{url ? t('tgNudge.again') : t('tgNudge.connect')}</Button>
      <button type="button" aria-label={t('tgNudge.close')} onClick={dismiss} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
    </div>
  );
}

const MODAL_KEY = 'scorify:tg-connect-modal-until';
const MODAL_PAUSE_MS = 3 * 24 * 3600_000;

/** Pop-up for signed-in people whose account is not linked to the bot (mostly Google sign-ups): why it helps, one tap to connect. */
export function TelegramConnectModal() {
  const { t } = useT();
  const { user } = useAuth();
  const { data } = useTelegramStatus();
  const { connect, url, busy } = useConnect();
  const [open, setOpen] = useState(false);

  const eligible = !!user && !!data && !data.linked && !isTelegramWebApp();
  useEffect(() => {
    if (!eligible) { setOpen(false); return; }
    let until = 0;
    try { until = Number(localStorage.getItem(MODAL_KEY) ?? 0); } catch { /* storage unavailable */ }
    if (Date.now() < until) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, [eligible]);

  // Linked while the dialog is open (the bot confirmed): close it.
  useEffect(() => { if (data?.linked) setOpen(false); }, [data?.linked]);

  const later = () => {
    try { localStorage.setItem(MODAL_KEY, String(Date.now() + MODAL_PAUSE_MS)); } catch { /* storage unavailable */ }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) later(); }}>
      <DialogContent className="max-w-md">
        <DialogHeader className="items-center text-center">
          <span className="mb-1 grid h-14 w-14 place-items-center rounded-2xl bg-primary/10"><TelegramIcon className="h-8 w-8" /></span>
          <DialogTitle>{t('tgModal.title')}</DialogTitle>
          <DialogDescription>{t('tgModal.desc')}</DialogDescription>
        </DialogHeader>
        <ul className="space-y-2.5 text-sm">
          <li className="flex gap-2.5"><span>🔔</span><span><Rich text={t('tgModal.b1')} /></span></li>
          <li className="flex gap-2.5"><span>📊</span><span><Rich text={t('tgModal.b2')} /></span></li>
          <li className="flex gap-2.5"><span>🎓</span><span><Rich text={t('tgModal.b3')} /></span></li>
          <li className="flex gap-2.5"><span>🎁</span><span><Rich text={t('tgModal.b4')} /></span></li>
        </ul>
        <div className="mt-2 flex flex-col gap-2">
          <Button variant="glow" className="gap-2" disabled={busy} onClick={() => void connect()}>
            {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <TelegramIcon className="h-4 w-4" />} {t('tgModal.connect')}
          </Button>
          {url && (
            <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> <Rich text={t('tgModal.pressStart')} />
              <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline">{t('tgModal.again')}</a>
            </p>
          )}
          <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={later}>{t('tgModal.later')}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
