import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Copy, ExternalLink, Flame, Loader2, MessageCircle, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { adminRpc, daysUntil, LEVEL_LABEL, PLAN_LABEL, som, statusOf, type AdminUser } from './adminApi';

interface Detail {
  learning: { level: string; xp: number; streak_current: number; streak_best: number; daily_goal_xp: number; placement_status: string; next_lesson_title: string | null } | null;
  lessons_done: number;
  recent_lessons: { lesson_id: string; best_score: number; total: number; stars: number; completed_at: string }[];
  level_tests: { level_id: string; attempts: number; best_score: number; best_total: number; passed_at: string | null }[];
  activity: { day: string; xp: number; lessons: number }[];
  history: { plan_type: string; plan_name: string | null; price_uzs: string | null; started_at: string; expires_at: string | null }[];
  referral: { invited: number; bought: number; balance: number; paid: number; referred_by: string | null };
  subscription: { writing_used: number; writing_limit: number; speaking_used: number; speaking_limit: number; mock_test_used: number; mock_test_limit: number; expires_at: string | null; learn_trial_ends_at: string | null } | null;
}

const STATUS_STYLE = { paid: 'bg-emerald-500/15 text-emerald-600', trial: 'bg-amber-500/15 text-amber-600', expired: 'bg-destructive/15 text-destructive', free: 'bg-secondary text-muted-foreground' } as const;
const STATUS_TEXT = { paid: 'Pullik', trial: 'Bepul hafta', expired: "Muddati o'tgan", free: 'Free' } as const;

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return <div className="flex justify-between gap-3 text-sm py-1.5 border-b border-border/40 last:border-0"><span className="text-muted-foreground">{k}</span><span className="font-medium text-right">{v}</span></div>;
}

export function UserSheet({ user, onClose, onChanged }: { user: AdminUser | null; onClose: () => void; onChanged: () => void }) {
  const qc = useQueryClient();
  const [busy, setBusy] = useState(false);
  const { data: d, isLoading } = useQuery({
    queryKey: ['admin', 'user', user?.user_id], enabled: !!user,
    queryFn: () => adminRpc<Detail>('admin_user_detail', { _user: user!.user_id }),
  });
  if (!user) return null;
  const status = statusOf(user);

  const run = async (label: string, fn: () => Promise<unknown>) => {
    setBusy(true);
    try { await fn(); toast.success(label); await qc.invalidateQueries({ queryKey: ['admin'] }); onChanged(); }
    catch (e) { toast.error((e as Error).message || 'Xatolik'); }
    finally { setBusy(false); }
  };
  const setPlan = (slug: string, days: number) => {
    const name = slug === 'free' ? 'Free' : `${PLAN_LABEL[slug]} · ${days === 180 ? '6 oy' : '30 kun'}`;
    if (!window.confirm(`${user.full_name || user.email}: ${name} o'rnatilsinmi?`)) return;
    void run(`${name} o'rnatildi`, async () => {
      const { error } = await (supabase.rpc as unknown as (f: string, a: object) => Promise<{ error: { message: string } | null }>)('admin_set_subscription', {
        _user_id: user.user_id, _plan_slug: slug,
        ...(slug !== 'free' ? { _starts_at: new Date().toISOString(), _expires_at: new Date(Date.now() + days * 86_400_000).toISOString() } : {}),
      });
      if (error) throw new Error(error.message);
    });
  };
  const extend = (days: number) => {
    if (!window.confirm(`Tarif ${days} kunga uzaytirilsinmi (limitlar yangilanadi)?`)) return;
    void run(`${days} kunga uzaytirildi`, async () => {
      const { error } = await (supabase.rpc as unknown as (f: string, a: object) => Promise<{ error: { message: string } | null }>)('admin_extend_subscription', { _user_id: user.user_id, _days: days });
      if (error) throw new Error(error.message);
    });
  };
  const copy = (text: string) => { void navigator.clipboard?.writeText(text); toast.success('Nusxalandi'); };
  const sub = d?.subscription;
  const left = daysUntil(user.expires_at);
  const trialLeft = daysUntil(user.trial_ends_at);
  const profileHref = user.username ? `/u/${user.username}` : user.public_id ? `/u/${user.public_id}` : null;

  return (
    <Sheet open onOpenChange={(o) => { if (!o) onClose(); }}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle className="flex items-center gap-2 flex-wrap">
            {user.full_name || 'Ismsiz'}
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLE[status]}`}>{STATUS_TEXT[status]}</span>
            {user.is_admin && <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">Admin</span>}
          </SheetTitle>
          <p className="text-xs text-muted-foreground break-all">{user.email}{user.username ? ` · @${user.username}` : ''}{user.public_id ? ` · ID #${user.public_id}` : ''}</p>
        </SheetHeader>

        <div className="flex flex-wrap gap-2 mt-4">
          {user.public_id && <Button size="sm" variant="outline" className="gap-1.5" onClick={() => copy(user.public_id!)}><Copy className="h-3.5 w-3.5" />ID</Button>}
          {profileHref && <Link to={profileHref}><Button size="sm" variant="outline" className="gap-1.5"><ExternalLink className="h-3.5 w-3.5" />Profil</Button></Link>}
          {user.telegram_username && <a href={`https://t.me/${user.telegram_username}`} target="_blank" rel="noopener noreferrer"><Button size="sm" variant="outline" className="gap-1.5"><MessageCircle className="h-3.5 w-3.5" />Telegram</Button></a>}
        </div>

        <section className="mt-5">
          <h3 className="text-sm font-bold mb-1">Tarif</h3>
          <Row k="Joriy tarif" v={`${PLAN_LABEL[user.plan_type ?? 'free'] ?? user.plan_type}${user.expires_at ? ` · ${format(new Date(user.expires_at), 'd MMM yyyy')} gacha${left !== null ? ` (${left > 0 ? `${left} kun` : "tugagan"})` : ''}` : ''}`} />
          {status === 'trial' && <Row k="Bepul hafta" v={`${trialLeft} kun qoldi`} />}
          {sub && <Row k="Writing / Speaking / Mock" v={`${sub.writing_used}/${sub.writing_limit} · ${sub.speaking_used}/${sub.speaking_limit} · ${sub.mock_test_used}/${sub.mock_test_limit}`} />}
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Button size="sm" variant="outline" disabled={busy} onClick={() => setPlan('go', 30)}>Learn · 30 kun</Button>
            <Button size="sm" variant="outline" disabled={busy} onClick={() => setPlan('go', 180)}>Learn · 6 oy</Button>
            <Button size="sm" variant="outline" disabled={busy} onClick={() => setPlan('plus', 30)}>IELTS · 30 kun</Button>
            <Button size="sm" variant="outline" disabled={busy} onClick={() => setPlan('plus', 180)}>IELTS · 6 oy</Button>
            <Button size="sm" variant="secondary" disabled={busy || status !== 'paid'} onClick={() => extend(30)}>+30 kun uzaytirish</Button>
            <Button size="sm" variant="ghost" className="text-destructive" disabled={busy || user.plan_type === 'free'} onClick={() => setPlan('free', 0)}>Free'ga qaytarish</Button>
          </div>
          {busy && <Loader2 className="h-4 w-4 animate-spin mt-2 text-primary" />}
        </section>

        <section className="mt-6">
          <h3 className="text-sm font-bold mb-1">O'qish</h3>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin text-primary" /> : !d?.learning ? <p className="text-sm text-muted-foreground">Hali kursni boshlamagan.</p> : (
            <>
              <Row k="Daraja" v={LEVEL_LABEL[d.learning.level] ?? d.learning.level} />
              <Row k="XP / Streak" v={<span className="inline-flex items-center gap-2"><span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-amber-500" />{d.learning.xp}</span><span className="inline-flex items-center gap-1"><Flame className="h-3.5 w-3.5 text-orange-500" />{d.learning.streak_current} (eng yaxshi {d.learning.streak_best})</span></span>} />
              <Row k="Tugatilgan darslar" v={d.lessons_done} />
              {d.learning.next_lesson_title && <Row k="Keyingi dars" v={d.learning.next_lesson_title} />}
              {d.level_tests.length > 0 && <Row k="Daraja testlari" v={d.level_tests.map(t => `${LEVEL_LABEL[t.level_id] ?? t.level_id}: ${t.best_score}/${t.best_total}${t.passed_at ? ' ✓' : ''}`).join(' · ')} />}
              {d.activity.length > 0 && (
                <div className="flex items-end gap-1 h-12 mt-3" title="Oxirgi 14 kun: kunlik XP">
                  {d.activity.map(a => <div key={a.day} className="flex-1 bg-primary/70 rounded-sm min-h-[3px]" style={{ height: `${Math.min(100, Math.max(8, a.xp))}%` }} title={`${a.day}: ${a.xp} XP`} />)}
                </div>
              )}
              {d.recent_lessons.length > 0 && (
                <p className="text-xs text-muted-foreground mt-3">Oxirgi darslar: {d.recent_lessons.map(l => `${l.lesson_id} (${l.best_score}/${l.total})`).join(', ')}</p>
              )}
            </>
          )}
        </section>

        <section className="mt-6">
          <h3 className="text-sm font-bold mb-1">Referal</h3>
          {d && <>
            <Row k="Taklif qilgan / tarif olgan" v={`${d.referral.invited} / ${d.referral.bought}`} />
            <Row k="Balans / to'langan" v={`${som(d.referral.balance)} / ${som(d.referral.paid)}`} />
            {d.referral.referred_by && <Row k="Kim taklif qilgan" v={d.referral.referred_by} />}
          </>}
        </section>

        <section className="mt-6">
          <h3 className="text-sm font-bold mb-1">IELTS</h3>
          <Row k="Writing / Speaking / Mock" v={`${user.essays} / ${user.speaking} / ${user.mocks}`} />
        </section>

        {d && d.history.length > 0 && (
          <section className="mt-6">
            <h3 className="text-sm font-bold mb-1">Tarif tarixi</h3>
            {d.history.map((h, i) => <Row key={i} k={`${PLAN_LABEL[h.plan_type] ?? h.plan_type} · ${format(new Date(h.started_at), 'd MMM yyyy')}`} v={h.expires_at ? `${format(new Date(h.expires_at), 'd MMM yyyy')} gacha` : '—'} />)}
          </section>
        )}

        <section className="mt-6 mb-4">
          <h3 className="text-sm font-bold mb-1">Hisob</h3>
          <Row k="Ro'yxatdan o'tgan" v={format(new Date(user.created_at), 'd MMM yyyy')} />
          <Row k="Kirish usuli" v={user.provider} />
          {user.telegram_id && <Row k="Telegram" v={`${user.telegram_username ? `@${user.telegram_username}` : user.telegram_id}${user.telegram_banned ? ' · ban' : ''}`} />}
          {user.phone && <Row k="Telefon" v={user.phone} />}
          {user.city && <Row k="Shahar" v={user.city} />}
        </section>
      </SheetContent>
    </Sheet>
  );
}
