import type { Lesson } from '../../../types';

// Mini lesson (grammar): superlatives and expressions of degree. Builds on l1 (comparison) without repeating it.
const lesson: Lesson = {
  id: 'u29-l12',
  title: 'Superlatives and expressions of degree',
  titleUz: 'Superlative va daraja ifodalari: by far, nowhere near, as… as ever, not quite',
  mini: true,
  kind: 'grammar',
  goal: "**Superlative**ni B2 darajasida ishlatasiz (*by far the most, one of the + ko'plik, the second largest, the best … I've ever seen*), **daraja ifodalarini** (*nowhere near, not nearly, rather, barely, no sooner … than*) aniq tanlaysiz va ularning kuchini farqlaysiz.",
  slides: [
    {
      title: "Superlative: B2 qo'shimchalari",
      blocks: [
        { t: 'p', md: "B1 dan bilasiz: **the + -est / the most + sifat** (*the tallest, the most expensive*). B2 da superlativeni **kuchaytirish**, **o'rnini aniqlash** va **tajriba bilan** birga ishlatamiz." },
        { t: 'table', head: ['Qurilma', 'Misol'], speak: [1], rows: [
          ['by far / easily + the + superlative', "Solar power is by far the cheapest option here."],
          ['one of the + superlative + ko\'plik ot', "It is one of the cleanest rivers in the region."],
          ['the second / third + superlative', "It is the second largest lake in the country."],
          ['the + superlative + (that) + I\'ve ever + V3', "It's the worst smog I've ever seen."],
          ['the + superlative + in / of', "She is the fittest runner in the club."],
        ] },
        { t: 'tip', tone: 'info', md: "Superlativedan keyin **in** (joy, guruh: *in the world, in the class*) yoki **of** (ko'plik: *of all, of the three*) keladi. Tajriba haqida gapirganda **Present Perfect + ever** ishlatiladi: *It's the best talk I've ever heard.* *I ever heard* — xato." },
        { t: 'check', ex: { k: 'choice', q: "This is ___ polluted city in the country, by far.", opts: ['the most', 'most', 'the more', 'more'], a: 0, why: "Uzun sifat superlativi: **the most + sifat**." } },
        { t: 'check', ex: { k: 'fill', q: "It's the best lecture I've ___ heard.", a: ['ever'], uz: "Bu men eshitgan eng yaxshi ma'ruza.", why: "Tajriba: **the + superlative + I've ever + V3**." } },
      ],
    },
    {
      title: "Daraja ifodalari: qanchalik?",
      blocks: [
        { t: 'p', md: "Kuchli / kuchsiz daraja so'zlarini farqlash kerak. Ular matn tonini belgilaydi:" },
        { t: 'table', head: ["Ma'no", 'Ifoda', 'Misol'], speak: [2], rows: [
          ["juda kam, uzoq", 'nowhere near / not nearly', "The new park is nowhere near as big as the old one."],
          ["kam, qiyinchilik bilan", 'barely / hardly', "I could barely hear the speaker."],
          ["deyarli", 'almost / nearly', "We have almost finished the report."],
          ["biroz, ancha", 'a bit / rather / quite', "The room was rather cold."],
          ["to'liq emas", 'not quite', "The air is not quite clean enough yet."],
        ] },
        { t: 'tip', tone: 'warn', md: "**quite** britaniya ingliz tilida odatda **fairly** (*juda emas*): *quite good* = *yomon emas*. AQSHda ba'zan *very* ma'nosiga yaqin. **rather** esa ko'pincha kutilmagan yoki salbiy: *rather expensive*. Natijada: **not nearly / nowhere near** + **as … as** taqqoslashni kuchaytiradi: *not nearly as expensive as*." },
        { t: 'check', ex: { k: 'choice', q: "Which sentence says the new road is MUCH smaller?", opts: ["The new road is nowhere near as wide as the old one.", "The new road is almost as wide as the old one.", "The new road is quite as wide as the old one.", "The new road is just as wide as the old one."], a: 0, why: "**nowhere near as … as** — farq juda katta. *almost / just* — deyarli bir xil." } },
        { t: 'check', ex: { k: 'tf', q: "*I can hardly breathe in this smoke.* — Nafas olish qiyin.", a: true, why: "**hardly** = deyarli ... emas (qiyinchilik bilan). U o'zi inkor ma'noli." } },
      ],
    },
    {
      title: "No sooner … than va inversiya",
      blocks: [
        { t: 'p', md: "Rasmiy yoki yozma nutqda **no sooner … than** (*… bilan bir vaqtda*) ishlatiladi. Gapning boshida kelgani uchun **so'z tartibi o'zgaradi** (inversiya): yordamchi fe'l ega oldiga chiqadi." },
        { t: 'examples', items: [
          { en: "No sooner had the meeting started than the lights went out.", uz: "Yig'ilish boshlanishi bilan chiroqlar o'chdi.", note: "**No sooner + had + ega + V3 + than + Past Simple**." },
          { en: "Hardly had we arrived when it began to rain.", uz: "Yetib kelishimiz bilanoq yomg'ir yog'a boshladi.", note: "**Hardly + had … when**; *than* emas." },
          { en: "He is, if anything, healthier than he was last year.", uz: "U o'tgan yilgidan, aytish mumkinki, sog'lomroq.", note: "Daraja ifodasi: *if anything*." },
        ] },
        { t: 'tip', tone: 'good', md: "Oddiy gapda inversiyasiz variant ham bor: *We had no sooner arrived than it began to rain.* Gapning boshida kelsa, tartib: **No sooner + had + we + arrived**." },
        { t: 'check', ex: { k: 'fix', wrong: "No sooner we had left than it started to snow.", a: ["No sooner had we left than it started to snow."], why: "Inversiya: **No sooner had we left**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: 'compare',
          good: { title: "To'g'ri", items: ["It's the best film I've ever seen.", "It is one of the biggest problems.", "The river is the cleanest in the region.", "I hardly know him."] },
          bad: { title: 'Xato', items: ["It's the best film I saw.", "It is one of the biggest problem.", "The river is the most cleanest in the region.", "I hardly don't know him."] } },
        { t: 'check', ex: { k: 'fix', wrong: "It is one of the biggest problem in our city.", a: ["It is one of the biggest problems in our city.", "It's one of the biggest problems in our city."], why: "**one of the + superlative** dan keyin **ko'plik** ot kelishi kerak." } },
        { t: 'check', ex: { k: 'fix', wrong: "This is the most cleanest beach in the area.", a: ["This is the cleanest beach in the area."], why: "Qisqa sifat: faqat **-est** (*the cleanest*). *most* bilan qo'shib bo'lmaydi." } },
        { t: 'check', ex: { k: 'fix', wrong: "I hardly don't know the answer.", a: ["I hardly know the answer."], why: "**hardly / barely** o'zi inkor ma'noli, ikkinchi inkor qo'yilmaydi." } },
        { t: 'check', ex: { k: 'fix', wrong: "This is the worst smog I ever saw.", a: ["This is the worst smog I've ever seen.", "This is the worst smog I have ever seen."], why: "Hayotiy tajriba: **Present Perfect + ever**." } },
      ],
    },
    {
      title: "Dialog: harorat haqida",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Emily', en: "Leo, did you see the news? It was the hottest July the city has ever recorded.", uz: "Leo, yangiliklarni ko'rdingmi? Bu shahar qayd etgan eng issiq iyul bo'ldi." },
          { who: 'Leo', en: "I'm not surprised. By far the worst day was the fifteenth. I could barely walk to the station.", uz: "Taajjublanmayman. Eng og'ir kun 15-sana bo'ldi. Bekatgacha zo'rg'a yetib bordim." },
          { who: 'Emily', en: "Our office is nowhere near cool enough, either. We had almost forty people in one room.", uz: "Bizning ofis ham sovitilgan emas. Bir xonada qariyb qirq kishi edik." },
          { who: 'Leo', en: "Is it one of the oldest buildings in the centre?", uz: "U markazdagi eng eski binolardan biri emasmi?" },
          { who: 'Emily', en: "Yes. No sooner had the air conditioning been switched on than it broke down.", uz: "Ha. Konditsioner yoqilishi bilan buzilib qoldi." },
          { who: 'Leo', en: "That's rather unfortunate. Anyway, drink plenty of water. It's not quite over yet.", uz: "Bu ancha achinarli. Baribir ko'proq suv iching. Hali tugagani yo'q." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'Leo could walk to the station easily.', a: false, why: "Leo: *I could barely walk to the station.*" } },
        { t: 'check', ex: { k: 'choice', q: "What happened to the air conditioning?", opts: ["It broke down as soon as it was switched on", "It was never switched on", "It worked perfectly", "It was repaired at once"], a: 0, why: "*No sooner had the air conditioning been switched on than it broke down.*" } },
      ],
    },
  ],
  words: [
    { en: 'nowhere near', uz: "yaqin ham emas, juda uzoq", ipa: 'ˌnəʊweə ˈnɪə', pos: 'phrase', ex: 'The results are nowhere near as good as we hoped.', exUz: "Natijalar biz umid qilganchalik yaxshi emas, juda uzoq." },
    { en: 'not nearly', uz: "unchalik emas, ancha kam", ipa: 'nɒt ˈnɪəli', pos: 'phrase', ex: 'The new bus is not nearly as noisy as the old one.', exUz: "Yangi avtobus eskisichalik shovqinli emas." },
    { en: 'barely', uz: "zo'rg'a, arang", ipa: 'ˈbeəli', pos: 'adv', ex: 'There was barely enough water for everyone.', exUz: "Hamma uchun zo'rg'a yetadigan suv bor edi." },
    { en: 'rather', uz: "ancha, birmuncha", ipa: 'ˈrɑːðə', pos: 'adv', ex: 'The test was rather difficult.', exUz: "Test ancha qiyin edi." },
    { en: 'no sooner', uz: "... bilan bir vaqtda (no sooner … than)", ipa: 'nəʊ ˈsuːnə', pos: 'phrase', ex: 'No sooner had we sat down than the lecture began.', exUz: "O'tirishimiz bilan ma'ruza boshlandi." },
  ],
  practice: [
    { k: 'match', pairs: [['nowhere near', 'juda uzoq, yaqin ham emas'], ['barely', "zo'rg'a"], ['rather', 'ancha, birmuncha'], ['not nearly', 'unchalik emas'], ['no sooner', 'bilan bir vaqtda']] },
    { k: 'choice', q: "Solar panels are ___ the cheapest way to heat water here.", opts: ['by far', 'very', 'more', 'much of'], a: 0, why: "Superlativeni kuchaytiradi: **by far the cheapest**." },
    { k: 'fill', q: "It is one of the largest ___ in Asia. (lake)", a: ['lakes'], uz: "U Osiyodagi eng katta ko'llardan biri.", why: "**one of the + superlative + ko'plik**." },
    { k: 'fill', q: "It's the most beautiful beach I've ___ visited.", a: ['ever'], uz: "Bu men borgan eng go'zal plyaj.", why: "**I've ever + V3**." },
    { k: 'listen', say: 'The second largest lake is nowhere near as deep.', opts: ['The second largest lake is nowhere near as deep.', 'The second largest lake is almost as deep.', 'The second large lake is nowhere near deep.', 'The second largest lake is not nearly deeper.'], a: 0 },
    { k: 'choice', q: "I was so tired that I could ___ keep my eyes open.", opts: ['barely', 'nearly', 'rather', 'quite'], a: 0, why: "**barely** — zo'rg'a, deyarli imkonsiz; *nearly keep* — ma'nosiz." },
    { k: 'order', uz: "Qaytishimiz bilan yomg'ir boshlandi.", words: ['No', 'sooner', 'had', 'we', 'returned', 'than', 'it', 'rained.'], extra: ['when', 'did'], why: "**No sooner had we returned than…**." },
    { k: 'order', uz: "Bu men ko'rgan eng kuchli bo'ron.", words: ["It's", 'the', 'strongest', 'storm', "I've", 'ever', 'seen.'], extra: ['most', 'saw'], why: "**the strongest … I've ever seen**." },
    { k: 'fix', wrong: "This is the most cleanest river in the country.", a: ["This is the cleanest river in the country."], why: "Qisqa sifat: **the cleanest**; *most* qo'shilmaydi." },
    { k: 'fix', wrong: "It's the worst heatwave I saw.", a: ["It's the worst heatwave I've ever seen.", "It is the worst heatwave I have ever seen.", "It's the worst heatwave I have ever seen."], why: "**I've ever seen** — Present Perfect + ever." },
    { k: 'translate', uz: "Bu mamlakatdagi eng ifloslangan shaharlardan biri.", a: ["It is one of the most polluted cities in the country.", "It's one of the most polluted cities in the country.", "This is one of the most polluted cities in the country.", "It is one of the most polluted towns in the country."], why: "**one of the most + sifat + ko'plik**." },
    { k: 'tf', q: "*quite good* britaniya ingliz tilida odatda *juda yaxshi* degani.", a: false, why: "Britaniyada **quite good** ≈ *fairly good* (yomon emas), juda emas." },
    { k: 'dictation', say: 'It is not nearly as expensive as I expected.', a: ['It is not nearly as expensive as I expected.', "It's not nearly as expensive as I expected."], uz: "Men kutgandek qimmat emas." },
    { k: 'speak', say: "It's by far the best idea we've had.", uz: "Bu bizda bo'lgan eng yaxshi g'oya." },
  ],
  quiz: [
    { k: 'choice', q: "Which sentence is correct?", opts: ["She is the youngest of the three sisters.", "She is the most youngest of the three sisters.", "She is youngest in the three sisters.", "She is the younger of the three sisters."], a: 0, why: "Uch kishidan: **the youngest of the three**. *the younger* faqat ikkitadan." },
    { k: 'choice', q: "The old factory is ___ as polluting as it was ten years ago.", opts: ['not nearly', 'not so near', 'nowhere nearly', 'hardly nearly'], a: 0, why: "**not nearly as … as** — qat'iy birikma." },
    { k: 'choice', q: "Hardly had the speaker begun ___ the fire alarm rang.", opts: ['when', 'than', 'that', 'then'], a: 0, why: "**Hardly had … when**; **no sooner … than**." },
    { k: 'fill', q: "No sooner had they arrived ___ the rain started.", a: ['than'], why: "**No sooner … than**." },
    { k: 'fill', q: "I could ___ hear the lecturer from the back row.", a: ['barely', 'hardly'], uz: "Oxirgi qatordan ma'ruzachini zo'rg'a eshitdim.", why: "**barely / hardly** — zo'rg'a." },
    { k: 'fix', wrong: "This is the best coffee I tasted.", a: ["This is the best coffee I've ever tasted.", "This is the best coffee I have ever tasted."], why: "Tajriba: **I've ever tasted**." },
    { k: 'order', uz: "U mamlakatdagi eng uzun daryolardan biri.", words: ['It', 'is', 'one', 'of', 'the', 'longest', 'rivers', 'in', 'the', 'country.'], extra: ['river', 'a'], why: "**one of the + superlative + ko'plik**." },
    { k: 'listen', say: 'I can hardly believe how hot it is.', opts: ['I can hardly believe how hot it is.', 'I can hardly not believe how hot it is.', 'I can nearly believe how hot it is.', 'I can quite believe how hot it was.'], a: 0 },
    { k: 'tf', q: "*I can barely see anything* gapi ko'rish juda qiyin ekanini bildiradi.", a: true, why: "**barely** — zo'rg'a, deyarli yo'q." },
  ],
  summary: [
    "Superlative: **the + -est / the most**, kuchaytirish **by far / easily**, **one of the + ko'plik**, **the second largest**; **in** (joy) va **of** (guruh) bilan.",
    "Tajriba: **the best … I've ever seen** (Present Perfect + ever).",
    "Daraja: **nowhere near / not nearly as … as** (juda uzoq), **barely / hardly** (zo'rg'a), **almost / nearly** (deyarli), **rather / quite** (ancha / yetarlicha).",
    "Rasmiy: **No sooner had + ega + V3 + than …**, **Hardly had … when …** (inversiya).",
    "Yangi so'z va iboralar: **nowhere near, not nearly, barely, rather, no sooner**.",
  ],
  homework: "Mamlakatingiz yoki shahringiz haqida 6 ta superlative gap yozing: 2 tasi **by far**, 2 tasi **one of the … + ko'plik**, 1 tasi **the second …**, 1 tasi **the … I've ever …**. Keyin 2 ta gapda **not nearly / nowhere near as … as** ishlating.",
};

export default lesson;
