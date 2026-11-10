import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u29-l3",
  title: "Articles and determiners (advanced)",
  titleUz: "Artikl va aniqlovchilar B2: umumiy the, zero article, such a, quite a, what a",
  goal: "Artikllarni B2 darajasida ishlatasiz: **umumiy fikr** (*tigers, the tiger, the elderly, the internet*), **joy nomlari** (*the Alps, Lake Baikal*), **muassasalar** (*in hospital / the hospital*), **such a / what a / quite a / half an hour**, shuningdek **another, other, others, the other, each, every, all** farqini bilasiz va *a good news* kabi tipik xatolardan qochasiz.",
  slides: [
    {
      title: "Nima uchun kerak? Artikl — kichik so'z, katta farq",
      blocks: [
        { t: "p", md: "O'zbek tilida artikl yo'q, shuning uchun ko'p o'quvchilar **a / the / —** ni «tasodifan» qo'yadi. Lekin artikl **ma'noni** o'zgartiradi: *I'm at school* (men o'quvchiman) va *I'm at the school* (maktab binosidaman, masalan, ota-onaman). B2 da imtihon va rasmiy yozuvda aniqlik kerak." },
        { t: "p", md: "Avval **umumiy** (generic) gapni ko'ramiz, ya'ni butun bir guruh haqida fikr. Buning **uch yo'li** bor:" },
        {
          t: "table", head: ["Shakl", "Misol", "Qachon"], speak: [1],
          rows: [
            ["ko'plik, artiklsiz", "Tigers are in danger.", "eng oddiy, ko'p ishlatiladi"],
            ["the + birlik", "The tiger is in danger.", "ilmiy, rasmiyroq (hayvon, asbob, ixtiro)"],
            ["a / an + birlik", "A tiger can run very fast.", "xususiyatni tasvirlash (*any tiger*)"],
            ["the + sifat", "The elderly need more care.", "odamlar guruhi (*the poor, the young*)"],
          ],
        },
        { t: "tip", tone: "info", md: "**The + sifat** faqat odamlar guruhi uchun, **ko'plik** fe'l bilan: *The homeless are often ignored.* Yakka odamga **the elderly man** deb ot qo'shamiz." },
        { t: "check", ex: { k: "choice", q: "Which sentence is a general statement about a whole group of animals (formal, scientific)?", opts: ["The blue whale is the largest animal on Earth.", "I saw a whale yesterday.", "The whale in the film was huge.", "We watched whales near the ship, two of them."], a: 0, why: "**The + birlik** butun turni bildiradi. Boshqa gaplar aniq bir kit(lar) haqida." } },
        { t: "check", ex: { k: "fill", q: "___ elderly often feel lonely in big cities. (the or nothing)", a: ["The"], why: "**The elderly** — keksalar guruhi, odamlar uchun **the + sifat**." } },
      ],
    },
    {
      title: "Joy nomlari va muassasalar",
      blocks: [
        { t: "p", md: "Geografik nomlarda artikl **qoidaga** bog'liq. Esda tutish uchun qisqa jadval:" },
        {
          t: "table", head: ["Turi", "Artikl", "Misol"], speak: [2],
          rows: [
            ["daryolar, dengizlar, okeanlar", "the", "the Danube, the Caspian Sea, the Atlantic"],
            ["tog' tizmalari, orollar guruhi", "the", "the Alps, the Canary Islands"],
            ["bitta tog', ko'l, qit'a, ko'pchilik davlatlar, shaharlar", "artiklsiz", "Mount Everest, Lake Baikal, Asia, Uzbekistan, Paris"],
            ["ko'plik yoki *republic / kingdom / states* so'zi bor davlatlar", "the", "the Netherlands, the United Kingdom, the Czech Republic"],
          ],
        },
        { t: "p", md: "**Muassasalar** (*school, hospital, university, prison, church, bed, work*): asosiy vazifasi uchun borsak **artiklsiz**, binoning o'zi uchun borsak **the** bilan." },
        {
          t: "table", head: ["Artiklsiz (vazifasi)", "The (bino / tashrif)"], speak: [0, 1],
          rows: [
            ["My uncle is in hospital. (bemor)", "I went to the hospital to visit my uncle. (mehmon)"],
            ["The children are at school. (o'qiyapti)", "I met the headteacher at the school. (bino)"],
            ["He was sent to prison. (jazo)", "The journalist went to the prison to interview him."],
            ["She goes to university in Manchester.", "We had lunch at the university café."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Go to bed, go to work, go home, at home** — artiklsiz. Lekin **go to the cinema / the theatre / the bank** — the bilan. Bu tabiiy ravishda kelgan odatlar, ularni misol bilan yodlab oling." },
        { t: "check", ex: { k: "choice", q: "Where is the Aral Sea?  — It is in ___ Central Asia.", opts: ["—", "the", "a", "an"], a: 0, why: "Hududlar (Central Asia) artiklsiz, lekin **the Aral Sea** (dengiz) artikl bilan." } },
        { t: "check", ex: { k: "choice", q: "My grandmother had an operation last week. She is still in ___ hospital.", opts: ["—", "the", "a", "an"], a: 0, why: "Bemor sifatida yotibdi → vazifa: **in hospital** (artiklsiz, britaniyacha)." } },
        { t: "check", ex: { k: "fill", q: "We are going to ___ Alps for a skiing holiday. (the or nothing)", a: ["the"], why: "Tog' tizmasi: **the Alps**." } },
      ],
    },
    {
      title: "Such a, what a, quite a, half an hour",
      blocks: [
        { t: "p", md: "Bu iboralarda artikl sifatdan **oldin emas, keyin** turadi. O'zbek tilida «shunday yaxshi kun» deymiz, inglizcha esa **such a + sifat + ot**." },
        {
          t: "table", head: ["Ibora", "Tuzilma", "Misol"], speak: [2],
          rows: [
            ["such a", "such + a/an + sifat + birlik ot", "It was such a beautiful day."],
            ["such (ko'plik)", "such + sifat + ko'plik ot", "They are such friendly people."],
            ["what a", "what + a/an + sifat + ot (undov)", "What a terrible idea!"],
            ["quite a", "quite + a/an + sifat + ot (britaniyacha: ancha, katta)", "That was quite a surprise."],
            ["half an hour", "half + a/an + ot (hajmi)", "I waited half an hour."],
            ["a / an (har)", "once a week, twice a day, ten pounds a kilo", "I jog three times a week."],
          ],
        },
        {
          t: "examples", items: [
            { en: "It was such a long journey that we fell asleep.", uz: "Shunday uzoq safar ediki, uxlab qoldik." },
            { en: "What a lovely view! You can see the whole valley.", uz: "Qanday go'zal manzara! Butun vodiyni ko'rasiz." },
            { en: "Writing a report in an hour is quite a challenge.", uz: "Bir soatda hisobot yozish ancha qiyin vazifa." },
          ],
        },
        { t: "tip", tone: "warn", md: "**Quite** + sifat (artiklsiz) = «ancha, ma'lum darajada» (*quite good*). **Quite a** + sifat + ot = «ancha katta/yaxshi/ajoyib» (*quite a good idea*). **Such / what** dan keyin sifat bo'lmasa ham **a** kerak: *What a surprise!*" },
        { t: "check", ex: { k: "choice", q: "It was ___ cold morning that the lake froze.", opts: ["such a", "so a", "a such", "so"], a: 0, why: "**such a + sifat + ot**: *such a cold morning*. *So* faqat sifatga qo'yiladi (*so cold*)." } },
        { t: "check", ex: { k: "order", uz: "Qanday ajoyib sayohat!", words: ["What", "a", "wonderful", "trip!"], extra: ["such", "the"], why: "**What a + sifat + ot!**" } },
        { t: "check", ex: { k: "fix", wrong: "It was a such interesting lecture.", a: ["It was such an interesting lecture.", "It was a very interesting lecture."], hint: "such a", why: "**such** artikldan oldin: **such an interesting lecture**." } },
      ],
    },
    {
      title: "This / that, another / other / others, each / every / all",
      blocks: [
        { t: "p", md: "**This / these** — yaqin yoki hozirgina aytilgan narsa. **That / those** — uzoq yoki oldin aytilgan narsa. Matnda **this + ot** oldingi gapdagi fikrni umumlashtiradi: *Prices rose sharply. This trend continued.*" },
        {
          t: "table", head: ["So'z", "Qo'llanishi", "Misol"], speak: [2],
          rows: [
            ["another + birlik", "yana bitta, boshqa bitta", "Would you like another cup of tea?"],
            ["other + ko'plik", "boshqa (ko'plik)", "Other people have different opinions."],
            ["others", "boshqalar (ot yo'q)", "Some people like winter; others prefer summer."],
            ["the other", "ikkitadan biri qolgani", "One brother lives here, the other lives abroad."],
            ["the others", "qolganlari", "Two students left; the others stayed."],
          ],
        },
        {
          t: "table", head: ["So'z", "Ma'no", "Misol"], speak: [2],
          rows: [
            ["each + birlik", "har biri (alohida)", "Each student has a different task."],
            ["every + birlik", "har bir, hamma (umumiy)", "Every student must wear a badge."],
            ["all + ko'plik / sanalmaydigan", "hammasi", "All the students passed. / All the water was clean."],
            ["all day / every day", "kun bo'yi / har kuni", "It rained all day. We swim every day."],
          ],
        },
        { t: "tip", tone: "warn", md: "~~Another people~~ → **other people**. ~~The others people~~ → **the other people**. **Another** faqat birlik ot bilan (yoki *another three days* kabi son bilan)." },
        { t: "check", ex: { k: "choice", q: "Some of the visitors came by bus, but ___ came by train.", opts: ["others", "another", "others people", "other"], a: 0, why: "Ot ishlatilmasa va ko'plik ma'no: **others**." } },
        { t: "check", ex: { k: "choice", q: "She has two cars. One is red, and ___ is blue.", opts: ["the other", "another", "others", "other"], a: 0, why: "Ikkitadan biri qolgani — **the other**." } },
        { t: "check", ex: { k: "fill", q: "It rained ___ day, so we stayed at home. (the whole day)", a: ["all"], why: "**All day** — kun bo'yi. *Every day* esa «har kuni»." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbek tilida artikl yo'qligi uchun ikkita yo'nalishda xato qilinadi: **keraksiz the** qo'yish yoki **a** ni tashlab ketish. Hamda sanalmaydigan otlarga **a** qo'yish." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["Life is full of surprises.", "I love music.", "She gave me some good news.", "The Aral Sea is shrinking."] },
          bad: { title: "Xato", items: ["The life is full of surprises.", "I love the music. (umuman)", "She gave me a good news.", "Aral Sea is shrinking."] } },
        { t: "check", ex: { k: "fix", wrong: "The life is not easy for the people without a job.", a: ["Life is not easy for people without a job.", "Life is not easy for people without jobs."], hint: "umumiy fikr", why: "Umumiy fikrda (*life, people*) **the** kerak emas." } },
        { t: "check", ex: { k: "fix", wrong: "I have a good news for you.", a: ["I have good news for you.", "I have some good news for you.", "I have a piece of good news for you."], hint: "news", why: "**News** sanalmaydigan ot: **a** qo'yilmaydi." } },
        { t: "check", ex: { k: "fix", wrong: "I get up early and go to the work by bus.", a: ["I get up early and go to work by bus."], hint: "work", why: "**Go to work** (ish vazifasi) — artiklsiz, xuddi *go to bed, go home* kabi." } },
        { t: "check", ex: { k: "fix", wrong: "Aral Sea has lost most of its water.", a: ["The Aral Sea has lost most of its water."], hint: "dengiz", why: "Dengiz nomi **the** bilan: **the Aral Sea**." } },
        { t: "tip", tone: "info", md: "Qoida: **umumiy** gapda (*life, music, people, love, technology*) artikl yo'q. **Aniq** narsa bo'lsa (*the music at the party*), **the** kerak." },
      ],
    },
    {
      title: "O'qing: Yo'qolayotgan turlar",
      blocks: [
        {
          t: "text", title: "Why habitats matter", voice: "emma",
          en: "What a remarkable planet we live on! Millions of species share it with us, but many are in danger. The tiger, for example, has lost most of its habitat in the last century, and other animals, such as the polar bear, are also at risk. Scientists explain that an ecosystem works like a chain: if one link breaks, the others suffer. This is one reason why governments protect forests, rivers and wetlands. Of course, it is quite a challenge to balance the needs of people and wildlife, especially in poor regions. Yet every generation has a duty to leave the planet in good condition, and each of us can help, for instance by buying less and recycling more.",
          uz: "Biz yashayotgan sayyora naqadar ajoyib! Millionlab turlar uni biz bilan bo'lishadi, lekin ko'plari xavf ostida. Masalan, yo'lbars so'nggi asrda yashash joyining ko'p qismini yo'qotdi, qutb ayig'i kabi boshqa hayvonlar ham xavf ostida. Olimlarning aytishicha, ekotizim zanjirga o'xshaydi: bitta halqa uzilsa, boshqalari ham zarar ko'radi. Hukumatlar o'rmonlar, daryolar va botqoqliklarni shu sababli muhofaza qiladi. Albatta, odamlar va yovvoyi tabiat ehtiyojlarini muvozanatlash, ayniqsa kambag'al hududlarda, ancha qiyin vazifa. Shunday bo'lsa-da, har bir avlodning sayyorani yaxshi holatda qoldirish burchi bor va har birimiz yordam bera olamiz, masalan, kamroq sotib olib, ko'proq qayta ishlab.",
        },
        { t: "check", ex: { k: "tf", q: "The text says the tiger has kept most of its habitat.", a: false, why: "Matnda: *has lost most of its habitat* — yashash joyining ko'p qismini yo'qotgan." } },
        { t: "check", ex: { k: "choice", q: "In the text, 'This is one reason why governments protect forests' — 'This' refers to ___.", opts: ["the idea that an ecosystem is a chain", "the polar bear", "the tiger's habitat only", "recycling"], a: 0, why: "**This** oldingi gapdagi fikrni umumlashtiradi: ekotizim zanjir kabi." } },
      ],
    },
    {
      title: "Dialog: Kasalxonada va maktabda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Jasur", en: "Hello, Nilufar. I haven't seen you for ages. What a surprise!", uz: "Salom, Nilufar. Sizni ancha vaqtdan beri ko'rmagandim. Qanday kutilmagan uchrashuv!" },
            { who: "Nilufar", en: "Hi, Jasur. My father is in hospital, so I come here every day after work.", uz: "Salom, Jasur. Dadam kasalxonada yotibdi, shuning uchun har kuni ishdan keyin shu yerga kelaman." },
            { who: "Jasur", en: "I'm sorry to hear that. Is it serious?", uz: "Eshitib afsusdaman. Jiddiymi?" },
            { who: "Nilufar", en: "Not very, but he'll stay another week. The doctors are quite worried about his heart.", uz: "Juda emas, lekin yana bir hafta yotadi. Shifokorlar uning yuragidan ancha xavotirda." },
            { who: "Jasur", en: "I went to the hospital last year to see my aunt. The staff were wonderful.", uz: "Men o'tgan yili xolamni ko'rgani kasalxonaga bordim. Xodimlar ajoyib edi." },
            { who: "Nilufar", en: "They are. Some nurses work twelve hours a day, and others do night shifts.", uz: "Ha. Ba'zi hamshiralar kuniga o'n ikki soat ishlaydi, boshqalari tungi smenada ishlaydi." },
            { who: "Jasur", en: "Take care of yourself too. Let's have a coffee when you have half an hour.", uz: "O'zingizga ham ehtiyot bo'ling. Yarim soat vaqtingiz bo'lganda kofe ichamiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Nilufar say 'in hospital' and Jasur 'to the hospital'?", opts: ["Nilufar's father is a patient; Jasur visited a building.", "Nilufar is British.", "Jasur works there.", "There is no difference."], a: 0, why: "Bemor → vazifa, artiklsiz (*in hospital*). Tashrif buyuruvchi → bino, **the hospital**." } },
        { t: "check", ex: { k: "match", pairs: [["what a surprise", "qanday kutilmagan voqea"], ["half an hour", "yarim soat"], ["twelve hours a day", "kuniga o'n ikki soat"], ["another week", "yana bir hafta"]] } },
      ],
    },
  ],
  words: [
    { en: "species", uz: "tur (biologik)", ipa: "ˈspiː.ʃiːz", pos: "noun", ex: "Several species of birds live in this wetland.", exUz: "Bu botqoqlikda qushlarning bir necha turi yashaydi." },
    { en: "habitat", uz: "yashash muhiti", ipa: "ˈhæb.ɪ.tæt", pos: "noun", ex: "Forests are the natural habitat of many animals.", exUz: "O'rmonlar ko'p hayvonlarning tabiiy yashash muhitidir." },
    { en: "ecosystem", uz: "ekotizim", ipa: "ˈiː.kəʊˌsɪs.təm", pos: "noun", ex: "A lake is a delicate ecosystem.", exUz: "Ko'l nozik ekotizimdir." },
    { en: "endangered", uz: "yo'qolish xavfi ostidagi", ipa: "ɪnˈdeɪn.dʒəd", pos: "adj", ex: "The snow leopard is an endangered animal.", exUz: "Qor qoploni yo'qolish xavfi ostidagi hayvondir." },
    { en: "institution", uz: "muassasa, tashkilot", ipa: "ˌɪn.stɪˈtjuː.ʃən", pos: "noun", ex: "A university is an important educational institution.", exUz: "Universitet muhim ta'lim muassasasidir." },
    { en: "generation", uz: "avlod", ipa: "ˌdʒen.əˈreɪ.ʃən", pos: "noun", ex: "Our generation uses technology all the time.", exUz: "Bizning avlod doim texnologiyadan foydalanadi." },
    { en: "the elderly", uz: "keksalar", ipa: "ðə ˈel.dəl.i", pos: "phrase", ex: "The elderly need good health care.", exUz: "Keksalarga yaxshi tibbiy yordam kerak." },
    { en: "the homeless", uz: "uysizlar", ipa: "ðə ˈhəʊm.ləs", pos: "phrase", ex: "The city opened a shelter for the homeless.", exUz: "Shahar uysizlar uchun boshpana ochdi." },
    { en: "the public", uz: "keng jamoatchilik", ipa: "ðə ˈpʌb.lɪk", pos: "phrase", ex: "The public has the right to know the truth.", exUz: "Jamoatchilik haqiqatni bilish huquqiga ega." },
    { en: "the media", uz: "ommaviy axborot vositalari", ipa: "ðə ˈmiː.di.ə", pos: "phrase", ex: "The media reported the story all week.", exUz: "OAV bu voqeani butun hafta yoritdi." },
  ],
  practice: [
    { k: "choice", q: "___ are friendly animals, but they need a lot of space.", opts: ["Elephants", "The elephant", "An elephants", "Elephant"], a: 0, why: "Umumiy ko'plik: artiklsiz **Elephants**." },
    { k: "choice", q: "She works hard to help ___ in her city.", opts: ["the homeless", "homeless", "a homeless", "the homelesses"], a: 0, why: "Odamlar guruhi: **the + sifat**." },
    { k: "listen", say: "What a beautiful view of the mountains!", opts: ["What a beautiful view of the mountains!", "Such a beautiful view of the mountains!", "What beautiful view of mountains!", "What a beautiful view of mountains?"], a: 0, why: "Undov: **What a + sifat + ot!**" },
    { k: "fill", q: "I went to ___ hospital to visit a friend who had an operation.", a: ["the"], uz: "Operatsiya qilingan do'stimni ko'rgani kasalxonaga bordim.", why: "Mehmon sifatida bino → **the hospital**. (Bemor bo'lsa: *in hospital*.)" },
    { k: "fill", q: "We go to the gym three times ___ week.", a: ["a", "per"], why: "**Times a week** = haftasiga." },
    { k: "fill", q: "Some people prefer tea, but ___ prefer coffee. (the rest of the people, no noun)", a: ["others"], why: "Ot yo'q, ko'plik: **others**." },
    { k: "order", uz: "Bu shunday qiyin imtihon ediki, hech kim o'tmadi.", words: ["It", "was", "such", "a", "difficult", "exam", "that", "nobody", "passed."], extra: ["so", "the"], why: "**such a + sifat + ot + that**." },
    { k: "order", uz: "Qanday ajoyib fikr!", words: ["What", "a", "great", "idea!"], extra: ["such", "an"], why: "**What a + sifat + ot!**" },
    { k: "translate", uz: "Hayot ba'zan qiyin bo'ladi.", a: ["Life is sometimes difficult.", "Life can be difficult sometimes.", "Life is difficult sometimes.", "Sometimes life is difficult.", "Life can sometimes be difficult."], why: "Umumiy fikrda (*life*) artikl yo'q." },
    { k: "translate", uz: "Menga yaxshi xabar bor.", a: ["I have good news.", "I've got good news.", "I have some good news.", "I've got some good news."], why: "**News** sanalmaydigan ot: *a* yo'q." },
    { k: "match", pairs: [["species", "tur"], ["habitat", "yashash muhiti"], ["ecosystem", "ekotizim"], ["generation", "avlod"], ["institution", "muassasa"]] },
    { k: "fix", wrong: "Aral Sea is much smaller than before.", a: ["The Aral Sea is much smaller than before."], hint: "dengiz nomi", why: "Dengiz nomi **the** bilan." },
    { k: "fix", wrong: "I was waiting for you a half hour.", a: ["I was waiting for you for half an hour.", "I was waiting for you half an hour.", "I waited for you for half an hour."], hint: "half an hour", why: "To'g'ri shakl: **half an hour** (*a half hour* ham AmE da bor, lekin *waiting for you a half hour* xato)." },
    { k: "tf", q: "*The children are at school* gapi bolalar o'qiyotganini bildiradi.", a: true, why: "**At school** (artiklsiz) — o'qish vazifasi; **at the school** — binoning o'zi." },
    { k: "dictation", say: "Every generation faces its own problems.", uz: "Har bir avlod o'z muammolariga duch keladi.", why: "**Every** + birlik ot + birlik fe'l." },
    { k: "speak", say: "It was such a long journey, but what a wonderful view!", uz: "Bu juda uzoq safar edi, lekin qanday ajoyib manzara!" },
  ],
  quiz: [
    { k: "choice", q: "___ is a social animal. (a whole species, scientific style)", opts: ["The wolf", "Wolf", "Wolves", "The wolves"], a: 0, why: "Birlik fe'l (*is*) bilan butun tur: **The wolf**. *Wolves* ko'plik fe'l (*are*) talab qiladi, *Wolf* artiklsiz bo'lmaydi." },
    { k: "choice", q: "Where do you want to go? — Let's go to ___ cinema tonight.", opts: ["the", "—", "a", "an"], a: 0, why: "**The cinema / the theatre** — the bilan." },
    { k: "choice", q: "One of my friends lives in London; ___ lives in Paris.", opts: ["the other", "other", "another", "others"], a: 0, why: "Ikkitadan biri: **the other**." },
    { k: "choice", q: "It was ___ a hot day that we stayed inside.", opts: ["such", "so", "quite", "what"], a: 0, why: "**such a hot day that…** natija bilan." },
    { k: "fill", q: "I left my umbrella at ___ school building, so I must go back for it.", a: ["the"], uz: "Soyabonimni maktab binosida qoldirdim, qaytib olishim kerak.", why: "Bino haqida gap ketyapti → **the school building**." },
    { k: "fill", q: "She earns twenty pounds ___ hour. (per)", a: ["an", "per"], uz: "U soatiga yigirma funt topadi.", why: "**An hour** = har soatda." },
    { k: "order", uz: "Qanday ajoyib manzara!", words: ["What", "a", "wonderful", "view!"], extra: ["such", "the"], why: "**What a + sifat + ot!**" },
    { k: "translate", uz: "Keksalarga ko'proq yordam kerak.", a: ["The elderly need more help.", "The elderly need more care.", "The elderly need more support."], why: "**The elderly** + ko'plik fe'l." },
    { k: "fix", wrong: "The people are important than money.", a: ["People are more important than money."], hint: "umumiy fikr va taqqoslash", why: "Umumiy fikr (artiklsiz) va comparative: **more important than**." },
    { k: "tf", q: "*Another people think differently* gapi to'g'ri.", a: false, why: "**Another** faqat birlik ot bilan: *other people*." },
  ],
  summary: [
    "**Umumiy fikr:** ko'plik artiklsiz (*Tigers are…*), **the + birlik** (*The tiger is…*), **the + sifat** odamlar guruhi (*the elderly*).",
    "**The** bilan: daryo, dengiz, tog' tizmasi, ko'plik davlatlar (*the Alps, the Netherlands*). Artiklsiz: bitta tog', ko'l, qit'a, ko'pchilik davlatlar. **In hospital / at school** — vazifasi; **the hospital** — bino.",
    "**Such a + sifat + ot**, **what a + sifat + ot!**, **quite a**, **half an hour**, **twice a week**: artikl sifatdan oldin emas, keyin.",
    "**Another** + birlik; **other** + ko'plik; **others**, **the other(s)**; **each / every / all**; **this / that** matnda fikrni bog'laydi.",
    "Xatolar: ~~The life~~, ~~a good news~~, ~~a such~~, ~~Aral Sea~~ → **Life**, **good news**, **such a**, **the Aral Sea**.",
  ],
  homework: "Gazeta yoki saytdan bitta qisqa maqolani oling va undagi **barcha artikllarni** (a, an, the va artikl yo'qligi) pastki chiziq bilan belgilang. Har biri uchun nima uchun shunday ekanini bir so'z bilan yozing (*umumiy, aniq, dengiz...*). Keyin **such a / what a** bilan 4 ta o'z gapingizni yozing.",
};

export default lesson;
