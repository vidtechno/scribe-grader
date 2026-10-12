import type { Drill } from '../../../types';

/** Mastery check (Present Continuous block) and the unit 4 mini-boss. */
export const drillsMastery: Drill[] = [
  {
    id: 'u4-l16-d1',
    title: 'Present Continuous mastery',
    titleUz: 'Present Continuous: to\'liq sinov',
    goal: "Present Continuous ni to'liq tekshirasiz: darak gap, -ing imlosi, inkor, savol va qisqa javoblar.",
    exercises: [
      { k: 'fill', q: 'make → ___', a: ['making'], why: "**-e** tushadi: **making**." },
      { k: 'fill', q: 'run → ___', a: ['running'], why: "qisqa unli + bitta undosh → **running**." },
      { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['She reading a book now.', 'She is reading a book now.', 'She reads a book now.', 'She are reading a book now.'], a: 1, why: "**is + reading**." },
      { k: 'fill', q: 'Look! The children ___ playing outside.', a: ['are'], why: "*the children* = they → **are**." },
      { k: 'order', uz: 'Men hozir uy vazifamni qilyapman.', words: ['I', 'am', 'doing', 'my', 'homework', 'now'], extra: ['do'], why: "**am + doing**." },
      { k: 'translate', uz: "U (ayol) hozir uxlamayapti.", a: ["She isn't sleeping now", "She's not sleeping now", 'She is not sleeping now', "She isn't sleeping", 'She is not sleeping', "She's not sleeping"], why: "Inkor: **isn't + sleeping**." },
      { k: 'fix', wrong: 'My brother is lieing on the sofa.', a: ['My brother is lying on the sofa.', "My brother's lying on the sofa."], hint: '-ie bilan tugaydigan fe\'l.', why: "**lie → lying**." },
      { k: 'fix', wrong: 'Do you working now?', a: ['Are you working now?', 'Are you working?'], hint: 'Savolni nima tuzadi?', why: "**Are you working?** — do kerak emas." },
      { k: 'order', uz: 'Ular hozir nima qilyapti?', words: ['What', 'are', 'they', 'doing', 'now'], extra: ['do', 'is'], why: "**What + are + they + doing?**" },
      { k: 'fill', q: 'Is she cooking lunch? — Yes, she ___.', a: ['is'], why: "Qisqa ijobiy javob: **Yes, she is.**" },
      { k: 'fill', q: 'Are they eating? — No, they ___.', a: ["aren't", 'are not', "'re not"], why: "**No, they aren't.**" },
      { k: 'translate', uz: 'Sen hozir kimga qo\'ng\'iroq qilyapsan?', a: ['Who are you calling now?', 'Who are you calling?', 'Who are you calling now', 'Who are you calling'], why: "**Who + are + you + calling?**" },
    ],
  },
  {
    id: 'u4-l12-d1',
    title: 'Unit 4 boss',
    titleUz: "4-bo'lim: yakuniy sinov",
    goal: "Wh-savollar, there is/are, joy predloglari, much/many, can, buyruq gaplar, have got va Present Continuous ni birga tekshirasiz.",
    exercises: [
      { k: 'choice', q: '___ do you live? — In Tashkent.', opts: ['Who', 'Where', 'When', 'Why'], a: 1, why: "Joy so'raladi → **Where**." },
      { k: 'fill', q: 'There ___ two chairs in the kitchen.', a: ['are'], why: "*two chairs* — ko'plik → **there are**." },
      { k: 'choice', q: 'The cat is ___ the table. (stol ostida)', opts: ['on', 'under', 'next to', 'between'], a: 1, why: "*ostida* = **under**." },
      { k: 'fill', q: 'How ___ sugar do you need?', a: ['much'], why: "*sugar* — sanalmaydi → **How much**." },
      { k: 'choice', q: 'How ___ eggs have we got?', opts: ['much', 'many', 'any', 'a'], a: 1, why: "*eggs* — sanaladi → **How many**." },
      { k: 'fix', wrong: 'He cans swim very well.', a: ['He can swim very well.'], hint: 'can ga -s qo\'shiladimi?', why: "**can** hamma shaxsda bir xil." },
      { k: 'choice', q: "Eshik oldida: \"Iltimos, o'tiring.\"", opts: ['Please sit down.', 'You sit down please.', 'Please you sit down.', 'Sitting down please.'], a: 0, why: "Buyruq gap: fe'lning asosiy shakli, ega yo'q." },
      { k: 'fill', q: 'My sister ___ got two children.', a: ['has'], why: "*my sister* = she → **has got**." },
      { k: 'order', uz: 'Xonangda kompyuter bormi?', words: ['Is', 'there', 'a', 'computer', 'in', 'your', 'room'], extra: ['Are'], why: "**Is there a … ?**" },
      { k: 'fix', wrong: 'In my room have a lamp.', a: ['There is a lamp in my room.', "There's a lamp in my room.", 'In my room there is a lamp.', "In my room there's a lamp."], hint: "\"…da … bor\" — inglizchada nima kerak?", why: "**There is** + narsa + joy." },
      { k: 'translate', uz: 'U hozir telefonda gaplashyapti.', a: ["He's talking on the phone now", 'He is talking on the phone now', "She's talking on the phone now", 'She is talking on the phone now', "He's talking on the phone", 'He is talking on the phone', "She's talking on the phone", 'She is talking on the phone'], why: "**is + talking**." },
      { k: 'translate', uz: 'Mening ikkita akam bor.', a: ["I've got two brothers", 'I have got two brothers', "I've got two older brothers", 'I have two brothers'], why: "**I've got** + ko'plik ot." },
    ],
  },
];
