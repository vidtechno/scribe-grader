import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about what people are doing now. Present Continuous only.
const lesson: Lesson = {
  id: 'u4-l18',
  title: 'What are they doing? Listening and speaking',
  titleUz: "Ular nima qilyapti? Tinglash va gapirish",
  mini: true,
  kind: 'skill',
  goal: "Rasm yoki telefon suhbatida **kim hozir nima qilayotganini** tinglab tushunasiz va o'zingiz ham shunday gapirib bera olasiz: *A boy is riding a bike. Two girls are sitting on a bench.*",
  slides: [
    {
      title: 'Tinglash: telefondagi suhbat',
      blocks: [
        { t: 'p', md: "Tinglaganda avval **kim** va **nima qilyapti** (fe'l + -ing) so'zlariga e'tibor bering. Quyidagi dialogni o'qing, keyin tinglab ko'ring." },
        {
          t: 'dialog', lines: [
            { who: 'Aziz', en: "Hi, Dilya! Where are you? I'm in the park.", uz: "Salom, Dilya! Qayerdasan? Men bog'damman." },
            { who: 'Dilya', en: "I'm at home. I'm doing my homework. What are you doing?", uz: "Men uydaman. Uy vazifamni qilyapman. Sen nima qilyapsan?" },
            { who: 'Aziz', en: "I'm sitting on a bench and eating ice cream. It's sunny!", uz: "Skameykada o'tirib muzqaymoq yeyapman. Quyoshli!" },
            { who: 'Dilya', en: 'Are your friends there?', uz: "Do'stlaring ham u yerdami?" },
            { who: 'Aziz', en: "Yes, they are. Two boys are playing with a ball, and Sam is riding his bike.", uz: "Ha. Ikki bola to'p o'ynayapti, Sam esa velosipedda ketyapti." },
            { who: 'Dilya', en: 'Lucky you! I can hear a noise. Is Sam shouting?', uz: "Baxtli ekansan! Shovqin eshityapman. Sam qichqiryaptimi?" },
            { who: 'Aziz', en: "Yes, Sam is shouting at the boys. He wants the ball!", uz: "Ha, Sam bolalarga qichqiryapti. U to'pni xohlayapti!" },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: 'Where is Aziz?', opts: ['At home.', 'In the park.', 'At school.', 'In a shop.'], a: 1, why: "*I'm in the park.*" } },
        { t: 'check', ex: { k: 'choice', q: 'What is Dilya doing?', opts: ['Her homework.', 'Eating ice cream.', 'Riding a bike.', 'Shouting.'], a: 0, why: "*I'm doing my homework.*" } },
      ],
    },
    {
      title: 'Rasmni tasvirlash',
      blocks: [
        { t: 'p', md: "Rasmni tasvirlashda shu tartibni ishlating:\n1. **Joy**: *This is a park.* / *There are five people.*\n2. **Kim nima qilyapti**: *A boy is riding a bike.*\n3. Ko'p odamlar bo'lsa: *Two girls are sitting on a bench.*" },
        {
          t: 'examples', items: [
            { en: 'This is a picture of a park.', uz: "Bu bog' rasmi." },
            { en: 'A boy is riding a bike.', uz: 'Bir bola velosipedda ketyapti.' },
            { en: 'Two girls are sitting on a bench.', uz: "Ikki qiz skameykada o'tiribdi." },
            { en: "They aren't running. They're talking.", uz: 'Ular yugurmayapti. Gaplashyapti.' },
          ],
        },
        { t: 'tip', tone: 'info', md: "Gapirishda to'xtab qolsangiz, oddiy gaplarni ketma-ket ayting: *A man is… He's wearing… It's raining.* Mukammal bo'lish shart emas — **am/is/are + -ing** ni unutmang." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['A boy is riding a bike.', 'Two girls are sitting on a bench.'] },
          bad: { title: "Noto'g'ri", items: ['A boy riding a bike.', 'Two girls is sitting on a bench.'] },
        },
        { t: 'check', ex: { k: 'fill', q: 'Two boys ___ playing with a ball.', a: ['are'], why: "*two boys* = they → **are**." } },
      ],
    },
    {
      title: 'Tinglang va ayting',
      blocks: [
        { t: 'p', md: "Avval gaplarni tinglang, so'ng ovoz chiqarib takrorlang. Tovushlarga e'tibor bering: *-ing* oxiri \"ŋ\" (alohida g yo'q)." },
        {
          t: 'table', head: ['Inglizcha', 'Tarjima'], speak: [0],
          rows: [
            ["I'm sitting on a bench.", "Men skameykada o'tiribman."],
            ['A girl is eating ice cream.', 'Bir qiz muzqaymoq yeyapti.'],
            ['The boys are playing with a ball.', "Bolalar to'p o'ynayapti."],
            ["Sam isn't shouting now.", 'Sam hozir qichqirmayapti.'],
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'A boy is riding a bike.', opts: ['A boy is riding a bike.', 'A boy is eating a bike.', 'Boys are riding bikes.', 'A girl is riding a bike.'], a: 0, why: "Eshitganingiz: *A boy is riding a bike.*" } },
      ],
    },
  ],
  words: [
    { en: 'picture', uz: 'rasm, surat', ipa: 'ˈpɪk.tʃər', pos: 'noun', ex: 'Look at the picture. What are they doing?', exUz: 'Rasmga qarang. Ular nima qilyapti?' },
    { en: 'bench', uz: 'skameyka', ipa: 'bentʃ', pos: 'noun', ex: 'Two girls are sitting on a bench.', exUz: "Ikki qiz skameykada o'tiribdi." },
    { en: 'ice cream', uz: 'muzqaymoq', ipa: 'ˈaɪs kriːm', pos: 'noun', ex: 'He is eating an ice cream.', exUz: 'U muzqaymoq yeyapti.' },
    { en: 'bike', uz: 'velosiped', ipa: 'baɪk', pos: 'noun', ex: 'My brother is riding his bike.', exUz: 'Akam velosipedda ketyapti.' },
    { en: 'ball', uz: "to'p", ipa: 'bɔːl', pos: 'noun', ex: 'The boys are playing with a ball.', exUz: "Bolalar to'p o'ynayapti." },
    { en: 'ride', uz: 'minmoq, haydamoq', ipa: 'raɪd', pos: 'verb', ex: 'Sam is riding his bike.', exUz: 'Sam velosipedda ketyapti.' },
  ],
  practice: [
    { k: 'match', pairs: [['picture', 'rasm'], ['bench', 'skameyka'], ['ice cream', 'muzqaymoq'], ['bike', 'velosiped'], ['ball', "to'p"], ['ride', 'minmoq']] },
    { k: 'listen', say: "I'm sitting on a bench.", opts: ["I'm sitting on a bench.", "I'm sitting on a bike.", "I'm riding a bike.", 'I sit on a bench.'], a: 0 },
    { k: 'listen', say: 'Two boys are playing with a ball.', opts: ['Two boys are playing with a ball.', 'Two girls are playing with a ball.', 'A boy is playing with a ball.', 'Two boys are shouting.'], a: 0 },
    { k: 'listen', say: "Dilya is doing her homework.", opts: ['Dilya is doing her homework.', 'Dilya is eating lunch.', 'Dilya is having a shower.', 'Dilya is at the park.'], a: 0, why: "Hozir Dilya uyda uy vazifasini qilyapti." },
    { k: 'dictation', say: 'A girl is eating ice cream.', a: ['A girl is eating ice cream.', 'A girl is eating ice cream', 'A girl is eating an ice cream.', 'A girl is eating an ice cream'] },
    { k: 'dictation', say: "What are they doing?", a: ['What are they doing?', 'What are they doing'] },
    { k: 'choice', q: 'Aziz: "Are your friends there?" Javob?', opts: ["Yes, they're.", 'Yes, they are.', 'Yes, they do.', 'Yes, I am.'], a: 1, why: "**Yes, they are.**" },
    { k: 'choice', q: 'Rasm: a man is shouting. Qaysi gap mos?', opts: ['A man is shouting.', 'A man shouting.', 'A man are shouting.', 'A man shouts now.'], a: 0 },
    { k: 'fill', q: 'A boy ___ riding a bike.', a: ['is', "'s"], why: "*a boy* = he → **is**." },
    { k: 'fill', q: 'Two girls are ___ on a bench. (sit)', a: ['sitting'], why: "**sit → sitting**." },
    { k: 'order', uz: 'Sam velosipedda ketyapti.', words: ['Sam', 'is', 'riding', 'his', 'bike'], extra: ['are'], why: "**is + riding**." },
    { k: 'translate', uz: "Bolalar to'p o'ynayapti.", a: ['The boys are playing with a ball', 'The boys are playing with a ball.', 'The children are playing with a ball', 'The children are playing with a ball.', 'The boys are playing ball', 'The boys are playing ball.'] },
    { k: 'speak', say: 'A boy is riding a bike.', uz: 'Rasmni tasvirlang' },
    { k: 'speak', say: 'Two girls are sitting on a bench.', uz: 'Rasmni tasvirlang' },
    { k: 'speak', say: "I'm sitting in my room. I'm not shouting.", uz: "O'zingiz haqingizda ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'Is Sam shouting?', opts: ['Is Sam shouting?', 'Is Sam sitting?', 'Are they shouting?', 'Is Sam running?'], a: 0 },
    { k: 'listen', say: "They're eating ice cream on the bench.", opts: ["They're eating ice cream on the bench.", "They're eating lunch in the park.", "They're sitting on the bench.", 'He is eating ice cream.'], a: 0 },
    { k: 'choice', q: 'Dilya is at home. Where is Aziz?', opts: ['In the park.', 'At home.', 'On the bus.', 'At school.'], a: 0, why: "Dialogda: *I'm in the park.*" },
    { k: 'choice', q: 'Sam ___ his bike.', opts: ['ride', 'riding', 'is riding', 'are riding'], a: 2 },
    { k: 'fill', q: 'What ___ they doing?', a: ['are'] },
    { k: 'fill', q: 'Is Sam shouting? — Yes, he ___.', a: ['is'] },
    { k: 'order', uz: 'Ikki qiz skameykada o\'tiribdi.', words: ['Two', 'girls', 'are', 'sitting', 'on', 'a', 'bench'], extra: ['is'] },
    { k: 'translate', uz: 'U (erkak) muzqaymoq yeyapti.', a: ["He's eating ice cream", 'He is eating ice cream', "He's eating an ice cream", 'He is eating an ice cream', "He's eating ice cream.", 'He is eating ice cream.', "He's eating an ice cream.", 'He is eating an ice cream.'] },
    { k: 'fix', wrong: 'A boy riding a bike.', a: ['A boy is riding a bike.', "A boy's riding a bike."], why: "**is** unutilmasin." },
  ],
  summary: [
    "Tinglaganda **kim + am/is/are + fe'l-ing** ni toping: *Sam is riding a bike.*",
    "Rasmni tasvirlash: avval joy (*This is a park.*), keyin kim nima qilyapti (*A girl is eating ice cream.*).",
    "Savol-javob: *Are your friends there? — Yes, they are.*",
    "Yangi so'zlar: **picture, bench, ice cream, bike, ball, ride**.",
  ],
  homework: "Biror rasm yoki derazadan ko'rinishni tanlang va 5 ta gap bilan ovoz chiqarib ayting (*A man is walking… Two children are playing…*). Telefoningizga yozib oling va tinglang.",
};

export default lesson;
