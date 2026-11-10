import type { UnitExtras } from '../../../unit-extras';

export const extras: UnitExtras = {
  canDo: [
    "Aralash shart gaplar bilan o'tgan qarorlarning bugungi hayotga ta'sirini tushuntiraman (If I had moved, I would be living there now)",
    "Wish, if only va would rather bilan pushaymon va xohishlarimni to'g'ri ifodalayman",
    "Must have, can't have, might have va should have bilan o'tgan voqea haqida taxmin va baho beraman",
    "Qiyin qaror haqida maslahat beraman, uzr so'rayman va 'Nima qilgan bo'lardingiz?' savoliga javob yozaman",
  ],
  traps: [
    {
      title: "If dan keyin would qo'yiladi",
      md: "O'zbek tilida shart *-sa / -gan bo'lsam* qo'shimchasi bilan beriladi va natija qismida ham *-ardim* shakli bor, shuning uchun inglizchada ikkala qismga ham **would** qo'yib yuboramiz. Inglizchada **if-qismida would bo'lmaydi**: o'tgan sabab uchun **Past Perfect** (*had known*), hozirgi uchun **Past Simple** (*knew*). **would** faqat natija qismida keladi.",
      fix: { k: 'fix', wrong: 'If I would have known, I would have told you.', a: ['If I had known, I would have told you.', 'If I had known, I would have told you'], why: "**If** dan keyin **Past Perfect** (*had known*), **would have** esa faqat natija qismida." },
    },
    {
      title: "Wish bilan o'tgan zamon pushaymoni",
      md: "O'zbek tilida *qaniydi* so'zi ham hozirgi, ham o'tgan pushaymonni bildiradi, inglizchada esa zamon shakli farq qiladi. O'tgan voqea haqida **wish + Past Perfect** kerak: *I wish I hadn't said that.* **wish + Past Simple** — faqat hozirgi holat uchun (*I wish I had more time*).",
      fix: { k: 'fix', wrong: "I wish I didn't tell her the secret yesterday.", a: ["I wish I hadn't told her the secret yesterday.", "I wish I had not told her the secret yesterday."], why: "Kecha sodir bo'lgan voqea → **wish + Past Perfect**." },
    },
    {
      title: "Inkor taxmin: mustn't have emas",
      md: "O'zbek tilida *bo'lishi mumkin emas* va *bo'lmagan bo'lsa kerak* o'xshash eshitiladi, shuning uchun **must** ni inkorga o'tkazamiz. Inglizchada o'tgan haqidagi ishonchli **inkor** taxmin **can't have / couldn't have** bilan beriladi. **mustn't have** odatda ishlatilmaydi.",
      fix: { k: 'fix', wrong: "She mustn't have seen my message; she never replied.", a: ["She can't have seen my message; she never replied.", "She couldn't have seen my message; she never replied.", "She might not have seen my message; she never replied."], why: "Inkor taxmin → **can't have / couldn't have** (ehtimol: **might not have**)." },
    },
  ],
  culture: "Britaniyaliklar ko'pincha fikrni to'g'ridan-to'g'ri aytmaydi: *I'm afraid I can't agree*, *It might be worth reconsidering* yoki *I'd have thought…* kabi yumshatuvchi iboralar odatiy. Pushaymon haqida ham yengil gapirishadi: *Hindsight is a wonderful thing* («o'tgandan keyin hammasi aniq ko'rinadi») degan maqol keng tarqalgan. *If I were you, I'd…* maslahatida norasmiy suhbatda ko'pincha *was* ham eshitiladi (*If I was you*), lekin yozuvda va imtihonda **were** to'g'ri hisoblanadi.",
  project: {
    title: "Qarorim va uning izi",
    prompt: "Hayotingizdagi bitta muhim qaror (o'qish, ish, ko'chish yoki rad etilgan imkoniyat) haqida 150–200 so'zlik tasviriy matn yozing. Nima bo'lganini, nima his qilganingizni va bugundan qarab nimani o'ylashingizni yozing. Oxirida bir xil vaziyatga tushgan do'stingizga qisqa maslahat bering.",
    criteria: [
      "Kamida 2 ta aralash shart gap ishlatdim (If I had…, I would be… / If I weren't…, I would have…)",
      "Wish yoki if only bilan bitta pushaymon gapi yozdim va o'tgan zamon shaklini to'g'ri tanladim",
      "Must have, might have yoki should have bilan o'tgan haqida taxmin yoki baho berdim",
      "Kamida 4 ta yangi so'z (pivotal, resilient, hindsight, gamble…) va 1 ta yumshatuvchi ibora (perhaps, to some extent) ishlatdim, oxirida If I were you, I'd… bilan maslahat berdim",
    ],
  },
};
