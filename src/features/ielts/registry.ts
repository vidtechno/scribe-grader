import type { ListeningTest, ReadingTest } from './types';

export interface TestMeta { id: string; title: string; topics: string[]; free?: boolean }

export const READING_TESTS: TestMeta[] = [
  { id: 'r1', title: 'Academic Reading Test 1', topics: ['Science', 'History', 'Society'], free: true },
  { id: 'r2', title: 'Academic Reading Test 2', topics: ['Environment', 'Psychology', 'Technology'] },
  { id: 'r3', title: 'Academic Reading Test 3', topics: ['Architecture', 'Health', 'Economics'] },
];
export const LISTENING_TESTS: TestMeta[] = [
  { id: 'l1', title: 'Listening Test 1', topics: ['Accommodation', 'Tourism', 'Academic life', 'Science'], free: true },
  { id: 'l2', title: 'Listening Test 2', topics: ['Events', 'Transport', 'University', 'Environment'] },
  { id: 'l3', title: 'Listening Test 3', topics: ['Health', 'Careers', 'Research', 'History'] },
];

const readingFiles = import.meta.glob<{ default: ReadingTest }>('./reading/r*.ts');
const listeningFiles = import.meta.glob<{ default: ListeningTest }>('./listening/l*.ts');

/** Tests are separate chunks: a learner only downloads the one they open. */
export async function loadReadingTest(id: string): Promise<ReadingTest | null> {
  const load = readingFiles[`./reading/${id}.ts`];
  return load ? (await load()).default : null;
}
export async function loadListeningTest(id: string): Promise<ListeningTest | null> {
  const load = listeningFiles[`./listening/${id}.ts`];
  return load ? (await load()).default : null;
}

/** Where a listening section's recording lives (made by scripts/generate-ielts-listening.ts). */
export const listeningAudioUrl = (testId: string, section: number) => `/ielts-audio/${testId}-s${section + 1}.mp3?v=1`;
