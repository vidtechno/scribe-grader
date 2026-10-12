import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l6",
  title: "My home",
  titleUz: "Mening uyim: xonalar va jihozlar",
  goal: "Uyingiz yoki kvartirangizni tasvirlaysiz: xonalar, jihozlar, qavat (*I live in a flat on the fourth floor. There's a big sofa in the living room.*). **there is / there are**, **in / on** va sanalmaydigan **furniture** ni to'g'ri ishlatasiz.",
  slides: [
    {
      title: "house yoki flat? Uy turlari",
      blocks: [
        { t: "p", md: "O'zbekchada \"uy\" deymiz — u hovli ham, kvartira ham bo'lishi mumkin. Ingliz tilida farqlanadi:" },
        {
          t: "table", head: ["English", "O'zbekcha", "Misol"],
          rows: [
            ["a house", "hovli-uy, alohida uy", "We live in a house with a garden."],
            ["a flat (BrE) / an apartment (AmE)", "kvartira", "I live in a flat on the fourth floor."],
            ["a block of flats", "ko'p qavatli uy", "Our block of flats has nine floors."],
            ["home", "uy (yashaydigan joy, oila)", "I'm at home. Let's go home."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "info", md: "**house** — bino; **home** — \"o'z uyim\" degan iliq so'z. *I'm at **home*** (❌ *at house*), *go **home*** (❌ *go to home*)." },
        {
          t: "examples", items: [
            { en: "My grandparents live in a big house in Kokand.", uz: "Bobom va buvim Qo'qondagi katta hovlida yashashadi." },
            { en: "We live in a flat in Chilonzor.", uz: "Biz Chilonzordagi kvartirada yashaymiz." },
            { en: "Our flat is on the second floor.", uz: "Kvartiramiz ikkinchi qavatda." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Men hozir uydaman.\"", opts: ["I'm in house now.", "I'm at home now.", "I'm to home now.", "I'm in home now."], a: 1, why: "**at home** — artiklsiz." } },
      ],
    },
    {
      title: "Xonalar",
      blocks: [
        {
          t: "table", head: ["Xona", "O'zbekcha", "U yerda nima qilamiz"],
          rows: [
            ["living room", "mehmonxona, zal", "We watch TV and relax."],
            ["bedroom", "yotoqxona", "I sleep in my bedroom."],
            ["kitchen", "oshxona", "Mum cooks in the kitchen."],
            ["bathroom", "vannaxona", "I have a shower in the bathroom."],
            ["toilet", "hojatxona", "The toilet is next to the bathroom."],
            ["hall", "dahliz, koridor", "Leave your shoes in the hall."],
            ["balcony", "balkon", "We dry clothes on the balcony."],
            ["garden / yard", "bog' / hovli", "The children play in the garden."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "warn", md: "Predlog: xonalar **in** bilan: *in the kitchen, in the bedroom*. Lekin **on the balcony** (balkon ustida), **on the second floor** (qavat). ❌ *on the kitchen*." },
        { t: "check", ex: { k: "fill", q: "My father is reading a newspaper ___ the balcony.", a: ["on"], why: "**on the balcony**." } },
        { t: "check", ex: { k: "match", pairs: [["kitchen", "oshxona"], ["bedroom", "yotoqxona"], ["hall", "dahliz"], ["living room", "mehmonxona"]] } },
      ],
    },
    {
      title: "Jihozlar va texnika",
      blocks: [
        {
          t: "table", head: ["English", "O'zbekcha", "Qaysi xonada"],
          rows: [
            ["sofa", "divan", "living room"],
            ["armchair", "kreslo", "living room"],
            ["carpet", "gilam", "living room / bedroom"],
            ["wardrobe", "kiyim javoni, shkaf", "bedroom"],
            ["shelf (shelves)", "tokcha, polka", "any room"],
            ["mirror", "oyna, ko'zgu", "bathroom / hall"],
            ["fridge", "muzlatgich", "kitchen"],
            ["cooker", "plita", "kitchen"],
            ["washing machine", "kir yuvish mashinasi", "bathroom / kitchen"],
            ["curtains", "pardalar", "every room"],
          ],
          speak: [0],
        },
        { t: "tip", tone: "warn", md: "**furniture** (mebel) — **sanalmaydi**! ❌ *furnitures*, ❌ *a furniture*. To'g'ri: *We have **a lot of furniture**.* / *There **isn't much** furniture.* Bitta buyum: **a piece of furniture**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["We bought new furniture.", "The furniture is old.", "two shelves"] },
          bad: { title: "Xato", items: ["We bought new furnitures.", "The furnitures are old.", "two shelfs"] },
        },
        { t: "tip", tone: "info", md: "**cooker** — plita (narsa)! Oshpaz — **cook**: *My mum is a good cook.* ❌ *a good cooker*." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gap:", opts: ["There are many furnitures in the room.", "There is a lot of furniture in the room.", "There are a lot of furniture in the room.", "There is many furniture in the room."], a: 1, why: "**furniture** sanalmaydi → **is**, **a lot of / much**." } },
      ],
    },
    {
      title: "Uyni tasvirlash: there is / there are + joy",
      blocks: [
        { t: "p", md: "Beginner darajasida **there is / there are** ni o'rgandik. Endi uni uy tasvirida **to'liq** ishlatamiz: **There is/are + nima + qayerda**." },
        {
          t: "examples", items: [
            { en: "There are three bedrooms in our flat.", uz: "Kvartiramizda uchta yotoqxona bor." },
            { en: "There's a big carpet on the floor.", uz: "Polda katta gilam bor." },
            { en: "There are some books on the shelves.", uz: "Polkalarda bir nechta kitob bor." },
            { en: "There isn't a dishwasher in the kitchen.", uz: "Oshxonada idish yuvish mashinasi yo'q." },
            { en: "Is there a balcony? — Yes, there is.", uz: "Balkon bormi? — Ha, bor." },
            { en: "How many rooms are there? — There are four.", uz: "Nechta xona bor? — To'rtta." },
          ],
        },
        { t: "p", md: "Joylashuvni aniqlash uchun: **next to** (yonida), **opposite** (qarshisida), **between** (orasida), **upstairs** (yuqori qavatda), **downstairs** (pastki qavatda)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["There is a sofa in the living room.", "There are two armchairs next to the sofa.", "My bedroom is upstairs."] },
          bad: { title: "Xato", items: ["In the living room is a sofa have.", "There is two armchairs next to the sofa.", "My bedroom is in upstairs."] },
        },
        { t: "tip", tone: "warn", md: "**upstairs / downstairs** oldidan odatda predlog qo'yilmaydi: *go upstairs*, *My room is upstairs.* ❌ *in upstairs*, ❌ *to downstairs*." },
        { t: "check", ex: { k: "order", uz: "Oshxonada katta muzlatgich bor.", words: ["There", "is", "a", "big", "fridge", "in", "the", "kitchen."], extra: ["are", "on"] } },
      ],
    },
    {
      title: "Talaffuz",
      blocks: [
        {
          t: "sounds", items: [
            { label: "wardrobe", say: "wardrobe", uz: "**\"WO:-drəub\"** — urg'u boshida.", examples: ["wardrobe", "a big wardrobe"] },
            { label: "cupboard", say: "cupboard", uz: "**\"KA-bəd\"** — *p* o'qilmaydi! (oshxona shkafi)", examples: ["cupboard", "kitchen cupboard"] },
            { label: "furniture", say: "furniture", uz: "**\"FÖ:-ni-chə\"** — *ture* \"chə\".", examples: ["furniture", "new furniture"] },
            { label: "shelf / shelves", say: "shelves", uz: "**\"shelf\" → \"shelvz\"** — ko'plikda *f → v*.", examples: ["shelf", "shelves"] },
            { label: "kitchen / chicken", say: "kitchen", uz: "**\"KI-chin\"** (oshxona) va **\"CHI-kin\"** (tovuq) — adashtirmang!", examples: ["kitchen", "chicken"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "The cupboard is in the kitchen.", opts: ["The cupboard is in the kitchen.", "The cupboard is in the chicken.", "The cup is in the kitchen."], a: 0 } },
      ],
    },
    {
      title: "Matn: Yangi kvartira",
      blocks: [
        {
          t: "text", title: "Dilfuza's new flat",
          en: "Dilfuza and her husband, Ravshan, have a new flat in Yunusabad, Tashkent. It's in a new block of flats, on the seventh floor, so the view is great.\nThere are three rooms: a living room and two bedrooms. The living room is quite big. There's a grey sofa, two armchairs and a beautiful red carpet from Khiva. The kitchen is small, but it's very modern, with a new fridge and a cooker. There isn't a dining room, so they eat in the kitchen.\nThe second bedroom is for their son, Amir. There's a bed, a desk and a lot of shelves for his toys. And there's a big balcony with lots of flowers. Dilfuza loves it!",
          uz: "Dilfuza va eri Ravshanning Toshkentning Yunusobod tumanida yangi kvartirasi bor. U yangi ko'p qavatli uyda, yettinchi qavatda, shuning uchun manzara ajoyib.\nUchta xona bor: mehmonxona va ikkita yotoqxona. Mehmonxona ancha katta. Unda kulrang divan, ikkita kreslo va Xivadan olingan chiroyli qizil gilam bor. Oshxona kichik, lekin juda zamonaviy, yangi muzlatgich va plita bor. Ovqatlanish xonasi yo'q, shuning uchun ular oshxonada ovqatlanishadi.\nIkkinchi yotoqxona — o'g'illari Amir uchun. Unda karavot, yozuv stoli va o'yinchoqlari uchun ko'p polkalar bor. Yana gullar ko'p bo'lgan katta balkon bor. Dilfuza uni juda yaxshi ko'radi!",
        },
        { t: "check", ex: { k: "tf", q: "Matnga ko'ra, **there is a dining room in the flat.**", a: false, why: "*There isn't a dining room, so they eat in the kitchen.*" } },
        { t: "check", ex: { k: "choice", q: "Gilam qayerdan?", opts: ["from Bukhara", "from Khiva", "from Yunusabad", "from Kokand"], a: 1 } },
      ],
    },
  ],
  words: [
    { en: "flat", uz: "kvartira", ipa: "flæt", pos: "noun", ex: "They live in a small flat.", exUz: "Ular kichkina kvartirada yashashadi." },
    { en: "balcony", uz: "balkon", ipa: "ˈbæl.kə.ni", pos: "noun", ex: "Our flat has a small balcony.", exUz: "Kvartiramizda kichik balkon bor." },
    { en: "wardrobe", uz: "kiyim javoni, shkaf", ipa: "ˈwɔː.drəʊb", pos: "noun", ex: "My clothes are in the wardrobe.", exUz: "Kiyimlarim shkafda." },
    { en: "curtain", uz: "parda", ipa: "ˈkɜː.tən", pos: "noun", ex: "The curtains are blue.", exUz: "Pardalar ko'k." },
    { en: "armchair", uz: "kreslo", ipa: "ˈɑːm.tʃeə", pos: "noun", ex: "Grandpa is sleeping in the armchair.", exUz: "Bobom kresloda uxlayapti." },
    { en: "kettle", uz: "choynak (elektr)", ipa: "ˈket.əl", pos: "noun", ex: "The kettle is next to the cooker.", exUz: "Choynak plita yonida." },
    { en: "cooker", uz: "plita", ipa: "ˈkʊk.ə", pos: "noun", ex: "The soup is on the cooker.", exUz: "Sho'rva plita ustida." },
    { en: "mirror", uz: "oyna, ko'zgu", ipa: "ˈmɪr.ə", pos: "noun", ex: "There's a big mirror in the hall.", exUz: "Dahlizda katta oyna bor." },
    { en: "upstairs", uz: "yuqori qavatda, yuqoriga", ipa: "ʌpˈsteəz", pos: "adverb", ex: "The bedrooms are upstairs.", exUz: "Yotoqxonalar yuqori qavatda." },
    { en: "furniture", uz: "mebel", ipa: "ˈfɜː.nɪ.tʃə", pos: "noun", ex: "We need some new furniture.", exUz: "Bizga yangi mebel kerak." },
  ],
  practice: [
    { k: "match", pairs: [["sofa", "divan"], ["armchair", "kreslo"], ["carpet", "gilam"], ["mirror", "oyna"], ["fridge", "muzlatgich"]] },
    { k: "match", pairs: [["wardrobe", "kiyim javoni"], ["cooker", "plita"], ["curtains", "pardalar"], ["shelf", "polka"], ["balcony", "balkon"]] },
    { k: "listen", say: "There are two bedrooms upstairs.", opts: ["There are two bedrooms upstairs.", "There are two bathrooms upstairs.", "There's a bedroom downstairs."], a: 0 },
    { k: "listen", say: "My flat is on the sixth floor.", opts: ["My flat is on the sixth floor.", "My flat is on the sixteenth floor.", "My flat is on the first floor."], a: 0 },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["My mum is a very good cooker.", "My mum is a very good cook.", "My mum is very good cooking.", "My mum is a cook very good."], a: 1, why: "Oshpaz — **cook**; *cooker* — plita." },
    { k: "choice", q: "— Is there a garden? — …", opts: ["Yes, there are.", "Yes, it is.", "Yes, there is.", "Yes, there has."], a: 2, why: "Qisqa javob: **Yes, there is.**" },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["The bathroom is upstairs.", "Let's go upstairs.", "My room is in upstairs.", "The kitchen is downstairs."], a: 2, why: "**upstairs** oldidan predlog yo'q." },
    { k: "fill", q: "There ___ a lot of new furniture in their house.", a: ["is", "'s"], uz: "Ularning uyida juda ko'p yangi mebel bor.", why: "**furniture** sanalmaydi → **is**." },
    { k: "fill", q: "We have dinner ___ the kitchen.", a: ["in"] },
    { k: "fill", q: "one shelf → two ___", a: ["shelves"], why: "**f → ves**: *shelves*." },
    { k: "tf", q: "**I'm at home** va **I'm at house** — ikkalasi ham to'g'ri.", a: false, why: "**at house** xato — **at home** deymiz." },
    { k: "tf", q: "**cupboard** so'zida *p* harfi o'qilmaydi.", a: true, why: "\"KA-bəd\"." },
    { k: "order", uz: "Yotoqxonamda katta shkaf va oyna bor.", words: ["There's", "a", "big", "wardrobe", "and", "a", "mirror", "in", "my", "bedroom."], extra: ["are", "on"], alt: [["There's", "a", "mirror", "and", "a", "big", "wardrobe", "in", "my", "bedroom."]] },
    { k: "translate", uz: "Biz to'rtinchi qavatdagi kvartirada yashaymiz.", a: ["We live in a flat on the fourth floor", "We live in an apartment on the fourth floor", "We live in a flat on the 4th floor", "We live in an apartment on the 4th floor", "We live on the fourth floor in a flat"] },
    { k: "translate", uz: "Kvartirangizda nechta xona bor?", a: ["How many rooms are there in your flat", "How many rooms are there in your apartment", "How many rooms does your flat have", "How many rooms does your apartment have", "How many rooms has your flat got", "How many rooms are in your flat", "How many rooms are in your apartment", "How many rooms do you have in your flat", "How many rooms do you have in your apartment", "How many rooms have you got in your flat"] },
    { k: "speak", say: "There's a big sofa and two armchairs in our living room.", uz: "Mehmonxonamizda katta divan va ikkita kreslo bor." },
  ],
  quiz: [
    { k: "choice", q: "\"Bizga yangi mebel kerak.\"", opts: ["We need new furnitures.", "We need a new furniture.", "We need some new furniture.", "We need many new furniture."], a: 2 },
    { k: "choice", q: "Qaysi predlog: ___ the balcony", opts: ["in", "on", "to"], a: 1, why: "**on the balcony**." },
    { k: "fill", q: "Our flat is ___ the ninth floor.", a: ["on"] },
    { k: "fill", q: "There ___ two big windows in the living room.", a: ["are", "'re"], why: "Ko'plik → **are**." },
    { k: "listen", say: "Leave your shoes in the hall.", opts: ["Leave your shoes in the hall.", "Leave your shoes in the hole.", "Leave your shoes on the wall."], a: 0 },
    { k: "tf", q: "**furniture** so'zining ko'plik shakli — *furnitures*.", a: false, why: "**furniture** sanalmaydi; ko'plik shakli yo'q." },
    { k: "match", pairs: [["upstairs", "yuqori qavatda"], ["downstairs", "pastki qavatda"], ["block of flats", "ko'p qavatli uy"], ["hall", "dahliz"], ["cooker", "plita"]] },
    { k: "order", uz: "Oshxonada stol yo'q.", words: ["There", "isn't", "a", "table", "in", "the", "kitchen."], extra: ["aren't", "on"] },
    { k: "translate", uz: "Vannaxona yuqori qavatda.", a: ["The bathroom is upstairs", "The bathroom's upstairs", "The bathroom is on the upper floor"] },
    { k: "choice", q: "\"Yotoqxonada nima bor?\"", opts: ["What is there in the bedroom?", "What there is in the bedroom?", "What are in bedroom there?", "What is in there bedroom?"], a: 0, why: "Savol: **What is there in the bedroom?** (*What's in the bedroom?* ham to'g'ri)." },
  ],
  summary: [
    "**house** — hovli-uy, **flat** — kvartira, **home** — o'z uyim: *at home, go home*.",
    "Xonalar **in** bilan (*in the kitchen*), lekin **on the balcony, on the fourth floor**.",
    "Jihozlar: **sofa, armchair, carpet, wardrobe, shelf (shelves), mirror, fridge, cooker, curtains**.",
    "**furniture** sanalmaydi: *a lot of furniture*, ❌ *furnitures*. **cooker** — plita, **cook** — oshpaz.",
    "Tasvir: **There is/are + nima + qayerda**; **upstairs / downstairs** — predlogsiz.",
  ],
  homework: "Uyingiz yoki kvartirangizni 8–10 gapda tasvirlang: qanday uy, nechanchi qavat, nechta xona, har bir xonada nima bor (*There's…, There are…*), sevimli xonangiz qaysi va nima uchun. Keyin uyingizning oddiy rejasini chizib, xonalarni inglizcha belgilang.",
};

export default lesson;
