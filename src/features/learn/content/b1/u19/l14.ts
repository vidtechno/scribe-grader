import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking. A radio news bulletin, then retelling the news with reported speech (l3, l4, l13) and linkers (l6).
const lesson: Lesson = {
  id: 'u19-l14',
  title: 'Listening and speaking: a news report',
  titleUz: "Tinglash va gapirish: yangiliklar ma'ruzasi",
  mini: true,
  kind: 'skill',
  goal: "Qisqa **yangiliklar ma'ruzasini** tinglab asosiy ma'lumotni (**kim, nima, qayerda, qachon**) tushunasiz va uni **According to…, X said that…, X warned people not to…** bilan do'stingizga qayta aytib berasiz.",
  slides: [
    {
      title: "Yangilikni qanday tinglash kerak",
      blocks: [
        { t: 'p', md: "Yangiliklar tez aytiladi va unda ko'p ma'lumot bor. Har bir so'zni tushunish shart emas. **Ikki marta tinglash** rejasi:" },
        { t: 'table', head: ["Tinglash", "Nimani qidirasiz"], rows: [
          ["1-marta", "Umumiy ma'no: **nima bo'ldi? qayerda?**"],
          ["2-marta", "Tafsilot: **raqamlar, vaqt, kim aytdi, keyin nima bo'ladi**"],
        ] },
        { t: 'tip', tone: 'info', md: "Yangilikda **manba** doim aytiladi: **according to the police** (politsiyaning aytishicha), **the mayor said that…** (mer shuni aytdi). Ularni eshitsangiz, keyingi gap — asosiy ma'lumot." },
        { t: 'check', ex: { k: 'choice', q: "**According to the police, the road is closed.** Bu ma'lumot kimdan?", opts: ["Politsiyadan", "Siz o'zingizdan", "Gazetadan", "Manba aytilmagan"], a: 0, why: "**According to** + manba." } },
      ],
    },
    {
      title: "Tinglang: radio yangiliklari",
      blocks: [
        { t: 'p', md: "Yangiliklarni tinglang (play tugmasi). Avval umumiy ma'noni tushuning, so'ng savollarga javob bering." },
        { t: 'text', title: 'Evening news bulletin',
          en: "Good evening. Here are the latest headlines. Heavy rain has caused floods in the town of Millbrook. According to the local police, about two hundred people left their homes this afternoon. The emergency services are using boats to reach families on the main road. The mayor said that the rescue had started early and that everybody was safe, but she warned people not to drive through the water. Meanwhile, the weather service has promised that the rain will stop by tomorrow morning. We will bring you more news at ten o'clock.",
          uz: "Xayrli kech. Mana so'nggi sarlavhalar. Kuchli yomg'ir Millbrook shahrida toshqinga sabab bo'ldi. Mahalliy politsiyaning aytishicha, bugun tushdan keyin ikki yuzga yaqin odam uylarini tark etdi. Favqulodda xizmatlar asosiy ko'chadagi oilalarga yetib borish uchun qayiqlardan foydalanmoqda. Mer qutqaruv ishlari erta boshlanganini va hamma xavfsiz ekanini aytdi, lekin odamlarni suv orqali mashinada o'tmaslikka ogohlantirdi. Shu orada ob-havo xizmati yomg'ir ertaga ertalabgacha to'xtashiga va'da berdi. Soat o'nda sizga yana yangiliklar yetkazamiz." },
        { t: 'check', ex: { k: 'choice', q: "Where are the floods?", opts: ["In Millbrook", "In London", "On the main road only", "In a school"], a: 0, why: "*Heavy rain has caused floods in the town of Millbrook.*" } },
        { t: 'check', ex: { k: 'choice', q: "What did the mayor warn people not to do?", opts: ["Drive through the water", "Leave their homes", "Use boats", "Listen to the radio"], a: 0, why: "*She warned people not to drive through the water.*" } },
        { t: 'check', ex: { k: 'tf', q: "The weather service said the rain would stop tonight.", a: false, why: "*The rain will stop by tomorrow morning.*" } },
      ],
    },
    {
      title: "Yangilikni qayta aytish",
      blocks: [
        { t: 'p', md: "Do'stingizga yangilikni aytganda, uni **ko'chirma gap** bilan beramiz va manbani aytamiz. Foydali iboralar:" },
        { t: 'table', head: ["Maqsad", "Ibora"], speak: [1], rows: [
          ["Manbani aytish", "According to the radio, there are floods in Millbrook."],
          ["Kim nima dedi", "The mayor said that everybody was safe."],
          ["Ogohlantirish", "She warned people not to drive through the water."],
          ["Va'da", "They promised that the rain would stop by morning."],
          ["Savol", "I asked what time the news would start."],
        ] },
        { t: 'tip', tone: 'good', md: "Yangilikni aytganda ko'pincha **said that / told us that / warned people to** ishlatiladi. Zamon bir qadam o'tmishga siljiydi: *will stop* → *would stop*, *were safe* → *had been safe* (agar ish oldin bo'lgan bo'lsa)." },
        { t: 'check', ex: { k: 'fill', q: "The weather service said that the rain ___ stop tomorrow. (will)", a: ["would"], why: "*will* → **would** (ko'chirma gap)." } },
        { t: 'check', ex: { k: 'order', uz: "Radio ma'lumotiga ko'ra Millbrookda toshqin bor.", words: ["According", "to", "the", "radio,", "there", "are", "floods", "in", "Millbrook."], extra: ["by", "were"], why: "**According to** + manba." } },
      ],
    },
    {
      title: "Dialog: Yangilikni do'stga aytish",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Sara', en: "Did you hear the news on the radio?", uz: "Radiodan yangiliklarni eshitdingmi?" },
          { who: 'Aziz', en: "No, what happened?", uz: "Yo'q, nima bo'ldi?" },
          { who: 'Sara', en: "There are floods in Millbrook. According to the police, about two hundred people left their homes.", uz: "Millbrookda toshqin bor. Politsiyaning aytishicha, ikki yuzga yaqin odam uylarini tark etgan." },
          { who: 'Aziz', en: "That's terrible. Is everybody safe?", uz: "Bu dahshat. Hamma xavfsizmi?" },
          { who: 'Sara', en: "The mayor said that everybody was safe. She also warned people not to drive through the water.", uz: "Mer hamma xavfsiz ekanini aytdi. U odamlarni suv orqali mashinada o'tmaslikka ham ogohlantirdi." },
          { who: 'Aziz', en: "Did they say when the rain would stop?", uz: "Yomg'ir qachon to'xtashini aytishdimi?" },
          { who: 'Sara', en: "Yes, they promised that it would stop tomorrow morning.", uz: "Ha, ertaga ertalab to'xtashiga va'da berishdi." },
        ] },
        { t: 'check', ex: { k: 'dictation', say: "According to the police, about two hundred people left their homes.", a: ["According to the police, about two hundred people left their homes.", "According to the police about two hundred people left their homes.", "According to the police, about 200 people left their homes."] } },
      ],
    },
    {
      title: "Endi siz ayting",
      blocks: [
        { t: 'p', md: "30 soniyalik qisqa yangilik aytib ko'ring. Reja: **1) sarlavha, 2) manba va tafsilot, 3) keyin nima bo'ladi**. Namuna:" },
        { t: 'table', head: ["Qadam", "Namuna gap"], speak: [1], rows: [
          ["1. Sarlavha", "There are floods in Millbrook."],
          ["2. Manba va tafsilot", "According to the police, two hundred people left their homes."],
          ["3. Keyin nima bo'ladi", "The weather service promised that the rain would stop tomorrow morning."],
        ] },
        { t: 'tip', tone: 'good', md: "Sekin va aniq gapiring. **Meanwhile** (shu orada) bilan ikkinchi yangilikka o'ting: *Meanwhile, the trains are running again.*" },
        { t: 'check', ex: { k: 'choice', q: "Ikkinchi yangilikka o'tish uchun qaysi so'z mos?", opts: ["Meanwhile", "Because", "Although", "Unless"], a: 0, why: "**Meanwhile** — shu orada, boshqa joyda." } },
      ],
    },
  ],
  words: [
    { en: 'bulletin', uz: "qisqa yangiliklar e'lon qilinishi", ipa: 'ˈbʊl.ə.tɪn', pos: 'noun', ex: 'I listen to the news bulletin every morning.', exUz: "Men har ertalab yangiliklarni tinglayman." },
    { en: 'flood', uz: "toshqin", ipa: 'flʌd', pos: 'noun', ex: 'The flood closed the main road.', exUz: "Toshqin asosiy yo'lni yopib qo'ydi." },
    { en: 'rescue', uz: "qutqaruv; qutqarmoq", ipa: 'ˈres.kjuː', pos: 'noun', ex: 'The rescue took three hours.', exUz: "Qutqaruv uch soat davom etdi." },
    { en: 'according to', uz: "...ning aytishicha", ipa: 'əˈkɔː.dɪŋ tuː', pos: 'phrase', ex: 'According to my brother, the film is boring.', exUz: "Akamning aytishicha, film zerikarli." },
    { en: 'emergency services', uz: "favqulodda xizmatlar", ipa: 'ɪˈmɜː.dʒən.si ˈsɜː.vɪ.sɪz', pos: 'noun', ex: 'The emergency services arrived in ten minutes.', exUz: "Favqulodda xizmatlar o'n daqiqada yetib keldi." },
  ],
  practice: [
    { k: 'listen', say: "Heavy rain has caused floods in the town.", opts: ["Heavy rain has caused floods in the town.", "Heavy rain has stopped in the town.", "Heavy snow has closed the town.", "A heavy storm has hit the town."], a: 0 },
    { k: 'listen', say: "The mayor said that everybody was safe.", opts: ["The mayor said that everybody was safe.", "The mayor said that nobody was safe.", "The mayor asked if everybody was safe.", "The mayor warned everybody to be safe."], a: 0 },
    { k: 'match', pairs: [['bulletin', "qisqa yangiliklar"], ['flood', 'toshqin'], ['rescue', "qutqaruv"], ['according to', "...ning aytishicha"], ['emergency services', "favqulodda xizmatlar"]] },
    { k: 'choice', q: "___ the police, the road will open at noon.", opts: ["According to", "Because of", "Instead of", "In spite"], a: 0, why: "Manbani **According to** bilan beramiz." },
    { k: 'fill', q: "She warned people ___ to drive through the water.", a: ["not"], why: "**warned + kim + not to**." },
    { k: 'fill', q: "They promised that the rain ___ stop by morning. (will)", a: ["would"], why: "*will* → **would**." },
    { k: 'tf', q: "The emergency services are using boats to reach families.", a: true, why: "Matnda shunday aytilgan." },
    { k: 'dictation', say: "Meanwhile, the weather service has promised that the rain will stop.", a: ["Meanwhile, the weather service has promised that the rain will stop.", "Meanwhile the weather service has promised that the rain will stop."] },
    { k: 'order', uz: "Mer hamma xavfsiz ekanini aytdi.", words: ["The", "mayor", "said", "that", "everybody", "was", "safe."], extra: ["is", "told"], alt: [["The", "mayor", "said", "everybody", "was", "safe."]], why: "*is safe* → **was safe**." },
    { k: 'translate', uz: "Politsiyaning aytishicha, yo'l yopiq.", a: ["According to the police, the road is closed.", "According to the police the road is closed."] },
    { k: 'speak', say: "According to the radio, there are floods in Millbrook.", uz: "Radioga ko'ra Millbrookda toshqin bor." },
    { k: 'speak', say: "She warned people not to drive through the water.", uz: "U odamlarni suv orqali mashinada o'tmaslikka ogohlantirdi." },
    { k: 'speak', say: "Meanwhile, the trains are running again.", uz: "Shu orada poyezdlar yana yurmoqda." },
  ],
  quiz: [
    { k: 'listen', say: "The emergency services are using boats.", opts: ["The emergency services are using boats.", "The emergency services are using buses.", "The emergency services are using bikes.", "The emergency services are using bridges."], a: 0 },
    { k: 'choice', q: "The reporter said, \"The rain will stop.\" → The reporter said that the rain ___ stop.", opts: ["would", "will", "has", "is"], a: 0, why: "*will* → **would**." },
    { k: 'choice', q: "Qaysi ibora ma'lumot manbasini bildiradi?", opts: ["According to the mayor", "In the mayor", "Because the mayor", "Of the mayor"], a: 0, why: "**According to** — ...ning aytishicha." },
    { k: 'fill', q: "The news ___ at ten o'clock. (start)", a: ["starts", "will start"], hint: "jadval yoki reja", why: "Jadval yoki reja: *starts* yoki *will start*." },
    { k: 'tf', q: "In the bulletin, the mayor said that nobody was safe.", a: false, why: "Mer hamma xavfsiz dedi." },
    { k: 'order', uz: "Shu orada ob-havo xizmati va'da berdi.", words: ["Meanwhile,", "the", "weather", "service", "made", "a", "promise."], extra: ["makes", "for"], why: "**Meanwhile** — shu orada." },
    { k: 'translate', uz: "Ular yomg'ir ertaga to'xtashiga va'da berishdi.", a: ["They promised that the rain would stop tomorrow.", "They promised the rain would stop tomorrow.", "They promised that it would stop tomorrow.", "They promised it would stop tomorrow."] },
  ],
  summary: [
    "Yangilikni **ikki marta** tinglang: avval umumiy ma'no, keyin raqam, vaqt va manba.",
    "Manba: **According to the police, … / The mayor said that…**",
    "Qayta aytganda zamon siljiydi (*will* → *would*), **warned people not to…**, **promised that…**.",
    "Keyingi yangilikka **Meanwhile** bilan o'ting. Sekin va aniq gapiring.",
  ],
  homework: "Bugungi biror yangilikni (radio, TV yoki telefon) 3 ta gapda ingliz tilida ayting: sarlavha, manba (**according to…**) va keyingi reja. Ovozingizni yozib, eshiting.",
};

export default lesson;
