import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { callLearning } from '@/features/learn/api';

export interface SocialCard {
  public_id: string; name: string; level: string | null;
  xp: number | null; streak: number | null; is_following: boolean; follows_me: boolean;
}
export interface SocialSettings { discoverable: boolean; show_progress: boolean; show_ielts: boolean; leaderboard_visible: boolean }
export interface PublicProfile {
  public_id: string; name: string; is_me: boolean; member_since: string | null; level: string | null;
  followers: number; following: number; is_following: boolean; follows_me: boolean;
  progress_visible: boolean; ielts_visible: boolean;
  xp?: number; streak?: number; streak_best?: number; lessons_done?: number; words?: number; tests_passed?: number;
  week_xp?: number; next_lesson_title?: string | null;
  activity?: { day: string; xp: number }[];
  achievements?: { key: string; unlocked_at: string }[];
  ielts?: { writing_count: number; writing_best: number | null; speaking_count: number; speaking_best: number | null };
}
export interface LeaderRow { rank: number; public_id: string; name: string; xp: number; level: string | null; streak: number; is_me: boolean; is_following: boolean }
export interface Leaderboard { scope: string; period: string; total: number; rows: LeaderRow[]; me: { rank: number; xp: number } | null; me_hidden: boolean }

export function socialErrorMessage(e: unknown): string {
  const msg = e instanceof Error ? e.message : String(e);
  if (msg.includes('follow_limit')) return "Juda ko'p odamga obuna bo'lgansiz (300 tagacha).";
  if (msg.includes('not_found')) return 'Foydalanuvchi topilmadi.';
  return "Bajarib bo'lmadi. Keyinroq qayta urinib ko'ring.";
}

export function useLeaderboard(scope: 'global' | 'friends', period: 'week' | 'all') {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['leaderboard', user?.id, scope, period], enabled: !!user, staleTime: 60_000,
    queryFn: () => callLearning<Leaderboard>('learning_leaderboard', { _scope: scope, _period: period, _limit: 50 }),
  });
}

export function usePublicProfile(publicId: string | undefined) {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['public-profile', user?.id, publicId], enabled: !!user && !!publicId, retry: false,
    queryFn: () => callLearning<PublicProfile>('social_public_profile', { _public_id: publicId }),
  });
}

export function usePeopleSearch(q: string) {
  const { user } = useAuth();
  const term = q.trim();
  return useQuery({
    queryKey: ['people-search', user?.id, term], enabled: !!user && term.length >= 2, staleTime: 30_000,
    queryFn: () => callLearning<SocialCard[]>('social_search', { _q: term }),
  });
}

export function useSuggestions() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['people-suggestions', user?.id], enabled: !!user, staleTime: 60_000,
    queryFn: () => callLearning<SocialCard[]>('social_suggestions'),
  });
}

export function useSocialList(kind: 'followers' | 'following' | 'friends') {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['people-list', user?.id, kind], enabled: !!user, staleTime: 30_000,
    queryFn: () => callLearning<SocialCard[]>('social_list', { _kind: kind }),
  });
}

export function useSocialSettings() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['social-settings', user?.id], enabled: !!user, staleTime: 60_000,
    queryFn: () => callLearning<SocialSettings>('social_get_settings'),
  });
}

export function useUpdateSocialSettings() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (s: SocialSettings) => callLearning<SocialSettings>('social_update_settings', {
      _discoverable: s.discoverable, _show_progress: s.show_progress, _show_ielts: s.show_ielts, _leaderboard_visible: s.leaderboard_visible,
    }),
    onSuccess: () => { for (const k of ['social-settings', 'leaderboard', 'people-suggestions']) qc.invalidateQueries({ queryKey: [k] }); },
  });
}

/** Follow or unfollow; refreshes every list that shows the relation. */
export function useFollow() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ publicId, follow }: { publicId: string; follow: boolean }) =>
      callLearning<{ following: boolean; followers: number }>(follow ? 'social_follow' : 'social_unfollow', { _public_id: publicId }),
    onSuccess: () => {
      for (const k of ['public-profile', 'people-search', 'people-suggestions', 'people-list', 'leaderboard']) qc.invalidateQueries({ queryKey: [k] });
    },
  });
}
