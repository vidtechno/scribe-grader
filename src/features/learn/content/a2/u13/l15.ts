import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing an invitation and a reply. Recycles l7 (making plans), l12 and l13.
const lesson: Lesson = {
  id: 'u13-l15',
  title: "Reading and writing: an invitation and a reply",
  titleUz: "O'qish va yozish: taklifnoma va javob xati",
  mini: true,
  kind: 'skill',
  goal: "Qisqa **taklifnoma** va **javob xatini o'qib tushunasiz** hamda o'zingiz 4–6 gapli taklifnoma va javob **yozasiz**: *I'm having a party on Saturday. Would you like to come? Please write back by Thursday.*",
  slides: [
    {
      title: "O'qing: taklifnoma",
      blocks: [
        { t: 'p', md: "Madina do'sti Benni tug'ilgan kuniga taklif qilmoqda. Avval umumiy ma'noni tushuning: **nima? qachon? qayerda? javob qachongacha?**" },
        { t: 'text', title: 'An invitation', voice: 'emma', en: "Hi Ben! I'm having a small birthday party this Saturday at my house. It starts at six o'clock. We're going to eat plov, listen to music and play games. My cousins are coming too. Would you like to come? Please write back by Thursday, because I need to know how many people are coming. If you can bring a cake, that will be lovely! My address is 12 Navoi Street. See you soon! Madina", uz: "Salom Ben! Shu shanba uyimda kichik tug'ilgan kun ziyofati qilaman. U soat oltida boshlanadi. Biz palov yeymiz, musiqa tinglaymiz va o'yin o'ynaymiz. Amakivachchalarim ham keladi. Kelmaysanmi? Iltimos, payshanbagacha javob yoz, chunki necha kishi kelishini bilishim kerak. Tort olib kela olsang, juda yaxshi bo'ladi! Manzilim: Navoiy ko'chasi, 12. Tez orada ko'rishamiz! Madina" },
        { t: 'check', ex: { k: 'choice', q: 'What time does the party start?', opts: ['At six o\'clock.', 'At seven o\'clock.', 'At five o\'clock.', 'At twelve.'], a: 0, why: "Matn: *It starts at six o'clock.*" } },
        { t: 'check', ex: { k: 'tf', q: "Ben must write back by Saturday.", a: false, why: "Matn: *Please write back by Thursday.*" } },
      ],
    },
    {
      title: "O'qing: javob xatlari",
      blocks: [
        { t: 'p', md: "Ben va Dilnoza Madinaga turlicha javob yozdi. Biri taklifni **qabul qildi**, ikkinchisi **rad etdi**." },
        { t: 'text', title: "Ben's reply", en: "Hi Madina, Thanks for the invitation! I'd love to come. I'm free on Saturday, so I'll be there at six. I'm going to bring a chocolate cake. Unless the bus is late, I'll arrive on time. I'll text you as soon as I leave home. See you on Saturday! Ben", uz: "Salom Madina, taklif uchun rahmat! Xursand bo'lib kelaman. Shanba kuni bo'shman, shuning uchun soat oltida u yerda bo'laman. Shokoladli tort olib kelaman. Avtobus kech qolmasa, o'z vaqtida yetib boraman. Uydan chiqishim bilanoq senga yozaman. Shanba kuni ko'rishamiz! Ben" },
        { t: 'text', title: "Dilnoza's reply", voice: 'emma', en: "Hi Madina, Thank you for inviting me! I'd love to come, but I'm afraid I can't make it. I'm visiting my grandparents on Saturday. I hope you have a lovely party! Maybe we can get together next week? Best wishes, Dilnoza", uz: "Salom Madina, meni taklif qilganing uchun rahmat! Xursand bo'lardim-u, afsuski, kela olmayman. Shanba kuni buvilarimnikiga boraman. Ziyofating ajoyib o'tishini tilayman! Kelasi hafta uchrashsak bo'ladimi? Eng yaxshi tilaklar bilan, Dilnoza" },
        { t: 'check', ex: { k: 'choice', q: 'What is Ben going to bring?', opts: ['A chocolate cake.', 'Some plov.', 'Music.', 'Nothing.'], a: 0, why: "Ben: *I'm going to bring a chocolate cake.*" } },
        { t: 'check', ex: { k: 'tf', q: "Dilnoza can come to the party.", a: false, why: "Dilnoza: *I'm afraid I can't make it.*" } },
      ],
    },
    {
      title: "Yozish: taklifnoma tuzilishi",
      blocks: [
        { t: 'p', md: "Qisqa taklifnoma 5 qismdan iborat: **1) salom → 2) nima, qachon, qayerda → 3) qo'shimcha tafsilot → 4) taklif va javob muddati → 5) xayrlashuv.**" },
        { t: 'table', head: ['Qism', 'Ibora'], speak: [1], rows: [
          ['Salom', 'Hi Ben! / Dear Ben,'],
          ['Nima, qachon, qayerda', "I'm having a barbecue next Sunday at the lake."],
          ['Tafsilot', 'It starts at twelve. We are going to play football.'],
          ['Taklif', 'Would you like to come? Please write back by Friday.'],
          ['Xayrlashuv', 'See you soon! / Best wishes, Aziz'],
        ] },
        { t: 'text', title: 'Model answer', en: "Hi Kamol! I'm having a barbecue next Sunday at the lake. It starts at twelve. We're going to eat kebab and play football. Would you like to come? Please write back by Friday. See you soon! Aziz", uz: "Salom Kamol! Kelasi yakshanba ko'l bo'yida barbekyu qilaman. U soat o'n ikkida boshlanadi. Kabob yeymiz va futbol o'ynaymiz. Kelmaysanmi? Iltimos, juma kunigacha javob yoz. Tez orada ko'rishamiz! Aziz" },
        { t: 'compare', good: { title: "To'g'ri", items: ["Would you like to come?", "Please write back by Friday.", "I'm having a party on Saturday."] }, bad: { title: "Xato", items: ["Would you like come?", "Please write back in Friday.", "I having a party on Saturday."] } },
        { t: 'check', ex: { k: 'fill', q: 'Please write back ___ Friday. (juma kunigacha)', a: ['by'], why: "Oxirgi muddat — **by Friday**." } },
      ],
    },
    {
      title: "Yozish: javob xati",
      blocks: [
        { t: 'p', md: "Javob xatida avval **minnatdorchilik** bildiring. Keyin **qabul qiling** yoki **rad eting** (sabab bilan), oxirida yaxshi tilak yozing." },
        { t: 'table', head: ['Qism', 'Qabul', 'Rad etish'], speak: [1, 2], rows: [
          ['Minnatdorchilik', 'Thanks for the invitation!', 'Thank you for inviting me!'],
          ['Javob', "I'd love to come.", "I'm afraid I can't make it."],
          ['Tafsilot / sabab', "I'll bring a cake.", "I'm visiting my grandparents."],
          ['Tilak', 'See you on Saturday!', 'I hope you have a lovely party!'],
        ] },
        { t: 'tip', tone: 'good', md: "Yozish vazifasi: do'stingizga kelasi hafta uchun **4–6 gapli taklifnoma** yozing (model bilan solishtiring). Keyin o'zingizga **ikki xil javob** yozing: bittasida qabul qiling, bittasida xushmuomala rad eting va boshqa vaqt taklif qiling." },
        { t: 'check', ex: { k: 'order', uz: "Taklif uchun rahmat!", words: ['Thanks', 'for', 'the', 'invitation!'], extra: ['to', 'invite'] } },
      ],
    },
  ],
  words: [
    { en: 'reply', uz: 'javob; javob bermoq', ipa: 'rɪˈplaɪ', pos: 'noun/verb', ex: 'Thank you for your reply.', exUz: "Javobingiz uchun rahmat." },
    { en: 'write back', uz: 'javob yozmoq', ipa: 'raɪt bæk', pos: 'phrasal verb', ex: 'Please write back by Thursday.', exUz: "Iltimos, payshanbagacha javob yozing." },
    { en: 'address', uz: 'manzil', ipa: 'əˈdres', pos: 'noun', ex: 'My address is 12 Navoi Street.', exUz: "Manzilim: Navoiy ko'chasi, 12." },
    { en: 'details', uz: 'tafsilotlar', ipa: 'ˈdiː.teɪlz', pos: 'noun', ex: 'I will send you the details.', exUz: "Sizga tafsilotlarni yuboraman." },
    { en: 'lovely', uz: 'ajoyib, yoqimli', ipa: 'ˈlʌv.li', pos: 'adj', ex: 'Have a lovely party!', exUz: "Ziyofatingiz ajoyib o'tsin!" },
    { en: 'best wishes', uz: 'eng yaxshi tilaklar bilan', ipa: 'best ˈwɪʃ.ɪz', pos: 'phrase', ex: 'Best wishes, Aziz', exUz: "Eng yaxshi tilaklar bilan, Aziz" },
  ],
  practice: [
    { k: 'choice', q: "Text 1: Why does Madina ask Ben to write back by Thursday?", opts: ['She needs to know how many people are coming.', 'She is going to travel on Friday.', 'The party is on Thursday.', 'She wants a cake.'], a: 0, why: "Matn: *because I need to know how many people are coming*." },
    { k: 'tf', q: "Madina's cousins are coming to the party too.", a: true, why: "Matn: *My cousins are coming too.*" },
    { k: 'match', pairs: [['reply', 'javob'], ['address', 'manzil'], ['details', 'tafsilotlar'], ['lovely', 'ajoyib'], ['write back', 'javob yozmoq']] },
    { k: 'order', uz: "Shu shanba kuni ziyofat qilaman.", words: ["I'm", 'having', 'a', 'party', 'this', 'Saturday'], extra: ['in', 'have'], alt: [['I', 'am', 'having', 'a', 'party', 'this', 'Saturday'], ['This', 'Saturday', "I'm", 'having', 'a', 'party'], ['This', 'Saturday', 'I', 'am', 'having', 'a', 'party']] },
    { k: 'order', uz: "Iltimos, payshanbagacha javob yozing.", words: ['Please', 'write', 'back', 'by', 'Thursday'], extra: ['in', 'at'] },
    { k: 'fix', wrong: 'Would you like come to my party?', a: ['Would you like to come to my party?'], why: "**Would you like to + V1**." },
    { k: 'fix', wrong: 'Please write back in Friday.', a: ['Please write back by Friday.'], why: "Oxirgi muddat — **by Friday**." },
    { k: 'fill', q: "Thanks for the ___! I'd love to come.", a: ['invitation'], uz: "Taklif uchun rahmat! Xursand bo'lib kelaman.", why: "**invitation** — taklifnoma." },
    { k: 'translate', uz: "Afsuski, kela olmayman.", a: ["I'm afraid I can't make it.", "I'm afraid I can't come.", 'I am afraid I cannot come.', "I'm afraid I can't make it", "I'm afraid I cannot make it."], why: "**I'm afraid I can't make it.**" },
    { k: 'translate', uz: "Uydan chiqishim bilanoq senga yozaman.", a: ["I'll text you as soon as I leave home.", 'I will text you as soon as I leave home.', "As soon as I leave home, I'll text you.", 'As soon as I leave home, I will text you.'], why: "**as soon as** dan keyin Present Simple." },
    { k: 'dictation', say: 'Would you like to come to my party?', a: ['Would you like to come to my party?'], uz: "Mening ziyofatimga kelmaysanmi?" },
    { k: 'choice', q: 'Which sentence is a good ending for a reply?', opts: ['See you on Saturday!', 'Where is the bank?', 'I live in Samarkand.', 'It starts at six.'], a: 0, why: "Javob xati oxirida tilak yoki xayrlashuv yoziladi." },
  ],
  quiz: [
    { k: 'choice', q: "Ben's reply: When will Ben text Madina?", opts: ['As soon as he leaves home.', 'When he arrives at the party.', 'After the party.', 'Before Thursday.'], a: 0, why: "Ben: *I'll text you as soon as I leave home.*" },
    { k: 'tf', q: "Dilnoza is going to visit her grandparents on Saturday.", a: true, why: "Matn: *I'm visiting my grandparents on Saturday.*" },
    { k: 'fill', q: 'My ___ is 12 Navoi Street.', a: ['address'], uz: "Manzilim: Navoiy ko'chasi, 12.", why: "**address** — manzil." },
    { k: 'order', uz: "Ziyofating ajoyib o'tsin!", words: ['I', 'hope', 'you', 'have', 'a', 'lovely', 'party!'], extra: ['will', 'had'] },
    { k: 'fix', wrong: 'I having a barbecue next Sunday.', a: ["I'm having a barbecue next Sunday.", 'I am having a barbecue next Sunday.'], why: "Present Continuous: **I'm having**." },
    { k: 'translate', uz: "Kelasi hafta uchrashsak bo'ladimi?", a: ['Maybe we can get together next week?', 'Can we get together next week?', 'Could we get together next week?', 'Shall we get together next week?', 'Maybe we can get together next week.', 'How about getting together next week?'], why: "**get together** — uchrashmoq." },
    { k: 'match', pairs: [['best wishes', 'eng yaxshi tilaklar bilan'], ['details', 'tafsilotlar'], ['reply', 'javob'], ['address', 'manzil']] },
    { k: 'choice', q: 'Which sentence belongs in an invitation?', opts: ['Would you like to come?', 'I am afraid I cannot make it.', 'Thanks for the invitation!', 'I would love to come.'], a: 0, why: "Taklif — **Would you like to come?**" },
  ],
  summary: [
    "Taklifnoma: **salom → nima, qachon, qayerda → tafsilot → Would you like to come? Please write back by… → xayrlashuv.**",
    "Javob xati: minnatdorchilik, **I'd love to come** yoki **I'm afraid I can't make it** (+ sabab), tilak.",
    "Yozishda: **I'm having a party**, **Please write back by Friday**, **I'll text you as soon as I leave**.",
    "Yangi so'zlar: **reply, write back, address, details, lovely, best wishes**.",
  ],
  homework: "Do'stingizga 4–6 gapli taklifnoma yozing (nima, qachon, qayerda, javob muddati). Keyin o'zingizga ikki javob yozing: bittasida qabul qiling, bittasida xushmuomala rad eting.",
};

export default lesson;
