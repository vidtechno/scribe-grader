import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples (opinions, linking words, comparison, conditionals and passive, tenses, presentation and essay phrases).
const lesson: Lesson = {
  id: 'u23-l11',
  title: 'Intermediate: final review',
  titleUz: "Intermediate: yakuniy takror",
  mini: true,
  kind: 'review',
  goal: "Butun mavzuni yangi misollarda takrorlaysiz: **fikr bildirish**, **bog'lovchi so'zlar**, **taqqoslash**, **shart gaplar va majhul nisbat**, **zamonlar**, **taqdimot va esse iboralari**.",
  slides: [
    {
      title: "Fikr va bog'lovchi so'zlar",
      blocks: [
        { t: 'p', md: "Fikringizni **aytish**, **himoya qilish** va **bog'lash** — munozaraning asosi." },
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Fikr', "In my view, remote learning is useful."],
          ['Ishonch', "I'm convinced that we need more green spaces."],
          ['Qo\'shish', "In addition, it is cheap."],
          ['Qarama-qarshilik', "It is fast. However, it is not safe."],
          ['Natija', "It rained all day. Therefore, we stayed in."],
          ['Xulosa', "In conclusion, the benefits are greater than the risks."],
        ] },
        { t: 'tip', tone: 'warn', md: "**Although** bilan **but** birga ishlatilmaydi: *Although it is old, it works well.*" },
        { t: 'check', ex: { k: 'fix', wrong: "Although the food was cheap, but it was delicious.", a: ["Although the food was cheap, it was delicious.", "The food was cheap, but it was delicious."], why: "**Although** va **but** birga kelmaydi." } },
        { t: 'check', ex: { k: 'choice', q: "The course is long. ___ , it is very useful.", opts: ['However', 'Moreover', 'Therefore', 'Firstly'], a: 0, why: "Qarama-qarshilik: **However**." } },
      ],
    },
    {
      title: "Taqqoslash, shart gaplar, majhul nisbat",
      blocks: [
        { t: 'examples', items: [
          { en: "Trains are faster than buses, but they are more expensive.", uz: "Poyezdlar avtobuslardan tezroq, lekin qimmatroq.", note: "Taqqoslash: **-er than / more … than**." },
          { en: "If we use less plastic, the sea will be cleaner.", uz: "Kamroq plastik ishlatsak, dengiz toza bo'ladi.", note: "Birinchi shart: **If** + hozirgi, **will**." },
          { en: "If I had more time, I would learn another language.", uz: "Vaqtim ko'proq bo'lsa, boshqa tilni o'rganardim.", note: "Ikkinchi shart: **If** + o'tgan, **would**." },
          { en: "This bridge was built in 1990.", uz: "Bu ko'prik 1990 yilda qurilgan.", note: "Majhul nisbat: **was / were + V3**." },
          { en: "Plastic bottles are recycled in this city.", uz: "Bu shaharda plastik shishalar qayta ishlanadi.", note: "Hozirgi majhul: **am / is / are + V3**." },
        ] },
        { t: 'tip', tone: 'info', md: "Savol: *When was this bridge built?* **did** emas, **was**. Shartning **if** qismida **will** yo'q." },
        { t: 'check', ex: { k: 'choice', q: "If it ___ tomorrow, we will stay at home.", opts: ['rains', 'will rain', 'rained', 'would rain'], a: 0, why: "Birinchi shart: if + hozirgi." } },
        { t: 'check', ex: { k: 'fix', wrong: "When did this school build?", a: ["When was this school built?"], why: "Majhul savol: **When was … built?**" } },
      ],
    },
    {
      title: "Zamonlar va taqdimot",
      blocks: [
        { t: 'table', head: ['Zamon', 'Misol'], speak: [1], rows: [
          ['Present Simple', 'She works in a bank.'],
          ['Present Continuous', 'She is working from home today.'],
          ['Past Simple', 'We visited Samarkand last spring.'],
          ['Present Perfect', 'I have lived here since 2020.'],
          ['Future (will / going to)', 'I am going to start a course next month.'],
        ] },
        { t: 'p', md: "Taqdimot va esse uchun iboralar: **Today I would like to talk about…**, **Firstly, …**, **For example, …**, **In conclusion, …**, **Thank you for listening.**" },
        { t: 'dialog', lines: [
          { who: 'Helen', en: "I think online lessons are better. They save time, and you can study anywhere.", uz: "Menimcha, onlayn darslar yaxshiroq. Ular vaqtni tejaydi va istalgan joyda o'qish mumkin." },
          { who: 'Ben', en: "I see your point. However, I have studied online for a year, and I miss my classmates.", uz: "Fikringni tushundim. Biroq men bir yildan beri onlayn o'qiyman va sinfdoshlarimni sog'inaman." },
          { who: 'Helen', en: "That's true. If the school offered both, would you choose that?", uz: "To'g'ri. Agar maktab ikkalasini ham taklif qilsa, shuni tanlarmiding?" },
          { who: 'Ben', en: "Yes, I would. A mix is the best compromise.", uz: "Ha, tanlardim. Aralashma — eng yaxshi kelishuv." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Ben has studied online for a year.", a: true, why: "*I have studied online for a year.*" } },
        { t: 'check', ex: { k: 'choice', q: "I ___ here for three years.", opts: ['have lived', 'live', 'am living', 'lived'], a: 0, why: "Davom etayotgan muddat: Present Perfect + for." } },
      ],
    },
  ],
  words: [
    { en: 'debate', uz: 'munozara', ipa: 'dɪˈbeɪt', pos: 'noun', ex: 'There is a lot of debate about this idea.', exUz: "Bu g'oya haqida ko'p munozara bor." },
    { en: 'evidence', uz: 'dalil, isbot', ipa: 'ˈev.ɪ.dəns', pos: 'noun', ex: 'You need evidence to support your opinion.', exUz: "Fikringizni asoslash uchun dalil kerak." },
    { en: 'viewpoint', uz: 'nuqtai nazar', ipa: 'ˈvjuː.pɔɪnt', pos: 'noun', ex: 'Try to see the problem from another viewpoint.', exUz: "Muammoga boshqa nuqtai nazardan qarashga harakat qiling." },
    { en: 'express', uz: 'ifodalamoq', ipa: 'ɪkˈspres', pos: 'verb', ex: 'It is hard to express this idea in English.', exUz: "Bu fikrni inglizcha ifodalash qiyin." },
    { en: 'balance', uz: 'muvozanat', ipa: 'ˈbæl.əns', pos: 'noun', ex: 'We need a balance between work and rest.', exUz: "Ish va dam olish o'rtasida muvozanat kerak." },
  ],
  practice: [
    { k: 'match', pairs: [['debate', 'munozara'], ['evidence', 'dalil'], ['viewpoint', 'nuqtai nazar'], ['express', 'ifodalamoq'], ['balance', 'muvozanat']] },
    { k: 'choice', q: "The plan is cheap. ___ , it is easy to start.", opts: ['In addition', 'However', 'Whereas', 'Therefore'], a: 0, why: "Yana bir yaxshi tomon: **In addition**." },
    { k: 'choice', q: "If I ___ rich, I would travel the world.", opts: ['were', 'am', 'will be', 'would be'], a: 0, why: "Ikkinchi shart: if + o'tgan (**were**)." },
    { k: 'choice', q: "The letter ___ yesterday.", opts: ['was sent', 'sent', 'is sent', 'has sent'], a: 0, why: "O'tgan majhul: **was sent**." },
    { k: 'fill', q: "Cycling is healthier ___ driving.", a: ['than'], uz: "Velosipedda yurish mashina haydashdan sog'lomroq.", why: "Taqqoslash: **than**." },
    { k: 'fill', q: "She has worked here ___ 2019.", a: ['since'], uz: "U 2019 yildan beri shu yerda ishlaydi.", why: "**since** + boshlanish nuqtasi." },
    { k: 'fill', q: "I'm ___ that we need a better plan.", a: ['convinced'], uz: "Menda yaxshiroq reja kerak degan ishonch bor.", why: "**I'm convinced that…**" },
    { k: 'order', uz: "Xulosa qilib aytganda, ikkala tomonning ham haqligi bor.", words: ['In', 'conclusion,', 'both', 'sides', 'have', 'a', 'point.'], extra: ['firstly', 'has'], why: "Xulosa iborasi." },
    { k: 'fix', wrong: "If it will be sunny, we will go to the park.", a: ["If it is sunny, we will go to the park.", "If it's sunny, we will go to the park."], why: "**if** dan keyin **will** yo'q." },
    { k: 'fix', wrong: "I am agree with the writer.", a: ["I agree with the writer."], why: "**agree** — fe'l, **am** kerak emas." },
    { k: 'translate', uz: "Bu ko'prik 2010 yilda qurilgan.", a: ["This bridge was built in 2010."], why: "Majhul o'tgan: **was built**." },
    { k: 'dictation', say: 'In my view, we need more evidence.', a: ['In my view, we need more evidence.'], uz: "Mening fikrimcha, bizga ko'proq dalil kerak." },
    { k: 'speak', say: 'I see your point, but I would like to add something.', uz: "Fikringizni tushundim, lekin bir narsa qo'shmoqchiman." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["Although it was late, we kept working.", "Although it was late, but we kept working.", "Although of the late, we kept working.", "Although it was late however we kept working."], a: 0, why: "**Although** + gap, **but** yo'q." },
    { k: 'choice', q: "Where ___ this photo taken?", opts: ['was', 'did', 'were', 'is being'], a: 0, why: "Majhul savol: **was … taken**." },
    { k: 'fill', q: "We stayed at home. ___ , we watched a film.", a: ['Instead', 'Then', 'instead', 'then'], why: "Mantiqiy bog'lovchi." },
    { k: 'fill', q: "She gave me some good ___ . (maslahat)", a: ['advice'], why: "**advice** — sanalmaydi." },
    { k: 'order', uz: "Agar vaqtim bo'lsa, qo'ng'iroq qilaman.", words: ['If', 'I', 'have', 'time,', 'I', 'will', 'call', 'you.'], extra: ['would', 'had'], why: "Birinchi shart." },
    { k: 'tf', q: "*Today I would like to talk about…* — taqdimotni boshlash iborasi.", a: true, why: "Bu — kirish iborasi." },
    { k: 'translate', uz: "Men Toshkentda ikki yildan beri yashayman.", a: ["I have lived in Tashkent for two years.", "I've lived in Tashkent for two years."], why: "Present Perfect + for." },
  ],
  summary: [
    "Fikr: **In my view, I'm convinced that…**; bog'lovchilar: **however, therefore, in addition, in conclusion**; **Although** + **but** yo'q.",
    "Shart gaplar: **if + hozirgi, will**; **if + o'tgan, would**. Majhul: **was / were / is / are + V3**.",
    "Zamonlar: Present Simple, Continuous, Past Simple, Present Perfect (**for / since**), future.",
    "Yangi so'zlar: **debate, evidence, viewpoint, express, balance**.",
  ],
  homework: "Bir mavzu tanlang (masalan, onlayn o'qish) va 8 gap yozing: fikr, ikki sabab (**in addition**), qiyinchilik (**however**), bitta shart gap va xulosa.",
};

export default lesson;
