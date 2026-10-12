import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l9",
  title: "Returning an item to a shop",
  titleUz: "Do'konga narsani qaytarish",
  goal: "Do'konga borib, **narsani qaytarish yoki almashtirishni muloyim so'raysiz**: nima bo'lganini tushuntirasiz (*It's too small. It doesn't work.*), chekni ko'rsatasiz va **refund** yoki **exchange** so'raysiz. Kerak bo'lsa, shikoyatni qo'pol emas, muloyim aytasiz.",
  mini: true,
  kind: "situation",
  slides: [
    {
      title: "Do'konda: suhbat",
      blocks: [
        { t: "p", md: "Laylo kecha yangi tufli sotib oldi, lekin ular kichik. Bugun do'konga qaytib keldi. Suhbatni tinglang." },
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Excuse me. I bought these shoes yesterday, but they're too small.", uz: "Kechirasiz. Bu tuflini kecha sotib oldim, lekin ular juda kichik." },
            { who: "Assistant", en: "I'm sorry about that. Have you got the receipt?", uz: "Bunga afsusdaman. Chekingiz bormi?" },
            { who: "Laylo", en: "Yes, here it is. Could I exchange them for a bigger size?", uz: "Ha, mana. Ularni kattaroq o'lchamga almashtirsam bo'ladimi?" },
            { who: "Assistant", en: "Let me check. Yes, we have size 38 in stock. Try them on, please.", uz: "Tekshirib ko'ray. Ha, 38-o'lcham bor. Kiyib ko'ring." },
            { who: "Laylo", en: "They fit well. Thank you so much for your help!", uz: "Yaxshi keldi. Yordamingiz uchun katta rahmat!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why did Laylo go back to the shop?", opts: ["The shoes were too expensive.", "The shoes were too small.", "She lost her receipt.", "She wanted a discount."], a: 1, why: "*they're too small* — tufli kichik edi." } },
        { t: "check", ex: { k: "tf", q: "The assistant asked Laylo for the receipt.", a: true, why: "*Have you got the receipt?*" } },
      ],
    },
    {
      title: "Nima deyish kerak?",
      blocks: [
        { t: "p", md: "Qaytarishda odatda 3 qadam bor: **1) muammoni ayting, 2) chekni ko'rsating, 3) nima xohlashingizni muloyim so'rang.**" },
        {
          t: "table", head: ["Qadam", "Ibora"], speak: [1],
          rows: [
            ["Muammo", "I bought this yesterday, but it doesn't work."],
            ["Muammo", "It's too big. / There's a hole in it."],
            ["Chek", "I've got the receipt. / Here is my receipt."],
            ["Pulni qaytarish", "Could I have a refund, please?"],
            ["Almashtirish", "Can I exchange it for a different size?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Could I have a refund, please?", "I'd like to return this.", "It's faulty. It doesn't work."] },
          bad: { title: "Xato", items: ["Give me a refund!", "I want return this.", "It not work."] },
        },
        { t: "tip", tone: "warn", md: "**return** — to'g'ri: *I'd like to **return** this* yoki *I want **to** return this*. *I want return* — xato. **I'd like** (*I would like*) muloyimroq eshitiladi." },
        { t: "check", ex: { k: "fill", q: "I'd like to ___ these shoes. They're too small.", a: ["return"], why: "**return** — qaytarmoq." } },
      ],
    },
    {
      title: "Muloyim shikoyat",
      blocks: [
        { t: "p", md: "Muammo katta bo'lsa ham, muloyim gapiring. **Excuse me**, **I'm sorry, but…**, **Could you…?** — bular yordam olishga ko'maklashadi." },
        {
          t: "examples", items: [
            { en: "Excuse me, there's a problem with this phone.", uz: "Kechirasiz, bu telefonda muammo bor." },
            { en: "I'm sorry, but the screen was damaged when I opened the box.", uz: "Kechirasiz, quti ochganimda ekran shikastlangan edi.", note: "O'tgan voqea → **was** (o'tgan zamon)." },
            { en: "Could you help me, please?", uz: "Menga yordam bera olasizmi?" },
            { en: "I'd like to speak to the manager, please.", uz: "Menejer bilan gaplashmoqchiman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi biri eng muloyim?", opts: ["Change it now!", "Could you change it for me, please?", "You must give me my money.", "This is rubbish."], a: 1, why: "**Could you…, please?** — muloyim iltimos." } },
      ],
    },
  ],
  words: [
    { en: "faulty", uz: "nuqsonli, ishlamaydigan", ipa: "ˈfɔːlti", pos: "adjective", ex: "The charger is faulty.", exUz: "Zaryadlovchi nuqsonli." },
    { en: "damaged", uz: "shikastlangan", ipa: "ˈdæmɪdʒd", pos: "adjective", ex: "The box was damaged.", exUz: "Quti shikastlangan edi." },
    { en: "complaint", uz: "shikoyat", ipa: "kəmˈpleɪnt", pos: "noun", ex: "I'd like to make a complaint.", exUz: "Shikoyat qilmoqchiman." },
    { en: "size", uz: "o'lcham", ipa: "saɪz", pos: "noun", ex: "What size are you?", exUz: "Sizning o'lchamingiz qancha?" },
    { en: "fit", uz: "mos kelmoq (o'lcham)", ipa: "fɪt", pos: "verb", ex: "These jeans don't fit me.", exUz: "Bu jinsi menga to'g'ri kelmayapti." },
    { en: "exchange", uz: "almashtirmoq", ipa: "ɪksˈtʃeɪndʒ", pos: "verb", ex: "Can I exchange this shirt?", exUz: "Bu ko'ylakni almashtirsam bo'ladimi?" },
  ],
  practice: [
    { k: "match", pairs: [["faulty", "nuqsonli"], ["damaged", "shikastlangan"], ["complaint", "shikoyat"], ["size", "o'lcham"], ["receipt", "chek"]] },
    { k: "listen", say: "Could I have a refund, please?", opts: ["Could I have a refund, please?", "Could I have a receipt, please?", "Could I have a discount, please?"], a: 0 },
    { k: "choice", q: "I bought this bag yesterday, but the zip ___ work.", opts: ["don't", "doesn't", "didn't to", "isn't"], a: 1, why: "*zip* — birlik → **doesn't work**." },
    { k: "choice", q: "These jeans are too small. They don't ___ me.", opts: ["fit", "fix", "feel", "find"], a: 0, why: "**fit** — o'lchami mos kelmoq." },
    { k: "fill", q: "Can I ___ it for a bigger size?", a: ["exchange", "change"], why: "**exchange** A **for** B." },
    { k: "fill", q: "Here is my ___. I bought it on Monday.", a: ["receipt"], hint: "chek", why: "**receipt** — chek." },
    { k: "fill", q: "I'd like to make a ___. The phone is faulty.", a: ["complaint"], hint: "shikoyat", why: "**make a complaint**." },
    { k: "tf", q: "**Give me a refund!** — bu muloyim iltimos.", a: false, why: "Muloyimi: *Could I have a refund, please?*" },
    { k: "fix", wrong: "I want return this jacket.", a: ["I want to return this jacket.", "I'd like to return this jacket.", "I would like to return this jacket."], why: "**want to** + V1 yoki **I'd like to** + V1." },
    { k: "order", uz: "Buni kecha sotib oldim, lekin ishlamayapti.", words: ["I", "bought", "this", "yesterday,", "but", "it", "doesn't", "work."], extra: ["buy", "don't"] },
    { k: "order", uz: "Chekingiz bormi?", words: ["Have", "you", "got", "the", "receipt?"], extra: ["did", "bought"], alt: [["Do", "you", "have", "the", "receipt?"]] },
    { k: "translate", uz: "Buni qaytarmoqchiman.", a: ["I'd like to return this.", "I would like to return this.", "I want to return this.", "I'd like to return it.", "I would like to return it.", "I want to return it."] },
    { k: "translate", uz: "Pulimni qaytarib bera olasizmi?", a: ["Could I have a refund, please?", "Can I have a refund, please?", "Could I have a refund?", "Can I have a refund?", "Could you give me a refund, please?", "Could you give me a refund?"] },
    { k: "speak", say: "Excuse me, I'd like to return this. Here is the receipt.", uz: "Kechirasiz, buni qaytarmoqchiman. Mana chek." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap muloyim?", opts: ["Change it now!", "I want my money!", "Could I exchange it, please?", "It's rubbish."], a: 2, why: "**Could I…, please?**" },
    { k: "choice", q: "The phone is ___. It doesn't turn on.", opts: ["faulty", "cheap", "fit", "polite"], a: 0, why: "**faulty** — nuqsonli." },
    { k: "choice", q: "Do'kon xodimi: \"Have you got the receipt?\" Siz nima deysiz?", opts: ["Yes, here it is.", "Yes, I'm fine.", "No, it's cheap.", "Yes, it's a bargain."], a: 0 },
    { k: "fill", q: "These shoes are too small. Can I exchange them ___ a bigger size?", a: ["for"], why: "**exchange A for B**." },
    { k: "fill", q: "I'm sorry, ___ the screen was damaged. (lekin)", a: ["but"], why: "**I'm sorry, but…** — muloyim shikoyat boshlanishi." },
    { k: "listen", say: "They don't fit me.", opts: ["They don't fit me.", "They don't suit me.", "They didn't find me."], a: 0 },
    { k: "tf", q: "Qaytarish uchun odatda chekni ko'rsatish kerak.", a: true, why: "Do'konlar odatda **receipt** so'raydi." },
    { k: "order", uz: "Menejer bilan gaplashmoqchiman.", words: ["I'd", "like", "to", "speak", "to", "the", "manager."], extra: ["want", "speaks"], alt: [["I", "would", "like", "to", "speak", "to", "the", "manager."]] },
  ],
  summary: [
    "Qaytarishda 3 qadam: **muammoni ayting → chekni ko'rsating → muloyim so'rang**.",
    "Foydali iboralar: **I'd like to return this. Could I have a refund? Can I exchange it for…?**",
    "Muammo: *it's too small, it doesn't work, it's damaged, it's faulty*.",
    "Muloyim bo'ling: **Excuse me, I'm sorry, but…, Could you…, please?**",
  ],
  homework: "Uyingizdagi biror narsani (masalan, kichik kiyim yoki ishlamaydigan zaryadlovchi) tanlang va do'konga qaytarish haqida 6 gapli dialog yozing: muammo, chek, refund yoki exchange. Keyin ovoz chiqarib ayting.",
};

export default lesson;
