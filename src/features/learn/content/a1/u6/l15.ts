import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing about a neighbourhood. Present simple, there is/are, place words.
const lesson: Lesson = {
  id: 'u6-l15',
  title: 'Reading and writing: my new neighbourhood',
  titleUz: "O'qish va yozish: yangi mahallam",
  mini: true,
  kind: 'skill',
  goal: "Joy haqidagi qisqa matnlarni **o'qib tushunasiz** va o'z mahallangiz haqida 4–5 gapli tavsif **yozasiz**: *I live in a quiet area. There's a park next to my house.*",
  slides: [
    {
      title: "O'qing: Samarqanddagi mahalla",
      blocks: [
        { t: 'text', title: 'My neighbourhood', en: "I live in a quiet area in Samarkand. It's a small neighbourhood with old houses and a lot of trees. There's a local market on the corner, and there's a bakery next to it. The bread is always hot! Opposite our house there's a playground, so it's busy in the afternoon. My neighbours are friendly, and I know the people in the shop. I like my neighbourhood because it's quiet, but it isn't boring.", uz: "Men Samarqandda tinch hududda yashayman. Bu eski uylar va ko'p daraxtli kichik mahalla. Burchakda mahalliy bozor bor, uning yonida novvoyxona bor. Non doim issiq! Uyimiz qarshisida o'yin maydonchasi bor, shuning uchun tushdan keyin gavjum bo'ladi. Qo'shnilarim xushmuomala va men do'kondagi odamlarni bilaman. Mahallam menga yoqadi, chunki u tinch, lekin zerikarli emas." },
        { t: 'check', ex: { k: 'choice', q: 'What is next to the market?', opts: ['A bakery.', 'A playground.', 'A school.', 'A bank.'], a: 0, why: "Matn: *a local market… a bakery next to it*." } },
        { t: 'check', ex: { k: 'choice', q: 'Why is the neighbourhood busy in the afternoon?', opts: ['There is a playground opposite the house.', 'There is a big shopping centre.', 'The metro station is near.', 'The market is open.'], a: 0, why: "Matn: *Opposite our house there's a playground, so it's busy…*" } },
      ],
    },
    {
      title: "O'qing: Toshkentdagi yangi uy",
      blocks: [
        { t: 'text', title: "Ben's new area", en: "Hi! I'm Ben. I'm from Manchester, but I live in Tashkent now. My flat is in a lively area near the city centre. There are a lot of shops and cafés here, and the metro station is only five minutes from my flat. It isn't quiet in the evening. There's a park behind my building, and I walk there at the weekend. The people are very kind. They always say hello to me. I think it's a great place to live.", uz: "Salom! Men Benman. Men Manchesterdanman, lekin hozir Toshkentda yashayman. Kvartiram shahar markazi yaqinidagi jonli hududda. Bu yerda ko'p do'kon va kafe bor, metro bekati kvartiramdan atigi besh daqiqa. Kechqurun tinch emas. Binom orqasida park bor, dam olish kunlari u yerda sayr qilaman. Odamlar juda mehribon. Ular doim men bilan salomlashadi. Menimcha, bu yashash uchun ajoyib joy." },
        { t: 'check', ex: { k: 'tf', q: "Ben's flat is far from the metro station.", a: false, why: "Matn: *the metro station is only five minutes from my flat*." } },
        { t: 'tip', tone: 'info', md: "Matnni o'qishda avval **kim**, **qayerda**, **yonida nima bor** degan savollarga javob toping. Bilmagan so'zni tushunmasangiz ham, umumiy ma'no yetarli." },
      ],
    },
    {
      title: "Yozish: mahallangizni tasvirlang",
      blocks: [
        { t: 'p', md: "Qisqa tavsifda 4 ta qadam bo'ladi: **1) qayerda yashaysiz → 2) nima bor → 3) odamlar → 4) sizga yoqadimi?**" },
        { t: 'text', title: 'Model answer', en: "I live in a quiet neighbourhood in Bukhara. There's a small park behind my house, and there's a bakery on the corner. My neighbours are friendly. I like it because it's quiet and green.", uz: "Men Buxoroda tinch mahallada yashayman. Uyim orqasida kichik park bor, burchakda esa novvoyxona bor. Qo'shnilarim xushmuomala. U menga yoqadi, chunki u tinch va yashil." },
        { t: 'compare', good: { title: "To'g'ri", items: ['There are two parks here.', "There's a market next to my house.", 'I like it because it is quiet.'] }, bad: { title: "Noto'g'ri", items: ['There is two parks here.', 'There have a market next to my house.', 'I like it because quiet.'] } },
        { t: 'check', ex: { k: 'fill', q: 'There ___ a lot of shops near my house.', a: ['are'], why: "Ko'plik bilan — **There are**." } },
      ],
    },
  ],
  words: [
    { en: 'neighbourhood', uz: 'mahalla', ipa: 'ˈneɪ.bə.hʊd', pos: 'noun', ex: 'I like my neighbourhood.', exUz: "Men mahallamni yoqtiraman." },
    { en: 'crowded', uz: 'gavjum, odam ko\'p', ipa: 'ˈkraʊ.dɪd', pos: 'adjective', ex: 'The market is crowded on Sundays.', exUz: "Bozor yakshanba kunlari gavjum." },
    { en: 'lively', uz: 'jonli, quvnoq', ipa: 'ˈlaɪv.li', pos: 'adjective', ex: 'It is a lively area with many cafés.', exUz: "Bu ko'p kafeli jonli hudud." },
    { en: 'local', uz: 'mahalliy', ipa: 'ˈləʊ.kəl', pos: 'adjective', ex: 'We buy bread at the local bakery.', exUz: "Biz non mahalliy novvoyxonadan olamiz." },
    { en: 'area', uz: 'hudud, tuman', ipa: 'ˈeə.ri.ə', pos: 'noun', ex: 'I live in a green area.', exUz: "Men yashil hududda yashayman." },
    { en: 'playground', uz: "o'yin maydonchasi", ipa: 'ˈpleɪ.ɡraʊnd', pos: 'noun', ex: 'The children are in the playground.', exUz: "Bolalar o'yin maydonchasida." },
  ],
  practice: [
    { k: 'choice', q: "Text 1: What does the writer think about the neighbourhood?", opts: ["It's quiet, but not boring.", "It's loud and boring.", "It's far from the shops.", "It's new and empty."], a: 0, why: "Matn: *it's quiet, but it isn't boring*." },
    { k: 'tf', q: "Ben lives in Manchester now.", a: false, why: "Ben Manchesterdan, lekin hozir **Toshkentda** yashaydi." },
    { k: 'order', uz: 'Burchakda mahalliy bozor bor.', words: ['There', 'is', 'a', 'local', 'market', 'on', 'the', 'corner'], extra: ['are', 'in'] },
    { k: 'order', uz: 'Menga mahallam yoqadi, chunki u tinch.', words: ['I', 'like', 'my', 'neighbourhood', 'because', 'it', 'is', 'quiet'], extra: ['do', 'are'] },
    { k: 'fix', wrong: 'There is a lot of shops near my house.', a: ['There are a lot of shops near my house.'], why: "**a lot of shops** — ko'plik: *There are*." },
    { k: 'fill', q: 'The park is ___ my building.', a: ['behind'], uz: 'Park binoimning orqasida.', why: "Orqasida — **behind**." },
    { k: 'translate', uz: 'Mening mahallam sokin.', a: ['My neighbourhood is quiet.', "My neighbourhood's quiet.", 'My area is quiet.'] },
    { k: 'match', pairs: [['quiet', 'tinch'], ['crowded', 'gavjum'], ['lively', 'jonli'], ['local', 'mahalliy'], ['playground', "o'yin maydonchasi"]] },
    { k: 'translate', uz: "Uyimning yonida kichik park bor.", a: ["There's a small park next to my house.", 'There is a small park next to my house.', "There's a small park near my house.", 'There is a small park near my house.'], why: "**There is** + birlik ot, **next to** — yonida." },
    { k: 'dictation', say: "There's a local market near my house.", a: ["There's a local market near my house.", 'There is a local market near my house.'] },
    { k: 'choice', q: "My neighbourhood isn't busy. It's very ___.", opts: ['quiet', 'lively', 'crowded', 'busy'], a: 0, why: "**isn't busy** ↔ **quiet**." },
    { k: 'fill', q: 'I like it ___ it is quiet.', a: ['because'], uz: 'U menga yoqadi, chunki u tinch.', why: "Sabab — **because**." },
  ],
  quiz: [
    { k: 'choice', q: 'There ___ two parks in my area.', opts: ['are', 'is', 'am', 'does'], a: 0 },
    { k: 'fill', q: 'There ___ a bakery on the corner.', a: ['is', "'s"], why: "Birlik ot — **There is**." },
    { k: 'order', uz: 'Qo\'shnilarim xushmuomala.', words: ['My', 'neighbours', 'are', 'friendly'], extra: ['is', 'be'] },
    { k: 'translate', uz: 'Bu yashash uchun ajoyib joy.', a: ["It's a great place to live.", 'It is a great place to live.', "It's a great place to live in."] },
    { k: 'tf', q: "Ben says that his area is very quiet in the evening.", a: false, why: "Matn: *It isn't quiet in the evening*." },
    { k: 'fix', wrong: 'I like it because quiet.', a: ['I like it because it is quiet.', "I like it because it's quiet."], why: "**because** dan keyin to'liq gap kerak: *it is quiet*." },
    { k: 'match', pairs: [['area', 'hudud'], ['crowded', 'gavjum'], ['neighbourhood', 'mahalla'], ['local', 'mahalliy']] },
    { k: 'choice', q: "Which sentence is a good ending for a short description?", opts: ["I like it because it's green.", 'I am from Samarkand.', 'Where is the bank?', 'Turn left.'], a: 0, why: "Oxirida fikringizni va sababini yozing." },
  ],
  summary: [
    "Tavsif tartibi: **qayerda yashaysiz → nima bor → odamlar → sizga yoqadimi?**",
    "**There is** — birlik, **There are** — ko'plik; sabab uchun **because it's quiet**.",
    "Yangi so'zlar: **neighbourhood, crowded, lively, local, area, playground**.",
  ],
  homework: "O'z mahallangiz haqida 4–5 gapli tavsif yozing: qayerda yashaysiz, yonida nima bor, qo'shnilar qanday, nima uchun yoqadi.",
};

export default lesson;
