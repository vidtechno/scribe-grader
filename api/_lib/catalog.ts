import { PART1 } from './data-part1.js';
import { CUE_CARDS } from './data-part2.js';
import { PART3 } from './data-part3.js';
import { TASK2 } from './data-task2.js';
import { TASK1 } from './data-task1.js';
import { VOCAB } from './data-vocab.js';

export type Section = { key: string; href: string; title: string; desc: string; icon: string; count: number; group: 'Writing' | 'Speaking' | 'Vocabulary' | 'Tools' };

/** The practice hubs shown on the blog home page and in the footer. */
export const SECTIONS = (): Section[] => [
  { key: 'wt2', href: '/ielts-writing-task-2-questions', title: 'Writing Task 2 questions', desc: 'Essay questions with analysis, plans and full band 7+ model answers.', icon: '✍️', count: TASK2.length, group: 'Writing' },
  { key: 'wt1', href: '/ielts-writing-task-1-samples', title: 'Writing Task 1 samples', desc: 'Graphs, charts, tables and processes with overviews and model reports.', icon: '📊', count: TASK1.length, group: 'Writing' },
  { key: 'sp1', href: '/ielts-speaking-part-1', title: 'Speaking Part 1 topics', desc: 'Everyday interview questions with natural model answers.', icon: '💬', count: PART1.length, group: 'Speaking' },
  { key: 'sp2', href: '/ielts-speaking-part-2', title: 'Speaking Part 2 cue cards', desc: 'Describe-a-… topics with 2-minute sample answers.', icon: '🎤', count: CUE_CARDS.length, group: 'Speaking' },
  { key: 'sp3', href: '/ielts-speaking-part-3', title: 'Speaking Part 3 discussions', desc: 'Abstract follow-up questions with developed answers.', icon: '🧠', count: PART3.length, group: 'Speaking' },
  { key: 'vocab', href: '/ielts-vocabulary', title: 'IELTS vocabulary by topic', desc: 'Topic word lists with meanings and example sentences.', icon: '📚', count: VOCAB.length, group: 'Vocabulary' },
  { key: 'calc', href: '/ielts-band-score-calculator', title: 'Band score calculator', desc: 'Work out your overall band with the official rounding rule.', icon: '🧮', count: 0, group: 'Tools' },
];

export const totalPages = () => SECTIONS().reduce((n, s) => n + s.count, 0);
