import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Fikrimni asoslab aytaman va boshqalarning fikriga muloyim e'tiroz bildiraman",
    "however, therefore, in addition kabi so'zlar bilan fikrlarimni bog'layman",
    "Afzallik va kamchiliklarni taqqoslab, xulosa chiqaraman",
    "Qisqa nutq yoki fikr bildiruvchi esse tayyorlayman",
  ],
  traps: [
    {
      title: "Although va but birga",
      md: "O'zbek tilida *garchi … lekin …* deymiz va ikkalasini ham ishlatamiz. Inglizchada **although** va **but** bitta gapda birga kelmaydi: yoki *Although …, …*, yoki *…, but …*.",
      fix: { k: 'fix', wrong: 'Although it was late, but we kept working.', a: ['Although it was late, we kept working.', 'It was late, but we kept working.'], why: "**Although** va **but** birga ishlatilmaydi." },
    },
    {
      title: "I am agree",
      md: "O'zbekcha *roziman* so'zini *men rozi* deb tarjima qilamiz va *am* qo'shamiz. Inglizchada **agree** — fe'l: *I agree with you.* Inkorda: *I don't agree.*",
      fix: { k: 'fix', wrong: 'I am agree with you.', a: ['I agree with you.'], why: "**agree** — fe'l, **am** kerak emas." },
    },
    {
      title: "if bilan will",
      md: "O'zbek tilida *agar yomg'ir yog'sa* deymiz, kelasi zamon shart emas. Inglizchada ham **if** qismida hozirgi zamon turadi, **will** esa natija qismida: *If it rains, we will stay at home.*",
      fix: { k: 'fix', wrong: 'If it will rain, we will stay at home.', a: ['If it rains, we will stay at home.'], why: "**if** dan keyin **will** ishlatilmaydi." },
    },
  ],
  culture: "Inglizcha munozarada (ayniqsa Buyuk Britaniyada) to'g'ridan-to'g'ri *No, you are wrong* deyish qo'pol eshitiladi. Odatda avval *I see your point* yoki *That's interesting* deyiladi, keyin *but* yoki *however* bilan boshqa fikr aytiladi. Yumshatish iboralari (*I'm afraid…*, *I'm not sure that…*) kamtarlik emas, muloyimlik belgisidir.",
  project: {
    title: "Fikr bildiruvchi mini-esse",
    prompt: "Bitta mavzu tanlang (masalan, onlayn o'qish yoki uydan ishlash) va 8–10 gapdan iborat mini-esse yozing: birinchi gapda fikringizni ayting, ikkita sabab keltiring, bitta qiyinchilikni ko'rsating va xulosa bilan tugating.",
    criteria: [
      "Birinchi gapda fikrimni aniq aytdim (In my view…, I believe…)",
      "Kamida 3 ta bog'lovchi so'z ishlatdim (however, in addition, therefore)",
      "Bitta shart gap yoki majhul nisbat gap yozdim",
      "In conclusion bilan xulosa qildim",
    ],
  },
};
