import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u4-l8',
  title: 'Present Continuous',
  titleUz: 'Present Continuous: hozir nima qilyapman',
  goal: "**am / is / are + -ing** yordamida hozir, ayni paytda bo'layotgan ishlarni aytasiz, *-ing* qo'shishning imlo qoidalarini bilasiz va *What are you doing?* kabi savol hamda inkor gaplar tuza olasiz.",
  slides: [
    {
      title: 'Hozir nima bo\'lyapti?',
      blocks: [
        { t: 'p', md: "O'zbek tilida *o'qiy**man*** (odatda, har doim) va *o'qi**yapman*** (hozir) farq qiladi. Ingliz tilida ham shunday:\n• **Present Simple** — odat, doimiy holat: *I **read** books every day.* (Har kuni kitob o'qiyman.)\n• **Present Continuous** — **hozir**, ayni paytda: *I **am reading** a book now.* (Hozir kitob o'qiyapman.)" },
        { t: 'p', md: "Present Continuous ikki qismdan iborat:\n**am / is / are** + **fe'l + -ing**\n*-ing* qo'shimchasi o'zbekchadagi **-yap** ga o'xshaydi." },
        {
          t: 'examples', items: [
            { en: "I'm talking to my friend.", uz: "Do'stim bilan gaplashyapman." },
            { en: "Look! It's raining.", uz: "Qarang! Yomg'ir yog'yapti." },
            { en: 'The children are sleeping now.', uz: 'Bolalar hozir uxlayapti.' },
          ],
        },
        { t: 'tip', tone: 'info', md: "Bu zamon bilan ko'pincha **now** (hozir), **at the moment** (ayni paytda) so'zlari, shuningdek **Look!** va **Listen!** ishlatiladi." },
      ],
    },
    {
      title: 'Shakl: am / is / are + -ing',
      blocks: [
        {
          t: 'table', head: ['Ega', "To'liq", 'Qisqa'], speak: [1, 2],
          rows: [
            ['I', 'I am walking.', "I'm walking."],
            ['you / we / they', 'They are walking.', "They're walking."],
            ['he / she / it', 'She is walking.', "She's walking."],
          ],
        },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ["I'm reading now.", 'She is working at the moment.', 'They are playing football.'] },
          bad: { title: "Noto'g'ri", items: ['I reading now.', 'She is work at the moment.', 'They playing football.'] },
        },
        { t: 'tip', tone: 'warn', md: "O'zbek tilida so'zlovchilarning eng ko'p xatosi — **am/is/are** ni tashlab ketish: *I reading* ❌. Ikkala qism ham **shart**: ***I'm** read**ing**.* ✅" },
        { t: 'check', ex: { k: 'choice', q: "\"U (ayol) hozir xat yozyapti.\"", opts: ['She writing a letter now.', 'She is write a letter now.', 'She is writing a letter now.', 'She writes a letter now.'], a: 2, why: "**is + writing** — ikkala qism ham kerak." } },
      ],
    },
    {
      title: '-ing imlo qoidalari',
      blocks: [
        {
          t: 'table', head: ['Qoida', 'Misollar'], speak: [1],
          rows: [
            ["Ko'pchilik fe'llar: + ing", 'walk → walking, talk → talking, sleep → sleeping, wear → wearing'],
            ['-e bilan tugasa: e tushadi + ing', 'make → making, write → writing, dance → dancing'],
            ['qisqa unli + bitta undosh: undosh ikkilanadi', 'sit → sitting, run → running, swim → swimming, stop → stopping'],
            ['-y bilan tugasa: o\'zgarmaydi + ing', 'carry → carrying, play → playing, study → studying'],
          ],
        },
        { t: 'p', md: "Ikkilanish qoidasi: so'z **undosh + bitta unli + bitta undosh** bilan tugasa (s-**i-t**, r-**u-n**, sw-**i-m**). *eat, sleep, rain* da ikkita unli bor → ikkilanmaydi: *eating, sleeping, raining*." },
        { t: 'tip', tone: 'warn', md: "*-w, -x, -y* hech qachon ikkilanmaydi: *snow → snowing, fix → fixing, play → playing*. Present Simple'dagi *-y → -ies* qoidasi bu yerda ishlamaydi: *study → studying* (*studiing* ❌)." },
        {
          t: 'sounds', items: [
            { label: '-ing = ŋ', say: 'walking talking sleeping', uz: "**-ing** oxirida **\"ŋ\"** — burundan chiqadigan \"ng\" (o'zbekcha *ming*, *keng* dagi kabi). Oxirida alohida **\"g\"** aytilmaydi: \"wo:kiŋ\", \"wo:king\" emas.", examples: ['walking', 'making', 'sitting'] },
          ],
        },
        { t: 'check', ex: { k: 'fill', q: 'sit → ___', a: ['sitting'], why: "qisqa unli + bitta undosh → **t** ikkilanadi: **sitting**." } },
        { t: 'check', ex: { k: 'fill', q: 'make → ___', a: ['making'], why: "**-e** tushadi: **making**." } },
      ],
    },
    {
      title: 'Inkor va savol',
      blocks: [
        {
          t: 'table', head: ['', 'Shakl', 'Misol'], speak: [2],
          rows: [
            ['Inkor (–)', "am not / isn't / aren't + -ing", "He isn't sleeping. I'm not working."],
            ['Savol (?)', 'Am/Is/Are + ega + -ing?', 'Are you listening?'],
            ['Qisqa javob', 'Yes, … am/is/are. / No, … isn\'t/aren\'t.', "Yes, I am. / No, she isn't."],
            ['Wh-savol', "So'roq so'zi + am/is/are + ega + -ing?", 'What are you doing?'],
          ],
        },
        { t: 'p', md: "Do/does **kerak emas** — savolni *am/is/are* o'zi tuzadi, xuddi to be dagi kabi." },
        {
          t: 'compare',
          good: { title: "To'g'ri", items: ['What are you doing?', 'Is it raining?', "We aren't watching TV."] },
          bad: { title: "Noto'g'ri", items: ['What do you doing?', 'Does it raining?', "We don't watching TV."] },
        },
        { t: 'check', ex: { k: 'order', uz: 'U (erkak) nima kiyib turibdi?', words: ['What', 'is', 'he', 'wearing'], extra: ['does'], why: "**What + is + he + wearing?**" } },
      ],
    },
    {
      title: 'Odatda yoki hozir?',
      blocks: [
        {
          t: 'table', head: ['Present Simple (odatda)', 'Present Continuous (hozir)'], speak: [0, 1],
          rows: [
            ['I usually walk to work.', "Today I'm driving."],
            ['She often wears a dress.', "Now she's wearing a shirt."],
            ['He sleeps at night.', "Shh! He's sleeping now."],
          ],
        },
        { t: 'p', md: "Signal so'zlar:\n• **Simple**: always, usually, often, every day (3-bo'lim)\n• **Continuous**: now, at the moment, today, Look!, Listen!" },
        { t: 'tip', tone: 'info', md: "Ba'zi fe'llar odatda *-ing* bilan ishlatilmaydi, chunki ular harakat emas, holat: **like, love, know, need, want, have got**. *I need help now.* ✅ — *I'm needing help* ❌." },
        { t: 'check', ex: { k: 'choice', q: "Listen! Somebody ___ .", opts: ['laughs', 'is laughing', 'laughing', 'laugh'], a: 1, why: "**Listen!** — hozir bo'layotgan ish → **is laughing**." } },
      ],
    },
    {
      title: 'Telefonda: dialog',
      blocks: [
        {
          t: 'dialog', lines: [
            { who: 'Ona', en: 'Hi, Zarina! What are you doing?', uz: 'Salom, Zarina! Nima qilyapsan?' },
            { who: 'Zarina', en: "I'm walking home. I'm carrying a lot of bags!", uz: "Uyga piyoda ketyapman. Ko'p sumka ko'tarib olganman!" },
            { who: 'Ona', en: 'Is it raining there?', uz: "U yerda yomg'ir yog'yaptimi?" },
            { who: 'Zarina', en: "No, it isn't. What is Dad doing?", uz: "Yo'q. Dadam nima qilyapti?" },
            { who: 'Ona', en: "He's making plov, and your brothers are sitting in the kitchen and laughing.", uz: "Palov qilyapti, akalaring esa oshxonada o'tirib kulishyapti." },
            { who: 'Zarina', en: "Great! I'm coming!", uz: 'Zo\'r! Kelyapman!' },
          ],
        },
        { t: 'tip', tone: 'good', md: "Mashq: hozir atrofingizda nima bo'layotganini 3 ta gap bilan ayting: *I'm sitting… My mother is… It isn't raining.*" },
      ],
    },
  ],
  words: [
    { en: 'walk', uz: 'piyoda yurmoq', ipa: 'wɔːk', pos: 'verb', ex: "I'm walking to school now.", exUz: 'Hozir maktabga piyoda ketyapman.' },
    { en: 'talk', uz: 'gaplashmoq', ipa: 'tɔːk', pos: 'verb', ex: 'She is talking to her mother.', exUz: 'U onasi bilan gaplashyapti.' },
    { en: 'sleep', uz: 'uxlamoq', ipa: 'sliːp', pos: 'verb', ex: 'The baby is sleeping.', exUz: 'Chaqaloq uxlayapti.' },
    { en: 'wear', uz: 'kiymoq, kiyib yurmoq', ipa: 'weə', pos: 'verb', ex: "He's wearing a black jacket.", exUz: 'U qora kurtka kiyib olgan.' },
    { en: 'rain', uz: "yomg'ir yog'moq", ipa: 'reɪn', pos: 'verb', ex: "It's raining at the moment.", exUz: "Ayni paytda yomg'ir yog'yapti." },
    { en: 'make', uz: 'qilmoq, tayyorlamoq', ipa: 'meɪk', pos: 'verb', ex: "My father is making tea.", exUz: 'Otam choy damlayapti.' },
    { en: 'sit', uz: "o'tirmoq", ipa: 'sɪt', pos: 'verb', ex: 'We are sitting in the living room.', exUz: "Biz mehmonxonada o'tiribmiz." },
    { en: 'carry', uz: "ko'tarib bormoq", ipa: 'ˈkær.i', pos: 'verb', ex: "She's carrying a big bag.", exUz: "U katta sumka ko'tarib ketyapti." },
    { en: 'laugh', uz: 'kulmoq', ipa: 'lɑːf', pos: 'verb', ex: 'Why are you laughing?', exUz: 'Nega kulyapsiz?' },
    { en: 'write', uz: 'yozmoq', ipa: 'raɪt', pos: 'verb', ex: "I'm writing a letter to my uncle.", exUz: 'Amakimga xat yozyapman.' },
  ],
  practice: [
    { k: 'match', pairs: [['walk', 'piyoda yurmoq'], ['talk', 'gaplashmoq'], ['sleep', 'uxlamoq'], ['wear', 'kiymoq'], ['rain', "yomg'ir yog'moq"]] },
    { k: 'match', pairs: [['make', 'tayyorlamoq'], ['sit', "o'tirmoq"], ['carry', "ko'tarib bormoq"], ['laugh', 'kulmoq'], ['write', 'yozmoq']] },
    { k: 'listen', say: "They're sitting in the kitchen.", opts: ["They're sitting in the kitchen.", 'They sit in the kitchen.', "They're eating in the kitchen.", "There's a sitting room."], a: 0 },
    { k: 'listen', say: 'laughing', opts: ['laughing', 'walking', 'talking', 'making'], a: 0, why: "**laugh** — \"la:f\": *gh* bu yerda **f** bo'lib o'qiladi." },
    { k: 'choice', q: "*write* + ing =", opts: ['writeing', 'writting', 'writing', 'writng'], a: 2, why: "**-e** tushadi: **writing** (t ikkilanmaydi — *write* da unli uzun)." },
    { k: 'choice', q: "*run* + ing =", opts: ['runing', 'running', 'runeing', 'runnig'], a: 1, why: "qisqa unli + bitta undosh → **running**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['I am walk to work now.', 'I walking to work now.', "I'm walking to work now.", 'I does walking to work now.'], a: 2 },
    { k: 'fill', q: 'carry → ___', a: ['carrying'], why: "-y o'zgarmaydi: **carrying**." },
    { k: 'fill', q: 'Look! It ___ raining.', a: ['is', "'s"], why: "it → **is** raining." },
    { k: 'fill', q: 'The children ___ sleeping. (–)', a: ["aren't", 'are not'], uz: 'Bolalar uxlamayapti.', why: "they, inkor → **aren't**." },
    { k: 'fill', q: 'What ___ you making?', a: ['are'], uz: 'Nima tayyorlayapsiz?' },
    { k: 'tf', q: "*-ing* oxirida alohida, aniq **\"g\"** tovushi aytiladi.", a: false, why: "**-ing** = burun tovushi **ŋ**, alohida *g* yo'q." },
    { k: 'tf', q: "*I usually walk to work, but today I'm driving.* — zamonlar to'g'ri ishlatilgan.", a: true, why: "*usually* → Simple; *today* (hozir) → Continuous." },
    { k: 'order', uz: 'Nega kulyapsiz?', words: ['Why', 'are', 'you', 'laughing'], extra: ['do'], why: "**Why + are + you + -ing?**" },
    { k: 'translate', uz: 'Men hozir xat yozyapman.', a: ["I'm writing a letter now", 'I am writing a letter now', "I'm writing a letter", 'I am writing a letter', "Now I'm writing a letter", 'Now I am writing a letter'] },
    { k: 'speak', say: "I'm sitting in my room. It isn't raining.", uz: "Hozir nima qilayotganingizni ayting" },
  ],
  quiz: [
    { k: 'listen', say: "She isn't wearing a dress.", opts: ['She is wearing a dress.', "She isn't wearing a dress.", "She doesn't wear a dress.", "She isn't washing a dress."], a: 1 },
    { k: 'listen', say: 'Are they talking?', opts: ['Are they walking?', 'Are they talking?', 'Do they talk?'], a: 1 },
    { k: 'choice', q: "*swim* + ing =", opts: ['swiming', 'swimming', 'swimeing', 'swimmming'], a: 1 },
    { k: 'choice', q: "My brother usually ___ tea, but now he ___ coffee.", opts: ['drinks / is drinking', 'is drinking / drinks', 'drink / drinking', 'drinks / drinks'], a: 0, why: "*usually* → **drinks**; *now* → **is drinking**." },
    { k: 'fill', q: 'dance → ___', a: ['dancing'] },
    { k: 'fill', q: "Is your mother cooking? — No, she ___.", a: ["isn't", 'is not'] },
    { k: 'fill', q: 'I ___ sitting on the sofa at the moment.', a: ['am', "'m"] },
    { k: 'order', uz: 'Ular hozir nima qilyapti?', words: ['What', 'are', 'they', 'doing', 'now'], extra: ['do'] },
    { k: 'translate', uz: "Yomg'ir yog'yaptimi?", a: ['Is it raining', 'Is it raining now'] },
    { k: 'translate', uz: "U (erkak) choy tayyorlayapti.", a: ["He's making tea", 'He is making tea', "He's making some tea", 'He is making some tea', "He's making the tea", 'He is making the tea'] },
    { k: 'translate', uz: "Biz uxlamayapmiz.", a: ["We aren't sleeping", 'We are not sleeping', "We're not sleeping"] },
  ],
  summary: [
    "**am / is / are + fe'l-ing** — hozir bo'layotgan ish: *I'm walking. She's sleeping.* (ikkala qism ham shart!).",
    "Imlo: **make → making** (e tushadi), **sit → sitting** (undosh ikkilanadi), **carry → carrying**.",
    "Inkor: **isn't / aren't / 'm not + -ing**; savol: **Are you…ing?** — *What are you doing?* (do yo'q).",
    "Signal so'zlar: **now, at the moment, Look!, Listen!**; odat uchun esa Present Simple.",
    "*-ing* oxiri — burun tovushi **ŋ**, alohida *g* aytilmaydi.",
  ],
  homework: "Uyingizdagi oila a'zolari ayni paytda nima qilayotganini 6 ta gap bilan yozing (*My father is reading…*), 2 ta inkor gap qo'shing. Keyin do'stingizga yoki o'zingizga 3 ta savol bering: *What are you doing? Are you…?*",
};

export default lesson;
