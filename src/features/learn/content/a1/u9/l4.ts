import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l4",
  title: "there was / were, could / couldn't",
  titleUz: "there was / were va could / couldn't",
  goal: "O'tmishda nima **bor edi / yo'q edi** ekanini (**there was / there were, there wasn't any…, Was there…?**) va nimani **qila olardingiz / qila olmadingiz** (**could / couldn't**) aytib bera olasiz: shahringiz, bolaligingiz, biror voqea haqida.",
  slides: [
    {
      title: "there is / are → there was / were",
      blocks: [
        { t: "p", md: "Beginner'da **there is / there are** (\"... bor\") ni o'rgandik. O'tgan zamonda **is → was**, **are → were** bo'ladi. Ma'nosi — \"… bor edi\"." },
        {
          t: "table", head: ["Hozir", "O'tmish", "O'zbekcha"],
          rows: [
            ["There is a park.", "There was a park.", "Park bor edi."],
            ["There are two shops.", "There were two shops.", "Ikkita do'kon bor edi."],
            ["There is some milk.", "There was some milk.", "Biroz sut bor edi."],
            ["There are a lot of people.", "There were a lot of people.", "Ko'p odam bor edi."],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "good", md: "Tanlov keyingi so'zga bog'liq: **birlik yoki sanalmaydigan** ot → **was** (*a park, some milk, a lot of snow*); **ko'plik** → **were** (*two shops, a lot of people*)." },
        { t: "check", ex: { k: "fill", q: "There ___ a lot of cars on the road this morning.", a: ["were"], uz: "Bugun ertalab yo'lda mashina ko'p edi.", why: "**cars** — ko'plik → **were**." } },
        { t: "check", ex: { k: "fill", q: "There ___ a lot of snow last winter.", a: ["was"], uz: "O'tgan qish qor ko'p yog'gan edi.", why: "**snow** — sanalmaydi → **was**." } },
      ],
    },
    {
      title: "Inkor va savol",
      blocks: [
        {
          t: "table", head: ["", "Birlik / sanalmaydigan", "Ko'plik"],
          rows: [
            ["+", "There was a cinema.", "There were some cafés."],
            ["−", "There wasn't a cinema. / There was no cinema.", "There weren't any cafés. / There were no cafés."],
            ["?", "Was there a cinema?", "Were there any cafés?"],
            ["Javob", "Yes, there was. / No, there wasn't.", "Yes, there were. / No, there weren't."],
          ],
          speak: [1, 2],
        },
        { t: "p", md: "Savolda **was / were** oldinga chiqadi: *There were… → **Were there**…?* Miqdorni so'rash: **How many people were there?** (U yerda qancha odam bor edi?)" },
        { t: "tip", tone: "info", md: "**no** = **not any**: *There were **no** buses* = *There **weren't any** buses.* Lekin ikkalasini birga ishlatmang: ❌ *There weren't no buses.*" },
        { t: "check", ex: { k: "choice", q: "___ any people at the bus stop?", opts: ["Was there", "Were there", "There were", "Did there"], a: 1, why: "**people** — ko'plik; savol → **Were there…?**" } },
      ],
    },
    {
      title: "Uzbek o'quvchilarning odatiy xatolari",
      blocks: [
        { t: "p", md: "O'zbekchada \"Qishlog'imizda maktab **bor edi**\" deymiz. Buni so'zma-so'z tarjima qilsak, xato chiqadi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["There was a school in our village.", "There were many people at the concert.", "There was a fountain in the square."] },
          bad: { title: "Xato", items: ["In our village had a school.", "It was many people at the concert.", "Was a fountain in the square."] },
        },
        { t: "tip", tone: "warn", md: "Gapni doim **There** bilan boshlang. **It was** — boshqa narsa: u allaqachon ma'lum narsani tasvirlaydi: *There was a party. **It was** great.* (Bazm bo'ldi. U ajoyib edi.)" },
        {
          t: "examples", items: [
            { en: "There was a small café near the station. It was very cheap.", uz: "Vokzal yonida kichkina kafe bor edi. U juda arzon edi." },
            { en: "There were no taxis, so we walked.", uz: "Taksi yo'q edi, shuning uchun piyoda yurdik." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Konsertda ko'p odam bor edi.\"", opts: ["It was a lot of people at the concert.", "There were a lot of people at the concert.", "There was a lot of people at the concert.", "At the concert had a lot of people."], a: 1, why: "**There were** + ko'plik (*people*)." } },
      ],
    },
    {
      title: "could / couldn't: o'tmishdagi qobiliyat",
      blocks: [
        { t: "p", md: "**can** ning o'tgan zamon shakli — **could**. U biror narsani **qila olganingiz** yoki **qila olmaganingiz**ni bildiradi. Hamma shaxs uchun bir xil, keyin doim **V1**." },
        {
          t: "table", head: ["Hozir", "O'tmish", "O'zbekcha"],
          rows: [
            ["I can swim.", "I could swim when I was six.", "Olti yoshimda suza olardim."],
            ["She can't drive.", "She couldn't drive two years ago.", "Ikki yil oldin u mashina hayday olmasdi."],
            ["Can you hear me?", "Could you hear me?", "Meni eshita oldingmi?"],
            ["Yes, I can.", "Yes, I could. / No, I couldn't.", "Ha / yo'q."],
          ],
          speak: [0, 1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I couldn't sleep last night.", "He could read at four.", "Could you find the hotel?"] },
          bad: { title: "Xato", items: ["I couldn't slept last night.", "He could to read at four.", "Did you could find the hotel?"] },
        },
        {
          t: "sounds", items: [
            { label: "could", say: "could", uz: "**\"kud\"** — *l* umuman o'qilmaydi! *good* bilan qofiyadosh.", examples: ["could", "good"] },
            { label: "couldn't", say: "couldn't", uz: "**\"kudnt\"** — oxirgi *t* juda kuchsiz, ba'zan eshitilmaydi.", examples: ["couldn't", "I couldn't sleep."] },
          ],
        },
        { t: "check", ex: { k: "fill", q: "It was very dark, and I ___ see anything.", a: ["couldn't", "could not"], uz: "Juda qorong'i edi va men hech narsani ko'ra olmadim." } },
      ],
    },
    {
      title: "there was + couldn't birga",
      blocks: [
        { t: "p", md: "Hikoyada bu ikki tuzilma ko'pincha birga keladi: **nima bor edi / yo'q edi** → **shuning uchun nima qila oldik / qila olmadik**." },
        {
          t: "examples", items: [
            { en: "There was a power cut, so we couldn't watch TV.", uz: "Svet o'chdi, shuning uchun televizor ko'ra olmadik." },
            { en: "There were no tickets, so I couldn't go to the match.", uz: "Chipta yo'q edi, shuning uchun o'yinga bora olmadim." },
            { en: "There was a lot of snow, so the children couldn't go to school.", uz: "Qor ko'p yog'di, shuning uchun bolalar maktabga bora olmadi." },
            { en: "There was a playground near our house, so we could play outside every day.", uz: "Uyimiz yonida o'yin maydonchasi bor edi, shuning uchun har kuni tashqarida o'ynay olardik." },
          ],
        },
        { t: "tip", tone: "info", md: "Bitta aniq voqeada muvaffaqiyat haqida gapirganda inglizlar ko'pincha *could* o'rniga **managed to** yoki oddiy V2 ishlatadi (*There was a lot of traffic, but we **arrived** on time.*). Bu A2 mavzusi — hozircha **couldn't** (inkor) va umumiy qobiliyat (*I could swim at six*) ni yaxshi o'zlashtiring." },
        { t: "check", ex: { k: "order", uz: "Tirbandlik bor edi, shuning uchun taksi ololmadim.", words: ["There", "was", "a", "lot", "of", "traffic,", "so", "I", "couldn't", "get", "a", "taxi"], extra: ["were", "got"] } },
      ],
    },
    {
      title: "O'qing: Buvimning mahallasi",
      blocks: [
        {
          t: "text", title: "My grandmother's street",
          en: "My grandmother grew up in Chilanzar, in Tashkent, fifty years ago. Her street was very different then.\n\"There weren't any big shops,\" she says. \"There was one small food shop, and there were long queues every morning. There wasn't much traffic, so children could play football in the street. There was a beautiful fountain in the square, and there were apple trees everywhere. We climbed them and ate the apples!\"\n\"We couldn't watch TV every evening, because there was only one TV in the whole street. But we were happy. The street was never empty — it was always noisy and full of children.\"",
          uz: "Buvim ellik yil oldin Toshkentning Chilonzor tumanida o'sgan. Uning ko'chasi o'shanda juda boshqacha edi.\n\"Katta do'konlar yo'q edi, — deydi u. — Bitta kichkina oziq-ovqat do'koni bor edi va har ertalab uzun navbatlar bo'lardi. Mashinalar ko'p emas edi, shuning uchun bolalar ko'chada futbol o'ynay olardi. Maydonda chiroyli favvora bor edi, hamma yoqda olma daraxtlari bor edi. Biz ularga chiqib, olmalarni yerdik!\"\n\"Har kecha televizor ko'ra olmasdik, chunki butun ko'chada bitta televizor bor edi. Lekin baxtli edik. Ko'cha hech qachon bo'sh bo'lmasdi — doim shovqinli va bolalarga to'la edi.\"",
        },
        { t: "check", ex: { k: "tf", q: "Buvimning bolaligida ko'chada **ko'p mashina bor edi**.", a: false, why: "*There wasn't much traffic* — mashinalar ko'p emas edi." } },
        { t: "check", ex: { k: "choice", q: "Why couldn't they watch TV every evening?", opts: ["Because there was a power cut.", "Because there was only one TV in the street.", "Because they played football.", "Because there weren't any shops."], a: 1, why: "*…because there was only one TV in the whole street.*" } },
      ],
    },
    {
      title: "Dialog: Svet o'chganda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Why didn't you answer my message last night?", uz: "Kecha kechqurun nega xabarimga javob bermading?" },
            { who: "Otabek", en: "Sorry! There was a power cut in our area.", uz: "Kechirasan! Bizning hududda svet o'chdi." },
            { who: "Zarina", en: "Oh no! Could you charge your phone?", uz: "Voy! Telefoningni quvvatlay oldingmi?" },
            { who: "Otabek", en: "No, I couldn't. And I couldn't cook dinner, because our cooker is electric.", uz: "Yo'q, ololmadim. Kechki ovqat ham pishira olmadim, chunki plitamiz elektrda ishlaydi." },
            { who: "Zarina", en: "Were there any candles in the house?", uz: "Uyda sham bor edimi?" },
            { who: "Otabek", en: "Yes, there were. We sat in the kitchen and told stories. It was fun, actually!", uz: "Ha, bor edi. Oshxonada o'tirib, hikoya aytib berdik. Aslida qiziqarli bo'ldi!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Otabek telefonini quvvatlay oldi: **He could charge his phone.**", a: false, why: "*Could you charge your phone? — **No, I couldn't.***" } },
      ],
    },
  ],
  words: [
    { en: "playground", uz: "o'yin maydonchasi", ipa: "ˈpleɪ.ɡraʊnd", pos: "noun", ex: "There was a playground near our school.", exUz: "Maktabimiz yonida o'yin maydonchasi bor edi." },
    { en: "field", uz: "dala; maydon", ipa: "fiːld", pos: "noun", ex: "There were cotton fields around the village.", exUz: "Qishloq atrofida paxta dalalari bor edi." },
    { en: "factory", uz: "zavod, fabrika", ipa: "ˈfæk.tər.i", pos: "noun", ex: "My grandfather worked in a factory.", exUz: "Bobom zavodda ishlagan." },
    { en: "fountain", uz: "favvora", ipa: "ˈfaʊn.tɪn", pos: "noun", ex: "There was a big fountain in the square.", exUz: "Maydonda katta favvora bor edi." },
    { en: "traffic", uz: "yo'l harakati; tirbandlik", ipa: "ˈtræf.ɪk", pos: "noun", ex: "There was a lot of traffic this morning.", exUz: "Bugun ertalab tirbandlik katta edi." },
    { en: "crowded", uz: "odam gavjum, tiqilinch", ipa: "ˈkraʊ.dɪd", pos: "adj", ex: "The bazaar was very crowded on Sunday.", exUz: "Yakshanba kuni bozor juda gavjum edi." },
    { en: "empty", uz: "bo'sh", ipa: "ˈemp.ti", pos: "adj", ex: "The streets were empty at night.", exUz: "Kechasi ko'chalar bo'sh edi." },
    { en: "noisy", uz: "shovqinli", ipa: "ˈnɔɪ.zi", pos: "adj", ex: "Our old flat was very noisy.", exUz: "Eski kvartiramiz juda shovqinli edi." },
    { en: "climb", uz: "(yuqoriga) chiqmoq, tirmashib chiqmoq", ipa: "klaɪm", pos: "verb", ex: "As a child, I could climb trees very well.", exUz: "Bolaligimda daraxtga juda yaxshi chiqa olardim." },
    { en: "power cut", uz: "svet o'chishi (elektr uzilishi)", ipa: "ˈpaʊə ˌkʌt", pos: "noun", ex: "There was a power cut last night.", exUz: "Kecha kechqurun svet o'chdi." },
  ],
  practice: [
    { k: "listen", say: "There were a lot of people.", opts: ["There are a lot of people.", "There were a lot of people.", "There was a lot of people."], a: 1 },
    { k: "listen", say: "I couldn't hear you.", opts: ["I can't hear you.", "I couldn't hear you.", "I could hear you."], a: 1, why: "\"kudnt\" — **couldn't**." },
    { k: "match", pairs: [["crowded", "gavjum"], ["empty", "bo'sh"], ["noisy", "shovqinli"], ["fountain", "favvora"], ["power cut", "svet o'chishi"], ["factory", "zavod"]] },
    { k: "fill", q: "There ___ a big factory in our town. It closed in 2010.", a: ["was"] },
    { k: "fill", q: "There ___ any taxis at the station, so we walked.", a: ["weren't", "were not"], uz: "Vokzalda birorta ham taksi yo'q edi, shuning uchun piyoda yurdik.", why: "**any** + ko'plik + inkor → **weren't**." },
    { k: "fill", q: "When I was five, I ___ swim. My father taught me.", a: ["could"], uz: "Besh yoshimda suza olardim. Otam o'rgatgan." },
    { k: "fill", q: "Was there a playground? — No, there ___.", a: ["wasn't", "was not"] },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["She couldn't came to the party.", "She couldn't come to the party.", "She didn't could come to the party.", "She couldn't to come to the party."], a: 1, why: "**couldn't + V1**: *couldn't come*." },
    { k: "choice", q: "\"Bizning shahrimizda metro yo'q edi.\"", opts: ["There wasn't a metro in our city.", "In our city hadn't a metro.", "It wasn't a metro in our city.", "Our city wasn't metro."], a: 0 },
    { k: "tf", q: "*There was a lot of people at the bazaar.* — to'g'ri gap.", a: false, why: "**people** — ko'plik → *There **were** a lot of people.*" },
    { k: "tf", q: "**could** so'zida *l* harfi o'qilmaydi: \"kud\".", a: true },
    { k: "order", uz: "Maydonda favvora bor edimi?", words: ["Was", "there", "a", "fountain", "in", "the", "square?"], extra: ["Were", "It"] },
    { k: "order", uz: "Kecha kechasi uxlay olmadim.", words: ["I", "couldn't", "sleep", "last", "night"], extra: ["slept", "yesterday"] },
    { k: "translate", uz: "Bozor juda gavjum edi.", a: ["The bazaar was very crowded", "The market was very crowded", "The bazaar was really crowded", "The market was really crowded"] },
    { k: "translate", uz: "Kecha svet o'chdi.", a: ["There was a power cut yesterday", "Yesterday there was a power cut", "Yesterday, there was a power cut", "There was a power cut last night", "Last night there was a power cut", "Last night, there was a power cut"] },
    { k: "speak", say: "There was a power cut, so we couldn't watch TV.", uz: "Svet o'chdi, shuning uchun televizor ko'ra olmadik." },
  ],
  quiz: [
    { k: "choice", q: "There ___ two cinemas in my town ten years ago.", opts: ["was", "were", "is", "had"], a: 1, why: "*two cinemas* — ko'plik → **were**." },
    { k: "choice", q: "\"Choynakda suv yo'q edi.\"", opts: ["There weren't any water in the kettle.", "There wasn't any water in the kettle.", "It wasn't water in the kettle.", "There wasn't no water in the kettle."], a: 1, why: "**water** — sanalmaydi → **wasn't any**." },
    { k: "choice", q: "___ you read when you were four?", opts: ["Did", "Could", "Were", "Can"], a: 1, why: "O'tmishdagi qobiliyat haqidagi savol → **Could you…?**" },
    { k: "choice", q: "*Were there any guests?* — qisqa ijobiy javob:", opts: ["Yes, there was.", "Yes, they were.", "Yes, there were.", "Yes, it was."], a: 2 },
    { k: "fill", q: "How many people ___ there at the wedding?", a: ["were"] },
    { k: "fill", q: "The music was very loud, so I ___ hear you.", a: ["couldn't", "could not"], uz: "Musiqa juda baland edi, shuning uchun seni eshita olmadim." },
    { k: "listen", say: "Was there a café near the station?", opts: ["Was there a café near the station?", "Is there a café near the station?", "Were there cafés near the station?"], a: 0 },
    { k: "tf", q: "Buvimning hikoyasida ko'chada faqat **bitta televizor** bor edi.", a: true, why: "*…there was only one TV in the whole street.*" },
    { k: "order", uz: "Ko'chalar bo'sh edi, shuning uchun tez yetib keldik.", words: ["The", "streets", "were", "empty,", "so", "we", "arrived", "quickly"], extra: ["was", "because"] },
    { k: "translate", uz: "Men bolaligimda daraxtga chiqa olardim.", a: ["I could climb trees when I was a child", "When I was a child I could climb trees", "When I was a child, I could climb trees", "I could climb trees as a child", "As a child I could climb trees", "As a child, I could climb trees"] },
  ],
  summary: [
    "**There was** + birlik / sanalmaydigan ot; **There were** + ko'plik: *There were a lot of people.*",
    "Inkor: **There wasn't / weren't any…** yoki **There was / were no…**; savol: **Was / Were there…?** — *Yes, there was. / No, there weren't.*",
    "\"... bor edi\" ni ❌ *had* yoki ❌ *It was* bilan emas, **There was / were** bilan ayting.",
    "**could / couldn't + V1** — o'tmishdagi qobiliyat: *I could swim at six. I couldn't sleep.* (\"kud\", *l* o'qilmaydi).",
  ],
  homework: "Bolaligingizdagi ko'cha, mahalla yoki qishloq haqida 8–10 gap yozing: nima **bor edi / yo'q edi** (*There was…, There weren't any…*) va nima **qila olardingiz / qila olmasdingiz** (*We could…, I couldn't…*). Imkon bo'lsa, buvingiz yoki bobongizdan so'rab, ularning bolaligi haqida ham 3 ta gap qo'shing.",
};

export default lesson;
