import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u7-l7",
  title: "Time & timetables",
  titleUz: "Soat, jadval: from… to, until, before, after",
  goal: "Har qanday vaqtni aytasiz (**ten to nine, twenty-five past six, 18:30**), jadvalni o'qiysiz va so'raysiz (**What time does the train leave?**), ish va dam olish vaqtini **from… to, until, before, after** bilan aniq ifodalaysiz.",
  slides: [
    {
      title: "Soat: past va to",
      blocks: [
        { t: "p", md: "Beginnerda **o'clock, half past, quarter** ni o'rgandik. Endi istalgan daqiqani aytamiz. Soat siferblatini ikkiga bo'ling: o'ng yarmi — **past** (o'tdi), chap yarmi — **to** (… kam):" },
        {
          t: "table", head: ["Vaqt", "Inglizcha", "O'zbekcha"],
          rows: [
            ["8:05", "five past eight", "sakkizdan besh daqiqa o'tdi"],
            ["8:15", "(a) quarter past eight", "sakkizdan chorak o'tdi"],
            ["8:20", "twenty past eight", "sakkizdan yigirma o'tdi"],
            ["8:30", "half past eight", "sakkiz yarim"],
            ["8:40", "twenty to nine", "to'qqizga yigirma daqiqa bor"],
            ["8:45", "(a) quarter to nine", "to'qqizga chorak kam"],
            ["8:55", "five to nine", "to'qqizga besh daqiqa kam"],
          ],
          speak: [1],
        },
        { t: "tip", tone: "warn", md: "**to** bilan **keyingi** soat aytiladi: 8:40 = *twenty to **nine*** (sakkiz emas!). O'zbekcha *to'qqizga yigirma daqiqa bor* — xuddi shunday mantiq." },
        { t: "tip", tone: "info", md: "5 ga bo'linmaydigan daqiqalar bilan **minutes** qo'shiladi: 8:07 = *seven **minutes** past eight*. Lekin oddiyroq yo'li ham bor — **raqamlarni ketma-ket ayting**: 8:07 = *eight oh seven*, 8:40 = *eight forty*. Bu ham to'liq to'g'ri va juda ko'p ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "**7:50** — qanday aytiladi?", opts: ["ten to seven", "ten past seven", "ten to eight", "fifty to eight"], a: 2, why: "7:50 — sakkizga o'n daqiqa bor: **ten to eight**." } },
        { t: "check", ex: { k: "listen", say: "It's twenty-five past six.", opts: ["6:25", "5:35", "6:35"], a: 0, why: "**twenty-five past six** = 6:25." } },
      ],
    },
    {
      title: "a.m., p.m., midday, midnight",
      blocks: [
        { t: "p", md: "Kundalik nutqda inglizlar odatda **12 soatlik** tizimdan foydalanadi. Ertalab yoki kechqurun ekanini bildirish uchun:" },
        {
          t: "table", head: ["Ifoda", "Ma'nosi", "Misol"],
          rows: [
            ["a.m.", "tun yarmidan tushgacha (00:00–11:59)", "The shop opens at 9 a.m."],
            ["p.m.", "tushdan keyin va kechqurun (12:00–23:59)", "The film starts at 8 p.m."],
            ["midday / noon", "tush, soat 12:00", "We have lunch at midday."],
            ["midnight", "yarim tun, soat 00:00", "The café closes at midnight."],
            ["in the morning / afternoon / evening", "ertalab / tushdan keyin / kechqurun", "at seven in the evening"],
          ],
          speak: [2],
        },
        { t: "tip", tone: "info", md: "Jadval va e'lonlarda **24 soatlik** tizim ham bor: *18:30*. Uni o'qishning ikki usuli: rasmiy — *eighteen thirty*; kundalik — *six thirty p.m.* yoki *half past six in the evening*. **a.m. / p.m.** ni **o'clock** bilan birga ishlatmang: ❌ *8 o'clock p.m.*" },
        {
          t: "sounds", items: [
            { label: "a.m. / p.m.", say: "a.m. p.m.", uz: "Harflar bilan aytiladi: **\"ey-EM\"**, **\"pi-EM\"**.", examples: ["9 a.m.", "6 p.m."] },
            { label: "half past", say: "half past seven", uz: "**\"haaf paast\"** — *l* o'qilmaydi! ❌ \"xalf\". Britaniyada cho'ziq **a:**.", examples: ["half past seven", "half past ten"] },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Kechqurun **21:15** — kundalik nutqda:", opts: ["a quarter past nine a.m.", "a quarter past nine in the evening", "a quarter to nine in the evening", "nine fifteen o'clock p.m."], a: 1, why: "21:15 = kechki 9:15 → **a quarter past nine in the evening** (yoki *9:15 p.m.*)." } },
      ],
    },
    {
      title: "Jadvallar: Present Simple",
      blocks: [
        { t: "p", md: "Poyezd, avtobus, samolyot, darslar, muzey ish vaqti — **rasmiy jadval** bo'yicha bo'ladigan narsalar kelajak haqida bo'lsa ham **Present Simple** da aytiladi:" },
        {
          t: "examples", items: [
            { en: "The train leaves at 7:28 and arrives in Samarkand at 9:40.", uz: "Poyezd 7:28 da jo'naydi va Samarqandga 9:40 da yetib boradi." },
            { en: "The museum opens at nine and closes at six.", uz: "Muzey to'qqizda ochiladi va oltida yopiladi." },
            { en: "My English lesson starts at five tomorrow.", uz: "Ertaga ingliz tili darsim beshda boshlanadi." },
            { en: "What time does the next bus leave?", uz: "Keyingi avtobus soat nechada jo'naydi?" },
            { en: "When does the flight arrive?", uz: "Reys qachon yetib keladi?" },
          ],
        },
        { t: "tip", tone: "good", md: "Farqni eslang: **jadval** → Present Simple (*The train leaves at six*). **Sizning shaxsiy rejangiz** → Present Continuous (*I'm taking the six o'clock train*)." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["What time does the train leave?", "The bank opens at nine.", "The lesson finishes at half past two."] },
          bad: { title: "Xato", items: ["What time the train leaves?", "The bank open at nine.", "The lesson finish at half past two."] },
        },
        { t: "check", ex: { k: "fill", q: "What time ___ the film start?", a: ["does"], uz: "Film soat nechada boshlanadi?", why: "*the film* = it → **does**." } },
      ],
    },
    {
      title: "from… to, until",
      blocks: [
        { t: "p", md: "Biror narsa **qachondan qachongacha** davom etishini aytish uchun:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"],
          rows: [
            ["from … to …", "…dan …gacha", "The shop is open from 9 a.m. to 8 p.m."],
            ["from … until …", "…dan …gacha", "I work from Monday until Friday."],
            ["until (till)", "…gacha (oxirgi nuqta)", "I'm at work until six."],
            ["between … and …", "… bilan … orasida", "Call me between two and three."],
          ],
          speak: [2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I work until six.", "I work from nine to six.", "The café is open until midnight."] },
          bad: { title: "Xato", items: ["I work to six.", "I work since nine to six.", "The café is open till to midnight."] },
        },
        { t: "tip", tone: "warn", md: "**to** faqat **from** bilan juft bo'lsa ishlatiladi: *from nine **to** six*. Yolg'iz \"…gacha\" — **until** (yoki norasmiy **till**): *I work **until** six.* \n**since** — \"…dan beri\" (o'tmishdan hozirgacha) — *from* bilan adashtirmang!" },
        { t: "check", ex: { k: "fill", q: "We're staying in Khiva ___ Sunday.", a: ["until", "till"], uz: "Xivada yakshanbagacha qolamiz.", why: "Yolg'iz \"…gacha\" → **until / till**." } },
        { t: "check", ex: { k: "fill", q: "The library is open from 10 a.m. ___ 7 p.m.", a: ["to", "until", "till"], uz: "Kutubxona ertalab 10 dan kechki 7 gacha ochiq.", why: "**from … to / until …**" } },
      ],
    },
    {
      title: "before va after",
      blocks: [
        { t: "p", md: "O'zbekchada *ishdan **keyin**, darsdan **oldin*** — so'z **otdan keyin** keladi. Ingliz tilida esa **teskari**: **after** work, **before** class." },
        {
          t: "table", head: ["Keyin nima keladi", "Misol", "O'zbekcha"],
          rows: [
            ["ot", "after work, before lunch, after the lesson", "ishdan keyin, tushlikdan oldin, darsdan keyin"],
            ["fe'l-ing", "before going to bed, after having breakfast", "yotishdan oldin, nonushtadan keyin"],
            ["to'liq gap", "after I finish work, before the shop closes", "ishni tugatganimdan keyin, do'kon yopilishidan oldin"],
          ],
          speak: [1],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I go to the gym after work.", "Brush your teeth before going to bed.", "Call me after the meeting."] },
          bad: { title: "Xato", items: ["I go to the gym work after.", "Brush your teeth before go to bed.", "Call me after of the meeting."] },
        },
        { t: "tip", tone: "info", md: "**before / after** dan keyin fe'l kelsa — **-ing**: *before **going**, after **having***. ❌ *before go*. Vaqt bilan ham: *before nine* (to'qqizdan oldin), *after midnight* (yarim tundan keyin)." },
        { t: "check", ex: { k: "order", uz: "Men ishdan keyin sport zalga boraman.", words: ["I", "go", "to", "the", "gym", "after", "work"], extra: ["before", "of"], alt: [["After", "work", "I", "go", "to", "the", "gym"]] } },
        { t: "check", ex: { k: "fill", q: "Wash your hands before ___ dinner. (have)", a: ["having"], uz: "Kechki ovqatdan oldin qo'lingizni yuving.", why: "**before + -ing**." } },
      ],
    },
    {
      title: "O'qing: Samarqandga bir kunlik sayohat",
      blocks: [
        {
          t: "text", title: "A day trip to Samarkand",
          en: "Tom is an English tourist in Tashkent. He wants to visit Samarkand for one day.\nThe fast train leaves Tashkent at 7:28 a.m. and arrives in Samarkand at 9:40. The trip takes about two hours.\nRegistan is open from 8 a.m. to 7 p.m., so Tom has a lot of time. Before lunch he's visiting Registan and the Bibi-Khanym Mosque. After lunch he's going to Shah-i-Zinda.\nThe Siab Bazaar is open until six, and Tom wants to buy some dried fruit there before it closes.\nThe last train back to Tashkent leaves at 5:45 p.m. Tom must be at the station before half past five. He doesn't want to miss it!",
          uz: "Tom — Toshkentdagi ingliz sayyohi. U bir kunga Samarqandga bormoqchi.\nTezyurar poyezd Toshkentdan ertalab 7:28 da jo'naydi va Samarqandga 9:40 da yetib boradi. Yo'l taxminan ikki soat oladi.\nRegiston ertalab 8 dan kechki 7 gacha ochiq, shuning uchun Tomda vaqt ko'p. Tushlikdan oldin u Registonni va Bibixonim masjidini ko'radi. Tushlikdan keyin Shohi Zindaga boradi.\nSiyob bozori oltigacha ochiq, Tom u yopilishidan oldin quruq meva sotib olmoqchi.\nToshkentga oxirgi poyezd kechki 5:45 da jo'naydi. Tom besh yarimdan oldin vokzalda bo'lishi kerak. U poyezddan qolishni xohlamaydi!",
        },
        { t: "check", ex: { k: "choice", q: "What time does the last train to Tashkent leave?", opts: ["at 7:28 a.m.", "at 9:40 a.m.", "at 5:45 p.m.", "at 7 p.m."], a: 2, why: "*The last train back to Tashkent leaves at **5:45 p.m.***" } },
        { t: "check", ex: { k: "tf", q: "Tom is visiting Shah-i-Zinda before lunch.", a: false, why: "*Before lunch* — Registon va Bibixonim. Shohi Zinda — **after lunch**." } },
      ],
    },
    {
      title: "Dialog: Mehmonxona qabulxonasida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Guest", en: "Excuse me, what time is breakfast?", uz: "Kechirasiz, nonushta soat nechada?" },
            { who: "Receptionist", en: "Breakfast is from seven to ten, in the restaurant on the first floor.", uz: "Nonushta yettidan o'ngacha, birinchi qavatdagi restoranda." },
            { who: "Guest", en: "And is the pool open in the evening?", uz: "Basseyn kechqurun ochiqmi?" },
            { who: "Receptionist", en: "Yes, it's open until nine p.m. But it's closed between two and three for cleaning.", uz: "Ha, kechki to'qqizgacha ochiq. Lekin ikki bilan uch orasida tozalash uchun yopiq." },
            { who: "Guest", en: "Great. One more thing — what time does the airport bus leave tomorrow?", uz: "Zo'r. Yana bir narsa — ertaga aeroport avtobusi soat nechada jo'naydi?" },
            { who: "Receptionist", en: "At a quarter to six. Please be in the lobby five minutes before that.", uz: "Oltiga chorak kamda. Iltimos, undan besh daqiqa oldin vestibyulda bo'ling." },
            { who: "Guest", en: "That's early! Thank you very much.", uz: "Juda erta ekan! Katta rahmat." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "When is the pool closed?", opts: ["from seven to ten", "between two and three", "after six", "until nine a.m."], a: 1, why: "*It's closed **between two and three** for cleaning.*" } },
      ],
    },
  ],
  words: [
    { en: "timetable", uz: "jadval (poyezd, dars)", ipa: "ˈtaɪmˌteɪ.bəl", pos: "noun", ex: "Let's check the train timetable.", exUz: "Poyezd jadvalini tekshiraylik." },
    { en: "a.m.", uz: "ertalab, tushgacha (00:00–12:00)", ipa: "ˌeɪˈem", pos: "abbreviation", ex: "The bank opens at 9 a.m.", exUz: "Bank ertalab soat 9 da ochiladi." },
    { en: "p.m.", uz: "tushdan keyin, kechqurun (12:00–24:00)", ipa: "ˌpiːˈem", pos: "abbreviation", ex: "The concert starts at 7 p.m.", exUz: "Konsert kechki 7 da boshlanadi." },
    { en: "midday", uz: "tush, soat 12", ipa: "ˌmɪdˈdeɪ", pos: "noun", ex: "We have lunch at midday.", exUz: "Soat 12 da tushlik qilamiz." },
    { en: "midnight", uz: "yarim tun", ipa: "ˈmɪd.naɪt", pos: "noun", ex: "The café closes at midnight.", exUz: "Kafe yarim tunda yopiladi." },
    { en: "until", uz: "…gacha", ipa: "ənˈtɪl", pos: "preposition", ex: "I work until six.", exUz: "Oltigacha ishlayman." },
    { en: "before", uz: "…dan oldin", ipa: "bɪˈfɔː", pos: "preposition", ex: "I drink coffee before work.", exUz: "Ishdan oldin qahva ichaman." },
    { en: "after", uz: "…dan keyin", ipa: "ˈɑːf.tə", pos: "preposition", ex: "We go for a walk after dinner.", exUz: "Kechki ovqatdan keyin sayrga chiqamiz." },
    { en: "leave", uz: "jo'nab ketmoq, chiqib ketmoq", ipa: "liːv", pos: "verb", ex: "The bus leaves at ten past eight.", exUz: "Avtobus sakkizdan o'n o'tganda jo'naydi." },
    { en: "break", uz: "tanaffus", ipa: "breɪk", pos: "noun", ex: "We have a lunch break from one to two.", exUz: "Birdan ikkigacha tushlik tanaffusimiz bor." },
  ],
  practice: [
    { k: "match", pairs: [["7:15", "a quarter past seven"], ["7:45", "a quarter to eight"], ["7:30", "half past seven"], ["7:50", "ten to eight"], ["7:10", "ten past seven"]] },
    { k: "match", pairs: [["until", "…gacha"], ["before", "…dan oldin"], ["after", "…dan keyin"], ["midnight", "yarim tun"], ["timetable", "jadval"]] },
    { k: "listen", say: "The train leaves at twenty to nine.", opts: ["8:40", "9:20", "8:20"], a: 0, why: "**twenty to nine** = 8:40." },
    { k: "listen", say: "It's a quarter past four.", opts: ["4:15", "3:45", "4:45"], a: 0 },
    { k: "choice", q: "**10:35** — qanday aytiladi?", opts: ["twenty-five past ten", "twenty-five to eleven", "thirty-five to eleven", "twenty-five to ten"], a: 1, why: "10:35 — o'n birga 25 daqiqa bor: **twenty-five to eleven** (yoki *ten thirty-five*)." },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["I work to six.", "I work until six.", "I work since six.", "I work till to six."], a: 1, why: "Yolg'iz \"…gacha\" → **until**. *to* faqat *from … to* juftligida." },
    { k: "fill", q: "The museum is closed on Mondays. It's open ___ Tuesday to Sunday.", a: ["from"], uz: "Muzey dushanba kunlari yopiq. Seshanbadan yakshanbagacha ochiq.", why: "**from … to …**" },
    { k: "fill", q: "Let's have a coffee ___ the meeting. It starts in an hour.", a: ["before"], uz: "Majlisdan oldin qahva ichaylik. U bir soatdan keyin boshlanadi.", why: "Majlis hali boshlanmagan → **before**." },
    { k: "fill", q: "I always read a book before ___ to sleep. (go)", a: ["going"], uz: "Uxlashdan oldin doim kitob o'qiyman.", why: "**before + -ing**." },
    { k: "fill", q: "What time ___ the bank close?", a: ["does"], uz: "Bank soat nechada yopiladi?" },
    { k: "tf", q: "**8:45** = *a quarter to eight*.", a: false, why: "8:45 — to'qqizga chorak kam: **a quarter to nine**." },
    { k: "tf", q: "Jadval haqida gapirganda Present Simple ishlatiladi: **The train leaves at six.**", a: true },
    { k: "order", uz: "Poyezd soat nechada jo'naydi?", words: ["What", "time", "does", "the", "train", "leave?"], extra: ["leaves?", "is"] },
    { k: "order", uz: "Tushlik tanaffusimiz birdan ikkigacha.", words: ["Our", "lunch", "break", "is", "from", "one", "to", "two"], extra: ["since", "at"], alt: [["Our", "lunch", "break", "is", "from", "one", "until", "two"]] },
    { k: "translate", uz: "Do'kon yarim tungacha ochiq.", a: ["The shop is open until midnight.", "The shop is open till midnight.", "The store is open until midnight.", "The store is open till midnight.", "The shop's open until midnight.", "The shop's open till midnight."], why: "**until midnight** — yarim tungacha." },
    { k: "speak", say: "The museum is open from nine to six, but it's closed on Mondays.", uz: "Muzey to'qqizdan oltigacha ochiq, lekin dushanba kunlari yopiq." },
  ],
  quiz: [
    { k: "choice", q: "**6:40** — qanday aytiladi?", opts: ["twenty to six", "twenty to seven", "forty past seven", "twenty past six"], a: 1, why: "**to** + keyingi soat: **twenty to seven**." },
    { k: "listen", say: "The film starts at half past eight.", opts: ["8:30", "7:30", "8:13"], a: 0, why: "**half past eight** = 8:30." },
    { k: "choice", q: "\"Ishdan keyin sizga qo'ng'iroq qilaman.\"", opts: ["I'll call you work after.", "I'll call you after work.", "I'll call you after of work.", "I'll call you after working of."], a: 1, why: "Ingliz tilida **after** otdan **oldin** keladi: *after work*." },
    { k: "fill", q: "The café is open from 8 a.m. ___ 11 p.m.", a: ["to", "until", "till"], uz: "Kafe ertalab 8 dan kechki 11 gacha ochiq." },
    { k: "fill", q: "I usually stay at work ___ seven. Then I go home.", a: ["until", "till"], uz: "Odatda yettigacha ishda qolaman. Keyin uyga ketaman.", why: "Yolg'iz \"…gacha\" → **until / till**." },
    { k: "fill", q: "Don't eat sweets before ___ lunch. (have)", a: ["having"], uz: "Tushlikdan oldin shirinlik yemang." },
    { k: "tf", q: "**What time the bus leaves?** — to'g'ri savol.", a: false, why: "**does** kerak: *What time **does** the bus **leave**?*" },
    { k: "order", uz: "Bank ertalab to'qqizda ochiladi.", words: ["The", "bank", "opens", "at", "nine", "in", "the", "morning"], extra: ["open", "on"], alt: [["The", "bank", "opens", "at", "nine"]] },
    { k: "translate", uz: "Yotishdan oldin tishlaringizni yuving.", a: ["Brush your teeth before going to bed.", "Brush your teeth before you go to bed.", "Clean your teeth before going to bed.", "Clean your teeth before you go to bed.", "Brush your teeth before bed.", "Clean your teeth before bed.", "Wash your teeth before going to bed."], why: "**before + -ing** yoki **before + gap**." },
    { k: "choice", q: "Matnda (A day trip to Samarkand) Siyob bozori qachongacha ochiq?", opts: ["until 5:45", "until six", "until 7 p.m.", "until midnight"], a: 1, why: "*The Siab Bazaar is open **until six**.*" },
  ],
  summary: [
    "**past** — o'tdi (*ten past eight* = 8:10), **to** — keyingi soatga kam (*ten to nine* = 8:50). Oddiy usul: *eight fifty*.",
    "**a.m.** — tushgacha, **p.m.** — tushdan keyin; **midday** — 12:00, **midnight** — 00:00.",
    "Jadvallar — **Present Simple**: *The train leaves at 7:28. What time does it arrive?*",
    "**from … to / until**, yolg'iz **until** (…gacha); **before / after + ot / -ing**: *after work, before going to bed*.",
  ],
  homework: "Kun tartibingizni jadval qilib yozing va har bir qatorni gap bilan ayting (*I work from nine to six. I have a break from one to two. After work I…*). Shahringizdagi muzey, bozor yoki kafe ish vaqtini inglizcha yozing. Soatga qarab kun bo'yi 5 marta vaqtni **past / to** bilan ovoz chiqarib ayting.",
};

export default lesson;
