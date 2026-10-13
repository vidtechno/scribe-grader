import type { Lesson } from '../../../types';

// Mini lesson (grammar): How much / How many questions about food, with short answers.
const lesson: Lesson = {
  id: "u8-l12",
  title: "How much? How many? Food questions",
  titleUz: "How much? How many? Ovqat haqida savollar",
  mini: true,
  kind: 'grammar',
  goal: "Ovqat haqida **miqdor savollarini** berasiz: **How many eggs…? / How much flour…?** — va qisqa javob qaytarasiz: **A lot. A few. A little. Not many. Not much. None.**",
  slides: [
    {
      title: "How many yoki How much?",
      blocks: [
        { t: "p", md: "Miqdorni so'rash uchun ikkita so'z bor. Tanlov **ot turiga** bog'liq: sanaladigan ko'plik ot bilan **How many**, sanalmaydigan ot bilan **How much**." },
        { t: "table", head: ["Savol", "Ot turi", "O'zbekcha"], rows: [
          ["How many eggs do we need?", "sanaladigan (eggs)", "Bizga nechta tuxum kerak?"],
          ["How many apples are there?", "sanaladigan (apples)", "Nechta olma bor?"],
          ["How much flour do we need?", "sanalmaydigan (flour)", "Bizga qancha un kerak?"],
          ["How much oil is there?", "sanalmaydigan (oil)", "Qancha yog' bor?"],
        ], speak: [0] },
        { t: "tip", tone: "info", md: "**How many** dan keyin ot **ko'plikda** (-s): *How many **lemons**?* **How much** dan keyin ot birlikda: *How much **butter**?* Yordamchi fe'l ot turiga qarab: *How much milk **is** there? / How many eggs **are** there?*" },
        { t: "check", ex: { k: "choice", q: "___ cheese do we have?", opts: ["How much", "How many", "How", "How are"], a: 0, why: "**cheese** sanalmaydi → **How much**." } },
      ],
    },
    {
      title: "Qisqa javoblar",
      blocks: [
        { t: "p", md: "Savolga har doim to'liq gap bilan javob berish shart emas. Qisqa javob tabiiyroq eshitiladi:" },
        { t: "dialog", lines: [
          { who: "Mum", en: "How many eggs do we have?", uz: "Bizda nechta tuxum bor?" },
          { who: "Sam", en: "A few. About four.", uz: "Bir nechta. Taxminan to'rtta." },
          { who: "Mum", en: "And how much butter do we have?", uz: "Sariyog' qancha bor?" },
          { who: "Sam", en: "Not much. Only a little.", uz: "Ko'p emas. Faqat ozgina." },
          { who: "Mum", en: "How many lemons are there?", uz: "Nechta limon bor?" },
          { who: "Sam", en: "None. We need to buy some.", uz: "Yo'q. Sotib olishimiz kerak." },
        ] },
        { t: "table", head: ["Savol", "Qisqa javob"], rows: [
          ["How many eggs…?", "A lot. / A few. / Not many. / None."],
          ["How much honey…?", "A lot. / A little. / Not much. / None."],
        ], speak: [1] },
        { t: "check", ex: { k: "choice", q: "\"How much yoghurt is there?\" — eng mos qisqa javob:", opts: ["A little.", "A few.", "Not many.", "Many."], a: 0, why: "**yoghurt** sanalmaydi → **a little** / **not much**. *a few* va *not many* faqat sanaladigan otlar uchun." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: miqdor va narx",
      blocks: [
        { t: "compare", good: { title: "To'g'ri", items: ["How many eggs do we need?", "How much flour is there?", "How much is this cheese?", "A few eggs. / A little flour."] }, bad: { title: "Noto'g'ri", items: ["How much eggs do we need?", "How many flour is there?", "How many is this cheese?", "A few flour. / A little eggs."] } },
        { t: "tip", tone: "warn", md: "**How much** ikki xil ma'noda: miqdor (*How much milk is there?* — qancha sut?) va narx (*How much is the milk?* — sut necha pul?). Ikkinchi gapda **is / are** darrov **much** dan keyin keladi." },
        { t: "check", ex: { k: "fill", q: "How ___ lemons do we need?", a: ["many"], uz: "Bizga nechta limon kerak?", why: "**lemons** — ko'plik, sanaladi → **How many**." } },
      ],
    },
  ],
  words: [
    { en: "flour", uz: "un", ipa: "ˈflaʊ.ər", pos: "noun", ex: "We need flour for the bread.", exUz: "Non uchun bizga un kerak." },
    { en: "butter", uz: "sariyog'", ipa: "ˈbʌt.ər", pos: "noun", ex: "There is a little butter in the fridge.", exUz: "Muzlatkichda ozgina sariyog' bor." },
    { en: "cheese", uz: "pishloq", ipa: "tʃiːz", pos: "noun", ex: "I like cheese on my bread.", exUz: "Nonimga pishloq yoqadi." },
    { en: "yoghurt", uz: "qatiq, yogurt", ipa: "ˈjɒɡ.ət", pos: "noun", ex: "She eats yoghurt for breakfast.", exUz: "U nonushtada yogurt yeydi." },
    { en: "oil", uz: "yog' (o'simlik yog'i)", ipa: "ɔɪl", pos: "noun", ex: "Add a little oil to the pan.", exUz: "Tovaga ozgina yog' qo'shing." },
    { en: "lemon", uz: "limon", ipa: "ˈlem.ən", pos: "noun", ex: "I want a lemon in my tea.", exUz: "Choyimga limon solmoqchiman." },
    { en: "honey", uz: "asal", ipa: "ˈhʌn.i", pos: "noun", ex: "How much honey do we have?", exUz: "Bizda qancha asal bor?" },
  ],
  practice: [
    { k: "choice", q: "___ butter is there?", opts: ["How much", "How many", "How", "How are"], a: 0, why: "**butter** sanalmaydi → **How much**." },
    { k: "choice", q: "___ lemons do we need?", opts: ["How many", "How much", "How", "How is"], a: 0, why: "**lemons** — ko'plik → **How many**." },
    { k: "fill", q: "How ___ flour do we need?", a: ["much"], uz: "Bizga qancha un kerak?", why: "**flour** sanalmaydi → **much**." },
    { k: "fill", q: "How ___ eggs are there?", a: ["many"], uz: "Nechta tuxum bor?", why: "**eggs** sanaladi → **many**." },
    { k: "choice", q: "\"How many eggs do we have?\" — \"___.\"", opts: ["A few", "A little", "Not much", "Much"], a: 0, why: "Tuxum sanaladi → **a few**." },
    { k: "choice", q: "\"How much honey is there?\" — \"___.\"", opts: ["Not much", "Not many", "A few", "Two"], a: 0, why: "**honey** sanalmaydi → **not much**." },
    { k: "order", uz: "Bizda qancha pishloq bor?", words: ["How", "much", "cheese", "do", "we", "have?"], extra: ["many", "does"] },
    { k: "translate", uz: "Nechta limon bor?", a: ["How many lemons are there?", "How many lemons do we have?"] },
    { k: "match", pairs: [["flour", "un"], ["butter", "sariyog'"], ["cheese", "pishloq"], ["lemon", "limon"], ["honey", "asal"]] },
    { k: "fix", wrong: "How much eggs do we need?", a: ["How many eggs do we need?"], why: "**eggs** sanaladi → **How many**." },
    { k: "tf", q: "*How many oil is there?* — gap to'g'ri.", a: false, why: "**oil** sanalmaydi: *How much oil is there?*" },
    { k: "listen", say: "How much oil is there?", opts: ["How much oil is there?", "How many oil is there?", "How much is the oil?", "How much oil are there?"], a: 0 },
    { k: "dictation", say: "How many eggs do we have?", a: ["How many eggs do we have?"] },
    { k: "speak", say: "How much flour do we have?", uz: "Bizda qancha un bor?" },
  ],
  quiz: [
    { k: "choice", q: "How ___ yoghurt do we have?", opts: ["much", "many", "a", "is"], a: 0 },
    { k: "choice", q: "How ___ lemons are there?", opts: ["many", "much", "little", "a few"], a: 0 },
    { k: "fill", q: "How much butter is there? — Not ___.", a: ["much"], why: "Sanalmaydigan ot → **not much**." },
    { k: "order", uz: "Nechta tuxum kerak?", words: ["How", "many", "eggs", "do", "we", "need?"], extra: ["much", "are"] },
    { k: "translate", uz: "Bizda qancha asal bor?", a: ["How much honey do we have?", "How much honey is there?"] },
    { k: "fix", wrong: "How many flour do we need?", a: ["How much flour do we need?"], why: "**flour** sanalmaydi → **How much**." },
    { k: "tf", q: "*How much milk is there?* — gap to'g'ri.", a: true, why: "**milk** sanalmaydi → **How much**." },
    { k: "choice", q: "\"How much is the cheese?\" — bu savol nimani so'raydi?", opts: ["Narxni", "Nechta ekanini", "Rangini", "Ta'mini"], a: 0, why: "**How much is…?** — narx." },
  ],
  summary: [
    "Sanaladigan ko'plik ot bilan **How many**: *How many eggs…?*",
    "Sanalmaydigan ot bilan **How much**: *How much flour…?*",
    "Qisqa javoblar: **a lot, a few / a little, not many / not much, none**.",
    "*How much is…?* — narx; *How much milk is there?* — miqdor.",
    "Yangi so'zlar: **flour, butter, cheese, yoghurt, oil, lemon, honey**.",
  ],
  homework: "Muzlatkichingizga qarab 5 ta savol yozing (*How many eggs…? How much cheese…?*) va har biriga qisqa javob bering.",
};

export default lesson;
