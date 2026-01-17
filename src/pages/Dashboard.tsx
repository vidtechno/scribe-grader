import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { 
  PenTool, 
  FileText, 
  TrendingUp, 
  Clock, 
  CreditCard,
  ChevronRight,
  Sparkles,
  Award,
  BarChart3
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

export default function Dashboard() {
  const { profile, refreshProfile } = useAuth();
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);

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

  const chartData = essays
    .filter(e => e.score !== null)
    .reverse()
    .map((essay, index) => ({
      name: `Essay ${index + 1}`,
      score: essay.score,
      date: format(new Date(essay.created_at), 'MMM d')
    }));

  const averageScore = essays.filter(e => e.score !== null).length > 0
    ? (essays.filter(e => e.score !== null).reduce((acc, e) => acc + (e.score || 0), 0) / essays.filter(e => e.score !== null).length).toFixed(1)
    : 'N/A';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Welcome back, <span className="gradient-text">{profile?.full_name?.split(' ')[0] || 'Student'}</span>
          </h1>
          <p className="text-muted-foreground">Ready to improve your IELTS writing skills?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-card-hover p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{profile?.credits ?? 0}</p>
                <p className="text-sm text-muted-foreground">Credits Left</p>
              </div>
            </div>
          </div>

          <div className="glass-card-hover p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{essays.length}</p>
                <p className="text-sm text-muted-foreground">Essays Written</p>
              </div>
            </div>
          </div>

          <div className="glass-card-hover p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{averageScore}</p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
            </div>
          </div>

          <div className="glass-card-hover p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {essays.filter(e => e.score !== null && e.score >= 7).length}
                </p>
                <p className="text-sm text-muted-foreground">Band 7+ Essays</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Exam CTA */}
        <div className="glass-card p-8 mb-8 relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center glow-effect">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">Start Writing Exam</h2>
                <p className="text-muted-foreground">Practice Task 1 or Task 2 with AI evaluation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/exam?task=1">
                <Button variant="outline" size="lg" className="gap-2">
                  <Clock className="h-4 w-4" />
                  Task 1 (20 min)
                </Button>
              </Link>
              <Link to="/exam?task=2">
                <Button variant="glow" size="lg" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Task 2 (40 min)
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Score Progress Chart */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Score Progress</h3>
            </div>
            
            {chartData.length > 0 ? (
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis 
                      domain={[0, 9]} 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Complete your first essay to see your progress</p>
              </div>
            )}
          </div>

          {/* Recent Essays */}
          <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Recent Essays</h3>
              </div>
            </div>

            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 bg-secondary/50 rounded-lg animate-pulse"></div>
                ))}
              </div>
            ) : essays.length > 0 ? (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {essays.slice(0, 5).map((essay) => (
                  <Link
                    key={essay.id}
                    to={`/result/${essay.id}`}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {essay.task_type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {format(new Date(essay.created_at), 'MMM d, yyyy')}
                        </span>
                      </div>
                      <p className="text-sm truncate text-muted-foreground">
                        {essay.topic.substring(0, 60)}...
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      {essay.score !== null && (
                        <span className={`text-lg font-bold ${
                          essay.score >= 7 ? 'text-primary' : 
                          essay.score >= 5 ? 'text-yellow-500' : 'text-destructive'
                        }`}>
                          {essay.score}
                        </span>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
          </div>
        </div>
      </main>
    </div>
  );
}
