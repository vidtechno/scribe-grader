import { describe, expect, it } from 'vitest';
import { MESSAGES, translate } from './index';

const vars = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');

describe('translations', () => {
  it('has the same keys in English and Uzbek', () => {
    const en = Object.keys(MESSAGES.en), uz = Object.keys(MESSAGES.uz);
    expect(en.filter((k) => !(k in MESSAGES.uz)), 'missing in Uzbek').toEqual([]);
    expect(uz.filter((k) => !(k in MESSAGES.en)), 'missing in English').toEqual([]);
  });

  it('has no empty texts and the same {placeholders} in both languages', () => {
    for (const key of Object.keys(MESSAGES.en)) {
      expect(MESSAGES.en[key].trim(), key).not.toBe('');
      expect(MESSAGES.uz[key]?.trim(), key).not.toBe('');
      expect(vars(MESSAGES.uz[key] ?? ''), `placeholders of ${key}`).toBe(vars(MESSAGES.en[key]));
    }
  });

  it('fills {placeholders} and falls back to English, then to the key', () => {
    expect(translate('en', 'nav.trial', { days: 3 })).toBe('Trial · 3d');
    expect(translate('uz', 'nav.trial', { days: 3 })).toBe('Sinov · 3 kun');
    expect(translate('uz', 'no.such.key')).toBe('no.such.key');
  });
});
