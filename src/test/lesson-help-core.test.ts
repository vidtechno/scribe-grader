import { describe, expect, it } from 'vitest';
import { EXPLAIN_REQUEST, MAX_QUESTION, maxTokens, parseRequest, systemPrompt } from '../../supabase/functions/_shared/lesson-help-core';

const ok = { action: 'ask', lessonId: 'u2-l4', kind: 'free', message: 'hamkasb inglizcha?', phase: 'practice', context: { title: 'To be: questions', goal: 'Savol tuzish', words: [['colleague', 'hamkasb']] }, history: [] };

describe('lesson help request', () => {
  it('accepts a normal question and keeps the lesson words', () => {
    const r = parseRequest(ok)!;
    expect(r.lessonId).toBe('u2-l4');
    expect(r.context.words).toEqual([['colleague', 'hamkasb']]);
    expect(r.phase).toBe('practice');
  });
  it('rejects bad lesson ids and empty questions, but allows a status call without a message', () => {
    expect(parseRequest({ ...ok, lessonId: '../etc' })).toBeNull();
    expect(parseRequest({ ...ok, lessonId: 'u2-l4-d1' })).toBeNull();
    expect(parseRequest({ ...ok, message: '   ' })).toBeNull();
    expect(parseRequest({ action: 'status', lessonId: 'u2-l4' })).not.toBeNull();
    expect(parseRequest('x')).toBeNull();
  });
  it('bounds everything that comes from the browser', () => {
    const r = parseRequest({ ...ok, message: 'a'.repeat(5000), context: { title: 't'.repeat(999), words: Array.from({ length: 50 }, () => ['a', 'b']) },
      history: Array.from({ length: 9 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: 'x'.repeat(3000) })).concat([{ role: 'system' as never, content: 'evil' }]) })!;
    expect(r.message.length).toBe(MAX_QUESTION);
    expect(r.context.title.length).toBe(160);
    expect(r.context.words.length).toBe(14);
    expect(r.history.length).toBeLessThanOrEqual(4);
    expect(r.history.every((h) => h.role === 'user' || h.role === 'assistant')).toBe(true);
    expect(r.history.every((h) => h.content.length <= 700)).toBe(true);
  });
});

describe('prompt', () => {
  it('teaches in Uzbek, stays on topic and does not hand out quiz answers', () => {
    const quiz = systemPrompt(parseRequest({ ...ok, phase: 'quiz' })!);
    expect(quiz).toMatch(/Uzbek/);
    expect(quiz).toMatch(/only help with English|Stay on learning English/);
    expect(quiz).toMatch(/Do NOT say the answer/);
    expect(systemPrompt(parseRequest(ok)!)).not.toMatch(/Do NOT say the answer/);
    expect(quiz).toContain('colleague = hamkasb');
  });
  it('asks for a structured mini-lesson and allows a longer reply for it', () => {
    expect(EXPLAIN_REQUEST).toMatch(/three English examples/);
    expect(maxTokens('explain')).toBeGreaterThan(maxTokens('free'));
  });
});
