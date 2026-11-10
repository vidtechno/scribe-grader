import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Majhul nisbatni barcha zamonlarda va modal fe'llar bilan ishlataman (is being built, has been announced, should have been told)",
    "Yangilik uslubida reporting passive ishlataman (It is said that…, He is believed to have…) va ko'chirma gapni to'g'ri tuzaman",
    "Xizmat va yoqimsiz voqealarni causative bilan ayta olaman (I had my laptop repaired) va texnik muammo haqida xabar beraman",
    "Texnologiya haqida fikr bildiraman, rozi yoki qisman rozi bo'laman va 250 so'zli fikr maqolasi yozaman",
  ],
  traps: [
    {
      title: "O'timsiz fe'lni passive qilish",
      md: "O'zbek tilida *sodir bo'ldi, paydo bo'ldi* kabi shakllar -ildi qo'shimchasiga o'xshaydi, shuning uchun inglizchada *was happened* yoki *was appeared* deb yozamiz. **happen, occur, appear, arrive** o'timsiz fe'llar: ular passive bo'lmaydi. Faol shaklni ishlating: *The accident happened*.",
      fix: { k: 'fix', wrong: 'The accident was happened at night.', a: ['The accident happened at night.', 'The accident happened at night'], why: "**happen** o'timsiz fe'l, passive bo'lmaydi." },
    },
    {
      title: "Causative o'rniga oddiy faol fe'l",
      md: "O'zbek tilida *sochimni oldirdim, telefonni ta'mirlattim* kabi ettirgan shakl bor, inglizchada esa uni **have / get + object + V3** bilan beramiz. *I repaired my phone* — o'zingiz ta'mirlagansiz. Boshqa odam qilsa: *I had my phone repaired*.",
      fix: { k: 'fix', wrong: 'Yesterday I repaired my phone at a service centre.', a: ['Yesterday I had my phone repaired at a service centre.', 'Yesterday I got my phone repaired at a service centre.'], why: "Ishni xodim bajargan: **had / got + object + V3**." },
    },
    {
      title: "Ko'chirma savolda so'roq tartibi",
      md: "To'g'ridan-to'g'ri savolda tartib o'zgaradi (*Where do you live?*), lekin ko'chirma savolda **ega + fe'l** tartibi qaytadi va *do/did* tushadi. O'zbek tilida bunday tartib farqi yo'q, shuning uchun *asked where did I live* deb xato qilamiz. To'g'risi: *asked where I lived*.",
      fix: { k: 'fix', wrong: 'She asked me where did I live.', a: ['She asked me where I lived.'], why: "Ko'chirma savolda so'roq tartibi va **did** yo'q." },
    },
  ],
  culture: "Britaniya yangilik matnlarida (BBC, gazetalar) passive va reporting passive juda ko'p uchraydi: *The minister is said to have resigned*. Bunday uslub ma'lumot manbasi noaniq yoki tasdiqlanmagan bo'lsa, muallifni da'vo uchun javobgar qilmaydi. Shu sababli jurnalistlar *allegedly, reportedly, is believed to* kabi so'zlardan ehtiyotkorlik bilan foydalanadi. Fikr bildirishda esa inglizlar to'g'ridan-to'g'ri *You are wrong* deyishdan qochadi; *I see your point, but…* yoki *That's debatable* ancha muloyim eshitiladi va suhbatni buzmaydi.",
  project: {
    title: "Texnologiya haqida fikr maqolasi",
    prompt: "Maktab yoki universitet jurnali uchun 200-250 so'zli fikr maqolasi yozing. Mavzu: *Social media does more harm than good to young people* (rozi yoki rozi emasligingizni asoslang). Qiziqtiruvchi boshlanish (hook), aniq pozitsiya (thesis), ikkita dalil misollar bilan, qarshi fikr va unga javob, so'ng xulosa yozing. Matn rasmiy-neytral uslubda bo'lsin.",
    criteria: [
      "Hook va aniq thesis bor, ikkita dalil har biri misol bilan qo'llab-quvvatlangan",
      "Counter-argument (Some people argue… Yet…) va xulosa bor",
      "Kamida bitta passive (is being…, has been…), bitta reporting passive (is believed to…) va bitta causative ishlatilgan",
      "Fikr uchun In my view / I would argue ishlatilgan (According to me emas) va matn rasmiy-neytral",
    ],
  },
};
