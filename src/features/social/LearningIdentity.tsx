import { Link } from 'react-router-dom';
import { BookOpen, Brain, Flame, Target, Trophy, Users, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Switch } from '@/components/ui/switch';
import { ACHIEVEMENTS } from '@/features/learn/achievements';
import { callLearning, courseMap, learningErrorMessage, useLearningState } from '@/features/learn/api';
import { useReviewQueue } from '@/features/learn/engine/api';
import { COURSE_UNITS, levelOf, unitNo } from '@/features/learn/course';
import { useSocialList, useSocialSettings, useUpdateSocialSettings, type SocialSettings } from './api';

const GOALS = [{ xp: 20, label: 'Yengil', hint: '~5 daq' }, { xp: 30, label: 'Oddiy', hint: '~10 daq' }, { xp: 60, label: 'Jiddiy', hint: '~20 daq' }, { xp: 100, label: 'Kuchli', hint: '~35 daq' }];

function Stat({ icon: Icon, label, value, tone = 'text-primary' }: { icon: typeof Zap; label: string; value: string | number; tone?: string }) {
  return (
    <div className="rounded-xl bg-secondary/40 p-3 text-center">
      <Icon className={`h-4 w-4 mx-auto mb-1 ${tone}`} />
      <p className="text-lg font-bold leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

const PRIVACY: { key: keyof SocialSettings; title: string; text: string }[] = [
  { key: 'discoverable', title: "Odamlar meni topa olsin", text: "Qidiruv va tavsiyalarda ko'rinasiz." },
  { key: 'show_progress', title: "O'rganish natijalarim ko'rinsin", text: "XP, streak va yutuqlaringiz profilda ko'rinadi." },
  { key: 'leaderboard_visible', title: 'Reytingda ko\'rinay', text: 'Haftalik va umumiy reytingda qatnashasiz.' },
  { key: 'show_ielts', title: 'IELTS natijalarim ko\'rinsin', text: "Writing va Speaking eng yaxshi ballaringiz." },
];

export function LearningIdentity() {
  const { data: state } = useLearningState();
  const qc = useQueryClient();
  const settings = useSocialSettings();
  const updateSettings = useUpdateSocialSettings();
  const { data: review } = useReviewQueue();
  const followers = useSocialList('followers');
  const following = useSocialList('following');
  const setGoal = useMutation({
    mutationFn: (xp: number) => callLearning('learning_set_daily_goal', { _xp: xp }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['learning-state'] }),
    onError: (e) => toast.error(learningErrorMessage(e)),
  });

  const lp = state?.profile;
  if (!state || !lp) {
    return (
      <div className="glass-card p-6 mb-6 text-center">
        <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
        <h2 className="text-lg font-semibold mb-1">Ingliz tili yo'lingizni boshlang</h2>
        <p className="text-sm text-muted-foreground mb-4">Darajangizni tanlang — XP, streak va yutuqlaringiz shu yerda ko'rinadi.</p>
        <Link to="/learn" className="text-primary font-semibold text-sm">Darslarga o'tish →</Link>
      </div>
    );
  }

  const map = courseMap(state);
  const level = levelOf(map.activeLevel);
  const unitId = map.nextLesson?.unitId ?? map.pendingTest?.id;
  const unit = COURSE_UNITS.find((u) => u.id === unitId);
  const unitLabel = unit ? `${unitNo(unit)}-bosqich` : null;
  const info = state.streak_info;
  const goal = state.goal?.daily_goal_xp ?? 30;
  const unlocked = new Set((state.achievements ?? []).map((a) => a.key));
  const s = settings.data;

  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />Mening o'rganish yo'lim</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {level.title} · {level.cefr}{unitLabel ? ` · ${unitLabel}` : ''}
            {map.nextLesson ? ` · keyingi: ${map.nextLesson.titleUz}` : ''}
          </p>
        </div>
        <Link to="/learn" className="text-sm font-semibold text-primary whitespace-nowrap">Davom etish →</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        <Stat icon={Zap} label="Jami XP" value={lp.xp} />
        <Stat icon={Flame} label={`Streak${info ? ` · rekord ${info.best}` : ''}`} value={`${info?.current ?? state.streak} kun`} tone="text-orange-500" />
        <Stat icon={BookOpen} label="Tugatilgan dars" value={map.doneCount} />
        <Stat icon={Brain} label="Mustahkam so'zlar" value={review?.stats.mastered ?? 0} tone="text-emerald-500" />
      </div>

      <div className="flex gap-4 text-sm mb-5">
        <span><b>{followers.data?.length ?? 0}</b> <span className="text-muted-foreground">obunachi</span></span>
        <span><b>{following.data?.length ?? 0}</b> <span className="text-muted-foreground">obuna</span></span>
        <a href="#people" className="ml-auto inline-flex items-center gap-1 text-primary font-semibold"><Users className="h-4 w-4" />Do'stlar</a>
        <Link to="/leaderboard" className="inline-flex items-center gap-1 text-primary font-semibold"><Trophy className="h-4 w-4" />Reyting</Link>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold mb-2 flex items-center gap-1.5"><Target className="h-4 w-4 text-primary" />Kunlik maqsad</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GOALS.map((g) => (
            <button key={g.xp} type="button" disabled={setGoal.isPending} onClick={() => setGoal.mutate(g.xp)}
              className={`rounded-xl border p-2.5 text-left transition-colors ${goal === g.xp ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}>
              <span className="block text-sm font-semibold">{g.label}</span>
              <span className="block text-[11px] text-muted-foreground">{g.xp} XP · {g.hint}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold mb-2">Yutuqlar ({unlocked.size}/{ACHIEVEMENTS.length})</p>
        <div className="flex flex-wrap gap-2">
          {ACHIEVEMENTS.map((a) => (
            <span key={a.key} title={a.hint}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${unlocked.has(a.key) ? 'bg-primary/10 text-foreground' : 'bg-secondary/40 text-muted-foreground opacity-60 grayscale'}`}>
              <span>{a.icon}</span>{a.title}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">Maxfiylik</p>
        <div className="space-y-3">
          {PRIVACY.map((row) => (
            <label key={row.key} className="flex items-center justify-between gap-3 cursor-pointer">
              <span><span className="block text-sm">{row.title}</span><span className="block text-xs text-muted-foreground">{row.text}</span></span>
              <Switch disabled={!s || updateSettings.isPending} checked={!!s?.[row.key]}
                onCheckedChange={(v) => s && updateSettings.mutate({ ...s, [row.key]: v }, { onError: () => toast.error("Saqlab bo'lmadi") })} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
