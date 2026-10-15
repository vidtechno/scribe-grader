import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u22-l3",
  title: "Future Continuous and Future Perfect",
  titleUz: "Future Continuous va Future Perfect: kelajakdagi jarayon va natija",
  goal: "Kelajakdagi **jarayon** (*This time tomorrow I'll be flying*) va kelajakdagi biror vaqtgacha **tugagan natija** (*By Friday I'll have finished*) ni ayta olasiz; **by** va **by the time** dan to'g'ri foydalanasiz.",
  slides: [
    {
      title: "Kelajakdagi jarayon: Future Continuous",
      blocks: [
        { t: "p", md: "**Future Continuous** kelajakdagi **aniq bir paytda davom etayotgan** ishni bildiradi. Shaklni oddiy: **will be + fe'l-ing**." },
        {
          t: "table", head: ["", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Darak", "will be + V-ing", "At nine tomorrow I'll be teaching."],
            ["Inkor", "won't be + V-ing", "She won't be working on Friday."],
            ["Savol", "Will + ega + be + V-ing?", "Will you be using the laptop tonight?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "This time next week I'll be lying on a beach.", uz: "Kelasi hafta shu paytda plyajda yotgan bo'laman.", note: "Kelajakdagi **aniq paytda** davom etayotgan ish." },
            { en: "Don't call me at eight. I'll be having dinner.", uz: "Soat sakkizda qo'ng'iroq qilmang. Kechki ovqat qilayotgan bo'laman." },
            { en: "In two years she'll be studying at university.", uz: "Ikki yildan keyin u universitetda o'qiyotgan bo'ladi." },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbekchada «shu paytda ... **qilayotgan bo'laman**» deymiz. Inglizchada bu aynan **will be + -ing**. **This time tomorrow / next week / at six tomorrow evening** kabi iboralar bilan juda ko'p ishlatiladi." },
        { t: "check", ex: { k: "choice", q: "This time tomorrow, we ___ in the exam hall.", opts: ["will be sitting", "will sit", "are sit", "sat"], a: 0, why: "Kelajakdagi aniq paytda davom etayotgan ish → **will be sitting**." } },
      ],
    },
    {
      title: "Future Continuous: yana ikki foydasi",
      blocks: [
        { t: "p", md: "**1. Muloyim savol.** Future Continuous boshqaning rejalarini so'rashda yumshoq va muloyim ohang beradi. Bu «sen nima qilmoqchisan?» degan bosimsiz so'rash usuli." },
        {
          t: "examples", items: [
            { en: "Will you be using the car this evening?", uz: "Bugun kechqurun mashinadan foydalanasizmi?", note: "Mashinani olmoqchisiz, lekin bosim qilmayapsiz." },
            { en: "Will you be coming to the meeting tomorrow?", uz: "Ertangi yig'ilishga kelasizmi?" },
          ],
        },
        { t: "p", md: "**2. Odatdagidek yuz beradigan kelajak ish.** Bu reja emas, balki voqealar tabiiy rivoji: *I'll be seeing Karim on Monday, so I can give him the book.* (Dushanba kuni baribir Karimni ko'raman.)" },
        { t: "tip", tone: "warn", md: "Holat fe'llari (*know, like, want, believe*) odatda continuous shaklida kelmaydi: *I'll know the result on Friday*, *I'll be knowing* emas." },
        { t: "check", ex: { k: "choice", q: "Which question is the most polite way to ask about someone's plans?", opts: ["Will you be using the printer this afternoon?", "Do you use the printer?", "Are you using the printer?", "Use the printer, please."], a: 0, why: "**Will you be using…?** — muloyim, bosimsiz savol." } },
        { t: "check", ex: { k: "fix", wrong: "This time tomorrow I will fly to Istanbul.", a: ["This time tomorrow I will be flying to Istanbul.", "This time tomorrow I'll be flying to Istanbul."], hint: "kelajakdagi aniq paytda davom etayotgan ish", why: "Aniq paytda davom etayotgan ish → **will be flying**." } },
      ],
    },
    {
      title: "Kelajakdagi natija: Future Perfect",
      blocks: [
        { t: "p", md: "**Future Perfect** kelajakdagi biror paytgacha **tugagan** ishni bildiradi. Diqqat qiling: bu yerda gap jarayon haqida emas, **natija** haqida. Shakl: **will have + V3**." },
        {
          t: "table", head: ["", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Darak", "will have + V3", "By June I'll have finished the course."],
            ["Inkor", "won't have + V3", "They won't have arrived by six."],
            ["Savol", "Will + ega + have + V3?", "Will you have finished by Friday?"],
          ],
        },
        {
          t: "examples", items: [
            { en: "By next year I'll have saved enough money for a laptop.", uz: "Kelasi yilga borib noutbuk uchun yetarli pul yig'gan bo'laman." },
            { en: "By the time you arrive, we'll have eaten.", uz: "Siz yetib kelguningizcha, biz ovqatlanib bo'lamiz." },
            { en: "In July she'll have worked here for ten years.", uz: "Iyulda u bu yerda o'n yil ishlagan bo'ladi.", note: "**for + muddat** — davom etgan vaqtni ham aytish mumkin." },
          ],
        },
        { t: "tip", tone: "good", md: "O'zbekchada «... **bo'lgunicha** u allaqachon ... **qilib bo'lgan bo'ladi**» deymiz — aynan **will have + V3**. Odatda **by + vaqt** (*by Friday, by 2030, by then*) yoki **by the time + Present Simple** bilan keladi." },
        { t: "check", ex: { k: "fill", q: "By the end of the year, I ___ my degree.", a: ["will have finished", "'ll have finished"], hint: "finish", why: "Kelajakdagi paytgacha tugagan natija → **will have finished**." } },
        { t: "check", ex: { k: "choice", q: "By the time the meeting starts, she ___ the slides.", opts: ["will have prepared", "will be preparing", "prepares", "prepared"], a: 0, why: "Yig'ilish boshlanguncha tayyor bo'lib bo'ladi → **will have prepared**." } },
      ],
    },
    {
      title: "by, by the time va until",
      blocks: [
        { t: "p", md: "Bu so'zlar kelajak haqida gapirganda tez-tez adashtiriladi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["by + vaqt", "...dan kechikmay, ... gacha (muddat)", "I'll finish by Friday."],
            ["by the time + Present Simple", "...ga yetib kelgunicha", "By the time he comes, I'll have left."],
            ["until + vaqt", "...gacha (to'xtamay davom etadi)", "I'll work until Friday."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["By the time he arrives, we'll have started.", "I'll stay until six.", "I'll have finished by six."] },
          bad: { title: "Xato", items: ["By the time he will arrive, we'll have started.", "I'll finish until six.", "I'll have finished since six."] },
        },
        { t: "tip", tone: "warn", md: "**by the time** dan keyin ham **will** ishlatilmaydi — xuddi *when* kabi, Present Simple: *by the time he arrives*." },
        { t: "check", ex: { k: "choice", q: "I'll work ___ ten o'clock, then I'll go to bed.", opts: ["until", "by the time", "for", "since"], a: 0, why: "Ish **o'n gacha davom etadi** → **until**." } },
        { t: "check", ex: { k: "choice", q: "I'll send the report ___ Wednesday at the latest.", opts: ["by", "until", "during", "since"], a: 0, why: "Muddat: «chorshanbadan kechikmay» → **by**." } },
      ],
    },
    {
      title: "Dialog: yig'ilishdan oldin",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Helen", en: "Aziz, will you be working on the budget this afternoon?", uz: "Aziz, bugun tushdan keyin byudjet ustida ishlaysanmi?" },
            { who: "Aziz", en: "Yes, I'll be working on it until four. Why?", uz: "Ha, to'rtgacha ustida ishlayotgan bo'laman. Nima edi?" },
            { who: "Helen", en: "I need the final numbers by five. Will you have finished by then?", uz: "Menga oxirgi raqamlar soat beshgacha kerak. U vaqtga tugatib bo'lasanmi?" },
            { who: "Aziz", en: "I think so. By the time the meeting starts, I'll have sent them to you.", uz: "Shunday deb o'ylayman. Yig'ilish boshlanguncha sizga yuborib bo'laman." },
            { who: "Helen", en: "Great. This time tomorrow I'll be sitting on a train to London, so please don't forget.", uz: "Ajoyib. Ertaga shu paytda men Londonga poyezdda ketayotgan bo'laman, shuning uchun, iltimos, unutmang." },
            { who: "Aziz", en: "Don't worry. I'll have everything ready.", uz: "Xavotir olmang. Hammasi tayyor bo'ladi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Aziz will have sent the numbers before the meeting starts.", a: true, why: "*By the time the meeting starts, I'll have sent them* — yig'ilishdan oldin yuborib bo'ladi." } },
      ],
    },
    {
      title: "O'qing: 2030-yilda",
      blocks: [
        {
          t: "text", title: "Life in 2030", voice: "emma",
          en: "What will our lives be like in 2030? Many people believe that by then most of us will have started using new kinds of technology every day. In ten years' time, students will probably be learning with the help of smart programs, and many people will be working from home several days a week. By 2030 doctors will have found better ways to treat some illnesses, and cars will be driving themselves in some cities. Of course, nobody can be sure. But one thing is certain: this time in ten years, we will be talking about things that we cannot imagine today.",
          uz: "2030-yilda hayotimiz qanday bo'ladi? Ko'pchilik o'sha vaqtga borib ko'pimiz har kuni yangi turdagi texnologiyadan foydalanishni boshlagan bo'lamiz deb hisoblaydi. O'n yildan keyin talabalar ehtimol aqlli dasturlar yordamida o'qiyotgan bo'ladi, ko'p odamlar esa haftada bir necha kun uydan ishlayotgan bo'ladi. 2030-yilga borib shifokorlar ba'zi kasalliklarni davolashning yaxshiroq usullarini topgan bo'ladi, ba'zi shaharlarda mashinalar o'zi haydalayotgan bo'ladi. Albatta, hech kim aniq bilmaydi. Lekin bir narsa aniq: o'n yildan keyin shu paytda biz bugun tasavvur qila olmaydigan narsalar haqida gaplashayotgan bo'lamiz.",
        },
        { t: "check", ex: { k: "tf", q: "The text says that everyone is sure about the future.", a: false, why: "*Nobody can be sure* — hech kim aniq bilmaydi." } },
        { t: "check", ex: { k: "choice", q: "\"By 2030 doctors will have found better ways to treat some illnesses\" shows...", opts: ["a result finished before a future point", "an action in progress at a future moment", "a habit", "a past event"], a: 0, why: "**will have + V3** — kelajakdagi paytgacha tugagan natija." } },
      ],
    },
  ],
  words: [
    { en: "deadline", uz: "oxirgi muddat", ipa: "ˈded.laɪn", pos: "noun", ex: "The deadline for the project is next Friday.", exUz: "Loyiha uchun oxirgi muddat kelasi juma." },
    { en: "submit", uz: "topshirmoq, yubormoq", ipa: "səbˈmɪt", pos: "verb", ex: "You must submit your essay online.", exUz: "Esseni onlayn topshirishingiz kerak." },
    { en: "progress", uz: "taraqqiyot, yutuq", ipa: "ˈprəʊ.ɡres", pos: "noun", ex: "She is making good progress in English.", exUz: "U ingliz tilida yaxshi o'sib bormoqda." },
    { en: "draft", uz: "qoralama", ipa: "drɑːft", pos: "noun", ex: "I've written the first draft of my report.", exUz: "Hisobotimning birinchi qoralamasini yozdim." },
    { en: "assignment", uz: "topshiriq, vazifa", ipa: "əˈsaɪn.mənt", pos: "noun", ex: "The assignment is due on Monday.", exUz: "Topshiriqni dushanbagacha topshirish kerak." },
    { en: "achieve", uz: "erishmoq", ipa: "əˈtʃiːv", pos: "verb", ex: "She worked hard to achieve her goals.", exUz: "U maqsadlariga erishish uchun qattiq mehnat qildi." },
    { en: "eventually", uz: "oxir-oqibat", ipa: "ɪˈven.tʃu.ə.li", pos: "adv", ex: "Eventually, he found a better job.", exUz: "Oxir-oqibat u yaxshiroq ish topdi." },
    { en: "complete", uz: "tugatmoq, to'ldirmoq", ipa: "kəmˈpliːt", pos: "verb", ex: "Please complete the form in capital letters.", exUz: "Iltimos, shaklni bosh harflar bilan to'ldiring." },
    { en: "review", uz: "ko'rib chiqmoq, takrorlamoq", ipa: "rɪˈvjuː", pos: "verb", ex: "I'll review my notes before the test.", exUz: "Testdan oldin yozuvlarimni takrorlayman." },
    { en: "by then", uz: "o'sha vaqtga borib", ipa: "baɪ ðen", pos: "phrase", ex: "I'll finish at six, so by then you'll have my answer.", exUz: "Oltida tugataman, o'sha vaqtga borib javobimni olasiz." },
  ],
  practice: [
    { k: "match", pairs: [["deadline", "oxirgi muddat"], ["submit", "topshirmoq"], ["draft", "qoralama"], ["achieve", "erishmoq"], ["eventually", "oxir-oqibat"], ["review", "takrorlamoq"]] },
    { k: "choice", q: "At eight tomorrow evening, I ___ my homework.", opts: ["will be doing", "will have done", "do", "did"], a: 0, why: "Aniq paytda davom etayotgan ish → **Future Continuous**." },
    { k: "choice", q: "By Friday, they ___ the project.", opts: ["will have completed", "will be completing", "complete", "completes"], a: 0, why: "Juma kunigacha tugagan natija → **Future Perfect**." },
    { k: "choice", q: "Don't phone at eight. We ___ dinner.", opts: ["will be having", "will have had", "had", "have"], a: 0, why: "Shu paytda davom etayotgan bo'lamiz → **will be having**." },
    { k: "fill", q: "This time next month I ___ in Berlin.", a: ["will be working", "'ll be working"], hint: "work", uz: "Kelasi oy shu paytda Berlinda ishlayotgan bo'laman.", why: "Aniq paytda davom etayotgan ish → **will be working**." },
    { k: "fill", q: "By the time you read this, I ___ the exam.", a: ["will have taken", "'ll have taken"], hint: "take", uz: "Siz buni o'qiguningizcha, men imtihon topshirib bo'laman.", why: "Natija → **will have taken**." },
    { k: "fill", q: "I'll wait for you ___ five o'clock, but not longer.", a: ["until", "till"], uz: "Sizni beshgacha kutaman, undan ortiq emas.", why: "Davom etadigan ish → **until**." },
    { k: "order", uz: "Kelasi yilga borib men ingliz tilini o'rganib bo'laman.", words: ["By", "next", "year", "I", "will", "have", "learned", "English."], extra: ["be", "learning"], alt: [["By", "next", "year", "I'll", "have", "learned", "English."], ["I", "will", "have", "learned", "English", "by", "next", "year."], ["I'll", "have", "learned", "English", "by", "next", "year."], ["By", "next", "year", "I", "will", "have", "learnt", "English."], ["By", "next", "year", "I'll", "have", "learnt", "English."], ["I", "will", "have", "learnt", "English", "by", "next", "year."], ["I'll", "have", "learnt", "English", "by", "next", "year."]], why: "Natija → **will have + V3**." },
    { k: "order", uz: "Ertaga shu paytda men samolyotda bo'laman.", words: ["This", "time", "tomorrow", "I", "will", "be", "flying."], extra: ["have", "fly"], alt: [["This", "time", "tomorrow", "I'll", "be", "flying."], ["I", "will", "be", "flying", "this", "time", "tomorrow."], ["I'll", "be", "flying", "this", "time", "tomorrow."]], why: "**will be + -ing**." },
    { k: "tf", q: "\"By the time she will arrive, we'll have left\" is correct.", a: false, why: "**by the time** dan keyin Present Simple: *by the time she arrives*." },
    { k: "tf", q: "\"Will you be using the car tonight?\" is a polite question about someone's plans.", a: true, why: "Future Continuous savoli muloyim eshitiladi." },
    { k: "fix", wrong: "By tomorrow evening I will finish the report.", a: ["By tomorrow evening I will have finished the report.", "By tomorrow evening I'll have finished the report."], hint: "by + vaqt: natija", why: "**by** bilan natija → **will have finished**." },
    { k: "fix", wrong: "I will have waited here until you come back.", a: ["I will wait here until you come back.", "I'll wait here until you come back.", "I will be waiting here until you come back.", "I'll be waiting here until you come back."], hint: "until: davom etadigan ish", why: "**until** bilan davom etadigan ish: *I'll wait*." },
    { k: "dictation", say: "By the time you arrive, I will have finished.", uz: "Siz yetib kelguningizcha, men tugatib bo'laman.", why: "**by the time** + Present Simple; bosh gapda **will have + V3**." },
    { k: "listen", say: "This time tomorrow I'll be sitting in a lecture.", opts: ["This time tomorrow I'll be sitting in a lecture.", "This time tomorrow I'll have sat in a lecture.", "This time tomorrow I sat in a lecture.", "This time yesterday I was sitting in a lecture."], a: 0, why: "**I'll be sitting** — Future Continuous." },
    { k: "speak", say: "By Friday I'll have submitted my assignment.", uz: "Jumaga borib topshirig'imni topshirib bo'laman." },
  ],
  quiz: [
    { k: "choice", q: "At six tomorrow evening, Madina ___ her presentation.", opts: ["will be giving", "will have given", "gives", "gave"], a: 0, why: "Aniq paytda davom etayotgan ish → Future Continuous." },
    { k: "choice", q: "By the time we get there, the film ___.", opts: ["will have started", "will be starting", "starts", "started"], a: 0, why: "Biz yetguncha boshlanib bo'ladi → Future Perfect." },
    { k: "choice", q: "Will you ___ the laptop this evening? I'd like to borrow it.", opts: ["be using", "have used", "use it", "using"], a: 0, why: "Muloyim savol: **Will you be using…?**" },
    { k: "choice", q: "I'll have finished ___ ten o'clock.", opts: ["by", "until", "since", "during"], a: 0, why: "Muddat: **by**." },
    { k: "fill", q: "In June, Sara ___ here for two years.", a: ["will have worked", "'ll have worked"], hint: "work", why: "Iyunga borib ikki yil bo'ladi → **will have worked**." },
    { k: "fill", q: "Don't call me tonight at nine. I ___ a film.", a: ["will be watching", "'ll be watching"], hint: "watch", why: "Shu paytda davom etayotgan bo'laman → **will be watching**." },
    { k: "fix", wrong: "By the time the lesson will start, I'll have arrived.", a: ["By the time the lesson starts, I'll have arrived.", "By the time the lesson starts, I will have arrived."], hint: "by the time dan keyin", why: "**by the time** dan keyin Present Simple." },
    { k: "fix", wrong: "Next year at this time I will have studied in Seoul.", a: ["Next year at this time I will be studying in Seoul.", "Next year at this time I'll be studying in Seoul."], hint: "aniq paytda davom etayotgan ish", why: "Aniq paytda davom etayotgan ish → **will be studying**." },
    { k: "order", uz: "Ertaga soat beshga borib hammasini tugatgan bo'laman.", words: ["I", "will", "have", "finished", "everything", "by", "five", "tomorrow."], extra: ["until", "be"], alt: [["I'll", "have", "finished", "everything", "by", "five", "tomorrow."], ["By", "five", "tomorrow", "I", "will", "have", "finished", "everything."], ["By", "five", "tomorrow", "I'll", "have", "finished", "everything."], ["Tomorrow", "I", "will", "have", "finished", "everything", "by", "five."]], why: "**will have + V3** + by." },
    { k: "tf", q: "We usually do not use will be knowing, because know is a state verb.", a: true, why: "Holat fe'llari (*know*) odatda continuous bo'lmaydi: *I'll know soon.*" },
  ],
  summary: [
    "**Future Continuous** (*will be + -ing*): kelajakdagi aniq paytda davom etayotgan ish — *This time tomorrow I'll be flying.*",
    "**Will you be + -ing?** — boshqaning rejalari haqida muloyim savol: *Will you be using the car tonight?*",
    "**Future Perfect** (*will have + V3*): kelajakdagi paytgacha tugagan natija — *By Friday I'll have finished.*",
    "**by** — muddat (kechikmay), **until** — to'xtamay davom etish: *I'll finish by six. I'll work until six.*",
    "**by the time, when, until** dan keyin Present Simple: *By the time you arrive, I'll have left.*",
  ],
  homework: "Kelasi hafta uchun 4 ta gap yozing: ikkita **Future Continuous** (*Tomorrow at ten I'll be…*) va ikkita **Future Perfect** (*By Sunday I'll have…*). Har bir gapda vaqt belgisi bo'lsin.",
};

export default lesson;
