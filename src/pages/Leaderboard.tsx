import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { motion } from 'framer-motion';
import { Trophy, Medal, Crown, TrendingUp, Calendar } from 'lucide-react';
import { subDays, startOfDay, startOfWeek, startOfMonth } from 'date-fns';

interface LeaderboardEntry {
  user_id: string;
  full_name: string | null;
  email: string;
  avg_score: number;
  essay_count: number;
  composite_score: number;
}

type Period = 'today' | 'weekly' | 'monthly';

export default function Leaderboard() {
  const [period, setPeriod] = useState<Period>('weekly');
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, [period]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      let startDate: Date;
      if (period === 'today') startDate = startOfDay(new Date());
      else if (period === 'weekly') startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
      else startDate = startOfMonth(new Date());

      // Fetch essays within period
      const { data: essays, error } = await supabase
        .from('essays')
        .select('user_id, score')
        .gte('created_at', startDate.toISOString())
        .not('score', 'is', null);

      if (error) throw error;

      // Aggregate by user
      const userMap = new Map<string, { scores: number[]; count: number }>();
      (essays || []).forEach((e: any) => {
        const existing = userMap.get(e.user_id) || { scores: [], count: 0 };
        existing.scores.push(e.score);
        existing.count++;
        userMap.set(e.user_id, existing);
      });

      // Filter users with >= 2 essays
      const qualifiedUserIds = Array.from(userMap.entries())
        .filter(([_, v]) => v.count >= 2)
        .map(([uid]) => uid);

      if (qualifiedUserIds.length === 0) {
        setEntries([]);
        setLoading(false);
        return;
      }

      // Fetch profiles
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, full_name, email')
        .in('user_id', qualifiedUserIds);

      const profileMap = new Map<string, { full_name: string | null; email: string }>();
      (profiles || []).forEach((p: any) => {
        profileMap.set(p.user_id, { full_name: p.full_name, email: p.email });
      });

      // Calculate composite scores and build entries
      const leaderboard: LeaderboardEntry[] = qualifiedUserIds.map(uid => {
        const stats = userMap.get(uid)!;
        const avgScore = stats.scores.reduce((a, b) => a + b, 0) / stats.scores.length;
        const activityBonus = stats.count * 0.1;
        const profile = profileMap.get(uid);
        return {
          user_id: uid,
          full_name: profile?.full_name || null,
          email: profile?.email || '',
          avg_score: parseFloat(avgScore.toFixed(1)),
          essay_count: stats.count,
          composite_score: parseFloat((avgScore + activityBonus).toFixed(2)),
        };
      });

      leaderboard.sort((a, b) => b.composite_score - a.composite_score);
      setEntries(leaderboard.slice(0, 30));
    } catch (err) {
      console.error('Leaderboard error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 0) return <Trophy className="h-5 w-5 text-yellow-400" />;
    if (rank === 1) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-amber-600" />;
    return <span className="text-sm font-bold text-muted-foreground w-5 text-center">{rank + 1}</span>;
  };

  const getRankBg = (rank: number) => {
    if (rank === 0) return 'bg-yellow-400/10 border-yellow-400/30';
    if (rank === 1) return 'bg-gray-400/10 border-gray-400/30';
    if (rank === 2) return 'bg-amber-600/10 border-amber-600/30';
    return 'bg-secondary/30 border-border/50';
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Leaderboard" description="See the top IELTS writers ranked by score and activity." path="/leaderboard" />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center">
              <Trophy className="h-6 w-6 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Leaderboard</h1>
              <p className="text-sm text-muted-foreground">Top 30 writers ranked by score + activity</p>
            </div>
          </div>

          <div className="flex gap-2 my-6">
            {(['today', 'weekly', 'monthly'] as Period[]).map(p => (
              <Button key={p} variant={period === p ? 'default' : 'outline'} size="sm"
                onClick={() => setPeriod(p)} className="capitalize gap-1">
                <Calendar className="h-3.5 w-3.5" /> {p}
              </Button>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mb-4">
            Ranking = Average Score + Activity Bonus (0.1 per essay). Minimum 2 essays to qualify.
          </p>
        </motion.div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-16 bg-secondary/50 rounded-lg animate-pulse" />)}
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Trophy className="h-16 w-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No rankings yet</p>
            <p className="text-sm">Write at least 2 essays to appear on the leaderboard</p>
          </div>
        ) : (
          <div className="space-y-2">
            {entries.map((entry, index) => (
              <motion.div key={entry.user_id}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`flex items-center gap-4 p-4 rounded-xl border ${getRankBg(index)}`}>
                <div className="w-8 flex items-center justify-center">
                  {getRankIcon(index)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate">
                    {entry.full_name || entry.email.split('@')[0]}
                  </p>
                  <p className="text-xs text-muted-foreground">{entry.essay_count} essays · Avg {entry.avg_score}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">{entry.composite_score}</p>
                  <p className="text-xs text-muted-foreground">score</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
