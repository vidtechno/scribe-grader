import { describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { sceneProblems } from '../content-validate';
import { judgeReply, modelReply, otherVoice, sceneAudioTexts, voiceOf, voiceText, unmarked, isTask } from './scene';
import type { Lesson } from '../types';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: null }) }));
vi.mock('framer-motion', async (orig) => ({ ...(await orig<object>()), useReducedMotion: () => true }));
vi.mock('../speech', async (orig) => ({ ...(await orig<object>()), speak: vi.fn(async () => true) }));
const saved: unknown[] = [];
vi.mock('../api', () => ({
  callLearning: vi.fn(async (fn: string, args: unknown) => { saved.push([fn, args]); return { passed: true, stars: 3, xp: 25, first: true, streak: 1 }; }),
  learningErrorMessage: () => 'error',
}));
vi.mock('../engine/api', () => ({ recordReview: vi.fn(async () => {}) }));
vi.mock('@/components/TelegramConnectCard', () => ({ TelegramNudge: () => null }));

import { SceneRunner } from './SceneRunner';

const modules = import.meta.glob('../content/beginner/u*/l*.ts', { eager: true }) as Record<string, { default: Lesson }>;
const scenes = Object.values(modules).map((m) => m.default).filter((l) => l.scene).sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

describe('scene helpers', () => {
  it('marks voices and gives the learner the other voice', () => {
    const t = voiceText('emma', 'Hello!');
    expect(voiceOf(t)).toBe('emma');
    expect(unmarked(t)).toBe('Hello!');
    expect(voiceOf('Hello!')).toBeNull();
    expect(otherVoice('emma')).toBe('george');
    expect(otherVoice('george')).toBe('emma');
  });

  it('accepts every listed variant and explains the expected mistakes', () => {
    const step = { k: 'type' as const, ask: 'x', a: ["I'm from Uzbekistan.", 'I am from Uzbekistan.'], mistakes: [{ a: ['I from Uzbekistan'], why: 'am tushib qolgan' }], why: 'umumiy' };
    expect(judgeReply(step, 'i am from uzbekistan').correct).toBe(true);
    expect(judgeReply(step, "I'm from Uzbekistan!").correct).toBe(true);
    const bad = judgeReply(step, 'I from Uzbekistan.');
    expect(bad.correct).toBe(false);
    expect(bad.why).toBe('am tushib qolgan');
    expect(judgeReply(step, 'He from Uzbekistan').why).toBe('umumiy');
  });

  it('does not mistake a dropped or added word ending for a typo', () => {
    const step = { k: 'type' as const, ask: 'x', a: ['The bus leaves at nine.'], why: 'w' };
    expect(judgeReply(step, 'The bus leaves at nine').correct).toBe(true);
    expect(judgeReply(step, 'The bus leave at nine').correct).toBe(false);
    expect(judgeReply(step, 'The bus leavs at nine').correct).toBe(true); // a real typo inside the word
    const listed = { ...step, mistakes: [{ a: ['The bus leave at nine'], why: 'oxirgi s' }] };
    expect(judgeReply(listed, 'The bus leave at nine.').why).toBe('oxirgi s');
  });

  it('judges built sentences with alternatives and fills typed as the missing word or the whole sentence', () => {
    const build = { k: 'build' as const, ask: 'x', words: ["I'm", 'fine'], extra: ['am'], alt: [['I', 'am', 'fine']], why: 'w' };
    expect(judgeReply(build, "I'm fine").correct).toBe(true);
    expect(judgeReply(build, 'I am fine').correct).toBe(true);
    expect(judgeReply(build, 'fine I\'m').correct).toBe(false);
    const fill = { k: 'fill' as const, ask: 'x', q: 'Nice to ___ you.', a: ['meet'], why: 'w' };
    expect(judgeReply(fill, 'meet').correct).toBe(true);
    expect(judgeReply(fill, 'Nice to meet you.').correct).toBe(true);
    expect(judgeReply(fill, 'meeting').correct).toBe(false);
  });
});

describe('scenes', () => {
  it('Beginner has 14 real-life scenes', () => {
    expect(scenes.map((s) => s.id)).toEqual(['u1-l11', 'u1-l12', 'u2-l15', 'u2-l16', 'u3-l16', 'u3-l17', 'u3-l18', 'u3-l19', 'u4-l19', 'u4-l20', 'u4-l21', 'u5-l18', 'u5-l19', 'u5-l20']);
  });

  it('every scene is complete and valid', () => {
    expect(scenes.flatMap(sceneProblems)).toEqual([]);
  });

  it('uses both recorded voices, and the partner of a scene is not always the same voice', () => {
    const voices = new Set(scenes.flatMap((s) => sceneAudioTexts(s.scene!).map((t) => voiceOf(t))));
    expect(voices).toEqual(new Set(['emma', 'george']));
    expect(new Set(scenes.map((s) => s.scene!.partner.voice)).size).toBe(2);
  });
});

/** Plays a scene the way a learner would: reads the partner, answers every step, continues. */
async function playThrough(lesson: Lesson, firstWrong = false) {
  const scene = lesson.scene!;
  localStorage.clear();
  saved.length = 0;
  render(<MemoryRouter><SceneRunner lesson={lesson} unitTitle="1-bosqich" next={null} unitLast={false} unitId="u1" known={new Set()} onSaved={() => {}} /></MemoryRouter>);
  fireEvent.click(screen.getByText('Start the conversation'));
  for (const [i, step] of scene.steps.entries()) {
    if (step.k === 'say') { await screen.findAllByText(step.en, {}, { timeout: 4000 }); continue; }
    if (step.k === 'note') { fireEvent.click(await screen.findByText('Got it', {}, { timeout: 4000 })); continue; }
    if (!isTask(step)) continue;
    await screen.findByText('Your turn', {}, { timeout: 4000 });
    if (step.k === 'pick') {
      const wrong = step.opts.find((o) => !o.ok);
      const failHere = firstWrong && !!wrong && i === scene.steps.findIndex(isTask);
      if (failHere) {
        fireEvent.click(screen.getByText(wrong!.en));
        await screen.findByText("Let's look at it together");
      }
      fireEvent.click(screen.getByText(step.opts.find((o) => o.ok)!.en));
      if (failHere && step.drill) {
        // after a miss, one short reinforcing exercise comes before the conversation goes on
        await screen.findByText(/Reinforcement/);
        if (step.drill.k === 'choice') fireEvent.click(screen.getByText(step.drill.opts[step.drill.a]));
        fireEvent.click(await screen.findByText(/Continue/));
      }
    } else if (step.k === 'build') {
      for (const w of step.words) fireEvent.click([...document.querySelectorAll<HTMLButtonElement>('button[data-pool]')].find((el) => el.textContent === w && !el.disabled)!);
      fireEvent.click(screen.getByText('Check'));
    } else {
      fireEvent.change(screen.getByLabelText('Your answer'), { target: { value: step.a[0] } });
      fireEvent.click(screen.getByText('Check'));
    }
    await waitFor(() => expect(screen.queryByText('Your turn')).toBeNull(), { timeout: 4000 });
  }
  fireEvent.click(await screen.findByText('See the result', {}, { timeout: 4000 }));
  await screen.findByText(/Lesson complete/, {}, { timeout: 4000 });
  cleanup();
}

describe('playing every scene', () => {
  for (const lesson of scenes) {
    it(`${lesson.id} can be played to the end and is saved as a finished lesson`, async () => {
      await playThrough(lesson);
      const call = saved.find((c) => (c as [string])[0] === 'learning_complete_lesson') as [string, { _lesson: string; _score: number; _total: number }];
      expect(call[1]._lesson).toBe(lesson.id);
      expect(call[1]._score).toBe(call[1]._total);
    }, 60_000);
  }

  it('a wrong first answer explains itself, is scored as a miss and can be retried', async () => {
    const lesson = scenes[0];
    await playThrough(lesson, true);
    const call = saved.find((c) => (c as [string])[0] === 'learning_complete_lesson') as [string, { _score: number; _total: number }];
    expect(call[1]._score).toBe(call[1]._total - 1);
  }, 60_000);

  it('model replies of the learner are in the other voice', () => {
    for (const lesson of scenes) {
      const me = otherVoice(lesson.scene!.partner.voice);
      for (const step of lesson.scene!.steps.filter(isTask)) {
        expect(sceneAudioTexts(lesson.scene!)).toContain(voiceText(me, modelReply(step)));
      }
    }
  });
});
