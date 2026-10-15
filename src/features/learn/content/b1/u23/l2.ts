import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l2",
  title: "Advantages and disadvantages",
  titleUz: "Afzallik va kamchiliklar: taqqoslash va xulosa",
  goal: "Biror narsaning **afzallik va kamchiliklarini** (*advantage, disadvantage, benefit, drawback*) aytasiz, **while, whereas, although, despite** bilan qarama-qarshilikni ifodalaysiz, taqqoslash shakllarini kengaytirasiz va **overall, on balance** bilan xulosa qilasiz.",
  slides: [
    {
      title: "Afzallik va kamchilik",
      blocks: [
        { t: "p", md: "Biror narsa haqida munozarada ikkala tomonni ham ko'rsatish kerak. Buning uchun asosiy so'zlar:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["advantage / benefit", "afzallik, foyda", "The main advantage of the metro is speed."],
            ["disadvantage / drawback", "kamchilik", "One drawback is that it gets crowded."],
            ["pros and cons", "afzallik va kamchiliklar", "Let's think about the pros and cons."],
            ["cost / risk", "xarajat / xavf", "The risk is that prices may rise."],
          ],
        },
        {
          t: "examples", items: [
            { en: "The main advantage of living in a city is that there are more jobs.", uz: "Shaharda yashashning asosiy afzalligi — ish ko'proq.", note: "advantage of + -ing" },
            { en: "One disadvantage of online classes is that you can feel alone.", uz: "Onlayn darslarning bir kamchiligi — odam yolg'iz his qilishi mumkin." },
            { en: "Working from home has several benefits.", uz: "Uydan ishlashning bir nechta foydasi bor." },
          ],
        },
        { t: "tip", tone: "warn", md: "**advantage of** + ot yoki -ing (*the advantage of living here*). Xato: ~~the advantage to live~~. Ikki narsani solishtirsak: **an advantage over** (*an advantage over other cities*)." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["The advantage to live here is the price.", "The advantage of living here is the price.", "The advantage of live here is the price.", "The advantage for living here is the price."], a: 1, why: "**advantage of** + -ing: *the advantage of living*." } },
      ],
    },
    {
      title: "Qarama-qarshilik: while, although, despite",
      blocks: [
        { t: "p", md: "Bir gapda ikki qarama-qarshi fikrni birlashtirish uchun bog'lovchi so'zlar kerak. Ularning gapdagi o'rniga e'tibor bering:" },
        {
          t: "table", head: ["So'z", "Keyin nima keladi", "Misol"], speak: [2],
          rows: [
            ["while / whereas", "to'liq gap", "Trains are fast, whereas buses are cheaper."],
            ["although / even though", "to'liq gap", "Although it is expensive, many people buy it."],
            ["despite / in spite of", "ot yoki -ing", "Despite the rain, we went out."],
            ["but", "to'liq gap (o'rtada)", "It is cheap, but it is slow."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Although it was late, we continued.", "Despite being tired, she finished.", "In spite of the cost, he bought it."] },
          bad: { title: "Xato", items: ["Although it was late, but we continued.", "Despite he was tired, she finished.", "Despite of the cost, he bought it."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida «garchi … lekin» deymiz, inglizchada esa **although** bilan **but** birga ishlatilmaydi: ~~Although it was late, but we continued~~. Faqat bittasi kerak. Shuningdek **despite** dan keyin **of** yo'q: ~~despite of~~." },
        { t: "check", ex: { k: "fill", q: "___ the weather was bad, we enjoyed the trip.", a: ["Although", "Though", "Even though"], why: "Keyin to'liq gap (*the weather was bad*) → **although**." } },
        { t: "check", ex: { k: "fill", q: "Despite ___ tired, he went to the gym.", a: ["being", "feeling"], why: "**despite** + -ing: *despite being tired*." } },
      ],
    },
    {
      title: "Taqqoslash: kengaytirilgan shakllar",
      blocks: [
        { t: "p", md: "Taqqoslash shakllarini Pre-Intermediate da o'rgangansiz. Endi ularni kuchaytirish va aniqlash usullarini qo'shamiz:" },
        {
          t: "table", head: ["Qolip", "Misol"], speak: [1],
          rows: [
            ["much / far / a lot + comparative", "Flying is much faster than driving."],
            ["slightly / a bit + comparative", "This flat is slightly bigger."],
            ["as … as / not as … as", "The bus is not as fast as the train."],
            ["the more …, the more …", "The more you practise, the better you speak."],
            ["by far the + superlative", "It is by far the cheapest option."],
          ],
        },
        {
          t: "examples", items: [
            { en: "Living in the centre is far more expensive than living outside it.", uz: "Markazda yashash shahar chetidagidan ancha qimmat.", note: "far + more … than" },
            { en: "The new model is slightly lighter than the old one.", uz: "Yangi model eskisidan sal yengilroq." },
            { en: "The more people use bikes, the less traffic there is.", uz: "Odamlar velosipeddan qancha ko'p foydalansa, tirbandlik shuncha kam bo'ladi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**very** bilan qiyosiy daraja ishlatilmaydi: ~~very faster~~. To'g'risi — **much / far / a lot faster**. Shuningdek ~~more faster~~ emas, faqat **faster**." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Trains are very faster than buses.", "Trains are much faster than buses.", "Trains are more faster than buses.", "Trains are much fast than buses."], a: 1, why: "Qiyosiy daraja oldidan **much / far / a lot** keladi, **very** emas." } },
      ],
    },
    {
      title: "Bog'lovchilar bilan to'liq javob",
      blocks: [
        { t: "p", md: "Oldingi darsda o'rgangan **however, on the other hand, in addition** so'zlarini endi afzallik-kamchilik matnida birga ishlatamiz. Tuzilma:" },
        {
          t: "table", head: ["Qism", "Misol"],
          rows: [
            ["Kirish", "Online shopping has become very popular."],
            ["Afzallik", "The main advantage is that it saves time. In addition, prices are often lower."],
            ["Kamchilik", "However, you cannot try the product. On the other hand, returns are usually easy."],
            ["Xulosa", "Overall, I think the advantages outweigh the disadvantages."],
          ],
        },
        { t: "p", md: "**outweigh** — «ustun kelmoq, og'irroq bo'lmoq». *The benefits outweigh the risks* — afzalliklar xavfdan ustun." },
        { t: "tip", tone: "good", md: "Xulosa iboralari: **Overall, / All in all, / On balance, / To sum up,** — ulardan keyin vergul qo'ying. **On balance** — hamma narsani o'ylab ko'rib degani." },
        { t: "check", ex: { k: "choice", q: "Xulosani boshlash uchun qaysi ibora mos?", opts: ["For instance,", "On balance,", "In addition,", "Whereas,"], a: 1, why: "**On balance / Overall / All in all** — xulosa." } },
        { t: "check", ex: { k: "order", uz: "Umuman olganda, afzalliklar kamchiliklardan ustun.", words: ["Overall,", "the", "advantages", "outweigh", "the", "disadvantages."], extra: ["weigh", "advantage"] } },
      ],
    },
    {
      title: "Muammo va yechim",
      blocks: [
        { t: "p", md: "Munozarada ko'pincha muammoni aytib, **yechim taklif qilamiz**. Quyidagi qoliplar yordam beradi:" },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["Muammo", "The problem is that there are too many cars."],
            ["Sabab", "This happens because public transport is slow."],
            ["Yechim", "One solution is to build more bus lanes."],
            ["Taklif", "We could / should introduce a small fee."],
            ["Natija", "As a result, there would be less traffic."],
          ],
        },
        {
          t: "examples", items: [
            { en: "One way to reduce waste is to use less plastic.", uz: "Chiqindini kamaytirishning bir yo'li — kamroq plastik ishlatish.", note: "solution/way + to + fe'l" },
            { en: "The government should invest more in public transport.", uz: "Hukumat jamoat transportiga ko'proq mablag' sarflashi kerak." },
          ],
        },
        { t: "tip", tone: "info", md: "**One solution is to** + fe'l (*to build*), **is that** + gap emas. Xato: ~~One solution is build more roads~~. To'g'risi: *One solution is to build more roads.*" },
        { t: "check", ex: { k: "fix", wrong: "One solution is build more bus lanes.", a: ["One solution is to build more bus lanes."], hint: "to kerak", why: "**solution is to** + fe'l." } },
      ],
    },
    {
      title: "Dialog: shaharda yoki qishloqda?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Madina", en: "Would you prefer to live in a big city or a small town?", uz: "Katta shaharda yashashni xohlaysizmi yoki kichik shaharchadami?" },
            { who: "Ben", en: "Well, the main advantage of a city is that there are more jobs. However, it is far more expensive.", uz: "Shaharning asosiy afzalligi — ish ko'p. Lekin u ancha qimmat." },
            { who: "Madina", en: "That's true. On the other hand, small towns are quieter, whereas cities are very noisy.", uz: "To'g'ri. Boshqa tomondan, kichik shaharchalar tinchroq, shaharlar esa juda shovqinli." },
            { who: "Ben", en: "Right. Although I like quiet places, I think I'd miss the cinemas and restaurants.", uz: "To'g'ri. Tinch joylarni yoqtirsam ham, kinoteatr va restoranlarni sog'inardim." },
            { who: "Madina", en: "Overall, which one is better for you?", uz: "Umuman olganda, qaysi biri siz uchun yaxshiroq?" },
            { who: "Ben", en: "On balance, I'd choose the city, at least while I'm young.", uz: "Hamma narsani hisobga olsam, shaharni tanlayman, hech bo'lmaganda yoshligimda." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Ben thinks small towns are noisier than cities.", a: false, why: "Aksincha: Madina shaharlar shovqinli dedi, Ben shaharni tanladi." } },
      ],
    },
    {
      title: "O'qing: Mashinasiz hayot",
      blocks: [
        {
          t: "text", title: "Life without a car",
          en: "Many people in big cities are thinking about giving up their cars. The main advantage is the money you save on petrol, parking and repairs. In addition, you can walk or cycle more, which is good for your health. However, there are some drawbacks. Public transport is not always reliable, and in bad weather a car is much more comfortable. Although a bike is cheaper, it is not as safe as a bus on busy roads. One solution is to use the car only when you really need it. Overall, I think the benefits outweigh the problems, especially for people who live near the centre.",
          uz: "Katta shaharlardagi ko'p odamlar mashinasidan voz kechishni o'ylamoqda. Asosiy afzallik — benzin, to'xtash joyi va ta'mirga tejaladigan pul. Bundan tashqari, ko'proq piyoda yurish yoki velosiped haydash mumkin, bu salomatlik uchun yaxshi. Lekin kamchiliklar ham bor. Jamoat transporti doim ishonchli emas, yomon ob-havoda esa mashina ancha qulay. Velosiped arzonroq bo'lsa ham, gavjum yo'llarda avtobusdek xavfsiz emas. Bir yechim — mashinadan faqat haqiqatan kerak bo'lganda foydalanish. Umuman olganda, afzalliklar muammolardan ustun deb o'ylayman, ayniqsa markaz yaqinida yashovchilar uchun.",
        },
        { t: "check", ex: { k: "tf", q: "The writer thinks cycling is safer than taking the bus.", a: false, why: "Matnda velosiped *not as safe as a bus* deyilgan." } },
      ],
    },
  ],
  words: [
    { en: "advantage", uz: "afzallik", ipa: "ədˈvɑːn.tɪdʒ", pos: "noun", ex: "A big advantage of this job is the flexible hours.", exUz: "Bu ishning katta afzalligi — moslashuvchan ish vaqti." },
    { en: "disadvantage", uz: "kamchilik", ipa: "ˌdɪs.ədˈvɑːn.tɪdʒ", pos: "noun", ex: "The only disadvantage is the long journey.", exUz: "Yagona kamchilik — uzoq yo'l." },
    { en: "benefit", uz: "foyda", ipa: "ˈben.ɪ.fɪt", pos: "noun", ex: "Regular exercise has many benefits.", exUz: "Muntazam mashq qilishning foydasi ko'p." },
    { en: "drawback", uz: "kamchilik, salbiy tomon", ipa: "ˈdrɔː.bæk", pos: "noun", ex: "The main drawback of the plan is the cost.", exUz: "Rejaning asosiy kamchiligi — narxi." },
    { en: "risk", uz: "xavf", ipa: "rɪsk", pos: "noun", ex: "There is a small risk of delay.", exUz: "Kechikish xavfi ozgina bor." },
    { en: "compare", uz: "solishtirmoq", ipa: "kəmˈpeər", pos: "verb", ex: "It is useful to compare prices before you buy.", exUz: "Sotib olishdan oldin narxlarni solishtirish foydali." },
    { en: "consequence", uz: "oqibat", ipa: "ˈkɒn.sɪ.kwəns", pos: "noun", ex: "One consequence of the change was higher prices.", exUz: "O'zgarishning bir oqibati narxlarning oshishi bo'ldi." },
    { en: "solution", uz: "yechim", ipa: "səˈluː.ʃən", pos: "noun", ex: "We need a simple solution to this problem.", exUz: "Bu muammoga oddiy yechim kerak." },
    { en: "outweigh", uz: "ustun kelmoq", ipa: "ˌaʊtˈweɪ", pos: "verb", ex: "In this case, the benefits outweigh the costs.", exUz: "Bu holatda foyda xarajatdan ustun." },
    { en: "overall", uz: "umuman olganda", ipa: "ˌəʊ.vərˈɔːl", pos: "adv", ex: "Overall, the course was very useful.", exUz: "Umuman olganda, kurs juda foydali bo'ldi." },
  ],
  practice: [
    { k: "choice", q: "The main ___ of working from home is that you save travel time.", opts: ["advantage", "disadvantage", "risk", "cost"], a: 0, why: "Vaqt tejash — **afzallik**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Although it was cheap, but I didn't buy it.", "Although it was cheap, I didn't buy it.", "Despite it was cheap, I didn't buy it.", "Despite of cheap, I didn't buy it."], a: 1, why: "**although** bilan **but** ishlatilmaydi." },
    { k: "choice", q: "Cars are ___ more expensive than bikes.", opts: ["very", "much", "more", "most"], a: 1, why: "Qiyosiy daraja oldidan **much** (**very** emas)." },
    { k: "listen", say: "On balance, I think the benefits outweigh the risks.", opts: ["On balance, I think the benefits outweigh the risks.", "On the other hand, I think the benefits are small.", "On balance, I think the risks are too high.", "In addition, I think the benefits outweigh the cost."], a: 0, why: "**On balance … outweigh** — xulosa." },
    { k: "fill", q: "___ the heavy traffic, we arrived on time.", a: ["Despite", "In spite of"], uz: "Qattiq tirbandlikka qaramay, vaqtida yetib keldik.", why: "Ot oldidan **despite / in spite of**." },
    { k: "fill", q: "Trains are fast, ___ buses are cheaper.", a: ["whereas", "while"], uz: "Poyezdlar tez, avtobuslar esa arzonroq.", why: "Qarama-qarshilik: **whereas / while**." },
    { k: "fill", q: "The ___ you study, the better you speak.", a: ["more"], uz: "Qancha ko'p o'qisangiz, shuncha yaxshi gapirasiz.", why: "**the more …, the better …**" },
    { k: "order", uz: "Bir yechim — ko'proq avtobus yo'laklarini qurish.", words: ["One", "solution", "is", "to", "build", "more", "bus", "lanes."], extra: ["building", "that"], why: "**solution is to** + fe'l." },
    { k: "order", uz: "Bu — eng arzon variant, farq katta.", words: ["It", "is", "by", "far", "the", "cheapest", "option."], extra: ["more", "much"], why: "**by far the** + so'zning eng yuqori darajasi." },
    { k: "translate", uz: "Uydan ishlashning bir nechta afzalligi bor.", a: ["Working from home has several advantages.", "Working from home has some advantages.", "Working from home has several benefits.", "Working from home has some benefits.", "Working from home has a few advantages."], why: "**advantages / benefits** — afzalliklar." },
    { k: "translate", uz: "Garchi u qimmat bo'lsa ham, men uni yoqtiraman.", a: ["Although it is expensive, I like it.", "Even though it is expensive, I like it.", "Though it is expensive, I like it.", "Although it's expensive, I like it."], why: "**although** + gap, **but** kerak emas." },
    { k: "match", pairs: [["advantage", "afzallik"], ["drawback", "kamchilik"], ["risk", "xavf"], ["solution", "yechim"], ["consequence", "oqibat"]] },
    { k: "tf", q: "**Very faster** — qiyosiy darajaning to'g'ri shakli.", a: false, why: "To'g'risi: **much faster / far faster**." },
    { k: "fix", wrong: "Despite of the rain, we played football.", a: ["Despite the rain, we played football.", "In spite of the rain, we played football."], hint: "despite dan keyin of yo'q", why: "**despite of** emas, **despite** yoki **in spite of**." },
    { k: "speak", say: "The main advantage is that it saves time, but the main drawback is the price.", uz: "Asosiy afzallik — vaqtni tejaydi, lekin asosiy kamchilik — narxi." },
  ],
  quiz: [
    { k: "choice", q: "**The advantage ___ having a car is freedom.**", opts: ["of", "to", "for", "at"], a: 0, why: "**advantage of** + -ing." },
    { k: "choice", q: "**___ it was raining, we went for a walk.**", opts: ["Although", "Despite", "However", "In spite"], a: 0, why: "Keyin to'liq gap → **although**." },
    { k: "choice", q: "**Bikes are ___ than cars in the city centre.**", opts: ["more quick", "much quicker", "very quicker", "much more quick"], a: 1, why: "**quick** → *quicker*; oldidan **much**." },
    { k: "choice", q: "Xulosa uchun qaysi ibora mos?", opts: ["All in all,", "For example,", "In addition,", "Whereas,"], a: 0, why: "**All in all** — xulosa." },
    { k: "fill", q: "In ___ of the cost, many people travel abroad.", a: ["spite"], uz: "Narxiga qaramay, ko'p odam chet elga sayohat qiladi.", why: "**in spite of**." },
    { k: "fill", q: "One way to save money ___ to cook at home.", a: ["is"], uz: "Pul tejashning bir yo'li — uyda ovqat pishirish.", why: "**One way … is to** + fe'l." },
    { k: "dictation", say: "The benefits outweigh the risks.", uz: "Foyda xavfdan ustun.", why: "**outweigh** — ustun kelmoq." },
    { k: "fix", wrong: "Although he was tired, but he continued.", a: ["Although he was tired, he continued.", "He was tired, but he continued."], hint: "Bitta bog'lovchi yetarli", why: "**although** bilan **but** birga kelmaydi." },
    { k: "order", uz: "Qancha ko'p mashq qilsangiz, shuncha yaxshi.", words: ["The", "more", "you", "practise,", "the", "better", "it", "is."], extra: ["most", "best"], alt: [["The", "more", "you", "practise,", "the", "better."]], why: "**the more …, the better**" },
    { k: "translate", uz: "Umuman olganda, afzalliklar kamchiliklardan ustun.", a: ["Overall, the advantages outweigh the disadvantages.", "All in all, the advantages outweigh the disadvantages.", "On balance, the advantages outweigh the disadvantages."], why: "**Overall … outweigh**" },
  ],
  summary: [
    "**advantage / benefit** va **disadvantage / drawback**: *the advantage of living in a city*, *one drawback is that…*",
    "Qarama-qarshilik: **while / whereas / although** + gap, **despite / in spite of** + ot yoki -ing. **although** bilan **but** ishlatilmaydi; ~~despite of~~ emas.",
    "Taqqoslash: **much / far / slightly + comparative**, **not as … as**, **the more …, the more …**, **by far the + superlative**. ~~very faster~~ xato.",
    "Xulosa: **Overall, / All in all, / On balance,** va **outweigh**. Yechim: **One solution is to** + fe'l.",
  ],
  homework: "Bitta mavzu tanlang (masalan, *studying abroad* yoki *online shopping*). 3 ta afzallik va 3 ta kamchilik yozing. Ularni **however, in addition, on the other hand, although** bilan bog'lab 6-8 gaplik matn tuzing va oxirida **Overall** bilan xulosa qiling.",
};

export default lesson;
