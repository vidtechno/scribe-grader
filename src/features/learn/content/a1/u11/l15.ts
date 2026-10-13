import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing an email about experiences.
const lesson: Lesson = {
  id: "u11-l15",
  title: "Reading and writing: an email about my experiences",
  titleUz: "O'qish va yozish: tajribalarim haqida xat",
  mini: true,
  kind: 'skill',
  goal: "Tajribalar haqidagi **qisqa xatlarni o'qib tushunasiz** va o'zingiz **do'stingizga xat yozasiz**: salomlashish, tajriba (*I've been to…*), tafsilot (*I went…*) va savol (*Have you ever…?*).",
  slides: [
    {
      title: "O'qing: Lolaning xati",
      blocks: [
        { t: "text", title: "An email from Lola",
          en: "Dear Emma,\nThanks for your email! I hope you are well. You asked about my experiences, so here is my news.\nI have been to three countries so far: Turkey, Kazakhstan and Georgia. I went to Turkey last summer with my family. We stayed in a small hotel near the sea, and I swam every day. I have never been to Europe, but I want to go next year.\nHave you ever been to Uzbekistan? Please write back soon!\nBest wishes,\nLola",
          uz: "Aziz Emma,\nXatingiz uchun rahmat! Umid qilamanki, yaxshisiz. Siz mening tajribalarim haqida so'rabsiz, mana yangiliklarim.\nMen hozirgacha uchta davlatda bo'lganman: Turkiya, Qozog'iston va Gruziya. Turkiyaga o'tgan yozda oilam bilan borganman. Dengiz yaqinidagi kichik mehmonxonada turdik va men har kuni suzdim. Men hech qachon Yevropada bo'lmaganman, lekin kelasi yil bormoqchiman.\nSiz hech O'zbekistonda bo'lganmisiz? Iltimos, tez javob yozing!\nEng yaxshi tilaklar bilan,\nLola" },
        { t: "check", ex: { k: "tf", q: "Lola has been to Europe.", a: false, why: "*I have never been to Europe.*" } },
        { t: "check", ex: { k: "choice", q: "When did Lola go to Turkey?", opts: ["Last summer.", "Next year.", "Last winter.", "Two years ago."], a: 0, why: "*I went to Turkey last summer.*" } },
      ],
    },
    {
      title: "O'qing: Emmaning javobi",
      blocks: [
        { t: "text", title: "Emma writes back",
          en: "Dear Lola,\nThank you for your news! Turkey sounds great. No, I haven't been to Uzbekistan, but I'd love to come.\nI have visited five countries, and I have been to Spain twice. The first time, I went there with my school. The second time, I took a photo of every beach!\nBy the way, I have never ridden a camel. Have you?\nWrite soon,\nEmma",
          uz: "Aziz Lola,\nYangiliklaringiz uchun rahmat! Turkiya ajoyib ekan. Yo'q, men O'zbekistonda bo'lmaganman, lekin kelishni xohlardim.\nMen beshta davlatda bo'lganman, Ispaniyada esa ikki marta bo'lganman. Birinchi marta maktabim bilan borganman. Ikkinchi marta har bir plyajni rasmga oldim!\nAytgancha, men hech qachon tuya minmaganman. Siz-chi?\nTezroq yozing,\nEmma" },
        { t: "check", ex: { k: "choice", q: "How many times has Emma been to Spain?", opts: ["Once.", "Twice.", "Three times.", "Never."], a: 1, why: "*I have been to Spain twice.*" } },
        { t: "check", ex: { k: "tf", q: "Emma has ridden a camel.", a: false, why: "*I have never ridden a camel.*" } },
      ],
    },
    {
      title: "Yozing: xat tuzilishi",
      blocks: [
        { t: "table", head: ["Qism", "Ibora"], speak: [1], rows: [
          ["Salom", "Dear Emma,"],
          ["Rahmat", "Thanks for your email!"],
          ["Tajriba", "I have been to three countries so far."],
          ["Tafsilot", "I went to Turkey last summer."],
          ["Savol", "Have you ever been to Uzbekistan?"],
          ["Xayrlashuv", "Best wishes, / Write soon,"],
        ] },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I have been to Turkey. I went there last summer.", "Please write back soon!"] },
          bad: { title: "Noto'g'ri", items: ["I have been to Turkey last summer.", "Please write soon back!"] } },
        { t: "tip", tone: "info", md: "Xat tartibi: **1) salom, 2) tajriba (Present Perfect), 3) tafsilot (Past Simple), 4) savol, 5) xayrlashuv.** Aniq vaqt (*last summer*) bor gapda Past Simple ishlating." },
        { t: "check", ex: { k: "order", uz: "Iltimos, tez javob yozing!", words: ["Please", "write", "back", "soon!"], extra: ["wrote", "to"] } },
      ],
    },
  ],
  words: [
    { en: "Dear…", uz: "Aziz… (xat boshida)", ipa: "dɪə", pos: "phrase", ex: "Dear Emma, how are you?", exUz: "Aziz Emma, yaxshimisiz?" },
    { en: "write back", uz: "javob yozmoq", ipa: "raɪt bæk", pos: "phrase", ex: "Please write back soon.", exUz: "Iltimos, tez javob yozing." },
    { en: "Thanks for your email", uz: "Xatingiz uchun rahmat", ipa: "θæŋks fə jɔː ˈiːmeɪl", pos: "phrase", ex: "Thanks for your email! It was fun to read.", exUz: "Xatingiz uchun rahmat! O'qish qiziq edi." },
    { en: "Best wishes", uz: "Eng yaxshi tilaklar bilan", ipa: "best ˈwɪʃɪz", pos: "phrase", ex: "Best wishes, Lola.", exUz: "Eng yaxshi tilaklar bilan, Lola." },
    { en: "beach", uz: "plyaj", ipa: "biːtʃ", pos: "noun", ex: "We swam at the beach.", exUz: "Biz plyajda suzdik." },
    { en: "email", uz: "elektron xat", ipa: "ˈiːmeɪl", pos: "noun", ex: "I wrote an email to my friend.", exUz: "Do'stimga elektron xat yozdim." },
  ],
  practice: [
    { k: "match", pairs: [["Dear…", "Aziz… (xat boshida)"], ["write back", "javob yozmoq"], ["Best wishes", "Eng yaxshi tilaklar bilan"], ["beach", "plyaj"], ["email", "elektron xat"]] },
    { k: "choice", q: "Xat qanday tugaydi?", opts: ["Best wishes, Lola", "Dear Lola", "Have you ever", "I went last summer"], a: 0, why: "Xayrlashuv: **Best wishes,** yoki **Write soon,**" },
    { k: "choice", q: "Lola: \"I ___ to Turkey last summer.\"", opts: ["went", "have been", "have gone", "go"], a: 0, why: "**last summer** — Past Simple." },
    { k: "tf", q: "Emma has been to Uzbekistan.", a: false, why: "*No, I haven't been to Uzbekistan.*" },
    { k: "tf", q: "Lola has been to three countries so far.", a: true, why: "*I have been to three countries so far.*" },
    { k: "fill", q: "Dear Emma, ___ for your email!", a: ["Thanks", "thanks", "Thank you"], uz: "Xatingiz uchun rahmat!" },
    { k: "fill", q: "I have never ___ a camel. (ride)", a: ["ridden"], why: "**ride – rode – ridden**." },
    { k: "fix", wrong: "I have been to Spain last year.", a: ["I went to Spain last year.", "I have been to Spain."], why: "**last year** bilan Past Simple: *I went*." },
    { k: "fix", wrong: "Please write soon back!", a: ["Please write back soon!"], why: "**write back soon**." },
    { k: "order", uz: "Men uchta davlatda bo'lganman.", words: ["I", "have", "been", "to", "three", "countries."], extra: ["went", "gone"] },
    { k: "order", uz: "Siz hech O'zbekistonda bo'lganmisiz?", words: ["Have", "you", "ever", "been", "to", "Uzbekistan?"], extra: ["did", "gone"] },
    { k: "translate", uz: "Men Turkiyaga o'tgan yozda borganman.", a: ["I went to Turkey last summer.", "I went to Turkey last summer"] },
    { k: "translate", uz: "Men Ispaniyada ikki marta bo'lganman.", a: ["I have been to Spain twice.", "I've been to Spain twice."] },
  ],
  quiz: [
    { k: "choice", q: "Emma has been to Spain ___.", opts: ["twice", "once", "never", "three times"], a: 0 },
    { k: "choice", q: "Xatda tajribadan keyin tafsilot qaysi zamonda?", opts: ["Past Simple", "Present Perfect", "Present Simple", "will"], a: 0, why: "Aniq vaqtli tafsilot → Past Simple." },
    { k: "fill", q: "Please write ___ soon! (javob yozing)", a: ["back"] },
    { k: "fix", wrong: "Dear Emma. Thanks for you email!", a: ["Dear Emma, thanks for your email!", "Dear Emma, Thanks for your email!", "Dear Emma. Thanks for your email!"], why: "**your email** — sizning xatingiz." },
    { k: "order", uz: "Eng yaxshi tilaklar bilan, Lola.", words: ["Best", "wishes,", "Lola."], extra: ["Dear"] },
    { k: "translate", uz: "Men hech qachon tuya minmaganman.", a: ["I have never ridden a camel.", "I've never ridden a camel."] },
    { k: "tf", q: "Xat \"Dear Emma,\" bilan boshlanadi.", a: true },
    { k: "match", pairs: [["Dear…", "Aziz…"], ["beach", "plyaj"], ["email", "elektron xat"], ["Best wishes", "Eng yaxshi tilaklar bilan"]] },
  ],
  summary: [
    "Xat tuzilishi: salom → rahmat → tajriba (**Present Perfect**) → tafsilot (**Past Simple**) → savol → xayrlashuv.",
    "Tajriba: *I have been to… / I have never…*; tafsilot: *I went there last summer.*",
    "Foydali iboralar: **Dear…, Thanks for your email, Please write back, Best wishes**.",
  ],
  homework: "Do'stingizga 6–8 gaplik xat yozing: salom, 2 ta tajriba (*I've been to…, I've never…*), 1 ta tafsilot (*I went…*), 1 ta savol (*Have you ever…?*) va xayrlashuv.",
};

export default lesson;
