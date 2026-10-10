import { describe, expect, it } from 'vitest';
import { CERT_CEFR, certificateNumber, certificateSvg, formatCertDate } from './certificate';

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
  it('builds a short number and a dd.mm.yyyy date', () => {
    expect(certificateNumber('beginner', '7f3a1c2e-0000-0000-0000-000000000000', date)).toBe('SC-BEG-261012-7F3A');
    expect(formatCertDate(new Date(2026, 9, 12))).toBe('12.10.2026');
  });
});
