import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { User as UserIcon, Mail, FileText, Mic, Target, History, LogOut, Save, Edit2, Sparkles, Crown, LifeBuoy, Languages, Users, Settings, ChevronRight } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { LearningIdentity } from '@/features/social/LearningIdentity';
import { PeopleSection } from '@/features/social/PeopleSection';
import { ProfileHeader, type PeopleTab } from '@/features/social/ProfileHeader';
import { ActiveDevicesCard } from '@/components/ActiveDevices';
import { TelegramConnectCard } from '@/components/TelegramConnectCard';
import { displayEmail } from '@/lib/telegram';
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';
import { useT } from '@/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { toast } from 'sonner';

const TABS = ['overview', 'plan', 'people', 'settings'] as const;
type Tab = (typeof TABS)[number];

/** One titled block of the profile. */
function Block({ title, icon: Icon, action, children }: { title: string; icon: typeof Crown; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 text-base font-extrabold"><Icon className="h-5 w-5 text-primary" />{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

/**
 * The profile in four short tabs instead of one long page: Me (who I am and how I learn), Plan (what I have and what is left),
 * Friends, and Settings (name, language, Telegram, devices, help, sign out).
 */
export default function Profile() {
  const { t, lang } = useT();
  const dfl = lang === 'uz' ? { locale: uz } : undefined;
  const { user, profile, signOut, refreshProfile } = useAuth();
  const { planName, planType, trialActive, trialDaysLeft, entitlement, expiresAt, daysRemaining, isExpired, writingUsed, writingLimit, speakingUsed, speakingLimit, mockUsed, mockLimit } = useSubscription();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [peopleTab, setPeopleTab] = useState<PeopleTab>('discover');
  const wantsTelegram = new URLSearchParams(window.location.search).get('connect') === 'telegram';
  const [tab, setTab] = useState<Tab>(() => (TABS.includes(hash.slice(1) as Tab) ? hash.slice(1) as Tab : wantsTelegram ? 'settings' : 'overview'));
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [stats, setStats] = useState({
    essays: 0, speaking: 0, avgEssay: 'N/A' as string,
    bestEssay: 'N/A' as string | number, avgSpeaking: 'N/A' as string,
    bestSpeaking: 'N/A' as string | number,
  });

  // /profile#people (and the other tab names) open that tab.
  useEffect(() => {
    const next = hash.slice(1) as Tab;
    if (TABS.includes(next)) setTab(next);
  }, [hash]);
  const openTab = (next: Tab) => { setTab(next); window.history.replaceState(null, '', next === 'overview' ? window.location.pathname : `#${next}`); window.scrollTo({ top: 0 }); };

  useEffect(() => {
    if (!profile) return;
    const parts = (profile.full_name || '').trim().split(' ');
    setFirstName(parts[0] || '');
    setLastName(parts.slice(1).join(' ') || '');
  }, [profile]);

  useEffect(() => {
    (async () => {
      if (!user) return;
      const [{ data: essays }, { data: speaking }, { data: hist }] = await Promise.all([
        supabase.from('essays').select('score').eq('user_id', user.id),
        supabase.from('speaking_attempts').select('score').eq('user_id', user.id),
        (supabase.from('subscription_history' as any).select('*').eq('user_id', user.id).order('started_at', { ascending: false }).limit(20)),
      ]);
      setHistory((hist as any[]) || []);
      const eScored = (essays || []).filter((e: any) => e.score !== null);
      const sScored = (speaking || []).filter((s: any) => s.score !== null);
      setStats({
        essays: essays?.length || 0,
        speaking: speaking?.length || 0,
        avgEssay: eScored.length ? (eScored.reduce((a: number, e: any) => a + e.score, 0) / eScored.length).toFixed(1) : 'N/A',
        bestEssay: eScored.length ? Math.max(...eScored.map((e: any) => e.score)) : 'N/A',
        avgSpeaking: sScored.length ? (sScored.reduce((a: number, s: any) => a + s.score, 0) / sScored.length).toFixed(1) : 'N/A',
        bestSpeaking: sScored.length ? Math.max(...sScored.map((s: any) => s.score)) : 'N/A',
      });
    })();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    if (!firstName.trim()) { toast.error(t('profile.firstRequired')); return; }
    setSaving(true);
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const { error } = await supabase
      .from('profiles')
      .update({ full_name: fullName })
      .eq('user_id', user.id);
    setSaving(false);
    if (error) { toast.error(t('profile.saveFailed')); return; }
    toast.success(t('profile.updated'));
    setEditing(false);
    refreshProfile();
  };

  const handleSignOut = async () => { await signOut(); navigate('/auth'); };

  const initials = (profile?.full_name || profile?.email || 'U')
    .split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();

  const uzL = lang === 'uz';
  const tabs: { id: Tab; label: string; icon: typeof Crown }[] = [
    { id: 'overview', label: uzL ? 'Men' : 'Me', icon: UserIcon },
    { id: 'plan', label: uzL ? 'Tarif' : 'Plan', icon: Crown },
    { id: 'people', label: t('social.friends'), icon: Users },
    { id: 'settings', label: uzL ? 'Sozlamalar' : 'Settings', icon: Settings },
  ];
  const hasIelts = stats.essays > 0 || stats.speaking > 0;
  const usage = [
    { label: 'Writing', used: writingUsed, limit: writingLimit },
    { label: 'Speaking', used: speakingUsed, limit: speakingLimit },
    { label: t('profile.mockTests'), used: mockUsed, limit: mockLimit },
  ].filter((u) => u.limit > 0);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={t('profile.seoTitle')} description={t('profile.seoDesc')} path="/profile" noindex />
      <Navbar />

      <main className="profile-page mx-auto max-w-3xl px-4 pb-12 pt-20 sm:px-6 sm:pt-24">
        <nav aria-label={t('nav.profile')} role="tablist" className="sticky top-[4.25rem] z-20 mb-5 grid grid-cols-4 gap-1 rounded-2xl border border-border bg-card/95 p-1 shadow-sm backdrop-blur lg:top-[5rem]">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={tab === id} onClick={() => openTab(id)}
              className={`flex flex-col items-center gap-0.5 rounded-xl px-1 py-2 text-[11px] font-bold transition-colors sm:flex-row sm:justify-center sm:gap-2 sm:text-sm ${tab === id ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}>
              <Icon className="h-4 w-4" /><span className="truncate">{label}</span>
            </button>
          ))}
        </nav>

        {tab === 'overview' && (
          <div className="space-y-5">
            <ProfileHeader onOpenPeople={(next) => { setPeopleTab(next); openTab('people'); }} />
            <LearningIdentity />
            {hasIelts && (
              <Block title="IELTS" icon={Sparkles}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { to: '/essays', icon: FileText, label: 'Writing', count: stats.essays, best: stats.bestEssay },
                    { to: '/speaking-history', icon: Mic, label: 'Speaking', count: stats.speaking, best: stats.bestSpeaking },
                  ].map((s) => (
                    <Link key={s.to} to={s.to} className="rounded-2xl border border-border p-3.5 transition-colors hover:border-primary">
                      <span className="flex items-center gap-2 text-sm font-bold"><s.icon className="h-4 w-4 text-primary" />{s.label}</span>
                      <span className="mt-2 block text-2xl font-black leading-none">{s.best === 'N/A' ? '—' : s.best}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{uzL ? `Eng yaxshi ball · ${s.count} ta urinish` : `Best band · ${s.count} attempts`}</span>
                    </Link>
                  ))}
                </div>
              </Block>
            )}
          </div>
        )}

        {tab === 'plan' && (
          <div className="space-y-5">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff4058] via-primary to-[#ad001f] p-5 text-white shadow-xl shadow-primary/20">
              <span aria-hidden className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
              <p className="relative text-[11px] font-extrabold uppercase tracking-[.18em] text-white/80">{uzL ? 'Joriy tarif' : 'Current plan'}</p>
              <p className="relative mt-1 flex items-center gap-2 text-2xl font-black"><Crown className="h-6 w-6" />{planType === 'free' ? (trialActive ? t('profile.freeTrial', { n: trialDaysLeft }) : t('profile.freePlan')) : planName}</p>
              {expiresAt && <p className="relative mt-1 text-sm font-semibold text-white/85">{isExpired ? t('dash.expired') : t('dash.daysLeft', { n: daysRemaining })} · {format(expiresAt, 'MMM d, yyyy', dfl)}</p>}
              <Button className="relative mt-4 w-full bg-white font-bold text-primary hover:bg-white/90 sm:w-auto" onClick={() => setShowPricing(true)}>{planType === 'free' ? t('profile.choosePlan') : t('profile.changePlan')}</Button>
            </section>
            {usage.length > 0 && (
              <Block title={uzL ? 'Bu oyda ishlatilgan' : 'Used this month'} icon={Target}>
                <div className="space-y-3">
                  {usage.map((u) => (
                    <div key={u.label}>
                      <p className="mb-1 flex justify-between text-sm"><span className="font-semibold">{u.label}</span><span className="text-muted-foreground">{u.used} / {u.limit}</span></p>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, (u.used / u.limit) * 100)}%` }} /></div>
                    </div>
                  ))}
                </div>
              </Block>
            )}
            {history.length > 0 && (
              <details className="rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-extrabold"><span className="flex items-center gap-2"><History className="h-5 w-5 text-primary" />{t('profile.history')}</span><span className="text-xs font-semibold text-muted-foreground">{history.length}</span></summary>
                <ul className="mt-3 divide-y divide-border/60">
                  {history.map((h: any) => (
                    <li key={h.id} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                      <span className="font-semibold">{h.plan_name}</span>
                      <span className="text-right text-xs text-muted-foreground">{format(new Date(h.started_at), 'MMM d, yyyy', dfl)}{h.expires_at ? ` – ${format(new Date(h.expires_at), 'MMM d, yyyy', dfl)}` : ''}{h.price_uzs ? ` · ${t('profile.sum', { n: h.price_uzs })}` : ''}</span>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </div>
        )}

        {tab === 'people' && <div id="people"><PeopleSection tab={peopleTab} onTab={setPeopleTab} /></div>}

        {tab === 'settings' && (
          <div className="space-y-5">
            <Block title={t('profile.personal')} icon={UserIcon}
              action={!editing
                ? <Button variant="outline" size="sm" className="gap-2" onClick={() => setEditing(true)}><Edit2 className="h-4 w-4" />{t('profile.edit')}</Button>
                : <div className="flex gap-2"><Button variant="ghost" size="sm" onClick={() => setEditing(false)} disabled={saving}>{t('profile.cancel')}</Button><Button variant="glow" size="sm" className="gap-2" onClick={handleSave} disabled={saving}><Save className="h-4 w-4" />{saving ? t('profile.saving') : t('profile.save')}</Button></div>}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label>{t('profile.firstName')}</Label><Input value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!editing} /></div>
                <div className="space-y-2"><Label>{t('profile.lastName')}</Label><Input value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!editing} /></div>
                <div className="space-y-2 sm:col-span-2"><Label className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" />{t('profile.email')}</Label><Input value={displayEmail(profile?.email) ?? t('profile.tgAccount')} disabled /></div>
              </div>
            </Block>
            <section className="divide-y divide-border/60 rounded-3xl border border-border bg-card shadow-sm">
              <div className="flex items-center gap-3 p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Languages className="h-5 w-5" /></span><span className="min-w-0 flex-1 text-sm font-semibold">{t('profile.langTitle')}</span><LanguageSwitcher /></div>
              <Link to="/support" className="flex items-center gap-3 p-4 hover:bg-secondary/40"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><LifeBuoy className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block text-sm font-semibold">{t('profile.helpTitle')}</span><span className="block text-xs text-muted-foreground">{t('profile.helpText')}</span></span><ChevronRight className="h-4 w-4 text-muted-foreground" /></Link>
            </section>
            <TelegramConnectCard autoConnect={wantsTelegram} />
            <ActiveDevicesCard />
            <Button variant="outline" className="w-full gap-2 border-destructive/30 text-destructive hover:bg-destructive/10" onClick={handleSignOut}><LogOut className="h-4 w-4" />{t('profile.signOut')}</Button>
          </div>
        )}
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}
