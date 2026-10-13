import type { Lesson } from '../../../types';

// Real-life scene: checking in at a hotel. Uses there is/are questions, Can I...?, spelling, have got.
const lesson: Lesson = {
  id: 'u4-l21',
  title: 'Real life: checking in at a hotel',
  titleUz: "Real hayot: mehmonxonada ro'yxatdan o'tish",
  mini: true,
  kind: 'scene',
  goal: "Mehmonxonada **ro'yxatdan o'tasiz**: bronni aytasiz, ismingizni harflab berasiz, «Wi-Fi bormi?» deb so'raysiz va kalit so'raysiz (**Can I have...?**).",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**I have a reservation.** — «Menda bron bor.» (**a** tushib qolmasin).",
    "**My name is Ali Karimov.** — ism va familiyani aytish; harflab berish uchun **spell**.",
    "**Is there Wi-Fi in the room?** → **Yes, there is.** / **No, there isn't.**",
    "**Can I have the key, please?** — nimadir so'rashning xushmuomala yo'li.",
  ],
  homework: "Do'stingiz bilan rol o'ynang: biringiz qabulxona xodimi, biringiz mehmon. Ismingizni harflab ayting va ikkita savol bering: **Is there...?**",
  scene: {
    place: 'hotel',
    partner: { name: 'Helen', role: 'Mehmonxona qabulxonasi xodimi', voice: 'emma', emoji: '👩‍💼' },
    intro: "Siz — **Ali**. Kechqurun mehmonxonaga keldingiz. Qabulxonada **Helen** sizni kutib oldi. Bron borligini ayting, ismingizni harflab bering, xona haqida so'rang va kalit so'rang.",
    steps: [
      { k: 'say', en: 'Good evening. Can I help you?', uz: 'Xayrli kech. Sizga yordam bera olamanmi?' },
      { k: 'note', title: 'Yangi so\'z: bron', md: "**a reservation** — «bron» (xonani oldindan band qilish).\n\n**I have a reservation.** — «Menda bron bor.»\n\n**reservation** sanaladigan ot, shuning uchun oldidan **a** qo'yamiz." },
      {
        k: 'build', ask: "Salomga javob bering va «Menda bron bor» deng.", words: ['Good', 'evening', 'I', 'have', 'a', 'reservation'], extra: ['an', 'am'],
        alt: [['Good', 'evening', 'I', 'have', 'a', 'reservation']],
        mistakes: [
          { a: ['Good evening I have reservation'], why: "`reservation` oldida **a** kerak: **I have a reservation**. Ot sanaladigan bo'lsa, **a / an** tushib qolmaydi." },
          { a: ['Good evening I have an reservation'], why: "**an** — unli tovush oldidan (an apple). **reservation** undosh bilan boshlanadi, shuning uchun **a reservation**." },
        ],
        why: "**Good evening. I have a reservation.** — kechqurun salom + bron.",
        drill: { k: 'fix', wrong: 'I have reservation.', a: ['I have a reservation.', 'I have a reservation'], hint: 'a kerak', why: "**a reservation** — sanaladigan ot oldida **a**." },
      },
      { k: 'say', en: "What's your name, please?", uz: 'Ismingiz nima, iltimos?' },
      {
        k: 'type', ask: "Ismingizni ayting: «Mening ismim Ali Karimov.»",
        a: ['My name is Ali Karimov.', "I'm Ali Karimov.", 'I am Ali Karimov.', 'My name is Ali Karimov, please.'],
        mistakes: [{ a: ['My name Ali Karimov', 'I Ali Karimov'], why: "**is / am** tushib qolgan. To'g'risi: **My name is Ali Karimov.** yoki **I'm Ali Karimov.**" }],
        why: "**My name is Ali Karimov.** yoki **I'm Ali Karimov.**", hint: 'My name ...',
      },
      { k: 'say', en: 'Thank you. How do you spell your surname?', uz: 'Rahmat. Familiyangiz qanday yoziladi?' },
      {
        k: 'type', ask: "Familiyangizni harflab bering: Karimov. (Harflarni bo'sh joy bilan yozing.)",
        a: ['K A R I M O V', 'K-A-R-I-M-O-V', 'KARIMOV', 'K, A, R, I, M, O, V'],
        why: "Familiya harflab aytiladi: **K-A-R-I-M-O-V**.", hint: 'K A R ...',
      },
      { k: 'say', en: 'Yes, I have your reservation. Can I have your phone number, please?', uz: "Ha, broningiz bor. Telefon raqamingizni olsam bo'ladimi?" },
      {
        k: 'pick', ask: "Helen telefon raqamingizni so'radi. Xushmuomala rozilik bildirib, raqamingizni ayting.",
        opts: [
          { en: 'Yes, of course. It is 90 123 45 67.', ok: true },
          { en: "Yes, of course. It's 90 123 45 67.", ok: true },
          { en: 'No, I can not.', why: "Bu «Yo'q, qila olmayman» degani, rad etish. Helen xushmuomala so'radi, rozilik: **Yes, of course.**" },
          { en: 'I have got a phone.', why: "Bu «Menda telefon bor» degani. Helen esa raqamni so'rayapti: **It is 90 123 45 67.**" },
          { en: 'Good evening, Helen.', why: "Salomlashib bo'ldingiz. Helen savol berdi: **Can I have...?** — shunga rozilik kerak." },
        ],
        why: "**Can I have...?** ga rozilik: **Yes, of course.** Keyin raqamni ayting: **It is...**",
      },
      { k: 'say', en: 'Thank you. Your room is on the first floor.', uz: 'Rahmat. Xonangiz birinchi qavatda.' },
      { k: 'note', title: "Yangi so'zlar: Wi-Fi va lift", md: "**Wi-Fi** — simsiz internet. **a lift** — lift.\n\n**Is there Wi-Fi in the room?** — «Xonada Wi-Fi bormi?»\n**Is there a lift?** — «Lift bormi?»" },
      { k: 'say', en: 'Is there anything else?', uz: 'Yana biror narsa kerakmi?' },
      {
        k: 'build', ask: "«Xonada Wi-Fi bormi?» deb so'rang.", words: ['Is', 'there', 'Wi-Fi', 'in', 'the', 'room'], extra: ['Are', 'on'],
        alt: [['Is', 'there', 'Wi-Fi', 'in', 'my', 'room'], ['Is', 'there', 'Wi-Fi', 'in', 'the', 'hotel']],
        mistakes: [
          { a: ['There is Wi-Fi in the room'], why: "Savolda **is** oldinga chiqadi: **Is there Wi-Fi in the room?**" },
          { a: ['Are there Wi-Fi in the room'], why: "**Wi-Fi** — birlik, shuning uchun **Is there...?** (**Are there** ko'plik uchun)." },
        ],
        why: "Savol: **Is there + ot + joy?** — **Is there Wi-Fi in the room?**",
        drill: { k: 'choice', q: "Qaysi savol to'g'ri?", opts: ['There is a lift?', 'Is there a lift?', 'Are there a lift?'], a: 1, why: "Birlik ot bilan: **Is there a lift?**" },
      },
      { k: 'say', en: "Yes, there is. It is very fast.", uz: 'Ha, bor. U juda tez.' },
      {
        k: 'fill', ask: "Liftni so'rang: «Lift bormi?»", q: '___ there a lift?', a: ['Is'],
        mistakes: [{ a: ['Are'], why: "**a lift** — birlik, shuning uchun **Is there a lift?** **Are there** faqat ko'plik bilan (Are there any shops?)." }],
        why: "**Is there a lift?** — birlik ot bilan **is**.", hint: 'Is yoki Are?',
      },
      { k: 'say', en: 'Yes, there is. It is next to your room.', uz: 'Ha, bor. U xonangiz yonida.' },
      {
        k: 'pick', ask: "Endi xonaning kalitini so'rang. Xushmuomala bo'lsin.",
        opts: [
          { en: 'Can I have the key, please?', ok: true },
          { en: 'Can I have my key, please?', ok: true },
          { en: 'I want the key.', why: "Bu juda to'g'ridan-to'g'ri, qo'pol eshitiladi. Xushmuomala: **Can I have the key, please?**" },
          { en: 'Can I has the key, please?', why: "**Can** dan keyin fe'lning oddiy shakli keladi: **Can I have**, `has` emas." },
          { en: 'Is there the key?', why: "Bu «Kalit bormi?» degani. Siz kalitni berishni so'rayapsiz: **Can I have...?**" },
        ],
        why: "Iltimos: **Can I have + narsa, please?**",
      },
      { k: 'say', en: 'Of course. Here is your key. Room twelve.', uz: 'Albatta. Mana kalitingiz. O\'n ikkinchi xona.' },
      {
        k: 'type', ask: "Rahmat ayting va xayrli tun tilang: «Rahmat. Xayrli tun!»",
        a: ['Thank you. Good night!', 'Thanks. Good night!', 'Thank you very much. Good night!', 'Thank you, Helen. Good night!', 'Thanks, Helen. Good night!'],
        mistakes: [{ a: ['Thank you. Good evening!', 'Thanks. Good evening!'], why: "**Good evening** — uchrashganda salom. Xayrlashib uxlashga ketayotganda **Good night** deymiz." }],
        why: "**Thank you. Good night!**", hint: 'Thank you. Good ...',
      },
    ],
    outro: "Barakalla! Siz mehmonxonada **ro'yxatdan o'tdingiz**: bron, ism, harflab aytish, savollar va kalit. Safarda shu iboralar juda kerak bo'ladi.",
  },
};

export default lesson;
