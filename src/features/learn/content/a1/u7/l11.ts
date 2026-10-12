import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u7. Recycles Beginner words (family, home, food, days).
const lesson: Lesson = {
  id: 'u7-l11',
  title: 'Work and free time: final review',
  titleUz: "Ish va bo'sh vaqt: yakuniy takror",
  mini: true,
  goal: "7-bo'limni takrorlaysiz: **kasblar, like + -ing, ravishlar, play / go / do, rejalar, would like, soat va jadval, How often / How long**. Hammasini bitta matnda ko'rasiz.",
  slides: [
    {
      title: 'Bir haftalik matn',
      blocks: [
        { t: 'text', title: "Dilnoza's week", en: "Dilnoza is a chef in a hotel. She works hard from nine to five, and she cooks quickly and carefully. She loves cooking, but she hates washing up. Her colleagues are friendly.\nHow often does she play sport? She goes swimming twice a week, and on Sundays she plays tennis with her brother. She does yoga every morning.\nThis weekend she's busy. On Saturday she's meeting a friend, and in the evening they're going to the cinema. The film starts at seven and finishes at nine. On Sunday she'd like to relax at home.", uz: "Dilnoza mehmonxonada oshpazlik qiladi. U to'qqizdan beshgacha qattiq ishlaydi, tez va ehtiyotkorlik bilan pishiradi. U ovqat pishirishni yaxshi ko'radi, lekin idish yuvishni yomon ko'radi. Hamkasblari mehribon.\nU qanchalik tez-tez sport bilan shug'ullanadi? Haftada ikki marta suzishga boradi, yakshanba kuni akasi bilan tennis o'ynaydi. Har ertalab yoga qiladi.\nBu hafta oxirida u band. Shanba kuni do'sti bilan uchrashadi, kechqurun kinoga borishadi. Film yettida boshlanib, to'qqizda tugaydi. Yakshanba kuni u uyda dam olishni xohlaydi." },
        { t: 'check', ex: { k: 'tf', q: "Dilnoza hates cooking.", a: false, why: "U **loves cooking**, lekin **hates washing up**." } },
        { t: 'check', ex: { k: 'choice', q: 'How often does Dilnoza go swimming?', opts: ['Twice a week', 'Every day', 'Never', 'Once a year'], a: 0 } },
      ],
    },
    {
      title: "Bo'lim qoidalari: qisqacha",
      blocks: [
        { t: 'table', head: ['Mavzu', 'Namuna'], speak: [1], rows: [
          ['like / love / hate + -ing', 'I love dancing.'],
          ['ravish (fe\'ldan keyin)', 'She works hard and speaks well.'],
          ['play / go / do', 'play tennis, go swimming, do yoga'],
          ['reja: Present Continuous', "I'm meeting Aziz tomorrow."],
          ['would like to', "Would you like to come? — I'd love to!"],
          ['vaqt', 'from nine to five; until six; before / after lunch'],
          ['How often / How long', 'Twice a week. / It takes ten minutes.'],
        ] },
        { t: 'tip', tone: 'info', md: "**play** + jamoa o'yini (*play football*), **go** + -ing (*go swimming*), **do** + yakka mashq (*do yoga*)." },
        { t: 'check', ex: { k: 'choice', q: 'She ___ yoga every morning.', opts: ['plays', 'goes', 'does', 'makes'], a: 2, why: "**do yoga**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['She speaks English well.', 'I enjoy swimming.', "I'm meeting him on Friday.", 'Would you like to come?'] }, bad: { title: "Noto'g'ri", items: ['She speaks English good.', 'I enjoy to swim.', 'I meet him on Friday (reja).', 'Would you like come?'] } },
        { t: 'check', ex: { k: 'fix', wrong: 'He drives very fast and careful.', a: ['He drives very fast and carefully.'], why: "Fe'lni **carefully** (ravish) tasvirlaydi." } },
      ],
    },
  ],
  words: [
    { en: 'colleague', uz: 'hamkasb', ipa: 'ˈkɒl.iːɡ', pos: 'noun', ex: 'My colleagues are very friendly.', exUz: 'Hamkasblarim juda mehribon.' },
    { en: 'busy', uz: 'band', ipa: 'ˈbɪz.i', pos: 'adjective', ex: "I'm busy on Saturday.", exUz: 'Shanba kuni bandman.' },
    { en: 'enough', uz: 'yetarli', ipa: 'ɪˈnʌf', pos: 'adjective', ex: 'I have enough time.', exUz: 'Menda vaqt yetarli.' },
    { en: 'finish', uz: 'tugatmoq, tugamoq', ipa: 'ˈfɪn.ɪʃ', pos: 'verb', ex: 'The film finishes at nine.', exUz: "Film to'qqizda tugaydi." },
  ],
  practice: [
    { k: 'choice', q: 'My sister is a ___. She cooks in a restaurant.', opts: ['chef', 'pilot', 'dentist', 'mechanic'], a: 0 },
    { k: 'fill', q: 'I love ___ in the park. (walk)', a: ['walking'], uz: "Men bog'da sayr qilishni yaxshi ko'raman.", why: "**love + -ing**." },
    { k: 'order', uz: 'U ingliz tilida yaxshi gapiradi.', words: ['She', 'speaks', 'English', 'well'], extra: ['good', 'speak'] },
    { k: 'translate', uz: 'Qanchalik tez-tez tennis o\'ynaysiz?', a: ['How often do you play tennis?'] },
    { k: 'match', pairs: [['colleague', 'hamkasb'], ['busy', 'band'], ['finish', 'tugatmoq'], ['enough', 'yetarli'], ['timetable', 'jadval']] },
    { k: 'tf', q: "*I enjoy to swim.* — gap to'g'ri.", a: false, why: "**enjoy swimming**." },
    { k: 'listen', say: "I'm meeting my friend at six.", opts: ["I'm meeting my friend at six.", 'I meet my friend at six.', "I'm meeting my family at six.", "I'm eating with my friend at six."], a: 0 },
    { k: 'dictation', say: 'The film finishes at nine.', a: ['The film finishes at nine.'] },
    { k: 'fix', wrong: 'She plays yoga on Monday.', a: ['She does yoga on Monday.'], why: "**do yoga**." },
    { k: 'fill', q: 'How ___ does the journey take? — Two hours.', a: ['long'], uz: "Safar qancha vaqt oladi?", why: "Davomiylik: **How long**." },
    { k: 'choice', q: 'The shop is open ___ nine ___ six.', opts: ['from … to', 'at … in', 'on … at', 'since … for'], a: 0 },
    { k: 'speak', say: "I'd love to, but I'm busy on Saturday.", uz: "Mamnuniyat bilan, lekin shanba kuni bandman." },
  ],
  quiz: [
    { k: 'choice', q: 'We ___ swimming every Friday.', opts: ['go', 'play', 'do', 'make'], a: 0 },
    { k: 'fill', q: 'He works ___ . (hard)', a: ['hard'], why: "**hard** — ravish ham, sifat ham bir xil." },
    { k: 'order', uz: 'Biz ertaga kinoga boryapmiz.', words: ['We', 'are', 'going', 'to', 'the', 'cinema', 'tomorrow'], extra: ['go', 'is'] },
    { k: 'translate', uz: "Men oshpazman. Men mehmonxonada ishlayman.", a: ["I'm a chef. I work in a hotel.", 'I am a chef. I work in a hotel.'] },
    { k: 'tf', q: "*Would you like a coffee?* — taklif.", a: true },
    { k: 'fix', wrong: 'Would you like going out?', a: ['Would you like to go out?'], why: "**would like to** + fe'l." },
    { k: 'match', pairs: [['father', 'ota'], ['kitchen', 'oshxona'], ['Monday', 'dushanba'], ['bread', 'non']] },
    { k: 'choice', q: '"How often do you go to the gym?" — ...', opts: ['Three times a week.', 'For three hours.', 'Three kilometres.', 'At three.'], a: 0 },
  ],
  summary: [
    "**like / love / hate / enjoy + -ing**; ravish fe'ldan keyin: *works hard, speaks well*.",
    "**play** jamoa o'yini, **go + -ing**, **do** yakka mashq; reja — **am / is / are + -ing**.",
    "**Would you like to…? — I'd love to. / I'm afraid I can't.**",
    "**How often…? — twice a week. How long…? — two hours.** Vaqt: *from… to, until, before, after*.",
  ],
  homework: "O'zingizning haftangiz haqida 5 gapli matn yozing: kasb, hobbi, tez-tezlik, hafta oxiri rejasi.",
};

export default lesson;
