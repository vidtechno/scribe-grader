import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Fe'l bilan gerund yoki infinitive ni to'g'ri tanlayman (enjoy working, decide to apply)",
    "Kelajak rejalarim va bashoratlarimni will, going to, Future Continuous va Future Perfect bilan ayta olaman",
    "Ish suhbatida o'zim haqimda gapiraman va texnik muammoni tushuntiraman",
    "Rasmiy elektron xat va qo'shimcha xat yozaman",
  ],
  traps: [
    {
      title: "for + fe'l o'rniga to + fe'l",
      md: "O'zbekchada *o'qish uchun* deymiz va ko'pincha inglizchada ham **for study** deb yuboramiz. Maqsadni fe'l bilan aytsak, **to + fe'l** kerak: *I came here to study.* **for** dan keyin faqat ot yoki -ing keladi.",
      fix: { k: 'fix', wrong: 'I use this app for learn new words.', a: ['I use this app to learn new words.', 'I use this app for learning new words.'], why: "Maqsad + fe'l → **to learn**; narsa vazifasi → **for learning**." },
    },
    {
      title: "interested to emas, interested in + -ing",
      md: "O'zbekchada *ishlashga qiziqaman* deymiz va inglizchaga **interested to work** deb tarjima qilamiz. Inglizchada **interested in** kerak, predlogdan keyin esa fe'l **-ing** shaklida: *I am interested in working here.* Xuddi shunday: *good at*, *look forward to*.",
      fix: { k: 'fix', wrong: 'I am interested to work in your company.', a: ['I am interested in working in your company.', "I'm interested in working in your company.", 'I am interested in working for your company.', "I'm interested in working for your company."], why: "**interested in** + -ing." },
    },
    {
      title: "Kelasi zamon: when dan keyin will",
      md: "O'zbek tilida *ertaga kelsang, qo'ng'iroq qilaman* deymiz va fe'l kelasi zamonda turadi. Inglizchada **when, as soon as, before, until, by the time** dan keyin **will** ishlatilmaydi, Present Simple keladi: *I'll call you when I arrive.*",
      fix: { k: 'fix', wrong: "I'll call you when I will arrive.", a: ["I'll call you when I arrive.", 'I will call you when I arrive.'], why: "**when** dan keyin Present Simple: **arrive**." },
    },
  ],
  culture: "Ish suhbatida va rasmiy xatda inglizlar to'g'ridan-to'g'ri va ortiqcha maqtanchoqlikdan qochadi: *I'm quite good at…, I think I would be able to…* kabi yumshoq iboralar odatiy. Muloyim iltimos (*Would it be possible to…?*) va minnatdorchilik (*Thank you for your time*) muhim. Muddatni o'tkazib yuborish xavfi bo'lsa, oldindan xabar bering: *I'm afraid I won't finish on time.* Bu mas'uliyatli ko'rinadi.",
  project: {
    title: "Ish uchun qo'shimcha xat",
    prompt: "O'zingiz tanlagan ish e'loni uchun 7-10 gapdan iborat qo'shimcha xat (cover email) yozing. Xat Dear… bilan boshlansin, nega ariza berayotganingiz, tajribangiz, bir kuchli tomoningiz, besh yillik rejangiz va qachon boshlay olishingiz haqida bo'lsin. Yakunda rasmiy tugatish yozing.",
    criteria: [
      "Rasmiy salomlashish va tugatish ishlatdim (Dear… / Yours sincerely yoki faithfully)",
      "good at / interested in / look forward to dan keyin -ing ishlatdim",
      "Maqsadni to yoki so that bilan ifodaladim",
      "Kelajak rejasini will be -ing yoki will have V3 bilan yozdim",
    ],
  },
};
