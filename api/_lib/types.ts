export type Vocab = [word: string, meaning: string];

export type Part1Topic = {
  slug: string; title: string; intro: string;
  qa: { q: string; a: string }[]; vocab: Vocab[]; tips: string[];
};

export type CueCard = {
  slug: string; title: string; category: string; cue: string; points: string[];
  sample: string[]; vocab: Vocab[]; tips: string[];
  part3: { q: string; idea: string }[];
};

export type EssayType = 'Opinion (agree/disagree)' | 'Discussion + opinion' | 'Problem and solution' | 'Advantages and disadvantages' | 'Two-part question';
export type Task2Question = {
  slug: string; title: string; category: string; type: EssayType; question: string; analysis: string;
  outline: { heading: string; text: string }[]; sample: string[]; vocab: Vocab[]; mistakes: string[];
};
