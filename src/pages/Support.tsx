import { useLocation } from 'react-router-dom';
import { ArrowRight, CreditCard, Headphones, KeyRound, LifeBuoy, MessageCircle, Send, Wrench } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { SUPPORT_TOPICS, SUPPORT_USERNAME, supportLink } from '@/lib/support';

const ICONS: Record<string, typeof LifeBuoy> = { payment: CreditCard, lesson: Headphones, technical: Wrench, account: KeyRound, other: MessageCircle };

const FAQ = [
  { q: "To'lovni qanday qilaman?", a: "Narxlar oynasida tarifni tanlang, «Sotib olish» tugmasi Telegramdagi yordam akkauntimizni ochadi. To'lovni shu yerda tasdiqlaymiz va tarifingiz ochiladi." },
  { q: "To'lov qilsam, tarif qachon ochiladi?", a: "Odatda bir necha daqiqada, ish vaqtida. Chekni Telegramga yuborsangiz, tezroq ochamiz." },
  { q: "Darsda xato topdim, nima qilay?", a: "Mashq ostidagi «Xato haqida xabar berish» tugmasini bosing yoki shu sahifadagi «Darsdagi xato» orqali yozing. Biz tekshirib, tuzatamiz." },
  { q: "Mikrofon yoki ovoz ishlamayapti", a: "Brauzerda sayt uchun mikrofon ruxsatini yoqing, qurilma ovozini tekshiring va sahifani yangilang. Hal bo'lmasa «Texnik muammo» orqali yozing." },
  { q: "Kursni noldan boshlash shartmi?", a: "Yo'q. Birinchi kirganingizda qisqa daraja testi bor, undan keyin ham «Daraja testi» kartasi orqali yuqori darajaga o'tish mumkin." },
];

/** A page with one job: get the person to the support chat in Telegram with the question already written. */
export default function Support() {
  const { user, profile } = useAuth();
  const { planName } = useSubscription();
  const { pathname } = useLocation();
  const ctx = { publicId: profile?.public_id, email: user?.email, plan: user ? planName : null, page: pathname };
  return (
    <div className="min-h-screen bg-background pb-28 md:pb-12">
      <SEOHead title="Yordam va aloqa" description="Scorify.uz yordam xizmati: to'lov, darslardagi xatolar va texnik savollar bo'yicha Telegramda yozing." path="/support" />
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-3"><LifeBuoy className="h-7 w-7" /></span>
          <h1 className="text-3xl font-extrabold mb-2">Yordam kerakmi?</h1>
          <p className="text-muted-foreground max-w-md mx-auto">Telegramda yozing: savolingizni tanlang, xabar tayyor holda ochiladi, qolgani bizdan. To'lov ham shu akkaunt orqali.</p>
        </div>

        <a href={supportLink(null, ctx)} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-brand-red-soft text-primary-foreground font-bold py-4 mb-6 shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity">
          <Send className="h-5 w-5" />Telegramda yozish · @{SUPPORT_USERNAME}
        </a>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Nima haqida?</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {SUPPORT_TOPICS.map((t) => {
            const Icon = ICONS[t.id] ?? MessageCircle;
            return (
              <a key={t.id} href={supportLink(t, ctx)} target="_blank" rel="noopener noreferrer" className="group glass-card-hover p-4 flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><Icon className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold">{t.title}</span><span className="block text-xs text-muted-foreground">{t.text}</span></span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            );
          })}
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tez-tez so'raladigan savollar</h2>
        <div className="space-y-2 mb-8">
          {FAQ.map((f) => (
            <details key={f.q} className="glass-card px-4 py-3 group">
              <summary className="cursor-pointer font-medium list-none flex items-center justify-between gap-3">{f.q}<span className="text-primary text-lg leading-none group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center">Telegramni ishlata olmasangiz, saytdagi profil sahifasidan ham yozishingiz mumkin. Javob odatda ish vaqtida shu kunning o'zida beriladi.</p>
      </main>
    </div>
  );
}
