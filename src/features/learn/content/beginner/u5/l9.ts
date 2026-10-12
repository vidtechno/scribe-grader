import type { Lesson } from '../../../types';

// Mini lesson (situation): telling a friend what happened yesterday. Recycles was/were, Past Simple, yesterday, film, friend.
const lesson: Lesson = {
  id: 'u5-l9',
  title: 'Yesterday: telling what happened',
  titleUz: "Kecha nima bo'ldi: Past Simple hayotda",
  mini: true,
  goal: "Do'stingizga **kecha nima bo'lganini** aytib berasiz va savol berasiz: *I went to a party. Did you go? — No, I didn't.* **was / were**, Past Simple, **didn't** va **Did…?** ni real suhbatda ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: kecha nima qildingiz?',
      blocks: [
        { t: 'p', md: "Do'stlar uchrashganda eng ko'p so'raladigan savol: **What did you do yesterday?** Javobda **was / were**, fe'lning **o'tgan shakli** (*went, saw, had*) va **didn't** ishlatiladi." },
        { t: 'dialog', lines: [
          { who: 'Dilya', en: 'Hi, Sam! Where were you yesterday?', uz: 'Salom, Sam! Kecha qayerda eding?' },
          { who: 'Sam', en: 'I was at a party. It was great!', uz: "Men ziyofatda edim. Juda zo'r bo'ldi!" },
          { who: 'Dilya', en: 'Really? What did you do there?', uz: "Rostdanmi? U yerda nima qilding?" },
          { who: 'Sam', en: 'We ate cake, listened to music and talked. I met an old friend.', uz: "Tort yedik, musiqa tingladik va gaplashdik. Eski do'stimni uchratdim." },
          { who: 'Dilya', en: "Did you go home late?", uz: "Uyga kech qaytdingmi?" },
          { who: 'Sam', en: "Yes, I did. I didn't sleep much. And you?", uz: "Ha. Ko'p uxlamadim. Sen-chi?" },
          { who: 'Dilya', en: "I stayed at home and watched a funny film.", uz: "Men uyda qoldim va kulgili film ko'rdim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Sam: "We ___ cake at the party."', opts: ['eat', 'eated', 'ate', 'eats'], a: 2, why: "**eat** — noto'g'ri fe'l: eat – **ate**." } },
      ],
    },
    {
      title: "Kecha haqida iboralar",
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ['What did you do yesterday?', "Do'stingizdan so'raysiz"],
          ['I was at home all day.', "Qayerda bo'lganingizni aytasiz"],
          ['It was great! / It was boring.', 'Fikringizni bildirasiz'],
          ['I went to the cinema with my friend.', 'Nima qilganingizni aytasiz'],
          ["I didn't sleep well.", "Qilmaganingizni aytasiz"],
          ['Did you like it?', 'Taassurot haqida so\'raysiz'],
        ] },
        { t: 'tip', tone: 'good', md: "Hikoyani **yesterday, last night, in the morning, then** kabi so'zlar bilan boshlang. Yaxshi hikoya: *Yesterday I got up late. Then I had breakfast and went out.*" },
        { t: 'check', ex: { k: 'fill', q: 'Where ___ you last night?', a: ['were'], uz: 'Kecha kechqurun qayerda eding?', why: "**you** bilan o'tgan zamonda — **were**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I didn't go to work.", 'Did you see him?', 'We were at home.'] }, bad: { title: "Noto'g'ri", items: ["I didn't went to work.", 'Did you saw him?', 'We was at home.'] } },
        { t: 'p', md: "Eslatma: **did / didn't** bor joyda fe'l **oddiy shaklda** qoladi (*go*, *see*). O'tgan shakl (*went, saw*) faqat darak gapda. **was** — I, he, she, it; **were** — you, we, they." },
        { t: 'check', ex: { k: 'choice', q: "*Did you like the film?* ga to'g'ri javob:", opts: ["Yes, I did.", "Yes, I liked.", "Yes, I was.", "Yes, I do."], a: 0, why: "**Did** bilan savolga — **Yes, I did. / No, I didn't.**" } },
      ],
    },
  ],
  words: [
    { en: 'party', uz: 'ziyofat, bazm', ipa: 'ˈpɑː.ti', pos: 'noun', ex: 'We had a party yesterday.', exUz: 'Kecha bizda ziyofat bo\'ldi.' },
    { en: 'cinema', uz: 'kinoteatr', ipa: 'ˈsɪn.ə.mə', pos: 'noun', ex: 'I went to the cinema with Sam.', exUz: "Men Sam bilan kinoga bordim." },
    { en: 'funny', uz: 'kulgili', ipa: 'ˈfʌn.i', pos: 'adjective', ex: 'The film was very funny.', exUz: 'Film juda kulgili edi.' },
    { en: 'boring', uz: "zerikarli", ipa: 'ˈbɔː.rɪŋ', pos: 'adjective', ex: 'The lesson was boring.', exUz: 'Dars zerikarli edi.' },
  ],
  practice: [
    { k: 'choice', q: 'Yesterday I ___ to the cinema.', opts: ['go', 'went', 'goed', 'was go'], a: 1, why: "go – **went**." },
    { k: 'fill', q: 'We ___ at home last night. (be)', a: ['were'], uz: 'Kecha kechqurun biz uyda edik.', why: "**we** → **were**." },
    { k: 'order', uz: 'Kecha nima qilding?', words: ['What', 'did', 'you', 'do', 'yesterday'], extra: ['does', 'was'] },
    { k: 'translate', uz: "Men kecha ishga bormadim.", a: ["I didn't go to work yesterday.", "I did not go to work yesterday."], why: "**didn't** + oddiy fe'l: *go*." },
    { k: 'match', pairs: [['party', 'ziyofat'], ['cinema', 'kinoteatr'], ['funny', 'kulgili'], ['boring', 'zerikarli'], ['yesterday', 'kecha']] },
    { k: 'tf', q: "*Did you saw Sam?* — gap to'g'ri.", a: false, why: "To'g'risi: *Did you **see** Sam?*" },
    { k: 'listen', say: 'Where were you yesterday?', opts: ['Where were you yesterday?', 'Where was he yesterday?', 'Where are you today?', 'Where did you go yesterday?'], a: 0 },
    { k: 'dictation', say: "I didn't sleep much.", a: ["I didn't sleep much.", 'I did not sleep much.'] },
    { k: 'fix', wrong: 'We was at the party.', a: ['We were at the party.'], why: "**we** bilan — **were**." },
    { k: 'fill', q: '___ you like the film? — Yes, I did.', a: ['Did'], uz: 'Filmni yoqtirdingmi?', why: "O'tgan zamon savoli — **Did**." },
    { k: 'speak', say: 'I went to the cinema with my friend.', uz: "Men do'stim bilan kinoga bordim." },
  ],
  quiz: [
    { k: 'choice', q: 'It ___ a boring lesson yesterday.', opts: ['is', 'was', 'were', 'did'], a: 1 },
    { k: 'fill', q: 'I ___ my friend at the party. (meet)', a: ['met'], why: "meet – **met**." },
    { k: 'order', uz: "Biz kecha uyda qoldik.", words: ['We', 'stayed', 'at', 'home', 'yesterday'], extra: ['stay', 'were'] },
    { k: 'translate', uz: "Sen filmni ko'rdingmi?", a: ['Did you see the film?', 'Did you watch the film?'] },
    { k: 'tf', q: "*Yes, I did.* — *Did you go home late?* savoliga mos javob.", a: true },
    { k: 'fix', wrong: "She didn't went home.", a: ["She didn't go home.", 'She did not go home.'], why: "**didn't** dan keyin — **go**." },
    { k: 'match', pairs: [['went', 'bordi'], ['saw', "ko'rdi"], ['ate', 'yedi'], ['met', 'uchratdi']] },
    { k: 'choice', q: 'What did you do yesterday? — ...', opts: ['I visited my uncle.', 'I visit my uncle.', 'I am visited.', 'I was visit.'], a: 0 },
  ],
  summary: [
    "Kecha haqida savol: **What did you do yesterday?** / **Where were you?**",
    "**was** (I, he, she, it) va **were** (you, we, they); Past Simple: *visited, went, saw*.",
    "**did / didn't** dan keyin fe'l oddiy shaklda: *Did you go? — I didn't go.*",
  ],
  homework: "Kechagi kuningiz haqida 4 ta gap yozing: *Yesterday I … Then I … I didn't …*",
};

export default lesson;
