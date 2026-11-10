import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l6",
  title: "Meetings and negotiating",
  titleUz: "Yig'ilish va muzokara: fikr bildirish, rozi bo'lish, taklif kiritish, kelishuvga erishish",
  goal: "Ish yig'ilishida va muzokarada ishonch bilan qatnashasiz: yig'ilishni ochasiz va **kun tartibi** (*agenda*) haqida gapirasiz, **fikr bildirasiz**, muloyimlik bilan **rozi bo'lasiz yoki e'tiroz bildirasiz**, so'zni **bo'lasiz**, **aniqlashtirishni so'raysiz**, **taklif** (*I suggest we…*) va **shartli taklif** (*If you could…, we would…*) kiritasiz, kelishuvga erishasiz va **harakat rejasini** (*action points*) umumlashtirasiz.",
  slides: [
    {
      title: "Yig'ilish bosqichlari va til",
      blocks: [
        { t: "p", md: "Yig'ilish va muzokara ma'lum tartibda boradi. Har bir bosqichning o'ziga xos **ifodalari** bor; ularni bilsangiz, hatto murakkab mavzuda ham ravon va muloyim gapirasiz. IELTS Speaking Part 3 va ish intervyularida ham shunga o'xshash tuzilish kerak." },
        {
          t: "table", head: ["Bosqich", "Ifoda"], speak: [1],
          rows: [
            ["Ochish", "Let's get started. The purpose of today's meeting is to…"],
            ["Kun tartibi", "First on the agenda is the budget. Then we'll move on to…"],
            ["Fikr bildirish", "In my opinion, we should…  As I see it,…"],
            ["Aniqlashtirish", "Could you clarify what you mean by…?"],
            ["Taklif", "I suggest we move the deadline. How about meeting on Friday?"],
            ["Kelishuv", "Can we agree on that? / Shall we say Thursday, then?"],
            ["Umumlashtirish", "To sum up, Ben will send the report and Sara will book the room."],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida yig'ilishda ko'pincha **buyruq shakli** ishlatiladi: *Hisobotni yuboring.* Inglizcha ish muloqotida esa **muloyim, yumshoq iboralar** (*Could you…, I was wondering if…, How about…*) tabiiy; ular qo'pol eshitilmaslik uchun kerak." },
        { t: "check", ex: { k: "choice", q: "Which phrase is used to interrupt politely?", opts: ["Shut up, please.", "Sorry to interrupt, but could I add something?", "Wait, I'm talking.", "That's wrong."], a: 1, why: "**Sorry to interrupt, but…** — muloyim bo'lish." } },
      ],
    },
    {
      title: "Fikr bildirish, rozi bo'lish va e'tiroz",
      blocks: [
        { t: "p", md: "B2 darajada fikringizni **bevosita** («You are wrong») emas, **yumshatib** aytasiz. Eng muhimi: avval **tan oling**, keyin **o'z fikringizni** qo'shing." },
        {
          t: "table", head: ["Maqsad", "Ifoda", "Kuch"], speak: [1],
          rows: [
            ["Fikr", "In my opinion, … / As I see it, … / I tend to think that…", "neytral"],
            ["To'liq rozilik", "I couldn't agree more. / Exactly. / That's a good point.", "kuchli"],
            ["Qisman rozilik", "I take your point, but… / I see where you're coming from, but…", "yumshoq e'tiroz"],
            ["E'tiroz", "I'm not sure I agree. / I'm afraid I see it differently.", "muloyim"],
            ["Aniq e'tiroz", "I have a slight objection to that.", "rasmiy"],
          ],
        },
        {
          t: "examples", items: [
            { en: "I take your point, but I'm not sure it would work in practice.", uz: "Fikringizni tushunaman, lekin amalda ishlashiga ishonchim komil emas." },
            { en: "As I see it, the main problem is the lack of staff.", uz: "Menimcha, asosiy muammo xodimlar yetishmasligi." },
            { en: "I couldn't agree more. That's exactly what we need.", uz: "Butunlay roziman. Aynan shu bizga kerak." },
          ],
        },
        { t: "tip", tone: "warn", md: "**I agree** — fe'l, **am agree** emas: *I agree with you.* *I'm agree* — o'zbekcha «roziman» ning so'zma-so'z tarjimasidan kelgan keng tarqalgan xato." },
        { t: "check", ex: { k: "tf", q: "*I'm not sure I agree* gapi yig'ilishda *You're wrong* ga qaraganda muloyimroq.", a: true, why: "Yumshatilgan e'tiroz hamkasbni xafa qilmaydi." } },
        { t: "check", ex: { k: "choice", q: "Which is the correct way to agree?", opts: ["I am agree with you.", "I agree to you.", "I agree with you.", "I'm agreeing you."], a: 2, why: "**agree with** + odam: *I agree with you*." } },
      ],
    },
    {
      title: "So'zni bo'lish va aniqlashtirish",
      blocks: [
        { t: "p", md: "So'zni bo'lish yoki tushunmaganingizni so'rash **odob bilan** bo'lishi kerak. Bu — ko'p o'quvchilarning zaif tomoni, chunki o'zbek tilida bu holatlar uchun kam rasmiy shakl bor." },
        {
          t: "table", head: ["Maqsad", "Ifoda"], speak: [1],
          rows: [
            ["So'zni bo'lish", "Sorry to interrupt, but… / Could I just come in here? / If I could just add something…"],
            ["Gapirishda davom etish", "Sorry, could I just finish my point?"],
            ["Aniqlashtirish", "Could you clarify what you mean by…? / Could you give an example?"],
            ["Tekshirish", "Just to check, are you saying that…? / So do you mean…?"],
            ["Takrorlashni so'rash", "I'm sorry, I didn't catch that. Could you go over that again?"],
          ],
        },
        { t: "p", md: "Yodda tuting: **explain** ob'ektli fe'l va **to** bilan odamga qaratiladi: *Could you explain the plan **to me**?* ~~explain me~~ — xato. **Clarify** ham ob'ekt oladi: *clarify the budget*." },
        { t: "check", ex: { k: "fill", q: "Could you ___ what you mean by \"soon\"? (c…)", a: ["clarify"], hint: "c…", uz: "«Tez orada» deganda nimani nazarda tutayotganingizni aniqlashtira olasizmi?", why: "Aniqlashtirishni so'rash: **clarify**." } },
        { t: "check", ex: { k: "choice", q: "A short written record of what was said and decided in a meeting is called the ___.", opts: ["agenda", "proposal", "minutes", "objection"], a: 2, why: "**minutes** = yig'ilish bayonnomasi. **Agenda** esa yig'ilishdan oldin tuziladigan mavzular ro'yxati." } },
      ],
    },
    {
      title: "Takliflar va shartli takliflar",
      blocks: [
        { t: "p", md: "**Taklif**ni turli qoliplar bilan aytish mumkin. Har bir qolipdan keyin **fe'l shakli** farq qiladi:" },
        {
          t: "table", head: ["Qolip", "Keyingi shakl", "Misol"], speak: [2],
          rows: [
            ["How about / What about", "+ -ing", "How about moving the meeting to Thursday?"],
            ["I suggest (that) we", "+ fe'l (to siz)", "I suggest we move the deadline."],
            ["Why don't we / Shall we", "+ fe'l", "Why don't we ask the client first?"],
            ["Let's", "+ fe'l", "Let's start with the budget."],
            ["I propose (that) we", "+ fe'l / -ing", "I propose that we split the project in two."],
          ],
        },
        { t: "p", md: "**Shartli taklif** muzokarada juda foydali: «Agar siz X qilsangiz, biz Y qilamiz.» Bu usul **o'zaro ustunlik** beradi va kelishuvni osonlashtiradi." },
        {
          t: "examples", items: [
            { en: "If you could increase the budget, we would meet the deadline.", uz: "Agar byudjetni oshira olsangiz, biz muddatga ulguramiz." },
            { en: "We could offer a discount, provided that you sign today.", uz: "Bugun imzolasangiz, chegirma berishimiz mumkin." },
            { en: "As long as the quality stays the same, we would be happy to continue.", uz: "Sifat o'zgarmasa, davom ettirishdan xursand bo'lamiz." },
          ],
        },
        { t: "tip", tone: "good", md: "Shartli taklifda **If + could / past, would** muloyim va ehtimoli past ohangni beradi: *If you could…, we would…*. **If you will** emas. **provided that / as long as / on condition that** — ko'proq rasmiy shartlar." },
        { t: "check", ex: { k: "fill", q: "How about ___ the meeting to Thursday? (move)", a: ["moving"], uz: "Yig'ilishni payshanbaga ko'chirsak-chi?", why: "**How about + -ing**." } },
        { t: "check", ex: { k: "choice", q: "Which sentence is a conditional proposal?", opts: ["If you could send the draft today, we would review it by Friday.", "Send the draft today.", "We sent the draft yesterday.", "Did you send the draft?"], a: 0, why: "**If you could…, we would…** — shartli taklif." } },
      ],
    },
    {
      title: "Kelishuv va harakat rejasi",
      blocks: [
        { t: "p", md: "Yig'ilishning **oxirgi bosqichi** eng muhim: nima kelishilgani va kim nima qilishini aniq aytish. Aks holda yig'ilish vaqt isrofiga aylanadi." },
        {
          t: "table", head: ["Maqsad", "Ifoda"], speak: [1],
          rows: [
            ["Kelishuvni tekshirish", "So, can we agree on that? / Is everyone happy with that?"],
            ["Kelishuvni qayd etish", "Right, so we have agreed to postpone the launch until March."],
            ["Vazifa taqsimlash", "Ben will send the report by Friday. Sara is going to book the room."],
            ["Umumlashtirish", "To sum up, … / Let me just summarise the action points."],
            ["Yopish", "Thank you, everyone. The meeting is adjourned. / Let's call it a day."],
          ],
        },
        { t: "p", md: "**Action point** (harakat bandi) — qisqa gap: **kim + will + nima + qachon**. *Ben will send the report by Friday.* Bunda **by** (muddatga qadar) va **will** (va'da) ishlatiladi." },
        { t: "check", ex: { k: "order", uz: "Sara hisobotni juma kunigacha yuboradi.", words: ["Sara", "will", "send", "the", "report", "by", "Friday."], extra: ["until", "is"], why: "Action point: **kim + will + fe'l + by + muddat**." } },
        { t: "check", ex: { k: "choice", q: "After a long discussion, everybody agreed. We reached a ___.", opts: ["minutes", "consensus", "objection", "stakeholder"], a: 1, why: "**consensus** = umumiy kelishuv." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "Yig'ilish tilida ham asosiy xatolar o'zbek tilining ta'siridan: *roziman, taklif qilaman, tushuntirib bering, boshlaylik* iboralarining so'zma-so'z tarjimasi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I agree with you.", "I suggest moving the deadline.", "Could you explain the plan to me?", "Let's start with the first point."] },
          bad: { title: "Xato", items: ["I am agree with you.", "I suggest to move the deadline.", "Could you explain me the plan?", "Let's to start with the first point."] },
        },
        { t: "p", md: "**1.** *agree* — fe'l, *am* kerak emas. **2.** *suggest* dan keyin **-ing** yoki **we + fe'l**. **3.** *explain* — odamga **to me** bilan. **4.** *Let's* dan keyin **to siz** fe'l." },
        { t: "check", ex: { k: "fix", wrong: "I am agree with your proposal.", a: ["I agree with your proposal."], hint: "agree — fe'l", why: "**agree** — fe'l, *be* kerak emas." } },
        { t: "check", ex: { k: "fix", wrong: "I suggest to move the deadline.", a: ["I suggest moving the deadline.", "I suggest we move the deadline.", "I suggest that we move the deadline."], hint: "suggest + ?", why: "**suggest + -ing** yoki **suggest (that) we + fe'l**." } },
        { t: "check", ex: { k: "fix", wrong: "Could you explain me the plan?", a: ["Could you explain the plan to me?"], hint: "explain + ob'ekt + to me", why: "**explain something to someone**." } },
        { t: "check", ex: { k: "fix", wrong: "Let's to start with the first point.", a: ["Let's start with the first point."], hint: "Let's + ?", why: "**Let's + fe'l (to siz)**." } },
      ],
    },
    {
      title: "O'qing: Haftalik yig'ilish",
      blocks: [
        {
          t: "text", title: "Notes from our team meeting", voice: "george",
          en: "Yesterday I chaired our weekly team meeting. I opened it by reminding everyone of the agenda: the new project, the budget and the holiday rota. Sara put forward a proposal to start the project in March instead of February. Leo said he took her point but he was concerned about the stakeholders, who had expected an earlier start. We listened to several constructive comments, and nobody had a serious objection, so we reached a consensus: the project will begin in March, provided that the first report is ready in February. I asked Leo to clarify the timetable, and he promised to send it by Friday. Then I summarised the action points and adjourned the meeting. Someone took the minutes, and Sara will email them to everyone this afternoon.",
          uz: "Kecha men haftalik jamoa yig'ilishiga raislik qildim. Uni hammaga kun tartibini eslatish bilan ochdim: yangi loyiha, byudjet va ta'til jadvali. Sara loyihani fevralda emas, martda boshlash taklifini kiritdi. Leo uning fikrini tushunganini, lekin ertaroq boshlashni kutgan manfaatdor tomonlar haqida xavotirda ekanini aytdi. Biz bir nechta konstruktiv fikrlarni tingladik va hech kimning jiddiy e'tirozi bo'lmadi, shuning uchun kelishuvga erishdik: loyiha martda boshlanadi, agar birinchi hisobot fevralda tayyor bo'lsa. Men Leodan jadvalni aniqlashtirishni so'radim va u uni juma kunigacha yuborishga va'da berdi. Keyin harakat bandlarini umumlashtirdim va yig'ilishni yopdim. Kimdir bayonnoma yozdi va Sara uni bugun tushdan keyin hammaga elektron pochta orqali yuboradi.",
        },
        { t: "check", ex: { k: "tf", q: "The team decided to start the project in February.", a: false, why: "Qaror: loyiha **martda** boshlanadi (shart bilan: hisobot fevralda tayyor bo'lsa)." } },
        { t: "check", ex: { k: "choice", q: "What will Sara do this afternoon?", opts: ["Email the minutes to everyone", "Send the timetable", "Chair the next meeting", "Cancel the project"], a: 0, why: "*Sara will email them to everyone this afternoon.* (them = the minutes)" } },
      ],
    },
    {
      title: "Dialog: Muddatni kelishish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Leo", en: "Grace, thanks for joining. Shall we start with the delivery date?", uz: "Grace, qo'shilganingiz uchun rahmat. Yetkazib berish sanasidan boshlaymizmi?" },
            { who: "Grace", en: "Yes. I'm afraid we can't deliver by the first of June. We need two more weeks.", uz: "Ha. Afsuski, iyunning birinchisigacha yetkaza olmaymiz. Yana ikki hafta kerak." },
            { who: "Leo", en: "I see where you're coming from, but our customers expect it by then. Could you clarify what is causing the delay?", uz: "Nima demoqchi ekaningizni tushunaman, lekin mijozlarimiz o'sha vaqtgacha kutishyapti. Kechikish sababini aniqlashtira olasizmi?" },
            { who: "Grace", en: "A supplier is behind schedule. If you could pay for faster shipping, we would meet your deadline.", uz: "Ta'minotchi jadvaldan orqada qolgan. Tezroq yetkazib berish uchun to'lasangiz, muddatingizga ulguramiz." },
            { who: "Leo", en: "That's a fair proposal, provided that the extra cost is reasonable.", uz: "Bu adolatli taklif, agar qo'shimcha xarajat o'rtacha bo'lsa." },
            { who: "Grace", en: "I suggest we split it: we pay half and you pay half.", uz: "Taklifim: bo'lib olaylik, yarmini biz, yarmini siz to'laymiz." },
            { who: "Leo", en: "I can live with that. So, can we agree on delivery by the fifth, with shared shipping costs?", uz: "Bunga roziman. Unda beshinchisigacha yetkazib berish va yetkazish xarajatini bo'lishish bo'yicha kelishamizmi?" },
            { who: "Grace", en: "Agreed. I'll send you the confirmation today.", uz: "Kelishdik. Tasdiqlovchi xatni bugun yuboraman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What do Leo and Grace finally agree on?", opts: ["Delivery by the fifth with shared shipping costs", "Delivery by the first of June", "The customer pays all costs", "They cancel the order"], a: 0, why: "Oxirida: *delivery by the fifth, with shared shipping costs*. Grace roziligini bildiradi." } },
      ],
    },
  ],
  words: [
    { en: "minutes", uz: "yig'ilish bayonnomasi", ipa: "ˈmɪn.ɪts", pos: "noun", ex: "Sara will take the minutes of the meeting.", exUz: "Sara yig'ilish bayonnomasini yuritadi." },
    { en: "proposal", uz: "taklif, loyiha", ipa: "prəˈpəʊ.zəl", pos: "noun", ex: "The board approved the proposal to open a new branch.", exUz: "Kengash yangi filial ochish taklifini ma'qulladi." },
    { en: "consensus", uz: "umumiy kelishuv", ipa: "kənˈsen.səs", pos: "noun", ex: "After a long discussion we reached a consensus.", exUz: "Uzoq muhokamadan keyin umumiy kelishuvga erishdik." },
    { en: "clarify", uz: "aniqlashtirmoq", ipa: "ˈklær.ɪ.faɪ", pos: "verb", ex: "Could you clarify what you mean by \"soon\"?", exUz: "«Tez orada» deganda nimani nazarda tutayotganingizni aniqlashtira olasizmi?" },
    { en: "stakeholder", uz: "manfaatdor tomon", ipa: "ˈsteɪkˌhəʊl.də", pos: "noun", ex: "All the stakeholders were invited to the meeting.", exUz: "Barcha manfaatdor tomonlar yig'ilishga taklif qilindi." },
    { en: "action point", uz: "harakat bandi, bajariladigan vazifa", ipa: "ˈæk.ʃən pɔɪnt", pos: "noun", ex: "The meeting ended with three action points.", exUz: "Yig'ilish uchta bajariladigan vazifa bilan yakunlandi." },
    { en: "constructive", uz: "konstruktiv, foydali", ipa: "kənˈstrʌk.tɪv", pos: "adj", ex: "Thank you for your constructive feedback.", exUz: "Foydali fikr-mulohazangiz uchun rahmat." },
    { en: "objection", uz: "e'tiroz", ipa: "əbˈdʒek.ʃən", pos: "noun", ex: "Does anyone have an objection to the new schedule?", exUz: "Yangi jadvalga e'tirozi bor kishi bormi?" },
    { en: "adjourn", uz: "(yig'ilishni) to'xtatmoq, keyinga qoldirmoq", ipa: "əˈdʒɜːn", pos: "verb", ex: "The chair adjourned the meeting until Monday.", exUz: "Raislik qiluvchi yig'ilishni dushanbagacha to'xtatdi." },
    { en: "put forward", uz: "(taklifni) ilgari surmoq", ipa: "ˌpʊt ˈfɔː.wəd", pos: "phrasal verb", ex: "She put forward a proposal to cut costs.", exUz: "U xarajatlarni qisqartirish taklifini ilgari surdi." },
  ],
  practice: [
    { k: "choice", q: "Qaysi ibora so'zni **muloyim bo'lish** uchun ishlatiladi?", opts: ["Sorry to interrupt, but could I add something?", "Shut up, I'm talking.", "That's not right.", "Wait."], a: 0, why: "**Sorry to interrupt, but…** — muloyim." },
    { k: "choice", q: "The ___ of the meeting were sent to everyone by email.", opts: ["agenda", "proposal", "minutes", "objection"], a: 2, why: "**minutes** = bayonnoma; yig'ilishdan keyin yuboriladi." },
    { k: "listen", say: "I take your point, but I'm not sure it would work in practice.", opts: ["I take your point, but I'm sure it would work in practice.", "I take your point, but I'm not sure it would work in practice.", "I took your point, but I'm not sure it works in practice.", "I take your point, so I'm not sure it would work."], a: 1, why: "**I take your point, but…** — qisman rozilik." },
    { k: "fill", q: "I suggest we ___ the deadline until Friday. (move)", a: ["move"], uz: "Muddatni jumagacha ko'chirishni taklif qilaman.", why: "**suggest (that) we + fe'l (to siz)**." },
    { k: "fill", q: "How about ___ the meeting to Thursday? (move)", a: ["moving"], uz: "Yig'ilishni payshanbaga ko'chirsak-chi?", why: "**How about + -ing**." },
    { k: "fill", q: "Could you ___ what you mean by \"soon\"? (c…)", a: ["clarify"], hint: "c…", uz: "«Tez orada» ni aniqlashtira olasizmi?", why: "**clarify** = aniqlashtirmoq." },
    { k: "order", uz: "Men taklif qilamanki, ishga tushirishni martgacha kechiktiraylik.", words: ["I", "suggest", "that", "we", "postpone", "the", "launch", "until", "March."], extra: ["to", "postponing"], alt: [["I", "suggest", "we", "postpone", "the", "launch", "until", "March."]], why: "**suggest (that) we + fe'l**." },
    { k: "order", uz: "Agar byudjetni oshira olsangiz, biz muddatga ulguramiz.", words: ["If", "you", "could", "increase", "the", "budget,", "we", "would", "meet", "the", "deadline."], extra: ["will", "increased"], why: "**If you could…, we would…** — shartli taklif." },
    { k: "translate", uz: "Men sizning fikringizni tushunaman, lekin rozi emasman.", a: ["I take your point, but I don't agree.", "I see your point, but I don't agree.", "I understand your point, but I don't agree.", "I take your point, but I disagree.", "I see your point, but I disagree.", "I understand your point, but I disagree."], why: "Yumshoq e'tiroz: **I take your point, but…**." },
    { k: "translate", uz: "Bu masalani keyingi yig'ilishda muhokama qilaylik.", a: ["Let's discuss this at the next meeting.", "Let's discuss this issue at the next meeting.", "Let's discuss it at the next meeting.", "Let's discuss the issue at the next meeting.", "Let's talk about this at the next meeting."], why: "**Let's + fe'l**; *discuss* ob'ektli fe'l." },
    { k: "fix", wrong: "I suggest to move the deadline.", a: ["I suggest moving the deadline.", "I suggest we move the deadline.", "I suggest that we move the deadline."], hint: "suggest + ?", why: "**suggest + -ing** yoki **we + fe'l**." },
    { k: "fix", wrong: "Could you explain me the plan?", a: ["Could you explain the plan to me?"], hint: "explain + ob'ekt + to me", why: "**explain something to someone**." },
    { k: "match", pairs: [["minutes", "yig'ilish bayonnomasi"], ["consensus", "umumiy kelishuv"], ["stakeholder", "manfaatdor tomon"], ["adjourn", "yig'ilishni keyinga qoldirmoq"], ["objection", "e'tiroz"]] },
    { k: "tf", q: "*I'm not sure I agree* iborasi yig'ilishda *You're wrong* ga qaraganda muloyimroq.", a: true, why: "Yumshatilgan e'tiroz muloyim." },
    { k: "dictation", say: "Could you clarify what you mean by that?", uz: "Shu bilan nimani nazarda tutayotganingizni aniqlashtira olasizmi?", why: "**clarify** + ob'ekt." },
    { k: "speak", say: "I take your point, but could we look at the figures again?", uz: "Fikringizni tushunaman, lekin raqamlarni yana bir bor ko'rib chiqsak bo'ladimi?" },
  ],
  quiz: [
    { k: "choice", q: "Which sentence is a conditional proposal?", opts: ["Send the draft today.", "If you could send the draft today, we would review it by Friday.", "We sent the draft yesterday.", "Did you send the draft?"], a: 1, why: "**If you could…, we would…** — shartli taklif." },
    { k: "choice", q: "After a long discussion everybody agreed. We reached a ___.", opts: ["minutes", "consensus", "objection", "stakeholder"], a: 1, why: "**consensus** = umumiy kelishuv." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I am agree with you.", "I agree to you.", "I agree with you.", "I'm agreeing you."], a: 2, why: "**agree with** + odam." },
    { k: "choice", q: "The chair ___ the meeting until Monday because there wasn't enough time.", opts: ["clarified", "adjourned", "negotiated", "proposed"], a: 1, why: "**adjourn** = yig'ilishni keyinga qoldirmoq." },
    { k: "fill", q: "Thank you, that was a very ___ comment; it will help us improve. (c…)", a: ["constructive"], hint: "c…", uz: "Bu juda foydali fikr, yaxshilanishimizga yordam beradi.", why: "**constructive** = foydali, konstruktiv." },
    { k: "fill", q: "Sorry to ___, but could I add something? (i…)", a: ["interrupt"], hint: "i…", uz: "So'zingizni bo'lganim uchun uzr, lekin qo'shimcha qilsam bo'ladimi?", why: "**Sorry to interrupt, but…**" },
    { k: "order", uz: "Ben hisobotni payshanbagacha yuboradi.", words: ["Ben", "will", "send", "the", "report", "by", "Thursday."], extra: ["until", "sends"], why: "Action point: **kim + will + fe'l + by + muddat**." },
    { k: "translate", uz: "Men yig'ilishni dushanbaga ko'chirishni taklif qilaman.", a: ["I suggest we move the meeting to Monday.", "I suggest that we move the meeting to Monday.", "I suggest moving the meeting to Monday.", "I propose moving the meeting to Monday.", "I propose that we move the meeting to Monday."], why: "**suggest / propose**." },
    { k: "fix", wrong: "Let's to start with the first point.", a: ["Let's start with the first point."], hint: "Let's + ?", why: "**Let's + fe'l (to siz)**." },
    { k: "tf", q: "*Just to check, are you saying we should cancel the launch?* — bu aniqlashtirish so'rash usuli.", a: true, why: "**Just to check, are you saying…?** — tushunganingizni tekshirish." },
  ],
  summary: [
    "Yig'ilish bosqichlari: **ochish, kun tartibi, fikr, aniqlashtirish, taklif, kelishuv, umumlashtirish**; har birining tayyor iboralari bor.",
    "Fikr va e'tiroz **yumshatiladi**: *I take your point, but… / I'm not sure I agree / As I see it…*. **I agree with you**, ~~I am agree~~.",
    "So'zni bo'lish: *Sorry to interrupt, but…*. Aniqlash: *Could you clarify…? Just to check, are you saying…?* **Explain something to someone**.",
    "Taklif: **How about + -ing**, **I suggest (that) we + fe'l**, **Let's + fe'l**; shartli: **If you could…, we would…**, *provided that, as long as*.",
    "Yakun: **kim + will + nima + by qachon** (*action point*). So'zlar: **minutes, proposal, consensus, stakeholder, objection, adjourn**.",
  ],
  homework: "Ikki kishi o'rtasidagi 10–12 qatorli yig'ilish dialogini yozing (masalan, loyiha muddatini kelishish). Unda: ochish, bitta fikr, bitta qisman e'tiroz (*I take your point, but…*), bitta aniqlashtirish, bitta shartli taklif (*If you could…, we would…*) va oxirida **3 ta action point** bo'lsin. Keyin uni ovoz chiqarib ayting.",
};

export default lesson;
