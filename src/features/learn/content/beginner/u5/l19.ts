import type { Lesson } from '../../../types';

// Real-life scene: weekend plans with a friend. Uses be going to (plans) and will (weather, decisions now).
const lesson: Lesson = {
  id: 'u5-l19',
  title: 'Real life: plans for the weekend',
  titleUz: 'Real hayot: dam olish kuni rejalari',
  mini: true,
  kind: 'scene',
  goal: "Do'stingiz bilan **dam olish kuni rejalarini** gaplashasiz: rejangizni aytasiz (**be going to**), ob-havo haqida fikr bildirasiz va shu zahoti qaror qilsangiz **will** ishlatasiz.",
  slides: [], words: [], practice: [], quiz: [],
  summary: [
    "**I'm going to visit my grandmother.** — oldindan tuzilgan reja: **am / is / are + going to + fe'l**.",
    "**Are you going to play football?** → **No, I'm not.**",
    "**I think it will be sunny.** — taxmin: **will + oddiy fe'l** (**will be**).",
    "**I'll help you.** — shu zahoti qilingan qaror: **will**; oldindan reja: **going to**.",
  ],
  homework: "Kelasi dam olish kuningiz uchun 3 ta reja yozing (**I'm going to...**) va ob-havo haqida bitta taxmin (**I think it will be...**).",
  scene: {
    place: 'plans',
    partner: { name: 'Lily', role: "Do'st", voice: 'emma', emoji: '👩‍🦰' },
    intro: "Siz — **Ali**. Juma kuni do'stingiz **Lily** bilan dam olish kuni rejalarini gaplashyapsiz. Rejangizni ayting, ob-havo haqida fikr bildiring va birgalikda reja tuzing.",
    steps: [
      { k: 'say', en: "Hi, Ali! It's Friday! What are you going to do on Saturday?", uz: "Salom, Ali! Bugun juma! Shanba kuni nima qilmoqchisan?" },
      {
        k: 'type', ask: "Rejangizni ayting: «Men buvimnikiga bormoqchiman.» (visit — borib ko'rmoq)",
        a: ["I'm going to visit my grandmother.", 'I am going to visit my grandmother.', "I'm going to visit my grandmother on Saturday.", 'I am going to visit my grandmother on Saturday.'],
        mistakes: [
          { a: ['I going to visit my grandmother'], why: "**am** tushib qolgan. Reja: **I am going to** yoki qisqasi **I'm going to visit my grandmother.**" },
          { a: ["I'm going visit my grandmother", 'I am going visit my grandmother'], why: "**going** dan keyin **to** kerak: **I'm going to visit...**" },
          { a: ["I'm going to visiting my grandmother", 'I am going to visiting my grandmother'], why: "**going to** dan keyin fe'lning oddiy shakli: **visit**, `visiting` emas." },
        ],
        why: "Reja: **am / is / are + going to + oddiy fe'l** — **I'm going to visit my grandmother.**", hint: "I'm going ... visit my grandmother.",
        drill: { k: 'fix', wrong: "I'm going to visiting my grandmother.", a: ["I'm going to visit my grandmother.", 'I am going to visit my grandmother.', "I'm going to visit my grandmother", 'I am going to visit my grandmother'], hint: 'to dan keyin oddiy shakl', why: "**going to** + oddiy fe'l: **visit**." },
      },
      { k: 'say', en: "That's nice! Are you going to play football on Sunday?", uz: "Yaxshi! Yakshanba kuni futbol o'ynamoqchimisan?" },
      {
        k: 'pick', ask: "Yakshanba kuni futbol o'ynashni rejalashtirmagansiz. Qisqa javob bering.",
        opts: [
          { en: "No, I'm not.", ok: true },
          { en: 'No, I am not.', ok: true },
          { en: "No, I don't.", why: "**Are you going to...?** savoliga **am / are** bilan javob beramiz: **No, I'm not.** (**don't** emas)." },
          { en: 'Yes, I going to.', why: "Siz rejalashtirmagansiz, shuning uchun **No**. Va **am** tushib qolmasligi kerak: **Yes, I am.**" },
        ],
        why: "**Are you going to...?** → **Yes, I am.** / **No, I'm not.**",
      },
      { k: 'say', en: 'OK. Will it be sunny on Saturday?', uz: 'Mayli. Shanba kuni havo ochiq bo\'ladimi?' },
      {
        k: 'build', ask: "Fikringizni ayting: «Menimcha, havo ochiq bo'ladi.»", words: ['I', 'think', 'it', 'will', 'be', 'sunny'], extra: ['is', 'going'],
        alt: [['I', 'think', 'it', "will", 'be', 'sunny']],
        mistakes: [
          { a: ['I think it will sunny'], why: "**will** dan keyin **be** kerak: **it will be sunny**." },
          { a: ['I think it wills be sunny', 'I think it will is sunny'], why: "**will** o'zgarmaydi, undan keyin oddiy shakl: **will be**." },
        ],
        why: "Taxmin: **I think it will be sunny.** — **will + be**.",
        drill: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ['It will sunny.', 'It will be sunny.', 'It wills be sunny.'], a: 1, why: "**will + be**: **It will be sunny.**" },
      },
      { k: 'say', en: "Great! Oh no. I can't find my bag!", uz: "Zo'r! Voy yo'q. Sumkamni topolmayapman!" },
      {
        k: 'pick', ask: "Lily sumkasini topolmayapti. Shu zahoti yordam berishga qaror qildingiz (reja yo'q edi).",
        opts: [
          { en: "I'll help you.", ok: true },
          { en: 'I will help you.', ok: true },
          { en: "I'm going to help you yesterday.", why: "**yesterday** — kecha, o'tgan zamon. Bu yerda esa hozir qaror qilyapsiz: **I'll help you.**" },
          { en: 'I help you tomorrow.', why: "Yordam hozir kerak. Shu zahoti qaror: **I'll help you.**" },
        ],
        why: "Shu zahoti qilingan qaror: **I'll help you.** (**will**). Oldindan reja: **going to**.",
      },
      { k: 'say', en: 'Thank you, Ali! Do you want to go to the park on Sunday?', uz: "Rahmat, Ali! Yakshanba kuni parkka borishni xohlaysanmi?" },
      {
        k: 'fill', ask: "Rozilik bildiring: «Ha, men bormoqchiman.» (reja)", q: "Yes! I'm ___ to go to the park.", a: ['going'],
        mistakes: [{ a: ['go', 'will', 'went'], why: "Reja uchun **be going to**: **I'm going to go**. **am** + **going** + **to**." }],
        why: "**I'm going to go to the park.** — reja.", hint: 'be ... to',
      },
      { k: 'say', en: "Let's make a plan! What time are we going to meet?", uz: "Reja tuzaylik! Soat nechada uchrashamiz?" },
      {
        k: 'build', ask: "Taklif qiling: «Keling, soat ikkida uchrashaylik.»", words: ["Let's", 'meet', 'at', 'two'], extra: ['to', 'met'],
        alt: [['Lets', 'meet', 'at', 'two'], ['We', 'are', 'going', 'to', 'meet', 'at', 'two']],
        mistakes: [{ a: ['Lets met at two', "Let's met at two"], why: "**Let's** dan keyin oddiy shakl: **Let's meet at two.**" }],
        why: "**Let's meet at two.** — taklif; soat oldidan **at**.",
      },
      { k: 'say', en: 'Great! See you on Sunday, Ali!', uz: "Zo'r! Yakshanba kuni ko'rishamiz, Ali!" },
    ],
    outro: "Barakalla! Siz **rejalaringiz** haqida gapirdingiz: **be going to**, ob-havo haqida **will** va shu zahoti qilingan qaror. Endi do'stingiz bilan hafta oxirini birga rejalashtira olasiz.",
  },
};

export default lesson;
