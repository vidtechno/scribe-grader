import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l6",
  title: "Telling a story: and, but, so, because",
  titleUz: "Hikoya qilish: and, but, so, because",
  goal: "Qisqa gaplarni **and, but, so, because** bilan bog'lab, izchil hikoya qila olasiz; **so** (natija) va **because** (sabab) ni adashtirmaysiz; hikoyani **suddenly, luckily, unfortunately, in the end** bilan jonli qilasiz.",
  slides: [
    {
      title: "To'rtta asosiy bog'lovchi",
      blocks: [
        { t: "p", md: "Faqat qisqa gaplar bilan gapirsak, nutq robotnikiga o'xshaydi: *I was hungry. I went to a café. It was closed.* Bog'lovchilar gaplarni **bitta oqimga** ulaydi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"],
          rows: [
            ["and", "va (qo'shimcha)", "I went to a café and ordered a samsa."],
            ["but", "lekin (qarama-qarshilik)", "I went to a café, but it was closed."],
            ["so", "shuning uchun (natija)", "I was hungry, so I went to a café."],
            ["because", "chunki (sabab)", "I went to a café because I was hungry."],
          ],
          speak: [2],
        },
        { t: "tip", tone: "good", md: "Ega bir xil bo'lsa, **and** dan keyin uni takrorlash shart emas: *I went to a café **and** (I) ordered a samsa.* Bu hikoyani tez va tabiiy qiladi." },
        { t: "check", ex: { k: "choice", q: "The film was long, ___ it was very interesting. (lekin)", opts: ["and", "but", "so", "because"], a: 1, why: "*uzun* (salbiy) ↔ *qiziqarli* (ijobiy) — qarama-qarshilik → **but**." } },
      ],
    },
    {
      title: "so yoki because?",
      blocks: [
        { t: "p", md: "Bu ikkisi — bir tanganing ikki tomoni. Bitta vaziyatni ikki xil aytish mumkin:" },
        {
          t: "table", head: ["Sabab → natija", "so", "because"],
          rows: [
            ["charchadim → yotdim", "I was tired, so I went to bed.", "I went to bed because I was tired."],
            ["yomg'ir → uyda qoldik", "It rained, so we stayed at home.", "We stayed at home because it rained."],
            ["avtobusdan qoldim → kechikdim", "I missed the bus, so I was late.", "I was late because I missed the bus."],
          ],
          speak: [1, 2],
        },
        { t: "p", md: "Qoida: **so** dan keyin — **natija** (nima bo'ldi?). **because** dan keyin — **sabab** (nega?)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It was cold, so I closed the window.", "I closed the window because it was cold."] },
          bad: { title: "Xato (ma'no teskari)", items: ["It was cold because I closed the window.", "I closed the window, so it was cold."] },
        },
        { t: "check", ex: { k: "choice", q: "I didn't go to school ___ I was ill.", opts: ["so", "because", "but", "and"], a: 1, why: "*kasal edim* — sabab → **because**." } },
        { t: "check", ex: { k: "choice", q: "The shop was closed, ___ I went home.", opts: ["because", "but", "so", "or"], a: 2, why: "*uyga ketdim* — natija → **so**." } },
      ],
    },
    {
      title: "Uzbek o'quvchilarning xatolari",
      blocks: [
        { t: "p", md: "O'zbekchada \"**Chunki** yomg'ir yog'di, **shuning uchun** uyda qoldik\" deyish mumkin. Inglizchada **because** va **so** bitta gapda birga **ishlatilmaydi** — bittasini tanlang:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Because it rained, we stayed at home.", "It rained, so we stayed at home."] },
          bad: { title: "Xato", items: ["Because it rained, so we stayed at home.", "Because it rained so we stayed at home."] },
        },
        { t: "tip", tone: "warn", md: "Xuddi shunday **although … but** ham birga kelmaydi. Ingliz tilida bitta bog'lovchi yetadi." },
        {
          t: "table", head: ["Tinish belgisi", "Misol"],
          rows: [
            ["but va so oldidan odatda vergul", "It was late, but we were not tired. / I was hungry, so I ate."],
            ["because oldidan odatda vergul yo'q", "We stayed at home because it rained."],
            ["because gap boshida bo'lsa — vergul o'rtada", "Because it rained, we stayed at home."],
          ],
        },
        { t: "tip", tone: "info", md: "Yozuvda **Because I was tired.** degan alohida gap — chala gap. Lekin og'zaki javobda tabiiy: *Why did you leave? — **Because I was tired.***" },
        { t: "check", ex: { k: "tf", q: "*Because the bus was late, so I took a taxi.* — to'g'ri gap.", a: false, why: "**because** va **so** birga ishlatilmaydi: *Because the bus was late, I took a taxi.* yoki *The bus was late, so I took a taxi.*" } },
      ],
    },
    {
      title: "Hikoyani jonlantiruvchi so'zlar",
      blocks: [
        { t: "p", md: "Yaxshi hikoyada kutilmagan voqea, omad yoki omadsizlik va yakun bo'ladi. Bu so'zlar odatda **gap boshida**, ko'pincha vergul bilan keladi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"],
          rows: [
            ["First, … Then, …", "Avval, … Keyin, …", "First, we had tea. Then, we went out."],
            ["Suddenly, …", "To'satdan, birdan", "Suddenly, the lights went out."],
            ["Luckily, …", "Baxtimizga, omadimiz kelib", "Luckily, a taxi stopped."],
            ["Unfortunately, …", "Afsuski", "Unfortunately, the museum was closed."],
            ["In the end, …", "Oxir-oqibat, oxirida", "In the end, we found the hotel."],
          ],
          speak: [2],
        },
        {
          t: "sounds", items: [
            { label: "unfortunately", say: "unfortunately", uz: "Urg'u **FO:** da: **\"an-FO:-chə-nət-li\"**. *t* + *u* = \"ch\".", examples: ["unfortunately", "fortunately"] },
            { label: "suddenly", say: "suddenly", uz: "**\"SA-dən-li\"** — urg'u birinchi bo'g'inda, *e* deyarli eshitilmaydi.", examples: ["suddenly"] },
            { label: "worried", say: "worried", uz: "**\"WA-rid\"** — *o* bu yerda \"a\" kabi o'qiladi. ❌ \"vo-ried\" emas.", examples: ["worried", "I was worried."] },
          ],
        },
        { t: "check", ex: { k: "choice", q: "I lost my wallet. ___, a kind woman found it and brought it back.", opts: ["Unfortunately", "Luckily", "Because", "But"], a: 1, why: "Yaxshi natija → **Luckily** (baxtimga)." } },
      ],
    },
    {
      title: "O'qing: Yo'qolgan hamyon",
      blocks: [
        {
          t: "text", title: "Sardor's lost wallet",
          en: "Last Friday I went to Chorsu Bazaar because I wanted to buy some spices. It was very crowded, but I found everything I needed. Then I bought some hot bread and went to the bus stop.\nSuddenly, I couldn't find my wallet! I was really worried because my ID card and all my money were in it. I went back to the bread stall, but nobody remembered me.\nUnfortunately, I missed my bus, so I walked home. In the end, I had a surprise. A young man called me in the evening. He found my wallet near the bus stop and saw my phone number on a card inside. I was so surprised and happy!",
          uz: "O'tgan juma kuni Chorsu bozoriga bordim, chunki ziravor sotib olmoqchi edim. Juda gavjum edi, lekin kerakli hamma narsani topdim. Keyin issiq non sotib olib, bekatga bordim.\nTo'satdan hamyonimni topa olmadim! Juda xavotirga tushdim, chunki unda ID-kartam va bor pulim bor edi. Non rastasiga qaytib bordim, lekin hech kim meni eslamadi.\nAfsuski, avtobusimdan qoldim, shuning uchun uyga piyoda bordim. Oxirida esa kutilmagan voqea bo'ldi. Kechqurun bir yigit menga qo'ng'iroq qildi. U hamyonimni bekat yonidan topibdi va ichidagi kartochkada telefon raqamimni ko'ribdi. Juda hayron bo'ldim va xursand bo'ldim!",
        },
        { t: "check", ex: { k: "choice", q: "Why did the writer go to Chorsu Bazaar?", opts: ["Because he wanted to buy some bread.", "Because he wanted to buy some spices.", "Because he lost his wallet.", "Because he missed the bus."], a: 1, why: "*…because I wanted to buy some spices.*" } },
        { t: "check", ex: { k: "tf", q: "Muallif avtobusdan qoldi, shuning uchun taksiga chiqdi.", a: false, why: "*I missed my bus, so I **walked** home.*" } },
      ],
    },
    {
      title: "Dialog: Hikoyaga munosabat bildirish",
      blocks: [
        { t: "p", md: "Kimdir hikoya qilayotganda jim turmang — qisqa reaksiyalar bilan qiziqishingizni ko'rsating: **Really? Oh no! What did you do? Lucky you!**" },
        {
          t: "dialog", lines: [
            { who: "Sardor", en: "You won't believe what happened on Friday!", uz: "Juma kuni nima bo'lganiga ishonmaysan!" },
            { who: "Madina", en: "What happened?", uz: "Nima bo'ldi?" },
            { who: "Sardor", en: "I lost my wallet at Chorsu, and my ID card was in it.", uz: "Chorsuda hamyonimni yo'qotdim, ID-kartam ham ichida edi." },
            { who: "Madina", en: "Oh no! What did you do?", uz: "Voy! Nima qilding?" },
            { who: "Sardor", en: "I went back to the market, but nobody saw it. So I went home.", uz: "Bozorga qaytdim, lekin hech kim ko'rmagan ekan. Shuning uchun uyga ketdim." },
            { who: "Madina", en: "You poor thing!", uz: "Bechora!" },
            { who: "Sardor", en: "But in the evening a young man called me. He found it near the bus stop!", uz: "Lekin kechqurun bir yigit qo'ng'iroq qildi. Uni bekat yonidan topibdi!" },
            { who: "Madina", en: "Really? Lucky you!", uz: "Rostdanmi? Omading bor ekan!" },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Avtobusdan qoldim, shuning uchun piyoda bordim.", words: ["I", "missed", "the", "bus,", "so", "I", "walked"], extra: ["because", "lost"] } },
      ],
    },
  ],
  words: [
    { en: "suddenly", uz: "to'satdan, birdan", ipa: "ˈsʌd.ən.li", pos: "adv", ex: "Suddenly, it started to rain.", exUz: "To'satdan yomg'ir yog'a boshladi." },
    { en: "luckily", uz: "baxtimizga, omad kelib", ipa: "ˈlʌk.ɪ.li", pos: "adv", ex: "Luckily, the doctor was still there.", exUz: "Baxtimizga, shifokor hali o'sha yerda edi." },
    { en: "unfortunately", uz: "afsuski", ipa: "ʌnˈfɔː.tʃən.ət.li", pos: "adv", ex: "Unfortunately, the museum was closed.", exUz: "Afsuski, muzey yopiq edi." },
    { en: "in the end", uz: "oxir-oqibat, oxirida", ipa: "ɪn ði ˈend", pos: "phrase", ex: "In the end, we found a good hotel.", exUz: "Oxir-oqibat, yaxshi mehmonxona topdik." },
    { en: "miss", uz: "(transportdan) qolib ketmoq; sog'inmoq", ipa: "mɪs", pos: "verb", ex: "I missed the last bus.", exUz: "Oxirgi avtobusdan qolib ketdim." },
    { en: "worried", uz: "xavotirda, tashvishli", ipa: "ˈwʌr.id", pos: "adj", ex: "My mum was worried because I was late.", exUz: "Kechikkanim uchun onam xavotirda edi." },
    { en: "surprised", uz: "hayron, ajablangan", ipa: "səˈpraɪzd", pos: "adj", ex: "I was surprised to see him there.", exUz: "Uni u yerda ko'rib hayron bo'ldim." },
    { en: "spices", uz: "ziravorlar", ipa: "spaɪ.sɪz", pos: "noun", ex: "We bought some spices at the bazaar.", exUz: "Bozordan ziravorlar sotib oldik." },
    { en: "remember", uz: "eslamoq, esda tutmoq", ipa: "rɪˈmem.bə", pos: "verb", ex: "I don't remember his name.", exUz: "Uning ismini eslay olmayman." },
    { en: "nobody", uz: "hech kim", ipa: "ˈnəʊ.bə.di", pos: "pronoun", ex: "Nobody saw the accident.", exUz: "Hech kim baxtsiz hodisani ko'rmadi." },
  ],
  practice: [
    { k: "listen", say: "Unfortunately, the shop was closed.", opts: ["Fortunately, the shop was open.", "Unfortunately, the shop was closed.", "Unfortunately, the shop was crowded."], a: 1 },
    { k: "listen", say: "I was worried.", opts: ["I was worried.", "I was hurried.", "I was married."], a: 0, why: "\"WA-rid\" — **worried**." },
    { k: "match", pairs: [["and", "va"], ["but", "lekin"], ["so", "shuning uchun"], ["because", "chunki"], ["suddenly", "to'satdan"], ["in the end", "oxir-oqibat"]] },
    { k: "choice", q: "It was my birthday, ___ my friends made a cake.", opts: ["because", "so", "but", "or"], a: 1, why: "Tug'ilgan kun (sabab) → tort qilishdi (natija) → **so**." },
    { k: "choice", q: "We were late ___ there was a lot of traffic.", opts: ["so", "but", "because", "and then"], a: 2, why: "Tirbandlik — sabab → **because**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["Because I was hungry, so I ate a sandwich.", "I was hungry because I ate a sandwich.", "I was hungry, so I ate a sandwich.", "So I was hungry, because I ate a sandwich."], a: 2, why: "Sabab (*och edim*) → natija (*sendvich yedim*): **…, so …**." },
    { k: "fill", q: "I called him twice, ___ he didn't answer.", a: ["but"], uz: "Unga ikki marta qo'ng'iroq qildim, lekin javob bermadi." },
    { k: "fill", q: "She couldn't sleep ___ the neighbours were very noisy.", a: ["because", "as", "since"], uz: "Qo'shnilar juda shovqin qilgani uchun u uxlay olmadi." },
    { k: "fill", q: "It started to rain, ___ we went inside.", a: ["so"], uz: "Yomg'ir yog'a boshladi, shuning uchun ichkariga kirdik." },
    { k: "fill", q: "I opened the door and ___, a cat came into the room.", a: ["suddenly"], uz: "Eshikni ochdim va to'satdan xonaga mushuk kirib keldi." },
    { k: "tf", q: "**so** dan keyin sabab, **because** dan keyin natija keladi.", a: false, why: "Aksincha: **so** + natija, **because** + sabab." },
    { k: "tf", q: "Matnda yo'qolgan hamyonni bir yigit topib, egasiga qo'ng'iroq qildi.", a: true, why: "*A young man called me… He found my wallet near the bus stop.*" },
    { k: "order", uz: "Muzey yopiq edi, shuning uchun parkka bordik.", words: ["The", "museum", "was", "closed,", "so", "we", "went", "to", "the", "park"], extra: ["because", "go"] },
    { k: "order", uz: "U (she) kechikdi, chunki avtobusdan qolib ketdi.", words: ["She", "was", "late", "because", "she", "missed", "the", "bus"], extra: ["so", "miss"] },
    { k: "translate", uz: "Afsuski, hech kim uyda yo'q edi.", a: ["Unfortunately, nobody was at home", "Unfortunately nobody was at home", "Unfortunately, nobody was home", "Unfortunately nobody was home", "Unfortunately, there was nobody at home", "Unfortunately there was nobody at home", "Unfortunately, no one was at home", "Unfortunately no one was at home", "Unfortunately, no one was home", "Unfortunately no one was home"] },
    { k: "speak", say: "I was tired, so I went to bed early.", uz: "Charchagan edim, shuning uchun erta yotdim." },
  ],
  quiz: [
    { k: "choice", q: "I wanted to buy the jacket, ___ it was too expensive.", opts: ["so", "because", "but", "or"], a: 2 },
    { k: "choice", q: "He was hungry ___ he didn't have breakfast.", opts: ["because", "so", "but", "then"], a: 0 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Because it was hot, we went to the pool.", "It was hot, so we went to the pool.", "Because it was hot, so we went to the pool.", "We went to the pool because it was hot."], a: 2, why: "**because** va **so** bitta gapda birga kelmaydi." },
    { k: "choice", q: "We waited for two hours. ___, the train arrived.", opts: ["Because", "In the end", "Unfortunately", "Ago"], a: 1, why: "Uzoq kutishdan keyingi yakun → **In the end**." },
    { k: "fill", q: "I missed the bus, ___ I took a taxi.", a: ["so"] },
    { k: "fill", q: "I was ___ because my son didn't call me. (xavotirda)", a: ["worried"] },
    { k: "listen", say: "Luckily, nobody was hurt.", opts: ["Luckily, nobody was hurt.", "Lovely, nobody was here.", "Luckily, nobody was here."], a: 0 },
    { k: "tf", q: "Sardor hamyonini Chorsu bozorida yo'qotdi.", a: true, why: "*I lost my wallet at Chorsu…*" },
    { k: "order", uz: "Telefonim o'chgan edi, shuning uchun sizga qo'ng'iroq qila olmadim.", words: ["My", "phone", "was", "dead,", "so", "I", "couldn't", "call", "you"], extra: ["because", "called"] },
    { k: "translate", uz: "Men xursand edim, chunki imtihonni topshirdim.", a: ["I was happy because I passed the exam", "I was happy because I passed my exam", "I was happy, because I passed the exam", "I was happy, because I passed my exam", "I passed the exam, so I was happy", "I passed my exam, so I was happy", "I passed the exam so I was happy", "I passed my exam so I was happy"] },
  ],
  summary: [
    "**and** — qo'shish, **but** — qarama-qarshilik, **so** — natija (shuning uchun), **because** — sabab (chunki).",
    "Bitta vaziyat ikki xil: *I was tired, **so** I went to bed* = *I went to bed **because** I was tired*.",
    "**because** va **so** bitta gapda birga ishlatilmaydi (❌ *Because it rained, so…*).",
    "Hikoyani jonlantiring: **First, Then, Suddenly, Luckily, Unfortunately, In the end**.",
  ],
  homework: "\"Kutilmagan kun\" mavzusida 10–12 gapli hikoya yozing (yo'qolgan narsa, kechikish, kutilmagan uchrashuv…). **and, but, so, because** ning har biridan kamida bir marta, hamda **Suddenly, Luckily / Unfortunately, In the end** ni ishlating. Hikoyani ovoz chiqarib, 1 daqiqada aytib berishga harakat qiling.",
};

export default lesson;
