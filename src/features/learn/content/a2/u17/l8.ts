import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l8",
  title: "A2 final review",
  titleUz: "A2 yakuniy takrori: hamma zamonlar va modal fe'llar",
  goal: "Pre-Intermediate darajasini yakunlaysiz: **o'tgan zamon** (*Past Simple, Past Continuous, used to*), **kelajak** (*going to, will, might, if*), **taqqoslash**, **modal fe'llar** (*must, should, can, could*), **Present Perfect, passive** va **fe'l qoliplari** — hammasini bitta matn va aralash mashqlarda qo'llaysiz.",
  slides: [
    {
      title: "Takror 1: o'tgan zamon",
      blocks: [
        {
          t: "table", head: ["Shakl", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Past Simple", "V2 / did + V1", "I visited Bukhara. Did you go?"],
            ["Past Continuous", "was / were + -ing", "I was cooking when you called."],
            ["used to", "used to + V1 (avval shunday edi)", "I used to live in Samarkand."],
            ["Present Perfect", "have / has + V3", "I've lost my phone."],
          ],
        },
        { t: "tip", tone: "info", md: "**When** + Past Simple (qisqa voqea), **while** + Past Continuous (uzoq jarayon): *I was cooking **when** you called. I called **while** he was sleeping.*" },
        { t: "check", ex: { k: "choice", q: "**I ___ TV when the phone rang.**", opts: ["watched", "was watching", "have watched", "watch"], a: 1 } },
      ],
    },
    {
      title: "Takror 2: kelajak va shart",
      blocks: [
        {
          t: "table", head: ["Qachon", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Reja, niyat", "going to + V1", "I'm going to study English tonight."],
            ["Kelishilgan reja", "Present Continuous", "We're meeting at six."],
            ["Qaror, va'da", "will + V1", "I'll help you."],
            ["Ehtimol", "might + V1", "It might rain."],
            ["Shart", "if + Present, will + V1", "If it rains, we'll stay at home."],
          ],
        },
        { t: "compare", good: { title: "To'g'ri", items: ["If it rains, we'll stay at home.", "I'll call you tomorrow."] }, bad: { title: "Xato", items: ["If it will rain, we stay at home.", "I will to call you tomorrow."] } },
        { t: "check", ex: { k: "fill", q: "If you ___ hard, you'll pass the exam. (study)", a: ["study"], why: "**if** dan keyin Present Simple, **will** yo'q." } },
      ],
    },
    {
      title: "Takror 3: taqqoslash va modal fe'llar",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Qoida", "Misol"], speak: [2],
          rows: [
            ["Qiyosiy", "-er / more … than", "Tashkent is bigger than Bukhara."],
            ["Orttirma", "the -est / the most", "It's the most beautiful city."],
            ["as … as", "teng daraja", "He's as tall as his father."],
            ["must / have to", "majburiyat", "You must wear a seat belt."],
            ["should", "maslahat", "You should drink more water."],
            ["Could you…?", "muloyim iltimos", "Could you open the window?"],
          ],
        },
        { t: "tip", tone: "warn", md: "**mustn't** = taqiqlangan; **don't have to** = shart emas. *You mustn't smoke here* (mumkin emas) ≠ *You don't have to come* (kelishingiz shart emas)." },
        { t: "check", ex: { k: "choice", q: "**You ___ park here. It's forbidden.**", opts: ["don't have to", "mustn't", "needn't", "shouldn't have"], a: 1 } },
      ],
    },
    {
      title: "Takror 4: passive, who / which, fe'l qoliplari",
      blocks: [
        {
          t: "examples", items: [
            { en: "The window was broken yesterday.", uz: "Deraza kecha sindirilgan.", note: "Passive: **be + V3**." },
            { en: "The man who lives next door is a dentist.", uz: "Qo'shnimiz — tish shifokori.", note: "**who / which / that / where**." },
            { en: "I enjoy learning English, and I want to speak fluently.", uz: "Ingliz tilini o'rganishni yoqtiraman va ravon gapirmoqchiman.", note: "**enjoy + -ing**, **want + to + V1**." },
            { en: "I've lived here for ten years.", uz: "Men bu yerda o'n yildan beri yashayman.", note: "**for** + muddat, **since** + boshlanish." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "**I want ___ a doctor.**", opts: ["being", "to be", "be", "to being"], a: 1 } },
        { t: "check", ex: { k: "fill", q: "She enjoys ___ plov. (cook)", a: ["cooking"], why: "**enjoy** + **-ing**." } },
      ],
    },
    {
      title: "O'qing: Laylo va ingliz tili",
      blocks: [
        {
          t: "text", title: "Laylo's English journey",
          en: "A year ago, Laylo could only say a few words in English. She used to feel shy when foreigners asked her for directions. One day she decided to change that. She studied for fifteen minutes every day, and she was learning new words while she was travelling to work. If she makes a mistake, she doesn't give up — she tries again. Her English is much better now than it was a year ago, but she knows she must keep practising. Next month she is going to visit London with her sister. She has never been abroad before, so she might be a little nervous, but she is sure everything will be fine. 'You should try to speak as much as you can,' she tells her friends. 'It's the best way to improve.'",
          uz: "Bir yil oldin Laylo inglizcha faqat bir nechta so'z aytolardi. Chet elliklar undan yo'l so'raganda u uyalib ketardi. Bir kuni u buni o'zgartirishga qaror qildi. U har kuni o'n besh daqiqa o'qidi va ishga ketayotganda yangi so'zlar o'rgandi. Xato qilsa, taslim bo'lmaydi — yana urinadi. Hozir uning ingliz tili bir yil oldingiga qaraganda ancha yaxshi, lekin u mashq qilishda davom etishi kerakligini biladi. Keyingi oy u opasi bilan Londonga boradi. U hech qachon chet elda bo'lmagan, shuning uchun biroz hayajonlanishi mumkin, lekin hammasi yaxshi bo'lishiga ishonadi. «Imkon qadar ko'p gapirishga harakat qilishing kerak, — deydi u do'stlariga. — Bu yaxshilanishning eng yaxshi yo'li.»",
        },
        { t: "check", ex: { k: "tf", q: "Laylo has been to London before.", a: false, why: "*She has never been abroad before.*" } },
        { t: "check", ex: { k: "choice", q: "What does Laylo do when she makes a mistake?", opts: ["She gives up.", "She tries again.", "She stops studying.", "She asks her sister."], a: 1, why: "*She doesn't give up — she tries again.*" } },
        { t: "check", ex: { k: "choice", q: "What does 'used to feel shy' mean?", opts: ["She feels shy now.", "She felt shy in the past, but not any more.", "She is going to feel shy.", "She was feeling shy at that moment."], a: 1, why: "**used to** — o'tmishdagi odat/holat, hozir emas." } },
      ],
    },
  ],
  words: [
    { en: "improve", uz: "yaxshilanmoq, yaxshilamoq", ipa: "ɪmˈpruːv", pos: "verb", ex: "I want to improve my English.", exUz: "Ingliz tilimni yaxshilamoqchiman." },
    { en: "progress", uz: "taraqqiyot, o'sish", ipa: "ˈprəʊɡres", pos: "noun", ex: "You are making good progress.", exUz: "Siz yaxshi o'sib borayapsiz." },
    { en: "achieve", uz: "erishmoq", ipa: "əˈtʃiːv", pos: "verb", ex: "She achieved her goal.", exUz: "U maqsadiga erishdi." },
    { en: "confidence", uz: "o'ziga ishonch", ipa: "ˈkɒnfɪdəns", pos: "noun", ex: "Speaking gives you confidence.", exUz: "Gapirish sizga ishonch beradi." },
    { en: "fluent", uz: "ravon", ipa: "ˈfluːənt", pos: "adj", ex: "He speaks fluent English.", exUz: "U ravon inglizcha gapiradi." },
    { en: "vocabulary", uz: "lug'at boyligi", ipa: "vəˈkæbjələri", pos: "noun", ex: "I learn ten new words every day to build my vocabulary.", exUz: "Lug'atimni boyitish uchun har kuni o'nta yangi so'z o'rganaman." },
    { en: "mistake", uz: "xato", ipa: "mɪˈsteɪk", pos: "noun", ex: "Don't be afraid of mistakes.", exUz: "Xatolardan qo'rqmang." },
    { en: "memorise", uz: "yodlamoq", ipa: "ˈmeməraɪz", pos: "verb", ex: "I memorise new words with pictures.", exUz: "Yangi so'zlarni rasmlar bilan yodlayman." },
    { en: "keep going", uz: "davom etmoq, to'xtamaslik", ipa: "kiːp ˈɡəʊɪŋ", pos: "phrase", ex: "It's difficult, but keep going!", exUz: "Qiyin, lekin to'xtamang!" },
    { en: "nervous", uz: "hayajonlangan, asabiy", ipa: "ˈnɜːvəs", pos: "adj", ex: "I feel nervous before exams.", exUz: "Imtihondan oldin hayajonlanaman." },
  ],
  practice: [
    { k: "match", pairs: [["used to", "avval shunday edi"], ["going to", "reja"], ["might", "ehtimol"], ["must", "majburiyat"], ["should", "maslahat"]] },
    { k: "match", pairs: [["improve", "yaxshilamoq"], ["achieve", "erishmoq"], ["mistake", "xato"], ["fluent", "ravon"], ["nervous", "hayajonlangan"]] },
    { k: "listen", say: "I was cooking when you called.", opts: ["I was cooking when you called.", "I cooked when you called.", "I was cooking while you call."], a: 0 },
    { k: "listen", say: "If it rains, we'll stay at home.", opts: ["If it rains, we'll stay at home.", "If it will rain, we stay at home.", "If it rained, we stayed at home."], a: 0 },
    { k: "choice", q: "**She ___ in Samarkand when she was a child.**", opts: ["used to live", "uses to live", "is used to live", "lives"], a: 0 },
    { k: "choice", q: "**This is ___ film I've ever seen.**", opts: ["the better", "the best", "better", "more good"], a: 1 },
    { k: "choice", q: "**You ___ see a doctor. You look ill.**", opts: ["must to", "should", "can to", "mustn't"], a: 1 },
    { k: "choice", q: "**___ you open the window, please?**", opts: ["Could", "Do", "Are", "Will to"], a: 0 },
    { k: "choice", q: "**Plov ___ in many countries.**", opts: ["is eaten", "eats", "is eating", "was eat"], a: 0 },
    { k: "fill", q: "We ___ going to visit Bukhara next week. (be)", a: ["are", "'re"], uz: "Keyingi hafta Buxoroga bormoqchimiz." },
    { k: "fill", q: "I've been a teacher ___ 2015.", a: ["since"] },
    { k: "fill", q: "He ___ have to come. It's optional. (shart emas)", a: ["doesn't"], why: "**doesn't have to** — shart emas." },
    { k: "order", uz: "Agar yomg'ir yog'sa, biz uyda qolamiz.", words: ["If", "it", "rains,", "we'll", "stay", "at", "home."], extra: ["will", "rain"] },
    { k: "translate", uz: "Men ingliz tilini o'rganishni yoqtiraman.", a: ["I enjoy learning English.", "I like learning English.", "I love learning English."] },
    { k: "translate", uz: "Siz ko'proq mashq qilishingiz kerak.", a: ["You should practise more.", "You should practice more.", "You must practise more.", "You need to practise more."] },
    { k: "speak", say: "It's the best way to improve.", uz: "Bu yaxshilanishning eng yaxshi yo'li." },
  ],
  quiz: [
    { k: "choice", q: "**I ___ dinner when the lights went out.**", opts: ["had", "was having", "have had", "am having"], a: 1 },
    { k: "choice", q: "**Tashkent is ___ than Bukhara.**", opts: ["big", "bigger", "the biggest", "more big"], a: 1 },
    { k: "choice", q: "**You ___ smoke here. It's forbidden.**", opts: ["don't have to", "mustn't", "needn't", "can to"], a: 1 },
    { k: "choice", q: "**I'd like ___ a glass of water.**", opts: ["have", "having", "to have", "to having"], a: 2 },
    { k: "choice", q: "**The film ___ we saw was long.**", opts: ["who", "that", "where", "what"], a: 1 },
    { k: "choice", q: "**She ___ to London next month.** (reja)", opts: ["is going to fly", "flies yesterday", "has flown", "flew"], a: 0 },
    { k: "fill", q: "If I ___ time, I'll call you. (have)", a: ["have"] },
    { k: "fill", q: "My bag ___ stolen last week. (be)", a: ["was"] },
    { k: "order", uz: "U hech qachon chet elda bo'lmagan.", words: ["She", "has", "never", "been", "abroad."], extra: ["gone", "ever"], alt: [["She's", "never", "been", "abroad."]] },
    { k: "tf", q: "**I used to feel shy** = Hozir ham uyalaman.", a: false, why: "**used to** — o'tmishdagi holat, endi yo'q." },
    { k: "listen", say: "You should try to speak as much as you can.", opts: ["You should try to speak as much as you can.", "You must try to speak as much as you can.", "You should try to speak as much as I can."], a: 0 },
  ],
  summary: [
    "**Past Simple** (tugagan), **Past Continuous** (jarayon), **used to** (eski odat), **Present Perfect** (tajriba, natija, for / since).",
    "Kelajak: **going to** (reja), **will** (qaror), **Present Continuous** (kelishilgan), **might** (ehtimol), **if + Present, will**.",
    "Taqqoslash: **-er / more … than**, **the -est / the most**, **as … as**, **too / enough**.",
    "Modal fe'llar: **must, mustn't, don't have to, should, can, could**; muloyim iltimos — **Could you…? Would you like…?**",
    "Passive (**be + V3**), **who / which / that / where**, fe'l qoliplari (**enjoy -ing**, **want to**).",
  ],
  homework: "Pre-Intermediate'ni yakunlash uchun 10 gapdan iborat o'zingiz haqingizdagi matn yozing: o'tmishingiz, hozirgi rejalaringiz, orzularingiz. Kamida bitta *used to*, bitta *if* gapi, bitta taqqoslash va bitta modal fe'l ishlating. Keyin yakuniy daraja testini topshiring.",
};

export default lesson;
