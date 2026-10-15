import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u23-l1",
  title: "Giving and defending opinions",
  titleUz: "Fikr bildirish va himoya qilish: I think, In my view, I'm convinced",
  goal: "Fikringizni **I think, In my opinion, I'm convinced that…** kabi iboralar bilan bildirasiz, sabab va misol bilan himoya qilasiz, **rozi bo'lasiz va xushmuomala e'tiroz bildirasiz**, hamda **I don't think…** qolipini va **I am agree** kabi xatolarni to'g'ri ishlatasiz.",
  slides: [
    {
      title: "Fikrni qanday aytamiz?",
      blocks: [
        { t: "p", md: "B1 darajada «menimcha» deyishning bir nechta yo'li kerak. Ular **kuchi** bilan farq qiladi: ba'zilari yumshoq, ba'zilari qat'iy. Gapga qarab to'g'risini tanlaysiz." },
        {
          t: "table", head: ["Kuchi", "Ibora", "Misol"], speak: [2],
          rows: [
            ["Yumshoq", "I think / I guess / It seems to me that", "I think it's a good idea."],
            ["O'rtacha", "I believe / In my opinion / In my view", "In my opinion, public transport should be cheaper."],
            ["O'rtacha", "As far as I'm concerned / From my point of view", "As far as I'm concerned, homework is useful."],
            ["Qat'iy", "I'm convinced that / I firmly believe that", "I'm convinced that exercise improves your mood."],
          ],
        },
        { t: "tip", tone: "warn", md: "**In my opinion** va **I think** ni bitta gapda birga ishlatmang: ~~In my opinion, I think it is good~~. Bittasi yetarli: *In my opinion, it is good.* Shuningdek ~~According to me~~ demang; **according to** faqat boshqa odam yoki manba uchun: *according to the news*." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["According to me, it is a good plan.", "In my opinion, I think it is a good plan.", "In my opinion, it is a good plan.", "In my opinion that it is a good plan."], a: 2, why: "**In my opinion** + oddiy gap. *According to me* inglizchada ishlatilmaydi, ikki ibora ham birga kelmaydi." } },
      ],
    },
    {
      title: "Fikr, sabab, misol",
      blocks: [
        { t: "p", md: "Fikr aytish yetarli emas: uni **himoya qilish** kerak. Eng oddiy tuzilma — to'rt qadam: **fikr → sabab → misol → xulosa**." },
        {
          t: "table", head: ["Qadam", "Foydali iboralar"],
          rows: [
            ["Fikr", "I think / In my view / I'm convinced that…"],
            ["Sabab", "because / the main reason is that / that's why"],
            ["Misol", "for example / for instance / take … for example"],
            ["Xulosa", "So, … / That is why I believe… / All in all, …"],
          ],
        },
        {
          t: "examples", items: [
            { en: "In my view, students should learn to cook.", uz: "Menimcha, talabalar ovqat pishirishni o'rganishi kerak.", note: "Fikr" },
            { en: "The main reason is that cooking at home is cheaper and healthier.", uz: "Asosiy sabab shuki, uyda ovqat pishirish arzonroq va foydaliroq.", note: "Sabab" },
            { en: "For example, a simple meal at home costs much less than a takeaway.", uz: "Masalan, uyda oddiy ovqat tayyorlash buyurtma ovqatdan ancha arzon.", note: "Misol" },
            { en: "That is why I believe every student needs this skill.", uz: "Shuning uchun har bir talabaga bu ko'nikma kerak deb o'ylayman.", note: "Xulosa" },
          ],
        },
        { t: "tip", tone: "info", md: "**because** gap o'rtasida keladi: *I think so because…*. Gap boshida yangi jumla boshlamang: ~~Because it is cheaper.~~ Yaxshisi: *The main reason is that it is cheaper.*" },
        { t: "check", ex: { k: "order", uz: "Masalan, bu telefon juda qimmat.", words: ["For", "example,", "this", "phone", "is", "very", "expensive."], extra: ["because", "so"] } },
      ],
    },
    {
      title: "Rozi bo'lish va bo'lmaslik",
      blocks: [
        { t: "p", md: "Munozarada boshqalarning fikriga javob berish kerak. Xushmuomala bo'lish uchun avval **tushunganingizni** ko'rsating, keyin e'tiroz bildiring." },
        {
          t: "table", head: ["Maqsad", "Ibora"], speak: [1],
          rows: [
            ["To'liq rozi", "I completely agree. / I couldn't agree more."],
            ["Qisman rozi", "You've got a point, but… / That's true, but…"],
            ["Yumshoq e'tiroz", "I see what you mean, but I'm not sure. / I'm afraid I don't agree."],
            ["Aniq e'tiroz", "I disagree. / I don't think that's right."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I agree with you.", "I don't agree with him.", "I'm afraid I disagree."] },
          bad: { title: "Xato", items: ["I am agree with you.", "I don't agree to him.", "I am not agree."] },
        },
        { t: "tip", tone: "warn", md: "**agree** — fe'l, shuning uchun **am/is/are** kerak emas: ~~I am agree~~. Inkori: *I don't agree*. «Kimdir bilan» — **agree with** (*agree with you*). Reja haqida kelishsak: *agree on a plan*." },
        { t: "check", ex: { k: "fix", wrong: "I am agree with you.", a: ["I agree with you."], hint: "agree — fe'l", why: "**agree** o'zi fe'l; **am** kerak emas." } },
        { t: "check", ex: { k: "choice", q: "Siz qisman rozisiz. Nima deysiz?", opts: ["You've got a point, but I'm not completely sure.", "I couldn't agree more.", "That's nonsense.", "I am agree."], a: 0, why: "*You've got a point, but…* — qisman rozilik va xushmuomala e'tiroz." } },
      ],
    },
    {
      title: "I don't think… qolipi",
      blocks: [
        { t: "p", md: "O'zbek tilida «menimcha, u kelmaydi» deymiz. Inglizchada inkorni odatda **think** ga qo'yamiz, ikkinchi qismga emas:" },
        {
          t: "compare",
          good: { title: "Tabiiy", items: ["I don't think he will come.", "I don't think it's a good idea.", "Do you think it will rain?"] },
          bad: { title: "G'alati", items: ["I think he won't come.", "I think it isn't a good idea.", "I am thinking it will rain."] },
        },
        { t: "p", md: "*I think he won't come* grammatik jihatdan xato emas, lekin ona tili egalari odatda **I don't think he will come** deydi. Bu B1 uchun muhim va tabiiy qolip." },
        {
          t: "examples", items: [
            { en: "I don't think we should wait any longer.", uz: "Menimcha, biz endi ko'proq kutmasligimiz kerak." },
            { en: "I don't think that's true.", uz: "Menimcha, bu to'g'ri emas." },
            { en: "Do you think people will work from home in the future?", uz: "Sizningcha, kelajakda odamlar uydan ishlaydimi?" },
            { en: "I think so. / I don't think so.", uz: "Menimcha, ha. / Menimcha, yo'q.", note: "Qisqa javob." },
          ],
        },
        { t: "tip", tone: "info", md: "Qisqa javob: **I think so** (ha, shunday deb o'ylayman), **I don't think so** (yo'q, shunday deb o'ylamayman). ~~I think no~~ deb aytilmaydi." },
        { t: "check", ex: { k: "choice", q: "Qaysi variant eng tabiiy?", opts: ["I think it isn't important.", "I don't think it is important.", "I am think it is not important.", "I think no important."], a: 1, why: "Inkor **think** ga qo'yiladi: *I don't think…*" } },
      ],
    },
    {
      title: "Fikrni yumshatish",
      blocks: [
        { t: "p", md: "Ba'zan fikringiz qat'iy emas yoki suhbatdoshni xafa qilishni xohlamaysiz. Shunda **yumshatuvchi** so'zlardan foydalaning:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["perhaps / maybe", "balki", "Perhaps we should ask for help."],
            ["I tend to think", "ko'proq shunday deb o'ylayman", "I tend to think that smaller classes are better."],
            ["to some extent", "ma'lum darajada", "I agree to some extent."],
            ["it seems that", "shunday ko'rinadi", "It seems that many people prefer online shopping."],
            ["I'm not sure, but…", "ishonchim komil emas, lekin…", "I'm not sure, but I think it's too early."],
          ],
        },
        { t: "tip", tone: "good", md: "Qat'iy gap (*You are wrong!*) suhbatni buzadi. Yumshoq variant (*I'm afraid I see it differently*) o'z fikringizni saqlab, hurmatni ham ko'rsatadi." },
        { t: "check", ex: { k: "fill", q: "I agree ___ some extent, but not completely.", a: ["to"], why: "Ibora: **to some extent** — ma'lum darajada." } },
      ],
    },
    {
      title: "Dialog: telefon yoki kitob?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Do you think children should have smartphones at school?", uz: "Sizningcha, bolalar maktabda smartfon ishlatishi kerakmi?" },
            { who: "Tom", en: "I don't think so. In my view, phones make it hard to concentrate.", uz: "Menimcha, yo'q. Telefonlar diqqatni jamlashni qiyinlashtiradi." },
            { who: "Nilufar", en: "You've got a point, but they can also help with learning.", uz: "To'g'ri aytasiz, lekin ular o'qishga ham yordam berishi mumkin." },
            { who: "Tom", en: "For example?", uz: "Masalan?" },
            { who: "Nilufar", en: "Well, students can look up new words and use dictionary apps.", uz: "Masalan, o'quvchilar yangi so'zlarni qidirishi va lug'at ilovalaridan foydalanishi mumkin." },
            { who: "Tom", en: "That's true. Perhaps phones are fine in some lessons, but not all day.", uz: "To'g'ri. Balki ba'zi darslarda telefon mumkindir, lekin kun bo'yi emas." },
            { who: "Nilufar", en: "I couldn't agree more. That sounds fair.", uz: "To'liq roziman. Bu adolatli eshitiladi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom thinks phones should be allowed all day at school.", a: false, why: "U oxirida faqat ba'zi darslarda mumkin, kun bo'yi emas dedi." } },
      ],
    },
    {
      title: "O'qing: Sardorning fikri",
      blocks: [
        {
          t: "text", title: "Should we work four days a week?",
          en: "Sardor is convinced that a four-day working week is a good idea. In his opinion, people work better when they have enough rest. The main reason is that tired workers make more mistakes. For example, last year his team worked very long hours and the project had many problems. Some people say that companies will lose money, but Sardor doesn't think that is true. He believes that happy employees do more in less time. Of course, it may not work in every job. A doctor cannot simply stay at home on Fridays. To some extent, he understands the other side. All in all, he thinks companies should at least try it.",
          uz: "Sardor haftasiga to'rt kun ishlash yaxshi g'oya ekaniga ishonadi. Uning fikricha, odamlar yetarli dam olsa, yaxshiroq ishlaydi. Asosiy sabab shuki, charchagan xodimlar ko'proq xato qiladi. Masalan, o'tgan yili uning jamoasi juda uzoq ishladi va loyihada ko'p muammo chiqdi. Ba'zilar kompaniyalar pul yo'qotadi deydi, lekin Sardor bunga ishonmaydi. U baxtli xodimlar kamroq vaqtda ko'proq ish qiladi deb hisoblaydi. Albatta, bu har bir kasbda ishlamasligi mumkin. Shifokor juma kuni shunchaki uyda o'tira olmaydi. Ma'lum darajada, u boshqa tomonni tushunadi. Xullas, u kompaniyalar hech bo'lmasa sinab ko'rishi kerak deb o'ylaydi.",
        },
        { t: "check", ex: { k: "choice", q: "What is Sardor's main reason?", opts: ["Tired workers make more mistakes.", "Offices are too small.", "Fridays are boring.", "Doctors earn more money."], a: 0, why: "Matnda: *The main reason is that tired workers make more mistakes.*" } },
      ],
    },
  ],
  words: [
    { en: "opinion", uz: "fikr, qarash", ipa: "əˈpɪn.jən", pos: "noun", ex: "In my opinion, the film was too long.", exUz: "Menimcha, film juda uzun edi." },
    { en: "point of view", uz: "nuqtai nazar", ipa: "ˌpɔɪnt əv ˈvjuː", pos: "phrase", ex: "From my point of view, this is a mistake.", exUz: "Mening nuqtai nazarimdan, bu xato." },
    { en: "convinced", uz: "ishongan, aniq ishonchi komil", ipa: "kənˈvɪnst", pos: "adj", ex: "I'm convinced that we can finish on time.", exUz: "Vaqtida tugatishimizga ishonchim komil." },
    { en: "argue", uz: "bahslashmoq; dalil keltirmoq", ipa: "ˈɑː.ɡjuː", pos: "verb", ex: "Some experts argue that sleep is more important than food.", exUz: "Ba'zi mutaxassislar uyqu ovqatdan muhimroq deb hisoblaydi." },
    { en: "argument", uz: "dalil; bahs", ipa: "ˈɑː.ɡjə.mənt", pos: "noun", ex: "She gave a strong argument for the change.", exUz: "U o'zgarish uchun kuchli dalil keltirdi." },
    { en: "evidence", uz: "dalil, asos", ipa: "ˈev.ɪ.dəns", pos: "noun", ex: "There is a lot of evidence that exercise helps.", exUz: "Mashq yordam berishini ko'rsatuvchi dalillar ko'p." },
    { en: "persuade", uz: "ko'ndirmoq", ipa: "pəˈsweɪd", pos: "verb", ex: "I tried to persuade him to join us.", exUz: "Uni bizga qo'shilishga ko'ndirishga harakat qildim." },
    { en: "fair", uz: "adolatli", ipa: "feər", pos: "adj", ex: "That sounds fair to me.", exUz: "Menga bu adolatli tuyuladi." },
    { en: "statement", uz: "bayonot, fikr", ipa: "ˈsteɪt.mənt", pos: "noun", ex: "I don't agree with that statement.", exUz: "Men bu fikrga qo'shilmayman." },
    { en: "debate", uz: "munozara", ipa: "dɪˈbeɪt", pos: "noun", ex: "There was a long debate about the new rules.", exUz: "Yangi qoidalar haqida uzoq munozara bo'ldi." },
  ],
  practice: [
    { k: "choice", q: "Qaysi ibora eng **qat'iy**?", opts: ["I guess so.", "It seems to me that…", "I'm convinced that…", "Perhaps…"], a: 2, why: "**I'm convinced that** — kuchli ishonchni bildiradi." },
    { k: "choice", q: "**I ___ with you. You are right.**", opts: ["agree", "am agree", "am agreeing", "agreed to"], a: 0, why: "**agree** — fe'l, **am** kerak emas." },
    { k: "listen", say: "I couldn't agree more.", opts: ["I couldn't agree more.", "I don't agree at all.", "I'm not sure about that.", "I agree to some extent."], a: 0, why: "**I couldn't agree more** — to'liq roziman." },
    { k: "fill", q: "I don't ___ it is a good idea.", a: ["think"], uz: "Menimcha, bu yaxshi g'oya emas.", why: "Inkor **think** ga qo'yiladi: *I don't think…*" },
    { k: "fill", q: "In my ___, young people should travel more.", a: ["opinion", "view"], uz: "Menimcha, yoshlar ko'proq sayohat qilishi kerak.", why: "**In my opinion / In my view** — menimcha." },
    { k: "fill", q: "You've got a ___, but I still disagree.", a: ["point"], uz: "Gapingizda jon bor, lekin men baribir rozi emasman.", why: "**You've got a point** — qisman rozilik." },
    { k: "order", uz: "Menimcha, bu juda yaxshi g'oya emas.", words: ["I", "don't", "think", "it's", "a", "very", "good", "idea."], extra: ["am", "thinking"], alt: [["I", "do", "not", "think", "it's", "a", "very", "good", "idea."], ["I", "don't", "think", "it", "is", "a", "very", "good", "idea."]], why: "Inkor **think** ga: *I don't think…*" },
    { k: "order", uz: "Asosiy sabab shuki, bu arzonroq.", words: ["The", "main", "reason", "is", "that", "it", "is", "cheaper."], extra: ["because", "are"], alt: [["The", "main", "reason", "is", "that", "it's", "cheaper."]], why: "Sabab: **The main reason is that…**" },
    { k: "translate", uz: "Men siz bilan to'liq roziman.", a: ["I completely agree with you.", "I totally agree with you.", "I fully agree with you.", "I agree with you completely."], why: "**agree with** + kishi." },
    { k: "translate", uz: "Menimcha, bu to'g'ri emas.", a: ["I don't think that's true.", "I don't think that is true.", "I don't think it's true.", "I don't think it is true.", "I don't think that's right.", "I don't think that is right."], why: "**I don't think…** qolipi." },
    { k: "match", pairs: [["opinion", "fikr, qarash"], ["evidence", "dalil, asos"], ["persuade", "ko'ndirmoq"], ["fair", "adolatli"], ["debate", "munozara"]] },
    { k: "tf", q: "**I am agree with you** — bu gap to'g'ri.", a: false, why: "To'g'risi: *I agree with you.*" },
    { k: "tf", q: "**Because it is cheaper.** gapni yangi jumla sifatida boshlash B1 darajada yaxshi uslub.", a: false, why: "Sabab ko'proq **The main reason is that…** yoki *…because…* ichida beriladi." },
    { k: "fix", wrong: "According to me, this is a bad idea.", a: ["In my opinion, this is a bad idea.", "In my view, this is a bad idea.", "I think this is a bad idea.", "From my point of view, this is a bad idea."], hint: "Fikringizni boshqacha ayting", why: "*According to me* ishlatilmaydi; **In my opinion** deymiz." },
    { k: "speak", say: "In my opinion, we should walk more because it is healthy.", uz: "Menimcha, biz ko'proq piyoda yurishimiz kerak, chunki bu foydali." },
  ],
  quiz: [
    { k: "choice", q: "**Do you think it will rain?** — **Yes, ___.**", opts: ["I think so", "I think it", "I think yes it", "I am thinking"], a: 0, why: "Qisqa javob: **I think so.**" },
    { k: "choice", q: "Qaysi gap fikrni **yumshoq** aytadi?", opts: ["You are completely wrong.", "That is nonsense.", "I'm afraid I see it differently.", "Stop talking."], a: 2, why: "**I'm afraid I see it differently** — xushmuomala e'tiroz." },
    { k: "choice", q: "**I don't ___ with him about this.**", opts: ["agree", "am agree", "agreeing", "agrees"], a: 0, why: "**don't + agree** (asosiy fe'l)." },
    { k: "choice", q: "Misol keltirish uchun qaysi ibora mos?", opts: ["For instance,", "However,", "In conclusion,", "Although,"], a: 0, why: "**For example / For instance** — misol." },
    { k: "fill", q: "The main reason ___ that it saves time.", a: ["is"], uz: "Asosiy sabab shuki, bu vaqtni tejaydi.", why: "**The main reason is that…**" },
    { k: "fill", q: "I agree to some ___, but not completely.", a: ["extent"], uz: "Ma'lum darajada roziman, lekin to'liq emas.", why: "**to some extent** — ma'lum darajada." },
    { k: "dictation", say: "I'm convinced that this is the right decision.", uz: "Bu to'g'ri qaror ekaniga ishonchim komil.", why: "**convinced** — ishongan." },
    { k: "fix", wrong: "I am agree with your idea.", a: ["I agree with your idea."], hint: "agree — fe'l", why: "**agree** bilan **am** ishlatilmaydi." },
    { k: "order", uz: "Sizningcha, buni qilishimiz kerakmi?", words: ["Do", "you", "think", "we", "should", "do", "this?"], extra: ["are", "thinking"], why: "Savol: **Do you think + gap?**" },
    { k: "translate", uz: "Menimcha, u kechikmaydi.", a: ["I don't think he will be late.", "I don't think he'll be late.", "I don't think she will be late.", "I don't think she'll be late."], why: "**I don't think…** qolipi." },
  ],
  summary: [
    "Fikr bildirish: **I think** (yumshoq), **In my opinion / In my view** (o'rtacha), **I'm convinced that** (qat'iy). Ikkisini birga qo'ymang va ~~According to me~~ demang.",
    "Fikrni himoya qilish: **fikr → sabab → misol → xulosa** (*The main reason is that… For example… That is why…*).",
    "Rozilik va e'tiroz: **I agree with you, You've got a point, but…, I'm afraid I disagree.** Xato: ~~I am agree~~.",
    "**I don't think + gap** — inkor *think* ga qo'yiladi: *I don't think it's true.* Qisqa javob: *I think so / I don't think so.*",
    "Yumshatish: **perhaps, I tend to think, to some extent, it seems that.**",
  ],
  homework: "Bitta mavzu tanlang (masalan, *Should students wear uniforms?*). Fikringizni 4 qadamda yozing: fikr, sabab, misol, xulosa. Keyin do'stingiz yozgan fikrga 2 ta javob yozing: bittasida rozi bo'ling, ikkinchisida xushmuomala e'tiroz bildiring.",
};

export default lesson;
