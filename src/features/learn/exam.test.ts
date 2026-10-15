import { describe, expect, it } from 'vitest';
import { ALL_LESSONS } from './course';
import { BEGINNER_EXAM, type ExamSkill } from './content/beginner/exam';
import { ELEMENTARY_EXAM, ELEMENTARY_SPEAKING } from './content/a1/exam';
import { PREINTERMEDIATE_EXAM, PREINTERMEDIATE_SPEAKING } from './content/a2/exam';
import { INTERMEDIATE_EXAM, INTERMEDIATE_SPEAKING } from './content/b1/exam';
import type { Exercise } from './types';

const MIN: Record<ExamSkill, number> = { grammar: 16, vocabulary: 12, reading: 10, listening: 12, writing: 12 };

function problems(ex: Exercise, where: string): string[] {
  const p: string[] = [];
  const ne = (s: unknown) => typeof s === 'string' && s.trim().length > 0;
  switch (ex.k) {
    case 'choice':
    case 'listen':
      if (ex.k === 'choice' && !ne(ex.q)) p.push(`${where}: empty question`);
      if (ex.k === 'listen' && !ne(ex.say)) p.push(`${where}: no say`);
      if (ex.opts.length < 2 || ex.opts.length > 5) p.push(`${where}: options count`);
      if (new Set(ex.opts.map((o) => o.trim().toLowerCase())).size !== ex.opts.length) p.push(`${where}: duplicate options`);
      if (!Number.isInteger(ex.a) || ex.a < 0 || ex.a >= ex.opts.length) p.push(`${where}: answer index`);
      if (ex.k === 'listen' && ex.opts[ex.a]?.trim() !== ex.say.trim()) p.push(`${where}: listen answer differs from say`);
      break;
    case 'fill':
      if ((ex.q.match(/___/g) ?? []).length !== 1) p.push(`${where}: fill needs exactly one ___`);
      if (!ex.a.length || !ex.a.every(ne)) p.push(`${where}: fill answers`);
      break;
    case 'order':
      if (ex.words.length < 2 || !ne(ex.uz)) p.push(`${where}: order`);
      break;
    case 'translate':
      if (!ne(ex.uz) || !ex.a.length) p.push(`${where}: translate`);
      break;
    case 'match':
      if (ex.pairs.length < 3 || ex.pairs.length > 6) p.push(`${where}: match pairs`);
      if (new Set(ex.pairs.map(([a]) => a.toLowerCase())).size !== ex.pairs.length || new Set(ex.pairs.map(([, b]) => b.toLowerCase())).size !== ex.pairs.length) p.push(`${where}: match duplicates`);
      break;
    case 'tf':
      if (!ne(ex.q)) p.push(`${where}: tf`);
      break;
    case 'dictation':
      if (!ne(ex.say)) p.push(`${where}: dictation`);
      break;
    case 'fix':
      if (!ne(ex.wrong) || !ex.a.length) p.push(`${where}: fix`);
      else if (ex.a.some((x) => x.trim().toLowerCase() === ex.wrong.trim().toLowerCase())) p.push(`${where}: fix answer equals wrong`);
      break;
    default:
      p.push(`${where}: kind not allowed in the exam`);
  }
  return p;
}

const key = (ex: Exercise): string => {
  switch (ex.k) {
    case 'choice': return ex.q + '/' + ex.opts.join('/');
    case 'tf': case 'fill': return ex.q;
    case 'listen': case 'dictation': return ex.say;
    case 'order': case 'translate': return ex.uz;
    case 'fix': return ex.wrong;
    case 'match': return ex.pairs.map((p) => p[0]).join('|');
    default: return '';
  }
};

describe('Beginner exam bank', () => {
  it('has enough items per skill', () => {
    for (const [skill, n] of Object.entries(MIN)) {
      expect(BEGINNER_EXAM.filter((i) => i.skill === skill).length, skill).toBeGreaterThanOrEqual(n);
    }
  });

  it('topics exist in the course', () => {
    const ids = new Set(ALL_LESSONS.map((x) => x.id));
    expect(BEGINNER_EXAM.filter((i) => !ids.has(i.topic)).map((i) => i.topic)).toEqual([]);
  });

  it('has no duplicate questions', () => {
    const keys = BEGINNER_EXAM.map((i) => key(i.ex).trim().toLowerCase());
    expect(keys.filter((k, i) => keys.indexOf(k) !== i)).toEqual([]);
  });

  it('uses only allowed kinds per skill and valid exercises', () => {
    const allowed: Record<ExamSkill, string[]> = {
      grammar: ['choice', 'fill', 'fix'],
      vocabulary: ['choice', 'match', 'fill'],
      reading: ['choice', 'tf'],
      listening: ['listen', 'dictation'],
      writing: ['order', 'translate', 'fix'],
    };
    const p: string[] = [];
    BEGINNER_EXAM.forEach((i, n) => {
      if (!allowed[i.skill].includes(i.ex.k)) p.push(`#${n + 1}: ${i.ex.k} not allowed in ${i.skill}`);
      if (i.skill === 'reading' && !('q' in i.ex && i.ex.q.includes('\n\n'))) p.push(`#${n + 1}: reading needs passage + question`);
      p.push(...problems(i.ex, `#${n + 1} ${i.skill}`));
    });
    expect(p).toEqual([]);
  });
});

describe('Elementary exam bank', () => {
  it('has enough items per skill', () => {
    for (const [skill, n] of Object.entries(MIN)) {
      expect(ELEMENTARY_EXAM.filter((i) => i.skill === skill).length, skill).toBeGreaterThanOrEqual(n);
    }
  });

  it('topics exist in the course', () => {
    const ids = new Set(ALL_LESSONS.map((x) => x.id));
    expect(ELEMENTARY_EXAM.filter((i) => !ids.has(i.topic)).map((i) => i.topic)).toEqual([]);
  });

  it('has no duplicate questions', () => {
    const keys = ELEMENTARY_EXAM.map((i) => key(i.ex).trim().toLowerCase());
    expect(keys.filter((k, i) => keys.indexOf(k) !== i)).toEqual([]);
  });

  it('uses only allowed kinds per skill and valid exercises', () => {
    const allowed: Record<ExamSkill, string[]> = {
      grammar: ['choice', 'fill', 'fix'],
      vocabulary: ['choice', 'match', 'fill'],
      reading: ['choice', 'tf'],
      listening: ['listen', 'dictation'],
      writing: ['order', 'translate', 'fix'],
    };
    const p: string[] = [];
    ELEMENTARY_EXAM.forEach((i, n) => {
      if (!allowed[i.skill].includes(i.ex.k)) p.push(`#${n + 1}: ${i.ex.k} not allowed in ${i.skill}`);
      if (i.skill === 'reading' && !('q' in i.ex && i.ex.q.includes('\n\n'))) p.push(`#${n + 1}: reading needs passage + question`);
      p.push(...problems(i.ex, `#${n + 1} ${i.skill}`));
    });
    expect(p).toEqual([]);
  });
});

describe('Elementary speaking', () => {
  it('has 3 speak prompts', () => {
    expect(ELEMENTARY_SPEAKING).toHaveLength(3);
    for (const e of ELEMENTARY_SPEAKING) {
      expect(e.k).toBe('speak');
      expect(e.k === 'speak' && e.say.trim().length > 0).toBe(true);
    }
  });
});

describe('Pre-Intermediate exam bank', () => {
  it('has enough items per skill', () => {
    for (const [skill, n] of Object.entries(MIN)) {
      expect(PREINTERMEDIATE_EXAM.filter((i) => i.skill === skill).length, skill).toBeGreaterThanOrEqual(n);
    }
  });

  it('topics exist in the course', () => {
    const ids = new Set(ALL_LESSONS.map((x) => x.id));
    expect(PREINTERMEDIATE_EXAM.filter((i) => !ids.has(i.topic)).map((i) => i.topic)).toEqual([]);
  });

  it('has no duplicate questions', () => {
    const keys = PREINTERMEDIATE_EXAM.map((i) => key(i.ex).trim().toLowerCase());
    expect(keys.filter((k, i) => keys.indexOf(k) !== i)).toEqual([]);
  });

  it('uses only allowed kinds per skill and valid exercises', () => {
    const allowed: Record<ExamSkill, string[]> = {
      grammar: ['choice', 'fill', 'fix'],
      vocabulary: ['choice', 'match', 'fill'],
      reading: ['choice', 'tf'],
      listening: ['listen', 'dictation'],
      writing: ['order', 'translate', 'fix'],
    };
    const p: string[] = [];
    PREINTERMEDIATE_EXAM.forEach((i, n) => {
      if (!allowed[i.skill].includes(i.ex.k)) p.push(`#${n + 1}: ${i.ex.k} not allowed in ${i.skill}`);
      if (i.skill === 'reading' && !('q' in i.ex && i.ex.q.includes('\n\n'))) p.push(`#${n + 1}: reading needs passage + question`);
      p.push(...problems(i.ex, `#${n + 1} ${i.skill}`));
    });
    expect(p).toEqual([]);
  });
});

describe('Pre-Intermediate speaking', () => {
  it('has 3 speak prompts', () => {
    expect(PREINTERMEDIATE_SPEAKING).toHaveLength(3);
    for (const e of PREINTERMEDIATE_SPEAKING) {
      expect(e.k).toBe('speak');
      expect(e.k === 'speak' && e.say.trim().length > 0).toBe(true);
    }
  });
});

describe('Intermediate exam bank', () => {
  it('has enough items per skill', () => {
    for (const [skill, n] of Object.entries(MIN)) {
      expect(INTERMEDIATE_EXAM.filter((i) => i.skill === skill).length, skill).toBeGreaterThanOrEqual(n);
    }
  });

  it('topics exist in the course', () => {
    const ids = new Set(ALL_LESSONS.map((x) => x.id));
    expect(INTERMEDIATE_EXAM.filter((i) => !ids.has(i.topic)).map((i) => i.topic)).toEqual([]);
  });

  it('has no duplicate questions', () => {
    const keys = INTERMEDIATE_EXAM.map((i) => key(i.ex).trim().toLowerCase());
    expect(keys.filter((k, i) => keys.indexOf(k) !== i)).toEqual([]);
  });

  it('uses only allowed kinds per skill and valid exercises', () => {
    const allowed: Record<ExamSkill, string[]> = {
      grammar: ['choice', 'fill', 'fix'],
      vocabulary: ['choice', 'match', 'fill'],
      reading: ['choice', 'tf'],
      listening: ['listen', 'dictation'],
      writing: ['order', 'translate', 'fix'],
    };
    const p: string[] = [];
    INTERMEDIATE_EXAM.forEach((i, n) => {
      if (!allowed[i.skill].includes(i.ex.k)) p.push(`#${n + 1}: ${i.ex.k} not allowed in ${i.skill}`);
      if (i.skill === 'reading' && !('q' in i.ex && i.ex.q.includes('\n\n'))) p.push(`#${n + 1}: reading needs passage + question`);
      p.push(...problems(i.ex, `#${n + 1} ${i.skill}`));
    });
    expect(p).toEqual([]);
  });
});

describe('Intermediate speaking', () => {
  it('has 3 speak prompts', () => {
    expect(INTERMEDIATE_SPEAKING).toHaveLength(3);
    for (const e of INTERMEDIATE_SPEAKING) {
      expect(e.k).toBe('speak');
      expect(e.k === 'speak' && e.say.trim().length > 0).toBe(true);
    }
  });
});
