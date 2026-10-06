import { describe, expect, it } from 'vitest';
import { lessonAudioTexts, exerciseAudioTexts } from './audio-plan';
import { cleanText } from './speech';
import { loadUnit } from './course';

describe('lesson audio plan', () => {
  it('cleans markdown and emoji before speaking', () => {
    expect(cleanText('**Hello**, `world` 👋  again')).toBe('Hello, world again');
  });

  it('lists every word first, then the theory, without Uzbek text', async () => {
    const [lesson] = await loadUnit('u1');
    const texts = lessonAudioTexts(lesson);
    expect(texts.slice(0, 10)).toEqual(lesson.words.map((w) => cleanText(w.en)));
    expect(texts.length).toBeGreaterThan(30);
    expect(texts.every((t) => /^[A-Za-z]/.test(t))).toBe(true);
  });

  it('takes only playable parts of an exercise', () => {
    expect(exerciseAudioTexts({ k: 'listen', say: 'Good morning', opts: ['a', 'b'], a: 0 })).toEqual(['Good morning']);
    expect(exerciseAudioTexts({ k: 'fill', q: 'a ___', a: ['b'] })).toEqual([]);
    expect(exerciseAudioTexts({ k: 'match', pairs: [['cat', 'mushuk'], ['I am a very long phrase', 'x']] })).toEqual(['cat']);
  });
});
