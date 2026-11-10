import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l8",
  title: "Unit review: work and formal English",
  titleUz: "Bosqich takrori: ish va rasmiy ingliz tili",
  goal: "Bosqichni takrorlaysiz: **gerund va infinitive** (*decide to, avoid -ing, remember to / doing*), **rasmiy va norasmiy uslub**, **ish phrasal verb'lari** (*put it off, come up with*), **must / have to / needn't / be supposed to**, ish lug'ati, yig'ilish iboralari va rasmiy xat qoidalarini yangi misollarda tekshirasiz hamda 10 ta yangi so'z (*delegate, implement, invoice, overdue…*) o'rganasiz.",
  slides: [
    {
      title: "Takror: gerund yoki infinitive",
      blocks: [
        { t: "p", md: "Ikkinchi fe'lning shaklini **birinchi fe'l** belgilaydi. Eslang: **fikr va reja** — *to*; **to'xtatish, qochish, o'ylash** — *-ing*; **predlogdan keyin** — *-ing*." },
        {
          t: "table", head: ["Qolip", "Misol", "Eslatma"], speak: [1],
          rows: [
            ["fe'l + to", "The board agreed to increase the budget.", "agree, decide, manage, afford, refuse"],
            ["fe'l + -ing", "She avoided talking to the manager.", "avoid, consider, suggest, postpone, admit"],
            ["ob'ekt + to", "He persuaded us to sign the contract.", "persuade, remind, warn, encourage"],
            ["ma'no farqi", "Remember to lock it. / I remember locking it.", "remember, forget, stop, try, regret"],
            ["predlog + -ing", "I look forward to meeting you.", "look forward to, instead of, capable of"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "The director agreed ___ the training budget.", opts: ["increasing", "to increase", "increase", "for increase"], a: 1, why: "**agree + to + fe'l**." } },
        { t: "check", ex: { k: "choice", q: "I'll never forget ___ my first presentation to the board; I was so nervous.", opts: ["giving", "to give", "give", "to giving"], a: 0, why: "Bo'lib o'tgan voqea: **forget + -ing**." } },
        { t: "check", ex: { k: "fix", wrong: "We are considering to hire two more people.", a: ["We are considering hiring two more people."], hint: "consider + ?", why: "**consider + -ing**." } },
      ],
    },
    {
      title: "Takror: uslub va phrasal verb'lar",
      blocks: [
        { t: "p", md: "Uslubni **o'quvchiga** moslang. Rasmiy matnda: qisqartma yo'q, **passive**, bitta rasmiy fe'l, yumshatilgan so'rov. Phrasal verb'larda **olmosh** separable fe'lning o'rtasiga qo'yiladi." },
        {
          t: "table", head: ["Norasmiy", "Rasmiy"], speak: [0, 1],
          rows: [
            ["get permission", "obtain permission"],
            ["buy new laptops", "purchase new laptops"],
            ["find out the reason", "establish the reason"],
            ["put off the meeting", "postpone the meeting"],
            ["Can you send it?", "I would be grateful if you could send it."],
          ],
        },
        {
          t: "examples", items: [
            { en: "We turned the offer down. / We turned it down.", uz: "Taklifni rad etdik. / Uni rad etdik." },
            { en: "I can't put up with the delays.", uz: "Kechikishlarga chidab bo'lmaydi. (uch qismli, ajralmaydi)" },
            { en: "The lawyers are drawing up the contract.", uz: "Advokatlar shartnomani tayyorlayapti. (separable)" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi juftlik to'g'ri (norasmiy → rasmiy)?", opts: ["buy → purchase", "start → terminate", "enough → approximately", "later → reside"], a: 0, why: "**buy → purchase**. Boshqa juftliklarda ma'no mos emas." } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **noto'g'ri**?", opts: ["He turned down the offer.", "He turned the offer down.", "He turned down it.", "He turned it down."], a: 2, why: "Olmosh separable verb'da **o'rtada**: *turned it down*." } },
      ],
    },
    {
      title: "Takror: majburiyat, ruxsat va zarurat",
      blocks: [
        { t: "p", md: "Ish qoidalari uchun eng muhim farq: **mustn't** (taqiq) va **don't have to / needn't** (shart emas). O'tgan zamonda **must** o'rniga **had to** ishlatiladi." },
        {
          t: "table", head: ["Ma'no", "Ifoda", "Misol"], speak: [2],
          rows: [
            ["Majburiyat", "must, have to, be required to", "Visitors must sign in. / Applicants are required to provide a reference."],
            ["Taqiq", "mustn't, not allowed to", "You mustn't share the password."],
            ["Shart emas", "don't have to, needn't", "You don't have to wear a suit."],
            ["Ruxsat", "can, be allowed to", "We are allowed to work from home."],
            ["Kutilgan", "be supposed to", "The meeting is supposed to start at nine."],
            ["O'tgan", "had to, needn't have done", "We had to stay late. / You needn't have brought copies."],
          ],
        },
        { t: "check", ex: { k: "fill", q: "Last winter we ___ to work from home for two months.", a: ["had"], uz: "O'tgan qishda ikki oy uydan ishlashga majbur bo'ldik.", why: "**must** ning o'tgan zamoni — **had to**." } },
        { t: "check", ex: { k: "tf", q: "*You don't have to pay now* gapi hozir to'lash taqiqlanganini bildiradi.", a: false, why: "**don't have to** = shart emas; taqiq uchun **mustn't**." } },
      ],
    },
    {
      title: "Takror: ish lug'ati, yig'ilish va xat",
      blocks: [
        { t: "p", md: "Ish va biznes lug'atida **birikmalar** muhim: *meet a deadline, make a profit, run a business, hand in your notice, apply for a position, be made redundant*. Yig'ilishda: *I take your point, but…, Could you clarify…?, I suggest we…, If you could…, we would…*. Xatda: *I am writing to…, I would be grateful if you could…, Yours sincerely / faithfully*." },
        {
          t: "table", head: ["Mavzu", "To'g'ri", "Xato"],
          rows: [
            ["Biznes", "She runs a small business.", "She makes a small business."],
            ["Muddat", "We must meet the deadline.", "We must make the deadline."],
            ["Yig'ilish", "I agree with you. / Could you explain it to me?", "I am agree. / Explain me."],
            ["Xat", "I am writing to apply for…", "I am writing for apply…"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "She ___ her notice and left the company in June.", opts: ["handed in", "handed out", "took out", "put on"], a: 0, why: "**hand in one's notice** — ishdan ketish haqida ariza topshirish." } },
        { t: "check", ex: { k: "choice", q: "Siz *Dear Mr Khan* bilan boshlagan emailni qanday tugatasiz?", opts: ["Yours faithfully", "Yours sincerely", "Cheers", "Bye for now"], a: 1, why: "Ism ma'lum: **Yours sincerely**." } },
        { t: "check", ex: { k: "choice", q: "Which phrase asks for clarification in a meeting?", opts: ["Could you clarify what you mean by \"soon\"?", "I couldn't agree more.", "Let's adjourn the meeting.", "That's a fair point."], a: 0, why: "**Could you clarify…?** — aniqlashtirish so'rash." } },
      ],
    },
    {
      title: "Tipik xatolar takrori",
      blocks: [
        { t: "p", md: "Bu bosqichdagi eng ko'p takrorlanadigan xatolar o'zbek tilidan so'zma-so'z tarjima va qolipni adashtirishdan keladi. Har bir xatoni **qoida bilan** bog'lab eslang." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["We decided to postpone the launch.", "They put it off until Monday.", "Employees don't have to wear a suit.", "The manager explained the new rules to us."] },
          bad: { title: "Xato", items: ["We decided postponing the launch.", "They put off it until Monday.", "Employees don't must wear a suit.", "The manager explained us the new rules."] },
        },
        { t: "check", ex: { k: "fix", wrong: "We decided postponing the launch.", a: ["We decided to postpone the launch."], hint: "decide + ?", why: "**decide + to + fe'l**." } },
        { t: "check", ex: { k: "fix", wrong: "They put off it until Monday.", a: ["They put it off until Monday."], hint: "olmosh o'rni", why: "**put it off** — olmosh o'rtada." } },
        { t: "check", ex: { k: "fix", wrong: "Employees don't must wear a suit.", a: ["Employees don't have to wear a suit.", "Employees don't need to wear a suit."], hint: "shart emas", why: "**must** ning inkori *don't must* bo'lmaydi: **don't have to**." } },
        { t: "check", ex: { k: "fix", wrong: "The manager explained us the new rules.", a: ["The manager explained the new rules to us."], hint: "explain + ... + to us", why: "**explain something to someone**." } },
      ],
    },
    {
      title: "O'qing: Band hafta",
      blocks: [
        {
          t: "text", title: "A busy week for a team leader", voice: "emma",
          en: "On Monday I realised that I had to delegate more tasks, because I was trying to do everything myself. I decided to appoint a deputy, and I persuaded my colleague Anna to take on the role. We agreed to implement a new reporting system by the end of the month. On Tuesday an invoice turned out to be overdue, so I asked the finance team to look into it. I wasn't allowed to discuss the case with the client, because the information was confidential. On Wednesday our director demonstrated the new software to the staff. Attendance was mandatory, but nobody objected, and several people put forward constructive ideas. On Thursday I had to rewrite a formal email twice, as my first version was far too informal. By Friday our main objective was clear: we must meet the deadline, and we shouldn't put off the difficult decisions any longer.",
          uz: "Dushanba kuni men hamma narsani o'zim qilmoqchi bo'layotganim uchun ko'proq vazifalarni topshirishim kerakligini angladim. O'rinbosar tayinlashga qaror qildim va hamkasbim Annani bu rolni zimmasiga olishga ko'ndirdim. Oy oxirigacha yangi hisobot tizimini joriy qilishga kelishdik. Seshanba kuni bir hisob-faktura muddati o'tganligi ma'lum bo'ldi, shuning uchun moliya jamoasidan buni tekshirishni so'radim. Mijoz bilan bu holni muhokama qilishga ruxsat yo'q edi, chunki ma'lumot maxfiy edi. Chorshanba kuni direktorimiz xodimlarga yangi dasturni namoyish qildi. Qatnashish majburiy edi, lekin hech kim e'tiroz bildirmadi va bir nechtasi foydali g'oyalar ilgari surdi. Payshanba kuni rasmiy emailni ikki marta qayta yozishimga to'g'ri keldi, chunki birinchi variantim juda norasmiy edi. Juma kuniga kelib asosiy maqsadimiz aniq bo'ldi: muddatga ulgurishimiz kerak va qiyin qarorlarni boshqa kechiktirmasligimiz kerak.",
        },
        { t: "check", ex: { k: "tf", q: "The writer discussed the overdue invoice with the client.", a: false, why: "Matnda: *I wasn't allowed to discuss the case with the client* — ma'lumot maxfiy edi." } },
        { t: "check", ex: { k: "choice", q: "Why did the writer rewrite the email on Thursday?", opts: ["The first version was too informal.", "It was too long.", "It had no subject line.", "The director asked her to delete it."], a: 0, why: "*my first version was far too informal*." } },
      ],
    },
    {
      title: "Dialog: Ta'tilga ketishdan oldin",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Karim", en: "Dilnoza, I'm going on holiday on Friday. Can we go over the handover?", uz: "Dilnoza, juma kuni ta'tilga ketyapman. Topshirish masalalarini ko'rib chiqsak bo'ladimi?" },
            { who: "Dilnoza", en: "Of course. What do I need to deal with first?", uz: "Albatta. Birinchi navbatda nima bilan shug'ullanishim kerak?" },
            { who: "Karim", en: "There's an overdue invoice from the supplier. I suggest calling them on Monday and asking for a new deadline.", uz: "Ta'minotchidan muddati o'tgan hisob-faktura bor. Dushanba kuni ularga qo'ng'iroq qilib, yangi muddat so'rashni taklif qilaman." },
            { who: "Dilnoza", en: "Fine. Am I allowed to approve the payment myself?", uz: "Yaxshi. To'lovni o'zim tasdiqlashim mumkinmi?" },
            { who: "Karim", en: "No, you're not authorised to do that. You have to ask the finance director. And please remember to keep the contract confidential.", uz: "Yo'q, bunga vakolatingiz yo'q. Moliya direktoridan so'rashingiz kerak. Va shartnomani maxfiy saqlashni unutmang." },
            { who: "Dilnoza", en: "Understood. Is there anything I should put off until you come back?", uz: "Tushundim. Siz qaytguningizcha kechiktirishim kerak bo'lgan narsa bormi?" },
            { who: "Karim", en: "Yes, the new project. I'd like to take part in the planning, so please don't start it without me.", uz: "Ha, yangi loyiha. Rejalashtirishda qatnashmoqchiman, shuning uchun menssiz boshlamang." },
            { who: "Dilnoza", en: "No problem. I'll email you a summary of the action points on Thursday.", uz: "Muammo yo'q. Payshanba kuni harakat bandlarining qisqacha mazmunini emailga yuboraman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is Dilnoza NOT allowed to do?", opts: ["Approve the payment herself", "Call the supplier", "Email Karim", "Take part in the handover"], a: 0, why: "Karim: *you're not authorised to do that. You have to ask the finance director.*" } },
      ],
    },
  ],
  words: [
    { en: "delegate", uz: "(vazifani) topshirmoq", ipa: "ˈdel.ɪ.ɡeɪt", pos: "verb", ex: "A good manager knows how to delegate routine tasks.", exUz: "Yaxshi rahbar odatiy vazifalarni topshirishni biladi." },
    { en: "implement", uz: "amalda joriy qilmoq", ipa: "ˈɪm.plɪ.ment", pos: "verb", ex: "The new rules will be implemented in March.", exUz: "Yangi qoidalar martda joriy qilinadi." },
    { en: "confidential", uz: "maxfiy", ipa: "ˌkɒn.fɪˈden.ʃəl", pos: "adj", ex: "All patient records are strictly confidential.", exUz: "Barcha bemor yozuvlari qat'iy maxfiy." },
    { en: "overdue", uz: "muddati o'tgan", ipa: "ˌəʊ.vəˈdjuː", pos: "adj", ex: "The payment is two weeks overdue.", exUz: "To'lov ikki hafta kechikkan." },
    { en: "invoice", uz: "hisob-faktura", ipa: "ˈɪn.vɔɪs", pos: "noun", ex: "Please send the invoice to our finance department.", exUz: "Iltimos, hisob-fakturani moliya bo'limimizga yuboring." },
    { en: "appoint", uz: "tayinlamoq", ipa: "əˈpɔɪnt", pos: "verb", ex: "The company appointed a new sales director.", exUz: "Kompaniya yangi savdo direktorini tayinladi." },
    { en: "attendance", uz: "qatnashish, ishtirok", ipa: "əˈten.dəns", pos: "noun", ex: "Attendance at the training is mandatory.", exUz: "O'qishda qatnashish majburiy." },
    { en: "demonstrate", uz: "namoyish qilmoq, ko'rsatmoq", ipa: "ˈdem.ən.streɪt", pos: "verb", ex: "She demonstrated the new software to the staff.", exUz: "U xodimlarga yangi dasturni namoyish qildi." },
    { en: "contract", uz: "shartnoma", ipa: "ˈkɒn.trækt", pos: "noun", ex: "She signed a two-year contract with the firm.", exUz: "U firma bilan ikki yillik shartnoma imzoladi." },
    { en: "objective", uz: "maqsad, vazifa", ipa: "əbˈdʒek.tɪv", pos: "noun", ex: "Our main objective is to reduce costs.", exUz: "Asosiy maqsadimiz xarajatlarni kamaytirish." },
  ],
  practice: [
    { k: "choice", q: "The director agreed ___ the training budget.", opts: ["increasing", "to increase", "increase", "for increase"], a: 1, why: "**agree + to + fe'l**." },
    { k: "choice", q: "I'll never forget ___ my first presentation to the board.", opts: ["giving", "to give", "give", "to giving"], a: 0, why: "Bo'lgan voqea: **forget + -ing**." },
    { k: "listen", say: "We have decided to postpone the launch until next month.", opts: ["We have decided postponing the launch until next month.", "We have decided to postpone the launch until next month.", "We had decided to postpone the launch until last month.", "We have decided to bring forward the launch until next month."], a: 1, why: "**decide to postpone**." },
    { k: "fill", q: "The payment is ___; it should have been made last week. (o…)", a: ["overdue"], hint: "o…", uz: "To'lov muddati o'tgan; o'tgan hafta qilinishi kerak edi.", why: "**overdue** = muddati o'tgan." },
    { k: "fill", q: "You ___ come to the meeting; it's optional.", a: ["don't have to", "don't need to", "needn't", "need not"], uz: "Yig'ilishga kelishingiz shart emas; u ixtiyoriy.", why: "Shart emas: **don't have to / needn't**." },
    { k: "fill", q: "Last winter we ___ to work from home for two months.", a: ["had"], uz: "O'tgan qishda ikki oy uydan ishlashga majbur bo'ldik.", why: "**had to**." },
    { k: "order", uz: "Rahbarim menga hisobotni qayta yozishni buyurdi.", words: ["My", "manager", "asked", "me", "to", "rewrite", "the", "report."], extra: ["rewriting", "for"], why: "**ask + ob'ekt + to + fe'l**." },
    { k: "order", uz: "Ular muddatni bir hafta oldinga surdi.", words: ["They", "have", "brought", "the", "deadline", "forward", "by", "a", "week."], extra: ["bring", "on"], alt: [["They", "have", "brought", "forward", "the", "deadline", "by", "a", "week."]], why: "**bring forward** — separable." },
    { k: "translate", uz: "Bu ma'lumot maxfiy, shuning uchun uni hech kimga ko'rsatmasligingiz kerak.", a: ["This information is confidential, so you mustn't show it to anyone.", "This information is confidential, so you must not show it to anyone.", "The information is confidential, so you mustn't show it to anyone.", "The information is confidential, so you must not show it to anyone."], why: "Taqiq: **mustn't**." },
    { k: "translate", uz: "Rahbariyat yangi shartnoma bo'yicha muzokara olib bormoqda.", a: ["The management is negotiating a new contract.", "The management are negotiating a new contract.", "Management is negotiating a new contract.", "Management are negotiating a new contract."], why: "**negotiate** + ob'ekt." },
    { k: "fix", wrong: "We are considering to hire two more people.", a: ["We are considering hiring two more people."], hint: "consider + ?", why: "**consider + -ing**." },
    { k: "fix", wrong: "They put off it until Monday.", a: ["They put it off until Monday."], hint: "olmosh o'rni", why: "**put it off**." },
    { k: "match", pairs: [["delegate", "vazifani boshqaga topshirmoq"], ["implement", "amalga oshirmoq"], ["appoint", "tayinlamoq"], ["invoice", "hisob-faktura"], ["attendance", "qatnashish"]] },
    { k: "tf", q: "Tanish bo'lmagan kompaniyaga yozilgan rasmiy emailni **Cheers** bilan tugatish mumkin.", a: false, why: "Rasmiy xatda: **Yours faithfully / sincerely** yoki **Kind regards**." },
    { k: "dictation", say: "She demonstrated the new system to the staff.", uz: "U xodimlarga yangi tizimni namoyish qildi.", why: "**demonstrate** + ob'ekt + to + odam." },
    { k: "speak", say: "Our main objective is to implement the new system by March.", uz: "Asosiy maqsadimiz yangi tizimni martgacha joriy qilish." },
  ],
  quiz: [
    { k: "choice", q: "Employees ___ wear a uniform; the dress code has been dropped.", opts: ["mustn't", "don't have to", "have to", "are required to"], a: 1, why: "Kiyinish qoidasi bekor qilingan, shuning uchun shart emas." },
    { k: "choice", q: "Which sentence is the most formal?", opts: ["We'll sort it out soon.", "We shall resolve the matter promptly.", "We'll fix it ASAP.", "We'll get it done."], a: 1, why: "**shall resolve … promptly** — rasmiy; qolganlarida qisqartma va so'zlashuv iboralari bor." },
    { k: "choice", q: "Does anyone have an ___ to the new schedule?", opts: ["minutes", "consensus", "objection", "stakeholder"], a: 2, why: "**objection to** = e'tiroz." },
    { k: "choice", q: "I look forward to ___ you at the interview.", opts: ["to meet", "meet", "met", "meeting"], a: 3, why: "**look forward to + -ing**." },
    { k: "fill", q: "A good manager should ___ routine tasks to the team. (d…)", a: ["delegate"], hint: "d…", uz: "Yaxshi rahbar odatiy vazifalarni jamoaga topshirishi kerak.", why: "**delegate tasks**." },
    { k: "fill", q: "The new rules will be ___ from the first of March. (i…)", a: ["implemented"], hint: "i…", uz: "Yangi qoidalar martning birinchisidan joriy qilinadi.", why: "**be implemented** = joriy qilinadi." },
    { k: "order", uz: "Buni menga payshanbagacha yuborsangiz, minnatdor bo'lardim.", words: ["I", "would", "be", "grateful", "if", "you", "could", "send", "this", "to", "me", "by", "Thursday."], extra: ["will", "until"], why: "**would be grateful if you could…**" },
    { k: "translate", uz: "Yig'ilish bayonnomasini kim yozdi?", a: ["Who took the minutes of the meeting?", "Who wrote the minutes of the meeting?", "Who took the minutes?", "Who wrote the minutes?"], why: "**take the minutes** = bayonnoma yuritmoq." },
    { k: "fix", wrong: "The manager explained us the new rules.", a: ["The manager explained the new rules to us."], hint: "explain + ... + to us", why: "**explain something to someone**." },
    { k: "tf", q: "*I take your point, but I'm not sure it would work* — bu muloyim e'tiroz bildirish usuli.", a: true, why: "Avval tan oladi, keyin yumshoq e'tiroz." },
  ],
  summary: [
    "**Gerund / infinitive**: *decide, agree, manage + to*; *avoid, consider, suggest + -ing*; *persuade somebody to*; **predlogdan keyin -ing** (*look forward to meeting*).",
    "**Uslub**: rasmiy matnda qisqartma yo'q, passive, *obtain / purchase / postpone*; *I would be grateful if you could…*; murojaat va yakun mos (*Dear Mr… Yours sincerely*).",
    "**Phrasal verb**: separable'da olmosh o'rtada (*put it off*), uch qismli ajralmaydi (*put up with it*). **Modal**: *mustn't* (taqiq) ≠ *don't have to* (shart emas); o'tgan zamon *had to*.",
    "**Lug'at va yig'ilish**: *meet a deadline, run a business, hand in your notice; I take your point, Could you clarify…?, I suggest we…, If you could…, we would…*.",
    "Yangi so'zlar: **delegate, implement, confidential, overdue, invoice, appoint, attendance, demonstrate, contract, objective**.",
  ],
  homework: "Bosqichdagi 3 ta mavzuni tanlang va har biridan 4 ta gap yozing: (1) gerund/infinitive, (2) phrasal verb olmosh bilan, (3) majburiyat va taqiq. Keyin ularni bitta **rasmiy email** (80–100 so'z) ichiga joylang: hamkasbga yangi qoidalar haqida. Oxirida har bir gapning shaklini qoida bo'yicha tekshiring.",
};

export default lesson;
