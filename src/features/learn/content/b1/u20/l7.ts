import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u20-l7",
  title: "Writing a letter of advice",
  titleUz: "Yozish: maslahat xati",
  goal: "Do'stingizning muammosiga **maslahat xati** yozasiz: to'g'ri boshlanish va yakunlash qoliplarini, **Firstly / Secondly / However / In conclusion** kabi bog'lovchilarni va maslahat qoliplarini (*If I were you, I'd…*) ishlatasiz.",
  slides: [
    {
      title: "Maslahat xatining tuzilishi",
      blocks: [
        { t: "p", md: "Do'stingiz sizga muammosini yozdi va maslahat so'rayapti. Yaxshi javob xati besh qismdan iborat bo'ladi. Har bir qism uchun alohida abzas yozing." },
        {
          t: "table", head: ["Qism", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["1. Salomlashish", "Ismni ayting, vergul qo'ying", "Dear Aziz,"],
            ["2. Kirish", "Xat uchun rahmat, hamdard bo'ling", "Thanks for your letter. I'm sorry to hear that you are worried."],
            ["3. Maslahatlar", "2–3 ta maslahat, sababi bilan", "If I were you, I'd talk to your manager."],
            ["4. Xotima", "Dalda bering va javob so'rang", "Write soon and tell me how it goes."],
            ["5. Xayrlashish", "Yaqin do'stga: qisqa va iliq", "Best wishes, Karim"],
          ],
        },
        { t: "tip", tone: "info", md: "Salomdan keyin **vergul** qo'yiladi: *Dear Aziz,* (ikki nuqta emas). Xatning birinchi harfi yangi qatordan, bosh harf bilan boshlanadi." },
        { t: "check", ex: { k: "choice", q: "Do'stga yozilgan xat uchun qaysi yakun mos?", opts: ["Best wishes,", "Yours faithfully,", "With the greatest respect,", "To whom it may concern,"], a: 0, why: "Do'stga: **Best wishes, / Take care, / All the best,**. Qolganlari rasmiy xat uchun." } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: "p", md: "Xatni ravon qilish uchun tayyor iboralarni yodlang. Ularni oldingi darsdagi qoliplar bilan aralashtiring." },
        {
          t: "table", head: ["Vazifa", "Iboralar"], speak: [1],
          rows: [
            ["Xat uchun rahmat", "Thanks for your letter. / It was great to hear from you."],
            ["Hamdard bo'lish", "I'm sorry to hear that… / That sounds really difficult."],
            ["Maslahat berish", "If I were you, I'd… / You should… / Why don't you…? / I suggest…"],
            ["Ogohlantirish", "You'd better not… / You shouldn't…"],
            ["Dalda berish", "I'm sure you'll be fine. / Don't worry too much."],
            ["Yakun", "Write soon. / Let me know how it goes. / I'm looking forward to your reply."],
          ],
        },
        { t: "tip", tone: "warn", md: "**look forward to** dan keyin **-ing** yoki ot keladi (**to** — bu yerda old qo'shimcha): *I'm looking forward to hearing from you.* *looking forward to hear* — xato." },
        { t: "check", ex: { k: "fill", q: "I'm looking forward to ___ from you. (hear)", a: ["hearing"], why: "**look forward to** + **-ing**." } },
        { t: "check", ex: { k: "choice", q: "Qaysi ibora hamdardlik bildiradi?", opts: ["I'm sorry to hear that.", "I'm looking forward to it.", "Write soon.", "Best wishes."], a: 0, why: "**I'm sorry to hear that** — eshitganimdan afsusdaman." } },
      ],
    },
    {
      title: "Fikrlarni bog'lash",
      blocks: [
        { t: "p", md: "Bir nechta maslahat bersangiz, ularni tartib bilan bog'lang. Shunda xat bir butun matn bo'ladi, alohida gaplar to'plami emas." },
        {
          t: "table", head: ["Vazifa", "So'zlar", "Misol"], speak: [2],
          rows: [
            ["Tartib", "Firstly, Secondly, Finally", "Firstly, you should talk to him."],
            ["Qo'shish", "Also, In addition, Besides", "Also, you could ask your friends."],
            ["Qarama-qarshilik", "However, On the other hand", "On the other hand, don't be too hard on yourself."],
            ["Sabab", "because, so", "You'd better sleep, because tired people make mistakes."],
            ["Xulosa", "In conclusion, To sum up", "In conclusion, I think you should be patient."],
          ],
        },
        { t: "tip", tone: "info", md: "Bog'lovchi gap boshida kelsa, undan keyin **vergul** qo'ying: *However, I think you are right.* *Because* esa gap o'rtasida keladi, undan oldin vergul shart emas." },
        { t: "compare", good: { title: "To'g'ri", items: ["Firstly, you should rest.", "However, don't give up.", "In conclusion, take your time."] }, bad: { title: "Xato", items: ["Firstly you should rest.", "However don't give up.", "At the end, take your time."] } },
        { t: "check", ex: { k: "choice", q: "___, don't be too hard on yourself. Everyone makes mistakes.", opts: ["On the other hand", "Because", "Firstly of all", "At the first"], a: 0, why: "Qarama-qarshi fikr uchun **On the other hand,**." } },
      ],
    },
    {
      title: "O'qing: namunaviy xat",
      blocks: [
        {
          t: "text", title: "A letter to Aziz",
          en: "Dear Aziz,\nThanks for your letter. I'm sorry to hear that you are so worried about your new job. Firstly, it is normal to feel nervous at the start. If I were you, I'd talk to your manager and ask for a clear plan for the first month. Secondly, you shouldn't try to do everything alone. Why don't you ask a colleague for help? Also, you'd better get enough sleep, because tired people make more mistakes. On the other hand, don't be too hard on yourself. Everyone needs time to learn. I'm sure you'll be fine! Write soon and tell me how it goes.\nBest wishes,\nKarim",
          uz: "Aziz, salom,\nXating uchun rahmat. Yangi ishing haqida bunchalik xavotirda ekaningni eshitib afsusdaman. Birinchidan, boshida hayajonlanish tabiiy. O'rningda bo'lsam, boshliq bilan gaplashib, birinchi oyga aniq reja so'rardim. Ikkinchidan, hamma narsani yolg'iz qilishga urinma. Hamkasbingdan yordam so'rasang-chi? Yana, yaxshisi yetarlicha uxla, chunki charchagan odam ko'proq xato qiladi. Boshqa tomondan, o'zingga haddan ortiq qattiqqo'l bo'lma. Hamma o'rganishga vaqt kerak. Ishonchim komilki, hammasi yaxshi bo'ladi! Tezroq yoz va qanday ketayotganini ayt.\nEng yaxshi tilaklar bilan,\nKarim",
        },
        { t: "check", ex: { k: "tf", q: "Karim thinks Aziz should do everything alone.", a: false, why: "Karim: *you shouldn't try to do everything alone* — hamma narsani yolg'iz qilmaslik kerak." } },
        { t: "check", ex: { k: "choice", q: "Which word introduces the second piece of advice?", opts: ["Secondly", "Firstly", "However", "Finally"], a: 0, why: "Matnda: *Secondly, you shouldn't try to do everything alone.*" } },
      ],
    },
    {
      title: "Yozishdan oldin: reja va xatolar",
      blocks: [
        { t: "p", md: "Yozishni boshlashdan oldin 2 daqiqa reja tuzing. So'ng 80–120 so'zli xat yozing. Ish rejasi:" },
        {
          t: "examples", items: [
            { en: "Read the problem and underline the main worry.", uz: "Muammoni o'qing va asosiy tashvishni belgilang.", note: "Nima haqida maslahat so'ralayapti?" },
            { en: "Choose two or three pieces of advice.", uz: "Ikki-uchta maslahat tanlang.", note: "Har biriga sabab qo'shing." },
            { en: "Write one paragraph for each part of the letter.", uz: "Xatning har bir qismi uchun alohida abzas yozing." },
            { en: "Read the letter again and check the verbs.", uz: "Xatni qayta o'qing va fe'llarni tekshiring.", note: "should + V1, had better + V1." },
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["I'm writing to give you some advice.", "I hope you feel better soon.", "Let me know how it goes."] }, bad: { title: "Xato", items: ["I am writing to you for give advice.", "I hope you will feel better soon, I wait your answer.", "Tell me how does it go."] } },
        { t: "tip", tone: "warn", md: "Maslahat xatida eng ko'p uchraydigan xatolar: *should to go*, *I suggest you to go*, *an advice* va gapdagi so'z tartibi (*tell me how it goes*, *how does it go* emas). Yuborishdan oldin shularni tekshiring." },
        { t: "check", ex: { k: "fix", wrong: "Tell me how does it go.", a: ["Tell me how it goes."], hint: "darak gap tartibi", why: "Ichki savolda darak gap tartibi: **how it goes**." } },
      ],
    },
  ],
  words: [
    { en: "trust", uz: "ishonmoq, ishonch", ipa: "trʌst", pos: "verb", ex: "It takes time to trust someone new.", exUz: "Yangi odamga ishonish uchun vaqt kerak." },
    { en: "loyal", uz: "sodiq, ishonchli", ipa: "ˈlɔɪ.əl", pos: "adj", ex: "A loyal friend will always listen to you.", exUz: "Sodiq do'st sizni doim tinglaydi." },
    { en: "criticise", uz: "tanqid qilmoq", ipa: "ˈkrɪt.ɪ.saɪz", pos: "verb", ex: "It is easy to criticise other people, but harder to help them.", exUz: "Boshqalarni tanqid qilish oson, ularga yordam berish esa qiyinroq." },
    { en: "encourage", uz: "dalda bermoq, ruhlantirmoq", ipa: "ɪnˈkʌr.ɪdʒ", pos: "verb", ex: "My teacher encouraged me to apply.", exUz: "Ustozim ariza berishga meni ruhlantirdi." },
    { en: "get over", uz: "tuzalib ketmoq, yengib o'tmoq", ipa: "ɡet ˈəʊ.vər", pos: "phrasal verb", ex: "It took her a long time to get over the disappointment.", exUz: "Hafsalasi pir bo'lganini yengib o'tish unga uzoq vaqt oldi." },
    { en: "relationship", uz: "munosabat", ipa: "rɪˈleɪ.ʃən.ʃɪp", pos: "noun", ex: "A good relationship needs trust.", exUz: "Yaxshi munosabat ishonchni talab qiladi." },
    { en: "cheer up", uz: "ko'ngli ko'tarilmoq", ipa: "tʃɪər ʌp", pos: "phrase", ex: "Cheer up! Things will get better.", exUz: "Ko'nglingni ko'tar! Hammasi yaxshi bo'ladi." },
    { en: "fall out", uz: "janjallashib qolmoq", ipa: "fɔːl aʊt", pos: "phrasal verb", ex: "They fell out over a silly misunderstanding.", exUz: "Ular bema'ni tushunmovchilik tufayli janjallashib qolishdi." },
    { en: "in conclusion", uz: "xulosa qilib aytganda", ipa: "ɪn kənˈkluː.ʒən", pos: "phrase", ex: "In conclusion, I think you should talk to her.", exUz: "Xulosa qilib aytganda, u bilan gaplashishingiz kerak deb o'ylayman." },
    { en: "on the other hand", uz: "boshqa tomondan", ipa: "ɒn ði ˈʌð.ə hænd", pos: "phrase", ex: "On the other hand, the job pays very well.", exUz: "Boshqa tomondan, bu ishning maoshi juda yaxshi." },
  ],
  practice: [
    { k: "match", pairs: [["reply", "javob"], ["upset", "xafa"], ["support", "qo'llab-quvvatlamoq"], ["honest", "halol, ochiq"], ["cheer up", "ko'ngli ko'tarilmoq"], ["relationship", "munosabat"]] },
    { k: "choice", q: "Xat boshlanishi: qaysi biri to'g'ri yozilgan?", opts: ["Dear Aziz,", "Dear Aziz:", "dear Aziz.", "Dear, Aziz"], a: 0, why: "Salomdan keyin **vergul**, ism bosh harf bilan." },
    { k: "choice", q: "Hamdardlik bildirish uchun qaysi gap mos?", opts: ["I'm sorry to hear that you are ill.", "I'm glad you are ill.", "Write soon about illness.", "Best wishes to illness."], a: 0, why: "**I'm sorry to hear that…**" },
    { k: "choice", q: "___, you should talk to him. Secondly, you should write to him.", opts: ["Firstly", "Finally of all", "Besides", "However"], a: 0, why: "Birinchi maslahat → **Firstly** (keyin Secondly)." },
    { k: "fill", q: "I'm looking forward to ___ you next week. (see)", a: ["seeing"], why: "**look forward to** + **-ing**." },
    { k: "fill", q: "You should rest. ___, don't worry too much. (boshqa tomondan)", a: ["On the other hand", "However"], hint: "boshqa tomondan", why: "Qarama-qarshi fikr: **On the other hand,** yoki **However,**." },
    { k: "fill", q: "Thanks for your ___. It was great to hear from you. (xat)", a: ["letter", "email", "message"], why: "Javob xatining kirishi: *Thanks for your letter.*" },
    { k: "order", uz: "Tezroq yozing va menga qanday ketayotganini ayting.", words: ["Write", "soon", "and", "tell", "me", "how", "it", "goes."], extra: ["does", "to"], why: "Ichki savolda darak gap tartibi: **how it goes**." },
    { k: "order", uz: "O'rningizda bo'lsam, boshlig'ingiz bilan gaplashardim.", words: ["If", "I", "were", "you,", "I'd", "talk", "to", "your", "manager."], extra: ["will", "am"], alt: [["If", "I", "were", "you,", "I", "would", "talk", "to", "your", "manager."]], why: "**If I were you, I'd** + V1." },
    { k: "order", uz: "Xulosa qilib aytganda, sabrli bo'lishingiz kerak.", words: ["In", "conclusion,", "you", "should", "be", "patient."], extra: ["to", "must"], why: "**In conclusion,** + vergul, keyin gap." },
    { k: "translate", uz: "Xatingiz uchun rahmat.", a: ["Thanks for your letter.", "Thank you for your letter."], why: "**Thanks for your letter** — xat javobining odatiy boshlanishi." },
    { k: "translate", uz: "Hammasi yaxshi bo'lishiga ishonchim komil.", a: ["I'm sure you'll be fine.", "I am sure you will be fine.", "I'm sure everything will be fine.", "I'm sure it will be fine.", "I'm sure everything will be OK."], why: "**I'm sure** + will." },
    { k: "fix", wrong: "I'm looking forward to hear from you.", a: ["I'm looking forward to hearing from you.", "I am looking forward to hearing from you."], hint: "look forward to + ?", why: "**look forward to** + **-ing**." },
    { k: "fix", wrong: "Tell me how does it go.", a: ["Tell me how it goes."], hint: "so'z tartibi", why: "Ichki savolda darak gap tartibi." },
    { k: "tf", q: "Do'stga yozilgan xatni **Yours faithfully,** bilan tugatish tabiiy.", a: false, why: "Do'stga: *Best wishes, / Take care, / All the best*." },
    { k: "speak", say: "Thanks for your letter. I'm sorry to hear that you are upset.", uz: "Xating uchun rahmat. Xafa ekaningni eshitib afsusdaman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi ibora xatni yakunlash uchun mos?", opts: ["Let me know how it goes.", "Thanks for your letter.", "I'm sorry to hear that.", "Firstly, you should rest."], a: 0, why: "Yakun: *Let me know how it goes.*" },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I'm looking forward to your reply.", "I'm looking forward your reply.", "I look forward to reply you.", "I'm looking forward to reply."], a: 0, why: "**look forward to** + ot yoki -ing." },
    { k: "choice", q: "She is very ___ because her friend forgot her birthday.", opts: ["upset", "honest", "sensible", "grateful to"], a: 0, why: "Xafa bo'lish → **upset**." },
    { k: "choice", q: "___, I think you should talk to her. She will understand.", opts: ["In conclusion", "At the first", "On the other side", "Firstly of all"], a: 0, why: "Xulosa uchun **In conclusion,**." },
    { k: "fill", q: "My family always ___ me. (qo'llab-quvvatlaydi)", a: ["supports", "encourages"], why: "Hozirgi zamon, 3-shaxs: *supports*." },
    { k: "fill", q: "You'd better sleep, ___ tired people make mistakes.", a: ["because"], why: "Sabab: **because**." },
    { k: "order", uz: "Xafa bo'lganingizni eshitib afsusdaman.", words: ["I'm", "sorry", "to", "hear", "that", "you", "are", "upset."], extra: ["hearing", "for"], alt: [["I", "am", "sorry", "to", "hear", "that", "you", "are", "upset."]], why: "**I'm sorry to hear that…**" },
    { k: "order", uz: "Boshqa tomondan, o'zingizga qattiqqo'l bo'lmang.", words: ["On", "the", "other", "hand,", "don't", "be", "too", "hard", "on", "yourself."], extra: ["by", "in"], why: "**On the other hand,** + vergul." },
    { k: "fix", wrong: "I advise you write a short letter to him.", a: ["I advise you to write a short letter to him.", "I suggest you write a short letter to him.", "I suggest that you write a short letter to him."], hint: "advise + you + ?", why: "**advise** + odam + **to** + V1." },
    { k: "tf", q: "Xatning har bir qismi uchun alohida abzas yozgan ma'qul.", a: true, why: "Abzaslar xatni tushunarli qiladi." },
  ],
  summary: [
    "Maslahat xati: **salomlashish → kirish (rahmat, hamdardlik) → 2–3 maslahat → xotima → xayrlashish**. Salomdan keyin vergul: *Dear Aziz,*.",
    "Kirish va xotima iboralari: *Thanks for your letter*, *I'm sorry to hear that…*, *Write soon*, *Let me know how it goes*, *I'm looking forward to hearing from you*.",
    "Bog'lovchilar: **Firstly, Secondly, Also, However, On the other hand, In conclusion**; gap boshida bo'lsa, vergul qo'ying.",
    "Tekshiring: *should + V1*, *had better + V1*, *suggest you go*, *some advice*, *how it goes* (so'z tartibi).",
  ],
  homework: "Do'stingiz yozdi: «Ish joyim yoqmayapti, lekin ketishdan qo'rqaman». Unga 80–120 so'zli maslahat xati yozing: salom, kirish, kamida 3 maslahat, xotima va xayrlashish bilan.",
};

export default lesson;
