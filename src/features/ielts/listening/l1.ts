import type { DialogueLine, ListeningTest } from '../types';

const v = (voice: DialogueLine['voice']) => (text: string, say?: string): DialogueLine => (say ? { voice, text, say } : { voice, text });
const emma = v('emma');
const isabella = v('isabella');
const george = v('george');
const lewis = v('lewis');

const FILL2 = 'Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.';

const l1: ListeningTest = {
  id: 'l1',
  title: 'Listening Test 1',
  topics: ['Accommodation', 'Tourism', 'Academic life', 'Science'],
  free: true,
  sections: [
    // ───────────────────────── SECTION 1 ─────────────────────────
    {
      title: 'Section 1: Booking a student room',
      context: 'Section 1. You will hear a telephone conversation between a student and a student-accommodation officer.',
      lines: [
        emma('Good morning, Student Accommodation Office, Emma speaking. How can I help you?'),
        george("Hi, good morning. I'm calling about a room in one of the university residences for next term. I've only just accepted a place on a master's course, so I haven't got anywhere to live yet."),
        emma("Congratulations. Yes, we've still got a few rooms left. I'll take some details for the booking form, if that's all right. Could I have your surname first?"),
        george("Of course. It's Hartley."),
        emma('Is that H-A-R-T-L-E-Y?', 'Is that H, A, R, T, L, E, Y?'),
        george("That's right, H-A-R-T-L-E-Y.", "That's right. H, A, R, T, L, E, Y."),
        emma("Lovely. And a contact number, please?"),
        george('Um, my mobile is 07700 900123.', 'Um, my mobile is oh seven seven double-oh, nine double-oh, one two three.'),
        emma('Sorry, was that 900132?', 'Sorry, was that nine double-oh, one three two?'),
        george("No, it's 900123. One, two, three at the end.", "No, it's nine double-oh, one two three. One, two, three at the end."),
        emma("Got it, thank you. Now, which course will you be studying? We keep that on file in case we need to put people from the same department together."),
        george("It's a master's in marine biology. I did apply for environmental science as well, but in the end I chose marine biology."),
        emma("Good choice, it's a very popular department. When would you like to move in? Term starts on the 22nd of September."),
        george("Well, I was thinking of the 13th, but, oh no, actually my flight doesn't land until late that night. So could I arrive on the 14th instead?"),
        emma("Yes, that's fine. The 14th of September, then. Now, we've got three kinds of room. There's a standard single with a shared bathroom, an en-suite room, and a studio flat with its own kitchen."),
        george("Hmm. The studio sounds expensive. I think the standard one would be fine, actually. No, wait. I'll be sharing a kitchen with lots of people, so I'd rather have my own bathroom. The en-suite, please."),
        emma("Certainly. The en-suite is £520 a month. Oh, sorry, that's last year's price. It's gone up, so it's now £540 a month.", "Certainly. The en-suite is five hundred and twenty pounds a month. Oh, sorry, that's last year's price. It's gone up, so it's now five hundred and forty pounds a month."),
        george("That's all right. And what about the studio, just out of interest?"),
        emma("Six hundred and ninety. So quite a bit more.", "Six hundred and ninety pounds. So quite a bit more."),
        george("Right. I'll stick with the en-suite. Is there a deposit?"),
        emma("Yes. We take a deposit of three hundred pounds when you sign the contract. A lot of students assume it's a month's rent, but it isn't. And you get it back at the end of the year, as long as there's no damage.", "Yes. We take a deposit of £300 when you sign the contract. A lot of students assume it's a month's rent, but it isn't. And you get it back at the end of the year, as long as there's no damage."),
        george("Great. Where exactly is the building? I'd like to look it up on the map."),
        emma("It's called Hawthorn Court, on Mill Lane, about ten minutes' walk from the main campus. The postcode is M14 5RG.", "It's called Hawthorn Court, on Mill Lane, about ten minutes' walk from the main campus. The postcode is M, one four, five R G."),
        george("M14 5RG. Perfect, thanks. And is the internet included, or do I need to set that up myself?", "M, one four, five R G. Perfect, thanks. And is the internet included, or do I need to set that up myself?"),
        emma("You don't need to do anything. The rent covers electricity, water, heating and internet. The only thing that isn't included is the laundry. The washing machines in the basement take coins, so you'd need to bring some with you."),
        george("That's fine. I'll make sure I've got some change. What happens when I arrive? Do I just go to reception?"),
        emma("Not quite. Reception is only for paying fees and handing in forms. You'll need to collect your keys from the porters' lodge, which is just inside the main gate. It's open from eight in the morning until six in the evening, so you should be fine on the 14th."),
        george("Brilliant. I'll aim to be there before six, then. Is there anything I need to bring with me?"),
        emma("Just your passport and the confirmation email, which I'll send you this afternoon. You'll also receive a link to sign the contract online."),
        george("Thank you so much, Emma. That's been really helpful."),
        emma("You're very welcome. We look forward to seeing you in September, Mr Hartley. Goodbye."),
        george('Goodbye.'),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Student Accommodation: Booking Form',
          instruction: FILL2,
          items: [
            { q: 'Surname: ___', a: ['Hartley'], why: '"It\'s Hartley… H-A-R-T-L-E-Y" — familiya Hartley deb harflab aytiladi.' },
            { q: 'Mobile number: ___', a: ['07700 900123', '07700900123'], why: 'Avval "900132" deb xato eshitiladi, lekin George "No, it\'s 900123" deb tuzatadi.' },
            { q: 'Course: Master\'s in ___', a: ['marine biology'], why: '"I did apply for environmental science as well, but in the end I chose marine biology."' },
            { q: 'Arrival date: ___ September', a: ['14th', '14', 'fourteenth'], why: '"the 13th, but, oh no, actually… could I arrive on the 14th instead?" — 13 emas, 14.' },
            { q: 'Type of room: ___ room', a: ['en-suite', 'ensuite', 'en suite'], why: '"I\'d rather have my own bathroom. The en-suite, please." — standard va studio rad etilgan.' },
            { q: 'Monthly rent: £___', a: ['540', '£540'], why: '"five hundred and twenty… that\'s last year\'s price… now five hundred and forty pounds" — to\'g\'ri narx 540.' },
            { q: 'Deposit: £___', a: ['300', '£300', 'three hundred'], why: '"We take a deposit of three hundred pounds" — depozit 300.' },
            { q: 'Postcode: ___', a: ['M14 5RG', 'M145RG'], why: '"The postcode is M14 5RG." — Hawthorn Court, Mill Lane manzili.' },
            { q: 'The rent covers electricity, water, heating and ___', a: ['internet', 'wi-fi', 'wifi'], why: '"The rent covers electricity, water, heating and internet." Kir yuvish pullik.' },
            { q: 'Collect keys from the ___', a: ['porters lodge', "porters' lodge", "porter's lodge"], why: '"Reception is only for paying fees… collect your keys from the porters\' lodge."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 2 ─────────────────────────
    {
      title: 'Section 2: Harbourside Leisure Centre',
      context: 'Section 2. You will hear a guide giving a talk to new members of a leisure centre.',
      lines: [
        isabella("Good evening, everyone, and welcome to Harbourside Leisure Centre. My name's Sarah, and I'll be showing you around tonight. Before we start the tour, I'd like to tell you a little about the centre and how it works."),
        isabella("Many people are surprised to hear that this building wasn't always a sports centre. Some of you may think it was a railway station, because of the big arched windows, but in fact it was a cotton mill, and it employed hundreds of local people for over a century. The council converted it in the nineties, and we've kept as many of the original features as we could."),
        isabella("Now, a few practical points. Your membership card gives you access to everything except the specialist classes. If you're a student, you'll get a fifteen per cent discount on the monthly fee, and for anyone over sixty-five the discount is twenty per cent. Families get ten per cent, but you have to sign up together.", "Now, a few practical points. Your membership card gives you access to everything except the specialist classes. If you're a student, you'll get a fifteen per cent discount on the monthly fee, and for anyone over sixty-five the discount is twenty per cent. Families get ten per cent, but you have to sign up together."),
        isabella("As for parking, there's a car park behind the building. Visitors can stay for two hours free of charge, but members can park all day for nothing, provided that you register your number plate at reception. Otherwise the machine will charge you, and I'm afraid the fines are quite high."),
        isabella("If you're thinking of swimming, you'll want to know when to come. First thing in the morning, from seven until nine, is the busiest time, because of the lane swimmers who come before work. Evenings are also quite crowded. If you'd like a bit more space, the best time is on weekday afternoons, between one and four, when there are hardly ever more than a handful of people in the water."),
        isabella("One thing you'll notice is that the café on the ground floor is closed at the moment. That isn't because of staff problems, as some people have been saying. The whole area is being refurbished, and it should reopen in November. In the meantime, there are vending machines by the main entrance, and you can bring your own food to the seating area upstairs."),
        isabella("Right, let's talk about the facilities themselves, and what you need to know about each one."),
        isabella("First, the swimming pool. This reopened in March after being completely renovated. The old tiles have gone, there's a new filtration system, and the changing rooms have been rebuilt, so you'll find it's a very different place from a year ago."),
        isabella("Next, the gym, which is on the first floor. It's open to over-sixteens only, and everybody has to complete an induction before using the equipment. The induction takes about forty minutes, and you can arrange one at reception whenever you like."),
        isabella("Then there's the climbing wall at the far end of the main hall. It's one of our most popular attractions, so you can't just turn up. You need to book a session in advance, either online or by phone, and I'd recommend doing it at least two days ahead, especially at weekends."),
        isabella("Now, you may have been hoping to try squash. I'm sorry to say that the two squash courts are shut at the moment because the floors are being replaced. We expect the work to be finished by the end of next month, and we'll send an email to everybody when they're ready."),
        isabella("Finally, the sauna and steam room, which are next to the pool. Lots of people ask whether they have to pay extra, and the answer is no. They're free for all members, whatever type of membership you have, although children under sixteen aren't allowed in."),
        isabella("I should also mention the yoga studio upstairs, where we run classes for complete beginners on Tuesday and Thursday evenings. Those are very friendly, and you don't need to bring anything except a towel."),
        isabella("Now, if you'd like to follow me, we'll start with the changing rooms and then walk through to the pool. Please keep together, and do ask questions as we go along."),
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B or C.',
          items: [
            { q: 'The building used to be', options: ['a cotton mill', 'a railway station', 'a school'], a: 0, why: '"some of you may think it was a railway station… but in fact it was a cotton mill."' },
            { q: 'Students get a discount on the monthly fee of', options: ['10%', '15%', '20%'], a: 1, why: '"If you\'re a student, you\'ll get a fifteen per cent discount" — 20% 65 yoshdan oshganlarga, 10% oilalarga.' },
            { q: 'Members can park at the centre', options: ['for two hours without charge', 'all day if they register their car', 'only if they pay at the machine'], a: 1, why: '"members can park all day for nothing, provided that you register your number plate."' },
            { q: 'The best time to go swimming if you want more space is', options: ['early in the morning', 'on weekday afternoons', 'in the evening'], a: 1, why: '"the best time is on weekday afternoons, between one and four" — ertalab va kechqurun gavjum.' },
            { q: 'The café is closed at the moment because', options: ['it is being refurbished', 'there are not enough staff', 'the area has flooded'], a: 0, why: '"That isn\'t because of staff problems… The whole area is being refurbished."' },
          ],
        },
        {
          kind: 'match',
          instruction: 'What does the guide say about each facility? Choose FIVE answers from the list, A-F.',
          options: [
            'It has recently been renovated.',
            'It must be booked in advance.',
            'It is only for people over sixteen.',
            'It is free for all members.',
            'It is temporarily closed.',
            'It runs classes for beginners.',
          ],
          items: [
            { q: 'Swimming pool', a: 0, why: '"This reopened in March after being completely renovated."' },
            { q: 'The gym', a: 2, why: '"It\'s open to over-sixteens only" va induction kerak.' },
            { q: 'Climbing wall', a: 1, why: '"you can\'t just turn up. You need to book a session in advance."' },
            { q: 'Squash courts', a: 4, why: '"the two squash courts are shut at the moment because the floors are being replaced."' },
            { q: 'Sauna and steam room', a: 3, why: '"They\'re free for all members, whatever type of membership you have."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 3 ─────────────────────────
    {
      title: 'Section 3: Green roofs project',
      context: 'Section 3. You will hear two students, Nina and Sam, discussing a research project on green roofs with their tutor, Dr Patel.',
      lines: [
        lewis("Come in, both of you. Right, you wanted to talk about your environmental science project. Nina, remind me how you came up with the topic."),
        isabella("Well, Sam originally wanted to look at solar panels, but I've been interested in green roofs since last spring. I saw a lot of them when I went on the exchange trip to Copenhagen, and I couldn't stop thinking about how they might cool a city down."),
        george("And I have to admit I was a bit sceptical at first. But Nina convinced me, and I think it's a more interesting question than the one I'd suggested."),
        lewis("Good. Now, I read your proposal last night, and my main worry is that it's much too broad. You say you want to study the effect of green roofs on city temperatures, but that could be a whole PhD. Could you narrow it down?"),
        isabella("We thought we could just focus on our own campus, and compare a planted roof with an ordinary one."),
        lewis("That's the right approach. And how are you planning to measure the temperature?"),
        george("We wondered about using the university's weather station, but it's too far from the roofs we're interested in. So we've borrowed some small data loggers from the department. They record the temperature every ten minutes, and we can download the results afterwards."),
        lewis("Excellent. Have you chosen the buildings yet?"),
        isabella("We have, though it hasn't been easy. We wanted the library, because it has a lovely planted roof, but it turns out that nobody is allowed up there for safety reasons. So we've moved to the Science Block, which has a green roof on one side and a plain gravel roof on the other."),
        lewis("That's actually ideal, because the two roofs are the same height and face the same direction. It makes the comparison fairer. Now, how long are you going to collect data?"),
        isabella("I thought two weeks would be enough."),
        george("I'd have said eight, to be on the safe side, but that would leave us no time to write it up."),
        lewis("Eight weeks would be ideal in theory, but you only have a term. Two weeks is too short, because you could just get a hot spell or a cold spell, and then your results would be meaningless. I'd suggest four weeks, as a minimum."),
        isabella("Four it is, then. We can start on Monday."),
        lewis("Good. And what about the presentation? Have you decided who is doing which part?"),
        george("Nina's doing the introduction and the conclusion, because she's better at speaking in front of people. I'll take the data analysis, since I'm the one who's been working with the spreadsheets."),
        isabella("That's right. I used to think I'd rather do the analysis, but Sam's far quicker at it than I am."),
        lewis("Sensible. Now, let's go through what you've done so far. Nina, I've looked at your literature review."),
        isabella("Was it all right? I wasn't sure if I had included enough."),
        lewis("There's plenty of detail, and the sources are good, apart from the article about Singapore, which isn't really relevant to a British climate. But overall it's far too long for a project of this size. It needs to be cut by about a third."),
        isabella("OK, I can do that. I'll start tonight."),
        lewis("And Sam, you did a questionnaire for the building staff about how comfortable the rooms are under each roof."),
        george("Yes, I only had thirty replies, so I assumed it wouldn't be much use. But when I checked the results, they matched the temperature readings really well. It turned out to be more reliable than I'd expected."),
        lewis("That's a nice surprise. Next, the graphs. A lot of students leave them until the end, but I'd recommend producing them first, before you write any of the results section. Then you'll see straight away what story the data is telling."),
        isabella("That makes sense. We'll make the graphs our first priority."),
        lewis("Finally, the poster for the department showcase. I know you were thinking of getting it professionally printed."),
        george("We were, but we got a quote and it's much too expensive. It would be nearly seventy pounds for one poster."),
        lewis("Then print it in sections on the department printer and mount them together. Nobody will mind, and it will save you a lot of money."),
        isabella("Thanks, Dr Patel. That's really helpful."),
        lewis("Not at all. Come and see me again in two weeks, and bring the first set of data."),
      ],
      groups: [
        {
          kind: 'mcq',
          instruction: 'Choose the correct letter, A, B or C.',
          items: [
            { q: 'Nina became interested in green roofs when she', options: ['read an article about them', 'visited Copenhagen', 'attended a lecture last spring'], a: 1, why: '"I saw a lot of them when I went on the exchange trip to Copenhagen."' },
            { q: 'What is Dr Patel\'s main concern about the proposal?', options: ['It is too broad.', 'It has too few sources.', 'It is not original.'], a: 0, why: '"my main worry is that it\'s much too broad."' },
            { q: 'To record temperatures, the students will use', options: ['the university weather station', 'borrowed data loggers', 'their own phones'], a: 1, why: '"the weather station… is too far… we\'ve borrowed some small data loggers from the department."' },
            { q: 'Why did the students choose the Science Block?', options: ['The library roof is not accessible.', 'It is closer to the campus.', 'It is taller than the library.'], a: 0, why: '"nobody is allowed up there for safety reasons. So we\'ve moved to the Science Block."' },
            { q: 'Dr Patel advises collecting data for', options: ['two weeks', 'four weeks', 'eight weeks'], a: 1, why: '"I\'d suggest four weeks, as a minimum." Nina 2, Sam 8 hafta degan edi.' },
            { q: 'In the presentation, Sam will', options: ['give the introduction', 'present the data analysis', 'give the conclusion'], a: 1, why: '"I\'ll take the data analysis" — Nina kirish va xulosani qiladi.' },
          ],
        },
        {
          kind: 'match',
          instruction: 'What is Dr Patel\'s or the students\' opinion about each part of the project? Choose FOUR answers from the list, A-E.',
          options: [
            'It needs to be shortened.',
            'It was more reliable than expected.',
            'It should be done first.',
            'It is too expensive.',
            'It is not relevant.',
          ],
          items: [
            { q: 'The literature review', a: 0, why: '"far too long… It needs to be cut by about a third."' },
            { q: 'The questionnaire', a: 1, why: '"It turned out to be more reliable than I\'d expected."' },
            { q: 'The graphs', a: 2, why: '"I\'d recommend producing them first, before you write any of the results."' },
            { q: 'The printed poster', a: 3, why: '"we got a quote and it\'s much too expensive."' },
          ],
        },
      ],
    },

    // ───────────────────────── SECTION 4 ─────────────────────────
    {
      title: 'Section 4: Bioluminescence in the deep ocean',
      context: 'Section 4. You will hear part of a university lecture about animals that produce their own light.',
      lines: [
        lewis("Good morning, everyone. Today I'd like to talk about bioluminescence, which simply means the production of light by living organisms. It's a subject that fascinates marine biologists, because in the deep ocean it's not the exception but the rule."),
        lewis("Let's begin with the chemistry. Bioluminescence happens when a molecule called luciferin reacts with oxygen. On its own, that reaction would be very slow, so the animal also produces an enzyme called luciferase, which speeds it up and releases the energy as light. Almost no heat is produced, which is why we sometimes call it cold light."),
        lewis("How common is it? Well, the early surveys in the nineteen-sixties suggested that about sixty per cent of deep-sea animals could make light. More recent work, using cameras on remotely operated vehicles, puts the figure much higher. Current estimates are that seventy-six per cent of animals in the open ocean below two hundred metres are bioluminescent.", "How common is it? Well, the early surveys in the nineteen-sixties suggested that about sixty per cent of deep-sea animals could make light. More recent work, using cameras on remotely operated vehicles, puts the figure much higher. Current estimates are that 76 per cent of animals in the open ocean below two hundred metres are bioluminescent."),
        lewis("Now, you might expect these animals to glow in all the colours of the rainbow. In fact, nearly all of them produce blue light. The reason is physical. Blue has a short wavelength and it travels furthest through seawater, whereas red light is absorbed within a few metres. Many deep-sea creatures can't even see red at all, which gives some predators a sort of invisible torch."),
        lewis("So what is all this light for? Biologists have identified three main functions. The first is camouflage. In the twilight zone, a little sunlight still filters down from above, so any animal swimming there casts a dark shape against it. Some squid solve this with a strategy called counter-illumination. They have light-producing organs on their undersides, and they adjust the brightness to match the light from above. "),
        lewis("The result is that they hide their silhouette from anything looking up from below."),
        lewis("The second function is attack. The best-known example is the anglerfish, which has a flexible rod growing from its head with a glowing tip. Small fish are curious, and they swim towards the light, and they are snapped up before they realise their mistake. The anglerfish doesn't chase anything, so this is a very economical way of hunting. In effect, the lure is used to attract prey."),
        lewis("The third function is defence, and this is where it gets really interesting. Some deep-sea shrimps, when threatened, spit out a glowing cloud of mucus. The predator is confused, and the shrimp escapes into the dark. It's the underwater equivalent of a smokescreen."),
        lewis("A different defensive technique is called the burglar alarm. When a small plankton organism is attacked, it flashes brightly. This doesn't scare the attacker, but it does attract larger predators, which then eat the attacker. So the flash effectively says, come and get whoever is eating me."),
        lewis("Let me now turn to why this matters to us. Scientists have taken the gene that makes luciferase and inserted it into other cells. In medical research it is now widely used as a marker. If cancer cells carry the gene, they glow, and researchers can track how a tumour grows or shrinks without surgery. This has changed the way many drugs are tested."),
        lewis("There are, however, practical difficulties when studying these animals. The biggest is pressure. If you pull a fish up from three thousand metres in a net, the change in pressure damages its tissue so badly that it often dies before it reaches the surface, and the light-producing organs stop working. That is why researchers increasingly prefer to observe animals in place, using submersibles, rather than collecting them."),
        lewis("Finally, let's think about the future. There is a lot of interest in using bioluminescence for lighting. A research team in the Netherlands has been testing a prototype streetlight in which glowing bacteria are kept alive in a sealed container. The light is faint at the moment, but it uses no electricity, and engineers believe the brightness could be improved considerably."),
        lewis("That brings us to the end of this session. For next week, please read the two articles on the course website, and come prepared to discuss how bioluminescence might have evolved independently so many times."),
      ],
      groups: [
        {
          kind: 'fill',
          title: 'Notes: Bioluminescence in the deep ocean',
          instruction: 'Write ONE WORD ONLY, or A NUMBER, for each answer.',
          items: [
            { q: 'Light is produced when luciferin reacts with oxygen, helped by an enzyme called ___', a: ['luciferase'], why: '"the animal also produces an enzyme called luciferase, which speeds it up."' },
            { q: 'About ___ % of animals in the open ocean below 200 metres produce light.', a: ['76', 'seventy-six', 'seventy six'], why: '"early surveys… sixty per cent… Current estimates are that seventy-six per cent."' },
            { q: 'Most bioluminescent light is ___ in colour, because it travels furthest in water.', a: ['blue'], why: '"nearly all of them produce blue light… it travels furthest through seawater."' },
            { q: 'Squid use counter-illumination to hide their ___ from animals below.', a: ['silhouette'], why: '"they hide their silhouette from anything looking up from below."' },
            { q: 'The anglerfish uses a glowing lure to attract ___', a: ['prey'], why: '"the lure is used to attract prey."' },
            { q: 'Some shrimps defend themselves by releasing a glowing cloud of ___', a: ['mucus'], why: '"spit out a glowing cloud of mucus."' },
            { q: 'In the burglar alarm strategy, a flash attracts larger ___', a: ['predators'], why: '"it does attract larger predators, which then eat the attacker."' },
            { q: 'In medical research, the luciferase gene is used as a ___ to track tumours.', a: ['marker'], why: '"In medical research it is now widely used as a marker."' },
            { q: 'Pulling deep-sea fish to the surface damages their ___ because of pressure change.', a: ['tissue'], why: '"the change in pressure damages its tissue so badly."' },
            { q: 'A prototype streetlight in the Netherlands uses glowing ___', a: ['bacteria'], why: '"a prototype streetlight in which glowing bacteria are kept alive."' },
          ],
        },
      ],
    },
  ],
};

export default l1;
