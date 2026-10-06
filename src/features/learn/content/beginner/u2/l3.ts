import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u2-l3',
  title: "To be: negatives",
  titleUz: "To be: inkor gaplar",
  goal: "**am / is / are** dan keyin **not** qo'yib inkor gap tuzasiz (*I'm not tired, She isn't old*), ikkala qisqa shaklni ham bilasiz va odamlar hamda narsalarni qarama-qarshi sifatlar bilan tasvirlaysiz.",
  slides: [
    {
      title: "\"…emas\" — ingliz tilida not",
      blocks: [
        { t: 'p', md: "O'zbek tilida inkor uchun **emas** deymiz: *Men charchagan **emas**man. U boy **emas**.* Ingliz tilida bunga **not** to'g'ri keladi." },
        { t: 'p', md: "Qoida juda oddiy: **not** har doim **am / is / are dan keyin** turadi.\n• I am → I am **not**\n• She is → She is **not**\n• They are → They are **not**" },
        {
          t: 'examples', items: [
            { en: 'I am not tired.', uz: 'Men charchagan emasman.' },
            { en: 'He is not old.', uz: 'U qari emas.' },
            { en: 'We are not late.', uz: 'Biz kechikmadik (kech emasmiz).' },
            { en: 'It is not cheap.', uz: 'U arzon emas.' },
          ],
        },
        { t: 'check', ex: { k: 'order', uz: 'U band emas (erkak).', words: ['He', 'is', 'not', 'busy'], extra: ['no'], why: "**not** — **is** dan keyin: *He is not busy.*" } },
      ],
    },
    {
      title: 'Qisqa shakllar: ikki xil yo\'l',
      blocks: [
        { t: 'p', md: "Suhbatda inkor ham qisqartiriladi. **is / are** uchun **ikki xil** qisqa shakl bor — ikkalasi ham to'g'ri:" },
        {
          t: 'table', head: ["To'liq", '1-yo\'l', '2-yo\'l'], speak: [1, 2],
          rows: [
            ['I am not', "I'm not", '—'],
            ['you are not', "you're not", "you aren't"],
            ['he is not', "he's not", "he isn't"],
            ['she is not', "she's not", "she isn't"],
            ['it is not', "it's not", "it isn't"],
            ['we are not', "we're not", "we aren't"],
            ['they are not', "they're not", "they aren't"],
          ],
        },
        { t: 'tip', tone: 'warn', md: "**I** uchun faqat bitta qisqa shakl bor: **I'm not**. \"I amn't\" degan so'z **yo'q**!" },
        { t: 'tip', tone: 'info', md: "Ism bilan ham ishlaydi: *Ali **isn't** here. My friends **aren't** ready.*" },
        { t: 'check', ex: { k: 'choice', q: "\"I am not\" ning to'g'ri qisqa shakli qaysi?", opts: ["I amn't", "I'm not", "I'mn't", "I not"], a: 1, why: "Faqat **I'm not**. \"I amn't\" mavjud emas." } },
      ],
    },
    {
      title: "isn't va aren't talaffuzi",
      blocks: [
        {
          t: 'sounds', items: [
            { label: "isn't", say: "isn't", uz: "**\"iznt\"** — ikki bo'g'in: \"iz-nt\". O'rtadagi *s* \"z\" bo'lib eshitiladi, oxirgi *t* juda yengil.", examples: ["it isn't", "he isn't late"] },
            { label: "aren't", say: "aren't", uz: "**\"a:nt\"** — cho'ziq \"a:\", *r* eshitilmaydi (britancha). \"arent\" deb har bir harfni o'qimang.", examples: ["we aren't", "they aren't ready"] },
            { label: "I'm not", say: "I'm not", uz: "**\"aym not\"** — *not* dagi *o* qisqa, og'iz keng ochiladi.", examples: ["I'm not tired", "I'm not late"] },
          ],
        },
        { t: 'tip', tone: 'good', md: "Inkor gapda **not** yoki **n't** urg'u oladi, ya'ni biroz kuchliroq aytiladi: *I'm **not** hungry.* Shunda tinglovchi \"yo'q\" ekanini aniq eshitadi." },
        { t: 'check', ex: { k: 'listen', say: "They aren't ready.", opts: ["They are ready.", "They aren't ready.", "We aren't ready.", "They aren't busy."], a: 1, why: "**aren't** — \"a:nt\". Inkor gap." } },
      ],
    },
    {
      title: "O'zbeklarning tipik xatolari",
      blocks: [
        { t: 'p', md: "Inkorda o'zbek tilidan \"tarjima qilib\" gapirish ko'p xatoga olib keladi. Esda tuting: **am / is / are** gapdan **tushib qolmaydi**, **not** esa doim **ulardan keyin** turadi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm not tired.", "She isn't old.", "He's not rich.", "We aren't late."] },
          bad: { title: "Noto'g'ri", items: ['I not tired.', 'She no old.', 'He not is rich.', "We don't late."] },
        },
        { t: 'tip', tone: 'warn', md: "**no** — \"yo'q\" (javob). **not** — \"emas\" (gap ichida). *No, I'm **not** tired.* — Yo'q, charchamadim." },
        { t: 'check', ex: { k: 'fill', q: 'My bag ___ new. It is old.', a: ["isn't", 'is not'], uz: 'Sumkam yangi emas. U eski.', why: "**isn't** yoki **is not**: *My bag isn't new.*" } },
      ],
    },
    {
      title: 'Qarama-qarshi sifatlar',
      blocks: [
        { t: 'p', md: "Inkor bilan ko'pincha **qarama-qarshi** ma'noli sifat ishlatiladi: *It isn't cheap. It's expensive.* Bu so'zlarni juft qilib yodlang:" },
        {
          t: 'table', head: ['Sifat', 'Qarama-qarshisi', "O'zbekcha"], speak: [0, 1],
          rows: [
            ['tall', 'short', "baland bo'yli — past bo'yli"],
            ['young', 'old', 'yosh — qari (keksa)'],
            ['rich', 'poor', 'boy — kambag\'al'],
            ['cheap', 'expensive', 'arzon — qimmat'],
            ['clean', 'dirty', 'toza — iflos'],
            ['beautiful', '—', "go'zal, chiroyli"],
          ],
        },
        { t: 'tip', tone: 'info', md: "**old** narsalar uchun \"eski\" ma'nosini ham beradi: *an old bag* — eski sumka. **short** esa narsalar uchun \"qisqa\": *a short pen*." },
        { t: 'p', md: "1-bo'limdagi qoidani eslang: sifat **otdan oldin** turadi: *a **tall** man, an **expensive** bag, a **clean** table.*" },
        { t: 'check', ex: { k: 'choice', q: "*It isn't cheap. It's ___.*", opts: ['clean', 'expensive', 'poor', 'tall'], a: 1, why: "cheap (arzon) ning teskarisi — **expensive** (qimmat)." } },
      ],
    },
    {
      title: "Suhbat: xatoni to'g'rilash",
      blocks: [
        { t: 'p', md: "Inkor gap kimningdir xatosini to'g'rilashda juda kerak: avval **isn't**, keyin to'g'ri ma'lumot." },
        {
          t: 'dialog', lines: [
            { who: 'Tom', en: 'Your teacher is old.', uz: "O'qituvchingiz qari." },
            { who: 'Malika', en: "No, she isn't old! She's young. She's twenty.", uz: "Yo'q, u qari emas! U yosh. U yigirma yoshda." },
            { who: 'Tom', en: "Oh, sorry. And your bag is expensive.", uz: 'Kechirasiz. Sumkangiz esa qimmat.' },
            { who: 'Malika', en: "No, it's not expensive. It's cheap, but it's beautiful.", uz: "Yo'q, u qimmat emas. Arzon, lekin chiroyli." },
            { who: 'Tom', en: "You're right. It's very beautiful!", uz: "Haq gapni aytdingiz. Juda chiroyli ekan!" },
          ],
        },
        {
          t: 'examples', items: [
            { en: "It isn't red. It's blue.", uz: "U qizil emas. U ko'k." },
            { en: "He isn't short. He's tall.", uz: "U past bo'yli emas. U baland bo'yli." },
            { en: "The pen isn't clean.", uz: 'Ruchka toza emas.' },
          ],
        },
        { t: 'check', ex: { k: 'translate', uz: 'Biz boy emasmiz.', a: ["We aren't rich", "We're not rich", 'We are not rich'], why: "**We aren't rich.** / **We're not rich.** — ikkalasi to'g'ri." } },
      ],
    },
  ],
  words: [
    { en: 'tall', uz: "baland bo'yli, baland", ipa: 'tɔːl', pos: 'adj', ex: 'My friend is tall.', exUz: "Do'stim baland bo'yli." },
    { en: 'short', uz: "past bo'yli, qisqa", ipa: 'ʃɔːt', pos: 'adj', ex: "She isn't short.", exUz: "U past bo'yli emas." },
    { en: 'young', uz: 'yosh', ipa: 'jʌŋ', pos: 'adj', ex: 'My teacher is young.', exUz: "O'qituvchim yosh." },
    { en: 'old', uz: 'qari, keksa; eski', ipa: 'əʊld', pos: 'adj', ex: "The bag isn't old.", exUz: 'Sumka eski emas.' },
    { en: 'beautiful', uz: "go'zal, chiroyli", ipa: 'ˈbjuː.tɪ.fəl', pos: 'adj', ex: "It's a beautiful cat.", exUz: 'Bu chiroyli mushuk.' },
    { en: 'rich', uz: 'boy', ipa: 'rɪtʃ', pos: 'adj', ex: "We aren't rich.", exUz: 'Biz boy emasmiz.' },
    { en: 'poor', uz: "kambag'al", ipa: 'pɔː', pos: 'adj', ex: "They aren't poor.", exUz: "Ular kambag'al emas." },
    { en: 'cheap', uz: 'arzon', ipa: 'tʃiːp', pos: 'adj', ex: "It's cheap.", exUz: 'U arzon.' },
    { en: 'expensive', uz: 'qimmat', ipa: 'ɪkˈspen.sɪv', pos: 'adj', ex: "The bag isn't expensive.", exUz: 'Sumka qimmat emas.' },
    { en: 'clean', uz: 'toza', ipa: 'kliːn', pos: 'adj', ex: 'The table is clean.', exUz: 'Stol toza.' },
  ],
  practice: [
    { k: 'listen', say: "He isn't tall.", opts: ["He is tall.", "He isn't tall.", "She isn't tall.", "He isn't old."], a: 1 },
    { k: 'listen', say: "I'm not rich.", opts: ["I'm rich.", "I'm not poor.", "I'm not rich.", "I'm not ready."], a: 2 },
    { k: 'match', pairs: [['tall', 'short'], ['young', 'old'], ['rich', 'poor'], ['cheap', 'expensive'], ['clean', 'dirty']] },
    { k: 'match', pairs: [['beautiful', 'chiroyli'], ['expensive', 'qimmat'], ['cheap', 'arzon'], ['poor', "kambag'al"], ['young', 'yosh']] },
    { k: 'choice', q: "\"She is not\" ning qisqa shakli?", opts: ["she amn't", "she aren't", "she isn't", "she not"], a: 2, why: "**she isn't** yoki **she's not**." },
    { k: 'choice', q: "Qaysi gap **to'g'ri**?", opts: ['I not hungry.', "I'm not hungry.", "I amn't hungry.", "I don't hungry."], a: 1, why: "**I'm not** — I uchun yagona qisqa shakl." },
    { k: 'tf', q: "*They aren't late* va *They're not late* — ikkalasi ham to'g'ri.", a: true, why: "Ha, **are not** ikki xil qisqartiriladi." },
    { k: 'tf', q: "*He not is old.* — to'g'ri gap.", a: false, why: "**not** doim **is** dan keyin: *He is not old.*" },
    { k: 'fill', q: 'We ___ poor.', a: ["aren't", 'are not'], uz: "Biz kambag'al emasmiz.", why: "**we** → **aren't**." },
    { k: 'fill', q: 'I ___ tired. I am fine.', a: ['am not'], uz: 'Men charchagan emasman. Yaxshiman.', hint: "I ___ (am + not)", why: "**I am not** (qisqasi *I'm not*)." },
    { k: 'fill', q: "The cat isn't clean. It's ___.", a: ['dirty'], uz: 'Mushuk toza emas. U iflos.', why: "clean — toza, **dirty** — iflos." },
    { k: 'order', uz: 'Ruchka qimmat emas.', words: ['The', 'pen', "isn't", 'expensive'], extra: ["aren't"] },
    { k: 'order', uz: "Ular yosh emas. Ular qari.", words: ["They", "aren't", 'young', "They're", 'old'], extra: ["isn't"], why: "*They aren't young. They're old.*" },
    { k: 'translate', uz: 'Sumka arzon emas.', a: ["The bag isn't cheap", "The bag is not cheap", "The bag's not cheap", "My bag isn't cheap", "My bag is not cheap"], why: "**The bag isn't cheap.**" },
    { k: 'translate', uz: "U baland bo'yli emas (ayol).", a: ["She isn't tall", "She's not tall", 'She is not tall'], why: "**She isn't tall.**" },
    { k: 'speak', say: "No, she isn't old. She's young.", uz: "Ovoz chiqarib ayting: isn't va young ga e'tibor bering" },
  ],
  quiz: [
    { k: 'listen', say: "We aren't rich.", opts: ["We are rich.", "We aren't rich.", "We aren't ready.", "They aren't rich."], a: 1 },
    { k: 'choice', q: "*My friends ___ late.*", opts: ["isn't", "amn't", "aren't", "not"], a: 2, why: "Ko'plik → **aren't**." },
    { k: 'choice', q: "*It isn't expensive. It's ___.*", opts: ['cheap', 'rich', 'clean', 'young'], a: 0 },
    { k: 'fill', q: 'Ali ___ short. He is tall.', a: ["isn't", 'is not'], uz: "Ali past bo'yli emas. U baland bo'yli." },
    { k: 'fill', q: 'You ___ old! You are young.', a: ["aren't", 'are not'] },
    { k: 'translate', uz: 'Men boy emasman.', a: ["I'm not rich", 'I am not rich'] },
    { k: 'translate', uz: 'Stol toza emas.', a: ["The table isn't clean", 'The table is not clean', "The table's not clean"] },
    { k: 'order', uz: "Mushuk chiroyli, lekin u qari.", words: ['The', 'cat', 'is', 'beautiful', 'but', "it's", 'old'], extra: ['are'] },
    { k: 'tf', q: "*I amn't busy.* — to'g'ri qisqa shakl.", a: false, why: "Faqat **I'm not busy.**" },
    { k: 'match', pairs: [['tall', "baland bo'yli"], ['short', "past bo'yli"], ['old', 'qari'], ['rich', 'boy'], ['clean', 'toza']] },
  ],
  summary: [
    "Inkor: **am / is / are + not**: *I am not, he is not, they are not*.",
    "Qisqa shakllar: **I'm not**; **isn't / 's not**; **aren't / 're not**. \"I amn't\" — yo'q!",
    "Xato qilmang: \"I not tired\", \"He not is\", \"I don't tired\" — noto'g'ri.",
    "Juft sifatlar: **tall–short, young–old, rich–poor, cheap–expensive, clean–dirty**.",
    "Yangi so'zlar: tall, short, young, old, beautiful, rich, poor, cheap, expensive, clean.",
  ],
  homework: "Uyingizdagi 5 ta narsa va 3 ta odam haqida bittadan inkor + tasdiq gap yozing: *My phone isn't new. It's old.* Har bir gapni ikkala qisqa shaklda ham ayting (*isn't / 's not*).",
};

export default lesson;
