import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Cleft gaplar (It was … that, What I need is …) va emphatic do bilan fikrimni ta'kidlayman",
    "Inversiyani (Never have I, Not only did she, Had I known) to'g'ri tuzaman va me'yorida ishlataman",
    "Although, despite, however, consequently, so as not to kabi bog'lovchilarni xatosiz ishlataman",
    "Essay yozaman va munozarada dalil keltiraman: thesis, topic sentence, qarshi fikr va xulosa bilan",
  ],
  traps: [
    {
      title: "Inversiyada yordamchi fe'l unutiladi",
      md: "O'zbek tilida gap boshiga *hech qachon*, *kamdan-kam* kabi so'z chiqsa ham, so'z tartibi o'zgarmaydi. Inglizchada esa **Never, Rarely, Seldom, Hardly, Not only** gap boshida bo'lsa, **yordamchi fe'l egadan oldin** keladi. Yordamchi fe'l bo'lmasa (Present / Past Simple), **do / does / did** qo'shiladi va asosiy fe'l asl shaklida qoladi.",
      fix: { k: 'fix', wrong: 'Rarely she comes late to class.', a: ['Rarely does she come late to class.'], why: "Salbiy so'z boshida: **does + ega + V1**." },
    },
    {
      title: "In spite of / despite dan keyin gap",
      md: "*Charchagan bo'lishiga qaramay* deganda o'zbekchada to'liq gap ishlatish mumkin, shuning uchun *In spite of he was tired* deb xato qilamiz. **Despite / in spite of** dan keyin **ot yoki -ing** keladi; to'liq gap kerak bo'lsa **although** ishlating.",
      fix: { k: 'fix', wrong: 'In spite of he was tired, he kept working.', a: ['In spite of being tired, he kept working.', 'Despite being tired, he kept working.', 'Although he was tired, he kept working.'], why: "**In spite of / despite** + ot yoki -ing; gap bo'lsa — **although**." },
    },
    {
      title: "Because of dan keyin to'liq gap",
      md: "**because** va **because of** o'zbekchada bir xil *chunki / sababli* deb tarjima qilinadi. Inglizchada **because** + **ega + fe'l** (gap), **because of** (yoki *owing to, due to*) + **ot**. Aralashtirsangiz, gap xato bo'ladi.",
      fix: { k: 'fix', wrong: 'Because of the road was closed, we were late.', a: ['Because the road was closed, we were late.', 'Because of the closed road, we were late.', 'Because of the road closure, we were late.'], why: "**because** + gap; **because of** + ot." },
    },
  ],
  culture: "Ingliz tilidagi akademik va rasmiy yozuvda da'vo ko'pincha **yumshatiladi** (*tends to, may, arguably, to some extent*): *All teenagers…* yoki *This will always…* kabi qat'iy jumlalar yetarli dalilsiz ishonchsiz ko'rinadi. Cleft va inversiya ham me'yorida ishlatiladi: bir essayda bir-ikki o'rinda ta'sirli, ko'p bo'lsa sun'iy eshitiladi. Imtihon essaylarida (masalan, IELTS Task 2) ham aniq tuzilma, savolning barcha qismiga javob va izchil bog'lovchilar ball beradi.",
  project: {
    title: "Opinion essay: 230-250 so'z",
    prompt: "*Some people think that working from home is better than working in an office. To what extent do you agree or disagree?* mavzusida 230-250 so'zli essay yozing. 40 daqiqa belgilang: 5 daqiqa reja, 30 daqiqa yozish, 5 daqiqa tekshirish. Tuzilma: kirish va thesis, ikkita dalil (misol bilan), qarshi fikr va rad etish, xulosa.",
    criteria: [
      "Thesis aniq, har paragrafda topic sentence va misol bor",
      "Kamida 2 ta qarama-qarshi yoki sabab-natija bog'lovchisi to'g'ri ishlatildi (although, despite, however, consequently, owing to)",
      "1 ta cleft yoki inversiya va 1 ta sifatdosh gapi ishlatildi (What matters most is…, Having considered…)",
      "Hedging bor (tend to, arguably, may), xulosada yangi dalil yo'q va takror, noaniq so'zlar tuzatildi",
    ],
  },
};
