import type { Lesson } from '../../../types';

// Real-life scene: asking the way. Uses prepositions of place, there is / there are, imperatives; a few direction phrases are taught in notes.
const lesson: Lesson = {
  id: 'u4-l19',
  title: 'Real life: asking the way',
  titleUz: "Real hayot: yo'l so'rash",
  mini: true,
  kind: 'scene',
  goal: "Ko'chada yo'lni **so'raysiz**, javobni tushunasiz (**Go straight**, **Turn left**, **on the right**), «Bu yerda … bormi?» deb so'raysiz va minnatdorchilik bildirasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**Excuse me, where is the bank?** — yo'l so'rash (`Where the bank is?` emas).",
    "**It's next to the shop.** / **It's opposite the park.** — joyni aytish (**It's** = It is).",
    "**Go straight.** **Turn left.** **Turn right.** **on the left / on the right** — yo'l ko'rsatish.",
    "**Is there a pharmacy near here?** — **Is there a…?** (`Is there pharmacy` emas, **a** kerak).",
    "**Thank you very much.** — katta rahmat.",
  ],
  homework: "Uyingizdan yaqin joyga (do'kon, bank, bog') yo'lni inglizcha ayting: **Go straight. Turn left. It's next to…**",
  scene: {
    place: 'street',
    partner: { name: 'Tom', role: "O'tkinchi", voice: 'george', emoji: '👨' },
    intro: "Siz — **Ali**. Yangi shahardasiz va bankni topolmayapsiz. Ko'chada o'tkinchi — **Tom** — sizga yordam beradi. Yo'lni so'rang, javobni tushuning va minnatdorchilik bildiring.",
    steps: [
      { k: 'say', en: 'Hello! Can I help you?', uz: 'Salom! Yordam bera olamanmi?' },
      {
        k: 'build', ask: "Tom'dan bank qayerdaligini so'rang: «Kechirasiz, bank qayerda?»",
        words: ['Excuse', 'me', 'where', 'is', 'the', 'bank'], extra: ['are', 'a'],
        alt: [['Excuse', 'me', 'where', 'is', 'a', 'bank']],
        mistakes: [
          { a: ['Excuse me where the bank is'], why: "Savolda **is** gapning boshida keladi: **where is the bank?** (`where the bank is` emas)." },
          { a: ['Excuse me where are the bank'], why: "**bank** bitta narsa, shuning uchun **is**: **Where is the bank?** **are** — ko'plik uchun." },
        ],
        why: "**Excuse me, where is the bank?** — **Wh-so'z + is + narsa**.",
        drill: { k: 'order', uz: 'Maktab qayerda?', words: ['Where', 'is', 'the', 'school'], extra: ['the', 'are'], why: '**Where is** … — so\'roq so\'zdan keyin **is**.' },
      },
      { k: 'say', en: "It's next to the shop. The shop is opposite the park.", uz: "U do'konning yonida. Do'kon bog'ning qarshisida." },
      {
        k: 'pick', ask: "Tom'ning so'zlarini tekshiring: bank qayerda? Tom aytganini takrorlang.",
        opts: [
          { en: "It's next to the shop.", ok: true },
          { en: "It's opposite the park.", why: "Bog'ning qarshisida — **do'kon**, bank emas. Bank do'konning **yonida**." },
          { en: "It's behind the shop.", why: "**behind** — orqasida. Tom **next to** (yonida) dedi." },
          { en: "It's in the park.", why: "**in the park** — bog'ning ichida. Tom bunday demadi: bank do'konning yonida." },
        ],
        why: "**next to** — yonida; **opposite** — qarshisida.",
      },
      { k: 'say', en: "You are new here. Where is your school?", uz: 'Siz bu yerda yangisiz. Maktabingiz qayerda?' },
      {
        k: 'type', ask: "Ayting: «U bog'ning yonida.»",
        a: ["It's next to the park.", 'It is next to the park.', "It's next to the park"],
        mistakes: [
          { a: ['It next to the park'], why: "**is** tushib qolgan. To'g'risi: **It is next to the park** yoki qisqasi **It's next to the park.**" },
          { a: ['It is next of the park', "It's next of the park"], why: "**next** dan keyin **to**: **next to the park**. **of** emas." },
        ],
        why: "**It's next to the park.** — **It's** = It is.", hint: "It's ... to the park.",
        drill: { k: 'fix', wrong: 'It next to the park.', a: ["It's next to the park.", 'It is next to the park.'], why: '**It** dan keyin **is** (**It\'s**) kerak.' },
      },
      { k: 'say', en: 'OK. Go straight, then turn left. The bank is on the right.', uz: "Yaxshi. To'g'ri yuring, keyin chapga buriling. Bank o'ng tomonda." },
      { k: 'note', title: "Yo'l ko'rsatish", md: "Bular buyruq gaplar (siz ularni bilasiz):\n\n**Go straight.** — To'g'ri yuring.\n**Turn left.** — Chapga buriling.\n**Turn right.** — O'ngga buriling.\n\n**on the left** — chap tomonda, **on the right** — o'ng tomonda." },
      {
        k: 'pick', ask: "Tom yo'lni aytdi. Yo'lni to'g'ri takrorlang: avval to'g'ri, keyin chapga.",
        opts: [
          { en: 'Go straight, then turn left.', ok: true },
          { en: 'Go straight, then turn right.', why: "**right** — o'ng. Tom **turn left** (chapga) dedi." },
          { en: 'Turn left, then go straight.', why: "Tartib teskari. Avval **go straight**, keyin **turn left**." },
          { en: 'Go straight. It is on the left.', why: "Tom «bank o'ng tomonda» dedi: **on the right**, chap emas." },
        ],
        why: "**Go straight, then turn left.** — avval to'g'ri, keyin chapga.",
      },
      { k: 'say', en: "You're welcome. Do you need anything else?", uz: 'Arzimaydi. Yana nimadir kerakmi?' },
      { k: 'note', title: 'near here', md: "**near here** — shu yerning yaqinida.\n\n**Is there a pharmacy near here?** — «Bu yerning yaqinida dorixona bormi?»\n\n**pharmacy** — dorixona." },
      {
        k: 'type', ask: "Ayting: «Bu yerning yaqinida dorixona bormi?»",
        a: ['Is there a pharmacy near here?', 'Excuse me, is there a pharmacy near here?', 'Is there a pharmacy near here'],
        mistakes: [
          { a: ['Is there pharmacy near here', 'Excuse me, is there pharmacy near here'], why: "Bitta narsa oldida **a** kerak: **Is there a pharmacy near here?**" },
          { a: ['There is a pharmacy near here', 'There is a pharmacy near here?'], why: "Savolda **is** oldinga chiqadi: **Is there a pharmacy…?**" },
          { a: ['Are there a pharmacy near here'], why: "**a pharmacy** bitta, shuning uchun **Is there**. **Are there** — ko'plik: **Are there any shops?**" },
        ],
        why: "**Is there a pharmacy near here?** — **Is there a…?** bitta narsa uchun.", hint: 'Is there ... pharmacy near here?',
        drill: { k: 'choice', q: "Bu yerning yaqinida bank bormi?", opts: ['Is there a bank near here?', 'Is there bank near here?', 'Are there a bank near here?'], a: 0, why: 'Bitta narsa: **Is there a…?**' },
      },
      { k: 'say', en: "Yes, there is. It's next to the bank.", uz: 'Ha, bor. U bankning yonida.' },
      {
        k: 'fill', ask: "Tom'ga katta rahmat ayting: «Katta rahmat.»", q: 'Thank you very ___.', a: ['much'],
        mistakes: [{ a: ['many'], why: "**Thank you very much** — qotib qolgan ibora. **many** emas, **much**." }],
        why: "**Thank you very much.** — «Katta rahmat.»", hint: 'Thank you very ...',
      },
      { k: 'say', en: 'Have a good day!', uz: 'Muammo yo\'q. Kuningiz yaxshi o\'tsin!' },
    ],
    outro: "Siz begona shaharda **yo'l so'radingiz**: joyni so'radingiz, yo'nalishni tushundingiz va rahmat aytdingiz. Endi yo'lda adashmaysiz!",
  },
};

export default lesson;
