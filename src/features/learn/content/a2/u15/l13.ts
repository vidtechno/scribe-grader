import type { Lesson } from '../../../types';

// Mini lesson (grammar): offers and suggestions. Builds on l4 (Would you like, Shall I, I'll) and l2 (Why don't you, should).
const lesson: Lesson = {
  id: 'u15-l13',
  title: "Offers and suggestions",
  titleUz: "Takliflar: Shall I…? Let me… Why don't we…?",
  mini: true,
  kind: 'grammar',
  goal: "Yordam taklif qilasiz (**Shall I…? Let me…**), birgalikdagi rejani taklif qilasiz (**Why don't we…? How about…?**) va taklifga muloyim ravishda rozi bo'lasiz yoki rad etasiz.",
  slides: [
    {
      title: "Yordam taklif qilish",
      blocks: [
        { t: 'p', md: "Kimdir qiyinchilikda bo'lsa, inglizlar yordamni savol yoki qisqa va'da bilan taklif qiladi. Uchala shakldan keyin ham fe'lning **1-shakli** keladi (to yo'q):" },
        { t: 'table', head: ['Ibora', "Ma'nosi", 'Misol'], speak: [2], rows: [
          ["**Shall I** + V1?", "Qilib beraymi?", "Shall I open the window?"],
          ["**Can I** + V1?", "Yordam bera olamanmi?", "Can I carry your bag?"],
          ["**Let me** + V1", "Qo'yib bering, men qilaman", "Let me carry that for you."],
          ["**I'll** + V1", "Hozir qilaman", "I'll help you with the dishes."],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["Shall I open the window?", "Let me help you.", "I'll carry it."] }, bad: { title: "Xato", items: ["Shall I to open the window?", "Let me to help you.", "I help you now."] } },
        { t: 'tip', tone: 'info', md: "**Shall** faqat **I** va **we** bilan ishlatiladi: *Shall I…? Shall we…?* **Shall he…?** ❌" },
        { t: 'check', ex: { k: 'choice', q: "Do'stingiz og'ir sumka ko'tarib kelmoqda. Siz:", opts: ["Shall I to carry it?", "Let me carry that for you.", "Let me to carry it.", "I carrying it."], a: 1, why: "**Let me + V1**, to yo'q." } },
      ],
    },
    {
      title: "Taklifga javob: rozi bo'lish va rad etish",
      blocks: [
        { t: 'p', md: "Taklif qilinganda faqat \"Yes\" yoki \"No\" deyish quruq eshitiladi. Muloyim javoblar:" },
        { t: 'table', head: ["Rozilik", "Rad etish"], speak: [0, 1], rows: [
          ["Yes, please.", "No, thanks. I can manage."],
          ["That would be great.", "It's OK, I'll do it myself."],
          ["That's very kind of you.", "No, it's all right, thank you."],
        ] },
        { t: 'examples', items: [
          { en: "Shall I open the door? — Yes, please. Thank you!", uz: "Eshikni ochaymi? — Ha, marhamat. Rahmat!" },
          { en: "Let me carry your bag. — No, thanks. I can manage.", uz: "Sumkangizni ko'taray. — Yo'q, rahmat. O'zim eplayman." },
          { en: "Shall I make some tea? — That would be great.", uz: "Choy damlaymi? — Juda yaxshi bo'lardi." },
        ] },
        { t: 'tip', tone: 'good', md: "Rad etsangiz ham sababini ayting yoki rahmat deng: **No, thanks. I can manage.** Bu juda muloyim eshitiladi." },
        { t: 'check', ex: { k: 'fill', q: "Shall I help you? — No, thanks. I can ___.", a: ['manage'], uz: "Yordam beraymi? — Yo'q, rahmat. O'zim eplayman.", why: "**I can manage** — o'zim uddalayman." } },
      ],
    },
    {
      title: "Taklif: Why don't we…? How about…?",
      blocks: [
        { t: 'p', md: "Birgalikdagi ish haqida taklif aytish uchun to'rtta oddiy usul bor. Har birining tuzilishiga e'tibor bering:" },
        { t: 'table', head: ['Ibora', 'Keyin nima', 'Misol'], speak: [2], rows: [
          ["**Why don't we** …?", "V1", "Why don't we go by bus?"],
          ["**How about** …?", "fe'l + **-ing** yoki ot", "How about going to the park? / How about a picnic?"],
          ["**Let's** …", "V1", "Let's meet at six."],
          ["**Shall we** …?", "V1", "Shall we have lunch now?"],
        ] },
        { t: 'compare', good: { title: "To'g'ri", items: ["Why don't we go by bus?", "How about going by bus?", "Let's go by bus."] }, bad: { title: "Xato", items: ["Why we don't go by bus?", "How about go by bus?", "Why don't we to go by bus?"] } },
        { t: 'table', head: ["Rozilik", "Rad etish"], speak: [0, 1], rows: [
          ["Good idea!", "Sorry, I'd rather not."],
          ["Yes, let's.", "I'd prefer to stay at home."],
          ["OK, that sounds fun.", "Not really. I'm too tired."],
        ] },
        { t: 'check', ex: { k: 'choice', q: "Qaysi taklif to'g'ri?", opts: ["How about go to the cinema?", "How about going to the cinema?", "How about to go to the cinema?", "Why we don't go to the cinema?"], a: 1, why: "**How about + -ing**." } },
        { t: 'check', ex: { k: 'fill', q: "Why ___ we have lunch together?", a: ["don't"], uz: "Birga tushlik qilsak-chi?", why: "**Why don't we + V1?**" } },
      ],
    },
    {
      title: "Dialog: dam olish kuni rejasi",
      blocks: [
        { t: 'dialog', lines: [
          { who: 'Mia', en: "What shall we do on Saturday?", uz: "Shanba kuni nima qilamiz?" },
          { who: 'Tom', en: "Why don't we go to the lake? The weather will be nice.", uz: "Ko'lga borsak-chi? Ob-havo yaxshi bo'ladi." },
          { who: 'Mia', en: "Good idea! How about going by bus?", uz: "Yaxshi fikr! Avtobusda borsak-chi?" },
          { who: 'Tom', en: "OK. Shall I buy the tickets?", uz: "Mayli. Chiptalarni men olaymi?" },
          { who: 'Mia', en: "Yes, please. And let me make the sandwiches.", uz: "Ha, marhamat. Buterbrodlarni esa men tayyorlayman." },
          { who: 'Tom', en: "That would be great. I'll bring some fruit and water.", uz: "Juda yaxshi bo'ladi. Men meva va suv olib kelaman." },
        ] },
        { t: 'check', ex: { k: 'tf', q: "Tom wants to go to the lake by bus.", a: true, why: "Mia: *How about going by bus?* Tom: *OK.*" } },
        { t: 'check', ex: { k: 'choice', q: "Who will make the sandwiches?", opts: ['Mia', 'Tom', 'Both of them', 'Nobody'], a: 0, why: "*Let me make the sandwiches.*" } },
      ],
    },
  ],
  words: [
    { en: 'carry', uz: "ko'tarmoq, olib yurmoq", ipa: 'ˈkær.i', pos: 'verb', ex: 'Let me carry your bag.', exUz: "Sumkangizni ko'tarib berayin." },
    { en: 'suggestion', uz: 'taklif, fikr', ipa: 'səˈdʒes.tʃən', pos: 'noun', ex: 'That is a good suggestion.', exUz: "Bu yaxshi taklif." },
    { en: 'I can manage', uz: "o'zim eplayman", ipa: 'aɪ kæn ˈmæn.ɪdʒ', pos: 'phrase', ex: 'No, thanks. I can manage.', exUz: "Yo'q, rahmat. O'zim eplayman." },
    { en: "I'd rather not", uz: "xohlamas edim", ipa: 'aɪd ˈrɑː.ðə nɒt', pos: 'phrase', ex: "Shall we go out? — Sorry, I'd rather not.", exUz: "Tashqariga chiqamizmi? — Kechirasiz, yo'q." },
    { en: 'give someone a lift', uz: 'mashinada olib bormoq', ipa: 'gɪv ˈsʌm.wʌn ə lɪft', pos: 'phrase', ex: 'Shall I give you a lift to the station?', exUz: "Sizni bekatgacha mashinada olib boraymi?" },
  ],
  practice: [
    { k: 'choice', q: "Your friend can't open the jar. You say:", opts: ["Let me open it.", "Let me to open it.", "I opening it.", "Shall he open it?"], a: 0, why: "**Let me + V1**." },
    { k: 'choice', q: "Shall I make some coffee? — ___", opts: ["Yes, please.", "Yes, you shall.", "I make coffee.", "Yes, I do."], a: 0, why: "Taklifga javob: **Yes, please.**" },
    { k: 'fill', q: "It's cold in here. ___ I close the window?", a: ['Shall', 'Can', 'Could'], uz: "Bu yerda sovuq. Derazani yopaymi?", why: "Taklif: **Shall I…?**" },
    { k: 'fill', q: "Why don't we ___ a taxi? It's late.", a: ['take', 'get', 'call'], uz: "Taksi olsak-chi? Kech bo'ldi.", why: "**Why don't we + V1?**" },
    { k: 'fill', q: "How about ___ to the cinema tonight?", a: ['going'], uz: "Bugun kechqurun kinoga borsak-chi?", why: "**How about + -ing**." },
    { k: 'match', pairs: [["Shall I help you?", "Yordam beraymi?"], ["Let me carry that.", "Men ko'taray."], ["Why don't we go?", "Borsak-chi?"], ["I can manage.", "O'zim eplayman."]] },
    { k: 'order', uz: "Derazani ochaymi?", words: ['Shall', 'I', 'open', 'the', 'window?'], extra: ['to', 'we'] },
    { k: 'order', uz: "Avtobusda borsak-chi?", words: ['How', 'about', 'going', 'by', 'bus?'], extra: ['go', 'to'] },
    { k: 'fix', wrong: "Why we don't go to the park?", a: ["Why don't we go to the park?"], why: "To'g'ri tartib: **Why don't we + V1?**" },
    { k: 'fix', wrong: "Let me to help you with your bags.", a: ["Let me help you with your bags."], why: "**Let me** dan keyin **to** yo'q." },
    { k: 'listen', say: "Why don't we go by bus?", opts: ["Why don't we go by bus?", "Why don't you go by bus?", "Why do we go by bus?"], a: 0 },
    { k: 'dictation', say: "Shall I carry your bag?", a: ["Shall I carry your bag?"], uz: "Sumkangizni ko'taraymi?" },
    { k: 'translate', uz: "Kechki ovqatni men tayyorlayman.", a: ["Let me cook dinner.", "I'll cook dinner.", "Let me make dinner.", "I'll make dinner.", "Let me cook the dinner.", "I'll make the dinner."], why: "**Let me + V1** yoki **I'll + V1**." },
    { k: 'speak', say: "Shall I open the window? It's a bit hot.", uz: "Derazani ochaymi? Biroz issiq." },
  ],
  quiz: [
    { k: 'choice', q: "Taklif qiling: Dam olish kuni bog'ga boramiz.", opts: ["Why don't we go to the park on Sunday?", "Why we go to the park on Sunday?", "How about go to the park on Sunday?", "Shall he go to the park on Sunday?"], a: 0, why: "**Why don't we + V1?**" },
    { k: 'choice', q: "Let me help you. — ___", opts: ["That's very kind of you.", "You are welcome, I do.", "Yes, you let.", "No, I'm help."], a: 0, why: "Taklifni qabul qilish: **That's very kind of you.**" },
    { k: 'fill', q: "How about ___ a pizza for dinner?", a: ['having', 'ordering', 'getting', 'making', 'cooking', 'eating'], uz: "Kechki ovqatga pitsa bo'lsa-chi?", why: "**How about + -ing**." },
    { k: 'fill', q: "Shall ___ give you a lift to the station?", a: ['I'], why: "**Shall** faqat I va we bilan." },
    { k: 'tf', q: "**Shall he help us?** — to'g'ri taklif shakli.", a: false, why: "**Shall** faqat I va we bilan ishlatiladi." },
    { k: 'order', uz: "Men sumkani ko'taraman.", words: ["I'll", 'carry', 'the', 'bag.'], extra: ['to', 'carrying'], alt: [['Let', 'me', 'carry', 'the', 'bag.']] },
    { k: 'translate', uz: "Tushlik qilsak-chi?", a: ["Shall we have lunch?", "Why don't we have lunch?", "How about having lunch?", "Let's have lunch."], why: "Taklif: **Shall we…? / Why don't we…?**" },
    { k: 'listen', say: "No, thanks. I can manage.", opts: ["No, thanks. I can manage.", "Yes, please. I can manage.", "No, thanks. I can't manage."], a: 0 },
  ],
  summary: [
    "Yordam taklifi: **Shall I…? Can I…? Let me…** + V1 (to yo'q). **Shall** faqat I va we bilan.",
    "Taklif: **Why don't we + V1?**, **How about + -ing?**, **Let's + V1**, **Shall we + V1?**",
    "Javob: **Yes, please. / That would be great.** — **No, thanks. I can manage. / Sorry, I'd rather not.**",
    "Yangi so'zlar: **carry, suggestion, I can manage, I'd rather not, give someone a lift**.",
  ],
  homework: "Do'stingizga 3 ta yordam taklifi (*Shall I…? Let me…*) va hafta oxiri uchun 3 ta taklif (*Why don't we…? How about…?*) yozing. Har biriga ikki xil javob (rozilik va rad) ham yozing.",
};

export default lesson;
