import type { ReadingTest } from '../types';

const r3: ReadingTest = {
  id: 'r3',
  title: 'Academic Reading Test 3',
  topics: ['Architecture', 'Health', 'Economics'],
  passages: [
    {
      title: 'Reaching for the Sky: A Short History of the Skyscraper',
      intro: 'Reading Passage 1',
      labelled: false,
      paragraphs: [
        `Until the nineteenth century, the height of a building was limited by its materials and by the stamina of its occupants. Masonry walls had to grow thicker towards the base to carry the weight above them, and the Monadnock Building in Chicago, a sixteen-storey block completed in 1891, needed walls almost two metres thick at ground level. Few tenants, moreover, were willing to climb more than five or six flights of stairs, so the upper floors of most city buildings were let cheaply to servants and the poor, while wealthier residents and shopkeepers occupied the lower ones.`,
        `Two inventions overturned this logic. In 1853, the American engineer Elisha Otis demonstrated at New York’s Crystal Palace a lift fitted with a safety brake that gripped the guide rails if the hoisting rope snapped. His first passenger lift was installed in a department store in 1857. Once the top of a building could be reached without effort, it offered the best light, the best views and the least noise, and rents began to rise with height rather than fall. The second invention was structural. A frame of iron, and later steel, could carry the weight of the floors, so the outer walls no longer held the building up. The Home Insurance Building in Chicago, designed by William Le Baron Jenney and completed in 1885, is often described as the first building to use such a frame, although historians continue to argue about this, because earlier buildings had used iron columns in part. At ten storeys it was modest, yet it weighed only about a third as much as a masonry building of the same size.`,
        `Chicago had particular reasons to innovate. A fire in 1871 destroyed much of the city centre, and the rebuilding coincided with soaring land prices in the commercial district known as the Loop. Developers wanted to squeeze the largest possible rentable area from small plots, and architects of the so-called Chicago School, among them Louis Sullivan, responded with tall buildings with large windows and plain, regular façades. Sullivan insisted that the form of a building should follow its function, and that an office tower should be “every inch a proud and soaring thing”.`,
        `New York soon took the lead in height. The Woolworth Building, completed in 1913, rose to 241 metres and remained the tallest in the world until 1930, when the Chrysler Building overtook it. The Chrysler Building held the record for only about a year, because the Empire State Building, which opened in 1931 after a construction period of just 410 days, stood 381 metres tall. It kept the title for nearly forty years, and its speed of construction, achieved with a workforce that sometimes added a floor in less than a week, remains remarkable even today.`,
        `After the Second World War, the skyscraper changed its character. Mies van der Rohe’s Seagram Building, completed in New York in 1958, was sheathed in glass and bronze, and became a model for thousands of offices around the world. Air-conditioning and fluorescent lighting were crucial to this style: because rooms no longer depended on daylight and open windows, buildings could be wide as well as tall, with floors extending far from the nearest window. In the 1960s the Bangladeshi-born engineer Fazlur Khan, working in Chicago, tackled the problem of wind, which becomes the main enemy of a very tall building. His “tube” system placed closely spaced columns around the perimeter, so that the outer shell worked like a hollow pipe resisting bending. The John Hancock Center, finished in 1969, used about 145 kilograms of steel per square metre of floor, compared with about 206 for the Empire State Building.`,
        `Since the 1990s, the centre of gravity of tall-building construction has moved eastward. The Petronas Towers in Kuala Lumpur, 452 metres high, were completed in 1998, Taipei 101 reached 508 metres in 2004, and the Burj Khalifa in Dubai, at 828 metres, opened in 2010. In 1990, North America contained roughly 80 per cent of the world’s hundred tallest buildings; by 2020 the figure had dropped below 20 per cent. Height has brought its own engineering difficulties. In the upper floors of Taipei 101, a 660-tonne steel sphere hangs from cables to counteract sway, swinging in the opposite direction to the building during typhoons and earthquakes. Lifts also consume space: in the tallest towers the shafts can occupy a large part of the floor area at the base, so designers use double-deck cars and “sky lobbies” where passengers change lifts.`,
        `Criticism has grown as well. Environmental researchers point out that steel and concrete are responsible for a large share of a building’s lifetime carbon emissions, and some planners argue that very tall towers isolate residents from the life of the street. One response has been to return to an ancient material. Mjøstårnet, an 18-storey tower in Brumunddal, Norway, completed in 2019 and standing 85.4 metres high, is built largely of laminated timber. Supporters say that wood stores carbon rather than releasing it; sceptics doubt that it can ever match steel for fire safety or reach the heights of conventional towers. It is, at least, a reminder that the skyscraper’s history has always been shaped by the materials available.`,
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'The writer mentions the Monadnock Building in order to show',
              options: [
                'how quickly Chicago was rebuilt after its fire',
                'the limit that masonry construction placed on height',
                'that tenants preferred to live on the upper floors',
                'the first use of a metal frame in a tall building',
              ],
              a: 1,
              why: 'A-paragrafda "walls almost two metres thick at ground level" deyilgan: g‘isht devorlar balandlikni cheklagan, shuning uchun B.',
            },
            {
              q: 'According to the second paragraph, rents began to rise with height because',
              options: [
                'upper floors were cheaper to build than lower ones',
                'steel frames made the whole building lighter',
                'top floors became attractive once lifts made them easy to reach',
                'Otis sold his lifts mainly to department stores',
              ],
              a: 2,
              why: 'B-paragrafda "Once the top of a building could be reached without effort, it offered the best light, the best views..." deyilgan, shuning uchun C.',
            },
            {
              q: 'Why did Chicago become a centre of tall-building design, according to the writer?',
              options: [
                'A disaster led to rebuilding at a time when central land was expensive.',
                'Its architects had studied the early lifts of New York.',
                'The city wanted to build higher than the Woolworth Building.',
                'Plain façades were cheaper than the decorated ones used elsewhere.',
              ],
              a: 0,
              why: 'C-paragrafda "A fire in 1871 ... rebuilding coincided with soaring land prices" deyilgan, shuning uchun A.',
            },
            {
              q: 'What is the writer’s point about Fazlur Khan’s “tube” system?',
              options: [
                'It removed the need for lifts in very tall buildings.',
                'It allowed rooms to be lit without windows.',
                'It let a building resist wind while using less steel for each square metre.',
                'It replaced steel with concrete in the outer shell.',
              ],
              a: 2,
              why: 'E-paragrafda Hancock Center "145 kilograms of steel per square metre ... compared with about 206" deyilgan: shamolga bardosh berib, kamroq po‘lat ishlatilgan, shuning uchun C.',
            },
          ],
        },
        {
          kind: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 1? Choose TRUE, FALSE or NOT GIVEN.',
          items: [
            {
              q: 'Before the nineteenth century, the upper floors of urban buildings were usually the most expensive to rent.',
              a: 'false',
              why: 'A-paragrafda "upper floors ... were let cheaply to servants and the poor" deyilgan, ya’ni qimmat emas, shuning uchun FALSE.',
            },
            {
              q: 'The first passenger lift supplied by Otis was put into a retail store.',
              a: 'true',
              why: 'B-paragrafda "His first passenger lift was installed in a department store in 1857" deyilgan, shuning uchun TRUE.',
            },
            {
              q: 'The Empire State Building was cheaper to construct than the Chrysler Building.',
              a: 'not-given',
              why: 'D-paragrafda ikkala bino narxi haqida hech narsa aytilmagan, shuning uchun NOT GIVEN.',
            },
            {
              q: 'Air-conditioning made it possible to build offices in which some rooms were a long way from a window.',
              a: 'true',
              why: 'E-paragrafda "floors extending far from the nearest window" deyilgan (kondensioner va lyuminestsent yorug‘lik tufayli), shuning uchun TRUE.',
            },
            {
              q: 'Taipei 101 was finished before the Petronas Towers.',
              a: 'false',
              why: 'F-paragrafda Petronas 1998 yilda, Taipei 101 esa 2004 yilda tugagan, shuning uchun FALSE.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Key developments in skyscraper construction',
          instruction: 'Complete the table below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            {
              q: '1853 | Elisha Otis shows a lift with a safety ___ that grips the guide rails',
              a: ['brake'],
              why: 'B-paragrafda "a lift fitted with a safety brake that gripped the guide rails" deyilgan; javob: brake.',
            },
            {
              q: 'Late 1800s | A metal frame carries the load, so the outer ___ no longer support the building',
              a: ['walls'],
              why: 'B-paragrafda "the outer walls no longer held the building up" deyilgan; javob: walls.',
            },
            {
              q: '1960s | Khan’s tube design places closely spaced ___ around the perimeter',
              a: ['columns'],
              why: 'E-paragrafda "placed closely spaced columns around the perimeter" deyilgan; javob: columns.',
            },
            {
              q: '2004 | A 660-tonne steel ___ hangs inside Taipei 101 to reduce sway',
              a: ['sphere'],
              why: 'F-paragrafda "a 660-tonne steel sphere hangs from cables to counteract sway" deyilgan; javob: sphere.',
            },
          ],
        },
      ],
    },
    {
      title: 'Why We Sleep: A Century of Discoveries',
      intro: 'Reading Passage 2',
      labelled: true,
      paragraphs: [
        `For most of human history, sleep was regarded as a kind of absence: a nightly shutdown in which the body rested and the mind, quite simply, switched off. That assumption lasted until 1953, when Eugene Aserinsky and Nathaniel Kleitman, working at the University of Chicago, noticed that sleepers’ eyes sometimes darted back and forth beneath closed lids. When volunteers were woken during these episodes, most reported vivid dreams. The researchers had identified rapid eye movement, or REM, sleep, and in doing so showed that the sleeping brain is far from idle. Instruments that recorded electrical activity revealed that the brain during REM looks remarkably like the brain of someone who is awake. Since then, sleep has become a serious field of study, with its own laboratories, journals and clinics.`,
        `A normal night is not a single block of unconsciousness but a series of cycles, each lasting roughly ninety minutes. In each cycle the sleeper moves from light sleep into deep, slow-wave sleep and then into REM; deep sleep dominates the first half of the night, while REM periods grow longer towards morning. An adult typically passes through four to six cycles. Why such an elaborate structure should have evolved has long puzzled scientists, but in 2013 a team led by the Danish neuroscientist Maiken Nedergaard offered one clue. Working with mice, they found that the spaces between brain cells widen by about 60 per cent during sleep, allowing fluid to wash away waste products, including a protein called beta-amyloid, which builds up in the brains of people with Alzheimer’s disease. It would be premature to assume that the same process operates in humans, but the finding has encouraged researchers to ask whether chronic sleeplessness might contribute to dementia.`,
        `Sleep also appears to play a part in memory. In one experiment at a British university, 120 students learned a list of unrelated word pairs in the evening. Half were allowed to sleep normally, while the others were kept awake all night; both groups were then given two nights of recovery sleep before being tested. The students who had slept straight after learning recalled on average 81 per cent of the pairs, against 62 per cent for those who had stayed awake. The result is striking because the sleepless group had enjoyed full recovery sleep before the test, which suggests that the first night after learning is especially important. Researchers think that during deep sleep the brain replays the day’s experiences, moving them from a temporary store into long-term storage. REM sleep, by contrast, may help to link new information with older knowledge, which could explain why dreams so often combine familiar people with unfamiliar places.`,
        `The effects of going without sleep altogether are harder to study, because few experiments of this kind would be ethical. The best-known case is that of Randy Gardner, a seventeen-year-old Californian who in December 1963 stayed awake for 264 hours, or eleven days, as part of a school science project. Within a few days he was struggling to concentrate; by the end he suffered lapses of memory, slurred speech and hallucinations. Remarkably, he slept for only about fifteen hours afterwards and returned to a normal pattern within a few nights. Researchers are cautious about drawing conclusions from the case, however. Gardner was young and healthy, and he was kept busy and watched constantly, which may have hidden the brief “micro-sleeps” that overcome exhausted people without warning. Doctors now strongly discourage such attempts, and the Guinness book of records no longer accepts them.`,
        `A claim often repeated in newspapers is that people in industrialised societies sleep about ninety minutes less than their grandparents did, and that electric light and screens are to blame. The evidence for this is thin. In 2015, Jerome Siegel of the University of California, Los Angeles, and his colleagues measured the sleep of three communities of hunter-gatherers and small-scale farmers, in Tanzania, Namibia and Bolivia, who live without electricity. These people slept between 5.7 and 7.1 hours a night, no more than many city dwellers, and they rarely complained of insomnia. The data make the popular belief look doubtful, although critics reply that three small communities cannot represent the whole of pre-industrial humanity. At the very least, the figures suggest that the connection between modern life and poor sleep is less simple than many commentators assume.`,
        `Teenagers are the group for whom sleep loss is most obvious. During adolescence the body begins to produce the hormone melatonin about two hours later in the evening than in childhood, so a fifteen-year-old who is told to go to bed at nine o’clock may simply not be sleepy. Yet most secondary schools start early. In 2018, researchers at the University of Washington studied two high schools in Seattle where the first lesson was moved from 7.50 am to 8.45 am. Students slept an average of 34 minutes longer each night, and their grades rose by 4.5 per cent. Findings like these suggest that schools in many countries ought to reconsider their timetables, and it is hard to see a good argument for ignoring them.`,
        `Many people now try to monitor their own sleep with wristbands, rings and phone applications. These devices estimate sleep from movement and heart rate, and in laboratory comparisons they tend to overestimate the time users spend asleep, because a person lying motionless but awake can be mistaken for a sleeper. They are also poor at telling the stages of sleep apart. More worryingly, some specialists have met patients who become so preoccupied with achieving perfect scores that they end up sleeping worse, a condition one group of researchers has named orthosomnia. For those who struggle to sleep, the best advice remains unglamorous: keep regular hours, keep the bedroom dark and cool, and avoid caffeine in the afternoon.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for paragraphs B-F from the list of headings below. There are more headings than paragraphs, so you will not use all of them.',
          options: [
            'Why different species sleep in different ways',
            'The structure of the night and a built-in cleaning system',
            'Evidence that sleep strengthens memory',
            'The economic cost of tired employees',
            'An extreme case of going without sleep',
            'A popular belief about modern sleep is questioned',
            'Treatments for chronic insomnia',
            'Matching school timetables to teenage biology',
          ],
          items: [
            { q: 'Paragraph B', a: 1, why: 'B-paragrafda tun davrlari ("cycles ... ninety minutes") va miya hujayralari orasidagi bo‘shliq kengayib chiqindini yuvishi ("spaces between brain cells widen") tasvirlangan.' },
            { q: 'Paragraph C', a: 2, why: 'C-paragrafda so‘z juftliklari tajribasi va "the first night after learning is especially important" deyilgan: uyqu xotirani mustahkamlaydi.' },
            { q: 'Paragraph D', a: 4, why: 'D-paragrafda Randy Gardner 264 soat uxlamagani ("stayed awake for 264 hours") tasvirlangan: uyqusizlikning keskin holati.' },
            { q: 'Paragraph E', a: 5, why: 'E-paragrafda "The evidence for this is thin" va Siegel ma’lumotlari mashhur tasavvurni shubha ostiga qo‘yadi.' },
            { q: 'Paragraph F', a: 7, why: 'F-paragrafda o‘smirlarda melatonin kechroq ishlanadi va maktab darslarini kechiktirish natijalari keltirilgan ("reconsider their timetables").' },
          ],
        },
        {
          kind: 'fill',
          instruction: 'Complete the sentences below. Choose ONE WORD ONLY from the passage for each answer.',
          items: [
            {
              q: 'The researchers who first described REM sleep were based in the American city of ___.',
              a: ['Chicago'],
              why: 'A-paragrafda "working at the University of Chicago" deyilgan; javob: Chicago.',
            },
            {
              q: 'Experiments on mice showed that the gaps between brain cells ___ while the animals slept.',
              a: ['widen', 'widened'],
              why: 'B-paragrafda "the spaces between brain cells widen by about 60 per cent during sleep" deyilgan; javob: widen.',
            },
            {
              q: 'Randy Gardner stayed awake as part of a school ___ project.',
              a: ['science'],
              why: 'D-paragrafda "as part of a school science project" deyilgan; javob: science.',
            },
            {
              q: 'Compared with children, adolescents start producing the hormone ___ later in the evening.',
              a: ['melatonin'],
              why: 'F-paragrafda "produce the hormone melatonin about two hours later" deyilgan; javob: melatonin.',
            },
            {
              q: 'Sleep-tracking devices judge how well a person sleeps from heart rate and ___.',
              a: ['movement'],
              why: 'G-paragrafda "estimate sleep from movement and heart rate" deyilgan; javob: movement.',
            },
          ],
        },
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer in Reading Passage 2? Choose YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.',
          items: [
            {
              q: 'It is too early to assume that the cleaning process seen in mice also takes place in people.',
              a: 'yes',
              why: 'B-paragrafda "It would be premature to assume that the same process operates in humans" deyilgan, shuning uchun YES.',
            },
            {
              q: 'The writer agrees that people in modern societies sleep far less than their ancestors did.',
              a: 'no',
              why: 'E-paragrafda "The evidence for this is thin" va "make the popular belief look doubtful" deyilgan, shuning uchun NO.',
            },
            {
              q: 'The writer believes that later school start times would be difficult for school authorities to organise.',
              a: 'not-given',
              why: 'F-paragrafda tashkiliy qiyinchiliklar haqida hech narsa aytilmagan, shuning uchun NOT GIVEN.',
            },
            {
              q: 'The writer suggests that some people who use sleep trackers may end up sleeping less well.',
              a: 'yes',
              why: 'G-paragrafda "More worryingly ... they end up sleeping worse, a condition ... named orthosomnia" deyilgan, shuning uchun YES.',
            },
          ],
        },
      ],
    },
    {
      title: 'Why Do Some Cities Thrive?',
      intro: 'Reading Passage 3',
      labelled: false,
      paragraphs: [
        `In 2007, for the first time in history, more than half of the world’s people lived in towns and cities, and by the middle of this century the proportion is expected to approach seventy per cent. Yet urban growth has not been evenly shared. Consider two American cities that were both important industrial centres in the middle of the twentieth century. Detroit, home to 1.8 million people in 1950, had shrunk to about 640,000 by 2020, its streets dotted with abandoned factories. Boston, whose population had fallen to around 560,000 by 1980, recovered to roughly 675,000 and became a world centre for medicine, finance and biotechnology. Economists have long asked what separates the places that reinvent themselves from those that merely decline, and their answers reveal deep disagreements about what cities actually do.`,
        `The oldest explanation comes from Alfred Marshall, whose Principles of Economics (1890) tried to explain why firms making the same product so often settle side by side, as the cutlery makers of Sheffield and the cotton mills of Lancashire did. Marshall identified three advantages: a local pool of workers with specialist skills, nearby suppliers of materials and equipment, and the free circulation of knowledge, since in a district of related firms “the mysteries of the trade become no mysteries; but are as it were in the air”. The idea was later formalised by Kenneth Arrow and Paul Romer, and it implies that cities grow fastest when they concentrate on what they already do well.`,
        `Jane Jacobs, the writer and activist, saw things differently. In The Economy of Cities (1969), she argued that new work is created mostly by combining existing kinds of work, which happens most readily where many different trades are packed together. She pointed to sixteenth-century Birmingham, whose many small metalworking trades produced a stream of new products and allowed it to outgrow Manchester, which relied on textiles. A city dependent on a single industry, in her view, is fragile: when that industry falters, nothing else is ready to take its place. A well-known 1992 study of 170 American cities appeared to support her, finding that industries grew faster in cities with a diverse economic base than in specialised ones.`,
        `A third school emphasises people rather than industries. The Harvard economist Edward Glaeser, author of Triumph of the City (2011), has shown in a series of studies that the best single predictor of a city’s growth is the share of its residents holding university degrees; cities that began a decade with many graduates grew faster over the following ten years, whatever industries they contained. Skilled workers, Glaeser argues, not only earn more themselves but also raise the productivity of those around them, and cities are valuable precisely because they shrink the distance between people. On this view Boston’s revival owed less to any particular industry than to its universities, which kept supplying educated people when its old factories closed.`,
        `The most popular, and most criticised, version of the human-capital argument came from Richard Florida. In The Rise of the Creative Class (2002), he claimed that scientists, engineers, designers and artists are the engine of urban growth, and that they choose where to live by looking for what he called the three Ts: talent, technology and tolerance. Companies, he argued, follow these workers rather than the reverse, so the way to attract investment is to build the cafés, music venues, cycle lanes and welcoming atmosphere that creative people like. Mayors from Pittsburgh to Singapore took up the idea enthusiastically. Critics, including Glaeser, replied that Florida’s measure of the creative class is little more than a count of graduates under another name, and in 2017 Florida himself conceded that the clustering of talent had widened inequality within successful cities.`,
        `These debates are not purely academic, because local governments spend large sums trying to put theory into practice. When Amazon announced in 2017 that it would build a second headquarters, 238 North American cities submitted bids, many promising tax concessions of enormous value. Yet research on such incentives is discouraging: surveys of firms’ decisions suggest that tax breaks rarely alter where companies choose to locate, and mostly reward them for choices they would have made anyway. Where incentives do change behaviour, the benefit often goes to shareholders rather than to local residents, which is why many economists regard the bidding contests as an expensive distraction.`,
        `Success also carries costs. In cities that attract skilled workers, demand for housing pushes up rents, and the people who clean the offices and drive the buses may be forced to live far away. Glaeser blames restrictive planning rules that limit the supply of new homes, while others, Florida among them, argue that cities must build affordable housing directly. The two camps agree on one point at least: a city that grows rich while excluding most of its workers is unlikely to remain attractive for long.`,
        `Perhaps the theories are less like rival explanations than like chapters in a single story. In 2001 the economists Gilles Duranton and Diego Puga proposed that diversified cities act as “nurseries” in which new products are tested using the many skills at hand; once a product reaches mass production, firms move to specialised cities where costs are lower. If so, Marshall and Jacobs were describing different stages of the same cycle, and the cities that thrive are those that can do both: nurture novelty, and then let it mature. Whether a city can be steered deliberately in that direction remains an open question.`,
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'Complete each sentence with the correct ending, A-G, below. There are more endings than sentences, so you will not use all of them.',
          options: [
            'its varied small trades allowed new kinds of work to emerge from combinations of existing ones.',
            'investment in public transport matters more to growth than education does.',
            'specialist workers, suppliers and trade knowledge are all available close by.',
            'tax incentives rarely change where firms decide to locate.',
            'the proportion of residents who hold university degrees.',
            'little more than a measure of how many graduates a city has.',
            'their dependence on one industry protected them from economic shocks.',
          ],
          items: [
            { q: 'Marshall thought that firms in the same industry gather in one place because...', a: 2, why: 'B-paragrafda Marshall uchta afzallikni sanaydi: "pool of workers with specialist skills, nearby suppliers ... circulation of knowledge", shuning uchun C.' },
            { q: 'Jacobs believed that Birmingham outgrew Manchester because...', a: 0, why: 'C-paragrafda "many small metalworking trades produced a stream of new products and allowed it to outgrow Manchester" deyilgan, shuning uchun A.' },
            { q: 'Glaeser’s studies suggest that a city’s growth is best predicted by...', a: 4, why: 'D-paragrafda "the best single predictor ... is the share of its residents holding university degrees" deyilgan, shuning uchun E.' },
            { q: 'Critics of Florida’s theory say that his idea of the creative class is...', a: 5, why: 'E-paragrafda "little more than a count of graduates under another name" deyilgan, shuning uchun F.' },
            { q: 'Studies of contests such as Amazon’s search for a second headquarters show that...', a: 3, why: 'F-paragrafda "tax breaks rarely alter where companies choose to locate" deyilgan, shuning uchun D.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'The writer compares Detroit and Boston in order to show that',
              options: [
                'the growth of medicine and finance is the main cause of urban success',
                'cities with similar industrial pasts can have very different futures',
                'the closure of factories was the sole reason for Detroit’s decline',
                'Boston has always had a larger population than Detroit',
              ],
              a: 1,
              why: 'A-paragrafda ikkala shahar ham sanoat markazi bo‘lgani, ammo taqdiri har xil ekani aytilgan, shuning uchun B.',
            },
            {
              q: 'What does Marshall’s phrase “in the air” suggest about knowledge in an industrial district?',
              options: [
                'It is kept secret by the most skilled workers.',
                'It passes informally between people working near one another.',
                'It is damaged by the pollution of factories.',
                'It is difficult for new firms to understand.',
              ],
              a: 1,
              why: 'B-paragrafda "free circulation of knowledge ... in a district of related firms" deyilgan: bilim yaqin firmalar orasida norasmiy tarqaladi, shuning uchun B.',
            },
            {
              q: 'What is the writer’s view of tax incentives for companies?',
              options: [
                'They work best when offered to small firms.',
                'They are an unreliable way of influencing where firms locate.',
                'They should be increased so that cities can compete.',
                'They usually bring most benefit to local residents.',
              ],
              a: 1,
              why: 'F-paragrafda "research on such incentives is discouraging ... tax breaks rarely alter where companies choose to locate", shuning uchun B.',
            },
            {
              q: 'What do Duranton and Puga’s “nurseries” suggest about the earlier theories?',
              options: [
                'Marshall was wrong and Jacobs was right.',
                'Neither theory can explain how new products appear.',
                'Both may be correct, but about different stages of a product’s life.',
                'Specialised cities are less successful than diversified ones.',
              ],
              a: 2,
              why: 'H-paragrafda "Marshall and Jacobs were describing different stages of the same cycle" deyilgan, shuning uchun C.',
            },
          ],
        },
        {
          kind: 'tfng',
          instruction: 'Do the following statements agree with the information given in Reading Passage 3? Choose TRUE, FALSE or NOT GIVEN.',
          items: [
            { q: 'Marshall’s ideas about industrial clusters were published before the end of the nineteenth century.', a: 'true', why: 'B-paragrafda Marshall asari "Principles of Economics (1890)" deb ko‘rsatilgan, shuning uchun TRUE.' },
            { q: 'Jacobs argued that a city relying on a single industry would recover quickly when that industry declined.', a: 'false', why: 'C-paragrafda "A city dependent on a single industry ... is fragile: when that industry falters, nothing else is ready", shuning uchun FALSE.' },
            { q: 'Glaeser’s research was paid for by city governments.', a: 'not-given', why: 'D-paragrafda Glaeser tadqiqotlarini kim moliyalashtirgani aytilmagan, shuning uchun NOT GIVEN.' },
            { q: 'Florida later admitted that gathering talented people in one place had increased inequality inside successful cities.', a: 'true', why: 'E-paragrafda "in 2017 Florida himself conceded that the clustering of talent had widened inequality", shuning uchun TRUE.' },
          ],
        },
      ],
    },
  ],
};

export default r3;
