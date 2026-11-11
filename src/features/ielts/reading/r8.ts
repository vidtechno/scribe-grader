import type { ReadingTest } from '../types';

const r8: ReadingTest = {
  id: 'r8',
  title: 'Academic Reading Test 8',
  topics: ['History', 'Urban Life', 'Neuroscience'],
  passages: [
    // ---------------------------------------------------------------- PASSAGE 1
    {
      title: 'The Story of Tea',
      intro: 'From a medicine in south-west China to the world’s favourite drink after water: how tea travelled round the globe.',
      labelled: false,
      paragraphs: [
        `Tea is today the most widely consumed drink in the world after water, yet for most of its history it was known only in a small part of Asia. According to Chinese legend, the emperor Shen Nong was resting beneath a wild tea tree around 2737 BC when a few leaves drifted into his pot of boiling water. He tasted the result and found it refreshing. Historians treat the story with caution, since the earliest written evidence of tea drinking dates from several centuries later, but it shows how old the habit is believed to be. At first the leaves were valued as a medicine, chewed or boiled with onions and spices by people in the south-west of China. Only gradually did tea become a pleasure rather than a remedy, enjoyed by poets, monks and ordinary families alike.`,
        `By the Tang dynasty, which began in 618, tea had become a drink for the whole country. Merchants pressed the leaves into hard bricks that were easy to carry, and in remote regions these bricks were even used as a form of money. A scholar named Lu Yu wrote the first known book devoted to tea around the year 760, describing how to grow the plants, prepare the leaves and choose the right water. Buddhist monks carried both the plant and the custom to Japan, where, over the following centuries, tea drinking developed into the formal ceremony that is still practised today. Tea also travelled west along the trade routes to the peoples of Central Asia, who exchanged horses for it. China needed those horses for its armies, so the trade was valuable to both sides.`,
        `Europeans were late to discover tea. Portuguese traders and priests wrote about it in the sixteenth century, but it was Dutch merchants who first shipped it to Europe, in 1610. At the time it was extremely expensive, so it was drunk mainly at court and by the wealthy. In Britain, tea became fashionable after Catherine of Braganza, a Portuguese princess who loved the drink, married King Charles II in 1662. London’s coffee houses began to serve it, and by the middle of the eighteenth century tea had become the national drink, consumed by rich and poor alike. By 1750, British merchants were bringing in several million kilograms every year, and the fast sailing ships known as clippers later raced from China to London each season, with a bonus paid to the captain who delivered the first chests of the new crop.`,
        `This growing appetite created an imbalance. China sold tea but wanted little that Britain had to offer, so Britain paid for its purchases in silver. To correct the problem, the East India Company began to sell opium grown in India to Chinese buyers, a trade that led to the Opium Wars of the nineteenth century. Tea also played a part in the American Revolution. In 1773, colonists protested against a British tax by throwing 342 chests of tea into Boston harbour, an event now known as the Boston Tea Party. Few other crops have been so closely tied to money, power and conflict.`,
        `Britain was anxious about depending on a single foreign supplier. In 1848 the East India Company hired a Scottish botanist, Robert Fortune, to travel in disguise through China and collect plants and seeds. He smuggled out thousands of young tea plants, together with workers who understood how to make the tea, and sent them to northern India. Plantations were soon established in Assam and Darjeeling, and later in Ceylon, which is now Sri Lanka. By the 1880s, the amount of Indian tea sold in Britain had overtaken the amount that came from China, and the dominance of Chinese growers was at an end.`,
        `Tea drinking also changed the way the drink was prepared. Early European drinkers preferred green tea, but black tea, which is fully fermented and keeps its flavour longer on long sea voyages, gradually became the favourite. The invention of the tea bag, by contrast, was an accident. In 1908 a New York merchant, Thomas Sullivan, sent samples to his customers in small silk bags, and some of them dropped the whole bag into the pot instead of emptying it. Orders for the convenient little bags followed, and cheaper paper versions soon replaced the silk ones.`,
        `Today tea is grown in more than thirty countries. China and India together produce roughly half of the world’s supply, while Kenya, Sri Lanka and Turkey are also major producers. Turkey has the highest consumption per person, at about three kilograms of dry leaf a year for every inhabitant. For millions of small farmers, many of them in countries where few other crops earn so much money, tea remains the main source of income, and a leaf once chewed as a remedy now supports an industry worth billions of dollars.`,
      ],
      groups: [
        {
          kind: 'tfng',
          instruction: 'Do the following statements agree with the information given in the passage? Choose TRUE, FALSE or NOT GIVEN.',
          items: [
            { q: 'Written records from the time of Shen Nong confirm the story of his discovery of tea.', a: 'false', why: '1-paragrafda "the earliest written evidence of tea drinking dates from several centuries later" deyilgan — ya’ni o‘sha davrdagi yozma dalil yo‘q.' },
            { q: 'The first people to drink tea in China valued it as a kind of medicine.', a: 'true', why: '1-paragrafda "At first the leaves were valued as a medicine" deyilgan.' },
            { q: 'Dutch merchants charged lower prices for tea than Portuguese traders did.', a: 'not-given', why: '3-paragrafda faqat Portugallar yozgani va gollandlar 1610-yilda yuborgani aytilgan; narxlarni taqqoslash haqida ma’lumot yo‘q, shuning uchun NOT GIVEN.' },
            { q: 'A royal marriage helped to make tea popular in Britain.', a: 'true', why: '3-paragrafda "tea became fashionable after Catherine of Braganza… married King Charles II in 1662" deyilgan.' },
            { q: 'Robert Fortune obtained tea plants openly from Chinese growers.', a: 'false', why: '5-paragrafda Fortune "in disguise" sayohat qilgan va o‘simliklarni "smuggled out" — ochiq olmagan.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What does the writer say about the legend of Shen Nong?',
              options: [
                'Historians accept that it is an accurate account.',
                'Historians are cautious about it, but it suggests how old tea drinking is thought to be.',
                'It was first told by the scholar Lu Yu.',
                'It proves that tea began as a drink for the wealthy.',
              ],
              a: 1,
              why: '1-paragrafda "Historians treat the story with caution… but it shows how old the habit is believed to be" deyilgan.',
            },
            {
              q: 'Why did the peoples of Central Asia exchange horses for tea?',
              options: [
                'They wanted to use tea as a form of medicine.',
                'They had no other goods to sell.',
                'Tea was cheaper than horses in their region.',
                'China needed horses for its armies.',
              ],
              a: 3,
              why: '2-paragrafda "China needed those horses for its armies, so the trade was valuable to both sides" deyilgan.',
            },
            {
              q: 'What problem did Britain face in its trade with China?',
              options: [
                'Chinese merchants refused to sell tea to foreigners.',
                'China wanted few British goods, so Britain paid in silver.',
                'British drinkers preferred coffee to tea.',
                'Tea was too heavy to carry on ships.',
              ],
              a: 1,
              why: '4-paragrafda "China sold tea but wanted little that Britain had to offer, so Britain paid for its purchases in silver" deyilgan.',
            },
            {
              q: 'Why did black tea gradually become more popular than green tea in Europe?',
              options: [
                'It was cheaper to produce in India.',
                'It kept its flavour better on long sea journeys.',
                'It was easier to put into small bags.',
                'It was preferred by the Chinese emperor.',
              ],
              a: 1,
              why: '6-paragrafda black tea "keeps its flavour longer on long sea voyages, gradually became the favourite" deyilgan.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: Key facts about tea',
          instruction: 'Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
          items: [
            { q: 'In Tang China, tea leaves were pressed into hard ___ so that they could be carried easily.', a: ['bricks'], why: '2-paragrafda "Merchants pressed the leaves into hard bricks that were easy to carry" deyilgan.' },
            { q: 'In 1773, colonists protested against a British tax by throwing ___ chests of tea into Boston harbour.', a: ['342'], why: '4-paragrafda "throwing 342 chests of tea into Boston harbour" deyilgan.' },
            { q: 'Robert Fortune’s plants were used to set up plantations in Assam and ___.', a: ['Darjeeling'], why: '5-paragrafda "Plantations were soon established in Assam and Darjeeling" deyilgan.' },
            { q: 'Thomas Sullivan sent his tea samples to customers in small ___ bags.', a: ['silk'], why: '6-paragrafda "sent samples to his customers in small silk bags" deyilgan.' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 2
    {
      title: 'Growing Food in the City',
      intro: 'Allotments, rooftop beds and community plots are multiplying in towns. What do they offer besides vegetables?',
      labelled: true,
      paragraphs: [
        `Cities have always relied on the countryside for their food, but in recent years a growing number of urban residents have decided to grow some of it themselves. Allotments, rooftop beds, community plots and even window boxes have become a familiar part of the landscape from Berlin to Brisbane. The Medford Growers Network, an organisation in northern England, estimates that the number of food-growing sites in its city has risen from about 40 in 2008 to more than 300 today. Its director, Sarah Quinn, says that the pattern is repeated elsewhere. “People want to know where their food comes from,” she says, “and they want something to do with their hands.”`,
        `The idea itself is not new. In Britain during the Second World War, the government’s “Dig for Victory” campaign urged families to turn lawns, parks and even the grounds of palaces into vegetable plots, and by 1943 there were about 1.4 million allotments in the country. Gardening was seen as a patriotic duty that eased the pressure on imported food. After the war, as supermarkets spread and cheap food became widely available, interest faded, and many allotment sites were sold for housing. The recent revival owes more to concerns about the environment and health than to wartime necessity.`,
        `The physical benefits are the easiest to measure. In a survey of 500 adults carried out by Dr Fiona Walsh at Ashbourne University in 2019, people who spent at least three hours a week gardening ate on average one more portion of fruit and vegetables each day than those who did not garden. They were also more likely to meet the official guidelines for weekly exercise, since digging, carrying and weeding demand more effort than most people realise. Dr Walsh is careful to point out, however, that the study cannot show that gardening caused these habits; healthy people may simply be more likely to take up the activity in the first place.`,
        `The benefits for mental health appear to be just as significant. In an experiment at a Dutch university, thirty volunteers were first given a stressful task. Half were then asked to garden for thirty minutes and half to read indoors for the same length of time. Afterwards, the level of cortisol, a hormone linked to stress, had fallen in both groups, but the fall was larger among the gardeners, who also reported a better mood. The researchers suggest that the combination of fresh air, gentle activity and the sight of living plants helps people to recover. Hospitals in several countries now include gardens in their grounds for this reason, and some doctors refer patients with mild depression to community gardening projects.`,
        `Community plots offer something that a private garden cannot: company. Quinn describes one site on a housing estate where, before the garden opened in 2015, many residents had never spoken to their neighbours. Today the group holds a monthly lunch, and older members teach younger ones how to prune fruit bushes. A survey of members at fifteen Medford gardens found that two-thirds said they had made new friends through the project, and nearly half of those over sixty-five lived alone. Such figures suggest that gardens may help to reduce loneliness, which health experts increasingly regard as a serious risk to wellbeing.`,
        `Growing food in a city is not without problems. Land is expensive, and in the most popular districts the waiting list for an allotment can be as long as six years. Another difficulty is the soil. Ground that was once used by factories or garages may contain lead or other pollutants, so beginners are advised to have it tested before planting and, if necessary, to grow vegetables in raised beds filled with clean compost. Water can also be a problem on rooftops, where the wind dries out the plants quickly. Some local councils have responded by offering short leases on empty building sites, which gardeners may use until developers are ready to build.`,
        `It would be easy to exaggerate what urban gardening can achieve. Even in cities with a strong tradition, home-grown produce is thought to supply no more than a small proportion of residents’ vegetables, and nobody seriously suggests that a city could feed itself in this way. Yet judging the movement by its harvest alone misses the point. The evidence reviewed here suggests that the greatest rewards are healthier habits, lower stress and closer neighbourhoods, and these are benefits that no supermarket can offer. For that reason, city planners should regard a vegetable plot as part of the public health system, and set aside land for gardens in every new housing development.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.',
          options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
          items: [
            { q: 'A government campaign that encouraged citizens to grow vegetables on public land', a: 1, why: 'B-paragrafda "Dig for Victory" kampaniyasi: "turn lawns, parks and even the grounds of palaces into vegetable plots" deyilgan.' },
            { q: 'A warning that a study’s results do not prove cause and effect', a: 2, why: 'C-paragrafda Dr Walsh "the study cannot show that gardening caused these habits" deb ogohlantiradi.' },
            { q: 'A comparison of two groups showing that one recovered better from stress', a: 3, why: 'D-paragrafda bog‘bonlik qilganlar va o‘qiganlar solishtirilgan: "the fall was larger among the gardeners".' },
            { q: 'An example of older people passing on skills to younger ones', a: 4, why: 'E-paragrafda "older members teach younger ones how to prune fruit bushes" deyilgan.' },
            { q: 'A reason why soil in some city locations may be unsafe for growing food', a: 5, why: 'F-paragrafda "Ground that was once used by factories or garages may contain lead or other pollutants" deyilgan.' },
          ],
        },
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer of the passage? Choose YES, NO or NOT GIVEN.',
          items: [
            { q: 'The recent growth in urban gardening is mainly the result of wartime shortages.', a: 'no', why: 'B-paragrafda yozuvchi "The recent revival owes more to concerns about the environment and health than to wartime necessity" deydi.' },
            { q: 'Rooftop gardens produce healthier vegetables than gardens at ground level.', a: 'not-given', why: 'F-paragrafda tom bog‘lari faqat suv muammosi nuqtai nazaridan tilga olingan; sabzavotlar sifatini solishtirish yo‘q, shuning uchun NOT GIVEN.' },
            { q: 'A city could realistically provide all its own food through gardens of this kind.', a: 'no', why: 'G-paragrafda "nobody seriously suggests that a city could feed itself in this way" va "easy to exaggerate" deyilgan.' },
            { q: 'Planners should treat gardens as part of a city’s public health provision.', a: 'yes', why: 'G-paragrafda "city planners should regard a vegetable plot as part of the public health system" deyilgan.' },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: Urban gardens',
          instruction: 'Complete the notes below. Choose NO MORE THAN THREE WORDS from the passage for each answer.',
          items: [
            { q: 'In wartime Britain, families were told to turn lawns, ___ and even palace grounds into vegetable plots.', a: ['parks'], why: 'B-paragrafda "lawns, parks and even the grounds of palaces" deyilgan.' },
            { q: 'Regular gardeners ate one more portion of ___ per day than people who did not garden.', a: ['fruit and vegetables'], why: 'C-paragrafda "ate on average one more portion of fruit and vegetables each day" deyilgan.' },
            { q: 'The experiment on stress measured the level of ___, a hormone linked to stress.', a: ['cortisol'], why: 'D-paragrafda "the level of cortisol, a hormone linked to stress" deyilgan.' },
            { q: 'Beginners with polluted soil can grow vegetables in ___ filled with clean compost.', a: ['raised beds'], why: 'F-paragrafda "to grow vegetables in raised beds filled with clean compost" deyilgan.' },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------- PASSAGE 3
    {
      title: 'How Bilingual Brains Work',
      intro: 'Once blamed for confusing children, speaking two languages is now studied as a form of mental exercise.',
      labelled: true,
      paragraphs: [
        `For much of the twentieth century, speaking two languages was widely thought to be a disadvantage. Teachers in many countries advised immigrant parents to use only the majority language at home, believing that a second language would confuse a child and slow its progress at school. Early studies seemed to support this view, finding that bilingual children knew fewer words in each language than children who spoke only one. However, many of those studies compared children from poor families with children from wealthy ones, and did not take account of differences in schooling or income. When researchers began to control for such factors, much of the apparent disadvantage disappeared.`,
        `A different picture emerged in the 1990s. In a series of experiments, Dr Maya Ortega, a psychologist at Westfield University, asked children aged six and seven to sort cards first by colour and then, without warning, by shape. Monolingual and bilingual children performed equally well on the first rule, but when the rule changed, the bilingual children adapted much faster. Ortega proposed that the difference lay not in vocabulary but in what psychologists call executive control, the set of mental skills that directs attention, ignores distractions and switches between tasks. Because bilingual children must decide, many times a day, which language to use and with whom, she argued, they gain constant practice in these skills.`,
        `Brain research has helped to explain why. Eye-tracking experiments show that both of a bilingual person’s languages are active at the same moment, even when only one of them is being used. When an English–Spanish speaker is asked to pick up a candle, for example, her eyes may briefly drift towards a padlock, because the Spanish word for padlock, candado, begins with similar sounds. The brain must therefore suppress the language that is not needed, and scans show that this effort involves regions at the front of the brain that are also used for planning and problem-solving. Like a muscle that is exercised every day, the argument goes, this network grows stronger in people who use two languages daily.`,
        `The most striking claims concern old age. In 2007, a team led by Dr Alan Reyes at a memory clinic in Marlow examined the records of 400 patients with dementia. Those who had spoken two languages for most of their lives had developed their first symptoms about four years later, on average, than those who had spoken only one. Scans showed that the brains of the bilingual patients were in fact more damaged at the time of diagnosis, yet they were coping better. Reyes concluded that bilingualism builds up what he called cognitive reserve, a store of mental flexibility that allows the brain to find alternative routes when its usual paths are blocked. It does not prevent the disease, he stresses; it delays its visible effects.`,
        `Not every scientist is convinced. In 2018, Dr Rebecca Stein reviewed 150 studies of bilingual children and adults and found that the advantage in tests of executive control was small, and often absent, when the groups being compared were carefully matched. She also noticed that experiments reporting an advantage were more likely to be published than those that found none, which could make the overall picture look more favourable than it really is. Supporters of the theory reply that tests carried out in a laboratory may be too simple to capture the benefits of everyday life, and that the effect may depend on how often and how fluently a person switches between languages. At present, the question remains open.`,
        `Learning a language as an adult may also change the brain. Researchers at a language institute in northern Europe scanned thirty adults before and after an intensive three-month course in a new language, and compared them with a group of thirty people who studied other subjects. In the language learners, areas associated with memory and with the processing of speech had grown measurably thicker, and the increase was greatest in those who had worked hardest. Although such studies involve small numbers of people, they suggest that the adult brain is more adaptable than was once believed, and that it is never too late to begin.`,
        `For parents, the practical message is reassuring. Whatever the final verdict on mental benefits, there is no evidence that raising a child with two languages causes confusion or lasting delay, and there are clear advantages of a different kind: the ability to talk with grandparents, to read in more than one language and to move more easily between cultures. Specialists recommend that each parent speak the language they feel most comfortable in, and that children hear both languages regularly in a range of situations. Where bilingual education is offered, the research gives no reason to avoid it.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has seven paragraphs, A–G. Choose the correct heading for paragraphs B–F from the list of headings below.',
          options: [
            'Why some languages are harder to learn than others',
            'Two languages active at once',
            'Evidence from patients with dementia',
            'How translators are trained',
            'Surprising results in a card-sorting task',
            'Signs that learning continues in later life',
            'The best age at which to start',
            'Reasons to doubt the results',
          ],
          items: [
            { q: 'Paragraph B', a: 4, why: 'B-paragrafda Ortega kartalarni rang, keyin shakl bo‘yicha saralash tajribasini o‘tkazgan va ikki tilli bolalar tezroq moslashgan.' },
            { q: 'Paragraph C', a: 1, why: 'C-paragrafda "both of a bilingual person’s languages are active at the same moment" deyilgan.' },
            { q: 'Paragraph D', a: 2, why: 'D-paragrafda demensiya bilan kasallangan 400 bemorning yozuvlari tahlil qilingan.' },
            { q: 'Paragraph E', a: 7, why: 'E-paragrafda "Not every scientist is convinced" — Stein va boshqalarning shubhalari keltirilgan.' },
            { q: 'Paragraph F', a: 5, why: 'F-paragrafda kattalar yangi til o‘rganganda miya o‘zgargani aytilgan: "it is never too late to begin".' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'Why were the early studies of bilingual children unreliable?',
              options: [
                'They tested too few children.',
                'They compared children whose family backgrounds differed greatly.',
                'They relied on the opinions of teachers.',
                'They ignored the children’s vocabulary.',
              ],
              a: 1,
              why: 'A-paragrafda "compared children from poor families with children from wealthy ones, and did not take account of differences" deyilgan.',
            },
            {
              q: 'What did Ortega’s card-sorting experiment show?',
              options: [
                'Bilingual children knew more words than other children.',
                'Bilingual children were better at the first sorting rule.',
                'Bilingual children adjusted more quickly when the rule changed.',
                'Monolingual children found both rules equally easy.',
              ],
              a: 2,
              why: 'B-paragrafda "when the rule changed, the bilingual children adapted much faster" deyilgan.',
            },
            {
              q: 'What did Stein’s review of 150 studies find?',
              options: [
                'The advantage was clear in every study.',
                'The advantage was small or missing when the groups were carefully matched.',
                'The advantage was found only in adults.',
                'The advantage depended on which languages were spoken.',
              ],
              a: 1,
              why: 'E-paragrafda "the advantage… was small, and often absent, when the groups being compared were carefully matched" deyilgan.',
            },
          ],
        },
        {
          kind: 'match',
          title: 'Two languages in one brain',
          instruction:
            'Complete the summary using the list of words, A–H, below. Choose the correct word for each gap.',
          options: ['active', 'memory', 'suppress', 'vocabulary', 'control', 'slower', 'reserve', 'grammar'],
          items: [
            { q: 'Eye-tracking research shows that both of a bilingual person’s languages are ___ at the same moment.', a: 0, why: 'C-paragrafda "both of a bilingual person’s languages are active at the same moment" deyilgan.' },
            { q: 'The brain therefore has to ___ the language that is not needed.', a: 2, why: 'C-paragrafda "The brain must therefore suppress the language that is not needed" deyilgan.' },
            { q: 'This daily practice is thought to strengthen executive ___, which directs attention and switches between tasks.', a: 4, why: 'B-paragrafda "executive control, the set of mental skills that directs attention… and switches between tasks" deyilgan.' },
            { q: 'Bilingual patients appear to build up a cognitive ___ that delays the visible effects of dementia.', a: 6, why: 'D-paragrafda "bilingualism builds up what he called cognitive reserve… it delays its visible effects" deyilgan.' },
          ],
        },
        {
          kind: 'fill',
          instruction: 'Complete each sentence with ONE WORD ONLY from the passage.',
          items: [
            { q: 'In the language-course study, areas linked to ___ and speech processing became thicker.', a: ['memory'], why: 'F-paragrafda "areas associated with memory and with the processing of speech had grown measurably thicker" deyilgan.' },
            { q: 'The adults who took the course were compared with thirty people who studied other ___.', a: ['subjects'], why: 'F-paragrafda "a group of thirty people who studied other subjects" deyilgan.' },
          ],
        },
      ],
    },
  ],
};

export default r8;
