import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, Flame, Lock, Mic, PenTool, Target, Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { FollowButton, levelLabel } from '@/features/social/components';
import { UserAvatar } from '@/features/social/avatars';
import { usePublicProfile } from '@/features/social/api';
import { ACHIEVEMENTS, achievementInfo } from '@/features/learn/achievements';

function Stat({ icon: Icon, label, value }: { icon: typeof Zap; label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-secondary/40 p-3 text-center">
      <Icon className="h-4 w-4 mx-auto mb-1 text-primary" />
      <p className="text-lg font-bold leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

export default function PublicProfile() {
  const { publicId } = useParams();
  const { data: p, isLoading, isError } = usePublicProfile(publicId);

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title="O'quvchi profili" description="O'quvchining o'rganish yo'li." path={`/u/${publicId ?? ''}`} noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <Link to="/profile#people" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"><ArrowLeft className="h-4 w-4" />Profil</Link>

        {isLoading ? <div className="h-48 rounded-2xl bg-secondary/50 animate-pulse" />
          : isError || !p ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-lg font-medium mb-3">Profil topilmadi</p>
              <Link to="/profile#people"><Button variant="outline">Profilga qaytish</Button></Link>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="glass-card p-5 sm:p-6">
                <div className="flex items-center gap-5 sm:gap-8">
                  <UserAvatar avatar={p.avatar} name={p.name} size="xl" ring />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h1 className="text-xl font-semibold truncate">{p.username ? `@${p.username}` : p.name}</h1>
                      {p.is_me ? <Link to="/profile"><Button variant="outline" size="sm">Profilim</Button></Link>
                        : <FollowButton publicId={p.public_id} following={p.is_following} />}
                    </div>
                    <div className="flex gap-5 text-sm">
                      <span><b className="block text-base">{p.lessons_done ?? '—'}</b><span className="text-muted-foreground text-xs">dars</span></span>
                      <span><b className="block text-base">{p.followers}</b><span className="text-muted-foreground text-xs">obunachi</span></span>
                      <span><b className="block text-base">{p.following}</b><span className="text-muted-foreground text-xs">obuna</span></span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{levelLabel(p.level)} darajasi{p.follows_me && !p.is_me ? ' · sizga obuna' : ''}</p>
                </div>
              </div>

              {p.progress_visible && p.xp != null ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <Stat icon={Zap} label="XP" value={p.xp} />
                    <Stat icon={Flame} label="Streak (kun)" value={p.streak ?? 0} />
                    <Stat icon={BookOpen} label="Tugatilgan dars" value={p.lessons_done ?? 0} />
                    <Stat icon={Target} label="Shu hafta XP" value={p.week_xp ?? 0} />
                  </div>
                  {p.next_lesson_title && <p className="text-sm text-muted-foreground">Hozir o'rganmoqda: <b className="text-foreground">{p.next_lesson_title}</b></p>}
                  {!!p.activity?.length && (
                    <div className="glass-card p-4">
                      <p className="text-sm font-semibold mb-2">So'nggi 14 kun</p>
                      <div className="flex items-end gap-1 h-16">
                        {p.activity.map((d) => (
                          <div key={d.day} title={`${d.day}: ${d.xp} XP`} className="flex-1 rounded-sm bg-primary/20 relative" style={{ height: '100%' }}>
                            <div className="absolute bottom-0 inset-x-0 rounded-sm bg-primary" style={{ height: `${Math.min(100, d.xp ? 15 + d.xp / 2 : 0)}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="glass-card p-4">
                    <p className="text-sm font-semibold mb-3">Yutuqlar ({p.achievements?.length ?? 0}/{ACHIEVEMENTS.length})</p>
                    <div className="flex flex-wrap gap-2">
                      {(p.achievements ?? []).map((a) => {
                        const info = achievementInfo(a.key);
                        return <span key={a.key} title={info.hint} className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium"><span>{info.icon}</span>{info.title}</span>;
                      })}
                      {!p.achievements?.length && <span className="text-xs text-muted-foreground">Hali yutuq yo'q</span>}
                    </div>
                  </div>
                </>
              ) : (
                <div className="glass-card p-5 text-center text-sm text-muted-foreground"><Lock className="h-5 w-5 mx-auto mb-2" />Bu o'quvchi o'rganish natijalarini yashirgan.</div>
              )}

              {p.ielts && (
                <div className="glass-card p-4">
                  <p className="text-sm font-semibold mb-3">IELTS mashqlari</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <Stat icon={PenTool} label={`Writing · ${p.ielts.writing_count} ta`} value={p.ielts.writing_best ?? '—'} />
                    <Stat icon={Mic} label={`Speaking · ${p.ielts.speaking_count} ta`} value={p.ielts.speaking_best ?? '—'} />
                  </div>
                </div>
              )}
            </div>
          )}
      </main>
    </div>
  );
}
