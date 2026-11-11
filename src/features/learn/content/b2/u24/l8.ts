import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u24-l8",
  title: "Unit review: tenses and time",
  titleUz: "Bosqich takrori: zamonlar va vaqt ifodalari",
  goal: "Bosqichni takrorlaysiz: **hikoya zamonlari** (Past Simple, Continuous, Perfect, Perfect Continuous), **Present Perfect Simple va Continuous**, **used to / would / be used to**, **kelasi zamon shakllari**, **holat va harakat fe'llari**, **vaqt bog'lovchilari** va o'zgarish lug'ati. Hammasini yangi misollarda tekshirasiz va o'z xatolaringizni topasiz.",
  slides: [
    {
      title: "Takror: hikoya zamonlari",
      blocks: [
        { t: "p", md: "Hikoyada **zamonni so'z emas, ma'no tanlaydi**: asosiy voqea, fon, undan oldingi voqea va oldingi uzoq davom etgan ish alohida shakllarda." },
        {
          t: "table", head: ["Shakl", "Vazifasi", "Yangi misol"], speak: [2],
          rows: [
            ["Past Simple", "asosiy voqealar ketma-ketligi", "She opened the door and switched on the light."],
            ["Past Continuous", "fon yoki to'xtatilgan ish", "I was cooking when the lights went out."],
            ["Past Perfect", "o'tgan paytdan oldin tugagan ish", "The shop had closed by the time we got there."],
            ["Past Perfect Continuous", "oldingi davomli ish, natijasi ko'rinib turibdi", "His hands were dirty because he had been gardening."],
          ],
        },
        { t: "tip", tone: "info", md: "**by the time**, **no sooner … than**, **hardly … when** kabi iboralar Past Perfect bilan yaxshi ketadi: *By the time I called, they had left.* Birinchi tugagan ish — Past Perfect." },
        { t: "check", ex: { k: "choice", q: "By the time the guests arrived, we ___ the table.", opts: ["had set", "were setting", "set", "have set"], a: 0, why: "Mehmonlar kelguncha tugagan ish → **had set** (Past Perfect)." } },
        { t: "check", ex: { k: "choice", q: "Her eyes were red because she ___ for hours.", opts: ["had been crying", "cried", "has cried", "was cry"], a: 0, why: "Oldingi davomli ish va ko'rinib turgan natija → **had been crying**." } },
      ],
    },
    {
      title: "Takror: Present Perfect Simple va Continuous",
      blocks: [
        { t: "p", md: "**Simple** — natija, soni (*how many*). **Continuous** — jarayon, davomiylik (*how long*). *for, since, lately, recently* — Present Perfect belgilari. **Aniq o'tgan vaqt** (*yesterday, in 2019, last week*) bilan esa **Past Simple**." },
        {
          t: "table", head: ["Shakl", "Ma'nosi", "Yangi misol"], speak: [2],
          rows: [
            ["Present Perfect Simple", "natija, soni", "I've answered twenty emails this morning."],
            ["Present Perfect Continuous", "jarayon, davomiylik", "I've been answering emails since eight."],
            ["Simple (holat fe'li)", "know, own, belong — Continuous bo'lmaydi", "She has known him for years."],
            ["Past Simple", "aniq o'tgan vaqt", "We moved here in 2018."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Superlativ** va **the first time** bilan Present Perfect: *It's the best soup I've ever tasted. It's the first time I've flown.* **Since** + nuqta (*since June*), **for** + davr (*for three weeks*)." },
        { t: "check", ex: { k: "choice", q: "I'm exhausted. I ___ since six this morning.", opts: ["have been revising", "revised", "am revising", "had revised"], a: 0, why: "**since six** — davomiylik, hozirgi charchoq → **have been revising**." } },
        { t: "check", ex: { k: "choice", q: "I ___ in this flat for three years, and I love it.", opts: ["have lived", "live", "am living", "lived"], a: 0, why: "**for three years** + hozirgacha davom etadi → **have lived**." } },
      ],
    },
    {
      title: "Takror: o'tgan odatlar va ko'nikish",
      blocks: [
        { t: "p", md: "**used to** — odat **va holat**; **would** — faqat takrorlanadigan **harakat/odat**; **be used to / get used to + -ing** — «ko'nikkan / ko'nikmoq» (zamon emas, **holat**)." },
        {
          t: "table", head: ["Shakl", "Ma'nosi", "Yangi misol"], speak: [2],
          rows: [
            ["used to + V1", "holat yoki odat", "We used to have a boat on the lake."],
            ["would + V1", "faqat takrorlanadigan odat", "Every evening he would walk along the river."],
            ["be used to + -ing", "ko'nikkan holat", "I'm used to getting up early."],
            ["get used to + -ing", "ko'nikish jarayoni", "She is getting used to living alone."],
          ],
        },
        { t: "tip", tone: "warn", md: "**used to** dan keyin **V1** (*used to live*), **be used to** dan keyin **-ing** (*used to living*). *didn't use to* — inkor. **would** holat fe'liga ishlatilmaydi: ~~we would have a boat~~." },
        { t: "check", ex: { k: "choice", q: "We ___ a dog when I was small.", opts: ["used to have", "would have", "used to having", "were used to have"], a: 0, why: "*have* — holat, **would** bo'lmaydi; **used to + V1**." } },
        { t: "check", ex: { k: "choice", q: "It took me months to get ___ living alone.", opts: ["used to", "use to", "used", "using to"], a: 0, why: "**get used to + -ing**." } },
      ],
    },
    {
      title: "Takror: kelasi zamon va vaqt gaplari",
      blocks: [
        { t: "p", md: "**will** — fikr, qaror, va'da; **going to** — reja yoki dalil; **Present Continuous** — kelishuv; **Present Simple** — jadval; **will be -ing** — kelajakda ma'lum paytda davom etadigan ish; **will have V3** — ma'lum paytgacha tugaydigan ish." },
        {
          t: "table", head: ["Shakl", "Yangi misol"], speak: [1],
          rows: [
            ["will be -ing", "Don't phone at nine. We'll be having dinner."],
            ["will have V3", "By next June I will have saved enough money."],
            ["going to", "She's going to apply for a new job. She's updated her CV."],
            ["be about to", "Hurry up, the film is about to start."],
          ],
        },
        { t: "p", md: "**Vaqt gaplarida** (*when, as soon as, once, until, before, the moment, by the time*) kelajak uchun **Present** ishlatiladi, **will** emas:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I'll call you as soon as I get home.", "Once she has finished, we'll leave.", "Wait until the lesson ends."] },
          bad: { title: "Xato", items: ["I'll call you as soon as I will get home.", "Once she will finish, we'll leave.", "Wait until the lesson will end."] } },
        { t: "check", ex: { k: "fill", q: "Don't phone at nine tonight; we ___ dinner with friends. (have, Future Continuous)", a: ["will be having", "'ll be having"], why: "Kelajakda ma'lum paytda davom etadigan ish: **will be having**." } },
        { t: "check", ex: { k: "fill", q: "As soon as the film ___, we'll go for dinner. (finish)", a: ["finishes", "has finished"], why: "Vaqt gapida kelajak uchun Present: **finishes** yoki **has finished**." } },
      ],
    },
    {
      title: "Takror: holat fe'llari va o'zgarish lug'ati",
      blocks: [
        { t: "p", md: "**Holat fe'llari** (*know, believe, want, belong, own*) odatda **Continuous** bo'lmaydi. Ba'zi fe'llar ikki ma'noli: **holat** (Simple) va **harakat** (Continuous)." },
        {
          t: "table", head: ["Fe'l", "Holat (Simple)", "Harakat (Continuous)"], speak: [1, 2],
          rows: [
            ["think", "I think it's a good idea. (fikr)", "I'm thinking about the offer. (o'ylayapman)"],
            ["have", "She has a lot of experience. (egalik)", "She's having a meeting. (o'tkazyapti)"],
            ["taste", "The soup tastes salty. (ta'mi bor)", "Why are you tasting the soup? (tatib ko'ryapsiz)"],
            ["be", "He is rude. (xarakteri)", "He is being rude today. (hozirgi xulqi)"],
          ],
        },
        { t: "p", md: "O'zgarish lug'ati: **a steady increase, a sharp rise, a slump, stagnate, overtake, transform, gain momentum**. **rise** (rose, risen) to'ldiruvchisiz, **raise** to'ldiruvchi bilan; **by** — qancha, **to** — qaysi darajaga." },
        { t: "check", ex: { k: "choice", q: "Why are you ___ the soup? Is it too hot?", opts: ["tasting", "taste", "tastes", "tasted"], a: 0, why: "Hozirgi harakat → **are tasting**." } },
        { t: "check", ex: { k: "choice", q: "Prices ___ by five per cent last month.", opts: ["rose", "raised", "have raised", "were rose"], a: 0, why: "To'ldiruvchi yo'q va **last month** → **rose**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "Butun bosqichdagi eng ko'p takrorlanadigan xatolar. Har birini **o'zingiz tuzating**:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I know this city very well.", "When I have time, I'll call you.", "I moved here in 2018.", "She has a lot of experience."] },
          bad: { title: "Xato", items: ["I am knowing this city very well.", "When I will have time, I'll call you.", "I have moved here in 2018.", "She is having a lot of experience."] } },
        { t: "check", ex: { k: "fix", wrong: "I am knowing this city very well.", a: ["I know this city very well."], hint: "know — holat fe'li", why: "**know** Continuous bo'lmaydi." } },
        { t: "check", ex: { k: "fix", wrong: "When I will have time, I'll call you.", a: ["When I have time, I'll call you."], hint: "vaqt gapida will yo'q", why: "**when** dan keyin Present." } },
        { t: "check", ex: { k: "fix", wrong: "We would live in a small flat when I was a student.", a: ["We used to live in a small flat when I was a student.", "We lived in a small flat when I was a student."], hint: "holat uchun nima?", why: "*live* bu yerda holat, **would** noto'g'ri." } },
        { t: "check", ex: { k: "fix", wrong: "Oil prices raised last year.", a: ["Oil prices rose last year."], hint: "o'zi ko'tarilgan", why: "To'ldiruvchi yo'q → **rose**." } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        {
          t: "text", title: "A year of small changes", voice: "george",
          en: "Last January, I decided to turn over a new leaf. I had been working late every night for years, and sleeping badly had become habitual. First, I started to keep track of my day in a small notebook. At the beginning, I found it hard to stick to any routine, and by the time February came, I had nearly given up. But then a new mindset began to emerge: I stopped expecting perfection. Since then, I've been going to bed at eleven, and I no longer check my emails at midnight. When winter set in, I used to complain about the cold; now I walk to work every morning. In the long run, I think these small steps will have a lasting effect. By next January, I'll have kept the notebook for a whole year, and my outlook on work is already completely different.",
          uz: "O'tgan yanvarda men yangi sahifa ochishga qaror qildim. Yillar davomida har kecha kech ishlagandim va yomon uxlash odatga aylangandi. Avvalo, kunimni kichik daftarda yozib borishni boshladim. Boshida biron tartibga amal qilish qiyin edi va fevral kelguncha deyarli taslim bo'lgandim. Lekin keyin yangi fikrlash tarzi paydo bo'la boshladi: men mukammallikni kutishni to'xtatdim. O'shandan beri soat o'n birda yotyapman va yarim kechada e-pochtani tekshirmayman. Qish boshlanganda sovuqdan shikoyat qilardim; endi har ertalab ishga piyoda boraman. Uzoq muddatda bu kichik qadamlar uzoq davom etadigan ta'sir qiladi, deb o'ylayman. Kelasi yanvarga kelib daftarni to'liq bir yil yuritgan bo'laman va mening ish haqidagi qarashlarim hozirdan butunlay boshqacha.",
        },
        { t: "check", ex: { k: "tf", q: "The writer still checks his emails at midnight.", a: false, why: "Matnda: *I no longer check my emails at midnight.*" } },
        { t: "check", ex: { k: "choice", q: "What does the writer say he will have done by next January?", opts: ["Kept the notebook for a whole year", "Given up the notebook", "Started walking to work", "Moved to a new office"], a: 0, why: "Matnda: *By next January, I'll have kept the notebook for a whole year.*" } },
        {
          t: "dialog", lines: [
            { who: "Emily", en: "You look much happier these days. What have you been up to?", uz: "Bu kunlarda ancha xursand ko'rinasiz. Nima bilan band bo'ldingiz?" },
            { who: "Adam", en: "I've been trying to build better habits. I used to stay up until two every night.", uz: "Yaxshiroq odatlar shakllantirishga urinyapman. Avval har kecha soat ikkigacha uxlamay yurardim." },
            { who: "Emily", en: "And how long have you been doing this?", uz: "Buni qancha vaqtdan beri qilyapsiz?" },
            { who: "Adam", en: "Since March. It was hard at first, but I'm getting used to going to bed early.", uz: "Martdan beri. Avvaliga qiyin edi, lekin erta yotishga ko'nikyapman." },
            { who: "Emily", en: "Do you think you'll keep it up?", uz: "Sizningcha, davom ettira olasizmi?" },
            { who: "Adam", en: "I hope so. By the time summer comes, I'll have done it for three months.", uz: "Umid qilaman. Yoz kelguncha uch oy davom ettirgan bo'laman." },
            { who: "Emily", en: "That's impressive. Let me know when you reach six months.", uz: "Ajoyib. Olti oyga yetganingizda menga xabar bering." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How long has Adam been building his new habits?", opts: ["Since March", "Since last summer", "For six months", "Since he was young"], a: 0, why: "Adam: *Since March.*" } },
      ],
    },
  ],
  words: [
    { en: "habitual", uz: "odatiy, doimiy", ipa: "həˈbɪtʃ.u.əl", pos: "adj", ex: "Checking his phone had become a habitual action.", exUz: "Telefonini tekshirish unga odatiy harakatga aylangan edi." },
    { en: "turn over a new leaf", uz: "yangi sahifa ochmoq, o'zgarishga qaror qilmoq", ipa: "tɜːn ˌəʊ.və ə ˌnjuː ˈliːf", pos: "phrase", ex: "After the argument, he decided to turn over a new leaf.", exUz: "Janjaldan keyin u yangi sahifa ochishga qaror qildi." },
    { en: "in the long run", uz: "uzoq muddatda", ipa: "ɪn ðə ˌlɒŋ ˈrʌn", pos: "phrase", ex: "In the long run, regular exercise saves money.", exUz: "Uzoq muddatda muntazam mashq pulni tejaydi." },
    { en: "keep track of", uz: "kuzatib bormoq, hisobini yuritmoq", ipa: "ˌkiːp ˈtræk əv", pos: "phrase", ex: "I use an app to keep track of my spending.", exUz: "Xarajatlarimni kuzatib borish uchun ilovadan foydalanaman." },
    { en: "stick to", uz: "amal qilmoq, rioya qilmoq", ipa: "ˈstɪk tuː", pos: "phrasal verb", ex: "It is hard to stick to a diet in winter.", exUz: "Qishda parhezga rioya qilish qiyin." },
    { en: "mindset", uz: "fikrlash tarzi", ipa: "ˈmaɪnd.set", pos: "noun", ex: "A positive mindset helps you recover from failure.", exUz: "Ijobiy fikrlash tarzi muvaffaqiyatsizlikdan tiklanishga yordam beradi." },
    { en: "set in", uz: "(yomon narsa) boshlanmoq, kirib kelmoq", ipa: "ˌset ˈɪn", pos: "phrasal verb", ex: "Boredom set in after the first week.", exUz: "Birinchi haftadan keyin zerikish boshlandi." },
    { en: "lasting", uz: "uzoq davom etadigan", ipa: "ˈlɑː.stɪŋ", pos: "adj", ex: "The course had a lasting effect on her career.", exUz: "Kurs uning karerasiga uzoq davom etadigan ta'sir ko'rsatdi." },
    { en: "emerge", uz: "paydo bo'lmoq, ko'rinmoq", ipa: "ɪˈmɜːdʒ", pos: "verb", ex: "A clear pattern began to emerge from the data.", exUz: "Ma'lumotlardan aniq qonuniyat paydo bo'la boshladi." },
    { en: "outlook", uz: "qarash, istiqbol", ipa: "ˈaʊt.lʊk", pos: "noun", ex: "Her outlook on life changed after the trip.", exUz: "Sayohatdan keyin uning hayotga qarashi o'zgardi." },
  ],
  practice: [
    { k: "match", pairs: [["habitual", "odatiy"], ["mindset", "fikrlash tarzi"], ["lasting", "uzoq davom etadigan"], ["emerge", "paydo bo'lmoq"], ["outlook", "qarash, istiqbol"]] },
    { k: "choice", q: "**When she arrived, we ___ for her for an hour.**", opts: ["had been waiting", "were waiting", "waited", "have waited"], a: 0, why: "Kelishidan oldin davom etgan ish, davomiyligi bor → **had been waiting**." },
    { k: "choice", q: "**I ___ for this company since 2020, and I still enjoy it.**", opts: ["have worked", "worked", "am working", "had worked"], a: 0, why: "**since 2020** — hozirgacha → **have worked**." },
    { k: "fill", q: "When I was a child, my grandmother ___ always tell us a story before bed. (a habit; use a modal, not *used to*)", a: ["would", "'d"], why: "Takrorlanadigan odat: **would** (yoki **'d**)." },
    { k: "choice", q: "**She is not used to ___ so early.**", opts: ["getting up", "get up", "got up", "gets up"], a: 0, why: "**be used to + -ing**." },
    { k: "fill", q: "Hurry up! The film is about ___ start.", a: ["to"], why: "**be about to + V1** — hozir boshlanadi." },
    { k: "order", uz: "Kelasi iyunga kelib men yetarlicha pul yig'ib bo'laman.", words: ["By", "next", "June,", "I", "will", "have", "saved", "enough", "money."], extra: ["be", "saving"], alt: [["I", "will", "have", "saved", "enough", "money", "by", "next", "June."]], why: "**by** + vaqt → **will have saved** (Future Perfect)." },
    { k: "tf", q: "*I have been knowing him for years* — to'g'ri gap.", a: false, why: "**know** — holat fe'li, Continuous bo'lmaydi: *I have known him for years.*" },
    { k: "translate", uz: "Narxlar so'nggi yillarda bir maromda oshib kelmoqda.", a: ["Prices have been rising steadily in recent years.", "Prices have been rising steadily over the last few years.", "Prices have risen steadily in recent years.", "Prices have risen steadily over the last few years.", "Prices have been rising steadily over recent years."], why: "Davomli jarayon: **have been rising steadily**." },
    { k: "listen", say: "Ever since she moved abroad, she has been learning Spanish.", opts: ["Ever since she moved abroad, she has been learning Spanish.", "Ever since she moves abroad, she is learning Spanish.", "Since she had moved abroad, she learned Spanish."], a: 0 },
    { k: "fix", wrong: "When I will have more time, I'll learn to paint.", a: ["When I have more time, I'll learn to paint."], hint: "vaqt gapida will yo'q", why: "**when** dan keyin Present." },
    { k: "choice", q: "**Which phrase means \"in the end, over a long period\"?**", opts: ["in the long run", "at the outset", "all along", "beforehand"], a: 0, why: "**in the long run** — uzoq muddatda." },
    { k: "dictation", say: "In the long run, small habits have a lasting effect.", uz: "Uzoq muddatda kichik odatlar uzoq davom etadigan ta'sir qiladi." },
    { k: "fill", q: "As soon as winter ___ in, the days become very short. (set)", a: ["sets", "has set"], why: "Vaqt gapida Present: **sets in**." },
    { k: "tf", q: "**Whereas** ikki voqea bir vaqtda sodir bo'lishini bildiradi.", a: false, why: "**whereas** faqat qarama-qarshilik; bir vaqtdalik uchun **while / meanwhile**." },
    { k: "speak", say: "By the time I arrived, the meeting had already started.", uz: "Men kelguncha yig'ilish boshlanib bo'lgan edi." },
  ],
  quiz: [
    { k: "choice", q: "**She ___ the report for two hours when the power went off.**", opts: ["had been writing", "has been writing", "wrote", "was written"], a: 0, why: "Uzilishdan oldin davom etgan ish → **had been writing**." },
    { k: "choice", q: "**Sales ___ by 5 per cent in March.**", opts: ["rose", "raised", "has raised", "are rised"], a: 0, why: "To'ldiruvchi yo'q → **rose**." },
    { k: "choice", q: "**We ___ a garden behind the house when I was a child.**", opts: ["used to have", "would have", "used to having", "were used to have"], a: 0, why: "*have* — holat, **would** bo'lmaydi." },
    { k: "choice", q: "**Which sentence is correct?**", opts: ["She has a lot of experience in marketing.", "She is having a lot of experience in marketing.", "She has been having a lot of experience in marketing.", "She had a lot of experience in marketing now."], a: 0, why: "Egalik ma'nosidagi *have* — holat fe'li, Continuous bo'lmaydi." },
    { k: "fill", q: "A positive ___ helps you recover from failure. (way of thinking)", a: ["mindset", "attitude", "outlook"], why: "Fikrlash tarzi → **mindset**." },
    { k: "fill", q: "It is useful to ___ track of what you spend every month.", a: ["keep"], why: "**keep track of** — kuzatib bormoq." },
    { k: "fill", q: "Boredom began to ___ in after the first week. (start, usually of something unpleasant)", a: ["set"], why: "**set in** — yomon narsa boshlanmoq." },
    { k: "listen", say: "By the end of the year, I will have finished my degree.", opts: ["By the end of the year, I will have finished my degree.", "By the end of the year, I will finish my degree.", "By the end of the year, I have finished my degree."], a: 0 },
    { k: "tf", q: "**Prior to** + -ing rasmiy uslubda *before* ma'nosida ishlatiladi.", a: true, why: "*prior to leaving* = *before leaving*." },
    { k: "fix", wrong: "She is having a lot of experience in marketing.", a: ["She has a lot of experience in marketing."], hint: "egalik: holat fe'li", why: "Egalik ma'nosidagi **have** Continuous bo'lmaydi." },
  ],
  summary: [
    "**Hikoya zamonlari:** Past Simple (voqea), Past Continuous (fon), Past Perfect (oldingi), Past Perfect Continuous (oldingi davomli ish).",
    "**Present Perfect Simple** — natija, soni; **Continuous** — jarayon, davomiylik. Aniq o'tgan vaqt bilan **Past Simple**; holat fe'llari Continuous bo'lmaydi.",
    "**used to** (holat va odat), **would** (faqat odat), **be / get used to + -ing** (ko'nikish).",
    "**Kelasi zamon:** will, going to, Present Continuous, **will be -ing**, **will have V3**, *be about to*; vaqt gaplarida **will yo'q**.",
    "**Bog'lovchilar va lug'at:** *while / whereas, as soon as, by the time, prior to*; o'zgarish: *steady, rise / raise, stagnate, overtake*.",
  ],
  homework: "Bu bosqichdagi eng ko'p xato qilgan 3 ta mavzuingizni tanlang (masalan: vaqt gapida *will*, *would* bilan holat, Present Perfect va aniq vaqt). Har biri uchun 2 ta yangi to'g'ri gap yozing. Keyin 100–120 so'zli kichik matn yozing: o'zingizdagi bir o'zgarish haqida; kamida 1 ta Past Perfect, 1 ta Present Perfect Continuous, 1 ta *used to*, 1 ta *will have V3* va 3 ta yangi so'z (*habitual, mindset, lasting…*).",
};

export default lesson;
