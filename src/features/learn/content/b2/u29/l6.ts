import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l6",
  title: "Describing graphs and data",
  titleUz: "Grafik va ma'lumotlarni tasvirlash: trend tili, taqqoslash, raqamlar (IELTS Task 1 ko'prigi)",
  goal: "Jadval, chiziqli grafik va doira diagramma (pie chart) ni inglizcha tasvirlaysiz: **trend fe'llari va otlari** (*rise, fluctuate, peak, plummet*), **daraja va tezlik ravishlari** (*sharply, gradually, slightly*), **raqam predloglari** (*rose from… to…, by, at*), **ulush** (*a quarter, 40 per cent, the majority*) va **overview** gapini tuzasiz. Bu IELTS Task 1 va ish hisobotlariga bevosita ko'prik.",
  slides: [
    {
      title: "Nima uchun kerak? Raqamlar bilan gapirish",
      blocks: [
        { t: "p", md: "Ish hisobotida, ma'ruzada va **IELTS Writing Task 1** da sizdan raqamlarni o'qish emas, **ularni izohlash** kutiladi: *nima o'zgardi, qanchalik va qachon*. Raqamlarni sanab chiqish yetarli emas: eng muhim tendensiyani topib, uni **to'g'ri so'zlar** bilan aytish kerak." },
        { t: "p", md: "Har qanday tavsif **to'rt qadam**dan iborat:" },
        {
          t: "table", head: ["Qadam", "Nima qilasiz", "Misol"],
          rows: [
            ["1. Kirish", "Grafikni o'z so'zingiz bilan aytib berasiz (paraphrase)", "The table shows the percentage of waste that was recycled in two towns."],
            ["2. Overview", "Eng umumiy tendensiya va eng katta farq", "Overall, both towns recycled far more at the end."],
            ["3. Asosiy bo'lim 1", "Birinchi guruh uchun tafsilotlar va raqamlar", "Elmford climbed from 12 to 45 per cent."],
            ["4. Asosiy bo'lim 2", "Ikkinchi guruh va taqqoslash", "By contrast, Redbury fluctuated, then surged."],
          ],
        },
        { t: "tip", tone: "info", md: "Overview'da **aniq raqam keltirmaymiz** (yoki juda kam), faqat umumiy rasmni aytamiz. Raqamlar asosiy bo'limlarda. Shaxsiy fikr (*I think, unfortunately*) yozilmaydi." },
        { t: "check", ex: { k: "choice", q: "Which sentence belongs in an overview?", opts: ["Overall, both rates increased, but Redbury ended higher than Elmford.", "In 2010, Elmford was at 18 per cent.", "I think recycling is very good.", "Redbury rose to 25 per cent in 2010."], a: 0, why: "Overview — umumiy tendensiya, raqamsiz. Boshqalari mayda tafsilot yoki shaxsiy fikr." } },
        { t: "check", ex: { k: "tf", q: "In a data report, you should give your personal opinion about the results.", a: false, why: "Ma'lumotlar tavsifida fikr bildirilmaydi: faqat faktlar va solishtirish." } },
      ],
    },
    {
      title: "Ma'lumotlar: birinchi jadval va trend tili",
      blocks: [
        { t: "p", md: "Quyidagi jadval **o'ylab topilgan** ma'lumotlar: ikki shaharchada uy chiqindisining necha foizi qayta ishlangani." },
        {
          t: "table", head: ["Year", "Elmford (%)", "Redbury (%)"],
          rows: [
            ["2005", "12", "22"],
            ["2010", "18", "25"],
            ["2015", "31", "24"],
            ["2020", "45", "38"],
            ["2025", "44", "52"],
          ],
        },
        { t: "p", md: "Trend ikki yo'l bilan aytiladi: **fe'l + ravish** (*rose sharply*) yoki **sifat + ot** (*a sharp rise*)." },
        {
          t: "table", head: ["Yo'nalish", "Fe'l", "Ot"], speak: [1, 2],
          rows: [
            ["Oshish", "rise, increase, grow, climb, soar, surge", "a rise, an increase, a growth, a surge"],
            ["Kamayish", "fall, decrease, decline, drop, dip, plummet", "a fall, a decrease, a decline, a drop, a dip"],
            ["O'zgarmaslik", "remain stable, level off, stay constant", "a plateau, stability"],
            ["O'zgaruvchan", "fluctuate, vary", "a fluctuation"],
            ["Eng yuqori nuqta", "peak, reach a peak", "a peak"],
          ],
        },
        {
          t: "examples", items: [
            { en: "Elmford's rate climbed from 12 to 45 per cent between 2005 and 2020.", uz: "Elmfordning ko'rsatkichi 2005 va 2020-yillar orasida 12 dan 45 foizgacha ko'tarildi." },
            { en: "There was a slight dip in Elmford's figure in 2025.", uz: "2025-yilda Elmford ko'rsatkichida ozgina pasayish bo'ldi." },
            { en: "Redbury's rate surged to 52 per cent in 2025.", uz: "Redbury ko'rsatkichi 2025-yilda 52 foizgacha keskin oshdi." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Rise, fall, grow, decline** o'timsiz fe'llar: passive bo'lmaydi. ~~The rate was risen~~ → **The rate rose.** *Raise* o'timli fe'l: *The council raised taxes.*" },
        { t: "check", ex: { k: "choice", q: "Elmford: 31 per cent (2015) → 45 per cent (2020). Which verb fits?", opts: ["climbed", "plummeted", "dipped", "levelled off"], a: 0, why: "31 dan 45 gacha — oshgan: **climbed**." } },
        { t: "check", ex: { k: "match", pairs: [["soar", "keskin oshmoq"], ["plummet", "keskin tushmoq"], ["level off", "o'zgarmay qolmoq"], ["fluctuate", "tebranib turmoq"], ["peak", "eng yuqori nuqtaga yetmoq"]] } },
      ],
    },
    {
      title: "Daraja, tezlik va raqam predloglari",
      blocks: [
        { t: "p", md: "O'zgarish **qanchalik katta** va **qanchalik tez** ekanini ravish yoki sifat bilan beramiz:" },
        {
          t: "table", head: ["Katta / tez", "Kichik / sekin"], speak: [0, 1],
          rows: [
            ["sharply, rapidly, dramatically, significantly", "slightly, marginally, gradually, steadily"],
            ["a sharp rise, a dramatic fall", "a slight dip, a gradual increase"],
          ],
        },
        { t: "p", md: "Raqamlar bilan **predlog** juda muhim va tez-tez xato qilinadi:" },
        {
          t: "table", head: ["Predlog", "Ma'no", "Misol"], speak: [2],
          rows: [
            ["from … to …", "qiymatning boshi va oxiri", "The rate rose from 18 to 31 per cent."],
            ["by", "o'zgarish miqdori", "It rose by 13 percentage points."],
            ["to", "oxirgi qiymat", "It fell to 24 per cent."],
            ["at", "turg'un qiymat, cho'qqi", "It peaked at 52 per cent. / It stood at 12 per cent."],
            ["between … and …", "davr", "Between 2005 and 2020, Elmford's rate more than tripled."],
          ],
        },
        { t: "tip", tone: "info", md: "**Percentage point** («foiz punkti») foizlar orasidagi farq: 18 dan 31 gacha — *13 percentage points*. *Percentage* — ulushning o'zi. Yozma: *per cent* (britaniyacha), raqam bilan *31%* ham bo'ladi." },
        { t: "check", ex: { k: "fill", q: "Redbury's rate rose ___ 24 to 38 per cent between 2015 and 2020.", a: ["from"], why: "Boshlang'ich qiymat: **from 24 to 38**.", hint: "f___" } },
        { t: "check", ex: { k: "fill", q: "The figure peaked ___ 52 per cent in 2025.", a: ["at"], why: "Cho'qqi qiymati: **peaked at**." } },
        { t: "check", ex: { k: "choice", q: "Elmford rose from 12 to 18 per cent, ___ 6 percentage points.", opts: ["by", "to", "at", "from"], a: 0, why: "O'zgarish miqdori: **by 6 percentage points**." } },
      ],
    },
    {
      title: "Ulushlar va doira diagramma",
      blocks: [
        { t: "p", md: "Doira diagramma (*pie chart*) butunning qismlarini ko'rsatadi. Bu ham **o'ylab topilgan** ma'lumot:" },
        {
          t: "table", head: ["Transport (Marlow aholisi ishga qanday boradi)", "Per cent"],
          rows: [
            ["Car", "42"],
            ["Bus", "21"],
            ["Bicycle", "17"],
            ["Walking", "14"],
            ["Train", "6"],
          ],
        },
        { t: "p", md: "Ulushlarni **kasr, foiz va umumiy so'zlar** bilan aytamiz. Taxminiy raqamlar uchun *just over, nearly, roughly, about* ishlatiladi." },
        {
          t: "table", head: ["Raqam", "Ibora", "Misol"], speak: [1, 2],
          rows: [
            ["42 per cent", "just over two-fifths", "Just over two-fifths of residents go by car."],
            ["21 per cent", "about a fifth / one in five", "About a fifth take the bus."],
            ["17 per cent", "under a fifth / roughly one in six", "Roughly one in six cycle."],
            ["50+ per cent", "the majority / more than half", "The majority use a car or bus."],
            ["bir toifa", "account for / make up", "Cars account for 42 per cent of all journeys."],
          ],
        },
        {
          t: "examples", items: [
            { en: "Walking and cycling together make up 31 per cent of journeys.", uz: "Piyoda yurish va velosiped birgalikda safarlarning 31 foizini tashkil qiladi." },
            { en: "Trains are the least popular option, at only 6 per cent.", uz: "Poyezd eng kam mashhur variant, atigi 6 foiz." },
            { en: "Car use is twice as high as bus use.", uz: "Mashinadan foydalanish avtobusdan ikki baravar yuqori." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "In the Marlow data, which statement is true?", opts: ["Cars account for 42 per cent of journeys.", "Buses are used more than cars.", "Trains are the most popular option.", "Walking is the largest category."], a: 0, why: "Jadvalda *Car 42*." } },
        { t: "check", ex: { k: "tf", q: "Walking (14) and train (6) together make up exactly a quarter of journeys in Marlow.", a: false, why: "14 + 6 = 20 foiz, bu *a fifth* (beshdan bir), to'rtdan bir emas." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbekchada «oshdi» deymiz va fe'l ko'pincha majhul yoki o'timli ko'rinadi, zamon esa ko'pincha mos kelmaydi. Inglizcha tavsifda eng ko'p xatolar:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["The rate rose to 45 per cent.", "In 2010 the rate was 18 per cent.", "It rose by 13 percentage points.", "Forty per cent of residents drive."] },
          bad: { title: "Xato", items: ["The rate was risen to 45 per cent.", "In 2010 the rate is 18 per cent.", "It rose to 13 percentage points from 18.", "Forty percents of residents drive."] } },
        { t: "check", ex: { k: "fix", wrong: "The number of visitors was increased to 500.", a: ["The number of visitors increased to 500.", "The number of visitors rose to 500."], hint: "o'timsiz fe'l", why: "**Increase / rise** o'zi o'timsiz: *increased to 500*." } },
        { t: "check", ex: { k: "fix", wrong: "In 2015 Redbury's rate is 24 per cent.", a: ["In 2015 Redbury's rate was 24 per cent.", "In 2015 Redbury's rate stood at 24 per cent."], hint: "o'tgan vaqt", why: "Grafik o'tgan yillarni ko'rsatadi: **was** / **stood at**." } },
        { t: "check", ex: { k: "fix", wrong: "Car use rose by 30 to 42 per cent.", a: ["Car use rose from 30 to 42 per cent.", "Car use rose by 12 percentage points."], hint: "from … to / by", why: "**from 30 to 42** yoki o'zgarish miqdori **by 12**." } },
        { t: "check", ex: { k: "fix", wrong: "Twenty percents of people cycle.", a: ["Twenty per cent of people cycle."], hint: "per cent", why: "**Per cent** ko'plik -s qabul qilmaydi." } },
      ],
    },
    {
      title: "O'qing: Namuna tavsif",
      blocks: [
        {
          t: "text", title: "A model description of the table", voice: "george",
          en: "The table shows the percentage of household waste that was recycled in two towns, Elmford and Redbury, between 2005 and 2025. Overall, both towns recycled much more at the end of the period than at the beginning, although Redbury's rate began to rise later. In 2005, Elmford recycled only 12 per cent of its waste, while Redbury's figure was almost twice as high, at 22 per cent. Elmford then climbed rapidly to reach 45 per cent in 2020, before dipping slightly to 44 per cent in 2025. By contrast, Redbury's figures fluctuated for ten years, rising marginally to 25 per cent in 2010 and falling to 24 per cent in 2015. After that, its rate surged, reaching 38 per cent in 2020 and peaking at 52 per cent in 2025, the highest figure in the table.",
          uz: "Jadvalda 2005 va 2025-yillar orasida ikki shaharcha, Elmford va Redburyda uy chiqindisining necha foizi qayta ishlangani ko'rsatilgan. Umuman olganda, ikkala shaharcha ham davr oxirida boshlanishiga qaraganda ancha ko'p qayta ishladi, garchi Redburyning ko'rsatkichi oshishni kechroq boshlagan bo'lsa ham. 2005-yilda Elmford chiqindisining atigi 12 foizini qayta ishladi, Redburyning ko'rsatkichi esa deyarli ikki baravar yuqori, 22 foiz edi. Keyin Elmford tez ko'tarilib, 2020-yilda 45 foizga yetdi va 2025-yilda 44 foizgacha ozgina pasaydi. Aksincha, Redburyning ko'rsatkichlari o'n yil davomida tebrandi: 2010-yilda 25 foizgacha ozgina oshdi va 2015-yilda 24 foizgacha tushdi. Shundan keyin ko'rsatkich keskin oshib, 2020-yilda 38 foizga yetdi va 2025-yilda 52 foizda eng yuqori nuqtaga chiqdi, bu jadvaldagi eng yuqori raqam.",
        },
        { t: "check", ex: { k: "choice", q: "Which sentence is the overview?", opts: ["Overall, both towns recycled much more at the end than at the beginning.", "In 2005 Elmford recycled only 12 per cent.", "Redbury peaked at 52 per cent.", "Elmford dipped slightly to 44 per cent."], a: 0, why: "Overview — umumiy tendensiya, aniq raqamsiz." } },
        { t: "check", ex: { k: "tf", q: "According to the table, Elmford's rate was higher than Redbury's in 2025.", a: false, why: "2025-yilda Elmford 44, Redbury 52: Redbury yuqori." } },
      ],
    },
    {
      title: "Dialog: Grafik haqida suhbat",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nina", en: "Leo, have you seen the chart for the report? Recycling in Redbury surged after 2015.", uz: "Leo, hisobot uchun diagrammani ko'rdingizmi? Redburyda qayta ishlash 2015-yildan keyin keskin oshdi." },
            { who: "Leo", en: "Yes. It rose from 24 to 38 per cent by 2020, and then peaked at 52 in 2025.", uz: "Ha. 2020-yilga kelib 24 dan 38 foizga ko'tarildi, keyin 2025-yilda 52 da cho'qqiga chiqdi." },
            { who: "Nina", en: "And Elmford? It climbed rapidly until 2020, but then it dipped.", uz: "Elmford-chi? U 2020-yilgacha tez ko'tarildi, lekin keyin biroz pasaydi." },
            { who: "Leo", en: "Only slightly, from 45 to 44 per cent. I'd say it levelled off.", uz: "Faqat ozgina, 45 dan 44 foizga. Menimcha, u barqarorlashdi." },
            { who: "Nina", en: "Good point. So in the overview we should say both rose, but Redbury finished higher.", uz: "To'g'ri. Demak, overview'da ikkalasi ham oshdi, lekin Redbury yuqoriroq darajada yakunladi degan bo'lamiz." },
            { who: "Leo", en: "Agreed. And let's not add opinions. Just the facts.", uz: "Roziman. Fikr qo'shmaylik. Faqat faktlar." },
            { who: "Nina", en: "Right. I'll write the introduction, and you do the details.", uz: "To'g'ri. Men kirishni yozaman, siz tafsilotlarni yozasiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Leo say about Elmford between 2020 and 2025?", opts: ["It levelled off after a slight dip.", "It surged.", "It plummeted.", "It doubled."], a: 0, why: "*Only slightly, from 45 to 44 per cent. I'd say it levelled off.*" } },
      ],
    },
  ],
  words: [
    { en: "fluctuate", uz: "tebranib turmoq, o'zgarib turmoq", ipa: "ˈflʌk.tʃu.eɪt", pos: "verb", ex: "Oil prices fluctuate a lot during the year.", exUz: "Neft narxlari yil davomida ko'p tebranadi." },
    { en: "plummet", uz: "keskin pasaymoq", ipa: "ˈplʌm.ɪt", pos: "verb", ex: "Temperatures plummeted overnight.", exUz: "Harorat tun davomida keskin tushdi." },
    { en: "soar", uz: "keskin ko'tarilmoq", ipa: "sɔː", pos: "verb", ex: "Demand for solar panels has soared.", exUz: "Quyosh panellariga talab keskin oshdi." },
    { en: "peak", uz: "eng yuqori nuqtaga yetmoq; cho'qqi", ipa: "piːk", pos: "verb", ex: "Sales peaked in December at 9,000 units.", exUz: "Savdo dekabrda 9 000 donada eng yuqori nuqtaga yetdi." },
    { en: "level off", uz: "barqarorlashmoq, o'zgarmay qolmoq", ipa: "ˌlev.əl ˈɒf", pos: "phrasal verb", ex: "The population levelled off after 2010.", exUz: "Aholi soni 2010-yildan keyin o'zgarmay qoldi." },
    { en: "surge", uz: "keskin ko'tarilmoq, to'lqin", ipa: "sɜːdʒ", pos: "verb", ex: "Online orders surged during the holidays.", exUz: "Bayram kunlarida onlayn buyurtmalar keskin oshdi." },
    { en: "dip", uz: "ozgina pasaymoq; ozgina pasayish", ipa: "dɪp", pos: "verb", ex: "Prices dipped slightly in the spring.", exUz: "Narxlar bahorda ozgina pasaydi." },
    { en: "account for", uz: "…ni tashkil qilmoq", ipa: "əˈkaʊnt fɔː", pos: "phrasal verb", ex: "Students account for a third of the visitors.", exUz: "Talabalar tashrif buyuruvchilarning uchdan birini tashkil qiladi." },
    { en: "upward trend", uz: "o'sish tendensiyasi", ipa: "ˌʌp.wəd ˈtrend", pos: "noun", ex: "There is a clear upward trend in online shopping.", exUz: "Onlayn xaridda aniq o'sish tendensiyasi bor." },
    { en: "remain stable", uz: "barqaror qolmoq", ipa: "rɪˌmeɪn ˈsteɪ.bəl", pos: "phrase", ex: "Unemployment remained stable throughout the year.", exUz: "Ishsizlik yil davomida barqaror qoldi." },
  ],
  practice: [
    { k: "choice", q: "House prices ___ from 90,000 to 240,000 in five years. (very large, fast rise)", opts: ["soared", "dipped", "levelled off", "fluctuated"], a: 0, why: "Katta va tez oshish — **soared**." },
    { k: "choice", q: "Unemployment rose ___ 6 per cent ___ 9 per cent. Which gives the correct pair?", opts: ["from … to", "by … at", "to … by", "at … from"], a: 0, why: "**from 6 to 9** — boshlang'ich va oxirgi qiymat." },
    { k: "listen", say: "The number of visitors peaked at five thousand in July.", opts: ["The number of visitors peaked at five thousand in July.", "The number of visitors peaked by five thousand in July.", "The number of visitors was peaked at five thousand in July.", "The number of visitors peak at five thousand in July."], a: 0, why: "**Peaked at** — cho'qqi qiymati; fe'l o'timsiz va o'tgan zamonda." },
    { k: "fill", q: "Sales stood ___ 200 units in January. (the exact level)", a: ["at"], uz: "Yanvarda savdo 200 dona darajasida turdi.", why: "Aniq daraja: **stood at**." },
    { k: "fill", q: "The rate rose ___ 5 percentage points, from 20 to 25 per cent. (the amount of change)", a: ["by"], why: "O'zgarish miqdori: **by**." },
    { k: "fill", q: "Cars ___ for 42 per cent of all journeys in Marlow.", a: ["account"], why: "**Account for** — ulushni tashkil qilmoq." },
    { k: "order", uz: "Mashina yo'lovchilar safarlarining 42 foizini tashkil qiladi.", words: ["Cars", "account", "for", "42", "per", "cent", "of", "journeys."], extra: ["by", "percent"], why: "**Account for** + foiz + **of**." },
    { k: "order", uz: "Elmford ko'rsatkichi 2020-yilgacha tez ko'tarildi.", words: ["Elmford's", "rate", "climbed", "rapidly", "until", "2020."], extra: ["was", "risen"], why: "O'timsiz fe'l o'tgan zamonda: **climbed**." },
    { k: "translate", uz: "Narx 20 funtdan 35 funtgacha oshdi.", a: ["The price rose from 20 pounds to 35 pounds.", "The price increased from 20 pounds to 35 pounds.", "The price rose from 20 to 35 pounds.", "The price increased from 20 to 35 pounds.", "The price went up from 20 pounds to 35 pounds."], why: "**rose from … to …**." },
    { k: "translate", uz: "Uy xo'jaliklarining deyarli yarmi ishga mashinada boradi.", a: ["Nearly half of households travel to work by car.", "Nearly half of the households travel to work by car.", "Almost half of households travel to work by car.", "Almost half of the households travel to work by car.", "Nearly half of households go to work by car.", "Almost half of households go to work by car."], why: "**Nearly / almost half of** + ko'plik ot." },
    { k: "match", pairs: [["plummet", "keskin tushmoq"], ["soar", "keskin ko'tarilmoq"], ["fluctuate", "tebranib turmoq"], ["peak", "cho'qqiga yetmoq"], ["level off", "barqarorlashmoq"]] },
    { k: "fix", wrong: "The rate was risen to 40 per cent in 2020.", a: ["The rate rose to 40 per cent in 2020."], hint: "o'timsiz fe'l", why: "**Rise** passive bo'lmaydi: *rose*." },
    { k: "fix", wrong: "In 2010 the rate is 18 per cent.", a: ["In 2010 the rate was 18 per cent.", "In 2010 the rate stood at 18 per cent."], hint: "o'tgan zamon", why: "2010 — o'tgan vaqt: **was / stood at**." },
    { k: "tf", q: "Data: Redbury 25 (2010), 24 (2015). Statement: *Redbury's rate fell slightly in 2015*.", a: true, why: "25 dan 24 gacha — ozgina pasaygan: **fell slightly**." },
    { k: "tf", q: "Data: Elmford 12, 18, 31, 45, 44. Statement: *Elmford's rate rose in every period*.", a: false, why: "Oxirgi davrda 45 dan 44 ga tushgan, ya'ni har davrda o'smagan." },
    { k: "dictation", say: "Redbury's rate surged to 52 per cent in 2025.", uz: "Redbury ko'rsatkichi 2025-yilda 52 foizgacha keskin oshdi.", why: "**Surged to** + qiymat." },
    { k: "speak", say: "Overall, both rates rose, but Redbury's finished higher.", uz: "Umuman olganda, ikkala ko'rsatkich ham oshdi, lekin Redburyniki yuqoriroq yakunlandi." },
  ],
  quiz: [
    { k: "choice", q: "Data: 52, 48, 55, 47, 54. Which verb describes the pattern?", opts: ["fluctuated", "soared", "plummeted", "levelled off"], a: 0, why: "Yuqoriga-pastga tebranish — **fluctuated**." },
    { k: "choice", q: "The figure rose ___ 3 percentage points, from 12 to 15 per cent.", opts: ["by", "to", "at", "of"], a: 0, why: "O'zgarish miqdori: **by 3 percentage points**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["Sales fell sharply in March.", "Sales was fallen sharply in March.", "Sales falled sharp in March.", "Sales are fell sharply in March."], a: 0, why: "**Fell sharply** — fe'l + ravish, o'tgan zamon." },
    { k: "choice", q: "Data: bicycle 17, walking 14, train 6 (per cent). Cycling and walking together ___ 31 per cent.", opts: ["account for", "peak at", "rise by", "level off"], a: 0, why: "17 + 14 = 31: birgalikda **account for** 31 foiz." },
    { k: "fill", q: "The population ___ off at 60,000 after 2015. (stopped changing)", a: ["levelled", "leveled"], uz: "Aholi 2015-yildan keyin 60 000 da barqarorlashdi.", why: "**Levelled off** (AmE *leveled*)." },
    { k: "fill", q: "Oil prices ___ sharply last night. (fell very quickly)", a: ["plummeted", "dropped", "fell", "tumbled", "slumped", "dived", "crashed", "collapsed"], uz: "Neft narxi kecha kechasi keskin tushdi.", why: "**Plummeted** — keskin tushmoq." },
    { k: "order", uz: "2005-yilda ko'rsatkich atigi 12 foiz edi.", words: ["In", "2005", "the", "figure", "was", "only", "12", "per", "cent."], extra: ["is", "percent"], why: "O'tgan vaqt: **was**." },
    { k: "translate", uz: "Mashina haydash avtobusdan ikki baravar yuqori.", a: ["Car use is twice as high as bus use.", "Car use is twice as high as the use of buses."], why: "**twice as high as**." },
    { k: "fix", wrong: "Fifteen percents of people walk to work.", a: ["Fifteen per cent of people walk to work."], hint: "per cent", why: "**Per cent** ko'plikda o'zgarmaydi." },
    { k: "tf", q: "*The table shows that... I think this is a very good result* — bunday jumla Task 1 hisobotida mos.", a: false, why: "Task 1 da shaxsiy fikr (*I think*) yozilmaydi." },
  ],
  summary: [
    "Tavsif tuzilmasi: **kirish → overview → asosiy bo'lim 1 → asosiy bo'lim 2**. Overview'da raqamlarsiz umumiy tendensiya.",
    "Trend fe'llari: *rise, climb, soar, surge / fall, dip, plummet / fluctuate / level off, remain stable / peak*. Trend ma'nosida hammasi o'timsiz, passive emas.",
    "Raqam predloglari: **from … to …**, **by** (o'zgarish miqdori), **to** (oxirgi qiymat), **at** (daraja, cho'qqi), **between … and …**.",
    "Ulush: **account for, make up, the majority, a quarter, nearly half, one in five**. **Per cent** hech qachon -s olmaydi.",
  ],
  homework: "O'z kundalik hayotingizdan 5 ta raqam yig'ing (masalan, haftalik qadamlar, sarflangan pul) va mini-jadval tuzing. Keyin uni 80-100 so'zda tavsiflang: kirish, overview va ikkita asosiy bo'lim. Fe'l va predloglarni (*rose from… to…, by, at*) tekshiring.",
};

export default lesson;
