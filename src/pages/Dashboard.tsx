import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { SubscriptionBadge } from '@/components/SubscriptionBadge';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { 
  PenTool, FileText, TrendingUp, Clock, CreditCard,
  ChevronRight, Sparkles, Award, BarChart3, Calendar,
  Zap, Crown, Target, BookOpen, Star, Check, ExternalLink, Mic
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
  const { subscription, creditsRemaining, creditsPercentage, daysRemaining, isExpired } = useSubscription();
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const [mentorTip, setMentorTip] = useState<string | null>(null);
  const [speakingAvg, setSpeakingAvg] = useState<string>('N/A');
  const [speakingCount, setSpeakingCount] = useState(0);

  useEffect(() => {
    fetchEssays();
    fetchSpeakingStats();
    refreshProfile();
  }, []);

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

  const planType = subscription?.plan_type || 'free';

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
      <SEOHead title="Dashboard" description="Track your IELTS writing progress, practice essays, and view analytics." path="/dashboard" />
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
              <SubscriptionBadge planType={planType} size="md" />
              {planType === 'free' && (
                <Button variant="glow" size="sm" className="gap-1" onClick={() => setShowPricing(true)}>
                  <Zap className="h-4 w-4" /> Upgrade
                </Button>
              )}
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

        {/* Subscription Info Card */}
        {subscription && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="glass-card p-6 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {planType === 'pro_plus' ? <Crown className="h-5 w-5 text-primary" /> : <CreditCard className="h-5 w-5 text-primary" />}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Your Plan</p>
                  <p className="font-bold">{planType === 'free' ? 'Free' : planType === 'pro' ? 'Pro' : 'Pro Plus'}</p>
                </div>
              </div>
              {daysRemaining !== null && (
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className={isExpired ? 'text-destructive' : 'text-muted-foreground'}>
                    {isExpired ? 'Expired' : `${daysRemaining} days remaining`}
                  </span>
                </div>
              )}
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Credits Used</span>
                <span className="font-medium">{subscription.credits_used} / {subscription.credits_limit}</span>
              </div>
              <Progress value={100 - creditsPercentage} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">{creditsRemaining} credits remaining</p>
            </div>
          </motion.div>
        )}

        {/* Start Exam CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-card p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-effect">
                <PenTool className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-1">Start Writing Exam</h2>
                <p className="text-sm text-muted-foreground">Practice Task 1 or Task 2 with AI evaluation</p>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link to="/exam?task=1" className="flex-1 sm:flex-none">
                <Button variant="outline" size="lg" className="gap-2 w-full">
                  <Clock className="h-4 w-4" /> Task 1
                </Button>
              </Link>
              <Link to="/exam?task=2" className="flex-1 sm:flex-none">
                <Button variant="glow" size="lg" className="gap-2 w-full">
                  <Sparkles className="h-4 w-4" /> Task 2
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {[
            { icon: CreditCard, value: creditsRemaining, label: 'Credits Left', delay: 1 },
            { icon: FileText, value: essays.length, label: 'Total Essays', delay: 2 },
            { icon: Award, value: averageScore, label: 'Avg Score', delay: 3 },
            { icon: Target, value: bestScore, label: 'Best Score', delay: 4 },
            { icon: TrendingUp, value: thisWeekEssays, label: 'This Week', delay: 5 },
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

        {/* Task Distribution + Recent Essays */}
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

          {/* Recent Essays */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="glass-card p-4 sm:p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold">Recent Essays</h3>
              </div>
              {essays.length > 5 && (
                <Link to="/essays">
                  <Button variant="ghost" size="sm" className="gap-1 text-primary">
                    View All <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => <div key={i} className="h-16 bg-secondary/50 rounded-lg animate-pulse" />)}
              </div>
            ) : essays.length > 0 ? (
              <div className="space-y-2 sm:space-y-3">
                {essays.slice(0, 5).map((essay) => (
                  <Link key={essay.id} to={`/result/${essay.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all group">
                    <div className="flex-shrink-0">
                      {essay.score !== null ? (
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-sm sm:text-base font-bold ${
                          essay.score >= 7 ? 'bg-primary/15 text-primary' : essay.score >= 5 ? 'bg-yellow-500/15 text-yellow-600' : 'bg-destructive/15 text-destructive'
                        }`}>
                          {essay.score}
                        </div>
                      ) : (
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-muted/50 flex items-center justify-center">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] sm:text-xs font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">{essay.task_type}</span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground">{format(new Date(essay.created_at), 'MMM d')}</span>
                      </div>
                      <p className="text-xs sm:text-sm truncate text-muted-foreground">{essay.topic.substring(0, 50)}...</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No essays yet. Start your first exam!</p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Pricing Plans */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" /> Upgrade Your Plan
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: 'Free', price: '$0', priceUzs: "0 so'm", period: '', icon: Star, credits: '3 essays / month',
                features: ['3 essay evaluations', 'Band scores + top 3 errors', 'Partial feedback (blurred)', "Extra: $0.2 / 2,000 so'm each"],
                key: 'free',
              },
              {
                name: 'Pro', price: '$7', priceUzs: "69,000 so'm", period: '/month', icon: Zap, credits: '30 essays / month',
                highlight: 'AI Mentor + Full Analysis',
                features: ['30 evaluations/month', 'Full AI feedback + AI Mentor', 'Score analytics', "Extra: $0.15 / 1,500 so'm each"],
                key: 'pro', popular: true,
              },
              {
                name: 'Pro Plus', price: '$13', priceUzs: "129,000 so'm", period: '/month', icon: Crown, credits: '60 essays / month',
                highlight: '⚡ Elite AI Mentor',
                features: ['60 evaluations/month', 'Elite Mentor + all features', "Extra: $0.4 / 4,000 so'm each"],
                key: 'pro_plus',
              },
            ].map((plan) => {
              const isCurrent = planType === plan.key;
              const Icon = plan.icon;
              return (
                <motion.div key={plan.key} whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`relative rounded-xl border p-5 flex flex-col ${
                    plan.popular ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-border glass-card'
                  } ${isCurrent ? 'ring-2 ring-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-bold">{plan.name}</h4>
                  </div>
                  <div className="mb-1">
                    <span className="text-2xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">{plan.priceUzs}{plan.period}</p>
                  {(plan as any).highlight && (
                    <p className="text-xs font-semibold text-primary mb-1">{(plan as any).highlight}</p>
                  )}
                  <p className="text-sm font-medium text-primary mb-3">{plan.credits}</p>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs">
                        <Check className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {isCurrent ? (
                    <Button variant="outline" size="sm" disabled className="w-full">Current Plan</Button>
                  ) : plan.key === 'free' ? (
                    <Button variant="outline" size="sm" disabled className="w-full">Default</Button>
                  ) : (
                    <Button variant={plan.popular ? 'glow' : 'outline'} size="sm" className="w-full gap-1"
                      onClick={() => window.open('https://t.me/writingexambase', '_blank')}>
                      <ExternalLink className="h-3.5 w-3.5" /> Upgrade
                    </Button>
                  )}
                </motion.div>
              );
            })}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            To upgrade or buy extra credits, contact admin via Telegram
          </p>
        </motion.div>

        {/* Writing Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
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
    </div>
  );
}
