import { useEffect, useMemo, useState, type ComponentType } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BrainCircuit, ClipboardCheck, FileText, Headphones, History, Mic, PenLine, PenTool, PlayCircle, Timer, Trophy } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { useActivityData } from '@/hooks/useDashboardData';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { useT } from '@/i18n';

const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }) };
type SkillCardProps = { icon: ComponentType<{ className?: string }>; title: string; text: string; meta: string; action: string; onClick?: () => void; to?: string; history?: { to: string; label: string }; tone: string; iconTone: string };

function SkillCard({ icon: Icon, title, text, meta, action, onClick, to, history, tone, iconTone }: SkillCardProps) {
  const content = <><div className="flex items-start justify-between gap-3"><span className={`grid h-12 w-12 place-items-center rounded-2xl shadow-sm ${iconTone}`}><Icon className="h-6 w-6" /></span><span className="rounded-full border border-background/70 bg-background/75 px-2.5 py-1 text-[11px] font-semibold text-muted-foreground backdrop-blur">{meta}</span></div><h2 className="mt-5 text-xl font-extrabold">{title}</h2><p className="mt-1 min-h-14 text-sm leading-5 text-muted-foreground">{text}</p><span className="mt-4 inline-flex items-center gap-2 font-bold text-primary">{action}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></>;
  return <article className={`group relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${tone}`}>{to ? <Link to={to} className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{content}</Link> : <button type="button" onClick={onClick} className="block w-full rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">{content}</button>}{history ? <Link to={history.to} className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary"><History className="h-3.5 w-3.5" />{history.label}</Link> : null}</article>;
}

export default function Practice() {
  const { t, lang } = useT();
  const navigate = useNavigate();
  const { planType, writingLimit, writingUsed, speakingLimit, speakingUsed, mockLimit, mockUsed, refresh: refreshSub } = useSubscription();
  const [showPricing, setShowPricing] = useState(false);
  const activityQ = useActivityData();
  const essays = useMemo(() => activityQ.data?.essays ?? [], [activityQ.data]);
  const speaking = useMemo(() => activityQ.data?.speaking ?? [], [activityQ.data]);
  const draftsCount = useMemo(() => essays.filter((x) => x.status === 'draft').length + speaking.filter((x) => x.status === 'draft').length, [essays, speaking]);
  useEffect(() => { const onFocus = () => refreshSub(); window.addEventListener('focus', onFocus); return () => window.removeEventListener('focus', onFocus); }, [refreshSub]);
  const openWriting = () => writingLimit - writingUsed <= 0 ? setShowPricing(true) : navigate('/exam?task=2');
  const openSpeaking = () => speakingLimit - speakingUsed <= 0 ? setShowPricing(true) : navigate('/speaking');
  const start = lang === 'uz' ? 'Boshlash' : 'Start practice';
  const tests = lang === 'uz' ? 'To‘liq testlar' : 'Full tests';

  return <div className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
    <SEOHead title={t('practice.seoTitle')} description={t('practice.seoDesc')} path="/practice" noindex /><Navbar />
    <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.header initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-7 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/[0.10] via-card to-orange-500/[0.07] p-6 sm:p-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('practice.eyebrow')}</p><h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">{t('practice.h1')}</h1><p className="mt-2 text-sm sm:text-base text-muted-foreground">{t('practice.sub')}</p></div><Link to="/mock-test"><Button size="lg" variant="glow" className="w-full gap-2 font-bold md:w-auto"><PlayCircle className="h-5 w-5" />{t('nav.mock')}</Button></Link></div>
      </motion.header>
      <motion.section initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mb-7" aria-label={t('practice.aria')}>
        <div className="mb-4 flex items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-wider text-primary">IELTS</p><h2 className="text-2xl font-extrabold">{lang === 'uz' ? 'Ko‘nikmani tanlang' : 'Choose a skill'}</h2></div><span className="hidden text-sm text-muted-foreground sm:block">{lang === 'uz' ? 'Har biri alohida mashq qilinadi' : 'Practise each skill separately'}</span></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><SkillCard icon={PenTool} title={t('practice.writing.title')} text={t('practice.writing.text')} meta={`${Math.max(0, writingLimit - writingUsed)} ${lang === 'uz' ? 'qoldi' : 'left'}`} action={start} onClick={openWriting} history={{ to: '/essays', label: t('practice.writing.history') }} tone="from-rose-500/10 via-card to-card" iconTone="bg-gradient-to-br from-rose-500 to-red-600 text-white" /><SkillCard icon={Mic} title={t('practice.speaking.title')} text={t('practice.speaking.text')} meta={`${Math.max(0, speakingLimit - speakingUsed)} ${lang === 'uz' ? 'qoldi' : 'left'}`} action={start} onClick={openSpeaking} history={{ to: '/speaking-history', label: t('practice.speaking.history') }} tone="from-orange-400/10 via-card to-card" iconTone="bg-gradient-to-br from-orange-400 to-red-500 text-white" /><SkillCard icon={BookOpen} title={t('practice.reading.title')} text={t('practice.reading.text')} meta={tests} action={start} to="/reading" tone="from-violet-500/10 via-card to-card" iconTone="bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white" /><SkillCard icon={Headphones} title={t('practice.listening.title')} text={t('practice.listening.text')} meta={tests} action={start} to="/listening" tone="from-sky-500/10 via-card to-card" iconTone="bg-gradient-to-br from-sky-500 to-blue-600 text-white" /></div>
      </motion.section>
      <motion.section initial="hidden" animate="visible" variants={fadeUp} custom={2} className="mb-7 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
        <Link to="/mock-test" className="group rounded-3xl bg-gradient-to-br from-red-700 via-primary to-orange-500 p-6 text-white shadow-xl shadow-primary/15 transition-transform hover:-translate-y-0.5 sm:p-7"><div className="flex h-full flex-col gap-5 sm:flex-row sm:items-center"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20"><ClipboardCheck className="h-7 w-7" /></span><span className="min-w-0 flex-1"><span className="block text-xs font-bold uppercase tracking-wider text-white/70">{lang === 'uz' ? 'Imtihon simulyatsiyasi' : 'Exam simulation'}</span><span className="mt-1 block text-2xl font-extrabold">{t('nav.mock')}</span><span className="mt-1 block text-sm text-white/80">{t('practice.mock.text', { n: Math.max(0, mockLimit - mockUsed) })}</span></span><span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 font-bold text-primary">{start}<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span></div></Link>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1"><Link to="/grammar-test" className="rounded-2xl border bg-card p-4 hover:border-primary"><BrainCircuit className="h-5 w-5 text-primary" /><p className="mt-2 font-bold">{t('nav.grammar')}</p><p className="text-xs text-muted-foreground">{t('practice.grammar.text')}</p></Link><Link to="/drafts" className="rounded-2xl border bg-card p-4 hover:border-primary"><PenLine className="h-5 w-5 text-primary" /><p className="mt-2 font-bold">{t('practice.drafts.title')}</p><p className="text-xs text-muted-foreground">{draftsCount ? t(draftsCount === 1 ? 'practice.drafts.one' : 'practice.drafts.many', { n: draftsCount }) : t('practice.drafts.none')}</p></Link></div>
      </motion.section>
      <div className="grid gap-3 sm:grid-cols-3"><Link to="/reading" className="flex items-center gap-3 rounded-2xl border bg-card p-4 hover:border-primary"><FileText className="h-5 w-5 text-primary" /><span><b className="block text-sm">{lang === 'uz' ? 'Reading testlari' : 'Reading tests'}</b><small className="text-muted-foreground">Academic IELTS</small></span></Link><Link to="/leaderboard" className="flex items-center gap-3 rounded-2xl border bg-card p-4 hover:border-primary"><Trophy className="h-5 w-5 text-amber-500" /><span><b className="block text-sm">{t('dash.leaderboard')}</b><small className="text-muted-foreground">XP & streak</small></span></Link><Link to="/learn" className="flex items-center gap-3 rounded-2xl border bg-card p-4 hover:border-primary"><Timer className="h-5 w-5 text-primary" /><span><b className="block text-sm">{t('nav.learn')}</b><small className="text-muted-foreground">{lang === 'uz' ? 'Har kunlik dars' : 'Daily lesson'}</small></span></Link></div>
    </main><PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
  </div>;
}
