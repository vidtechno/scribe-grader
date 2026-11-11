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
  { id: 'r8', name: 'Tea, Urban Gardens & Bilingual Brains', difficulty: 'Standard', topics: ['History', 'Urban life', 'Neuroscience'],
    blurb: 'Three passages on the history of tea, growing food in the city and the bilingual brain. True/False/Not Given, multiple choice, matching information and headings, note completion and a word-bank summary.',
    parts: ['The Story of Tea', 'Growing Food in the City', 'How Bilingual Brains Work'] },
  { id: 'r7', name: 'Microplastics, Printing & Ant Cities', difficulty: 'Challenging', topics: ['Environmental science', 'History', 'Urban design'],
    blurb: 'Microplastics in the food chain, the printing press and the spread of ideas, and what cities can learn from ants. True/False/Not Given, Yes/No/Not Given, matching headings, information and sentence endings, and completion.',
    parts: ['Microplastics in the Food Chain', 'The Printing Press and the Spread of Ideas', 'Can Cities Learn from Ants?'] },
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
  { id: 'l6', name: 'Gym, Railway Museum & Bicycles', difficulty: 'Foundation', topics: ['Fitness', 'Railway museum', 'Renewable energy', 'History of the bicycle'],
    blurb: 'A gym enquiry call, a railway museum tour, a student discussion about renewable energy and a lecture on the history of the bicycle. Good practice for form completion, matching and note completion.',
    parts: ['Section 1: Joining a gym', 'Section 2: Tour of the Hillcrest Railway Museum', 'Section 3: Planning a presentation on renewable energy', 'Section 4: The history of the bicycle'] },
  { id: 'l7', name: 'Evening Course, Community Garden & Volcanic Soil', difficulty: 'Standard', topics: ['Education', 'Community', 'Psychology', 'Geography'],
    blurb: 'Enrol on an evening language course, join a community garden orientation, discuss a colour-and-mood experiment with a tutor and follow a lecture on how volcanic islands become fertile.',
    parts: ['Section 1: Enrolling on an evening course', 'Section 2: Welcome to Millbrook Community Garden', 'Section 3: A psychology experiment on colour and mood', 'Section 4: Volcanic islands and fertile soil'] },
  { id: 'l8', name: 'Lost Rucksack, City Buses & Roman Roads', difficulty: 'Challenging', topics: ['Insurance claim', 'City transport', 'Marketing project', 'Roman engineering'],
    blurb: 'Report a lost rucksack and start an insurance claim, follow a talk on a new city bus network, join a tutorial on a marketing assignment and take notes on how Roman roads were built. Self-corrections and close distractors.',
    parts: ['Section 1: Reporting a lost rucksack', "Section 2: Dunmere's new bus network", 'Section 3: A marketing assignment', 'Section 4: The engineering of Roman roads'] },
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
