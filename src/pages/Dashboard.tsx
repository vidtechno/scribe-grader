import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';
import {
  ArrowRight, Award, BookOpen, BrainCircuit, ChevronRight, ClipboardList, Crown, Mic, PenLine, PenTool, Sparkles,
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { useActivityData } from '@/hooks/useDashboardData';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SubscriptionBadge } from '@/components/SubscriptionBadge';
import { PricingModal } from '@/components/PricingModal';
import { LearnHero } from '@/components/LearnHero';
import { UsageBar } from '@/components/PracticeCard';
import { SEOHead } from '@/components/SEOHead';
const GoalsCard = lazy(() => import('@/components/GoalsCard').then(m => ({ default: m.GoalsCard })));
import { ReferralBanner } from '@/components/ReferralBanner';

type Activity = { kind: 'essay' | 'speaking'; id: string; title: string; score: number | null; at: Date };

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
};

export default function Dashboard() {
  const { user, profile, refreshProfile } = useAuth();
  const { planType, planName, writingLimit, writingUsed, speakingLimit, speakingUsed, mockLimit, mockUsed, entitlement,
    expiresAt, daysRemaining, isExpired, refresh: refreshSub } = useSubscription();
  const navigate = useNavigate();
  const [showPricing, setShowPricing] = useState(false);
  const activityQ = useActivityData();
  const essays = useMemo(() => activityQ.data?.essays ?? [], [activityQ.data]);
  const speaking = useMemo(() => activityQ.data?.speaking ?? [], [activityQ.data]);
  const draftsCount = useMemo(() => essays.filter(x => x.status === 'draft').length + speaking.filter(x => x.status === 'draft').length, [essays, speaking]);
  const tip = useMemo(() => {
    const scored = essays.filter(x => x.status !== 'draft' && x.score !== null);
    if (scored.length < 2) return null;
    const [latest, previous] = [scored[0].score as number, scored[1].score as number];
    return latest > previous ? `Your latest essay improved from Band ${previous} to ${latest}. Keep building vocabulary variety.`
      : latest < previous ? `Your latest score (${latest}) dipped from ${previous}. Plan for a few minutes before writing; structure is key.`
      : `You are consistent at Band ${latest}. Try more complex sentence structures to break through.`;
  }, [essays]);

  useEffect(() => { void refreshProfile(); }, [refreshProfile]);

  // Live-refresh the plan when an admin (or the referral program) changes it.
  useEffect(() => {
    if (!profile?.user_id) return;
    const channel = supabase.channel('sub-live-' + profile.user_id)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'subscriptions', filter: `user_id=eq.${profile.user_id}` }, () => refreshSub())
      .subscribe();
    const onFocus = () => refreshSub();
    window.addEventListener('focus', onFocus);
    return () => { supabase.removeChannel(channel); window.removeEventListener('focus', onFocus); };
  }, [profile?.user_id, refreshSub]);

  const openWriting = (task: 1 | 2) => {
    if (writingLimit - writingUsed <= 0) { setShowPricing(true); return; }
    navigate(`/exam?task=${task}`);
  };
  const openSpeaking = () => {
    if (speakingLimit - speakingUsed <= 0) { setShowPricing(true); return; }
    navigate('/speaking');
  };

  const activity: Activity[] = useMemo(() => [
    ...essays.filter(x => x.status !== 'draft').map(x => ({ kind: 'essay' as const, id: x.id, title: x.topic, score: x.score, at: new Date(x.created_at) })),
    ...speaking.filter(x => x.status !== 'draft').map(x => ({ kind: 'speaking' as const, id: x.id, title: x.topic, score: x.score, at: new Date(x.created_at) })),
  ].sort((a, b) => +b.at - +a.at).slice(0, 6), [essays, speaking]);

  const meta = user?.user_metadata as { full_name?: string; name?: string } | undefined;
  const firstName = (profile?.full_name || meta?.full_name || meta?.name || user?.email?.split('@')[0] || 'there').split(' ')[0];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
      <SEOHead title="Dashboard" description="Continue your English course, practise IELTS Writing and Speaking and track your progress." path="/dashboard" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="flex flex-wrap items-end justify-between gap-3 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Welcome back, <span className="gradient-text">{firstName}</span></h1>
            <p className="text-muted-foreground text-sm sm:text-base">Keep your learning streak going: one lesson a day changes your English.</p>
          </div>
          <SubscriptionBadge planType={planType} planName={planName} size="md" />
        </motion.div>

        {/* English course: the main thing on this page */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mb-6">
          <LearnHero onUpgrade={() => setShowPricing(true)} />
        </motion.div>

        {/* IELTS practice: one step down, always one tap away */}
        <motion.section initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mb-6" aria-label="IELTS practice">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">IELTS practice</h2>
            <Link to="/practice" className="text-xs text-primary font-medium inline-flex items-center gap-1 hover:underline">All practice<ChevronRight className="h-3.5 w-3.5" /></Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: PenTool, title: 'Writing', left: writingLimit - writingUsed, onClick: () => openWriting(2) },
              { icon: Mic, title: 'Speaking', left: speakingLimit - speakingUsed, onClick: openSpeaking },
              { icon: ClipboardList, title: 'Mock Test', left: mockLimit - mockUsed, onClick: () => navigate('/mock-test') },
            ].map((t) => (
              <button key={t.title} type="button" onClick={t.onClick} className="group glass-card-hover p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center items-start gap-2 sm:gap-3 text-left">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><t.icon className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-sm">{t.title}</span>
                  <span className="block text-xs text-muted-foreground">{Math.max(0, t.left)} left</span>
                </span>
                <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>
        </motion.section>

        {/* 2. Goals and plan */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-6 items-start mb-6">
          <div className="min-w-0">
            <Suspense fallback={<div className="glass-card p-6 mb-7 h-[280px] animate-pulse" />}><GoalsCard /></Suspense>
            {tip && planType !== 'free' && (
              <div className="glass-card p-4 mb-6 border-l-4 border-l-primary flex items-start gap-3">
                <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{tip}</p>
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <section className="glass-card p-5" aria-label="Your plan">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">Your plan</p>
                  <p className="text-lg font-bold flex items-center gap-2"><Crown className="h-5 w-5 text-primary" />{planName}</p>
                  {expiresAt && <p className={`text-xs mt-0.5 ${isExpired ? 'text-destructive' : 'text-muted-foreground'}`}>{isExpired ? 'Expired' : `${daysRemaining} days left`}</p>}
                  {planType !== 'free' && <p className="text-xs text-muted-foreground">${entitlement.priceUsd}/month · {entitlement.priceUzs} so'm</p>}
                </div>
                <Button variant={planType === 'free' ? 'glow' : 'outline'} size="sm" onClick={() => setShowPricing(true)}>{planType === 'free' ? 'Upgrade' : 'Change'}</Button>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                {[['Writing', writingUsed, writingLimit], ['Speaking', speakingUsed, speakingLimit], ['Mock tests', mockUsed, mockLimit]].map(([label, used, limit]) => (
                  <div key={label as string}>
                    <div className="flex justify-between text-xs mb-1"><span className="font-medium">{label}</span><span className="text-muted-foreground">{used}/{limit}</span></div>
                    <UsageBar used={used as number} limit={limit as number} />
                  </div>
                ))}
              </div>
              {planType === 'free' && <p className="mt-4 text-xs text-primary bg-primary/5 border border-primary/20 rounded-lg p-3">Upgrade from $9/month: 20 Writing and 15 Speaking evaluations plus the full English course.</p>}
            </section>
            <ReferralBanner />
          </aside>
        </div>

        {/* 3. More practice */}
        <section className="mb-6" aria-label="Explore">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Explore</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { to: '/grammar-test', icon: BrainCircuit, title: 'Daily Grammar', text: 'A short test based on your recent mistakes' },
              { to: '/drafts', icon: PenLine, title: 'Drafts', text: draftsCount ? `${draftsCount} unfinished ${draftsCount === 1 ? 'item' : 'items'}` : 'No unfinished work' },
            ].map(i => (
              <Link key={i.to} to={i.to} className="group glass-card-hover p-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><i.icon className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold text-sm">{i.title}</span><span className="block text-xs text-muted-foreground truncate">{i.text}</span></span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
            {/* The blog is a separate (server-rendered) site section, so it is a plain link. */}
            <a href="/blog" className="group glass-card-hover p-4 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><BookOpen className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block font-semibold text-sm">Blog</span><span className="block text-xs text-muted-foreground truncate">IELTS tips, samples and study plans</span></span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </a>
          </div>
        </section>

        {/* 4. Recent activity */}
        <section className="glass-card p-5 sm:p-6" aria-label="Recent activity">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent activity</h2>
            <Link to="/leaderboard" className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1"><Award className="h-3.5 w-3.5" />Leaderboard</Link>
          </div>
          {activity.length ? (
            <ul className="divide-y divide-border/60">
              {activity.map(a => (
                <li key={`${a.kind}-${a.id}`}>
                  <Link to={a.kind === 'essay' ? `/result/${a.id}` : `/speaking-result/${a.id}`} className="flex items-center gap-3 py-3 hover:bg-secondary/30 -mx-2 px-2 rounded-lg transition-colors">
                    <span className={`w-9 h-9 rounded-lg grid place-items-center shrink-0 ${a.kind === 'essay' ? 'bg-primary/10 text-primary' : 'bg-accent/15 text-accent'}`}>
                      {a.kind === 'essay' ? <PenTool className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium truncate">{a.title || (a.kind === 'essay' ? 'Writing practice' : 'Speaking practice')}</span>
                      <span className="block text-xs text-muted-foreground" title={format(a.at, 'PPpp')}>{a.kind === 'essay' ? 'Writing' : 'Speaking'} · {formatDistanceToNow(a.at, { addSuffix: true })}</span>
                    </span>
                    <span className="text-sm font-bold text-primary shrink-0">{a.score != null ? `Band ${a.score}` : 'Pending'}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground py-6 text-center">Nothing yet. Your IELTS Writing and Speaking results will appear here.</p>
          )}
        </section>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}
