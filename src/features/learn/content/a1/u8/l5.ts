import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l5",
  title: "Shopping for clothes",
  titleUz: "Kiyim do'konida: o'lcham, rang, too big",
  goal: "Kiyim do'konida gaplashasiz: **What size are you? Can I try it on? Have you got this in blue?** Muammoni aytasiz: **It's too big. / It isn't long enough. / It doesn't fit.** va maqtaysiz: **It suits you!**",
  slides: [
    {
      title: "Kiyimlar va \"a pair of\"",
      blocks: [
        { t: "p", md: "Beginner darajasida *jacket, shoe, hat* ni bildik. Endi ko'proq kiyim nomlari. Diqqat: **ikki qismli** kiyimlar (ikki oyoq!) inglizchada **doim ko'plikda**:" },
        {
          t: "table", head: ["Birlik (a / an)", "Doim ko'plik", "O'zbekcha"],
          rows: [
            ["a shirt", "trousers", "ko'ylak (erkaklar) / shim"],
            ["a dress", "jeans", "ko'ylak (ayollar) / jinsi shim"],
            ["a skirt", "shorts", "yubka / shortik"],
            ["a coat", "glasses", "palto / ko'zoynak"],
            ["a T-shirt", "shoes, boots, socks", "futbolka / poyabzal, etik, paypoq"],
          ],
          speak: [0, 1],
        },
        {
          t: "examples", items: [
            { en: "These trousers are too long.", uz: "Bu shim juda uzun.", note: "*This trousers is* ❌" },
            { en: "I like your jeans. Where did you buy them?", uz: "Jinsingiz yoqdi. Uni qayerdan oldingiz?", note: "**them**, *it* emas" },
            { en: "I need a new pair of jeans.", uz: "Menga yangi jinsi shim kerak.", note: "bitta shim = **a pair of** trousers / jeans" },
            { en: "She bought two pairs of shoes.", uz: "U ikki juft tufli sotib oldi." },
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"shim\" — birlik. Inglizchada **trousers** — ko'plik: *These trousers **are**…, I bought **them**.* *a trousers* ❌, *a trouser* ❌. Bitta shim kerak bo'lsa: **a pair of trousers**." },
        { t: "check", ex: { k: "choice", q: "\"Bu jinsi shim menga yoqadi.\"", opts: ["I like this jeans.", "I like these jeans.", "I like this jean.", "I like a jeans."], a: 1, why: "**jeans** — ko'plik: **these jeans**." } },
      ],
    },
    {
      title: "Do'konda: o'lcham va rang",
      blocks: [
        {
          t: "table", head: ["Sotuvchi", "Xaridor", "O'zbekcha"],
          rows: [
            ["Can I help you?", "No, thanks. I'm just looking.", "Yordam beraymi? — Yo'q, rahmat, shunchaki ko'ryapman."],
            ["Can I help you?", "Yes, I'm looking for a dress.", "Ha, ko'ylak qidiryapman."],
            ["What size are you?", "I'm a medium. / I'm a size 40.", "O'lchamingiz qanday? — M / 40."],
            ["What colour would you like?", "Have you got this in blue?", "Qaysi rang? — Buning ko'k rangi bormi?"],
            ["Would you like to try it on?", "Yes, please. Where's the fitting room?", "Kiyib ko'rasizmi? — Ha. Kiyinish xonasi qayerda?"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "O'lchamlar: **small (S), medium (M), large (L), extra large (XL)**. *I'm a medium.* yoki *I'm size M / a size 40.*\n**try on** — \"kiyib ko'rmoq\". Olmosh **o'rtada** keladi: *try **it** on, try **them** on* (*try on it* ❌)." },
        { t: "check", ex: { k: "fill", q: "I like this jacket. Can I try it ___?", a: ["on"], uz: "Bu kurtka yoqdi. Kiyib ko'rsam bo'ladimi?", why: "**try it on** — olmosh o'rtada." } },
      ],
    },
    {
      title: "too big va not big enough",
      blocks: [
        { t: "p", md: "Kiyim to'g'ri kelmasa, ikki yo'l bilan aytamiz:\n**too + sifat** = keragidan ortiq (muammo!)\n**not + sifat + enough** = keragidan kam" },
        {
          t: "table", head: ["too…", "not … enough", "Ma'nosi"],
          rows: [
            ["It's too small.", "It isn't big enough.", "Kichkina (kattaroq kerak)."],
            ["They're too short.", "They aren't long enough.", "Kalta (uzunroq kerak)."],
            ["It's too expensive.", "It isn't cheap enough.", "Qimmat (arzonroq kerak)."],
            ["It's too tight.", "It isn't loose enough.", "Tor (kengroq kerak)."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "warn", md: "**enough** sifatdan **keyin** keladi: *big enough* ✅, *enough big* ❌.\n**too** ≠ **very**! *very* — shunchaki \"juda\", *too* — \"haddan tashqari, shuning uchun muammo\".\n*This dress is **very** beautiful.* ✅ (maqtov)\n*This dress is **too** beautiful.* ❌ (g'alati: chiroyliligi muammomi?)" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["The coat is too big for me.", "My shoes aren't big enough.", "This bag is very nice. I'll take it."] },
          bad: { title: "Xato", items: ["The coat is too much big.", "My shoes aren't enough big.", "This bag is too nice. I'll take it."] },
        },
        { t: "check", ex: { k: "choice", q: "The jacket isn't ___. I need a bigger size.", opts: ["big enough", "enough big", "too big", "very big"], a: 0, why: "Kattaroq kerak → **not big enough**. *enough* sifatdan keyin." } },
      ],
    },
    {
      title: "fit yoki suit?",
      blocks: [
        {
          t: "table", head: ["Fe'l", "Ma'nosi", "Misol"],
          rows: [
            ["fit", "o'lchami to'g'ri kelmoq", "These shoes don't fit me. They're too small."],
            ["suit", "yarashmoq, chiroyli ko'rinmoq", "Green really suits you!"],
          ],
          speak: [2],
        },
        {
          t: "examples", items: [
            { en: "Does it fit? — Yes, it's perfect.", uz: "Sizga to'g'ri keldimi? — Ha, aynan o'zi." },
            { en: "The dress fits, but the colour doesn't suit me.", uz: "Ko'ylak o'lchami to'g'ri, lekin rangi menga yarashmaydi." },
            { en: "That shirt really suits you.", uz: "O'sha ko'ylak sizga juda yarashadi." },
            { en: "I'll take it. / I'll leave it, thanks.", uz: "Olaman. / Olmayman, rahmat." },
          ],
        },
        { t: "tip", tone: "good", md: "Maqtov iboralari: **It suits you! / You look great! / That colour looks good on you.** Inglizlar bunday maqtovni yaxshi ko'radi — do'stingizga ayting!" },
        { t: "check", ex: { k: "fill", q: "These trousers don't ___ me. They're too long.", a: ["fit"], uz: "Bu shim menga to'g'ri kelmaydi. Juda uzun.", why: "O'lcham haqida — **fit**." } },
      ],
    },
    {
      title: "Talaffuz: clothes, trousers, suit",
      blocks: [
        {
          t: "sounds", items: [
            { label: "clothes", say: "clothes", uz: "**\"kləuðz\"** — tez nutqda *close* (\"kləuz\") kabi eshitiladi. \"klotes\" ❌", examples: ["clothes", "new clothes"] },
            { label: "trousers", say: "trousers", uz: "**\"TRAU-zəz\"** — \"au\" tovushi, *s* lar \"z\" bo'lib eshitiladi.", examples: ["trousers", "a pair of trousers"] },
            { label: "suit", say: "suit", uz: "**\"su:t\"** — \"syuit\" ❌. Bir bo'g'in.", examples: ["suit", "It suits you."] },
            { label: "size", say: "size", uz: "**\"sayz\"** — oxirida jarangli **z**.", examples: ["size", "What size are you?"] },
            { label: "tight", say: "tight", uz: "**\"tayt\"** — *gh* o'qilmaydi.", examples: ["tight", "too tight"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "Have you got this in a smaller size?", opts: ["Have you got this in a smaller size?", "Have you got this in a bigger size?", "Have you got this in silver?"], a: 0 } },
      ],
    },
    {
      title: "Dialog: kiyim do'konida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Assistant", en: "Hello! Can I help you?", uz: "Salom! Yordam beraymi?" },
            { who: "Laylo", en: "Yes, please. I'm looking for a dress for my sister's wedding.", uz: "Ha, iltimos. Opamning to'yi uchun ko'ylak qidiryapman." },
            { who: "Assistant", en: "What about this one? What size are you?", uz: "Mana bunisi-chi? O'lchamingiz qanday?" },
            { who: "Laylo", en: "I'm a small. Can I try it on?", uz: "S. Kiyib ko'rsam bo'ladimi?" },
            { who: "Assistant", en: "Of course. The fitting room is over there.", uz: "Albatta. Kiyinish xonasi u yerda." },
            { who: "Laylo", en: "Hmm, it's a bit too long, and I don't like the colour.", uz: "Hmm, biroz uzunroq ekan, rangi ham yoqmadi." },
            { who: "Assistant", en: "We've got it in green and in a shorter style. Try this one.", uz: "Uning yashil rangi va kaltaroq modeli bor. Buni kiyib ko'ring." },
            { who: "Laylo", en: "Oh, this one fits perfectly! How much is it?", uz: "Oh, bunisi zo'r to'g'ri keldi! Qancha turadi?" },
            { who: "Assistant", en: "It's 450,000 soums. And green really suits you!", uz: "450 ming so'm. Yashil rang sizga juda yarashadi!" },
            { who: "Laylo", en: "Thank you! I'll take it.", uz: "Rahmat! Olaman." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo birinchi ko'ylakni sotib oladi.", a: false, why: "Birinchisi *too long*, rangi yoqmadi. U **yashil** ko'ylakni oladi." } },
      ],
    },
    {
      title: "O'qing: to'yga kostyum",
      blocks: [
        {
          t: "text", title: "A suit for the wedding",
          en: "Jamshid's brother is getting married next month, so Jamshid needs a new suit. On Saturday he goes shopping with his dad. In the first shop the suits are too expensive. In the second shop he finds a nice dark blue suit, but the jacket is too tight and the trousers aren't long enough. Jamshid is tall, and that's always a problem!\nFinally, in a small shop near the bazaar, he tries on a grey suit in a large size. It fits perfectly. \"Grey really suits you,\" says his dad. The price is good too. Jamshid buys the suit and a white shirt, and his dad pays for a new pair of shoes.",
          uz: "Jamshidning akasi kelasi oy uylanyapti, shuning uchun Jamshidga yangi kostyum kerak. Shanba kuni u dadasi bilan xaridga boradi. Birinchi do'konda kostyumlar juda qimmat. Ikkinchi do'konda u chiroyli to'q ko'k kostyum topadi, lekin pidjak tor, shim esa yetarlicha uzun emas. Jamshid baland bo'yli va bu doim muammo!\nNihoyat, bozor yonidagi kichik do'konda u katta o'lchamdagi kulrang kostyumni kiyib ko'radi. U aynan to'g'ri keladi. \"Kulrang senga juda yarashadi\", — deydi dadasi. Narxi ham yaxshi. Jamshid kostyum va oq ko'ylak sotib oladi, dadasi esa yangi bir juft tufli uchun pul to'laydi.",
        },
        { t: "check", ex: { k: "choice", q: "What is the problem in the second shop?", opts: ["The suits are too expensive.", "The jacket is too tight and the trousers are too short.", "The suit doesn't suit him."], a: 1, why: "*the jacket is too tight and the trousers aren't long enough* (= too short)." } },
      ],
    },
  ],
  words: [
    { en: "trousers", uz: "shim", ipa: "ˈtraʊ.zəz", pos: "noun (plural)", ex: "These trousers are too long.", exUz: "Bu shim juda uzun." },
    { en: "dress", uz: "ko'ylak (ayollar)", ipa: "dres", pos: "noun", ex: "She's wearing a beautiful red dress.", exUz: "U chiroyli qizil ko'ylak kiygan." },
    { en: "a pair of", uz: "bir juft …", ipa: "ə ˈpeər əv", pos: "phrase", ex: "I bought a new pair of jeans.", exUz: "Yangi jinsi shim sotib oldim." },
    { en: "size", uz: "o'lcham", ipa: "saɪz", pos: "noun", ex: "What size are you?", exUz: "O'lchamingiz qanday?" },
    { en: "try on", uz: "kiyib ko'rmoq", ipa: "ˌtraɪ ˈɒn", pos: "phrasal verb", ex: "Can I try these shoes on?", exUz: "Bu tuflilarni kiyib ko'rsam bo'ladimi?" },
    { en: "fitting room", uz: "kiyinish (kiyib ko'rish) xonasi", ipa: "ˈfɪt.ɪŋ ˌruːm", pos: "noun", ex: "The fitting room is on the left.", exUz: "Kiyinish xonasi chap tomonda." },
    { en: "fit", uz: "(o'lchami) to'g'ri kelmoq", ipa: "fɪt", pos: "verb", ex: "This shirt doesn't fit me.", exUz: "Bu ko'ylak menga to'g'ri kelmaydi." },
    { en: "suit", uz: "yarashmoq; kostyum", ipa: "suːt", pos: "verb / noun", ex: "Blue really suits you.", exUz: "Ko'k rang sizga juda yarashadi." },
    { en: "tight", uz: "tor, qisib turadigan", ipa: "taɪt", pos: "adjective", ex: "My new shoes are a bit tight.", exUz: "Yangi tuflim biroz tor." },
    { en: "loose", uz: "keng, bo'sh (kiyim)", ipa: "luːs", pos: "adjective", ex: "I like loose T-shirts in summer.", exUz: "Yozda keng futbolkalarni yoqtiraman." },
  ],
  practice: [
    { k: "listen", say: "These shoes are too tight.", opts: ["These shoes are too tight.", "These shoes are tight enough.", "This shoe is too light."], a: 0 },
    { k: "choice", q: "These jeans are ___ small for me. I need a bigger size.", opts: ["too", "enough", "much"], a: 0, why: "Muammo (kichkina) → **too small**." },
    { k: "choice", q: "\"Can I try ___ on?\" (the trousers)", opts: ["it", "them", "they"], a: 1, why: "**trousers** — ko'plik → **them**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["This coat isn't warm enough.", "This coat is too warm.", "This coat isn't enough warm.", "This coat is very warm."], a: 2, why: "**enough** sifatdan keyin: *warm enough*." },
    { k: "fill", q: "What ___ are you? — Medium.", a: ["size"], uz: "O'lchamingiz qanday? — M." },
    { k: "fill", q: "Red really ___ you. You look great!", a: ["suits"], uz: "Qizil rang sizga juda yarashadi. Ajoyib ko'rinyapsiz!", why: "Ko'rinish haqida — **suit**; *red* = it → **suits**." },
    { k: "fill", q: "The shirt is nice, but it isn't big ___.", a: ["enough"], uz: "Ko'ylak chiroyli, lekin yetarlicha katta emas." },
    { k: "fill", q: "Excuse me, where's the ___ room?", a: ["fitting", "changing"], uz: "Kechirasiz, kiyinish xonasi qayerda?" },
    { k: "tf", q: "*This dress is too beautiful, I'll buy it.* — to'g'ri gap.", a: false, why: "**too** = muammo. Maqtov uchun **very**: *This dress is very beautiful.*" },
    { k: "tf", q: "**trousers** va **jeans** doim ko'plikda ishlatiladi: *These trousers are…*", a: true },
    { k: "match", pairs: [["try on", "kiyib ko'rmoq"], ["fitting room", "kiyinish xonasi"], ["tight", "tor"], ["loose", "keng"], ["size", "o'lcham"]] },
    { k: "order", uz: "Bu ko'ylak menga haddan tashqari katta.", words: ["This", "shirt", "is", "too", "big", "for", "me."], extra: ["enough", "much"], why: "Muammo → **too big**." },
    { k: "order", uz: "Shim yetarlicha uzun emas.", words: ["The", "trousers", "aren't", "long", "enough."], extra: ["isn't", "too"], why: "**trousers** — ko'plik → **aren't**; **long enough**." },
    { k: "translate", uz: "Buni kiyib ko'rsam bo'ladimi?", a: ["Can I try it on", "Could I try it on", "Can I try this on", "Could I try this on", "May I try it on", "May I try this on"], why: "**try it on** — olmosh o'rtada." },
    { k: "translate", uz: "Sizda buning ko'k rangi bormi?", a: ["Have you got this in blue", "Do you have this in blue", "Have you got it in blue", "Do you have it in blue", "Is there a blue one", "Do you have a blue one", "Have you got a blue one"] },
    { k: "speak", say: "Excuse me, can I try these trousers on?", uz: "Kechirasiz, bu shimni kiyib ko'rsam bo'ladimi?" },
  ],
  quiz: [
    { k: "choice", q: "This coat is ___ expensive. I can't buy it.", opts: ["too", "enough", "very much"], a: 0 },
    { k: "choice", q: "\"Bu shim menga tor.\"", opts: ["These trousers are tight.", "This trousers is tight.", "These trousers is tight.", "This trouser are tight."], a: 0, why: "**trousers** — ko'plik: **These … are**." },
    { k: "choice", q: "Shop assistant: \"Can I help you?\"", opts: ["No, thanks. I'm just looking.", "No, I don't help.", "Yes, you can't.", "I'm a medium."], a: 0 },
    { k: "fill", q: "This T-shirt isn't big ___ for me.", a: ["enough"], uz: "Bu futbolka menga yetarlicha katta emas." },
    { k: "fill", q: "Can I try these shoes ___?", a: ["on"], uz: "Bu tuflilarni kiyib ko'rsam bo'ladimi?" },
    { k: "tf", q: "*It doesn't fit me* = o'lchami to'g'ri kelmaydi; *It doesn't suit me* = menga yarashmaydi.", a: true },
    { k: "listen", say: "Green really suits you.", opts: ["Green really suits you.", "Green really fits you.", "Grey really suits you."], a: 0 },
    { k: "match", pairs: [["dress", "ko'ylak (ayollar)"], ["trousers", "shim"], ["a pair of shoes", "bir juft tufli"], ["fit", "o'lchami to'g'ri kelmoq"], ["suit", "yarashmoq"]] },
    { k: "translate", uz: "Bu kurtka menga haddan tashqari kichik.", a: ["This jacket is too small for me", "This jacket is too small", "The jacket is too small for me", "The jacket is too small"] },
    { k: "order", uz: "Bu tuflilar menga yetarlicha katta emas.", words: ["These", "shoes", "aren't", "big", "enough", "for", "me."], extra: ["isn't", "too"] },
  ],
  summary: [
    "**trousers, jeans, shorts, glasses** — doim ko'plik: *These jeans are…, I like them*; bitta = **a pair of** jeans.",
    "Do'konda: **What size are you? Can I try it on? Have you got this in blue? Where's the fitting room?**",
    "**too + sifat** (ortiqcha, muammo) / **not + sifat + enough** (kam): *too small = not big enough*.",
    "**fit** = o'lchami to'g'ri kelmoq; **suit** = yarashmoq: *It fits, but it doesn't suit me.*",
  ],
  homework: "Shkafingizdagi 6 ta kiyim haqida yozing: rangi, o'lchami va muammosi (*My old jeans are too short. My winter coat isn't warm enough.*). Keyin do'kon dialogini o'zingiz uchun yozing — kurtka yoki tufli sotib olayotganingizni tasavvur qiling.",
};

export default lesson;
