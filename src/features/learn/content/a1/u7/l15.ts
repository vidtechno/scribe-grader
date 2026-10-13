import type { Lesson } from '../../../types';

// Mini lesson (skill): reading short profiles and writing your own.
const lesson: Lesson = {
  id: 'u7-l15',
  title: 'Reading and writing: a profile of me',
  titleUz: "O'qish va yozish: o'zim haqimda profil",
  mini: true,
  kind: 'skill',
  goal: "Odamlarning **ishi va hobbisi** haqidagi qisqa profillarni o'qib tushunasiz va **o'zingiz haqingizda** 5–6 gapdan iborat profil yozasiz.",
  slides: [
    {
      title: "O'qing: ikkita profil",
      blocks: [
        { t: 'text', title: 'Profile 1: Nodira', en: "My name is Nodira. I'm a student, and I also have a part-time job in a bookshop. I work there three times a week. I like my job because I love books. In my spare time I enjoy cooking, and I go swimming on Sundays. This weekend I'm visiting my grandmother in Samarkand.", uz: "Mening ismim Nodira. Men talabaman va kitob do'konida yarim kunlik ishlayman. U yerda haftada uch marta ishlayman. Ishim yoqadi, chunki kitoblarni yaxshi ko'raman. Bo'sh vaqtimda ovqat pishirishni yoqtiraman, yakshanba kunlari suzishga boraman. Bu hafta oxirida Samarqandda buvimnikiga boraman." },
        { t: 'check', ex: { k: 'choice', q: 'Where does Nodira work?', opts: ['in a bookshop', 'in a hotel', 'in a factory', 'in a school'], a: 0, why: "*part-time job in a bookshop.*" } },
        { t: 'text', title: 'Profile 2: Carlos', en: "Hi! I'm Carlos. I'm a driver for a big company. I start early, at six, but I finish at two. I'm not a fast driver, but I drive carefully. I like both my job and my car, but the roads are very busy! My hobby is photography. Next month I'm taking photos at my brother's wedding.", uz: "Salom! Men Karlosman. Katta kompaniyada haydovchiman. Erta, oltida boshlayman, lekin ikkida tugataman. Men tez haydovchi emasman, lekin ehtiyotkorlik bilan haydayman. Ishimni ham, mashinamni ham yaxshi ko'raman, lekin yo'llar juda band! Hobbim — suratga olish. Kelasi oy akamning to'yida surat olaman." },
        { t: 'check', ex: { k: 'tf', q: 'Carlos finishes work at six.', a: false, why: "*I start early, at six, but I finish at two.*" } },
        { t: 'check', ex: { k: 'choice', q: "What is Carlos doing next month?", opts: ["He's taking photos at a wedding.", "He's starting a new job.", "He's visiting his grandmother.", "He's swimming."], a: 0, why: "*Next month I'm taking photos at my brother's wedding.*" } },
      ],
    },
    {
      title: 'Yozing: o‘z profilingiz',
      blocks: [
        { t: 'table', head: ['Qism', 'Namuna gap'], speak: [1], rows: [
          ['1. Ism va kasb', "My name is Dina. I'm a nurse."],
          ['2. Ish joyi', 'I work in a hospital.'],
          ["3. Hobbi", 'I love cycling, and I sometimes go swimming.'],
          ['4. Reja', "This weekend I'm meeting my friends."],
        ] },
        { t: 'tip', tone: 'good', md: "Gaplarni **also**, **and**, **but** bilan bog'lang: *I'm a student, and I also work part-time.* **Sometimes** — \"ba'zan\"; fe'ldan oldin keladi." },
        { t: 'compare', good: { title: "To'g'ri", items: ["I'm a student.", 'I also work part-time.', 'I like reading books.'] }, bad: { title: "Noto'g'ri", items: ['I student.', 'I work also part-time.', 'I like read books.'] } },
        { t: 'check', ex: { k: 'fix', wrong: 'I love swim.', a: ['I love swimming.'], why: "**love + fe'l-ing**." } },
      ],
    },
    {
      title: 'Tekshiring: yozishdan oldin',
      blocks: [
        { t: 'p', md: "Profilingizni yozgach, 3 narsani tekshiring: **1)** har bir gapda fe'l bor, **2)** *like / love* dan keyin **-ing**, **3)** rejada **am / is / are**." },
        { t: 'examples', items: [
          { en: "My name is Dina. I'm a nurse in a hospital.", uz: "Mening ismim Dina. Men kasalxonada hamshiraman." },
          { en: 'I love cycling, and I sometimes go swimming.', uz: "Velosiped haydashni yaxshi ko'raman, ba'zan suzishga boraman." },
          { en: "This weekend I'm meeting my friends.", uz: 'Bu hafta oxirida do‘stlarim bilan uchrashaman.' },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Choose the correct sentence.', opts: ["I'm meeting my friends tomorrow.", 'I meeting my friends tomorrow.', 'I am meet my friends tomorrow.', 'I meets my friends tomorrow.'], a: 0, why: "Reja: **am + fe'l-ing**." } },
      ],
    },
  ],
  words: [
    { en: 'profile', uz: 'profil, qisqa tavsif', ipa: 'ˈprəʊ.faɪl', pos: 'noun', ex: 'Write a short profile of yourself.', exUz: "O'zingiz haqingizda qisqa profil yozing." },
    { en: 'company', uz: 'kompaniya', ipa: 'ˈkʌm.pə.ni', pos: 'noun', ex: 'He works for a big company.', exUz: 'U katta kompaniyada ishlaydi.' },
    { en: 'photography', uz: 'suratga olish', ipa: 'fəˈtɒɡ.rə.fi', pos: 'noun', ex: 'My hobby is photography.', exUz: 'Hobbim — suratga olish.' },
    { en: 'both', uz: 'ikkalasi ham', ipa: 'bəʊθ', pos: 'determiner', ex: 'I like both tea and coffee.', exUz: 'Menga ham choy, ham qahva yoqadi.' },
    { en: 'full-time', uz: "to'liq kunlik", ipa: 'ˌfʊl ˈtaɪm', pos: 'adjective', ex: 'He has a full-time job.', exUz: "Uning to'liq kunlik ishi bor." },
    { en: 'bookshop', uz: "kitob do'koni", ipa: 'ˈbʊk.ʃɒp', pos: 'noun', ex: 'There is a bookshop near my office.', exUz: "Ofisim yaqinida kitob do'koni bor." },
  ],
  practice: [
    { k: 'choice', q: 'Nodira goes swimming ___.', opts: ['on Sundays', 'every day', 'twice a month', 'at midnight'], a: 0, why: "*I go swimming on Sundays.*" },
    { k: 'tf', q: "Carlos is a fast driver.", a: false, why: "*I'm not a fast driver, but I drive carefully.*" },
    { k: 'fill', q: "I'm a student, and I ___ have a part-time job.", a: ['also'], uz: "Men talabaman, va yarim kunlik ishim ham bor.", why: "**also** — ham." },
    { k: 'order', uz: "Men talabaman va kitob do'konida ishlayman.", words: ["I'm", 'a', 'student', 'and', 'I', 'work', 'in', 'a', 'bookshop'], extra: ['am', 'works'], alt: [['I', 'am', 'a', 'student', 'and', 'I', 'work', 'in', 'a', 'bookshop']] },
    { k: 'translate', uz: "Bu hafta oxirida buvimnikiga boraman.", a: ["I'm visiting my grandmother this weekend.", "This weekend I'm visiting my grandmother.", "I am visiting my grandmother this weekend.", "This weekend I am visiting my grandmother."], why: "Reja: **I'm visiting**." },
    { k: 'match', pairs: [['profile', 'profil'], ['student', 'talaba'], ['also', 'ham'], ['sometimes', "ba'zan"], ['bookshop', "kitob do'koni"]] },
    { k: 'fix', wrong: 'I work also part-time.', a: ['I also work part-time.'], why: "**also** fe'ldan oldin keladi." },
    { k: 'dictation', say: "I'm a student, and I also work part-time.", a: ["I'm a student, and I also work part-time.", "I am a student, and I also work part-time."] },
    { k: 'listen', say: "My hobby is photography.", opts: ['My hobby is photography.', 'My hobby is cooking.', 'My job is photography.', 'My hobby is swimming.'], a: 0 },
    { k: 'choice', q: 'Choose the correct sentence.', opts: ['I sometimes go swimming.', 'I go sometimes swimming.', 'I go swimming sometimes to.', 'Sometimes I going swimming.'], a: 0, why: "**sometimes** odatda fe'ldan oldin: *I sometimes go…*" },
    { k: 'translate', uz: "Mening hobbim — suratga olish.", a: ["My hobby is photography.", "My hobby is taking photos."], why: "**My hobby is…**" },
  ],
  quiz: [
    { k: 'choice', q: 'Carlos starts work at ___.', opts: ['six', 'two', 'seven', 'nine'], a: 0 },
    { k: 'fill', q: "I like ___ books. (read)", a: ['reading'], why: "**like + -ing**." },
    { k: 'order', uz: "Men ba'zan hafta oxirida ishlayman.", words: ['I', 'sometimes', 'work', 'at', 'weekends'], extra: ['works', 'in'] },
    { k: 'translate', uz: "Men talabaman.", a: ["I'm a student.", 'I am a student.'] },
    { k: 'tf', q: "*I like both tea and coffee.* — ikkalasi ham yoqadi.", a: true },
    { k: 'fix', wrong: 'I student.', a: ["I'm a student.", 'I am a student.'], why: "**I'm a student.**" },
    { k: 'match', pairs: [['profile', 'profil'], ['both', 'ikkalasi ham'], ['sometimes', "ba'zan"], ['also', 'ham']] },
    { k: 'choice', q: "Nodira's job is ___.", opts: ['part-time', 'full-time', 'night', 'free'], a: 0, why: "*a part-time job in a bookshop.*" },
  ],
  summary: [
    "Profil tuzilishi: **ism va kasb → ish joyi → hobbi → reja**.",
    "**also** va **sometimes** odatda fe'ldan oldin: *I also work. I sometimes swim.*",
    "Hobbi: **like / love + fe'l-ing**. Reja: **I'm + fe'l-ing + vaqt**.",
    "Yangi so'zlar: **profile, bookshop, both, company, photography, full-time**.",
  ],
  homework: "O'zingiz haqingizda 5–6 gaplik profil yozing: ism, kasb, ish joyi, hobbi, hafta oxiri rejasi.",
};

export default lesson;
