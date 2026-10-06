import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u5-l1",
  title: "Present Simple vs Continuous",
  titleUz: "Present Simple yoki Continuous?",
  goal: "Ikki hozirgi zamonni farqlaysiz: **odat va doimiy holat** uchun Present Simple (*I work*), **ayni paytdagi ish** uchun Present Continuous (*I am working*). Ob-havo va fasllar haqida gapira olasiz.",
  slides: [
    {
      title: "Ikki xil \"hozir\"",
      blocks: [
        { t: "p", md: "Siz ikki hozirgi zamonni allaqachon bilasiz: **Present Simple** (3-bo'lim) va **Present Continuous** (4-bo'lim). Bugun ularni yonma-yon qo'yamiz va qachon qaysi birini ishlatishni o'rganamiz." },
        { t: "p", md: "Yaxshi xabar: o'zbek tilida ham xuddi shunday farq bor!\n• *Men choy **ichaman**.* — odat → **I drink** tea.\n• *Men choy **ichyapman**.* — hozir → **I am drinking** tea." },
        {
          t: "examples", items: [
            { en: "I drink tea every morning.", uz: "Men har kuni ertalab choy ichaman.", note: "odat → Present Simple" },
            { en: "I am drinking tea now.", uz: "Men hozir choy ichyapman.", note: "ayni payt → Present Continuous" },
            { en: "She works in a bank.", uz: "U bankda ishlaydi.", note: "doimiy holat" },
            { en: "She is talking on the phone now.", uz: "U hozir telefonda gaplashyapti.", note: "ayni payt" },
          ],
        },
        { t: "tip", tone: "info", md: "Har safar o'zingizga savol bering: **\"Bu odatmi yoki hozir bo'lyaptimi?\"** Odat, takrorlanadigan ish, doimiy fakt → **Simple**. Gapirayotgan paytingizda davom etayotgan ish → **Continuous**." },
        { t: "check", ex: { k: "choice", q: "\"Men **hozir** kitob o'qiyapman.\" — to'g'ri tarjimani tanlang.", opts: ["I read a book now.", "I am reading a book now.", "I reading a book now.", "I am read a book now."], a: 1, why: "Hozir bo'layotgan ish → **am + reading**. *I reading* da **am** yo'q, *am read* da esa **-ing** yo'q." } },
      ],
    },
    {
      title: "Shakllar yonma-yon",
      blocks: [
        {
          t: "table", head: ["", "Present Simple", "Present Continuous"],
          rows: [
            ["+", "I work. / He works.", "I am working. / He is working."],
            ["−", "I don't work. / He doesn't work.", "I'm not working. / He isn't working."],
            ["?", "Do you work? / Does he work?", "Are you working? / Is he working?"],
            ["Javob", "Yes, I do. / No, he doesn't.", "Yes, I am. / No, he isn't."],
          ],
        },
        { t: "tip", tone: "warn", md: "Yordamchi so'zlarni aralashtirmang:\n• Simple → **do / does** + fe'l (oddiy shakl)\n• Continuous → **am / is / are** + fe'l**-ing**" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["Do you work on Saturdays?", "Are you working now?", "He doesn't play chess.", "He isn't playing now."] },
          bad: { title: "Xato", items: ["Do you working on Saturdays?", "Are you work now?", "He isn't play chess.", "He doesn't playing now."] },
        },
        { t: "check", ex: { k: "fill", q: "___ your sister work on Saturdays?", a: ["Does"], uz: "Opangiz shanba kunlari ishlaydimi?", why: "Odat haqida savol, **she** → **Does**: *Does your sister work…?*" } },
        { t: "check", ex: { k: "fill", q: "Shh! The baby ___. (sleep)", a: ["is sleeping", "'s sleeping"], uz: "Jim! Chaqaloq uxlayapti.", why: "Hozir bo'lyapti → **is sleeping**." } },
      ],
    },
    {
      title: "Signal so'zlar",
      blocks: [
        { t: "p", md: "Gapdagi ba'zi so'zlar qaysi zamon kerakligini \"aytib\" turadi. Ularni ko'rsangiz — darrov zamonni tanlang:" },
        {
          t: "table", head: ["Present Simple (odat)", "Present Continuous (hozir)"],
          rows: [
            ["every day, every week", "now, right now"],
            ["always, usually, often", "at the moment"],
            ["sometimes, rarely, never", "today, this week"],
            ["on Mondays, in summer", "Look! Listen!"],
          ],
        },
        {
          t: "examples", items: [
            { en: "My father usually goes to work by bus.", uz: "Otam odatda ishga avtobusda boradi." },
            { en: "Today he is going by taxi.", uz: "Bugun u taksida ketyapti." },
            { en: "We often play football on Sundays.", uz: "Biz yakshanba kunlari tez-tez futbol o'ynaymiz." },
            { en: "Look! The children are playing in the park.", uz: "Qarang! Bolalar parkda o'ynashyapti." },
            { en: "I'm busy at the moment.", uz: "Men ayni paytda bandman." },
          ],
        },
        { t: "tip", tone: "good", md: "**at the moment** = \"ayni paytda, hozirgi daqiqada\" — bu **now** ning sinonimi. *Look!* va *Listen!* dan keyin ham deyarli doim Continuous keladi: hozir ko'rib/eshitib turibmiz." },
        { t: "check", ex: { k: "choice", q: "My father ___ to work by bus every day.", opts: ["is going", "goes", "go", "going"], a: 1, why: "**every day** — odat → Present Simple, **he** → **goes**." } },
      ],
    },
    {
      title: "Bu fe'llar -ing olmaydi",
      blocks: [
        { t: "p", md: "Ba'zi fe'llar harakatni emas, **holat, fikr yoki his-tuyg'uni** bildiradi. Ular \"hozir\" ma'nosida ham odatda **Present Simple**da qoladi:\n• **like, love** — yoqtirmoq, sevmoq\n• **want, need** — xohlamoq, kerak bo'lmoq\n• **know, understand** — bilmoq, tushunmoq\n• **have** — ega bo'lmoq (*I have a car*)" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I want a coffee now.", "I know the answer.", "I like this song.", "She has a new phone.", "Do you understand me?"] },
          bad: { title: "Xato", items: ["I am wanting a coffee now.", "I am knowing the answer.", "I'm liking this song.", "She is having a new phone.", "Are you understanding me?"] },
        },
        { t: "tip", tone: "info", md: "Diqqat: **have** \"ega bo'lmoq\" ma'nosida -ing olmaydi, lekin **have breakfast / have lunch** (ovqatlanmoq) — bu harakat, shuning uchun mumkin: *I'm having lunch now.* ✅" },
        { t: "check", ex: { k: "tf", q: "**I am knowing his name.** — bu to'g'ri gap.", a: false, why: "**know** -ing olmaydi: *I **know** his name.*" } },
      ],
    },
    {
      title: "Ob-havo va fasllar",
      blocks: [
        { t: "p", md: "Ob-havo haqida ingliz tilida doim **It** bilan gapiramiz. O'zbekcha \"Havo issiq\" → inglizcha **It is hot** (\"u issiq\"). **It** ni tushirib qoldirmang!" },
        {
          t: "table", head: ["Ot", "Sifat", "Gap"],
          rows: [
            ["sun (quyosh)", "sunny", "It's sunny."],
            ["rain (yomg'ir)", "rainy", "It's rainy."],
            ["wind (shamol)", "windy", "It's windy."],
            ["cloud (bulut)", "cloudy", "It's cloudy."],
          ],
          speak: [1, 2],
        },
        {
          t: "examples", items: [
            { en: "What's the weather like today?", uz: "Bugun ob-havo qanaqa?" },
            { en: "It's sunny and warm.", uz: "Quyoshli va iliq." },
            { en: "It's raining now.", uz: "Hozir yomg'ir yog'yapti.", note: "hozir → Continuous" },
            { en: "It often rains in autumn.", uz: "Kuzda tez-tez yomg'ir yog'adi.", note: "odat → Simple" },
            { en: "It's very cold in winter.", uz: "Qishda juda sovuq bo'ladi." },
          ],
        },
        { t: "p", md: "Fasllar: **spring** (bahor), **summer** (yoz), **autumn** (kuz), **winter** (qish). Fasl oldidan **in** ishlatamiz: *in spring, in summer*." },
        {
          t: "sounds", items: [
            { label: "weather", say: "weather", uz: "**th** — jarangli \"dh\": tilning uchi tishlar orasida, ovoz bilan. \"we-dhə\" (*w* — lablar dumaloq, \"v\" emas). Oxiridagi *r* o'qilmaydi.", examples: ["weather", "the"] },
            { label: "autumn", say: "autumn", uz: "Oxiridagi **n** o'qilmaydi: \"o:-təm\".", examples: ["autumn"] },
            { label: "warm", say: "warm", uz: "\"wo:m\" — **ar** bu yerda cho'ziq \"o:\" bo'ladi.", examples: ["warm"] },
            { label: "cloudy", say: "cloudy", uz: "**ou** — \"au\": \"klau-di\".", examples: ["cloudy"] },
          ],
        },
        { t: "tip", tone: "warn", md: "❌ *Is cold today.* → ✅ *It is cold today.* O'zbekcha gapda ega yo'q, inglizchada esa **It** shart." },
        { t: "check", ex: { k: "listen", say: "It's windy today.", opts: ["It's winter today.", "It's windy today.", "It's rainy today."], a: 1, why: "**windy** — shamolli. *winter* — qish." } },
      ],
    },
    {
      title: "Dialog: telefonda",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Hi, Malika! What are you doing?", uz: "Salom, Malika! Nima qilyapsan?" },
            { who: "Malika", en: "I'm sitting in the park. It's sunny and warm today.", uz: "Parkda o'tiribman. Bugun quyoshli va iliq." },
            { who: "Aziz", en: "Really? It's raining here in Samarkand.", uz: "Rostdanmi? Bu yerda, Samarqandda yomg'ir yog'yapti." },
            { who: "Malika", en: "Do you like rain?", uz: "Yomg'irni yoqtirasanmi?" },
            { who: "Aziz", en: "No, I don't. I like summer. I usually swim every day in July.", uz: "Yo'q. Men yozni yoqtiraman. Iyulda odatda har kuni suzaman." },
            { who: "Malika", en: "I love autumn. It isn't hot and it isn't cold.", uz: "Men kuzni yaxshi ko'raman. Issiq ham emas, sovuq ham emas." },
          ],
        },
        { t: "tip", tone: "good", md: "Dialogda ikki zamonni toping: *What are you **doing**? I'm **sitting**… It's **raining*** — hozir. *Do you **like**…? I usually **swim**…* — odat va holat." },
        { t: "check", ex: { k: "choice", q: "Nima uchun dialogda **Do you like rain?** deyilgan, *Are you liking…* emas?", opts: ["Chunki savol o'tgan zamonda", "Chunki **like** holat fe'li, -ing olmaydi", "Chunki Aziz hozir yomg'irda", "Ikkalasi ham bir xil to'g'ri"], a: 1, why: "**like** — his-tuyg'u (holat) fe'li, u Present Simple'da qoladi." } },
      ],
    },
  ],
  words: [
    { en: "weather", uz: "ob-havo", ipa: "ˈweð.ə", pos: "noun", ex: "What's the weather like today?", exUz: "Bugun ob-havo qanaqa?" },
    { en: "sunny", uz: "quyoshli", ipa: "ˈsʌn.i", pos: "adj", ex: "It's sunny today.", exUz: "Bugun quyoshli." },
    { en: "rainy", uz: "yomg'irli", ipa: "ˈreɪ.ni", pos: "adj", ex: "It's often rainy in spring.", exUz: "Bahorda tez-tez yomg'ir bo'ladi." },
    { en: "windy", uz: "shamolli", ipa: "ˈwɪn.di", pos: "adj", ex: "It's very windy at the moment.", exUz: "Ayni paytda havo juda shamolli." },
    { en: "cloudy", uz: "bulutli", ipa: "ˈklaʊ.di", pos: "adj", ex: "It isn't sunny. It's cloudy.", exUz: "Quyoshli emas. Bulutli." },
    { en: "warm", uz: "iliq", ipa: "wɔːm", pos: "adj", ex: "The water is warm.", exUz: "Suv iliq." },
    { en: "spring", uz: "bahor", ipa: "sprɪŋ", pos: "noun", ex: "I love spring.", exUz: "Men bahorni yaxshi ko'raman." },
    { en: "summer", uz: "yoz", ipa: "ˈsʌm.ə", pos: "noun", ex: "It's very hot in summer.", exUz: "Yozda juda issiq." },
    { en: "autumn", uz: "kuz", ipa: "ˈɔː.təm", pos: "noun", ex: "It often rains in autumn.", exUz: "Kuzda tez-tez yomg'ir yog'adi." },
    { en: "winter", uz: "qish", ipa: "ˈwɪn.tə", pos: "noun", ex: "We don't swim in winter.", exUz: "Qishda suzmaymiz." },
  ],
  practice: [
    { k: "listen", say: "It's cloudy today.", opts: ["It's cold today.", "It's cloudy today.", "It's sunny today."], a: 1, why: "**cloudy** — \"klaudi\", bulutli." },
    { k: "match", pairs: [["sunny", "quyoshli"], ["rainy", "yomg'irli"], ["windy", "shamolli"], ["cloudy", "bulutli"], ["warm", "iliq"]] },
    { k: "match", pairs: [["spring", "bahor"], ["summer", "yoz"], ["autumn", "kuz"], ["winter", "qish"], ["weather", "ob-havo"]] },
    { k: "choice", q: "Look! The children ___ football.", opts: ["play", "plays", "are playing", "playing"], a: 2, why: "**Look!** — hozir ko'rib turibmiz → **are playing**." },
    { k: "choice", q: "We ___ English on Mondays and Fridays.", opts: ["studies", "are studying", "study"], a: 2, why: "**on Mondays and Fridays** — takrorlanadigan odat → **study**." },
    { k: "fill", q: "She ___ today. She is at home. (not / work)", a: ["isn't working", "is not working", "'s not working"], uz: "U bugun ishlamayapti. U uyda.", why: "**today** — hozirgi vaqt → **isn't working**." },
    { k: "fill", q: "___ you like winter?", a: ["Do"], uz: "Qishni yoqtirasizmi?", why: "**like** holat fe'li → Present Simple savoli: **Do** you like…?" },
    { k: "tf", q: "**I am wanting a new phone.** — to'g'ri gap.", a: false, why: "**want** -ing olmaydi: *I **want** a new phone.*" },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["I know the answer.", "She is having lunch now.", "He is liking this song.", "They have a big house."], a: 2, why: "**like** -ing olmaydi: *He **likes** this song.* *having lunch* esa to'g'ri — bu harakat." },
    { k: "listen", say: "My sister is reading in her room.", opts: ["My sister reads in her room.", "My sister is reading in her room.", "My sister is eating in her room."], a: 1, why: "**is reading** — hozir o'qiyapti." },
    { k: "order", uz: "Hozir yomg'ir yog'yapti.", words: ["It", "is", "raining", "now"], extra: ["rains"], why: "Hozir → **is raining**. *It* ni unutmang." },
    { k: "order", uz: "Men odatda ertalab choy ichaman.", words: ["I", "usually", "drink", "tea", "in", "the", "morning"], extra: ["am"], why: "Odat → Present Simple: *I usually drink*. **usually** fe'ldan oldin turadi." },
    { k: "fill", q: "December, January and February are ___ months in Uzbekistan.", a: ["winter"], uz: "Dekabr, yanvar va fevral O'zbekistonda qish oylari.", why: "Bu oylar — **winter** (qish)." },
    { k: "translate", uz: "Bugun havo quyoshli.", a: ["It's sunny today", "It is sunny today", "Today it's sunny", "Today it is sunny", "Today, it's sunny", "Today, it is sunny", "The weather is sunny today"], why: "**It's sunny today.** Ob-havo — **It** bilan." },
    { k: "translate", uz: "Ali hozir nima qilyapti?", a: ["What is Ali doing now", "What's Ali doing now", "What is Ali doing right now", "What's Ali doing right now", "What is Ali doing at the moment", "What's Ali doing at the moment"], why: "Savol so'zi + **is** + Ali + **doing**." },
    { k: "speak", say: "It's cold and windy today, but I like winter.", uz: "Bugun sovuq va shamolli, lekin men qishni yoqtiraman." },
  ],
  quiz: [
    { k: "listen", say: "It's warm in spring.", opts: ["It's warm in spring.", "It's warm in summer.", "It's windy in spring."], a: 0 },
    { k: "listen", say: "Does it often rain here?", opts: ["Is it raining here?", "Does it often rain here?", "Does it rain here now?"], a: 1, why: "**Does … often rain** — odat haqida savol." },
    { k: "fill", q: "Listen! Somebody ___ in the kitchen. (sing)", a: ["is singing", "'s singing"], why: "**Listen!** — hozir eshityapmiz → **is singing**." },
    { k: "fill", q: "My brother ___ cold weather. (not / like)", a: ["doesn't like", "does not like"], why: "**like** — holat fe'li; **he** → **doesn't like**." },
    { k: "choice", q: "I ___ your question now.", opts: ["am understanding", "understand", "understands", "understanding"], a: 1, why: "**understand** -ing olmaydi, hatto *now* bilan ham." },
    { k: "choice", q: "Yozdan keyin qaysi fasl keladi?", opts: ["spring", "winter", "autumn", "weather"], a: 2, why: "summer → **autumn** → winter → spring." },
    { k: "translate", uz: "Kuzda tez-tez yomg'ir yog'adi.", a: ["It often rains in autumn", "In autumn it often rains", "In autumn, it often rains", "It's often rainy in autumn", "It is often rainy in autumn"], why: "Odat → **It often rains in autumn.**" },
    { k: "translate", uz: "Siz hozir nima qilyapsiz?", a: ["What are you doing now", "What are you doing right now", "What are you doing at the moment"] },
    { k: "order", uz: "Biz hozir film ko'ryapmiz.", words: ["We", "are", "watching", "a", "film", "now"], extra: ["watch", "is"] },
    { k: "tf", q: "**What's the weather like?** — \"Ob-havo qanaqa?\" degan savol.", a: true },
  ],
  summary: [
    "**Present Simple** — odat va doimiy holat: *I work in a bank. He usually goes by bus.*",
    "**Present Continuous** — ayni paytdagi ish: *I'm working now. Look! It's raining.*",
    "Signal so'zlar: **every day, usually, often** → Simple; **now, at the moment, Look!** → Continuous.",
    "**like, love, want, need, know, understand, have** (ega bo'lmoq) -ing olmaydi.",
    "Ob-havo — doim **It** bilan: *It's sunny / windy / cloudy.* Fasllar: **in** spring, summer, autumn, winter.",
  ],
  homework: "Derazadan qarang va inglizcha 3 ta gap yozing: bugun ob-havo qanaqa va hozir ko'chada odamlar nima qilyapti (*It's cloudy. A man is walking…*). Keyin har bir faslda odatda nima qilishingiz haqida 4 ta gap yozing (*In summer I usually…*).",
};

export default lesson;
