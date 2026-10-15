import type { QuestionGroup, ReadingTest, ListeningTest } from './types';

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const norm = (s: string) => s.toLowerCase().replace(/[“”‘’"']/g, '').replace(/\s+/g, ' ');

function limitOf(instruction: string): number | null {
  const m = /NO MORE THAN (ONE|TWO|THREE|FOUR) WORD/i.exec(instruction) ?? /(ONE|TWO|THREE) WORD/i.exec(instruction);
  if (!m) return null;
  return { one: 1, two: 2, three: 3, four: 4 }[m[1].toLowerCase() as 'one'] ?? null;
}

export function groupProblems(where: string, groups: QuestionGroup[], evidence: string, evidenceName: string): string[] {
  const p: string[] = [];
  const haystack = norm(evidence);
  for (const [g, group] of groups.entries()) {
    const at = `${where} group ${g + 1} (${group.kind})`;
    if (!group.instruction || group.instruction.length < 15) p.push(`${at}: instruction missing`);
    if (group.items.length === 0) p.push(`${at}: no items`);
    for (const [i, item] of group.items.entries()) {
      const it = `${at} item ${i + 1}`;
      if (!item.q || item.q.trim().length < 6) p.push(`${it}: question text missing`);
      if (!item.why || item.why.trim().length < 15) p.push(`${it}: why (explanation) missing`);
      if (group.kind === 'tfng' && !['true', 'false', 'not-given'].includes(item.a as string)) p.push(`${it}: bad tfng answer`);
      if (group.kind === 'ynng' && !['yes', 'no', 'not-given'].includes(item.a as string)) p.push(`${it}: bad ynng answer`);
      if (group.kind === 'mcq') {
        const o = (item as unknown as { options: string[] }).options;
        if (!Array.isArray(o) || o.length < 3 || o.length > 4) p.push(`${it}: mcq needs 3-4 options`);
        else if (typeof item.a !== 'number' || item.a < 0 || item.a >= o.length) p.push(`${it}: answer index out of range`);
        else if (new Set(o.map(norm)).size !== o.length) p.push(`${it}: duplicate options`);
      }
      if (group.kind === 'match') {
        if (!Array.isArray(group.options) || group.options.length < 3) p.push(`${at}: match needs options`);
        else if (typeof item.a !== 'number' || item.a < 0 || item.a >= group.options.length) p.push(`${it}: answer index out of range`);
      }
      if (group.kind === 'fill') {
        const a = item.a as string[];
        if (!/___/.test(item.q)) p.push(`${it}: fill question needs ___`);
        if (!Array.isArray(a) || a.length === 0 || a.some((x) => !x.trim())) p.push(`${it}: no accepted answers`);
        else {
          const lim = limitOf(group.instruction);
          if (lim && words(a[0]) > lim) p.push(`${it}: answer "${a[0]}" longer than the word limit`);
          // The answer must be findable in the text/audio script (numbers may be written as digits or words, so only the first variant is checked).
          if (!haystack.includes(norm(a[0])) && !a.some((x) => haystack.includes(norm(x)))) p.push(`${it}: answer "${a[0]}" not found in ${evidenceName}`);
        }
      }
    }
    if (group.kind === 'tfng' || group.kind === 'ynng') {
      const set = new Set(group.items.map((x) => x.a as string));
      if (group.items.length >= 6 && set.size < 3) p.push(`${at}: use all three answers`);
    }
  }
  return p;
}

export function readingProblems(t: ReadingTest): string[] {
  const p: string[] = [];
  if (t.passages.length !== 3) p.push('needs exactly 3 passages');
  let total = 0;
  for (const [i, ps] of t.passages.entries()) {
    const text = ps.paragraphs.join(' ');
    const w = words(text);
    if (w < 650 || w > 1000) p.push(`passage ${i + 1}: ${w} words (want 650-1000)`);
    if (ps.paragraphs.length < 5) p.push(`passage ${i + 1}: too few paragraphs`);
    const n = ps.groups.reduce((s, g) => s + g.items.length, 0);
    total += n;
    if (n < 12 || n > 14) p.push(`passage ${i + 1}: ${n} questions (want 12-14)`);
    const kinds = new Set(ps.groups.map((g) => g.kind));
    if (kinds.size < 3) p.push(`passage ${i + 1}: use at least 3 question types`);
    p.push(...groupProblems(`passage ${i + 1}`, ps.groups, text + ' ' + ps.title, 'the passage'));
  }
  if (total !== 40) p.push(`${total} questions in total (want 40)`);
  return p;
}

export function listeningProblems(t: ListeningTest): string[] {
  const p: string[] = [];
  if (t.sections.length !== 4) p.push('needs exactly 4 sections');
  let total = 0;
  for (const [i, s] of t.sections.entries()) {
    const text = s.lines.map((l) => l.text + ' ' + (l.say ?? '')).join(' ');
    const w = words(s.lines.map((l) => l.say ?? l.text).join(' '));
    if (w < 520 || w > 950) p.push(`section ${i + 1}: ${w} spoken words (want 520-950)`);
    const n = s.groups.reduce((c, g) => c + g.items.length, 0);
    total += n;
    if (n !== 10) p.push(`section ${i + 1}: ${n} questions (want 10)`);
    const voices = new Set(s.lines.map((l) => l.voice));
    if ((i === 0 || i === 2) && voices.size < 2) p.push(`section ${i + 1}: needs a conversation (2+ voices)`);
    if ((i === 1 || i === 3) && voices.size !== 1) p.push(`section ${i + 1}: needs a monologue (1 voice)`);
    if (s.lines.some((l) => l.text.length > 450)) p.push(`section ${i + 1}: a line is longer than 450 characters; split it`);
    if (!s.context || s.context.length < 20) p.push(`section ${i + 1}: context line missing`);
    p.push(...groupProblems(`section ${i + 1}`, s.groups, text, 'the audio script'));
  }
  if (total !== 40) p.push(`${total} questions in total (want 40)`);
  return p;
}
