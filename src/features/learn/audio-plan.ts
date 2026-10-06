import { cleanText } from './speech';
import type { Block, Exercise, Lesson } from './types';

// Which English texts of a lesson can be played, so they can be loaded when the lesson opens.
// `first` is what the learner needs soonest (words and listening exercises); `later` is the theory.

const english = (t: string | undefined): string[] => (t && /^[A-Za-z]/.test(t.trim()) ? [cleanText(t)] : []);

export function exerciseAudioTexts(ex: Exercise): string[] {
  switch (ex.k) {
    case 'listen':
    case 'speak': return english(ex.say);
    case 'choice': return english(ex.say);
    case 'match': return ex.pairs.flatMap(([en]) => (en.split(/\s+/).length <= 3 ? english(en) : []));
    default: return [];
  }
}

function blockAudioTexts(b: Block): string[] {
  switch (b.t) {
    case 'examples': return b.items.flatMap((i) => english(i.en));
    case 'table': return b.speak ? b.rows.flatMap((r) => b.speak!.flatMap((c) => english(r[c]))) : [];
    case 'sounds': return b.items.flatMap((s) => [...english(s.say), ...(s.examples ?? []).flatMap(english)]);
    case 'dialog': return b.lines.flatMap((l) => english(l.en));
    case 'text': return english(b.en);
    case 'check': return exerciseAudioTexts(b.ex);
    default: return [];
  }
}

export function lessonAudioTexts(lesson: Lesson, previous?: Lesson | null): string[] {
  const first = [
    ...lesson.words.flatMap((w) => english(w.en)),
    ...[...lesson.practice, ...lesson.quiz].flatMap(exerciseAudioTexts),
    ...(previous ? previous.quiz.flatMap(exerciseAudioTexts) : []),
  ];
  const later = [
    ...lesson.slides.flatMap((s) => s.blocks.flatMap(blockAudioTexts)),
    ...lesson.words.flatMap((w) => english(w.ex)),
  ];
  return [...first, ...later];
}
