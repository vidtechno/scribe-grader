import type { Lesson } from '../../../types';

// Mini lesson (situation): telling a friend about my weekend. Past Simple, time words.
const lesson: Lesson = {
  id: 'u9-l9',
  title: 'My weekend: telling a friend',
  titleUz: "Dam olish kunim: do'stga hikoya",
  mini: true,
  goal: "Do'stingizga **o'tgan dam olish kuningiz** haqida gapirib berasiz: *I visited my grandmother and we cooked plov.* Past Simple (ijobiy, inkor, savol) va vaqt so'zlari (**last weekend, on Saturday, in the evening, then**) ni real suhbatda ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: dushanba kuni ofisda',
      blocks: [
        { t: 'p', md: "Dushanba kuni do'stingiz so'raydi: **How was your weekend?** Siz **Past Simple** bilan qisqa hikoya qilasiz: avval nima qildingiz, keyin nima bo'ldi." },
        { t: 'dialog', lines: [
          { who: 'Dilya', en: 'Hi Aziz! How was your weekend?', uz: "Salom, Aziz! Dam olish kuning qanday o'tdi?" },
          { who: 'Aziz', en: 'It was wonderful, thanks! On Saturday I visited my grandmother.', uz: "Ajoyib o'tdi, rahmat! Shanba kuni buvimni ko'rgani bordim." },
          { who: 'Dilya', en: 'Nice! What did you do there?', uz: "Zo'r! U yerda nima qildingiz?" },
          { who: 'Aziz', en: 'We cooked plov, and then we watched an old film. I went home at ten.', uz: "Palov pishirdik, keyin eski film ko'rdik. Soat o'nda uyga ketdim." },
          { who: 'Dilya', en: 'And on Sunday? Did you go out?', uz: "Yakshanba-chi? Tashqariga chiqdingmi?" },
          { who: 'Aziz', en: "No, I didn't. I was lazy! I relaxed at home all day.", uz: "Yo'q. Dangasa bo'ldim! Kun bo'yi uyda dam oldim." },
          { who: 'Dilya', en: 'That sounds good. I worked on Saturday, so I was tired.', uz: "Yaxshi eshitiladi. Men shanba kuni ishladim, shuning uchun charchadim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Aziz: "We ___ plov on Saturday."', opts: ['cook', 'cooked', 'cooking', 'did cooked'], a: 1, why: "O'tgan zamon, ijobiy gap → fe'l + **-ed**: cook**ed**." } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0, 1], rows: [
          ['How was your weekend?', "Do'stingiz so'raydi"],
          ['On Saturday I visited my family.', 'Voqealarni vaqt bilan boshlaysiz'],
          ['Then we had lunch.', 'Keyingi voqeani aytasiz'],
          ["I didn't do much. I just relaxed.", "Ko'p ish qilmaganingizni aytasiz"],
          ['Did you have a good time?', "Do'stingizdan so'raysiz"],
          ['What did you do on Sunday?', 'Aniq kun haqida so\'raysiz'],
        ] },
        { t: 'tip', tone: 'good', md: "Hikoyani bog'lash uchun: **first, then, after that, in the evening, last weekend, on Saturday**. Shunda gaplaringiz alohida emas, bitta hikoya bo'ladi." },
        { t: 'check', ex: { k: 'fill', q: 'What did you ___ on Sunday?', a: ['do'], uz: 'Yakshanba kuni nima qilding?', why: "**did** dan keyin fe'l oddiy shaklda: **do**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['I went to the park.', "I didn't go out.", 'Did you see your friends?', 'I was at home on Sunday.'] }, bad: { title: "Noto'g'ri", items: ['I goed to the park.', "I didn't went out.", 'Did you saw your friends?', 'I am at home last Sunday.'] } },
        { t: 'p', md: "Eslatma: **did / didn't** dan keyin fe'l **oddiy shaklda** (go, see). V2 (went, saw) faqat ijobiy gapda. Vaqt predloglari: **on** Saturday, **in** the evening; lekin *last weekend*, *yesterday* oldida predlog yo'q." },
        { t: 'check', ex: { k: 'choice', q: "\"Dam olish kuni tashqariga chiqmadim.\"", opts: ["I didn't went out.", "I didn't go out.", "I not go out.", "I don't went out."], a: 1, why: "**didn't + V1**: didn't **go**." } },
      ],
    },
  ],
  words: [
    { en: 'relax', uz: 'dam olmoq, xotirjam bo\'lmoq', ipa: 'rɪˈlæks', pos: 'verb', ex: 'I relaxed at home on Sunday.', exUz: 'Yakshanba kuni uyda dam oldim.' },
    { en: 'lazy', uz: 'dangasa', ipa: 'ˈleɪ.zi', pos: 'adjective', ex: 'I was lazy and stayed in bed.', exUz: 'Dangasalik qilib, yotoqda qoldim.' },
    { en: 'wonderful', uz: "ajoyib, a'lo", ipa: 'ˈwʌn.də.fəl', pos: 'adjective', ex: 'We had a wonderful weekend.', exUz: "Ajoyib dam olish kuni o'tkazdik." },
  ],
  practice: [
    { k: 'choice', q: 'Last weekend I ___ my cousin.', opts: ['visit', 'visited', 'visiting', 'did visit'], a: 1, why: "Ijobiy o'tgan gap → **visited**." },
    { k: 'fill', q: 'We ___ to the market on Saturday. (go)', a: ['went'], uz: 'Shanba kuni bozorga bordik.', why: "**go – went**." },
    { k: 'order', uz: 'Keyin biz kechki ovqat qildik.', words: ['Then', 'we', 'had', 'dinner'], extra: ['have', 'did'] },
    { k: 'translate', uz: "Men yakshanba kuni uyda dam oldim.", a: ['I relaxed at home on Sunday.', 'On Sunday I relaxed at home.', 'I relaxed at home on Sunday'], why: "**relax + ed**." },
    { k: 'match', pairs: [['relax', 'dam olmoq'], ['lazy', 'dangasa'], ['wonderful', 'ajoyib'], ['weekend', 'dam olish kuni'], ['then', 'keyin']] },
    { k: 'tf', q: "*Did you went out on Sunday?* — gap to'g'ri.", a: false, why: "To'g'risi: *Did you **go** out?*" },
    { k: 'listen', say: 'What did you do on Saturday?', opts: ['What did you do on Saturday?', 'What do you do on Saturday?', 'Where did you go on Saturday?', 'What did you do on Sunday?'], a: 0 },
    { k: 'dictation', say: "I didn't do much.", a: ["I didn't do much.", 'I did not do much.'] },
    { k: 'fix', wrong: 'I didn\'t saw my friends.', a: ["I didn't see my friends.", 'I did not see my friends.'], why: "**didn't** dan keyin **see**." },
    { k: 'fill', q: '___ you have a good time? — Yes, I did.', a: ['Did'], uz: 'Yaxshi vaqt o\'tkazdingmi?', why: "O'tgan zamon savoli → **Did**." },
    { k: 'speak', say: 'On Saturday I visited my grandmother.', uz: 'Shanba kuni buvimni ko\'rgani bordim.' },
  ],
  quiz: [
    { k: 'choice', q: 'How ___ your weekend?', opts: ['is', 'was', 'did', 'were'], a: 1, why: "weekend — birlik, o'tgan zamon → **was**." },
    { k: 'fill', q: "I ___ go out on Sunday. (negative)", a: ["didn't", 'did not'] },
    { k: 'order', uz: "Yakshanba kuni nima qilding?", words: ['What', 'did', 'you', 'do', 'on', 'Sunday'], extra: ['does', 'went'] },
    { k: 'translate', uz: "Biz palov pishirdik.", a: ['We cooked plov.', 'We cooked plov'] },
    { k: 'tf', q: "*I goed home at ten.* — to'g'ri gap.", a: false, why: "**go – went**: I **went** home." },
    { k: 'fix', wrong: 'Did you saw your friends?', a: ['Did you see your friends?'], why: "**Did + V1**." },
    { k: 'match', pairs: [['relax', 'dam olmoq'], ['lazy', 'dangasa'], ['wonderful', 'ajoyib'], ['then', 'keyin']] },
    { k: 'choice', q: 'How was your weekend? — ...', opts: ['It was wonderful, thanks!', 'It is wonderful, thanks!', 'I was wonderful.', 'It did wonderful.'], a: 0 },
  ],
  summary: [
    "Savol: **How was your weekend? / What did you do?** Javob: Past Simple + vaqt so'zlari (**on Saturday, then, in the evening**).",
    "Ijobiy: **V2** (went, cooked); inkor va savol: **didn't / did + V1**.",
    "Yangi so'zlar: **relax, lazy, wonderful**.",
  ],
  homework: "Do'stingizga (yoki oynaga qarab) o'tgan dam olish kuningiz haqida 5 ta gap ayting: *On Saturday I… Then I… I didn't…*",
};

export default lesson;
