import type { Lesson } from '../../../types';

// Mini lesson (situation): introducing myself and my family. Recycles to be, my / his / her, a / an, jobs, countries, age.
const lesson: Lesson = {
  id: 'u2-l9',
  title: 'Introducing myself and my family',
  titleUz: 'O\'zim va oilam haqida tanishtirish',
  mini: true,
  goal: "Yangi tanishingizga **o'zingizni va oilangizni tanishtirasiz**: *I'm Aziz. This is my mother. She's a doctor.* — to be, my / his / her va a / an bilan.",
  slides: [
    {
      title: 'Vaziyat: yangi do\'st bilan tanishuv',
      blocks: [
        { t: 'p', md: "Yangi do'stingiz uyingizga keldi va oilangiz haqida so'radi. Siz **to be** (*I'm, she's, they're*) va **my / his / her** bilan oddiy gaplar aytasiz." },
        { t: 'dialog', lines: [
          { who: 'Emma', en: 'Hi, Aziz! Is this your family?', uz: 'Salom, Aziz! Bu sizning oilangizmi?' },
          { who: 'Aziz', en: 'Yes, it is. This is my mother. She is a teacher.', uz: "Ha. Bu onam. U o'qituvchi." },
          { who: 'Emma', en: 'And who is he?', uz: 'U kim?' },
          { who: 'Aziz', en: "He's my father. He's an engineer. He's 50.", uz: "U otam. U muhandis. U 50 yoshda." },
          { who: 'Emma', en: 'Is she your sister?', uz: 'U opangizmi (singlingizmi)?' },
          { who: 'Aziz', en: "Yes, she is. Her name's Malika. She's 18 and she's a student.", uz: "Ha. Ismi Malika. U 18 yoshda va talaba." },
          { who: 'Emma', en: 'You have a nice family!', uz: "Sizning oilangiz yaxshi ekan!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Aziz: "This is my sister. ___ name\'s Malika."', opts: ['His', 'Her', 'She', 'My is'], a: 1, why: "Qiz (ayol) haqida egalik: **her**." } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', 'Qachon aytiladi'], speak: [0], rows: [
          ["This is my family.", "Oilangizni tanishtirasiz"],
          ["This is my mother. She's a doctor.", "Onangiz haqida aytasiz"],
          ["He's my father. He's 50.", "Otangiz va yoshi haqida"],
          ["Her name's Malika.", "Singlingiz/opangiz ismini aytasiz"],
          ["They're my parents.", "Ota-onangizni tanishtirasiz"],
          ["Is this your sister?", "Tanishingizdan so'raysiz"],
        ] },
        { t: 'tip', tone: 'info', md: "**Bu kishi** — *This is…* (bitta odam), **bu kishilar** — *These are…* / *They're…* (bir nechta). Kasb oldida **a / an** unutmang: *She's **a** teacher. He's **an** engineer.*" },
        { t: 'check', ex: { k: 'fill', q: 'My father is ___ engineer.', a: ['an'], uz: 'Otam muhandis.', why: "*engineer* unli bilan boshlanadi → **an**." } },
      ],
    },
    {
      title: 'Ehtiyot bo\'ling: tez-tez uchraydigan xatolar',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["She is my sister.", "My mother is a teacher.", "His name is Ali.", "They are my parents."] }, bad: { title: "Noto'g'ri", items: ["She my sister.", "My mother is teacher.", "He name is Ali.", "They is my parents."] } },
        { t: 'p', md: "Eslatma: ingliz tilida gapda **to be** (*is / are*) tushib qolmaydi. *Onam o'qituvchi* → *My mother **is a** teacher.*" },
        { t: 'check', ex: { k: 'fix', wrong: 'My mother is teacher.', a: ['My mother is a teacher.', "My mother's a teacher."], why: "Kasb oldida **a** shart." } },
      ],
    },
  ],
  words: [
    { en: 'family', uz: 'oila', ipa: 'ˈfæm.əl.i', pos: 'noun', ex: 'This is my family.', exUz: 'Bu mening oilam.' },
    { en: 'mother', uz: 'ona', ipa: 'ˈmʌð.ə', pos: 'noun', ex: 'My mother is a teacher.', exUz: "Onam o'qituvchi." },
    { en: 'father', uz: 'ota', ipa: 'ˈfɑː.ðə', pos: 'noun', ex: 'His father is an engineer.', exUz: 'Uning otasi muhandis.' },
    { en: 'sister', uz: 'opa, singil', ipa: 'ˈsɪs.tə', pos: 'noun', ex: 'Her sister is a student.', exUz: 'Uning opasi talaba.' },
  ],
  practice: [
    { k: 'choice', q: 'Aziz is my brother. ___ is 20.', opts: ['He', 'She', 'His', 'They'], a: 0, why: "Erkak kishi → **he**." },
    { k: 'fill', q: 'This is my mother. ___ a doctor.', a: ["She's", 'She is'], uz: "Bu onam. U shifokor.", why: "Ayol → **she is / she's**." },
    { k: 'order', uz: "U mening otam.", words: ["He's", 'my', 'father'], extra: ['her', 'a'], alt: [['He', 'is', 'my', 'father']] },
    { k: 'translate', uz: "Bu mening oilam.", a: ['This is my family.', "This's my family."], why: "**This is** + my + ot." },
    { k: 'match', pairs: [['family', 'oila'], ['mother', 'ona'], ['father', 'ota'], ['sister', 'opa, singil'], ['parents', 'ota-ona']] },
    { k: 'tf', q: "*My father is engineer.* — gap to'g'ri.", a: false, why: "To'g'risi: *My father is **an** engineer.*" },
    { k: 'listen', say: "Her name's Malika.", opts: ["Her name's Malika.", "His name's Malika.", "Her name's Malik.", "My name's Malika."], a: 0 },
    { k: 'dictation', say: "They're my parents.", a: ["They're my parents.", 'They are my parents.'] },
    { k: 'fix', wrong: 'He name is Ali.', a: ['His name is Ali.', "His name's Ali."], why: "Egalik: **his**, **he** emas." },
    { k: 'fill', q: 'My sister is 18. ___ a student.', a: ["She's", 'She is'], why: "Singil/opa → **she**." },
    { k: 'speak', say: "This is my family. My mother is a teacher.", uz: "Oilangizni tanishtiring" },
  ],
  quiz: [
    { k: 'choice', q: 'My parents ___ doctors.', opts: ['is', 'are', 'am', 'be'], a: 1, why: "*parents* = they → **are**." },
    { k: 'fill', q: "This is my sister. ___ name's Dilnoza.", a: ['Her'], why: "Qiz haqida → **her**." },
    { k: 'order', uz: "Onam o'qituvchi.", words: ['My', 'mother', 'is', 'a', 'teacher'], extra: ['an', 'are'] },
    { k: 'translate', uz: "U mening opam.", a: ["She's my sister.", 'She is my sister.'] },
    { k: 'tf', q: "*He is a engineer.* — gap to'g'ri.", a: false, why: "*engineer* unli bilan boshlanadi: **an** engineer." },
    { k: 'fix', wrong: 'They is my parents.', a: ['They are my parents.', "They're my parents."], why: "*They* bilan — **are**." },
    { k: 'match', pairs: [['mother', 'ona'], ['father', 'ota'], ['sister', 'opa, singil'], ['family', 'oila']] },
    { k: 'choice', q: 'Is this your family? — ...', opts: ['Yes, it is.', 'Yes, I do.', 'Yes, he is.', 'Yes, they am.'], a: 0 },
  ],
  summary: [
    "Tanishtirish: **This is my mother. She's a teacher.** — his / her ni to'g'ri tanlang.",
    "Kasb oldidan **a / an**, ko'plikda esa yo'q: *They're doctors.*",
    "Yangi so'zlar: **family, mother, father, sister** — o'z oilangiz haqida gapiring.",
  ],
  homework: "Oilangizdan 3 kishini inglizcha tanishtiring: ism, yosh va kasb. Masalan: *This is my father. He's 50. He's a driver.*",
};

export default lesson;
