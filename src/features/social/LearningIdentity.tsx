import { Link } from 'react-router-dom';
import { BookOpen, Brain, Flame, Target, Trophy, Users, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Switch } from '@/components/ui/switch';
import { ACHIEVEMENTS } from '@/features/learn/achievements';
import { useT } from '@/i18n';
import { achievementText } from './components';
import { callLearning, courseMap, learningErrorMessage, useLearningState } from '@/features/learn/api';
import { useReviewQueue } from '@/features/learn/engine/api';
import { COURSE_UNITS, levelOf, unitNo } from '@/features/learn/course';
import { useSocialList, useSocialSettings, useUpdateSocialSettings, type SocialSettings } from './api';

const GOALS = [{ xp: 20, label: 'social.goal.light', hint: 'social.goal.min5' }, { xp: 30, label: 'social.goal.normal', hint: 'social.goal.min10' }, { xp: 60, label: 'social.goal.serious', hint: 'social.goal.min20' }, { xp: 100, label: 'social.goal.strong', hint: 'social.goal.min35' }];

function Stat({ icon: Icon, label, value, tone = 'text-primary' }: { icon: typeof Zap; label: string; value: string | number; tone?: string }) {
  return (
    <div className="rounded-xl bg-secondary/40 p-3 text-center">
      <Icon className={`h-4 w-4 mx-auto mb-1 ${tone}`} />
      <p className="text-lg font-bold leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

const PRIVACY: { key: keyof SocialSettings; title: string; text: string }[] = (['discoverable', 'show_progress', 'leaderboard_visible', 'show_ielts'] as const)
  .map((key) => ({ key, title: `social.priv.${key}`, text: `social.priv.${key}.text` }));

export function LearningIdentity() {
  const { t, lang } = useT();
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
    onError: (e) => toast.error(learningErrorMessage(e, lang)),
  });

  const lp = state?.profile;
  if (!state || !lp) {
    return (
      <div className="glass-card p-6 mb-6 text-center">
        <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
        <h2 className="text-lg font-semibold mb-1">{t('social.startTitle')}</h2>
        <p className="text-sm text-muted-foreground mb-4">{t('social.startText')}</p>
        <Link to="/learn" className="text-primary font-semibold text-sm">{t('social.startLink')}</Link>
      </div>
    );
  }

  const map = courseMap(state);
  const level = levelOf(map.activeLevel);
  const unitId = map.nextLesson?.unitId ?? map.pendingTest?.id;
  const unit = COURSE_UNITS.find((u) => u.id === unitId);
  const unitLabel = unit ? t('social.stageNo', { n: unitNo(unit) }) : null;
  const info = state.streak_info;
  const goal = state.goal?.daily_goal_xp ?? 30;
  const unlocked = new Set((state.achievements ?? []).map((a) => a.key));
  const s = settings.data;

  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" />{t('social.myJourney')}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {level.title} · {level.id === 'beginner' ? t('social.fromZero') : level.cefr}{unitLabel ? ` · ${unitLabel}` : ''}
            {map.nextLesson ? ` · ${t('social.nextLesson', { title: lang === 'uz' ? map.nextLesson.titleUz : map.nextLesson.title })}` : ''}
          </p>
        </div>
        <Link to="/learn" className="text-sm font-semibold text-primary whitespace-nowrap">{t('social.continue')}</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-5">
        <Stat icon={Zap} label={t('social.totalXp')} value={lp.xp} />
        <Stat icon={Flame} label={info ? t('social.streakBest', { n: info.best }) : t('social.streak')} value={t('social.streakDays', { n: info?.current ?? state.streak })} tone="text-orange-500" />
        <Stat icon={BookOpen} label={t('social.doneLessons')} value={map.doneCount} />
        <Stat icon={Brain} label={t('social.masteredWords')} value={review?.stats.mastered ?? 0} tone="text-emerald-500" />
      </div>

      <div className="flex gap-4 text-sm mb-5">
        <span><b>{followers.data?.length ?? 0}</b> <span className="text-muted-foreground">{t('social.followers')}</span></span>
        <span><b>{following.data?.length ?? 0}</b> <span className="text-muted-foreground">{t('social.followingCount')}</span></span>
        <a href="#people" className="ml-auto inline-flex items-center gap-1 text-primary font-semibold"><Users className="h-4 w-4" />{t('social.friends')}</a>
        <Link to="/leaderboard" className="inline-flex items-center gap-1 text-primary font-semibold"><Trophy className="h-4 w-4" />{t('social.leaderboard')}</Link>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold mb-2 flex items-center gap-1.5"><Target className="h-4 w-4 text-primary" />{t('social.dailyGoal')}</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GOALS.map((g) => (
            <button key={g.xp} type="button" disabled={setGoal.isPending} onClick={() => setGoal.mutate(g.xp)}
              className={`rounded-xl border p-2.5 text-left transition-colors ${goal === g.xp ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}>
              <span className="block text-sm font-semibold">{t(g.label)}</span>
              <span className="block text-[11px] text-muted-foreground">{g.xp} XP · {t(g.hint)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold mb-2">{t('social.achievements', { a: unlocked.size, b: ACHIEVEMENTS.length })}</p>
        <div className="flex flex-wrap gap-2">
          {ACHIEVEMENTS.map((a0) => { const a = achievementText(a0.key, t); return (
            <span key={a.key} title={a.hint}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${unlocked.has(a.key) ? 'bg-primary/10 text-foreground' : 'bg-secondary/40 text-muted-foreground opacity-60 grayscale'}`}>
              <span>{a.icon}</span>{a.title}
            </span>
          ); })}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">{t('social.privacy')}</p>
        <div className="space-y-3">
          {PRIVACY.map((row) => (
            <label key={row.key} className="flex items-center justify-between gap-3 cursor-pointer">
              <span><span className="block text-sm">{t(row.title)}</span><span className="block text-xs text-muted-foreground">{t(row.text)}</span></span>
              <Switch disabled={!s || updateSettings.isPending} checked={!!s?.[row.key]}
                onCheckedChange={(v) => s && updateSettings.mutate({ ...s, [row.key]: v }, { onError: () => toast.error(t('social.saveFailed')) })} />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
