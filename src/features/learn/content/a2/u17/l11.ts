import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l11",
  title: "Pre-Intermediate: final review",
  titleUz: "Pre-Intermediate: yakuniy takror",
  goal: "Butun Pre-Intermediate darajani qisqa takrorlaysiz: **o'tgan zamon, kelajak, taqqoslash, modal fe'llar, Present Perfect, passive, relative clauses** va kundalik vaziyatlar. Qaysi mavzu kuchli, qaysi biri takrorni talab qilishini bilib olasiz.",
  mini: true,
  kind: "review",
  slides: [
    {
      title: "Suhbat: o'tgan hafta va rejalar",
      blocks: [
        { t: "p", md: "Kamol va Laylo uchrashishdi. Suhbatda ko'p mavzu uchraydi: o'tgan zamon, reja, Present Perfect va taqqoslash." },
        {
          t: "dialog", lines: [
            { who: "Kamol", en: "Hi Laylo! What did you do last weekend?", uz: "Salom, Laylo! O'tgan dam olish kunida nima qilding?" },
            { who: "Laylo", en: "I visited my grandmother. She lives in a village which is quite far from here.", uz: "Buvimnikiga bordim. U bu yerdan ancha uzoqdagi qishloqda yashaydi." },
            { who: "Kamol", en: "Have you ever been to Bukhara? I'm going to travel there next month.", uz: "Buxoroda bo'lganmisan? Men kelasi oy u yerga bormoqchiman." },
            { who: "Laylo", en: "Yes, I have. It's more beautiful than Tashkent, I think. You should visit the old city.", uz: "Ha, bo'lganman. Menimcha, u Toshkentdan chiroyliroq. Eski shaharni ko'rishing kerak." },
            { who: "Kamol", en: "Thanks! If the weather is good, I'll take a lot of photos.", uz: "Rahmat! Ob-havo yaxshi bo'lsa, ko'p rasm olaman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "What is Kamol going to do next month?", opts: ["Visit his grandmother", "Travel to Bukhara", "Move to Tashkent", "Buy a camera"], a: 1, why: "*I'm going to travel there next month* (there = Bukhara)." } },
        { t: "check", ex: { k: "tf", q: "Laylo has never been to Bukhara.", a: false, why: "*Yes, I have.* — u Buxoroda bo'lgan." } },
      ],
    },
    {
      title: "Tez jadval: hamma zamonlar va shakllar",
      blocks: [
        {
          t: "table", head: ["Mavzu", "Shakl", "Misol"], speak: [2],
          rows: [
            ["Past Simple", "V2 / did + V1", "I visited my grandmother."],
            ["Past Continuous", "was / were + -ing", "I was cooking when you called."],
            ["Going to / will", "reja / qaror", "I'm going to study. I'll help you."],
            ["Taqqoslash", "-er than / more … than / the -est", "It's cheaper than that one."],
            ["Modal fe'llar", "must, should, can, could + V1", "You should rest. Could I sit here?"],
            ["Present Perfect", "have / has + V3", "I've lived here for ten years."],
            ["Passive", "is / was + V3", "The window was broken yesterday."],
            ["Relative clause", "who, which, that", "The man who lives next door is a dentist."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I've lived here since 2020.", "She is taller than me.", "If it rains, we'll stay at home."] },
          bad: { title: "Xato", items: ["I live here since 2020.", "She is more tall than me.", "If it will rain, we stay at home."] },
        },
        { t: "check", ex: { k: "fill", q: "I ___ here for ten years. (live)", a: ["have lived", "'ve lived", "have been living", "'ve been living"], why: "**for** + muddat → Present Perfect." } },
      ],
    },
    {
      title: "Hayotiy vaziyatlar",
      blocks: [
        { t: "p", md: "Bu bosqichda siz kundalik vaziyatlarni ham o'rgandingiz: **muloyim iltimos**, **yo'l so'rash**, **shifokorda**, **do'konda**, **restoranda**, **telefonda stol band qilish**. Asosiy iboralar:" },
        {
          t: "examples", items: [
            { en: "Could you tell me where the station is?", uz: "Bekat qayerdaligini ayta olasizmi?" },
            { en: "I'd like to return this. Here is the receipt.", uz: "Buni qaytarmoqchiman. Mana chek." },
            { en: "I'd like to book a table for four on Friday.", uz: "Juma kuni to'rt kishilik stol band qilmoqchiman." },
            { en: "You should drink more water.", uz: "Ko'proq suv ichishing kerak." },
          ],
        },
        { t: "tip", tone: "good", md: "Muloyim iltimos uchun: **Could you…? / Could I…? / I'd like to…** Ular ingliz tilida hamma joyda ishlaydi." },
        { t: "check", ex: { k: "choice", q: "Which is the most polite?", opts: ["Give me the menu.", "Could I have the menu, please?", "I want the menu now.", "Menu!"], a: 1, why: "**Could I…, please?**" } },
      ],
    },
  ],
  words: [
    { en: "revise", uz: "takrorlamoq", ipa: "rɪˈvaɪz", pos: "verb", ex: "I revise English words every evening.", exUz: "Har kecha inglizcha so'zlarni takrorlayman." },
    { en: "level", uz: "daraja", ipa: "ˈlevl", pos: "noun", ex: "My English level is getting better.", exUz: "Ingliz tilidagi darajam yaxshilanyapti." },
    { en: "grammar", uz: "grammatika", ipa: "ˈɡræmə", pos: "noun", ex: "Grammar is easier with examples.", exUz: "Grammatika misollar bilan osonroq." },
    { en: "pronunciation", uz: "talaffuz", ipa: "prəˌnʌnsiˈeɪʃn", pos: "noun", ex: "My pronunciation has improved.", exUz: "Talaffuzim yaxshilandi." },
    { en: "exam", uz: "imtihon", ipa: "ɪɡˈzæm", pos: "noun", ex: "I have an English exam next week.", exUz: "Kelasi hafta ingliz tilidan imtihonim bor." },
    { en: "certificate", uz: "sertifikat", ipa: "səˈtɪfɪkət", pos: "noun", ex: "She got a certificate after the course.", exUz: "U kursdan keyin sertifikat oldi." },
  ],
  practice: [
    { k: "match", pairs: [["revise", "takrorlamoq"], ["level", "daraja"], ["pronunciation", "talaffuz"], ["exam", "imtihon"], ["certificate", "sertifikat"]] },
    { k: "choice", q: "I ___ TV when the phone rang.", opts: ["watched", "was watching", "have watched", "watch"], a: 1, why: "Uzoq jarayon + qisqa voqea → **was watching**." },
    { k: "choice", q: "This phone is ___ than that one.", opts: ["cheap", "cheaper", "cheapest", "more cheap"], a: 1, why: "Qisqa sifat + **than** → **cheaper**." },
    { k: "choice", q: "The Registan ___ every year by thousands of tourists.", opts: ["visits", "is visited", "visited", "is visiting"], a: 1, why: "Passive: **is visited**." },
    { k: "choice", q: "The woman ___ lives next door is a teacher.", opts: ["who", "which", "what", "where"], a: 0, why: "Odam uchun **who**." },
    { k: "fill", q: "If it rains tomorrow, we ___ at home.", a: ["will stay", "'ll stay", "will be"], why: "If + Present, **will** + V1." },
    { k: "fill", q: "She ___ in Tashkent since 2019. (live)", a: ["has lived", "'s lived", "has been living", "'s been living"], why: "**since** → Present Perfect." },
    { k: "fill", q: "You ___ see a doctor. You look ill. (maslahat)", a: ["should"], why: "Maslahat → **should**." },
    { k: "tf", q: "**She is more tall than me** — to'g'ri gap.", a: false, why: "To'g'risi: *She is **taller** than me.*" },
    { k: "fix", wrong: "I have seen that film yesterday.", a: ["I saw that film yesterday.", "I watched that film yesterday."], why: "**yesterday** bilan Past Simple." },
    { k: "order", uz: "Juma kuni to'rt kishilik stol band qilmoqchiman.", words: ["I'd", "like", "to", "book", "a", "table", "for", "four", "on", "Friday."], extra: ["in", "at"], alt: [["I", "would", "like", "to", "book", "a", "table", "for", "four", "on", "Friday."]] },
    { k: "order", uz: "Bu uzoq vaqtdan beri meni qiziqtiradi.", words: ["I've", "been", "interested", "in", "it", "for", "a", "long", "time."], extra: ["since", "am"] },
    { k: "translate", uz: "Buni qaytarmoqchiman. Mana chek.", a: ["I'd like to return this. Here is the receipt.", "I'd like to return this. Here's the receipt.", "I would like to return this. Here is the receipt.", "I would like to return this. Here's the receipt.", "I want to return this. Here is the receipt.", "I want to return this. Here's the receipt."] },
    { k: "translate", uz: "Men kelasi hafta imtihon topshiraman.", a: ["I'm taking an exam next week.", "I am taking an exam next week.", "I'm going to take an exam next week.", "I am going to take an exam next week.", "I have an exam next week.", "I'll take an exam next week."] },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I live here since 2020.", "I've lived here since 2020.", "I living here since 2020.", "I did live here since 2020."], a: 1, why: "**since** + vaqt nuqtasi → Present Perfect." },
    { k: "choice", q: "We ___ to Samarkand next week. (rejamiz bor)", opts: ["are going", "went", "were going", "have gone"], a: 0, why: "Reja → **are going to / are going**." },
    { k: "choice", q: "**You ___ wear a seat belt in a car.** (bu qonun)", opts: ["must", "might", "can", "used to"], a: 0, why: "Qonun, majburiyat → **must**." },
    { k: "choice", q: "The house ___ in 1990.", opts: ["built", "was built", "is built", "builds"], a: 1, why: "Passive, o'tgan zamon: **was built**." },
    { k: "fill", q: "This is the book ___ I told you about. (which / that)", a: ["which", "that"], why: "Narsa uchun **which / that**." },
    { k: "fill", q: "This bridge ___ built in 1995. (passive)", a: ["was"], why: "Passive, o'tgan zamon: **was** + V3." },
    { k: "tf", q: "**Could I have a refund, please?** — muloyim iltimos.", a: true, why: "**Could I…, please?**" },
    { k: "order", uz: "Agar yomg'ir yog'sa, uyda qolamiz.", words: ["If", "it", "rains,", "we'll", "stay", "at", "home."], extra: ["will", "rain"], alt: [["If", "it", "rains,", "we", "will", "stay", "at", "home."]] },
    { k: "listen", say: "I've never been to Bukhara.", opts: ["I've never been to Bukhara.", "I never went to Bukhara.", "I've never gone to Bukhara."], a: 0 },
  ],
  summary: [
    "**O'tgan zamon:** Past Simple (V2), Past Continuous (was/were + -ing), used to.",
    "**Kelajak:** going to (reja), will (qaror), if + Present, will + V1.",
    "**Taqqoslash va modal fe'llar:** cheaper than, the cheapest; must, should, could.",
    "**Present Perfect, passive, relative clauses:** have + V3, was + V3, who / which / that.",
    "Kundalik gaplarda muloyim bo'ling: **Could I…, please? I'd like to…**",
  ],
  homework: "Pre-Intermediate bo'yicha 8 gapli kichik hikoya yozing: o'tgan hafta nima qildingiz (Past Simple), kelasi oy nima qilmoqchisiz (going to), nima ko'rgansiz (Present Perfect) va bitta taqqoslash. Yozganingizni ovoz chiqarib o'qing.",
};

export default lesson;
