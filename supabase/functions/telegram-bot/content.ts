// Daily practice content and the vocabulary quiz. The bot never accepts Writing or Speaking
// answers itself: practice prompts link to the website where answers are graded.

export interface Word { word: string; pos: string; uz: string; example: string; synonyms: string[] }

export const WORDS: Word[] = [
  { word: "mitigate", pos: "verb", uz: "yumshatmoq, kamaytirmoq", example: "Planting trees can mitigate the effects of air pollution.", synonyms: ["alleviate", "reduce"] },
  { word: "detrimental", pos: "adj", uz: "zararli", example: "Excessive screen time is detrimental to children's sleep.", synonyms: ["harmful", "damaging"] },
  { word: "substantial", pos: "adj", uz: "sezilarli, katta", example: "There was a substantial increase in online sales.", synonyms: ["considerable", "significant"] },
  { word: "advocate", pos: "verb", uz: "qo'llab-quvvatlamoq, targ'ib qilmoq", example: "Many experts advocate a four-day working week.", synonyms: ["support", "champion"] },
  { word: "inevitable", pos: "adj", uz: "muqarrar", example: "Some job losses are inevitable as automation spreads.", synonyms: ["unavoidable", "certain"] },
  { word: "enhance", pos: "verb", uz: "yaxshilamoq, oshirmoq", example: "Group projects enhance students' communication skills.", synonyms: ["improve", "boost"] },
  { word: "prevalent", pos: "adj", uz: "keng tarqalgan", example: "Obesity is increasingly prevalent in urban areas.", synonyms: ["widespread", "common"] },
  { word: "consequently", pos: "adverb", uz: "natijada, shu sababli", example: "Prices rose; consequently, demand fell.", synonyms: ["therefore", "as a result"] },
  { word: "allocate", pos: "verb", uz: "ajratmoq (mablag', vaqt)", example: "Governments should allocate more funds to public transport.", synonyms: ["assign", "distribute"] },
  { word: "sustainable", pos: "adj", uz: "barqaror, uzoq muddatli", example: "Cities need sustainable sources of energy.", synonyms: ["renewable", "viable"] },
  { word: "deteriorate", pos: "verb", uz: "yomonlashmoq", example: "Air quality has deteriorated over the last decade.", synonyms: ["worsen", "decline"] },
  { word: "fluctuate", pos: "verb", uz: "o'zgarib turmoq, tebranmoq", example: "Oil prices fluctuated sharply between 2010 and 2015.", synonyms: ["vary", "oscillate"] },
  { word: "plummet", pos: "verb", uz: "keskin tushib ketmoq", example: "Visitor numbers plummeted during the pandemic.", synonyms: ["plunge", "drop sharply"] },
  { word: "surge", pos: "noun/verb", uz: "keskin o'sish", example: "There was a surge in demand for electric cars.", synonyms: ["rise", "soar"] },
  { word: "comprehensive", pos: "adj", uz: "har tomonlama, to'liq", example: "The report gives a comprehensive overview of the problem.", synonyms: ["thorough", "complete"] },
  { word: "feasible", pos: "adj", uz: "amalga oshirsa bo'ladigan", example: "Free public transport is not financially feasible for every city.", synonyms: ["practical", "viable"] },
  { word: "drawback", pos: "noun", uz: "kamchilik", example: "The main drawback of remote work is isolation.", synonyms: ["disadvantage", "downside"] },
  { word: "foster", pos: "verb", uz: "rivojlantirmoq, qo'llab-quvvatlamoq", example: "Team sports foster cooperation among young people.", synonyms: ["promote", "encourage"] },
  { word: "hinder", pos: "verb", uz: "to'sqinlik qilmoq", example: "A lack of funding can hinder scientific research.", synonyms: ["obstruct", "hamper"] },
  { word: "crucial", pos: "adj", uz: "hal qiluvchi, juda muhim", example: "Early education is crucial for a child's development.", synonyms: ["vital", "essential"] },
  { word: "diminish", pos: "verb", uz: "kamaymoq, susaymoq", example: "The importance of handwriting has diminished.", synonyms: ["decrease", "lessen"] },
  { word: "exacerbate", pos: "verb", uz: "yanada yomonlashtirmoq", example: "Traffic congestion exacerbates air pollution.", synonyms: ["aggravate", "worsen"] },
  { word: "acquire", pos: "verb", uz: "egallamoq, o'rganib olmoq", example: "Children acquire languages more easily than adults.", synonyms: ["gain", "obtain"] },
  { word: "vulnerable", pos: "adj", uz: "himoyasiz, zaif", example: "Elderly people are more vulnerable to heatwaves.", synonyms: ["exposed", "at risk"] },
  { word: "incentive", pos: "noun", uz: "rag'bat, turtki", example: "Tax incentives encourage companies to go green.", synonyms: ["motivation", "stimulus"] },
  { word: "rigorous", pos: "adj", uz: "qat'iy, puxta", example: "New medicines go through rigorous testing.", synonyms: ["strict", "thorough"] },
  { word: "obsolete", pos: "adj", uz: "eskirgan", example: "Many traditional skills have become obsolete.", synonyms: ["outdated", "out of date"] },
  { word: "proliferation", pos: "noun", uz: "tez ko'payish, yoyilish", example: "The proliferation of smartphones changed how we read news.", synonyms: ["spread", "expansion"] },
  { word: "tackle", pos: "verb", uz: "hal qilishga kirishmoq", example: "Governments must tackle youth unemployment.", synonyms: ["address", "deal with"] },
  { word: "underestimate", pos: "verb", uz: "yetarlicha baholamaslik", example: "People often underestimate the cost of living abroad.", synonyms: ["undervalue", "misjudge"] },
  { word: "beneficial", pos: "adj", uz: "foydali", example: "Regular exercise is beneficial for mental health.", synonyms: ["advantageous", "useful"] },
  { word: "disparity", pos: "noun", uz: "tafovut, nomutanosiblik", example: "There is a wide disparity between rural and urban incomes.", synonyms: ["gap", "inequality"] },
  { word: "integral", pos: "adj", uz: "ajralmas, asosiy", example: "Technology is an integral part of modern education.", synonyms: ["essential", "fundamental"] },
  { word: "compulsory", pos: "adj", uz: "majburiy", example: "Should voting be compulsory?", synonyms: ["mandatory", "obligatory"] },
  { word: "curb", pos: "verb", uz: "cheklamoq, jilovlamoq", example: "New laws aim to curb plastic waste.", synonyms: ["restrict", "limit"] },
  { word: "steadily", pos: "adverb", uz: "barqaror, asta-sekin", example: "The population grew steadily throughout the period.", synonyms: ["gradually", "consistently"] },
  { word: "negligible", pos: "adj", uz: "arzimas, juda kichik", example: "The change in temperature was negligible.", synonyms: ["insignificant", "minor"] },
  { word: "accessible", pos: "adj", uz: "foydalanish oson, yetib borsa bo'ladigan", example: "Online courses make education more accessible.", synonyms: ["available", "reachable"] },
  { word: "emphasise", pos: "verb", uz: "ta'kidlamoq", example: "The report emphasises the need for reform.", synonyms: ["stress", "highlight"] },
  { word: "phenomenon", pos: "noun", uz: "hodisa", example: "Urbanisation is a global phenomenon.", synonyms: ["occurrence", "trend"] },
  { word: "reluctant", pos: "adj", uz: "istamaydigan, ikkilanayotgan", example: "Many people are reluctant to change their habits.", synonyms: ["unwilling", "hesitant"] },
  { word: "thrive", pos: "verb", uz: "gullab-yashnamoq", example: "Small businesses thrive in supportive communities.", synonyms: ["flourish", "prosper"] },
  { word: "alleviate", pos: "verb", uz: "yengillashtirmoq", example: "Public parks can alleviate stress in busy cities.", synonyms: ["ease", "relieve"] },
  { word: "lucrative", pos: "adj", uz: "daromadli", example: "Tourism is a lucrative industry for many countries.", synonyms: ["profitable", "rewarding"] },
  { word: "scarcity", pos: "noun", uz: "tanqislik", example: "Water scarcity affects millions of people.", synonyms: ["shortage", "lack"] },
  { word: "versatile", pos: "adj", uz: "ko'p qirrali", example: "A versatile employee can adapt to many roles.", synonyms: ["adaptable", "flexible"] },
  { word: "convey", pos: "verb", uz: "yetkazmoq, ifodalamoq", example: "Pictures can convey emotions better than words.", synonyms: ["communicate", "express"] },
  { word: "persist", pos: "verb", uz: "davom etmoq, saqlanib qolmoq", example: "Gender stereotypes still persist in some professions.", synonyms: ["continue", "endure"] },
];

const SPEAKING_P1 = [
  "Do you work or are you a student?",
  "What do you like most about your hometown?",
  "How do you usually spend your weekends?",
  "Do you prefer reading books or watching films? Why?",
  "How often do you use public transport?",
  "What kind of music do you enjoy?",
  "Do you like cooking? What do you usually cook?",
  "Is there anything you would like to learn in the future?",
  "Do you prefer mornings or evenings? Why?",
  "How do you usually keep in touch with your friends?",
  "Do you think it is important to have a hobby?",
  "What do you usually do to relax after a busy day?",
  "Have you ever been to a museum? Did you enjoy it?",
  "Do you like taking photos? What do you take photos of?",
];

const SPEAKING_P2 = [
  "Describe a person who has influenced you. You should say: who this person is, how you know them, what they have done, and explain why they influenced you.",
  "Describe a place you would like to visit. You should say: where it is, how you know about it, what you would do there, and explain why you want to go.",
  "Describe a skill you would like to learn. You should say: what it is, how you would learn it, why you want to learn it, and explain how it would help you.",
  "Describe a memorable journey. You should say: where you went, who you went with, what happened, and explain why it was memorable.",
  "Describe a book you enjoyed reading. You should say: what it was about, when you read it, why you chose it, and explain why you liked it.",
  "Describe a time you helped someone. You should say: who you helped, how you helped, why they needed help, and explain how you felt.",
  "Describe a piece of technology you find useful. You should say: what it is, when you started using it, how you use it, and explain why it is useful.",
  "Describe an achievement you are proud of. You should say: what it was, when it happened, how you achieved it, and explain why you are proud of it.",
];

const SPEAKING_P3 = [
  "How has technology changed the way people communicate?",
  "Should governments invest more in public transport? Why?",
  "What are the advantages of learning a foreign language at an early age?",
  "Why do some people prefer living in cities rather than in the countryside?",
  "How can schools encourage children to read more?",
  "Do you think people work harder now than in the past?",
  "What role does social media play in young people's lives?",
  "How important is it to protect traditional culture?",
];

const TASK2 = [
  "Some people believe that university education should be free for everyone. To what extent do you agree or disagree?",
  "Many people think that social media has a negative impact on society. Discuss both views and give your opinion.",
  "In many countries, more people are choosing to live alone. What are the reasons, and is this a positive or negative development?",
  "Some people say that the best way to improve public health is to build more sports facilities. Others think other measures are needed. Discuss both views and give your opinion.",
  "Children today spend too much time on electronic devices. What problems does this cause, and what solutions can you suggest?",
  "Some believe that unpaid community service should be compulsory in high school. To what extent do you agree or disagree?",
  "Tourism brings more problems than benefits to local communities. To what extent do you agree or disagree?",
  "Governments should spend money on railways rather than roads. To what extent do you agree or disagree?",
  "Some people think that working from home is better for employees. Do the advantages outweigh the disadvantages?",
  "The gap between rich and poor is increasing in many countries. What problems does this cause, and how can they be solved?",
  "Some people believe that zoos are cruel and should be closed. Others think they protect animals. Discuss both views and give your opinion.",
  "Online learning will replace traditional classrooms in the future. To what extent do you agree or disagree?",
];

const GRAMMAR_TIPS = [
  "<b>Articles:</b> birinchi marta tilga olinganda <i>a/an</i>, qayta tilga olinganda <i>the</i>: \"I bought <u>a</u> book. <u>The</u> book is about history.\"",
  "<b>Present Perfect vs Past Simple:</b> aniq vaqt bo'lsa — Past Simple: \"I <u>visited</u> London in 2022.\" Vaqt aytilmasa — \"I <u>have visited</u> London.\"",
  "<b>Subject–verb agreement:</b> \"The number of students <u>has</u> increased\" (the number → birlik), lekin \"A number of students <u>have</u>…\".",
  "<b>Relative clauses:</b> qo'shimcha ma'lumot vergul bilan: \"My sister, <u>who lives in Tashkent</u>, is a doctor.\" — bu Band 7 uchun murakkab gap namunasi.",
  "<b>Conditionals:</b> \"If governments <u>invested</u> more, traffic <u>would decrease</u>.\" — Task 2 da taklif berish uchun juda qulay.",
  "<b>Passive voice:</b> jarayonlarda (Task 1 process) majhul nisbat ishlating: \"The beans <u>are roasted</u> and then <u>ground</u>.\"",
  "<b>Comparisons:</b> \"Sales were <u>twice as high as</u> in 2010\", \"slightly <u>higher than</u>\", \"<u>the highest</u> figure\".",
  "<b>Linking words:</b> \"However\" gap boshida vergul bilan; \"although\" esa bitta gap ichida: \"<u>Although</u> it is expensive, it is effective.\"",
  "<b>Uncountable nouns:</b> information, advice, research, equipment — ko'plik qo'shimchasi olmaydi: \"much research\", \"a piece of advice\".",
  "<b>Gerund vs infinitive:</b> \"enjoy <u>reading</u>\", \"avoid <u>making</u>\", lekin \"decide <u>to study</u>\", \"want <u>to improve</u>\".",
  "<b>Prepositions in Task 1:</b> \"increased <u>by</u> 10%\" (farq), \"increased <u>to</u> 50%\" (yakuniy qiymat), \"<u>at</u> its peak\".",
  "<b>Modal verbs:</b> fikrni yumshatish uchun: \"This <u>may</u> lead to…\", \"It <u>could be argued</u> that…\" — akademik uslub.",
];

const DAY = 86_400_000;
/** Index that changes once a day (Tashkent time) so everybody gets the same daily set. */
export function dayIndex(now = Date.now()): number {
  return Math.floor((now + 5 * 3_600_000) / DAY);
}

export function dailySet(now = Date.now()) {
  const d = dayIndex(now);
  const parts = [
    { part: "Part 1", text: SPEAKING_P1[d % SPEAKING_P1.length] },
    { part: "Part 2", text: SPEAKING_P2[d % SPEAKING_P2.length] },
    { part: "Part 3", text: SPEAKING_P3[d % SPEAKING_P3.length] },
  ];
  return {
    word: WORDS[(d * 7) % WORDS.length],
    speaking: parts[d % 3],
    task2: TASK2[d % TASK2.length],
    grammar: GRAMMAR_TIPS[d % GRAMMAR_TIPS.length],
  };
}

/** Four answer options (word indexes) that include the correct one, in a shuffled order. */
export function quizOptions(correct: number, random = Math.random): number[] {
  const options = new Set<number>([correct]);
  while (options.size < 4) options.add(Math.floor(random() * WORDS.length));
  const list = [...options];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
