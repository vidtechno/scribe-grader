import type { Lesson } from '../../../types';

// Real-life scene: meeting someone new. Uses only lesson 5 (greetings, name, "Nice to meet you", "How are you?").
const lesson: Lesson = {
  id: 'u1-l11',
  title: 'Real life: meeting someone new',
  titleUz: 'Real hayot: yangi odam bilan tanishish',
  mini: true,
  kind: 'scene',
  goal: "Yangi odam bilan **salomlashasiz**, ismingizni aytasiz, «Qalaysiz?» ga javob berasiz va xayrlashasiz. Faqat 1–5-darslarda o'rganganlaringiz kerak bo'ladi.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**Good morning** — ertalab, **Good night** — tunda; vaqtga mos salom tanlang.",
    "**My name is Ali.** yoki **I'm Ali.** — o'zingizni tanishtirish.",
    "**How are you?** → **I'm fine, thank you.** (**I'm** = I am: «I fine» demaymiz).",
    "**Nice to meet you.** — «Tanishganimdan xursandman.»",
  ],
  homework: "Oynaga qarab (yoki do'stingizga) ovoz chiqarib ayting: salom, ismingiz, «Qalaysiz?» va javobi, xayrlashish.",
  scene: {
    place: 'meet',
    partner: { name: 'Anna', role: 'Yangi tanish', voice: 'emma', emoji: '👩' },
    intro: "Siz — **Ali**. Ertalab til maktabining hovlisida yangi tanish — **Anna** sizga salom beryapti. U bilan tanishing: salomlashing, ismingizni ayting, «Qalaysiz?» ga javob bering va xayrlashing.",
    steps: [
      { k: 'say', en: "Good morning! I'm Anna. What's your name?", uz: 'Xayrli tong! Men Annaman. Ismingiz nima?' },
      {
        k: 'pick', ask: "Anna ertalab salom berdi. Salomlashing va ismingizni ayting (siz — **Ali**).",
        opts: [
          { en: "Good morning, Anna! I'm Ali.", ok: true },
          { en: 'Good morning! My name is Ali.', ok: true },
          { en: "Good night, Anna! I'm Ali.", why: "**Good night** — tunda, uxlashdan oldin aytiladi. Ertalab **Good morning** deymiz." },
          { en: "Goodbye, Anna! I'm Ali.", why: "**Goodbye** — xayrlashish so'zi. Uchrashganda salomlashamiz: **Good morning**, **Hello**." },
          { en: "Good evening, Anna! I'm Ali.", why: "**Good evening** — kechqurun. Hozir ertalab, shuning uchun **Good morning**." },
        ],
        why: "Ertalab — **Good morning**; ismni **I'm Ali** yoki **My name is Ali** deb aytamiz.",
        drill: { k: 'choice', q: "Ertalab uchrashdingiz. Nima deysiz?", opts: ['Good night!', 'Good morning!', 'Goodbye!'], a: 1, why: '**Good morning** — ertalabki salom.' },
      },
      { k: 'say', en: 'Nice to meet you, Ali.', uz: 'Tanishganimdan xursandman, Ali.' },
      {
        k: 'fill', ask: "Anna'ga javob bering: «Men ham tanishganimdan xursandman.»", q: 'Nice to ___ you, too.', a: ['meet'],
        mistakes: [{ a: ['meeting', 'meets', 'met'], why: "**to** dan keyin fe'lning oddiy shakli keladi: **Nice to meet you**. `meeting` emas." }],
        why: "Qolip: **Nice to meet you.** — «Tanishganimdan xursandman.»", hint: 'Tanishmoq = ...',
      },
      { k: 'say', en: 'How are you?', uz: 'Qalaysiz?' },
      { k: 'note', title: "«Qalaysiz?» ga javob", md: "**How are you?** — «Qalaysiz?»\n\nJavob: **I'm fine, thank you.** — «Yaxshiman, rahmat.»\n\n**I'm** = **I am** (qisqa shakl). **I** bilan har doim **am** ishlatiladi." },
      {
        k: 'build', ask: "«Yaxshiman, rahmat» deb javob bering.", words: ["I'm", 'fine', 'thank', 'you'], extra: ['I', 'am', 'are'], alt: [['I', 'am', 'fine', 'thank', 'you']],
        mistakes: [
          { a: ['I fine thank you'], why: "`I fine` — **am** tushib qolgan. To'g'risi: **I am fine** yoki qisqasi **I'm fine**." },
          { a: ['I are fine thank you'], why: "**are** — you / we / they bilan. **I** bilan **am** ishlatiladi: **I am fine**." },
        ],
        why: "**I'm fine, thank you.** — **I** bilan **am** (yoki qisqa **I'm**).",
        drill: { k: 'choice', q: "To'g'ri gapni tanlang.", opts: ['I fine.', "I'm fine.", 'I are fine.'], a: 1, why: "**I'm** = I am: «I fine» emas." },
      },
      { k: 'say', en: 'Good! Goodbye, Ali!', uz: 'Yaxshi! Xayr, Ali!' },
      {
        k: 'type', ask: "Xayrlashing: «Xayr, Anna! Tanishganimdan xursandman.»",
        a: ['Goodbye, Anna! Nice to meet you.', 'Bye, Anna! Nice to meet you.', 'Goodbye, Anna! Nice to meet you, too.', 'Bye, Anna! Nice to meet you, too.'],
        mistakes: [{ a: ['Goodbye, Anna! Nice to meeting you.', 'Bye, Anna! Nice to meeting you.'], why: "**to** dan keyin oddiy shakl: **Nice to meet you**. `meeting` emas." }],
        why: "**Goodbye** (yoki **Bye**) + ism + **Nice to meet you.**", hint: 'Goodbye, Anna! Nice to ... you.',
      },
    ],
    outro: "Siz ingliz tilida birinchi marta **to'liq suhbat** qildingiz: salom, ism, «Qalaysiz?» va xayrlashish. Shu iboralar har kuni kerak bo'ladi.",
  },
};

export default lesson;
