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

export type ChartSpec =
  | { kind: 'line'; title: string; unit: string; xLabels: string[]; series: { name: string; values: number[] }[] }
  | { kind: 'bar'; title: string; unit: string; categories: string[]; series: { name: string; values: number[] }[] }
  | { kind: 'pie'; title: string; pies: { label: string; slices: { label: string; value: number }[] }[] }
  | { kind: 'table'; title: string; headers: string[]; rows: (string | number)[][] }
  | { kind: 'process'; title: string; steps: string[] };

export type Task1Page = {
  slug: string; title: string; chartType: string; question: string; chart: ChartSpec;
  analysis: string; sample: string[]; language: Vocab[]; mistakes: string[];
};

export type VocabPage = {
  slug: string; title: string; intro: string;
  groups: { head: string; items: { word: string; meaning: string; example: string }[] }[]; tips: string[];
};
