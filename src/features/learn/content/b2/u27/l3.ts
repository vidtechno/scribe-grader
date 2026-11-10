import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u27-l3",
  title: "Phrasal verbs at work",
  titleUz: "Phrasal verbs ish va biznesda: separable, inseparable, three-part",
  goal: "Ish joyida eng ko'p uchraydigan **phrasal verb**larni to'g'ri ishlatasiz: **separable** (*turn it down*), **inseparable** (*look into it*) va **three-part** (*put up with, come up with, get on with*) turlarini farqlaysiz, **olmosh o'rni** qoidasini bilasiz, 10 ta yangi ish phrasal verb'ini (*take on, follow up, step down, draw up*) gapda qo'llaysiz va ularni rasmiy fe'llar bilan almashtira olasiz.",
  slides: [
    {
      title: "Phrasal verb turlari",
      blocks: [
        { t: "p", md: "**Phrasal verb** = fe'l + **particle** (*up, down, on, off, out, through…*). Ma'nosi ko'pincha so'zlarning yig'indisidan chiqmaydi: *take on* = «olmoq» emas, **«ishga olmoq, zimmasiga olmoq»**. Ish joyida ular juda ko'p: yig'ilishlarda, telefonda va xatlarda." },
        { t: "p", md: "To'rtta tur bor. Tur **gap tuzilishini** belgilaydi:" },
        {
          t: "table", head: ["Tur", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Intransitive (ob'ektsiz)", "ob'ekt yo'q", "The deal fell through. / He stepped down."],
            ["Separable (ajraladigan)", "ob'ekt o'rtada yoki oxirida", "She turned the offer down. / She turned down the offer."],
            ["Inseparable (ajralmaydigan)", "ob'ekt doim particle'dan keyin", "We are looking into the problem."],
            ["Three-part (uch qismli)", "fe'l + 2 particle, ajralmaydi", "I can't put up with the noise."],
          ],
        },
        { t: "tip", tone: "info", md: "Lug'atda phrasal verb'ni **butun holda** yodlang: *put up with*, faqat *put* emas. Qaysi turligini misol gapdan eslab qoling." },
        { t: "check", ex: { k: "choice", q: "Qaysi turdagi phrasal verb: *We are looking into the problem*?", opts: ["Inseparable", "Separable", "Intransitive", "Gap emas"], a: 0, why: "**look into** — ob'ekt particle'dan keyin: *look into the problem*. Ajratib bo'lmaydi." } },
      ],
    },
    {
      title: "Separable va olmosh qoidasi",
      blocks: [
        { t: "p", md: "**Separable** phrasal verb'larda ob'ekt **ot** bo'lsa, particle'dan oldin ham, keyin ham turishi mumkin. Lekin ob'ekt **olmosh** (*it, them, him, her, us, me*) bo'lsa, u **faqat o'rtada** turadi." },
        {
          t: "table", head: ["Ob'ekt", "Variantlar"], speak: [1],
          rows: [
            ["Ot", "They called off the meeting. = They called the meeting off."],
            ["Olmosh", "They called it off. (✗ They called off it.)"],
            ["Uzun ob'ekt", "They called off the meeting that we had planned for Friday. (uzun ob'ekt odatda particle'dan keyin)"],
          ],
        },
        {
          t: "examples", items: [
            { en: "We turned the offer down because the salary was too low.", uz: "Maosh juda past bo'lgani uchun taklifni rad etdik." },
            { en: "The lawyers are drawing up a new contract.", uz: "Advokatlar yangi shartnoma tayyorlayapti." },
            { en: "We've brought the meeting forward to Tuesday. Can you make it?", uz: "Yig'ilishni seshanbaga ko'chirdik. Kela olasizmi?" },
            { en: "The company took on fifty new employees. / They took them on in June.", uz: "Kompaniya ellikta yangi xodimni ishga oldi. / Ularni iyunda ishga oldi." },
          ],
        },
        { t: "tip", tone: "warn", md: "O'zbek tilida ob'ekt har doim fe'ldan oldin turadi, shuning uchun inglizcha **olmosh o'rni** qoidasini o'rganish qiyin emas, lekin unutish oson: **It / them** ni *fe'l va particle orasiga* qo'ying." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She turned it down.", "She turned down it.", "She turned down of it.", "She turned to down it."], a: 0, why: "Olmosh (*it*) separable phrasal verb'da **fe'l va particle orasiga** qo'yiladi." } },
        { t: "check", ex: { k: "tf", q: "*They called the meeting off* va *They called off the meeting* ikkalasi to'g'ri.", a: true, why: "Ob'ekt **ot** bo'lsa, ikkala tartib mumkin." } },
      ],
    },
    {
      title: "Inseparable va uch qismli",
      blocks: [
        { t: "p", md: "**Inseparable** phrasal verb'larda ob'ekt har doim **particle'dan keyin** keladi, hatto olmosh bo'lsa ham: *look into it, deal with them*. **Uch qismli** (*three-part*) verb'lar ham ajralmaydi: ob'ekt oxirida." },
        {
          t: "table", head: ["Phrasal verb", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["look into", "tekshirmoq, o'rganmoq", "We'll look into the complaint."],
            ["deal with", "bilan shug'ullanmoq", "She deals with difficult customers."],
            ["go over", "qayta ko'rib chiqmoq", "Let's go over the figures again."],
            ["put up with", "chidamoq", "I can't put up with the delays."],
            ["get on with", "davom ettirmoq; chiqishmoq", "Let's get on with the agenda."],
            ["come up with", "o'ylab topmoq", "She came up with a great idea."],
            ["cut back on", "qisqartirmoq", "We must cut back on spending."],
            ["follow up on", "yana murojaat qilmoq, davom ettirmoq", "I'll follow up on that email."],
          ],
        },
        { t: "tip", tone: "good", md: "**Formal almashtirish:** *look into* → **investigate**, *come up with* → **devise**, *cut back on* → **reduce**, *turn down* → **reject**, *call off* → **cancel**, *carry out* → **conduct**. Rasmiy xatda bitta fe'lni, hamkasblar bilan gaplashganda phrasal verb'ni tanlang." },
        { t: "check", ex: { k: "fill", q: "I can't put up ___ the noise in this open-plan office.", a: ["with"], uz: "Bu ochiq ofisdagi shovqinga chidab bo'lmaydi.", why: "**put up with** — uch qismli: *with* kerak." } },
        { t: "check", ex: { k: "fill", q: "We need to come up ___ a better plan before Friday.", a: ["with"], uz: "Juma kunigacha yaxshiroq reja o'ylab topishimiz kerak.", why: "**come up with** + ot." } },
      ],
    },
    {
      title: "Ish uchun 10 ta phrasal verb",
      blocks: [
        { t: "p", md: "Quyidagi fe'llar yangi leksika bo'limida ham bor. Ularni **misol gap** bilan o'rganing." },
        {
          t: "table", head: ["Phrasal verb", "Tur", "Misol"], speak: [2],
          rows: [
            ["take on", "separable", "We need to take on two more developers."],
            ["follow up", "intransitive / on", "I'll follow up with the client tomorrow."],
            ["step down", "intransitive", "The chairman will step down at the end of the year."],
            ["draw up", "separable", "They drew up a plan for the new department."],
            ["bring forward", "separable", "We brought the deadline forward by a week."],
            ["hold up", "separable", "A strike held up the delivery."],
            ["fall through", "intransitive", "The deal fell through at the last minute."],
            ["cut back on", "three-part", "The firm cut back on travel."],
            ["put up with", "three-part", "I won't put up with rude behaviour."],
            ["get on with", "three-part", "Let's get on with the work."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "The deal ___ at the last minute, so we lost the client.", opts: ["fell through", "fell out", "fell down", "fell on"], a: 0, why: "**fall through** = amalga oshmay qolmoq (kelishuv, reja)." } },
        { t: "check", ex: { k: "choice", q: "*The chairman is stepping down next month* nimani anglatadi?", opts: ["He is leaving his post", "He is walking downstairs", "He is getting a promotion", "He is starting a new job"], a: 0, why: "**step down** = lavozimdan ketmoq (iste'foga chiqmoq)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida bunday particle'lar yo'q, shuning uchun o'quvchilar uni **tushirib qoldiradi** yoki **olmoshni noto'g'ri joyga** qo'yadi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She turned it down.", "We need to look into the problem.", "They called it off.", "We need to come up with an idea."] },
          bad: { title: "Xato", items: ["She turned down it.", "We need to look the problem into.", "They called off it.", "We need to come up an idea."] },
        },
        { t: "p", md: "**1.** Olmosh separable verb'da **o'rtada**. **2.** *look into* ajralmaydi: ob'ekt keyin. **3.** *call off it* — xato, **call it off**. **4.** *come up with* da **with** ni tushirmang." },
        { t: "check", ex: { k: "fix", wrong: "She turned down it because the salary was low.", a: ["She turned it down because the salary was low."], hint: "olmosh o'rni", why: "**turn it down**: olmosh o'rtada." } },
        { t: "check", ex: { k: "fix", wrong: "We need to look the problem into.", a: ["We need to look into the problem."], hint: "look into — ajralmaydi", why: "**look into** — inseparable." } },
        { t: "check", ex: { k: "fix", wrong: "They called off it because of the weather.", a: ["They called it off because of the weather."], hint: "olmosh o'rni", why: "**call it off** — olmosh o'rtada." } },
        { t: "check", ex: { k: "fix", wrong: "We need to come up an idea before Friday.", a: ["We need to come up with an idea before Friday."], hint: "particle yetishmayapti", why: "**come up with** — uch qismli, **with** shart." } },
      ],
    },
    {
      title: "O'qing: Yangi ish, yangi so'zlar",
      blocks: [
        {
          t: "text", title: "My first month at a start-up", voice: "emma",
          en: "I joined a small start-up last month, and my colleagues speak in phrasal verbs all day. On the first morning my manager said, \"We've taken on three people this year, so we need to get on with the onboarding.\" Later she told me that the company had to cut back on costs after an investment deal fell through. At first I couldn't put up with the noisy open-plan office, but I'm getting used to it. Yesterday the director stepped down, and the board brought the next meeting forward to discuss his replacement. My task is to follow up with customers who have not replied. I also have to come up with ideas for the website, and a lawyer is drawing up the new contract for our suppliers. It is busy, but I'm learning a great deal.",
          uz: "Men o'tgan oy kichik start-upga ishga kirdim va hamkasblarim kun bo'yi phrasal verb'lar bilan gaplashadi. Birinchi ertalab rahbarim: «Bu yil uch kishini ishga oldik, shuning uchun moslashuv jarayonini davom ettirishimiz kerak», dedi. Keyinroq u investitsiya kelishuvi amalga oshmagach, kompaniya xarajatlarni qisqartirishga majbur bo'lganini aytdi. Avvaliga shovqinli ochiq ofisga chidab turolmasdim, lekin o'rganib qolyapman. Kecha direktor lavozimidan ketdi va kengash uning o'rniga kim kelishini muhokama qilish uchun keyingi yig'ilishni oldinga surdi. Mening vazifam javob bermagan mijozlar bilan aloqaga chiqish. Shuningdek, veb-sayt uchun g'oyalar o'ylab topishim kerak, ta'minotchilarimiz uchun esa yangi shartnomani advokat tayyorlayapti. Ish ko'p, lekin ko'p narsa o'rganyapman.",
        },
        { t: "check", ex: { k: "tf", q: "The company cut back on costs because an investment deal fell through.", a: true, why: "Matnda: *had to cut back on costs after an investment deal fell through*." } },
        { t: "check", ex: { k: "choice", q: "What is the writer's task at the start-up?", opts: ["To follow up with customers who have not replied", "To draw up contracts", "To step down as director", "To take on new staff"], a: 0, why: "*My task is to follow up with customers who have not replied.*" } },
      ],
    },
    {
      title: "Dialog: Rejalar o'zgardi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "Ben, have you heard? The product launch has been held up.", uz: "Ben, eshitdingmi? Mahsulotni taqdim etish kechiktirildi." },
            { who: "Ben", en: "Again? What happened this time?", uz: "Yana-ya? Bu safar nima bo'ldi?" },
            { who: "Sara", en: "The supplier turned down our last offer, so the deal fell through.", uz: "Ta'minotchi bizning oxirgi taklifimizni rad etdi, kelishuv amalga oshmadi." },
            { who: "Ben", en: "Can't we take on another supplier?", uz: "Boshqa ta'minotchini topa olmaymizmi?" },
            { who: "Sara", en: "We're looking into it. Mr Cole wants us to come up with a new plan by Thursday.", uz: "Buni o'rganyapmiz. Mr Cole payshanbagacha yangi reja o'ylab topishimizni xohlayapti." },
            { who: "Ben", en: "Then I'll bring the team meeting forward to tomorrow morning.", uz: "Unda jamoa yig'ilishini ertaga ertalabga olib kelaman." },
            { who: "Sara", en: "Good idea. We can't put up with more delays.", uz: "Yaxshi fikr. Yana kechikishlarga chidab bo'lmaydi." },
            { who: "Ben", en: "Agreed. Let's get on with it.", uz: "Kelishdik. Ishni davom ettiramiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why was the product launch held up?", opts: ["The supplier turned down the offer.", "The director stepped down.", "The meeting was called off.", "Ben took on a new job."], a: 0, why: "Sara: *The supplier turned down our last offer, so the deal fell through.*" } },
      ],
    },
  ],
  words: [
    { en: "take on", uz: "ishga olmoq; zimmasiga olmoq", ipa: "teɪk ɒn", pos: "phrasal verb", ex: "We need to take on two more developers.", exUz: "Yana ikkita dasturchi ishga olishimiz kerak." },
    { en: "follow up", uz: "yana murojaat qilmoq, davom ettirmoq", ipa: "ˌfɒl.əʊ ˈʌp", pos: "phrasal verb", ex: "I'll follow up with the client tomorrow.", exUz: "Ertaga mijoz bilan yana bog'lanaman." },
    { en: "put up with", uz: "chidamoq, toqat qilmoq", ipa: "ˌpʊt ˈʌp wɪð", pos: "phrasal verb", ex: "I can't put up with the noise in the open-plan office.", exUz: "Ochiq ofisdagi shovqinga chidab bo'lmaydi." },
    { en: "get on with", uz: "ishni davom ettirmoq; til topishmoq", ipa: "ˌɡet ˈɒn wɪð", pos: "phrasal verb", ex: "Let's get on with the agenda.", exUz: "Kun tartibini davom ettiraylik." },
    { en: "step down", uz: "lavozimdan ketmoq", ipa: "ˌstep ˈdaʊn", pos: "phrasal verb", ex: "The chairman will step down at the end of the year.", exUz: "Raisi yil oxirida lavozimdan ketadi." },
    { en: "cut back on", uz: "qisqartirmoq (xarajatni)", ipa: "ˌkʌt ˈbæk ɒn", pos: "phrasal verb", ex: "The firm has had to cut back on travel.", exUz: "Firma safarlarni qisqartirishga majbur bo'ldi." },
    { en: "draw up", uz: "tuzmoq, tayyorlamoq (hujjat)", ipa: "ˌdrɔː ˈʌp", pos: "phrasal verb", ex: "The lawyers are drawing up a new contract.", exUz: "Advokatlar yangi shartnoma tayyorlayapti." },
    { en: "bring forward", uz: "oldinga surmoq, erta qilmoq", ipa: "ˌbrɪŋ ˈfɔː.wəd", pos: "phrasal verb", ex: "We have brought the meeting forward to Tuesday.", exUz: "Yig'ilishni seshanbaga oldinga surdik." },
    { en: "hold up", uz: "kechiktirmoq, to'xtatib turmoq", ipa: "ˌhəʊld ˈʌp", pos: "phrasal verb", ex: "A strike held up the delivery.", exUz: "Ish tashlash yetkazib berishni kechiktirdi." },
    { en: "fall through", uz: "amalga oshmay qolmoq", ipa: "ˌfɔːl ˈθruː", pos: "phrasal verb", ex: "The deal fell through at the last minute.", exUz: "Kelishuv oxirgi daqiqada amalga oshmay qoldi." },
  ],
  practice: [
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She turned down it.", "She turned it down.", "She turned down of it.", "She turned to down it."], a: 1, why: "Olmosh separable phrasal verb'ning **o'rtasida**." },
    { k: "choice", q: "The deal ___ at the last minute, so we lost the client.", opts: ["fell out", "fell down", "fell through", "fell on"], a: 2, why: "**fall through** = amalga oshmasdan qolmoq." },
    { k: "listen", say: "We have brought the meeting forward to Tuesday.", opts: ["We have brought the meeting back to Tuesday.", "We have brought the meeting forward to Tuesday.", "We have brought the meeting forward to Thursday.", "We have bought the meeting forward to Tuesday."], a: 1, why: "**bring forward** = oldinga surmoq." },
    { k: "fill", q: "I can't put up ___ the noise in this office.", a: ["with"], uz: "Bu ofisdagi shovqinga chidolmayman.", why: "**put up with** (uch qismli)." },
    { k: "fill", q: "We need to come up ___ a better plan.", a: ["with"], uz: "Yaxshiroq reja o'ylab topishimiz kerak.", why: "**come up with**." },
    { k: "fill", q: "The firm must cut back ___ travel costs.", a: ["on"], uz: "Firma sayohat xarajatlarini qisqartirishi kerak.", why: "**cut back on** + xarajat." },
    { k: "order", uz: "Advokatlar yangi shartnoma tayyorlayapti.", words: ["The", "lawyers", "are", "drawing", "up", "a", "new", "contract."], extra: ["on", "with"], alt: [["The", "lawyers", "are", "drawing", "a", "new", "contract", "up."]], why: "**draw up** — separable: ot o'rtada ham, oxirida ham." },
    { k: "order", uz: "Biz yig'ilishni seshanbaga oldinga surdik.", words: ["We", "brought", "the", "meeting", "forward", "to", "Tuesday."], extra: ["bring", "on"], alt: [["We", "brought", "forward", "the", "meeting", "to", "Tuesday."]], why: "**bring forward** — separable." },
    { k: "translate", uz: "Men bu shovqinga chidab turolmayman.", a: ["I can't put up with this noise.", "I can't put up with the noise.", "I can't put up with that noise.", "I cannot put up with this noise.", "I cannot put up with the noise."], why: "**put up with** — uch qismli, ajralmaydi." },
    { k: "translate", uz: "Rahbarim yig'ilishni bekor qildi.", a: ["My boss called off the meeting.", "My boss called the meeting off.", "My manager called off the meeting.", "My manager called the meeting off.", "My boss cancelled the meeting.", "My manager cancelled the meeting."], why: "**call off** = bekor qilmoq (separable)." },
    { k: "fix", wrong: "She turned down it because the salary was low.", a: ["She turned it down because the salary was low."], hint: "olmosh o'rni", why: "**turn it down**." },
    { k: "fix", wrong: "We need to come up an idea before Friday.", a: ["We need to come up with an idea before Friday."], hint: "particle yetishmayapti", why: "**come up with**." },
    { k: "match", pairs: [["take on", "ishga olmoq"], ["put up with", "chidamoq"], ["hold up", "kechiktirmoq"], ["step down", "lavozimdan ketmoq"], ["draw up", "hujjat tayyorlamoq"]] },
    { k: "tf", q: "*They called the meeting off* va *They called off the meeting* to'g'ri, lekin *They called off it* xato.", a: true, why: "Olmosh **o'rtada**: *called it off*." },
    { k: "dictation", say: "I'll follow up with the client tomorrow morning.", uz: "Ertaga ertalab mijoz bilan yana bog'lanaman.", why: "**follow up with** + odam." },
    { k: "speak", say: "We need to come up with a plan, and then we need to get on with it.", uz: "Reja o'ylab topishimiz va keyin uni bajarishga kirishishimiz kerak." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi phrasal verb **chidamoq** ma'nosini beradi?", opts: ["take on", "hold up", "put up with", "draw up"], a: 2, why: "**put up with** = toqat qilmoq." },
    { k: "choice", q: "Qaysi gap **noto'g'ri**?", opts: ["They called it off.", "They called off it.", "They called off the trip.", "They called the trip off."], a: 1, why: "Olmosh bilan: **called it off**; *called off it* — xato." },
    { k: "choice", q: "*We turned down the offer* gapidagi **turned down** ning rasmiy sinonimi qaysi?", opts: ["rejected", "accepted", "postponed", "obtained"], a: 0, why: "**turn down** = **reject**." },
    { k: "choice", q: "The manager ___ next month, and the board is looking for a replacement.", opts: ["is stepping down", "is holding up", "is cutting back", "is falling through"], a: 0, why: "Lavozimdan ketish: **step down**." },
    { k: "fill", q: "Let's stop chatting and get ___ with the agenda.", a: ["on"], uz: "Suhbatni to'xtatib, kun tartibini davom ettiraylik.", why: "**get on with** — davom ettirmoq." },
    { k: "fill", q: "The meeting was brought ___ to Monday because of the holiday.", a: ["forward"], uz: "Bayram sababli yig'ilish dushanbaga oldinga surildi.", why: "**bring forward**." },
    { k: "order", uz: "Ertaga mijoz bilan yana bog'lanaman.", words: ["I", "will", "follow", "up", "with", "the", "client", "tomorrow."], extra: ["on", "after"], why: "**follow up with** + odam." },
    { k: "translate", uz: "Yangi xodimlar ishga olishimiz kerak.", a: ["We need to take on new staff.", "We need to take on new employees.", "We need to take on some new staff.", "We need to take on more staff.", "We need to take new staff on.", "We need to take new employees on."], why: "**take on** — separable." },
    { k: "fix", wrong: "We need to look the problem into.", a: ["We need to look into the problem."], hint: "look into — ajralmaydi", why: "**look into** — inseparable." },
    { k: "tf", q: "Uch qismli phrasal verb'lar (*get on with*) odatda ajralmaydi: *get on with it* deymiz, *get it on with* emas.", a: true, why: "Three-part verb'larda ob'ekt oxirida." },
  ],
  summary: [
    "**Phrasal verb** = fe'l + particle; ma'nosi ko'pincha alohida o'rganiladi. Turlari: intransitive, **separable**, **inseparable**, **three-part**.",
    "**Separable**: ot ikki joyda tura oladi (*called off the meeting / called the meeting off*), **olmosh faqat o'rtada** (*called it off*).",
    "**Inseparable** va uch qismli: ob'ekt oxirida (*look into it, put up with it, come up with an idea*).",
    "Ish uchun: **take on, follow up, step down, draw up, bring forward, hold up, fall through, cut back on, put up with, get on with**.",
    "Rasmiy almashtirish: *turn down → reject, call off → cancel, look into → investigate, cut back on → reduce*. Xato: ~~turn down it~~, ~~come up an idea~~.",
  ],
  homework: "O'z ishingiz yoki o'qishingizdan 8 ta voqea haqida gap yozing va har birida bitta phrasal verb ishlating (*The meeting was brought forward…*). Beshtasini olmosh bilan qayta yozing (*We turned it down*). So'ng har bir phrasal verb uchun rasmiy sinonim toping.",
};

export default lesson;
