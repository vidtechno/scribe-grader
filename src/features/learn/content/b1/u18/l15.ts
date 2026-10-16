import type { Lesson } from '../../../types';

// Mini lesson (skill): reading and writing, an informal email to an old friend. Uses Present Perfect, for / since, Past Simple, used to (l1-l7).
const lesson: Lesson = {
  id: 'u18-l15',
  title: 'Reading and writing: an email to an old friend',
  titleUz: "O'qish va yozish: eski do'stga xat",
  mini: true,
  kind: 'skill',
  goal: "Eski do'stdan kelgan **norasmiy emailni o'qib tushunasiz** va o'zingiz **yangiliklar, savol va reja** bilan 7-8 gapdan iborat email yozasiz (*Sorry I haven't written for so long…*).",
  slides: [
    {
      title: "O'qing: Emma yozgan email",
      blocks: [
        { t: 'p', md: "Emma ilgari Bristolda yashagan, hozir Manchesterda. U eski do'sti Sarga email yozdi. Avval **umumiy ma'noni** tushuning, keyin tafsilotlarga o'ting." },
        { t: 'text', title: "Email from Emma", voice: 'emma', en: "Hi Sara,\nSorry I haven't written for so long! I hope you and your family are well. A lot has happened since we last met. I moved to Manchester in March, and I've been working at a small bookshop for four months. I love it, although I'm still not used to the rainy weather! I used to live near the sea, so I miss the beach. By the way, I've started running, and I've already done two ten-kilometre races. Anyway, how are you? Have you found a new job yet? I'd love to hear all your news. Why don't you come and visit me in the summer? I'm looking forward to hearing from you.\nBest wishes,\nEmma", uz: "Salom, Sara,\nUzoq vaqt yozmaganim uchun kechir! Umid qilamanki, sen va oilang yaxshi bo'lsangiz. Oxirgi marta ko'rishganimizdan beri ko'p narsa bo'ldi. Men mart oyida Manchesterga ko'chib keldim va to'rt oydan beri kichik kitob do'konida ishlayapman. Menga yoqadi, garchi yomg'irli ob-havoga hali ko'nikmagan bo'lsam ham! Ilgari dengiz yonida yashardim, shuning uchun sohilni sog'inaman. Aytgancha, yugurishni boshladim va allaqachon ikkita o'n kilometrlik musobaqada qatnashdim. Xullas, sen qalaysan? Yangi ish topdingmi? Barcha yangiliklaringni eshitishni istardim. Nega yozda mening oldimga kelmaysan? Sendan xabar kutaman.\nEng yaxshi tilaklar bilan,\nEmma" },
        { t: 'check', ex: { k: 'choice', q: "How long has Emma worked at the bookshop?", opts: ["For four months", "For four years", "Since March last year", "For two weeks"], a: 0, why: "*I've been working at a small bookshop for four months.*" } },
        { t: 'check', ex: { k: 'tf', q: "Emma is used to the weather in Manchester.", a: false, why: "*I'm still not used to the rainy weather.*" } },
      ],
    },
    {
      title: "Emailning tuzilishi",
      blocks: [
        { t: 'p', md: "Norasmiy email (do'stga) 5 qismdan iborat:" },
        { t: 'table', head: ['Qism', 'Ibora'], speak: [1], rows: [
          ['1. Salomlashish', "Hi Sara, or Dear Sara,"],
          ['2. Sabab va hol', "Sorry I haven't written for so long! I hope you're well."],
          ['3. Yangiliklar', "I moved to Manchester in March. I've been working at a bookshop for four months."],
          ['4. Savol va taklif', "How are you? Why don't you come and visit me?"],
          ['5. Yakun', "I'm looking forward to hearing from you. Best wishes, Emma"],
        ] },
        { t: 'tip', tone: 'info', md: "Bog'lovchi iboralar emailni tabiiy qiladi: **By the way** (aytgancha), **Anyway** (xullas, mavzuni o'zgartirish), **Also** (shuningdek), **Although** (garchi). Tugatish: **Write back soon! Take care! Best wishes** (do'stona va xushmuomala)." },
        { t: 'tip', tone: 'warn', md: "**look forward to** dan keyin **-ing** keladi, chunki bu yerda **to** — predlog: *I'm looking forward to **hearing** from you.* ~~I'm looking forward to hear~~ deb bo'lmaydi.." },
        { t: 'check', ex: { k: 'fill', q: "I'm looking forward to ___ you soon. (see)", a: ['seeing'], uz: "Sizni tez orada ko'rishni intiqlik bilan kutyapman.", why: "**look forward to + -ing**." } },
        { t: 'check', ex: { k: 'choice', q: "Mavzuni o'zgartirish uchun qaysi ibora mos?", opts: ["Anyway, how are you?", "Although, how are you?", "Best wishes, how are you?", "Dear, how are you?"], a: 0, why: "**Anyway** — mavzuni o'zgartiradi." } },
      ],
    },
    {
      title: "Endi siz yozing",
      blocks: [
        { t: 'p', md: "Emmaga yoki o'zingiz yaxshi ko'rgan eski do'stingizga javob yozing. Reja:" },
        { t: 'examples', items: [
          { en: "Hi Emma, thanks for your email!", uz: "Salom, Emma, emailing uchun rahmat!", note: "1. Salomlashish va rahmat." },
          { en: "I've been very busy since I started my new course.", uz: "Yangi kursni boshlaganimdan beri juda bandman.", note: "2. Yangilik (**since** + Present Perfect)." },
          { en: "I used to live in a flat, but now I have a house with a garden.", uz: "Ilgari kvartirada yashardim, hozir bog'li uyim bor.", note: "3. Ilgari va hozir (**used to**)." },
          { en: "Have you ever thought about visiting Tashkent?", uz: "Toshkentga kelishni hech o'ylab ko'rganmisan?", note: "4. Savol (**Have you ever…?**)." },
          { en: "Write back soon! Take care, Sara", uz: "Tezroq javob yoz! O'zingni asra, Sara", note: "5. Yakun." },
        ] },
        { t: 'tip', tone: 'good', md: "Yozgandan keyin tekshiring: 1) zamonlar (**for / since**, **ago**), 2) **used to**, 3) imlo, 4) bosh harf va tinish belgilari. Email 7–8 gapdan iborat bo'lsin." },
        { t: 'check', ex: { k: 'order', uz: "Tezroq javob yozing!", words: ['Write', 'back', 'soon!'], extra: ['to', 'me'] } },
      ],
    },
  ],
  words: [
    { en: 'grow apart', uz: 'uzoqlashib qolmoq', ipa: 'ɡrəʊ əˈpɑːt', pos: 'phrasal verb', ex: 'We grew apart after I moved to another city.', exUz: 'Men boshqa shaharga ko\'chganimdan keyin biz bir-birimizdan uzoqlashib qoldik.' },
    { en: 'all the best', uz: 'hammasi yaxshi bo\'lsin (xat oxirida)', ipa: 'ɔːl ðə best', pos: 'phrase', ex: 'All the best with your new job!', exUz: 'Yangi ishingizda omad tilayman!' },
    { en: 'give my love to', uz: 'salom aytmoq (yaqin odamga)', ipa: 'ɡɪv maɪ lʌv tuː', pos: 'phrase', ex: 'Give my love to your family.', exUz: 'Oilangizga mening salomimni ayting.' },
    { en: 'last time', uz: 'oxirgi marta', ipa: 'lɑːst taɪm', pos: 'phrase', ex: 'The last time I saw you was at Sara\'s wedding.', exUz: 'Sizni oxirgi marta Saraning to\'yida ko\'rgandim.' },
    { en: 'reunion', uz: 'uchrashuv (eski do\'stlar yig\'ini)', ipa: 'riːˈjuː.ni.ən', pos: 'noun', ex: 'We are planning a school reunion for next summer.', exUz: 'Biz kelasi yozga maktab do\'stlari uchrashuvini rejalashtiryapmiz.' },
  ],
  practice: [
    { k: 'match', pairs: [['by the way', 'aytgancha'], ['anyway', 'xullas'], ['look forward to', 'intiqlik bilan kutmoq'], ['miss', "sog'inmoq"], ['happen', "sodir bo'lmoq"]] },
    { k: 'choice', q: "Emailni qaysi so'z bilan boshlash mumkin (do'stga)?", opts: ["Hi Sara,", "To whom it may concern,", "Dear Sir or Madam,", "Yours faithfully,"], a: 0, why: "Do'stga norasmiy: **Hi Sara,**" },
    { k: 'choice', q: "Emailni do'stona yakunlash:", opts: ["Best wishes, Emma", "Yours faithfully, Emma", "Respectfully, Emma", "Goodbye Mr Emma"], a: 0, why: "Do'stga: **Best wishes / Take care**." },
    { k: 'fill', q: "Sorry I ___ written for so long!", a: ["haven't", 'have not'], uz: "Uzoq vaqt yozmaganim uchun kechir!", why: "Hozirgacha yozmadim → **haven't written**." },
    { k: 'fill', q: "I'm looking forward ___ meeting you.", a: ['to'], uz: "Siz bilan uchrashishni intiqlik bilan kutyapman.", why: "**look forward to + -ing**." },
    { k: 'choice', q: "I'm looking forward to ___ from you.", opts: ['hearing', 'hear', 'heard', 'to hear'], a: 0, why: "**to** — predlog, keyin **-ing**." },
    { k: 'fix', wrong: "I'm looking forward to see you.", a: ["I'm looking forward to seeing you.", "I am looking forward to seeing you."], why: "**look forward to** dan keyin **-ing**." },
    { k: 'fix', wrong: "I work in this bookshop since March.", a: ["I have worked in this bookshop since March.", "I've worked in this bookshop since March.", "I have been working in this bookshop since March.", "I've been working in this bookshop since March.", "I have worked at this bookshop since March.", "I've worked at this bookshop since March.", "I have been working at this bookshop since March.", "I've been working at this bookshop since March."], why: "**since** bilan Present Perfect." },
    { k: 'order', uz: "Uzoq vaqt yozmaganim uchun kechiring.", words: ['Sorry', 'I', "haven't", 'written', 'for', 'so', 'long.'], extra: ['ago', 'since'], alt: [['Sorry', 'I', 'have', 'not', 'written', 'for', 'so', 'long.']] },
    { k: 'translate', uz: "Aytgancha, men yangi ishga kirdim.", a: ["By the way, I've got a new job.", "By the way, I have got a new job.", "By the way, I've started a new job.", "By the way, I have started a new job.", "By the way, I got a new job."], why: "**By the way** — qo'shimcha yangilik." },
    { k: 'dictation', say: "I hope you and your family are well.", a: ["I hope you and your family are well."] },
    { k: 'speak', say: "A lot has happened since we last met.", uz: "Oxirgi marta ko'rishganimizdan beri ko'p narsa bo'ldi." },
    { k: 'speak', say: "I'm looking forward to hearing from you.", uz: "Sendan xabar kutaman." },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi ibora emailning oxiriga mos?", opts: ["Write back soon!", "Dear Emma,", "Sorry I haven't written.", "Hi there,"], a: 0, why: "Yakun: **Write back soon!**" },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["I've lived in Manchester for four months.", "I live in Manchester for four months.", "I lived in Manchester since four months.", "I am living in Manchester since March."], a: 0, why: "**for four months** + Present Perfect." },
    { k: 'fill', q: "I used to live near the sea, so I ___ the beach.", a: ['miss'], why: "**miss** — sog'inmoq." },
    { k: 'fill', q: "___ the way, have you seen Tom lately?", a: ['By', 'by'], why: "**By the way** — aytgancha." },
    { k: 'tf', q: "Norasmiy emailda *Dear Sir or Madam* deb boshlash tabiiy.", a: false, why: "Do'stga *Hi Sara,* deyiladi." },
    { k: 'order', uz: "Sizning yangiliklaringizni eshitishni istardim.", words: ["I'd", 'love', 'to', 'hear', 'your', 'news.'], extra: ['hearing', 'for'], alt: [['I', 'would', 'love', 'to', 'hear', 'your', 'news.']] },
    { k: 'translate', uz: "Men yozda sizni ko'rishni intiqlik bilan kutyapman.", a: ["I'm looking forward to seeing you in the summer.", "I am looking forward to seeing you in the summer.", "I'm looking forward to seeing you in summer.", "I am looking forward to seeing you in summer."], why: "**look forward to seeing**." },
  ],
  summary: [
    "Norasmiy email: **salom, sabab/hol, yangiliklar, savol/taklif, yakun** (*Hi Sara… Best wishes, Emma*).",
    "Foydali iboralar: **Sorry I haven't written for so long. By the way… Anyway… Write back soon!**",
    "**look forward to + -ing**: *I'm looking forward to hearing from you.* Yangiliklarda **for / since**, **used to** ishlating.",
    "Yangi so'zlar: **grow apart, all the best, give my love to, last time, reunion**.",
  ],
  homework: "Eski do'stingizga 7–8 gapdan iborat email yozing: salom, kechirim, ikkita yangilik (**for / since**), bitta **used to** gap, bitta savol va yakun. Keyin zamonlarni tekshiring.",
};

export default lesson;
