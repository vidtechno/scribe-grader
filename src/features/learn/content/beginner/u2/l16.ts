import type { Lesson } from '../../../types';

// Real-life scene: showing a family photo to a friend. Uses family words, my / his / her / their, 's, to be, numbers up to 20 (lessons u2-l1 to u2-l9).
const lesson: Lesson = {
  id: 'u2-l16',
  title: 'Real life: my family photo',
  titleUz: 'Real hayot: oilaviy surat',
  mini: true,
  kind: 'scene',
  goal: "Do'stingizga **oilaviy suratni** ko'rsatasiz: kim ekanini, ismini va yoshini aytasiz. **my / his / her / their** ni to'g'ri tanlaysiz va **have** bilan yosh aytmaysiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**This is my sister.** — **my** = mening; **They are my parents.**",
    "**Her name is Madina.** — qiz/ayol uchun **her**, o'g'il/erkak uchun **his** (**He name** emas).",
    "**How old is she?** → **She is sixteen.** (yoshni **be** bilan aytamiz, **have** bilan emas).",
    "**Is this your father?** → **No, he isn't. He's my friend.**",
    "**'s** egalik: **your sister's name**, **my father's name**.",
  ],
  homework: "Telefoningizdagi oilaviy suratga qarab, 3 ta gap ayting: **This is my…**, **Her / His name is…**, **She / He is … (yosh).**",
  scene: {
    place: 'family',
    partner: { name: 'Ben', role: "Do'st", voice: 'george', emoji: '🧑' },
    intro: "Siz — **Ali**. Do'stingiz **Ben** bilan o'tiribsiz va telefoningizdan oilaviy suratni ko'rsatyapsiz. Ben savol beradi: bu kim, ismi nima, necha yoshda. Javob bering.",
    steps: [
      { k: 'say', en: 'Hi Ali! Nice photo. Who is this?', uz: "Salom Ali! Chiroyli surat. Bu kim?" },
      {
        k: 'build', ask: "Surat opangiz haqida. Ayting: «Bu mening opam.»",
        words: ['This', 'is', 'my', 'sister'], extra: ['her', 'his', 'mother'],
        mistakes: [
          { a: ['This is her sister', 'This is his sister'], why: "«Mening» — **my**. **her** — «uning» (ayolning), **his** — «uning» (erkakning). Siz o'zingizning opangiz haqida gapiryapsiz: **my sister**." },
          { a: ['This is brother my', 'This is sister my'], why: "Inglizchada **my** ot oldidan keladi: **my sister**." },
        ],
        why: "Qolip: **This is my** + oila a'zosi.",
      },
      { k: 'say', en: "She's nice! What's your sister's name?", uz: 'U yaxshi ko\'rinadi! Opangizning ismi nima?' },
      {
        k: 'fill', ask: "Opangiz haqida: «Uning ismi Madina.»", q: '___ name is Madina.', a: ['Her'],
        mistakes: [
          { a: ['His'], why: "**His** — erkak uchun. Madina — qiz, shuning uchun **her**: **Her name is Madina.**" },
          { a: ['She', 'Shes'], why: "Ot oldida **she** emas, egalik shakli **her** ishlatiladi: **Her name is Madina.**" },
          { a: ['My'], why: "**My name** — mening ismim. Opangizning ismi: **Her name**." },
        ],
        why: "Ayol uchun — **her**: **Her name is Madina.**", hint: 'H...',
        drill: { k: 'choice', q: "Madina — mening opam. ___ name is Madina.", opts: ['His', 'Her', 'He'], a: 1, why: "Qiz → **her**." },
      },
      { k: 'say', en: 'How old is she?', uz: 'U necha yoshda?' },
      { k: 'note', title: 'Yosh', md: "**How old is she?** — «U necha yoshda?»\n\nJavob: **She is sixteen.** — «U o'n oltida.»\n\nYoshni **be** (am / is / are) bilan aytamiz, **have** bilan emas." },
      {
        k: 'type', ask: "Opangiz o'n olti yoshda. Ayting: «U o'n olti yoshda.»",
        a: ['She is sixteen.', "She's sixteen.", 'She is sixteen', "She's sixteen", 'She is 16.', "She's 16."],
        mistakes: [
          { a: ['She have sixteen', 'She has sixteen', 'She have sixteen.', 'She has sixteen.'], why: "Yosh **have** bilan emas, **be** bilan aytiladi: **She is sixteen.** (qisqasi **She's sixteen.**)" },
          { a: ['She sixteen', 'She sixteen.'], why: "`She sixteen` — **is** tushib qolgan. To'g'risi: **She is sixteen.**" },
          { a: ['Her is sixteen', 'Her sixteen', 'Her is sixteen.'], why: "Gap boshida «u» — **she**. **Her** esa ot oldida keladi (**her name**). To'g'risi: **She is sixteen.**" },
        ],
        why: "Qolip: **She is** + son. Son: **sixteen**.", hint: 'She ... sixteen.',
        drill: { k: 'fix', wrong: 'She have sixteen.', a: ['She is sixteen.', "She's sixteen."], why: "Yosh **be** bilan: **She is sixteen.**" },
      },
      { k: 'say', en: 'And is this your father?', uz: 'Bu esa otangizmi?' },
      {
        k: 'pick', ask: "Bu yigit sizning do'stingiz, otangiz emas. «Yo'q, u mening do'stim» deb javob bering.",
        opts: [
          { en: "No, he isn't. He's my friend.", ok: true },
          { en: 'No, he is not. He is my friend.', ok: true },
          { en: "No, it isn't. He's my friend.", why: "Odam haqida **it** emas, **he** (erkak) yoki **she** (ayol) deymiz: **No, he isn't.**" },
          { en: "No, she isn't. He's my friend.", why: "Bu erkak, shuning uchun **he**: **No, he isn't.** (**she** — ayol uchun)." },
          { en: "No, he isn't. His my friend.", why: "**His** — «uning». «U — mening do'stim» deyish uchun **He's** (= He is) kerak: **He's my friend.**" },
        ],
        why: "Odam haqida: erkak — **he**, ayol — **she**. **No, he isn't. He's my friend.**",
        drill: { k: 'choice', q: "Bu Aziz. U mening do'stim. ___ my friend.", opts: ["He's", 'His', "She's"], a: 0, why: "**He's** = he is. **His** — «uning» (egalik)." },
      },
      { k: 'say', en: 'OK! And who are they?', uz: 'Yaxshi! Ular esa kim?' },
      {
        k: 'build', ask: "Suratda ota-onangiz. Ayting: «Ular mening ota-onam.»",
        words: ['They', 'are', 'my', 'parents'], extra: ['is', 'their', "They're"],
        alt: [["They're", 'my', 'parents']],
        mistakes: [
          { a: ['They is my parents'], why: "**They** bilan **is** emas, **are**: **They are my parents.**" },
          { a: ['Their are my parents', 'Their is my parents'], why: "**Their** — «ularning» (ot oldida). Gap boshida «ular» — **they**: **They are my parents.**" },
        ],
        why: "«Ular» — **they**, shuning uchun **are**: **They are my parents.**",
      },
      { k: 'say', en: "They are nice! What's your father's name?", uz: "Ular yaxshi odamlar! Otangizning ismi nima?" },
      {
        k: 'pick', ask: "Otangizning ismi **Karim**. Javob bering.",
        opts: [
          { en: 'His name is Karim.', ok: true },
          { en: "His name's Karim.", ok: true },
          { en: 'Her name is Karim.', why: "**Her** — ayol uchun. Ota — erkak, shuning uchun **his**: **His name is Karim.**" },
          { en: 'He name is Karim.', why: "Ot oldida **he** emas, egalik shakli **his** keladi: **His name is Karim.**" },
          { en: 'My name is Karim.', why: "**My name** — sizning ismingiz (Ali). Otangizning ismi: **His name**." },
        ],
        why: "Erkak → **his name**, ayol → **her name**.",
      },
      { k: 'say', en: 'You have a nice family, Ali!', uz: 'Sizning oilangiz juda yaxshi, Ali!' },
      {
        k: 'type', ask: "Do'stingizga rahmat ayting.",
        a: ['Thank you!', 'Thank you, Ben!', 'Thank you, Ben', 'Thank you'],
        why: "**Thank you!**", hint: 'Thank ...',
      },
    ],
    outro: "Barakalla! Oilaviy suratni inglizcha tushuntirdingiz: kim, ismi, yoshi. **my / his / her / their** ni va **She is sixteen** deyishni yodda tuting.",
  },
};

export default lesson;
