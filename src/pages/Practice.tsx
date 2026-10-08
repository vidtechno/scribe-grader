import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, BrainCircuit, ChevronRight, ClipboardList, FileText, History, Mic, PenLine, PenTool } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { useActivityData } from '@/hooks/useDashboardData';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { PricingModal } from '@/components/PricingModal';
import { PracticeCard } from '@/components/PracticeCard';
import { SEOHead } from '@/components/SEOHead';

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
};

const avg = (nums: number[]) => (nums.length ? (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1) : '–');

/** IELTS practice hub: Writing, Speaking, Mock tests and the daily grammar test (the English course is the main page). */
export default function Practice() {
  const { planType, writingLimit, writingUsed, speakingLimit, speakingUsed, mockLimit, mockUsed, refresh: refreshSub } = useSubscription();
  const navigate = useNavigate();
  const [showPricing, setShowPricing] = useState(false);
  const activityQ = useActivityData();
  const essays = useMemo(() => activityQ.data?.essays ?? [], [activityQ.data]);
  const speaking = useMemo(() => activityQ.data?.speaking ?? [], [activityQ.data]);
  const draftsCount = useMemo(() => essays.filter((x) => x.status === 'draft').length + speaking.filter((x) => x.status === 'draft').length, [essays, speaking]);

  useEffect(() => {
    const onFocus = () => refreshSub();
    window.addEventListener('focus', onFocus);
    return () => window.removeEventListener('focus', onFocus);
  }, [refreshSub]);

  const done = (list: { status: string | null; score: number | null }[]) => list.filter((x) => x.status !== 'draft' && x.score !== null).map((x) => x.score as number);
  const essayScores = done(essays);
  const speakingScores = done(speaking);

  const openWriting = (task: 1 | 2) => {
    if (writingLimit - writingUsed <= 0) { setShowPricing(true); return; }
    navigate(`/exam?task=${task}`);
  };
  const openSpeaking = () => {
    if (speakingLimit - speakingUsed <= 0) { setShowPricing(true); return; }
    navigate('/speaking');
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-24 md:pb-0">
      <SEOHead title="IELTS Practice" description="Practise IELTS Writing and Speaking with band scores and corrections." path="/practice" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">IELTS Practice</p>
          <h1 className="text-2xl sm:text-3xl font-bold">Writing, Speaking and mock tests</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Once your English is ready, practise for the exam and get a band score with corrections.</p>
        </motion.div>

        <motion.section initial="hidden" animate="visible" variants={fadeUp} custom={1} className="grid md:grid-cols-2 gap-4 mb-6" aria-label="Practice">
          <PracticeCard icon={PenTool} tone="primary" title="IELTS Writing" text="Task 1 and Task 2 with band score and corrections"
            left={Math.max(0, writingLimit - writingUsed)} limit={writingLimit} used={writingUsed}
            last={essayScores[0]?.toString() ?? '–'} average={avg(essayScores)}>
            <Button variant="glow" className="gap-2 flex-1 min-w-[120px]" onClick={() => openWriting(2)}><PenTool className="h-4 w-4" />Task 2 essay</Button>
            <Button variant="outline" className="gap-2 flex-1 min-w-[120px]" onClick={() => openWriting(1)}>Task 1 report</Button>
            <Link to="/essays" className="w-full text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1"><FileText className="h-3.5 w-3.5" />Essay history<ChevronRight className="h-3 w-3" /></Link>
          </PracticeCard>
          <PracticeCard icon={Mic} tone="accent" title="IELTS Speaking" text="Parts 1–3 with fluency, grammar and pronunciation feedback"
            left={Math.max(0, speakingLimit - speakingUsed)} limit={speakingLimit} used={speakingUsed}
            last={speakingScores[0]?.toString() ?? '–'} average={avg(speakingScores)}>
            <Button variant="glow" className="gap-2 flex-1 min-w-[120px]" onClick={openSpeaking}><Mic className="h-4 w-4" />Start speaking</Button>
            <Link to="/speaking-history" className="w-full text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1"><History className="h-3.5 w-3.5" />Speaking history<ChevronRight className="h-3 w-3" /></Link>
          </PracticeCard>
        </motion.section>

        <section aria-label="More practice">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">More practice</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { to: '/mock-test', icon: ClipboardList, title: 'Full Mock Test', text: `Timed Writing + Speaking · ${Math.max(0, mockLimit - mockUsed)} left` },
              { to: '/grammar-test', icon: BrainCircuit, title: 'Daily Grammar', text: 'A short test based on your recent mistakes' },
              { to: '/drafts', icon: PenLine, title: 'Drafts', text: draftsCount ? `${draftsCount} unfinished ${draftsCount === 1 ? 'item' : 'items'}` : 'No unfinished work' },
            ].map((i) => (
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
      </main>
      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}
