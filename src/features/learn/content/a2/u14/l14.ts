import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, choosing between two things. Recycles comparatives, as ... as,
// too/enough and describing people from l1–l6; adds decision phrases.
const lesson: Lesson = {
  id: 'u14-l14',
  title: "Listening and speaking: choosing between two things",
  titleUz: "Tinglash va gapirish: ikki narsadan birini tanlash",
  mini: true,
  kind: 'skill',
  goal: "Ikki narsadan birini tanlash haqidagi suhbatni **tinglab tushunasiz** va o'zingiz tanlaysiz, sabab aytasiz: *I prefer the black one because it's faster. In my opinion, it's the better choice.*",
  slides: [
    {
      title: "Tinglang: qaysi telefon?",
      blocks: [
        { t: 'p', md: "Dialogni tinglang (▶), keyin matnga qarang. Avval umumiy ma'noni tushuning: **nimalarni tanlayapti? farqi nimada? nimani tanlaydi?**" },
        { t: 'dialog', lines: [
          { who: 'Nilufar', en: "I can't decide. Which phone is better for me, the blue one or the black one?", uz: "Qaror qila olmayapman. Qaysi telefon menga yaxshiroq, ko'kimi yoki qorami?" },
          { who: 'Ali', en: "What's the difference between them?", uz: 'Ularning farqi nimada?' },
          { who: 'Nilufar', en: 'The blue one is cheaper, but the black one is faster, and its camera is much better.', uz: "Ko'ki arzonroq, lekin qorasi tezroq va kamerasi ancha yaxshi." },
          { who: 'Ali', en: 'Is the black one a lot more expensive?', uz: 'Qorasi ancha qimmatroqmi?' },
          { who: 'Nilufar', en: "No, it's only a bit more expensive. It's about twenty dollars more.", uz: "Yo'q, atigi sal qimmatroq. Taxminan yigirma dollar ko'p." },
          { who: 'Ali', en: 'Then I think the black one is the better choice. You take a lot of photos!', uz: "Unda menimcha qorasi yaxshiroq tanlov. Sen juda ko'p rasmga olasan!" },
          { who: 'Nilufar', en: "That's true. In my opinion, the camera is the most important thing. I'll take the black one.", uz: "To'g'ri. Menimcha, eng muhimi — kamera. Qorasini olaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: 'Why does Nilufar choose the black phone?', opts: ['It is faster and has a better camera.', 'It is cheaper.', 'It is lighter.', 'Her friend has one.'], a: 0, why: "Dialog: *the black one is faster, and its camera is much better*." } },
        { t: 'check', ex: { k: 'listen', say: "It's only a bit more expensive.", opts: ["It's only a bit more expensive.", "It's a lot more expensive.", "It's a bit cheaper.", "It's not as expensive."], a: 0 } },
      ],
    },
    {
      title: "Tanlash uchun iboralar",
      blocks: [
        { t: 'table', head: ['Inglizcha', "O'zbekcha"], speak: [0], rows: [
          ['Which one do you prefer?', 'Qaysi birini afzal ko\'rasan?'],
          ["What's the difference between them?", 'Ularning farqi nimada?'],
          ["I can't decide.", 'Qaror qila olmayapman.'],
          ["I prefer the black one because it's faster.", "Men qorasini afzal ko'raman, chunki u tezroq."],
          ['In my opinion, it is the better choice.', 'Menimcha, bu yaxshiroq tanlov.'],
          ['It depends.', 'Bunga bog\'liq.'],
          ['I agree. / I don\'t agree.', "Roziman. / Rozi emasman."],
        ] },
        { t: 'tip', tone: 'info', md: "Tanlovni **tartib** bilan ayting: **1) farq** (*A is cheaper, but B is better*) → **2) tanlov** (*I prefer B*) → **3) sabab** (*because …*)." },
        { t: 'compare', good: { title: "To'g'ri", items: ['I prefer the blue one.', 'The black one is better than the blue one.', 'It is not as expensive as the white one.'] }, bad: { title: "Noto'g'ri", items: ['I am prefer the blue one.', 'The black one is more better than the blue one.', 'It is not so expensive than the white one.'] } },
        { t: 'check', ex: { k: 'fill', q: "I prefer the market ___ it is cheaper.", a: ['because'], why: "Sabab — **because**." } },
      ],
    },
    {
      title: "Tinglang: do'kon yoki bozor?",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Mia', en: 'Where shall we buy shoes, at the market or at the shopping centre?', uz: "Poyabzalni qayerdan olamiz, bozordanmi yoki savdo markazidanmi?" },
          { who: 'Jack', en: 'It depends. The market is cheaper, but the shopping centre is more comfortable.', uz: "Bunga bog'liq. Bozor arzonroq, lekin savdo markazi qulayroq." },
          { who: 'Mia', en: 'Is it far from here?', uz: 'Bu yerdan uzoqmi?' },
          { who: 'Jack', en: 'The market is closer, only ten minutes on foot. The shopping centre is further, and the bus is slow.', uz: "Bozor yaqinroq, piyoda atigi o'n daqiqa. Savdo markazi uzoqroq, avtobus esa sekin." },
          { who: 'Mia', en: "Then I prefer the market. The shoes are cheaper, and I don't have much money.", uz: "Unda men bozorni afzal ko'raman. Poyabzal arzonroq, pulim esa ko'p emas." },
          { who: 'Jack', en: "I agree. Let's go to the market!", uz: 'Roziman. Bozorga boramiz!' },
        ] },
        { t: 'check', ex: { k: 'tf', q: 'The shopping centre is closer than the market.', a: false, why: "Dialog: *The market is closer*." } },
        { t: 'check', ex: { k: 'dictation', say: "I don't have much money.", a: ["I don't have much money.", 'I do not have much money.'] } },
      ],
    },
    {
      title: "Tinglang: ta'tilga qayerga?",
      blocks: [
        { t: 'text', title: 'Where shall we go?', voice: 'emma', en: "My friend and I can't decide where to go for the holiday. Tashkent is bigger, and it has more shops. My friend thinks it is more exciting. But Samarkand is quieter and more beautiful, and the hotels are cheaper. In my opinion, Samarkand is the better choice, because I want a quiet holiday. My friend agrees with me. In the end, we decide to go to Samarkand.", uz: "Do'stim ikkimiz ta'tilga qayerga borishni hal qila olmayapmiz. Toshkent kattaroq, do'konlari ko'proq. Do'stim uni qiziqarliroq deb o'ylaydi. Lekin Samarqand sokinroq va chiroyliroq, mehmonxonalari ham arzonroq. Menimcha, Samarqand yaxshiroq tanlov, chunki men sokin ta'til xohlayman. Do'stim men bilan rozi. Oxirida Samarqandga borishga qaror qilamiz." },
        { t: 'check', ex: { k: 'choice', q: 'Why does the writer choose Samarkand?', opts: ['She wants a quiet holiday.', 'It has more shops.', 'It is bigger.', 'Her friend lives there.'], a: 0, why: "Matn: *I want a quiet holiday*." } },
        { t: 'check', ex: { k: 'tf', q: "The writer's friend thinks Tashkent is more exciting.", a: true, why: "Matn: *My friend thinks it is more exciting*." } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "Gapirish topshirig'i: ikki narsani (telefon, do'kon, shahar) tanlang va **4 gapda** ovoz chiqarib ayting." },
        { t: 'text', title: 'Model answer', voice: 'emma', en: "I can't decide between two phones. The blue one is cheaper, but the black one is faster. I prefer the black one because its camera is much better. In my opinion, it is the better choice.", uz: "Ikki telefon orasida qaror qila olmayapman. Ko'ki arzonroq, lekin qorasi tezroq. Men qorasini afzal ko'raman, chunki kamerasi ancha yaxshi. Menimcha, bu yaxshiroq tanlov." },
        { t: 'tip', tone: 'good', md: "Reja: **1)** *I can't decide between … and …* **2)** *A is …er, but B is more …* **3)** *I prefer … because …* **4)** *In my opinion, …*. Sekin va aniq gapiring, har gapdan keyin to'xtang." },
        { t: 'check', ex: { k: 'order', uz: "Menimcha, bu yaxshiroq tanlov.", words: ['In', 'my', 'opinion', 'it', 'is', 'the', 'better', 'choice'], extra: ['best', 'more'] } },
      ],
    },
  ],
  words: [
    { en: 'decide', uz: 'qaror qilmoq', ipa: 'dɪˈsaɪd', pos: 'verb', ex: "I can't decide between the two bags.", exUz: "Ikki sumka orasida qaror qila olmayapman." },
    { en: 'opinion', uz: 'fikr, nuqtai nazar', ipa: 'əˈpɪn.jən', pos: 'noun', ex: 'In my opinion, the blue one is better.', exUz: "Menimcha, ko'ki yaxshiroq." },
    { en: 'agree', uz: 'rozi bo\'lmoq', ipa: 'əˈɡriː', pos: 'verb', ex: 'I agree with you.', exUz: "Men sen bilan roziman." },
    { en: 'choice', uz: 'tanlov', ipa: 'tʃɔɪs', pos: 'noun', ex: 'This is a good choice.', exUz: "Bu yaxshi tanlov." },
    { en: 'reason', uz: 'sabab', ipa: 'ˈriː.zən', pos: 'noun', ex: 'What is the reason for your choice?', exUz: "Tanlovingizning sababi nima?" },
    { en: 'it depends', uz: "bunga bog'liq", ipa: 'ɪt dɪˈpendz', pos: 'phrase', ex: 'Which is better? It depends.', exUz: "Qaysi biri yaxshiroq? Bunga bog'liq." },
  ],
  practice: [
    { k: 'listen', say: "I can't decide between the two flats.", opts: ["I can't decide between the two flats.", 'I can decide between the two flats.', "I can't decide between the two phones.", "I don't like the two flats."], a: 0 },
    { k: 'choice', q: 'Which phrase gives a reason?', opts: ["I prefer the black one because it's faster.", 'I prefer the black one.', "What's the difference?", 'It depends.'], a: 0, why: "Sabab **because** bilan aytiladi." },
    { k: 'match', pairs: [['decide', 'qaror qilmoq'], ['opinion', 'fikr'], ['agree', "rozi bo'lmoq"], ['choice', 'tanlov'], ['reason', 'sabab']] },
    { k: 'order', uz: "Men qorasini afzal ko'raman, chunki u tezroq.", words: ['I', 'prefer', 'the', 'black', 'one', 'because', 'it', 'is', 'faster'], extra: ['more', 'then'] },
    { k: 'fill', q: 'In my ___, the blue one is better.', a: ['opinion'], uz: "Menimcha, ko'ki yaxshiroq.", why: "**In my opinion** — menimcha." },
    { k: 'dictation', say: 'The market is cheaper, but the shopping centre is more comfortable.', a: ['The market is cheaper, but the shopping centre is more comfortable.'] },
    { k: 'fix', wrong: 'I am prefer the red bag.', a: ['I prefer the red bag.'], hint: "prefer — oddiy fe'l", why: "**prefer** — oddiy fe'l, *am* kerak emas." },
    { k: 'fix', wrong: 'This phone is more better than that one.', a: ['This phone is better than that one.'], hint: "Ikki marta qiyoslangan", why: "*good* → **better**; *more* kerak emas." },
    { k: 'translate', uz: "Bunga bog'liq. Bozor arzonroq.", a: ['It depends. The market is cheaper.', "It depends. The market's cheaper."], why: "**It depends.**" },
    { k: 'tf', q: "*I agree with you* — \"Men sen bilan roziman\".", a: true, why: "**agree with** + kim." },
    { k: 'choice', q: 'Samarkand is quieter than Tashkent, ___ Tashkent is more exciting.', opts: ['but', 'because', 'so', 'or'], a: 0, why: "Qarama-qarshi fikr — **but**." },
    { k: 'speak', say: "I can't decide between the blue one and the black one.", uz: "Ko'ki va qora orasida qaror qila olmayapman." },
    { k: 'speak', say: "I prefer the market because it's cheaper.", uz: "Men bozorni afzal ko'raman, chunki u arzonroq." },
    { k: 'speak', say: 'In my opinion, it is the better choice.', uz: 'Menimcha, bu yaxshiroq tanlov.' },
  ],
  quiz: [
    { k: 'choice', q: 'Which one do you ___, tea or coffee?', opts: ['prefer', 'agree', 'decide', 'depend'], a: 0, why: "**Which one do you prefer?** — qaysi birini afzal ko'rasan?" },
    { k: 'fill', q: "I ___ with you. It's a good idea.", a: ['agree'], why: "**agree with** — rozi bo'lmoq." },
    { k: 'order', uz: "Qaror qila olmayapman.", words: ["I", "can't", 'decide'], extra: ['am', 'not'] },
    { k: 'translate', uz: "Menimcha, bu yaxshiroq tanlov.", a: ['In my opinion, it is the better choice.', "In my opinion, it's the better choice.", 'In my opinion, this is the better choice.'], why: "**In my opinion** + gap." },
    { k: 'tf', q: "*It depends* — \"Bunga bog'liq\" degan ma'noni beradi.", a: true, why: "**It depends.**" },
    { k: 'listen', say: 'Then I prefer the market.', opts: ['Then I prefer the market.', 'Then I prefer the shop.', 'Then I agree with the market.', 'Then the market is cheaper.'], a: 0 },
    { k: 'fix', wrong: 'The black one is more fast than the blue one.', a: ['The black one is faster than the blue one.'], hint: "fast — qisqa sifat", why: "*fast* → **faster**." },
    { k: 'match', pairs: [['agree', "rozi bo'lmoq"], ['choice', 'tanlov'], ['reason', 'sabab'], ['decide', 'qaror qilmoq']] },
  ],
  summary: [
    "Tanlovni tartib bilan ayting: **farq** (*A is cheaper, but B is better*) → **tanlov** (*I prefer B*) → **sabab** (*because …*).",
    "Foydali iboralar: **I can't decide. In my opinion, … It depends. I agree.**",
    "Qiyoslashda: *much faster, a bit more expensive, not as good as*. ❌ *more better*, ❌ *I am prefer*.",
    "Yangi so'zlar: **decide, opinion, agree, choice, reason, it depends**.",
  ],
  homework: "Telefonda yoki do'konda ikki narsani tanlang (ikki telefon, ikki kafe) va tanlovingizni 4 gapda ovoz chiqarib ayting, yozib oling. Keyin o'zingizni tinglang.",
};

export default lesson;
