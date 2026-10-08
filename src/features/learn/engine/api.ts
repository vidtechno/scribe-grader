import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/hooks/useAuth';
import { callLearning } from '../api';
import { loadLesson } from '../course';
import { buildSession, grammarExercises, type ReviewEvent, type ReviewQueue, type SessionItem } from './engine';

/** Everything waiting for review. Always fresh when a lesson or the review opens. */
export function useReviewQueue(enabled = true) {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['learning-review', user?.id],
    enabled: !!user && enabled,
    staleTime: 0,
    refetchOnMount: 'always',
    retry: 1,
    queryFn: () => callLearning<ReviewQueue>('learning_review_queue'),
  });
}

export function recordReview(events: ReviewEvent[], award = false) {
  if (!events.length) return Promise.resolve(null);
  return callLearning<{ recorded: number; xp: number }>('learning_record_review', { _events: events, _award: award });
}

/** Builds the mixed review session for the open queue; grammar topics are loaded from the course content. */
export async function loadSession(queue: ReviewQueue, opts: { max?: number; allowSpeak?: boolean; extraPool?: { en: string; uz: string }[] } = {}): Promise<SessionItem[]> {
  const grammar: { topic: string; ex: SessionItem['ex'] }[] = [];
  await Promise.all(queue.grammar.slice(0, 2).map(async (g) => {
    try {
      const { lesson } = await loadLesson(g.topic);
      const [ex] = grammarExercises(lesson, 1);
      if (ex) grammar.push({ topic: g.topic, ex });
    } catch { /* the lesson may not be released; skip */ }
  }));
  return buildSession(queue, opts.extraPool ?? [], grammar, opts);
}
