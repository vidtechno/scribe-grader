import type { Lesson } from '../../../types';

// Mini lesson (situation): sharing experiences. Recycles been/gone, past participles, ever/never, Past Simple details.
const lesson: Lesson = {
  id: "u11-l9",
  title: "Sharing experiences: have you ever…?",
  titleUz: "Tajriba almashish: Have you ever…?",
  mini: true,
  goal: "Suhbatdoshingizdan **tajribasi haqida so'raysiz** (*Have you ever…?*), o'zingiz haqingizda aytasiz (*I've been to… / I've never…*) va tafsilotlarni **Past Simple** bilan davom ettirasiz. **been** va **gone** farqini ham bilib olasiz.",
  slides: [
    {
      title: "Vaziyat: sayohat haqida suhbat",
      blocks: [
        { t: "p", md: "Yangi tanishlar ko'pincha tajriba haqida gaplashadi. Suhbat odatda **Present Perfect** savoli bilan boshlanadi, keyin **Past Simple** bilan tafsilotlarga o'tiladi." },
        { t: "dialog", lines: [
          { who: "Tom", en: "Have you ever been to Samarkand?", uz: "Samarqandda hech bo'lganmisiz?" },
          { who: "Dilnoza", en: "Yes, I have. I went there last summer.", uz: "Ha, bo'lganman. O'tgan yozda borgandim." },
          { who: "Tom", en: "Did you like it?", uz: "Yoqdimi?" },
          { who: "Dilnoza", en: "I loved it! It was an amazing trip. Have you ever been there?", uz: "Juda yoqdi! Ajoyib sayohat bo'ldi. Siz hech bo'lganmisiz?" },
          { who: "Tom", en: "No, I haven't. I've never been to Uzbekistan, but I'm going to visit next year.", uz: "Yo'q, bo'lmaganman. O'zbekistonda hech bo'lmaganman, lekin kelasi yil boraman." },
          { who: "Dilnoza", en: "You'll love it. You're lucky!", uz: "Sizga yoqadi. Omadingiz bor ekan!" },
        ] },
        { t: "check", ex: { k: "choice", q: "Dilnoza: \"I ___ there last summer.\"", opts: ["have gone", "went", "have been", "go"], a: 1, why: "**last summer** — aniq vaqt → **Past Simple: went**." } },
      ],
    },
    {
      title: "been yoki gone? Perfect yoki Simple?",
      blocks: [
        { t: "table", head: ["Gap", "Ma'nosi"], speak: [0, 1], rows: [
          ["She's been to the market.", "U bozorga borib, qaytib keldi (hozir shu yerda)."],
          ["She's gone to the market.", "U bozorga ketdi (hozir hali u yerda yoki yo'lda)."],
          ["Have you ever tried plov?", "Hayotingizda hech tatib ko'rganmisiz? (vaqt yo'q)"],
          ["I tried it in Bukhara last year.", "Aniq vaqt bor — Past Simple."],
        ] },
        { t: "tip", tone: "info", md: "**Have you ever…?** — vaqt aytilmaydi. Javob *Yes, I have. / No, I haven't.* Tafsilot (qachon, qayerda) so'ralganda **Past Simple**: *When did you go? Did you like it?*" },
        { t: "check", ex: { k: "fill", q: "Where's Ali? — He's ___ to the bank. (he is still there)", a: ["gone"], why: "U hali u yerda → **gone**. Qaytib kelgan bo'lsa — *been*." } },
        { t: "check", ex: { k: "choice", q: "\"Men hech qachon Yaponiyada bo'lmaganman.\"", opts: ["I never went to Japan.", "I've never been to Japan.", "I've never gone to Japan.", "I never have been Japan."], a: 1, why: "Hayotdagi tajriba → **have never been to**." } },
      ],
    },
    {
      title: "Foydali iboralar va xatolar",
      blocks: [
        { t: "table", head: ["Inglizcha", "Qachon aytiladi"], speak: [0], rows: [
          ["Have you ever…?", "Tajriba haqida so'raysiz"],
          ["I've been to… / I've never been to…", "O'zingiz haqingizda aytasiz"],
          ["When did you go there?", "Tafsilot so'raysiz"],
          ["What was it like?", "Taassurot so'raysiz"],
          ["It was amazing!", "Taassurotingizni aytasiz"],
          ["Me too. / Me neither.", "Qo'shilasiz"],
        ] },
        { t: "compare", good: { title: "To'g'ri", items: ["Have you ever been to Turkey?", "I've never eaten sushi.", "I went there in 2023."], }, bad: { title: "Noto'g'ri", items: ["Did you ever be to Turkey?", "I've never ate sushi.", "I've been there in 2023."] } },
        { t: "tip", tone: "warn", md: "**Aniq vaqt** (*yesterday, in 2023, last year*) bilan **Present Perfect** ishlatilmaydi: *I went there in 2023* (✅), *I've been there in 2023* (❌)." },
        { t: "check", ex: { k: "choice", q: "\"Have you ever been to London?\" — \"No, ___.\"", opts: ["I don't", "I haven't", "I didn't", "I wasn't"], a: 1, why: "**Have you…?** ga qisqa javob: *No, I haven't.*" } },
      ],
    },
  ],
  words: [
    { en: "trip", uz: "sayohat, safar", ipa: "trɪp", pos: "noun", ex: "It was a long trip.", exUz: "Bu uzoq sayohat edi." },
    { en: "lucky", uz: "omadli", ipa: "ˈlʌk.i", pos: "adjective", ex: "You are lucky!", exUz: "Sizning omadingiz bor!" },
    { en: "adventure", uz: "sarguzasht", ipa: "ədˈven.tʃər", pos: "noun", ex: "The trip was a big adventure.", exUz: "Sayohat katta sarguzasht edi." },
  ],
  practice: [
    { k: "choice", q: "___ you ever eaten Chinese food?", opts: ["Do", "Did", "Have", "Are"], a: 2, why: "**Have you ever + V3?**" },
    { k: "fill", q: "I've never ___ a camel. (ride)", a: ["ridden"], why: "ride – rode – **ridden**." },
    { k: "order", uz: "Siz hech Samarqandda bo'lganmisiz?", words: ["Have", "you", "ever", "been", "to", "Samarkand"], extra: ["did", "gone"] },
    { k: "translate", uz: "Men o'tgan yili u yerga borganman.", a: ["I went there last year.", "I went there last year"], why: "**last year** → Past Simple." },
    { k: "match", pairs: [["trip", "sayohat"], ["lucky", "omadli"], ["adventure", "sarguzasht"], ["amazing", "ajoyib"], ["ever", "hech (qachon)"]] },
    { k: "tf", q: "*She's gone to the market* — u bozordan qaytib keldi.", a: false, why: "**gone** — u hali u yerda. Qaytgan bo'lsa — *She's been*." },
    { k: "listen", say: "Have you ever been to Samarkand?", opts: ["Have you ever been to Samarkand?", "Did you go to Samarkand?", "Has she been to Samarkand?", "Have you ever gone to Samarkand?"], a: 0 },
    { k: "dictation", say: "I've never been to Japan.", a: ["I've never been to Japan.", "I have never been to Japan."] },
    { k: "fix", wrong: "I've seen him yesterday.", a: ["I saw him yesterday."], why: "**yesterday** bilan — Past Simple." },
    { k: "fill", q: "A: Have you ever been to Turkey? B: Yes, I ___. I went in May.", a: ["have"], why: "Qisqa javob: *Yes, I have.*" },
    { k: "speak", say: "What was it like?", uz: "U qanday edi?" },
  ],
  quiz: [
    { k: "choice", q: "She ___ to Paris twice. (she has visited it)", opts: ["has been", "went", "is gone", "was go"], a: 0 },
    { k: "fill", q: "We ___ in Bukhara in 2022. (stay)", a: ["stayed"], why: "*in 2022* → Past Simple." },
    { k: "order", uz: "Men hech suzmaganman.", words: ["I've", "never", "swum"], extra: ["swam", "ever"] },
    { k: "translate", uz: "Siz hech Yaponiyada bo'lganmisiz?", a: ["Have you ever been to Japan?"] },
    { k: "tf", q: "*Have you ever been to London?* — aniq vaqtni so'ramaydi.", a: true },
    { k: "fix", wrong: "Did you ever been to Turkey?", a: ["Have you ever been to Turkey?"], why: "Tajriba savoli: **Have you ever + V3?**" },
    { k: "match", pairs: [["been", "borib qaytgan"], ["gone", "ketgan (hali qaytmagan)"], ["never", "hech qachon"], ["trip", "sayohat"]] },
    { k: "choice", q: "When ___ you go to Samarkand?", opts: ["have", "did", "do", "are"], a: 1 },
  ],
  summary: [
    "Tajriba haqida so'rash: **Have you ever + V3?** — javob *Yes, I have. / No, I haven't.*",
    "**been** — borib qaytgan; **gone** — ketgan, hali qaytmagan.",
    "Tafsilot va aniq vaqt bo'lsa — **Past Simple**: *When did you go? I went in 2023.*",
    "Yangi so'zlar: **trip, lucky, adventure**.",
  ],
  homework: "3 ta gap yozing: bitta *I've been to…*, bitta *I've never…* va bitta Past Simple tafsilot (*I went there in…*).",
};

export default lesson;
