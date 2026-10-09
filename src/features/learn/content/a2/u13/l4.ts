import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u13-l4",
  title: "Present Continuous for plans",
  titleUz: "Present Continuous: kelishilgan rejalar",
  goal: "**Present Continuous** ni kelajak uchun ishlatasiz: **kelishib qo'yilgan** uchrashuv va rejalarni (*I'm meeting Laylo at six*) aytasiz, uni **going to** va **Present Simple** (jadval) bilan chalkashtirmaysiz.",
  slides: [
    {
      title: "Takror va yangi ma'no",
      blocks: [
        { t: "p", md: "Present Continuous (**am / is / are + V-ing**) ni siz biladigan ma'noda ishlatamiz: *I'm studying now.* Endi uning yana bir ma'nosi bor — **yaqin kelajakdagi kelishilgan reja** (arrangement). Bunda odatda **vaqt iborasi** va **boshqa odamlar** ishtirok etadi: uchrashuv belgilangan, chipta olingan, joy band qilingan." },
        {
          t: "examples", items: [
            { en: "I'm meeting Laylo at six.", uz: "Soat oltida Laylo bilan uchrashaman.", note: "Vaqt va odam kelishilgan." },
            { en: "We're flying to Istanbul on Monday.", uz: "Dushanba kuni Istanbulga uchamiz.", note: "Chipta olingan." },
            { en: "He's seeing the dentist tomorrow morning.", uz: "U ertaga ertalab stomatologga boradi.", note: "Qabulga yozilgan." },
            { en: "Are you coming to the wedding?", uz: "To'yga kelasanmi?" },
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida bu ma'noni oddiy \"-aman / -amiz\" bilan aytamiz. Inglizchada *I meet Laylo at six* (Present Simple) demang — kelishilgan reja uchun **I'm meeting**." },
        { t: "check", ex: { k: "fill", q: "We ___ having a party on Saturday. (be)", a: ["are", "'re"], why: "*we* → **are** + V-ing." } },
      ],
    },
    {
      title: "Vaqt iboralari va savol / inkor",
      blocks: [
        { t: "p", md: "Kelajak ma'nosini ko'pincha **vaqt iborasi** beradi. Gap tuzilishi odatdagi Present Continuous bilan bir xil:" },
        {
          t: "table", head: ["Vaqt iborasi", "Misol"], speak: [1],
          rows: [
            ["tonight", "I'm cooking plov tonight."],
            ["tomorrow morning", "She's visiting her aunt tomorrow morning."],
            ["on Friday", "We're having lunch on Friday."],
            ["next week", "They're moving next week."],
            ["at 7 o'clock", "He's picking me up at 7 o'clock."],
          ],
        },
        {
          t: "table", head: ["Darak", "Inkor", "Savol"], speak: [0, 1, 2],
          rows: [
            ["I'm working on Sunday.", "I'm not working on Sunday.", "Am I working on Sunday?"],
            ["She's coming.", "She isn't coming.", "Is she coming?"],
            ["They're leaving at nine.", "They aren't leaving at nine.", "Are they leaving at nine?"],
          ],
        },
        { t: "check", ex: { k: "order", uz: "Aziz dushanba kuni Dilnoza bilan uchrashadimi?", words: ["Is", "Aziz", "meeting", "Dilnoza", "on", "Monday?"], extra: ["Does", "meet"] } },
      ],
    },
    {
      title: "Present Simple: jadval va ro'yxat",
      blocks: [
        { t: "p", md: "Kelajak haqida **Present Simple** ham ishlatiladi, lekin faqat **rasmiy jadval va dastur** (poyezd, samolyot, film, dars) uchun. Bu yerda reja shaxsiy emas, jadval o'zgarmaydi:" },
        {
          t: "examples", items: [
            { en: "The train leaves at 8:15 tomorrow.", uz: "Poyezd ertaga 8:15 da jo'naydi.", note: "Jadval." },
            { en: "The film starts at 9 pm.", uz: "Film kechqurun soat 9 da boshlanadi.", note: "Dastur." },
            { en: "My English class begins at 10 on Monday.", uz: "Ingliz tili darsim dushanba kuni 10 da boshlanadi." },
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I'm meeting my friends tonight.", "The bus leaves at 7:30.", "We're going to the cinema tonight."] },
          bad: { title: "Xato", items: ["I meet my friends tonight.", "The bus is leave at 7:30.", "We go to the cinema tonight. (shaxsiy reja)"] },
        },
        { t: "tip", tone: "good", md: "Qisqa qoida: **shaxsiy reja → Present Continuous. Rasmiy jadval → Present Simple.** *I'm taking the 9:00 train. It leaves from Platform 3.*" },
        { t: "check", ex: { k: "choice", q: "**The museum ___ at 10 tomorrow.** (jadval)", opts: ["opens", "open", "opening", "does open"], a: 0 } },
      ],
    },
    {
      title: "Present Continuous yoki going to?",
      blocks: [
        { t: "p", md: "Kelishilgan reja uchun odatda ikkalasi ham to'g'ri: *I'm meeting Aziz at 6* = *I'm going to meet Aziz at 6*. Farqi nozik:" },
        {
          t: "table", head: ["", "Present Continuous", "going to"],
          rows: [
            ["Ma'no", "kelishilgan reja, vaqt / joy belgilangan", "niyat, qaror"],
            ["Misol", "I'm having dinner with Laylo at 8.", "I'm going to learn to swim one day."],
            ["Taxmin", "ishlatilmaydi", "It's going to rain."],
          ],
        },
        { t: "tip", tone: "warn", md: "**Taxmin** (yomg'ir, yiqilish, kasal bo'lish) va **kelishib bo'lmaydigan** narsalar uchun Present Continuous **ishlatilmaydi**: *It's raining tomorrow* ❌ → *It's going to rain tomorrow* ✅. Chunki ob-havo bilan kelishib bo'lmaydi." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["It's going to be cold tomorrow.", "I'm seeing a doctor on Friday."] },
          bad: { title: "Xato", items: ["It's being cold tomorrow.", "I see a doctor on Friday. (shaxsiy reja)"] },
        },
        { t: "check", ex: { k: "choice", q: "**Look at the sky! It ___.**", opts: ["is raining soon", "is going to rain", "rains tomorrow", "is rain"], a: 1, why: "Dalilga asoslangan taxmin → **going to**." } },
        { t: "check", ex: { k: "tf", q: "**Tomorrow it's snowing** — taxmin sifatida to'g'ri.", a: false, why: "Ob-havo haqida taxminda **it's going to snow** yoki **it will snow**." } },
      ],
    },
    {
      title: "O'qing: Dilnozaning kundaligi",
      blocks: [
        {
          t: "text", title: "Dilnoza's diary",
          en: "Next week is very busy for Dilnoza. On Monday she is seeing the dentist at ten o'clock. On Tuesday evening she is having dinner with her cousin Kamol at a new restaurant in Tashkent. On Wednesday she isn't working because she is taking her mother to the doctor.\nOn Friday she is flying to Samarkand for a friend's wedding. The flight leaves at 7:40 a.m., so she is getting up at four! She is staying with friends and coming back on Sunday. \"I'm not doing anything on Sunday evening,\" she says. \"I'm just sleeping!\"",
          uz: "Kelasi hafta Dilnoza uchun juda band. Dushanba kuni soat o'nda stomatologga boradi. Seshanba kuni kechqurun amakivachchasi Kamol bilan Toshkentdagi yangi restoranda kechki ovqat qiladi. Chorshanba kuni ishlamaydi, chunki onasini shifokorga olib boradi.\nJuma kuni do'stining to'yiga Samarqandga uchadi. Reys ertalab 7:40 da uchadi, shuning uchun u soat to'rtda turadi! U do'stlarinikida qoladi va yakshanba kuni qaytadi. \"Yakshanba kechqurun hech narsa qilmayman,\" deydi u. \"Shunchaki uxlayman!\"",
        },
        { t: "check", ex: { k: "choice", q: "What is Dilnoza doing on Wednesday?", opts: ["Seeing the dentist.", "Taking her mother to the doctor.", "Flying to Samarkand.", "Having dinner with Kamol."], a: 1 } },
        { t: "check", ex: { k: "tf", q: "Dilnoza is flying to Samarkand on Friday.", a: true } },
      ],
    },
    {
      title: "Dialog: uchrashuvni kelishish",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Aziz", en: "Are you free on Thursday evening, Laylo?", uz: "Laylo, payshanba kuni kechqurun bo'shmisan?" },
            { who: "Laylo", en: "Sorry, I'm not. I'm playing tennis with Dilnoza at six.", uz: "Kechir, yo'q. Soat oltida Dilnoza bilan tennis o'ynayman." },
            { who: "Aziz", en: "What about Friday?", uz: "Juma-chi?" },
            { who: "Laylo", en: "Friday is fine. I'm not doing anything after work.", uz: "Juma bo'ladi. Ishdan keyin hech narsa qilmayman." },
            { who: "Aziz", en: "Great! I'm picking up my cousin at the station at five, but I'm free at seven.", uz: "Zo'r! Beshda stansiyadan amakivachchamni olaman, lekin yettida bo'shman." },
            { who: "Laylo", en: "Perfect. Let's meet at seven then.", uz: "A'lo. Unda yettida uchrashamiz." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "Laylo is playing tennis on Friday.", a: false, why: "Tennis — **payshanba** kuni soat oltida." } },
      ],
    },
  ],
  words: [
    { en: "arrange", uz: "kelishmoq, uyushtirmoq", ipa: "əˈreɪndʒ", pos: "verb", ex: "We've arranged a meeting for Monday.", exUz: "Dushanbaga uchrashuv kelishib qo'ydik." },
    { en: "appointment", uz: "qabul, belgilangan uchrashuv", ipa: "əˈpɔɪntmənt", pos: "noun", ex: "I have an appointment at ten.", exUz: "Soat o'nda qabulim bor." },
    { en: "dentist", uz: "tish shifokori", ipa: "ˈdentɪst", pos: "noun", ex: "She's seeing the dentist on Friday.", exUz: "U juma kuni stomatologga boradi." },
    { en: "wedding", uz: "to'y", ipa: "ˈwedɪŋ", pos: "noun", ex: "We're going to a wedding in Bukhara.", exUz: "Buxorodagi to'yga boramiz." },
    { en: "flight", uz: "reys, parvoz", ipa: "flaɪt", pos: "noun", ex: "My flight leaves at six.", exUz: "Reysim oltida uchadi." },
    { en: "pick up", uz: "olib ketmoq (mashinada)", ipa: "pɪk ʌp", pos: "phrasal verb", ex: "I'm picking you up at eight.", exUz: "Seni soat sakkizda olib ketaman." },
    { en: "diary", uz: "kundalik; reja daftari", ipa: "ˈdaɪəri", pos: "noun", ex: "I'll write it in my diary.", exUz: "Buni kundaligimga yozib qo'yaman." },
    { en: "busy", uz: "band", ipa: "ˈbɪzi", pos: "adj", ex: "I'm busy on Tuesday.", exUz: "Seshanba kuni bandman." },
    { en: "free", uz: "bo'sh (vaqti bor)", ipa: "friː", pos: "adj", ex: "Are you free tonight?", exUz: "Bugun kechqurun bo'shmisan?" },
    { en: "stay with", uz: "birovnikida qolmoq", ipa: "steɪ wɪð", pos: "phrase", ex: "I'm staying with my uncle.", exUz: "Amakimnikida qolaman." },
  ],
  practice: [
    { k: "match", pairs: [["appointment", "qabul, uchrashuv"], ["dentist", "tish shifokori"], ["wedding", "to'y"], ["flight", "reys"], ["busy", "band"]] },
    { k: "listen", say: "I'm meeting Laylo at six.", opts: ["I meet Laylo at six.", "I'm meeting Laylo at six.", "I met Laylo at six."], a: 1 },
    { k: "listen", say: "We're flying to Istanbul on Monday.", opts: ["We're flying to Istanbul on Monday.", "We flew to Istanbul on Monday.", "We fly to Istanbul on Monday."], a: 0 },
    { k: "fill", q: "I ___ Aziz at six tonight. (meet)", a: ["am meeting", "'m meeting"], why: "Kelishilgan reja → **am meeting**." },
    { k: "fill", q: "She ___ seeing the dentist tomorrow. (be)", a: ["is", "'s"] },
    { k: "fill", q: "What time ___ you meeting them?", a: ["are"] },
    { k: "fill", q: "They ___ not coming to the party.", a: ["are", "'re"], uz: "Ular ziyofatga kelmayapti." },
    { k: "choice", q: "Qaysi gap kelishilgan reja uchun **xato**?", opts: ["I'm having lunch with Kamol on Friday.", "We're leaving at eight.", "I have lunch with Kamol on Friday. (shaxsiy reja)", "She's flying to Dubai next week."], a: 2, why: "Shaxsiy reja → **I'm having**." },
    { k: "choice", q: "**The bus ___ at 7:30 tomorrow.** (jadval)", opts: ["leaves", "is leave", "leaving", "does leave"], a: 0 },
    { k: "choice", q: "**Take an umbrella! It ___.**", opts: ["is raining tomorrow", "is going to rain", "rains tomorrow", "is rain"], a: 1 },
    { k: "tf", q: "Taxmin uchun (masalan, ob-havo) **Present Continuous** ishlatiladi.", a: false, why: "Taxmin uchun **going to** yoki **will**." },
    { k: "tf", q: "*I'm seeing the dentist on Friday.* — qabulga yozilganini bildiradi.", a: true },
    { k: "order", uz: "Bugun kechqurun biz kinoga bormayapmiz.", words: ["We", "aren't", "going", "to", "the", "cinema", "tonight."], extra: ["don't", "go"], alt: [["We're", "not", "going", "to", "the", "cinema", "tonight."], ["Tonight", "we", "aren't", "going", "to", "the", "cinema."]] },
    { k: "translate", uz: "Men juma kuni stomatologga boraman.", a: ["I'm seeing the dentist on Friday.", "I am seeing the dentist on Friday.", "I'm going to the dentist on Friday.", "I am going to the dentist on Friday.", "On Friday I'm seeing the dentist.", "On Friday I'm going to the dentist."] },
    { k: "speak", say: "I'm meeting my friends at seven tonight.", uz: "Bugun kechqurun soat yettida do'stlarim bilan uchrashaman." },
  ],
  quiz: [
    { k: "fill", q: "We ___ flying to Tashkent on Sunday. (be)", a: ["are", "'re"] },
    { k: "fill", q: "Is she ___ to the wedding? (come)", a: ["coming"] },
    { k: "choice", q: "\"Ertaga ertalab Aziz meni olib ketadi.\"", opts: ["Aziz picks me up tomorrow morning.", "Aziz is picking me up tomorrow morning.", "Aziz picking me up tomorrow morning.", "Aziz is pick me up tomorrow morning."], a: 1 },
    { k: "choice", q: "**My train ___ at 9:15.** (jadval)", opts: ["is leave", "leaves", "leaving", "does leave"], a: 1, why: "Rasmiy jadval → Present Simple: **leaves**." },
    { k: "choice", q: "**It ___ be cold tonight.** (taxmin)", opts: ["is being", "is going to", "going to", "does"], a: 1, why: "Taxmin: **It's going to be cold**." },
    { k: "listen", say: "Are you doing anything on Saturday?", opts: ["Are you doing anything on Saturday?", "Did you do anything on Saturday?", "Do you do anything on Saturday?"], a: 0 },
    { k: "tf", q: "Kelishilgan reja uchun odatda vaqt iborasi (tonight, on Friday…) bo'ladi.", a: true },
    { k: "tf", q: "**It's snowing tomorrow** — to'g'ri taxmin.", a: false, why: "**It's going to snow tomorrow.**" },
    { k: "order", uz: "Dushanba kuni Kamol bilan uchrashasizmi?", words: ["Are", "you", "meeting", "Kamol", "on", "Monday?"], extra: ["Do", "meet"] },
    { k: "translate", uz: "Biz kelasi hafta ko'chib o'tyapmiz.", a: ["We're moving next week.", "We are moving next week.", "Next week we're moving.", "Next week we are moving."] },
  ],
  summary: [
    "**am / is / are + V-ing** + vaqt iborasi = kelishilgan yaqin reja: *I'm meeting Laylo at six.*",
    "Rasmiy jadval va dasturda **Present Simple**: *The train leaves at 8:15.*",
    "Taxmin va ob-havo uchun **Present Continuous emas**, **going to / will**: *It's going to rain.*",
    "Savol va inkor oddiy Present Continuous kabi: *Are you coming? I'm not working on Sunday.*",
  ],
  homework: "Keyingi haftangiz uchun 7 ta gap yozing (har kunga bittadan) — *On Monday I'm… / On Tuesday I'm not…*. So'ng bir do'stingizga \"Are you free on …?\" deb yozing va ularning javobini ingliz tilida yozib bering.",
};

export default lesson;
