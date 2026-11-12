import { describe, expect, it } from 'vitest';
import { isFreshlyIssued, linkedinAddUrl, linkedinShareUrl, shareText, shareUrl, storyHeadline, telegramShareUrl } from './certificate-share';
import { makeConfetti } from './confetti';

describe('certificate-share', () => {
  it('builds the public verification link', () => {
    expect(shareUrl('SC-B2-K7M2Q9XA')).toBe('https://www.scorify.uz/certificate/SC-B2-K7M2Q9XA');
    expect(shareUrl(' SC A/1 ')).toBe('https://www.scorify.uz/certificate/SC%20A%2F1');
  });
  it('writes the text in Uzbek by default and in English on request', () => {
    expect(shareText({ levelTitle: 'Upper-Intermediate', cefr: 'B2', percent: 86.6 })).toBe("Scorify.uz'da Upper-Intermediate (B2) darajasini tugatdim, yakuniy test 87%. Sertifikatni shu yerda tekshirish mumkin:");
    expect(shareText({ levelTitle: 'Upper-Intermediate', cefr: 'B2', percent: 87, lang: 'en' })).toBe('I finished the Upper-Intermediate (B2) level on Scorify.uz, final test 87%. You can check the certificate here:');
  });
  it('leaves the percent out when there is none, and has no hashtags', () => {
    const text = shareText({ levelTitle: 'Elementary', cefr: 'A1', percent: null });
    expect(text).not.toContain('yakuniy test');
    expect(text).not.toContain('#');
  });
  it('writes the story headline', () => {
    expect(storyHeadline('Upper-Intermediate', 'B2')).toBe('Men Upper-Intermediate (B2) darajasini tugatdim!');
    expect(storyHeadline('Upper-Intermediate', 'B2', 'en')).toBe('I finished the Upper-Intermediate (B2) level!');
  });
  it('encodes the Telegram and LinkedIn share links', () => {
    const url = shareUrl('SC-B2-K7M2Q9XA');
    expect(telegramShareUrl(url, 'Salom & xayr')).toBe(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=Salom%20%26%20xayr`);
    expect(linkedinShareUrl(url)).toBe(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
  });
  it('builds the LinkedIn add-to-profile link', () => {
    const u = new URL(linkedinAddUrl({ levelTitle: 'Upper-Intermediate', cefr: 'B2', number: 'SC-B2-K7M2Q9XA', date: new Date(2026, 10, 12) }));
    expect(u.origin + u.pathname).toBe('https://www.linkedin.com/profile/add');
    expect(u.searchParams.get('startTask')).toBe('CERTIFICATION_NAME');
    expect(u.searchParams.get('organizationName')).toBe('Scorify.uz');
    expect(u.searchParams.get('issueYear')).toBe('2026');
    expect(u.searchParams.get('issueMonth')).toBe('11');
    expect(u.searchParams.get('certUrl')).toBe('https://www.scorify.uz/certificate/SC-B2-K7M2Q9XA');
    expect(u.searchParams.get('certId')).toBe('SC-B2-K7M2Q9XA');
    expect(u.searchParams.get('name')).toContain('B2');
  });
  it('treats a certificate issued in the last two minutes as fresh', () => {
    const now = Date.parse('2026-11-12T10:00:00Z');
    expect(isFreshlyIssued('2026-11-12T09:59:00Z', now)).toBe(true);
    expect(isFreshlyIssued('2026-11-10T09:59:00Z', now)).toBe(false);
    expect(isFreshlyIssued('garbage', now)).toBe(false);
  });
});

describe('makeConfetti', () => {
  const seeded = () => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; };
  it('makes the requested number of particles, and none for 0 or negative', () => {
    expect(makeConfetti(40)).toHaveLength(40);
    expect(makeConfetti(0)).toEqual([]);
    expect(makeConfetti(-3)).toEqual([]);
  });
  it('is deterministic for the same random source and keeps values in sane ranges', () => {
    const a = makeConfetti(30, seeded());
    expect(a).toEqual(makeConfetti(30, seeded()));
    for (const p of a) {
      expect(p.size).toBeGreaterThanOrEqual(6);
      expect(p.duration).toBeGreaterThan(1);
      expect(p.duration).toBeLessThan(3);
      expect(p.delay + p.duration).toBeLessThan(3.2);
      expect(p.rise).toBeGreaterThan(0);
      expect(Math.sign(p.dx)).toBe(p.originX < 50 ? 1 : -1);
    }
    expect(new Set(a.map((p) => p.originX)).size).toBe(2);
  });
});
