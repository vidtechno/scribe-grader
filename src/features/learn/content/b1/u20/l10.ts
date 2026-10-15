import type { Lesson } from '../../../types';

// Mini lesson (situation): apologising, explaining, expressing regret and accepting an apology.
// Uses should have / shouldn't have (l13), I wish + had (l12); advice phrases of l6 are not used.
const lesson: Lesson = {
  id: 'u20-l10',
  title: 'Apologising and expressing regret',
  titleUz: "Uzr so'rash va pushaymonlik bildirish",
  mini: true,
  kind: 'situation',
  goal: "Xato qilganingizda **to'g'ri uzr so'raysiz** (*I'm so sorry. It was my fault. I didn't mean to…*), pushaymonligingizni bildirasiz (*I wish I hadn't said that.*) va birovning uzrini qabul qilasiz.",
  slides: [
    {
      title: "Vaziyat: muhim uchrashuvni unutdingiz",
      blocks: [
        { t: 'p', md: "Siz do'stingiz bilan uchrashuvni unutdingiz. Yaxshi uzrda **3 qism** bor: **1) uzr so'rash, 2) nima bo'lganini qisqa ayting, 3) tuzatishni taklif qiling.** Dialogni tinglang (▶)." },
        { t: 'dialog', lines: [
          { who: 'Ben', en: "Lily, I'm so sorry. I completely forgot about our meeting yesterday.", uz: "Lily, juda uzr. Kecha uchrashuvimiz haqida butunlay unutibman." },
          { who: 'Lily', en: "I waited for an hour. I was quite upset, to be honest.", uz: "Bir soat kutdim. Rostini aytsam, ancha xafa bo'ldim." },
          { who: 'Ben', en: "I know, and it was my fault. I should have written it in my diary. I didn't mean to let you down.", uz: "Bilaman, bu mening aybim. Uni kundaligimga yozib qo'yishim kerak edi. Seni xafa qilmoqchi emas edim." },
          { who: 'Lily', en: "Next time, please send me a message.", uz: "Keyingi safar xabar yozib qo'y." },
          { who: 'Ben', en: "I will. Can I make it up to you? Let me buy you lunch tomorrow.", uz: "Yozaman. Buning evaziga nima qilsam bo'ladi? Ertaga tushlikni men to'layman." },
          { who: 'Lily', en: "OK, that sounds nice. Don't worry about it. Everybody makes mistakes.", uz: "Mayli, yaxshi taklif. Xavotir olma. Hamma xato qiladi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Why was Lily upset?", opts: ['Ben forgot their meeting.', 'Ben was late for work.', 'Ben lost her phone.', 'Ben refused to help.'], a: 0, why: "*I completely forgot about our meeting.*" } },
        { t: 'check', ex: { k: 'tf', q: "Lily accepts Ben's apology.", a: true, why: "*Don't worry about it. Everybody makes mistakes.*" } },
      ],
    },
    {
      title: "Uzr so'rash iboralari",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["Uzr so'rash", "I'm so sorry. / I apologise for being late."],
          ["Aybni tan olish", "It was my fault. / That was my mistake."],
          ["Niyat bo'lmagan", "I didn't mean to upset you."],
          ["Pushaymonlik", "I should have called you. / I shouldn't have said that."],
          ["Pushaymonlik (wish)", "I wish I hadn't shouted at you."],
          ["Tuzatishni taklif", "Can I make it up to you?"],
          ["Uzrni qabul qilish", "That's OK. / Don't worry about it. / It doesn't matter."],
          ["Kechirish", "I forgive you. / No harm done."],
        ] },
        { t: 'tip', tone: 'info', md: "**sorry** dan keyin: **sorry for + -ing** (*Sorry for being late*) yoki **sorry + (that) gap** (*Sorry I'm late*). **apologise for + -ing** esa rasmiyroq: *I apologise for the delay.* O'tgan ishdan pushaymon bo'lsangiz: **regret + -ing** (*I regret saying that.*)." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I'm sorry for being late.", "I apologise for the mistake.", "It was my fault."] },
          bad: { title: 'Xato', items: ["I'm sorry for be late.", "I apologise you.", "It was my fault, but I'm sorry not."] } },
        { t: 'check', ex: { k: 'fill', q: "I'm sorry for ___ late. (be)", a: ['being'], uz: "Kechikkanim uchun uzr.", why: "**for** dan keyin **-ing**: *for being*." } },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz uzr so'radi. Siz kechirdingiz:", opts: ["Don't worry about it. It's fine.", "Yes, you are bad.", "I will never forget.", "It was my fault."], a: 0, why: "Uzrni qabul qilish: **Don't worry about it.**" } },
      ],
    },
    {
      title: "Tushuntirish va pushaymonlik",
      blocks: [
        { t: 'p', md: "Sababni qisqa tushuntirish yaxshi, lekin **bahona qilmang**. Avval uzr so'rang, keyin sababni ayting; \"lekin\" bilan boshqani ayblamang." },
        { t: 'examples', items: [
          { en: "I'm sorry I was late. The bus broke down.", uz: "Kechikkanim uchun uzr. Avtobus buzilib qoldi.", note: "Uzr, keyin qisqa sabab." },
          { en: "I regret not telling you earlier.", uz: "Senga oldinroq aytmaganimdan pushaymonman.", note: "**regret + -ing**: o'tgan ish uchun." },
          { en: "I shouldn't have shouted. I wish I hadn't lost my temper.", uz: "Baqirmasligim kerak edi. Kaskiydi, jahlimni yo'qotmasam edi.", note: "**shouldn't have** va **wish + hadn't**." },
        ] },
        { t: 'compare',
          good: { title: "Yaxshi uzr", items: ["I'm sorry. It was my fault.", "I should have told you.", "How can I make it up to you?"] },
          bad: { title: "Yomon uzr", items: ["Sorry, but it's your fault too.", "I'm sorry you feel angry.", "Sorry, sorry, whatever."] } },
        { t: 'check', ex: { k: 'order', uz: "Senga aytishim kerak edi.", words: ['I', 'should', 'have', 'told', 'you.'], extra: ['must', 'tell'], why: "**should have + V3**." } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap pushaymonlik?", opts: ["I wish I hadn't said that.", "I'm going to say that.", "I say that every day.", "I will say that."], a: 0, why: "**wish + hadn't + V3** — pushaymonlik." } },
      ],
    },
    {
      title: "Ish joyida uzr so'rash",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Aziz', en: "Emma, I need to apologise. I sent the wrong document to the client.", uz: "Emma, uzr so'rashim kerak. Mijozga noto'g'ri hujjatni yuborib qo'ydim." },
          { who: 'Emma', en: "Oh no. When did you notice?", uz: "Voy. Qachon payqading?" },
          { who: 'Aziz', en: "This morning. I should have checked it twice. I've already sent the correct one with an apology.", uz: "Bugun ertalab. Uni ikki marta tekshirishim kerak edi. To'g'risini uzr bilan allaqachon yuborganman." },
          { who: 'Emma', en: "Thank you for telling me. It's fine, no harm done. Just be more careful next time.", uz: "Aytganing uchun rahmat. Hechqisi yo'q, zarar yetmadi. Keyingi safar ehtiyotkorroq bo'l." },
          { who: 'Aziz', en: "I will. I really regret making that mistake.", uz: "Bo'laman. Bu xatoni qilganimdan chindan pushaymonman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Aziz hid his mistake from Emma.", a: false, why: "U Emma'ga o'zi aytdi: *I need to apologise.*" } },
        { t: 'check', ex: { k: 'choice', q: "What did Aziz do to fix the problem?", opts: ['He sent the correct document.', 'He called the police.', 'He left the company.', 'Nothing.'], a: 0, why: "*I've already sent the correct one with an apology.*" } },
      ],
    },
  ],
  words: [
    { en: 'apology', uz: "uzr", ipa: 'əˈpɒl.ə.dʒi', pos: 'noun', ex: "Please accept my apology for being late.", exUz: "Kechikkanim uchun uzrimni qabul qiling." },
    { en: 'sincere', uz: "samimiy", ipa: 'sɪnˈsɪər', pos: 'adj', ex: "He gave me a sincere apology.", exUz: "U mendan samimiy uzr so'radi." },
    { en: 'confess', uz: "tan olmoq, bo'yniga olmoq", ipa: 'kənˈfes', pos: 'verb', ex: "I have to confess that I forgot your birthday.", exUz: "Tug'ilgan kuningizni unutganimni tan olishim kerak." },
    { en: 'forgive', uz: "kechirmoq", ipa: 'fəˈɡɪv', pos: 'verb', ex: "Please forgive me.", exUz: "Iltimos, meni kechiring." },
    { en: 'excuse', uz: "bahona, uzr", ipa: 'ɪkˈskjuːs', pos: 'noun', ex: "That is not a good excuse for missing the meeting.", exUz: "Bu yig'ilishga kelmaslik uchun yaxshi bahona emas." },
  ],
  practice: [
    { k: 'match', pairs: [['apologise', "uzr so'ramoq"], ['regret', 'pushaymon bo\'lmoq'], ['blame', 'ayblamoq'], ['forgive', 'kechirmoq'], ['fault', 'ayb']] },
    { k: 'choice', q: "Siz kechikdingiz. Uzr so'rang:", opts: ["I'm so sorry for being late.", "Sorry for be late.", "I apologise you.", "Late, sorry me."], a: 0, why: "**sorry for + -ing**." },
    { k: 'choice', q: "\"I'm sorry I broke your cup.\" Muloyim javob:", opts: ["Don't worry about it. It's only a cup.", "You are a bad friend.", "It was my fault.", "I will never forgive you."], a: 0, why: "Uzrni qabul qilish." },
    { k: 'fill', q: "It was my ___. I should have checked the time.", a: ['fault', 'mistake'], uz: "Bu mening aybim edi. Vaqtni tekshirishim kerak edi.", why: "**my fault** — aybni tan olish." },
    { k: 'fill', q: "I didn't ___ to upset you.", a: ['mean'], uz: "Seni xafa qilmoqchi emas edim.", why: "**didn't mean to** — niyat bo'lmagan." },
    { k: 'fill', q: "I wish I ___ shouted at you.", a: ["hadn't", 'had not'], uz: "Kaskiydi, senga baqirmasam edi.", why: "**wish + hadn't + V3**." },
    { k: 'fill', q: "Can I make it ___ to you? I'll cook dinner.", a: ['up'], uz: "Buning evaziga nima qilsam bo'ladi? Men kechki ovqat pishiraman.", why: "**make it up to you** — tuzatish." },
    { k: 'listen', say: "I shouldn't have said that.", opts: ["I shouldn't have said that.", "I should have said that.", "I didn't say that.", "I won't say that."], a: 0 },
    { k: 'order', uz: "Bu mening aybim edi.", words: ['It', 'was', 'my', 'fault.'], extra: ['is', 'your'], why: "**my fault**." },
    { k: 'fix', wrong: "I'm sorry for be late.", a: ["I'm sorry for being late.", 'I am sorry for being late.', "I'm sorry I'm late.", 'I am sorry I am late.', "I'm sorry I was late.", 'I am sorry I was late.'], why: "**for** dan keyin **-ing** keladi." },
    { k: 'translate', uz: "Kechikkanim uchun uzr so'rayman.", a: ["I apologise for being late.", "I'm sorry for being late.", "I am sorry for being late.", "I apologize for being late."], why: "**apologise for + -ing**." },
    { k: 'tf', q: "*Sorry, but it's your fault too.* — bu yaxshi uzr.", a: false, why: "\"But\" bilan boshqani ayblash uzrni yo'qqa chiqaradi." },
    { k: 'dictation', say: 'Can I make it up to you?', a: ['Can I make it up to you?'], uz: "Buning evaziga nima qilsam bo'ladi?" },
    { k: 'speak', say: "I'm so sorry. It was my fault.", uz: "Juda uzr. Bu mening aybim edi." },
    { k: 'speak', say: "I wish I hadn't said that.", uz: "Kaskiydi, buni aytmasam edi." },
  ],
  quiz: [
    { k: 'choice', q: "Uzrni qabul qilish iborasi qaysi?", opts: ["Don't worry about it.", "It was my fault.", "I apologise.", "I regret it."], a: 0, why: "**Don't worry about it** — uzrni qabul qilish." },
    { k: 'choice', q: "Siz birovni xafa qildingiz, lekin xohlamagan edingiz:", opts: ["I didn't mean to upset you.", "I meant to upset you.", "You are upset.", "I upset you again."], a: 0, why: "**I didn't mean to…**" },
    { k: 'fill', q: "I apologise ___ the delay.", a: ['for'], why: "**apologise for**." },
    { k: 'fill', q: "I ___ saying those words. I was angry.", a: ['regret'], why: "**regret + -ing**." },
    { k: 'order', uz: "Baqirmasligim kerak edi.", words: ['I', "shouldn't", 'have', 'shouted.'], extra: ['should', 'shout'], alt: [['I', 'should', 'not', 'have', 'shouted.']], why: "**shouldn't have + V3**." },
    { k: 'translate', uz: "Iltimos, meni kechiring.", a: ['Please forgive me.', 'Forgive me, please.'], why: "**forgive** — kechirmoq." },
    { k: 'listen', say: "Don't worry about it. No harm done.", opts: ["Don't worry about it. No harm done.", "Don't forget about it. No harm done.", "Don't worry about me. No problem.", "I worry about it. Some harm done."], a: 0 },
    { k: 'tf', q: "*I'm sorry for being late* iborasida **for** dan keyin fe'l oddiy shaklda keladi.", a: false, why: "**for** dan keyin **-ing**: *for being*." },
  ],
  summary: [
    "Yaxshi uzr: **I'm so sorry. It was my fault.** + qisqa sabab + tuzatish: **Can I make it up to you?**",
    "**sorry for / apologise for + -ing**; **I regret + -ing**; **I didn't mean to…**",
    "Pushaymonlik: **I should have… / I shouldn't have… / I wish I hadn't…**",
    "Uzrni qabul qilish: **Don't worry about it. / That's OK. / No harm done.**",
    "Yangi so'zlar: **apologise, regret, blame, forgive, fault**.",
  ],
  homework: "Ikkita uzr yozing: biri do'stingizga (kechikkaningiz uchun), biri ish joyiga (xato uchun). Har birida uzr, sabab va tuzatish taklifi bo'lsin.",
};

export default lesson;
