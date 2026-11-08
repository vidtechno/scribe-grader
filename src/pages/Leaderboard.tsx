import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Crown, Flame, Info, Layers3, Search, Trophy, Users, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import { Avatar } from '@/features/social/components';
import { useLeaderboard } from '@/features/social/api';
import { UserAvatar } from '@/features/social/avatars';
import { courseMap, useLearningState } from '@/features/learn/api';

type Scope = 'global' | 'friends';
type Period = 'week' | 'all';

function RankBadge({ rank }: { rank: number }) {
  if (rank <= 3) return <span className={`grid h-8 w-8 place-items-center rounded-full border-2 text-sm font-extrabold shadow-sm ${rank === 1 ? 'border-amber-400 bg-gradient-to-br from-amber-100 to-amber-400 text-amber-950' : rank === 2 ? 'border-slate-400 bg-gradient-to-br from-slate-100 to-slate-400 text-slate-800' : 'border-orange-400 bg-gradient-to-br from-orange-100 to-orange-300 text-orange-950'}`}>{rank}</span>;
  return <span className="text-sm font-bold text-muted-foreground">{rank}</span>;
}

export default function Leaderboard() {
  const { t, lang } = useT();
  const [scope, setScope] = useState<Scope>('global');
  const [period, setPeriod] = useState<Period>('week');
  const { data, isLoading, isError } = useLeaderboard(scope, period);
  const { data: learning } = useLearningState();
  const rows = data?.rows ?? [];
  const podium = rows.slice(0, 3);
  const remaining = rows;
  const ahead = data?.me ? rows.find(r => r.rank === data.me!.rank - 1) : undefined;
  const gap = ahead && data?.me ? Math.max(1, ahead.xp - data.me.xp + 1) : null;
  const map = courseMap(learning);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={t('lb.seoTitle')} description={t('lb.seoDesc')} path="/leaderboard" noindex />
      <Navbar />
      <main className="leaderboard-page pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="relative mb-6 flex items-center justify-between gap-3 rounded-3xl border border-primary/10 bg-gradient-to-r from-primary/[0.06] via-card to-card p-5 sm:p-6">
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10"><Trophy className="h-6 w-6 text-primary" /></div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-primary">Scorify League</p>
                <h1 className="text-2xl sm:text-3xl font-extrabold">{lang === 'uz' ? 'Har bir qadam hisobda' : 'Every step counts'}</h1>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{t('lb.subtitle')}</p>
              </div>
            </div>
            <Link to="/profile#people" className="relative hidden sm:block"><Button variant="outline" size="sm" className="gap-1.5 rounded-full bg-card"><Search className="h-4 w-4" />{t('lb.friends')}</Button></Link>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 mb-4 rounded-2xl border bg-card p-1.5 shadow-sm">
            <div className="grid grid-cols-2 rounded-xl bg-secondary/60 p-0.5">
              {([['week', t('lb.week')], ['all', t('lb.all')]] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setPeriod(id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg ${period === id ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 rounded-xl bg-secondary/60 p-0.5">
              {([['global', t('lb.everyone')], ['friends', t('lb.myFriends')]] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setScope(id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg ${scope === id ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
          </div>

          {data?.me_hidden && (
            <p className="text-xs text-muted-foreground mb-4">{t('lb.hidden')}</p>
          )}
        </motion.div>

        {isLoading ? (
          <div className="space-y-2">{[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-16 bg-secondary/50 rounded-xl animate-pulse" />)}</div>
        ) : isError ? (
          <p className="text-center py-12 text-muted-foreground">{t('lb.error')}</p>
        ) : rows.length === 0 ? (
          <div className="text-center py-14 text-muted-foreground">
            {scope === 'friends' ? <Users className="h-14 w-14 mx-auto mb-3 opacity-30" /> : <Crown className="h-14 w-14 mx-auto mb-3 opacity-30" />}
            <p className="text-lg font-medium">{scope === 'friends' ? t('lb.noFriends') : period === 'week' ? t('lb.noOneWeek') : t('lb.noRanking')}</p>
            <p className="text-sm mt-1">{scope === 'friends' ? t('lb.followHint') : t('lb.firstHint')}</p>
            {scope === 'friends' && <Link to="/profile#people"><Button className="mt-4">{t('lb.findPeople')}</Button></Link>}
          </div>
        ) : (
          <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(280px,1fr)]">
            <div className="min-w-0">
            {podium.length > 0 && <section className="relative mb-5 overflow-hidden rounded-3xl border border-border/60 bg-card p-4 sm:p-6"><h2 className="text-lg font-extrabold">{period === 'week' ? (lang === 'uz' ? 'Haftaning yetakchilari' : 'This week’s leaders') : (lang === 'uz' ? 'Eng faol o‘quvchilar' : 'All-time leaders')}</h2><div className="relative mt-8 grid grid-cols-3 items-end gap-2 pt-4 sm:gap-4"><span aria-hidden className="pointer-events-none absolute -left-[10%] -right-[10%] top-16 h-44 rounded-[50%] border-t border-primary/20 bg-gradient-to-b from-primary/[0.035] to-transparent" />
              {podium.map((r) => <Link key={r.public_id} to={`/u/${r.username ?? r.public_id}`} className={`relative min-w-0 pb-3 text-center transition-transform hover:-translate-y-1 ${r.rank === 1 ? 'col-start-2 row-start-1 -translate-y-3' : r.rank === 2 ? 'col-start-1 row-start-1' : 'col-start-3 row-start-1'}`}>
                <div className="relative mx-auto mb-5 w-fit"><div className={`rounded-full border-[3px] p-1 shadow-lg ${r.rank === 1 ? 'border-amber-400 shadow-amber-400/10 sm:p-2' : r.rank === 2 ? 'border-slate-300' : 'border-orange-300'}`}><UserAvatar name={r.name} avatar={r.avatar} size="lg" /></div><span className="absolute -bottom-4 left-1/2 -translate-x-1/2"><RankBadge rank={r.rank} /></span>{r.rank === 1 && <><span aria-hidden className="absolute -left-5 top-4 text-3xl text-primary/30">❧</span><span aria-hidden className="absolute -right-5 top-4 -scale-x-100 text-3xl text-primary/30">❧</span></>}</div><p className="truncate text-xs font-extrabold sm:text-base" title={r.name}>{r.name}</p>{r.username ? <p className="truncate text-[10px] text-muted-foreground">@{r.username}</p> : null}<p className="mt-1 text-sm font-semibold text-muted-foreground">{r.xp.toLocaleString()} XP</p>
              </Link>)}
            </div></section>}
            <div className="ranking-table overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
            <h2 className="px-5 pb-3 pt-5 text-lg font-extrabold">{t('lb.title')}</h2>
            <div className="hidden grid-cols-[28px_1fr_90px] gap-3 border-b bg-secondary/25 px-4 py-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground lg:grid"><span>#</span><span>{lang === 'uz' ? 'O‘quvchi' : 'Learner'}</span><span className="text-right">XP</span></div>
            {remaining.map((r, i) => (
              <motion.div key={r.public_id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: Math.min(i, 12) * 0.025 }}
                className={`flex items-center gap-2.5 sm:gap-3 border-b border-border/40 px-3 py-4 sm:px-5 last:border-0 transition-colors ${r.is_me ? 'bg-primary/[0.07] border-l-2 border-l-primary' : 'hover:bg-secondary/35'}`}>
                <div className="w-7 grid place-items-center"><RankBadge rank={r.rank} /></div>
                <Link to={`/u/${r.username ?? r.public_id}`} className="flex flex-1 min-w-0 items-center gap-3">
                  <Avatar name={r.name} avatar={r.avatar} />
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-sm">{r.name}{r.is_me && t('lb.you')}</span>
                    {r.username ? <span className="block truncate text-[10px] text-muted-foreground">@{r.username}</span> : null}
                  </span>
                </Link>
                <div className="text-right"><p className="font-bold text-primary">{r.xp}</p><p className="text-[10px] text-muted-foreground">XP</p></div>
              </motion.div>
            ))}
            {remaining.length === 0 && podium.length > 0 ? <p className="p-4 text-center text-xs text-muted-foreground">{t('lb.footer')}</p> : null}
            </div>
            </div>
            <aside className="space-y-5 xl:sticky xl:top-24">
              {data?.me && !data.me_hidden && <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eb0035] via-[#d0002b] to-[#a90028] p-6 text-white shadow-xl shadow-primary/10"><svg aria-hidden viewBox="0 0 300 130" className="pointer-events-none absolute -right-8 top-8 h-40 w-64 text-white/20"><path d="M0 120 Q40 20 100 70 T200 45 T300 0" fill="none" stroke="currentColor" strokeWidth="2" /></svg><p className="relative text-xs font-bold uppercase tracking-wider text-white/80">{lang === 'uz' ? 'Sizning natijangiz' : 'Your position'}</p><p className="relative mt-5 text-6xl font-black">#{data.me.rank}</p><p className="relative mt-4 text-2xl font-extrabold">{data.me.xp.toLocaleString()} XP</p><div className="relative mt-5 border-t border-white/25 pt-4"><p className="text-sm text-white/90">{gap !== null ? (lang === 'uz' ? `${data.me.rank - 1}-o‘ringa chiqish uchun yana ${gap} XP` : `${gap} XP to reach #${data.me.rank - 1}`) : data.me.rank === 1 ? (lang === 'uz' ? 'Siz yetakchisiz. Davom eting!' : 'You’re leading. Keep going!') : (lang === 'uz' ? 'Har bir dars sizni oldinga olib boradi.' : 'Every lesson takes you further.')}</p>{ahead && <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/25"><div className="h-full rounded-full bg-white" style={{ width: `${Math.min(100, data.me.xp / Math.max(1, ahead.xp + 1) * 100)}%` }} /></div>}</div><Link to="/learn" className="relative mt-6 flex items-center justify-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-extrabold text-red-600 hover:bg-white/90">{lang === 'uz' ? 'Darsni davom ettirish' : 'Continue learning'}<ArrowRight className="h-4 w-4" /></Link></section>}
              {learning?.profile && <section className="rounded-3xl border border-border/60 bg-card p-5"><h2 className="text-lg font-extrabold">{lang === 'uz' ? 'Kichik qadam. Yangi marralar.' : 'Small steps. New milestones.'}</h2><p className="mt-1 text-xs text-muted-foreground">{lang === 'uz' ? 'O‘rganish yo‘lingiz' : 'Your learning journey'}</p><div className="mt-6 grid grid-cols-3 divide-x divide-border/60">{[{ icon: Flame, value: learning.streak_info?.current ?? learning.streak, label: lang === 'uz' ? 'kunlik streak' : 'day streak' }, { icon: BookOpen, value: map.doneCount, label: lang === 'uz' ? 'dars yakunlandi' : 'lessons completed' }, { icon: Layers3, value: map.wordCount, label: lang === 'uz' ? 'so‘z o‘rganildi' : 'words learned' }].map(({ icon: Icon, value, label }) => <div key={label} className="px-2 text-center"><Icon className="mx-auto mb-3 h-6 w-6 text-primary/70" /><b className="block text-lg">{value}</b><span className="mt-1 block text-[10px] leading-4 text-muted-foreground">{label}</span></div>)}</div></section>}
              <p className="flex items-start gap-2 px-2 text-xs leading-5 text-muted-foreground"><Info className="mt-0.5 h-4 w-4 shrink-0" />{lang === 'uz' ? 'Reyting XP bo‘yicha tuziladi. Bu til darajasi yoki IELTS bandi emas.' : 'Rankings reflect learning XP, not your English level or IELTS band.'}</p>
            </aside>
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-6 text-center">{t('lb.footer')}</p>
      </main>
    </div>
  );
}
