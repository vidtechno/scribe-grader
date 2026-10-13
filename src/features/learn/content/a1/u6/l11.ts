import type { Lesson } from '../../../types';

// Mini lesson (review): whole unit u6. Recycles older words (family, tea, house, ...).
const lesson: Lesson = {
  id: 'u6-l11',
  title: 'People and places: final review',
  titleUz: 'Odamlar va joylar: yakuniy takror',
  mini: true,
  goal: "Bo'lim bo'yicha **yakuniy takror**: tanishuv, odamlarni tasvirlash, xarakter, **mine / yours / Whose?**, tartib sonlar va sanalar, uy, yo'l so'rash va **a / an / the**.",
  slides: [
    {
      title: "Takror: suhbatda hammasi",
      blocks: [
        { t: 'p', md: "Quyidagi suhbatda bo'limdagi deyarli hamma mavzu bor. O'qing va nimalar uchraganini toping." },
        { t: 'dialog', lines: [
          { who: 'Mia', en: "Hi, I'm Mia. Is this your bag?", uz: "Salom, men Miyaman. Bu sizning sumkangizmi?" },
          { who: 'Ben', en: "No, it isn't mine. Whose is it? Maybe it's Anna's.", uz: "Yo'q, meniki emas. Kimniki ekan? Balki Annaniki." },
          { who: 'Mia', en: 'What does Anna look like?', uz: "Anna qanday ko'rinishda?" },
          { who: 'Ben', en: "She's slim, with straight fair hair. She's very friendly, but a bit shy.", uz: "U ozg'in, och rangli tekis sochli. U juda xushmuomala, lekin biroz uyatchan." },
          { who: 'Mia', en: 'When is her birthday?', uz: "Uning tug'ilgan kuni qachon?" },
          { who: 'Ben', en: "On the third of May! We have a party in her flat. It's near the post office. Turn left at the traffic lights.", uz: "3-mayda! Biz uning xonadonida ziyofat qilamiz. U pochtaning yaqinida. Svetoforda chapga buriling." },
        ] },
        { t: 'check', ex: { k: 'choice', q: '"It isn\'t ___." (bu mening sumkam emas)', opts: ['my', 'mine', 'me', 'I'], a: 1, why: "Ot ishtirok etmasa — **mine**; ot bilan — **my bag**." } },
      ],
    },
    {
      title: "Qoidalar bir qarashda",
      blocks: [
        { t: 'table', head: ['Mavzu', 'Misol'], speak: [1], rows: [
          ['Ko\'rinish', 'What does he look like? He has a beard and glasses.'],
          ['Xarakter', "She's really polite. He's quite lazy."],
          ['Egalik', "It's mine. / It's hers. / Whose is this?"],
          ['Tartib son / sana', 'the second of June, the twenty-first century'],
          ['Uy', 'My flat has a balcony and a small kitchen.'],
          ["Yo'l", 'Go straight on and take the second left.'],
          ['Artikl', 'a book, an apple, the sun, I like music.'],
        ] },
        { t: 'tip', tone: 'info', md: "**a** — undosh tovushdan oldin, **an** — unli tovushdan oldin, **the** — aniq narsa. Umumiy gaplarda artikl yo'q: *I like tea.*" },
        { t: 'check', ex: { k: 'fill', q: 'She has ___ umbrella.', a: ['an'], uz: 'Uning soyaboni bor.', why: "*umbrella* unli tovushdan boshlanadi — **an**." } },
      ],
    },
    {
      title: "Eng ko'p uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ["It's my book. It's mine.", 'Whose bag is this?', 'My birthday is on the fifth of May.'] }, bad: { title: "Noto'g'ri", items: ["It's mine book.", 'Who bag is this?', 'My birthday is on the five of May.'] } },
        { t: 'p', md: "Eslatma: **very / quite / really** sifatdan oldin turadi (*quite shy*). **look like** — ko'rinish, **be** — xarakter. Yo'l so'rash: **How do I get to…?**" },
        { t: 'check', ex: { k: 'choice', q: 'Which is correct?', opts: ['Whose is this scarf?', 'Who is this scarf?', 'Whose this scarf is?', 'What is scarf?'], a: 0, why: "Egalik haqida so'rash: **Whose + is…?**" } },
      ],
    },
  ],
  words: [
    { en: 'describe', uz: 'tasvirlamoq', ipa: 'dɪˈskraɪb', pos: 'verb', ex: 'Can you describe your sister?', exUz: 'Opangizni tasvirlab bera olasizmi?' },
    { en: 'twin', uz: 'egizak', ipa: 'twɪn', pos: 'noun', ex: 'I have a twin brother.', exUz: 'Mening egizak akam bor.' },
    { en: 'tidy', uz: 'ozoda, tartibli', ipa: 'ˈtaɪ.di', pos: 'adjective', ex: 'My room is always tidy.', exUz: 'Mening xonam doim ozoda.' },
    { en: 'honest', uz: 'halol, rostgo\'y', ipa: 'ˈɒn.ɪst', pos: 'adjective', ex: 'He is an honest man.', exUz: 'U halol odam.' },
    { en: 'cheerful', uz: 'quvnoq, xushchaqchaq', ipa: 'ˈtʃɪə.fəl', pos: 'adjective', ex: 'My neighbour is always cheerful.', exUz: 'Qo\'shnim doim quvnoq.' },
  ],
  practice: [
    { k: 'choice', q: '___ phone is this? — It\'s Tom\'s.', opts: ['Who', 'Whose', 'What', 'Which is'], a: 1, why: "Egalik: **Whose**." },
    { k: 'fill', q: "This is my pen, and that one is ___ . (sizniki)", a: ['yours'], uz: "Bu mening qalamim, anavi esa sizniki.", why: "Ot yo'q — **yours**." },
    { k: 'order', uz: "Uning tug'ilgan kuni uchinchi martda.", words: ['His', 'birthday', 'is', 'on', 'the', 'third', 'of', 'March'], extra: ['three', 'in'] },
    { k: 'translate', uz: 'U ancha uyatchan.', a: ["She's quite shy.", 'She is quite shy.', "He's quite shy.", 'He is quite shy.'] },
    { k: 'match', pairs: [['describe', 'tasvirlamoq'], ['twin', 'egizak'], ['tidy', 'ozoda'], ['honest', 'halol'], ['balcony', 'balkon']] },
    { k: 'tf', q: "*I like the tea.* va *I like tea.* — umuman choyni yoqtirish uchun ikkalasi ham bir xil.", a: false, why: "Umumiy ma'no: **I like tea.** (artiklsiz)." },
    { k: 'listen', say: 'Whose is this charger?', opts: ['Whose is this charger?', 'Who is this charger?', 'Whose is that scarf?', 'Where is this charger?'], a: 0 },
    { k: 'dictation', say: 'Turn left at the traffic lights.', a: ['Turn left at the traffic lights.'] },
    { k: 'fix', wrong: 'I have a apple and a orange.', a: ['I have an apple and an orange.'], why: "Unli tovush oldidan **an**." },
    { k: 'fill', q: 'My mother is ___ nice. (very)', a: ['very', 'really'], uz: 'Onam juda yaxshi.', why: "**very** — juda." },
    { k: 'speak', say: 'My sister has long straight hair and she is very friendly.', uz: 'Opamning uzun tekis sochlari bor va u juda xushmuomala.' },
  ],
  quiz: [
    { k: 'choice', q: 'The ___ of July is a Sunday. (7)', opts: ['seven', 'seventh', 'sevenst', 'seveth'], a: 1 },
    { k: 'fill', q: "Is this your coat? — Yes, it's ___ .", a: ['mine'], why: "Ot yo'q — **mine**." },
    { k: 'order', uz: "Bu yerga yaqin bank bormi?", words: ['Is', 'there', 'a', 'bank', 'near', 'here'], extra: ['are', 'the'] },
    { k: 'translate', uz: 'Mening xonamda shkaf bor.', a: ['There is a wardrobe in my room.', "There's a wardrobe in my room.", 'My room has a wardrobe.'] },
    { k: 'tf', q: "*Turn left at the corner* — chapga burilish.", a: true },
    { k: 'fix', wrong: 'He is a honest man.', a: ['He is an honest man.', "He's an honest man."], why: "*honest* unli tovush bilan boshlanadi (h aytilmaydi): **an honest**." },
    { k: 'match', pairs: [['friendly', 'xushmuomala'], ['shy', 'uyatchan'], ['lazy', 'dangasa'], ['polite', 'odobli']] },
    { k: 'choice', q: 'We have dinner in ___ kitchen. (aniq oshxona)', opts: ['a', 'an', 'the', 'no article'], a: 2 },
  ],
  summary: [
    "Tanishuv va tasvir: **What does she look like?** — *She has…*; xarakter — *She's quite shy.*",
    "Egalik: **my → mine, your → yours**, savol: **Whose…?** Sana: **the third of May**.",
    "Yo'l: **How do I get to…? Go straight on, turn left.** Artikl: **a / an / the** yoki hech narsa.",
  ],
  homework: "O'zingiz va oila a'zongiz haqida 5 ta gap yozing: ko'rinish, xarakter, tug'ilgan kun va uy.",
};

export default lesson;
