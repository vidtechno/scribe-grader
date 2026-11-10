import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l8",
  title: "Unit review: argument and emphasis",
  titleUz: "Bosqich takrori: dalil, urg'u va bog'lovchilar",
  goal: "Bosqichni takrorlaysiz: **cleft gaplar** (*It was … that, What I need is*), **inversiya** (*Never have I, Not only did, Had I known*), **qarama-qarshi bog'lovchilar** (*although, despite, however, whereas*), **sabab, natija va maqsad** (*owing to, consequently, so … that, so as not to*), akademik lug'at, essay tuzilishi va hedging. Hammasini yangi misollarda tekshirasiz va birgalikda ishlatasiz.",
  slides: [
    {
      title: "Takror: cleft gaplar",
      blocks: [
        { t: "p", md: "**Cleft gap** gapning bir bo'lagini ajratib, **be** dan keyin urg'u o'rniga qo'yadi. Ikki tur: **it-cleft** va **wh-cleft**." },
        {
          t: "table", head: ["Tur", "Tuzilma", "Misol"], speak: [2],
          rows: [
            ["It-cleft (odam)", "It was + ot + who / that + fe'l", "It was our driver who noticed the fire."],
            ["It-cleft (vaqt / joy)", "It was + vaqt / joy + that + gap", "It was in March that the shop opened."],
            ["Wh-cleft", "What + gap + be + muhim bo'lak", "What impressed me was her honesty."],
            ["All / The thing", "All I need is …", "All I need is a quiet place to think."],
            ["Teskari wh-cleft", "ot + is what + gap", "Honesty is what I admire most."],
          ],
        },
        { t: "tip", tone: "warn", md: "Xatolar: ortiqcha olmosh (~~What I need it is~~, ~~who he called~~) va vaqt/joy bilan **who** (~~It was in 2019 who~~). **What … did was** dan keyin fe'l asosiy shaklda: *What he did was apologise.*" },
        { t: "check", ex: { k: "fill", q: "It was in this village ___ my grandfather was born.", a: ["that"], why: "Joy ajratilgan: **that** (*who* emas)." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["What impressed me was her honesty.", "What impressed me it was her honesty.", "What impressed me were her honesty it.", "It impressed me was her honesty."], a: 0, why: "**What + gap + was + ot** — ortiqcha olmosh yo'q." } },
      ],
    },
    {
      title: "Takror: inversiya",
      blocks: [
        { t: "p", md: "Gap **salbiy yoki cheklovchi** so'z bilan boshlansa, **yordamchi fe'l egadan oldin** keladi. Yordamchi yo'q bo'lsa — **do / does / did**." },
        {
          t: "table", head: ["Tuzilma", "Misol"], speak: [1],
          rows: [
            ["Never / Rarely / Seldom + yordamchi + ega", "Seldom have I read such a clear report."],
            ["Hardly … when / No sooner … than", "Hardly had the lecture begun when the lights went out."],
            ["Not only + yordamchi + ega … but also", "Not only did she apologise, but she also paid for the damage."],
            ["Only after / when / then + yordamchi + ega", "Only then did I realise my mistake."],
            ["Under no circumstances / Little + yordamchi", "Under no circumstances should you share your password."],
            ["So / Neither + yordamchi + ega", "I've never been there. — Neither have I."],
            ["If siz shart: Had / Should / Were", "Had I known, I would have called you."],
          ],
        },
        { t: "tip", tone: "info", md: "**do / does / did** dan keyin fe'l **asosiy shaklda**: *Rarely does he **call**.* Inversiya rasmiy va adabiy uslubga xos, bir matnda 1–3 tadan ko'p ishlatmang." },
        { t: "check", ex: { k: "fill", q: "No sooner had we left ___ the storm began.", a: ["than"], why: "**No sooner … than**." } },
        { t: "check", ex: { k: "fix", wrong: "Rarely we go abroad in winter.", a: ["Rarely do we go abroad in winter."], hint: "do kerak", why: "**Rarely + do + ega + asosiy fe'l**." } },
      ],
    },
    {
      title: "Takror: qarama-qarshi bog'lovchilar",
      blocks: [
        { t: "p", md: "Qaysi so'zdan keyin **gap**, qaysisidan keyin **ot / -ing** kelishini bilish eng muhim:" },
        {
          t: "table", head: ["Bog'lovchi", "Keyin nima", "Misol"], speak: [2],
          rows: [
            ["although / even though / though", "to'liq gap", "Although the offer was tempting, I refused."],
            ["despite / in spite of", "ot, -ing, the fact that + gap", "Despite the rain, we had a picnic."],
            ["however / nevertheless / nonetheless", "yangi gap boshida, vergul bilan", "It was costly. Nevertheless, it was worth it."],
            ["whereas / while", "farqni bog'laydi", "Tom is sociable, whereas Ben is shy."],
            ["albeit", "sifat / ravish", "a useful, albeit expensive, tool"],
          ],
        },
        { t: "tip", tone: "warn", md: "~~Despite of~~, ~~Although … but~~, ~~Despite he was ill~~ va **vergul bilan** ikki gapni bog'lash (~~…, however …~~) — tipik xatolar. Bitta ma'no uchun **bitta** bog'lovchi." },
        { t: "check", ex: { k: "choice", q: "___ the fact that it was late, we kept working.", opts: ["Despite", "Although", "However", "Whereas"], a: 0, why: "Keyin **the fact that + gap**: **despite**." } },
        { t: "check", ex: { k: "fix", wrong: "Despite of the cost, they bought the house.", a: ["Despite the cost, they bought the house.", "In spite of the cost, they bought the house."], hint: "despite of — xato", why: "**Despite** + of siz; **in spite of**." } },
      ],
    },
    {
      title: "Takror: sabab, natija va maqsad",
      blocks: [
        {
          t: "table", head: ["Vazifa", "Tuzilma", "Misol"], speak: [2],
          rows: [
            ["Sabab + gap", "because / as / since + gap", "As it was late, we took a taxi."],
            ["Sabab + ot", "because of / owing to / due to + ot", "Owing to the strike, trains stopped."],
            ["Natija", "so / therefore / consequently / as a result", "Costs rose. Consequently, prices went up."],
            ["Daraja + natija", "so + sifat + that; such a + sifat + ot + that", "It was such a long film that we left."],
            ["Maqsad", "to / in order to / so as (not) to / so that + modal", "She whispered so as not to wake him."],
          ],
        },
        { t: "tip", tone: "warn", md: "~~Because of it was raining~~ (to'g'ri: *because it was raining* yoki *because of the rain*), ~~for to go~~ (to'g'ri: *to go*), ~~so good film~~ (to'g'ri: *such a good film*). **so that** dan keyin ega + **can / could / will / would**." },
        { t: "check", ex: { k: "choice", q: "He opened the window ___ some fresh air could come in.", opts: ["so that", "in order to", "so as to", "for"], a: 0, why: "Keyin **ega + could**: **so that**." } },
        { t: "check", ex: { k: "fix", wrong: "He studied hard for to pass the exam.", a: ["He studied hard to pass the exam.", "He studied hard in order to pass the exam."], hint: "for ortiqcha", why: "Maqsad: **to + fe'l**." } },
      ],
    },
    {
      title: "Takror: akademik lug'at, essay va hedging",
      blocks: [
        { t: "p", md: "Fikrni **ishonarli** qilish uchun akademik so'zlar, aniq tuzilma va ehtiyotkor ifoda kerak. Yangi: **advocate**, **stance**, **premise**, **nuance**, **compelling**, **rhetorical**." },
        {
          t: "examples", items: [
            { en: "Many experts advocate shorter working weeks.", uz: "Ko'p mutaxassislar qisqaroq ish haftasini qo'llab-quvvatlaydi.", note: "**advocate** = targ'ib qilmoq" },
            { en: "My stance is that every child should learn to swim.", uz: "Mening pozitsiyam: har bir bola suzishni o'rganishi kerak.", note: "**stance** = pozitsiya" },
            { en: "She gave a compelling reason for the change.", uz: "U o'zgarish uchun ishonarli sabab keltirdi.", note: "**compelling** = ishontiruvchi, kuchli" },
          ],
        },
        {
          t: "table", head: ["Mavzu", "Esda saqlang"],
          rows: [
            ["Collocation (l5)", "play a role, raise concerns, draw a conclusion, reach a consensus, draw attention to"],
            ["Essay (l6)", "hook → background → **thesis**; body: topic sentence, explanation, example, link; admit → refute; xulosa yangi dalilsiz"],
            ["Hedging (l7)", "tend to, arguably, may, to some extent, the vast majority, on balance"],
            ["Signpost", "Firstly, Moreover, However, Consequently, In conclusion"],
          ],
        },
        { t: "tip", tone: "info", md: "Xatolar: ~~make a conclusion~~ (→ *draw*), ~~rised concerns~~ (→ *raised*), ~~I am agree~~ (→ *I agree*), ~~All teenagers~~ (→ *Many … / tend to*), ~~At last~~ xulosa uchun (→ *In conclusion*)." },
        { t: "check", ex: { k: "choice", q: "Which verb completes: We can ___ a conclusion from this data.", opts: ["draw", "make", "do", "take"], a: 0, why: "**draw a conclusion**." } },
        { t: "check", ex: { k: "fix", wrong: "The report rised concerns about safety.", a: ["The report raised concerns about safety."], hint: "raise, raised", why: "**raise** — *raised*." } },
      ],
    },
    {
      title: "O'qing: Mashinasiz shahar markazi",
      blocks: [
        {
          t: "text", title: "A car-free centre?", voice: "george",
          en: "Our council has proposed closing the city centre to cars, and the plan has proved highly controversial. What worries shopkeepers most is the loss of customers. Rarely do they welcome change. Although the idea is bold, the underlying rationale is simple: cleaner air and safer streets. Owing to heavy traffic, accidents have risen, and consequently many parents avoid walking with small children. In order to reduce the risk, the council wants wider pavements. Critics assert that the plan ignores older residents; however, a compelling answer is that free minibuses will serve them. On balance, I take the stance that the benefits outweigh the costs, albeit with careful monitoring. Had the council consulted people earlier, the debate would have been calmer. Only then will the public trust the plan.",
          uz: "Kengashimiz shahar markazini mashinalar uchun yopishni taklif qildi va reja juda munozarali bo'ldi. Do'kondorlarni eng ko'p tashvishlantirgani — mijozlarni yo'qotish. Ular o'zgarishni kamdan-kam qabul qiladi. G'oya jasoratli bo'lsa-da, asosiy mantiq oddiy: toza havo va xavfsiz ko'chalar. Zich transport tufayli avariyalar ko'paydi va natijada ko'p ota-onalar kichik bolalar bilan yurishdan qochadi. Xavfni kamaytirish uchun kengash keng piyodalar yo'lkalarini xohlaydi. Tanqidchilar reja keksa aholini e'tiborsiz qoldiradi, deb da'vo qiladi; biroq ishontiruvchi javob shuki, ularga bepul minibuslar xizmat qiladi. Hammasini tortib ko'rganda, men afzalliklar xarajatdan ustun degan pozitsiyadaman, ammo diqqat bilan kuzatish sharti bilan. Kengash odamlar bilan oldinroq maslahatlashganida, bahs sokinroq bo'lardi. Faqat shundagina jamoatchilik rejaga ishonadi.",
        },
        { t: "check", ex: { k: "tf", q: "According to the text, shopkeepers' main worry is the cost of new pavements.", a: false, why: "*What worries shopkeepers most is the loss of customers.*" } },
        { t: "check", ex: { k: "choice", q: "What is the writer's stance?", opts: ["The benefits outweigh the costs, with careful monitoring", "The plan should be cancelled", "Shopkeepers are always right", "Nobody objects to the plan"], a: 0, why: "*On balance, I take the stance that the benefits outweigh the costs, albeit with careful monitoring.*" } },
        { t: "check", ex: { k: "choice", q: "Which sentence in the text is an inversion?", opts: ["Rarely do they welcome change.", "What worries shopkeepers most is the loss of customers.", "In order to reduce the risk, the council wants wider pavements.", "Critics assert that the plan ignores older residents."], a: 0, why: "**Rarely do they …** — salbiy ravishdan keyin inversiya." } },
      ],
    },
    {
      title: "Dialog: Munozara oldidan",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Olivia", en: "Karim, our debate is on Friday. Which side do you advocate: banning cars in the centre, or keeping them?", uz: "Karim, bahsimiz juma kuni. Qaysi tomonni qo'llab-quvvatlaysan: markazda mashinalarni taqiqlashnimi yoki saqlashnimi?" },
            { who: "Karim", en: "I'm for the ban. What convinces me is the air quality. It's the children who suffer most.", uz: "Men taqiqning tarafdoriman. Meni ishontiradigan narsa — havo sifati. Eng ko'p azob chekadiganlar bolalar." },
            { who: "Olivia", en: "Admittedly, that's a strong point. However, the opposing team will say that shops will lose customers.", uz: "Tan olaman, bu kuchli dalil. Biroq qarshi jamoa do'konlar mijozlarini yo'qotadi, deydi." },
            { who: "Karim", en: "True, although many city centres actually earn more after they close to cars. Not only does the air improve, but the streets also become busier with pedestrians.", uz: "To'g'ri, lekin ko'p shahar markazlari mashinalar uchun yopilgach, aslida ko'proq daromad oladi. Nafaqat havo yaxshilanadi, balki ko'chalar piyodalar bilan ham gavjum bo'ladi." },
            { who: "Olivia", en: "Careful, don't generalise. Say that many centres tend to benefit.", uz: "Ehtiyot bo'l, umumlashtirma. «Ko'p markazlar foyda ko'radi» de." },
            { who: "Karim", en: "Good point. And I'll end with a rhetorical question: do we want streets for cars, or for people?", uz: "To'g'ri aytasan. Va ritorik savol bilan tugataman: ko'chalar mashinalar uchunmi yoki odamlar uchunmi?" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Olivia tell Karim to avoid?", opts: ["Generalising", "Admitting any weakness", "Using questions", "Giving examples"], a: 0, why: "*Careful, don't generalise. Say that many centres tend to benefit.*" } },
        { t: "check", ex: { k: "tf", q: "Karim plans to finish with a rhetorical question.", a: true, why: "*I'll end with a rhetorical question: do we want streets for cars, or for people?*" } },
      ],
    },
  ],
  words: [
    { en: "advocate", uz: "targ'ib qilmoq, qo'llab-quvvatlamoq", ipa: "ˈæd.və.keɪt", pos: "verb", ex: "Many doctors advocate a diet with less sugar.", exUz: "Ko'p shifokorlar shakari kam parhezni qo'llab-quvvatlaydi." },
    { en: "reinforce", uz: "mustahkamlamoq, kuchaytirmoq", ipa: "ˌriː.ɪnˈfɔːs", pos: "verb", ex: "The example reinforces the writer's main point.", exUz: "Misol muallifning asosiy fikrini mustahkamlaydi." },
    { en: "underlying", uz: "asosiy, tub (yashirin)", ipa: "ˌʌn.dəˈlaɪ.ɪŋ", pos: "adjective", ex: "The underlying cause of the problem is poor planning.", exUz: "Muammoning tub sababi — yomon rejalashtirish." },
    { en: "rationale", uz: "asos, mantiqiy tushuntirish", ipa: "ˌræʃ.əˈnɑːl", pos: "noun", ex: "What is the rationale behind this decision?", exUz: "Bu qarorning mantiqiy asosi nima?" },
    { en: "stance", uz: "pozitsiya, qarash", ipa: "stæns", pos: "noun", ex: "The minister took a firm stance on the issue.", exUz: "Vazir bu masalada qat'iy pozitsiya egalladi." },
    { en: "premise", uz: "dastlabki asos, shart", ipa: "ˈprem.ɪs", pos: "noun", ex: "The argument rests on a false premise.", exUz: "Dalil noto'g'ri dastlabki asosga tayanadi." },
    { en: "oversimplify", uz: "haddan tashqari soddalashtirmoq", ipa: "ˌəʊ.vəˈsɪm.plɪ.faɪ", pos: "verb", ex: "It would be unfair to oversimplify such a complex issue.", exUz: "Bunday murakkab masalani haddan tashqari soddalashtirish adolatsizlik bo'lardi." },
    { en: "nuance", uz: "nozik farq, nuans", ipa: "ˈnjuː.ɑːns", pos: "noun", ex: "A good translator notices every nuance of meaning.", exUz: "Yaxshi tarjimon ma'noning har bir nozikligini sezadi." },
    { en: "compelling", uz: "ishontiruvchi, kuchli", ipa: "kəmˈpel.ɪŋ", pos: "adjective", ex: "She presented a compelling case for change.", exUz: "U o'zgarish uchun ishontiruvchi dalillar keltirdi." },
    { en: "rhetorical", uz: "ritorik, ta'sir qilish uchun", ipa: "rɪˈtɒr.ɪ.kəl", pos: "adjective", ex: "He ended his speech with a rhetorical question.", exUz: "U nutqini ritorik savol bilan tugatdi." },
  ],
  practice: [
    { k: "choice", q: "___ I need is a long holiday.", opts: ["What", "It", "That", "Which"], a: 0, why: "Wh-cleft: **What I need is …**" },
    { k: "choice", q: "Which sentence is correct?", opts: ["Never have I felt so relaxed.", "Never I have felt so relaxed.", "Never I felt so relaxed.", "Never felt I so relaxed."], a: 0, why: "Salbiy so'zdan keyin yordamchi fe'l egadan oldin: **have I felt**." },
    { k: "listen", say: "Seldom have I read a more convincing report.", opts: ["Seldom have I read a more convincing report.", "Seldom I have read a more convincing report.", "Seldom had I read a more convincing report.", "Seldom have I reading a more convincing report."], a: 0, why: "**Seldom have I read …** — inversiya." },
    { k: "fill", q: "___ the heavy rain, the festival went ahead as planned.", a: ["Despite", "In spite of"], uz: "Kuchli yomg'irga qaramay, festival rejadagidek o'tdi.", why: "Keyin ot (*the heavy rain*): **despite / in spite of**." },
    { k: "fill", q: "The roads were icy; ___, the buses were cancelled.", a: ["consequently", "therefore", "hence", "thus"], uz: "Yo'llar muz bo'lgan; natijada avtobuslar bekor qilindi.", why: "Sabab → natija: **consequently / therefore**." },
    { k: "order", uz: "Reja qimmat bo'libgina qolmay, mashhur ham emas edi.", words: ["Not", "only", "was", "the", "plan", "expensive,", "but", "it", "was", "also", "unpopular."], extra: ["did", "is"], why: "**Not only was + ega**, **but … also**." },
    { k: "order", uz: "U ismni unutmaslik uchun yozib qo'ydi.", words: ["He", "wrote", "it", "down", "so", "as", "not", "to", "forget", "the", "name."], extra: ["for", "that"], why: "**so as not to + fe'l**." },
    { k: "translate", uz: "Garchi taklif jozibali bo'lsa-da, men uni rad etdim.", a: ["Although the offer was tempting, I turned it down.", "Although the offer was tempting, I rejected it.", "Although the offer was tempting, I declined it.", "Even though the offer was tempting, I turned it down.", "Though the offer was tempting, I turned it down.", "Even though the offer was tempting, I rejected it."], why: "**Although + gap**, but siz." },
    { k: "translate", uz: "Bilganimda, sizga oldindan aytgan bo'lardim.", a: ["Had I known, I would have told you.", "Had I known, I would have told you in advance.", "Had I known, I would have told you earlier.", "Had I known, I would have told you before."], why: "3-shart, **if** siz: **Had I known …**" },
    { k: "fix", wrong: "Rarely we go abroad in winter.", a: ["Rarely do we go abroad in winter."], hint: "do kerak", why: "**Rarely + do + ega**." },
    { k: "fix", wrong: "He studied hard for to pass the exam.", a: ["He studied hard to pass the exam.", "He studied hard in order to pass the exam."], hint: "for ortiqcha", why: "Maqsad: **to + fe'l**." },
    { k: "fix", wrong: "What she wants it is a quiet room.", a: ["What she wants is a quiet room."], hint: "it ortiqcha", why: "**What she wants** — ega, **it** kerak emas." },
    { k: "match", pairs: [["advocate", "targ'ib qilmoq"], ["reinforce", "mustahkamlamoq"], ["stance", "pozitsiya"], ["compelling", "ishontiruvchi"], ["underlying", "tub, yashirin"]] },
    { k: "tf", q: "**Although he was ill, but he came.** — bu gap to'g'ri.", a: false, why: "**Although** va **but** bitta gapda birga ishlatilmaydi." },
    { k: "dictation", say: "What matters is not the price but the quality.", uz: "Muhimi narx emas, sifat.", why: "Wh-cleft: **What matters is …**" },
    { k: "choice", q: "Which sentence is a well-hedged claim?", opts: ["Teenagers tend to sleep too little.", "All teenagers sleep too little.", "Everybody knows teenagers sleep little.", "Teenagers never sleep."], a: 0, why: "**tend to** — tendensiya, mutlaq emas." },
    { k: "speak", say: "Not only do I advocate this plan, but I also think it is a compelling idea.", uz: "Men bu rejani qo'llab-quvvatlabgina qolmay, uni ishontiruvchi g'oya deb ham hisoblayman." },
  ],
  quiz: [
    { k: "choice", q: "___ being tired, she finished the report.", opts: ["Despite", "Although", "However", "Whereas"], a: 0, why: "Keyin **-ing**: **despite**." },
    { k: "choice", q: "The film was so long ___ we left early.", opts: ["that", "than", "as", "which"], a: 0, why: "**so + sifat + that**." },
    { k: "choice", q: "He opened a window ___ some fresh air could come in.", opts: ["so that", "in order to", "so as to", "for"], a: 0, why: "Keyin **ega + could**: **so that**." },
    { k: "choice", q: "Which sentence is correct?", opts: ["Had I known, I would have called you.", "If had I known, I would have called you.", "Have I known, I would have called you.", "Had known I, I would have called you."], a: 0, why: "3-shart, **if** siz: **Had I known**." },
    { k: "fill", q: "It was my sister ___ gave me the idea.", a: ["who", "that"], uz: "Menga g'oyani opam bergan.", why: "Odam ajratilgan: **who / that**." },
    { k: "fill", q: "Hardly had she sat down ___ the phone rang.", a: ["when"], uz: "U o'tirishi bilan telefon jiringladi.", why: "**Hardly … when**." },
    { k: "fix", wrong: "Because of it was late, we took a taxi.", a: ["Because it was late, we took a taxi.", "Because of the late hour, we took a taxi."], hint: "gap yoki ot", why: "**because** + gap; **because of** + ot." },
    { k: "order", uz: "Menga faqat bir oz ko'proq vaqt kerak.", words: ["All", "I", "need", "is", "a", "little", "more", "time."], extra: ["what", "it"], why: "**All I need is …**" },
    { k: "translate", uz: "Xulosa qilib aytganda, afzalliklari kamchiliklaridan ustun.", a: ["In conclusion, the advantages outweigh the disadvantages.", "In conclusion, the benefits outweigh the drawbacks.", "In conclusion, the advantages outweigh the drawbacks.", "In conclusion, the benefits outweigh the disadvantages.", "To conclude, the advantages outweigh the disadvantages."], why: "**In conclusion, … outweigh …**" },
    { k: "tf", q: "**We can make a conclusion from the data.** — to'g'ri collocation.", a: false, why: "**draw a conclusion**; *make a conclusion* xato." },
  ],
  summary: [
    "**Cleft:** *It was … that/who …, What I need is …, All I want is …*. Ortiqcha olmosh yo'q (~~What I need it is~~).",
    "**Inversiya:** salbiy so'z + yordamchi + ega (*Never have I, Rarely does he, Not only did, Hardly had … when, Had I known*).",
    "**Bog'lovchilar:** *although + gap, despite + ot/-ing*, *however, nevertheless*; sabab *because / because of / owing to*; natija *so / consequently / so … that*; maqsad *to / so as not to / so that*.",
    "**Dalil va essay:** thesis, topic sentence, misol, qarshi fikr + rad etish, xulosa; akademik collocation (*draw a conclusion, raise concerns*); hedging (*tend to, arguably*).",
  ],
  homework: "Bir munozarali mavzu tanlang (masalan, shahar markazini mashinalar uchun yopish). 150 so'zli kichik matn yozing: 1 cleft, 1 inversiya, 1 *although / despite*, 1 sabab-natija, 1 maqsad (*so as not to*), 2 akademik collocation va 2 hedging so'zi ishlating. Keyin har tuzilmaning tagiga chizib, xatolarni tekshiring.",
};

export default lesson;
