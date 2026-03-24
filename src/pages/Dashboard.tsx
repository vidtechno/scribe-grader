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
import { motion } from 'framer-motion';
import { 
  PenTool, FileText, TrendingUp, Clock, CreditCard,
  ChevronRight, Sparkles, Award, BarChart3, Calendar,
  Zap, Crown, ArrowUpRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

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

  useEffect(() => {
    fetchEssays();
    refreshProfile();
  }, []);

  const fetchEssays = async () => {
    try {
      const { data, error } = await supabase
        .from('essays')
        .select('id, task_type, topic, score, created_at')
        .order('created_at', { ascending: false })
        .limit(10);
      if (error) throw error;
      setEssays(data || []);
    } catch (error) {
      console.error('Error fetching essays:', error);
    } finally {
      setLoading(false);
    }
  };

  const chartData = essays.filter(e => e.score !== null).reverse().map((essay, index) => ({
    name: `Essay ${index + 1}`,
    score: essay.score,
    date: format(new Date(essay.created_at), 'MMM d'),
  }));

  const averageScore = essays.filter(e => e.score !== null).length > 0
    ? (essays.filter(e => e.score !== null).reduce((acc, e) => acc + (e.score || 0), 0) / essays.filter(e => e.score !== null).length).toFixed(1)
    : 'N/A';

  const planType = subscription?.plan_type || 'free';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Welcome */}
        <motion.div initial="hidden" animate="visible" className="mb-8">
          <motion.div variants={fadeUp} custom={0} className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-1">
                Welcome back, <span className="gradient-text">{profile?.full_name?.split(' ')[0] || 'Student'}</span>
              </h1>
              <p className="text-muted-foreground">Ready to improve your IELTS writing skills?</p>
            </div>
            <div className="flex items-center gap-3">
              <SubscriptionBadge planType={planType} size="md" />
              {planType === 'free' && (
                <Button variant="glow" size="sm" className="gap-1" onClick={() => setShowPricing(true)}>
                  <Zap className="h-4 w-4" /> Upgrade
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>

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
            {planType !== 'pro_plus' && (
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Credits Used</span>
                  <span className="font-medium">{subscription.credits_used} / {subscription.credits_limit}</span>
                </div>
                <Progress value={100 - creditsPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">{creditsRemaining} credits remaining</p>
              </div>
            )}
            {planType === 'pro_plus' && (
              <p className="text-sm text-primary font-medium">✨ Unlimited credits — write as much as you want!</p>
            )}
          </motion.div>
        )}

        {/* Stats Grid */}
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: CreditCard, value: profile?.credits ?? 0, label: 'Credits Left', delay: 1 },
            { icon: FileText, value: essays.length, label: 'Essays Written', delay: 2 },
            { icon: Award, value: averageScore, label: 'Average Score', delay: 3 },
            { icon: TrendingUp, value: essays.filter(e => e.score !== null && e.score >= 7).length, label: 'Band 7+', delay: 4 },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} custom={stat.delay}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card-hover p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Start Exam CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass-card p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-effect">
                <PenTool className="h-8 w-8 text-primary" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Start Writing Exam</h2>
                <p className="text-muted-foreground">Practice Task 1 or Task 2 with AI evaluation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/exam?task=1">
                <Button variant="outline" size="lg" className="gap-2">
                  <Clock className="h-4 w-4" /> Task 1 (20 min)
                </Button>
              </Link>
              <Link to="/exam?task=2">
                <Button variant="glow" size="lg" className="gap-2">
                  <Sparkles className="h-4 w-4" /> Task 2 (40 min)
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Score Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Score Progress</h3>
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

          {/* Recent Essays */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="glass-card p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Recent Essays</h3>
            </div>
            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-secondary/50 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : essays.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {essays.slice(0, 5).map((essay) => (
                  <Link key={essay.id} to={`/result/${essay.id}`}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {essay.task_type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(essay.created_at), 'MMM d, yyyy')}
                        </span>
                      </div>
                      <p className="text-sm truncate text-muted-foreground">{essay.topic.substring(0, 60)}...</p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      {essay.score !== null && (
                        <span className={`text-lg font-bold ${
                          essay.score >= 7 ? 'text-primary' : essay.score >= 5 ? 'text-yellow-500' : 'text-destructive'
                        }`}>{essay.score}</span>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
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

        {/* Quick Tips */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
          className="mt-8 glass-card p-6">
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
