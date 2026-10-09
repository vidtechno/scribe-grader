import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l6",
  title: "Restaurants and food",
  titleUz: "Restoran va ovqat buyurtma qilish",
  goal: "Restoran va choyxonada **buyurtma berasiz** (*I'll have… / Could I have…?*), menyuni tushunasiz, **allergiya va ehtiyojlaringizni** aytasiz, **hisob so'raysiz** va sanaladigan hamda sanalmaydigan ovqat nomlarini (**some, any, much, many, a bowl of**) to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Menyu va taomlar",
      blocks: [
        { t: "p", md: "Ingliz tilidagi menyu odatda to'rt qismdan iborat. O'zbek taomlarini ham inglizcha aytishni o'rganamiz:" },
        {
          t: "table", head: ["Bo'lim", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["starter", "gazak / birinchi bo'lim", "a salad, samsa"],
            ["soup", "sho'rva", "lagman, chicken soup"],
            ["main course", "asosiy taom", "plov, shashlik, pasta"],
            ["dessert", "shirinlik", "ice cream, halva"],
            ["drinks", "ichimliklar", "tea, juice, water"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Plov is rice with meat, carrots and onions.", uz: "Palov — go'sht, sabzi va piyozli guruch." },
            { en: "Samsa is a pastry with meat inside.", uz: "Samsa — ichida go'shti bor xamir taom." },
            { en: "Lagman is a noodle soup with vegetables.", uz: "Lagman — sabzavotli lag'mon sho'rva." },
          ],
        },
        { t: "tip", tone: "info", md: "Menyuda ko'p uchraydigan so'zlar: **grilled** (panjara/ko'mir ustida), **fried** (qovurilgan), **boiled** (qaynatilgan), **baked** (pechda pishirilgan), **fresh** (yangi), **homemade** (uyda tayyorlangan). Ular **V3 sifat** — 16-bosqichdagi majhul nisbatga o'xshash: *grilled chicken* = panjarada pishirilgan tovuq." },
        { t: "check", ex: { k: "choice", q: "Which is a dessert?", opts: ["lagman", "ice cream", "shashlik", "salad"], a: 1, why: "**ice cream** — shirinlik." } },
      ],
    },
    {
      title: "Buyurtma berish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Waiter", en: "Good evening. Are you ready to order?", uz: "Xayrli kech. Buyurtma berishga tayyormisiz?" },
            { who: "Kamol", en: "Yes. I'll have the lagman, please.", uz: "Ha. Lag'mon olaman." },
            { who: "Waiter", en: "And for the main course?", uz: "Asosiy taomga-chi?" },
            { who: "Kamol", en: "Could I have the shashlik with a salad?", uz: "Shashlik va salat bersangiz." },
            { who: "Waiter", en: "Of course. Anything to drink?", uz: "Albatta. Biror ichimlik?" },
            { who: "Kamol", en: "A pot of green tea, please. And some bread.", uz: "Bir choynak ko'k choy, iltimos. Va non ham." },
            { who: "Waiter", en: "Certainly. I'll bring it in a few minutes.", uz: "Mayli. Bir necha daqiqada olib kelaman." },
          ],
        },
        {
          t: "table", head: ["Ibora", "Kimdan"], speak: [0],
          rows: [
            ["Are you ready to order?", "ofitsiant"],
            ["What would you like? / Anything to drink?", "ofitsiant"],
            ["I'll have the… , please.", "mijoz"],
            ["Could I have…? / I'd like…", "mijoz"],
            ["What do you recommend?", "mijoz"],
          ],
        },
        { t: "tip", tone: "warn", md: "Buyurtma berishda **I want** o'rniga **I'll have…** yoki **I'd like…** deng — ular ancha muloyim. **I'll have** — shu zahoti qaror (will!). Oxirida **please** unutmang." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'll have the soup, please.", "Could I see the menu?", "What do you recommend?"] },
          bad: { title: "Xato", items: ["I want soup.", "Give me menu.", "What recommend you?"] },
        },
        { t: "check", ex: { k: "choice", q: "Ofitsiant: \"Are you ready to order?\" Siz:", opts: ["Yes, I'll have the soup, please.", "Yes, I eat soup.", "Yes, give soup.", "Yes, I am soup."], a: 0, why: "Buyurtma: **I'll have…, please.**" } },
      ],
    },
    {
      title: "Allergiya va xohishlar",
      blocks: [
        { t: "p", md: "Sog'ligingiz yoki diningizga mos kelmaydigan mahsulotlar haqida **oldindan** ogohlantirish juda muhim:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["I'm allergic to nuts.", "Yong'oqqa allergiyam bor."],
            ["I'm a vegetarian. / I don't eat meat.", "Men vegetarianman. / Go'sht yemayman."],
            ["Is there any meat in this?", "Bunda go'sht bormi?"],
            ["Could I have it without onions?", "Piyozsiz bera olasizmi?"],
            ["I can't eat spicy food.", "Achchiq ovqat yeya olmayman."],
            ["I'd prefer something light.", "Yengilroq narsani afzal ko'raman."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm allergic to nuts.", "I'm a vegetarian.", "Without onions, please."] },
          bad: { title: "Xato", items: ["I have allergy for nuts.", "I'm vegetarian person.", "No with onions."] },
        },
        { t: "tip", tone: "warn", md: "**allergic to** (predlog **to**): *allergic **to** nuts, milk, eggs*. **vegetarian** oldidan artikl: *I'm **a** vegetarian*. Hech qachon *allergic from / for* demang." },
        { t: "check", ex: { k: "fill", q: "I'm allergic ___ milk.", a: ["to"], why: "**allergic to**." } },
      ],
    },
    {
      title: "Sanaladigan va sanalmaydigan: takror",
      blocks: [
        { t: "p", md: "Ovqat haqida gapirganda sanalmaydigan otlar juda ko'p: *bread, rice, water, tea, sugar, meat, salt*. Ularni **some / any / much** bilan ishlatamiz va o'lchov so'zlari yordamida sanaymiz." },
        {
          t: "table", head: ["Turi", "Misol", "Qoida"], speak: [1],
          rows: [
            ["Sanaladigan", "an apple, two eggs, three samsas", "a / an, -s, many, a few"],
            ["Sanalmaydigan", "some rice, a little sugar, not much water", "-s yo'q, much, a little"],
            ["Taklif", "Would you like some tea?", "taklifda **some**"],
            ["Inkor / savol", "There isn't any bread. Is there any soup?", "**any**"],
          ],
        },
        {
          t: "examples", items: [
            { en: "a cup of tea, a glass of water", uz: "bir piyola choy, bir stakan suv" },
            { en: "a bowl of soup, a plate of plov", uz: "bir kosa sho'rva, bir likopcha palov" },
            { en: "a piece of bread, a slice of cake", uz: "bir bo'lak non, bir bo'lak tort" },
          ],
        },
        { t: "tip", tone: "info", md: "Kafeda ofitsiant ko'pincha sanalmaydigan ichimlikni sanaydi: *Two teas, please* = ikki piyola choy. Bu odatiy — chunki \"two cups of tea\" ma'nosi tushuniladi. Lekin *breads, rices, informations* — xato." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'd like some water.", "How much sugar do you take?", "There aren't any eggs."] },
          bad: { title: "Xato", items: ["I'd like a bread, please.", "How many sugar do you take?", "There isn't any eggs."] },
        },
        { t: "check", ex: { k: "choice", q: "How ___ sugar do you take in your tea?", opts: ["many", "much", "a few", "any"], a: 1, why: "*sugar* sanalmaydi → **much**." } },
        { t: "check", ex: { k: "choice", q: "Would you like ___ more rice?", opts: ["some", "any", "a", "many"], a: 0, why: "Taklifda → **some**." } },
      ],
    },
    {
      title: "Hisob va fikr bildirish",
      blocks: [
        { t: "p", md: "Ovqatdan keyin hisob so'raymiz. Agar nimadir yoqmasa, muloyim aytamiz." },
        {
          t: "table", head: ["Vaziyat", "Ibora"], speak: [1],
          rows: [
            ["Hisob so'rash", "Could we have the bill, please?"],
            ["Xizmat haqi", "Is service included?"],
            ["Alohida to'lash", "Can we pay separately?"],
            ["Maqtash", "It was delicious, thank you!"],
            ["Muloyim shikoyat", "Excuse me, this soup is a bit cold."],
            ["Choy puli", "Keep the change. / That's for you."],
          ],
        },
        { t: "tip", tone: "info", md: "**bill** (UK) = **check** (US) — hisob. **tip** — choy puli. Ko'p restoranlarda xizmat haqi (*service charge*) hisobga qo'shib yoziladi — shuning uchun *Is service included?* deb so'rash odatiy." },
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Excuse me, could we have the bill, please?", uz: "Kechirasiz, hisobni olib kelsangiz." },
            { who: "Waiter", en: "Of course. Was everything OK?", uz: "Albatta. Hammasi yaxshimidi?" },
            { who: "Laylo", en: "Yes, it was delicious. But the tea was a bit cold.", uz: "Ha, juda mazali edi. Faqat choy biroz sovib qolgan edi." },
            { who: "Waiter", en: "I'm sorry about that. Here's the bill. Service is included.", uz: "Kechirasiz. Mana hisob. Xizmat haqi kiritilgan." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Could we have the ___, please? (hisob)", a: ["bill", "check"], why: "**bill** (UK) / **check** (US)." } },
      ],
    },
    {
      title: "O'qing: Choyxonada",
      blocks: [
        {
          t: "text", title: "Dinner at the chaikhana",
          en: "On Friday evening Aziz and his friends went to a traditional chaikhana in Bukhara. It was warm, so they sat outside. The waiter brought a pot of green tea and some fresh bread.\nAziz ordered plov and Dilnoza ordered lagman. Kamol is a vegetarian, so he asked, \"Is there any meat in the salad?\" The waiter answered, \"No, there isn't any. It's only vegetables.\" Kamol ordered the salad and a bowl of tomato soup.\nEverything was delicious. After dinner they had halva and more tea. Aziz asked for the bill. \"Is service included?\" he asked. \"Yes, it is,\" the waiter said, so Aziz left only a small tip.",
          uz: "Juma kuni kechqurun Aziz va uning do'stlari Buxorodagi an'anaviy choyxonaga borishdi. Havo iliq edi, shuning uchun ular tashqarida o'tirishdi. Ofitsiant bir choynak ko'k choy va yangi non olib keldi.\nAziz palov, Dilnoza esa lag'mon buyurtma qildi. Kamol vegetarian, shuning uchun u so'radi: \"Salatda go'sht bormi?\" Ofitsiant javob berdi: \"Yo'q, hech qanday go'sht yo'q. Faqat sabzavot.\" Kamol salat va bir kosa pomidor sho'rva buyurtma qildi.\nHammasi mazali edi. Kechki ovqatdan keyin ular halva va yana choy ichishdi. Aziz hisob so'radi. \"Xizmat haqi kiritilganmi?\" deb so'radi u. \"Ha,\" dedi ofitsiant, shuning uchun Aziz faqat ozgina choy puli qoldirdi.",
        },
        { t: "check", ex: { k: "tf", q: "Kamol eats meat.", a: false, why: "*Kamol is a vegetarian* — go'sht yemaydi." } },
        { t: "check", ex: { k: "choice", q: "Why did Aziz leave only a small tip?", opts: ["The food was bad.", "Service was included.", "He had no money.", "He was angry."], a: 1, why: "*Service is included* — xizmat haqi hisobda bor edi." } },
      ],
    },
  ],
  words: [
    { en: "menu", uz: "menyu", ipa: "ˈmenjuː", pos: "noun", ex: "Could I see the menu, please?", exUz: "Menyuni ko'rsam bo'ladimi?" },
    { en: "starter", uz: "gazak, birinchi bo'lim", ipa: "ˈstɑːtə", pos: "noun", ex: "I'll have a salad as a starter.", exUz: "Gazak sifatida salat olaman." },
    { en: "dessert", uz: "shirinlik", ipa: "dɪˈzɜːt", pos: "noun", ex: "What's for dessert?", exUz: "Shirinlikka nima bor?" },
    { en: "bill", uz: "hisob (restoranda)", ipa: "bɪl", pos: "noun", ex: "Can we have the bill, please?", exUz: "Hisobni olib kelsangiz." },
    { en: "tip", uz: "choy puli", ipa: "tɪp", pos: "noun", ex: "We left a small tip.", exUz: "Ozgina choy puli qoldirdik." },
    { en: "allergic", uz: "allergiyasi bor", ipa: "əˈlɜːdʒɪk", pos: "adjective", ex: "I'm allergic to nuts.", exUz: "Yong'oqqa allergiyam bor." },
    { en: "vegetarian", uz: "vegetarian", ipa: "ˌvedʒəˈteəriən", pos: "noun / adjective", ex: "My sister is a vegetarian.", exUz: "Singlim vegetarian." },
    { en: "spicy", uz: "achchiq, ziravorli", ipa: "ˈspaɪsi", pos: "adjective", ex: "This soup is too spicy for me.", exUz: "Bu sho'rva men uchun juda achchiq." },
    { en: "recommend", uz: "tavsiya qilmoq", ipa: "ˌrekəˈmend", pos: "verb", ex: "What do you recommend?", exUz: "Nimani tavsiya qilasiz?" },
    { en: "delicious", uz: "mazali", ipa: "dɪˈlɪʃəs", pos: "adjective", ex: "The plov was delicious.", exUz: "Palov mazali edi." },
  ],
  practice: [
    { k: "match", pairs: [["starter", "gazak"], ["dessert", "shirinlik"], ["bill", "hisob"], ["tip", "choy puli"], ["menu", "menyu"]] },
    { k: "listen", say: "Can I have the bill, please?", opts: ["Can I have the bill, please?", "Can I have the menu, please?", "Can I have the tea, please?"], a: 0 },
    { k: "listen", say: "I'm allergic to nuts.", opts: ["I'm allergic to nuts.", "I'm angry about nuts.", "I'm allergic to milk."], a: 0 },
    { k: "choice", q: "Waiter: \"Are you ready to order?\" You:", opts: ["Yes, I'll have the lagman, please.", "Yes, I want lagman.", "Yes, give lagman.", "Yes, I order lagman."], a: 0, why: "**I'll have… , please.**" },
    { k: "choice", q: "There isn't ___ bread left.", opts: ["some", "any", "a", "many"], a: 1, why: "Inkor gapda → **any**." },
    { k: "choice", q: "Would you like ___ tea?", opts: ["some", "any", "a", "many"], a: 0, why: "Taklifda → **some**." },
    { k: "choice", q: "How ___ sugar do you take?", opts: ["many", "much", "a", "some"], a: 1, why: "*sugar* — sanalmaydi → **much**." },
    { k: "fill", q: "I'm allergic ___ nuts.", a: ["to"], why: "**allergic to**." },
    { k: "fill", q: "Can I have a ___ of water, please? (stakan)", a: ["glass"], hint: "stakan", why: "**a glass of water**." },
    { k: "fill", q: "Could I have the soup ___ onions, please?", a: ["without"], why: "**without** — ... siz." },
    { k: "fill", q: "Can we have the ___, please? (hisob)", a: ["bill", "check"], why: "**bill** (UK) / **check** (US)." },
    { k: "tf", q: "**I'm a vegetarian** degani go'sht yemayman.", a: true },
    { k: "tf", q: "**I'd like a bread, please.** — to'g'ri gap.", a: false, why: "*bread* sanalmaydi: *some bread / a piece of bread*." },
    { k: "order", uz: "Menyuni ko'rsam bo'ladimi?", words: ["Could", "I", "see", "the", "menu", "please?"], extra: ["Can", "do"], alt: [["Can", "I", "see", "the", "menu", "please?"]] },
    { k: "translate", uz: "Hisobni olib kelsangiz bo'ladimi?", a: ["Could we have the bill, please?", "Can we have the bill, please?", "Could I have the bill, please?", "Can I have the bill, please?", "Could you bring the bill, please?", "Could you bring us the bill, please?"] },
    { k: "speak", say: "I'd like the chicken soup and a cup of green tea, please.", uz: "Tovuqli sho'rva va bir piyola ko'k choy bersangiz." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I want a soup.", "I'll have the soup, please.", "Give me soup.", "I order soup please."], a: 1, why: "**I'll have… , please.**" },
    { k: "choice", q: "There ___ any eggs in the fridge.", opts: ["isn't", "aren't", "don't", "hasn't"], a: 1, why: "*eggs* — ko'plik → **aren't**." },
    { k: "choice", q: "\"Bir stakan suv\":", opts: ["a water", "a glass of water", "a cup water", "a glass water"], a: 1, why: "**a glass of water**." },
    { k: "choice", q: "How ___ people are there at the table?", opts: ["much", "many", "any", "some"], a: 1, why: "*people* — sanaladi → **many**." },
    { k: "fill", q: "Is there ___ meat in this soup?", a: ["any"], why: "Savolda → **any**." },
    { k: "fill", q: "I can't eat that. It's too ___. (achchiq)", a: ["spicy", "hot"], why: "**spicy** — achchiq." },
    { k: "fill", q: "What do you ___? Everything looks great. (tavsiya qilmoq)", a: ["recommend"], why: "**What do you recommend?**" },
    { k: "listen", say: "Is service included?", opts: ["Is service included?", "Is the soup included?", "Is the service good?"], a: 0 },
    { k: "tf", q: "**Two teas, please** kafeda odatiy iborani bildiradi (ikki piyola choy).", a: true },
    { k: "order", uz: "Men tovuqli sho'rva olaman.", words: ["I'll", "have", "the", "chicken", "soup."], extra: ["want", "having"] },
  ],
  summary: [
    "Buyurtma: **I'll have… / Could I have…? / I'd like…, please.** — **I want** emas.",
    "Ogohlantirish: **I'm allergic to…, I'm a vegetarian, without onions, Is there any … in it?**",
    "Sanalmaydigan ovqatlar: **some / any / much** + o'lchov: *a cup of tea, a bowl of soup, a piece of bread.*",
    "Taklifda **some** (*Would you like some tea?*), inkor va savolda **any**.",
    "Hisob: **Could we have the bill, please? Is service included?** Maqtash: **It was delicious!**",
  ],
  homework: "Sevimli restoraningiz yoki choyxonangiz uchun inglizcha menyu tuzing: 2 ta starter, 2 ta main course, 2 ta dessert, 2 ta drink. Har bir taomning tagiga bitta gap yozing (*Plov is… / Lagman is…*). Keyin ofitsiant va mijoz dialogi yozing (8 gap) va do'stingiz bilan rollarda o'qing.",
};

export default lesson;
