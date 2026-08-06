import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SubscriptionBadge } from '@/components/SubscriptionBadge';
import { PricingModal } from '@/components/PricingModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { 
  PenTool, FileText, TrendingUp, Clock, CreditCard,
  ChevronRight, Sparkles, Award, BarChart3, Calendar,
  Zap, Crown, Target, BookOpen, Star, Check, ExternalLink, Mic, Coins, History, AlertCircle
  , ClipboardList, PenLine, ArrowRight, Plus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { format, subDays, isAfter } from 'date-fns';

interface Essay {
  id: string;
  task_type: string;
  topic: string;
  score: number | null;
  created_at: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
};

export default function Dashboard() {
  const { profile, refreshProfile } = useAuth();
  const { subscription, planType, planName, writingLimit, writingUsed, speakingLimit, speakingUsed, mockLimit, mockUsed, expiresAt, daysRemaining, isExpired, refresh: refreshSub } = useSubscription();
  const navigate = useNavigate();
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [showTaskChooser, setShowTaskChooser] = useState(false);
  const [mentorTip, setMentorTip] = useState<string | null>(null);
  const [speakingAvg, setSpeakingAvg] = useState<string>('N/A');
  const [speakingCount, setSpeakingCount] = useState(0);
  const [recentSpeaking, setRecentSpeaking] = useState<any[]>([]);
  const [recentMockTests, setRecentMockTests] = useState<any[]>([]);
  const [draftsCount, setDraftsCount] = useState(0);

  useEffect(() => {
    fetchEssays();
    fetchSpeakingStats();
    fetchMockTests();
    fetchDrafts();
    refreshProfile();
  }, []);

  // Live-refresh subscription when admin (or backend) changes the user's plan.
  useEffect(() => {
    if (!profile?.user_id) return;
    const ch = supabase.channel('sub-live-' + profile.user_id)
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'subscriptions', filter: `user_id=eq.${profile.user_id}` },
        () => refreshSub())
      .subscribe();
    // Also refetch when the tab regains focus
    const onFocus = () => refreshSub();
    window.addEventListener('focus', onFocus);
    return () => { supabase.removeChannel(ch); window.removeEventListener('focus', onFocus); };
  }, [profile?.user_id, refreshSub]);

  const openWriting = (task: 1 | 2) => {
    setShowTaskChooser(false);
    if ((writingLimit - writingUsed) <= 0) { setShowPricing(true); return; }
    navigate(`/exam?task=${task}`);
  };

  const fetchEssays = async () => {
    try {
      const { data, error } = await supabase
        .from('essays')
        .select('id, task_type, topic, score, created_at')
        .order('created_at', { ascending: false })
        .limit(50);
      if (error) throw error;
      setEssays(data || []);

      // Generate mentor tip based on essays
      if (data && data.length >= 2) {
        const scored = data.filter(e => e.score !== null);
        if (scored.length >= 2) {
          const latest = scored[0].score || 0;
          const previous = scored[1].score || 0;
          if (latest > previous) {
            setMentorTip(`📈 Great progress! Your score went from ${previous} to ${latest}. Keep focusing on vocabulary variety to push even higher!`);
          } else if (latest < previous) {
            setMentorTip(`💡 Your latest score (${latest}) dipped from ${previous}. Try spending more time on planning before you write — structure is key!`);
          } else {
            setMentorTip(`🎯 Consistent at Band ${latest}! To break through, focus on using more complex sentence structures and academic vocabulary.`);
          }
        }
      }
    } catch (error) {
      console.error('Error fetching essays:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSpeakingStats = async () => {
    try {
      const { data } = await supabase
        .from('speaking_attempts')
        .select('id, topic, part, score, created_at')
        .order('created_at', { ascending: false })
        .limit(50);
      if (data && data.length > 0) {
        setSpeakingCount(data.length);
        setRecentSpeaking(data.slice(0, 5));
        const scored = data.filter(d => d.score !== null);
        if (scored.length > 0) {
          setSpeakingAvg((scored.reduce((a, d) => a + (d.score || 0), 0) / scored.length).toFixed(1));
        }
      }
    } catch {}
  };

  const fetchMockTests = async () => {
    try {
      const { data } = await supabase
        .from('mock_tests')
        .select('id,status,overall_band,task1_band,task2_band,speaking_band,created_at,completed_at')
        .order('created_at', { ascending: false })
        .limit(5);
      setRecentMockTests(data || []);
    } catch {}
  };

  const fetchDrafts = async () => {
    try {
      const [e, s] = await Promise.all([
        supabase.from('essays').select('id', { count: 'exact', head: true }).eq('status', 'draft'),
        supabase.from('speaking_attempts').select('id', { count: 'exact', head: true }).eq('status', 'draft'),
      ]);
      setDraftsCount((e.count || 0) + (s.count || 0));
    } catch {}
  };

  const last10Scored = essays.filter(e => e.score !== null).slice(0, 10).reverse();
  const chartData = last10Scored.map((essay, index) => ({
    name: `#${index + 1}`,
    score: essay.score,
    date: format(new Date(essay.created_at), 'MMM d'),
  }));

  const scoredEssays = essays.filter(e => e.score !== null);
  const averageScore = scoredEssays.length > 0
    ? (scoredEssays.reduce((acc, e) => acc + (e.score || 0), 0) / scoredEssays.length).toFixed(1)
    : 'N/A';
  
  const bestScore = scoredEssays.length > 0
    ? Math.max(...scoredEssays.map(e => e.score || 0))
    : 'N/A';

  const thisWeekEssays = essays.filter(e => isAfter(new Date(e.created_at), subDays(new Date(), 7))).length;
  const thisMonthEssays = essays.filter(e => isAfter(new Date(e.created_at), subDays(new Date(), 30))).length;

  const task1Count = essays.filter(e => e.task_type === 'Task 1').length;
  const task2Count = essays.filter(e => e.task_type === 'Task 2').length;

  const weeklyData = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i);
    const dayEssays = essays.filter(e => format(new Date(e.created_at), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
    return {
      day: format(date, 'EEE'),
      essays: dayEssays.length,
      avgScore: dayEssays.filter(e => e.score).length > 0
        ? dayEssays.filter(e => e.score).reduce((a, e) => a + (e.score || 0), 0) / dayEssays.filter(e => e.score).length
        : 0,
    };
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden pb-20 md:pb-0">
      <SEOHead title="Dashboard" description="Track your IELTS writing progress, practice essays, and view analytics." path="/dashboard" noindex />
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Welcome */}
        <motion.div initial="hidden" animate="visible" className="mb-8">
          <motion.div variants={fadeUp} custom={0} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                Welcome back, <span className="gradient-text">{profile?.full_name?.split(' ')[0] || 'Student'}</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">Ready to improve your IELTS writing skills?</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <SubscriptionBadge planType={planType} planName={planName} size="md" />
            </div>
          </motion.div>
        </motion.div>

        {/* Mentor's Daily Tip */}
        {mentorTip && planType !== 'free' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            className="glass-card p-5 mb-6 border-l-4 border-l-primary">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Mentor's Daily Tip</p>
                <p className="text-sm text-muted-foreground">{mentorTip}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Plan Usage Tracker */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Current plan</p>
                <p className="text-xl font-bold flex items-center gap-2">
                  {planName}
                  {expiresAt && (
                    <span className={`text-xs font-normal ${isExpired ? 'text-destructive' : 'text-muted-foreground'}`}>
                      • {isExpired ? 'Expired' : `${daysRemaining} days left`}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <Button variant="glow" size="sm" className="gap-1" onClick={() => setShowPricing(true)}>
              <Crown className="h-4 w-4" /> {planType === 'free' ? 'Upgrade Plan' : 'Change Plan'}
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: 'Writing', icon: PenTool, used: writingUsed, limit: writingLimit, color: 'bg-primary' },
              { label: 'Speaking', icon: Mic, used: speakingUsed, limit: speakingLimit, color: 'bg-accent' },
              { label: 'Mock Tests', icon: ClipboardList, used: mockUsed, limit: mockLimit, color: 'bg-amber-500' },
            ].map((u) => {
              const pct = u.limit > 0 ? Math.min(100, (u.used / u.limit) * 100) : 0;
              return (
                <div key={u.label} className="glass-card-hover p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <u.icon className="h-4 w-4 text-primary" /> {u.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{u.used}/{u.limit} used</span>
                  </div>
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <div className={`h-full ${u.color} transition-all`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
          {planType === 'free' && (
            <div className="mt-4 flex items-start gap-2 text-xs text-primary bg-primary/5 border border-primary/20 rounded-lg p-3">
              <Sparkles className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>IELTS success is built on consistent practice and insightful feedback. Upgrade to unlock more evaluations every month.</span>
            </div>
          )}
        </motion.div>

        {/* Quick Actions Grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" /> Quick Actions
            </h2>
            <span className="text-xs text-muted-foreground hidden sm:inline">Tap a card to start</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Writing Hub */}
            <Link to="/writing" className="group glass-card-hover p-4 sm:p-5 text-left relative overflow-hidden block">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <PenTool className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Writing</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 leading-relaxed">Task 1 & 2, history and AI feedback</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{Math.max(0, writingLimit - writingUsed)} left</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>

            {/* Speaking Hub */}
            <Link to="/speaking" className="group glass-card-hover p-4 sm:p-5 text-left relative overflow-hidden block">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-3">
                  <Mic className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Speaking</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 leading-relaxed">Parts 1–3, history and AI band feedback</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/10 text-accent-foreground">{Math.max(0, speakingLimit - speakingUsed)} left</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>

            {/* Mock Test */}
            <Link to="/mock-test" className="group glass-card-hover p-4 sm:p-5 text-left relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Full Mock Test</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 leading-relaxed">Writing + Speaking timed simulation</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{Math.max(0, mockLimit - mockUsed)} left</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>

            {/* Drafts */}
            <Link to="/drafts" className="group glass-card-hover p-4 sm:p-5 text-left relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-amber-500/15 flex items-center justify-center mb-3 relative">
                  <PenLine className="h-5 w-5 text-amber-600" />
                  {draftsCount > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                      {draftsCount}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Drafts</h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground mb-3 leading-relaxed">Resume unfinished work anytime</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600">
                    {draftsCount} saved
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-amber-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary shortcuts */}
          <div className="mt-3 flex flex-wrap gap-2">
            <Link to="/writing"><Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs"><PenTool className="h-3.5 w-3.5" /> Writing hub</Button></Link>
            <Link to="/speaking"><Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs"><Mic className="h-3.5 w-3.5" /> Speaking hub</Button></Link>
            <Link to="/essays"><Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs"><FileText className="h-3.5 w-3.5" /> Essay history</Button></Link>
            <Link to="/speaking-history"><Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs"><History className="h-3.5 w-3.5" /> Speaking history</Button></Link>
            <Link to="/leaderboard"><Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs"><Award className="h-3.5 w-3.5" /> Ranking</Button></Link>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          {[
            { icon: PenTool, value: `${writingUsed}/${writingLimit}`, label: 'Writing Used', delay: 1 },
            { icon: FileText, value: essays.length, label: 'Total Essays', delay: 2 },
            { icon: Award, value: averageScore, label: 'Avg W. Score', delay: 3 },
            { icon: Target, value: bestScore, label: 'Best Score', delay: 4 },
            { icon: Mic, value: speakingAvg, label: 'Avg S. Score', delay: 5 },
            { icon: TrendingUp, value: thisWeekEssays, label: 'This Week', delay: 6 },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} custom={stat.delay}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card-hover p-3 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {/* Score Progress Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Last 10 Essays Progress</h3>
            </div>
            {chartData.length > 0 ? (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis domain={[0, 9]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                    <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Complete your first essay to see your progress</p>
              </div>
            )}
          </motion.div>

          {/* Weekly Activity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Weekly Activity</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                  <Area type="monotone" dataKey="essays" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Task Distribution + Helpful block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Task Distribution */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="glass-card p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <BookOpen className="h-5 w-5 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">Task Distribution</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Task 1</span>
                  <span className="font-medium">{task1Count}</span>
                </div>
                <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${essays.length > 0 ? (task1Count / essays.length) * 100 : 0}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Task 2</span>
                  <span className="font-medium">{task2Count}</span>
                </div>
                <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${essays.length > 0 ? (task2Count / essays.length) * 100 : 0}%` }} />
                </div>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
              <div className="p-2 sm:p-3 rounded-lg bg-secondary/30 text-center">
                <p className="text-xl sm:text-2xl font-bold">{thisMonthEssays}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">This Month</p>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-secondary/30 text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">{scoredEssays.filter(e => (e.score || 0) >= 7).length}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Band 7+</p>
              </div>
            </div>
          </motion.div>

          {/* Focus of the week */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="glass-card p-4 sm:p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">Focus of the week</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: PenTool, title: 'Writing goal', desc: 'Aim for 3 essays this week. You have ' + thisWeekEssays + ' so far.', to: '/writing', cta: 'Practice writing' },
                { icon: Mic, title: 'Speaking goal', desc: 'Record at least 2 Part 2 answers this week to build fluency.', to: '/speaking', cta: 'Practice speaking' },
                { icon: ClipboardList, title: 'Full mock test', desc: 'Simulate a full exam once a week to build stamina.', to: '/mock-test', cta: 'Start mock test' },
                { icon: Sparkles, title: 'Ask your AI Mentor', desc: 'Get a personalized tip based on your last essays.', to: '/dashboard', cta: 'Open mentor', mentor: true },
              ].map((g) => (
                <Link key={g.title} to={g.to} className="p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all group flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <g.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-semibold text-sm">{g.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 flex-1">{g.desc}</p>
                  <span className="text-[11px] font-medium text-primary inline-flex items-center gap-1">
                    {g.cta} <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Writing Tips
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Plan First', tip: 'Spend 3-5 minutes planning your essay structure before writing.' },
              { title: 'Use Linking Words', tip: 'Connect ideas with words like "moreover", "however", "consequently".' },
              { title: 'Check Word Count', tip: 'Task 1 needs 150+ words, Task 2 needs 250+ words minimum.' },
            ].map((tip) => (
              <div key={tip.title} className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-sm mb-1">{tip.title}</p>
                <p className="text-xs text-muted-foreground">{tip.tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />

      <Dialog open={showTaskChooser} onOpenChange={setShowTaskChooser}>
        <DialogContent className="glass-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <PenTool className="h-5 w-5 text-primary" /> Choose your Writing Task
            </DialogTitle>
            <DialogDescription>Pick which IELTS Writing task you want to practice now.</DialogDescription>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => openWriting(1)}
              className="glass-card-hover p-4 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <p className="font-semibold mb-1">Task 1</p>
              <p className="text-xs text-muted-foreground mb-2">Describe a chart, graph, map or process. 150+ words in 20 min.</p>
              <span className="text-[11px] text-primary font-medium group-hover:underline">Start Task 1 →</span>
            </button>
            <button
              onClick={() => openWriting(2)}
              className="glass-card-hover p-4 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-3">
                <PenTool className="h-5 w-5 text-accent" />
              </div>
              <p className="font-semibold mb-1">Task 2</p>
              <p className="text-xs text-muted-foreground mb-2">Opinion / discussion essay. 250+ words in 40 min.</p>
              <span className="text-[11px] text-accent font-medium group-hover:underline">Start Task 2 →</span>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
