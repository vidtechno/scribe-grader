import type { Lesson } from '../../../types';

// Mini lesson (situation): small talk at a party — jobs, hobbies, like/love/hate + -ing, how often.
const lesson: Lesson = {
  id: 'u7-l9',
  title: 'At a party: hobbies and free time',
  titleUz: "Ziyofatda: hobbi va bo'sh vaqt",
  mini: true,
  goal: "Ziyofatda yangi odam bilan tanishib, **kasbi va hobbisi** haqida suhbatlashasiz: *What do you do? What do you like doing in your free time? How often do you go swimming?* Javobda **like / love / hate + -ing** ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: ziyofatda tanishuv',
      blocks: [
        { t: 'p', md: "Ziyofatda odamlar odatda ikki narsa so'raydi: **kasb** (*What do you do?*) va **bo'sh vaqt** (*What do you like doing?*). Keyin davomiylikni so'raydi: **How often…?**" },
        { t: 'dialog', lines: [
          { who: 'Emma', en: 'Hi, I\'m Emma. What do you do?', uz: 'Salom, men Emmaman. Siz nima ish qilasiz?' },
          { who: 'Timur', en: "I'm a mechanic. I fix cars. And you?", uz: 'Men mexanikman. Mashina ta\'mirlayman. Siz-chi?' },
          { who: 'Emma', en: "I'm a nurse. What do you like doing in your free time?", uz: "Men hamshiraman. Bo'sh vaqtingizda nima qilishni yoqtirasiz?" },
          { who: 'Timur', en: 'I love playing football. I play every Saturday.', uz: "Men futbol o'ynashni juda yaxshi ko'raman. Har shanba o'ynayman." },
          { who: 'Emma', en: 'Nice! I hate running, but I like swimming.', uz: "Zo'r! Men yugurishni yomon ko'raman, lekin suzishni yoqtiraman." },
          { who: 'Timur', en: 'How often do you go swimming?', uz: 'Qanchalik tez-tez suzishga borasiz?' },
          { who: 'Emma', en: 'Twice a week. It\'s my favourite hobby.', uz: "Haftada ikki marta. Bu mening sevimli hobbim." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Emma: "I hate ___, but I like swimming."', opts: ['run', 'to running', 'running', 'runing'], a: 2, why: "**hate + fe'l-ing**. *run* — qisqa fe'l, **n** ikkilanadi: **running**." } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0], rows: [
          ['What do you do?', "Kasbini so'raysiz"],
          ['What do you like doing in your free time?', "Hobbisini so'raysiz"],
          ['I love playing tennis.', 'Juda yaxshi ko\'rishingizni aytasiz'],
          ["I don't like cooking.", 'Yoqtirmasligingizni aytasiz'],
          ['How often do you go to the gym?', "Tez-tezligini so'raysiz"],
          ['Me too! / Really? I hate it.', "Suhbatdoshga javob berasiz"],
        ] },
        { t: 'tip', tone: 'good', md: "Faqat *Yes* yoki *No* demang. Savol qaytaring: **And you?** — suhbat shunday davom etadi." },
        { t: 'check', ex: { k: 'fill', q: 'How ___ do you go to the gym?', a: ['often'], uz: 'Sport zaliga qanchalik tez-tez borasiz?', why: "Tez-tezlik so'raladi: **How often…?**" } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['I like playing football.', 'I go swimming twice a week.', 'What do you do?'] }, bad: { title: "Noto'g'ri", items: ['I like play football.', 'I go swimming two time a week.', 'What are you do?'] } },
        { t: 'p', md: "Eslatma: **like / love / hate** dan keyin harakat bo'lsa — **-ing**. Kasbni so'rash uchun **What do you do?** (*What are you do?* emas)." },
        { t: 'check', ex: { k: 'fix', wrong: 'I love cook.', a: ['I love cooking.'], why: "**love + fe'l-ing**: *cooking*." } },
      ],
    },
  ],
  words: [
    { en: 'hobby', uz: 'hobbi', ipa: 'ˈhɒb.i', pos: 'noun', ex: 'My hobby is photography.', exUz: 'Mening hobbim — suratga olish.' },
    { en: 'guest', uz: 'mehmon', ipa: 'ɡest', pos: 'noun', ex: 'There are fifty guests at the party.', exUz: "Ziyofatda ellik mehmon bor." },
    { en: 'introduce', uz: 'tanishtirmoq', ipa: 'ˌɪn.trəˈdjuːs', pos: 'verb', ex: 'Let me introduce my friend.', exUz: "Do'stimni tanishtiray." },
    { en: 'favourite', uz: 'sevimli', ipa: 'ˈfeɪ.vər.ɪt', pos: 'adjective', ex: 'Football is my favourite sport.', exUz: 'Futbol — mening sevimli sportim.' },
  ],
  practice: [
    { k: 'choice', q: '___ do you do? — I\'m a chef.', opts: ['What', 'Where', 'How', 'Who'], a: 0, why: "Kasbni so'rash: **What do you do?**" },
    { k: 'fill', q: 'My brother loves ___ football. (play)', a: ['playing'], uz: "Akam futbol o'ynashni juda yaxshi ko'radi.", why: "**love + fe'l-ing**: *playing*." },
    { k: 'order', uz: 'Bo\'sh vaqtingizda nima qilishni yoqtirasiz?', words: ['What', 'do', 'you', 'like', 'doing', 'in', 'your', 'free', 'time'], extra: ['to do', 'does'] },
    { k: 'translate', uz: 'Men yugurishni yomon ko\'raman.', a: ['I hate running.'], why: "**hate + running** (n ikkilanadi)." },
    { k: 'match', pairs: [['hobby', 'hobbi'], ['guest', 'mehmon'], ['introduce', 'tanishtirmoq'], ['favourite', 'sevimli'], ['free time', "bo'sh vaqt"]] },
    { k: 'tf', q: "*She likes swim.* — gap to'g'ri.", a: false, why: "To'g'risi: *She likes **swimming**.*" },
    { k: 'listen', say: 'How often do you go swimming?', opts: ['How often do you go swimming?', 'How long do you go swimming?', 'How often does she go swimming?', 'Where do you go swimming?'], a: 0 },
    { k: 'dictation', say: 'I love playing football.', a: ['I love playing football.'] },
    { k: 'fix', wrong: 'What are you do?', a: ['What do you do?'], why: "Kasbni so'rash: **What do you do?**" },
    { k: 'fill', q: 'I go to the gym ___ a week. (2x)', a: ['twice'], uz: 'Haftada ikki marta sport zaliga boraman.', why: "2 marta = **twice**." },
    { k: 'choice', q: 'Timur: "I\'m a mechanic. And you?" Emma: ...', opts: ["I'm a nurse.", 'I a nurse.', 'I do nurse.', 'I am nursing.'], a: 0 },
    { k: 'speak', say: 'What do you like doing in your free time?', uz: "Bo'sh vaqtingizda nima qilishni yoqtirasiz?" },
  ],
  quiz: [
    { k: 'choice', q: 'I like ___ music.', opts: ['listen to', 'listening to', 'listen', 'to listening'], a: 1 },
    { k: 'fill', q: 'He hates ___ early. (get up)', a: ['getting up'], why: "**get** — t ikkilanadi: **getting up**." },
    { k: 'order', uz: 'Qanchalik tez-tez suzishga borasiz?', words: ['How', 'often', 'do', 'you', 'go', 'swimming'], extra: ['does', 'long'] },
    { k: 'translate', uz: 'Mening sevimli hobbim — suzish.', a: ['My favourite hobby is swimming.'] },
    { k: 'tf', q: "*What do you do?* — bu kasb haqida savol.", a: true },
    { k: 'fix', wrong: 'I enjoy to play tennis.', a: ['I enjoy playing tennis.'], why: "**enjoy** dan keyin faqat **-ing**." },
    { k: 'match', pairs: [['nurse', 'hamshira'], ['mechanic', 'mexanik'], ['hobby', 'hobbi'], ['guest', 'mehmon']] },
    { k: 'choice', q: '"How often do you play tennis?" — ...', opts: ['Twice a week.', 'For two hours.', 'Two kilometres.', 'At six o\'clock.'], a: 0 },
  ],
  summary: [
    "Kasb: **What do you do? — I'm a nurse.** Hobbi: **What do you like doing?**",
    "**like / love / hate / enjoy + fe'l-ing**: *I love playing football.*",
    "Tez-tezlik: **How often…? — Twice a week.** Savolni qaytaring: **And you?**",
    "Yangi so'zlar: **hobby, guest, introduce, favourite**.",
  ],
  homework: "Bugun 3 ta gap yozing: *I'm a… / I love… / I hate…*. Keyin do'stingizdan *And you?* deb so'rang.",
};

export default lesson;
