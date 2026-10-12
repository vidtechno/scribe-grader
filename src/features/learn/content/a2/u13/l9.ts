import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l9",
  title: "Making weekend plans with friends",
  titleUz: "Do'stlar bilan dam olish rejalarini tuzish",
  mini: true,
  kind: 'situation',
  goal: "Do'stlaringiz bilan **dam olish kunlari rejasini** tuza olasiz: nima qilmoqchi ekaningizni aytasiz (*going to*), kelishilgan rejani aytasiz (*I'm meeting…*), **taklif qilasiz** va taklifni **qabul qilasiz** yoki **rad etasiz**.",
  slides: [
    {
      title: "Dialog: shanba kuni nima qilamiz?",
      blocks: [
        { t: "p", md: "Laylo va Aziz dam olish kuni haqida gaplashmoqda. Qaysi gaplar **reja**, qaysilari **taklif** ekaniga e'tibor bering." },
        {
          t: "dialog", lines: [
            { who: "Laylo", en: "What are you going to do this weekend, Aziz?", uz: "Aziz, bu dam olish kuni nima qilmoqchisan?" },
            { who: "Aziz", en: "I'm going to stay in on Saturday. I'm a bit lazy this week!", uz: "Shanba kuni uyda qolmoqchiman. Bu hafta biroz dangasa kayfiyatdaman!" },
            { who: "Laylo", en: "Why don't you join us? We're having a barbecue at the lake.", uz: "Nega bizga qo'shilmaysan? Biz ko'l bo'yida barbekyu qilmoqchimiz." },
            { who: "Aziz", en: "That sounds great! What time are you meeting?", uz: "Zo'r eshitilyapti! Soat nechada uchrashasizlar?" },
            { who: "Laylo", en: "We're meeting at twelve outside the metro. Shall I bring some drinks?", uz: "Soat o'n ikkida metro oldida uchrashamiz. Ichimliklar olib kelaymi?" },
            { who: "Aziz", en: "Yes, please. See you on Saturday!", uz: "Ha, iltimos. Shanba kuni ko'rishamiz!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is Aziz going to do before Laylo invites him?", opts: ["Go to the lake", "Stay in", "Play tennis", "Hang out with Kamol"], a: 1, why: "Aziz: *I'm going to stay in on Saturday.*" } },
      ],
    },
    {
      title: "Reja: going to yoki Present Continuous?",
      blocks: [
        {
          t: "table", head: ["Qolip", "Misol", "Qachon"], speak: [1],
          rows: [
            ["am / is / are + going to + V1", "I'm going to stay in on Sunday.", "umumiy niyat, reja"],
            ["am / is / are + V-ing + vaqt", "We're meeting at twelve.", "vaqti va joyi kelishilgan"],
            ["Are you going to…? / Are you …ing…?", "Are you going to hang out with Kamol?", "savol"],
          ],
        },
        {
          t: "examples", items: [
            { en: "I'm going to be lazy all weekend.", uz: "Butun dam olish kuni dangasa bo'lmoqchiman." },
            { en: "Dilnoza is playing tennis with me at six.", uz: "Dilnoza men bilan soat oltida tennis o'ynaydi (kelishilgan)." },
            { en: "We aren't going to watch the match.", uz: "Biz o'yinni tomosha qilmoqchi emasmiz." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["We're having a barbecue on Saturday.", "Are you going to join us?"] },
          bad: { title: "Xato", items: ["We having a barbecue on Saturday.", "Do you going to join us?"] },
        },
        { t: "check", ex: { k: "fill", q: "Laylo and her friends ___ a barbecue on Saturday. (have — kelishilgan reja)", a: ["are having", "'re having"], why: "Kelishilgan reja + vaqt: **are having**." } },
      ],
    },
    {
      title: "Taklif, qabul va rad etish",
      blocks: [
        {
          t: "table", head: ["Vazifa", "Misol"], speak: [1],
          rows: [
            ["Taklif", "Why don't you join us? / Would you like to come? / How about going to the lake?"],
            ["Qabul", "That sounds great! / I'd love to!"],
            ["Rad etish", "Thanks, but I'm afraid I can't. I'm visiting my grandparents."],
            ["Boshqa vaqt", "Maybe another time?"],
          ],
        },
        { t: "tip", tone: "warn", md: "Rad etayotganda sababini ayting va **but** ishlating — shunda xushmuomala chiqadi. *No, I don't want.* ❌ juda qo'pol eshitiladi." },
        { t: "check", ex: { k: "choice", q: "Kamol: *Would you like to come to the match with me?* Qaysi javob xushmuomala **rad etish**?", opts: ["No.", "I'd love to, but I'm helping my uncle. Maybe another time?", "That sounds great!", "I'm going to the match."], a: 1, why: "**I'd love to, but…** + sabab — xushmuomala rad etish." } },
      ],
    },
  ],
  words: [
    { en: "hang out", uz: "vaqt o'tkazmoq, aylanib yurmoq", ipa: "hæŋ aʊt", pos: "phrase", ex: "I often hang out with my friends on Saturday.", exUz: "Men shanba kuni ko'pincha do'stlarim bilan vaqt o'tkazaman." },
    { en: "stay in", uz: "uyda qolmoq", ipa: "steɪ ɪn", pos: "phrase", ex: "It's cold, so we're going to stay in.", exUz: "Havo sovuq, shuning uchun uyda qolamiz." },
    { en: "barbecue", uz: "barbekyu, ochiq havoda kabob", ipa: "ˈbɑː.bɪ.kjuː", pos: "noun", ex: "We're having a barbecue by the lake.", exUz: "Biz ko'l bo'yida barbekyu qilamiz." },
    { en: "lazy", uz: "dangasa", ipa: "ˈleɪ.zi", pos: "adj", ex: "I feel lazy today.", exUz: "Bugun o'zimni dangasa his qilyapman." },
    { en: "join", uz: "qo'shilmoq", ipa: "dʒɔɪn", pos: "verb", ex: "Would you like to join us?", exUz: "Bizga qo'shilishni xohlaysizmi?" },
    { en: "match", uz: "o'yin, musobaqa", ipa: "mætʃ", pos: "noun", ex: "Are you going to watch the match tonight?", exUz: "Bugun kechqurun o'yinni tomosha qilasizmi?" },
  ],
  practice: [
    { k: "match", pairs: [["hang out", "vaqt o'tkazmoq"], ["stay in", "uyda qolmoq"], ["lazy", "dangasa"], ["join", "qo'shilmoq"], ["match", "o'yin"]] },
    { k: "choice", q: "What ___ you going to do on Sunday?", opts: ["do", "are", "will to", "is"], a: 1, why: "**are you going to** — *do* kerak emas." },
    { k: "fill", q: "We ___ hanging out at the lake at twelve. (kelishilgan reja)", a: ["are", "'re"], why: "Present Continuous: **we are hanging out**." },
    { k: "order", uz: "Nega bizga qo'shilmaysan?", words: ["Why", "don't", "you", "join", "us", "?"], extra: ["to"] },
    { k: "choice", q: "\"Zo'r eshitilyapti!\" — qaysi iborani aytasiz?", opts: ["That sounds great!", "I'm afraid I can't.", "Maybe another time?", "I'm lazy."], a: 0 },
    { k: "fix", wrong: "Are you going to joining us on Saturday?", a: ["Are you going to join us on Saturday?"], why: "**going to + V1**: *join*." },
    { k: "translate", uz: "Shanba kuni uyda qolmoqchiman.", a: ["I'm going to stay in on Saturday.", "I am going to stay in on Saturday.", "I'm going to stay in on Saturday", "On Saturday I'm going to stay in."], why: "**I'm going to stay in**." },
    { k: "choice", q: "Kamol invites you, but you are busy. What do you say?", opts: ["I'd love to, but I'm seeing my cousin. Maybe another time?", "No, I don't want.", "Yes, I'm lazy.", "I'm going to the match."], a: 0 },
    { k: "tf", q: "**We're having a barbecue on Saturday** — bu kelishilgan reja.", a: true, why: "Present Continuous + vaqt = kelishilgan reja." },
    { k: "fill", q: "How about ___ to the lake? (go)", a: ["going"], why: "**How about + V-ing**." },
    { k: "listen", say: "Shall I bring some drinks?", opts: ["Shall I bring some drinks?", "Shall we bring some drinks?", "Should I bring some drinks?", "Will I bring some drinks?"], a: 0 },
    { k: "translate", uz: "Soat o'n ikkida metro oldida uchrashamiz.", a: ["We're meeting at twelve outside the metro.", "We are meeting at twelve outside the metro.", "We're meeting outside the metro at twelve.", "We are meeting outside the metro at twelve."], why: "Kelishilgan reja: **we're meeting**." },
  ],
  quiz: [
    { k: "choice", q: "Laylo: *Are you free on Saturday?* Aziz: ___", opts: ["I'm going to stay in. Why?", "Yes, I free.", "I stay in not.", "No, I'm go to stay."], a: 0 },
    { k: "fill", q: "My friends and I ___ going to hang out on Sunday. (to be)", a: ["are", "'re"] },
    { k: "choice", q: "Which sentence is correct?", opts: ["We having a barbecue on Saturday.", "We're having a barbecue on Saturday.", "We having barbecue to Saturday.", "We do having a barbecue on Saturday."], a: 1 },
    { k: "fix", wrong: "Why don't we to go to the lake?", a: ["Why don't we go to the lake?"], why: "**Why don't we + V1**." },
    { k: "order", uz: "Bu dam olish kuni nima qilmoqchisiz?", words: ["What", "are", "you", "going", "to", "do", "this", "weekend", "?"], extra: ["will"] },
    { k: "choice", q: "\"I'd love to, but I can't\" — nima ma'noni anglatadi?", opts: ["Xursand bo'lardim, lekin kela olmayman.", "Albatta kelaman.", "Menga yoqmaydi.", "Ertaga kelaman."], a: 0 },
    { k: "translate", uz: "Biz o'yinni tomosha qilmoqchi emasmiz.", a: ["We aren't going to watch the match.", "We're not going to watch the match.", "We are not going to watch the match."] },
  ],
  summary: [
    "Niyat va reja: **am / is / are + going to + V1** (*I'm going to stay in*).",
    "Vaqti va joyi kelishilgan reja: **Present Continuous** (*We're meeting at twelve*).",
    "Taklif: **Why don't you join us? / Would you like to…? / How about going…?**",
    "Qabul: **That sounds great! / I'd love to!** Rad etish: **I'd love to, but… Maybe another time?**",
  ],
  homework: "Keyingi dam olish kuni uchun do'stingizga 3 ta gap yozing: bittasi *going to* bilan, bittasi *Present Continuous* bilan va bittasi taklif (*Why don't you join us?*). Keyin bitta taklifni xushmuomala rad etib ko'ring.",
};

export default lesson;
