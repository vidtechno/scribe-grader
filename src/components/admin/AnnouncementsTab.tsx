import { useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Loader2, Megaphone, Plus, ToggleLeft, ToggleRight, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Announcement { id: string; type: string; title: string; content: string; status: string; created_at: string; view_count?: number }

export function AnnouncementsTab() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [draft, setDraft] = useState({ type: 'alert', title: '', content: '' });
  const [creating, setCreating] = useState(false);

  const load = useCallback(async () => {
    const [{ data: anns }, { data: views }] = await Promise.all([
      supabase.from('announcements').select('*').order('created_at', { ascending: false }),
      supabase.from('announcement_views').select('announcement_id'),
    ]);
    const counts: Record<string, number> = {};
    (views || []).forEach((v: { announcement_id: string }) => { counts[v.announcement_id] = (counts[v.announcement_id] || 0) + 1; });
    setItems(((anns || []) as Announcement[]).map(a => ({ ...a, view_count: counts[a.id] || 0 })));
  }, []);
  useEffect(() => { void load(); }, [load]);

  const create = async () => {
    if (!draft.title.trim() || !draft.content.trim()) { toast.error('Sarlavha va matnni yozing'); return; }
    setCreating(true);
    const { error } = await supabase.from('announcements').insert({ type: draft.type, title: draft.title.trim(), content: draft.content.trim(), status: 'active' });
    setCreating(false);
    if (error) { toast.error("E'lon yaratilmadi"); return; }
    toast.success("E'lon yaratildi");
    setDraft({ type: 'alert', title: '', content: '' });
    void load();
  };
  const toggle = async (a: Announcement) => {
    const status = a.status === 'active' ? 'inactive' : 'active';
    await supabase.from('announcements').update({ status }).eq('id', a.id);
    setItems(prev => prev.map(x => x.id === a.id ? { ...x, status } : x));
  };
  const remove = async (id: string) => {
    if (!window.confirm("E'lon o'chirilsinmi?")) return;
    await supabase.from('announcements').delete().eq('id', id);
    setItems(prev => prev.filter(x => x.id !== id));
  };

  return (
    <div className="space-y-6">
      <section className="glass-card p-5">
        <h2 className="font-bold mb-4 flex items-center gap-2"><Plus className="h-4 w-4 text-primary" />Yangi e'lon</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Ko'rinishi</label>
            <Select value={draft.type} onValueChange={v => setDraft(p => ({ ...p, type: v }))}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent><SelectItem value="alert">Banner (yuqorida)</SelectItem><SelectItem value="modal">Oyna (popup)</SelectItem></SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Sarlavha</label>
            <Input value={draft.title} onChange={e => setDraft(p => ({ ...p, title: e.target.value }))} placeholder="Sarlavha…" />
          </div>
        </div>
        <label className="text-sm text-muted-foreground mb-1 block">Matn</label>
        <Textarea value={draft.content} onChange={e => setDraft(p => ({ ...p, content: e.target.value }))} placeholder="E'lon matni…" rows={3} className="mb-4" />
        <Button onClick={() => void create()} disabled={creating} className="gap-2">{creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}Yaratish</Button>
      </section>

      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground glass-card"><Megaphone className="h-12 w-12 mx-auto mb-3 opacity-30" /><p>Hozircha e'lon yo'q</p></div>
        ) : items.map(a => (
          <div key={a.id} className="glass-card p-4 flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{a.type === 'alert' ? 'Banner' : 'Oyna'}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${a.status === 'active' ? 'bg-green-500/10 text-green-600' : 'bg-secondary text-muted-foreground'}`}>{a.status === 'active' ? 'Faol' : "O'chirilgan"}</span>
                <span className="text-xs text-muted-foreground">{a.view_count || 0} kishi ko'rdi</span>
              </div>
              <p className="font-medium text-sm">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{a.content}</p>
              <p className="text-xs text-muted-foreground mt-1">{format(new Date(a.created_at), 'd MMM yyyy, HH:mm')}</p>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => void toggle(a)} title={a.status === 'active' ? "O'chirish" : 'Yoqish'}>
                {a.status === 'active' ? <ToggleRight className="h-4 w-4 text-green-600" /> : <ToggleLeft className="h-4 w-4 text-muted-foreground" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => void remove(a.id)}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
