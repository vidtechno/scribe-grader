import type { Drill } from '../../../types';

/** Practice games added when Beginner was rebuilt (see DRILL_GAME in games.ts). */
export const drillsNew: Drill[] = [
  {
    id: 'u4-l9-d1',
    title: 'Talk about my room and town',
    titleUz: 'Xona va shahar haqida suhbat',
    goal: "Suhbatda **there is / there are**, **some / any** va joy predloglari bilan to'g'ri javob tanlaysiz.",
    exercises: [
      { k: 'choice', q: '**Ben:** Is there a garden at your house?', opts: ["No, there isn't. But there is a balcony.", 'No, there are not a garden.', 'Yes, it is a garden.', 'No, I am not.'], a: 0, why: "*Is there…?* → *No, there isn't.*" },
      { k: 'choice', q: '**Ben:** What is in your room?', opts: ['There is a big desk.', 'There are a big desk.', 'It is in a desk.', 'I have in my room.'], a: 0, why: "Bitta narsa bilan boshlanadi → **There is**." },
      { k: 'choice', q: '**Ben:** Are there any shops near your flat?', opts: ['Yes, there are. There are two shops.', 'Yes, there is two shops.', 'Yes, they are shops.', 'Yes, there any.'], a: 0, why: "*Are there…?* → *Yes, there are.*" },
      { k: 'fill', q: '**Ben:** Where is the lamp?  **You:** It is ___ the shelf.', a: ['on'], uz: 'Chiroq javonda.', why: "Ustida → **on**." },
      { k: 'choice', q: '**Ben:** Is there a bank near here?', opts: ["Yes, there is. It's opposite the park.", 'Yes, there are. It is a park.', 'No, there is a bank.', 'Yes, I am.'], a: 0 },
      { k: 'tf', q: "*Are there any chairs?* savoliga to'g'ri javob: *No, there aren't any.*", a: true },
      { k: 'choice', q: '**Ben:** How many chairs are there in the kitchen?', opts: ['There are four.', 'There is four.', 'It is four chairs.', 'There four are.'], a: 0, why: "To'rtta → ko'plik → **There are**." },
      { k: 'fill', q: "**Ben:** Are there any parks in your town?  **You:** No, there aren't ___ parks.", a: ['any'], uz: "Yo'q, bizda parklar yo'q.", why: "Inkorda **any**." },
      { k: 'listen', say: 'There is a sofa next to the window.', opts: ['There is a sofa next to the window.', 'There are sofas next to the window.', 'There is a sofa under the window.', 'Is there a sofa next to the window?'], a: 0 },
      { k: 'choice', q: '**Ben:** Where is the cat?', opts: ["It's under the table.", 'There is under the table.', 'There it is table.', 'Is under the table.'], a: 0, why: "*Where is…?* → *It's + joy*." },
      { k: 'order', uz: "Xonamda ikkita karavot bor.", words: ['There', 'are', 'two', 'beds', 'in', 'my', 'room'], extra: ['is'] },
      { k: 'fix', wrong: 'There is two shops on my street.', a: ['There are two shops on my street.'], why: "Ko'plik — **are**." },
    ],
  },
  {
    id: 'u4-l13-d1',
    title: 'Build the sentence',
    titleUz: "Gap tuzamiz: olmoshlar, iltimoslar, buyruqlar",
    goal: "So'zlardan to'g'ri gap tuzasiz: **me, him, her, us, them**, **Can I…?**, buyruq gaplar va **can/can't** bilan.",
    exercises: [
      { k: 'order', uz: 'Menga yordam bering, iltimos.', words: ['Help', 'me', 'please'], extra: ['I'], alt: [['please', 'help', 'me']] },
      { k: 'order', uz: 'Men bilan yuring.', words: ['Come', 'with', 'me'], extra: ['I', 'to'] },
      { k: 'choice', q: 'Where is Anna? I can see ___.', opts: ['she', 'her', 'hers', 'they'], a: 1, why: "Fe'ldan keyin ayol → **her**." },
      { k: 'order', uz: 'Biz ularga yordam beramiz.', words: ['We', 'help', 'them'], extra: ['they', 'helps'] },
      { k: 'order', uz: 'Derazani ochsam bo‘ladimi?', words: ['Can', 'I', 'open', 'the', 'window'], extra: ['to', 'Do'] },
      { k: 'fix', wrong: 'Wait for we, please.', a: ['Wait for us, please.', 'Wait for us.'], why: "Predlogdan keyin → **us**." },
      { k: 'order', uz: "Bu sovg'a u uchun (erkak).", words: ['This', 'present', 'is', 'for', 'him'], extra: ['he', 'his'] },
      { k: 'order', uz: 'Kechikmang!', words: ["Don't", 'be', 'late'], extra: ['not', 'are'] },
      { k: 'fill', q: 'Show ___ your photos. (they)', a: ['them'], uz: "Ularga suratlaringizni ko'rsating.", why: "Fe'ldan keyin **them**." },
      { k: 'order', uz: 'Men uni yaxshi taniyman.', words: ['I', 'know', 'him', 'well'], extra: ['he', 'knows'] },
      { k: 'translate', uz: 'Menga bir stakan suv bersangiz, iltimos?', a: ['Can I have a glass of water, please?', 'Can I have a glass of water?'] },
      { k: 'order', uz: 'Keling, ularni kutamiz.', words: ["Let's", 'wait', 'for', 'them'], extra: ['they', 'to'] },
    ],
  },
];
