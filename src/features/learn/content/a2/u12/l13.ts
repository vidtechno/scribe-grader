import type { Lesson } from '../../../types';

// Mini lesson (grammar): when / while / as soon as linking two past events. Builds on l3 (Past Continuous) and l4 (Past Simple or Past Continuous).
const lesson: Lesson = {
  id: 'u12-l13',
  title: 'when, while, as soon as',
  titleUz: "When, while, as soon as: ikki o'tgan voqeani bog'lash",
  mini: true,
  kind: 'grammar',
  goal: "Ikki o'tgan voqeani **when**, **while** va **as soon as** bilan bitta gapda bog'laysiz: ketma-ket voqealar (*When the bell rang, we left*), darhol keyingi voqea (*As soon as I got home, I made tea*) va bir vaqtda bo'layotgan ishlar (*While she was cooking, I was cleaning*).",
  slides: [
    {
      title: "When: ikki voqea ketma-ket",
      blocks: [
        { t: 'p', md: "**when** bilan ikki qisqa voqea bog'lansa, ikkalasi ham **Past Simple** bo'ladi. Birinchi bo'lgan voqea **when** dan keyin keladi, ikkinchisi uning **natijasi**." },
        { t: 'examples', items: [
          { en: 'When the bell rang, the students left the room.', uz: "Qo'ng'iroq jiringlaganda, o'quvchilar xonadan chiqishdi.", note: "Avval qo'ng'iroq, keyin chiqish." },
          { en: 'When I opened the door, the cat ran out.', uz: "Eshikni ochganimda, mushuk yugurib chiqib ketdi.", note: "Ikkalasi ham Past Simple." },
          { en: 'When I arrived, she was cooking.', uz: "Men kelganimda, u ovqat pishirayotgan edi.", note: "Uzoq ish (Past Continuous) allaqachon davom etayotgan edi." },
        ] },
        { t: 'tip', tone: 'info', md: "Gap **when** bilan boshlansa, ikki qism orasiga **vergul** qo'yiladi: *When I got home, I made tea.* O'rtada kelsa, vergul kerak emas: *I made tea when I got home.*" },
        { t: 'check', ex: { k: 'fill', q: 'When Anna ___ the news, she called her mother. (hear)', a: ['heard'], why: "Qisqa voqea — Past Simple: **hear – heard**." } },
      ],
    },
    {
      title: "As soon as: darhol keyin",
      blocks: [
        { t: 'p', md: "**as soon as** ham ikki ketma-ket voqeani bog'laydi, lekin ikkinchi ish **darhol** (bir zumda) bo'lganini ko'rsatadi. Zamon — ikkalasida **Past Simple**." },
        { t: 'table', head: ['Bog\'lovchi', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ['**when**', 'qachon; -ganda', 'When I got home, I made tea.'],
          ['**as soon as**', '-ishi bilan, darhol', 'As soon as I got home, I made tea.'],
          ['**while**', '-ganda (davomida)', 'While I was cooking, I listened to music.'],
        ] },
        { t: 'examples', items: [
          { en: 'As soon as the lesson finished, we ran outside.', uz: "Dars tugashi bilan biz tashqariga yugurdik." },
          { en: 'He fell asleep as soon as he went to bed.', uz: "U yotishi bilan uxlab qoldi." },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['As soon as I arrived, I called you.', 'As soon as the film finished, we left.'] },
          bad: { title: "Xato", items: ['As soon as I was arriving, I called you.', 'As soon as the film finished, we were leaving.'] } },
        { t: 'check', ex: { k: 'choice', q: '___ the phone rang, I answered it immediately.', opts: ['As soon as', 'While', 'During', 'Until'], a: 0, why: "Darhol keyingi voqea — **as soon as**." } },
      ],
    },
    {
      title: "While: bir vaqtda",
      blocks: [
        { t: 'p', md: "**while** davom etayotgan ish bilan ishlatiladi, shuning uchun undan keyin odatda **Past Continuous** keladi. Ikkita variant bor:" },
        { t: 'table', head: ['Variant', 'Misol', "Ma'nosi"], speak: [1], rows: [
          ['Ikki uzoq ish bir vaqtda', 'While she was cooking, I was cleaning.', 'Ikkalasi ham davom etgan'],
          ['Uzoq ish + qisqa voqea', 'While I was cooking, the phone rang.', 'Qisqa voqea uzoq ishni to\'xtatdi'],
        ] },
        { t: 'tip', tone: 'good', md: "Esda tuting: **while** + **was / were + V-ing**. **when** + **Past Simple** (qisqa voqea). *While I was cooking, the phone **rang**.* = *When the phone **rang**, I **was cooking**.*" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['While I was cooking, the phone rang.', 'When the phone rang, I was cooking.'] },
          bad: { title: "Xato", items: ['While I cooking, the phone rang.', 'While I was cook, the phone rang.'] } },
        { t: 'check', ex: { k: 'fill', q: 'While we ___ TV, the lights went out. (watch)', a: ['were watching'], why: "**while** + Past Continuous: *were watching*." } },
      ],
    },
    {
      title: "Qaysi so'zni tanlayman?",
      blocks: [
        { t: 'p', md: "Qaysi bog'lovchini tanlashni bilish uchun savol bering: **ish qisqa-ketma-ketmi yoki bir vaqtda davom etyaptimi?**" },
        { t: 'table', head: ['Vaziyat', "So'z + zamon", 'Misol'], speak: [2], rows: [
          ['Bittasi tugadi, keyin ikkinchisi', 'when + Past Simple', 'When I finished, I went home.'],
          ['Birinchi tugashi bilan darhol ikkinchisi', 'as soon as + Past Simple', 'As soon as I finished, I went home.'],
          ['Ikki ish bir vaqtda davom etdi', 'while + Past Continuous', 'While I was working, he was sleeping.'],
          ['Davom etgan ishni qisqa voqea to\'xtatdi', 'while + Past Continuous, Past Simple', 'While I was working, he called.'],
        ] },
        { t: 'tip', tone: 'warn', md: "Odatiy xato: **while** dan keyin Past Simple ishlatish. *While I came home, I saw an accident* ❌. To'g'risi: *While I was coming home, I saw an accident* ✅." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['While I was walking home, it started to rain.', 'While I walked home, it was starting to rain.', 'While I was walk home, it started to rain.', 'While I walking home, it started to rain.'], a: 0, why: "**while** + was walking, qisqa voqea — Past Simple: *started*." } },
        { t: 'check', ex: { k: 'tf', q: "*As soon as I got home, I made tea.* — Men uyga kelishim bilan choy damladim.", a: true, why: "**as soon as** — darhol keyingi ish." } },
      ],
    },
    {
      title: "O'qing: Dushanba ertalab",
      blocks: [
        { t: 'text', title: 'A late Monday', voice: 'emma',
          en: "On Monday I woke up late. While I was brushing my teeth, my phone rang. It was my friend Madina. As soon as I answered, she asked me where I was. We had an exam at nine! I took my bag and ran out of the house. When I got to the bus stop, the bus was leaving. At the same time, a taxi stopped next to me. I jumped into the taxi and arrived at school at five to nine.",
          uz: "Dushanba kuni men kech uyg'ondim. Tish yuvayotganimda telefonim jiringladi. Bu do'stim Madina edi. Javob berishim bilan u mendan qayerdaligimni so'radi. Bizning soat to'qqizda imtihonimiz bor edi! Sumkamni olib, uydan yugurib chiqdim. Bekatga yetganimda, avtobus ketayotgan edi. Aynan shu paytda yonimda taksi to'xtadi. Men taksiga o'tirdim va maktabga to'qqizga besh daqiqa qolganda yetib keldim." },
        { t: 'check', ex: { k: 'choice', q: 'What was the speaker doing when the phone rang?', opts: ['Brushing her teeth.', 'Running to the bus stop.', 'Taking a taxi.', 'Packing a bag.'], a: 0, why: "Matn: *While I was brushing my teeth, my phone rang*." } },
        { t: 'check', ex: { k: 'tf', q: 'The bus was waiting at the bus stop.', a: false, why: "Matn: *the bus was leaving*." } },
      ],
    },
    {
      title: "Dialog: Qiziq oqshom",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: 'You look tired, Jasur. What happened?', uz: "Charchagandek ko'rinasan, Jasur. Nima bo'ldi?" },
          { who: 'Jasur', en: 'I had a strange evening! While I was studying, the lights went out.', uz: "Qiziq oqshom bo'ldi! Dars qilayotganimda chiroq o'chdi." },
          { who: 'Dilnoza', en: 'What did you do?', uz: 'Nima qilding?' },
          { who: 'Jasur', en: 'I waited in the dark. As soon as the lights came back, the doorbell rang.', uz: "Qorong'ida kutdim. Chiroq yonishi bilan eshik qo'ng'irog'i jiringladi." },
          { who: 'Dilnoza', en: 'Who was it?', uz: 'Kim edi?' },
          { who: 'Jasur', en: 'My cousin! When I opened the door, he was standing there with a big cake.', uz: "Amakivachcham! Eshikni ochganimda, u katta tort bilan turgan edi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'What happened as soon as the lights came back?', opts: ['The doorbell rang.', 'Jasur went to bed.', 'Dilnoza called him.', 'The cake fell.'], a: 0, why: "Dialog: *As soon as the lights came back, the doorbell rang*." } },
      ],
    },
  ],
  words: [
    { en: 'as soon as', uz: '-ishi bilan, darhol', ipa: 'æz suːn æz', pos: 'conjunction', ex: 'As soon as I got home, I made tea.', exUz: "Uyga kelishim bilan choy damladim." },
    { en: 'just then', uz: "aynan o'sha payt", ipa: 'dʒʌst ðen', pos: 'phrase', ex: 'Just then, the phone rang.', exUz: "Aynan o'sha payt telefon jiringladi." },
    { en: 'at the same time', uz: 'bir vaqtning o\'zida', ipa: 'æt ðə seɪm taɪm', pos: 'phrase', ex: 'They both spoke at the same time.', exUz: "Ikkalasi bir vaqtda gapirdi." },
    { en: 'immediately', uz: 'darhol', ipa: 'ɪˈmiːdiətli', pos: 'adverb', ex: 'She answered the phone immediately.', exUz: "U darhol telefonga javob berdi." },
    { en: 'bell', uz: "qo'ng'iroq (maktab, eshik)", ipa: 'bel', pos: 'noun', ex: 'The bell rang at nine.', exUz: "Qo'ng'iroq soat to'qqizda jiringladi." },
  ],
  practice: [
    { k: 'match', pairs: [['as soon as', '-ishi bilan'], ['just then', "aynan o'sha payt"], ['immediately', 'darhol'], ['at the same time', "bir vaqtning o'zida"], ['bell', "qo'ng'iroq"]] },
    { k: 'choice', q: '___ the bell rang, the students left the room.', opts: ['When', 'While', 'During', 'Until'], a: 0, why: "Ketma-ket qisqa voqealar — **when** + Past Simple." },
    { k: 'choice', q: 'My mother was cooking ___ I was cleaning the kitchen.', opts: ['while', 'as soon as', 'after', 'before'], a: 0, why: "Ikki ish bir vaqtda davom etdi — **while**." },
    { k: 'fill', q: 'As soon as I ___ home, I had a shower. (get)', a: ['got'], why: "**get – got**. **as soon as** dan keyin Past Simple." },
    { k: 'fill', q: 'While we ___ dinner, the lights went out. (have)', a: ['were having'], why: "**while** + Past Continuous: *were having*." },
    { k: 'order', uz: "Maktabga ketayotganimda ustozimni uchratdim.", words: ['While', 'I', 'was', 'walking', 'to', 'school,', 'I', 'met', 'my', 'teacher'], extra: ['walked', 'am'], why: "**While I was walking…, I met…**" },
    { k: 'fix', wrong: 'While I walked to the bus stop, I saw an accident.', a: ['While I was walking to the bus stop, I saw an accident.'], hint: "**while** dan keyin davom etgan ish", why: "**while** + Past Continuous: *was walking*." },
    { k: 'fix', wrong: 'As soon as the bell rang, the children were running out.', a: ['As soon as the bell rang, the children ran out.'], why: "**as soon as** dan keyin ketma-ket voqea — Past Simple: *ran*." },
    { k: 'listen', say: 'When I arrived, she was cooking.', opts: ['When I arrived, she was cooking.', 'When I arrived, she cooked.', 'While I arrived, she was cooking.', 'When I was arriving, she cooked.'], a: 0, why: "Men kelganimda, u allaqachon pishirayotgan edi." },
    { k: 'translate', uz: 'Uyga kelishim bilan choy damladim.', a: ['As soon as I got home, I made tea.', 'I made tea as soon as I got home.', 'As soon as I came home, I made tea.', 'I made tea as soon as I came home.', 'As soon as I arrived home, I made tea.', 'I made tea as soon as I arrived home.'], why: "**as soon as** + Past Simple, Past Simple." },
    { k: 'tf', q: "*When he came in, we stood up.* — Avval u kirdi, keyin biz o'rnimizdan turdik.", a: true, why: "**when** + Past Simple: avval *came in*, keyin *stood up*." },
    { k: 'dictation', say: 'While Dad was cooking, we were setting the table.', a: ['While Dad was cooking, we were setting the table.', 'While dad was cooking, we were setting the table.'], uz: "Dadam ovqat pishirayotganda, biz dasturxon yozayotgan edik." },
  ],
  quiz: [
    { k: 'choice', q: '___ the film finished, we went home.', opts: ['When', 'While', 'During', 'Although'], a: 0, why: "Ketma-ket voqealar — **when**." },
    { k: 'fill', q: 'While she ___ a book, her brother was playing games. (read)', a: ['was reading'], why: "**while** + Past Continuous: *was reading*." },
    { k: 'order', uz: "Eshik qo'ng'irog'i jiringlashi bilan men eshikni ochdim.", words: ['As', 'soon', 'as', 'the', 'bell', 'rang,', 'I', 'opened', 'the', 'door'], extra: ['was', 'while'], why: "**As soon as** + Past Simple, Past Simple." },
    { k: 'translate', uz: "Ovqat yeyotganimizda, telefon jiringladi.", a: ['While we were eating, the phone rang.', 'While we were having dinner, the phone rang.', 'The phone rang while we were eating.', 'The phone rang while we were having dinner.'], why: "**While we were eating, the phone rang.**" },
    { k: 'fix', wrong: 'While I was having breakfast, I am hearing a noise.', a: ['While I was having breakfast, I heard a noise.'], why: "Qisqa voqea — Past Simple: **heard**." },
    { k: 'tf', q: "*While I was cooking, the phone rang.* — Telefon jiringlaganda men ovqat pishirayotgan edim.", a: true, why: "Ovqat pishirish davom etdi, telefon qisqa voqea." },
    { k: 'match', pairs: [['when', 'qachon; -ganda'], ['while', '-ganda (davomida)'], ['as soon as', '-ishi bilan'], ['immediately', 'darhol']] },
    { k: 'listen', say: 'As soon as I answered, she asked where I was.', opts: ['As soon as I answered, she asked where I was.', 'While I answered, she asked where I was.', 'As soon as I answered, she was asking where I was.', 'When I answered, she asks where I was.'], a: 0, why: "**as soon as** + Past Simple, Past Simple." },
  ],
  summary: [
    "**when** + Past Simple — ketma-ket voqealar; **as soon as** + Past Simple — darhol keyingi voqea.",
    "**while** + **was / were + V-ing** — bir vaqtda davom etgan ish; qisqa voqea esa Past Simple da.",
    "Gap **when / while / as soon as** bilan boshlansa, ikki qism orasiga **vergul** qo'ying.",
    "Yangi so'zlar: **as soon as, just then, at the same time, immediately, bell**.",
  ],
  homework: "Bugungi kuningiz haqida 3 ta gap yozing: bittasida *when*, bittasida *while*, bittasida *as soon as* bo'lsin.",
};

export default lesson;
