import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Check, Copy, Crown, Gift, Loader2, Send, Sparkles, Users } from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { useSubscription } from '@/hooks/useSubscription';

type HistoryItem = { created_at: string; counted: boolean; current_cycle: boolean; name: string };
type PastCycle = { started_at: string; ended_at: string | null; go_claimed_at: string | null; plus_granted_at: string | null; reward_expires_at: string | null; counted: number };
type ReferralData = {
  code: string; counted: number; total_invited: number; cycle_started_at: string;
  go_claimed_at: string | null; plus_granted_at: string | null; reward_expires_at: string | null;
  can_claim_go: boolean; history: HistoryItem[]; past_cycles: PastCycle[];
};

const GO_AT = 10;
const PLUS_AT = 20;

export default function Referral() {
  const { refresh } = useSubscription();
  const [data, setData] = useState<ReferralData | null>(null);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const [copied, setCopied] = useState(false);

  const load = useCallback(async () => {
    const { data: res, error } = await supabase.rpc('my_referral');
    if (error) toast.error('Could not load your referral data');
    else setData(res as unknown as ReferralData);
    setLoading(false);
  }, []);
  useEffect(() => { void load(); }, [load]);

  const link = data ? `https://www.scorify.uz/?ref=${data.code}` : '';
  const shareText = 'Prepare for IELTS Writing and Speaking with instant AI feedback on Scorify:';

  const copy = async () => {
    try { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { toast.error('Copy failed. Select the link and copy it manually.'); }
  };

  const claim = async () => {
    setClaiming(true);
    const { error } = await supabase.rpc('claim_referral_reward');
    setClaiming(false);
    if (error) { toast.error(error.message); return; }
    toast.success('Scorify Go is active for 30 days!');
    await Promise.all([load(), refresh()]);
  };

  if (loading) return <div className="min-h-screen bg-background grid place-items-center"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;

  const counted = data?.counted ?? 0;
  const overflow = (data?.history ?? []).filter(h => h.current_cycle && !h.counted).length;
  const rewardActive = !!data?.reward_expires_at && new Date(data.reward_expires_at) > new Date();
  const progress = Math.min(100, (counted / PLUS_AT) * 100);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title="Invite friends" description="Invite friends to Scorify and earn free months of Scorify Go and Plus." path="/referral" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center"><Gift className="h-6 w-6" /></div>
            <div>
              <h1 className="text-2xl font-bold">Invite friends, get Scorify free</h1>
              <p className="text-sm text-muted-foreground">Share your link. Everyone who signs up with it counts toward your reward.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input readOnly value={link} onFocus={(e) => e.currentTarget.select()} aria-label="Your referral link"
              className="flex-1 rounded-xl border bg-background px-4 py-3 text-sm font-mono" />
            <Button variant="glow" className="gap-2" onClick={copy}>{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? 'Copied' : 'Copy link'}</Button>
            <a href={`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 w-full"><Send className="h-4 w-4" />Telegram</Button>
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="glass-card p-6 sm:p-8">
          <div className="flex items-end justify-between mb-3">
            <h2 className="text-lg font-semibold flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> This period</h2>
            <p className="text-sm text-muted-foreground"><strong className="text-foreground text-xl">{Math.min(counted, PLUS_AT)}</strong> / {PLUS_AT} friends</p>
          </div>
          <div className="relative pt-1 pb-8">
            <Progress value={progress} className="h-3" />
            {[GO_AT, PLUS_AT].map(m => (
              <span key={m} className="absolute top-0 -translate-x-1/2 text-[11px] font-semibold text-muted-foreground" style={{ left: `${(m / PLUS_AT) * 100}%`, marginTop: 22 }}>{m}</span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className={`rounded-2xl border p-5 ${counted >= GO_AT ? 'border-primary/40 bg-primary/5' : ''}`}>
              <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{GO_AT} friends</p>
              <h3 className="font-bold text-lg flex items-center gap-2"><Crown className="h-5 w-5 text-amber-500" />1 month Scorify Go</h3>
              <p className="text-sm text-muted-foreground mt-1">Worth $5. Activate it yourself when you are ready.</p>
              {data?.go_claimed_at ? <p className="text-sm font-medium text-primary mt-3 flex items-center gap-1"><Check className="h-4 w-4" />Activated {format(new Date(data.go_claimed_at), 'd MMM yyyy')}</p>
                : data?.plus_granted_at ? <p className="text-sm text-muted-foreground mt-3">Skipped — you earned Plus.</p>
                : data?.can_claim_go ? <Button variant="glow" className="mt-3 gap-2 w-full" onClick={claim} disabled={claiming}>{claiming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}Activate Scorify Go</Button>
                : <p className="text-sm text-muted-foreground mt-3">{GO_AT - counted} more friend{GO_AT - counted === 1 ? '' : 's'} to unlock</p>}
            </div>
            <div className={`rounded-2xl border p-5 ${counted >= PLUS_AT ? 'border-primary/40 bg-primary/5' : ''}`}>
              <p className="text-xs font-bold uppercase tracking-wide text-primary mb-1">{PLUS_AT} friends</p>
              <h3 className="font-bold text-lg flex items-center gap-2"><Crown className="h-5 w-5 text-amber-500" />1 month Scorify Plus</h3>
              <p className="text-sm text-muted-foreground mt-1">Worth $9. Activated automatically the moment your 20th friend joins.</p>
              {data?.plus_granted_at ? <p className="text-sm font-medium text-primary mt-3 flex items-center gap-1"><Check className="h-4 w-4" />Activated {format(new Date(data.plus_granted_at), 'd MMM yyyy')}</p>
                : <p className="text-sm text-muted-foreground mt-3">{Math.max(0, PLUS_AT - counted)} more friend{PLUS_AT - counted === 1 ? '' : 's'} to unlock</p>}
            </div>
          </div>

          {rewardActive && data?.reward_expires_at && (
            <p className="mt-5 text-sm rounded-xl bg-secondary/50 p-4">
              Your referral reward is active until <strong>{format(new Date(data.reward_expires_at), 'd MMM yyyy')}</strong>. When it ends, a new period starts and you can collect friends again from zero.
            </p>
          )}
          {overflow > 0 && (
            <p className="mt-3 text-xs text-muted-foreground">{overflow} extra friend{overflow === 1 ? '' : 's'} joined after the 20 limit. They are recorded in your statistics but do not count toward rewards.</p>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Invited, all time', value: data?.total_invited ?? 0 },
            { label: 'Counted this period', value: counted },
            { label: 'Periods completed', value: data?.past_cycles.length ?? 0 },
          ].map(s => <div key={s.label} className="glass-card p-5"><p className="text-3xl font-bold text-primary">{s.value}</p><p className="text-sm text-muted-foreground">{s.label}</p></div>)}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6">
          <h2 className="text-lg font-semibold mb-4">Friends who joined</h2>
          {data?.history.length ? (
            <ul className="divide-y divide-border/60">
              {data.history.map((h, i) => (
                <li key={i} className="flex items-center justify-between py-3 text-sm">
                  <span className="font-medium">{h.name}</span>
                  <span className="flex items-center gap-3 text-muted-foreground">
                    {!h.current_cycle && <span className="text-xs">earlier period</span>}
                    {h.current_cycle && !h.counted && <span className="text-xs">over limit</span>}
                    {format(new Date(h.created_at), 'd MMM yyyy')}
                  </span>
                </li>
              ))}
            </ul>
          ) : <p className="text-sm text-muted-foreground">No one has joined with your link yet. Share it to get started!</p>}
        </motion.div>

        {!!data?.past_cycles.length && (
          <div className="glass-card p-6">
            <h2 className="text-lg font-semibold mb-4">Previous periods</h2>
            <ul className="space-y-2 text-sm">
              {data.past_cycles.map((c, i) => (
                <li key={i} className="flex flex-wrap justify-between gap-2 rounded-xl border p-3">
                  <span>{format(new Date(c.started_at), 'd MMM yyyy')} – {c.ended_at ? format(new Date(c.ended_at), 'd MMM yyyy') : 'now'}</span>
                  <span className="text-muted-foreground">{c.counted} friends · {c.plus_granted_at ? 'Plus earned' : c.go_claimed_at ? 'Go earned' : 'no reward'}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center">
          A friend counts when they create a new Scorify account with Google through your link. Self-invites and existing accounts do not count.
        </p>
      </main>
    </div>
  );
}
