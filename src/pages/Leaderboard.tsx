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
  const { t } = useT();
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
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="rounded-3xl border border-amber-400/25 bg-gradient-to-br from-amber-400/10 via-card to-primary/5 p-5 sm:p-7 mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 grid place-items-center"><Trophy className="h-6 w-6 text-yellow-400" /></div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold">{t('lb.title')}</h1>
                <p className="text-sm text-muted-foreground">{t('lb.subtitle')}</p>
              </div>
            </div>
            <Link to="/profile#people"><Button variant="outline" size="sm" className="gap-1.5"><Search className="h-4 w-4" />{t('lb.friends')}</Button></Link>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4 rounded-2xl bg-secondary/60 p-1.5">
            <div className="grid grid-cols-2 rounded-xl bg-card/60 p-0.5">
              {([['week', t('lb.week')], ['all', t('lb.all')]] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setPeriod(id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg ${period === id ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 rounded-xl bg-card/60 p-0.5">
              {([['global', t('lb.everyone')], ['friends', t('lb.myFriends')]] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setScope(id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg ${scope === id ? 'bg-card text-primary shadow-sm' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
          </div>

          {data?.me && (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 mb-4 flex items-center justify-between text-sm">
              <span className="font-semibold">{t('lb.myRank', { n: data.me.rank })}</span>
              <span className="inline-flex items-center gap-1 text-primary font-semibold"><Zap className="h-4 w-4" />{data.me.xp} XP</span>
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
            {podium.length > 0 && <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
              {podium.map((r) => <Link key={r.public_id} to={`/u/${r.username ?? r.public_id}`} className={`rounded-2xl border p-3 text-center transition-transform hover:-translate-y-0.5 sm:p-4 ${r.rank === 1 ? 'border-yellow-400/50 bg-yellow-400/10 sm:-translate-y-1' : 'border-border bg-card'}`}>
                <div className="mx-auto mb-2 w-fit"><Avatar name={r.name} avatar={r.avatar} /></div><div className="mx-auto mb-1 grid h-7 w-7 place-items-center"><RankBadge rank={r.rank} /></div><p className="truncate text-xs font-bold sm:text-sm">{r.username ? `@${r.username}` : r.name}{r.is_me && t('lb.you')}</p><p className="mt-1 text-lg font-extrabold text-primary">{r.xp} <span className="text-[10px] font-medium">XP</span></p>{r.streak > 0 ? <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-orange-500"><Flame className="h-3 w-3" />{r.streak}</p> : null}
              </Link>)}
            </div>}
            <div className="overflow-hidden rounded-2xl border bg-card">
            {remaining.map((r, i) => (
              <motion.div key={r.public_id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: Math.min(i, 12) * 0.025 }}
                className={`flex items-center gap-3 border-b border-border/60 p-3 last:border-0 ${r.is_me ? 'bg-primary/5' : 'hover:bg-secondary/35'}`}>
                <div className="w-7 grid place-items-center"><RankBadge rank={r.rank} /></div>
                <Link to={`/u/${r.username ?? r.public_id}`} className="flex flex-1 min-w-0 items-center gap-3">
                  <Avatar name={r.name} avatar={r.avatar} />
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-sm">{r.username ? `@${r.username}` : r.name}{r.is_me && t('lb.you')}</span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{levelLabel(r.level, t)}</span>
                      {r.streak > 0 && <span className="inline-flex items-center gap-0.5 text-orange-500"><Flame className="h-3 w-3" />{r.streak}</span>}
                    </span>
                  </span>
                </Link>
                <div className="text-right"><p className="font-bold text-primary">{r.xp}</p><p className="text-[10px] text-muted-foreground">XP</p></div>
                {!r.is_me && <FollowButton publicId={r.public_id} following={r.is_following} />}
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
