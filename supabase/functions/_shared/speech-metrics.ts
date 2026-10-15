/** Measurable facts about a speaking transcript. Computed in code so the examiner model cannot invent them. */
export interface SpeechMetrics {
  words: number;
  uniqueWords: number;
  /** unique words / words (0-1); longer answers naturally score lower. */
  lexicalDiversity: number;
  wordsPerMinute: number | null;
  sentences: number;
  averageSentenceLength: number;
  longestSentence: number;
  fillerCount: number;
  fillers: { word: string; count: number }[];
  repeatedWords: { word: string; count: number }[];
  /** Linking words beyond and/but/so/because, in the order first used. */
  connectors: string[];
  basicConnectorCount: number;
  /** Words of 8+ letters, as a share of all words (0-1). */
  longWordShare: number;
  contractions: number;
}

const STOP = new Set(['the', 'a', 'an', 'and', 'or', 'but', 'so', 'to', 'of', 'in', 'on', 'at', 'for', 'with', 'is', 'are', 'was', 'were', 'be', 'been', 'it', 'its', 'i', 'you', 'he', 'she', 'we', 'they', 'my', 'me', 'that', 'this', 'there', 'have', 'has', 'had', 'do', 'does', 'did', 'not', 'very', 'really', 'can', 'will', 'would', 'as', 'if', 'from', 'by', 'about', 'what', 'which', 'who', 'when', 'where', 'because', 'than', 'then', 'just', 'also', 'more', 'some', 'like', 'them', 'their', 'our', 'your', 'his', 'her', 'people', 'thing', 'things']);
const FILLER_WORDS = ['um', 'uh', 'er', 'erm', 'ah', 'hmm', 'mm'];
const FILLER_PHRASES = ['you know', 'i mean', 'sort of', 'kind of', 'basically', 'actually', 'literally', 'so yeah', 'or something'];
const ADVANCED_CONNECTORS = ['however', 'although', 'though', 'whereas', 'while', 'therefore', 'as a result', 'for example', 'for instance', 'in addition', 'moreover', 'furthermore', 'on the other hand', 'in contrast', 'firstly', 'secondly', 'finally', 'in conclusion', 'besides', 'instead', 'otherwise', 'despite', 'in spite of', 'unless', 'nevertheless', 'apart from', 'as well as', 'on top of that', 'in my opinion', 'to be honest', 'having said that', 'that is why', 'what is more', 'as far as i am concerned'];

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const count = (text: string, phrase: string) => (text.match(new RegExp(`(?<![a-z'])${escape(phrase)}(?![a-z'])`, 'g')) ?? []).length;

export function speechMetrics(transcript: string, durationSeconds: number | null): SpeechMetrics {
  const text = transcript.toLowerCase().replace(/[’‘]/g, "'");
  const tokens = text.match(/[a-z]+(?:'[a-z]+)?/g) ?? [];
  const words = tokens.length;
  const unique = new Set(tokens);
  const sentenceList = transcript.split(/(?<=[.!?])\s+|\n+/).map((s) => s.trim()).filter((s) => /[a-z]/i.test(s));
  const lengths = sentenceList.map((s) => (s.match(/[A-Za-z]+(?:['’][A-Za-z]+)?/g) ?? []).length);
  const fillers = [...FILLER_WORDS, ...FILLER_PHRASES].map((word) => ({ word, count: count(text, word) })).filter((f) => f.count > 0).sort((a, b) => b.count - a.count);
  const freq = new Map<string, number>();
  for (const t of tokens) if (t.length > 2 && !STOP.has(t)) freq.set(t, (freq.get(t) ?? 0) + 1);
  const repeatedWords = [...freq].filter(([, n]) => n >= 4).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([word, n]) => ({ word, count: n }));
  const connectors = ADVANCED_CONNECTORS.filter((c) => count(text, c) > 0).sort((a, b) => text.indexOf(a) - text.indexOf(b));
  const basic = ['and', 'but', 'so', 'because', 'then'].reduce((n, c) => n + count(text, c), 0);
  return {
    words,
    uniqueWords: unique.size,
    lexicalDiversity: words ? Math.round((unique.size / words) * 100) / 100 : 0,
    wordsPerMinute: durationSeconds && durationSeconds > 0 ? Math.round((words * 60) / durationSeconds) : null,
    sentences: sentenceList.length,
    averageSentenceLength: lengths.length ? Math.round((lengths.reduce((a, b) => a + b, 0) / lengths.length) * 10) / 10 : 0,
    longestSentence: lengths.length ? Math.max(...lengths) : 0,
    fillerCount: fillers.reduce((n, f) => n + f.count, 0),
    fillers,
    repeatedWords,
    connectors,
    basicConnectorCount: basic,
    longWordShare: words ? Math.round((tokens.filter((t) => t.length >= 8).length / words) * 100) / 100 : 0,
    contractions: (text.match(/[a-z]+'(?:s|t|re|ve|ll|d|m)\b/g) ?? []).length,
  };
}
