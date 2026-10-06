import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l5',
  title: 'Do / Does questions',
  titleUz: 'Savollar: Do / Does',
  goal: "**Do / Does** bilan savol berasiz (*Do you like music? Does she play chess?*) va qisqa javob qaytarasiz (*Yes, I do. / No, she doesn't.*). Sevimli mashg'ulotlar haqida suhbatlasha olasiz.",
  slides: [
    {
      title: 'Savol: "-mi" ning inglizcha o\'rni',
      blocks: [
        { t: 'p', md: "O'zbekchada savol **-mi** qo'shimchasi bilan yasaladi: *Siz musiqani yoqtirasiz**mi**?* Inglizchada esa gap **boshiga** yordamchi so'z qo'yiladi: **Do** yoki **Does**." },
        { t: 'examples', items: [
          { en: 'You like music.', uz: 'Siz musiqani yoqtirasiz.' },
          { en: 'Do you like music?', uz: 'Siz musiqani yoqtirasizmi?', note: "**Do** — xuddi \"-mi\" kabi, faqat gap boshida" },
          { en: 'Does she play chess?', uz: "U shaxmat o'ynaydimi?" },
        ] },
        { t: 'tip', tone: 'info', md: "**to be** savollarini eslang: *Are you a student? Is he at home?* — u yerda **am / is / are** oldinga chiqardi. Oddiy fe'llarda esa oldinga **do / does** chiqadi: *Do you **work**?*" },
        { t: 'compare', good: { title: "To'g'ri", items: ['Do you play football?', 'Are you a student?'] }, bad: { title: "Noto'g'ri", items: ['Are you play football?', 'You play football?'] } },
      ],
    },
    {
      title: 'Shakl: Do / Does + ega + fe\'l?',
      blocks: [
        {
          t: 'table', head: ['Yordamchi', 'Ega', "Fe'l", 'Davomi'], speak: [],
          rows: [
            ['Do', 'I / you / we / they', 'play', 'chess?'],
            ['Does', 'he / she / it', 'play', 'chess?'],
            ['Do', 'your friends', 'like', 'music?'],
            ['Does', 'your brother', 'watch', 'films?'],
          ],
        },
        { t: 'p', md: "Xuddi inkordagi kabi: **-s** fe'ldan **Does** ga o'tadi. Fe'l **lug'at shaklida** qoladi." },
        { t: 'compare', good: { title: "To'g'ri", items: ['Does she like films?', 'Does he have a guitar?', 'Does Ali go to the cinema?'] }, bad: { title: "Noto'g'ri", items: ['Does she likes films?', 'Does he has a guitar?', 'Do Ali go to the cinema?'] } },
        { t: 'check', ex: { k: 'fill', q: '___ your sister play the guitar?', a: ['Does', 'does'], uz: "Singlingiz gitara chaladimi?", why: "*your sister* = she → **Does**." } },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri savolni tanlang:", opts: ['Does he plays chess?', 'Does he play chess?', 'Do he play chess?', 'Is he play chess?'], a: 1, why: "**Does** + he + **play** (s'siz)." } },
      ],
    },
    {
      title: 'Qisqa javoblar: Yes, I do. / No, I don\'t.',
      blocks: [
        { t: 'p', md: "Inglizlar odatda savolga faqat \"Yes\" yoki \"No\" deb qo'ymaydi. Ular **qisqa javob** beradi — savoldagi yordamchini takrorlaydi:" },
        {
          t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [0, 1, 2],
          rows: [
            ['Do you like music?', 'Yes, I do.', "No, I don't."],
            ['Do they play football?', 'Yes, they do.', "No, they don't."],
            ['Does she like parties?', 'Yes, she does.', "No, she doesn't."],
            ['Does it work?', 'Yes, it does.', "No, it doesn't."],
          ],
        },
        { t: 'compare', good: { title: "To'g'ri", items: ['Yes, I do.', "No, she doesn't."] }, bad: { title: "Noto'g'ri", items: ['Yes, I like.', 'Yes, I do like.', "No, she don't."] } },
        { t: 'tip', tone: 'warn', md: "Qisqa javobda fe'l **takrorlanmaydi**: *Do you like chess?* — ✅ *Yes, I do.* ❌ *Yes, I like.* Savol **you** bilan bo'lsa, javob **I** bilan: *Do **you**…? — Yes, **I** do.*" },
        { t: 'check', ex: { k: 'fill', q: "Does your father watch films? — No, he ___.", a: ["doesn't", 'does not'], why: "Savol **Does** bilan → javob **he doesn't**." } },
      ],
    },
    {
      title: 'Talaffuz: ohang va qisqargan "do you"',
      blocks: [
        { t: 'p', md: "Ha/yo'q savollarida ovoz oxirida **ko'tariladi** ↗. Bu — tinglovchiga \"bu savol\" degan belgi." },
        {
          t: 'sounds', items: [
            { label: 'Do you…? ↗', say: 'Do you like music?', uz: "Tez nutqda **Do you** — \"djə\" yoki \"du yə\" bo'lib eshitiladi. Oxiridagi *music* ↗ ko'tariladi.", examples: ['Do you like music?', 'Do you play chess?'] },
            { label: 'Does he…? ↗', say: 'Does he play football?', uz: "**Does** — \"dəz\", qisqa va kuchsiz. Urg'u asosiy so'zga tushadi: *does he **PLAY FOOT**ball?*", examples: ['Does he play football?', 'Does she like sport?'] },
            { label: 'Yes, I do. ↘', say: 'Yes, I do.', uz: "Javobda ovoz **pasayadi** ↘, **do** urg'uli va to'liq aytiladi: \"du:\".", examples: ['Yes, I do.', "No, I don't."] },
          ],
        },
        { t: 'check', ex: { k: 'listen', say: 'Does she like music?', opts: ['She likes music.', 'Do she like music?', 'Does she like music?', "She doesn't like music."], a: 2, why: "Boshida **Does** va oxiri ko'tarilgan — bu savol." } },
      ],
    },
    {
      title: "Sevimli mashg'ulotlar",
      blocks: [
        { t: 'p', md: "**hobby** — sevimli mashg'ulot, xobbi. Mashg'ulotlar ko'pincha **ma'lum fe'llar** bilan birga keladi — ularni juftlikda yodlang:" },
        {
          t: 'table', head: ['Ibora', "O'zbekcha"], speak: [0],
          rows: [
            ['play football', "futbol o'ynamoq"],
            ['play chess', "shaxmat o'ynamoq"],
            ['play games', "o'yin o'ynamoq"],
            ['play the guitar', 'gitara chalmoq'],
            ['listen to music', 'musiqa tinglamoq'],
            ['watch films', "film ko'rmoq"],
            ['go to the cinema', 'kinoga bormoq'],
            ['go to parties', 'bazmlarga bormoq'],
            ['do sport', "sport bilan shug'ullanmoq"],
          ],
        },
        { t: 'tip', tone: 'warn', md: "• Musiqa asbobi oldida **the**: *play **the** guitar*. Sport va o'yinlarda **the yo'q**: *play football, play chess*.\n• Musiqa — **listen to**: *I listen **to** music* (\"listen music\" emas).\n• **cinema** — \"SI-nə-mə\", **guitar** — \"gi-TA:\" (urg'u oxirida)." },
        { t: 'check', ex: { k: 'choice', q: "\"U gitara chaladimi?\"", opts: ['Does he play guitar the?', 'Does he play the guitar?', 'Does he plays the guitar?', 'Is he play the guitar?'], a: 1, why: "**Does** + he + **play the guitar**." } },
      ],
    },
    {
      title: 'Dialog: xobbilar haqida',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sam', en: 'Do you like sport, Jasur?', uz: 'Sportni yoqtirasanmi, Jasur?' },
          { who: 'Jasur', en: 'Yes, I do. I play football with my friends.', uz: "Ha. Do'stlarim bilan futbol o'ynayman." },
          { who: 'Sam', en: 'Do you play chess?', uz: "Shaxmat o'ynaysanmi?" },
          { who: 'Jasur', en: "No, I don't. But my sister plays chess very well.", uz: "Yo'q. Lekin singlim shaxmatni juda yaxshi o'ynaydi." },
          { who: 'Sam', en: 'Does she like music too?', uz: 'U musiqani ham yoqtiradimi?' },
          { who: 'Jasur', en: 'Yes, she does. She has a guitar. What is your hobby?', uz: "Ha. Uning gitarasi bor. Sening xobbing nima?" },
          { who: 'Sam', en: 'Films! I go to the cinema every week.', uz: "Filmlar! Har hafta kinoga boraman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Dialogga ko'ra, Jasur shaxmat o'ynaydi.", a: false, why: "*Do you play chess? — **No, I don't.*** Shaxmatni uning singlisi o'ynaydi." } },
      ],
    },
  ],
  words: [
    { en: 'hobby', uz: "sevimli mashg'ulot, xobbi", ipa: 'ˈhɒb.i', pos: 'noun', ex: 'My hobby is chess.', exUz: "Mening xobbim — shaxmat." },
    { en: 'sport', uz: 'sport', ipa: 'spɔːt', pos: 'noun', ex: 'Do you like sport?', exUz: 'Sportni yoqtirasizmi?' },
    { en: 'football', uz: 'futbol', ipa: 'ˈfʊt.bɔːl', pos: 'noun', ex: 'They play football in the park.', exUz: "Ular parkda futbol o'ynashadi." },
    { en: 'chess', uz: 'shaxmat', ipa: 'tʃes', pos: 'noun', ex: 'Does your father play chess?', exUz: "Otangiz shaxmat o'ynaydimi?" },
    { en: 'music', uz: 'musiqa', ipa: 'ˈmjuː.zɪk', pos: 'noun', ex: 'I listen to music.', exUz: 'Men musiqa tinglayman.' },
    { en: 'guitar', uz: 'gitara', ipa: 'ɡɪˈtɑː', pos: 'noun', ex: 'She plays the guitar.', exUz: 'U gitara chaladi.' },
    { en: 'game', uz: "o'yin", ipa: 'ɡeɪm', pos: 'noun', ex: 'Do you play computer games?', exUz: "Kompyuter o'yinlarini o'ynaysizmi?" },
    { en: 'film', uz: 'film, kino', ipa: 'fɪlm', pos: 'noun', ex: 'We watch films at home.', exUz: "Biz uyda film ko'ramiz." },
    { en: 'cinema', uz: 'kinoteatr', ipa: 'ˈsɪn.ə.mə', pos: 'noun', ex: 'Does he go to the cinema?', exUz: 'U kinoga boradimi?' },
    { en: 'party', uz: 'bazm, ziyofat', ipa: 'ˈpɑː.ti', pos: 'noun', ex: "I don't like parties.", exUz: 'Men bazmlarni yoqtirmayman.' },
  ],
  practice: [
    { k: 'match', pairs: [['chess', 'shaxmat'], ['guitar', 'gitara'], ['cinema', 'kinoteatr'], ['party', 'bazm'], ['hobby', 'xobbi']] },
    { k: 'fill', q: '___ you like music?', a: ['Do', 'do'], uz: 'Musiqani yoqtirasizmi?', why: "**you** → **Do**." },
    { k: 'fill', q: '___ he play football?', a: ['Does', 'does'], uz: "U futbol o'ynaydimi?", why: "**he** → **Does**." },
    { k: 'choice', q: "To'g'ri savolni tanlang:", opts: ['Do she watch films?', 'Does she watches films?', 'Does she watch films?', 'Is she watch films?'], a: 2, why: "**Does** + she + **watch** (s'siz)." },
    { k: 'listen', say: 'Do they go to the cinema?', opts: ['They go to the cinema.', 'Does they go to the cinema?', "They don't go to the cinema.", 'Do they go to the cinema?'], a: 3 },
    { k: 'choice', q: "**Do you play chess?** — to'g'ri qisqa javob (ha):", opts: ['Yes, I play.', 'Yes, I do.', 'Yes, you do.', 'Yes, I am.'], a: 1, why: "Savol **Do you** → javob **Yes, I do.**" },
    { k: 'fill', q: 'Does your sister like parties? — Yes, she ___.', a: ['does'], why: "**Does** savoliga → **she does**." },
    { k: 'fill', q: "Do your friends play games? — No, they ___.", a: ["don't", 'do not'], why: "*your friends* = they → **they don't**." },
    { k: 'tf', q: "\"Are you like sport?\" — to'g'ri savol.", a: false, why: "**like** — fe'l, demak **Do**: *Do you like sport?*" },
    { k: 'order', uz: 'Akangiz gitara chaladimi?', words: ['Does', 'your', 'brother', 'play', 'the', 'guitar'], extra: ['plays'], why: "**Does** + ega + fe'l (s'siz) + **the guitar**." },
    { k: 'order', uz: 'Siz uyda film ko\'rasizmi?', words: ['Do', 'you', 'watch', 'films', 'at', 'home'], extra: ['Are'], why: "**Do you watch films at home?**" },
    { k: 'translate', uz: "Siz futbol o'ynaysizmi?", a: ['Do you play football'], why: "**Do you play football?**" },
    { k: 'translate', uz: "U (ayol) musiqa tinglaydimi?", a: ['Does she listen to music'], why: "**Does she listen to music?** — *listen **to***." },
    { k: 'speak', say: 'Do you like music? Yes, I do.', uz: "Savolda ovozni ko'taring ↗, javobda pasaytiring ↘" },
    { k: 'listen', say: "No, he doesn't.", opts: ["No, he doesn't.", "No, he don't.", "No, he isn't.", "Yes, he does."], a: 0 },
  ],
  quiz: [
    { k: 'listen', say: 'Does your father play chess?', opts: ['Do your father play chess?', 'Your father plays chess.', 'Does your father play chess?', 'Does your father plays chess?'], a: 2 },
    { k: 'fill', q: '___ your friends go to parties?', a: ['Do', 'do'], why: "*your friends* = they → **Do**." },
    { k: 'fill', q: 'Does Lola ___ sport? (like)', a: ['like'], why: "**Does** dan keyin fe'l **-s siz**." },
    { k: 'fill', q: 'Do you have a guitar? — No, I ___.', a: ["don't", 'do not'] },
    { k: 'choice', q: "\"Ular kinoga borishadimi?\"", opts: ['Are they go to the cinema?', 'Does they go to the cinema?', 'They go to the cinema?', 'Do they go to the cinema?'], a: 3 },
    { k: 'choice', q: "**Does it work?** — to'g'ri javob (yo'q):", opts: ["No, it don't.", "No, it doesn't.", "No, it isn't work.", 'No, it not.'], a: 1 },
    { k: 'order', uz: "U (erkak) kompyuter o'yinlarini o'ynaydimi?", words: ['Does', 'he', 'play', 'computer', 'games'], extra: ['Do', 'plays'] },
    { k: 'translate', uz: 'Sizning xobbingiz nima?', a: ['What is your hobby', "What's your hobby"], why: "**What is your hobby?**" },
    { k: 'translate', uz: 'Otangiz (your father) shaxmat o\'ynaydimi?', a: ['Does your father play chess', 'Does your dad play chess'], why: "*your father* = he → **Does … play**." },
    { k: 'match', pairs: [['play', 'football'], ['listen to', 'music'], ['go to', 'the cinema'], ['do', 'sport'], ['watch', 'films']] },
  ],
  summary: [
    "Savol: **Do + I / you / we / they + fe'l?** · **Does + he / she / it + fe'l?**",
    "**Does** dan keyin fe'l **-s siz**: *Does she **like** music?*",
    "Qisqa javob: **Yes, I do. / No, I don't.** · **Yes, she does. / No, she doesn't.** — \"Yes, I like\" emas.",
    "Fe'l bilan **Are you…?** emas, **Do you…?**: *Do you play chess?*",
    "Iboralar: **play** football / chess / **the** guitar · **listen to** music · **go to** the cinema · **do** sport.",
  ],
  homework: "Do'stingiz yoki oila a'zongizga 5 ta Do/Does savoli tuzing (*Do you like chess? Does your sister play the guitar?*) va javoblarni qisqa shaklda yozing. O'z xobbingiz haqida 3 ta gap yozing.",
};

export default lesson;
