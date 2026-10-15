import { describe, expect, it } from 'vitest';
import { speechMetrics } from '../../supabase/functions/_shared/speech-metrics';

describe('speech metrics', () => {
  const text = "Well, I think cities are crowded. However, I don't mind because I like the energy. You know, um, there are many things to do. For example, I go to cafes and museums. Cafes are cheap, cafes are friendly, cafes are everywhere, and cafes close late.";
  const m = speechMetrics(text, 30);
  it('counts words, rate and sentences', () => {
    expect(m.words).toBeGreaterThan(40);
    expect(m.wordsPerMinute).toBe(Math.round((m.words * 60) / 30));
    expect(m.sentences).toBe(5);
    expect(m.longestSentence).toBeGreaterThanOrEqual(m.averageSentenceLength);
  });
  it('finds fillers, connectors and repeated words', () => {
    expect(m.fillers.map((f) => f.word)).toEqual(expect.arrayContaining(['um', 'you know']));
    expect(m.connectors).toEqual(expect.arrayContaining(['however', 'for example']));
    expect(m.repeatedWords[0]).toEqual({ word: 'cafes', count: 5 });
    expect(m.contractions).toBe(1);
  });
  it('handles empty input and a missing duration', () => {
    const e = speechMetrics('', null);
    expect(e.words).toBe(0);
    expect(e.wordsPerMinute).toBeNull();
    expect(e.lexicalDiversity).toBe(0);
  });
});

import { cleanSpeakingExtras } from '../../supabase/functions/_shared/speaking-feedback';

describe('speaking feedback cleaning', () => {
  const criterion = () => ({ score: 6, feedback: 'x'.repeat(50) });
  const base = () => ({ fluencyCoherence: criterion(), lexicalResource: criterion(), grammaticalRange: criterion(), pronunciation: criterion() });
  const metrics = speechMetrics('Well I think it is good. Um, you know, it is fun.', 20);
  it('fills missing sections with safe defaults', () => {
    const fb = cleanSpeakingExtras(base(), metrics) as Record<string, any>;
    expect(fb.fluencyCoherence.toNextBand).toEqual([]);
    expect(fb.upgradedPhrases).toEqual([]);
    expect(fb.bandUpPlan).toEqual({ targetBand: null, steps: [] });
    expect(fb.fluencyNotes.fillerCount).toBe(metrics.fillerCount);
    expect(fb.metrics.words).toBe(metrics.words);
  });
  it('drops malformed items and overrides model-made numbers with measured ones', () => {
    const fb = cleanSpeakingExtras({
      ...base(),
      upgradedPhrases: [{ said: 'very good', better: 'excellent', why: 'stronger' }, { said: '', better: 'x' }, 'junk'],
      bandUpPlan: { targetBand: 6.74, steps: ['a', 3, 'b'] },
      fluencyNotes: { fillerCount: 99, averageSentenceLength: 99, topicDevelopment: 'ok' },
    }, metrics) as Record<string, any>;
    expect(fb.upgradedPhrases).toHaveLength(1);
    expect(fb.bandUpPlan.targetBand).toBe(6.5);
    expect(fb.bandUpPlan.steps).toEqual(['a', 'b']);
    expect(fb.fluencyNotes.fillerCount).toBe(metrics.fillerCount);
    expect(fb.fluencyNotes.topicDevelopment).toBe('ok');
  });
});
