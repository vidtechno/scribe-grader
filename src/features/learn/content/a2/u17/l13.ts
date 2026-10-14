import type { Lesson } from '../../../types';

// Mini lesson (grammar): quantity words with countable and uncountable nouns, in shopping and money contexts.
const lesson: Lesson = {
  id: 'u17-l13',
  title: 'Quantity words',
  titleUz: "Miqdor so'zlari: a lot of, much, many, a few, a little, enough",
  mini: true,
  kind: 'grammar',
  goal: "Sanaladigan va sanalmaydigan otlar bilan **a lot of, much, many, a few, a little, enough** ni to'g'ri tanlaysiz, **How much / How many** savollarini tuzasiz va xarid hamda pul haqida *I don't have much money*, *There are a few apples* kabi gaplar aytasiz.",
  slides: [
    {
      title: "Sanaladigan yoki sanalmaydigan?",
      blocks: [
        { t: 'p', md: "Avval otni tekshiring: uni **sanash mumkinmi** (*one apple, two apples*) yoki yo'qmi (*water, money, bread, time*)? Miqdor so'zi shunga qarab tanlanadi." },
        { t: 'table', head: ["So'z", 'Sanaladigan (apples)', 'Sanalmaydigan (money)'], speak: [1, 2], rows: [
          ['a lot of / lots of', 'a lot of apples', 'a lot of money'],
          ['many', 'many apples', '—'],
          ['much', '—', 'much money'],
          ['How many … ?', 'How many apples?', '—'],
          ['How much … ?', '—', 'How much money?'],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['I have a lot of friends.', "I don't have much time.", 'How many bags do you have?', 'How much sugar do you need?'] }, bad: { title: "Noto'g'ri", items: ['I have much friends.', "I don't have many time.", 'How much bags do you have?', 'How many sugar do you need?'] } },
        { t: 'tip', tone: 'info', md: "Darak gapda **much** juda kam ishlatiladi; o'rniga **a lot of** deng: *We have **a lot of** money* (✅), *We have much money* (tabiiy emas). **much / many** asosan **savol** va **inkor** gaplarda: *Is there **much** traffic? I don't have **many** clothes.*" },
        { t: 'check', ex: { k: 'choice', q: "How ___ bread do we need?", opts: ['much', 'many', 'few', 'a few'], a: 0, why: "*bread* sanalmaydi → **How much**." } },
        { t: 'check', ex: { k: 'choice', q: "There are ___ people in the shop today.", opts: ['a lot of', 'much', 'a little', 'many of'], a: 0, why: "Darak gap, *people* — **a lot of**." } },
      ],
    },
    {
      title: "a few, a little, few, little",
      blocks: [
        { t: 'p', md: "Kichik miqdor uchun ham ikkita so'z bor. Ular ham sanaladigan va sanalmaydigan otlarga qarab bo'linadi:" },
        { t: 'table', head: ["So'z", 'Qaysi ot bilan', 'Misol'], speak: [2], rows: [
          ['a few', 'sanaladigan (ko\'plik)', 'I bought a few oranges.'],
          ['a little', 'sanalmaydigan', 'I need a little sugar.'],
          ['few', "sanaladigan: deyarli yo'q", 'Few shops are open on Sunday.'],
          ['little', "sanalmaydigan: deyarli yo'q", 'We have little time.'],
        ] },
        { t: 'tip', tone: 'warn', md: "**a few / a little** — \"bir nechta / ozgina, lekin bor\" (ijobiy). **few / little** (a siz) — \"deyarli yo'q\" (salbiy, ko'pincha kamchilik). *I have **a little** money — I can buy a coffee.* *I have **little** money — I can't buy anything.*" },
        { t: 'examples', items: [
          { en: 'There are a few eggs in the fridge.', uz: "Muzlatgichda bir nechta tuxum bor." },
          { en: 'We have a little bread left.', uz: "Bizda ozgina non qoldi." },
          { en: 'There is plenty of milk. Buy a little more sugar.', uz: "Sut yetarli. Yana ozgina shakar oling.", note: "**plenty of** = yetarlicha ko'p." },
        ] },
        { t: 'check', ex: { k: 'fill', q: 'Can I have ___ water, please? (ozgina)', a: ['a little'], why: "*water* sanalmaydi → **a little**." } },
        { t: 'check', ex: { k: 'fill', q: 'I only have ___ coins in my bag. (bir nechta)', a: ['a few'], why: "*coins* sanaladi → **a few**." } },
      ],
    },
    {
      title: "enough va too",
      blocks: [
        { t: 'p', md: "**enough** — \"yetarli\". Ot bilan **oldin** turadi, sifat bilan **keyin**. Ortiqcha bo'lsa, **too much / too many** deymiz." },
        { t: 'table', head: ['Qolip', 'Misol', "Ma'nosi"], speak: [1], rows: [
          ['enough + ot', 'I have enough money.', 'Pulim yetarli.'],
          ['sifat + enough', 'The bag is big enough.', 'Sumka yetarlicha katta.'],
          ["not enough + ot", "We don't have enough chairs.", "Stullar yetarli emas."],
          ['too much + sanalmaydigan', 'There is too much salt.', "Tuz juda ko'p."],
          ['too many + sanaladigan', 'There are too many people.', "Odam juda ko'p."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['I have enough money.', 'It is cheap enough.', 'There are too many shoes here.'] }, bad: { title: "Noto'g'ri", items: ['I have money enough.', 'It is enough cheap.', 'There are too much shoes here.'] } },
        { t: 'check', ex: { k: 'choice', q: "The shoes are 80,000 so'm. I have 50,000. I don't have ___ money.", opts: ['enough', 'too', 'many', 'a few'], a: 0, why: "Pul yetmayapti → **enough money**." } },
        { t: 'check', ex: { k: 'choice', q: "There are ___ people in the queue. I don't want to wait.", opts: ['too many', 'too much', 'enough', 'a little'], a: 0, why: "*people* sanaladi, ortiqcha → **too many**." } },
      ],
    },
    {
      title: "Dialog: ziyofat uchun xarid",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: "We have ten guests on Saturday. How much food do we need?", uz: "Shanba kuni o'nta mehmonimiz bor. Qancha ovqat kerak?" },
          { who: 'Sardor', en: "A lot! Let's buy bread, a few tomatoes and plenty of fruit.", uz: "Ko'p! Non, bir necha pomidor va yetarlicha meva olamiz." },
          { who: 'Madina', en: "How much money have we got?", uz: "Qancha pulimiz bor?" },
          { who: 'Sardor', en: "Not much, only 200,000 so'm. But I think it's enough.", uz: "Ko'p emas, atigi 200 ming so'm. Lekin menimcha, yetadi." },
          { who: 'Madina', en: "Do we have enough plates?", uz: "Likopchalarimiz yetarlimi?" },
          { who: 'Sardor', en: "Only a few. I'll ask Mum for some more.", uz: "Bir nechtagina. Onamdan yana so'rayman." },
          { who: 'Madina', en: "And we need a little sugar for the tea. We have very little.", uz: "Choy uchun ozgina shakar ham kerak. Bizda juda oz qolgan." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Madina and Sardor have a lot of money for the party.", a: false, why: "Sardor: *Not much, only 200,000 so'm.*" } },
        { t: 'check', ex: { k: 'choice', q: "What does Sardor think about the money?", opts: ['It is enough.', 'It is too much.', 'It is not enough.', 'There is a lot of it.'], a: 0, why: "*But I think it's enough.*" } },
      ],
    },
  ],
  words: [
    { en: 'budget', uz: 'byudjet', ipa: 'ˈbʌdʒ.ɪt', pos: 'noun', ex: 'Our budget for the party is small.', exUz: "Ziyofat uchun byudjetimiz kichik." },
    { en: 'plenty of', uz: 'yetarlicha ko\'p', ipa: 'ˈplen.ti əv', pos: 'phrase', ex: 'We have plenty of time.', exUz: "Vaqtimiz yetarlicha ko'p." },
    { en: 'a few', uz: 'bir nechta', ipa: 'ə ˈfjuː', pos: 'phrase', ex: 'I need a few apples.', exUz: "Menga bir nechta olma kerak." },
    { en: 'a little', uz: 'ozgina', ipa: 'ə ˈlɪt.əl', pos: 'phrase', ex: 'I have a little money.', exUz: "Menda ozgina pul bor." },
    { en: 'enough', uz: 'yetarli', ipa: 'ɪˈnʌf', pos: 'adj/adv', ex: 'Is this enough for two people?', exUz: "Bu ikki kishiga yetadimi?" },
    { en: 'queue', uz: 'navbat', ipa: 'kjuː', pos: 'noun', ex: 'There is a long queue at the bank.', exUz: "Bankda uzun navbat bor." },
  ],
  practice: [
    { k: 'choice', q: 'How ___ apples do you want?', opts: ['many', 'much', 'little', 'a little'], a: 0, why: "*apples* sanaladi → **How many**." },
    { k: 'choice', q: 'I don\'t have ___ money today.', opts: ['much', 'many', 'a few', 'few'], a: 0, why: "Inkor gap, *money* sanalmaydi → **much**." },
    { k: 'fill', q: 'There are ___ of people in the market.', a: ['a lot', 'lots'], uz: "Bozorda juda ko'p odam bor.", hint: 'a lot / lots', why: "**a lot of** yoki **lots of** + ot." },
    { k: 'match', pairs: [['a few', 'bir nechta'], ['a little', 'ozgina'], ['enough', 'yetarli'], ['plenty of', "yetarlicha ko'p"], ['queue', 'navbat']] },
    { k: 'fix', wrong: 'I have a lot money in my bag.', a: ['I have a lot of money in my bag.'], hint: "Bitta so'z yetishmayapti", why: "**a lot of** + ot." },
    { k: 'order', uz: "Menda ko'p vaqt yo'q.", words: ["I", "don't", "have", "much", "time"], extra: ['many', 'a'], alt: [['I', 'do', 'not', 'have', 'much', 'time']], why: "Inkor gap + sanalmaydigan → **much**." },
    { k: 'tf', q: "*There are too much people here.* — to'g'ri gap.", a: false, why: "*people* sanaladi → **too many people**." },
    { k: 'translate', uz: "Bizda yetarlicha pul bor.", a: ['We have enough money.', "We've got enough money.", 'We have got enough money.'], why: "**enough** otdan oldin." },
    { k: 'listen', say: 'There are a few eggs in the fridge.', opts: ['There are a few eggs in the fridge.', 'There are few eggs in the fridge.', 'There is a little egg in the fridge.', 'There are many eggs in the fridge.'], a: 0, why: "Eshitilgani: **a few eggs**." },
    { k: 'dictation', say: 'How much does the bread cost?', a: ['How much does the bread cost?', 'How much does the bread cost'], uz: "Non qancha turadi?" },
    { k: 'speak', say: "I don't have much money, but it's enough.", uz: "Pulim ko'p emas, lekin yetadi." },
    { k: 'speak', say: 'How many people are in the queue?', uz: "Navbatda nechta odam bor?" },
  ],
  quiz: [
    { k: 'choice', q: 'How ___ sugar do you take in your tea?', opts: ['much', 'many', 'a few', 'enough of'], a: 0, why: "*sugar* sanalmaydi → **How much**." },
    { k: 'fill', q: "We need ___ more chairs. (bir nechta)", a: ['a few'], why: "*chairs* sanaladi → **a few**." },
    { k: 'choice', q: "The coat is too small. It isn't big ___.", opts: ['enough', 'many', 'much', 'few'], a: 0, why: "**sifat + enough**: *big enough*." },
    { k: 'fix', wrong: 'How many money do you have?', a: ['How much money do you have?'], hint: "Pul sanalmaydi", why: "*money* sanalmaydi → **How much**." },
    { k: 'order', uz: "Yetarlicha pulingiz bormi?", words: ['Do', 'you', 'have', 'enough', 'money?'], extra: ['much', 'many'], why: "**enough** + ot." },
    { k: 'tf', q: "*I have a little money* degani: ozgina pulim bor va uni ishlata olaman.", a: true, why: "**a little** — ijobiy: \"ozgina, lekin bor\"." },
    { k: 'translate', uz: "Do'konda ko'p odam bor.", a: ['There are a lot of people in the shop.', 'There are lots of people in the shop.', 'There are many people in the shop.'], why: "*people* sanaladi: **There are a lot of people**." },
    { k: 'listen', say: "There isn't much traffic today.", opts: ["There isn't much traffic today.", "There isn't many traffic today.", 'There is a lot of traffic today.', "There aren't many cars today."], a: 0, why: "Eshitilgani: **isn't much traffic**." },
  ],
  summary: [
    "Sanaladigan ot: **many, a few, few**. Sanalmaydigan ot: **much, a little, little**. Ikkalasi bilan: **a lot of, enough, plenty of**.",
    "Savol va inkor: **How many / How much**, **not many / not much**. Darak gapda **a lot of**.",
    "**a few / a little** — bor (ijobiy); **few / little** — deyarli yo'q.",
    "**enough** + ot (*enough money*), sifat + **enough** (*big enough*); ortiqcha: **too much / too many**.",
    "Yangi so'zlar: **budget, plenty of, a few, a little, enough, queue**.",
  ],
  homework: "Do'konga borishdan oldin xarid ro'yxati tuzing va 5 ta gap yozing: *We need a lot of…, a few…, a little…, We don't have enough…*.",
};

export default lesson;
