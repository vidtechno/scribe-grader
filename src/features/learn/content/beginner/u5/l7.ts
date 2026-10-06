import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l7",
  title: "Future: will",
  titleUz: "Kelasi zamon: will",
  goal: "**will** bilan shu zahoti qaror qilasiz, va'da va taklif berasiz, kelajak haqida fikr bildirasiz (*I'll help you. I think it will rain.*). **will** va **going to** ni farqlaysiz.",
  slides: [
    {
      title: "will — kelajak",
      blocks: [
        { t: "p", md: "**will + V1** — kelajak haqida gapirishning eng oddiy yo'li. Shakl **hamma shaxs uchun bir xil**: *I will, she will, they will*. O'zbekchada: *yordam **beraman**, qo'ng'iroq **qilaman**, keladi*." },
        { t: "p", md: "**will** to'rt holatda ishlatiladi:\n• **shu zahoti qaror**: *I'll close the window.*\n• **va'da**: *I'll call you later.*\n• **taklif**: *I'll help you.*\n• **fikr / bashorat**: *I think it will be sunny.*" },
        {
          t: "examples", items: [
            { en: "It's cold. — I'll close the window.", uz: "Sovuq. — Derazani yopaman." },
            { en: "I'll call you later, I promise.", uz: "Keyinroq qo'ng'iroq qilaman, va'da beraman." },
            { en: "Your bag is very big. I'll carry it.", uz: "Sumkangiz juda katta. Men ko'taraman." },
            { en: "I think you'll like this film.", uz: "Menimcha, bu film sizga yoqadi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Men sizga yordam beraman.\"", opts: ["I will to help you.", "I will help you.", "I will helping you.", "I wills help you."], a: 1, why: "**will + V1**, **to** va **-ing** yo'q." } },
      ],
    },
    {
      title: "Shakl va qisqartmalar",
      blocks: [
        {
          t: "table", head: ["", "To'liq", "Qisqa"],
          rows: [
            ["+", "I will help.", "I'll help."],
            ["−", "I will not help.", "I won't help."],
            ["?", "Will you help me?", "—"],
            ["Javob", "Yes, I will. / No, I won't.", "—"],
          ],
        },
        { t: "p", md: "Qisqartmalar: **I'll, you'll, he'll, she'll, it'll, we'll, they'll**. Og'zaki nutqda deyarli doim qisqa shakl ishlatiladi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["He will come.", "She'll call you.", "I won't tell.", "Will you help me?"] },
          bad: { title: "Xato", items: ["He wills come.", "She'll calls you.", "I will not to tell.", "Do you will help me?"] },
        },
        {
          t: "sounds", items: [
            { label: "I'll", say: "I'll", uz: "**\"ayl\"** — bir bo'g'in.", examples: ["I'll", "I'll call you."] },
            { label: "won't", say: "won't", uz: "**\"wount\"** — \"ou\" bilan. ❗ *want* (\"wont\") bilan adashtirmang!", examples: ["won't", "want"] },
            { label: "will", say: "will", uz: "**\"wil\"** — *w* ikki lab bilan, dumaloq (\"v\" emas!).", examples: ["will", "Will you help me?"] },
            { label: "we'll", say: "we'll", uz: "**\"wi:l\"** — cho'ziq \"i:\".", examples: ["we'll", "We'll see."] },
          ],
        },
        { t: "check", ex: { k: "listen", say: "I won't go.", opts: ["I want to go.", "I won't go.", "I will go."], a: 1, why: "\"wount\" — **won't** (bormayman)." } },
      ],
    },
    {
      title: "Qaror, va'da, taklif",
      blocks: [
        { t: "p", md: "**Shu zahoti qaror** — gapirayotgan paytda qaror qilasiz, oldindan reja yo'q edi:" },
        {
          t: "examples", items: [
            { en: "I'm thirsty. — I'll get you some water.", uz: "Chanqadim. — Sizga suv olib kelaman." },
            { en: "Tea or coffee? — I'll have tea, please.", uz: "Choymi, qahvami? — Choy ichaman, iltimos." },
          ],
        },
        { t: "p", md: "**Va'da** va **taklif**:" },
        {
          t: "examples", items: [
            { en: "I promise I'll help you tomorrow.", uz: "Va'da beraman, ertaga sizga yordam beraman." },
            { en: "Don't worry. I won't tell anybody.", uz: "Xavotir olmang. Hech kimga aytmayman." },
            { en: "I'll carry your suitcase.", uz: "Chamadoningizni men ko'taraman." },
            { en: "Will you open the window, please?", uz: "Derazani ochib yuborasizmi, iltimos?" },
          ],
        },
        { t: "tip", tone: "good", md: "**Will you…, please?** — muloyim iltimos. *Can you…?* (4-bo'lim) bilan bir xil ma'noda." },
        { t: "check", ex: { k: "choice", q: "A: I don't understand this exercise. B: Don't worry. I ___ help you.", opts: ["am going", "will", "going to", "helps"], a: 1, why: "Hozir qaror qilingan taklif → **will**." } },
      ],
    },
    {
      title: "Fikr va bashorat: I think … will",
      blocks: [
        { t: "p", md: "Kelajak haqida **fikringiz** (dalil ko'z oldingizda emas) — **will** bilan. Ko'pincha **I think, maybe, probably, I hope** bilan birga keladi." },
        {
          t: "examples", items: [
            { en: "I think it will rain tomorrow.", uz: "Menimcha, ertaga yomg'ir yog'adi." },
            { en: "Maybe she'll come later.", uz: "Balki u keyinroq kelar." },
            { en: "He'll probably be late.", uz: "U ehtimol kechikadi." },
            { en: "I hope you'll visit us soon.", uz: "Umid qilamanki, tez orada bizga kelasiz." },
            { en: "In the future, people will live on Mars.", uz: "Kelajakda odamlar Marsda yashaydi." },
          ],
        },
        { t: "tip", tone: "info", md: "So'z tartibi: **will probably** (*He'll probably come*), lekin **probably won't** (*He probably won't come*). \"Menimcha, kelmaydi\" — odatda ***I don't think** he will come* deyiladi." },
        { t: "check", ex: { k: "fill", q: "I think it ___ be sunny tomorrow.", a: ["will"], why: "Fikr → **will** + V1." } },
      ],
    },
    {
      title: "will yoki going to?",
      blocks: [
        {
          t: "table", head: ["going to", "will"],
          rows: [
            ["Reja: oldindan qaror qilingan", "Qaror: hozir, gapirayotganda"],
            ["I'm going to buy bread after work.", "There's no bread? I'll buy some."],
            ["Dalil ko'z oldimda", "Faqat fikr"],
            ["Look at the clouds! It's going to rain.", "I think it will rain tomorrow."],
          ],
        },
        {
          t: "dialog", lines: [
            { who: "Ona", en: "There's no milk.", uz: "Sut yo'q." },
            { who: "Bobur", en: "I'll buy some. The shop is near.", uz: "Men olib kelaman. Do'kon yaqin." },
            { who: "Ona", en: "Thank you! And what are you going to do tonight?", uz: "Rahmat! Bugun kechqurun nima qilmoqchisan?" },
            { who: "Bobur", en: "I'm going to watch the football match with Aziz. We decided yesterday.", uz: "Aziz bilan futbol o'yinini ko'rmoqchiman. Kecha kelishib oldik." },
          ],
        },
        { t: "tip", tone: "good", md: "Bobur sutni **hozir** olishga qaror qildi → **I'll buy**. Futbolni esa **kecha** rejalashtirgan → **I'm going to watch**." },
        { t: "check", ex: { k: "choice", q: "A: Why have you got a suitcase? B: I ___ my grandmother in Khiva.", opts: ["will visit", "am going to visit", "visit", "visited"], a: 1, why: "Chamadon tayyor — oldindan reja → **am going to visit**." } },
      ],
    },
    {
      title: "Dialog: kelajak haqida",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "What will you do in the future, Timur?", uz: "Kelajakda nima qilasan, Timur?" },
            { who: "Timur", en: "I'm not sure. Maybe I'll be a doctor, like my mother.", uz: "Aniq bilmayman. Balki onam kabi shifokor bo'larman." },
            { who: "Laylo", en: "I think you'll be a great doctor!", uz: "Menimcha, sen ajoyib shifokor bo'lasan!" },
            { who: "Timur", en: "Thanks! And you? You love English.", uz: "Rahmat! Sen-chi? Sen ingliz tilini yaxshi ko'rasan." },
            { who: "Laylo", en: "I hope I'll study in London. I'll decide next year.", uz: "Londonda o'qishga umid qilaman. Kelasi yil qaror qilaman." },
            { who: "Timur", en: "You'll probably speak English very well soon!", uz: "Ehtimol, tez orada ingliz tilida juda yaxshi gapirasan!" },
            { who: "Laylo", en: "I promise I'll write to you from London!", uz: "Londondan senga yozaman, va'da beraman!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo bu yil qaror qiladi.", a: false, why: "*I'll decide **next year**.* — kelasi yil." } },
      ],
    },
  ],
  words: [
    { en: "maybe", uz: "balki", ipa: "ˈmeɪ.bi", pos: "adv", ex: "Maybe I'll come later.", exUz: "Balki keyinroq kelarman." },
    { en: "probably", uz: "ehtimol", ipa: "ˈprɒb.ə.bli", pos: "adv", ex: "It will probably rain.", exUz: "Ehtimol, yomg'ir yog'adi." },
    { en: "promise", uz: "va'da; va'da bermoq", ipa: "ˈprɒm.ɪs", pos: "noun / verb", ex: "I promise I'll help you.", exUz: "Va'da beraman, sizga yordam beraman." },
    { en: "decide", uz: "qaror qilmoq", ipa: "dɪˈsaɪd", pos: "verb", ex: "I'll decide tomorrow.", exUz: "Ertaga qaror qilaman." },
    { en: "future", uz: "kelajak", ipa: "ˈfjuː.tʃə", pos: "noun", ex: "What will you do in the future?", exUz: "Kelajakda nima qilasiz?" },
    { en: "soon", uz: "tez orada, yaqinda", ipa: "suːn", pos: "adv", ex: "We'll see you soon.", exUz: "Tez orada ko'rishamiz." },
    { en: "later", uz: "keyinroq", ipa: "ˈleɪ.tə", pos: "adv", ex: "I'll call you later.", exUz: "Sizga keyinroq qo'ng'iroq qilaman." },
    { en: "next year", uz: "kelasi yil", ipa: "ˌnekst ˈjɪə", pos: "phrase", ex: "She'll be ten next year.", exUz: "Kelasi yil u o'n yoshga to'ladi." },
    { en: "I think", uz: "menimcha, deb o'ylayman", ipa: "aɪ ˈθɪŋk", pos: "phrase", ex: "I think it'll be sunny tomorrow.", exUz: "Menimcha, ertaga quyoshli bo'ladi." },
    { en: "hope", uz: "umid qilmoq", ipa: "həʊp", pos: "verb", ex: "I hope you'll come.", exUz: "Kelasiz deb umid qilaman." },
  ],
  practice: [
    { k: "listen", say: "won't", opts: ["want", "won't", "went"], a: 1, why: "\"wount\" — **won't**." },
    { k: "listen", say: "I'll call you later.", opts: ["I'll call you later.", "I call you later.", "I called you later."], a: 0 },
    { k: "match", pairs: [["maybe", "balki"], ["probably", "ehtimol"], ["promise", "va'da; va'da bermoq"], ["decide", "qaror qilmoq"], ["soon", "tez orada, yaqinda"], ["later", "keyinroq"]] },
    { k: "match", pairs: [["future", "kelajak"], ["next year", "kelasi yil"], ["I think", "menimcha"], ["hope", "umid qilmoq"]] },
    { k: "choice", q: "She ___ help you, I promise.", opts: ["wills", "will", "will to", "is will"], a: 1 },
    { k: "choice", q: "I have the tickets. I ___ to London next week.", opts: ["flying", "am going to fly", "fly"], a: 1, why: "Chiptalar bor — oldindan reja → **going to**." },
    { k: "choice", q: "It's cold in here. — OK, I ___ the window.", opts: ["close", "'ll close", "closed", "am closing yesterday"], a: 1, why: "Hozir qaror → **I'll close**." },
    { k: "fill", q: "Don't worry, I ___ tell your mother.", a: ["won't", "will not"], uz: "Xavotir olmang, onangizga aytmayman.", why: "Va'da (inkor) → **won't**." },
    { k: "fill", q: "I think he will ___ late. (be)", a: ["be"], why: "**will** + V1 → *will be*." },
    { k: "fill", q: "___ you help me, please?", a: ["Will", "Can", "Could", "Would"], uz: "Menga yordam berasizmi, iltimos?" },
    { k: "tf", q: "**He will goes to school.** — to'g'ri gap.", a: false, why: "**will** dan keyin V1: *He will **go**.*" },
    { k: "order", uz: "Men sizga keyinroq qo'ng'iroq qilaman.", words: ["I'll", "call", "you", "later"], extra: ["calling"] },
    { k: "order", uz: "Menimcha, u tez orada keladi.", words: ["I", "think", "she", "will", "come", "soon"], extra: ["comes"] },
    { k: "translate", uz: "Ular ertaga kelmaydi.", a: ["They won't come tomorrow", "They will not come tomorrow", "Tomorrow they won't come", "Tomorrow they will not come", "Tomorrow, they won't come", "Tomorrow, they will not come"] },
    { k: "translate", uz: "Balki men shifokor bo'laman.", a: ["Maybe I'll be a doctor", "Maybe I will be a doctor", "Maybe I'll become a doctor", "Maybe I will become a doctor"] },
    { k: "speak", say: "I promise I'll help you tomorrow.", uz: "Va'da beraman, ertaga sizga yordam beraman." },
  ],
  quiz: [
    { k: "listen", say: "We'll probably stay at home.", opts: ["We probably stayed at home.", "We're probably at home.", "We'll probably stay at home."], a: 2 },
    { k: "listen", say: "I want to go.", opts: ["I won't go.", "I want to go.", "I will go."], a: 1, why: "\"wont tə\" — **want to** (xohlayman). *won't* esa \"wount\"." },
    { k: "fill", q: "Next year I ___ twenty.", a: ["will be", "'ll be"], uz: "Kelasi yil men yigirma yoshda bo'laman." },
    { k: "fill", q: "I don't think it ___ rain tomorrow.", a: ["will"] },
    { k: "choice", q: "Look at the sky! It ___.", opts: ["will rain", "is going to rain", "rains"], a: 1, why: "Dalil ko'z oldimizda → **going to**." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I will to call you.", "I will calling you.", "I will call you.", "I wills call you."], a: 2 },
    { k: "translate", uz: "Men keyinroq qaror qilaman.", a: ["I'll decide later", "I will decide later"] },
    { k: "translate", uz: "Menga yordam berasizmi?", a: ["Will you help me", "Can you help me", "Could you help me", "Would you help me"] },
    { k: "order", uz: "Umid qilamanki, siz tez orada kelasiz.", words: ["I", "hope", "you", "will", "come", "soon"], extra: ["are", "to"] },
    { k: "tf", q: "*Tea or coffee?* — **I'll have tea, please.** Bu shu zahoti qilingan qaror.", a: true },
  ],
  summary: [
    "**will + V1** (hamma shaxsga bir xil): *I'll help. He won't come. Will you…?*",
    "will — **shu zahoti qaror, va'da, taklif, fikr**: *I'll close the window. I promise I'll call.*",
    "Fikr bilan: **I think / maybe / probably / I hope** + will.",
    "**going to** — oldindan reja yoki ko'z oldingizdagi dalil; **will** — hozirgi qaror yoki shunchaki fikr.",
    "Talaffuz: **won't** \"wount\" ≠ **want** \"wont\".",
  ],
  homework: "3 ta va'da yozing (*I promise I'll…*) va kelajagingiz haqida 4 ta fikr bildiring (*I think I'll… / Maybe I'll… / I hope…*). Keyin bitta *going to* rejasi va bitta *will* qarori bilan qisqa dialog tuzing.",
};

export default lesson;
