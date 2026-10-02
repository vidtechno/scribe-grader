import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ExternalLink, Eye, FileText, Loader2, Pencil, Plus, Search, Trash2, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';

type Row = { id: string; slug: string; title: string; lang: string; status: string; published_at: string | null; updated_at: string; tags: string[]; cover_image_url: string | null };
type Stat = { post_id: string; views: number; unique_visitors: number; views_7d: number; views_30d: number };
type Day = { day: string; views: number; visitors: number };

export function BlogManager() {
  const [rows, setRows] = useState<Row[]>([]);
  const [stats, setStats] = useState<Record<string, Stat>>({});
  const [daily, setDaily] = useState<Day[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');

  const load = useCallback(async () => {
    const [p, s, d] = await Promise.all([
      supabase.from('blog_posts').select('id,slug,title,lang,status,published_at,updated_at,tags,cover_image_url').order('updated_at', { ascending: false }),
      supabase.rpc('admin_blog_stats'),
      supabase.rpc('admin_blog_daily', { _days: 30 }),
    ]);
    setRows((p.data || []) as Row[]);
    setStats(Object.fromEntries((s.data || []).map(x => [x.post_id, x])));
    setDaily((d.data || []).map(x => ({ ...x, day: format(new Date(x.day), 'd MMM') })));
    setLoading(false);
  }, []);
  useEffect(() => { void load(); }, [load]);

  const remove = async (r: Row) => {
    if (!window.confirm(`Delete "${r.title}" permanently?`)) return;
    const { error } = await supabase.from('blog_posts').delete().eq('id', r.id);
    if (error) { toast.error(error.message); return; }
    toast.success('Post deleted'); void load();
  };

  const filtered = useMemo(() => rows.filter(r => !q || r.title.toLowerCase().includes(q.toLowerCase()) || r.tags.some(t => t.includes(q.toLowerCase()))), [rows, q]);
  const published = rows.filter(r => r.status === 'published').length;
  const views30 = Object.values(stats).reduce((t, s) => t + Number(s.views_30d), 0);
  const total = Object.values(stats).reduce((t, s) => t + Number(s.views), 0);
  const top = Object.values(stats).sort((a, b) => Number(b.views_30d) - Number(a.views_30d))[0];
  const topRow = top ? rows.find(r => r.id === top.post_id) : undefined;

  if (loading) return <div className="glass-card p-10 grid place-items-center"><Loader2 className="h-5 w-5 animate-spin text-primary" /></div>;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: FileText, label: 'Posts', value: `${published} published / ${rows.length - published} drafts` },
          { icon: Eye, label: 'Views, last 30 days', value: views30 },
          { icon: TrendingUp, label: 'Views, all time', value: total },
          { icon: TrendingUp, label: 'Top post (30d)', value: topRow ? topRow.title : '—' },
        ].map(c => <div key={c.label} className="glass-card p-4"><c.icon className="h-5 w-5 text-primary mb-2" /><p className="text-lg font-bold leading-tight line-clamp-2">{c.value}</p><p className="text-xs text-muted-foreground mt-1">{c.label}</p></div>)}
      </div>

      <div className="glass-card p-5">
        <h3 className="font-semibold mb-3 text-sm">Blog views, last 30 days</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={daily} margin={{ left: -20, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={11} interval={4} />
              <YAxis allowDecimals={false} stroke="hsl(var(--muted-foreground))" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
              <Area type="monotone" dataKey="views" name="Views" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / .15)" strokeWidth={2} />
              <Area type="monotone" dataKey="visitors" name="Readers" stroke="#10b981" fill="#10b98122" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-card p-5">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="relative flex-1 min-w-[200px]"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search posts or tags…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <Link to="/admin/blog/new"><Button variant="glow" className="gap-2"><Plus className="h-4 w-4" />New post</Button></Link>
        </div>
        {filtered.length === 0 ? <p className="text-center text-sm text-muted-foreground py-10">No posts yet. Write your first one!</p> : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-muted-foreground border-b">
                <th className="py-2 pr-3">Post</th><th className="py-2 pr-3">Status</th><th className="py-2 pr-3 text-right">Views</th>
                <th className="py-2 pr-3 text-right hidden md:table-cell">Readers</th><th className="py-2 pr-3 text-right hidden md:table-cell">7d</th><th className="py-2 pr-3 text-right hidden md:table-cell">30d</th><th className="py-2 text-right">Actions</th></tr></thead>
              <tbody>
                {filtered.map(r => { const s = stats[r.id]; return (
                  <tr key={r.id} className="border-b border-border/50 hover:bg-secondary/30">
                    <td className="py-3 pr-3"><div className="flex items-center gap-3">
                      {r.cover_image_url ? <img src={r.cover_image_url} alt="" className="h-10 w-16 rounded-md object-cover" /> : <div className="h-10 w-16 rounded-md bg-secondary" />}
                      <div className="min-w-0"><Link to={`/admin/blog/${r.id}`} className="font-medium hover:text-primary line-clamp-1">{r.title}</Link>
                        <p className="text-xs text-muted-foreground">{r.lang.toUpperCase()} · /{r.slug} · edited {formatDistanceToNow(new Date(r.updated_at), { addSuffix: true })}</p></div></div></td>
                    <td className="py-3 pr-3"><span className={`text-xs px-2 py-0.5 rounded-full ${r.status === 'published' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-secondary text-muted-foreground'}`}>{r.status}</span></td>
                    <td className="py-3 pr-3 text-right font-medium">{s?.views ?? 0}</td>
                    <td className="py-3 pr-3 text-right hidden md:table-cell">{s?.unique_visitors ?? 0}</td>
                    <td className="py-3 pr-3 text-right hidden md:table-cell">{s?.views_7d ?? 0}</td>
                    <td className="py-3 pr-3 text-right hidden md:table-cell">{s?.views_30d ?? 0}</td>
                    <td className="py-3 text-right whitespace-nowrap">
                      <Link to={`/admin/blog/${r.id}`}><Button variant="ghost" size="icon" className="h-8 w-8" title="Edit"><Pencil className="h-3.5 w-3.5" /></Button></Link>
                      {r.status === 'published' && <a href={`/blog/${r.slug}`} target="_blank" rel="noopener noreferrer"><Button variant="ghost" size="icon" className="h-8 w-8" title="View"><ExternalLink className="h-3.5 w-3.5" /></Button></a>}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" title="Delete" onClick={() => remove(r)}><Trash2 className="h-3.5 w-3.5" /></Button>
                    </td></tr>); })}
              </tbody>
            </table>
          </div>)}
      </div>
    </div>
  );
}
