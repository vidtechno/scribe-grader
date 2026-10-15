import type { Lesson } from '../../../types';

// Mini lesson (grammar): predictions and certainty. Uses will / going to (l2), Future Continuous / Perfect (l3).
const lesson: Lesson = {
  id: 'u22-l13',
  title: 'Predictions and certainty',
  titleUz: 'Bashorat va ishonch darajasi: probably, definitely, I doubt',
  mini: true,
  kind: 'grammar',
  goal: "Kelajak haqida **qanchalik ishonchingizni** aytasiz: **will definitely / will probably / might / probably won't**, **I doubt…**, **be likely / unlikely to…** va so'zlarni gapda to'g'ri joyga qo'yasiz.",
  slides: [
    {
      title: 'Ishonch darajasi: shkala',
      blocks: [
        { t: 'p', md: "Bashorat qilganda (*kelajakda nima bo'ladi?*) biz doim bir narsani qo'shamiz: **qanchalik ishonchimiz komil?** Inglizchada buning uchun bir nechta so'z bor. Shkalani eslab qoling:" },
        { t: 'table', head: ['Ishonch', 'Ibora', 'Misol'], speak: [2], rows: [
          ['100 foiz, ha', 'will definitely', 'Robots will definitely do more jobs.'],
          ['taxminan 80 foiz, ha', 'will probably', 'It will probably rain tomorrow.'],
          ['50 foiz', 'might / may / could', 'I might change my job.'],
          ['taxminan 80 foiz, yo\'q', 'probably won\'t', 'He probably won\'t come.'],
          ['100 foiz, yo\'q', 'definitely won\'t', 'I definitely won\'t be late.'],
        ] },
        { t: 'tip', tone: 'info', md: "**maybe** va **perhaps** gap boshida turadi: *Maybe I'll study abroad.* **might** esa fe'l bilan: *I might study abroad.* Ma'nosi bir xil (50 foiz)." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap 100 foiz ishonchni bildiradi?", opts: ['She will definitely pass.', 'She will probably pass.', 'She might pass.', 'Maybe she will pass.'], a: 0, why: "**definitely** — to'liq ishonch." } },
      ],
    },
    {
      title: 'Qayerga qo\'yamiz?',
      blocks: [
        { t: 'p', md: "**probably** va **definitely** — ravish. Ularning o'rni **will** ga bog'liq. Darak gapda ular **will dan keyin**, inkorda esa **won't dan oldin** turadi. Bu o'zbek tilida yo'q qoida, shuning uchun ehtiyot bo'ling." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['She will probably call you.', 'She probably won\'t call you.', 'We will definitely win.', 'We definitely won\'t lose.'] },
          bad: { title: 'Xato', items: ['She will call probably you.', 'She won\'t probably call you.', 'We won\'t definitely lose.'] } },
        { t: 'examples', items: [
          { en: 'I\'ll probably work from home on Friday.', uz: "Juma kuni ehtimol uydan ishlayman." },
          { en: 'I probably won\'t finish before six.', uz: "Ehtimol oltigacha tugatmayman." },
          { en: 'The new software will definitely save us time.', uz: "Yangi dastur albatta vaqtimizni tejaydi." },
        ] },
        { t: 'tip', tone: 'warn', md: "Inkorda **won't probably** emas, **probably won't** deymiz. Ayniqsa **probably** shunday." },
        { t: 'check', ex: { k: 'order', uz: "U ehtimol kech qoladi.", words: ['He', 'will', 'probably', 'be', 'late.'], extra: ['probable', 'is'], alt: [["He'll", 'probably', 'be', 'late.']], why: "will + **probably** + fe'l." } },
        { t: 'check', ex: { k: 'fix', wrong: "I won't probably need a laptop.", a: ["I probably won't need a laptop.", "I will probably not need a laptop."], hint: 'probably qayerda turadi?', why: "Inkorda: **probably won't**." } },
      ],
    },
    {
      title: 'I doubt va likely / unlikely',
      blocks: [
        { t: 'p', md: "**I doubt** (shubhalanaman) — o'zi inkor ma'noli, shuning uchun gapning o'zi darak shaklida qoladi: **I doubt he will come** = *Uning kelishiga shubham bor, kelmasa kerak.* **I think … won't** o'rniga inglizlar tez-tez **I don't think … will** deydi." },
        { t: 'table', head: ['Ibora', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['I doubt (that) + gap', 'shubhalanaman, kelmasa kerak', 'I doubt they will agree.'],
          ["I don't think + will", 'menimcha, bo\'lmaydi', "I don't think it will work."],
          ['be likely to + fe\'l', 'ehtimol, bo\'ladi', 'Prices are likely to go up.'],
          ['be unlikely to + fe\'l', 'bo\'lishi dargumon', 'She is unlikely to change her mind.'],
          ["I'm (not) sure / certain", 'ishonchim komil (emas)', "I'm certain he'll pass."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I doubt he will pass.', 'It is unlikely to snow.', "I don't think he will pass."] },
          bad: { title: 'Xato', items: ["I doubt he won't pass.", 'It is unlikely that it will not snow.', "I doubt to pass."] } },
        { t: 'tip', tone: 'warn', md: "**I doubt he won't come** — chalkash: bu *u albatta keladi* degan ma'noga yaqin bo'ladi. Oddiy qoida: **I doubt** dan keyin darak gap." },
        { t: 'check', ex: { k: 'choice', q: 'It is ___ that the shop will open before nine.', opts: ['unlikely', 'doubt', 'probably', 'definitely'], a: 0, why: "**It is unlikely that…** — dargumon." } },
        { t: 'check', ex: { k: 'fill', q: 'Prices are ___ to rise next year.', a: ['likely'], uz: "Kelasi yil narxlar ko'tarilishi ehtimoli bor.", why: "**be likely to** + fe'l." } },
      ],
    },
    {
      title: 'Dialog: ish va sun\'iy intellekt',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: 'Do you think artificial intelligence will take our jobs?', uz: "Sizningcha, sun'iy intellekt ishlarimizni tortib oladimi?" },
          { who: 'Jack', en: 'Some of them, definitely. But I doubt it will replace everybody.', uz: "Ba'zilarini albatta. Lekin hammani almashtirishiga shubham bor." },
          { who: 'Madina', en: 'I think we will probably work with it every day.', uz: "Menimcha, biz u bilan ehtimol har kuni ishlaymiz." },
          { who: 'Jack', en: 'Yes. New jobs are likely to appear, too. People will need training.', uz: "Ha. Yangi kasblar ham paydo bo'lishi mumkin. Odamlarga o'qish kerak bo'ladi." },
          { who: 'Madina', en: 'I might take an online course next month.', uz: "Men kelasi oy onlayn kursga yozilarman." },
          { who: 'Jack', en: "Good idea. I probably won't have time, but I'll definitely read about it.", uz: "Yaxshi fikr. Ehtimol vaqtim bo'lmaydi, lekin u haqida albatta o'qiyman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'Jack is sure that AI will replace everybody.', a: false, why: "*I doubt it will replace everybody.*" } },
        { t: 'check', ex: { k: 'choice', q: 'What will Jack probably not have next month?', opts: ['Time', 'A job', 'A computer', 'A teacher'], a: 0, why: "*I probably won't have time.*" } },
      ],
    },
  ],
  words: [
    { en: 'definitely', uz: 'albatta, shubhasiz', ipa: 'ˈdef.ɪ.nət.li', pos: 'adv', ex: 'I will definitely call you tonight.', exUz: "Bugun kechqurun albatta qo'ng'iroq qilaman." },
    { en: 'probably', uz: 'ehtimol, ko\'pincha', ipa: 'ˈprɒb.ə.bli', pos: 'adv', ex: 'He will probably be late.', exUz: "U ehtimol kech qoladi." },
    { en: 'doubt', uz: 'shubhalanmoq', ipa: 'daʊt', pos: 'verb', ex: 'I doubt he knows the answer.', exUz: "U javobni biladi deb o'ylamayman." },
    { en: 'likely', uz: 'ehtimol, mumkin', ipa: 'ˈlaɪ.kli', pos: 'adj', ex: 'It is likely to rain this evening.', exUz: "Bu oqshom yomg'ir yog'ishi mumkin." },
    { en: 'unlikely', uz: 'dargumon', ipa: 'ʌnˈlaɪ.kli', pos: 'adj', ex: 'A strike is unlikely this year.', exUz: "Bu yil ish tashlash dargumon." },
    { en: 'certain', uz: 'aniq, ishonchli', ipa: 'ˈsɜː.tən', pos: 'adj', ex: 'I\'m certain I locked the door.', exUz: "Eshikni qulflaganimga ishonchim komil." },
  ],
  practice: [
    { k: 'match', pairs: [['definitely', 'albatta'], ['probably', 'ehtimol'], ['I doubt', 'shubhalanaman'], ['unlikely', 'dargumon'], ['certain', 'aniq, ishonchli']] },
    { k: 'choice', q: 'I\'m 100 percent sure he will come. → He will ___ come.', opts: ['definitely', 'probably', 'maybe', 'unlikely'], a: 0, why: "To'liq ishonch → **definitely**." },
    { k: 'choice', q: 'Where does the word go?', opts: ["She probably won't win.", "She won't probably win.", 'She probably will not win her.', 'Probably she won\'t win.'], a: 0, why: "**probably won't** — probably inkordan oldin." },
    { k: 'fill', q: 'I ___ the meeting will finish on time. It always runs late.', a: ['doubt'], uz: "Yig'ilish o'z vaqtida tugaydi deb o'ylamayman. U doim cho'ziladi.", why: "**I doubt** + darak gap." },
    { k: 'fill', q: 'The train is ___ to be late today because of the snow.', a: ['likely'], uz: "Qor tufayli poyezd bugun kechikishi mumkin.", why: "**be likely to**." },
    { k: 'fill', q: 'It is ___ that he will change his mind. He never does.', a: ['unlikely'], uz: "U fikrini o'zgartirishi dargumon. U hech qachon o'zgartirmaydi.", why: "**It is unlikely that…**" },
    { k: 'order', uz: "Biz ehtimol ertaga yangi dasturni o'rnatamiz.", words: ['We', 'will', 'probably', 'install', 'the', 'new', 'software', 'tomorrow.'], extra: ['definitely', 'unlikely'], alt: [['Tomorrow', 'we', 'will', 'probably', 'install', 'the', 'new', 'software.']], why: "will + **probably** + fe'l." },
    { k: 'order', uz: "Men bu ish uchun ariza topshirmayman.", words: ['I', 'definitely', "won't", 'apply', 'for', 'that', 'job.'], extra: ['probable', 'not'], why: "**definitely won't**." },
    { k: 'fix', wrong: "He won't probably pass the test.", a: ["He probably won't pass the test.", 'He will probably not pass the test.'], why: "Inkorda **probably won't**." },
    { k: 'fix', wrong: "I doubt he won't agree.", a: ['I doubt he will agree.', "I doubt that he will agree.", "I doubt he'll agree."], hint: 'I doubt allaqachon inkor ma\'noli', why: "**I doubt** dan keyin darak gap: *he will agree*." },
    { k: 'translate', uz: "Menimcha, u ishni qabul qilmaydi.", a: ["I don't think he will take the job.", "I don't think he'll take the job.", 'I do not think he will take the job.', 'I doubt he will take the job.', "I doubt he'll take the job."], why: "**I don't think … will** yoki **I doubt**." },
    { k: 'listen', say: 'I will probably work from home on Friday.', opts: ['I will probably work from home on Friday.', 'I will definitely work from home on Friday.', 'I probably won\'t work from home on Friday.', 'I might work from home on Friday.'], a: 0, why: "**will probably** — ehtimol." },
  ],
  quiz: [
    { k: 'choice', q: 'Which sentence means "very unlikely"?', opts: ['He definitely won\'t come.', 'He might come.', 'He will probably come.', 'He is likely to come.'], a: 0, why: "**definitely won't** — deyarli aniq, kelmaydi." },
    { k: 'choice', q: 'I ___ the answer is right. Let me check again.', opts: ["doubt", 'am sure', 'definitely think', 'will certain'], a: 0, why: "**I doubt** + gap — shubha." },
    { k: 'fill', q: 'It will ___ rain tomorrow. Take an umbrella.', a: ['probably', 'definitely'], why: "will + ravish + fe'l." },
    { k: 'fill', q: 'She is ___ to leave the company. She loves her job.', a: ['unlikely'], uz: "U kompaniyani tark etishi dargumon. U ishini yaxshi ko'radi.", why: "**be unlikely to** + fe'l." },
    { k: 'fix', wrong: 'They will probably not to come.', a: ["They probably won't come.", 'They will probably not come.'], why: "**will** dan keyin **to** kelmaydi; inkorda **probably won't**." },
    { k: 'order', uz: "Narxlar ko'tarilishi mumkin.", words: ['Prices', 'are', 'likely', 'to', 'go', 'up.'], extra: ['will', 'doubt'], why: "**be likely to** + fe'l." },
    { k: 'tf', q: "*I doubt she will come* — ma'nosi: u ehtimol kelmaydi.", a: true, why: "**I doubt** — shubha, kelmasa kerak." },
    { k: 'translate', uz: "Men albatta yordam beraman.", a: ["I will definitely help.", "I'll definitely help.", "I will definitely help you.", "I'll definitely help you."], why: "will + **definitely** + fe'l." },
  ],
  summary: [
    "Ishonch shkalasi: **will definitely** (100) > **will probably** (80) > **might / may / could** (50) > **probably won't** > **definitely won't**.",
    "**probably** va **definitely** darakda **will dan keyin**, inkorda **won't dan oldin** turadi: *probably won't*, *definitely won't*.",
    "**I doubt** + darak gap (*I doubt he will come*). **I don't think … will** ham keng ishlatiladi.",
    "**be likely to** (ehtimol) va **be unlikely to** (dargumon) + fe'l: *Prices are likely to rise.*",
  ],
  homework: "Kelasi yil haqida 5 ta bashorat yozing: kamida bittasida *definitely*, bittasida *probably*, bittasida *I doubt*, bittasida *likely*.",
};

export default lesson;
