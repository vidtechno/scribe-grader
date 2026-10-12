import type { Lesson } from '../../../types';

// Mini lesson (grammar): short answers and Wh- questions in Past Simple. Comes after l4/l5 (irregular verbs, didn't, Did...?).
const lesson: Lesson = {
  id: 'u5-l15',
  title: 'Past Simple: short answers and Wh- questions',
  titleUz: 'Past Simple: qisqa javoblar va Wh-savollar',
  mini: true,
  goal: "Savolga qisqa javob berasiz (*Did you go? — Yes, I did.*) va so'roq so'zli savollar tuzasiz: *What did you do? Where did she go? When did they arrive?*",
  slides: [
    {
      title: 'Qisqa javoblar',
      blocks: [
        { t: 'p', md: "*Did…?* savoliga to'liq gap shart emas. **Yes** yoki **No**, keyin shaxs va **did / didn't**. Asosiy fe'l takrorlanmaydi." },
        { t: 'table', head: ['Savol', 'Ha', "Yo'q"], speak: [0], rows: [
          ['Did you see the film?', 'Yes, I did.', "No, I didn't."],
          ['Did she call you?', 'Yes, she did.', "No, she didn't."],
          ['Did they arrive late?', 'Yes, they did.', "No, they didn't."],
          ['Was it nice?', 'Yes, it was.', "No, it wasn't."],
        ] },
        { t: 'tip', tone: 'warn', md: "**was / were** bilan savolda **did** yo'q: *Were you at home? — Yes, I was.* Qolgan fe'llarda **Did** va **did**." },
        { t: 'check', ex: { k: 'choice', q: 'Did he stay at home? — ...', opts: ['Yes, he stayed.', 'Yes, he did.', 'Yes, he does.', 'Yes, he was.'], a: 1, why: "**Did** bilan so'ralgan savolga **did** bilan javob: *Yes, he did.*" } },
      ],
    },
    {
      title: 'Wh-savollar: What did you do?',
      blocks: [
        { t: 'p', md: "Tartib: **so'roq so'z + did + ega + V1?** *Did* o'tgan zamonni ko'rsatadi, shuning uchun asosiy fe'l **oddiy shaklda** qoladi (went emas, **go**)." },
        { t: 'examples', items: [
          { en: 'What did you do yesterday?', uz: 'Kecha nima qildingiz?' },
          { en: 'Where did she go?', uz: 'U qayerga bordi?' },
          { en: 'When did they arrive?', uz: 'Ular qachon yetib kelishdi?' },
          { en: 'Why did he stay at home?', uz: 'U nega uyda qoldi?' },
          { en: 'How did you get there?', uz: 'U yerga qanday bordingiz?' },
        ] },
        { t: 'check', ex: { k: 'order', uz: 'U qayerga bordi?', words: ['Where', 'did', 'she', 'go'], extra: ['went', 'does'], why: "so'roq so'z + **did** + ega + **go**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling",
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Where did she go?', 'What did you eat?', 'Yes, I did.'] },
          bad: { title: "Noto'g'ri", items: ['Where did she went?', 'What you did eat?', 'Yes, I did went.'] } },
        { t: 'p', md: "Xatolarning sababi bitta: **did** bor joyda fe'l **V1** bo'ladi. Javobda esa to'liq gap aytsangiz, V2 ishlatiladi: *I went to the park.*" },
        { t: 'dialog', lines: [
          { who: 'Aziz', en: 'Did you go out last night?', uz: 'Kecha tashqariga chiqdingizmi?' },
          { who: 'Dilya', en: 'Yes, I did. I went to a café.', uz: 'Ha. Kafega bordim.' },
          { who: 'Aziz', en: 'Who did you meet there?', uz: 'U yerda kim bilan uchrashdingiz?' },
          { who: 'Dilya', en: 'I met my cousin. We talked for an hour.', uz: "Amakivachcham bilan uchrashdim. Bir soat gaplashdik." },
        ] },
        { t: 'check', ex: { k: 'fix', wrong: 'What did you ate for lunch?', a: ['What did you eat for lunch?'], hint: 'did dan keyin V1', why: "**did** dan keyin **eat** (ate emas)." } },
      ],
    },
  ],
  words: [
    { en: 'ask', uz: "so'ramoq", ipa: 'ɑːsk', pos: 'verb', ex: 'She asked me a question.', exUz: "U mendan savol so'radi." },
    { en: 'wait', uz: 'kutmoq', ipa: 'weɪt', pos: 'verb', ex: 'We waited for the bus.', exUz: 'Biz avtobusni kutdik.' },
    { en: 'call', uz: "qo'ng'iroq qilmoq", ipa: 'kɔːl', pos: 'verb', ex: 'Did you call your mother?', exUz: "Onangizga qo'ng'iroq qildingizmi?" },
    { en: 'reply', uz: 'javob qaytarmoq', ipa: 'rɪˈplaɪ', pos: 'verb', ex: 'He did not reply to my message.', exUz: 'U xabarimga javob bermadi.' },
    { en: 'early', uz: 'erta', ipa: 'ˈɜː.li', pos: 'adv', ex: 'I got up early today.', exUz: 'Bugun erta turdim.' },
    { en: 'late', uz: 'kech', ipa: 'leɪt', pos: 'adv', ex: 'They arrived late.', exUz: 'Ular kech yetib kelishdi.' },
  ],
  practice: [
    { k: 'choice', q: 'Did you buy a ticket? — ...', opts: ['Yes, I did.', 'Yes, I bought.', 'Yes, I do.', 'Yes, I was.'], a: 0, why: "**Did** → **did**." },
    { k: 'fill', q: 'Did they win? — No, they ___.', a: ["didn't", 'did not'], uz: "Ular yutdimi? — Yo'q.", why: "Inkor qisqa javob: **didn't**." },
    { k: 'order', uz: 'Siz nima yedingiz?', words: ['What', 'did', 'you', 'eat'], extra: ['ate', 'do'] },
    { k: 'order', uz: 'Ular qachon yetib kelishdi?', words: ['When', 'did', 'they', 'arrive'], extra: ['arrived', 'does'] },
    { k: 'fill', q: 'Where ___ she go yesterday?', a: ['did'], uz: 'U kecha qayerga bordi?', why: "o'tgan zamon savoli → **did**." },
    { k: 'translate', uz: 'Kecha nima qildingiz?', a: ['What did you do yesterday?', 'What did you do yesterday'], why: "**What did you do…?**" },
    { k: 'tf', q: '*Did she went home?* — gap to\'g\'ri.', a: false, why: "To'g'risi: *Did she **go** home?*" },
    { k: 'match', pairs: [['Where', 'qayerda / qayerga'], ['When', 'qachon'], ['Why', 'nega'], ['Who', 'kim'], ['How', 'qanday']] },
    { k: 'fix', wrong: 'Where did he went last Sunday?', a: ['Where did he go last Sunday?'], hint: 'did dan keyin V1', why: "**did** + **go**." },
    { k: 'listen', say: 'Why did you stay at home?', opts: ['Why did you stay at home?', 'Where did you stay at home?', 'Why do you stay at home?', 'When did you stay at home?'], a: 0 },
    { k: 'translate', uz: 'Ha, men ko\'rdim.', a: ['Yes, I did.', 'Yes I did.'], why: "Qisqa javob: *Yes, I did.*" },
    { k: 'speak', say: 'What did you do yesterday?', uz: 'Kecha nima qildingiz?' },
    { k: 'speak', say: 'Yes, I did. I called her early.', uz: 'Ha. Men unga erta qo\'ng\'iroq qildim.' },
  ],
  quiz: [
    { k: 'choice', q: 'Did he call you? — ...', opts: ["Yes, he did.", 'Yes, he called.', 'Yes, he does.', 'Yes, he is.'], a: 0 },
    { k: 'fill', q: 'Who ___ you meet at the party?', a: ['did'], uz: 'Ziyofatda kim bilan uchrashdingiz?', why: "**Who did you meet?**" },
    { k: 'order', uz: 'U nega kech qoldi?', words: ['Why', 'did', 'he', 'stay', 'late'], extra: ['stayed', 'was'] },
    { k: 'translate', uz: "Siz ularni kutdingizmi?", a: ['Did you wait for them?', 'Did you wait for them'], why: "**Did** + ega + V1." },
    { k: 'tf', q: '*Were you tired? — Yes, I did.* — javob to\'g\'ri.', a: false, why: "**were** bilan: *Yes, I was.*" },
    { k: 'fix', wrong: 'What you did yesterday?', a: ['What did you do yesterday?'], hint: 'so\'roq tartibi', why: "so'roq so'z + **did** + ega + **do**." },
    { k: 'match', pairs: [['Did you call?', 'Yes, I did.'], ['Were you late?', 'Yes, I was.'], ['Did they win?', "No, they didn't."]] },
    { k: 'choice', q: '___ did you arrive?  — At nine o\'clock.', opts: ['When', 'Where', 'Who', 'Why'], a: 0, why: "Soat haqida so'raymiz: **When**." },
  ],
  summary: [
    "Qisqa javob: **Yes, I did. / No, I didn't.** Asosiy fe'l takrorlanmaydi.",
    "**was / were** savoli: *Yes, it was.* **did** emas.",
    "Wh-savol tartibi: **so'roq so'z + did + ega + V1** (*Where did she go?*).",
    "**did** dan keyin fe'l oddiy shaklda: *go, eat, do* (went, ate, did emas).",
    "To'liq javobda V2: *I went to a café.*",
  ],
  homework: "Do'stingizga kechagi kun haqida 5 ta savol yozing (*What did you do? Where did you go?*) va ularga qisqa va to'liq javob bering.",
};

export default lesson;
