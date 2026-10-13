import type { Lesson } from '../../../types';

// Mini lesson (grammar): advice with should / shouldn't / Why don't you...? for health and travel. Adds the question forms.
const lesson: Lesson = {
  id: 'u10-l12',
  title: 'Giving advice: should, shouldn\'t, Why don\'t you…?',
  titleUz: "Maslahat berish: should, shouldn't, Why don't you…?",
  mini: true,
  kind: 'grammar',
  goal: "Sayohat va sog'liq haqida **maslahat so'raysiz va berasiz**: *What should I do? Should I take a coat? You should drink water. You shouldn't stay in the sun. Why don't you lie down?*",
  slides: [
    {
      title: 'Maslahat so\'rash va berish',
      blocks: [
        { t: 'p', md: "**should** va **Why don't you…?** ni oldin o'rgandingiz. Endi ularni **savolda** ishlatamiz va sayohat uchun ham qo'llaymiz. Hamma gapda **should + V1** (*to* yo'q, *-s* yo'q)." },
        { t: 'examples', items: [
          { en: 'You should drink a lot of water.', uz: "Ko'p suv ichishingiz kerak.", note: "Maslahat: **should**" },
          { en: "You shouldn't stay in the sun all day.", uz: "Kun bo'yi quyoshda qolmasligingiz kerak.", note: "Qilmaslik kerak: **shouldn't**" },
          { en: 'Should I take a coat?', uz: "Palto olsammi?", note: "Savol: **Should + I + V1?**" },
          { en: 'What should I do?', uz: "Nima qilishim kerak?", note: "**What should I + V1?**" },
          { en: "Why don't you lie down for an hour?", uz: "Bir soat yotib dam olsangiz-chi?", note: "Maslahat, savol emas" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Savol: \"Palto olsammi?\"", opts: ['Should I take a coat?', 'I should take a coat?', 'Should I to take a coat?', 'Do I should take a coat?'], a: 0, why: "Savol: **Should + I + V1?** — *do* kerak emas." } },
      ],
    },
    {
      title: 'Sayohat va sog\'liq uchun maslahatlar',
      blocks: [
        { t: 'table', head: ['Vaziyat', 'Maslahat'], speak: [1], rows: [
          ["It's very hot today.", 'You should wear sunscreen.'],
          ["I feel dizzy and tired.", "Why don't you lie down?"],
          ['I have a long flight.', 'You should drink bottled water.'],
          ['I have a headache.', "You shouldn't read on the train."],
          ["I'm in a new city.", 'Why don\'t you take a map?'],
        ] },
        { t: 'tip', tone: 'info', md: "Maslahatni qabul qilish: **Good idea, thanks!** / **OK, I will.** Rad etish: *I'm afraid I can't.* **Why don't you…?** ga *Because…* deb javob bermang." },
        { t: 'check', ex: { k: 'fill', q: "You ___ stay in the sun for a long time. It's bad for you.", a: ["shouldn't", 'should not'], uz: "Quyoshda uzoq qolmasligingiz kerak.", why: "Zararli narsa — **shouldn't** + V1." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['She should lie down.', 'What should I do?', 'Should we take bottled water?'] }, bad: { title: "Noto'g'ri", items: ['She should lies down.', 'What I should do?', 'Do we should take bottled water?'] } },
        { t: 'dialog', lines: [
          { who: 'Tom', en: "I've got a headache, and we have a long train journey today.", uz: "Boshim og'riyapti, bugun esa uzoq poyezd safarimiz bor." },
          { who: 'Dilya', en: "What should I do? Should I take a tablet?", uz: 'Nima qilishim kerak? Tabletka ichsammi?' },
          { who: 'Tom', en: "Yes, you should. And you shouldn't read on the train.", uz: "Ha. Poyezdda o'qimasligingiz kerak." },
          { who: 'Dilya', en: "Why don't you sleep a little? I'll wake you up.", uz: "Ozgina uxlasangiz-chi? Men sizni uyg'otaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Tom: "Should I take a tablet?" Dilya: "..."', opts: ["Yes, you should.", 'Yes, you do.', 'Yes, you should to.', 'Yes, you are.'], a: 0, why: "Qisqa javob: **Yes, you should. / No, you shouldn't.**" } },
      ],
    },
  ],
  words: [
    { en: 'advice', uz: 'maslahat (sanalmaydi)', ipa: 'ədˈvaɪs', pos: 'noun', ex: 'I need some advice about my trip.', exUz: "Safarim haqida maslahat kerak." },
    { en: 'sunscreen', uz: 'quyoshdan himoya kremi', ipa: 'ˈsʌn.skriːn', pos: 'noun', ex: 'You should wear sunscreen at the beach.', exUz: 'Plyajda quyoshdan himoya kremi surtishingiz kerak.' },
    { en: 'fresh air', uz: 'toza havo', ipa: 'freʃ eə', pos: 'noun phrase', ex: 'Why don\'t you get some fresh air?', exUz: 'Toza havodan nafas olsangiz-chi?' },
    { en: 'lie down', uz: 'yotmoq, cho\'zilmoq', ipa: 'laɪ daʊn', pos: 'phrasal verb', ex: 'You should lie down for an hour.', exUz: 'Bir soat yotib dam olishingiz kerak.' },
    { en: 'bottled water', uz: 'shishadagi suv', ipa: 'ˈbɒt.əld ˈwɔː.tər', pos: 'noun phrase', ex: 'You should take bottled water.', exUz: 'Shishadagi suv olishingiz kerak.' },
    { en: 'take care', uz: "ehtiyot bo'lmoq, o'zingizni asrang", ipa: 'teɪk keə', pos: 'phrase', ex: 'Take care and get well soon!', exUz: "O'zingizni asrang, tezroq tuzaling!" },
  ],
  practice: [
    { k: 'choice', q: 'You have a cough. You ___ drink cold water.', opts: ["shouldn't", "don't should", 'should to', 'not should'], a: 0, why: "Yo'talda sovuq suv — zarar. **shouldn't** + V1." },
    { k: 'fill', q: 'What ___ I do? I feel ill.', a: ['should'], uz: "Nima qilishim kerak? O'zimni yomon his qilyapman.", why: "**What should I + V1?**" },
    { k: 'order', uz: "Palto olsammi?", words: ['Should', 'I', 'take', 'a', 'coat'], extra: ['do', 'to'] },
    { k: 'translate', uz: "Siz ko'p suv ichishingiz kerak.", a: ['You should drink a lot of water.', 'You should drink lots of water.', 'You should drink a lot of bottled water.'], why: "**You should + V1.**" },
    { k: 'match', pairs: [['advice', 'maslahat'], ['sunscreen', 'quyoshdan himoya kremi'], ['fresh air', 'toza havo'], ['lie down', 'yotmoq'], ['bottled water', 'shishadagi suv']] },
    { k: 'tf', q: "*Do we should take a map?* — gap to'g'ri.", a: false, why: "To'g'risi: *Should we take a map?*" },
    { k: 'listen', say: "You shouldn't read on the train.", opts: ["You shouldn't read on the train.", 'You should read on the train.', "You shouldn't eat on the train.", "You shouldn't read on the bus."], a: 0 },
    { k: 'dictation', say: "Why don't you lie down?", a: ["Why don't you lie down?", 'Why do not you lie down?'] },
    { k: 'fix', wrong: 'She should takes a tablet.', a: ['She should take a tablet.'], why: "**should** dan keyin fe'l oddiy shaklda, *-s* yo'q." },
    { k: 'fix', wrong: 'What I should do?', a: ['What should I do?'], why: "Savolda **should** egadan oldin: *What should I do?*" },
    { k: 'fill', q: 'A: Should I wear sunscreen? B: Yes, you ___.', a: ['should'], uz: "Ha, surtishingiz kerak.", why: "Qisqa javob: **Yes, you should.**" },
    { k: 'speak', say: 'What should I do?', uz: 'Nima qilishim kerak?' },
  ],
  quiz: [
    { k: 'choice', q: "It's very hot. You ___ wear sunscreen.", opts: ['should', "shouldn't", 'does', 'are'], a: 0 },
    { k: 'fill', q: "You ___ stay in the sun all day. (qilmaslik kerak)", a: ["shouldn't", 'should not'] },
    { k: 'order', uz: "Bir soat yotib dam olsangiz-chi?", words: ['Why', "don't", 'you', 'lie', 'down', 'for', 'an', 'hour'], extra: ['lies', 'to'] },
    { k: 'translate', uz: "Nima qilishim kerak?", a: ['What should I do?'] },
    { k: 'tf', q: "*Should I take bottled water?* — to'g'ri savol.", a: true },
    { k: 'fix', wrong: 'You should to drink water.', a: ['You should drink water.'], why: "**should** dan keyin *to* yo'q." },
    { k: 'match', pairs: [['advice', 'maslahat'], ['lie down', 'yotmoq'], ['take care', "o'zingizni asrang"], ['fresh air', 'toza havo']] },
    { k: 'choice', q: 'A: Why don\'t you rest? B: ...', opts: ["Good idea, thanks!", 'Because you rest.', 'Yes, I rest.', 'I don\'t you.'], a: 0 },
  ],
  summary: [
    "Maslahat: **You should + V1**; qilmaslik kerak: **You shouldn't + V1**.",
    "Savol: **Should I take a coat?** va **What should I do?** — *do* kerak emas.",
    "Qisqa javob: **Yes, you should. / No, you shouldn't.** Maslahat: **Why don't you lie down?**",
    "Yangi so'zlar: **advice, sunscreen, fresh air, lie down, bottled water, take care**.",
  ],
  homework: "Do'stingiz uzoq safarga ketmoqda. U uchun 4 ta maslahat yozing: ikkitasi **should**, ikkitasi **shouldn't** bilan. Bittasi **Why don't you…?** bilan bo'lsin.",
};

export default lesson;
