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
import { BookOpen, GraduationCap, Plus, PenLine, ClipboardList, BarChart3, Copy, ArrowRight, Sparkles, Link2 } from 'lucide-react';
import { toast } from 'sonner';
import { PricingModal } from '@/components/PricingModal';
import { useSubscription } from '@/hooks/useSubscription';

type Period = { plan:'go'|'plus'; grammar_used:number; writing_used:number; starts_at:string; ends_at:string };
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
  const [showPricing,setShowPricing]=useState(false);
  const {planType}=useSubscription();
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
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">Your teaching workspace</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">Create a test in a few steps, send one link to students, then review submissions and class progress here.</p></div>
        {plan && <Button onClick={()=>setCreating(v=>!v)} className="gap-2"><Plus className="w-4 h-4"/>Create Test</Button>}
      </header>
      <section className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[.08] to-card p-5 sm:p-7">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Quick guide</p><h2 className="text-xl sm:text-2xl font-bold mt-1">From an idea to class results in three steps</h2><p className="text-sm text-muted-foreground mt-2">Students only need a free Scorify account to open your secure link and complete the assessment.</p></div>
        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            {icon:ClipboardList,n:'1',title:'Create the test',text:'Choose Grammar, Writing Task 1 or Task 2. Add questions, instructions and timing.'},
            {icon:Link2,n:'2',title:'Publish and share',text:'Publish when it is ready, then copy one secure link and send it to your students.'},
            {icon:BarChart3,n:'3',title:'Review progress',text:'See every submission, score and answer. Use class analytics to plan the next lesson.'},
          ].map(step=><div key={step.n} className="rounded-2xl border bg-background/80 p-4"><div className="flex items-center justify-between"><span className="w-9 h-9 rounded-xl bg-primary/10 text-primary grid place-items-center"><step.icon className="w-4 h-4"/></span><span className="text-xs font-bold text-primary">STEP {step.n}</span></div><h3 className="font-bold mt-4">{step.title}</h3><p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.text}</p></div>)}
        </div>
      </section>
      {loading?<div className="glass-card p-8">Loading Teacher Mode…</div>:!plan?<section className="glass-card p-6 sm:p-10 max-w-3xl">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center"><GraduationCap/></div>
        <h2 className="text-2xl font-bold mt-5">Teacher Mode is included with Scorify Go and Plus</h2><p className="text-muted-foreground mt-2">One paid subscription covers your personal IELTS practice and this teaching workspace. Test creation is unlimited; only successful student submissions use Teacher quota.</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-6">{[['Scorify Go','49,000 UZS / month','500 Grammar submissions','30 Writing evaluations'],['Scorify Plus','99,000 UZS / month','2,000 Grammar submissions','150 Writing evaluations']].map(p=><div key={p[0]} className="rounded-xl border p-5 space-y-2"><h3 className="font-bold text-lg">{p[0]}</h3><p className="text-primary font-semibold">{p[1]}</p><p className="text-sm">{p[2]}</p><p className="text-sm">{p[3]}</p><p className="text-xs text-muted-foreground">Unlimited tests · Student Mode included · 30-day period</p></div>)}</div>
        <Button className="mt-6" onClick={()=>setShowPricing(true)}>Compare Go and Plus</Button>
        {tests.length>0&&<div className="mt-7"><h3 className="font-bold mb-3">Your historical tests</h3><TestList tests={tests} copy={()=>toast.error('Renew Scorify Go or Plus before duplicating')}/></div>}
      </section>:<>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="glass-card p-5"><p className="text-sm text-muted-foreground">Current unified plan</p><p className="text-2xl font-bold mt-2">{plan.plan==='plus'?'Scorify Plus':'Scorify Go'}</p><p className="text-xs text-muted-foreground mt-2">Student and Teacher Mode · renews {new Date(plan.ends_at).toLocaleDateString()}</p></div>
          <Usage title="Grammar submissions" used={plan.grammar_used} limit={limits?.grammar??0}/>
          <Usage title="Writing evaluations" used={plan.writing_used} limit={limits?.writing??0}/>
        </div>
        {creating && <section className="glass-card p-5 sm:p-8 space-y-7 border-primary/20"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">New test</p><h2 className="text-2xl font-bold mt-1">Start with the basics</h2><p className="text-sm text-muted-foreground mt-2">First choose the test type and give it a name. Questions, timing and the student link come on the next screen.</p></div>
          <div><p className="text-sm font-semibold mb-3"><span className="text-primary mr-2">1.</span>Choose a test type</p><div className="grid sm:grid-cols-3 gap-3">{(['grammar','writing_task_1','writing_task_2'] as AssessmentType[]).map(k=><button type="button" key={k} onClick={()=>setType(k)} className={`text-left rounded-2xl border p-5 transition-all ${type===k?'border-primary bg-primary/10 ring-2 ring-primary/10':'bg-background hover:border-primary/40'}`}><div className="text-primary mb-3">{k==='grammar'?<BookOpen/>:<PenLine/>}</div><strong className="block">{typeName[k]}</strong><span className="text-xs text-muted-foreground mt-1 block">{k==='grammar'?'Multiple-choice questions with automatic scoring.':'One IELTS prompt with AI band feedback.'}</span></button>)}</div></div>
          <div className="grid sm:grid-cols-2 gap-4"><label className="text-sm font-semibold"><span className="text-primary mr-2">2.</span>Test name<Input className="mt-2" aria-label="Test name" placeholder="For example: Unit 4 Grammar" value={title} onChange={e=>setTitle(e.target.value)}/></label><label className="text-sm font-semibold"><span className="text-primary mr-2">3.</span>Student instructions<Textarea className="mt-2" aria-label="Instructions" placeholder="Optional short instructions" value={description} onChange={e=>setDescription(e.target.value)}/></label></div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2"><Button variant="outline" onClick={()=>setCreating(false)}>Cancel</Button><Button disabled={busy} onClick={create}>{busy?'Creating…':'Continue to questions'} <ArrowRight className="w-4 h-4"/></Button></div>
        </section>}
        <Tabs defaultValue="tests"><TabsList><TabsTrigger value="tests">My Tests</TabsTrigger><TabsTrigger value="results">Results</TabsTrigger></TabsList>
          <TabsContent value="tests" className="mt-5"><TestList tests={tests} copy={copy}/></TabsContent>
          <TabsContent value="results" className="mt-5"><div className="glass-card p-5 mb-4"><h2 className="font-bold">Assessment results</h2><p className="text-sm text-muted-foreground">Open a test to view participants, individual results and analytics.</p></div><TestList tests={tests.filter(t=>Boolean(t.publishedAt))} copy={copy}/></TabsContent>
        </Tabs>
      </>}
      <div className="border-t pt-5 flex flex-wrap gap-4 text-sm"><Link className="text-primary hover:underline" to="/dashboard">Student Dashboard</Link><Link className="text-primary hover:underline" to="/my-tests">My Tests as a student</Link></div>
    </main><PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType}/></div>;
}
function Usage({title,used,limit}:{title:string;used:number;limit:number}) {return <div className="glass-card p-5"><p className="text-sm text-muted-foreground">{title}</p><p className="text-2xl font-bold mt-2">{used.toLocaleString()} <span className="text-base font-normal text-muted-foreground">/ {limit.toLocaleString()}</span></p><Progress value={limit?100*used/limit:0} className="mt-4"/><p className="text-xs text-muted-foreground mt-2">This billing period</p></div>;}
function TestList({tests,copy}:{tests:Test[];copy:(t:Test)=>void}) {return tests.length?<div className="grid md:grid-cols-2 gap-4">{tests.map(t=><div className="glass-card-hover p-5" key={t.id}><div className="flex justify-between gap-3"><span className="text-xs font-semibold text-primary uppercase tracking-wide">{typeName[t.type]}</span><span className="text-xs rounded-full border px-2 py-1 capitalize">{t.state??'draft'}</span></div><h3 className="font-bold text-lg mt-3">{t.title}</h3><p className="text-sm text-muted-foreground mt-1 line-clamp-2">{t.description||'No instructions yet'}</p><div className="flex gap-2 mt-5"><Button asChild size="sm"><Link to={`/teacher/tests/${t.id}`}>Open <ArrowRight className="w-4 h-4 ml-2"/></Link></Button><Button size="sm" variant="outline" onClick={()=>copy(t)}><Copy className="w-4 h-4 mr-2"/>Duplicate</Button></div></div>)}</div>:<div className="glass-card p-10 text-center"><Sparkles className="w-9 h-9 text-primary mx-auto"/><h3 className="font-bold mt-3">No tests yet</h3><p className="text-sm text-muted-foreground mt-1">Your drafts and published tests will appear here.</p></div>;}
