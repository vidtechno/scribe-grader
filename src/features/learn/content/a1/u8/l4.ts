import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u8-l4",
  title: "At the café",
  titleUz: "Kafeda: buyurtma berish",
  goal: "Kafeda xushmuomala buyurtma berasiz (**I'd like…, Could I have…?, I'll have…**), ofitsiantning savollarini tushunib javob berasiz (**Are you ready to order? Eat in or take away? Anything else?**) va hisobni so'raysiz: **Can we have the bill, please?**",
  slides: [
    {
      title: "\"Give me…\" — qo'pol eshitiladi!",
      blocks: [
        { t: "p", md: "O'zbekchada \"Bitta choy bering\" — mutlaqo normal. Lekin inglizchaga so'zma-so'z *Give me a tea* deb tarjima qilsangiz, bu **buyruq** bo'lib, qo'pol eshitiladi. Inglizlar buyurtmani **iltimos** shaklida beradi:" },
        {
          t: "table", head: ["Ibora", "Qachon?", "O'zbekcha"],
          rows: [
            ["I'd like a tea, please.", "eng ko'p ishlatiladi", "Bir choy olsam (xohlardim)."],
            ["Could I have a tea, please?", "juda xushmuomala", "Bir choy olsam bo'ladimi?"],
            ["Can I have a tea, please?", "oddiy, do'stona", "Bir choy bera olasizmi?"],
            ["I'll have the soup, please.", "menyudan tanlaganda", "Men sho'rvani olaman."],
          ],
          speak: [0],
        },
        { t: "tip", tone: "info", md: "**I'd like** = **I would like** (Unit 7 da o'rgandik). Undan keyin ot yoki **to + fe'l** keladi: *I'd like **a** salad. I'd like **to order**.*\n**please** so'zini unutmang — inglizchada u juda muhim!" },
        {
          t: "compare",
          good: { title: "To'g'ri va xushmuomala", items: ["I'd like a coffee, please.", "Could I have the menu, please?", "I'd like to order, please."] },
          bad: { title: "Xato yoki qo'pol", items: ["Give me a coffee.", "I want the menu.", "I'd like order."] },
        },
        { t: "check", ex: { k: "choice", q: "Waiter: \"What would you like?\" — Siz:", opts: ["Give me a pizza.", "I'd like a pizza, please.", "I like a pizza, please.", "I'd like eat a pizza."], a: 1, why: "**I'd like** (= xohlardim) + ot + **please**. *I like* = yoqtiraman, bu boshqa ma'no." } },
      ],
    },
    {
      title: "Ofitsiant savollari va javoblar",
      blocks: [
        {
          t: "table", head: ["Ofitsiant", "Siz", "O'zbekcha"],
          rows: [
            ["Are you ready to order?", "Yes, I'd like… / Not yet, sorry.", "Buyurtma berishga tayyormisiz?"],
            ["What would you like to drink?", "A glass of apple juice, please.", "Nima ichasiz?"],
            ["Still or sparkling?", "Still, please.", "Gazsizmi yoki gazli?"],
            ["Anything else?", "No, that's all, thanks.", "Yana nimadir?"],
            ["Eat in or take away?", "Take away, please.", "Shu yerda yeysizmi yoki olib ketasizmi?"],
            ["Enjoy your meal!", "Thank you.", "Yoqimli ishtaha!"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "Amerikada *take away* o'rniga **to go** deyishadi: *For here or to go?* Hisob ham Britaniyada **the bill**, Amerikada **the check**." },
        { t: "check", ex: { k: "choice", q: "Waiter: \"Is that to eat in or take away?\"", opts: ["Take away, please.", "Yes, please.", "I'm take away.", "No, thank you."], a: 0, why: "Ikki variant so'ralsa, **bittasini tanlab** javob beramiz: *Take away, please.* yoki *Eat in, please.*" } },
      ],
    },
    {
      title: "Menyu va \"two coffees\"",
      blocks: [
        {
          t: "table", head: ["Menyu bo'limi", "Misollar", "O'zbekcha"],
          rows: [
            ["starters", "soup, salad", "boshlang'ich taomlar"],
            ["main courses", "plov, chicken with rice, fish", "asosiy taomlar"],
            ["desserts", "ice cream, cake, fruit salad", "shirinliklar"],
            ["drinks", "tea, coffee, juice, water", "ichimliklar"],
          ],
          speak: [0, 1],
        },
        { t: "p", md: "Shu unitning 1-darsida *coffee* sanalmaydi, *a cup of coffee* deymiz, dedik. Lekin **kafeda buyurtma berganda** ichimliklar \"porsiya\" sifatida sanaladi:" },
        {
          t: "examples", items: [
            { en: "Two coffees and a tea, please.", uz: "Ikki qahva va bitta choy, iltimos.", note: "= two cups of coffee and a cup of tea" },
            { en: "Three waters, please.", uz: "Uchta suv, iltimos.", note: "= three bottles / glasses of water" },
            { en: "Could we have two orange juices?", uz: "Ikkita apelsin sharbati bera olasizmi?" },
          ],
        },
        { t: "tip", tone: "warn", md: "Bu faqat **ovqat-ichimlik buyurtmasi**da ishlaydi. Do'konda yoki umumiy gapda: *I drink a lot of coffee* (*a lot of coffees* ❌), *We need some water*." },
        { t: "check", ex: { k: "fill", q: "Hi! Two ___ and a cola, please.", a: ["coffees", "teas", "waters", "juices", "lemonades"], uz: "Salom! Ikki qahva va bitta kola, iltimos.", why: "Kafeda: **two coffees** = two cups of coffee." } },
      ],
    },
    {
      title: "Talaffuz: I'd like, Could I…, dessert",
      blocks: [
        {
          t: "sounds", items: [
            { label: "I'd like", say: "I'd like a coffee, please.", uz: "**\"ayd layk\"** — *d* juda qisqa, lekin bor. Usiz *I like* = yoqtiraman bo'lib qoladi!", examples: ["I'd like", "I'd like a coffee, please."] },
            { label: "Could I", say: "Could I have the menu?", uz: "**\"kudai\"** — ikki so'z qo'shilib ketadi; *l* o'qilmaydi.", examples: ["Could I have the menu?"] },
            { label: "dessert", say: "dessert", uz: "**\"di-ZÖ:T\"** — urg'u **ikkinchi** bo'g'inda. *desert* (cho'l) — \"DE-zət\".", examples: ["dessert", "desert"] },
            { label: "menu", say: "menu", uz: "**\"menyu:\"** — o'zbekchadagidek, lekin oxirida cho'ziq \"yu:\".", examples: ["menu", "Can I see the menu?"] },
            { label: "the bill", say: "the bill, please", uz: "**\"ðə bil\"** — qisqa \"i\". *the* da til tishlar orasida.", examples: ["Can we have the bill, please?"] },
          ],
        },
        { t: "tip", tone: "good", md: "Iltimos qilganda ovoz oxirida **yuqoriga** ko'tariladi: *Could I have the menu, please?* ↗ — bu xushmuomala eshitiladi. Bir xil past ohangda aytsangiz, zerikkan yoki jahldordek tuyulasiz." },
        { t: "check", ex: { k: "listen", say: "I'd like a coffee, please.", opts: ["I'd like a coffee, please.", "I like coffee.", "I'd like a cookie, please."], a: 0, why: "**I'd like** — buyurtma (xohlardim). *I like coffee* — qahvani yoqtiraman." } },
      ],
    },
    {
      title: "Dialog: \"Anor\" kafesida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Waiter", en: "Good afternoon! Here's the menu. Are you ready to order?", uz: "Xayrli kun! Mana menyu. Buyurtma berishga tayyormisizlar?" },
            { who: "Malika", en: "Yes. I'd like the chicken soup, please.", uz: "Ha. Menga tovuq sho'rvasi, iltimos." },
            { who: "Timur", en: "And I'll have the plov.", uz: "Men esa palov olaman." },
            { who: "Waiter", en: "Sure. What would you like to drink?", uz: "Albatta. Nima ichasizlar?" },
            { who: "Malika", en: "Could we have a bottle of water, please?", uz: "Bir shisha suv bera olasizmi?" },
            { who: "Waiter", en: "Still or sparkling?", uz: "Gazsizmi yoki gazli?" },
            { who: "Malika", en: "Still, please. And two green teas.", uz: "Gazsiz, iltimos. Va ikkita ko'k choy." },
            { who: "Waiter", en: "Anything else? We've got a delicious honey cake today.", uz: "Yana nimadir? Bugun mazali asalli tortimiz bor." },
            { who: "Timur", en: "Maybe later for dessert. That's all for now, thanks.", uz: "Balki keyinroq, shirinlik uchun. Hozircha shu, rahmat." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Timur orders the chicken soup.", a: false, why: "Sho'rvani **Malika** buyurtma qiladi; Timur — *I'll have the plov.*" } },
        { t: "check", ex: { k: "choice", q: "What do they want to drink?", opts: ["sparkling water and two coffees", "still water and two green teas", "two bottles of juice"], a: 1 } },
      ],
    },
    {
      title: "Hisob va kichik muammolar",
      blocks: [
        {
          t: "examples", items: [
            { en: "Excuse me! Can we have the bill, please?", uz: "Kechirasiz! Hisobni olib kelasizmi?" },
            { en: "Can I pay by card?", uz: "Karta bilan to'lasam bo'ladimi?" },
            { en: "Excuse me, I ordered a tea, not a coffee.", uz: "Kechirasiz, men qahva emas, choy buyurtma qilgandim." },
            { en: "Excuse me, this soup is cold.", uz: "Kechirasiz, bu sho'rva sovuq." },
            { en: "It's on me today.", uz: "Bugun men to'layman (mendan)." },
            { en: "Let's split the bill.", uz: "Hisobni bo'lib to'laylik." },
          ],
        },
        { t: "tip", tone: "info", md: "Ofitsiantni chaqirish uchun **Excuse me!** deysiz (*Hey!* yoki qo'l chapak emas). **tip** — choychaqa: Britaniya restoranlarida ko'pincha hisobning 10–12 foizi qoldiriladi (ba'zan xizmat haqi hisobga allaqachon qo'shilgan bo'ladi)." },
        { t: "check", ex: { k: "order", uz: "Hisobni olib kelasizmi?", words: ["Can", "we", "have", "the", "bill,", "please?"], extra: ["give", "bills"], why: "**Can we have the bill, please?** — standart ibora." } },
      ],
    },
    {
      title: "O'qing: sevimli kafem",
      blocks: [
        {
          t: "text", title: "My favourite café",
          en: "My favourite café is called Anor. It's small and cosy, and it's only five minutes from my university. I usually go there with my friends after classes.\nThe menu isn't very long, but everything is delicious. My favourite dish is the chicken soup with fresh bread, and for dessert I always have a slice of honey cake. The waiters are friendly and fast, and the prices aren't high: lunch costs about forty thousand soums.\nOn Fridays the café is very busy, so we often order our coffee to take away and drink it in the park.",
          uz: "Mening sevimli kafem \"Anor\" deb ataladi. U kichkina va shinam, universitetimdan bor-yo'g'i besh daqiqa uzoqlikda. Odatda darslardan keyin u yerga do'stlarim bilan boraman.\nMenyu unchalik uzun emas, lekin hammasi mazali. Sevimli taomim — yangi non bilan tovuq sho'rvasi, shirinlikka esa doim bir bo'lak asalli tort olaman. Ofitsiantlar xushmuomala va tez, narxlar ham baland emas: tushlik taxminan qirq ming so'm turadi.\nJuma kunlari kafe juda gavjum bo'ladi, shuning uchun qahvani ko'pincha olib ketishga buyurtma qilamiz va parkda ichamiz.",
        },
        { t: "check", ex: { k: "tf", q: "Kafe universitetdan uzoqda joylashgan.", a: false, why: "*only five minutes from my university* — juda yaqin." } },
      ],
    },
  ],
  words: [
    { en: "menu", uz: "menyu", ipa: "ˈmen.juː", pos: "noun", ex: "Could I see the menu, please?", exUz: "Menyuni ko'rsam bo'ladimi?" },
    { en: "starter", uz: "birinchi (boshlang'ich) taom", ipa: "ˈstɑː.tə", pos: "noun", ex: "I'd like the salad as a starter.", exUz: "Boshlang'ich taom sifatida salat olaman." },
    { en: "order", uz: "buyurtma bermoq; buyurtma", ipa: "ˈɔː.də", pos: "verb / noun", ex: "Are you ready to order?", exUz: "Buyurtma berishga tayyormisiz?" },
    { en: "bill", uz: "hisob (to'lov qog'ozi)", ipa: "bɪl", pos: "noun", ex: "Can we have the bill, please?", exUz: "Hisobni olib kelasizmi?" },
    { en: "main course", uz: "asosiy taom", ipa: "ˌmeɪn ˈkɔːs", pos: "noun", ex: "For my main course I'd like the fish.", exUz: "Asosiy taomga baliq olaman." },
    { en: "dessert", uz: "shirinlik (ovqatdan keyin)", ipa: "dɪˈzɜːt", pos: "noun", ex: "Would you like a dessert?", exUz: "Shirinlik olasizmi?" },
    { en: "take away", uz: "olib ketish uchun", ipa: "ˌteɪk əˈweɪ", pos: "phrase", ex: "A coffee to take away, please.", exUz: "Bitta qahva, olib ketish uchun." },
    { en: "sparkling", uz: "gazli (suv)", ipa: "ˈspɑː.klɪŋ", pos: "adjective", ex: "A bottle of sparkling water, please.", exUz: "Bir shisha gazli suv, iltimos." },
    { en: "tip", uz: "choychaqa", ipa: "tɪp", pos: "noun", ex: "We left a tip for the waiter.", exUz: "Ofitsiantga choychaqa qoldirdik." },
    { en: "delicious", uz: "juda mazali", ipa: "dɪˈlɪʃ.əs", pos: "adjective", ex: "This soup is delicious!", exUz: "Bu sho'rva juda mazali!" },
  ],
  practice: [
    { k: "listen", say: "Could I have the menu, please?", opts: ["Could I have the menu, please?", "Can I have the money, please?", "Could I have the bill, please?"], a: 0 },
    { k: "listen", say: "Two coffees to take away, please.", opts: ["Two coffees to take away, please.", "Two coffees to eat in, please.", "A coffee to take away, please."], a: 0 },
    { k: "choice", q: "Waiter: \"Still or sparkling?\" — Siz:", opts: ["Still, please.", "Yes, sparkling is.", "Fine, thanks.", "Yes, please."], a: 0, why: "Tanlov savoliga **Yes** bilan emas, variant bilan javob beramiz." },
    { k: "choice", q: "Qaysi gap kafeda **qo'pol** eshitiladi?", opts: ["I'd like a salad, please.", "Give me a salad.", "Could I have a salad, please?", "I'll have a salad, please."], a: 1, why: "*Give me…* — buyruq. Xushmuomala: *I'd like… / Could I have…?*" },
    { k: "fill", q: "Could I ___ a glass of orange juice, please?", a: ["have", "get", "order"], uz: "Bir stakan apelsin sharbati olsam bo'ladimi?" },
    { k: "fill", q: "Excuse me, can we have the ___, please?", a: ["bill", "check"], uz: "Kechirasiz, hisobni olib kelasizmi?" },
    { k: "fill", q: "Are you ready to ___?", a: ["order"], uz: "Buyurtma berishga tayyormisiz?" },
    { k: "fill", q: "I'd like ___ order, please.", a: ["to"], uz: "Buyurtma bermoqchiman.", why: "**I'd like + to + fe'l**." },
    { k: "tf", q: "**Give me a tea.** — kafeda buyurtma berishning xushmuomala usuli.", a: false, why: "Bu buyruq, qo'pol eshitiladi. *I'd like a tea, please.*" },
    { k: "tf", q: "Kafeda buyurtma berganda **two coffees** deyish mumkin (= two cups of coffee).", a: true },
    { k: "match", pairs: [["menu", "menyu"], ["waiter", "ofitsiant"], ["bill", "hisob"], ["dessert", "shirinlik"], ["tip", "choychaqa"]] },
    { k: "order", uz: "Bir qahva va bir bo'lak tort olsam bo'ladimi?", words: ["Could", "I", "have", "a", "coffee", "and", "a", "piece", "of", "cake,", "please?"], extra: ["give", "cakes"], alt: [["Could", "I", "have", "a", "piece", "of", "cake", "and", "a", "coffee,", "please?"]] },
    { k: "translate", uz: "Men palov olaman. (buyurtma)", a: ["I'll have plov", "I will have plov", "I'll have the plov", "I will have the plov", "I'd like plov", "I would like plov", "I'd like the plov", "I would like the plov", "I'd like some plov", "I'll have some plov", "Can I have the plov", "Could I have the plov", "Can I have plov", "Could I have plov", "I'll take the plov", "I'll take plov", "I'll have plov please", "I'll have the plov please", "I'd like the plov please", "I'd like plov please", "Could I have the plov please", "Can I have the plov please"] },
    { k: "translate", uz: "Yana biror narsa?", a: ["Anything else", "Would you like anything else", "Do you want anything else", "Is there anything else", "Do you need anything else"] },
    { k: "speak", say: "Could I have a bowl of soup and a glass of water, please?", uz: "Bir kosa sho'rva va bir stakan suv olsam bo'ladimi?" },
  ],
  quiz: [
    { k: "choice", q: "Waiter: \"What would you like to drink?\"", opts: ["A lemonade, please.", "Yes, I would.", "I'd like drink lemonade.", "No, I'm not."], a: 0 },
    { k: "choice", q: "Waiter: \"Is that to eat in or take away?\"", opts: ["Eat in, please.", "Yes, please.", "I'm eating.", "That's all."], a: 0 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I'd like a tea, please.", "Could I have the menu, please?", "I'd like to order.", "I'd like order a pizza."], a: 3, why: "**I'd like + to + fe'l**: *I'd like to order a pizza.*" },
    { k: "fill", q: "I'll ___ the fish, please.", a: ["have", "take", "order", "try"], uz: "Men baliqni olaman." },
    { k: "fill", q: "Would you like a ___? We've got ice cream and honey cake.", a: ["dessert"], uz: "Shirinlik olasizmi? Muzqaymoq va asalli tortimiz bor." },
    { k: "listen", say: "Can we have the bill, please?", opts: ["Can we have the bill, please?", "Can we have the menu, please?", "Can we have the bowl, please?"], a: 0 },
    { k: "tf", q: "Ofitsiant *Still or sparkling?* deb so'rasa, u suv haqida so'rayapti.", a: true, why: "**still water** — gazsiz, **sparkling water** — gazli." },
    { k: "match", pairs: [["take away", "olib ketish uchun"], ["main course", "asosiy taom"], ["sparkling", "gazli"], ["delicious", "juda mazali"]] },
    { k: "translate", uz: "Menyuni bera olasizmi?", a: ["Can I have the menu", "Could I have the menu", "Can we have the menu", "Could we have the menu", "Can I see the menu", "Could I see the menu", "Can we see the menu", "Could we see the menu", "Can you give me the menu", "Could you give me the menu", "Can you give us the menu", "Could you give us the menu", "May I have the menu", "May I see the menu", "Can I have the menu please", "Could I have the menu please", "Can we have the menu please", "Could we have the menu please", "Can I see the menu please", "Could I see the menu please", "Can I get the menu", "Could I get the menu"] },
    { k: "order", uz: "Ikkita choy va bitta somsa, iltimos.", words: ["Two", "teas", "and", "a", "samsa,", "please."], extra: ["tea", "an"], alt: [["A", "samsa", "and", "two", "teas,", "please."]] },
  ],
  summary: [
    "Buyurtma: **I'd like…, please. / Could I have…? / I'll have…** — *Give me…* qo'pol eshitiladi.",
    "Ofitsiant savollari: **Are you ready to order? Anything else? Still or sparkling? Eat in or take away?**",
    "Kafeda ichimliklar sanaladi: **two coffees, three waters** (= cups / glasses of…).",
    "Hisob: **Excuse me! Can we have the bill, please?** · **Let's split the bill. / It's on me.**",
  ],
  homework: "Sevimli kafengiz uchun inglizcha mini-menyu yozing (starters, main courses, desserts, drinks — narxlari bilan). Keyin \"Anor\" dialogini o'z buyurtmangiz bilan qayta yozing va ikki rolni ovoz chiqarib o'qing; ohangni *please* da yuqoriga ko'taring.",
};

export default lesson;
