export type Word = {
  word: string; definition: string; uzbek: string; example: string;
  topic: string; level: 'Intermediate' | 'Upper-intermediate' | 'Advanced';
};
export type Progress = { stage: number; dueAt: number; reviews: number };
export type ProgressMap = Record<string, Progress>;

export const WORDS: Word[] = [
  { word: 'substantial', definition: 'large in amount or importance', uzbek: 'sezilarli, katta', example: 'The project requires substantial investment.', topic: 'Education', level: 'Upper-intermediate' },
  { word: 'compulsory', definition: 'required by a rule or law', uzbek: 'majburiy', example: 'Physical education is compulsory at this school.', topic: 'Education', level: 'Intermediate' },
  { word: 'curriculum', definition: 'the subjects taught in a course or school', uzbek: 'o‘quv dasturi', example: 'The curriculum includes digital skills.', topic: 'Education', level: 'Upper-intermediate' },
  { word: 'literacy', definition: 'the ability to read and write', uzbek: 'savodxonlik', example: 'Literacy rates have improved in recent decades.', topic: 'Education', level: 'Intermediate' },
  { word: 'vocational', definition: 'connected with the skills needed for a job', uzbek: 'kasb-hunarga oid', example: 'Vocational training can improve employment.', topic: 'Education', level: 'Advanced' },
  { word: 'mitigate', definition: 'to make a harmful effect less severe', uzbek: 'salbiy ta’sirni kamaytirmoq', example: 'Trees help mitigate urban heat.', topic: 'Environment', level: 'Advanced' },
  { word: 'sustainable', definition: 'able to continue without damaging the environment', uzbek: 'barqaror', example: 'Cities need sustainable transport.', topic: 'Environment', level: 'Intermediate' },
  { word: 'biodiversity', definition: 'the variety of living things in an area', uzbek: 'biologik xilma-xillik', example: 'Deforestation threatens biodiversity.', topic: 'Environment', level: 'Advanced' },
  { word: 'emissions', definition: 'gases released into the air', uzbek: 'chiqindi gazlar', example: 'Public transport can reduce emissions.', topic: 'Environment', level: 'Upper-intermediate' },
  { word: 'renewable', definition: 'naturally replaced after use', uzbek: 'qayta tiklanadigan', example: 'Solar power is a renewable energy source.', topic: 'Environment', level: 'Intermediate' },
  { word: 'allocate', definition: 'to give resources for a particular purpose', uzbek: 'ajratmoq, taqsimlamoq', example: 'The council allocated more money to schools.', topic: 'Society', level: 'Advanced' },
  { word: 'inequality', definition: 'an unfair difference between groups', uzbek: 'tengsizlik', example: 'Education can reduce social inequality.', topic: 'Society', level: 'Upper-intermediate' },
  { word: 'demographic', definition: 'relating to the population of a place', uzbek: 'demografik', example: 'The city has experienced demographic change.', topic: 'Society', level: 'Advanced' },
  { word: 'welfare', definition: 'health, happiness, and good conditions', uzbek: 'farovonlik', example: 'The policy aims to improve child welfare.', topic: 'Society', level: 'Upper-intermediate' },
  { word: 'accessibility', definition: 'how easy something is to reach or use', uzbek: 'foydalanish imkoniyati', example: 'Accessibility matters in public services.', topic: 'Society', level: 'Upper-intermediate' },
  { word: 'congestion', definition: 'overcrowding, especially on roads', uzbek: 'tirbandlik', example: 'Congestion is common during rush hour.', topic: 'Cities', level: 'Intermediate' },
  { word: 'infrastructure', definition: 'basic systems and services a city needs', uzbek: 'infratuzilma', example: 'New infrastructure improved the district.', topic: 'Cities', level: 'Upper-intermediate' },
  { word: 'urbanisation', definition: 'the growth of towns and cities', uzbek: 'shaharlashuv', example: 'Urbanisation has increased demand for housing.', topic: 'Cities', level: 'Advanced' },
  { word: 'commute', definition: 'travel regularly between home and work', uzbek: 'ishga qatnamoq', example: 'Many residents commute by train.', topic: 'Cities', level: 'Intermediate' },
  { word: 'affordable', definition: 'not too expensive', uzbek: 'hamyonbop', example: 'Young families need affordable housing.', topic: 'Cities', level: 'Intermediate' },
  { word: 'conventional', definition: 'usual or traditional', uzbek: 'an’anaviy', example: 'Some students prefer conventional classrooms.', topic: 'Technology', level: 'Intermediate' },
  { word: 'innovation', definition: 'a new idea, method, or product', uzbek: 'yangilik, innovatsiya', example: 'Innovation has transformed the workplace.', topic: 'Technology', level: 'Intermediate' },
  { word: 'automation', definition: 'using machines to do work automatically', uzbek: 'avtomatlashtirish', example: 'Automation can increase productivity.', topic: 'Technology', level: 'Upper-intermediate' },
  { word: 'privacy', definition: 'freedom from unwanted public attention', uzbek: 'shaxsiy daxlsizlik', example: 'Digital privacy is a growing concern.', topic: 'Technology', level: 'Intermediate' },
  { word: 'obsolete', definition: 'no longer used because something newer exists', uzbek: 'eskirgan', example: 'Some jobs may become obsolete.', topic: 'Technology', level: 'Advanced' },
];

const DAY = 86_400_000;
const INTERVALS = [1, 3, 7, 14, 30];

export function reviewWord(previous: Progress | undefined, remembered: boolean, now = Date.now()): Progress {
  const stage = remembered ? Math.min((previous?.stage ?? 0) + 1, INTERVALS.length) : 0;
  return {
    stage,
    dueAt: remembered ? now + INTERVALS[stage - 1] * DAY : now,
    reviews: (previous?.reviews ?? 0) + 1,
  };
}

export function dueWords(words: Word[], progress: ProgressMap, now = Date.now()): Word[] {
  return words.filter((word) => !progress[word.word] || progress[word.word].dueAt <= now);
}
