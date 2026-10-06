import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u9-l2",
  title: "Irregular verbs 3",
  titleUz: "Noto'g'ri fe'llar 3",
  goal: "Yana 10 ta noto'g'ri fe'lni o'rganasiz: **slept, felt, left, spent, sent, lost, brought, taught, told, heard** — va ularni to'g'ri talaffuz qilib, **tell / say**, **bring / take** kabi chalkash juftliklarni adashtirmay ishlatasiz.",
  slides: [
    {
      title: "Takrorlash: 20 ta tanish fe'l",
      blocks: [
        { t: "p", md: "Beginner bosqichida 20 ta noto'g'ri fe'lni o'rgandik: *went, came, got, had, did, made, took, saw, said, was/were, gave, knew, thought, bought, ate, drank, wrote, read, found, met*. Bugun yana **10 ta** qo'shamiz. Ular ham kundalik hayotda juda ko'p uchraydi: uxlash, ketish, pul sarflash, yo'qotish, aytib berish…" },
        {
          t: "examples", items: [
            { en: "I slept for ten hours last night.", uz: "Kecha o'n soat uxladim." },
            { en: "She left home at seven.", uz: "U uydan yettida chiqdi." },
            { en: "We spent the weekend in Chimgan.", uz: "Dam olish kunlarini Chimyonda o'tkazdik." },
            { en: "My brother lost his keys again.", uz: "Akam yana kalitlarini yo'qotdi." },
          ],
        },
        { t: "tip", tone: "good", md: "Qoida o'sha-o'sha: V2 shakli **hamma shaxs uchun bir xil** (*I left, she left, they left*), inkor va savolda esa **didn't / did + V1**: *I didn't sleep. Did you leave?*" },
        { t: "check", ex: { k: "choice", q: "Bularning qaysi biri o'tgan Beginner bosqichidagi fe'l **emas**, bugungi yangi fe'l?", opts: ["bought", "slept", "met", "wrote"], a: 1, why: "**sleep – slept** — bugungi yangi fe'l. Qolganlari Beginner'da o'tilgan." } },
      ],
    },
    {
      title: "Bugungi 10 ta fe'l",
      blocks: [
        { t: "p", md: "Har bir juftlikni eshiting va **V1 – V2** holida ritm bilan takrorlang:" },
        {
          t: "table", head: ["V1", "V2", "Ma'nosi", "V2 talaffuzi"],
          rows: [
            ["sleep", "slept", "uxlamoq", "slept"],
            ["feel", "felt", "his qilmoq, o'zini … his qilmoq", "felt"],
            ["leave", "left", "ketmoq, chiqib ketmoq; qoldirmoq", "left"],
            ["spend", "spent", "(pul) sarflamoq; (vaqt) o'tkazmoq", "spent"],
            ["send", "sent", "yubormoq", "sent"],
            ["lose", "lost", "yo'qotmoq; yutqazmoq", "lost"],
            ["bring", "brought", "olib kelmoq", "bro:t"],
            ["teach", "taught", "o'rgatmoq, dars bermoq", "to:t"],
            ["tell", "told", "aytib bermoq, aytmoq (kimgadir)", "tould"],
            ["hear", "heard", "eshitmoq", "hö:d"],
          ],
          speak: [0, 1],
        },
        { t: "tip", tone: "info", md: "**left** — *ketdi* ma'nosida ham, *chap* ma'nosida ham bir xil yoziladi va o'qiladi. Kontekstdan bilinadi: *She **left** at six* (ketdi) / *Turn **left*** (chapga buriling)." },
        { t: "check", ex: { k: "fill", q: "spend – ___", a: ["spent"], why: "**spend – spent**: oxiridagi *d* → *t*." } },
      ],
    },
    {
      title: "Naqshlar va talaffuz",
      blocks: [
        { t: "p", md: "Bu fe'llarni **guruhlab** yodlash oson. Har bir guruhda o'zgarish bir xil:" },
        {
          t: "table", head: ["Naqsh", "Fe'llar"],
          rows: [
            ["cho'ziq \"i:\" → qisqa \"e\" + t", "sleep → slept, feel → felt, leave → left"],
            ["oxirgi d → t", "spend → spent, send → sent"],
            ["→ -ought / -aught (\"o:t\")", "bring → brought, teach → taught (+ thought, bought)"],
            ["e → o + ld", "tell → told"],
            ["boshqacha", "lose → lost, hear → heard"],
          ],
        },
        {
          t: "sounds", items: [
            { label: "brought / taught", say: "brought, taught", uz: "Ikkalasi **\"bro:t\", \"to:t\"** — *thought, bought* bilan qofiyadosh. **gh** o'qilmaydi!", examples: ["brought", "taught", "bought"] },
            { label: "heard", say: "heard", uz: "**\"hö:d\"** — *bird* bilan qofiyadosh. ❌ \"hi:rd\" emas! *hear* esa **\"hiə\"**.", examples: ["hear", "heard"] },
            { label: "told", say: "told", uz: "**\"tould\"** — *old* so'zi kabi, oldiga *t*.", examples: ["told", "old"] },
            { label: "lose / lost", say: "lose, lost", uz: "*lose* — **\"lu:z\"** (cho'ziq u, oxiri *z*). *lost* — **\"lost\"** (qisqa o).", examples: ["lose", "lost"] },
            { label: "slept / left", say: "slept, left", uz: "Qisqa **\"e\"**: \"slept\", \"left\". Oxirgi *t* ni aniq ayting.", examples: ["slept", "felt", "left"] },
          ],
        },
        { t: "tip", tone: "warn", md: "**lose** (yo'qotmoq, \"lu:z\") va **loose** (bo'sh, keng, \"lu:s\") — boshqa so'zlar. O'tgan zamon: faqat **lost**, ❌ *losed* yo'q." },
        { t: "check", ex: { k: "listen", say: "heard", opts: ["hard", "heard", "head"], a: 1, why: "\"hö:d\" — **heard**. *hard* = \"ha:d\", *head* = \"hed\"." } },
      ],
    },
    {
      title: "tell yoki say? bring yoki take?",
      blocks: [
        { t: "p", md: "O'zbekchada \"aytmoq\" bitta, inglizchada ikkita: **say** va **tell**. Farqi — **kimga** aytilgani:" },
        {
          t: "table", head: ["Fe'l", "Tuzilishi", "Misol"],
          rows: [
            ["say – said", "say something (to somebody)", "He said hello. She said \"thank you\" to me."],
            ["tell – told", "tell somebody (something)", "He told me the news. She told us a story."],
          ],
          speak: [2],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She told me the answer.", "He said goodbye.", "My grandfather told us a story."] },
          bad: { title: "Xato", items: ["She said me the answer.", "He told goodbye.", "My grandfather said us a story."] },
        },
        { t: "p", md: "**bring** — gapiruvchi turgan joyga **olib kelmoq**; **take** — boshqa joyga **olib ketmoq**:" },
        {
          t: "examples", items: [
            { en: "My aunt brought us some apples from her garden.", uz: "Xolam bog'idan bizga olma olib keldi." },
            { en: "I took the books back to the library.", uz: "Kitoblarni kutubxonaga qaytarib olib bordim." },
          ],
        },
        { t: "tip", tone: "info", md: "**hear** — quloqqa tovush **eshitilishi** (o'z-o'zidan): *I heard a noise.* **listen (to)** — diqqat bilan **tinglash**: *I listened to music.* Shuning uchun ❌ *I heard to music* deyilmaydi." },
        { t: "check", ex: { k: "choice", q: "My teacher ___ me a funny story.", opts: ["said", "told", "say", "telled"], a: 1, why: "Kimgadir (*me*) aytib berish — **tell → told**." } },
      ],
    },
    {
      title: "Iboralar: spend, leave, send, feel",
      blocks: [
        { t: "p", md: "Bu fe'llar ma'lum so'zlar bilan birga keladi. Iborani **butunligicha** yodlang:" },
        {
          t: "table", head: ["Ibora", "O'tgan zamon misoli", "O'zbekcha"],
          rows: [
            ["spend money / time", "I spent 200,000 sums on shoes.", "Poyabzalga 200 000 so'm sarfladim."],
            ["spend + vaqt + in/at", "We spent a week in Bukhara.", "Buxoroda bir hafta o'tkazdik."],
            ["leave home / work", "She left work at six.", "U ishdan oltida chiqdi."],
            ["leave + narsa", "I left my phone at home.", "Telefonimni uyda qoldirdim."],
            ["send a message / an email", "He sent me a message.", "U menga xabar yubordi."],
            ["feel tired / ill / happy", "I felt very tired.", "O'zimni juda charchagan his qildim."],
            ["lose a game / my keys", "Our team lost the match.", "Jamoamiz o'yinda yutqazdi."],
          ],
          speak: [1],
        },
        { t: "tip", tone: "warn", md: "\"Uydan chiqdim\" — **I left home** (from shart emas). \"Toshkentdan ketdi\" — *She left Tashkent*. **leave** dan keyin joy bevosita keladi: ❌ *I left from home*." },
        { t: "check", ex: { k: "fill", q: "I ___ my umbrella on the bus yesterday. (leave)", a: ["left"], uz: "Kecha soyabonimni avtobusda qoldirib ketdim.", why: "**leave – left**: narsani qoldirmoq." } },
      ],
    },
    {
      title: "O'qing: Rustamning omadsiz kuni",
      blocks: [
        {
          t: "text", title: "A bad Monday",
          en: "Last Monday was a terrible day for Rustam. He didn't hear his alarm, so he slept until eight. He left home in a hurry and lost his bus pass on the way.\nAt work, his boss told him, \"The report is late!\" Rustam felt terrible. At lunchtime he spent all his money on a sandwich and a coffee.\nBut in the evening, things changed. His friend sent him a message: \"Come to dinner!\" Rustam went, and his friend's mother brought a big plate of plov. Later, his friend taught him a new card game. \"Not a bad day after all,\" Rustam thought.",
          uz: "O'tgan dushanba Rustam uchun dahshatli kun bo'ldi. U budilnikni eshitmadi, shuning uchun sakkizgacha uxlab qoldi. Uydan shoshib chiqdi va yo'lda yo'l kartasini yo'qotdi.\nIshda boshlig'i unga: \"Hisobot kechikdi!\" dedi. Rustam o'zini juda yomon his qildi. Tushlikda bor pulini sendvich va qahvaga sarfladi.\nLekin kechqurun hammasi o'zgardi. Do'sti unga xabar yubordi: \"Kechki ovqatga kel!\" Rustam bordi, do'stining onasi katta lagan palov olib keldi. Keyinroq do'sti unga yangi karta o'yinini o'rgatdi. \"Baribir yomon kun emas ekan\", — deb o'yladi Rustam.",
        },
        { t: "check", ex: { k: "tf", q: "Rustam budilnikni eshitdi, lekin turmadi.", a: false, why: "*He **didn't hear** his alarm* — u budilnikni eshitmadi." } },
        { t: "check", ex: { k: "choice", q: "Who **brought** the plov?", opts: ["Rustam", "Rustam's boss", "his friend's mother", "his friend"], a: 2, why: "*…his friend's mother **brought** a big plate of plov.*" } },
      ],
    },
    {
      title: "Dialog: Telefon qayerda?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Dilshod", en: "Kamola, did you send me the photos?", uz: "Kamola, menga suratlarni yubordingmi?" },
            { who: "Kamola", en: "No, sorry. I lost my phone yesterday!", uz: "Yo'q, kechirasan. Kecha telefonimni yo'qotib qo'ydim!" },
            { who: "Dilshod", en: "Oh no! Where did you leave it?", uz: "Voy! Qayerda qoldirding?" },
            { who: "Kamola", en: "I don't know. I felt so stupid. But this morning a taxi driver called my mum.", uz: "Bilmayman. O'zimni juda ahmoqdek his qildim. Lekin bugun ertalab bir taksi haydovchisi onamga qo'ng'iroq qildi." },
            { who: "Kamola", en: "He found it in his car and brought it to our house!", uz: "U telefonni mashinasidan topib, uyimizga olib keldi!" },
            { who: "Dilshod", en: "What a kind man! Did you hear his name?", uz: "Qanday mehribon odam! Ismini eshitdingmi?" },
            { who: "Kamola", en: "Yes, he told us — Ulugbek. My mum gave him some cake.", uz: "Ha, aytdi — Ulug'bek. Onam unga tort berdi." },
          ],
        },
        { t: "check", ex: { k: "order", uz: "U telefonni uyimizga olib keldi.", words: ["He", "brought", "the", "phone", "to", "our", "house"], extra: ["bringed", "took"], why: "Gapiruvchining uyiga — **bring → brought**." } },
      ],
    },
  ],
  words: [
    { en: "sleep – slept", uz: "uxlamoq", ipa: "sliːp – slept", pos: "verb", ex: "The baby slept all night.", exUz: "Chaqaloq tun bo'yi uxladi." },
    { en: "feel – felt", uz: "his qilmoq", ipa: "fiːl – felt", pos: "verb", ex: "I felt ill yesterday.", exUz: "Kecha o'zimni yomon his qildim." },
    { en: "leave – left", uz: "ketmoq; qoldirmoq", ipa: "liːv – left", pos: "verb", ex: "He left home at seven.", exUz: "U uydan yettida chiqdi." },
    { en: "spend – spent", uz: "sarflamoq; (vaqt) o'tkazmoq", ipa: "spend – spent", pos: "verb", ex: "We spent two days in Khiva.", exUz: "Xivada ikki kun o'tkazdik." },
    { en: "send – sent", uz: "yubormoq", ipa: "send – sent", pos: "verb", ex: "She sent me an email.", exUz: "U menga elektron xat yubordi." },
    { en: "lose – lost", uz: "yo'qotmoq; yutqazmoq", ipa: "luːz – lɒst", pos: "verb", ex: "I lost my wallet last week.", exUz: "O'tgan hafta hamyonimni yo'qotdim." },
    { en: "bring – brought", uz: "olib kelmoq", ipa: "brɪŋ – brɔːt", pos: "verb", ex: "My aunt brought us some fruit.", exUz: "Xolam bizga meva olib keldi." },
    { en: "teach – taught", uz: "o'rgatmoq, dars bermoq", ipa: "tiːtʃ – tɔːt", pos: "verb", ex: "My father taught me to swim.", exUz: "Otam menga suzishni o'rgatdi." },
    { en: "tell – told", uz: "aytib bermoq (kimgadir)", ipa: "tel – təʊld", pos: "verb", ex: "She told me the news.", exUz: "U menga yangilikni aytdi." },
    { en: "hear – heard", uz: "eshitmoq", ipa: "hɪə – hɜːd", pos: "verb", ex: "I heard a strange noise.", exUz: "G'alati shovqin eshitdim." },
  ],
  practice: [
    { k: "listen", say: "brought", opts: ["bought", "brought", "bring"], a: 1, why: "\"bro:t\" — **brought** (olib keldi). *bought* = \"bo:t\" (sotib oldi)." },
    { k: "listen", say: "She told me.", opts: ["She told me.", "She sold me.", "She tells me."], a: 0 },
    { k: "listen", say: "I felt tired.", opts: ["I feel tired.", "I fell tired.", "I felt tired."], a: 2, why: "**felt** — oxirida aniq *t*." },
    { k: "match", pairs: [["sleep", "slept"], ["feel", "felt"], ["leave", "left"], ["spend", "spent"], ["send", "sent"]] },
    { k: "match", pairs: [["lose", "lost"], ["bring", "brought"], ["teach", "taught"], ["tell", "told"], ["hear", "heard"]] },
    { k: "fill", q: "We ___ 300,000 sums at the bazaar. (spend)", a: ["spent"] },
    { k: "fill", q: "Our team ___ the match 0–2. (lose)", a: ["lost"], uz: "Jamoamiz o'yinda 0:2 hisobida yutqazdi." },
    { k: "fill", q: "Mr Karimov ___ us English last year. (teach)", a: ["taught"] },
    { k: "fill", q: "I didn't ___ well last night. (sleep)", a: ["sleep"], why: "**didn't** dan keyin V1: *didn't **sleep***." },
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["He said me his name.", "He told me his name.", "He told his name me.", "He telled me his name."], a: 1, why: "Kimgadir aytmoq — **tell somebody**: *He told me his name.*" },
    { k: "choice", q: "\"Uydan soat sakkizda chiqdim.\"", opts: ["I left from home at eight.", "I leaved home at eight.", "I left home at eight.", "I left the home at eight."], a: 2, why: "**leave home** — predlogsiz va artiklsiz." },
    { k: "tf", q: "**heard** so'zi *bird* bilan qofiyadosh: \"hö:d\".", a: true, why: "*hear* = \"hiə\", lekin **heard** = \"hö:d\"." },
    { k: "order", uz: "U (she) menga kecha xabar yubordi.", words: ["She", "sent", "me", "a", "message", "yesterday"], extra: ["send", "to"] },
    { k: "translate", uz: "Men kalitlarimni yo'qotdim.", a: ["I lost my keys", "I have lost my keys", "I've lost my keys"] },
    { k: "translate", uz: "Biz Samarqandda uch kun o'tkazdik.", a: ["We spent three days in Samarkand", "We spent 3 days in Samarkand", "We stayed in Samarkand for three days", "We stayed in Samarkand for 3 days", "We stayed three days in Samarkand", "We were in Samarkand for three days"] },
    { k: "speak", say: "My friend told me a funny story.", uz: "Do'stim menga kulgili voqeani aytib berdi." },
  ],
  quiz: [
    { k: "listen", say: "We heard the news.", opts: ["We hear the news.", "We heard the news.", "We had the news."], a: 1 },
    { k: "choice", q: "Qaysi juftlik **xato**?", opts: ["feel – felt", "lose – losed", "teach – taught", "send – sent"], a: 1, why: "**lose – lost**." },
    { k: "choice", q: "My grandmother ___ us a story about her childhood.", opts: ["said", "told", "spoke", "talked"], a: 1, why: "**tell somebody a story** → *told us a story*." },
    { k: "choice", q: "\"Do'stim mehmonga tort olib keldi.\" — My friend ___ a cake to the party.", opts: ["took", "brought", "bought", "brang"], a: 1, why: "Biz turgan joyga olib kelmoq — **brought**. *bought* — sotib oldi." },
    { k: "fill", q: "She ___ her bag in the taxi. (leave)", a: ["left"] },
    { k: "fill", q: "I ___ very happy after the exam. (feel)", a: ["felt"] },
    { k: "fill", q: "Did you ___ the noise last night? (hear)", a: ["hear"], why: "**Did** savolida — V1." },
    { k: "order", uz: "Otam menga shaxmat o'ynashni o'rgatdi.", words: ["My", "father", "taught", "me", "to", "play", "chess"], extra: ["teached", "played"] },
    { k: "translate", uz: "U (he) menga xat yubordi.", a: ["He sent me a letter", "He sent a letter to me", "He sent me an email", "He sent an email to me", "He sent me a message", "He sent a message to me"] },
    { k: "tf", q: "Rustam tushlikda bor pulini sendvich va qahvaga sarfladi (**spent**).", a: true, why: "*At lunchtime he spent all his money on a sandwich and a coffee.*" },
  ],
  summary: [
    "**sleep – slept, feel – felt, leave – left** (i: → e + t); **spend – spent, send – sent** (d → t).",
    "**bring – brought, teach – taught** (\"o:t\", gh o'qilmaydi); **tell – told; lose – lost; hear – heard** (\"hö:d\").",
    "**tell somebody** (*told me*), lekin **say something** (*said hello*). **bring** — bu yerga, **take** — u yerga.",
    "Iboralar: **left home, left my phone, spent money/a week, sent a message, felt tired, lost the match**.",
  ],
  homework: "Bugungi 10 fe'l uchun kartochka yasang va eski 20 tasi bilan aralashtirib takrorlang. Keyin \"Omadsiz kunim\" mavzusida 8–10 gapli kichik hikoya yozing: kamida 6 ta yangi fe'l (*slept, left, lost, felt, told, spent…*) ishlatilsin.",
};

export default lesson;
