import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l3',
  title: 'Prepositions of place',
  titleUz: 'Joy predloglari: in, on, under…',
  goal: "Narsalar va odamlar **qayerda** turganini 10 ta joy predlogi bilan (in, on, under, next to, between…) aniq aytasiz va *Where is…? / Where are…?* savollariga javob bera olasiz.",
  slides: [
    {
      title: "Qo'shimcha emas — predlog",
      blocks: [
        { t: 'p', md: "O'zbek tilida joyni **qo'shimcha** va **ko'makchi** bilan bildiramiz va ular so'zdan **keyin** keladi: *stol**da**, stol **ustida**, stol **ostida**, stol **yonida***." },
        { t: 'p', md: "Ingliz tilida esa **predlog** ishlatiladi va u otdan **oldin** turadi:\n• *stol**da*** → ***on** the table*\n• *quti **ichida*** → ***in** the box*\n• *stol **ostida*** → ***under** the table*" },
        { t: 'tip', tone: 'info', md: "Tartibni eslab qoling: **predlog + the + ot**. O'zbekcha tartibni ag'darib qo'yasiz: *karavot ostida* → **under the bed**." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['The cat is under the bed.', 'My bag is on the chair.'] },
          bad: { title: "Noto'g'ri", items: ['The cat is the bed under.', 'My bag is chair on.', 'My bag on the chair.'] },
        },
        { t: 'tip', tone: 'warn', md: "Fe'l **to be** ni unutmang: *My bag **is** on the chair.* O'zbekchada \"Sumkam stulda\" — fe'lsiz, inglizchada esa **is** shart." },
      ],
    },
    {
      title: 'in, on, under, above',
      blocks: [
        {
          t: 'table', head: ['Predlog', "Ma'nosi", 'Misol'], speak: [0, 2],
          rows: [
            ['in', '-da, ichida', 'The milk is in the fridge.'],
            ['on', 'ustida (tegib turadi)', 'The lamp is on the table.'],
            ['under', 'ostida, tagida', 'The shoes are under the bed.'],
            ['above', 'tepasida (tegmaydi)', 'The clock is above the door.'],
          ],
        },
        { t: 'p', md: "**on** va **above** farqi: *on* — narsa sirtga **tegib** turadi (stol ustidagi kitob). *above* — narsa **yuqorida, havoda**, tegmaydi (eshik tepasidagi soat, stol tepasidagi lampa)." },
        {
          t: 'examples', items: [
            { en: 'The keys are in my bag.', uz: 'Kalitlar sumkamda.' },
            { en: 'There is a carpet on the floor.', uz: 'Polda gilam bor.', note: "Pol, devor ustida — **on**: *on the floor, on the wall*." },
            { en: 'The cat is under the sofa.', uz: 'Mushuk divan tagida.' },
            { en: 'There is a lamp above the bed.', uz: 'Karavot tepasida lampa bor.' },
          ],
        },
        { t: 'check', ex: { k: 'choice', q: "Rasm devorga osilgan: *The picture is ___ the wall.*", opts: ['in', 'on', 'under', 'between'], a: 1, why: "Devor sirtida → **on the wall**." } },
      ],
    },
    {
      title: 'next to, near, between',
      blocks: [
        {
          t: 'table', head: ['Predlog', "Ma'nosi", 'Misol'], speak: [0, 2],
          rows: [
            ['next to', 'yonida (tegib, yonma-yon)', 'The sofa is next to the window.'],
            ['near', 'yaqinida', 'I live near the park.'],
            ['between', 'orasida (ikkisi orasida)', 'The bank is between the shop and the school.'],
          ],
        },
        { t: 'p', md: "**next to** — darhol yonida, yonma-yon. **near** — yaqin, lekin yonma-yon bo'lishi shart emas. **between A and B** — ikki narsaning o'rtasida." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['The bed is next to the window.', 'The shop is near my house.', 'between the bank and the park'] },
          bad: { title: "Noto'g'ri", items: ['The bed is next the window.', 'The shop is near of my house.', 'between the bank or the park'] },
        },
        { t: 'check', ex: { k: 'fill', q: 'The chair is ___ the bed and the window.', a: ['between'], uz: 'Stul karavot bilan deraza orasida.', why: "*… and …* — ikki narsa orasida → **between**." } },
      ],
    },
    {
      title: 'behind, in front of, opposite',
      blocks: [
        {
          t: 'table', head: ['Predlog', "Ma'nosi", 'Misol'], speak: [0, 2],
          rows: [
            ['behind', 'orqasida', 'The bag is behind the door.'],
            ['in front of', 'oldida', 'The car is in front of the house.'],
            ['opposite', 'qarshisida, ro\'parasida', 'The bank is opposite the hospital.'],
          ],
        },
        { t: 'p', md: "**in front of** va **opposite** farqi: *in front of* — biror narsaning **old tomonida** (uy oldidagi mashina). *opposite* — **ro'parasida**, odatda orada yo'l yoki stol bor (ko'chaning narigi tomonidagi bank)." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['in front of the school', 'opposite the bank'] },
          bad: { title: "Noto'g'ri", items: ['in the front of the school', 'front of the school', 'opposite of the bank'] },
        },
        {
          t: 'sounds', items: [
            { label: 'in front of', say: 'in front of the house', uz: "Urg'u **front** da. **of** kuchsiz — **\"əv\"**: *in-FRANT-əv*. *front* dagi **o** — qisqa \"a\" kabi.", examples: ['in front of', 'in front of the door'] },
            { label: 'above', say: 'above', uz: "**\"ə-BAV\"** — urg'u ikkinchi bo'g'inda.", examples: ['above', 'above the bed'] },
            { label: 'opposite', say: 'opposite', uz: "**\"OP-ə-zit\"** — urg'u birinchi bo'g'inda, oxiri *\"zit\"*.", examples: ['opposite', 'opposite the park'] },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'The car is behind the house.', opts: ['The car is behind the house.', 'The car is in front of the house.', 'The car is near the house.', 'The car is opposite the house.'], a: 0, why: "**behind** — orqasida." } },
      ],
    },
    {
      title: 'Where is…? Where are…?',
      blocks: [
        { t: 'p', md: "Joyni so'rash: **Where is + birlik?** / **Where are + ko'plik?** Javobda **it** yoki **they** ishlatiladi:\n• *Where is my phone?* — ***It's** on the sofa.*\n• *Where are my keys?* — ***They're** in your bag.*" },
        {
          t: 'dialog', lines: [
            { who: 'Ona', en: 'Where is your bag?', uz: 'Sumkang qayerda?' },
            { who: 'Sardor', en: "It's under my bed.", uz: 'Karavotimning tagida.' },
            { who: 'Ona', en: 'And where are your books?', uz: 'Kitoblaring-chi?' },
            { who: 'Sardor', en: "They're on the shelf, next to the lamp.", uz: 'Javonda, lampaning yonida.' },
            { who: 'Ona', en: 'Where is the shop?', uz: "Do'kon qayerda?" },
            { who: 'Sardor', en: "It's opposite the park, between the bank and the school.", uz: "Bog'ning ro'parasida, bank bilan maktab orasida." },
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["Where are my shoes? — They're under the bed.", "Where is the cat? — It's behind the sofa."] },
          bad: { title: "Noto'g'ri", items: ["Where is my shoes? — It's under the bed.", 'Where the cat is?'] },
        },
        { t: 'check', ex: { k: 'fill', q: "Where ___ my keys? — They're in the kitchen.", a: ['are'], why: "*my keys* — ko'plik → **are**." } },
      ],
    },
  ],
  words: [
    { en: 'in', uz: '-da, ichida', ipa: 'ɪn', pos: 'preposition', ex: 'The eggs are in the fridge.', exUz: 'Tuxumlar muzlatkichda.' },
    { en: 'on', uz: 'ustida', ipa: 'ɒn', pos: 'preposition', ex: 'My phone is on the table.', exUz: 'Telefonim stol ustida.' },
    { en: 'under', uz: 'ostida, tagida', ipa: 'ˈʌn.də', pos: 'preposition', ex: 'The dog is under the table.', exUz: 'It stol tagida.' },
    { en: 'next to', uz: 'yonida', ipa: 'ˈnekst tə', pos: 'preposition', ex: 'My house is next to the bank.', exUz: 'Uyim bankning yonida.' },
    { en: 'between', uz: 'orasida', ipa: 'bɪˈtwiːn', pos: 'preposition', ex: 'The lamp is between the bed and the sofa.', exUz: 'Lampa karavot bilan divan orasida.' },
    { en: 'behind', uz: 'orqasida', ipa: 'bɪˈhaɪnd', pos: 'preposition', ex: 'The cat is behind the door.', exUz: 'Mushuk eshik orqasida.' },
    { en: 'in front of', uz: 'oldida', ipa: 'ɪn ˈfrʌnt əv', pos: 'preposition', ex: 'There is a car in front of the school.', exUz: 'Maktab oldida mashina bor.' },
    { en: 'near', uz: 'yaqinida', ipa: 'nɪə', pos: 'preposition', ex: 'We live near the market.', exUz: 'Biz bozor yaqinida yashaymiz.' },
    { en: 'opposite', uz: "qarshisida, ro'parasida", ipa: 'ˈɒp.ə.zɪt', pos: 'preposition', ex: 'The bank is opposite the library.', exUz: "Bank kutubxonaning ro'parasida." },
    { en: 'above', uz: 'tepasida, yuqorisida', ipa: 'əˈbʌv', pos: 'preposition', ex: 'There is a lamp above the table.', exUz: 'Stol tepasida lampa bor.' },
  ],
  practice: [
    { k: 'match', pairs: [['in', 'ichida'], ['on', 'ustida'], ['under', 'ostida'], ['above', 'tepasida'], ['behind', 'orqasida']] },
    { k: 'match', pairs: [['next to', 'yonida'], ['near', 'yaqinida'], ['between', 'orasida'], ['in front of', 'oldida'], ['opposite', "ro'parasida"]] },
    { k: 'listen', say: 'The shoes are under the bed.', opts: ['The shoes are on the bed.', 'The shoes are under the bed.', 'The shoes are near the bed.'], a: 1 },
    { k: 'listen', say: 'opposite', opts: ['above', 'behind', 'opposite', 'between'], a: 2 },
    { k: 'choice', q: "Lampa shiftga osilgan, stolga tegmaydi: *The lamp is ___ the table.*", opts: ['on', 'in', 'under', 'above'], a: 3, why: "Tegmaydi, yuqorida → **above**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['The bag is in the front of the door.', 'The bag is in front of the door.', 'The bag is front of the door.', 'The bag is in front the door.'], a: 1, why: "**in front of** — uch so'z, *the* yo'q." },
    { k: 'fill', q: 'The milk is ___ the fridge.', a: ['in'], uz: 'Sut muzlatkichda.', why: "Ichida → **in**." },
    { k: 'fill', q: 'The sofa is next ___ the window.', a: ['to'], why: "**next to** — *to* shart." },
    { k: 'fill', q: 'Where ___ the cat? — It is under the sofa.', a: ['is', "'s"], why: "*the cat* — birlik → **is**." },
    { k: 'tf', q: "*The bank is near of the park.* — to'g'ri gap.", a: false, why: "**near** dan keyin *of* kerak emas: *near the park*." },
    { k: 'tf', q: "**in front of** da *of* kuchsiz \"əv\" deb aytiladi.", a: true },
    { k: 'order', uz: 'Mushuk divan orqasida.', words: ['The', 'cat', 'is', 'behind', 'the', 'sofa'], extra: ['on'], why: "Ot + **is** + predlog + the + ot." },
    { k: 'order', uz: 'Bank maktab bilan kutubxona orasida.', words: ['The', 'bank', 'is', 'between', 'the', 'school', 'and', 'the', 'library'], extra: ['or'], why: "**between A and B**." },
    { k: 'translate', uz: 'Kitob karavot ostida.', a: ['The book is under the bed', "The book's under the bed", 'A book is under the bed'], why: "**The book is under the bed.** — *is* ni unutmang." },
    { k: 'translate', uz: 'Kalitlarim qayerda?', a: ['Where are my keys', "Where're my keys"], why: "*keys* — ko'plik → **Where are**." },
    { k: 'speak', say: 'My phone is on the table, next to the lamp.', uz: "Telefoningiz qayerdaligini ayting" },
  ],
  quiz: [
    { k: 'listen', say: 'The bank is opposite the park.', opts: ['The bank is opposite the park.', 'The bank is in front of the park.', 'The bank is behind the park.', 'The bank is near the park.'], a: 0 },
    { k: 'listen', say: 'There is a clock above the door.', opts: ['There is a clock on the door.', 'There is a clock behind the door.', 'There is a clock above the door.'], a: 2 },
    { k: 'choice', q: "*Where are my shoes?* — to'g'ri javob:", opts: ["It's under the bed.", "They're under the bed.", 'They under the bed.', "There're under the bed."], a: 1, why: "*shoes* — ko'plik → **They're**." },
    { k: 'fill', q: 'There is a carpet ___ the floor.', a: ['on'], why: "Pol sirtida → **on** the floor." },
    { k: 'fill', q: 'The car is in ___ of the house.', a: ['front'], why: "**in front of** — oldida." },
    { k: 'fill', q: 'The lamp is ___ the bed and the sofa.', a: ['between'] },
    { k: 'order', uz: 'Biz kasalxona yaqinida yashaymiz.', words: ['We', 'live', 'near', 'the', 'hospital'], extra: ['of'] },
    { k: 'translate', uz: 'Telefonim sumkamda.', a: ['My phone is in my bag', "My phone's in my bag", 'My phone is in the bag'] },
    { k: 'translate', uz: "Do'kon bankning ro'parasida.", a: ['The shop is opposite the bank', "The shop's opposite the bank", 'The store is opposite the bank'] },
    { k: 'choice', q: "\"orqasida\" inglizcha:", opts: ['behind', 'between', 'below', 'beside'], a: 0 },
  ],
  summary: [
    "Ingliz tilida predlog otdan **oldin**: *karavot ostida* → **under the bed**.",
    "**in** (ichida) · **on** (ustida, tegib) · **under** (ostida) · **above** (tepasida, tegmay).",
    "**next to** (yonida) · **near** (yaqinida) · **between A and B** (orasida).",
    "**behind** (orqasida) · **in front of** (oldida, *the* siz) · **opposite** (ro'parasida, *of* siz).",
    "Joy haqida gapda **to be** shart: *Where **are** my keys? — **They're** in the bag.*",
  ],
  homework: "Xonangizdagi 8 ta narsa qayerda turganini yozing (masalan: *My bag is under the table.*), har gapda boshqa predlog ishlating. Keyin ko'changizdagi 3 ta joyni tasvirlang: *The shop is opposite my house.*",
};

export default lesson;
