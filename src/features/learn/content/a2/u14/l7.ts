import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u14-l7",
  title: "Comparing places",
  titleUz: "Shaharlarni solishtirish: o'qish va yozish",
  goal: "Ikki shahar yoki joyni solishtirib **o'qiysiz** va **yozasiz**. **but, however, while, whereas, both ... and, on the other hand** kabi bog'lovchilarni ishlatasiz, shahar haqida gapirish uchun kerakli so'zlarni (*traffic, climate, public transport, cost of living*) bilib olasiz va 8–10 gapli kichik taqqoslash matnini yozasiz.",
  slides: [
    {
      title: "Taqqoslash so'zlari",
      blocks: [
        { t: "p", md: "Ikki joyni solishtirganda faqat \"A katta, B kichik\" deyish yetarli emas. Fikrlarni bog'lash uchun maxsus so'zlar kerak. Ular **o'xshashlik** va **farqni** ko'rsatadi:" },
        {
          t: "table", head: ["Maqsad", "So'z / ibora", "Misol"], speak: [2],
          rows: [
            ["Farq (gap ichida)", "**while**, **whereas**", "Tashkent is huge, while Bukhara is small."],
            ["Farq (qarama-qarshilik)", "**but**", "Tashkent is modern, but Bukhara is ancient."],
            ["Farq (yangi gap)", "**However,**", "Tashkent is noisy. However, it is very lively."],
            ["Boshqa tomondan", "**On the other hand,**", "Taxis are fast. On the other hand, they are expensive."],
            ["O'xshashlik", "**both ... and**", "Both cities are famous and beautiful."],
            ["O'xshashlik", "**also**, **too**", "Samarkand is old. Bukhara is old, too."],
          ],
        },
        { t: "tip", tone: "warn", md: "**However** gap boshida keladi va undan keyin **vergul** qo'yiladi: *However, it's expensive.* Ikki gapni vergul bilan ulab bo'lmaydi: ❌ *It's cheap, however it's far.* ✅ *It's cheap. However, it's far.*" },
        { t: "check", ex: { k: "choice", q: "Samarkand is quiet, ___ Tashkent is very busy.", opts: ["while", "because", "so", "than"], a: 0, why: "Qarama-qarshilik → **while** / *whereas* / *but*." } },
      ],
    },
    {
      title: "Shahar haqida gapirish",
      blocks: [
        { t: "p", md: "Shaharni tasvirlashda quyidagi mavzular bo'yicha solishtirish mumkin. Har bir mavzu uchun foydali so'zlar:" },
        {
          t: "table", head: ["Mavzu", "So'zlar", "Misol"], speak: [2],
          rows: [
            ["Transport", "traffic, public transport, metro, bus, taxi", "The traffic is worse in the capital."],
            ["Ob-havo", "climate, hot, cold, rainy, dry", "The climate is hotter in the south."],
            ["Narx", "cost of living, expensive, cheap", "The cost of living is lower in small towns."],
            ["Joy", "centre, suburb, neighbourhood, sights", "There are many sights in the old town."],
            ["Hayot", "nightlife, lively, quiet, safe", "The city centre is lively at night."],
          ],
        },
        { t: "tip", tone: "info", md: "**There is / There are** bilan ham solishtirish mumkin: *There are **more** restaurants in Tashkent **than** in Khiva.* (Ko'p narsa uchun: **more + ot**; oz uchun: **fewer + sanaladigan ot**, **less + sanalmaydigan ot**.)" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["There are fewer cars in a small town.", "There is less noise in the village.", "There are more museums in the capital."] },
          bad: { title: "Xato", items: ["There are less cars in a small town.", "There is fewer noise in the village.", "There are more museum in the capital."] },
        },
        { t: "check", ex: { k: "choice", q: "There is ___ traffic in a small town than in a big city.", opts: ["less", "fewer", "least", "fewest"], a: 0, why: "*traffic* — sanalmaydi → **less**." } },
        { t: "check", ex: { k: "choice", q: "There are ___ parks in the old town than in the new town.", opts: ["less", "fewer", "littler", "more less"], a: 1, why: "*parks* — sanaladi → **fewer**." } },
      ],
    },
    {
      title: "O'qing: Toshkent va Samarqand",
      blocks: [
        {
          t: "text", title: "Tashkent and Samarkand",
          en: "Tashkent and Samarkand are two of the best-known cities in Uzbekistan, but they are quite different. Tashkent is the capital, so it is bigger and busier than Samarkand. It has a metro, wide streets and many modern buildings. Samarkand, on the other hand, is quieter and smaller, and it is famous for its ancient buildings. The traffic is worse in Tashkent, while the old town of Samarkand is easy to walk around. Both cities are popular with tourists, and both have excellent food. However, I think Tashkent has more shops and better nightlife, whereas Samarkand has more history. I'd like to live in Tashkent, but I would visit Samarkand every year.",
          uz: "Toshkent va Samarqand O'zbekistonning eng taniqli ikki shahri, lekin ular ancha farq qiladi. Toshkent poytaxt, shuning uchun Samarqanddan kattaroq va gavjumroq. Unda metro, keng ko'chalar va ko'plab zamonaviy binolar bor. Samarqand esa sokinroq va kichikroq, qadimiy binolari bilan mashhur. Toshkentda tirbandlik yomonroq, Samarqandning eski qismida esa piyoda yurish oson. Ikkala shahar ham sayyohlar orasida mashhur, ikkalasida ham ajoyib taomlar bor. Biroq, menimcha, Toshkentda do'konlar ko'proq va tungi hayot yaxshiroq, Samarqandda esa tarix ko'proq. Men Toshkentda yashashni xohlardim, lekin har yili Samarqandga borardim.",
        },
        { t: "check", ex: { k: "tf", q: "According to the text, the traffic is worse in Samarkand.", a: false, why: "*The traffic is worse in Tashkent.*" } },
        { t: "check", ex: { k: "choice", q: "What are both cities popular with?", opts: ["Students.", "Tourists.", "Farmers.", "Drivers."], a: 1, why: "*Both cities are popular with tourists.*" } },
      ],
    },
    {
      title: "Yozish: taqqoslash matni tuzilishi",
      blocks: [
        { t: "p", md: "Yaxshi taqqoslash matni 3 qismdan iborat. Har qismga 2–4 gap yetarli:" },
        {
          t: "table", head: ["Qism", "Nima yoziladi?", "Foydali qoliplar"],
          rows: [
            ["1. Kirish", "Ikki joy nomi va ular haqida umumiy fikr", "X and Y are two of the ... cities in ..., but they are different."],
            ["2. Asosiy qism", "2–3 mavzu: o'xshashlik va farqlar", "X is bigger than Y, while ... / Both ... / However, ..."],
            ["3. Xulosa", "Sizning fikringiz", "I prefer ... because ... / In my opinion, ... is better for ..."],
          ],
        },
        { t: "p", md: "**Namuna reja** (Bukhara va Tashkent):" },
        {
          t: "examples", items: [
            { en: "Bukhara and Tashkent are both interesting, but they are very different.", uz: "Buxoro va Toshkent ikkalasi ham qiziqarli, lekin juda farq qiladi.", note: "Kirish" },
            { en: "Tashkent is bigger and more modern, while Bukhara is smaller and more traditional.", uz: "Toshkent kattaroq va zamonaviyroq, Buxoro esa kichikroq va an'anaviyroq.", note: "Farq" },
            { en: "I prefer Bukhara because it is quieter and more beautiful.", uz: "Men Buxoroni afzal ko'raman, chunki u sokinroq va chiroyliroq.", note: "Xulosa" },
          ],
        },
        { t: "tip", tone: "good", md: "Maslahat: hamma gapni bir xil (*A is bigger than B*) tuzmang. Gaplarni **but / while / However** bilan bog'lab, har xil tuzilishdan foydalaning — matn tabiiyroq chiqadi." },
        { t: "check", ex: { k: "fill", q: "I ___ Bukhara because it is quieter. (afzal ko'raman)", a: ["prefer"], why: "**prefer** — afzal ko'rmoq." } },
        { t: "check", ex: { k: "choice", q: "Matn oxirida shaxsiy fikrni qaysi gap bildiradi?", opts: ["Tashkent is the capital.", "In my opinion, Bukhara is better for a holiday.", "Both cities have a metro.", "However, the traffic is worse."], a: 1, why: "*In my opinion, ...* — shaxsiy fikr / xulosa." } },
      ],
    },
    {
      title: "Namuna yozma ish",
      blocks: [
        { t: "p", md: "Mana, 8–10 gapli namuna. Qaysi gapda qanday ulovchi ishlatilganiga e'tibor bering:" },
        {
          t: "text", title: "A letter to a friend",
          en: "Dear Jasur,\nI'm writing to tell you about my two favourite cities, Samarkand and Tashkent. Both are great places to visit, but they are very different. Tashkent is bigger and noisier than Samarkand, while Samarkand is quieter and more relaxed. The public transport is better in Tashkent because it has a metro. However, the old town of Samarkand is much easier to walk around. Hotels are cheaper in some parts of Samarkand, but the nightlife is livelier in Tashkent. In my opinion, Samarkand is the best city for a short holiday. Why don't you come with me next summer?\nBest wishes,\nDilnoza",
          uz: "Aziz Jasur,\nSenga ikkita sevimli shahrim — Samarqand va Toshkent haqida yozyapman. Ikkalasi ham borishga arziydigan joy, lekin juda farq qiladi. Toshkent Samarqanddan kattaroq va shovqinliroq, Samarqand esa sokinroq va tinchroq. Toshkentda jamoat transporti yaxshiroq, chunki metro bor. Biroq, Samarqandning eski qismida piyoda yurish ancha oson. Samarqandning ba'zi joylarida mehmonxonalar arzonroq, lekin tungi hayot Toshkentda jonliroq. Menimcha, qisqa dam olish uchun Samarqand eng yaxshi shahar. Kelasi yozda men bilan borsang-chi?\nEng yaxshi tilaklar bilan,\nDilnoza",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza thinks Tashkent is the best city for a short holiday.", a: false, why: "*In my opinion, Samarkand is the best city for a short holiday.*" } },
        { t: "check", ex: { k: "choice", q: "Which city has a metro?", opts: ["Samarkand", "Tashkent", "Both", "Neither"], a: 1, why: "*The public transport is better in Tashkent because it has a metro.*" } },
      ],
    },
    {
      title: "Tipik xatolar",
      blocks: [
        { t: "p", md: "Shaharlarni solishtirganda o'zbek tilida gapiradigan o'quvchilar eng ko'p quyidagi xatolarni qiladi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Tashkent is bigger than Samarkand.", "Samarkand is more peaceful than Tashkent.", "Both cities are interesting.", "The traffic is worse in the capital."] },
          bad: { title: "Xato", items: ["Tashkent is more bigger from Samarkand.", "Samarkand is peacefuller than Tashkent.", "Both of cities are interesting.", "The traffic is more bad in the capital."] },
        },
        { t: "tip", tone: "warn", md: "**both** dan keyin **of** shart emas: *Both cities...* Agar olmosh bo'lsa, **of** kerak: *Both **of** them.* Shuningdek: **both ... and**: *Both Aziz and Laylo are students.*" },
        { t: "tip", tone: "warn", md: "❌ *The people in Tashkent is friendly.* **people** — ko'plik: ✅ *The people in Tashkent **are** friendly.*" },
        { t: "p", md: "**Maslahat:** Yozayotganda har gapdan keyin tekshiring: (1) *than* bormi? (2) *more* va *-er* birga kelmaganmi? (3) *the* orttirma daraja oldidami?" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["Both of cities are old.", "Both cities are old.", "Both city are old.", "Both the cities is old."], a: 1, why: "**Both + ko'plik ot + are**." } },
        { t: "check", ex: { k: "fill", q: "The people in Samarkand ___ very friendly. (be)", a: ["are"], why: "*people* — ko'plik → **are**." } },
      ],
    },
    {
      title: "Dialog: dam olish joyi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "Where shall we go for the holiday, Khiva or Bukhara?", uz: "Ta'tilga qayerga boramiz, Xivagami yoki Buxorogami?" },
            { who: "Kamol", en: "Both are beautiful, but Khiva is smaller, so it's easier to see everything.", uz: "Ikkalasi ham chiroyli, lekin Xiva kichikroq, shuning uchun hammasini ko'rish osonroq." },
            { who: "Laylo", en: "However, Bukhara has more restaurants and cafes.", uz: "Biroq, Buxoroda restoran va kafelar ko'proq." },
            { who: "Kamol", en: "That's true. And the hotels are cheaper there.", uz: "To'g'ri. Hotellar ham u yerda arzonroq." },
            { who: "Laylo", en: "OK, let's go to Bukhara. We can visit Khiva next year!", uz: "Mayli, Buxoroga boramiz. Xivaga kelasi yil boramiz!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Kamol says Khiva is bigger than Bukhara.", a: false, why: "*Khiva is smaller.*" } },
      ],
    },
  ],
  words: [
    { en: "traffic", uz: "tirband (transport oqimi)", ipa: "ˈtræfɪk", pos: "noun", ex: "There is a lot of traffic in the morning.", exUz: "Ertalab transport oqimi juda ko'p." },
    { en: "climate", uz: "iqlim", ipa: "ˈklaɪmət", pos: "noun", ex: "The climate here is dry and hot.", exUz: "Bu yerda iqlim quruq va issiq." },
    { en: "public transport", uz: "jamoat transporti", ipa: "ˌpʌblɪk ˈtrænspɔːt", pos: "noun", ex: "Public transport is cheap in my city.", exUz: "Mening shahrimda jamoat transporti arzon." },
    { en: "neighbourhood", uz: "mahalla, atrof", ipa: "ˈneɪbəhʊd", pos: "noun", ex: "I love my neighbourhood.", exUz: "Men o'z mahallamni yaxshi ko'raman." },
    { en: "cost of living", uz: "yashash xarajatlari", ipa: "ˌkɒst əv ˈlɪvɪŋ", pos: "noun", ex: "The cost of living is high in big cities.", exUz: "Katta shaharlarda yashash xarajatlari yuqori." },
    { en: "nightlife", uz: "tungi hayot", ipa: "ˈnaɪtlaɪf", pos: "noun", ex: "The city has great nightlife.", exUz: "Shaharda tungi hayot ajoyib." },
    { en: "suburb", uz: "shahar chekkasi", ipa: "ˈsʌbɜːb", pos: "noun", ex: "They live in a quiet suburb.", exUz: "Ular tinch shahar chekkasida yashaydi." },
    { en: "sights", uz: "diqqatga sazovor joylar", ipa: "saɪts", pos: "noun", ex: "We saw all the sights in one day.", exUz: "Barcha diqqatga sazovor joylarni bir kunda ko'rdik." },
    { en: "safe", uz: "xavfsiz", ipa: "seɪf", pos: "adj", ex: "It is a safe place for children.", exUz: "Bu bolalar uchun xavfsiz joy." },
    { en: "lively", uz: "jonli, quvnoq", ipa: "ˈlaɪvli", pos: "adj", ex: "The old market is lively on Sundays.", exUz: "Eski bozor yakshanba kunlari jonli." },
  ],
  practice: [
    { k: "match", pairs: [["traffic", "tirband, transport oqimi"], ["climate", "iqlim"], ["suburb", "shahar chekkasi"], ["sights", "diqqatga sazovor joylar"], ["nightlife", "tungi hayot"]] },
    { k: "match", pairs: [["while", "esa (qarama-qarshilik)"], ["however", "biroq"], ["both ... and", "ham ... ham"], ["on the other hand", "boshqa tomondan"]] },
    { k: "listen", say: "Tashkent is bigger than Samarkand, while Samarkand is quieter.", opts: ["Tashkent is bigger than Samarkand, while Samarkand is quieter.", "Tashkent is bigger than Samarkand, and Samarkand is bigger.", "Samarkand is bigger than Tashkent, while Tashkent is quieter."], a: 0 },
    { k: "listen", say: "However, the traffic is worse in the capital.", opts: ["However, the traffic is worse in the capital.", "However, the traffic is better in the capital.", "Because the traffic is worse in the capital."], a: 0 },
    { k: "fill", q: "Tashkent is noisy ___ Bukhara is quiet. (while/whereas)", a: ["while", "whereas"], why: "Qarama-qarshilik → **while / whereas**." },
    { k: "fill", q: "___ cities are famous for their food. (ikkalasi)", a: ["both", "Both"], why: "**Both** cities." },
    { k: "fill", q: "There is ___ noise in the village than in the city. (less/fewer)", a: ["less"], why: "*noise* sanalmaydi → **less**." },
    { k: "fill", q: "There are ___ cars in a small town. (fewer/less)", a: ["fewer"], why: "*cars* sanaladi → **fewer**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["It's cheap, however it's far.", "It's cheap. However, it's far.", "It's cheap however, it's far.", "It's cheap, but however far."], a: 1, why: "**However,** — yangi gap boshida, verguldan keyin." },
    { k: "choice", q: "\"Menimcha, Samarqand qisqa dam olish uchun yaxshiroq.\"", opts: ["In my opinion, Samarkand is better for a short holiday.", "On my opinion, Samarkand is better for a short holiday.", "In my opinion, Samarkand is more good for a short holiday.", "For my opinion, Samarkand is better holiday."], a: 0, why: "**In my opinion** + **better**." },
    { k: "tf", q: "**Both of cities are old.** — to'g'ri gap.", a: false, why: "To'g'risi: **Both cities are old.**" },
    { k: "tf", q: "**However,** gap boshida keladi va undan keyin vergul qo'yiladi.", a: true },
    { k: "order", uz: "Toshkent Samarqanddan gavjumroq, Samarqand esa sokinroq.", words: ["Tashkent", "is", "busier", "than", "Samarkand,", "while", "Samarkand", "is", "quieter."], extra: ["more", "because"] },
    { k: "translate", uz: "Ikkala shahar ham juda chiroyli.", a: ["Both cities are very beautiful.", "Both cities are beautiful.", "Both of the cities are very beautiful.", "Both of the cities are beautiful.", "Both cities are really beautiful."] },
    { k: "speak", say: "Both cities are interesting, but I prefer Samarkand.", uz: "Ikkala shahar ham qiziqarli, lekin men Samarqandni afzal ko'raman." },
  ],
  quiz: [
    { k: "choice", q: "The cost of living is ___ in the capital than in a small town.", opts: ["higher", "more high", "highest", "high"], a: 0, why: "*high* → **higher** + *than*." },
    { k: "choice", q: "Samarkand is quiet. ___, Tashkent is lively.", opts: ["However", "Because", "Both", "Than"], a: 0, why: "**However** — qarama-qarshi fikr yangi gapda." },
    { k: "choice", q: "There are ___ museums in the old town than in the new town.", opts: ["less", "fewer", "littler", "fewest"], a: 1, why: "*museums* sanaladi → **fewer**." },
    { k: "fill", q: "___ Aziz and Laylo are students. (ikkalasi ham)", a: ["both", "Both"], why: "**Both ... and ...**" },
    { k: "fill", q: "Hotels are cheaper in the suburbs, ___ the centre is more lively. (but)", a: ["but", "while", "whereas"], why: "Qarama-qarshilik → *but / while / whereas*." },
    { k: "fill", q: "I ___ Samarkand to Tashkent. (afzal ko'raman)", a: ["prefer"], why: "**prefer A to B**." },
    { k: "listen", say: "The public transport is better in the capital.", opts: ["The public transport is better in the capital.", "The public transport is the best in the capital.", "The public transport is worse in the capital."], a: 0 },
    { k: "tf", q: "**The people in Bukhara is friendly.** — to'g'ri gap.", a: false, why: "*people* ko'plik → **are**." },
    { k: "order", uz: "Toshkentda tirbandlik Samarqanddagidan yomonroq.", words: ["The", "traffic", "is", "worse", "in", "Tashkent", "than", "in", "Samarkand."], extra: ["bad", "more"] },
    { k: "translate", uz: "Samarqand sokinroq, Toshkent esa kattaroq.", a: ["Samarkand is quieter, while Tashkent is bigger.", "Samarkand is quieter, but Tashkent is bigger.", "Samarkand is quieter, whereas Tashkent is bigger.", "Samarkand is quieter and Tashkent is bigger.", "Samarkand is quieter than Tashkent, but Tashkent is bigger.", "Samarkand is quieter. Tashkent is bigger."] },
  ],
  summary: [
    "Farqni ko'rsatish: **but**, **while / whereas** (gap ichida), **However,** va **On the other hand,** (yangi gapda, vergul bilan). O'xshashlik: **both ... and**, **too**, **also**.",
    "Miqdor: **more + ot**; sanaladigan ot uchun **fewer**, sanalmaydigan uchun **less**: *fewer cars, less traffic*.",
    "Taqqoslash matni: **kirish** (ikki joy), **asosiy qism** (2–3 mavzu), **xulosa** (*In my opinion... / I prefer...*).",
    "Xatolar: ❌ *more bigger from*, ❌ *Both of cities*, ❌ *The people is*. To'g'ri: *bigger than*, *Both cities*, *The people are*.",
  ],
  homework: "Yashayotgan shahringiz (yoki qishlog'ingiz) va boshqa bir shahar haqida **8–10 gapli** taqqoslash matni yozing. Kamida bitta **while**, bitta **However,**, bitta **both**, bitta **fewer / less**, 2 ta qiyosiy va 1 ta orttirma daraja bo'lsin. Oxirida **In my opinion...** bilan xulosa yozing.",
};

export default lesson;
