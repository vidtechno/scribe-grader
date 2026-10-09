import type { Exercise } from './types';

/**
 * Extras that come with every unit and go beyond single lessons: what the learner can do afterwards ("can-do"),
 * mistakes Uzbek speakers typically make (with a repair exercise), a short cultural note and a small writing project.
 */
export interface UnitTrap {
  title: string;
  /** Why Uzbek speakers make this mistake and the rule that fixes it. */
  md: string;
  fix: Extract<Exercise, { k: 'fix' }>;
}
export interface UnitExtras {
  canDo: string[];
  traps: UnitTrap[];
  culture: string;
  project: { title: string; prompt: string; criteria: string[] };
}

const trap = (title: string, md: string, wrong: string, a: string[], why?: string): UnitTrap => ({ title, md, fix: { k: 'fix', wrong, a, why } });

export const UNIT_EXTRAS: Record<string, UnitExtras> = {
  u1: {
    canDo: ["Inglizcha alifboni aytaman", "Ismimni harflab ayta olaman", "Salomlashib, xayrlashaman", "0 dan 20 gacha sanayman"],
    traps: [
      trap("th tovushi", "O'zbek tilida *th* tovushi yo'q, shuning uchun uni ko'pincha **s** yoki **t** deb aytamiz. Tilni tishlar orasiga qo'yib ayting: *think*, *three*, *thank*. Aks holda *think* ≈ *sink* bo'lib qoladi.", "I sink so.", ["I think so."], "*think* — th bilan, *sink* — boshqa so'z (cho'kmoq)."),
      trap("Good night — faqat xayrlashuv", "O'zbek tilida *Xayrli tun* kechqurun ham aytilishi mumkin. Inglizchada **Good night** faqat uxlashdan oldin xayrlashishda aytiladi. Kechqurun uchrashganda — **Good evening**.", "Good night, nice to meet you.", ["Good evening, nice to meet you."]),
    ],
    culture: "*How are you?* ko'pincha shunchaki salom: javob odatda qisqa — *Fine, thanks. And you?* Kasalliklar yoki muammolarni so'zlab berish shart emas.",
    project: { title: "Tanishuv suhbati", prompt: "Yangi tanishingiz bilan salomlashuv suhbatini yozing (6–8 qator): salom, ismingiz, ismingizni harflab aytish, hol-ahvol, xayrlashish.", criteria: ["Hello / Hi bilan boshladim", "Ismimni harflab yozdim (M-A-L-I-K-A)", "How are you? / Fine, thanks. ishlatdim", "Xayrlashish bilan tugatdim (Goodbye / See you)"] },
  },
  u2: {
    canDo: ["O'zim va boshqalar haqida am / is / are bilan gapiraman", "Kasb va millatni ayta olaman", "a / an va ko'plikni to'g'ri ishlataman", "this / that, my / your bilan narsalarni ko'rsataman"],
    traps: [
      trap("Hozirgi zamonda 'to be' tushib qolishi", "O'zbek tilida *Men talabaman* deymiz — alohida 'bo'lmoq' fe'li kerak emas. Ingliz tilida esa gapda **am / is / are** majburiy: *She is a teacher.*", "She a teacher.", ["She is a teacher.", "She's a teacher."]),
      trap("he / she farqi", "O'zbekcha *u* ham erkak, ham ayol. Inglizchada esa *he* (erkak) va *she* (ayol) ni ajratish shart.", "My mother is tall. He is a nurse.", ["My mother is tall. She is a nurse.", "My mother is tall. She's a nurse."], "Ona — ayol, demak *she*."),
    ],
    culture: "Ismga murojaat: *Mr* (janob), *Mrs* (turmushga chiqqan ayol), *Ms* (oilaviy holatni ko'rsatmaydi). Noaniq bo'lsa *Ms* xavfsiz tanlov.",
    project: { title: "Men va oilam", prompt: "O'zingiz va bitta oila a'zongiz haqida 6 ta gap yozing: ism, millat, kasb, yosh yoki tashqi belgi.", criteria: ["am / is / are ni tushirib qoldirmadim", "a / an ni kasbdan oldin qo'ydim", "he va she ni to'g'ri ishlatdim", "my / his / her dan foydalandim"] },
  },
  u3: {
    canDo: ["Kun tartibimni aytib bera olaman", "Soatni va sanani ayta olaman", "Odatlarim haqida (always, never…) gapiraman", "Do / Does bilan savol beraman"],
    traps: [
      trap("he / she / it + -s va doesn't", "*He/she/it* dan keyin fe'lga **-s** qo'shiladi (*works*). Inkor va savolda esa **doesn't / does** kelgach fe'l asl holida qoladi (*doesn't like*).", "He don't like tea.", ["He doesn't like tea.", "He does not like tea."]),
      trap("Soat oldidan 'at'", "Aniq soat oldidan **at**, kun oldidan **on**, oy va yil oldidan **in** ishlatiladi: *at 7 o'clock, on Monday, in May.*", "I get up in 7 o'clock.", ["I get up at 7 o'clock.", "I get up at 7."]),
    ],
    culture: "*What do you do?* — kasbingiz nima degani (hozir nima qilyapsiz emas!). Hozirgi harakat haqida *What are you doing?* deb so'raladi.",
    project: { title: "Mening kunim", prompt: "Odatiy kuningizni 6–8 gapda tasvirlang: soat nechada turasiz, nima qilasiz, nima qilmaysiz, nimani hech qachon qilmaysiz.", criteria: ["Kamida 3 ta aniq soatni at bilan yozdim", "always / usually / never dan foydalandim", "Kamida bitta inkor gap yozdim (don't / doesn't)", "He / she holatida -s ni unutmadim"] },
  },
  u4: {
    canDo: ["There is / There are bilan joyni tasvirlayman", "Predloglar (in, on, under…) bilan narsa qayerdaligini aytaman", "can / can't bilan qobiliyat va iltimosni bildiraman", "Hozir nima qilayotganimni ayta olaman"],
    traps: [
      trap("'bor' ni have bilan tarjima qilish", "O'zbekcha *Xonamda krovat bor* deymiz. Inglizchada joyda nimadir mavjudligi **There is / There are** bilan aytiladi, *have* bilan emas.", "In my room have a bed.", ["There is a bed in my room.", "There's a bed in my room."]),
      trap("can dan keyin 'to' yo'q", "**can** dan keyin fe'l o'z holida keladi: *I can swim*, *can to swim* emas.", "I can to swim.", ["I can swim."]),
    ],
    culture: "Iltimos qilganda ingliz tilida *please* va *Can I…?* / *Could you…?* ishlatiladi. *Give me water* qo'pol eshitiladi; *Can I have some water, please?* — odobli.",
    project: { title: "Mening xonam", prompt: "Xonangizni 6 ta gapda tasvirlang: nimalar bor, qayerda joylashgan, hozir nima qilayotgansiz.", criteria: ["There is va There are ikkalasini ishlatdim", "Kamida 2 ta predlog yozdim (next to, under, on…)", "can / can't bilan bitta gap yozdim", "Present Continuous bilan bitta gap yozdim"] },
  },
  u5: {
    canDo: ["Kecha va o'tgan hafta nima bo'lganini aytaman", "To'g'ri va noto'g'ri fe'llarni o'tgan zamonda ishlataman", "Kelajak rejalarimni (going to, will) ayta olaman", "Narsalarni solishtiraman (bigger, the biggest)"],
    traps: [
      trap("Did dan keyin fe'l asl holida", "**did / didn't** o'tgan zamonni o'zi ko'rsatadi, shuning uchun fe'l asl holida qoladi: *I didn't go*, *went* emas.", "I didn't went there.", ["I didn't go there.", "I did not go there."]),
      trap("O'tgan zamonda was / were", "O'zbek tilida *Kecha uyda edim* deymiz. Inglizchada **was / were** kerak, *am* emas.", "Yesterday I am at home.", ["Yesterday I was at home."]),
    ],
    culture: "Dam olish kunlari haqida suhbat odatiy: *How was your weekend?* — *It was great, thanks!* yoki *Not bad.* Qisqa va ijobiy javob kutiladi.",
    project: { title: "Dam olish kunim", prompt: "O'tgan dam olish kuningiz haqida 5 ta gap (o'tgan zamon) va keyingi hafta rejangiz haqida 2 ta gap (going to) yozing.", criteria: ["Kamida 2 ta noto'g'ri fe'lni (went, saw…) to'g'ri ishlatdim", "Bitta inkor gap yozdim (didn't + asl fe'l)", "was / were ni ishlatdim", "going to bilan 2 ta reja yozdim"] },
  },
  u6: {
    canDo: ["O'zimni va boshqalarni tanishtiraman", "Odamning tashqi ko'rinishi va xarakterini tasvirlayman", "Sana va tartib sonlarni aytaman", "Yo'l so'rayman va yo'l ko'rsataman"],
    traps: [
      trap("hair — sanalmaydigan so'z", "Inglizchada *hair* (soch) odatda ko'plikda emas: *long hair*, *hairs* emas. Sochni bitta-bitta emas, butun holda aytamiz.", "She has long hairs.", ["She has long hair.", "She has got long hair."]),
      trap("Shahar oldidan the yo'q", "Shahar va mamlakat nomlari oldidan odatda artikl qo'yilmaydi: *I live in Tashkent.*", "I live in the Tashkent.", ["I live in Tashkent."]),
    ],
    culture: "Yo'l so'rashdan oldin *Excuse me* deyiladi. Notanish odamdan yosh, maosh yoki oilaviy holat haqida so'ramaslik odobli hisoblanadi.",
    project: { title: "Mening do'stim", prompt: "Yaqin do'stingiz yoki oila a'zongizni tasvirlang (6 gap): yoshi, ko'rinishi, xarakteri, qayerda yashashi.", criteria: ["Tashqi ko'rinishni yozdim (tall, long hair…)", "Xarakterni very / quite / really bilan yozdim", "Qayerda yashashini yozdim (artiklsiz shahar nomi)", "Whose yoki mine/yours dan foydalandim"] },
  },
  u7: {
    canDo: ["Nimani yoqtirishimni like/love/hate + -ing bilan aytaman", "Sport va hobbilar haqida gapiraman", "Rejalarimni va takliflarni (would like) bildiraman", "How often / How long savollarini beraman"],
    traps: [
      trap("like dan keyin -ing", "*like, love, hate, enjoy* dan keyin fe'lga **-ing** qo'shiladi: *I like swimming.*", "I like swim.", ["I like swimming."]),
      trap("play / go / do", "Jamoaviy o'yinlar bilan **play** (*play football*), -ing bilan tugaydigan sport bilan **go** (*go swimming*), yakka mashq bilan **do** (*do yoga*).", "I do football every Sunday.", ["I play football every Sunday."]),
    ],
    culture: "Taklifni rad etganda to'g'ridan-to'g'ri *No* deyish qo'pol eshitilishi mumkin: *I'd love to, but I'm busy.* — odobli rad etish.",
    project: { title: "Bo'sh vaqtim", prompt: "Bo'sh vaqtingizda nima qilasiz? 6 ta gap yozing: nimani yoqtirasiz, qanchalik tez-tez, kim bilan, bir hafta uchun rejangiz.", criteria: ["like / love + -ing ishlatdim", "Kamida bitta play / go / do bilan gap yozdim", "How often javobini yozdim (twice a week…)", "I'd like to… bilan taklif yoki reja yozdim"] },
  },
  u8: {
    canDo: ["Kafe va do'konda buyurtma beraman", "Miqdorni (a lot of, a little, a few) to'g'ri ishlataman", "Narx va pulni so'rayman va aytaman", "Retsept va maslahat (should) beraman"],
    traps: [
      trap("much / many", "Sanalmaydigan so'zlar (*money, water, milk*) bilan **much / a little**, sanaladiganlar bilan **many / a few** ishlatiladi.", "How many money do you have?", ["How much money do you have?"]),
      trap("a few yoki a little", "*milk, water, sugar* sanalmaydi, shuning uchun **a little**: *a little milk*. *a few* faqat sanaladigan ko'plik bilan (*a few apples*).", "I drink a few milk.", ["I drink a little milk."]),
    ],
    culture: "AQShda restoranda hisobning 15–20% miqdorida choy-chaqa (*tip*) qoldirish odat; ko'p boshqa mamlakatlarda xizmat haqi allaqachon hisobga qo'shilgan bo'lishi mumkin — hisobni tekshirib ko'ring.",
    project: { title: "Kafeda yoki retsept", prompt: "Yoki kafedagi buyurtma dialogini (8 qator), yoki sevimli taomingiz retseptini yozing (first, then, after that, finally).", criteria: ["Narx yoki miqdorni to'g'ri ifodaladim", "a little / a few ni to'g'ri ishlatdim", "Odobli so'zlar: Can I have…, please, thank you", "Tartib so'zlari: first, then, finally"] },
  },
  u9: {
    canDo: ["O'tmishdagi voqealarni hikoya qilaman", "Wh-savollarni o'tgan zamonda beraman", "Hayot yo'lim haqida gapiraman", "Gaplarni and, but, so, because bilan bog'layman"],
    traps: [
      trap("ago gap oxirida", "O'zbekcha *ikki yil oldin* deymiz, ingliz tilida esa **two years ago** — vaqt so'zi *ago* gapda oldin emas, davrdan keyin keladi va *before* ishlatilmaydi.", "I went to Samarkand before two years.", ["I went to Samarkand two years ago."]),
      trap("Tug'ilgan yil oldidan in", "Yil, oy va fasl oldidan **in** keladi: *in 1995, in May, in summer*.", "She was born at 1995.", ["She was born in 1995."]),
    ],
    culture: "*Holiday* — Britaniyada ta'til, AQShda esa *vacation*. *Holiday* AQShda ko'proq bayram kuniga aytiladi.",
    project: { title: "Eslab qolarli sayohat", prompt: "Esda qolgan sayohat yoki bayramingiz haqida 7 ta gap yozing (o'tgan zamon). Qayerga bordingiz, kim bilan, nima qildingiz, nega yoqdi?", criteria: ["ago yoki last bilan vaqt ko'rsatdim", "Kamida 3 ta noto'g'ri fe'l ishlatdim", "because bilan sabab yozdim", "and / but / so bilan gaplarni bog'ladim"] },
  },
  u10: {
    canDo: ["Aeroport va mehmonxonada muammosiz muomala qilaman", "Ob-havo haqida gapiraman", "Shifokorga nima bezovta qilayotganini aytaman", "Qoida va majburiyatlarni (must, have to) ayta olaman"],
    traps: [
      trap("Kasallikda a / an", "*headache, cold, cough, sore throat* kabi so'zlarda ko'pincha **a** ishlatiladi: *I have a headache.*", "I have headache.", ["I have a headache."]),
      trap("mustn't va don't have to", "**mustn't** — taqiqlangan; **don't have to** — shart emas. Bu ikkalasi butunlay boshqa ma'noda!", "You mustn't buy a ticket, it's free.", ["You don't have to buy a ticket, it's free.", "You do not have to buy a ticket, it's free."], "Chipta bepul, ya'ni olish shart emas — *don't have to*."),
    ],
    culture: "Ob-havo haqida gapirish ingliz tilidagi eng odatiy kichik suhbat: *Nice weather today, isn't it?* — suhbatni boshlashning xavfsiz usuli.",
    project: { title: "Do'stga xabar", prompt: "Sayohat paytida do'stingizga qisqa xabar yozing (6 gap): qayerdasiz, ob-havo qanday, nima qilyapsiz, ertaga nima qilmoqchisiz.", criteria: ["Ob-havoni tasvirladim", "Present Continuous bilan hozirgi ishni yozdim", "will yoki going to bilan reja yozdim", "Salomlashish va xayrlashish bilan yozdim"] },
  },
  u11: {
    canDo: ["Hayotimdagi tajribalar haqida (Have you ever…?) gapiraman", "Present Perfect va Past Simple farqini bilaman", "want to / enjoy -ing kabi birikmalarni to'g'ri ishlataman", "Kundalik phrasal verblarni tushunaman"],
    traps: [
      trap("Present Perfect + aniq vaqt", "**yesterday, last week, in 2020** kabi aniq vaqt bilan faqat **Past Simple** ishlatiladi. Present Perfect aniq vaqtsiz tajribani bildiradi.", "I have seen him yesterday.", ["I saw him yesterday."]),
      trap("enjoy + -ing", "*enjoy, finish, mind* dan keyin fe'l **-ing** shaklida keladi, *to* bilan emas.", "I enjoy to read.", ["I enjoy reading."]),
    ],
    culture: "*Have you ever been to…?* — begonalar bilan suhbatni boshlash uchun yaxshi savol: tajribadan so'z ochiladi va javobdan keyin odatda *Past Simple* bilan tafsilot aytiladi.",
    project: { title: "Mening tajribalarim", prompt: "5 ta tajribangiz haqida yozing: kamida 3 ta *I have…*, 1 ta *I have never…*, va bittasi haqida batafsil o'tgan zamonda.", criteria: ["I have + 3-shakl ishlatdim", "I have never… yozdim", "Tafsilotni Past Simple da yozdim", "been va gone ni adashtirmadim"] },
  },
  u12: {
    canDo: ["Voqealarni ketma-ket hikoya qilaman", "Past Simple va Past Continuous ni ajrata olaman", "Avvalgi odatlarimni (used to) aytaman", "Sabab va qarama-qarshilikni bildiraman"],
    traps: [
      trap("when + Past Simple (qisqa voqea)", "Davom etayotgan harakat (*was watching*) fonida qisqa voqea sodir bo'lsa, qisqa voqea **Past Simple** da bo'ladi.", "I was watching TV when he was calling.", ["I was watching TV when he called."]),
      trap("although ... but", "O'zbekchada *garchi... lekin* deymiz. Inglizchada **although** va **but** birga ishlatilmaydi — bittasi yetarli.", "Although he was tired, but he continued.", ["Although he was tired, he continued.", "He was tired, but he continued."]),
    ],
    culture: "Hikoya boshlash uchun tabiiy iboralar: *You won't believe what happened!* yoki *Guess what!* — tinglovchining e'tiborini tortadi.",
    project: { title: "Qiziq voqea", prompt: "Hayotingizdagi bitta qiziqarli yoki kulgili voqeani 7–8 gapda hikoya qiling.", criteria: ["Fon uchun Past Continuous ishlatdim", "Asosiy voqealar Past Simple da", "because / so / but / although dan foydalandim", "Boshlanish va yakun bor (first, then, finally)"] },
  },
  u13: {
    canDo: ["Reja va qarorlarni (going to, will) farqlab aytaman", "Ehtimolni (may, might) bildiraman", "First conditional gap tuzaman", "Uchrashuv va rejalar belgilayman"],
    traps: [
      trap("if dan keyin will yo'q", "**if** dan keyingi qismda kelajak ham oddiy hozirgi zamon bilan aytiladi: *If it rains, I will stay home.*", "If it will rain, I will stay at home.", ["If it rains, I will stay at home."]),
      trap("may / might dan keyin to yo'q", "**may / might** modal fe'l: dan keyin *to* qo'yilmaydi.", "I may to be late.", ["I may be late."]),
    ],
    culture: "Rejalar haqida: *Let's…*, *How about…?*, *Shall we…?* — taklif qilish. *I'll see* yoki *Maybe* ko'pincha muloyim 'yo'q' ma'nosini ham beradi.",
    project: { title: "Kelasi hafta rejalarim", prompt: "Kelasi hafta rejalari haqida 7 ta gap yozing: aniq rejalar, ehtimoliy ishlar va shartli gaplar.", criteria: ["going to bilan 2 ta reja", "will bilan qaror yoki va'da", "may / might bilan ehtimol", "If + hozirgi zamon, will + fe'l gapi"] },
  },
  u14: {
    canDo: ["Narsa va odamlarni solishtiraman", "Eng yaxshi/yomonini (superlative) aytaman", "too va enough ni to'g'ri ishlataman", "Ikki shahar yoki odamni taqqoslab yozaman"],
    traps: [
      trap("Ikkita qiyoslash belgisi", "Qisqa sifat: **-er** (*taller*), uzun sifat: **more** (*more expensive*). Ikkalasini birga ishlatib bo'lmaydi.", "He is more taller than me.", ["He is taller than me."]),
      trap("enough sifatdan keyin", "**enough** sifatdan keyin keladi: *big enough*; **too** sifatdan oldin: *too big*.", "This bag is enough big.", ["This bag is big enough."]),
    ],
    culture: "Ingliz tilida odamning yoshi yoki vazni haqida to'g'ridan-to'g'ri baho berish odobsizlik hisoblanadi. Yumshoqroq ifodalar yoki umuman aytmaslik tavsiya etiladi.",
    project: { title: "Ikki shahar", prompt: "Ikki shahar (yoki ikki do'st)ni 6–7 gapda taqqoslang: kattaligi, narxi, ob-havosi, qaysi biri yaxshiroq.", criteria: ["Qisqa va uzun sifatda qiyoslash ishlatdim", "Superlative (the biggest…) ishlatdim", "as … as yoki too / enough ishlatdim", "Oxirida o'z fikrimni yozdim"] },
  },
  u15: {
    canDo: ["Majburiyat va maslahatni (must, have to, should) ayta olaman", "Odobli iltimos va takliflar bildiraman", "Yo'l ko'rsataman va shifokorda nima bezovta qilishini aytaman", "Belgilar va qoidalarni tushunaman"],
    traps: [
      trap("should dan keyin to yo'q", "**should** ham modal: *should see*, *should to see* emas.", "You should to see a doctor.", ["You should see a doctor."]),
      trap("Modal o'tgan zamonda", "**can** ning o'tgan zamoni — **could**: *couldn't come*. *can't* + o'tgan vaqt noto'g'ri.", "Yesterday I can't come to the lesson.", ["Yesterday I couldn't come to the lesson."]),
    ],
    culture: "Britaniya madaniyatida *please, sorry, thank you* juda ko'p ishlatiladi. *Could you…?* va *Would you mind…?* — muloyim iltimos shakllari.",
    project: { title: "Maslahat va qoidalar", prompt: "Do'stingiz tez-tez kechikadi va charchaydi. Unga 3 ta maslahat bering (should), 2 ta qoida (must / have to) va bitta odobli iltimos yozing.", criteria: ["should / shouldn't ishlatdim", "must va have to ni to'g'ri ajratdim", "Could you…? bilan iltimos yozdim", "Modal fe'ldan keyin to qo'ymadim"] },
  },
  u16: {
    canDo: ["Present Perfect va Past Simple ni to'g'ri tanlayman", "for va since bilan davomiylikni ayta olaman", "who / which / that bilan gapni murakkablashtiraman", "Rasmiy va norasmiy email yozaman"],
    traps: [
      trap("since bilan Present Perfect", "*since 2020* kabi hozirgacha davom etayotgan holat **Present Perfect** talab qiladi: *I have lived here since 2020.*", "I live here since 2020.", ["I have lived here since 2020.", "I've lived here since 2020."]),
      trap("who bilan ortiqcha olmosh", "**who / which** o'zi egaga ishora qiladi, shuning uchun *he/she* qayta qo'yilmaydi.", "The man who he lives next door is a doctor.", ["The man who lives next door is a doctor."]),
    ],
    culture: "Emailda: *Dear Mr Smith,* — rasmiy; *Hi Sam,* — norasmiy. Yakunda: *Best wishes* (do'stona), *Kind regards* (ishbilarmon), *Yours sincerely* (ismi ma'lum odamga) va *Yours faithfully* (*Dear Sir or Madam* ga).",
    project: { title: "Email yozish", prompt: "Xorijiy do'stingizga 7–8 gapdan iborat email yozing: salomlashing, so'nggi yangiliklaringizni ayting, bitta savol bering va xayrlashing.", criteria: ["Mos salomlashish va xayrlashish (Dear/Hi, Best wishes)", "Present Perfect yoki for / since ishlatdim", "who / which bilan gap yozdim", "Savol bilan tugatdim"] },
  },
  u17: {
    canDo: ["Ish suhbatida o'zimni tanishtiraman", "Do'konda, mehmonxonada va restoranda muammosiz muomala qilaman", "Qisqa CV va xabar yozaman", "Texnologiya haqida gapiraman"],
    traps: [
      trap("-ed va -ing sifatlar", "**-ed** — his-tuyg'u (*interested, bored*), **-ing** — narsaning o'zi (*interesting, boring*): *I am interested in music.*", "I am interesting in music.", ["I am interested in music."]),
      trap("agree fe'l", "O'zbekcha *roziman* deymiz, shu sababli *am agree* deb xato qilamiz. **agree** — fe'l: *I agree with you.*", "I am agree with you.", ["I agree with you."]),
    ],
    culture: "AQSH va Buyuk Britaniyada rezyumega odatda surat, yosh va oilaviy holat yozilmaydi. Ish suhbatida *Tell me about yourself* savoliga qisqa, aniq va misolli javob kutiladi.",
    project: { title: "Qisqa CV", prompt: "O'zingiz haqingizda 7 ta gapdan iborat qisqa CV-xulosa yozing: ta'lim, tajriba, ko'nikmalar, kuchli tomonlar va maqsad.", criteria: ["Ta'limni va tajribani yozdim", "Kamida 2 ta ko'nikmani yozdim (I can…)", "-ed / -ing sifatlarni to'g'ri ishlatdim", "Maqsadimni I'd like to… bilan yozdim"] },
  },
};
