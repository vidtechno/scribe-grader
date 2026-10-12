import type { GameKind } from './types';

/** The practice games and checks, in the learner's language. Each is built from the existing exercise kinds. */
export const GAMES: Record<GameKind, { label: string; hint: string }> = {
  'word-match': { label: "So'zlarni moslash", hint: "Inglizcha so'zlarni tarjimasi bilan juftlang" },
  'sentence-builder': { label: 'Gap tuzish', hint: "So'zlardan to'g'ri tartibda gap yig'ing" },
  'grammar-detective': { label: 'Grammatika detektivi', hint: "Gapdagi xatoni toping va to'g'rilang" },
  'listening': { label: 'Tinglash o\'yini', hint: 'Eshitganingizni tanlang yoki yozing' },
  'memory-review': { label: 'Xotira takrori', hint: "Avval o'rganganlaringizni eslang" },
  'conversation': { label: 'Suhbat tanlovi', hint: "Vaziyatga mos javobni tanlang" },
  'speed-round': { label: 'Tezkor raund', hint: "Qisqa savollarga tez javob bering (vaqt chegarasiz)" },
  'fill-gap': { label: "Bo'sh joyni to'ldirish", hint: "Gapdagi yetishmayotgan so'z yoki shaklni yozing" },
  'odd-one-out': { label: 'Ortiqchasini toping', hint: "Mos kelmaydigan so'z yoki shaklni toping" },
  'mini-boss': { label: 'Mini-boss', hint: "Butun mavzu bo'yicha yakuniy sinov" },
  'mastery': { label: 'Mavzu testi', hint: "Mavzuni o'zlashtirganingizni tekshiring" },
};

/** What every drill is: its game or check. (A drill's own content is only exercises.) */
export const DRILL_GAME: Record<string, GameKind> = {
  'u2-l2-d1': 'fill-gap', 'u2-l2-d2': 'memory-review', 'u2-l3-d1': 'grammar-detective', 'u2-l4-d1': 'sentence-builder',
  'u2-l4-d2': 'memory-review', 'u2-l5-d1': 'odd-one-out', 'u2-l5-d2': 'memory-review',
  'u3-l2-d1': 'grammar-detective', 'u3-l3-d1': 'fill-gap', 'u3-l3-d2': 'grammar-detective', 'u3-l4-d1': 'fill-gap',
  'u3-l5-d1': 'fill-gap', 'u3-l5-d2': 'conversation', 'u3-l7-d1': 'fill-gap',
  'u4-l2-d1': 'fill-gap', 'u4-l4-d1': 'odd-one-out', 'u4-l5-d1': 'speed-round', 'u4-l8-d1': 'fill-gap',
  'u5-l3-d1': 'fill-gap', 'u5-l4-d1': 'word-match', 'u5-l4-d2': 'memory-review', 'u5-l5-d1': 'grammar-detective',
  'u5-l6-d1': 'fill-gap', 'u5-l7-d1': 'conversation', 'u5-l8-d1': 'sentence-builder',
  // added with the rebuilt Beginner
  'u1-l4-d1': 'listening', 'u1-l6-d1': 'word-match', 'u1-l8-d1': 'odd-one-out', 'u1-l10-d1': 'mini-boss',
  'u2-l4-d3': 'mastery', 'u2-l7-d1': 'conversation', 'u2-l14-d1': 'odd-one-out', 'u2-l11-d1': 'mini-boss',
  'u3-l13-d1': 'fill-gap', 'u3-l15-d1': 'listening', 'u3-l11-d1': 'mastery', 'u3-l12-d1': 'mini-boss',
  'u4-l9-d1': 'conversation', 'u4-l13-d1': 'sentence-builder', 'u4-l16-d1': 'mastery', 'u4-l12-d1': 'mini-boss',
  'u5-l14-d1': 'listening', 'u5-l15-d1': 'mastery', 'u5-l12-d1': 'mini-boss',
};

/** Mastery checks and mini-bosses: the lessons to revisit when the result is weak. */
export const DRILL_REVIEW_OF: Record<string, string[]> = {
  'u1-l10-d1': ['u1-l3', 'u1-l4', 'u1-l5', 'u1-l6', 'u1-l7'],
  'u2-l4-d3': ['u2-l2', 'u2-l3', 'u2-l4'],
  'u2-l11-d1': ['u2-l5', 'u2-l6', 'u2-l7', 'u2-l8'],
  'u3-l11-d1': ['u3-l2', 'u3-l3', 'u3-l13', 'u3-l4', 'u3-l5', 'u3-l14'],
  'u3-l12-d1': ['u3-l6', 'u3-l7', 'u3-l8'],
  'u4-l16-d1': ['u4-l8', 'u4-l17', 'u4-l15', 'u4-l16'],
  'u4-l12-d1': ['u4-l2', 'u4-l3', 'u4-l4', 'u4-l5', 'u4-l7'],
  'u5-l15-d1': ['u5-l2', 'u5-l3', 'u5-l13', 'u5-l14', 'u5-l4', 'u5-l5', 'u5-l15'],
  'u5-l12-d1': ['u5-l1', 'u5-l6', 'u5-l7', 'u5-l8'],
};
