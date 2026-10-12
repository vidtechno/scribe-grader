import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l10",
  title: "Booking a table by phone",
  titleUz: "Telefonda stol band qilish",
  goal: "Restoranga **telefon qilib stol band qilasiz**: sana, vaqt va odamlar sonini aytasiz, o'rin haqida (*by the window, outside, quiet*) muloyim iltimos qilasiz va bronni tasdiqlaysiz.",
  mini: true,
  kind: "situation",
  slides: [
    {
      title: "Telefon suhbati",
      blocks: [
        { t: "p", md: "Aziz do'stlari bilan tug'ilgan kunni nishonlamoqchi. U restoranga qo'ng'iroq qiladi." },
        {
          t: "dialog", lines: [
            { who: "Host", en: "Good evening, Silk Road Restaurant. How can I help you?", uz: "Xayrli kech, \"Silk Road\" restorani. Sizga qanday yordam bera olaman?" },
            { who: "Aziz", en: "Hello. I'd like to book a table for six people on Saturday, please.", uz: "Salom. Shanba kuniga olti kishilik stol band qilmoqchiman." },
            { who: "Host", en: "Certainly. What time would you like to come?", uz: "Albatta. Soat nechaga kelmoqchisiz?" },
            { who: "Aziz", en: "At seven o'clock. Could we have a table in a quiet corner?", uz: "Soat yettiga. Tinch burchakdan stol bo'ladimi?" },
            { who: "Host", en: "Of course. Can I have your name and phone number, please?", uz: "Albatta. Ismingiz va telefon raqamingizni aytsangiz." },
            { who: "Aziz", en: "It's Aziz Karimov. My number is 90 123 45 67.", uz: "Aziz Karimov. Raqamim 90 123 45 67." },
            { who: "Host", en: "Thank you. So, that's a table for six on Saturday at seven. See you then!", uz: "Rahmat. Demak, shanba soat yettiga olti kishilik stol. Ko'rishguncha!" },
          ],
        },
        { t: "check", ex: { k: "choice", q: "How many people is the table for?", opts: ["Four", "Five", "Six", "Seven"], a: 2, why: "*a table for six people*." } },
        { t: "check", ex: { k: "tf", q: "Aziz wants a table near the door.", a: false, why: "U **quiet corner** (tinch burchak) so'radi." } },
      ],
    },
    {
      title: "Sana, vaqt, odamlar soni",
      blocks: [
        { t: "p", md: "Bron qilishda uchta narsani aniq aytish kerak: **qachon, soat nechada, necha kishi.**" },
        {
          t: "table", head: ["Nima", "Ibora"], speak: [1],
          rows: [
            ["Kun", "on Friday / on the 15th of May"],
            ["Soat", "at seven o'clock / at half past seven"],
            ["Odamlar", "a table for two / for four people"],
            ["Bron", "I'd like to book a table, please."],
            ["Bron", "Do you have a table available tonight?"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["a table for four", "on Friday at eight", "I'd like to book a table."] },
          bad: { title: "Xato", items: ["a table to four", "in Friday at eight", "I'd like book a table."] },
        },
        { t: "tip", tone: "info", md: "Kun oldidan **on** (*on Friday*), soat oldidan **at** (*at seven*). **I'd like to** + fe'l — muloyim xohish." },
        { t: "check", ex: { k: "fill", q: "I'd like to book a table ___ Friday at eight.", a: ["on"], why: "Kun oldidan **on**." } },
      ],
    },
    {
      title: "Iltimoslar",
      blocks: [
        { t: "p", md: "Joy haqida ham muloyim so'rash mumkin. **Could we have…?** va **Is it possible to…?** ishlating." },
        {
          t: "examples", items: [
            { en: "Could we have a table by the window?", uz: "Deraza yonidan stol bo'ladimi?" },
            { en: "Could we sit outside on the terrace?", uz: "Tashqarida, terrasada o'tirsak bo'ladimi?" },
            { en: "I'm vegetarian. Do you have any vegetarian dishes?", uz: "Men vegetarianman. Vegetarian taomlaringiz bormi?" },
            { en: "Can you confirm my reservation, please?", uz: "Bronimni tasdiqlab bera olasizmi?" },
          ],
        },
        { t: "tip", tone: "good", md: "Qo'ng'iroq oxirida bronni takrorlang: *So that's a table for six on Saturday at seven.* Shunda xatolik bo'lmaydi." },
        { t: "check", ex: { k: "choice", q: "Deraza yonida o'tirishni qanday so'raysiz?", opts: ["Could we have a table by the window?", "We sit window.", "Give me window table.", "I want the window sit."], a: 0, why: "**Could we have…?** — muloyim iltimos." } },
      ],
    },
  ],
  words: [
    { en: "book", uz: "band qilmoq", ipa: "bʊk", pos: "verb", ex: "I'd like to book a table for two.", exUz: "Ikki kishilik stol band qilmoqchiman." },
    { en: "reserve", uz: "oldindan band qilmoq", ipa: "rɪˈzɜːv", pos: "verb", ex: "I reserved a table for eight o'clock.", exUz: "Soat sakkizga stol band qildim." },
    { en: "quiet", uz: "tinch", ipa: "ˈkwaɪət", pos: "adjective", ex: "We'd like a quiet table, please.", exUz: "Tinch stol bo'lsa yaxshi edi." },
    { en: "corner", uz: "burchak", ipa: "ˈkɔːnə", pos: "noun", ex: "The table is in the corner.", exUz: "Stol burchakda." },
    { en: "terrace", uz: "terrasa, ochiq maydoncha", ipa: "ˈterəs", pos: "noun", ex: "We had dinner on the terrace.", exUz: "Kechki ovqatni terrasada yedik." },
    { en: "confirm", uz: "tasdiqlamoq", ipa: "kənˈfɜːm", pos: "verb", ex: "Please confirm the time.", exUz: "Iltimos, vaqtni tasdiqlang." },
  ],
  practice: [
    { k: "match", pairs: [["book", "band qilmoq"], ["quiet", "tinch"], ["corner", "burchak"], ["terrace", "terrasa"], ["confirm", "tasdiqlamoq"]] },
    { k: "listen", say: "I'd like to book a table for four.", opts: ["I'd like to book a table for four.", "I'd like to book a table for five.", "I'd like to book a room for four."], a: 0 },
    { k: "choice", q: "A table ___ two people, please.", opts: ["to", "for", "in", "at"], a: 1, why: "**a table for two**." },
    { k: "choice", q: "We'd like a table ___ seven o'clock.", opts: ["on", "in", "at", "for to"], a: 2, why: "Soat oldidan **at**." },
    { k: "fill", q: "I'd like to ___ a table for Saturday.", a: ["book", "reserve"], why: "**book / reserve a table**." },
    { k: "fill", q: "Could we have a table ___ the window?", a: ["by", "near", "next to"], why: "**by the window** — deraza yonida." },
    { k: "fill", q: "Can you ___ my reservation, please?", a: ["confirm"], hint: "tasdiqlamoq", why: "**confirm** — tasdiqlamoq." },
    { k: "tf", q: "Bron qilganda soat va odamlar sonini aytish kerak.", a: true, why: "Restoran **qachon** va **necha kishi** ekanini bilishi kerak." },
    { k: "fix", wrong: "I'd like book a table for tomorrow.", a: ["I'd like to book a table for tomorrow.", "I would like to book a table for tomorrow."], why: "**I'd like to** + V1." },
    { k: "fix", wrong: "We want a table in Friday at eight.", a: ["We want a table on Friday at eight.", "We'd like a table on Friday at eight.", "We would like a table on Friday at eight."], why: "Kun oldidan **on**." },
    { k: "order", uz: "Shanba kuniga olti kishilik stol band qilmoqchiman.", words: ["I'd", "like", "to", "book", "a", "table", "for", "six", "on", "Saturday."], extra: ["in", "at"], alt: [["I", "would", "like", "to", "book", "a", "table", "for", "six", "on", "Saturday."]] },
    { k: "order", uz: "Terrasadan stol bo'ladimi?", words: ["Could", "we", "have", "a", "table", "on", "the", "terrace?"], extra: ["do", "to"], alt: [["Can", "we", "have", "a", "table", "on", "the", "terrace?"]] },
    { k: "translate", uz: "Ikki kishilik stol band qilmoqchiman.", a: ["I'd like to book a table for two.", "I would like to book a table for two.", "I want to book a table for two.", "I'd like to reserve a table for two.", "I would like to reserve a table for two."] },
    { k: "translate", uz: "Tinch burchakdan stol bo'ladimi?", a: ["Could we have a table in a quiet corner?", "Can we have a table in a quiet corner?", "Could we have a quiet table in the corner?", "Can we have a quiet table in the corner?"] },
    { k: "speak", say: "Hello. I'd like to book a table for four people on Friday at eight.", uz: "Salom. Juma kuni soat sakkizga to'rt kishilik stol band qilmoqchiman." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi gap to'g'ri?", opts: ["I'd like to book a table for three.", "I'd like book a table for three.", "I'd like to book a table to three.", "I like to booking a table."], a: 0, why: "**I'd like to book a table for three.**" },
    { k: "choice", q: "Restoran xodimi: \"What time would you like to come?\" Javob?", opts: ["At seven, please.", "For six people.", "On the terrace.", "It's delicious."], a: 0, why: "Savol vaqt haqida → **At seven.**" },
    { k: "choice", q: "\"Tinch\" inglizcha?", opts: ["quiet", "quite", "spicy", "included"], a: 0, why: "**quiet** (tinch), **quite** (ancha) emas." },
    { k: "fill", q: "Can I have your name and phone ___, please?", a: ["number"], hint: "raqam", why: "**phone number**." },
    { k: "fill", q: "So that's a table ___ six on Saturday at seven.", a: ["for"], why: "**a table for six**." },
    { k: "listen", say: "Could we sit outside, please?", opts: ["Could we sit outside, please?", "Could we sit inside, please?", "Could we pay outside, please?"], a: 0 },
    { k: "tf", q: "**on Friday** — to'g'ri; **in Friday** — ham to'g'ri.", a: false, why: "Kunlar bilan faqat **on**: *on Friday*." },
    { k: "order", uz: "Bronimni tasdiqlab bera olasizmi?", words: ["Can", "you", "confirm", "my", "reservation,", "please?"], extra: ["to", "book"], alt: [["Could", "you", "confirm", "my", "reservation,", "please?"]] },
  ],
  summary: [
    "Bron qilish: **I'd like to book a table for four on Friday at eight.**",
    "Predloglar: **on** + kun, **at** + soat, **for** + odamlar soni.",
    "Iltimoslar: **Could we have a table by the window / in a quiet corner / outside?**",
    "Oxirida bronni **tasdiqlang**: *So that's a table for…*",
  ],
  homework: "Sevimli restoraningizga qo'ng'iroq qilayotganingizni tasavvur qiling. 6–8 gapli telefon dialogini yozing: kun, soat, odamlar soni, bitta iltimos (masalan, deraza yonida) va ismingiz. Keyin do'stingiz bilan rollarda o'qing.",
};

export default lesson;
