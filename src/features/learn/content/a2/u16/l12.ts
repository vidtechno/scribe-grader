import type { Lesson } from '../../../types';

// Mini lesson (grammar): ever, never, already, yet, just with the Present Perfect; have been or have gone.
// Builds on l1 (Present Perfect or Past Simple, first look at the five words) without repeating the theory.
const lesson: Lesson = {
  id: 'u16-l12',
  title: 'Present Perfect: ever, never, already, yet, just',
  titleUz: 'Present Perfect: ever, never, already, yet, just',
  mini: true,
  kind: 'grammar',
  goal: "**ever, never, already, yet, just** so'zlarini gapda to'g'ri joyga qo'yasiz (*I've never been to Japan. She's already left. They haven't arrived yet.*) va **have been** bilan **have gone** farqini ajratasiz.",
  slides: [
    {
      title: "Besh so'z va ularning o'rni",
      blocks: [
        { t: 'p', md: "Birinchi darsda bu so'zlar bilan tanishgansiz. Endi eng muhim narsa: **gapning qayerida turadi?** Qoida oddiy: to'rttasi **have / has** bilan **V3** orasida turadi, **yet** esa gap **oxirida**." },
        { t: 'table', head: ["So'z", "Ma'nosi", "Qayerda turadi", "Misol"], speak: [3], rows: [
          ['ever', 'hech (savolda)', 'have + ega + ever + V3', 'Have you ever flown in a plane?'],
          ['never', 'hech qachon', 'have + never + V3', "I've never flown in a plane."],
          ['already', 'allaqachon', 'have + already + V3', "She's already left."],
          ['just', 'hozirgina', 'have + just + V3', "I've just finished."],
          ['yet', 'hali (inkorda), endi (savolda)', 'gap oxirida', "They haven't arrived yet."],
        ] },
        { t: 'tip', tone: 'info', md: "Qisqacha: **ever, never, already, just** — o'rtada (*have + so'z + V3*). **yet** — oxirida. **already** gap oxirida ham kelishi mumkin: *She has left already.* (ma'no bir xil, biroz ta'sirliroq)." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I have just finished.", "I just have finished.", "I have finished just.", "Just I have finished."], a: 0, why: "**just** — **have** va **V3** orasida: *I have just finished.*" } },
      ],
    },
    {
      title: "Darak, inkor va savol",
      blocks: [
        { t: 'p', md: "Har bir so'z o'ziga xos gap turida ishlatiladi. Shuni bilsangiz, xato qilmaysiz:" },
        { t: 'table', head: ['Gap turi', "So'zlar", 'Misol'], speak: [2], rows: [
          ['Darak (+)', 'never, already, just', "I've never been to Spain. / We've already eaten. / He's just left."],
          ['Inkor (−)', 'yet', "I haven't packed yet. / She hasn't called yet."],
          ['Savol (?)', 'ever, yet', 'Have you ever tried plov? / Have you packed yet?'],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['I have never seen snow.', "I haven't finished yet.", 'Have you ever tried plov?', 'She has already left.'] },
          bad: { title: 'Xato', items: ["I haven't never seen snow.", 'I have finished yet.', 'I have ever tried plov.', 'She has finished just.'] } },
        { t: 'tip', tone: 'warn', md: "**never** o'zi inkor ma'noli, shuning uchun **haven't** bilan birga ishlatilmaydi: *I haven't never…* ❌ → *I have never…* ✅. Darak gapda **yet** o'rniga **already** ayting: *I've finished yet* ❌ → *I've already finished* ✅." },
        { t: 'check', ex: { k: 'fill', q: "I've ___ seen that film, so I don't know the story.", a: ['never'], why: "Hech qachon ko'rmagan → **never** (*have + never + V3*)." } },
        { t: 'check', ex: { k: 'fill', q: "Have you booked the tickets ___?", a: ['yet'], why: "Savolda gap oxirida **yet**." } },
      ],
    },
    {
      title: "Ma'nolarini ajrating",
      blocks: [
        { t: 'p', md: "Bir ish haqida to'rt xil fikr aytish mumkin. Farqini ko'ring:" },
        { t: 'examples', items: [
          { en: "I've just called Dilnoza.", uz: "Men hozirgina Dilnozaga qo'ng'iroq qildim.", note: "**just** — bir necha daqiqa oldin." },
          { en: "I've already called Dilnoza.", uz: "Men Dilnozaga allaqachon qo'ng'iroq qilganman.", note: "**already** — ish bajarilgan, qayta qilish kerak emas." },
          { en: "I haven't called Dilnoza yet.", uz: "Men Dilnozaga hali qo'ng'iroq qilmadim.", note: "**yet** inkorda — hali qilinmagan, lekin qilinadi." },
          { en: "Have you called Dilnoza yet?", uz: "Dilnozaga qo'ng'iroq qildingmi (endi)?", note: "**yet** savolda — qilish kerak edi, qildingmi?" },
          { en: "It's the best trip I've ever had.", uz: "Bu men boshdan kechirgan eng yaxshi safar.", note: "**ever** savoldan tashqari *the best … ever* qolipida ham keladi." },
        ] },
        { t: 'tip', tone: 'good', md: "Qisqa javoblar: **Yes, I have. / No, not yet. / Yes, I've just done it.** *No, never* esa *Have you ever…?* savoliga javob: *Have you ever been to Japan? — No, never.*" },
        { t: 'check', ex: { k: 'choice', q: "— Have you packed your bag? — No, ___.", opts: ['not yet', 'not never', 'not already', 'not just'], a: 0, why: "Hali qilinmagan ish: **not yet**." } },
      ],
    },
    {
      title: "Been yoki gone?",
      blocks: [
        { t: 'p', md: "Present Perfect bilan **go** ning ikkita V3 shakli bor: **been** va **gone**. Ma'nosi butunlay boshqacha:" },
        { t: 'table', head: ['Gap', "Ma'nosi", 'Hozir qayerda?'], speak: [0], rows: [
          ['She has been to Paris.', "Parijda bo'lgan va qaytib kelgan.", "Parijda emas."],
          ['She has gone to Paris.', 'Parijga ketgan.', "Parijda yoki yo'lda, hali qaytmagan."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I've been to Spain twice.", "Where's Ali? He's gone to the bank.", 'Have you ever been to Japan?'] },
          bad: { title: "Xato yoki g'alati", items: ["I've gone to Spain twice.", 'Have you ever gone to Japan?'] } },
        { t: 'tip', tone: 'info', md: "Tajriba haqida gapirganda (**ever, never, twice**) doim **been**. Kimdir hozir yo'q bo'lsa (*Where's Ali?*), **gone**. Inkorda: *He hasn't gone yet* — hali ketmagan." },
        { t: 'check', ex: { k: 'choice', q: "Salima hozir bu yerda yo'q. U do'konga ketgan.", opts: ['Salima has gone to the shop.', 'Salima has been to the shop.', 'Salima is been to the shop.', 'Salima has went to the shop.'], a: 0, why: "Hozir yo'q va qaytmagan → **has gone**." } },
        { t: 'check', ex: { k: 'tf', q: "*I've been to Spain twice.* — Men hozir Ispaniyadaman.", a: false, why: "**been** — borib qaytib kelgan. Hozir Ispaniyada emas." } },
      ],
    },
    {
      title: "Dialog: sayohatdan oldin",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Madina', en: 'Jasur, have you packed your bag yet?', uz: "Jasur, sumkangni yig'dingmi hali?" },
          { who: 'Jasur', en: "Not yet. I've just got home from work.", uz: "Hali yo'q. Hozirgina ishdan keldim." },
          { who: 'Madina', en: "Please be quick! I've already packed mine, and the taxi comes at six.", uz: "Iltimos, tezroq bo'l! Men o'zimnikini allaqachon yig'dim, taksi oltida keladi." },
          { who: 'Jasur', en: 'Have you checked the tickets?', uz: 'Chiptalarni tekshirdingmi?' },
          { who: 'Madina', en: "Yes, I have. I've also booked the hotel.", uz: "Ha. Mehmonxonani ham band qildim." },
          { who: 'Jasur', en: 'Great. Have you ever been to Khiva?', uz: "Zo'r. Sen Xivada hech bo'lganmisan?" },
          { who: 'Madina', en: "No, I've never been there. But Sara has been there twice.", uz: "Yo'q, hech bo'lmaganman. Lekin Sara u yerda ikki marta bo'lgan." },
          { who: 'Jasur', en: 'Where is Sara now?', uz: 'Sara hozir qayerda?' },
          { who: 'Madina', en: "She's gone to the airport. She's flying to Istanbul today.", uz: "U aeroportga ketgan. Bugun Istanbulga uchadi." },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'Jasur has already packed his bag.', a: false, why: "Jasur: *Not yet.* — hali yig'magan." } },
        { t: 'check', ex: { k: 'choice', q: 'Where is Sara now?', opts: ['She has gone to the airport.', 'She has been to Khiva.', 'She is in Khiva.', 'She has booked the hotel.'], a: 0, why: "*She's gone to the airport.*" } },
      ],
    },
  ],
  words: [
    { en: 'arrive', uz: 'yetib kelmoq', ipa: 'əˈraɪv', pos: 'verb', ex: 'The train has just arrived.', exUz: 'Poyezd hozirgina yetib keldi.' },
    { en: 'pack', uz: "(sumka) yig'moq", ipa: 'pæk', pos: 'verb', ex: "I haven't packed my bag yet.", exUz: "Men sumkamni hali yig'ganim yo'q." },
    { en: 'book', uz: 'band qilmoq, buyurtma bermoq', ipa: 'bʊk', pos: 'verb', ex: "We've already booked the hotel.", exUz: 'Biz mehmonxonani allaqachon band qilganmiz.' },
    { en: 'miss', uz: "o'tkazib yubormoq (poyezd, avtobus)", ipa: 'mɪs', pos: 'verb', ex: "I've just missed the bus!", exUz: 'Men hozirgina avtobusdan qoldim!' },
    { en: 'decide', uz: 'qaror qilmoq', ipa: 'dɪˈsaɪd', pos: 'verb', ex: "We haven't decided where to go yet.", exUz: "Biz qayerga borishni hali hal qilmaganmiz." },
  ],
  practice: [
    { k: 'match', pairs: [['ever', 'hech (savolda)'], ['never', 'hech qachon'], ['already', 'allaqachon'], ['just', 'hozirgina'], ['yet', 'hali (inkor, savol)']] },
    { k: 'choice', q: '___ you ever eaten Korean food?', opts: ['Have', 'Did', 'Do', 'Has'], a: 0, why: "Tajriba haqida savol: **Have you ever…?**" },
    { k: 'fill', q: "I haven't read that book ___.", a: ['yet'], uz: "Men o'sha kitobni hali o'qimaganman.", why: "Inkor gapda gap oxirida **yet**." },
    { k: 'fill', q: "I have ___ done my homework.", a: ['already'], uz: "Men uy vazifamni allaqachon qilib bo'lganman.", why: "Allaqachon → **already** (*have + already + V3*)." },
    { k: 'listen', say: 'They have already booked the hotel.', opts: ['They have already booked the hotel.', "They haven't booked the hotel yet.", 'They have just booked the hotel.', 'They booked the hotel yesterday.'], a: 0 },
    { k: 'choice', q: "Where's Kamol? — He ___ to the bank. He'll be back soon.", opts: ['has gone', 'has been', 'have gone', 'was gone'], a: 0, why: "Hozir yo'q, hali qaytmagan → **has gone**." },
    { k: 'choice', q: "I have ___ been to Spain, but I would like to go.", opts: ['never', 'ever', 'yet', 'just'], a: 0, why: "Hech qachon bo'lmagan → **never**." },
    { k: 'order', uz: "U hali yetib kelmadi.", words: ['She', "hasn't", 'arrived', 'yet.'], extra: ['already', 'ever'], alt: [['She', 'has', 'not', 'arrived', 'yet.']], why: "Inkor + oxirida **yet**." },
    { k: 'fix', wrong: "I haven't never seen the sea.", a: ["I have never seen the sea.", "I've never seen the sea.", "I haven't ever seen the sea."], why: "**never** o'zi inkor: *I have never seen…*" },
    { k: 'fix', wrong: 'She has finished her homework yet.', a: ['She has already finished her homework.', 'She has finished her homework already.', 'She has just finished her homework.'], why: "Darak gapda **yet** ishlatilmaydi; **already** yoki **just** ayting." },
    { k: 'translate', uz: "Siz hech sushi yeganmisiz?", a: ['Have you ever eaten sushi?', 'Have you ever had sushi?', 'Have you ever tried sushi?'], why: "**Have you ever + V3?**" },
    { k: 'translate', uz: "Men chiptani hali band qilmaganman.", a: ["I haven't booked the ticket yet.", "I have not booked the ticket yet.", "I haven't booked my ticket yet.", "I have not booked my ticket yet.", "I haven't booked a ticket yet.", "I have not booked a ticket yet."], why: "**haven't + V3 + yet**." },
    { k: 'tf', q: "*Tom has gone to Paris.* — Tom hozir Parijda (yoki yo'lda), hali qaytib kelmagan.", a: true, why: "**has gone** — ketgan va hali qaytmagan." },
    { k: 'dictation', say: 'Have you packed your bag yet?', a: ['Have you packed your bag yet?'], uz: "Sumkangni yig'dingmi hali?" },
    { k: 'speak', say: "I've just arrived at the hotel.", uz: 'Men hozirgina mehmonxonaga yetib keldim.' },
    { k: 'speak', say: "I've never been to Japan, but I'd like to go.", uz: "Men Yaponiyada hech bo'lmaganman, lekin borishni xohlayman." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Have you ever ridden a horse?', 'Have you ridden ever a horse?', 'Ever have you ridden a horse?', 'Have ever you ridden a horse?'], a: 0, why: "**ever** — ega va V3 orasida." },
    { k: 'choice', q: "Don't call her. She hasn't woken up ___.", opts: ['yet', 'already', 'ever', 'just'], a: 0, why: "Inkorda gap oxirida **yet**." },
    { k: 'choice', q: "Ben isn't here. He ___ to the airport.", opts: ['has gone', 'has been', 'had gone', 'has go'], a: 0, why: "Hozir yo'q → **has gone**." },
    { k: 'fill', q: "I've ___ missed the bus!", a: ['just'], uz: 'Men hozirgina avtobusdan qoldim!', why: "Hozirgina → **just**." },
    { k: 'fill', q: "Sara has ___ been to a concert. It's her first time.", a: ['never'], why: "Hech qachon bo'lmagan → **never**." },
    { k: 'order', uz: 'Biz chiptalarni allaqachon band qilganmiz.', words: ["We've", 'already', 'booked', 'the', 'tickets.'], extra: ['yet', 'ever'], why: "**already** — *have* dan keyin, V3 dan oldin." },
    { k: 'translate', uz: 'Dilnoza hozirgina uyga ketdi.', a: ['Dilnoza has just gone home.', "Dilnoza's just gone home."], why: "**has just gone** — hozirgina ketdi (hozir yo'q)." },
    { k: 'listen', say: 'Has she arrived yet?', opts: ['Has she arrived yet?', 'Has she ever arrived?', 'She has just arrived.', 'Did she arrive yesterday?'], a: 0 },
    { k: 'tf', q: "*He has been to Tashkent.* — U Toshkentda bo'lgan va qaytib kelgan.", a: true, why: "**been** — borib qaytgan." },
  ],
  summary: [
    "**ever, never, already, just** — *have* va V3 orasida; **yet** — gap oxirida (inkor va savolda).",
    "**ever** — savolda (*Have you ever…?*); **never** — darak gapda, **haven't never** deb bo'lmaydi.",
    "Darak gapda **yet** yo'q: *I've already finished* ✅. Inkorda: *I haven't finished yet* ✅.",
    "**have been** — borib qaytgan (tajriba); **have gone** — ketgan, hozir yo'q.",
    "Yangi so'zlar: **arrive, pack, book, miss, decide**.",
  ],
  homework: "Do'stingiz uchun 5 ta savol yozing: 2 tasi *Have you ever…?*, 2 tasi *Have you … yet?* va 1 tasi *Where has … gone?*. Keyin o'zingiz ham javob bering: *Yes, I have. / No, not yet.*",
};

export default lesson;
