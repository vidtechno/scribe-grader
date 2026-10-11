import type { Lesson } from '../../../types';

// Mini lesson (situation): my room and my town. Recycles there is/are, some/any, prepositions of place, rooms and furniture.
const lesson: Lesson = {
  id: 'u4-l9',
  title: 'My room and my town',
  titleUz: 'Xonam va shahrim: there is / there are',
  mini: true,
  goal: "O'z xonangiz va shahringizni **tasvirlaysiz**: *There is a bed next to the window. There are two parks in my town.* **There is / there are**, **some / any** va joy predloglarini birga ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: xonam va shahrim',
      blocks: [
        { t: 'p', md: "Yangi do'stingiz sizdan uyingiz va shahringiz haqida so'raydi. Javobda **There is / There are** va **in, on, next to, near** kabi predloglar kerak bo'ladi." },
        { t: 'dialog', lines: [
          { who: 'Ben', en: 'Is there a garden at your house?', uz: "Uyingizda bog' bormi?" },
          { who: 'Dilya', en: "No, there isn't. But there is a small balcony.", uz: "Yo'q. Lekin kichkina balkon bor." },
          { who: 'Ben', en: 'What is in your room?', uz: 'Xonangizda nima bor?' },
          { who: 'Dilya', en: 'There is a bed, a lamp and some books. The lamp is on the shelf.', uz: "Karavot, chiroq va bir nechta kitob bor. Chiroq javonda turibdi." },
          { who: 'Ben', en: 'Are there any shops near your flat?', uz: 'Kvartirangiz yaqinida do\'konlar bormi?' },
          { who: 'Dilya', en: "Yes, there are. There are two shops and a park on my street.", uz: "Ha, bor. Ko'chamizda ikkita do'kon va bitta park bor." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'There ___ two shops on my street.', opts: ['is', 'are', 'am', 'be'], a: 1, why: "*two shops* — ko'plik: **There are**." } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', 'Qachon aytiladi'], speak: [0, 1], rows: [
          ['There is a sofa in my room.', 'Bitta narsa haqida'],
          ['There are some chairs.', "Bir nechta narsa haqida (darak)"],
          ['Is there a bank near here?', "Bitta narsa borligini so'raysiz"],
          ['Are there any parks?', "Bir nechta narsani so'raysiz (any)"],
          ["There isn't a garden. / There aren't any shops.", 'Yo\'qligini aytasiz'],
          ['The bank is opposite the park.', 'Joyni aytasiz'],
        ] },
        { t: 'tip', tone: 'info', md: "**some** — darak gapda, **any** — savol va inkorda: *There are **some** cups. Are there **any** cups? There aren't **any** cups.*" },
        { t: 'check', ex: { k: 'fill', q: "Are there ___ chairs in the kitchen?", a: ['any'], uz: 'Oshxonada stullar bormi?', why: "Savolda **any**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['There is a lamp on the shelf.', 'There are two beds.', "There aren't any shops."] }, bad: { title: "Noto'g'ri", items: ['Is a lamp on the shelf.', 'There is two beds.', "There aren't some shops."] } },
        { t: 'p', md: "Eslatma: gap **There** bilan boshlanadi (*It is a lamp* emas). Inkorda **some** emas, **any** ishlatiladi." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Is there a park near your house?', 'There is a park near your house?', 'Are there a park near your house?', 'Have a park near your house?'], a: 0, why: "Savol: **Is there** + bitta narsa." } },
      ],
    },
  ],
  words: [
    { en: 'garden', uz: "bog'", ipa: 'ˈɡɑː.dən', pos: 'noun', ex: 'There is a garden behind the house.', exUz: "Uyning orqasida bog' bor." },
    { en: 'street', uz: "ko'cha", ipa: 'striːt', pos: 'noun', ex: 'There is a bank on my street.', exUz: "Ko'chamizda bank bor." },
    { en: 'flat', uz: 'kvartira', ipa: 'flæt', pos: 'noun', ex: 'My flat is near the park.', exUz: 'Kvartiram parkka yaqin.' },
    { en: 'wall', uz: 'devor', ipa: 'wɔːl', pos: 'noun', ex: 'There is a photo on the wall.', exUz: 'Devorda surat bor.' },
  ],
  practice: [
    { k: 'choice', q: 'There ___ a lamp on the shelf.', opts: ['is', 'are', 'am', 'have'], a: 0, why: "Bitta narsa — **is**." },
    { k: 'fill', q: 'There ___ three chairs in the room.', a: ['are'], uz: 'Xonada uchta stul bor.', why: "Ko'plik — **are**." },
    { k: 'fill', q: "There aren't ___ books on the shelf.", a: ['any'], uz: "Javonda kitoblar yo'q.", why: "Inkorda **any**." },
    { k: 'order', uz: "Yaqin joyda park bormi?", words: ['Is', 'there', 'a', 'park', 'near', 'here'], extra: ['Are', 'any'] },
    { k: 'translate', uz: "Devorda surat bor.", a: ['There is a photo on the wall.', "There's a photo on the wall."], why: "**There is** + a + narsa + joy." },
    { k: 'match', pairs: [['garden', "bog'"], ['street', "ko'cha"], ['flat', 'kvartira'], ['wall', 'devor']] },
    { k: 'tf', q: "*There is two beds in my room.* — gap to'g'ri.", a: false, why: "To'g'risi: *There **are** two beds.*" },
    { k: 'listen', say: 'Are there any shops near your flat?', opts: ['Are there any shops near your flat?', 'Is there a shop near your flat?', 'Are there some shops near your flat?', 'Are there any parks near your flat?'], a: 0 },
    { k: 'fix', wrong: 'There is two shops on my street.', a: ['There are two shops on my street.'], why: "Ko'plik — **are**." },
    { k: 'dictation', say: 'There is a bed next to the window.', a: ['There is a bed next to the window.', "There's a bed next to the window."] },
    { k: 'speak', say: 'There are two parks in my town.', uz: 'Shahringiz haqida ayting' },
  ],
  quiz: [
    { k: 'choice', q: '___ there any chairs in the kitchen?', opts: ['Is', 'Are', 'Do', 'Have'], a: 1 },
    { k: 'fill', q: "There ___ a garden at my house. (–)", a: ["isn't", 'is not'], why: "Inkor: **isn't**." },
    { k: 'order', uz: "Ko'chamizda ikkita do'kon bor.", words: ['There', 'are', 'two', 'shops', 'on', 'my', 'street'], extra: ['is'] },
    { k: 'translate', uz: "Xonamda karavot bor.", a: ['There is a bed in my room.', "There's a bed in my room."] },
    { k: 'tf', q: "Savolda odatda **any** ishlatiladi: *Are there any shops?*", a: true },
    { k: 'fix', wrong: "There aren't some books here.", a: ["There aren't any books here."], why: "Inkorda **any**." },
    { k: 'match', pairs: [['in', 'ichida'], ['on', 'ustida'], ['next to', 'yonida'], ['under', 'ostida']] },
    { k: 'choice', q: 'The lamp is ___ the shelf.', opts: ['on', 'at', 'are', 'any'], a: 0 },
  ],
  summary: [
    "Bitta narsa: **There is**; bir nechta: **There are**. Savol: **Is there…? / Are there…?**",
    "**some** — darak gapda, **any** — savol va inkorda.",
    "Joyni predloglar bilan ayting: **in, on, next to, near, opposite**.",
    "Yangi so'zlar: **garden, street, flat, wall**.",
  ],
  homework: "Xonangizdagi 5 ta narsani inglizcha ayting: *There is a… next to the… There are some…*",
};

export default lesson;
