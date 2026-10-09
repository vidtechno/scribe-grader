import type { Drill } from '../../../types';

export const drills: Drill[] = [
  {
    id: 'u17-l1-d1',
    title: 'Like doing or want to do?',
    titleUz: 'Like doing yoki want to do?',
    goal: "**enjoy / like + -ing**, **want / decide + to + V1** va **Let's / How about** qoliplarini to'g'ri tanlashni mashq qilasiz.",
    exercises: [
      { k: 'choice', q: '*I want ___ home.*', opts: ['to go', 'going', 'go', 'to going'], a: 0, why: "**want** + **to + V1**: *I want **to go**.*" },
      { k: 'choice', q: '*She enjoys ___ novels.*', opts: ['read', 'to read', 'reading', 'reads'], a: 2, why: "**enjoy** dan keyin faqat **-ing**." },
      { k: 'choice', q: '*Would you like ___ some tea?*', opts: ['having', 'to have', 'have', 'to having'], a: 1, why: "**would like** + **to + V1**." },
      { k: 'match', pairs: [['enjoy', '+ -ing'], ['want', '+ to + V1'], ['can', '+ V1'], ["Let's", '+ V1 (to\'siz)'], ['How about', '+ -ing (going)']] },
      { k: 'fill', q: 'We finished ___ at nine. (eat)', a: ['eating'], why: "**finish** + -ing: *eating*." },
      { k: 'fill', q: 'Aziz decided ___ English last year. (learn)', a: ['to learn'], why: "**decide** + **to + V1**." },
      { k: 'translate', uz: 'Nega parkda sayr qilmaymiz?', a: ["Why don't we go for a walk in the park", "Why don't we walk in the park", "Why don't we have a walk in the park"], why: "**Why don't we** + V1 (to'siz)." },
      { k: 'tf', q: "*Let's to go home.* — to'g'ri gap.", a: false, why: "**Let's** dan keyin **to** kelmaydi: *Let's go home.*" },
      { k: 'listen', say: "I'd like to ask you a question.", opts: ["I'd like to ask you a question.", 'I like asking you a question.', "I'd like asking you a question.", 'I want ask you a question.'], a: 0, why: "**I'd like** + **to + V1** — muloyim." },
      { k: 'order', uz: "Men erta turishni yomon ko'raman.", words: ['I', 'hate', 'getting', 'up', 'early'], extra: ['to', 'get'], why: "**hate** + -ing: *getting up*." },
      { k: 'fix', wrong: 'I like swim in the river.', a: ['I like swimming in the river.', 'I like to swim in the river.'], hint: 'Ikkinchi fe\'l shakli', why: "**like** dan keyin **-ing** (yoki **to + V1**): *swimming*." },
      { k: 'fix', wrong: 'I want go to the cinema.', a: ['I want to go to the cinema.'], hint: 'Bitta so\'z yetishmayapti', why: "**want** dan keyin **to** shart: *want **to** go*." },
    ],
  },
];
