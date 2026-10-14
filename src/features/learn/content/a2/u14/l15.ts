import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, describing my city with comparatives and superlatives.
const lesson: Lesson = {
  id: 'u14-l15',
  title: "Reading and writing: describing my city",
  titleUz: "O'qish va yozish: shahrimni tasvirlash",
  mini: true,
  kind: 'skill',
  goal: "Shahar haqidagi qisqa matnlarni **o'qib tushunasiz** va o'z shahringiz haqida 5–7 gapli tavsif **yozasiz**: *It is smaller than Tashkent, but it is quieter. In my opinion, it is the most beautiful city in Uzbekistan.*",
  slides: [
    {
      title: "O'qing: Buxoro",
      blocks: [
        { t: 'text', title: 'My city: Bukhara', voice: 'emma', en: "I live in Bukhara, one of the oldest and most beautiful cities in Uzbekistan. It is much smaller than Tashkent, so the streets are quieter and the population is smaller. The old town is the most interesting part of the city, and it is full of historic buildings. Many tourists come in spring, because the weather is nicer than in summer. There are not many cars, so the air is cleaner than in big cities. Public transport is not as good as in the capital, but you can walk everywhere. I think Bukhara is the best city for a quiet holiday.", uz: "Men Buxoroda yashayman, bu O'zbekistondagi eng qadimiy va eng chiroyli shaharlardan biri. U Toshkentdan ancha kichikroq, shuning uchun ko'chalar sokinroq va aholi kamroq. Eski shahar — shaharning eng qiziqarli qismi, u tarixiy binolarga to'la. Ko'p sayyohlar bahorda keladi, chunki ob-havo yozdagidan yoqimliroq. Mashinalar ko'p emas, shuning uchun havo katta shaharlardagidan toza. Jamoat transporti poytaxtdagichalik yaxshi emas, lekin hamma joyga piyoda borsa bo'ladi. Menimcha, Buxoro sokin ta'til uchun eng yaxshi shahar." },
        { t: 'check', ex: { k: 'tf', q: 'Bukhara is bigger than Tashkent.', a: false, why: "Matn: *much smaller than Tashkent*." } },
        { t: 'check', ex: { k: 'choice', q: 'Why do many tourists come in spring?', opts: ['The weather is nicer than in summer.', 'The hotels are cheaper.', 'The buses are faster.', 'There are more cars.'], a: 0, why: "Matn: *the weather is nicer than in summer*." } },
      ],
    },
    {
      title: "O'qing: katta shahar",
      blocks: [
        { t: 'text', title: "Tom's city", en: "My name is Tom and I live in a big city in the north of England. It is much bigger than my home village, and it is a lot busier. The shops are bigger, the buses are faster, and there are more things to do. But the city is noisier and more expensive than the village. The air is not as clean, and the weather is worse: it is colder and wetter. I miss the countryside, but I think the city is the best place for my job.", uz: "Mening ismim Tom, men Angliyaning shimolidagi katta shaharda yashayman. U mening tug'ilgan qishlog'imdan ancha kattaroq va ancha gavjumroq. Do'konlar kattaroq, avtobuslar tezroq va qiladigan ishlar ko'proq. Lekin shahar qishloqdan shovqinliroq va qimmatroq. Havo unchalik toza emas, ob-havo ham yomonroq: sovuqroq va namroq. Men qishloqni sog'inaman, lekin ishim uchun shahar eng yaxshi joy deb o'ylayman." },
        { t: 'check', ex: { k: 'choice', q: "What is Tom's city like compared with his village?", opts: ['Bigger, busier and noisier.', 'Smaller and quieter.', 'Cleaner and cheaper.', 'The same size.'], a: 0, why: "Matn: *bigger*, *busier*, *noisier and more expensive*." } },
        { t: 'tip', tone: 'info', md: "O'qiganda avval **qaysi ikki joy** solishtirilayotganini toping, so'ng **qiyosiy** (*-er, more*) va **orttirma** (*the -est, the most*) so'zlarga qarang. Har bir gapda **nimani** va **nima bilan** solishtirayotganini aniqlang." },
      ],
    },
    {
      title: "Yozish rejasi",
      blocks: [
        { t: 'p', md: "Shahringiz haqidagi tavsifda 5–7 gap bo'ladi. Har bir gapning o'z vazifasi bor:" },
        { t: 'table', head: ['Gap', 'Vazifasi', 'Qolip'], speak: [2], rows: [
          ['1', 'Qaysi shahar, nimasi bilan mashhur', 'I live in …, one of the oldest cities in …'],
          ['2', 'Boshqa shahar bilan solishtirish', 'It is smaller than …, but it is quieter.'],
          ['3', 'Eng yaxshi joy', 'The old town is the most interesting part.'],
          ['4', 'Ob-havo yoki transport', 'The weather is nicer in spring than in summer.'],
          ['5', 'Odamlar va ovqat', 'The people are friendly, and the food is the best.'],
          ['6', 'Fikringiz', 'In my opinion, it is the best city for …'],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['It is smaller than Tashkent.', 'It is one of the oldest cities in Asia.', 'It is the most beautiful city in Uzbekistan.'] }, bad: { title: "Noto'g'ri", items: ['It is more small than Tashkent.', 'It is one of the oldest city in Asia.', 'It is most beautiful city of Uzbekistan.'] } },
        { t: 'check', ex: { k: 'fill', q: 'Samarkand is one of the oldest ___ in Central Asia.', a: ['cities'], why: "*one of the …* dan keyin ot **ko'plikda**: *cities*." } },
      ],
    },
    {
      title: "Namuna matn",
      blocks: [
        { t: 'text', title: 'Model answer', voice: 'emma', en: "I live in Samarkand, one of the oldest cities in Central Asia. It is smaller than Tashkent, but it is more historic. The streets in the old town are narrower and quieter, and there are many tourists in spring. The weather is nicest in spring and autumn, because summer is hotter. The people are friendly, and the bread is the best in the country. In my opinion, it is the most beautiful city in Uzbekistan.", uz: "Men Samarqandda yashayman, bu Markaziy Osiyodagi eng qadimiy shaharlardan biri. U Toshkentdan kichikroq, lekin tarixiyroq. Eski shahardagi ko'chalar torroq va sokinroq, bahorda sayyohlar ko'p. Ob-havo bahor va kuzda eng yoqimli, chunki yoz issiqroq. Odamlar xushmuomala, non esa mamlakatdagi eng yaxshisi. Menimcha, bu O'zbekistondagi eng chiroyli shahar." },
        { t: 'tip', tone: 'good', md: "Shu namunani **o'zingiz uchun o'zgartiring**: shahar nomini, boshqa shaharni va ikki-uch sifatni almashtiring. Har gapni yozgandan keyin tekshiring: **than** bormi? **the** bormi? **-er** yoki **more**?" },
        { t: 'check', ex: { k: 'fix', wrong: 'It is the most beautiful city of Uzbekistan.', a: ['It is the most beautiful city in Uzbekistan.'], hint: 'joy bilan qaysi predlog?', why: "Joy nomi bilan **in**: *in Uzbekistan*." } },
        { t: 'check', ex: { k: 'choice', q: 'Which sentence is a good ending for a description?', opts: ['In my opinion, it is the best city for a quiet holiday.', 'I am from Tashkent.', 'Where is the bank?', 'The bus is slow.'], a: 0, why: "Oxirida **fikringizni** (*In my opinion, …*) yozing." } },
      ],
    },
  ],
  words: [
    { en: 'population', uz: 'aholi', ipa: 'ˌpɒp.jəˈleɪ.ʃən', pos: 'noun', ex: 'The population of Tashkent is bigger than Bukhara.', exUz: "Toshkent aholisi Buxoronikidan ko'proq." },
    { en: 'historic', uz: 'tarixiy', ipa: 'hɪˈstɒr.ɪk', pos: 'adj', ex: 'The old town is full of historic buildings.', exUz: "Eski shahar tarixiy binolarga to'la." },
    { en: 'pollution', uz: 'ifloslanish', ipa: 'pəˈluː.ʃən', pos: 'noun', ex: 'Big cities have more pollution.', exUz: "Katta shaharlarda ifloslanish ko'proq." },
    { en: 'tourist', uz: 'sayyoh', ipa: 'ˈtʊə.rɪst', pos: 'noun', ex: 'Many tourists visit the old town.', exUz: "Ko'p sayyohlar eski shaharga keladi." },
    { en: 'festival', uz: 'festival, bayram', ipa: 'ˈfes.tɪ.vəl', pos: 'noun', ex: 'The music festival is the biggest event of the year.', exUz: "Musiqa festivali yilning eng katta tadbiri." },
    { en: 'countryside', uz: 'qishloq joy, tabiat', ipa: 'ˈkʌn.tri.saɪd', pos: 'noun', ex: 'The countryside is quieter than the city.', exUz: "Qishloq joy shahardan sokinroq." },
  ],
  practice: [
    { k: 'tf', q: "Tom's city is quieter than his home village.", a: false, why: "Matn: *the city is noisier*." },
    { k: 'choice', q: "What does the writer of text 1 think about Bukhara?", opts: ['It is the best city for a quiet holiday.', 'It is too small.', 'It is the noisiest city.', 'It is bigger than Tashkent.'], a: 0, why: "Matn: *I think Bukhara is the best city for a quiet holiday*." },
    { k: 'order', uz: "U Toshkentdan kichikroq, lekin sokinroq.", words: ['It', 'is', 'smaller', 'than', 'Tashkent', 'but', 'it', 'is', 'quieter'], extra: ['more', 'as'] },
    { k: 'order', uz: "Eski shahar shaharning eng qiziqarli qismi.", words: ['The', 'old', 'town', 'is', 'the', 'most', 'interesting', 'part', 'of', 'the', 'city'], extra: ['more', 'in'] },
    { k: 'order', uz: "Menimcha, bu O'zbekistondagi eng chiroyli shahar.", words: ['In', 'my', 'opinion', 'it', 'is', 'the', 'most', 'beautiful', 'city', 'in', 'Uzbekistan'], extra: ['of', 'more'] },
    { k: 'fix', wrong: 'It is more small than Tashkent.', a: ['It is smaller than Tashkent.'], hint: "small — qisqa sifat", why: "*small* → **smaller**." },
    { k: 'fix', wrong: 'It is one of the oldest city in Asia.', a: ['It is one of the oldest cities in Asia.'], hint: "one of the … dan keyin ot", why: "*one of the …* dan keyin ot **ko'plikda**." },
    { k: 'fill', q: 'Many ___ visit the old town in spring.', a: ['tourists'], uz: "Ko'p sayyohlar bahorda eski shaharga keladi.", hint: 'sayyohlar', why: "**tourists** — sayyohlar." },
    { k: 'translate', uz: "Bahorda ob-havo yozdagidan yoqimliroq.", a: ['The weather is nicer in spring than in summer.', 'The weather in spring is nicer than in summer.', 'In spring the weather is nicer than in summer.'], why: "*nice* → **nicer** + **than**." },
    { k: 'translate', uz: "Odamlar xushmuomala, non esa mamlakatdagi eng yaxshisi.", a: ['The people are friendly, and the bread is the best in the country.', 'The people are friendly and the bread is the best in the country.'], why: "**the best in the country**." },
    { k: 'match', pairs: [['population', 'aholi'], ['historic', 'tarixiy'], ['pollution', 'ifloslanish'], ['tourist', 'sayyoh'], ['countryside', 'qishloq joy']] },
    { k: 'dictation', say: 'The streets in the old town are narrower and quieter.', a: ['The streets in the old town are narrower and quieter.'] },
    { k: 'choice', q: "Which sentence compares two cities correctly?", opts: ['Samarkand is smaller than Tashkent.', 'Samarkand is more small than Tashkent.', 'Samarkand is smaller as Tashkent.', 'Samarkand is the smaller Tashkent.'], a: 0, why: "**-er + than**." },
  ],
  quiz: [
    { k: 'choice', q: 'Tom\'s city is ___ than his village.', opts: ['noisier', 'more noisy', 'noisiest', 'the noisier'], a: 0, why: "*noisy* → **noisier**." },
    { k: 'fill', q: 'It is the ___ beautiful city in Uzbekistan.', a: ['most'], why: "Uzun sifat: **the most beautiful**." },
    { k: 'order', uz: "Havo katta shaharlardagidan toza.", words: ['The', 'air', 'is', 'cleaner', 'than', 'in', 'big', 'cities'], extra: ['more', 'as'] },
    { k: 'translate', uz: "Bu yashash uchun eng yaxshi shahar.", a: ["It's the best city to live in.", 'It is the best city to live in.', "It's the best city for living.", 'It is the best city for living.', 'It is the best city to live.'], why: "**the best city**." },
    { k: 'tf', q: "In text 1, public transport in Bukhara is as good as in the capital.", a: false, why: "Matn: *Public transport is not as good as in the capital*." },
    { k: 'fix', wrong: 'It is most beautiful city of Uzbekistan.', a: ['It is the most beautiful city in Uzbekistan.'], hint: 'the va predlog', why: "**the most** va joy bilan **in**." },
    { k: 'match', pairs: [['festival', 'festival, bayram'], ['pollution', 'ifloslanish'], ['population', 'aholi'], ['tourist', 'sayyoh']] },
    { k: 'choice', q: "Which is the best first sentence for a city description?", opts: ['I live in Samarkand, one of the oldest cities in Central Asia.', 'I am live in Samarkand.', 'Samarkand is a city very old.', 'In my opinion.'], a: 0, why: "Birinchi gapda **qayerda** yashashingizni ayting." },
  ],
  summary: [
    "Shahar tavsifi: **joy → boshqa shahar bilan solishtirish → eng yaxshi joy → ob-havo/transport → odamlar → fikr**.",
    "Qolip: **smaller than …**, **one of the oldest cities in …**, **the most beautiful city in …**, **In my opinion, …**",
    "Ehtiyot bo'ling: ❌ *more small*, ❌ *one of the oldest city*, ❌ *most beautiful city of Uzbekistan*.",
    "Yangi so'zlar: **population, historic, pollution, tourist, festival, countryside**.",
  ],
  homework: "O'z shahringiz yoki qishlog'ingiz haqida 5–7 gapli tavsif yozing. Kamida 2 ta qiyosiy (**than** bilan), 1 ta orttirma (**the most / the -est**) va oxirida **In my opinion, …** bo'lsin.",
};

export default lesson;
