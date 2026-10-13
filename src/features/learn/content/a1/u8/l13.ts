import type { Lesson } from '../../../types';

// Mini lesson (grammar): equality with as … as, the same … as, and difference with different from.
const lesson: Lesson = {
  id: "u8-l13",
  title: "as … as and the same as",
  titleUz: "as … as va the same as: tenglashtirish",
  mini: true,
  kind: 'grammar',
  goal: "Ikki narsani **tenglashtirasiz**: **as cheap as, the same price as, the same size as** — va farqni aytasiz: **different from, not the same as**. Narx, o'lcham va ovqat haqida gapirganda ishlatasiz.",
  slides: [
    {
      title: "as … as va the same … as",
      blocks: [
        { t: "p", md: "Ikki narsa **teng** bo'lsa, ikki yo'l bor. Birinchisi: **as + sifat + as**. Ikkinchisi: **the same + ot + as**. Ma'nosi deyarli bir xil:" },
        { t: "table", head: ["as + sifat + as", "the same + ot + as"], rows: [
          ["This bag is as expensive as that bag.", "This bag is the same price as that bag."],
          ["My cup is as big as your cup.", "My cup is the same size as your cup."],
          ["The red shirt is as long as the blue shirt.", "The red shirt is the same length as the blue shirt."],
          ["Rice is as cheap as bread today.", "Rice is the same price as bread today."],
        ], speak: [0, 1] },
        { t: "tip", tone: "info", md: "**the same … as**: *the same* dan keyin **ot** (price, size, colour), keyin **as**. Ot bo'lmasa ham bo'ladi: *Her pizza is **the same as** mine.* (= xuddi o'shandek). **the** ni tushirib qoldirmang!" },
        { t: "check", ex: { k: "fill", q: "My bag is the same size ___ yours.", a: ["as"], uz: "Mening sumkam seniki bilan bir xil o'lchamda.", why: "**the same … as** — oxirida **as**." } },
      ],
    },
    {
      title: "different from — farq",
      blocks: [
        { t: "p", md: "Farqni aytish uchun **different from** ishlatamiz. **not the same as** ham shu ma'noda:" },
        { t: "dialog", lines: [
          { who: "Customer", en: "Is this brand the same as that one?", uz: "Bu marka unisi bilan bir xilmi?" },
          { who: "Seller", en: "No, it's different from that one. It's a bit sweeter.", uz: "Yo'q, u undan farq qiladi. Biroz shirinroq." },
          { who: "Customer", en: "And the price?", uz: "Narxi-chi?" },
          { who: "Seller", en: "It's the same price as the other one. Five dollars.", uz: "Narxi boshqasi bilan bir xil. Besh dollar." },
          { who: "Customer", en: "Then I'll take this one. It's as big as the other one, too.", uz: "Unda buni olaman. U ham boshqasidek katta ekan." },
        ] },
        { t: "examples", items: [
          { en: "Tea is different from coffee.", uz: "Choy qahvadan farq qiladi." },
          { en: "My bread is not the same as your bread.", uz: "Mening nonim seniki bilan bir xil emas." },
          { en: "These two brands are different from each other.", uz: "Bu ikki marka bir-biridan farq qiladi." },
        ] },
        { t: "check", ex: { k: "choice", q: "Cola is ___ juice.", opts: ["different from", "different of", "the same like", "same as"], a: 0, why: "Farq: **different from**." } },
      ],
    },
    {
      title: "Ehtiyot bo'ling: tipik xatolar",
      blocks: [
        { t: "compare", good: { title: "To'g'ri", items: ["as cheap as", "the same price as", "different from", "not as heavy as"] }, bad: { title: "Noto'g'ri", items: ["as cheaper as", "same price like", "different of", "not as heavy than"] } },
        { t: "tip", tone: "warn", md: "**as … as** ichida sifat **o'zgarmaydi**: *as cheap as* ✅, *as cheaper as* ❌. **same** dan oldin **the** kerak: *the same size* ✅, *same size* ❌. **like** va **than** bu yerda kerak emas." },
        { t: "check", ex: { k: "choice", q: "To'g'ri gapni tanlang.", opts: ["The rice is as expensive as the pasta.", "The rice is as more expensive as the pasta.", "The rice is as expensive than the pasta.", "The rice is same expensive as the pasta."], a: 0, why: "**as + sifat (oddiy shakl) + as**." } },
      ],
    },
  ],
  words: [
    { en: "same", uz: "bir xil, o'sha", ipa: "seɪm", pos: "adjective", ex: "We have the same bag.", exUz: "Bizning sumkamiz bir xil." },
    { en: "different", uz: "boshqacha, farqli", ipa: "ˈdɪf.ər.ənt", pos: "adjective", ex: "This shop is different from that one.", exUz: "Bu do'kon unisidan farq qiladi." },
    { en: "similar", uz: "o'xshash", ipa: "ˈsɪm.ɪ.lər", pos: "adjective", ex: "The two cakes look similar.", exUz: "Ikki tort o'xshash ko'rinadi." },
    { en: "brand", uz: "marka, brend", ipa: "brænd", pos: "noun", ex: "I like this brand of tea.", exUz: "Menga bu choy markasi yoqadi." },
    { en: "heavy", uz: "og'ir", ipa: "ˈhev.i", pos: "adjective", ex: "This bag of rice is heavy.", exUz: "Bu guruch qopi og'ir." },
    { en: "fair", uz: "adolatli, o'rtacha (narx)", ipa: "feə", pos: "adjective", ex: "Five dollars is a fair price.", exUz: "Besh dollar o'rtacha narx." },
  ],
  practice: [
    { k: "choice", q: "These apples are as fresh ___ those apples.", opts: ["as", "than", "like", "from"], a: 0, why: "**as … as**." },
    { k: "fill", q: "Her bag is the ___ size as mine.", a: ["same"], uz: "Uning sumkasi meniki bilan bir xil o'lchamda.", why: "**the same size as**." },
    { k: "fill", q: "Tea is different ___ coffee.", a: ["from"], uz: "Choy qahvadan farq qiladi.", why: "**different from**." },
    { k: "choice", q: "The shoes are 40 dollars. The boots are 40 dollars. The shoes are ___ the boots.", opts: ["the same price as", "cheaper than", "more expensive than", "not as expensive as"], a: 0, why: "Narx bir xil → **the same price as**." },
    { k: "order", uz: "Bu non unisidek yumshoq.", words: ["This", "bread", "is", "as", "soft", "as", "that", "bread."], extra: ["softer", "than"] },
    { k: "order", uz: "Mening stakanim seniki bilan bir xil o'lchamda.", words: ["My", "glass", "is", "the", "same", "size", "as", "yours."], extra: ["like", "same"] },
    { k: "translate", uz: "Bu marka unisidan farq qiladi.", a: ["This brand is different from that one.", "This brand is different from that brand.", "This brand is not the same as that one."] },
    { k: "match", pairs: [["same", "bir xil"], ["different", "farqli"], ["similar", "o'xshash"], ["brand", "marka"], ["heavy", "og'ir"]] },
    { k: "fix", wrong: "This bag is same price as that bag.", a: ["This bag is the same price as that bag."], why: "**same** dan oldin **the**." },
    { k: "fix", wrong: "This box is as heavier as that box.", a: ["This box is as heavy as that box."], why: "**as … as** ichida sifat oddiy shaklda." },
    { k: "tf", q: "*My cup is different of your cup.* — gap to'g'ri.", a: false, why: "To'g'risi: **different from**." },
    { k: "listen", say: "This cake is the same price as that one.", opts: ["This cake is the same price as that one.", "This cake is as cheap as that one.", "This cake is different from that one.", "This cake is cheaper than that one."], a: 0 },
    { k: "dictation", say: "Rice is as cheap as bread.", a: ["Rice is as cheap as bread."] },
    { k: "speak", say: "My bag is the same size as yours.", uz: "Mening sumkam seniki bilan bir xil o'lchamda." },
  ],
  quiz: [
    { k: "choice", q: "Her phone is the same ___ mine.", opts: ["as", "like", "than", "from"], a: 0 },
    { k: "choice", q: "A lemon is ___ an orange.", opts: ["different from", "same as", "as different", "different than as"], a: 0 },
    { k: "fill", q: "This melon is as sweet ___ honey!", a: ["as"], why: "**as … as**." },
    { k: "order", uz: "Bu ikki do'kon bir xil emas.", words: ["These", "two", "shops", "are", "not", "the", "same."], extra: ["different", "like"] },
    { k: "translate", uz: "Pishloq sariyog'dan farq qiladi.", a: ["Cheese is different from butter.", "Cheese is not the same as butter."] },
    { k: "fix", wrong: "My cup is different of your cup.", a: ["My cup is different from your cup."], why: "**different from**." },
    { k: "tf", q: "*The same price as* iborasida **the** kerak.", a: true, why: "To'g'ri: **the same** — har doim **the** bilan." },
    { k: "choice", q: "Both T-shirts cost 15 dollars. Which sentence is correct?", opts: ["The T-shirts are the same price.", "The T-shirts are same price.", "The T-shirts are different from price.", "The T-shirts are the same like."], a: 0 },
  ],
  summary: [
    "Tenglik: **as + sifat + as** (*as cheap as*) yoki **the same + ot + as** (*the same price as*).",
    "Farq: **different from** yoki **not the same as**.",
    "**as … as** ichida sifat o'zgarmaydi; **the same** da **the** tushmaydi.",
    "Yangi so'zlar: **same, different, similar, brand, heavy, fair**.",
  ],
  homework: "Ikki xil mahsulotni (masalan, ikki xil non yoki choy) solishtiring: 4 ta gap yozing — 2 tasi **as … as / the same … as**, 2 tasi **different from** bilan.",
};

export default lesson;
