import type { ReadingTest } from '../types';

const r6: ReadingTest = {
  id: 'r6',
  title: 'Academic Reading Test 6',
  topics: ['Transport', 'Animal Cognition', 'Memory'],
  passages: [
    {
      title: 'The Return of the Night Train',
      intro: 'Why Europe’s sleeper services nearly vanished, and why some are coming back.',
      labelled: true,
      paragraphs: [
        'For much of the twentieth century the overnight train was an ordinary part of European life. Passengers boarded in the evening, slept in a compartment and stepped out in a distant capital at breakfast time. At its peak in 1972, the Verland State Railway ran 94 night services every week. Then came a long decline. By 2012 the figure had fallen to 11, and railway after railway announced that the sleeper was a relic that belonged in a museum rather than on the tracks.',
        'Several forces combined to bring about the collapse. Budget airlines, which began to spread in the late 1990s, offered flights between major cities for less than the price of a sleeper berth, and a rail journey of eight hours could not compete with a flight of ninety minutes. High-speed lines then drew away the daytime travellers who had once helped to fill night trains on busy routes. Meanwhile the carriages themselves were growing old. Many dated from the 1970s, and replacing them was costly because a sleeping car holds far fewer passengers than a seating car of the same length, so each carriage earns less. Finally, many governments had begun to see the railways as a cost to be reduced, and night services, which were expensive to staff and run, were among the first to be cut.',
        'The turning point came from public opinion rather than from the railways. A 2019 survey by the Linden Mobility Institute found that 38 per cent of European adults had considered replacing at least one flight with a train journey for environmental reasons, and nearly a fifth said that they had actually done so. Politicians took notice. In 2020 the Verland government, which had once approved the closure of most night services, agreed to pay for new sleeper carriages and to cut the track charges that railways must pay when they run trains at night.',
        'The new carriages entered service in 2021 on the 1,100-kilometre route between the capital, Aldmark, and the port city of Corvin. Their designers wanted to attract a wider public than the old trains had done. Alongside traditional compartments with four berths, they included single and double cabins with private washrooms, and cheap sleeper seats for travellers on a tight budget. Staff were trained to treat the train as a small hotel on wheels, with breakfast served in the cabin and quiet hours enforced after eleven at night. Fares were set by demand, as airline fares are, so a berth booked three months ahead could cost half as much as one bought on the day.',
        'The revival has not been trouble-free. Because night trains cross several countries, each with its own safety rules, signalling and electrical systems, locomotives often have to be changed at borders, and a delay of twenty minutes in one country can grow into several hours by morning. Track maintenance is also usually carried out at night, just when the sleepers need the rails. Some operators have been criticised, too, for the price of cabins on peak weekends, when fares can double.',
        'The passengers are not mainly railway enthusiasts. A study of travellers on the Aldmark–Corvin service in 2023 found that business travellers made up 31 per cent of customers, a larger share than students at 22 per cent. Many business passengers said that sleeping on the train saved them the cost of a hotel room and let them work a full day at each end of the trip. Families made up only 9 per cent of the total, but the railway hopes to attract more of them with discounted children’s fares.',
        'Whether the revival will last remains uncertain. The rail economist Dr Marta Lindqvist argues that night trains will never make large profits and should be treated as a public service, much like a road or a library, justified by the carbon they save rather than by the money they earn. Others believe that rising air fares and carbon taxes will do the job for them. Younger travellers, in particular, seem to regard a night on the rails as part of the holiday rather than as a delay to it, and railways in neighbouring countries have begun to order similar carriages. The Verland railway intends to run 40 services a week by 2030, still fewer than half the number it operated in 1972, but more than three times the figure of 2012.',
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has paragraphs A–G.\nWhich paragraph contains the following information?\nChoose the correct letter, A–G. You may use any letter more than once.',
          options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F', 'Paragraph G'],
          items: [
            { q: 'a reason why replacing old carriages was expensive for railways', a: 1, why: 'B-paragrafda eski vagonlarni almashtirish qimmat bo’lgani sababi aytilgan: "a sleeping car holds far fewer passengers than a seating car of the same length".' },
            { q: 'an action taken by a government to help night trains', a: 2, why: 'C-paragrafda hukumat 2020-yilda yangi vagonlar uchun to’lashga va "track charges" ni kamaytirishga rozi bo’lgan.' },
            { q: 'a description of how ticket prices are decided', a: 3, why: 'D-paragrafda "Fares were set by demand, as airline fares are" deyilgan, narx talabga qarab belgilanadi.' },
            { q: 'the suggestion that night trains should be paid for as a public service', a: 6, why: 'G-paragrafda Dr Lindqvist night trains "should be treated as a public service" deb hisoblaydi.' },
          ],
        },
        {
          kind: 'tfng',
          instruction:
            'Do the following statements agree with the information given in the passage?\nWrite TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, or NOT GIVEN if there is no information on this.',
          items: [
            { q: 'In 2012 the Verland State Railway ran fewer than one fifth of the weekly night services it had run in 1972.', a: 'true', why: 'A-paragrafda 1972-yilda 94 ta, 2012-yilda esa 11 ta reys bo’lgan; 11 soni 94 ning beshdan birida ancha kam, shuning uchun TRUE.' },
            { q: 'Budget airlines began to offer cheap flights between major cities in the early 1990s.', a: 'false', why: 'B-paragrafda arzon aviakompaniyalar "in the late 1990s" tarqala boshlagani aytilgan, shuning uchun FALSE.' },
            { q: 'The Linden survey found that more than a fifth of European adults had replaced a flight with a train journey.', a: 'false', why: 'C-paragrafda faqat "nearly a fifth" aslida poyezdga almashtirgan, ya’ni beshdan biridan kam, shuning uchun FALSE.' },
            { q: 'Sleeper seats are the most popular type of accommodation on the Aldmark–Corvin route.', a: 'not-given', why: 'D-paragrafda sleeper seats mavjudligi aytilgan, lekin qaysi turi eng ommabopligi haqida ma’lumot yo’q, shuning uchun NOT GIVEN.' },
            { q: 'A short delay in one country can lead to a much longer delay by the end of a night journey.', a: 'true', why: 'E-paragrafda "a delay of twenty minutes in one country can grow into several hours by morning" deyilgan, shuning uchun TRUE.' },
          ],
        },
        {
          kind: 'fill',
          title: 'Sentences about night trains',
          instruction: 'Complete the sentences below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'High-speed lines took away the ___ travellers who had helped to fill night trains on busy routes.', a: ['daytime'], why: 'B-paragrafda "High-speed lines then drew away the daytime travellers" deyilgan.' },
            { q: 'In 2020 the government agreed to reduce the ___ that railways pay when they run night trains.', a: ['track charges'], why: 'C-paragrafda "to cut the track charges that railways must pay when they run trains at night" deyilgan.' },
            { q: 'Business passengers said that sleeping on the train saved the cost of a ___.', a: ['hotel room'], why: 'F-paragrafda "saved them the cost of a hotel room" deyilgan.' },
            { q: 'Dr Lindqvist compares night trains to a road or a ___, which are justified by what they give to society.', a: ['library'], why: 'G-paragrafda "much like a road or a library" deyilgan.' },
          ],
        },
      ],
    },
    {
      title: 'How Octopuses Think',
      intro: 'What a soft-bodied animal with a very different brain can tell us about intelligence.',
      labelled: false,
      paragraphs: [
        'Few animals seem as alien as the octopus. Its ancestors split from ours more than 500 million years ago, long before the first backboned creature crawled onto land, and its body plan is almost entirely different: it has no skeleton, three hearts and blue blood. Yet when it is tested on problems of the kind set for rats or crows, it often performs surprisingly well. This has made the octopus a favourite of researchers who want to know whether intelligence has evolved only once, or more than once.',
        'The nervous system is as unusual as the body. An octopus has around 500 million neurons, a figure comparable with that of a dog, but only about a third of them are in the brain. The rest are in the arms, which can taste, touch and make simple decisions without waiting for orders from the centre. A severed arm will still grasp at food for a short time. Dr Ines Carvalho of the Marlow Marine Laboratory describes the animal as “less a single mind with eight tools than a committee that usually agrees”. A creature that thinks with its whole body does not fit neatly into tests designed for animals with one brain, which is one reason it is so hard to study.',
        'Evidence of learning is easy to find. In laboratory tests, octopuses have learned to unscrew jars to reach the food inside, and to pick the correct one of two doors after watching which had earlier led to a reward. In one experiment at the Marlow Laboratory, a crab was placed behind a transparent screen. Most of the 14 octopuses at first jetted straight towards it and bumped into the screen. After a few trials, however, they gave up this approach and crept around the edge instead, and later attempts took them by the long route straight away. Carvalho notes that this is a harder task than it sounds, because it requires an animal to move away from a goal in order to reach it.',
        'More striking are reports from the wild. Off the coast of Indonesia, divers have filmed the veined octopus pulling half a coconut shell from the sea floor, carrying it across open sand, and later fitting two halves together as a shelter. Many scientists regard this as tool use, since the shell has no value until it is carried, and the animal accepts an awkward journey now for protection later. Carvalho is more cautious. She points out that octopuses also hide in rocks, bottles and cans, and that the coconut may simply be an object that happens to fit. Which interpretation is right, she says, cannot be decided without many more observations.',
        'Octopuses also seem to have personalities. Within a single species, individuals differ consistently: some are bold and examine new objects at once, while others stay hidden for days. Aquarium keepers have long reported that certain animals dislike particular people, squirting water at one member of staff but never at another. These stories are charming, but they are weak evidence, since keepers rarely record the occasions when nothing happens, and it would be unwise to build a theory on them.',
        'Why should such a mind have evolved in an animal that lives only a year or two? Most species die soon after breeding, so a young octopus never meets its mother and has nobody to learn from. This puzzles biologists, because intelligence in other animals is usually linked to long childhoods and a complex social life. One explanation is that a soft body leaves the octopus so exposed that it must rely on its wits: a fish protected by hard scales can afford to be dull, whereas a soft-bodied hunter cannot. Another is that a varied diet of crabs, shellfish and fish, each needing a different technique, favoured flexible thinking. Neither account has been proved, and both may be partly right.',
        'Whatever the final explanation, the octopus has already shown that intelligence is not the exclusive property of one branch of life. It also raises practical questions. Some countries now include octopuses in laws that protect animals used in laboratories, and commercial plans to rear them for food have alarmed many scientists. In my view such farming is hard to justify: we do not need to understand how an octopus thinks in order to see that an animal able to solve problems, learn and perhaps plan is unlikely to be indifferent to confinement. The only sensible course is to give the animal the benefit of the doubt.',
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'What is stated about the octopus’s arms in paragraph 2?',
              options: [
                'They contain fewer neurons than the brain does.',
                'They can act to some extent without instructions from the brain.',
                'They are used mainly for finding food rather than for touch.',
                'They stop working as soon as they are separated from the body.',
              ],
              a: 1,
              why: '2-paragrafda qo’llar "make simple decisions without waiting for orders from the centre" deyilgan, shuning uchun B. Neyronlarning faqat uchdan biri miyada, ya’ni A noto’g’ri.',
            },
            {
              q: 'What did the experiment with the transparent screen show?',
              options: [
                'Octopuses cannot see through transparent objects.',
                'Octopuses learned to move away from a visible goal in order to reach it.',
                'Octopuses prefer a long route to a short one.',
                'Octopuses attack barriers until they break.',
              ],
              a: 1,
              why: '3-paragrafda sakkizoyoqlar avval to’siqqa urilgan, keyin "crept around the edge" qilgan; Carvalho buni "move away from a goal in order to reach it" deb tushuntiradi, shuning uchun B.',
            },
            {
              q: 'What is Carvalho’s view of the coconut-shell behaviour?',
              options: [
                'It proves that octopuses plan ahead.',
                'It is probably an accident.',
                'It cannot yet be explained with certainty.',
                'It has been seen too rarely to be real.',
              ],
              a: 2,
              why: '4-paragrafda Carvalho "cannot be decided without many more observations" deydi, ya’ni aniq xulosa yo’q, shuning uchun C.',
            },
            {
              q: 'Why does the writer say the octopus’s intelligence is puzzling?',
              options: [
                'It lives in large groups, which is unusual for an animal with a soft body.',
                'It lacks the long childhood and social life usually linked with intelligence.',
                'It has more neurons than any other animal of its size.',
                'It learns much more slowly than rats or crows.',
              ],
              a: 1,
              why: '6-paragrafda octopus bir-ikki yil yashaydi, onasini ko’rmaydi, "intelligence ... is usually linked to long childhoods and a complex social life" deyilgan, shuning uchun B.',
            },
          ],
        },
        {
          kind: 'ynng',
          instruction:
            'Do the following statements agree with the views of the writer in the passage?\nWrite YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, or NOT GIVEN if it is impossible to say what the writer thinks about this.',
          items: [
            { q: 'The octopus shows that intelligence is not limited to a single branch of life.', a: 'yes', why: '7-paragrafda yozuvchi "intelligence is not the exclusive property of one branch of life" deydi, shuning uchun YES.' },
            { q: 'Stories told by aquarium keepers are reliable evidence of octopus personalities.', a: 'no', why: '5-paragrafda yozuvchi bu hikoyalarni "weak evidence" deydi, shuning uchun NO.' },
            { q: 'Farming octopuses for food is difficult to justify.', a: 'yes', why: '7-paragrafda yozuvchi "In my view such farming is hard to justify" deydi, shuning uchun YES.' },
            { q: 'Octopus farming would be more profitable than catching wild octopuses.', a: 'not-given', why: 'Matnda sakkizoyoq fermasining foydasi yoki yovvoyi ovga solishtirilishi haqida hech narsa yo’q, shuning uchun NOT GIVEN.' },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: octopus biology and behaviour',
          instruction: 'Complete the notes below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'An octopus has no skeleton, three hearts and ___ blood.', a: ['blue'], why: '1-paragrafda "no skeleton, three hearts and blue blood" deyilgan.' },
            { q: 'A severed arm will still grasp at ___ for a short time.', a: ['food'], why: '2-paragrafda "A severed arm will still grasp at food for a short time" deyilgan.' },
            { q: 'In laboratory tests, octopuses have learned to unscrew ___ to reach the food inside.', a: ['jars'], why: '3-paragrafda "learned to unscrew jars to reach the food inside" deyilgan.' },
            { q: 'Divers off Indonesia have filmed an octopus pulling half a ___ from the sea floor to use as a shelter.', a: ['coconut shell'], why: '4-paragrafda "pulling half a coconut shell from the sea floor" deyilgan.' },
            { q: 'Most octopus species die soon after ___.', a: ['breeding'], why: '6-paragrafda "Most species die soon after breeding" deyilgan.' },
          ],
        },
      ],
    },
    {
      title: 'Memory Palaces and the Art of Remembering',
      intro: 'An ancient technique for training the memory, and what modern research says about it.',
      labelled: false,
      paragraphs: [
        'In the first century BC the Roman orator Cicero retold a story that was already four centuries old. At a banquet in Thessaly, the poet Simonides of Ceos was called outside by a message; moments later the roof of the hall collapsed, crushing the guests so badly that their families could not identify the bodies. Simonides found that he could name every victim, because he remembered where each one had been sitting. According to Cicero, this gave him the idea behind what we now call the method of loci, or memory palace: order is the key to remembering, and a series of places can supply it.',
        'The technique is simple to describe. The learner chooses a building that they know well, such as their own home, and walks through it in the mind, fixing a series of distinctive spots in each room: the door, the hearth, a chair. Each item to be remembered is then turned into a vivid image and “placed” at one of the spots. To recall the list, the learner mentally walks the same route and collects the images in order. The Roman treatise known as the Rhetorica ad Herennium, written around 85 BC by an unknown author, advises that the images should be striking, even shocking, because ordinary things slip from the mind while the unusual and the absurd stay.',
        'For Roman lawyers and politicians, who had to speak for hours without notes, the method was a professional necessity, since memory counted as one of the five parts of rhetoric. Quintilian, writing in the first century AD, was more cautious than most teachers. He conceded that places and images were useful for memorising lists, but doubted that they helped with a continuous speech, for which he recommended learning in short sections and repeating them often.',
        'After the fall of Rome, the art passed into the monasteries, where it took a religious direction. Monks used imagined cloisters and cathedrals to memorise prayers, sermons and the order of the virtues and vices. In the sixteenth century the technique travelled far beyond Europe. The Italian Jesuit Matteo Ricci, living in China, taught it to the sons of local officials who were preparing for the civil service examinations, and in 1595 he wrote a short treatise on the subject in Chinese, so that the method could be studied without him.',
        'Ironically, the invention that should have helped memory began its decline. Printing, spreading from the 1450s, put cheap books within reach of ordinary readers, and the French logician Petrus Ramus attacked the art as a cluttered sideshow. Educators increasingly valued understanding over rote learning. By the nineteenth century, memory training survived mainly in stage acts and in advertisements for self-improvement courses.',
        'Psychologists took a fresh interest in the twentieth century, and recent work suggests that the method does what its fans claim. In 2018 a team led by Dr Hannah Reiss at the Halvorsen Institute recruited 50 volunteers with no special training and gave half of them six weeks of instruction, thirty minutes a day. At the start, the average volunteer recalled about 26 words from a list of 72. After the course the trained group recalled about 62, whereas the others improved only slightly, to around 29. Brain scans showed no difference in the structure of the two groups; instead, the trained volunteers had stronger connections between visual regions and regions concerned with spatial navigation. Reiss suggests that the method works because human brains evolved to remember places far better than abstract facts.',
        'Not every expert is persuaded that the method deserves its fame. Professor Kwame Asante argues that memory palaces are excellent for lists but of little use for the kind of understanding that matters in daily life: nobody grasps a legal argument or a mathematical proof by turning its steps into pictures. He also notes that the champions who can memorise a shuffled pack of cards in under thirty seconds are no more gifted than other people at everyday tasks. They are, he says, “brilliant at a trick”.',
        'Yet the method may be gaining a new relevance. Now that telephones store numbers, dates and directions, many people rarely need to remember anything at all. Reiss argues that the loss is not trivial, because facts held in the head can be combined in thought in ways that facts stored in a search engine cannot. Asante replies that a notebook has always been a perfectly good aid. The two do agree on one point: the technique rewards effort, as it always has.',
      ],
      groups: [
        {
          kind: 'match',
          instruction:
            'The passage has eight paragraphs.\nChoose the correct heading for paragraphs 2, 4, 5, 6 and 7 from the list of headings below.',
          options: [
            'A legend about a disaster',
            'Instructions for building a memory palace',
            'An ancient teacher’s reservations',
            'The art travels to new places and new uses',
            'Why the method fell out of favour',
            'Evidence from a controlled experiment',
            'A challenge to the claims made for the method',
            'The method as a defence against digital life',
          ],
          items: [
            { q: 'Paragraph 2', a: 1, why: '2-paragrafda uy tanlash, joylarni belgilash va tasvirlarni "placed" qilish bosqichma-bosqich tushuntirilgan: ii.' },
            { q: 'Paragraph 4', a: 3, why: '4-paragrafda usul monastirlarga va Xitoyga ("Matteo Ricci") tarqalgani aytilgan: iv.' },
            { q: 'Paragraph 5', a: 4, why: '5-paragrafda bosma kitoblar va Ramus hujumi tufayli usul "began its decline" deyilgan: v.' },
            { q: 'Paragraph 6', a: 5, why: '6-paragrafda 50 ta ko’ngillisi bilan o’tkazilgan tajriba va natijalar keltirilgan: vi.' },
            { q: 'Paragraph 7', a: 6, why: '7-paragrafda Professor Asante usulning shuhratiga e’tiroz bildiradi ("Not every expert is persuaded"): vii.' },
          ],
        },
        {
          kind: 'match',
          instruction:
            'Look at the following statements and the list of people below.\nMatch each statement with the correct person, A–E.\nYou may use any letter more than once.',
          options: ['Simonides of Ceos', 'Quintilian', 'Matteo Ricci', 'Hannah Reiss', 'Kwame Asante'],
          items: [
            { q: 'He thought the method was better suited to lists than to continuous speeches.', a: 1, why: '3-paragrafda Quintilian usul ro’yxatlar uchun foydali, lekin "a continuous speech" uchun shubhali deb hisoblagan: B.' },
            { q: 'He taught the method to students in another culture and wrote about it in their language.', a: 2, why: '4-paragrafda Ricci Xitoyda amaldorlar o’g’illariga o’rgatgan va 1595-yilda "in Chinese" risola yozgan: C.' },
            { q: 'He believes that memorising champions have no special advantage in ordinary life.', a: 4, why: '7-paragrafda Asante chempionlar "no more gifted than other people at everyday tasks" deydi: E.' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B, C or D.',
          items: [
            {
              q: 'According to the Rhetorica ad Herennium, why should the images used be striking?',
              options: [
                'Striking images are easier to draw on a wall.',
                'Ordinary things are quickly forgotten, whereas unusual ones stay in the mind.',
                'They help the learner to choose a larger building.',
                'They make a speech more interesting for the audience.',
              ],
              a: 1,
              why: '2-paragrafda "ordinary things slip from the mind while the unusual and the absurd stay" deyilgan, shuning uchun B.',
            },
            {
              q: 'What did Reiss’s experiment find about the trained volunteers?',
              options: [
                'Their brains were structurally different from those of the untrained group.',
                'Both groups improved by about the same amount.',
                'They recalled far more words than the untrained group did.',
                'They improved only when the lists were short.',
              ],
              a: 2,
              why: '6-paragrafda o’qitilgan guruh taxminan 62 ta, boshqalar esa atigi 29 ta so’z eslagan; miya tuzilishida farq yo’q ("no difference in the structure"), shuning uchun C.',
            },
            {
              q: 'What is Asante’s main criticism of memory palaces?',
              options: [
                'They take too long to learn.',
                'They cannot be used by ordinary people.',
                'They are of little help with the understanding needed in everyday life.',
                'They work only for people with a good sense of direction.',
              ],
              a: 2,
              why: '7-paragrafda Asante usul ro’yxatlar uchun yaxshi, lekin kundalik hayotdagi "understanding" uchun foydasiz deydi, shuning uchun C.',
            },
          ],
        },
        {
          kind: 'fill',
          title: 'Notes: the history of the memory palace',
          instruction: 'Complete the notes below.\nChoose NO MORE THAN TWO WORDS from the passage for each answer.',
          items: [
            { q: 'Simonides could name the dead guests because he remembered where each one had been ___.', a: ['sitting'], why: '1-paragrafda "he remembered where each one had been sitting" deyilgan.' },
            { q: 'Monks memorised prayers and sermons using imagined ___ and cathedrals.', a: ['cloisters'], why: '4-paragrafda "Monks used imagined cloisters and cathedrals" deyilgan.' },
            { q: 'Brain scans showed that trained volunteers had stronger links between visual regions and regions concerned with ___.', a: ['spatial navigation'], why: '6-paragrafda "regions concerned with spatial navigation" deyilgan.' },
          ],
        },
      ],
    },
  ],
};

export default r6;
