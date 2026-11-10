import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Hikoya zamonlarini (Past Simple, Continuous, Perfect, Perfect Continuous) aralashtirib, voqeani izchil hikoya qila olaman",
    "Present Perfect Simple va Continuous bilan natija va davomiylikni farqlayman (for, since, how long)",
    "O'tgan odatlarim haqida used to / would bilan, kelajak rejalarim haqida will be -ing va will have V3 bilan gapiraman",
    "O'zgarish haqida blog yoki izoh yozaman va vaqt bog'lovchilari bilan fikrni ketma-ket bayon qilaman",
  ],
  traps: [
    {
      title: "Davomiylik: 'since' va 'for' bilan hozirgi zamon emas",
      md: "O'zbek tilida *uch yildan beri yashayman* deymiz va fe'l hozirgi zamonda turadi. Inglizchada o'tgandan hozirgacha davom etgan holat uchun **Present Perfect** (Simple yoki Continuous) kerak: *I have been living here for three years*. *I live here since 2019* deb bo'lmaydi.",
      fix: { k: 'fix', wrong: "I am working here since 2019.", a: ["I have been working here since 2019.", "I've been working here since 2019.", "I have worked here since 2019.", "I've worked here since 2019."], why: "**since 2019** → **Present Perfect**." },
    },
    {
      title: "Aniq o'tgan vaqt bilan Present Perfect",
      md: "O'zbekcha *Kecha men uni ko'rganman* deyish mumkin, lekin inglizchada **yesterday, last year, ten years ago** kabi aniq o'tgan vaqt bilan faqat **Past Simple** ishlatiladi: *I saw him yesterday.* Present Perfect aniq vaqtni aytmaydi.",
      fix: { k: 'fix', wrong: "I have seen him yesterday.", a: ["I saw him yesterday.", "I saw him yesterday"], why: "**yesterday** — aniq o'tgan vaqt → **Past Simple**." },
    },
    {
      title: "'be used to' va 'used to' aralashib ketishi",
      md: "**used to + fe'l** — o'tgan odat (*I used to smoke*). **be / get used to + V-ing** — ko'nikkanlik (*I'm used to getting up early*). Ikkinchisidan keyin *-ing* shakli turadi, oddiy fe'l emas.",
      fix: { k: 'fix', wrong: "I'm used to get up at five.", a: ["I'm used to getting up at five.", "I am used to getting up at five."], why: "**be used to** + **V-ing**." },
    },
  ],
  culture: "Ingliz tilida hayot o'zgarishi haqida gapirish suhbatni boshlashning odatiy yo'li. Uzoq vaqt ko'rmagan do'stga *You haven't changed a bit!* yoki *What have you been up to?* deyish samimiy hisoblanadi, bu savol esa javobda Present Perfect Continuous ni kutadi. Britaniyada odamlar shaxsiy yutuqlarini odatda kamtarona aytadi: *I've been getting on quite well* deydi, *I'm very successful* demaydi. Blog va jurnal maqolalarida esa boshda qisqa shaxsiy hikoya, keyin o'zgarishning sababi va oxirida kelajak haqida fikr yoziladi.",
  project: {
    title: "O'zgarish haqida blog yozuvi",
    prompt: "«How I have changed» mavzusida 150-200 so'zli blog yozuvi yozing. Qiziqarli birinchi gap bilan boshlang, o'tgan davrni hikoya zamonlari va used to / would bilan tasvirlang, hozirgi natijani Present Perfect bilan ayting, kelajak rejalaringizni bildiring va o'quvchiga savol berib tugating.",
    criteria: [
      "Hikoya zamonlaridan kamida uchtasini ishlatdim (Past Simple, Past Continuous, Past Perfect yoki Past Perfect Continuous)",
      "used to yoki would bilan o'tgan odatimni aytdim va be / get used to + -ing ni to'g'ri ishlatdim",
      "Present Perfect (Simple yoki Continuous) bilan for, since, lately kabi so'zlarni to'g'ri qo'lladim",
      "Kelajak uchun will be -ing yoki will have V3 yozdim, vaqt bog'lovchilari (meanwhile, eventually, as soon as) bilan ketma-ketlikni ko'rsatdim va savol bilan tugatdim",
    ],
  },
};
