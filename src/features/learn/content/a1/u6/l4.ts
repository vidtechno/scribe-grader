import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l4",
  title: "mine, yours… Whose?",
  titleUz: "Egalik olmoshlari: mine, yours… va Whose?",
  goal: "Narsa kimniki ekanini so'raysiz va aytasiz: **Whose bag is this? — It's mine / It's Ali's.** **my – mine, your – yours, her – hers…** farqini bilasiz va **whose / who's** ni adashtirmaysiz.",
  slides: [
    {
      title: "my bag → mine: ikki xil egalik so'zi",
      blocks: [
        { t: "p", md: "Beginner darajasida **my, your, his, her…** ni o'rgandik — ular doim **otdan oldin** keladi: *my bag, her phone*. Endi ularning \"juftini\" o'rganamiz: **mine, yours, his, hers…** — bular **otsiz, yolg'iz** ishlatiladi. O'zbekchada: *mening sumkam* → **meniki**." },
        {
          t: "table", head: ["Ot bilan", "Otsiz", "O'zbekcha"],
          rows: [
            ["my bag", "mine", "meniki"],
            ["your bag", "yours", "seniki / sizniki"],
            ["his bag", "his", "uniki (erkak)"],
            ["her bag", "hers", "uniki (ayol)"],
            ["our bag", "ours", "bizniki"],
            ["their bag", "theirs", "ularniki"],
          ],
          speak: [0, 1],
        },
        {
          t: "examples", items: [
            { en: "This is my phone. → This phone is mine.", uz: "Bu mening telefonim. → Bu telefon meniki." },
            { en: "Is this your pen? → Is this pen yours?", uz: "Bu sizning ruchkangizmi? → Bu ruchka siznikimi?" },
            { en: "That's their car. → That car is theirs.", uz: "Bu ularning mashinasi. → U mashina ularniki." },
          ],
        },
        { t: "tip", tone: "good", md: "Yodlash usuli: ko'pchiligi oxiriga **-s** qo'shadi: *your → yours, her → hers, our → ours, their → theirs*. **his** o'zgarmaydi. Faqat **my → mine** butunlay boshqacha." },
        { t: "check", ex: { k: "fill", q: "This is our flat. → This flat is ___.", a: ["ours"], why: "**our → ours** (bizniki)." } },
      ],
    },
    {
      title: "Eng ko'p uchraydigan xatolar",
      blocks: [
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It's mine.", "This book is yours.", "The red car is hers.", "These keys are ours."] },
          bad: { title: "Xato", items: ["It's my.", "This book is your's.", "The red car is her's.", "These keys are our."] },
        },
        { t: "tip", tone: "warn", md: "**Apostrof yo'q!** *yours, hers, ours, theirs* — **'** siz yoziladi. ❌ *your's, her's, our's*. (Apostrof faqat ism va otlarda: *Ali's, my mum's*.)" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["This is my bag.", "Mine is black.", "Your phone is new. Mine is old."] },
          bad: { title: "Xato", items: ["This is mine bag.", "My is black.", "Your phone is new. My is old."] },
        },
        { t: "tip", tone: "info", md: "Qoida: ortidan **ot kelsa → my, your, her…**; ot **yo'q bo'lsa → mine, yours, hers…**. *mine bag* — ❌, chunki *mine* dan keyin ot kelmaydi." },
        { t: "check", ex: { k: "choice", q: "\"Bu ruchka meniki emas.\"", opts: ["This pen isn't my.", "This pen isn't mine.", "This isn't mine pen.", "This pen isn't me."], a: 1, why: "Otsiz — **mine**." } },
        { t: "check", ex: { k: "choice", q: "To'g'ri yozilgan so'z:", opts: ["her's", "hers'", "hers", "her'"], a: 2, why: "**hers** — apostrofsiz." } },
      ],
    },
    {
      title: "Whose…? — Kimniki?",
      blocks: [
        { t: "p", md: "Narsa **kimniki** ekanini so'rash uchun **Whose** ishlatiladi. Ikki xil savol tuzish mumkin:" },
        {
          t: "table", head: ["Savol", "Javob", "O'zbekcha"],
          rows: [
            ["Whose bag is this?", "It's mine.", "Bu kimning sumkasi? — Meniki."],
            ["Whose is this bag?", "It's Laylo's.", "Bu sumka kimniki? — Layloniki."],
            ["Whose keys are these?", "They're ours.", "Bu kimning kalitlari? — Bizniki."],
            ["Whose is that?", "I think it's his.", "U kimniki? — Menimcha, uniki."],
          ],
          speak: [0, 1],
        },
        { t: "p", md: "Ism yoki ot bilan javob berganda **'s** qo'shamiz, otni takrorlash shart emas: *Whose phone is this? — It's **Sardor's**.* (= Sardor's phone)" },
        {
          t: "examples", items: [
            { en: "Whose umbrella is this? — It's my mum's.", uz: "Bu kimning soyaboni? — Oyimniki." },
            { en: "Whose are these earphones? — They're my brother's.", uz: "Bu quloqchinlar kimniki? — Akamniki." },
            { en: "Is this charger yours? — No, it's Kamola's.", uz: "Bu quvvatlagich siznikimi? — Yo'q, Kamolaniki." },
          ],
        },
        { t: "tip", tone: "warn", md: "Birlik: **Whose … is this?** — *It's…*. Ko'plik: **Whose … are these?** — *They're…*. ❌ *Whose keys is this?*" },
        { t: "check", ex: { k: "order", uz: "Bu kimning kalitlari?", words: ["Whose", "keys", "are", "these?"], extra: ["Who's", "is"], alt: [["Whose", "are", "these", "keys?"]] } },
      ],
    },
    {
      title: "Whose yoki Who's?",
      blocks: [
        { t: "p", md: "**whose** va **who's** — bir xil talaffuz qilinadi (**\"hu:z\"**), lekin ma'nosi butunlay boshqa. Farqini **yozuvda** va **kontekstda** bilasiz:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"],
          rows: [
            ["whose", "kimning, kimniki", "Whose coat is this?"],
            ["who's = who is", "kim (…dir)", "Who's that man?"],
            ["who's = who has", "kimda bor", "Who's got a pen?"],
          ],
          speak: [2],
        },
        {
          t: "sounds", items: [
            { label: "whose / who's", say: "whose", uz: "Ikkalasi ham **\"hu:z\"** — *wh* bu yerda \"h\" o'qiladi, \"w\" emas!", examples: ["Whose is this?", "Who's this?"] },
            { label: "theirs", say: "theirs", uz: "**\"ðeəz\"** — *th* tilni tishlar orasiga qo'yib, ovozli. *there's* bilan bir xil eshitiladi.", examples: ["theirs", "It's theirs."] },
            { label: "ours", say: "ours", uz: "**\"auəz\"** — *hours* (soatlar) bilan bir xil!", examples: ["ours", "It's ours."] },
          ],
        },
        { t: "tip", tone: "info", md: "Tekshirish usuli: **who's** ni **who is** ga almashtirib ko'ring. Gap ma'noli bo'lsa — *who's*, bo'lmasa — *whose*. *Who is bag is this?* — ma'nosiz → **Whose bag is this?**" },
        { t: "check", ex: { k: "fill", q: "___ your new teacher? — Mr Akhmedov.", a: ["who's", "who is"], why: "*Who is your new teacher?* → **Who's**." } },
        { t: "check", ex: { k: "fill", q: "___ phone is ringing?", a: ["whose"], uz: "Kimning telefoni jiringlayapti?", why: "\"Kimning\" — **Whose**." } },
      ],
    },
    {
      title: "Dialog: Darsdan keyin sinfda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Teacher", en: "OK, everyone, wait a minute! Whose umbrella is this?", uz: "Xo'p, hamma, bir daqiqa kutinglar! Bu kimning soyaboni?" },
            { who: "Malika", en: "It's mine! Thank you.", uz: "Meniki! Rahmat." },
            { who: "Teacher", en: "And whose are these earphones? Are they yours, Doniyor?", uz: "Bu quloqchinlar-chi? Senikimi, Doniyor?" },
            { who: "Doniyor", en: "No, mine are white. I think they're Javohir's.", uz: "Yo'q, meniki oq. Menimcha, ular Javohirniki." },
            { who: "Javohir", en: "Yes, they're mine. And that black wallet is mine too!", uz: "Ha, meniki. Anavi qora hamyon ham meniki!" },
            { who: "Teacher", en: "Hmm, and who's got my charger? It was on my desk.", uz: "Hmm, mening quvvatlagichim kimda? U stolimda edi." },
            { who: "Malika", en: "Sorry, I borrowed it. Here you are. It's yours.", uz: "Kechirasiz, men olgan edim. Mana, oling. Bu sizniki." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Dialogga ko'ra, **the earphones are Doniyor's.**", a: false, why: "Doniyor: *No, mine are white.* Quloqchinlar — **Javohir's**." } },
        { t: "check", ex: { k: "choice", q: "Quvvatlagich kimniki?", opts: ["It's Malika's.", "It's the teacher's.", "It's Javohir's."], a: 1, why: "O'qituvchi: *who's got **my** charger?* — Malika: *It's yours.*" } },
      ],
    },
    {
      title: "a friend of mine va belong to",
      blocks: [
        { t: "p", md: "Yana ikki foydali tuzilma:" },
        {
          t: "examples", items: [
            { en: "Aziz is a friend of mine.", uz: "Aziz — do'stlarimdan biri.", note: "**a friend of mine** — ko'p do'stlarimdan bittasi. ❌ *a friend of me*" },
            { en: "She's a colleague of ours.", uz: "U hamkasblarimizdan biri." },
            { en: "This house belongs to my grandfather.", uz: "Bu uy bobomga tegishli.", note: "**belong to** + kishi = …ga tegishli bo'lmoq" },
            { en: "Who does this bike belong to?", uz: "Bu velosiped kimga tegishli?" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He's a friend of mine.", "This bag belongs to me.", "It belongs to Sevara."] },
          bad: { title: "Xato", items: ["He's a friend of me.", "This bag belongs to mine.", "It is belong to Sevara."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Jasur — akamning do'stlaridan biri.\"", opts: ["Jasur is a friend of my brother's.", "Jasur is a friend of my brother's friend.", "Jasur is my brother friend.", "Jasur is a friend of my brother him."], a: 0, why: "**a friend of + egalik**: *a friend of my brother's*." } },
      ],
    },
  ],
  words: [
    { en: "purse", uz: "hamyon", ipa: "pɜːs", pos: "noun", ex: "Whose purse is this?", exUz: "Bu kimning hamyoni?" },
    { en: "wallet", uz: "hamyon", ipa: "ˈwɒl.ɪt", pos: "noun", ex: "I can't find my wallet.", exUz: "Hamyonimni topa olmayapman." },
    { en: "lend", uz: "qarz bermoq, vaqtincha bermoq", ipa: "lend", pos: "verb", ex: "Can you lend me your charger?", exUz: "Quvvatlagichingizni bir ozga bera olasizmi?" },
    { en: "charger", uz: "quvvatlagich (zaryadlovchi)", ipa: "ˈtʃɑː.dʒə", pos: "noun", ex: "Can I use your charger?", exUz: "Quvvatlagichingizdan foydalansam bo'ladimi?" },
    { en: "earphones", uz: "quloqchinlar", ipa: "ˈɪə.fəʊnz", pos: "noun", ex: "These earphones are mine.", exUz: "Bu quloqchinlar meniki." },
    { en: "scarf", uz: "sharf, ro'mol", ipa: "skɑːf", pos: "noun", ex: "Whose scarf is this? — It's hers.", exUz: "Bu kimning sharfi? — Uniki." },
    { en: "belong to", uz: "…ga tegishli bo'lmoq", ipa: "bɪˈlɒŋ tə", pos: "verb", ex: "This car belongs to my uncle.", exUz: "Bu mashina amakimga tegishli." },
    { en: "borrow", uz: "qarzga (vaqtincha) olmoq", ipa: "ˈbɒr.əʊ", pos: "verb", ex: "Can I borrow your pen?", exUz: "Ruchkangizni olib tursam bo'ladimi?" },
    { en: "lose", uz: "yo'qotmoq", ipa: "luːz", pos: "verb", ex: "I often lose my keys.", exUz: "Men kalitlarimni tez-tez yo'qotaman." },
    { en: "a friend of mine", uz: "do'stlarimdan biri", ipa: "ə ˈfrend əv maɪn", pos: "phrase", ex: "Nodir is a friend of mine.", exUz: "Nodir do'stlarimdan biri." },
  ],
  practice: [
    { k: "match", pairs: [["my", "mine"], ["your", "yours"], ["her", "hers"], ["our", "ours"], ["their", "theirs"]] },
    { k: "match", pairs: [["wallet", "hamyon"], ["umbrella", "soyabon"], ["charger", "quvvatlagich"], ["earphones", "quloqchinlar"], ["borrow", "qarzga olmoq"]] },
    { k: "listen", say: "Whose wallet is this?", opts: ["Whose wallet is this?", "Where's my wallet?", "Whose wallets are these?"], a: 0 },
    { k: "listen", say: "The car is theirs.", opts: ["The car is ours.", "The car is theirs.", "The car is hers."], a: 1 },
    { k: "choice", q: "— Is this your scarf? — Yes, it's ___.", opts: ["my", "mine", "me", "my's"], a: 1, why: "Otsiz — **mine**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["That bike is his.", "These books are theirs.", "This is your's.", "The flat is ours."], a: 2, why: "**yours** — apostrofsiz." },
    { k: "choice", q: "— ___ coming to the party tonight? — Me and Ali.", opts: ["Whose", "Who's", "Who"], a: 1, why: "*Who is coming…?* → **Who's**." },
    { k: "fill", q: "This isn't my coat. Mine is blue. Is it ___? (you)", a: ["yours"], why: "**you → yours**." },
    { k: "fill", q: "Look at that girl! The red bag is ___.", a: ["hers"], uz: "Anavi qizga qara! Qizil sumka uniki.", why: "**her → hers**." },
    { k: "fill", q: "This flat belongs ___ my parents.", a: ["to"], why: "**belong to** + kishi." },
    { k: "tf", q: "**Whose** va **who's** bir xil talaffuz qilinadi.", a: true, why: "Ikkalasi ham \"hu:z\"." },
    { k: "tf", q: "**This is mine car** — to'g'ri gap.", a: false, why: "Ot oldidan **my**: *This is my car.* Yoki: *This car is mine.*" },
    { k: "order", uz: "Bu kimning soyaboni? — Opamniki.", words: ["Whose", "umbrella", "is", "this?", "It's", "my", "sister's."], extra: ["Who's", "mine"] },
    { k: "order", uz: "U (erkak) — do'stlarimdan biri.", words: ["He's", "a", "friend", "of", "mine."], extra: ["me.", "my"] },
    { k: "translate", uz: "Bu kitoblar bizniki.", a: ["These books are ours", "These are our books", "These books belong to us", "These are ours", "The books are ours"] },
    { k: "translate", uz: "Bu telefon kimniki?", a: ["Whose phone is this", "Whose is this phone", "Who does this phone belong to", "Whose phone is it", "Whose phone is that", "Whose is that phone"] },
    { k: "speak", say: "Whose bag is this? — It's mine, thank you.", uz: "Bu kimning sumkasi? — Meniki, rahmat." },
  ],
  quiz: [
    { k: "choice", q: "\"Bu uy ularniki.\"", opts: ["This house is their.", "This house is theirs.", "This house is their's.", "This is theirs house."], a: 1 },
    { k: "choice", q: "— Whose keys are these? — …", opts: ["It's mine.", "They're mine.", "They're my.", "Is mine."], a: 1, why: "Ko'plik — **They're mine.**" },
    { k: "fill", q: "___ jacket is this? — I think it's Bekzod's.", a: ["whose"] },
    { k: "fill", q: "We have a new car. The white one is ___.", a: ["ours"], uz: "Bizning yangi mashinamiz bor. Oq mashina bizniki." },
    { k: "fill", q: "— Is this Ali's pen? — No, it isn't ___. His pen is green.", a: ["his", "Ali's"] },
    { k: "listen", say: "Who's that woman?", opts: ["Who's that woman?", "Who's that man?", "Whose are those women?"], a: 0 },
    { k: "tf", q: "**a friend of me** — to'g'ri ibora.", a: false, why: "To'g'ri: **a friend of mine**." },
    { k: "match", pairs: [["Whose is it?", "Kimniki?"], ["Who's that?", "U kim?"], ["It's hers.", "Uniki (ayol)."], ["It belongs to me.", "U menga tegishli."]] },
    { k: "order", uz: "Mening telefonim eski, siznikisi yangi.", words: ["My", "phone", "is", "old,", "yours", "is", "new."], extra: ["your", "mine"] },
    { k: "translate", uz: "Bu sumka meniki emas.", a: ["This bag isn't mine", "This bag is not mine", "This isn't my bag", "This is not my bag", "This bag doesn't belong to me", "This bag does not belong to me"] },
  ],
  summary: [
    "Ot bilan: **my, your, his, her, our, their**; otsiz: **mine, yours, his, hers, ours, theirs**.",
    "Apostrof yo'q: **yours, hers, ours, theirs** (❌ *your's*). ❌ *mine bag*, ❌ *It's my.*",
    "**Whose bag is this? / Whose is this bag?** — *It's mine / It's Ali's.* Ko'plikda: *Whose keys are these? — They're…*",
    "**whose** (kimning) ≠ **who's** (= who is / who has) — talaffuzi bir xil \"hu:z\".",
    "**a friend of mine**, **belong to** + kishi: *It belongs to my dad.*",
  ],
  homework: "Uyingizdagi 8 ta narsani tanlang va har biri haqida savol-javob yozing: *Whose laptop is this? — It's my sister's. It's hers.* Kamida 3 tasida **mine / yours / ours / theirs** ishlating. Keyin **whose** va **who's** bilan ikkitadan gap tuzing.",
};

export default lesson;
