import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Check, ExternalLink, Eye, ImagePlus, Loader2, Save, Send, Trash2, TriangleAlert } from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import { supabase } from '@/integrations/supabase/client';
import { useIsAdmin } from '@/hooks/useIsAdmin';
import { readingMinutes, slugify, textFromHtml, uploadBlogImage } from '@/lib/blog';

type Draft = {
  title: string; slug: string; lang: 'en' | 'uz'; excerpt: string; content_html: string; cover_image_url: string; cover_alt: string;
  tags: string; seo_title: string; seo_description: string; alt_slug: string; status: 'draft' | 'published'; published_at: string; author_name: string;
};
const EMPTY: Draft = {
  title: '', slug: '', lang: 'en', excerpt: '', content_html: '', cover_image_url: '', cover_alt: '', tags: '', seo_title: '',
  seo_description: '', alt_slug: '', status: 'draft', published_at: '', author_name: 'Scorify Team',
};
const toLocalInput = (iso: string | null) => iso ? new Date(new Date(iso).getTime() - new Date(iso).getTimezoneOffset() * 60000).toISOString().slice(0, 16) : '';

function Check1({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return <li className={`flex items-start gap-2 text-xs ${ok ? 'text-foreground' : 'text-muted-foreground'}`}>
    {ok ? <Check className="h-3.5 w-3.5 text-emerald-500 mt-0.5 shrink-0" /> : <TriangleAlert className="h-3.5 w-3.5 text-amber-500 mt-0.5 shrink-0" />}<span>{children}</span></li>;
}

export default function AdminBlogEditor() {
  const { id } = useParams();
  const isNew = !id || id === 'new';
  const navigate = useNavigate();
  const isAdmin = useIsAdmin();
  const [draft, setDraft] = useState<Draft>(EMPTY);
  const [postId, setPostId] = useState<string | null>(isNew ? null : id!);
  const [slugTouched, setSlugTouched] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [preview, setPreview] = useState(false);
  const [coverUploading, setCoverUploading] = useState(false);
  const [stats, setStats] = useState<{ views: number; unique_visitors: number; views_7d: number; views_30d: number } | null>(null);
  const coverRef = useRef<HTMLInputElement>(null);

  const patch = useCallback((p: Partial<Draft>) => { setDraft(d => ({ ...d, ...p })); setDirty(true); }, []);

  useEffect(() => {
    if (isNew || !isAdmin) return;
    (async () => {
      const { data, error } = await supabase.from('blog_posts').select('*').eq('id', id!).maybeSingle();
      if (error || !data) { toast.error('Post not found'); navigate('/admin'); return; }
      setDraft({
        title: data.title, slug: data.slug, lang: data.lang === 'uz' ? 'uz' : 'en', excerpt: data.excerpt || '', content_html: data.content_html,
        cover_image_url: data.cover_image_url || '', cover_alt: data.cover_alt || '', tags: (data.tags || []).join(', '), seo_title: data.seo_title || '',
        seo_description: data.seo_description || '', alt_slug: data.alt_slug || '', status: data.status === 'published' ? 'published' : 'draft',
        published_at: toLocalInput(data.published_at), author_name: data.author_name,
      });
      setSlugTouched(true); setLoading(false);
      const { data: st } = await supabase.rpc('admin_blog_stats');
      setStats((st || []).find(s => s.post_id === id) ?? null);
    })();
  }, [id, isNew, isAdmin, navigate]);

  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => { if (dirty) { e.preventDefault(); e.returnValue = ''; } };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const words = useMemo(() => textFromHtml(draft.content_html).split(' ').filter(Boolean).length, [draft.content_html]);
  const seo = useMemo(() => {
    const t = (draft.seo_title || draft.title).length;
    const d = (draft.seo_description || draft.excerpt).length;
    const html = draft.content_html;
    const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map(m => m[0]);
    return {
      titleOk: t >= 30 && t <= 60, descOk: d >= 110 && d <= 160, t, d,
      h2: (html.match(/<h2/g) || []).length >= 2, long: words >= 600,
      altOk: imgs.length === 0 || imgs.every(i => /alt="[^"]+"/.test(i)),
      link: /<a\b[^>]*href="(\/|https?:\/\/(www\.)?scorify\.uz)/.test(html),
      cover: !!draft.cover_image_url,
    };
  }, [draft, words]);

  const save = async (status: Draft['status']) => {
    if (!draft.title.trim()) { toast.error('Add a title first'); return; }
    const slug = (draft.slug || slugify(draft.title)).trim();
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) { toast.error('Slug may contain only lowercase letters, numbers and dashes'); return; }
    if (status === 'published' && !draft.content_html.trim()) { toast.error('Write some content before publishing'); return; }
    setSaving(true);
    const row = {
      slug, lang: draft.lang, title: draft.title.trim(), excerpt: draft.excerpt.trim() || null, content_html: draft.content_html,
      cover_image_url: draft.cover_image_url || null, cover_alt: draft.cover_alt.trim() || null,
      tags: draft.tags.split(',').map(t => t.trim().toLowerCase()).filter(Boolean).slice(0, 8),
      seo_title: draft.seo_title.trim() || null, seo_description: draft.seo_description.trim() || null,
      alt_slug: draft.alt_slug.trim() || null, status, author_name: draft.author_name.trim() || 'Scorify Team',
      reading_minutes: readingMinutes(draft.content_html),
      published_at: status === 'published' ? (draft.published_at ? new Date(draft.published_at).toISOString() : new Date().toISOString()) : (draft.published_at ? new Date(draft.published_at).toISOString() : null),
    };
    const res = postId
      ? await supabase.from('blog_posts').update(row).eq('id', postId).select('id').single()
      : await supabase.from('blog_posts').insert(row).select('id').single();
    setSaving(false);
    if (res.error) { toast.error(res.error.code === '23505' ? 'This slug is already used by another post' : res.error.message); return; }
    setDraft(d => ({ ...d, slug, status, published_at: toLocalInput(row.published_at) }));
    setDirty(false);
    toast.success(status === 'published' ? 'Published' : 'Saved');
    if (!postId) { setPostId(res.data.id); navigate(`/admin/blog/${res.data.id}`, { replace: true }); }
  };

  const remove = async () => {
    if (!postId || !window.confirm('Delete this post permanently?')) return;
    const { error } = await supabase.from('blog_posts').delete().eq('id', postId);
    if (error) { toast.error(error.message); return; }
    setDirty(false); toast.success('Post deleted'); navigate('/admin');
  };

  const uploadCover = async (file: File) => {
    setCoverUploading(true);
    try { patch({ cover_image_url: await uploadBlogImage(file) }); }
    catch (e) { toast.error(e instanceof Error ? e.message : 'Upload failed'); }
    finally { setCoverUploading(false); }
  };

  if (isAdmin === null || loading) return <LoadingScreen />;
  if (!isAdmin) { navigate('/dashboard'); return null; }

  const previewUrl = `https://www.scorify.uz/blog/${draft.slug || slugify(draft.title) || 'your-post'}`;
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Edit post" path="/admin/blog" noindex />
      <Navbar />
      <main className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"><ArrowLeft className="h-4 w-4" />Admin · Blog</Link>
          <div className="flex flex-wrap items-center gap-2">
            {dirty && <span className="text-xs text-amber-600">Unsaved changes</span>}
            <Button variant="outline" size="sm" className="gap-2" onClick={() => setPreview(p => !p)}><Eye className="h-4 w-4" />{preview ? 'Back to editing' : 'Preview'}</Button>
            {postId && draft.status === 'published' && <a href={`/blog/${draft.slug}`} target="_blank" rel="noopener noreferrer"><Button variant="outline" size="sm" className="gap-2"><ExternalLink className="h-4 w-4" />View live</Button></a>}
            <Button variant="outline" size="sm" className="gap-2" disabled={saving} onClick={() => save('draft')}>{saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}Save draft</Button>
            <Button variant="glow" size="sm" className="gap-2" disabled={saving} onClick={() => save('published')}><Send className="h-4 w-4" />{draft.status === 'published' ? 'Update' : 'Publish'}</Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-6 items-start">
          <div className="space-y-4 min-w-0">
            <input value={draft.title} onChange={(e) => { patch({ title: e.target.value, ...(slugTouched ? {} : { slug: slugify(e.target.value) }) }); }}
              placeholder="Post title" aria-label="Post title"
              className="w-full bg-transparent text-3xl sm:text-4xl font-extrabold tracking-tight outline-none placeholder:text-muted-foreground/50" />
            {preview ? (
              <article className="rounded-xl border bg-card p-6 sm:p-8">
                {draft.cover_image_url && <img src={draft.cover_image_url} alt={draft.cover_alt} className="rounded-2xl w-full mb-6" />}
                <h1 className="text-3xl font-extrabold mb-4">{draft.title}</h1>
                <div className="blog-prose" dangerouslySetInnerHTML={{ __html: draft.content_html }} />
              </article>
            ) : <RichTextEditor value={draft.content_html} onChange={(html) => patch({ content_html: html })} />}
            <p className="text-xs text-muted-foreground">{words} words · about {readingMinutes(draft.content_html)} min read</p>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <section className="glass-card p-4 space-y-3">
              <h2 className="text-sm font-semibold">Publishing</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5"><Label className="text-xs">Language</Label>
                  <Select value={draft.lang} onValueChange={(v) => patch({ lang: v as 'en' | 'uz' })}>
                    <SelectTrigger className="h-9"><SelectValue /></SelectTrigger>
                    <SelectContent><SelectItem value="en">English</SelectItem><SelectItem value="uz">O‘zbekcha</SelectItem></SelectContent>
                  </Select></div>
                <div className="space-y-1.5"><Label className="text-xs">Status</Label>
                  <p className={`h-9 rounded-md border px-3 grid items-center text-sm ${draft.status === 'published' ? 'text-emerald-600' : 'text-muted-foreground'}`}>{draft.status === 'published' ? 'Published' : 'Draft'}</p></div>
              </div>
              <div className="space-y-1.5"><Label className="text-xs">Publish date (optional)</Label>
                <Input type="datetime-local" className="h-9" value={draft.published_at} onChange={(e) => patch({ published_at: e.target.value })} /></div>
              <div className="space-y-1.5"><Label className="text-xs">Author</Label><Input className="h-9" value={draft.author_name} onChange={(e) => patch({ author_name: e.target.value })} /></div>
              {postId && <Button variant="ghost" size="sm" className="text-destructive gap-2 w-full" onClick={remove}><Trash2 className="h-4 w-4" />Delete post</Button>}
            </section>

            {stats && (
              <section className="glass-card p-4">
                <h2 className="text-sm font-semibold mb-3">Statistics</h2>
                <div className="grid grid-cols-2 gap-3 text-center">
                  {[['Total views', stats.views], ['Unique readers', stats.unique_visitors], ['Last 7 days', stats.views_7d], ['Last 30 days', stats.views_30d]].map(([l, v]) => (
                    <div key={l as string} className="rounded-xl bg-secondary/50 p-3"><p className="text-xl font-bold text-primary">{v}</p><p className="text-[11px] text-muted-foreground">{l}</p></div>))}
                </div>
              </section>
            )}

            <section className="glass-card p-4 space-y-3">
              <h2 className="text-sm font-semibold">Cover image</h2>
              {draft.cover_image_url ? <img src={draft.cover_image_url} alt="" className="rounded-xl w-full aspect-[16/9] object-cover" /> :
                <div className="rounded-xl border border-dashed aspect-[16/9] grid place-items-center text-xs text-muted-foreground">No cover yet</div>}
              <input ref={coverRef} type="file" accept="image/*" hidden onChange={(e) => { const f = e.target.files?.[0]; e.target.value = ''; if (f) void uploadCover(f); }} />
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-2 flex-1" disabled={coverUploading} onClick={() => coverRef.current?.click()}>
                  {coverUploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}{draft.cover_image_url ? 'Replace' : 'Upload'}</Button>
                {draft.cover_image_url && <Button variant="ghost" size="sm" onClick={() => patch({ cover_image_url: '', cover_alt: '' })}>Remove</Button>}
              </div>
              <Input className="h-9 text-xs" placeholder="Cover description (alt text)" value={draft.cover_alt} onChange={(e) => patch({ cover_alt: e.target.value })} />
            </section>

            <section className="glass-card p-4 space-y-3">
              <h2 className="text-sm font-semibold">Search appearance (SEO)</h2>
              <div className="rounded-xl border bg-background p-3">
                <p className="text-[11px] text-muted-foreground truncate">{previewUrl}</p>
                <p className="text-[#1a0dab] dark:text-sky-400 text-base leading-snug line-clamp-2">{(draft.seo_title || draft.title || 'Post title')} | Scorify</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{draft.seo_description || draft.excerpt || 'Add a short description. It appears under the title in Google.'}</p>
              </div>
              <div className="space-y-1.5"><Label className="text-xs">URL slug</Label>
                <Input className="h-9 font-mono text-xs" value={draft.slug} onChange={(e) => { setSlugTouched(true); patch({ slug: slugify(e.target.value) }); }} placeholder="ielts-writing-task-2-band-7-sample" /></div>
              <div className="space-y-1.5"><Label className="text-xs">SEO title <span className="text-muted-foreground">({seo.t}/60)</span></Label>
                <Input className="h-9" value={draft.seo_title} onChange={(e) => patch({ seo_title: e.target.value })} placeholder={draft.title} /></div>
              <div className="space-y-1.5"><Label className="text-xs">Meta description <span className="text-muted-foreground">({seo.d}/160)</span></Label>
                <Textarea rows={3} value={draft.seo_description} onChange={(e) => patch({ seo_description: e.target.value })} placeholder="Describe the article in one or two sentences." /></div>
              <div className="space-y-1.5"><Label className="text-xs">Short excerpt (shown on blog cards)</Label>
                <Textarea rows={2} value={draft.excerpt} onChange={(e) => patch({ excerpt: e.target.value })} /></div>
              <div className="space-y-1.5"><Label className="text-xs">Tags (comma separated)</Label>
                <Input className="h-9" value={draft.tags} onChange={(e) => patch({ tags: e.target.value })} placeholder="writing, task 2, band 7" /></div>
              <div className="space-y-1.5"><Label className="text-xs">Translation slug (other language)</Label>
                <Input className="h-9 font-mono text-xs" value={draft.alt_slug} onChange={(e) => patch({ alt_slug: slugify(e.target.value) })} placeholder="slug of the uz/en version" /></div>
              <ul className="space-y-1.5 pt-1">
                <Check1 ok={seo.titleOk}>Title 30–60 characters</Check1>
                <Check1 ok={seo.descOk}>Description 110–160 characters</Check1>
                <Check1 ok={seo.long}>At least 600 words ({words})</Check1>
                <Check1 ok={seo.h2}>Two or more H2 headings</Check1>
                <Check1 ok={seo.altOk}>Every image has alt text</Check1>
                <Check1 ok={seo.link}>Links to a Scorify page (internal link)</Check1>
                <Check1 ok={seo.cover}>Cover image set</Check1>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
