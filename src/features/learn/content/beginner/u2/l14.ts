import type { Lesson } from '../../../types';

// Mini lesson (grammar): irregular plurals in groups, same-form plurals, and are with them.
const lesson: Lesson = {
  id: 'u2-l14',
  title: 'Irregular plurals',
  titleUz: "Noto'g'ri ko'plik: child → children",
  mini: true,
  goal: "Eng ko'p ishlatiladigan **noto'g'ri ko'pliklarni** guruhlab eslab qolasiz (*man → men, foot → feet, child → children, sheep → sheep*) va ular bilan **are** ishlatasiz: *The children are happy.*",
  slides: [
    {
      title: "Guruh 1: ichki unli o'zgaradi",
      blocks: [
        { t: 'p', md: "Ba'zi otlarda **-s** qo'shilmaydi — so'zning **o'rtasidagi unli o'zgaradi**. Bular eng qadimgi ingliz so'zlari, ularni yod olish kerak, lekin ular **guruh-guruh** bo'lib keladi:" },
        { t: 'table', head: ['Birlik', "Ko'plik", "O'zgarish"], speak: [0, 1], rows: [
          ['a man', 'men', 'a → e'],
          ['a woman', 'women', 'a → e (o\'qilishi: "wimin")'],
          ['a foot', 'feet', 'oo → ee'],
          ['a tooth', 'teeth', 'oo → ee'],
          ['a goose', 'geese', 'oo → ee'],
          ['a mouse', 'mice', 'ou → i'],
        ] },
        { t: 'tip', tone: 'good', md: "Qo'shma so'zlar ham shu qoidaga amal qiladi: *policeman → police**men***, *businessman → business**men***." },
        { t: 'check', ex: { k: 'fill', q: 'one tooth → two ___', a: ['teeth'], why: "**oo → ee**: *teeth*." } },
        { t: 'check', ex: { k: 'choice', q: 'one mouse → two ___', opts: ['mouses', 'mice', 'meese', 'mouse'], a: 1, why: "**mouse → mice**." } },
      ],
    },
    {
      title: 'Guruh 2: boshqa shakl va bir xil shakl',
      blocks: [
        { t: 'p', md: "Qolgan ikkita muhim so'z butunlay boshqacha:" },
        { t: 'table', head: ['Birlik', "Ko'plik", "O'zbekcha"], speak: [0, 1], rows: [
          ['a child', 'children', 'bola — bolalar'],
          ['a person', 'people', 'odam — odamlar'],
        ] },
        { t: 'p', md: "Va uchinchi guruh: ba'zi otlar ko'plikda **o'zgarmaydi**. Son (yoki gap) ko'rsatadi, nechta ekanini:" },
        { t: 'examples', items: [
          { en: 'one sheep, two sheep', uz: 'bitta qo\'y, ikkita qo\'y', note: '-s yo\'q' },
          { en: 'one fish, five fish', uz: 'bitta baliq, beshta baliq', note: '-s yo\'q' },
          { en: 'one deer, three deer', uz: 'bitta kiyik, uchta kiyik', note: '-s yo\'q' },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'one sheep → ten ___', opts: ['sheeps', 'sheep', 'sheepes', 'shiep'], a: 1, why: "**sheep** o'zgarmaydi: *ten sheep*." } },
      ],
    },
    {
      title: "Ko'plik fe'l bilan: are",
      blocks: [
        { t: 'p', md: "**People** va **children** — ko'plik, shuning uchun ular bilan **are**: *The people are friendly. The children are tired.* Bir xil shaklli otlarda ham gap ma'nosiga qarang: *The sheep **are** in the park* (ko'p), *The sheep **is** old* (bitta)." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['two children', 'three people', 'The men are busy.', 'ten sheep'] },
          bad: { title: "Noto'g'ri", items: ['two childs', 'three peoples', 'The men is busy.', 'ten sheeps'] } },
        { t: 'tip', tone: 'warn', md: "**childs, peoples, mans, foots, sheeps** — o'zbek o'quvchilari ko'p qiladigan xato: oldingi qoidani (**-s**) bu so'zlarga ham qo'shib yuborishadi. *child, man, foot* → hech qachon *-s*." },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['The people is happy.', 'The people are happy.', 'The peoples are happy.', 'The people am happy.'], a: 1, why: "**people** — ko'plik → **are**. *Peoples* shakli bu yerda yo'q." } },
      ],
    },
  ],
  words: [
    { en: 'mouse', uz: 'sichqon', ipa: 'maʊs', pos: 'noun', ex: 'The mice are small.', exUz: 'Sichqonlar kichkina.' },
    { en: 'sheep', uz: "qo'y", ipa: 'ʃiːp', pos: 'noun', ex: 'The sheep are white.', exUz: "Qo'ylar oppoq." },
    { en: 'deer', uz: 'kiyik', ipa: 'dɪər', pos: 'noun', ex: 'The deer are in the park.', exUz: 'Kiyiklar bog\'da.' },
    { en: 'goose', uz: "g'oz", ipa: 'guːs', pos: 'noun', ex: 'The geese are big.', exUz: "G'ozlar katta." },
    { en: 'policeman', uz: 'politsiyachi', ipa: 'pəˈliːs.mən', pos: 'noun', ex: 'The policemen are at the bank.', exUz: 'Politsiyachilar bankda.' },
    { en: 'businessman', uz: 'tadbirkor', ipa: 'ˈbɪz.nɪs.mæn', pos: 'noun', ex: 'He is a businessman.', exUz: 'U tadbirkor.' },
  ],
  practice: [
    { k: 'choice', q: 'one man → two ___', opts: ['mans', 'men', 'manes', 'mens'], a: 1, why: "**man → men**." },
    { k: 'choice', q: 'one woman → three ___', opts: ['womans', 'womens', 'women', 'woman'], a: 2, why: "**woman → women**." },
    { k: 'choice', q: 'one child → two ___', opts: ['childs', 'childes', 'children', 'childrens'], a: 2, why: "**child → children**." },
    { k: 'fill', q: 'one foot → two ___', a: ['feet'], why: "**foot → feet**." },
    { k: 'fill', q: 'one goose → two ___', a: ['geese'], why: "**goose → geese**." },
    { k: 'fill', q: 'one deer → four ___', a: ['deer'], why: "**deer** o'zgarmaydi." },
    { k: 'listen', say: 'two women', opts: ['two woman', 'two women', 'two men', 'two man'], a: 1 },
    { k: 'tf', q: "*three peoples* — to'g'ri.", a: false, why: "**people** — allaqachon ko'plik: *three people*." },
    { k: 'tf', q: "*ten sheep* — to'g'ri.", a: true, why: "*sheep* ko'plikda o'zgarmaydi." },
    { k: 'fix', wrong: 'My foots are tired.', a: ['My feet are tired.'], why: "**foot → feet**." },
    { k: 'fix', wrong: 'The childs are happy.', a: ['The children are happy.'], why: "**child → children**." },
    { k: 'match', pairs: [['man', 'men'], ['mouse', 'mice'], ['tooth', 'teeth'], ['person', 'people'], ['sheep', 'sheep']] },
    { k: 'order', uz: 'Bolalar xursand.', words: ['The', 'children', 'are', 'happy'], extra: ['is', 'childs'], why: "Ko'plik → **are**." },
    { k: 'translate', uz: 'uchta ayol', a: ['three women', '3 women'], why: "**woman → women**." },
    { k: 'translate', uz: 'Odamlar band.', a: ['The people are busy', 'People are busy'], why: "**people** + **are**." },
    { k: 'speak', say: 'men, women, children, people', uz: "To'rt noto'g'ri ko'plikni ayting" },
  ],
  quiz: [
    { k: 'choice', q: 'one mouse → two ___', opts: ['mouses', 'mice', 'mouse', 'mices'], a: 1 },
    { k: 'choice', q: 'one person → five ___', opts: ['persons', 'peoples', 'people', 'person'], a: 2 },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['The men is tired.', 'The men are tired.', 'The mans are tired.', 'The mens are tired.'], a: 1 },
    { k: 'fill', q: 'one tooth → thirty-two ___', a: ['teeth'] },
    { k: 'fill', q: 'one policeman → two ___', a: ['policemen'], why: "**-man → -men**." },
    { k: 'fix', wrong: 'I have two childs.', a: ['I have two children.'], why: "**child → children**." },
    { k: 'translate', uz: 'ikkita qo\'y', a: ['two sheep', '2 sheep'] },
    { k: 'tf', q: "*three geese* — to'g'ri ko'plik.", a: true },
  ],
  summary: [
    "Unli almashadi: **man → men, woman → women, foot → feet, tooth → teeth, goose → geese, mouse → mice**.",
    "Alohida shakllar: **child → children**, **person → people**.",
    "O'zgarmaydiganlar: **sheep, fish, deer** (*ten sheep*).",
    "**childs, peoples, mans, foots** — mavjud emas. Ko'plikdagi gapda **are**: *The children are happy.*",
  ],
  homework: "Bu 12 ta so'zdan kartochkalar yasang (birlik bir tomonda, ko'plik boshqa tomonda) va har kuni 2 daqiqa takrorlang.",
};

export default lesson;
