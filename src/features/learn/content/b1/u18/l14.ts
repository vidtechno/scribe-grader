import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking, an interview about a life. Uses l1-l6 grammar (Present Perfect, for / since, Present Perfect Continuous, used to, get used to).
const lesson: Lesson = {
  id: 'u18-l14',
  title: 'Listening and speaking: an interview about a life',
  titleUz: "Tinglash va gapirish: hayot haqida intervyu",
  mini: true,
  kind: 'skill',
  goal: "Hayot haqidagi intervyuni **tinglab asosiy ma'lumotni topasiz** (kim, qachon, qancha vaqt), o'z hayotingiz haqida **3 qadamli** javob berasiz va **Could you say that again?** deb so'raysiz.",
  slides: [
    {
      title: "Tinglang: radio intervyu",
      blocks: [
        { t: 'p', md: "Radio boshlovchisi Helen oshpaz Karim bilan suhbatlashyapti. Avval dialogni **ikki marta** tinglang (▶). Birinchi marta faqat umumiy ma'noni oling: **Karim kim? Qayerdan kelgan? Nimadan faxrlanadi?**" },
        { t: 'dialog', lines: [
          { who: 'Helen', en: "Welcome, Karim. You've had an interesting life, haven't you?", uz: "Xush kelibsiz, Karim. Sizning hayotingiz qiziqarli bo'lgan, shunday emasmi?" },
          { who: 'Karim', en: "I think so. I grew up in a village, and I used to help my grandmother in the kitchen every day.", uz: "Shunday deb o'ylayman. Men qishloqda katta bo'lganman va har kuni buvimga oshxonada yordam berardim." },
          { who: 'Helen', en: "When did you move to England?", uz: "Angliyaga qachon ko'chib keldingiz?" },
          { who: 'Karim', en: "Eight years ago. At first, I wasn't used to the weather or the food, but I got used to them quickly.", uz: "Sakkiz yil oldin. Avvaliga ob-havo va ovqatga ko'nikmagan edim, lekin tez ko'nikdim." },
          { who: 'Helen', en: "And how long have you had your own restaurant?", uz: "Va o'z restoraningiz qancha vaqtdan beri bor?" },
          { who: 'Karim', en: "For three years. I've been working very hard, and I've hired six people so far.", uz: "Uch yildan beri. Juda qattiq ishlayapman va hozircha olti kishini ishga oldim." },
          { who: 'Helen', en: "What are you most proud of?", uz: "Nimadan ko'proq faxrlanasiz?" },
          { who: 'Karim', en: "Our customers. Many of them have come back again and again.", uz: "Mijozlarimizdan. Ularning ko'pi qayta-qayta kelishgan." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "How long has Karim had his own restaurant?", opts: ["For three years", "For eight years", "Since he was a child", "For six months"], a: 0, why: "*For three years.*" } },
        { t: 'check', ex: { k: 'choice', q: "What is Karim most proud of?", opts: ["His customers", "His grandmother", "His village", "The weather"], a: 0, why: "*Our customers.*" } },
        { t: 'check', ex: { k: 'listen', say: "At first, I wasn't used to the weather.", opts: ["At first, I wasn't used to the weather.", "At first, I didn't like the weather.", "At first, I used to the weather.", "At first, I was used to the weather."], a: 0 } },
      ],
    },
    {
      title: "Qanday tinglash kerak?",
      blocks: [
        { t: 'p', md: "Intervyuni tinglaganda **raqamlar, vaqt so'zlari va zamonlar** eng muhim. Ular sizga javobni topishga yordam beradi." },
        { t: 'table', head: ['Eshitganingiz', "Bilib olasiz"], speak: [0], rows: [
          ['Eight years ago, I moved here.', "Ko'chib kelgan payt o'tmishda (Past Simple)."],
          ["I've lived here for eight years.", "Hozir ham shu yerda (Present Perfect)."],
          ['I used to play football.', "Ilgari qilgan, hozir qilmaydi."],
          ["I've been working there since 2021.", "Hali ham ishlayapti."],
        ] },
        { t: 'tip', tone: 'info', md: "Tez gapiruvchi inglizlar **have** ni deyarli aytmaydi: *I've* so'zi qisqa, *for* esa *fə* kabi eshitiladi. Shuning uchun kalit so'zlarni kuting: **raqam + years / ago / since**. Tushunmasangiz: **Sorry, could you say that again, please?**" },
        { t: 'check', ex: { k: 'fill', q: "Sorry, could you say that ___, please?", a: ['again'], uz: "Kechirasiz, buni yana bir marta ayta olasizmi?", why: "**say that again** — qaytarishni so'rash." } },
        { t: 'check', ex: { k: 'dictation', say: "I've been working here for three years.", a: ["I've been working here for three years.", "I have been working here for three years."] } },
      ],
    },
    {
      title: "Endi siz gapiring",
      blocks: [
        { t: 'p', md: "Intervyuda javob **3 qadamda** quriladi: **1) javob, 2) tafsilot, 3) misol yoki natija.** Namuna:" },
        { t: 'table', head: ['Intervyu savoli', 'Sizning javobingiz (namuna)'], speak: [0, 1], rows: [
          ['Where did you grow up?', "I grew up in a small town. I used to play outside with my friends every day."],
          ['How long have you lived here?', "I've lived here for four years. I moved here after university."],
          ['What are you proud of?', "I'm proud of my family. We've always helped each other."],
        ] },
        { t: 'tip', tone: 'good', md: "Gapirish rejasi: javobni **bir gapda** ayting, keyin **sababni yoki tafsilotni** qo'shing. Sekin va aniq gapiring: *For three years. I've been working very hard.*" },
        { t: 'check', ex: { k: 'order', uz: "Men ikki yildan beri bu yerda yashayman.", words: ["I've", 'lived', 'here', 'for', 'two', 'years.'], extra: ['ago', 'since'], alt: [['I', 'have', 'lived', 'here', 'for', 'two', 'years.']] } },
      ],
    },
  ],
  words: [
    { en: 'obstacle', uz: 'to\'siq', ipa: 'ˈɒb.stə.kl̩', pos: 'noun', ex: 'She overcame many obstacles to become a doctor.', exUz: 'U shifokor bo\'lish yo\'lida ko\'p to\'siqlarni yengib o\'tdi.' },
    { en: 'achievement', uz: 'yutuq', ipa: 'əˈtʃiːv.mənt', pos: 'noun', ex: "Finishing the marathon was a big achievement.", exUz: "Marafonni tugatish katta yutuq edi." },
    { en: 'defeat', uz: 'mag\'lubiyat', ipa: 'dɪˈfiːt', pos: 'noun', ex: 'The team learned a lot from its first defeat.', exUz: 'Jamoa birinchi mag\'lubiyatidan ko\'p narsa o\'rgandi.' },
    { en: 'hire', uz: 'ishga olmoq', ipa: 'ˈhaɪ.ə', pos: 'verb', ex: "The company has hired three new engineers.", exUz: "Kompaniya uchta yangi muhandisni ishga oldi." },
    { en: 'again and again', uz: 'qayta-qayta', ipa: 'əˈɡen ənd əˈɡen', pos: 'phrase', ex: "I've told him again and again.", exUz: "Men unga qayta-qayta aytganman." },
  ],
  practice: [
    { k: 'listen', say: 'What are you most proud of?', opts: ['What are you most proud of?', 'What are you most afraid of?', 'Where are you most proud?', 'What were you proud of?'], a: 0 },
    { k: 'listen', say: "I've hired six people so far.", opts: ["I've hired six people so far.", "I hired six people last year.", "I'll hire six people soon.", "I've hired sixteen people so far."], a: 0 },
    { k: 'listen', say: 'I moved here eight years ago.', opts: ['I moved here eight years ago.', "I've lived here for eight years.", 'I move here every eight years.', 'I moved here eighteen years ago.'], a: 0 },
    { k: 'choice', q: "Karim: 'Eight years ago.' Qaysi savolga javob?", opts: ["When did you move to England?", "How long have you lived in England?", "Do you like England?", "Where are you from?"], a: 0, why: "**ago** — payt haqida (Past Simple) javob." },
    { k: 'choice', q: "Qaysi gap hozir ham davom etayotgan ishni bildiradi?", opts: ["I've been working here since 2021.", "I worked here in 2021.", "I used to work here.", "I started here two years ago."], a: 0, why: "**have been working since** — hozir ham ishlaydi." },
    { k: 'fill', q: "I'm very ___ of my daughter. She won the competition.", a: ['proud'], uz: "Men qizimdan juda faxrlanaman.", why: "**proud of** — faxrlanmoq." },
    { k: 'fill', q: "At first I wasn't used to the cold, but I ___ used to it.", a: ['got'], uz: "Avvaliga sovuqqa ko'nikmagan edim, lekin ko'nikdim.", why: "**get used to** → o'tgan zamon *got used to*." },
    { k: 'dictation', say: 'Could you say that again, please?', a: ['Could you say that again, please?', 'Could you say that again please?'] },
    { k: 'dictation', say: 'Winning the prize was a big achievement.', a: ['Winning the prize was a big achievement.'], uz: "Mukofotni yutish katta yutuq edi." },
    { k: 'order', uz: "Siz nimadan faxrlanasiz?", words: ['What', 'are', 'you', 'proud', 'of?'], extra: ['do', 'for'] },
    { k: 'translate', uz: "Men bu yerda uch yildan beri ishlayapman.", a: ["I've been working here for three years.", "I have been working here for three years.", "I've worked here for three years.", "I have worked here for three years."], why: "**for three years** + Present Perfect." },
    { k: 'speak', say: 'I grew up in a small town, and I used to play outside every day.', uz: "Men kichik shaharchada katta bo'lganman va har kuni tashqarida o'ynardim." },
    { k: 'speak', say: "I've lived here for four years. I moved here after university.", uz: "Men bu yerda to'rt yildan beri yashayman. Universitetdan keyin ko'chib kelganman." },
    { k: 'speak', say: "I'm proud of my family. We've always helped each other.", uz: "Men oilamdan faxrlanaman. Biz doim bir-birimizga yordam berganmiz." },
  ],
  quiz: [
    { k: 'choice', q: "Eshitdingiz: 'I've been teaching for ten years.' Bu odam hozir:", opts: ["Hali ham o'qitadi", "Endi o'qitmaydi", "O'n yil oldin boshlagan va tashlagan", "Hech qachon o'qitmagan"], a: 0, why: "**have been teaching for** — hozirgacha davom etadi." },
    { k: 'choice', q: "Eshitmadingiz. Nima deysiz?", opts: ["Sorry, could you say that again, please?", "What? Say again!", "I don't understand you.", "Repeat, please you."], a: 0, why: "Muloyim iltimos: **Could you say that again, please?**" },
    { k: 'fill', q: "Learning English has been a big ___ for me, but I enjoy it.", a: ['challenge'], why: "**challenge** — sinov, qiyinchilik." },
    { k: 'fill', q: "Many customers have come back ___ and again.", a: ['again'], why: "**again and again** — qayta-qayta." },
    { k: 'listen', say: "I'm originally from a village, but I've lived in the city for five years.", opts: ["I'm originally from a village, but I've lived in the city for five years.", "I'm from the city, but I've lived in a village for five years.", "I'm originally from a village, and I live there now.", "I've lived in the city for fifteen years."], a: 0 },
    { k: 'tf', q: "**Eight years ago** — savol: *How long have you lived here?* ga mos javob.", a: false, why: "**ago** — *When did you…?* savoliga javob." },
    { k: 'order', uz: "Biz hozircha olti kishini ishga oldik.", words: ["We've", 'hired', 'six', 'people', 'so', 'far.'], extra: ['ago', 'yet'] },
    { k: 'translate', uz: "Men qizimdan faxrlanaman.", a: ["I'm proud of my daughter.", "I am proud of my daughter."], why: "**proud of**." },
  ],
  summary: [
    "Intervyuda **raqam + years / ago / since** va zamonlarga e'tibor bering: **ago** — o'tmish, **for / since** — hozirgacha.",
    "Javob 3 qadamda: **javob, tafsilot, misol**. Masalan: *I've lived here for four years. I moved here after university.*",
    "Eshitmasangiz: **Sorry, could you say that again, please?**",
    "Yangi so'zlar: **proud, achievement, challenge, hire, again and again**.",
  ],
  homework: "O'zingizdan intervyu oling: 4 ta savol (**Where did you grow up? How long have you lived here? What are you proud of? What has been a challenge?**) va har biriga 3 qadamli javob ayting. Telefoningizda yozib oling va tinglang.",
};

export default lesson;
