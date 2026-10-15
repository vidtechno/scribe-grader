import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "O'tmishdagi voqealarni to'g'ri tartibda (Past Perfect, Past Simple, Past Continuous) hikoya qilaman",
    "Boshqalarning gapini, savolini va buyrug'ini ko'chirma gap bilan aytib beraman",
    "Politsiyaga voqea haqida xabar beraman va muloyim shikoyat qilaman",
    "Qisqa hikoya yoki yangilik maqolasini bog'lovchilar bilan yozaman",
  ],
  traps: [
    {
      title: "said me, suggested me",
      md: "O'zbek tilida *menga dedi* deymiz, shuning uchun inglizcha **said me** deb yozamiz. **said** dan keyin odam kelmaydi: *He said that he was tired.* Odamni aytsangiz — **told**: *He told me that he was tired.* **suggested me to** ham xato: *She suggested going by bus.*",
      fix: { k: 'fix', wrong: 'She said me that she was tired.', a: ['She told me that she was tired.', 'She told me she was tired.', 'She said that she was tired.', 'She said she was tired.'], why: "**said** dan keyin odam yo'q: *told me* yoki *said (that)*." },
    },
    {
      title: "Ko'chirma savolda so'roq tartibi",
      md: "To'g'ridan-to'g'ri savolda *Where do you live?* tartib so'roqli. Ko'chirma savolda esa oddiy gap tartibi bo'ladi va **do / did** tushib qoladi: *She asked where I lived.* Ko'pincha *She asked where did I live* deb xato qilinadi.",
      fix: { k: 'fix', wrong: 'He asked me where did I work.', a: ['He asked me where I worked.'], why: "Ko'chirma savolda oddiy tartib, **did** yo'q: *where I worked*." },
    },
    {
      title: "Past Perfect o'rniga Past Simple",
      md: "O'zbek tilida o'tgan zamon shakllari ko'pincha bir xil ishlatiladi, shuning uchun oldin bo'lgan ishni ham Past Simple bilan aytamiz. Inglizchada ikki voqeadan oldingisi **Past Perfect** bo'ladi: *When I arrived, the film had started.*",
      fix: { k: 'fix', wrong: 'When we arrived, the shop already closed.', a: ['When we arrived, the shop had already closed.'], why: "Do'kon oldin yopilgan → **had already closed**." },
    },
  ],
  culture: "Inglizlar voqea haqida gapirganda yoki shikoyat qilganda juda muloyim bo'lishadi: *I'm afraid there's a problem*, *Could I speak to the manager, please?* Qattiq ohang yoki ayblash kamdan-kam ishlaydi; aniq faktlar (qachon, nima bo'ldi) va muloyim talab ko'proq natija beradi. Yangiliklarda esa manba doim aytiladi: *according to the police*, *the mayor said that…*",
  project: {
    title: "Hikoya yoki yangilik maqolasi",
    prompt: "Qiziqarli bir voqea haqida 7–10 gapli hikoya yoki qisqa yangilik maqolasi yozing. Hikoyada kamida bitta Past Perfect gap, bitta ko'chirma gap (said that / asked if / told me to) va bog'lovchilar (suddenly, meanwhile, eventually) bo'lsin. Maqola bo'lsa, sarlavha va bitta iqtibos qo'shing.",
    criteria: [
      "Past Perfect bilan oldin bo'lgan ishni ko'rsatdim (had + V3)",
      "Kamida ikkita ko'chirma gap yozdim va zamonni siljitdim",
      "Suddenly, meanwhile yoki eventually ishlatdim",
      "Boshlanish, voqea va yakun aniq ko'rinadi",
    ],
  },
};
