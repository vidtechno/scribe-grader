import type { Lesson } from '../../../types';

// Mini lesson (review): the whole unit u3. Numbers/age/prices, Present Simple, time, in/on/at, frequency adverbs, How often.
const lesson: Lesson = {
  id: 'u3-l12',
  title: 'Everyday life: final review',
  titleUz: 'Kundalik hayot: yakuniy takror',
  mini: true,
  goal: "Butun bo'limni takrorlaysiz: **sonlar, yosh, narx, Present Simple, vaqt, in / on / at, always / never va How often**. Haftangiz haqida bemalol gapirasiz.",
  slides: [
    {
      title: 'Bir qarashda: bo\'lim qoliplari',
      blocks: [
        { t: 'table', head: ['Mavzu', 'Qolip'], speak: [1], rows: [
          ['Yosh', "I'm twenty-five. He is forty."],
          ['Narx', 'How much is it? It is fifty dollars.'],
          ['Present Simple', "She works. I don't work. Does he work?"],
          ['Vaqt', 'It is half past seven.'],
          ['in / on / at', 'on Monday, in July, at nine'],
          ['Chastota', 'I always get up early. She is never late.'],
        ] },
        { t: 'tip', tone: 'info', md: "**-s** faqat darak gapda he / she / it bilan. **Does / doesn't** dan keyin fe'l oddiy shaklda. **to be** dan **keyin**: *is always*; oddiy fe'ldan **oldin**: *always works*." },
        { t: 'check', ex: { k: 'choice', q: "To'g'ri gapni tanlang:", opts: ['He always is late.', 'He is always late.', 'He late is always.', 'Always he late.'], a: 1, why: "**to be** dan keyin: *He is always late.*" } },
      ],
    },
    {
      title: 'Hayotda: Karimning haftasi',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Anna', en: 'How old is your brother?', uz: 'Akangiz necha yoshda?' },
          { who: 'Karim', en: "He's thirty-five. He works in a bank.", uz: "U o'ttiz besh yoshda. U bankda ishlaydi." },
          { who: 'Anna', en: 'What time does he start work?', uz: 'U ishni soat nechada boshlaydi?' },
          { who: 'Karim', en: 'He usually starts at nine. He is never late.', uz: "U odatda to'qqizda boshlaydi. U hech qachon kechikmaydi." },
          { who: 'Anna', en: 'Does he work on Saturday?', uz: 'U shanba kuni ishlaydimi?' },
          { who: 'Karim', en: "No, he doesn't. He is lazy at the weekend!", uz: "Yo'q. U dam olish kunlari dangasa!" },
          { who: 'Anna', en: 'How often does he play football?', uz: "U qanchalik tez-tez futbol o'ynaydi?" },
          { who: 'Karim', en: 'Twice a week, on Sunday and on Wednesday.', uz: 'Haftada ikki marta, yakshanba va chorshanba kuni.' },
        ] },
        { t: 'check', ex: { k: 'fill', q: 'Karim\'s brother ___ work on Saturday. (negative)', a: ["doesn't", 'does not'], uz: 'Karimning akasi shanba kuni ishlamaydi.', why: "he + inkor → **doesn't** + oddiy fe'l." } },
      ],
    },
    {
      title: "Eng ko'p uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['She works on Monday.', 'We meet in July.', 'I never drink coffee.', 'How often do you swim?'], }, bad: { title: "Noto'g'ri", items: ['She work in Monday.', 'We meet on July.', "I don't never drink coffee.", 'How often you swim?'] } },
        { t: 'tip', tone: 'warn', md: "Eslatma: **kun** — *on*, **oy** — *in*, **soat** — *at*. **never** o'zi inkor: *don't never* demang." },
        { t: 'check', ex: { k: 'choice', q: 'My lesson starts ___ Friday.', opts: ['in', 'on', 'at', 'to'], a: 1, why: "Hafta kuni → **on Friday**." } },
      ],
    },
  ],
  words: [
    { en: 'holiday', uz: "ta'til, dam olish", ipa: 'ˈhɒl.ə.deɪ', pos: 'noun', ex: 'I have a holiday in July.', exUz: "Iyulda ta'tilim bor." },
    { en: 'ticket', uz: 'chipta', ipa: 'ˈtɪk.ɪt', pos: 'noun', ex: 'A ticket is twenty dollars.', exUz: "Chipta yigirma dollar." },
    { en: 'lazy', uz: 'dangasa', ipa: 'ˈleɪ.zi', pos: 'adj', ex: 'He is lazy at the weekend.', exUz: 'U dam olish kunlari dangasa.' },
    { en: 'late', uz: 'kech, kechikkan', ipa: 'leɪt', pos: 'adj', ex: 'He is never late.', exUz: 'U hech qachon kechikmaydi.' },
    { en: 'expensive', uz: 'qimmat', ipa: 'ɪkˈspen.sɪv', pos: 'adj', ex: 'This ticket is expensive.', exUz: 'Bu chipta qimmat.' },
    { en: 'salary', uz: 'maosh', ipa: 'ˈsæl.ər.i', pos: 'noun', ex: 'My salary is good.', exUz: 'Maoshim yaxshi.' },
  ],
  practice: [
    { k: 'choice', q: 'My sister ___ at nine.', opts: ['start', 'starts', 'starting', 'is start'], a: 1 },
    { k: 'fill', q: 'How ___ do you play chess?', a: ['often'], uz: "Qanchalik tez-tez shaxmat o'ynaysiz?" },
    { k: 'order', uz: "U odatda yettida turadi.", words: ['She', 'usually', 'gets', 'up', 'at', 'seven'], extra: ['on'], alt: [['Usually', 'she', 'gets', 'up', 'at', 'seven']] },
    { k: 'translate', uz: "Men dushanba kuni ishlamayman.", a: ["I don't work on Monday.", 'I do not work on Monday.'] },
    { k: 'match', pairs: [['holiday', "ta'til"], ['ticket', 'chipta'], ['lazy', 'dangasa'], ['salary', 'maosh']] },
    { k: 'tf', q: "*My birthday is on July.* — gap to'g'ri.", a: false, why: "Oy → **in July**." },
    { k: 'listen', say: 'It is half past seven.', opts: ['It is half past seven.', 'It is seven o\'clock.', 'It is half past eleven.', 'It is a quarter to seven.'], a: 0 },
    { k: 'fix', wrong: 'He have a ticket.', a: ['He has a ticket.'], why: "**he** + have → **has**." },
    { k: 'fix', wrong: 'She is always works.', a: ['She always works.'], why: "Oddiy fe'l bilan **is** kerak emas: *She always works.*" },
    { k: 'dictation', say: 'How much is the ticket?', a: ['How much is the ticket?'] },
    { k: 'speak', say: 'I usually have lunch at one.', uz: 'Men odatda birda tushlik qilaman.' },
  ],
  quiz: [
    { k: 'choice', q: 'We have a holiday ___ August.', opts: ['on', 'in', 'at', 'to'], a: 1 },
    { k: 'fill', q: 'He ___ lazy at the weekend. (to be)', a: ['is'] },
    { k: 'order', uz: "Siz shanba kuni ishlaysizmi?", words: ['Do', 'you', 'work', 'on', 'Saturday'], extra: ['Does', 'works'] },
    { k: 'translate', uz: "U hech qachon kechikmaydi.", a: ['She is never late.', 'He is never late.'] },
    { k: 'tf', q: "*He doesn't likes tea.* — gap to'g'ri.", a: false, why: "To'g'risi: *He doesn't **like** tea.*" },
    { k: 'fix', wrong: 'How often you play football?', a: ['How often do you play football?'], why: "Savolda **do** kerak." },
    { k: 'match', pairs: [['twice a week', 'haftada ikki marta'], ['every day', 'har kuni'], ['once a month', 'oyda bir marta']] },
    { k: 'dictation', say: 'She never drinks coffee.', a: ['She never drinks coffee.'] },
  ],
  summary: [
    "Yosh va narx: **I'm thirty. How much is it?** Sonlar 20–100 gacha.",
    "Present Simple: **-s** (he/she/it), **don't / doesn't**, **Do / Does**.",
    "**on** — kun, **in** — oy, **at** — soat.",
    "**always, usually, often, never** — oddiy fe'ldan oldin, **to be** dan keyin. **How often** — chastota haqida savol.",
  ],
  homework: "O'z haftangiz haqida 6 ta gap yozing: kun, vaqt va chastota ravishlaridan foydalaning.",
};

export default lesson;
