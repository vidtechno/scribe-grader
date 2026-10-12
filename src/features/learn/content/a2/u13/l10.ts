import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l10",
  title: "Planning a trip: what might happen?",
  titleUz: "Sayohatni rejalashtirish: nima bo'lishi mumkin?",
  mini: true,
  kind: 'situation',
  goal: "Sayohatni rejalashtirganda **nima bo'lishi mumkinligini** ayta olasiz: **will / won't** (ishonch), **may / might** (ehtimol) va **birinchi shart gap** (*If it rains, we'll…*) bilan.",
  slides: [
    {
      title: "Dialog: Samarqandga sayohat",
      blocks: [
        { t: "p", md: "Dilnoza va Kamol Samarqandga borishmoqchi. Ular ishonchli narsalar va **ehtimol** narsalar haqida gaplashadi." },
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Have you got your passport and your tickets, Kamol?", uz: "Kamol, pasporting va chiptalaring bormi?" },
            { who: "Kamol", en: "Yes. I'll pack my luggage tonight. What's the weather going to be like?", uz: "Ha. Yukimni bugun kechqurun yig'aman. Ob-havo qanday bo'ladi?" },
            { who: "Dilnoza", en: "It will probably be hot, but it might rain on Sunday.", uz: "Ehtimol issiq bo'ladi, lekin yakshanba kuni yomg'ir yog'ishi mumkin." },
            { who: "Kamol", en: "If it rains, we'll visit the museum. And I may buy a souvenir for my mother.", uz: "Yomg'ir yog'sa, muzeyga boramiz. Onam uchun esdalik sovg'a ham olishim mumkin." },
            { who: "Dilnoza", en: "Don't forget the sunscreen! If you forget it, you'll get red.", uz: "Quyoshdan himoya kremini unutma! Unutsang, terang qizarib ketadi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza is sure that it will rain on Sunday.", a: false, why: "U *might rain* dedi — bu ehtimol, ishonch emas." } },
      ],
    },
    {
      title: "Will, may va might",
      blocks: [
        {
          t: "table", head: ["Ishonch", "Qolip", "Misol"], speak: [2],
          rows: [
            ["Deyarli aniq", "will / won't + V1", "We'll have a great time."],
            ["Ehtimol", "may / might + V1", "It might rain. / I may buy a souvenir."],
            ["Ehtimol emas", "may not / might not + V1", "We might not have time."],
          ],
        },
        { t: "tip", tone: "warn", md: "**may / might** dan keyin **to** va **-s** kelmaydi: *She might come* ✅, *She might comes* ❌, *She might to come* ❌." },
        { t: "check", ex: { k: "choice", q: "\"Ehtimol, bizda vaqt bo'lmaydi.\"", opts: ["We might not have time.", "We might not to have time.", "We mights not have time.", "We not might have time."], a: 0, why: "**might not + V1**." } },
      ],
    },
    {
      title: "Birinchi shart gap",
      blocks: [
        {
          t: "examples", items: [
            { en: "If it rains, we'll visit the museum.", uz: "Yomg'ir yog'sa, muzeyga boramiz." },
            { en: "We'll miss the train if we don't hurry.", uz: "Shoshilmasak, poyezdga ulgurmaymiz." },
            { en: "If I find my passport, I'll call you.", uz: "Pasportimni topsam, senga qo'ng'iroq qilaman." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["If it rains, we'll stay in.", "If you forget it, you'll get red."] },
          bad: { title: "Xato", items: ["If it will rain, we stay in.", "If you will forget it, you'll get red."] },
        },
        { t: "check", ex: { k: "fill", q: "If we ___ the bus, we'll be late. (miss)", a: ["miss"], why: "**If + Present Simple**, **will + V1**." } },
      ],
    },
  ],
  words: [
    { en: "passport", uz: "pasport", ipa: "ˈpɑːs.pɔːt", pos: "noun", ex: "Don't forget your passport.", exUz: "Pasportingni unutma." },
    { en: "luggage", uz: "yuk, bagaj", ipa: "ˈlʌɡ.ɪdʒ", pos: "noun", ex: "My luggage is very heavy.", exUz: "Yukim juda og'ir." },
    { en: "souvenir", uz: "esdalik sovg'a", ipa: "ˌsuː.vəˈnɪər", pos: "noun", ex: "I'll buy a souvenir for my sister.", exUz: "Singlimga esdalik sovg'a olaman." },
    { en: "sunscreen", uz: "quyoshdan himoya kremi", ipa: "ˈsʌn.skriːn", pos: "noun", ex: "Take some sunscreen. It might be hot.", exUz: "Quyoshdan himoya kremini ol. Issiq bo'lishi mumkin." },
    { en: "lost", uz: "yo'qolgan, adashgan", ipa: "lɒst", pos: "adj", ex: "If I get lost, I'll call you.", exUz: "Adashib qolsam, senga qo'ng'iroq qilaman." },
    { en: "sightseeing", uz: "diqqatga sazovor joylarni ko'rish", ipa: "ˈsaɪtˌsiː.ɪŋ", pos: "noun", ex: "We're going sightseeing on Saturday.", exUz: "Shanba kuni diqqatga sazovor joylarni ko'rgani boramiz." },
  ],
  practice: [
    { k: "match", pairs: [["passport", "pasport"], ["luggage", "yuk, bagaj"], ["souvenir", "esdalik sovg'a"], ["lost", "adashgan"], ["sunscreen", "quyoshdan himoya kremi"]] },
    { k: "choice", q: "I'm not sure. I ___ go to Bukhara.", opts: ["might", "might to", "mights", "will to"], a: 0 },
    { k: "fill", q: "If it rains, we ___ stay at the hotel. (will)", a: ["will", "'ll"], why: "Natija qismi: **will + V1**." },
    { k: "fix", wrong: "If it will rain, we'll stay in.", a: ["If it rains, we'll stay in."], why: "**If** dan keyin **will** ishlatilmaydi." },
    { k: "order", uz: "Yomg'ir yog'sa, muzeyga boramiz.", words: ["If", "it", "rains", ",", "we'll", "visit", "the", "museum"], extra: ["will", "rain"], alt: [["We'll", "visit", "the", "museum", "if", "it", "rains"]] },
    { k: "choice", q: "\"Bu yerda adashib qolsam, senga qo'ng'iroq qilaman.\"", opts: ["If I get lost, I'll call you.", "If I will get lost, I call you.", "If I get lost, I call you will.", "If I'll get lost, I'll call you."], a: 0 },
    { k: "tf", q: "**It might rain** = yomg'ir albatta yog'adi.", a: false, why: "**might** — ehtimol, aniq emas." },
    { k: "translate", uz: "Ehtimol, onam uchun esdalik sovg'a olaman.", a: ["I may buy a souvenir for my mother.", "I might buy a souvenir for my mother.", "I may buy my mother a souvenir.", "I might buy my mother a souvenir."], why: "**may / might + V1**." },
    { k: "fill", q: "We ___ have time for sightseeing. (ehtimol emas)", a: ["might not", "may not"], why: "**might not / may not + V1**." },
    { k: "dictation", say: "Don't forget your passport and your luggage.", uz: "Pasportingiz va yukingizni unutmang." },
    { k: "choice", q: "Which sentence is NOT correct?", opts: ["She may come.", "She might come.", "She mights come.", "She might not come."], a: 2 },
    { k: "translate", uz: "Shoshilmasak, poyezdga ulgurmaymiz.", a: ["If we don't hurry, we'll miss the train.", "If we do not hurry, we will miss the train.", "We'll miss the train if we don't hurry.", "We will miss the train if we do not hurry."] },
  ],
  quiz: [
    { k: "choice", q: "Look at your diary: \"Maybe visit Samarkand.\" Qaysi gap mos?", opts: ["I might visit Samarkand.", "I visit Samarkand.", "I might to visit Samarkand.", "I'm visit Samarkand."], a: 0 },
    { k: "fill", q: "If you forget the sunscreen, you ___ get red. (will)", a: ["will", "'ll"] },
    { k: "fix", wrong: "She might comes to the airport.", a: ["She might come to the airport."], why: "**might + V1**, **-s** yo'q." },
    { k: "choice", q: "If it's sunny on Sunday, ___", opts: ["we'll go sightseeing.", "we go sightseeing will.", "we will to go sightseeing.", "we going sightseeing."], a: 0 },
    { k: "order", uz: "Passportimni topsam, senga qo'ng'iroq qilaman.", words: ["If", "I", "find", "my", "passport", ",", "I'll", "call", "you"], extra: ["will"] },
    { k: "tf", q: "**We won't have time** — bu **might not** dan ko'ra ishonchliroq.", a: true, why: "**won't** — deyarli aniq, **might not** — ehtimol." },
    { k: "translate", uz: "Yomg'ir yog'ishi mumkin.", a: ["It might rain.", "It may rain.", "It might rain", "It may rain"] },
  ],
  summary: [
    "Ishonch: **will / won't + V1**. Ehtimol: **may / might + V1** (*It might rain*).",
    "Ehtimol emas: **may not / might not** (*mayn't* yo'q).",
    "Birinchi shart gap: **If + Present Simple, will + V1** (*If it rains, we'll stay in*).",
    "**If** dan keyin **will** ishlatilmaydi.",
  ],
  homework: "Kelgusi sayohatingiz (haqiqiy yoki xayoliy) haqida 4 ta gap yozing: ikkita *might / may* bilan va ikkita *If …, I'll …* bilan. Yukingizda nimalar bo'lishini sanab chiqing.",
};

export default lesson;
