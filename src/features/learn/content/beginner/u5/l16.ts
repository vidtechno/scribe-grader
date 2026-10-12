import type { Lesson } from '../../../types';

// Mini lesson (skill, Reading): three short past-tense texts. Uses only was/were, regular and irregular Past Simple, didn't.
const lesson: Lesson = {
  id: 'u5-l16',
  title: 'Reading: a day last week',
  titleUz: "O'qish: o'tgan haftadagi bir kun",
  mini: true,
  goal: "Past Simple'dagi **qisqa inglizcha matnlarni** o'qib, asosiy fikrni va tafsilotlarni tushunasiz, hamda noma'lum so'zning ma'nosini gapdan topasiz.",
  slides: [
    {
      title: "Matnni qanday o'qiymiz? 3 ta maslahat",
      blocks: [
        { t: 'p', md: "Bu bo'limdagi **o'qish darsi**. Matnni so'zma-so'z tarjima qilmang. Quyidagi 3 qadam o'qishni ancha osonlashtiradi." },
        { t: 'tip', tone: 'good', md: "**1. Avval savolga qarang.** Nimani qidirayotganingizni bilsangiz (kim? qayerda? nima qildi?), matnda kerakli joyni tezroq topasiz." },
        { t: 'tip', tone: 'good', md: "**2. Vaqt so'zlariga e'tibor bering.** *last Saturday, yesterday, in the evening* — bular voqea qachon bo'lganini ko'rsatadi. Fe'llarga qarang: **-ed** yoki **went, saw, had** kabi shakllar o'tgan zamonni bildiradi." },
        { t: 'tip', tone: 'good', md: "**3. Noma'lum so'zda to'xtamang.** Gapning qolgan qismidan ma'noni taxmin qiling: *The market was **noisy**, and many people talked.* — *noisy* = shovqinli ekani sezilib turibdi." },
        { t: 'check', ex: { k: 'choice', q: "Matnda *yesterday* va *went* bor. Voqea qachon bo'lgan?", opts: ["O'tgan zamonda", 'Hozir', 'Kelajakda'], a: 0, why: "**yesterday** va **went** — ikkalasi ham o'tgan zamon belgisi." } },
      ],
    },
    {
      title: 'Matn 1: Dilnozaning shanbasi',
      blocks: [
        { t: 'text', title: "Dilnoza's Saturday", en: "Last Saturday I got up early. I had breakfast and went to the market with my mother. The market was big and noisy. We bought fruit and bread, and the bread was delicious! I saw my neighbour there, and we talked for ten minutes. Then we came home. I was tired, but I was happy.", uz: "O'tgan shanba kuni men erta turdim. Nonushta qildim va onam bilan bozorga bordim. Bozor katta va shovqinli edi. Biz meva va non sotib oldik, non esa mazali edi! U yerda qo'shnimni ko'rdim va o'n daqiqa gaplashdik. Keyin uyga keldik. Men charchagan edim, lekin xursand edim." },
        { t: 'check', ex: { k: 'tf', q: 'Dilnoza went to the market alone.', a: false, why: "Matnda: *with my mother* — onasi bilan." } },
        { t: 'check', ex: { k: 'choice', q: 'What did they buy?', opts: ['Fruit and bread', 'Shoes and a bag', 'Tea and sugar'], a: 0, why: "Matnda: *We bought fruit and bread.*" } },
      ],
    },
    {
      title: 'Matn 2: Azizning yakshanbasi',
      blocks: [
        { t: 'text', title: "Aziz's Sunday", en: "On Sunday it was hot, so my friends and I played football in the park. Ali was late, but we waited for him. We were lucky: it didn't rain! We played for two hours. After the game we were very tired, and we drank cold tea. In the evening I didn't do my homework. I watched a film and went to bed at eleven.", uz: "Yakshanba kuni havo issiq edi, shuning uchun do'stlarim bilan parkda futbol o'ynadik. Ali kech qoldi, lekin biz uni kutdik. Bizga omad kuldi: yomg'ir yog'madi! Ikki soat o'ynadik. O'yindan keyin juda charchadik va sovuq choy ichdik. Kechqurun uy vazifasini qilmadim. Film ko'rdim va soat o'n birda uxlagani yotdim." },
        { t: 'check', ex: { k: 'tf', q: 'It rained on Sunday.', a: false, why: "Matnda: *it didn't rain* — yomg'ir yog'madi." } },
        { t: 'check', ex: { k: 'choice', q: 'Why did they wait?', opts: ['Ali was late.', 'It was cold.', 'They were tired.'], a: 0, why: "Matnda: *Ali was late, but we waited for him.*" } },
      ],
    },
    {
      title: 'Matn 3: Malikaning juma kuni',
      blocks: [
        { t: 'text', title: "Malika's Friday", en: "Last Friday I didn't go to school. I was ill, so I stayed in bed. My mother called the doctor, and he came in the afternoon. He said, \"Drink water and rest.\" I read a book and listened to music. In the evening my friend called me, and we talked a little. On Saturday I was OK.", uz: "O'tgan juma kuni maktabga bormadim. Kasal edim, shuning uchun yotoqda qoldim. Onam shifokorni chaqirdi va u tushdan keyin keldi. U: \"Suv iching va dam oling\", dedi. Kitob o'qidim va musiqa tingladim. Kechqurun do'stim qo'ng'iroq qildi va biroz gaplashdik. Shanba kuni men yaxshi edim." },
        { t: 'compare', good: { title: "To'g'ri", items: ["I didn't go to school.", 'My mother called the doctor.', 'I was ill.'] }, bad: { title: "Noto'g'ri", items: ["I didn't went to school.", 'My mother call the doctor.', 'I am ill last Friday.'] } },
        { t: 'p', md: "Eslatma: **didn't** dan keyin fe'l **oddiy shaklda** (*go*, *went* emas)." },
        { t: 'check', ex: { k: 'fix', wrong: "I didn't went to school.", a: ["I didn't go to school.", 'I did not go to school.'], why: "**didn't** + V1: *didn't go*." } },
      ],
    },
  ],
  words: [
    { en: 'noisy', uz: 'shovqinli', ipa: 'ˈnɔɪ.zi', pos: 'adj', ex: 'The market was noisy.', exUz: 'Bozor shovqinli edi.' },
    { en: 'delicious', uz: 'mazali', ipa: 'dɪˈlɪʃ.əs', pos: 'adj', ex: 'The bread was delicious.', exUz: 'Non mazali edi.' },
    { en: 'wait', uz: 'kutmoq', ipa: 'weɪt', pos: 'verb', ex: 'We waited for Ali.', exUz: 'Biz Alini kutdik.' },
    { en: 'lucky', uz: "omadli", ipa: 'ˈlʌk.i', pos: 'adj', ex: 'We were lucky.', exUz: 'Bizga omad kuldi.' },
    { en: 'ill', uz: 'kasal', ipa: 'ɪl', pos: 'adj', ex: 'I was ill on Friday.', exUz: 'Juma kuni kasal edim.' },
    { en: 'rest', uz: 'dam olmoq', ipa: 'rest', pos: 'verb', ex: 'He rested at home.', exUz: 'U uyda dam oldi.' },
  ],
  practice: [
    { k: 'tf', q: "Malika went to school last Friday.", a: false, why: "Matnda: *I didn't go to school.*" },
    { k: 'choice', q: 'Dilnoza: "The market was **noisy**." — *noisy* nima degani?', opts: ['shovqinli', 'katta', 'toza'], a: 0, why: "Bozorda ko'p odam gaplashadi — demak, **shovqinli**." },
    { k: 'choice', q: 'Aziz: "We were **lucky**: it didn\'t rain!" — *lucky* nima degani?', opts: ['charchagan', 'omadli', 'kasal'], a: 1, why: "Yomg'ir yog'madi — bu yaxshi, demak **omadli**." },
    { k: 'fill', q: 'Dilnoza ___ her neighbour at the market. (see)', a: ['saw'], uz: "Dilnoza bozorda qo'shnisini ko'rdi.", why: "**see – saw**." },
    { k: 'order', uz: 'Ali kech qoldi.', words: ['Ali', 'was', 'late'], extra: ['were'] },
    { k: 'match', pairs: [['noisy', 'shovqinli'], ['delicious', 'mazali'], ['wait', 'kutmoq'], ['lucky', 'omadli'], ['ill', 'kasal']] },
    { k: 'choice', q: 'Who came in the afternoon (Malika\'s text)?', opts: ['Her friend', 'The doctor', 'Her mother'], a: 1, why: "Matnda: *the doctor ... came in the afternoon.*" },
    { k: 'tf', q: 'Aziz did his homework in the evening.', a: false, why: "Matnda: *I didn't do my homework.*" },
    { k: 'fix', wrong: 'We buyed fruit and bread.', a: ['We bought fruit and bread.'], why: "**buy – bought**." },
    { k: 'translate', uz: "Biz bozorga bordik.", a: ['We went to the market.'], why: "**go – went**." },
    { k: 'listen', say: 'The bread was delicious.', opts: ['The bread was delicious.', 'The bread were delicious.', 'The bed was delicious.', 'The bread was dangerous.'], a: 0 },
    { k: 'dictation', say: "I didn't go to school.", a: ["I didn't go to school.", 'I did not go to school.'] },
    { k: 'speak', say: 'Last Saturday I went to the market.', uz: "O'tgan shanba kuni bozorga bordim." },
  ],
  quiz: [
    { k: 'tf', q: 'Aziz and his friends played football in the park.', a: true, why: "Matnda: *played football in the park.*" },
    { k: 'choice', q: 'How long did they play football?', opts: ['One hour', 'Two hours', 'Ten minutes'], a: 1, why: "*We played for two hours.*" },
    { k: 'choice', q: 'Malika stayed in bed because she was ___.', opts: ['tired', 'lucky', 'ill', 'late'], a: 2, why: "Matnda: *I was ill, so I stayed in bed.*" },
    { k: 'fill', q: 'Dilnoza and her mother ___ fruit and bread. (buy)', a: ['bought'], uz: 'Dilnoza va onasi meva va non sotib olishdi.' },
    { k: 'fix', wrong: 'Last Friday I am ill.', a: ['Last Friday I was ill.'], why: "*last Friday* — o'tgan zamon: **was**." },
    { k: 'order', uz: 'Biz uni kutdik.', words: ['We', 'waited', 'for', 'him'], extra: ['wait', 'are'] },
    { k: 'translate', uz: "Kecha yomg'ir yog'madi.", a: ["It didn't rain yesterday.", 'It did not rain yesterday.'] },
    { k: 'match', pairs: [['noisy', 'shovqinli'], ['delicious', 'mazali'], ['lucky', 'omadli'], ['ill', 'kasal']] },
  ],
  summary: [
    "O'qishdan oldin **savolga qarang**, so'ng **vaqt so'zlari** (*last Saturday, yesterday*) va fe'llarni (**-ed**, **went, saw, had**) toping.",
    "Noma'lum so'zda to'xtamang: **gapning ma'nosidan** taxmin qiling.",
    "Past Simple: **was / were**, **-ed**, noto'g'ri fe'llar; inkorda **didn't + V1** (*didn't go*).",
    "Yangi so'zlar: **noisy, delicious, wait, lucky, ill, rest**.",
  ],
  homework: "O'tgan haftadagi bir kuningiz haqida 4–5 ta gap yozing va ularni baland ovozda o'qing. Masalan: *Last Sunday I got up early. I went to the park. It was sunny. I didn't do my homework.*",
};

export default lesson;
