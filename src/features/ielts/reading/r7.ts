import type { ReadingTest } from '../types';

const r7: ReadingTest = {
  id: 'r7',
  title: 'Academic Reading Test 7',
  topics: ['Environmental science', 'History', 'Urban design'],
  passages: [
    // ---------------------------------------------------------------- PASSAGE 1
    {
      title: 'Microplastics in the Food Chain',
      intro: 'Tiny fragments of plastic have been found in oceans, animals and food. How much should we worry?',
      labelled: false,
      paragraphs: [
        `Plastic was once celebrated as a miracle material: light, cheap and almost indestructible. That last quality is now the problem. Plastic does not rot; it merely breaks into smaller and smaller pieces. Scientists use the term microplastics for fragments less than five millimetres across, and they divide them into two kinds. Primary microplastics are manufactured at that size, such as the tiny beads once added to facial scrubs and the pellets from which factories mould larger objects. Secondary microplastics are created when bigger items, including fishing nets, bottles and car tyres, are broken down by sunlight, waves and friction. Although the beads in cosmetics attracted most of the public anger, the secondary kind is thought to account for the greater share of the particles in the sea. A further source is clothing: a single wash of synthetic fleece can release hundreds of thousands of fibres, which pass through the drain and out to the coast.`,
        `How far this material has penetrated living things was the question that Dr Ingrid Solberg of the Fjordland Marine Institute set out to answer in 2019. Her team collected mussels from sixty estuaries on three continents, chosen because mussels feed by pumping large volumes of water across their gills and trapping whatever floats in it. Every one of the estuaries yielded mussels containing plastic, and the average mussel held around four particles. Solberg stresses that the figure says little about danger. “We have shown that exposure is universal,” she says, “not that it is harmful.” Most of the particles were fibres, which matches the wastewater flowing into the estuaries, rather than the fragments of hard plastic that dominate the beaches.`,
        `Whether such particles do any damage is easier to test in the laboratory. Dr Kofi Mensah, a physiologist at the University of Tamarind Bay, fed tiny crustaceans called copepods a diet of algae mixed with plastic beads of similar size. The animals did not die, but they behaved strangely. Because their stomachs were partly filled with plastic, they ate about a quarter less algae than a control group, and the females laid roughly a fifth fewer eggs. Mensah suspects that the beads give the animals a false sense of fullness. Copepods are a staple food for young fish, so any effect on their numbers could, in theory, be felt higher in the food web. Mensah admits, though, that the concentrations in his tanks were far higher than those found in most seas.`,
        `That raises the question of whether plastic accumulates as it passes from prey to predator, as mercury does, so that large fish carry the heaviest burden. Solberg is sceptical. When her team examined sardines, mackerel and tuna, they found that particles generally left the gut within a few days, and the larger fish did not hold more plastic than the smaller ones. The picture is complicated by chemistry, however. Plastic surfaces attract oily pollutants from the water, and manufacturers add substances to make plastic flexible or fire-resistant. If an animal swallows a particle, some of these chemicals may leach into its tissues. How much does so, and whether the dose matters, remains largely unknown. For the moment, the main concern among researchers is less the plastic itself than what it carries.`,
        `People are exposed through food, water and even the air in their homes, and estimates of what we swallow vary enormously. Professor Hana Takeda of the Kinsale Public Health Centre reviewed twenty-six published studies and found figures for annual intake ranging from a few thousand particles to more than a hundred thousand. She attributes the gap mainly to inconsistent methods: laboratories count different sizes of particle, and some studies fail to allow for contamination from the air in the laboratory itself. Shellfish are a special case, because people eat them whole, including the gut, whereas fish are normally gutted before cooking. Even so, Takeda found that bottled water and sea salt contributed more particles than shellfish did for most consumers. No study has yet shown that these quantities harm human health, but she does not regard that as reassurance, since few have looked for long-term effects.`,
        `Prevention is therefore likely to be more productive than cure, since particles in the ocean cannot realistically be recovered. Modern wastewater plants capture around nine-tenths of the fibres and fragments that reach them, but most of this material ends up in sludge, which is often spread on farmland as fertiliser, allowing the plastic to return to the environment. Several countries have banned microbeads in cosmetics, and trials of filters fitted to washing machines have cut the release of fibres by up to eighty per cent. Yet the banned beads were a small part of the problem, and the measures that would matter most, such as redesigning tyres and clothing so that they shed less, are the hardest to achieve. Solberg expects the debate to continue for many years, but she is clear about one point: the evidence is already strong enough to justify cutting the amount of plastic that is allowed to escape.`,
      ],
      groups: [
        {
          kind: 'tfng',
          instruction: 'Do the following statements agree with the information given in the passage? Choose TRUE, FALSE or NOT GIVEN.',
          items: [
            { q: 'A fragment must measure under five millimetres to be classed as a microplastic.', a: 'true', why: '1-paragrafda "fragments less than five millimetres across" deyilgan, ya’ni 5 mm dan kichik zarralar microplastic hisoblanadi.' },
            { q: 'Beads from cosmetic products are the main source of microplastics in the sea.', a: 'false', why: '1-paragrafda "the secondary kind is thought to account for the greater share" deyilgan; kosmetika boncuklari asosiy manba emas.' },
            { q: 'Plastic was found in mussels from every one of the estuaries that Solberg’s team sampled.', a: 'true', why: '2-paragrafda "Every one of the estuaries yielded mussels containing plastic" deyilgan.' },
            { q: 'The copepods in Mensah’s experiment died after eating the plastic beads.', a: 'false', why: '3-paragrafda "The animals did not die" deyilgan; faqat kamroq ovqatlangan va kamroq tuxum qo‘ygan.' },
            { q: 'Mussels from estuaries near large cities contained more plastic than mussels from rural estuaries.', a: 'not-given', why: '2-paragrafda estuariyalar shahar yoki qishloqqa ko‘ra taqqoslanmagan; shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'Why did Solberg’s team choose to study mussels?',
              options: [
                'They can be collected easily in large numbers.',
                'They trap particles because they filter large amounts of water.',
                'They are the seafood that people eat most often.',
                'They are known to contain more plastic than other animals.',
              ],
              a: 1,
              why: '2-paragrafda mussels "feed by pumping large volumes of water across their gills and trapping whatever floats in it" deyilgan.',
            },
            {
              q: 'What explanation does Mensah offer for the copepods’ reduced feeding?',
              options: [
                'The plastic beads poisoned the animals.',
                'There was less algae in the tanks than in the sea.',
                'The beads made the animals feel they had eaten enough.',
                'The animals mistook the beads for predators.',
              ],
              a: 2,
              why: '3-paragrafda Mensah "the beads give the animals a false sense of fullness" deb o‘ylaydi.',
            },
            {
              q: 'What did Solberg’s examination of sardines, mackerel and tuna show?',
              options: [
                'Larger fish held more plastic than smaller fish.',
                'Plastic did not build up in the bigger fish.',
                'Particles stayed in the gut for several weeks.',
                'Tuna contained the highest level of harmful chemicals.',
              ],
              a: 1,
              why: '4-paragrafda "the larger fish did not hold more plastic than the smaller ones" deyilgan.',
            },
            {
              q: 'According to Takeda, why do estimates of human intake differ so widely?',
              options: [
                'People eat very different amounts of shellfish.',
                'The studies use inconsistent methods.',
                'Very few studies have been published.',
                'The air in different countries contains different amounts of plastic.',
              ],
              a: 1,
              why: '5-paragrafda "She attributes the gap mainly to inconsistent methods" deyilgan; tadqiqotlar soni 26 ta, kam emas.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: Microplastics, from source to solution',
          instruction: 'Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'A single wash of synthetic ___ can release hundreds of thousands of fibres.', a: ['fleece'], why: '1-paragrafda "a single wash of synthetic fleece can release hundreds of thousands of fibres" deyilgan.' },
            { q: 'Mensah thinks the plastic beads give the copepods a false sense of ___.', a: ['fullness'], why: '3-paragrafda "a false sense of fullness" iborasi bor.' },
            { q: 'Plastic surfaces attract ___ pollutants from the water.', a: ['oily'], why: '4-paragrafda "Plastic surfaces attract oily pollutants from the water" deyilgan.' },
            { q: 'Most of the plastic captured by wastewater plants ends up in ___, which is often spread on farmland.', a: ['sludge'], why: '6-paragrafda "most of this material ends up in sludge, which is often spread on farmland" deyilgan.' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 2
    {
      title: 'The Printing Press and the Spread of Ideas',
      intro: 'How a new way of making books changed the way Europeans worked, argued and learned.',
      labelled: true,
      paragraphs: [
        `Before the middle of the fifteenth century, every book in Europe was copied by hand. Most of the copying was done by monks and professional scribes, and a single Bible could occupy one of them for the better part of a year. Books were consequently rare and costly, and even a great university library might own only a few hundred volumes. Each copy also introduced fresh mistakes, so that two supposedly identical manuscripts could differ in hundreds of places. Around 1450 a goldsmith named Johannes Gutenberg began to solve these problems in the German city of Mainz. Movable type itself was not new: printers in China and Korea had used it centuries earlier. Gutenberg’s achievement was to combine several techniques into one workable system, casting durable letters in a metal alloy, mixing an oily ink that would stick to metal, and borrowing the screw mechanism of the presses used for making wine and olive oil. His Bible of about 1455 showed that the system could produce books as handsome as any scribe’s.`,
        `The new craft spread with astonishing speed. By 1500, presses were operating in more than two hundred and fifty European towns, and printers had produced perhaps twenty million volumes. Venice became the leading centre, with scores of workshops competing for customers. Printing was, however, a risky business. Presses, metal and paper demanded heavy investment before a single copy could be sold, and many printers went bankrupt when a title failed to find buyers. Gutenberg himself was among the casualties: unable to repay a loan, he lost his equipment to his investor, Johann Fust, in 1455, and it was Fust who profited from the early success.`,
        `What made printed books valuable was not only their low price but their uniformity. Because every copy of an edition was identical, a scholar in Kraków and one in Lisbon could now refer to the same page number and expect to find the same words. Title pages, indexes and tables of contents, which hardly existed in manuscripts, became standard, and readers learned to search a book instead of reading it from start to finish. Errors could also be corrected between editions rather than multiplied, and printers’ choices gradually fixed the spelling of languages that had previously varied from town to town. William Caxton, who set up the first press in England in 1476, complained that he struggled to decide which kind of English his readers would understand.`,
        `Printing’s influence on religion was dramatic. When Martin Luther attacked the sale of indulgences in 1517, his ideas were reprinted and carried across Germany within weeks, and his German translation of the New Testament of 1522 sold in large numbers. Pamphlets, cheap enough for a craftsman to buy, turned a theological quarrel into a public one. Rulers and churchmen reacted warily. Some cities required printers to obtain a licence, and in 1559 the Catholic Church issued its first Index of Prohibited Books. Such controls, however, were hard to enforce, because a banned text could be reprinted in a neighbouring state within months.`,
        `Scientists gained as much as theologians. In 1543, Nicolaus Copernicus published his sun-centred model of the heavens, and Andreas Vesalius published his study of the human body, both illustrated with woodcuts. A drawing of a vein or a planetary orbit could now be reproduced precisely, whereas the diagrams in manuscripts tended to grow less accurate with each hand-made copy, until they were scarcely recognisable. Astronomers in different countries could also compare printed tables of observations and spot discrepancies, which encouraged them to check each other’s claims. Historians such as Dr Ruth Calloway argue that this habit of cross-checking, rather than any single discovery, was the press’s most important gift to science.`,
        `It would be wrong, however, to imagine that printing created a nation of readers overnight. Calloway points out that in 1500 the great majority of Europeans still could not read, and that literacy grew slowly over the following two centuries. Books were often read aloud in taverns, workshops and family circles, so that a single copy might reach dozens of listeners. The printers themselves were quick to widen their market: in Venice, Aldus Manutius introduced small pocket-sized books around 1501, which could be carried and read privately, and which helped make silent reading a habit among the educated. The impact on ordinary people, Calloway concludes, lagged a generation or two behind the technology.`,
        `The press also had darker consequences. The same machinery that spread learning spread rumour and fraud: almanacs promised impossible forecasts, and the Malleus Maleficarum, a manual on witch-hunting printed in 1486, went through many editions and lent a respectable appearance to superstition. Printing could not tell true from false; it simply made both cheaper to distribute. Some commentators see an echo in the modern internet, which has also lowered the cost of publishing and has also produced both enlightenment and misinformation. Calloway is wary of such comparisons but concedes the central lesson, that a new medium is neither good nor bad by itself, and that its effects depend on who controls it and how readers learn to judge what they find.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–F from the list of headings below.',
          options: [
            'A system assembled from existing techniques',
            'Risk and ruin in a booming industry',
            'Why identical copies mattered to scholars',
            'Controversy in print and attempts to contain it',
            'Accurate images and the checking of claims',
            'Readers who lagged behind the printers',
            'The rejection of the technology in Asia',
            'The decline of the scribes’ guilds',
          ],
          items: [
            { q: 'Paragraph B', a: 1, why: 'B-paragrafda tez tarqalish, ammo "a risky business", ko‘p bosmaxonalar bankrot bo‘lgan va Gutenberg o‘zi ham uskunasini yo‘qotgan.' },
            { q: 'Paragraph C', a: 2, why: 'C-paragrafda "every copy of an edition was identical" — bir xil sahifa raqamlari, indekslar olimlarga qulaylik yaratgan.' },
            { q: 'Paragraph D', a: 3, why: 'D-paragrafda Luther pamfletlari va "Index of Prohibited Books" hamda ularni nazorat qilish urinishlari, ammo "hard to enforce" deyilgan.' },
            { q: 'Paragraph E', a: 4, why: 'E-paragrafda woodcut rasmlarning aniq nusxalanishi va astronomlar "check each other’s claims" deyilgan.' },
            { q: 'Paragraph F', a: 5, why: 'F-paragrafda "in 1500 the great majority of Europeans still could not read" — o‘quvchilar bosmachilardan orqada qolgan.' },
          ],
        },
        {
          kind: 'match',
          instruction:
            'Which paragraph contains the following information? Choose the correct letter, A–G. You may use any letter more than once.',
          options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          items: [
            { q: 'An explanation of how the inventor came to lose his equipment', a: 1, why: 'B-paragrafda Gutenberg "unable to repay a loan, he lost his equipment to his investor, Johann Fust" deyilgan.' },
            { q: 'A comparison between the accuracy of illustrations copied by hand and those that were printed', a: 4, why: 'E-paragrafda "diagrams in manuscripts tended to grow less accurate with each hand-made copy" va bosma rasmlar "reproduced precisely" deyilgan.' },
            { q: 'A warning that a new medium can circulate false or misleading material', a: 6, why: 'G-paragrafda "spread rumour and fraud" va "Printing could not tell true from false" deyilgan.' },
          ],
        },
        {
          kind: 'fill',
          instruction: 'Complete each sentence with NO MORE THAN TWO WORDS from the passage.',
          items: [
            { q: 'Gutenberg borrowed the screw mechanism of presses used for making wine and ___.', a: ['olive oil'], why: 'A-paragrafda "the presses used for making wine and olive oil" deyilgan.' },
            { q: 'Because every copy was identical, scholars in different cities could refer to the same ___ number.', a: ['page'], why: 'C-paragrafda "refer to the same page number and expect to find the same words" deyilgan.' },
            { q: 'In 1559 the Catholic Church issued its first ___ of Prohibited Books.', a: ['index'], why: 'D-paragrafda "in 1559 the Catholic Church issued its first Index of Prohibited Books" deyilgan.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What does the passage say about Gutenberg’s achievement?',
              options: [
                'He was the first person ever to use movable type.',
                'He combined existing techniques into a system that worked.',
                'He made books cheap enough for every household.',
                'He printed more books than any later printer.',
              ],
              a: 1,
              why: 'A-paragrafda movable type "was not new"; Gutenberg’s yutug‘i "to combine several techniques into one workable system" deyilgan.',
            },
            {
              q: 'According to Calloway, what was the press’s most important contribution to science?',
              options: [
                'The habit of cross-checking each other’s claims.',
                'The discovery of the sun-centred model of the heavens.',
                'The introduction of woodcut illustration.',
                'The wider availability of books on the human body.',
              ],
              a: 0,
              why: 'E-paragrafda Calloway "this habit of cross-checking, rather than any single discovery, was the press’s most important gift to science" deydi.',
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 3
    {
      title: 'Can Cities Learn from Ants?',
      intro: 'Designers are looking to insect colonies for ideas about how to organise human settlements.',
      labelled: false,
      paragraphs: [
        `An ant colony may contain millions of individuals, yet there is no ant in charge. The queen, despite her title, issues no orders; she lays eggs. No worker has a map of the nest, or any idea how much food the colony needs this week. Each ant follows a few simple rules, responding to what it meets: the scent of a trail, the touch of a nestmate, the temperature of a chamber. From countless small interactions of this kind, a pattern appears: food is found, tunnels are dug, enemies are repelled. Scientists call this “emergent” behaviour, and it has fascinated a generation of researchers into complex systems. To a human manager the arrangement looks like a recipe for chaos, but the colonies thrive, and the lack of a leader is, if anything, a source of their strength. Cities, by contrast, are designed and managed from the top, and anyone who has sat in a traffic jam may wonder whether we have chosen the better model.`,
        `The best-known illustration comes from an experiment by Dr Mei Lindgren of Halvorsen University. Her team connected a colony of garden ants to a food source by two bridges, one twice as long as the other. Ants that find food walk home laying a chemical trail, and other ants prefer to follow stronger trails. At first, the ants chose the bridges at random. But those that took the short bridge returned sooner, so its trail was reinforced more quickly, and within an hour about nine in every ten ants were using it. The trails also weaken. The chemical evaporates, so a route that is no longer used fades from the ground and the colony forgets it. This elegant demonstration shows how a group can solve a problem that no individual understands, and it is hard to read about it without admiring its economy.`,
        `Engineers admired it too. The method, known as ant colony optimisation, has been used since the 1990s to route data through communications networks, and a logistics firm in Rotterdam recently tested a version of it on its delivery vans. Rather than receiving a fixed schedule each morning, the vans’ computers left virtual “trails” on roads that had proved fast, which later vehicles tended to follow. Over three months the total distance driven fell by eight per cent. That is a modest saving, but it is a real one, achieved without a central planner. The firm has not said whether it intends to extend the system beyond its trial routes.`,
        `Traffic offers a subtler lesson. Professor Tobias Ekwueme studied army ants, which march in dense columns along forest trails in both directions at once. One might expect constant jams, yet the flow stays steady even when the number of ants on a trail doubles. Ekwueme found that outbound ants step aside for the nestmates returning with food, so the traffic carrying the colony’s income is never delayed. A few planners have wondered whether road markings could be arranged to give priority to certain vehicles in the same way. I find it hard to be hopeful. Army ants do not mind giving way, because every ant’s interests are the colony’s, whereas it would be naive to expect human drivers, each pursuing a private journey, to accept a rule that makes them wait for strangers.`,
        `A more promising lesson concerns resilience. When researchers blocked a trail with a stone, the colonies they watched found a way round within minutes, since the ants simply kept searching and laying new scent. Compare this with the “smart city” systems now being installed around the world, in which sensors feed information to a single control room. Such systems can be impressive, but they have a single point of failure: when the control room goes down, so does everything that depends on it. A decentralised network, in which each junction, bus or building reacts to local conditions and to its immediate neighbours, would degrade gracefully instead. I am convinced that this kind of design will prove more robust than any control room, however well staffed or well equipped.`,
        `There are limits to the analogy. A colony has one overriding aim, the survival of the colony, and individual ants are expendable in a way that no city could tolerate. A city has to balance the demands of commuters, shopkeepers, residents and the poorest, whose interests often conflict, and no chemical trail can settle that conflict for us. Politics cannot be outsourced to insects. Even so, the principles that ants embody, such as simple local rules, rapid feedback and the willingness to abandon what no longer works, seem to me worth borrowing. The sensible aim is not to copy ants but to borrow their principles, and to leave the rest of the colony where it belongs, under the ground.`,
      ],
      groups: [
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer of the passage? Choose YES, NO or NOT GIVEN.',
          items: [
            { q: 'The lack of a leader puts ant colonies at a disadvantage.', a: 'no', why: '1-paragrafda yozuvchi "the lack of a leader is, if anything, a source of their strength" deydi — kamchilik emas.' },
            { q: 'Lindgren’s bridge experiment gave a clear demonstration of how a colony finds an efficient route.', a: 'yes', why: '2-paragrafda yozuvchi uni "This elegant demonstration shows how a group can solve a problem" deb baholaydi.' },
            { q: 'Ant-inspired scheduling is likely to become standard practice among delivery firms within ten years.', a: 'not-given', why: '3-paragrafda yozuvchi faqat sinov natijasini keltiradi va firma kelajak rejasini aytmagani qayd etiladi; bashorat yo‘q, shuning uchun NOT GIVEN.' },
            { q: 'Human drivers could not reasonably be expected to behave in the way that army ants do.', a: 'yes', why: '4-paragrafda yozuvchi "it would be naive to expect human drivers… to accept a rule that makes them wait for strangers" deydi.' },
            { q: 'Cities that depend on one control room are likely to be more reliable than those with decentralised networks.', a: 'no', why: '5-paragrafda yozuvchi markazsiz tarmoq "will prove more robust than any control room" deb ishonadi.' },
            { q: 'Research on ants deserves more public funding than other branches of urban science.', a: 'not-given', why: 'Matnda yozuvchi tadqiqotlarni moliyalashtirish yoki fanlarni taqqoslash haqida hech narsa demaydi; shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'match',
          instruction:
            'Complete each sentence with the correct ending, A–G, below.',
          options: [
            'outbound ants make way for those returning with food.',
            'the chemical that marks it evaporates.',
            'ants using it get home sooner, so its trail is strengthened faster.',
            'the distance saved by the vans was small.',
            'the queen sends workers out to search for new food.',
            'a stone blocks the trail.',
            'drivers are each pursuing a private journey.',
          ],
          items: [
            { q: 'The shorter of the two bridges became the colony’s favourite because', a: 2, why: '2-paragrafda "those that took the short bridge returned sooner, so its trail was reinforced more quickly" deyilgan.' },
            { q: 'A route that nobody uses any longer fades because', a: 1, why: '2-paragrafda "The chemical evaporates, so a route that is no longer used fades from the ground" deyilgan.' },
            { q: 'Traffic on an army-ant trail keeps moving smoothly because', a: 0, why: '4-paragrafda "outbound ants step aside for the nestmates returning with food" deyilgan.' },
            { q: 'The writer doubts that ant-style priority rules would work on roads because', a: 6, why: '4-paragrafda "human drivers, each pursuing a private journey" va ularning kutishni istamasligi haqida so‘z boradi.' },
          ],
        },
        {
          kind: 'fill',
          title: 'Summary: What cities might borrow from ants',
          instruction: 'Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Although no ant directs the colony, each one follows a few simple ___ and an organised pattern emerges.', a: ['rules'], why: '1-paragrafda "Each ant follows a few simple rules" deyilgan.' },
            { q: 'Engineers tested an ant-inspired method on the ___ of a logistics firm, and total distance driven fell by eight per cent.', a: ['delivery vans'], why: '3-paragrafda "tested a version of it on its delivery vans" va "fell by eight per cent" deyilgan.' },
            { q: 'Because colonies find a way round blockages quickly, the writer believes a ___ network would be more robust than a single control room.', a: ['decentralised'], why: '5-paragrafda "A decentralised network… would degrade gracefully" va "more robust than any control room" deyilgan.' },
            { q: 'The writer concludes that cities should copy the ___ of the colony, not the ants themselves.', a: ['principles'], why: '6-paragrafda "The sensible aim is not to copy ants but to borrow their principles" deyilgan.' },
          ],
        },
      ],
    },
  ],
};

export default r7;
