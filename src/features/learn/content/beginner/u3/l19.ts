import type { Lesson } from '../../../types';

// Real-life scene: a chat with a friend about your day. Uses Present Simple, daily routine verbs, in/on/at and always/usually/never.
const lesson: Lesson = {
  id: 'u3-l19',
  title: 'Real life: my day, a chat with a friend',
  titleUz: "Real hayot: do'st bilan kun tartibi",
  mini: true,
  kind: 'scene',
  goal: "Do'stingiz bilan **kun tartibingiz** haqida gaplashasiz: nechada turasiz, nima qilasiz, ishga qanday borasiz. **always / usually / never** ni to'g'ri joyga qo'yasiz va o'zingiz ham savol berasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**What time do you get up?** → **I get up at seven.** (soat oldidan **at**).",
    "**Do you…?** savoliga: **Yes, I do.** / **No, I don't.** Uchinchi shaxs: **Does she…?** → **Yes, she does.**",
    "Takrorlanish so'zi fe'ldan **oldin** turadi: **I never drink coffee.** (`I drink never coffee` emas).",
    "**he / she** bilan fe'lga **-s**: **She gets up at six.** (`She get up` emas).",
    "Savol berish: **What time do you finish work?** (**do** + fe'lning oddiy shakli).",
  ],
  homework: "Do'stingizga (yoki o'zingizga) ovoz chiqarib ayting: nechada turasiz, nima ichasiz va nima ichmaysiz, ishga qanday borasiz. Kamida bitta **usually** va bitta **never** ishlating.",
  scene: {
    place: 'day',
    partner: { name: 'Sam', role: "Do'st", voice: 'george', emoji: '🧑' },
    intro: "Siz — **Ali**. Do'stingiz **Sam** sizning kuningiz haqida so'rayapti. Savollarga javob bering, keyin o'zingiz ham undan so'rang.",
    steps: [
      { k: 'say', en: 'Hi Ali! What time do you get up?', uz: 'Salom, Ali! Soat nechada turasan?' },
      {
        k: 'pick', ask: "Sam soat nechada turishingizni so'radi. Soat yettida turasiz. Nima deysiz?",
        opts: [
          { en: 'I get up at seven.', ok: true },
          { en: "I get up at seven o'clock.", ok: true },
          { en: 'I get up in seven.', why: "Soat oldidan **at** ishlatiladi: **at seven**. **in** — oy va yil uchun (in May)." },
          { en: 'I gets up at seven.', why: "**I** bilan fe'lga **-s** qo'shilmaydi. **-s** faqat he / she / it bilan: **I get up**, **she gets up**." },
          { en: 'It is seven.', why: "Bu «Soat yetti» degani. Sam «nechada turasan?» deb so'radi, shuning uchun **I get up at seven** deymiz." },
        ],
        why: "Odatiy ish + vaqt: **I get up at seven.** Soat oldidan — **at**.",
      },
      { k: 'say', en: 'Wow, early! What do you do in the morning?', uz: 'Voy, erta! Ertalab nima qilasan?' },
      {
        k: 'type', ask: "Ayting: «Men soat sakkizda nonushta qilaman.»",
        a: ['I have breakfast at eight.', "I have breakfast at eight o'clock.", 'I have breakfast at 8.'],
        mistakes: [
          { a: ['I have breakfast in eight', 'I have breakfast in 8'], why: "Soat oldidan **at**: **at eight**. **in** emas." },
          { a: ['I has breakfast at eight'], why: "**I** bilan **have**: **I have breakfast**. **has** — he / she / it bilan." },
          { a: ['I am have breakfast at eight', 'I am having breakfast at eight'], why: "Odatiy ishda **am** kerak emas: **I have breakfast at eight.**" },
        ],
        why: "**I have breakfast at eight.** — doimiy odat, Present Simple.", hint: 'I have breakfast ... eight.',
      },
      { k: 'note', title: 'always / usually / never — fe\'ldan oldin', md: "**always**, **usually**, **never** odatda **fe'ldan oldin** turadi:\n\n**I never drink coffee.**\n**I usually walk.** (**walk** — piyoda yurmoq)\n\n`I drink never coffee` — noto'g'ri." },
      { k: 'say', en: 'Do you go to work by bus?', uz: 'Ishga avtobusda borasanmi?' },
      {
        k: 'pick', ask: "Siz ishga avtobusda borasiz. Sam'ga qisqa javob bering.",
        opts: [
          { en: 'Yes, I do.', ok: true },
          { en: "No, I don't. I usually walk.", ok: true },
          { en: 'Yes, I does.', why: "**I** bilan **do** keladi: **Yes, I do.** **does** — he / she / it bilan." },
          { en: 'Yes, I go.', why: "**Do you…?** savoliga qisqa javob **do** bilan: **Yes, I do.** / **No, I don't.**" },
          { en: 'Yes, I am.', why: "Savolda **do** bor, shuning uchun javobda ham **do**: **Yes, I do.** **am** emas." },
        ],
        why: "**Do you…?** → **Yes, I do.** / **No, I don't.**",
        drill: { k: 'choice', q: 'Do you go to work by bus?', opts: ['Yes, I do.', 'Yes, I am.', 'Yes, I does.'], a: 0, why: 'Savolda **do** — javobda ham **do**.' },
      },
      { k: 'say', en: 'Do you drink coffee in the morning?', uz: 'Ertalab kofe ichasanmi?' },
      {
        k: 'build', ask: "Siz kofe ichmaysiz — hech qachon. Ayting: «Men hech qachon kofe ichmayman.»",
        words: ['I', 'never', 'drink', 'coffee'], extra: ['always', 'drinks', "don't"], alt: [['I', "don't", 'drink', 'coffee']],
        mistakes: [
          { a: ['I drink never coffee'], why: "**never** fe'ldan **oldin** turadi: **I never drink coffee.**" },
          { a: ['I drinks never coffee', 'I never drinks coffee'], why: "**I** bilan fe'l oddiy shaklda: **I never drink coffee.** **-s** faqat he / she / it bilan." },
        ],
        why: "**I never drink coffee.** — **never** fe'ldan oldin.",
        drill: { k: 'order', uz: 'Men odatda ishga piyoda boraman.', words: ['I', 'usually', 'walk', 'to', 'work'], extra: ['walks'], why: '**usually** fe\'ldan oldin: **I usually walk**.' },
      },
      { k: 'say', en: 'Me too! And what time do you get up on Sunday?', uz: 'Men ham! Yakshanba kuni soat nechada turasan?' },
      {
        k: 'type', ask: "Ayting: «Men odatda soat to'qqizda turaman.»",
        a: ['I usually get up at nine.', 'I usually get up at 9.', "I usually get up at nine o'clock."],
        mistakes: [
          { a: ['I get up at nine usually', 'I get up at 9 usually'], why: "**usually** gap oxirida emas, fe'ldan **oldin** turadi: **I usually get up at nine.**" },
          { a: ['I get up usually at nine'], why: "**usually** **get** dan oldin keladi: **I usually get up at nine.**" },
        ],
        why: "**I usually get up at nine.** — **usually** fe'ldan oldin.", hint: 'I usually ... up at nine.',
      },
      { k: 'say', en: 'My sister gets up at six. Does your sister get up early?', uz: 'Singlim oltida turadi. Sening singling erta turadimi?' },
      {
        k: 'fill', ask: "Singlingiz ham erta turadi. Qisqa javob bering: «Ha, turadi.»", q: 'Yes, she ___.', a: ['does'],
        mistakes: [{ a: ['do'], why: "**she** bilan **does** keladi: **Yes, she does.** **do** — I / you / we / they bilan." }],
        why: "**Does she…?** → **Yes, she does.**",
        drill: { k: 'fill', q: 'Does he work here? Yes, he ___.', a: ['does'], why: 'he / she / it bilan — **does**.' },
      },
      { k: 'say', en: 'What time does she get up?', uz: 'U soat nechada turadi?' },
      {
        k: 'type', ask: "Ayting: «U soat oltida turadi.»",
        a: ['She gets up at six.', 'She gets up at 6.', "She gets up at six o'clock."],
        mistakes: [
          { a: ['She get up at six'], why: "**she** bilan fe'lga **-s**: **She gets up at six.**" },
          { a: ['She is get up at six', 'She is gets up at six'], why: "Odatda **is** kerak emas: **She gets up at six.**" },
        ],
        why: "**She gets up at six.** — he / she / it bilan fe'l **-s** oladi.", hint: 'She ... up at six.',
      },
      { k: 'say', en: 'Right! Now you ask me.', uz: "To'g'ri! Endi sen mendan so'ra." },
      {
        k: 'build', ask: "Sam'dan so'rang: «Sen ishni soat nechada tugatasan?»",
        words: ['What', 'time', 'do', 'you', 'finish', 'work'], extra: ['does', 'finishes'],
        mistakes: [
          { a: ['What time you finish work'], why: "Savolda **do** kerak: **What time do you finish work?**" },
          { a: ['What time does you finish work'], why: "**you** bilan **do**: **What time do you finish work?**" },
          { a: ['What time do you finishes work'], why: "**do** dan keyin fe'l oddiy shaklda: **finish**, **finishes** emas." },
        ],
        why: "**What time do you finish work?** — **do** + oddiy fe'l.",
        drill: { k: 'fix', wrong: 'What time you finish work?', a: ['What time do you finish work?'], why: 'Savolda **do** kerak.' },
      },
      { k: 'say', en: 'I finish at five. Then I go home. See you!', uz: 'Beshda tugataman. Keyin uyga ketaman. Ko\'rishamiz!' },
    ],
    outro: "Siz do'stingiz bilan kuningiz haqida **to'liq suhbat** qildingiz: vaqt, odat, **usually / never** va savol berish. Shu gaplar har kuni kerak bo'ladi.",
  },
};

export default lesson;
