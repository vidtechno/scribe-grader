// HTML snippets for the article overrides in blog-overrides.ts. Everything here is written by us; the data in the charts is invented
// for teaching and always labelled as such. No script tags: blog.ts strips them from article HTML (the timer script is attached separately).
import { renderChart } from './charts.js';
import { TASK1 } from './data-task1.js';
import { authHref } from './shell.js';

const WRITING = authHref('/writing');
const SPEAKING = authHref('/speaking');
const btn = (href: string, label: string) => `<a class="btn" href="${href}">${label} →</a>`;

/* ------------------------------------------------------------------ EN: how to describe a graph */

export const LIBRARY_CHART = renderChart({
  kind: 'line', title: 'Example chart (fictional data): average monthly visits to three libraries in an imaginary city', unit: 'Thousand visits', xLabels: ['2000', '2005', '2010', '2015', '2020'],
  series: [{ name: 'Riverside Library', values: [30, 34, 41, 52, 61] }, { name: 'Central Library', values: [58, 55, 47, 41, 36] }, { name: 'Hillside Library', values: [20, 22, 21, 23, 22] }],
});

/** The model report written from LIBRARY_CHART; the test counts its words and checks every number against the data. */
export const LIBRARY_MODEL = {
  intro: 'The line graph shows how many visits were made each month to three libraries in an imaginary city between 2000 and 2020, measured in thousands.',
  overview: 'Overall, visits to Riverside Library rose steadily, whereas Central Library lost visitors, so the two libraries swapped places. Hillside Library was the least busy throughout, and its figure barely changed.',
  detail1: 'In 2000, Central Library was by far the busiest, with 58 thousand visits, almost double the 30 thousand recorded at Riverside Library. The gap between them narrowed from 28 thousand in 2000 to only 6 thousand in 2010, and by 2015 Riverside was ahead with 52 thousand visits compared with 41 thousand. By 2020, Riverside had climbed to 61 thousand, while Central had fallen gradually to 36 thousand.',
  detail2: 'Hillside Library, in contrast, stayed within a narrow range of 20 to 23 thousand visits and ranked last at every point shown.',
};

const COLLEGE_CHART = renderChart({
  kind: 'bar', title: 'Practice chart (fictional data): how students travel to an imaginary college', unit: '% of students', categories: ['Bus', 'Bicycle', 'Walking', 'Car'],
  series: [{ name: '2010', values: [45, 15, 25, 15] }, { name: '2020', values: [30, 28, 24, 18] }],
});

export const COLLEGE_SAMPLE = {
  overview: 'Overall, the bus remained the most common way to reach the college but lost ground, while cycling showed the biggest rise. Walking was almost unchanged.',
  detail: 'In 2010, 45% of students took the bus, almost twice the share of walkers (25%), while bicycles and cars were each used by 15%. By 2020 the bus share had dropped to 30%, but the proportion cycling had risen to 28%, nearly matching it. Walking stayed close to a quarter (25% in 2010 and 24% in 2020), and car use rose slightly from 15% to 18%.',
};

export const GRAPH_WORKED = `<h2>Worked example: describe a line graph step by step</h2>
<p>Here is a complete example from start to finish. The chart below was made for this lesson and its numbers are <strong>invented</strong>: it is not real library data.</p>
${LIBRARY_CHART}
<h3>Step 1: read the chart and decide what matters</h3>
<ul>
<li><strong>What is measured?</strong> Average monthly visits, in thousands, for three libraries, every five years from 2000 to 2020.</li>
<li><strong>Main trends:</strong> Riverside goes up, Central goes down, Hillside stays almost flat.</li>
<li><strong>Interesting moment:</strong> the lines for Riverside and Central cross between 2010 and 2015.</li>
</ul>
<h3>Step 2: write the report</h3>
<blockquote>
<p><strong>Introduction.</strong> ${LIBRARY_MODEL.intro}</p>
<p><strong>Overview.</strong> ${LIBRARY_MODEL.overview}</p>
<p><strong>Details 1.</strong> ${LIBRARY_MODEL.detail1}</p>
<p><strong>Details 2.</strong> ${LIBRARY_MODEL.detail2}</p>
</blockquote>
<p>The overview has no numbers: it names the two trends and the item that stays lowest. Every number appears later, inside a comparison.</p>
<h2>How to choose which numbers to mention</h2>
<p>This graph has 15 data points (three lines, five years each). The report above uses only about ten of them. Choosing is the skill the examiner is looking for in Task Achievement: you are asked to select and report the main features, not to copy the chart.</p>
<table>
<tbody>
<tr><th>What to report</th><th>Why</th><th>In this example</th></tr>
<tr><td>Start and end of each main line</td><td>Shows the overall change</td><td>Central 58 → 36; Riverside 30 → 61</td></tr>
<tr><td>Highest and lowest points</td><td>Backs up the overview</td><td>Highest point on the chart: Riverside, 61 in 2020. Lowest: Hillside, 20 in 2000</td></tr>
<tr><td>Where lines cross or the gap changes</td><td>Gives you a real comparison</td><td>Gap of 28 in 2000, 6 in 2010; Riverside ahead by 2015</td></tr>
<tr><td>A flat line</td><td>Summarise it; do not list every point</td><td>Hillside stayed between 20 and 23</td></tr>
</tbody>
</table>
<p>A useful test for each number: <em>does it support a trend, a comparison or an extreme?</em> If not, leave it out. As a rule of thumb (our advice, not an official rule), a chart this size needs roughly six to ten figures in the whole report, and every figure should come with its unit and year.</p>
`;

export const GRAPH_PRACTICE = `<h2>Practice task: describe a second data set</h2>
<p>Now try it yourself. Spend about 15 minutes. The data is again <strong>fictional</strong>.</p>
${COLLEGE_CHART}
<table>
<thead><tr><th>Percentage of students who…</th><th>2010</th><th>2020</th></tr></thead>
<tbody>
<tr><td>take the bus</td><td>45</td><td>30</td></tr>
<tr><td>cycle</td><td>15</td><td>28</td></tr>
<tr><td>walk</td><td>25</td><td>24</td></tr>
<tr><td>come by car</td><td>15</td><td>18</td></tr>
</tbody>
</table>
<p><strong>Your task:</strong> write an introduction, an overview (two sentences, no detailed numbers) and one paragraph of details. Aim for at least 150 words in total, and use the past simple. Choose your numbers with the table above in mind: which change is the biggest, and which category hardly moved?</p>
<details>
<summary>Show a sample overview and details paragraph</summary>
<blockquote>
<p><strong>Overview.</strong> ${COLLEGE_SAMPLE.overview}</p>
<p><strong>Details.</strong> ${COLLEGE_SAMPLE.detail}</p>
</blockquote>
<p>Compare it with yours: did you mention the biggest rise and the biggest fall? Did you keep the numbers out of your overview? There is more than one good answer, so look at the choices rather than the exact words.</p>
</details>
<aside class="box tip"><p><strong>Want feedback on your own report?</strong> Write your Task 1 answer in Scorify and get an estimated band with corrections for vocabulary and grammar. The estimate is for practice and is not an official IELTS score.</p><p>${btn(WRITING, 'Write your Task 1 report')}</p></aside>
`;

/* ------------------------------------------------------------------ UZ: Writing Task 1 */

const net = TASK1.find(t => t.slug === 'internet-users-four-countries')!;
export const UZ_T1_MODEL = net.sample;

export const UZ_T1_MODEL_SECTION = `<h2>Namuna hisobot va uning tahlili</h2>
<p><strong>Topshiriq:</strong> ${net.question}</p>
${renderChart(net.chart)}
<h3>Reja: yozishdan oldin 2 daqiqa</h3>
<ul>
<li><strong>Asosiy tendensiya:</strong> to‘rtala chiziq ham yuqoriga ketadi.</li>
<li><strong>Eng yuqori va eng past:</strong> 2020 da Country A eng yuqori (88%), Country D eng past (52%).</li>
<li><strong>Qiziq nuqta:</strong> Country C boshida oldinda, lekin keyin Country A uni quvib o‘tadi (2010 va 2015 orasida).</li>
</ul>
<h3>Namuna hisobot</h3>
<blockquote>
<p><strong>Kirish.</strong> ${net.sample[0]}</p>
<p><strong>Overview.</strong> ${net.sample[1]}</p>
<p><strong>Tafsilot 1.</strong> ${net.sample[2]}</p>
<p><strong>Tafsilot 2.</strong> ${net.sample[3]}</p>
</blockquote>
<h3>Bu hisobot nega yaxshi ball oladi: to‘rt mezon bo‘yicha</h3>
<table>
<tbody>
<tr><th>Mezon</th><th>Hisobotda nima ko‘rinadi</th></tr>
<tr><td>Task Achievement</td><td>Kirish savolni boshqa so‘zlar bilan aytadi. Overview raqamsiz ikki asosiy fikrni beradi: hammasi o‘sdi, Country A eng yuqori, Country D eng past. 20 ta qiymatdan faqat muhimlari tanlangan (boshlanish, oxir, quvib o‘tish).</td></tr>
<tr><td>Coherence and Cohesion</td><td>Hisobot to‘rt qismga bo‘lingan: kirish, overview, ikkita tafsilot paragrafi. Tafsilotlar mantiqan guruhlangan: avval yetakchilar (A va C), keyin B va D. <em>whereas, over the next decade, although</em> kabi bog‘lovchilar taqqoslashni yengillashtiradi.</td></tr>
<tr><td>Lexical Resource</td><td>Faqat “increase” emas: <em>rose rapidly, climb, overtook, remained the lowest, strongest growth, proportion</em>. So‘zlar ma’lumotga mos va takrorlanmagan.</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Sanalar o‘tmishda bo‘lgani uchun o‘tgan zamon; <em>Although…, whereas…</em> murakkab gaplar; <em>which reached 50% in 2010</em> kabi nisbiy gap; raqam va birliklar aniq.</td></tr>
</tbody>
</table>
<p>Bu bizning o‘quv tahlilimiz: u rasmiy baho emas, faqat har bir mezon hisobotda qayerda ko‘rinishini ko‘rsatadi.</p>
`;

const READING_CHART = renderChart({
  kind: 'bar', title: 'Mashq diagrammasi (xayoliy ma’lumot): haftada kitob o‘qishga ketadigan o‘rtacha vaqt', unit: 'Soat', categories: ['15–24 yosh', '25–44 yosh', '45+ yosh'],
  series: [{ name: '2010', values: [6, 5, 4] }, { name: '2020', values: [4, 5, 7] }],
});

export const UZ_T1_PRACTICE = `<h2>Mashq topshirig‘i: o‘zingiz yozing</h2>
<p>Quyidagi diagramma <strong>xayoliy</strong> ma’lumot asosida tuzilgan: u haqiqiy so‘rov natijasi emas. Vaqt: 20 daqiqa, hajm: kamida 150 so‘z.</p>
${READING_CHART}
<p><strong>Topshiriq:</strong> <em>The chart shows the average number of hours per week that people in three age groups spent reading books in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</em></p>
<p>Yozishdan oldin o‘zingizga uchta savol bering:</p>
<ul>
<li>Qaysi guruhda eng katta o‘zgarish bor, va u qaysi tomonga?</li>
<li>Qaysi guruhda deyarli o‘zgarish yo‘q?</li>
<li>2010 va 2020 da kim eng ko‘p o‘qigan?</li>
</ul>
<p>Yozib bo‘lgach, o‘zingizni to‘rt mezon bo‘yicha tekshiring:</p>
<ul>
<li><strong>Task Achievement:</strong> overview raqamsizmi? Eng muhim o‘zgarishlar va taqqoslash bormi?</li>
<li><strong>Coherence and Cohesion:</strong> guruhlar mantiqan ajratilganmi, bog‘lovchilar bormi?</li>
<li><strong>Lexical Resource:</strong> “increase/decrease” dan boshqa so‘zlar ishlatildimi?</li>
<li><strong>Grammatical Range and Accuracy:</strong> o‘tgan zamon, birliklar (hours per week) va artikllar to‘g‘rimi?</li>
</ul>
<aside class="box tip"><p><strong>Hisobotingizni tekshirtirmoqchimisiz?</strong> Scorify’da Task 1 javobingizni yozing va taxminiy band hamda tuzatishlarni oling. Bu taxminiy baho, rasmiy IELTS natijasi emas.</p><p>${btn(WRITING, 'Task 1 hisobotini yozish')}</p></aside>
`;

/* ------------------------------------------------------------------ UZ: Writing Task 2 */

export const UZ_T2_ANALYSIS = `<h2>Namuna insho nega yaxshi: to‘rt mezon bo‘yicha tahlil</h2>
<p>Yuqoridagi namuna inshoni ekspert qanday o‘qishini ko‘rib chiqamiz. Har bir mezon Task 2 bahosining 25 foizini tashkil qiladi. Bu bizning o‘quv tahlilimiz, rasmiy baho emas.</p>
<table>
<tbody>
<tr><th>Mezon</th><th>Inshoda nima ko‘rinadi</th></tr>
<tr><td>Task Response</td><td>Savolning ikki qismi (afzallik va kamchilik) yoritilgan va pozitsiya kirishda ham, xulosada ham bir xil: <em>I believe the disadvantages are more significant</em>. Har bir asosiy paragrafda g‘oya, izoh va misol bor: <em>For example, a child who watches videos all evening may have fewer opportunities to practise speaking…</em>. <em>Admittedly, tablets can be valuable learning tools</em> jumlasi qarama-qarshi fikrni ham adolatli ko‘rsatadi.</td></tr>
<tr><td>Coherence and Cohesion</td><td>To‘rt paragraf: kirish, ikkita asosiy qism, xulosa. Har paragraf mavzu gapi bilan boshlanadi: <em>The main concern is…</em>. Bog‘lovchilar munosabatni ko‘rsatadi: <em>In addition, For example, As a result, However, Admittedly</em>, va ular mexanik qo‘yilmagan.</td></tr>
<tr><td>Lexical Resource</td><td>Mavzuga mos aniq birikmalar: <em>screen time, physically active, weight problems, drift towards entertainment, supervision</em>. Noyob so‘zlar emas, balki tabiiy va to‘g‘ri ishlatilgan so‘zlar.</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>Oddiy va murakkab gaplar aralash: <em>Although…</em> bilan qarama-qarshilik, <em>Young children who spend hours…</em> nisbiy gap, <em>Without limits, children usually drift…</em> shart ma’noli kirish, <em>tend to be</em>, <em>can lead to</em> kabi tuzilmalar. Artikl va fe’l moslashuvi xatosiz.</td></tr>
</tbody>
</table>
<p>Xulosa: bu insho murakkab so‘zlar bilan emas, <strong>aniq pozitsiya, rivojlantirilgan g‘oyalar va toza tuzilma</strong> bilan kuchli. Aynan shularni o‘z inshongizda mashq qiling.</p>
`;

export const UZ_T2_PRACTICE = `<h2>Mashq topshirig‘i: o‘z inshongizni yozing</h2>
<blockquote><p><strong>Savol:</strong> Some people believe that old buildings should be preserved, while others think the money would be better spent on modern facilities such as hospitals and schools. Discuss both views and give your own opinion.</p></blockquote>
<p>Vaqt: 40 daqiqa, hajm: kamida 250 so‘z. Quyidagi reja bo‘yicha ishlang:</p>
<ol>
<li><strong>5 daqiqa — reja.</strong> Savol turini aniqlang (ikki fikrni muhokama qilish + o‘z fikringiz). Pozitsiyangizni tanlang va har bir asosiy paragraf uchun bitta g‘oya, izoh va misol yozib qo‘ying.</li>
<li><strong>Kirish (2 gap).</strong> Savolni boshqacha ifodalang va pozitsiyangizni ayting.</li>
<li><strong>1-asosiy paragraf.</strong> Birinchi fikr: u nega muhim deb hisoblanadi?</li>
<li><strong>2-asosiy paragraf.</strong> Ikkinchi fikr va nega siz (to‘liq yoki qisman) qo‘shilasiz yoki qo‘shilmaysiz.</li>
<li><strong>Xulosa (2 gap).</strong> Pozitsiyani takrorlang, yangi g‘oya qo‘shmang.</li>
</ol>
<p>Yozib bo‘lgach, to‘rt mezon bo‘yicha o‘zingizdan so‘rang: <em>Task Response</em> — savolning ikkala qismiga javob berdimmi? <em>Coherence and Cohesion</em> — har paragrafda bitta g‘oya bormi? <em>Lexical Resource</em> — so‘zlar aniqmi? <em>Grammatical Range and Accuracy</em> — murakkab gaplar xatosizmi?</p>
<aside class="box tip"><p><strong>Inshongizni tekshirtiring.</strong> Scorify’da Task 2 inshongizni yozing va mezonlar bo‘yicha taxminiy band va tuzatishlarni oling. Bu taxminiy baho, rasmiy IELTS natijasi emas.</p><p>${btn(WRITING, 'Task 2 inshosini yozish')}</p></aside>
`;

/* ------------------------------------------------------------------ EN: how scored */

export const SCORED_ARTICLE = `<aside class="box good" id="short-answer"><p><strong>Short answer.</strong> In <strong>Speaking</strong>, one trained examiner scores you on four criteria that count equally (Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, Pronunciation), and the four scores are averaged. In <strong>Writing</strong>, each task is scored on four criteria, and <strong>Task 2 counts more than Task 1</strong>: IELTS describes it as carrying more weight, and the usual figure is one third for Task 1 and two thirds for Task 2. Speaking and Writing are reported in whole or half bands, and your <strong>overall band</strong> is the average of all four skills rounded to the nearest half or whole band.</p></aside>
<p>This guide explains each step in plain language. It is a simplified summary of public IELTS information; the official IELTS organisations and test centres are the final authority, so check anything important with them. Scorify’s band estimate is for practice only: <strong>it is not an official IELTS score</strong> and cannot predict one.</p>
<h2>Speaking: four criteria, equal weight</h2>
<p>Your Speaking test is a one-to-one conversation with a certified examiner, face to face or, at some centres, by video call. The examiner asks the questions and scores you at the same time, and the test is recorded. All three parts are judged together: there is no separate mark for Part 1, 2 or 3.</p>
<table>
<thead><tr><th>Criterion</th><th>What the examiner listens for</th><th>Weight</th></tr></thead>
<tbody>
<tr><td>Fluency and Coherence</td><td>Speaking at length without long hesitation, and linking ideas in a logical order</td><td>25%</td></tr>
<tr><td>Lexical Resource</td><td>The range and precision of your vocabulary, including paraphrasing</td><td>25%</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td>How varied your sentence structures are, and how accurate</td><td>25%</td></tr>
<tr><td>Pronunciation</td><td>How easy you are to understand: individual sounds, stress, rhythm and intonation (not whether your accent is British or American)</td><td>25%</td></tr>
</tbody>
</table>
<p>The four criterion scores are averaged to give your Speaking band. Practice pages: <a href="/ielts-speaking-part-1">Part 1</a>, <a href="/ielts-speaking-part-2">Part 2</a>, <a href="/ielts-speaking-part-3">Part 3</a>.</p>
<h2>Writing: four criteria per task, and Task 2 counts more</h2>
<p>Your Writing script is marked by certified examiners using the published band descriptors. Each task is scored separately on four criteria, and each criterion carries equal weight within the task.</p>
<table>
<thead><tr><th>Criterion</th><th>Task 1 (report on a chart, table, map or process)</th><th>Task 2 (essay)</th></tr></thead>
<tbody>
<tr><td>Task Achievement / Task Response</td><td>Task Achievement: key features selected and reported, a clear overview, accurate data</td><td>Task Response: every part of the question answered, a clear position, developed ideas</td></tr>
<tr><td>Coherence and Cohesion</td><td colspan="2">Logical organisation, sensible paragraphing and natural linking</td></tr>
<tr><td>Lexical Resource</td><td colspan="2">Range, precision and natural use of vocabulary</td></tr>
<tr><td>Grammatical Range and Accuracy</td><td colspan="2">Variety and accuracy of sentence structures, punctuation and spelling</td></tr>
</tbody>
</table>
<p><strong>How the two tasks combine.</strong> Task 2 carries more weight than Task 1. The commonly stated split is one third for Task 1 and two thirds for Task 2, so one extra band in Task 2 moves your Writing result roughly twice as much as one extra band in Task 1. IELTS does not publish the exact arithmetic examiners use, so treat the 1:2 ratio as a good approximation. In practice: plan about 20 minutes for Task 1 and 40 for Task 2, and do not skip Task 1. Practice material: <a href="/ielts-writing-task-1-samples">Task 1 samples</a> and <a href="/ielts-writing-task-2-questions">Task 2 questions</a>.</p>
<p>Minimum lengths matter too: answers shorter than 150 words (Task 1) or 250 words (Task 2) are penalised.</p>
<h2>How the overall band is rounded</h2>
<p>Your overall band is the average of Listening, Reading, Writing and Speaking, rounded to the nearest half or whole band. The rule, as IELTS publishes it:</p>
<ul>
<li>An average ending in .25 is rounded <strong>up</strong> to the next half band.</li>
<li>An average ending in .75 is rounded <strong>up</strong> to the next whole band.</li>
<li>Anything else goes to the nearest half or whole band.</li>
</ul>
<table>
<thead><tr><th>Average of the four skills</th><th>Overall band</th></tr></thead>
<tbody>
<tr><td>6.125</td><td>6.0</td></tr>
<tr><td>6.25</td><td>6.5</td></tr>
<tr><td>6.375</td><td>6.5</td></tr>
<tr><td>6.75</td><td>7.0</td></tr>
<tr><td>6.875</td><td>7.0</td></tr>
</tbody>
</table>
<p>Example: Listening 7.0, Reading 6.5, Writing 6.0, Speaking 6.5 add up to 26, and 26 ÷ 4 = 6.5, so the overall band is 6.5. The same method is described for averaging the four Speaking criteria into a Speaking band. Try your own numbers with the <a href="/ielts-band-score-calculator">band score calculator</a> or read <a href="/blog/ielts-band-score-explained">band scores explained</a>.</p>
<h2>What examiners judge and what they do not</h2>
<ul>
<li><strong>Language, not opinions.</strong> In Speaking and Task 2 you are not marked on whether your view is right, but on how well you express and support it.</li>
<li><strong>Clarity, not accent.</strong> Pronunciation is about being easy to understand.</li>
<li><strong>Memorised material.</strong> Prepared answers that do not fit the question do not show your real ability and can lower your score.</li>
<li><strong>Length alone does not help.</strong> Meeting the minimum is required; a much longer answer with more errors earns nothing extra.</li>
</ul>
<h2>What this means for your preparation</h2>
<ol>
<li>Work on all four criteria evenly: a weak criterion pulls the average down.</li>
<li>Give most of your Writing practice to Task 2, without neglecting Task 1.</li>
<li>Answer exactly what is asked, in your own words.</li>
<li>Practise under test conditions, with timed essays and <a href="/ielts-speaking-practice">spoken answers</a>.</li>
</ol>
<aside class="box tip"><p><strong>Practise against the same criteria.</strong> Scorify gives AI feedback on Writing and Speaking with an <em>estimated</em> band for each criterion. It is practice feedback, not an official score: only an official IELTS test gives an official band.</p><p>${btn(WRITING, 'Try Writing feedback')} ${btn(SPEAKING, 'Try Speaking feedback')}</p></aside>
<h2>Frequently asked questions</h2>
<h3>How is IELTS Speaking scored?</h3>
<p>By one certified examiner, on four equally weighted criteria: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation. The four scores are averaged into a whole or half band.</p>
<h3>Does Writing Task 2 count more than Task 1?</h3>
<p>Yes. Task 2 carries more weight; the usual figure is two thirds for Task 2 and one third for Task 1.</p>
<h3>How is the overall IELTS band rounded?</h3>
<p>The average of the four skills is rounded to the nearest half or whole band: .25 goes up to the next half band and .75 goes up to the next whole band.</p>
<h3>Is the Scorify band an official score?</h3>
<p>No. Scorify gives a practice estimate. Only an official IELTS test gives an official band score.</p>
<h2>Sources</h2>
<p>Checked against public IELTS information: the IELTS organisation’s “IELTS scoring in detail” page (ielts.org), its Speaking band descriptors and Writing key assessment criteria guides, and the score guides of IDP IELTS and the British Council. Check the current versions on those sites before an important decision.</p>
<p><em>Scorify.uz provides independent practice and estimated scores. Only an official IELTS test gives an official band score.</em></p>`;

/* ------------------------------------------------------------------ EN: Speaking Part 2 time */

export const PART2_ANSWER = `<aside class="box good" id="short-answer"><p><strong>Short answer.</strong> In IELTS Speaking Part 2 you get <strong>1 minute to prepare</strong> (with paper and a pencil for notes) and then you speak for <strong>1 to 2 minutes</strong>. The examiner stops you at 2 minutes, so aim to speak for close to the full time. The examiner may then ask one or two short questions before Part 3.</p>
<ul><li><strong>Preparation:</strong> 1 minute</li><li><strong>Speaking:</strong> 1–2 minutes; you are stopped at 2:00</li><li><strong>If you stop early:</strong> the examiner may ask you to say more, and a very short answer gives less evidence of your fluency and vocabulary</li></ul></aside>
`;

export const PART2_TIMER = `<style>
.ov-timer{border:1px solid var(--line,#e2e8f0);border-radius:16px;padding:20px 22px;background:#fff;text-align:center}
.ov-timer h3{margin:0 0 6px}.ov-timer .ov-note{font-size:.95rem;color:#475569;margin:0 0 12px}
.ov-timer [data-timer-phase]{font-weight:700;min-height:1.6em;margin:0}
.ov-timer [data-timer-clock]{font-size:3rem;font-weight:800;font-variant-numeric:tabular-nums;line-height:1.2;margin:4px 0 12px}
.ov-timer [data-timer-controls]{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}
.ov-timer button{min-height:44px;padding:8px 18px;border-radius:12px;border:1px solid var(--line,#e2e8f0);background:#fff;font:inherit;font-weight:700;cursor:pointer}
.ov-timer button[data-timer-start]{background:var(--brand,#e80b2d);border-color:transparent;color:#fff}
.ov-timer button:disabled{opacity:.5;cursor:default}
</style>
<div class="ov-timer" data-ielts-timer data-prep="60" data-speak="120" role="group" aria-label="Part 2 practice timer">
<h3>Part 2 practice timer</h3>
<p class="ov-note">First a 1:00 preparation countdown, then a 2:00 speaking countdown. In the real test you may finish between 1:00 and 2:00; here the clock runs to 2:00 so you can practise filling the time. Nothing is recorded or sent anywhere.</p>
<p data-timer-phase aria-live="polite">Ready</p>
<p data-timer-clock role="timer" aria-label="Time left">1:00</p>
<div data-timer-controls hidden><button type="button" data-timer-start>Start preparation</button><button type="button" data-timer-skip disabled>Start speaking now</button><button type="button" data-timer-reset>Reset</button></div>
<noscript><p>The timer needs JavaScript. Without it, use your phone timer: 1 minute to prepare, then speak for up to 2 minutes.</p></noscript>
</div>
`;

/**
 * The timer script. Article HTML loses its script tags in blog.ts (enhance), so the renderer appends this constant after enhance()
 * when needsTimerScript(html) is true. Pure DOM, no network, safe to run twice (each timer initialises once).
 */
export const TIMER_SCRIPT = `<script>(function(){var T=document.querySelectorAll('[data-ielts-timer]');Array.prototype.forEach.call(T,function(r){if(r.getAttribute('data-ready'))return;r.setAttribute('data-ready','1');
var prep=+r.getAttribute('data-prep')||60,talk=+r.getAttribute('data-speak')||120,clock=r.querySelector('[data-timer-clock]'),ph=r.querySelector('[data-timer-phase]'),ctl=r.querySelector('[data-timer-controls]'),bs=r.querySelector('[data-timer-start]'),bk=r.querySelector('[data-timer-skip]'),br=r.querySelector('[data-timer-reset]');
if(!clock||!ph||!bs||!bk||!br)return;var iv=null,end=0,mode='idle',half=false;
function fmt(s){s=Math.max(0,Math.ceil(s));return Math.floor(s/60)+':'+('0'+(s%60)).slice(-2)}
function stop(){if(iv){clearInterval(iv);iv=null}}
function ui(){bs.disabled=mode==='prep'||mode==='talk';bk.disabled=mode!=='prep';bs.textContent=mode==='done'?'Start again':'Start preparation'}
function run(m,sec){stop();mode=m;half=false;end=Date.now()+sec*1000;ph.textContent=m==='prep'?'Preparation: write keywords, not sentences':'Speak now. In the exam the examiner stops you at 2:00';ui();tick();iv=setInterval(tick,250)}
function tick(){var left=(end-Date.now())/1000;clock.textContent=fmt(left);if(mode==='talk'&&!half&&left<=talk/2){half=true;ph.textContent='1:00 is gone. Keep going if you can until 0:00'}
if(left<=0){stop();if(mode==='prep'){run('talk',talk)}else{mode='done';clock.textContent='0:00';ph.textContent='Time is up. In the exam the examiner would stop you here';ui()}}}
bs.onclick=function(){run('prep',prep)};bk.onclick=function(){run('talk',talk)};
br.onclick=function(){stop();mode='idle';clock.textContent=fmt(prep);ph.textContent='Ready';ui()};
ctl.hidden=false;ui()})})()</script>`;
