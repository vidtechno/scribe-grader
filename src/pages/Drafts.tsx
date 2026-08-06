import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { LoadingScreen } from '@/components/LoadingScreen';
import { SEOHead } from '@/components/SEOHead';
import { ArrowLeft, PenLine, Mic, ChevronRight, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';

interface EssayDraft {
  id: string; task_type: string; topic: string; word_count: number; created_at: string; kind: 'essay';
}
interface SpeakingDraft {
  id: string; part: number | null; topic: string | null; created_at: string; kind: 'speaking';
}
type Draft = EssayDraft | SpeakingDraft;

export default function Drafts() {
  const { user } = useAuth();
  const [essays, setEssays] = useState<EssayDraft[]>([]);
  const [speaking, setSpeaking] = useState<SpeakingDraft[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'all' | 'essays' | 'speaking'>('all');

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      setLoading(true);
      const [{ data: e }, { data: s }] = await Promise.all([
        supabase.from('essays').select('id, task_type, topic, word_count, created_at').eq('status', 'draft').order('created_at', { ascending: false }),
        supabase.from('speaking_attempts').select('id, part, topic, created_at').eq('status', 'draft').order('created_at', { ascending: false }),
      ]);
      setEssays((e || []).map((x: any) => ({ ...x, kind: 'essay' as const })));
      setSpeaking((s || []).map((x: any) => ({ ...x, kind: 'speaking' as const })));
      setLoading(false);
    };
    load();
    const ch = supabase.channel('drafts-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'essays', filter: `user_id=eq.${user.id}` }, load)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'speaking_attempts', filter: `user_id=eq.${user.id}` }, load)
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [user]);

  const items: Draft[] = useMemo(() => {
    const merged: Draft[] = [
      ...(tab === 'speaking' ? [] : essays),
      ...(tab === 'essays' ? [] : speaking),
    ];
    return merged.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
  }, [essays, speaking, tab]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="My Drafts" description="Resume your saved IELTS writing and speaking drafts." path="/drafts" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="mb-6">
          <h1 className="text-2xl font-bold">Drafts</h1>
          <p className="text-muted-foreground text-sm">Resume unfinished writing and speaking practice</p>
        </div>

        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {([
            { k: 'all', label: `All (${essays.length + speaking.length})` },
            { k: 'essays', label: `Writing (${essays.length})` },
            { k: 'speaking', label: `Speaking (${speaking.length})` },
          ] as const).map(t => (
            <button key={t.k} onClick={() => setTab(t.k)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                tab === t.k ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/40 border-border text-muted-foreground hover:text-foreground'
              }`}>{t.label}</button>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No drafts saved yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((d, i) => {
              const isEssay = d.kind === 'essay';
              const href = isEssay ? `/exam?draft=${d.id}` : `/speaking?draft=${d.id}`;
              return (
                <motion.div key={`${d.kind}-${d.id}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                  <Link to={href} className="flex items-center justify-between p-4 rounded-lg glass-card-hover group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${isEssay ? 'bg-primary/10 text-primary' : 'bg-accent/15 text-accent-foreground'}`}>
                          {isEssay ? <><PenLine className="h-3 w-3" /> {(d as EssayDraft).task_type}</> : <><Mic className="h-3 w-3" /> Speaking{(d as SpeakingDraft).part ? ` · Part ${(d as SpeakingDraft).part}` : ''}</>}
                        </span>
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 inline-flex items-center gap-1"><PenLine className="h-3 w-3" /> Draft</span>
                        <span className="text-xs text-muted-foreground">{format(new Date(d.created_at), 'MMM d, yyyy · HH:mm')}</span>
                        {isEssay && <span className="text-xs text-muted-foreground">{(d as EssayDraft).word_count} words</span>}
                      </div>
                      <p className="text-sm truncate text-muted-foreground">{(isEssay ? (d as EssayDraft).topic : (d as SpeakingDraft).topic) || '—'}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}