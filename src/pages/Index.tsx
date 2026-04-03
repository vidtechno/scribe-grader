import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { PricingModal } from '@/components/PricingModal';
import { motion } from 'framer-motion';
import { 
  BookOpen, Target, Sparkles, Clock, BarChart3, MessageSquare,
  ChevronRight, CheckCircle, Star, Award, Zap, Crown,
  Check, ExternalLink, Quote, Bot, GraduationCap
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

  const features = [
    { icon: Target, title: 'Real IELTS Topics', description: 'Practice with authentic Task 1 and Task 2 questions from recent exams.' },
    { icon: Sparkles, title: 'AI-Powered Grading', description: 'Get instant, detailed feedback scored against official IELTS criteria.' },
    { icon: Bot, title: 'Private AI Mentor', description: 'Your personal IELTS coach analyzes your essays and gives tailored advice.' },
    { icon: BarChart3, title: 'Track Progress', description: 'Monitor your improvement with detailed score analytics and charts.' },
  ];

  const testimonials = [
    { name: 'Aziza M.', score: '7.5', text: 'WritingExam.uz helped me improve from Band 6 to 7.5 in just one month. The AI feedback is incredibly detailed!', avatar: 'A' },
    { name: 'Sardor K.', score: '8.0', text: 'The AI Mentor gave me personalized tips that no textbook could. I got Band 8 in Writing on my first try!', avatar: 'S' },
    { name: 'Nilufar R.', score: '7.0', text: "Best IELTS preparation tool I've used. The instant grading saves so much time compared to waiting for a tutor.", avatar: 'N' },
  ];

  const plans = [
    {
      name: 'Free', price: '$0', priceUzs: "0 so'm", period: '', icon: Star, credits: '3 essays / month',
      features: ['3 essay evaluations/month', 'Overall Band + top 3 errors', 'Partial feedback (blurred)', 'Last 10 essays progress chart', "Extra essay: $0.2 / 2,000 so'm"],
    },
    {
      name: 'Pro', price: '$7', priceUzs: "69,000 so'm", period: '/month', icon: Zap, credits: '30 essays / month', popular: true,
      highlight: 'AI Mentor + Full Analysis',
      features: ['30 evaluations/month', 'Full detailed AI feedback', 'Red/Green error corrections', 'AI Mentor (10 messages/day)', 'Vocabulary & Coherence preview', 'Score analytics', "Extra essay: $0.15 / 1,500 so'm"],
    },
    {
      name: 'Pro Plus', price: '$13', priceUzs: "129,000 so'm", period: '/month', icon: Crown, credits: '60 essays / month',
      highlight: '⚡ Elite AI Mentor + All Features',
      features: ['60 evaluations/month', 'Elite AI Mentor (30 msg/day)', 'Topic Vocabulary (10 words)', 'Visual Coherence Map', 'Sentence Complexity Map', 'Full analytics', 'Achievement Badges', "Extra essay: $0.4 / 4,000 so'm"],
    },
  ];

  const criteria = [
    'Task Achievement / Response',
    'Coherence and Cohesion',
    'Lexical Resource',
    'Grammatical Range & Accuracy'
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
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
            AI-Powered IELTS Writing Practice
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Master Your <br />
            <span className="gradient-text">IELTS Writing</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Get instant AI-powered feedback on your essays. Practice with real IELTS topics
            and track your progress to achieve your target band score.
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
              { value: '1000+', label: 'Essays Graded' },
              { value: 'AI', label: 'Instant Grading' },
              { value: '4', label: 'Criteria Scored' },
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
                <div className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-secondary">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  <span>Pro: AI Mentor (10/day)</span>
                </div>
                <div className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  <Crown className="h-3.5 w-3.5 text-primary" />
                  <span>Pro Plus: Elite Mentor (30/day)</span>
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

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20" id="pricing">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">
              Simple <span className="gradient-text">Pricing</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground">
              Choose a plan that fits your preparation needs
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid sm:grid-cols-3 gap-6">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div key={plan.name} variants={fadeUp} custom={index}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className={`relative rounded-2xl border p-7 flex flex-col ${
                    plan.popular ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-border glass-card'
                  }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{plan.priceUzs}{plan.period}</p>
                  {(plan as any).highlight && (
                    <p className="text-xs font-semibold text-primary mb-1">{(plan as any).highlight}</p>
                  )}
                  <p className="text-sm font-semibold text-primary mb-6">{plan.credits}</p>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.name === 'Free' ? (
                    <Link to="/auth">
                      <Button variant="outline" className="w-full">Get Started</Button>
                    </Link>
                  ) : (
                    <Button variant={plan.popular ? 'glow' : 'outline'} className="w-full gap-2"
                      onClick={() => window.open('https://t.me/writingexambase', '_blank')}>
                      <ExternalLink className="h-4 w-4" /> Upgrade via Telegram
                    </Button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
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
            <span className="font-bold">WritingExam.uz</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 WritingExam.uz. All rights reserved.</p>
        </div>
      </footer>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}
