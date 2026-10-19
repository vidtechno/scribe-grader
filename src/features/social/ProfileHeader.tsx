import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Flame, Loader2, Pencil, Trophy, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { callLearning, courseMap, useLearningState } from '@/features/learn/api';
import { displayEmail } from '@/lib/telegram';
import { levelLabel } from './components';
import { AVATARS, UserAvatar } from './avatars';
import { useSocialList } from './api';

export type PeopleTab = 'discover' | 'following' | 'followers';

const USERNAME = /^[a-z0-9_.]{3,20}$/;

function EditProfileDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { t } = useT();
  const { user, profile, refreshProfile } = useAuth();
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open || !profile) return;
    const parts = (profile.full_name || '').trim().split(' ');
    setFirst(parts[0] || ''); setLast(parts.slice(1).join(' '));
    setUsername(profile.username ?? ''); setAvatar(profile.avatar_key ?? null); setAvailable(null);
  }, [open, profile]);

  // Is the username free? (checked a moment after typing)
  useEffect(() => {
    const u = username.trim().toLowerCase();
    if (!USERNAME.test(u) || u === (profile?.username ?? '')) { setAvailable(null); return; }
    const timer = setTimeout(() => {
      callLearning<boolean>('profile_username_available', { _username: u }).then(setAvailable).catch(() => setAvailable(null));
    }, 350);
    return () => clearTimeout(timer);
  }, [username, profile?.username]);

  const valid = USERNAME.test(username.trim().toLowerCase()) && first.trim().length > 0 && available !== false;

  const save = async () => {
    if (!user || !valid) return;
    setSaving(true);
    try {
      await callLearning('profile_set_identity', { _username: username.trim().toLowerCase(), _avatar: avatar });
      const fullName = `${first.trim()} ${last.trim()}`.trim();
      if (fullName !== (profile?.full_name ?? '')) {
        const { error } = await supabase.from('profiles').update({ full_name: fullName }).eq('user_id', user.id);
        if (error) throw error;
      }
      await refreshProfile();
      toast.success(t('social.profileUpdated'));
      onOpenChange(false);
    } catch (e) {
      const msg = e instanceof Error ? e.message : '';
      toast.error(msg.includes('username_taken') ? t('social.usernameTaken') : msg.includes('invalid_username') ? t('social.usernameInvalid') : t('social.saveFailed'));
    } finally { setSaving(false); }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t('social.editProfile')}</DialogTitle>
          <DialogDescription>{t('social.editDesc')}</DialogDescription>
        </DialogHeader>
        <div className="space-y-5">
          <div>
            <Label className="mb-2 block">{t('social.avatarLabel')}</Label>
            <div className="grid grid-cols-5 gap-2">
              {AVATARS.map((a) => (
                <button key={a.key} type="button" onClick={() => setAvatar(a.key)} aria-label={t(`social.avatar.${a.key}`)} aria-pressed={avatar === a.key}
                  className={`relative rounded-full p-0.5 transition-transform hover:scale-105 ${avatar === a.key ? 'ring-2 ring-primary' : ''}`}>
                  <UserAvatar avatar={a.key} name={t(`social.avatar.${a.key}`)} size="md" />
                  {avatar === a.key && <span className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full bg-primary text-primary-foreground grid place-items-center"><Check className="h-3 w-3" /></span>}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="username" className="mb-1.5 block">Username</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <Input id="username" value={username} onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_.]/g, ''))} maxLength={20} className="pl-7" autoCapitalize="none" autoCorrect="off" spellCheck={false} />
            </div>
            <p className={`text-xs mt-1 ${available === false || (username && !USERNAME.test(username)) ? 'text-destructive' : available ? 'text-emerald-600' : 'text-muted-foreground'}`}>
              {available === false ? t('social.usernameTaken') : available ? t('social.usernameFree') : t('social.usernameHint')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><Label htmlFor="first" className="mb-1.5 block">{t('social.firstName')}</Label><Input id="first" value={first} onChange={(e) => setFirst(e.target.value)} maxLength={40} /></div>
            <div><Label htmlFor="last" className="mb-1.5 block">{t('social.lastName')}</Label><Input id="last" value={last} onChange={(e) => setLast(e.target.value)} maxLength={40} /></div>
          </div>
          <Button className="w-full gap-2" variant="glow" disabled={!valid || saving} onClick={() => void save()}>
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}{t('social.save')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/** Instagram-style header: picture, @username, lessons / followers / following, name and a short learning line. */
export function ProfileHeader({ onOpenPeople }: { onOpenPeople: (tab: PeopleTab) => void }) {
  const { t } = useT();
  const { profile } = useAuth();
  const { data: state } = useLearningState();
  const followers = useSocialList('followers');
  const following = useSocialList('following');
  const [editing, setEditing] = useState(false);
  const map = courseMap(state);
  const name = profile?.full_name || t('social.student');
  const email = displayEmail(profile?.email);
  const streak = state?.streak_info?.current ?? state?.streak ?? 0;
  const Stat = ({ value, label, onClick }: { value: number | string; label: string; onClick?: () => void }) => (
    <button type="button" onClick={onClick} disabled={!onClick} className="text-center sm:text-left disabled:cursor-default">
      <b className="block text-lg leading-tight">{value}</b><span className="text-xs text-muted-foreground">{label}</span>
    </button>
  );
  return (
    <section className="glass-card p-5 sm:p-7 mb-6" aria-label={t('social.profileAria')}>
      <div className="flex items-center gap-5 sm:gap-10">
        <UserAvatar avatar={profile?.avatar_key} name={name} size="xl" ring />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <h1 className="text-xl sm:text-2xl font-semibold truncate">@{profile?.username ?? 'username'}</h1>
            <Button size="sm" variant="outline" className="gap-1.5" onClick={() => setEditing(true)}><Pencil className="h-3.5 w-3.5" />{t('social.edit')}</Button>
          </div>
          <div className="flex gap-6 sm:gap-9">
            <Stat value={map.doneCount} label={t('social.lessons')} />
            <Stat value={followers.data?.length ?? 0} label={t('social.followers')} onClick={() => onOpenPeople('followers')} />
            <Stat value={following.data?.length ?? 0} label={t('social.followingCount')} onClick={() => onOpenPeople('following')} />
          </div>
        </div>
      </div>
      <div className="mt-4 text-sm">
        <p className="font-semibold">{name}</p>
        {state?.profile && (
          <p className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-0.5">
            <span>{levelLabel(map.activeLevel, t)}</span>
            <span className="inline-flex items-center gap-1 text-orange-500"><Flame className="h-3.5 w-3.5" />{t('social.days', { n: streak })}</span>
            <span className="inline-flex items-center gap-1 text-primary"><Zap className="h-3.5 w-3.5" />{state.profile.xp} XP</span>
          </p>
        )}
        {email && <p className="text-xs text-muted-foreground mt-0.5 truncate">{email}</p>}
      </div>
      <div className="mt-4 flex gap-2">
        <Link to="/leaderboard" className="flex-1"><Button variant="secondary" size="sm" className="w-full gap-1.5"><Trophy className="h-4 w-4 text-amber-500" />{t('social.leaderboard')}</Button></Link>
        <Link to="/learn" className="flex-1"><Button variant="secondary" size="sm" className="w-full">{t('social.toLessons')}</Button></Link>
      </div>
      <EditProfileDialog open={editing} onOpenChange={setEditing} />
    </section>
  );
}
