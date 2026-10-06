import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l2',
  title: 'There is / there are',
  titleUz: 'There is / there are, some / any',
  goal: "**There is / there are** yordamida biror joyda nima borligini aytasiz, **Is there…? / Are there…?** bilan so'raysiz va **some / any** ni to'g'ri ishlatib, uyingizni tasvirlab bera olasiz.",
  slides: [
    {
      title: '"…da … bor" — inglizcha qanday?',
      blocks: [
        { t: 'p', md: "O'zbekchada biror joyda narsa borligini shunday aytamiz: *Xonada divan **bor**.* Ingliz tilida buning uchun maxsus qolip bor: **There is / There are**." },
        { t: 'p', md: "Tartib o'zbekchadan farq qiladi. O'zbekchada **joy** oldin keladi, inglizchada esa **There is + narsa + joy**:\n• *Xonada divan bor.* → ***There is** a sofa in the room.*\n• *Oshxonada ikkita lampa bor.* → ***There are** two lamps in the kitchen.*" },
        { t: 'tip', tone: 'info', md: "Bu yerda **there** \"u yerda\" degan ma'noni bermaydi — u shunchaki gapni boshlaydigan so'z. O'zbekchaga **\"... bor\"** deb tarjima qilinadi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['There is a bed in my room.', 'There are two sofas in the living room.'] },
          bad: { title: "Noto'g'ri", items: ['In my room is a bed.', 'In my room bed there is.', 'In the living room have two sofas.'] },
        },
      ],
    },
    {
      title: 'There is yoki there are?',
      blocks: [
        { t: 'p', md: "Narsa **bitta** bo'lsa — **there is** (+ a / an). **Ko'p** bo'lsa — **there are** (+ ko'plik)." },
        {
          t: 'table', head: ['', 'Birlik', "Ko'plik"], speak: [1, 2],
          rows: [
            ['To\'liq', 'There is a lamp.', 'There are two lamps.'],
            ['Qisqa', "There's a lamp.", 'There are two lamps.'],
            ['Inkor', "There isn't a lamp.", "There aren't any lamps."],
            ['Savol', 'Is there a lamp?', 'Are there any lamps?'],
          ],
        },
        {
          t: 'examples', items: [
            { en: "There's a fridge in the kitchen.", uz: 'Oshxonada muzlatkich bor.' },
            { en: 'There are three bedrooms in our flat.', uz: 'Kvartiramizda uchta yotoqxona bor.' },
            { en: 'There is an old carpet in the living room.', uz: 'Mehmonxonada eski gilam bor.', note: "*old* unli bilan boshlanadi → **an**." },
          ],
        },
        {
          t: 'sounds', items: [
            { label: "there's", say: "there's", uz: "**\"zeəz\"** emas! *th* — tilning uchi tishlar orasida, ovozli **ð** (\"z\" va \"d\" orasidagi, titroq tovush). Oxiri **z**.", examples: ["there's", 'there is', 'there are'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "**There are** ning qisqa yozma shakli yo'q (\"there're\" deb yozmang). Og'zaki nutqda esa tez aytiladi: **\"ðeərə\"**." },
        { t: 'check', ex: { k: 'fill', q: 'There ___ two beds in the bedroom.', a: ['are'], uz: 'Yotoqxonada ikkita karavot bor.', why: "*two beds* — ko'plik → **are**." } },
      ],
    },
    {
      title: 'Inkor: there isn\'t / there aren\'t',
      blocks: [
        { t: 'p', md: "Inkor uchun **is / are** ga **not** qo'shamiz:\n• **There isn't** a sofa. — Divan yo'q.\n• **There aren't** any chairs. — Stullar yo'q." },
        {
          t: 'examples', items: [
            { en: "There isn't a fridge in my room.", uz: "Xonamda muzlatkich yo'q." },
            { en: "There aren't any shelves in the bathroom.", uz: "Hammomda javonlar yo'q.", note: "*shelf* → ko'plikda **shelves** (*knife → knives* kabi)." },
            { en: "There isn't a lamp on the table.", uz: "Stolda lampa yo'q." },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["There isn't a carpet.", "There aren't any lamps."] },
          bad: { title: "Noto'g'ri", items: ['There is not carpet.', "There isn't any lamps.", "There don't have lamps."] },
        },
        { t: 'check', ex: { k: 'choice', q: "\"Oshxonada stullar yo'q.\"", opts: ["There isn't any chairs in the kitchen.", "There aren't any chairs in the kitchen.", "There don't chairs in the kitchen.", "There not are chairs in the kitchen."], a: 1, why: "*chairs* — ko'plik → **There aren't any** chairs." } },
      ],
    },
    {
      title: 'Savol: Is there…? Are there…?',
      blocks: [
        { t: 'p', md: "Savolda **is / are** oldinga chiqadi. Qisqa javobda ham *there* qoladi:" },
        {
          t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [0, 1, 2],
          rows: [
            ['Is there a sofa?', 'Yes, there is.', "No, there isn't."],
            ['Are there any lamps?', 'Yes, there are.', "No, there aren't."],
          ],
        },
        { t: 'p', md: "Sonini so'rash uchun: **How many + ko'plik + are there?**\n*How many rooms are there in your flat?* — *There are four.*" },
        { t: 'tip', tone: 'warn', md: "Qisqa ijobiy javobda qisqartirma ishlatilmaydi: **Yes, there is.** (✅) — *Yes, there's.* (❌)" },
        {
          t: 'dialog', lines: [
            { who: 'Dilnoza', en: 'Is there a fridge in your room?', uz: 'Xonangizda muzlatkich bormi?' },
            { who: 'Jamshid', en: "No, there isn't. It's in the kitchen.", uz: "Yo'q. U oshxonada." },
            { who: 'Dilnoza', en: 'How many bedrooms are there in your house?', uz: 'Uyingizda nechta yotoqxona bor?' },
            { who: 'Jamshid', en: 'There are three.', uz: 'Uchta.' },
            { who: 'Dilnoza', en: 'Are there any carpets?', uz: 'Gilamlar bormi?' },
            { who: 'Jamshid', en: 'Yes, there are. There are some beautiful carpets.', uz: 'Ha, bor. Bir nechta chiroyli gilamlar bor.' },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "*Is there a lamp in the bedroom?* — qisqa ijobiy javob:", opts: ["Yes, there's.", 'Yes, it is.', 'Yes, there is.', 'Yes, there are.'], a: 2, why: "**Yes, there is.** — qisqartirmasiz." } },
      ],
    },
    {
      title: 'some va any',
      blocks: [
        { t: 'p', md: "Ko'plikdagi otlar oldida aniq son aytmasak, **some** yoki **any** ishlatamiz (\"bir nechta, biroz\"):\n• **some** — ijobiy gapda: *There are **some** books.*\n• **any** — inkor va savolda: *There aren't **any** books. Are there **any** books?*" },
        {
          t: 'table', head: ['Gap turi', 'So\'z', 'Misol'], speak: [2],
          rows: [
            ['Ijobiy (+)', 'some', 'There are some chairs.'],
            ['Inkor (–)', 'any', "There aren't any chairs."],
            ['Savol (?)', 'any', 'Are there any chairs?'],
          ],
        },
        { t: 'tip', tone: 'info', md: "Birlikdagi sanaladigan ot oldida **a / an** qoladi: *There is **a** sofa.* (*some sofa* emas). Sanalmaydigan otlarda (water, tea) ham some/any ishlatiladi — buni 4-darsda o'rganamiz." },
        {
          t: 'sounds', items: [
            { label: 'some', say: 'There are some shelves.', uz: "Gap ichida **some** juda qisqa, kuchsiz aytiladi: **\"səm\"** (\"sm\"ga yaqin).", examples: ['some books', 'some lamps'] },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['There are some lamps.', 'Are there any shelves?'] },
          bad: { title: "Noto'g'ri", items: ['There are any lamps.', 'Are there some lamp?'] },
        },
        { t: 'check', ex: { k: 'fill', q: "There aren't ___ chairs in the bathroom.", a: ['any'], why: "Inkor gap → **any**." } },
      ],
    },
    {
      title: 'Uyimdagi xonalar',
      blocks: [
        {
          t: 'examples', items: [
            { en: 'a kitchen', uz: 'oshxona' },
            { en: 'a bedroom', uz: 'yotoqxona' },
            { en: 'a bathroom', uz: 'hammom, vannaxona' },
            { en: 'a living room', uz: 'mehmonxona (yashash xonasi)' },
            { en: 'a sofa', uz: 'divan' },
            { en: 'a bed', uz: 'karavot' },
            { en: 'a lamp', uz: 'lampa, chiroq' },
            { en: 'a fridge', uz: 'muzlatkich' },
            { en: 'a shelf — shelves', uz: 'javon — javonlar' },
            { en: 'a carpet', uz: 'gilam' },
          ],
        },
        { t: 'tip', tone: 'warn', md: "**there** (bor/u yerda) va **their** (ularning) bir xil aytiladi: **\"ðeə\"**. Yozuvda farqlang: *There is a sofa in **their** house.*" },
        { t: 'tip', tone: 'good', md: "Tasvir namunasi: *There are four rooms in my flat. There's a big kitchen. There are two bedrooms. There isn't a big bathroom.* — o'zingiz ham uyingizni shunday tasvirlab ko'ring." },
      ],
    },
  ],
  words: [
    { en: 'kitchen', uz: 'oshxona', ipa: 'ˈkɪtʃ.ɪn', pos: 'noun', ex: 'There is a big table in the kitchen.', exUz: 'Oshxonada katta stol bor.' },
    { en: 'bedroom', uz: 'yotoqxona', ipa: 'ˈbed.ruːm', pos: 'noun', ex: 'There are two bedrooms in our flat.', exUz: 'Kvartiramizda ikkita yotoqxona bor.' },
    { en: 'bathroom', uz: 'hammom, vannaxona', ipa: 'ˈbɑːθ.ruːm', pos: 'noun', ex: 'Is there a bathroom here?', exUz: 'Bu yerda hammom bormi?' },
    { en: 'living room', uz: 'mehmonxona (yashash xonasi)', ipa: 'ˈlɪv.ɪŋ ruːm', pos: 'noun', ex: 'We watch TV in the living room.', exUz: "Biz mehmonxonada televizor ko'ramiz." },
    { en: 'sofa', uz: 'divan', ipa: 'ˈsəʊ.fə', pos: 'noun', ex: 'There is a green sofa in the living room.', exUz: 'Mehmonxonada yashil divan bor.' },
    { en: 'bed', uz: 'karavot', ipa: 'bed', pos: 'noun', ex: 'My bed is very old.', exUz: 'Karavotim juda eski.' },
    { en: 'lamp', uz: 'lampa, chiroq', ipa: 'læmp', pos: 'noun', ex: "There isn't a lamp in my room.", exUz: "Xonamda lampa yo'q." },
    { en: 'fridge', uz: 'muzlatkich', ipa: 'frɪdʒ', pos: 'noun', ex: 'Are there any eggs in the fridge?', exUz: 'Muzlatkichda tuxum bormi?' },
    { en: 'shelf', uz: 'javon (ko\'pl. shelves)', ipa: 'ʃelf', pos: 'noun', ex: 'There are some books on the shelf.', exUz: 'Javonda bir nechta kitob bor.' },
    { en: 'carpet', uz: 'gilam', ipa: 'ˈkɑː.pɪt', pos: 'noun', ex: 'Uzbek carpets are beautiful.', exUz: "O'zbek gilamlari chiroyli." },
  ],
  practice: [
    { k: 'match', pairs: [['kitchen', 'oshxona'], ['bedroom', 'yotoqxona'], ['bathroom', 'hammom, vannaxona'], ['living room', 'mehmonxona'], ['fridge', 'muzlatkich']] },
    { k: 'match', pairs: [['sofa', 'divan'], ['bed', 'karavot'], ['lamp', 'lampa'], ['shelf', 'javon'], ['carpet', 'gilam']] },
    { k: 'listen', say: "There's a fridge in the kitchen.", opts: ["There's a fridge in the kitchen.", 'There are fridges in the kitchen.', "There isn't a fridge in the kitchen."], a: 0 },
    { k: 'listen', say: 'Are there any shelves?', opts: ['Are there any shelves?', 'Is there a shelf?', "There aren't any shelves.", 'Are there any shells?'], a: 0 },
    { k: 'choice', q: "There ___ a big lamp in my room.", opts: ['is', 'are', 'am', 'be'], a: 0, why: "**a lamp** — birlik → **there is**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['There are some sofa.', 'There is some sofas.', 'There are some sofas.', 'There are any sofas.'], a: 2, why: "Ijobiy gap, ko'plik → **There are some sofas**." },
    { k: 'fill', q: '___ there a bathroom in your flat?', a: ['is'], uz: 'Kvartirangizda hammom bormi?', why: "*a bathroom* — birlik → **Is** there…?" },
    { k: 'fill', q: 'Are there ___ carpets in the bedroom?', a: ['any'], why: "Savol → **any**." },
    { k: 'fill', q: 'There are ___ books on the shelf.', a: ['some', 'two', 'three', 'four', 'five', 'many'], why: "Ijobiy gap → **some** (yoki aniq son)." },
    { k: 'tf', q: "*Is there a sofa?* savoliga **Yes, there's.** deb javob berish mumkin.", a: false, why: "Qisqa ijobiy javobda qisqartirma yo'q: **Yes, there is.**" },
    { k: 'tf', q: "**there** va **their** bir xil talaffuz qilinadi.", a: true, why: "Ikkalasi ham \"ðeə\"." },
    { k: 'order', uz: 'Oshxonada muzlatkich bor.', words: ['There', 'is', 'a', 'fridge', 'in', 'the', 'kitchen'], alt: [["There's", 'a', 'fridge', 'in', 'the', 'kitchen']], why: "**There is** + narsa + joy." },
    { k: 'order', uz: "Hammomda lampalar yo'q.", words: ['There', "aren't", 'any', 'lamps', 'in', 'the', 'bathroom'], extra: ['some'], why: "Inkor → **any**." },
    { k: 'translate', uz: 'Yotoqxonada karavot bor.', a: ['There is a bed in the bedroom', "There's a bed in the bedroom"], why: "**There is a bed in the bedroom.**" },
    { k: 'translate', uz: 'Mehmonxonada divan bormi?', a: ['Is there a sofa in the living room'], why: "**Is there a sofa in the living room?**" },
    { k: 'speak', say: 'There are three rooms in my flat. There is a big kitchen.', uz: "Uyingizni tasvirlab ayting" },
  ],
  quiz: [
    { k: 'listen', say: "There aren't any carpets.", opts: ["There aren't any carpets.", 'There are some carpets.', "There isn't a carpet.", 'Are there any carpets?'], a: 0 },
    { k: 'listen', say: 'How many bedrooms are there?', opts: ['How many bathrooms are there?', 'How many bedrooms are there?', 'How many beds are there?'], a: 1 },
    { k: 'choice', q: "*Are there any shelves in the kitchen?* — qisqa inkor javob:", opts: ["No, there isn't.", "No, they aren't.", "No, there aren't.", "No, there not."], a: 2, why: "*Are there…?* → **No, there aren't.**" },
    { k: 'fill', q: 'There ___ an old lamp in the living room.', a: ['is', "'s"], why: "*an old lamp* — birlik → **is**." },
    { k: 'fill', q: "There isn't ___ fridge in my room.", a: ['a'], why: "Birlikdagi sanaladigan ot → **a** (any emas)." },
    { k: 'fill', q: 'How many rooms ___ there in your house?', a: ['are'], why: "*How many rooms* — ko'plik → **are** there." },
    { k: 'order', uz: 'Javonda bir nechta kitob bor.', words: ['There', 'are', 'some', 'books', 'on', 'the', 'shelf'], extra: ['any', 'is'] },
    { k: 'translate', uz: "Kvartiramda hammom yo'q.", a: ["There isn't a bathroom in my flat", 'There is not a bathroom in my flat', "There's no bathroom in my flat", 'There is no bathroom in my flat', "There isn't a bathroom in my apartment", 'There is not a bathroom in my apartment', "There's no bathroom in my apartment", 'There is no bathroom in my apartment'] },
    { k: 'translate', uz: 'Oshxonada stullar bormi?', a: ['Are there any chairs in the kitchen', 'Are there chairs in the kitchen'] },
    { k: 'choice', q: "\"gilam\" inglizcha:", opts: ['carpet', 'sofa', 'shelf', 'bed'], a: 0 },
  ],
  summary: [
    "\"…da … bor\" = **There is + birlik** / **There are + ko'plik** + joy: *There is a sofa in the room.*",
    "Inkor: **There isn't a…** / **There aren't any…**",
    "Savol: **Is there a…? / Are there any…?** — Javob: *Yes, there is. / No, there aren't.*",
    "**some** — ijobiy gapda, **any** — inkor va savolda.",
    "Yangi so'zlar: kitchen, bedroom, bathroom, living room, sofa, bed, lamp, fridge, shelf, carpet.",
  ],
  homework: "Uyingiz yoki kvartirangizni 6–8 gap bilan tasvirlab yozing: qaysi xonalar bor, ularda nima bor va nima yo'q (there is / there are / there isn't / there aren't any). Keyin matnni ovoz chiqarib o'qing.",
};

export default lesson;
