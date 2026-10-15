import type { Lesson } from '../../../types';

// Mini lesson (situation): catching up with a friend by phone. Present Perfect, Present Perfect Continuous, Past Simple, used to (l1-l6).
const lesson: Lesson = {
  id: 'u18-l10',
  title: 'Catching up with a friend by phone',
  titleUz: "Do'stga telefonda yangiliklarni aytish",
  mini: true,
  kind: 'situation',
  goal: "Uzoq vaqt ko'rmagan do'stingiz bilan telefonda gaplashasiz: **How have you been? What have you been up to?** deb so'raysiz, yangiliklaringizni aytasiz va xursandchilik bildirasiz.",
  slides: [
    {
      title: "Tinglang: uzoq vaqtdan keyin",
      blocks: [
        { t: 'p', md: "Lily va Jack bir necha oy gaplashmagan. Jack qo'ng'iroq qildi. Dialogni tinglang va **qanday yangiliklar** aytilganini toping." },
        { t: 'dialog', lines: [
          { who: 'Jack', en: "Hi, Lily! It's Jack. It's been ages! How have you been?", uz: "Salom, Lily! Bu Jek. Ancha vaqt bo'ldi! Qalaysan?" },
          { who: 'Lily', en: "Jack! I'm so glad you called. I've been fine, just very busy. What have you been up to?", uz: "Jek! Qo'ng'iroq qilganingdan juda xursandman. Yaxshiman, faqat juda bandman. O'zing nima qilib yuribsan?" },
          { who: 'Jack', en: "Well, guess what? I've got a new job! I started last Monday.", uz: "Bilasanmi, nima? Yangi ishga kirdim! O'tgan dushanba kuni boshladim." },
          { who: 'Lily', en: "That's great news! Congratulations! Is it a big change?", uz: "Bu zo'r yangilik! Tabriklayman! Bu katta o'zgarishmi?" },
          { who: 'Jack', en: "Yes. I used to work from home, so I'm not used to the long journey yet. It takes an hour each way.", uz: "Ha. Ilgari uydan ishlardim, shuning uchun uzoq yo'lga hali ko'nikmaganman. Har tomonga bir soat ketadi." },
          { who: 'Lily', en: "I'm sure you'll get used to it. I've been looking for a new flat, so I know how stressful change can be.", uz: "Ishonamanki, ko'nikasan. Men yangi kvartira qidiryapman, shuning uchun o'zgarish qanchalik qiyin bo'lishini bilaman." },
          { who: 'Jack', en: "We should meet up soon. Are you free on Saturday?", uz: "Tez orada ko'rishishimiz kerak. Shanba kuni bo'shmisan?" },
          { who: 'Lily', en: "Yes, let's have coffee. I want to hear everything!", uz: "Ha, kofe ichaylik. Hammasini eshitgim keladi!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What is Jack's news?", opts: ["He has a new job.", "He has a new flat.", "He is on holiday.", "He is ill."], a: 0, why: "*I've got a new job!*" } },
        { t: 'check', ex: { k: 'tf', q: "Lily has been looking for a new flat.", a: true, why: "*I've been looking for a new flat.*" } },
      ],
    },
    {
      title: "Foydali iboralar",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ["Salom, uzoq vaqtdan keyin", "It's been ages!"],
          ["Holini so'rash", "How have you been?"],
          ["Nima qilganini so'rash", "What have you been up to?"],
          ["Yangilik aytish", "Guess what? I've got some news."],
          ["Xursand bo'lish", "That's great news! Congratulations!"],
          ["Hamdard bo'lish", "I'm sorry to hear that."],
          ["Uchrashishni taklif qilish", "We should meet up soon."],
          ["Xayrlashish", "Let's keep in touch. Take care!"],
        ] },
        { t: 'tip', tone: 'info', md: "**How have you been?** va **What have you been up to?** — do'stlar orasida eng ko'p ishlatiladigan savollar. **How are you?** hozirgi holatni so'raydi, **How have you been?** esa oxirgi uchrashuvdan beri qanday o'tganini." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["What have you been up to?", "I've just moved house.", "That's great news!"] },
          bad: { title: 'Xato', items: ["What did you been up to?", "I just have moved house.", "That's a good new!"] } },
        { t: 'tip', tone: 'warn', md: "**news** — sanalmaydigan ot: *a news* yoki *news are* deb bo'lmaydi. To'g'risi: *That's good news. The news is great.* Bitta yangilik: **a piece of news**." },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz: 'I've passed my driving test!' Siz:", opts: ["That's great news! Congratulations!", "I'm sorry to hear that.", "Take care!", "What a pity!"], a: 0, why: "Yaxshi yangilikka xursand bo'lamiz." } },
        { t: 'check', ex: { k: 'fill', q: "That's ___ news! I'm so happy for you.", a: ['great', 'good', 'wonderful', 'fantastic', 'brilliant'], why: "**news** bilan *a* ishlatilmaydi: *great news*." } },
      ],
    },
    {
      title: "O'zingiz ayting",
      blocks: [
        { t: 'p', md: "Telefon suhbatining reja: **1) salomlashing (It's been ages!), 2) holni so'rang, 3) yangilik ayting, 4) taklif qiling (We should meet up).**" },
        { t: 'dialog', lines: [
          { who: 'Sara', en: "Hello, Ben! It's been ages. How have you been?", uz: "Salom, Ben! Ancha vaqt bo'ldi. Qalaysan?" },
          { who: 'Ben', en: "Not bad, thanks. I've been learning to cook, actually.", uz: "Yomon emas, rahmat. Aslida ovqat pishirishni o'rganyapman." },
          { who: 'Sara', en: "Really? I've never been good at cooking. What have you made so far?", uz: "Rostdanmi? Men hech qachon ovqat pishirishda yaxshi bo'lmaganman. Hozircha nima pishirding?" },
          { who: 'Ben', en: "Mostly pasta, but I made a cake last weekend. Come for dinner on Friday!", uz: "Ko'proq makaron, lekin o'tgan dam olish kunlari tort pishirdim. Juma kuni kechki ovqatga kel!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What has Ben been learning to do?", opts: ["Cook", "Drive", "Swim", "Paint"], a: 0, why: "*I've been learning to cook.*" } },
        { t: 'check', ex: { k: 'order', uz: "Nima qilib yuribsan?", words: ['What', 'have', 'you', 'been', 'up', 'to?'], extra: ['did', 'ago'] } },
      ],
    },
  ],
  words: [
    { en: 'catch up', uz: "yangiliklarni almashmoq", ipa: 'kætʃ ʌp', pos: 'phrasal verb', ex: "Let's meet and catch up.", exUz: "Uchrashib, yangiliklarni almashaylik." },
    { en: 'ages', uz: "uzoq vaqt (so'zlashuv)", ipa: 'ˈeɪ.dʒɪz', pos: 'noun', ex: "I haven't seen him for ages.", exUz: "Men uni ancha vaqtdan beri ko'rmadim." },
    { en: 'meet up', uz: "uchrashmoq (kelishib)", ipa: 'miːt ʌp', pos: 'phrasal verb', ex: "We meet up every Sunday.", exUz: "Biz har yakshanba uchrashamiz." },
    { en: 'congratulations', uz: 'tabriklayman', ipa: 'kənˌɡrætʃ.əˈleɪ.ʃənz', pos: 'noun', ex: "Congratulations on your new job!", exUz: "Yangi ishingiz bilan tabriklayman!" },
    { en: 'news', uz: 'yangilik', ipa: 'njuːz', pos: 'noun', ex: "I've got some good news.", exUz: "Menda yaxshi yangilik bor." },
  ],
  practice: [
    { k: 'match', pairs: [['catch up', 'yangiliklarni almashmoq'], ['ages', 'uzoq vaqt'], ['meet up', 'uchrashmoq'], ['congratulations', 'tabriklayman'], ['news', 'yangilik']] },
    { k: 'listen', say: "It's been ages! How have you been?", opts: ["It's been ages! How have you been?", "It was ages ago! How are you?", "It's been a week! How do you do?", "It's ages! Who have you been?"], a: 0 },
    { k: 'choice', q: "Do'stingiz uzoq vaqt ko'rinmadi. Siz:", opts: ["What have you been up to?", "What did you been up to?", "What are you up?", "Where you been up?"], a: 0, why: "**What have you been up to?**" },
    { k: 'choice', q: "'Menda yangilik bor' deyish uchun:", opts: ["I've got some news.", "I've got a news.", "I have news are.", "I've got newses."], a: 0, why: "**news** — sanalmaydigan ot." },
    { k: 'fill', q: "Guess ___? I've got a new job!", a: ['what'], uz: "Bilasanmi, nima? Menda yangi ish bor!", why: "**Guess what?** — yangilikni boshlash." },
    { k: 'fill', q: "We should meet ___ soon.", a: ['up'], uz: "Tez orada uchrashishimiz kerak.", why: "**meet up** — kelishib uchrashmoq." },
    { k: 'order', uz: "Men sizni ancha vaqtdan beri ko'rmadim.", words: ["I", "haven't", 'seen', 'you', 'for', 'ages.'], extra: ['ago', 'since'], alt: [['I', 'have', 'not', 'seen', 'you', 'for', 'ages.']] },
    { k: 'fix', wrong: "That's a great news!", a: ["That's great news!", "That is great news!", "That's a great piece of news!"], why: "**news** bilan *a* kerak emas." },
    { k: 'fix', wrong: "What did you been doing lately?", a: ["What have you been doing lately?", "What have you been up to lately?"], why: "**have you been doing** — Present Perfect Continuous." },
    { k: 'translate', uz: "Men yangi ish topdim.", a: ["I've found a new job.", "I have found a new job.", "I've got a new job.", "I have got a new job."], why: "Yangilik → **Present Perfect**." },
    { k: 'dictation', say: "I'm so glad you called!", a: ["I'm so glad you called!", "I am so glad you called!", "I'm so glad you called"] },
    { k: 'speak', say: "Hi! It's been ages. How have you been?", uz: "Salom! Ancha vaqt bo'ldi. Qalaysan?" },
    { k: 'speak', say: "Guess what? I've got some good news!", uz: "Bilasanmi, nima? Menda yaxshi yangilik bor!" },
  ],
  quiz: [
    { k: 'choice', q: "Do'stingiz: 'My grandmother has been ill.' Siz:", opts: ["I'm sorry to hear that.", "Congratulations!", "That's great news!", "Guess what?"], a: 0, why: "Yomon yangilikka hamdardlik: **I'm sorry to hear that.**" },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I've been looking for a new flat.", "I look for a new flat since May.", "I've looked for a new flat ago.", "I was looking for a new flat since May."], a: 0, why: "Hali davom etayotgan jarayon → **have been looking**." },
    { k: 'fill', q: "Congratulations ___ your new job!", a: ['on'], why: "**Congratulations on…**" },
    { k: 'fill', q: "How ___ you been? I haven't heard from you for months.", a: ['have'], why: "**How have you been?**" },
    { k: 'listen', say: "Let's meet up on Saturday and have a coffee.", opts: ["Let's meet up on Saturday and have a coffee.", "Let's meet up on Sunday and have a coffee.", "Let's meet up on Saturday and have a lunch.", "We met up on Saturday and had a coffee."], a: 0 },
    { k: 'tf', q: "*It's been ages!* — Biz bir-birimizni uzoq vaqt ko'rmadik degani.", a: true, why: "**ages** — uzoq vaqt." },
    { k: 'order', uz: "Hammasini eshitgim keladi!", words: ['I', 'want', 'to', 'hear', 'everything!'], extra: ['hearing', 'for'] },
    { k: 'translate', uz: "Men yangi uyga ko'chib o'tdim.", a: ["I've moved to a new house.", "I have moved to a new house.", "I've moved into a new house.", "I have moved into a new house.", "I've moved house.", "I have moved house.", "I've moved to a new flat.", "I have moved to a new flat.", "I've moved into a new flat.", "I have moved into a new flat."], why: "Yangilik → **Present Perfect**." },
  ],
  summary: [
    "Salomlashish: **It's been ages! How have you been? What have you been up to?**",
    "Yangilik: **Guess what? I've got some news.** Javob: **That's great news! Congratulations! / I'm sorry to hear that.**",
    "**news** — sanalmaydigan ot: *good news*, **a piece of news**, *a news* emas.",
    "Yangi so'zlar: **catch up, ages, meet up, congratulations, news**.",
  ],
  homework: "Do'stingizga telefon suhbati yozing (8 qator): salom, holni so'rash, ikkita yangilik, tabriklash yoki hamdardlik va uchrashuv taklifi. Ikkala rolni ovoz chiqarib o'qing.",
};

export default lesson;
