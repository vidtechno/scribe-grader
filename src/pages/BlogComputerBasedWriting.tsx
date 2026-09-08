import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { SEOHead, BASE_URL } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Keyboard, Monitor, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

const PATH = '/blog/computer-based-ielts-writing';
const TITLE = 'Computer-Based IELTS Writing: Complete 2026 Guide';
const DESCRIPTION =
  'How computer-based IELTS Writing works, how it differs from the paper test, the exact screen layout, timing strategy, typing tips and practice drills to raise your band score.';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description: DESCRIPTION,
    inLanguage: 'en',
    mainEntityOfPage: `${BASE_URL}${PATH}`,
    author: { '@type': 'Organization', name: 'Scorify.uz', url: `${BASE_URL}/` },
    publisher: { '@type': 'Organization', name: 'Scorify.uz', url: `${BASE_URL}/` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Computer-Based IELTS Writing', item: `${BASE_URL}${PATH}` },
    ],
  },
];

export default function BlogComputerBasedWriting() {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead
        title="Computer-Based IELTS Writing: Complete 2026 Guide"
        description={DESCRIPTION}
        path={PATH}
        keywords="computer based IELTS writing, CD IELTS, IELTS on computer, IELTS writing task 1, IELTS writing task 2, IELTS Uzbekistan"
        jsonLd={jsonLd}
      />
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <article>
          <header className="mb-8">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wide">
              IELTS Writing
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-3 leading-tight">
              Computer-Based IELTS Writing: Complete 2026 Guide
            </h1>
            <p className="text-muted-foreground text-lg">
              Everything that changes when you type your IELTS essays instead of writing them by hand — the screen you
              will see, how the 60 minutes are best spent, and the habits that cost candidates half a band.
            </p>
            <p className="text-sm text-muted-foreground mt-3 inline-flex items-center gap-1">
              <Clock className="h-4 w-4" /> 8 min read
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">What computer-based IELTS Writing actually is</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Computer-delivered IELTS uses exactly the same questions, the same marking criteria and the same band
              scale as the paper test. Only the delivery changes: you read the task on a screen and type your answer
              into a text box. The Writing section still lasts 60 minutes in total and still contains two tasks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Task 1 asks for at least 150 words (a chart, graph, table, map or process in Academic; a letter in General
              Training). Task 2 asks for at least 250 words of argument or discussion and is worth twice as much as
              Task 1.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Computer vs paper: the differences that matter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <Monitor className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Live word counter</h3>
                <p className="text-sm text-muted-foreground">
                  The screen counts your words for you. No more losing 90 seconds counting lines — but also no excuse
                  for finishing under the limit.
                </p>
              </div>
              <div className="glass-card p-5">
                <Keyboard className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Editing is free</h3>
                <p className="text-sm text-muted-foreground">
                  Cut, paste and rewrite a sentence without a messy page. Restructuring a weak paragraph costs seconds
                  instead of minutes.
                </p>
              </div>
              <div className="glass-card p-5">
                <Clock className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-1">On-screen timer</h3>
                <p className="text-sm text-muted-foreground">
                  A countdown is always visible, with warnings near the end. Handwriting speed no longer limits you —
                  typing speed does.
                </p>
              </div>
              <div className="glass-card p-5">
                <AlertTriangle className="h-5 w-5 text-primary mb-2" />
                <h3 className="font-semibold mb-1">No spellcheck</h3>
                <p className="text-sm text-muted-foreground">
                  There is no red underline and no autocorrect. Spelling and typing slips are marked exactly like
                  handwritten errors.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              One genuine advantage of the computer test: legibility is never an issue. Examiners cannot deduct for
              handwriting they cannot read, because there is none.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How to spend the 60 minutes</h2>
            <ol className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">Minutes 0–3 — read and plan Task 1.</strong> Identify the chart
                type, the units, the time period and the two or three biggest trends. Plan the overview first; it is
                the sentence examiners look for.
              </li>
              <li>
                <strong className="text-foreground">Minutes 3–18 — type Task 1.</strong> Introduction, overview, then
                two body paragraphs of grouped data with real comparisons and figures.
              </li>
              <li>
                <strong className="text-foreground">Minutes 18–20 — check Task 1.</strong> Word count, tenses,
                singular/plural, and whether every number you quoted is on the chart.
              </li>
              <li>
                <strong className="text-foreground">Minutes 20–25 — plan Task 2.</strong> Decide your position and your
                two main ideas before typing a single word. Typing fast into a bad plan is the most common cause of a
                low Coherence score.
              </li>
              <li>
                <strong className="text-foreground">Minutes 25–52 — type Task 2.</strong> Introduction with a clear
                thesis, two developed body paragraphs with examples, conclusion that answers the question.
              </li>
              <li>
                <strong className="text-foreground">Minutes 52–60 — proofread both tasks.</strong> Articles, subject–verb
                agreement, prepositions, and any word your fingers may have mistyped.
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Typing habits that protect your band</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Aim for a
                comfortable 30–40 words per minute. Below that, planning time gets eaten by typing.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Press Enter
                between paragraphs. A wall of text reads as one paragraph and hurts Coherence and Cohesion.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Write 170–190
                words for Task 1 and 270–290 for Task 2. Long is not better; under the minimum is penalised.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Learn the
                spelling of your own favourite academic words. Without spellcheck, a repeated misspelling is repeated
                Lexical Resource damage.</li>
              <li className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Never paste
                a memorised template. Off-topic memorised language is one of the fastest ways to lose Task Response
                marks.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">Common mistakes on the computer test</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Candidates who move from paper to screen usually lose marks in three places: they start typing without a
              plan because typing feels fast; they trust their eyes instead of proofreading, so small typos accumulate;
              and they forget that the word counter includes their introduction, so they overwrite Task 1 and run out
              of time for Task 2 — the task worth two-thirds of the Writing score.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The fix is simple and unglamorous: practise under the real clock, on a keyboard, with no spellcheck, and
              get every essay marked against the four official criteria.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">How to practise it properly</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Scorify.uz recreates the computer-based experience: a timed Task 1 and Task 2 editor, a live word count,
              no spellcheck, and instant AI band scores with examiner-style feedback on Task Response, Coherence and
              Cohesion, Lexical Resource and Grammatical Range and Accuracy. You can also sit a full mock test that
              chains Writing and Speaking together.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/auth">
                <Button variant="glow" className="gap-1">
                  Practise IELTS Writing free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline">See how Scorify works</Button>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Quick answers</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Is computer-based IELTS Writing easier?</h3>
                <p className="text-sm text-muted-foreground">
                  It is not easier or harder to score — the criteria are identical. It suits you if you type faster
                  than you write and edit comfortably on screen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Can I get my results faster?</h3>
                <p className="text-sm text-muted-foreground">
                  Computer-delivered results are typically available within a few days, compared with about two weeks
                  for the paper test. Check the exact timing with your test centre.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Can I make notes?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes. You receive paper and a pencil for planning, and you can also type rough notes in the answer box
                  and delete them before the end.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
