import type { Lesson } from '../../../types';

// Mini lesson (grammar): the typical B1 mistakes of Uzbek speakers. Uses tenses, conditionals and the passive from l3-l4 only as revision.
const lesson: Lesson = {
  id: 'u23-l13',
  title: 'Typical mistakes of Uzbek speakers at B1',
  titleUz: "B1 darajada o'zbek tilida so'zlashuvchilarning tipik xatolari",
  mini: true,
  kind: 'grammar',
  goal: "O'zbek tilidan inglizchaga ko'chadigan eng keng tarqalgan xatolarni topasiz va tuzatasiz: **fe'l + predlog**, **sanalmaydigan otlar**, **if bilan will**, **savol tartibi**, **I am agree** va **-ing / to** tanlovi.",
  slides: [
    {
      title: "Fe'l bilan predlog",
      blocks: [
        { t: 'p', md: "O'zbek tilida biz *muhokama qilmoq*, *tushuntirmoq*, *turmushga chiqmoq* deymiz va ko'pincha predlogni inglizchaga ham ko'chiramiz. Ba'zi fe'llardan keyin predlog **kerak emas**, ba'zilaridan keyin **boshqa** predlog turadi." },
        { t: 'table', head: ['Xato', "To'g'ri", "Sabab"], speak: [1], rows: [
          ['We discussed about the plan.', 'We discussed the plan.', "**discuss** dan keyin predlog yo'q"],
          ['Can you explain me this rule?', 'Can you explain this rule to me?', '**explain something to somebody**'],
          ['She is married with a doctor.', 'She is married to a doctor.', '**married to**'],
          ['It depends of the weather.', 'It depends on the weather.', '**depend on**'],
          ['I listen music every day.', 'I listen to music every day.', '**listen to**'],
          ['I am waiting you.', 'I am waiting for you.', '**wait for**'],
        ] },
        { t: 'tip', tone: 'warn', md: "Yangi fe'lni yodlaganda **predlogi bilan birga** yodlang: *depend on, listen to, wait for, married to, good at, interested in*." },
        { t: 'check', ex: { k: 'fix', wrong: "We discussed about the problem for an hour.", a: ["We discussed the problem for an hour."], why: "**discuss** dan keyin **about** yo'q." } },
        { t: 'check', ex: { k: 'choice', q: "It depends ___ the price.", opts: ['on', 'of', 'from', 'about'], a: 0, why: "**depend on**." } },
      ],
    },
    {
      title: "Sanalmaydigan otlar va kelishik",
      blocks: [
        { t: 'p', md: "Ba'zi so'zlar o'zbek tilida sanaladi, inglizchada esa **sanalmaydi**. Ular bilan **a/an** va **-s** ishlatilmaydi, fe'l esa birlikda turadi." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["She gave me some good advice.", "The information is useful.", "People are very friendly here.", "I do a lot of research."] },
          bad: { title: 'Xato', items: ["She gave me a good advice.", "The informations are useful.", "People is very friendly here.", "I make a lot of researches."] } },
        { t: 'tip', tone: 'info', md: "**advice, information, news, furniture, research, luggage** — sanalmaydi. Sanash uchun: **a piece of advice**, **a piece of news**. **People** esa ko'plik: *People are…*" },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["The news is good.", "The news are good.", "A news is good.", "The newses are good."], a: 0, why: "**news** — sanalmaydi, birlikdagi fe'l bilan: **is**." } },
        { t: 'check', ex: { k: 'fix', wrong: "People is worried about the environment.", a: ["People are worried about the environment."], why: "**people** — ko'plik: **are**." } },
      ],
    },
    {
      title: "Zamon va tuzilma xatolari",
      blocks: [
        { t: 'p', md: "Quyidagi xatolar tilimizdagi tuzilishdan keladi. Ularni bir marta tushunib olsangiz, qaytarilmaydi." },
        { t: 'table', head: ['Xato', "To'g'ri", "Sabab"], speak: [1], rows: [
          ['If it will rain, we will stay at home.', 'If it rains, we will stay at home.', "**if** dan keyin **will** yo'q (hozirgi zamon)"],
          ['I am agree with you.', 'I agree with you.', "**agree** — fe'l, *am* kerak emas"],
          ['I have 25 years.', 'I am 25 years old.', "Yosh: **be** bilan"],
          ['I live here since 2019.', 'I have lived here since 2019.', '**since** bilan Present Perfect'],
          ['Do you know where is the bank?', 'Do you know where the bank is?', "Ichki savolda **darak gap tartibi**"],
          ['He suggested me to go.', 'He suggested going.', "**suggest** + that / -ing"],
        ] },
        { t: 'tip', tone: 'warn', md: "*Where is the bank?* — oddiy savol, fe'l oldinda. Lekin *Do you know…* yoki *Can you tell me…* dan keyin gap **darak tartibida** bo'ladi: *where the bank is*." },
        { t: 'check', ex: { k: 'fix', wrong: "If I will have time, I will call you.", a: ["If I have time, I will call you."], why: "**If** gapida hozirgi zamon: *If I have time*." } },
        { t: 'check', ex: { k: 'fill', q: "Could you tell me where the station ___ ?", a: ['is'], why: "Ichki savol: *where the station is* (darak tartibi)." } },
      ],
    },
    {
      title: "-ing yoki to?",
      blocks: [
        { t: 'p', md: "Ba'zi fe'llardan keyin ikkinchi fe'l **-ing**, ba'zilaridan keyin **to + fe'l** shaklida turadi. O'zbek tilida bunday ajratish yo'q, shuning uchun adashamiz." },
        { t: 'table', head: ["Fe'l + -ing", "Fe'l + to"], speak: [0, 1], rows: [
          ['I enjoy reading.', 'I want to read.'],
          ['She avoids driving at night.', 'She decided to drive.'],
          ['They finished working.', 'They hope to finish soon.'],
          ['We suggest going early.', 'We plan to go early.'],
        ] },
        { t: 'tip', tone: 'info', md: "**-ing** bilan: *enjoy, avoid, finish, suggest, mind, keep*. **to** bilan: *want, decide, hope, plan, need, agree, manage*. Predlogdan keyin doim **-ing**: *good at cooking*, *interested in learning*." },
        { t: 'check', ex: { k: 'choice', q: "I enjoy ___ English.", opts: ['studying', 'to study', 'study', 'studied'], a: 0, why: "**enjoy** + -ing." } },
        { t: 'check', ex: { k: 'choice', q: "We decided ___ the trip.", opts: ['to cancel', 'cancelling', 'cancel', 'cancelled'], a: 0, why: "**decide** + to." } },
      ],
    },
    {
      title: "Dialog: xatolarni tuzatish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sardor', en: "Emma, can you check my email? I think there are some mistakes.", uz: "Emma, emailimni tekshirib bera olasanmi? Menimcha, xatolar bor." },
          { who: 'Emma', en: "Of course. You wrote: I am agree with your idea. It should be: I agree with your idea.", uz: "Albatta. Sen yozibsan: I am agree with your idea. To'g'risi: I agree with your idea." },
          { who: 'Sardor', en: "I see. I always add am. What else?", uz: "Tushundim. Men doim am qo'shaman. Yana nima?" },
          { who: 'Emma', en: "You also wrote: We discussed about the budget. You do not need about.", uz: "Yana yozibsan: We discussed about the budget. About kerak emas." },
          { who: 'Sardor', en: "Right. And this sentence? I gave them many informations.", uz: "To'g'ri. Bu gap-chi? I gave them many informations." },
          { who: 'Emma', en: "Information has no plural. Say: I gave them a lot of information.", uz: "Information ko'plikda bo'lmaydi. Ayt: I gave them a lot of information." },
          { who: 'Sardor', en: "Thanks. I will keep a list of my mistakes and read it every week.", uz: "Rahmat. Xatolarim ro'yxatini yuritaman va har hafta o'qiyman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Emma says that you can say *informations*.", a: false, why: "*Information has no plural.*" } },
        { t: 'check', ex: { k: 'choice', q: "What will Sardor do?", opts: ['Keep a list of his mistakes', 'Write a new email', 'Stop using email', 'Ask Emma for money'], a: 0, why: "*I will keep a list of my mistakes.*" } },
      ],
    },
  ],
  words: [
    { en: 'mistake', uz: 'xato', ipa: 'mɪˈsteɪk', pos: 'noun', ex: 'Everyone makes mistakes when they learn a language.', exUz: "Til o'rganganda hamma xato qiladi." },
    { en: 'habit', uz: 'odat', ipa: 'ˈhæb.ɪt', pos: 'noun', ex: 'Reading every day is a good habit.', exUz: "Har kuni o'qish — yaxshi odat." },
    { en: 'accurate', uz: "aniq, to'g'ri", ipa: 'ˈæk.jə.rət', pos: 'adj', ex: 'Try to write accurate sentences.', exUz: "To'g'ri gaplar yozishga harakat qiling." },
    { en: 'careless', uz: "beparvo, e'tiborsiz", ipa: 'ˈkeə.ləs', pos: 'adj', ex: 'It was a careless mistake.', exUz: "Bu e'tiborsizlik tufayli qilingan xato edi." },
    { en: 'improve', uz: 'yaxshilamoq', ipa: 'ɪmˈpruːv', pos: 'verb', ex: 'I want to improve my writing.', exUz: "Yozishimni yaxshilamoqchiman." },
  ],
  practice: [
    { k: 'match', pairs: [['depend on', "...ga bog'liq bo'lmoq"], ['listen to', 'tinglamoq'], ['wait for', 'kutmoq'], ['married to', 'turmushga chiqqan'], ['interested in', "qiziqmoq"]] },
    { k: 'choice', q: "Please explain the rule ___ me.", opts: ['to', 'for', 'at', 'of'], a: 0, why: "**explain something to somebody**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I need some advice.", "I need an advice.", "I need some advices.", "I need advices."], a: 0, why: "**advice** — sanalmaydigan ot." },
    { k: 'fill', q: "If it ___ tomorrow, we will cancel the picnic. (rain)", a: ['rains'], uz: "Ertaga yomg'ir yog'sa, piknikni bekor qilamiz.", why: "**If** dan keyin hozirgi zamon: *rains*." },
    { k: 'fill', q: "I'm 30 years ___.", a: ['old'], uz: "Men 30 yoshdaman.", why: "Yosh: *I am 30 years old.*" },
    { k: 'fix', wrong: "I am agree with this opinion.", a: ["I agree with this opinion."], why: "**agree** — fe'l: *I agree*." },
    { k: 'fix', wrong: "She is interested to learn Japanese.", a: ["She is interested in learning Japanese.", "She is interested in Japanese."], why: "**interested in** + -ing." },
    { k: 'fix', wrong: "Can you tell me where is the post office?", a: ["Can you tell me where the post office is?"], why: "Ichki savolda darak gap tartibi." },
    { k: 'order', uz: "Biz ob-havoga bog'liqmiz.", words: ['It', 'depends', 'on', 'the', 'weather.'], extra: ['of', 'from'], why: "**depend on**." },
    { k: 'translate', uz: "Men musiqa tinglashni yaxshi ko'raman.", a: ["I like listening to music.", "I love listening to music.", "I enjoy listening to music."], why: "**listen to** + music." },
    { k: 'dictation', say: 'He gave me some useful information.', a: ['He gave me some useful information.'], uz: "U menga foydali ma'lumot berdi." },
    { k: 'speak', say: 'I agree with you, but it depends on the price.', uz: "Men senga qo'shilaman, lekin bu narxga bog'liq." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap xato?", opts: ["We discussed about the idea.", "We discussed the idea.", "We talked about the idea.", "We had a discussion about the idea."], a: 0, why: "**discuss** dan keyin **about** yo'q." },
    { k: 'choice', q: "She avoids ___ late at night.", opts: ['going out', 'to go out', 'go out', 'goes out'], a: 0, why: "**avoid** + -ing." },
    { k: 'fill', q: "I have lived here ___ 2018.", a: ['since'], why: "Boshlanish nuqtasi: **since** + Present Perfect." },
    { k: 'fill', q: "The news ___ very good today.", a: ['is'], why: "**news** — sanalmaydigan ot: **is**." },
    { k: 'fix', wrong: "I am waiting you since one hour.", a: ["I have been waiting for you for one hour.", "I have been waiting for you for an hour.", "I've been waiting for you for one hour.", "I've been waiting for you for an hour."], why: "**wait for** va muddat uchun **for**." },
    { k: 'order', uz: "Menga bu qanday ishlashini ayta olasizmi?", words: ['Can', 'you', 'tell', 'me', 'how', 'it', 'works?'], extra: ['does', 'work'], why: "Ichki savol: darak gap tartibi." },
    { k: 'tf', q: "*People is friendly* — to'g'ri gap.", a: false, why: "**people** — ko'plik: *People are friendly.*" },
    { k: 'translate', uz: "Men sizga maslahat bermoqchiman.", a: ["I would like to give you some advice.", "I want to give you some advice.", "I'd like to give you some advice.", "Let me give you some advice."], why: "**advice** — sanalmaydi: *some advice*." },
  ],
  summary: [
    "Fe'l + predlog: **discuss** (predlogsiz), **explain to**, **depend on**, **listen to**, **wait for**, **married to**.",
    "**advice, information, news, research** — sanalmaydi (*a/an* va *-s* yo'q). **People** — ko'plik.",
    "**If** dan keyin *will* yo'q; **I agree** (am yo'q); **I am 25 years old**; **since** bilan Present Perfect.",
    "Ichki savolda darak tartibi: *Do you know where the bank is?* Yangi so'zlar: **mistake, habit, accurate, careless, improve**.",
  ],
  homework: "Oxirgi yozgan matningizni oching va shu darsdagi 6 ta xatoni qidiring. Topgan xatolaringizni daftarga \"xato -> to'g'ri\" ko'rinishida yozib boring.",
};

export default lesson;
