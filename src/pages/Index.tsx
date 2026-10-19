import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { PlanCards } from '@/components/PlanCards';
import { SEOHead } from '@/components/SEOHead';
import { HeroSpeakingDemo } from '@/components/HeroSpeakingDemo';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { loadActivePlans } from '@/lib/cached-plans';
import { BEGINNER_UNITS, A1_UNITS, A2_UNITS, B1_UNITS } from '@/features/learn/course';
import { motion } from 'framer-motion';
import {
  BookOpen, Check, CheckCircle, ChevronRight, Flame, Gift, GraduationCap, Headphones, Mic, PenLine, Repeat, Send, Sparkles, Trophy, Volume2, Zap,
  ClipboardCheck, Clock, Target, Languages, MessagesSquare,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/** Mobile-only call to action that appears once a visitor has scrolled past the hero. */
function StickyCta() {
  const { t } = useT();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-background/95 backdrop-blur border-t border-border safe-area-bottom">
      <Link to="/auth"><Button variant="glow" size="lg" className="w-full gap-2">{t('landing.cta.start')} <ChevronRight className="h-5 w-5" /></Button></Link>
    </div>
  );
}

const FAQ_COUNT = 9;

export default function Index() {
  const { user } = useAuth();
  const { t, lang } = useT();
  const [subPlans, setSubPlans] = useState<Tables<'subscription_plans'>[]>([]);

  useEffect(() => {
    void loadActivePlans<Tables<'subscription_plans'>>().then(setSubPlans);
  }, []);

  const counts = useMemo(() => ({
    beginnerUnits: BEGINNER_UNITS.length,
    beginnerLessons: BEGINNER_UNITS.reduce((n, u) => n + u.lessons.length, 0),
    a1Units: A1_UNITS.length,
    a1Lessons: A1_UNITS.reduce((n, u) => n + u.lessons.length, 0),
    a2Units: A2_UNITS.length,
    a2Lessons: A2_UNITS.reduce((n, u) => n + u.lessons.length, 0),
    b1Units: B1_UNITS.length,
    b1Lessons: B1_UNITS.reduce((n, u) => n + u.lessons.length, 0),
  }), []);

  const steps = [
    { icon: BookOpen, k: 'explain' },
    { icon: Headphones, k: 'listen' },
    { icon: PenLine, k: 'practice' },
    { icon: Trophy, k: 'test' },
  ].map(x => ({ icon: x.icon, title: t(`landing.step.${x.k}.title`), text: t(`landing.step.${x.k}.text`) }));

  const features = [
    { icon: Volume2, k: 'pron' },
    { icon: Repeat, k: 'srs' },
    { icon: Flame, k: 'streak' },
    { icon: Languages, k: 'vocab' },
    { icon: Trophy, k: 'rank' },
    { icon: Target, k: 'placement' },
    { icon: Zap, k: 'games' },
    { icon: MessagesSquare, k: 'dialogues' },
    { icon: Send, k: 'telegram' },
  ].map(x => ({ icon: x.icon, title: t(`landing.feat.${x.k}.title`), text: t(`landing.feat.${x.k}.text`) }));

  const levels = [
    { title: 'Beginner', tag: t('landing.level.zero'), k: 'beginner', exam: true, units: counts.beginnerUnits, lessons: counts.beginnerLessons, tone: 'from-rose-500 to-orange-400' },
    { title: 'Elementary', tag: 'A1', k: 'a1', exam: true, units: counts.a1Units, lessons: counts.a1Lessons, tone: 'from-indigo-500 to-blue-400' },
    { title: 'Pre-Intermediate', tag: 'A2', k: 'a2', exam: true, units: counts.a2Units, lessons: counts.a2Lessons, tone: 'from-emerald-500 to-teal-400' },
    { title: 'Intermediate', tag: 'B1', k: 'b1', exam: true, units: counts.b1Units, lessons: counts.b1Lessons, tone: 'from-violet-500 to-purple-400' },
  ].map(l => ({ ...l, text: t(`landing.level.${l.k}.text`) }));

  const faq = Array.from({ length: FAQ_COUNT }, (_, i) => ({ q: t(`landing.faq.${i + 1}.q`), a: t(`landing.faq.${i + 1}.a`) }));
  const base = lang === 'uz' ? '/uz' : '/';

  const landingJsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Scorify.uz', url: `https://www.scorify.uz${base}`,
      applicationCategory: 'EducationalApplication', operatingSystem: 'Web', inLanguage: lang,
      description: t('landing.ld.desc'),
      featureList: [1, 2, 3, 4, 5, 6, 7].map(i => t(`landing.ld.feat.${i}`)),
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'UZS', description: t('landing.ld.offer') },
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title={t('landing.seo.title')}
        exactTitle
        description={t('landing.seo.desc')}
        path={base}
        alternates={{ en: '/', uz: '/uz' }}
        jsonLd={landingJsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.24, 0.12] }} transition={{ duration: 9, repeat: Infinity }} className="absolute -top-32 -right-24 w-[34rem] h-[34rem] bg-primary rounded-full blur-3xl" />
          <motion.div animate={{ scale: [1.15, 1, 1.15], opacity: [0.1, 0.18, 0.1] }} transition={{ duration: 11, repeat: Infinity }} className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] bg-orange-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide mb-7">
              <GraduationCap className="h-4 w-4" /> {t('landing.hero.badge')}
            </motion.div>

            <motion.h1 initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              {t('landing.hero.h1a')} <span className="gradient-text">{t('landing.hero.h1b')}</span>
            </motion.h1>

            <motion.p initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
              {t('landing.hero.sub')}
            </motion.p>

            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {user ? (
                <Link to="/learn"><Button variant="glow" size="xl" className="gap-2">{t('landing.hero.continue')} <ChevronRight className="h-5 w-5" /></Button></Link>
              ) : (
                <>
                  <Link to="/auth"><Button variant="glow" size="xl" className="gap-2 group">{t('landing.cta.start')}<ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></Button></Link>
                  <a href="#course"><Button variant="glass" size="xl">{t('landing.hero.viewCourse')}</Button></a>
                </>
              )}
            </motion.div>

            {!user && (
              <p className="mt-4 text-sm text-muted-foreground flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1">
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" />{t('landing.hero.noCard')}</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" />{t('landing.hero.telegram')}</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" />{t('landing.hero.anyLevel')}</span>
              </p>
            )}

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="grid grid-cols-3 gap-3 mt-10">
              {[
                { icon: Clock, value: t('landing.stat.time.v'), label: t('landing.stat.time.l') },
                { icon: Volume2, value: t('landing.stat.pron.v'), label: t('landing.stat.pron.l') },
                { icon: Flame, value: t('landing.stat.streak.v'), label: t('landing.stat.streak.l') },
              ].map(s => (
                <div key={s.value} className="p-3 sm:p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 text-left">
                  <s.icon className="h-5 w-5 mb-2 text-primary" />
                  <div className="font-bold text-primary text-sm sm:text-base">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Lesson preview */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.6 }} className="relative mx-auto w-full max-w-md">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <div className="relative z-20 bg-card rounded-3xl shadow-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 grid place-items-center"><BookOpen className="h-4 w-4 text-white" /></div>
                    <div><p className="text-sm font-semibold">{t('landing.preview.lesson')}</p><p className="text-[11px] text-muted-foreground">Elementary · A1</p></div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 flex items-center gap-1"><Flame className="h-3 w-3" />{t('landing.preview.streak')}</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-5">
                  <motion.div initial={{ width: 0 }} animate={{ width: '68%' }} transition={{ delay: 0.6, duration: 1.1 }} className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">{t('landing.preview.pick')}</p>
                <p className="text-lg font-semibold mb-3 flex items-center gap-2">We don't have ___ butter. <span className="w-7 h-7 rounded-full bg-primary/10 grid place-items-center"><Volume2 className="h-3.5 w-3.5 text-primary" /></span></p>
                <div className="grid grid-cols-2 gap-2">
                  {['many', 'much', 'a', 'a lot'].map((o, i) => (
                    <div key={o} className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium flex items-center gap-2 ${o === 'much' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-border'}`}>
                      <span className="w-5 h-5 rounded border border-current/30 grid place-items-center text-[11px] opacity-70">{i + 1}</span>{o}
                      {o === 'much' && <Check className="h-4 w-4 ml-auto" />}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-2"><b>butter</b> {t('landing.preview.hint')} <b>much</b>.</p>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 right-0 sm:-right-6 z-30 bg-card p-3 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500 grid place-items-center"><Zap className="h-5 w-5 text-white" /></div>
                  <div><div className="text-xs font-bold">+30 XP</div><div className="text-[10px] text-muted-foreground">{t('landing.preview.done')}</div></div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-12 left-0 sm:-left-8 z-30 bg-card p-3 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center"><Mic className="h-4 w-4 text-primary" /></div>
                  <div><div className="text-xs font-bold">{t('landing.preview.pronTitle')}</div><div className="text-[10px] text-muted-foreground">{t('landing.preview.pronSub')}</div></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How a lesson works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">{t('landing.how.h2a')} <span className="gradient-text">{t('landing.how.h2b')}</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">{t('landing.how.sub')}</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="glass-card-hover p-6 relative">
                <span className="absolute top-4 right-4 text-4xl font-black text-primary/10">{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center mb-4"><s.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course levels */}
      <section id="course" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">{t('landing.course.h2a')} <span className="gradient-text">{t('landing.course.h2b')}</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">{t('landing.course.sub')}</motion.p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {levels.map(l => (
              <div key={l.title} className={`rounded-3xl p-6 text-white bg-gradient-to-br ${l.tone} shadow-lg`}>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-90">{l.tag}</p>
                <h3 className="text-2xl font-extrabold mb-2">{l.title}</h3>
                <p className="text-sm opacity-95 mb-4">{l.text}</p>
                <div className="flex gap-4 text-sm font-semibold"><span>{t('landing.level.units', { n: l.units })}</span><span>{t('landing.level.lessons', { n: l.lessons })}</span><span className="flex items-center gap-1"><ClipboardCheck className="h-4 w-4" />{l.exam ? t('landing.level.exam') : t('landing.level.unitTests')}</span></div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">{t('landing.course.soon')} <a className="text-primary underline underline-offset-2" href="/ingliz-tili-darslari">{t('landing.course.all')}</a></p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">{t('landing.feat.h2a')} <span className="gradient-text">{t('landing.feat.h2b')}</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">{t('landing.feat.sub')}</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} whileHover={{ y: -4 }} className="glass-card-hover p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-4"><f.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 max-w-3xl mx-auto glass-card p-5 flex items-start gap-3 border-l-4 border-l-primary">
            <Gift className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed"><b className="text-foreground">{t('landing.ref.title')}</b> {t('landing.ref.text')}</p>
          </div>
        </div>
      </section>

      {/* IELTS (secondary) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="ielts">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-medium mb-4"><Target className="h-3.5 w-3.5" /> {t('landing.ielts.badge')}</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-bold mb-4">{t('landing.ielts.h2a')} <span className="gradient-text">{t('landing.ielts.h2b')}</span>{t('landing.ielts.h2c')}</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">{t('landing.ielts.sub')}</motion.p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {[
                { icon: PenLine, k: 'writing' },
                { icon: Mic, k: 'speaking' },
                { icon: BookOpen, k: 'reading' },
                { icon: Headphones, k: 'listening' },
                { icon: Clock, k: 'mock' },
              ].map(x => ({ icon: x.icon, title: t(`landing.ielts.${x.k}.title`), text: t(`landing.ielts.${x.k}.text`) })).map(f => (
                <div key={f.title} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center shrink-0"><f.icon className="h-5 w-5 text-primary" /></div>
                  <div><h3 className="font-semibold mb-1">{f.title}</h3><p className="text-sm text-muted-foreground">{f.text}</p></div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to={user ? '/writing' : '/auth'}><Button variant="outline" className="gap-2"><PenLine className="h-4 w-4" />Writing</Button></Link>
                <Link to={user ? '/speaking' : '/auth'}><Button variant="outline" className="gap-2"><Mic className="h-4 w-4" />Speaking</Button></Link>
                <Link to={user ? '/reading' : '/auth'}><Button variant="outline" className="gap-2"><BookOpen className="h-4 w-4" />Reading</Button></Link>
                <Link to={user ? '/listening' : '/auth'}><Button variant="outline" className="gap-2"><Headphones className="h-4 w-4" />Listening</Button></Link>
              </div>
              <p className="text-xs text-muted-foreground">{t('landing.ielts.gift')}</p>
            </div>
            <HeroSpeakingDemo />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20" id="pricing">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">{t('landing.pricing.h2a')} <span className="gradient-text">{t('landing.pricing.h2b')}</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">{t('landing.pricing.sub')}</motion.p>
          </motion.div>
          <PlanCards plans={subPlans} />
        </div>
      </section>

      {/* Free material: internal links for readers and search engines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="free-material">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">{t('landing.free.h2a')} <span className="gradient-text">{t('landing.free.h2b')}</span></h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">{t('landing.free.sub')}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/inglizcha-sozlar', k: 'words' },
              { href: '/ingliz-tili-qoidalari', k: 'rules' },
              { href: '/ielts-speaking-part-2', k: 'speaking' },
              { href: '/ielts-writing-task-2-questions', k: 'writing' },
              { href: '/ielts-reading-practice', k: 'reading' },
              { href: '/ielts-listening-practice', k: 'listening' },
              { href: '/ielts-band-score-calculator', k: 'band' },
              { href: '/blog', k: 'blog' },
            ].map(x => ({ href: x.href, title: t(`landing.link.${x.k}.title`), text: t(`landing.link.${x.k}.text`) })).map(l => (
              <a key={l.href} href={l.href} className="glass-card-hover p-5 block">
                <h3 className="font-semibold mb-1">{l.title}</h3>
                <p className="text-sm text-muted-foreground">{l.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">{t('landing.faq.h2a')} <span className="gradient-text">{t('landing.faq.h2b')}</span></h2>
          <div className="space-y-3">
            {faq.map(f => (
              <details key={f.q} className="glass-card p-5 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-3">{f.q}<ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" /></summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-10 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative">
              <Sparkles className="h-11 w-11 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">{t('landing.final.title')}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('landing.final.sub')}</p>
              <Link to={user ? '/learn' : '/auth'}><Button variant="glow" size="xl" className="gap-2">{user ? t('landing.final.goLearn') : t('landing.final.startFree')} <ChevronRight className="h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 border-t border-border" aria-labelledby="free-guides-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="free-guides-heading" className="text-2xl font-bold mb-3">{t('landing.guides.title')}</h2>
          <p className="text-muted-foreground mb-7 max-w-2xl">{t('landing.guides.sub')}</p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/ielts-writing-task-2-questions" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">{t('landing.guide.g1.title')}</h3><p className="text-sm text-muted-foreground">{t('landing.guide.g1.text')}</p></a>
            <a href="/ielts-speaking-part-2" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">{t('landing.guide.g2.title')}</h3><p className="text-sm text-muted-foreground">{t('landing.guide.g2.text')}</p></a>
            <a href="/blog" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">{t('landing.guide.g3.title')}</h3><p className="text-sm text-muted-foreground">{t('landing.guide.g3.text')}</p></a>
            <a href="/ielts-writing-task-1" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">{t('landing.guide.g4.title')}</h3><p className="text-sm text-muted-foreground">{t('landing.guide.g4.text')}</p></a>
            <a href="/ielts-writing-task-2" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">{t('landing.guide.g5.title')}</h3><p className="text-sm text-muted-foreground">{t('landing.guide.g5.text')}</p></a>
            <a href="/ielts-speaking-practice" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">{t('landing.guide.g6.title')}</h3><p className="text-sm text-muted-foreground">{t('landing.guide.g6.text')}</p></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo-128.webp" alt="Scorify" className="h-8 w-8 object-contain" />
              <span className="font-bold">Scorify<span className="text-primary">.uz</span></span>
            </div>
            <p className="text-muted-foreground">{t('landing.footer.tag')}</p>
          </div>
          <div className="space-y-2"><p className="font-semibold">{t('landing.footer.course')}</p>
            <a className="block text-muted-foreground hover:text-primary" href="/ingliz-tili-darslari/beginner">Beginner</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ingliz-tili-darslari/elementary">Elementary (A1)</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ingliz-tili-darslari/pre-intermediate">Pre-Intermediate (A2)</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ingliz-tili-darslari/intermediate">Intermediate (B1)</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ingliz-tili-darslari">{t('landing.footer.allLessons')}</a>
            <a className="block text-muted-foreground hover:text-primary" href="#pricing">{t('landing.footer.pricing')}</a></div>
          <div className="space-y-2"><p className="font-semibold">IELTS</p>
            <a className="block text-muted-foreground hover:text-primary" href="/ielts-writing-task-2">Writing Task 2</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ielts-speaking-practice">{t('landing.footer.speakingPractice')}</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ielts-band-score-calculator">{t('landing.footer.bandCalc')}</a></div>
          <div className="space-y-2"><p className="font-semibold">{t('landing.footer.contact')}</p>
            <a className="block text-muted-foreground hover:text-primary" href="/blog">Blog</a>
            <a className="block text-muted-foreground hover:text-primary" href="/support">{t('landing.footer.help')}</a>
            <a className="block text-muted-foreground hover:text-primary" href="https://t.me/scorify_support" rel="noopener noreferrer">Telegram: @scorify_support</a>
            <a className="block text-muted-foreground hover:text-primary" href="#faq">{t('landing.footer.faq')}</a></div>
        </div>
        <p className="max-w-6xl mx-auto mt-8 text-sm text-muted-foreground">© {new Date().getFullYear()} Scorify.uz. {t('landing.footer.disclaimer')}</p>
      </footer>

      {!user && <StickyCta />}
    </div>
  );
}
