import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u18-l8",
  title: "Unit review: experiences",
  titleUz: "Bosqich takrori: tajriba va Present Perfect",
  goal: "Bosqichdagi hamma narsani yangi misollarda takrorlaysiz: **Present Perfect** (*ever, never, already, yet, just*), **for / since**, **Present Perfect Continuous**, **Present Perfect yoki Past Simple**, **used to / be used to / get used to**, hayot voqealari va tarjimai hol yozish.",
  slides: [
    {
      title: "Takror 1: Present Perfect va tajriba",
      blocks: [
        { t: "p", md: "**Present Perfect** = **have / has + V3**. Biz uni aniq vaqtni aytmasdan, **tajriba, yangilik va natija** haqida gapirganda ishlatamiz. Hamrohlari: **ever** (savolda), **never**, **already**, **yet** (savol va inkorda, gap oxirida), **just**." },
        {
          t: "table", head: ["Qolip", "Misol"],
          rows: [
            ["Have you ever …?", "Have you ever met a famous person?"],
            ["I have never …", "I have never driven a lorry."],
            ["already / just", "The lesson has already started. They have just arrived."],
            ["not … yet", "She hasn't replied to my email yet."],
            ["have been", "He has been to Oman. (u borib qaytib kelgan)"],
            ["have gone", "He has gone to Oman. (u hali qaytmagan)"],
          ],
        },
        { t: "tip", tone: "warn", md: "Aniq o'tgan vaqt (*yesterday, last week, in 2019, two years ago*) bo'lsa, **Present Perfect** ishlatilmaydi: *I have seen him yesterday* — xato. To'g'risi: *I saw him yesterday.*" },
        { t: "check", ex: { k: "choice", q: "Which sentence is correct?", opts: ["Have you eaten yet?", "Did you ever been to Spain?", "I have never saw that film.", "She has gone to the shop, and now she is at home."], a: 0, why: "**Have you eaten yet?** to'g'ri. *have never seen* bo'lishi kerak; *gone* esa hali qaytmaganni bildiradi." } },
        { t: "check", ex: { k: "fill", q: "He isn't here. He has ___ to the airport.", a: ["gone"], why: "Hozir u yerda → **gone** (qaytmagan)." } },
      ],
    },
    {
      title: "Takror 2: for, since va Continuous",
      blocks: [
        { t: "p", md: "Davomiylik haqida so'rash uchun **How long have you…?** ishlatiladi. **for** + muddat (*for six months*), **since** + boshlanish nuqtasi (*since 2020, since Monday*). Davom etayotgan faoliyatni ta'kidlash uchun **have / has been + V-ing** (**Present Perfect Continuous**) ishlatamiz." },
        {
          t: "examples", items: [
            { en: "How long have you lived in this city? — For about four years.", uz: "Bu shaharda qancha vaqtdan beri yashaysiz? — Taxminan to'rt yildan beri." },
            { en: "I've known my best friend since primary school.", uz: "Eng yaqin do'stimni boshlang'ich maktabdan beri bilaman.", note: "**know** holat fe'li — Continuous emas." },
            { en: "She has been learning Spanish for a year.", uz: "U bir yildan beri ispan tilini o'rganyapti." },
            { en: "Your eyes are red. Have you been crying?", uz: "Ko'zlaring qizarib ketgan. Yig'lab yurdingmi?", note: "Natija ko'rinib turibdi, faoliyat endigina tugagan." },
          ],
        },
        { t: "tip", tone: "info", md: "Farq: *I've painted the kitchen* — natija (oshxona bo'yalgan). *I've been painting the kitchen* — faoliyat (men bo'yash bilan band edim, bo'yoq hidi bor). **know, have (egalik), like, be** kabi holat fe'llari Continuous da ishlatilmaydi." },
        { t: "check", ex: { k: "choice", q: "We've been friends ___ 2016.", opts: ["since", "for", "ago", "from"], a: 0, why: "**2016** — boshlanish nuqtasi → **since**." } },
        { t: "check", ex: { k: "fix", wrong: "I am waiting for you since one hour.", a: ["I have been waiting for you for an hour.", "I've been waiting for you for an hour.", "I have waited for you for an hour.", "I've waited for you for an hour."], hint: "since / for, zamon", why: "Muddat (**an hour**) → **for**; davomiylik → Present Perfect." } },
      ],
    },
    {
      title: "Takror 3: Present Perfect yoki Past Simple?",
      blocks: [
        { t: "p", md: "Bir tomondan **hozirga aloqasi bor** o'tmish (Present Perfect), boshqa tomondan **tugagan, aniq vaqtli** o'tmish (Past Simple). Quyidagi so'zlar yo'l ko'rsatadi:" },
        {
          t: "table", head: ["Present Perfect", "Past Simple"],
          rows: [
            ["so far, recently, ever, never, yet, just, already", "yesterday, last year, in 2018, two weeks ago"],
            ["for / since (hozirgacha)", "from … to … (tugagan davr)"],
            ["How long have you …?", "When did you …?"],
            ["today, this week, this year", "last week, last year, yesterday"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I lived there for five years, but I moved away.", "I've lived here for five years.", "When did you graduate?", "How long have you worked here?"] },
          bad: { title: "Xato", items: ["I have visited Rome last summer.", "I live here since 2010.", "When have you graduated?", "How long do you work here?"] },
        },
        { t: "tip", tone: "good", md: "**ago** doim Past Simple bilan: *She moved two years ago.* Hozirgacha bo'lgan davrni so'rasangiz — **How long … ?** + Present Perfect. Aniq vaqt so'rasangiz — **When … ?** + Past Simple." },
        { t: "check", ex: { k: "choice", q: "My uncle ___ in Dubai for three years, but he came back in 2020.", opts: ["lived", "has lived", "has been living", "lives"], a: 0, why: "Davr tugagan (endi yashamaydi) → Past Simple." } },
        { t: "check", ex: { k: "choice", q: "___ you finish the report yesterday?", opts: ["Did", "Have", "Do", "Has"], a: 0, why: "**yesterday** → Past Simple: *Did you finish…?*" } },
      ],
    },
    {
      title: "Takror 4: hayot voqealari va o'zgarishlar",
      blocks: [
        { t: "p", md: "Hayot voqealarini aytganda **Past Simple** ishlatiladi (*We got married in 2017*), holat va muddat haqida esa **Present Perfect** (*We've been married for eight years*). Ilgarigi odatlar uchun **used to**, ko'nikish uchun **be used to / get used to**." },
        {
          t: "examples", items: [
            { en: "She graduated from university in 2015 and has worked as a nurse since then.", uz: "U 2015-yilda universitetni bitirgan va o'shandan beri hamshira bo'lib ishlaydi." },
            { en: "We used to live in a village, but now we live in the city.", uz: "Biz ilgari qishloqda yashardik, hozir shaharda yashaymiz." },
            { en: "I'm not used to the heat yet.", uz: "Men issiqqa hali ko'nikmaganman.", note: "**be used to** + ot." },
            { en: "He is getting used to working at night.", uz: "U tunda ishlashga ko'nikyapti.", note: "**get used to** + -ing." },
            { en: "Did you use to play chess when you were young?", uz: "Yoshligingizda shaxmat o'ynaganmidingiz?" },
          ],
        },
        { t: "tip", tone: "warn", md: "Uch xatoga e'tibor bering: ~~I have got married for five years~~ (to'g'risi: *I've been married for five years*), ~~I'm used to get up early~~ (to'g'risi: *I'm used to getting up early*), ~~Did you used to…?~~ (to'g'risi: *Did you use to…?*)." },
        { t: "check", ex: { k: "fill", q: "It took me a month to get used to ___ in a dormitory. (live)", a: ["living"], why: "**get used to** + -ing." } },
        { t: "check", ex: { k: "choice", q: "Which sentence means the habit has stopped?", opts: ["I used to cycle to work.", "I'm used to cycling to work.", "I'm getting used to cycling to work.", "I cycle to work."], a: 0, why: "**used to** + fe'l — ilgarigi odat." } },
      ],
    },
    {
      title: "O'qing: Zafarning mulohazalari",
      blocks: [
        {
          t: "text", title: "Zafar looks back",
          en: "Zafar is thirty-five, and he has already had a very busy life. He grew up in a small town, and he used to dream of travelling. At the age of twenty-two he graduated and moved to Istanbul for work. At first he wasn't used to the crowds, but he got used to them quickly. He has now lived abroad for thirteen years, and he has been working for the same company since 2016. Last year he got a promotion, and he is very proud of it. He has never regretted his decision to leave home, but he sometimes misses his family. \"It has been a long journey,\" he says, \"and I'm still learning.\"",
          uz: "Zafar o'ttiz besh yoshda va u allaqachon juda band hayot kechirgan. U kichik shaharchada o'sgan va ilgari sayohat qilishni orzu qilardi. Yigirma ikki yoshida bitirib, ish uchun Istanbulga ko'chib o'tdi. Avvaliga u olomonga ko'nikmagan edi, lekin tez ko'nikib ketdi. U hozir o'n uch yildan beri chet elda yashaydi va 2016-yildan beri bir xil kompaniyada ishlaydi. O'tgan yili uning lavozimi ko'tarildi va u bundan juda faxrlanadi. U uydan ketish haqidagi qarordan hech qachon afsuslanmagan, lekin ba'zan oilasini sog'inadi. «Bu uzoq yo'l bo'ldi, — deydi u, — va men hali ham o'rganyapman.»",
          voice: "emma",
        },
        { t: "check", ex: { k: "tf", q: "Zafar has lived abroad for thirteen years.", a: true, why: "Matnda: *He has now lived abroad for thirteen years*." } },
        { t: "check", ex: { k: "choice", q: "What does \"he used to dream of travelling\" mean?", opts: ["He dreamed of it in the past, but maybe not now.", "He is dreaming of it now.", "He will dream of it tomorrow.", "He never wanted to travel."], a: 0, why: "**used to** — ilgarigi odat/holat." } },
      ],
    },
    {
      title: "Dialog: ikki do'st uchrashadi",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Lily", en: "Tom! I haven't seen you for ages. What have you been doing?", uz: "Tom! Seni ancha vaqtdan beri ko'rmadim. Nima qilib yuribsan?" },
            { who: "Tom", en: "I moved to Leeds last year, and I've been working in a hospital since September.", uz: "O'tgan yili Lidsga ko'chdim va sentabrdan beri kasalxonada ishlayapman." },
            { who: "Lily", en: "Wow! Have you got used to the weather yet?", uz: "Voy! Ob-havoga ko'nikdingmi?" },
            { who: "Tom", en: "Not really. It used to be warmer in my old town. Have you ever been to Leeds?", uz: "Unchalik emas. Eski shahrimda ilgari issiqroq edi. Sen hech Lidsda bo'lganmisan?" },
            { who: "Lily", en: "Yes, I went there once, in 2019. It rained all weekend!", uz: "Ha, bir marta, 2019-yilda bordim. Butun dam olish kuni yomg'ir yog'di!" },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Tom has worked in the hospital for two years.", a: false, why: "U kasalxonada **sentabrdan beri** ishlaydi; Lidsga esa o'tgan yili ko'chgan." } },
      ],
    },
  ],
  words: [
    { en: "lesson", uz: "saboq, dars", ipa: "ˈles.ən", pos: "noun", ex: "Every mistake has taught me a useful lesson.", exUz: "Har bir xato menga foydali saboq berdi." },
    { en: "opportunity", uz: "imkoniyat", ipa: "ˌɒp.əˈtʃuː.nə.ti", pos: "noun", ex: "Living abroad gave me many opportunities.", exUz: "Chet elda yashash menga ko'p imkoniyat berdi." },
    { en: "priority", uz: "ustuvor vazifa", ipa: "praɪˈɒr.ə.ti", pos: "noun", ex: "My family has always been my first priority.", exUz: "Oilam men uchun doimo birinchi o'rinda turgan." },
    { en: "sacrifice", uz: "qurbon qilmoq, fidokorlik", ipa: "ˈsæk.rɪ.faɪs", pos: "verb", ex: "She has sacrificed a lot to give her children a good education.", exUz: "U bolalariga yaxshi ta'lim berish uchun ko'p narsadan voz kechdi." },
    { en: "lifetime", uz: "butun umr", ipa: "ˈlaɪf.taɪm", pos: "noun", ex: "A trip to space is a once-in-a-lifetime experience.", exUz: "Kosmosga sayohat — umrda bir marta bo'ladigan tajriba." },
    { en: "failure", uz: "muvaffaqiyatsizlik", ipa: "ˈfeɪl.jər", pos: "noun", ex: "Failure can be a great teacher.", exUz: "Muvaffaqiyatsizlik yaxshi o'qituvchi bo'lishi mumkin." },
    { en: "regret", uz: "afsuslanmoq", ipa: "rɪˈɡret", pos: "verb", ex: "I don't regret changing my job.", exUz: "Ishimni almashtirganimdan afsuslanmayman." },
    { en: "ambition", uz: "orzu-maqsad, intilish", ipa: "æmˈbɪʃ.ən", pos: "noun", ex: "Her ambition is to run her own business.", exUz: "Uning maqsadi — o'z biznesini yuritish." },
    { en: "turning point", uz: "burilish nuqtasi", ipa: "ˈtɜː.nɪŋ pɔɪnt", pos: "noun", ex: "Moving abroad was the turning point of my life.", exUz: "Chet elga ko'chish hayotimdagi burilish nuqtasi bo'ldi." },
    { en: "support", uz: "qo'llab-quvvatlamoq; yordam", ipa: "səˈpɔːt", pos: "verb", ex: "My family always supports my decisions.", exUz: "Oilam doim qarorlarimni qo'llab-quvvatlaydi." },
  ],
  practice: [
    { k: "choice", q: "Have you ___ been to a concert?", opts: ["ever", "never", "yet", "just"], a: 0, why: "Tajriba savolida **ever**." },
    { k: "choice", q: "She ___ to Paris in 2017.", opts: ["went", "has gone", "has been", "goes"], a: 0, why: "**in 2017** — aniq vaqt → Past Simple." },
    { k: "choice", q: "I've worked here ___ three years.", opts: ["for", "since", "ago", "in"], a: 0, why: "**three years** — muddat → **for**." },
    { k: "fill", q: "He hasn't called me ___. I'm worried.", a: ["yet"], why: "Inkor gapda oxirida **yet**." },
    { k: "fill", q: "How long have you ___ English? (learn)", a: ["been learning", "learnt", "learned"], why: "Davomiylik: *have been learning* (yoki *have learnt*)." },
    { k: "fill", q: "They've been married ___ 2015.", a: ["since"], why: "Yil — boshlanish nuqtasi → **since**." },
    { k: "fill", q: "When I was a child, I ___ to be afraid of dogs. (use)", a: ["used"], why: "Ilgarigi holat → **used to**." },
    { k: "fill", q: "I'm slowly getting used to ___ up early. (get)", a: ["getting"], why: "**get used to** + -ing." },
    { k: "order", uz: "Men bu shaharda besh yildan beri yashayman.", words: ["I", "have", "lived", "in", "this", "city", "for", "five", "years."], extra: ["since", "live"], alt: [["I've", "lived", "in", "this", "city", "for", "five", "years."]], why: "Muddat bilan **for**." },
    { k: "order", uz: "U 2010-yilda universitetni bitirgan.", words: ["She", "graduated", "from", "university", "in", "2010."], extra: ["has", "graduate"], why: "Aniq vaqt → Past Simple." },
    { k: "fix", wrong: "I have seen that film last night.", a: ["I saw that film last night."], hint: "last night", why: "Aniq vaqt → Past Simple." },
    { k: "fix", wrong: "She is working here since 2019.", a: ["She has worked here since 2019.", "She has been working here since 2019."], hint: "since", why: "**since** bilan Present Perfect." },
    { k: "translate", uz: "Men hali bu kitobni o'qimaganman.", a: ["I haven't read this book yet.", "I have not read this book yet.", "I haven't read the book yet.", "I have not read the book yet."], why: "Inkorda **yet** gap oxirida." },
    { k: "match", pairs: [["memory", "xotira"], ["decision", "qaror"], ["proud", "faxrlangan"], ["regret", "afsuslanmoq"], ["turning point", "burilish nuqtasi"]] },
    { k: "speak", say: "I've lived here for six years, but I used to live in a small village.", uz: "Men bu yerda olti yildan beri yashayman, lekin ilgari kichik qishloqda yashardim." },
  ],
  quiz: [
    { k: "choice", q: "My brother isn't at home. He ___ to the gym.", opts: ["has gone", "has been", "went", "is gone"], a: 0, why: "Hozir uyda yo'q, hali qaytmagan → **has gone**." },
    { k: "choice", q: "I've been to Italy twice. I ___ there in 2018 and in 2022.", opts: ["went", "have gone", "was going", "have been"], a: 0, why: "Aniq yillar → Past Simple." },
    { k: "choice", q: "She's tired because she ___ all day.", opts: ["has been working", "worked", "has work", "is working"], a: 0, why: "Natijaga sabab bo'lgan faoliyat → Present Perfect Continuous." },
    { k: "choice", q: "He ___ living alone. It feels normal for him now.", opts: ["is used to", "used to", "gets use to", "was use to"], a: 0, why: "Hozirgi ko'nikma → **is used to** + -ing." },
    { k: "fill", q: "My parents got married in 1995, so they have been married ___ almost thirty years.", a: ["for"], why: "Muddat → **for**." },
    { k: "fill", q: "Did you ___ to walk to school when you were small?", a: ["use"], why: "**Did you use to…?**" },
    { k: "fill", q: "She was ___ in Karshi, but she grew up in Tashkent. (bear)", a: ["born"], why: "**was born**." },
    { k: "fix", wrong: "When have you moved to London?", a: ["When did you move to London?"], hint: "When", why: "**When** bilan Past Simple." },
    { k: "order", uz: "Bu mening hayotimdagi burilish nuqtasi bo'ldi.", words: ["It", "was", "a", "turning", "point", "in", "my", "life."], extra: ["is", "the"], why: "Ibora: **a turning point**." },
    { k: "translate", uz: "U o'shandan beri Londonda yashayapti.", a: ["He has lived in London since then.", "She has lived in London since then.", "He has been living in London since then.", "She has been living in London since then.", "He's lived in London since then.", "She's lived in London since then."], why: "**since then** + Present Perfect." },
  ],
  summary: [
    "**Present Perfect** (*have / has + V3*): tajriba va yangilik. **ever, never, already, yet, just**; **been** — borib kelgan, **gone** — hali qaytmagan.",
    "**for** + muddat, **since** + boshlanish nuqtasi. **How long have you…?** Davom etayotgan faoliyat: **have been + V-ing**.",
    "Aniq o'tgan vaqt (*yesterday, ago, in 2018, when*) bo'lsa — **Past Simple**. Hozirgacha davom etsa — Present Perfect.",
    "**used to + fe'l** (ilgari), **be / get used to + -ing** (ko'nikish). Hayot voqealari: *graduate from, get married, retire at the age of…*",
    "Tarjimai hol: **was born**, Past Simple voqealar, *at the age of, later, eventually, since then*.",
  ],
  homework: "Bosqichning mavzularidan har biriga bittadan yangi gap yozing (jami 8 ta gap): tajriba, **yet**, **for**, **since**, Continuous, Past Simple, **used to**, **get used to**. Keyin bir daqiqa davomida o'zingiz haqingizda og'zaki gapirib ko'ring.",
};

export default lesson;
