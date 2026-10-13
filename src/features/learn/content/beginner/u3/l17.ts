import type { Lesson } from '../../../types';

// Real-life scene: bus station. Does + base verb, What time does it leave, -s, clock times, prices.
// New: ticket, (bus station words), Here you are.
const lesson: Lesson = {
  id: 'u3-l17',
  title: 'Real life: at the bus station',
  titleUz: 'Real hayot: avtobus bekatida',
  mini: true,
  kind: 'scene',
  goal: "Avtobus bekatida **savol berasiz** (Does this bus go...? What time does it leave?), vaqtni tushunasiz, narxni so'raysiz va **chipta olasiz**.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**Does this bus go to the airport?** — **Does** dan keyin fe'l oddiy shaklda: **go** (goes emas).",
    "**What time does the bus leave?** — savolda **does** + **leave**; **-s** faqat darak gapda: **It leaves at nine.**",
    "Vaqt: **at half past nine**, **at nine o'clock**, **at quarter past ten**.",
    "**How much is the ticket?** — **It's twelve dollars.**; **One ticket to the airport, please.**",
  ],
  homework: "Ovoz chiqarib ayting: **Does this bus go to the station?** va **What time does the bus leave?** Keyin boshqa joylar va vaqtlar bilan takrorlang.",
  scene: {
    place: 'bus',
    partner: { name: 'Mr Brown', role: 'Chipta kassiri', voice: 'george', emoji: '🧑‍💼' },
    intro: "Siz — **Ali**. Avtobus bekatidasiz va aeroportga bormoqchisiz. Kassada **Mr Brown** o'tiribdi. Avtobus haqida so'rang, vaqtini bilib oling va chipta oling.",
    steps: [
      { k: 'say', en: 'Good morning! Where do you want to go?', uz: 'Xayrli tong! Qayerga bormoqchisiz?' },
      { k: 'note', title: 'Yangi so\'zlar', md: "**airport** — aeroport\n\n**ticket** — chipta\n\n**leave** — jo'nab ketmoq (avtobus **leaves** — avtobus jo'naydi)" },
      {
        k: 'pick', ask: "Aeroportga bormoqchi ekaningizni ayting.",
        opts: [
          { en: 'I want to go to the airport.', ok: true },
          { en: 'To the airport, please.', ok: true },
          { en: 'I want go to the airport.', why: "**want** dan keyin **to** kerak: **I want to go**. **to** ni tushirmang." },
          { en: 'I am the airport.', why: "**I am** — «men ...man». Siz aeroport emassiz! Borish haqida: **I want to go to the airport.**" },
          { en: 'At the airport, please.', why: "**at** — joyda turish («aeroportda»). Yo'nalish uchun **to** ishlatiladi: **to the airport**." },
        ],
        why: "Yo'nalish: **to the airport**; «bormoqchiman» — **I want to go**.",
      },
      { k: 'say', en: 'This is bus number twelve.', uz: "Bu — o'n ikkinchi avtobus." },
      {
        k: 'build', ask: "Shu avtobus aeroportga borishini so'rang: «Bu avtobus aeroportga boradimi?»", words: ['Does', 'this', 'bus', 'go', 'to', 'the', 'airport'], extra: ['goes', 'Do', 'is'],
        mistakes: [
          { a: ['Do this bus go to the airport'], why: "**this bus** = it (bitta narsa), shuning uchun **Do** emas, **Does**: **Does this bus go...?**" },
          { a: ['Does this bus goes to the airport'], why: "**Does** dan keyin fe'lga **-s** qo'yilmaydi: **Does this bus go** (goes emas)." },
          { a: ['This bus go to the airport', 'This bus goes to the airport'], why: "Savolni **Does** bilan boshlang: **Does this bus go to the airport?**" },
        ],
        why: "**Does** + this bus + **go** — fe'l oddiy shaklda.",
        drill: { k: 'choice', q: "To'g'ri savolni tanlang.", opts: ['Does this bus goes to the airport?', 'Does this bus go to the airport?', 'Do this bus go to the airport?'], a: 1, why: "**Does** + fe'l (-s siz): **go**." },
      },
      { k: 'say', en: "No, it doesn't. Bus number five goes to the airport.", uz: "Yo'q. Aeroportga beshinchi avtobus boradi." },
      {
        k: 'build', ask: "Beshinchi avtobus qachon ketishini so'rang: «Avtobus soat nechada ketadi?»", words: ['What', 'time', 'does', 'the', 'bus', 'leave'], extra: ['leaves', 'do'],
        mistakes: [
          { a: ['What time leaves the bus', 'What time leave the bus'], why: "Savolda **does** kerak: **What time does the bus leave?**" },
          { a: ['What time does the bus leaves'], why: "**does** dan keyin fe'lga **-s** qo'yilmaydi: **leave**." },
          { a: ['What time the bus leaves', 'What time the bus leave'], why: "So'z tartibi: **What time + does + the bus + leave?**" },
        ],
        why: "**What time does the bus leave?** — savolda **does** + oddiy fe'l.",
        drill: { k: 'fix', wrong: 'What time leaves the bus?', a: ['What time does the bus leave?'], why: "Savolda **does** + **leave**." },
      },
      { k: 'say', en: 'It leaves at half past nine.', uz: 'U to\'qqiz yarimda ketadi.' },
      {
        k: 'pick', ask: "Mr Brown nima dedi? Avtobus soat nechada ketadi?",
        opts: [
          { en: 'At half past nine.', ok: true },
          { en: 'At nine o\'clock.', why: "**nine o'clock** — roppa-rosa 9:00. Mr Brown **half past nine** dedi — 9:30." },
          { en: 'At quarter past nine.', why: "**quarter past nine** — 9:15. U **half past nine** dedi: 9:30." },
          { en: 'At half past ten.', why: "**half past ten** — 10:30. Mr Brown **nine** dedi: **half past nine**." },
        ],
        why: "**half past nine** = 9:30.",
      },
      {
        k: 'fill', ask: "Aytib bering: «Beshinchi avtobus aeroportga boradi.»", q: 'Bus number five ___ to the airport.', a: ['goes'],
        mistakes: [{ a: ['go'], why: "**bus number five** = it. Darak gapda **it / he / she** bilan fe'lga **-s / -es**: **goes**. (Savolda esa **does** + go.)" }],
        why: "Darak gapda **it / he / she** bilan: **goes**.", hint: 'it → go...',
        drill: { k: 'choice', q: "To'g'ri gapni tanlang.", opts: ['The bus go to the airport.', 'The bus goes to the airport.', 'The bus does goes to the airport.'], a: 1, why: "**The bus** = it → **goes**." },
      },
      { k: 'say', en: 'Do you need a ticket?', uz: 'Chipta kerakmi?' },
      {
        k: 'type', ask: "Narxini so'rang: «Chipta necha pul?»",
        a: ['How much is the ticket?', 'How much is a ticket?', 'How much is it?', 'How much is that?'],
        mistakes: [
          { a: ['How much the ticket is?', 'How much ticket is?'], why: "**is** gapdan oldin: **How much is the ticket?**" },
          { a: ['How many is the ticket?'], why: "Narx uchun **How much**, **How many** emas." },
        ],
        why: "**How much is the ticket?** — narxni so'rash.", hint: 'How much ... the ticket?',
      },
      { k: 'say', en: "It's twelve dollars.", uz: "O'n ikki dollar." },
      {
        k: 'type', ask: "Bitta aeroport chiptasini so'rang: «Aeroportga bitta chipta, iltimos.»",
        a: ['One ticket to the airport, please.', 'A ticket to the airport, please.', 'One ticket to the airport please', 'One ticket, please.', 'A ticket, please.'],
        mistakes: [
          { a: ['One ticket at the airport, please.', 'One ticket in the airport, please.'], why: "Yo'nalish uchun **to**: **One ticket to the airport, please.**" },
          { a: ['One ticket to airport, please.'], why: "**the airport** — **the** ni unutmang: **to the airport**." },
        ],
        why: "**One ticket to the airport, please.**", hint: 'One ticket ... the airport, please.',
      },
      { k: 'note', title: 'Pul berganda: Here you are', md: "Pul yoki chiptani uzatganda: **Here you are.** — «Marhamat, oling.»\n\nUnga javob: **Thank you.**" },
      { k: 'say', en: 'Twelve dollars, please.', uz: "O'n ikki dollar, iltimos." },
      {
        k: 'type', ask: "Pulni uzating va rahmat ayting: «Marhamat. Rahmat!»",
        a: ['Here you are. Thank you!', 'Here you are. Thanks!', 'Here you are, thank you.', 'Here you are.'],
        why: "Pul uzatganda: **Here you are.** va **Thank you.**", hint: 'Here you ...',
      },
    ],
    outro: "Siz bekatda **savol berdingiz**, vaqtni tushundingiz va chipta oldingiz. **Does ... go?** va **What time does ... leave?** har safar safarda kerak bo'ladi.",
  },
};

export default lesson;
