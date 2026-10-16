import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u21-l7",
  title: "Writing a travel review",
  titleUz: "Yozish: sayohat sharhi",
  goal: "Sayohat sharhini (shahar, tur yoki restoran) tuzilgan holda yozasiz: sarlavha, qisqa kirish, yaxshi va yomon tomonlar, tavsiya. **Although / despite**, **however** va kuchli sifatlardan foydalanasiz.",
  slides: [
    {
      title: "Sharh qanday tuziladi?",
      blocks: [
        { t: "p", md: "Sayohat sharhi (**travel review**) — boshqa sayohatchilarga yordam beradigan qisqa matn. Yaxshi sharh tartibli bo'ladi: o'quvchi kerakli narsani tez topadi." },
        {
          t: "table", head: ["Qism", "Nima yoziladi", "Misol"], speak: [2],
          rows: [
            ["1. Sarlavha", "Qisqa va aniq fikr", "A beautiful city with a few problems"],
            ["2. Kirish", "Qayerda, qachon, kim bilan", "I spent four days in Istanbul with my sister in May."],
            ["3. Yaxshi tomonlar", "Eng yoqqan 2–3 narsa", "The old town was stunning and the food was delicious."],
            ["4. Yomon tomonlar", "Muammolar (xushmuomala)", "However, the centre was very crowded."],
            ["5. Tavsiya", "Kimga tavsiya qilasiz", "I would definitely recommend it to anyone who loves history."],
          ],
        },
        { t: "tip", tone: "info", md: "Tarixni **Past Simple** bilan yozing (*we visited, the room was*), umumiy faktlar uchun **Present Simple** (*the city is famous for…*). Tavsiyada **would** ishlating: *I would recommend…*" },
        { t: "check", ex: { k: "choice", q: "Sharhning oxirida qaysi gap yoziladi?", opts: ["I would definitely recommend it to families.", "I spent four days there in May.", "The room was tiny.", "However, it was noisy."], a: 0, why: "Oxirida **tavsiya** (recommendation) yoziladi." } },
      ],
    },
    {
      title: "Kuchli sifatlar",
      blocks: [
        { t: "p", md: "*good* va *bad* so'zlari juda umumiy. B1 darajada aniqroq sifatlar kerak:" },
        {
          t: "table", head: ["Yaxshi", "Ma'nosi", "Yomon", "Ma'nosi"], speak: [0, 2],
          rows: [
            ["stunning", "juda go'zal", "disappointing", "ko'ngilni to'ldirmaydigan"],
            ["spotless", "juda toza", "overpriced", "narxiga arzimaydigan, qimmat"],
            ["cosy", "shinam", "tiny", "juda kichik"],
            ["spacious", "keng", "noisy", "shovqinli"],
            ["friendly", "samimiy", "rude", "qo'pol"],
          ],
        },
        { t: "tip", tone: "good", md: "**value for money** — narxiga arziydi: *The room was good value for money.* Narxga arzimasa: *It wasn't good value for money.* Sharhlarda bu ibora tez-tez uchraydi." },
        { t: "compare",
          good: { title: "Aniq sharh", items: ["The view from the room was stunning.", "The hotel was spotless.", "The meal was overpriced."] },
          bad: { title: "Umumiy sharh", items: ["The view was very good.", "The hotel was very clean.", "The meal was not good."] } },
        { t: "check", ex: { k: "choice", q: "The room was very small. It was ___.", opts: ["tiny", "spotless", "stunning", "cosy"], a: 0, why: "Juda kichik → **tiny**." } },
        { t: "check", ex: { k: "choice", q: "We paid a lot for a very ordinary dinner. It was ___.", opts: ["overpriced", "spacious", "friendly", "stunning"], a: 0, why: "Narxiga arzimaydi → **overpriced**." } },
      ],
    },
    {
      title: "Bog'lovchilar: although, despite, however",
      blocks: [
        { t: "p", md: "Yaxshi va yomon tomonlarni bir gapda bog'lash uchun qarama-qarshilik so'zlari kerak. Farqini yaxshi bilib oling:" },
        {
          t: "table", head: ["So'z", "Keyin nima keladi", "Misol"], speak: [2],
          rows: [
            ["although", "to'liq gap (ega + fe'l)", "Although the room was small, it was very clean."],
            ["despite / in spite of", "ot yoki -ing", "Despite the rain, we enjoyed the tour."],
            ["however", "yangi gap boshida, vergul bilan", "The food was great. However, the service was slow."],
            ["but", "gap o'rtasida", "The hotel was cheap, but the beds were hard."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Although** va **but** ni bir gapda ishlatmang: ~~Although it was cheap, but it was good.~~ Faqat bittasi kerak. **Despite** dan keyin **of** yo'q: ~~despite of~~. Lekin *in spite **of***." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["Although it was expensive, we loved it.", "Despite the noise, we slept well.", "In spite of being tired, we went out."] },
          bad: { title: "Xato", items: ["Although it was expensive, but we loved it.", "Despite of the noise, we slept well.", "Despite it was cold, we went out."] } },
        { t: "check", ex: { k: "fill", q: "___ the weather was bad, we had a great day.", a: ["Although"], why: "Keyin to'liq gap (*the weather was bad*) → **Although**." } },
        { t: "check", ex: { k: "fill", q: "We enjoyed the trip ___ the rain.", a: ["despite", "in spite of"], why: "Keyin ot (*the rain*) → **despite** yoki **in spite of**." } },
      ],
    },
    {
      title: "Majhul nisbat va nisbiy gaplar sharhda",
      blocks: [
        { t: "p", md: "Bu bosqichda o'rgangan grammatikangiz sharhni boyitadi. Ega noma'lum yoki ahamiyatsiz bo'lsa — **passive**; qo'shimcha ma'lumot uchun — **who / which / where**:" },
        {
          t: "examples", items: [
            { en: "The hotel, which was built in 1900, is full of character.", uz: "1900-yilda qurilgan mehmonxona o'ziga xos ruhga to'la.", note: "Passive + vergul bilan nisbiy gap." },
            { en: "The room was cleaned every day.", uz: "Xona har kuni tozalanardi.", note: "Passive: kim tozalagani muhim emas." },
            { en: "The staff, who were very helpful, spoke good English.", uz: "Xodimlar, ular juda yordamsevar edi, yaxshi ingliz tilida gapirishardi." },
            { en: "It is a small restaurant where you can try local dishes.", uz: "Bu mahalliy taomlarni tatib ko'rish mumkin bo'lgan kichik restoran.", note: "**where** — joy haqida." },
          ],
        },
        { t: "tip", tone: "info", md: "Sharhda har gap bir xil uzunlikda bo'lmasin. Qisqa gaplar orasida bitta-ikkita uzunroq gap (*which / who* bilan) yozing — matn tabiiy chiqadi." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri yozilgan?", opts: ["The museum, which was opened in 2010, is free on Sundays.", "The museum which was opened in 2010 is free on Sundays.", "The museum, that was opened in 2010, is free on Sundays.", "The museum, who was opened in 2010, is free on Sundays."], a: 0, why: "Qo'shimcha ma'lumotda vergul va **which** (**that** emas)." } },
      ],
    },
    {
      title: "O'qing: namunaviy sharh",
      blocks: [
        {
          t: "text", title: "Three days in Istanbul",
          en: "A beautiful city with a few problems. I spent three days in Istanbul with my sister in May. Although it was busy, the city was stunning. We went sightseeing every morning, and the old town, which has beautiful mosques and markets, was my favourite part. The food was delicious and good value for money. However, the centre was very crowded, and some restaurants near the main sights were overpriced. In spite of this, we had a wonderful time. I would definitely recommend Istanbul to anyone who loves history and good food. My advice is to go in spring, when the weather is pleasant. Overall, I give it four stars out of five.",
          uz: "Bir nechta muammosi bor go'zal shahar. May oyida opam bilan Istanbulda uch kun o'tkazdim. Shahar gavjum bo'lsa ham, juda go'zal edi. Har ertalab shaharni aylanib ko'rdik, go'zal masjid va bozorlari bor eski shahar menga eng yoqdi. Taomlar mazali va narxiga arzirdi. Biroq markaz juda gavjum edi va asosiy joylar yonidagi ba'zi restoranlar qimmat edi. Shunga qaramay, biz juda yaxshi dam oldik. Istanbulni tarix va yaxshi taomni yaxshi ko'radigan har kimga albatta tavsiya qilaman. Maslahatim: ob-havo yoqimli bo'lganda, bahorda boring. Umuman olganda, men besh yulduzdan to'rttasini beraman.",
        },
        { t: "check", ex: { k: "tf", q: "The writer thinks the food was overpriced.", a: false, why: "Taomlar *good value for money*; qimmat bo'lgani faqat asosiy joylar yonidagi ba'zi restoranlar." } },
        { t: "check", ex: { k: "choice", q: "Which linking word shows a problem after the good points?", opts: ["However", "Overall", "Although", "Because"], a: 0, why: "Matnda: *However, the centre was very crowded.*" } },
      ],
    },
    {
      title: "Reja va tekshiruv ro'yxati",
      blocks: [
        { t: "p", md: "Yozishdan oldin qisqa reja tuzing. Yozib bo'lgach, quyidagilarni tekshiring:" },
        {
          t: "table", head: ["Tekshirish", "Savol"],
          rows: [
            ["Tuzilish", "Sarlavha, kirish, yaxshi va yomon tomonlar, tavsiya bormi?"],
            ["Sifatlar", "Kamida 3 ta aniq sifat (*stunning, tiny, overpriced*) ishlatdimmi?"],
            ["Bog'lovchilar", "Kamida 2 ta (*although, however, despite*) bormi?"],
            ["Zamon", "Voqea Past Simple da, umumiy fakt Present Simple dami?"],
            ["Tavsiya", "*I would recommend…* bilan tugadimmi?"],
          ],
        },
        { t: "tip", tone: "good", md: "Foydali iboralar: **Overall, …** (umuman), **What's more, …** (bundan tashqari), **My advice is to …** (maslahatim), **It is worth visiting** (borishga arziydi), **I wouldn't recommend it to …** (… ga tavsiya qilmayman)." },
        { t: "check", ex: { k: "order", uz: "Umuman olganda, men uni juda tavsiya qilaman.", words: ["Overall,", "I", "would", "highly", "recommend", "it."], extra: ["will", "recommended"], why: "**Overall** + **would recommend**." } },
      ],
    },
  ],
  words: [
    { en: "stunning", uz: "juda go'zal, hayratlanarli", ipa: "ˈstʌn.ɪŋ", pos: "adj", ex: "The view from the top was stunning.", exUz: "Tepadan ko'rinish hayratlanarli edi." },
    { en: "spotless", uz: "juda toza", ipa: "ˈspɒt.ləs", pos: "adj", ex: "Our room was spotless.", exUz: "Xonamiz juda toza edi." },
    { en: "overpriced", uz: "narxiga arzimaydigan, haddan tashqari qimmat", ipa: "ˌəʊ.vəˈpraɪst", pos: "adj", ex: "The drinks were overpriced.", exUz: "Ichimliklar haddan tashqari qimmat edi." },
    { en: "authentic", uz: "haqiqiy, asl", ipa: "ɔːˈθen.tɪk", pos: "adj", ex: "We ate at an authentic Italian restaurant.", exUz: "Biz haqiqiy italyan restoranida ovqatlandik." },
    { en: "cosy", uz: "shinam", ipa: "ˈkəʊ.zi", pos: "adj", ex: "It is a cosy little cafe near the river.", exUz: "Bu daryo yaqinidagi shinam kichik kafe." },
    { en: "mediocre", uz: "o'rtamiyona", ipa: "ˌmiː.diˈəʊ.kə", pos: "adj", ex: "The food was mediocre and rather expensive.", exUz: "Taom o'rtamiyona va ancha qimmat edi." },
    { en: "worthwhile", uz: "arziydigan, foydali", ipa: "ˌwɜːθˈwaɪl", pos: "adj", ex: "The long walk to the castle was well worthwhile.", exUz: "Qal'agacha uzoq yurish o'zini oqladi." },
    { en: "rating", uz: "baho, reyting", ipa: "ˈreɪ.tɪŋ", pos: "noun", ex: "The hotel has a high rating online.", exUz: "Mehmonxonaning internetdagi bahosi yuqori." },
    { en: "value for money", uz: "narxiga arziydigan", ipa: "ˌvæl.juː fə ˈmʌn.i", pos: "phrase", ex: "The meal was great value for money.", exUz: "Ovqat narxiga juda arzidi." },
    { en: "off the beaten track", uz: "sayyohlar kam boradigan joyda", ipa: "ɒf ðə ˌbiː.tən ˈtræk", pos: "phrase", ex: "We found a lovely café off the beaten track.", exUz: "Biz sayyohlar kam boradigan joyda yoqimli kafe topdik." },
  ],
  practice: [
    { k: "match", pairs: [["stunning", "juda go'zal"], ["spotless", "juda toza"], ["overpriced", "narxiga arzimaydigan"], ["tiny", "juda kichik"], ["cosy", "shinam"]] },
    { k: "choice", q: "**___ the room was small, it was very comfortable.**", opts: ["Although", "Despite", "However", "Because"], a: 0, why: "Keyin to'liq gap → **Although**." },
    { k: "choice", q: "**We had a great time ___ the bad weather.**", opts: ["despite", "although", "however", "but"], a: 0, why: "Keyin ot (*the bad weather*) → **despite**." },
    { k: "choice", q: "**The hotel was cheap. ___, the breakfast was disappointing.**", opts: ["However", "Although", "Despite", "Because"], a: 0, why: "Yangi gap boshida, vergul bilan → **However**." },
    { k: "fill", q: "Our room had a ___ view of the mountains. (very beautiful)", a: ["stunning"], why: "Juda go'zal → **stunning**." },
    { k: "fill", q: "In spite ___ the crowds, we enjoyed the tour.", a: ["of"], why: "**in spite of** + ot." },
    { k: "fill", q: "I would ___ recommend this restaurant. The food was excellent.", a: ["definitely"], why: "**would definitely recommend** — albatta tavsiya qilaman." },
    { k: "fill", q: "The old town, ___ is full of small cafes, is my favourite part.", a: ["which"], why: "Joy/narsa haqida vergul bilan → **which**." },
    { k: "order", uz: "Xona kichkina bo'lsa ham, juda toza edi.", words: ["Although", "the", "room", "was", "tiny,", "it", "was", "spotless."], extra: ["but", "despite"], why: "**Although** + gap, vergul, asosiy gap; **but** kerak emas." },
    { k: "order", uz: "Yomg'ir tufayli ham, biz sayrdan zavqlandik.", words: ["Despite", "the", "rain,", "we", "enjoyed", "the", "walk."], extra: ["Although", "of"], why: "**Despite** + ot." },
    { k: "translate", uz: "Men uni tarixni yaxshi ko'radigan har kimga tavsiya qilaman.", a: ["I would recommend it to anyone who loves history.", "I would recommend it to anyone who likes history.", "I recommend it to anyone who loves history."], why: "**anyone who** + fe'l; **would recommend** — xushmuomala tavsiya." },
    { k: "tf", q: "**Although it was cheap, but it was good** — bu gap to'g'ri.", a: false, why: "**Although** va **but** birga kelmaydi." },
    { k: "tf", q: "Sharhning oxirida odatda tavsiya yoki umumiy baho yoziladi.", a: true, why: "*Overall, I would recommend…*" },
    { k: "listen", say: "The room was tiny, but it was spotless.", opts: ["The room was tiny, but it was spotless.", "The room was tiny, so it was spotless.", "The room was cosy, and it was spotless."], a: 0 },
    { k: "fix", wrong: "Despite of the noise, we slept well.", a: ["Despite the noise, we slept well.", "In spite of the noise, we slept well."], hint: "Despite dan keyin of yo'q", why: "**despite** + ot; **of** faqat *in spite of* da." },
    { k: "speak", say: "Overall, I would definitely recommend this hotel.", uz: "Umuman olganda, bu mehmonxonani albatta tavsiya qilaman." },
  ],
  quiz: [
    { k: "choice", q: "**The food was ___. We paid a lot and it wasn't tasty.**", opts: ["overpriced", "spotless", "stunning", "cosy"], a: 0, why: "Qimmat va yomon → **overpriced**." },
    { k: "choice", q: "**___ being tired, we walked around the old town.**", opts: ["In spite of", "Although", "However", "Because"], a: 0, why: "Keyin -ing → **in spite of**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Although it was noisy, we slept well.", "Although it was noisy, but we slept well.", "Despite it was noisy, we slept well.", "Despite of the noise we slept well."], a: 0, why: "**Although** + gap, **but** yo'q." },
    { k: "fill", q: "The service was slow. ___, the staff were friendly.", a: ["However"], why: "Qarama-qarshilik, yangi gap → **However**." },
    { k: "fill", q: "My ___ for this hotel is four stars out of five.", a: ["rating"], why: "Baho → **rating**." },
    { k: "fill", q: "The tour was cheap and the guide was excellent. It was good ___ for money.", a: ["value"], why: "**value for money**." },
    { k: "listen", say: "I would definitely recommend it to families.", opts: ["I would definitely recommend it to families.", "I will definitely recommend it to families.", "I would not recommend it to families."], a: 0 },
    { k: "tf", q: "**Despite the rain** iborasidan keyin ot keladi.", a: true, why: "**Despite** + ot yoki -ing." },
    { k: "fix", wrong: "Although the museum was crowded, but we enjoyed it.", a: ["Although the museum was crowded, we enjoyed it.", "The museum was crowded, but we enjoyed it."], why: "**Although** va **but** birga ishlatilmaydi." },
    { k: "order", uz: "Mehmonxona 1900-yilda qurilgan va juda go'zal.", words: ["The", "hotel,", "which", "was", "built", "in", "1900,", "is", "beautiful."], extra: ["who", "that"], why: "Vergul + **which** + passive." },
  ],
  summary: [
    "Sharh tuzilishi: **sarlavha, kirish, yaxshi tomonlar, yomon tomonlar, tavsiya**. Voqealar Past Simple da, umumiy faktlar Present Simple da.",
    "Kuchli sifatlar: **stunning, spotless, cosy** (yaxshi); **tiny, overpriced, disappointing** (yomon); **value for money**.",
    "**Although** + gap (**but** yo'q!), **despite / in spite of** + ot yoki -ing, **However,** — yangi gap boshida.",
    "Bu bosqich grammatikasi sharhni boyitadi: **passive** (*was built*) va **which / who / where** bilan nisbiy gaplar.",
    "Tavsiya: **I would definitely recommend it to anyone who …**, **Overall, …**",
  ],
  homework: "Yaqinda borgan shahar, restoran yoki mehmonxonangiz haqida 8–10 gapdan iborat sharh yozing. Rejaga rioya qiling: sarlavha, kirish, yaxshi tomonlar, yomon tomonlar, tavsiya. Kamida 3 ta kuchli sifat, 2 ta bog'lovchi (*although, however, despite*) va 1 ta *which* gapini ishlating.",
};

export default lesson;
