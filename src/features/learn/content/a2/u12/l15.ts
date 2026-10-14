import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing a short past story. Recycles first/then/after that/finally (l7), Past Simple, Past Continuous, when/while/as soon as.
const lesson: Lesson = {
  id: 'u12-l15',
  title: 'Reading and writing: a short story',
  titleUz: "O'qish va yozish: qisqa hikoya",
  mini: true,
  kind: 'skill',
  goal: "O'tgan voqea haqidagi qisqa hikoyani **o'qib tushunasiz** va o'zingiz 5–7 gaplik hikoya **yozasiz**: *First, we took the bus. Then we walked. While we were walking, it started to rain. Finally, the sun came out.*",
  slides: [
    {
      title: "O'qing: Mehmonlar va syurpriz",
      blocks: [
        { t: 'text', title: 'A surprise party', voice: 'emma',
          en: "Last Saturday was my brother's birthday, and we planned a surprise party. First, my mother made a big cake and I bought some candles. Then our guests arrived and we hid in the kitchen. While we were waiting, my brother was walking home from work. As soon as he opened the door, we shouted Surprise! He was tired after work, but he was very happy. After that we gave him a gift and sang a song. Finally, we all ate cake until midnight.",
          uz: "O'tgan shanba akamning tug'ilgan kuni edi va biz syurpriz ziyofat rejalashtirdik. Avval onam katta tort pishirdi, men esa shamlar sotib oldim. Keyin mehmonlar keldi va biz oshxonada yashirindik. Biz kutayotganimizda akam ishdan uyga piyoda kelayotgan edi. U eshikni ochishi bilan biz 'Syurpriz!' deb qichqirdik. U ishdan charchagan edi, lekin juda xursand bo'ldi. Keyin biz unga sovg'a berdik va qo'shiq aytdik. Nihoyat, hammamiz yarim tungacha tort yedik." },
        { t: 'check', ex: { k: 'tf', q: 'The guests hid in the living room.', a: false, why: "Matn: *we hid in the kitchen*." } },
        { t: 'check', ex: { k: 'choice', q: 'What was the writer\'s brother doing while they were waiting?', opts: ['Walking home from work.', 'Buying candles.', 'Making a cake.', 'Sleeping at home.'], a: 0, why: "Matn: *While we were waiting, my brother was walking home from work*." } },
      ],
    },
    {
      title: "Hikoya qanday tuziladi?",
      blocks: [
        { t: 'p', md: "Yaxshi qisqa hikoyada **voqealar tartib bilan** keladi. Tartib so'zlari hikoyani tushunarli qiladi, **Past Simple** voqealarni, **Past Continuous** esa fonni aytadi." },
        { t: 'table', head: ['Qism', "So'z", 'Misol'], speak: [2], rows: [
          ['Boshlanish', 'First, …', 'First, we took the bus.'],
          ['Davomi', 'Then … / Next, …', 'Then we walked to the lake.'],
          ['Fon', 'While … was / were …ing', 'While we were walking, it started to rain.'],
          ['Keyingi qadam', 'After that, …', 'After that, we ran to a café.'],
          ['Yakun', 'Finally, …', 'Finally, the sun came out.'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['First, we took the bus.', 'While we were walking, it started to rain.', 'Finally, we went home.'] },
          bad: { title: "Xato", items: ['First, we taked the bus.', 'While we walked, it was starting to rain.', 'Finally we are going home.'] } },
        { t: 'tip', tone: 'info', md: "**First, Then, After that, Finally** dan keyin odatda **vergul** qo'yiladi. **Then** dan keyin esa vergul shart emas: *Then we walked.* Noto'g'ri fe'llarni eslang: *took, made, bought, ate, went, hid, sang*." },
        { t: 'check', ex: { k: 'fill', q: 'First, we ___ the tickets. (buy)', a: ['bought'], why: "**buy – bought**." } },
      ],
    },
    {
      title: "Yozing: sizning hikoyangiz",
      blocks: [
        { t: 'p', md: "Endi o'zingiz yozing. Reja: **1) qachon va kim bilan → 2) First → 3) Then → 4) While/When (fon) → 5) After that → 6) Finally.** Jami 5–7 gap. Modelni o'qing va uni namuna qiling." },
        { t: 'text', title: 'Model text', voice: 'george',
          en: "Last Sunday my friends and I went to the mountains. First, we took the bus to the village. Then we walked for two hours. While we were walking, it started to rain. After that, we ran to a small cafe and drank hot tea. Finally, the sun came out and we took some photos.",
          uz: "O'tgan yakshanba do'stlarim bilan tog'ga bordik. Avval avtobusda qishloqqa bordik. Keyin ikki soat piyoda yurdik. Yurayotganimizda yomg'ir yog'a boshladi. Undan keyin kichik kafega yugurib borib, issiq choy ichdik. Nihoyat quyosh chiqdi va biz bir nechta surat oldik." },
        { t: 'check', ex: { k: 'order', uz: 'Avval avtobusga o\'tirdik.', words: ['First,', 'we', 'took', 'the', 'bus'], extra: ['take', 'taked'], why: "**take – took**." } },
        { t: 'check', ex: { k: 'choice', q: 'What did the friends do after that?', opts: ['They ran to a small cafe.', 'They took photos.', 'They went home.', 'They walked for two hours.'], a: 0, why: "Matn: *After that, we ran to a small cafe*." } },
      ],
    },
    {
      title: "Yozishdan oldin tekshiring",
      blocks: [
        { t: 'p', md: "Hikoyangizni yozib bo'lgach, shu 4 ta savolga javob bering:" },
        { t: 'examples', items: [
          { en: 'Did I use the past tense?', uz: "O'tgan zamondan foydalandimmi? (went, took, bought…)" },
          { en: 'Did I use first, then, after that and finally?', uz: "Tartib so'zlarini ishlatdimmi?" },
          { en: 'Did I use while or when once?', uz: "while yoki when ni bir marta ishlatdimmi?" },
          { en: 'Does every sentence start with a capital letter and end with a full stop?', uz: "Har bir gap bosh harf bilan boshlanib, nuqta bilan tugadimi?" },
        ] },
        { t: 'tip', tone: 'good', md: "Gaplarni qisqa tuting. Har bir gapda **bitta fikr**. Mukammal bo'lishi shart emas: xato qilsangiz ham yozaveringiz, keyin tekshirasiz." },
        { t: 'check', ex: { k: 'fix', wrong: 'While we walked home, we are seeing a big dog.', a: ['While we were walking home, we saw a big dog.'], why: "**while** + was/were walking; qisqa voqea — Past Simple: *saw*." } },
      ],
    },
  ],
  words: [
    { en: 'surprise', uz: 'syurpriz, kutilmagan narsa', ipa: 'səˈpraɪz', pos: 'noun', ex: 'We planned a surprise for her.', exUz: "Biz u uchun syurpriz rejalashtirdik." },
    { en: 'hide – hid', uz: 'yashirinmoq; yashirmoq', ipa: 'haɪd – hɪd', pos: 'verb', ex: 'The children hid behind the door.', exUz: "Bolalar eshik orqasiga yashirindi." },
    { en: 'gift', uz: 'sovg\'a', ipa: 'ɡɪft', pos: 'noun', ex: 'She gave me a small gift.', exUz: "U menga kichik sovg'a berdi." },
    { en: 'candle', uz: 'sham', ipa: 'ˈkændl', pos: 'noun', ex: 'There were ten candles on the cake.', exUz: "Tortda o'nta sham bor edi." },
    { en: 'guest', uz: 'mehmon', ipa: 'ɡest', pos: 'noun', ex: 'The guests arrived at six.', exUz: "Mehmonlar oltida keldi." },
  ],
  practice: [
    { k: 'tf', q: 'The party was on Sunday.', a: false, why: "Matn: *Last Saturday* — shanba." },
    { k: 'choice', q: 'What did the family do as soon as the brother opened the door?', opts: ['They shouted Surprise!', 'They sang a song.', 'They ate cake.', 'They hid in the kitchen.'], a: 0, why: "Matn: *As soon as he opened the door, we shouted Surprise!*" },
    { k: 'fill', q: 'First, my mother ___ a big cake. (make)', a: ['made'], uz: "Avval onam katta tort pishirdi.", why: "**make – made**." },
    { k: 'order', uz: "Keyin mehmonlar keldi va biz oshxonada yashirindik.", words: ['Then', 'our', 'guests', 'arrived', 'and', 'we', 'hid', 'in', 'the', 'kitchen'], extra: ['hide', 'hided'], why: "**hide – hid**." },
    { k: 'order', uz: "Kutayotganimizda akam uyga kelayotgan edi.", words: ['While', 'we', 'were', 'waiting,', 'my', 'brother', 'was', 'walking', 'home'], extra: ['walked', 'is'], why: "**while** + Past Continuous." },
    { k: 'fix', wrong: 'After that, we eated the cake.', a: ['After that, we ate the cake.', 'After that we ate the cake.'], why: "**eat – ate**." },
    { k: 'fix', wrong: 'While I was walk to school, it started to rain.', a: ['While I was walking to school, it started to rain.'], why: "**was / were + V-ing**." },
    { k: 'translate', uz: 'Avval men non sotib oldim.', a: ['First, I bought some bread.', 'First I bought some bread.', 'First, I bought bread.', 'First I bought bread.', 'First, I bought the bread.', 'First I bought the bread.'], why: "**First, I bought…**" },
    { k: 'translate', uz: 'Nihoyat, hammamiz tort yedik.', a: ['Finally, we all ate cake.', 'Finally we all ate cake.', 'Finally, we ate cake.', 'Finally we ate cake.', 'Finally, we all ate the cake.', 'Finally we all ate the cake.'], why: "**Finally, we all ate cake.**" },
    { k: 'match', pairs: [['surprise', 'syurpriz'], ['hide', 'yashirinmoq'], ['gift', "sovg'a"], ['candle', 'sham'], ['guest', 'mehmon']] },
    { k: 'dictation', say: 'First, my mother made a big cake.', a: ['First, my mother made a big cake.'], uz: "Avval onam katta tort pishirdi." },
    { k: 'choice', q: 'Which word do you use to end a story?', opts: ['Finally', 'First', 'Suddenly', 'Then'], a: 0, why: "Yakunda **Finally** yoki **In the end**." },
  ],
  quiz: [
    { k: 'choice', q: '___, we bought the tickets. Then we went into the cinema.', opts: ['First', 'Finally', 'Although', 'Because'], a: 0, why: "Birinchi qadam — **First**." },
    { k: 'fill', q: 'As soon as he opened the door, we ___ Surprise! (shout)', a: ['shouted'], why: "Qisqa voqea — Past Simple: **shouted**." },
    { k: 'order', uz: "Keyin biz ikki soat piyoda yurdik.", words: ['Then', 'we', 'walked', 'for', 'two', 'hours'], extra: ['walk', 'were'], why: "Past Simple: **walked**." },
    { k: 'translate', uz: "Yurayotganimizda yomg'ir yog'a boshladi.", a: ['While we were walking, it started to rain.', 'It started to rain while we were walking.'], why: "**While we were walking, it started to rain.**" },
    { k: 'fix', wrong: 'First, we taked the bus to the village.', a: ['First, we took the bus to the village.', 'First we took the bus to the village.'], why: "**take – took**." },
    { k: 'tf', q: "*After that* — bu hikoyada yakunni bildiradi.", a: false, why: "**After that** — keyingi qadam. Yakun uchun **Finally**." },
    { k: 'match', pairs: [['first', 'avval'], ['then', 'keyin'], ['after that', 'undan keyin'], ['finally', 'nihoyat']] },
    { k: 'choice', q: 'Which sentence is correct?', opts: ['Last week we went to the lake.', 'Last week we goed to the lake.', 'Last week we go to the lake.', 'Last week we gone to the lake.'], a: 0, why: "**go – went**." },
  ],
  summary: [
    "Hikoya tartibi: **First, … Then … While/When … After that, … Finally, …**",
    "Voqealar **Past Simple** da (went, took, made), fon esa **Past Continuous** da (we were walking).",
    "Yozgach tekshiring: o'tgan zamon, tartib so'zlari, bosh harf va nuqta.",
    "Yangi so'zlar: **surprise, hide – hid, gift, candle, guest**.",
  ],
  homework: "O'tgan hafta oxiri haqida 5–7 gaplik hikoya yozing: First, Then, While, After that, Finally so'zlaridan foydalaning.",
};

export default lesson;
