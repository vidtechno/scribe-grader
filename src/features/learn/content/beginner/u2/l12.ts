import type { Lesson } from '../../../types';

// Mini lesson (grammar): a / an depends on the first SOUND. Goes deeper than u2-l5 (silent h, "yu" sound, letter names).
const lesson: Lesson = {
  id: 'u2-l12',
  title: 'a / an: sound, not letter',
  titleUz: "a / an: harf emas, tovush hal qiladi",
  mini: true,
  goal: "**a** yoki **an** ni so'zning **birinchi harfiga emas, birinchi tovushiga** qarab tanlaysiz: *an hour, an honest man, a university, a European city.* Tanlovni 3 soniyada qila olasiz.",
  slides: [
    {
      title: 'Qoida: ko\'zga emas, quloqqa ishoning',
      blocks: [
        { t: 'p', md: "Siz **a / an** ning asosiy qoidasini bilasiz: unli oldidan **an**, undosh oldidan **a**. Muammo shundaki, ba'zi so'zlarda **harf bir narsa, tovush boshqa narsa** bo'ladi. Shuning uchun so'zni **ichingizda ayting** va birinchi *tovushni* eshiting." },
        { t: 'table', head: ['Birinchi tovush', 'Artikl', 'Misol'], speak: [2], rows: [
          ['unli tovush', 'an', 'an egg, an onion, an hour'],
          ['undosh tovush', 'a', 'a book, a university, a one-way street'],
        ] },
        { t: 'tip', tone: 'info', md: "Hiyla: ikki so'zni birga ayting. *a egg* — \"a-egg\" og'ir, til qoqiladi. *an egg* — \"a-negg\", silliq chiqadi. **an** aynan shuning uchun bor." },
        { t: 'check', ex: { k: 'choice', q: "*It's ___ onion.*", opts: ['a', 'an'], a: 1, why: "*onion* — \"ʌ\" unli tovushi bilan boshlanadi → **an onion**." } },
      ],
    },
    {
      title: 'Harf unli, tovush undosh → a',
      blocks: [
        { t: 'p', md: "Ba'zi so'zlar **u** yoki **eu** harfi bilan boshlanadi, lekin o'qilganda **\"yu\"** eshitiladi. **y** esa undosh tovush, demak **a**. Xuddi shunday **one** so'zi \"**w**an\" — **w** tovushi bilan boshlanadi." },
        { t: 'examples', items: [
          { en: 'a university', uz: 'universitet', note: '"yu" bilan boshlanadi' },
          { en: 'a uniform', uz: 'forma (kiyim)', note: '"yu"' },
          { en: 'a European city', uz: 'Yevropa shahri', note: '"yu" — Eu harflari' },
          { en: 'a one-dollar note', uz: 'bir dollarlik pul', note: '*one* = "wan" (w)' },
        ] },
        { t: 'check', ex: { k: 'choice', q: "*She's at ___ university.*", opts: ['a', 'an'], a: 0, why: "*university* \"yu\" bilan boshlanadi (undosh) → **a university**." } },
        { t: 'tip', tone: 'warn', md: "Lekin **umbrella, uncle, ugly** — oddiy qisqa \"ʌ\" unli bilan boshlanadi → **an umbrella, an uncle**. Faqat \"yu\" deb o'qilsa **a**." },
      ],
    },
    {
      title: 'Harf undosh, tovush unli → an',
      blocks: [
        { t: 'p', md: "Teskari holat: so'z **h** bilan boshlanadi, lekin **h o'qilmaydi** — so'z darhol unli tovush bilan boshlanadi. Bunday so'zlar kam, ularni yod oling:" },
        { t: 'examples', items: [
          { en: 'an hour', uz: 'bir soat', note: '*h* jim: "au-ə"' },
          { en: 'an honest man', uz: 'halol odam', note: '*h* jim: "on-ist"' },
          { en: 'an MP3 player', uz: 'MP3 pleyer', note: 'M harfining nomi — "em" (unli)' },
          { en: 'an X-ray', uz: 'rentgen', note: 'X harfining nomi — "eks" (unli)' },
        ] },
        { t: 'tip', tone: 'good', md: "Qolgan **h** so'zlarida h aytiladi → **a**: *a house, a hotel, a horse, a happy day.* Faqat **hour** va **honest** ni yodda saqlang." },
        { t: 'check', ex: { k: 'fill', q: "He is ___ honest man.", a: ['an'], uz: 'U halol odam.', why: "*honest* — h jim, \"on\" bilan boshlanadi → **an**." } },
      ],
    },
    {
      title: 'Tipik xatolar',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['an hour', 'a university', 'an honest man', 'a European city'] }, bad: { title: "Noto'g'ri", items: ['a hour', 'an university', 'a honest man', 'an European city'] } },
        { t: 'p', md: "Xato sababi har doim bir xil: **harfga** qaraldi, **tovushga** emas. Yo'l-yo'riq: shubha bo'lsa, so'zni bir marta ovoz chiqarib ayting." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ["It's an uniform.", "It's a uniform.", "It's a hour.", "It's an house."], a: 1, why: "*uniform* — \"yu\" (undosh) → **a uniform**." } },
      ],
    },
  ],
  words: [
    { en: 'hour', uz: 'soat (60 daqiqa)', ipa: 'aʊ.ər', pos: 'noun', ex: "It's an hour from here.", exUz: 'Bu yerdan bir soatlik yo\'l.' },
    { en: 'honest', uz: 'halol, rostgo\'y', ipa: 'ˈɒn.ɪst', pos: 'adj', ex: 'He is an honest man.', exUz: 'U halol odam.' },
    { en: 'university', uz: 'universitet', ipa: 'ˌjuː.nɪˈvɜː.sɪ.ti', pos: 'noun', ex: 'She is at a university.', exUz: 'U universitetda.' },
    { en: 'uniform', uz: 'forma (kiyim)', ipa: 'ˈjuː.nɪ.fɔːm', pos: 'noun', ex: 'It is a school uniform.', exUz: 'Bu maktab formasi.' },
    { en: 'European', uz: 'yevropalik; Yevropa', ipa: 'ˌjʊə.rəˈpiː.ən', pos: 'adj', ex: 'Paris is a European city.', exUz: 'Parij — Yevropa shahri.' },
    { en: 'onion', uz: 'piyoz', ipa: 'ˈʌn.jən', pos: 'noun', ex: "It's an onion.", exUz: 'Bu piyoz.' },
  ],
  practice: [
    { k: 'choice', q: "*It's ___ hour.*", opts: ['a', 'an'], a: 1, why: "*hour* — h jim → **an**." },
    { k: 'choice', q: "*I'm at ___ university.*", opts: ['a', 'an'], a: 0, why: "\"yu\" — undosh → **a**." },
    { k: 'choice', q: "*Paris is ___ European city.*", opts: ['a', 'an'], a: 0, why: "*European* \"yu\" bilan boshlanadi → **a**." },
    { k: 'fill', q: "It's ___ onion.", a: ['an'], uz: 'Bu piyoz.', why: "*onion* — unli \"ʌ\" → **an**." },
    { k: 'fill', q: "She is ___ honest girl.", a: ['an'], uz: 'U halol qiz.', why: "*honest* — h jim → **an**." },
    { k: 'fill', q: "It is ___ uniform.", a: ['a'], uz: 'Bu forma.', why: "*uniform* — \"yu\" → **a**." },
    { k: 'listen', say: 'an hour', opts: ['a hour', 'an hour', 'a house', 'an house'], a: 1 },
    { k: 'tf', q: "*a one-way street* — to'g'ri, chunki *one* \"w\" bilan boshlanadi.", a: true, why: "*one* = \"wan\" → undosh → **a**." },
    { k: 'tf', q: "*an house* — to'g'ri.", a: false, why: "*house* da **h** o'qiladi → **a house**." },
    { k: 'fix', wrong: "It's a hour.", a: ["It's an hour.", 'It is an hour.'], why: "**an hour** — h jim." },
    { k: 'fix', wrong: "It's an university.", a: ["It's a university.", 'It is a university.'], why: "**a university** — \"yu\" undosh." },
    { k: 'match', pairs: [['an hour', 'bir soat'], ['an onion', 'piyoz'], ['a uniform', 'forma'], ['a university', 'universitet'], ['an honest man', 'halol odam']] },
    { k: 'order', uz: "U halol odam.", words: ['He', 'is', 'an', 'honest', 'man'], extra: ['a'], why: "*honest* — h jim → **an**." },
    { k: 'translate', uz: "Bu Yevropa shahri.", a: ["It's a European city", 'It is a European city'], why: "**a European city** — \"yu\" tovushi." },
    { k: 'speak', say: 'an hour, a university, an honest man', uz: 'Uch ibora: an / a / an' },
  ],
  quiz: [
    { k: 'choice', q: "*She's ___ English teacher.*", opts: ['a', 'an'], a: 1, why: "*English* unli tovush bilan boshlanadi → **an English teacher**." },
    { k: 'choice', q: "*She's ___ European student.*", opts: ['a', 'an'], a: 0, why: "\"yu\" → **a**." },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['an university', 'a honest man', 'an honest man', 'a hour'], a: 2 },
    { k: 'fill', q: "It's ___ old umbrella.", a: ['an'], why: "*old* unli bilan → **an old umbrella**." },
    { k: 'fill', q: "I'm at ___ university.", a: ['a'], why: "\"yu\" → **a**." },
    { k: 'fix', wrong: "He is a honest man.", a: ['He is an honest man.', "He's an honest man."], why: "*honest* — h jim → **an**." },
    { k: 'translate', uz: "U universitetda.", a: ["She's at a university", 'She is at a university', "He's at a university", 'He is at a university'] },
    { k: 'tf', q: "*an MP3 player* — to'g'ri, chunki M harfi \"em\" deb o'qiladi.", a: true },
  ],
  summary: [
    "**a / an** ni **tovush** hal qiladi: unli tovush → **an**, undosh tovush → **a**.",
    "Harf unli, tovush undosh: **a university, a uniform, a European city, a one-way street**.",
    "Harf undosh, tovush unli: **an hour, an honest man** (h jim), **an MP3, an X-ray**.",
    "Shubha bo'lsa so'zni ovoz chiqarib ayting va birinchi tovushni eshiting.",
  ],
  homework: "Uyingizdagi 6 ta narsani toping va ularning oldiga **a** yoki **an** qo'yib ovoz chiqarib ayting: *an onion, a table, an old chair…*",
};

export default lesson;
