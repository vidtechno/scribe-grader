export interface ConfettiParticle {
  id: number;
  /** Where the burst starts, in % of the width. */
  originX: number;
  /** Horizontal travel in px (negative = left). */
  dx: number;
  /** Peak height above the origin and the final fall below it, in px. */
  rise: number;
  fall: number;
  rotate: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  round: boolean;
}

export const CONFETTI_COLORS = ['#e11d48', '#f43f5e', '#fb7185', '#f59e0b', '#fbbf24', '#10b981', '#38bdf8', '#ffffff'];

/** Particles for two bursts (left and right); `rng` is injectable so the result can be tested. */
export function makeConfetti(count: number, rng: () => number = Math.random, colors: string[] = CONFETTI_COLORS): ConfettiParticle[] {
  const n = Math.max(0, Math.floor(count));
  return Array.from({ length: n }, (_, id) => {
    const left = id % 2 === 0;
    const spread = 120 + rng() * 260;
    return {
      id,
      originX: left ? 18 : 82,
      dx: (left ? 1 : -1) * spread * (0.3 + rng() * 0.9) + (rng() - 0.5) * 60,
      rise: 160 + rng() * 300,
      fall: 220 + rng() * 260,
      rotate: (rng() - 0.5) * 900,
      size: 6 + Math.floor(rng() * 8),
      delay: rng() * 0.45,
      duration: 1.6 + rng() * 1.1,
      color: colors[Math.floor(rng() * colors.length) % colors.length],
      round: rng() < 0.3,
    };
  });
}
