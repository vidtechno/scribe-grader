import { useState } from 'react';
import { Search, Sparkles, Users } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Input } from '@/components/ui/input';
import { PersonRow } from '@/features/social/components';
import { usePeopleSearch, useSocialList, useSuggestions, type SocialCard } from '@/features/social/api';

type Tab = 'discover' | 'following' | 'followers';

function List({ items, loading, empty }: { items: SocialCard[] | undefined; loading: boolean; empty: string }) {
  if (loading) return <div className="space-y-2">{[1, 2, 3].map((i) => <div key={i} className="h-16 rounded-xl bg-secondary/50 animate-pulse" />)}</div>;
  if (!items?.length) return <p className="text-center text-sm text-muted-foreground py-10">{empty}</p>;
  return <div className="space-y-2">{items.map((c) => <PersonRow key={c.public_id} card={c} />)}</div>;
}

export default function People() {
  const [tab, setTab] = useState<Tab>('discover');
  const [q, setQ] = useState('');
  const search = usePeopleSearch(q);
  const suggestions = useSuggestions();
  const following = useSocialList('following');
  const followers = useSocialList('followers');
  const searching = q.trim().length >= 2;

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title="Odamlar" description="O'quvchilarni toping va ularga obuna bo'ling." path="/people" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center"><Users className="h-6 w-6 text-primary" /></div>
          <div>
            <h1 className="text-2xl font-bold">Odamlar</h1>
            <p className="text-sm text-muted-foreground">Birga o'qiydigan do'stlar toping</p>
          </div>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ism yoki ID bo'yicha qidiring" className="pl-9" maxLength={60} />
        </div>

        {searching ? (
          <List items={search.data} loading={search.isLoading} empty="Hech kim topilmadi." />
        ) : (
          <>
            <div className="inline-flex rounded-lg border border-border p-0.5 mb-4">
              {([['discover', 'Faol o\'quvchilar'], ['following', `Obunalarim${following.data ? ` (${following.data.length})` : ''}`], ['followers', `Obunachilarim${followers.data ? ` (${followers.data.length})` : ''}`]] as const).map(([id, label]) => (
                <button key={id} type="button" onClick={() => setTab(id)}
                  className={`px-3 py-1.5 text-sm rounded-md ${tab === id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>{label}</button>
              ))}
            </div>
            {tab === 'discover' && (
              <>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3"><Sparkles className="h-3.5 w-3.5" />Shu hafta eng faol o'qiganlar</p>
                <List items={suggestions.data} loading={suggestions.isLoading} empty="Hozircha tavsiya yo'q. Birinchi bo'lib dars boshlang!" />
              </>
            )}
            {tab === 'following' && <List items={following.data} loading={following.isLoading} empty="Hali hech kimga obuna bo'lmagansiz." />}
            {tab === 'followers' && <List items={followers.data} loading={followers.isLoading} empty="Hali obunachilar yo'q. Muntazam o'qing — odamlar sizni topadi." />}
          </>
        )}
      </main>
    </div>
  );
}
