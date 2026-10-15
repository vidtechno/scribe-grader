import type { Lesson } from '../../../types';

// Mini lesson (grammar): all, both, either, neither, each, every. Builds on l4 (determiners) without repeating a, the, some, any, much, many.
const lesson: Lesson = {
  id: 'u21-l13',
  title: 'All, both, either, neither, each, every',
  titleUz: 'All, both, either, neither, each va every',
  mini: true,
  kind: 'grammar',
  goal: "**all, both, either, neither, each, every** so'zlarini to'g'ri ishlatasiz: ikkita narsa uchun **both / either / neither**, uchta va undan ko'p uchun **all**, **each** va **every** dan keyin esa birlik otni qo'yasiz.",
  slides: [
    {
      title: "Ikkita yoki ko'p: both va all",
      blocks: [
        { t: 'p', md: "Ba'zi so'zlar **ikkita** narsa haqida, ba'zilari **uch va undan ko'p** narsa haqida gapiradi. Shuni ajrating:" },
        { t: 'table', head: ["So'z", "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['both', 'ikkalasi (2 ta)', 'Both hotels are near the station.'],
          ['all', "hammasi (3 va undan ko'p)", 'All the rooms have a sea view.'],
          ['both of', 'ikkalasi', 'Both of them are very friendly.'],
          ['all of', 'hammasi', 'All of the shops are closed on Sunday.'],
        ] },
        { t: 'tip', tone: 'info', md: "**both** va **all** dan keyin ko'plik ot keladi: *both cities*, *all the tourists*. **all** sanalmaydigan ot bilan ham ishlaydi: *all the information*, *all day*. Olmosh bilan **of** kerak: *both of them, all of us*." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Both my parents work in a hospital.', 'All the museums are free.', 'We stayed there all day.'] },
          bad: { title: 'Xato', items: ['Both my parent work in a hospital.', 'All the museums is free.', 'We stayed there whole day.'] } },
        { t: 'check', ex: { k: 'choice', q: "Menda ikkita akam bor. ___ of them live in Tashkent.", opts: ['Both', 'All', 'Each', 'Every'], a: 0, why: "Ikkita odam → **both**." } },
      ],
    },
    {
      title: "Either va neither",
      blocks: [
        { t: 'p', md: "**either** — ikkitadan *biri* (farqi yo'q). **neither** — *ikkalasi ham emas*. Ikkalasi ham faqat **ikkita** narsa haqida." },
        { t: 'examples', items: [
          { en: "You can take either bus. Both go to the centre.", uz: "Ikkala avtobusdan xohlaganingizga chiqing. Ikkalasi ham markazga boradi.", note: "**either** — biri yoki ikkinchisi." },
          { en: "Neither bus goes to the airport.", uz: "Hech bir avtobus aeroportga bormaydi.", note: "**neither** + birlik ot + birlik fe'l." },
          { en: "Neither of the hotels was expensive.", uz: "Mehmonxonalarning ikkalasi ham qimmat emas edi.", note: "**neither of** + ko'plik: ma'no inkor, fe'l darak." },
          { en: "I don't like either of them.", uz: "Ikkalasi ham menga yoqmaydi.", note: "**not … either** = neither." },
        ] },
        { t: 'tip', tone: 'warn', md: "**neither** o'zi inkor ma'noli: *Neither of them was ready.* ✅. *Neither of them wasn't ready* ❌. Inkor fe'l bilan **either** ishlating: *I didn't see either of them.*" },
        { t: 'check', ex: { k: 'fill', q: "We didn't like ___ of the two restaurants.", a: ['either'], why: "Inkor fe'l (*didn't*) + **either of**." } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Neither of the roads is open.', "Neither of the roads isn't open.", 'Neither roads is open.', 'Either of the roads are not neither open.'], a: 0, why: "**neither** o'zi inkor, fe'l darak shaklda." } },
      ],
    },
    {
      title: "Each va every",
      blocks: [
        { t: 'p', md: "Ikkalasi ham *har bir* degan ma'noni beradi va **birlik ot** hamda **birlik fe'l** bilan ishlatiladi. Farqi: **each** — alohida-alohida, **every** — hamma birgalikda." },
        { t: 'table', head: ["So'z", "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['each', "har biri (alohida)", 'Each room has its own balcony.'],
          ['every', "har bir (umumiy)", 'Every room has a sea view.'],
          ['each of', 'ulardan har biri', 'Each of the guests gets a map.'],
          ['every day / week', "har kuni / har hafta", 'The market is open every day.'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Every student has a laptop.', 'Each of the rooms is different.', 'The bus leaves every ten minutes.'] },
          bad: { title: 'Xato', items: ['Every students have a laptop.', 'Each of the rooms are different.', 'Every of the rooms is different.'] } },
        { t: 'tip', tone: 'good', md: "**every** dan keyin **of** to'g'ridan-to'g'ri kelmaydi: *every one of the rooms* yoki *each of the rooms*. Birlik shakl: *everyone, everything* ham birlik fe'l bilan: *Everyone is here.*" },
        { t: 'check', ex: { k: 'choice', q: "___ person in the queue had a ticket.", opts: ['Every', 'All', 'Both', 'Neither'], a: 0, why: "Birlik ot (*person*) → **every** (yoki *each*)." } },
        { t: 'check', ex: { k: 'tf', q: "*Each of the hotels have a pool.* — Gap to'g'ri.", a: false, why: "**each of** + birlik fe'l: *Each of the hotels has a pool.*" } },
      ],
    },
    {
      title: "Matn: ikki shahar",
      blocks: [
        { t: 'text', title: 'Two cities', en: "Both cities are popular with tourists, but they are very different. Neither of them is expensive, so either one is a good choice for a weekend. In the first city, every street has a cafe and all the museums are free. In the second city, each hotel has its own garden. We visited both and enjoyed them all. Every evening we walked by the river.", uz: "Ikkala shahar ham sayyohlar orasida mashhur, ammo ular bir-biridan juda farq qiladi. Ularning hech biri qimmat emas, shuning uchun ikkalasidan biri dam olish kunlari uchun yaxshi tanlov. Birinchi shaharda har bir ko'chada kafe bor va barcha muzeylar bepul. Ikkinchi shaharda har bir mehmonxonaning o'z bog'i bor. Biz ikkalasiga ham bordik va hammasidan zavq oldik. Har kuni kechqurun daryo bo'yida sayr qildik." },
        { t: 'check', ex: { k: 'tf', q: 'Both cities are very expensive.', a: false, why: "*Neither of them is expensive.*" } },
        { t: 'check', ex: { k: 'choice', q: "What does every street have in the first city?", opts: ['A cafe', 'A garden', 'A museum', 'A river'], a: 0, why: "*Every street has a cafe.*" } },
      ],
    },
  ],
  words: [
    { en: 'option', uz: 'variant, tanlov', ipa: 'ˈɒpʃn', pos: 'noun', ex: 'Both options are good.', exUz: 'Ikkala variant ham yaxshi.' },
    { en: 'member', uz: "a'zo", ipa: 'ˈmembə', pos: 'noun', ex: 'Each member gets a free ticket.', exUz: "Har bir a'zo bepul chipta oladi." },
    { en: 'available', uz: "bor, mavjud, band emas", ipa: 'əˈveɪləbl', pos: 'adj', ex: 'Neither room is available tonight.', exUz: "Bugun kechqurun na bir xona bo'sh." },
    { en: 'suitable', uz: 'mos, munosib', ipa: 'ˈsuːtəbl', pos: 'adj', ex: 'Either date is suitable for me.', exUz: 'Ikkala sana ham menga mos.' },
    { en: 'several', uz: 'bir nechta', ipa: 'ˈsevrəl', pos: 'det', ex: 'We visited several museums.', exUz: 'Biz bir nechta muzeyga bordik.' },
  ],
  practice: [
    { k: 'match', pairs: [['both', 'ikkalasi'], ['all', "hammasi (3+)"], ['either', 'ikkitadan biri'], ['neither', 'ikkalasi ham emas'], ['every', 'har bir (umumiy)'], ['each', 'har biri (alohida)']] },
    { k: 'choice', q: "I have two sisters. ___ of them speak French.", opts: ['Both', 'All', 'Every', 'Each one'], a: 0, why: "Ikkita → **both**." },
    { k: 'choice', q: "There are fifty students. ___ of them passed the test.", opts: ['All', 'Both', 'Neither', 'Either'], a: 0, why: "Ko'p → **all**." },
    { k: 'fill', q: "Not ___ hotel has a swimming pool, but the cheap one does.", a: ['every'], uz: "Har bir mehmonxonada basseyn yo'q.", why: "Birlik ot (*hotel*) + **every**." },
    { k: 'fill', q: "___ of the two buses goes to the airport. We must take a taxi.", a: ['Neither'], uz: "Ikkala avtobus ham aeroportga bormaydi.", why: "Ikkalasi ham yo'q → **neither**." },
    { k: 'listen', say: 'Each of the rooms has its own bathroom.', opts: ['Each of the rooms has its own bathroom.', 'Each of the rooms have its own bathroom.', 'Both of the rooms have their own bathroom.', 'All of the rooms has a bathroom.'], a: 0 },
    { k: 'order', uz: "Ikkala mehmonxona ham markazda.", words: ['Both', 'hotels', 'are', 'in', 'the', 'centre.'], extra: ['is', 'every'], alt: [['Both', 'of', 'the', 'hotels', 'are', 'in', 'the', 'centre.']], why: "**both** + ko'plik ot + ko'plik fe'l." },
    { k: 'order', uz: "Har bir mehmonning o'z xonasi bor.", words: ['Every', 'guest', 'has', 'their', 'own', 'room.'], extra: ['have', 'guests'], alt: [['Every', 'guest', 'has', 'his', 'or', 'her', 'own', 'room.'], ['Each', 'guest', 'has', 'their', 'own', 'room.']], why: "**every** + birlik ot + birlik fe'l." },
    { k: 'fix', wrong: 'Every students have a ticket.', a: ['Every student has a ticket.', 'All the students have a ticket.', 'All students have a ticket.'], why: "**every** + birlik ot + birlik fe'l." },
    { k: 'fix', wrong: "Neither of the shops isn't open.", a: ['Neither of the shops is open.', "Neither of the shops are open.", "None of the shops is open.", "None of the shops are open."], why: "**neither** o'zi inkor: ikkinchi inkor kerak emas." },
    { k: 'translate', uz: "Ikkalasi ham menga yoqmadi.", a: ["I didn't like either of them.", "I did not like either of them.", "I liked neither of them.", "I didn't like either.", "I did not like either."], why: "**didn't … either** yoki **neither**." },
    { k: 'translate', uz: "Har bir xonada televizor bor.", a: ['Every room has a TV.', 'Each room has a TV.', 'Every room has a television.', 'Each room has a television.'], why: "**every / each** + birlik ot + **has**." },
    { k: 'tf', q: "*Both* ikkita narsa haqida, *all* esa uch va undan ko'p narsa haqida gapiradi.", a: true, why: "**both** = 2, **all** = 3 va undan ko'p." },
    { k: 'dictation', say: 'Either date is suitable for me.', a: ['Either date is suitable for me.'], uz: "Ikkala sana ham menga mos." },
    { k: 'speak', say: 'Both of them are very friendly.', uz: "Ikkalasi ham juda xushmuomala." },
  ],
  quiz: [
    { k: 'choice', q: "I have two cousins. ___ of them lives near me.", opts: ['Neither', 'Both', 'Every', 'All'], a: 0, why: "Ikkalasi ham emas → **neither** (fe'l birlik, darak)." },
    { k: 'choice', q: "You can pay by card or in cash. ___ is fine.", opts: ['Either', 'Neither', 'Every', 'All'], a: 0, why: "Ikkitadan biri farqi yo'q → **either**." },
    { k: 'choice', q: "___ the hotels in this street are cheap.", opts: ['All', 'Every', 'Each', 'Neither of'], a: 0, why: "Ko'plik ot (*hotels*) + **all the**." },
    { k: 'fill', q: "Each of the guests ___ a free map.", a: ['gets', 'receives'], uz: 'Har bir mehmon bepul xarita oladi.', why: "**each of** + birlik fe'l." },
    { k: 'fill', q: "___ my parents like travelling. They go abroad every year.", a: ['Both'], uz: "Ota-onamning ikkalasi ham sayohatni yaxshi ko'radi.", why: "Ikkita → **both**." },
    { k: 'fix', wrong: 'Every of the rooms is clean.', a: ['Every one of the rooms is clean.', 'Each of the rooms is clean.', 'All of the rooms are clean.', 'Every room is clean.'], why: "**every of** bo'lmaydi: *every one of* yoki *each of*." },
    { k: 'order', uz: "Ikkala yo'l ham yopiq.", words: ['Neither', 'road', 'is', 'open.'], extra: ["isn't", 'both'], alt: [['Neither', 'of', 'the', 'roads', 'is', 'open.']], why: "**neither** + birlik ot + darak fe'l." },
    { k: 'listen', say: 'Every student has a laptop.', opts: ['Every student has a laptop.', 'Every students have a laptop.', 'All students has a laptop.', 'Both students have a laptop.'], a: 0 },
    { k: 'tf', q: "*I didn't like neither of them.* — Gap to'g'ri.", a: false, why: "Ikki marta inkor bo'lmaydi: *I didn't like either of them.*" },
  ],
  summary: [
    "**both** — ikkita (*both cities*); **all** — uch va undan ko'p yoki sanalmaydigan ot (*all the rooms, all day*).",
    "**either** — ikkitadan biri; **neither** — ikkalasi ham emas. **neither** o'zi inkor: *not* qo'shilmaydi.",
    "**each** va **every** + birlik ot + birlik fe'l: *Every room has…*, *Each of the rooms has…*.",
    "*every of* ❌ → *every one of* yoki *each of* ✅.",
    "Yangi so'zlar: **option, member, available, suitable, several**.",
  ],
  homework: "Do'stlaringiz yoki oilangiz haqida 6 ta gap yozing: 1 ta *both*, 1 ta *all*, 1 ta *either*, 1 ta *neither*, 1 ta *each* va 1 ta *every* bilan.",
};

export default lesson;
