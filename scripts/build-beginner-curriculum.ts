/**
 * Writes docs/beginner-curriculum.md and docs/elementary-curriculum.md: the course maps and audits, generated from the
 * real lesson content. Run: npx tsx scripts/build-beginner-curriculum.ts
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { A1_UNITS, BEGINNER_UNITS, UNIT_TEST, LEVEL_TEST, drillIds, loadUnit } from '../src/features/learn/course';
import { DRILL_GAME, DRILL_REVIEW_OF, GAMES } from '../src/features/learn/games';
import { BEGINNER_EXAM } from '../src/features/learn/content/beginner/exam';
import { ELEMENTARY_EXAM } from '../src/features/learn/content/a1/exam';

const KIND: Record<string, string> = { grammar: 'Dars', situation: 'Hayotiy vaziyat', review: 'Takror', skill: "Ko'nikma" };
const strip = (s: string) => s.replace(/\*\*|\*|`/g, '').replace(/\n/g, ' ');
const targets = [
  { name: 'Beginner', file: 'docs/beginner-curriculum.md', units: BEGINNER_UNITS, exam: BEGINNER_EXAM },
  { name: 'Elementary', file: 'docs/elementary-curriculum.md', units: A1_UNITS, exam: ELEMENTARY_EXAM },
];
for (const target of targets) {
const out: string[] = [];
let lessons = 0, minis = 0, drills = 0;
const kinds: Record<string, number> = {};
const wordSet = new Set<string>();
for (const u of target.units) {
  const content = await loadUnit(u.id);
  out.push(`\n## ${u.n}-mavzu. ${u.titleUz}\n`);
  out.push(`**O'rganiladi:** ${(u.learns ?? []).join('; ')}\n`);
  out.push('| # | ID | Turi | Nomi | Maqsad | So\'z | Slayd | Mashq | Tekshiruv | O\'yin / mashq |');
  out.push('|---|----|------|------|--------|------|-------|-------|-----------|---------------|');
  u.lessons.forEach((m, i) => {
    const l = content.find((x) => x.id === m.id)!;
    lessons++; if (l.mini) minis++;
    const kind = m.kind ?? 'grammar';
    kinds[kind] = (kinds[kind] ?? 0) + 1;
    l.words.forEach((w) => wordSet.add(w.en.toLowerCase()));
    const ds = drillIds(m.id).map((d) => { drills++; const g = DRILL_GAME[d]; const rev = DRILL_REVIEW_OF[d]; return `${d}: ${g ? GAMES[g].label : '?'}${rev ? ` (takror: ${rev.join(', ')})` : ''}`; });
    out.push(`| ${i + 1} | ${m.id} | ${KIND[kind]}${l.mini ? ' (mikro)' : ''} | ${m.titleUz} | ${strip(l.goal).slice(0, 110)}… | ${l.words.length} | ${l.slides.length} | ${l.practice.length} | ${l.quiz.length} | ${ds.join('<br>') || '—'} |`);
  });
  out.push(`\nMavzu testi: ${UNIT_TEST.questions} savol, ${UNIT_TEST.passPercent}% (bosqich oxirida).`);
}
const examBySkill = target.exam.reduce<Record<string, number>>((a, x) => ({ ...a, [x.skill]: (a[x.skill] ?? 0) + 1 }), {});
const head = `# ${target.name} kursi: xarita va audit

Bu fayl \`scripts/build-beginner-curriculum.ts\` bilan koddagi haqiqiy kontentdan yaratiladi.

## Umumiy ko'rsatkichlar

- Darslar: **${lessons}** (to'liq ${lessons - minis}, mikro-dars ${minis}); turlari: ${Object.entries(kinds).map(([k, n]) => `${KIND[k]} ${n}`).join(', ')}
- O'yin va mavzu testlari (mashq): **${drills}**
- Mavzu testlari: **${target.units.length}**, yakuniy imtihon: **1** (jami faoliyat: **${lessons + drills + target.units.length + 1}**)
- Noyob yangi so'zlar: **${wordSet.size}**
- Yakuniy imtihon: ${LEVEL_TEST.questions} savol, banki ${target.exam.length} ta (${Object.entries(examBySkill).map(([k, n]) => `${k} ${n}`).join(', ')}), jami 70% va har bir ko'nikmada 50%.

## Baholash zanjiri

1. Mikro-dars: qisqa nazariya, yo'naltirilgan mashq, mustaqil mashq, **3 ta tezkor tekshiruv savoli** (dars 50% birinchi urinish aniqligida hisoblanadi).
2. Mavzu bloki: **mavzu testi (mastery)** — o'yin ko'rinishidagi mashq, 70%; zaif bo'lsa tegishli darslar tavsiya etiladi, butun mavzuni qayta o'qish shart emas.
3. Bosqich oxirida: **mini-boss** va **mavzu testi (${UNIT_TEST.questions} savol, ${UNIT_TEST.passPercent}%)**.
4. Kurs oxirida: **${target.name} yakuniy imtihoni** (grammatika, lug'at, o'qish, tinglash, yozish + baholanmaydigan gapirish).
`;
mkdirSync('docs', { recursive: true });
writeFileSync(target.file, head + out.join('\n') + '\n');
console.log(`${target.name}: lessons ${lessons} minis ${minis} drills ${drills} words ${wordSet.size}`);
}
