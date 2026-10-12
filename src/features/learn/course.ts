// Outline of the course. Units are numbered through all levels (Beginner u1–u5, then Elementary from u6), so a learner
// who finishes one level simply continues with the next. The lesson content lives in content/<level>/u*/ and is
// loaded per unit, so the roadmap stays light.
import type { Drill, Lesson, LevelId, UnitMeta } from './types';

/** Elementary (A1) is open. Set to false to hide it again without touching the lessons. */
const A1_OPEN = true;
/** Pre-Intermediate (A2) is open. Set to false to hide it again without touching the lessons. */
const A2_OPEN = true;

export const LEVELS: { id: LevelId; title: string; cefr: string; text: string; available: boolean }[] = [
  { id: 'beginner', title: 'Beginner', cefr: 'Noldan', text: "Ingliz tilini umuman bilmayman yoki juda kam bilaman. Harflar va tovushlardan boshlaymiz.", available: true },
  { id: 'a1', title: 'Elementary', cefr: 'A1', text: "Oddiy gaplarni tushunaman, o'zim haqimda biroz gapira olaman.", available: A1_OPEN },
  { id: 'a2', title: 'Pre-Intermediate', cefr: 'A2', text: "Kundalik mavzularda gaplasha olaman, lekin xatolarim ko'p.", available: A2_OPEN },
  { id: 'b1', title: 'Intermediate', cefr: 'B1', text: "Ko'p narsani tushunaman, fikrimni ayta olaman.", available: false },
  { id: 'b2', title: 'Upper-Intermediate', cefr: 'B2', text: "Erkin gaplashaman, murakkab matnlarni o'qiyman.", available: false },
  { id: 'c1', title: 'Advanced', cefr: 'C1', text: "Deyarli erkin, akademik ingliz tilini mukammallashtirmoqchiman.", available: false },
  { id: 'ielts', title: 'IELTS', cefr: 'IELTS', text: "IELTS imtihoniga maqsadli tayyorgarlik.", available: false },
];

export const BEGINNER_UNITS: UnitMeta[] = [
  {
    id: 'u1', n: 1, title: 'Letters & Sounds', titleUz: 'Alifbo va tovushlar: o\'qish va talaffuz',
    description: "Alifbo, ingliz tovushlari, salomlashish, sonlar va birinchi so'zlar.",
    learns: ["26 ta harf va ularning nomi", "Qisqa va cho'ziq unlilar, sh / ch / th kabi harf birikmalari", "Salomlashish, xayrlashish va o'zingizni tanishtirish", "0–20 sonlar, ismingizni harflab aytish, sinf iboralari", "Vaziyat: yangi odam bilan tanishuv; o'yinlar va mini-boss"],
    level: 'beginner', tone: 'from-rose-500 to-orange-400',
    lessons: [
      { id: 'u1-l1', title: 'The alphabet: A–M', titleUz: 'Alifbo: A–M' },
      { id: 'u1-l2', title: 'The alphabet: N–Z', titleUz: 'Alifbo: N–Z' },
      { id: 'u1-l3', title: 'Vowel sounds: short & long', titleUz: 'Unli tovushlar: qisqa va cho\'ziq' },
      { id: 'u1-l4', title: 'Letter teams: sh, ch, th…', titleUz: 'Harf birikmalari: sh, ch, th…' },
      { id: 'u1-l5', title: 'Hello! Greetings', titleUz: 'Salomlashish va xayrlashish' },
      { id: 'u1-l6', title: 'Numbers 0–20', titleUz: 'Sonlar 0–20' },
      { id: 'u1-l7', title: 'How do you spell it?', titleUz: 'Harflab aytish va sinf iboralari' },
      { id: 'u1-l8', title: 'Colours & things', titleUz: 'Ranglar va narsalar' },
      { id: 'u1-l9', title: 'Meeting someone: name, spelling, numbers', titleUz: 'Yangi tanish: ism, harflash, raqam', mini: true, kind: 'situation' },
      { id: 'u1-l10', title: 'Letters & sounds: final review', titleUz: 'Alifbo va tovushlar: yakuniy takror', mini: true, kind: 'review' },
    ],
  },
  {
    id: 'u2', n: 2, title: 'To be: Who am I?', titleUz: 'Men kimman? Olmoshlar va to be (am / is / are)',
    description: "Olmoshlar, am / is / are, inkor va savol, a / an, ko'plik, this / that, egalik.",
    learns: ["Kishilik olmoshlari va to be: am / is / are — darak, inkor, savol, qisqa javoblar", "a / an (harf emas, tovush hal qiladi) va istisnolar", "Ko'plik: -s, -es, -ies imlosi va noto'g'ri ko'plik (child → children)", "this / that / these / those; egalik: my, your, his… va 's", "Vaziyat: oila haqida, anketa to'ldirish; mavzu testi va mini-boss"],
    level: 'beginner', tone: 'from-violet-500 to-fuchsia-500',
    lessons: [
      { id: 'u2-l1', title: 'Personal pronouns', titleUz: 'Kishilik olmoshlari' },
      { id: 'u2-l2', title: 'To be: am / is / are', titleUz: 'To be: am / is / are' },
      { id: 'u2-l3', title: "To be: negatives", titleUz: "To be: inkor gaplar" },
      { id: 'u2-l4', title: 'To be: questions', titleUz: 'To be: savollar va qisqa javoblar' },
      { id: 'u2-l5', title: 'a / an & plurals', titleUz: "a / an va ko'plik" },
      { id: 'u2-l12', title: 'a / an: sound, not letter', titleUz: "a / an: harf emas, tovush hal qiladi", mini: true, kind: 'grammar' },
      { id: 'u2-l13', title: 'Plurals: spelling rules', titleUz: "Ko'plik: -s, -es, -ies imlosi", mini: true, kind: 'grammar' },
      { id: 'u2-l14', title: 'Irregular plurals', titleUz: "Noto'g'ri ko'plik: child → children", mini: true, kind: 'grammar' },
      { id: 'u2-l6', title: 'this / that / these / those', titleUz: 'this / that / these / those' },
      { id: 'u2-l7', title: "my, your, his… and 's", titleUz: "Egalik: my, your, his… va 's" },
      { id: 'u2-l8', title: 'Countries, nationalities & jobs', titleUz: 'Davlatlar, millatlar va kasblar' },
      { id: 'u2-l9', title: 'Introducing myself and my family', titleUz: 'O\'zim va oilam haqida tanishtirish', mini: true, kind: 'situation' },
      { id: 'u2-l10', title: 'At the language school: a registration form', titleUz: 'Til maktabida: ro\'yxatdan o\'tish anketasi', mini: true, kind: 'situation' },
      { id: 'u2-l11', title: 'To be: final review', titleUz: 'To be: yakuniy takror', mini: true, kind: 'review' },
    ],
  },
  {
    id: 'u3', n: 3, title: 'Everyday Life', titleUz: 'Kundalik hayot: Present Simple',
    description: "Katta sonlar, Present Simple, vaqt, kun tartibi, in / on / at, always / never.",
    learns: ["Present Simple: doimiy ish va odatlar (I work, she works), -s / -es imlosi", "Inkor va savol: don't / doesn't, Do / Does, Wh-savollar, qisqa javoblar", "Soat, kun tartibi, in / on / at; always, usually, never", "Vaziyat: kafe, universitet va ish kuni; kun tartibi (tinglash va yozish)", "Mavzu testi (Present Simple) va mini-boss"],
    level: 'beginner', tone: 'from-sky-500 to-cyan-400',
    lessons: [
      { id: 'u3-l1', title: 'Numbers 20–100, age & prices', titleUz: 'Sonlar 20–100, yosh va narx' },
      { id: 'u3-l2', title: 'Present Simple: I / you / we / they', titleUz: 'Present Simple: I / you / we / they' },
      { id: 'u3-l3', title: 'Present Simple: he / she / it', titleUz: 'Present Simple: he / she / it' },
      { id: 'u3-l13', title: '-s / -es: spelling', titleUz: "he / she / it: -s, -es, -ies imlosi", mini: true, kind: 'grammar' },
      { id: 'u3-l4', title: "don't / doesn't", titleUz: "Inkor: don't / doesn't" },
      { id: 'u3-l5', title: 'Do / Does questions', titleUz: 'Savollar: Do / Does' },
      { id: 'u3-l14', title: 'Wh- questions with do / does', titleUz: "Wh-savollar: What do you…? Where does she…?", mini: true, kind: 'grammar' },
      { id: 'u3-l9', title: 'At the café: Present Simple in real life', titleUz: 'Kafeda: Present Simple hayotda', mini: true, kind: 'situation' },
      { id: 'u3-l10', title: 'University and work: my week', titleUz: 'Universitet va ish: mening haftam', mini: true, kind: 'situation' },
      { id: 'u3-l11', title: 'Present Simple: final review', titleUz: 'Present Simple: yakuniy takror', mini: true, kind: 'review' },
      { id: 'u3-l6', title: 'Time & daily routine', titleUz: 'Vaqt va kun tartibi' },
      { id: 'u3-l7', title: 'Days, months: in / on / at', titleUz: 'Kunlar, oylar: in / on / at' },
      { id: 'u3-l8', title: 'always, usually, never…', titleUz: "Qanchalik tez-tez: always, usually, never…" },
      { id: 'u3-l15', title: 'My daily routine: listening and writing', titleUz: "Mening kunim: tinglash va yozish", mini: true, kind: 'skill' },
      { id: 'u3-l12', title: 'Everyday life: final review', titleUz: 'Kundalik hayot: yakuniy takror', mini: true, kind: 'review' },
    ],
  },
  {
    id: 'u4', n: 4, title: 'Describing and Asking', titleUz: 'Tasvirlash va so\'rash: there is, can, have got',
    description: "Wh-savollar, there is / are, joy predloglari, much / many, can, buyruq, have got, Present Continuous.",
    learns: ["Wh-savollar, there is / there are, some / any, joy predloglari", "Sanaladigan va sanalmaydigan otlar: much / many; have got va oila", "can / can't, Can I…? iltimoslari, buyruq gaplar, to'ldiruvchi olmoshlar (me, him, her)", "Present Continuous: darak, -ing imlosi, inkor, savollar va qisqa javoblar", "Vaziyat: xona va shahar, do'kon, telefon; tinglash va gapirish; mavzu testi va mini-boss"],
    level: 'beginner', tone: 'from-emerald-500 to-teal-400',
    lessons: [
      { id: 'u4-l1', title: 'Wh- questions', titleUz: "Wh-savollar: what, where, who…" },
      { id: 'u4-l2', title: 'There is / there are', titleUz: 'There is / there are, some / any' },
      { id: 'u4-l3', title: 'Prepositions of place', titleUz: 'Joy predloglari: in, on, under…' },
      { id: 'u4-l9', title: 'My room and my town', titleUz: 'Xonam va shahrim: there is / there are', mini: true, kind: 'situation' },
      { id: 'u4-l4', title: 'Countable & uncountable', titleUz: "Sanaladigan / sanalmaydigan, much / many" },
      { id: 'u4-l10', title: 'At the shop: much, many, can I…?', titleUz: 'Do\'konda: much, many, can', mini: true, kind: 'situation' },
      { id: 'u4-l5', title: "can / can't", titleUz: "can / can't: qobiliyat va iltimos" },
      { id: 'u4-l14', title: 'Can I…? Requests and permission', titleUz: "Can I…? Iltimos va ruxsat so'rash", mini: true, kind: 'grammar' },
      { id: 'u4-l6', title: 'Imperatives & object pronouns', titleUz: 'Buyruq gaplar va me, him, her…' },
      { id: 'u4-l13', title: 'Object pronouns: me, you, him, her…', titleUz: "Olmoshning to'ldiruvchi shakli: me, him, her, us, them", mini: true, kind: 'grammar' },
      { id: 'u4-l7', title: 'have got & family', titleUz: 'have got va oila' },
      { id: 'u4-l8', title: 'Present Continuous', titleUz: 'Present Continuous: hozir nima qilyapman' },
      { id: 'u4-l17', title: '-ing: spelling', titleUz: "-ing qo'shish imlosi: run → running", mini: true, kind: 'grammar' },
      { id: 'u4-l15', title: 'Present Continuous: negatives', titleUz: "Present Continuous: inkor gaplar", mini: true, kind: 'grammar' },
      { id: 'u4-l16', title: 'Present Continuous: questions', titleUz: "Present Continuous: savollar va qisqa javoblar", mini: true, kind: 'grammar' },
      { id: 'u4-l11', title: 'On the phone: what are you doing?', titleUz: 'Telefonda: nima qilyapsiz?', mini: true, kind: 'situation' },
      { id: 'u4-l18', title: 'What are they doing? Listening and speaking', titleUz: "Ular nima qilyapti? Tinglash va gapirish", mini: true, kind: 'skill' },
      { id: 'u4-l12', title: 'Describing and asking: final review', titleUz: 'Tasvirlash va so\'rash: yakuniy takror', mini: true, kind: 'review' },
    ],
  },
  {
    id: 'u5', n: 5, title: 'Past & Future', titleUz: "Kecha, ertaga, hozir: o'tgan va kelasi zamon",
    description: "Ikki hozirgi zamon farqi, was / were, Past Simple, noto'g'ri fe'llar, going to, will, qiyoslash.",
    learns: ["Present Simple va Continuous farqi; was / were", "Past Simple: -ed (imlo va talaffuz), noto'g'ri fe'llar, didn't, Did…?, qisqa javoblar, Wh-savollar", "Kelasi zamon: be going to va will; qiyoslash: bigger, the biggest", "O'qish va tinglash/gapirish amaliyoti; vaziyat: kecha, dam olish kuni rejalari, do'konda tanlash", "Mavzu testi (Past Simple), mini-boss va Beginner yakuniy imtihoni"],
    level: 'beginner', tone: 'from-amber-500 to-yellow-400',
    lessons: [
      { id: 'u5-l1', title: 'Present Simple vs Continuous', titleUz: 'Present Simple yoki Continuous?' },
      { id: 'u5-l2', title: 'was / were', titleUz: "O'tgan zamon: was / were" },
      { id: 'u5-l3', title: 'Past Simple: regular verbs', titleUz: "Past Simple: to'g'ri fe'llar (-ed)" },
      { id: 'u5-l13', title: '-ed: spelling', titleUz: "-ed qo'shish imlosi: stop → stopped", mini: true, kind: 'grammar' },
      { id: 'u5-l14', title: '-ed: pronunciation', titleUz: "-ed talaffuzi: /t/, /d/, /ɪd/", mini: true, kind: 'grammar' },
      { id: 'u5-l4', title: 'Irregular verbs 1', titleUz: "Noto'g'ri fe'llar 1" },
      { id: 'u5-l5', title: "Irregular verbs 2: didn't, Did…?", titleUz: "Noto'g'ri fe'llar 2, didn't va Did…?" },
      { id: 'u5-l15', title: 'Past Simple: short answers and Wh- questions', titleUz: "Past Simple: qisqa javoblar va Wh-savollar", mini: true, kind: 'grammar' },
      { id: 'u5-l9', title: 'Yesterday: telling what happened', titleUz: 'Kecha nima bo\'ldi: Past Simple hayotda', mini: true, kind: 'situation' },
      { id: 'u5-l16', title: 'Reading: a day last week', titleUz: "O'qish: o'tgan haftadagi bir kun", mini: true, kind: 'skill' },
      { id: 'u5-l6', title: 'Future: be going to', titleUz: 'Kelasi zamon: be going to' },
      { id: 'u5-l7', title: 'Future: will', titleUz: 'Kelasi zamon: will' },
      { id: 'u5-l8', title: 'Comparatives & superlatives', titleUz: "Qiyoslash: bigger, the biggest" },
      { id: 'u5-l10', title: 'Plans for the weekend', titleUz: 'Dam olish kuni rejalari: going to, will', mini: true, kind: 'situation' },
      { id: 'u5-l11', title: 'Choosing in a shop: comparing', titleUz: 'Do\'konda tanlash: qiyoslash', mini: true, kind: 'situation' },
      { id: 'u5-l17', title: 'Listening and speaking: my last weekend', titleUz: "Tinglash va gapirish: o'tgan dam olish kunim", mini: true, kind: 'skill' },
      { id: 'u5-l12', title: 'Past and future: final review', titleUz: 'O\'tgan va kelasi zamon: yakuniy takror', mini: true, kind: 'review' },
    ],
  },
];

// Elementary (A1): 6 units × 8 lessons, written in content/a1.
export const A1_UNITS: UnitMeta[] = [
  {
    id: "u6", n: 6, level: 'a1', title: "People & Places", titleUz: "Odamlar va joylar: tasvirlash, egalik, yo'l so'rash",
    description: "Tanishuv, odamlarni tasvirlash, mine / yours, tartib sonlar va sanalar, uy, shahar va yo'l so'rash, a / the.",
    learns: ["Tanishuv va qisqa suhbat, odamlarni tashqi ko'rinishi va xarakteri bo'yicha tasvirlash", "Egalik olmoshlari: mine, yours… va Whose?", "Tartib sonlar va sanalar", "Uy, xonalar, shahar va yo'l so'rash/ko'rsatish", "Artikllar: a / an / the", "Vaziyat: yangi qo'shni, shaharda yo'l so'rash"],
    tone: "from-indigo-500 to-blue-400",
    lessons: [
      { id: "u6-l1", title: "Nice to meet you!", titleUz: "Tanishuv va qisqa suhbat" },
      { id: "u6-l2", title: "What does she look like?", titleUz: "Tashqi ko'rinishni tasvirlash" },
      { id: "u6-l3", title: "Personality: very, quite, really", titleUz: "Xarakter va sifatlar: very, quite, really" },
      { id: "u6-l4", title: "mine, yours… Whose?", titleUz: "Egalik olmoshlari: mine, yours… va Whose?" },
      { id: "u6-l5", title: "Ordinal numbers & dates", titleUz: "Tartib sonlar va sanalar" },
      { id: "u6-l6", title: "My home", titleUz: "Mening uyim: xonalar va jihozlar" },
      { id: "u6-l7", title: "In town: asking the way", titleUz: "Shaharda: yo'l so'rash va ko'rsatish" },
      { id: "u6-l8", title: "a / an / the / no article", titleUz: "Artikllar: a / an / the yoki artiklsiz" },
      { id: "u6-l9", title: "Meeting a new neighbour", titleUz: "Yangi qo'shni bilan tanishuv", mini: true, kind: 'situation' },
      { id: "u6-l10", title: "Lost in the city: asking the way", titleUz: "Shaharda adashdim: yo'l so'rash", mini: true, kind: 'situation' },
      { id: "u6-l11", title: "People and places: final review", titleUz: "Odamlar va joylar: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u7", n: 7, level: 'a1', title: "Work & Free Time", titleUz: "Ish va bo'sh vaqt: yoqtirish, rejalar, takliflar",
    description: "Kasblar, like / love / hate + -ing, ravishlar, play / go / do, rejalar, would like, takliflar, soat va jadval.",
    learns: ["Kasblar va ish joylari; like / love / hate + -ing", "Ravishlar (quickly, well, hard); play / go / do bilan sport va hobbi", "Rejalar: Present Continuous; would like va takliflar", "Soat va jadval; How often / How long savollari", "Vaziyat: do'stlar bilan uchrashuv, taklif va rad etish"],
    tone: "from-pink-500 to-rose-400",
    lessons: [
      { id: "u7-l1", title: "Jobs & workplaces", titleUz: "Kasblar va ish joylari" },
      { id: "u7-l2", title: "like, love, hate + -ing", titleUz: "Yoqtirish: like, love, hate + -ing" },
      { id: "u7-l3", title: "Adverbs: quickly, well, hard", titleUz: "Ravishlar: quickly, well, hard" },
      { id: "u7-l4", title: "Sports & hobbies: play, go, do", titleUz: "Sport va hobbi: play, go, do" },
      { id: "u7-l5", title: "Plans: Present Continuous for future", titleUz: "Rejalar: Present Continuous kelasi zamon uchun" },
      { id: "u7-l6", title: "would like & invitations", titleUz: "would like, taklif qilish va javob berish" },
      { id: "u7-l7", title: "Time & timetables", titleUz: "Soat, jadval: from… to, until, before, after" },
      { id: "u7-l8", title: "Questions: How often? How long?…", titleUz: "Savollar: How often, How long, How far…" },
      { id: "u7-l9", title: "At a party: hobbies and free time", titleUz: "Ziyofatda: hobbi va bo'sh vaqt", mini: true, kind: 'situation' },
      { id: "u7-l10", title: "Making plans with a friend", titleUz: "Do'st bilan reja tuzish", mini: true, kind: 'situation' },
      { id: "u7-l11", title: "Work and free time: final review", titleUz: "Ish va bo'sh vaqt: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u8", n: 8, level: 'a1', title: "Food & Shopping", titleUz: "Ovqat va xarid: miqdor, narx, buyurtma",
    description: "Ovqat, idishlar (a cup of…), a few / a little, narx va pul, kafeda buyurtma, kiyim do'koni, retsept, should, qiyoslash.",
    learns: ["Ovqat va o'lchovlar: a cup of, a bottle of…", "Miqdor: a lot of, a few, a little, no; narx va How much?", "Kafe va kiyim do'konida muloyim muloqot", "Retsept: first, then, finally; should / shouldn't", "Qiyoslash: better, the best, as… as", "Vaziyat: bozor, restoran, kechki ovqat rejasi"],
    tone: "from-orange-500 to-amber-400",
    lessons: [
      { id: "u8-l1", title: "Food & containers: a cup of…", titleUz: "Ovqat va o'lchovlar: a cup of, a bottle of…" },
      { id: "u8-l2", title: "a lot of, a few, a little, no", titleUz: "Miqdor: a lot of, a few, a little, no" },
      { id: "u8-l3", title: "Money & prices", titleUz: "Pul, narx va How much?" },
      { id: "u8-l4", title: "At the café", titleUz: "Kafeda: buyurtma berish" },
      { id: "u8-l5", title: "Shopping for clothes", titleUz: "Kiyim do'konida: o'lcham, rang, too big" },
      { id: "u8-l6", title: "Recipes: first, then, finally", titleUz: "Retsept: first, then, after that, finally" },
      { id: "u8-l7", title: "Healthy habits: should / shouldn't", titleUz: "Sog'lom odatlar: should / shouldn't" },
      { id: "u8-l8", title: "Comparing: better, the best, as… as", titleUz: "Qiyoslash: better, the best, as… as" },
      { id: "u8-l9", title: "At the market: quantities and prices", titleUz: "Bozorda: miqdor va narx", mini: true, kind: 'situation' },
      { id: "u8-l10", title: "Planning a dinner: shopping list and recipe", titleUz: "Kechki ovqat rejasi: ro'yxat va retsept", mini: true, kind: 'situation' },
      { id: "u8-l11", title: "Food and shopping: final review", titleUz: "Ovqat va xarid: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u9", n: 9, level: 'a1', title: "Stories from the Past", titleUz: "O'tmishdan hikoyalar: Past Simple chuqurroq",
    description: "Past Simple chuqurroq: ago / last, yangi noto'g'ri fe'llar, Wh-savollar, there was, could, tarjimai hol, hikoya qilish.",
    learns: ["Vaqt so'zlari: yesterday, last, ago", "Noto'g'ri fe'llar (3 va 4-qism)", "O'tgan zamonda Wh-savollar; there was / were, could", "Hayot yo'li va hikoya qilish: and, but, so, because", "Ta'til va transport", "Vaziyat: dam olish kunim, o'tgan yozgi sayohat"],
    tone: "from-teal-500 to-emerald-400",
    lessons: [
      { id: "u9-l1", title: "Yesterday, last week, two days ago", titleUz: "O'tgan zamon vaqt so'zlari: ago, last, yesterday" },
      { id: "u9-l2", title: "Irregular verbs 3", titleUz: "Noto'g'ri fe'llar 3" },
      { id: "u9-l3", title: "Where did you go? What did you do?", titleUz: "O'tgan zamonda Wh-savollar" },
      { id: "u9-l4", title: "there was / were, could / couldn't", titleUz: "there was / were va could / couldn't" },
      { id: "u9-l5", title: "Life stories", titleUz: "Hayot yo'li: born, grew up, moved…" },
      { id: "u9-l6", title: "Telling a story: and, but, so, because", titleUz: "Hikoya qilish: and, but, so, because" },
      { id: "u9-l7", title: "Holidays & transport", titleUz: "Ta'til va transport: by bus, on foot" },
      { id: "u9-l8", title: "Irregular verbs 4", titleUz: "Noto'g'ri fe'llar 4 va o'tgan zamon takrori" },
      { id: "u9-l9", title: "My weekend: telling a friend", titleUz: "Dam olish kunim: do'stga hikoya", mini: true, kind: 'situation' },
      { id: "u9-l10", title: "A trip last summer", titleUz: "O'tgan yozgi sayohat", mini: true, kind: 'situation' },
      { id: "u9-l11", title: "Stories from the past: final review", titleUz: "O'tmishdan hikoyalar: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u10", n: 10, level: 'a1', title: "Travel & Health", titleUz: "Sayohat va sog'liq: will, going to, have to, must",
    description: "Ob-havo, aeroport va vokzal, mehmonxona, Could I…?, will yoki going to, kasallik va maslahat, have to, must.",
    learns: ["Ob-havo, vokzal, aeroport va mehmonxonada: Can / Could I…?", "will yoki going to", "Sog'liq: What's the matter? Maslahat berish", "Majburiyat: have to / don't have to; qoidalar: must / mustn't", "Xabar va xat yozish", "Vaziyat: mehmonxonani band qilish, dorixona va shifokor"],
    tone: "from-cyan-500 to-sky-400",
    lessons: [
      { id: "u10-l1", title: "What's the weather like?", titleUz: "Ob-havo va fasllar" },
      { id: "u10-l2", title: "At the station & airport", titleUz: "Vokzal va aeroportda" },
      { id: "u10-l3", title: "At the hotel: Could I…?", titleUz: "Mehmonxonada: Can I / Could I…?" },
      { id: "u10-l4", title: "will or going to?", titleUz: "will yoki going to?" },
      { id: "u10-l5", title: "What's the matter?", titleUz: "Sog'liq: What's the matter? I've got a headache" },
      { id: "u10-l6", title: "have to / don't have to", titleUz: "Majburiyat: have to / don't have to" },
      { id: "u10-l7", title: "must / mustn't: rules & signs", titleUz: "Qoidalar: must / mustn't" },
      { id: "u10-l8", title: "Writing a message or email", titleUz: "Xabar va xat yozish" },
      { id: "u10-l9", title: "Booking a hotel room", titleUz: "Mehmonxona xonasini band qilish", mini: true, kind: 'situation' },
      { id: "u10-l10", title: "At the pharmacy and the doctor", titleUz: "Dorixona va shifokorda", mini: true, kind: 'situation' },
      { id: "u10-l11", title: "Travel and health: final review", titleUz: "Sayohat va sog'liq: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u11", n: 11, level: 'a1', title: "Experiences", titleUz: "Tajribalar va yakun: Present Perfect va barcha zamonlar",
    description: "Present Perfect bilan tanishuv, ever / never, been / gone, fe'l + to / -ing, harakat predloglari, phrasal verbs, A1 yakuniy takrori.",
    learns: ["Present Perfect: Have you ever…? been / gone", "Present Perfect yoki Past Simple?", "Harakat predloglari, fe'l + to / -ing, gaplarni bog'lash", "Kundalik phrasal verbs", "Elementary yakuniy takrori: barcha zamonlar", "Vaziyat: suhbatda tajriba almashish"],
    tone: "from-purple-500 to-violet-400",
    lessons: [
      { id: "u11-l1", title: "Have you ever…?", titleUz: "Present Perfect: Have you ever…?" },
      { id: "u11-l2", title: "Past participles; been or gone?", titleUz: "3-shakl fe'llar va been / gone" },
      { id: "u11-l3", title: "Present Perfect or Past Simple?", titleUz: "Present Perfect yoki Past Simple?" },
      { id: "u11-l4", title: "Prepositions of movement", titleUz: "Harakat predloglari: into, across, along…" },
      { id: "u11-l5", title: "want to, enjoy -ing", titleUz: "Fe'l + to yoki -ing: want to, enjoy -ing" },
      { id: "u11-l6", title: "when, before, after, or", titleUz: "Gaplarni bog'lash: when, before, after, or" },
      { id: "u11-l7", title: "Everyday phrasal verbs", titleUz: "Kundalik phrasal verbs: get up, put on…" },
      { id: "u11-l8", title: "A1 review: all the tenses", titleUz: "A1 yakuniy takrori: barcha zamonlar" },
      { id: "u11-l9", title: "Sharing experiences: have you ever…?", titleUz: "Tajriba almashish: Have you ever…?", mini: true, kind: 'situation' },
      { id: "u11-l10", title: "Mixed conversations: real-life situations", titleUz: "Aralash suhbatlar: hayotiy vaziyatlar", mini: true, kind: 'situation' },
      { id: "u11-l11", title: "Elementary: final review", titleUz: "Elementary: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
];

/** Pre-Intermediate (A2). */
export const A2_UNITS: UnitMeta[] = [
  {
    id: "u12", n: 12, level: 'a2', title: "Stories from the past", titleUz: "O'tmish hikoyalari: Past Simple, Past Continuous, used to",
    description: "Past Simple takrori, Past Continuous, used to, when / while va hikoya aytish.",
    learns: ["Past Simple takrori: to'g'ri va noto'g'ri fe'llar, savol va inkor, ago va vaqt iboralari", "Past Continuous: was / were + -ing; Past Simple yoki Past Continuous? when va while", "Used to: avval shunday edi", "because, so, but, although bilan sabab va qarama-qarshilik; hikoya aytish", "Vaziyat: do'stga voqeani aytib berish, yo'qolgan narsa haqida xabar berish"],
    tone: "from-emerald-500 to-teal-400",
    lessons: [
      { id: "u12-l1", title: "Past Simple: regular and irregular", titleUz: "Past Simple takrori: to'g'ri va noto'g'ri fe'llar" },
      { id: "u12-l2", title: "Past Simple: questions and negatives", titleUz: "Past Simple: savol va inkor, ago va vaqt iboralari" },
      { id: "u12-l3", title: "Past Continuous", titleUz: "Past Continuous: was / were + -ing" },
      { id: "u12-l4", title: "Past Simple or Past Continuous?", titleUz: "Past Simple yoki Past Continuous? when va while" },
      { id: "u12-l5", title: "Used to", titleUz: "Used to: avval shunday edi" },
      { id: "u12-l6", title: "Because, so, but, although", titleUz: "Because, so, but, although: sabab va qarama-qarshilik" },
      { id: "u12-l7", title: "Telling a story", titleUz: "Hikoya aytish: first, then, after that, finally" },
      { id: "u12-l8", title: "Unit review: the past", titleUz: "Bosqich takrori: o'tgan zamon" },
      { id: "u12-l9", title: "What happened? Telling a story to a friend", titleUz: "Nima bo'ldi? Do'stga hikoya aytib berish", mini: true, kind: 'situation' },
      { id: "u12-l10", title: "Lost property: reporting a lost bag", titleUz: "Yo'qolgan narsa: sumka yo'qolganini xabar qilish", mini: true, kind: 'situation' },
      { id: "u12-l11", title: "Stories from the past: final review", titleUz: "O'tmish hikoyalari: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u13", n: 13, level: 'a2', title: "Plans and the future", titleUz: "Rejalar va kelajak: going to, will, may / might, shart gap",
    description: "Going to, will, Present Continuous rejalar uchun, may / might va birinchi shart gap.",
    learns: ["going to (reja va aniq belgi), will / won't (qaror, va'da, taxmin), will yoki going to?", "Present Continuous kelishilgan rejalar uchun; may / might: ehtimol", "Birinchi shart gap: if + Present, will", "Reja tuzish: taklif qilish, qabul qilish va rad etish", "Vaziyat: dam olish kuni rejasi, sayohatni rejalashtirish"],
    tone: "from-sky-500 to-cyan-400",
    lessons: [
      { id: "u13-l1", title: "Going to", titleUz: "Going to: rejalar va aniq belgilar" },
      { id: "u13-l2", title: "Will and won't", titleUz: "Will / won't: qaror, va'da, taxmin" },
      { id: "u13-l3", title: "Will or going to?", titleUz: "Will yoki going to? Shall bilan taklif" },
      { id: "u13-l4", title: "Present Continuous for plans", titleUz: "Present Continuous: kelishilgan rejalar" },
      { id: "u13-l5", title: "May and might", titleUz: "May / might: ehtimol" },
      { id: "u13-l6", title: "First conditional", titleUz: "Birinchi shart gap: if + Present, will" },
      { id: "u13-l7", title: "Making plans", titleUz: "Reja tuzish: taklif, qabul va rad etish" },
      { id: "u13-l8", title: "Unit review: the future", titleUz: "Bosqich takrori: kelajak" },
      { id: "u13-l9", title: "Making weekend plans with friends", titleUz: "Do'stlar bilan dam olish rejalarini tuzish", mini: true, kind: 'situation' },
      { id: "u13-l10", title: "Planning a trip: what might happen?", titleUz: "Sayohatni rejalashtirish: nima bo'lishi mumkin?", mini: true, kind: 'situation' },
      { id: "u13-l11", title: "Plans and the future: final review", titleUz: "Rejalar va kelajak: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u14", n: 14, level: 'a2', title: "Comparing things", titleUz: "Taqqoslash: qiyosiy va orttirma daraja, as … as, too / enough",
    description: "Qiyosiy va orttirma daraja, as ... as, too / enough, ravishlar va tasvirlash.",
    learns: ["Qiyosiy daraja (-er, more) va orttirma daraja (the -est, the most)", "as … as, the same as; too va enough", "Ravishlar: quickly, well, hard", "Odamlar va shaharlarni tasvirlash va solishtirish", "Vaziyat: telefon tanlash, ijara uyini solishtirish"],
    tone: "from-fuchsia-500 to-pink-400",
    lessons: [
      { id: "u14-l1", title: "Comparatives", titleUz: "Qiyosiy daraja: -er va more" },
      { id: "u14-l2", title: "Superlatives", titleUz: "Orttirma daraja: the -est, the most" },
      { id: "u14-l3", title: "As ... as", titleUz: "as ... as va the same as" },
      { id: "u14-l4", title: "Too and enough", titleUz: "Too va enough, too much / too many" },
      { id: "u14-l5", title: "Adverbs of manner", titleUz: "Ravish: quickly, well, hard" },
      { id: "u14-l6", title: "Describing people", titleUz: "Odamlarni tasvirlash: tashqi ko'rinish va xarakter" },
      { id: "u14-l7", title: "Comparing places", titleUz: "Shaharlarni solishtirish: o'qish va yozish" },
      { id: "u14-l8", title: "Unit review: comparing", titleUz: "Bosqich takrori: taqqoslash" },
      { id: "u14-l9", title: "Choosing a phone: comparing products", titleUz: "Telefon tanlash: mahsulotlarni solishtirish", mini: true, kind: 'situation' },
      { id: "u14-l10", title: "Two flats to rent: which is better?", titleUz: "Ikki ijara uyi: qaysi biri yaxshi?", mini: true, kind: 'situation' },
      { id: "u14-l11", title: "Comparing things: final review", titleUz: "Taqqoslash: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u15", n: 15, level: 'a2', title: "Rules, advice and requests", titleUz: "Qoidalar, maslahat va iltimoslar: must, should, can / could",
    description: "Must, have to, should, can / could, muloyim iltimoslar, yo'l ko'rsatish va shifokorda.",
    learns: ["must, have to, mustn't, don't have to; need to / needn't", "should / shouldn't: maslahat berish", "can, could, be able to; muloyim iltimos va takliflar", "Yo'l ko'rsatish, shifokorda, qoidalar va belgilar", "Vaziyat: do'stga maslahat, universitet qoidalari"],
    tone: "from-amber-500 to-yellow-400",
    lessons: [
      { id: "u15-l1", title: "Must and have to", titleUz: "Must, have to, mustn't, don't have to" },
      { id: "u15-l2", title: "Should and shouldn't", titleUz: "Should / shouldn't: maslahat berish" },
      { id: "u15-l3", title: "Can, could, be able to", titleUz: "Can, could, be able to: qobiliyat va ruxsat" },
      { id: "u15-l4", title: "Polite requests and offers", titleUz: "Muloyim iltimos va taklif: Could you…? Would you like…?" },
      { id: "u15-l5", title: "Giving directions", titleUz: "Yo'l ko'rsatish va tushuntirish" },
      { id: "u15-l6", title: "At the doctor's", titleUz: "Shifokorda: kasallik va maslahat" },
      { id: "u15-l7", title: "Rules and signs", titleUz: "Qoidalar va belgilar: need to / needn't" },
      { id: "u15-l8", title: "Unit review: modal verbs", titleUz: "Bosqich takrori: modal fe'llar" },
      { id: "u15-l9", title: "A friend has a problem: giving advice", titleUz: "Do'stning muammosi: maslahat berish", mini: true, kind: 'situation' },
      { id: "u15-l10", title: "Rules at university and at work", titleUz: "Universitet va ishdagi qoidalar", mini: true, kind: 'situation' },
      { id: "u15-l11", title: "Rules, advice and requests: final review", titleUz: "Qoidalar, maslahat va iltimoslar: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u16", n: 16, level: 'a2', title: "Experiences and the world around us", titleUz: "Tajriba va dunyo: Present Perfect, who / which, majhul nisbat",
    description: "Present Perfect va Past Simple, for / since, who / which / that, majhul nisbat, frazali fe'llar va xat yozish.",
    learns: ["Present Perfect yoki Past Simple?; for va since", "who, which, that, where bilan ta'riflash", "Majhul nisbat (is made, was built)", "Frazali fe'llar, tasdiq savollari (isn't it?)", "Elektron xat yozish; vaziyat: sayohat tajribasi, narsani tushuntirish"],
    tone: "from-violet-500 to-purple-400",
    lessons: [
      { id: "u16-l1", title: "Present Perfect or Past Simple?", titleUz: "Present Perfect yoki Past Simple?" },
      { id: "u16-l2", title: "For and since", titleUz: "For va since: how long?" },
      { id: "u16-l3", title: "Relative clauses", titleUz: "Who, which, that, where: ta'riflash" },
      { id: "u16-l4", title: "The passive", titleUz: "Majhul nisbat: is made, was built" },
      { id: "u16-l5", title: "Phrasal verbs", titleUz: "Frazali fe'llar: get up, look for, turn on" },
      { id: "u16-l6", title: "Question tags", titleUz: "Tasdiq savollari: isn't it? don't you?" },
      { id: "u16-l7", title: "Writing an email", titleUz: "Elektron xat yozish: do'stga va rasmiy" },
      { id: "u16-l8", title: "Unit review: experiences", titleUz: "Bosqich takrori: tajriba va dunyo" },
      { id: "u16-l9", title: "Travel experiences: have you ever…?", titleUz: "Sayohat tajribasi: Have you ever…?", mini: true, kind: 'situation' },
      { id: "u16-l10", title: "Explaining what something is", titleUz: "Narsa nima ekanini tushuntirish", mini: true, kind: 'situation' },
      { id: "u16-l11", title: "Experiences and the world: final review", titleUz: "Tajriba va dunyo: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
  {
    id: "u17", n: 17, level: 'a2', title: "Work, money and everyday life", titleUz: "Ish, pul va kundalik hayot: suhbatlar va yozish",
    description: "Fe'l qoliplari, kasblar, pul va xaridlar, texnologiya, sayohat, restoran va A2 yakuniy takrori.",
    learns: ["Fe'l qoliplari: like doing, want to do", "Kasblar, ish suhbati, pul va xaridlar, texnologiya", "Sayohat, mehmonxona, restoran", "Rezyume va qisqa xat yozish", "Vaziyat: narsani qaytarish, restoranga qo'ng'iroq; A2 yakuniy takrori"],
    tone: "from-rose-600 to-red-400",
    lessons: [
      { id: "u17-l1", title: "Like doing or want to do?", titleUz: "Fe'l qolipi: like doing, want to do" },
      { id: "u17-l2", title: "Jobs and interviews", titleUz: "Kasblar va ish suhbati" },
      { id: "u17-l3", title: "Money and shopping", titleUz: "Pul va xaridlar: narx, chegirma, qaytarish" },
      { id: "u17-l4", title: "Technology", titleUz: "Texnologiya va internet" },
      { id: "u17-l5", title: "Travel and hotels", titleUz: "Sayohat va mehmonxona" },
      { id: "u17-l6", title: "Restaurants and food", titleUz: "Restoran va ovqat buyurtma qilish" },
      { id: "u17-l7", title: "Writing: CV and short messages", titleUz: "Rezyume va qisqa xat yozish" },
      { id: "u17-l8", title: "A2 final review", titleUz: "A2 yakuniy takrori: hamma zamonlar va modal fe'llar" },
      { id: "u17-l9", title: "Returning an item to a shop", titleUz: "Do'konga narsani qaytarish", mini: true, kind: 'situation' },
      { id: "u17-l10", title: "Booking a table by phone", titleUz: "Telefonda stol band qilish", mini: true, kind: 'situation' },
      { id: "u17-l11", title: "Pre-Intermediate: final review", titleUz: "Pre-Intermediate: yakuniy takror", mini: true, kind: 'review' },
    ],
  },
];

/** Levels that are only partly released: shown under their units. */
export const PARTIAL_LEVELS: Partial<Record<LevelId, string>> = {};

/** Every unit of every level, in course order. */
export const COURSE_UNITS: UnitMeta[] = [...BEGINNER_UNITS, ...(A1_OPEN ? A1_UNITS : []), ...(A2_OPEN ? A2_UNITS : [])];

/** Every unit that is written, released or not (the content tests and the audio generator use this). */
export const WRITTEN_UNITS: UnitMeta[] = [...BEGINNER_UNITS, ...A1_UNITS, ...A2_UNITS];

export function unitsOf(level: LevelId): UnitMeta[] {
  return COURSE_UNITS.filter((u) => u.level === level);
}

/** Position of a unit inside its level (1-based): Elementary starts again at 1. */
export function unitNo(unit: UnitMeta): number {
  return unitsOf(unit.level).findIndex((u) => u.id === unit.id) + 1;
}

export function levelOf(levelId: string | null | undefined) {
  return LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
}

export const UNIT_TEST = {
  /** Share of correct answers needed to pass a unit test. */
  passPercent: 80,
  questions: 20,
  attempts: 2,
  lockHours: 48,
} as const;

/** Choosing Elementary starts with a placement test on the Beginner course; failing twice means starting at Beginner. */
export const PLACEMENT = { questions: 20, passPercent: 70, attempts: 2 } as const;

/** Final test of a level: always open at the end of the level, retake as often as needed. */
export const LEVEL_TEST = { questions: 20, passPercent: 70 } as const;

/** Practice games (drills) need this share of correct answers. */
export const LESSON_PASS_PERCENT = 70;
/** A lesson counts as finished at this first-try accuracy over its practice and quick check; mastery is tested after the topic. */
export const LESSON_COMPLETE_PERCENT = 50;
/** Questions in the quick check at the end of a lesson. */
export const LESSON_CHECK_QUESTIONS = 3;
/** Free plan users can learn for this many days after they start. */
export const TRIAL_DAYS = 7;
/** The in-lesson "Ask AI mentor" button. Off until the mentor is opened for the course. */
export const LESSON_MENTOR_ENABLED = false;

export const ALL_LESSONS = COURSE_UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, unitId: u.id, level: u.level })));

const unitLoaders: Record<string, () => Promise<{ lessons: Lesson[]; drills?: Drill[] }>> = {
  u1: () => import('./content/beginner/u1'),
  u2: () => import('./content/beginner/u2'),
  u3: () => import('./content/beginner/u3'),
  u4: () => import('./content/beginner/u4'),
  u5: () => import('./content/beginner/u5'),
  u6: () => import('./content/a1/u6'),
  u7: () => import('./content/a1/u7'),
  u8: () => import('./content/a1/u8'),
  u9: () => import('./content/a1/u9'),
  u10: () => import('./content/a1/u10'),
  u11: () => import('./content/a1/u11'),
  u12: () => import('./content/a2/u12'),
  u13: () => import('./content/a2/u13'),
  u14: () => import('./content/a2/u14'),
  u15: () => import('./content/a2/u15'),
  u16: () => import('./content/a2/u16'),
  u17: () => import('./content/a2/u17'),
};

export async function loadUnit(unitId: string): Promise<Lesson[]> {
  const load = unitLoaders[unitId];
  if (!load) throw new Error(`Unknown unit ${unitId}`);
  return (await load()).lessons;
}

export async function loadLesson(lessonId: string): Promise<{ lesson: Lesson; previous: Lesson | null }> {
  const index = ALL_LESSONS.findIndex((l) => l.id === lessonId);
  if (index < 0) throw new Error(`Unknown lesson ${lessonId}`);
  const meta = ALL_LESSONS[index];
  const lessons = await loadUnit(meta.unitId);
  const lesson = lessons.find((l) => l.id === lessonId);
  if (!lesson) throw new Error(`Lesson ${lessonId} is not written yet`);
  let previous: Lesson | null = null;
  if (index > 0) {
    const prevMeta = ALL_LESSONS[index - 1];
    const prevLessons = prevMeta.unitId === meta.unitId ? lessons : await loadUnit(prevMeta.unitId);
    previous = prevLessons.find((l) => l.id === prevMeta.id) ?? null;
  }
  return { lesson, previous };
}

/**
 * Practice games after hard lessons: lesson id → how many ("-d1", "-d2"…). They are required: the next lesson opens
 * when the lesson and all of its drills are done.
 */
export const DRILL_COUNTS: Record<string, number> = {
  'u1-l4': 1, 'u1-l6': 1, 'u1-l8': 1, 'u1-l10': 1,
  'u2-l2': 2, 'u2-l3': 1, 'u2-l4': 3, 'u2-l5': 2, 'u2-l7': 1, 'u2-l14': 1, 'u2-l11': 1,
  'u3-l2': 1, 'u3-l3': 2, 'u3-l4': 1, 'u3-l5': 2, 'u3-l7': 1, 'u3-l13': 1, 'u3-l11': 1, 'u3-l15': 1, 'u3-l12': 1,
  'u4-l2': 1, 'u4-l4': 1, 'u4-l5': 1, 'u4-l8': 1, 'u4-l9': 1, 'u4-l13': 1, 'u4-l16': 1, 'u4-l12': 1,
  'u5-l3': 1, 'u5-l4': 2, 'u5-l5': 1, 'u5-l6': 1, 'u5-l7': 1, 'u5-l8': 1, 'u5-l14': 1, 'u5-l15': 1, 'u5-l12': 1,
  // Elementary
  'u6-l4': 1, 'u6-l8': 2,
  'u7-l2': 1, 'u7-l5': 1, 'u7-l6': 1, 'u7-l8': 1,
  'u8-l2': 2, 'u8-l7': 1, 'u8-l8': 1,
  'u9-l2': 1, 'u9-l3': 1, 'u9-l4': 1, 'u9-l8': 2,
  'u10-l3': 1, 'u10-l4': 1, 'u10-l6': 1, 'u10-l7': 1,
  'u11-l1': 2, 'u11-l2': 1, 'u11-l3': 2, 'u11-l5': 1,
  // Pre-Intermediate
  'u12-l2': 1, 'u12-l3': 1, 'u12-l4': 2, 'u12-l5': 1, 'u12-l6': 1,
  'u13-l3': 1, 'u13-l4': 1, 'u13-l5': 1, 'u13-l6': 2,
  'u14-l1': 1, 'u14-l2': 1, 'u14-l3': 1, 'u14-l4': 1, 'u14-l5': 1,
  'u15-l1': 1, 'u15-l2': 1, 'u15-l3': 1, 'u15-l4': 1,
  'u16-l1': 2, 'u16-l2': 1, 'u16-l3': 2, 'u16-l4': 2, 'u16-l6': 1,
  'u17-l1': 1,
};

/**
 * Practice games added when Beginner was rebuilt. Learners who already went past the lesson they belong to are not
 * asked to play them (see courseMap), so nobody has to redo finished work.
 */
export const NEW_DRILL_IDS: ReadonlySet<string> = new Set([
  'u1-l4-d1', 'u1-l6-d1', 'u1-l8-d1', 'u1-l10-d1', 'u2-l4-d3', 'u2-l7-d1', 'u2-l14-d1', 'u2-l11-d1',
  'u3-l13-d1', 'u3-l11-d1', 'u3-l15-d1', 'u3-l12-d1', 'u4-l9-d1', 'u4-l13-d1', 'u4-l16-d1', 'u4-l12-d1',
  'u5-l14-d1', 'u5-l15-d1', 'u5-l12-d1',
]);

export const drillIds = (lessonId: string): string[] => Array.from({ length: DRILL_COUNTS[lessonId] ?? 0 }, (_, i) => `${lessonId}-d${i + 1}`);

export const lessonOfDrill = (drillId: string): string => drillId.replace(/-d\d+$/, '');

export async function loadDrills(unitId: string): Promise<Drill[]> {
  const load = unitLoaders[unitId];
  return load ? ((await load()).drills ?? []) : [];
}

export async function loadDrill(drillId: string): Promise<Drill> {
  const lessonId = lessonOfDrill(drillId);
  const meta = ALL_LESSONS.find((l) => l.id === lessonId);
  const drill = meta ? (await loadDrills(meta.unitId)).find((d) => d.id === drillId) : undefined;
  if (!drill) throw new Error(`Unknown drill ${drillId}`);
  return drill;
}
