/**
 * Writes docs/beginner-curriculum.md: the Beginner course map and audit, generated from the real lesson content.
 * Run: npx tsx scripts/build-beginner-curriculum.ts
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { BEGINNER_UNITS, UNIT_TEST, LEVEL_TEST, drillIds, loadUnit } from '../src/features/learn/course';
import { DRILL_GAME, DRILL_REVIEW_OF, GAMES } from '../src/features/learn/games';
import { BEGINNER_EXAM } from '../src/features/learn/content/beginner/exam';

const KIND: Record<string, string> = { grammar: 'Dars', situation: 'Hayotiy vaziyat', review: 'Takror', skill: "Ko'nikma" };
const strip = (s: string) => s.replace(/\*\*|\*|`/g, '').replace(/\n/g, ' ');
const out: string[] = [];
let lessons = 0, minis = 0, drills = 0;
const kinds: Record<string, number> = {};
const wordSet = new Set<string>();
for (const u of BEGINNER_UNITS) {
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
const examBySkill = BEGINNER_EXAM.reduce<Record<string, number>>((a, x) => ({ ...a, [x.skill]: (a[x.skill] ?? 0) + 1 }), {});
const head = `# Beginner kursi: xarita va audit

Bu fayl \`scripts/build-beginner-curriculum.ts\` bilan koddagi haqiqiy kontentdan yaratiladi.

## Umumiy ko'rsatkichlar

- Darslar: **${lessons}** (to'liq ${lessons - minis}, mikro-dars ${minis}); turlari: ${Object.entries(kinds).map(([k, n]) => `${KIND[k]} ${n}`).join(', ')}
- O'yin va mavzu testlari (mashq): **${drills}**
- Mavzu testlari: **${BEGINNER_UNITS.length}**, yakuniy imtihon: **1** (jami faoliyat: **${lessons + drills + BEGINNER_UNITS.length + 1}**)
- Noyob yangi so'zlar: **${wordSet.size}**
- Yakuniy imtihon: ${LEVEL_TEST.questions} savol, banki ${BEGINNER_EXAM.length} ta (${Object.entries(examBySkill).map(([k, n]) => `${k} ${n}`).join(', ')}), jami 70% va har bir ko'nikmada 50%.

## Baholash zanjiri

1. Mikro-dars: qisqa nazariya, yo'naltirilgan mashq, mustaqil mashq, **3 ta tezkor tekshiruv savoli** (dars 50% birinchi urinish aniqligida hisoblanadi).
2. Mavzu bloki: **mavzu testi (mastery)** — o'yin ko'rinishidagi mashq, 70%; zaif bo'lsa tegishli darslar tavsiya etiladi, butun mavzuni qayta o'qish shart emas.
3. Bosqich oxirida: **mini-boss** va **mavzu testi (${UNIT_TEST.questions} savol, ${UNIT_TEST.passPercent}%)**.
4. Kurs oxirida: **Beginner yakuniy imtihoni** (grammatika, lug'at, o'qish, tinglash, yozish + baholanmaydigan gapirish).
`;
mkdirSync('docs', { recursive: true });
writeFileSync('docs/beginner-curriculum.md', head + out.join('\n') + '\n');
console.log(`lessons ${lessons} minis ${minis} drills ${drills} words ${wordSet.size}`);
