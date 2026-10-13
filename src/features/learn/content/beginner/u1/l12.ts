import type { Lesson } from '../../../types';

// Real-life scene: enrolling at the registration desk. Uses lessons 1–9 (greetings, name, spelling, numbers, repeat).
const lesson: Lesson = {
  id: 'u1-l12',
  title: 'Real life: at the registration desk',
  titleUz: "Real hayot: ro'yxatdan o'tish stolida",
  mini: true,
  kind: 'scene',
  goal: "Til maktabida ro'yxatdan o'tasiz: ismingizni aytasiz, **familiyangizni harflab** berasiz, **telefon raqamingizni** raqam-raqam aytasiz, tushunmasangiz muloyim **takrorlashni so'raysiz** va xayrlashasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**My name is Ali Karimov.** — ism va familiyani aytish.",
    "Familiya harflab aytiladi: **K-A-R-I-M-O-V** (harflar nomi bilan).",
    "Telefon raqami raqam-raqam aytiladi: **nine, zero, five…** Nol — **zero**.",
    "Tushunmasangiz: **Sorry, can you repeat that, please?** (**Repeat!** qo'pol eshitiladi).",
    "Minnatdorchilik: **Thank you.** — **Nice to meet you, too.**",
  ],
  homework: "O'z familiyangizni va telefon raqamingizni ingliz tilida ovoz chiqarib ayting: harflarni va raqamlarni **nomi bilan**, sekin va aniq.",
  scene: {
    place: 'desk',
    partner: { name: 'Tom', role: 'Qabul xodimi', voice: 'george', emoji: '👨‍💼' },
    intro: "Siz — **Ali Karimov**. Siz til maktabiga yozilgani keldingiz. Qabul stolida xodim — **Tom**. Ismingizni ayting, familiyangizni harflab bering, telefon raqamingizni diktant qiling va tushunmasangiz, muloyim so'rang.",
    steps: [
      { k: 'say', en: "Good morning! What's your name, please?", uz: 'Xayrli tong! Ismingiz nima, iltimos?' },
      {
        k: 'build', ask: "Ismingizni ayting: «Mening ismim Ali Karimov.»",
        words: ['My', 'name', 'is', 'Ali', 'Karimov'], extra: ["I'm", 'are'],
        alt: [["I'm", 'Ali', 'Karimov'], ['My', 'name', 'is', 'Karimov', 'Ali']],
        mistakes: [
          { a: ['My name Ali Karimov'], why: "`My name Ali` — **is** tushib qolgan. To'g'risi: **My name is Ali Karimov.**" },
          { a: ['My name are Ali Karimov'], why: "**name** bitta narsa, shuning uchun **is**: **My name is Ali Karimov.** (**are** — you / we / they bilan)." },
        ],
        why: "Qolip: **My name is** + ism. Qisqasi: **I'm Ali Karimov.**",
        drill: { k: 'choice', q: "To'g'ri gapni tanlang.", opts: ['My name Ali.', 'My name is Ali.', 'My name are Ali.'], a: 1, why: "**My name is Ali.** — **is** tushib qolmasin." },
      },
      { k: 'say', en: 'Thank you, Ali. How do you spell your surname?', uz: 'Rahmat, Ali. Familiyangiz qanday yoziladi?' },
      {
        k: 'type', ask: "Familiyangizni (**Karimov**) harflab ayting: har bir harfni nomi bilan yozing.",
        a: ['K-A-R-I-M-O-V', 'K A R I M O V', 'KARIMOV'],
        mistakes: [
          { a: ['K-A-R-I-M-O', 'K A R I M O', 'K-A-R-I-M-O-W', 'K A R I M O W'], why: "Familiyada 7 ta harf: **K-A-R-I-M-O-V**. Oxirgi harfni ham unutmang." },
          { a: ['K-A-R-I-M-A-V', 'K A R I M A V'], why: "Oxirgidan oldingi harf **O**, **A** emas: **K-A-R-I-M-O-V**." },
        ],
        why: "Harflab aytganda har bir harf alohida yoziladi: **K-A-R-I-M-O-V**.", hint: 'K-A-R-...',
      },
      { k: 'say', en: "Thank you. And what's your phone number?", uz: 'Rahmat. Telefon raqamingiz nima?' },
      { k: 'note', title: 'Telefon raqami', md: "Telefon raqami **raqam-raqam** aytiladi: **nine, zero, five…** (90 emas, «to'qqiz, nol»). Nolni **zero** deymiz. Hozir sonlarni **so'z bilan** yozing, raqam bilan emas." },
      {
        k: 'type', ask: "Raqamingiz: **9 0 5 7 4 6 3 8**. Uni raqam-raqam, so'z bilan yozing.",
        a: ['Nine, zero, five, seven, four, six, three, eight', 'Nine zero five seven four six three eight'],
        mistakes: [
          { a: ['9 0 5 7 4 6 3 8', '90574638', '9, 0, 5, 7, 4, 6, 3, 8'], why: "Bu yerda sonlarni **so'z bilan** yozamiz: 9 = nine, 0 = zero, 5 = five, 7 = seven, 4 = four, 6 = six, 3 = three, 8 = eight." },
        ],
        why: "Har bir raqam alohida so'z: **nine, zero, five, seven, four, six, three, eight**.", hint: 'nine, zero, five, ...',
      },
      { k: 'say', en: 'Thank you. Your number is seventeen.', uz: "Rahmat. Raqamingiz — o'n yetti." },
      {
        k: 'pick', ask: "Siz **o'n yettini** yaxshi eshitmadingiz. Tom'dan muloyim takrorlashni so'rang.",
        opts: [
          { en: 'Sorry, can you repeat that, please?', ok: true },
          { en: 'Can you say it again, please?', ok: true },
          { en: 'Repeat!', why: "**Repeat!** — buyruq, qo'pol eshitiladi. Muloyim: **Can you repeat that, please?**" },
          { en: 'Good night.', why: "**Good night** — tunda, uxlashdan oldin aytiladi. Tushunmasangiz, takrorlashni so'rang." },
          { en: "I'm fine, thank you.", why: "Bu «Qalaysiz?» ga javob. Tom hech narsa so'ramadi, siz esa eshitmadingiz: **Can you repeat that, please?**" },
        ],
        why: "Tushunmasangiz: **Sorry, can you repeat that, please?** yoki **Can you say it again, please?**",
        drill: { k: 'choice', q: "Xodim tez gapirdi. Muloyim iltimos qaysi?", opts: ['Repeat!', 'Can you repeat that, please?', 'Goodbye.'], a: 1, why: "**please** va **Can you…?** iltimosni muloyim qiladi." },
      },
      { k: 'say', en: 'Sure. Your number is seventeen.', uz: "Albatta. Raqamingiz — o'n yetti." },
      { k: 'say', en: 'Thank you, Ali. Nice to meet you.', uz: 'Rahmat, Ali. Tanishganimdan xursandman.' },
      {
        k: 'fill', ask: "Tom'ga javob bering: «Rahmat, Tom. Men ham tanishganimdan xursandman.»",
        q: 'Thank you, Tom. Nice to meet you, ___.', a: ['too'],
        mistakes: [
          { a: ['to', 'two'], why: "Bu yerda **too** — «ham». **to** va **two** boshqa so'zlar. Qolip: **Nice to meet you, too.**" },
        ],
        why: "Tanishuvga javob: **Nice to meet you, too.**", hint: 'Nice to meet you, ...',
      },
      { k: 'say', en: 'Goodbye, Ali!', uz: 'Xayr, Ali!' },
      {
        k: 'type', ask: "Xayrlashing: «Xayr, Tom!»",
        a: ['Goodbye, Tom!', 'Bye, Tom!', 'Goodbye, Tom', 'Bye, Tom'],
        why: "**Goodbye** (yoki qisqa **Bye**) + ism.", hint: 'Goodbye, ...',
      },
    ],
    outro: "Ajoyib! Ro'yxatdan o'tish stolida ismingiz, familiyangiz va raqamingizni aytdingiz, kerak bo'lsa takrorlashni so'radingiz. Shunday iboralar har kuni kerak bo'ladi.",
  },
};

export default lesson;
