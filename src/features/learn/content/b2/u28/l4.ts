import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l4",
  title: "Cause, result and purpose",
  titleUz: "Sabab, natija va maqsad: owing to, consequently, so… that, in order to, so as not to",
  goal: "**Sabab** (*because, because of, owing to, as, since*), **natija** (*so, therefore, consequently, as a result, hence, so … that, such … that*) va **maqsad** (*to, in order to, so as (not) to, so that*) ni aniq va uslubga mos ifodalaysiz. Qaysi so'zdan keyin gap, qaysisidan keyin ot kelishini bilasiz va **because of it was**, **for to go** kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Nega, natijada nima, nima uchun: uchta savol",
      blocks: [
        { t: "p", md: "Fikringizni asoslash uchun (essay, ish xati, intervyu) har safar uch savolga javob berasiz: **Nega bo'ldi?** (sabab), **Natijada nima bo'ldi?** (natija), **Nima uchun qildik?** (maqsad). Inglizchada har biri uchun **uslub va tuzilmasi** har xil so'zlar bor." },
        {
          t: "table", head: ["Savol", "So'zlar", "Misol"], speak: [2],
          rows: [
            ["Sabab (nega?)", "because, as, since, because of, due to, owing to, thanks to", "The match was cancelled because of the rain."],
            ["Natija (natijada?)", "so, therefore, consequently, as a result, hence", "It rained heavily. As a result, the match was cancelled."],
            ["Maqsad (nima uchun?)", "to, in order to, so as to, so that", "We left early to avoid the traffic."],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida **-gani uchun** (sabab), **shuning uchun** (natija) va **-ish uchun** (maqsad) hammasi bir xil «uchun». Inglizchada ularni **aralashtirmaslik** kerak: *because* ≠ *so* ≠ *to*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **maqsad** ni bildiradi?", opts: ["We took a taxi because we were late.", "We were late. As a result, we took a taxi.", "We took a taxi to get there on time.", "We took a taxi owing to the delay."], a: 2, why: "**to + fe'l** — maqsad: «yetib borish uchun». Qolganlari sabab yoki natija." } },
      ],
    },
    {
      title: "Sabab: because, as, since va because of, owing to, due to",
      blocks: [
        { t: "p", md: "**Because / as / since** dan keyin **to'liq gap**. **Because of / owing to / due to / thanks to** dan keyin **ot (yoki ot guruhi)**. Bu — eng muhim farq." },
        {
          t: "table", head: ["Gap bilan", "Ot bilan"], speak: [0, 1],
          rows: [
            ["We cancelled the trip because it was snowing.", "We cancelled the trip because of the snow."],
            ["As the shop was closed, we went home.", "Owing to the strike, all trains were cancelled."],
            ["Since nobody replied, I called again.", "The delay was due to fog."],
            ["—", "Thanks to your help, we finished early."],
          ],
        },
        { t: "p", md: "**Uslub:** *because* — eng keng tarqalgan; *as / since* — gap boshida, sabab ma'lum bo'lganda (rasmiyroq); *owing to* — rasmiy (hisobotlar, e'lonlar); *due to* — odatda **be** dan keyin: *The delay was due to…*; *thanks to* — **yaxshi** sabab uchun (*Thanks to you…*)." },
        { t: "tip", tone: "warn", md: "**Because of** / **owing to** dan keyin **gap emas, ot**: *because of the rain* (✓), ~~because of it was raining~~ (✗). Yodda saqlang: **because + gap, because of + ot.** Gapda *because* va *so* birga ishlatilmaydi: ~~Because it was cold, so I wore a coat~~." },
        { t: "check", ex: { k: "choice", q: "The flight was delayed ___ the thick fog.", opts: ["because of", "because", "although", "so that"], a: 0, why: "Keyin ot guruhi (*the thick fog*): **because of**." } },
        { t: "check", ex: { k: "fill", q: "___ it was getting dark, we decided to turn back.", a: ["As", "Since", "Because"], why: "Keyin to'liq gap: **as / since / because**." } },
      ],
    },
    {
      title: "Natija: so, therefore, consequently, as a result, hence va so … that",
      blocks: [
        { t: "p", md: "Natija so'zlari ham **uslub** bo'yicha farq qiladi. Hammasi «shuning uchun, natijada» degan ma'noda:" },
        {
          t: "table", head: ["So'z", "Uslub / o'rni", "Misol"], speak: [2],
          rows: [
            ["so", "oddiy, gap o'rtasida", "It was late, so we took a taxi."],
            ["therefore / consequently / as a result", "rasmiy, yangi gap boshida (vergul bilan)", "Costs have risen. Consequently, prices will go up."],
            ["hence / thus", "juda rasmiy, qisqa", "Demand is growing; hence the shortage."],
            ["as a result of + ot", "sabab (ot)", "As a result of the storm, the road was closed."],
          ],
        },
        { t: "p", md: "**So … that** va **such … that** natijani **darajaga** bog'laydi: **so + sifat / ravish / much / many**, **such + (a / an) + (sifat) + ot**. Ikkalasidan keyin **that + natija gap**." },
        {
          t: "examples", items: [
            { en: "The exam was so difficult that nobody finished it.", uz: "Imtihon shunchalik qiyin ediki, hech kim tugata olmadi." },
            { en: "It was such a difficult exam that nobody finished it.", uz: "Bu shunday qiyin imtihon ediki, hech kim tugata olmadi." },
            { en: "There was so much traffic that we missed the train.", uz: "Shunchalik ko'p transport bor ediki, poyezdga kechikdik." },
          ],
        },
        { t: "p", md: "**Fe'llar** ham sabab va natijani bildiradi: **result in** va **lead to** (natijaga olib kelmoq), **trigger** (sabab bo'lmoq, qo'zg'atmoq), **stem from** (…dan kelib chiqmoq). *Poor planning resulted in delays. The problem stems from old pipes.*" },
        { t: "tip", tone: "warn", md: "**Therefore / consequently** bitta gapni vergul bilan bog'lamaydi: *Costs rose, consequently prices went up* (✗). To'g'ri: *Costs rose. Consequently, prices went up.* yoki *Costs rose; consequently, prices went up.*" },
        { t: "check", ex: { k: "choice", q: "The film was ___ a good one that we watched it twice.", opts: ["such", "so", "very", "too"], a: 0, why: "**such a + sifat + ot + that**." } },
        { t: "check", ex: { k: "fill", q: "Our team made ___ much progress that we finished early.", a: ["so"], why: "**so much + that**." } },
      ],
    },
    {
      title: "Maqsad: to, in order to, so as to, so that, for + -ing",
      blocks: [
        { t: "p", md: "Maqsad (*nima uchun?*) uchun asosiy shakl — **to + fe'l**. Rasmiyroq yoki aniqroq bo'lsa **in order to / so as to**. Inkorda **to emas, in order not to / so as not to** ishlatamiz." },
        {
          t: "table", head: ["Tuzilma", "Qachon", "Misol"], speak: [2],
          rows: [
            ["to + fe'l", "oddiy", "I went to the bank to get some money."],
            ["in order to / so as to + fe'l", "rasmiy, yozma", "We moved earlier in order to avoid the traffic."],
            ["in order not to / so as not to + fe'l", "inkor maqsad", "She whispered so as not to wake the baby."],
            ["so that + ega + can / could / will / would", "ega ikkinchi gapda boshqa bo'lsa", "I left early so that she could use the room."],
            ["for + -ing / ot", "narsaning vazifasi", "This knife is used for cutting bread."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Ega bir xil** bo'lsa **to / in order to** ishlating: *I left early **to catch** the train.* Ega **boshqa** bo'lsa yoki **can/could** kerak bo'lsa **so that**: *I left early **so that** we **could** talk.* Ushbu ikki shakl aralashmaydi: ~~so that to catch~~." },
        { t: "tip", tone: "warn", md: "Inkorda **so as not to**: *so as not **to** forget*. **Not to** yolg'iz ham mumkin, lekin noaniq: *in order not to forget* aniqroq. **For + fe'l** bo'lmaydi: ~~for to go~~, ~~for go~~. **For** dan keyin faqat ot yoki **-ing**." },
        { t: "check", ex: { k: "fill", q: "He wrote the date on his hand so as ___ to forget it.", a: ["not"], why: "Inkor maqsad: **so as not to**." } },
        { t: "check", ex: { k: "choice", q: "I took notes ___ I could revise later.", opts: ["so that", "in order to", "so as to", "for"], a: 0, why: "Keyin **ega + could** (*I could revise*): **so that**." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida **-gani uchun** va **-ish uchun** qo'shimchalari bor, ular kamdan-kam so'z sifatida alohida turadi. Shuning uchun inglizchada **because of / for / so that** larni noto'g'ri tanlaymiz:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Because it was raining, we stayed at home.", "I went to the bank to get some money.", "He left early so that he could catch the train.", "It was such a good film that we watched it twice."] },
          bad: { title: "Xato", items: ["Because of it was raining, we stayed at home.", "I went to the bank for to get some money.", "He left early so that catch the train.", "It was so good film that we watched it twice."] },
        },
        { t: "p", md: "1) **because of** + **ot**, gap bo'lsa **because**. 2) **for to** — yo'q, faqat **to** (yoki *in order to*). 3) **so that** dan keyin to'liq gap (*he could …*). 4) **so** + sifat, **such** + **a** + sifat + ot." },
        { t: "check", ex: { k: "fix", wrong: "Because of it was raining, we stayed at home.", a: ["Because it was raining, we stayed at home.", "Because of the rain, we stayed at home."], hint: "gap yoki ot", why: "**because of** + ot; gap bo'lsa **because**." } },
        { t: "check", ex: { k: "fix", wrong: "I went to the bank for to get some money.", a: ["I went to the bank to get some money.", "I went to the bank in order to get some money."], hint: "for ortiqcha", why: "Maqsad uchun faqat **to** (yoki *in order to*)." } },
        { t: "check", ex: { k: "fix", wrong: "He left early so that catch the train.", a: ["He left early so that he could catch the train.", "He left early to catch the train.", "He left early in order to catch the train."], hint: "so that dan keyin to'liq gap", why: "**so that** + ega + modal. Yoki oddiy **to catch**." } },
        { t: "check", ex: { k: "fix", wrong: "It was so good film that we watched it twice.", a: ["It was such a good film that we watched it twice.", "The film was so good that we watched it twice."], hint: "so + sifat, such a + ot", why: "Ot bor bo'lsa **such a**; faqat sifat bo'lsa **so**." } },
      ],
    },
    {
      title: "O'qing: Suv tanqisligi",
      blocks: [
        {
          t: "text", title: "The water shortage", voice: "george",
          en: "Last summer our town faced a serious water shortage. Owing to the lack of rain, the river level fell sharply, and this was made worse by a broken pipe. As a result, the council cut the water supply for four hours every day. The decision triggered a lot of anger, because many families need water in the morning. However, the council explained that the cuts were necessary so as to protect the supply for hospitals. Consequently, residents began to store water and limit their use. The campaign was so successful that consumption fell by a quarter. Experts say the problem stems from old pipes rather than from the weather alone. Unless the network is replaced, similar shortages will lead to more cuts, and hence more complaints.",
          uz: "O'tgan yozda shahrimiz jiddiy suv tanqisligiga duch keldi. Yomg'ir yetishmagani uchun daryo sathi keskin pasaydi, buni singan quvur yanada yomonlashtirdi. Natijada kengash har kuni to'rt soat suv berishni to'xtatdi. Bu qaror katta g'azabni uyg'otdi, chunki ko'p oilalarga ertalab suv kerak. Biroq kengash qisqartirishlar kasalxonalar uchun suv zaxirasini saqlash maqsadida zarur ekanini tushuntirdi. Shu sababli aholi suv zaxiralashni va sarfni cheklashni boshladi. Kampaniya shunchalik muvaffaqiyatli bo'ldiki, iste'mol to'rtdan biriga kamaydi. Mutaxassislar muammo faqat ob-havodan emas, eski quvurlardan kelib chiqqanini aytadi. Tarmoq almashtirilmasa, shunga o'xshash tanqislik yana qisqartirishlarga, demak, ko'proq shikoyatlarga olib keladi.",
        },
        { t: "check", ex: { k: "choice", q: "Why did the council cut the water for four hours a day?", opts: ["To protect the water for hospitals and the supply as a whole", "Because of a strike", "To repair every pipe in the town", "Because the residents asked for it"], a: 0, why: "*necessary so as to protect the supply for hospitals*; maqsad — suv zaxirasini saqlash." } },
        { t: "check", ex: { k: "tf", q: "The text says the problem was caused only by the weather.", a: false, why: "*Experts say the problem stems from old pipes rather than from the weather alone.*" } },
        { t: "check", ex: { k: "choice", q: "What was the result of the water-saving campaign?", opts: ["Consumption fell by a quarter", "More cuts were made", "The pipes were replaced", "Nothing changed"], a: 0, why: "*The campaign was so successful that consumption fell by a quarter.*" } },
      ],
    },
    {
      title: "Dialog: Loyiha nega kechikdi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emily", en: "Tom, why is the website still not ready? We promised it for Monday.", uz: "Tom, sayt nega hali tayyor emas? Dushanbaga va'da qilgan edik." },
            { who: "Tom", en: "Owing to a server problem, the designers couldn't upload the files. As a result, we lost two days.", uz: "Server muammosi tufayli dizaynerlar fayllarni yuklay olmadi. Natijada ikki kunni yo'qotdik." },
            { who: "Emily", en: "Did anyone tell the client?", uz: "Mijozga kimdir aytdimi?" },
            { who: "Tom", en: "Yes. I wrote to them so that they wouldn't be surprised.", uz: "Ha. Ular hayron qolmasligi uchun yozdim." },
            { who: "Emily", en: "Good. We need to work faster in order to finish by Friday.", uz: "Yaxshi. Juma kuniga tugatish uchun tezroq ishlashimiz kerak." },
            { who: "Tom", en: "I agree. The team is so tired that I'm worried about quality, though.", uz: "Kelishaman. Lekin jamoa shunchalik charchaganki, sifatdan xavotirdaman." },
            { who: "Emily", en: "Then let's take short breaks instead of working through lunch. Consequently, everyone will stay focused.", uz: "Unda tushlikda ishlamay, qisqa tanaffuslar qilaylik. Natijada hamma e'tiborli qoladi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why did the website miss the deadline?", opts: ["There was a server problem", "The client changed the plan", "The designers were on holiday", "Tom forgot to start"], a: 0, why: "*Owing to a server problem, the designers couldn't upload the files.*" } },
        { t: "check", ex: { k: "tf", q: "Tom wrote to the client in order to avoid a surprise.", a: true, why: "*I wrote to them so that they wouldn't be surprised* — maqsad: kutilmagan holatga yo'l qo'ymaslik." } },
      ],
    },
  ],
  words: [
    { en: "hence", uz: "shuning uchun, demak", ipa: "hens", pos: "adverb", ex: "Demand is rising; hence the long queues.", exUz: "Talab oshmoqda; shuning uchun uzun navbatlar." },
    { en: "shortfall", uz: "kamomad, yetishmovchilik", ipa: "ˈʃɔːt.fɔːl", pos: "noun", ex: "The company reported a shortfall of two million pounds.", exUz: "Kompaniya ikki million funt kamomad haqida xabar berdi." },
    { en: "ensure", uz: "ta'minlamoq, kafolatlamoq", ipa: "ɪnˈʃɔː", pos: "verb", ex: "Please ensure that all windows are closed.", exUz: "Iltimos, barcha oynalar yopiq ekanini ta'minlang." },
    { en: "trigger", uz: "sabab bo'lmoq, qo'zg'atmoq", ipa: "ˈtrɪɡ.ə", pos: "verb", ex: "The rise in prices triggered protests.", exUz: "Narxlar oshishi noroziliklarni qo'zg'atdi." },
    { en: "stem from", uz: "…dan kelib chiqmoq", ipa: "stem frɒm", pos: "phrasal verb", ex: "Many health problems stem from stress.", exUz: "Ko'p sog'liq muammolari stressdan kelib chiqadi." },
    { en: "result in", uz: "…ga olib kelmoq, natijasida … bo'lmoq", ipa: "rɪˈzʌlt ɪn", pos: "phrasal verb", ex: "Poor planning resulted in serious delays.", exUz: "Yomon rejalashtirish jiddiy kechikishlarga olib keldi." },
    { en: "owing to", uz: "…tufayli (rasmiy)", ipa: "ˈəʊ.ɪŋ tuː", pos: "phrase", ex: "Owing to bad weather, the match was postponed.", exUz: "Yomon ob-havo tufayli o'yin keyinga qoldirildi." },
    { en: "consequently", uz: "natijada, shu sababli", ipa: "ˈkɒn.sɪ.kwənt.li", pos: "adverb", ex: "Sales fell. Consequently, the shop closed.", exUz: "Savdo tushdi. Natijada do'kon yopildi." },
    { en: "so as to", uz: "…ish maqsadida (rasmiy)", ipa: "səʊ əz tuː", pos: "phrase", ex: "She spoke slowly so as to be understood.", exUz: "U tushunilishi uchun sekin gapirdi." },
    { en: "lead to", uz: "…ga olib kelmoq", ipa: "liːd tuː", pos: "phrasal verb", ex: "Lack of sleep can lead to serious mistakes.", exUz: "Uyqusizlik jiddiy xatolarga olib kelishi mumkin." },
  ],
  practice: [
    { k: "choice", q: "The match was cancelled ___ the heavy rain.", opts: ["because of", "because", "so that", "although"], a: 0, why: "Keyin ot guruhi: **because of**." },
    { k: "choice", q: "I'm learning German ___ I can work in Berlin.", opts: ["so that", "in order to", "so as to", "because of"], a: 0, why: "Keyin **ega + can**: **so that**." },
    { k: "listen", say: "The shortage was so serious that schools closed.", opts: ["The shortage was so serious that schools closed.", "The shortage was such serious that schools closed.", "The shortage was too serious that schools closed.", "The shortage was serious so that schools closed."], a: 0, why: "**so + sifat + that**." },
    { k: "fill", q: "The film was ___ boring that we left early.", a: ["so"], uz: "Film shunchalik zerikarli ediki, erta chiqib ketdik.", why: "**so + sifat + that**." },
    { k: "fill", q: "It was ___ a boring film that we left early.", a: ["such"], uz: "Bu shunday zerikarli film ediki, erta chiqib ketdik.", why: "**such a + sifat + ot + that**." },
    { k: "fill", q: "Prices rose sharply. As a ___, fewer people bought cars.", a: ["result"], uz: "Narxlar keskin oshdi. Natijada mashinalarni kamroq odam sotib oldi.", why: "**As a result,** — natija." },
    { k: "order", uz: "U birinchi poyezdga ulgurish uchun ertaroq chiqdi.", words: ["He", "left", "early", "in", "order", "to", "catch", "the", "first", "train."], extra: ["for", "that"], alt: [["He", "left", "early", "so", "as", "to", "catch", "the", "first", "train."]], why: "**in order to + fe'l**." },
    { k: "order", uz: "Ish tashlash tufayli barcha poyezdlar bekor qilindi.", words: ["Owing", "to", "the", "strike,", "all", "trains", "were", "cancelled."], extra: ["because", "of"], why: "**Owing to + ot**." },
    { k: "translate", uz: "U poyezdga ulgurish uchun ertaroq chiqdi.", a: ["He left early to catch the train.", "He left early in order to catch the train.", "He left early so as to catch the train.", "He left early so that he could catch the train."], why: "Maqsad: **to / in order to / so as to**, yoki ega + could bilan **so that**." },
    { k: "translate", uz: "Ob-havo tufayli reys bekor qilindi.", a: ["The flight was cancelled because of the weather.", "Owing to the weather, the flight was cancelled.", "The flight was cancelled owing to the weather.", "The flight was cancelled due to the weather.", "Due to the weather, the flight was cancelled."], why: "Sabab ot bilan: **because of / owing to / due to**." },
    { k: "fix", wrong: "Because of it was raining, we stayed at home.", a: ["Because it was raining, we stayed at home.", "Because of the rain, we stayed at home."], hint: "gap yoki ot", why: "**because of** + ot, **because** + gap." },
    { k: "fix", wrong: "I use this app for to learn new words.", a: ["I use this app to learn new words.", "I use this app for learning new words."], hint: "for to — xato", why: "Maqsad: **to + fe'l** yoki **for + -ing**." },
    { k: "match", pairs: [["hence", "shuning uchun"], ["shortfall", "kamomad"], ["ensure", "ta'minlamoq"], ["trigger", "qo'zg'atmoq"], ["stem from", "…dan kelib chiqmoq"]] },
    { k: "tf", q: "**Owing to** dan keyin gap keladi: *Owing to it was late, we left.*", a: false, why: "**Owing to** + ot: *Owing to the late hour, we left.* Gap bo'lsa **because**." },
    { k: "dictation", say: "Consequently, many residents began to save water.", uz: "Natijada ko'p aholi suv tejay boshladi.", why: "**Consequently,** — yangi gap boshida vergul bilan." },
    { k: "speak", say: "I wrote it down in order not to forget it.", uz: "Unutmaslik uchun yozib qo'ydim." },
  ],
  quiz: [
    { k: "choice", q: "She spoke quietly ___ wake the baby.", opts: ["so as not to", "for not", "so that not", "in order for"], a: 0, why: "Inkor maqsad: **so as not to + fe'l**." },
    { k: "choice", q: "The delay was ___ the thick fog.", opts: ["due to", "because", "so that", "although"], a: 0, why: "**be + due to + ot**." },
    { k: "choice", q: "It was ___ cold day that we stayed in.", opts: ["such a", "so", "such", "very a"], a: 0, why: "**such a + sifat + ot + that**." },
    { k: "choice", q: "Costs have risen. ___, we must raise prices.", opts: ["Therefore", "Because of", "So that", "Owing to"], a: 0, why: "Yangi gap boshida natija: **Therefore,**." },
    { k: "fill", q: "Poor management resulted ___ heavy losses.", a: ["in"], uz: "Yomon boshqaruv katta zararlarga olib keldi.", why: "**result in**." },
    { k: "fill", q: "Many problems stem ___ a lack of communication.", a: ["from"], uz: "Ko'p muammolar muloqot yetishmasligidan kelib chiqadi.", why: "**stem from**." },
    { k: "fix", wrong: "He went to the shop for to buy bread.", a: ["He went to the shop to buy bread.", "He went to the shop in order to buy bread.", "He went to the shop for bread."], hint: "for to — xato", why: "Maqsad: **to + fe'l**." },
    { k: "order", uz: "Mijozlar kutmasligi uchun ertaroq boshladik.", words: ["We", "started", "early", "so", "that", "clients", "wouldn't", "wait."], extra: ["to", "for"], alt: [["We", "started", "early", "so", "that", "clients", "would", "not", "wait."]], why: "**so that + ega + would(n't)**." },
    { k: "translate", uz: "Bu shunday yaxshi kitob ediki, men uni ikki marta o'qidim.", a: ["It was such a good book that I read it twice.", "It was such a good book that I read it two times.", "That was such a good book that I read it twice."], why: "**such a + sifat + ot + that**." },
    { k: "tf", q: "**It was so good film that we saw it twice.** — bu gap to'g'ri.", a: false, why: "Ot bor: **such a good film**; yoki *The film was so good that…*." },
  ],
  summary: [
    "**Sabab:** *because / as / since + gap*; *because of / owing to / due to / thanks to + ot*. Rasmiy hisobotda **owing to**, **due to** (odatda *be* dan keyin).",
    "**Natija:** *so* (oddiy); *therefore, consequently, as a result, hence* (rasmiy, yangi gap boshida, vergul bilan). **so + sifat + that**, **such a + sifat + ot + that**.",
    "**Maqsad:** *to, in order to, so as to + fe'l*; inkor — **in order not to / so as not to**; ega boshqa yoki modal kerak bo'lsa — **so that + can/could/will/would**.",
    "Xatolar: ~~because of it was~~, ~~for to go~~, ~~so that catch~~, ~~so good film~~. Fe'llar: **result in, lead to, trigger, stem from**.",
  ],
  homework: "Ish yoki o'qishdagi biror muammo haqida 8 ta gap yozing: 2 ta **sabab** (*because* va *owing to*), 2 ta **natija** (*so* va *consequently*), 2 ta **maqsad** (*to* va *so as not to*), 1 ta **so … that**, 1 ta **such … that**. Har gapda gap yoki ot qo'llanganini tekshiring: *because + gap*, *because of + ot*.",
};

export default lesson;
