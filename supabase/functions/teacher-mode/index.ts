import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { getRequestUser, serviceClient } from '../_shared/quota.ts';
import { boundedString, isRecord, json, preflight } from '../_shared/http.ts';
import { validGrade } from '../_shared/grading.ts';

type Db = ReturnType<typeof serviceClient>;
type Row = Record<string, unknown>;
const TYPES = ['grammar', 'writing_task_1', 'writing_task_2'];
const SETTINGS = {
  timeLimit: 30, attempts: 1, questionOrder: 'fixed', optionOrder: 'fixed',
  resultVisibility: 'immediate', answerVisibility: 'never', late: 'block', resume: 'allow',
};

function fail(message: string, status = 400): never { throw Object.assign(new Error(message), { status }); }
function numberIn(v: unknown, lo: number, hi: number) { return typeof v === 'number' && Number.isInteger(v) && v >= lo && v <= hi; }
function settingsOf(v: unknown): Row {
  if (!isRecord(v)) fail('Invalid settings');
  if (JSON.stringify(v).length>4000) fail('Settings are too large');
  const allowed=['timeLimit','attempts','questionOrder','optionOrder','resultVisibility','answerVisibility','late','resume','startsAt','deadline','passScore'];
  const s:Row={...SETTINGS}; for (const key of allowed) if (key in v) s[key]=v[key];
  if (!numberIn(s.timeLimit, 1, 240) || !numberIn(s.attempts, 0, 3) ||
    !['fixed','random'].includes(String(s.questionOrder)) || !['fixed','random'].includes(String(s.optionOrder)) ||
    !['immediate','after_deadline','hidden'].includes(String(s.resultVisibility)) ||
    !['immediate','after_deadline','never'].includes(String(s.answerVisibility)) ||
    !['allow','block'].includes(String(s.late)) || !['allow','block'].includes(String(s.resume))) fail('Invalid settings');
  for (const key of ['startsAt', 'deadline']) if (s[key] != null && (typeof s[key] !== 'string' || !Number.isFinite(Date.parse(String(s[key]))))) fail('Invalid date');
  if (s.startsAt && s.deadline && Date.parse(String(s.startsAt)) >= Date.parse(String(s.deadline))) fail('Deadline must follow start');
  if (s.passScore != null && !(typeof s.passScore === 'number' && s.passScore >= 0 && s.passScore <= 100)) fail('Invalid pass score');
  return s;
}
function questionsOf(v: unknown): Row[] {
  if (!Array.isArray(v) || v.length > 100) fail('Add 1 to 100 questions');
  return v.map((q) => {
    if (!isRecord(q) || !boundedString(q.text, 1000) || !Array.isArray(q.options) || q.options.length !== 4 ||
      !q.options.every(x => boundedString(x, 300)) || !numberIn(q.correct, 0, 3)) fail('Each question needs text, four options and one correct answer');
    return { text: String(q.text).trim(), options: q.options.map((x: string) => x.trim()), correct: q.correct,
      explanation: typeof q.explanation === 'string' ? q.explanation.slice(0, 1500) : '',
      topic: typeof q.topic === 'string' ? q.topic.slice(0, 100) : '' };
  });
}
function brief(t: Row) {
  const s = (t.settings ?? {}) as Row;
  const now = Date.now();
  const state = !t.published_at ? 'draft' : s.startsAt && Date.parse(String(s.startsAt)) > now ? 'scheduled' :
    s.deadline && Date.parse(String(s.deadline)) < now ? 'finished' : 'active';
  return { id:t.id, title:t.title, type:t.type, description:t.description, settings:t.settings,
    inviteCode:t.invite_code, publishedAt:t.published_at, firstStartedAt:t.first_started_at,
    createdAt:t.created_at, state };
}
async function one(db: Db, table: string, column: string, value: string) {
  const { data, error } = await db.from(table).select('*').eq(column, value).maybeSingle();
  if (error) fail('Database temporarily unavailable', 503);
  return data as Row | null;
}
async function ownedTest(db: Db, id: string, uid: string) {
  const t = await one(db, 'teacher_tests', 'id', id);
  if (!t || t.teacher_id !== uid) fail('Test not found', 404);
  return t;
}
async function entitlement(db: Db, uid: string) {
  const { data, error } = await db.from('teacher_periods').select('*').eq('teacher_id', uid)
    .lte('starts_at', new Date().toISOString()).gt('ends_at', new Date().toISOString())
    .order('starts_at', { ascending:false }).limit(1).maybeSingle();
  if (error) fail('Could not check Teacher plan', 503);
  return data;
}
async function requirePlan(db: Db, uid: string) {
  const p = await entitlement(db, uid);
  if (!p || !['go','plus'].includes(String(p.plan))) fail('Scorify Go or Plus is required to create Teacher tests', 403);
  return p;
}
async function planLimits(db: Db, slug: unknown) {
  const { data, error } = await db.from('subscription_plans')
    .select('teacher_grammar_limit,teacher_writing_limit').eq('slug', String(slug)).eq('is_active', true).maybeSingle();
  if (error || !data) fail('Could not check Teacher quota', 503);
  return { grammar:Number(data.teacher_grammar_limit), writing:Number(data.teacher_writing_limit) };
}
function canShow(mode: unknown, deadline: unknown) {
  return mode === 'immediate' || (mode === 'after_deadline' && !!deadline && Date.now() >= Date.parse(String(deadline)));
}
function studentTest(t: Row, a?: Row | null) {
  const settings = (t.settings ?? {}) as Row;
  const questions = (t.questions ?? []) as Row[];
  const qOrder = (a?.question_order ?? questions.map((_, i) => i)) as number[];
  const oOrder = (a?.option_order ?? questions.map(() => [0,1,2,3])) as number[][];
  return { ...brief(t), prompt:t.prompt, questions:t.type === 'grammar' ? qOrder.map(i => ({
    index:i, text:questions[i].text, options:oOrder[i].map(j => ({ index:j, text:(questions[i].options as string[])[j] })), topic:questions[i].topic,
  })) : [], attempt: a ? { id:a.id, number:a.attempt_number, startedAt:a.started_at,
    submittedAt:a.submitted_at, answers:a.answers, essay:a.essay, gradeStatus:a.grade_status } : null };
}
async function attemptFor(db: Db, id: string, uid: string) {
  const a = await one(db, 'teacher_attempts', 'id', id);
  if (!a || a.student_id !== uid) fail('Attempt not found', 404);
  return a;
}
function resultFor(t: Row, a: Row, teacher: boolean) {
  const s = (t.settings ?? {}) as Row;
  const showResult = teacher || canShow(s.resultVisibility, s.deadline);
  const showAnswers = teacher || (showResult && canShow(s.answerVisibility, s.deadline));
  const qs = (t.questions ?? []) as Row[];
  return { id:a.id, number:a.attempt_number, startedAt:a.started_at, submittedAt:a.submitted_at,
    gradeStatus:a.grade_status, essay:a.essay,
    result:showResult ? a.result : null, score:showResult ? a.score : null,
    questionReview:showResult && t.type === 'grammar' ? qs.map((q,i) => ({
      text:q.text, selected:(a.answers as Row)?.[String(i)] ?? null,
      correct:showAnswers ? q.correct : undefined,
      options:q.options, explanation:showAnswers ? q.explanation : undefined,
      topic:q.topic,
    })) : null,
    resultAvailable:showResult, answersAvailable:showAnswers };
}
async function rpc(db: Db, name: string, args: Row) {
  const { data, error } = await db.rpc(name, args);
  if (error) { console.error(name, error.message); fail(error.message.replace(/[^a-z_]/g,' ').trim().slice(0,80) || 'Request failed', 409); }
  return data;
}
async function generate(prompt: string, maxTokens = 3000) {
  const key = Deno.env.get('OPENAI_API_KEY');
  if (!key) fail('AI service unavailable', 503);
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method:'POST', signal:AbortSignal.timeout(65000),
    headers:{ Authorization:`Bearer ${key}`, 'Content-Type':'application/json' },
    body:JSON.stringify({ model:'gpt-4o-mini', temperature:0.4, response_format:{ type:'json_object' },
      max_tokens:maxTokens, messages:[{ role:'system', content:'Return only a valid JSON object. Educational IELTS and grammar content must be accurate and appropriate.' },
      { role:'user', content:prompt }] }),
  });
  if (!response.ok) { console.error('Teacher AI failed', response.status); fail('AI is temporarily unavailable', 502); }
  const data = await response.json();
  try { return JSON.parse(data.choices?.[0]?.message?.content ?? '') as unknown; }
  catch { fail('AI returned invalid content', 502); }
}

serve(async req => {
  const early = preflight(req); if (early) return early;
  try {
    const db = serviceClient();
    const body: unknown = await req.json();
    if (!isRecord(body) || typeof body.action !== 'string') fail('Invalid request');
    const user = await getRequestUser(req, db);
    if (body.action === 'invite') {
      if (!boundedString(body.code, 100)) fail('Invalid invite');
      const t = await one(db, 'teacher_tests', 'invite_code', body.code);
      if (!t || !t.published_at) fail('Invite not found', 404);
      const profile = await one(db, 'profiles', 'user_id', String(t.teacher_id));
      return json(req, { ...brief(t), teacherName:profile?.full_name || 'Scorify Teacher' });
    }
    if (!user) fail('Sign in required', 401);
    const uid = user.id;
    switch (body.action) {
      case 'overview': {
        const plan = await entitlement(db, uid);
        const limits = plan ? await planLimits(db, plan.plan) : null;
        const { data: tests, error } = await db.from('teacher_tests').select('id,title,type,description,settings,invite_code,published_at,first_started_at,created_at')
          .eq('teacher_id', uid).order('created_at', { ascending:false }).limit(100);
        if (error) fail('Could not load tests',503);
        return json(req, { plan, limits,
          tests:(tests ?? []).map(brief) });
      }
      case 'create': {
        await requirePlan(db,uid);
        if (!TYPES.includes(String(body.type)) || !boundedString(body.title,160,3)) fail('Invalid test');
        const type=String(body.type);
        const payload = { teacher_id:uid, type, title:String(body.title).trim(), description:typeof body.description==='string'?body.description.slice(0,2000):'',
          prompt:type==='grammar'?'':typeof body.prompt==='string'?body.prompt.slice(0,5000):'',
          questions:type==='grammar'?questionsOf(body.questions ?? []):[], settings:settingsOf(body.settings ?? {}) };
        const { data,error } = await db.from('teacher_tests').insert(payload).select('*').single();
        if (error) fail('Could not save test',503);
        return json(req,{ test:data });
      }
      case 'test': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid);
        return json(req,{ test:t });
      }
      case 'update': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid); await requirePlan(db,uid);
        const fields:Row={};
        if (body.title!==undefined) { if (!boundedString(body.title,160,3)) fail('Invalid title'); fields.title=String(body.title).trim(); }
        if (body.description!==undefined) fields.description=String(body.description).slice(0,2000);
        if (body.settings!==undefined) fields.settings=settingsOf(body.settings);
        if (body.questions!==undefined || body.prompt!==undefined) {
          if (t.first_started_at) fail('Test content is locked after the first attempt');
          if (body.questions!==undefined && t.type==='grammar') fields.questions=questionsOf(body.questions);
          if (body.prompt!==undefined && t.type!=='grammar') fields.prompt=String(body.prompt).slice(0,5000);
        }
        const { data,error }=await db.from('teacher_tests').update(fields).eq('id',t.id).eq('teacher_id',uid).select('*').single();
        if (error) fail('Could not update test',503);
        return json(req,{ test:data });
      }
      case 'publish': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid); await requirePlan(db,uid);
        if (t.type==='grammar' && !questionsOf(t.questions).length) fail('Add questions before publishing');
        if (t.type!=='grammar' && !boundedString(t.prompt,5000,20)) fail('Add a Writing prompt before publishing');
        if (t.published_at) return json(req,{ test:t });
        const code=crypto.randomUUID().replace(/-/g,'');
        const {data,error}=await db.from('teacher_tests').update({ invite_code:code,published_at:new Date().toISOString() }).eq('id',t.id).eq('teacher_id',uid).is('published_at',null).select('*').maybeSingle();
        if (error) fail('Could not publish',503);
        return json(req,{ test:data ?? await ownedTest(db,body.id,uid) });
      }
      case 'duplicate': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid); await requirePlan(db,uid);
        const {data,error}=await db.from('teacher_tests').insert({ teacher_id:uid,type:t.type,title:`Copy of ${t.title}`.slice(0,160),
          description:t.description,prompt:t.prompt,questions:t.questions,settings:t.settings }).select('*').single();
        if (error) fail('Could not duplicate',503);
        return json(req,{ test:data });
      }
      case 'generate': {
        await requirePlan(db,uid);
        if (!await rpc(db,'teacher_claim_ai',{p_user:uid,p_kind:'generate'})) fail('AI generation rate limit reached. Try again in an hour.',429);
        if (!TYPES.includes(String(body.type))) fail('Invalid test type');
        if (body.type==='grammar') {
          if (!numberIn(body.count,1,30) || !boundedString(body.level,8) || !boundedString(body.topics,200)) fail('Invalid generation settings');
          const all:Row[]=[];
          while (all.length<Number(body.count)) {
            const wanted=Math.min(10,Number(body.count)-all.length);
            let batch:Row[]|null=null;
            for (let retry=0;retry<2 && !batch;retry++) {
              const output=await generate(`Create EXACTLY ${wanted} distinct CEFR ${body.level} multiple choice grammar questions on ${body.topics}. Additional instructions: ${String(body.instructions??'').slice(0,300)}. Avoid these existing questions: ${all.map(q=>q.text).join(' | ').slice(0,1500)}. Return {"questions":[{"text":"...","options":["A","B","C","D"],"correct":0,"explanation":"...","topic":"..."}]}. Correct is zero-based index.`, wanted*320+500);
              if (isRecord(output) && Array.isArray(output.questions) && output.questions.length===wanted) {
                try { const parsed=questionsOf(output.questions); if (parsed.every(q=>!all.some(old=>old.text===q.text))) batch=parsed; } catch { /* Retry malformed output once. */ }
              }
            }
            if (!batch) fail('AI returned incomplete questions. Try again.',502);
            all.push(...batch);
          }
          return json(req,{ questions:all });
        }
        const output=await generate(`Create one original IELTS ${body.type==='writing_task_1'?'Writing Task 1':'Writing Task 2'} prompt. Return {"prompt":"..."}. ${String(body.instructions??'').slice(0,300)}`);
        if (!isRecord(output) || !boundedString(output.prompt,5000,20)) fail('AI returned invalid prompt',502);
        return json(req,{ prompt:output.prompt });
      }
      case 'start': {
        if (typeof body.code!=='string') fail('Invalid invite');
        const t=await one(db,'teacher_tests','invite_code',body.code);
        if (!t) fail('Invite not found',404);
        const startSettings=(t.settings??{}) as Row;
        if (startSettings.deadline && startSettings.late !== 'allow' && Date.now()>Date.parse(String(startSettings.deadline))) fail('The deadline has passed',409);
        const id=await rpc(db,'teacher_start_attempt',{p_test:t.id,p_student:uid});
        const a=await attemptFor(db,String(id),uid);
        return json(req,{ test:studentTest(t,a) });
      }
      case 'attempt': {
        if (typeof body.id!=='string') fail('Invalid attempt');
        const a=await attemptFor(db,body.id,uid); const t=await one(db,'teacher_tests','id',String(a.test_id));
        if (!t) fail('Test not found',404);
        return json(req,{ test:studentTest(t,a), result:a.submitted_at?resultFor(t,a,false):null });
      }
      case 'save': {
        if (typeof body.id!=='string') fail('Invalid attempt');
        await attemptFor(db,body.id,uid);
        await rpc(db,'teacher_save_attempt',{p_attempt:body.id,p_student:uid,p_answers:body.answers??{},p_essay:body.essay??''});
        return json(req,{ ok:true });
      }
      case 'submit': {
        if (typeof body.id!=='string') fail('Invalid attempt');
        const a=await attemptFor(db,body.id,uid); const t=await one(db,'teacher_tests','id',String(a.test_id));
        if (!t) fail('Test not found',404);
        const submitSettings=(t.settings??{}) as Row;
        if (!a.submitted_at && submitSettings.deadline && submitSettings.late!=='allow' && Date.now()>Date.parse(String(submitSettings.deadline))) fail('The deadline has passed',409);
        if (t.type==='grammar') await rpc(db,'teacher_submit_grammar',{p_attempt:a.id,p_student:uid,p_answers:body.answers??{}});
        else await rpc(db,'teacher_submit_writing',{p_attempt:a.id,p_student:uid,p_essay:body.essay??''});
        const latest=await attemptFor(db,body.id,uid);
        return json(req,{ result:resultFor(t,latest,false) });
      }
      case 'grade': {
        if (typeof body.id!=='string') fail('Invalid attempt');
        const a=await attemptFor(db,body.id,uid);
        const t=await one(db,'teacher_tests','id',String(a.test_id));
        if (!t || t.type==='grammar' || !a.submitted_at) fail('Writing submission not found',404);
        if (a.grade_status==='graded') return json(req,{ result:resultFor(t,a,false) });
        const period=await entitlement(db,String(t.teacher_id));
        if (!period) fail('Teacher subscription expired',403);
        const limits=await planLimits(db,period.plan);
        if (period.writing_used >= limits.writing) fail(`You've used all ${limits.writing} Teacher Writing evaluations for this billing period.`,403);
        const claimed=await rpc(db,'teacher_claim_grading',{p_attempt:a.id});
        if (!claimed) return json(req,{ pending:true });
        try {
          if (!await rpc(db,'teacher_claim_ai',{p_user:t.teacher_id,p_kind:'grade'})) fail('AI grading rate limit reached. Retry in an hour.',429);
          const output=await generate(`You are an IELTS Writing examiner. Grade this ${t.type==='writing_task_1'?'Task 1':'Task 2'} essay strictly on official band descriptors. Prompt: ${String(t.prompt).slice(0,5000)}. Essay: ${String(a.essay).slice(0,20000)}. Return JSON with overallBand (0-9 in half bands), taskAchievement, coherenceCohesion, lexicalResource, grammaticalRange (each {score,feedback}), strengths (array), suggestions (array), errorCorrections (array of {original,corrected,explanation,type}), vocabularyAnalysis (array), coherenceCheck (array), sentenceComplexity (array).`, 4500);
          if (!validGrade(output,'writing')) fail('AI grading was incomplete',502);
          await rpc(db,'teacher_finish_grading',{p_attempt:a.id,p_grade:output});
          const latest=await attemptFor(db,body.id,uid);
          return json(req,{ result:resultFor(t,latest,false) });
        } catch (error) {
          console.error('Teacher grading failed',error);
          await db.from('teacher_attempts').update({grade_status:'failed'}).eq('id',a.id).eq('grade_status','grading');
          throw error;
        }
      }
      case 'my_tests': {
        const {data,error}=await db.from('teacher_attempts').select('id,test_id,attempt_number,started_at,submitted_at,grade_status,score')
          .eq('student_id',uid).order('started_at',{ascending:false}).limit(100);
        if (error) fail('Could not load your tests',503);
        const ids=[...new Set((data??[]).map(a=>a.test_id))];
        const {data:tests}=ids.length?await db.from('teacher_tests').select('id,title,type,settings,teacher_id,invite_code,published_at,description,created_at,first_started_at').in('id',ids):{data:[]};
        const map=new Map((tests??[]).map(t=>[t.id,t]));
        const teacherIds=[...new Set((tests??[]).map(t=>t.teacher_id))];
        const {data:profiles}=teacherIds.length?await db.from('profiles').select('user_id,full_name').in('user_id',teacherIds):{data:[]};
        const teacherNames=new Map((profiles??[]).map(p=>[p.user_id,p.full_name]));
        return json(req,{ attempts:(data??[]).map(a=>{const t=map.get(a.test_id) as Row|undefined;
          const s=(t?.settings??{}) as Row;return { ...a,score:t&&canShow(s.resultVisibility,s.deadline)?a.score:null,
            test:t?{...brief(t),teacherName:teacherNames.get(String(t.teacher_id))??'Scorify Teacher'}:null };}) });
      }
      case 'participants': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid);
        const page=numberIn(body.page,0,100000)?Number(body.page):0;
        const {data,error,count}=await db.from('teacher_attempts').select('id,student_id,attempt_number,started_at,submitted_at,grade_status,score',{count:'exact'})
          .eq('test_id',t.id).order('started_at',{ascending:false}).range(page*50,page*50+49);
        if (error) fail('Could not load participants',503);
        const uids=[...new Set((data??[]).map(a=>a.student_id))];
        const {data:profiles}=uids.length?await db.from('profiles').select('user_id,full_name,email').in('user_id',uids):{data:[]};
        const names=new Map((profiles??[]).map(p=>[p.user_id,p]));
        return json(req,{ count,attempts:(data??[]).map(a=>({ ...a,student:names.get(a.student_id)??null })) });
      }
      case 'result': {
        if (typeof body.id!=='string') fail('Invalid attempt');
        const a=await one(db,'teacher_attempts','id',body.id);
        if (!a) fail('Result not found',404);
        const t=await one(db,'teacher_tests','id',String(a.test_id)); if (!t) fail('Test not found',404);
        if (a.student_id!==uid && t.teacher_id!==uid) fail('Result not found',404);
        const student=t.teacher_id===uid?await one(db,'profiles','user_id',String(a.student_id)):null;
        return json(req,{ test:brief(t), result:resultFor(t,a,t.teacher_id===uid),
          student:student?{name:student.full_name,email:student.email}:null });
      }
      case 'analytics': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid); const plan=await entitlement(db,uid);
        const {data,error}=await db.from('teacher_attempts').select('id,answers,score,result,grade_status,submitted_at')
          .eq('test_id',t.id).not('submitted_at','is',null).limit(5000);
        if (error) fail('Could not load analytics',503);
        const attempts=data??[]; const scored=attempts.filter(a=>a.score!=null);
        if (t.type==='grammar') {
          const qs=t.questions as Row[];
          const questions=qs.map((q,i)=>{
            const dist=[0,0,0,0]; let responses=0;
            for (const a of attempts) { const x=(a.answers as Row)?.[String(i)]; if (numberIn(x,0,3)) { dist[Number(x)]++; responses++; } }
            const correct=dist[Number(q.correct)];
            return { index:i,text:q.text,topic:q.topic,correctOption:q.correct,correct:responses?correct:0,incorrect:responses-correct,
              correctPercent:responses?Math.round(100*correct/responses):0,distribution:dist,responses };
          });
          const topics:Record<string,{responses:number;correct:number}>={};
          for (const q of questions) {const name=String(q.topic||'Other'); const x=topics[name]??{responses:0,correct:0};x.responses+=q.responses;x.correct+=q.correct;topics[name]=x;}
          const passCount=attempts.filter(a=>(a.result as Row|undefined)?.passed===true).length;
          return json(req,{ type:t.type,count:attempts.length,average:scored.length?scored.reduce((n,a)=>n+Number(a.score),0)/scored.length:0,
            passRate:t.settings && (t.settings as Row).passScore!=null && attempts.length?100*passCount/attempts.length:null,
            questions,topics });
        }
        const bands:Row={}; for (const a of scored) bands[String(a.score)]=Number(bands[String(a.score)]??0)+1;
        const criteria=['taskAchievement','coherenceCohesion','lexicalResource','grammaticalRange']; const averages:Row={};
        if (plan) for (const c of criteria) {
          const values=scored.map(a=>Number((a.result as Row)?.[c] && ((a.result as Row)[c] as Row).score)).filter(Number.isFinite);
          averages[c]=values.length?values.reduce((x,y)=>x+y,0)/values.length:null;
        }
        return json(req,{ type:t.type,count:scored.length,average:scored.length?scored.reduce((n,a)=>n+Number(a.score),0)/scored.length:0,bands,criteria:averages,
          pro:Boolean(plan) });
      }
      case 'export': {
        if (typeof body.id!=='string') fail('Invalid test');
        const t=await ownedTest(db,body.id,uid); await requirePlan(db,uid);
        const {data,error}=await db.from('teacher_attempts').select('student_id,attempt_number,started_at,submitted_at,score,grade_status,result')
          .eq('test_id',t.id).order('started_at').limit(10000);
        if (error) fail('Could not export',503);
        const ids=[...new Set((data??[]).map(a=>a.student_id))];
        const {data:profiles}=ids.length?await db.from('profiles').select('user_id,full_name,email').in('user_id',ids):{data:[]};
        const names=new Map((profiles??[]).map(p=>[p.user_id,p]));
        const scoreOf=(a:Row,key:string)=>{ const c=(a.result as Row|undefined)?.[key] as Row|undefined; return typeof c?.score==='number'?c.score:null; };
        return json(req,{ rows:(data??[]).map(a=>({ student:names.get(a.student_id)?.full_name??'',email:names.get(a.student_id)?.email??'',
          attempt:a.attempt_number,status:a.grade_status,score:a.score,startedAt:a.started_at,submittedAt:a.submitted_at,
          task:scoreOf(a,'taskAchievement'),coherence:scoreOf(a,'coherenceCohesion'),
          lexical:scoreOf(a,'lexicalResource'),grammar:scoreOf(a,'grammaticalRange') })) });
      }
      default: fail('Unknown action',404);
    }
  } catch (error) {
    const status=typeof error==='object' && error && 'status' in error ? Number((error as {status:unknown}).status) : 500;
    if (status>=500) console.error('Teacher mode:',error);
    return json(req,{ error:status>=500?'Teacher Mode is temporarily unavailable':error instanceof Error?error.message:'Request failed' },status);
  }
});
