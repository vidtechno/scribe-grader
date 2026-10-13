import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about what people did. Past Simple dialogs.
const lesson: Lesson = {
  id: 'u9-l14',
  title: 'Listening and speaking: what did you do?',
  titleUz: "Tinglash va gapirish: nima qildingiz?",
  mini: true,
  kind: 'skill',
  goal: "O'tgan kun haqidagi qisqa suhbatni **tinglab tushunasiz** (kim, qayerda, nima qildi) va o'zingiz **nima qilganingizni** ovoz chiqarib aytasiz: *What did you do? — I went to a concert with my friends. We had a lovely evening.*",
  slides: [
    {
      title: 'Tinglash: suhbatni tushunish',
      blocks: [
        { t: 'p', md: "Suhbatni tinglaganda uchta narsani qidiring: **kim**, **qachon / qayerda**, **nima qildi**. Ko'pincha javob **did / didn't** va **V2** ichida bo'ladi. Avval suhbatni tinglang, keyin matn bilan solishtiring." },
        { t: 'dialog', lines: [
          { who: 'Nodira', en: 'Hi Sam! What did you do last night?', uz: "Salom, Sam! Kecha kechqurun nima qilding?" },
          { who: 'Sam', en: 'I went to a concert with my cousin. It was lovely!', uz: "Amakivachcham bilan konsertga bordim. Juda yoqimli bo'ldi!" },
          { who: 'Nodira', en: 'Did you enjoy it?', uz: "Yoqdimi?" },
          { who: 'Sam', en: 'Yes, I did. The musicians played for two hours, and we sang with them.', uz: "Ha. Musiqachilar ikki soat chalishdi, biz ular bilan birga kuyladik." },
          { who: 'Nodira', en: 'Wow! Did you get home late?', uz: "Voy! Uyga kech keldingmi?" },
          { who: 'Sam', en: 'Yes, I got home at midnight. I was very tired this morning!', uz: "Ha, yarim tunda keldim. Bugun ertalab juda charchagan edim!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Who did Sam go to the concert with?', opts: ['His cousin', 'His teacher', 'Nodira', 'His brother'], a: 0, why: "*I went to a concert with my cousin.*" } },
      ],
    },
    {
      title: 'Ikkinchi suhbat: tez gap',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Aziza', en: 'You look sleepy. What did you do on Sunday?', uz: "Uyqusirab turibsan. Yakshanba kuni nima qilding?" },
          { who: 'Davron', en: "I didn't do much. I stayed at home and watched films.", uz: "Ko'p narsa qilmadim. Uyda qolib, film ko'rdim." },
          { who: 'Aziza', en: 'Did you watch them alone?', uz: "Yolg'iz ko'rdingmi?" },
          { who: 'Davron', en: 'No, I invited my friend Ali. We ate pizza and talked until late.', uz: "Yo'q, do'stim Alini chaqirdim. Pitsa yedik va kechgacha gaplashdik." },
        ] },
        { t: 'tip', tone: 'info', md: "Tez gapirishda **did you** deyarli **\"didya\"** eshitiladi, **didn't** oxiridagi *t* kuchsiz. Shuning uchun gapni emas, **asosiy so'zni** (went, watched, ate) ushlang." },
        { t: 'check', ex: { k: 'tf', q: 'Davron watched the films alone.', a: false, why: "*I invited my friend Ali.*" } },
      ],
    },
    {
      title: 'Gapirish: javob tuzish',
      blocks: [
        { t: 'p', md: "Savolga \"ha/yo'q\" bilan to'xtamang. Javob formulasi: **qisqa javob + 1–2 ta tafsilot**." },
        { t: 'table', head: ['Savol', 'Yaxshi javob'], speak: [0, 1], rows: [
          ['What did you do last night?', 'I went to a concert with my cousin.'],
          ['Did you enjoy it?', 'Yes, I did. It was lovely.'],
          ['Did you stay at home?', "No, I didn't. I went out with friends."],
          ['Who did you invite?', 'I invited my friend Ali.'],
        ] },
        { t: 'check', ex: { k: 'fill', q: 'A: Did you enjoy the film? B: Yes, I ___.', a: ['did'], uz: 'Ha, yoqdi.', why: "Did-savolga qisqa javob → **Yes, I did.**" } },
      ],
    },
  ],
  words: [
    { en: 'invite', uz: 'taklif qilmoq, chaqirmoq', ipa: 'ɪnˈvaɪt', pos: 'verb', ex: 'I invited my friend for dinner.', exUz: 'Do\'stimni kechki ovqatga chaqirdim.' },
    { en: 'enjoy', uz: "yoqtirmoq, zavqlanmoq", ipa: 'ɪnˈdʒɔɪ', pos: 'verb', ex: 'We enjoyed the music.', exUz: 'Musiqadan zavqlandik.' },
    { en: 'lovely', uz: 'yoqimli, chiroyli', ipa: 'ˈlʌv.li', pos: 'adjective', ex: 'It was a lovely evening.', exUz: 'Yoqimli kech edi.' },
    { en: 'midnight', uz: 'yarim tun', ipa: 'ˈmɪd.naɪt', pos: 'noun', ex: 'We got home at midnight.', exUz: 'Uyga yarim tunda keldik.' },
    { en: 'alone', uz: "yolg'iz", ipa: 'əˈləʊn', pos: 'adjective', ex: 'I watched the film alone.', exUz: "Filmni yolg'iz ko'rdim." },
    { en: 'until', uz: 'gacha, qadar', ipa: 'ənˈtɪl', pos: 'preposition', ex: 'We talked until late.', exUz: 'Kechgacha gaplashdik.' },
  ],
  practice: [
    { k: 'listen', say: 'I went to a concert with my cousin.', opts: ['I went to a concert with my cousin.', 'I go to a concert with my cousin.', 'I went to a concert with my brother.', 'I went to a cinema with my cousin.'], a: 0 },
    { k: 'listen', say: 'Did you get home late?', opts: ['Did you get home late?', 'Did you go home late?', 'Do you get home late?', 'Did you get home early?'], a: 0 },
    { k: 'dictation', say: 'We talked until late.', a: ['We talked until late.'] },
    { k: 'dictation', say: "I didn't do much.", a: ["I didn't do much.", 'I did not do much.'] },
    { k: 'choice', q: 'A: What did you do last night? B: ...', opts: ['I watched a film.', 'I watch a film.', 'I am watching a film.', 'Yes, I did.'], a: 0, why: "What-savolga fakt bilan javob: **I watched a film.**" },
    { k: 'choice', q: 'A: Did you enjoy the concert? B: ...', opts: ['Yes, I did. It was lovely.', 'Yes, I enjoy.', 'Yes, it did.', 'I enjoyed yes.'], a: 0 },
    { k: 'fill', q: 'We got home ___ midnight.', a: ['at'], uz: 'Uyga yarim tunda keldik.', why: "Aniq vaqt: **at midnight**." },
    { k: 'order', uz: 'Men do\'stimni chaqirdim.', words: ['I', 'invited', 'my', 'friend'], extra: ['invite', 'did'] },
    { k: 'translate', uz: "Kecha men uyda qoldim va film ko'rdim.", a: ['Yesterday I stayed at home and watched a film.', 'I stayed at home and watched a film yesterday.', 'Yesterday I stayed at home and watched films.', 'I stayed at home and watched films yesterday.'], why: "Ikkala fe'l ham V2: **stayed, watched**." },
    { k: 'match', pairs: [['invite', 'taklif qilmoq'], ['enjoy', 'zavqlanmoq'], ['lovely', 'yoqimli'], ['alone', "yolg'iz"], ['until', 'gacha']] },
    { k: 'speak', say: 'What did you do last night?', uz: 'Kecha kechqurun nima qilding?' },
    { k: 'speak', say: 'I went to a concert with my cousin.', uz: 'Amakivachcham bilan konsertga bordim.' },
    { k: 'speak', say: "No, I didn't. I stayed at home.", uz: "Yo'q. Uyda qoldim." },
  ],
  quiz: [
    { k: 'listen', say: 'We got home at midnight.', opts: ['We got home at midnight.', 'We get home at midnight.', 'We got home at nine.', 'We went home at midnight.'], a: 0 },
    { k: 'dictation', say: 'Did you enjoy it?', a: ['Did you enjoy it?'] },
    { k: 'choice', q: 'A: Did you stay at home? B: ...', opts: ["No, I didn't. I went out.", 'No, I not stay.', "No, I don't.", 'No, I went not.'], a: 0 },
    { k: 'fill', q: "I ___ watch it alone. I invited a friend. (negative)", a: ["didn't", 'did not'] },
    { k: 'order', uz: 'Biz kechgacha gaplashdik.', words: ['We', 'talked', 'until', 'late'], extra: ['talk', 'at'] },
    { k: 'translate', uz: "U bilan nima qildingiz?", a: ['What did you do with him?', 'What did you do with her?'] },
    { k: 'tf', q: "*Nodira asked Sam about last night.* Sam went to a concert.", a: true, why: "*I went to a concert with my cousin.*" },
    { k: 'match', pairs: [['invite', 'taklif qilmoq'], ['enjoy', 'zavqlanmoq'], ['midnight', 'yarim tun'], ['alone', "yolg'iz"]] },
  ],
  summary: [
    "Suhbatda qidiring: **kim, qachon / qayerda, nima qildi**. Javoblar ko'pincha **V2** va **did / didn't** da.",
    "Javob formulasi: **qisqa javob + tafsilot** (*Yes, I did. It was lovely.*).",
    "Tez gapirishda **did you** — \"didya\"; asosiy fe'lni ushlang.",
    "Yangi so'zlar: **invite, enjoy, lovely, midnight, alone, until**.",
  ],
  homework: "Do'stingiz bilan juftlikda mashq qiling: biri \"What did you do yesterday?\" deb so'raydi, ikkinchisi 3 ta gap bilan javob beradi. Keyin rollarni almashtiring.",
};

export default lesson;
