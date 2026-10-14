import type { Lesson } from '../../../types';

// Mini lesson (grammar): much / a lot / far / a bit / slightly / even + comparative; than vs as ... as.
// The game after it is a mastery check of l1, l2, l12, l3, l13. No too/enough or adverbs yet.
const lesson: Lesson = {
  id: 'u14-l13',
  title: "Stronger comparisons: much, a lot, a bit, far",
  titleUz: "Kuchaytirilgan taqqoslash: much, a lot, a bit, far",
  mini: true,
  kind: 'grammar',
  goal: "Farq **katta** (*much bigger, a lot cheaper, far better*) yoki **kichik** (*a bit older, slightly cheaper*) ekanini aytasiz, **even** bilan \"yana ham\" deysiz va **than** bilan **as … as** ni adashtirmaysiz.",
  slides: [
    {
      title: "Farq qanchalik katta?",
      blocks: [
        { t: 'p', md: "Qiyosiy darajadan **oldin** farq katta yoki kichikligini ko'rsatuvchi so'z qo'yamiz. O'zbekchada: *ancha kattaroq*, *sal kattaroq*." },
        { t: 'table', head: ['Farq', "So'zlar", 'Misol'], speak: [2], rows: [
          ['Katta farq', 'much', "Tashkent is much bigger than Bukhara."],
          ['Katta farq', 'a lot', "This phone is a lot cheaper than that one."],
          ['Katta farq', 'far', "Her English is far better than mine."],
          ['Kichik farq', 'a bit, a little, slightly', "My sister is slightly taller than me."],
          ['Kichik farq', 'a bit', "Today is a bit colder than yesterday."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['much bigger', 'a lot cheaper', 'far better', 'a bit older'] }, bad: { title: "Xato", items: ['very bigger', 'much big', 'a lot more bigger', 'a bit of older'] } },
        { t: 'tip', tone: 'warn', md: "**very** qiyosiy daraja bilan ishlatilmaydi: ❌ *very bigger*. To'g'risi: ✅ *much bigger*." },
        { t: 'check', ex: { k: 'choice', q: '"Bu telefon anavisidan ancha arzonroq."', opts: ['This phone is very cheaper than that one.', 'This phone is a lot cheaper than that one.', 'This phone is a lot cheap than that one.', 'This phone is a lot more cheaper than that one.'], a: 1, why: "**a lot** + qiyosiy daraja: *a lot cheaper*." } },
      ],
    },
    {
      title: "much more, a lot more, even",
      blocks: [
        { t: 'p', md: "Uzun sifatlar bilan ham shu qoida: so'z **more** dan oldin keladi. **even** — \"yana ham, hatto\":" },
        { t: 'examples', items: [
          { en: 'The new laptop is much more expensive.', uz: "Yangi noutbuk ancha qimmatroq." },
          { en: 'English is a lot more interesting than I thought.', uz: "Ingliz tili men o'ylagandan ancha qiziqarliroq." },
          { en: 'The second film was a bit more exciting.', uz: "Ikkinchi film sal hayajonliroq edi." },
          { en: 'Yesterday was cold, but today is even colder.', uz: "Kecha sovuq edi, bugun esa yanada sovuqroq." },
        ] },
        { t: 'tip', tone: 'info', md: "**even** ham qiyosiy daraja oldidan keladi: *even better* (undan ham yaxshi), *even worse* (undan ham yomon). **by far** orttirma daraja bilan: *by far the cheapest* (ancha farq bilan eng arzon)." },
        { t: 'check', ex: { k: 'fill', q: 'This book is a lot ___ interesting than the film.', a: ['more'], why: "Uzun sifat: **a lot more interesting**." } },
        { t: 'check', ex: { k: 'choice', q: 'My English is good, but yours is ___ better.', opts: ['even', 'very', 'most', 'as'], a: 0, why: "**even better** — undan ham yaxshi." } },
      ],
    },
    {
      title: "than yoki as … as?",
      blocks: [
        { t: 'p', md: "Ikkala qolip ham ikki narsani solishtiradi, lekin ma'nosi boshqa:" },
        { t: 'table', head: ['Qolip', 'Ma\'nosi', 'Misol'], speak: [2], rows: [
          ['qiyosiy + than', 'ular farq qiladi', 'Aziz is taller than Kamol.'],
          ['as + sifat + as', 'ular teng', 'Aziz is as tall as Kamol.'],
          ['not as + sifat + as', 'birinchisi kamroq', 'Kamol is not as tall as Aziz.'],
          ['the same as', 'bir xil', 'My phone is the same as yours.'],
        ] },
        { t: 'p', md: "Tenglikni kuchaytirish va yumshatish uchun ham so'zlar bor:" },
        { t: 'examples', items: [
          { en: "It's just as good as the old one.", uz: "U eskisidek yaxshi (xuddi shunday)." },
          { en: "It's almost as good as the old one.", uz: "U eskisidek yaxshiga yaqin (deyarli)." },
          { en: "Bukhara isn't nearly as big as Tashkent.", uz: "Buxoro Toshkentchalik katta emas (ancha kichik)." },
          { en: 'The two screens are exactly the same size.', uz: "Ikki ekran aynan bir xil o'lchamda." },
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ['as big as', 'bigger than', 'not as big as', 'much bigger than'] }, bad: { title: "Xato", items: ['as bigger as', 'as big than', 'bigger as', 'more bigger than'] } },
        { t: 'check', ex: { k: 'choice', q: 'Aziz is 1.80 m. Kamol is 1.80 m, too. → Aziz is ___ Kamol.', opts: ['as tall as', 'taller than', 'as taller as', 'taller as'], a: 0, why: "Teng bo'lsa — **as tall as**." } },
        { t: 'check', ex: { k: 'fill', q: "Bukhara isn't ___ as big as Tashkent. (ancha kichik)", a: ['nearly'], hint: 'n _ _ _ _ y', why: "**not nearly as ... as** — ancha kam." } },
      ],
    },
    {
      title: "Dialog: ikkita noutbuk",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Malika', en: 'Which laptop is better, the grey one or the silver one?', uz: "Qaysi noutbuk yaxshiroq, kulrangmi yoki kumushrangmi?" },
          { who: 'Sardor', en: 'The silver one is a bit lighter, and it is much faster.', uz: "Kumushrangi sal yengilroq va ancha tezroq." },
          { who: 'Malika', en: 'Is it a lot more expensive?', uz: "U ancha qimmatroqmi?" },
          { who: 'Sardor', en: 'No, only slightly more expensive. The grey one is not nearly as fast.', uz: "Yo'q, atigi biroz qimmatroq. Kulrangi unchalik tez emas." },
          { who: 'Malika', en: 'And the screen?', uz: 'Ekrani-chi?' },
          { who: 'Sardor', en: 'The screens are exactly the same size, but the silver one is even brighter.', uz: "Ekranlar aynan bir xil o'lchamda, lekin kumushrangining ekrani undan ham yorqinroq." },
          { who: 'Malika', en: 'Then the silver one is by far the best choice.', uz: "Unda kumushrangi shubhasiz eng yaxshi tanlov." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Which laptop is faster?', opts: ['The silver one.', 'The grey one.', 'They are the same.', 'We do not know.'], a: 0, why: "Dialog: *the silver one ... is much faster*." } },
        { t: 'check', ex: { k: 'tf', q: 'The two screens are different sizes.', a: false, why: "Dialog: *exactly the same size*." } },
      ],
    },
  ],
  words: [
    { en: 'slightly', uz: 'biroz, sal', ipa: 'ˈslaɪt.li', pos: 'adv', ex: 'This bag is slightly bigger than that one.', exUz: "Bu sumka anavisidan sal kattaroq." },
    { en: 'nearly', uz: 'deyarli', ipa: 'ˈnɪə.li', pos: 'adv', ex: 'The red one is nearly as good as the blue one.', exUz: "Qizili ko'kidek deyarli yaxshi." },
    { en: 'even', uz: 'hatto, yanada', ipa: 'ˈiː.vən', pos: 'adv', ex: 'Today is even hotter than yesterday.', exUz: "Bugun kechagidan ham issiqroq." },
    { en: 'by far', uz: 'ancha farq bilan, shubhasiz', ipa: 'baɪ fɑː', pos: 'phrase', ex: 'This is by far the cheapest shop.', exUz: "Bu ancha farq bilan eng arzon do'kon." },
    { en: 'exactly', uz: 'aynan, xuddi', ipa: 'ɪɡˈzækt.li', pos: 'adv', ex: 'We are exactly the same age.', exUz: "Biz aynan tengdoshmiz." },
  ],
  practice: [
    { k: 'choice', q: 'Tashkent is ___ bigger than Bukhara. (ancha)', opts: ['much', 'very', 'most', 'as'], a: 0, why: "**much** + qiyosiy daraja." },
    { k: 'choice', q: 'The red bag is ___ more expensive than the blue one. (biroz)', opts: ['a bit', 'very', 'a bit of', 'so'], a: 0, why: "**a bit more expensive** — kichik farq." },
    { k: 'fill', q: 'This film is much ___ interesting than the book.', a: ['more'], why: "Uzun sifat: **much more interesting**." },
    { k: 'fill', q: "Bukhara isn't ___ as big as Tashkent. (ancha kichik)", a: ['nearly'], hint: 'n _ _ _ _ y', why: "**not nearly as ... as**." },
    { k: 'fix', wrong: 'This bag is very heavier than that one.', a: ['This bag is much heavier than that one.', 'This bag is a lot heavier than that one.', 'This bag is far heavier than that one.'], hint: "very qiyosiy daraja bilan kelmaydi", why: "**very** o'rniga **much / a lot / far**." },
    { k: 'fix', wrong: 'My phone is as cheaper as yours.', a: ['My phone is as cheap as yours.'], hint: "as ... as orasida oddiy sifat", why: "**as + oddiy sifat + as**: *as cheap as*." },
    { k: 'tf', q: "*a bit bigger* — kichik farq.", a: true, why: "**a bit** — sal, biroz." },
    { k: 'tf', q: "*Aziz is as tall as Kamol* — Aziz Kamoldan baland.", a: false, why: "**as tall as** — teng baland." },
    { k: 'order', uz: "Bu telefon anavisidan ancha arzonroq.", words: ['This', 'phone', 'is', 'a', 'lot', 'cheaper', 'than', 'that', 'one'], extra: ['very', 'as'] },
    { k: 'order', uz: "Singlim mendan sal baland.", words: ['My', 'sister', 'is', 'slightly', 'taller', 'than', 'me'], extra: ['very', 'as'] },
    { k: 'listen', say: 'The silver laptop is much faster.', opts: ['The silver laptop is much faster.', 'The silver laptop is a bit faster.', 'The silver laptop is as fast as the grey one.', 'The grey laptop is much faster.'], a: 0 },
    { k: 'translate', uz: "Bu uy anavisidan ancha kattaroq.", a: ['This house is much bigger than that one.', 'This house is a lot bigger than that one.', 'This house is far bigger than that one.', 'This house is much bigger than that.'], why: "**much / a lot** + qiyosiy daraja." },
    { k: 'dictation', say: "It's nearly as cheap as the grey one.", a: ["It's nearly as cheap as the grey one.", 'It is nearly as cheap as the grey one.'] },
    { k: 'match', pairs: [['slightly', 'biroz, sal'], ['nearly', 'deyarli'], ['even', 'hatto, yanada'], ['by far', 'ancha farq bilan'], ['exactly', 'aynan']] },
    { k: 'speak', say: 'My phone is a lot cheaper than yours, but yours is slightly bigger.', uz: "Mening telefonim seniknidan ancha arzon, lekin seniki sal kattaroq." },
  ],
  quiz: [
    { k: 'choice', q: 'Yesterday was cold, but today is ___ colder.', opts: ['even', 'very', 'most', 'as'], a: 0, why: "**even colder** — undan ham sovuq." },
    { k: 'fill', q: 'Samarkand is a lot ___ than my village. (old)', a: ['older'], why: "**a lot** + qiyosiy daraja: *older*." },
    { k: 'fix', wrong: 'She is much more taller than me.', a: ['She is much taller than me.'], hint: "Ikki marta qiyoslangan", why: "*taller* o'zi qiyosiy; *more* kerak emas." },
    { k: 'choice', q: '"Menda sening telefoningdek telefon bor."', opts: ['I have the same phone as yours.', 'I have the same phone with yours.', 'I have the same phone than yours.', 'I have same phone as yours.'], a: 0, why: "**the same ... as**." },
    { k: 'order', uz: "Ekranlar aynan bir xil.", words: ['The', 'screens', 'are', 'exactly', 'the', 'same'], extra: ['very', 'as'] },
    { k: 'translate', uz: "Bu ancha farq bilan eng arzon do'kon.", a: ['This is by far the cheapest shop.', "It's by far the cheapest shop.", 'It is by far the cheapest shop.'], why: "**by far the** + orttirma daraja." },
    { k: 'listen', say: 'It is only slightly more expensive.', opts: ['It is only slightly more expensive.', 'It is much more expensive.', 'It is not nearly as expensive.', 'It is slightly cheaper.'], a: 0 },
    { k: 'tf', q: "*It is very better than the old one.* — to'g'ri gap.", a: false, why: "**very** o'rniga **much / far / a lot**: *much better*." },
  ],
  summary: [
    "Katta farq: **much / a lot / far** + qiyosiy (*much bigger*). Kichik farq: **a bit / slightly** (*a bit cheaper*).",
    "❌ *very bigger*. ✅ *much bigger*. Uzun sifat bilan: *much more expensive*.",
    "**even** — \"yana ham\": *even better*. **by far the** + orttirma: *by far the best*.",
    "**than** — farq bor (*taller than*). **as … as** — tenglik (*as tall as*). **not nearly as … as** — ancha kam.",
    "Yangi so'zlar: **slightly, nearly, even, by far, exactly**.",
  ],
  homework: "Ikki telefon yoki ikki do'kon haqida 6 ta gap yozing: ikkitasida **much / a lot**, ikkitasida **a bit / slightly**, ikkitasida **as … as** ishlating.",
};

export default lesson;
