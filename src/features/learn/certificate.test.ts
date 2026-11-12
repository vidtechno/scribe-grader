import { describe, expect, it } from 'vitest';
import { CERT_CEFR, CERT_H, certificateSvg, fitFontSize, formatCertDate } from './certificate';

describe('certificate', () => {
  const date = new Date('2026-10-12T10:00:00Z');
  it('prints the name, level and result, and escapes markup in the name', () => {
    const svg = certificateSvg({ name: 'Ali <b>"Valiyev"</b> & Co', levelTitle: 'Beginner', cefr: CERT_CEFR.beginner, percent: 85, date, number: 'SC-X' });
    expect(svg).toContain('Beginner');
    expect(svg).toContain('A0–A1');
    expect(svg).toContain('85%');
    expect(svg).not.toContain('<b>');
    expect(svg).toContain('&lt;b&gt;');
  });
  it('leaves the result line out when there is no score', () => {
    expect(certificateSvg({ name: 'Ali Valiyev', levelTitle: 'Elementary', cefr: 'A1', date, number: 'SC-X' })).not.toContain('Yakuniy test natijasi');
  });
  it('prints the server-issued number and formats the date as dd.mm.yyyy', () => {
    expect(certificateSvg({ name: 'Ali Valiyev', levelTitle: 'Beginner', cefr: 'A0–A1', date, number: 'SC-BEG-K7M2Q9XA' })).toContain('SC-BEG-K7M2Q9XA');
    expect(formatCertDate(new Date(2026, 9, 12))).toBe('12.10.2026');
  });
  const size = (svg: string, text: string) => Number(new RegExp(`font-size="(\\d+)"[^>]*>${text}`).exec(svg)?.[1]);
  it('shrinks long names so they stay inside the frame, but not below the minimum', () => {
    const short = size(certificateSvg({ name: 'Ali Valiyev', levelTitle: 'Beginner', cefr: 'A1', date, number: 'SC-X' }), 'Ali Valiyev');
    const long48 = 'Abdurahmonov Yo‘ldoshxon Ma’rufjon o‘g‘li Shohh'.padEnd(48, 'x');
    const long = size(certificateSvg({ name: long48, levelTitle: 'Beginner', cefr: 'A1', date, number: 'SC-X' }), long48);
    expect(short).toBe(74);
    expect(long).toBeLessThan(50);
    expect(long).toBeGreaterThanOrEqual(38);
    expect(long * 0.5 * 48).toBeLessThanOrEqual(1000);
    expect(fitFontSize(200, 0.5, 74, 38)).toBe(38);
  });
  it('cuts names over 48 characters and scales a long level title', () => {
    const svg = certificateSvg({ name: 'A'.repeat(80), levelTitle: 'Upper-Intermediate Advanced Plus', cefr: 'B2', date, number: 'SC-X' });
    expect(svg).toContain('A'.repeat(48));
    expect(svg).not.toContain('A'.repeat(49));
    expect(fitFontSize('Upper-Intermediate Advanced Plus · B2'.length, 0.58, 72, 44)).toBeLessThan(72);
  });
  it('keeps the badge inside the inner frame and below the result line', () => {
    const svg = certificateSvg({ name: 'Ali Valiyev', levelTitle: 'Beginner', cefr: 'A1', percent: 85, date, number: 'SC-X' });
    const cy = Number(/translate\(\d+, (\d+)\)/.exec(svg)?.[1]);
    const r = Number(/<circle r="(\d+)" fill="url/.exec(svg)?.[1]);
    expect(cy + r).toBeLessThanOrEqual(CERT_H - 62 - 10);
    const resultY = Number(/y="(\d+)"[^>]*>Final test result/.exec(svg)?.[1]);
    expect(cy - r - resultY).toBeGreaterThanOrEqual(30);
  });
});
