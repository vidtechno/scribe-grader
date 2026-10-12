import type { Lesson } from '../../../types';

// Mini lesson (grammar): -ing spelling only. Recycles Present Continuous basics (u4-l8).
const lesson: Lesson = {
  id: 'u4-l17',
  title: '-ing: spelling',
  titleUz: "-ing qo'shish imlosi: run → running",
  mini: true,
  goal: "Fe'lga **-ing** qo'shganda imloni xatosiz yozasiz: **work → working, make → making, run → running, lie → lying**.",
  slides: [
    {
      title: '4 ta imlo qoidasi',
      blocks: [
        { t: 'p', md: "Present Continuous da fe'lning oxiriga **-ing** qo'shiladi: *I'm **work**ing.* Ko'p fe'llarda hech narsa o'zgarmaydi, lekin to'rtta holatda imlo o'zgaradi." },
        {
          t: 'table', head: ['Qoida', 'Misollar'], speak: [1],
          rows: [
            ["1. Odatda: shunchaki + ing", 'work → working, eat → eating, wash → washing'],
            ['2. -e bilan tugasa: e tushadi', 'make → making, write → writing, dance → dancing'],
            ['3. Qisqa unli + 1 undosh: undosh ikkilanadi', 'run → running, sit → sitting, chat → chatting'],
            ['4. -ie bilan tugasa: ie → y', 'lie → lying'],
          ],
        },
        {
          t: 'examples', items: [
            { en: 'She is making tea.', uz: 'U choy tayyorlayapti.' },
            { en: 'The boys are running in the park.', uz: "O'g'il bolalar bog'da yugurishyapti." },
            { en: "Dad's lying on the sofa.", uz: 'Dadam divanda yotibdi.' },
            { en: "I'm washing my hands.", uz: "Qo'limni yuvyapman." },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'make → ___', a: ['making'], why: "**-e** tushadi: **making** (*makeing* emas)." } },
      ],
    },
    {
      title: 'Undosh qachon ikkilanadi?',
      blocks: [
        { t: 'p', md: "So'z **undosh + bitta unli + bitta undosh** bilan tugasa, oxirgi undosh ikkilanadi: r-**u-n** → **runn**ing, s-**i-t** → **sitt**ing, sw-**i-m** → **swimm**ing, st-**o-p** → **stopp**ing." },
        { t: 'p', md: "Ikkita unli bo'lsa (*eat, sleep, rain*) yoki so'z -w, -x, -y bilan tugasa (*play, snow, fix*) — **ikkilanmaydi**: eating, sleeping, raining, playing." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['running', 'making', 'lying', 'playing'] },
          bad: { title: "Noto'g'ri", items: ['runing', 'makeing', 'lieing', 'plaiing'] },
        },
        { t: 'tip', tone: 'warn', md: "Present Simple dagi qoidani aralashtirmang: *study → studies*, lekin *study → **studying*** (-y o'zgarmaydi)." },
        { t: 'check', ex: { k: 'choice', q: '*sit* + ing =', opts: ['siting', 'sitting', 'siteing', 'sittting'], a: 1, why: "qisqa unli + bitta undosh → **t** ikkilanadi: **sitting**." } },
        { t: 'check', ex: { k: 'choice', q: '*eat* + ing =', opts: ['eatting', 'eating', 'eatng', 'eaing'], a: 1, why: "*eat* da ikkita unli (**ea**) → ikkilanmaydi: **eating**." } },
      ],
    },
    {
      title: 'Gapda sinab ko\'ring',
      blocks: [
        { t: 'p', md: "Imlo faqat -ing shaklida muhim emas — gapda **am/is/are** ham bo'lishi shart." },
        {
          t: 'table', head: ['Gap', 'Qoida'], speak: [0],
          rows: [
            ["We're chatting online.", '3: chat → chatting'],
            ["He's painting a picture.", '1: paint → painting'],
            ["They're dancing now.", '2: dance → dancing'],
            ["The cat's lying on my bed.", '4: lie → lying'],
          ],
        },
        { t: 'check', ex: { k: 'fix', wrong: "My sister is writeing a message.", a: ["My sister is writing a message."], hint: '-e bilan tugaydigan fe\'l.', why: "*write* → e tushadi: **writing**." } },
        { t: 'check', ex: { k: 'translate', uz: "Biz yuguryapmiz.", a: ["We're running", 'We are running'], why: "**run** → **running**." } },
      ],
    },
  ],
  words: [
    { en: 'lie', uz: 'yotmoq', ipa: 'laɪ', pos: 'verb', ex: 'My dog is lying under the table.', exUz: 'Itim stol tagida yotibdi.' },
    { en: 'eat', uz: 'yemoq', ipa: 'iːt', pos: 'verb', ex: 'We are eating plov now.', exUz: 'Biz hozir palov yeyapmiz.' },
    { en: 'wash', uz: 'yuvmoq', ipa: 'wɒʃ', pos: 'verb', ex: 'She is washing the dishes.', exUz: 'U idish-tovoq yuvyapti.' },
    { en: 'paint', uz: 'bo\'yamoq, rasm chizmoq', ipa: 'peɪnt', pos: 'verb', ex: 'He is painting a house.', exUz: "U uyni bo'yayapti." },
    { en: 'chat', uz: 'suhbatlashmoq, chat qilmoq', ipa: 'tʃæt', pos: 'verb', ex: "I'm chatting with my cousin.", exUz: "Amakivachcham bilan chatlashyapman." },
    { en: 'plan', uz: 'rejalashtirmoq', ipa: 'plæn', pos: 'verb', ex: 'They are planning a party.', exUz: 'Ular ziyofat rejalashtiryapti.' },
  ],
  practice: [
    { k: 'match', pairs: [['lie', 'yotmoq'], ['eat', 'yemoq'], ['wash', 'yuvmoq'], ['paint', "bo'yamoq"], ['chat', 'suhbatlashmoq'], ['plan', 'rejalashtirmoq']] },
    { k: 'choice', q: '*run* + ing =', opts: ['runing', 'running', 'runeing', 'runnning'], a: 1, why: "**n** ikkilanadi: **running**." },
    { k: 'choice', q: '*lie* + ing =', opts: ['lieing', 'liing', 'lying', 'lyeing'], a: 2, why: "**-ie → -y** + ing: **lying**." },
    { k: 'choice', q: "Qaysi biri noto'g'ri?", opts: ['dancing', 'writing', 'makeing', 'taking'], a: 2, why: "*make* → e tushadi: **making**." },
    { k: 'fill', q: 'work → ___', a: ['working'], why: "Oddiy qoida: **working**." },
    { k: 'fill', q: 'dance → ___', a: ['dancing'], why: "e tushadi: **dancing**." },
    { k: 'fill', q: 'chat → ___', a: ['chatting'], why: "qisqa unli + bitta undosh: **chatting**." },
    { k: 'fill', q: 'Look! The cat is ___ on the sofa. (lie)', a: ['lying'], why: "**lie → lying**." },
    { k: 'listen', say: 'swimming', opts: ['swimming', 'sleeping', 'sitting', 'stopping'], a: 0 },
    { k: 'dictation', say: "He's running in the park.", a: ["He's running in the park.", 'He is running in the park.', "He's running in the park", 'He is running in the park'] },
    { k: 'fix', wrong: 'The children are runing now.', a: ['The children are running now.'], hint: 'run — qisqa unli + bitta undosh.', why: "**running**." },
    { k: 'fix', wrong: 'I am makeing lunch.', a: ['I am making lunch.', "I'm making lunch."], why: "e tushadi: **making**." },
    { k: 'order', uz: 'Biz hozir ovqat yeyapmiz.', words: ['We', 'are', 'eating', 'now'], extra: ['eatting'], why: "*eat* → **eating** (t ikkilanmaydi)." },
    { k: 'translate', uz: "U (ayol) idish-tovoq yuvyapti.", a: ["She's washing the dishes", 'She is washing the dishes', "She's washing the dishes.", 'She is washing the dishes.'], why: "**is + washing**." },
    { k: 'speak', say: "I'm sitting and writing.", uz: "Hozir nima qilayotganingizni ayting" },
  ],
  quiz: [
    { k: 'choice', q: '*stop* + ing =', opts: ['stoping', 'stopping', 'stopeing', 'stoppping'], a: 1 },
    { k: 'choice', q: '*write* + ing =', opts: ['writing', 'writeing', 'writting', 'writng'], a: 0 },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["He's sitting here.", "He's siting here.", "He's sitteing here.", "He's sit here."], a: 0 },
    { k: 'listen', say: "They're chatting online.", opts: ["They're chatting online.", "They're cooking online.", 'They chat online.', "They're sitting online."], a: 0 },
    { k: 'fill', q: 'paint → ___', a: ['painting'] },
    { k: 'fill', q: 'swim → ___', a: ['swimming'] },
    { k: 'fix', wrong: 'My dad is lieing on the sofa.', a: ['My dad is lying on the sofa.', "My dad's lying on the sofa."], why: "**lie → lying**." },
    { k: 'order', uz: 'U (erkak) rejalashtiryapti.', words: ['He', 'is', 'planning'], extra: ['planing'], why: "*plan* → **planning**." },
    { k: 'translate', uz: 'Men hozir yozyapman.', a: ["I'm writing now", 'I am writing now', "I'm writing", 'I am writing', "Now I'm writing", 'Now I am writing'] },
  ],
  summary: [
    "Odatda: **work → working, eat → eating, wash → washing**.",
    "**-e** tushadi: **make → making, write → writing, dance → dancing**.",
    "Qisqa unli + bitta undosh: undosh ikkilanadi: **run → running, sit → sitting, chat → chatting**.",
    "**lie → lying**; *-y* o'zgarmaydi: *play → playing*.",
  ],
  homework: "10 ta fe'lni -ing shaklida yozing (make, run, sit, lie, write, eat, swim, dance, stop, play), har biridan *I'm … / She's …* gap tuzing.",
};

export default lesson;
