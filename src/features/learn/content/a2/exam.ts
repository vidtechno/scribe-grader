import type { ExamItem } from '../beginner/exam';
import { PREINT_EXAM_A, PREINTERMEDIATE_SPEAKING } from './exam-a';
import { PREINT_EXAM_B } from './exam-b';

/**
 * Question bank of the Pre-Intermediate (A2) final exam. Each attempt draws random items per skill (4 of each of five
 * skills), so every item is independent and of similar difficulty. Topics are lessons of units u12–u17.
 * Written in two parts: grammar and vocabulary (exam-a.ts), reading, listening and writing (exam-b.ts).
 */
export const PREINTERMEDIATE_EXAM: ExamItem[] = [...PREINT_EXAM_A, ...PREINT_EXAM_B];
export { PREINTERMEDIATE_SPEAKING };
