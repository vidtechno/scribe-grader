import type { Lesson } from '../../../types';

// Mini lesson (situation): booking a hotel room. Recycles Can/Could I, dates, prices, single/double room, reservation, included.
const lesson: Lesson = {
  id: 'u10-l9',
  title: 'Booking a hotel room',
  titleUz: 'Mehmonxona xonasini band qilish',
  mini: true,
  goal: "Mehmonxonaga qo'ng'iroq qilib **xona band qilasiz**: sanalarni va narxni aytasiz, *Could I book a room? How much is it per night?* kabi savollarni berasiz.",
  slides: [
    {
      title: 'Vaziyat: telefonda xona band qilish',
      blocks: [
        { t: 'p', md: "Siz mehmonxonaga qo'ng'iroq qilasiz. Xodim **sana**, **xona turi** va **narx** haqida gapiradi. Siz **Could I…?** bilan muloyim so'raysiz." },
        { t: 'dialog', lines: [
          { who: 'Guest', en: 'Hello. Could I book a room, please?', uz: 'Salom. Xona band qilsam bo\'ladimi, iltimos?' },
          { who: 'Reception', en: 'Yes, of course. For which dates?', uz: "Albatta. Qaysi sanalarga?" },
          { who: 'Guest', en: 'From the fifth of May to the eighth of May.', uz: "Beshinchi maydan sakkizinchi maygacha." },
          { who: 'Reception', en: 'A single room or a double room?', uz: 'Bir kishilik xonami yoki ikki kishilikmi?' },
          { who: 'Guest', en: 'A double room, please. How much is it per night?', uz: "Ikki kishilik, iltimos. Bir kechasi qancha turadi?" },
          { who: 'Reception', en: "It's eighty dollars per night. Breakfast is included.", uz: "Bir kechasi sakson dollar. Nonushta kiritilgan." },
          { who: 'Guest', en: 'Good. Could I pay by card?', uz: "Yaxshi. Karta bilan to'lasam bo'ladimi?" },
          { who: 'Reception', en: 'Yes, you can. Could I have your name, please?', uz: "Ha, mumkin. Ismingizni aytsangiz?" },
        ] },
        { t: 'check', ex: { k: 'choice', q: '"How much is it ___ night?" (bir kechasiga)', opts: ['for', 'per', 'in', 'at'], a: 1, why: "**per night** = \"bir kechasiga\". *per* narx bilan ishlatiladi." } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ['Could I book a room?', 'Xona band qilmoqchisiz'],
          ['From the tenth to the twelfth of June.', 'Sanalarni aytasiz'],
          ['How much is it per night?', 'Narxni so\'raysiz'],
          ['Is breakfast included?', 'Nonushta narxga kiritilganmi?'],
          ['Is there a room available?', "Bo'sh xona bormi?"],
          ['I have a reservation.', 'Oldindan band qilgansiz'],
        ] },
        { t: 'tip', tone: 'info', md: "Sanalar tartib son bilan aytiladi: **the fifth** (5-), **the eighth** (8-), **the twelfth** (12-). Yozilishi: *5 May* yoki *May 5*." },
        { t: 'check', ex: { k: 'fill', q: 'Could I ___ a double room for two nights?', a: ['book'], uz: "Ikki kecha uchun ikki kishilik xona band qilsam bo'ladimi?", why: "**Could I** dan keyin fe'l oddiy shaklda: **book**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['Could I book a room?', "It's eighty dollars per night.", 'Is breakfast included?'] }, bad: { title: "Noto'g'ri", items: ['Could I to book a room?', 'It is eighty dollar per night.', 'Breakfast is include?'] } },
        { t: 'p', md: "Eslatma: **Could I + V1** (*to* yo'q). Narx **80 dollars** — 1 dan ko'p bo'lsa **-s** qo'shiladi. Javob: *Yes, of course.* yoki *I'm afraid not.*" },
        { t: 'check', ex: { k: 'choice', q: "Bo'sh xona yo'q. Xodim muloyim javobi:", opts: ["I'm afraid not.", 'No, you could.', 'I am not yes.', 'Not could.'], a: 0, why: "Muloyim rad javobi: **I'm afraid not.** (Afsuski, yo'q.)" } },
      ],
    },
  ],
  words: [
    { en: 'available', uz: "bo'sh, mavjud", ipa: 'əˈveɪ.lə.bəl', pos: 'adjective', ex: 'Is a double room available?', exUz: "Ikki kishilik xona bo'shmi?" },
    { en: 'per night', uz: 'bir kechasiga', ipa: 'pɜː naɪt', pos: 'phrase', ex: 'It is sixty dollars per night.', exUz: 'Bir kechasi oltmish dollar.' },
    { en: 'guest', uz: 'mehmon', ipa: 'ɡest', pos: 'noun', ex: 'The guest is at reception.', exUz: 'Mehmon qabulxonada.' },
    { en: 'cost', uz: 'turmoq (narxi)', ipa: 'kɒst', pos: 'verb', ex: 'The room costs fifty dollars.', exUz: 'Xona ellik dollar turadi.' },
  ],
  practice: [
    { k: 'choice', q: '___ I book a room, please?', opts: ['Could', 'Do', 'Am', 'Are'], a: 0, why: "Muloyim so'rov: **Could I…?**" },
    { k: 'fill', q: 'It is eighty dollars ___ night.', a: ['per'], uz: "Bir kechasi sakson dollar.", why: "**per night** = bir kechasiga." },
    { k: 'order', uz: "Bir kechasi qancha turadi?", words: ['How', 'much', 'is', 'it', 'per', 'night'], extra: ['many', 'are'] },
    { k: 'translate', uz: "Nonushta kiritilganmi?", a: ['Is breakfast included?'], why: "**Is … included?** — kiritilganmi?" },
    { k: 'match', pairs: [['available', "bo'sh, mavjud"], ['guest', 'mehmon'], ['cost', 'turmoq (narxi)'], ['reservation', 'bron'], ['single room', 'bir kishilik xona']] },
    { k: 'tf', q: "*Could I to book a room?* — gap to'g'ri.", a: false, why: "**Could I** dan keyin *to* qo'yilmaydi: *Could I book a room?*" },
    { k: 'listen', say: 'Could I book a room, please?', opts: ['Could I book a room, please?', 'Could you book a room, please?', 'Could I have a room, please?', 'Can I book a room, please?'], a: 0 },
    { k: 'dictation', say: 'Is breakfast included?', a: ['Is breakfast included?'] },
    { k: 'fix', wrong: 'Could I to pay by card?', a: ['Could I pay by card?'], why: "**Could I** + V1, *to* yo'q." },
    { k: 'fill', q: 'A: Could I pay by card? B: Yes, you ___.', a: ['can'], uz: "Ha, mumkin.", why: "Ruxsat berishda **can** aytiladi." },
    { k: 'speak', say: 'How much is it per night?', uz: 'Bir kechasi qancha turadi?' },
  ],
  quiz: [
    { k: 'choice', q: 'Is there a room ___?', opts: ['available', 'per', 'cost', 'guest'], a: 0 },
    { k: 'fill', q: 'The room ___ sixty dollars. (cost)', a: ['costs'], why: "*The room* = it → **costs**." },
    { k: 'order', uz: "Xona band qilsam bo'ladimi?", words: ['Could', 'I', 'book', 'a', 'room'], extra: ['to', 'books'] },
    { k: 'translate', uz: "Menda bron bor.", a: ['I have a reservation.', 'I have got a reservation.'] },
    { k: 'tf', q: "*Could I have a towel, please?* — muloyim so'rov.", a: true },
    { k: 'fix', wrong: 'It is eighty dollar per night.', a: ['It is eighty dollars per night.', "It's eighty dollars per night."], why: "1 dan ko'p — **dollars**." },
    { k: 'match', pairs: [['single room', 'bir kishilik xona'], ['double room', 'ikki kishilik xona'], ['included', 'kiritilgan'], ['guest', 'mehmon']] },
    { k: 'choice', q: 'Could I check out late? — ...', opts: ["I'm afraid not.", 'Yes, you could be.', 'I am not.', 'No, I could.'], a: 0 },
  ],
  summary: [
    "Xona band qilish: **Could I book a room, please?** — fe'l oddiy shaklda, *to* yo'q.",
    "Sana va narx: **from the fifth to the eighth of May**, **eighty dollars per night**.",
    "Savollar: **Is breakfast included?**, **Is a room available?**",
    "Yangi so'zlar: **available, per night, guest, cost**.",
  ],
  homework: "Mehmonxonaga qo'ng'iroq qilayotgandek 3 ta gapni baland ovozda ayting: sanalar, xona turi va narx.",
};

export default lesson;
