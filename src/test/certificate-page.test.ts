import { describe, expect, it } from 'vitest';
import { NUMBER_PATTERN, certificatePage, fetchCertificate, type CertificateRow } from '../../api/_lib/certificate-page';

const cert: CertificateRow = { number: 'SC-B2-K7M2Q9XA', level_id: 'b2', full_name: 'Diyorbek Anorboyev', percent: 87, passed_at: '2026-11-10T08:00:00Z', issued_at: '2026-11-10T09:00:00Z' };

describe('certificate number', () => {
  it('accepts issued numbers and rejects everything else', () => {
    for (const n of ['SC-B2-K7M2Q9XA', 'SC-BEG-K7M2Q9XA', 'SC-A1-23456789']) expect(NUMBER_PATTERN.test(n)).toBe(true);
    for (const n of ['', 'sc-b2-k7m2q9xa', 'SC-B2-K7M2Q9X', 'SC-B2-K7M2Q9XI', "SC-B2-K7M2Q9XA'; drop table", '../etc/passwd']) expect(NUMBER_PATTERN.test(n)).toBe(false);
  });
});

describe('public certificate page', () => {
  it('shows who earned what, and that it is real', () => {
    const html = certificatePage(cert, 'sc-b2-k7m2q9xa');
    expect(html).toContain('Sertifikat haqiqiy');
    expect(html).toContain('Diyorbek Anorboyev');
    expect(html).toContain('Upper-Intermediate');
    expect(html).toContain('B2');
    expect(html).toContain('10.11.2026');
    expect(html).toContain('87%');
    expect(html).toContain('SC-B2-K7M2Q9XA');
    expect(html).toContain('<meta name="robots" content="noindex, nofollow">');
    expect(html).toContain('rel="canonical" href="https://www.scorify.uz/certificate/SC-B2-K7M2Q9XA"');
    expect(html).toMatch(/property="og:title" content="Diyorbek Anorboyev/);
  });
  it('escapes the name', () => {
    const html = certificatePage({ ...cert, full_name: '<script>alert(1)</script> Ali' }, cert.number);
    expect(html).not.toContain('<script>alert(1)</script>');
    expect(html).toContain('&lt;script&gt;');
  });
  it('says clearly when the number is unknown', () => {
    const html = certificatePage(null, 'SC-B2-AAAAAAAA');
    expect(html).toContain('Sertifikat topilmadi');
    expect(html).not.toContain('Sertifikat haqiqiy');
  });
});

describe('fetchCertificate', () => {
  it('never calls the database for a malformed number', async () => {
    let called = false;
    const r = await fetchCertificate('hello', (async () => { called = true; return new Response('{}'); }) as typeof fetch);
    expect(r).toBeNull();
    expect(called).toBe(false);
  });
});
