import type { Lesson } from '../../../types';

// Real-life scene: ordering at a café. Present Simple (do you want, we don't have), prices, food and drink words.
// New: I'd like ..., please / What would you like? / Anything else?
const lesson: Lesson = {
  id: 'u3-l16',
  title: 'Real life: ordering at a café',
  titleUz: 'Real hayot: kafeda buyurtma berish',
  mini: true,
  kind: 'scene',
  goal: "Kafeda **muloyim buyurtma berasiz**: **I'd like a tea, please.** Narxni so'raysiz, «Yana nimadir?» ga javob berasiz va rahmat aytasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**What would you like?** — «Nima olasiz?»; javob: **I'd like a tea, please.**",
    "**I like coffee** — umuman yoqtirishingiz; buyurtma uchun **I'd like** deymiz.",
    "**a / an** sanaladigan narsa oldida, **some** sanalmaydigan narsa oldida: **some sugar**.",
    "**How much is it?** — narxni so'rash; **Anything else?** → **No, thank you.**",
  ],
  homework: "Kafe yoki uyda ovoz chiqarib ayting: **I'd like a tea, please.** va **How much is it?** Keyin boshqa ovqat-ichimlik bilan takrorlang.",
  scene: {
    place: 'cafe',
    partner: { name: 'Lucy', role: 'Barista', voice: 'emma', emoji: '👩‍🍳' },
    intro: "Siz — **Ali**. Ertalab kafega kirdingiz. Stol orqasida barista **Lucy** turibdi. Ichimlik va ovqat buyurtma bering, narxni so'rang va to'lab, rahmat ayting.",
    steps: [
      { k: 'say', en: 'Hello, Ali! What would you like to drink?', uz: 'Salom, Ali! Nima ichasiz?' },
      { k: 'note', title: 'Buyurtma: I\'d like ..., please', md: "**What would you like?** — «Nima olasiz?» (kafeda shunday so'rashadi).\n\nBuyurtma: **I'd like a cup of tea, please.** — «Menga bir piyola choy, iltimos.»\n\n**I'd like** = **I would like** — «men ... olmoqchiman». Muloyim va juda tabiiy.\n\n**some** — «biroz» (sanalmaydigan narsa oldida: **some sugar**).\n\nDiqqat: **I like tea** — «Men choyni yoqtiraman» (umuman, didingiz). Buyurtma emas!" },
      {
        k: 'pick', ask: "Lucy ichimlik so'rayapti. Muloyim qilib bitta kofe buyurtma bering.",
        opts: [
          { en: "I'd like a coffee, please.", ok: true },
          { en: 'A coffee, please.', ok: true },
          { en: 'I like coffee.', why: "**I like coffee** — «Men kofeni yoqtiraman», ya'ni umuman didingiz. Buyurtma uchun **I'd like a coffee, please.** deymiz." },
          { en: 'I want a coffee.', why: "**I want** — to'g'ri, lekin kafeda qo'pol eshitiladi. Muloyim buyurtma: **I'd like a coffee, please.**" },
          { en: "I'm a coffee, please.", why: "**I'm** — «men ... man» (o'zingiz haqingizda). «Men kofe emasman»: buyurtma uchun **I'd like a coffee.**" },
        ],
        why: "Buyurtma: **I'd like ..., please.** (**I like** emas).",
        drill: { k: 'choice', q: "Kafeda choy buyurtma bermoqchisiz. Qaysi biri to'g'ri?", opts: ['I like a tea.', "I'd like a tea, please.", "I'm a tea, please."], a: 1, why: "**I'd like** = «men ... olmoqchiman». **I like** esa «yoqtiraman»." },
      },
      { k: 'say', en: "Sorry, we don't have coffee today. Do you want tea?", uz: "Kechirasiz, bugun kofe yo'q. Choy istaysizmi?" },
      {
        k: 'build', ask: "Rozilik bering: «Ha, menga bitta choy, iltimos.»", words: ['Yes', "I'd", 'like', 'a', 'tea', 'please'], extra: ['an'],
        alt: [['Yes', 'I', 'would', 'like', 'a', 'tea', 'please'], ["I'd", 'like', 'a', 'tea', 'please'], ['I', 'would', 'like', 'a', 'tea', 'please']],
        mistakes: [
          { a: ['Yes I like a tea please', 'I like a tea please'], why: "**I like** — «yoqtiraman». Buyurtmada **I'd like a tea, please.**" },
          { a: ["Yes I'd like tea please", "I'd like tea please"], why: "Bitta choy — **a tea** (bitta choshka). **a** ni unutmang: **I'd like a tea, please.**" },
        ],
        why: "**I'd like a tea, please.** — «Menga bitta choy, iltimos.»",
      },
      { k: 'say', en: 'OK, one tea. Do you want sugar?', uz: 'Xo\'p, bitta choy. Shakar istaysizmi?' },
      {
        k: 'fill', ask: "Ha, iltimos, biroz shakar: «Ha, menga biroz shakar, iltimos.»", q: "Yes, I'd like ___ sugar, please.", a: ['some'],
        mistakes: [{ a: ['a', 'an'], why: "**sugar** sanalmaydi (bitta, ikkita deb sanamaymiz), shuning uchun **a** emas, **some** — «biroz»: **some sugar**." }],
        why: "Sanalmaydigan narsa oldida **some**: **some sugar**, **some milk**.", hint: 'biroz',
        drill: { k: 'choice', q: "Qaysi biri to'g'ri?", opts: ['a sugar', 'some sugar', 'an sugar'], a: 1, why: "**sugar** sanalmaydi → **some sugar**." },
      },
      { k: 'say', en: 'And what would you like to eat?', uz: 'Yeyishga nima olasiz?' },
      {
        k: 'fill', ask: "Olma buyurtma bering: «Menga bitta olma, iltimos.»", q: "I'd like ___ apple, please.", a: ['an'],
        mistakes: [{ a: ['a'], why: "**apple** unli tovush (a) bilan boshlanadi, shuning uchun **an apple**." }],
        why: "Unli tovushdan oldin **an**: **an apple**.", hint: 'unli tovushdan oldin',
        drill: { k: 'choice', q: "To'g'ri javobni tanlang.", opts: ['a apple', 'an apple', 'some apple'], a: 1, why: "**apple** unli bilan boshlanadi → **an apple**." },
      },
      { k: 'say', en: 'Anything else?', uz: 'Yana biror narsa?' },
      { k: 'note', title: '«Yana nimadir?»', md: "**Anything else?** — «Yana biror narsa?»\n\nKerak bo'lmasa, muloyim rad eting: «yo'q» va «rahmat» deng." },
      {
        k: 'pick', ask: "Boshqa narsa kerak emas. Muloyim rad eting.",
        opts: [
          { en: 'No, thank you.', ok: true },
          { en: 'No, thanks.', ok: true },
          { en: "I'm fine, thank you.", why: "**I'm fine, thank you.** — «Qalaysiz?» ga javob. Bu yerda savol boshqa: **Anything else?** — **No, thank you.**" },
          { en: "No, I don't like.", why: "Savol yoqtirish haqida emas, «yana nimadir kerakmi?» deb so'rayapti. Javob: **No, thank you.**" },
          { en: 'Yes, thank you.', why: "**Yes** — «ha, yana kerak» degani. Kerak bo'lmasa **No, thank you.** deymiz." },
        ],
        why: "**Anything else?** → **No, thank you.** (yoki **No, thanks.**)",
      },
      { k: 'say', en: 'OK, one tea and an apple.', uz: 'Xo\'p, bitta choy va bitta olma.' },
      {
        k: 'type', ask: "Narxini so'rang: «Bu necha pul?»",
        a: ['How much is it?', 'How much is that?', 'How much is the tea?', 'How much are they?'],
        mistakes: [
          { a: ['How much it is?', 'How much it is'], why: "Savolda **is** gapdan oldin turadi: **How much is it?**" },
          { a: ['How many is it?', 'How many is it'], why: "Narx uchun **How much** ishlatiladi, **How many** emas: **How much is it?**" },
        ],
        why: "Narxni so'rash: **How much is it?**", hint: 'How ... is it?',
        drill: { k: 'order', uz: 'Bu necha pul?', words: ['How', 'much', 'is', 'it'], extra: ['many', 'are'] },
      },
      { k: 'say', en: "It's nine dollars. Thank you, Ali!", uz: "To'qqiz dollar. Rahmat, Ali!" },
      {
        k: 'type', ask: "Pulni to'lab, rahmat ayting va xayrlashing: «Rahmat. Xayr!»",
        a: ['Thank you. Goodbye!', 'Thanks. Goodbye!', 'Thank you. Bye!', 'Thanks. Bye!', 'Thank you, goodbye!', 'Thanks, bye!'],
        why: "Kafe oxirida: **Thank you. Goodbye!** yoki qisqasi **Thanks. Bye!**", hint: 'Thank you. Good...!',
      },
    ],
    outro: "Siz kafeda **to'liq buyurtma** berdingiz: ichimlik, ovqat, narx va rahmat. **I'd like ..., please** — eng foydali ibora.",
  },
};

export default lesson;
