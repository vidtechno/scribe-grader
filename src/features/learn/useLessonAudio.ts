import { useEffect } from 'react';
import { prepareAudio, releaseAudio } from './speech';

/** Loads the given texts' audio while the page is open and frees it when the page closes or the key changes. */
export function useLessonAudio(texts: string[] | null, key: string) {
  useEffect(() => {
    if (!texts?.length) return;
    prepareAudio(texts);
    return () => releaseAudio();
    // `texts` is rebuilt on every render; `key` identifies the lesson.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, !!texts]);
}
