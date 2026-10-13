import type { Lesson } from '../../../types';

// Real-life scene: talking about the weekend with a friend. Uses was/were, Past Simple regular and irregular, didn't, Did...?
const lesson: Lesson = {
  id: 'u5-l18',
  title: 'Real life: how was your weekend?',
  titleUz: "Real hayot: dam olish kuni qanday o'tdi?",
  mini: true,
  kind: 'scene',
  goal: "Do'stingizga **dam olish kuningiz** haqida gapirib berasiz: nima qildingiz, nima qilmadingiz, va o'zingiz ham savol berasiz. **Past Simple** ni jonli suhbatda ishlatasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**How was your weekend?** → **It was great.** (**it** bilan **was**, **were** emas).",
    "Tartibsiz fe'llar: **go → went**, **see → saw**, **eat → ate** (`goed` emas).",
    "**Did you play football?** — **Did** dan keyin fe'lning oddiy shakli: `Did you went` emas.",
    "**No, I didn't. I watched a film.** — **didn't** + oddiy shakl.",
    "**What did you do on Sunday?** — o'tgan zamondagi savol.",
  ],
  homework: "Kecha yoki o'tgan dam olish kuningiz haqida 4 ta gap yozing: ikkitasi **went / saw / ate** bilan, bittasi **didn't** bilan.",
  scene: {
    place: 'weekend',
    partner: { name: 'Jack', role: "Do'st", voice: 'george', emoji: '🧑' },
    intro: "Siz — **Ali**. Dushanba kuni do'stingiz **Jack** bilan uchrashdingiz. U sizning dam olish kuningiz qanday o'tganini so'rayapti. Javob bering va o'zingiz ham so'rang.",
    steps: [
      { k: 'say', en: 'Hi, Ali! How was your weekend?', uz: "Salom, Ali! Dam olish kuning qanday o'tdi?" },
      {
        k: 'pick', ask: "Dam olish kuni yaxshi o'tdi. Jackga javob bering.",
        opts: [
          { en: 'It was great, thanks.', ok: true },
          { en: 'It was very good, thank you.', ok: true },
          { en: 'It were great, thanks.', why: "**It** bilan **was** ishlatiladi. **were** — you / we / they bilan: **It was great.**" },
          { en: "It's great, thanks.", why: "Savol o'tgan zamonda (**was**), javob ham o'tgan zamonda bo'ladi: **It was great.**" },
          { en: 'I am great yesterday.', why: "O'tgan vaqt haqida **was** kerak: **It was great.** (**am** hozirgi zamon)." },
        ],
        why: "O'tgan dam olish kuni haqida: **It was great.** (**it** bilan **was**).",
        drill: { k: 'choice', q: "To'g'ri gapni tanlang.", opts: ['It were great.', 'It was great.', 'It are great.'], a: 1, why: "**it / he / she** bilan **was**." },
      },
      { k: 'say', en: 'Good! What did you do?', uz: 'Yaxshi! Nima qilding?' },
      {
        k: 'type', ask: "Parkka borganingizni ayting: «Men parkka bordim.»",
        a: ['I went to the park.', 'We went to the park.', 'I went to the park on Saturday.'],
        mistakes: [
          { a: ['I goed to the park', 'I goed to park'], why: "**go** tartibsiz fe'l: o'tgan zamoni **went**. `goed` bo'lmaydi: **I went to the park.**" },
          { a: ['I did went to the park', 'I did go to the park'], why: "Darak gapda **did** kerak emas. Faqat o'tgan shakl: **I went to the park.**" },
          { a: ['I go to the park', 'I am go to the park'], why: "Bu o'tgan voqea, shuning uchun **go** emas, **went**: **I went to the park.**" },
        ],
        why: "**go → went**: **I went to the park.**", hint: 'I w... to the park.',
        drill: { k: 'fix', wrong: 'I goed to the park.', a: ['I went to the park.', 'I went to the park'], hint: 'go ning o\'tgan shakli', why: "**go → went** (tartibsiz fe'l)." },
      },
      { k: 'say', en: 'Nice! Who did you see there?', uz: "Yaxshi! U yerda kimni ko'rding?" },
      {
        k: 'fill', ask: "Do'stlaringizni ko'rganingizni ayting: «Men do'stlarimni ko'rdim.»", q: 'I ___ my friends.', a: ['saw'],
        mistakes: [{ a: ['seed', 'sawed', 'see', 'seen'], why: "**see** tartibsiz fe'l: o'tgan zamoni **saw**. `seed` bo'lmaydi: **I saw my friends.**" }],
        why: "**see → saw**: **I saw my friends.**", hint: 'see ning o\'tgan shakli',
      },
      { k: 'say', en: 'Did you play football?', uz: "Futbol o'ynadingmi?" },
      {
        k: 'build', ask: "«Yo'q, o'ynamadim. Men film ko'rdim.» deb javob bering.", words: ['No', 'I', "didn't", 'I', 'watched', 'a', 'film'], extra: ['did', 'watch'],
        alt: [['No', 'I', 'did', 'not', 'I', 'watched', 'a', 'film']],
        mistakes: [
          { a: ["No I didn't I watch a film"], why: "Bu o'tgan zamon, shuning uchun **watched**: **I watched a film.**" },
          { a: ['No I did not I watch a film'], why: "Ikkinchi gap darak: **I watched a film** (**-ed**), **watch** emas." },
        ],
        why: "Qisqa javob: **No, I didn't.** Keyin nima qilganingiz: **I watched a film.**",
      },
      { k: 'say', en: 'Was it a good film?', uz: 'Yaxshi film edimi?' },
      {
        k: 'pick', ask: "Film yoqmadi, zerikarli edi. Jackga ayting.",
        opts: [
          { en: 'No, it was boring.', ok: true },
          { en: 'No, it was not very good.', ok: true },
          { en: 'No, it did not.', why: "Savol **Was it...?** — **was** bilan javob beramiz: **No, it wasn't.** (**did** emas)." },
          { en: 'No, I was boring.', why: "**I was boring** — «men zerikarliman» degani! Filmni **it** deymiz: **it was boring**." },
        ],
        why: "**Was it...?** ga: **No, it was boring.** yoki **No, it wasn't.**",
      },
      { k: 'say', en: 'Oh no! I played football on Saturday.', uz: "Voy, afsus! Men shanba kuni futbol o'ynadim." },
      {
        k: 'build', ask: "Jackdan so'rang: «Yakshanba kuni nima qilding?»", words: ['What', 'did', 'you', 'do', 'on', 'Sunday'], extra: ['does', 'went'],
        mistakes: [
          { a: ['What you did on Sunday'], why: "Savolda tartib: **What did you do...?** Yordamchi **did** oldinga chiqadi." },
          { a: ['What did you did on Sunday'], why: "**did** dan keyin oddiy shakl: **What did you do on Sunday?** (`did` ikki marta kerak emas)." },
        ],
        why: "O'tgan zamon savoli: **What did you do on Sunday?**",
        drill: { k: 'choice', q: "Qaysi savol to'g'ri?", opts: ['What did you did?', 'What you did?', 'What did you do?'], a: 2, why: "**Did + you + oddiy shakl**: **What did you do?**" },
      },
      { k: 'say', en: 'I visited my uncle. We ate plov!', uz: "Men tog'amnikiga bordim. Biz osh yedik!" },
      {
        k: 'type', ask: "Qiziqing: «Sizga yoqdimi?» (osh haqida, o'tgan zamonda).",
        a: ['Did you like it?', 'Did you like it', 'Did you like the plov?', 'Did you like plov?'],
        mistakes: [
          { a: ['Did you liked it', 'Did you liked the plov'], why: "**Did** dan keyin fe'lning oddiy shakli keladi: **Did you like it?** (`liked` emas, chunki **did** o'tgan zamonni allaqachon ko'rsatadi)." },
          { a: ['You liked it', 'Do you like it'], why: "O'tgan zamon savoli **Did** bilan boshlanadi: **Did you like it?**" },
        ],
        why: "**Did + you + oddiy shakl?** — **Did you like it?**", hint: 'Did you ... it?',
        drill: { k: 'fix', wrong: 'Did you liked it?', a: ['Did you like it?', 'Did you like it'], hint: 'Did dan keyin oddiy shakl', why: "**Did you like...?** — **did** dan keyin **like**, `liked` emas." },
      },
      { k: 'say', en: 'Yes, I did! Bye, Ali!', uz: "Ha, yoqdi! Xayr, Ali!" },
    ],
    outro: "Juda yaxshi! Siz o'tgan dam olish kuni haqida **gaplashdingiz**: **was**, tartibsiz fe'llar, **didn't** va **Did...?** savollari. Shu zamon har kungi suhbatning yarmi.",
  },
};

export default lesson;
