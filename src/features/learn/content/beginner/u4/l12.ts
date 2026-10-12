import type { Lesson } from '../../../types';

// Mini lesson (consolidation): whole u4. Wh- questions, there is/are, prepositions, much/many, can/can't,
// imperatives, have got, Present Continuous; recycles older words.
const lesson: Lesson = {
  id: 'u4-l12',
  title: 'Describing and asking: final review',
  titleUz: "Tasvirlash va so'rash: yakuniy takror",
  mini: true,
  goal: "4-bo'limni yakunlaysiz: **Wh- savollar, there is/are, predloglar, much/many, can/can't, buyruqlar, have got va Present Continuous** — hammasi bitta joyda.",
  slides: [
    {
      title: 'Bir qarashda: 4-bo\'lim',
      blocks: [
        { t: 'table', head: ['Mavzu', 'Namuna'], speak: [1], rows: [
          ['Wh- savol', 'Where do you live?'],
          ['There is / are', 'There are two chairs in the room.'],
          ['Predlog', 'The bag is under the table.'],
          ['much / many', 'How many eggs? How much milk?'],
          ["can / can't", "I can swim, but I can't ski."],
          ['Buyruq', "Please sit down. Don't run!"],
          ['have got', 'She has got two brothers.'],
          ['Present Continuous', "I'm cooking now."],
        ] },
        { t: 'tip', tone: 'info', md: "**Bitta qoida:** Present Continuous'da **am/is/are** shart; **can** va **don't** dan keyin fe'l oddiy shaklda: *She can swim. Don't run!*" },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['She can swims.', 'She can swim.', 'She cans swim.', 'She can to swim.'], a: 1 } },
      ],
    },
    {
      title: 'Hayotda: yangi qo\'shni',
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Mia', en: "Hello! I'm Mia. What's your name?", uz: 'Salom! Men Miyaman. Ismingiz nima?' },
          { who: 'Tom', en: "I'm Tom, your new neighbour. Is there a shop near here?", uz: "Men Tom, yangi qo'shnangizman. Yaqin atrofda do'kon bormi?" },
          { who: 'Mia', en: "Yes, there is. It's opposite the bank. Have you got a car?", uz: "Ha, bor. U bankning qarshisida. Mashinangiz bormi?" },
          { who: 'Tom', en: "No, I haven't. But I can ride a bike. How many shops are there on this street?", uz: "Yo'q. Lekin velosiped haydashni bilaman. Bu ko'chada nechta do'kon bor?" },
          { who: 'Mia', en: "There are three. Look, my son is playing in front of the house. Come in and have some tea!", uz: "Uchta. Qarang, o'g'lim uyning oldida o'ynayapti. Kiring, choy iching!" },
        ] },
        { t: 'check', ex: { k: 'fill', q: 'There ___ three shops on this street.', a: ['are'], uz: "Bu ko'chada uchta do'kon bor.", why: "Ko'plik — **are**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['How much water?', "I'm reading a book.", 'He has got a sister.', 'Is there a park?'] }, bad: { title: "Noto'g'ri", items: ['How many water?', 'I reading a book.', 'He have got a sister.', 'It is a park here?'] } },
        { t: 'p', md: "Eslatma: **many** — sanaladigan, **much** — sanalmaydigan; **has got** — he/she/it; **some** — darak, **any** — savol/inkor." },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['Are there any chairs?', 'Is there any chairs?', 'Are there a chair?', 'Have there any chairs?'], a: 0 } },
      ],
    },
  ],
  words: [
    { en: 'sure', uz: 'albatta; ishonchli', ipa: 'ʃɔːr', pos: 'adjective', ex: 'Sure, you can come in.', exUz: "Albatta, kirishingiz mumkin." },
    { en: 'together', uz: 'birga', ipa: 'təˈɡeð.ər', pos: 'adverb', ex: 'We are cooking together.', exUz: 'Biz birga ovqat tayyorlayapmiz.' },
    { en: 'quickly', uz: 'tez, tezda', ipa: 'ˈkwɪk.li', pos: 'adverb', ex: "Don't run so quickly!", exUz: "Juda tez yugurmang!" },
  ],
  practice: [
    { k: 'choice', q: '___ do you live? — In Tashkent.', opts: ['Where', 'Who', 'Why', 'Whose'], a: 0 },
    { k: 'choice', q: 'The cat is ___ the sofa. (ustida)', opts: ['on', 'under', 'between', 'behind'], a: 0 },
    { k: 'fill', q: 'How ___ sugar do you need?', a: ['much'], uz: 'Qancha shakar kerak?', why: "Sanalmaydi → **much**." },
    { k: 'fill', q: 'Look! The children ___ playing in the park.', a: ['are'], uz: "Qarang! Bolalar parkda o'ynayapti.", why: "**are** + playing." },
    { k: 'order', uz: "Uning ikkita opasi bor.", words: ['She', 'has', 'got', 'two', 'sisters'], extra: ['have'] },
    { k: 'translate', uz: "Men suzishni bilaman, lekin chang'i uchishni bilmayman.", a: ["I can swim, but I can't ski.", 'I can swim but I can\'t ski.', 'I can swim, but I cannot ski.'], why: "**can** / **can't** + fe'l." },
    { k: 'match', pairs: [['Where', 'Qayerda'], ['Who', 'Kim'], ['Why', 'Nega'], ['Which', 'Qaysi'], ['Whose', 'Kimning']] },
    { k: 'tf', q: "*Don't to run!* — gap to'g'ri.", a: false, why: "To'g'risi: *Don't run!*" },
    { k: 'listen', say: 'Is there a bank near here?', opts: ['Is there a bank near here?', 'Are there banks near here?', 'Is there a park near here?', 'Is it a bank near here?'], a: 0 },
    { k: 'fix', wrong: 'He have got a brother.', a: ['He has got a brother.'], why: "**he** bilan — **has got**." },
    { k: 'dictation', say: "I'm waiting for my friend.", a: ["I'm waiting for my friend.", 'I am waiting for my friend.'] },
    { k: 'speak', say: 'Can I have some tea, please?', uz: 'Iltimos qiling' },
  ],
  quiz: [
    { k: 'choice', q: '___ is your birthday? — In May.', opts: ['When', 'Who', 'Where', 'How many'], a: 0 },
    { k: 'fill', q: 'There ___ a lamp on the shelf.', a: ['is'] },
    { k: 'choice', q: 'How ___ apples have you got?', opts: ['much', 'many', 'any', 'a'], a: 1 },
    { k: 'order', uz: 'Iltimos, o\'tiring.', words: ['Please', 'sit', 'down'], extra: ['sits'], alt: [['sit', 'down', 'please']] },
    { k: 'translate', uz: "U hozir uxlayapti.", a: ["He's sleeping now.", 'He is sleeping now.', "She's sleeping now.", 'She is sleeping now.', "He's sleeping.", "She's sleeping."] },
    { k: 'fix', wrong: 'Is there any chairs here?', a: ['Are there any chairs here?'], why: "Ko'plik: **Are there**." },
    { k: 'match', pairs: [['in front of', 'oldida'], ['behind', 'orqasida'], ['between', 'orasida'], ['opposite', 'qarshisida']] },
    { k: 'tf', q: "*She can swims.* — gap to'g'ri.", a: false, why: "**can** dan keyin fe'l o'zgarmaydi: *She can swim.*" },
  ],
  summary: [
    "**Wh- savollar:** what, where, who, why, which, whose, how many/much.",
    "**There is / are**, **some / any** va predloglar bilan joyni tasvirlang.",
    "**can / can't**, buyruqlar (*Sit down. Don't run!*), **have got / has got**.",
    "**Present Continuous:** am/is/are + -ing — hozirgi ish.",
  ],
  homework: "O'z xonangiz haqida 5 ta gap ayting: *There is… There are… I'm sitting… I've got…*",
};

export default lesson;
