import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { teacherApi, typeName, defaultSettings, type AssessmentType, type Test } from '@/lib/teacher';
import { BookOpen, GraduationCap, Plus, PenLine, ClipboardList, BarChart3, Copy, ArrowRight, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

type Period = { plan:'teacher'|'teacher_pro'; grammar_used:number; writing_used:number; starts_at:string; ends_at:string };
export default function TeacherMode() {
  const [plan,setPlan]=useState<Period|null>(null);
  const [limits,setLimits]=useState<{grammar:number;writing:number}|null>(null);
  const [tests,setTests]=useState<Test[]>([]);
  const [loading,setLoading]=useState(true);
  const [busy,setBusy]=useState(false);
  const [creating,setCreating]=useState(false);
  const [type,setType]=useState<AssessmentType>('grammar');
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const navigate=useNavigate();
  const load=async()=>{ try { const r=await teacherApi<{plan:Period|null;limits:{grammar:number;writing:number}|null;tests:Test[]}>('overview');
    setPlan(r.plan);setLimits(r.limits);setTests(r.tests); } catch(e) { toast.error(e instanceof Error?e.message:'Could not load Teacher Mode'); } finally {setLoading(false);} };
  useEffect(()=>{void load();},[]);
  const create=async()=>{ if(title.trim().length<3) {toast.error('Add a test name');return;} setBusy(true);
    try { const r=await teacherApi<{test:Test}>('create',{type,title:title.trim(),description,questions:[],settings:defaultSettings}); navigate(`/teacher/tests/${r.test.id}`); }
    catch(e){toast.error(e instanceof Error?e.message:'Could not create test');}finally{setBusy(false);} };
  const copy=async(t:Test)=>{try{const r=await teacherApi<{test:Test}>('duplicate',{id:t.id});toast.success('Draft copy created');navigate(`/teacher/tests/${r.test.id}`);}catch(e){toast.error(e instanceof Error?e.message:'Could not duplicate');}};
  return <div className="min-h-screen bg-background pb-24"><SEOHead title="Teacher Mode" description="Create and manage IELTS assessments on Scorify." path="/teacher" noindex/><Navbar/>
    <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-10 space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div><span className="inline-flex items-center gap-2 text-primary text-sm font-semibold"><GraduationCap className="w-4 h-4"/> Teacher Mode</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Teach with Scorify</h1>
          <p className="text-muted-foreground mt-2">Create assessments, share an invite, and follow every learner's progress.</p></div>
        {plan && <Button onClick={()=>setCreating(v=>!v)} className="gap-2"><Plus className="w-4 h-4"/>Create Test</Button>}
      </header>
      {loading?<div className="glass-card p-8">Loading Teacher Mode…</div>:!plan?<section className="glass-card p-6 sm:p-10 max-w-3xl">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center"><GraduationCap/></div>
        <h2 className="text-2xl font-bold mt-5">Teacher access</h2><p className="text-muted-foreground mt-2">Your Student account stays the same. A Teacher subscription unlocks unlimited test creation and usage based on completed student submissions.</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">{[['Teacher','49,000 UZS / month','750 Grammar submissions','50 Writing evaluations'],['Teacher Pro','99,000 UZS / month','3,500 Grammar submissions','250 Writing evaluations']].map(p=><div key={p[0]} className="rounded-xl border p-5 space-y-2"><h3 className="font-bold text-lg">{p[0]}</h3><p className="text-primary font-semibold">{p[1]}</p><p className="text-sm">{p[2]}</p><p className="text-sm">{p[3]}</p><p className="text-xs text-muted-foreground">Unlimited tests · 30-day period</p></div>)}</div>
        <p className="text-sm text-muted-foreground mt-5">Contact Scorify support to activate a Teacher plan. Your Student subscription remains independent.</p>
        {tests.length>0&&<div className="mt-7"><h3 className="font-bold mb-3">Your historical tests</h3><TestList tests={tests} copy={()=>toast.error('Renew a Teacher plan before duplicating')}/></div>}
      </section>:<>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="glass-card p-5"><p className="text-sm text-muted-foreground">Current plan</p><p className="text-2xl font-bold mt-2">{plan.plan==='teacher_pro'?'Teacher Pro':'Teacher'}</p><p className="text-xs text-muted-foreground mt-2">Renews {new Date(plan.ends_at).toLocaleDateString()}</p></div>
          <Usage title="Grammar submissions" used={plan.grammar_used} limit={limits?.grammar??0}/>
          <Usage title="Writing evaluations" used={plan.writing_used} limit={limits?.writing??0}/>
        </div>
        {creating && <section className="glass-card p-5 sm:p-7 space-y-5"><div><h2 className="text-xl font-bold">New assessment</h2><p className="text-sm text-muted-foreground">Create a draft. You can add content, settings and publish it later.</p></div>
          <div className="grid sm:grid-cols-3 gap-3">{(['grammar','writing_task_1','writing_task_2'] as AssessmentType[]).map(k=><button type="button" key={k} onClick={()=>setType(k)} className={`text-left rounded-xl border p-4 transition-colors ${type===k?'border-primary bg-primary/10':'hover:border-primary/50'}`}><div className="text-primary mb-3">{k==='grammar'?<BookOpen/>:<PenLine/>}</div><strong>{typeName[k]}</strong></button>)}</div>
          <Input aria-label="Test name" placeholder="Test name" value={title} onChange={e=>setTitle(e.target.value)}/><Textarea aria-label="Instructions" placeholder="Instructions for students (optional)" value={description} onChange={e=>setDescription(e.target.value)}/>
          <div className="flex gap-2"><Button disabled={busy} onClick={create}>{busy?'Creating…':'Create draft'}</Button><Button variant="outline" onClick={()=>setCreating(false)}>Cancel</Button></div>
        </section>}
        <Tabs defaultValue="tests"><TabsList><TabsTrigger value="tests">My Tests</TabsTrigger><TabsTrigger value="results">Results</TabsTrigger></TabsList>
          <TabsContent value="tests" className="mt-5"><TestList tests={tests} copy={copy}/></TabsContent>
          <TabsContent value="results" className="mt-5"><div className="glass-card p-5 mb-4"><h2 className="font-bold">Assessment results</h2><p className="text-sm text-muted-foreground">Open a test to view participants, individual results and analytics.</p></div><TestList tests={tests.filter(t=>Boolean(t.publishedAt))} copy={copy}/></TabsContent>
        </Tabs>
      </>}
      <div className="border-t pt-5 flex flex-wrap gap-4 text-sm"><Link className="text-primary hover:underline" to="/dashboard">Student Dashboard</Link><Link className="text-primary hover:underline" to="/my-tests">My Tests as a student</Link></div>
    </main></div>;
}
function Usage({title,used,limit}:{title:string;used:number;limit:number}) {return <div className="glass-card p-5"><p className="text-sm text-muted-foreground">{title}</p><p className="text-2xl font-bold mt-2">{used.toLocaleString()} <span className="text-base font-normal text-muted-foreground">/ {limit.toLocaleString()}</span></p><Progress value={limit?100*used/limit:0} className="mt-4"/><p className="text-xs text-muted-foreground mt-2">This billing period</p></div>;}
function TestList({tests,copy}:{tests:Test[];copy:(t:Test)=>void}) {return tests.length?<div className="grid md:grid-cols-2 gap-4">{tests.map(t=><div className="glass-card-hover p-5" key={t.id}><div className="flex justify-between gap-3"><span className="text-xs font-semibold text-primary uppercase tracking-wide">{typeName[t.type]}</span><span className="text-xs rounded-full border px-2 py-1 capitalize">{t.state??'draft'}</span></div><h3 className="font-bold text-lg mt-3">{t.title}</h3><p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.description||'No instructions yet'}</p><div className="flex gap-2 mt-5"><Button asChild size="sm"><Link to={`/teacher/tests/${t.id}`}>Open <ArrowRight className="w-4 h-4 ml-2"/></Link></Button><Button size="sm" variant="outline" onClick={()=>copy(t)}><Copy className="w-4 h-4 mr-2"/>Duplicate</Button></div></div>)}</div>:<div className="glass-card p-10 text-center"><Sparkles className="w-9 h-9 text-primary mx-auto"/><h3 className="font-bold mt-3">No tests yet</h3><p className="text-sm text-muted-foreground mt-1">Your drafts and published tests will appear here.</p></div>;}
