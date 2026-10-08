import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l1",
  title: "What's the weather like?",
  titleUz: "Ob-havo va fasllar",
  goal: "Ob-havo haqida erkin so'raysiz va javob berasiz: **What's the weather like?** — *It's cold and foggy. It's minus five. It's raining.* Haroratni aytasiz, ob-havo ma'lumotini (**forecast**) tushunasiz va fasllarni tasvirlaysiz.",
  slides: [
    {
      title: "What's the weather like?",
      blocks: [
        { t: "p", md: "Beginner darsida *It's sunny, It's windy* ni o'rgandik. Endi ob-havo haqida **to'liq suhbat** qilamiz. Eng muhim savol:" },
        {
          t: "examples", items: [
            { en: "What's the weather like today?", uz: "Bugun ob-havo qanday?" },
            { en: "What's the weather like in Tashkent in July?", uz: "Iyulda Toshkentda ob-havo qanday bo'ladi?" },
            { en: "How's the weather in London?", uz: "Londonda ob-havo qanday?", note: "Bu ham to'g'ri, faqat kamroq rasmiy." },
          ],
        },
        { t: "tip", tone: "warn", md: "Bu savoldagi **like** — \"yoqtirmoq\" emas, **\"qanday, qanaqa\"** degani. Javobda **like** ishlatilmaydi:\n✅ *It's sunny.*\n❌ *It's like sunny.* ❌ *I like sunny.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["What's the weather like?", "How's the weather?", "It's very cold today."] },
          bad: { title: "Xato", items: ["How is the weather like?", "What weather is today?", "Is very cold today."] },
        },
        { t: "tip", tone: "info", md: "Ingliz gapida **ega bo'lishi shart**. O'zbekchada \"Bugun sovuq\" deymiz, inglizchada esa bo'sh joyni **It** to'ldiradi: ***It's** cold today.* Bu **It** hech narsani bildirmaydi — u faqat \"ega o'rni\"." },
        { t: "check", ex: { k: "choice", q: "To'g'ri savolni tanlang:", opts: ["How is the weather like today?", "What's the weather like today?", "What the weather is like today?", "What's weather today like?"], a: 1, why: "**What's the weather like?** yoki **How's the weather?** — *How … like* birga ishlatilmaydi." } },
      ],
    },
    {
      title: "Ot → sifat: sun → sunny",
      blocks: [
        { t: "p", md: "Ko'p ob-havo sifatlari otga **-y** qo'shib yasaladi. **It's** dan keyin **sifat** keladi, ot emas:" },
        {
          t: "table", head: ["Ot", "Sifat", "Gap", "O'zbekcha"], speak: [2],
          rows: [
            ["sun", "sunny", "It's sunny.", "quyoshli"],
            ["cloud", "cloudy", "It's cloudy.", "bulutli"],
            ["wind", "windy", "It's windy.", "shamolli"],
            ["fog", "foggy", "It's foggy.", "tumanli"],
            ["storm", "stormy", "It's stormy.", "bo'ronli"],
            ["snow", "snowy", "It's a snowy day.", "qorli"],
          ],
        },
        { t: "tip", tone: "warn", md: "**fog → foggy** — **g** ikkilanadi (*sun → sunny* kabi). *rain → rainy* da esa ikkilanmaydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It's foggy.", "There's a lot of fog.", "It's windy."] },
          bad: { title: "Xato", items: ["It's fog.", "It's a fog weather.", "It's wind."] },
        },
        { t: "check", ex: { k: "fill", q: "I can't see the road. It's very ___ this morning.", a: ["foggy"], hint: "fog", uz: "Yo'lni ko'ra olmayapman. Bugun ertalab juda tumanli.", why: "**fog** (ot) → **foggy** (sifat). **It's** dan keyin sifat keladi." } },
      ],
    },
    {
      title: "It's raining yoki It rains?",
      blocks: [
        { t: "p", md: "**rain** va **snow** — fe'l ham. Ayni hozir bo'layotgan bo'lsa — **Present Continuous**, odat yoki umumiy fakt bo'lsa — **Present Simple**:" },
        {
          t: "table", head: ["Vaziyat", "Ingliz tilida", "O'zbekcha"], speak: [1],
          rows: [
            ["hozir (derazaga qarang!)", "It's raining.", "Yomg'ir yog'yapti."],
            ["hozir", "It's snowing.", "Qor yog'yapti."],
            ["umumiy fakt", "It rains a lot in April.", "Aprelda ko'p yomg'ir yog'adi."],
            ["umumiy fakt", "It doesn't snow much in Termez.", "Termizda qor ko'p yog'maydi."],
            ["savol", "Does it snow in Tashkent?", "Toshkentda qor yog'adimi?"],
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbekcha \"Yomg'ir yog'yapti\" ni so'zma-so'z tarjima qilmang: ❌ *Rain is raining.* Inglizchada bitta fe'l yetadi: ✅ **It's raining.**" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It's raining now.", "It's rainy today.", "It snows in winter."] },
          bad: { title: "Xato", items: ["It's rain now.", "Rain is raining.", "It snowing in winter."] },
        },
        { t: "check", ex: { k: "choice", q: "Look out of the window! ___", opts: ["It snows.", "It's snowing.", "It's snow.", "Snow is snowing."], a: 1, why: "*Look!* — ayni hozir: **It's snowing.**" } },
      ],
    },
    {
      title: "Harorat: hot, warm, cool, cold, freezing",
      blocks: [
        {
          t: "table", head: ["Sifat", "Taxminan", "O'zbekcha"], speak: [0],
          rows: [
            ["hot", "30° va undan yuqori", "issiq, jazirama"],
            ["warm", "20–28°", "iliq"],
            ["cool", "10–18°", "salqin"],
            ["cold", "0–10°", "sovuq"],
            ["freezing", "0° dan past", "qahraton, juda sovuq"],
          ],
        },
        {
          t: "examples", items: [
            { en: "It's thirty-five degrees.", uz: "O'ttiz besh daraja (issiq)." },
            { en: "It's minus ten.", uz: "Minus o'n daraja." },
            { en: "It's below zero.", uz: "Noldan past." },
            { en: "What's the temperature today? — About twenty degrees.", uz: "Bugun harorat necha daraja? — Taxminan yigirma daraja." },
          ],
        },
        { t: "tip", tone: "info", md: "**I'm cold** va **It's cold** — har xil:\n• *It's cold.* — havo sovuq.\n• *I'm cold.* — menga sovuq, men sovqotyapman.\nO'zbekcha \"Menga sovuq\" ni ❌ *To me is cold* demang — ✅ **I'm cold.**" },
        {
          t: "sounds", items: [
            { label: "weather", say: "weather", uz: "**\"wedhe\"** — *th* ovozli (tilni tishlar orasiga qo'yib). *whether* bilan bir xil o'qiladi.", examples: ["weather", "What's the weather like?"] },
            { label: "degrees", say: "degrees", uz: "**\"di'gri:z\"** — urg'u ikkinchi bo'g'inda: de-**GREES**.", examples: ["degrees", "twenty degrees"] },
            { label: "temperature", say: "temperature", uz: "**\"'temprəchə\"** — 4 emas, 3 bo'g'in: **TEM**-pra-cha.", examples: ["temperature", "What's the temperature?"] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "It's minus five.", opts: ["It's minus five.", "It's plus five.", "It's minus nine."], a: 0, why: "**minus five** — minus besh." } },
      ],
    },
    {
      title: "Ob-havo ma'lumoti (forecast)",
      blocks: [
        { t: "p", md: "Ertangi ob-havo haqida **forecast** (ob-havo ma'lumoti) gapiradi. U odatda **will** bilan aytiladi. O'qing va eshiting:" },
        {
          t: "text", title: "Tomorrow's weather forecast",
          en: "Good evening! Here is the weather forecast for tomorrow.\nIn Tashkent it will be sunny in the morning, but it will be cloudy and windy in the afternoon. The temperature will be about eighteen degrees.\nIn the mountains it will be cold and wet. It will snow at night and the temperature will be minus four, so drive carefully.\nIn Nukus it will be dry and cool, about twelve degrees.\nHave a nice evening!",
          uz: "Xayrli kech! Mana ertangi ob-havo ma'lumoti.\nToshkentda ertalab quyoshli bo'ladi, lekin tushdan keyin bulutli va shamolli bo'ladi. Harorat taxminan o'n sakkiz daraja bo'ladi.\nTog'larda sovuq va nam bo'ladi. Kechasi qor yog'adi va harorat minus to'rt bo'ladi, shuning uchun ehtiyot bo'lib haydang.\nNukusda quruq va salqin bo'ladi, taxminan o'n ikki daraja.\nKechingiz xayrli o'tsin!",
        },
        { t: "tip", tone: "info", md: "**wet** — nam, ho'l (yomg'ir ko'p). **dry** — quruq (yomg'ir yo'q). *a wet day* — yomg'irli kun, *a dry summer* — quruq yoz." },
        { t: "check", ex: { k: "tf", q: "Ma'lumotga ko'ra, ertaga tog'larda qor yog'adi.", a: true, why: "*In the mountains … **It will snow at night.***" } },
        { t: "check", ex: { k: "choice", q: "What will the weather be like in Nukus?", opts: ["hot and sunny", "dry and cool", "cold and wet", "windy and freezing"], a: 1, why: "*In Nukus it will be **dry and cool**, about twelve degrees.*" } },
      ],
    },
    {
      title: "Fasllar va kiyimlar",
      blocks: [
        {
          t: "examples", items: [
            { en: "In summer it's very hot in Uzbekistan — sometimes forty degrees!", uz: "Yozda O'zbekistonda juda issiq — ba'zan qirq daraja!" },
            { en: "In autumn it's cool and sometimes rainy.", uz: "Kuzda salqin va ba'zan yomg'irli." },
            { en: "In winter it's cold and it sometimes snows.", uz: "Qishda sovuq va ba'zan qor yog'adi." },
            { en: "Spring is my favourite season. It's warm and everything is green.", uz: "Bahor — mening sevimli faslim. Iliq va hamma yoq yashil." },
          ],
        },
        { t: "tip", tone: "info", md: "Fasllar bilan **in**: *in summer* yoki *in the summer* — ikkalasi ham to'g'ri. Lekin ❌ *on summer*, ❌ *at winter* emas." },
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Hi, Tom! What's the weather like in Manchester?", uz: "Salom, Tom! Manchesterda ob-havo qanday?" },
            { who: "Tom", en: "Terrible! It's raining again, and it's only eight degrees.", uz: "Dahshat! Yana yomg'ir yog'yapti, atigi sakkiz daraja." },
            { who: "Madina", en: "Oh no! Here in Tashkent it's sunny and warm.", uz: "Voy! Bu yerda, Toshkentda quyoshli va iliq." },
            { who: "Tom", en: "Lucky you! Does it rain a lot in Uzbekistan?", uz: "Omading bor ekan! O'zbekistonda yomg'ir ko'p yog'adimi?" },
            { who: "Madina", en: "Not really. Our summers are hot and dry. But winters can be freezing.", uz: "Unchalik emas. Yozimiz issiq va quruq. Lekin qishda qahraton bo'lishi mumkin." },
            { who: "Tom", en: "I'm going to visit in May. What should I take?", uz: "May oyida bormoqchiman. Nima olay?" },
            { who: "Madina", en: "Take a T-shirt, sunglasses and a light jacket. The evenings are cool.", uz: "Futbolka, quyosh ko'zoynagi va yengil kurtka oling. Kechqurunlari salqin bo'ladi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom yashaydigan joyda hozir quyoshli va iliq.", a: false, why: "Tom: *It's **raining** again, and it's only eight degrees.* Quyoshli va iliq — Toshkentda." } },
      ],
    },
  ],
  words: [
    { en: "forecast", uz: "ob-havo ma'lumoti, bashorat", ipa: "ˈfɔː.kɑːst", pos: "noun", ex: "The forecast says it will rain tomorrow.", exUz: "Ob-havo ma'lumotiga ko'ra ertaga yomg'ir yog'adi." },
    { en: "temperature", uz: "harorat", ipa: "ˈtem.prə.tʃə", pos: "noun", ex: "The temperature is twenty degrees.", exUz: "Harorat yigirma daraja." },
    { en: "degree", uz: "daraja", ipa: "dɪˈɡriː", pos: "noun", ex: "It's thirty degrees in Bukhara.", exUz: "Buxoroda o'ttiz daraja." },
    { en: "freezing", uz: "qahraton, juda sovuq", ipa: "ˈfriː.zɪŋ", pos: "adj", ex: "It's freezing outside — wear a hat!", exUz: "Tashqarida qahraton — shapka kiying!" },
    { en: "cool", uz: "salqin", ipa: "kuːl", pos: "adj", ex: "The evenings are cool in autumn.", exUz: "Kuzda kechqurunlar salqin bo'ladi." },
    { en: "foggy", uz: "tumanli", ipa: "ˈfɒɡ.i", pos: "adj", ex: "It's foggy, so drive slowly.", exUz: "Tuman, shuning uchun sekin haydang." },
    { en: "storm", uz: "bo'ron, dovul", ipa: "stɔːm", pos: "noun", ex: "There was a big storm last night.", exUz: "Kecha tunda kuchli bo'ron bo'ldi." },
    { en: "snow", uz: "qor; qor yog'moq", ipa: "snəʊ", pos: "noun, verb", ex: "It often snows in the mountains.", exUz: "Tog'larda tez-tez qor yog'adi." },
    { en: "wet", uz: "ho'l, nam; yomg'irli", ipa: "wet", pos: "adj", ex: "It was a wet and windy day.", exUz: "Yomg'irli va shamolli kun edi." },
    { en: "dry", uz: "quruq", ipa: "draɪ", pos: "adj", ex: "Summers in Uzbekistan are hot and dry.", exUz: "O'zbekistonda yoz issiq va quruq bo'ladi." },
  ],
  practice: [
    { k: "match", pairs: [["sun", "sunny"], ["fog", "foggy"], ["cloud", "cloudy"], ["storm", "stormy"], ["wind", "windy"]] },
    { k: "match", pairs: [["hot", "issiq"], ["warm", "iliq"], ["cool", "salqin"], ["cold", "sovuq"], ["freezing", "qahraton"]] },
    { k: "listen", say: "What's the weather like?", opts: ["What's the weather like?", "Do you like the weather?", "What's the weather today?"], a: 0, why: "**What's the weather like?** — ob-havo qanday?" },
    { k: "listen", say: "It's thirteen degrees.", opts: ["It's thirty degrees.", "It's thirteen degrees.", "It's three degrees."], a: 1, why: "**thirTEEN** — urg'u oxirida; **THIRty** — boshida." },
    { k: "choice", q: "\"Bugun juda sovuq.\"", opts: ["Today very cold.", "Is very cold today.", "It's very cold today.", "It very cold today."], a: 2, why: "Ega (**It**) va fe'l (**is**) shart: ***It's** very cold today.*" },
    { k: "choice", q: "Javobni tanlang: *What's the weather like in Samarkand?*", opts: ["I like it very much.", "It's sunny and warm.", "It's like sunny.", "Yes, it is."], a: 1, why: "Savoldagi **like** = qanday. Javob: **It's + sifat**." },
    { k: "fill", q: "Take an umbrella. It's ___ outside.", a: ["raining", "rainy", "wet"], hint: "rain", uz: "Soyabon oling. Tashqarida yomg'ir yog'yapti.", why: "Ayni hozir: **It's raining.** (*rainy / wet* ham mumkin.)" },
    { k: "fill", q: "It ___ a lot in the mountains in winter.", a: ["snows"], hint: "snow", uz: "Qishda tog'larda ko'p qor yog'adi.", why: "Umumiy fakt → Present Simple, **it** → **snows**." },
    { k: "fill", q: "It's minus ten. It's ___!", a: ["freezing", "freezing cold", "very cold", "cold"], uz: "Minus o'n. Qahraton!", why: "0° dan past — **freezing**." },
    { k: "tf", q: "**I'm cold** = \"Men sovqotyapman\", **It's cold** = \"Havo sovuq\".", a: true, why: "**I'm cold** — o'zim haqimda, **It's cold** — havo haqida." },
    { k: "tf", q: "**It's fog today.** — to'g'ri gap.", a: false, why: "**It's** dan keyin sifat: ***It's foggy** today.*" },
    { k: "order", uz: "Toshkentda iyulda ob-havo qanday?", words: ["What's", "the", "weather", "like", "in", "Tashkent", "in", "July?"], extra: ["How", "on"], alt: [["What's", "the", "weather", "like", "in", "July", "in", "Tashkent?"]] },
    { k: "order", uz: "Ob-havo ma'lumotiga ko'ra ertaga qor yog'adi.", words: ["The", "forecast", "says", "it", "will", "snow", "tomorrow."], extra: ["snowy", "is"], alt: [["The", "forecast", "says", "tomorrow", "it", "will", "snow."]] },
    { k: "translate", uz: "Hozir yomg'ir yog'yapti.", a: ["It's raining now", "It is raining now", "It's raining", "It is raining", "Now it's raining", "Now it is raining", "It's raining right now", "It is raining right now"] },
    { k: "translate", uz: "Yozda issiq va quruq bo'ladi.", a: ["It's hot and dry in summer", "It is hot and dry in summer", "In summer it's hot and dry", "In summer it is hot and dry", "It's hot and dry in the summer", "It is hot and dry in the summer", "In the summer it's hot and dry", "In the summer it is hot and dry", "In summer, it's hot and dry", "In the summer, it's hot and dry", "It will be hot and dry in summer", "In summer it will be hot and dry", "Summers are hot and dry", "Summer is hot and dry"] },
    { k: "speak", say: "It's sunny and warm today, about twenty-five degrees.", uz: "Bugun quyoshli va iliq, taxminan yigirma besh daraja." },
  ],
  quiz: [
    { k: "listen", say: "It's foggy this morning.", opts: ["It's cloudy this morning.", "It's foggy this morning.", "It's foggy this evening."], a: 1 },
    { k: "choice", q: "___ the weather like in London?", opts: ["How's", "What's", "How", "What"], a: 1, why: "**What's** the weather **like**? (*How's the weather?* — *like* siz.)" },
    { k: "choice", q: "Look! ___ Let's build a snowman!", opts: ["It snows.", "It's snow.", "It's snowing.", "Snow is snowing."], a: 2, why: "*Look!* → ayni hozir: **It's snowing.**" },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["It's windy today.", "It's a lovely day.", "It's wind today.", "It's cool today."], a: 2, why: "**wind** — ot. To'g'risi: *It's **windy** today.*" },
    { k: "fill", q: "In Termez summers are very hot and ___. It rarely rains.", a: ["dry"], uz: "Termizda yoz juda issiq va quruq. Yomg'ir kam yog'adi.", why: "Yomg'ir yo'q → **dry** (quruq)." },
    { k: "fill", q: "What's the ___ today? — About fifteen degrees.", a: ["temperature"], uz: "Bugun harorat necha daraja? — Taxminan o'n besh.", why: "**temperature** — harorat." },
    { k: "tf", q: "**Does it rain a lot in April?** — to'g'ri savol.", a: true, why: "Umumiy fakt haqida savol: **Does it rain…?**" },
    { k: "order", uz: "Bu yerda qishda kamdan-kam qor yog'adi.", words: ["It", "rarely", "snows", "here", "in", "winter."], extra: ["snowing", "is"], alt: [["In", "winter", "it", "rarely", "snows", "here."], ["Here", "it", "rarely", "snows", "in", "winter."], ["It", "rarely", "snows", "in", "winter", "here."], ["Here", "in", "winter", "it", "rarely", "snows."]] },
    { k: "translate", uz: "Menga sovuq.", a: ["I'm cold", "I am cold", "I feel cold"], why: "\"Menga sovuq\" = **I'm cold**." },
    { k: "match", pairs: [["forecast", "ob-havo ma'lumoti"], ["degree", "daraja"], ["storm", "bo'ron"], ["wet", "ho'l, nam"], ["foggy", "tumanli"]] },
  ],
  summary: [
    "**What's the weather like?** = **How's the weather?** Javobda *like* yo'q: *It's sunny.*",
    "**It's + sifat**: sunny, cloudy, windy, **foggy**, stormy (*It's fog* ❌). Ega **It** shart.",
    "Hozir: **It's raining / snowing.** Odat: **It rains a lot in April. Does it snow here?**",
    "Harorat: hot > warm > **cool** > cold > **freezing**; *It's twenty **degrees**. It's minus five.*",
    "**I'm cold** (menga sovuq) ≠ **It's cold** (havo sovuq). Fasllar: **in** summer / **in the** summer.",
  ],
  homework: "Bir hafta davomida har kuni shahringiz ob-havosini inglizcha 2–3 gap bilan yozing (*Today it's cloudy and cool, about 12 degrees. It's going to rain.*). Keyin chet eldagi do'stingizga yoki xayoliy do'stga O'zbekistondagi fasllar haqida 6–8 gapli qisqa matn yozing.",
};

export default lesson;
