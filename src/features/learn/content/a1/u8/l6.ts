import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l6",
  title: "Recipes: first, then, finally",
  titleUz: "Retsept: first, then, after that, finally",
  goal: "Oddiy retseptni o'qiysiz va o'zingiz tushuntirasiz: buyruq gaplar (**Chop the onions. Don't add oil.**), oshxona fe'llari (**chop, peel, boil, fry, mix, stir…**) va ketma-ketlik so'zlari: **First, Then, After that, Finally**.",
  slides: [
    {
      title: "Retsept tili: buyruq gap",
      blocks: [
        { t: "p", md: "Retseptda \"siz\" yoki \"you\" deyilmaydi — gap to'g'ridan-to'g'ri **fe'lning o'zi** bilan boshlanadi (Beginner'dagi buyruq gaplar kabi). O'zbekcha \"…ing\" / \"…ng\" ga o'xshaydi:" },
        {
          t: "examples", items: [
            { en: "Wash the tomatoes.", uz: "Pomidorlarni yuving." },
            { en: "Cut the bread into slices.", uz: "Nonni bo'laklarga kesing." },
            { en: "Put the meat in the pan.", uz: "Go'shtni tovaga soling." },
            { en: "Don't add too much salt.", uz: "Juda ko'p tuz qo'shmang.", note: "inkor: **Don't + fe'l**" },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Wash the rice.", "Add a little salt.", "Don't open the oven."] },
          bad: { title: "Xato", items: ["You wash the rice.", "Adds a little salt.", "No open the oven."] },
        },
        { t: "tip", tone: "info", md: "Retseptda **the** ko'p ishlatiladi, chunki mahsulotlar ro'yxatda allaqachon aytilgan: *You need two onions… Chop **the** onions.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap retseptga **mos**?", opts: ["You chops the onions.", "Chop the onions.", "Chopping the onions.", "To chop the onions."], a: 1, why: "Buyruq gap — **fe'lning o'zi**: *Chop the onions.*" } },
      ],
    },
    {
      title: "Oshxona fe'llari",
      blocks: [
        {
          t: "table", head: ["Fe'l", "O'zbekcha", "Misol"],
          rows: [
            ["wash", "yuvmoq", "Wash the vegetables."],
            ["peel", "po'stini archmoq", "Peel the potatoes."],
            ["chop", "mayda to'g'ramoq", "Chop the onions."],
            ["boil", "qaynatmoq", "Boil the water."],
            ["fry", "qovurmoq (yog'da)", "Fry the meat in oil."],
            ["bake", "duxovkada pishirmoq", "Bake the bread for 40 minutes."],
            ["mix", "aralashtirmoq (birlashtirmoq)", "Mix the flour and the eggs."],
            ["stir", "(qoshiq bilan) aylantirmoq", "Stir the soup."],
            ["add", "qo'shmoq", "Add a little pepper."],
            ["pour", "quymoq", "Pour the milk into a bowl."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"pishirmoq\" — hammasi uchun. Inglizchada aniq: **boil** (suvda), **fry** (yog'da), **bake** (duxovkada: non, tort, somsa). Umumiy so'z — **cook**: *I cook dinner every day.*\n**mix** — ikki narsani birlashtirish; **stir** — qoshiq bilan aylantirish (choyga shakar solib *stir*)." },
        { t: "check", ex: { k: "choice", q: "Somsani duxovkada 30 daqiqa pishiring: \"___ the samsa for 30 minutes.\"", opts: ["Bake", "Boil", "Fry", "Pour"], a: 0, why: "Duxovkada — **bake**." } },
      ],
    },
    {
      title: "First, Then, After that, Finally",
      blocks: [
        { t: "p", md: "Qadamlarni tartib bilan aytish uchun **ketma-ketlik so'zlari** ishlatiladi:" },
        {
          t: "table", head: ["So'z", "O'zbekcha", "Misol"],
          rows: [
            ["First,", "avval, birinchi", "First, wash the rice."],
            ["Then", "keyin", "Then fry the onions."],
            ["Next,", "keyingi qadam", "Next, add the carrots."],
            ["After that,", "undan keyin", "After that, add the rice and water."],
            ["Finally,", "oxirida", "Finally, serve the plov."],
          ],
          speak: [2],
        },
        { t: "p", md: "Vaqt va natija: **for + vaqt** (… davomida), **until** (… bo'lguncha):" },
        {
          t: "examples", items: [
            { en: "Boil the eggs for ten minutes.", uz: "Tuxumlarni o'n daqiqa qaynating." },
            { en: "Fry the onions until they are golden.", uz: "Piyozni tillarang bo'lguncha qovuring." },
            { en: "Stir the soup from time to time.", uz: "Sho'rvani vaqti-vaqti bilan aralashtirib turing." },
          ],
        },
        { t: "tip", tone: "warn", md: "Oxirgi qadam uchun **Finally,** deymiz. *At last* — \"nihoyat (uzoq kutgandan keyin)\": *At last you're here!* Retseptda *At last, serve…* ❌.\nVergul: **First, / Next, / After that, / Finally,** dan keyin vergul qo'yiladi; **Then** dan keyin odatda qo'yilmaydi." },
        { t: "check", ex: { k: "fill", q: "After ___, add the tomatoes and stir.", a: ["that"], uz: "Undan keyin pomidorlarni qo'shing va aralashtiring." } },
      ],
    },
    {
      title: "Talaffuz: boil, pour, stir, chop",
      blocks: [
        {
          t: "sounds", items: [
            { label: "boil", say: "boil", uz: "**\"boyl\"** — *ball* (\"bo:l\") emas!", examples: ["boil", "Boil the water."] },
            { label: "pour", say: "pour", uz: "**\"po:\"** — \"pur\" ❌. *r* Britaniyada o'qilmaydi.", examples: ["pour", "Pour the milk."] },
            { label: "stir", say: "stir", uz: "**\"stö:\"** — o'zbekchada yo'q tovush, lablarni cho'zmasdan \"ö\".", examples: ["stir", "Stir the soup."] },
            { label: "chop", say: "chop", uz: "**\"chop\"** — o'zbekcha \"ch\" kabi, qisqa \"o\".", examples: ["chop", "Chop the onions."] },
            { label: "fried", say: "fried", uz: "**\"frayd\"** — *fry → fried* (y → i + ed).", examples: ["fry", "fried eggs"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "Then stir the soup.", opts: ["Then stir the soup.", "Then serve the soup.", "Then start the soup."], a: 0, why: "\"stö:\" — **stir** (aralashtiring)." } },
      ],
    },
    {
      title: "O'qing: shakarob retsepti",
      blocks: [
        {
          t: "text", title: "Shakarob: a quick summer salad",
          en: "In Uzbekistan people often eat shakarob with plov. It's fresh, healthy and very easy to make. You need four big tomatoes, one onion, a little salt and a little black pepper.\nFirst, wash the tomatoes and cut them into thin slices. Then peel the onion and chop it very thinly. Put the onion in a bowl of cold water for five minutes — this makes it less strong. After that, mix the tomatoes and the onion in a big bowl. Add the salt and pepper, but don't add oil. Finally, put some fresh dill on top and serve the salad with hot plov.",
          uz: "O'zbekistonda shakarobni ko'pincha palov bilan yeyishadi. U yangi, foydali va tayyorlash juda oson. Sizga to'rtta katta pomidor, bitta piyoz, ozgina tuz va ozgina qora murch kerak.\nAvval pomidorlarni yuving va yupqa tilimlarga kesing. Keyin piyozning po'stini arching va uni juda yupqa to'g'rang. Piyozni besh daqiqaga bir kosa sovuq suvga soling — bu uning achchiqligini kamaytiradi. Undan keyin pomidor va piyozni katta kosada aralashtiring. Tuz va murch qo'shing, lekin yog' qo'shmang. Oxirida ustiga yangi shivit soling va salatni issiq palov bilan torting.",
        },
        { t: "check", ex: { k: "tf", q: "Shakarob uchun piyozni qovurish kerak.", a: false, why: "Piyoz qovurilmaydi — u **sovuq suvga** solinadi." } },
        { t: "check", ex: { k: "choice", q: "What do you do after you put the onion in cold water?", opts: ["Add oil.", "Mix the tomatoes and the onion.", "Boil the tomatoes."], a: 1, why: "*After that, mix the tomatoes and the onion in a big bowl.*" } },
      ],
    },
    {
      title: "Dialog: oyijon, qanday qilaman?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Bekzod", en: "Hi, Mum! I'm in my kitchen in London. How do you make your tomato eggs?", uz: "Salom, oyi! Londondagi oshxonamdaman. Pomidorli tuxumni qanday qilasiz?" },
            { who: "Mum", en: "It's easy. First, chop an onion and two tomatoes.", uz: "Oson. Avval bitta piyoz va ikkita pomidorni to'g'ra." },
            { who: "Bekzod", en: "OK, done. What next?", uz: "Xo'p, bo'ldi. Keyin-chi?" },
            { who: "Mum", en: "Fry the onion in a little oil for three minutes. Then add the tomatoes.", uz: "Piyozni ozgina yog'da uch daqiqa qovur. Keyin pomidorlarni qo'sh." },
            { who: "Bekzod", en: "How long do I cook the tomatoes?", uz: "Pomidorlarni qancha pishiraman?" },
            { who: "Mum", en: "About five minutes. Stir them from time to time. After that, break three eggs into the pan.", uz: "Taxminan besh daqiqa. Vaqti-vaqti bilan aralashtirib tur. Undan keyin tovaga uchta tuxum chaq." },
            { who: "Bekzod", en: "Salt?", uz: "Tuz-chi?" },
            { who: "Mum", en: "Yes, a little salt and pepper. Finally, eat it with fresh bread. And call me tomorrow!", uz: "Ha, ozgina tuz va murch. Oxirida yangi non bilan ye. Va ertaga menga qo'ng'iroq qil!" },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Piyozni ozgina yog'da uch daqiqa qovuring.", words: ["Fry", "the", "onion", "in", "a", "little", "oil", "for", "three", "minutes."], extra: ["few", "during"], why: "**a little oil** (sanalmaydi), **for three minutes** (davomida)." } },
      ],
    },
  ],
  words: [
    { en: "chop", uz: "mayda to'g'ramoq", ipa: "tʃɒp", pos: "verb", ex: "Chop the onions very thinly.", exUz: "Piyozni juda yupqa to'g'rang." },
    { en: "peel", uz: "po'stini archmoq", ipa: "piːl", pos: "verb", ex: "Peel the potatoes first.", exUz: "Avval kartoshkaning po'stini arching." },
    { en: "boil", uz: "qaynatmoq; qaynamoq", ipa: "bɔɪl", pos: "verb", ex: "Boil the eggs for ten minutes.", exUz: "Tuxumlarni o'n daqiqa qaynating." },
    { en: "fry", uz: "qovurmoq", ipa: "fraɪ", pos: "verb", ex: "Fry the meat in a little oil.", exUz: "Go'shtni ozgina yog'da qovuring." },
    { en: "bake", uz: "(duxovkada) pishirmoq", ipa: "beɪk", pos: "verb", ex: "My grandma bakes bread on Fridays.", exUz: "Buvim juma kunlari non yopadi." },
    { en: "mix", uz: "aralashtirmoq", ipa: "mɪks", pos: "verb", ex: "Mix the flour and the eggs.", exUz: "Un va tuxumni aralashtiring." },
    { en: "stir", uz: "(qoshiq bilan) aylantirmoq", ipa: "stɜː", pos: "verb", ex: "Stir the soup from time to time.", exUz: "Sho'rvani vaqti-vaqti bilan aralashtirib turing." },
    { en: "add", uz: "qo'shmoq", ipa: "æd", pos: "verb", ex: "Add a little salt.", exUz: "Ozgina tuz qo'shing." },
    { en: "pour", uz: "quymoq", ipa: "pɔː", pos: "verb", ex: "Pour the tea into the cups.", exUz: "Choyni piyolalarga quying." },
    { en: "pan", uz: "tova; kastryulka", ipa: "pæn", pos: "noun", ex: "Put the oil in a big pan.", exUz: "Yog'ni katta tovaga soling." },
  ],
  practice: [
    { k: "listen", say: "First, wash and peel the potatoes.", opts: ["First, wash and peel the potatoes.", "First, wash and cut the potatoes.", "Then wash and peel the potatoes."], a: 0 },
    { k: "match", pairs: [["chop", "mayda to'g'ramoq"], ["peel", "po'stini archmoq"], ["boil", "qaynatmoq"], ["fry", "qovurmoq"], ["pour", "quymoq"]] },
    { k: "choice", q: "___ the water for tea.", opts: ["Boil", "Fry", "Peel", "Bake"], a: 0, why: "Suv — **boil** (qaynatmoq)." },
    { k: "choice", q: "Retseptning oxirgi qadami: \"___, serve the salad with bread.\"", opts: ["Finally", "At last", "First", "Before"], a: 0, why: "Oxirgi qadam — **Finally**. *At last* = uzoq kutgandan keyin." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Chop the onions.", "Don't add too much salt.", "You chops the onions.", "Fry the meat for ten minutes."], a: 2, why: "Retseptda subyekt yo'q va fe'l -s olmaydi: *Chop the onions.*" },
    { k: "fill", q: "___ the onions in oil for five minutes.", a: ["fry", "cook"], uz: "Piyozni yog'da besh daqiqa qovuring." },
    { k: "fill", q: "Don't ___ too much sugar.", a: ["add", "put"], uz: "Juda ko'p shakar qo'shmang." },
    { k: "fill", q: "___ the milk into a glass.", a: ["pour"], uz: "Sutni stakanga quying." },
    { k: "fill", q: "Boil the potatoes ___ twenty minutes.", a: ["for"], uz: "Kartoshkani yigirma daqiqa qaynating.", why: "Davomiylik — **for + vaqt**." },
    { k: "tf", q: "Retseptda gap odatda fe'l bilan boshlanadi: *Chop the onions.*", a: true },
    { k: "tf", q: "**mix** va **stir** — mutlaqo bir xil: ikkalasi ham faqat \"qoshiq bilan aylantirmoq\".", a: false, why: "**mix** — narsalarni birlashtirish (*mix the flour and eggs*), **stir** — qoshiq bilan aylantirish (*stir the soup*)." },
    { k: "order", uz: "Avval kartoshkalarni yuving.", words: ["First,", "wash", "the", "potatoes."], extra: ["washes", "you"] },
    { k: "order", uz: "Keyin go'shtni o'n daqiqa qovuring.", words: ["Then", "fry", "the", "meat", "for", "ten", "minutes."], extra: ["during", "fried"] },
    { k: "translate", uz: "Suvni qaynating.", a: ["Boil the water", "Boil water", "Boil some water"] },
    { k: "translate", uz: "Oxirida salatni non bilan torting.", a: ["Finally serve the salad with bread", "Finally serve the salad with some bread", "Finally serve the salad with the bread", "Finally serve the salad with fresh bread"], why: "Oxirgi qadam — **Finally**, \"tortmoq\" — **serve**." },
    { k: "speak", say: "First, chop the onions. Then fry them for five minutes.", uz: "Avval piyozni to'g'rang. Keyin uni besh daqiqa qovuring." },
  ],
  quiz: [
    { k: "choice", q: "\"___ the bread in the oven for forty minutes.\"", opts: ["Bake", "Boil", "Peel", "Pour"], a: 0, why: "Duxovkada — **bake**." },
    { k: "choice", q: "\"___ the soup slowly with a spoon.\"", opts: ["Stir", "Chop", "Peel", "Bake"], a: 0, why: "Qoshiq bilan aylantirish — **stir**." },
    { k: "choice", q: "Qaysi tartib to'g'ri?", opts: ["Finally… Then… First…", "First… Then… Finally…", "Then… First… Finally…"], a: 1 },
    { k: "fill", q: "Mix the eggs ___ the milk.", a: ["and", "with"], uz: "Tuxum va sutni aralashtiring." },
    { k: "fill", q: "Fry the onions ___ they are golden.", a: ["until", "till"], uz: "Piyozni tillarang bo'lguncha qovuring." },
    { k: "listen", say: "After that, add a little salt.", opts: ["After that, add a little salt.", "After that, add a lot of salt.", "Before that, add a little salt."], a: 0 },
    { k: "tf", q: "Retseptda oxirgi qadam uchun *At last* va *Finally* bir xil ishlatiladi.", a: false, why: "Retseptda — **Finally**. *At last* = \"nihoyat, uzoq kutgandan so'ng\"." },
    { k: "match", pairs: [["pan", "tova"], ["pour", "quymoq"], ["mix", "aralashtirmoq"], ["bake", "duxovkada pishirmoq"]] },
    { k: "translate", uz: "Piyozni to'g'rang.", a: ["Chop the onion", "Chop the onions", "Cut the onion", "Cut the onions", "Chop up the onion", "Chop up the onions", "Chop the onion up", "Chop the onions up"] },
    { k: "order", uz: "Juda ko'p shakar qo'shmang.", words: ["Don't", "add", "too", "much", "sugar."], extra: ["many", "adds"] },
  ],
  summary: [
    "Retseptda buyruq gap: **fe'l + …** — *Chop the onions.* Inkor: **Don't + fe'l** — *Don't add oil.*",
    "Fe'llar: **wash, peel, chop, boil, fry, bake, mix, stir, add, pour**; umumiy — **cook**.",
    "Tartib: **First, → Then → Next, → After that, → Finally,** (*At last* emas!).",
    "Vaqt: **for ten minutes** (davomida), **until golden** (… bo'lguncha).",
  ],
  homework: "O'zingiz yaxshi ko'rgan oddiy taom (choy damlash, quymoq, salat…) retseptini inglizcha yozing: avval mahsulotlar ro'yxati (*You need…*), keyin 5–6 qadam **First, Then, After that, Finally** bilan. Retseptni ovoz chiqarib o'qing yoki tayyorlayotib inglizcha gapirib turing.",
};

export default lesson;
