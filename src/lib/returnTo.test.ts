import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';
import { RETURN_TO_KEY, RETURN_TO_ROOTS, clearStoredReturnTo, rememberReturnTo, safeReturnTo, storedReturnTo } from './returnTo';

const D = '/dashboard';

describe('remembered return destination', () => {
  it('stores a safe destination, validates it on read and clears it', () => {
    clearStoredReturnTo();
    expect(storedReturnTo()).toBe(D);
    rememberReturnTo('/learn/lesson/u1-l1');
    expect(storedReturnTo()).toBe('/learn/lesson/u1-l1');
    clearStoredReturnTo();
    expect(storedReturnTo()).toBe(D);
    rememberReturnTo('//evil.com');
    expect(storedReturnTo()).toBe(D);
  });
  it('re-validates what it reads and expires the localStorage fallback', () => {
    clearStoredReturnTo();
    sessionStorage.setItem(RETURN_TO_KEY, 'https://evil.com');
    expect(storedReturnTo()).toBe(D);
    sessionStorage.removeItem(RETURN_TO_KEY);
    localStorage.setItem(RETURN_TO_KEY, JSON.stringify({ path: '/learn', at: Date.now() }));
    expect(storedReturnTo()).toBe('/learn');
    expect(storedReturnTo(Date.now() + 31 * 60 * 1000)).toBe(D);
    localStorage.setItem(RETURN_TO_KEY, 'not json');
    expect(storedReturnTo()).toBe(D);
    clearStoredReturnTo();
  });
});

describe('post-auth return destination', () => {
  it('falls back to the dashboard when there is nothing to return to', () => {
    for (const v of [null, undefined, '', '/', 'learn', ' /learn']) expect(safeReturnTo(v), String(v)).toBe(D);
    expect(safeReturnTo('/dashboard')).toBe(D);
  });

  it('keeps real app pages, with a safe query and hash', () => {
    expect(safeReturnTo('/learn')).toBe('/learn');
    expect(safeReturnTo('/learn/lesson/u1-l1')).toBe('/learn/lesson/u1-l1');
    expect(safeReturnTo('/learn/lesson/b-u1-l1?x=1')).toBe('/learn/lesson/b-u1-l1?x=1');
    expect(safeReturnTo('/learn?tab=words')).toBe('/learn?tab=words');
    expect(safeReturnTo('/profile#referral')).toBe('/profile#referral');
    expect(safeReturnTo('/mock-test/result/123e4567-e89b-12d3-a456-426614174000')).toBe('/mock-test/result/123e4567-e89b-12d3-a456-426614174000');
    expect(safeReturnTo('/u/ab12')).toBe('/u/ab12');
    expect(safeReturnTo('/learn/../writing')).toBe('/writing');
  });

  it('rejects open redirects', () => {
    const attacks = [
      '//evil.com', '//evil.com/learn', '///evil.com', '/\\evil.com', '/\\/evil.com', '\\\\evil.com', '/learn\\..\\evil',
      'https://evil.com', 'https://evil.com/learn', 'http://scorify.uz/learn', 'HTTPS://evil.com', 'javascript:alert(1)', 'JaVaScRiPt:alert(1)',
      'data:text/html,<script>alert(1)</script>', 'vbscript:x', 'evil.com', '@evil.com', '/@evil.com',
      '/%2F/evil.com', '/%2f%2fevil.com', '/learn/%2F%2Fevil.com', '/%5Cevil.com', '/learn/%5cevil.com', '%2F%2Fevil.com', '%2Fevil.com',
      '/\t/evil.com', '/\n/evil.com', '/learn\r\nSet-Cookie: x=1', '/learn\u0000', '/ evil', '/%09/evil.com', '/learn/%0d%0a',
      '/learn//evil.com', '/learn/%2e%2e/%2e%2e/evil', '/%E0%A4%A',
    ];
    for (const v of attacks) expect(safeReturnTo(v), v).toBe(D);
  });

  it('rejects pages that are not part of the app or must not be a destination', () => {
    for (const v of ['/admin', '/admin/blog/1', '/auth', '/auth?next=/learn', '/auth/callback', '/tg', '/api/seo', '/blog', '/ingliz-tili-darslari', '/unknown', '/learning', '/learnx', '/dashboardx', '/.env'])
      expect(safeReturnTo(v), v).toBe(D);
  });

  it('drops an unsafe query or hash but keeps the page', () => {
    expect(safeReturnTo('/learn?x=<script>')).toBe('/learn?x=%3Cscript%3E'); // the URL parser percent-encodes it
    expect(safeReturnTo('/learn?x=1#a<b')).toBe('/learn?x=1');
    expect(safeReturnTo('/learn#"onload=1')).toBe('/learn');
  });

  it('is idempotent and limits the length', () => {
    const once = safeReturnTo('/learn/lesson/u1-l1?x=1#top');
    expect(safeReturnTo(once)).toBe(once);
    expect(safeReturnTo(`/learn?x=${'a'.repeat(600)}`)).toBe(D);
  });

  it('every allowed root is a real route in App.tsx and every protected app route root is accounted for', () => {
    const app = readFileSync('src/App.tsx', 'utf8');
    const roots = new Set([...app.matchAll(/<Route path="\/([a-z-]+)/g)].map((m) => m[1]));
    for (const r of RETURN_TO_ROOTS) expect(roots.has(r), r).toBe(true);
    const excluded = new Set(['auth', 'tg', 'admin', 'uz', 'vocabulary']);
    for (const r of roots) expect(RETURN_TO_ROOTS.includes(r as never) || excluded.has(r) || r === 'uz', `route /${r} is neither allowed nor excluded`).toBe(true);
  });
});
