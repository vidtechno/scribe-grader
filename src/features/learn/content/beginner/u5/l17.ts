import type { Lesson } from '../../../types';

// Mini lesson (skill, Listening + Speaking): talking about the last weekend. Past tenses + going to, will, comparatives.
const lesson: Lesson = {
  id: 'u5-l17',
  title: 'Listening and speaking: my last weekend',
  titleUz: "Tinglash va gapirish: o'tgan dam olish kunim",
  mini: true,
  goal: "Dam olish kuningiz haqidagi **suhbatni tinglab tushunasiz** va o'zingiz o'tgan dam olish kuni haqida (*I went… It was… I didn't…*) hamda keyingi rejangiz haqida gapira olasiz.",
  slides: [
    {
      title: 'Tinglang va o\'qing: Anna va Jasur',
      blocks: [
        { t: 'p', md: "Avval suhbatni **audio orqali** tinglang (kitobsiz), keyin matnni o'qing. Suhbatda hamma **o'tgan zamon** gaplarini topishga harakat qiling." },
        { t: 'dialog', lines: [
          { who: 'Jasur', en: 'Hi, Anna! How was your weekend?', uz: "Salom, Anna! Dam olish kunlaring qanday o'tdi?" },
          { who: 'Anna', en: 'It was great! We went to the lake on Saturday.', uz: "Ajoyib edi! Shanba kuni ko'lga bordik." },
          { who: 'Jasur', en: 'Nice! What did you do there?', uz: 'Zo\'r! U yerda nima qildingiz?' },
          { who: 'Anna', en: "We had a picnic. My brother went fishing, but he didn't get any fish.", uz: "Piknik qildik. Akam baliq ovlashga bordi, lekin birorta ham baliq tutmadi." },
          { who: 'Jasur', en: 'Was the lake big?', uz: "Ko'l katta edimi?" },
          { who: 'Anna', en: 'Yes, it was bigger than our park. And what about you?', uz: "Ha, bizning parkdan kattaroq edi. Sen-chi?" },
          { who: 'Jasur', en: 'I stayed at home. It was boring. But next weekend I am going to visit my cousin in the mountains.', uz: "Men uyda qoldim. Zerikarli edi. Lekin kelasi dam olish kuni tog'dagi amakivachchamnikiga bormoqchiman." },
          { who: 'Anna', en: 'Great! I think you will love it.', uz: "Zo'r! O'ylaymanki, senga yoqadi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Where did Anna go on Saturday?', opts: ['To the lake', 'To the mountains', 'To her cousin'], a: 0, why: "*We went to the lake on Saturday.*" } },
        { t: 'check', ex: { k: 'tf', q: "Anna's brother got a lot of fish.", a: false, why: "*he didn't get any fish* — birorta ham baliq tutmadi." } },
      ],
    },
    {
      title: "Dam olish kuni haqida gapirish",
      blocks: [
        { t: 'table', head: ['Savol', 'Javob namunasi'], speak: [0, 1], rows: [
          ['How was your weekend?', 'It was great. / It was OK. / It was boring.'],
          ['Where did you go?', 'I went to the lake.'],
          ['What did you do?', 'I had a picnic with my family.'],
          ['Did you see your friends?', "Yes, I did. / No, I didn't."],
          ['What are you going to do next weekend?', "I'm going to visit my cousin."],
        ] },
        { t: 'tip', tone: 'good', md: "**Faqat Yes yoki No demang.** Javobga bitta qo'shimcha gap qo'shing: *Yes, I did. We played football.* Shunda suhbat tabiiy chiqadi." },
        { t: 'check', ex: { k: 'order', uz: "Biz ko'lga bordik.", words: ['We', 'went', 'to', 'the', 'lake'], extra: ['go', 'goed'] } },
      ],
    },
    {
      title: 'Xatolarga e\'tibor bering',
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['I went to the lake.', "I didn't see my friends.", 'The lake was bigger than the park.', 'Next weekend I will rest.'] }, bad: { title: "Noto'g'ri", items: ['I goed to the lake.', "I didn't saw my friends.", 'The lake was more big than the park.', 'Next weekend I rested.'] } },
        { t: 'p', md: "**Gapirishdan oldin**: 1) vaqtni ayting (*On Saturday…*), 2) o'tgan zamon fe'lini tanlang (*went, had, played*), 3) fikringizni qo'shing (*It was great.*). Xato qilsangiz ham to'xtamang, gapni oxirigacha ayting." },
        { t: 'check', ex: { k: 'fix', wrong: "I didn't saw my friends.", a: ["I didn't see my friends.", 'I did not see my friends.'], why: "**didn't** + V1: *didn't see*." } },
      ],
    },
    {
      title: 'Yozma topshiriq: namuna',
      blocks: [
        { t: 'p', md: "Siz ham o'tgan dam olish kuningiz haqida 5 ta gap yozing. Mana namuna:" },
        { t: 'text', title: 'My last weekend', en: "Last weekend I was at home with my family. On Saturday we visited my grandmother, and she cooked a delicious dinner. On Sunday it was sunny, so I went to the park with my friends. We played football, but we didn't win. It was a good weekend. Next weekend I am going to relax.", uz: "O'tgan dam olish kuni men oilam bilan uyda edim. Shanba kuni buvimnikiga bordik, u mazali kechki ovqat pishirdi. Yakshanba kuni havo ochiq edi, shuning uchun do'stlarim bilan parkka bordim. Futbol o'ynadik, lekin yutmadik. Yaxshi dam olish kuni edi. Kelasi dam olish kuni dam olmoqchiman." },
        { t: 'check', ex: { k: 'fill', q: 'On Sunday I ___ to the park. (go)', a: ['went'], uz: 'Yakshanba kuni parkka bordim.', why: "**go – went**." } },
      ],
    },
  ],
  words: [
    { en: 'lake', uz: "ko'l", ipa: 'leɪk', pos: 'noun', ex: 'We went to the lake.', exUz: "Biz ko'lga bordik." },
    { en: 'mountain', uz: "tog'", ipa: 'ˈmaʊn.tɪn', pos: 'noun', ex: 'My cousin lives in the mountains.', exUz: "Amakivachcham tog'larda yashaydi." },
    { en: 'fishing', uz: 'baliq ovlash', ipa: 'ˈfɪʃ.ɪŋ', pos: 'noun', ex: 'My father went fishing.', exUz: 'Dadam baliq ovlashga bordi.' },
    { en: 'sunny', uz: 'quyoshli', ipa: 'ˈsʌn.i', pos: 'adj', ex: 'It was sunny on Sunday.', exUz: 'Yakshanba kuni havo quyoshli edi.' },
    { en: 'rainy', uz: "yomg'irli", ipa: 'ˈreɪ.ni', pos: 'adj', ex: 'Saturday was rainy.', exUz: "Shanba kuni yomg'irli edi." },
    { en: 'win', uz: 'yutmoq', ipa: 'wɪn', pos: 'verb', ex: "We didn't win the game.", exUz: "Biz o'yinda yutmadik." },
  ],
  practice: [
    { k: 'listen', say: 'We went to the lake on Saturday.', opts: ['We went to the lake on Saturday.', 'We go to the lake on Saturday.', 'We went to the park on Sunday.', 'He went to the lake on Saturday.'], a: 0 },
    { k: 'dictation', say: 'It was great!', a: ['It was great!', 'It was great'], uz: 'Ajoyib edi!' },
    { k: 'listen', say: "My brother didn't get any fish.", opts: ["My brother didn't get any fish.", 'My brother got a lot of fish.', "My mother didn't get any fish.", 'My brother didn\'t eat any fish.'], a: 0 },
    { k: 'choice', q: 'Anna: "The lake was ___ than our park."', opts: ['bigger', 'more big', 'biggest', 'big'], a: 0, why: "Qisqa sifat + **-er** + **than**: *bigger than*." },
    { k: 'speak', say: 'How was your weekend?', uz: "Dam olish kunlaring qanday o'tdi?" },
    { k: 'speak', say: 'It was great. I went to the lake.', uz: "Ajoyib edi. Ko'lga bordim." },
    { k: 'order', uz: 'Biz piknik qildik.', words: ['We', 'had', 'a', 'picnic'], extra: ['have', 'has'] },
    { k: 'fill', q: 'On Sunday it was ___, so we played outside. (sunny / rainy)', a: ['sunny'], uz: "Yakshanba kuni havo quyoshli edi, shuning uchun tashqarida o'ynadik.", hint: 'quyoshli' },
    { k: 'speak', say: "I didn't see my friends.", uz: "Do'stlarimni ko'rmadim." },
    { k: 'translate', uz: "Shanba kuni men uyda qoldim.", a: ['On Saturday I stayed at home.', 'I stayed at home on Saturday.'] },
    { k: 'speak', say: 'Next weekend I am going to visit my cousin.', uz: 'Kelasi dam olish kuni amakivachchamnikiga bormoqchiman.' },
    { k: 'fix', wrong: 'I goed to the mountains.', a: ['I went to the mountains.'], why: "**go – went**." },
    { k: 'translate', uz: "Siz kecha nima qildingiz?", a: ['What did you do yesterday?'], why: "**What did + ega + V1?**" },
    { k: 'match', pairs: [['lake', "ko'l"], ['mountain', "tog'"], ['fishing', 'baliq ovlash'], ['sunny', 'quyoshli'], ['win', 'yutmoq']] },
    { k: 'speak', say: 'Last weekend I was at home.', uz: "O'tgan dam olish kuni uyda edim." },
  ],
  quiz: [
    { k: 'choice', q: 'Jasur: "Next weekend I am ___ visit my cousin."', opts: ['going to', 'went to', 'will to', 'go to'], a: 0, why: "Reja: **be going to + V1**." },
    { k: 'tf', q: "Jasur's weekend was boring.", a: true, why: "*I stayed at home. It was boring.*" },
    { k: 'fill', q: "We ___ win the game. (negative)", a: ["didn't", 'did not'], uz: "Biz o'yinda yutmadik." },
    { k: 'order', uz: "Ko'l bizning parkdan kattaroq edi.", words: ['The', 'lake', 'was', 'bigger', 'than', 'our', 'park'], extra: ['more', 'were'] },
    { k: 'dictation', say: 'We had a picnic on Sunday.', a: ['We had a picnic on Sunday.'] },
    { k: 'translate', uz: "Men dam olaman, deb o'ylayman.", a: ['I think I will rest.', 'I think I will relax.', "I think I'll rest.", "I think I'll relax."] },
    { k: 'fix', wrong: 'The lake was more big than the park.', a: ['The lake was bigger than the park.'], why: "Qisqa sifat: **bigger**." },
    { k: 'match', pairs: [['lake', "ko'l"], ['mountain', "tog'"], ['sunny', 'quyoshli'], ['rainy', "yomg'irli"]] },
  ],
  summary: [
    "Dam olish kunini so'rash: **How was your weekend? Where did you go? What did you do?** Javob: **It was great. I went… I had… I didn't…**",
    "Faqat *Yes / No* demang: **Yes, I did. + bitta qo'shimcha gap.**",
    "Rejani **be going to** bilan ayting: *Next weekend I am going to visit my cousin.*",
    "Namuna matn: *Last weekend I was at home. On Saturday we visited my grandmother. On Sunday it was sunny, so I went to the park. We played football, but we didn't win. It was a good weekend.*",
  ],
  homework: "Yozma: o'tgan dam olish kuningiz haqida 5 ta gap yozing (qayerda eding, nima qilding, ob-havo qanday edi, bitta *didn't* gap, keyingi reja). Keyin uni telefoningizga ovoz bilan yozib, eshiting va xatolarni toping. Namuna: *Last weekend I was at home. On Saturday I cleaned my room. It was rainy, so I didn't go out. I watched a film. Next weekend I am going to see my friends.*",
};

export default lesson;
