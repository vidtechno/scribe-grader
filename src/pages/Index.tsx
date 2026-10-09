import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { PlanCards } from '@/components/PlanCards';
import { SEOHead } from '@/components/SEOHead';
import { HeroSpeakingDemo } from '@/components/HeroSpeakingDemo';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { BEGINNER_UNITS, A1_UNITS, A2_UNITS } from '@/features/learn/course';
import { motion } from 'framer-motion';
import {
  BookOpen, Check, CheckCircle, ChevronRight, Flame, Gift, GraduationCap, Headphones, Mic, PenLine, Repeat, Send, Sparkles, Trophy, Volume2, Zap,
  ClipboardCheck, Clock, Target, Languages,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/** Mobile-only call to action that appears once a visitor has scrolled past the hero. */
function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden p-3 bg-background/95 backdrop-blur border-t border-border safe-area-bottom">
      <Link to="/auth"><Button variant="glow" size="lg" className="w-full gap-2">7 kun bepul boshlash <ChevronRight className="h-5 w-5" /></Button></Link>
    </div>
  );
}

const FAQ: { q: string; a: string }[] = [
  { q: "Ingliz tilini umuman bilmasam ham boshlay olamanmi?", a: "Ha. Kurs alifbo va tovushlardan boshlanadi (Beginner), keyin Elementary (A1) va Pre-Intermediate (A2) davom etadi. Darslar o'zbek tilida tushuntiriladi." },
  { q: "Bir kunda qancha vaqt kerak?", a: "Bitta dars taxminan 10 daqiqa. Kunlik maqsadni o'zingiz belgilaysiz, streak esa har kuni o'qisangiz o'sib boradi." },
  { q: "7 kunlik bepul davrda nima bor?", a: "Har bir yangi hisobga 7 kun Learn to'liq ochiq: barcha darslar, talaffuz, lug'at va takrorlash tizimi. Karta kerak emas." },
  { q: "Narxi qancha va qanday to'layman?", a: "Learn — oyiga 49 000 so'm, IELTS — oyiga 129 000 so'm. 6 oyga birdan to'lasangiz 10% chegirma. To'lov Telegram orqali @scorify_support ga yoziladi, tasdiqlangach tarif yoqiladi." },
  { q: "IELTS Writing va Speaking ham bormi?", a: "Ha. IELTS tarifida Writing va Speaking javoblaringiz baholanadi, mock testlar ham bor. Yangi hisobga sinab ko'rish uchun 3 ta Writing va 2 ta Speaking baholash sovg'a." },
  { q: "Ro'yxatdan qanday o'taman?", a: "Google yoki Telegram orqali bir bosishda. Telegram bot orqali kirsangiz, eslatmalar va do'stlarni taklif qilish ham shu yerda bo'ladi." },
];

export default function Index() {
  const { user } = useAuth();
  const [subPlans, setSubPlans] = useState<Tables<'subscription_plans'>[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('subscription_plans').select('*').eq('is_active', true).neq('slug', 'free').order('sort_order');
      setSubPlans(data || []);
    })();
  }, []);

  const counts = useMemo(() => ({
    beginnerUnits: BEGINNER_UNITS.length,
    beginnerLessons: BEGINNER_UNITS.reduce((n, u) => n + u.lessons.length, 0),
    a1Units: A1_UNITS.length,
    a1Lessons: A1_UNITS.reduce((n, u) => n + u.lessons.length, 0),
    a2Units: A2_UNITS.length,
    a2Lessons: A2_UNITS.reduce((n, u) => n + u.lessons.length, 0),
  }), []);

  const steps = [
    { icon: BookOpen, title: 'Tushuntirish', text: "Mavzu sodda o'zbek tilida, misollar va «to'g'ri / noto'g'ri» taqqoslash bilan." },
    { icon: Headphones, title: 'Eshiting va takrorlang', text: "Har bir so'z va gapning talaffuzi bor. Ovoz chiqarib takrorlaysiz." },
    { icon: PenLine, title: 'Mashq', text: "Tanlash, bo'sh joy, gap tuzish, tarjima va gapirish mashqlari." },
    { icon: Trophy, title: 'Test va natija', text: "Dars testi, bosqich testi va daraja yakuniy testi. XP va streak yig'asiz." },
  ];

  const features = [
    { icon: Volume2, title: 'Talaffuz har so\'zda', text: "Audio va ovoz chiqarib takrorlash. Gapirishni birinchi darsdan boshlaysiz." },
    { icon: Repeat, title: "Aqlli takrorlash", text: "Qiyin so'zlar tez-tez, yaxshi bilganlaringiz kamroq qaytadi. Unutishga yo'l qo'ymaydi." },
    { icon: Flame, title: 'Streak va kunlik maqsad', text: "Har kuni o'qing, ketma-ket kunlaringizni saqlang va XP to'plang." },
    { icon: Languages, title: "Shaxsiy lug'at", text: "O'rgangan so'zlaringiz bir joyda: qidirish, tinglash va takrorlash." },
    { icon: Trophy, title: 'Reyting va do\'stlar', text: "Do'stlaringizni kuzating, reytingda raqobatlashing, profilingizni bezang." },
    { icon: Send, title: 'Telegram eslatmalar', text: "Bot sizga o'qishni eslatadi va natijangizni yuboradi. Xohlasangiz, o'chirib qo'yasiz." },
  ];

  const levels = [
    { title: 'Beginner', tag: 'Noldan', units: counts.beginnerUnits, lessons: counts.beginnerLessons, text: "Alifbo, tovushlar, salomlashish, sonlar va birinchi so'zlar.", tone: 'from-rose-500 to-orange-400' },
    { title: 'Elementary', tag: 'A1', units: counts.a1Units, lessons: counts.a1Lessons, text: "O'zingiz haqingizda gapirish, kundalik suhbat va asosiy zamonlar.", tone: 'from-indigo-500 to-blue-400' },
    { title: 'Pre-Intermediate', tag: 'A2', units: counts.a2Units, lessons: counts.a2Lessons, text: "O'tmish va kelajak haqida gapirish, taqqoslash, maslahat va iltimoslar, ish, pul va sayohat.", tone: 'from-emerald-500 to-teal-400' },
  ];

  const landingJsonLd = [
    {
      '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Scorify.uz', url: 'https://www.scorify.uz/',
      applicationCategory: 'EducationalApplication', operatingSystem: 'Web', inLanguage: 'uz',
      description: "Ingliz tilini noldan o'rganish: darslar, talaffuz, lug'at, mashqlar va testlar. IELTS Writing va Speaking baholash ham bor.",
      featureList: ["Ingliz tili kursi (Beginner, Elementary va Pre-Intermediate)", "Talaffuz audio va gapirish mashqlari", "Aqlli takrorlash va shaxsiy lug'at", 'IELTS Writing va Speaking baholash'],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'UZS', description: "7 kun bepul, keyin Learn 49 000 so'm/oy" },
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="Ingliz tilini noldan o'rganing — darslar, talaffuz, mashqlar"
        description="Ingliz tilini noldan o'rganing: har kuni 10 daqiqalik darslar, talaffuz, lug'at va testlar. 7 kun bepul. IELTS Writing va Speaking baholash ham bor."
        path="/"
        jsonLd={landingJsonLd}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.12, 0.24, 0.12] }} transition={{ duration: 9, repeat: Infinity }} className="absolute -top-32 -right-24 w-[34rem] h-[34rem] bg-primary rounded-full blur-3xl" />
          <motion.div animate={{ scale: [1.15, 1, 1.15], opacity: [0.1, 0.18, 0.1] }} transition={{ duration: 11, repeat: Infinity }} className="absolute -bottom-40 -left-24 w-[28rem] h-[28rem] bg-orange-400 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wide mb-7">
              <GraduationCap className="h-4 w-4" /> Ingliz tili kursi · noldan boshlab
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Ingliz tilini noldan o'rganing — <span className="gradient-text">har kuni 10 daqiqada</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
              Qisqa darslar, har bir so'zning talaffuzi, aqlli takrorlash va testlar. Hammasi telefoningizda, o'zbek tilida tushuntirish bilan.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {user ? (
                <Link to="/learn"><Button variant="glow" size="xl" className="gap-2">Darsni davom ettirish <ChevronRight className="h-5 w-5" /></Button></Link>
              ) : (
                <>
                  <Link to="/auth"><Button variant="glow" size="xl" className="gap-2 group">7 kun bepul boshlash<ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" /></Button></Link>
                  <a href="#course"><Button variant="glass" size="xl">Kursni ko'rish</Button></a>
                </>
              )}
            </motion.div>

            {!user && (
              <p className="mt-4 text-sm text-muted-foreground flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1">
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" />Karta kerak emas</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" />Google yoki Telegram bilan kirish</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" />Umuman bilmasangiz ham bo'ladi</span>
              </p>
            )}

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="grid grid-cols-3 gap-3 mt-10">
              {[
                { icon: Clock, value: '10 daqiqa', label: 'bitta dars' },
                { icon: Volume2, value: 'Talaffuz', label: 'har so\'zda' },
                { icon: Flame, value: 'Streak', label: 'kunlik odat' },
              ].map(s => (
                <div key={s.value} className="p-3 sm:p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/60 text-left">
                  <s.icon className="h-5 w-5 mb-2 text-primary" />
                  <div className="font-bold text-primary text-sm sm:text-base">{s.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Lesson preview */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.6 }} className="relative mx-auto w-full max-w-md">
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <div className="relative z-20 bg-card rounded-3xl shadow-2xl border border-border p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 grid place-items-center"><BookOpen className="h-4 w-4 text-white" /></div>
                    <div><p className="text-sm font-semibold">Dars 4 · Sanaladigan otlar</p><p className="text-[11px] text-muted-foreground">Elementary · A1</p></div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 flex items-center gap-1"><Flame className="h-3 w-3" />5 kun</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-5">
                  <motion.div initial={{ width: 0 }} animate={{ width: '68%' }} transition={{ delay: 0.6, duration: 1.1 }} className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">To'g'ri javobni tanlang</p>
                <p className="text-lg font-semibold mb-3 flex items-center gap-2">We don't have ___ butter. <span className="w-7 h-7 rounded-full bg-primary/10 grid place-items-center"><Volume2 className="h-3.5 w-3.5 text-primary" /></span></p>
                <div className="grid grid-cols-2 gap-2">
                  {['many', 'much', 'a', 'a lot'].map((o, i) => (
                    <div key={o} className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium flex items-center gap-2 ${o === 'much' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300' : 'border-border'}`}>
                      <span className="w-5 h-5 rounded border border-current/30 grid place-items-center text-[11px] opacity-70">{i + 1}</span>{o}
                      {o === 'much' && <Check className="h-4 w-4 ml-auto" />}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-3 py-2"><b>butter</b> — sanalmaydi, inkor gap → <b>much</b>.</p>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 right-0 sm:-right-6 z-30 bg-card p-3 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-500 grid place-items-center"><Zap className="h-5 w-5 text-white" /></div>
                  <div><div className="text-xs font-bold">+30 XP</div><div className="text-[10px] text-muted-foreground">Dars tugatildi</div></div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-12 left-0 sm:-left-8 z-30 bg-card p-3 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 grid place-items-center"><Mic className="h-4 w-4 text-primary" /></div>
                  <div><div className="text-xs font-bold">Talaffuz mashqi</div><div className="text-[10px] text-muted-foreground">Ovoz chiqarib takrorlang</div></div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How a lesson works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">Bitta dars <span className="gradient-text">qanday o'tadi?</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">Har bir dars bir xil, tushunarli yo'ldan boradi, shuning uchun nima qilishni o'ylab o'tirmaysiz.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <motion.div key={s.title} variants={fadeUp} custom={i} className="glass-card-hover p-6 relative">
                <span className="absolute top-4 right-4 text-4xl font-black text-primary/10">{i + 1}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center mb-4"><s.icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course levels */}
      <section id="course" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">Alifbodan <span className="gradient-text">birinchi suhbatgacha</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">Kurs bosqichma-bosqich: har daraja oxirida yakuniy test. O'tsangiz, keyingi darajaga o'tasiz. Boshlanishda xato tanlagan bo'lsangiz ham, testdan o'tib oldinga siljish mumkin.</motion.p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {levels.map(l => (
              <div key={l.title} className={`rounded-3xl p-6 text-white bg-gradient-to-br ${l.tone} shadow-lg`}>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-90">{l.tag}</p>
                <h3 className="text-2xl font-extrabold mb-2">{l.title}</h3>
                <p className="text-sm opacity-95 mb-4">{l.text}</p>
                <div className="flex gap-4 text-sm font-semibold"><span>{l.units} bosqich</span><span>{l.lessons} dars</span><span className="flex items-center gap-1"><ClipboardCheck className="h-4 w-4" />Yakuniy test</span></div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">Keyingi darajalar (Intermediate va undan yuqori) tez orada qo'shiladi.</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">O'rganishni <span className="gradient-text">odatga aylantiradi</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">Eng muhimi — har kuni o'qish. Shuning uchun Scorify sizni motivatsiya qiladi va unutishga yo'l qo'ymaydi.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title} variants={fadeUp} custom={i} whileHover={{ y: -4 }} className="glass-card-hover p-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-4"><f.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="font-semibold mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 max-w-3xl mx-auto glass-card p-5 flex items-start gap-3 border-l-4 border-l-primary">
            <Gift className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed"><b className="text-foreground">Do'stlaringizni taklif qiling.</b> Do'stingiz ro'yxatdan o'tib, sinov davridan keyin pullik tarif olsa, sizga 10 000 so'm referal balansiga qo'shiladi. Telegram botda 🎁 Referal tugmasidan havolangizni oling.</p>
          </div>
        </div>
      </section>

      {/* IELTS (secondary) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="ielts">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-medium mb-4"><Target className="h-3.5 w-3.5" /> IELTS ga tayyorlanyapsizmi?</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl sm:text-4xl font-bold mb-4">IELTS <span className="gradient-text">Writing va Speaking</span> baholash</motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground max-w-2xl mx-auto">Ingliz tilini o'rganish bilan birga IELTS javoblaringizni ham tekshiring: taxminiy band, mezonlar bo'yicha ball va aniq tuzatishlar.</motion.p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              {[
                { icon: PenLine, title: 'Writing Task 1 va Task 2', text: "Esse yozing, 4 ta rasmiy mezon bo'yicha taxminiy band va tuzatishlarni oling." },
                { icon: Mic, title: 'Speaking Part 1–3', text: "Brauzerda yozib oling, matnga aylantirilgan javobingizni ko'ring, ravonlik, grammatika, lug'at va talaffuz bahosini oling." },
                { icon: Clock, title: 'Mock testlar', text: "Imtihon vaqti bilan to'liq mashq: Writing va Speaking, oxirida umumiy hisobot." },
              ].map(f => (
                <div key={f.title} className="glass-card p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center shrink-0"><f.icon className="h-5 w-5 text-primary" /></div>
                  <div><h3 className="font-semibold mb-1">{f.title}</h3><p className="text-sm text-muted-foreground">{f.text}</p></div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to={user ? '/writing' : '/auth'}><Button variant="outline" className="gap-2"><PenLine className="h-4 w-4" />Writing</Button></Link>
                <Link to={user ? '/speaking' : '/auth'}><Button variant="outline" className="gap-2"><Mic className="h-4 w-4" />Speaking</Button></Link>
              </div>
              <p className="text-xs text-muted-foreground">Yangi hisobga 3 ta Writing va 2 ta Speaking baholash sovg'a. Baholar taxminiy, rasmiy IELTS natijasi emas.</p>
            </div>
            <HeroSpeakingDemo />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20" id="pricing">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold mb-4">Oddiy <span className="gradient-text">narxlar</span></motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-2xl mx-auto">Learn — ingliz tili kursi, kuniga taxminan 1 600 so'm. IELTS — kursga qo'shimcha Writing va Speaking baholash. 6 oyga birdan to'lasangiz 10% chegirma.</motion.p>
          </motion.div>
          <PlanCards plans={subPlans} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Ko'p so'raladigan <span className="gradient-text">savollar</span></h2>
          <div className="space-y-3">
            {FAQ.map(f => (
              <details key={f.q} className="glass-card p-5 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-3">{f.q}<ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" /></summary>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-10 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative">
              <Sparkles className="h-11 w-11 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Bugun birinchi darsni boshlang</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">10 daqiqa yetadi. 7 kun bepul, karta kerak emas.</p>
              <Link to={user ? '/learn' : '/auth'}><Button variant="glow" size="xl" className="gap-2">{user ? "Darslarga o'tish" : "Bepul boshlash"} <ChevronRight className="h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 border-t border-border" aria-labelledby="free-guides-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="free-guides-heading" className="text-2xl font-bold mb-3">Bepul IELTS qo'llanmalari</h2>
          <p className="text-muted-foreground mb-7 max-w-2xl">IELTS Writing va Speaking formatini o'rganing va bitta foydali ko'nikmani mashq qiling.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="/ielts-writing-task-2-questions" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">Task 2 savollar va namunalar</h3><p className="text-sm text-muted-foreground">Esse savollari va namunaviy javoblar.</p></a>
            <a href="/ielts-speaking-part-2" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">Speaking Part 2 kartochkalari</h3><p className="text-sm text-muted-foreground">Mashhur «Describe a…» mavzulari.</p></a>
            <a href="/blog" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">Scorify blogi</h3><p className="text-sm text-muted-foreground">Ingliz tili va IELTS bo'yicha foydali maqolalar (o'zbek va ingliz tillarida).</p></a>
            <a href="/ielts-writing-task-1" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">IELTS Writing Task 1</h3><p className="text-sm text-muted-foreground">Asosiy xususiyatlarni topish va ko'rib chiqish yozish.</p></a>
            <a href="/ielts-writing-task-2" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">IELTS Writing Task 2</h3><p className="text-sm text-muted-foreground">Fikrni aniq ifodalash va rivojlantirish.</p></a>
            <a href="/ielts-speaking-practice" className="glass-card-hover p-5 block"><h3 className="font-semibold text-lg mb-2">IELTS Speaking mashqi</h3><p className="text-sm text-muted-foreground">Part 1–3 savollarini sinab ko'ring.</p></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo-128.webp" alt="Scorify" className="h-8 w-8 object-contain" />
              <span className="font-bold">Scorify<span className="text-primary">.uz</span></span>
            </div>
            <p className="text-muted-foreground">Ingliz tilini noldan o'rganish. IELTS Writing va Speaking baholash ham bor.</p>
          </div>
          <div className="space-y-2"><p className="font-semibold">Kurs</p>
            <Link className="block text-muted-foreground hover:text-primary" to="/auth">Beginner</Link>
            <Link className="block text-muted-foreground hover:text-primary" to="/auth">Elementary (A1)</Link>
            <Link className="block text-muted-foreground hover:text-primary" to="/auth">Pre-Intermediate (A2)</Link>
            <a className="block text-muted-foreground hover:text-primary" href="#pricing">Narxlar</a></div>
          <div className="space-y-2"><p className="font-semibold">IELTS</p>
            <a className="block text-muted-foreground hover:text-primary" href="/ielts-writing-task-2">Writing Task 2</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ielts-speaking-practice">Speaking mashqi</a>
            <a className="block text-muted-foreground hover:text-primary" href="/ielts-band-score-calculator">Band kalkulyatori</a></div>
          <div className="space-y-2"><p className="font-semibold">Aloqa</p>
            <a className="block text-muted-foreground hover:text-primary" href="/blog">Blog</a>
            <a className="block text-muted-foreground hover:text-primary" href="https://t.me/scorify_support" rel="noopener noreferrer">Telegram: @scorify_support</a>
            <a className="block text-muted-foreground hover:text-primary" href="#faq">Savol-javob</a></div>
        </div>
        <p className="max-w-6xl mx-auto mt-8 text-sm text-muted-foreground">© {new Date().getFullYear()} Scorify.uz. IELTS baholari taxminiy bo'lib, rasmiy imtihon natijasi emas.</p>
      </footer>

      {!user && <StickyCta />}
    </div>
  );
}
