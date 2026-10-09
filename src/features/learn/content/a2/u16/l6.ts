import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l6",
  title: "Question tags",
  titleUz: "Tasdiq savollari: isn't it? don't you?",
  goal: "Gap oxiriga to'g'ri **question tag** qo'shasiz (*It's cold, isn't it? You like plov, don't you?*), **short answer** (*Yes, I do. No, I can't.*) bilan javob berasiz va har gapga **isn't it?** qo'shish xatosidan qochasiz.",
  slides: [
    {
      title: "Question tag nima?",
      blocks: [
        { t: "p", md: "Question tag — gap oxiriga qo'shiladigan qisqa savol. Biz uni biror narsani **tasdiqlatish** yoki suhbatni davom ettirish uchun ishlatamiz. O'zbekchadagi **«shunday emasmi?», «to'g'rimi?», «-a?»** ga o'xshaydi." },
        {
          t: "table", head: ["Gap", "Tag"], speak: [0],
          rows: [
            ["It's cold today,", "isn't it?"],
            ["You're a student,", "aren't you?"],
            ["She likes tea,", "doesn't she?"],
            ["He doesn't like tea,", "does he?"],
            ["They can't swim,", "can they?"],
          ],
        },
        { t: "tip", tone: "info", md: "Asosiy qoida: **darak gap (+) → inkor tag (−)**, **inkor gap (−) → darak tag (+)**. Tag har doim **qisqa** (auxiliary + olmosh) va **inkori qisqartma bilan** yoziladi: *isn't, don't, can't*." },
        { t: "tip", tone: "good", md: "Ohang ma'noni o'zgartiradi: ohang **pasaysa** (↘) — javobni bilasiz va shunchaki tasdiqlatyapsiz (*It's cold, isn't it?*). Ohang **ko'tarilsa** (↗) — haqiqatan so'rayapsiz." },
        { t: "check", ex: { k: "choice", q: "**It's a nice day, ___?**", opts: ["isn't it", "is it", "doesn't it", "wasn't it"], a: 0, why: "Darak gap, *is* → inkor tag **isn't it**." } },
      ],
    },
    {
      title: "Qaysi yordamchi fe'lni olamiz?",
      blocks: [
        { t: "p", md: "Tag gapdagi **yordamchi fe'l**ni takrorlaydi. Agar gapda yordamchi fe'l yo'q bo'lsa (Present / Past Simple), **do / does / did** ishlatiladi:" },
        {
          t: "table", head: ["Gapdagi fe'l", "Tag", "Misol"], speak: [2],
          rows: [
            ["am / is / are", "isn't / aren't", "She is late, isn't she?"],
            ["was / were", "wasn't / weren't", "They were happy, weren't they?"],
            ["Present Simple", "don't / doesn't", "You like plov, don't you? She works here, doesn't she?"],
            ["Past Simple", "didn't", "They left early, didn't they?"],
            ["have / has (Present Perfect)", "haven't / hasn't", "You've seen it, haven't you?"],
            ["can / will / should", "can't / won't / shouldn't", "He can swim, can't he?"],
            ["Inkor gap", "(+) darak tag", "He can't swim, can he?"],
          ],
        },
        { t: "tip", tone: "warn", md: "Tagda **ot emas, olmosh** turadi: *Your brother is tall, isn't **he**?* — *isn't Aziz* ❌. Ko'plik → *they*: *Aziz and Laylo are here, aren't **they**?* *There is…* bo'lsa, *there*: *There's a bank near here, isn't **there**?*" },
        { t: "check", ex: { k: "fill", q: "They live in Samarkand, ___ they?", a: ["don't"], why: "Present Simple darak → **don't they?**" } },
        { t: "check", ex: { k: "fill", q: "He didn't call, ___ he?", a: ["did"], why: "Inkor gap → darak tag: **did he?**" } },
      ],
    },
    {
      title: "Alohida holatlar",
      blocks: [
        { t: "p", md: "Uch ibora qoidadan chiqadi:" },
        {
          t: "table", head: ["Gap", "Tag", "Izoh"], speak: [0],
          rows: [
            ["I'm late,", "aren't I?", "*I am* → *aren't I?* (*amn't I* deyilmaydi)."],
            ["Let's go,", "shall we?", "*Let's…* → doim *shall we?*"],
            ["Open the window,", "will you?", "Buyruq → *will you?* (iltimos ohangida)."],
          ],
        },
        { t: "tip", tone: "info", md: "Buyruq gap + *will you?* iltimosni yumshoq qiladi: *Close the door, will you?* Taklif (*Let's*) + *shall we?* — do'stlar orasida juda tabiiy." },
        { t: "check", ex: { k: "choice", q: "**Let's have a picnic, ___?**", opts: ["will we", "shall we", "don't we", "aren't we"], a: 1 } },
        { t: "check", ex: { k: "choice", q: "**I'm right, ___?**", opts: ["amn't I", "am I", "aren't I", "isn't I"], a: 2 } },
      ],
    },
    {
      title: "Qisqa javoblar",
      blocks: [
        { t: "p", md: "Tagli savolga javob **Yes / No + olmosh + yordamchi fe'l** bilan beriladi. To'liq gap kerak emas:" },
        {
          t: "table", head: ["Savol", "Ha", "Yo'q"], speak: [0],
          rows: [
            ["You like tea, don't you?", "Yes, I do.", "No, I don't."],
            ["She can swim, can't she?", "Yes, she can.", "No, she can't."],
            ["It's cold, isn't it?", "Yes, it is.", "No, it isn't."],
            ["They left, didn't they?", "Yes, they did.", "No, they didn't."],
          ],
        },
        { t: "p", md: "**Muhim tuzoq.** O'zbek tilida «Choyni yoqtirmaysiz, to'g'rimi?» degan savolga «**Ha**, yoqtirmayman» deymiz (rozi bo'ldik). Inglizchada **Yes / No** gapning o'zi emas, **haqiqatga** qarab aytiladi:" },
        {
          t: "examples", items: [
            { en: "You don't like coffee, do you? — No, I don't.", uz: "Qahva yoqtirmaysiz, a? — Yo'q, yoqtirmayman.", note: "Haqiqatan yoqtirmaydi → **No** + inkor." },
            { en: "You don't like coffee, do you? — Yes, I do!", uz: "Qahva yoqtirmaysiz, a? — Yo'q-ku, yoqtiraman!", note: "Aslida yoqtiradi → **Yes** + darak." },
          ],
        },
        { t: "tip", tone: "warn", md: "Qoida: agar siz **yoqtirsangiz/qilsangiz** — **Yes, I do**. **Yoqtirmasangiz/qilmasangiz** — **No, I don't**. Savol qanday berilganidan qat'i nazar." },
        { t: "check", ex: { k: "choice", q: "**You can't swim, can you?** (Siz aslida yaxshi suzasiz.)", opts: ["Yes, I can.", "No, I can.", "Yes, I can't.", "No, I can't."], a: 0, why: "Haqiqat: suzaman → **Yes, I can.**" } },
      ],
    },
    {
      title: "Xatolar",
      blocks: [
        { t: "p", md: "O'zbek tilida «shunday emasmi?» bitta, inglizchada esa tag **har gapga moslab o'zgaradi**. Eng ko'p uchraydigan xatolar:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You like football, don't you?", "She can drive, can't she?", "He lives here, doesn't he?", "You've finished, haven't you?"] },
          bad: { title: "Xato", items: ["You like football, isn't it?", "She can drive, can she?", "He lives here, isn't he?", "You've finished, did you?"] },
        },
        { t: "tip", tone: "warn", md: "*isn't it?* ni **har gapga** qo'shmang. U faqat *it / this / that* + **be** bilan ishlaydi: *It's late, isn't it?* Boshqa hollarda gapdagi yordamchi fe'lga qarang." },
        { t: "check", ex: { k: "choice", q: "**Aziz plays football, ___?**", opts: ["isn't he", "doesn't he", "didn't he", "does he"], a: 1 } },
        { t: "check", ex: { k: "tf", q: "**She can drive, can she?** — to'g'ri tag.", a: false, why: "Darak gap → inkor tag: *can't she?*" } },
      ],
    },
    {
      title: "Dialog: piknik rejasi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "What a lovely day, isn't it?", uz: "Qanday ajoyib kun, shunday emasmi?" },
            { who: "Aziz", en: "It's perfect. Let's have a picnic in the park, shall we?", uz: "Juda yaxshi. Bog'da piknik qilaylik, nima dedingiz?" },
            { who: "Laylo", en: "Great idea! You've got a car, haven't you?", uz: "Ajoyib fikr! Mashinang bor, to'g'rimi?" },
            { who: "Aziz", en: "Yes, I have. Kamol isn't working today, is he?", uz: "Ha, bor. Kamol bugun ishlamaydi, a?" },
            { who: "Laylo", en: "No, he isn't. He's at home.", uz: "Yo'q, ishlamaydi. U uyda." },
            { who: "Aziz", en: "Good. He likes picnics, doesn't he?", uz: "Yaxshi. U pikniklarni yaxshi ko'radi, shunday emasmi?" },
            { who: "Laylo", en: "Yes, he does. Close the window before you go, will you?", uz: "Ha, yaxshi ko'radi. Ketishdan oldin derazani yop, xo'pmi?" },
            { who: "Aziz", en: "Of course. We haven't forgotten the water, have we?", uz: "Albatta. Suvni unutmadik, a?" },
            { who: "Laylo", en: "Don't worry, I've packed it.", uz: "Xavotir olma, men solib qo'ydim." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamol is working today.", a: false, why: "*No, he isn't. He's at home.*" } },
      ],
    },
  ],
  words: [
    { en: "probably", uz: "ehtimol, katta ehtimol bilan", ipa: "ˈprɒb.ə.bli", pos: "adv", ex: "It will probably rain tomorrow.", exUz: "Ertaga, ehtimol, yomg'ir yog'adi." },
    { en: "definitely", uz: "shubhasiz, albatta", ipa: "ˈdef.ɪ.nət.li", pos: "adv", ex: "I'll definitely come to your party.", exUz: "Ziyofatingizga albatta kelaman." },
    { en: "obviously", uz: "ravshanki, shubhasiz", ipa: "ˈɒb.vi.əs.li", pos: "adv", ex: "Obviously, she is very tired.", exUz: "Ravshanki, u juda charchagan." },
    { en: "exactly", uz: "aynan, aniq", ipa: "ɪɡˈzækt.li", pos: "adv", ex: "That's exactly what I think.", exUz: "Men ham aynan shunday o'ylayman." },
    { en: "actually", uz: "aslida, haqiqatan", ipa: "ˈæk.tʃu.ə.li", pos: "adv", ex: "Actually, I don't like coffee.", exUz: "Aslida men qahvani yoqtirmayman." },
    { en: "perhaps", uz: "balki", ipa: "pəˈhæps", pos: "adv", ex: "Perhaps he is at home.", exUz: "Balki u uydadir." },
    { en: "certainly", uz: "albatta, shubhasiz", ipa: "ˈsɜː.tən.li", pos: "adv", ex: "Can you help me? — Certainly!", exUz: "Menga yordam bera olasizmi? — Albatta!" },
    { en: "anyway", uz: "baribir, har holda", ipa: "ˈen.i.weɪ", pos: "adv", ex: "It's raining, but we'll go anyway.", exUz: "Yomg'ir yog'yapti, lekin baribir boramiz." },
    { en: "honestly", uz: "rostini aytsam", ipa: "ˈɒn.ɪst.li", pos: "adv", ex: "Honestly, I don't know the answer.", exUz: "Rostini aytsam, javobni bilmayman." },
    { en: "apparently", uz: "ko'rinishidan, aytishlaricha", ipa: "əˈpær.ənt.li", pos: "adv", ex: "Apparently, the shop is closed today.", exUz: "Aytishlaricha, do'kon bugun yopiq." },
  ],
  practice: [
    { k: "choice", q: "**It's a nice day, ___?**", opts: ["isn't it", "is it", "doesn't it", "wasn't it"], a: 0 },
    { k: "choice", q: "**You don't like coffee, ___?**", opts: ["do you", "don't you", "aren't you", "did you"], a: 0, why: "Inkor gap → darak tag." },
    { k: "choice", q: "**Laylo can swim, ___?**", opts: ["can she", "can't she", "doesn't she", "isn't she"], a: 1 },
    { k: "choice", q: "**You don't like tea, do you?** (Aslida siz choyni yoqtirasiz.) Javob:", opts: ["Yes, I do.", "No, I do.", "Yes, I don't.", "No, I like."], a: 0, why: "Haqiqat: yoqtiraman → **Yes, I do.**" },
    { k: "fill", q: "They live in Samarkand, ___ they?", a: ["don't"] },
    { k: "fill", q: "He didn't call, ___ he?", a: ["did"] },
    { k: "fill", q: "You've finished, ___ you?", a: ["haven't"] },
    { k: "fill", q: "Let's go, ___ we?", a: ["shall"] },
    { k: "fill", q: "I'm late, ___ I?", a: ["aren't"] },
    { k: "listen", say: "You like plov, don't you?", opts: ["You like plov, don't you?", "You like plov, do you?", "You liked plov, didn't you?"], a: 0 },
    { k: "order", uz: "U shu yerda ishlaydi, shunday emasmi?", words: ["She", "works", "here,", "doesn't", "she?"], extra: ["isn't", "does"] },
    { k: "translate", uz: "Siz Toshkentdansiz, shunday emasmi?", a: ["You're from Tashkent, aren't you?", "You are from Tashkent, aren't you?"] },
    { k: "translate", uz: "Kamol suzishni biladi, shunday emasmi?", a: ["Kamol can swim, can't he?"] },
    { k: "tf", q: "**You like tea, don't you?** — **Yes, I like.** to'g'ri qisqa javob.", a: false, why: "To'g'risi: **Yes, I do.**" },
    { k: "match", pairs: [["She is late,", "isn't she?"], ["They went home,", "didn't they?"], ["You can drive,", "can't you?"], ["He doesn't know,", "does he?"], ["We've finished,", "haven't we?"]] },
    { k: "speak", say: "It's a lovely day, isn't it?", uz: "Qanday ajoyib kun, shunday emasmi?" },
  ],
  quiz: [
    { k: "choice", q: "**Your sister is a doctor, ___?**", opts: ["isn't she", "doesn't she", "is she", "aren't you"], a: 0 },
    { k: "choice", q: "**They didn't come, ___?**", opts: ["didn't they", "did they", "do they", "weren't they"], a: 1 },
    { k: "choice", q: "**Dilnoza lives in Bukhara, ___?**", opts: ["isn't she", "doesn't she", "didn't she", "does she"], a: 1 },
    { k: "choice", q: "**Open the window, ___?**", opts: ["will you", "do you", "are you", "shall we"], a: 0 },
    { k: "choice", q: "**You can't swim, can you?** (Siz aslida yaxshi suzasiz.) Javob:", opts: ["Yes, I can.", "No, I can.", "Yes, I can't.", "No, I can't."], a: 0 },
    { k: "fill", q: "You've seen this film, ___ you?", a: ["haven't"] },
    { k: "fill", q: "She was angry, ___ she?", a: ["wasn't"] },
    { k: "listen", say: "He can't drive, can he?", opts: ["He can't drive, can he?", "He can't drive, can't he?", "He can drive, can't he?"], a: 0 },
    { k: "order", uz: "Siz charchagansiz, shunday emasmi?", words: ["You", "are", "tired,", "aren't", "you?"], extra: ["isn't", "do"], alt: [["You're", "tired,", "aren't", "you?"]] },
    { k: "tf", q: "**There is a bank near here, isn't there?** — to'g'ri tag.", a: true },
  ],
  summary: [
    "**Darak gap (+) → inkor tag (−)**: *She likes tea, doesn't she?* **Inkor gap (−) → darak tag (+)**: *He can't swim, can he?*",
    "Tag gapdagi yordamchi fe'lni takrorlaydi; yo'q bo'lsa **do / does / did**. Tagda **ot emas, olmosh** (*he, she, they, there*).",
    "Alohida: *I'm late, **aren't I**? Let's go, **shall we**? Open the window, **will you**?*",
    "Qisqa javob: **Yes / No + olmosh + yordamchi fe'l**. Yes/No haqiqatga qarab aytiladi: *You don't like coffee, do you? — Yes, I do.*",
    "*isn't it?* ni har gapga qo'shmang: tag gapga moslashadi.",
  ],
  homework: "Do'stingiz yoki oilangiz haqida 8 ta gap yozing va har biriga tag qo'shing (4 tasi darak, 4 tasi inkor). So'ng ularni ovoz chiqarib o'qing: ohangni to'g'ri qo'yishga harakat qiling (↘ tasdiqlash, ↗ so'rash).",
};

export default lesson;
