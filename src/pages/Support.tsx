import { useLocation } from 'react-router-dom';
import { ArrowRight, CreditCard, Headphones, KeyRound, LifeBuoy, MessageCircle, Send, Wrench } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { useT } from '@/i18n';
import { SUPPORT_TOPICS, SUPPORT_USERNAME, supportLink } from '@/lib/support';

const ICONS: Record<string, typeof LifeBuoy> = { payment: CreditCard, lesson: Headphones, technical: Wrench, account: KeyRound, other: MessageCircle };

const FAQ_IDS = [1, 2, 3, 4, 5];

/** A page with one job: get the person to the support chat in Telegram with the question already written. */
export default function Support() {
  const { t } = useT();
  const { user, profile } = useAuth();
  const { planName } = useSubscription();
  const { pathname } = useLocation();
  const ctx = { publicId: profile?.public_id, email: user?.email, plan: user ? planName : null, page: pathname };
  return (
    <div className="min-h-screen bg-background pb-28 md:pb-12">
      <SEOHead title={t('support.seoTitle')} description={t('support.seoDesc')} path="/support" />
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 text-primary items-center justify-center mb-3"><LifeBuoy className="h-7 w-7" /></span>
          <h1 className="text-3xl font-extrabold mb-2">{t('support.h1')}</h1>
          <p className="text-muted-foreground max-w-md mx-auto">{t('support.lead')}</p>
        </div>

        <a href={supportLink(null, ctx)} target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-primary to-brand-red-soft text-primary-foreground font-bold py-4 mb-6 shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity">
          <Send className="h-5 w-5" />{t('support.write', { user: SUPPORT_USERNAME })}
        </a>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t('support.about')}</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {SUPPORT_TOPICS.map((topic) => {
            const Icon = ICONS[topic.id] ?? MessageCircle;
            return (
              <a key={topic.id} href={supportLink(topic, ctx)} target="_blank" rel="noopener noreferrer" className="group glass-card-hover p-4 flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0"><Icon className="h-5 w-5" /></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold">{t(`support.topic.${topic.id}.title`)}</span><span className="block text-xs text-muted-foreground">{t(`support.topic.${topic.id}.text`)}</span></span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            );
          })}
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{t('support.faq')}</h2>
        <div className="space-y-2 mb-8">
          {FAQ_IDS.map((n) => (
            <details key={n} className="glass-card px-4 py-3 group">
              <summary className="cursor-pointer font-medium list-none flex items-center justify-between gap-3">{t(`support.faq.${n}.q`)}<span className="text-primary text-lg leading-none group-open:rotate-45 transition-transform">+</span></summary>
              <p className="text-sm text-muted-foreground mt-2">{t(`support.faq.${n}.a`)}</p>
            </details>
          ))}
        </div>
        <p className="text-xs text-muted-foreground text-center">{t('support.footer')}</p>
      </main>
    </div>
  );
}
