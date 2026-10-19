import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { MESSAGES } from './index';

function walk(dir: string, out: string[] = []): string[] {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(f.name) && !/\.test\./.test(f.name)) out.push(p);
  }
  return out;
}

describe('translation keys used in code', () => {
  it('every literal t("key") / translate(lang, "key") exists in both languages', () => {
    const missing: string[] = [];
    for (const file of walk(path.resolve(__dirname, '..'))) {
      const src = fs.readFileSync(file, 'utf8');
      for (const m of src.matchAll(/\b(?:t|translate\([^,()]+,)\s*\(?\s*'([a-zA-Z][\w.-]*\.[\w.-]+)'/g)) {
        if (!(m[1] in MESSAGES.en)) missing.push(`${path.relative(process.cwd(), file)}: ${m[1]}`);
      }
    }
    expect(missing).toEqual([]);
  });
});
