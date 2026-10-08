import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l1",
  title: "Food & containers: a cup of…",
  titleUz: "Ovqat va o'lchovlar: a cup of, a bottle of…",
  goal: "Sanalmaydigan ovqat va ichimliklarni idish yoki bo'lak bilan aytasiz: **a cup of tea, a bowl of soup, a loaf of bread, a slice of cake, a bunch of grapes** — va ko'plikda ham to'g'ri ishlatasiz: **two cartons of milk**.",
  slides: [
    {
      title: "Nega \"a bread\" deyilmaydi?",
      blocks: [
        { t: "p", md: "Beginner darajasida **sanaladigan** (*an apple, two bananas*) va **sanalmaydigan** (*water, rice, bread, cheese*) otlarni o'rgandik. Sanalmaydigan otga **a / an** va **-s** qo'shilmaydi. Unda \"bitta non\", \"ikki choy\" qanday aytiladi? Javob — **idish yoki bo'lak + of**:" },
        {
          t: "examples", items: [
            { en: "a loaf of bread", uz: "bir buxanka (bitta butun) non", note: "*a bread* ❌" },
            { en: "a cup of tea", uz: "bir piyola / bir chashka choy", note: "*a tea* — faqat kafeda buyurtmada, keyingi darslarda" },
            { en: "a glass of water", uz: "bir stakan suv" },
            { en: "a bowl of soup", uz: "bir kosa sho'rva" },
            { en: "a slice of cheese", uz: "bir tilim pishloq" },
          ],
        },
        { t: "tip", tone: "info", md: "Formula: **a / one / two… + idish + of + ovqat**.\nIdish o'zgaradi, ovqat o'zgarmaydi: *a bottle of water → two bottles of water*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'd like a loaf of bread.", "She drinks two glasses of milk a day.", "We need some rice."] },
          bad: { title: "Xato", items: ["I'd like a bread.", "She drinks two milks a day.", "We need a rice."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Bitta non sotib oldim.\" (butun non)", opts: ["I bought a bread.", "I bought a loaf of bread.", "I bought a loaf of breads.", "I bought one breads."], a: 1, why: "**bread** sanalmaydi, shuning uchun **a loaf of bread** (bir buxanka non) deymiz." } },
      ],
    },
    {
      title: "Dasturxonda: cup, glass, bowl, plate",
      blocks: [
        { t: "p", md: "Ovqat va ichimlikni nimaga solib berishimizga qarab so'z tanlaymiz:" },
        {
          t: "table", head: ["Idish", "Nima bilan?", "O'zbekcha"],
          rows: [
            ["a cup of", "tea, coffee, hot chocolate", "bir chashka / piyola"],
            ["a glass of", "water, juice, milk, lemonade", "bir stakan"],
            ["a bowl of", "soup, rice, salad, cereal", "bir kosa / tovoqcha"],
            ["a plate of", "plov, chips, pasta, samsa", "bir likopcha / tarelka"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "Odatda **cup** — issiq ichimlik uchun (dastali chashka), **glass** — sovuq ichimlik uchun (shisha stakan). O'zbek piyolasidagi choy ham inglizchada oddiygina **a cup of tea** deyiladi." },
        { t: "tip", tone: "warn", md: "**bowl** — chuqur idish (kosa), **plate** — yassi idish (tarelka). Sho'rva odatda kosada beriladi: **a bowl of soup**. Palov esa tarelkada — **a plate of plov**." },
        { t: "check", ex: { k: "choice", q: "Kechki ovqatga bir kosa mastava: \"I'd like a ___ of soup.\"", opts: ["glass", "bowl", "cup", "bar"], a: 1, why: "Sho'rva chuqur idishda beriladi — **a bowl of soup**." } },
      ],
    },
    {
      title: "Do'kondan: bottle, can, jar, carton, bag…",
      blocks: [
        { t: "p", md: "Do'konda mahsulot qaysi qadoqda bo'lsa, shu so'z ishlatiladi:" },
        {
          t: "table", head: ["Qadoq", "Misol", "O'zbekcha"],
          rows: [
            ["a bottle of", "a bottle of water / oil", "bir shisha (butilka)"],
            ["a can of", "a can of cola / tomatoes", "bir banka (temir banka)"],
            ["a jar of", "a jar of honey / jam", "bir banka (shisha banka)"],
            ["a carton of", "a carton of milk / juice", "bir karton quti"],
            ["a bag of", "a bag of sugar / onions / crisps", "bir xalta / paket"],
            ["a packet of", "a packet of tea / biscuits", "bir pachka"],
            ["a box of", "a box of chocolates / eggs", "bir quti"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "O'zbekchada **banka** ikki xil: shisha banka = **jar** (*a jar of honey*), temir banka = **can** (*a can of cola*). Britaniyada temir bankani **tin** ham deyishadi: *a tin of tomatoes*." },
        { t: "check", ex: { k: "fill", q: "Grandma always buys a ___ of honey at the bazaar.", a: ["jar"], uz: "Buvim bozordan doim bir (shisha) banka asal oladi.", why: "Asal shisha bankada — **a jar of honey**." } },
      ],
    },
    {
      title: "Bo'laklar: loaf, slice, piece, bar, bunch",
      blocks: [
        { t: "p", md: "Ba'zi so'zlar idish emas, **bo'lak yoki shakl**ni bildiradi:" },
        {
          t: "table", head: ["So'z", "Misol", "Ma'nosi"],
          rows: [
            ["a loaf of", "a loaf of bread", "butun non (buxanka)"],
            ["a slice of", "a slice of bread / cake / pizza", "yupqa kesilgan bo'lak, tilim"],
            ["a piece of", "a piece of cake / cheese / paper", "bo'lak (har qanday)"],
            ["a bar of", "a bar of chocolate / soap", "plitka, bo'lak (to'rtburchak)"],
            ["a bunch of", "a bunch of grapes / bananas / flowers", "shingil, bosh, dasta"],
          ],
          speak: [1],
        },
        { t: "p", md: "**Ko'plik**: -s idishga qo'shiladi, ovqatga emas!" },
        {
          t: "examples", items: [
            { en: "two cups of tea", uz: "ikki piyola choy" },
            { en: "three slices of pizza", uz: "uch bo'lak pitsa" },
            { en: "two loaves of bread", uz: "ikki buxanka non", note: "**loaf → loaves** (f → v + es), *knife → knives* kabi" },
            { en: "two bunches of flowers", uz: "ikki dasta gul", note: "**bunch → bunches** (-ch dan keyin -es)" },
            { en: "How many bottles of water do we need? — Three.", uz: "Bizga necha shisha suv kerak? — Uchta." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["two cups of tea", "four loaves of bread", "three bars of chocolate"] },
          bad: { title: "Xato", items: ["two cup of teas", "four loafs of bread", "three bar of chocolates"] },
        },
        { t: "check", ex: { k: "fill", q: "We need two ___ of bread for dinner.", a: ["loaves"], hint: "loaf → ?", why: "**loaf** ko'plikda **loaves** bo'ladi." } },
      ],
    },
    {
      title: "Talaffuz: \"of\" deyarli eshitilmaydi",
      blocks: [
        { t: "p", md: "Gapda **of** kuchsiz aytiladi: **\"əv\"**, tez gapda hatto faqat **\"ə\"**. *a* ham **\"ə\"**. Shuning uchun *a cup of tea* bir so'zdek eshitiladi: **\"ə-ka-pəv-ti:\"**." },
        {
          t: "sounds", items: [
            { label: "a cup of tea", say: "a cup of tea", uz: "**\"ə kapəv ti:\"** — *of* oldingi so'zga yopishadi.", examples: ["a cup of tea", "a cup of coffee"] },
            { label: "a glass of", say: "a glass of water", uz: "**\"ə gla:səv\"** — Britaniyada cho'ziq **a:**.", examples: ["a glass of water", "a glass of milk"] },
            { label: "a bottle of", say: "a bottle of oil", uz: "**\"ə botləv\"** — o'rtadagi *-ttle* qisqa \"tl\".", examples: ["a bottle of oil", "two bottles of water"] },
            { label: "loaf / loaves", say: "loaves", uz: "**\"ləuf\" / \"ləuvz\"** — ko'plikda *f* → **v**.", examples: ["a loaf of bread", "two loaves of bread"] },
            { label: "bowl", say: "bowl", uz: "**\"bəul\"** — *ball* (\"bo:l\", to'p) bilan adashtirmang!", examples: ["bowl", "ball"] },
          ],
        },
        { t: "tip", tone: "warn", md: "**of** ni \"of\" deb, alohida va kuchli aytmang — bu nutqni sekin va g'alati qiladi. Iborani bir nafasda ayting: *a-bowl-of-soup*." },
        { t: "check", ex: { k: "listen", say: "a bowl of rice", opts: ["a bowl of rice", "a ball of rice", "a bottle of rice"], a: 0, why: "\"ə bəuləv rays\" — **a bowl of rice** (bir kosa guruch)." } },
      ],
    },
    {
      title: "O'qing: buvimning ro'yxati",
      blocks: [
        {
          t: "text", title: "Grandma's shopping list",
          en: "Every Saturday, Nodira goes to Chorsu Bazaar with her grandmother. Grandma always has a shopping list. This week it says: two loaves of bread, a kilo of rice, a bag of onions, a bunch of grapes and a jar of honey.\nAt the bazaar, Nodira carries the bags. They are very heavy! After shopping, they sit in a small café. Grandma has a cup of green tea and Nodira has a glass of cherry juice. They also share a plate of samsa.\n\"Next week we need a carton of milk too,\" says Grandma. Nodira writes it on the list.",
          uz: "Har shanba Nodira buvisi bilan Chorsu bozoriga boradi. Buvisida doim xarid ro'yxati bo'ladi. Bu hafta unda shunday yozilgan: ikki buxanka non, bir kilo guruch, bir xalta piyoz, bir shingil uzum va bir banka asal.\nBozorda sumkalarni Nodira ko'taradi. Ular juda og'ir! Xariddan keyin ular kichkina kafeda o'tirishadi. Buvisi bir piyola ko'k choy, Nodira esa bir stakan olcha sharbati ichadi. Ular bir tarelka somsani ham birga yeyishadi.\n\"Kelasi hafta bizga bir quti sut ham kerak\", deydi buvisi. Nodira buni ro'yxatga yozib qo'yadi.",
        },
        { t: "check", ex: { k: "tf", q: "Ro'yxatda **two loaves of bread** va **a jar of honey** bor.", a: true, why: "Matnda: *two loaves of bread … and a jar of honey*." } },
        { t: "check", ex: { k: "choice", q: "What does Nodira drink in the café?", opts: ["a cup of green tea", "a glass of cherry juice", "a carton of milk"], a: 1, why: "*Nodira has a glass of cherry juice.* Ko'k choyni buvisi ichadi." } },
      ],
    },
    {
      title: "Dialog: mahalla do'konida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Shopkeeper", en: "Good morning! What can I get you?", uz: "Xayrli tong! Sizga nima beray?" },
            { who: "Aziz", en: "Hello. Can I have a loaf of bread and a carton of milk, please?", uz: "Salom. Bir buxanka non va bir quti sut bera olasizmi?" },
            { who: "Shopkeeper", en: "Here you are. Anything else?", uz: "Mana, oling. Yana biror narsa?" },
            { who: "Aziz", en: "Yes, two bottles of water and a bar of chocolate.", uz: "Ha, ikki shisha suv va bitta shokolad." },
            { who: "Shopkeeper", en: "Big bottles or small bottles?", uz: "Katta shishami yoki kichik?" },
            { who: "Aziz", en: "Small, please. Oh, and a packet of tea for my mum.", uz: "Kichik, iltimos. Ha, oyim uchun bir pachka choy ham." },
            { who: "Shopkeeper", en: "OK. That's everything?", uz: "Xo'p. Hammasi shumi?" },
            { who: "Aziz", en: "Yes, that's all, thanks.", uz: "Ha, shu, rahmat." },
          ],
        },
        { t: "tip", tone: "good", md: "Do'konda foydali iboralar: **Can I have…, please?** (… bera olasizmi?), **Here you are.** (Mana, oling.), **Anything else?** (Yana nimadir?), **That's all, thanks.** (Shu, rahmat.)" },
        { t: "check", ex: { k: "order", uz: "Bir buxanka non va bir quti sut bera olasizmi?", words: ["Can", "I", "have", "a", "loaf", "of", "bread", "and", "a", "carton", "of", "milk?"], extra: ["breads", "loaves"], alt: [["Can", "I", "have", "a", "carton", "of", "milk", "and", "a", "loaf", "of", "bread?"]], why: "Tartib: **Can I have + a loaf of bread + and + a carton of milk?**" } },
      ],
    },
  ],
  words: [
    { en: "a bowl of", uz: "bir kosa …", ipa: "ə ˈbəʊl əv", pos: "phrase", ex: "I'd like a bowl of soup, please.", exUz: "Bir kosa sho'rva bersangiz." },
    { en: "a plate of", uz: "bir tarelka (likopcha) …", ipa: "ə ˈpleɪt əv", pos: "phrase", ex: "He ate a big plate of plov.", exUz: "U katta bir tarelka palov yedi." },
    { en: "a jar of", uz: "bir (shisha) banka …", ipa: "ə ˈdʒɑː əv", pos: "phrase", ex: "There's a jar of honey in the cupboard.", exUz: "Shkafda bir banka asal bor." },
    { en: "a can of", uz: "bir (temir) banka …", ipa: "ə ˈkæn əv", pos: "phrase", ex: "Can I have a can of cola?", exUz: "Bir banka kola bera olasizmi?" },
    { en: "a carton of", uz: "bir karton quti …", ipa: "ə ˈkɑː.tən əv", pos: "phrase", ex: "We need a carton of milk.", exUz: "Bizga bir quti sut kerak." },
    { en: "a loaf of", uz: "bir buxanka (butun non)", ipa: "ə ˈləʊf əv", pos: "phrase", ex: "She bought two loaves of bread.", exUz: "U ikki buxanka non sotib oldi." },
    { en: "a slice of", uz: "bir tilim, yupqa bo'lak …", ipa: "ə ˈslaɪs əv", pos: "phrase", ex: "Would you like a slice of cake?", exUz: "Bir bo'lak tort olasizmi?" },
    { en: "a bar of", uz: "bir plitka …", ipa: "ə ˈbɑː əv", pos: "phrase", ex: "I always have a bar of chocolate in my bag.", exUz: "Sumkamda doim bitta shokolad bo'ladi." },
    { en: "a bag of", uz: "bir xalta / paket …", ipa: "ə ˈbæɡ əv", pos: "phrase", ex: "Buy a bag of onions, please.", exUz: "Bir xalta piyoz sotib ol, iltimos." },
    { en: "a bunch of", uz: "bir shingil / bosh / dasta …", ipa: "ə ˈbʌntʃ əv", pos: "phrase", ex: "Grandma bought a bunch of grapes.", exUz: "Buvim bir shingil uzum sotib oldi." },
  ],
  practice: [
    { k: "listen", say: "Two loaves of bread, please.", opts: ["Two loaves of bread, please.", "A loaf of bread, please.", "Two slices of bread, please."], a: 0, why: "**two loaves** — ikki buxanka." },
    { k: "listen", say: "a jar of jam", opts: ["a jar of jam", "a bar of jam", "a jar of ham"], a: 0 },
    { k: "match", pairs: [["a loaf of bread", "bir buxanka non"], ["a bar of chocolate", "bir plitka shokolad"], ["a bunch of grapes", "bir shingil uzum"], ["a slice of cake", "bir bo'lak tort"], ["a bowl of soup", "bir kosa sho'rva"]] },
    { k: "choice", q: "Sovuq olcha sharbati: \"Can I have a ___ of cherry juice?\"", opts: ["glass", "bowl", "loaf", "bunch"], a: 0, why: "Sovuq ichimlik — **a glass of**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I bought a jar of honey.", "I bought two bottles of water.", "I bought a bread.", "I bought a bunch of bananas."], a: 2, why: "**bread** sanalmaydi: *a loaf of bread* yoki *some bread*." },
    { k: "fill", q: "She drinks three ___ of coffee every day.", a: ["cups", "mugs"], uz: "U har kuni uch chashka qahva ichadi.", why: "Ko'plik -s idishga qo'shiladi: **three cups of coffee**." },
    { k: "fill", q: "I'd like a ___ of chocolate, please.", a: ["bar", "piece"], uz: "Bitta (plitka) shokolad, iltimos.", why: "Shokolad plitkasi — **a bar of chocolate**." },
    { k: "fill", q: "There are two ___ of milk in the fridge.", a: ["cartons", "bottles"], uz: "Muzlatkichda ikki quti sut bor.", why: "Sut qutisi — **carton**, ko'plikda **cartons**." },
    { k: "tf", q: "**two cups of teas** — to'g'ri ibora.", a: false, why: "-s faqat idishga: **two cups of tea**." },
    { k: "tf", q: "Matnda Nodira bozorda sumkalarni ko'taradi, chunki ular yengil.", a: false, why: "*They are very heavy!* — ular juda **og'ir**." },
    { k: "order", uz: "Bir kosa sho'rva bera olasizmi?", words: ["Can", "I", "have", "a", "bowl", "of", "soup,", "please?"], extra: ["soups", "plate"], why: "Sho'rva — **a bowl of soup**." },
    { k: "order", uz: "Muzlatkichda ikki quti sut bor.", words: ["There", "are", "two", "cartons", "of", "milk", "in", "the", "fridge."], extra: ["is", "milks"], why: "**two cartons** — ko'plik, shuning uchun **There are**." },
    { k: "translate", uz: "Bir stakan suv, iltimos.", a: ["A glass of water, please", "A glass of water please", "Can I have a glass of water, please", "Can I have a glass of water please", "Could I have a glass of water, please", "Could I have a glass of water please", "One glass of water, please"] },
    { k: "translate", uz: "Men bir bo'lak tort yedim.", a: ["I ate a piece of cake", "I ate a slice of cake", "I had a piece of cake", "I had a slice of cake"], why: "**a piece / a slice of cake**; *ate* yoki *had*." },
    { k: "speak", say: "Can I have a cup of tea and a slice of cake, please?", uz: "Bir piyola choy va bir bo'lak tort bera olasizmi?" },
  ],
  quiz: [
    { k: "choice", q: "\"I'd like a ___ of soup.\"", opts: ["bowl", "bar", "loaf", "bunch"], a: 0, why: "**a bowl of soup** — bir kosa sho'rva." },
    { k: "choice", q: "\"Ikki buxanka non\"", opts: ["two loaf of bread", "two loaves of bread", "two loaves of breads", "two loafs of breads"], a: 1, why: "**loaf → loaves**, *bread* esa o'zgarmaydi." },
    { k: "fill", q: "Let's buy a ___ of bananas.", a: ["bunch"], uz: "Bir bosh banan olaylik.", why: "Banan boshi — **a bunch of bananas**." },
    { k: "fill", q: "There are three ___ of cola in the fridge.", a: ["cans", "bottles"], uz: "Muzlatkichda uch (temir) banka kola bor.", why: "Temir banka — **can**, ko'plikda **cans**." },
    { k: "fill", q: "Mum wants a ___ of honey from the market.", a: ["jar"], uz: "Oyim bozordan bir (shisha) banka asal xohlaydi." },
    { k: "listen", say: "Two glasses of milk, please.", opts: ["Two glasses of milk, please.", "A glass of milk, please.", "Two glasses of water, please."], a: 0 },
    { k: "tf", q: "**a cup of** odatda issiq ichimlik uchun, **a glass of** esa odatda sovuq ichimlik uchun ishlatiladi.", a: true },
    { k: "match", pairs: [["a jar of", "shisha banka"], ["a carton of", "karton quti"], ["a slice of", "tilim, yupqa bo'lak"], ["a bag of", "xalta"]] },
    { k: "translate", uz: "Bizga ikki shisha suv kerak.", a: ["We need two bottles of water"], why: "**two bottles of water** — -s idishda." },
    { k: "order", uz: "Men bir banka asal sotib oldim.", words: ["I", "bought", "a", "jar", "of", "honey."], extra: ["honeys", "buy"] },
  ],
  summary: [
    "Sanalmaydigan ovqat uchun: **a / two + idish + of + ovqat** — *a cup of tea, a bowl of soup*.",
    "Ko'plik -s idishga qo'shiladi: **two cups of tea**, **two loaves of bread** (*loaf → loaves*).",
    "Idishlar: **cup** (issiq), **glass** (sovuq), **bowl** (kosa), **plate** (tarelka), **bottle, can, jar, carton, bag, packet, box**.",
    "Bo'laklar: **a loaf / slice / piece of bread**, **a bar of chocolate**, **a bunch of grapes**.",
    "Talaffuz: **of** kuchsiz — **\"əv\"**: *a cup of tea* = \"ə kapəv ti:\".",
  ],
  homework: "Oshxonangiz va muzlatkichingizni tekshiring: 8 ta mahsulotni idishi bilan inglizcha yozing (*a jar of jam, two cartons of milk…*). Keyin kelasi xarid uchun ro'yxat tuzing va uni ovoz chiqarib, *of* ni kuchsiz aytib o'qing.",
};

export default lesson;
