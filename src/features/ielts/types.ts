/**
 * IELTS Academic Reading and Listening practice tests, modelled on the official format:
 *   Reading: 3 passages, 40 questions, 60 minutes.   Listening: 4 sections, 40 questions, about 30 minutes, audio plays once.
 * Everything is scored in the browser (no AI cost). One question = one mark, no negative marking.
 */

export type QuestionKind =
  | 'tfng'   // True / False / Not Given (Reading: facts)
  | 'ynng'   // Yes / No / Not Given (Reading: writer's views)
  | 'mcq'    // multiple choice, one answer
  | 'fill'   // sentence / note / table / summary / form completion with a word limit
  | 'match'; // matching headings / information / features / sentence endings / summary with a word bank

export interface QuestionBase {
  /** Text of the question or the sentence with the gap written as ___ (fill). */
  q: string;
  /** Short explanation, in Uzbek, shown in the review. For Reading, name the paragraph/sentence that proves the answer. */
  why: string;
}
export interface ChoiceQuestion extends QuestionBase { a: number } // index into the group's options
export interface TfngQuestion extends QuestionBase { a: 'true' | 'false' | 'not-given' }
export interface YnngQuestion extends QuestionBase { a: 'yes' | 'no' | 'not-given' }
/** a: every accepted spelling (lower case is compared; list US/UK variants and number formats such as "4" and "four"). */
export interface FillQuestion extends QuestionBase { a: string[] }

export type GroupKind = QuestionKind;

interface GroupBase {
  /** Official-style instruction, e.g. "Choose NO MORE THAN TWO WORDS from the passage for each answer." */
  instruction: string;
  /** Heading shown above the items, e.g. a form title or "Notes: Library tour". Fill groups only. */
  title?: string;
}
export interface TfngGroup extends GroupBase { kind: 'tfng'; items: TfngQuestion[] }
export interface YnngGroup extends GroupBase { kind: 'ynng'; items: YnngQuestion[] }
/** Each item has its own options (A-D). */
export interface McqGroup extends GroupBase { kind: 'mcq'; items: (ChoiceQuestion & { options: string[] })[] }
export interface FillGroup extends GroupBase { kind: 'fill'; items: FillQuestion[] }
/** Shared option list (headings i-x, people A-E, ending A-G, word bank A-H); each item picks one by index. */
export interface MatchGroup extends GroupBase { kind: 'match'; options: string[]; items: ChoiceQuestion[] }
export type QuestionGroup = TfngGroup | YnngGroup | McqGroup | FillGroup | MatchGroup;

export interface ReadingPassage {
  title: string;
  /** Short context line shown under the title (optional). */
  intro?: string;
  /** Paragraphs in order; they are labelled A, B, C... automatically when `labelled` is true. */
  paragraphs: string[];
  labelled: boolean;
  groups: QuestionGroup[];
}
export interface ReadingTest {
  id: string;            // r1, r2, r3 ...
  title: string;
  /** Topic list for the card, e.g. ['Archaeology', 'Technology', 'Psychology']. */
  topics: string[];
  free?: boolean;        // sample test available without a paid plan
  passages: ReadingPassage[]; // exactly 3
}

export interface DialogueLine {
  voice: 'emma' | 'isabella' | 'george' | 'lewis';
  text: string;
  /** What the voice reads when it differs from the written text (numbers, spelled-out names, postcodes). */
  say?: string;
}
export interface ListeningSection {
  title: string;
  /** Announcer line, e.g. "Section 1. You will hear a conversation between a student and a library assistant." */
  context: string;
  lines: DialogueLine[];
  groups: QuestionGroup[];
}
export interface ListeningTest {
  id: string;            // l1, l2, l3 ...
  title: string;
  topics: string[];
  free?: boolean;
  sections: ListeningSection[]; // exactly 4
}

export type IeltsTest = ReadingTest | ListeningTest;
