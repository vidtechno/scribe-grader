import { useState } from 'react';
import { Search, Sparkles, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { PersonRow } from '@/features/social/components';
import { useT } from '@/i18n';
import { usePeopleSearch, useSocialList, useSuggestions, type SocialCard } from '@/features/social/api';

type Tab = 'discover' | 'following' | 'followers';

function List({ items, loading, empty }: { items: SocialCard[] | undefined; loading: boolean; empty: string }) {
  if (loading) return <div className="space-y-2">{[1, 2, 3].map((i) => <div key={i} className="h-16 rounded-xl bg-secondary/50 animate-pulse" />)}</div>;
  if (!items?.length) return <p className="text-center text-sm text-muted-foreground py-10">{empty}</p>;
  return <div className="space-y-2">{items.map((c) => <PersonRow key={c.public_id} card={c} />)}</div>;
}

export function PeopleSection({ tab: tabProp, onTab }: { tab?: Tab; onTab?: (t: Tab) => void } = {}) {
  const { t } = useT();
  const [own, setOwn] = useState<Tab>('discover');
  const tab = tabProp ?? own;
  const setTab = (t: Tab) => { setOwn(t); onTab?.(t); };
  const [q, setQ] = useState('');
  const search = usePeopleSearch(q);
  const suggestions = useSuggestions();
  const following = useSocialList('following');
  const followers = useSocialList('followers');
  const searching = q.trim().length >= 2;

  return (
    <section id="people" className="glass-card p-6 mb-6 scroll-mt-24" aria-label={t('social.peopleAria')}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 grid place-items-center"><Users className="h-5 w-5 text-primary" /></div>
        <div>
          <h2 className="text-lg font-semibold">{t('social.peopleTitle')}</h2>
          <p className="text-sm text-muted-foreground">{t('social.peopleText')}</p>
        </div>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('social.searchPlaceholder')} className="pl-9" maxLength={60} />
      </div>

      {searching ? (
        <List items={search.data} loading={search.isLoading} empty={t('social.emptySearch')} />
      ) : (
        <>
          <div className="inline-flex flex-wrap rounded-lg border border-border p-0.5 mb-4">
            {([['discover', t('social.tabDiscover')], ['following', t('social.tabFollowing', { count: following.data ? ` (${following.data.length})` : '' })], ['followers', t('social.tabFollowers', { count: followers.data ? ` (${followers.data.length})` : '' })]] as const).map(([id, label]) => (
              <button key={id} type="button" onClick={() => setTab(id)}
                className={`px-3 py-1.5 text-sm rounded-md ${tab === id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{label}</button>
            ))}
          </div>
          {tab === 'discover' && (
            <>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3"><Sparkles className="h-3.5 w-3.5" />{t('social.mostActive')}</p>
              <List items={suggestions.data} loading={suggestions.isLoading} empty={t('social.emptyDiscover')} />
            </>
          )}
          {tab === 'following' && <List items={following.data} loading={following.isLoading} empty={t('social.emptyFollowing')} />}
          {tab === 'followers' && <List items={followers.data} loading={followers.isLoading} empty={t('social.emptyFollowers')} />}
        </>
      )}
    </section>
  );
}
