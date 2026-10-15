import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "If I were… va if I had… bilan xayoliy va o'tgan zamon vaziyatlarini aytaman",
    "I wish bilan orzu va pushaymonligimni bildiraman",
    "must, might, can't bilan taxmin qilaman va should have bilan o'tgan ishlarni baholayman",
    "Do'stga muloyim maslahat beraman va uzr so'rayman",
  ],
  traps: [
    {
      title: "If dan keyin would",
      md: "O'zbek tilida \"agar ... bo'lsam, ... qilardim\" deymiz, shuning uchun inglizchada ham ikkala qismga *would* qo'yamiz. Aslida **if** qismida *would* bo'lmaydi: u yerda **Past Simple** turadi, *would* esa faqat natija qismida.",
      fix: { k: 'fix', wrong: 'If I would have more time, I would learn Spanish.', a: ['If I had more time, I would learn Spanish.', "If I had more time, I'd learn Spanish."], why: "**if** dan keyin Past Simple (*had*), *would* faqat natija qismida." },
    },
    {
      title: "I wish bilan hozirgi zamon",
      md: "\"Kaskiydi, ... bo'lsa\" deganda hozirgi zamon fe'lini qo'yish tabiiy tuyuladi. Inglizchada esa **wish** dan keyin zamon \"orqaga\" suriladi: hozirgi orzu uchun *had / could / were*, o'tgan pushaymonlik uchun *had + V3*.",
      fix: { k: 'fix', wrong: 'I wish I can speak English fluently.', a: ['I wish I could speak English fluently.'], why: "**wish** dan keyin **can** emas, **could**." },
    },
    {
      title: "Should have va V3",
      md: "\"Qilishim kerak edi\" deganda o'zbek tilida bitta shakl yetarli, inglizchada esa **should have + V3** (uchinchi shakl) kerak. Ko'pincha V2 yoki oddiy fe'l qo'yib yuboriladi.",
      fix: { k: 'fix', wrong: 'You should have went to the doctor.', a: ['You should have gone to the doctor.'], why: "**should have** dan keyin **V3**: *gone*, *went* emas." },
    },
  ],
  culture: "Ingliz tilida maslahat berish odatda yumshoq bo'ladi: *If I were you, I'd…*, *Why don't you…?*, *You could…* kabi iboralar buyruq emas, taklif sifatida eshitiladi. Uzr so'rashda esa *I'm so sorry* bilan birga nima bo'lganini qisqa aytish va tuzatishni taklif qilish (*Can I make it up to you?*) odobli hisoblanadi.",
  project: {
    title: "Maslahat xati",
    prompt: "Do'stingiz yangi shaharga ko'chib o'tish yoki joyida qolish haqida ikkilanmoqda. Unga 7–10 gapdan iborat maslahat xati yozing: salomlashing, hamdardlik bildiring, ikkita variantni second conditional bilan solishtiring, bitta maslahat bering va dalda bilan yakunlang.",
    criteria: ["Dear … bilan boshlab, mos tarzda yakunladim", "If I … , I would … qolipini kamida 2 marta ishlatdim", "If I were you, I'd … yoki Why don't you …? bilan maslahat berdim", "Bitta I wish … yoki should have … gapini yozdim"],
  },
};
