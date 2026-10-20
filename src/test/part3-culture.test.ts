import { describe, expect, it } from 'vitest';
import seo from '../../api/seo';
import { PART3 } from '../../api/_lib/data-part3';

async function render(path: string): Promise<{ status: number; body: string }> {
  let body = ''; const res = { statusCode: 0, setHeader() {}, end(b?: string) { body = b ?? ''; } };
  await seo({ url: path } as never, res as never);
  return { status: res.statusCode, body };
}
const count = (s: string, re: RegExp) => (s.match(re) ?? []).length;

describe('Speaking Part 3: culture-and-tradition', () => {
  it('renders the extended page with development steps, follow-ups, vocabulary and a Speaking CTA', async () => {
    const { status, body } = await render('/api/seo?kind=sp3&slug=culture-and-tradition');
    expect(status).toBe(200);
    expect(count(body, /<title>/g)).toBe(1);
    expect(count(body, /<meta name="description"/g)).toBe(1);
    expect(count(body, /<link rel="canonical"/g)).toBe(1);
    expect(body).toContain('<link rel="canonical" href="https://www.scorify.uz/ielts-speaking-part-3/culture-and-tradition">');
    expect(count(body, /<h1>/g)).toBe(1);
    expect(body).toContain('<title>IELTS Speaking Part 3 Culture and Tradition: Questions and Answers</title>');
    for (const step of ['Opinion.', 'Reason.', 'Example.', 'Extension.']) expect(body).toContain(`<strong>${step}</strong>`);
    // 5 original questions + 6 follow-ups, each with an answer
    expect(count(body, /<div class="qa">/g)).toBe(11);
    expect(body).toContain('id="follow-ups"');
    expect(body).toContain('Useful vocabulary');
    expect(body).toMatch(/pass down/);
    expect(body).toContain('href="/auth?next=%2Fspeaking"');
    expect(body.indexOf('id="develop"')).toBeLessThan(body.indexOf('Useful vocabulary'));
    expect(body).not.toMatch(/undefined|\[object/);
  });
  it('other Part 3 pages still use the standard template', async () => {
    const t = PART3.find(x => x.slug === 'education')!;
    expect(t.extra).toBeUndefined();
    const { status, body } = await render('/api/seo?kind=sp3&slug=education');
    expect(status).toBe(200);
    expect(body).not.toContain('id="develop"');
    expect(count(body, /<title>/g)).toBe(1);
  });
});
