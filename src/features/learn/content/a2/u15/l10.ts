import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u15-l10",
  title: "Rules at university and at work",
  titleUz: "Universitet va ishdagi qoidalar",
  mini: true,
  kind: 'situation',
  goal: "Universitet va ishdagi qoidalarni **must / mustn't**, **have to / don't have to**, **need to / needn't** va **can / can't** bilan tushuntira olasiz.",
  slides: [
    {
      title: "Dialog: yangi talaba",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sardor", en: "Is it a strict university? What are the rules?", uz: "Bu qattiq universitetmi? Qoidalar qanday?" },
            { who: "Zilola", en: "You have to attend every lecture, and you mustn't use your phone in class.", uz: "Har bir ma'ruzaga qatnashishingiz kerak va darsda telefondan foydalanmasligingiz kerak." },
            { who: "Sardor", en: "Do I have to wear a uniform?", uz: "Forma kiyishim kerakmi?" },
            { who: "Zilola", en: "No, you don't have to. You can wear what you like.", uz: "Yo'q, shart emas. Xohlagan narsangizni kiyishingiz mumkin." },
            { who: "Sardor", en: "And the library?", uz: "Kutubxona-chi?" },
            { who: "Zilola", en: "You can borrow five books, but you can't take them out without a card. You needn't pay, it's free.", uz: "Beshta kitob olishingiz mumkin, lekin kartasiz olib chiqa olmaysiz. To'lashingiz shart emas, bu bepul." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Students have to wear a uniform.", a: false, why: "*No, you don't have to.*" } },
      ],
    },
    {
      title: "Qoida, shart emas va ruxsat",
      blocks: [
        {
          t: "table", head: ["Ma'no", "Universitetda", "Ishda"], speak: [1, 2],
          rows: [
            ["Majburiyat", "You must hand in your assignment on time.", "We have to start at nine."],
            ["Taqiq", "You mustn't talk during an exam.", "Staff mustn't share passwords."],
            ["Shart emas", "You don't have to buy the book.", "You needn't work on Saturday."],
            ["Ruxsat", "You can use the library at night.", "You can't park in front of the entrance."],
          ],
        },
        { t: "tip", tone: "warn", md: "**mustn't** — taqiq (qilmang!). **don't have to / needn't** — shart emas (xohlasangiz qilasiz). Ma'nolari butunlay boshqa!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["You mustn't cheat in the exam.", "You don't have to come on Friday.", "You needn't call me.", "Does she have to attend?"] },
          bad: { title: "Xato", items: ["You don't have to cheat in the exam.", "You mustn't come on Friday. (shart emas demoqchi bo'lsangiz)", "You needn't to call me.", "Does she must attend?"] },
        },
        { t: "check", ex: { k: "choice", q: "Exam room: \"You ___ talk during the exam.\"", opts: ["mustn't", "don't have to", "needn't", "haven't"], a: 0, why: "Taqiq → **mustn't**." } },
        { t: "check", ex: { k: "choice", q: "Optional meeting: \"You ___ come if you are busy.\"", opts: ["mustn't", "needn't", "must", "should to"], a: 1, why: "Shart emas → **needn't** (needn't come, to yo'q)." } },
      ],
    },
    {
      title: "Ish joyida",
      blocks: [
        {
          t: "examples", items: [
            { en: "Staff have to arrive before nine.", uz: "Xodimlar to'qqizgacha kelishi shart.", note: "Qoida (tashqi majburiyat)." },
            { en: "I don't have to work on Sundays.", uz: "Yakshanba kunlari ishlashim shart emas." },
            { en: "Do you need to wear a uniform at work?", uz: "Ishda forma kiyishingiz kerakmi?", note: "**need to** — savol: Do/Does + need to." },
            { en: "You can't use the office phone for private calls.", uz: "Ofis telefonidan shaxsiy qo'ng'iroqlar uchun foydalana olmaysiz.", note: "can't — ruxsat yo'q." },
          ],
        },
        { t: "check", ex: { k: "fill", q: "She is ill. She ___ come to work today. (shart emas)", a: ["doesn't have to", "does not have to", "doesn't need to", "does not need to", "needn't"], why: "Shart emas: **doesn't have to / doesn't need to / needn't**." } },
        { t: "check", ex: { k: "order", uz: "Siz bu yerda telefondan foydalana olmaysiz.", words: ["You", "can't", "use", "your", "phone", "here."], extra: ["to", "mustn't"], alt: [["You", "mustn't", "use", "your", "phone", "here."], ["You", "cannot", "use", "your", "phone", "here."]] } },
      ],
    },
  ],
  words: [
    { en: "lecture", uz: "ma'ruza", ipa: "ˈlek.tʃər", pos: "noun", ex: "The lecture starts at ten.", exUz: "Ma'ruza o'nda boshlanadi." },
    { en: "attend", uz: "qatnashmoq", ipa: "əˈtend", pos: "verb", ex: "You have to attend every lesson.", exUz: "Har bir darsda qatnashishingiz kerak." },
    { en: "library", uz: "kutubxona", ipa: "ˈlaɪ.brər.i", pos: "noun", ex: "I study in the library.", exUz: "Men kutubxonada o'qiyman." },
    { en: "staff", uz: "xodimlar", ipa: "stɑːf", pos: "noun", ex: "The staff are very friendly.", exUz: "Xodimlar juda xushmuomala." },
    { en: "absent", uz: "yo'q, qatnashmagan", ipa: "ˈæb.sənt", pos: "adj", ex: "Aziz was absent yesterday.", exUz: "Aziz kecha yo'q edi." },
    { en: "assignment", uz: "topshiriq", ipa: "əˈsaɪn.mənt", pos: "noun", ex: "I must hand in my assignment today.", exUz: "Bugun topshirig'imni topshirishim kerak." },
  ],
  practice: [
    { k: "match", pairs: [["lecture", "ma'ruza"], ["attend", "qatnashmoq"], ["library", "kutubxona"], ["staff", "xodimlar"], ["assignment", "topshiriq"]] },
    { k: "listen", say: "You mustn't use your phone in class.", opts: ["You mustn't use your phone in class.", "You don't have to use your phone in class.", "You can use your phone in class."], a: 0 },
    { k: "choice", q: "Students ___ attend every lecture. It's a rule.", opts: ["have to", "has to", "must to", "needn't"], a: 0, why: "**have to** (students — ko'plik)." },
    { k: "choice", q: "It's a free library. You ___ pay.", opts: ["don't have to", "mustn't", "must", "can't to"], a: 0, why: "Bepul → shart emas." },
    { k: "choice", q: "The sign says: \"Staff only.\" Students ___ go in.", opts: ["can't", "needn't", "don't have to", "should to"], a: 0, why: "Ruxsat yo'q → **can't**." },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She has to start at nine.", "Does he have to wear a tie?", "You needn't to wait.", "We mustn't be late."], a: 2, why: "To'g'ri: *You needn't wait.*" },
    { k: "fill", q: "You ___ cheat in an exam. It is forbidden.", a: ["mustn't", "must not"], why: "Taqiq → **mustn't**." },
    { k: "fill", q: "Do you ___ to hand in the assignment today?", a: ["have", "need"], why: "**Do you have to / need to …?**" },
    { k: "fix", wrong: "She musts attend the lecture.", a: ["She must attend the lecture.", "She has to attend the lecture."], why: "must -s olmaydi." },
    { k: "fix", wrong: "You don't have to talk during the exam. It's a rule.", a: ["You mustn't talk during the exam. It's a rule.", "You must not talk during the exam. It's a rule."], why: "Taqiq → **mustn't**." },
    { k: "tf", q: "**You needn't come** = Kelmasangiz ham bo'ladi.", a: true },
    { k: "order", uz: "Bizga forma kiyish shart emas.", words: ["We", "don't", "have", "to", "wear", "a", "uniform."], extra: ["must", "mustn't"], alt: [["We", "do", "not", "have", "to", "wear", "a", "uniform."]] },
    { k: "translate", uz: "Ma'ruzada telefondan foydalanmasligingiz kerak.", a: ["You mustn't use your phone in the lecture.", "You must not use your phone in the lecture.", "You mustn't use your phone during the lecture."] },
    { k: "speak", say: "We have to start at nine, but we don't have to work on Saturday.", uz: "Biz to'qqizda boshlashimiz kerak, lekin shanba kuni ishlashimiz shart emas." },
  ],
  quiz: [
    { k: "choice", q: "No-smoking rule at work: \"Staff ___ smoke inside.\"", opts: ["mustn't", "don't have to", "needn't", "doesn't"], a: 0, why: "Taqiq → **mustn't**." },
    { k: "choice", q: "\"Do I have to buy the book?\" — \"No, you ___. You can borrow it.\"", opts: ["don't", "mustn't", "can't", "needn't to"], a: 0, why: "**No, you don't (have to).**" },
    { k: "choice", q: "Which sentence is NOT correct?", opts: ["He needn't wait.", "He doesn't need to wait.", "He doesn't have to wait.", "He needn't to wait."], a: 3, why: "needn't dan keyin to yo'q." },
    { k: "choice", q: "You can use the library at night. This means:", opts: ["It is allowed.", "It is forbidden.", "It is compulsory.", "It is impossible."], a: 0, why: "can = ruxsat." },
    { k: "fill", q: "Yesterday I ___ to hand in my assignment. (kerak edi)", a: ["had"], why: "**had to**." },
    { k: "tf", q: "**You can't park here** = Bu yerda mashina qo'yish mumkin emas.", a: true, why: "can't = ruxsat yo'q." },
    { k: "order", uz: "Siz kutubxonada gaplasha olmaysiz.", words: ["You", "can't", "talk", "in", "the", "library."], extra: ["to", "needn't"], alt: [["You", "mustn't", "talk", "in", "the", "library."], ["You", "cannot", "talk", "in", "the", "library."]] },
    { k: "translate", uz: "Shanba kuni ishlashim shart emas.", a: ["I don't have to work on Saturday.", "I don't need to work on Saturday.", "I needn't work on Saturday.", "I do not have to work on Saturday."] },
  ],
  summary: [
    "**must / have to** — majburiyat; **mustn't** — taqiq (qilmang!).",
    "**don't have to / don't need to / needn't** — shart emas. **needn't** dan keyin to yo'q.",
    "**can** — ruxsat bor; **can't** — ruxsat yo'q: *You can't park here.*",
    "Savol: **Do I have to…? Do you need to…?** (Does she have to…?)",
  ],
  homework: "O'z universitetingiz yoki ishingiz qoidalarini yozing: 2 ta majburiyat (**have to / must**), 1 ta taqiq (**mustn't**), 1 ta shart emas (**don't have to**), 1 ta ruxsat (**can**).",
};

export default lesson;
