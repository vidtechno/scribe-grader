import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, describing a place. Uses the passive, relative clauses, determiners, question tags and polite questions from l1-l6.
const lesson: Lesson = {
  id: 'u21-l14',
  title: 'Listening and speaking: describing a place',
  titleUz: 'Tinglash va gapirish: joyni tasvirlab berish',
  mini: true,
  kind: 'skill',
  goal: "Joy haqidagi qisqa hikoyani **tinglab tushunasiz** (qayerda? qanday? nima bilan mashhur?), **question tag** bilan hamsuhbatni jalb qilasiz (*It's beautiful, isn't it?*) va o'z shahringizni 6-8 gapda **ovoz chiqarib** tasvirlaysiz.",
  slides: [
    {
      title: "Tinglang: Samarqand haqida hikoya",
      blocks: [
        { t: 'p', md: "Matnni tinglang (▶). Avval umumiy ma'noni tushuning: **bu qaysi joy? u nima bilan mashhur? sayyohlar nima qilishi mumkin?** Keyin savollarga javob bering." },
        { t: 'text', title: 'A city on the Silk Road', voice: 'emma', en: "I'd like to tell you about my home city, Samarkand. It is an ancient city which has been popular with travellers for centuries. The most famous place is the Registan, which is surrounded by three beautiful buildings. The city is also known for its bread, which is baked in clay ovens. In spring, the streets are full of flowers, and every evening the main square is lively. Visitors can easily walk everywhere, so a car isn't needed.", uz: "Men sizga o'zimning vatanim, Samarqand haqida aytib bermoqchiman. Bu asrlar davomida sayyohlar orasida mashhur bo'lib kelgan qadimiy shahar. Eng mashhur joyi — Registon, uni uchta go'zal bino o'rab turadi. Shahar yana o'z noni bilan ham mashhur, u tandirda pishiriladi. Bahorda ko'chalar gulga to'ladi va har kuni kechqurun asosiy maydon jonli bo'ladi. Mehmonlar hamma joyga oson piyoda borishi mumkin, shuning uchun mashina kerak emas." },
        { t: 'check', ex: { k: 'choice', q: "What is the city famous for?", opts: ['The Registan and its bread', 'Its tall towers and parks', 'Its seaside', 'Its modern airport'], a: 0, why: "*The most famous place is the Registan… known for its bread.*" } },
        { t: 'check', ex: { k: 'tf', q: 'Visitors need a car to see the city.', a: false, why: "*Visitors can easily walk everywhere, so a car isn't needed.*" } },
        { t: 'check', ex: { k: 'listen', say: 'The bread is baked in clay ovens.', opts: ['The bread is baked in clay ovens.', 'The bread was baked in clay ovens.', 'The bread is sold in clay ovens.', 'The bread is baked in electric ovens.'], a: 0 } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Boshlash', "I'd like to tell you about my city."],
          ['Joylashuv', "It's located in the east of the country."],
          ['Mashhurlik', "It's best known for its old buildings."],
          ['Atmosfera', "The atmosphere is relaxed and friendly."],
          ['Tavsiya', "You should definitely visit the old market."],
          ['Hamsuhbatni jalb qilish', "It's beautiful, isn't it?"],
          ['Aniqlashtirish', "Could you tell me what you think?"],
        ] },
        { t: 'tip', tone: 'info', md: "**Question tag** gapirishda ohangi bilan farqlanadi: ohang **pasaysa** (↘) — siz fikringizni aytyapsiz va rozilik kutyapsiz; ohang **ko'tarilsa** (↗) — haqiqatan so'rayapsiz. Tasvirlashda odatda pasayadi: *It's lovely, isn't it?*" },
        { t: 'compare', good: { title: "To'g'ri", items: ["It's located in the north.", "It's best known for its parks.", "The streets are lovely, aren't they?"] }, bad: { title: 'Xato', items: ["It locates in the north.", "It's known with its parks.", "The streets are lovely, isn't it?"] } },
        { t: 'check', ex: { k: 'fill', q: "The old town is beautiful, ___ it?", a: ["isn't"], uz: "Eski shahar go'zal, shunday emasmi?", why: "Darak gap → inkor tag: **isn't it?**" } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi biri to'g'ri?", opts: ["It's best known for its bread.", "It's best known with its bread.", "It's best knowing for its bread.", "It best knows for its bread."], a: 0, why: "**known for** — bilan mashhur." } },
      ],
    },
    {
      title: "Tinglang: do'stlar suhbati",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: "Ben, you've been to Khiva, haven't you? What's it like?", uz: "Ben, sen Xivada bo'lgansan, shundaymi? U qanday joy?" },
          { who: 'Ben', en: "It's amazing. The old town, which is surrounded by walls, looks like a museum.", uz: "Ajoyib. Devorlar bilan o'ralgan eski shahar muzeyga o'xshaydi." },
          { who: 'Madina', en: "Is it easy to get around?", uz: "Yurish oson mi?" },
          { who: 'Ben', en: "Very. Everything is close, so you don't need a taxi.", uz: "Juda. Hamma narsa yaqin, shuning uchun taksi kerak emas." },
          { who: 'Madina', en: "Could you tell me when the best time to go is?", uz: "Borishning eng yaxshi vaqti qachon ekanini ayta olasanmi?" },
          { who: 'Ben', en: "In April or October. It's not too hot then, is it? In July it's far too hot.", uz: "Aprel yoki oktyabrda. U paytda juda issiq emas, to'g'rimi? Iyulda juda issiq bo'ladi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "When is the best time to visit Khiva?", opts: ['April or October', 'July', 'January', 'August'], a: 0, why: "*In April or October.*" } },
        { t: 'check', ex: { k: 'dictation', say: 'Everything is close, so you do not need a taxi.', a: ['Everything is close, so you do not need a taxi.', "Everything is close, so you don't need a taxi."] } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Shahringiz yoki mahallangizni **1 daqiqada** ovoz chiqarib tasvirlang. Reja:" },
        { t: 'table', head: ['Qadam', "Nima deysiz", 'Namuna'], speak: [2], rows: [
          ['1', 'Qayerda?', "I live in a city in the south of Uzbekistan."],
          ['2', 'Qanday?', "It's a lively city which is famous for its markets."],
          ['3', 'Nima qilsa bo\'ladi?', "Visitors can walk through the old streets."],
          ['4', 'Tavsiya', "You should try the local food."],
          ['5', 'Jalb qilish', "It sounds interesting, doesn't it?"],
        ] },
        { t: 'tip', tone: 'good', md: "Sekin va aniq gapiring. Bilmagan so'zingiz bo'lsa, oddiy so'z bilan almashtiring: *It's a very old, quiet place*. Muhimi — gapni to'xtatmaslik." },
        { t: 'check', ex: { k: 'order', uz: "U o'z noni bilan mashhur.", words: ["It's", 'famous', 'for', 'its', 'bread.'], extra: ['with', 'of'], alt: [['It', 'is', 'famous', 'for', 'its', 'bread.']] } },
      ],
    },
  ],
  words: [
    { en: 'atmosphere', uz: 'muhit, kayfiyat', ipa: 'ˈæt.məs.fɪər', pos: 'noun', ex: 'The town has a friendly atmosphere.', exUz: 'Shaharchada do\'stona muhit bor.' },
    { en: 'typical', uz: 'xos, odatiy', ipa: 'ˈtɪpɪkl', pos: 'adj', ex: 'This is a typical old town.', exUz: 'Bu odatiy eski shahar.' },
    { en: 'region', uz: 'viloyat, hudud', ipa: 'ˈriːdʒən', pos: 'noun', ex: 'It is the best region for fruit.', exUz: 'Bu meva uchun eng yaxshi hudud.' },
    { en: 'impressive', uz: 'ta\'sirli, ulug\'vor', ipa: 'ɪmˈpresɪv', pos: 'adj', ex: 'The old fortress is very impressive.', exUz: 'Eski qal\'a juda ta\'sirli.' },
    { en: 'valley', uz: 'vodiy', ipa: 'ˈvæli', pos: 'noun', ex: 'The village is in a green valley.', exUz: 'Qishloq yashil vodiyda joylashgan.' },
  ],
  practice: [
    { k: 'match', pairs: [['describe', 'tasvirlamoq'], ['typical', 'xos, odatiy'], ['region', 'hudud'], ['impressive', "ta'sirli"], ['valley', 'vodiy']] },
    { k: 'listen', say: 'It is an ancient city which has been popular for centuries.', opts: ['It is an ancient city which has been popular for centuries.', 'It is a modern city which has been popular for centuries.', 'It was an ancient city which is popular for centuries.', 'It is an ancient city which was popular last year.'], a: 0 },
    { k: 'listen', say: 'You should definitely visit the old market.', opts: ['You should definitely visit the old market.', 'You should not visit the old market.', 'You should definitely visit the new market.', 'You can visit the old market.'], a: 0 },
    { k: 'choice', q: "The streets are lovely, ___?", opts: ["aren't they", "isn't it", "don't they", "are they"], a: 0, why: "**are** → inkor tag: *aren't they?*" },
    { k: 'choice', q: "It's located ___ the north of the country.", opts: ['in', 'at', 'on', 'to'], a: 0, why: "Hududda: **in the north of**." },
    { k: 'fill', q: "It is best known ___ its old buildings.", a: ['for'], uz: "U eski binolari bilan mashhur.", why: "**known for**." },
    { k: 'fill', q: "Could you tell me ___ the old market is?", a: ['where'], uz: "Eski bozor qayerda ekanini ayta olasizmi?", why: "Xushmuomala savol: **where + ega + fe'l** (tartib darak gapdagidek)." },
    { k: 'order', uz: "Bu ancha jonli shahar.", words: ["It's", 'a', 'very', 'lively', 'city.'], extra: ['an', 'live'], alt: [['It', 'is', 'a', 'very', 'lively', 'city.']], why: "**a** + undosh bilan boshlanuvchi so'z." },
    { k: 'translate', uz: "Bu go'zal, shunday emasmi?", a: ["It's beautiful, isn't it?", "It is beautiful, isn't it?", "It's lovely, isn't it?", "It is lovely, isn't it?"], why: "Darak gap + **isn't it?**" },
    { k: 'translate', uz: "Siz bu shaharni tasvirlab bera olasizmi?", a: ['Can you describe this city?', 'Could you describe this city?', 'Can you describe the city?', 'Could you describe the city?'], why: "Iltimos: **Can / Could you …?**" },
    { k: 'tf', q: "Question tag ohangi pasaysa, gapiruvchi rozilik kutadi.", a: true, why: "Pasayuvchi ohang — fikr tasdiqlanishini kutish." },
    { k: 'dictation', say: 'The old town is surrounded by walls.', a: ['The old town is surrounded by walls.'], uz: "Eski shahar devorlar bilan o'ralgan." },
    { k: 'speak', say: "I'd like to tell you about my home city.", uz: "Men sizga o'z shahrim haqida aytib bermoqchiman." },
    { k: 'speak', say: "It's beautiful, isn't it?", uz: "U go'zal, shunday emasmi?" },
    { k: 'speak', say: 'You should definitely try the local food.', uz: "Mahalliy taomlarni albatta tatib ko'ring." },
  ],
  quiz: [
    { k: 'choice', q: "Matnda Registan nima bilan o'ralgan?", opts: ['Three beautiful buildings', 'Walls', 'Hills', 'A river'], a: 0, why: "*The Registan, which is surrounded by three beautiful buildings.*" },
    { k: 'choice', q: "The weather isn't too hot in April, ___?", opts: ['is it', "isn't it", 'does it', "doesn't it"], a: 0, why: "Inkor gap → darak tag: **is it?**" },
    { k: 'choice', q: "Qaysi gap xushmuomala?", opts: ['Could you tell me where the station is?', 'Where is the station, tell me!', 'Tell me where is the station.', 'You tell me the station.'], a: 0, why: "**Could you tell me + where + ega + fe'l**." },
    { k: 'fill', q: "It's a typical ___ town in the valley.", a: ['old', 'small', 'quiet', 'ancient'], uz: "Vodiydagi odatiy eski shahar.", why: "Sifat kerak, ma'no mos bo'lsin." },
    { k: 'fill', q: "The city is located ___ the east of the country.", a: ['in'], uz: "Shahar mamlakatning sharqida joylashgan.", why: "**in the east of**." },
    { k: 'order', uz: "Siz albatta eski bozorga borishingiz kerak.", words: ['You', 'should', 'definitely', 'visit', 'the', 'old', 'market.'], extra: ['must', 'to'], why: "**should definitely + fe'l**." },
    { k: 'listen', say: "It's not too hot in October, is it?", opts: ["It's not too hot in October, is it?", "It's too hot in October, isn't it?", "It's not too hot in October, isn't it?", "It was not too hot in October, was it?"], a: 0 },
    { k: 'tf', q: "*Everything is close, so you don't need a taxi* — Taksi kerak emas.", a: true, why: "Hamma narsa yaqin → taksi kerak emas." },
  ],
  summary: [
    "Tinglashda avval umumiy ma'noni oling: **qayerda, qanday, nima bilan mashhur**.",
    "Tasvir iboralari: **located in**, **known for**, **surrounded by**, **You should definitely visit…**.",
    "**Question tag** hamsuhbatni jalb qiladi: *It's lovely, isn't it?* — darak gapdan keyin inkor tag.",
    "Xushmuomala savol: **Could you tell me where … is?** (darak tartibi).",
    "Yangi so'zlar: **describe, typical, region, impressive, valley**.",
  ],
  homework: "Shahringiz haqida 1 daqiqalik gapirish matni yozing (6-8 gap), telefon yordamida ovozingizni yozib oling va tinglab ko'ring. Kamida bitta question tag ishlating.",
};

export default lesson;
