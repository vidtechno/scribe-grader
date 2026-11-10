import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Ikki narsani aniq solishtiraman (far cheaper, the more… the better, twice as expensive as)",
    "Miqdor so'zlarini to'g'ri kelishuv bilan ishlataman (a great deal of, hardly any, the number of / a number of)",
    "Atrof-muhit va salomatlik haqida gapiraman va shifokorga simptomlarni tushuntiraman",
    "Grafik yoki jadvalni 150 so'zli hisobotda tasvirlayman (overview, from … to, by, per cent)",
  ],
  traps: [
    {
      title: "Taqqoslash oldida very",
      md: "O'zbek tilida *juda yaxshiroq* deyish mumkin, shuning uchun inglizchada *very cheaper* yoki *more better* deb xato qilamiz. Taqqoslash darajasini kuchaytirish uchun **far, much, a lot, considerably**; kuchsizlashtirish uchun **slightly, a bit** ishlatiladi. **Very** faqat oddiy sifat bilan: *very cheap*.",
      fix: { k: 'fix', wrong: 'This phone is very cheaper than that one.', a: ['This phone is much cheaper than that one.', 'This phone is far cheaper than that one.', 'This phone is a lot cheaper than that one.', 'This phone is considerably cheaper than that one.', 'This phone is slightly cheaper than that one.', 'This phone is a bit cheaper than that one.', 'This phone is very cheap compared with that one.'], why: "Taqqoslash darajasi oldida **very** emas, **much / far / a lot** keladi." },
    },
    {
      title: "The number of bilan fe'l",
      md: "*Soni* ko'plik bo'lgani uchun *the number of visitors are* deymiz. Ammo **the number** — birlik ot, shuning uchun fe'l ham birlik: **The number of visitors is growing**. **A number of visitors** esa *ko'pchilik* degani va ko'plik fe'l oladi: *A number of visitors are waiting.*",
      fix: { k: 'fix', wrong: 'The number of visitors are growing every year.', a: ['The number of visitors is growing every year.', 'The number of visitors is increasing every year.', 'The number of visitors has been growing every year.'], why: "**The number of** + birlik fe'l: *is growing*." },
    },
    {
      title: "Umumiy ma'noda the",
      md: "O'zbek tilida artikl yo'q, shuning uchun ba'zan har bir otdan oldin *the* qo'yamiz: *The life is expensive*. Umumiy fikr aytilganda **ko'plik va sanalmaydigan otlar artiklsiz** ishlatiladi: *Life is expensive. Doctors study for years.* **The** faqat aniq, ma'lum narsa uchun: *the life of my grandfather*.",
      fix: { k: 'fix', wrong: 'The life is more expensive in big cities.', a: ['Life is more expensive in big cities.', 'Life is more expensive in big cities'], why: "Umumiy fikr: **Life** (artiklsiz)." },
    },
  ],
  culture: "Britaniya ingliz tilida *quite good* ko'pincha «yomon emas, lekin a'lo emas» degan ma'noni bildiradi, amerikaliklar esa *quite* ni ba'zan kuchliroq ma'noda ishlatadi. Britaniyaliklar kamgap, yumshoq ifodani yaxshi ko'radi: *not bad* aslida «yaxshi», *a bit of a problem* esa ko'pincha jiddiy muammo. Foizni inglizcha ikki so'z bilan yozadi (*per cent*), ma'lumotlar tavsifida esa fikr emas, faqat fakt kutiladi. Keksa odamlar haqida *the elderly* o'rniga ko'pincha yumshoqroq *older people* deyiladi.",
  project: {
    title: "Mahallamdagi sog'lom turmush hisoboti",
    prompt: "O'z mahallangiz yoki shahringizdagi odamlarning transport turlari (piyoda, velosiped, avtobus, mashina) yoki sport bilan shug'ullanish haqida ikki yil uchun (masalan, 2015 va 2025) o'zingiz to'qigan kichik ma'lumotlar jadvalini tuzing (4 ta toifa, foizlarda). Keyin shu jadval bo'yicha 120-150 so'zli hisobot yozing: kirish gapi, raqamsiz overview, ikkita asosiy qism. Fikr bildirmang, faqat ma'lumotni tasvirlang.",
    criteria: [
      "Overview raqamsiz umumiy tendensiyani ko'rsatdi (Overall, … whereas …)",
      "Kamida 3 ta raqam predlogini to'g'ri ishlatdim (from … to, by, at) va per cent ga -s qo'shmadim",
      "Kamida 2 ta taqqoslash yozdim (far / much + comparative, twice as … as, the number of … is)",
      "Hisobot o'tgan zamonda yozildi va shaxsiy fikr yo'q",
    ],
  },
};
