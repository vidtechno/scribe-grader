import type { Lesson } from '../../../types';

// Mini lesson (grammar): Past Simple negatives and questions mixed, with error correction.
const lesson: Lesson = {
  id: 'u9-l12',
  title: 'Past Simple: negatives and questions mixed',
  titleUz: "Past Simple: inkor va savollar aralash mashq",
  mini: true,
  kind: 'grammar',
  goal: "O'tgan zamonda **inkor (didn't + V1)** va **savol (Did + ega + V1?)** ni oddiy ham, noto'g'ri fe'llar bilan ham xatosiz qurasiz va tayyor gapdagi xatoni topib tuzata olasiz: *I didn't see him. Did you buy a ticket?*",
  slides: [
    {
      title: 'Uch gap, bitta qoida',
      blocks: [
        { t: 'p', md: "Ijobiy gapda fe'l **o'tgan shaklda** (V2): *bought, saw, visited*. Inkor va savolda esa **did** o'tgan zamonni o'zi ko'rsatadi, shuning uchun asosiy fe'l **oddiy shaklga (V1)** qaytadi." },
        { t: 'table', head: ['', 'Muntazam fe\'l', "Noto'g'ri fe'l"], speak: [1, 2], rows: [
          ['+', 'She visited her aunt.', 'She bought a ticket.'],
          ['−', "She didn't visit her aunt.", "She didn't buy a ticket."],
          ['?', 'Did she visit her aunt?', 'Did she buy a ticket?'],
          ['Javob', "Yes, she did. / No, she didn't.", "Yes, she did. / No, she didn't."],
        ] },
        { t: 'dialog', lines: [
          { who: 'Laylo', en: 'Did you go to the museum on Sunday?', uz: "Yakshanba kuni muzeyga bordingmi?" },
          { who: 'Bobur', en: "No, I didn't. I lost my wallet, so I stayed at home.", uz: "Yo'q. Hamyonimni yo'qotdim, shuning uchun uyda qoldim." },
          { who: 'Laylo', en: 'Oh no! Did you find it?', uz: "Voy! Topdingmi?" },
          { who: 'Bobur', en: "Yes, I did. It was under my bed, and I didn't see it for two days!", uz: "Ha. U karavotim ostida ekan, ikki kun ko'rmabman!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "\"Men chiptani sotib olmadim.\"", opts: ["I didn't bought a ticket.", "I didn't buy a ticket.", "I not bought a ticket.", "I don't bought a ticket."], a: 1, why: "**didn't + V1**: didn't **buy**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: ikki marta o'tgan zamon",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["I didn't wait for her.", 'Did you take an umbrella?', 'What did you buy?', 'He wasn\'t at home.'] }, bad: { title: "Noto'g'ri", items: ["I didn't waited for her.", 'Did you took an umbrella?', 'What you bought?', "He didn't was at home."] } },
        { t: 'tip', tone: 'warn', md: "**did / didn't** bilan **V2 ishlatmang**: ❌ *didn't went*, ❌ *Did you saw?*. Lekin **was / were** da did kerak emas: *He **wasn't** at home*, *Were you late?*" },
        { t: 'check', ex: { k: 'fix', wrong: 'Did you took an umbrella?', a: ['Did you take an umbrella?'], why: "**Did + V1**: Did you **take**…?" } },
        { t: 'check', ex: { k: 'fill', q: "I ___ answer the phone. (negative)", a: ["didn't", 'did not'], uz: "Men telefonga javob bermadim.", why: "Inkor → **didn't** + V1 (answer)." } },
      ],
    },
    {
      title: 'Xatoni toping',
      blocks: [
        { t: 'p', md: "Tayyor gapni o'qiganda avval so'rang: **bu gapda did / didn't bormi?** Bo'lsa, fe'l **V1** bo'lishi kerak. Yo'q bo'lsa (ijobiy gap), fe'l **V2** bo'lishi kerak." },
        { t: 'examples', items: [
          { en: "I didn't make a mistake.", uz: "Men xato qilmadim." },
          { en: 'Did they correct the answers?', uz: "Ular javoblarni tuzatdilarmi?" },
          { en: 'We waited for an hour, but she didn\'t come.', uz: "Bir soat kutdik, lekin u kelmadi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Which sentence is correct?', opts: ["She didn't came to the party.", 'Did she came to the party?', "She didn't come to the party.", 'She not came to the party.'], a: 2, why: "**didn't + V1**: didn't **come**." } },
      ],
    },
  ],
  words: [
    { en: 'mistake', uz: 'xato', ipa: 'mɪˈsteɪk', pos: 'noun', ex: 'I made a mistake in the test.', exUz: 'Testda xato qildim.' },
    { en: 'wallet', uz: 'hamyon', ipa: 'ˈwɒl.ɪt', pos: 'noun', ex: 'I lost my wallet on the bus.', exUz: "Avtobusda hamyonimni yo'qotdim." },
    { en: 'umbrella', uz: 'soyabon', ipa: 'ʌmˈbrel.ə', pos: 'noun', ex: 'I took an umbrella because it rained.', exUz: "Yomg'ir yog'gani uchun soyabon oldim." },
    { en: 'wait', uz: 'kutmoq', ipa: 'weɪt', pos: 'verb', ex: 'We waited for the bus for ten minutes.', exUz: "Avtobusni o'n daqiqa kutdik." },
    { en: 'answer', uz: 'javob bermoq; javob', ipa: 'ˈɑːn.sə', pos: 'verb', ex: "She didn't answer my message.", exUz: "U xabarimga javob bermadi." },
    { en: 'correct', uz: "to'g'ri; tuzatmoq", ipa: 'kəˈrekt', pos: 'adjective', ex: 'Your answer is correct.', exUz: "Javobingiz to'g'ri." },
  ],
  practice: [
    { k: 'choice', q: "She ___ her phone yesterday.", opts: ["didn't buy", "didn't bought", "doesn't buy", "not buy"], a: 0, why: "O'tgan zamon inkori → **didn't + V1**." },
    { k: 'fill', q: 'Did you ___ the answer? (know)', a: ['know'], uz: 'Javobni bildingmi?', why: "**Did** dan keyin V1." },
    { k: 'fix', wrong: "We didn't went to the museum.", a: ["We didn't go to the museum.", 'We did not go to the museum.'], why: "**didn't** dan keyin **go**." },
    { k: 'order', uz: 'Sen soyabon oldingmi?', words: ['Did', 'you', 'take', 'an', 'umbrella'], extra: ['took', 'do'] },
    { k: 'translate', uz: "Men hamyonimni topa olmadim, shuning uchun uyga ketdim.", a: ["I didn't find my wallet, so I went home.", "I did not find my wallet, so I went home.", "I didn't find my wallet so I went home."], why: "**didn't find** (V1), ijobiy qismda **went** (V2)." },
    { k: 'match', pairs: [['mistake', 'xato'], ['wallet', 'hamyon'], ['umbrella', 'soyabon'], ['wait', 'kutmoq'], ['answer', 'javob bermoq']] },
    { k: 'tf', q: "*Did you saw Bobur yesterday?* — gap to'g'ri.", a: false, why: "To'g'risi: *Did you **see** Bobur yesterday?*" },
    { k: 'listen', say: "He didn't wait for us.", opts: ["He didn't wait for us.", 'He waited for us.', 'Did he wait for us?', "He doesn't wait for us."], a: 0 },
    { k: 'dictation', say: 'Did you make a mistake?', a: ['Did you make a mistake?'] },
    { k: 'fix', wrong: 'What you bought yesterday?', a: ['What did you buy yesterday?'], why: "Savol: **What + did + you + V1**." },
    { k: 'fill', q: "A: Did she answer your message? B: No, she ___.", a: ["didn't", 'did not'], uz: "Yo'q, javob bermadi.", why: "Qisqa javob: **No, she didn't.**" },
    { k: 'speak', say: "I didn't make a mistake.", uz: 'Men xato qilmadim.' },
  ],
  quiz: [
    { k: 'choice', q: '___ they wait for you?', opts: ['Do', 'Did', 'Was', 'Does'], a: 1, why: "O'tgan zamon savoli → **Did**." },
    { k: 'fill', q: "I ___ see him at school. (negative)", a: ["didn't", 'did not'] },
    { k: 'order', uz: 'Ular nima sotib olishdi?', words: ['What', 'did', 'they', 'buy'], extra: ['bought', 'do'] },
    { k: 'translate', uz: "U xatoni tuzatmadi.", a: ["He didn't correct the mistake.", 'He did not correct the mistake.', "She didn't correct the mistake.", 'She did not correct the mistake.'] },
    { k: 'fix', wrong: "Did she took the umbrella?", a: ['Did she take the umbrella?'], why: "**Did + V1**." },
    { k: 'tf', q: "*He didn't was at home.* — to'g'ri gap.", a: false, why: "**was / were** bilan did ishlatilmaydi: *He wasn't at home.*" },
    { k: 'match', pairs: [['mistake', 'xato'], ['wallet', 'hamyon'], ['umbrella', 'soyabon'], ['correct', "to'g'ri"]] },
    { k: 'choice', q: 'Did you answer the phone? — ...', opts: ["No, I didn't.", "No, I didn't answered.", 'No, I not.', "No, I don't."], a: 0 },
  ],
  summary: [
    "Ijobiy gap: **V2** (bought, visited). Inkor: **didn't + V1**. Savol: **Did + ega + V1?**",
    "Qisqa javob: **Yes, I did. / No, I didn't.**",
    "**did / didn't** dan keyin hech qachon V2 qo'ymang: ❌ *didn't went*, ❌ *Did you saw?*",
    "**was / were** bilan did kerak emas: *He wasn't at home. Were you late?*",
    "Yangi so'zlar: **mistake, wallet, umbrella, wait, answer, correct**.",
  ],
  homework: "Kechagi kuningiz haqida 3 ta inkor (*I didn't…*) va 3 ta savol (*Did you…?*) yozing. Har birini ovoz chiqarib o'qing va fe'l V1 ekanini tekshiring.",
};

export default lesson;
