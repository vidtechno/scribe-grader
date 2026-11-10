import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Idioma va collocation'larni o'rinli ishlataman (a piece of cake, hit the nail on the head, make a decision, heavy rain)",
    "So do I / Neither can I / I hope so bilan javob beraman va whose, whom, which bilan fikrni boyitaman",
    "Nutq belgilari bilan ravon gapiraman, 2 daqiqalik javob (cue card) va qisqa taqdimot qilaman",
    "250 so'zli sharh yoki hikoya yozaman va maqolaning 100-120 so'zli qisqacha mazmunini tuzaman",
  ],
  traps: [
    {
      title: "Neither bilan so'z tartibi",
      md: "O'zbek tilida *men ham* deyilganda tartib erkin: *ham men* ham mumkin. Inglizchada **neither / so dan keyin yordamchi fe'l, keyin ega**: *Neither can I*, *So do I*. *Neither I can* — xato. Yordamchi fe'l birinchi gapdagiga mos bo'ladi.",
      fix: { k: 'fix', wrong: "I can't swim, and neither I can.", a: ["I can't swim, and neither can I.", "I can't swim, and nor can I.", "I can't swim, and I can't either.", "I can't swim and neither can I."], why: "**Neither** + yordamchi fe'l + ega: *neither can I*." },
    },
    {
      title: "Nisbiy gapda ortiqcha so'z",
      md: "O'zbek tilida *biz qolgan mehmonxona, u yerda…* kabi qurilmalar bor, shuning uchun *where we stayed there* deymiz. **Where** o'zi *u yerda* ma'nosini beradi, **there** qo'shish ortiqcha. Xuddi shuningdek, *the man who I spoke to him* — *him* ortiqcha.",
      fix: { k: 'fix', wrong: 'This is the hotel where we stayed there.', a: ['This is the hotel where we stayed.', 'This is the hotel that we stayed at.', 'This is the hotel which we stayed at.', 'This is the hotel we stayed at.', 'This is the hotel in which we stayed.'], why: "**where** joyni o'zi bildiradi: *there* ortiqcha." },
    },
    {
      title: "Idiomada so'z tushib qolishi",
      md: "Idiomani **so'zma-so'z** o'zbekchadan yig'ib bo'lmaydi va uning tarkibi o'zgarmaydi. *Call it a day* (bugunga yetarli, to'xtaymiz) dagi **it** ni tushirib qoldirmang. Yangi idiomani yodlaganda **to'liq ibora bilan** o'rganing va 2-3 ta o'zingizning misolingizni yozing.",
      fix: { k: 'fix', wrong: "It's late, so let's call a day.", a: ["It's late, so let's call it a day.", "It is late, so let's call it a day.", "It's late, so let us call it a day.", "It is late, so let us call it a day."], why: "Ibora: **call it a day**." },
    },
  ],
  culture: "Ingliz tilidagi norasmiy suhbatda idiomalar juda ko'p, lekin ularni me'yorda ishlatish tabiiy eshitiladi: Speaking imtihonida bir-ikki o'rinli idioma yetarli. Britaniyaliklar ko'pincha yumshoq, kamsituvchi ifodalarni yaxshi ko'radi: *not bad* aslida «yaxshi», *I'm not sure that's the best idea* esa ko'pincha «bu yomon fikr» degani. *Actually* ham «hozir» emas, «aslida» ma'nosini beradi: *Actually, I disagree* — «Aslida men rozi emasman». Suhbatda *well, I mean, to be honest* kabi belgilar o'ylash vaqtini beradi va nutqni tabiiy qiladi.",
  project: {
    title: "Mening sharhim yoki hikoyam",
    prompt: "Yaqinda ko'rgan filmingiz, o'qigan kitobingiz yoki borgan joyingiz haqida 200-250 so'zli sharh yozing (yoki «It was the last time I trusted a map» deb boshlanadigan hikoya). Qisqa kirish, mazmun, baho (yaxshi va yomon tomonlari) va tavsiya bilan tuzing. Matnda idioma yoki collocation, bitta nisbiy gap (whose / which / of whom) va nutq belgilarini me'yorida ishlating.",
    criteria: [
      "Matnda aniq tuzilma bor: kirish, mazmun yoki voqea, baho, tavsiya yoki yakun",
      "Kamida 2 ta idioma yoki kuchli collocation'ni o'rinli ishlatdim (ortiqcha emas)",
      "Kamida 1 ta whose / of whom / which bilan nisbiy gap va although yoki despite bilan qarama-qarshilik yozdim",
      "Bog'lovchilar (however, admittedly, to be honest) ishlatdim, zamonlar va predloglarni tekshirdim",
    ],
  },
};
