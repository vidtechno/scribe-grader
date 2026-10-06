import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u1-l1',
  title: 'The alphabet: A–M',
  titleUz: 'Alifbo: A–M',
  goal: "Ingliz alifbosining birinchi 13 ta harfini **nomi bilan** to'g'ri aytasiz, ularni quloq bilan ajratasiz va shu harflar bilan boshlanadigan 10 ta so'zni bilib olasiz.",
  slides: [
    {
      title: 'Ingliz alifbosi: 26 ta harf',
      blocks: [
        { t: 'p', md: "Ingliz alifbosida **26 ta harf** bor. Yaxshi xabar: ular o'zbek lotin harflariga juda o'xshaydi — siz ularni allaqachon taniysiz! Faqat **nomlari** boshqacha aytiladi." },
        { t: 'p', md: "Har bir harfning ikkita ko'rinishi bor: **katta** (A) va **kichik** (a). Gap boshida, ismlarda va `I` (men) so'zida katta harf yoziladi." },
        { t: 'tip', tone: 'info', md: "Harfning **nomi** va so'z ichidagi **tovushi** har doim bir xil emas. Masalan, `A` harfining nomi **\"ey\"**, lekin *apple* so'zida u **\"æ\"** (a va e orasidagi tovush) bo'lib o'qiladi. Bugun nomlarni o'rganamiz, tovushlarni esa 3-darsda chuqurroq o'rganamiz." },
        { t: 'p', md: "Har bir kartadagi 🔊 tugmasini bosing va **ovoz chiqarib takrorlang**. Til faqat ko'z bilan emas, quloq va og'iz bilan o'rganiladi." },
      ],
    },
    {
      title: 'A dan G gacha',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'A a', say: 'A', uz: "**\"ey\"** deb aytiladi (o'zbekcha \"ey\" kabi).", examples: ['apple', 'bag'] },
            { label: 'B b', say: 'B', uz: "**\"bi:\"** — \"i\" cho'zib aytiladi.", examples: ['bag', 'book'] },
            { label: 'C c', say: 'C', uz: "**\"si:\"** — xuddi \"si\" kabi, cho'ziq.", examples: ['cat', 'car'] },
            { label: 'D d', say: 'D', uz: "**\"di:\"**", examples: ['dog', 'door'] },
            { label: 'E e', say: 'E', uz: "**\"i:\"** — diqqat! Nomi \"e\" emas, **\"i\"**.", examples: ['egg', 'eat'] },
            { label: 'F f', say: 'F', uz: "**\"ef\"**", examples: ['fish', 'five'] },
            { label: 'G g', say: 'G', uz: "**\"dji:\"** — \"j\" yumshoq aytiladi, xuddi \"jiyda\"dagi kabi.", examples: ['girl', 'green'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Eng ko'p adashtiriladigan juftlik: **E** (\"i:\") va **I** (\"ay\"). O'zbekchada E — \"e\", I — \"i\", ingliz tilida esa deyarli teskari!" },
      ],
    },
    {
      title: 'H dan M gacha',
      blocks: [
        {
          t: 'sounds', items: [
            { label: 'H h', say: 'H', uz: "**\"eych\"** — oxirida \"ch\".", examples: ['hand', 'hat'] },
            { label: 'I i', say: 'I', uz: "**\"ay\"** — xuddi o'zbekcha \"ay\" kabi.", examples: ['ice', 'ink'] },
            { label: 'J j', say: 'J', uz: "**\"djey\"**", examples: ['juice', 'job'] },
            { label: 'K k', say: 'K', uz: "**\"key\"**", examples: ['key', 'kid'] },
            { label: 'L l', say: 'L', uz: "**\"el\"**", examples: ['lemon', 'leg'] },
            { label: 'M m', say: 'M', uz: "**\"em\"**", examples: ['man', 'milk'] },
          ],
        },
        { t: 'tip', tone: 'warn', md: "Yana bir tuzoq: **G** (\"dji:\") va **J** (\"djey\"). Ikkalasi ham \"dj\" bilan boshlanadi — oxiriga quloq soling: **i:** yoki **ey**." },
        { t: 'check', ex: { k: 'listen', say: 'J', opts: ['G', 'J', 'E', 'I'], a: 1, why: "\"djey\" — bu **J**. G esa \"dji:\" deb aytiladi." } },
      ],
    },
    {
      title: 'Bir xil tovushli guruhlar',
      blocks: [
        { t: 'p', md: "Harflarni **tovush guruhlariga** bo'lib yodlash ancha oson. Bir guruhdagi harflarning nomi bir xil tovush bilan tugaydi:" },
        {
          t: 'table', head: ['Tovush', 'Harflar', 'Qanday aytiladi'],
          rows: [
            ['ey', 'A, H, J, K', 'ey · eych · djey · key'],
            ['i:', 'B, C, D, E, G', 'bi: · si: · di: · i: · dji:'],
            ['e', 'F, L, M', 'ef · el · em'],
            ['ay', 'I', 'ay'],
          ],
        },
        { t: 'tip', tone: 'good', md: "Usul: guruhni qo'shiqday ketma-ket ayting — **\"ey, eych, djey, key\"**, keyin **\"bi:, si:, di:, i:, dji:\"**. 3–4 marta takrorlasangiz, yodda qoladi." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi harfning nomi **\"i:\"** tovushi bilan tugaydi?", opts: ['F', 'D', 'K', 'I'], a: 1, why: "D — \"di:\". F (\"ef\"), K (\"key\"), I (\"ay\") boshqa guruhlarda." } },
      ],
    },
    {
      title: 'Katta va kichik harflar',
      blocks: [
        { t: 'p', md: "Ko'pchilik kichik harflar kattasiga o'xshaydi, lekin bir nechtasi farq qiladi. Ularni yaxshilab ko'rib oling:" },
        { t: 'table', head: ['Katta', 'Kichik', 'Diqqat'], rows: [['A', 'a', ''], ['B', 'b', 'b va d ni adashtirmang'], ['D', 'd', 'd — qorni chapda'], ['E', 'e', ''], ['G', 'g', 'kichigi pastga tushadi'], ['H', 'h', ''], ['J', 'j', 'nuqtasi bor'], ['L', 'l', 'kichik l — tayoqcha']] },
        { t: 'p', md: "Katta harf qachon yoziladi:\n• gapning **boshida**: *My name is Ali.*\n• **ismlarda va joy nomlarida**: *Ali, London, Tashkent*\n• **I** (men) so'zida — har doim katta: *I am Ali.*" },
        { t: 'check', ex: { k: 'tf', q: "Ingliz tilida \"men\" ma'nosidagi **i** gap o'rtasida kichik harf bilan yozilaveradi.", a: false, why: "**I** (men) har doim katta harf bilan yoziladi: *Today **I** am happy.*" } },
      ],
    },
    {
      title: "Birinchi so'zlaringiz",
      blocks: [
        { t: 'p', md: "Har bir harf bilan bitta so'z o'rganamiz. So'zni eshiting, takrorlang va qaysi harf bilan boshlanishiga e'tibor bering. Bu so'zlar darsning **yodlash ro'yxati**." },
        {
          t: 'examples', items: [
            { en: 'an apple', uz: 'olma', note: "*a* \"æ\" bo'lib o'qiladi" },
            { en: 'a bag', uz: 'sumka' },
            { en: 'a cat', uz: 'mushuk', note: "*c* bu yerda \"k\" bo'lib o'qiladi" },
            { en: 'a dog', uz: 'it' },
            { en: 'an egg', uz: 'tuxum' },
            { en: 'a fish', uz: 'baliq' },
            { en: 'a girl', uz: 'qiz bola', note: "*g* bu yerda \"g\" bo'lib o'qiladi" },
            { en: 'a hand', uz: "qo'l (kaft)" },
            { en: 'a key', uz: 'kalit' },
            { en: 'a man', uz: 'erkak' },
          ],
        },
        { t: 'tip', tone: 'info', md: "So'z oldidagi **a / an** — \"bitta\" degan ma'noni beradi. Unli tovush bilan boshlansa **an** (*an apple, an egg*), aks holda **a** (*a cat*). Buni 2-bo'limda batafsil o'rganamiz." },
      ],
    },
  ],
  words: [
    { en: 'apple', uz: 'olma', ipa: 'ˈæp.əl', pos: 'noun', ex: 'I have an apple.', exUz: 'Menda olma bor.' },
    { en: 'bag', uz: 'sumka', ipa: 'bæɡ', pos: 'noun', ex: 'This is my bag.', exUz: 'Bu mening sumkam.' },
    { en: 'cat', uz: 'mushuk', ipa: 'kæt', pos: 'noun', ex: 'The cat is black.', exUz: 'Mushuk qora.' },
    { en: 'dog', uz: 'it', ipa: 'dɒɡ', pos: 'noun', ex: 'I have a dog.', exUz: 'Mening itim bor.' },
    { en: 'egg', uz: 'tuxum', ipa: 'eɡ', pos: 'noun', ex: 'I eat an egg.', exUz: 'Men tuxum yeyman.' },
    { en: 'fish', uz: 'baliq', ipa: 'fɪʃ', pos: 'noun', ex: 'The fish is big.', exUz: 'Baliq katta.' },
    { en: 'girl', uz: 'qiz bola', ipa: 'ɡɜːl', pos: 'noun', ex: 'She is a girl.', exUz: 'U qiz bola.' },
    { en: 'hand', uz: "qo'l (kaft)", ipa: 'hænd', pos: 'noun', ex: 'Give me your hand.', exUz: "Qo'lingizni bering." },
    { en: 'key', uz: 'kalit', ipa: 'kiː', pos: 'noun', ex: 'Where is my key?', exUz: 'Kalitim qayerda?' },
    { en: 'man', uz: 'erkak', ipa: 'mæn', pos: 'noun', ex: 'He is a man.', exUz: 'U erkak kishi.' },
  ],
  practice: [
    { k: 'listen', say: 'E', opts: ['A', 'E', 'I', 'H'], a: 1, why: "\"i:\" — bu **E**. I harfi esa \"ay\" deb aytiladi." },
    { k: 'listen', say: 'I', opts: ['E', 'A', 'I', 'J'], a: 2, why: "\"ay\" — bu **I**." },
    { k: 'listen', say: 'G', opts: ['J', 'G', 'C', 'K'], a: 1, why: "\"dji:\" — bu **G**. J esa \"djey\"." },
    { k: 'choice', q: "**H** harfi qanday aytiladi?", opts: ['ash', 'eych', 'hi', 'ha'], a: 1, why: "H — **\"eych\"**." },
    { k: 'choice', q: "Qaysi harfning nomi **\"key\"**?", opts: ['C', 'Q', 'K', 'G'], a: 2, why: "K — \"key\". (C — \"si:\")" },
    { k: 'match', pairs: [['A', 'ey'], ['E', 'i:'], ['I', 'ay'], ['G', 'dji:'], ['J', 'djey']] },
    { k: 'choice', q: "Qaysi so'z **a** harfi bilan boshlanadi?", say: 'apple', opts: ['egg', 'apple', 'hand', 'man'], a: 1 },
    { k: 'listen', say: 'dog', opts: ['dog', 'bag', 'key', 'fish'], a: 0 },
    { k: 'match', pairs: [['cat', 'mushuk'], ['fish', 'baliq'], ['key', 'kalit'], ['girl', 'qiz bola'], ['hand', "qo'l (kaft)"]] },
    { k: 'fill', q: 'A, B, C, D, ___, F, G', a: ['E', 'e'], hint: 'Alifbo tartibini eslang', why: "Tartib: A, B, C, D, **E**, F, G." },
    { k: 'fill', q: 'H, I, ___, K, L, M', a: ['J', 'j'], why: "H, I, **J**, K, L, M." },
    { k: 'tf', q: "**C** harfi \"si:\" deb aytiladi.", a: true },
    { k: 'tf', q: "**E** harfining nomi o'zbekchadagi kabi \"e\" deb aytiladi.", a: false, why: "Ingliz tilida E — **\"i:\"**." },
    { k: 'speak', say: 'A, B, C, D, E, F, G', uz: "Harflarni ketma-ket ovoz chiqarib ayting" },
    { k: 'translate', uz: 'olma', a: ['apple', 'an apple'], why: "olma — **apple**." },
  ],
  quiz: [
    { k: 'listen', say: 'H', opts: ['A', 'H', 'K', 'J'], a: 1 },
    { k: 'listen', say: 'C', opts: ['C', 'K', 'G', 'E'], a: 0 },
    { k: 'listen', say: 'J', opts: ['G', 'I', 'J', 'E'], a: 2 },
    { k: 'choice', q: "**\"i:\"** deb aytiladigan harfni tanlang.", opts: ['I', 'E', 'A', 'H'], a: 1 },
    { k: 'choice', q: "**F, L, M** harflarining nomi qaysi tovush bilan boshlanadi?", opts: ['"a"', '"e"', '"i"', '"o"'], a: 1, why: "ef, el, em — hammasi **\"e\"** bilan boshlanadi." },
    { k: 'fill', q: 'J, K, ___, M', a: ['L', 'l'] },
    { k: 'choice', q: "\"kalit\" inglizcha qanday?", opts: ['key', 'cat', 'bag', 'hand'], a: 0 },
    { k: 'translate', uz: 'baliq', a: ['fish', 'a fish'] },
    { k: 'tf', q: "\"I am Ali\" gapida **I** katta harf bilan to'g'ri yozilgan.", a: true },
    { k: 'listen', say: 'girl', opts: ['girl', 'egg', 'man', 'cat'], a: 0 },
  ],
  summary: [
    "Ingliz alifbosida **26 ta harf** bor; bugun **A–M** ni o'rgandik.",
    "Eng muhim tuzoqlar: **E = \"i:\"**, **I = \"ay\"**, **G = \"dji:\"**, **J = \"djey\"**.",
    "Guruhlar: **ey** (A, H, J, K) · **i:** (B, C, D, E, G) · **e** (F, L, M).",
    "**I** (men), ismlar va gap boshi — doim katta harf bilan.",
    "Yangi so'zlar: apple, bag, cat, dog, egg, fish, girl, hand, key, man.",
  ],
  homework: "A dan M gacha harflarni 3 marta ovoz chiqarib ayting. Keyin o'z ismingizdagi harflarni (agar A–M ichida bo'lsa) inglizcha nomi bilan aytib ko'ring. 10 ta so'zni ertaga yana bir marta takrorlang.",
};

export default lesson;
