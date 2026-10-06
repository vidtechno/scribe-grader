import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l5",
  title: "Irregular verbs 2: didn't, Did…?",
  titleUz: "Noto'g'ri fe'llar 2, didn't va Did…?",
  goal: "Yana 10 ta noto'g'ri fe'lni o'rganasiz va o'tgan zamonda **inkor** (*I didn't go*) hamda **savol** (*Did you see…? What did you eat?*) tuza olasiz.",
  slides: [
    {
      title: "Yana 10 ta noto'g'ri fe'l",
      blocks: [
        {
          t: "table", head: ["V1", "V2", "Ma'nosi", "V2 talaffuzi"],
          rows: [
            ["give", "gave", "bermoq", "geyv"],
            ["know", "knew", "bilmoq", "nyu:"],
            ["think", "thought", "o'ylamoq", "θo:t"],
            ["buy", "bought", "sotib olmoq", "bo:t"],
            ["eat", "ate", "yemoq", "et / eyt"],
            ["drink", "drank", "ichmoq", "dræŋk"],
            ["write", "wrote", "yozmoq", "rout"],
            ["read", "read", "o'qimoq", "red"],
            ["find", "found", "topmoq", "faund"],
            ["meet", "met", "uchrashmoq, tanishmoq", "met"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**read – read**: yozilishi bir xil, lekin talaffuzi boshqa! Hozirgi zamonda **\"ri:d\"**, o'tgan zamonda **\"red\"** (*red* — qizil so'zi kabi). Vaqt so'zidan bilib olasiz: *I **read** a book yesterday.* → \"red\"." },
        { t: "check", ex: { k: "choice", q: "*I read this book last year.* — bu yerda **read** qanday o'qiladi?", opts: ["ri:d", "red", "reyd"], a: 1, why: "*last year* — o'tgan zamon → **\"red\"**." } },
      ],
    },
    {
      title: "Talaffuz va yodlash sirlari",
      blocks: [
        {
          t: "sounds", items: [
            { label: "thought / bought", say: "thought, bought", uz: "Ikkalasi qofiyadosh: **\"θo:t\", \"bo:t\"**. **gh** umuman o'qilmaydi! *th* — tilning uchi tishlar orasida, jarangsiz.", examples: ["thought", "bought"] },
            { label: "knew", say: "knew", uz: "**k** o'qilmaydi: **\"nyu:\"** — *new* (yangi) bilan bir xil eshitiladi.", examples: ["knew", "new"] },
            { label: "wrote", say: "wrote", uz: "**w** o'qilmaydi: **\"rout\"**.", examples: ["wrote", "write"] },
            { label: "ate", say: "ate", uz: "Britaniyada ko'pincha **\"et\"**, boshqa joylarda **\"eyt\"** — ikkalasi ham to'g'ri.", examples: ["ate"] },
            { label: "found", say: "found", uz: "**ou** — \"au\": **\"faund\"**.", examples: ["found", "find"] },
          ],
        },
        {
          t: "table", head: ["Naqsh", "Fe'llar"],
          rows: [
            ["i → a", "drink → drank, give → gave"],
            ["ee → e", "meet → met"],
            ["→ ought (\"o:t\")", "think → thought, buy → bought"],
            ["→ ew / o", "know → knew, write → wrote"],
            ["i → ou", "find → found"],
          ],
        },
        { t: "check", ex: { k: "fill", q: "I ___ a new bag yesterday. (buy)", a: ["bought"], why: "**buy – bought** (\"bo:t\")." } },
      ],
    },
    {
      title: "Inkor: didn't + V1",
      blocks: [
        { t: "p", md: "O'tgan zamonda inkor uchun **did not (didn't)** + fe'lning **asosiy shakli (V1)**. Hamma shaxs uchun bir xil — xuddi *don't / doesn't* kabi, faqat o'tgan zamonda." },
        {
          t: "table", head: ["Ega", "didn't", "V1"],
          rows: [
            ["I / you", "didn't", "go"],
            ["he / she / it", "didn't", "eat"],
            ["we / they", "didn't", "play"],
          ],
        },
        { t: "p", md: "Nega V1? Chunki **did** allaqachon \"o'tgan zamon\"ni ko'rsatyapti. O'tgan zamon gapda **bir marta** bo'ladi — yo fe'lda (*went*), yo **did** da (*didn't go*)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I didn't go.", "She didn't eat breakfast.", "We didn't play.", "He didn't buy it."] },
          bad: { title: "Xato", items: ["I didn't went.", "She didn't ate breakfast.", "We didn't played.", "He not bought it."] },
        },
        { t: "check", ex: { k: "fill", q: "He didn't ___ to me. (write)", a: ["write"], why: "**didn't** dan keyin doim V1: *didn't **write***." } },
      ],
    },
    {
      title: "Savol: Did …?",
      blocks: [
        { t: "p", md: "Savol: **Did + ega + V1?** Qisqa javob: **Yes, I did. / No, I didn't.**" },
        {
          t: "examples", items: [
            { en: "Did you see the film? — Yes, I did.", uz: "Filmni ko'rdingizmi? — Ha." },
            { en: "Did she call you? — No, she didn't.", uz: "U sizga qo'ng'iroq qildimi? — Yo'q." },
            { en: "What did you eat?", uz: "Nima yedingiz?" },
            { en: "Where did you go at the weekend?", uz: "Dam olish kunlari qayerga bordingiz?" },
            { en: "Who did you meet?", uz: "Kim bilan uchrashdingiz?" },
            { en: "When did they arrive?", uz: "Ular qachon yetib kelishdi?" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Did you see him?", "What did you buy?", "Where did she go?"] },
          bad: { title: "Xato", items: ["Did you saw him?", "What you bought?", "Where did she went?"] },
        },
        { t: "tip", tone: "info", md: "Talaffuz: savolda **did** kuchsiz va tez aytiladi: *What did you…?* → \"wot-did-ju\". Qisqa javobda esa aniq: *Yes, I **did**.*" },
        { t: "check", ex: { k: "order", uz: "Kecha nima yedingiz?", words: ["What", "did", "you", "eat", "yesterday"], extra: ["ate"], why: "**did** bor → fe'l V1: *eat*." } },
      ],
    },
    {
      title: "was / were yoki did?",
      blocks: [
        { t: "p", md: "Diqqat! **to be** (was / were) bilan **did** ishlatilmaydi. was / were o'zi savol va inkor yasaydi. Qolgan barcha fe'llar uchun — **did**." },
        {
          t: "table", head: ["", "to be", "Boshqa fe'llar"],
          rows: [
            ["−", "I wasn't at home.", "I didn't go home."],
            ["?", "Were you tired?", "Did you sleep?"],
            ["Javob", "Yes, I was.", "Yes, I did."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Were you at the concert?", "She wasn't hungry."] },
          bad: { title: "Xato", items: ["Did you be at the concert?", "She didn't be hungry."] },
        },
        { t: "check", ex: { k: "choice", q: "___ you at home last night?", opts: ["Did", "Were", "Was", "Do"], a: 1, why: "*at home* — to be → **Were you…?**" } },
      ],
    },
    {
      title: "Dialog: bayramdan keyin",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Kamola", en: "Did you go to the party on Saturday?", uz: "Shanba kuni bazmga bordingmi?" },
            { who: "Rustam", en: "No, I didn't. I was tired, so I stayed at home.", uz: "Yo'q. Charchagan edim, shuning uchun uyda qoldim." },
            { who: "Kamola", en: "Oh! We met our old teacher there.", uz: "Voy! U yerda eski ustozimiz bilan uchrashdik." },
            { who: "Rustam", en: "Really? What did she say?", uz: "Rostdanmi? U nima dedi?" },
            { who: "Kamola", en: "She said hello and gave us her new book.", uz: "U salom aytdi va bizga yangi kitobini berdi." },
            { who: "Rustam", en: "I didn't know that she wrote books! Did you read it?", uz: "Uning kitob yozganini bilmagan ekanman! O'qidingmi?" },
            { who: "Kamola", en: "Yes, I did. I read two stories last night. I thought they were very good.", uz: "Ha. Kecha kechqurun ikkita hikoyasini o'qidim. Menimcha, ular juda yaxshi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Rustam bazmga bordi.", a: false, why: "*No, I **didn't**. … I stayed at home.* — u bormadi." } },
      ],
    },
  ],
  words: [
    { en: "give – gave", uz: "bermoq", ipa: "ɡɪv – ɡeɪv", pos: "verb", ex: "She gave me a book.", exUz: "U menga kitob berdi." },
    { en: "know – knew", uz: "bilmoq", ipa: "nəʊ – njuː", pos: "verb", ex: "I didn't know his name.", exUz: "Uning ismini bilmasdim." },
    { en: "think – thought", uz: "o'ylamoq", ipa: "θɪŋk – θɔːt", pos: "verb", ex: "I thought the test was easy.", exUz: "Imtihon oson deb o'yladim." },
    { en: "buy – bought", uz: "sotib olmoq", ipa: "baɪ – bɔːt", pos: "verb", ex: "What did you buy?", exUz: "Nima sotib oldingiz?" },
    { en: "eat – ate", uz: "yemoq", ipa: "iːt – et", pos: "verb", ex: "We ate plov for lunch.", exUz: "Tushlikka palov yedik." },
    { en: "drink – drank", uz: "ichmoq", ipa: "drɪŋk – dræŋk", pos: "verb", ex: "He drank a cup of coffee.", exUz: "U bir piyola qahva ichdi." },
    { en: "write – wrote", uz: "yozmoq", ipa: "raɪt – rəʊt", pos: "verb", ex: "I wrote a letter to my friend.", exUz: "Do'stimga xat yozdim." },
    { en: "read – read", uz: "o'qimoq", ipa: "riːd – red", pos: "verb", ex: "Did you read the book?", exUz: "Kitobni o'qidingizmi?" },
    { en: "find – found", uz: "topmoq", ipa: "faɪnd – faʊnd", pos: "verb", ex: "I found my keys under the bed.", exUz: "Kalitlarimni karavot tagidan topdim." },
    { en: "meet – met", uz: "uchrashmoq, tanishmoq", ipa: "miːt – met", pos: "verb", ex: "Where did you meet her?", exUz: "U bilan qayerda tanishdingiz?" },
  ],
  practice: [
    { k: "listen", say: "bought", opts: ["boat", "but", "bought"], a: 2, why: "\"bo:t\" — **bought**, gh o'qilmaydi." },
    { k: "listen", say: "I didn't know.", opts: ["I don't know.", "I didn't know.", "I didn't go."], a: 1 },
    { k: "listen", say: "Did you find it?", opts: ["Do you find it?", "Did you buy it?", "Did you find it?"], a: 2 },
    { k: "match", pairs: [["give", "gave"], ["know", "knew"], ["think", "thought"], ["buy", "bought"], ["eat", "ate"], ["drink", "drank"]] },
    { k: "match", pairs: [["write", "wrote"], ["read (ri:d)", "read (red)"], ["find", "found"], ["meet", "met"]] },
    { k: "fill", q: "We ___ our new neighbour yesterday. (meet)", a: ["met"] },
    { k: "fill", q: "She ___ a letter to her grandmother. (write)", a: ["wrote"] },
    { k: "fill", q: "I didn't ___ breakfast this morning. (eat)", a: ["eat"], why: "**didn't** + V1 → *eat*." },
    { k: "fill", q: "___ you buy a new phone?", a: ["Did"], uz: "Yangi telefon sotib oldingizmi?" },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She didn't went home.", "She didn't go home.", "She not went home.", "She didn't goes home."], a: 1, why: "**didn't + V1**: *didn't go*." },
    { k: "choice", q: "*Did you give him the money?* — No, I ___.", opts: ["don't", "wasn't", "didn't", "not"], a: 2, why: "**Did** savoliga → **didn't**." },
    { k: "tf", q: "**Did you saw the film?** — to'g'ri savol.", a: false, why: "**Did** + V1: *Did you **see** the film?*" },
    { k: "order", uz: "Biz choy ichmadik.", words: ["We", "didn't", "drink", "tea"], extra: ["drank"] },
    { k: "order", uz: "Siz u bilan qayerda tanishdingiz?", words: ["Where", "did", "you", "meet", "him"], extra: ["met"] },
    { k: "translate", uz: "Men uning ismini bilmasdim.", a: ["I didn't know his name", "I did not know his name", "I didn't know her name", "I did not know her name"] },
    { k: "speak", say: "Did you read the book? Yes, I did.", uz: "Kitobni o'qidingizmi? Ha, o'qidim." },
  ],
  quiz: [
    { k: "listen", say: "We didn't meet him.", opts: ["We didn't meet him.", "We don't meet him.", "We met him."], a: 0 },
    { k: "listen", say: "He bought a new car.", opts: ["He buys a new car.", "He bought two new cars.", "He bought a new car."], a: 2 },
    { k: "fill", q: "I ___ the test was easy. (think)", a: ["thought"] },
    { k: "fill", q: "My brother didn't ___ his keys. (find)", a: ["find"], why: "**didn't** + V1." },
    { k: "fill", q: "Where ___ you buy that jacket?", a: ["did"] },
    { k: "choice", q: "*Did they drink the coffee?* — Yes, they ___.", opts: ["drank", "did", "do", "were"], a: 1 },
    { k: "choice", q: "___ she at school yesterday?", opts: ["Did", "Does", "Was", "Were"], a: 2, why: "*at school* — to be, **she** → **Was**." },
    { k: "translate", uz: "Siz kecha kitob o'qidingizmi?", a: ["Did you read a book yesterday", "Did you read the book yesterday", "Did you read a book last night"] },
    { k: "translate", uz: "U menga kitob berdi.", a: ["He gave me a book", "She gave me a book", "He gave a book to me", "She gave a book to me"] },
    { k: "order", uz: "Siz xatni qachon yozdingiz?", words: ["When", "did", "you", "write", "the", "letter"], extra: ["wrote"] },
    { k: "tf", q: "*We didn't ate* — xato, to'g'risi: **We didn't eat**.", a: true },
  ],
  summary: [
    "**give – gave, know – knew, think – thought, buy – bought, eat – ate**.",
    "**drink – drank, write – wrote, read – read (\"red\"), find – found, meet – met**.",
    "Inkor: **didn't + V1** — *I didn't go* (❌ *didn't went*).",
    "Savol: **Did + ega + V1?** — *Did you see it? What did you buy?* Javob: *Yes, I did. / No, I didn't.*",
    "**to be** bilan did yo'q: *Were you…? I wasn't…*",
  ],
  homework: "Do'stingizga (yoki o'zingizga) 5 ta savol yozing: *Did you…? What did you…? Where did you…?* va ularga to'liq javob bering. Keyin kecha **qilmagan** 3 ta ishingiz haqida *didn't* bilan gap tuzing.",
};

export default lesson;
