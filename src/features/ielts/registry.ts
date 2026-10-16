import type { ListeningTest, ReadingTest } from './types';

export type Difficulty = 'Foundation' | 'Standard' | 'Challenging';
/** What the learner sees on the hub before opening a test. `parts` must match the passage/section titles in the test file (a test checks this). */
export interface TestMeta {
  id: string;
  name: string;
  blurb: string;
  difficulty: Difficulty;
  topics: string[];
  parts: string[];
  free?: boolean;
}

export const DIFFICULTY_HINT: Record<Difficulty, string> = { Foundation: 'about band 5–6', Standard: 'about band 6–7', Challenging: 'about band 6.5–7.5' };

export const READING_TESTS: TestMeta[] = [
  { id: 'r1', name: 'Navigation & Remote Work', difficulty: 'Foundation', free: true, topics: ['Science', 'History', 'Society'],
    blurb: 'How bees find home, the race to solve longitude and the remote-work debate. A gentle start with every main question type.',
    parts: ['How Honeybees Find Their Way Home', 'Solving the Problem of Longitude', 'Working Apart: The Remote Work Debate'] },
  { id: 'r2', name: 'Rewilding & Automation', difficulty: 'Standard', free: true, topics: ['Environment', 'Psychology', 'Technology'],
    blurb: 'Beavers return to Britain, why we put things off and who really gains from automation. Matching information and word-bank summaries.',
    parts: ['The Beaver Returns', 'Why We Put Things Off', 'Machines at Work: Who Gains?'] },
  { id: 'r3', name: 'Skyscrapers, Sleep & Cities', difficulty: 'Standard', free: true, topics: ['Architecture', 'Health', 'Economics'],
    blurb: 'A short history of the skyscraper, a century of sleep research and why some cities thrive. Table completion, headings and sentence endings.',
    parts: ['Reaching for the Sky: A Short History of the Skyscraper', 'Why We Sleep: A Century of Discoveries', 'Why Do Some Cities Thrive?'] },
  { id: 'r4', name: 'Languages, Planets & Start-ups', difficulty: 'Challenging', topics: ['Language', 'Space', 'Business'],
    blurb: 'Why languages fall silent, how astronomers hunt for planets around other stars and four theories of why start-ups fail.',
    parts: ['The Quiet Disappearance of Languages', 'Hunting for Worlds Beyond the Sun', 'Why Start-ups Fail: Four Theories'] },
  { id: 'r5', name: 'Reefs, Homework & Perspective', difficulty: 'Challenging', topics: ['Marine biology', 'Education', 'Art history'],
    blurb: 'How a reef rebuilds itself, whether homework really helps and who invented perspective. Paragraph matching, word banks and headings.',
    parts: ['How a Reef Rebuilds Itself', 'Does Homework Help?', 'Who Invented Perspective?'] },
];

export const LISTENING_TESTS: TestMeta[] = [
  { id: 'l1', name: 'Student Room & Deep Ocean', difficulty: 'Foundation', free: true, topics: ['Accommodation', 'Leisure', 'Academic life', 'Science'],
    blurb: 'Booking a university room, a leisure-centre tour, a green-roofs project and a lecture on glowing deep-sea animals.',
    parts: ['Section 1: Booking a student room', 'Section 2: Harbourside Leisure Centre', 'Section 3: Green roofs project', 'Section 4: Bioluminescence in the deep ocean'] },
  { id: 'l2', name: 'Festival Tickets & Heat Islands', difficulty: 'Standard', free: true, topics: ['Events', 'Environment', 'University', 'Cities'],
    blurb: 'Phone booking for a festival, a radio talk on Green Week, a campus cycling survey and a lecture on urban heat islands.',
    parts: ['Section 1: Booking festival tickets', 'Section 2: Green Week in Marlbury', 'Section 3: A campus cycling survey', 'Section 4: Urban heat islands'] },
  { id: 'l3', name: 'Health Centre & Victorian Sewers', difficulty: 'Standard', free: true, topics: ['Health', 'Work', 'Research', 'History'],
    blurb: 'Registering at a health centre, a museum staff induction, a dissertation tutorial and a lecture on London’s Victorian sewers.',
    parts: ['Section 1: Registering at a health centre', 'Section 2: Welcome talk for new museum staff', 'Section 3: Tutorial on a dissertation project', 'Section 4: Lecture on the Victorian sewer system'] },
  { id: 'l4', name: 'Hire Car & Bronze Age Fens', difficulty: 'Challenging', topics: ['Travel', 'Wildlife', 'Psychology', 'Archaeology'],
    blurb: 'Hiring a car, a wildlife park tour, a sleep-and-memory study and a lecture on a Bronze Age settlement in the fens.',
    parts: ['Section 1: Booking a hire car', 'Section 2: Fernhill Wildlife Park', 'Section 3: Sleep and memory study', 'Section 4: A Bronze Age settlement in the fens'] },
  { id: 'l5', name: 'Broadband, Gardens & Music', difficulty: 'Challenging', topics: ['Services', 'Nature', 'Marine science', 'Economics'],
    blurb: 'Setting up broadband, a botanical-garden tour, a marine science field-trip report and the economics of the music industry.',
    parts: ['Section 1: Setting up broadband', 'Section 2: A tour of Ashgrove Botanical Garden', 'Section 3: A marine science field trip report', 'Section 4: The economics of the music industry'] },
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
