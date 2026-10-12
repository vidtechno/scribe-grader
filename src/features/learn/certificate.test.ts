import { describe, expect, it } from 'vitest';
import { CERT_CEFR, certificateSvg, formatCertDate } from './certificate';

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
});
