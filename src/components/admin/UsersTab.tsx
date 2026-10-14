import { useEffect, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { BarChart3, ChevronLeft, ChevronRight, Download, Flame, ListFilter, Loader2, Search, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { adminRpc, agoUz, daysUntil, isOnline, LEVEL_LABEL, pageRange, PLAN_LABEL, seenMs, statusOf, type AdminUser, type UserStatus } from './adminApi';
import { UserSheet } from './UserSheet';
import { UserStatsPanel } from './UserStatsPanel';

type Segment = 'all' | 'online' | 'recent' | 'paid' | 'trial' | 'expiring' | 'expired' | 'free' | 'active7' | 'inactive' | 'never' | 'referrers';
type Sort = 'newest' | 'seen' | 'xp' | 'lessons' | 'name';
type View = 'list' | 'stats';
/** Twenty users on a page. */
export const PAGE = 20;

const STATUS_STYLE: Record<UserStatus, string> = { paid: 'bg-emerald-500/15 text-emerald-600', trial: 'bg-amber-500/15 text-amber-600', expired: 'bg-destructive/15 text-destructive', free: 'bg-secondary text-muted-foreground' };
const STATUS_TEXT: Record<UserStatus, string> = { paid: 'Pullik', trial: 'Bepul hafta', expired: "Muddati o'tgan", free: 'Free' };
const csv = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;

export function UsersTab() {
  const { data: users = [], isLoading, error, refetch } = useQuery({ queryKey: ['admin', 'users'], queryFn: () => adminRpc<AdminUser[]>('admin_users_list'), refetchInterval: 60_000 });
  const [q, setQ] = useState('');
  const [segment, setSegment] = useState<Segment>('all');
  // Who is on the site now comes first; then everybody by the time they were last here.
  const [sort, setSort] = useState<Sort>('seen');
  const [page, setPage] = useState(1);
  const [view, setView] = useState<View>('list');
  const [openId, setOpenId] = useState<string | null>(null);

  const matchers: Record<Segment, (u: AdminUser, now: number) => boolean> = useMemo(() => ({
    all: () => true,
    online: (u, n) => isOnline(u, n),
    recent: (u) => seenMs(u) > 0,
    paid: (u, n) => statusOf(u, n) === 'paid',
    trial: (u, n) => statusOf(u, n) === 'trial',
    expiring: (u, n) => statusOf(u, n) === 'paid' && !!u.expires_at && +new Date(u.expires_at) - n <= 7 * 864e5,
    expired: (u, n) => statusOf(u, n) === 'expired',
    free: (u, n) => statusOf(u, n) === 'free',
    active7: (u, n) => n - seenMs(u) <= 7 * 864e5 && seenMs(u) > 0,
    inactive: (u, n) => !!u.level && n - seenMs(u) > 7 * 864e5,
    never: (u) => !u.lessons_done,
    referrers: (u) => u.invited > 0,
  }), []);

  // "2 soat oldin" and the online dots stay fresh without a reload.
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = window.setInterval(() => setNow(Date.now()), 30_000); return () => window.clearInterval(t); }, []);
  const counts = useMemo(() => Object.fromEntries((Object.keys(matchers) as Segment[]).map(s => [s, users.filter(u => matchers[s](u, now)).length])) as Record<Segment, number>, [users, matchers, now]);

  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase().replace(/^[@#]/, '');
    const list = users.filter(u => matchers[segment](u, now) && (!needle || [u.email, u.full_name, u.username, u.public_id, u.phone, u.city, u.telegram_username, String(u.telegram_id ?? '')]
      .some(v => (v ?? '').toLowerCase().includes(needle))));
    return list.sort((a, b) => {
      switch (sort) {
        case 'seen': return Number(isOnline(b, now)) - Number(isOnline(a, now)) || seenMs(b) - seenMs(a);
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

  const SEGMENTS: [Segment, string][] = [['all', 'Hammasi'], ['online', 'Hozir onlayn'], ['recent', 'Oxirgi onlayn'], ['paid', 'Pullik'], ['trial', 'Bepul hafta'], ['expiring', '7 kunda tugaydi'], ['expired', "Muddati o'tgan"],
    ['free', 'Free'], ['active7', 'Faol (7 kun)'], ['inactive', 'Faol emas (7+ kun)'], ['never', "Hech dars qilmagan"], ['referrers', 'Referal qilganlar']];

  const pages = Math.max(1, Math.ceil(rows.length / PAGE));
  const current = Math.min(page, pages);
  const first = (current - 1) * PAGE;
  const onlineNow = counts.online;
  const pick = (id: Segment) => { setSegment(id); setPage(1); if (id === 'online' || id === 'recent') setSort('seen'); };

  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (error) return <p className="text-destructive text-sm">Ro'yxat yuklanmadi: {(error as Error).message}</p>;
  const open = users.find(u => u.user_id === openId) ?? null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl border border-border p-1 bg-card" role="tablist" aria-label="Ko'rinish">
          {([['list', "Ro'yxat", Users], ['stats', 'Statistika', BarChart3]] as const).map(([id, label, Icon]) => (
            <button key={id} type="button" role="tab" aria-selected={view === id} onClick={() => setView(id)}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors ${view === id ? 'bg-primary text-primary-foreground shadow' : 'text-muted-foreground hover:text-foreground'}`}><Icon className="h-4 w-4" />{label}</button>
          ))}
        </div>
        <button type="button" onClick={() => { setView('list'); pick('online'); }} title="Hozir saytda bo'lganlarni ko'rsatish"
          className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${onlineNow ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : 'border-border text-muted-foreground'}`}>
          <span className="relative flex h-2.5 w-2.5">{onlineNow > 0 && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />}<span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${onlineNow ? 'bg-emerald-500' : 'bg-muted-foreground/50'}`} /></span>
          {onlineNow ? `${onlineNow} kishi hozir onlayn` : 'Hozir hech kim onlayn emas'}
        </button>
      </div>

      {view === 'stats' ? <UserStatsPanel /> : (
        <>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Segmentlar">
            {SEGMENTS.map(([id, label]) => (
              <button key={id} type="button" onClick={() => pick(id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${segment === id ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:text-foreground'}`}>
                {id === 'online' && <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 mr-1.5 align-middle" />}{label} <span className="opacity-70">{counts[id]}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative flex-1 min-w-[220px]">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={e => { setQ(e.target.value); setPage(1); }} placeholder="Ism, email, @username, #ID, telefon, shahar…" className="pl-9" />
            </div>
            <Select value={sort} onValueChange={v => { setSort(v as Sort); setPage(1); }}>
              <SelectTrigger className="w-52 h-10 text-sm gap-2"><ListFilter className="h-4 w-4 shrink-0 opacity-60" /><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="seen">Oxirgi onlayn</SelectItem>
                <SelectItem value="newest">Yangilari birinchi</SelectItem>
                <SelectItem value="xp">Ko'p XP</SelectItem>
                <SelectItem value="lessons">Ko'p dars</SelectItem>
                <SelectItem value="name">Ism (A–Z)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2" onClick={exportCsv}><Download className="h-4 w-4" />CSV</Button>
            <Button variant="ghost" onClick={() => void refetch()}>Yangilash</Button>
          </div>
          <p className="text-xs text-muted-foreground">{rows.length ? `${first + 1}–${Math.min(first + PAGE, rows.length)}` : '0'} / {rows.length} ta natija · jami {users.length}</p>

          <div className="space-y-2">
            {rows.slice(first, first + PAGE).map(u => {
              const status = statusOf(u, now);
              const left = daysUntil(u.expires_at);
              const online = isOnline(u, now);
              const seen = seenMs(u);
              return (
                <button key={u.user_id} type="button" onClick={() => setOpenId(u.user_id)}
                  className="w-full text-left glass-card p-3 sm:p-4 flex items-center gap-3 hover:border-primary/40 transition-colors">
                  <span className="relative shrink-0">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">{(u.full_name || u.email || '?').slice(0, 1).toUpperCase()}</span>
                    {online && <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-background" aria-label="Onlayn" />}
                  </span>
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
                    <span className="sm:hidden mt-0.5 flex items-center gap-1.5 text-xs">
                      <LastSeen online={online} seen={seen} now={now} />
                      <span className="text-muted-foreground">· {u.lessons_done} dars</span>
                    </span>
                  </span>
                  <span className="hidden sm:flex flex-col items-end text-xs text-muted-foreground shrink-0 gap-1">
                    <LastSeen online={online} seen={seen} now={now} strong />
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-flex items-center gap-0.5"><Zap className="h-3 w-3 text-amber-500" />{u.xp ?? 0}</span>
                      <span className="inline-flex items-center gap-0.5"><Flame className="h-3 w-3 text-orange-500" />{u.streak ?? 0}</span>
                      <span>{u.lessons_done} dars</span>
                    </span>
                  </span>
                </button>
              );
            })}
            {rows.length === 0 && <div className="text-center py-12 text-muted-foreground glass-card">Hech kim topilmadi</div>}
          </div>

          {pages > 1 && <Pager page={current} pages={pages} onPage={(n) => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />}
        </>
      )}

      <UserSheet user={open} onClose={() => setOpenId(null)} onChanged={() => void refetch()} />
    </div>
  );
}

/** "Hozir onlayn" in green, otherwise how long ago the person was last on the site ("Ali · 2 soat oldin"). */
function LastSeen({ online, seen, now, strong = false }: { online: boolean; seen: number; now: number; strong?: boolean }) {
  if (online) return <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />Hozir onlayn</span>;
  return <span className={strong ? 'font-medium text-foreground/80' : 'text-muted-foreground'}>{agoUz(seen, now)}</span>;
}

/** Previous / numbered pages / next. */
export function Pager({ page, pages, onPage }: { page: number; pages: number; onPage: (n: number) => void }) {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-1.5 pt-2" aria-label="Sahifalar">
      <Button variant="outline" size="sm" className="gap-1" disabled={page <= 1} onClick={() => onPage(page - 1)}><ChevronLeft className="h-4 w-4" />Oldingi</Button>
      {pageRange(page, pages).map((n, i) => n === '…'
        ? <span key={`gap-${i}`} className="px-1 text-muted-foreground">…</span>
        : <button key={n} type="button" aria-current={n === page ? 'page' : undefined} onClick={() => onPage(n)}
            className={`h-9 min-w-9 px-2 rounded-lg text-sm font-semibold border transition-colors ${n === page ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:text-foreground hover:border-primary/40'}`}>{n}</button>)}
      <Button variant="outline" size="sm" className="gap-1" disabled={page >= pages} onClick={() => onPage(page + 1)}>Keyingi<ChevronRight className="h-4 w-4" /></Button>
    </nav>
  );
}
