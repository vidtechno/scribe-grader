import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l5",
  title: "Dreams, ambitions and feelings",
  titleUz: "Orzu, intilish va his-tuyg'ular lug'ati",
  goal: "Orzu, maqsad va his-tuyg'ularni ifodalovchi B1 so'zlarini (**ambition, achieve, determined, jealous, grateful…**) to'g'ri old qo'shimchalar bilan ishlatasiz va **-ed / -ing** sifatlarini (**disappointed / disappointing**) adashtirmaysiz.",
  slides: [
    {
      title: "Orzu va maqsad haqida gapirish",
      blocks: [
        { t: "p", md: "Hayotdagi orzularimiz haqida gapirish uchun bir nechta tayyor qolip kerak. Eng foydalilari:" },
        {
          t: "table", head: ["Qolip", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["have an ambition to + fe'l", "intilishi bor", "She has an ambition to become a pilot."],
            ["dream of + -ing", "orzu qilmoq", "He dreams of opening his own restaurant."],
            ["be determined to + fe'l", "qat'iyatli bo'lmoq", "I'm determined to speak English fluently."],
            ["achieve a goal", "maqsadga erishmoq", "You can achieve your goals with hard work."],
            ["come true", "ushalmoq (orzu)", "Her dream finally came true."],
          ],
        },
        { t: "tip", tone: "warn", md: "**dream of** dan keyin **-ing** shakli keladi: *I dream of travelling.* **determined** dan keyin esa **to + fe'l**: *I'm determined to win.* O'zbekchada ikkalasi ham «-ishni orzu qilaman» bo'lgani uchun ko'pincha adashtiriladi." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She dreams of to live abroad.", "She dreams of living abroad.", "She dreams living abroad.", "She dreams of live abroad."], a: 1, why: "**dream of** + **-ing**: *dreams of living*." } },
        { t: "check", ex: { k: "fill", q: "He worked day and night to ___ his goal. (erishmoq)", a: ["achieve", "reach"], why: "**achieve a goal** yoki **reach a goal** — maqsadga erishmoq." } },
      ],
    },
    {
      title: "Realistic yoki unrealistic?",
      blocks: [
        { t: "p", md: "Orzu va rejani ajratish muhim. **Realistic** — haqiqatga yaqin, amalga oshishi mumkin. **Unrealistic** — amalga oshishi qiyin. Ikkalasi ham **imagination** (tasavvur) dan boshlanadi." },
        {
          t: "examples", items: [
            { en: "It's a realistic goal to save money for a new laptop this year.", uz: "Bu yil yangi noutbuk uchun pul yig'ish — real maqsad." },
            { en: "Becoming a famous singer in one month is not realistic.", uz: "Bir oyda mashhur xonanda bo'lish — real emas." },
            { en: "Children have a wonderful imagination.", uz: "Bolalarning ajoyib tasavvuri bor." },
            { en: "I used to imagine myself on a stage in front of thousands of people.", uz: "Men o'zimni minglab odam oldidagi sahnada tasavvur qilardim." },
          ],
        },
        { t: "tip", tone: "info", md: "**imagine** — fe'l (tasavvur qilmoq), **imagination** — ot (tasavvur). Imagine dan keyin ham **-ing** keladi: *Imagine living by the sea.*" },
        { t: "check", ex: { k: "choice", q: "\"Haftada bir kunda ingliz tilini mukammal o'rganaman.\" Bu qanday reja?", opts: ["realistic", "unrealistic", "determined", "grateful"], a: 1, why: "Bir kunda mukammal o'rganib bo'lmaydi — bu **unrealistic** reja." } },
      ],
    },
    {
      title: "His-tuyg'ular: -ed va -ing sifatlari",
      blocks: [
        { t: "p", md: "Ko'p his-tuyg'u sifatlari ikki shaklda bo'ladi. **-ed** shakli odam **qanday his qilayotganini**, **-ing** shakli narsa yoki voqea **qanday ta'sir qilishini** bildiradi." },
        {
          t: "table", head: ["His qilgan odam (-ed)", "Sababchi narsa (-ing)"], speak: [0, 1],
          rows: [
            ["I was disappointed.", "The result was disappointing."],
            ["She is excited.", "The news is exciting."],
            ["We felt tired.", "The journey was tiring."],
            ["He is worried.", "The situation is worrying."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I'm disappointed with my exam result.", "The film was disappointing.", "I felt embarrassed."] }, bad: { title: "Xato", items: ["I'm disappointing with my exam result.", "The film was disappointed.", "The test was disappointed."] } },
        { t: "tip", tone: "info", md: "Sodda qoida: **odam** his qilsa — **-ed**, **narsa** shunday his uyg'otsa — **-ing**. *She is boring* degani «u zerikarli odam», *She is bored* esa «u zerikyapti»." },
        { t: "check", ex: { k: "choice", q: "The lesson was very ___, so I fell asleep.", opts: ["bored", "boring", "bore", "bores"], a: 1, why: "Dars (narsa) zeriktiradi → **boring**." } },
        { t: "check", ex: { k: "fill", q: "I was really ___ when I heard the good news. (excite)", a: ["excited"], why: "Men (odam) his qilyapman → **excited**." } },
      ],
    },
    {
      title: "Qaysi old qo'shimcha bilan?",
      blocks: [
        { t: "p", md: "Ko'pchilik his-tuyg'u sifatlari **o'zining old qo'shimchasi** bilan keladi. Ularni birga yodlang, o'zbekchadan tarjima qilib topib bo'lmaydi." },
        {
          t: "table", head: ["Sifat + old qo'shimcha", "Misol"], speak: [1],
          rows: [
            ["disappointed with / about", "I was disappointed with my exam result."],
            ["jealous of", "She is jealous of her sister's success."],
            ["grateful to (odam) for (narsa)", "I'm grateful to my teacher for her help."],
            ["anxious about", "He felt anxious about the interview."],
            ["proud of", "My parents are proud of me."],
            ["afraid of", "Many people are afraid of flying."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I'm jealous of him.", "We are grateful for your help.", "She is anxious about the test."] }, bad: { title: "Xato", items: ["I'm jealous from him.", "We are grateful to your help.", "She is anxious for the test."] } },
        { t: "check", ex: { k: "fill", q: "I'm very proud ___ my brother.", a: ["of"], why: "**proud of** — faxrlanmoq." } },
        { t: "check", ex: { k: "choice", q: "Thank you. I'm so grateful ___ your help.", opts: ["of", "for", "about", "with"], a: 1, why: "**grateful for** + narsa (yordam)." } },
      ],
    },
    {
      title: "O'qing: Madinaning orzusi",
      blocks: [
        {
          t: "text", title: "Madina's dream", voice: "emma",
          en: "Madina is twenty-three and works in a small shop in Samarkand. Her ambition is to open her own bakery, and she is determined to make it happen. She dreams of baking bread every morning for her neighbours. Last year she felt anxious about leaving her job, but now she is saving money every month. Some friends say her plan is not realistic, and she was disappointed when her bank refused a loan. However, she did not give up. Her aunt is very supportive, and Madina is grateful to her for every piece of advice. \"I know it will take time,\" she says, \"but I will achieve my goal one day.\"",
          uz: "Madina yigirma uch yoshda va Samarqanddagi kichik do'konda ishlaydi. Uning intilishi — o'z novvoyxonasini ochish va u buni amalga oshirishga qat'iy qaror qilgan. U har tong qo'shnilari uchun non yopishni orzu qiladi. O'tgan yili u ishini tashlashdan xavotirda edi, hozir esa har oy pul yig'yapti. Ba'zi do'stlari uning rejasi real emas deydi, bank qarz bermagan paytda esa u xafa bo'ldi. Lekin u taslim bo'lmadi. Xolasi uni juda qo'llab-quvvatlaydi va Madina har bir maslahat uchun xolasidan minnatdor. \"Bu vaqt olishini bilaman,\" deydi u, \"lekin bir kun maqsadimga erishaman.\"",
        },
        { t: "check", ex: { k: "tf", q: "Madina already has her own bakery.", a: false, why: "Uning o'z novvoyxonasi **hali yo'q**: bu faqat uning intilishi (*ambition*)." } },
        { t: "check", ex: { k: "choice", q: "Why was Madina disappointed?", opts: ["Her bank refused a loan.", "Her aunt gave her bad advice.", "She lost her job.", "Her neighbours did not like bread."], a: 0, why: "Matnda: *she was disappointed when her bank refused a loan*." } },
      ],
    },
    {
      title: "Dialog: kelajak haqida suhbat",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Tom", en: "What are you dreaming of these days, Sara?", uz: "Sara, bu kunlarda nimani orzu qilyapsan?" },
            { who: "Sara", en: "I have an ambition to study abroad, but I'm a bit anxious about the exams.", uz: "Chet elda o'qish orzum bor, lekin imtihonlardan biroz xavotirdaman." },
            { who: "Tom", en: "Is it a realistic goal?", uz: "Bu real maqsadmi?" },
            { who: "Sara", en: "I think so. I'm determined to pass the English test first.", uz: "Menimcha, ha. Avval ingliz tili testidan o'tishga qat'iy qaror qilganman." },
            { who: "Tom", en: "I'm jealous of you. I never had such a clear plan.", uz: "Senga hasad qilaman. Menda hech qachon shunday aniq reja bo'lmagan." },
            { who: "Sara", en: "Don't worry. It's never too late. Use your imagination and start small.", uz: "Xavotir olma. Hech qachon kech emas. Tasavvuringdan foydalan va kichikdan boshla." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom says he has a very clear plan.", a: false, why: "Tom: *I never had such a clear plan* — unda aniq reja bo'lmagan." } },
      ],
    },
  ],
  words: [
    { en: "ambition", uz: "intilish, katta maqsad", ipa: "æmˈbɪʃ.ən", pos: "noun", ex: "Her ambition is to become a doctor.", exUz: "Uning intilishi — shifokor bo'lish." },
    { en: "achieve", uz: "erishmoq, bajarmoq", ipa: "əˈtʃiːv", pos: "verb", ex: "He worked hard to achieve his goal.", exUz: "U maqsadiga erishish uchun qattiq mehnat qildi." },
    { en: "determined", uz: "qat'iyatli", ipa: "dɪˈtɜː.mɪnd", pos: "adj", ex: "I'm determined to pass the exam.", exUz: "Men imtihondan o'tishga qat'iy qaror qilganman." },
    { en: "realistic", uz: "real, haqiqatga yaqin", ipa: "ˌrɪə.lɪˈstɪk", pos: "adj", ex: "Be realistic: you cannot learn a language in a week.", exUz: "Real bo'l: tilni bir haftada o'rganib bo'lmaydi." },
    { en: "disappointed", uz: "xafa bo'lgan, umidi puchga chiqqan", ipa: "ˌdɪs.əˈpɔɪn.tɪd", pos: "adj", ex: "I was disappointed with my results.", exUz: "Natijalarimdan xafa bo'ldim." },
    { en: "jealous", uz: "hasadgo'y", ipa: "ˈdʒel.əs", pos: "adj", ex: "She is jealous of her sister's success.", exUz: "U opasining muvaffaqiyatiga hasad qiladi." },
    { en: "grateful", uz: "minnatdor", ipa: "ˈɡreɪt.fəl", pos: "adj", ex: "I'm grateful to my teacher for her help.", exUz: "Ustozimning yordami uchun undan minnatdorman." },
    { en: "anxious", uz: "xavotirli", ipa: "ˈæŋk.ʃəs", pos: "adj", ex: "He felt anxious before the interview.", exUz: "U suhbatdan oldin xavotirda edi." },
    { en: "imagination", uz: "tasavvur, xayol", ipa: "ɪˌmædʒ.ɪˈneɪ.ʃən", pos: "noun", ex: "Children have a wonderful imagination.", exUz: "Bolalarning ajoyib tasavvuri bor." },
    { en: "come true", uz: "ushalmoq, amalga oshmoq", ipa: "kʌm truː", pos: "phrase", ex: "I hope your dream comes true.", exUz: "Orzuyingiz ushalishiga umid qilaman." },
  ],
  practice: [
    { k: "match", pairs: [["ambition", "intilish, katta maqsad"], ["achieve", "erishmoq"], ["determined", "qat'iyatli"], ["jealous", "hasadgo'y"], ["grateful", "minnatdor"], ["anxious", "xavotirli"]] },
    { k: "choice", q: "She is ___ to become a doctor. She never gives up.", opts: ["determined", "jealous", "disappointed", "grateful"], a: 0, why: "Taslim bo'lmaydi → **determined** (qat'iyatli)." },
    { k: "choice", q: "The film was so ___ that I wanted to leave.", opts: ["bored", "boring", "bore", "boredom"], a: 1, why: "Film (narsa) zeriktirdi → **boring**." },
    { k: "fill", q: "My parents are very proud ___ me.", a: ["of"], why: "**proud of** — faxrlanmoq." },
    { k: "fill", q: "He is jealous ___ his brother's new car.", a: ["of"], uz: "U akasining yangi mashinasiga hasad qiladi.", why: "**jealous of** — hasad qilmoq." },
    { k: "fill", q: "I'm so ___ for your help. Thank you! (minnatdor)", a: ["grateful", "thankful"], why: "**grateful for** — minnatdor." },
    { k: "listen", say: "I was disappointed with the result.", opts: ["I was disappointed with the result.", "I was disappointing with the result.", "I was determined with the result.", "I was excited about the result."], a: 0, why: "Odam his qilsa → **-ed**: *disappointed*." },
    { k: "order", uz: "Men o'z biznesimni ochishni orzu qilaman.", words: ["I", "dream", "of", "opening", "my", "own", "business."], extra: ["to", "open"], why: "**dream of** + **-ing**." },
    { k: "order", uz: "U qat'iy qaror qilgan: imtihondan o'tadi.", words: ["She", "is", "determined", "to", "pass", "the", "exam."], extra: ["of", "passing"], alt: [["She's", "determined", "to", "pass", "the", "exam."]], why: "**determined to** + fe'l." },
    { k: "translate", uz: "Umid qilamanki, orzuyingiz ushaladi.", a: ["I hope your dream comes true.", "I hope your dreams come true.", "I hope that your dream comes true."], why: "**come true** — ushalmoq." },
    { k: "tf", q: "**She is boring** va **She is bored** bir xil ma'noni bildiradi.", a: false, why: "*boring* — zerikarli (odam yoki narsa), *bored* — o'zi zerikkan." },
    { k: "tf", q: "**grateful** dan keyin odam oldidan **to**, narsa oldidan **for** keladi.", a: true, why: "*grateful to my teacher for her help*." },
    { k: "fix", wrong: "I was very disappointing with my test.", a: ["I was very disappointed with my test.", "I was very disappointed about my test."], hint: "Odam his qiladi", why: "Men his qilaman → **disappointed**." },
    { k: "fix", wrong: "She dreams to become a pilot.", a: ["She dreams of becoming a pilot.", "She dreams of being a pilot."], hint: "dream + old qo'shimcha", why: "**dream of** + **-ing**." },
    { k: "dictation", say: "Becoming a famous singer in a month is not realistic.", uz: "Bir oyda mashhur xonanda bo'lish real emas.", why: "**realistic** — real, haqiqatga yaqin." },
    { k: "speak", say: "I'm determined to achieve my goal.", uz: "Men maqsadimga erishishga qat'iy qaror qilganman." },
  ],
  quiz: [
    { k: "choice", q: "He worked hard and finally ___ his goal.", opts: ["achieved", "dreamed", "imagined", "hoped"], a: 0, why: "**achieve a goal** — maqsadga erishmoq." },
    { k: "choice", q: "I'm ___ about the interview tomorrow. I can't sleep.", opts: ["anxious", "grateful", "proud", "realistic"], a: 0, why: "Uxlay olmaslik xavotirdan → **anxious**." },
    { k: "choice", q: "The news was ___. Everyone smiled.", opts: ["exciting", "excited", "excite", "excitement"], a: 0, why: "Yangilik (narsa) hayajonlantiradi → **exciting**." },
    { k: "choice", q: "She is jealous ___ her friend's success.", opts: ["of", "for", "from", "at"], a: 0, why: "**jealous of**." },
    { k: "fill", q: "Children have a wonderful ___. (tasavvur)", a: ["imagination"], why: "**imagination** — tasavvur." },
    { k: "fill", q: "I hope all your dreams will come ___.", a: ["true"], why: "**come true** — ushalmoq." },
    { k: "fill", q: "He dreams ___ living by the sea.", a: ["of"], uz: "U dengiz bo'yida yashashni orzu qiladi.", why: "**dream of** + **-ing**." },
    { k: "order", uz: "Men o'qituvchimdan yordami uchun minnatdorman.", words: ["I'm", "grateful", "to", "my", "teacher", "for", "her", "help."], extra: ["of", "from"], alt: [["I", "am", "grateful", "to", "my", "teacher", "for", "her", "help."]], why: "**grateful to** odam **for** narsa." },
    { k: "listen", say: "It is not a realistic plan.", opts: ["It is not a realistic plan.", "It is a realistic plan.", "It is not a real plane.", "It is not a reliable plan."], a: 0 },
    { k: "fix", wrong: "The lesson was boring, so I was bore.", a: ["The lesson was boring, so I was bored.", "The lesson was boring, so I felt bored."], hint: "Men zerikdim", why: "Men zerikdim → **bored**." },
  ],
  summary: [
    "**ambition, achieve, determined, realistic, come true** — orzu va maqsad haqida gapirish uchun asosiy so'zlar.",
    "**dream of** + **-ing**, **determined to** + fe'l: old qo'shimcha va keyingi shaklni birga yodlang.",
    "Odam his qilsa **-ed** (*disappointed, excited*), narsa shunday ta'sir qilsa **-ing** (*disappointing, exciting*).",
    "His sifatlarining o'z old qo'shimchasi bor: *jealous of, proud of, anxious about, grateful to … for …, disappointed with*.",
  ],
  homework: "O'z orzuyingiz haqida 5 ta gap yozing: bittasida **ambition**, bittasida **determined to**, bittasida **dream of + -ing**, ikkitasida **-ed / -ing** sifatlarini ishlating.",
};

export default lesson;
