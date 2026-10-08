import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow, format } from 'date-fns';
import { Download, Flame, Loader2, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { adminRpc, daysUntil, LEVEL_LABEL, PLAN_LABEL, statusOf, type AdminUser, type UserStatus } from './adminApi';
import { UserSheet } from './UserSheet';

type Segment = 'all' | 'paid' | 'trial' | 'expiring' | 'expired' | 'free' | 'active7' | 'inactive' | 'never' | 'referrers';
type Sort = 'newest' | 'seen' | 'xp' | 'lessons' | 'name';
const PAGE = 50;

const STATUS_STYLE: Record<UserStatus, string> = { paid: 'bg-emerald-500/15 text-emerald-600', trial: 'bg-amber-500/15 text-amber-600', expired: 'bg-destructive/15 text-destructive', free: 'bg-secondary text-muted-foreground' };
const STATUS_TEXT: Record<UserStatus, string> = { paid: 'Pullik', trial: 'Bepul hafta', expired: "Muddati o'tgan", free: 'Free' };
const csv = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const seenMs = (u: AdminUser) => (u.last_seen ? +new Date(u.last_seen) : 0);

export function UsersTab() {
  const { data: users = [], isLoading, error, refetch } = useQuery({ queryKey: ['admin', 'users'], queryFn: () => adminRpc<AdminUser[]>('admin_users_list') });
  const [q, setQ] = useState('');
  const [segment, setSegment] = useState<Segment>('all');
  const [sort, setSort] = useState<Sort>('newest');
  const [shown, setShown] = useState(PAGE);
  const [openId, setOpenId] = useState<string | null>(null);

  const matchers: Record<Segment, (u: AdminUser, now: number) => boolean> = useMemo(() => ({
    all: () => true,
    paid: (u, n) => statusOf(u, n) === 'paid',
    trial: (u, n) => statusOf(u, n) === 'trial',
    expiring: (u, n) => statusOf(u, n) === 'paid' && !!u.expires_at && +new Date(u.expires_at) - n <= 7 * 864e5,
    expired: (u, n) => statusOf(u, n) === 'expired',
    free: (u, n) => statusOf(u, n) === 'free',
    active7: (u, n) => n - seenMs(u) <= 7 * 864e5,
    inactive: (u, n) => !!u.level && n - seenMs(u) > 7 * 864e5,
    never: (u) => !u.lessons_done,
    referrers: (u) => u.invited > 0,
  }), []);

  const now = Date.now();
  const counts = useMemo(() => Object.fromEntries((Object.keys(matchers) as Segment[]).map(s => [s, users.filter(u => matchers[s](u, now)).length])) as Record<Segment, number>, [users, matchers, now]);

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase().replace(/^[@#]/, '');
    const list = users.filter(u => matchers[segment](u, now) && (!needle || [u.email, u.full_name, u.username, u.public_id, u.phone, u.city, u.telegram_username, String(u.telegram_id ?? '')]
      .some(v => (v ?? '').toLowerCase().includes(needle))));
    return list.sort((a, b) => {
      switch (sort) {
        case 'seen': return seenMs(b) - seenMs(a);
        case 'xp': return (b.xp ?? 0) - (a.xp ?? 0);
        case 'lessons': return b.lessons_done - a.lessons_done;
        case 'name': return (a.full_name || a.email).localeCompare(b.full_name || b.email);
        default: return +new Date(b.created_at) - +new Date(a.created_at);
      }
    });
  }, [users, q, segment, sort, matchers, now]);

  const exportCsv = () => {
    const header = ['Ism', 'Email', 'Username', 'ID', 'Telefon', 'Shahar', 'Holat', 'Tarif', 'Tarif tugashi', 'Daraja', 'XP', 'Streak', 'Darslar', 'Writing', 'Speaking', "Ro'yxatdan o'tgan", "Oxirgi faollik"];
    const lines = rows.map(u => [u.full_name, u.email, u.username, u.public_id, u.phone, u.city, STATUS_TEXT[statusOf(u)], PLAN_LABEL[u.plan_type ?? 'free'], u.expires_at,
      u.level, u.xp, u.streak, u.lessons_done, u.essays, u.speaking, u.created_at, u.last_seen].map(csv).join(','));
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([[header.map(csv).join(','), ...lines].join('\n')], { type: 'text/csv;charset=utf-8' }));
    a.download = `scorify-users-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const SEGMENTS: [Segment, string][] = [['all', 'Hammasi'], ['paid', 'Pullik'], ['trial', 'Bepul hafta'], ['expiring', '7 kunda tugaydi'], ['expired', "Muddati o'tgan"],
    ['free', 'Free'], ['active7', 'Faol (7 kun)'], ['inactive', 'Faol emas (7+ kun)'], ['never', "Hech dars qilmagan"], ['referrers', 'Referal qilganlar']];

  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (error) return <p className="text-destructive text-sm">Ro'yxat yuklanmadi: {(error as Error).message}</p>;
  const open = users.find(u => u.user_id === openId) ?? null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Segmentlar">
        {SEGMENTS.map(([id, label]) => (
          <button key={id} type="button" onClick={() => { setSegment(id); setShown(PAGE); }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${segment === id ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:text-foreground'}`}>
            {label} <span className="opacity-70">{counts[id]}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={e => { setQ(e.target.value); setShown(PAGE); }} placeholder="Ism, email, @username, #ID, telefon, shahar…" className="pl-9" />
        </div>
        <Select value={sort} onValueChange={v => setSort(v as Sort)}>
          <SelectTrigger className="w-44 h-10 text-sm"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Yangilari birinchi</SelectItem>
            <SelectItem value="seen">Oxirgi faollik</SelectItem>
            <SelectItem value="xp">Ko'p XP</SelectItem>
            <SelectItem value="lessons">Ko'p dars</SelectItem>
            <SelectItem value="name">Ism (A–Z)</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2" onClick={exportCsv}><Download className="h-4 w-4" />CSV</Button>
        <Button variant="ghost" onClick={() => void refetch()}>Yangilash</Button>
      </div>
      <p className="text-xs text-muted-foreground">{rows.length} ta natija · jami {users.length}</p>

      <div className="space-y-2">
        {rows.slice(0, shown).map(u => {
          const status = statusOf(u, now);
          const left = daysUntil(u.expires_at);
          return (
            <button key={u.user_id} type="button" onClick={() => setOpenId(u.user_id)}
              className="w-full text-left glass-card p-3 sm:p-4 flex items-center gap-3 hover:border-primary/40 transition-colors">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center font-bold shrink-0">{(u.full_name || u.email || '?').slice(0, 1).toUpperCase()}</span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold truncate">{u.full_name || 'Ismsiz'}</span>
                  <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${STATUS_STYLE[status]}`}>
                    {STATUS_TEXT[status]}{status === 'paid' && left !== null ? ` · ${PLAN_LABEL[u.plan_type ?? '']} ${left}k` : ''}{status === 'trial' ? ` · ${daysUntil(u.trial_ends_at)}k` : ''}
                  </span>
                  {u.level && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">{LEVEL_LABEL[u.level] ?? u.level}</span>}
                  {u.is_admin && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground">admin</span>}
                </span>
                <span className="block text-xs text-muted-foreground truncate">{u.username ? `@${u.username} · ` : ''}{u.email}{u.public_id ? ` · #${u.public_id}` : ''}</span>
              </span>
              <span className="hidden sm:flex flex-col items-end text-xs text-muted-foreground shrink-0 gap-0.5">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center gap-0.5"><Zap className="h-3 w-3 text-amber-500" />{u.xp ?? 0}</span>
                  <span className="inline-flex items-center gap-0.5"><Flame className="h-3 w-3 text-orange-500" />{u.streak ?? 0}</span>
                  <span>{u.lessons_done} dars</span>
                </span>
                <span>{u.last_seen ? formatDistanceToNow(new Date(u.last_seen), { addSuffix: true }) : 'kirmagan'}</span>
              </span>
            </button>
          );
        })}
        {rows.length === 0 && <div className="text-center py-12 text-muted-foreground glass-card">Hech kim topilmadi</div>}
        {rows.length > shown && <Button variant="outline" className="w-full" onClick={() => setShown(shown + PAGE)}>Yana {Math.min(PAGE, rows.length - shown)} tasini ko'rsatish</Button>}
      </div>

      <UserSheet user={open} onClose={() => setOpenId(null)} onChanged={() => void refetch()} />
    </div>
  );
}
