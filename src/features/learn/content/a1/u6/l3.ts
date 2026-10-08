import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u6-l3",
  title: "Personality: very, quite, really",
  titleUz: "Xarakter va sifatlar: very, quite, really",
  goal: "**What is he like?** savoliga javob berib, odamning xarakterini tasvirlaysiz (*kind, shy, hard-working, rude…*) va fikringizni **very, really, quite, a bit, not very** bilan aniq va muloyim ifodalaysiz.",
  slides: [
    {
      title: "What is she like? — xarakter haqida savol",
      blocks: [
        { t: "p", md: "O'tgan darsda **What does she look like?** — tashqi ko'rinish edi. Odamning **xarakteri, fe'l-atvori** haqida esa boshqa savol beriladi: **What is she like?** (*What's she like?*) — \"U qanaqa odam?\"" },
        {
          t: "table", head: ["Savol", "Nimani so'raydi", "Javob"],
          rows: [
            ["What does she look like?", "tashqi ko'rinish", "She's tall and has curly hair."],
            ["What is she like?", "xarakter", "She's very kind and funny."],
            ["What does she like?", "nimani yoqtiradi", "She likes music and books."],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "warn", md: "**What is she like?** dagi **like** — fe'l emas, \"…ga o'xshash, qanaqa\" degan predlog. Shuning uchun javobda *like* takrorlanmaydi: ❌ *She is like kind.* ✅ *She's kind.*" },
        { t: "check", ex: { k: "choice", q: "— What's your new boss like? — …", opts: ["He likes coffee.", "He's tall with a beard.", "He's very polite and patient.", "He's like polite."], a: 2, why: "*What's he like?* — xarakter: **He's very polite and patient.**" } },
      ],
    },
    {
      title: "Xarakter sifatlari: juftliklar",
      blocks: [
        { t: "p", md: "Sifatlarni **qarama-qarshi juftlik** qilib yodlash oson:" },
        {
          t: "table", head: ["Ijobiy", "O'zbekcha", "Salbiy / qarama-qarshi", "O'zbekcha"],
          rows: [
            ["friendly", "do'stona, xushmuomala", "unfriendly", "sovuq, muomalasiz"],
            ["polite", "odobli, xushmuomala", "rude", "qo'pol, odobsiz"],
            ["hard-working", "mehnatkash", "lazy", "dangasa"],
            ["talkative", "gapdon, ko'p gapiradigan", "quiet / shy", "kamgap / uyatchan"],
            ["patient", "sabrli", "impatient", "sabrsiz"],
            ["clever", "aqlli", "silly", "ahmoqona, bema'ni"],
            ["generous", "saxiy, qo'li ochiq", "mean", "xasis"],
          ],
          speak: [0, 2],
        },
        { t: "tip", tone: "info", md: "**funny** — kuldiradigan, hazilkash odam: *My uncle is really funny.* **fun** — qiziqarli, maroqli (vaqt, ish): *The party was fun.* \n**shy** — uyatchan (yangi odamlar bilan gapirishga qiynaladi), **quiet** — kamgap, tinch." },
        { t: "tip", tone: "warn", md: "**mean** BrE da \"xasis\" degani: *He's mean — he never pays for coffee.* \"Yovuz\" ma'nosi ham bor, lekin A1 da \"xasis\"ni yodlang." },
        { t: "check", ex: { k: "fill", q: "Dilshod never helps at home. He's very ___.", a: ["lazy"], uz: "Dilshod uyda hech qachon yordam bermaydi. U juda dangasa.", why: "Ishlamaydigan odam — **lazy**." } },
      ],
    },
    {
      title: "very, really, quite, a bit, not very",
      blocks: [
        { t: "p", md: "Bu so'zlar sifatning **kuchini** o'zgartiradi. Ular sifatdan **oldin** turadi:" },
        {
          t: "table", head: ["So'z", "Kuchi", "Misol", "O'zbekcha"],
          rows: [
            ["really", "●●●●", "She's really kind.", "U rostdan ham juda mehribon."],
            ["very", "●●●●", "She's very kind.", "U juda mehribon."],
            ["quite", "●●●", "She's quite kind.", "U ancha mehribon."],
            ["a bit", "●●", "He's a bit lazy.", "U biroz dangasa."],
            ["not very", "●", "He isn't very friendly.", "U unchalik do'stona emas."],
          ],
          speak: [2],
        },
        { t: "tip", tone: "info", md: "**a bit** odatda **salbiy** sifatlar bilan ishlatiladi: *a bit lazy, a bit shy, a bit rude*. Ijobiy sifat bilan esa **quite** yoki **very**: *quite clever*. (❌ *a bit kind* — g'alati eshitiladi.)" },
        { t: "tip", tone: "good", md: "Muloyim tanqid usuli: salbiy sifat o'rniga **not very + ijobiy sifat**. *He's rude* — qattiq. *He isn't very polite* — ancha yumshoq. Inglizlar shunday gapirishni yaxshi ko'radi!" },
        {
          t: "examples", items: [
            { en: "Our teacher is really patient.", uz: "O'qituvchimiz haqiqatan sabrli." },
            { en: "My little brother is quite talkative.", uz: "Ukam ancha gapdon." },
            { en: "I'm a bit shy with new people.", uz: "Yangi odamlar bilan biroz uyalaman." },
            { en: "The waiter wasn't very friendly.", uz: "Ofitsiant unchalik xushmuomala emas edi." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Qaysi gap eng **muloyim** tanqid?", opts: ["She is rude.", "She is very rude.", "She isn't very polite.", "She is really rude."], a: 2, why: "**not very + ijobiy sifat** — yumshoq tanqid." } },
      ],
    },
    {
      title: "Gapdagi o'rni: a very kind man, quite a…",
      blocks: [
        { t: "p", md: "Sifat ot bilan kelsa, **a / an** dan keyin **very / really** turadi: **a very kind man**. Lekin **quite** odatda **a / an** dan **oldin** turadi: **quite a kind man**." },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She's a very clever girl.", "He's a really funny guy.", "It's quite a long way.", "He's quite shy."] },
          bad: { title: "Xato", items: ["She's very a clever girl.", "He's a funny really guy.", "It's quite long a way.", "He's shy quite."] },
        },
        { t: "p", md: "Yana bir katta xato: **very** fe'l bilan ishlatilmaydi! Fe'lni kuchaytirish uchun **really** (fe'ldan oldin) yoki **very much** (gap oxirida):" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["I really like my teacher.", "I like my teacher very much.", "We really love Samarkand."] },
          bad: { title: "Xato", items: ["I very like my teacher.", "I like very much my teacher.", "We very love Samarkand."] },
        },
        { t: "tip", tone: "warn", md: "O'zbekchada \"juda yoqtiraman\" deymiz, shuning uchun ❌ *I very like* xatosi juda ko'p uchraydi. Eslab qoling: **I really like it** yoki **I like it very much**." },
        { t: "check", ex: { k: "order", uz: "Men singlimni juda yaxshi ko'raman.", words: ["I", "really", "love", "my", "sister."], extra: ["very", "a"] } },
      ],
    },
    {
      title: "Talaffuz: urg'u",
      blocks: [
        {
          t: "sounds", items: [
            { label: "polite", say: "polite", uz: "**\"pə-LAYT\"** — urg'u **ikkinchi** bo'g'inda.", examples: ["polite", "very polite"] },
            { label: "patient", say: "patient", uz: "**\"PEY-shənt\"** — *ti* \"sh\" o'qiladi.", examples: ["patient", "impatient"] },
            { label: "generous", say: "generous", uz: "**\"JE-nə-rəs\"** — *g* bu yerda \"j\".", examples: ["generous", "a generous man"] },
            { label: "talkative", say: "talkative", uz: "**\"TO:-kə-tiv\"** — *l* o'qilmaydi!", examples: ["talkative", "talk"] },
            { label: "quite", say: "quite", uz: "**\"kwayt\"** — *quiet* (\"KWAY-ət\", ikki bo'g'in) bilan adashtirmang!", examples: ["quite", "quiet"] },
          ],
        },
        { t: "tip", tone: "warn", md: "**quite** (ancha) — bitta bo'g'in, *e* oxirida. **quiet** (kamgap, tinch) — ikki bo'g'in. Yozishda ham ko'p adashtiriladi!" },
        { t: "check", ex: { k: "listen", say: "She's very quiet.", opts: ["She's very quiet.", "She's very quick.", "She's very kind."], a: 0, why: "\"KWAY-ət\" — **quiet**, kamgap." } },
      ],
    },
    {
      title: "Matn: Yangi xonadoshlar",
      blocks: [
        {
          t: "text", title: "My new flatmates",
          en: "Hi Mum,\nI'm in Tashkent now, and I'm living with two other students. Their names are Jamshid and Otabek.\nJamshid is from Fergana. He's really friendly and quite funny — we laugh a lot. He's very clever, but he's a bit lazy. He never washes the dishes!\nOtabek is from Nukus. He's quite shy and he isn't very talkative, but he's very kind and hard-working. He studies every evening, and he always helps me with my maths homework. He's also really generous: yesterday he bought pizza for everybody.\nI really like them both. Don't worry about me!\nLove,\nSanjar",
          uz: "Salom oyi,\nHozir Toshkentdaman va yana ikki talaba bilan birga yashayapman. Ularning ismi Jamshid va Otabek.\nJamshid Farg'onadan. U juda xushmuomala va ancha hazilkash — biz ko'p kulamiz. U juda aqlli, lekin biroz dangasa. Hech qachon idish yuvmaydi!\nOtabek Nukusdan. U ancha uyatchan va unchalik gapdon emas, lekin juda mehribon va mehnatkash. U har kechqurun o'qiydi va doim matematika uy vazifamda yordam beradi. U yana juda saxiy: kecha hammaga pitsa olib berdi.\nIkkalasini ham juda yaxshi ko'raman. Men haqimda xavotir olmang!\nSevgi bilan,\nSanjar",
        },
        { t: "check", ex: { k: "tf", q: "Matnga ko'ra, **Otabek is very talkative.**", a: false, why: "*He isn't very talkative* — u unchalik gapdon emas." } },
        { t: "check", ex: { k: "choice", q: "Kim **a bit lazy**?", opts: ["Sanjar", "Jamshid", "Otabek"], a: 1, why: "*Jamshid… is a bit lazy. He never washes the dishes!*" } },
      ],
    },
  ],
  words: [
    { en: "friendly", uz: "do'stona, xushmuomala", ipa: "ˈfrend.li", pos: "adjective", ex: "The people in Bukhara are very friendly.", exUz: "Buxorodagi odamlar juda xushmuomala." },
    { en: "polite", uz: "odobli, xushmuomala", ipa: "pəˈlaɪt", pos: "adjective", ex: "Your son is very polite.", exUz: "O'g'lingiz juda odobli." },
    { en: "rude", uz: "qo'pol, odobsiz", ipa: "ruːd", pos: "adjective", ex: "Don't be rude to your sister!", exUz: "Opangga qo'pollik qilma!" },
    { en: "hard-working", uz: "mehnatkash", ipa: "ˌhɑːdˈwɜː.kɪŋ", pos: "adjective", ex: "My mother is very hard-working.", exUz: "Onam juda mehnatkash." },
    { en: "lazy", uz: "dangasa", ipa: "ˈleɪ.zi", pos: "adjective", ex: "I'm a bit lazy on Sundays.", exUz: "Yakshanba kunlari biroz dangasaman." },
    { en: "shy", uz: "uyatchan", ipa: "ʃaɪ", pos: "adjective", ex: "She's shy with new people.", exUz: "U yangi odamlar bilan uyatchan." },
    { en: "talkative", uz: "gapdon, ko'p gapiradigan", ipa: "ˈtɔː.kə.tɪv", pos: "adjective", ex: "My grandmother is very talkative.", exUz: "Buvim juda gapdon." },
    { en: "patient", uz: "sabrli", ipa: "ˈpeɪ.ʃənt", pos: "adjective", ex: "A good teacher is patient.", exUz: "Yaxshi o'qituvchi sabrli bo'ladi." },
    { en: "generous", uz: "saxiy, qo'li ochiq", ipa: "ˈdʒen.ər.əs", pos: "adjective", ex: "My uncle is very generous.", exUz: "Amakim juda saxiy." },
    { en: "funny", uz: "kuldiradigan, hazilkash", ipa: "ˈfʌn.i", pos: "adjective", ex: "My uncle tells funny stories.", exUz: "Amakim kulgili hikoyalar aytib beradi." },
  ],
  practice: [
    { k: "match", pairs: [["polite", "rude"], ["hard-working", "lazy"], ["generous", "mean"], ["patient", "impatient"], ["talkative", "quiet"]] },
    { k: "match", pairs: [["shy", "uyatchan"], ["funny", "hazilkash"], ["generous", "saxiy"], ["hard-working", "mehnatkash"], ["patient", "sabrli"]] },
    { k: "listen", say: "It's quite cold today.", opts: ["It's quite cold today.", "It's quiet and cold today.", "It's quick and cold today."], a: 0, why: "\"kwayt\" — **quite**, ancha." },
    { k: "listen", say: "He isn't very polite.", opts: ["He is very polite.", "He isn't very polite.", "He isn't very patient."], a: 1 },
    { k: "choice", q: "— What's your sister like? — …", opts: ["She likes tea.", "She's quite shy but very kind.", "She has long hair.", "She's like kind."], a: 1, why: "*What's she like?* — xarakter haqida." },
    { k: "choice", q: "Qaysi gap **to'g'ri**?", opts: ["I very like this city.", "I like very much this city.", "I really like this city.", "I very much like very this city."], a: 2, why: "Fe'l bilan **really**: *I really like…* yoki *I like this city very much.*" },
    { k: "choice", q: "So'z tartibi to'g'ri gap:", opts: ["He's quite nice a man.", "He's quite a nice man.", "He's nice quite a man.", "He's a man quite nice."], a: 1, why: "**quite** — **a** dan oldin: *quite a nice man*." },
    { k: "fill", q: "Thank you for the present! You're very ___.", a: ["generous", "kind", "nice", "sweet"], hint: "saxiy", why: "Sovg'a beradigan — **generous**." },
    { k: "fill", q: "He never says \"please\" or \"thank you\". He's very ___.", a: ["rude", "impolite"], hint: "qo'pol" },
    { k: "fill", q: "I like your brother very ___.", a: ["much"], why: "**I like… very much** — gap oxirida." },
    { k: "tf", q: "**a bit** odatda salbiy sifatlar bilan ishlatiladi: *a bit lazy, a bit rude*.", a: true },
    { k: "tf", q: "**funny** va **fun** bir xil ma'noni beradi.", a: false, why: "**funny** — kuldiradigan (odam, hikoya); **fun** — maroqli, qiziqarli (vaqt, faoliyat)." },
    { k: "order", uz: "Bizning o'qituvchimiz juda sabrli ayol.", words: ["Our", "teacher", "is", "a", "very", "patient", "woman."], extra: ["much", "an"] },
    { k: "translate", uz: "U (he) ancha uyatchan.", a: ["He is quite shy", "He's quite shy"] },
    { k: "translate", uz: "Men uni juda yaxshi ko'raman. (her)", a: ["I really like her", "I like her very much", "I really love her", "I love her very much", "I like her a lot", "I love her a lot", "I like her so much", "I love her so much"] },
    { k: "speak", say: "My best friend is really funny and very kind.", uz: "Eng yaqin do'stim juda hazilkash va juda mehribon." },
  ],
  quiz: [
    { k: "choice", q: "\"U qanaqa odam?\" (he)", opts: ["What does he look like?", "What is he like?", "What does he like?", "How is he like?"], a: 1 },
    { k: "choice", q: "Qaysi gap **xato**?", opts: ["She's really clever.", "She's quite clever.", "She's very clever.", "She's clever very."], a: 3, why: "**very** sifatdan oldin: *very clever*." },
    { k: "choice", q: "Muloyim gapiring: *He's lazy* o'rniga…", opts: ["He's very lazy.", "He isn't very hard-working.", "He's really lazy.", "He's lazy quite."], a: 1, why: "**not very + ijobiy sifat** — yumshoq." },
    { k: "fill", q: "We ___ love Tashkent in spring.", a: ["really"], uz: "Biz bahorda Toshkentni juda yaxshi ko'ramiz.", why: "Fe'ldan oldin **really** (❌ *very*)." },
    { k: "fill", q: "My cousin never stops talking. She's very ___.", a: ["talkative", "chatty"] },
    { k: "listen", say: "My neighbour is quite generous.", opts: ["My neighbour is quite generous.", "My neighbour is quiet and generous.", "My neighbour is very generous."], a: 0 },
    { k: "tf", q: "**What's she like?** savoliga *She likes books* deb javob berish to'g'ri.", a: false, why: "*What's she like?* — xarakter: *She's very kind.*" },
    { k: "match", pairs: [["lazy", "dangasa"], ["polite", "odobli"], ["shy", "uyatchan"], ["mean", "xasis"], ["clever", "aqlli"]] },
    { k: "order", uz: "Bu ancha uzoq yo'l.", words: ["It's", "quite", "a", "long", "way."], extra: ["much", "an"] },
    { k: "translate", uz: "Ukam biroz dangasa.", a: ["My brother is a bit lazy", "My little brother is a bit lazy", "My younger brother is a bit lazy", "My brother's a bit lazy", "My brother is a little lazy", "My little brother is a little lazy", "My younger brother is a little lazy", "My brother is a little bit lazy", "My little brother is a little bit lazy", "My younger brother is a little bit lazy", "My little brother's a bit lazy"] },
  ],
  summary: [
    "**What is she like?** — xarakter; **What does she look like?** — tashqi ko'rinish; **What does she like?** — nimani yoqtiradi.",
    "Juftliklar: **polite – rude, hard-working – lazy, generous – mean, patient – impatient, talkative – quiet/shy**.",
    "Kuch darajasi: **really / very > quite > a bit > not very**. *a bit* — salbiy sifat bilan.",
    "**a very kind man**, lekin **quite a kind man**. Fe'l bilan: **I really like… / I like… very much** (❌ *I very like*).",
    "Muloyim tanqid: **He isn't very polite.**",
  ],
  homework: "Uch kishi (do'stingiz, qarindoshingiz, o'qituvchingiz) haqida 4–5 gapdan yozing: avval tashqi ko'rinish (*look like*), keyin xarakter (*What is he like?*). Har birida **very, quite, a bit** va **not very** dan kamida bittadan ishlating. Oxirida *I really like…* bilan yakunlang.",
};

export default lesson;
