import type { Lesson } from '../../../types';

// Mini lesson (skill): listening and speaking about experiences.
const lesson: Lesson = {
  id: "u11-l14",
  title: "Listening and speaking: my experiences",
  titleUz: "Tinglash va gapirish: mening tajribalarim",
  mini: true,
  kind: 'skill',
  goal: "Tajriba haqidagi **qisqa suhbatlarni tinglab tushunasiz** va o'zingiz gapirasiz: *Have you ever…? — Yes, I have. I went there… — How about you?*",
  slides: [
    {
      title: "Tinglash: nimaga e'tibor beramiz",
      blocks: [
        { t: "p", md: "Tajriba suhbatida uch narsani tinglang: **savol** (*Have you ever…?*), **qisqa javob** (*Yes, I have. / No, never.*) va **tafsilot** (*I went there last year…* — bu yerda Past Simple)." },
        { t: "dialog", lines: [
          { who: "Mina", en: "Have you ever been to the mountains, Rustam?", uz: "Rustam, tog'larda bo'lganmisiz?" },
          { who: "Rustam", en: "Yes, I have. I went to Chimgan last winter.", uz: "Ha. O'tgan qishda Chimyonga borganman." },
          { who: "Mina", en: "That sounds fun! Did you ski?", uz: "Qiziq ekan! Chang'i uchdingizmi?" },
          { who: "Rustam", en: "No, I didn't. But I took a lot of photos. How about you?", uz: "Yo'q. Lekin ko'p rasm oldim. Siz-chi?" },
          { who: "Mina", en: "No, I haven't. I've never been to the mountains, but I'd love to go.", uz: "Yo'q, bo'lmaganman. Tog'larda hech bo'lmaganman, lekin borishni xohlardim." },
        ] },
        { t: "check", ex: { k: "tf", q: "Rustam skied in Chimgan.", a: false, why: "*No, I didn't. But I took a lot of photos.*" } },
        { t: "check", ex: { k: "choice", q: "Has Mina been to the mountains?", opts: ["Yes, she has.", "No, she hasn't.", "Yes, she went last winter.", "We don't know."], a: 1, why: "*I've never been to the mountains.*" } },
      ],
    },
    {
      title: "Gapirish: suhbat iboralari",
      blocks: [
        { t: "table", head: ["Maqsad", "Ibora"], speak: [1], rows: [
          ["Savol berish", "Have you ever been to…?"],
          ["Qisqa javob", "Yes, I have. / No, I haven't."],
          ["Tafsilot qo'shish", "I went there last year."],
          ["Qiziqish bildirish", "Really? That sounds fun!"],
          ["Savolni qaytarish", "How about you?"],
          ["Qo'shilish", "Me neither."],
        ] },
        { t: "tip", tone: "good", md: "Faqat \"Yes\" yoki \"No\" demang. **Qisqa javob + bitta tafsilot + How about you?** — shunda suhbat to'xtamaydi." },
        { t: "dialog", lines: [
          { who: "Dina", en: "I've never been on a plane.", uz: "Men hech qachon samolyotda uchmaganman." },
          { who: "Karim", en: "Me neither! By the way, have you ever been abroad?", uz: "Men ham! Aytgancha, chet elda bo'lganmisiz?" },
          { who: "Dina", en: "Yes, I have. I went to Turkey with my family.", uz: "Ha. Oilam bilan Turkiyaga borganman." },
        ] },
        { t: "check", ex: { k: "choice", q: "\"I've never been to Spain.\" — Siz ham bormagansiz. Nima deysiz?", opts: ["Me neither.", "Me too.", "Yes, I have.", "So do I."], a: 0, why: "Inkor gapga qo'shilish: **Me neither.**" } },
      ],
    },
    {
      title: "Tinglang va javob bering",
      blocks: [
        { t: "dialog", lines: [
          { who: "Jon", en: "Have you ever been to a festival?", uz: "Festivalda bo'lganmisiz?" },
          { who: "Sofia", en: "Yes, I have. I went to a music festival in July. I took a photo of the singer!", uz: "Ha. Iyulda musiqa festivaliga borganman. Qo'shiqchini rasmga oldim!" },
          { who: "Jon", en: "That sounds fun! I've never been to a festival, but I'd love to go.", uz: "Qiziq ekan! Men hech festivalda bo'lmaganman, lekin borishni xohlardim." },
          { who: "Sofia", en: "Come with me next year!", uz: "Kelasi yil men bilan boring!" },
        ] },
        { t: "check", ex: { k: "choice", q: "What did Sofia do at the festival?", opts: ["She took a photo of the singer.", "She sang a song.", "She met Jon.", "She skied."], a: 0, why: "*I took a photo of the singer!*" } },
        { t: "check", ex: { k: "tf", q: "Jon has been to a festival.", a: false, why: "*I've never been to a festival.*" } },
      ],
    },
  ],
  words: [
    { en: "That sounds fun!", uz: "Qiziq ekan!", ipa: "ðæt saʊndz fʌn", pos: "phrase", ex: "You went to the zoo? That sounds fun!", exUz: "Hayvonot bog'iga bordingizmi? Qiziq ekan!" },
    { en: "How about you?", uz: "Siz-chi?", ipa: "haʊ əˈbaʊt juː", pos: "phrase", ex: "I love tea. How about you?", exUz: "Men choyni yaxshi ko'raman. Siz-chi?" },
    { en: "Me neither", uz: "Men ham (yo'q)", ipa: "miː ˈnaɪðə", pos: "phrase", ex: "I've never flown. — Me neither.", exUz: "Men hech uchmaganman. — Men ham." },
    { en: "by the way", uz: "aytgancha", ipa: "baɪ ðə weɪ", pos: "phrase", ex: "By the way, have you eaten?", exUz: "Aytgancha, ovqat yedingizmi?" },
    { en: "I'd love to", uz: "Xursand bo'lardim", ipa: "aɪd lʌv tuː", pos: "phrase", ex: "Come with us! — I'd love to.", exUz: "Biz bilan keling! — Xursand bo'lardim." },
    { en: "take a photo", uz: "rasmga olmoq", ipa: "teɪk ə ˈfəʊtəʊ", pos: "phrase", ex: "I took a photo of the lake.", exUz: "Ko'lni rasmga oldim." },
  ],
  practice: [
    { k: "listen", say: "Have you ever been to the mountains?", opts: ["Have you ever been to the mountains?", "Did you go to the mountains?", "Are you in the mountains?"], a: 0 },
    { k: "listen", say: "No, I haven't. How about you?", opts: ["No, I haven't. How about you?", "No, I didn't. Who are you?", "Yes, I have. What about you?"], a: 0 },
    { k: "dictation", say: "I've never been on a plane.", a: ["I've never been on a plane.", "I have never been on a plane."], uz: "Men hech qachon samolyotda uchmaganman." },
    { k: "dictation", say: "Yes, I have. I went there last winter.", a: ["Yes, I have. I went there last winter."], uz: "Ha. U yerga o'tgan qishda borganman." },
    { k: "match", pairs: [["How about you?", "Siz-chi?"], ["by the way", "aytgancha"], ["Me neither", "Men ham (yo'q)"], ["That sounds fun!", "Qiziq ekan!"], ["take a photo", "rasmga olmoq"]] },
    { k: "choice", q: "**Have you ever eaten sushi?** — eng tabiiy javob:", opts: ["Yes, I have. I tried it in Tashkent. How about you?", "Yes, I did eat.", "I have ate sushi.", "No, I don't ever."], a: 0, why: "Qisqa javob + tafsilot + savolni qaytarish." },
    { k: "choice", q: "A: I've never ridden a horse. B: ___", opts: ["Me neither.", "Me too!", "Yes, I have.", "I do."], a: 0, why: "Inkor gapga: **Me neither.**" },
    { k: "fill", q: "A: Have you ever been abroad? B: Yes, I ___. I went to Turkey last year.", a: ["have"], why: "Qisqa javob: **Yes, I have.**" },
    { k: "order", uz: "Siz-chi? Siz hech tog'da bo'lganmisiz?", words: ["How", "about", "you?", "Have", "you", "ever", "been", "to", "the", "mountains?"], extra: ["did", "gone"] },
    { k: "translate", uz: "Yo'q, hech qachon. Men hech qachon samolyotda uchmaganman.", a: ["No, never. I've never flown.", "No, never. I have never flown.", "No, never. I've never been on a plane.", "No, never. I have never been on a plane."] },
    { k: "speak", say: "Have you ever been to the mountains?", uz: "Siz hech tog'larda bo'lganmisiz?" },
    { k: "speak", say: "Yes, I have. I went there last winter.", uz: "Ha, bo'lganman. O'tgan qishda borganman." },
    { k: "speak", say: "No, I haven't. How about you?", uz: "Yo'q. Siz-chi?" },
  ],
  quiz: [
    { k: "listen", say: "That sounds fun! Did you take a photo?", opts: ["That sounds fun! Did you take a photo?", "That sounds sad! Did you take a photo?", "That sounds fun! Do you take photos?"], a: 0 },
    { k: "dictation", say: "Me neither. I have never been there.", a: ["Me neither. I have never been there.", "Me neither. I've never been there."] },
    { k: "choice", q: "Tafsilot qo'shing. Have you been to Khiva? — Yes, I have. ___", opts: ["I went there in spring.", "I have gone in spring.", "I go there in spring ago.", "I have been in spring."], a: 0, why: "Aniq vaqt → Past Simple." },
    { k: "fill", q: "A: Have you ever seen snow? B: No, I ___.", a: ["haven't", "have not"] },
    { k: "order", uz: "Aytgancha, siz hech chet elda bo'lganmisiz?", words: ["By", "the", "way,", "have", "you", "ever", "been", "abroad?"], extra: ["did", "gone"] },
    { k: "translate", uz: "Qiziq ekan! Siz-chi?", a: ["That sounds fun! How about you?", "Sounds fun! How about you?", "That sounds fun. How about you?"] },
    { k: "tf", q: "**Me neither** inkor gapga javob sifatida ishlatiladi.", a: true },
    { k: "match", pairs: [["Me neither", "Men ham (yo'q)"], ["by the way", "aytgancha"], ["I'd love to", "Xursand bo'lardim"], ["How about you?", "Siz-chi?"]] },
  ],
  summary: [
    "Suhbatda tinglang: **savol → qisqa javob → tafsilot (Past Simple)**.",
    "Yaxshi javob: **Yes, I have. + tafsilot + How about you?**",
    "Inkorga qo'shilish: **Me neither.** Qiziqish: **That sounds fun!**",
    "Yangi iboralar: **by the way, I'd love to, take a photo**.",
  ],
  homework: "Har kuni bitta do'stingizdan (yoki ovoz chiqarib o'zingizdan) so'rang: *Have you ever…?* Javobingizni uch qismda ayting: qisqa javob, tafsilot, *How about you?*",
};

export default lesson;
