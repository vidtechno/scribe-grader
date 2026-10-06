import { useEffect, useRef, useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { signInWithTokenHash, telegramAuth } from '@/lib/telegram';

type LoginStart = { code: string; secret: string; url: string; expires_in: number };
type PollResult = { status: string; token_hash?: string };

export function TelegramIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#229ED9" />
      <path fill="#fff" d="M5.4 11.8l11.6-4.5c.5-.2 1 .1.8.9l-2 9.3c-.1.6-.5.8-1.1.5l-3-2.2-1.5 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.6-5.1c.2-.2 0-.3-.4-.1l-6.9 4.4-3-.9c-.6-.2-.6-.6.3-.9z" />
    </svg>
  );
}

/** "Continue with Telegram": the user confirms the sign-in in the Scorify bot and this page picks it up. */
export function TelegramLoginButton({ disabled }: { disabled?: boolean }) {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState<LoginStart | null>(null);
  const [starting, setStarting] = useState(false);
  const [finishing, setFinishing] = useState(false);
  const [expired, setExpired] = useState(false);
  const active = useRef(false);

  const start = async () => {
    setOpen(true);
    setExpired(false);
    setRequest(null);
    setStarting(true);
    try {
      setRequest(await telegramAuth<LoginStart>({ action: 'login_start' }));
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Telegram sign-in is unavailable');
      setOpen(false);
    } finally {
      setStarting(false);
    }
  };

  useEffect(() => {
    if (!open || !request) return;
    active.current = true;
    const deadline = Date.now() + request.expires_in * 1000;
    let timer: ReturnType<typeof setTimeout>;
    const poll = async () => {
      if (!active.current) return;
      if (Date.now() > deadline) { setExpired(true); return; }
      try {
        const r = await telegramAuth<PollResult>({ action: 'login_poll', code: request.code, secret: request.secret });
        if (r.status === 'ok' && r.token_hash) {
          active.current = false;
          setFinishing(true);
          try {
            await signInWithTokenHash(r.token_hash); // AuthRoute redirects once the session is stored.
          } catch (e) {
            toast.error(e instanceof Error ? e.message : 'Sign-in failed');
            setFinishing(false);
            setOpen(false);
          }
          return;
        }
        if (r.status === 'rejected') { toast.error('Sign-in was declined in Telegram.'); setOpen(false); return; }
        if (r.status === 'banned') { toast.error('This Telegram account is blocked.'); setOpen(false); return; }
        if (r.status === 'expired' || r.status === 'used' || r.status === 'not_found') { setExpired(true); return; }
      } catch { /* Network hiccup: keep polling until the link expires. */ }
      timer = setTimeout(poll, 2000);
    };
    timer = setTimeout(poll, 1500);
    return () => { active.current = false; clearTimeout(timer); };
  }, [open, request]);

  return (
    <>
      <Button type="button" variant="outline" className="w-full h-12 gap-3 text-base font-semibold" disabled={disabled} onClick={() => void start()}>
        <TelegramIcon /> Continue with Telegram
      </Button>
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) active.current = false; }}>
        <DialogContent className="glass-card max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2"><TelegramIcon className="h-6 w-6" /> Sign in with Telegram</DialogTitle>
            <DialogDescription>Open the Scorify bot, press <b>Start</b> and then <b>Confirm</b>. This page signs you in automatically.</DialogDescription>
          </DialogHeader>
          {starting && <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />}
          {request && !expired && (
            <div className="space-y-4">
              <a href={request.url} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="glow" className="w-full h-12 gap-2 text-base"><Send className="h-5 w-5" /> Open Telegram</Button>
              </a>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                {finishing ? <>Signing you in…</> : <><Loader2 className="h-3.5 w-3.5 animate-spin" /> Waiting for confirmation in Telegram</>}
              </p>
            </div>
          )}
          {expired && (
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">This sign-in link has expired.</p>
              <Button variant="outline" onClick={() => void start()}>Get a new link</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
