import { useEffect, useRef, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Bell, ExternalLink, Loader2, Unlink, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/hooks/useAuth';
import { telegramAuth, type TelegramStatus } from '@/lib/telegram';
import { TelegramIcon } from '@/components/TelegramLoginButton';

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
          toast.success('Telegram connected. Your results will arrive in the bot.');
        }
      }, 3000);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Could not connect Telegram');
    } finally {
      setBusy(false);
    }
  };
  return { connect, url, busy };
}

const SETTINGS = [
  { key: 'notify_results', label: 'Results', hint: 'Writing, Speaking and Mock Test scores' },
  { key: 'notify_reminders', label: 'Reminders', hint: 'Practice reminders, plan expiry, weekly report' },
  { key: 'notify_news', label: 'News', hint: 'Announcements from Scorify' },
] as const;

/** Profile card: connect Telegram, choose notifications, disconnect. */
export function TelegramConnectCard({ autoConnect = false }: { autoConnect?: boolean }) {
  const { user } = useAuth();
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
      toast.error(e instanceof Error ? e.message : 'Could not save');
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
      toast.error(e instanceof Error ? e.message : 'Could not save');
    } finally {
      setSaving(null);
    }
  };

  const disconnect = async () => {
    if (!window.confirm('Disconnect Telegram? Results will no longer be sent to the bot.')) return;
    try {
      await telegramAuth({ action: 'unlink' });
      await queryClient.invalidateQueries({ queryKey: ['telegram-status', user?.id] });
      toast.success('Telegram disconnected');
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Could not disconnect');
    }
  };

  return (
    <div className="glass-card p-6 mb-6">
      <h2 className="text-lg font-semibold mb-1 flex items-center gap-2"><TelegramIcon /> Telegram</h2>
      {isLoading ? (
        <div className="h-16 grid place-items-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
      ) : isError || !data ? (
        <p className="text-sm text-muted-foreground">Telegram is not available right now.</p>
      ) : data.linked && data.account ? (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            Connected{data.account.username ? <> as <b>@{data.account.username}</b></> : null}. Your results, plan updates and reminders arrive in the Scorify bot.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-4">
            {SETTINGS.map((s) => (
              <label key={s.key} className="glass-card-hover p-3 flex items-start justify-between gap-3 cursor-pointer">
                <span>
                  <span className="text-sm font-medium flex items-center gap-1.5"><Bell className="h-3.5 w-3.5 text-primary" /> {s.label}</span>
                  <span className="block text-[11px] text-muted-foreground mt-0.5">{s.hint}</span>
                </span>
                <Switch checked={data.account![s.key]} disabled={saving === s.key} onCheckedChange={(v) => void update(s.key, v)} />
              </label>
            ))}
          </div>
          {data.account.notify_reminders && (
            <div className="mb-4">
              <p className="text-sm font-medium mb-1.5">Study reminders</p>
              <div className="inline-flex rounded-lg border border-border p-0.5">
                {([['normal', 'Normal', 'morning, afternoon, evening'], ['light', 'Light', 'evening only'], ['off', 'Off', 'no study reminders']] as const).map(([mode, label, hint]) => (
                  <button key={mode} type="button" title={hint} disabled={saving === 'reminder_mode'}
                    onClick={() => void updateMode(mode)}
                    className={`px-3 py-1.5 text-sm rounded-md ${(data.account!.reminder_mode ?? 'normal') === mode ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{label}</button>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1.5">If you stop studying for a while, reminders get rarer and then stop on their own.</p>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            <a href={data.bot_url} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2"><ExternalLink className="h-4 w-4" /> Open the bot</Button>
            </a>
            {!data.telegram_only && (
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground" onClick={() => void disconnect()}>
                <Unlink className="h-4 w-4" /> Disconnect
              </Button>
            )}
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">
            Connect Telegram to get your band scores the moment they are ready, track goals and your plan, and sign in with one tap.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="glow" className="gap-2" disabled={busy} onClick={() => void connect()}>
              {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <TelegramIcon className="h-4 w-4" />} Connect Telegram
            </Button>
            {url && (
              <span className="text-xs text-muted-foreground flex items-center gap-2">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Press <b>Start</b> in the bot.
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-primary underline">Open again</a>
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
        {url ? "Botda Start tugmasini bosing — ulanish tugaydi."
          : <>Telegram'ni ulang: <b>dars eslatmalari</b>, natijalar va o'sishingiz — hammasi botda.</>}
      </p>
      <Button size="sm" variant="outline" disabled={busy} onClick={() => void connect()}>{url ? 'Qayta ochish' : 'Ulash'}</Button>
      <button type="button" aria-label="Yopish" onClick={dismiss} className="text-muted-foreground hover:text-foreground"><X className="h-4 w-4" /></button>
    </div>
  );
}
