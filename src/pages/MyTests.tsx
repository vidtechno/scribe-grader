import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { teacherApi, typeName, formatDeadline, type Attempt } from '@/lib/teacher';
import { ClipboardList, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function MyTests(){const [attempts,setAttempts]=useState<Attempt[]>([]);const [loading,setLoading]=useState(true);
  useEffect(()=>{void teacherApi<{attempts:Attempt[]}>('my_tests').then(r=>setAttempts(r.attempts)).catch(e=>toast.error(e instanceof Error?e.message:'Could not load tests')).finally(()=>setLoading(false));},[]);
  return <div className="min-h-screen bg-background pb-24"><SEOHead title="My Tests" description="Your teacher assessments and results." path="/my-tests" noindex/><Navbar/><main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-10"><p className="text-sm font-semibold text-primary">Student Mode</p><h1 className="text-3xl font-bold mt-2">My Tests</h1><p className="text-muted-foreground mt-2 mb-7">Continue an assessment or review past results. Teacher assessments do not use your personal Writing allowance.</p>
    {loading?<div className="glass-card p-8">Loading tests…</div>:attempts.length?<div className="grid md:grid-cols-2 gap-4">{attempts.map(a=><Link to={`/my-tests/${a.id}`} key={a.id} className="glass-card-hover p-5 block"><div className="flex justify-between gap-2"><p className="text-xs text-primary uppercase font-semibold">{a.test?.type?typeName[a.test.type]:'Assessment'}</p><span className="text-xs rounded-full border px-2 py-1">{a.submitted_at?'Completed':'In progress'}</span></div><h2 className="text-lg font-bold mt-3">{a.test?.title??'Teacher test'}</h2><p className="text-sm text-muted-foreground mt-2">Teacher: {a.test?.teacherName??'Scorify Teacher'}</p><p className="text-sm text-muted-foreground mt-1">Deadline: {formatDeadline(a.test?.settings?.deadline)}</p><div className="flex justify-between items-center mt-5"><span className="text-sm">{a.submitted_at?(a.score!=null?`Score ${a.score}`:a.grade_status==='graded'?'Result ready':'Grading pending'):`Attempt ${a.attempt_number}`}</span><ArrowRight className="w-4 h-4 text-primary"/></div></Link>)}</div>:<div className="glass-card p-10 text-center"><ClipboardList className="w-10 h-10 text-primary mx-auto"/><h2 className="text-xl font-bold mt-4">No teacher tests yet</h2><p className="text-sm text-muted-foreground mt-2">Open an invite link from your teacher to join a test.</p><Button asChild className="mt-5"><Link to="/dashboard">Student Dashboard</Link></Button></div>}
  </main></div>;
}
