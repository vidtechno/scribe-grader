import type { Lesson } from '../../../types';

// Mini lesson (situation): describing a city or a neighbourhood. Uses the passive (l1, l12), relative clauses (l2, l3), articles and determiners (l4, l13).
const lesson: Lesson = {
  id: 'u21-l9',
  title: 'Describing a place',
  titleUz: 'Joyni tasvirlash: shahar yoki mahalla',
  mini: true,
  kind: 'situation',
  goal: "Do'stingizga o'z shahringiz yoki mahallangizni tasvirlab berasiz: **What's it like?** ga javob berasiz, **who / which / where** bilan aniqlik kiritasiz, joyning kamchilik va yutuqlarini aytasiz (*It's famous for…, It's surrounded by…*).",
  slides: [
    {
      title: "Joy qanday? Savol va javob",
      blocks: [
        { t: 'p', md: "Kimdir sizning shahringiz haqida so'rasa, avval **umumiy taassurot**, keyin **aniq tafsilot** bering. Eng ko'p so'raladigan savol: **What's it like?** — *U qanday joy?*" },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Savol', "What's your neighbourhood like?"],
          ['Umumiy taassurot', "It's a lively district with a lot of cafes."],
          ['Joylashuv', "It's in the north of the city, near the river."],
          ['Mashhurlik', "It's famous for its old market."],
          ['Atrof', "It's surrounded by hills and parks."],
          ['Masofa', "Everything is within walking distance."],
        ] },
        { t: 'tip', tone: 'warn', md: "**What is it like?** — tasvir so'raydi (*Qanday?*). **What does it look like?** — tashqi ko'rinish. **What does he like?** esa boshqa: *U nimani yoqtiradi?* Savollar adashmasin." },
        { t: 'check', ex: { k: 'choice', q: "— What's your town like? — ___", opts: ["It's small but very friendly.", "I like it.", "Yes, it is.", "It likes tea."], a: 0, why: "**What's it like?** — tasvir kutiladi: *small but friendly*." } },
      ],
    },
    {
      title: "Tasvirni boyitish",
      blocks: [
        { t: 'p', md: "Oddiy gaplarni **nisbiy gap** va **majhul nisbat** bilan boyiting — bu B1 darajasidagi gapirishga xos:" },
        { t: 'examples', items: [
          { en: "It's a district where students and artists live.", uz: "Bu talabalar va rassomlar yashaydigan mahalla.", note: "**where** — joy haqida aniqlovchi gap (l2)." },
          { en: "The old bazaar, which is the oldest in the city, is a must-see.", uz: "Shaharning eng qadimgi bozori albatta ko'rishga arziydi.", note: "Vergul bilan qo'shimcha ma'lumot (l3)." },
          { en: "The old town has been protected for many years.", uz: "Eski shahar ko'p yillardan beri himoya qilinadi.", note: "Majhul nisbat (l1, l12)." },
          { en: "Both sides of the river are lovely, and all the streets are clean.", uz: "Daryoning ikkala tomoni ham go'zal, barcha ko'chalar toza.", note: "**both / all** (l13)." },
        ] },
        { t: 'compare',
          good: { title: "Yaxshi tasvir", items: ["It's a lively district where there are many cafes.", "It's a quiet area, which I really like.", "There is a lovely view of the mountains."] },
          bad: { title: "Zerikarli tasvir", items: ["It is good.", "There is many things.", "It is a place which in there are cafes."] } },
        { t: 'tip', tone: 'good', md: "Qoida: **1) umumiy so'z** (*lively, quiet*), **2) misol** (*there are many cafes*), **3) shaxsiy fikr** (*I love it because…*)." },
        { t: 'check', ex: { k: 'fill', q: "It's a quiet village ___ my grandparents live.", a: ['where'], why: "Joy haqida aniqlovchi gap → **where**." } },
      ],
    },
    {
      title: "Dialog: yangi mahalla",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Tom', en: "Sara, I hear you've moved. What's your new neighbourhood like?", uz: "Sara, eshitishimcha ko'chib o'tibsan. Yangi mahallang qanday?" },
          { who: 'Sara', en: "It's lovely. It's a lively district where a lot of young people live.", uz: "Juda yoqimli. Ko'p yoshlar yashaydigan jonli mahalla." },
          { who: 'Tom', en: "Is it crowded?", uz: "Gavjummi?" },
          { who: 'Sara', en: "In the centre, yes, but my street is quite peaceful. It's surrounded by trees.", uz: "Markazda ha, lekin mening ko'cham ancha tinch. Daraxtlar bilan o'ralgan." },
          { who: 'Tom', en: "And is there anything to do there?", uz: "U yerda qiladigan biror narsa bormi?" },
          { who: 'Sara', en: "Of course. There's a market which is open every day, and both cinemas are within walking distance.", uz: "Albatta. Har kuni ochiq bozor bor va ikkala kinoteatr ham piyoda yetib boriladigan masofada." },
          { who: 'Tom', en: "Sounds perfect! Is the area famous for anything?", uz: "Ajoyib eshitiladi! Bu hudud biror narsasi bilan mashhurmi?" },
          { who: 'Sara', en: "It's famous for its old bakery, which was built in the nineteenth century.", uz: "U o'zining eski novvoyxonasi bilan mashhur, u o'n to'qqizinchi asrda qurilgan." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Sara's street is very noisy and crowded.", a: false, why: "*my street is quite peaceful.*" } },
        { t: 'check', ex: { k: 'choice', q: "What is the area famous for?", opts: ['Its old bakery', 'Its new cinema', 'Its river', 'Its university'], a: 0, why: "*It's famous for its old bakery.*" } },
      ],
    },
  ],
  words: [
    { en: 'district', uz: 'mahalla, tuman', ipa: 'ˈdɪstrɪkt', pos: 'noun', ex: 'This is a lively district.', exUz: 'Bu jonli mahalla.' },
    { en: 'crowded', uz: 'gavjum, olomon', ipa: 'ˈkraʊdɪd', pos: 'adj', ex: 'The market is crowded on Saturdays.', exUz: 'Bozor shanba kunlari gavjum bo\'ladi.' },
    { en: 'lively', uz: 'jonli, quvnoq', ipa: 'ˈlaɪvli', pos: 'adj', ex: 'The street is lively in the evening.', exUz: 'Ko\'cha kechqurun jonli bo\'ladi.' },
    { en: 'nearby', uz: 'yaqin atrofda', ipa: 'ˌnɪəˈbaɪ', pos: 'adj', ex: 'There is a nearby park.', exUz: 'Yaqin atrofda bir bog\' bor.' },
    { en: 'peaceful', uz: 'tinch, osoyishta', ipa: 'ˈpiːsfl', pos: 'adj', ex: 'It is a peaceful village.', exUz: 'Bu osoyishta qishloq.' },
    { en: 'view', uz: "manzara", ipa: 'vjuː', pos: 'noun', ex: 'The room has a lovely view.', exUz: 'Xonadan go\'zal manzara ko\'rinadi.' },
  ],
  practice: [
    { k: 'match', pairs: [['district', 'mahalla'], ['crowded', 'gavjum'], ['lively', 'jonli'], ['peaceful', 'tinch'], ['view', 'manzara']] },
    { k: 'choice', q: "What's your town ___?", opts: ['like', 'likes', 'liking', 'alike'], a: 0, why: "Tasvir so'rash: **What's it like?**" },
    { k: 'choice', q: "It's a city ___ is famous for its old bridges.", opts: ['which', 'where', 'who', 'whose'], a: 0, why: "Narsa/joy ega bo'lsa → **which**." },
    { k: 'fill', q: "It's a small town. Everything is within walking ___.", a: ['distance'], uz: "Bu kichik shahar. Hamma narsa piyoda yetib boriladigan masofada.", why: "**within walking distance** — qo'zg'almas ibora." },
    { k: 'fill', q: "The village is ___ by mountains.", a: ['surrounded'], uz: "Qishloq tog'lar bilan o'ralgan.", why: "**surrounded by** — majhul nisbat." },
    { k: 'listen', say: "It's a lively district where a lot of young people live.", opts: ["It's a lively district where a lot of young people live.", "It's a quiet district where a lot of old people live.", "It's a lively district which a lot of young people live.", "It was a lively district where young people lived."], a: 0 },
    { k: 'order', uz: "Bu o'z eski bozori bilan mashhur.", words: ["It's", 'famous', 'for', 'its', 'old', 'market.'], extra: ['of', 'on'], alt: [['It', 'is', 'famous', 'for', 'its', 'old', 'market.']], why: "**famous for** — bilan mashhur." },
    { k: 'fix', wrong: 'It is a district which in live students.', a: ['It is a district where students live.', "It's a district where students live."], why: "Joy haqida: **where** + ega + fe'l." },
    { k: 'translate', uz: "Mening ko'cham ancha tinch.", a: ['My street is quite peaceful.', 'My street is very peaceful.', 'My street is quite quiet.', 'My street is rather peaceful.'], why: "**quite peaceful** — ancha tinch." },
    { k: 'tf', q: "*What does your town look like?* savoli shaharning tashqi ko'rinishini so'raydi.", a: true, why: "**look like** — tashqi ko'rinish." },
    { k: 'dictation', say: 'Both cinemas are within walking distance.', a: ['Both cinemas are within walking distance.'], uz: "Ikkala kinoteatr ham piyoda yetib boriladigan masofada." },
    { k: 'speak', say: "What's your neighbourhood like?", uz: 'Mahallangiz qanday?' },
    { k: 'speak', say: "It's a lively district with a lot of cafes.", uz: "Bu ko'plab kafelari bor jonli mahalla." },
  ],
  quiz: [
    { k: 'choice', q: "— What's the centre like? — It's very ___ on Saturdays. You can't walk!", opts: ['crowded', 'peaceful', 'surrounded', 'nearby'], a: 0, why: "Yurib bo'lmaydi → **crowded**." },
    { k: 'choice', q: "We live in a ___ village. There is no noise at all.", opts: ['peaceful', 'crowded', 'lively', 'famous'], a: 0, why: "Shovqin yo'q → **peaceful**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["It's a place where people go to relax.", "It's a place which people go to relax.", "It's a place who people go to relax.", "It's a place where do people go to relax."], a: 0, why: "Joy haqida **where** + oddiy gap tartibi." },
    { k: 'fill', q: "The old town ___ been protected for years.", a: ['has'], uz: "Eski shahar yillar davomida himoya qilinadi.", why: "**has been protected** (l12)." },
    { k: 'fill', q: "The hotel has a lovely ___ of the sea.", a: ['view'], uz: "Mehmonxonadan dengiz manzarasi chiroyli.", why: "**a view of** — manzara." },
    { k: 'order', uz: "U shahar ikkala tomonida ham go'zal.", words: ['It', 'is', 'beautiful', 'on', 'both', 'sides.'], extra: ['all', 'side'], why: "**both sides** — ikkala tomon." },
    { k: 'listen', say: "It's famous for its old bakery.", opts: ["It's famous for its old bakery.", "It's famous for its new bakery.", "It was famous for its old bakery.", "It's famous for its old bank."], a: 0 },
    { k: 'tf', q: "*What's it like?* savoliga *Yes, I like it* deb javob berish to'g'ri.", a: false, why: "**What's it like?** tasvir so'raydi, shuning uchun sifatlar bilan javob bering." },
  ],
  summary: [
    "**What's it like?** — tasvir so'raydi: javob sifat bilan: *It's lively and friendly.*",
    "Foydali iboralar: **famous for**, **surrounded by**, **within walking distance**, **a lovely view of**.",
    "Tasvirni boyiting: **where** (joy), **which** (narsa), vergul bilan qo'shimcha ma'lumot, majhul nisbat.",
    "Yangi so'zlar: **district, crowded, lively, nearby, peaceful, view**.",
  ],
  homework: "O'z mahallangiz haqida 6 ta gap yozing: bitta *What's it like?* ga javob, bitta *where* bilan, bitta *which* bilan, bitta *famous for* bilan. Keyin ovoz chiqarib o'qing.",
};

export default lesson;
