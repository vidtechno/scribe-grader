import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u26-l6",
  title: "Expressing opinions and responding",
  titleUz: "Fikr bildirish va javob berish: In my view, I tend to think, to a certain extent",
  goal: "Muhokamada fikringizni aniq bildirasiz (*In my view…, I tend to think…*), ishonch darajasini tanlaysiz (*undeniably / probably / I have reservations*), rozi bo'lasiz, qisman rozi bo'lasiz yoki muloyim rad etasiz (*I couldn't agree more, up to a point, I beg to differ*) va *I am agree*, *According to me* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Fikr bildirish: nega bu muhim?",
      blocks: [
        { t: "p", md: "IELTS Speaking Part 3, universitet seminari, ish yig'ilishi: hammasida sizdan **fikr** so'raladi. Faqat *I think…* deyish yetarli emas. B2 darajada fikringiz **aniq**, **muloyim** va **sabab bilan** bo'lishi kerak." },
        {
          t: "table", head: ["Maqsad", "Ibora", "Misol"], speak: [1, 2],
          rows: [
            ["Aniq fikr", "In my view / In my opinion", "In my view, schools should teach media skills."],
            ["Shaxsiy nuqtai nazar", "As far as I'm concerned", "As far as I'm concerned, privacy matters more than convenience."],
            ["Ehtiyotkor fikr", "I tend to think", "I tend to think that online news is less reliable."],
            ["Taassurot", "It seems to me that", "It seems to me that people share too much online."],
            ["Kuchli ishonch", "I'm convinced that", "I'm convinced that the plan will fail."],
          ],
        },
        { t: "tip", tone: "info", md: "**I tend to think** — «odatda shunday o'ylayman». U fikrni yumshatadi va qat'iy emasdek eshitiladi. Bu B2 darajada ishonchsizlikni emas, **ehtiyotkorlikni** ko'rsatadi." },
        { t: "check", ex: { k: "choice", q: "Which phrase makes your opinion sound careful, not too strong?", opts: ["I tend to think that…", "There is no doubt that…", "It is a fact that…", "Everybody knows that…"], a: 0, why: "**I tend to think** fikrni yumshatadi; qolganlari juda qat'iy." } },
        { t: "check", ex: { k: "fill", q: "___ my view, social media does more harm than good.", a: ["In"], why: "Qolip: **In my view / In my opinion**." } },
      ],
    },
    {
      title: "Ishonch darajasi",
      blocks: [
        { t: "p", md: "Fikringizga qanchalik ishonishingiz ham muhim. Inglizchada bu daraja so'zlar bilan ko'rsatiladi:" },
        {
          t: "table", head: ["Daraja", "Ifodalar", "Misol"], speak: [2],
          rows: [
            ["Juda ishonchli", "undeniably, there is no doubt that, I'm convinced that", "Undeniably, smartphones have changed the way we work."],
            ["Ishonchli", "certainly, clearly, definitely", "This will certainly create new problems."],
            ["Ehtimol", "probably, I tend to think, it seems that", "People will probably read less news in print."],
            ["Ehtiyotkor / shubha", "perhaps, might, to a certain extent, I have reservations about", "To a certain extent, the plan could work."],
            ["Shubhali", "dubious, I doubt whether, I'm not convinced", "The claim seems dubious to me."],
          ],
        },
        { t: "p", md: "**to a certain extent** va **up to a point** — «ma'lum darajada, qisman»: *I agree up to a point*. **reservations** — shubhalar: *I have some reservations about the proposal*. **dubious** — shubhali, ishonchsiz: *a dubious claim*." },
        { t: "tip", tone: "warn", md: "**doubt** va **dubious** ni adashtirmang: *I doubt it* (fe'l), *a dubious source* (sifat). **admittedly** — «tan olish kerakki»: *Admittedly, the battery is weak, but the screen is great.*" },
        { t: "check", ex: { k: "choice", q: "Which sentence shows the strongest certainty?", opts: ["Undeniably, the internet has changed education.", "Perhaps the internet has changed education.", "The internet might have changed education.", "I have reservations about whether the internet has changed education."], a: 0, why: "**Undeniably** — inkor qilib bo'lmaydigan: eng kuchli." } },
        { t: "check", ex: { k: "fill", q: "Her claim is rather ___, because the numbers come from an unknown website. (shubhali, d…)", a: ["dubious"], why: "Ishonchsiz, shubhali → **dubious**." } },
      ],
    },
    {
      title: "Rozilik va norozilik",
      blocks: [
        { t: "p", md: "Rozi bo'lish yoki bo'lmaslik **darajalarga** bo'linadi. B2 da ko'pincha **qisman rozilik** kerak: avval tan olasiz, keyin o'z fikringizni qo'shasiz." },
        {
          t: "table", head: ["Daraja", "Ibora", "Misol"], speak: [1, 2],
          rows: [
            ["To'liq rozilik", "I couldn't agree more.", "A: Fake news is dangerous. B: I couldn't agree more."],
            ["Qisman rozilik", "I agree up to a point, but… / I agree to a certain extent.", "Up to a point, I agree, but a total ban is unrealistic."],
            ["Tushunaman, lekin", "I see your point, but…", "I see your point, but I have reservations."],
            ["Bahsli", "That's debatable.", "That's debatable. Many experts disagree."],
            ["Muloyim norozilik", "I'm afraid I beg to differ.", "I'm afraid I beg to differ. The data shows the opposite."],
          ],
        },
        { t: "p", md: "**Formula:** tan olish + **but** + o'z fikringiz + sabab. *I see your point, **but** I'm not sure it works in practice, **because** most people don't read the terms.*" },
        { t: "tip", tone: "good", md: "**I beg to differ** — rasmiy va muloyim: «kechirasiz, men boshqacha fikrdaman». U do'stona suhbatda biroz qadimiy eshitilishi mumkin, lekin yig'ilish va muhokamalarda yaxshi ishlaydi. Norasmiy: *I don't really agree.*" },
        { t: "check", ex: { k: "match", pairs: [["I couldn't agree more", "to'liq roziman"], ["up to a point", "qisman, ma'lum darajada"], ["I beg to differ", "muloyim ravishda rozi emasman"], ["debatable", "bahsli"], ["reservations", "shubhalar"]] } },
        { t: "check", ex: { k: "choice", q: "A: \"Online lessons will replace classrooms.\" B: \"___\"", opts: ["That's debatable. Many students need face-to-face contact.", "I am agree with you completely.", "According to me, you are right.", "I'm not agreeing with that."], a: 0, why: "**That's debatable** — muloyim norozilik; boshqa variantlar grammatik xato." } },
      ],
    },
    {
      title: "Fikr so'rash va javob berish",
      blocks: [
        { t: "p", md: "Muhokamada siz ham savol berasiz. Fikr so'rash uchun quyidagi qoliplar bor:" },
        {
          t: "table", head: ["Savol", "Mumkin javob"], speak: [0, 1],
          rows: [
            ["What's your view on social media?", "In my view, it's useful but addictive."],
            ["How do you feel about online privacy?", "I tend to think people worry too little."],
            ["Would you agree that schools should teach media skills?", "Up to a point, yes, but parents should help too."],
            ["Don't you think the news is biased?", "Admittedly, some of it is, but not all."],
            ["What do you make of this headline?", "To be honest, it looks dubious to me."],
          ],
        },
        { t: "p", md: "Javobni **dalil** bilan qo'llab-quvvatlang: *because…, for instance…, as a result…*. Javob qisqa va aniq bo'lsin: 2-3 gap yetarli." },
        { t: "tip", tone: "info", md: "**Don't you think…?** salbiy savol, u javobni «ha» ga yo'naltiradi. Muloyim norozilik uchun: *Well, not exactly. I think…*" },
        { t: "check", ex: { k: "fill", q: "Would you ___ that the government should control online content? (rozi bo'lmoq)", a: ["agree"], why: "Qolip: **Would you agree that…?**" } },
        { t: "check", ex: { k: "choice", q: "Which question asks for someone's opinion politely?", opts: ["What's your view on online privacy?", "Tell me your opinion now!", "What for you think of privacy?", "Do you thinking privacy is important?"], a: 0, why: "**What's your view on + ot?** to'g'ri va muloyim." } },
      ],
    },
    {
      title: "Tipik xatolar: o'zbek tilidan interferensiya",
      blocks: [
        { t: "p", md: "O'zbek tilida «roziman» sifat kabi eshitiladi (*men roziman*). Shuning uchun *I am agree* deymiz. Yana «menga ko'ra» ni so'zma-so'z o'giramiz. Quyidagi xatolar juda tez-tez uchraydi." },
        {
          t: "compare",
          good: { title: "1. agree — fe'l", items: ["I agree with you.", "I don't agree with this idea."] },
          bad: { title: "Xato", items: ["I am agree with you.", "I am not agree with this idea."] },
        },
        { t: "check", ex: { k: "fix", wrong: "I am not agree with this idea.", a: ["I don't agree with this idea.", "I do not agree with this idea."], hint: "agree — fe'l", why: "**agree** fe'l: inkor shakli **don't agree**, *am not agree* emas." } },
        {
          t: "compare",
          good: { title: "2. In my opinion", items: ["In my opinion, the plan is too expensive.", "To my mind, the plan is too expensive."] },
          bad: { title: "Xato", items: ["According to me, the plan is too expensive.", "By my opinion, the plan is too expensive."] },
        },
        { t: "check", ex: { k: "fix", wrong: "According to me, online news is more reliable.", a: ["In my opinion, online news is more reliable.", "In my view, online news is more reliable.", "To my mind, online news is more reliable.", "I think online news is more reliable.", "Personally, I think online news is more reliable."], hint: "In my…", why: "*According to* boshqa odamning manbasi uchun: *according to the report*. O'z fikringiz: **In my opinion / view**." } },
        {
          t: "compare",
          good: { title: "3. agree + with", items: ["I agree with you.", "She agreed with his proposal."] },
          bad: { title: "Xato", items: ["I agree to you.", "She agreed to his proposal. (boshqa ma'no)"] },
        },
        { t: "check", ex: { k: "fix", wrong: "I agree to you about this.", a: ["I agree with you about this."], hint: "predlog", why: "Shaxs bilan: **agree with**. *agree to* — taklifga rozi bo'lmoq." } },
        {
          t: "compare",
          good: { title: "4. think: statik fe'l", items: ["I think this plan is unfair.", "I believe it's a good idea."] },
          bad: { title: "Xato", items: ["I am thinking that this plan is unfair.", "I am believing it is a good idea."] },
        },
        { t: "check", ex: { k: "fix", wrong: "I am thinking that this plan is unfair.", a: ["I think this plan is unfair.", "I think that this plan is unfair."], hint: "fikr bildirish", why: "Fikr bildirganda **I think** (Present Simple); *am thinking* — jarayon." } },
      ],
    },
    {
      title: "O'qing: Onlayn yangiliklarga ishonish mumkinmi?",
      blocks: [
        {
          t: "text", title: "Can we trust online news?", voice: "george",
          en: "Whenever friends ask me whether online news can be trusted, I give the same answer. In my view, it depends on the source. Admittedly, many websites publish stories quickly, and this is undeniably useful when something important happens. However, I tend to think that speed is often the enemy of accuracy, and I have serious reservations about stories with no named author. Some headlines are dubious, and a few are simply invented to attract clicks. To a certain extent, readers can protect themselves by checking a second source. Up to a point, that works, but it takes time, and not everybody has it. That is why I believe that schools should teach students how to judge news. It is debatable how much they can achieve, but it is surely better than doing nothing.",
          uz: "Do'stlarim onlayn yangiliklarga ishonish mumkinmi, deb so'raganda men har doim bir xil javob beraman. Menimcha, bu manbaga bog'liq. Tan olish kerakki, ko'p saytlar hikoyalarni tez e'lon qiladi va muhim voqea bo'lganda bu shubhasiz foydali. Biroq men tezlik ko'pincha aniqlikning dushmani deb o'ylayman va muallifi ko'rsatilmagan hikoyalarga jiddiy shubham bilan qarayman. Ba'zi sarlavhalar shubhali, bir nechtasi esa shunchaki bosilishlarni jalb qilish uchun o'ylab topilgan. Ma'lum darajada o'quvchilar ikkinchi manbani tekshirib o'zlarini himoya qila oladi. Ma'lum nuqtagacha bu ishlaydi, lekin vaqt talab qiladi va hamma uchun vaqt yo'q. Shuning uchun maktablar o'quvchilarga yangiliklarni baholashni o'rgatishi kerak, deb hisoblayman. Ular qanchalik ko'p narsaga erisha olishi bahsli, lekin hech narsa qilmaslikdan ko'ra yaxshiroq.",
        },
        { t: "check", ex: { k: "tf", q: "The writer thinks all online news is completely unreliable.", a: false, why: "U *it depends on the source* deydi va tezlikni *undeniably useful* deb hisoblaydi." } },
        { t: "check", ex: { k: "choice", q: "What does the writer suggest schools should do?", opts: ["Teach students how to judge news.", "Ban all news websites.", "Publish their own newspapers.", "Stop teaching with computers."], a: 0, why: "*schools should teach students how to judge news.*" } },
      ],
    },
    {
      title: "Dialog: Yolg'on yangiliklar o'chirilsinmi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Zarina", en: "Do you think social media companies should be forced to remove fake news?", uz: "Sizningcha, ijtimoiy tarmoq kompaniyalari yolg'on yangiliklarni o'chirishga majbur qilinishi kerakmi?" },
            { who: "Paul", en: "In my view, yes. Misinformation can cause real harm, especially during an emergency.", uz: "Menimcha, ha. Noto'g'ri ma'lumot, ayniqsa favqulodda vaziyatda, haqiqiy zarar keltirishi mumkin." },
            { who: "Zarina", en: "I see your point, but I have reservations. Who decides what counts as fake?", uz: "Fikringizni tushunaman, lekin menda shubhalar bor. Nima yolg'on ekanini kim hal qiladi?" },
            { who: "Paul", en: "Fair question. Independent experts could decide, couldn't they?", uz: "Adolatli savol. Mustaqil ekspertlar hal qilishi mumkin-ku, shunday emasmi?" },
            { who: "Zarina", en: "Up to a point. Even experts disagree sometimes, and that could lead to censorship.", uz: "Ma'lum darajada. Hatto ekspertlar ham ba'zan kelisha olmaydi va bu senzuraga olib kelishi mumkin." },
            { who: "Paul", en: "I'm afraid I beg to differ. Censorship means silencing opinions; removing proven lies is different.", uz: "Kechirasiz, men boshqacha fikrdaman. Senzura fikrlarni bostirishni anglatadi, isbotlangan yolg'onni o'chirish esa boshqa narsa." },
            { who: "Zarina", en: "That's debatable. A claim that looks false today may turn out to be partly true tomorrow.", uz: "Bu bahsli. Bugun yolg'on ko'ringan da'vo ertaga qisman to'g'ri bo'lib chiqishi mumkin." },
            { who: "Paul", en: "Admittedly, that has happened. So what would you do instead?", uz: "Tan olish kerakki, bunday bo'lgan. Unda siz nima qilgan bo'lardingiz?" },
            { who: "Zarina", en: "I tend to think that warning labels work better than deletion.", uz: "Menimcha, ogohlantiruvchi belgilar o'chirishdan ko'ra yaxshiroq ishlaydi." },
            { who: "Paul", en: "Perhaps we agree to a certain extent, then.", uz: "Demak, ma'lum darajada kelishamiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Zarina think is better than deleting fake news?", opts: ["Warning labels.", "Fines for users.", "A total ban.", "Doing nothing."], a: 0, why: "*warning labels work better than deletion.*" } },
        { t: "check", ex: { k: "tf", q: "Zarina fully agrees with Paul's first answer.", a: false, why: "Zarina *I have reservations* deydi va keyin faqat *up to a point* rozi bo'ladi, shuning uchun to'liq rozi emas." } },
      ],
    },
  ],
  words: [
    { en: "in my view", uz: "menimcha, mening nuqtai nazarimcha", ipa: "ɪn maɪ vjuː", pos: "phrase", ex: "In my view, children should learn how to spot fake news at school.", exUz: "Menimcha, bolalar maktabda yolg'on yangiliklarni ajratishni o'rganishi kerak." },
    { en: "I tend to think", uz: "men ko'proq shunday o'ylayman", ipa: "aɪ tend tə θɪŋk", pos: "phrase", ex: "I tend to think that printed newspapers will not disappear completely.", exUz: "Men bosma gazetalar butunlay yo'qolmaydi, deb o'ylashga moyilman." },
    { en: "to a certain extent", uz: "ma'lum darajada", ipa: "tu ə ˈsɜː.tən ɪkˈstent", pos: "phrase", ex: "To a certain extent, technology has made our lives easier.", exUz: "Texnologiya hayotimizni ma'lum darajada osonlashtirdi." },
    { en: "I'm not entirely convinced", uz: "men to'liq ishonmayman", ipa: "aɪm nɒt ɪnˈtaɪə.li kənˈvɪnst", pos: "phrase", ex: "I'm not entirely convinced that banning phones will solve the problem.", exUz: "Telefonlarni taqiqlash muammoni hal qilishiga to'liq ishonmayman." },
    { en: "debatable", uz: "bahsli, munozarali", ipa: "dɪˈbeɪ.tə.bəl", pos: "adj", ex: "Whether social media improves communication is debatable.", exUz: "Ijtimoiy tarmoqlar muloqotni yaxshilaydimi, bu bahsli." },
    { en: "admittedly", uz: "tan olish kerakki", ipa: "ədˈmɪt.ɪd.li", pos: "adv", ex: "Admittedly, the app is useful, but it takes too much of my time.", exUz: "Tan olish kerakki, ilova foydali, lekin vaqtimning ko'p qismini oladi." },
    { en: "undeniably", uz: "inkor qilib bo'lmaydigan darajada", ipa: "ˌʌn.dɪˈnaɪ.ə.bli", pos: "adv", ex: "Undeniably, online shopping has changed the way we buy things.", exUz: "Onlayn xarid qilish narsa sotib olish usulimizni shubhasiz o'zgartirdi." },
    { en: "reservations", uz: "shubhalar, e'tirozlar", ipa: "ˌrez.əˈveɪ.ʃənz", pos: "noun", ex: "I have some reservations about sharing my location with apps.", exUz: "Joylashuvimni ilovalar bilan ulashish haqida menda ba'zi shubhalar bor." },
    { en: "beg to differ", uz: "(muloyim) boshqacha fikrdaman", ipa: "beɡ tə ˈdɪf.ər", pos: "phrase", ex: "I'm afraid I beg to differ: the figures show a different story.", exUz: "Kechirasiz, men boshqacha fikrdaman: raqamlar boshqa narsani ko'rsatadi." },
    { en: "dubious", uz: "shubhali, ishonchsiz", ipa: "ˈdjuː.bi.əs", pos: "adj", ex: "The story came from a dubious source, so I didn't share it.", exUz: "Hikoya shubhali manbadan kelgani uchun uni ulashmadim." },
  ],
  practice: [
    { k: "match", pairs: [["I couldn't agree more", "to'liq roziman"], ["up to a point", "ma'lum nuqtagacha, qisman"], ["I beg to differ", "muloyim norozilik"], ["debatable", "bahsli"], ["reservations", "shubhalar"]] },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I agree with you up to a point.", "I am agree with you up to a point.", "I agree to you up to a point.", "I'm agreeing you up to a point."], a: 0, why: "**agree with + shaxs**; *am agree* bo'lmaydi." },
    { k: "fill", q: "I see your ___, but I think the cost is too high. (fikringizni tushunaman)", a: ["point"], uz: "Fikringizni tushunaman, lekin narxi juda baland deb o'ylayman.", why: "Qolip: **I see your point, but…**" },
    { k: "choice", q: "When someone says \"That's debatable\", they mean ___.", opts: ["they are completely sure it is true", "not everybody would agree with it", "they did not hear the statement", "they want to change the subject"], a: 1, why: "**debatable** — bahsli, hamma ham rozi bo'lmaydi." },
    { k: "fill", q: "___, the app is easy to use, but it collects far too much data. (A…)", a: ["Admittedly"], uz: "Tan olish kerakki, ilovadan foydalanish oson, lekin u juda ko'p ma'lumot yig'adi.", why: "**Admittedly** — avval tan olamiz, keyin *but* bilan fikrni davom ettiramiz." },
    { k: "order", uz: "Menimcha, ijtimoiy tarmoqlar foydadan ko'ra ko'proq zarar keltiradi.", words: ["In", "my", "view,", "social", "media", "does", "more", "harm", "than", "good."], extra: ["do", "made"], why: "**In my view** + gap." },
    { k: "translate", uz: "Men ma'lum darajada roziman.", a: ["I agree to a certain extent.", "I agree up to a point.", "I agree to some extent.", "To a certain extent, I agree.", "Up to a point, I agree.", "To some extent, I agree."], why: "**to a certain extent / up to a point**." },
    { k: "tf", q: "*I am agree with you* — bu gap to'g'ri.", a: false, why: "**agree** fe'l: *I agree with you*." },
    { k: "fix", wrong: "According to me, online news is more reliable.", a: ["In my opinion, online news is more reliable.", "In my view, online news is more reliable.", "To my mind, online news is more reliable.", "I think online news is more reliable.", "Personally, I think online news is more reliable."], hint: "o'z fikringiz", why: "O'z fikringiz: **In my opinion / view**." },
    { k: "fix", wrong: "I am not agree with this idea.", a: ["I don't agree with this idea.", "I do not agree with this idea."], hint: "agree — fe'l", why: "Inkor: **don't agree**." },
    { k: "listen", say: "I see your point, but I have reservations about the plan.", opts: ["I see your point, but I have reservations about the plan.", "I see your point, so I have reservations about the plan.", "I see your point, but I had reservation about the plan."], a: 0, why: "Eshitilgan: **I see your point, but I have reservations**." },
    { k: "choice", q: "Which expression shows the WEAKEST certainty?", opts: ["It is undeniable that…", "I'm convinced that…", "I tend to think that…", "There is no doubt that…"], a: 2, why: "**I tend to think** — ehtiyotkor; qolganlari juda ishonchli." },
    { k: "dictation", say: "To a certain extent, I agree with you, but I have some reservations.", uz: "Ma'lum darajada sizga roziman, lekin menda ba'zi shubhalar bor.", why: "**to a certain extent**, **reservations**." },
    { k: "choice", q: "A: \"Social media should be banned for under-sixteens.\" B: \"___\"", opts: ["Up to a point, but a total ban would be hard to enforce.", "I am agree, you are right.", "According to me, yes.", "No, you are wrong person."], a: 0, why: "Qisman rozilik + sabab: **Up to a point, but…**" },
    { k: "speak", say: "In my view, schools should teach students how to judge the news, but I have some reservations about banning phones.", uz: "Menimcha, maktablar o'quvchilarga yangiliklarni baholashni o'rgatishi kerak, lekin telefonlarni taqiqlashga nisbatan menda shubhalar bor." },
  ],
  quiz: [
    { k: "choice", q: "A: \"Everyone should have a smartphone.\" B: \"I'm afraid I ___ to differ.\"", opts: ["beg", "ask", "say", "wish"], a: 0, why: "Qolip: **I beg to differ**." },
    { k: "choice", q: "Which one is a mistake?", opts: ["I don't agree with you.", "In my opinion, it's too expensive.", "I am agree with you.", "I couldn't agree more."], a: 2, why: "**am agree** xato; *agree* fe'l." },
    { k: "choice", q: "The claim came from an unknown website, so it seems ___.", opts: ["dubious", "undeniable", "admittedly", "convinced"], a: 0, why: "Ishonchsiz manba → **dubious**." },
    { k: "choice", q: "___, the new phone is faster, but the battery is very weak.", opts: ["Admittedly", "Undeniable", "Reservation", "Debatable"], a: 0, why: "Qo'shimcha (ravish) kerak: **Admittedly**." },
    { k: "fill", q: "I agree with you ___ a point, but I think you are too optimistic.", a: ["up to"], uz: "Men sizga ma'lum nuqtagacha roziman, lekin siz juda optimistsiz.", why: "Qolip: **up to a point**." },
    { k: "fill", q: "I have some ___ about the plan, because it costs too much. (shubhalar)", a: ["reservations"], uz: "Menda reja haqida shubhalar bor, chunki u juda qimmat.", why: "**have reservations about** — shubhalari bor." },
    { k: "order", uz: "Men ko'proq shunday o'ylayman: yangiliklarning ko'pi bir tomonlama.", words: ["I", "tend", "to", "think", "that", "most", "news", "is", "one-sided."], extra: ["am", "tending"], why: "**I tend to think that** + gap." },
    { k: "translate", uz: "Bu bahsli.", a: ["That's debatable.", "That is debatable.", "It's debatable.", "It is debatable."], why: "**debatable** — bahsli." },
    { k: "fix", wrong: "I am agree with you about the news.", a: ["I agree with you about the news."], hint: "agree — fe'l", why: "**agree** fe'l: *I agree with you*." },
    { k: "tf", q: "*According to me* — o'z fikringizni aytishning odatiy usuli.", a: false, why: "O'z fikringiz uchun **In my opinion / view**; *according to* — boshqa manba uchun." },
  ],
  summary: [
    "**Fikr bildirish:** *In my view / In my opinion, As far as I'm concerned, I tend to think, It seems to me that, I'm convinced that*.",
    "**Ishonch darajasi:** *undeniably* (juda), *probably* (ehtimol), *to a certain extent / up to a point* (qisman), *I have reservations / dubious* (shubha).",
    "**Rozilik:** *I couldn't agree more* (to'liq), *I agree up to a point* (qisman), *I see your point, but…*, *That's debatable*, *I'm afraid I beg to differ* (muloyim norozilik).",
    "**Formula:** tan olish + **but** + o'z fikringiz + sabab; *Admittedly, …, but …*",
    "**Xatolar:** *I am agree* (to'g'risi *I agree*), *agree to you* (*agree with*), *According to me* (*In my opinion*), *I am thinking that* (*I think*).",
  ],
  homework: "Bu mavzulardan birini tanlang: *Onlayn yangiliklarga ishonish kerakmi? Bolalarga smartfon kerakmi?* **60 soniya** davomida fikringizni telefonga yozib oling: kamida **to'rtta** yangi ibora (*in my view, to a certain extent, admittedly, I have reservations…*) ishlating. Keyin yozib oling va xatolarni tekshiring (*I am agree*, *according to me*).",
};

export default lesson;
