import { describe, expect, it } from 'vitest';
import { lessonAudioTexts, exerciseAudioTexts } from './audio-plan';
import { audioKey } from './audio-key';
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
    expect(exerciseAudioTexts({ k: 'translate', uz: 'salom', a: ['hello'] })).toEqual([]);
    expect(exerciseAudioTexts({ k: 'match', pairs: [['cat', 'mushuk'], ['dog', 'it']] })).toEqual(['cat', 'dog']);
    expect(exerciseAudioTexts({ k: 'fill', q: 'I ___ tea', a: ['like'] })).toEqual(['I … tea']);
  });
});

describe('recorded audio', () => {
  it('has a file for every text of the released lessons', async () => {
    const { readFileSync, existsSync } = await import('node:fs');
    const { audioKey } = await import('./audio-key');
    const { COURSE_UNITS } = await import('./course');
    const manifest = JSON.parse(readFileSync('public/audio/manifest.json', 'utf8')) as { keys: string[] };
    const have = new Set(manifest.keys);
    const missing: string[] = [];
    for (const unit of COURSE_UNITS) {
      for (const lesson of await loadUnit(unit.id)) {
        for (const text of lessonAudioTexts(lesson)) {
          const key = audioKey(text);
          if (!have.has(key) || !existsSync(`public/audio/${key}.mp3`)) missing.push(`${lesson.id}: ${text}`);
        }
      }
    }
    // Fix with: npx tsx scripts/generate-lesson-audio.ts
    expect(missing.slice(0, 10)).toEqual([]);
  });

  it('gives different texts different file names', () => {
    expect(audioKey('Hello')).not.toBe(audioKey('hello'));
    expect(audioKey('Hello')).toBe(audioKey('Hello'));
    expect(audioKey('x')).toMatch(/^[0-9a-f]{16}$/);
  });
});
