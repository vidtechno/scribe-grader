import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mic, ChevronRight, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Attempt {
  id: string;
  topic: string;
  part: string;
  score: number | null;
  duration_seconds: number;
  created_at: string;
}

export default function SpeakingHistory() {
  const { user } = useAuth();
  const [items, setItems] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from('speaking_attempts')
        .select('id, topic, part, score, duration_seconds, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setItems((data as any) || []);
      setLoading(false);
    })();
  }, [user]);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Speaking History" description="All your IELTS Speaking attempts" path="/speaking-history" />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Speaking History</h1>
            <p className="text-sm text-muted-foreground">{items.length} total attempt{items.length === 1 ? '' : 's'}</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-2">{[1,2,3].map(i => <div key={i} className="h-16 bg-secondary/40 rounded-lg animate-pulse" />)}</div>
        ) : items.length === 0 ? (
          <div className="glass-card p-10 text-center">
            <Mic className="h-12 w-12 mx-auto mb-3 opacity-40" />
            <p className="text-muted-foreground mb-4">No speaking attempts yet</p>
            <Link to="/speaking"><Button variant="glow">Start your first attempt</Button></Link>
          </div>
        ) : (
          <div className="space-y-2">
            {items.map(a => (
              <Link key={a.id} to={`/speaking-result/${a.id}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold ${
                  (a.score ?? 0) >= 7 ? 'bg-primary/15 text-primary' : (a.score ?? 0) >= 5 ? 'bg-yellow-500/15 text-yellow-600' : 'bg-destructive/15 text-destructive'
                }`}>
                  {a.score ?? '—'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase">{a.part}</span>
                    <span className="text-[10px] text-muted-foreground">{format(new Date(a.created_at), 'MMM d, yyyy')}</span>
                    <span className="text-[10px] text-muted-foreground inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {Math.floor(a.duration_seconds/60)}:{(a.duration_seconds%60).toString().padStart(2,'0')}
                    </span>
                  </div>
                  <p className="text-sm truncate text-muted-foreground">{a.topic}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}