import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Hayotim va tajribam haqida Present Perfect bilan gapiraman (I've been to…, I've never…)",
    "For, since va How long bilan davomiylikni ayta olaman",
    "Present Perfect, Present Perfect Continuous va Past Simple ni to'g'ri tanlayman",
    "Eski do'stga email yozaman va o'z hayotim haqida qisqa hikoya qilaman",
  ],
  traps: [
    {
      title: "since / for bilan hozirgi zamon",
      md: "O'zbek tilida *2020-yildan beri yashayman* deymiz (hozirgi zamon). Inglizchada esa hozirgacha davom etgan holat uchun **Present Perfect** kerak: *I have lived here since 2020.*",
      fix: { k: 'fix', wrong: "I live here since 2020.", a: ["I have lived here since 2020.", "I've lived here since 2020.", "I have been living here since 2020.", "I've been living here since 2020."], why: "**since** bilan Present Perfect ishlatiladi." },
    },
    {
      title: "ago bilan Present Perfect",
      md: "**ago** tugagan, aniq o'tgan vaqtni bildiradi, shuning uchun faqat **Past Simple** bilan keladi: *I met her two years ago.*",
      fix: { k: 'fix', wrong: "I have met her two years ago.", a: ["I met her two years ago."], why: "**ago** bilan Past Simple." },
    },
    {
      title: "been va gone",
      md: "Ikkalasi ham *bormoq* bilan bog'liq, lekin **been** — borib qaytgan, **gone** — ketgan va hozir yo'q. Tajriba haqida doim **been**: *Have you ever been to London?*",
      fix: { k: 'fix', wrong: "Have you ever gone to London?", a: ["Have you ever been to London?"], why: "Tajriba haqida **been** ishlatiladi." },
    },
  ],
  culture: "Inglizlar tanishuvda va yozishmada hayot haqida gapirganda ko'pincha **Have you ever…?** va **What have you been up to?** savollarini beradi. Bu odob bilan qiziqish bildirish usuli. Juda shaxsiy savollar (maosh, yosh, oilaviy muammolar) odatda so'ralmaydi; yangi tanishga avval ish, sayohat va qiziqishlar haqida savol bering. Do'stga emailda *Hi* bilan boshlab, *Best wishes* yoki *Take care* bilan tugatish mumkin.",
  project: {
    title: "Mening hayot hikoyam",
    prompt: "O'z hayotingiz haqida 7–10 gapdan iborat qisqa hikoya yozing: qayerda tug'ilgansiz va katta bo'lgansiz (Past Simple), hozir qayerda va qancha vaqtdan beri yashaysiz (**for / since**), ilgari nima qilar edingiz (**used to**), qanday tajribalaringiz bor (**I've been to…, I've never…**) va hozir nima bilan band bo'lib yuribsiz (**I've been learning…**).",
    criteria: [
      "Aniq o'tgan vaqt uchun Past Simple ishlatdim",
      "For yoki since bilan Present Perfect gap yozdim",
      "Used to bilan ilgarigi odatni yozdim",
      "Kamida bitta Present Perfect Continuous gap yozdim",
    ],
  },
};
