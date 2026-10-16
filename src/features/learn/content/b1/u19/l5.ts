import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u19-l5",
  title: "News and media",
  titleUz: "Yangiliklar va ommaviy axborot: so'zlar va sarlavhalar",
  goal: "Yangiliklar va ommaviy axborot lug'atini (**headline, journalist, source, reliable, rumour…**) o'rganasiz, **sarlavhalarning qisqa uslubini** tushunasiz va xabarning ishonchli yoki ishonchsiz ekanini ayta olasiz.",
  slides: [
    {
      title: "Yangiliklar dunyosi",
      blocks: [
        { t: "p", md: "Har kuni yangiliklarni o'qiymiz, tinglaymiz va ko'ramiz: telefonda, televizorda, radioda. Inglizchada bularning hammasi **the media** (ommaviy axborot vositalari) deyiladi. Avval asosiy so'zlarni ko'rib chiqamiz." },
        {
          t: "table", head: ["So'z", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["a journalist", "jurnalist", "She is a journalist for a local newspaper."],
            ["an editor", "muharrir", "The editor checks every article."],
            ["a presenter", "ko'rsatuv boshlovchisi", "The presenter reads the evening news."],
            ["a headline", "sarlavha", "The headline says that prices are going up."],
            ["an article", "maqola", "I read an interesting article about robots."],
            ["a source", "manba", "The journalist never tells the name of her source."],
          ],
        },
        { t: "tip", tone: "info", md: "**Media** so'zi asli ko'plik, lekin zamonaviy inglizchada ko'pincha birlik kabi ham ishlatiladi: *The media is very powerful.* Ikkala variant ham uchraydi, siz uchun muhimi — ma'nosini bilish." },
        { t: "check", ex: { k: "choice", q: "Gazeta sahifasining tepasidagi katta yozuv nima deyiladi?", opts: ["a headline", "a source", "a presenter", "a witness"], a: 0, why: "**Headline** — maqolaning katta harflardagi sarlavhasi." } },
      ],
    },
    {
      title: "Yangilikni aytish va tarqatish",
      blocks: [
        { t: "p", md: "Yangiliklar haqida gaplashganda quyidagi fe'llar va birikmalar juda ko'p uchraydi:" },
        {
          t: "examples", items: [
            { en: "The newspaper published the story on Monday.", uz: "Gazeta bu hikoyani dushanba kuni chop etdi.", note: "**publish** — nashr qilmoq, chop etmoq." },
            { en: "The TV channel broadcasts the news every evening.", uz: "Telekanal yangiliklarni har kuni kechqurun efirga uzatadi.", note: "**broadcast** — efirga uzatmoq (radio va televizor)." },
            { en: "The story was in all the papers.", uz: "Bu hikoya barcha gazetalarda bor edi." },
            { en: "Breaking news: a bridge has closed in the city centre.", uz: "Shoshilinch xabar: shahar markazidagi ko'prik yopildi.", note: "**breaking news** — hozirgina sodir bo'lgan yangilik." },
            { en: "A witness told the police what she had seen.", uz: "Guvoh politsiyaga ko'rganlarini aytib berdi.", note: "**witness** — voqeani o'z ko'zi bilan ko'rgan odam." },
          ],
        },
        { t: "tip", tone: "info", md: "Oldingi darslardagi ko'chirma gapni eslang: yangiliklarda ko'pincha **kimdir nima degani** aytiladi. *The mayor said that the road would reopen soon.* Bunday gaplar yangilik tilining asosi." },
        { t: "check", ex: { k: "fill", q: "The radio station will ___ a new programme next week. (efirga uzatmoq)", a: ["broadcast"], why: "Radio va televizor uchun: **broadcast**." } },
        { t: "check", ex: { k: "choice", q: "Who is a witness?", opts: ["A person who saw an event", "A person who writes headlines", "A person who reads the news on TV", "A person who owns a newspaper"], a: 0, why: "**Witness** — voqeani ko'rgan guvoh." } },
      ],
    },
    {
      title: "Sarlavhalar tili",
      blocks: [
        { t: "p", md: "Gazeta sarlavhalari **qisqa** bo'ladi: joy tejash uchun ba'zi so'zlar tushirib qoldiriladi. Shuning uchun sarlavha oddiy gapga o'xshamaydi. Mana asosiy qoidalar:" },
        {
          t: "table", head: ["Qoida", "Sarlavha", "Oddiy gap"], speak: [1, 2],
          rows: [
            ["Artikllar tushiriladi", "Mayor opens new bridge", "The mayor has opened a new bridge."],
            ["O'tgan voqea uchun Present Simple", "Thieves steal rare painting", "Thieves have stolen a rare painting."],
            ["Kelasi zamon uchun to + fe'l", "Prices to rise next month", "Prices will rise next month."],
            ["Majhul nisbat: faqat V3", "Man rescued from river", "A man was rescued from a river."],
            ["Qisqa so'zlar", "Mayor to quit", "The mayor is going to leave his job."],
          ],
        },
        { t: "tip", tone: "warn", md: "Sarlavhada **Present Simple** o'tgan voqeani bildirishi mumkin. Bu faqat sarlavhaga xos. Maqola matnida o'tgan voqea uchun oddiy o'tgan zamon ishlatiladi: *Thieves stole a rare painting last night.*" },
        { t: "check", ex: { k: "choice", q: "Which headline is about the FUTURE?", opts: ["Team wins final", "Shop to open on Friday", "Woman found safe", "Driver stops car"], a: 1, why: "**to + fe'l** sarlavhada kelasi zamonni bildiradi: *Shop to open* = *The shop will open*." } },
        { t: "check", ex: { k: "tf", q: "The headline \"Man rescued from river\" means that somebody rescued a man.", a: true, why: "**rescued** — V3, majhul nisbat: *A man was rescued from the river.*" } },
      ],
    },
    {
      title: "Ishonchli yoki ishonchsiz?",
      blocks: [
        { t: "p", md: "Hamma yangilik ham to'g'ri emas. Ba'zan odamlar tasdiqlanmagan gap tarqatadi. Xabarning qanchalik ishonchli ekanini aytish uchun quyidagi so'zlar kerak bo'ladi:" },
        {
          t: "table", head: ["So'z yoki ibora", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["reliable", "ishonchli", "This website is a reliable source of news."],
            ["a rumour", "mish-mish", "There is a rumour that the shop will close."],
            ["fake news", "yolg'on xabarlar", "Fake news spreads quickly online."],
            ["according to", "...ga ko'ra", "According to the report, the road is closed."],
            ["to check", "tekshirmoq", "Always check the facts before you share a story."],
          ],
        },
        {
          t: "compare",
          good: { title: "Yaxshi odat", items: ["I checked the source before I shared it.", "According to the police, nobody was hurt.", "That website is reliable."] },
          bad: { title: "Xavfli odat", items: ["I believed the rumour at once.", "I shared the story without reading it.", "Everybody says it, so it must be true."] },
        },
        { t: "tip", tone: "good", md: "**Rumour** — inglizcha yozilishi (British): *rumour*. Amerika yozuvida *rumor*. Ikkalasi ham to'g'ri, lekin bir matnda bittasini tanlang." },
        { t: "check", ex: { k: "fill", q: "Don't believe everything online. Some websites are not ___. (ishonchli)", a: ["reliable"], why: "**reliable** — ishonchli, tayanch bo'ladigan." } },
        { t: "check", ex: { k: "choice", q: "\"People are saying that the museum will close, but nobody has checked it.\" This is a ___.", opts: ["rumour", "headline", "broadcast", "witness"], a: 0, why: "Tasdiqlanmagan gap — **rumour** (mish-mish)." } },
      ],
    },
    {
      title: "O'qing: yangilik xabari",
      blocks: [
        {
          t: "text", title: "A news report", voice: "emma",
          en: "Breaking news from the town of Rivermouth. Last night a small fire started in the old market. According to the fire service, nobody was hurt. A witness, Mr Hall, told our reporter that he had heard a loud noise before he saw the smoke. The firefighters arrived within ten minutes and put out the fire. Earlier today there was a rumour that the whole market would close for a year, but the mayor said that this was not true. The market will open again on Saturday. We will bring you more news later this evening.",
          uz: "Rivermaut shahridan shoshilinch xabar. Kecha kechqurun eski bozorda kichik yong'in boshlandi. Yong'in xizmatining aytishicha, hech kim jabrlanmadi. Guvoh janob Xoll muxbirimizga tutunni ko'rishdan oldin baland shovqinni eshitganini aytdi. O't o'chiruvchilar o'n daqiqa ichida yetib kelib, yong'inni o'chirishdi. Bugun ertaroq butun bozor bir yilga yopiladi degan mish-mish tarqaldi, lekin shahar hokimi bu to'g'ri emasligini aytdi. Bozor shanba kuni yana ochiladi. Bugun kechqurun yangi xabarlarni yetkazamiz.",
        },
        { t: "check", ex: { k: "tf", q: "The market will close for a year.", a: false, why: "Bu faqat **mish-mish** edi. Hokim to'g'ri emasligini aytdi; bozor shanba kuni ochiladi." } },
        { t: "check", ex: { k: "choice", q: "What did Mr Hall hear before he saw the smoke?", opts: ["A loud noise", "A rumour", "The mayor", "A broadcast"], a: 0, why: "Matnda: *he had heard a loud noise before he saw the smoke*." } },
      ],
    },
    {
      title: "Dialog: Bu rostmi?",
      blocks: [
        {
          t: "dialog", lines: [
            { who: "Sara", en: "Did you see the headline this morning? Apparently the bus station will close.", uz: "Bugun ertalab sarlavhani ko'rdingmi? Aytishlaricha, avtovokzal yopiladi." },
            { who: "Tom", en: "Where did you read that?", uz: "Buni qayerda o'qiding?" },
            { who: "Sara", en: "A friend sent me a link. It was on a website I don't know.", uz: "Bir do'stim havola yubordi. Men tanimaydigan saytda edi." },
            { who: "Tom", en: "Be careful. It might be fake news. Who is the source?", uz: "Ehtiyot bo'l. Bu yolg'on xabar bo'lishi mumkin. Manbasi kim?" },
            { who: "Sara", en: "It doesn't say. There is no journalist's name.", uz: "Yozilmagan. Jurnalistning ismi ham yo'q." },
            { who: "Tom", en: "Then let's check a reliable site. The city council always publishes official news on its page.", uz: "Unda ishonchli saytni tekshiramiz. Shahar kengashi rasmiy yangiliklarni doim o'z sahifasida e'lon qiladi." },
            { who: "Sara", en: "You are right. I'll look at the official page before I tell anyone.", uz: "Haqsan. Hammaga aytishdan oldin rasmiy sahifani ko'raman." },
          ],
        },
        { t: "check", ex: { k: "choice", q: "Why does Tom think the story might be fake?", opts: ["There is no source or journalist's name.", "The headline is too short.", "The story is about a bus.", "Sara read it in a newspaper."], a: 0, why: "Maqolada **manba** ham, jurnalist ismi ham yo'q edi." } },
      ],
    },
  ],
  words: [
    { en: "headline", uz: "sarlavha", ipa: "ˈhed.laɪn", pos: "noun", ex: "The headline on the front page caught my eye.", exUz: "Birinchi sahifadagi sarlavha e'tiborimni tortdi." },
    { en: "newspaper", uz: "gazeta", ipa: "ˈnjuːzˌpeɪ.pər", pos: "noun", ex: "My father reads the newspaper every morning.", exUz: "Dadam har kuni ertalab gazeta o'qiydi." },
    { en: "editor", uz: "muharrir", ipa: "ˈed.ɪ.tər", pos: "noun", ex: "The editor decided to change the headline.", exUz: "Muharrir sarlavhani o'zgartirishga qaror qildi." },
    { en: "broadcast", uz: "efirga uzatmoq; teleko'rsatuv", ipa: "ˈbrɔːd.kɑːst", pos: "verb", ex: "The match will be broadcast live on Saturday.", exUz: "O'yin shanba kuni jonli efirda ko'rsatiladi." },
    { en: "source", uz: "manba", ipa: "sɔːs", pos: "noun", ex: "A good journalist always checks the source.", exUz: "Yaxshi jurnalist har doim manbani tekshiradi." },
    { en: "fake", uz: "soxta, yolg'on", ipa: "feɪk", pos: "adj", ex: "That story is fake, so don't share it.", exUz: "Bu xabar yolg'on, uni tarqatmang." },
    { en: "coverage", uz: "yoritish (ommaviy axborotda)", ipa: "ˈkʌv.ər.ɪdʒ", pos: "noun", ex: "The coverage of the election was very detailed.", exUz: "Saylovning yoritilishi juda batafsil edi." },
    { en: "bias", uz: "tarafkashlik", ipa: "ˈbaɪ.əs", pos: "noun", ex: "Some readers noticed bias in the report.", exUz: "Ba'zi o'quvchilar hisobotda tarafkashlikni payqashdi." },
    { en: "viewer", uz: "tomoshabin", ipa: "ˈvjuː.ər", pos: "noun", ex: "Millions of viewers watched the final.", exUz: "Millionlab tomoshabin finalni ko'rdi." },
    { en: "breaking news", uz: "shoshilinch xabar", ipa: "ˈbreɪ.kɪŋ njuːz", pos: "phrase", ex: "We interrupt this programme for some breaking news.", exUz: "Dasturni shoshilinch xabar uchun to'xtatamiz." },
  ],
  practice: [
    { k: "match", pairs: [["headline", "sarlavha"], ["journalist", "jurnalist"], ["source", "manba"], ["witness", "guvoh"], ["rumour", "mish-mish"], ["reliable", "ishonchli"]] },
    { k: "choice", q: "The newspaper ___ the story on its front page.", opts: ["published", "witnessed", "rumoured", "reliable"], a: 0, why: "Gazeta hikoyani chop etdi: **published**." },
    { k: "choice", q: "Which headline uses the style of a newspaper?", opts: ["Mayor opens new school", "The mayor is opening a new school now", "A mayor, he opened a new school", "Mayor, he opens the new school"], a: 0, why: "Sarlavhada artikl yo'q va gap qisqa: *Mayor opens new school*." },
    { k: "listen", say: "There is a rumour that the film starts later.", opts: ["There is a rumour that the film starts later.", "There is a headline that the film starts later.", "There was a witness at the film.", "There is a source for the film."], a: 0, why: "**rumour** — mish-mish." },
    { k: "fill", q: "The TV channel will ___ the concert live. (efirga uzatmoq)", a: ["broadcast"], why: "Televizor uchun: **broadcast**." },
    { k: "fill", q: "A ___ saw the accident and called the police. (guvoh)", a: ["witness"], why: "Voqeani ko'rgan odam — **witness**." },
    { k: "fill", q: "I don't think this site is ___. It has many mistakes.", a: ["reliable"], why: "Ishonchsiz sayt → *not reliable*." },
    { k: "order", uz: "Narxlar kelasi oy ko'tariladi (sarlavha).", words: ["Prices", "to", "rise", "next", "month"], extra: ["been", "were"], why: "Sarlavhada kelasi zamon: **to + fe'l**." },
    { k: "order", uz: "Jurnalist har doim manbasini tekshiradi.", words: ["The", "journalist", "always", "checks", "her", "source."], extra: ["witness", "publish"], why: "Present Simple: *always checks*." },
    { k: "translate", uz: "Bu shoshilinch xabar.", a: ["This is breaking news.", "It is breaking news.", "It's breaking news."], why: "**breaking news** — sanalmaydigan ot, *a* bo'lmaydi." },
    { k: "translate", uz: "Hisobotga ko'ra, yo'l yopiq.", a: ["According to the report, the road is closed.", "According to the report the road is closed.", "The road is closed, according to the report."], why: "**According to** + manba." },
    { k: "tf", q: "In a headline, the Present Simple can describe a past event.", a: true, why: "Sarlavhada: *Thieves steal painting* — o'tgan voqea." },
    { k: "tf", q: "A rumour is always true.", a: false, why: "**Rumour** — tasdiqlanmagan gap, to'g'ri bo'lmasligi mumkin." },
    { k: "fix", wrong: "This is a breaking news.", a: ["This is breaking news.", "That is breaking news.", "It is breaking news.", "It's breaking news."], hint: "News sanalmaydi", why: "**News** sanalmaydigan ot: *a news* deyilmaydi." },
    { k: "dictation", say: "Always check the source of a story.", why: "**source** — manba." },
    { k: "speak", say: "The journalist published an article about the rumour.", uz: "Jurnalist mish-mish haqida maqola chop etdi." },
  ],
  quiz: [
    { k: "choice", q: "The ___ at the top of the page was very big.", opts: ["headline", "witness", "rumour", "source"], a: 0, why: "Sahifa tepasidagi yozuv — **headline**." },
    { k: "choice", q: "Which word means \"ishonchli\"?", opts: ["reliable", "breaking", "broadcast", "article"], a: 0, why: "**reliable** — ishonchli." },
    { k: "choice", q: "\"Shop to close\" means:", opts: ["The shop will close.", "The shop closed yesterday.", "The shop is closing a person.", "Somebody closes a shop."], a: 0, why: "Sarlavhada **to + fe'l** kelasi zamonni bildiradi." },
    { k: "fill", q: "A good journalist always checks his ___. (manba)", a: ["source"], why: "Axborot olingan joy — **source**." },
    { k: "fill", q: "___ to the weather service, it will rain on Sunday.", a: ["According"], why: "**According to** + manba." },
    { k: "fill", q: "Don't believe that story. It is only a ___.", a: ["rumour", "rumor"], why: "Tasdiqlanmagan gap — **rumour** (AQSH: rumor)." },
    { k: "listen", say: "A witness spoke to the journalist.", opts: ["A witness spoke to the journalist.", "A witness spoke to the presenter.", "A reporter spoke to the witness.", "A source spoke to the journalist."], a: 0, why: "Eshitilgan gap: *A witness spoke to the journalist.*" },
    { k: "tf", q: "\"Breaking news\" is old news from last year.", a: false, why: "**Breaking news** — hozirgina sodir bo'lgan yangilik." },
    { k: "order", uz: "Kanal yangiliklarni har kuni efirga uzatadi.", words: ["The", "channel", "broadcasts", "the", "news", "every", "day."], extra: ["broadcasting", "were"], why: "Uchinchi shaxs birlik: *broadcasts*." },
    { k: "translate", uz: "Men maqolani o'qidim.", a: ["I read the article.", "I read an article.", "I have read the article."], why: "**article** — maqola." },
  ],
  summary: [
    "Asosiy so'zlar: **headline** (sarlavha), **journalist**, **article**, **source** (manba), **witness** (guvoh), **publish** (chop etmoq), **broadcast** (efirga uzatmoq).",
    "**Sarlavha uslubi**: artikl tushiriladi, o'tgan voqea uchun Present Simple (*Thieves steal painting*), kelasi zamon uchun **to + fe'l** (*Shop to open*), majhul nisbat uchun faqat V3 (*Man rescued*).",
    "**News** — sanalmaydigan ot: ~~a news~~ emas, **some news** yoki **a piece of news**; *breaking news* — shoshilinch xabar.",
    "Ishonchlilik: **reliable** (ishonchli), **rumour** (mish-mish), **fake news**, **according to** + manba. Ulashishdan oldin manbani tekshiring.",
  ],
  homework: "Bugun o'qigan bitta yangilikning sarlavhasini toping. Uni oddiy to'liq gapga aylantiring (artikllarni va to'g'ri zamonni qo'shing). Keyin shu yangilikning manbasi ishonchli yoki yo'qligini 2 gapda yozing: *The source is reliable because…*",
};

export default lesson;
