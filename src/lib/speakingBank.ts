import type { Part1Theme, CueCard, Part3Set } from './speakingBank.types';

export const PART1_THEMES: Part1Theme[] = [
  { id: 'p1-1', theme: 'Hometown', category: 'Places', questions: [
    'Where is your hometown?', 'What do you like most about it?', 'Has your hometown changed much since you were a child?', 'Would you like to live there in the future?'] },
  { id: 'p1-2', theme: 'Home and accommodation', category: 'Places', questions: [
    'Do you live in a house or a flat?', 'Which room in your home do you spend the most time in?', 'Is there anything you would like to change about your home?', 'Who do you live with?'] },
  { id: 'p1-3', theme: 'Work', category: 'Study & work', questions: [
    'Do you work or are you a student?', 'Why did you choose that job?', 'What do you enjoy most about your work?', 'Would you like to change your job in the future?'] },
  { id: 'p1-4', theme: 'Studies', category: 'Study & work', questions: [
    'What subject are you studying?', 'Why did you choose to study that subject?', 'Is there anything you find difficult about your studies?', 'What would you like to do after you finish studying?'] },
  { id: 'p1-5', theme: 'Daily routine', category: 'Lifestyle', questions: [
    'What does a typical day look like for you?', 'Do you prefer to follow a routine or do different things each day?', 'What is the busiest part of your day?', 'Would you like to change your daily routine?'] },
  { id: 'p1-6', theme: 'Weekends', category: 'Lifestyle', questions: [
    'What do you usually do at the weekend?', 'Do you prefer to relax or be active on your days off?', 'Do you spend your weekends with family or friends?', 'What did you do last weekend?'] },
  { id: 'p1-7', theme: 'Cooking', category: 'Lifestyle', questions: [
    'Do you like cooking?', 'Who usually cooks in your home?', 'What is the first meal you learned to make?', 'Would you like to become a better cook?'] },
  { id: 'p1-8', theme: 'Eating out', category: 'Lifestyle', questions: [
    'How often do you eat in restaurants?', 'What kind of food do you like to eat when you go out?', 'Do you prefer eating out with friends or with family?', 'Is there a restaurant you would recommend to visitors?'] },
  { id: 'p1-9', theme: 'Weather and seasons', category: 'Environment', questions: [
    'What is the weather like in your country?', 'Which season do you like best?', 'Does the weather affect your mood?', 'What do you usually do when the weather is bad?'] },
  { id: 'p1-10', theme: 'Music', category: 'Media', questions: [
    'What kind of music do you enjoy?', 'Do you listen to music when you study or work?', 'Did you learn to play a musical instrument as a child?', 'Do you prefer live music or recorded music?'] },
  { id: 'p1-11', theme: 'Films', category: 'Media', questions: [
    'Do you often watch films?', 'Do you prefer watching films at home or at the cinema?', 'What kind of films do you enjoy most?', 'Can you remember the first film you ever saw?'] },
  { id: 'p1-12', theme: 'Reading', category: 'Media', questions: [
    'Do you enjoy reading?', 'What kinds of things do you like to read?', 'Do you prefer paper books or e-books?', 'Did you read a lot when you were a child?'] },
  { id: 'p1-13', theme: 'Friends', category: 'People', questions: [
    'Do you have many friends?', 'How often do you meet your friends?', 'What do you usually do together?', 'Do you think it is easy to make new friends?'] },
  { id: 'p1-14', theme: 'Family', category: 'People', questions: [
    'Do you have a large or a small family?', 'Who in your family are you closest to?', 'What do you like doing with your family?', 'Do you think family is important?'] },
  { id: 'p1-15', theme: 'Neighbours', category: 'People', questions: [
    'Do you know your neighbours well?', 'How often do you talk to them?', 'Have your neighbours ever helped you?', 'Is it important to have good neighbours?'] },
  { id: 'p1-16', theme: 'Clothes', category: 'Objects', questions: [
    'What kind of clothes do you usually wear?', 'Do you prefer comfortable clothes or fashionable clothes?', 'Do you dress differently for work or study and for free time?', 'Where do you usually buy your clothes?'] },
  { id: 'p1-17', theme: 'Shopping', category: 'Lifestyle', questions: [
    'Do you enjoy shopping?', 'Do you prefer shopping online or in shops?', 'What was the last thing you bought?', 'Do you usually go shopping alone or with other people?'] },
  { id: 'p1-18', theme: 'Gifts', category: 'Objects', questions: [
    'Do you like giving gifts?', 'What was the last gift you received?', 'Is it difficult for you to choose a gift for someone?', 'Do you prefer to receive practical gifts or surprising ones?'] },
  { id: 'p1-19', theme: 'Transport', category: 'Society', questions: [
    'How do you usually get around your town?', 'Is public transport good where you live?', 'Do you prefer travelling by bus, train or car?', 'How could transport in your area be improved?'] },
  { id: 'p1-20', theme: 'Travel', category: 'Experiences', questions: [
    'Do you like travelling?', 'What was the last place you visited?', 'Do you prefer travelling alone or with other people?', 'Where would you like to go in the future?'] },
  { id: 'p1-21', theme: 'Holidays', category: 'Events', questions: [
    'What do you usually do on your holidays?', 'Do you prefer holidays at home or abroad?', 'What was the best holiday you have had?', 'Do you like to plan your holidays in advance?'] },
  { id: 'p1-22', theme: 'Sport and exercise', category: 'Lifestyle', questions: [
    'Do you do any sport or exercise?', 'What sports were popular at your school?', 'Do you prefer to exercise alone or in a group?', 'Would you like to try a new sport?'] },
  { id: 'p1-23', theme: 'Health', category: 'Lifestyle', questions: [
    'Do you think you lead a healthy lifestyle?', 'What do you do to stay healthy?', 'Do you often eat fast food?', 'What could you do to be healthier?'] },
  { id: 'p1-24', theme: 'Sleep', category: 'Lifestyle', questions: [
    'How many hours do you usually sleep?', 'Do you find it easy to get up in the morning?', 'Do you ever take naps during the day?', 'What do you do when you cannot sleep?'] },
  { id: 'p1-25', theme: 'Mobile phones', category: 'Technology', questions: [
    'How often do you use your mobile phone?', 'What do you mainly use your phone for?', 'Could you live without your phone for a week?', 'Do you think people spend too much time on their phones?'] },
  { id: 'p1-26', theme: 'The internet', category: 'Technology', questions: [
    'How much time do you spend online each day?', 'What do you usually do on the internet?', 'Do you use the internet for study or work?', 'How was the internet different when you were younger?'] },
  { id: 'p1-27', theme: 'Social media', category: 'Technology', questions: [
    'Do you use social media?', 'Which platform do you use the most?', 'Do you post a lot of things online?', 'Do you think social media is good for young people?'] },
  { id: 'p1-28', theme: 'Photographs', category: 'Objects', questions: [
    'Do you like taking photographs?', 'What do you usually take photos of?', 'Do you prefer to take photos or to be in them?', 'Do you keep your photos on your phone or print them?'] },
  { id: 'p1-29', theme: 'Art', category: 'Media', questions: [
    'Did you do much art at school?', 'Do you like going to see paintings or drawings?', 'Would you like to learn to paint or draw?', 'Do you have any pictures on the walls at home?'] },
  { id: 'p1-30', theme: 'Museums', category: 'Places', questions: [
    'Do you often visit museums?', 'What was the last museum you went to?', 'Do you prefer to visit museums alone or with others?', 'Do you think museums are interesting for children?'] },
  { id: 'p1-31', theme: 'Languages', category: 'Study & work', questions: [
    'How many languages can you speak?', 'Why did you start learning English?', 'Which part of learning English do you find hardest?', 'Would you like to learn another language?'] },
  { id: 'p1-32', theme: 'Pets', category: 'Lifestyle', questions: [
    'Do you have any pets?', 'What kind of animal would you like to keep as a pet?', 'Why do you think some people love their pets so much?', 'Did you have a pet when you were a child?'] },
  { id: 'p1-33', theme: 'Plants and gardens', category: 'Environment', questions: [
    'Do you have a garden or any plants at home?', 'Do you enjoy spending time in parks?', 'Have you ever grown anything yourself?', 'Do you think it is important to have green spaces in a city?'] },
  { id: 'p1-34', theme: 'Festivals', category: 'Events', questions: [
    'What is a popular festival in your country?', 'How do people usually celebrate it?', 'What is your favourite festival?', 'Do you think festivals are important for a community?'] },
  { id: 'p1-35', theme: 'Birthdays', category: 'Events', questions: [
    'How do you usually celebrate your birthday?', 'Do you remember your birthday as a child?', 'Do you prefer a big party or a quiet day?', 'Do you like giving birthday presents to others?'] },
  { id: 'p1-36', theme: 'Time management', category: 'Experiences', questions: [
    'Are you good at managing your time?', 'Do you usually arrive early or late?', 'Do you make lists or plans for your day?', 'What do you do when you have too much to do?'] },
  { id: 'p1-37', theme: 'Memory', category: 'Experiences', questions: [
    'Do you have a good memory?', 'Do you find it easier to remember faces or names?', 'What do you do to help yourself remember things?', 'What is your earliest childhood memory?'] },
  { id: 'p1-38', theme: 'Handwriting', category: 'Objects', questions: [
    'Do you often write by hand?', 'Is your handwriting easy to read?', 'Do you prefer writing by hand or typing?', 'Do you think children should still learn to write by hand?'] },
  { id: 'p1-39', theme: 'Crowds', category: 'Society', questions: [
    'Do you like being in crowded places?', 'Where do you go when you want some quiet?', 'Have you ever been in a very large crowd?', 'Do you think big cities are too crowded?'] },
  { id: 'p1-40', theme: 'Money', category: 'Society', questions: [
    'Do you find it easy to save money?', 'What do you usually spend your money on?', 'Did you receive pocket money as a child?', 'Do you think money is important for happiness?'] },
];

export const CUE_CARDS: CueCard[] = [
  { id: 'c-1', category: 'People', title: 'Describe a person who has influenced you',
    points: ['who this person is', 'how you know them', 'what they have done'], explain: 'explain why they have had such an influence on you',
    part3: ['What qualities make someone a good role model?', 'Do young people today have different role models from those in the past?', 'To what extent should celebrities behave as role models?', 'Who has more influence on a child, parents or teachers?'] },
  { id: 'c-2', category: 'People', title: 'Describe a friend you have known for a long time',
    points: ['who this friend is', 'where you met', 'what you do together'], explain: 'explain why your friendship has lasted so long',
    part3: ['Why do some friendships last longer than others?', 'Is it easier to make friends as a child or as an adult?', 'How has technology changed the way friends stay in touch?'] },
  { id: 'c-3', category: 'People', title: 'Describe a member of your family you admire',
    points: ['who this person is', 'what they do', 'what they are like'], explain: 'explain why you admire them',
    part3: ['How have family roles changed over the last fifty years?', 'Why do some people prefer to live near their relatives?', 'What can older and younger generations learn from each other?', 'Is it better for children to grow up in a large family?'] },
  { id: 'c-4', category: 'People', title: 'Describe a teacher who taught you something important',
    points: ['who the teacher was', 'what subject they taught', 'what you learned from them'], explain: 'explain why they were a good teacher',
    part3: ['What makes a teacher effective?', 'Will teachers be replaced by technology in the future?', 'Should teachers be paid more than they are now?', 'How different is learning from a teacher and learning from a book?'] },
  { id: 'c-5', category: 'People', title: 'Describe a person who is good at making others laugh',
    points: ['who this person is', 'how you know them', 'how they make people laugh'], explain: 'explain how you feel when you are with them',
    part3: ['Why do people enjoy comedy so much?', 'Is a sense of humour the same in every culture?', 'Can humour help people at work?'] },
  { id: 'c-6', category: 'People', title: 'Describe a neighbour you get on well with',
    points: ['who this neighbour is', 'how long you have known them', 'what you talk about'], explain: 'explain why you get on so well',
    part3: ['Do people in big cities know their neighbours as well as people in villages?', 'How can neighbours help to make a community stronger?', 'Why do some people find it difficult to live next to others?'] },
  { id: 'c-7', category: 'People', title: 'Describe a person who helps others in your community',
    points: ['who this person is', 'what they do to help', 'who they help'], explain: 'explain how the community benefits from their work',
    part3: ['Why do some people volunteer while others do not?', 'Should helping others be a duty or a choice?', 'What can governments do to encourage volunteering?', 'Are people today more or less generous than in the past?'] },
  { id: 'c-8', category: 'Places', title: 'Describe a place in your country you would recommend to visitors',
    points: ['where it is', 'what visitors can do there', 'what it looks like'], explain: 'explain why you would recommend it',
    part3: ['What attracts tourists to a particular place?', 'What are the advantages and disadvantages of tourism for a local area?', 'How can a country protect its famous sites from too many visitors?', 'Do you think travelling abroad is more rewarding than travelling at home?'] },
  { id: 'c-9', category: 'Places', title: 'Describe a quiet place where you like to spend time',
    points: ['where it is', 'how often you go there', 'what you do there'], explain: 'explain why it makes you feel calm',
    part3: ['Why do people need quiet places?', 'Is it getting harder to find peace and quiet in modern life?', 'Should cities have more quiet areas?'] },
  { id: 'c-10', category: 'Places', title: 'Describe a house or flat you would like to live in',
    points: ['where it would be', 'what it would look like', 'who you would live with'], explain: 'explain why this would be your ideal home',
    part3: ['How have homes changed over the last few decades?', 'Why is housing so expensive in many cities?', 'Is it better to rent or to buy a home?', 'What will homes be like in the future?'] },
  { id: 'c-11', category: 'Places', title: 'Describe a city you have visited and enjoyed',
    points: ['which city it was', 'when you went there', 'what you did there'], explain: 'explain why you enjoyed it',
    part3: ['What makes a city pleasant to live in?', 'Why do so many people move from villages to cities?', 'What problems do large cities face?', 'Will cities get bigger or smaller in the future?'] },
  { id: 'c-12', category: 'Places', title: 'Describe a place where you often meet friends',
    points: ['where it is', 'what it is like', 'what you do there'], explain: 'explain why you like meeting there',
    part3: ['What types of public places do young people prefer?', 'Do you think people meet face to face less than they used to?', 'Why are cafes so popular around the world?'] },
  { id: 'c-13', category: 'Places', title: 'Describe a historical place you have visited',
    points: ['where it is', 'when you went there', 'what you saw there'], explain: 'explain what you found interesting about it',
    part3: ['Why is it important to preserve old buildings?', 'Who should pay for the care of historical sites?', 'Do young people care about history as much as older people?', 'How can history be made more interesting for students?'] },
  { id: 'c-14', category: 'Objects', title: 'Describe an object that is very useful in your daily life',
    points: ['what it is', 'how often you use it', 'what you use it for'], explain: 'explain why it is so useful to you',
    part3: ['Which inventions have changed daily life the most?', 'Do people depend too much on machines today?', 'Why do some people always buy the newest products?'] },
  { id: 'c-15', category: 'Objects', title: 'Describe a gift you gave to someone',
    points: ['what the gift was', 'who you gave it to', 'why you chose it'], explain: 'explain how the person felt about it',
    part3: ['Why do people give gifts on special occasions?', 'Is it better to give money or a present?', 'Have gift-giving customs changed in recent years?', 'Do you think expensive gifts are more meaningful?'] },
  { id: 'c-16', category: 'Objects', title: 'Describe something you own that is important to you',
    points: ['what it is', 'how long you have had it', 'where you got it'], explain: 'explain why it means so much to you',
    part3: ['Why do people keep things that have no practical use?', 'Are people today more interested in owning things than in the past?', 'Does owning more things make people happier?'] },
  { id: 'c-17', category: 'Objects', title: 'Describe a piece of clothing you like to wear',
    points: ['what it is', 'where you got it', 'when you wear it'], explain: 'explain why you like it so much',
    part3: ['Why do people follow fashion?', 'Should schools and companies require uniforms?', 'How has the way people dress changed over time?', 'Does what you wear affect how others judge you?'] },
  { id: 'c-18', category: 'Objects', title: 'Describe an old object that your family has kept for years',
    points: ['what it is', 'how it came to your family', 'how it is used or kept'], explain: 'explain why your family values it',
    part3: ['Why do families pass objects from one generation to the next?', 'Is it important to keep things from the past?', 'Do you think young people value old things?'] },
  { id: 'c-19', category: 'Events', title: 'Describe a wedding or family celebration you attended',
    points: ['whose celebration it was', 'where it took place', 'what happened'], explain: 'explain what you enjoyed most about it',
    part3: ['Why do people spend so much money on celebrations?', 'How have family celebrations changed over time?', 'Are traditions still important for young people?', 'Is it better to have a small or a large celebration?'] },
  { id: 'c-20', category: 'Events', title: 'Describe a time when you waited for something special',
    points: ['what you were waiting for', 'how long you waited', 'what you did while waiting'], explain: 'explain how you felt when it finally happened',
    part3: ['Are people today less patient than in the past?', 'In which situations do people have to wait the longest?', 'Why do some people find waiting so stressful?'] },
  { id: 'c-21', category: 'Events', title: 'Describe a sports event you have watched',
    points: ['what the event was', 'where you watched it', 'who took part'], explain: 'explain what made it exciting',
    part3: ['Why are major sporting events so popular?', 'Is it good for a country to host a big sports event?', 'Do professional athletes earn too much money?', 'Why do some people prefer watching sport to playing it?'] },
  { id: 'c-22', category: 'Events', title: 'Describe a festival or public event in your town',
    points: ['what the event is', 'when it takes place', 'what people do'], explain: 'explain why it is important to local people',
    part3: ['How do festivals help to keep traditions alive?', 'Do you think festivals are becoming too commercial?', 'Why do people from different places enjoy celebrating together?'] },
  { id: 'c-23', category: 'Events', title: 'Describe a party you enjoyed',
    points: ['what the party was for', 'who was there', 'what you did'], explain: 'explain why you enjoyed it so much',
    part3: ['Why do people like to celebrate with others?', 'Do people in your country celebrate in the same way as before?', 'Is it better to spend special days with family or with friends?'] },
  { id: 'c-24', category: 'Experiences', title: 'Describe a skill you learned that took a long time',
    points: ['what the skill is', 'how you learned it', 'who helped you'], explain: 'explain why it was difficult and how you felt when you succeeded',
    part3: ['Is it better to learn new skills at school or on your own?', 'Why do some people give up learning new skills easily?', 'Which skills will be most valuable in the future?', 'At what age is it easiest to learn something new?'] },
  { id: 'c-25', category: 'Experiences', title: 'Describe a mistake you made and learned from',
    points: ['what the mistake was', 'when it happened', 'what you did afterwards'], explain: 'explain what you learned from it',
    part3: ['Do people learn more from mistakes or from success?', 'Why are some people afraid of making mistakes?', 'How should schools and employers treat mistakes?'] },
  { id: 'c-26', category: 'Experiences', title: 'Describe an important decision you made',
    points: ['what the decision was', 'when you made it', 'who you talked to'], explain: 'explain why it was important and how it changed things',
    part3: ['Should young people make decisions on their own?', 'Do people make better decisions alone or in a group?', 'Why do some people find it hard to make decisions?', 'How do parents influence the choices of their children?'] },
  { id: 'c-27', category: 'Experiences', title: 'Describe a difficult challenge you overcame',
    points: ['what the challenge was', 'when it happened', 'how you dealt with it'], explain: 'explain what helped you succeed',
    part3: ['Are people today better at coping with challenges than in the past?', 'How can parents prepare children for difficulties?', 'Does hardship make people stronger?', 'What kinds of challenge do young people face today?'] },
  { id: 'c-28', category: 'Experiences', title: 'Describe an achievement you are proud of',
    points: ['what you achieved', 'when it was', 'how you achieved it'], explain: 'explain why you feel proud of it',
    part3: ['What does success mean to different people?', 'Should children be rewarded for their achievements?', 'Is it more important to be talented or to work hard?', 'How do people stay motivated over a long period?'] },
  { id: 'c-29', category: 'Experiences', title: 'Describe a time you got lost',
    points: ['where you were', 'how you got lost', 'what you did'], explain: 'explain how you felt and how the situation ended',
    part3: ['Do people rely too much on maps and navigation apps?', 'Is it important to be able to find your way without technology?', 'Why do some people enjoy exploring unfamiliar places?'] },
  { id: 'c-30', category: 'Experiences', title: 'Describe a journey you remember well',
    points: ['where you went', 'how you travelled', 'who you went with'], explain: 'explain why you remember it so well',
    part3: ['How has travelling changed over the past hundred years?', 'Is travelling by plane a good thing for the world?', 'What can people learn by travelling to other countries?', 'Will people travel more or less in the future?'] },
  { id: 'c-31', category: 'Experiences', title: 'Describe a time when you helped someone',
    points: ['who you helped', 'what the problem was', 'how you helped'], explain: 'explain how you felt afterwards',
    part3: ['Why do some people help strangers while others do not?', 'Do you think people are less helpful in big cities?', 'Should children be taught to help others at school?'] },
  { id: 'c-32', category: 'Media', title: 'Describe a film you enjoyed watching',
    points: ['what the film was', 'who was in it', 'what it was about'], explain: 'explain why you enjoyed it',
    part3: ['Why are films so popular around the world?', 'Do films from other countries influence young people?', 'Will cinemas disappear in the future?', 'Should governments give money to the film industry?'] },
  { id: 'c-33', category: 'Media', title: 'Describe a book you have read more than once',
    points: ['what the book is', 'what it is about', 'when you first read it'], explain: 'explain why you wanted to read it again',
    part3: ['Are people reading less than they used to?', 'What are the benefits of reading for children?', 'Will printed books be replaced by digital ones?', 'Why do some books become famous worldwide?'] },
  { id: 'c-34', category: 'Media', title: 'Describe a song or piece of music that you like',
    points: ['what it is', 'when you first heard it', 'what it sounds like'], explain: 'explain why it is special for you',
    part3: ['Why do people have different tastes in music?', 'How has the way people listen to music changed?', 'Is music an important part of a culture?', 'Should schools teach every child to play an instrument?'] },
  { id: 'c-35', category: 'Media', title: 'Describe a TV programme you often watch',
    points: ['what the programme is', 'when it is on', 'what happens in it'], explain: 'explain why you like to watch it',
    part3: ['Does television have a positive or negative effect on children?', 'Why do some people prefer streaming to normal television?', 'Do you think reality shows are good entertainment?'] },
  { id: 'c-36', category: 'Media', title: 'Describe an advertisement you remember',
    points: ['what it was for', 'where you saw it', 'what it showed'], explain: 'explain why you remember it',
    part3: ['How much do adverts influence what people buy?', 'Should there be limits on advertising to children?', 'Why do companies use famous people in their adverts?', 'Is online advertising better than advertising on television?'] },
  { id: 'c-37', category: 'Media', title: 'Describe a website you use often',
    points: ['what the website is', 'how often you use it', 'what you do on it'], explain: 'explain why you find it useful',
    part3: ['How reliable is information on the internet?', 'Should children have limits on their time online?', 'How has the internet changed the way people learn?'] },
  { id: 'c-38', category: 'Media', title: 'Describe a news story that interested you',
    points: ['what the story was about', 'where you heard it', 'who was involved'], explain: 'explain why it caught your attention',
    part3: ['How do most people get their news today?', 'Why do some people avoid reading the news?', 'Should news organisations be responsible for checking what they publish?', 'Does the media report too many bad stories?'] },
  { id: 'c-39', category: 'Study & work', title: 'Describe a subject you enjoyed studying at school',
    points: ['what the subject was', 'who taught it', 'what you did in lessons'], explain: 'explain why you enjoyed it',
    part3: ['Which subjects should be compulsory in schools?', 'Should students choose subjects themselves?', 'How has education changed in your country?', 'Is practical learning better than learning from textbooks?'] },
  { id: 'c-40', category: 'Study & work', title: 'Describe a job you would like to do in the future',
    points: ['what the job is', 'what skills it needs', 'how you could get it'], explain: 'explain why this job appeals to you',
    part3: ['What makes a job satisfying?', 'Is salary the most important thing when choosing a career?', 'Which jobs will disappear because of technology?', 'Do people change jobs more often than they used to?'] },
  { id: 'c-41', category: 'Study & work', title: 'Describe a time when you worked in a team',
    points: ['what the task was', 'who was in the team', 'what your role was'], explain: 'explain how well the team worked together',
    part3: ['What makes a good team member?', 'Are some people better working alone than in a group?', 'Is it good for schools to encourage group work?', 'Who should be the leader in a team?'] },
  { id: 'c-42', category: 'Study & work', title: 'Describe an online course or class you took',
    points: ['what you studied', 'how it was organised', 'what materials you used'], explain: 'explain whether you found it useful',
    part3: ['What are the advantages of studying online?', 'Can online lessons replace a real classroom?', 'Why do adults continue learning after they leave school?'] },
  { id: 'c-43', category: 'Technology', title: 'Describe a piece of technology you find useful',
    points: ['what it is', 'when you got it', 'how you use it'], explain: 'explain why it is important to you',
    part3: ['How has technology changed the way people communicate?', 'Are there any disadvantages to modern technology?', 'Will robots do most jobs in the future?', 'Do older people find new technology difficult to use?'] },
  { id: 'c-44', category: 'Technology', title: 'Describe a time when something you used broke down',
    points: ['what it was', 'when it happened', 'how you fixed it'], explain: 'explain how you felt about the problem',
    part3: ['Why do people throw away things instead of repairing them?', 'Are products made as well as they were in the past?', 'Is it better to buy cheap goods or expensive ones that last?'] },
  { id: 'c-45', category: 'Environment', title: 'Describe a natural place you would like to visit',
    points: ['where it is', 'what it looks like', 'what you could do there'], explain: 'explain why you want to go there',
    part3: ['Why do people enjoy spending time in nature?', 'How can tourism harm the natural environment?', 'Should governments protect wild places even if it costs money?', 'Do city dwellers have enough contact with nature?'] },
  { id: 'c-46', category: 'Environment', title: 'Describe something you do to protect the environment',
    points: ['what you do', 'how often you do it', 'when you started'], explain: 'explain why you think it matters',
    part3: ['Who is more responsible for the environment, individuals or companies?', 'Why do some people not care about the environment?', 'What can schools do to teach young people about nature?', 'Will the environment be better or worse in fifty years?'] },
  { id: 'c-47', category: 'Environment', title: 'Describe a park or garden you like',
    points: ['where it is', 'what you can see there', 'what people do there'], explain: 'explain why you like going there',
    part3: ['Why are parks important for people living in cities?', 'Should cities keep green space or build more housing?', 'How can people be encouraged to look after public spaces?'] },
  { id: 'c-48', category: 'Lifestyle', title: 'Describe a healthy habit you have',
    points: ['what the habit is', 'when you started it', 'how often you do it'], explain: 'explain how it benefits you',
    part3: ['Why do many people find it hard to keep healthy habits?', 'Is health the responsibility of the individual or the government?', 'Are people today healthier than their grandparents?', 'Should unhealthy food be taxed?'] },
  { id: 'c-49', category: 'Lifestyle', title: 'Describe a hobby you enjoy in your free time',
    points: ['what the hobby is', 'how you started it', 'how much time you spend on it'], explain: 'explain why you enjoy it',
    part3: ['Why do people need hobbies?', 'Do young people have the same hobbies as their parents had?', 'Is it better to have a hobby that is active or one that is relaxing?', 'Should people turn their hobbies into jobs?'] },
  { id: 'c-50', category: 'Lifestyle', title: 'Describe a meal you remember enjoying',
    points: ['what the meal was', 'where you had it', 'who you ate with'], explain: 'explain why it was so memorable',
    part3: ['How have eating habits changed in your country?', 'Why is sharing food important in many cultures?', 'Is home cooking better than eating out?', 'Do you think traditional food will disappear in the future?'] },
];

export const PART3_SETS: Part3Set[] = [
  { id: 'p3-1', theme: 'Education and exams', category: 'Study & work', questions: [
    'What is the purpose of education?', 'Do exams show how clever a student really is?', 'How might schools be different in fifty years?', 'To what extent should the state decide what children learn?'] },
  { id: 'p3-2', theme: 'Technology and daily life', category: 'Technology', questions: [
    'Which gadgets do people use most today?', 'Has technology made life easier or more stressful?', 'Why do some people resist new technology?', 'How far should we let machines make decisions for us?'] },
  { id: 'p3-3', theme: 'Work and careers', category: 'Study & work', questions: [
    'What do people look for in a job?', 'Is it better to stay in one company or to change often?', 'How is working from home changing society?', 'Do you think people will work fewer hours in the future?'] },
  { id: 'p3-4', theme: 'The environment', category: 'Environment', questions: [
    'What environmental problems are common in your country?', 'What can ordinary people do to reduce waste?', 'Why is it so hard for countries to agree on environmental action?', 'To what extent is economic growth compatible with protecting nature?'] },
  { id: 'p3-5', theme: 'Culture and traditions', category: 'Society', questions: [
    'What traditions are important in your country?', 'Are young people losing interest in their traditions?', 'How does globalisation affect local cultures?', 'Is it necessary to preserve every tradition?'] },
  { id: 'p3-6', theme: 'Health and fitness', category: 'Lifestyle', questions: [
    'What do people do to keep fit in your country?', 'Why do many people not get enough exercise?', 'Should governments do more to improve public health?', 'Will medical advances make people live much longer?'] },
  { id: 'p3-7', theme: 'Life in big cities', category: 'Places', questions: [
    'What are the good things about living in a city?', 'Why are cities so busy and noisy?', 'How can planners make cities more pleasant?', 'Will people choose to live in smaller towns in the future?'] },
  { id: 'p3-8', theme: 'The media', category: 'Media', questions: [
    'Where do most people in your country get their information?', 'Are social media platforms good sources of news?', 'Should the media be controlled in any way?', 'How might the media change over the next twenty years?'] },
  { id: 'p3-9', theme: 'Family life', category: 'People', questions: [
    'How much time do families spend together nowadays?', 'How has family life changed compared with your grandparents\' time?', 'Who should take care of elderly relatives?', 'What effect does a busy modern lifestyle have on family relationships?'] },
  { id: 'p3-10', theme: 'Travel and tourism', category: 'Experiences', questions: [
    'Why do people like to travel abroad?', 'What are the advantages and disadvantages of mass tourism?', 'Is it better to travel independently or on an organised tour?', 'How might travel change in the future?'] },
  { id: 'p3-11', theme: 'Money and spending', category: 'Society', questions: [
    'Do people in your country spend more than they save?', 'Why do some people spend money on things they do not need?', 'Should children learn about money at school?', 'Does a higher income always lead to a better life?'] },
  { id: 'p3-12', theme: 'Learning languages', category: 'Study & work', questions: [
    'Why do people choose to learn foreign languages?', 'What is the best way to learn a language?', 'Will translation tools make language learning unnecessary?', 'Is it a problem if some languages disappear?'] },
  { id: 'p3-13', theme: 'Growing old', category: 'Society', questions: [
    'How are old people treated in your country?', 'What problems do older people often face?', 'How can society make better use of older people\'s experience?', 'What challenges does an ageing population create for a country?'] },
  { id: 'p3-14', theme: 'Young people', category: 'People', questions: [
    'What do young people in your country enjoy doing?', 'Why do teenagers often disagree with their parents?', 'Do young people today have more opportunities than their parents had?', 'How much responsibility should young people have in society?'] },
  { id: 'p3-15', theme: 'Public spaces', category: 'Places', questions: [
    'What public places are popular in your town?', 'Who should be responsible for keeping public places clean?', 'Why do some people damage public property?', 'How can public spaces bring a community together?'] },
  { id: 'p3-16', theme: 'Creativity', category: 'Experiences', questions: [
    'Do you think everyone can be creative?', 'Do schools do enough to encourage creativity?', 'Is creativity more important in some jobs than in others?', 'Could computers ever be as creative as people?'] },
  { id: 'p3-17', theme: 'Transport and traffic', category: 'Society', questions: [
    'What are the main ways people travel to work in your country?', 'Why is traffic a problem in many cities?', 'How can people be encouraged to use public transport?', 'To what extent will electric and self-driving cars change cities?'] },
  { id: 'p3-18', theme: 'Food and diet', category: 'Lifestyle', questions: [
    'Has the food that people eat changed in your country?', 'Why do some people prefer fast food?', 'Whose job is it to teach children healthy eating?', 'How might food production change as the population grows?'] },
  { id: 'p3-19', theme: 'Sport and competition', category: 'Events', questions: [
    'Why do some people love competitive sport?', 'Is it good for children to compete at school?', 'Does sport bring different countries closer together?', 'Is winning too important in modern sport?'] },
  { id: 'p3-20', theme: 'Communication', category: 'Technology', questions: [
    'How do most people keep in touch with each other nowadays?', 'Is writing messages as good as talking in person?', 'How has online communication affected friendships?', 'Will face-to-face communication become less important?'] },
  { id: 'p3-21', theme: 'Shopping and consumerism', category: 'Objects', questions: [
    'How have shopping habits changed in recent years?', 'What are the advantages of shopping online?', 'Why are people influenced by brands?', 'Is consumerism harmful for society and the planet?'] },
  { id: 'p3-22', theme: 'Art and museums', category: 'Media', questions: [
    'Do many people in your country visit museums and galleries?', 'Why should governments support the arts?', 'Is art something that everyone can appreciate?', 'How might technology change the way people experience art?'] },
  { id: 'p3-23', theme: 'Leadership and responsibility', category: 'Society', questions: [
    'What qualities does a good leader need?', 'Are leaders born or made?', 'Should leaders always be older and experienced?', 'How can ordinary people take more responsibility for their communities?'] },
  { id: 'p3-24', theme: 'Free time and happiness', category: 'Lifestyle', questions: [
    'How do people in your country spend their free time?', 'Do people have less free time than before?', 'Why do some people find it hard to relax?', 'What do you think really makes people happy in the long term?'] },
];
