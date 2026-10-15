import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l1",
  title: "Gerund or infinitive?",
  titleUz: "Gerund yoki infinitive? Fe'l qoliplari",
  goal: "Fe'ldan keyin **-ing** (gerund) yoki **to + fe'l** (infinitive) kelishini bilasiz: *I enjoy working*, *I decided to study*. **stop, remember, try, forget** ma'noni qanday o'zgartirishini tushunasiz va *I want that you help me* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Ikki qolip: -ing yoki to",
      blocks: [
        { t: "p", md: "Inglizchada ikki fe'l ketma-ket kelsa, ikkinchi fe'l ko'pincha ikki shakldan birida bo'ladi: **gerund** (*working*) yoki **to-infinitive** (*to work*). O'zbekchada «ishlashni yaxshi ko'raman», «ishlashga qaror qildim» desak, shakl deyarli bir xil. Inglizchada esa **birinchi fe'l** qaysi qolipni talab qilishini bilish kerak." },
        {
          t: "table", head: ["Qolip", "Misol", "Ma'nosi"], speak: [1],
          rows: [
            ["fe'l + **-ing**", "I enjoy working here.", "Men bu yerda ishlashni yaxshi ko'raman."],
            ["fe'l + **to + fe'l**", "I decided to work abroad.", "Men chet elda ishlashga qaror qildim."],
            ["fe'l + obyekt + **to + fe'l**", "My boss wants me to work late.", "Boshliq mening kech ishlashimni xohlaydi."],
          ],
        },
        { t: "tip", tone: "info", md: "Qolipni **ma'nodan** topib bo'lmaydi: *enjoy* ham, *want* ham «xohlash»ga yaqin, lekin biri **-ing**, ikkinchisi **to** talab qiladi. Shuning uchun fe'llarni **guruh-guruh** yodlang." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I enjoy to study English.", "I enjoy studying English.", "I enjoy study English.", "I enjoy studied English."], a: 1, why: "**enjoy** dan keyin gerund (**-ing**) keladi." } },
      ],
    },
    {
      title: "Fe'l + gerund (-ing)",
      blocks: [
        { t: "p", md: "Quyidagi fe'llardan keyin **faqat -ing** shakli keladi. Ular ko'pincha «to'xtatish, qochish, davom ettirish, fikr bildirish» ma'nosiga ega." },
        {
          t: "table", head: ["Fe'l", "Misol"], speak: [1],
          rows: [
            ["enjoy", "I enjoy learning new software."],
            ["avoid", "She avoids making mistakes in emails."],
            ["finish", "We finished testing the app at six."],
            ["suggest", "He suggested taking a short break."],
            ["consider", "I'm considering changing my job."],
            ["keep", "Keep practising and you will improve."],
            ["mind", "Do you mind closing the window?"],
            ["give up", "He gave up trying to fix the printer."],
            ["can't stand", "I can't stand waiting in queues."],
            ["postpone", "They postponed signing the contract."],
          ],
        },
        { t: "tip", tone: "info", md: "**Gerund** — bu fe'lning **-ing** shakli, lekin ot kabi ishlaydi. Shuning uchun u gapning **egasi** ham bo'la oladi: *Learning a language takes time.* (Til o'rganish vaqt oladi.)" },
        { t: "check", ex: { k: "fill", q: "She avoids ___ late to work.", a: ["being"], hint: "be", why: "**avoid** dan keyin gerund: *being*." } },
        { t: "check", ex: { k: "fill", q: "Would you mind ___ the door?", a: ["opening"], hint: "open", why: "**mind** dan keyin gerund: *Would you mind opening…?* — muloyim iltimos." } },
      ],
    },
    {
      title: "Fe'l + to-infinitive",
      blocks: [
        { t: "p", md: "Bu guruhdagi fe'llar **reja, qaror, xohish, va'da** ma'nosiga ega. Ulardan keyin **to + fe'l** keladi." },
        {
          t: "table", head: ["Fe'l", "Misol"], speak: [1],
          rows: [
            ["want", "I want to learn programming."],
            ["decide", "She decided to apply for the job."],
            ["hope", "We hope to finish the project in May."],
            ["plan", "They plan to open a small office."],
            ["manage", "I managed to fix the problem myself."],
            ["refuse", "He refused to work on Sundays."],
            ["promise", "I promise to send the report today."],
            ["afford", "I can't afford to buy a new laptop."],
            ["agree", "The team agreed to start earlier."],
            ["learn", "She is learning to drive."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I want to change my job.", "I want you to help me.", "He asked me to wait."] },
          bad: { title: "Xato", items: ["I want changing my job.", "I want that you help me.", "He asked me waiting."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada «xohlayman, **sen yordam bersang**» deymiz, shuning uchun *I want that you help me* deb yuborasiz. Inglizchada **want / ask / tell / expect / allow + kim + to + fe'l**: *I want you to help me.*" },
        { t: "check", ex: { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She decided studying abroad.", "She decided to study abroad.", "She decided study abroad.", "She decided that to study abroad."], a: 1, why: "**decide** dan keyin **to + fe'l**." } },
        { t: "check", ex: { k: "order", uz: "Boshliq mening erta kelishimni xohlaydi.", words: ["My", "boss", "wants", "me", "to", "arrive", "early."], extra: ["arriving"], why: "**want + kim + to + fe'l**." } },
      ],
    },
    {
      title: "Predloglardan keyin faqat -ing",
      blocks: [
        { t: "p", md: "Bu qoida juda aniq: **predlogdan keyin** fe'l doim **-ing** shaklida bo'ladi. Bu *to* predlogi bo'lganda ham shunday (*look forward to*, *be used to*)." },
        {
          t: "examples", items: [
            { en: "I'm interested in learning data analysis.", uz: "Men ma'lumotlar tahlilini o'rganishga qiziqaman." },
            { en: "She is good at explaining difficult ideas.", uz: "U murakkab fikrlarni tushuntirishda yaxshi." },
            { en: "Check your answers before sending the form.", uz: "Shaklni yuborishdan oldin javoblaringizni tekshiring." },
            { en: "He passed the exam without studying much.", uz: "U ko'p o'qimasdan imtihondan o'tdi." },
            { en: "I'm thinking of buying a new phone.", uz: "Yangi telefon sotib olishni o'ylayapman." },
            { en: "I'm looking forward to meeting your team.", uz: "Jamoangiz bilan uchrashishni intizorlik bilan kutyapman.", note: "Bu yerda **to** — predlog, shuning uchun *meeting*, *meet* emas." },
          ],
        },
        { t: "tip", tone: "warn", md: "Uzbek tilida «qiziqaman» + fe'l (*o'rganishga*) deymiz, shuning uchun *I'm interested to learn* deb xato qilasiz. To'g'risi: **interested in learning**. Xuddi shunday: **good at**, **afraid of**, **instead of**, **by**, **after**, **before**, **without** + -ing." },
        { t: "check", ex: { k: "fix", wrong: "I'm looking forward to see you.", a: ["I'm looking forward to seeing you.", "I am looking forward to seeing you."], hint: "look forward to dan keyin nima keladi?", why: "**look forward to** — bu yerda *to* predlog: **seeing**." } },
        { t: "check", ex: { k: "choice", q: "He is afraid ___ flying.", opts: ["of", "to", "for", "at"], a: 0, why: "**afraid of** + -ing." } },
      ],
    },
    {
      title: "Ma'no o'zgaradigan fe'llar",
      blocks: [
        { t: "p", md: "Ba'zi fe'llardan keyin ham **-ing**, ham **to** kelishi mumkin, lekin **ma'no o'zgaradi**. Eng muhimlari: **stop, remember, forget, try**." },
        {
          t: "table", head: ["Fe'l", "+ -ing", "+ to-infinitive"],
          rows: [
            ["stop", "To'xtamoq: *He stopped smoking.* (endi chekmaydi)", "Biror ish uchun to'xtamoq: *He stopped to smoke.* (chekish uchun to'xtadi)"],
            ["remember", "Esimda bor (o'tgan ish): *I remember locking the door.*", "Esdan chiqarmaslik (kerakli ish): *Remember to lock the door.*"],
            ["forget", "Esimdan chiqdi (o'tgan ish): *I'll never forget meeting her.*", "Qilishni unutmoq: *I forgot to call him.*"],
            ["try", "Sinab ko'rmoq: *Try restarting the computer.*", "Harakat qilmoq: *I tried to open the file, but I couldn't.*"],
          ],
        },
        { t: "tip", tone: "good", md: "Oddiy qoida: **-ing** — o'tgan yoki davom etayotgan ish; **to** — hali bajarilmagan ish, maqsad yoki harakat." },
        {
          t: "p", md: "**like, love, hate, prefer, start, begin, continue** dan keyin ikkalasi ham kelishi mumkin, ma'no deyarli bir xil: *I like working / to work in a team.* Faqat **would like / would love / would prefer** dan keyin **to** keladi: *I'd like to ask a question.*",
        },
        { t: "check", ex: { k: "choice", q: "Oh no! I forgot ___ my homework. The teacher will be angry.", opts: ["to bring", "bringing", "bring", "brought"], a: 0, why: "Qilishni **unutdim** (bajarilmagan ish) → **forgot to bring**." } },
        { t: "check", ex: { k: "choice", q: "The Wi-Fi is slow. Try ___ the router.", opts: ["restarting", "to restarting", "restart", "restarted"], a: 0, why: "**try + -ing** — sinab ko'rmoq (usul sifatida)." } },
      ],
    },
    {
      title: "Dialog: ofisda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Emma", en: "Hi, Karim. Did you manage to finish the report?", uz: "Salom, Karim. Hisobotni tugatishga ulgurdingmi?" },
            { who: "Karim", en: "Almost. I kept getting calls, so I had to stop working on it.", uz: "Deyarli. Qo'ng'iroqlar to'xtamadi, shuning uchun ishni to'xtatishga to'g'ri keldi." },
            { who: "Emma", en: "I suggest turning off your phone for an hour.", uz: "Telefoningizni bir soatga o'chirishni maslahat beraman." },
            { who: "Karim", en: "Good idea. I'll try doing that. Do you mind checking the numbers for me?", uz: "Yaxshi fikr. Shuni sinab ko'raman. Raqamlarni mening o'rniga tekshirib bera olasizmi?" },
            { who: "Emma", en: "Not at all. Remember to send it to Mr Brown before five.", uz: "Mayli. Soat beshgacha janob Braunga yuborishni unutmang." },
            { who: "Karim", en: "I won't forget. I'm looking forward to finishing it!", uz: "Unutmayman. Uni tugatishni intizorlik bilan kutyapman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Karim stopped working because the phone kept ringing.", a: true, why: "Qo'ng'iroqlar tufayli ishlashni to'xtatdi: *stop working*." } },
      ],
    },
    {
      title: "O'qing: yangi ko'nikma",
      blocks: [
        {
          t: "text", title: "Learning to code", voice: "emma",
          en: "Last year Sara decided to learn programming. She had always been interested in computers, and she wanted to change her career. At first she tried to study alone, but she kept getting stuck. Then a friend suggested joining an online course. Sara enjoys solving small problems, and she is good at finding mistakes in her code. She still finds some lessons difficult, but she refuses to give up. Next month she plans to start building her own website. She hopes to find a job in technology before the end of next year.",
          uz: "O'tgan yili Sara dasturlashni o'rganishga qaror qildi. U doim kompyuterlarga qiziqqan va kasbini o'zgartirmoqchi edi. Avval u yolg'iz o'qishga harakat qildi, lekin tez-tez tiqilib qolaverdi. Keyin bir do'sti onlayn kursga yozilishni maslahat berdi. Sara kichik masalalarni yechishni yaxshi ko'radi va koddagi xatolarni topishda yaxshi. U ba'zi darslarni hali ham qiyin deb biladi, lekin taslim bo'lishdan bosh tortadi. Kelasi oy u o'z veb-saytini yaratishni boshlashni rejalashtiryapti. U kelasi yil oxirigacha texnologiya sohasida ish topishga umid qilyapti.",
        },
        { t: "check", ex: { k: "tf", q: "Sara has already built her own website.", a: false, why: "U kelasi oy yaratishni **rejalashtiryapti** (*plans to start building*)." } },
        { t: "check", ex: { k: "choice", q: "Why does the text say \"suggested joining\"?", opts: ["Because suggest is followed by -ing.", "Because joining is a noun.", "Because it is the past tense.", "Because Sara is a girl."], a: 0, why: "**suggest** dan keyin gerund (**-ing**) keladi." } },
      ],
    },
  ],
  words: [
    { en: "pretend", uz: "ko'rsatmoq, o'zini go'llikka solmoq", ipa: "prɪˈtend", pos: "verb", ex: "He pretended to be asleep when his boss came in.", exUz: "U boshlig'i kirganda uxlayotgandek ko'rsatdi o'zini." },
    { en: "tend", uz: "moyil bo'lmoq, odatda ... qilmoq", ipa: "tend", pos: "verb", ex: "I tend to feel tired after lunch.", exUz: "Men tushlikdan keyin odatda charchaganimni sezaman." },
    { en: "consider", uz: "o'ylab ko'rmoq", ipa: "kənˈsɪd.ər", pos: "verb", ex: "She is considering moving to another city.", exUz: "U boshqa shaharga ko'chishni o'ylab ko'ryapti." },
    { en: "involve", uz: "o'z ichiga olmoq, talab qilmoq", ipa: "ɪnˈvɒlv", pos: "verb", ex: "My job involves travelling to different cities.", exUz: "Mening ishim turli shaharlarga sayohat qilishni o'z ichiga oladi." },
    { en: "threaten", uz: "po'pisa qilmoq", ipa: "ˈθret.ən", pos: "verb", ex: "The company threatened to close the shop.", exUz: "Kompaniya do'konni yopish bilan po'pisa qildi." },
    { en: "resist", uz: "o'zini tiymoq, qarshilik qilmoq", ipa: "rɪˈzɪst", pos: "verb", ex: "I can't resist eating chocolate in the evening.", exUz: "Kechqurun shokolad yeyishdan o'zimni tiya olmayman." },
    { en: "propose", uz: "taklif qilmoq, niyat qilmoq", ipa: "prəˈpəʊz", pos: "verb", ex: "She proposed meeting at the station.", exUz: "U vokzalda uchrashishni taklif qildi." },
    { en: "postpone", uz: "keyinga qoldirmoq", ipa: "pəʊstˈpəʊn", pos: "verb", ex: "They postponed the meeting until Friday.", exUz: "Ular yig'ilishni juma kuniga qoldirdilar." },
    { en: "urge", uz: "qistamoq, ishontirib turib so'ramoq", ipa: "ɜːdʒ", pos: "verb", ex: "The doctor urged him to rest for a week.", exUz: "Shifokor unga bir hafta dam olishni qat'iy maslahat berdi." },
    { en: "keep on", uz: "davom ettirmoq, to'xtamasdan qilmoq", ipa: "kiːp ɒn", pos: "phrasal verb", ex: "She kept on talking even though nobody was listening.", exUz: "U hech kim tinglamasa ham gapirishda davom etdi." },
  ],
  practice: [
    { k: "match", pairs: [["avoid", "qochmoq"], ["suggest", "taklif qilmoq"], ["refuse", "rad etmoq"], ["afford", "qurbi yetmoq"], ["postpone", "keyinga qoldirmoq"]] },
    { k: "choice", q: "I really enjoy ___ with new people.", opts: ["working", "to work", "work", "worked"], a: 0, why: "**enjoy** + gerund." },
    { k: "choice", q: "We decided ___ a new office.", opts: ["to open", "opening", "open", "opened"], a: 0, why: "**decide** + to-infinitive." },
    { k: "fill", q: "He suggested ___ the meeting to Monday.", a: ["moving"], hint: "move", uz: "U yig'ilishni dushanbaga ko'chirishni taklif qildi.", why: "**suggest** + gerund." },
    { k: "fill", q: "I can't afford ___ a new car.", a: ["to buy"], hint: "buy", uz: "Yangi mashina sotib olishga qurbim yetmaydi.", why: "**afford** + to-infinitive." },
    { k: "fill", q: "She is interested ___ learning Spanish.", a: ["in"], uz: "U ispan tilini o'rganishga qiziqadi.", why: "**interested in** + -ing." },
    { k: "order", uz: "U kechikkanini tan oldi.", words: ["He", "admitted", "being", "late."], extra: ["to", "be"], why: "**admit** + gerund." },
    { k: "order", uz: "Men sizdan yordam berishingizni xohlayman.", words: ["I", "want", "you", "to", "help", "me."], extra: ["helping", "that"], why: "**want + kim + to + fe'l**." },
    { k: "tf", q: "\"I stopped to buy a coffee\" means I bought a coffee on the way.", a: true, why: "**stop to + fe'l** — biror ish uchun to'xtadim." },
    { k: "tf", q: "The sentence \"She avoids to speak English\" is correct.", a: false, why: "**avoid** dan keyin gerund: *avoids speaking*." },
    { k: "fix", wrong: "I enjoy to read books in the evening.", a: ["I enjoy reading books in the evening."], hint: "enjoy dan keyin nima keladi?", why: "**enjoy** + gerund." },
    { k: "fix", wrong: "She refused helping us.", a: ["She refused to help us."], hint: "refuse dan keyin nima keladi?", why: "**refuse** + to-infinitive." },
    { k: "dictation", say: "I'm thinking of changing my job.", uz: "Ishimni o'zgartirishni o'ylayapman.", why: "**think of** + gerund." },
    { k: "listen", say: "Remember to lock the door.", opts: ["Remember to lock the door.", "Remember locking the door.", "I remember locking the door.", "Don't forget locking the door."], a: 0, why: "Kerakli ishni esdan chiqarmaslik: **remember to**." },
    { k: "translate", uz: "U doim kech kelishni xohlamaydi.", a: ["He doesn't want to be late.", "She doesn't want to be late."], why: "**want** + to-infinitive." },
    { k: "speak", say: "I'm looking forward to meeting you.", uz: "Siz bilan uchrashishni intizorlik bilan kutyapman." },
  ],
  quiz: [
    { k: "choice", q: "She finished ___ the report at noon.", opts: ["writing", "to write", "write", "wrote"], a: 0, why: "**finish** + gerund." },
    { k: "choice", q: "They hope ___ a better job next year.", opts: ["to find", "finding", "find", "found"], a: 0, why: "**hope** + to-infinitive." },
    { k: "choice", q: "He is good at ___ problems.", opts: ["solving", "to solve", "solve", "solved"], a: 0, why: "Predlog (**at**) dan keyin -ing." },
    { k: "choice", q: "I remember ___ the email, so I know it was sent.", opts: ["sending", "to send", "send", "sent"], a: 0, why: "O'tgan ish esimda → **remember + -ing**." },
    { k: "fill", q: "Please remember ___ the lights before you leave.", a: ["to turn off"], hint: "turn off", why: "Kerakli ish esdan chiqmasin → **remember to**." },
    { k: "fill", q: "My teacher told me ___ more carefully.", a: ["to listen"], hint: "listen", why: "**tell + kim + to + fe'l**." },
    { k: "fix", wrong: "My manager wants that I finish early.", a: ["My manager wants me to finish early."], hint: "want + kim + ...", why: "**want + kim + to + fe'l**." },
    { k: "fix", wrong: "He apologised for not to call.", a: ["He apologised for not calling."], hint: "Predlogdan keyin nima?", why: "Predlogdan keyin gerund: *for not calling*." },
    { k: "order", uz: "Men yangi kompyuter sotib olishni o'ylab ko'ryapman.", words: ["I'm", "considering", "buying", "a", "new", "computer."], extra: ["to", "buy"], why: "**consider** + gerund." },
    { k: "tf", q: "After \"would like\" we use to + verb: I would like to ask a question.", a: true, why: "**would like + to-infinitive**." },
  ],
  summary: [
    "**Gerund (-ing)** dan keyin: *enjoy, avoid, finish, suggest, consider, keep, mind, give up*.",
    "**to + fe'l** dan keyin: *want, decide, hope, plan, manage, refuse, promise, afford, agree*. **want / ask / tell + kim + to + fe'l**: *I want you to help me.*",
    "**Predlogdan keyin** doim -ing: *interested in learning, good at explaining, before sending, look forward to meeting*.",
    "**stop, remember, forget, try**: **-ing** — o'tgan ish yoki usul, **to** — bajarilishi kerak bo'lgan ish yoki harakat.",
    "**would like / would love** dan keyin faqat **to**: *I'd like to apply.*",
  ],
  homework: "Har kuni 3 ta gap yozing: bittasi **enjoy / avoid / suggest** bilan (-ing), bittasi **want / decide / plan** bilan (to) va bittasi **predlog + -ing** bilan. Masalan: *I enjoy listening to podcasts. I decided to start a course. I'm interested in learning design.*",
};

export default lesson;
