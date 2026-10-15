/** Approximate raw score (out of 40) to band conversion. Each real test has its own table, so this is an estimate. */
const READING: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1]];
const LISTENING: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1]];

export function bandFor(skill: 'reading' | 'listening', correct: number, total = 40): number {
  // Shorter practice sets (one passage or section) are scaled to 40 first.
  const raw = total === 40 ? correct : Math.round((correct / Math.max(1, total)) * 40);
  const table = skill === 'reading' ? READING : LISTENING;
  return table.find(([min]) => raw >= min)?.[1] ?? 0;
}
