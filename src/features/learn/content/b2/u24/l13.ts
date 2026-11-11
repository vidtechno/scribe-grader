import type { Lesson } from '../../../types';

// Mini lesson (grammar): stative and dynamic verbs, verbs with two meanings. Links to Present Perfect (l2) and future forms (l4).
const lesson: Lesson = {
  id: 'u24-l13',
  title: 'Stative and dynamic verbs',
  titleUz: "Holat va harakat fe'llari: think, have, see, taste, be",
  mini: true,
  kind: 'grammar',
  goal: "**Holat fe'llari** (*know, believe, want, belong*) odatda Continuous bo'lmasligini bilasiz, **ikki ma'noli fe'llarni** (*think, have, see, taste, look, be*) farqlaysiz va bu qoida Present Perfect hamda kelasi zamon shakllarida qanday ishlashini tushunasiz.",
  slides: [
    {
      title: "Holat va harakat",
      blocks: [
        { t: 'p', md: "**Dynamic verb** (harakat fe'li) jarayonni bildiradi: *run, write, cook*. **Stative verb** (holat fe'li) esa holat, fikr yoki hissiyotni bildiradi, shuning uchun odatda **Continuous** (-ing) shaklda ishlatilmaydi." },
        { t: 'table', head: ['Guruh', "Fe'llar", 'Misol'], speak: [2], rows: [
          ['Fikr', 'know, believe, understand, doubt, remember', "I believe you're right."],
          ['His-tuyg\'u', 'like, love, hate, prefer, want, need', "She needs more time."],
          ['Egalik', 'have (= ega), own, belong, possess', "This flat belongs to my uncle."],
          ['Tarkib', 'contain, consist of, resemble', "The box contains old photos."],
          ['His qilish', 'seem, appear, sound, look (= ko\'rinmoq)', "That sounds like a good plan."],
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["I know the answer.", "She wants a coffee.", "I've known him for years.", "It belongs to me."] },
          bad: { title: 'Xato', items: ["I am knowing the answer.", "She is wanting a coffee.", "I've been knowing him for years.", "It is belonging to me."] } },
        { t: 'tip', tone: 'warn', md: "O'zbek tilida hozirgi payt uchun *-yapman* shaklini ko'p ishlatamiz, shuning uchun *I am knowing* yoki *I am wanting* kabi xatolar paydo bo'ladi. Inglizchada **bilmoq, xohlamoq, tegishli bo'lmoq** — oddiy zamonda: *know, want, belong*." },
        { t: 'check', ex: { k: 'fix', wrong: "I am knowing the answer.", a: ["I know the answer."], why: "*know* — holat fe'li: **Present Simple**." } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["The box contains old photos.", "The box is containing old photos.", "The box has been containing old photos now.", "The box contain old photos."], a: 0, why: "*contain* — holat fe'li: **Present Simple** (*contains*)." } },
      ],
    },
    {
      title: "Ikki ma'noli fe'llar",
      blocks: [
        { t: 'p', md: "Ba'zi fe'llar ikki xil ma'noga ega: **holat** ma'nosida Continuous bo'lmaydi, **harakat** ma'nosida bo'ladi." },
        { t: 'table', head: ["Fe'l", 'Holat (Simple)', 'Harakat (Continuous)'], speak: [1, 2], rows: [
          ['think', "I think it's too expensive. (fikr)", "I'm thinking about the offer. (o'ylab ko'rmoqda)"],
          ['have', "She has a flat in Leeds. (ega)", "We're having lunch. (qilmoqda)"],
          ['see', "I see what you mean. (tushunmoq)", "He's seeing a specialist. (uchrashmoqda)"],
          ['taste / smell', "The soup tastes salty. (ta'mi)", "She's tasting the soup. (tatib ko'rmoqda)"],
          ['look / feel', "You look tired. (ko'rinish)", "He's looking at the map. (qaramoqda)"],
          ['be', "He is kind. (xarakteri)", "He is being rude today. (hozirgi xulqi)"],
        ] },
        { t: 'examples', items: [
          { en: "I'm having a great time here.", uz: "Bu yerda zo'r vaqt o'tkazyapman.", note: "**have a great time** — harakat ma'nosi, Continuous mumkin." },
          { en: "Why are you smelling the milk? It smells fine.", uz: "Nega sutni hidlayapsan? Hidi yaxshi.", note: "*smell* harakat (hidlamoq) va holat (hid chiqarmoq)." },
          { en: "She's being very helpful this week.", uz: "U shu hafta juda yordam beryapti.", note: "**be + being** — vaqtincha xulq (odatiy xarakter emas)." },
        ] },
        { t: 'tip', tone: 'info', md: "*I'm loving it* kabi reklama va norasmiy nutqda uchraydigan shakllar bor, ammo B2 da imtihon va yozma ishda **to'g'ri qoida**ni qo'llang: *I love it*." },
        { t: 'check', ex: { k: 'choice', q: "Be quiet! I ___ about the answer.", opts: ['think', 'am thinking', 'do think', 'thinks'], a: 1, why: "Jarayon (o'ylab ko'rmoqda): **am thinking**." } },
        { t: 'check', ex: { k: 'fill', q: "Sorry, I can't talk now. We ___ dinner. (have)", a: ['are having', "'re having"], uz: "Uzr, hozir gaplasha olmayman. Kechki ovqat qilyapmiz.", why: "*have dinner* — harakat: **Continuous**." } },
      ],
    },
    {
      title: "Present Perfect va kelasi zamonda",
      blocks: [
        { t: 'p', md: "Holat fe'llari **Present Perfect Continuous** va **Future Continuous** da ham cheklanadi:" },
        { t: 'table', head: ['Holat (Simple)', 'Harakat (Continuous)'], speak: [0, 1], rows: [
          ["I've known her for ten years.", "I've been thinking about changing jobs."],
          ["He has had that car since 2018.", "We'll be having dinner at eight."],
          ["It has belonged to our family for years.", "She's been seeing a lot of her cousins."],
        ] },
        { t: 'tip', tone: 'warn', md: "*I've been knowing* yoki *It has been belonging* xato. Muddat (*for ten years*) bo'lsa ham holat fe'li **Present Perfect Simple** da qoladi. *Future Continuous* da ham: *This time tomorrow I'll be having lunch* (harakat) mumkin, lekin *I'll be knowing* emas." },
        { t: 'check', ex: { k: 'fill', q: "How long have you ___ Jack? (know)", a: ['known'], uz: "Jekni qancha vaqtdan beri bilasiz?", why: "Holat fe'li: **have known**." } },
        { t: 'check', ex: { k: 'tf', q: "*We'll be having dinner at eight.* — to'g'ri gap (kelajakdagi jarayon).", a: true, why: "*have dinner* harakat fe'li: **will be having** mumkin." } },
      ],
    },
    {
      title: "Matn va dialog",
      blocks: [
        { t: 'text', title: 'A busy week', voice: 'emma', en: "My week has been strange. I think my new manager is clever, but she is being very demanding at the moment. Every morning we have a meeting that seems endless, and the report we are preparing consists of fifty pages. At the same time, I am thinking about taking a short course, because I need a break from this routine. I don't own a car, so I take the bus, and the journey takes almost an hour. I have known my colleague Jane for years, and she appears calm even when the office is chaotic. I wish I could be like her.", uz: "Mening haftam g'alati o'tdi. Yangi menejerim aqlli deb o'ylayman, lekin u hozir juda talabchan bo'lib turibdi. Har ertalab cheksiz tuyuladigan yig'ilishimiz bor va tayyorlayotgan hisobotimiz ellik sahifadan iborat. Shu bilan birga, qisqa kursga yozilish haqida o'ylayapman, chunki bu tartibdan dam olishim kerak. Mening mashinam yo'q, shuning uchun avtobusda boraman, yo'l deyarli bir soat oladi. Hamkasbim Jeynni yillardan beri bilaman va u ofisda tartibsizlik bo'lganda ham xotirjam ko'rinadi. Men ham uningdek bo'lsam edi." },
        { t: 'check', ex: { k: 'tf', q: "The narrator owns a car.", a: false, why: "*I don't own a car, so I take the bus.*" } },
        { t: 'dialog', lines: [
          { who: 'Alex', en: "Nina, are you free tonight? I'm having a few friends over.", uz: "Nina, bugun kechqurun bandmisan? Bir necha do'stni mehmonga chaqiryapman." },
          { who: 'Nina', en: "I'd love to, but I'm seeing my dentist at six. Does it matter if I'm late?", uz: "Juda xohlardim, lekin oltida tish shifokoriga boraman. Kechiksam, qiyin bo'lmaydimi?" },
          { who: 'Alex', en: "Not at all. I'm cooking my grandmother's soup, so dinner won't be ready until eight.", uz: "Umuman yo'q. Buvimning sho'rvasini pishiryapman, kechki ovqat sakkizgacha tayyor bo'lmaydi." },
          { who: 'Nina', en: "That smells wonderful already! I think I'll bring dessert.", uz: "Hozirdan hidi ajoyib! Shirinlik olib kelsam bo'ladi deb o'ylayman." },
          { who: 'Alex', en: "Dessert would be lovely. Mia is coming too, so you'll have someone to talk to.", uz: "Shirinlik juda yaxshi bo'lardi. Mia ham keladi, gaplashadigan odam topiladi." },
          { who: 'Nina', en: "Great! I haven't seen her since March, so we have a lot to catch up on.", uz: "Ajoyib! Uni martdan beri ko'rmaganman, gaplashadigan gaplarimiz ko'p." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "Why does Nina say she will be late?", opts: ["She is seeing her dentist at six.", "She is cooking soup.", "She doesn't know Alex's address.", "She has no friends coming."], a: 0, why: "*I'm seeing my dentist at six.*" } },
      ],
    },
  ],
  words: [
    { en: 'possess', uz: "ega bo'lmoq, egalik qilmoq", ipa: 'pəˈzes', pos: 'verb', ex: 'He possesses an impressive collection of maps.', exUz: "Uning ajoyib xaritalar kolleksiyasi bor." },
    { en: 'resemble', uz: "o'xshamoq", ipa: 'rɪˈzem.bəl', pos: 'verb', ex: 'She closely resembles her grandmother.', exUz: "U buvisiga juda o'xshaydi." },
    { en: 'consist of', uz: "...dan iborat bo'lmoq", ipa: 'kənˈsɪst əv', pos: 'phrasal verb', ex: 'The course consists of ten short lessons.', exUz: "Kurs o'nta qisqa darsdan iborat." },
    { en: 'contain', uz: "o'z ichiga olmoq", ipa: 'kənˈteɪn', pos: 'verb', ex: 'This drink contains no sugar.', exUz: "Bu ichimlikda shakar yo'q." },
    { en: 'owe', uz: "qarzdor bo'lmoq", ipa: 'əʊ', pos: 'verb', ex: 'I owe my brother a favour.', exUz: "Akamdan bir yaxshilik qarzdorman." },
    { en: 'appear', uz: "ko'rinmoq, tuyulmoq", ipa: 'əˈpɪər', pos: 'verb', ex: 'He appears confident, but he is quite nervous.', exUz: "U o'ziga ishongan ko'rinadi, lekin aslida ancha asabiy." },
  ],
  practice: [
    { k: 'match', pairs: [['possess', "ega bo'lmoq"], ['resemble', "o'xshamoq"], ['consist of', "...dan iborat bo'lmoq"], ['contain', "o'z ichiga olmoq"], ['owe', "qarzdor bo'lmoq"], ['appear', "ko'rinmoq, tuyulmoq"]] },
    { k: 'choice', q: "I ___ this soup is too salty.", opts: ['am thinking', 'think', 'am think', 'have been thinking'], a: 1, why: "Fikr bildirish — holat: **think**." },
    { k: 'choice', q: "Be quiet! I ___ about the answer.", opts: ['think', 'thinks', 'am thinking', 'do thinking'], a: 2, why: "Jarayon: **am thinking**." },
    { k: 'fill', q: "Sorry, I can't talk. We ___ dinner at the moment. (have)", a: ['are having', "'re having"], uz: "Uzr, hozir kechki ovqat qilyapmiz.", why: "*have dinner* — harakat: Continuous." },
    { k: 'fix', wrong: "I am knowing the answer.", a: ["I know the answer."], why: "*know* — holat fe'li." },
    { k: 'tf', q: "*I'm seeing the doctor tomorrow.* — Menda shifokor bilan uchrashuv belgilangan.", a: true, why: "*see* = uchrashmoq (harakat) + kelishilgan reja." },
    { k: 'choice', q: "This soup ___ delicious.", opts: ['is tasting', 'tastes', 'taste', 'tasting'], a: 1, why: "Ta'm xususiyati — holat: **tastes**." },
    { k: 'order', uz: "U bugun juda qo'pollik qilyapti (odatdagidek emas).", words: ['She', 'is', 'being', 'very', 'rude', 'today.'], extra: ['was', 'be'], why: "**is being + sifat** — vaqtincha xulq." },
    { k: 'listen', say: "I'm seeing my dentist on Friday.", opts: ["I'm seeing my dentist on Friday.", 'I see my dentist on Friday.', "I've seen my dentist on Friday.", "I'm seeing my dentist on Thursday."], a: 0 },
    { k: 'translate', uz: "Biz bir-birimizni besh yildan beri bilamiz.", a: ["We've known each other for five years.", "We have known each other for five years."], why: "Holat fe'li: **Present Perfect Simple**." },
    { k: 'fix', wrong: "She is having a lot of money.", a: ["She has a lot of money.", "She's got a lot of money.", "She has got a lot of money."], why: "*have* = ega: Continuous bo'lmaydi." },
    { k: 'fill', q: "The committee ___ of five members.", a: ['consists'], hint: 'con…', uz: "Qo'mita beshta a'zodan iborat.", why: "**consist of** — holat fe'li: *consists*." },
    { k: 'dictation', say: 'The report consists of three short sections.', a: ['The report consists of three short sections.'], uz: "Hisobot uchta qisqa bo'limdan iborat." },
    { k: 'speak', say: "I've been thinking about changing my job.", uz: "Ishimni almashtirish haqida o'ylab yuribman." },
  ],
  quiz: [
    { k: 'choice', q: "Which is correct?", opts: ["I am believing you.", "I believe you.", "I have been believing you now.", "I believes you."], a: 1, why: "*believe* — holat fe'li: **Present Simple**." },
    { k: 'fill', q: "It ___ to my sister, not to me. (belong)", a: ['belongs'], uz: "U menga emas, opamga tegishli.", why: "**belongs** — Continuous yo'q." },
    { k: 'fix', wrong: "I am wanting a coffee.", a: ["I want a coffee.", "I'd like a coffee.", "I would like a coffee."], why: "*want* — holat fe'li." },
    { k: 'tf', q: "*He's being kind* va *He is kind* bir xil ma'noni bildiradi.", a: false, why: "*is being kind* — hozirgi vaqtinchalik xulq; *is kind* — doimiy xarakter." },
    { k: 'choice', q: "How long ___ Jack?", opts: ['have you known', 'are you knowing', 'do you know', 'have you been knowing'], a: 0, why: "Muddat + holat fe'li: **have you known**." },
    { k: 'fill', q: "This time tomorrow I ___ lunch with the director. (have)", a: ['will be having', "'ll be having"], uz: "Ertaga shu paytda direktor bilan tushlik qilayotgan bo'laman.", why: "**will be having** — kelajakdagi jarayon." },
    { k: 'listen', say: "I've been thinking about changing my job.", opts: ["I've been thinking about changing my job.", "I've thought about changing my job.", "I'm thinking about changing my job.", "I've been thinking about changing my house."], a: 0 },
    { k: 'choice', q: "The mixture ___ flour, sugar and eggs.", opts: ['contains', 'is containing', 'contain', 'containing'], a: 0, why: "*contain* — holat fe'li: **contains**." },
  ],
  summary: [
    "**Holat fe'llari** (*know, believe, want, need, belong, contain*) odatda Continuous bo'lmaydi: *I know*, *I've known her for years*.",
    "Ikki ma'noli fe'llar: **think** (fikr) / *am thinking* (jarayon); **have** (ega) / *am having* (lunch, a meeting); **see** (tushunmoq) / *am seeing* (uchrashmoq).",
    "**be + being** vaqtincha xulqni bildiradi: *He is being rude today*.",
    "Yangi so'zlar: **possess, resemble, consist of, contain, owe, appear**.",
  ],
  homework: "Har kuni 3 ta gap yozing: bittasi holat fe'li bilan (*I know… / It belongs to…*), bittasi harakat ma'nosidagi fe'l bilan (*I'm thinking about… / We're having…*), bittasi *I've known… for…*. Besh kun davomida ularni takrorlang.",
};

export default lesson;
