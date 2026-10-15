import type { ExamItem } from '../beginner/exam';
import { INTERMEDIATE_EXAM_A, INTERMEDIATE_SPEAKING } from './exam-a';
import { INTERMEDIATE_EXAM_B } from './exam-b';

/**
 * Question bank of the Intermediate (B1) final exam. Each attempt draws random items per skill (4 of each of five
 * skills), so every item is independent and of similar difficulty. Topics are lessons of units u18–u23.
 * Written in two parts: grammar and vocabulary (exam-a.ts), reading, listening and writing (exam-b.ts).
 */
export const INTERMEDIATE_EXAM: ExamItem[] = [...INTERMEDIATE_EXAM_A, ...INTERMEDIATE_EXAM_B];
export { INTERMEDIATE_SPEAKING };
