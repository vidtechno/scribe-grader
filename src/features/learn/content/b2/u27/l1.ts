import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l1",
  title: "Gerund or infinitive? Verb patterns",
  titleUz: "Gerund yoki infinitive: remember to do / doing, stop, try, regret, go on",
  goal: "Fe'ldan keyin **-ing** (*gerund*) yoki **to + fe'l** (*infinitive*) kerakligini ishonch bilan tanlaysiz. **remember, forget, stop, try, regret, go on, mean** fe'llarida ma'no o'zgarishini ajratasiz, ish va intervyuda **decide to, avoid -ing, persuade someone to** qoliplarini ishlatasiz va **I look forward to meet**, **suggest to go** kabi tipik xatolardan qochasiz.",
  slides: [
    {
      title: "Nega bu qoliplar muhim?",
      blocks: [
        { t: "p", md: "Ish xatida, intervyuda va yig'ilishda bir fe'ldan keyin ikkinchi fe'l tez-tez keladi: *We decided **to postpone** the launch. She avoids **making** phone calls.* Inglizchada ikkinchi fe'l **o'zboshimchalik bilan** tanlanmaydi: birinchi fe'l uni **belgilaydi**. Xato qilsangiz, gapingiz darhol «chet ellikniki» bo'lib eshitiladi." },
        { t: "p", md: "O'zbek tilida bu muammo deyarli yo'q: *borishni xohlayman, borishni taklif qildim* — ikkalasida ham **-ish** shakli. Inglizchada esa uchta yo'l bor:" },
        {
          t: "table", head: ["Qolip", "Misol", "Izoh"], speak: [1],
          rows: [
            ["fe'l + **-ing** (*gerund*)", "I enjoy working here.", "enjoy, avoid, suggest, consider, admit, deny, resent"],
            ["fe'l + **to + fe'l** (*infinitive*)", "We decided to expand.", "decide, manage, afford, refuse, agree, plan, hope"],
            ["fe'l + **ikkalasi** (ma'no bir xil)", "I like to work / working early.", "like, love, hate, prefer, start, begin, continue"],
            ["fe'l + **ikkalasi** (ma'no boshqa)", "I stopped to talk / stopped talking.", "remember, forget, stop, try, regret, go on, mean"],
          ],
        },
        { t: "tip", tone: "info", md: "Yaxshi xabar: bu ro'yxatlar **mavzu bo'yicha** guruhlanadi. Masalan, **fikr va rejaga** oid fe'llar (*decide, plan, hope, agree, refuse*) **to** bilan, **to'xtatish, qochish, o'ylab ko'rish** ma'nosidagilar (*avoid, postpone, consider, give up*) **-ing** bilan keladi." },
        { t: "check", ex: { k: "choice", q: "She suggested ___ the meeting to Friday.", opts: ["moving", "to move", "move", "for move"], a: 0, why: "**suggest** dan keyin **-ing** keladi: *suggested moving*. **suggest to move** — xato." } },
      ],
    },
    {
      title: "Faqat -ing yoki faqat to",
      blocks: [
        { t: "p", md: "Quyidagi fe'llarni **juftlik** sifatida yodlang: fe'l + shaklini birga o'qing." },
        {
          t: "table", head: ["Fe'l + -ing", "Fe'l + to"], speak: [0, 1],
          rows: [
            ["enjoy meeting clients", "decide to resign"],
            ["avoid making mistakes", "manage to finish on time"],
            ["consider changing jobs", "afford to hire more staff"],
            ["postpone signing", "refuse to negotiate"],
            ["admit breaking the rule", "promise to call back"],
            ["resent being interrupted", "fail to meet the target"],
          ],
        },
        { t: "p", md: "**Fe'l + ob'ekt + to + fe'l**: boshqa odamga ta'sir qilishni bildiruvchi fe'llar odam nomidan keyin **to** oladi: *persuade, allow, advise, remind, warn, encourage, force, expect, want, ask, oblige*." },
        {
          t: "examples", items: [
            { en: "My manager persuaded me to apply for the job.", uz: "Rahbarim meni bu ishga murojaat qilishga ko'ndirdi." },
            { en: "The law obliges employers to keep records.", uz: "Qonun ish beruvchilarni hujjatlarni saqlashga majbur qiladi." },
            { en: "They warned us not to share the password.", uz: "Ular bizni parolni bermaslikka ogohlantirdi." },
            { en: "I didn't expect him to accept so quickly.", uz: "Uning bunchalik tez rozi bo'lishini kutmagandim." },
          ],
        },
        { t: "tip", tone: "warn", md: "**make** va **let** dan keyin **to siz** (bare infinitive) keladi: *She made me rewrite it. They let us leave early.* Lekin passivda **to** qaytadi: *I was made to rewrite it.*" },
        { t: "check", ex: { k: "fill", q: "We can't afford ___ a new office this year. (buy)", a: ["to buy"], uz: "Bu yil yangi ofis sotib olishga qurbimiz yetmaydi.", why: "**afford** dan keyin **to + fe'l**: *can't afford to buy*." } },
        { t: "check", ex: { k: "choice", q: "The manager persuaded me ___ the offer.", opts: ["to accept", "accepting", "accept", "of accepting"], a: 0, why: "**persuade + ob'ekt + to + fe'l**: *persuaded me to accept*." } },
      ],
    },
    {
      title: "Ma'no o'zgaradigan fe'llar",
      blocks: [
        { t: "p", md: "Ba'zi fe'llar ikkala shaklni oladi, lekin **ma'nosi farq qiladi**. Umumiy qoida: **-ing** = *oldin bo'lib o'tgan yoki jarayon*, **to** = *keyingi ish yoki maqsad*." },
        {
          t: "table", head: ["Fe'l", "+ to (maqsad / keyingi ish)", "+ -ing (o'tgan / jarayon)"],
          rows: [
            ["remember / forget", "Remember **to send** the file. (hali yubormagansiz)", "I remember **sending** it. (yuborganim esimda)"],
            ["stop", "He stopped **to check** his phone. (to'xtadi, endi tekshirdi)", "He stopped **checking** his phone. (tekshirishni tashladi)"],
            ["try", "Try **to arrive** early. (harakat qiling, qiyin)", "Try **arriving** early. (sinab ko'ring, yechim)"],
            ["regret", "I regret **to say** we can't help. (afsus, xabar beraman)", "I regret **saying** that. (aytganimdan afsusdaman)"],
            ["go on", "She went on **to become** CEO. (keyin bo'ldi)", "She went on **talking**. (gapirishda davom etdi)"],
            ["mean", "I meant **to call** you. (niyat qilgandim)", "This job means **working** weekends. (demak, bu...)"],
          ],
        },
        { t: "p", md: "**need** ham ikki xil: **need to do** — kerak (odam majbur), **need doing** — ob'ektga kerak (passiv ma'no): *The report needs checking* = *needs to be checked*." },
        {
          t: "examples", items: [
            { en: "Don't forget to lock the office door.", uz: "Ofis eshigini qulflashni unutmang. (hali qilinmagan)" },
            { en: "I'll never forget meeting the founder.", uz: "Asoschi bilan uchrashganim hech esimdan chiqmaydi. (bo'lib o'tgan)" },
            { en: "If the system crashes, try restarting it.", uz: "Tizim ishdan chiqsa, uni qayta ishga tushirib ko'ring." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "I'll never forget ___ the CEO for the first time. She was so friendly.", opts: ["meeting", "to meet", "meet", "to meeting"], a: 0, why: "Gap o'tgan voqea haqida: **forget + -ing** (*never forget meeting*)." } },
        { t: "check", ex: { k: "choice", q: "Please remember ___ the report before you leave.", opts: ["to send", "sending", "send", "for sending"], a: 0, why: "Hali qilinmagan ish: **remember + to**." } },
        { t: "check", ex: { k: "tf", q: "*Try to restart the computer* va *Try restarting the computer* bir xil ma'noni bildiradi.", a: false, why: "**try to** = harakat qilish; **try -ing** = usulni sinab ko'rish. Ma'nosi farq qiladi." } },
      ],
    },
    {
      title: "Predloglardan keyin -ing",
      blocks: [
        { t: "p", md: "**Predlogdan keyin** doim **-ing** (yoki ot) keladi, hech qachon *to + fe'l* emas. Ayniqsa **to** predlog bo'lgan iboralarda chalkashlik ko'p: *look forward **to**, be used **to**, object **to**, committed **to**.*" },
        {
          t: "table", head: ["Ibora", "Misol"], speak: [1],
          rows: [
            ["look forward to + -ing", "I look forward to hearing from you."],
            ["be used to / get used to + -ing", "I'm used to working under pressure."],
            ["object to + -ing", "Some staff object to wearing a uniform."],
            ["be capable of / interested in + -ing", "She is capable of leading a big team."],
            ["instead of / without / before / after + -ing", "He left without saying goodbye."],
          ],
        },
        { t: "tip", tone: "good", md: "**Sinash usuli:** *to* dan keyin **it / the meeting** qo'yib ko'ring. *I look forward to **it*** to'g'ri → demak **to** predlog → **-ing** kerak. *I decided to **it*** — mantiqsiz → bu **to-infinitive**." },
        { t: "check", ex: { k: "choice", q: "I'm looking forward to ___ you next week.", opts: ["seeing", "see", "to see", "saw"], a: 0, why: "Bu yerda **to** — predlog (*look forward to it*), shuning uchun **-ing**." } },
        { t: "check", ex: { k: "fix", wrong: "Instead of to go by bus, we walked.", a: ["Instead of going by bus, we walked."], hint: "predlogdan keyin -ing", why: "**Instead of** predlog: undan keyin **-ing** keladi." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida *uchrashishni intiqlik bilan kutaman*, *borishni taklif qildim*, *ketishga qaror qildi* kabi gaplarda deyarli bir xil **-ish** shakli ishlatiladi. Shu sabab bir xil xatolar takrorlanadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I look forward to meeting you.", "He suggested going by train.", "She decided to leave the company.", "My boss made me work late."] },
          bad: { title: "Xato", items: ["I look forward to meet you.", "He suggested to go by train.", "She decided leaving the company.", "My boss made me to work late."] },
        },
        { t: "p", md: "**1.** *look forward to* da **to** — predlog, demak **-ing**. **2.** *suggest* faqat **-ing** (yoki *suggest that we go*) oladi. **3.** *decide* — reja, demak **to + fe'l**. **4.** *make someone* dan keyin **to siz** fe'l keladi." },
        { t: "check", ex: { k: "fix", wrong: "I look forward to meet you next week.", a: ["I look forward to meeting you next week."], hint: "to — predlog", why: "*look forward to* + **-ing**: *meeting*." } },
        { t: "check", ex: { k: "fix", wrong: "He suggested to go by train.", a: ["He suggested going by train."], hint: "suggest + ?", why: "**suggest** dan keyin infinitive kelmaydi: *suggested going*." } },
        { t: "check", ex: { k: "fix", wrong: "She decided leaving the company.", a: ["She decided to leave the company."], hint: "decide + ?", why: "**decide + to + fe'l**." } },
        { t: "check", ex: { k: "fix", wrong: "My boss made me to rewrite the whole report.", a: ["My boss made me rewrite the whole report."], hint: "make + ob'ekt + ?", why: "**make + ob'ekt + bare infinitive** (to siz)." } },
      ],
    },
    {
      title: "O'qing: Men o'zgarishga qaror qildim",
      blocks: [
        {
          t: "text", title: "A change of career", voice: "emma",
          en: "Two years ago I was working in a bank, and I dreaded going to the office every Monday. I was capable of doing the job, but I resented spending ten hours a day looking at spreadsheets. For months I contemplated changing careers, yet I kept postponing the decision. Then a friend persuaded me to attend a free course in web design. I remember feeling nervous on the first evening, but I went on to attend every lesson. After six months I managed to find a junior position at a small software company. I don't regret leaving the bank. Of course, I still need to learn a lot, but I'm keen to take on new challenges, and I enjoy working with people who share my interests.",
          uz: "Ikki yil oldin men bankda ishlardim va har dushanba kuni ofisga borishdan qo'rqardim. Men ishni uddalay olardim, lekin kuniga o'n soat jadvallarga qarab o'tirishdan noroziydim. Bir necha oy kasbni o'zgartirishni o'ylab yurdim, biroq qarorni kechiktiraverdim. Keyin bir do'stim meni veb-dizayn bo'yicha bepul kursga qatnashishga ko'ndirdi. Birinchi kechada hayajonlanganim esimda, lekin har bir darsga qatnashishda davom etdim. Olti oydan keyin kichik dasturiy ta'minot kompaniyasida kichik lavozim topishga muvaffaq bo'ldim. Bankni tark etganimdan afsuslanmayman. Albatta, hali ko'p narsani o'rganishim kerak, lekin yangi vazifalarni o'z zimmamga olishga intilaman va qiziqishlarim o'xshash odamlar bilan ishlashni yoqtiraman.",
        },
        { t: "check", ex: { k: "tf", q: "The speaker still works in the bank.", a: false, why: "Matnda: *I don't regret leaving the bank* va u dasturiy ta'minot kompaniyasida ishlaydi." } },
        { t: "check", ex: { k: "choice", q: "What did a friend persuade the speaker to do?", opts: ["Attend a free web design course", "Stay in the bank", "Start her own company", "Learn to code in a month"], a: 0, why: "*A friend persuaded me to attend a free course in web design.*" } },
      ],
    },
    {
      title: "Dialog: Intervyuga tayyorgarlik",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Nilufar", en: "Timur, I've got an interview tomorrow. Any advice?", uz: "Timur, ertaga intervyum bor. Maslahat bormi?" },
            { who: "Timur", en: "Remember to arrive ten minutes early, and try not to talk too fast.", uz: "O'n daqiqa erta kelishni unutma va juda tez gapirmaslikka harakat qil." },
            { who: "Nilufar", en: "I'm tempted to memorise my answers. Is that a good idea?", uz: "Javoblarimni yodlab olgim kelyapti. Bu yaxshi fikrmi?" },
            { who: "Timur", en: "I'd avoid doing that. They'll notice, and you'll sound unnatural.", uz: "Men buni qilmasdim. Ular sezadi va sen tabiiy emas eshitilasan." },
            { who: "Nilufar", en: "What if they ask me why I left my last job?", uz: "Oxirgi ishimdan nega ketganimni so'rashsa-chi?" },
            { who: "Timur", en: "Be honest, but don't criticise your old manager. Say you wanted to develop new skills.", uz: "Halol bo'l, lekin eski rahbaringni tanqid qilma. Yangi ko'nikmalar rivojlantirmoqchi bo'lganingni ayt." },
            { who: "Nilufar", en: "Good point. I'll practise answering in front of the mirror tonight.", uz: "To'g'ri. Bugun kechqurun ko'zgu oldida javob berishni mashq qilaman." },
            { who: "Timur", en: "Good luck! I look forward to hearing how it went.", uz: "Omad! Qanday o'tganini eshitishni intiqlik bilan kutaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What does Timur advise Nilufar to avoid?", opts: ["Memorising her answers", "Arriving early", "Being honest", "Asking questions"], a: 0, why: "Timur: *I'd avoid doing that* — ya'ni javoblarni yodlashdan qochish." } },
      ],
    },
  ],
  words: [
    { en: "undertake", uz: "o'z zimmasiga olmoq, majburiyat olmoq", ipa: "ˌʌn.dəˈteɪk", pos: "verb", ex: "The firm undertook to repay every customer in full.", exUz: "Firma har bir mijozga pulini to'liq qaytarishni zimmasiga oldi." },
    { en: "resent", uz: "ranjimoq, norozi bo'lmoq", ipa: "rɪˈzent", pos: "verb", ex: "She resented being asked to work at the weekend.", exUz: "U dam olish kunida ishlashga so'ralgani uchun norozi edi." },
    { en: "refrain", uz: "o'zini tiymoq, qilmaslik", ipa: "rɪˈfreɪn", pos: "verb", ex: "Please refrain from using your phone during the meeting.", exUz: "Iltimos, yig'ilish paytida telefondan foydalanishdan o'zingizni tiying." },
    { en: "contemplate", uz: "jiddiy o'ylab ko'rmoq", ipa: "ˈkɒn.təm.pleɪt", pos: "verb", ex: "He is contemplating moving to another country.", exUz: "U boshqa mamlakatga ko'chishni jiddiy o'ylab ko'ryapti." },
    { en: "oblige", uz: "majbur qilmoq", ipa: "əˈblaɪdʒ", pos: "verb", ex: "The law obliges employers to provide a safe workplace.", exUz: "Qonun ish beruvchilarni xavfsiz ish joyi bilan ta'minlashga majbur qiladi." },
    { en: "keen", uz: "ishtiyoqli, qiziqqan", ipa: "kiːn", pos: "adj", ex: "She is keen to learn new software.", exUz: "U yangi dasturlarni o'rganishga ishtiyoqli." },
    { en: "capable", uz: "qodir, uddalay oladigan", ipa: "ˈkeɪ.pə.bəl", pos: "adj", ex: "He is capable of working under great pressure.", exUz: "U katta bosim ostida ishlashga qodir." },
    { en: "inclined", uz: "moyil, ko'ngli tortadigan", ipa: "ɪnˈklaɪnd", pos: "adj", ex: "I'm inclined to accept their offer.", exUz: "Men ularning taklifini qabul qilishga moyilman." },
    { en: "dread", uz: "qo'rqib kutmoq, yomon ko'rmoq", ipa: "dred", pos: "verb", ex: "I dread making calls to angry customers.", exUz: "Jahldor mijozlarga qo'ng'iroq qilishdan yuragim siqiladi." },
    { en: "tempted", uz: "vasvasaga tushgan, ko'ngli tortgan", ipa: "ˈtemp.tɪd", pos: "adj", ex: "I was tempted to leave work early on Friday.", exUz: "Juma kuni ishdan erta ketgim kelgandi." },
  ],
  practice: [
    { k: "choice", q: "We decided ___ the project in March.", opts: ["start", "starting", "to start", "for start"], a: 2, why: "**decide + to + fe'l**: *decided to start*." },
    { k: "choice", q: "She admitted ___ the wrong figures to the client.", opts: ["to send", "sending", "send", "for send"], a: 1, why: "**admit + -ing**: *admitted sending*." },
    { k: "listen", say: "I really enjoy working with international teams.", opts: ["I really enjoy to work with international teams.", "I really enjoy work with international teams.", "I really enjoy working with international teams.", "I really enjoyed working with international teams."], a: 2, why: "**enjoy + -ing**: *enjoy working*." },
    { k: "fill", q: "I remember ___ the door, but now it's open. (lock)", a: ["locking"], uz: "Eshikni qulflaganim esimda, lekin hozir u ochiq.", why: "Oldin bo'lgan ish: **remember + -ing**." },
    { k: "fill", q: "Remember ___ the lights when you leave the office. (switch off)", a: ["to switch off"], uz: "Ofisdan ketayotganda chiroqlarni o'chirishni unutmang.", why: "Hali qilinmagan ish: **remember + to + fe'l**." },
    { k: "fill", q: "On my way to work I stopped ___ some coffee. (buy)", a: ["to buy"], uz: "Ishga ketayotib kofe olish uchun to'xtadim.", why: "To'xtashdan **maqsad** — **stop + to + fe'l**." },
    { k: "order", uz: "Rahbarim meni erta kelishga ishontirdi.", words: ["My", "boss", "persuaded", "me", "to", "come", "early."], extra: ["coming", "for"], why: "**persuade + ob'ekt + to + fe'l**." },
    { k: "order", uz: "Biz kelasi oy yangi ofisga ko'chishni o'ylab ko'ryapmiz.", words: ["We", "are", "considering", "moving", "to", "a", "new", "office", "next", "month."], extra: ["move", "of"], why: "**consider + -ing**: *considering moving*." },
    { k: "translate", uz: "Men sizni yana ko'rishni intiqlik bilan kutaman.", a: ["I look forward to seeing you again.", "I'm looking forward to seeing you again.", "I am looking forward to seeing you again."], why: "*look forward to* + **-ing**: *seeing*." },
    { k: "translate", uz: "U kechikib kelganini tan oldi.", a: ["He admitted being late.", "He admitted arriving late.", "He admitted coming late.", "He admitted that he was late.", "He admitted that he had been late."], why: "**admit + -ing** (yoki *that* gap)." },
    { k: "fix", wrong: "I'm looking forward to meet the new director.", a: ["I'm looking forward to meeting the new director.", "I am looking forward to meeting the new director."], hint: "to — predlog", why: "**look forward to** + **-ing**." },
    { k: "fix", wrong: "The company can't afford paying higher salaries.", a: ["The company can't afford to pay higher salaries.", "The company cannot afford to pay higher salaries."], hint: "afford + ?", why: "**afford + to + fe'l**." },
    { k: "match", pairs: [["I stopped to rest.", "Dam olish uchun to'xtadim."], ["I stopped resting.", "Dam olishni to'xtatdim."], ["Try to open it.", "Uni ochishga harakat qiling."], ["Try opening it.", "Uni ochib ko'ring (usul sifatida)."], ["I regret to inform you.", "Sizga xabar qilishga afsusdaman."]] },
    { k: "tf", q: "*I'll never forget to meet her* va *I'll never forget meeting her* bir xil ma'noni bildiradi.", a: false, why: "**forget + -ing** = bo'lib o'tgan voqea esdan chiqmaydi; **forget to** = qilishni unutmoq." },
    { k: "dictation", say: "He regrets not accepting the job offer.", uz: "U ish taklifini qabul qilmaganidan afsuslanadi.", why: "**regret + -ing** (inkor: *not accepting*)." },
    { k: "speak", say: "I'm keen to take on more responsibility, but I'm not afraid of asking for help.", uz: "Men ko'proq mas'uliyat olishga ishtiyoqliman, lekin yordam so'rashdan qo'rqmayman." },
  ],
  quiz: [
    { k: "choice", q: "The manager refused ___ the contract.", opts: ["to sign", "signing", "sign", "for signing"], a: 0, why: "**refuse + to + fe'l**." },
    { k: "choice", q: "She suggested ___ the deadline.", opts: ["to extend", "extending", "extend", "for extend"], a: 1, why: "**suggest + -ing**." },
    { k: "choice", q: "I'll never forget ___ my first salary.", opts: ["to receive", "receive", "receiving", "to be receive"], a: 2, why: "Bo'lib o'tgan voqea: **forget + -ing**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He avoided to answer the question.", "He avoided answering the question.", "He avoided answer the question.", "He avoided for answering the question."], a: 1, why: "**avoid + -ing**." },
    { k: "fill", q: "My teacher encouraged me ___ for the scholarship. (apply)", a: ["to apply"], uz: "O'qituvchim meni grantga murojaat qilishga undadi.", why: "**encourage + ob'ekt + to + fe'l**." },
    { k: "fill", q: "She is capable ___ managing a large team.", a: ["of"], uz: "U katta jamoani boshqarishga qodir.", why: "**capable of + -ing**." },
    { k: "order", uz: "Ular bizga hisobotni ertaga topshirishni eslatdi.", words: ["They", "reminded", "us", "to", "submit", "the", "report", "tomorrow."], extra: ["submitting", "that"], why: "**remind + ob'ekt + to + fe'l**." },
    { k: "translate", uz: "U ishni tashlashni jiddiy o'ylab ko'rdi.", a: ["She considered quitting her job.", "She considered leaving her job.", "She considered resigning.", "She considered quitting.", "She considered leaving the job.", "She considered quitting the job."], why: "**consider + -ing**." },
    { k: "fix", wrong: "My boss made me to rewrite the whole report.", a: ["My boss made me rewrite the whole report."], hint: "make + ob'ekt + ?", why: "**make + ob'ekt + to siz fe'l**." },
    { k: "tf", q: "*I regret telling her* gapida so'zlovchi allaqachon aytilgan narsadan afsuslanadi.", a: true, why: "**regret + -ing** = o'tgan ishdan afsuslanish." },
  ],
  summary: [
    "Ikkinchi fe'lning shaklini **birinchi fe'l** belgilaydi: **-ing** (*enjoy, avoid, suggest, consider, admit*) yoki **to** (*decide, manage, afford, refuse, plan, hope*).",
    "**Ob'ekt + to + fe'l**: *persuade, remind, warn, encourage, oblige*. **make / let** dan keyin **to siz**: *made me work*.",
    "Ma'no o'zgaradi: **remember / forget / stop / try / regret / go on to** = keyingi ish yoki maqsad; **-ing** = o'tgan ish yoki jarayon.",
    "**Predlogdan keyin** doim **-ing**: *look forward to seeing, instead of going, capable of leading*.",
    "O'zbekcha xatolar: ~~look forward to meet~~ → **meeting**; ~~suggest to go~~ → **suggest going**; ~~decide leaving~~ → **decide to leave**.",
  ],
  homework: "O'z hayotingiz haqida 8 ta gap yozing: ikkitasi **decide / manage / afford + to**, ikkitasi **enjoy / avoid / consider + -ing**, ikkitasi **remember / stop / try** (ma'no farqi bilan), ikkitasi **look forward to + -ing** bilan. Keyin har bir gapda ikkinchi fe'l shakli birinchi fe'lga mosligini tekshiring.",
};

export default lesson;
