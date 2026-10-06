import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l7',
  title: 'have got & family',
  titleUz: 'have got va oila',
  goal: "**have got / has got** bilan nimangiz va kimingiz borligini aytasiz, inkor va savol tuzasiz hamda oila a'zolarini inglizcha nomlab, oilangiz haqida gapira olasiz.",
  slides: [
    {
      title: '"Mening … bor" — have got',
      blocks: [
        { t: 'p', md: "O'zbekchada *Mening akam **bor**.* deymiz — \"bor\" so'zi bilan. Ingliz tilida esa egalik **fe'l** bilan aytiladi: **I have got a brother.** (so'zma-so'z: \"Men akaga egaman\")." },
        { t: 'p', md: "3-bo'limda **have** fe'lini ko'rgandik (*I have breakfast at 8*). Britaniya ingliz tilida egalik — oila, narsalar, kasallik, tashqi ko'rinish — uchun ko'pincha **have got** ishlatiladi. Ma'nosi bir xil:\n• *I **have** a sister.* = *I **have got** a sister.* — Opam bor." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I've got a brother.", 'She has got two sons.'] },
          bad: { title: "Noto'g'ri", items: ['My brother there is.', 'I am a brother.', 'She have got two sons.'] },
        },
        { t: 'tip', tone: 'info', md: "Ikki bo'lakni yodda tuting: **have / has** — asosiy yordamchi, **got** — doim o'zgarmaydi. Savol va inkorni *have/has* bilan tuzamiz, *do* kerak emas." },
      ],
    },
    {
      title: 'Ijobiy shakl: have got / has got',
      blocks: [
        {
          t: 'table', head: ['Ega', "To'liq", 'Qisqa'], speak: [1, 2],
          rows: [
            ['I', 'I have got a sister.', "I've got a sister."],
            ['you', 'You have got a car.', "You've got a car."],
            ['he / she / it', 'He has got a son.', "He's got a son."],
            ['we', 'We have got a dog.', "We've got a dog."],
            ['they', 'They have got two daughters.', "They've got two daughters."],
          ],
        },
        { t: 'p', md: "Present Simple'dagi kabi **he / she / it** uchun boshqa shakl: **has got**." },
        { t: 'tip', tone: 'warn', md: "**'s** ikki xil bo'lishi mumkin:\n• *She**'s** a teacher.* = she **is**\n• *She**'s got** a son.* = she **has** got\nKeyin **got** kelsa — demak *has*." },
        {
          t: 'sounds', items: [
            { label: "I've got", say: "I've got a brother.", uz: "**\"ayv got\"** — *I've* dagi **v** aniq eshitilsin (pastki lab yuqori tishlarga tegadi). *got* — qisqa \"o\".", examples: ["I've got", "We've got", "They've got"] },
            { label: "he's got", say: "He's got a car.", uz: "**\"hi:z got\"** — *'s* bu yerda **z** bo'lib aytiladi.", examples: ["He's got", "She's got"] },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'My uncle ___ got three children.', a: ['has'], uz: "Amakimning uchta farzandi bor.", why: "*my uncle* = he → **has** got." } },
      ],
    },
    {
      title: "Inkor: haven't got / hasn't got",
      blocks: [
        {
          t: 'table', head: ['Ega', 'Inkor', 'Misol'], speak: [2],
          rows: [
            ['I / you / we / they', "haven't got", "I haven't got a sister."],
            ['he / she / it', "hasn't got", "She hasn't got any brothers."],
          ],
        },
        { t: 'p', md: "Ko'plikdagi otlar bilan inkorda **any** ishlatiladi (2-dars): *We haven't got **any** children.* — Farzandimiz yo'q." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I haven't got a car.", "He hasn't got any sisters."] },
          bad: { title: "Noto'g'ri", items: ["I don't have got a car.", "He haven't got any sisters.", "I haven't a car got."] },
        },
        { t: 'check', ex: { k: 'choice', q: "\"Mening akam yo'q.\"", opts: ["I don't got a brother.", "I haven't got a brother.", "I hasn't got a brother.", "I not have got a brother."], a: 1, why: "I → **haven't got**." } },
      ],
    },
    {
      title: 'Savol: Have you got…? Has she got…?',
      blocks: [
        { t: 'p', md: "Savolda **have / has** egadan oldinga chiqadi, **got** joyida qoladi:\n**Have/Has + ega + got + …?**" },
        {
          t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [0, 1, 2],
          rows: [
            ['Have you got a brother?', 'Yes, I have.', "No, I haven't."],
            ['Has she got a son?', 'Yes, she has.', "No, she hasn't."],
            ['Have they got any children?', 'Yes, they have.', "No, they haven't."],
          ],
        },
        { t: 'p', md: "Wh-savol: ***How many** brothers **have you got**?* — *I've got two.*" },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['Have you got a sister? — Yes, I have.', 'Has your father got a car?'] },
          bad: { title: "Noto'g'ri", items: ['Do you have got a sister? — Yes, I have got.', 'Have your father got a car?'] },
        },
        { t: 'tip', tone: 'warn', md: "Qisqa javobda **got** aytilmaydi: *Yes, I have.* ✅ — *Yes, I have got.* ❌" },
        { t: 'check', ex: { k: 'order', uz: 'Sizning nechta opangiz bor?', words: ['How', 'many', 'sisters', 'have', 'you', 'got'], extra: ['do'], why: "**How many + ko'plik + have you got?**" } },
      ],
    },
    {
      title: "Oila a'zolari",
      blocks: [
        {
          t: 'table', head: ['Erkak', 'Ayol', 'Ikkalasi'], speak: [0, 1, 2],
          rows: [
            ['father (ota)', 'mother (ona)', 'parents (ota-ona)'],
            ['son (o\'g\'il)', 'daughter (qiz)', 'children (farzandlar)'],
            ['brother (aka, uka)', 'sister (opa, singil)', '—'],
            ['grandfather (bobo)', 'grandmother (buvi)', 'grandparents (bobo-buvi)'],
            ['uncle (amaki, tog\'a)', 'aunt (amma, xola)', '—'],
          ],
        },
        { t: 'tip', tone: 'info', md: "Ingliz tilida **aka** va **uka** — ikkalasi ham **brother**; **opa** va **singil** — **sister**. Aniqlash kerak bo'lsa: *an **older** brother* (aka), *a **younger** sister* (singil). **amaki** ham, **tog'a** ham — **uncle**." },
        {
          t: 'sounds', items: [
            { label: 'th = ð', say: 'mother father brother', uz: "**mother, father, brother** dagi *th* — ovozli **ð**: til uchi tishlar orasida, \"z\" ga o'xshab titraydi. \"z\" yoki \"d\" deb aytmang!", examples: ['mother', 'father', 'brother'] },
            { label: 'o = ʌ', say: 'mother brother son', uz: "**mother, brother, son** dagi *o* — qisqa **\"a\"** tovushi: \"maðə\", \"braðə\", \"san\".", examples: ['mother', 'brother', 'son'] },
            { label: 'daughter', say: 'daughter', uz: "**\"do:tə\"** — *gh* umuman o'qilmaydi.", examples: ['daughter', 'my daughter'] },
          ],
        },
        { t: 'p', md: "Egalik **'s** (2-bo'lim) oilani tasvirlashda juda qulay: *my **father's** brother* = amakim → **my uncle**. *my **mother's** mother* = buvim → **my grandmother**." },
        { t: 'check', ex: { k: 'choice', q: "*My mother's father* — bu kim?", opts: ['my uncle', 'my grandfather', 'my brother', 'my son'], a: 1, why: "Onamning otasi — **grandfather** (bobo)." } },
      ],
    },
    {
      title: 'Oilam haqida: dialog',
      blocks: [
        {
          t: 'dialog', lines: [
            { who: 'Emma', en: 'Have you got any brothers or sisters?', uz: 'Aka-uka yoki opa-singillaring bormi?' },
            { who: 'Rustam', en: "Yes, I have. I've got two sisters and a brother.", uz: 'Ha, bor. Ikkita opam va bitta akam bor.' },
            { who: 'Emma', en: 'Has your brother got any children?', uz: 'Akangning farzandlari bormi?' },
            { who: 'Rustam', en: "Yes, he has. He's got a son and a daughter.", uz: "Ha, bor. Bir o'g'li va bir qizi bor." },
            { who: 'Emma', en: 'And your grandparents? Where do they live?', uz: "Bobo-buving-chi? Ular qayerda yashaydi?" },
            { who: 'Rustam', en: "My grandmother lives with my parents. My grandfather lives in Khiva. He's got a big house there.", uz: "Buvim ota-onam bilan yashaydi. Bobom Xivada yashaydi. U yerda uning katta uyi bor." },
          ],
        },
        { t: 'tip', tone: 'good', md: "O'zingiz haqingizda ayting: *I've got … brothers and … sisters. My father has got … . I haven't got … .*" },
        { t: 'check', ex: { k: 'fill', q: "Has your sister got a car? — No, she ___.", a: ["hasn't", 'has not'], why: "Qisqa inkor javob, *got* siz: **No, she hasn't.**" } },
      ],
    },
  ],
  words: [
    { en: 'mother', uz: 'ona', ipa: 'ˈmʌð.ə', pos: 'noun', ex: 'My mother is a doctor.', exUz: 'Onam shifokor.' },
    { en: 'father', uz: 'ota', ipa: 'ˈfɑː.ðə', pos: 'noun', ex: 'My father has got a car.', exUz: 'Otamning mashinasi bor.' },
    { en: 'parents', uz: 'ota-ona', ipa: 'ˈpeə.rənts', pos: 'noun', ex: 'My parents live in Bukhara.', exUz: 'Ota-onam Buxoroda yashaydi.' },
    { en: 'brother', uz: 'aka, uka', ipa: 'ˈbrʌð.ə', pos: 'noun', ex: "I've got an older brother.", exUz: 'Mening akam bor.' },
    { en: 'sister', uz: 'opa, singil', ipa: 'ˈsɪs.tə', pos: 'noun', ex: "She hasn't got a sister.", exUz: "Uning opa-singlisi yo'q." },
    { en: 'son', uz: "o'g'il", ipa: 'sʌn', pos: 'noun', ex: 'They have got two sons.', exUz: "Ularning ikki o'g'li bor." },
    { en: 'daughter', uz: 'qiz (farzand)', ipa: 'ˈdɔː.tə', pos: 'noun', ex: 'Has he got a daughter?', exUz: 'Uning qizi bormi?' },
    { en: 'grandmother', uz: 'buvi', ipa: 'ˈɡræn.mʌð.ə', pos: 'noun', ex: 'My grandmother cooks very well.', exUz: 'Buvim juda yaxshi ovqat pishiradi.' },
    { en: 'grandfather', uz: 'bobo', ipa: 'ˈɡræn.fɑː.ðə', pos: 'noun', ex: 'My grandfather is eighty.', exUz: 'Bobom sakson yoshda.' },
    { en: 'uncle', uz: "amaki, tog'a", ipa: 'ˈʌŋ.kəl', pos: 'noun', ex: 'My uncle has got a big house.', exUz: "Amakimning katta uyi bor." },
  ],
  practice: [
    { k: 'match', pairs: [['mother', 'ona'], ['father', 'ota'], ['parents', 'ota-ona'], ['son', "o'g'il"], ['daughter', 'qiz (farzand)']] },
    { k: 'match', pairs: [['brother', 'aka, uka'], ['sister', 'opa, singil'], ['grandmother', 'buvi'], ['grandfather', 'bobo'], ['uncle', "amaki, tog'a"]] },
    { k: 'listen', say: 'daughter', opts: ['doctor', 'daughter', 'water', 'father'], a: 1 },
    { k: 'listen', say: "She's got two brothers.", opts: ["She's got two brothers.", "She's two brothers.", "She hasn't got two brothers.", "He's got two brothers."], a: 0 },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['He have got a sister.', 'He has got a sister.', 'He has gots a sister.', 'He got has a sister.'], a: 1, why: "he → **has got**." },
    { k: 'choice', q: "*Have you got a car?* — qisqa ijobiy javob:", opts: ['Yes, I have got.', 'Yes, I do.', 'Yes, I have.', 'Yes, I got.'], a: 2, why: "**Yes, I have.** — *got* siz." },
    { k: 'fill', q: 'We ___ got any children.', a: ["haven't", 'have not'], uz: "Bizning farzandimiz yo'q.", why: "we, inkor → **haven't got**." },
    { k: 'fill', q: '___ your grandfather got a dog?', a: ['has'], uz: 'Bobongizning iti bormi?', why: "*your grandfather* = he → **Has**." },
    { k: 'fill', q: "My father's brother is my ___.", a: ['uncle'], why: "Otamning akasi/ukasi → **uncle**." },
    { k: 'fill', q: "My mother and father are my ___.", a: ['parents'], why: "Ota-ona → **parents**." },
    { k: 'tf', q: "*She's got a son.* gapida **'s** = *is*.", a: false, why: "Keyin **got** keladi → **'s = has**." },
    { k: 'tf', q: "**daughter** so'zida *gh* o'qilmaydi.", a: true },
    { k: 'order', uz: 'Sizning akangiz bormi?', words: ['Have', 'you', 'got', 'a', 'brother'], extra: ['do'], why: "**Have + ega + got…?**" },
    { k: 'order', uz: "Uning qizi yo'q (erkak haqida).", words: ['He', "hasn't", 'got', 'a', 'daughter'], extra: ["haven't"] },
    { k: 'translate', uz: 'Mening ikkita singlim bor.', a: ["I've got two sisters", 'I have got two sisters', 'I have two sisters', "I've got two younger sisters", 'I have got two younger sisters', 'I have two younger sisters'] },
    { k: 'translate', uz: "Ularning o'g'li bormi?", a: ['Have they got a son', 'Do they have a son', 'Have they got any sons', 'Do they have any sons'] },
    { k: 'speak', say: "I've got a brother and two sisters.", uz: "Oilangiz haqida ayting" },
  ],
  quiz: [
    { k: 'listen', say: "Have you got any brothers or sisters?", opts: ['Have you got any brothers or sisters?', 'Has he got any brothers or sisters?', 'Have you got any sons or daughters?'], a: 0 },
    { k: 'listen', say: "My uncle hasn't got a car.", opts: ['My uncle has got a car.', "My uncle hasn't got a car.", "My uncle hasn't got a cat.", "My father hasn't got a car."], a: 1 },
    { k: 'choice', q: "Qaysi gap noto'g'ri?", opts: ['Has she got a son?', "They've got a big family.", 'Do you have got a sister?', "I haven't got a car."], a: 2, why: "*have got* bilan *do* ishlatilmaydi: **Have you got a sister?**" },
    { k: 'choice', q: "*My father's mother* — bu kim?", opts: ['my grandmother', 'my sister', 'my mother', 'my daughter'], a: 0 },
    { k: 'fill', q: 'My parents ___ got a house in Samarkand.', a: ['have'], why: "*my parents* = they → **have** got." },
    { k: 'fill', q: 'Has your sister got a daughter? — Yes, she ___.', a: ['has'] },
    { k: 'fill', q: 'How many ___ have you got? — Two. A son and a daughter.', a: ['children', 'kids'], why: "o'g'il va qiz → **children**." },
    { k: 'order', uz: 'Bobomning katta uyi bor.', words: ['My', 'grandfather', 'has', 'got', 'a', 'big', 'house'], extra: ['have'] },
    { k: 'translate', uz: "Mening amakim yo'q.", a: ["I haven't got an uncle", 'I have not got an uncle', "I don't have an uncle", 'I do not have an uncle', "I haven't got any uncles", "I don't have any uncles"] },
    { k: 'translate', uz: 'Opangizning farzandlari bormi?', a: ['Has your sister got any children', 'Has your sister got children', 'Does your sister have any children', 'Does your sister have children'] },
  ],
  summary: [
    "Egalik: **I/you/we/they have got** ('ve got), **he/she/it has got** ('s got).",
    "Inkor: **haven't got / hasn't got** (ko'plikda + **any**); *do* kerak emas.",
    "Savol: **Have you got…? Has she got…?** — *Yes, I have. / No, she hasn't.* (javobda *got* yo'q).",
    "Oila: mother, father, **parents**, brother (aka/uka), sister (opa/singil), son, daughter, grandmother, grandfather, uncle.",
    "*th* (mother, brother) — ovozli **ð**; **daughter** da *gh* o'qilmaydi.",
  ],
  homework: "Oilangiz haqida 8 ta gap yozing: kimingiz bor, kimingiz yo'q, ularning nimasi bor (*My uncle has got a big house.*). Keyin do'stingizga 4 ta savol tayyorlang: *Have you got…? How many … have you got?*",
};

export default lesson;
