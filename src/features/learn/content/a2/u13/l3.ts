import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l3",
  title: "Will or going to?",
  titleUz: "Will yoki going to? Shall bilan taklif",
  goal: "**will** va **going to** farqini bilib, vaziyatga qarab to'g'ri birini tanlaysiz hamda **Shall I…?** va **Shall we…?** bilan yordam taklif qilasiz va birgalikda ish qilishni taklif etasiz.",
  slides: [
    {
      title: "Ikkita yo'l — ikki xil ma'no",
      blocks: [
        { t: "p", md: "Ikkalasi ham kelajak haqida, lekin **qaror qachon qabul qilingan** va **taxminning asosi nima** — mana shu farq qiladi:" },
        {
          t: "table", head: ["", "going to", "will"], speak: [],
          rows: [
            ["Qaror", "oldindan qilingan reja", "shu zahoti qilingan qaror"],
            ["Taxmin", "hozir ko'rinib turgan dalil bor", "dalil yo'q, fikr / ishonch"],
            ["Va'da, taklif", "—", "I'll help you. I won't tell."],
            ["Signal so'zlar", "already, Look!, I've decided", "I think, probably, OK, maybe"],
          ],
        },
        { t: "tip", tone: "good", md: "Oddiy qoida: **reja yoki dalil bor → going to. Hozir o'ylab topdim, fikr yoki va'da → will.**" },
        { t: "check", ex: { k: "choice", q: "\"Men allaqachon qaror qildim: shifokor bo'laman.\"", opts: ["I'll be a doctor.", "I'm going to be a doctor.", "I be going to doctor.", "I will to be a doctor."], a: 1, why: "Qaror **oldindan** qabul qilingan → **going to**." } },
      ],
    },
    {
      title: "Bir vaziyat, ikki gap",
      blocks: [
        { t: "p", md: "Bir xil harakat haqida ham gapirish mumkin — ma'no **qaror vaqtiga** bog'liq:" },
        {
          t: "examples", items: [
            { en: "I'm going to buy a laptop. I've saved $500.", uz: "Noutbuk sotib olmoqchiman. 500 dollar yig'dim.", note: "Reja bor, pul yig'ilgan." },
            { en: "That laptop is cheap. I'll buy it!", uz: "Bu noutbuk arzon ekan. Olaman!", note: "Do'konda shu zahoti qaror qildi." },
            { en: "We're going to have a party on Saturday. Everybody knows.", uz: "Shanba kuni ziyofat qilamiz. Hamma biladi.", note: "Reja." },
            { en: "We have no drinks. — I'll go to the shop.", uz: "Ichimlik yo'q. — Do'konga boraman.", note: "Muammoga javoban shu zahoti taklif." },
          ],
        },
        { t: "tip", tone: "info", md: "Telefon chalinsa, **\"Men olaman\"** — *I'll get it*. Ertaga ketishingiz uchun chipta olgan bo'lsangiz — *I'm going to fly to Moscow tomorrow.* Birinchisi — o'sha soniya qarori, ikkinchisi — oldindan tayyorlangan reja." },
        { t: "check", ex: { k: "choice", q: "**Someone is knocking at the door.** — **OK, I ___ open it.**", opts: ["will", "am going to open", "was going to", "am opening"], a: 0, why: "Shu zahoti qaror → **I'll open**." } },
      ],
    },
    {
      title: "Dalil yoki fikr?",
      blocks: [
        { t: "p", md: "Taxmin qilganda o'zingizga savol bering: **men buni ko'ryapmanmi yoki shunchaki o'ylayapmanmi?**" },
        {
          t: "compare",
          good: { title: "going to (dalil bor)", items: ["Look at the sky! It's going to rain.", "She's holding a bucket. She's going to wash the car."] },
          bad: { title: "will (fikr, dalil yo'q)", items: ["I think it will rain tomorrow.", "I'm sure you'll love Bukhara."] },
        },
        {
          t: "table", head: ["Siz ko'rasiz / bilasiz", "Gap"], speak: [1],
          rows: [
            ["Qora bulutlar", "It's going to rain."],
            ["Yerda uzun navbat", "We're going to wait for ages."],
            ["Hech narsa ko'rmaysiz, shunchaki fikr", "I think it'll be a nice day."],
            ["Bilmaysiz, taxmin qilasiz", "The test will probably be easy."],
          ],
        },
        { t: "tip", tone: "info", md: "Amalda ikkala shakl ba'zan almashadi, ayniqsa taxminda — inglizlar xato deb o'ylamaydi. Lekin **shu zahoti qaror (will)** va **oldindan reja (going to)** farqini chalkashtirmang — shu eng ko'p yo'l qo'yiladigan xato." },
        { t: "check", ex: { k: "tf", q: "**I think it will be sunny tomorrow** — bu fikr, shuning uchun **will** mos.", a: true } },
      ],
    },
    {
      title: "O'zbek tilida o'ylashdan xatolar",
      blocks: [
        { t: "p", md: "O'zbek tilida \"qilaman\" bitta shakl — oldindan rejani ham, shu zahoti qarorni ham bildiradi. Inglizchada ularni **ajratish** kerak. Eng ko'p xatolar:" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've booked a hotel. We're going to stay in Khiva. (reja)", "It's hot. I'll open the window. (shu zahoti)", "What are you going to do tonight?"] },
          bad: { title: "Xato", items: ["I've booked a hotel. We'll stay in Khiva. (reja bo'lsa g'alati)", "It's hot. I'm going to open the window. (oldindan o'ylamagan)", "What will you going to do tonight?"] },
        },
        { t: "tip", tone: "warn", md: "**will** va **going to** ni **birga** ishlatmang: *will going to* ❌. Faqat bittasi: *will go* yoki *is going to go*." },
        { t: "check", ex: { k: "choice", q: "**I've bought the tickets. We ___ fly to Dubai on Monday.**", opts: ["will fly", "are going to fly", "are fly", "will going to fly"], a: 1, why: "Chiptalar allaqachon olingan → reja → **going to**." } },
      ],
    },
    {
      title: "Shall I…? Shall we…?",
      blocks: [
        { t: "p", md: "**Shall** — **faqat I va we** bilan, **savol gapda** ishlatiladi. U ikki vazifani bajaradi: **yordam taklif qilish** (*Shall I…?*) va **birgalikda ish qilishni taklif qilish** (*Shall we…?*). Ma'nosi: \"…aymi? / …amizmi?\"" },
        {
          t: "table", head: ["Qolip", "Vazifa", "Misol"], speak: [2],
          rows: [
            ["Shall I + V1?", "taklif (yordam)", "Shall I open the window?"],
            ["Shall I + V1?", "taklif", "Shall I carry your bag?"],
            ["Shall we + V1?", "taklif (birga qilaylik)", "Shall we go to the cinema?"],
            ["Shall we + V1?", "taklif", "Shall we have lunch at the chaikhana?"],
          ],
        },
        {
          t: "table", head: ["Javob (rozi)", "Javob (rad)"], speak: [0, 1],
          rows: [
            ["Yes, please. / Thanks, that would be great.", "No, thanks. I'm fine."],
            ["Good idea! / Yes, let's.", "I'd rather not. / Sorry, I can't."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Shall** faqat **I / we** bilan: *Shall I…? Shall we…?* **Shall he…?** va **Shall you…?** — ishlatilmaydi. Shuningdek *Shall I to open…?* ❌ — **to** yo'q." },
        { t: "check", ex: { k: "choice", q: "Do'stingiz bilan kino ko'rishni taklif qiling:", opts: ["Shall we go to the cinema?", "Shall you go to the cinema?", "Shall we to go to the cinema?", "Do we shall go to the cinema?"], a: 0 } },
      ],
    },
    {
      title: "Dialog: Samarqandga sayohat",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "We're going to visit Samarkand next month. I've already booked the train.", uz: "Kelasi oy Samarqandga boramiz. Poyezdga allaqachon joy band qilganman." },
            { who: "Laylo", en: "Great! Shall I look for a hotel?", uz: "Zo'r! Mehmonxona qidiraymi?" },
            { who: "Aziz", en: "Yes, please. Oh, and we need a guide. — Hmm, I'll ask my cousin. He knows the city.", uz: "Ha, iltimos. Ha, yana gid kerak. — Hmm, amakivachchamdan so'rayman. U shaharni biladi." },
            { who: "Laylo", en: "Good idea. Shall we meet tomorrow to plan everything?", uz: "Yaxshi fikr. Hammasini rejalashtirish uchun ertaga uchrashamizmi?" },
            { who: "Aziz", en: "Sure. I think it will be a great trip!", uz: "Albatta. Menimcha, ajoyib sayohat bo'ladi!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Aziz say \"I'll ask my cousin\"?", opts: ["He decides it at that moment.", "It was his plan for a long time.", "His cousin asked him.", "He doesn't want a guide."], a: 0, why: "Gapirayotib qaror qildi → **will**." } },
        { t: "check", ex: { k: "tf", q: "Aziz has already booked the train.", a: true, why: "*I've already booked the train.*" } },
      ],
    },
    {
      title: "O'qing: Ish kuni",
      blocks: [
        {
          t: "text", title: "A busy Saturday",
          en: "Kamol is going to clean the flat on Saturday. His friends are coming for dinner at seven and he has planned everything. He's going to make shashlik, and Dilnoza is going to bring a cake.\nAt noon, Kamol opens the fridge. There is no bread! \"I'll go to the shop,\" he says. On the way, he sees dark clouds. \"It's going to rain! I'll take an umbrella.\" At the shop, a friend calls him. \"Shall I bring some drinks?\" asks Aziz. \"Yes, please,\" says Kamol. \"I think it will be a great evening.\"",
          uz: "Kamol shanba kuni kvartirani tozalamoqchi. Do'stlari soat yettida kechki ovqatga kelishadi va u hammasini rejalashtirgan. U shashlik qiladi, Dilnoza esa tort olib keladi.\nTushda Kamol muzlatgichni ochadi. Non yo'q! \"Do'konga boraman,\" deydi u. Yo'lda qora bulutlarni ko'radi. \"Yomg'ir yog'adi! Soyabon olaman.\" Do'konda do'sti qo'ng'iroq qiladi. \"Ichimliklar olib kelaymi?\" deb so'raydi Aziz. \"Ha, iltimos,\" deydi Kamol. \"Menimcha, ajoyib kechqurun bo'ladi.\"",
        },
        { t: "check", ex: { k: "tf", q: "Kamol planned in advance to make shashlik.", a: true, why: "*He's going to make shashlik* — oldindan reja." } },
        { t: "check", ex: { k: "choice", q: "Why does Kamol say \"It's going to rain!\"?", opts: ["He sees dark clouds.", "He has a plan.", "He heard it on TV.", "It is already raining."], a: 0 } },
      ],
    },
  ],
  words: [
    { en: "decision", uz: "qaror", ipa: "dɪˈsɪʒn", pos: "noun", ex: "It's a difficult decision.", exUz: "Bu qiyin qaror." },
    { en: "offer", uz: "taklif qilmoq (yordam)", ipa: "ˈɒfə", pos: "verb", ex: "She offered to help.", exUz: "U yordam berishni taklif qildi." },
    { en: "suggest", uz: "taklif qilmoq, maslahat bermoq", ipa: "səˈdʒest", pos: "verb", ex: "I suggest we take a taxi.", exUz: "Taksi olishni taklif qilaman." },
    { en: "instead", uz: "o'rniga", ipa: "ɪnˈsted", pos: "adv", ex: "Let's walk instead.", exUz: "Buning o'rniga piyoda boraylik." },
    { en: "already", uz: "allaqachon", ipa: "ɔːlˈredi", pos: "adv", ex: "I've already booked a table.", exUz: "Men stolni allaqachon band qilganman." },
    { en: "Good idea!", uz: "Yaxshi fikr!", ipa: "ɡʊd aɪˈdɪə", pos: "phrase", ex: "Shall we go out? — Good idea!", exUz: "Tashqariga chiqamizmi? — Yaxshi fikr!" },
    { en: "No problem", uz: "Hech gap emas", ipa: "nəʊ ˈprɒbləm", pos: "phrase", ex: "Can you help me? — No problem.", exUz: "Yordam bera olasanmi? — Hech gap emas." },
    { en: "It depends", uz: "Bunga bog'liq", ipa: "ɪt dɪˈpendz", pos: "phrase", ex: "Will you come? — It depends.", exUz: "Kelasanmi? — Bunga bog'liq." },
    { en: "umbrella", uz: "soyabon", ipa: "ʌmˈbrelə", pos: "noun", ex: "Take an umbrella. It's going to rain.", exUz: "Soyabon ol. Yomg'ir yog'adi." },
    { en: "guide", uz: "gid, yo'lboshchi", ipa: "ɡaɪd", pos: "noun", ex: "We need a guide in Bukhara.", exUz: "Buxoroda bizga gid kerak." },
  ],
  practice: [
    { k: "match", pairs: [["decision", "qaror"], ["instead", "o'rniga"], ["already", "allaqachon"], ["guide", "gid"], ["umbrella", "soyabon"]] },
    { k: "match", pairs: [["Shall I help you?", "Yordam beraymi?"], ["Shall we go?", "Ketamizmi?"], ["Good idea!", "Yaxshi fikr!"], ["It depends", "Bunga bog'liq"]] },
    { k: "listen", say: "Shall we go to the cinema?", opts: ["Shall we go to the cinema?", "Shall I go to the cinema?", "Will we go to the cinema?"], a: 0 },
    { k: "listen", say: "I'm going to see the doctor tomorrow.", opts: ["I'll see the doctor tomorrow.", "I'm going to see the doctor tomorrow.", "I saw the doctor tomorrow."], a: 1 },
    { k: "choice", q: "**Look at those black clouds! It ___ rain.**", opts: ["is going to", "will to", "shall", "does going to"], a: 0, why: "Hozir dalil bor → **going to**." },
    { k: "choice", q: "**I'm tired. — Sit down. I ___ make you some tea.**", opts: ["am going make", "'ll", "shall to", "am make"], a: 1, why: "Shu zahoti taklif → **I'll make**." },
    { k: "choice", q: "**It's hot. ___ I open the window?**", opts: ["Will", "Shall", "Do", "Am"], a: 1 },
    { k: "choice", q: "**Qaysi gap xato?**", opts: ["Shall I help you?", "Shall we have lunch?", "Shall he help you?", "Shall I carry your bag?"], a: 2, why: "**Shall** faqat I / we bilan." },
    { k: "fill", q: "I've already decided. I ___ going to learn German.", a: ["am", "'m"], why: "Reja → **am going to**." },
    { k: "fill", q: "___ we have lunch at the chaikhana?", a: ["Shall"], uz: "Choyxonada tushlik qilamizmi?" },
    { k: "fill", q: "There's no sugar. — OK, I ___ buy some.", a: ["will", "'ll"], why: "Shu zahoti qaror." },
    { k: "tf", q: "**Will going to** shakli to'g'ri.", a: false, why: "Faqat bittasi: *will go* yoki *is going to go*." },
    { k: "order", uz: "Sumkangizni ko'taraymi?", words: ["Shall", "I", "carry", "your", "bag?"], extra: ["will", "carrying"] },
    { k: "translate", uz: "Kechqurun kinoga boramizmi?", a: ["Shall we go to the cinema tonight?", "Shall we go to the cinema this evening?", "Shall we go to the movies tonight?", "Shall we go to the movies this evening?", "Shall we go to the cinema?", "Shall we go to the movies?"] },
    { k: "speak", say: "Shall I open the window? It's very hot.", uz: "Derazani ochaymi? Juda issiq." },
  ],
  quiz: [
    { k: "choice", q: "**I've bought the cake. I ___ give it to Dilnoza.**", opts: ["am going to", "will to", "shall", "going to"], a: 0 },
    { k: "choice", q: "**The phone is ringing! — I ___ it.**", opts: ["'ll get", "'m going get", "get will", "getting"], a: 0 },
    { k: "choice", q: "**Shall I ___ the door for you?**", opts: ["opening", "to open", "open", "opens"], a: 2 },
    { k: "choice", q: "**___ we meet at six?**", opts: ["Will", "Shall", "Am", "Do"], a: 1 },
    { k: "fill", q: "Look! That boy ___ going to fall.", a: ["is", "'s"] },
    { k: "fill", q: "I don't think it ___ be easy.", a: ["will"] },
    { k: "listen", say: "Shall I carry your bag?", opts: ["Shall I carry your bag?", "Shall we carry your bag?", "Will I carry your bag?"], a: 0 },
    { k: "tf", q: "**Shall you help me?** — to'g'ri.", a: false, why: "**Shall** faqat I / we bilan." },
    { k: "order", uz: "Biz mehmonxonada qolmoqchimiz.", words: ["We", "are", "going", "to", "stay", "in", "a", "hotel."], extra: ["will", "stays"], alt: [["We're", "going", "to", "stay", "in", "a", "hotel."]] },
    { k: "translate", uz: "Yordam beraymi?", a: ["Shall I help you?", "Shall I help?", "Shall I help you out?"] },
  ],
  summary: [
    "**going to** — oldindan qilingan reja yoki hozir ko'rinib turgan dalil; **will** — shu zahoti qaror, fikr, va'da, taklif.",
    "Savol bering: **bu reja / dalilmi yoki hozirgina o'ylab topdimmi?** Shunga qarab tanlang.",
    "**will** va **going to** bir gapda birga kelmaydi: *will going to* ❌.",
    "**Shall I…?** — yordam taklifi; **Shall we…?** — birgalikda ish taklifi. Faqat **I / we** bilan, dan keyin **V1**.",
  ],
  homework: "Ikki ustunli jadval tuzing: chap ustunda 5 ta o'z rejangiz (*going to*), o'ng ustunda 5 ta shu zahoti qaror yoki taklif (*I'll… / Shall I…?*). Keyin oilangiz yoki do'stingiz bilan haftalik rejani **Shall we…?** bilan muhokama qiling.",
};

export default lesson;
