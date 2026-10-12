import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l10",
  title: "Lost property: reporting a lost bag",
  titleUz: "Yo'qolgan narsa: sumka yo'qolganini xabar qilish",
  mini: true,
  kind: 'situation',
  goal: "Yo'qolgan narsalar bo'limida sumkangiz yo'qolganini xabar qilasiz: narsani **tasvirlaysiz** (rangi, o'lchami, ichida nima bor), **qayerda va qachon** yo'qolganini **Past Simple** va **Past Continuous** bilan aytasiz (*I left it on the bus. I was talking on the phone when…*) va xodimning savollariga javob berasiz.",
  slides: [
    {
      title: "Narsani tasvirlash",
      blocks: [
        { t: "p", md: "Xodim birinchi bo'lib **What does it look like?** yoki **Can you describe it?** deb so'raydi. Rangi, o'lchami, materiali va tashqi belgilarini ayting." },
        {
          t: "examples", items: [
            { en: "It's a black leather bag.", uz: "Bu qora charm sumka.", note: "Rang + material + narsa." },
            { en: "It's quite big, and it has a long strap.", uz: "U ancha katta va uzun tasmasi bor.", note: "**has** — narsada nima borligi." },
            { en: "It has a small blue zip on the front.", uz: "Old tomonida kichik ko'k zanjiri bor." },
            { en: "There is a laptop and a book inside.", uz: "Ichida noutbuk va kitob bor." },
          ],
        },
        { t: "tip", tone: "good", md: "Tartib: **o'lcham → rang → material → narsa**: *a small brown leather bag*. Narsa hozir ham mavjud, shuning uchun tasvirda **hozirgi zamon** (*it is, it has*) ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "Qaysi tasvir to'g'ri tartibda?", opts: ["a leather black big bag", "a big black leather bag", "a bag big black leather", "a black big leather bag"], a: 1, why: "O'lcham (big) → rang (black) → material (leather) → narsa (bag)." } },
      ],
    },
    {
      title: "Qayerda va qachon yo'qoldi",
      blocks: [
        { t: "p", md: "Yo'qotish **o'tgan** voqea. Bu yerda biz **Past Simple** (qisqa voqea) va **Past Continuous** (fon) dan foydalanamiz:" },
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["When did you lose it?", "I lost it yesterday afternoon."],
            ["Where did you last see it?", "I last saw it on the bus."],
            ["What were you doing?", "I was talking on the phone."],
            ["Did you check the station?", "Yes, I did, but it wasn't there."],
          ],
        },
        { t: "examples", items: [
          { en: "I left my bag on the train.", uz: "Sumkamni poyezdda qoldirib ketdim.", note: "leave – left" },
          { en: "I was talking on the phone when I got off the bus.", uz: "Avtobusdan tushganimda telefonda gaplashayotgan edim.", note: "Fon + voqea." },
          { en: "I didn't notice that I forgot it.", uz: "Uni unutganimni payqamadim." },
        ] },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I lost my bag yesterday.", "Did you leave it on the bus?", "I didn't see it."] },
          bad: { title: "Xato", items: ["I losed my bag yesterday.", "Did you left it on the bus?", "I didn't saw it."] },
        },
        { t: "check", ex: { k: "fill", q: "I ___ my bag on the bus yesterday. (leave)", a: ["left"], why: "**leave – left**." } },
        { t: "check", ex: { k: "choice", q: "When did you lose it?", opts: ["I lose it on Monday.", "I lost it on Monday.", "I was lose it on Monday.", "I losing it on Monday."], a: 1, why: "Aniq o'tgan vaqt → Past Simple: **lost**." } },
      ],
    },
    {
      title: "Dialog: Lost property office",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Clerk", en: "Good morning. How can I help you?", uz: "Xayrli tong. Sizga qanday yordam bera olaman?" },
            { who: "Aziza", en: "Hello. I lost my bag yesterday. I think I left it on the number 12 bus.", uz: "Salom. Kecha sumkamni yo'qotdim. Uni 12-avtobusda qoldirgan bo'lsam kerak." },
            { who: "Clerk", en: "Can you describe it, please?", uz: "Iltimos, uni tasvirlab bera olasizmi?" },
            { who: "Aziza", en: "It's a medium brown leather bag with a long strap and a black zip.", uz: "Bu o'rtacha o'lchamdagi jigarrang charm sumka, tasmasi uzun, zanjiri qora." },
            { who: "Clerk", en: "What was inside?", uz: "Ichida nima bor edi?" },
            { who: "Aziza", en: "My wallet, a blue notebook and my keys.", uz: "Hamyonim, ko'k daftarim va kalitlarim." },
            { who: "Clerk", en: "When exactly did you lose it?", uz: "Aniq qachon yo'qotdingiz?" },
            { who: "Aziza", en: "At about five o'clock. I was reading a message when I got off the bus. So I forgot the bag on my seat.", uz: "Soat beshlarda. Avtobusdan tushganimda xabar o'qiyotgan edim. Shuning uchun sumkani o'rindiqda unutib qoldirdim." },
            { who: "Clerk", en: "Please fill in this form. We'll call you tomorrow.", uz: "Iltimos, mana bu blankani to'ldiring. Ertaga sizga qo'ng'iroq qilamiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Where did Aziza leave her bag?", opts: ["On a train.", "On a bus.", "In a shop.", "In a taxi."], a: 1, why: "*I left it on the number 12 bus.*" } },
        { t: "check", ex: { k: "tf", q: "Aziza was talking on the phone when she got off the bus.", a: false, why: "U telefonda gaplashmagan, **xabar o'qiyotgan edi** (*reading a message*)." } },
      ],
    },
  ],
  words: [
    { en: "lost property office", uz: "yo'qolgan narsalar bo'limi", ipa: "lɒst ˈprɒpəti ˈɒfɪs", pos: "noun", ex: "I went to the lost property office at the station.", exUz: "Bekatdagi yo'qolgan narsalar bo'limiga bordim." },
    { en: "item", uz: "narsa, buyum", ipa: "ˈaɪtəm", pos: "noun", ex: "Please list the items in your bag.", exUz: "Iltimos, sumkangizdagi narsalarni sanab bering." },
    { en: "describe", uz: "tasvirlamoq", ipa: "dɪˈskraɪb", pos: "verb", ex: "Can you describe your bag?", exUz: "Sumkangizni tasvirlab bera olasizmi?" },
    { en: "leather", uz: "charm", ipa: "ˈleðə", pos: "noun", ex: "It's a leather jacket.", exUz: "Bu charm kurtka." },
    { en: "zip", uz: "zanjir (kiyim, sumkada)", ipa: "zɪp", pos: "noun", ex: "The bag has a red zip.", exUz: "Sumkaning qizil zanjiri bor." },
    { en: "strap", uz: "tasma, qayish", ipa: "stræp", pos: "noun", ex: "The strap is very long.", exUz: "Tasma juda uzun." },
    { en: "form", uz: "blanka, anketa", ipa: "fɔːm", pos: "noun", ex: "Please fill in this form.", exUz: "Iltimos, ushbu blankani to'ldiring." },
  ],
  practice: [
    { k: "match", pairs: [["leather", "charm"], ["strap", "tasma"], ["zip", "zanjir"], ["describe", "tasvirlamoq"], ["form", "blanka"]] },
    { k: "listen", say: "I left my bag on the bus yesterday.", opts: ["I left my bag on the bus yesterday.", "I lost my bag on the bus tomorrow.", "I leave my bag on the bus every day."], a: 0 },
    { k: "choice", q: "Xodim: **Can you describe your bag?** Eng yaxshi javob:", opts: ["It's a small black leather bag with a long strap.", "Yes, I lost it.", "I was walking.", "At five o'clock."], a: 0, why: "Describe — tashqi ko'rinishni aytish kerak." },
    { k: "choice", q: "Xodim: **When did you lose it?** Eng yaxshi javob:", opts: ["Yesterday morning.", "A black bag.", "On the bus.", "Yes, I do."], a: 0, why: "*When* → vaqt." },
    { k: "choice", q: "Xodim: **Where did you last see it?** Eng yaxshi javob:", opts: ["On the number 12 bus.", "At six o'clock.", "It's brown.", "Because I was tired."], a: 0, why: "*Where* → joy." },
    { k: "fill", q: "It's a big black ___ bag. (charm)", a: ["leather"], uz: "Bu katta qora charm sumka.", why: "**leather** — charm." },
    { k: "fill", q: "I ___ talking on the phone when I got off the train.", a: ["was"], why: "*I* + **was** talking." },
    { k: "fill", q: "Did you ___ it at the station? (leave)", a: ["leave"], why: "*Did* dan keyin asosiy fe'l: **leave**." },
    { k: "fix", wrong: "I losed my wallet at the station.", a: ["I lost my wallet at the station."], why: "**lose – lost**." },
    { k: "fix", wrong: "Did you saw your bag on the bus?", a: ["Did you see your bag on the bus?"], why: "*Did* dan keyin V1: **see**." },
    { k: "order", uz: "Men uni 12-avtobusda qoldirdim.", words: ["I", "left", "it", "on", "the", "number", "12", "bus."], extra: ["leave", "lost"] },
    { k: "order", uz: "Qachon uni yo'qotdingiz?", words: ["When", "did", "you", "lose", "it?"], extra: ["lost", "were"] },
    { k: "translate", uz: "Men avtobusdan tushganimda telefonda gaplashayotgan edim.", a: ["I was talking on the phone when I got off the bus.", "I was talking on the phone when I got off the bus", "While I was talking on the phone, I got off the bus.", "When I got off the bus, I was talking on the phone."] },
    { k: "speak", say: "I lost my bag yesterday. It's a brown leather bag.", uz: "Kecha sumkamni yo'qotdim. Bu jigarrang charm sumka." },
  ],
  quiz: [
    { k: "choice", q: "Which is the best order?", opts: ["a leather brown small bag", "a small brown leather bag", "a brown small leather bag", "a bag small brown leather"], a: 1, why: "O'lcham → rang → material → narsa." },
    { k: "choice", q: "I ___ my bag on the train last night.", opts: ["leave", "left", "leaved", "was leave"], a: 1, why: "**leave – left**." },
    { k: "choice", q: "Xodim: **What was inside?** Eng yaxshi javob:", opts: ["My wallet and my keys.", "Yesterday.", "On the bus.", "Yes, it was."], a: 0, why: "*What* → narsalar." },
    { k: "fill", q: "I ___ my phone while I was running for the bus. (lose)", a: ["lost"], why: "Qisqa voqea → **lost**." },
    { k: "fill", q: "Please fill in this ___ .", a: ["form"], uz: "Iltimos, ushbu blankani to'ldiring.", why: "**form** — blanka." },
    { k: "tf", q: "**Did you lost your bag yesterday?** — to'g'ri gap.", a: false, why: "*Did* dan keyin V1: *Did you **lose** your bag yesterday?*" },
    { k: "order", uz: "Sumkangizni tasvirlab bera olasizmi?", words: ["Can", "you", "describe", "your", "bag?"], extra: ["described", "do"] },
    { k: "translate", uz: "Men uni kecha avtobusda unutib qoldirdim.", a: ["I left it on the bus yesterday.", "I forgot it on the bus yesterday.", "Yesterday I left it on the bus.", "Yesterday I forgot it on the bus."] },
  ],
  summary: [
    "Narsani tasvirlang: **o'lcham → rang → material → narsa** (*a big black leather bag*), keyin *it has a strap / a zip*.",
    "Qachon va qayerda: **Past Simple** — *I lost it yesterday. I left it on the bus.*",
    "Yo'qotish paytidagi fon: **Past Continuous** — *I was talking on the phone when I got off.*",
    "Savollar: **What does it look like? When did you lose it? Where did you last see it? What was inside?**",
    "Oxirida xodim **form** (blanka) to'ldirtiradi va qo'ng'iroq qiladi.",
  ],
  homework: "O'z sumkangiz yoki telefoningizni yo'qotdim deb tasavvur qiling. 5 ta gap yozing: u qanday ko'rinadi, ichida nima bor, qachon va qayerda yo'qotdingiz, o'sha paytda nima qilayotgan edingiz. Keyin dialogdagi xodim rolida o'zingizga savollar bering.",
};

export default lesson;
