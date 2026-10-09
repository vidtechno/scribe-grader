import { cleanText } from './speech';
import type { Block, Exercise, Lesson } from './types';

// Which English texts of a lesson can be played, so they can be loaded when the lesson opens.
// `first` is what the learner needs soonest (words and listening exercises); `later` is the theory.

/** Only plain English lines get a play button (not pronunciation spellings in quotes or Uzbek notes). */
export function isEnglish(text: string): boolean {
  const plain = text.replace(/[*`]/g, '');
  return /^[A-Za-z0-9 ,.'?!;:()\u2013\u2014-]+$/.test(plain)
    && !/\b[og]'/i.test(plain)
    && !/\b(va|yoki|emas|bilan|uchun|kabi|deb)\b/i.test(plain);
}

const english = (t: string | undefined): string[] => (t && /^[A-Za-z]/.test(t.trim()) ? [cleanText(t)] : []);

export function exerciseAudioTexts(ex: Exercise): string[] {
  switch (ex.k) {
    case 'listen':
    case 'dictation':
    case 'speak': return english(ex.say);
    case 'choice': return english(ex.say);
    case 'match': return ex.pairs.flatMap(([en]) => english(en));
    case 'fill': return english(ex.q.replace('___', '…'));
    default: return [];
  }
}

function blockAudioTexts(b: Block): string[] {
  switch (b.t) {
    case 'examples': return b.items.flatMap((i) => english(i.en));
    case 'table': return b.speak ? b.rows.flatMap((r) => b.speak!.flatMap((c) => english(r[c]))) : [];
    case 'compare': return b.good.items.filter(isEnglish).flatMap(english);
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
