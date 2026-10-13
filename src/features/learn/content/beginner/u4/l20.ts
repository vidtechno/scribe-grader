import type { Lesson } from '../../../types';

// Real-life scene: buying food in a shop. Uses Can I have…?, some / any, much / many, prices.
const lesson: Lesson = {
  id: 'u4-l20',
  title: 'Real life: how much is it?',
  titleUz: "Real hayot: do'konda narx so'rash",
  mini: true,
  kind: 'scene',
  goal: "Do'konda **Can I have…, please?** deb so'raysiz, **Do you have any…?** deb mahsulot borligini so'raysiz, **How much is it?** deb narxini so'raysiz va jami summani tushunasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**Can I have some apples, please?** — muloyim iltimos (`I want apples` emas).",
    "**Do you have any milk?** — so'roq gapda **any**; javobda **some**: **Yes, we have some milk.**",
    "**How many** + sanaladigan (apples), **How much** + sanalmaydigan (milk).",
    "**How much is it?** — narxni so'rash; narxni eshitib jami summani topish.",
    "**Here you are.** — «Marhamat.»",
  ],
  homework: "Oshxonadagi 3 ta narsani tanlang va ovoz chiqarib so'rang: **Can I have some … please?** va **How much is it?**",
  scene: {
    place: 'shop',
    partner: { name: 'Mia', role: 'Sotuvchi', voice: 'emma', emoji: '👩‍💼' },
    intro: "Siz — **Ali**. Kichik oziq-ovqat do'konidasiz. Sotuvchi — **Mia**. Olma va suv oling, sut bor-yo'qligini so'rang, narxini bilib oling va to'lang.",
    steps: [
      { k: 'say', en: 'Hello! Can I help you?', uz: 'Salom! Yordam bera olamanmi?' },
      {
        k: 'pick', ask: "Siz olma olmoqchisiz. Muloyim so'rang.",
        opts: [
          { en: 'Can I have some apples, please?', ok: true },
          { en: 'Yes, can I have some apples, please?', ok: true },
          { en: 'I want apples.', why: "Bu do'konda juda qo'pol eshitiladi. Muloyim: **Can I have some apples, please?**" },
          { en: 'Can I help you?', why: "Bu savolni Mia berdi. Siz esa iltimos qilasiz: **Can I have…?**" },
          { en: 'Can I have apple, please?', why: "**apple** sanaladi: yo **an apple**, yo **some apples** deymiz. Yolg'iz **apple** bo'lmaydi." },
        ],
        why: "Do'konda iltimos: **Can I have … , please?** Ko'plik narsa oldidan — **some**.",
        drill: { k: 'choice', q: "Muloyim iltimosni tanlang.", opts: ['I want some apples.', 'Can I have some apples, please?', 'Give me apples.'], a: 1, why: '**Can I have … , please?** — muloyim.' },
      },
      { k: 'say', en: 'Sure. How many apples do you want?', uz: 'Albatta. Nechta olma kerak?' },
      { k: 'note', title: 'How many / How much', md: "**How many** + sanaladigan narsa: **How many apples?**\n**How much** + sanalmaydigan narsa: **How much milk?**\n\nNarx haqida: **How much is it?** — «Bu qancha turadi?»" },
      {
        k: 'build', ask: "Ayting: «To'rtta, iltimos.»", words: ['Four', 'please'], extra: ['Many', 'much'],
        alt: [['Four', 'apples', 'please']],
        why: "Savol **How many apples?** — javob son: **Four, please.**",
      },
      { k: 'say', en: 'Here you are. Anything else?', uz: 'Marhamat. Yana nimadir?' },
      { k: 'note', title: 'a bottle of…', md: "**a bottle of water** — bir shisha suv.\n\n**Can I have a bottle of water, please?**\n\n**of** dan keyin sanalmaydigan narsa: **a bottle of water**." },
      {
        k: 'type', ask: "Ayting: «Bir shisha suv bersangiz, iltimos.»",
        a: ['Can I have a bottle of water, please?', 'Can I have a bottle of water?', 'Can I have a bottle of water please'],
        mistakes: [
          { a: ['Can I have bottle of water, please', 'Can I have bottle of water'], why: "Bitta shisha: **a bottle of water**. **a** tushib qolgan." },
          { a: ['Can I have a water, please', 'Can I have a water'], why: "Do'konda ko'pincha **a bottle of water** deymiz: **Can I have a bottle of water, please?**" },
          { a: ['I can have a bottle of water, please'], why: "Iltimosda **Can** gap boshida: **Can I have…?** (`I can have` emas)." },
        ],
        why: "**Can I have a bottle of water, please?**", hint: 'Can I have a ... of water, please?',
      },
      { k: 'say', en: 'Of course. Anything else?', uz: 'Albatta. Yana nimadir?' },
      {
        k: 'fill', ask: "Sut bor-yo'qligini so'rang: «Sutingiz bormi?»", q: 'Do you have ___ milk?', a: ['any'],
        mistakes: [{ a: ['some'], why: "So'roq gapda odatda **any**: **Do you have any milk?** **some** — darak gapda: **We have some milk.**" }],
        why: "So'roqda **any**, darakda **some**.", hint: 'any / some?',
        drill: { k: 'choice', q: 'Do you have ___ bread?', opts: ['some', 'any', 'a'], a: 1, why: "So'roq gapda — **any**." },
      },
      { k: 'say', en: 'Yes, we have some milk. How much milk do you want?', uz: 'Ha, sut bor. Qancha sut kerak?' },
      {
        k: 'type', ask: "Ayting: «Bir shisha, iltimos.»",
        a: ['A bottle, please.', 'One bottle, please.', 'A bottle of milk, please.', 'One bottle of milk, please.', 'A bottle please', 'Can I have a bottle, please?'],
        mistakes: [{ a: ['Bottle please', 'Bottle, please'], why: "Bitta shisha uchun **a bottle**: **A bottle, please.**" }],
        why: "**How much milk?** — javob: **A bottle, please.**", hint: 'A ... , please.',
      },
      { k: 'say', en: 'OK. Four apples, water and milk.', uz: 'Xo\'p. To\'rtta olma, suv va sut.' },
      {
        k: 'fill', ask: "Narxini so'rang: «Bu qancha turadi?»", q: 'How ___ is it?', a: ['much'],
        mistakes: [{ a: ['many'], why: "Narx so'ralganda **How much**: **How much is it?** **many** — sanash uchun: **How many apples?**" }],
        why: "**How much is it?** — narxni so'rash.", hint: 'How ... is it?',
        drill: { k: 'fill', q: 'How ___ milk do you want?', a: ['much'], why: 'Sut sanalmaydi — **much**.' },
      },
      { k: 'say', en: 'The apples are three dollars and the water is two dollars.', uz: 'Olma uch dollar, suv ikki dollar.' },
      {
        k: 'pick', ask: "Olma va suv uchun jami necha dollar? To'g'ri javobni tanlang.",
        opts: [
          { en: "It's five dollars.", ok: true },
          { en: "It's three dollars.", why: "Uch dollar — faqat olma. Suv ham bor: 3 + 2 = **five**." },
          { en: "It's two dollars.", why: "Ikki dollar — faqat suv. Olma ham bor: 3 + 2 = **five**." },
          { en: "It's six dollars.", why: "3 + 2 = **5**, olti emas: **five dollars**." },
        ],
        why: "3 + 2 = **five dollars**.",
      },
      { k: 'say', en: 'Yes, five dollars, please.', uz: 'Ha, besh dollar, iltimos.' },
      {
        k: 'build', ask: "Pulni berib ayting: «Marhamat.»", words: ['Here', 'you', 'are'], extra: ['is', 'am'],
        why: "**Here you are.** — «Marhamat.»",
      },
      { k: 'say', en: 'Thank you. Have a nice day!', uz: 'Rahmat. Kuningiz yaxshi o\'tsin!' },
    ],
    outro: "Siz do'konda **iltimos qildingiz**, mahsulot borligini so'radingiz, narxni bildingiz va to'ladingiz. Shu iboralar bilan istalgan do'konda ishonchli bo'lasiz.",
  },
};

export default lesson;
