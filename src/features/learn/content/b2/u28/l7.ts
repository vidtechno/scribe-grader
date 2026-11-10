import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u28-l7",
  title: "Writing: a for-and-against and opinion essay",
  titleUz: "Yozish: 'for and against' va opinion essay (250 so'z)",
  goal: "**IELTS Writing Task 2** uslubidagi 250 so'zli essay yozasiz: **5 daqiqada reja tuzasiz**, opinion va for-and-against savollarini farqlaysiz, bog'lovchilar (*although, despite, consequently*), **cleft** va **inversiya** orqali urg'u berasiz, fikrni **hedging** (*tend to, arguably, to some extent*) bilan yumshatasiz va **band 6.5** ro'yxati bo'yicha o'zingizni tekshirasiz.",
  slides: [
    {
      title: "Vazifa: 40 daqiqa, 250 so'z",
      blocks: [
        { t: "p", md: "IELTS Writing Task 2 da sizga **bitta mavzu** beriladi va **kamida 250 so'z** yozishingiz kerak. Tavsiya qilingan vaqt — **40 daqiqa**. Savol ikki asosiy turda keladi:" },
        {
          t: "table", head: ["Tur", "Savol misoli", "Nima qilasiz"],
          rows: [
            ["Opinion (agree / disagree)", "To what extent do you agree or disagree?", "Pozitsiyani **aniq** ayting va butun essay davomida shuni himoya qiling"],
            ["For and against (discussion)", "Discuss both views and give your opinion.", "Ikkala tomonni ko'rsating, keyin **o'z fikringizni** bering"],
            ["Advantages / disadvantages", "Do the advantages outweigh the disadvantages?", "Ikki tomonni tahlil qilib, **xulosada** tanlang"],
          ],
        },
        { t: "p", md: "**Vaqt taqsimoti:** **5 daqiqa** reja, **30 daqiqa** yozish, **5 daqiqa** tekshirish. Rejasiz yozgan talaba ko'pincha mavzudan chiqib ketadi yoki paragraflari aralashib ketadi." },
        { t: "tip", tone: "warn", md: "**Savolning barcha qismiga** javob bering. *Discuss both views and give your opinion* — **uch ish**: birinchi tomon, ikkinchi tomon va sizning fikringiz. Birortasini tashlab ketsangiz, *Task Response* bahosi tushadi." },
        { t: "check", ex: { k: "choice", q: "\"Discuss both views and give your opinion.\" — essayda nima bo'lishi shart?", opts: ["Ikkala tomon va sizning fikringiz", "Faqat sizning fikringiz", "Faqat bitta tomon", "Faqat misollar"], a: 0, why: "Savolning uchala qismiga javob berish kerak." } },
      ],
    },
    {
      title: "5 daqiqada reja",
      blocks: [
        { t: "p", md: "Mavzu: *Some people think children should start learning a foreign language at primary school. To what extent do you agree?* Avval **pozitsiya** tanlang, keyin 2 ta asosiy dalil va 1 ta qarshi fikr toping." },
        {
          t: "table", head: ["Qadam", "Daqiqa", "Reja misoli"],
          rows: [
            ["1. Savolni tushunish, pozitsiya", "1", "Asosan roziman (largely agree)"],
            ["2. Dalil 1 + misol", "1.5", "Bolalar tovushlarni oson o'zlashtiradi; multfilm misoli"],
            ["3. Dalil 2 + misol", "1.5", "Ishonch hosil bo'ladi (grammatika qiyinlashishidan oldin)"],
            ["4. Qarshi fikr + rad etish", "1", "Bola yuklanib qolishi mumkin → qisqa o'yinli darslar"],
          ],
        },
        { t: "tip", tone: "info", md: "**Yaxshi reja** — kalit so'zlar, to'liq gaplar emas. Rejadan so'ng essayning qismlari: introduction (2 gap), body 1, body 2, counter-argument (**refutation** bilan), conclusion." },
        { t: "p", md: "**O'z pozitsiyangiz haqiqiy bo'lmasligi ham mumkin:** IELTS fikringizni emas, **dalillash qobiliyatingizni** baholaydi. Qaysi tomonga ko'proq dalil topsangiz, shu tomonni tanlang." },
        { t: "check", ex: { k: "tf", q: "IELTS Task 2 da albatta o'z haqiqiy fikringizni yozishingiz shart.", a: false, why: "Baholanadigan narsa — dalillash va tuzilma, sizning shaxsiy fikringiz emas. Eng ko'p dalil topadigan pozitsiyani tanlang." } },
      ],
    },
    {
      title: "Bog'lovchi, cleft va inversiya bilan urg'u",
      blocks: [
        { t: "p", md: "Bu bosqichda oldingi darslarni **essayda ishlatamiz**. Maqsad: bir xil *and, but, because* o'rniga fikrni **xilma-xil** va **kuchli** ifodalash." },
        {
          t: "table", head: ["Vazifa", "Tuzilma", "Essayda"], speak: [2],
          rows: [
            ["Qarama-qarshi (l3)", "Although / Despite / However", "Although the idea is popular, it has risks."],
            ["Sabab va natija (l4)", "Owing to / Consequently / so … that", "Consequently, pupils gain confidence early."],
            ["Cleft (l1)", "What … is … / It is … that …", "What makes early lessons valuable is the natural imitation."],
            ["Inversiya (l2)", "Not only did … / Rarely do …", "Not only do pupils enjoy it, but they also learn faster."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Bir essayda 1–2 ta** cleft yoki inversiya kifoya. Ular — urg'u uchun «ziravor». Hamma gapni murakkab qilsangiz, matn **sun'iy** eshitiladi. Eng muhim: **aniqlik va izchillik**." },
        {
          t: "compare",
          good: { title: "Tabiiy", items: ["Although some parents worry, early lessons bring clear benefits.", "What matters most is the quality of teaching."] },
          bad: { title: "Haddan tashqari", items: ["Not only do children learn, but never do they forget, and rarely do they struggle.", "It is the teacher that is what matters, and it is the child who is what learns."] },
        },
        { t: "check", ex: { k: "choice", q: "Which sentence uses inversion for emphasis?", opts: ["Not only do pupils enjoy it, but they also learn faster.", "Pupils enjoy it and learn faster.", "What matters is the teacher.", "Although it is hard, they enjoy it."], a: 0, why: "**Not only do + ega + fe'l** — inversiya." } },
      ],
    },
    {
      title: "Hedging: fikrni ehtiyot bilan ifodalash",
      blocks: [
        { t: "p", md: "**Hedging** — da'voni juda qat'iy qilmaslik uchun yumshatish. Akademik yozuvda *All teenagers…* yoki *Everybody knows…* kabi **mutlaq** gaplar xato deb hisoblanadi, chunki ular har doim to'g'ri emas." },
        {
          t: "table", head: ["Juda qat'iy", "Hedging bilan"], speak: [0, 1],
          rows: [
            ["All teenagers use phones too much.", "Many teenagers tend to use phones too much."],
            ["This policy is the best.", "This policy is arguably the best option."],
            ["Technology makes people lonely.", "Technology may make some people feel lonely."],
            ["Everyone agrees.", "The vast majority of experts agree."],
            ["I agree.", "To some extent, I agree."],
          ],
        },
        { t: "p", md: "**Hedging vositalari:** **modal** (*may, might, could*), **fe'l** (*tend to, seem to, appear to*), **ravish** (*arguably, probably, generally, largely*), **miqdor** (*many, most, the vast majority of, a number of*), **ibora** (*to some extent, on balance, it could be argued that*)." },
        { t: "tip", tone: "info", md: "**On balance** — «hamma tomonni tortib ko'rib»: *On balance, the benefits outweigh the risks.* **Plausible** — «ishonarli»: *a plausible explanation*. Ikkalasi ham essay xulosasida foydali." },
        { t: "check", ex: { k: "choice", q: "Which sentence is the best hedged version of \"Everybody loves online shopping\"?", opts: ["Many people tend to prefer online shopping.", "Everybody tends to love it.", "All people probably love it.", "Nobody dislikes online shopping."], a: 0, why: "**many + tend to** — yumshatilgan, aniq." } },
        { t: "check", ex: { k: "fill", q: "Young people ___ to prefer online shopping.", a: ["tend"], why: "**tend to** — umumiy tendensiya." } },
      ],
    },
    {
      title: "Namuna essay (1-qism)",
      blocks: [
        { t: "p", md: "Mavzu: *Some people think children should start learning a foreign language at primary school. To what extent do you agree?* Quyida ixcham namuna (≈ 215 so'z). Imtihonda esa **kamida 250 so'z** yozing, shuning uchun har paragrafga bittadan misol qo'shing." },
        {
          t: "text", title: "Model essay, part 1", voice: "emma",
          en: "Many parents wonder whether children should begin learning a foreign language at primary school. I largely agree with this view, although the approach matters as much as the age.\n\nTo begin with, young children tend to absorb new sounds more easily than adults. What makes early lessons so valuable is that pupils copy pronunciation naturally, without fear of mistakes. For example, a seven-year-old who watches cartoons in English will often repeat whole phrases after a few weeks. Consequently, children build confidence long before grammar becomes difficult.",
          uz: "Ko'p ota-onalar bolalar chet tilini boshlang'ich maktabdan o'rganishi kerakmi, deb o'ylaydi. Men bu fikrga asosan qo'shilaman, garchi yondashuv yosh kabi muhim bo'lsa ham.\n\nAvvalo, yosh bolalar yangi tovushlarni kattalarga qaraganda osonroq o'zlashtirishga moyil. Erta darslarni shunchalik qimmatli qiladigan narsa — o'quvchilar talaffuzni xatodan qo'rqmay, tabiiy ravishda taqlid qilishidir. Masalan, ingliz tilidagi multfilmlarni tomosha qiladigan yetti yoshli bola bir necha haftadan keyin butun iboralarni takrorlaydi. Natijada, grammatika qiyinlashishidan ancha oldin bolalarda ishonch shakllanadi.",
        },
        { t: "check", ex: { k: "choice", q: "Which sentence in part 1 is the thesis?", opts: ["I largely agree with this view, although the approach matters as much as the age.", "Many parents wonder whether children should begin learning a foreign language.", "For example, a seven-year-old watches cartoons.", "Consequently, children build confidence."], a: 0, why: "Thesis — pozitsiya: *I largely agree …*." } },
        { t: "check", ex: { k: "choice", q: "\"What makes early lessons so valuable is that …\" — bu qaysi tuzilma?", opts: ["Wh-cleft", "It-cleft", "Inversion", "Passive"], a: 0, why: "**What … is …** — wh-cleft (l1)." } },
      ],
    },
    {
      title: "Namuna essay (2-qism) va band 6.5 ro'yxati",
      blocks: [
        {
          t: "text", title: "Model essay, part 2", voice: "emma",
          en: "Admittedly, some people argue that a foreign language may overload children who are still learning to read in their own language. However, this concern is arguably exaggerated. Short, playful lessons of twenty minutes do not replace other subjects; on the contrary, many teachers report that they can improve memory and attention. Not only do pupils enjoy such lessons, but they also develop an open attitude towards other cultures.\n\nIn conclusion, starting a language at primary school brings clear benefits, provided that lessons are short, enjoyable and well taught.",
          uz: "Tan olish kerakki, ba'zi odamlar chet tili hali o'z tilida o'qishni o'rganayotgan bolalarni ortiqcha yuklashi mumkin, deb bahslashadi. Biroq bu xavotir, ehtimol, bo'rttirilgan. Yigirma daqiqalik qisqa, o'yinli darslar boshqa fanlarni siqib chiqarmaydi; aksincha, ko'p o'qituvchilarning aytishicha, ular xotira va e'tiborni yaxshilashi mumkin. O'quvchilar bunday darslardan zavqlanibgina qolmay, boshqa madaniyatlarga ochiq munosabat ham shakllantiradi.\n\nXulosa qilib aytganda, chet tilini boshlang'ich maktabdan boshlash aniq foyda beradi, agar darslar qisqa, qiziqarli va yaxshi o'tilsa.",
        },
        {
          t: "table", head: ["Band 6.5 belgisi", "Namunadan misol"],
          rows: [
            ["Aniq pozitsiya (thesis)", "I largely agree with this view…"],
            ["Qarshi fikr + rad etish", "Admittedly, … However, this concern is arguably exaggerated."],
            ["Xilma-xil bog'lovchilar", "although, consequently, on the contrary, provided that"],
            ["Urg'u tuzilmalari", "What makes … is that …; Not only do pupils enjoy …"],
            ["Hedging", "tend to, arguably, may overload, many teachers report"],
            ["Xulosa: yangi dalilsiz", "In conclusion, … brings clear benefits, provided that …"],
          ],
        },
        { t: "tip", tone: "info", md: "**Tekshirish 5 daqiqasi:** (1) savolning hamma qismiga javob berdimmi, (2) har paragrafda topic sentence bormi, (3) 250 so'zdan oshdimmi, (4) **artikl, zamon, birlik/ko'plik** xatolari. Murakkab tuzilma xato bilan yozilgandan ko'ra, oddiy va **ixcham** gap yaxshiroq." },
        { t: "check", ex: { k: "tf", q: "The model essay's conclusion adds a new example to support the thesis.", a: false, why: "Xulosa thesis ni qisqa takrorlaydi, yangi dalil qo'shmaydi." } },
        { t: "check", ex: { k: "choice", q: "Which sentence refutes the counter-argument?", opts: ["However, this concern is arguably exaggerated.", "Admittedly, some people argue that a foreign language may overload children.", "Not only do pupils enjoy such lessons.", "In conclusion, starting a language brings clear benefits."], a: 0, why: "**However, … exaggerated** — qarshi fikrni rad etish." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "Essayda tipik xatolar **tuzilma** va **so'zma-so'z tarjima** dan kelib chiqadi. Quyidagilar IELTS essaylarida eng ko'p uchraydi:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I agree with this opinion.", "Many teenagers spend too much time online.", "The reason is that it saves time.", "On the one hand, cities offer jobs."] },
          bad: { title: "Xato", items: ["I am agree with this opinion.", "All teenagers spend too much time online.", "The reason is because it saves time.", "From one hand, cities offer jobs."] },
        },
        { t: "p", md: "1) **agree** — fe'l, **am** kerak emas (*«men roziman»* so'zma-so'z). 2) **All / everybody** — mutlaq, **many / most / some**. 3) **The reason is that**, ~~The reason is because~~. 4) **On the one hand … On the other hand** (*from one hand* yo'q)." },
        { t: "check", ex: { k: "fix", wrong: "I am agree with this opinion.", a: ["I agree with this opinion."], hint: "agree — fe'l", why: "**agree** — fe'l, **am** kerak emas." } },
        { t: "check", ex: { k: "fix", wrong: "All teenagers spend too much time online.", a: ["Many teenagers spend too much time online.", "Most teenagers spend too much time online.", "Some teenagers spend too much time online.", "Many teenagers tend to spend too much time online.", "Teenagers tend to spend too much time online."], hint: "hedging", why: "**All** — mutlaq; **many / most / some** yoki **tend to**." } },
        { t: "check", ex: { k: "fix", wrong: "The reason is because it saves time.", a: ["The reason is that it saves time.", "This is because it saves time."], hint: "reason is that", why: "**The reason is that …** (*because* emas)." } },
        { t: "check", ex: { k: "fix", wrong: "From one hand, cities offer jobs.", a: ["On the one hand, cities offer jobs.", "On one hand, cities offer jobs."], hint: "on the one hand", why: "**On the one hand … On the other hand**." } },
      ],
    },
    {
      title: "Dialog: Rejani tekshirish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Bobur", en: "Sophie, I wrote a plan, but I'm worried about timing. I only have forty minutes.", uz: "Sophie, reja yozdim, lekin vaqtdan xavotirdaman. Menda atigi qirq daqiqa bor." },
            { who: "Sophie", en: "Five minutes for the plan, thirty for writing and five for checking. Is your position clear?", uz: "Reja uchun besh daqiqa, yozishga o'ttiz, tekshirishga besh. Pozitsiyang aniqmi?" },
            { who: "Bobur", en: "Yes. I think online lessons are a plausible alternative, but I'm not sure about the conclusion.", uz: "Ha. Onlayn darslar ishonarli muqobil deb o'ylayman, lekin xulosa haqida ishonchim yo'q." },
            { who: "Sophie", en: "Keep it concise. Rephrase your thesis and finish with On balance, … Don't add new ideas.", uz: "Ixcham bo'lsin. Thesis ni boshqacha so'zlar bilan ayt va On balance, … bilan tugat. Yangi fikr qo'shma." },
            { who: "Bobur", en: "What about linking words? My paragraphs feel separate.", uz: "Bog'lovchilar-chi? Paragraflarim alohida-alohida tuyuladi." },
            { who: "Sophie", en: "That's a problem of cohesion. Use Moreover, However and Consequently, but not in every sentence.", uz: "Bu bog'lanish (cohesion) muammosi. Moreover, However va Consequently dan foydalan, lekin har gapda emas." },
            { who: "Bobur", en: "Got it. I'll also try one cleft sentence. What matters most is flexibility.", uz: "Tushundim. Yana bitta cleft gap sinab ko'raman. Eng muhimi — moslashuvchanlik." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What advice does Sophie give about the conclusion?", opts: ["Keep it concise and do not add new ideas", "Add a new example", "Make it very long", "Skip it"], a: 0, why: "*Keep it concise … Don't add new ideas.*" } },
        { t: "check", ex: { k: "tf", q: "Sophie says Bobur should use a linking word in every sentence.", a: false, why: "*but not in every sentence* — har gapda emas." } },
      ],
    },
  ],
  words: [
    { en: "arguably", uz: "bahslashsa bo'ladigan darajada, ehtimol", ipa: "ˈɑː.ɡju.ə.bli", pos: "adverb", ex: "This is arguably the most important decision of her career.", exUz: "Bu, ehtimol, uning karyerasidagi eng muhim qaror." },
    { en: "plausible", uz: "ishonarli, ehtimolga yaqin", ipa: "ˈplɔː.zə.bəl", pos: "adjective", ex: "That is a plausible explanation for the delay.", exUz: "Bu kechikish uchun ishonarli izoh." },
    { en: "hedge", uz: "fikrni yumshatmoq (ehtiyotkorona ifodalamoq)", ipa: "hedʒ", pos: "verb", ex: "Writers often hedge their claims with words like may and tend to.", exUz: "Yozuvchilar da'volarini ko'pincha may va tend to kabi so'zlar bilan yumshatadi." },
    { en: "on balance", uz: "hammasini tortib ko'rganda", ipa: "ɒn ˈbæl.əns", pos: "phrase", ex: "On balance, the advantages outweigh the risks.", exUz: "Hammasini tortib ko'rganda, afzalliklari xavfdan ustun." },
    { en: "to some extent", uz: "ma'lum darajada", ipa: "tə sʌm ɪkˈstent", pos: "phrase", ex: "To some extent, I agree with your point.", exUz: "Ma'lum darajada fikringizga qo'shilaman." },
    { en: "the vast majority", uz: "aksariyat ko'pchilik", ipa: "ðə vɑːst məˈdʒɒr.ə.ti", pos: "phrase", ex: "The vast majority of students passed the test.", exUz: "Talabalarning aksariyat ko'pchiligi testdan o'tdi." },
    { en: "tend to", uz: "…ga moyil bo'lmoq, odatda …", ipa: "tend tuː", pos: "phrase", ex: "Young people tend to prefer online shopping.", exUz: "Yoshlar onlayn xaridni afzal ko'rishga moyil." },
    { en: "rephrase", uz: "boshqacha so'zlar bilan ifodalamoq", ipa: "ˌriːˈfreɪz", pos: "verb", ex: "Rephrase your thesis in the conclusion.", exUz: "Xulosada thesis ni boshqa so'zlar bilan ifodalang." },
    { en: "concise", uz: "ixcham, aniq", ipa: "kənˈsaɪs", pos: "adjective", ex: "A concise introduction is better than a long one.", exUz: "Ixcham kirish uzun kirishdan yaxshiroq." },
    { en: "cohesion", uz: "bog'lanish, uyg'unlik", ipa: "kəʊˈhiː.ʒən", pos: "noun", ex: "Linking words improve the cohesion of your essay.", exUz: "Bog'lovchi so'zlar essayingiz bog'lanishini yaxshilaydi." },
  ],
  practice: [
    { k: "choice", q: "Which is a well-hedged sentence?", opts: ["All teenagers are addicted to phones.", "Many teenagers tend to spend too much time on their phones.", "Teenagers always waste time.", "Nobody reads books now."], a: 1, why: "**Many + tend to** — yumshatilgan, aniq." },
    { k: "choice", q: "In a 40-minute Task 2, how long is it sensible to plan?", opts: ["5 minutes", "1 minute", "20 minutes", "15 minutes"], a: 0, why: "5 daqiqa reja, 30 yozish, 5 tekshirish." },
    { k: "listen", say: "On balance, the advantages outweigh the disadvantages.", opts: ["On balance, the advantages outweigh the disadvantages.", "On the balance, the advantages outweigh the disadvantages.", "On balance, the advantages overweigh the disadvantages.", "In balance, the advantages outweigh disadvantages."], a: 0, why: "Iboraning to'g'ri shakli: **On balance**." },
    { k: "fill", q: "The vast ___ of experts agree that sleep is essential.", a: ["majority"], uz: "Mutaxassislarning aksariyat ko'pchiligi uyqu zarur ekaniga qo'shiladi.", why: "**the vast majority of**." },
    { k: "fill", q: "This is, ___, the most effective solution. (hedging adverb)", a: ["arguably"], hint: "a_______", uz: "Bu, bahslashsa bo'ladi, eng samarali yechim.", why: "**arguably** — da'voni yumshatish." },
    { k: "order", uz: "Eng muhimi — o'qitishning sifati.", words: ["What", "matters", "most", "is", "the", "quality", "of", "teaching."], extra: ["it", "that"], why: "Wh-cleft: **What matters most is …**" },
    { k: "order", uz: "O'quvchilar bunday darslardan zavqlanibgina qolmay, tezroq o'rganadi ham.", words: ["Not", "only", "do", "pupils", "enjoy", "such", "lessons,", "but", "they", "also", "learn", "faster."], extra: ["does", "are"], why: "**Not only do + ega + fe'l**, …, **but … also**." },
    { k: "translate", uz: "Ma'lum darajada men bu fikrga qo'shilaman.", a: ["To some extent, I agree with this view.", "To some extent, I agree with this opinion.", "I agree with this view to some extent.", "I agree with this opinion to some extent.", "To a certain extent, I agree with this view.", "To a certain extent, I agree with this opinion."], why: "**to some extent**." },
    { k: "translate", uz: "Hammasini tortib ko'rganda, afzalliklari kamchiliklaridan ustun.", a: ["On balance, the advantages outweigh the disadvantages.", "On balance, the benefits outweigh the drawbacks.", "On balance, the advantages outweigh the drawbacks.", "On balance, the benefits outweigh the disadvantages."], why: "**On balance, … outweigh …**" },
    { k: "fix", wrong: "I am agree with this opinion.", a: ["I agree with this opinion."], hint: "agree — fe'l", why: "**agree** — fe'l, **am** kerak emas." },
    { k: "fix", wrong: "The reason is because it saves time.", a: ["The reason is that it saves time.", "This is because it saves time."], hint: "reason is that", why: "**The reason is that …**" },
    { k: "match", pairs: [["arguably", "bahslashsa bo'ladi"], ["plausible", "ishonarli"], ["concise", "ixcham"], ["cohesion", "bog'lanish"], ["rephrase", "boshqacha ifodalamoq"]] },
    { k: "tf", q: "Opinion essayda o'z pozitsiyangizni aniq aytishingiz kerak.", a: true, why: "Opinion savolida aniq pozitsiya shart." },
    { k: "dictation", say: "Admittedly, the idea has drawbacks; however, they are not decisive.", uz: "Tan olish kerak, g'oyaning kamchiliklari bor; biroq ular hal qiluvchi emas.", why: "**Admittedly, …; however, …**" },
    { k: "choice", q: "Which phrase belongs in a conclusion?", opts: ["On balance, …", "For example, …", "Firstly, …", "Moreover, …"], a: 0, why: "**On balance** xulosa qilishda ishlatiladi." },
    { k: "speak", say: "To some extent, I agree, but the vast majority of teachers prefer shorter lessons.", uz: "Ma'lum darajada qo'shilaman, lekin o'qituvchilarning aksariyati qisqaroq darslarni afzal ko'radi." },
  ],
  quiz: [
    { k: "choice", q: "Which linker introduces a concession?", opts: ["Although", "Therefore", "For example", "Firstly"], a: 0, why: "**Although** — to'sqinlik (concession)." },
    { k: "choice", q: "Which sentence is too absolute for an academic essay?", opts: ["Many students find exams stressful.", "Everybody hates exams.", "Exams tend to cause stress.", "Exams may cause stress."], a: 1, why: "**Everybody** — mutlaq, hedging yo'q." },
    { k: "choice", q: "\"Tend to\" is used to show…", opts: ["a general tendency", "a completed action", "a certain fact", "a future plan"], a: 0, why: "**tend to** — umumiy tendensiya." },
    { k: "choice", q: "Which sentence is a wh-cleft?", opts: ["What matters most is flexibility.", "Flexibility matters most.", "It matters most to be flexible.", "Most matters flexibility."], a: 0, why: "**What … is …** — wh-cleft." },
    { k: "fill", q: "To some ___, I agree with the statement.", a: ["extent"], uz: "Ma'lum darajada bu fikrga qo'shilaman.", why: "**to some extent**." },
    { k: "fill", q: "On ___, the benefits outweigh the costs.", a: ["balance"], uz: "Hammasini tortib ko'rganda, foyda xarajatdan ustun.", why: "**On balance**." },
    { k: "fix", wrong: "From one hand, cities offer jobs.", a: ["On the one hand, cities offer jobs.", "On one hand, cities offer jobs."], hint: "on the one hand", why: "**On the one hand …**" },
    { k: "order", uz: "Shuni ta'kidlash mumkinki, texnologiya vaqtni tejaydi.", words: ["It", "could", "be", "argued", "that", "technology", "saves", "time."], extra: ["can", "is"], why: "**It could be argued that …** — hedging." },
    { k: "translate", uz: "Mutaxassislarning aksariyat ko'pchiligi rozi.", a: ["The vast majority of experts agree.", "The great majority of experts agree."], why: "**the vast majority of**." },
    { k: "tf", q: "The conclusion of a 250-word essay should add a completely new example.", a: false, why: "Xulosa thesis ni jamlaydi va yangi dalil kiritmaydi." },
  ],
  summary: [
    "**Task 2:** 40 daqiqa — 5 reja, 30 yozish, 5 tekshirish; **250+ so'z**. Savolning **barcha qismiga** javob bering (opinion, for-and-against).",
    "Rejada: pozitsiya, 2 ta dalil + misol, qarshi fikr + **refutation**. Har paragrafda topic sentence, misol va link.",
    "Urg'u: **although, despite, consequently**; 1–2 ta **cleft** yoki **inversiya**. Ortiqcha murakkablik tabiiylikni buzadi.",
    "**Hedging:** *tend to, arguably, may, to some extent, the vast majority, on balance*. Xatolar: ~~I am agree~~, ~~All teenagers~~, ~~The reason is because~~, ~~From one hand~~.",
  ],
  homework: "Mavzu tanlang: «Some people believe universities should focus on practical skills rather than theory. Discuss both views and give your opinion.» 5 daqiqada reja tuzing, 40 daqiqada 250 so'zli essay yozing. Band 6.5 ro'yxati bo'yicha tekshiring: thesis, qarshi fikr + rad etish, 3 xil bog'lovchi, 1 ta cleft yoki inversiya, kamida 3 ta hedging.",
};

export default lesson;
