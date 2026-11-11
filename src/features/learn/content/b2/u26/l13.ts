import type { Lesson } from '../../../types';

// Mini lesson (grammar): reporting verbs and the patterns that follow them.
const lesson: Lesson = {
  id: 'u26-l13',
  title: 'Reporting verbs and patterns',
  titleUz: "Reporting fe'llari: admit, deny, accuse, insist, suggest, warn + qoliplar",
  mini: true,
  kind: 'grammar',
  goal: "*said* o'rniga aniq reporting fe'llarini ishlatasiz (*admit, deny, accuse, insist, suggest, warn, promise*) va har birining **qolipini** bilasiz: *that-gap, to-infinitive, object + to, -ing, predlog + -ing*. Yangiliklarda va intervyuda gapni aniq yetkazasiz.",
  slides: [
    {
      title: "Beshta qolip",
      blocks: [
        { t: 'p', md: "Ko'chirma gapda *he said that…* har doim ishlaydi, lekin B2 da fe'l ham **ma'noni** (tan oldi, rad etdi, ayblab) va **tuzilmani** ko'rsatadi. Har fe'l o'z qolipini talab qiladi, shuning uchun uni **birga yod oling**." },
        { t: 'table', head: ['Qolip', 'Fe\'llar', 'Misol'], speak: [2], rows: [
          ['verb + that-clause', 'claim, insist, suggest, explain, announce', "The minister claimed that the figures were correct."],
          ['verb + to-infinitive', 'promise, refuse, agree, threaten, offer', "The company refused to comment."],
          ['verb + object + to', 'advise, warn, remind, invite, tell', "She warned him not to share the password."],
          ['verb + -ing', 'admit, deny, suggest, recommend', "He denied leaking the documents."],
          ['verb + object + prep + -ing', 'accuse of, blame for, apologise for, insist on', "They accused him of lying."],
        ] },
        { t: 'tip', tone: 'info', md: "Bitta fe'l ikki qolipda kelishi mumkin: *suggest* — *suggested that we leave* yoki *suggested leaving*; **hech qachon** *suggested me to leave* emas." },
        { t: 'check', ex: { k: 'choice', q: "The spokesperson ___ to answer questions about the data breach.", opts: ['refused', 'denied', 'admitted', 'suggested'], a: 0, why: "Faqat **refuse** + to-infinitive qolipida keladi; qolgan fe'llar -ing yoki that-gap bilan." } },
      ],
    },
    {
      title: "Har bir qolip yaqinroq",
      blocks: [
        { t: 'examples', items: [
          { en: "She insisted that he should apologise.", uz: "U uning kechirim so'rashi kerakligini talab qildi.", note: "**insist that + (should) + fe'l** — talab. Tabiiy: *insisted that he apologise* ham mumkin." },
          { en: "He insisted on paying for everyone.", uz: "U hamma uchun o'zi to'lashni talab qildi.", note: "**insist on + -ing**." },
          { en: "The manager admitted making a mistake.", uz: "Menejer xato qilganini tan oldi.", note: "**admit + -ing** (yoki *admitted that he had made*)." },
          { en: "The politician accused the newspaper of spreading false stories.", uz: "Siyosatchi gazetani yolg'on xabarlar tarqatishda ayblab chiqdi.", note: "**accuse + kim + of + -ing**." },
          { en: "The doctors warned people not to click on unknown links.", uz: "Shifokorlar odamlarni noma'lum havolalarni bosmaslikka ogohlantirdi.", note: "**warn + kim + (not) to + fe'l**." },
          { en: "The manager blamed the delay on a technical fault.", uz: "Menejer kechikishda texnik nosozlikni aybladi.", note: "**blame sb for sth** yoki **blame sth on sb**." },
        ] },
        { t: 'tip', tone: 'good', md: "**Ma'no ranglari**: *claim* — isbotsiz da'vo qilish; *admit / concede* — noqulay narsani tan olish; *deny* — rad etish; *contend* — qat'iy fikr yoki da'vo bildirish; *assert* — ishonch bilan tasdiqlash; *retract* — oldingi gapdan qaytish." },
        { t: 'check', ex: { k: 'fill', q: "The company apologised ___ losing the customers' data.", a: ['for'], uz: "Kompaniya mijozlarning ma'lumotlarini yo'qotgani uchun uzr so'radi.", why: "**apologise for + -ing**." } },
        { t: 'check', ex: { k: 'fill', q: "He was accused ___ stealing the code.", a: ['of'], uz: "U kodni o'g'irlashda ayblandi.", why: "**accuse sb of + -ing** (majhul: *was accused of*)." } },
      ],
    },
    {
      title: "Tipik xatolar",
      blocks: [
        { t: 'p', md: "O'zbek tilida *aytdi*, *tan oldi*, *taklif qildi* deganda hammasi bir xil tuzilmaga ega. Inglizchada qolip fe'lga bog'liq. Mana uchta tipik xato:" },
        { t: 'compare',
          good: { title: "To'g'ri", items: ["He suggested going home.", "She denied taking the money.", "They accused him of lying."] },
          bad: { title: "Xato", items: ["He suggested me to go home.", "She denied to take the money.", "They accused him to lie."] } },
        { t: 'check', ex: { k: 'fix', wrong: "She suggested me to restart the router.", a: ["She suggested that I restart the router.", "She suggested that I should restart the router.", "She suggested restarting the router.", "She suggested I restart the router.", "She suggested I should restart the router.", "She advised me to restart the router."], why: "*suggest* + to-infinitive bo'lmaydi: **suggested that I (should) restart** yoki **suggested restarting**." } },
        { t: 'check', ex: { k: 'fix', wrong: "He denied to know about the leak.", a: ["He denied knowing about the leak.", "He denied that he knew about the leak.", "He denied having known about the leak."], why: "**deny + -ing** yoki **deny that…**; to-infinitive emas." } },
        { t: 'check', ex: { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She reminded him to lock the screen.", "She reminded to him lock the screen.", "She reminded him locking the screen.", "She reminded that he lock the screen to."], a: 0, why: "**remind + kim + to + fe'l**." } },
      ],
    },
    {
      title: "Matn va dialog",
      blocks: [
        { t: 'text', title: 'Statement from a press conference', voice: 'emma', en: "At yesterday's press conference, the company's chief executive admitted making an error when the new app was launched. He conceded that the security checks had been rushed, but he denied hiding the problem from customers. A reporter accused the company of ignoring earlier warnings, and the executive refused to answer that question directly. He did promise to publish a full report next month, and he urged users to change their passwords immediately. Critics contended that thousands of accounts had already been exposed, although the company asserted that no financial data was affected. One employee warned colleagues not to talk to the press. Later, the executive retracted a statement about the number of users involved, apologising for causing confusion.", uz: "Kecha bo'lib o'tgan matbuot anjumanida kompaniya bosh direktori yangi ilova ishga tushirilganida xato qilganini tan oldi. U xavfsizlik tekshiruvlari shoshilinch o'tkazilganini tan oldi, lekin muammoni mijozlardan yashirganini rad etdi. Bir muxbir kompaniyani oldingi ogohlantirishlarni e'tiborsiz qoldirishda ayblab chiqdi, direktor esa bu savolga to'g'ridan-to'g'ri javob berishdan bosh tortdi. U kelasi oy to'liq hisobot e'lon qilishni va'da qildi va foydalanuvchilarni parollarni zudlik bilan o'zgartirishga chaqirdi. Tanqidchilar minglab akkauntlar allaqachon fosh bo'lganini da'vo qildi, kompaniya esa moliyaviy ma'lumotlarga zarar yetmaganini qat'iy aytdi. Bir xodim hamkasblarini matbuot bilan gaplashmaslikka ogohlantirdi. Keyinroq direktor voqeaga aloqador foydalanuvchilar soni haqidagi bayonotidan qaytdi va chalkashlik uchun uzr so'radi." },
        { t: 'check', ex: { k: 'tf', q: "The chief executive denied hiding the problem from customers.", a: true, why: "*he denied hiding the problem from customers.*" } },
        { t: 'dialog', lines: [
          { who: 'Kate', en: "Did you read the article about the data leak? The company admitted making a mistake.", uz: "Ma'lumotlar sizib chiqishi haqidagi maqolani o'qidingmi? Kompaniya xato qilganini tan olibdi." },
          { who: 'Max', en: "I did. They promised to publish a full report, but I'm not sure I believe them.", uz: "O'qidim. To'liq hisobot e'lon qilishni va'da qilishibdi, lekin ularga ishonishimga ishonchim komil emas." },
          { who: 'Kate', en: "A journalist accused them of ignoring warnings, and the director refused to answer.", uz: "Bir jurnalist ularni ogohlantirishlarni e'tiborsiz qoldirishda aybladi, direktor esa javob berishdan bosh tortdi." },
          { who: 'Max', en: "That's a bad sign. Someone should warn customers to change their passwords.", uz: "Bu yomon alomat. Kimdir mijozlarni parollarini o'zgartirishga ogohlantirishi kerak." },
          { who: 'Kate', en: "They did. The director urged everyone to do it today.", uz: "Ogohlantirishdi. Direktor hammani buni bugun qilishga chaqirdi." },
          { who: 'Max', en: "Then I'll follow his advice. I also suggest turning on two-step verification.", uz: "Unda uning maslahatiga amal qilaman. Men ikki bosqichli tasdiqlashni yoqishni ham tavsiya qilaman." },
        ] },
        { t: 'check', ex: { k: 'choice', q: "What did Max suggest doing?", opts: ["Turning on two-step verification", "Deleting the app", "Calling a journalist", "Waiting for the report"], a: 0, why: "*I also suggest turning on two-step verification.*" } },
      ],
    },
  ],
  words: [
    { en: 'contend', uz: "qat'iy da'vo qilmoq, fikr bildirmoq", ipa: 'kənˈtend', pos: 'verb', ex: 'Critics contend that the app collected data without permission.', exUz: "Tanqidchilar ilova ruxsatsiz ma'lumot yig'gan deb da'vo qiladi." },
    { en: 'concede', uz: "tan olmoq, yon bermoq", ipa: 'kənˈsiːd', pos: 'verb', ex: 'The minister conceded that mistakes had been made.', exUz: "Vazir xatolarga yo'l qo'yilganini tan oldi." },
    { en: 'retract', uz: "(bayonotdan) qaytmoq, qaytarib olmoq", ipa: 'rɪˈtrækt', pos: 'verb', ex: 'The newspaper retracted the story and published an apology.', exUz: "Gazeta xabarni qaytarib oldi va uzr e'lon qildi." },
    { en: 'assert', uz: "qat'iy tasdiqlamoq", ipa: 'əˈsɜːt', pos: 'verb', ex: 'She asserted that she had never seen the document.', exUz: "U hujjatni hech qachon ko'rmaganini qat'iy aytdi." },
    { en: 'vow', uz: "qasam ichmoq, jiddiy va'da bermoq", ipa: 'vaʊ', pos: 'verb', ex: 'The company vowed to improve its security.', exUz: "Kompaniya xavfsizligini yaxshilashga va'da berdi." },
  ],
  practice: [
    { k: 'match', pairs: [['admit', "tan olmoq"], ['deny', "rad etmoq"], ['contend', "qat'iy da'vo qilmoq"], ['retract', "bayonotdan qaytmoq"], ['vow', "jiddiy va'da bermoq"]] },
    { k: 'choice', q: "The driver denied ___ the red light.", opts: ['jumping', 'to jump', 'that jump', 'jump'], a: 0, why: "**deny + -ing**." },
    { k: 'fill', q: "She was blamed ___ the delay.", a: ['for'], uz: "Kechikishda u ayblandi.", why: "**blame sb for sth**." },
    { k: 'choice', q: "Which verb is followed by a to-infinitive?", opts: ['refuse', 'deny', 'admit', 'suggest'], a: 0, why: "**refuse to do**; qolganlari -ing yoki that-gap bilan." },
    { k: 'fix', wrong: "He accused me to steal his idea.", a: ["He accused me of stealing his idea."], why: "**accuse sb of + -ing**." },
    { k: 'order', uz: "U menga parolni hech kimga aytmaslikni ogohlantirdi.", words: ['She', 'warned', 'me', 'not', 'to', 'tell', 'anyone', 'the', 'password.'], extra: ['telling', 'that'], alt: [['She', 'warned', 'me', 'not', 'to', 'tell', 'anybody', 'the', 'password.']], why: "**warn + kim + not to + fe'l**." },
    { k: 'listen', say: "He insisted on paying for everyone.", opts: ["He insisted on paying for everyone.", "He insisted to pay for everyone.", "He insisted paying for everyone.", "He insisted on pay for everyone."], a: 0 },
    { k: 'tf', q: "*She suggested me to wait.* — Gap grammatik jihatdan to'g'ri.", a: false, why: "*suggest* + object + to-infinitive bo'lmaydi: *suggested that I wait / suggested waiting*." },
    { k: 'translate', uz: "U xato qilganini tan oldi.", a: ["He admitted making a mistake.", "He admitted that he had made a mistake.", "She admitted making a mistake.", "She admitted that she had made a mistake.", "He admitted he had made a mistake.", "She admitted she had made a mistake.", "He admitted making an error.", "She admitted making an error."], why: "**admit + -ing** yoki **admit that…**." },
    { k: 'fill', q: "The firm promised ___ the problem by Friday.", a: ['to fix', 'to solve', 'to resolve', 'to sort out'], uz: "Firma muammoni juma kuniga hal qilishni va'da qildi.", why: "**promise + to-infinitive**." },
    { k: 'dictation', say: "The newspaper retracted the story and apologised.", a: ["The newspaper retracted the story and apologised.", "The newspaper retracted the story and apologized."], uz: "Gazeta xabardan qaytdi va uzr so'radi." },
    { k: 'choice', q: "The teacher reminded the students ___ their phones off.", opts: ['to switch', 'switching', 'that switch', 'for switching'], a: 0, why: "**remind + kim + to + fe'l**." },
    { k: 'fix', wrong: "They apologised to be late.", a: ["They apologised for being late.", "They apologised for arriving late.", "They apologised for coming late."], why: "**apologise for + -ing**." },
    { k: 'speak', say: "The minister refused to comment on the allegations.", uz: "Vazir ayblovlar haqida izoh berishdan bosh tortdi." },
  ],
  quiz: [
    { k: 'choice', q: "He insisted ___ seeing the manager.", opts: ['on', 'to', 'for', 'about'], a: 0, why: "**insist on + -ing**." },
    { k: 'choice', q: "Qaysi gap to'g'ri?", opts: ["She suggested taking a taxi.", "She suggested to take a taxi.", "She suggested us to take a taxi.", "She suggested us taking a taxi."], a: 0, why: "**suggest + -ing** (yoki *that we take*)." },
    { k: 'fill', q: "They accused him ___ lying to the police.", a: ['of'], uz: "Ular uni politsiyaga yolg'on gapirishda ayblashdi.", why: "**accuse sb of + -ing**." },
    { k: 'fix', wrong: "He denied to have sent the email.", a: ["He denied sending the email.", "He denied having sent the email.", "He denied that he had sent the email.", "He denied that he sent the email."], why: "**deny + -ing / having + V3** yoki *deny that…*" },
    { k: 'order', uz: "Ular xavfsizlikni yaxshilashga va'da berishdi.", words: ['They', 'vowed', 'to', 'improve', 'security.'], extra: ['improving', 'that'], alt: [['They', 'promised', 'to', 'improve', 'security.']], why: "**vow / promise + to-infinitive**." },
    { k: 'tf', q: "*Concede* — biror narsani tan olishdan bosh tortish degani.", a: false, why: "**concede** — noqulay narsani tan olish, yon berish." },
    { k: 'listen', say: "She warned him not to share the password.", opts: ["She warned him not to share the password.", "She warned him to not sharing the password.", "She warned him don't share the password.", "She warned to him not share the password."], a: 0 },
    { k: 'translate', uz: "U menga yangi dasturni sinab ko'rishni maslahat berdi.", a: ["She advised me to try the new program.", "He advised me to try the new program.", "She advised me to try the new software.", "He advised me to try the new software.", "She advised me to try the new app.", "He advised me to try the new app."], why: "**advise + kim + to + fe'l**." },
  ],
  summary: [
    "Reporting fe'li o'z qolipini talab qiladi: **that-gap, to-infinitive, object + to, -ing, predlog + -ing**.",
    "**promise / refuse / agree / threaten + to**, **advise / warn / remind + kim + to**, **admit / deny / suggest + -ing**.",
    "**accuse sb of -ing, blame sb for, apologise for, insist on** — predlogdan keyin faqat -ing.",
    "Xatolar: *suggested me to*, *denied to take*, *accused me to steal*.",
    "Yangi so'zlar: **contend, concede, retract, assert, vow**.",
  ],
  homework: "Yangiliklardan bitta qisqa xabar toping yoki o'zingiz o'ylab toping va uni 5 ta reporting fe'li bilan qayta aytib bering: *admit, deny, accuse, promise, warn*. Har bir fe'lning qolipiga e'tibor bering.",
};

export default lesson;
