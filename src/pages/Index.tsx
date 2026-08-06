import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { 
  BookOpen, Target, Sparkles, Clock, BarChart3, MessageSquare,
  ChevronRight, CheckCircle, Star, Award, Zap, Crown,
  Check, ExternalLink, Quote, Bot, GraduationCap, Mic, Coins, PenLine, Infinity as InfinityIcon,
  Headphones, MessageCircle, Volume2, FileAudio
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Index() {
  const { user } = useAuth();
  const [showPricing, setShowPricing] = useState(false);
  const [subPlans, setSubPlans] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from('subscription_plans')
        .select('*')
        .eq('is_active', true)
        .neq('slug', 'free')
        .order('sort_order');
      setSubPlans(data || []);
    })();
  }, []);

  const features = [
    { icon: Target, title: 'Real IELTS Topics', description: 'Practice with authentic Writing Task 1 & 2 and Speaking Parts 1–3 questions.' },
    { icon: Sparkles, title: 'AI Writing Grading', description: 'Instant band score + detailed feedback against the official IELTS criteria.' },
    { icon: Mic, title: 'AI Speaking Practice', description: 'Record your answer, get a transcript and a full speaking band evaluation.' },
    { icon: Bot, title: 'Private AI Mentor', description: 'A Socratic coach that learns from your essays and guides you to a higher band.' },
  ];

  const speakingCriteria = [
    'Fluency & Coherence',
    'Lexical Resource',
    'Grammatical Range & Accuracy',
    'Pronunciation',
  ];

  const speakingFeatures = [
    { icon: Mic, title: 'Record in your browser', description: 'No setup. Hit record, speak naturally, and stop when you’re done.' },
    { icon: FileAudio, title: 'Accurate AI transcription', description: 'Your audio is converted to text so you can review exactly what you said.' },
    { icon: BarChart3, title: 'Official band scoring', description: 'Get scored on all 4 IELTS Speaking criteria with an overall band.' },
    { icon: MessageCircle, title: 'Detailed feedback', description: 'See strengths, weaknesses, and concrete tips to push to the next band.' },
    { icon: Headphones, title: 'All 3 parts covered', description: 'Practice Part 1 questions, Part 2 cue cards, and Part 3 discussions.' },
    { icon: PenLine, title: 'Use your own topic', description: 'Pick from our library or paste any topic you want to practice today.' },
  ];

  const testimonials = [
    { name: 'Aziza M.', score: '7.5', text: 'Scorify.uz helped me improve from Band 6 to 7.5 in just one month. The AI feedback is incredibly detailed!', avatar: 'A' },
    { name: 'Sardor K.', score: '8.0', text: 'The AI Mentor gave me personalized tips that no textbook could. I got Band 8 in Writing on my first try!', avatar: 'S' },
    { name: 'Nilufar R.', score: '7.0', text: "Best IELTS preparation tool I've used. The instant grading saves so much time compared to waiting for a tutor.", avatar: 'N' },
  ];

  const plans: { name: string; priceUzs: string; credits: number; icon: any; popular?: boolean; badge?: string }[] = [
    { name: 'Starter',  priceUzs: '15,000',  credits: 10,  icon: Star },
    { name: 'Basic',    priceUzs: '35,000',  credits: 25,  icon: Zap },
    { name: 'Standard', priceUzs: '65,000',  credits: 50,  icon: Sparkles, popular: true, badge: 'Most Popular' },
    { name: 'Pro',      priceUzs: '120,000', credits: 100, icon: Bot },
    { name: 'Premium',  priceUzs: '275,000', credits: 250, icon: Crown, badge: 'Best Value' },
    { name: 'Ultimate', priceUzs: '500,000', credits: 500, icon: Award },
  ];

  const planFeatures = [
    'Use credits for Writing or Speaking — your choice',
    'Full AI feedback with band scores & error corrections',
    'Private AI Mentor with personalized coaching',
    'Progress analytics across Writing & Speaking',
    'Credits never expire — pay once, use anytime',
  ];

  const criteria = [
    'Task Achievement / Response',
    'Coherence and Cohesion',
    'Lexical Resource',
    'Grammatical Range & Accuracy'
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead title="IELTS Writing & Speaking Practice" description="Master IELTS Writing and Speaking with AI-powered grading, real exam topics, timed mock tests, and a personal AI Mentor." path="/" />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            AI-Powered IELTS Writing & Speaking
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Master IELTS <br />
            <span className="gradient-text">Writing & Speaking</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Get instant AI feedback on your Writing and Speaking. Practice with real IELTS topics,
            simulate full mock tests, and reach your target band faster with a personal AI Mentor.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <Link to="/dashboard">
                <Button variant="glow" size="xl" className="gap-2">
                  Go to Dashboard <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="glow" size="xl" className="gap-2 group">
                    Start Practicing Free
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="glass" size="xl" onClick={() => setShowPricing(true)}>
                  View Plans
                </Button>
              </>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto mt-16">
            {[
              { value: 'Writing', label: 'Task 1 & 2' },
              { value: 'Speaking', label: 'Parts 1–3' },
              { value: 'AI Mentor', label: '24/7 coach' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Succeed</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides comprehensive tools to help you prepare for the IELTS Writing test.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={fadeUp} custom={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card-hover p-6 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-6">
                Get Graded Like a Real <span className="gradient-text">IELTS Examiner</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-8">
                Our AI evaluates your essay based on the official IELTS Writing band descriptors,
                providing you with accurate scores and actionable feedback.
              </motion.p>
              <div className="space-y-4">
                {criteria.map((criterion, index) => (
                  <motion.div key={criterion} variants={fadeUp} custom={index + 2}
                    className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span>{criterion}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-card p-8 relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overall Band Score</p>
                  <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.3 }}
                    className="text-4xl font-bold text-primary">7.5</motion.p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Task Achievement', score: 7.5 },
                  { label: 'Coherence & Cohesion', score: 7.0 },
                  { label: 'Lexical Resource', score: 8.0 },
                  { label: 'Grammar', score: 7.5 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.score / 9) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <span className="font-medium w-6">{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-12">
            <motion.div variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent-foreground text-xs font-medium mb-4">
              <Mic className="h-3.5 w-3.5" /> IELTS Speaking Practice
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-bold mb-4">
              Speak Like a <span className="gradient-text">Native Examiner Expects</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">
              Record your answers right in the browser, get an instant transcript, and receive a full IELTS Speaking band evaluation — all from your phone or laptop.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {speakingFeatures.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp} custom={i}
                whileHover={{ y: -4 }}
                className="glass-card-hover p-5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Volume2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Scored on the official 4 criteria</h3>
              </div>
              <div className="space-y-3">
                {speakingCriteria.map((c) => (
                  <div key={c} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border/60 text-xs text-muted-foreground flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span>Every speaking attempt is saved automatically to your history for later review.</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="glass-card p-6">
              <p className="text-xs text-muted-foreground mb-2">Sample Part 2 cue card</p>
              <p className="text-sm font-medium mb-4">"Describe a place you would like to visit. Say where it is, why you want to go, and what you would do there."</p>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/10 border border-accent/30 mb-3">
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                  <Mic className="h-5 w-5 text-accent-foreground" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Recording…</p>
                  <div className="flex items-end gap-0.5 h-4 mt-1">
                    {[3,6,4,8,5,7,3,6,4,7,5,8,3,6,4].map((h, i) => (
                      <motion.div key={i}
                        animate={{ height: [`${h*2}px`, `${h*3}px`, `${h*2}px`] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
                        className="w-1 bg-accent rounded-full" />
                    ))}
                  </div>
                </div>
                <span className="text-xs font-mono text-muted-foreground">0:42</span>
              </div>
              <div className="flex items-center justify-between text-sm pt-2">
                <span className="text-muted-foreground">Overall Speaking Band</span>
                <span className="text-2xl font-bold text-primary">7.0</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Mentor Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeUp} custom={0}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
                <Bot className="h-3.5 w-3.5" /> New Feature
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-bold mb-4">
                Your Private <span className="gradient-text">AI Mentor</span>
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-6">
                Get personalized Socratic coaching based on your essay history. Your AI Mentor guides you to discover your own mistakes
                and build lasting skills.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="space-y-3">
                {[
                  '📝 Analyzes your last 3-5 essays for patterns',
                  '🎯 Socratic method — guides you to find answers',
                  '💬 Ask anything about IELTS writing strategy',
                  '📊 Track your improvement over time',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap items-center gap-3 mt-6">
                <div className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <PenLine className="h-3.5 w-3.5 text-primary" />
                  <span>Included in every monthly plan</span>
                </div>
                <div className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30">
                  <Mic className="h-3.5 w-3.5 text-accent-foreground" />
                  <span>Writing + Speaking in one place</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="glass-card p-6 relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-md px-3.5 py-2 text-sm max-w-[85%]">
                    How can I improve my Task 2 score from 6 to 7?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-secondary/70 rounded-2xl rounded-tl-md px-3.5 py-2 text-sm max-w-[85%]">
                    Great question! 🎯 Let me ask you something first — when you look at your last essay, what do you think was the weakest part?
                    <br /><br />
                    Think about it: did you fully answer ALL parts of the question? 🤔 This is where most Band 6 students lose marks.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">
              Students <span className="gradient-text">Love Us</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground">
              See what our users say about their experience
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} variants={fadeUp} custom={i}
                whileHover={{ y: -5 }}
                className="glass-card-hover p-6 relative">
                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-primary">Band {t.score}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing — Monthly Subscription Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20" id="pricing">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">
              Simple <span className="gradient-text">Monthly Plans</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your prep intensity. Every plan includes AI-graded Writing, Speaking and full Mock Tests.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="glass-card p-5 mb-10 max-w-3xl mx-auto border-l-4 border-l-primary">
            <div className="flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                IELTS success is built on consistent practice and insightful feedback.
                Our platform empowers you to master your skills with targeted analysis, turning every exercise into a step toward your goal.
              </p>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subPlans.map((plan: any, index: number) => {
              const popular = (plan.badge || '').toLowerCase().includes('popular');
              return (
                <motion.div key={plan.slug} variants={fadeUp} custom={index}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`relative rounded-2xl border p-6 flex flex-col ${
                    popular ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-border glass-card'
                  }`}>
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  {plan.description && (
                    <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                  )}
                  <div className="flex items-baseline gap-1 mb-5">
                    <span className="text-3xl font-bold text-primary">{plan.price_uzs}</span>
                    <span className="text-sm text-muted-foreground">so'm / month</span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1 text-sm">
                    <li className="flex items-center gap-2"><PenLine className="h-4 w-4 text-primary flex-shrink-0" /><span><strong>{plan.writing_limit}</strong> Writing evaluations</span></li>
                    <li className="flex items-center gap-2"><Mic className="h-4 w-4 text-primary flex-shrink-0" /><span><strong>{plan.speaking_limit}</strong> Speaking evaluations</span></li>
                    <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary flex-shrink-0" /><span><strong>{plan.mock_test_limit}</strong> Full Mock Tests</span></li>
                    {(plan.features || []).slice(3).map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" /><span>{f}</span></li>
                    ))}
                  </ul>
                  <Button variant={popular ? 'glow' : 'outline'} className="w-full gap-2"
                    onClick={() => window.open(`https://t.me/scorify_payments?text=${encodeURIComponent(`Salom! Men "${plan.name}" tarifini sotib olmoqchiman (${plan.price_uzs} so'm / oy).`)}`, '_blank')}>
                    <ExternalLink className="h-4 w-4" /> Buy via Telegram
                  </Button>
                </motion.div>
              );
            })}
          </motion.div>

          <p className="text-xs text-muted-foreground text-center mt-8">
            Payments are handled manually via Telegram <span className="text-primary font-semibold">@scorify_payments</span>. Your plan activates after confirmation and lasts 30 days.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} className="glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Ready to Achieve Your Target Band?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of students who improved their writing scores with AI-powered feedback.
              </p>
              <Link to={user ? '/dashboard' : '/auth'}>
                <Button variant="glow" size="xl" className="gap-2">
                  {user ? 'Go to Dashboard' : 'Start Free Now'} <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-bold">Scorify.uz</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Scorify.uz. All rights reserved.</p>
        </div>
      </footer>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}
