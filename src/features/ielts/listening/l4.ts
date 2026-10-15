import type { DialogueLine, ListeningTest } from '../types';

const v = (voice: DialogueLine['voice']) => (text: string, say?: string): DialogueLine => (say ? { voice, text, say } : { voice, text });
const emma = v('emma');
const isabella = v('isabella');
const george = v('george');
const lewis = v('lewis');

const FILL2 = 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.';

const l4: ListeningTest = {
  id: 'l4',
  title: 'Listening Test 4',
  topics: ['Car hire', 'Wildlife park', 'Psychology', 'Archaeology'],
  sections: [
    // ───────────────────────── SECTION 1 ─────────────────────────
    {
      title: 'Section 1: Booking a hire car',
      context: 'Section 1. You will hear a telephone conversation between a customer and an employee of a car hire company.',
      lines: [
        lewis('Good afternoon, Rapid Rentals, Daniel speaking. How can I help you?'),
        isabella("Oh, hello. I'd like to hire a car for about a week, please. I'm going to stay with my sister and I'll need to get around quite a bit."),
        lewis("Certainly. I'll just take a few details for the booking form. Could I have your surname first?"),
        isabella("Yes, it's Whitcombe. That's W-H-I-T-C-O-M-B-E.", "Yes, it's Whitcombe. That's W, H, I, T, C, O, M, B, E."),
        lewis("Thank you, Mrs Whitcombe. And could I take your postcode, please? It's just for our records."),
        isabella('Sure. It\'s CB4 2PX.', "Sure. It's C B four, two P X."),
        lewis('CB4 2PX. Lovely.', 'C B four, two P X. Lovely.'),
        lewis("Now, where would you like to collect the car? We have a desk at the airport, and another one at Bridgeford railway station."),
        isabella("Oh, the airport, I think. No, hang on, my train actually gets in at Bridgeford, so the station would be much better."),
        lewis("No problem at all. And what date would you like to pick it up?"),
        isabella("I'll be arriving on the 18th of October, so, um, actually, my sister's away until the Monday, so I'd rather take it on the 19th, if that's all right."),
        lewis("That's fine. The 19th of October, then. What kind of car would you like? We've got small hatchbacks, estate cars and SUVs.", "That's fine. The nineteenth of October, then. What kind of car would you like? We've got small hatchbacks, estate cars and S U Vs."),
        isabella("I always drive a hatchback at home, but I'll be bringing a lot of luggage and a few boxes for my sister, so I'd better take the estate."),
        lewis("Good choice, there's plenty of room in those. And how many days do you need it for?"),
        isabella("Five days. Well, no, I won't be going home until the Sunday, so it's six days altogether."),
        lewis("Six days, fine. The estate is £35 a day. Oh, sorry, that's last year's price. It went up in the summer, so it's now £38 a day.", "Six days, fine. The estate is thirty-five pounds a day. Oh, sorry, that's last year's price. It went up in the summer, so it's now thirty-eight pounds a day."),
        isabella("That's all right. It's still cheaper than the other company I rang."),
        lewis("Good. Would you like any extras? A satnav is five pounds a day, and a child seat is three pounds a day."),
        isabella("I won't need a satnav, my phone does that. But my nephew is only three, so yes, I'd better have a child seat, please."),
        lewis("Child seat, no problem. Now, about insurance. Basic cover is included, but you'd be responsible for the first £500 of any damage. We call that the excess.", "Child seat, no problem. Now, about insurance. Basic cover is included, but you'd be responsible for the first five hundred pounds of any damage. We call that the excess."),
        isabella("Hmm, that's quite a lot. Can I reduce it?"),
        lewis("Yes, if you take our extra cover for six pounds a day, the excess goes down to £250.", "Yes, if you take our extra cover for six pounds a day, the excess goes down to two hundred and fifty pounds."),
        isabella("Then I'll take that, please. I'd rather not worry."),
        lewis("Sensible. One last thing is fuel. The car will have a full tank when you collect it, and we ask you to bring it back with a full tank as well. Otherwise there's a refuelling charge, and it's quite expensive."),
        isabella("That's fine. I'll fill it up on the way back to the station."),
        lewis("Perfect. Please bring your driving licence and a credit card when you collect the car. I'll email the confirmation to you this afternoon."),
        isabella("Thank you very much, that's been really helpful."),
        lewis("You're welcome, Mrs Whitcombe. Have a lovely trip. Goodbye."),
        isabella('Goodbye.'),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Rapid Rentals: Booking Form',
          instruction: FILL2,
          items: [
            { q: 'Surname: ___', a: ['Whitcombe'], why: '"It\'s Whitcombe. That\'s W-H-I-T-C-O-M-B-E" — familiya harflab aytiladi.' },
            { q: 'Postcode: ___', a: ['CB4 2PX', 'CB42PX'], why: '"It\'s CB4 2PX." — pochta indeksi bir marta aytiladi va takrorlanadi.' },
            { q: 'Collect car from: ___ railway station', a: ['Bridgeford'], why: '"the airport, I think. No, hang on, my train gets in at Bridgeford" — aeroport emas, Bridgeford.' },
            { q: 'Date of collection: ___ October', a: ['19th', '19', 'nineteenth'], why: '"I\'ll be arriving on the 18th… I\'d rather take it on the 19th" — 18 emas, 19.' },
            { q: 'Type of car: ___', a: ['estate', 'estate car'], why: '"I always drive a hatchback… so I\'d better take the estate." — hatchback rad etildi.' },
            { q: 'Length of hire: ___ days', a: ['6', 'six'], why: '"Five days. Well, no… so it\'s six days altogether." — 5 emas, 6 kun.' },
            { q: 'Cost per day: £___', a: ['38', '£38', 'thirty-eight', 'thirty eight'], why: '"thirty-five pounds… that\'s last year\'s price… now thirty-eight pounds a day."' },
            { q: 'Extra equipment: ___ seat', a: ['child', 'child seat'], why: '"I won\'t need a satnav… my nephew is only three, so yes… a child seat."' },
            { q: 'Insurance excess with extra cover: £___', a: ['250', '£250', 'two hundred and fifty', 'two hundred fifty'], why: '"the first five hundred pounds" — oddiy sug\'urta; "extra cover… the excess goes down to two hundred and fifty."' },
            { q: 'Return the car with a ___ tank of fuel', a: ['full'], why: '"bring it back with a full tank as well. Otherwise there\'s a refuelling charge."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 2 ─────────────────────────
    {
      title: 'Section 2: Fernhill Wildlife Park',
      context: 'Section 2. You will hear a guide giving a welcome talk to a group of visitors at a wildlife park.',
      lines: [
        isabella("Good morning, everyone, and welcome to Fernhill Wildlife Park. My name's Claire, and I'll be your guide for the first part of your visit. Before we set off, I'd like to give you a bit of background and a few practical details."),
        isabella("A lot of visitors assume the park has always been a nature reserve, but it was actually a quarry until the nineteen-eighties. When the stone ran out, the owners let the old pits fill with rainwater, and the wildlife simply moved in. A charity bought the site in 1992 and began to turn it into the park you see today.", "A lot of visitors assume the park has always been a nature reserve, but it was actually a quarry until the nineteen-eighties. When the stone ran out, the owners let the old pits fill with rainwater, and the wildlife simply moved in. A charity bought the site in nineteen ninety-two and began to turn it into the park you see today."),
        isabella("Now, tickets. If you pay at the gate, an adult ticket costs fourteen pounds. But if you book online, it's only eleven, so it's worth remembering for next time. Your ticket is valid for the whole year, so you can come back as often as you like, which is a real bargain.", "Now, tickets. If you pay at the gate, an adult ticket costs fourteen pounds. But if you book online, it's only eleven pounds, so it's worth remembering for next time. Your ticket is valid for the whole year, so you can come back as often as you like, which is a real bargain."),
        isabella("A word about parking. The main car park is free for park visitors, but it does fill up quickly at weekends. If it's full, you can use the overflow field, which is a five-minute walk away. There's a small charge there, but it goes straight back into the conservation work."),
        isabella("Let me tell you about today's events. The otters are fed at two o'clock, which is always a favourite with children, so I'd advise getting to the viewing platform ten minutes early. The bird of prey display is at noon, but it's on a different day each week, so do check the board outside the café.", "Let me tell you about today's events. The otters are fed at two o'clock, which is always a favourite with children, so I'd advise getting to the viewing platform ten minutes early. The bird of prey display is at twelve noon, but it's on a different day each week, so do check the board outside the café."),
        isabella("You'll also see our shop by the exit. Please don't think of it as just a place for souvenirs. Every penny of profit pays for our breeding programme for wildcats, which is the reason many of you will have heard of us. So even a postcard helps."),
        isabella("One rule that surprises people concerns dogs. We do welcome them, but only on a lead, and only in the picnic area and on the main path. Please don't take them into any of the animal areas, as the smell can really upset the more nervous species."),
        isabella("Right, now let me introduce the four areas you'll be visiting this morning. First, the Wetlands. This is the old quarry, and it's the best place for water birds and otters. There's a large hide with a proper roof, so even if the weather turns wet, you can stay comfortable and keep watching for as long as you like."),
        isabella("Next is the Woodland Trail. The path is narrow and uneven, so I'm afraid it isn't suitable for wheelchairs or buggies. It's also home to our badgers and deer, which are easily frightened, so you can only enter as part of a guided walk. The next one leaves at eleven, and you can book a place with me afterwards."),
        isabella("Then there's the Grassland Walk, where you'll find our bison and wild horses. The path here is flat and tarmac all the way round, so it's ideal for wheelchairs and pushchairs. If you'd like to feed any animals by hand, that's not here but at Farmyard Corner, which is next to the picnic area."),
        isabella("Finally, the Night House. This is where you can see animals that are only active after dark, such as owls and bats. It was getting far too crowded, so last spring we doubled its size. There's now a second viewing room, and the whole building is much less cramped than it used to be."),
        isabella("There's also the Butterfly House, but I should mention that it's shut for the winter, and it will reopen in April. Now, if you'd all like to follow me, we'll begin at the Wetlands. Please stay together, and do ask questions as we go."),
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B or C.',
          items: [
            { q: 'Before it became a wildlife park, the site was', options: ['a farm', 'a quarry', 'a private estate'], a: 1, why: '"it was actually a quarry until the nineteen-eighties."' },
            { q: 'What is the advantage of booking an adult ticket online?', options: ['It is cheaper.', 'It is valid for longer.', 'It avoids queues.'], a: 0, why: '"at the gate… fourteen pounds. But if you book online, it\'s only eleven."' },
            { q: 'What does the guide say about the overflow car park?', options: ['It is free of charge.', 'The money is used for conservation.', 'It is a long way from the entrance.'], a: 1, why: '"There\'s a small charge there, but it goes straight back into the conservation work."' },
            { q: 'The otters are fed at', options: ['twelve noon', 'two o\'clock', 'four o\'clock'], a: 1, why: '"The otters are fed at two o\'clock" — 12:00 da yirtqich qushlar namoyishi.' },
            { q: 'The profits from the shop are used to', options: ['pay the staff', 'build a new café', 'support a breeding programme'], a: 2, why: '"Every penny of profit pays for our breeding programme for wildcats."' },
            { q: 'Visitors who bring a dog may', options: ['take it into any area on a lead', 'walk it only in certain places', 'not bring it into the park at all'], a: 1, why: '"only on a lead, and only in the picnic area and on the main path."' },
          ],
        },
        {
          kind: 'match',
          instruction: 'Which feature of each area does the guide mention? Choose FOUR answers from the list, A-F.',
          options: [
            'It can only be visited with a guide.',
            'It has a covered place to watch from.',
            'It is suitable for wheelchairs and pushchairs.',
            'It has recently been made bigger.',
            'Visitors can feed the animals by hand.',
            'It is closed in winter.',
          ],
          items: [
            { q: 'The Wetlands', a: 1, why: '"a large hide with a proper roof, so even if the weather turns wet, you can stay comfortable."' },
            { q: 'The Woodland Trail', a: 0, why: '"you can only enter as part of a guided walk."' },
            { q: 'The Grassland Walk', a: 2, why: '"flat and tarmac all the way round, so it\'s ideal for wheelchairs and pushchairs."' },
            { q: 'The Night House', a: 3, why: '"last spring we doubled its size." Qo\'lda boqish Farmyard Cornerda, qishda yopiq — Butterfly House.' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 3 ─────────────────────────
    {
      title: 'Section 3: Sleep and memory study',
      context: 'Section 3. You will hear two psychology students, Hannah and Tom, discussing their presentation on a sleep experiment with their tutor, Dr Hughes.',
      lines: [
        lewis("Come in, both of you. Right, you're presenting your sleep and memory study next week. How far have you got with the experiment itself?"),
        emma("We've finished running it, Dr Hughes. We're just trying to decide how to present everything. Tom, do you want to start by explaining who took part?"),
        george("Sure. We needed people who were roughly the same age, so we recruited forty first-year undergraduates through the psychology noticeboard. We'd hoped for sixty, but not enough people signed up."),
        lewis("Forty is workable, but we'll come back to that. What exactly did they have to do?"),
        emma("They had to memorise a set of items in the evening and then be tested the next morning. Originally we were going to use word lists, but a pilot showed that was far too easy, so we switched to pairs of pictures instead."),
        lewis("Good decision. Pictures are harder to rehearse in your head. And the two conditions?"),
        george("One group slept as normal in their own rooms. The other group had to stay awake all night in the department's common room, where we gave them board games and kept an eye on them."),
        emma("It was a long night. Tom nearly fell asleep himself."),
        lewis("I can imagine. So what did you find?"),
        george("The group who slept remembered about thirty per cent more of the pairs. That's quite a clear difference."),
        lewis("It is, but a clear difference isn't the same as a proven one. With only forty people, you can't just show me the averages and stop there. You'll need to run a statistical test, to show that the gap couldn't easily have happened by chance."),
        emma("We were going to do that, but we weren't sure which one was right."),
        lewis("Come and see me on Thursday and we'll go through it. Now, if you were doing the study again, is there anything you'd change?"),
        george("We relied on people telling us how well they'd slept. Some of them probably exaggerated. Next time we'd ask each person to keep a sleep diary for a week beforehand, so we'd have something more reliable."),
        lewis("That's an excellent point to mention in your evaluation. Right, now the presentation itself. How are you planning to open?"),
        emma("I thought we should begin with a summary of the method, because it's the part everyone's going to want to understand."),
        lewis("I'd try something different. Start with the question, why do we forget things, and why might sleep help? Then the audience knows why they're listening, and the method will make more sense."),
        george("That's a good idea. We'll do that. Hannah, we've got twenty minutes, haven't we?"),
        emma("No, it's fifteen minutes, plus five for questions. I checked the module guide last night."),
        lewis("Hannah's right. Fifteen minutes goes quickly, so be strict with yourselves. How many slides have you got?"),
        george("About twenty-five at the moment. Quite a few have tables of numbers."),
        lewis("That's far too many. For a talk this length, I'd cut them to twelve or so. And replace the tables with graphs, so the audience can see the pattern straight away rather than reading figures."),
        emma("We can do that. And who should answer the questions at the end? I'm happier with the theory, and Tom knows the data better."),
        lewis("Then split it. Tom takes anything about the results, and Hannah deals with the theory and the background. It shows you both understand the whole project."),
        george("Fine. Is there anything we should do before the day?"),
        lewis("Yes. Practise at least once in front of other students, not just in your room. They'll spot things you've stopped noticing. And send me your slides by Wednesday evening, so I can look at them before our meeting."),
        emma("OK, we'll get everything to you by then. Thanks very much, Dr Hughes."),
        lewis("Not at all. See you on Thursday."),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Sleep and memory study',
          instruction: 'Write ONE WORD ONLY for each answer.',
          items: [
            { q: 'The participants were forty first-year ___', a: ['undergraduates'], why: '"we recruited forty first-year undergraduates through the psychology noticeboard."' },
            { q: 'The students had to memorise pairs of ___', a: ['pictures'], why: '"word lists… far too easy, so we switched to pairs of pictures instead."' },
            { q: 'One group was kept ___ all night in the common room.', a: ['awake'], why: '"The other group had to stay awake all night in the department\'s common room."' },
            { q: 'Dr Hughes says the students need to run a ___ test on their results.', a: ['statistical'], why: '"You\'ll need to run a statistical test, to show that the gap couldn\'t easily have happened by chance."' },
            { q: 'In a future study, each person would keep a sleep ___ beforehand.', a: ['diary'], why: '"ask each person to keep a sleep diary for a week beforehand."' },
          ],
        },
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B or C.',
          items: [
            { q: 'Dr Hughes suggests that the presentation should begin with', options: ['a summary of the method', 'a question about forgetting', 'a graph of the results'], a: 1, why: '"Start with the question, why do we forget things, and why might sleep help?" — Hannah usul bilan boshlashni aytgan edi.' },
            { q: 'How long is the presentation?', options: ['fifteen minutes', 'twenty minutes', 'twenty-five minutes'], a: 0, why: '"No, it\'s fifteen minutes, plus five for questions." — Tom 20 degan, bu noto\'g\'ri.' },
            { q: 'Dr Hughes advises replacing the tables with', options: ['photographs', 'graphs', 'short quotations'], a: 1, why: '"replace the tables with graphs, so the audience can see the pattern straight away."' },
            { q: 'At the end, Tom will answer questions about', options: ['the theory', 'the background', 'the results'], a: 2, why: '"Tom takes anything about the results, and Hannah deals with the theory and the background."' },
            { q: 'What must the students send Dr Hughes by Wednesday evening?', options: ['their slides', 'their questionnaire', 'a report on the pilot'], a: 0, why: '"send me your slides by Wednesday evening, so I can look at them."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 4 ─────────────────────────
    {
      title: 'Section 4: A Bronze Age settlement in the fens',
      context: 'Section 4. You will hear part of a university lecture about an archaeological excavation in a wetland area.',
      lines: [
        lewis("Good morning, everyone. In today's lecture I want to look at a site that has changed the way archaeologists think about everyday life in the Bronze Age. It's a settlement known as Harrowmere Fen, and I'll explain why it's so valuable, what the excavation revealed, and what it still can't tell us."),
        lewis("First, how it was found. In 2009, a farmer was clearing a drainage ditch on low-lying land when he noticed several dark, straight timbers in the bank. He reported them to the local archaeology unit, and over the following three years a team led by Dr Imogen Calloway excavated the site."),
        lewis("The reason this site matters is the soil. Most archaeological sites lose almost everything made of wood, leather or plant fibre, because those materials rot away in normal ground. At Harrowmere, however, the deposits were permanently waterlogged. With almost no oxygen present, the decay was dramatically slowed, and organic materials survived for more than three thousand years."),
        lewis("Let's turn to the buildings. The team found the remains of at least six round houses, which were raised above the wet ground on a platform. This was constructed from oak planks, laid across a framework of upright posts. Crucially, the timbers still had their outer rings, which allowed the team to date the site very precisely."),
        lewis("The method they used was dendrochronology, or tree-ring dating. Every year a tree adds a ring, and the thickness varies with the weather, so the pattern in one timber can be matched against reference sequences. At Harrowmere, the pattern showed that the oaks were felled in the same season, and that the settlement was built around 1150 BC.", "The method they used was dendrochronology, or tree-ring dating. Every year a tree adds a ring, and the thickness varies with the weather, so the pattern in one timber can be matched against reference sequences. At Harrowmere, the pattern showed that the oaks were felled in the same season, and that the settlement was built around eleven fifty BC."),
        lewis("That is much more accurate than radiocarbon dating, which typically gives a range of a century or more. It also tells us something about the community. To fell and move that many oaks in a single season, the inhabitants must have been well organised."),
        lewis("What did the roofs look like? Here, the evidence is remarkable. Large sections of the walls and roofs had collapsed and been sealed in the peat. They show that the houses were covered with bundles of reed, laid in overlapping layers, in a technique that is still used on some cottages today."),
        lewis("Now, food. Ordinary pottery rarely tells us much, but the Harrowmere vessels were different. Chemical analysis of the clay showed residues of animal fat, which suggests that the pots were used for cooking meat, perhaps in long, slow stews. There was no evidence of fish, which is surprising given how close the settlement was to the water."),
        lewis("The settlement was clearly not isolated, either. Among the finds were several beads made of amber. The nearest source of amber is hundreds of kilometres away on a distant coast, so these objects must have been traded across a long network of communities. They were found in a house, rather than a grave, so they may have been valued everyday objects rather than burial goods."),
        lewis("What happened to the settlement? The answer lies, once again, in the wood. Some of the upper timbers show signs of repair, then of being raised, and then of being left. Dr Calloway argues that the area became progressively wetter, and that the inhabitants were ultimately driven out by flooding. There is no sign of fire or violence, which rules out an attack."),
        lewis("Finally, let me say a word about preservation, because the story doesn't end when the excavation does. Wood that has been underwater for three thousand years is extremely fragile. If it dries out, it cracks and collapses within hours. For that reason, every timber that was removed from the site had to be kept in cold water, and conservators have spent a decade replacing the water in the wood with a special wax."),
        lewis("Next week we'll look at how those methods compare with the way archaeologists deal with metal finds. In the meantime, please read the two excavation reports on the course website, and think about what you would want to know before you decided to excavate a site like this one."),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Notes: Harrowmere Fen settlement',
          instruction: FILL2,
          items: [
            { q: 'Discovered in 2009 when a farmer was clearing a ___', a: ['drainage ditch', 'ditch'], why: '"a farmer was clearing a drainage ditch… he noticed several dark, straight timbers."' },
            { q: 'Organic materials survived because the ground was ___', a: ['waterlogged'], why: '"the deposits were permanently waterlogged. With almost no oxygen… decay was slowed."' },
            { q: 'Houses were raised on a platform made of ___', a: ['oak planks', 'oak'], why: '"constructed from oak planks, laid across a framework of upright posts."' },
            { q: 'Settlement dated using ___', a: ['tree rings', 'tree-ring dating', 'tree ring dating', 'dendrochronology'], why: '"dendrochronology, or tree-ring dating" — radiocarbon emas, daraxt halqalari.' },
            { q: 'Settlement built around ___ BC', a: ['1150', 'eleven fifty'], why: '"the settlement was built around eleven fifty BC."' },
            { q: 'Roofs were covered with bundles of ___', a: ['reed', 'reeds'], why: '"covered with bundles of reed, laid in overlapping layers."' },
            { q: 'Pottery contained residues of ___', a: ['animal fat'], why: '"Chemical analysis of the clay showed residues of animal fat" — baliq izi topilmagan.' },
            { q: 'Evidence of trade: beads made of ___', a: ['amber'], why: '"several beads made of amber… must have been traded across a long network."' },
            { q: 'Settlement was probably abandoned because of ___', a: ['flooding', 'floods'], why: '"driven out by flooding. There is no sign of fire or violence."' },
            { q: 'Excavated timbers had to be kept in ___', a: ['cold water'], why: '"every timber… had to be kept in cold water" — quriydigan bo\'lsa, yorilib ketadi.' },
          ],
        },
      ],
    },
  ],
};

export default l4;
