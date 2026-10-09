import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: 'u3-l6',
  title: 'Time & daily routine',
  titleUz: 'Vaqt va kun tartibi',
  goal: "Soatni inglizcha aytasiz (**seven o'clock, half past seven, quarter to eight**), vaqtni so'raysiz va kun tartibingizni Present Simple bilan tasvirlaysiz: *I get up at seven. She has lunch at one.*",
  slides: [
    {
      title: "Soat necha? — What time is it?",
      blocks: [
        { t: 'p', md: "O'zbekchada: *Soat necha? — Soat yetti.* Inglizchada savol **What time is it?** va javob doim **It's** bilan boshlanadi: *It's seven o'clock.*" },
        { t: 'examples', items: [
          { en: "What time is it?", uz: 'Soat necha?' },
          { en: "It's seven o'clock.", uz: 'Soat yetti.', note: "**o'clock** — faqat butun soatlarda: 7:00" },
          { en: "It's ten o'clock.", uz: "Soat o'n." },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["It's nine o'clock.", "It's nine."] }, bad: { title: "Noto'g'ri", items: ["Nine o'clock.", "It's nine o'clocks.", "It's nine hours."] } },
        { t: 'tip', tone: 'info', md: "**o'clock** — \"ə-KLOK\". U \"of the clock\" (soat bo'yicha) so'zlaridan qisqargan. Ko'plik olmaydi: *nine o'clock* (\"o'clocks\" emas)." },
        { t: 'check', ex: { k: 'listen', say: "It's eleven o'clock", opts: ['7:00', '11:00', '10:00', '12:00'], a: 1 } },
      ],
    },
    {
      title: 'past va to: soatning ikki yarmi',
      blocks: [
        { t: 'p', md: "Soat siferblatini ikkiga bo'ling:\n• **o'ng yarmi (1–30 daqiqa)** → **past** (… dan o'tdi): *ten **past** seven* = 7:10\n• **chap yarmi (31–59 daqiqa)** → **to** (… ga qoldi): *ten **to** eight* = 7:50\nMaxsus so'zlar: 15 daqiqa = **quarter** (chorak), 30 daqiqa = **half** (yarim)." },
        {
          t: 'table', head: ['Soat', 'Inglizcha', "O'zbekcha"], speak: [1],
          rows: [
            ['7:00', "seven o'clock", 'soat yetti'],
            ['7:05', 'five past seven', 'yettidan besh daqiqa o\'tdi'],
            ['7:15', 'quarter past seven', 'yettidan chorak o\'tdi'],
            ['7:30', 'half past seven', 'yetti yarim'],
            ['7:40', 'twenty to eight', 'sakkizga yigirma daqiqa bor'],
            ['7:45', 'quarter to eight', 'sakkizga chorak bor'],
            ['7:55', 'five to eight', 'sakkizga besh daqiqa bor'],
          ],
        },
        { t: 'tip', tone: 'warn', md: "Diqqat: **half past seven** = **7:30** (yetti yarim), 8:30 emas! **quarter to eight** = 7:45 — \"to\" dan keyin **keyingi** soat aytiladi." },
        { t: 'tip', tone: 'good', md: "Oson yo'l ham bor: raqamlarni ketma-ket ayting: 7:15 = *seven fifteen*, 7:30 = *seven thirty*, 7:45 = *seven forty-five*. Bu ham to'liq to'g'ri — ayniqsa jadval va poyezd vaqtlarida." },
        { t: 'check', ex: { k: 'choice', q: "**8:30** qanday aytiladi?", opts: ['half past seven', 'half to eight', 'half past eight', 'eight half'], a: 2, why: "8:30 — sakkizdan yarim o'tdi: **half past eight** (yoki *eight thirty*)." } },
        { t: 'check', ex: { k: 'choice', q: "**quarter to ten** — bu soat necha?", opts: ['10:15', '9:15', '9:45', '10:45'], a: 2, why: "\"to\" — keyingi soatga qoldi: o'nga chorak bor = **9:45**." } },
      ],
    },
    {
      title: "a.m., p.m. va kun qismlari",
      blocks: [
        {
          t: 'table', head: ['Belgi / ibora', "Ma'nosi", 'Misol'], speak: [2],
          rows: [
            ['a.m.', "tun yarmidan tushgacha (00:00–11:59)", '8 a.m. — eight a.m.'],
            ['p.m.', "tushdan keyin (12:00–23:59)", '8 p.m. — eight p.m.'],
            ['in the morning', 'ertalab', "seven o'clock in the morning"],
            ['in the afternoon', 'tushdan keyin', "three o'clock in the afternoon"],
            ['in the evening', 'kechqurun', "eight o'clock in the evening"],
            ['at night', 'kechasi', "eleven o'clock at night"],
          ],
        },
        { t: 'tip', tone: 'info', md: "Ingliz tilida kundalik nutqda 24 soatlik format (*20:00*) kam ishlatiladi. *20:00* = **8 p.m.** yoki *eight o'clock in the evening*. **a.m. / p.m.** ni **o'clock** bilan birga ishlatmang: ❌ *8 o'clock p.m.* ✅ *8 p.m.*" },
        { t: 'check', ex: { k: 'tf', q: "**3 p.m.** — bu ertalabki soat uch.", a: false, why: "**p.m.** — tushdan keyin: 3 p.m. = 15:00." } },
      ],
    },
    {
      title: 'Kun tartibi: wake up, get up, have breakfast…',
      blocks: [
        {
          t: 'table', head: ['Ibora', "O'zbekcha", 'Misol'], speak: [0, 2],
          rows: [
            ['wake up', "uyg'onmoq", 'I wake up at six.'],
            ['get up', "o'rnidan turmoq", 'I get up at quarter past six.'],
            ['have breakfast', 'nonushta qilmoq', 'We have breakfast at seven.'],
            ['go to work / school', 'ishga / maktabga bormoq', 'I go to work at eight.'],
            ['have lunch', 'tushlik qilmoq', 'They have lunch at one.'],
            ['have dinner', 'kechki ovqat qilmoq', 'We have dinner at seven p.m.'],
            ['go to bed', 'uxlashga yotmoq', 'I go to bed at eleven.'],
          ],
        },
        { t: 'tip', tone: 'info', md: "**wake up** — ko'zingizni ochasiz (uyg'onasiz). **get up** — to'shakdan turasiz. Ko'pincha avval *wake up*, keyin *get up*." },
        { t: 'compare', good: { title: "To'g'ri", items: ['I have breakfast at seven.', 'I go to bed at eleven.', 'She gets up at six.'] }, bad: { title: "Noto'g'ri", items: ['I have a breakfast at seven.', 'I go to the bed at eleven.', 'She get up at six.'] } },
        { t: 'tip', tone: 'warn', md: "• **have breakfast / lunch / dinner** — oldida **a** yo'q.\n• **go to bed** — **the** yo'q.\n• he / she bilan: *She **gets** up. He **has** lunch. She **goes** to bed.* (-s birinchi so'zga qo'shiladi!)" },
        { t: 'check', ex: { k: 'fill', q: 'My father ___ up at five.', a: ['gets'], uz: "Otam beshda turadi.", why: "*my father* = he → **gets** up." } },
      ],
    },
    {
      title: '"at" + soat va "What time…?"',
      blocks: [
        { t: 'p', md: "Biror ish **soat nechada** bo'lishini aytish uchun **at** ishlatiladi: *at seven, at half past eight, at 6 p.m.* O'zbekchadagi **\"-da\"** (yettida) — inglizchada **at**." },
        { t: 'examples', items: [
          { en: 'What time do you get up?', uz: 'Soat nechada turasiz?' },
          { en: 'I get up at half past six.', uz: 'Olti yarimda turaman.' },
          { en: 'What time does the lesson start?', uz: 'Dars soat nechada boshlanadi?' },
          { en: "It starts at nine o'clock.", uz: "Soat to'qqizda boshlanadi." },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['at seven', "at five o'clock", 'What time do you have lunch?'] }, bad: { title: "Noto'g'ri", items: ['in seven', "on five o'clock", 'What time you have lunch?'] } },
        { t: 'check', ex: { k: 'order', uz: 'Soat nechada nonushta qilasiz?', words: ['What', 'time', 'do', 'you', 'have', 'breakfast'], extra: ['are'], why: "**What time + do + you + fe'l?**" } },
      ],
    },
    {
      title: 'Talaffuz va dialog',
      blocks: [
        {
          t: 'sounds', items: [
            { label: "o'clock", say: "o'clock", uz: "**\"ə-KLOK\"** — birinchi \"o\" juda qisqa va kuchsiz.", examples: ["seven o'clock", "ten o'clock"] },
            { label: 'quarter', say: 'quarter', uz: "**\"KWO:-tə\"** — boshi \"kv\" emas, \"kw\"; oxiridagi r aytilmaydi.", examples: ['quarter past', 'quarter to'] },
            { label: 'half', say: 'half', uz: "**\"ha:f\"** — **l** aytilmaydi!", examples: ['half past six', 'half past ten'] },
            { label: 'minute', say: 'minute', uz: "**\"MI-nit\"** — urg'u boshida, \"minut\" emas.", examples: ['five minutes', 'ten minutes'] },
          ],
        },
        { t: 'dialog', lines: [
          { who: 'Kamola', en: 'What time do you get up, Ben?', uz: 'Soat nechada turasan, Ben?' },
          { who: 'Ben', en: 'I wake up at six, but I get up at quarter past six.', uz: "Oltida uyg'onaman, lekin oltidan chorak o'tganda turaman." },
          { who: 'Kamola', en: 'Wow! And what time do you have breakfast?', uz: 'Voy! Nonushtani soat nechada qilasan?' },
          { who: 'Ben', en: 'At seven. Then I go to work at half past seven.', uz: 'Yettida. Keyin yetti yarimda ishga boraman.' },
          { who: 'Kamola', en: 'Does your wife get up early too?', uz: 'Xotining ham erta turadimi?' },
          { who: 'Ben', en: 'No, she doesn\'t. She gets up at eight. She works from home.', uz: "Yo'q. U sakkizda turadi. U uydan ishlaydi." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Dialogga ko'ra, Ben ishga 7:30 da boradi.", a: true, why: "*I go to work at **half past seven*** = 7:30." } },
      ],
    },
  ],
  words: [
    { en: 'wake up', uz: "uyg'onmoq", ipa: 'weɪk ʌp', pos: 'phrasal verb', ex: 'I wake up at six.', exUz: "Men oltida uyg'onaman." },
    { en: 'get up', uz: "o'rnidan turmoq", ipa: 'ɡet ʌp', pos: 'phrasal verb', ex: 'She gets up at seven.', exUz: 'U yettida turadi.' },
    { en: 'have breakfast', uz: 'nonushta qilmoq', ipa: 'hæv ˈbrek.fəst', pos: 'phrase', ex: 'We have breakfast at half past seven.', exUz: 'Biz yetti yarimda nonushta qilamiz.' },
    { en: 'have lunch', uz: 'tushlik qilmoq', ipa: 'hæv lʌntʃ', pos: 'phrase', ex: 'He has lunch at one.', exUz: 'U birda tushlik qiladi.' },
    { en: 'have dinner', uz: 'kechki ovqat qilmoq', ipa: 'hæv ˈdɪn.ə', pos: 'phrase', ex: 'They have dinner at eight p.m.', exUz: 'Ular kechqurun soat sakkizda kechki ovqat qilishadi.' },
    { en: 'go to bed', uz: 'uxlashga yotmoq', ipa: 'ɡəʊ tə bed', pos: 'phrase', ex: 'I go to bed at eleven.', exUz: "Men o'n birda uxlashga yotaman." },
    { en: "o'clock", uz: 'soat (butun soat)', ipa: 'əˈklɒk', pos: 'adverb', ex: "It's nine o'clock.", exUz: "Soat to'qqiz." },
    { en: 'half past', uz: '… yarim (30 daqiqa o\'tdi)', ipa: 'hɑːf pɑːst', pos: 'phrase', ex: "It's half past ten.", exUz: "Soat o'n yarim." },
    { en: 'quarter', uz: 'chorak (15 daqiqa)', ipa: 'ˈkwɔː.tə', pos: 'noun', ex: "It's quarter to five.", exUz: "Beshga chorak bor." },
    { en: 'minute', uz: 'daqiqa', ipa: 'ˈmɪn.ɪt', pos: 'noun', ex: 'The lesson is forty-five minutes.', exUz: 'Dars qirq besh daqiqa.' },
  ],
  practice: [
    { k: 'listen', say: "It's half past nine", opts: ['8:30', '9:30', '9:15', '10:30'], a: 1, why: "**half past nine** — to'qqizdan yarim o'tdi = 9:30." },
    { k: 'listen', say: "It's quarter past four", opts: ['3:45', '4:45', '4:15', '4:25'], a: 2, why: "**quarter past four** = 4:15." },
    { k: 'match', pairs: [['wake up', "uyg'onmoq"], ['get up', "o'rnidan turmoq"], ['have lunch', 'tushlik qilmoq'], ['go to bed', 'uxlashga yotmoq'], ['minute', 'daqiqa']] },
    { k: 'choice', q: "**6:45** qanday aytiladi?", opts: ['quarter past six', 'quarter to six', 'quarter to seven', 'half past six'], a: 2, why: "6:45 — yettiga chorak bor: **quarter to seven**." },
    { k: 'choice', q: "**10:20** qanday aytiladi?", opts: ['twenty to ten', 'ten past twenty', 'twenty to eleven', 'twenty past ten'], a: 3, why: "20 daqiqa o'tdi → **twenty past ten**." },
    { k: 'fill', q: "It's eight ___.", a: ["o'clock"], uz: 'Soat sakkiz.', why: "Butun soat — **o'clock**." },
    { k: 'fill', q: 'I have lunch ___ one o\'clock.', a: ['at'], uz: 'Men soat birda tushlik qilaman.', why: "Soat oldidan — **at**." },
    { k: 'fill', q: 'She ___ breakfast at seven.', a: ['has'], uz: 'U yettida nonushta qiladi.', why: "she → **has** breakfast." },
    { k: 'tf', q: "\"I go to the bed at eleven\" — to'g'ri gap.", a: false, why: "**go to bed** — *the* siz." },
    { k: 'order', uz: 'Men yetti yarimda turaman.', words: ['I', 'get', 'up', 'at', 'half', 'past', 'seven'], why: "**I get up at half past seven.**" },
    { k: 'order', uz: 'U (erkak) soat nechada uxlashga yotadi?', words: ['What', 'time', 'does', 'he', 'go', 'to', 'bed'], extra: ['goes', 'the'], why: "**What time does he go to bed?** — *does* dan keyin *go*." },
    { k: 'translate', uz: 'Soat necha?', a: ['What time is it', "What's the time", 'What is the time'], why: "**What time is it?**" },
    { k: 'translate', uz: 'Biz sakkizda kechki ovqat qilamiz.', a: ['We have dinner at eight', 'We have dinner at 8', "We have dinner at eight o'clock", "We have dinner at 8 o'clock", 'We have dinner at eight p.m.', 'We have dinner at 8 p.m.', 'We have dinner at 8pm', 'We have dinner at eight pm'], why: "**We have dinner at eight.**" },
    { k: 'speak', say: "I get up at seven o'clock and I go to bed at eleven.", uz: "Kun tartibingizni ayting" },
    { k: 'choice', q: "**7 p.m.** — bu qachon?", opts: ['ertalab yettida', 'kechqurun yettida', 'tushda', 'kechasi o\'n ikkida'], a: 1, why: "**p.m.** — tushdan keyin: 7 p.m. = 19:00, kechqurun." },
  ],
  quiz: [
    { k: 'listen', say: "It's quarter to three", opts: ['3:15', '3:45', '2:45', '2:15'], a: 2 },
    { k: 'listen', say: "It's twenty-five past eight", opts: ['8:25', '7:35', '8:35', '9:25'], a: 0 },
    { k: 'fill', q: '5:30 = half ___ five', a: ['past'] },
    { k: 'fill', q: '11:45 = quarter to ___', a: ['twelve'], why: "\"to\" dan keyin **keyingi** soat: 11:45 = quarter to **twelve**." },
    { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['He have lunch at one.', 'He has a lunch at one.', 'He has lunch at one.', 'He has lunch in one.'], a: 2 },
    { k: 'order', uz: 'Dars soat nechada boshlanadi?', words: ['What', 'time', 'does', 'the', 'lesson', 'start'], extra: ['starts', 'do'] },
    { k: 'translate', uz: "Men oltida uyg'onaman.", a: ['I wake up at six', 'I wake up at 6', "I wake up at six o'clock", "I wake up at 6 o'clock", 'I wake up at six a.m.', 'I wake up at 6 a.m.', 'I wake up at 6am'] },
    { k: 'translate', uz: "Soat o'n yarim.", a: ["It's half past ten", 'It is half past ten', "It's ten thirty", 'It is ten thirty', 'Half past ten', "It's 10:30", 'It is 10:30'] },
    { k: 'match', pairs: [['7:00', "seven o'clock"], ['7:15', 'quarter past seven'], ['7:30', 'half past seven'], ['7:45', 'quarter to eight'], ['7:50', 'ten to eight']] },
    { k: 'tf', q: "Ingliz tilida **wake up** va **get up** bir xil ma'noni bildiradi.", a: false, why: "**wake up** — uyg'onmoq, **get up** — o'rnidan turmoq." },
  ],
  summary: [
    "**What time is it? — It's seven o'clock.** (o'clock faqat butun soatda)",
    "**past** — o'tdi (1–30 daqiqa), **to** — qoldi (31–59): *quarter past seven* = 7:15, *half past seven* = 7:30, *quarter to eight* = 7:45.",
    "Soat oldidan **at**: *I get up **at** seven.* **a.m.** — tushgacha, **p.m.** — tushdan keyin.",
    "**have breakfast / lunch / dinner** (a siz), **go to bed** (the siz). he/she bilan: *gets up, has lunch, goes to bed*.",
  ],
  homework: "Kun tartibingizni 6 ta gap bilan yozing (*I wake up at… I get up at… I have breakfast at…*), vaqtlarni **past / to** usulida. Keyin bitta oila a'zongizning kun tartibini he/she bilan yozing va ovoz chiqarib o'qing.",
};

export default lesson;
