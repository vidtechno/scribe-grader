import type { DialogueLine, ListeningTest } from '../types';

const v = (voice: DialogueLine['voice']) => (text: string, say?: string): DialogueLine => (say ? { voice, text, say } : { voice, text });
const emma = v('emma');
const isabella = v('isabella');
const george = v('george');
const lewis = v('lewis');

const FILL2 = 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.';

const l6: ListeningTest = {
  id: 'l6',
  title: 'Listening Test 6',
  topics: ['Fitness', 'Railway museum', 'Renewable energy', 'History of the bicycle'],
  sections: [
    // ───────────────────────── SECTION 1 ─────────────────────────
    {
      title: 'Section 1: Joining a gym',
      context: 'Section 1. You will hear a telephone conversation between a woman and a receptionist at a fitness centre.',
      lines: [
        lewis('Good morning, Riverside Fitness Centre, Marcus speaking. How can I help you?'),
        emma("Oh, hello. I'm thinking of joining your gym, and I'd like to find out a bit more about the memberships, please."),
        lewis("Of course. I can take your details over the phone and fill in the enquiry form for you. Could I have your surname first?"),
        emma("Yes, it's Prescott. That's P-R-E-S-C-O-T-T.", "Yes, it's Prescott. That's P, R, E, S, C, O, T, T."),
        lewis("Thank you, Ms Prescott. And do you have a mobile number I can put down?"),
        emma("Yes, it's 07754 218390.", "Yes, it's oh seven seven five four, two one eight, three nine oh."),
        lewis("Let me read that back. 07754 218390. Is that right?", "Let me read that back. Oh seven seven five four, two one eight, three nine oh. Is that right?"),
        emma("That's it, thanks."),
        lewis("Great. Now, we have two main kinds of membership. Standard membership lets you come at any time, seven days a week. Off-peak membership is for weekdays only, between nine in the morning and four in the afternoon."),
        emma("I think I'd need the standard one, because I usually finish work at five. Oh, but wait. I've just changed my hours, so I'll be working from home on Mondays to Fridays and I can come in the mornings. So off-peak would work."),
        lewis("That's a good idea, because it's cheaper. Standard membership is thirty-eight pounds a month, and off-peak is twenty-eight pounds a month. Both include the swimming pool.", "That's a good idea, because it's cheaper. Standard membership is thirty-eight pounds a month, and off-peak is twenty-eight pounds a month. Both include the swimming pool."),
        emma("Twenty-eight pounds. That sounds fair. Is there a joining fee as well?"),
        lewis("Normally there is, but we're not charging it this month, so you won't have to pay anything extra to start."),
        emma("Lovely. Then I'd like to begin as soon as possible. Could I start this Monday, the sixteenth of March?", "Lovely. Then I'd like to begin as soon as possible. Could I start this Monday, the sixteenth of March?"),
        lewis("I'm afraid the centre is closed on Monday, because the floor in the main studio is being repaired. We can open your membership on Tuesday, the seventeenth, though."),
        emma("That's fine. Tuesday the seventeenth, then."),
        lewis("Excellent. Everyone has a free induction session with one of our trainers, which takes about forty minutes. We have a space at half past ten on that morning, if you'd like it."),
        emma("Ten thirty is perfect. I'll be there.", "Ten thirty is perfect. I'll be there."),
        lewis("Good. Now, what are you hoping to do here? Most people like swimming, or the machines, or one of the classes."),
        emma("I used to go to a spinning class at my old gym, but my knee isn't very good now. I think I'd prefer yoga, because it's a lot gentler."),
        lewis("We have yoga on Tuesday and Thursday mornings, so that would fit perfectly with your off-peak membership."),
        emma("Wonderful. One more thing. Do you have lockers? I don't like leaving my bag in the changing room."),
        lewis("Yes, you can rent a locker for three pounds a month. We have small ones and large ones, but the price is the same."),
        emma("Then I'll take one, please."),
        lewis("No problem. Finally, how would you like to pay? Most members use direct debit, but you can also pay by card at reception every month."),
        emma("Direct debit is easier. I'd always forget otherwise."),
        lewis("I'll send the form out to you. And just so we know, how did you hear about us?"),
        emma("I saw your website, but actually it was a leaflet that came through my door last week that made me call."),
        lewis("That's good to know. Thank you, Ms Prescott. We look forward to seeing you on the seventeenth."),
        emma("Thank you very much, Marcus. Goodbye."),
        lewis("Goodbye."),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Riverside Fitness Centre: Enquiry Form',
          instruction: FILL2,
          items: [
            { q: 'Surname: ___', a: ['Prescott'], why: '"It\'s Prescott. That\'s P-R-E-S-C-O-T-T" — familiya harflab aytiladi.' },
            { q: 'Mobile number: ___', a: ['07754 218390', '07754218390'], why: '"It\'s 07754 218390" — telefon raqami aytilib, keyin qayta o\'qiladi.' },
            { q: 'Type of membership: ___', a: ['off-peak', 'off peak', 'offpeak'], why: '"I\'d need the standard one… But wait… I can come in the mornings. So off-peak would work." — standard emas.' },
            { q: 'Monthly cost: £___', a: ['28', '£28', 'twenty-eight', 'twenty eight'], why: '"Standard… thirty-eight pounds… off-peak is twenty-eight pounds a month."' },
            { q: 'Membership starts on: ___ March', a: ['17th', '17', 'seventeenth'], why: '"Monday, the sixteenth… I\'m afraid the centre is closed on Monday… Tuesday, the seventeenth."' },
            { q: 'Induction session at: ___ a.m.', a: ['10.30', '10:30', 'ten thirty', 'half past ten'], why: '"a space at half past ten… Ten thirty is perfect."' },
            { q: 'Class she will join: ___', a: ['yoga'], why: '"I used to go to a spinning class… I think I\'d prefer yoga" — spinning emas, yoga.' },
            { q: 'Locker rental per month: £___', a: ['3', '£3', 'three'], why: '"you can rent a locker for three pounds a month."' },
            { q: 'Method of payment: ___', a: ['direct debit'], why: '"Direct debit is easier. I\'d always forget otherwise."' },
            { q: 'She heard about the centre from a ___', a: ['leaflet'], why: '"I saw your website, but actually it was a leaflet that came through my door" — veb-sayt emas, varaqa.' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 2 ─────────────────────────
    {
      title: 'Section 2: Tour of the Hillcrest Railway Museum',
      context: 'Section 2. You will hear a guide giving a welcome talk to visitors at a railway museum.',
      lines: [
        george("Good morning, everyone, and welcome to the Hillcrest Railway Museum. My name's Ben, and I'll be taking you round for the next hour. First, a little history, and then a few practical points."),
        george("The museum is in what used to be the main station of the town. The trains stopped running here in 1965, and the building stood empty for almost twenty years. A group of local railway fans saved it, and they opened the museum in 1987.", "The museum is in what used to be the main station of the town. The trains stopped running here in nineteen sixty-five, and the building stood empty for almost twenty years. A group of local railway fans saved it, and they opened the museum in nineteen eighty-seven."),
        george("Today the museum is run by volunteers, and many of them used to work on the railway. So if you have a question, please ask. They love talking about trains, and you may even hear a story or two that isn't in the guidebook."),
        george("Now, some practical points. Tickets cost twelve pounds for adults, but if you're a student you pay only seven. Your ticket also lets you ride on our steam train this afternoon. The train leaves at half past two from the platform, so please don't be late, because it can't wait."),
        george("The café is in the old waiting room, and it serves hot food until three o'clock. After that, it only sells drinks and cakes. It's closed on Mondays, but I'm glad to say that's not a problem today."),
        george("About photography. You're very welcome to take photographs everywhere in the museum, and I hope you will. The only exception is the Signal Box, where the floor is old and the space is small. For safety, we ask you not to use a camera flash there, or anywhere inside the Engine Shed, because it can frighten the volunteers who are working on the engines."),
        george("Right, let me tell you what you'll see. We'll start at the Main Hall, which is the big space directly through those doors. This is where our oldest locomotive is kept. She was built in 1861 and is called Duchess. She's the star of the collection, and you can climb up into the driver's cab and pull the whistle.", "Right, let me tell you what you'll see. We'll start at the Main Hall, which is the big space directly through those doors. This is where our oldest locomotive is kept. She was built in eighteen sixty-one and is called Duchess. She's the star of the collection, and you can climb up into the driver's cab and pull the whistle."),
        george("Next, the Signal Box. It's a small wooden building that stands beside the track just outside the hall. Inside there's a lever frame with more than thirty levers, and you can try changing the signals yourself. Many children say that this is their favourite part of the visit."),
        george("After that we'll walk to the Engine Shed, which is the long brick building at the far end of the site. This is where the volunteers repair the engines, and it's the only place where you can see work in progress. You'll see one engine with its boiler taken apart, which is quite a sight."),
        george("Upstairs, above the café, is the Gallery. It holds our collection of old railway posters, uniforms and station signs. The best item there is a model of the whole line as it looked in 1930, which took one volunteer eleven years to build.", "Upstairs, above the café, is the Gallery. It holds our collection of old railway posters, uniforms and station signs. The best item there is a model of the whole line as it looked in nineteen thirty, which took one volunteer eleven years to build."),
        george("Finally, out on the platform you'll see the Mail Coach. This is a carriage where staff used to sort letters while the train was moving, at speeds of sixty miles an hour. It's a really unusual piece of history, and if you ask nicely, one of our volunteers will let you try sorting the letters."),
        george("Please note that the Gallery has no lift at the moment, so it's only reachable by stairs. We hope to install one next year. If anyone needs help, just tell me and I'll arrange for the exhibits to be shown to you downstairs on a screen."),
        george("Before we start, are there any questions? No? Then if you'd like to follow me into the Main Hall, we'll begin with Duchess. Please stay close together, and mind the step as you go in."),
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B or C.',
          items: [
            { q: 'The museum was opened by', options: ['the railway company', 'local railway fans', 'the town council'], a: 1, why: '"A group of local railway fans saved it, and they opened the museum in nineteen eighty-seven."' },
            { q: 'How much does a student ticket cost?', options: ['£7', '£12', '£17'], a: 0, why: '"twelve pounds for adults, but if you\'re a student you pay only seven."' },
            { q: 'The steam train leaves at', options: ['half past one', 'half past two', 'half past three'], a: 1, why: '"The train leaves at half past two from the platform."' },
            { q: 'Visitors are asked not to use a flash', options: ['in the Main Hall', 'in the Gallery', 'in the Engine Shed'], a: 2, why: '"not to use a camera flash there, or anywhere inside the Engine Shed" — Signal Box va Engine Shed.' },
            { q: 'What does the guide say about the Gallery?', options: ['It has no lift.', 'It is closed today.', 'It costs extra to enter.'], a: 0, why: '"the Gallery has no lift at the moment, so it\'s only reachable by stairs."' },
          ],
        },
        {
          kind: 'match',
          instruction: 'Where can visitors find each exhibit? Choose FIVE answers from the list, A-F.',
          options: [
            'in the Main Hall',
            'in the Signal Box',
            'in the Engine Shed',
            'in the Gallery',
            'on the platform',
            'in the café',
          ],
          items: [
            { q: 'The oldest locomotive, Duchess', a: 0, why: '"We\'ll start at the Main Hall… our oldest locomotive is kept. She was built in eighteen sixty-one and is called Duchess."' },
            { q: 'An engine with its boiler taken apart', a: 2, why: '"the Engine Shed… You\'ll see one engine with its boiler taken apart."' },
            { q: 'A model of the whole line', a: 3, why: '"Upstairs… the Gallery… a model of the whole line as it looked in nineteen thirty."' },
            { q: 'A coach used for sorting letters', a: 4, why: '"out on the platform you\'ll see the Mail Coach… staff used to sort letters."' },
            { q: 'A frame of levers for changing signals', a: 1, why: '"Signal Box… a lever frame with more than thirty levers, and you can try changing the signals."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 3 ─────────────────────────
    {
      title: 'Section 3: Planning a presentation on renewable energy',
      context: 'Section 3. You will hear two students, Rachel and Tom, discussing a group presentation on renewable energy.',
      lines: [
        emma("Hi, Tom. Thanks for meeting me. We need to decide how to share out our presentation on renewable energy. It's on the twelfth, and we've only got about two weeks."),
        george("I know. I've been thinking about it. We've got to talk about three kinds of energy, haven't we? Solar, wind and hydroelectric."),
        emma("Yes, and then compare them. Our tutor said we should focus on the advantages and problems of each. Which one would you like to take?"),
        george("I'd like to do wind. My uncle works on a wind farm, so I could ask him some questions, and maybe even get some photographs."),
        emma("That's great. Then I'll do solar. I read a lot about it for my last essay, so I won't have to start from nothing. That leaves hydroelectric power for the last part."),
        george("We could do that one together. It's a bit more technical, with dams and turbines and so on."),
        emma("Good idea. Now, what are the main problems with each one? Let's start with solar."),
        george("The panels are quite expensive to install, aren't they? But the price has come down a lot."),
        emma("It has, but that's not really the main problem. The real issue is that solar panels only work well when it's sunny. In winter, in this country, there's very little power at all."),
        george("Right. And for wind, the problem is the noise, isn't it? People who live near wind farms often complain about it."),
        emma("Some do, but my reading says that modern turbines are much quieter. The bigger complaint is about how they look, and about the birds that fly into them."),
        george("Hmm, that's true. My uncle said the birds were a serious worry, and that engineers are now painting one blade black to make the turbines easier for birds to see."),
        emma("That's interesting. We should put that in. And for hydroelectric power, I think the problem is the land. A big dam floods a huge area, and sometimes whole villages have to move."),
        george("Yes. And it changes the river, so fish can't move up and down it. But it does give a steady supply of power, unlike the other two."),
        emma("OK, so what about visuals? I thought we could use a graph showing how much energy each type produced last year."),
        george("I'd rather have a map. A map of the country showing where the best places are for each one would be more interesting for the audience."),
        emma("Hmm, but a map would be hard to read on a big screen. Let's compromise. We'll use the graph for the introduction and the map for the conclusion."),
        george("Fine. And how long do we have? Twenty minutes?"),
        emma("No, it's twenty-five minutes in total, with five minutes at the end for questions."),
        george("Good. So about eight minutes on each type, and a couple of minutes to finish. What about the handout?"),
        emma("The tutor wants a one-page summary. I'll write it, and you can check it for mistakes, because you're better at spotting them."),
        george("Deal. Shall we meet again on Friday to practise?"),
        emma("Friday's difficult for me. How about Thursday afternoon in the library, at three?"),
        george("Thursday is fine. I'll book a study room so that we can speak out loud without disturbing anyone."),
        emma("Perfect. I'll send you my slides on Wednesday, then. Thanks, Tom."),
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B or C.',
          items: [
            { q: 'Why does Tom want to present wind energy?', options: ['He has read a lot about it.', 'His uncle works on a wind farm.', 'He thinks it is the easiest topic.'], a: 1, why: '"My uncle works on a wind farm, so I could ask him some questions."' },
            { q: 'Which part of the presentation will the two students do together?', options: ['solar power', 'wind power', 'hydroelectric power'], a: 2, why: '"That leaves hydroelectric power for the last part." — "We could do that one together."' },
            { q: 'How long is the presentation, including questions?', options: ['twenty minutes', 'twenty-five minutes', 'thirty minutes'], a: 1, why: '"No, it\'s twenty-five minutes in total, with five minutes at the end for questions."' },
            { q: 'When will the students practise together?', options: ['on Wednesday', 'on Thursday', 'on Friday'], a: 1, why: '"Friday\'s difficult for me. How about Thursday afternoon… Thursday is fine."' },
          ],
        },
        {
          kind: 'match',
          instruction: 'What is the main problem with each type of energy? Choose THREE answers from the list, A-E.',
          options: [
            'It only works well in good weather.',
            'It can harm birds.',
            'It needs very large areas of land to be flooded.',
            'It is too noisy for people nearby.',
            'It is too expensive to build.',
          ],
          items: [
            { q: 'Solar power', a: 0, why: '"solar panels only work well when it\'s sunny. In winter… very little power" — narx asosiy muammo emas.' },
            { q: 'Wind power', a: 1, why: '"the bigger complaint is about how they look, and about the birds that fly into them."' },
            { q: 'Hydroelectric power', a: 2, why: '"A big dam floods a huge area, and sometimes whole villages have to move."' },
          ],
        },
        {
          kind: 'fill',
          title: 'Plans for the presentation',
          instruction: 'Write ONE WORD ONLY for each answer.',
          items: [
            { q: 'Engineers paint one ___ of each turbine black.', a: ['blade'], why: '"engineers are now painting one blade black to make the turbines easier for birds to see."' },
            { q: 'The introduction will use a ___ of energy produced.', a: ['graph'], why: '"We\'ll use the graph for the introduction and the map for the conclusion."' },
            { q: 'Rachel will write a one-page ___ for the audience.', a: ['summary'], why: '"The tutor wants a one-page summary. I\'ll write it."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 4 ─────────────────────────
    {
      title: 'Section 4: The history of the bicycle',
      context: 'Section 4. You will hear part of a lecture about how the bicycle developed over two centuries.',
      lines: [
        isabella("Good afternoon, everyone. Today I'd like to talk about something most of us use without thinking about it: the bicycle. It looks like a simple machine, but it took almost a hundred years and many inventors to reach the design we know today."),
        isabella("The story begins in 1817, when a German baron named Karl von Drais built a machine he called the running machine. It had two wheels, a wooden frame and a steering handle, but no pedals at all. The rider sat on it and pushed along the ground with his feet.", "The story begins in eighteen seventeen, when a German baron named Karl von Drais built a machine he called the running machine. It had two wheels, a wooden frame and a steering handle, but no pedals at all. The rider sat on it and pushed along the ground with his feet."),
        isabella("It was fun, but it wasn't very practical. The roads of the time were rough and muddy, and the machine soon became a fashionable toy for rich young men rather than a useful way to travel. Still, it proved that a person could balance on two wheels."),
        isabella("The next big step came in the 1860s in France. A mechanic named Pierre Michaux fixed pedals directly onto the front wheel, so for the first time riders could move forward without touching the ground. These machines were known as velocipedes.", "The next big step came in the eighteen sixties in France. A mechanic named Pierre Michaux fixed pedals directly onto the front wheel, so for the first time riders could move forward without touching the ground. These machines were known as velocipedes."),
        isabella("However, they had wooden wheels with iron rims, and on cobbled streets the ride was so painful that people gave them a nickname, the boneshaker. I think you can guess why."),
        isabella("To go faster, makers made the front wheel bigger. In the 1870s the high-wheeler appeared, which is often called the penny-farthing. Its front wheel could be as tall as one and a half metres, because a larger wheel travels further with each turn of the pedals.", "To go faster, makers made the front wheel bigger. In the eighteen seventies the high-wheeler appeared, which is often called the penny-farthing. Its front wheel could be as tall as one and a half metres, because a larger wheel travels further with each turn of the pedals."),
        isabella("But it was dangerous. The rider sat very high up, and if the wheel hit a stone, he was thrown forward over the handlebars. Falls were common, and some were serious. As a result, high-wheelers were ridden mainly by young, adventurous men, and almost never by women or older people."),
        isabella("The breakthrough came in 1885, when John Kemp Starley produced the Rover Safety Bicycle. Both wheels were the same size, and the pedals drove the back wheel through a chain. This design was lower, steadier and much safer, and it is the basis of the bicycle you ride today.", "The breakthrough came in eighteen eighty-five, when John Kemp Starley produced the Rover Safety Bicycle. Both wheels were the same size, and the pedals drove the back wheel through a chain. This design was lower, steadier and much safer, and it is the basis of the bicycle you ride today."),
        isabella("A few years later, in 1888, a Scottish vet named John Boyd Dunlop invented the air-filled tyre. He did it to help his young son, who rode a tricycle on a bumpy path and kept complaining about the ride. The new tyre made cycling far more comfortable, and it was an instant success.", "A few years later, in eighteen eighty-eight, a Scottish vet named John Boyd Dunlop invented the air-filled tyre. He did it to help his young son, who rode a tricycle on a bumpy path and kept complaining about the ride. The new tyre made cycling far more comfortable, and it was an instant success."),
        isabella("By the 1890s, cycling had become a craze. Millions of people bought bicycles, and the effect on society was huge. Perhaps the most important change was for women. A bicycle gave them independence, because they could travel alone, and it even changed the way they dressed, as long skirts were replaced by more practical clothes."),
        isabella("In the twentieth century, cars took over, and in many countries the bicycle became a poor person's transport. But interest returned in the 1970s, when oil prices rose sharply and people began to worry about pollution and their health.", "In the twentieth century, cars took over, and in many countries the bicycle became a poor person's transport. But interest returned in the nineteen seventies, when oil prices rose sharply and people began to worry about pollution and their health."),
        isabella("Since then, technology has moved forward again. Today, racing bicycles have frames made of carbon fibre, which is extremely light and strong, and electric bicycles help people to climb hills without getting tired. Yet the basic shape has hardly changed since Starley's Rover."),
        isabella("For next week, I'd like you to read the first chapter of your textbook, and think about why such a simple design has lasted so long. Thank you very much."),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Notes: The development of the bicycle',
          instruction: FILL2,
          items: [
            { q: 'The first machine (1817) had a wooden frame but no ___', a: ['pedals'], why: '"a wooden frame and a steering handle, but no pedals at all."' },
            { q: 'In the 1860s, Michaux fixed pedals to the ___ wheel.', a: ['front'], why: '"fixed pedals directly onto the front wheel."' },
            { q: 'Velocipedes were nicknamed ___ because the ride was painful.', a: ['boneshaker', 'boneshakers', 'the boneshaker'], why: '"people gave them a nickname, the boneshaker."' },
            { q: 'The front wheel of a high-wheeler could be ___ metres tall.', a: ['1.5', 'one and a half', 'one point five'], why: '"as tall as one and a half metres."' },
            { q: 'High-wheelers were dangerous because riders fell over the ___', a: ['handlebars'], why: '"he was thrown forward over the handlebars."' },
            { q: 'The Rover Safety Bicycle (1885) was driven by a ___', a: ['chain'], why: '"the pedals drove the back wheel through a chain."' },
            { q: 'Dunlop invented the air-filled ___', a: ['tyre', 'tire'], why: '"John Boyd Dunlop invented the air-filled tyre."' },
            { q: 'Dunlop was helping his son, who rode a ___', a: ['tricycle'], why: '"his young son, who rode a tricycle on a bumpy path."' },
            { q: 'In the 1890s, bicycles gave women ___', a: ['independence'], why: '"A bicycle gave them independence, because they could travel alone."' },
            { q: 'Modern racing bicycles have frames made of ___', a: ['carbon fibre', 'carbon fiber'], why: '"racing bicycles have frames made of carbon fibre, which is extremely light and strong."' },
          ],
        },
      ],
    },
  ],
};

export default l6;
