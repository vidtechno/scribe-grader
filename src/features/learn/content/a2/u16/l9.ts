import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u16-l9",
  title: "Travel experiences: have you ever…?",
  titleUz: "Sayohat tajribasi: Have you ever…?",
  mini: true,
  kind: 'situation',
  goal: "Sayohat haqida suhbatda **Have you ever…?** deb so'raysiz, **Yes, I have / No, I haven't** deb javob berasiz, keyin esa **Past Simple** bilan tafsilot (qachon, qayerda) aytasiz. Shuningdek, **for** va **since** bilan qancha vaqtdan beri yashayotganingizni aytasiz.",
  slides: [
    {
      title: "Suhbat: sayohat haqida",
      blocks: [
        { t: "p", md: "Yangi odam bilan tanishganda sayohat haqida gaplashish oson mavzu. Suhbatda ikki zamon ketma-ket keladi: avval **Present Perfect** (tajriba bormi?), keyin **Past Simple** (qachon, qanday bo'ldi?)." },
        {
          t: "dialog", lines: [
            { who: "Tom", en: "Have you ever been abroad, Aziza?", uz: "Aziza, siz hech chet elda bo'lganmisiz?" },
            { who: "Aziza", en: "Yes, I have. I've been to Turkey twice.", uz: "Ha, bo'lganman. Turkiyada ikki marta bo'lganman." },
            { who: "Tom", en: "Really? When did you go there?", uz: "Rostdanmi? U yerga qachon borgansiz?" },
            { who: "Aziza", en: "The first time was in 2021. We took a tour of the old city and the view from the hotel was wonderful.", uz: "Birinchi marta 2021-yilda. Biz eski shahar bo'ylab ekskursiyada bo'ldik, mehmonxonadan ko'rinish ajoyib edi." },
            { who: "Tom", en: "Have you ever lost your luggage at an airport?", uz: "Aeroportda hech yukingizni yo'qotganmisiz?" },
            { who: "Aziza", en: "No, I haven't, but I once forgot my passport at home!", uz: "Yo'q, yo'qotmaganman, lekin bir marta pasportimni uyda unutib qoldirganman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziza has been to Turkey.", a: true, why: "*I've been to Turkey twice.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Tom say **When did you go there?**", opts: ["He asks about a finished time in the past.", "He asks about her plans.", "He asks how long she has lived there.", "He asks about her job."], a: 0, why: "Aniq vaqt so'ralganda — **Past Simple** (*did you go*)." } },
      ],
    },
    {
      title: "Ever, never va tafsilot",
      blocks: [
        {
          t: "table", head: ["Maqsad", "Zamon", "Misol"], speak: [2],
          rows: [
            ["Tajribani so'rash", "Have you ever + V3?", "Have you ever been to Khiva?"],
            ["Qisqa javob", "Yes, I have. / No, I haven't.", "Yes, I have."],
            ["Hech qachon bo'lmagan", "I have never + V3", "I've never flown in a plane."],
            ["Tafsilot (qachon? qayerda?)", "Past Simple", "I went there last spring."],
          ],
        },
        { t: "tip", tone: "info", md: "Tajribani aytganda vaqt aytmaymiz (*I've been to Turkey*). Vaqtni aytsangiz — **Past Simple**ga o'ting (*I went there in 2021*). Savolda ham shunday: **Have you ever…?** → keyin **When did you…?**" },
        { t: "compare", good: { title: "To'g'ri", items: ["Have you ever been to Samarkand?", "I've never been to London.", "I went to Samarkand last year."], }, bad: { title: "Xato", items: ["Did you ever been to Samarkand?", "I never have been to London yesterday.", "I have been to Samarkand last year."] } },
        { t: "check", ex: { k: "fill", q: "I ___ never flown in a plane. (have)", a: ["have", "'ve", "’ve"], why: "**I have never + V3** (qisqa: *I've never*)." } },
        { t: "check", ex: { k: "choice", q: "**We ___ to the beach last summer.**", opts: ["have been", "went", "have gone", "go"], a: 1, why: "*last summer* — aniq vaqt → **Past Simple**." } },
      ],
    },
    {
      title: "Qancha vaqtdan beri?",
      blocks: [
        { t: "p", md: "Sayohatchilar ko'pincha «qayerda yashaysiz, qancha vaqtdan beri?» deb so'rashadi. Bunda **for** (muddat) va **since** (boshlanish) ishlatamiz." },
        {
          t: "examples", items: [
            { en: "How long have you lived in Tashkent?", uz: "Toshkentda qancha vaqtdan beri yashaysiz?" },
            { en: "I've lived here for five years.", uz: "Men bu yerda besh yildan beri yashayman." },
            { en: "I've wanted to visit Japan since I was a child.", uz: "Men bolaligimdan beri Yaponiyaga borishni xohlayman." },
            { en: "She has had her passport for a week.", uz: "Uning pasporti bir haftadan beri bor." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "We've been in this hotel ___ Monday.", a: ["since"], why: "**Monday** — boshlanish nuqtasi → **since**." } },
        { t: "check", ex: { k: "choice", q: "**He has worked as a guide ___ three years.**", opts: ["since", "for", "ago", "in"], a: 1, why: "**three years** — muddat → **for**." } },
      ],
    },
  ],
  words: [
    { en: "passport", uz: "pasport", ipa: "ˈpɑːspɔːt", pos: "noun", ex: "Don't forget your passport.", exUz: "Pasportingizni unutmang." },
    { en: "flight", uz: "parvoz, reys", ipa: "flaɪt", pos: "noun", ex: "Our flight was two hours late.", exUz: "Bizning reysimiz ikki soat kechikdi." },
    { en: "luggage", uz: "yuk, bagaj", ipa: "ˈlʌɡɪdʒ", pos: "noun", ex: "I have only one small piece of luggage.", exUz: "Mening faqat bitta kichik yukim bor." },
    { en: "tour", uz: "ekskursiya, sayohat", ipa: "tʊə", pos: "noun", ex: "We took a tour of the old city.", exUz: "Biz eski shahar bo'ylab ekskursiyaga bordik." },
    { en: "view", uz: "manzara, ko'rinish", ipa: "vjuː", pos: "noun", ex: "The view from the window is beautiful.", exUz: "Derazadan manzara juda chiroyli." },
    { en: "beach", uz: "plyaj, qirg'oq", ipa: "biːtʃ", pos: "noun", ex: "We spent a day at the beach.", exUz: "Biz bir kunni plyajda o'tkazdik." },
  ],
  practice: [
    { k: "match", pairs: [["passport", "pasport"], ["flight", "parvoz, reys"], ["luggage", "yuk, bagaj"], ["tour", "ekskursiya"], ["view", "manzara"]] },
    { k: "listen", say: "Have you ever been abroad?", opts: ["Have you ever been abroad?", "Did you ever go abroad?", "Have you ever seen a board?"], a: 0 },
    { k: "choice", q: "**Have you ever ___ sushi?**", opts: ["eat", "ate", "eaten", "eating"], a: 2, why: "Present Perfect: **have + V3**; *eat – ate – eaten*." },
    { k: "choice", q: "**I ___ my passport at the hotel yesterday.**", opts: ["have forgotten", "forgot", "have forgot", "forget"], a: 1, why: "*yesterday* — aniq vaqt → Past Simple." },
    { k: "choice", q: "**She has lived in Samarkand ___ 2016.**", opts: ["for", "since", "ago", "in"], a: 1 },
    { k: "choice", q: "**They have waited at the airport ___ two hours.**", opts: ["since", "for", "from", "ago"], a: 1 },
    { k: "tf", q: "**Have you ever been to Khiva last year?** — to'g'ri gap.", a: false, why: "*last year* aniq vaqt; shunda Present Perfect ishlatilmaydi. To'g'ri: *Did you go to Khiva last year?*" },
    { k: "fill", q: "A: Have you ever been to Bukhara? B: Yes, I ___.", a: ["have"], why: "Qisqa javob: **Yes, I have.**" },
    { k: "fill", q: "A: Have you ever lost your luggage? B: No, I ___.", a: ["haven't", "have not", "haven’t"], why: "Qisqa inkor javob: **No, I haven't.**" },
    { k: "fix", wrong: "I have visited Istanbul in 2019.", a: ["I visited Istanbul in 2019.", "I went to Istanbul in 2019.", "I have visited Istanbul."], why: "*in 2019* aniq vaqt → Past Simple." },
    { k: "order", uz: "Siz hech chet elda bo'lganmisiz?", words: ["Have", "you", "ever", "been", "abroad?"], extra: ["did", "went"] },
    { k: "order", uz: "Men bu shaharda besh yildan beri yashayman.", words: ["I've", "lived", "in", "this", "city", "for", "five", "years."], extra: ["since", "live"], alt: [["I", "have", "lived", "in", "this", "city", "for", "five", "years."]] },
    { k: "translate", uz: "Men hech qachon plyajda bo'lmaganman.", a: ["I've never been to the beach.", "I have never been to the beach.", "I've never been to a beach.", "I have never been to a beach."] },
    { k: "speak", say: "Have you ever been to Turkey?", uz: "Siz hech Turkiyada bo'lganmisiz?" },
  ],
  quiz: [
    { k: "choice", q: "**Have you ever ___ a long flight?**", opts: ["take", "took", "taken", "taking"], a: 2 },
    { k: "choice", q: "**We ___ a tour of the old city last summer.**", opts: ["have taken", "took", "take", "have took"], a: 1, why: "*last summer* → Past Simple." },
    { k: "choice", q: "**I've known my guide ___ ten years.**", opts: ["since", "for", "ago", "at"], a: 1 },
    { k: "choice", q: "**He has wanted to see the sea ___ he was a boy.**", opts: ["for", "since", "ago", "when"], a: 1 },
    { k: "fill", q: "I have ___ been to Japan, but I would like to go.", a: ["never"], why: "Hali bo'lmagan tajriba → **never**." },
    { k: "fix", wrong: "Did you ever been to London?", a: ["Have you ever been to London?"], why: "Tajriba savoli: **Have you ever + V3?**" },
    { k: "translate", uz: "Siz Toshkentda qancha vaqtdan beri yashaysiz?", a: ["How long have you lived in Tashkent?", "How long have you been living in Tashkent?"] },
    { k: "listen", say: "I went to the beach last Sunday.", opts: ["I went to the beach last Sunday.", "I have been to the beach last Sunday.", "I go to the beach every Sunday."], a: 0 },
  ],
  summary: [
    "Tajribani so'rash: **Have you ever + V3?** Javob: **Yes, I have. / No, I haven't.**",
    "Hech qachon bo'lmagan ish: **I have never + V3**.",
    "Tafsilot (qachon, qayerda) so'ralsa yoki aniq vaqt bor bo'lsa — **Past Simple**.",
    "Davom etayotgan holat: **for** + muddat, **since** + boshlanish nuqtasi.",
  ],
  homework: "Do'stingizga 4 ta savol yozing: ikkitasi **Have you ever…?** bilan, ikkitasi **When did you…?** bilan. Keyin o'zingiz ham javob bering. Masalan: *Have you ever been abroad? When did you go there?*",
};

export default lesson;
