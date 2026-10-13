import type { Lesson } from '../../../types';

// Real-life scene: a new classmate asks where you are from and what you do. Uses to be, a / an, countries, nationalities, jobs (lessons u2-l1 to u2-l8).
const lesson: Lesson = {
  id: 'u2-l15',
  title: 'Real life: where are you from?',
  titleUz: 'Real hayot: qayerdansiz? kasbingiz nima?',
  mini: true,
  kind: 'scene',
  goal: "Yangi sinfdosh bilan gaplashasiz: **qayerdansiz**, **kasbingiz**, **millatingiz** haqida aytasiz, qisqa javob berasiz (**Yes, I am.** / **No, I'm not.**) va unga qaytib savol berasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**I'm from Uzbekistan.** — **I** bilan har doim **am** (**I from…** demaymiz).",
    "Kasb oldidan **a / an**: **a student**, **an engineer** (unli tovush oldida **an**).",
    "Qisqa javob: **Yes, I am.** / **No, I'm not.** (**Yes, I'm** emas).",
    "Davlat va millat: **Uzbekistan** (davlat) — **Uzbek** (millat): **I'm Uzbek.**",
    "Qaytib so'rash: **And where are you from?**",
  ],
  homework: "O'zingiz haqingizda 4 ta gap ayting: **I'm from…**, **I'm a/an…**, **I'm …** (millat) va **Are you…?** deb do'stingizdan so'rang.",
  scene: {
    place: 'school',
    partner: { name: 'Kate', role: 'Yangi sinfdosh', voice: 'emma', emoji: '👩‍🦰' },
    intro: "Siz — **Ali**. Til maktabida birinchi dars oldidan yangi sinfdosh — **Kate** siz bilan gaplashmoqda. Ismingizni ayting, qayerdan ekanligingizni, kasbingizni va millatingizni ayting, uning o'ziga ham savol bering.",
    steps: [
      { k: 'say', en: "Hi! I'm Kate. What's your name?", uz: 'Salom! Men Keytman. Ismingiz nima?' },
      {
        k: 'pick', ask: "Kate bilan tanishing: ismingizni ayting (siz — **Ali**) va tanishganingizdan xursand ekanligingizni bildiring.",
        opts: [
          { en: "Hi, Kate! I'm Ali. Nice to meet you.", ok: true },
          { en: 'Hello, Kate! My name is Ali. Nice to meet you.', ok: true },
          { en: 'Hi, Kate! I Ali. Nice to meet you.', why: "`I Ali` — **am** tushib qolgan. To'g'risi: **I am Ali** yoki qisqasi **I'm Ali**." },
          { en: "Good night, Kate! I'm Ali.", why: "**Good night** — tunda, uxlashdan oldin. Uchrashganda **Hi** yoki **Hello** deymiz." },
          { en: 'Hi, Kate! My name are Ali.', why: "**name** bitta, shuning uchun **is**: **My name is Ali.** (**are** — you / we / they bilan)." },
        ],
        why: "**I'm Ali** yoki **My name is Ali**, keyin **Nice to meet you.**",
      },
      { k: 'say', en: 'Nice to meet you, Ali. Where are you from?', uz: 'Tanishganimdan xursandman, Ali. Qayerdansiz?' },
      {
        k: 'type', ask: "Qayerdan ekanligingizni ayting: «Men O'zbekistondanman.»",
        a: ["I'm from Uzbekistan.", 'I am from Uzbekistan.', "I'm from Uzbekistan", 'I am from Uzbekistan'],
        mistakes: [
          { a: ['I from Uzbekistan', 'I from Uzbekistan.'], why: "`I from Uzbekistan` — **am** tushib qolgan. **I** bilan har doim **am** keladi: **I am from Uzbekistan**, qisqasi **I'm from Uzbekistan**." },
          { a: ["I'm Uzbekistan", 'I am Uzbekistan', "I'm Uzbekistan.", 'I am Uzbekistan.'], why: "**Uzbekistan** — davlat. «Qayerdansiz?» ga **from** bilan javob beramiz: **I'm from Uzbekistan.** («Men o'zbekman» deymiz: **I'm Uzbek**.)" },
          { a: ['I are from Uzbekistan', 'I is from Uzbekistan'], why: "**I** bilan faqat **am**: **I am from Uzbekistan**. (**are** — you / we / they, **is** — he / she / it bilan)." },
        ],
        why: "Qolip: **I'm from** + davlat.", hint: "I'm ... Uzbekistan.",
        drill: { k: 'fix', wrong: 'I from Uzbekistan.', a: ["I'm from Uzbekistan.", 'I am from Uzbekistan.'], why: "**I** bilan har doim **am**: **I'm from Uzbekistan.**" },
      },
      { k: 'say', en: 'Oh, nice! Are you a teacher?', uz: "Voy, yaxshi! Siz o'qituvchimisiz?" },
      {
        k: 'type', ask: "Yo'q deb javob bering va kasbingizni ayting: «Yo'q. Men muhandisman.»",
        a: ["No, I'm not. I'm an engineer.", "No, I am not. I am an engineer.", "No, I'm not. I am an engineer.", "No, I am not. I'm an engineer."],
        mistakes: [
          { a: ["No, I'm not. I'm engineer.", "No, I'm not. I am engineer.", "No, I am not. I am engineer."], why: "Kasb oldidan **a / an** kerak: **an engineer**. **engineer** unli tovush (e) bilan boshlanadi, shuning uchun **an**." },
          { a: ["No, I'm not. I'm a engineer.", "No, I am not. I am a engineer."], why: "**engineer** unli tovush bilan boshlanadi, shuning uchun **a** emas, **an**: **an engineer**." },
          { a: ["No, I not. I'm an engineer.", 'No, I not. I am an engineer.'], why: "`I not` — **am** tushib qolgan. Inkor: **I'm not** (= I am not)." },
        ],
        why: "Qolip: **No, I'm not.** + **I'm an engineer.** (unli oldida **an**).", hint: "No, I'm not. I'm ... engineer.",
        drill: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I'm engineer.", "I'm a engineer.", "I'm an engineer."], a: 2, why: "**engineer** unli bilan boshlanadi → **an engineer**." },
      },
      { k: 'say', en: 'An engineer! Great. I am a student here. Are you a student too?', uz: "Muhandis! Zo'r. Men bu yerda talabaman. Siz ham talabamisiz?" },
      { k: 'note', title: 'Qisqa javob', md: "«**Are you…?**» savoliga qisqa javob: **Yes, I am.** yoki **No, I'm not.**\n\nOxirida **am** ni tushirmang: **Yes, I'm** demaymiz." },
      {
        k: 'fill', ask: "Qisqa javob bering: «Ha, talabaman.»", q: 'Yes, I ___.', a: ['am'],
        mistakes: [
          { a: ["I'm", 'do', 'are', 'is'], why: "**Are you…?** savoliga **Yes, I am.** deb javob beramiz. Oxirida qisqartma bo'lmaydi (**Yes, I'm** emas), **do** esa bu yerda ishlatilmaydi." },
        ],
        why: "**Are you a student?** → **Yes, I am.**", hint: 'Yes, I ...',
      },
      { k: 'say', en: 'Good! Are you Kazakh?', uz: 'Yaxshi! Siz qozoqmisiz?' },
      {
        k: 'pick', ask: "Yo'q deb ayting va millatingizni (o'zbek) ayting.",
        opts: [
          { en: "No, I'm not. I'm Uzbek.", ok: true },
          { en: 'No, I am not. I am Uzbek.', ok: true },
          { en: "No, I'm not. I'm Uzbekistan.", why: "**Uzbekistan** — davlat. Millatni **Uzbek** deymiz: **I'm Uzbek.** (davlat: **I'm from Uzbekistan**)." },
          { en: "Yes, I'm Uzbek.", why: "Savol «qozoqmisiz?» edi, siz esa qozoq emassiz. Shuning uchun **No, I'm not.** (**Yes, I'm** deb ham aytilmaydi)." },
          { en: "No, I'm not. I Uzbek.", why: "`I Uzbek` — **am** tushib qolgan: **I'm Uzbek.**" },
        ],
        why: "**No, I'm not. I'm Uzbek.** — millat: **Uzbek**.",
        drill: { k: 'choice', q: "«Men o'zbekman» — qaysi gap to'g'ri?", opts: ["I'm Uzbek.", "I'm Uzbekistan.", 'I Uzbek.'], a: 0, why: "Millat: **Uzbek**. Davlat: **Uzbekistan**. **I** bilan **am** kerak." },
      },
      { k: 'say', en: 'Oh, Uzbek! Nice.', uz: "Voy, o'zbek ekansiz! Yaxshi." },
      {
        k: 'build', ask: "Kate'dan qaytib so'rang: «Siz-chi? Qayerdansiz?»",
        words: ['And', 'where', 'are', 'you', 'from'], extra: ['is', 'am'],
        alt: [['Where', 'are', 'you', 'from']],
        mistakes: [
          { a: ['And where you from', 'Where you from'], why: "Savolda **are** tushib qolgan. To'g'risi: **Where are you from?**" },
          { a: ['And where is you from', 'Where is you from'], why: "**you** bilan **is** emas, **are**: **Where are you from?**" },
        ],
        why: "Qaytib so'rash: **And where are you from?** (**are** — you bilan).",
        drill: { k: 'order', uz: 'Qayerdansiz?', words: ['Where', 'are', 'you', 'from'], extra: ['is'], why: "Savolda **are** **you** dan oldin keladi." },
      },
      { k: 'say', en: "I'm from England. I'm English. Nice to meet you, Ali!", uz: "Men Angliyadanman. Men inglizman. Tanishganimdan xursandman, Ali!" },
      {
        k: 'type', ask: "Xayrlashing: «Men ham tanishganimdan xursandman, Kate. Xayr!»",
        a: ['Nice to meet you, too, Kate. Goodbye!', 'Nice to meet you, too, Kate. Bye!', 'Nice to meet you too, Kate. Goodbye!', 'Nice to meet you too, Kate. Bye!', 'Goodbye, Kate! Nice to meet you, too.', 'Bye, Kate! Nice to meet you, too.'],
        mistakes: [{ a: ['Nice to meet you, to, Kate. Goodbye!', 'Nice to meet you, two, Kate. Goodbye!'], why: "«Ham» — **too**: **Nice to meet you, too.**" }],
        why: "**Nice to meet you, too.** + **Goodbye!** (yoki **Bye!**)", hint: 'Nice to meet you, ..., Kate. Goodbye!',
      },
    ],
    outro: "Zo'r! Siz sinfdosh bilan inglizcha tanishdingiz: qayerdansiz, kasbingiz, millatingiz va unga qaytib savol berdingiz. **I'm** dagi **am** ni tushirmaslikni unutmang.",
  },
};

export default lesson;
