import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l8',
  title: 'always, usually, never…',
  titleUz: "Qanchalik tez-tez: always, usually, never…",
  goal: "Ishni qanchalik tez-tez qilishingizni aytasiz: *I always get up at seven. She is never late.* Chastota ravishlarining **gapdagi o'rnini** bilasiz, **How often…?** deb so'raysiz va *once a week, every day* bilan javob berasiz.",
  slides: [
    {
      title: '100% dan 0% gacha',
      blocks: [
        { t: 'p', md: "Present Simple odatlar haqida. Endi odat **qanchalik tez-tez** ekanini aytamiz. Buning uchun **chastota ravishlari** ishlatiladi:" },
        {
          t: 'table', head: ['Ravish', "O'zbekcha", 'Taxminan', 'Misol'], speak: [0, 3],
          rows: [
            ['always', 'doim, har doim', '100%', 'I always drink tea.'],
            ['usually', 'odatda', '90%', 'I usually get up at seven.'],
            ['often', "ko'pincha, tez-tez", '70%', 'We often play chess.'],
            ['sometimes', "ba'zan", '50%', 'She sometimes watches films.'],
            ['rarely', 'kamdan-kam', '10%', 'He rarely eats meat.'],
            ['never', 'hech qachon', '0%', 'They never drink coffee.'],
          ],
        },
        { t: 'tip', tone: 'good', md: "Yodlash usuli: bir qatorda **always → usually → often → sometimes → rarely → never** deb 3 marta ayting. Bu — \"doim\" dan \"hech qachon\" gacha zinapoya." },
        { t: 'check', ex: { k: 'choice', q: "\"Ba'zan\" inglizcha qanday?", opts: ['often', 'usually', 'sometimes', 'rarely'], a: 2 } },
      ],
    },
    {
      title: "O'rni: asosiy fe'ldan OLDIN",
      blocks: [
        { t: 'p', md: "Qoida 1: chastota ravishi **ega va asosiy fe'l orasida** turadi:\n**ega + always / never… + fe'l**" },
        { t: 'examples', items: [
          { en: 'I always get up at seven.', uz: 'Men doim yettida turaman.' },
          { en: 'She usually has lunch at one.', uz: 'U odatda birda tushlik qiladi.', note: "he/she bilan **-s** fe'lda qoladi: *usually ha**s***" },
          { en: 'We often go to the cinema.', uz: "Biz tez-tez kinoga boramiz." },
          { en: 'My father never drinks coffee.', uz: 'Otam hech qachon qahva ichmaydi.' },
        ] },
        { t: 'tip', tone: 'info', md: "O'zbekchada ham ravish odatda egadan keyin keladi: *Men **doim** yettida turaman.* Faqat esda tuting — inglizchada fe'l ravishdan **darhol keyin** keladi: *I always **get up** at seven.* Faqat **sometimes** va **usually** gap boshida ham kela oladi: *Sometimes I watch films.*" },
        { t: 'compare', good: { title: "To'g'ri", items: ['I always drink tea.', 'He often plays football.'] }, bad: { title: "Noto'g'ri", items: ['I drink always tea.', 'He plays often football.', 'I always tea drink.'] } },
        { t: 'check', ex: { k: 'order', uz: 'U (ayol) odatda yettida nonushta qiladi.', words: ['She', 'usually', 'has', 'breakfast', 'at', 'seven'], why: "Ega → **usually** → fe'l: *She usually has breakfast…*" } },
      ],
    },
    {
      title: "to be bilan: am / is / are dan KEYIN",
      blocks: [
        { t: 'p', md: "Qoida 2: gapda **am / is / are** bo'lsa, ravish undan **keyin** keladi:\n**ega + am / is / are + always / never… + sifat / joy**" },
        {
          t: 'table', head: ["Oddiy fe'l (oldin)", 'to be (keyin)'], speak: [0, 1],
          rows: [
            ['I always get up early.', "I'm always tired."],
            ['She never drinks coffee.', 'She is never late.'],
            ['They usually play chess.', 'They are usually at home.'],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm always busy.", 'He is often hungry.', 'We are never late.'] }, bad: { title: "Noto'g'ri", items: ['I always am busy.', 'He often is hungry.', 'We never are late.'] } },
        { t: 'tip', tone: 'warn', md: "Qisqacha: **fe'l** — ravish oldida turadi; **to be** — ravish orqasida turadi. *I **always** work* — *I am **always** busy.*" },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['She always is happy.', 'She is always happy.', 'Always she is happy.', 'She is happy always.'], a: 1, why: "**to be** dan keyin: *She **is always** happy.*" } },
      ],
    },
    {
      title: 'never — bitta inkor yetadi',
      blocks: [
        { t: 'p', md: "O'zbekchada ikki marta inkor bo'ladi: *hech **qachon** ich**ma**yman*. Inglizchada **never** o'zi inkor ma'nosini beradi — fe'l **tasdiq** shaklda qoladi." },
        { t: 'compare', good: { title: "To'g'ri", items: ['I never eat meat.', 'He never drinks coffee.'] }, bad: { title: "Noto'g'ri", items: ["I don't never eat meat.", "He doesn't never drink coffee.", 'He never drink coffee.'] } },
        { t: 'tip', tone: 'info', md: "**don't / doesn't** bilan esa boshqa ravishlar keladi: *I **don't usually** drink coffee* — Odatda qahva ichmayman. Savolda ravish egadan keyin: *Do you **often** play chess?*" },
        { t: 'check', ex: { k: 'tf', q: "\"She never eats meat\" — to'g'ri gap.", a: true, why: "**never** + tasdiq fe'l (he/she bilan **-s**): *She never eat**s** meat.*" } },
      ],
    },
    {
      title: 'How often…? — every day, once a week',
      blocks: [
        { t: 'p', md: "Savol: **How often do you…?** — Qanchalik tez-tez …? Javobda ravish yoki aniq ibora ishlatiladi. Iboralar odatda gap **oxirida** turadi." },
        {
          t: 'table', head: ['Ibora', "O'zbekcha"], speak: [0],
          rows: [
            ['every day', 'har kuni'],
            ['every week / every month', 'har hafta / har oy'],
            ['once a week', 'haftada bir marta'],
            ['twice a month', 'oyda ikki marta'],
            ['three times a year', 'yilda uch marta'],
          ],
        },
        { t: 'examples', items: [
          { en: 'How often do you play football?', uz: "Qanchalik tez-tez futbol o'ynaysiz?" },
          { en: 'I play football twice a week.', uz: "Haftada ikki marta futbol o'ynayman." },
          { en: 'How often does she go to the cinema?', uz: 'U qanchalik tez-tez kinoga boradi?' },
          { en: 'She goes to the cinema once a month.', uz: 'U oyda bir marta kinoga boradi.' },
        ] },
        { t: 'tip', tone: 'warn', md: "**once** = bir marta, **twice** = ikki marta. Uchdan boshlab — **son + times**: *three times, four times*. ❌ *one time a week* — kamdan-kam; ✅ *once a week*." },
        { t: 'check', ex: { k: 'fill', q: 'I go to the market ___ a week.', a: ['once'], uz: 'Haftada bir marta bozorga boraman.', why: "bir marta — **once**: *once a week*." } },
      ],
    },
    {
      title: 'Talaffuz va dialog',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'often', say: 'often', uz: "**\"O-fən\"** — *t* odatda aytilmaydi.", examples: ['often', 'I often read'] },
            { label: 'usually', say: 'usually', uz: "**\"YU:-jə-li\"** — o'rtadagi *s* \"j\" (jurnal dagi kabi yumshoq) bo'lib o'qiladi.", examples: ['usually', 'I usually get up at seven'] },
            { label: 'once', say: 'once', uz: "**\"wans\"** — *o* bilan yozilsa ham, boshida **w** tovushi!", examples: ['once', 'once a week'] },
            { label: 'twice', say: 'twice', uz: "**\"tways\"**", examples: ['twice', 'twice a month'] },
            { label: 'rarely', say: 'rarely', uz: "**\"REƏ-li\"** — r faqat boshida aytiladi.", examples: ['rarely', 'He rarely eats meat'] },
          ],
        },
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: 'How often do you go to the gym, Mark?', uz: "Mark, qanchalik tez-tez sport zaliga borasan?" },
          { who: 'Mark', en: 'Three times a week. I usually go on Monday, Wednesday and Friday.', uz: 'Haftada uch marta. Odatda dushanba, chorshanba va juma kunlari boraman.' },
          { who: 'Dilnoza', en: "Wow! I'm always busy. I rarely do sport.", uz: "Voy! Men doim bandman. Kamdan-kam sport bilan shug'ullanaman." },
          { who: 'Mark', en: 'Do you eat fast food?', uz: "Fast-fud yeysanmi?" },
          { who: 'Dilnoza', en: 'No, never! I always eat at home.', uz: "Yo'q, hech qachon! Doim uyda ovqatlanaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Mark sport zaliga qanchalik tez-tez boradi?", opts: ['once a week', 'twice a week', 'three times a week', 'every day'], a: 2 } },
      ],
    },
  ],
  words: [
    { en: 'always', uz: 'doim, har doim', ipa: 'ˈɔːl.weɪz', pos: 'adverb', ex: 'I always drink tea in the morning.', exUz: 'Ertalab doim choy ichaman.' },
    { en: 'usually', uz: 'odatda', ipa: 'ˈjuː.ʒu.ə.li', pos: 'adverb', ex: 'We usually have dinner at seven.', exUz: 'Biz odatda yettida kechki ovqat qilamiz.' },
    { en: 'often', uz: "ko'pincha, tez-tez", ipa: 'ˈɒf.ən', pos: 'adverb', ex: 'She often plays the guitar.', exUz: 'U tez-tez gitara chaladi.' },
    { en: 'sometimes', uz: "ba'zan", ipa: 'ˈsʌm.taɪmz', pos: 'adverb', ex: 'He is sometimes late.', exUz: 'U ba\'zan kechikadi.' },
    { en: 'rarely', uz: 'kamdan-kam', ipa: 'ˈreə.li', pos: 'adverb', ex: 'They rarely watch TV.', exUz: "Ular kamdan-kam televizor ko'rishadi." },
    { en: 'never', uz: 'hech qachon', ipa: 'ˈnev.ə', pos: 'adverb', ex: 'My mother never drinks coffee.', exUz: 'Onam hech qachon qahva ichmaydi.' },
    { en: 'every day', uz: 'har kuni', ipa: 'ˈev.ri deɪ', pos: 'phrase', ex: 'I learn new words every day.', exUz: "Har kuni yangi so'zlar o'rganaman." },
    { en: 'once', uz: 'bir marta', ipa: 'wʌns', pos: 'adverb', ex: 'I go to the market once a week.', exUz: 'Haftada bir marta bozorga boraman.' },
    { en: 'twice', uz: 'ikki marta', ipa: 'twaɪs', pos: 'adverb', ex: 'She goes to the cinema twice a month.', exUz: 'U oyda ikki marta kinoga boradi.' },
    { en: 'how often', uz: 'qanchalik tez-tez', ipa: 'haʊ ˈɒf.ən', pos: 'phrase', ex: 'How often do you play chess?', exUz: "Qanchalik tez-tez shaxmat o'ynaysiz?" },
  ],
  practice: [
    { k: 'match', pairs: [['always', 'doim'], ['usually', 'odatda'], ['sometimes', "ba'zan"], ['rarely', 'kamdan-kam'], ['never', 'hech qachon']] },
    { k: 'listen', say: 'once a week', opts: ['once a week', 'twice a week', 'one a week', 'once a month'], a: 0, why: "**once** — \"wans\"." },
    { k: 'choice', q: "Eng tez-tezdan eng kamga to'g'ri tartib qaysi?", opts: ['always, often, usually, never', 'usually, always, sometimes, often', 'always, usually, often, sometimes', 'never, rarely, always, often'], a: 2, why: "100% → **always, usually, often, sometimes**, rarely, never." },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['I drink often tea.', 'I often drink tea.', 'Often I tea drink.', 'I drink tea often always.'], a: 1, why: "Ravish **fe'ldan oldin**: *I often drink tea.*" },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['He never is late.', 'He is late never.', "He isn't never late.", 'He is never late.'], a: 3, why: "**to be** dan keyin: *He is never late.*" },
    { k: 'fill', q: 'She ___ gets up at six. (100%)', a: ['always'], uz: 'U doim oltida turadi.' },
    { k: 'fill', q: 'They ___ eat meat. (0%)', a: ['never'], uz: "Ular hech qachon go'sht yemaydi.", why: "0% — **never** (fe'l tasdiqda: *eat*)." },
    { k: 'fill', q: 'I play football ___ a week. (2)', a: ['twice', 'two times'], uz: "Haftada ikki marta futbol o'ynayman.", why: "ikki marta — **twice**." },
    { k: 'tf', q: "\"I don't never drink coffee\" — to'g'ri gap.", a: false, why: "Bitta inkor yetadi: *I **never** drink coffee.*" },
    { k: 'order', uz: 'Men odatda yettida turaman.', words: ['I', 'usually', 'get', 'up', 'at', 'seven'], why: "Ega → **usually** → fe'l." },
    { k: 'order', uz: 'U (erkak) ba\'zan charchagan bo\'ladi.', words: ['He', 'is', 'sometimes', 'tired'], extra: ['does'], alt: [['Sometimes', 'he', 'is', 'tired'], ['He', 'is', 'tired', 'sometimes']], why: "**to be** dan keyin: *He is sometimes tired.*" },
    { k: 'order', uz: 'Qanchalik tez-tez kinoga borasiz?', words: ['How', 'often', 'do', 'you', 'go', 'to', 'the', 'cinema'], extra: ['are'], why: "**How often + do + you + fe'l?**" },
    { k: 'translate', uz: 'Men har kuni ingliz tilini o\'rganaman.', a: ['I learn English every day', 'I study English every day', 'Every day I learn English', 'Every day I study English'], why: "**every day** — gap oxirida: *I learn English every day.*" },
    { k: 'translate', uz: 'Onam (my mother) hech qachon kechikmaydi.', a: ['My mother is never late', "My mother's never late", 'My mum is never late', 'My mom is never late'], why: "*late* — sifat, demak **is never late**." },
    { k: 'speak', say: 'I always get up at seven, but I never have breakfast.', uz: 'always va never ni urg\'u bilan ayting' },
  ],
  quiz: [
    { k: 'listen', say: 'She rarely watches TV', opts: ['She really watches TV', 'She rarely watches TV', 'She usually watches TV', 'She never watches TV'], a: 1 },
    { k: 'listen', say: 'How often do you go to the park?', opts: ['How old are you in the park?', 'How much do you go to the park?', 'How often do you go to the park?', 'How often are you in the park?'], a: 2 },
    { k: 'fill', q: 'We ___ have dinner at eight. (90%)', a: ['usually'] },
    { k: 'fill', q: 'My brother is ___ hungry. (100%)', a: ['always'], uz: 'Akam doim och.' },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['They are often busy.', 'They often are busy.', "They don't never busy.", 'Often they busy.'], a: 0, why: "**to be** + ravish: *They are often busy.*" },
    { k: 'choice', q: "\"Yilda uch marta\" inglizcha:", opts: ['three once a year', 'three times a year', 'thrice in year', 'three time a year'], a: 1 },
    { k: 'order', uz: 'Otam hech qachon qahva ichmaydi.', words: ['My', 'father', 'never', 'drinks', 'coffee'], extra: ["doesn't", 'drink'] },
    { k: 'translate', uz: 'U (ayol) haftada bir marta futbol o\'ynaydi.', a: ['She plays football once a week'], why: "*she* → **plays**; bir marta — **once a week**." },
    { k: 'translate', uz: "Qanchalik tez-tez shaxmat o'ynaysiz?", a: ['How often do you play chess'] },
    { k: 'match', pairs: [['once', 'bir marta'], ['twice', 'ikki marta'], ['every day', 'har kuni'], ['how often', 'qanchalik tez-tez'], ['often', "ko'pincha"]] },
  ],
  summary: [
    "Chastota: **always** (100%) → **usually** → **often** → **sometimes** → **rarely** → **never** (0%).",
    "Oddiy fe'l bilan ravish **fe'ldan oldin**: *I **always** get up at seven.*",
    "**to be** bilan ravish **am / is / are dan keyin**: *She is **never** late.*",
    "**never** — o'zi inkor: *I never eat meat*, \"I don't never\" emas.",
    "**How often…?** — *every day, once a week, twice a month, three times a year* (gap oxirida).",
  ],
  homework: "O'zingiz haqingizda 6 ta gap yozing — har bir ravish (always … never) bilan bittadan. Kamida 2 tasi **to be** bilan bo'lsin (*I'm always busy on Monday.*). Keyin do'stingizga 3 ta **How often…?** savolini bering.",
};

export default lesson;
