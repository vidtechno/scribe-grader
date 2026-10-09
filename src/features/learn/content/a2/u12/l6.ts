import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l6",
  title: "Because, so, but, although",
  titleUz: "Because, so, but, although: sabab va qarama-qarshilik",
  goal: "Gaplarni **because** (sababi), **so** (shuning uchun), **but** (lekin) va **although** (garchi ... bo'lsa ham) bilan bog'laysiz. Uzun, ma'noli o'tmish gaplarini tuzasiz va *because ... so*, *although ... but* kabi odatiy xatolardan qochasiz.",
  slides: [
    {
      title: "Because va so: sabab va natija",
      blocks: [
        { t: "p", md: "Ikki voqea orasidagi bog'lanishni ikki xil aytish mumkin. Ular **bir narsaning ikki yuzi**:" },
        {
          t: "table", head: ["So'z", "Nimani bildiradi", "Misol"], speak: [2],
          rows: [
            ["**because**", "sabab (nima uchun?) — sababdan **oldin** turadi", "I stayed at home **because** I was ill."],
            ["**so**", "natija (shuning uchun) — natijadan **oldin** turadi", "I was ill, **so** I stayed at home."],
          ],
        },
        { t: "tip", tone: "good", md: "Savolga qarang: **Why…?** → **because** bilan javob: *Why did you stay at home? — Because I was ill.* Natija esa **so** dan keyin: *…, so I stayed at home.* \"Chunki\" = *because*, \"shuning uchun\" = *so*." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I was tired, so I went to bed.", "I went to bed because I was tired.", "Because I was tired, I went to bed."] },
          bad: { title: "Xato", items: ["Because I was tired, so I went to bed.", "I was tired because I went to bed. (ma'no teskari)", "I was tired so, I went to bed."] },
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida \"chunki ..., shuning uchun ...\" ko'pincha ikkalasi birga ishlatiladi. Inglizchada **bitta gapda faqat bittasi**: *because* **yoki** *so*, ikkalasi emas." },
        { t: "check", ex: { k: "choice", q: "It was raining, ___ we stayed at home.", opts: ["because", "so", "although", "but"], a: 1, why: "Yomg'ir — sabab, uyda qolish — natija → **so**." } },
      ],
    },
    {
      title: "But va although: qarama-qarshilik",
      blocks: [
        { t: "p", md: "Kutilmagan, qarama-qarshi ma'no uchun **but** (lekin) va **although** (garchi ... bo'lsa ham) ishlatiladi." },
        {
          t: "table", head: ["So'z", "Qanday ishlatiladi", "Misol"], speak: [2],
          rows: [
            ["**but**", "ikki gap orasida: gap, **but** gap", "It was cold, **but** we went swimming."],
            ["**although**", "gap boshida yoki o'rtada; keyin to'liq gap (ega + fe'l)", "**Although** it was cold, we went swimming."],
            ["**although**", "o'rtada", "We went swimming **although** it was cold."],
          ],
        },
        { t: "tip", tone: "info", md: "**although** = \"garchi\". Ma'nosi *but* ga yaqin, lekin tuzilishi boshqa: *although* **o'zi bog'lagan gapga** kiradi, shuning uchun *but* kerak emas. Gap boshida **although** dan keyingi bo'lakdan so'ng **vergul**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Although he was tired, he finished the work.", "He was tired, but he finished the work.", "He finished the work although he was tired."] },
          bad: { title: "Xato", items: ["Although he was tired, but he finished the work.", "He was tired although, he finished the work.", "Although he tired, he finished the work."] },
        },
        { t: "check", ex: { k: "choice", q: "___ she studied hard, she failed the exam.", opts: ["Although", "Because", "So", "But"], a: 0, why: "Kutilmagan natija: o'qidi, lekin o'ta olmadi → **Although**. (*But* bo'lsa vergul bilan: *She studied hard, but she failed.*)" } },
      ],
    },
    {
      title: "Birgalikda: to'rtta so'z",
      blocks: [
        { t: "p", md: "Bitta vaziyatni to'rt xil yo'l bilan ayting. Ma'noga qarab tanlang:" },
        {
          t: "table", head: ["Maqsad", "Gap"], speak: [1],
          rows: [
            ["Sabab", "We missed the bus **because** we got up late."],
            ["Natija", "We got up late, **so** we missed the bus."],
            ["Qarama-qarshilik", "We got up late, **but** we didn't miss the bus."],
            ["Qarama-qarshilik", "**Although** we got up late, we didn't miss the bus."],
          ],
        },
        { t: "tip", tone: "info", md: "**because of** + ot yoki -ing: *We stayed home **because of** the rain.* (yomg'ir tufayli). **because** + gap: *because it rained*. Ikkalasi ham sabab, lekin keyingi qismi farq qiladi." },
        { t: "check", ex: { k: "fill", q: "We didn't go to the beach ___ it was too cold.", a: ["because"], why: "Sabab → **because**." } },
        { t: "check", ex: { k: "fill", q: "He was very rich, ___ he wasn't happy.", a: ["but"], why: "Qarama-qarshilik, gap orasida → **but**." } },
      ],
    },
    {
      title: "Tuzilish va tinish belgilari",
      blocks: [
        { t: "p", md: "Bog'lovchi so'z gapning **boshida** yoki **o'rtasida** kelishi mumkin. Bu qoidalarni eslab qoling:" },
        {
          t: "table", head: ["Tuzilish", "Vergul", "Misol"], speak: [2],
          rows: [
            ["Because / Although boshida", "birinchi bo'lakdan keyin vergul bor", "Because it was late, we took a taxi."],
            ["... because / although o'rtada", "vergul kerak emas", "We took a taxi because it was late."],
            ["..., so ...", "so oldidan vergul", "It was late, so we took a taxi."],
            ["..., but ...", "but oldidan vergul", "It was late, but we walked home."],
          ],
        },
        { t: "tip", tone: "warn", md: "• **Because** bilan alohida (to'liq bo'lmagan) gap yozmang: *We took a taxi. Because it was late.* (❌ yozuvda) → *We took a taxi because it was late.*\n• Barcha to'rtta so'zdan keyin **to'liq gap** (ega + fe'l) kelishi kerak: *because **I was** tired*, *although **it was** cold*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["She was happy, so she won.", "She won, so she was happy.", "Although she won, so she was sad.", "She won because, she was happy."], a: 1, why: "Yutdi → xursand bo'ldi: **She won, so she was happy.** Boshqalarda ma'no yoki tuzilish xato." } },
      ],
    },
    {
      title: "O'qing: Sayohat muammolari",
      blocks: [
        {
          t: "text", title: "A difficult trip",
          en: "Last month Laylo planned a trip to Bukhara with her friend Dilnoza. They wanted to go by train, but all the tickets were sold out, so they took a bus. The journey was long because the road was bad. Although they were tired when they arrived, they went out to see the old city. They were very hungry, so they stopped at a small chaikhana and ordered plov. It was delicious, but the waiter was slow. Dilnoza wasn't angry because the view of the Lyabi-Hauz was beautiful. At the end of the day, they were exhausted, but happy.",
          uz: "O'tgan oy Laylo do'sti Dilnoza bilan Buxoroga sayohat rejalashtirdi. Ular poyezdda bormoqchi edi, lekin barcha chiptalar sotilib bo'lgan edi, shuning uchun avtobusga o'tirishdi. Yo'l yomon bo'lgani uchun safar uzoq cho'zildi. Yetib kelganlarida charchagan bo'lsalar ham, eski shaharni ko'rgani chiqishdi. Ular juda och edi, shuning uchun kichik choyxonada to'xtab, palov buyurtma qilishdi. Palov mazali edi, lekin ofitsiant sekin edi. Dilnoza jahli chiqmadi, chunki Labi Hovuzning manzarasi chiroyli edi. Kun oxirida ular juda charchagan, lekin xursand edilar.",
        },
        { t: "tip", tone: "info", md: "Matnda barcha to'rt so'z bor: *so* (took a bus; stopped at a chaikhana), *because* (road was bad; view was beautiful), *although* (tired), *but* (tickets…; plov…; exhausted…). Har birining nima uchun ishlatilganini toping." },
        { t: "check", ex: { k: "choice", q: "Why did the girls take a bus?", opts: ["They didn't like trains.", "The train tickets were sold out.", "The bus was cheaper.", "They lost their tickets."], a: 1, why: "*All the tickets were sold out, so they took a bus.*" } },
        { t: "check", ex: { k: "tf", q: "Dilnoza was angry because the waiter was slow.", a: false, why: "*Dilnoza wasn't angry because the view … was beautiful.* Ofitsiant sekin edi, lekin u jahli chiqmadi." } },
      ],
    },
    {
      title: "Dialog: Nega kechikding?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Kamol! Why are you so late? The film started an hour ago.", uz: "Kamol! Nega bunchalik kechikding? Film bir soat oldin boshlangan." },
            { who: "Kamol", en: "I'm sorry! I missed the metro because I forgot my phone, so I went back home.", uz: "Kechirasan! Telefonimni unutganim uchun metroga ulgurmadim, shuning uchun uyga qaytdim." },
            { who: "Aziz", en: "Oh no. Although you were late, you didn't call me!", uz: "Voy. Kech qolsang ham, menga qo'ng'iroq qilmading!" },
            { who: "Kamol", en: "I wanted to call, but my battery died.", uz: "Qo'ng'iroq qilmoqchi edim, lekin batareya o'chib qoldi." },
            { who: "Aziz", en: "OK. We missed the beginning, but the best part is still coming.", uz: "Mayli. Boshini o'tkazib yubordik, lekin eng zo'r joyi hali oldinda." },
            { who: "Kamol", en: "Great! I'll buy popcorn because I owe you something.", uz: "Zo'r! Popkorn olib beraman, chunki sendan qarzdorman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why was Kamol late?", opts: ["He lost his ticket.", "He forgot his phone and went back home.", "The film was cancelled.", "He fell asleep."], a: 1, why: "*I missed the metro because I forgot my phone, so I went back home.*" } },
      ],
    },
  ],
  words: [
    { en: "reason", uz: "sabab", ipa: "ˈriːzn", pos: "noun", ex: "What's the reason for the delay?", exUz: "Kechikishning sababi nima?" },
    { en: "result", uz: "natija", ipa: "rɪˈzʌlt", pos: "noun", ex: "The result was surprising.", exUz: "Natija ajablanarli bo'ldi." },
    { en: "cancel", uz: "bekor qilmoq", ipa: "ˈkænsl", pos: "verb", ex: "They cancelled the match.", exUz: "Ular o'yinni bekor qilishdi." },
    { en: "delay", uz: "kechiktirmoq; kechikish", ipa: "dɪˈleɪ", pos: "verb / noun", ex: "The flight has a two-hour delay.", exUz: "Reys ikki soatga kechikmoqda." },
    { en: "disappointed", uz: "xafa bo'lgan, umidi puchga chiqqan", ipa: "ˌdɪsəˈpɔɪntɪd", pos: "adjective", ex: "She was disappointed with the result.", exUz: "U natijadan hafsalasi pir bo'ldi." },
    { en: "exhausted", uz: "juda charchagan", ipa: "ɪɡˈzɔːstɪd", pos: "adjective", ex: "I was exhausted after the trip.", exUz: "Safardan keyin juda charchagan edim." },
    { en: "delighted", uz: "juda xursand", ipa: "dɪˈlaɪtɪd", pos: "adjective", ex: "We were delighted to see you.", exUz: "Sizni ko'rganimizdan juda xursand bo'ldik." },
    { en: "apologise", uz: "uzr so'ramoq", ipa: "əˈpɒlədʒaɪz", pos: "verb", ex: "He apologised for being late.", exUz: "U kechikkani uchun uzr so'radi." },
    { en: "lucky", uz: "omadli", ipa: "ˈlʌki", pos: "adjective", ex: "We were lucky with the weather.", exUz: "Ob-havoda omadimiz keldi." },
    { en: "sold out", uz: "sotilib bo'lgan", ipa: "səʊld aʊt", pos: "phrase", ex: "All the tickets are sold out.", exUz: "Barcha chiptalar sotilib bo'lgan." },
  ],
  practice: [
    { k: "match", pairs: [["because", "chunki"], ["so", "shuning uchun"], ["but", "lekin"], ["although", "garchi ... bo'lsa ham"]] },
    { k: "match", pairs: [["reason", "sabab"], ["result", "natija"], ["cancel", "bekor qilmoq"], ["exhausted", "juda charchagan"], ["lucky", "omadli"]] },
    { k: "listen", say: "I was tired, so I went to bed.", opts: ["I went to bed because I was tired.", "I was tired, so I went to bed.", "I was tired, but I went to bed."], a: 1 },
    { k: "listen", say: "Although it was cold, we went swimming.", opts: ["It was cold, so we went swimming.", "Although it was cold, we went swimming.", "We went swimming because it was cold."], a: 1 },
    { k: "fill", q: "She stayed at home ___ she was ill.", a: ["because"], why: "Sabab → **because**." },
    { k: "fill", q: "It was raining, ___ I took an umbrella.", a: ["so"], why: "Natija → **so**." },
    { k: "fill", q: "The film was very long, ___ I enjoyed it.", a: ["but"], uz: "Film juda uzun edi, lekin menga yoqdi.", why: "Qarama-qarshilik, gap orasida → **but**." },
    { k: "fill", q: "___ he was very tired, he finished the report.", a: ["Although"], why: "Qarama-qarshilik: **Although**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["Although it was late, we didn't go home.", "It was late, so we took a taxi.", "Because it was late, so we took a taxi.", "We took a taxi because it was late."], a: 2, why: "*Because* ... *so* birga ishlatilmaydi." },
    { k: "choice", q: "I didn't go to the party ___ I had too much work.", opts: ["although", "but", "so", "because"], a: 3, why: "Sabab → **because**." },
    { k: "tf", q: "**Although she was tired, but she cooked dinner.** — to'g'ri gap.", a: false, why: "*Although* va *but* bitta gapda birga ishlatilmaydi." },
    { k: "tf", q: "**I was hungry, so I made a sandwich.** — to'g'ri gap.", a: true },
    { k: "order", uz: "Yomg'ir yog'ayotgan edi, shuning uchun biz uyda qoldik.", words: ["It", "was", "raining,", "so", "we", "stayed", "at", "home."], extra: ["because", "but"], alt: [["We", "stayed", "at", "home", "because", "it", "was", "raining."]] },
    { k: "translate", uz: "U charchagan bo'lsa ham, ishlashda davom etdi.", a: ["Although he was tired, he kept working.", "Although she was tired, she kept working.", "Although he was tired, he continued to work.", "Although she was tired, she continued to work.", "He kept working although he was tired.", "She kept working although she was tired.", "He was tired, but he kept working.", "She was tired, but she kept working."] },
    { k: "speak", say: "Although it was raining, we went for a walk because the park was beautiful.", uz: "Yomg'ir yog'ayotgan bo'lsa ham, sayrga chiqdik, chunki park chiroyli edi." },
  ],
  quiz: [
    { k: "choice", q: "The flight was cancelled, ___ we took a train.", opts: ["because", "although", "so", "but"], a: 2, why: "Natija → **so**." },
    { k: "choice", q: "We stayed in Samarkand for a week ___ we loved the city.", opts: ["so", "because", "although", "but"], a: 1, why: "Sabab → **because**." },
    { k: "choice", q: "___ the weather was bad, the festival was great.", opts: ["Because", "So", "Although", "Then"], a: 2, why: "Qarama-qarshilik → **Although**." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["He was late although, he got the job.", "He was late, but he got the job.", "Although he was late, but he got the job.", "He was late, so but he got the job."], a: 1, why: "Gap orasida: **, but**." },
    { k: "fill", q: "I was exhausted, ___ I went to bed early.", a: ["so"], why: "Natija → **so**." },
    { k: "fill", q: "She didn't buy the dress ___ it was too expensive.", a: ["because"], why: "Sabab → **because**." },
    { k: "listen", say: "He was disappointed because he lost the match.", opts: ["He lost the match because he was disappointed.", "He was disappointed because he lost the match.", "He was disappointed, so he lost the match."], a: 1 },
    { k: "tf", q: "**We were lucky, so the weather was perfect.** — sabab-natija to'g'ri.", a: false, why: "Ma'no teskari: ob-havo yaxshi bo'lgani uchun omadli edik, emas. To'g'ri: *We were lucky **because** the weather was perfect.*" },
    { k: "order", uz: "Garchi u xursand bo'lsa ham, yig'ladi.", words: ["Although", "she", "was", "happy,", "she", "cried."], extra: ["but", "so"] },
    { k: "translate", uz: "Men uyda qoldim, chunki kasal edim.", a: ["I stayed at home because I was ill.", "I stayed home because I was ill.", "I stayed at home because I was sick.", "I stayed home because I was sick.", "Because I was ill, I stayed at home.", "Because I was sick, I stayed at home."] },
  ],
  summary: [
    "**because** — sabab (*I stayed home because I was ill*); **so** — natija (*I was ill, so I stayed home*).",
    "**but** — gap orasida, oldidan vergul; **although** — gap boshida yoki o'rtada, keyin to'liq gap.",
    "Bitta gapda **because ... so** yoki **although ... but** birga ishlatilmaydi.",
    "Gap boshidagi **Because / Although** dan keyingi bo'lakdan so'ng vergul qo'yiladi: *Although it was cold, we went out.*",
  ],
  homework: "Haftangizdagi 4 ta voqeani ikki yo'l bilan yozing: *because* bilan va *so* bilan (*I was late because the bus broke down. / The bus broke down, so I was late.*). Keyin 3 ta *although* gapi yozing (*Although I was tired, I…*) va ularni *but* bilan qayta yozing.",
};

export default lesson;
