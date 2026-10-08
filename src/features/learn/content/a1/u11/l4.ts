import type { Lesson } from '../../../types';

const lesson: Lesson = {
  id: "u11-l4",
  title: "Prepositions of movement",
  titleUz: "Harakat predloglari: into, across, along…",
  goal: "Harakat yo'nalishini aniq aytasiz: **into, out of, up, down, across, along, through, over, under, past, towards, around**. Yo'l ko'rsatasiz va sayr haqida gapirasiz: *Go **along** the river, **across** the bridge and **through** the park.*",
  slides: [
    {
      title: "Joy yoki harakat?",
      blocks: [
        { t: "p", md: "Siz **joy predloglarini** bilasiz: *in, on, under, next to* — narsa **qayerda turibdi**. Bugun **harakat predloglari** — kimdir yoki nimadir **qayoqqa harakatlanyapti**. Ular odatda harakat fe'llari bilan keladi: *go, walk, run, drive, swim, climb, jump, fly*." },
        {
          t: "table", head: ["Joy (qayerda?)", "Harakat (qayoqqa?)", "O'zbekcha"], speak: [0, 1],
          rows: [
            ["The cat is in the box.", "The cat jumped into the box.", "qutida / qutiga (ichiga)"],
            ["He's in the shop.", "He came out of the shop.", "do'konda / do'kondan (chiqdi)"],
            ["The book is on the table.", "She put the book onto the table.", "stolda / stol ustiga"],
          ],
        },
        { t: "tip", tone: "info", md: "O'zbek tilida yo'nalishni **qo'shimchalar** ko'rsatadi: uy**ga**, uy**dan**, uy**ning ichiga**. Ingliz tilida esa so'z **oldidan** predlog keladi: **into** the house (uyga, ichkariga), **out of** the house (uydan tashqariga). **out of** — ikki so'z, birga ishlatiladi!" },
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["She ran out of the room.", "He walked into the kitchen.", "Come into the house!"] },
          bad: { title: "Xato", items: ["She ran from out the room.", "He walked into to the kitchen.", "Come to inside the house!"] },
        },
        { t: "check", ex: { k: "choice", q: "\"Bola uydan yugurib chiqdi.\"", opts: ["The boy ran out of the house.", "The boy ran into the house.", "The boy ran out from of the house.", "The boy ran of the house."], a: 0, why: "Ichkaridan tashqariga — **out of**." } },
      ],
    },
    {
      title: "up, down, across, along, through",
      blocks: [
        {
          t: "table", head: ["Predlog", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["up", "yuqoriga", "We climbed up the hill."],
            ["down", "pastga", "She ran down the stairs."],
            ["across", "bir tomondan narigi tomonga (kesib o'tib)", "He swam across the river."],
            ["along", "bo'ylab (uzunasiga)", "We walked along the river."],
            ["through", "orqali, ichidan o'tib", "The train went through a tunnel."],
            ["over", "ustidan (oshib)", "The horse jumped over the wall."],
            ["under", "ostidan", "The boat went under the bridge."],
          ],
        },
        { t: "tip", tone: "good", md: "Farqni rasm bilan tasavvur qiling:\n• **across** the street — ko'chani **kesib o'tdim** (bir chetidan ikkinchisiga).\n• **along** the street — ko'cha **bo'ylab** yurdim (uzunasiga).\n• **through** the park — park **ichidan** o'tdim (atrofimda daraxtlar)." },
        {
          t: "sounds", items: [
            { label: "through", say: "through", uz: "**\"thru:\"** — *th* tilni tishlar orasiga qo'yib. *throw* (\"throu\") bilan adashtirmang.", examples: ["through", "through the park", "throw"] },
            { label: "across", say: "across", uz: "**\"ə'kros\"** — urg'u 2-bo'g'inda: a-**CROSS**.", examples: ["across", "across the road"] },
            { label: "along", say: "along", uz: "**\"ə'long\"** — urg'u 2-bo'g'inda; oxiridagi *g* deyarli eshitilmaydi.", examples: ["along", "along the river"] },
          ],
        },
        { t: "check", ex: { k: "choice", q: "The train went ___ a long tunnel.", opts: ["through", "across", "under", "over"], a: 0, why: "Tunnel **ichidan** o'tdi → **through**." } },
        { t: "check", ex: { k: "fill", q: "Be careful when you walk ___ the road!", a: ["across"], uz: "Yo'lni kesib o'tayotganda ehtiyot bo'l!", why: "Yo'lni kesib o'tish → **across** (*cross the road* ham deyiladi)." } },
      ],
    },
    {
      title: "past, towards, around, from… to",
      blocks: [
        {
          t: "table", head: ["Predlog", "Ma'nosi", "Misol"], speak: [0, 2],
          rows: [
            ["past", "yonidan o'tib", "Go past the bank and turn left."],
            ["towards", "tomonga, qarab", "A big dog ran towards me!"],
            ["around", "atrofida, aylanib", "We walked around the old city."],
            ["from… to", "…dan …gacha", "I walk from my house to the bus stop."],
            ["onto", "ustiga (chiqib)", "The cat jumped onto the roof."],
            ["off", "ustidan (tushib)", "The book fell off the table."],
          ],
        },
        { t: "tip", tone: "warn", md: "**past** (predlog) va **passed** (*pass* fe'lining V2 si) bir xil o'qiladi — **\"pa:st\"**. Yo'l ko'rsatishda doim: *Go **past** the school.*" },
        { t: "p", md: "**Transport** bilan maxsus juftliklar:" },
        {
          t: "table", head: ["Kichik transport (taxi, car)", "Katta transport (bus, train, plane)"], speak: [0, 1],
          rows: [
            ["get into the taxi", "get on the bus"],
            ["get out of the car", "get off the train"],
          ],
        },
        { t: "check", ex: { k: "choice", q: "\"Keyingi bekatda avtobusdan tushamiz.\"", opts: ["We get out of the bus at the next stop.", "We get off the bus at the next stop.", "We get down the bus at the next stop.", "We get from the bus at the next stop."], a: 1, why: "Avtobus, poyezd, samolyot → **get on / get off**." } },
      ],
    },
    {
      title: "O'zbek tilida so'zlashuvchilarning xatolari",
      blocks: [
        {
          t: "compare",
          good: { title: "To'g'ri", items: ["We walked across the bridge.", "She came into the room.", "He went home.", "They walked along the beach."] },
          bad: { title: "Xato", items: ["We walked across of the bridge.", "She came to inside the room.", "He went to home.", "They walked along of the beach."] },
        },
        { t: "tip", tone: "warn", md: "• **across, along, through, past** dan keyin **of** qo'yilmaydi: *across **the** road*, *across of the road* ❌.\n• **home** oldidan predlog yo'q: *go home, come home*.\n• **enter** fe'li predlogsiz: *She **entered the room*** (*entered into* ❌). Lekin: *She **came into** the room.*" },
        {
          t: "examples", items: [
            { en: "Go across the bridge.", uz: "Ko'prikdan o'ting.", note: "**over the bridge** ham to'g'ri." },
            { en: "The children ran around the garden.", uz: "Bolalar bog'da aylanib yugurishdi." },
            { en: "I walked past your house yesterday.", uz: "Kecha uyingiz yonidan o'tdim." },
            { en: "He drove from Tashkent to Fergana in five hours.", uz: "U Toshkentdan Farg'onagacha besh soatda haydab bordi." },
          ],
        },
        { t: "check", ex: { k: "tf", q: "**We swam across of the river.** — to'g'ri gap.", a: false, why: "**across** dan keyin *of* yo'q: *We swam **across the river**.*" } },
      ],
    },
    {
      title: "O'qing: Rustamning ertalabki yugurishi",
      blocks: [
        {
          t: "text", title: "A morning run",
          en: "Every Sunday Rustam goes for a run. He comes out of his building at seven and runs along the canal for two kilometres. Then he goes across a small bridge and through the park. There are old trees and a fountain there.\nAfter the park he runs up a long hill. It's hard, but the view from the top is great. Then he runs down the other side, past the bakery, and back towards his home.\nLast Sunday something funny happened. A small dog ran out of a gate and followed him all the way home! Now Rustam has a running partner.",
          uz: "Har yakshanba Rustam yugurishga chiqadi. U soat yettida binosidan chiqadi va kanal bo'ylab ikki kilometr yuguradi. Keyin kichik ko'prikdan o'tib, park ichidan yuguradi. U yerda qadimiy daraxtlar va favvora bor.\nParkdan keyin u uzun tepalikka yugurib chiqadi. Qiyin, lekin tepadan manzara zo'r. Keyin narigi tomondan pastga, novvoyxona yonidan o'tib, uyi tomon qaytadi.\nO'tgan yakshanba qiziq voqea bo'ldi. Kichkina it darvozadan yugurib chiqdi va uning orqasidan uyigacha yugurib keldi! Endi Rustamning yugurish sherigi bor.",
        },
        { t: "check", ex: { k: "tf", q: "Rustam runs along the canal before he goes through the park.", a: true, why: "Avval *along the canal*, keyin *across a small bridge and through the park*." } },
        { t: "check", ex: { k: "choice", q: "What did the dog do last Sunday?", opts: ["It ran into the park.", "It ran out of a gate and followed Rustam.", "It jumped over the bridge.", "It ran up the hill."], a: 1, why: "*A small dog ran out of a gate and followed him all the way home!*" } },
      ],
    },
    {
      title: "Dialog: yo'l ko'rsatish",
      blocks: [
        { t: "p", md: "Turist Buxoroda muzeyni qidiryapti:" },
        {
          t: "dialog", lines: [
            { who: "Tourist", en: "Excuse me, how do I get to the museum?", uz: "Kechirasiz, muzeyga qanday boraman?" },
            { who: "Nodira", en: "It's not far. Go out of this square and walk along this street.", uz: "Uzoq emas. Bu maydondan chiqing va shu ko'cha bo'ylab yuring." },
            { who: "Nodira", en: "Go past the old mosque and across the small bridge.", uz: "Eski masjid yonidan o'tib, kichik ko'prikdan o'ting." },
            { who: "Tourist", en: "Past the mosque, across the bridge… and then?", uz: "Masjid yonidan, ko'prikdan… keyin-chi?" },
            { who: "Nodira", en: "Then walk through the market. When you come out of the market, you'll see the museum in front of you.", uz: "Keyin bozor ichidan o'ting. Bozordan chiqqaningizda muzey ro'parangizda bo'ladi." },
            { who: "Tourist", en: "Thank you! Can I go up to the roof?", uz: "Rahmat! Tomiga chiqsa bo'ladimi?" },
            { who: "Nodira", en: "Yes, you can go up the stairs. The view is wonderful!", uz: "Ha, zinadan chiqishingiz mumkin. Manzara ajoyib!" },
          ],
        },
        { t: "check", ex: { k: "order", uz: "Masjid yonidan o'ting va ko'prikdan o'ting.", words: ["Go", "past", "the", "mosque", "and", "across", "the", "bridge."], extra: ["of", "passed"] } },
      ],
    },
  ],
  words: [
    { en: "bridge", uz: "ko'prik", ipa: "brɪdʒ", pos: "noun", ex: "Walk across the bridge.", exUz: "Ko'prikdan o'ting." },
    { en: "river", uz: "daryo", ipa: "ˈrɪvə", pos: "noun", ex: "We walked along the river.", exUz: "Daryo bo'ylab yurdik." },
    { en: "tunnel", uz: "tunnel", ipa: "ˈtʌnl", pos: "noun", ex: "The train went through a tunnel.", exUz: "Poyezd tunnel orqali o'tdi." },
    { en: "path", uz: "so'qmoq, yo'lak", ipa: "pɑːθ", pos: "noun", ex: "Follow the path through the forest.", exUz: "O'rmon ichidan o'tgan so'qmoqdan boring." },
    { en: "hill", uz: "tepalik", ipa: "hɪl", pos: "noun", ex: "They climbed up the hill.", exUz: "Ular tepalikka chiqishdi." },
    { en: "stairs", uz: "zina", ipa: "steəz", pos: "noun", ex: "She ran down the stairs.", exUz: "U zinadan yugurib tushdi." },
    { en: "wall", uz: "devor", ipa: "wɔːl", pos: "noun", ex: "The cat jumped over the wall.", exUz: "Mushuk devordan sakrab o'tdi." },
    { en: "canal", uz: "kanal, ariq", ipa: "kəˈnæl", pos: "noun", ex: "He runs along the canal every morning.", exUz: "U har ertalab kanal bo'ylab yuguradi." },
    { en: "bakery", uz: "novvoyxona, nonvoyxona", ipa: "ˈbeɪkəri", pos: "noun", ex: "I walked past the bakery.", exUz: "Novvoyxona yonidan o'tdim." },
    { en: "follow", uz: "ergashmoq, orqasidan bormoq", ipa: "ˈfɒləʊ", pos: "verb", ex: "Follow me, please.", exUz: "Orqamdan yuring, iltimos." },
  ],
  practice: [
    { k: "match", pairs: [["across", "kesib o'tib"], ["along", "bo'ylab"], ["through", "ichidan o'tib"], ["past", "yonidan o'tib"], ["towards", "tomonga"]] },
    { k: "match", pairs: [["bridge", "ko'prik"], ["hill", "tepalik"], ["stairs", "zina"], ["wall", "devor"], ["path", "so'qmoq"]] },
    { k: "listen", say: "We walked through the park.", opts: ["We walked through the park.", "We walked to the park.", "We walked past the park."], a: 0, why: "**through** — \"thru:\" — park ichidan o'tdik." },
    { k: "listen", say: "She ran down the stairs.", opts: ["She ran down the stairs.", "She ran up the stairs.", "She runs down the stairs."], a: 0 },
    { k: "choice", q: "We walked ___ the river and watched the boats.", opts: ["along", "through", "into", "out of"], a: 0, why: "Daryo **bo'ylab** → **along**." },
    { k: "choice", q: "\"U (she) xonaga kirdi.\"", opts: ["She came into the room.", "She came in to of the room.", "She entered into the room.", "She came out of the room."], a: 0, why: "**came into the room** yoki **entered the room** (predlogsiz)." },
    { k: "choice", q: "\"Taksidan tushdik.\"", opts: ["We got off the taxi.", "We got out of the taxi.", "We got down the taxi.", "We got out the taxi of."], a: 1, why: "Kichik transport (car, taxi) → **get into / get out of**." },
    { k: "fill", q: "The horse jumped ___ the wall.", a: ["over"], uz: "Ot devordan sakrab o'tdi.", why: "Ustidan oshib → **over**." },
    { k: "fill", q: "Go ___ the bank and turn right.", a: ["past"], uz: "Bank yonidan o'tib, o'ngga buriling.", why: "Yonidan o'tib → **past**." },
    { k: "fill", q: "We climbed ___ the hill and had a picnic at the top.", a: ["up"], why: "Yuqoriga → **up**." },
    { k: "fill", q: "Get ___ the bus at the third stop.", a: ["off"], uz: "Uchinchi bekatda avtobusdan tushing.", why: "Avtobusdan tushmoq → **get off**." },
    { k: "tf", q: "**He went to home by taxi.** — to'g'ri gap.", a: false, why: "**home** oldidan *to* qo'yilmaydi: *He went home by taxi.*" },
    { k: "tf", q: "Rustam ran down the hill and then went past the bakery.", a: true, why: "Matnda: *he runs down the other side, past the bakery*." },
    { k: "order", uz: "Bolalar park ichidan yugurib o'tishdi.", words: ["The", "children", "ran", "through", "the", "park."], extra: ["of", "at"] },
    { k: "translate", uz: "Biz daryo bo'ylab yurdik.", a: ["We walked along the river.", "We went along the river.", "We walked along the river bank."] },
    { k: "speak", say: "Walk along this street and go across the bridge.", uz: "Shu ko'cha bo'ylab yuring va ko'prikdan o'ting." },
  ],
  quiz: [
    { k: "choice", q: "The cat ran ___ the tree and couldn't come down.", opts: ["up", "down", "across", "past"], a: 0, why: "Tushib kela olmadi → daraxtga **chiqdi**: **up**." },
    { k: "choice", q: "A big dog ran ___ me, so I stopped.", opts: ["towards", "into of", "along of", "up"], a: 0, why: "Men tomonga → **towards**." },
    { k: "choice", q: "Which is **wrong**?", opts: ["We walked across the road.", "She got on the train.", "He swam across of the lake.", "They walked around the city."], a: 2, why: "*across of* ❌ → **across the lake**." },
    { k: "fill", q: "My keys fell ___ the table onto the floor.", a: ["off"], uz: "Kalitlarim stoldan polga tushib ketdi.", why: "Ustidan tushib → **off**." },
    { k: "fill", q: "She took her phone ___ of her bag.", a: ["out"], why: "**out of** — ichidan tashqariga." },
    { k: "listen", say: "The boat went under the bridge.", opts: ["The boat went under the bridge.", "The boat went over the bridge.", "The boat went on the bridge."], a: 0 },
    { k: "tf", q: "Avtobus va poyezd uchun **get on / get off**, mashina va taksi uchun **get into / get out of** ishlatiladi.", a: true },
    { k: "match", pairs: [["get on", "(avtobusga) chiqmoq"], ["get off", "(avtobusdan) tushmoq"], ["get into", "(taksiga) o'tirmoq"], ["get out of", "(taksidan) tushmoq"]] },
    { k: "order", uz: "U (he) har kuni ertalab kanal bo'ylab yuguradi.", words: ["He", "runs", "along", "the", "canal", "every", "morning."], extra: ["run", "through"], alt: [["Every", "morning", "he", "runs", "along", "the", "canal."]] },
    { k: "translate", uz: "Ko'prikdan o'ting.", a: ["Go across the bridge.", "Walk across the bridge.", "Cross the bridge.", "Go over the bridge.", "Walk over the bridge."] },
  ],
  summary: [
    "Joy predloglari — **qayerda?** (*in, on*); harakat predloglari — **qayoqqa?** (*into, out of, onto, off*).",
    "**across** — kesib o'tib, **along** — bo'ylab, **through** — ichidan o'tib, **over / under** — ustidan / ostidan.",
    "**up / down, past, towards, around, from… to** — yo'l ko'rsatishda eng kerakli so'zlar.",
    "**get on / off** the bus, train; **get into / out of** a car, taxi. **go home** — predlogsiz.",
  ],
  homework: "Uyingizdan ishxonangiz yoki o'qishingizgacha bo'lgan yo'lni 6–8 ta gapda yozing: *I come out of my building, walk along…, go past…, get on the bus…* Bugungi kamida 6 ta predlogni ishlating. Keyin bir do'stingizga shu yo'lni ovoz chiqarib tushuntiring.",
};

export default lesson;
