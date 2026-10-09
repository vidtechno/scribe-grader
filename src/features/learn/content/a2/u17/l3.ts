import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u17-l3",
  title: "Money and shopping",
  titleUz: "Pul va xaridlar: narx, chegirma, qaytarish",
  goal: "Do'konda va bozorda **narxni so'raysiz** (*How much is it? How much are these?*), narxlarni to'g'ri aytasiz, **chegirma** so'raysiz, naqd yoki karta bilan **to'laysiz**, tovarni **qaytarasiz** va muammo bo'lsa **muloyim shikoyat** qilasiz. *How much costs?* kabi xatolardan qochasiz.",
  slides: [
    {
      title: "Narxni so'rash: How much…?",
      blocks: [
        { t: "p", md: "Narxni so'rashning ikkita asosiy usuli bor. Birinchisida **be** (is / are) ishlatiladi, ikkinchisida **cost** va yordamchi fe'l." },
        {
          t: "table", head: ["Savol", "Javob"], speak: [0, 1],
          rows: [
            ["How much is this shirt?", "It's 120,000 so'm."],
            ["How much are these shoes?", "They're 350,000 so'm."],
            ["How much does this bag cost?", "It costs 200,000 so'm."],
            ["How much do these apples cost?", "They cost 15,000 so'm a kilo."],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["How much is it?", "How much does it cost?", "How much are these oranges?"] },
          bad: { title: "Xato", items: ["How much costs it?", "How much it costs?", "How many is it?"] },
        },
        { t: "tip", tone: "warn", md: "**How much costs?** — keng tarqalgan xato, chunki o'zbekchada \"necha pul turadi?\" deymiz. Inglizchada **cost** bilan savol tuzsangiz — yordamchi fe'l **does / do** kerak: *How much **does** it cost?* Yoki oddiygina: *How much **is** it?*" },
        { t: "tip", tone: "info", md: "**How much** — sanalmaydigan narsalar va narx uchun (*How much money? How much water?*). **How many** — sanaladigan narsalar uchun (*How many apples? How many people?*)." },
        { t: "check", ex: { k: "choice", q: "___ are these socks?", opts: ["How many", "How much", "How price", "What cost"], a: 1, why: "Narx so'rash → **How much**." } },
      ],
    },
    {
      title: "Narxlarni aytish",
      blocks: [
        { t: "p", md: "Ingliz tilida narxni raqamlar bilan aytamiz. Katta sonlarda **thousand** (ming) va **million** ishlatiladi. **so'm** — ko'plikda ham **so'm** (s qo'shilmaydi)." },
        {
          t: "table", head: ["Yozilishi", "Aytilishi"], speak: [1],
          rows: [
            ["5,000 so'm", "five thousand so'm"],
            ["45,000 so'm", "forty-five thousand so'm"],
            ["120,000 so'm", "a hundred and twenty thousand so'm"],
            ["2,500,000 so'm", "two million five hundred thousand so'm"],
            ["$20", "twenty dollars"],
            ["€9.50", "nine euros fifty"],
          ],
        },
        { t: "tip", tone: "info", md: "**thousand**, **hundred**, **million** — son bilan kelganda ko'plik **-s** olmaydi: *three **thousand** so'm* (✅), *three thousands* ❌. Faqat noaniq ko'plikda: *thousands of people* (minglab odamlar)." },
        { t: "check", ex: { k: "choice", q: "70,000 so'm qanday o'qiladi?", opts: ["seventy thousand so'm", "seven thousand so'm", "seventeen thousand so'm", "seventy thousands so'm"], a: 0, why: "70 = seventy; thousand ko'plik -s olmaydi." } },
      ],
    },
    {
      title: "Chegirma va narxni solishtirish",
      blocks: [
        { t: "p", md: "Bozorda yoki do'konda narx haqida gaplashish uchun foydali iboralar:" },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["It's on sale.", "Chegirmada."],
            ["It's 20% off.", "20 foiz chegirma."],
            ["It's too expensive for me.", "Men uchun juda qimmat."],
            ["Have you got anything cheaper?", "Arzonroq narsangiz bormi?"],
            ["Can you give me a discount?", "Chegirma qilib bera olasizmi?"],
            ["I can't afford it.", "Uni sotib olishga imkonim yo'q."],
            ["It's a bargain!", "Bu juda foydali xarid (arzon)!"],
          ],
        },
        {
          t: "examples", items: [
            { en: "This jacket is cheaper than that one.", uz: "Bu kurtka anavisidan arzonroq.", note: "Qiyosiy daraja (14-bosqichdan)." },
            { en: "It's the cheapest one in the shop.", uz: "Bu do'kondagi eng arzoni." },
            { en: "It's too small, and it isn't cheap enough.", uz: "U juda kichik, arzon ham emas.", note: "**too** + sifat, sifat + **enough**." },
          ],
        },
        { t: "tip", tone: "info", md: "Chegirma so'rash — Samarqand va Buxoro bozorlarida odatiy. Muloyim usul: *Can you give me a discount if I buy two?* (\"Ikkitasini olsam, chegirma qilasizmi?\"). Do'konlarda esa narx odatda qat'iy." },
        { t: "check", ex: { k: "fill", q: "It's ___ expensive. I can't afford it.", a: ["too"], why: "**too** + sifat — \"me'yoridan ortiq\"." } },
      ],
    },
    {
      title: "To'lov: naqd yoki karta",
      blocks: [
        { t: "p", md: "Kassada eng ko'p eshitiladigan savol va javoblar:" },
        {
          t: "dialog", lines: [
            { who: "Cashier", en: "That's 85,000 so'm, please. How would you like to pay?", uz: "85 ming so'm bo'ladi. Qanday to'laysiz?" },
            { who: "Laylo", en: "Can I pay by card?", uz: "Karta bilan to'lasam bo'ladimi?" },
            { who: "Cashier", en: "I'm sorry, the card machine isn't working today. Cash only.", uz: "Kechirasiz, bugun terminal ishlamayapti. Faqat naqd." },
            { who: "Laylo", en: "OK, here's 100,000.", uz: "Mayli, mana 100 ming." },
            { who: "Cashier", en: "Thank you. Here's your change: 15,000 so'm, and your receipt.", uz: "Rahmat. Mana qaytimingiz: 15 ming so'm va chekingiz." },
          ],
        },
        {
          t: "table", head: ["Ibora", "Ma'nosi"], speak: [0],
          rows: [
            ["Can I pay by card / in cash?", "Karta bilan / naqd to'lasam bo'ladimi?"],
            ["Do you take cards?", "Kartani qabul qilasizmi?"],
            ["Keep the change.", "Qaytimi sizga qolsin."],
            ["Could I have a receipt, please?", "Chekni bersangiz."],
          ],
        },
        { t: "tip", tone: "warn", md: "**by card**, **by cash** (yoki **in cash**) — predlog **by**: *pay **by** card*. *pay with card* (artiklsiz) tabiiy emas — *pay **with a** card* yoki *pay **by** card* deng." },
        { t: "check", ex: { k: "choice", q: "Kassirga qanday aytasiz?", opts: ["Can I pay with card?", "Can I pay by card?", "Can I pay on card?", "Can I pay card?"], a: 1, why: "**pay by card**." } },
      ],
    },
    {
      title: "Qaytarish va muloyim shikoyat",
      blocks: [
        { t: "p", md: "Tovar sinib qolgan yoki ishlamasa, qaytarish yoki almashtirishni so'raymiz. Sabab va vaqtni aytamiz (Past Simple), muammoni esa hozirgi zamonda tasvirlaymiz." },
        {
          t: "examples", items: [
            { en: "I bought this phone yesterday, but it doesn't work.", uz: "Bu telefonni kecha sotib oldim, lekin ishlamayapti." },
            { en: "I'd like to return these shoes. They're too small.", uz: "Bu tuflini qaytarmoqchiman. Ular juda kichik." },
            { en: "Could I have a refund, please? I've got the receipt.", uz: "Pulimni qaytarib bera olasizmi? Chekim bor." },
            { en: "Can I exchange it for a bigger size?", uz: "Kattaroq o'lchamga almashtirsam bo'ladimi?" },
          ],
        },
        {
          t: "compare",
          good: { title: "Muloyim", items: ["Excuse me, there's a problem with this phone.", "Could you help me, please?", "I'm sorry, but it doesn't work."] },
          bad: { title: "Qo'pol", items: ["This phone is rubbish! Give me my money!", "Change it now!", "You sold me a bad phone."] },
        },
        { t: "tip", tone: "good", md: "Shikoyatda ham muloyim bo'ling: **Excuse me, …** bilan boshlang, muammoni xotirjam tushuntiring (*it doesn't work, it's broken, there's a hole in it*), keyin nima xohlashingizni aytib so'rang: *Could I have a refund / exchange it?* Shunda yordam olish ehtimoli ancha ko'proq." },
        { t: "check", ex: { k: "fill", q: "I bought this shirt on Monday, but it's too small. Can I ___ it for a bigger one?", a: ["exchange", "change"], why: "**exchange** (**change**) A **for** B — almashtirmoq." } },
      ],
    },
    {
      title: "O'qing: Bozorda",
      blocks: [
        {
          t: "text", title: "At the bazaar",
          en: "On Saturday Kamol and his sister Laylo went to the bazaar in Samarkand. Kamol wanted a new jacket. At the first stall a jacket cost 450,000 so'm. \"That's too expensive,\" Kamol said. \"Can you give me a discount?\" The seller smiled and said, \"For you, 380,000.\" Kamol found another jacket at a second stall for 320,000, and he bought it.\nLaylo bought dried fruit and bread. She asked, \"How much is the bread?\" \"It's 5,000 so'm.\" She paid in cash and the seller gave her the change.\nWhen they got home, Kamol saw that the jacket had a small hole in the pocket. The next day he took it back and the seller exchanged it.",
          uz: "Shanba kuni Kamol va uning singlisi Laylo Samarqanddagi bozorga bordi. Kamol yangi kurtka olmoqchi edi. Birinchi peshtaxtada kurtka 450 ming so'm turardi. \"Bu juda qimmat,\" dedi Kamol. \"Chegirma qila olasizmi?\" Sotuvchi jilmayib aytdi: \"Siz uchun 380 ming.\" Kamol ikkinchi peshtaxtada boshqa kurtkani 320 ming so'mga topdi va sotib oldi.\nLaylo quritilgan mevalar va non oldi. U so'radi: \"Non necha pul?\" \"5 ming so'm.\" U naqd to'ladi va sotuvchi unga qaytim berdi.\nUyga kelganda Kamol kurtkaning cho'ntagida kichik teshik borligini ko'rdi. Ertasi kuni uni qaytarib olib bordi va sotuvchi almashtirib berdi.",
        },
        { t: "check", ex: { k: "tf", q: "Kamol bought the jacket at the first stall.", a: false, why: "U jacketni **ikkinchi** peshtaxtada 320,000 so'mga oldi." } },
        { t: "check", ex: { k: "choice", q: "Why did Kamol take the jacket back?", opts: ["It was too expensive.", "It had a hole in the pocket.", "It was too big.", "He didn't like the colour."], a: 1, why: "*the jacket had a small hole in the pocket.*" } },
      ],
    },
  ],
  words: [
    { en: "price", uz: "narx", ipa: "praɪs", pos: "noun", ex: "The price is very high.", exUz: "Narx juda baland." },
    { en: "discount", uz: "chegirma", ipa: "ˈdɪskaʊnt", pos: "noun", ex: "Is there a discount for students?", exUz: "Talabalar uchun chegirma bormi?" },
    { en: "receipt", uz: "chek", ipa: "rɪˈsiːt", pos: "noun", ex: "Keep the receipt in case you need to return it.", exUz: "Qaytarish kerak bo'lsa, chekni saqlang." },
    { en: "change", uz: "qaytim; maydalangan pul", ipa: "tʃeɪndʒ", pos: "noun", ex: "You forgot your change.", exUz: "Qaytimingizni unutdingiz." },
    { en: "refund", uz: "pulni qaytarish", ipa: "ˈriːfʌnd", pos: "noun", ex: "I'd like a refund, please.", exUz: "Pulimni qaytarib bering, iltimos." },
    { en: "cash", uz: "naqd pul", ipa: "kæʃ", pos: "noun", ex: "Do you pay by card or in cash?", exUz: "Karta bilan to'laysizmi yoki naqdmi?" },
    { en: "bargain", uz: "arzon va foydali xarid", ipa: "ˈbɑːɡɪn", pos: "noun", ex: "These shoes were a real bargain.", exUz: "Bu tuflilar haqiqiy arzon xarid bo'ldi." },
    { en: "cheap", uz: "arzon", ipa: "tʃiːp", pos: "adjective", ex: "Fruit is cheap in summer.", exUz: "Yozda meva arzon." },
    { en: "expensive", uz: "qimmat", ipa: "ɪkˈspensɪv", pos: "adjective", ex: "That watch is too expensive.", exUz: "U soat juda qimmat." },
    { en: "afford", uz: "imkoni bo'lmoq (pul jihatdan)", ipa: "əˈfɔːd", pos: "verb", ex: "I can't afford a new car.", exUz: "Yangi mashina olishga imkonim yo'q." },
  ],
  practice: [
    { k: "match", pairs: [["cheap", "arzon"], ["expensive", "qimmat"], ["discount", "chegirma"], ["receipt", "chek"], ["refund", "pulni qaytarish"]] },
    { k: "listen", say: "How much are these shoes?", opts: ["How much is this shoe?", "How much are these shoes?", "How many are these shoes?"], a: 1 },
    { k: "listen", say: "Can I pay by card?", opts: ["Can I pay by card?", "Can I pay in cash?", "Can I have a receipt?"], a: 0 },
    { k: "choice", q: "___ is this T-shirt? — It's 90,000 so'm.", opts: ["How many", "How much", "How price", "What cost"], a: 1, why: "Narx → **How much**." },
    { k: "choice", q: "How much ___ these apples?", opts: ["is", "are", "does", "do"], a: 1, why: "*apples* — ko'plik → **are**." },
    { k: "fill", q: "How much does this bag ___?", a: ["cost"], why: "**does** dan keyin fe'l V1: *cost*." },
    { k: "fill", q: "Can I pay ___ card?", a: ["by"], why: "**pay by card**." },
    { k: "fill", q: "I bought this phone yesterday, but it ___ work.", a: ["doesn't", "does not"], why: "Hozirgi muammo → Present Simple inkor: **doesn't work**." },
    { k: "fill", q: "It's too expensive. Can you give me a ___?", a: ["discount"], hint: "chegirma", why: "**discount** — chegirma." },
    { k: "tf", q: "**How much costs this?** — to'g'ri savol.", a: false, why: "To'g'risi: *How much **does** this cost?* yoki *How much **is** this?*" },
    { k: "tf", q: "Kassada **Keep the change** desangiz, qaytimni sotuvchi sizga qaytarib berishi kerak.", a: false, why: "**Keep the change** = qaytim sotuvchida qolsin." },
    { k: "order", uz: "Bu ko'ylak qancha turadi?", words: ["How", "much", "is", "this", "dress?"], extra: ["are", "many"], alt: [["How", "much", "does", "this", "dress", "cost?"]] },
    { k: "order", uz: "Pulimni qaytarib bersangiz bo'ladimi?", words: ["Could", "I", "have", "a", "refund", "please?"], extra: ["do", "cost"] },
    { k: "translate", uz: "Bu juda qimmat.", a: ["It's too expensive.", "It is too expensive.", "That's too expensive.", "That is too expensive.", "This is too expensive."] },
    { k: "translate", uz: "Karta bilan to'lasam bo'ladimi?", a: ["Can I pay by card?", "Could I pay by card?", "Can I pay with a card?", "Could I pay with a card?", "Can I pay with my card?", "Could I pay with my card?"] },
    { k: "speak", say: "Excuse me, I'd like to return this. Here is the receipt.", uz: "Kechirasiz, buni qaytarmoqchiman. Mana chek." },
  ],
  quiz: [
    { k: "choice", q: "Qaysi savol **to'g'ri**?", opts: ["How much costs this book?", "How much does this book cost?", "How much it costs?", "How many does this book cost?"], a: 1, why: "**How much does** + ot + **cost** (V1)." },
    { k: "choice", q: "\"45,000 so'm\" qanday o'qiladi?", opts: ["forty-five thousand so'm", "fourty five thousands so'm", "four five thousand so'm", "forty-five thousands so'm"], a: 0, why: "**forty-five thousand** — *forty* (u'siz yoziladi), *thousand* -s olmaydi." },
    { k: "choice", q: "It's 30% off. Bu nima degani?", opts: ["30 foiz chegirma", "30 foiz qimmat", "30 ta qoldi", "30 ming so'm"], a: 0, why: "**off** — chegirma." },
    { k: "choice", q: "The shoes are too small. Can I ___ them for a bigger size?", opts: ["exchange", "explain", "expect", "excuse"], a: 0, why: "**exchange** — almashtirmoq." },
    { k: "fill", q: "I can't ___ a new laptop. It costs too much. (pul jihatidan imkonim yo'q)", a: ["afford"], why: "**can't afford**." },
    { k: "fill", q: "How ___ money have you got with you?", a: ["much"], why: "*money* — sanalmaydi → **much**." },
    { k: "fill", q: "Thank you. Here's your ___ and your receipt.", a: ["change"], hint: "qaytim", why: "**change** — qaytim." },
    { k: "listen", say: "I'd like a refund, please.", opts: ["I'd like a refund, please.", "I'd like a receipt, please.", "I'd like a discount, please."], a: 0 },
    { k: "tf", q: "**It's a bargain** degani narx juda baland.", a: false, why: "**bargain** — arzon va foydali xarid." },
    { k: "order", uz: "Arzonroq narsangiz bormi?", words: ["Have", "you", "got", "anything", "cheaper?"], extra: ["cheapest", "much"], alt: [["Do", "you", "have", "anything", "cheaper?"]] },
  ],
  summary: [
    "Narx so'rash: **How much is / are…?** yoki **How much does / do… cost?** — hech qachon *How much costs?* emas.",
    "Narxlar: *forty-five thousand so'm* — **thousand / hundred / million** son bilan -s olmaydi.",
    "To'lov: **pay by card / in cash**, **Keep the change**, **Could I have a receipt?**",
    "Qaytarish: *I bought this yesterday, but it doesn't work. Could I have a refund / exchange it?*",
    "Shikoyatda muloyim bo'ling: **Excuse me, I'm sorry, but…, Could you…?**",
  ],
  homework: "Bozor yoki do'konga borganingizda 5 ta tovar narxini inglizcha ayting (*A kilo of apples is 15,000 so'm*). Keyin 6–8 gapli dialog yozing: siz sotuvchidan narx so'raysiz, chegirma so'raysiz va naqd to'laysiz. Ikkinchi dialog: telefon ishlamayapti — uni muloyim qaytarmoqchisiz.",
};

export default lesson;
