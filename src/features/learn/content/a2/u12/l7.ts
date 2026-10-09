import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u12-l7",
  title: "Telling a story",
  titleUz: "Hikoya aytish: first, then, after that, finally",
  goal: "O'tgan voqeani **tartib bilan** hikoya qilasiz: **first, then, after that, next, later, finally, in the end**, **after / before / as soon as** bilan bog'laysiz, hikoyada **Past Simple va Past Continuous** ni to'g'ri aralashtirasiz va **Guess what? What happened next?** kabi iboralar bilan suhbatda hikoya aytasiz.",
  slides: [
    {
      title: "Hikoyaning tuzilishi",
      blocks: [
        { t: "p", md: "Yaxshi hikoya **uch qismdan** iborat. Har bir qismda o'z zamoni ko'proq ishlatiladi:" },
        {
          t: "table", head: ["Qism", "Vazifasi", "Zamon", "Misol"], speak: [3],
          rows: [
            ["1. Boshlanish", "qayerda, qachon, kim, ob-havo (fon)", "Past Continuous, was / were, used to", "It was a sunny day and we were walking in the park."],
            ["2. Voqealar", "ketma-ket nima bo'ldi", "Past Simple", "Suddenly we heard a noise. We ran to the gate."],
            ["3. Yakun", "oxiri nima bilan tugadi, his-tuyg'u", "Past Simple, was / were", "In the end, everything was OK."],
          ],
        },
        { t: "tip", tone: "good", md: "Fon (Past Continuous) \"sahna\"ni chizadi, Past Simple esa \"harakat\" ni oldinga siljitadi. Avval darsda o'rgangan **when / while** qoidasi hikoyada ham ishlaydi." },
        { t: "check", ex: { k: "choice", q: "Hikoyaning **boshlanishi** uchun qaysi gap mos?", opts: ["It was a cold evening and snow was falling.", "I suddenly jumped out of bed.", "Finally, I got home.", "Then she opened the door."], a: 0, why: "Boshlanish — fon va sharoit: *It was… and snow was falling.*" } },
      ],
    },
    {
      title: "Ketma-ketlik so'zlari",
      blocks: [
        { t: "p", md: "Voqealarni tartib bilan bog'lash uchun maxsus so'zlar bor. Ular o'zbekchadagi *avval, keyin, undan so'ng, nihoyat* ga to'g'ri keladi:" },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["First, … / At first, …", "avval", "First, we bought the tickets."],
            ["Then …", "keyin", "Then we went into the cinema."],
            ["Next, … / After that, …", "undan keyin", "After that, we bought some popcorn."],
            ["Later, …", "keyinroq", "Later, we had dinner."],
            ["Suddenly, …", "birdan", "Suddenly the screen went black."],
            ["Finally, … / In the end, …", "nihoyat, oxirida", "Finally, we went home."],
          ],
        },
        { t: "tip", tone: "info", md: "Gap boshidagi **First, Next, After that, Later, Finally, Suddenly** dan keyin **vergul** qo'yiladi. **Then** dan keyin odatda vergul kerak emas: *Then we went home.*" },
        { t: "tip", tone: "warn", md: "**At first** ≠ **first**. *At first* = \"dastlab (keyin o'zgardi)\": *At first I didn't like Samarkand, but then I fell in love with it.* *First* = \"birinchi qadam\": *First, add the water.*" },
        { t: "check", ex: { k: "fill", q: "We got to the hotel. ___, we left our bags in the room. (keyin)", a: ["Then", "Next", "After that"], why: "Ketma-ketlik: keyingi harakat → **Then / Next / After that**." } },
      ],
    },
    {
      title: "After, before, as soon as",
      blocks: [
        { t: "p", md: "Voqealarni bitta gapda ham bog'lash mumkin. Bog'lovchidan keyin ham **Past Simple** keladi:" },
        {
          t: "table", head: ["Bog'lovchi", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["**after**", "-gandan keyin", "After we ate, we went for a walk."],
            ["**before**", "-gunga qadar, oldin", "Before we left, we locked the door."],
            ["**as soon as**", "-ishi bilan", "As soon as I got home, I called Laylo."],
            ["**while**", "-ganda (jarayon)", "While we were walking, it started to rain."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["After we finished, we left.", "After finishing, we left.", "As soon as she arrived, we started."] },
          bad: { title: "Xato", items: ["After we will finish, we left.", "After finish, we left.", "As soon as she arrives, we started. (o'tgan hikoya)"] },
        },
        { t: "tip", tone: "info", md: "Gap boshidagi **After / Before / As soon as** dan keyingi bo'lakdan so'ng vergul: *After we ate, we left.* O'rtada kelsa — vergul yo'q: *We left after we ate.*" },
        { t: "check", ex: { k: "choice", q: "___ I opened the door, I saw a strange box.", opts: ["As soon as", "Soon", "Next", "Finally"], a: 0, why: "Bog'lovchi kerak, gap ichida: **As soon as** I opened…" } },
      ],
    },
    {
      title: "Hikoyada zamonlar",
      blocks: [
        { t: "p", md: "Bitta mini-hikoyada bizning barcha zamonlarimiz birga ishlaydi:" },
        {
          t: "examples", items: [
            { en: "It was Friday night and I was walking home.", uz: "Juma kechasi edi va men uyga ketayotgan edim.", note: "Fon — Past Continuous." },
            { en: "I used to take the metro, but that day I decided to walk.", uz: "Odatda metroda ketar edim, lekin o'sha kuni piyoda yurishga qaror qildim.", note: "Odat — used to; voqea — Past Simple." },
            { en: "Suddenly I heard someone call my name.", uz: "Birdan kimdir ismimni chaqirganini eshitdim.", note: "Qisqa voqea." },
            { en: "I turned around and saw my old friend Jasur.", uz: "Orqamga o'girilib, eski do'stim Jasurni ko'rdim.", note: "Ketma-ket Past Simple." },
          ],
        },
        { t: "tip", tone: "warn", md: "Hikoya davomida **zamonni almashtirmang**: *I **opened** the door and **see** a cat.* (❌) → *I opened the door and **saw** a cat.* O'zbek tilida hikoya ko'pincha hozirgi zamonda aytiladi (*Kirsam, ko'rsam…*), inglizcha esa o'tgan zamonda boshdan oxirigacha." },
        { t: "check", ex: { k: "choice", q: "Qaysi gap zamon bo'yicha **to'g'ri**?", opts: ["I opened the door and see a cat.", "I opened the door and saw a cat.", "I open the door and saw a cat.", "I was opened the door and saw a cat."], a: 1, why: "Hamma harakat — o'tgan zamon: **opened … saw**." } },
      ],
    },
    {
      title: "Hikoyani og'zaki aytish",
      blocks: [
        { t: "p", md: "Do'stga hikoya aytganda, tinglovchi ham qatnashadi. Shu iboralar suhbatni jonli qiladi:" },
        {
          t: "table", head: ["Maqsad", "Ibora", "Misol"], speak: [1],
          rows: [
            ["Hikoyani boshlash", "Guess what! / You won't believe it!", "Guess what! I met a famous singer today."],
            ["Qiziqish bildirish", "Really? / Wow! / No way! / Seriously?", "No way! Where?"],
            ["Davom ettirishni so'rash", "What happened next? / And then?", "What happened next?"],
            ["Voqeani yakunlash", "In the end … / So that's how …", "In the end, she gave me her autograph."],
            ["His-tuyg'u bildirish", "What a surprise! / How embarrassing!", "How embarrassing! I forgot his name."],
          ],
        },
        { t: "check", ex: { k: "choice", q: "Do'stingiz hikoyasini qiziqib tinglayapsiz. Nima deysiz?", opts: ["What happened next?", "Do you do?", "I go home.", "What did you went?"], a: 0, why: "Qiziqish — **What happened next?**" } },
        { t: "check", ex: { k: "tf", q: "**Guess what!** iborasi hikoyani boshlash uchun ishlatiladi.", a: true, why: "*Guess what!* = \"Bilasanmi nima bo'ldi!\"" } },
      ],
    },
    {
      title: "O'qing: Yo'qolgan hamyon",
      blocks: [
        {
          t: "text", title: "The lost wallet",
          en: "One rainy afternoon, Kamol was waiting for a bus in Tashkent when he noticed a brown wallet on the bench. At first he didn't touch it. Then he looked inside and found some money, a student card and a phone number. He called the number, and a girl answered. Her name was Nigora, and she was very worried. After that, Kamol took the wallet to the café near the metro. As soon as Nigora saw it, she smiled and said, \"Thank you so much!\" In the end, she bought him a cup of tea, and they talked for an hour.",
          uz: "Yomg'irli bir tushdan keyin Kamol Toshkentda avtobus kutib turganida, skameykada jigarrang hamyonni payqadi. Dastlab unga tegmadi. Keyin ichiga qarab, pul, talaba kartasi va telefon raqamini topdi. U raqamga qo'ng'iroq qildi, qiz javob berdi. Uning ismi Nigora edi va u juda xavotirda edi. Shundan keyin Kamol hamyonni metro yaqinidagi kafega olib bordi. Nigora hamyonni ko'rishi bilan jilmayib, \"Katta rahmat!\" dedi. Oxirida u Kamolga bir piyola choy sotib oldi va ular bir soat gaplashishdi.",
        },
        { t: "check", ex: { k: "choice", q: "What did Kamol find inside the wallet?", opts: ["A passport and a key.", "Money, a student card and a phone number.", "Only a photo.", "A bus ticket."], a: 1, why: "*He found some money, a student card and a phone number.*" } },
        { t: "check", ex: { k: "tf", q: "Kamol kept the money.", a: false, why: "U Nigoraga qo'ng'iroq qilib, hamyonni **qaytarib berdi**." } },
        { t: "tip", tone: "info", md: "Ketma-ketlik so'zlarini toping: *At first, Then, After that, As soon as, In the end*. Ularsiz hikoya \"parchalanib\" qoladi." },
      ],
    },
    {
      title: "Dialog: Bilasanmi nima bo'ldi!",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilnoza", en: "Guess what! I got lost in Bukhara yesterday!", uz: "Bilasanmi nima bo'ldi! Kecha Buxoroda adashib qoldim!" },
            { who: "Aziz", en: "No way! What happened?", uz: "Yo'q-e! Nima bo'ldi?" },
            { who: "Dilnoza", en: "First, I left the hotel without a map. Then I walked into the old town and all the streets looked the same.", uz: "Avval xaritasiz mehmonxonadan chiqdim. Keyin eski shaharga kirdim va hamma ko'chalar bir xil ko'rindi." },
            { who: "Aziz", en: "And then?", uz: "Keyin-chi?" },
            { who: "Dilnoza", en: "After that, my phone died. Luckily, a shop owner showed me the way.", uz: "Undan keyin telefonim o'chib qoldi. Omadim keldi, do'konchi yo'lni ko'rsatdi." },
            { who: "Aziz", en: "What a story! How did it end?", uz: "Qanday voqea! Qanday tugadi?" },
            { who: "Dilnoza", en: "In the end, I found my hotel, and I drank two cups of tea. I was exhausted!", uz: "Oxirida mehmonxonamni topdim va ikki piyola choy ichdim. Juda charchagan edim!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why was Dilnoza lost?", opts: ["She forgot the name of her hotel.", "She had no map and her phone died.", "She took the wrong bus.", "She was with a bad guide."], a: 1, why: "*I left the hotel without a map… my phone died.*" } },
      ],
    },
  ],
  words: [
    { en: "at first", uz: "dastlab, avvaliga", ipa: "æt fɜːst", pos: "phrase", ex: "At first I was afraid, but then I relaxed.", exUz: "Avvaliga qo'rqdim, keyin tinchlandim." },
    { en: "in the end", uz: "oxirida, oxir-oqibat", ipa: "ɪn ði end", pos: "phrase", ex: "In the end, we found the keys.", exUz: "Oxirida kalitlarni topdik." },
    { en: "meanwhile", uz: "shu orada, shu vaqtda", ipa: "ˈmiːnwaɪl", pos: "adverb", ex: "Meanwhile, Dad was cooking dinner.", exUz: "Shu orada dadam kechki ovqat pishirayotgan edi." },
    { en: "luckily", uz: "omadga, baxtimizga", ipa: "ˈlʌkɪli", pos: "adverb", ex: "Luckily, the doctor was at home.", exUz: "Baxtimizga shifokor uyda ekan." },
    { en: "unfortunately", uz: "afsuski", ipa: "ʌnˈfɔːtʃənətli", pos: "adverb", ex: "Unfortunately, I missed the train.", exUz: "Afsuski, poyezdga ulgurmadim." },
    { en: "happen", uz: "sodir bo'lmoq, bo'lmoq", ipa: "ˈhæpən", pos: "verb", ex: "What happened next?", exUz: "Keyin nima bo'ldi?" },
    { en: "realise", uz: "anglab yetmoq", ipa: "ˈriːəlaɪz", pos: "verb", ex: "I realised that I had no money.", exUz: "Pulim yo'qligini angladim." },
    { en: "as soon as", uz: "...ishi bilan", ipa: "æz suːn æz", pos: "conjunction", ex: "As soon as I got home, I called him.", exUz: "Uyga kelishim bilan unga qo'ng'iroq qildim." },
    { en: "shocked", uz: "hayratda, dovdirab qolgan", ipa: "ʃɒkt", pos: "adjective", ex: "She was shocked by the news.", exUz: "U xabardan dovdirab qoldi." },
    { en: "go on", uz: "davom etmoq, yuz bermoq", ipa: "ɡəʊ ɒn", pos: "phrasal verb", ex: "Please go on with your story.", exUz: "Iltimos, hikoyangizni davom ettiring." },
  ],
  practice: [
    { k: "match", pairs: [["First", "Avval"], ["Then", "Keyin"], ["After that", "Undan keyin"], ["Finally", "Nihoyat"], ["Suddenly", "Birdan"]] },
    { k: "match", pairs: [["luckily", "omadga"], ["unfortunately", "afsuski"], ["meanwhile", "shu orada"], ["realise", "anglamoq"], ["shocked", "hayratda"]] },
    { k: "listen", say: "Guess what! I met a famous singer today.", opts: ["Guess what! I met a famous singer today.", "Guess what! I meet a famous singer today.", "Just what! I met a famous singer today."], a: 0 },
    { k: "listen", say: "As soon as I got home, I called my friend.", opts: ["As soon as I get home, I call my friend.", "As soon as I got home, I called my friend.", "As soon as I was home, I was calling my friend."], a: 1 },
    { k: "fill", q: "We arrived at the station. ___, we bought the tickets. (keyin)", a: ["Then", "Next", "After that"], why: "Ketma-ketlik: **Then / Next / After that**." },
    { k: "fill", q: "We looked for the keys for an hour. ___, we found them under the sofa. (nihoyat)", a: ["Finally", "In the end"], why: "Yakun → **Finally / In the end**." },
    { k: "fill", q: "___ we finished dinner, we went for a walk. (-gandan keyin)", a: ["After"], why: "**After** + Past Simple." },
    { k: "fill", q: "I was sleeping when the phone ___. (ring)", a: ["rang"], why: "Qisqa voqea → **rang**." },
    { k: "choice", q: "___, I didn't like the city, but then I fell in love with it.", opts: ["At first", "Finally", "First", "In the end"], a: 0, why: "**At first** — dastlab (keyin fikr o'zgardi)." },
    { k: "choice", q: "Qaysi gap hikoya uchun **to'g'ri**?", opts: ["She opened the box and finds a letter.", "She opened the box and found a letter.", "She open the box and found a letter.", "She was opened the box and found a letter."], a: 1, why: "Hammasi o'tgan zamonda: **opened … found**." },
    { k: "tf", q: "**Finally, we went home.** gapi hikoya oxirida ishlatiladi.", a: true },
    { k: "tf", q: "**After we will eat, we left.** — to'g'ri gap.", a: false, why: "Hikoya o'tmishda: *After we **ate**, we left.*" },
    { k: "order", uz: "Uyga kelishim bilan unga qo'ng'iroq qildim.", words: ["As", "soon", "as", "I", "got", "home,", "I", "called", "him."], extra: ["will", "get"], alt: [["I", "called", "him", "as", "soon", "as", "I", "got", "home."]] },
    { k: "translate", uz: "Avval biz chiptalarni sotib oldik, keyin kinoga kirdik.", a: ["First, we bought the tickets, then we went into the cinema.", "First we bought the tickets, then we went into the cinema.", "First, we bought the tickets. Then we went into the cinema.", "First we bought the tickets. Then we went into the cinema.", "First, we bought the tickets and then we went into the cinema.", "First we bought the tickets and then we went into the cinema.", "First, we bought tickets, then we went into the cinema.", "First we bought tickets, then we went into the cinema."] },
    { k: "speak", say: "Guess what! Yesterday I got lost, but in the end I found my way.", uz: "Bilasanmi nima bo'ldi! Kecha adashib qoldim, lekin oxirida yo'limni topdim." },
  ],
  quiz: [
    { k: "choice", q: "He ran to the station. ___, the train left without him.", opts: ["Unfortunately", "Luckily", "First", "Meanwhile"], a: 0, why: "Poyezd ketib bo'lgan → afsuski: **Unfortunately**." },
    { k: "choice", q: "___ we arrived, we put our bags in the room.", opts: ["After", "Then", "Next", "Finally"], a: 0, why: "Bog'lovchi: **After** we arrived, …" },
    { k: "choice", q: "It was late and the streets were quiet. This is the ___ of a story.", opts: ["end", "beginning", "result", "question"], a: 1, why: "Fon va sharoit — hikoya **boshlanishi**." },
    { k: "choice", q: "Qaysi gap zamon bo'yicha **xato**?", opts: ["I walked home and took a shower.", "She smiled and said hello.", "He opened the door and sees a dog.", "They arrived at six and had dinner."], a: 2, why: "*sees* → **saw** (hikoya o'tmishda)." },
    { k: "fill", q: "At six I was cooking when somebody ___ at the door. (knock)", a: ["knocked"], why: "Qisqa voqea → **knocked**." },
    { k: "fill", q: "We missed the bus. ___, we walked home. (so'ngra, ketma-ketlik)", a: ["Then", "After that", "Next"], why: "Ketma-ketlik: **Then / After that / Next**." },
    { k: "listen", say: "Unfortunately, I lost my phone.", opts: ["Fortunately, I lost my phone.", "Unfortunately, I lost my phone.", "Unfortunately, I loved my phone."], a: 1 },
    { k: "tf", q: "**In the end** hikoyaning boshlanishida ishlatiladi.", a: false, why: "**In the end** = oxirida, yakun qismida." },
    { k: "order", uz: "Avval men uzr so'radim, keyin ketdim.", words: ["First", "I", "apologised,", "then", "I", "left."], extra: ["leave", "will"] },
    { k: "translate", uz: "Nihoyat, biz kalitlarni topdik.", a: ["Finally, we found the keys.", "In the end, we found the keys.", "Finally we found the keys.", "In the end we found the keys."] },
  ],
  summary: [
    "Hikoya = **boshlanish** (fon: Past Continuous, was / were), **voqealar** (Past Simple), **yakun**.",
    "Ketma-ketlik so'zlari: **First, Then, Next / After that, Later, Suddenly, Finally / In the end**. Boshida vergul (*Then* dan tashqari).",
    "**after, before, as soon as** + Past Simple bilan voqealarni bitta gapda bog'laymiz.",
    "Hikoyada zamonni almashtirmang — boshdan oxirigacha o'tgan zamon.",
    "Og'zaki: **Guess what! / What happened next? / No way!**",
  ],
  homework: "O'zingiz bilan bo'lgan qiziqarli yoki kulgili voqeani 8–10 gapda yozing. Tuzilishi: fon (1–2 gap, *was / were + -ing*), voqealar (kamida 4 ta sequencer: *First, Then, After that, Finally*), yakun va his-tuyg'u. Keyin do'stingizga \"Guess what!\" bilan boshlab og'zaki aytib bering.",
};

export default lesson;
