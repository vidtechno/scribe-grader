import { describe, expect, it } from 'vitest';
import { extractFaq } from '../../api/_lib/faq';

describe('blog FAQ extraction', () => {
  it('reads question and answer pairs from an English FAQ section', () => {
    const html = '<h2>Intro</h2><p>x</p><h2 id="f">Frequently asked questions</h2><h3>How long?</h3><p>About <strong>40</strong> minutes.</p><h3>Why?</h3><p>Because.</p><h2>Next</h2><h3>Not FAQ</h3><p>no</p>';
    expect(extractFaq(html)).toEqual([{ q: 'How long?', a: 'About 40 minutes.' }, { q: 'Why?', a: 'Because.' }]);
  });
  it('reads the Uzbek FAQ heading', () => {
    expect(extractFaq('<h2>Ko‘p beriladigan savollar</h2><h3>Savol?</h3><p>Javob.</p>')).toEqual([{ q: 'Savol?', a: 'Javob.' }]);
  });
  it('returns nothing when there is no FAQ', () => {
    expect(extractFaq('<h2>Only</h2><p>text</p>')).toEqual([]);
  });
});
