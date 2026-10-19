import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send, Trash2, Loader2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { uz as uzLocale } from 'date-fns/locale';
import { useT } from '@/i18n';
import { toast } from 'sonner';

interface Comment {
  id: string;
  essay_id: string;
  user_id: string;
  content: string;
  created_at: string;
  author_name?: string | null;
}

interface Props { essayId: string }

export function EssayComments({ essayId }: Props) {
  const { user } = useAuth();
  const { t, lang } = useT();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState('');
  const [posting, setPosting] = useState(false);

  const fetchComments = useCallback(async () => {
    setLoading(true);
    const { data: rows } = await supabase
      .from('essay_comments')
      .select('*')
      .eq('essay_id', essayId)
      .order('created_at', { ascending: false });
    const list = (rows as any[]) || [];
    const userIds = Array.from(new Set(list.map(c => c.user_id)));
    const names: Record<string, string> = {};
    if (userIds.length) {
      const { data: profs } = await supabase
        .from('profiles')
        .select('user_id, full_name, email')
        .in('user_id', userIds);
      (profs as any[] || []).forEach(p => {
        names[p.user_id] = p.full_name || p.email?.split('@')[0] || t('cm.user');
      });
    }
    setComments(list.map(c => ({ ...c, author_name: names[c.user_id] || t('cm.user') })));
    setLoading(false);
  }, [essayId, t]);

  useEffect(() => { fetchComments(); }, [fetchComments]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !input.trim() || posting) return;
    setPosting(true);
    const { error } = await supabase
      .from('essay_comments')
      .insert({ essay_id: essayId, user_id: user.id, content: input.trim() });
    setPosting(false);
    if (error) { toast.error(t('cm.postFailed')); return; }
    setInput('');
    fetchComments();
  };

  const remove = async (id: string) => {
    const { error } = await supabase.from('essay_comments').delete().eq('id', id);
    if (error) { toast.error(t('cm.deleteFailed')); return; }
    setComments(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="glass-card p-6 mt-8 animate-fade-in">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-primary" /> {t('cm.title', { n: comments.length })}
      </h2>

      {user ? (
        <form onSubmit={submit} className="mb-6 flex flex-col gap-2">
          <Textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={t('cm.placeholder')}
            rows={2}
            maxLength={2000}
          />
          <div className="flex justify-end">
            <Button type="submit" size="sm" disabled={posting || !input.trim()} className="gap-2">
              {posting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {t('cm.post')}
            </Button>
          </div>
        </form>
      ) : (
        <p className="text-sm text-muted-foreground mb-6">{t('cm.signIn')}</p>
      )}

      {loading ? (
        <div className="text-center py-6 text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin mx-auto" /></div>
      ) : comments.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-6">{t('cm.none')}</p>
      ) : (
        <div className="space-y-3">
          {comments.map(c => (
            <div key={c.id} className="p-3 rounded-lg bg-secondary/30 border border-border/50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{c.author_name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {formatDistanceToNow(new Date(c.created_at), { addSuffix: true, ...(lang === 'uz' ? { locale: uzLocale } : {}) })}
                  </span>
                  {user?.id === c.user_id && (
                    <button onClick={() => remove(c.id)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">{c.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}