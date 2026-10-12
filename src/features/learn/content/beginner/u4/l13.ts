import type { Lesson } from '../../../types';

// Mini lesson (grammar): object pronouns me/you/him/her/it/us/them after verbs and prepositions.
const lesson: Lesson = {
  id: 'u4-l13',
  title: 'Object pronouns: me, you, him, her…',
  titleUz: "Qaratqich olmoshlar: me, him, her, us, them",
  mini: true,
  goal: "Fe'ldan va predlogdan keyin **me, you, him, her, it, us, them** ni to'g'ri ishlatasiz: *She knows him. Come with me. Send it to them.* Odamlar va narsalarni qayta aytmasdan olmosh bilan almashtirasiz.",
  slides: [
    {
      title: 'Ega yoki to‘ldiruvchi?',
      blocks: [
        { t: 'p', md: "Gapda olmosh ikki joyda turadi:\n• **ega** (ish qiluvchi) — fe'ldan **oldin**: **I** like, **she** knows, **they** live.\n• **to'ldiruvchi** (ishga duchor bo'lgan) — fe'ldan yoki predlogdan **keyin**: like **me**, knows **her**, live with **them**." },
        { t: 'table', head: ['Ega (oldin)', "To'ldiruvchi (keyin)"], speak: [0, 1], rows: [
          ['I', 'me'], ['you', 'you'], ['he', 'him'], ['she', 'her'], ['it', 'it'], ['we', 'us'], ['they', 'them'],
        ] },
        { t: 'tip', tone: 'info', md: "Faqat **you** va **it** o'zgarmaydi. Qolganlari boshqa so'z: *I → me, he → him, she → her, we → us, they → them*." },
        { t: 'examples', items: [
          { en: 'My teacher knows me.', uz: 'Ustozim meni taniydi.' },
          { en: 'I know him, but I do not know her.', uz: "Men uni (erkak) taniyman, lekin uni (ayol) tanimayman." },
          { en: 'Our neighbours are nice. We often help them.', uz: "Qo'shnilarimiz yaxshi. Biz ularga tez-tez yordam beramiz." },
        ] },
        { t: 'check', ex: { k: 'fill', q: "My sister is at home. I can call ___ now.", a: ['her'], uz: 'Opam uyda. Hozir unga qo‘ng‘iroq qila olaman.', why: "Opa — ayol, fe'ldan keyin → **her**." } },
      ],
    },
    {
      title: 'Predlogdan keyin',
      blocks: [
        { t: 'p', md: "Predlogdan keyin ham doim **to'ldiruvchi shakl** turadi: **with** me, **for** him, **to** us, **about** them, **next to** her, **behind** you." },
        { t: 'examples', items: [
          { en: 'Come with me.', uz: 'Men bilan yuring.' },
          { en: 'This present is for you.', uz: "Bu sovg'a siz uchun." },
          { en: 'Who is next to him?', uz: 'Uning yonida kim?' },
          { en: 'We often talk about them.', uz: 'Biz ular haqida tez-tez gaplashamiz.' },
        ] },
        { t: 'compare',
          good: { title: "To'g'ri", items: ['Come with me.', 'This is for her.', 'She likes them.', 'Wait for us.'] },
          bad: { title: "Noto'g'ri", items: ['Come with I.', 'This is for she.', 'She likes they.', 'Wait for we.'] } },
        { t: 'tip', tone: 'warn', md: "O'zbek tilida *men bilan, u uchun* kabi qo'shimchalar oxirida keladi. Inglizchada tartib teskari: predlog **oldin**, olmosh **keyin** — *with me*, *for him*." },
        { t: 'check', ex: { k: 'choice', q: "Do you want to come with ___?  (we)", opts: ['we', 'us', 'our', 'them'], a: 1, why: "**with** dan keyin → **us**." } },
      ],
    },
    {
      title: 'Fe’l + kimga + nimani',
      blocks: [
        { t: 'p', md: "Ba'zi fe'llardan keyin **kimga** (olmosh) va **nima** (so'z) birga keladi: **send / show / tell + kimga + nimani**." },
        { t: 'examples', items: [
          { en: 'Send me a message.', uz: 'Menga xabar yuboring.' },
          { en: 'Show them your photos.', uz: "Ularga suratlaringizni ko'rsating." },
          { en: 'Tell us the news.', uz: 'Bizga yangilikni ayting.' },
        ] },
        { t: 'p', md: "Narsa o'rniga ham olmosh (**it, them**) qo'ysak, tartib o'zgaradi va **to** qo'shiladi: *Send **it to me**. Show **them to her**.* (*Send me it* demaymiz.)" },
        { t: 'tip', tone: 'good', md: "Gapni qisqa qilish: ismni takrorlamang. *Ali is my friend. I invite **him**.* — shunday tabiiy." },
        { t: 'check', ex: { k: 'order', uz: 'Menga xabar yuboring.', words: ['Send', 'me', 'a', 'message'], extra: ['I', 'to'], why: "**Send + kimga + nimani**." } },
      ],
    },
  ],
  words: [
    { en: 'send', uz: 'yubormoq', ipa: 'send', pos: 'verb', ex: 'Please send me a message.', exUz: 'Iltimos, menga xabar yuboring.' },
    { en: 'show', uz: "ko'rsatmoq", ipa: 'ʃəʊ', pos: 'verb', ex: 'Show me your photo.', exUz: "Menga suratingizni ko'rsating." },
    { en: 'tell', uz: 'aytmoq, aytib bermoq', ipa: 'tel', pos: 'verb', ex: 'Tell us the news.', exUz: 'Bizga yangilikni ayting.' },
    { en: 'invite', uz: 'taklif qilmoq', ipa: 'ɪnˈvaɪt', pos: 'verb', ex: 'We invite them to dinner.', exUz: 'Biz ularni kechki ovqatga taklif qilamiz.' },
    { en: 'ask', uz: "so'ramoq", ipa: 'ɑːsk', pos: 'verb', ex: 'Ask me a question.', exUz: "Mendan savol so'rang." },
    { en: 'thank', uz: 'rahmat aytmoq', ipa: 'θæŋk', pos: 'verb', ex: 'I thank him for the help.', exUz: 'Yordam uchun unga rahmat aytaman.' },
  ],
  practice: [
    { k: 'choice', q: 'My brother is here. Look at ___.', opts: ['he', 'him', 'his', 'her'], a: 1, why: "Aka — erkak, fe'ldan keyin → **him**." },
    { k: 'choice', q: 'We are friends. They often call ___.', opts: ['we', 'our', 'us', 'them'], a: 2, why: "*we* → fe'ldan keyin **us**." },
    { k: 'fill', q: 'I like Zarina. I often talk to ___.', a: ['her'], uz: 'Zarina menga yoqadi. Men u bilan tez-tez gaplashaman.', why: "**to** dan keyin ayol → **her**." },
    { k: 'fill', q: 'The books are on the table. Take ___, please.', a: ['them'], uz: 'Kitoblar stolda. Ularni oling.', why: "Kitoblar — ko'plik → **them**." },
    { k: 'order', uz: 'Biz ular haqida tez-tez gaplashamiz.', words: ['We', 'often', 'talk', 'about', 'them'], extra: ['they'] },
    { k: 'order', uz: 'Ularga suratlaringizni ko‘rsating.', words: ['Show', 'them', 'your', 'photos'], extra: ['they', 'to'] },
    { k: 'translate', uz: 'Men bilan yuring.', a: ['Come with me.', 'Come with me, please.', 'Please come with me.'], why: "**with** + **me**." },
    { k: 'translate', uz: 'Ustozim meni taniydi.', a: ['My teacher knows me.'], why: "Fe'ldan keyin **me**." },
    { k: 'fix', wrong: 'This present is for she.', a: ['This present is for her.', 'This gift is for her.'], why: "Predlogdan keyin → **her**." },
    { k: 'fix', wrong: 'Wait for we, please.', a: ['Wait for us, please.', 'Wait for us.'], why: "Predlogdan keyin → **us**." },
    { k: 'match', pairs: [['I', 'me'], ['he', 'him'], ['we', 'us'], ['they', 'them'], ['she', 'her']] },
    { k: 'tf', q: "*You* va *it* to'ldiruvchi shaklda ham o'zgarmaydi.", a: true, why: "Ha: *I like you. Take it.*" },
    { k: 'dictation', say: 'Please send me a message.', a: ['Please send me a message.', 'Please send me a message'] },
    { k: 'speak', say: 'I know him, but I do not know her.', uz: 'Ikkita olmosh bilan ayting' },
  ],
  quiz: [
    { k: 'choice', q: 'Maria is my friend. I invite ___ to my house.', opts: ['she', 'her', 'hers', 'they'], a: 1 },
    { k: 'choice', q: 'Our neighbours are kind. We help ___.', opts: ['they', 'their', 'them', 'us'], a: 2 },
    { k: 'fill', q: 'Ali and Dilya, this gift is for ___.', a: ['you'], uz: "Ali va Dilya, bu sovg'a sizlar uchun.", why: "*you* o'zgarmaydi." },
    { k: 'fill', q: 'Dilya is my friend. I call ___ every day.', a: ['her'], uz: "Dilya mening do'stim. Men unga har kuni qo'ng'iroq qilaman.", why: "Ayol, fe'ldan keyin → **her**." },
    { k: 'order', uz: 'Bizga yangilikni ayting.', words: ['Tell', 'us', 'the', 'news'], extra: ['we', 'to'] },
    { k: 'translate', uz: 'Bu siz uchun.', a: ['This is for you.', 'It is for you.', "It's for you."] },
    { k: 'fix', wrong: 'She likes they.', a: ['She likes them.'], why: "Fe'ldan keyin **them**." },
    { k: 'tf', q: "*Come with I.* — gap to'g'ri.", a: false, why: "To'g'risi: *Come with **me**.*" },
  ],
  summary: [
    "Fe'ldan **oldin** — ega olmosh (**I, he, she, we, they**); fe'ldan va predlogdan **keyin** — **me, him, her, us, them**.",
    "**you** va **it** ikkala o'rinda ham o'zgarmaydi.",
    "Predlogdan keyin ham doim to'ldiruvchi shakl: *with me, for him, about them*.",
    "**send / show / tell + kimga + nimani**: *Send me a message.*",
  ],
  homework: "5 ta gap yozing: yaqin odamlaringiz haqida, har birida bitta olmosh bo'lsin: *I call her every day. I often help them.*",
};

export default lesson;
