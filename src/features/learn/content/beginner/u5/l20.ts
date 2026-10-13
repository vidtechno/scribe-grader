import type { Lesson } from '../../../types';

// Final mission: a day in a new city. Revises the whole Beginner course (to be, ways, ordering, Past Simple, going to).
const lesson: Lesson = {
  id: 'u5-l20',
  title: 'Real life: a day in a new city',
  titleUz: "Real hayot: yakuniy missiya — yangi shaharda bir kun",
  mini: true,
  kind: 'scene',
  goal: "Yangi shaharda **bir kun** o'tkazasiz: do'st bilan tanishasiz, yo'l so'raysiz, kafeda buyurtma berasiz, kecha nima qilganingizni va ertangi rejangizni aytasiz. Butun Beginner kursi bitta missiyada.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "Tanishuv: **Nice to meet you.** **I'm from Uzbekistan.** **I'm a student.** (**to be**).",
    "Yo'l so'rash: **Excuse me, where is the museum?**",
    "Kafeda: **I'd like a tea, please.** **How much is it?**",
    "Kecha: **I went / I met / I visited...**; savol: **Did you...?**",
    "Reja: **I'm going to visit the museum tomorrow.**",
  ],
  homework: "Ingliz tilida 5 gapdan iborat kichik hikoya yozing: o'zingiz, bugun, kecha va ertangi rejangiz haqida.",
  scene: {
    place: 'mission',
    partner: { name: 'Emily', role: "Do'st va yo'lboshchi", voice: 'emma', emoji: '👩‍🦰' },
    intro: "Siz — **Ali**. Yangi shaharga keldingiz. Stansiyada do'stingiz **Emily** sizni kutib oldi. U sizga shaharni ko'rsatadi. Bugun kursdagi hamma narsadan foydalanasiz: tanishuv, yo'l, kafe, kecha va ertangi reja.",
    steps: [
      { k: 'say', en: 'Hello! Are you Ali? I am Emily. Welcome!', uz: "Salom! Siz Alimisiz? Men Emilyman. Xush kelibsiz!" },
      { k: 'say', en: "First, let's say hello.", uz: "Avval salomlashaylik." },
      {
        k: 'pick', ask: "Emily sizni kutib oldi. Salomlashing va ismingizni ayting.",
        opts: [
          { en: "Hello, Emily! I'm Ali. Nice to meet you.", ok: true },
          { en: 'Hello, Emily! My name is Ali. Nice to meet you.', ok: true },
          { en: 'Good night, Emily! I am Ali.', why: "**Good night** — uxlashdan oldin aytiladi. Uchrashganda **Hello** deymiz." },
          { en: 'Hello, Emily! I Ali.', why: "**am** tushib qolgan: **I am Ali** yoki **I'm Ali.**" },
          { en: 'Goodbye, Emily! Nice to meet you.', why: "**Goodbye** — xayrlashish. Uchrashganda **Hello** deymiz." },
        ],
        why: "**Hello** + **I'm Ali** + **Nice to meet you.**",
        drill: { k: 'fix', wrong: 'I Ali.', a: ["I'm Ali.", 'I am Ali.', "I'm Ali", 'I am Ali'], hint: 'I ... Ali', why: "**I am** (**I'm**) — **am** tushib qolmasin." },
      },
      { k: 'say', en: 'How are you today?', uz: 'Bugun qalaysiz?' },
      {
        k: 'build', ask: "«Yaxshiman, rahmat. Siz-chi?» deb javob bering.", words: ["I'm", 'fine', 'thank', 'you', 'And', 'you'], extra: ['am', 'are'],
        alt: [['I', 'am', 'fine', 'thank', 'you', 'And', 'you']],
        mistakes: [{ a: ['I fine thank you And you'], why: "`I fine` — **am** tushib qolgan: **I'm fine.**" }],
        why: "**I'm fine, thank you. And you?**",
      },
      { k: 'say', en: "I'm very well, thanks. Where are you from, Ali?", uz: "Men juda yaxshiman, rahmat. Qayerdansiz, Ali?" },
      {
        k: 'type', ask: "Uzbekistondan ekanligingizni va talaba ekanligingizni ayting: «Men O'zbekistondanman. Men talabaman.»",
        a: ["I'm from Uzbekistan. I'm a student.", 'I am from Uzbekistan. I am a student.', "I'm from Uzbekistan. I am a student.", "I am from Uzbekistan. I'm a student."],
        mistakes: [
          { a: ["I'm from Uzbekistan. I'm student.", 'I am from Uzbekistan. I am student.'], why: "Kasb oldidan **a** kerak: **I'm a student.**" },
          { a: ['I from Uzbekistan. I a student.', 'I from Uzbekistan'], why: "**am** tushib qolgan: **I'm from Uzbekistan.**" },
        ],
        why: "**I'm from Uzbekistan. I'm a student.** — **to be** (**I am**).", hint: "I'm from ... I'm a ...",
        drill: { k: 'choice', q: "To'g'ri gapni tanlang.", opts: ["I'm student.", "I'm a student.", 'I a student.'], a: 1, why: "**I'm a student.** — **am** va **a** kerak." },
      },
      { k: 'say', en: "Great! Now, the museum. Let's go there.", uz: "Zo'r! Endi muzey. Keling, u yerga boraylik." },
      { k: 'say', en: 'Look, there is a man. Ask the way, please!', uz: "Qarang, anavi odam bor. Yo'lni so'rang, iltimos!" },
      { k: 'note', title: "Takror: yo'l so'rash", md: "**Excuse me, where is the museum?** — «Kechirasiz, muzey qayerda?»\n\nSavolda **is** oldinga chiqadi: **where is...?**" },
      {
        k: 'build', ask: "O'tib ketayotgan odamdan so'rang: «Kechirasiz, muzey qayerda?»", words: ['Excuse', 'me', 'where', 'is', 'the', 'museum'], extra: ['are', 'what'],
        mistakes: [
          { a: ['Excuse me where the museum is'], why: "Savolda **is** oldinga chiqadi: **where is the museum?**" },
          { a: ['Excuse me where are the museum'], why: "**museum** — birlik, shuning uchun **is**: **where is the museum?**" },
        ],
        why: "Yo'l so'rash: **Excuse me, where is the museum?**",
      },
      { k: 'say', en: 'Go straight. Turn left at the bank. It is next to the park.', uz: "To'g'riga boring. Bankda chapga buring. U parkning yonida." },
      {
        k: 'pick', ask: "Yo'lni tushundingiz. Minnatdorchilik bildiring.",
        opts: [
          { en: 'Thank you very much!', ok: true },
          { en: 'Thanks a lot!', ok: true },
          { en: 'Goodbye!', why: "Hali xayrlashmaymiz. Yo'l ko'rsatganga **Thank you** deymiz." },
          { en: 'I am sorry.', why: "Kechirim so'ramaymiz. Yordam uchun minnatdorchilik: **Thank you very much!**" },
        ],
        why: "Yordam uchun: **Thank you very much!**",
      },
      { k: 'say', en: "Good! The museum is closed now. Let's have a tea.", uz: "Yaxshi! Muzey hozir yopiq. Keling, choy ichamiz." },
      { k: 'say', en: 'Now we are here. What would you like?', uz: "Endi shu yerdamiz. Nima xohlaysiz?" },
      { k: 'note', title: 'Takror: buyurtma', md: "**I'd like a tea, please.** — «Menga bir choy bering.» (**I'd like** = I would like).\n\nNarx: **How much is it?**" },
      {
        k: 'type', ask: "Choy buyurtma bering: «Menga bir choy bering, iltimos.»",
        a: ["I'd like a tea, please.", 'I would like a tea, please.', 'A tea, please.', "I'd like a tea.", 'Can I have a tea, please?'],
        mistakes: [
          { a: ['I like a tea please', 'I like a tea'], why: "**I like** — «yoqadi». Buyurtmada **I'd like** (= I would like): **I'd like a tea, please.**" },
          { a: ["I'd like tea please a", 'I want a tea'], why: "Xushmuomala buyurtma: **I'd like a tea, please.**" },
        ],
        why: "Buyurtma: **I'd like a tea, please.**", hint: "I'd ... a tea, please.",
        drill: { k: 'choice', q: "Kafeda nima xushmuomalaroq?", opts: ['I want a tea.', "I'd like a tea, please.", 'Give me tea.'], a: 1, why: "**I'd like ..., please.** — buyurtma uchun odatiy xushmuomala shakl." },
      },
      { k: 'say', en: 'Of course. Here is your tea.', uz: 'Albatta. Mana choyingiz.' },
      {
        k: 'build', ask: "Narxini so'rang: «Bu necha pul?»", words: ['How', 'much', 'is', 'it'], extra: ['many', 'are'],
        mistakes: [{ a: ['How many is it', 'How many are it'], why: "Narx uchun **How much** (**many** sanaladigan narsalar soni uchun): **How much is it?**" }],
        why: "Narx: **How much is it?**",
      },
      { k: 'say', en: 'It is three dollars. Now, tell me about yesterday. What did you do?', uz: "Uch dollar. Endi kecha haqida ayting. Nima qildingiz?" },
      {
        k: 'type', ask: "Kecha do'stlaringiz bilan uchrashganingizni ayting: «Kecha men do'stlarim bilan uchrashdim.» (meet — uchrashmoq)",
        a: ['I met my friends yesterday.', 'Yesterday I met my friends.', 'I met my friends.', 'Yesterday, I met my friends.'],
        mistakes: [
          { a: ['I meeted my friends yesterday', 'Yesterday I meeted my friends'], why: "**meet** tartibsiz fe'l: o'tgan zamoni **met**. `meeted` bo'lmaydi: **I met my friends yesterday.**" },
          { a: ['I meet my friends yesterday', 'Yesterday I meet my friends'], why: "**yesterday** — o'tgan zamon, shuning uchun **met**: **I met my friends yesterday.**" },
        ],
        why: "**meet → met**: **I met my friends yesterday.**", hint: 'I m... my friends yesterday.',
        drill: { k: 'fix', wrong: 'I meeted my friends yesterday.', a: ['I met my friends yesterday.', 'I met my friends yesterday'], hint: 'meet ning o\'tgan shakli', why: "**meet → met** (tartibsiz fe'l)." },
      },
      { k: 'say', en: 'Nice! Did you go to the cinema?', uz: "Zo'r! Kinoga bordingizmi?" },
      {
        k: 'fill', ask: "Yo'q, bormadingiz. Qisqa javob bering: «Yo'q, bormadim.»", q: "No, I ___.", a: ["didn't", 'did not'],
        mistakes: [{ a: ["don't", 'do not', "wasn't", "haven't"], why: "O'tgan zamon savoli **Did** bilan, javob ham **didn't**: **No, I didn't.**" }],
        why: "**Did you...?** → **No, I didn't.**", hint: 'did + n\'t',
      },
      { k: 'say', en: 'OK. Last question. What are you going to do tomorrow?', uz: "Mayli. Oxirgi savol. Ertaga nima qilmoqchisiz?" },
      {
        k: 'build', ask: "Rejangizni ayting: «Men ertaga muzeyga bormoqchiman.»", words: ["I'm", 'going', 'to', 'visit', 'the', 'museum', 'tomorrow'], extra: ['will', 'visiting'],
        alt: [['I', 'am', 'going', 'to', 'visit', 'the', 'museum', 'tomorrow'], ['Tomorrow', "I'm", 'going', 'to', 'visit', 'the', 'museum'], ['Tomorrow', 'I', 'am', 'going', 'to', 'visit', 'the', 'museum']],
        mistakes: [
          { a: ["I'm going visit the museum tomorrow"], why: "**going** dan keyin **to** kerak: **I'm going to visit...**" },
          { a: ["I'm going to visiting the museum tomorrow"], why: "**going to** dan keyin oddiy shakl: **visit**." },
        ],
        why: "Reja: **I'm going to visit the museum tomorrow.**",
        drill: { k: 'fix', wrong: 'I going to visit the museum.', a: ["I'm going to visit the museum.", 'I am going to visit the museum.', "I'm going to visit the museum", 'I am going to visit the museum'], hint: 'am tushib qolgan', why: "**I am going to** — **am** qo'ying." },
      },
      { k: 'say', en: 'That is a good plan! It was a great day, Ali.', uz: "Zo'r reja! Ajoyib kun bo'ldi, Ali." },
      {
        k: 'pick', ask: "Kun tugadi. Emily'ga minnatdorchilik bildirib, xayrlashing.",
        opts: [
          { en: 'Thank you, Emily. Goodbye!', ok: true },
          { en: 'Thanks, Emily. Goodbye!', ok: true },
          { en: 'Good morning, Emily!', why: "Kun tugadi, **Good morning** esa ertalabki salom. Xayrlashganda **Goodbye** deymiz." },
          { en: 'Hello, Emily!', why: "**Hello** — uchrashganda. Xayrlashganda **Goodbye**." },
        ],
        why: "**Thank you** + **Goodbye** — xayrlashishning iliq shakli.",
      },
    ],
    outro: "Tabriklaymiz, **missiya bajarildi**! Siz yangi shaharda bir kun o'tkazdingiz: tanishdingiz, yo'l so'radingiz, buyurtma berdingiz, kecha va ertangi kun haqida gapirdingiz. Siz endi ingliz tilida **real hayotda** gaplasha olasiz.",
  },
};

export default lesson;
