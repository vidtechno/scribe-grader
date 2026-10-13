import type { Lesson } from '../../../types';

// Mini lesson (grammar): the or no article. Practises the choice from l8 with general vs specific meaning.
const lesson: Lesson = {
  id: 'u6-l13',
  title: 'The or no article?',
  titleUz: 'the yoki artiklsiz: aniq, yagona va umumiy narsalar',
  mini: true,
  kind: 'grammar',
  goal: "Gapda **the** kerakmi yoki **artiklsizmi** tez hal qilasiz: aniq va yagona narsa — *the*, umumiy ko'plik va sanalmaydigan ot — artiklsiz.",
  slides: [
    {
      title: "Umumiy yoki aniq?",
      blocks: [
        { t: 'p', md: "Bitta savol bering: **men umuman gapiryapmanmi, yoki aniq bir narsa haqidami?** Umuman — artiklsiz. Aniq (ikkalamiz biladigan) — **the**." },
        { t: 'examples', items: [
          { en: 'Dogs are friendly.', uz: "Itlar xushmuomala (umuman).", note: "Umumiy ko'plik — artiklsiz." },
          { en: 'The dogs next door are friendly.', uz: "Qo'shnimizning itlari xushmuomala.", note: "Aniq itlar — the." },
          { en: 'Water is important.', uz: "Suv muhim (umuman).", note: "Sanalmaydigan ot — artiklsiz." },
          { en: 'The water in this glass is cold.', uz: "Bu stakandagi suv sovuq.", note: "Aniq suv — the." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'I love ___ music. (umuman)', opts: ['the', 'a', 'an', "(artiklsiz)"], a: 3, why: "Umuman musiqa — **I love music.**" } },
        { t: 'check', ex: { k: 'choice', q: '___ music in this café is very loud.', opts: ['The', 'A', 'An', "(artiklsiz)"], a: 0, why: "Aniq, shu kafedagi musiqa — **The music…**" } },
      ],
    },
    {
      title: "Yagona va hamma biladigan narsalar",
      blocks: [
        { t: 'p', md: "Dunyoda bitta bo'lgan yoki hamma biladigan narsa bilan **the** ishlating:" },
        { t: 'table', head: ['Inglizcha', "O'zbekcha"], speak: [0], rows: [
          ["The weather is nice today.", "Bugun ob-havo yaxshi."],
          ["We watch the news every evening.", "Biz har kech yangiliklarni ko'ramiz."],
          ["Tashkent is the capital of Uzbekistan.", "Toshkent — O'zbekiston poytaxti."],
          ["Where's the airport?", "Aeroport qayerda?"],
          ["She listens to the radio in the car.", "U mashinada radio tinglaydi."],
          ["They live in the countryside.", "Ular shahar tashqarisida yashaydi."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['Life is short.', 'I like football.', 'The weather is nice.'] }, bad: { title: "Noto'g'ri", items: ['The life is short.', 'I like the football.', 'Weather is nice today.'] } },
        { t: 'tip', tone: 'warn', md: "Umumiy fikrda **the** qo'ymang: *I like coffee.* (umuman kofe). Aniq narsa haqida esa **the** kerak: *The coffee in this cup is cold.*" },
        { t: 'check', ex: { k: 'fill', q: 'Tashkent is ___ capital of Uzbekistan.', a: ['the'], why: "Davlatning poytaxti bitta — **the capital**." } },
      ],
    },
    {
      title: "Dialog: safarga tayyorgarlik",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Dilya', en: 'Is the weather good in Samarkand now?', uz: "Hozir Samarqandda ob-havo yaxshimi?" },
          { who: 'Aziz', en: 'Yes, it is. I always check the news and the weather on the internet.', uz: "Ha. Men doim internetda yangiliklar va ob-havoni ko'raman." },
          { who: 'Dilya', en: 'Is the airport far from the centre?', uz: "Aeroport markazdan uzoqmi?" },
          { who: 'Aziz', en: "No, it isn't. I like travelling, but I don't like hotels in big cities.", uz: "Yo'q. Men sayohatni yaxshi ko'raman, lekin katta shaharlardagi mehmonxonalarni yoqtirmayman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Dialogda Aziz **travelling** (sayohat) haqida umuman gapiradi, shuning uchun **the** yo'q.", a: true, why: "*I like travelling* — umumiy fikr." } },
      ],
    },
  ],
  words: [
    { en: 'weather', uz: 'ob-havo', ipa: 'ˈweð.ə', pos: 'noun', ex: 'The weather is lovely today.', exUz: "Bugun ob-havo ajoyib." },
    { en: 'news', uz: 'yangiliklar', ipa: 'njuːz', pos: 'noun', ex: 'We watch the news every evening.', exUz: "Biz har kech yangiliklarni ko'ramiz." },
    { en: 'capital', uz: 'poytaxt', ipa: 'ˈkæp.ɪ.təl', pos: 'noun', ex: 'Tashkent is the capital of Uzbekistan.', exUz: "Toshkent — O'zbekiston poytaxti." },
    { en: 'airport', uz: 'aeroport', ipa: 'ˈeə.pɔːt', pos: 'noun', ex: 'The airport is far from the centre.', exUz: "Aeroport markazdan uzoq." },
    { en: 'radio', uz: 'radio', ipa: 'ˈreɪ.di.əʊ', pos: 'noun', ex: 'My father listens to the radio.', exUz: "Otam radio tinglaydi." },
    { en: 'countryside', uz: 'shahar tashqarisi, qishloq joy', ipa: 'ˈkʌn.tri.saɪd', pos: 'noun', ex: 'My grandparents live in the countryside.', exUz: "Bobo-buvim shahar tashqarisida yashaydi." },
  ],
  practice: [
    { k: 'choice', q: '___ weather is lovely today.', opts: ['The', 'A', 'An', "(artiklsiz)"], a: 0, why: "Bugungi ob-havo — aniq: **The weather**." },
    { k: 'fill', q: 'Where is ___ airport?', a: ['the'], uz: "Aeroport qayerda?", why: "Hamma biladigan aeroport — **the**." },
    { k: 'choice', q: 'I like ___ music.', opts: ['the', 'a', 'an', "(artiklsiz)"], a: 3, why: "Umumiy fikr — artiklsiz." },
    { k: 'tf', q: "*Water is important.* — to'g'ri gap (umumiy fikr).", a: true, why: "Umumiy fikr, shuning uchun artikl yo'q." },
    { k: 'fix', wrong: 'The life is short.', a: ['Life is short.'], why: "Umumiy fikrda **the** kerak emas." },
    { k: 'order', uz: "Biz har kech yangiliklarni ko'ramiz.", words: ['We', 'watch', 'the', 'news', 'every', 'evening'], extra: ['a', 'an'] },
    { k: 'match', pairs: [['weather', 'ob-havo'], ['news', 'yangiliklar'], ['capital', 'poytaxt'], ['airport', 'aeroport'], ['countryside', 'shahar tashqarisi']] },
    { k: 'translate', uz: 'Bugun ob-havo yaxshi.', a: ['The weather is nice today.', 'The weather is good today.', "The weather's nice today.", "The weather's good today.", 'The weather is nice.'], why: "Aniq ob-havo — **The weather**." },
    { k: 'listen', say: 'The airport is far from the city centre.', opts: ['The airport is far from the city centre.', 'The airport is near the city centre.', 'The station is far from the city centre.', 'An airport is far from the city centre.'], a: 0 },
    { k: 'dictation', say: 'Dogs are friendly.', a: ['Dogs are friendly.'] },
    { k: 'fill', q: 'She listens to ___ radio in the car.', a: ['the'], uz: "U mashinada radio tinglaydi.", why: "**listen to the radio** — qat'iy ibora." },
    { k: 'speak', say: 'The weather is nice today.', uz: 'Bugun ob-havo yaxshi.' },
    { k: 'speak', say: 'I like music.', uz: 'Men musiqani yaxshi ko\'raman.' },
  ],
  quiz: [
    { k: 'choice', q: 'Tashkent is ___ capital of Uzbekistan.', opts: ['the', 'a', 'an', "(artiklsiz)"], a: 0 },
    { k: 'fill', q: 'We watch ___ news every evening.', a: ['the'], why: "**the news** — qat'iy ibora." },
    { k: 'order', uz: 'Itlar xushmuomala.', words: ['Dogs', 'are', 'friendly'], extra: ['The', 'is'] },
    { k: 'translate', uz: "Hayot qisqa.", a: ['Life is short.', "Life's short."] },
    { k: 'tf', q: "*I like the football.* — umumiy fikrda to'g'ri gap.", a: false, why: "Umumiy fikr: **I like football.**" },
    { k: 'fix', wrong: 'Children need the sleep.', a: ['Children need sleep.'], why: "Umumiy fikr — artiklsiz." },
    { k: 'match', pairs: [['radio', 'radio'], ['news', 'yangiliklar'], ['capital', 'poytaxt'], ['weather', 'ob-havo']] },
    { k: 'choice', q: "Which sentence is about one particular café?", opts: ['The coffee in this café is cold.', 'Coffee is cold.', 'I like coffee.', 'Coffee is popular.'], a: 0, why: "Aniq joy va aniq kofe — **the**." },
  ],
  summary: [
    "Aniq, ikkalamiz biladigan narsa — **the**: *the music in this café*.",
    "Umumiy fikrda ko'plik va sanalmaydigan ot **artiklsiz**: *Dogs are friendly. Water is important.*",
    "Yagona narsalar: **the weather, the news, the capital, the radio, the airport**.",
  ],
  homework: "Har kuni 3 ta umumiy fikr (*I like tea.*) va 3 ta aniq narsa haqidagi gap (*The tea is hot.*) yozing.",
};

export default lesson;
