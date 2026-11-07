import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Flame, Medal, Search, Trophy, Users, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import { Avatar, FollowButton, levelLabel } from '@/features/social/components';
import { useLeaderboard } from '@/features/social/api';

type Scope = 'global' | 'friends';
type Period = 'week' | 'all';

function RankBadge({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="h-5 w-5 text-yellow-400" />;
  if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
  if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
  return <span className="text-sm font-bold text-muted-foreground">{rank}</span>;
}

export default function Leaderboard() {
  const { t, lang } = useT();
  const [scope, setScope] = useState<Scope>('global');
  const [period, setPeriod] = useState<Period>('week');
  const { data, isLoading, isError } = useLeaderboard(scope, period);
  const rows = data?.rows ?? [];
  const podium = rows.slice(0, 3);
  const remaining = rows.slice(3);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={t('lb.seoTitle')} description={t('lb.seoDesc')} path="/leaderboard" noindex />
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#291d1d] via-[#401f26] to-[#8f1e2f] p-5 text-white shadow-2xl shadow-primary/10 sm:p-8 mb-5 flex items-center justify-between gap-3">
            <span className="pointer-events-none absolute -right-12 -top-20 h-56 w-56 rounded-full bg-amber-300/15 blur-2xl" />
            <div className="relative flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:h-14 sm:w-14 rounded-2xl bg-white/10 ring-1 ring-white/15 grid place-items-center"><Trophy className="h-6 w-6 sm:h-7 sm:w-7 text-amber-300" /></div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-amber-300">Scorify League</p>
                <h1 className="text-2xl sm:text-3xl font-extrabold">{t('lb.title')}</h1>
                <p className="text-xs sm:text-sm text-white/65">{t('lb.subtitle')}</p>
              </div>
            </div>
            <Link to="/profile#people" className="relative hidden sm:block"><Button variant="outline" size="sm" className="gap-1.5 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"><Search className="h-4 w-4" />{t('lb.friends')}</Button></Link>
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

          {data?.me && (
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/[0.08] to-orange-400/[0.08] p-4 mb-5 flex items-center justify-between text-sm shadow-sm">
              <span><span className="block text-[10px] uppercase tracking-wider text-muted-foreground">{lang === 'uz' ? 'Sizning o‘rningiz' : 'Your position'}</span><span className="font-extrabold">{t('lb.myRank', { n: data.me.rank })}</span></span>
              <span className="inline-flex items-center gap-1 text-primary font-extrabold"><Zap className="h-4 w-4 fill-current" />{data.me.xp} XP</span>
            </div>
          )}
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
          <div>
            {podium.length > 0 && <div className="grid grid-cols-3 items-end gap-2 sm:gap-4 mb-5">
              {podium.map((r) => <Link key={r.public_id} to={`/u/${r.username ?? r.public_id}`} className={`relative overflow-hidden rounded-2xl border p-2.5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-5 ${r.rank === 1 ? 'border-amber-300/60 bg-gradient-to-b from-amber-300/20 to-card sm:pb-7' : 'border-border bg-card'}`}>
                {r.rank === 1 ? <Crown className="absolute -right-3 -top-3 h-14 w-14 rotate-12 text-amber-300/20" /> : null}
                <div className="mx-auto mb-2 w-fit"><Avatar name={r.name} avatar={r.avatar} /></div><div className="mx-auto mb-1 grid h-7 w-7 place-items-center"><RankBadge rank={r.rank} /></div><p className="truncate text-sm font-extrabold sm:text-base">{r.name}{r.is_me && t('lb.you')}</p>{r.username ? <p className="truncate text-[10px] text-muted-foreground">@{r.username}</p> : null}<p className="mt-1 text-lg font-extrabold text-primary">{r.xp} <span className="text-[10px] font-medium">XP</span></p>{r.streak > 0 ? <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-orange-500"><Flame className="h-3 w-3" />{r.streak}</p> : null}
              </Link>)}
            </div>}
            <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
            {remaining.map((r, i) => (
              <motion.div key={r.public_id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: Math.min(i, 12) * 0.025 }}
                className={`flex items-center gap-2.5 sm:gap-3 border-b border-border/60 p-3 sm:p-4 last:border-0 ${r.is_me ? 'bg-primary/[0.07]' : 'hover:bg-secondary/35'}`}>
                <div className="w-7 grid place-items-center"><RankBadge rank={r.rank} /></div>
                <Link to={`/u/${r.username ?? r.public_id}`} className="flex flex-1 min-w-0 items-center gap-3">
                  <Avatar name={r.name} avatar={r.avatar} />
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-sm">{r.name}{r.is_me && t('lb.you')}</span>
                    {r.username ? <span className="block truncate text-[10px] text-muted-foreground">@{r.username}</span> : null}
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{levelLabel(r.level, t)}</span>
                      {r.streak > 0 && <span className="inline-flex items-center gap-0.5 text-orange-500"><Flame className="h-3 w-3" />{r.streak}</span>}
                    </span>
                  </span>
                </Link>
                <div className="text-right"><p className="font-bold text-primary">{r.xp}</p><p className="text-[10px] text-muted-foreground">XP</p></div>
                {!r.is_me && <span className="hidden sm:block"><FollowButton publicId={r.public_id} following={r.is_following} /></span>}
              </motion.div>
            ))}
            {remaining.length === 0 && podium.length > 0 ? <p className="p-4 text-center text-xs text-muted-foreground">{t('lb.footer')}</p> : null}
            </div>
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-6 text-center">{t('lb.footer')}</p>
      </main>
    </div>
  );
}
