import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Majhul nisbatda gapiraman va yozaman (is made, was built, has been closed, will be opened)",
    "Odamlar, joylar va narsalarni who, which, where, whose bilan aniq tasvirlayman",
    "Shahar yoki mahallani tasvirlayman va turistik ofisda muloyim savol beraman",
    "Mehmonxona yoki sayohat haqida qisqa sharh yozaman",
  ],
  traps: [
    {
      title: "Majhul nisbatda be unutiladi",
      md: "O'zbek tilida majhul nisbat fe'lga qo'shimcha qo'shib yasaladi (*qurildi*), inglizchada esa alohida **be + V3** kerak. Shuning uchun *The bridge built in 1900* yoki *can seen* deb xato qilamiz. Har doim **be** ni (is, was, has been, will be, can be) qo'ying.",
      fix: { k: 'fix', wrong: 'The castle built in 1850.', a: ['The castle was built in 1850.', 'The castle was built in 1850'], why: "Majhul nisbat: **was built**." },
    },
    {
      title: "Nisbiy gapda ortiqcha olmosh",
      md: "O'zbek tilida *men uchragan odam, u ...* kabi qurilmalar bor, shuning uchun inglizchada *who he*, *which it* deb qo'yib yuboramiz. **who / which / that** o'zi egaga ishora qiladi, olmosh qayta kerak emas.",
      fix: { k: 'fix', wrong: 'The hotel which it is near the park is cheap.', a: ['The hotel which is near the park is cheap.', 'The hotel that is near the park is cheap.'], why: "**which** o'zi ega vazifasida, *it* ortiqcha." },
    },
    {
      title: "Muloyim savolda so'z tartibi",
      md: "To'g'ridan-to'g'ri savolda tartib o'zgaradi (*Where is the bank?*), lekin **Could you tell me…** dan keyin tartib oddiy gapdagidek: *where the bank is*. Do/does ham kerak emas.",
      fix: { k: 'fix', wrong: 'Could you tell me where is the bank?', a: ['Could you tell me where the bank is?'], why: "Muloyim savol: darak tartibi." },
    },
  ],
  culture: "Britaniyada begona odamdan ma'lumot so'rashda *Excuse me, could you tell me…?* deyish juda odatiy, to'g'ridan-to'g'ri *Where is…?* ba'zan qo'pol eshitiladi. Mehmonxona sharhlarida ham mulohazali ohang qadrlanadi: avval yaxshi tomonlar, keyin *However,…* bilan kamchiliklar yoziladi. Question tag (*isn't it?*) esa suhbatni do'stona qiladi, ayniqsa ob-havo yoki joy haqida gaplashganda.",
  project: {
    title: "Sevimli joyim haqida maqola",
    prompt: "Sevimli shahar, mahalla yoki mehmonxonangiz haqida 7-10 gaplik matn yozing. Joyni tasvirlang, nima bilan mashhurligini ayting, kamida bitta kamchilik va tavsiya yozing. Oxirida do'stingizga bitta muloyim savol bering.",
    criteria: [
      "Kamida 2 ta majhul nisbat gap ishlatdim (is known for, was built, has been renovated)",
      "who / which / where bilan kamida 2 ta nisbiy gap yozdim (bittasi vergul bilan)",
      "both, neither, every yoki each ni to'g'ri ishlatdim",
      "Although yoki However bilan fikrlarni qarama-qarshi qo'ydim va tavsiya bilan tugatdim",
    ],
  },
};
