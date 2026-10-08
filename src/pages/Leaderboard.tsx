import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Flame, Medal, Search, Trophy, Users, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
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
  const [scope, setScope] = useState<Scope>('global');
  const [period, setPeriod] = useState<Period>('week');
  const { data, isLoading, isError } = useLeaderboard(scope, period);
  const rows = data?.rows ?? [];

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title="Reyting" description="Haftalik va umumiy XP reytingi." path="/leaderboard" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 grid place-items-center"><Trophy className="h-6 w-6 text-yellow-400" /></div>
              <div>
                <h1 className="text-2xl font-bold">Reyting</h1>
                <p className="text-sm text-muted-foreground">Kim muntazam o'qiyapti — XP bo'yicha</p>
              </div>
            </div>
            <Link to="/people"><Button variant="outline" size="sm" className="gap-1.5"><Search className="h-4 w-4" />Odamlar</Button></Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-flex rounded-lg border border-border p-0.5">
              {([['week', 'Shu hafta'], ['all', 'Hamma vaqt']] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setPeriod(id)}
                  className={`px-3 py-1.5 text-sm rounded-md ${period === id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
            <div className="inline-flex rounded-lg border border-border p-0.5">
              {([['global', 'Hamma'], ['friends', "Do'stlarim"]] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setScope(id)}
                  className={`px-3 py-1.5 text-sm rounded-md ${scope === id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
          </div>

          {data?.me && (
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 mb-4 flex items-center justify-between text-sm">
              <span className="font-semibold">Sizning o'rningiz: #{data.me.rank}</span>
              <span className="inline-flex items-center gap-1 text-primary font-semibold"><Zap className="h-4 w-4" />{data.me.xp} XP</span>
            </div>
          )}
          {data?.me_hidden && (
            <p className="text-xs text-muted-foreground mb-4">Siz reytingda ko'rinmaysiz. Profil → Maxfiylik bo'limida yoqishingiz mumkin.</p>
          )}
        </motion.div>

        {isLoading ? (
          <div className="space-y-2">{[1, 2, 3, 4, 5].map((i) => <div key={i} className="h-16 bg-secondary/50 rounded-xl animate-pulse" />)}</div>
        ) : isError ? (
          <p className="text-center py-12 text-muted-foreground">Reytingni yuklab bo'lmadi. Keyinroq urinib ko'ring.</p>
        ) : rows.length === 0 ? (
          <div className="text-center py-14 text-muted-foreground">
            {scope === 'friends' ? <Users className="h-14 w-14 mx-auto mb-3 opacity-30" /> : <Crown className="h-14 w-14 mx-auto mb-3 opacity-30" />}
            <p className="text-lg font-medium">{scope === 'friends' ? "Hali do'stlar yo'q" : period === 'week' ? "Bu hafta hali hech kim o'qimadi" : "Hali reyting yo'q"}</p>
            <p className="text-sm mt-1">{scope === 'friends' ? "Odamlarga obuna bo'ling — ularning natijalari shu yerda chiqadi." : "Bitta dars — va siz birinchisiz!"}</p>
            {scope === 'friends' && <Link to="/people"><Button className="mt-4">Odamlarni topish</Button></Link>}
          </div>
        ) : (
          <div className="space-y-2">
            {rows.map((r, i) => (
              <motion.div key={r.public_id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: Math.min(i, 12) * 0.025 }}
                className={`flex items-center gap-3 p-3 rounded-xl border ${r.is_me ? 'border-primary/40 bg-primary/5' : r.rank <= 3 ? 'border-yellow-400/30 bg-yellow-400/5' : 'border-border/50 bg-secondary/30'}`}>
                <div className="w-7 grid place-items-center"><RankBadge rank={r.rank} /></div>
                <Link to={`/u/${r.public_id}`} className="flex flex-1 min-w-0 items-center gap-3">
                  <Avatar name={r.name} />
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-sm">{r.name}{r.is_me && ' (siz)'}</span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{levelLabel(r.level)}</span>
                      {r.streak > 0 && <span className="inline-flex items-center gap-0.5 text-orange-500"><Flame className="h-3 w-3" />{r.streak}</span>}
                    </span>
                  </span>
                </Link>
                <div className="text-right"><p className="font-bold text-primary">{r.xp}</p><p className="text-[10px] text-muted-foreground">XP</p></div>
                {!r.is_me && <FollowButton publicId={r.public_id} following={r.is_following} />}
              </motion.div>
            ))}
          </div>
        )}
        <p className="text-xs text-muted-foreground mt-6 text-center">IELTS Writing va Speaking natijalaringiz ham XP beradi — lekin eng ko'p XP muntazam o'qishdan keladi.</p>
      </main>
    </div>
  );
}
