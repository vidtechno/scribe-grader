import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l11",
  title: "Plans and the future: final review",
  titleUz: "Rejalar va kelajak: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Bosqichni yakunlaysiz: **going to**, **will / won't**, **will yoki going to**, **Present Continuous (reja)**, **may / might**, **birinchi shart gap** va **reja tuzish** iboralarini bir joyda takrorlab, kelajak haqida erkin gapirasiz.",
  slides: [
    {
      title: "Takror: qaysi shaklni tanlayman?",
      blocks: [
        {
          t: "table", head: ["Vaziyat", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Oldindan qilingan reja", "going to + V1", "I'm going to study medicine."],
            ["Kelishilgan reja + vaqt", "Present Continuous", "I'm meeting Laylo at six."],
            ["Shu zahoti qaror, va'da", "will / won't + V1", "I'll help you. I won't tell anyone."],
            ["Ehtimol", "may / might + V1", "It might rain."],
            ["Shart va natija", "If + Present Simple, will + V1", "If it rains, we'll stay in."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've booked a hotel. I'm going to stay in Samarkand.", "If you hurry, you'll catch the bus."] },
          bad: { title: "Xato", items: ["She might comes tomorrow.", "If you will hurry, you'll catch the bus."] },
        },
        { t: "check", ex: { k: "choice", q: "The phone is ringing. — I ___ answer it.", opts: ["am going to", "will", "going to", "might to"], a: 1, why: "Shu zahoti qaror: **I'll answer**." } },
        { t: "check", ex: { k: "fill", q: "If it ___ tomorrow, we'll stay at home. (rain)", a: ["rains"], why: "**If it rains** — Present Simple." } },
      ],
    },
    {
      title: "Takror: taklif va ehtimol",
      blocks: [
        {
          t: "examples", items: [
            { en: "Would you like to join us? — I'd love to!", uz: "Bizga qo'shilasanmi? — Xursand bo'lardim!" },
            { en: "I might change my plans.", uz: "Rejalarimni o'zgartirishim mumkin." },
            { en: "If you hurry, you'll catch the bus.", uz: "Shoshilsang, avtobusga ulgurasan." },
          ],
        },
        { t: "tip", tone: "warn", md: "**might / may** dan keyin **to** va **-s** yo'q. **If** dan keyin **will** yo'q: *If it rains…* ✅." },
        { t: "check", ex: { k: "fix", wrong: "She might to come tomorrow.", a: ["She might come tomorrow."], why: "**might + V1**." } },
      ],
    },
    {
      title: "Dialog: kelajak orzulari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "What are your goals for next year, Dilnoza?", uz: "Dilnoza, kelasi yilga maqsadlaring qanday?" },
            { who: "Dilnoza", en: "I'm going to pass my exam, and I might apply for a job abroad someday.", uz: "Imtihondan o'tmoqchiman va bir kun chet elda ishga hujjat topshirishim mumkin." },
            { who: "Aziz", en: "That's a big dream! If you work hard, you'll succeed.", uz: "Bu katta orzu! Qattiq ishlasang, muvaffaqiyatga erishasan." },
            { who: "Dilnoza", en: "Thanks! I'm meeting a teacher on Friday. Would you like to come with me?", uz: "Rahmat! Juma kuni o'qituvchi bilan uchrashaman. Men bilan borishni xohlaysanmi?" },
            { who: "Aziz", en: "I'd love to, but I'm working on Friday. Maybe another time?", uz: "Xursand bo'lardim-u, juma kuni ishlayman. Boshqa safar bo'lsa-chi?" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why can't Aziz go with Dilnoza?", opts: ["He is working on Friday.", "He is lazy.", "He doesn't like teachers.", "He is going abroad."], a: 0 } },
      ],
    },
  ],
  words: [
    { en: "goal", uz: "maqsad", ipa: "ɡəʊl", pos: "noun", ex: "My goal is to speak English well.", exUz: "Maqsadim ingliz tilida yaxshi gapirish." },
    { en: "dream", uz: "orzu", ipa: "driːm", pos: "noun", ex: "Her dream is to travel the world.", exUz: "Uning orzusi butun dunyoni aylanish." },
    { en: "success", uz: "muvaffaqiyat", ipa: "səkˈses", pos: "noun", ex: "Hard work leads to success.", exUz: "Qattiq mehnat muvaffaqiyatga olib keladi." },
    { en: "someday", uz: "bir kun, kelajakda biror vaqt", ipa: "ˈsʌm.deɪ", pos: "adv", ex: "I'll visit Japan someday.", exUz: "Bir kun Yaponiyaga boraman." },
    { en: "come true", uz: "ro'yobga chiqmoq", ipa: "kʌm truː", pos: "phrase", ex: "I hope your dream will come true.", exUz: "Orzuyingiz ro'yobga chiqadi degan umiddaman." },
    { en: "change", uz: "o'zgartirmoq, o'zgarmoq", ipa: "tʃeɪndʒ", pos: "verb", ex: "I might change my plans.", exUz: "Rejalarimni o'zgartirishim mumkin." },
  ],
  practice: [
    { k: "match", pairs: [["goal", "maqsad"], ["dream", "orzu"], ["success", "muvaffaqiyat"], ["someday", "bir kun"], ["come true", "ro'yobga chiqmoq"]] },
    { k: "choice", q: "Look at the clouds! It ___ rain.", opts: ["will to", "is going to", "going to", "does going to"], a: 1, why: "Dalil bor: **is going to**." },
    { k: "fill", q: "I ___ meeting Laylo at six. (kelishilgan reja)", a: ["am", "'m"], why: "**I'm meeting**." },
    { k: "fix", wrong: "If you will study, you'll pass the exam.", a: ["If you study, you'll pass the exam."], why: "**If** dan keyin Present Simple." },
    { k: "choice", q: "\"Balki u kelmas.\"", opts: ["She might not come.", "She might not to come.", "She not might come.", "She mights not come."], a: 0 },
    { k: "translate", uz: "Maqsadim — imtihondan o'tish.", a: ["My goal is to pass the exam.", "My goal is to pass my exam."], why: "**My goal is to + V1**." },
    { k: "order", uz: "Bir kun orzuyim ro'yobga chiqadi.", words: ["Someday", "my", "dream", "will", "come", "true"], extra: ["to"], alt: [["My", "dream", "will", "come", "true", "someday"]] },
    { k: "choice", q: "\"Taklif\": which one is an invitation?", opts: ["Would you like to come with me?", "I'm afraid I can't.", "That sounds great!", "Maybe another time."], a: 0 },
    { k: "fill", q: "Why don't we ___ to the lake? (go)", a: ["go"], why: "**Why don't we + V1**." },
    { k: "tf", q: "**I'll definitely come** — bu **I might come** dan ko'ra ishonchliroq.", a: true },
    { k: "translate", uz: "Yomg'ir yog'sa, uyda qolamiz.", a: ["If it rains, we'll stay at home.", "If it rains, we will stay at home.", "If it rains, we'll stay in.", "If it rains, we will stay in.", "We'll stay at home if it rains.", "We will stay at home if it rains."] },
    { k: "dictation", say: "I'm going to pass my exam next year.", uz: "Kelasi yil imtihondan o'tmoqchiman." },
  ],
  quiz: [
    { k: "choice", q: "It's late. I can't find a taxi. — I think I ___ walk home.", opts: ["will", "going to", "am going", "might to"], a: 0 },
    { k: "choice", q: "We've bought the tickets. We ___ fly to Istanbul on Monday.", opts: ["will", "are going to", "might to", "do going to"], a: 1 },
    { k: "fill", q: "She ___ not come to the party. (ehtimol)", a: ["may", "might"] },
    { k: "fix", wrong: "Are you going to joining us?", a: ["Are you going to join us?"] },
    { k: "order", uz: "Shoshilsang, avtobusga ulgurasan.", words: ["If", "you", "hurry", ",", "you'll", "catch", "the", "bus"], extra: ["will"] },
    { k: "translate", uz: "Bu dam olish kuni nima qilmoqchisan?", a: ["What are you going to do this weekend?", "What are you doing this weekend?"] },
    { k: "choice", q: "Invitation: *Would you like to go sightseeing?* Best polite refusal:", opts: ["I'd love to, but I'm busy. Maybe another time?", "No.", "Yes, I'm lazy.", "I'm going to the lake."], a: 0 },
  ],
  summary: [
    "Reja: **going to + V1**; kelishilgan reja: **Present Continuous**; shu zahoti qaror va va'da: **will / won't**.",
    "Ehtimol: **may / might + V1**; ehtimol emas: **may not / might not**.",
    "Birinchi shart gap: **If + Present Simple, will + V1**.",
    "Taklif: **Would you like to…? Why don't we…? How about…ing?** Rad etish: **I'd love to, but… Maybe another time?**",
  ],
  homework: "Kelasi yilga 5 ta maqsad yozing: ikkitasi *going to*, bittasi *might*, bittasi *If …, I'll …* va bittasi *will* bilan. Keyin ularni baland ovozda ayting.",
};

export default lesson;
