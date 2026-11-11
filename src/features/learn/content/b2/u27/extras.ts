import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Gerund va infinitive qoliplarini to'g'ri tanlayman (decide to go, avoid making, look forward to meeting)",
    "Ish joyidagi qoidalar va ruxsatlar haqida mustn't, don't have to, be supposed to bilan aniq gapiraman",
    "Rasmiy va norasmiy uslubni farqlayman, rasmiy email va cover letter yozaman",
    "Yig'ilishda fikr bildiraman, muloyim e'tiroz bildiraman va taklif kiritaman; ishga intervyuda o'zimni tanishtiraman",
  ],
  traps: [
    {
      title: "Look forward to dan keyin infinitive",
      md: "O'zbek tilida *uchrashishni intiqlik bilan kutaman* deganda fe'l asl shaklida turadi, shuning uchun inglizchada ham *look forward to meet* deymiz. Lekin bu yerdagi **to** — **predlog**, predlogdan keyin esa doim **-ing** keladi: *look forward to meeting*. Xuddi shunday: *insist on paying*, *succeed in finding*, *object to working*.",
      fix: { k: 'fix', wrong: 'I look forward to meet you next week.', a: ['I look forward to meeting you next week.', "I'm looking forward to meeting you next week.", 'I am looking forward to meeting you next week.'], why: "**look forward to** + **-ing**: *to* bu yerda predlog." },
    },
    {
      title: "Mustn't va don't have to ni aralashtirish",
      md: "O'zbekchada *kerak emas* va *mumkin emas* ikki alohida ibora, lekin tarjimada ularni *must not* deb birlashtirib yuboramiz. **mustn't** — **taqiq** (qilish mumkin emas), **don't have to** — **shart emas** (xohlasangiz qilasiz). Ma'nolar butunlay boshqa.",
      fix: { k: 'fix', wrong: "You mustn't come on Saturday; it is optional.", a: ["You don't have to come on Saturday; it is optional.", "You don't need to come on Saturday; it is optional.", "You needn't come on Saturday; it is optional."], why: "Ixtiyoriy bo'lsa — **don't have to**. **mustn't** taqiqni bildiradi." },
    },
    {
      title: "Predlogsiz fe'llarga predlog qo'shish",
      md: "O'zbek tilida *byudjet haqida muhokama qildik* deymiz, shuning uchun *discuss about* xatosi keng tarqalgan. Inglizchada **discuss**, **marry**, **enter**, **contact**, **attend** o'timli fe'llar va predlog olmaydi: *discuss the budget*. Aksincha, *depend on*, *apologise for*, *succeed in* predlog talab qiladi.",
      fix: { k: 'fix', wrong: 'We discussed about the budget at the meeting.', a: ['We discussed the budget at the meeting.'], why: "**discuss** o'timli fe'l, predlogsiz ishlatiladi." },
    },
  ],
  culture: "Britaniyada ish xatlarining tuzilishi qat'iy. Ismini bilmaydigan odamga **Dear Sir or Madam** deb yozib, **Yours faithfully** bilan tugatiladi; ismini bilsangiz — **Dear Ms Taylor … Yours sincerely**. Ish joyida ham muloyimlik qadrlanadi: tanqid ko'pincha yumshatiladi (*I'm afraid there may be a problem…*, *Would you mind…?*), shuning uchun to'g'ridan-to'g'ri *You are wrong* ko'pincha qo'pol eshitiladi. Yig'ilishdagi *That's an interesting idea, but…* ko'pincha hali rozi emasligingizni bildiradi, shuni yodda tuting.",
  project: {
    title: "Rasmiy so'rov xati va qisqa taklif",
    prompt: "Haqiqiy yoki o'ylab topilgan kompaniyaga 130-180 so'zli rasmiy email yozing: kurs, xizmat yoki ish lavozimi haqida so'rang. So'ngra yig'ilishda aytadigan 3-4 gaplik taklif (proposal) qo'shing: sabab va keyingi qadamni ko'rsating. Matnni o'qib chiqib, qisqartmalar va norasmiy so'zlarni rasmiylari bilan almashtiring.",
    criteria: [
      "Murojaat va yakun mos (Dear Mr / Ms … Yours sincerely yoki Dear Sir or Madam … Yours faithfully)",
      "I am writing to… va I would be grateful if you could… iboralarini ishlatdim; qisqartma yo'q",
      "Kamida 3 ta gerund / infinitive qolipini to'g'ri ishlatdim (look forward to hearing, decide to, avoid -ing)",
      "Bitta nominalizatsiya (an increase in…) va bitta majburiyat yoki ruxsat iborasi (be required to, mustn't, don't have to) ishlatdim",
    ],
  },
};
