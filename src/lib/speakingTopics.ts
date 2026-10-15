import { CUE_CARDS, PART1_THEMES, PART3_SETS } from './speakingBank';
import type { CueCard, TopicCategory } from './speakingBank.types';

export type PartKey = 'part1' | 'part2' | 'part3';

/** One thing the learner can practise: it is shown as a card, and `text` is what is stored and sent to the examiner. */
export interface TopicOption {
  id: string;
  part: PartKey;
  category: TopicCategory;
  label: string;
  text: string;
  /** Part 2 cue card. */
  card?: CueCard;
  /** Part 1 and Part 3 questions, in the order the examiner asks them. */
  questions?: string[];
}

export const cueText = (c: CueCard) => `${c.title}. You should say: ${c.points.join(', ')}, and ${c.explain}.`;
const withQuestions = (theme: string, qs: string[]) => `${theme}: ${qs.join(' ')}`;

let cache: Record<PartKey, TopicOption[]> | null = null;
function build(): Record<PartKey, TopicOption[]> {
  return {
    part1: PART1_THEMES.map((t) => ({ id: t.id, part: 'part1' as const, category: t.category, label: t.theme, text: withQuestions(t.theme, t.questions), questions: t.questions })),
    part2: CUE_CARDS.map((c) => ({ id: c.id, part: 'part2' as const, category: c.category, label: c.title.replace(/^Describe\s+/i, '').replace(/^./, (x) => x.toUpperCase()), text: cueText(c), card: c })),
    // The examiner's Part 3 follows the Part 2 topic, so every cue card also gives a linked discussion.
    part3: [
      ...PART3_SETS.map((s) => ({ id: s.id, part: 'part3' as const, category: s.category, label: s.theme, text: withQuestions(s.theme, s.questions), questions: s.questions })),
      ...CUE_CARDS.map((c) => {
        const label = c.title.replace(/^Describe\s+/i, '').replace(/^./, (x) => x.toUpperCase());
        return { id: `${c.id}-p3`, part: 'part3' as const, category: c.category, label: `Linked to: ${label}`, text: withQuestions(`Discussion linked to "${c.title}"`, c.part3), questions: c.part3 };
      }),
    ],
  };
}

export function topicOptions(part: PartKey): TopicOption[] {
  cache ??= build();
  return cache[part];
}

export function randomTopic(part: PartKey, category?: TopicCategory | 'All', not?: string): TopicOption {
  const all = topicOptions(part);
  const pool = all.filter((t) => (!category || category === 'All' || t.category === category) && t.id !== not);
  const list = pool.length ? pool : all;
  return list[Math.floor(Math.random() * list.length)];
}

/** Plain text of a random topic (used by the mock test). */
export function getRandomSpeakingTopic(part: PartKey) {
  return randomTopic(part).text;
}
