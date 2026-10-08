import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u10-l8",
  title: "Writing a message or email",
  titleUz: "Xabar va xat yozish",
  goal: "Do'stingizga norasmiy xat (**Hi Anna, Thanks for your email… Write soon! Love, Malika**) va mehmonxona yoki maktabga qisqa rasmiyroq xat (**Dear Mr Smith, I would like to… Kind regards**) yozasiz. Bosh harf, vergul va **and, but, because, so** bilan bog'langan gaplar yozishni o'rganasiz.",
  slides: [
    {
      title: "Xat tuzilishi: 5 qism",
      blocks: [
        { t: "p", md: "Har qanday xat (email) bir xil qismlardan iborat. Norasmiy (do'stga) va rasmiyroq (mehmonxona, o'qituvchi, kompaniyaga) xatlarda faqat **so'zlar** farq qiladi:" },
        {
          t: "table", head: ["Qism", "Do'stga (norasmiy)", "Rasmiyroq"], speak: [1, 2],
          rows: [
            ["1. Murojaat", "Hi Jack, / Hello Jack,", "Dear Mr Brown, / Dear Sir or Madam,"],
            ["2. Kirish", "Thanks for your email. How are you?", "I am writing to ask about…"],
            ["3. Asosiy qism", "I'm in London now and…", "I would like to book a room for…"],
            ["4. Yakun", "Write soon! / See you soon!", "I look forward to hearing from you."],
            ["5. Xayrlashuv + ism", "Love, / Best wishes, / Bye for now,", "Kind regards, / Best regards,"],
          ],
        },
        { t: "tip", tone: "info", md: "Murojaatdan keyin **vergul**, keyin **yangi qator**: *Hi Jack,* ↵. Xayrlashuvdan keyin ham vergul va ism yangi qatorda: *Best wishes,* ↵ *Aziz*." },
        { t: "tip", tone: "warn", md: "**Dear** — \"qadrdon\" degan sevgi so'zi emas! Xatda u shunchaki rasmiy murojaat: *Dear Mr Brown* = \"Hurmatli janob Braun\"." },
        { t: "check", ex: { k: "choice", q: "Mehmonxonaga xat. Qaysi murojaat to'g'ri?", opts: ["Hi guys!", "Dear Sir or Madam,", "Hey hotel,", "Love,"], a: 1, why: "Ismni bilmasangiz, rasmiy: **Dear Sir or Madam,**" } },
      ],
    },
    {
      title: "Do'stga xat: norasmiy iboralar",
      blocks: [
        {
          t: "examples", items: [
            { en: "Thanks for your message!", uz: "Xabaring uchun rahmat!" },
            { en: "Sorry I didn't write back sooner.", uz: "Kechroq javob yozganim uchun uzr." },
            { en: "How are things with you?", uz: "Ishlaring qalay?" },
            { en: "By the way, did you get my photos?", uz: "Aytgancha, rasmlarimni oldingmi?" },
            { en: "Let me know what you think.", uz: "Nima deb o'ylashingni menga ayt (xabar ber)." },
            { en: "I'm looking forward to seeing you!", uz: "Seni ko'rishni intiqlik bilan kutyapman!" },
            { en: "Say hello to your family.", uz: "Oilangga salom ayt." },
            { en: "Write back soon! / Write soon!", uz: "Tezroq javob yoz!" },
          ],
        },
        { t: "tip", tone: "warn", md: "**look forward to** dan keyin fe'l **-ing** bilan keladi: *I'm looking forward to **seeing** you.* ❌ *to see you*. Yoki ot bilan: *I'm looking forward to **the holidays**.*" },
        { t: "tip", tone: "good", md: "Norasmiy xatda qisqa shakllar (*I'm, don't, it's*) tabiiy. Rasmiy xatda to'liq shakl yaxshiroq: *I am, do not, it is*." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["I'm looking forward to see you.", "I'm looking forward to seeing you.", "I'm looking forward seeing you.", "I look forward see you."], a: 1, why: "**look forward to + -ing**." } },
      ],
    },
    {
      title: "Bosh harf va tinish belgilari",
      blocks: [
        { t: "p", md: "Ingliz tilida **bosh harf** o'zbek tilidan ko'ra ko'proq joyda yoziladi. Xatda bu juda ko'zga tashlanadi:" },
        {
          t: "table", head: ["Qoida", "Misol"], speak: [1],
          rows: [
            ["**I** (men) — doim bosh harf", "Yesterday I went to the park."],
            ["Hafta kunlari va oylar", "on Monday, in July"],
            ["Davlat, shahar, millat, til", "Uzbekistan, Tashkent, Uzbek, English"],
            ["Ism va familiya, Mr / Mrs / Ms", "Mr Brown, Ms Clark"],
          ],
        },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["On Friday I'm flying to London.", "My friend speaks English and Turkish.", "Hi Ben,"] },
          bad: { title: "Xato", items: ["on friday i'm flying to london.", "My friend speaks english and turkish.", "Hi Ben"] },
        },
        { t: "tip", tone: "info", md: "O'zbekchada *dushanba, iyul, ingliz tili* kichik harf bilan yoziladi — shuning uchun bu juda ko'p uchraydigan xato. Inglizchada: **Monday, July, English**." },
        { t: "check", ex: { k: "choice", q: "Qaysi so'z inglizchada doim **bosh harf** bilan yoziladi?", opts: ["summer", "morning", "june", "holiday"], a: 2, why: "Oylar bosh harf bilan: **June**. Fasllar (*summer*) va boshqa so'zlar — kichik harf bilan." } },
      ],
    },
    {
      title: "Gaplarni bog'lash: and, but, because, so, also",
      blocks: [
        { t: "p", md: "Yaxshi xat — bu qisqa gaplar ro'yxati emas. Gaplarni bog'lovchilar bilan ulang:" },
        {
          t: "table", head: ["So'z", "Vazifasi", "Misol"], speak: [2],
          rows: [
            ["and", "qo'shish", "The hotel is nice and the food is great."],
            ["but", "qarshi qo'yish", "London is beautiful, but it's very expensive."],
            ["because", "sabab", "I'm tired because the flight was long."],
            ["so", "natija", "It was raining, so we stayed in the hotel."],
            ["also", "yana, ham", "I also visited the British Museum."],
          ],
        },
        { t: "tip", tone: "warn", md: "**because** — sabab (nega?), **so** — natija (shuning uchun). Adashtirmang:\n✅ *I was ill, **so** I stayed at home.*\n✅ *I stayed at home **because** I was ill.*\n❌ *I was ill, because I stayed at home.*" },
        { t: "check", ex: { k: "choice", q: "The museum was closed, ___ we went to a café.", opts: ["because", "so", "but", "also"], a: 1, why: "Natija → **so**." } },
        { t: "check", ex: { k: "fill", q: "I can't come to your party ___ I've got a bad cold.", a: ["because", "as", "since"], uz: "Ziyofatingga bora olmayman, chunki qattiq shamollaganman.", why: "Sabab → **because**." } },
      ],
    },
    {
      title: "Namuna 1: do'stga xat",
      blocks: [
        {
          t: "text", title: "Subject: Greetings from London!",
          en: "Hi Jasur,\nThanks for your message! Sorry I didn't write back sooner, but I was very busy.\nI'm in London now with my English class. The weather is cool and cloudy, and it rains every day, so I always carry an umbrella! Our hotel is small but very comfortable. Yesterday we went sightseeing and saw Big Ben. Tomorrow we're going to visit the British Museum.\nBy the way, I bought you a souvenir. I hope you'll like it.\nI'm looking forward to seeing you next week. Write soon!\nBest wishes,\nDilnoza",
          uz: "Salom, Jasur,\nXabaring uchun rahmat! Kechroq javob yozganim uchun uzr, juda band edim.\nHozir ingliz tili guruhim bilan Londondaman. Ob-havo salqin va bulutli, har kuni yomg'ir yog'adi, shuning uchun doim soyabon olib yuraman! Mehmonxonamiz kichik, lekin juda qulay. Kecha shaharni aylandik va Big Benni ko'rdik. Ertaga Britaniya muzeyiga bormoqchimiz.\nAytgancha, senga esdalik sovg'a oldim. Yoqadi degan umiddaman.\nKelasi hafta seni ko'rishni intiqlik bilan kutyapman. Tezroq javob yoz!\nEng yaxshi tilaklar bilan,\nDilnoza",
        },
        { t: "check", ex: { k: "tf", q: "Dilnoza Britaniya muzeyiga kecha bordi.", a: false, why: "*Yesterday we … saw Big Ben. **Tomorrow** we're going to visit the British Museum.*" } },
        { t: "check", ex: { k: "choice", q: "Why does Dilnoza always carry an umbrella?", opts: ["Because it's sunny.", "Because it rains every day.", "Because the hotel is small.", "Because Jasur asked her."], a: 1, why: "*…it rains every day, **so** I always carry an umbrella!*" } },
      ],
    },
    {
      title: "Namuna 2: mehmonxonaga rasmiyroq xat",
      blocks: [
        {
          t: "text", title: "Subject: Room booking",
          en: "Dear Sir or Madam,\nI would like to book a double room for three nights, from 12th to 15th May. Could you tell me the price, please? Is breakfast included?\nI am also travelling with a small child. Could we have a baby bed in the room?\nWe are arriving by train at about 10 p.m. Is that a problem?\nI look forward to hearing from you.\nKind regards,\nAkmal Rahimov",
          uz: "Hurmatli janob yoki xonim,\n12-dan 15-maygacha uch kechaga ikki kishilik xona band qilmoqchiman. Narxini ayta olasizmi, iltimos? Nonushta narxga kiradimi?\nMen kichkina bola bilan ham sayohat qilyapman. Xonaga bolalar karavotini qo'yib bera olasizmi?\nBiz poyezdda taxminan kechki 10 da yetib kelamiz. Bu muammo emasmi?\nJavobingizni kutaman.\nHurmat bilan,\nAkmal Rahimov",
        },
        {
          t: "compare",
          good: { title: "Rasmiyroq", items: ["I would like to book a room.", "Could you tell me the price?", "I look forward to hearing from you.", "Kind regards,"] },
          bad: { title: "Mehmonxonaga juda norasmiy", items: ["I wanna book a room.", "How much?? Tell me!", "Write soon!", "Love,"] },
        },
        { t: "tip", tone: "info", md: "**Subject** — xat mavzusi (qatori). Qisqa va aniq bo'lsin: *Room booking, Question about my flight, Sorry, I'm ill today*." },
        { t: "check", ex: { k: "choice", q: "Akmalning xatida qaysi so'rov **yo'q**?", opts: ["the price", "breakfast", "a baby bed", "a taxi from the station"], a: 3, why: "Akmal narx, nonushta va bolalar karavoti haqida so'radi, taksi haqida emas." } },
      ],
    },
  ],
  words: [
    { en: "reply", uz: "javob; javob bermoq", ipa: "rɪˈplaɪ", pos: "noun, verb", ex: "Thanks for your quick reply.", exUz: "Tezkor javobingiz uchun rahmat." },
    { en: "subject", uz: "mavzu (xat qatori)", ipa: "ˈsʌb.dʒɪkt", pos: "noun", ex: "Write a short subject for your email.", exUz: "Xatingizga qisqa mavzu yozing." },
    { en: "attach", uz: "(faylni) biriktirmoq", ipa: "əˈtætʃ", pos: "verb", ex: "I've attached some photos from my trip.", exUz: "Sayohatimdan bir nechta rasm biriktirdim." },
    { en: "Dear…", uz: "Hurmatli… (xatda murojaat)", ipa: "dɪə", pos: "phrase", ex: "Dear Mr Brown,", exUz: "Hurmatli janob Braun," },
    { en: "Best wishes", uz: "Eng yaxshi tilaklar bilan (xat oxirida)", ipa: "ˌbest ˈwɪʃ.ɪz", pos: "phrase", ex: "Best wishes, Dilnoza", exUz: "Eng yaxshi tilaklar bilan, Dilnoza" },
    { en: "Kind regards", uz: "Hurmat bilan (xat oxirida)", ipa: "ˌkaɪnd rɪˈɡɑːdz", pos: "phrase", ex: "Kind regards, Akmal Rahimov", exUz: "Hurmat bilan, Akmal Rahimov" },
    { en: "look forward to", uz: "intiqlik bilan kutmoq", ipa: "lʊk ˈfɔː.wəd tə", pos: "phrase", ex: "I'm looking forward to the holidays.", exUz: "Ta'tilni intiqlik bilan kutyapman." },
    { en: "let me know", uz: "menga xabar bering", ipa: "ˌlet mi ˈnəʊ", pos: "phrase", ex: "Let me know when you arrive.", exUz: "Yetib kelganingizda menga xabar bering." },
    { en: "greetings", uz: "salom, ko'rishgan joydan salom (xatda)", ipa: "ˈɡriː.tɪŋz", pos: "noun (plural)", ex: "Greetings from Samarkand!", exUz: "Samarqanddan salom!" },
    { en: "write back", uz: "javob yozmoq", ipa: "ˌraɪt ˈbæk", pos: "phrasal verb", ex: "Please write back soon.", exUz: "Iltimos, tezroq javob yozing." },
  ],
  practice: [
    { k: "match", pairs: [["Hi Jack,", "do'stga murojaat"], ["Dear Sir or Madam,", "ismini bilmagan odamga murojaat"], ["Love,", "yaqin odamga xayrlashuv"], ["Kind regards,", "rasmiy xayrlashuv"]] },
    { k: "match", pairs: [["reply", "javob"], ["attach", "biriktirmoq"], ["subject", "xat mavzusi"], ["by the way", "aytgancha"], ["let me know", "menga xabar bering"]] },
    { k: "listen", say: "I'm looking forward to seeing you.", opts: ["I'm looking forward to seeing you.", "I'm looking for you.", "I'm looking forward to see you."], a: 0 },
    { k: "listen", say: "I've attached two photos.", opts: ["I've attached two photos.", "I've attached ten photos.", "I've taken two photos."], a: 0, why: "**attached** — biriktirdim." },
    { k: "choice", q: "Do'stga xatni qanday tugatasiz?", opts: ["Kind regards, Mr Aliyev", "Write soon! Love, Malika", "Dear Sir or Madam", "I am writing to complain."], a: 1, why: "Do'stga norasmiy: **Write soon! Love, …**" },
    { k: "choice", q: "It was very hot, ___ we went swimming.", opts: ["because", "so", "but", "or"], a: 1, why: "Natija → **so**." },
    { k: "choice", q: "Qaysi gap to'g'ri yozilgan?", opts: ["My brother speaks english.", "We arrive on Saturday.", "i love tashkent.", "See you in august!"], a: 1, why: "**Saturday** — bosh harf bilan. *English, I, Tashkent, August* ham bosh harf bilan yoziladi." },
    { k: "fill", q: "I'm looking forward ___ hearing from you.", a: ["to"], uz: "Javobingizni intiqlik bilan kutaman.", why: "**look forward to + -ing**." },
    { k: "fill", q: "I would ___ to book a single room, please.", a: ["like"], uz: "Bir kishilik xona band qilmoqchiman.", why: "Rasmiy so'rov: **I would like to…**" },
    { k: "fill", q: "I didn't go to school yesterday ___ I was ill.", a: ["because"], uz: "Kecha maktabga bormadim, chunki kasal edim.", why: "Sabab → **because**." },
    { k: "tf", q: "Xatda **Dear Mr Brown** — \"Qadrdon sevgilim Braun\" degani.", a: false, why: "**Dear** — xatda oddiy rasmiy murojaat: \"Hurmatli\"." },
    { k: "tf", q: "Dilnoza Jasurga esdalik sovg'a oldi.", a: true, why: "*By the way, I bought you a souvenir.*" },
    { k: "order", uz: "Xabaring uchun rahmat!", words: ["Thanks", "for", "your", "message!"], extra: ["to", "you"], alt: [["Thanks", "for", "your", "message"]] },
    { k: "order", uz: "Narxini ayta olasizmi, iltimos?", words: ["Could", "you", "tell", "me", "the", "price,", "please?"], extra: ["say", "to"] },
    { k: "translate", uz: "Aytgancha, rasmlarimni oldingmi?", a: ["By the way, did you get my photos", "By the way, did you get my pictures", "By the way, did you receive my photos", "By the way, did you receive my pictures", "By the way did you get my photos", "By the way did you get my pictures", "Did you get my photos, by the way", "Did you get my pictures, by the way"] },
    { k: "speak", say: "Thanks for your email. I'm looking forward to seeing you.", uz: "Xating uchun rahmat. Seni ko'rishni intiqlik bilan kutyapman." },
  ],
  quiz: [
    { k: "listen", say: "Let me know when you arrive.", opts: ["Let me know when you arrive.", "Let me go when you arrive.", "Let me know where you are."], a: 0 },
    { k: "choice", q: "Rasmiy xat oxiri:", opts: ["Love,", "See ya!", "Kind regards,", "Bye for now,"], a: 2, why: "Rasmiy → **Kind regards, / Best regards,**" },
    { k: "choice", q: "To'g'ri gapni tanlang:", opts: ["I look forward to hear from you.", "I look forward to hearing from you.", "I look forward hearing from you.", "I looking forward to hear from you."], a: 1, why: "**look forward to + -ing**." },
    { k: "choice", q: "London is beautiful, ___ it's very expensive.", opts: ["so", "because", "but", "and so"], a: 2, why: "Qarshi qo'yish → **but**." },
    { k: "choice", q: "Qaysi gapda bosh harf **xatosi** bor?", opts: ["We met on Monday.", "She is from Turkey.", "I study english every day.", "My birthday is in May."], a: 2, why: "Tillar bosh harf bilan: **English**." },
    { k: "fill", q: "Please ___ me know your arrival time.", a: ["let"], uz: "Iltimos, kelish vaqtingizni menga xabar bering.", why: "**let me know** — menga xabar bering." },
    { k: "fill", q: "I've ___ my ticket to this email.", a: ["attached"], uz: "Chiptamni shu xatga biriktirdim.", why: "**attach** — biriktirmoq: *I've attached…*" },
    { k: "tf", q: "Akmal mehmonxonaga poyezdda, kechki 10 atrofida yetib keladi.", a: true, why: "*We are arriving by train at about 10 p.m.*" },
    { k: "translate", uz: "Tezroq javob yoz!", a: ["Write soon", "Write back soon", "Please write soon", "Please write back soon", "Reply soon", "Please reply soon"] },
    { k: "order", uz: "Men ikki kishilik xona band qilmoqchiman.", words: ["I", "would", "like", "to", "book", "a", "double", "room."], extra: ["booking", "single"] },
  ],
  summary: [
    "Xat: **murojaat → kirish → asosiy qism → yakun → xayrlashuv + ism**.",
    "Do'stga: **Hi …, / Thanks for your message! / Write soon! / Love, Best wishes,**",
    "Rasmiyroq: **Dear Sir or Madam, / I would like to… / Could you…? / I look forward to hearing from you. / Kind regards,**",
    "**look forward to + -ing**; bosh harf: **I, Monday, July, English, Tashkent**.",
    "Bog'lovchilar: **and, but, because** (sabab), **so** (natija), **also**.",
  ],
  homework: "Ikkita xat yozing. 1) Do'stingizga sayohatdan (60–80 so'z): ob-havo, mehmonxona, nima qildingiz, nima qilmoqchisiz; kamida bitta **because**, bitta **so** va **by the way** bo'lsin. 2) Mehmonxonaga rasmiyroq xat (40–60 so'z): xona band qilish, 2 ta savol (**Could you…? Is … included?**). Bosh harflarni tekshiring!",
};

export default lesson;
