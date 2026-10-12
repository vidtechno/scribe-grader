import type { Lesson } from '../../../types';

// Mini lesson (grammar/pronunciation): the three sounds of -ed. Regular verbs only.
const lesson: Lesson = {
  id: 'u5-l14',
  title: '-ed: pronunciation',
  titleUz: '-ed talaffuzi: /t/, /d/, /ɪd/',
  mini: true,
  goal: "**-ed** ni to'g'ri talaffuz qilasiz: *worked* (/t/), *played* (/d/), *wanted* (/ɪd/). Eshitib qaysi tovush ekanini ajratasiz.",
  slides: [
    {
      title: 'Uch xil tovush',
      blocks: [
        { t: 'p', md: "Yozilishi bir xil — **-ed**, lekin o'qilishi **uch xil**. Ko'pchilik o'quvchi hamma joyda \"ed\" deb o'qiydi. Bu xato: *worked* \"work-ed\" emas!" },
        { t: 'sounds', items: [
          { label: '/t/', say: 'worked', uz: "Oxirida qisqa **t**: \"vorkT\". Qo'shimcha bo'g'in yo'q.", examples: ['worked', 'walked', 'washed', 'jumped'] },
          { label: '/d/', say: 'played', uz: "Oxirida qisqa **d**: \"pleyD\". Qo'shimcha bo'g'in yo'q.", examples: ['played', 'called', 'cleaned', 'stayed'] },
          { label: '/ɪd/', say: 'wanted', uz: "Alohida bo'g'in **-id**: \"vont-id\". Faqat shu holda so'z bir bo'g'inga uzayadi.", examples: ['wanted', 'started', 'needed', 'visited'] },
        ] },
        { t: 'check', ex: { k: 'listen', say: 'walked', opts: ['walked', 'wanted', 'waited', 'washed'], a: 0, why: "\"vokT\" — **walked**, oxiri qisqa /t/." } },
      ],
    },
    {
      title: 'Qaysi tovush qachon?',
      blocks: [
        { t: 'p', md: "Qoida **fe'lning oxirgi tovushiga** bog'liq (yozilishiga emas)." },
        { t: 'table', head: ["Fe'lning oxiri", '-ed tovushi', 'Misol'], speak: [2], rows: [
          ['jarangsiz tovush: p, k, f, s, sh, ch', '/t/', 'jumped, worked, washed, watched'],
          ['jarangli tovush yoki unli: l, n, m, v, y, b', '/d/', 'played, called, cleaned, stayed, opened'],
          ['t yoki d', '/ɪd/ (yangi bo\'g\'in)', 'wanted, started, needed, invited'],
        ] },
        { t: 'tip', tone: 'good', md: "Oson yo'l: avval **t** yoki **d** bilan tugaydimi, qarang. Ha bo'lsa — **/ɪd/**. Yo'q bo'lsa, ko'pchiligi **/d/**, faqat *p, k, f, s, sh, ch* dan keyin **/t/**." },
        { t: 'check', ex: { k: 'choice', q: '**started** da -ed qanday o\'qiladi?', say: 'started', opts: ['/t/', '/d/', '/ɪd/'], a: 2, why: "*start* **t** bilan tugaydi → alohida bo'g'in **/ɪd/**: \"start-id\"." } },
      ],
    },
    {
      title: 'Eshiting va ajrating',
      blocks: [
        { t: 'examples', items: [
          { en: 'I worked all day.', uz: 'Men kun bo\'yi ishladim.', note: '/t/ — bir bo\'g\'in' },
          { en: 'We played in the park.', uz: "Biz bog'da o'ynadik.", note: '/d/ — bir bo\'g\'in' },
          { en: 'She wanted some tea.', uz: 'U choy xohladi.', note: '/ɪd/ — ikki bo\'g\'in' },
          { en: 'They visited the museum.', uz: 'Ular muzeyga borishdi.', note: '/ɪd/ — vi-si-tid' },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['worked = "workt"', 'played = "pleyd"', 'wanted = "want-id"'] },
          bad: { title: "Noto'g'ri", items: ['worked = "work-id"', 'played = "play-id"', 'wanted = "wantt"'] } },
        { t: 'check', ex: { k: 'choice', q: '**cleaned** da -ed qanday o\'qiladi?', say: 'cleaned', opts: ['/t/', '/d/', '/ɪd/'], a: 1, why: "*clean* **n** (jarangli) bilan tugaydi → **/d/**: \"klinD\"." } },
        { t: 'check', ex: { k: 'listen', say: 'She waited for me.', opts: ['She waited for me.', 'She worked for me.', 'She asked for me.', 'She called for me.'], a: 0, why: "\"weyt-id\" — ikki bo'g'in, **waited**." } },
      ],
    },
  ],
  words: [
    { en: 'walk', uz: "yurmoq, piyoda bormoq", ipa: 'wɔːk', pos: 'verb', ex: 'We walked to the park.', exUz: "Biz bog'ga piyoda bordik." },
    { en: 'jump', uz: 'sakramoq', ipa: 'dʒʌmp', pos: 'verb', ex: 'The boy jumped over the box.', exUz: 'Bola qutidan sakrab o\'tdi.' },
    { en: 'answer', uz: 'javob bermoq', ipa: 'ˈɑːn.sər', pos: 'verb', ex: 'She answered the phone.', exUz: 'U telefonga javob berdi.' },
    { en: 'invite', uz: 'taklif qilmoq', ipa: 'ɪnˈvaɪt', pos: 'verb', ex: 'I invited my friends.', exUz: "Men do'stlarimni taklif qildim." },
    { en: 'paint', uz: 'bo\'yamoq, rasm chizmoq', ipa: 'peɪnt', pos: 'verb', ex: 'He painted the door.', exUz: "U eshikni bo'yadi." },
    { en: 'wash', uz: 'yuvmoq', ipa: 'wɒʃ', pos: 'verb', ex: 'She washed the cups.', exUz: 'U finjonlarni yuvdi.' },
  ],
  practice: [
    { k: 'listen', say: 'played', opts: ['played', 'planned', 'placed', 'paid'], a: 0, why: "\"pleyd\" — **played**." },
    { k: 'choice', q: '**washed** da -ed:', say: 'washed', opts: ['/t/', '/d/', '/ɪd/'], a: 0, why: "*wash* **sh** (jarangsiz) bilan tugaydi → **/t/**." },
    { k: 'choice', q: '**invited** da -ed:', say: 'invited', opts: ['/t/', '/d/', '/ɪd/'], a: 2, why: "*invite* **t** bilan tugaydi → **/ɪd/**: \"invait-id\"." },
    { k: 'match', pairs: [['worked', '/t/'], ['stayed', '/d/'], ['needed', '/ɪd/']] },
    { k: 'listen', say: 'We started at nine.', opts: ['We started at nine.', 'We stopped at nine.', 'We stayed at nine.', 'We studied at nine.'], a: 0, why: "\"start-id\" — **started** (ikki bo'g'in)." },
    { k: 'dictation', say: 'She painted the door.', a: ['She painted the door.', 'She painted the door'], uz: "U eshikni bo'yadi.", why: "**painted** — /ɪd/." },
    { k: 'tf', q: '**walked** da -ed alohida bo\'g\'in (walk-id) bo\'lib o\'qiladi.', a: false, why: "*walk* **k** bilan tugaydi → **/t/**, bir bo'g'in: \"vokT\"." },
    { k: 'tf', q: '**wanted** ikki bo\'g\'inli so\'z.', a: true, why: "*want* **t** bilan tugaydi → **-ed** = /ɪd/ (want-id)." },
    { k: 'choice', q: "Qaysi so'zdagi -ed boshqalardan farq qiladi (alohida bo'g'in)?", opts: ['worked', 'jumped', 'visited', 'cleaned'], a: 2, why: "*visited* — **/ɪd/**, boshqalari /t/ yoki /d/." },
    { k: 'dictation', say: 'He answered the phone.', a: ['He answered the phone.', 'He answered the phone'], uz: 'U telefonga javob berdi.', why: "**answered** — /d/." },
    { k: 'fill', q: 'She ___ her face. (wash)', a: ['washed'], uz: 'U yuzini yuvdi.', why: "*wash* + ed = **washed** (\"voshT\")." },
    { k: 'speak', say: 'I walked and she played.', uz: "Men yurdim, u o'ynadi." },
    { k: 'speak', say: 'We wanted tea and started work.', uz: 'Biz choy xohladik va ishni boshladik.' },
  ],
  quiz: [
    { k: 'listen', say: 'He called me.', opts: ['He called me.', 'He cooked me.', 'He carried me.', 'He cleaned me.'], a: 0 },
    { k: 'choice', q: '**jumped** da -ed:', say: 'jumped', opts: ['/t/', '/d/', '/ɪd/'], a: 0, why: "*jump* **p** bilan tugaydi → **/t/**." },
    { k: 'choice', q: '**stayed** da -ed:', say: 'stayed', opts: ['/t/', '/d/', '/ɪd/'], a: 1, why: "*stay* unli bilan tugaydi → **/d/**." },
    { k: 'match', pairs: [['wanted', '/ɪd/'], ['walked', '/t/'], ['played', '/d/']] },
    { k: 'dictation', say: 'We watched a film.', a: ['We watched a film.', 'We watched a film'], uz: 'Biz film ko\'rdik.' },
    { k: 'tf', q: '**played** — "play-id" deb o\'qiladi.', a: false, why: "To'g'ri: \"pleyd\", /d/." },
    { k: 'choice', q: '**needed** da nechta bo\'g\'in bor?', opts: ['1', '2', '3'], a: 1, why: "*need* **d** bilan tugaydi → /ɪd/: need-id, 2 bo'g'in." },
    { k: 'fix', wrong: 'She walkd to school.', a: ['She walked to school.'], hint: 'imlo', why: "O'qilishi /t/, lekin yozilishi doim **-ed**: *walked*." },
  ],
  summary: [
    "**-ed** uch xil o'qiladi: **/t/**, **/d/**, **/ɪd/**.",
    "**p, k, f, s, sh, ch** dan keyin **/t/**: *worked, washed, jumped*.",
    "Jarangli tovush va unlidan keyin **/d/**: *played, cleaned, stayed*.",
    "**t** yoki **d** dan keyin **/ɪd/** (qo'shimcha bo'g'in): *wanted, needed, invited*.",
    "Faqat /ɪd/ da so'z bo'g'inga uzayadi. *worked* — \"work-id\" emas!",
  ],
  homework: "Har kuni 5 ta fe'lni ovoz chiqarib ayting va ular qaysi guruhga kirishini yozing: *walked /t/, played /d/, wanted /ɪd/.*",
};

export default lesson;
