import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit with new examples (passive, relative clauses, articles, quantifiers, tags, polite questions, travel review).
const lesson: Lesson = {
  id: 'u21-l11',
  title: 'People and places: final review',
  titleUz: 'Odamlar va joylar: yakuniy takror',
  mini: true,
  kind: 'review',
  goal: "Bosqichdagi hamma mavzuni takrorlaysiz: **majhul nisbat**, **nisbiy gaplar**, **artikl va miqdor so'zlari**, **question tags**, **muloyim savollar** va sharh yozish iboralari.",
  slides: [
    {
      title: "Majhul nisbat",
      blocks: [
        { t: 'p', md: "Formula doim bir: **to be + V3**. Zamonni **be** ko'rsatadi:" },
        { t: 'table', head: ['Shakl', 'Misol'], speak: [1], rows: [
          ['Present Simple', 'Cheese is made from milk.'],
          ['Past Simple', 'The castle was built in 1850.'],
          ['Present Perfect', 'The road has been closed.'],
          ['Future', 'A new school will be opened here.'],
          ['Modal', 'Dogs must be kept on a lead.'],
        ] },
        { t: 'tip', tone: 'warn', md: "Fe'lni asosiy shaklda qoldirmang: *The bridge was build* ❌ → *was built* ✅. Ishni bajaruvchi muhim bo'lsagina **by** qo'shing." },
        { t: 'check', ex: { k: 'choice', q: "The museum ___ next summer.", opts: ['will be closed for repairs', 'will closed for repairs', 'has be closed for repairs', 'is closing been'], a: 0, why: "Kelasi zamon majhul: **will be + V3**." } },
      ],
    },
    {
      title: "Nisbiy gaplar va artikl",
      blocks: [
        { t: 'table', head: ['Mavzu', 'Qoida', 'Misol'], speak: [2], rows: [
          ['who / that', 'odam', 'The guide who showed us the town was excellent.'],
          ['which / that', 'narsa', 'This is the hotel that we stayed in.'],
          ['where', 'joy', 'It is a town where life is slow.'],
          ['whose', 'egalik', 'I met a girl whose father is an architect.'],
          ['vergul bilan', "qo'shimcha ma'lumot", 'The tower, which was built in 1900, is closed.'],
          ['a / the / —', "birinchi marta / ma'lum / umumiy", 'I saw a bridge. The bridge was old. I love bridges.'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['The man who lives next door is a guide.', 'Mary, who is my cousin, lives in Leeds.', 'I need some advice.'] },
          bad: { title: 'Xato', items: ['The man who he lives next door is a guide.', 'Mary who is my cousin, lives in Leeds, which.', 'I need an advice.'] } },
        { t: 'tip', tone: 'info', md: "Vergulli gapda **that** ishlatilmaydi va gapni olib tashlasa ham ma'no buzilmaydi. Sanalmaydigan otlar (*advice, information, luggage*) oldidan **a** qo'yilmaydi." },
        { t: 'check', ex: { k: 'fill', q: "My uncle, ___ lives in Moscow, is a pilot.", a: ['who'], why: "Vergulli gapda odam uchun **who**." } },
        { t: 'check', ex: { k: 'choice', q: "She gave me ___ useful information.", opts: ['some', 'an', 'a', 'many'], a: 0, why: "**information** sanalmaydi → **some**." } },
      ],
    },
    {
      title: "Miqdor so'zlari, tags va muloyim savollar",
      blocks: [
        { t: 'examples', items: [
          { en: "Both bridges are old, but neither of them is dangerous.", uz: "Ikkala ko'prik ham eski, lekin ularning hech biri xavfli emas.", note: "**both / neither** — faqat ikkitaga." },
          { en: "Every house has a garden, and each garden is different.", uz: "Har bir uyning bog'i bor va har bir bog' boshqacha.", note: "**every / each** + birlik." },
          { en: "You haven't been to Bukhara, have you?", uz: "Siz Buxoroda bo'lmagansiz, shundaymi?", note: "Inkor gap + darak tag." },
          { en: "Could you tell me where the museum is?", uz: "Muzey qayerda ekanini ayta olasizmi?", note: "Muloyim savol — darak tartibi." },
          { en: "Although the room was small, it was comfortable.", uz: "Xona kichik bo'lsa-da, qulay edi.", note: "**Although** + gap, **but** yo'q." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "It's a nice city, ___?", opts: ["isn't it", "is it", "doesn't it", "aren't it"], a: 0, why: "Darak gap → inkor tag." } },
        { t: 'check', ex: { k: 'tf', q: "*Do you know where is the station?* — To'g'ri savol.", a: false, why: "*where the station is* — darak tartibi." } },
      ],
    },
    {
      title: "Dialog: mehmonxona haqida",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Emma', en: "Tom, you stayed at the Riverside Hotel, didn't you?", uz: "Tom, sen Riverside mehmonxonasida qolgansan, shundaymi?" },
          { who: 'Tom', en: "Yes, I did. It's a convenient hotel which was renovated last year.", uz: "Ha. Bu o'tgan yili yangilangan qulay mehmonxona." },
          { who: 'Emma', en: "Was the room comfortable?", uz: "Xona qulay edimi?" },
          { who: 'Tom', en: "Very. Both beds were new, and every room has a view of the river.", uz: "Juda. Ikkala to'shak ham yangi edi va har bir xonadan daryo manzarasi ko'rinadi." },
          { who: 'Emma', en: "Could you tell me how much it costs?", uz: "Qancha turishini ayta olasanmi?" },
          { who: 'Tom', en: "Eighty pounds a night. Neither of us found it expensive.", uz: "Kechasiga sakson funt. Ikkalamiz ham qimmat deb o'ylamadik." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'The hotel was renovated this year.', a: false, why: "*renovated last year.*" } },
      ],
    },
  ],
  words: [
    { en: 'convenient', uz: 'qulay (joylashgan)', ipa: 'kənˈviːniənt', pos: 'adj', ex: 'The hotel is convenient for the station.', exUz: 'Mehmonxona bekatga yaqin va qulay.' },
    { en: 'landscape', uz: 'manzara, tabiat', ipa: 'ˈlændskeɪp', pos: 'noun', ex: 'The landscape is beautiful.', exUz: 'Tabiat go\'zal.' },
    { en: 'population', uz: 'aholi', ipa: 'ˌpɒpjuˈleɪʃn', pos: 'noun', ex: 'The population is growing.', exUz: "Aholi soni o'smoqda." },
    { en: 'cultural', uz: 'madaniy', ipa: 'ˈkʌltʃrəl', pos: 'adj', ex: 'It is a cultural centre.', exUz: 'Bu madaniy markaz.' },
    { en: 'renovate', uz: 'yangilamoq', ipa: 'ˈrenəveɪt', pos: 'verb', ex: 'They will renovate the old station.', exUz: 'Ular eski bekatni yangilaydi.' },
  ],
  practice: [
    { k: 'match', pairs: [['convenient', 'qulay'], ['landscape', 'tabiat manzarasi'], ['population', 'aholi'], ['cultural', 'madaniy'], ['renovate', 'yangilamoq']] },
    { k: 'choice', q: "The castle ___ in the twelfth century.", opts: ['was built', 'is built', 'has built', 'built'], a: 0, why: "O'tgan zamon majhul: **was built**." },
    { k: 'choice', q: "Where is the man ___ car was stolen?", opts: ['whose', 'who', 'which', 'where'], a: 0, why: "Egalik → **whose**." },
    { k: 'fill', q: "This is the café ___ we met last year.", a: ['where'], uz: "Bu biz o'tgan yili tanishgan kafe.", why: "Joy → **where**." },
    { k: 'fill', q: "The new library has ___ opened.", a: ['been'], uz: "Yangi kutubxona ochildi.", why: "**has been + V3**." },
    { k: 'listen', say: 'Neither of the hotels was expensive.', opts: ['Neither of the hotels was expensive.', 'Both of the hotels were expensive.', 'Neither of the hotels were not expensive.', 'None of the hotel was expensive.'], a: 0 },
    { k: 'order', uz: "Chiptalarni internetda sotib olish mumkin.", words: ['Tickets', 'can', 'be', 'bought', 'online.'], extra: ['buy', 'are'], why: "**can be + V3**." },
    { k: 'order', uz: "Muzey qayerda ekanini ayta olasizmi?", words: ['Could', 'you', 'tell', 'me', 'where', 'the', 'museum', 'is?'], extra: ['does', 'is'], why: "Muloyim savol: darak tartibi." },
    { k: 'fix', wrong: 'The man who he works here is my uncle.', a: ['The man who works here is my uncle.', 'The man that works here is my uncle.'], why: "Olmosh qayta qo'yilmaydi." },
    { k: 'fix', wrong: 'Every rooms has a balcony.', a: ['Every room has a balcony.', 'All the rooms have a balcony.', 'All rooms have a balcony.'], why: "**every** + birlik ot." },
    { k: 'translate', uz: "Siz Samarqandda bo'lgansiz, shunday emasmi?", a: ["You've been to Samarkand, haven't you?", "You have been to Samarkand, haven't you?"], why: "Darak + inkor tag: **haven't you?**" },
    { k: 'translate', uz: "Men sizga bir oz maslahat bermoqchiman.", a: ["I'd like to give you some advice.", "I would like to give you some advice.", "I want to give you some advice."], why: "**advice** — sanalmaydi: *some advice*." },
    { k: 'tf', q: "*The hotel, that was built in 1900, is lovely.* — Gap to'g'ri.", a: false, why: "Vergulli gapda **that** emas, **which**." },
    { k: 'dictation', say: 'The room was small, but it was comfortable.', a: ['The room was small, but it was comfortable.'], uz: "Xona kichik edi, lekin qulay edi." },
    { k: 'speak', say: 'It is a cultural centre which was built last year.', uz: "Bu o'tgan yili qurilgan madaniy markaz." },
  ],
  quiz: [
    { k: 'choice', q: "The streets ___ every morning.", opts: ['are cleaned', 'cleaned', 'is cleaned', 'are clean'], a: 0, why: "Ega ko'plik, Present Simple majhul: **are cleaned**." },
    { k: 'choice', q: "I'd like to buy ___ umbrella.", opts: ['an', 'a', 'the one', 'some'], a: 0, why: "Unli tovush bilan boshlanadi → **an**." },
    { k: 'choice', q: "___ of my two brothers lives in London.", opts: ['Neither', 'Both', 'All', 'Every'], a: 0, why: "Ikkalasi ham yo'q, birlik fe'l → **neither**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Do you know if the shop is open?', 'Do you know is the shop open?', 'Do you know if is the shop open?', 'Do you know if the shop open?'], a: 0, why: "**if** + darak tartibi." },
    { k: 'fill', q: "You don't like fish, ___ you?", a: ['do'], uz: "Sen baliqni yoqtirmaysan, shundaymi?", why: "Inkor gap → darak tag." },
    { k: 'fill', q: "The bridge ___ be repaired before winter.", a: ['must', 'should', 'will'], uz: "Ko'prik qishgacha ta'mirlanishi kerak.", why: "Modal + **be + V3**." },
    { k: 'order', uz: "Biz uch kecha qoldik, ammo xona kichik edi.", words: ['We', 'stayed', 'three', 'nights,', 'but', 'the', 'room', 'was', 'small.'], extra: ['although', 'for'], alt: [['We', 'stayed', 'three', 'nights', 'but', 'the', 'room', 'was', 'small.']], why: "**but** bilan oddiy bog'lanish." },
    { k: 'fix', wrong: 'Although the food was cold, but we ate it.', a: ['Although the food was cold, we ate it.', 'The food was cold, but we ate it.'], why: "**although** bilan **but** bo'lmaydi." },
    { k: 'listen', say: 'The new bridge has been opened.', opts: ['The new bridge has been opened.', 'The new bridge will be opened.', 'The new bridge was opened.', 'The new bridge has opened.'], a: 0 },
    { k: 'tf', q: "*I need an advice.* — Gap to'g'ri.", a: false, why: "**advice** sanalmaydi: *some advice*." },
  ],
  summary: [
    "**Majhul nisbat**: to be + V3 (*is made, was built, has been closed, will be opened, can be seen*).",
    "**Nisbiy gaplar**: who, which, that, where, whose; vergulli gapda **that** yo'q va *olmosh qayta qo'yilmaydi*.",
    "**Artikl**: a / an / the / —; sanalmaydigan otlar bilan *some*. **both, either, neither** — ikkita; **all** — ko'p; **each, every** + birlik.",
    "**Question tags** va **muloyim savollar** (*Could you tell me where … is?*) — darak tartibi.",
    "Sharhda: **although** (but yo'q), **however,**, **the only problem was…**.",
  ],
  homework: "Oxirgi sayohatingiz haqida 8 ta gap yozing: 2 ta majhul gap, 2 ta nisbiy gap, 1 ta question tag, 1 ta muloyim savol, 1 ta *although* va 1 ta *both / neither* bilan.",
};

export default lesson;
