import type { ExamItem } from '../beginner/exam';
import { UPPER_INTERMEDIATE_EXAM_A, UPPER_INTERMEDIATE_SPEAKING } from './exam-a';
import { UPPER_INTERMEDIATE_EXAM_B } from './exam-b';

/**
 * Question bank of the Upper-Intermediate (B2) final exam. Each attempt draws random items per skill (4 of each of five
 * skills), so every item is independent and of similar difficulty. Topics are lessons of units u24–u30.
 * Written in two parts: grammar and vocabulary (exam-a.ts), reading, listening and writing (exam-b.ts).
 */
export const UPPER_INTERMEDIATE_EXAM: ExamItem[] = [...UPPER_INTERMEDIATE_EXAM_A, ...UPPER_INTERMEDIATE_EXAM_B];
export { UPPER_INTERMEDIATE_SPEAKING };
