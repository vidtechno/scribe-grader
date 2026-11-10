import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u30-l1",
  title: "Idioms and fixed expressions",
  titleUz: "Idioma va tayyor iboralar: ishlatilishi va o'zbekcha ekvivalentlari",
  goal: "10 ta keng tarqalgan **idioma** (*a piece of cake, under the weather, break the ice, the last straw…*) ning ma'nosini, qaysi vaziyatda ishlatilishini va qanchalik norasmiy ekanini bilasiz. Idiomani so'zma-so'z tarjima qilmaysiz, uni **o'zgartirmasdan** aytasiz (*on the head*, *a piece of cake*) va nutqda me'yorida ishlatasiz.",
  slides: [
    {
      title: "Idioma nima va nima uchun kerak?",
      blocks: [
        { t: "p", md: "**Idioma** (*idiom*) — ma'nosi alohida so'zlarning ma'nosidan chiqmaydigan, **o'zgarmas** ibora. *It's a piece of cake* gapini so'zma-so'z «Bu — tort bo'lagi» deb tarjima qilsangiz, ma'no chiqmaydi. Aslida u «Bu juda oson» degani." },
        { t: "p", md: "Nega B2 da idioma kerak? Chunki ingliz tilida so'zlashuvchilar suhbatda, podkastda, serialda, ish joyidagi norasmiy gapda ularni doim ishlatadi. Agar bilmasangiz, *Let's call it a day* eshitib, «Buni kun deb ataymiz» deb o'ylaysiz. IELTS Speaking da esa 1–2 ta **o'rinli** idioma nutqingizni tabiiyroq qiladi." },
        { t: "tip", tone: "info", md: "Bugungi maqsad: **10 ta** foydali idioma. Ularni mavzu bo'yicha o'rganamiz: *oson / qiyin*, *his-tuyg'u*, *muloqot*, *qaror va pul*." },
        {
          t: "table", head: ["Idioma", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["a piece of cake", "juda oson", "The test was a piece of cake."],
            ["under the weather", "o'zini yomon his qilmoq (biroz kasal)", "I'm a bit under the weather today."],
            ["once in a blue moon", "juda kamdan-kam", "We eat out once in a blue moon."],
            ["break the ice", "notanish odamlar orasida suhbatni boshlamoq", "A joke helped to break the ice."],
            ["the last straw", "sabr kosasini to'ldirgan oxirgi voqea", "The delay was the last straw."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Which sentence means *The exam was very easy*?", opts: ["The exam was a piece of cake.", "The exam was under the weather.", "The exam was the last straw.", "The exam was once in a blue moon."], a: 0, why: "**a piece of cake** = juda oson. Boshqa idiomalar boshqa ma'no beradi: kasallik, sabr tugashi, kamdan-kam." } },
      ],
    },
    {
      title: "10 idioma: mavzu bo'yicha",
      blocks: [
        { t: "p", md: "Birinchi jadvalni davom ettiramiz. Qolgan 5 ta idioma:" },
        {
          t: "table", head: ["Idioma", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["hit the nail on the head", "aynan to'g'ri aytmoq, muammoning mohiyatini topmoq", "You hit the nail on the head: the price is the problem."],
            ["on the same page", "bir xil tushunchada bo'lmoq, kelishgan bo'lmoq", "Before we start, let's make sure we're on the same page."],
            ["call it a day", "bugungi ishni tugatmoq", "We've done enough. Let's call it a day."],
            ["cost an arm and a leg", "juda qimmat turmoq", "That watch cost an arm and a leg."],
            ["the ball is in your court", "navbat sizda, qaror siz qabul qilasiz", "I've sent you my offer. The ball is in your court."],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida ham shunga o'xshash iboralar bor: *muzni buzmoq* (break the ice), *sabr kosasi to'ldi* (the last straw), *oyda-yilda bir* (once in a blue moon). Lekin ularning **inglizcha tasviri boshqa**: ingliz tilida *ko'k oy*, *somon*, *mix* bor. Ma'noni oling, tasvirni so'zma-so'z ko'chirmang." },
        {
          t: "examples", items: [
            { en: "Don't worry about the interview. For you it'll be a piece of cake.", uz: "Suhbatdan xavotir olmang. Siz uchun bu juda oson bo'ladi." },
            { en: "I'm feeling a bit under the weather, so I'll stay at home.", uz: "O'zimni biroz yomon his qilyapman, shuning uchun uyda qolaman." },
            { en: "My brother lives abroad, so I see him once in a blue moon.", uz: "Akam chet elda yashaydi, shuning uchun uni oyda-yilda bir ko'raman." },
            { en: "It's late and we're all tired. Shall we call it a day?", uz: "Kech bo'ldi, hamma charchadi. Bugunga yetar, shundaymi?" },
          ],
        },
        { t: "check", ex: { k: "match", pairs: [["hit the nail on the head", "aynan to'g'ri aytmoq"], ["call it a day", "bugungi ishni tugatmoq"], ["on the same page", "bir xil tushunchada"], ["cost an arm and a leg", "juda qimmat turmoq"], ["the ball is in your court", "navbat sizda"]] } },
      ],
    },
    {
      title: "Qachon ishlatiladi? Register va me'yor",
      blocks: [
        { t: "p", md: "Idiomalarning ko'pi **norasmiy** (*informal*). Do'stlar bilan, hamkasblar bilan, norasmiy yig'ilishda yaxshi ishlaydi. Rasmiy xat, esse yoki ilmiy ma'ruzada kamroq ishlatiladi." },
        {
          t: "table", head: ["Vaziyat", "Idioma", "Mos kelishi"],
          rows: [
            ["Do'stingiz bilan suhbat", "a piece of cake, under the weather", "juda mos"],
            ["Hamkasblar bilan yig'ilish", "on the same page, the ball is in your court", "mos, norasmiy-biznes"],
            ["IELTS Speaking", "once in a blue moon, break the ice", "mos, lekin 1–2 ta"],
            ["Rasmiy xat yoki akademik esse", "—", "deyarli ishlatilmaydi"],
          ],
        },
        { t: "tip", tone: "warn", md: "**Me'yor.** Bir javobda 1–2 ta idioma yetarli. Har gapda idioma ishlatsangiz, nutqingiz sun'iy eshitiladi. Idiomani **faqat to'liq ishonchingiz** komil bo'lsa ishlating: ma'nosi ham, tuzilishi ham." },
        { t: "p", md: "**Idioma o'zgarmaydi.** So'zlarini almashtirib bo'lmaydi: *a piece of cake* o'rniga *a slice of cake* deyilmaydi. Fe'l zamoni va olmosh esa o'zgaradi: *It was a piece of cake. It will cost an arm and a leg. She hit the nail on the head.*" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It was a piece of cake.", "You hit the nail on the head.", "It cost me an arm and a leg."] },
          bad: { title: "Xato (idioma buzilgan)", items: ["It was a slice of cake.", "You hit the head of the nail.", "It cost me a hand and a leg."] },
        },
        { t: "check", ex: { k: "tf", q: "Idiomaning ichidagi so'zni sinonimi bilan almashtirish mumkin: *a piece of cake* → *a slice of cake*.", a: false, why: "Idioma **o'zgarmas** ibora. So'zni almashtirsangiz, ma'no yo'qoladi yoki g'alati eshitiladi." } },
        { t: "check", ex: { k: "choice", q: "In which situation is an idiom like *a piece of cake* the least suitable?", opts: ["A formal letter to a government office", "A chat with a classmate", "A talk with a friendly colleague", "A casual call with a cousin"], a: 0, why: "Idiomalar odatda norasmiy. **Rasmiy xatda** ular mos kelmaydi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan interferensiya)",
      blocks: [
        { t: "p", md: "O'zbek tilida so'zlovchilar idiomada ko'pincha shu xatolarni qiladi: predlogni almashtirib yuboradi, artiklni tushirib qoldiradi yoki idiomaning bir qismini unutadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You hit the nail on the head.", "I feel under the weather.", "Let's call it a day.", "It was a piece of cake."] },
          bad: { title: "Xato", items: ["You hit the nail in the head.", "I feel under weather.", "Let's call a day.", "It was a piece of the cake."] },
        },
        { t: "tip", tone: "warn", md: "**1)** Predlog: *hit the nail **on** the head* (o'zbekchada «boshiga» deb *in* yoki *to* demaymiz). **2)** Artikl: *under **the** weather*. **3)** Tushib qolgan **it**: *call **it** a day*. **4)** Ortiqcha **the**: *a piece of cake*." },
        { t: "check", ex: { k: "fix", wrong: "You hit the nail in the head.", a: ["You hit the nail on the head."], hint: "predlogni almashtiring", why: "Idioma: *hit the nail **on** the head*." } },
        { t: "check", ex: { k: "fix", wrong: "I feel under weather today.", a: ["I feel under the weather today."], hint: "artikl", why: "Idioma artikl bilan: *under **the** weather*." } },
        { t: "check", ex: { k: "fix", wrong: "It is late. Let's call a day.", a: ["It is late. Let's call it a day.", "It's late. Let's call it a day."], hint: "bitta so'z tushib qolgan", why: "To'g'ri shakl: *call **it** a day*. **it** tushirilmaydi." } },
        { t: "check", ex: { k: "fix", wrong: "The maths test was a piece of the cake.", a: ["The maths test was a piece of cake."], hint: "ortiqcha so'z", why: "*a piece of cake* — **the** yo'q." } },
      ],
    },
    {
      title: "O'qing: Yangi ish, yangi odamlar",
      blocks: [
        {
          t: "text", title: "My first week at a new office", voice: "emma",
          en: "Last month I started a new job at a design studio, and my first week was not easy. On Monday I was nervous, because I knew nobody. Luckily, my manager broke the ice by asking everyone to share a funny story about their first job. After that I relaxed. On Wednesday I caught a cold and felt a bit under the weather, but I did not want to miss the meeting about the new project. The deadline was tight, so we spent an hour making sure we were all on the same page. The task itself was a piece of cake for me, because I had done something similar before. When the printer broke down for the third time on Friday afternoon, it was the last straw, and we all laughed and called it a day. I think I will enjoy working here.",
          uz: "O'tgan oy dizayn studiyasida yangi ishni boshladim va birinchi haftam oson bo'lmadi. Dushanba kuni hayajonlandim, chunki hech kimni tanimasdim. Yaxshiyamki, menejerim hammadan birinchi ishi haqida kulgili voqea aytib berishni so'rab, muzni buzdi. Shundan keyin o'zimni erkin his qildim. Chorshanba kuni shamollab qoldim va o'zimni biroz yomon his qildim, lekin yangi loyiha haqidagi yig'ilishni o'tkazib yuborishni xohlamadim. Muddat tig'iz edi, shuning uchun bir soat hammamiz bir xil tushunchada ekanimizga ishonch hosil qildik. Topshiriqning o'zi men uchun juda oson edi, chunki avval shunga o'xshash ishni bajargan edim. Juma kuni tushdan keyin printer uchinchi marta buzilganda sabr kosasi to'ldi, hammamiz kulib, ishni tugatdik. Menimcha, bu yerda ishlash menga yoqadi.",
        },
        { t: "check", ex: { k: "choice", q: "What helped the writer to relax on the first day?", opts: ["The manager asked everyone to tell a funny story.", "The writer already knew the team.", "The writer finished the project quickly.", "The printer worked well."], a: 0, why: "*broke the ice by asking everyone to share a funny story*: muzni buzgan ana shu savol bo'ldi." } },
        { t: "check", ex: { k: "tf", q: "The writer stayed at home on Wednesday because of a cold.", a: false, why: "Muallif *under the weather* edi, lekin yig'ilishni **o'tkazib yubormaslik** uchun ishga keldi." } },
      ],
    },
    {
      title: "Dialog: Hafta oxiri rejalari",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Anna", en: "You look tired, Tom. Are you all right?", uz: "Charchagan ko'rinasan, Tom. Hammasi joyidami?" },
            { who: "Tom", en: "I'm a bit under the weather, to be honest. And the report was not a piece of cake either.", uz: "Rostini aytsam, biroz o'zimni yomon his qilyapman. Hisobot ham oson bo'lmadi." },
            { who: "Anna", en: "Then let's call it a day. Can you send me the last part tomorrow?", uz: "Unda bugunga yetar. Oxirgi qismini ertaga yubora olasanmi?" },
            { who: "Tom", en: "Sure. By the way, do we still need a bigger budget for the event?", uz: "Albatta. Aytgancha, tadbir uchun hali ham kattaroq byudjet kerakmi?" },
            { who: "Anna", en: "Yes. A venue like that costs an arm and a leg.", uz: "Ha. Bunday joy juda qimmat turadi." },
            { who: "Tom", en: "You hit the nail on the head. We should ask the director.", uz: "Aynan to'g'ri aytding. Direktordan so'rashimiz kerak." },
            { who: "Anna", en: "I'll write to her tonight. After that, the ball is in her court.", uz: "Bugun kechqurun unga yozaman. Shundan keyin navbat uning qo'lida." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Anna mean by *the ball is in her court*?", opts: ["The director must make the next decision.", "The director plays tennis.", "The event will be outdoors.", "Anna will write to the director again."], a: 0, why: "*The ball is in her court* = navbat uning qo'lida, endi **u** qaror qiladi." } },
      ],
    },
  ],
  words: [
    { en: "a piece of cake", uz: "juda oson ish", ipa: "ə piːs əv keɪk", pos: "idiom", ex: "The driving test was a piece of cake for her.", exUz: "Haydash imtihoni u uchun juda oson bo'ldi." },
    { en: "under the weather", uz: "o'zini yomon his qilmoq", ipa: "ˈʌn.də ðə ˈweð.ə", pos: "idiom", ex: "I'm feeling under the weather, so I'll leave early.", exUz: "O'zimni yomon his qilyapman, shuning uchun erta ketaman." },
    { en: "once in a blue moon", uz: "oyda-yilda bir, juda kamdan-kam", ipa: "wʌns ɪn ə bluː muːn", pos: "idiom", ex: "He calls us once in a blue moon.", exUz: "U bizga oyda-yilda bir qo'ng'iroq qiladi." },
    { en: "break the ice", uz: "muzni buzmoq, suhbatni boshlamoq", ipa: "breɪk ði aɪs", pos: "idiom", ex: "She told a short joke to break the ice.", exUz: "U muzni buzish uchun qisqa latifa aytdi." },
    { en: "the last straw", uz: "sabr kosasini to'ldirgan oxirgi voqea", ipa: "ðə lɑːst strɔː", pos: "idiom", ex: "When he forgot my birthday again, it was the last straw.", exUz: "U tug'ilgan kunimni yana unutganda, sabr kosam to'ldi." },
    { en: "on the same page", uz: "bir fikrda, bir xil tushunchada", ipa: "ɒn ðə seɪm peɪdʒ", pos: "idiom", ex: "Let's check that everyone is on the same page.", exUz: "Hammamiz bir fikrda ekanimizni tekshiraylik." },
    { en: "hit the nail on the head", uz: "aynan to'g'ri aytmoq", ipa: "hɪt ðə neɪl ɒn ðə hed", pos: "idiom", ex: "Your last point hit the nail on the head.", exUz: "Sizning oxirgi fikringiz aynan to'g'ri chiqdi." },
    { en: "call it a day", uz: "bugungi ishni tugatmoq", ipa: "kɔːl ɪt ə deɪ", pos: "idiom", ex: "We've been working for ten hours. Let's call it a day.", exUz: "O'n soatdan beri ishlayapmiz. Bugunga yetar." },
    { en: "cost an arm and a leg", uz: "juda qimmat turmoq", ipa: "kɒst ən ɑːm ənd ə leg", pos: "idiom", ex: "Living in the city centre costs an arm and a leg.", exUz: "Shahar markazida yashash juda qimmatga tushadi." },
    { en: "the ball is in your court", uz: "navbat sizda, qaror sizniki", ipa: "ðə bɔːl ɪz ɪn jɔː kɔːt", pos: "idiom", ex: "We've made our offer. Now the ball is in your court.", exUz: "Biz taklifimizni berdik. Endi navbat sizda." },
  ],
  practice: [
    { k: "choice", q: "Tom says: *The presentation was a piece of cake.* What does he mean?", opts: ["It was easy.", "It was boring.", "It was expensive.", "It was late."], a: 0, why: "**a piece of cake** = juda oson." },
    { k: "match", pairs: [["under the weather", "o'zini yomon his qilmoq"], ["once in a blue moon", "juda kamdan-kam"], ["break the ice", "muzni buzmoq"], ["the last straw", "sabr kosasini to'ldirgan voqea"], ["cost an arm and a leg", "juda qimmat turmoq"]] },
    { k: "fill", q: "Don't be nervous. The test will be a piece of ___.", a: ["cake"], uz: "Xavotir olmang. Test juda oson bo'ladi.", why: "Idioma: **a piece of cake**." },
    { k: "listen", say: "We only meet once in a blue moon.", opts: ["We only meet once in a blue moon.", "We only meet once a blue month.", "We often meet in a blue room.", "We never meet in a blue moon."], a: 0, why: "Idioma: **once in a blue moon** = oyda-yilda bir." },
    { k: "fix", wrong: "You hit the nail in the head.", a: ["You hit the nail on the head."], hint: "predlog", why: "*hit the nail **on** the head*: predlog **on**." },
    { k: "choice", q: "My neighbour plays loud music every night. Last night he woke the baby, and that was ___.", opts: ["the last straw", "a piece of cake", "once in a blue moon", "under the weather"], a: 0, why: "Sabr tugagan payt: **the last straw**." },
    { k: "order", uz: "Bugunga yetar, ishni tugatamiz.", words: ["Let's", "call", "it", "a", "day."], extra: ["the", "end"], why: "Idioma: **call it a day**." },
    { k: "tf", q: "*I'm under the weather* means that it is raining.", a: false, why: "Bu idioma **o'zini yomon his qilish** ma'nosini beradi, ob-havo haqida emas." },
    { k: "fill", q: "I've sent my proposal to the client. Now the ball is in their ___.", a: ["court"], uz: "Men taklifimni mijozga yubordim. Endi navbat ularda.", why: "Idioma: **the ball is in their court**." },
    { k: "translate", uz: "Bu soat juda qimmat turdi.", a: ["The watch cost an arm and a leg.", "That watch cost an arm and a leg.", "This watch cost an arm and a leg.", "The watch cost me an arm and a leg.", "This watch cost me an arm and a leg."], why: "Idioma **cost an arm and a leg** o'tgan zamonda: *cost*." },
    { k: "fix", wrong: "I feel under weather today.", a: ["I feel under the weather today."], hint: "artikl", why: "Idioma artikl bilan: **under the weather**." },
    { k: "dictation", say: "Let's make sure we are all on the same page.", uz: "Hammamiz bir fikrda ekanimizga ishonch hosil qilaylik.", why: "**on the same page** = bir xil tushunchada." },
    { k: "choice", q: "A new student sits alone. Which idiom describes what a friendly classmate does by starting a chat?", opts: ["breaks the ice", "calls it a day", "costs an arm and a leg", "hits the nail"], a: 0, why: "Notanish muhitda suhbatni boshlash: **break the ice**." },
    { k: "order", uz: "Sen aynan to'g'ri aytding.", words: ["You", "hit", "the", "nail", "on", "the", "head."], extra: ["in", "of"], why: "**hit the nail on the head** — o'zgarmas tuzilma." },
    { k: "fix", wrong: "It's late. Let's call a day.", a: ["It's late. Let's call it a day.", "It is late. Let's call it a day."], hint: "bitta so'z tushgan", why: "**call it a day**: *it* tushirilmaydi." },
    { k: "speak", say: "The exam was a piece of cake, but I feel a little under the weather.", uz: "Imtihon juda oson bo'ldi, lekin o'zimni biroz yomon his qilyapman." },
  ],
  quiz: [
    { k: "choice", q: "Which idiom means *very rarely*?", opts: ["once in a blue moon", "a piece of cake", "the last straw", "on the same page"], a: 0, why: "**once in a blue moon** = juda kamdan-kam." },
    { k: "choice", q: "Our boss says: *Let's call it a day.* We should ___.", opts: ["stop working for today", "start a new project", "ask for a day off tomorrow", "check the calendar"], a: 0, why: "**call it a day** = bugungi ishni tugatmoq." },
    { k: "fill", q: "A good joke can help to break the ___ at a party.", a: ["ice"], uz: "Yaxshi latifa ziyofatda muzni buzishga yordam beradi.", why: "**break the ice**." },
    { k: "choice", q: "That restaurant ___ — I paid a huge bill for one dinner.", opts: ["costs an arm and a leg", "is a piece of cake", "is under the weather", "breaks the ice"], a: 0, why: "Juda qimmat narxni **cost an arm and a leg** ifodalaydi." },
    { k: "fix", wrong: "She was under weather yesterday.", a: ["She was under the weather yesterday."], hint: "artikl", why: "**under the weather** artikl bilan aytiladi." },
    { k: "tf", q: "In a formal academic essay it is better to use many idioms like *a piece of cake*.", a: false, why: "Idiomalar odatda norasmiy; akademik yozuvda kamroq ishlatiladi." },
    { k: "order", uz: "Navbat sizda.", words: ["The", "ball", "is", "in", "your", "court."], extra: ["on", "hall"], why: "**the ball is in your court**." },
    { k: "translate", uz: "Hammamiz bir fikrda ekanimizga ishonch hosil qilaylik.", a: ["Let's make sure we are all on the same page.", "Let's make sure we're all on the same page.", "Let us make sure we are all on the same page.", "Let's make sure that we are all on the same page."], why: "**on the same page** = bir fikrda." },
    { k: "choice", q: "Complete: *He is always late. Today he missed the meeting again, and that was ___.*", opts: ["the last straw", "a piece of cake", "once in a blue moon", "under the weather"], a: 0, why: "Qayta-qayta takrorlangan holat va sabr tugashi: **the last straw**." },
    { k: "fix", wrong: "The task was a piece of the cake.", a: ["The task was a piece of cake."], hint: "ortiqcha so'z", why: "**a piece of cake** — *the* ishlatilmaydi." },
  ],
  summary: [
    "**Idioma** — o'zgarmas ibora, ma'nosi so'zlardan chiqmaydi: *a piece of cake* = juda oson, *under the weather* = o'zini yomon his qilmoq.",
    "Idioma tarkibini o'zgartirib bo'lmaydi; faqat fe'l zamoni va olmosh o'zgaradi: *It cost an arm and a leg.*",
    "Idiomalar asosan **norasmiy** nutqda ishlatiladi. Rasmiy yozuvda kam; Speaking da 1–2 ta o'rinli idioma yetarli.",
    "Tipik xatolar: ~~hit the nail in the head~~ → **on the head**; ~~under weather~~ → **under the weather**; ~~call a day~~ → **call it a day**.",
    "Idiomaning ma'nosini oling, inglizcha tasvirni o'zbekchaga so'zma-so'z ko'chirmang.",
  ],
  homework: "Bu darsdagi 10 idiomadan 5 tasini tanlang va har biri bilan **o'z hayotingizdan** bitta gap yozing (*My last exam was a piece of cake because…*). Keyin gaplarni ovoz chiqarib o'qing. Shu hafta ingliz tilidagi biror serial yoki podkastda yana 2 ta idioma topib, daftaringizga ma'nosi bilan yozib qo'ying.",
};

export default lesson;
