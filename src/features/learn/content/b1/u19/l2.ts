import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u19-l2",
  title: "Narrative tenses together",
  titleUz: "Hikoya zamonlari birga: Past Simple, Continuous, Perfect",
  goal: "Hikoya aytganda **Past Simple** (asosiy voqealar), **Past Continuous** (fon va to'xtatilgan ish) va **Past Perfect** (oldin bo'lgan voqea) ni birga ishlatasiz va *when / while* bilan to'g'ri gap tuzasiz.",
  slides: [
    {
      title: "Uch zamon, uch vazifa",
      blocks: [
        { t: "p", md: "Yaxshi hikoyada uch xil ma'lumot bor: **nima bo'ldi** (voqealar), **voqea payti nima bo'lib turgan edi** (fon) va **oldin nima bo'lgan edi** (oldingi voqea). Har biri uchun alohida zamon bor." },
        { t: "table", head: ["Zamon", "Vazifasi", "Misol"], rows: [
          ["Past Simple", "Asosiy voqealar, birin-ketin", "I opened the door and went in."],
          ["Past Continuous", "Fon; ish davom etayotgan edi", "It was raining and people were running."],
          ["Past Perfect", "Voqeadan oldin bo'lgan ish", "Someone had left the window open."],
        ] },
        { t: "examples", items: [
          { en: "It was getting dark when we reached the village.", uz: "Biz qishloqqa yetganimizda qorong'i tusha boshlagan edi.", note: "Fon: was getting. Voqea: reached." },
          { en: "She was nervous because she had never spoken in public.", uz: "U asabiylashayotgan edi, chunki odamlar oldida hech gapirmagan edi.", note: "Holat: was. Oldingi tajriba: had spoken." },
          { en: "He walked into the room, sat down and opened his laptop.", uz: "U xonaga kirdi, o'tirdi va noutbukini ochdi.", note: "Birin-ketin voqealar: Past Simple." },
        ] },
        { t: "tip", tone: "good", md: "Savol bering: bu gap hikoyani **oldinga suryaptimi** (Past Simple), **manzarani tasvirlayaptimi** (Past Continuous) yoki **orqaga qaytayaptimi** (Past Perfect)?" },
        { t: "check", ex: { k: "choice", q: "*The sun ___ and the birds were singing.*", opts: ["shone", "was shining", "had shone", "shines"], a: 1, why: "Fon tasviri (manzara) uchun **Past Continuous**: *was shining*." } },
      ],
    },
    {
      title: "When va while: to'xtatilgan ish",
      blocks: [
        { t: "p", md: "Davom etayotgan ish (**Past Continuous**) paytida qisqa voqea (**Past Simple**) sodir bo'lsa, qisqa voqea uzun ishni **to'xtatadi**:" },
        { t: "examples", items: [
          { en: "I was walking home when I saw an accident.", uz: "Uyga ketayotib, yo'l hodisasini ko'rdim.", note: "Uzun ish: was walking. Qisqa voqea: saw." },
          { en: "While she was cooking, the phone rang.", uz: "U ovqat pishirayotganida telefon jiringladi." },
          { en: "While I was studying, my brother was playing music.", uz: "Men o'qiyotganimda akam musiqa qo'yib o'tirgan edi.", note: "Ikki ish bir vaqtda davom etgan: ikkalasi Continuous." },
        ] },
        { t: "table", head: ["So'z", "Qaysi zamon bilan", "Misol"], rows: [
          ["while", "odatda Past Continuous (davom etayotgan ish)", "While he was driving, he listened to the radio."],
          ["when + qisqa voqea", "Past Simple", "When the bell rang, everybody stood up."],
          ["when + uzun ish", "Past Continuous", "When I was living in Samarkand, I met Dilnoza."],
        ] },
        { t: "tip", tone: "warn", md: "**Stative** fe'llar (*know, like, want, understand, be*) odatda Continuous bo'lmaydi. *I was knowing* emas, **I knew**. *She was wanting* emas, **She wanted**." },
        { t: "check", ex: { k: "fill", q: "While we ___ dinner, the lights went out.", hint: "have, davom etayotgan ish", a: ["were having", "were eating"], why: "Uzun ish paytida voqea bo'ldi: **were having / were eating**." } },
        { t: "check", ex: { k: "choice", q: "When the teacher ___ in, the students were talking.", opts: ["was coming", "came", "had come", "has come"], a: 1, why: "Qisqa voqea — **came**. Talaba suhbati fon edi: *were talking*." } },
      ],
    },
    {
      title: "Uchalasini birga ishlatamiz",
      blocks: [
        { t: "p", md: "Real hikoyada uchala zamon birga keladi. Mana namuna va har bir zamonning vazifasi:" },
        { t: "examples", items: [
          { en: "When Karim arrived at the party, everyone was dancing. His friends had already eaten, so he made himself a sandwich.", uz: "Karim ziyofatga kelganda hamma raqsga tushayotgan edi. Do'stlari allaqachon ovqatlanib bo'lgan edi, shuning uchun u o'ziga sendvich qildi.", note: "arrived, made: voqealar. was dancing: fon. had eaten: oldin." },
          { en: "I was waiting for the bus when I realised that I had left my wallet at home.", uz: "Avtobus kutayotganimda hamyonimni uyda qoldirganimni angladim." },
        ] },
        { t: "compare",
          good: { title: "To'g'ri", items: ["We were driving when the car stopped.", "She was nervous because she had never spoken in public.", "They were already tired because they had walked all day."] },
          bad: { title: "Xato", items: ["We drove when the car stopped.", "She was nervous because she never spoke in public before.", "They were already tired because they walked all day."] } },
        { t: "tip", tone: "info", md: "Hamma gapda uchala zamon kerak emas. Faqat **ma'noga** qarang: voqea, fon yoki oldingi voqea. Haddan tashqari murakkab qilish shart emas." },
        { t: "check", ex: { k: "choice", q: "Qaysi variant to'g'ri?", opts: ["He fell off his bike while he rode to work.", "He fell off his bike while he was riding to work.", "He had fallen off his bike while he rode to work.", "He was falling off his bike while he rode to work."], a: 1, why: "*while* + davom etgan ish: **was riding**; qisqa voqea: **fell**." } },
        { t: "check", ex: { k: "fix", wrong: "When I was getting home, I found that someone broke into the flat.", a: ["When I got home, I found that someone had broken into the flat.", "When I got home I found that someone had broken into the flat."], hint: "Ikki xato bor", why: "Yetib kelish — qisqa voqea (**got**), o'g'ri kirishi oldin bo'lgan (**had broken**)." } },
      ],
    },
    {
      title: "O'qing: Bo'ron kechasi",
      blocks: [
        {
          t: "text", title: "The night of the storm",
          en: "It was a dark night and a strong storm was blowing outside. Nilufar was sitting alone in her flat when the lights went out. She was reading a book, so she put it down and looked for a candle. The street was silent because everyone had gone home early. Then she heard a loud noise from the kitchen. She walked slowly towards it, and she found her cat. It had jumped onto the table and knocked over a glass. Nilufar laughed, picked up the cat and went back to the sofa. The storm was still blowing, but she was not afraid any more.",
          uz: "Qorong'i kecha edi, tashqarida kuchli bo'ron esayotgan edi. Chiroqlar o'chganda Nilufar kvartirasida yolg'iz o'tirgan edi. U kitob o'qiyotgan edi, shuning uchun uni qo'yib, sham qidirdi. Ko'cha jim edi, chunki hamma erta uyiga ketgan edi. Keyin oshxonadan baland shovqin eshitdi. U sekin tomonga bordi va mushugini topdi. U stolga sakrab, stakanni ag'dargan edi. Nilufar kulib yubordi, mushukni ko'tarib, divanga qaytdi. Bo'ron hali ham esayotgan edi, lekin u endi qo'rqmasdi.",
        },
        { t: "check", ex: { k: "choice", q: "Why was the street silent?", opts: ["Everyone had gone home early.", "The storm had stopped.", "Nilufar was sleeping.", "The cat was sleeping."], a: 0, why: "Matnda: *everyone had gone home early* — oldin bo'lgan voqea." } },
        { t: "check", ex: { k: "tf", q: "The cat knocked over the glass after Nilufar came into the kitchen.", a: false, why: "Mushuk stakanni **oldin** ag'dargan (*had jumped ... and knocked over*), Nilufar keyin keldi." } },
      ],
    },
    {
      title: "Dialog: Qiziq voqea",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sardor", en: "Why were you so late yesterday, Madina?", uz: "Madina, kecha nega bunchalik kech qolding?" },
            { who: "Madina", en: "I was waiting for the bus when a man ran past me.", uz: "Avtobus kutayotgan edim, yonimdan bir odam yugurib o'tdi." },
            { who: "Sardor", en: "Why was he running?", uz: "Nega yugurayotgan edi?" },
            { who: "Madina", en: "He had dropped his bag, and the bag was open. Papers were flying everywhere.", uz: "Sumkasini tushirib yuborgan edi, sumka ochiq edi. Qog'ozlar hamma yoqqa uchayotgan edi." },
            { who: "Sardor", en: "Did you help him?", uz: "Unga yordam berdingmi?" },
            { who: "Madina", en: "Yes, I picked up all the papers. By then I had missed my bus!", uz: "Ha, hamma qog'ozlarni terdim. O'sha paytda avtobusni o'tkazib yuborgan edim!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Madina helped the man to pick up his papers.", a: true, why: "Dialogda: *I picked up all the papers.*" } },
      ],
    },
  ],
  words: [
    { en: "hurry", uz: "shoshilmoq", ipa: "ˈhʌr.i", pos: "verb", ex: "Everybody was hurrying to get home before the rain.", exUz: "Hamma yomg'irdan oldin uyga yetishga shoshilayotgan edi." },
    { en: "shout", uz: "baqirmoq", ipa: "ʃaʊt", pos: "verb", ex: "A man was shouting at the taxi driver.", exUz: "Bir odam taksichiga baqirayotgan edi." },
    { en: "whisper", uz: "pichirlamoq", ipa: "ˈwɪs.pər", pos: "verb", ex: "They were whispering during the film.", exUz: "Ular film paytida pichirlashayotgan edi." },
    { en: "wander", uz: "kezib yurmoq", ipa: "ˈwɒn.dər", pos: "verb", ex: "We wandered through the old streets of Khiva.", exUz: "Biz Xivaning eski ko'chalarida kezib yurdik." },
    { en: "stare", uz: "tikilib qaramoq", ipa: "steər", pos: "verb", ex: "The child was staring at the big dog.", exUz: "Bola katta itga tikilib turardi." },
    { en: "crowd", uz: "olomon", ipa: "kraʊd", pos: "noun", ex: "A big crowd was waiting outside the stadium.", exUz: "Stadion tashqarisida katta olomon kutib turardi." },
    { en: "storm", uz: "bo'ron", ipa: "stɔːm", pos: "noun", ex: "A storm was coming, so we went inside.", exUz: "Bo'ron kelayotgan edi, shuning uchun ichkariga kirdik." },
    { en: "silence", uz: "sukunat", ipa: "ˈsaɪ.ləns", pos: "noun", ex: "There was complete silence in the room.", exUz: "Xonada to'liq sukunat hukm surardi." },
    { en: "escape", uz: "qochib qutulmoq", ipa: "ɪˈskeɪp", pos: "verb", ex: "The prisoner had escaped before the police arrived.", exUz: "Mahbus politsiya kelishidan oldin qochib ketgan edi." },
    { en: "chase", uz: "quvmoq", ipa: "tʃeɪs", pos: "verb", ex: "The dog was chasing a small cat.", exUz: "It kichkina mushukni quvayotgan edi." },
  ],
  practice: [
    { k: "choice", q: "**I ___ TV when the phone rang.**", opts: ["watched", "was watching", "had watched", "watch"], a: 1, why: "Telefon jiringlaganda televizor ko'rish davom etayotgan edi: **was watching**." },
    { k: "choice", q: "**While Tom was cooking, Anna ___ the table.**", opts: ["laid", "was laying", "had laid", "lays"], a: 1, why: "Ikki ish bir vaqtda davom etgan: **was laying**." },
    { k: "choice", q: "**When we got to the cinema, the film ___.**", opts: ["started", "was starting", "had already started", "starts"], a: 2, why: "Film biz kelishimizdan oldin boshlangan: **had already started**." },
    { k: "listen", say: "I was crossing the road when a car stopped.", opts: ["I was crossing the road when a car stopped.", "I crossed the road when a car stopped.", "I had crossed the road when a car stopped.", "I was crossing the road when a car was stopping."], a: 0, why: "Uzun ish: **was crossing**; qisqa voqea: **stopped**." },
    { k: "fill", q: "She ___ when the door opened.", hint: "sleep, davom etayotgan ish", a: ["was sleeping"], why: "Davom etayotgan ish: **was sleeping**." },
    { k: "fill", q: "He was tired because he ___ all night.", hint: "work", a: ["had worked", "had been working"], why: "Charchash sababi oldin bo'lgan: **had worked**." },
    { k: "fill", q: "While I ___ in London, I met an old friend.", hint: "be", a: ["was staying", "was living", "was studying", "was working"], uz: "Londonda turganimda eski do'stimni uchratdim.", why: "Davom etgan vaziyat: **was staying / was living**." },
    { k: "order", uz: "Men uyga ketayotib, eski do'stimni ko'rdim.", words: ["I", "was", "walking", "home", "when", "I", "saw", "an", "old", "friend."], extra: ["walked", "had"], why: "Uzun ish: *was walking*, qisqa voqea: *saw*." },
    { k: "order", uz: "Ular kelganida biz allaqachon ovqatlanib bo'lgan edik.", words: ["We", "had", "already", "eaten", "when", "they", "arrived."], extra: ["were", "ate"], alt: [["When", "they", "arrived,", "we", "had", "already", "eaten."]], why: "Oldin bo'lgan voqea: **had already eaten**." },
    { k: "translate", uz: "Men dars o'qiyotganimda telefon jiringladi.", a: ["The phone rang while I was studying.", "While I was studying, the phone rang.", "The phone rang when I was studying.", "When I was studying, the phone rang."], why: "Uzun ish: **was studying**; qisqa voqea: **rang**." },
    { k: "translate", uz: "U asabiy edi, chunki hech qachon intervyu bermagan edi.", a: ["She was nervous because she had never given an interview.", "He was nervous because he had never given an interview.", "She was nervous because she had never had an interview.", "He was nervous because he had never had an interview."], why: "Holat: **was**; oldingi tajriba: **had never given**." },
    { k: "match", pairs: [["hurry", "shoshilmoq"], ["whisper", "pichirlamoq"], ["stare", "tikilib qaramoq"], ["crowd", "olomon"], ["silence", "sukunat"], ["chase", "quvmoq"]] },
    { k: "tf", q: "*I was knowing the answer.* — bu gap to'g'ri.", a: false, why: "**know** stative fe'l: *I knew the answer.*" },
    { k: "fix", wrong: "While I walked in the park, I saw a fox.", a: ["While I was walking in the park, I saw a fox.", "While I was walking in the park I saw a fox."], hint: "Davom etayotgan ish", why: "*while* bilan uzun ish: **was walking**." },
    { k: "speak", say: "It was raining when I left the house, and I had forgotten my umbrella.", uz: "Uydan chiqqanimda yomg'ir yog'ayotgan edi va men soyabonimni unutgan edim." },
  ],
  quiz: [
    { k: "choice", q: "**The children ___ in the garden when it started to rain.**", opts: ["played", "were playing", "had played", "play"], a: 1, why: "Davom etayotgan ish: **were playing**." },
    { k: "choice", q: "**I couldn't pay because I ___ my card at home.**", opts: ["left", "was leaving", "had left", "leave"], a: 2, why: "Qoldirish to'lashdan oldin bo'lgan: **had left**." },
    { k: "choice", q: "**The phone ___ while I was having a shower.**", opts: ["rang", "was ringing", "had rung", "rings"], a: 0, why: "Qisqa voqea — **rang**. Dush qabul qilish uzun ish edi." },
    { k: "fill", q: "When the alarm rang, he ___ asleep.", hint: "be, davom etayotgan holat", a: ["was"], why: "Holat: *was asleep*." },
    { k: "fill", q: "Nobody knew the answer, so there was complete ___.", hint: "jimjitlik", a: ["silence"], why: "**silence** — sukunat." },
    { k: "fill", q: "They were looking at us because we ___ very loudly.", hint: "talk", a: ["were talking"], why: "Fon: **were talking**." },
    { k: "listen", say: "He had missed the train, so he took a taxi.", opts: ["He had missed the train, so he took a taxi.", "He missed the train, so he took a taxi.", "He was missing the train, so he took a taxi.", "He has missed the train, so he took a taxi."], a: 0, why: "**had missed** — oldin bo'lgan." },
    { k: "tf", q: "*While I was cooking, she was watching TV* — ikki ish bir vaqtda davom etgan.", a: true, why: "Ikkalasi ham Past Continuous." },
    { k: "order", uz: "U bekatda kutayotganida yomg'ir yog'a boshladi.", words: ["It", "started", "to", "rain", "while", "he", "was", "waiting."], extra: ["had", "waited"], alt: [["While", "he", "was", "waiting,", "it", "started", "to", "rain."]], why: "Uzun ish: *was waiting*; qisqa voqea: *started*." },
    { k: "translate", uz: "Biz yetib kelganimizda mehmonlar allaqachon ketib bo'lgan edi.", a: ["When we arrived, the guests had already left.", "The guests had already left when we arrived.", "When we got there, the guests had already left.", "The guests had already left when we got there."], why: "Oldin bo'lgan voqea: **had already left**." },
  ],
  summary: [
    "**Past Simple** — asosiy voqealar birin-ketin: *He opened the door and went in.*",
    "**Past Continuous** — fon va to'xtatilgan uzun ish: *I was walking home when I saw an accident.*",
    "**Past Perfect** — voqeadan oldin bo'lgan ish: *She was upset because she had lost her phone.*",
    "**while** + Continuous, **when** + qisqa voqea. Ikki parallel ish: *While I was cooking, he was watching TV.*",
    "Stative fe'llar (*know, like, want, be*) Continuous bo'lmaydi: *I knew*, emas ~~I was knowing~~.",
  ],
  homework: "Qiziq bir voqeani 6-8 gapda yozing (mashina buzildi, yomg'ir yog'di, kutilmagan mehmon keldi). Gaplarning orasida kamida bittadan **Past Simple**, **Past Continuous** va **Past Perfect** bo'lsin. Keyin har bir zamonni tagiga chizing va nega aynan shu zamon kerakligini o'zingizga tushuntiring.",
};

export default lesson;
