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
import { User as UserIcon, Mail, Calendar, Coins, FileText, Mic, Award, Target, Trophy, History, LogOut, Save, Edit2, MapPin, Phone, Sparkles, Crown, GraduationCap, Gift, BookOpen, LifeBuoy, Languages } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { LearningIdentity } from '@/features/social/LearningIdentity';
import { PeopleSection } from '@/features/social/PeopleSection';
import { ReferralCard } from '@/features/social/ReferralCard';
import { ProfileHeader, type PeopleTab } from '@/features/social/ProfileHeader';
import { ActiveDevicesCard } from '@/components/ActiveDevices';
import { TelegramConnectCard } from '@/components/TelegramConnectCard';
import { displayEmail } from '@/lib/telegram';
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';
import { useT } from '@/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function Profile() {
  const { t, lang } = useT();
  const dfl = lang === 'uz' ? { locale: uz } : undefined;
  const { user, profile, signOut, refreshProfile } = useAuth();
  const { planName, planType, trialActive, trialDaysLeft, entitlement, expiresAt, daysRemaining, isExpired, writingUsed, writingLimit, speakingUsed, speakingLimit, mockUsed, mockLimit } = useSubscription();
  const navigate = useNavigate();
  const { hash } = useLocation();
  const [peopleTab, setPeopleTab] = useState<PeopleTab>('discover');
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

  // /profile#people scrolls to the friends section once the page has rendered.
  useEffect(() => {
    if (hash !== '#people' && hash !== '#referral') return;
    const timer = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400);
    return () => clearTimeout(timer);
  }, [hash]);

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

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={t('profile.seoTitle')} description={t('profile.seoDesc')} path="/profile" noindex />
      <Navbar />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <ProfileHeader onOpenPeople={(tab) => { setPeopleTab(tab); document.getElementById('people')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }} />
        <PeopleSection tab={peopleTab} onTab={setPeopleTab} />
        <LearningIdentity />
        <ReferralCard />

        <Link to="/support" className="glass-card-hover p-4 mb-4 flex items-center gap-3"><span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><LifeBuoy className="h-5 w-5" /></span><span className="min-w-0 flex-1"><span className="block font-semibold text-sm">{t('profile.helpTitle')}</span><span className="block text-xs text-muted-foreground">{t('profile.helpText')}</span></span></Link>
        <div className="glass-card p-4 mb-4 flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><Languages className="h-5 w-5" /></span>
          <span className="min-w-0 flex-1"><span className="block font-semibold text-sm">{t('profile.langTitle')}</span><span className="block text-xs text-muted-foreground">{t('profile.langText')}</span></span>
          <LanguageSwitcher />
        </div>
        <ActiveDevicesCard />
        <TelegramConnectCard autoConnect={new URLSearchParams(window.location.search).get('connect') === 'telegram'} />

        {/* Plan usage + history */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="glass-card p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Crown className="h-5 w-5 text-primary" /> {planType === 'free' ? (trialActive ? t('profile.freeTrial', { n: trialDaysLeft }) : t('profile.freePlan')) : planName}
            </h2>
            <div className="flex items-center gap-3">
              {expiresAt && <span className={`text-xs ${isExpired ? 'text-destructive' : 'text-muted-foreground'}`}>{isExpired ? t('dash.expired') : t('dash.daysLeft', { n: daysRemaining })} · {format(expiresAt, 'MMM d, yyyy', dfl)}</span>}
              <Button variant="glow" size="sm" className="gap-1" onClick={() => setShowPricing(true)}>{planType === 'free' ? t('profile.choosePlan') : t('profile.changePlan')}</Button>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Writing', used: writingUsed, limit: writingLimit },
              { label: 'Speaking', used: speakingUsed, limit: speakingLimit },
              { label: t('profile.mockTests'), used: mockUsed, limit: mockLimit },
            ].map((u) => {
              const pct = u.limit > 0 ? (u.used / u.limit) * 100 : 0;
              return (
                <div key={u.label} className="glass-card-hover p-3">
                  <p className="text-xs text-muted-foreground mb-1">{u.label}</p>
                  <p className="text-sm font-semibold mb-1">{t('profile.usedOf', { used: u.used, limit: u.limit })}</p>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${Math.min(100, pct)}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <History className="h-4 w-4 text-primary" /> {t('profile.history')}
          </h3>
          {history.length === 0 ? (
            <p className="text-xs text-muted-foreground">{t('profile.noHistory')}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 text-xs text-muted-foreground font-medium">{t('profile.colPlan')}</th>
                    <th className="text-left py-2 px-2 text-xs text-muted-foreground font-medium">{t('profile.colStarted')}</th>
                    <th className="text-left py-2 px-2 text-xs text-muted-foreground font-medium">{t('profile.colEnds')}</th>
                    <th className="text-left py-2 px-2 text-xs text-muted-foreground font-medium hidden sm:table-cell">{t('profile.colPrice')}</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h: any) => (
                    <tr key={h.id} className="border-b border-border/50">
                      <td className="py-2 px-2 font-medium">{h.plan_name}</td>
                      <td className="py-2 px-2 text-muted-foreground text-xs">{format(new Date(h.started_at), 'MMM d, yyyy', dfl)}</td>
                      <td className="py-2 px-2 text-muted-foreground text-xs">{h.expires_at ? format(new Date(h.expires_at), 'MMM d, yyyy', dfl) : '—'}</td>
                      <td className="py-2 px-2 text-muted-foreground text-xs hidden sm:table-cell">{h.price_uzs ? t('profile.sum', { n: h.price_uzs }) : '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Edit info */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" /> {t('profile.personal')}
            </h2>
            {!editing ? (
              <Button variant="outline" size="sm" className="gap-2" onClick={() => setEditing(true)}>
                <Edit2 className="h-4 w-4" /> {t('profile.edit')}
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setEditing(false)} disabled={saving}>{t('profile.cancel')}</Button>
                <Button variant="glow" size="sm" className="gap-2" onClick={handleSave} disabled={saving}>
                  <Save className="h-4 w-4" /> {saving ? t('profile.saving') : t('profile.save')}
                </Button>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('profile.firstName')}</Label>
              <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!editing} placeholder="Diyorbek" />
            </div>
            <div className="space-y-2">
              <Label>{t('profile.lastName')}</Label>
              <Input value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!editing} placeholder="Anorboyev" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {t('profile.email')}</Label>
              <Input value={displayEmail(profile?.email) ?? t('profile.tgAccount')} disabled />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-6">
          <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> {t('profile.stats')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: FileText, label: t('profile.totalEssays'), value: stats.essays },
              { icon: Award, label: t('profile.avgWriting'), value: stats.avgEssay },
              { icon: Target, label: t('profile.bestWriting'), value: stats.bestEssay },
              { icon: Mic, label: t('profile.speakingAttempts'), value: stats.speaking },
              { icon: Award, label: t('profile.avgSpeaking'), value: stats.avgSpeaking },
              { icon: Target, label: t('profile.bestSpeaking'), value: stats.bestSpeaking },
            ].map((s) => (
              <div key={s.label} className="glass-card-hover p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{s.value === 'N/A' ? t('profile.na') : s.value}</p>
                    <p className="text-[11px] text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-3 mb-6">
          <Link to="/essays" className="glass-card-hover p-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">{t('profile.essayHistory')}</span>
          </Link>
          <Link to="/speaking-history" className="glass-card-hover p-4 flex items-center gap-3">
            <History className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">{t('profile.speakingHistory')}</span>
          </Link>
          <Link to="/leaderboard" className="glass-card-hover p-4 flex items-center gap-3">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">{t('dash.leaderboard')}</span>
          </Link>
          <Link to="/profile#referral" className="glass-card-hover p-4 flex items-center gap-3">
            <Gift className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">{t('profile.referralLink')}</span>
          </Link>
          <a href="/blog" className="glass-card-hover p-4 flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">{t('profile.blogLink')}</span>
          </a>
        </motion.div>

        <div className="flex justify-end">
          <Button variant="outline" className="gap-2 text-destructive border-destructive/30 hover:bg-destructive/10" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" /> {t('profile.signOut')}
          </Button>
        </div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}
