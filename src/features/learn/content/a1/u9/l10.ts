import type { Lesson } from '../../../types';

// Mini lesson (situation): a trip last summer. Transport, holidays, there was/were, could, linking words.
const lesson: Lesson = {
  id: 'u9-l10',
  title: 'A trip last summer',
  titleUz: "O'tgan yozgi sayohat",
  mini: true,
  goal: "O'tgan yozgi sayohatingiz haqida gapirib berasiz: *We went to Samarkand by train. There was a beautiful square, but it was crowded, so we couldn't take many photos.* Transport, **there was / were**, **could / couldn't** va **and, but, so, because** ni real suhbatda ishlatasiz.",
  slides: [
    {
      title: 'Vaziyat: sayohat haqida suhbat',
      blocks: [
        { t: 'p', md: "Do'stingiz sayohatingiz haqida so'raydi: **Where did you go? How did you get there? What was it like?** Javobda transport, joy va sabab-natijani aytasiz." },
        { t: 'dialog', lines: [
          { who: 'Madina', en: 'Where did you go last summer?', uz: "O'tgan yozda qayerga bording?" },
          { who: 'Sardor', en: 'We went to Samarkand by train. It was a wonderful trip!', uz: "Samarqandga poyezdda bordik. Ajoyib sayohat bo'ldi!" },
          { who: 'Madina', en: 'What was the hotel like?', uz: 'Mehmonxona qanday edi?' },
          { who: 'Sardor', en: 'It was nice, and there was a big garden and a pool.', uz: "Yaxshi edi, katta bog' va hovuz bor edi." },
          { who: 'Madina', en: 'Did you see the Registan?', uz: "Registonni ko'rdingizmi?" },
          { who: 'Sardor', en: "Yes, but it was crowded, so we couldn't take many photos. We could see the beautiful view from the top, though.", uz: "Ha, lekin odam ko'p edi, shuning uchun ko'p rasm ola olmadik. Lekin tepadan chiroyli manzarani ko'ra oldik." },
          { who: 'Madina', en: 'I want to go too! How did you come back?', uz: "Men ham bormoqchiman! Qanday qaytdingiz?" },
          { who: 'Sardor', en: 'By bus, because the train tickets were expensive.', uz: "Avtobusda, chunki poyezd chiptalari qimmat edi." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Sardor: "It was crowded, ___ we couldn\'t take many photos."', opts: ['because', 'but', 'so', 'and'], a: 2, why: "Natija (shuning uchun) → **so**." } },
      ],
    },
    {
      title: 'Foydali iboralar',
      blocks: [
        { t: 'table', head: ['Inglizcha', "Qachon aytiladi"], speak: [0, 1, 2], rows: [
          ['We went there by train.', 'Transportni aytasiz'],
          ['There was a lovely view.', "Joyda nima bo'lganini tasvirlaysiz (birlik)"],
          ['There were a lot of tourists.', "Joyda nima bo'lganini tasvirlaysiz (ko'plik)"],
          ["We couldn't find a taxi.", "Qila olmaganingizni aytasiz"],
          ['I liked it because the food was great.', 'Sababini aytasiz'],
          ['How did you get there?', 'Qanday borganini so\'raysiz'],
        ] },
        { t: 'tip', tone: 'good', md: "**and** — qo'shish, **but** — qarama-qarshilik, **so** — natija, **because** — sabab. *The beach was beautiful, but it was hot.* *It was hot, so we swam.*" },
        { t: 'check', ex: { k: 'fill', q: 'There ___ a lot of people at the beach.', a: ['were'], uz: 'Plyajda juda ko\'p odam bor edi.', why: "*a lot of people* — ko'plik → **were**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tez-tez uchraydigan xatolar",
      blocks: [
        { t: 'compare', good: { title: "To'g'ri", items: ['We went by train.', "I couldn't swim there.", 'There were two beds.', 'I stayed because it was cheap.'] }, bad: { title: "Noto'g'ri", items: ['We went with train.', "I couldn't to swim there.", 'There was two beds.', 'I stayed because so it was cheap.'] } },
        { t: 'p', md: "Eslatma: transport oldida **by** (by train, by bus), lekin **on foot**. **could / couldn't** dan keyin fe'l oddiy shaklda, **to** kerak emas. **because** va **so** bir gapda birga kelmaydi." },
        { t: 'check', ex: { k: 'choice', q: "\"Biz yarim soat piyoda yurdik.\"", opts: ['We went by foot for half an hour.', 'We walked on foot half an hour.', 'We went on foot for half an hour.', 'We went with foot.'], a: 2, why: "Piyoda = **on foot**, transport emas." } },
      ],
    },
  ],
  words: [
    { en: 'beach', uz: 'plyaj, sohil', ipa: 'biːtʃ', pos: 'noun', ex: 'We played football on the beach.', exUz: 'Plyajda futbol o\'ynadik.' },
    { en: 'luggage', uz: 'yuk, sumkalar', ipa: 'ˈlʌɡ.ɪdʒ', pos: 'noun', ex: 'Our luggage was very heavy.', exUz: "Yuklarimiz juda og'ir edi." },
    { en: 'view', uz: 'manzara', ipa: 'vjuː', pos: 'noun', ex: 'The view from the hotel was amazing.', exUz: "Mehmonxonadan manzara ajoyib edi." },
  ],
  practice: [
    { k: 'choice', q: 'We went to Bukhara ___ bus.', opts: ['with', 'by', 'in', 'on'], a: 1, why: "Transport: **by bus**." },
    { k: 'fill', q: 'There ___ a nice view from our room.', a: ['was'], uz: 'Xonamizdan chiroyli manzara bor edi.', why: "*a view* — birlik → **was**." },
    { k: 'order', uz: "Chipta qimmat edi, shuning uchun poyezdga chiqmadik.", words: ['The', 'ticket', 'was', 'expensive,', 'so', 'we', 'went', 'by', 'bus'], extra: ['because', 'with'] },
    { k: 'translate', uz: "Biz ko'p rasm ola olmadik.", a: ["We couldn't take many photos.", 'We could not take many photos.', "We couldn't take a lot of photos.", 'We could not take a lot of photos.'], why: "**couldn't + V1**." },
    { k: 'match', pairs: [['beach', 'plyaj'], ['luggage', 'yuk'], ['view', 'manzara'], ['by train', 'poyezdda'], ['on foot', 'piyoda']] },
    { k: 'tf', q: "*There was two big beds in the room.* — gap to'g'ri.", a: false, why: "*two beds* — ko'plik: **There were**." },
    { k: 'listen', say: 'We went there by train.', opts: ['We went there by train.', 'We go there by train.', 'We went there by bus.', 'We were there by train.'], a: 0 },
    { k: 'dictation', say: 'It was crowded, so we left.', a: ['It was crowded, so we left.'] },
    { k: 'fix', wrong: "I couldn't to find a taxi.", a: ["I couldn't find a taxi.", 'I could not find a taxi.'], why: "**couldn't** dan keyin **to** yo'q." },
    { k: 'fill', q: 'I liked the trip ___ the people were friendly.', a: ['because'], uz: "Sayohat menga yoqdi, chunki odamlar mehribon edi.", why: "Sabab → **because**." },
    { k: 'speak', say: 'We went to Samarkand by train last summer.', uz: "O'tgan yozda Samarqandga poyezdda bordik." },
  ],
  quiz: [
    { k: 'choice', q: 'The beach was beautiful, ___ it was very hot.', opts: ['so', 'because', 'but', 'then'], a: 2, why: "Qarama-qarshilik → **but**." },
    { k: 'fill', q: 'There ___ a lot of tourists in the square.', a: ['were'] },
    { k: 'order', uz: "Qanday yetib bordingiz?", words: ['How', 'did', 'you', 'get', 'there'], extra: ['do', 'got'] },
    { k: 'translate', uz: "Biz mehmonxonadan chiroyli manzarani ko'ra oldik.", a: ['We could see a beautiful view from the hotel.', 'We could see the beautiful view from the hotel.', 'We could see a nice view from the hotel.'] },
    { k: 'tf', q: "*I stayed home because it was raining.* — sabab bildiradi.", a: true },
    { k: 'fix', wrong: 'We went with bus to the lake.', a: ['We went by bus to the lake.'], why: "Transport: **by bus**." },
    { k: 'match', pairs: [['beach', 'plyaj'], ['luggage', 'yuk'], ['view', 'manzara'], ['but', 'lekin']] },
    { k: 'choice', q: "Where did you go last summer? — ...", opts: ['We went to the sea by plane.', 'We go to the sea by plane.', 'We goed to the sea.', 'We are at the sea.'], a: 0 },
  ],
  summary: [
    "Sayohat haqida: **Where did you go? How did you get there?** — *We went by train / on foot.*",
    "Tasvir: **There was** + birlik, **There were** + ko'plik; **could / couldn't + V1**.",
    "Bog'lovchilar: **and** (qo'shish), **but** (lekin), **so** (natija), **because** (sabab).",
    "Yangi so'zlar: **beach, luggage, view**.",
  ],
  homework: "O'tgan sayohatingiz haqida 5 ta gap yozing: transport, joy (**there was / were**), bitta **couldn't** va bitta **because** bilan.",
};

export default lesson;
