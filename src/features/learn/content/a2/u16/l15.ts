import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing a blog post about a trip. Past Simple, Present Perfect, passive for places.
const lesson: Lesson = {
  id: 'u16-l15',
  title: 'Reading and writing: a blog post about a trip',
  titleUz: "O'qish va yozish: sayohat haqida blog yozuvi",
  mini: true,
  kind: 'skill',
  goal: "Sayohat haqidagi qisqa blog yozuvini **o'qib tushunasiz** va o'zingiz 6–8 gapli yozuv **yozasiz**: *I went there last weekend. The old city was built long ago. I have never seen such a beautiful place.*",
  slides: [
    {
      title: "O'qing: Buxoroga safar",
      blocks: [
        { t: 'text', title: 'Three days in Bukhara', voice: 'emma',
          en: "Hi everyone! I've just got back from Bukhara, and I'd like to tell you about my trip. I went there by train last weekend with my sister. We stayed in a small hotel in the old city. The Kalon Minaret was built in the twelfth century, and it looks amazing at night. We ate plov in a lovely courtyard and bought a carpet that was made by hand. The weather was hot, but we had a wonderful time. I have never seen such a beautiful old city. Have you ever been to Bukhara? Tell me in the comments!",
          uz: "Hammaga salom! Men Buxorodan hozirgina qaytdim va sizga safarim haqida aytib bermoqchiman. U yerga o'tgan dam olish kunlari opam bilan poyezdda bordim. Biz eski shaharda kichik mehmonxonada qoldik. Kalon minorasi XII asrda qurilgan va u kechasi ajoyib ko'rinadi. Biz chiroyli hovlida palov yedik va qo'lda to'qilgan gilam sotib oldik. Havo issiq edi, lekin vaqtimiz ajoyib o'tdi. Bunday go'zal eski shaharni hech qachon ko'rmaganman. Siz Buxoroda hech bo'lganmisiz? Izohlarda menga yozing!" },
        { t: 'check', ex: { k: 'choice', q: 'Who did the writer go to Bukhara with?', opts: ['Her sister.', 'Her friend.', 'Her cousin.', 'Nobody.'], a: 0, why: "Matn: *with my sister*." } },
        { t: 'check', ex: { k: 'tf', q: 'The writer travelled to Bukhara by bus.', a: false, why: "Matn: *by train*." } },
        { t: 'check', ex: { k: 'choice', q: 'When was the Kalon Minaret built?', opts: ['In the twelfth century.', 'Last year.', 'In the sixteenth century.', 'In the nineteenth century.'], a: 0, why: "Matn: *was built in the twelfth century*." } },
      ],
    },
    {
      title: "Blog yozuvi qanday tuziladi?",
      blocks: [
        { t: 'p', md: "Blog — do'stona, shaxsiy yozuv. Uni xat kabi tuzamiz, lekin tilimiz oddiyroq va **birinchi shaxsda** (*I, we*) bo'ladi. Har qismga bittadan 1–2 gap yetarli:" },
        { t: 'table', head: ['Qism', 'Nima yoziladi', 'Misol'], speak: [2], rows: [
          ['Sarlavha', "Qisqa va qiziq", 'Three days in Bukhara'],
          ['Boshlanish', 'Qayerdan qaytdingiz, qachon bordingiz', "I've just got back from Bukhara."],
          ['Voqealar', 'Nima qildingiz (Past Simple)', 'We stayed in a small hotel.'],
          ['Joy haqida', 'Joy qachon qurilgan, nimadan mashhur', 'The minaret was built in the twelfth century.'],
          ['Fikr', 'Taassurot', 'I have never seen such a beautiful city.'],
          ['Yakun', "O'quvchiga savol", 'Have you ever been there? Tell me in the comments!'],
        ] },
        { t: 'tip', tone: 'info', md: "Blogda qisqartmalar (*I've, we're*) va undov belgisi (!) ishlatish mumkin. Lekin har bir gap to'liq bo'lsin: ega + fe'l." },
        { t: 'check', ex: { k: 'choice', q: "Blog yozuvini yakunlash uchun qaysi gap eng mos?", opts: ['Have you ever been there? Tell me in the comments!', 'Yours faithfully, Aziz', 'Please turn it off.', 'I am writing to ask about a course.'], a: 0, why: "Blog o'quvchiga savol bilan tugaydi." } },
      ],
    },
    {
      title: "Uch zamon, bitta yozuv",
      blocks: [
        { t: 'p', md: "Sayohat haqidagi yozuvda uchta qolipni birga ishlatamiz:" },
        { t: 'examples', items: [
          { en: 'We visited the old city on Saturday.', uz: "Biz shanba kuni eski shaharga bordik.", note: "**Past Simple** — aniq vaqtdagi voqea." },
          { en: "I have never seen such a beautiful place.", uz: "Men bunday go'zal joyni hech qachon ko'rmaganman.", note: "**Present Perfect** — umumiy tajriba, vaqtsiz." },
          { en: 'The minaret was built in the twelfth century.', uz: "Minora XII asrda qurilgan.", note: "**Passive** — joyning tarixi." },
          { en: 'The carpets are made by hand.', uz: "Gilamlar qo'lda to'qiladi.", note: "**Present passive** — hozirgi odat." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Last week I visited Khiva.', 'I have never eaten such good plov.', 'The city was built long ago.'] },
          bad: { title: 'Xato', items: ['Last week I have visited Khiva.', 'I have never ate such good plov.', 'The city built long ago.'] } },
        { t: 'tip', tone: 'warn', md: "Aniq vaqt (*last week, on Saturday, in 2022*) bor joyda — **Past Simple**. *I have visited Khiva last week* ❌. Tajriba haqida (*never, ever, twice*) — **Present Perfect**." },
        { t: 'check', ex: { k: 'fill', q: 'Last summer we ___ to Khiva. (go)', a: ['went'], why: "*Last summer* → Past Simple: **went**." } },
        { t: 'check', ex: { k: 'choice', q: 'The mosque ___ in the fifteenth century.', opts: ['was built', 'built', 'is build', 'has built'], a: 0, why: "Passive o'tgan zamon: **was built**." } },
      ],
    },
    {
      title: "Namuna: Samarqand haqida yozuv",
      blocks: [
        { t: 'p', md: "Namunani o'qing va tuzilishiga e'tibor bering: **boshlanish → voqealar → joy → fikr → savol**. Siz ham shunday yozasiz." },
        { t: 'text', title: 'A day in Samarkand',
          en: "Hello readers! Last month I visited Samarkand with my brother. We travelled by fast train, and the journey took about two hours. We saw the Registan, which was built hundreds of years ago. In the evening we ate plov in a small café where the cook made everything fresh. It was an unforgettable day. I have never been to such a beautiful city! Have you ever been to Samarkand? Write to me in the comments.",
          uz: "Salom, o'quvchilar! O'tgan oy akam bilan Samarqandga bordim. Biz tezyurar poyezdda bordik, yo'l taxminan ikki soat oldi. Biz yuz yillar oldin qurilgan Registonni ko'rdik. Kechqurun kichik kafeda palov yedik, u yerda oshpaz hamma narsani yangi tayyorlagan. Bu unutilmas kun edi. Men bunday go'zal shaharda hech bo'lmaganman! Siz Samarqandda hech bo'lganmisiz? Izohlarda menga yozing." },
        { t: 'check', ex: { k: 'tf', q: 'The writer went to Samarkand alone.', a: false, why: "Matn: *with my brother*." } },
      ],
    },
    {
      title: "Endi siz yozing",
      blocks: [
        { t: 'p', md: "Bir sayohat haqida **6–8 gap** yozing. Reja:" },
        { t: 'table', head: ['Gap', 'Qolip'], speak: [1], rows: [
          ['1', 'Hi everyone! I have just got back from … / Last … I visited …'],
          ['2', 'I went there by … with …'],
          ['3', 'We stayed in … for … days.'],
          ['4', '… was built in … / … is made by …'],
          ['5', 'We ate / saw / bought …'],
          ['6', 'It was … I have never seen such …'],
          ['7', 'Have you ever been to …? Tell me in the comments!'],
        ] },
        { t: 'tip', tone: 'good', md: "Yozib bo'lgach tekshiring: ① aniq vaqt bor gapda Past Simple bormi? ② **never / ever** gapida *have + V3* bormi? ③ joy tarixida **was built** to'g'rimi? ④ oxirida o'quvchiga savol bormi?" },
        { t: 'check', ex: { k: 'order', uz: "Biz o'tgan yili Xivaga bordik.", words: ['We', 'went', 'to', 'Khiva', 'last', 'year.'], extra: ['have', 'go'] } },
      ],
    },
  ],
  words: [
    { en: 'blog', uz: 'blog, internet kundalik', ipa: 'blɒɡ', pos: 'noun', ex: 'She writes a blog about her trips.', exUz: 'U safarlari haqida blog yozadi.' },
    { en: 'comment', uz: 'izoh, fikr', ipa: 'ˈkɒm.ent', pos: 'noun', ex: 'Please write a comment below.', exUz: 'Iltimos, pastga izoh yozing.' },
    { en: 'reader', uz: "o'quvchi", ipa: 'ˈriː.dər', pos: 'noun', ex: 'Hello, readers!', exUz: "Salom, o'quvchilar!" },
    { en: 'recommend', uz: 'tavsiya qilmoq', ipa: 'ˌrek.əˈmend', pos: 'verb', ex: 'I recommend this hotel to everyone.', exUz: 'Men bu mehmonxonani hammaga tavsiya qilaman.' },
    { en: 'courtyard', uz: 'hovli', ipa: 'ˈkɔːt.jɑːd', pos: 'noun', ex: 'We had tea in a quiet courtyard.', exUz: 'Biz sokin hovlida choy ichdik.' },
  ],
  practice: [
    { k: 'choice', q: 'What did the writer buy in Bukhara?', opts: ['A carpet.', 'A book.', 'A hat.', 'A phone.'], a: 0, why: "Matn: *bought a carpet that was made by hand*." },
    { k: 'tf', q: 'The writer is still in Bukhara.', a: false, why: "Matn: *I've just got back from Bukhara*." },
    { k: 'choice', q: "Which thing was made by hand?", opts: ['The carpet.', 'The minaret.', 'The hotel.', 'The train.'], a: 0, why: "Matn: *a carpet that was made by hand*." },
    { k: 'order', uz: "Men o'tgan hafta Buxoroga bordim.", words: ['I', 'went', 'to', 'Bukhara', 'last', 'week.'], extra: ['have', 'go'], why: "*last week* → Past Simple." },
    { k: 'order', uz: "Minora o'n ikkinchi asrda qurilgan.", words: ['The', 'minaret', 'was', 'built', 'in', 'the', 'twelfth', 'century.'], extra: ['is', 'build'], why: "Passive: **was built**." },
    { k: 'fill', q: 'Last weekend we ___ the old city. (visit)', a: ['visited'], why: "*Last weekend* → Past Simple." },
    { k: 'fill', q: 'I ___ never seen such a beautiful place.', a: ['have', "'ve"], why: "Tajriba: **have never seen**." },
    { k: 'fix', wrong: 'Yesterday I have visited the museum.', a: ['Yesterday I visited the museum.'], why: "*Yesterday* bilan Past Simple." },
    { k: 'fix', wrong: 'The hotel built in 1990.', a: ['The hotel was built in 1990.'], why: "Passive da **was** kerak." },
    { k: 'translate', uz: 'Biz mehmonxonada uch kun qoldik.', a: ['We stayed in the hotel for three days.', 'We stayed in a hotel for three days.', 'We stayed at the hotel for three days.', 'We stayed at a hotel for three days.'], why: "Past Simple: **stayed** + for + muddat." },
    { k: 'translate', uz: 'Izohlarda menga yozing!', a: ['Write to me in the comments!', 'Tell me in the comments!', 'Write me in the comments!', 'Write to me in the comments.', 'Tell me in the comments.'], why: "Blog oxirida: **Tell me in the comments!**" },
    { k: 'match', pairs: [['blog', 'internet kundalik'], ['comment', 'izoh'], ['reader', "o'quvchi"], ['recommend', 'tavsiya qilmoq'], ['courtyard', 'hovli']] },
    { k: 'choice', q: 'Which sentence is a good start for a blog post?', opts: ["Hi everyone! I've just got back from Samarkand.", 'Dear Sir or Madam,', 'Yours faithfully,', 'Please turn it off.'], a: 0, why: "Blog do'stona boshlanadi." },
    { k: 'dictation', say: "I've just got back from Bukhara.", a: ["I've just got back from Bukhara.", 'I have just got back from Bukhara.'], uz: 'Men Buxorodan hozirgina qaytdim.' },
  ],
  quiz: [
    { k: 'tf', q: 'The writer bought a carpet in Bukhara.', a: true, why: "Matn: *bought a carpet*." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['We stayed in a small hotel last night.', 'We have stayed in a small hotel last night.', 'We stay in a small hotel last night.', 'We was stayed in a small hotel last night.'], a: 0, why: "*last night* → Past Simple." },
    { k: 'choice', q: 'The mosque ___ in the sixteenth century.', opts: ['was built', 'built', 'were built', 'has built'], a: 0, why: "Birlik ega + o'tgan zamon → **was built**." },
    { k: 'fill', q: 'I ___ never been to Khiva, but I would like to go.', a: ['have', "'ve"], why: "Tajriba: **have never been**." },
    { k: 'order', uz: 'Biz u yerga poyezdda bordik.', words: ['We', 'went', 'there', 'by', 'train.'], extra: ['go', 'on'] },
    { k: 'translate', uz: "Men bunday chiroyli shaharni hech qachon ko'rmaganman.", a: ['I have never seen such a beautiful city.', "I've never seen such a beautiful city.", 'I have never seen a city so beautiful.', "I've never seen a city so beautiful."], why: "**have never seen** — tajriba." },
    { k: 'fix', wrong: 'I seen a lot of beautiful places last week.', a: ['I saw a lot of beautiful places last week.'], why: "*last week* → Past Simple: **saw**." },
    { k: 'choice', q: "Qaysi gap blog uchun mos yakun?", opts: ['Have you ever been there? Tell me in the comments!', 'I look forward to hearing from you.', 'Yours sincerely, Aziz', 'Dear Ms Alieva,'], a: 0, why: "Blog — do'stona, o'quvchiga savol beriladi." },
  ],
  summary: [
    "Blog tuzilishi: **boshlanish → voqealar → joy haqida → fikr → o'quvchiga savol**.",
    "Voqealar — **Past Simple** (*We stayed…*), tajriba — **Present Perfect** (*I have never seen…*), joy tarixi — **passive** (*was built*).",
    "Aniq vaqt bor gapda **have** ishlatmang: *Last week I visited…* ✅.",
    "Yangi so'zlar: **blog, comment, reader, recommend, courtyard**.",
  ],
  homework: "Yaqinda borgan joyingiz haqida 6–8 gapli blog yozuvi yozing (namuna: Buxoro va Samarqand matnlari). Yozib bo'lgach, tekshirish ro'yxatidan o'ting va bitta do'stingizga o'qib bering.",
};

export default lesson;
