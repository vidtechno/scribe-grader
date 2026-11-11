import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u24-l3",
  title: "Past habits: used to, would and be used to",
  titleUz: "O'tgan odatlar: used to, would; be used to va get used to",
  goal: "O'tgan odatlar va holatlarni **used to** va **would** bilan aytasiz, ularning farqini bilasiz (*would* holat fe'llari bilan ishlatilmaydi). **be used to** va **get used to** (*ko'nikkan bo'lmoq / ko'nikmoq*) dan keyin **-ing** kelishini eslab, **I am used to play**, **I used to going**, **I didn't used to** kabi xatolardan qochasiz. Bolalik, ish va hayotdagi o'zgarishlar haqida gapirishda yordam beradi.",
  slides: [
    {
      title: "Used to va would: o'tgan odatlar",
      blocks: [
        { t: "p", md: "*Oldin shunday qilardim, hozir qilmayman* deganda inglizchada ikkita qulay shakl bor: **used to + fe'l** va **would + fe'l**. Ikkalasi ham o'tgan **takrorlanadigan** ishni ko'rsatadi, lekin ularning ishlatilishi bir xil emas." },
        {
          t: "table", head: ["Shakl", "Nimaga ishlatiladi", "Misol"], speak: [2],
          rows: [
            ["used to + V1", "o'tgan **odat** va **holat**", "I used to live by the sea. (holat)"],
            ["used to + V1", "o'tgan odat (hozir yo'q)", "We used to play chess every Friday."],
            ["would + V1", "o'tgan **odat** (faqat harakat)", "Every summer we would visit my grandmother."],
          ],
        },
        { t: "p", md: "**Used to** — hozirgi vaziyat o'zgarganini ta'kidlaydi: *I used to smoke* (hozir chekmayman). **Would** ni odatda **vaqt konteksti** (*when I was a child, every summer*) allaqachon berilgandan keyin ishlatamiz va u hikoyaga **nostalgik** ohang beradi." },
        { t: "examples", items: [
          { en: "When I was a child, I used to be afraid of dogs.", uz: "Bolaligimda itlardan qo'rqardim. (holat)" },
          { en: "On Sundays my father would make pancakes for everyone.", uz: "Yakshanba kunlari otam hammaga blin pishirib berardi. (odat)" },
          { en: "We used to have a small garden behind the house.", uz: "Uyimiz orqasida kichik bog' bor edi. (holat)" },
        ] },
        { t: "check", ex: { k: "choice", q: "Qaysi gap **holat** haqida (would bilan ishlatib bo'lmaydi)?", opts: ["I used to have a bicycle.", "We would walk to school together.", "She would call me every evening.", "They would play in the yard."], a: 0, why: "**have** (egalik) — holat fe'li; faqat **used to have**, ~~would have~~ emas." } },
      ],
    },
    {
      title: "Qoidalar: inkor, savol va chegaralar",
      blocks: [
        { t: "p", md: "**Used to** inkor va savolda **did** bilan keladi va **used** → **use** bo'ladi (chunki *did* o'tgan zamonni allaqachon ko'rsatdi)." },
        {
          t: "table", head: ["Shakl", "Misol"], speak: [1],
          rows: [
            ["Darak", "I used to walk to work."],
            ["Inkor", "I didn't use to like coffee."],
            ["Savol", "Did you use to live in Bukhara?"],
            ["Wh-savol", "Where did you use to play?"],
            ["would (inkor)", "He wouldn't eat vegetables."],
          ],
        },
        { t: "p", md: "Ikkita muhim **chegara**: **1.** Aniq **marta soni** yoki **aniq vaqt** bo'lsa, **Past Simple** ishlatamiz: *I visited Paris three times* (~~I used to visit Paris three times~~). **2.** **Would** holat fe'llari (*be, have, know, like, live*) bilan bo'lmaydi." },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I used to be shy.", "I didn't use to like fish.", "I visited Rome twice in 2019.", "Did you use to have a dog?"] },
          bad: { title: "Xato", items: ["I would be shy.", "I didn't used to like fish.", "I used to visit Rome twice in 2019.", "Did you used to have a dog?"] } },
        { t: "tip", tone: "info", md: "**Would** ni gapni boshlash uchun ishlatmang: avval **used to** bilan fonni bering, keyin **would** bilan tafsilotlarni davom ettiring: *We **used to** spend summers in the village. We **would** wake up early and swim in the river.*" },
        { t: "check", ex: { k: "fill", q: "Did you ___ to walk to school as a child?", a: ["use"], why: "**did** dan keyin **use to** (**used** emas): *Did you use to…?*" } },
        { t: "check", ex: { k: "choice", q: "Qaysi gap noto'g'ri?", opts: ["When I was young, I would have a small dog.", "When I was young, I used to be very quiet.", "When I was young, I was very quiet.", "When I was young, I would play outside for hours."], a: 0, why: "**have** (egalik) — holat fe'li, **would** bilan kelmaydi: *used to have*. Odat bo'lgan harakat (*play*) bilan **would** mumkin." } },
      ],
    },
    {
      title: "Be used to va get used to: ko'nikish",
      blocks: [
        { t: "p", md: "**Used to + fe'l** o'tgan odat. Lekin **be used to** va **get used to** butunlay boshqa ma'noni beradi: **ko'nikkan bo'lish** va **ko'nikish jarayoni**. Ulardagi **to** — **predlog**, shuning uchun keyin **ot yoki -ing** keladi." },
        {
          t: "table", head: ["Shakl", "Ma'nosi", "Misol"], speak: [2],
          rows: [
            ["used to + V1", "oldin qilardim (hozir yo'q)", "I used to get up late."],
            ["be used to + -ing / ot", "ko'nikkanman, odatim bor", "I'm used to getting up early."],
            ["get used to + -ing / ot", "ko'nika boshlayapman / ko'nikdim", "I'm getting used to the cold."],
          ],
        },
        { t: "examples", items: [
          { en: "It took me a few months to get used to working from home.", uz: "Uydan ishlashga ko'nikish uchun bir necha oy kerak bo'ldi." },
          { en: "She isn't used to the noise in the city yet.", uz: "U shahardagi shovqinga hali ko'nikmagan." },
          { en: "After two years abroad, he was used to eating alone.", uz: "Ikki yil chet elda yashagach, u yolg'iz ovqatlanishga ko'nikkan edi." },
        ] },
        { t: "tip", tone: "info", md: "**Accustomed to** — rasmiyroq sinonim: *We are accustomed to long winters.* **Adapt to** — moslashmoq: *He adapted to the new system quickly.*" },
        { t: "tip", tone: "warn", md: "Ikkala tuzilishni aralashtirmang. **I used to** + *fe'l* (**o'tgan**), **I'm used to** + *-ing* (**hozirgi odat**). Farq katta: *I used to drive at night* (oldin haydardim) va *I'm used to driving at night* (haydashga ko'nikkanman)." },
        { t: "check", ex: { k: "fill", q: "I'm not used to ___ so early. (get up)", a: ["getting up"], why: "**be used to** dan keyin **-ing**: *getting up*." } },
        { t: "check", ex: { k: "choice", q: "\"I've just moved here. I'm slowly ___ the climate.\"", opts: ["getting used to", "used to", "being used", "get use to"], a: 0, why: "Ko'nikish jarayoni: **get used to** (hozirgi davomiy: *am getting used to*)." } },
      ],
    },
    {
      title: "Tipik xatolar (o'zbek tilidan)",
      blocks: [
        { t: "p", md: "O'zbek tilida *«odatlanmoq»* ham, *«ko'nikmoq»* ham fe'lga qo'shimcha qo'shib aytiladi, shuning uchun **to** dan keyin infinitiv qo'yish odati paydo bo'ladi. Quyidagilarni yodda tuting:" },
        { t: "compare",
          good: { title: "To'g'ri", items: ["I am used to playing at night.", "I used to go to bed late.", "I didn't use to like tea.", "When I was a child, I used to be shy."] },
          bad: { title: "Xato", items: ["I am used to play at night.", "I used to going to bed late.", "I didn't used to like tea.", "When I was a child, I would be shy."] } },
        { t: "p", md: "**1.** *be used to* dan keyin **-ing** (**to** — predlog). **2.** *used to* dan keyin **oddiy shakl** (V1), **-ing emas**. **3.** *did/didn't* bilan **use to**. **4.** Holat uchun **used to be**, *would be* emas." },
        { t: "check", ex: { k: "fix", wrong: "I am used to play the guitar at night.", a: ["I am used to playing the guitar at night.", "I'm used to playing the guitar at night."], hint: "to — predlog", why: "**be used to** + **-ing**: *playing*." } },
        { t: "check", ex: { k: "fix", wrong: "I used to going to bed very late.", a: ["I used to go to bed very late."], hint: "o'tgan odat", why: "**used to** dan keyin V1: *go*." } },
        { t: "check", ex: { k: "fix", wrong: "I didn't used to like tea.", a: ["I didn't use to like tea."], hint: "did bilan", why: "**didn't** dan keyin **use to**." } },
        { t: "check", ex: { k: "fix", wrong: "When I was a child, I would be very shy.", a: ["When I was a child, I used to be very shy.", "When I was a child, I was very shy."], hint: "holat fe'li", why: "**be** — holat; **would** bilan emas." } },
      ],
    },
    {
      title: "O'qing: Bolaligim qishlog'ida",
      blocks: [
        {
          t: "text", title: "Summers at my grandfather's house", voice: "emma",
          en: "When I was a child, we used to spend every summer in my grandfather's village. Life there was very different from life in the city. We would get up at dawn, help him water the garden and then have breakfast under the old apricot tree. In the afternoons we would swim in the canal until our mothers called us home. I used to be afraid of his big dog, but by the end of the first summer I had got used to it. Now I live in a busy city, and I'm used to the noise and the traffic. Still, I haven't got used to the silence at night. Last month I visited the village again. The tree is gone and the canal is dry, but the smell of fresh bread is the same. Those summers are what made me who I am, and I wish my own children could have them.",
          uz: "Bolaligimda har yozni bobomning qishlog'ida o'tkazardik. U yerdagi hayot shahar hayotidan juda farq qilardi. Tong otganda turib, bobomga bog'ni sug'orishda yordam berardik, keyin eski o'rik daraxti ostida nonushta qilardik. Tushdan keyin onalarimiz uyga chaqirguncha kanalda cho'milardik. Bobomning katta itidan qo'rqardim, lekin birinchi yoz oxirigacha unga ko'nikib qolgan edim. Hozir gavjum shaharda yashayman, shovqin va tirbandlikka ko'nikkanman. Shunday bo'lsa-da, kechqurungi sukunatga hali ko'nikmadim. O'tgan oy qishloqqa yana bordim. Daraxt yo'q, kanal quruq, lekin yangi non hidi o'sha-o'sha. O'sha yozlar meni men qilgan, o'z bolalarim ham shunday yozlarni ko'rsa edi.",
        },
        { t: "check", ex: { k: "tf", q: "The narrator is used to the silence of the village at night now.", a: false, why: "*I **haven't got used to** the silence at night* — sukunatga ko'nikmagan." } },
        { t: "check", ex: { k: "choice", q: "Which sentence in the text describes a past state, not a repeated action?", opts: ["I used to be afraid of his big dog.", "We would swim in the canal.", "We would get up at dawn.", "We would have breakfast under the tree."], a: 0, why: "**be afraid** — holat, shuning uchun **used to be**. Qolganlari takrorlanuvchi harakat." } },
      ],
    },
    {
      title: "Dialog: Yangi shaharga ko'nikish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Timur", en: "Dilnoza, how are you finding life in London?", uz: "Dilnoza, Londondagi hayot qanday?" },
            { who: "Dilnoza", en: "Better every week. I'm getting used to the weather, but I'm still not used to the prices.", uz: "Har hafta yaxshiroq. Ob-havoga ko'nikyapman, lekin narxlarga hali ko'nikmadim." },
            { who: "Timur", en: "I remember you used to hate crowded places in Tashkent.", uz: "Toshkentda gavjum joylarni yoqtirmasdingiz, esimda." },
            { who: "Dilnoza", en: "I did! Now I take the underground every day and I don't even notice the crowds.", uz: "Ha! Hozir har kuni metroda yuraman va olomonni sezmayman ham." },
            { who: "Timur", en: "Did you use to cook at home there?", uz: "U yerda uyda ovqat pishirarmidingiz?" },
            { who: "Dilnoza", en: "Yes, my mother and I would cook together every evening. Now I cook alone and I miss it.", uz: "Ha, onam bilan har kechqurun birga pishirardik. Endi yolg'iz pishiraman va sog'inaman." },
            { who: "Timur", en: "It will get easier. You'll soon be used to everything.", uz: "Osonlashadi. Tez orada hamma narsaga ko'nikib qolasiz." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is Dilnoza still not used to?", opts: ["The prices", "The weather", "The underground", "The crowds"], a: 0, why: "*I'm still not used to the prices.*" } },
      ],
    },
  ],
  words: [
    { en: "kick the habit", uz: "odatdan voz kechmoq", ipa: "kɪk ðə ˈhæb.ɪt", pos: "phrase", ex: "It took him years to kick the habit of smoking.", exUz: "Chekish odatidan voz kechishi uchun unga yillar kerak bo'ldi." },
    { en: "creature of habit", uz: "odatlariga sodiq inson", ipa: "ˈkriː.tʃər əv ˈhæb.ɪt", pos: "phrase", ex: "My father is a creature of habit: he has the same breakfast every day.", exUz: "Otam odatlariga sodiq inson: har kuni bir xil nonushta qiladi." },
    { en: "second nature", uz: "ikkinchi tabiat, odatga aylangan", ipa: "ˌsek.ənd ˈneɪ.tʃə", pos: "phrase", ex: "After years of practice, driving on the left is second nature to me.", exUz: "Yillar mashqidan keyin chap tomondan haydash men uchun odatiy holga aylandi." },
    { en: "out of habit", uz: "odatga ko'ra", ipa: "aʊt əv ˈhæb.ɪt", pos: "phrase", ex: "I turned off the light out of habit, even though I was coming back.", exUz: "Qaytib kelayotgan bo'lsam ham, odatga ko'ra chiroqni o'chirdim." },
    { en: "get into the habit of", uz: "... odatini orttirmoq", ipa: "ɡet ˈɪn.tuː ðə ˈhæb.ɪt əv", pos: "phrase", ex: "Try to get into the habit of reading before bed.", exUz: "Uxlashdan oldin o'qish odatini orttirishga harakat qiling." },
    { en: "back then", uz: "o'sha paytda, o'sha vaqtlarda", ipa: "bæk ðen", pos: "adv", ex: "Phones were expensive back then, so few people had one.", exUz: "O'sha paytda telefonlar qimmat edi, shuning uchun kam odamda bor edi." },
    { en: "accustomed to", uz: "... ga o'rganib qolgan", ipa: "əˈkʌs.təmd tuː", pos: "adj", ex: "We are accustomed to getting information instantly.", exUz: "Biz ma'lumotni zumda olishga o'rganib qolganmiz." },
    { en: "fond of", uz: "yaxshi ko'radigan, mehr qo'ygan", ipa: "fɒnd əv", pos: "adj", ex: "She was always fond of walking in the old part of the city.", exUz: "U doim shaharning eski qismida sayr qilishni yaxshi ko'rardi." },
    { en: "upbringing", uz: "tarbiya, voyaga yetkazish", ipa: "ˈʌp.brɪŋ.ɪŋ", pos: "noun", ex: "His strict upbringing taught him to respect other people.", exUz: "Qat'iy tarbiya unga boshqalarni hurmat qilishni o'rgatdi." },
    { en: "adapt to", uz: "moslashmoq", ipa: "əˈdæpt tuː", pos: "phrasal verb", ex: "It took her a month to adapt to the new schedule.", exUz: "Yangi jadvalga moslashishi uchun unga bir oy kerak bo'ldi." },
  ],
  practice: [
    { k: "choice", q: "When I was young, we ___ every summer at the lake.", opts: ["would camp", "were camp", "are camping", "have camped"], a: 0, why: "O'tgan takrorlanuvchi harakat: **would camp** (yoki *used to camp*)." },
    { k: "choice", q: "Qaysi variant mumkin **emas**? \"When I was a child, I ___ very shy.\"", opts: ["used to be", "was", "would be", "was always"], a: 2, why: "**be** — holat fe'li, **would** bilan kelmaydi." },
    { k: "listen", say: "I'm getting used to living alone.", opts: ["I'm getting used to living alone.", "I used to live alone.", "I'm used to live alone.", "I got used to live alone."], a: 0, why: "**get used to** + **-ing**: *living*." },
    { k: "fill", q: "She isn't used to ___ in a big office. (work)", a: ["working"], uz: "U katta ofisda ishlashga ko'nikmagan.", why: "**be used to** + **-ing**." },
    { k: "fill", q: "He ___ to have a beard, but he shaved it last year.", a: ["used"], uz: "Uning soqoli bor edi, lekin o'tgan yili oldirdi.", why: "O'tgan holat: **used to have**." },
    { k: "fill", q: "Did you ___ to play outside in the rain?", a: ["use"], uz: "Yomg'irda tashqarida o'ynarmidingiz?", why: "**Did** dan keyin **use to**." },
    { k: "order", uz: "Bolaligimda biz har kuni daryoda cho'milardik.", words: ["When", "I", "was", "a", "child,", "we", "would", "swim", "in", "the", "river", "every", "day."], extra: ["swimming", "used"], alt: [["We", "would", "swim", "in", "the", "river", "every", "day", "when", "I", "was", "a", "child."]], why: "**would + V1** — o'tgan odat." },
    { k: "match", pairs: [["creature of habit", "odatlariga sodiq inson"], ["second nature", "odatga aylangan"], ["kick the habit", "odatdan voz kechmoq"], ["back then", "o'sha paytda"], ["upbringing", "tarbiya"]] },
    { k: "tf", q: "*I'm used to getting up early.* gapi oldin erta turganimni, endi turmasligimni bildiradi.", a: false, why: "**be used to** — hozirgi odat/ko'nikma: erta turishga ko'nikkanman." },
    { k: "fix", wrong: "I am used to wake up at five o'clock.", a: ["I am used to waking up at five o'clock.", "I'm used to waking up at five o'clock."], hint: "to — predlog", why: "**be used to** + **-ing**: *waking up*." },
    { k: "fix", wrong: "My grandfather didn't used to speak English.", a: ["My grandfather didn't use to speak English."], hint: "didn't bilan", why: "**didn't use to**." },
    { k: "translate", uz: "Men uydan ishlashga ko'nikib qoldim.", a: ["I have got used to working from home.", "I've got used to working from home.", "I have become used to working from home.", "I got used to working from home.", "I'm used to working from home.", "I am used to working from home.", "I have gotten used to working from home.", "I've become used to working from home.", "I've grown used to working from home.", "I have grown used to working from home."], why: "**get/be used to** + **-ing**: *working*." },
    { k: "translate", uz: "U oldin bu shaharda yashar edi.", a: ["She used to live in this city.", "He used to live in this city.", "She used to live in this town.", "He used to live in this town."], why: "O'tgan holat: **used to live**." },
    { k: "dictation", say: "We would visit my grandparents every Sunday.", uz: "Biz har yakshanba buvi-bobomnikiga borardik.", why: "O'tgan odat: **would visit**." },
    { k: "choice", q: "Quyidagilardan qaysi biri **aniq marta soni** bilan to'g'ri?", opts: ["I visited Samarkand three times when I was a student.", "I used to visit Samarkand three times when I was a student.", "I would visit Samarkand three times when I was a student.", "I was used to visit Samarkand three times."], a: 0, why: "Aniq son (**three times**) bilan **Past Simple**." },
    { k: "speak", say: "When I was a child, I used to spend every summer in the village.", uz: "Bolaligimda har yozni qishloqda o'tkazardim." },
  ],
  quiz: [
    { k: "choice", q: "I ___ driving on the left now. It feels normal.", opts: ["am used to", "used to", "use to", "am use to"], a: 0, why: "Ko'nikma: **am used to** + -ing (*driving*)." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["She didn't use to wear glasses.", "She didn't used to wear glasses.", "She wouldn't used to wear glasses.", "She didn't use to wearing glasses."], a: 0, why: "**didn't use to** + V1." },
    { k: "choice", q: "When we lived in Khiva, we ___ a small flat near the market. (holat)", opts: ["used to have", "would have", "were having", "would having"], a: 0, why: "**have** (egalik) — holat; **used to have**." },
    { k: "choice", q: "It took him a year to ___ the new job.", opts: ["get used to", "be used", "used to", "get use to"], a: 0, why: "**get used to** + ot." },
    { k: "fill", q: "Every morning my mother ___ tea for the whole family. (would, make)", a: ["would make", "'d make"], uz: "Har ertalab onam butun oila uchun choy damlardi.", why: "O'tgan odat: **would make**." },
    { k: "fill", q: "We aren't used to ___ in such cold weather. (live)", a: ["living"], uz: "Biz bunday sovuq ob-havoda yashashga ko'nikmaganmiz.", why: "**be used to** + **-ing**." },
    { k: "order", uz: "U oldin kechgacha ishlardi.", words: ["He", "used", "to", "work", "until", "late."], extra: ["use", "working"], alt: [["He", "would", "work", "until", "late."]], why: "**used to + V1** (yoki **would**)." },
    { k: "translate", uz: "Men bolaligimda yomg'irdan qo'rqardim.", a: ["I used to be afraid of the rain when I was a child.", "When I was a child, I used to be afraid of the rain.", "When I was a child, I was afraid of the rain.", "I used to be afraid of rain when I was a child.", "When I was a child, I used to be afraid of rain."], why: "Holat: **used to be** (would emas)." },
    { k: "fix", wrong: "I used to going to the gym every day.", a: ["I used to go to the gym every day."], hint: "o'tgan odat", why: "**used to** + V1." },
    { k: "tf", q: "*We would live in a small village.* (bolaligimizdagi holat) — bu gap to'g'ri.", a: false, why: "**live** — holat fe'li: *We used to live in a small village.*" },
  ],
  summary: [
    "**used to + V1** — o'tgan **odat va holat**; **would + V1** — faqat takrorlanuvchi **harakat** (vaqt konteksti berilgandan keyin).",
    "Inkor va savol: **didn't use to**, **Did you use to…?** (*used* emas, **use**).",
    "Aniq son yoki aniq vaqt bo'lsa **Past Simple**: *I visited Rome twice.* (~~used to visit twice~~).",
    "**be used to / get used to + -ing yoki ot** — ko'nikkan bo'lish / ko'nikish; **to** — predlog.",
    "Tipik xatolar: ~~I am used to play~~, ~~I used to going~~, ~~didn't used to~~, ~~I would be shy~~.",
  ],
  homework: "Bolaligingiz haqida 8 ta gap yozing: 4 ta **used to** (holat va odat), 3 ta **would** (odat tafsilotlari) va 1 ta **I'm used to…** (hozirgi ko'nikma). Keyin yozganlaringizni tekshiring: *would* bilan holat fe'li (*be, have, like*) ishlatmaganingizni va *-ing* to'g'ri ekanini.",
};

export default lesson;
