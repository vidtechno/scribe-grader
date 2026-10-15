import type { Lesson } from '../../../types';

// Mini lesson (situation): meeting someone new and talking about your life. Uses Present Perfect, for / since, Present Perfect Continuous (l1-l4, l12, l13).
const lesson: Lesson = {
  id: 'u18-l9',
  title: 'Meeting someone new: talking about your life',
  titleUz: "Yangi tanish bilan suhbat: hayotingiz haqida gapirish",
  mini: true,
  kind: 'situation',
  goal: "Yangi tanish bilan suhbatni boshlaysiz, **qayerdansiz, qancha vaqtdan beri yashaysiz, nima ish qilasiz** haqida gapirasiz va **Have you ever…?** savollari bilan suhbatni davom ettirasiz.",
  slides: [
    {
      title: "Tinglang: konferensiyada tanishuv",
      blocks: [
        { t: 'p', md: "Sardor va Emma konferensiyada birinchi marta uchrashishdi. Dialogni tinglang va **qanday savollar berilganiga** e'tibor bering." },
        { t: 'dialog', lines: [
          { who: 'Emma', en: "Hello, I'm Emma. Is this seat free?", uz: "Salom, men Emmaman. Bu joy bo'shmi?" },
          { who: 'Sardor', en: "Yes, please sit down. I'm Sardor. Nice to meet you.", uz: "Ha, marhamat o'tiring. Men Sardorman. Tanishganimdan xursandman." },
          { who: 'Emma', en: "Nice to meet you too. Where are you from, Sardor?", uz: "Men ham xursandman. Qayerdansiz, Sardor?" },
          { who: 'Sardor', en: "I'm originally from Samarkand, but I've lived in London for five years.", uz: "Men asli Samarqandlikman, lekin besh yildan beri Londonda yashayman." },
          { who: 'Emma', en: "Five years! What do you do here?", uz: "Besh yil! Bu yerda nima ish qilasiz?" },
          { who: 'Sardor', en: "I'm a software developer. I've been working for a small company since 2021.", uz: "Men dasturchiman. 2021-yildan beri kichik kompaniyada ishlayapman." },
          { who: 'Emma', en: "Interesting! Have you ever worked in another country?", uz: "Qiziq! Boshqa biror mamlakatda ishlab ko'rganmisiz?" },
          { who: 'Sardor', en: "Yes, I spent a year in Germany before I came here. What about you?", uz: "Ha, bu yerga kelishdan oldin Germaniyada bir yil o'tkazdim. Siz-chi?" },
          { who: 'Emma', en: "I grew up in Bristol, and I've never lived anywhere else. Let's keep in touch!", uz: "Men Bristolda katta bo'lganman va boshqa joyda yashamaganman. Aloqada bo'laylik!" },
        ] },
        { t: 'check', ex: { k: 'choice', q: "How long has Sardor lived in London?", opts: ["For five years", "Since 2021", "For one year", "All his life"], a: 0, why: "*I've lived in London for five years.*" } },
        { t: 'check', ex: { k: 'tf', q: "Emma has lived in other cities.", a: false, why: "*I've never lived anywhere else.*" } },
      ],
    },
    {
      title: "Foydali savollar va javoblar",
      blocks: [
        { t: 'table', head: ['Maqsad', 'Ibora'], speak: [1], rows: [
          ['Tanishish', "Nice to meet you. I'm Sardor."],
          ['Qayerdansiz?', "Where are you from?"],
          ['Qayerdansiz? (javob)', "I'm originally from Samarkand."],
          ["Qancha vaqt yashaysiz?", "How long have you lived here?"],
          ["Kasb haqida", "What do you do? I'm a teacher."],
          ["Qancha vaqt ishlaysiz?", "How long have you been working there?"],
          ["Tajriba haqida", "Have you ever lived abroad?"],
          ["Aloqa", "Let's keep in touch."],
        ] },
        { t: 'tip', tone: 'info', md: "**Where are you from?** — qayerdan ekaningiz. **originally from** — asli qayerlik ekaningiz. Hozir yashayotgan joyni aytish uchun: *I live in London now.* Suhbatni davom ettirish uchun savolni qaytaring: **What about you?**" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["How long have you lived here?", "I've lived here for two years.", "What about you?"] },
          bad: { title: 'Xato', items: ["How long do you live here?", "I live here since two years.", "And you what?"] } },
        { t: 'check', ex: { k: 'fill', q: "I've worked as a nurse ___ 2019.", a: ['since'], uz: "Men 2019-yildan beri hamshira bo'lib ishlayman.", why: "Boshlanish nuqtasi → **since**." } },
        { t: 'check', ex: { k: 'order', uz: "Siz qancha vaqtdan beri bu yerda yashaysiz?", words: ['How', 'long', 'have', 'you', 'lived', 'here?'], extra: ['do', 'ago'] } },
      ],
    },
    {
      title: "O'zingiz ayting",
      blocks: [
        { t: 'p', md: "Yangi tanish bilan suhbatning **to'rt qadami**: 1) ismingiz va qayerdanligingiz, 2) qancha vaqt yashayotganingiz, 3) kasbingiz, 4) savol qaytarish." },
        { t: 'text', title: "A short introduction", en: "Hello, my name is Aziz. I'm originally from Bukhara, but I've lived in Birmingham for three years. I work as a chef in an Italian restaurant, and I've been working there since last spring. In my free time I like cycling. Have you ever visited Uzbekistan? What about you? Where are you from?", uz: "Salom, mening ismim Aziz. Men asli Buxorolikman, lekin uch yildan beri Birmingemda yashayman. Italyan restoranida oshpaz bo'lib ishlayman va o'tgan bahordan beri o'sha yerda ishlayapman. Bo'sh vaqtimda velosipedda yuraman. Siz O'zbekistonda bo'lganmisiz? Siz-chi? Qayerdansiz?" },
        { t: 'check', ex: { k: 'choice', q: "Where does Aziz work?", opts: ["In an Italian restaurant", "In a school", "In an office", "In a hospital"], a: 0, why: "*I work as a chef in an Italian restaurant.*" } },
        { t: 'check', ex: { k: 'choice', q: "Suhbatni davom ettirish uchun qaysi ibora mos?", opts: ["What about you?", "I don't know.", "Goodbye.", "Please repeat me."], a: 0, why: "**What about you?** — savolni suhbatdoshga qaytaradi." } },
      ],
    },
  ],
  words: [
    { en: 'originally', uz: 'asli, dastlab', ipa: 'əˈrɪdʒ.ən.əl.i', pos: 'adv', ex: "He's originally from Tashkent.", exUz: "U asli Toshkentlik." },
    { en: 'grow up', uz: "katta bo'lmoq (voyaga yetmoq)", ipa: 'ɡrəʊ ʌp', pos: 'phrasal verb', ex: "I grew up in a small village.", exUz: "Men kichik qishloqda katta bo'lganman." },
    { en: 'hometown', uz: "tug'ilgan shahar", ipa: 'ˈhəʊm.taʊn', pos: 'noun', ex: "My hometown is famous for its markets.", exUz: "Mening tug'ilgan shahrim bozorlari bilan mashhur." },
    { en: 'abroad', uz: 'chet elda', ipa: 'əˈbrɔːd', pos: 'adv', ex: "She has studied abroad for two years.", exUz: "U ikki yildan beri chet elda o'qiyapti." },
    { en: 'keep in touch', uz: "aloqada bo'lmoq", ipa: 'kiːp ɪn tʌtʃ', pos: 'phrase', ex: "Let's keep in touch by email.", exUz: "Email orqali aloqada bo'laylik." },
  ],
  practice: [
    { k: 'match', pairs: [['originally', 'asli, dastlab'], ['grow up', "katta bo'lmoq"], ['hometown', "tug'ilgan shahar"], ['abroad', 'chet elda'], ['keep in touch', "aloqada bo'lmoq"]] },
    { k: 'listen', say: "I'm originally from Samarkand.", opts: ["I'm originally from Samarkand.", "I live in Samarkand now.", "I'm going to Samarkand.", "I was in Samarkand yesterday."], a: 0 },
    { k: 'choice', q: "Yangi tanishingizdan kasbini so'rang:", opts: ["What do you do?", "How do you do it?", "What are you do?", "Where do you do?"], a: 0, why: "Kasb haqida: **What do you do?**" },
    { k: 'choice', q: "— I've lived here for four years. What about you?", opts: ["I've lived here since 2022.", "I live here since 2022.", "I lived here since 2022.", "I am living here since 2022."], a: 0, why: "**since 2022** → Present Perfect." },
    { k: 'fill', q: "I've lived in Leeds ___ three years.", a: ['for'], uz: "Men uch yildan beri Leedsda yashayman.", why: "Davomiylik → **for**." },
    { k: 'fill', q: "Have you ever ___ abroad? (live)", a: ['lived'], uz: "Chet elda yashab ko'rganmisiz?", why: "**Have you ever + V3?**" },
    { k: 'order', uz: "Men asli Buxorolikman.", words: ["I'm", 'originally', 'from', 'Bukhara.'], extra: ['since', 'for'], alt: [['I', 'am', 'originally', 'from', 'Bukhara.']] },
    { k: 'order', uz: "Aloqada bo'laylik!", words: ["Let's", 'keep', 'in', 'touch!'], extra: ['on', 'at'] },
    { k: 'fix', wrong: "How long do you live here?", a: ["How long have you lived here?", "How long have you been living here?"], why: "Davom etayotgan holat → Present Perfect." },
    { k: 'fix', wrong: "I live in Manchester since 2020.", a: ["I have lived in Manchester since 2020.", "I've lived in Manchester since 2020.", "I have been living in Manchester since 2020.", "I've been living in Manchester since 2020."], why: "**since** bilan Present Perfect." },
    { k: 'translate', uz: "Men bu kompaniyada ikki yildan beri ishlayapman.", a: ["I've been working for this company for two years.", "I have been working for this company for two years.", "I've worked for this company for two years.", "I have worked for this company for two years.", "I've been working at this company for two years.", "I have been working at this company for two years."], why: "**for two years** + Present Perfect." },
    { k: 'dictation', say: "Where are you from, and what do you do?", a: ["Where are you from, and what do you do?", "Where are you from and what do you do?"] },
    { k: 'speak', say: "Nice to meet you. I'm originally from Tashkent.", uz: "Tanishganimdan xursandman. Men asli Toshkentlikman." },
    { k: 'speak', say: "I've lived here for three years. What about you?", uz: "Men bu yerda uch yildan beri yashayman. Siz-chi?" },
  ],
  quiz: [
    { k: 'choice', q: "Qaysi savol 'Qancha vaqtdan beri shu yerda yashaysiz?' degani?", opts: ["How long have you lived here?", "How long ago do you live here?", "How long you live here?", "How long did you lived here?"], a: 0, why: "**How long have you lived…?**" },
    { k: 'choice', q: "'Asli Samarqandlikman' deyish uchun:", opts: ["I'm originally from Samarkand.", "I'm origin from Samarkand.", "I originally Samarkand.", "I'm from originally Samarkand."], a: 0, why: "**originally from**." },
    { k: 'fill', q: "I've been working here ___ last year.", a: ['since'], why: "Boshlanish payti → **since**." },
    { k: 'fill', q: "Nice to ___ you. I'm Helen.", a: ['meet'], why: "**Nice to meet you.**" },
    { k: 'tf', q: "*What about you?* — bu savol suhbatdoshga javob berish navbatini beradi.", a: true, why: "Savolni qaytarish uchun ishlatiladi." },
    { k: 'order', uz: "Siz hech chet elda yashab ko'rganmisiz?", words: ['Have', 'you', 'ever', 'lived', 'abroad?'], extra: ['did', 'ago'] },
    { k: 'listen', say: "I grew up in a small town near the sea.", opts: ["I grew up in a small town near the sea.", "I live in a small town near the sea.", "I'm going to a small town near the sea.", "I grew up in a big city near the sea."], a: 0 },
    { k: 'translate', uz: "Men besh yildan beri Londonda yashayman.", a: ["I've lived in London for five years.", "I have lived in London for five years.", "I've been living in London for five years.", "I have been living in London for five years."], why: "**for five years** + Present Perfect." },
  ],
  summary: [
    "Tanishuv: **Nice to meet you. Where are you from? What do you do? What about you?**",
    "Qancha vaqtdan beri: **How long have you lived here? — I've lived here for three years / since 2022.**",
    "Tajriba: **Have you ever lived abroad?** Aloqa: **Let's keep in touch.**",
    "Yangi so'zlar: **originally, grow up, hometown, abroad, keep in touch**.",
  ],
  homework: "O'zingizni 6 gapda tanishtiring: ism, qayerdan, qancha vaqtdan beri yashaysiz (**for / since**), kasb, bitta tajriba (**I've been to…**) va savol (**What about you?**). Ovoz chiqarib ayting.",
};

export default lesson;
