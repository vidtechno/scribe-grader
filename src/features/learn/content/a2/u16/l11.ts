import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l11",
  title: "Experiences and the world: final review",
  titleUz: "Tajriba va dunyo: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Bosqichning hammasini bir joyda takrorlaysiz: **Present Perfect va Past Simple**, **for / since**, **who / which / that / where**, **majhul nisbat**, **frazali fe'llar**, **question tag** va **do'stga xat yozish** — va ularni qisqa xat va savollarda ishlatasiz.",
  slides: [
    {
      title: "Takror: zamonlar va for / since",
      blocks: [
        {
          t: "table", head: ["Savol", "Zamon", "Misol"], speak: [2],
          rows: [
            ["Tajriba bormi?", "Present Perfect", "Have you ever been to a festival?"],
            ["Qachon bo'lgan?", "Past Simple", "I went to one last summer."],
            ["Qancha vaqt (muddat)?", "have + V3 + for", "I've lived here for six years."],
            ["Qachondan beri?", "have + V3 + since", "I've lived here since 2020."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I saw him yesterday.", "She has worked here since 2021.", "We moved here two years ago."] }, bad: { title: "Xato", items: ["I have seen him yesterday.", "She works here since 2021.", "We have moved here two years ago."] } },
        { t: "check", ex: { k: "choice", q: "**I ___ a great film last night.**", opts: ["have seen", "saw", "have saw", "see"], a: 1, why: "*last night* — aniq vaqt → Past Simple." } },
        { t: "check", ex: { k: "fill", q: "He has been a driver ___ ten years.", a: ["for"], why: "**ten years** — muddat → **for**." } },
      ],
    },
    {
      title: "Takror: tushuntirish, passive, frazali fe'llar, tag",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Qoida", "Misol"], speak: [2],
          rows: [
            ["who / which / that / where", "odam / narsa / joy", "A festival is a place where people celebrate."],
            ["Passive", "is / are / was / were + V3", "The old gate was built in 1850."],
            ["Frazali fe'l + olmosh", "turn it on", "Please turn it off."],
            ["Question tag", "(+) → (−), (−) → (+)", "It's a nice city, isn't it?"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "**The man ___ is talking to the guide is my uncle.**", opts: ["which", "where", "who", "what"], a: 2, why: "Odam → **who**." } },
        { t: "check", ex: { k: "fill", q: "You haven't been to Khiva, ___ you?", a: ["have"], why: "Inkor gap → darak tag: **have you?**" } },
      ],
    },
    {
      title: "O'qing: do'stga xat",
      blocks: [
        { t: "p", md: "Do'stga yozilgan xat norasmiy bo'ladi: qisqartmalar, **Hi** va **Best wishes / See you soon** mumkin. Mana namuna — undagi har bir mavzuni toping." },
        {
          t: "text", title: "An email to a friend",
          en: "Hi Sara, I've just come back from Samarkand and I want to tell you about it! I've never seen such a beautiful city before. We went there by train and stayed in a small hotel where the owner is very kind. We visited a big festival, which is celebrated every year in the old square. It's a famous tradition, isn't it? I've been interested in culture since I was a child, so I loved it. Please turn your phone on tonight, and I'll call you and tell you more. Write back soon! Best wishes, Dilya",
          uz: "Salom Sara, men hozirgina Samarqanddan qaytdim va sizga hammasini aytib bermoqchiman! Men hech qachon bunday go'zal shaharni ko'rmaganman. Biz u yerga poyezdda bordik va egasi juda mehribon bo'lgan kichik mehmonxonada qoldik. Biz eski maydonda har yili nishonlanadigan katta festivalga bordik. Bu mashhur an'ana, shunday emasmi? Men bolaligimdan madaniyatga qiziqaman, shuning uchun bu menga juda yoqdi. Iltimos, bugun kechqurun telefoningizni yoqib qo'ying, men qo'ng'iroq qilib, ko'proq aytib beraman. Tezroq javob yozing! Eng yaxshi tilaklar bilan, Dilya",
        },
        { t: "check", ex: { k: "tf", q: "Dilya has been to Samarkand before.", a: false, why: "*I've never seen such a beautiful city before* — birinchi marta." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is passive?", opts: ["We went there by train.", "The festival is celebrated every year.", "I loved it.", "I'll show you my photos."], a: 1, why: "**is celebrated** = is + V3." } },
      ],
    },
  ],
  words: [
    { en: "festival", uz: "festival, bayram", ipa: "ˈfestɪvl", pos: "noun", ex: "There is a music festival in our city every year.", exUz: "Bizning shaharda har yili musiqa festivali o'tadi." },
    { en: "tradition", uz: "an'ana", ipa: "trəˈdɪʃn", pos: "noun", ex: "Eating plov on Sunday is a family tradition.", exUz: "Yakshanba kuni palov yeyish — oilaviy an'ana." },
    { en: "culture", uz: "madaniyat", ipa: "ˈkʌltʃə", pos: "noun", ex: "I'm interested in the culture of other countries.", exUz: "Men boshqa mamlakatlar madaniyatiga qiziqaman." },
    { en: "celebrate", uz: "nishonlamoq", ipa: "ˈselɪbreɪt", pos: "verb", ex: "We celebrate Navruz in March.", exUz: "Biz Navruzni mart oyida nishonlaymiz." },
    { en: "guidebook", uz: "yo'l ko'rsatkich kitob", ipa: "ˈɡaɪdbʊk", pos: "noun", ex: "I bought a guidebook about Uzbekistan.", exUz: "Men O'zbekiston haqida yo'l ko'rsatkich kitob sotib oldim." },
    { en: "attraction", uz: "diqqatga sazovor joy", ipa: "əˈtrækʃn", pos: "noun", ex: "The Registan is a popular tourist attraction.", exUz: "Registon — mashhur turistik diqqatga sazovor joy." },
  ],
  practice: [
    { k: "match", pairs: [["festival", "festival, bayram"], ["tradition", "an'ana"], ["culture", "madaniyat"], ["celebrate", "nishonlamoq"], ["attraction", "diqqatga sazovor joy"]] },
    { k: "choice", q: "**Have you ever ___ a festival?**", opts: ["been to", "went to", "go to", "going to"], a: 0 },
    { k: "choice", q: "**She ___ in Bukhara since 2018.**", opts: ["lives", "has lived", "lived", "is living"], a: 1 },
    { k: "choice", q: "**A guidebook is a book ___ helps tourists.**", opts: ["where", "who", "which", "what"], a: 2 },
    { k: "choice", q: "**The festival ___ celebrated in the old square last year.**", opts: ["is", "was", "were", "be"], a: 1 },
    { k: "listen", say: "We've lived here for six years.", opts: ["We've lived here for six years.", "We lived here for six years.", "We've lived here since six years."], a: 0 },
    { k: "fill", q: "A: Did you give up the course? B: No, I didn't give ___ up. (it)", a: ["it"], why: "Bu yerda javob: *I didn't give it up* — olmosh o'rtada." },
    { k: "fill", q: "It's a nice city, ___ it?", a: ["isn't"] },
    { k: "fill", q: "Dilya has known Sara ___ 2015.", a: ["since"] },
    { k: "fix", wrong: "I have been to Samarkand last month.", a: ["I went to Samarkand last month.", "I was in Samarkand last month.", "I have been to Samarkand."], why: "*last month* — aniq vaqt → Past Simple." },
    { k: "fix", wrong: "A tourist is a person which visits other places.", a: ["A tourist is a person who visits other places.", "A tourist is a person that visits other places."] },
    { k: "order", uz: "Iltimos, uni o'chiring.", words: ["Please", "turn", "it", "off."], extra: ["on", "up"], alt: [["Turn", "it", "off,", "please."]] },
    { k: "translate", uz: "Men bu yerda 2019-yildan beri yashayman.", a: ["I've lived here since 2019.", "I have lived here since 2019."] },
    { k: "translate", uz: "Bu uy 1990-yilda qurilgan.", a: ["This house was built in 1990.", "The house was built in 1990."] },
  ],
  quiz: [
    { k: "choice", q: "**We ___ to a festival two weeks ago.**", opts: ["have been", "went", "have gone", "go"], a: 1, why: "*two weeks ago* — Past Simple." },
    { k: "choice", q: "**They have waited ___ an hour.**", opts: ["since", "for", "ago", "from"], a: 1 },
    { k: "choice", q: "**A hotel is a place ___ tourists stay.**", opts: ["who", "which", "where", "what"], a: 2 },
    { k: "choice", q: "**Cheap souvenirs ___ sold in this market.**", opts: ["is", "are", "was", "be"], a: 1 },
    { k: "choice", q: "**You like local food, ___?**", opts: ["don't you", "do you", "aren't you", "like you"], a: 0 },
    { k: "fill", q: "Please put ___ on. (your jacket → olmosh)", a: ["it"], why: "Olmosh o'rtada: **put it on**." },
    { k: "translate", uz: "Siz hech chet elda bo'lganmisiz?", a: ["Have you ever been abroad?", "Have you been abroad?"] },
    { k: "tf", q: "**Hi Mr Karimov, … See you soon!** — rasmiy xat uchun mos.", a: false, why: "Rasmiy xatda: *Dear Mr Karimov, … Yours sincerely*." },
  ],
  summary: [
    "Tajriba — **Present Perfect**; aniq vaqt (*yesterday, ago, in 2020*) — **Past Simple**.",
    "**for** + muddat, **since** + boshlanish nuqtasi.",
    "**who** (odam), **which / that** (narsa), **where** (joy); passive: **be + V3**.",
    "Frazali fe'lda olmosh o'rtada (*turn it off*); question tag qarama-qarshi bo'ladi.",
    "Do'stga xat norasmiy: *Hi, … Best wishes*; rasmiy xat: *Dear …, Yours sincerely*.",
  ],
  homework: "Do'stingizga 6–8 gaplik xat yozing: yaqinda borgan joyingiz haqida. Unda bitta **Have you ever…?**, bitta **for/since**, bitta **who/where** gapi, bitta passive va bitta **question tag** bo'lsin.",
};

export default lesson;
