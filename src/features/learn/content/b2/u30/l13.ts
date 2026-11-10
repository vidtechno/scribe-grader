import type { Lesson } from '../../../types';

// Mini lesson (grammar): indirect, negative and echo questions, subject questions, tags with imperatives and negative statements.
const lesson: Lesson = {
  id: 'u30-l13',
  title: 'Question forms: indirect, negative and echo',
  titleUz: 'Savol shakllari: indirect, negative, echo savollar',
  mini: true,
  kind: 'grammar',
  goal: "**Indirect** (*Do you know where…?*), **negative** (*Isn't it…?*), **echo** (*Is she?*) va **subject** (*Who called you?*) savollarini to'g'ri tuzasiz, **tag**ni buyruq va inkor gap bilan ishlatasiz hamda ohang orqali **muloyimlik** va **hayrat**ni ifodalaysiz.",
  slides: [
    {
      title: "Indirect va subject savollar",
      blocks: [
        { t: 'p', md: "Notanish odamdan yoki rasmiy joyda so'rashda **to'g'ridan-to'g'ri savol** qo'pol eshitilishi mumkin: *Where is the station?* **Indirect** (bilvosita) savol muloyimroq. Muhim qoida: ikkinchi qismda **so'z tartibi oddiy gapdagidek** bo'ladi, *do/does/did* ham ishlatilmaydi." },
        { t: 'table', head: ["To'g'ridan-to'g'ri", 'Indirect'], speak: [0, 1], rows: [
          ['Where is the station?', "Could you tell me where the station is?"],
          ['What time does it open?', "Do you know what time it opens?"],
          ['Did she pass the exam?', "I wonder if she passed the exam."],
          ['Can I park here?', "Would you mind telling me whether I can park here?"],
        ] },
        { t: 'tip', tone: 'info', md: "Ha/yo'q savol indirect bo'lsa **if** yoki **whether** qo'shiladi: *Do you know if he is coming?* Savol belgisi faqat ochiq savol boshida bo'lsa qo'yiladi: *Do you know where he lives?* (savol), *I don't know where he lives.* (darak, nuqta)." },
        { t: 'p', md: "**Subject savol**da so'roq so'zi **o'zi egaga** aylanadi, shuning uchun *do/did* kerak emas: *Who called you?* (kim qo'ng'iroq qildi), lekin *Who did you call?* (siz kimga qo'ng'iroq qildingiz)." },
        { t: 'check', ex: { k: 'choice', q: "Which question is correct?", opts: ["Could you tell me where is the bank?", "Could you tell me where the bank is?", "Could you tell me where does the bank is?", "Could you tell me where the bank does?"], a: 1, why: "Indirect savol: **where + ega + fe'l** (darak tartibi)." } },
        { t: 'check', ex: { k: 'fix', wrong: "Who did call you last night?", a: ["Who called you last night?", "Who phoned you last night?", "Who rang you last night?"], hint: "oddiy subject savol, did siz", why: "Subject savol: so'roq so'zi ega, **did** kerak emas." } },
      ],
    },
    {
      title: "Negative savollar",
      blocks: [
        { t: 'p', md: "**Negative question** (*Isn't it…? Don't you think…?*) ikki maqsadda ishlatiladi: **taklif / maslahat** (*Wouldn't it be better to…?*) va **hayrat yoki tasdiq kutish** (*Isn't she your sister?*). Odatda javob **ha** bo'ladi deb o'ylaysiz." },
        { t: 'examples', items: [
          { en: "Don't you think we should leave earlier?", uz: "Ertaroq chiqishimiz kerak deb o'ylamaysizmi?", note: "Yumshoq maslahat." },
          { en: "Isn't it a lovely day?", uz: "Ajoyib kun emasmi?", note: "Rozilikni kutish." },
          { en: "Haven't you finished yet?", uz: "Hali tugatmadingizmi?", note: "Hayrat, ozgina xafagarchilik." },
          { en: "Wouldn't it be easier to take the train?", uz: "Poyezdda ketish osonroq bo'lmasmidi?", note: "Taklif." },
        ] },
        { t: 'tip', tone: 'warn', md: "**Eng ko'p xato:** javob. O'zbekchada *Sovuq emasmi? — Yo'q, sovuq* deymiz (savolga qarama-qarshi), inglizchada javob **faktga** qarab beriladi: *Isn't it cold? — **Yes, it is.*** (sovuq). *No, it isn't.* (sovuq emas). *No, it is* — noto'g'ri." },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["Isn't it cold? — Yes, it is. (sovuq)", "Haven't you eaten? — No, I haven't. (yemadim)", "Don't you like tea? — Yes, I do. (yoqadi)"], },
          bad: { title: 'Xato', items: ["Isn't it cold? — No, it is.", "Haven't you eaten? — Yes, I haven't.", "Don't you like tea? — No, I do."] } },
        { t: 'check', ex: { k: 'choice', q: "'Don't you like jazz?' You like it. You answer:", opts: ["No, I do.", "Yes, I do.", "Yes, I don't.", "No, I like."], a: 1, why: "Javob fakt asosida: yoqadi → **Yes, I do.**" } },
        { t: 'check', ex: { k: 'fix', wrong: "Isn't it hot today? — No, it is.", a: ["Isn't it hot today? — Yes, it is.", "Yes, it is.", "Isn't it hot today? Yes, it is."], why: "Issiq bo'lsa **Yes, it is.** Inkor javob faktga mos bo'lishi kerak." } },
      ],
    },
    {
      title: "Echo savollar va tag savollar",
      blocks: [
        { t: 'p', md: "**Echo question** — suhbatdoshning gapini **yordamchi fe'l bilan qaytarib**, hayrat yoki qiziqish bildirish: *I've lost my keys. — Have you?* Yordamchi fe'l **gapdagi bilan bir xil** va ega olmoshga aylanadi. Ohang **ko'tarilsa** — hayrat." },
        { t: 'table', head: ['Gap', 'Echo savol'], speak: [0, 1], rows: [
          ["She's moving to Dubai.", 'Is she?'],
          ["I passed the exam.", 'Did you?'],
          ["We've bought a car.", 'Have you?'],
          ["He can't swim.", 'Can\'t he?'],
          ["She's moving to Dubai.", "She's moving where?"],
        ] },
        { t: 'tip', tone: 'good', md: "**Tag savollar** ba'zan yodimizdan chiqadi: **buyruq + will you? / could you?** (*Close the door, will you?*); **Let's … shall we?**; **inkor gap → musbat tag** (*You never eat meat, do you?*); *nobody, nothing, never, hardly* ham inkor: *Nobody called, did they?* Ohang **pasaysa** — rozilik kutish, **ko'tarilsa** — haqiqatan so'rash." },
        { t: 'check', ex: { k: 'fill', q: "Let's start now, ___ we?", a: ['shall'], why: "*Let's …* dan keyin tag: **shall we?**" } },
        { t: 'check', ex: { k: 'choice', q: "'She has never been abroad, ___?'", opts: ["has she", "hasn't she", "is she", "does she"], a: 0, why: "*never* inkor ma'no beradi → musbat tag: **has she?**" } },
        { t: 'check', ex: { k: 'choice', q: "'I've won a prize.' — an echo question of surprise is:", opts: ["Have you?", "Did you?", "Do you?", "Are you?"], a: 0, why: "Echo savol gapdagi yordamchi fe'lni qaytaradi: *have won* → **Have you?**" } },
      ],
    },
    {
      title: "O'qing va tinglang",
      blocks: [
        { t: 'text', title: 'Asking the right way', voice: 'george', en: "When I first moved to London, I was puzzled by how polite people were when they asked questions. Nobody said, 'Where is the post office?' Instead, they said, 'Excuse me, could you tell me where the post office is?' At first I was curious about the reason, but soon I understood that indirect questions soften the message. English speakers also like negative questions. A colleague once asked me, 'Don't you think we should call the client?' which meant that she wanted to call him. When I told her something surprising, she answered, 'Did you really?' with a rising voice to show she was interested. I have learnt that a simple 'Is that so?' can keep a conversation alive for a long time. Of course, some questions are blunt on purpose, such as rhetorical ones: 'Who knows?' really means 'Nobody knows.'", uz: "Londonga birinchi marta ko'chib kelganimda, odamlar savol berishda naqadar muloyim ekaniga hayron bo'ldim. Hech kim 'Pochta qayerda?' demasdi. Buning o'rniga: 'Kechirasiz, pochta qayerdaligini ayta olasizmi?' derdi. Avvaliga sababiga qiziqdim, tez orada bilvosita savollar ohangni yumshatishini tushundim. Inglizlar inkor savollarni ham yaxshi ko'radi. Bir hamkasbim: 'Mijozga qo'ng'iroq qilishimiz kerak deb o'ylamaysizmi?' deb so'radi, bu u qo'ng'iroq qilmoqchi ekanini bildirardi. Men unga kutilmagan narsa aytsam, u qiziqqanini ko'rsatish uchun ko'tarilgan ovozda 'Rostdanmi?' deb javob berardi. Oddiy 'Is that so?' suhbatni uzoq jonli saqlashini o'rgandim. Albatta, ba'zi savollar ataylab dag'al: masalan, ritorik savollar: 'Who knows?' aslida 'Hech kim bilmaydi' degani." },
        { t: 'check', ex: { k: 'tf', q: "In the text, 'Don't you think we should call the client?' means the colleague wanted to call him.", a: true, why: "Negative savol — yumshoq taklif." },
        },
        { t: 'dialog', lines: [
          { who: 'Dilnoza', en: "I've decided to leave my job and move to Dubai.", uz: "Ishimdan ketib, Dubayga ko'chishga qaror qildim." },
          { who: 'Jasur', en: "Have you? Isn't that a big risk?", uz: "Rostdanmi? Bu katta tavakkal emasmi?" },
          { who: 'Dilnoza', en: "Maybe. Do you know how much flats cost there?", uz: "Balki. U yerda kvartiralar qancha turishini bilasanmi?" },
          { who: 'Jasur', en: "I'm not sure. Could you tell me when you are leaving?", uz: "Aniq bilmayman. Qachon ketayotganingni ayta olasanmi?" },
          { who: 'Dilnoza', en: "In March. Who told you I was staying?", uz: "Martda. Seni kim qolaman dedi?" },
          { who: 'Jasur', en: "Nobody did. I just hoped you would, didn't I?", uz: "Hech kim. Shunchaki qolarsan deb umid qilgandim, shunday emasmi?" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Which question in the dialogue is a subject question?", opts: ["Who told you I was staying?", "Isn't that a big risk?", "Could you tell me when you are leaving?", "Have you?"], a: 0, why: "**Who told you…?** — *who* ega, *did* yo'q." } },
      ],
    },
  ],
  words: [
    { en: 'curious', uz: "qiziquvchan, qiziqib turgan", ipa: 'ˈkjʊə.ri.əs', pos: 'adj', ex: 'I was curious about how the system worked.', exUz: "Tizim qanday ishlashiga qiziqdim." },
    { en: 'puzzled', uz: "hayron, boshi qotgan", ipa: 'ˈpʌz.əld', pos: 'adj', ex: 'She looked puzzled by his question.', exUz: "U uning savolidan hayron bo'lib qoldi." },
    { en: 'rhetorical', uz: "ritorik (javob kutilmaydigan)", ipa: 'rɪˈtɒr.ɪ.kəl', pos: 'adj', ex: 'It was a rhetorical question, so nobody answered.', exUz: "Bu ritorik savol edi, shuning uchun hech kim javob bermadi." },
    { en: 'probe', uz: "sinchiklab so'ramoq, chuqur surishtirmoq", ipa: 'prəʊb', pos: 'verb', ex: 'The journalist probed deeper into the story.', exUz: "Jurnalist voqeani chuqurroq surishtirdi." },
    { en: 'bluntly', uz: "dangal, dag'allik bilan", ipa: 'ˈblʌnt.li', pos: 'adv', ex: 'He bluntly asked how much she earned.', exUz: "U dangal tarzda qancha topishini so'radi." },
  ],
  practice: [
    { k: 'match', pairs: [['curious', 'qiziquvchan'], ['puzzled', 'hayron, boshi qotgan'], ['rhetorical', 'javob kutilmaydigan'], ['probe', 'chuqur surishtirmoq'], ['bluntly', "dag'allik bilan"]] },
    { k: 'choice', q: "Which indirect question is correct?", opts: ["Do you know what time does the shop close?", "Do you know what time the shop closes?", "Do you know what time the shop does close?", "Do you know what time closes the shop?"], a: 1, why: "Indirect savol: darak tartibi, *do/does* yo'q: **what time the shop closes**." },
    { k: 'fill', q: "I wonder ___ she will come to the party. (yes/no question)", a: ['if', 'whether'], uz: "U ziyofatga kelarmikan deb o'ylayapman.", why: "Ha/yo'q savolda indirect shakl **if / whether** bilan." },
    { k: 'fix', wrong: "Could you tell me when does the museum open?", a: ["Could you tell me when the museum opens?"], why: "Indirect savolda **does** kerak emas: *when the museum opens*." },
    { k: 'choice', q: "'We're moving to Leeds.' — a natural echo question is:", opts: ["Are you?", "Do you?", "Were you?", "Have you?"], a: 0, why: "Gapdagi yordamchi fe'l *are* → echo: **Are you?**" },
    { k: 'tf', q: "In the normal question 'Who called you?', the word *who* is the subject, so we do not use *did*.", a: true, why: "Subject savolda so'roq so'zi ega: **did** kerak emas." },
    { k: 'listen', say: "Don't you think we should leave earlier?", opts: ["Don't you think we should leave earlier?", "Do you think we should leave earlier?", "Don't you think we should leave later?", "Didn't you think we should leave earlier?"], a: 0 },
    { k: 'order', uz: "Bu yerdan bankka qanday borishni ayta olasizmi?", words: ['Could', 'you', 'tell', 'me', 'how', 'to', 'get', 'to', 'the', 'bank?'], extra: ['do', 'does'], alt: [['Could', 'you', 'tell', 'me', 'how', 'I', 'can', 'get', 'to', 'the', 'bank?']], why: "**Could you tell me how to…**" },
    { k: 'choice', q: "'Haven't you finished yet?' You haven't finished. You answer:", opts: ["No, I haven't.", "Yes, I haven't.", "No, I have.", "Yes, I have not finished yes."], a: 0, why: "Faktga mos: tugatmadingiz → **No, I haven't.**" },
    { k: 'fill', q: "Nobody called, ___ they?", a: ['did'], uz: "Hech kim qo'ng'iroq qilmadi, shundaymi?", why: "*Nobody* inkor ma'noli → musbat tag: **did they?**" },
    { k: 'fix', wrong: "Open the window, don't you?", a: ["Open the window, will you?", "Open the window, would you?", "Open the window, can you?", "Open the window, could you?"], why: "Buyruq + **will you? / could you?**" },
    { k: 'translate', uz: "Qachon ketayotganingni bilasanmi?", a: ["Do you know when you are leaving?", "Do you know when you're leaving?"], why: "Indirect savol: *when you are leaving* (darak tartibi)." },
    { k: 'dictation', say: "Isn't it a lovely day?", a: ["Isn't it a lovely day?", "Is it not a lovely day?"], uz: "Ajoyib kun emasmi?" },
    { k: 'speak', say: "Could you tell me where the post office is?", uz: "Pochta qayerdaligini ayta olasizmi?" },
  ],
  quiz: [
    { k: 'choice', q: "Which sentence is a subject question?", opts: ["Who broke the window?", "Who did you see?", "What did she buy?", "Where does he live?"], a: 0, why: "**Who broke…?** — *who* ega, yordamchi fe'l yo'q." },
    { k: 'fill', q: "Let's have a break, ___ we?", a: ['shall'], uz: "Tanaffus qilaylik, shundaymi?", why: "*Let's …, **shall we?***" },
    { k: 'fix', wrong: "Do you know where is Sara?", a: ["Do you know where Sara is?"], why: "Indirect savol: **where Sara is**." },
    { k: 'choice', q: "'Isn't it cold today?' It is cold. You answer:", opts: ["No, it is.", "Yes, it is.", "Yes, it isn't.", "No, it's cold yes."], a: 1, why: "Sovuq bo'lsa **Yes, it is.**" },
    { k: 'order', uz: "U kelishini bilasanmi?", words: ['Do', 'you', 'know', 'if', 'she', 'is', 'coming?'], extra: ['does', 'was'], alt: [['Do', 'you', 'know', 'whether', 'she', 'is', 'coming?']], why: "Indirect ha/yo'q savol: **if / whether**." },
    { k: 'tf', q: "'You never eat meat, do you?' — the tag is correct.", a: true, why: "*never* inkor ma'noli → musbat tag." },
    { k: 'choice', q: "'I've failed my driving test.' An echo question of surprise is:", opts: ["Have you?", "Did you?", "Do you?", "Are you?"], a: 0, why: "*have failed* → **Have you?**" },
    { k: 'listen', say: 'Could you tell me when the museum opens?', opts: ['Could you tell me when the museum opens?', 'Could you tell me when does the museum open?', 'Could you tell me when the museum opened?', 'Could you tell me if the museum opens?'], a: 0 },
  ],
  summary: [
    "**Indirect savol**: *Could you tell me where the station is?* Darak tartibi, *do/does/did* yo'q; ha/yo'q uchun **if / whether**.",
    "**Subject savol**: *Who called you?* (so'roq so'zi ega), *did* kerak emas.",
    "**Negative savol**: *Isn't it…? Don't you think…?* Javob **faktga** qarab: *Yes, it is.* / *No, it isn't.*",
    "**Echo savol**: *She's moving. — Is she?* Yordamchi fe'l gapdagidek. **Tag**: *Open it, will you? Let's go, shall we? Nobody came, did they?*",
    "Yangi so'zlar: **curious, puzzled, rhetorical, probe, bluntly**.",
  ],
  homework: "Do'stingizga 5 ta **indirect** savol yozing (do'kon, vokzal, ish haqida) va ularni **Could you tell me…?** bilan boshlang. Keyin ovoz chiqarib yana 3 ta **echo** savolni mashq qiling: biror kishi aytgan gapga *Is he? / Did you? / Have they?* deb javob bering.",
};

export default lesson;
