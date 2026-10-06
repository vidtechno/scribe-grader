import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l4",
  title: "Sports & hobbies: play, go, do",
  titleUz: "Sport va hobbi: play, go, do",
  goal: "Sport va hobbi haqida to'g'ri fe'l bilan gapirasiz: **play tennis, go swimming, do yoga**. Musiqa asboblari bilan **the**, *go to the gym* va *go swimming* farqini, sport joylari va **match, win** so'zlarini o'rganasiz.",
  slides: [
    {
      title: "Uchta fe'l: play, go, do",
      blocks: [
        { t: "p", md: "O'zbekchada *futbol o'ynayman, suzish bilan shug'ullanaman, yoga qilaman* — har xil aytiladi, ingliz tilida ham shunday. Lekin u yerda qat'iy qoida bor — sport turiga qarab **uchta fe'ldan** biri tanlanadi:" },
        {
          t: "table", head: ["Fe'l", "Qachon", "Misollar"],
          rows: [
            ["play", "to'p bilan o'yinlar, raqib bilan o'ynaladigan o'yinlar", "play football, tennis, basketball, volleyball, chess, cards"],
            ["go", "-ing bilan tugaydigan harakatlar (biror joyga borib)", "go swimming, running, cycling, hiking, skiing, fishing"],
            ["do", "to'psiz, ko'pincha yakka mashg'ulotlar, kurash turlari", "do yoga, karate, judo, gymnastics, exercise, athletics"],
          ],
          speak: [2],
        },
        { t: "tip", tone: "good", md: "Oddiy yodlash usuli: **to'p bor → play**. **-ing bor → go**. **ikkalasi ham yo'q → do**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I play volleyball.", "We go cycling.", "She does karate."] },
          bad: { title: "Xato", items: ["I do volleyball.", "We play cycling.", "She plays karate."] },
        },
        { t: "check", ex: { k: "choice", q: "\"Onam har kuni ertalab yoga qiladi.\"", opts: ["My mum plays yoga every morning.", "My mum goes yoga every morning.", "My mum does yoga every morning.", "My mum do yoga every morning."], a: 2, why: "To'p yo'q, -ing yo'q → **do yoga**; *she* → **does**." } },
      ],
    },
    {
      title: "Tuzoqlar: the, to, -ing",
      blocks: [
        { t: "p", md: "Bu uch fe'l bilan o'zbek o'quvchilari ko'pincha **artikl** va **predlog** da adashadi. Uchta qoidani yodlang:" },
        {
          t: "table", head: ["Qoida", "To'g'ri", "Xato"],
          rows: [
            ["Sport oldida **the** yo'q", "play football, play chess", "play the football"],
            ["Musiqa asbobi oldida **the** bor", "play the piano, play the guitar, play the dutar", "do the guitar, play guitar the"],
            ["go + -ing — **to** siz", "go swimming, go fishing", "go to swimming"],
            ["joyga borish — **to the**", "go to the gym, go to the pool", "go gym"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "warn", md: "**go swimming** = suzishga bormoq (harakat). **go to the pool** = basseynga bormoq (joy). Ikkisini aralashtirmang: ❌ *go to swimming*. Ikkalasini birga aytmoqchi bo'lsangiz: ✅ *I go swimming **at** the pool.*" },
        { t: "tip", tone: "info", md: "Umuman sport haqida: **I do a lot of sport.** (Britaniya), **I like sport.** Bizning milliy kurash: **do wrestling** yoki shunchaki **do kurash**." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["He plays the guitar in a band.", "He plays guitar the in a band.", "He does the guitar in a band.", "He goes guitar in a band."], a: 0, why: "Musiqa asbobi → **play the guitar**." } },
        { t: "check", ex: { k: "choice", q: "\"Biz shanba kuni baliq oviga boramiz.\"", opts: ["We go to fishing on Saturday.", "We go fishing on Saturday.", "We do fishing on Saturday.", "We play fishing on Saturday."], a: 1, why: "**go + -ing**, **to** siz: *go fishing*." } },
      ],
    },
    {
      title: "Zamonlar bilan: played, went, did",
      blocks: [
        { t: "p", md: "Fe'llar barcha zamonlarda ishlaydi. **go** va **do** — noto'g'ri fe'llar ekanini unutmang:" },
        {
          t: "table", head: ["Hozir (odatda)", "Hozir (ayni paytda)", "O'tgan zamon"],
          rows: [
            ["I play tennis.", "I'm playing tennis.", "I played tennis."],
            ["She goes running.", "She's going running.", "She went running."],
            ["He does karate.", "He's doing karate.", "He did karate."],
          ],
          speak: [0, 1, 2],
        },
        {
          t: "examples", items: [
            { en: "How often do you go swimming?", uz: "Qanchalik tez-tez suzishga borasiz?" },
            { en: "Do you play any sports?", uz: "Biror sport bilan shug'ullanasizmi?" },
            { en: "Last summer we went hiking in Chimgan.", uz: "O'tgan yozda Chimyonga piyoda sayohatga bordik." },
            { en: "My son did judo when he was ten.", uz: "O'g'lim o'n yoshida dzyudo bilan shug'ullangan." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "Yesterday I ___ cycling with my friends. (go)", a: ["went"], uz: "Kecha do'stlarim bilan velosipedda sayrga bordim.", why: "**go → went**: *went cycling*." } },
      ],
    },
    {
      title: "Qayerda? Natija qanday?",
      blocks: [
        { t: "p", md: "Sport haqida gapirganda **joy** va **natija** so'zlari kerak bo'ladi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"],
          rows: [
            ["gym", "sport zal", "I go to the gym three times a week."],
            ["pool", "suzish havzasi, basseyn", "The pool opens at seven."],
            ["court", "maydoncha (tennis, basketbol)", "We play tennis on the court near the park."],
            ["pitch", "futbol maydoni", "The boys are playing on the football pitch."],
            ["stadium", "stadion", "The match is at Pakhtakor Stadium."],
            ["match", "o'yin, uchrashuv", "Did you watch the match last night?"],
            ["win / lose", "yutmoq / yutqazmoq", "We won 3–1! / They lost the match."],
          ],
          speak: [0, 2],
        },
        {
          t: "sounds", items: [
            { label: "gym", say: "gym", uz: "**\"jim\"** — *g* bu yerda **\"j\"** o'qiladi. ❌ \"gim\" emas.", examples: ["gym", "gymnastics"] },
            { label: "yoga", say: "yoga", uz: "**\"YOU-gə\"** — birinchi bo'g'in *\"you\"*, ikkinchisi kuchsiz. ❌ \"yo-ga\" emas.", examples: ["yoga", "do yoga"] },
            { label: "karate", say: "karate", uz: "**\"kə-RAA-ti\"** — urg'u o'rtada, oxiri **\"ti\"**.", examples: ["karate", "do karate"] },
          ],
        },
        { t: "tip", tone: "info", md: "**win – won** (\"wan\"), **lose – lost** — noto'g'ri fe'llar. **win** dan keyin o'yin yoki sovrin keladi (*win a match*), raqib emas: ❌ *We won Bunyodkor.* ✅ *We beat Bunyodkor.*" },
        { t: "check", ex: { k: "listen", say: "We play basketball at the gym.", opts: ["We play basketball at the gym.", "We play baseball at the gym.", "We play basketball at the game."], a: 0 } },
      ],
    },
    {
      title: "O'qing: O'zbekiston va sport",
      blocks: [
        {
          t: "text", title: "A sporty family from Fergana",
          en: "The Yusupovs from Fergana are a very sporty family.\nThe father, Ulugbek, played football for a local team when he was young. Now he watches every match on TV and plays volleyball with his colleagues on Fridays.\nHis wife, Zarina, does yoga every morning before work. She says it helps her relax.\nTheir son, Doniyor, does karate and wrestling. Last month he won a competition in Tashkent!\nAnd their daughter Madina? She isn't really into team sports, but she loves the mountains. At weekends she goes hiking or cycling with her friends.\nIn summer the whole family goes swimming in the lake. Even grandma!",
          uz: "Farg'onalik Yusupovlar — juda sportchi oila.\nOta, Ulug'bek, yoshligida mahalliy jamoada futbol o'ynagan. Hozir har bir o'yinni televizorda tomosha qiladi va juma kunlari hamkasblari bilan voleybol o'ynaydi.\nUning rafiqasi Zarina har kuni ertalab ishdan oldin yoga qiladi. Uning aytishicha, bu dam olishga yordam beradi.\nO'g'li Doniyor karate va kurash bilan shug'ullanadi. O'tgan oy u Toshkentda musobaqada g'olib bo'ldi!\nQizlari Madina-chi? U jamoaviy sportga unchalik qiziqmaydi, lekin tog'larni yaxshi ko'radi. Dam olish kunlari do'stlari bilan tog'ga piyoda sayrga yoki velosipedda sayrga boradi.\nYozda butun oila ko'lga suzishga boradi. Hatto buvi ham!",
        },
        { t: "check", ex: { k: "tf", q: "Zarina goes running every morning.", a: false, why: "*Zarina **does yoga** every morning before work.*" } },
        { t: "check", ex: { k: "choice", q: "What does Madina do at weekends?", opts: ["She plays volleyball.", "She does karate.", "She goes hiking or cycling.", "She watches football."], a: 2, why: "*At weekends she **goes hiking or cycling** with her friends.*" } },
      ],
    },
    {
      title: "Dialog: Shanba kuni nima qilamiz?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Jahongir", en: "Do you play any sports, Anna?", uz: "Biror sport bilan shug'ullanasizmi, Anna?" },
            { who: "Anna", en: "Yes, I play tennis twice a week. And I go to the gym on Mondays.", uz: "Ha, haftada ikki marta tennis o'ynayman. Dushanba kunlari sport zalga boraman." },
            { who: "Jahongir", en: "Great! I love tennis too, but I play really badly.", uz: "Zo'r! Men ham tennisni yaxshi ko'raman, lekin juda yomon o'ynayman." },
            { who: "Anna", en: "Ha-ha, that's OK. Do you want to play on Saturday?", uz: "Ha-ha, hechqisi yo'q. Shanba kuni o'ynaysizmi?" },
            { who: "Jahongir", en: "Sorry, on Saturday I always go fishing with my dad. What about Sunday?", uz: "Kechirasiz, shanba kunlari doim dadam bilan baliq oviga boraman. Yakshanba-chi?" },
            { who: "Anna", en: "Sunday is fine. There's a free court in Babur Park.", uz: "Yakshanba bo'ladi. Bobur bog'ida bo'sh maydoncha bor." },
            { who: "Jahongir", en: "Perfect. But please don't win too easily!", uz: "Ajoyib. Faqat iltimos, juda osongina yutib qo'ymang!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Jahongir goes fishing on Saturdays.", a: true, why: "*On Saturday I always **go fishing** with my dad.*" } },
      ],
    },
  ],
  words: [
    { en: "basketball", uz: "basketbol", ipa: "ˈbɑː.skɪt.bɔːl", pos: "noun", ex: "The boys play basketball after school.", exUz: "Bolalar darsdan keyin basketbol o'ynashadi." },
    { en: "volleyball", uz: "voleybol", ipa: "ˈvɒl.i.bɔːl", pos: "noun", ex: "We play volleyball on the beach.", exUz: "Biz plyajda voleybol o'ynaymiz." },
    { en: "tennis", uz: "tennis", ipa: "ˈten.ɪs", pos: "noun", ex: "Do you play tennis?", exUz: "Tennis o'ynaysizmi?" },
    { en: "cycling", uz: "velosipedda yurish", ipa: "ˈsaɪ.klɪŋ", pos: "noun", ex: "They go cycling every Sunday.", exUz: "Ular har yakshanba velosipedda sayrga chiqishadi." },
    { en: "hiking", uz: "tog'da piyoda sayohat", ipa: "ˈhaɪ.kɪŋ", pos: "noun", ex: "We went hiking in Chimgan.", exUz: "Chimyonga piyoda sayohatga bordik." },
    { en: "yoga", uz: "yoga", ipa: "ˈjəʊ.ɡə", pos: "noun", ex: "My mum does yoga every morning.", exUz: "Onam har kuni ertalab yoga qiladi." },
    { en: "karate", uz: "karate", ipa: "kəˈrɑː.ti", pos: "noun", ex: "My little brother does karate.", exUz: "Ukam karate bilan shug'ullanadi." },
    { en: "gym", uz: "sport zal", ipa: "dʒɪm", pos: "noun", ex: "I go to the gym after work.", exUz: "Ishdan keyin sport zalga boraman." },
    { en: "match", uz: "o'yin, uchrashuv (sportda)", ipa: "mætʃ", pos: "noun", ex: "Did you watch the match yesterday?", exUz: "Kechagi o'yinni ko'rdingizmi?" },
    { en: "win – won", uz: "yutmoq, g'olib bo'lmoq", ipa: "wɪn – wʌn", pos: "verb", ex: "Our team won the match.", exUz: "Jamoamiz o'yinda yutdi." },
  ],
  practice: [
    { k: "match", pairs: [["play", "basketball"], ["go", "hiking"], ["do", "karate"]] },
    { k: "match", pairs: [["gym", "sport zal"], ["pool", "basseyn"], ["court", "tennis maydonchasi"], ["match", "o'yin, uchrashuv"], ["win", "yutmoq"]] },
    { k: "listen", say: "She does yoga.", opts: ["She does yoga.", "She goes to yoga.", "She does judo."], a: 0 },
    { k: "listen", say: "We went hiking in the mountains.", opts: ["We went hiking in the mountains.", "We want hiking in the mountains.", "We go hiking in the mountains."], a: 0, why: "**went** — o'tgan zamon (go → went)." },
    { k: "choice", q: "Qaysi juftlik **xato**?", opts: ["play chess", "go skiing", "do gymnastics", "play swimming"], a: 3, why: "**-ing** li harakat → **go swimming**." },
    { k: "choice", q: "\"Akam gitara chaladi.\"", opts: ["My brother plays guitar the.", "My brother does the guitar.", "My brother plays the guitar.", "My brother play the guitar."], a: 2, why: "Asbob → **play the guitar**; *he* → **plays**." },
    { k: "fill", q: "My dad ___ volleyball with his colleagues on Fridays.", a: ["plays"], uz: "Dadam juma kunlari hamkasblari bilan voleybol o'ynaydi.", why: "To'p → **play**; *he* → **plays**." },
    { k: "fill", q: "Do you want to go ___ in the lake? (swim)", a: ["swimming"], uz: "Ko'lda suzishga borishni xohlaysizmi?", why: "**go + -ing**: *go swimming*." },
    { k: "fill", q: "Doniyor ___ karate three times a week.", a: ["does"], uz: "Doniyor haftada uch marta karate bilan shug'ullanadi.", why: "Kurash turi → **do**; *he* → **does**." },
    { k: "fill", q: "I go ___ the gym after work.", a: ["to"], uz: "Ishdan keyin sport zalga boraman.", why: "Joyga borish → **go to the gym**." },
    { k: "tf", q: "**We go to fishing every Sunday.** — to'g'ri gap.", a: false, why: "**go + -ing** — **to** siz: *We go fishing.*" },
    { k: "tf", q: "**play the piano** — to'g'ri, **play the football** — xato.", a: true, why: "Asbob oldida **the** bor, sport oldida yo'q." },
    { k: "order", uz: "O'tgan yozda biz tog'da piyoda sayohatga bordik.", words: ["Last", "summer", "we", "went", "hiking"], extra: ["to", "go"], alt: [["We", "went", "hiking", "last", "summer"]] },
    { k: "order", uz: "Siz biror sport bilan shug'ullanasizmi?", words: ["Do", "you", "play", "any", "sports?"], extra: ["does", "plays"] },
    { k: "translate", uz: "Jamoamiz o'yinda yutdi.", a: ["Our team won the match.", "Our team won the game.", "Our team won."], why: "**win → won**." },
    { k: "speak", say: "I play tennis, go swimming and do yoga.", uz: "Men tennis o'ynayman, suzishga boraman va yoga qilaman." },
  ],
  quiz: [
    { k: "choice", q: "\"U (she) gimnastika bilan shug'ullanadi.\"", opts: ["She plays gymnastics.", "She does gymnastics.", "She goes gymnastics.", "She makes gymnastics."], a: 1, why: "To'p yo'q, -ing yo'q → **do gymnastics**." },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["They go cycling at weekends.", "They go to cycling at weekends.", "They play cycling at weekends.", "They do cycle at weekends."], a: 0, why: "**go + -ing**: *go cycling*." },
    { k: "fill", q: "Last Saturday we ___ chess for three hours. (play)", a: ["played"], uz: "O'tgan shanba uch soat shaxmat o'ynadik." },
    { k: "fill", q: "Does your sister ___ yoga?", a: ["do"], uz: "Opangiz yoga qiladimi?", why: "**Does** dan keyin fe'l **s** siz: *do yoga*." },
    { k: "listen", say: "Did you watch the match?", opts: ["Did you watch the match?", "Did you wash the mat?", "Do you watch the match?"], a: 0 },
    { k: "choice", q: "\"Bizning jamoa 2:0 hisobida yutdi.\"", opts: ["Our team win 2–0.", "Our team winned 2–0.", "Our team won 2–0.", "Our team wins 2–0 yesterday."], a: 2, why: "**win – won** (noto'g'ri fe'l)." },
    { k: "tf", q: "**I play the dutar** — to'g'ri: musiqa asbobi oldida **the** ishlatiladi.", a: true },
    { k: "order", uz: "Men ishdan keyin sport zalga boraman.", words: ["I", "go", "to", "the", "gym", "after", "work"], extra: ["do", "going"], alt: [["After", "work", "I", "go", "to", "the", "gym"]] },
    { k: "translate", uz: "Ular dam olish kunlari basketbol o'ynashadi.", a: ["They play basketball at weekends.", "They play basketball at the weekend.", "They play basketball on weekends.", "They play basketball on the weekend.", "At weekends they play basketball.", "At the weekend they play basketball.", "On weekends they play basketball."], why: "To'p → **play basketball**." },
    { k: "choice", q: "Matnda (A sporty family) Doniyor nima qildi?", opts: ["He won a competition.", "He went hiking.", "He played football for a team.", "He did yoga."], a: 0, why: "*Last month he **won** a competition in Tashkent!*" },
  ],
  summary: [
    "**play** — to'p bilan va raqib bilan o'yinlar: *play tennis, chess, volleyball*.",
    "**go + -ing** — *go swimming, hiking, cycling, fishing* (**to** siz!).",
    "**do** — to'psiz va kurash turlari: *do yoga, karate, judo, gymnastics, exercise*.",
    "Asbob oldida **the**: *play the guitar*; sport oldida yo'q: *play football*. Joy: *go **to the** gym / pool*.",
    "**win – won, lose – lost**: *We won the match.*",
  ],
  homework: "Uchta ustunli jadval chizing: **play / go / do** va har biriga kamida 5 tadan sport yoki hobbi yozing. Keyin oilangiz haqida 6 ta gap yozing: kim nima bilan shug'ullanadi, qayerda va qanchalik tez-tez (*My brother does karate at a sports club twice a week.*).",
};

export default lesson;
