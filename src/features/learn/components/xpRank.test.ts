import { describe, expect, it } from 'vitest';
import { motivation, rankDelta, weekStart, type MyRank } from './xpRank';

const base: MyRank = { week_xp: 100, rank: 5, total: 13, xp_to_next: 80, next_name: 'Madina', leader_xp: 400, all_time_rank: 4, visible: true };

describe('motivation', () => {
  it('keeps the lead for rank 1, even when improved', () => {
    expect(motivation({ ...base, rank: 1, xp_to_next: null, next_name: null }, 2).key).toBe('learn.xpRank.lead');
  });
  it('names the gain when the rank improved', () => {
    expect(motivation(base, 3)).toEqual({ key: 'learn.xpRank.up', vars: { n: 3 } });
  });
  it('names the person ahead when 30 XP or less are missing', () => {
    expect(motivation({ ...base, xp_to_next: 25 }, 0)).toEqual({ key: 'learn.xpRank.close', vars: { n: 25, name: 'Madina' } });
    expect(motivation({ ...base, xp_to_next: 30 }, 0).key).toBe('learn.xpRank.close');
    expect(motivation({ ...base, xp_to_next: 31 }, 0).key).toBe('learn.xpRank.plain');
  });
  it('invites hidden learners to turn the leaderboard on', () => {
    expect(motivation({ ...base, rank: null, xp_to_next: null, next_name: null, visible: false }, 0).key).toBe('learn.xpRank.hidden');
  });
  it('falls back to a plain line', () => {
    expect(motivation({ ...base, xp_to_next: null, next_name: null }, 0).key).toBe('learn.xpRank.plain');
  });
});

describe('rankDelta', () => {
  it('counts places gained only', () => {
    expect(rankDelta(7, 4)).toBe(3);
    expect(rankDelta(4, 7)).toBe(0);
    expect(rankDelta(4, 4)).toBe(0);
    expect(rankDelta(null, 4)).toBe(0);
    expect(rankDelta(4, null)).toBe(0);
  });
});

describe('weekStart', () => {
  it('returns the Monday', () => {
    expect(weekStart('2026-11-12')).toBe('2026-11-09');
    expect(weekStart('2026-11-09')).toBe('2026-11-09');
    expect(weekStart('2026-11-15')).toBe('2026-11-09');
  });
});
